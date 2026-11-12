---
pcr_id: pcr.constructions-and-construction-services.construction-services.general-construction-services-of-dams
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing concrete dam dry-installed drained PVC geocomposite upstream-face waterproofing rehabilitation services


## 1. Scope and Applicability

This PCR covers one completed rehabilitation service on a structurally qualified existing concrete dam: an exposed factory-bonded PVC/nonwoven geotextile barrier installed in dry accessible conditions, mechanically anchored and tensioned, with watertight perimeter and a continuous drained interface. The retained dam is the established parent state. The service independently restores its upstream surface waterproofing by integrating sheet, anchor, perimeter and drain components; these are one integrated responsibility and are not duplicate finishing and assembly inventories. Dry access requires actual owner-approved drawdown, shutdown and dewatering where necessary. It excludes a new dam, whole structural reconstruction, embankment blanket, crack-only repair and underwater or flowing-water mattress/zipper installation. No avoided dam manufacture, lost generation credit or guaranteed zero leakage is inferred. [carpi-dam-rehab; carpi-dry-execution; cazzuffi-geosynthetic-barriers]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.general-construction-services-of-dams |
| classification_refs | CPC 3.0 54233; narrower |
| covered_products | Dry-installed exposed drained PVC geocomposite upstream-face rehabilitation on existing concrete dams |
| excluded_products | New dams; submerged/flowing-water methods; embankment blankets; crack-only treatments; operating-reservoir service |
| representative_product | Accepted pressure-qualified membrane/anchor/perimeter/drain system on an identified retained concrete face |
| production_route | Approved dry access; substrate qualification and actual local preparation; drainage/anchors; sheet installation and field seams; tensioning/perimeter completion; testing, defect closure and signed handover |
| market_state | Completed accepted rehabilitation service, not membrane supply alone or a new dam asset |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted upstream-face waterproofing rehabilitation on the declared retained concrete dam |
| How much | 1 m2 |
| How well | Actual approved retained-dam/substrate/head-compatible design; seam, anchor/tension, perimeter and drainage QA meeting project criteria; closed defects/retests and signed owner acceptance. |
| How long or cycle | One identified rehabilitation job, from approved preparation through signed acceptance across all actual phases/reporting periods; no promised service life |
| reference_flow_link | `accepted_waterproofing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted dry-installed drained PVC geocomposite concrete-dam upstream-face waterproofing rehabilitation |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | dam/site and work-package IDs; retained structural condition; actual head and water-level envelope; dry-access and shutdown arrangement; net developed coverage and exclusions; surface geometry and penetrations and seams/laps; factory sheet specification; anchor design and tension; perimeter pressure design; drainage layout/destination; approved QA criteria and tests and defects/retests and signed acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_area | accepted_waterproofing | Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2 | m2 | A > 0 is unique net developed accepted waterproofed surface in the as-built survey. Exclude laps, layers, coupons, roll purchases, unaccepted faces and repeated attempts. One accepted patch contributes once. |
| native_supply | liner_supply; anchor_profiles_anchor; anchor_profiles_tension; atomic_anchor_profiles; anchor_fasteners_anchor; anchor_fasteners_drain_fitting; anchor_fasteners_repair_kit; anchor_fasteners_cleaning_item; anchor_fasteners_test_item; atomic_anchor_fasteners; perimeter_seals_strip; perimeter_seals_gasket; atomic_perimeter_seals; drain_components_collector; drain_components_conduit; drain_components_outlet; atomic_drain_components; additional_geonet_drainage; additional_geonet_antipuncture; atomic_additional_geonet; repair_auxiliaries_repair; repair_auxiliaries_grout; repair_auxiliaries_seam; atomic_repair_auxiliaries; clean_test_supplies_preparation; clean_test_supplies_cleaner; clean_test_supplies_containment; clean_test_supplies_test; clean_test_supplies_packaging; atomic_clean_test_supplies; fuel_supply | Actual supplied physical property | Actual native unit | Preserve actual SKU quantities and units, separating installed final material, wet use/mix, dry constituents, cured state, returns, wastes and releases. No area/length/count-to-mass inference; any independently needed conversion retains actual quantity/unit, density or unit mass, state, temperature and source. Installed retained final material excludes waste, releases and usable returns; wet use/mix activity is nonadditive. Factory composite or kit and constituent purchases are exclusive. |
| energy_preservation | electricity; fuel_supply; atomic_bounded_services; shared_assets_access; shared_assets_pump; shared_assets_welder; shared_assets_test; atomic_shared_assets | Actual compatible physical property | Actual compatible unit | Preserve kWh, actual supplied fuel units, native provider units and measured asset drivers separately; no heat-value or Count surrogate for missing energy/time/service support. Match actual dataset boundaries and independently verify all exchange support. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing retained concrete dam and water-level state, structurally qualified for approved rehabilitation; not a new material input |
| starting_condition_role | existing_asset_state |
| product_classification_scope | Narrow repair subset of dam construction services; excludes new whole asset and underwater routes |
| recursive_input_rule | A separately supplied same-category service requires its actual accepted scope and upstream dataset; do not recursively buy this same integrated job or invent an existing-dam production exchange |
| upstream_dataset_requirement | Attach compatible upstream datasets for actual products, utilities, fuels, freight, providers and asset shares, with boundaries and exclusions reconciled |
| disclosure | dam/site and work-package IDs; retained structural condition; actual head and water-level envelope; dry-access and shutdown arrangement; net developed coverage and exclusions; surface geometry and penetrations and seams/laps; factory sheet specification; anchor design and tension; perimeter pressure design; drainage layout/destination; approved QA criteria and tests and defects/retests and signed acceptance date |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers one completed rehabilitation service on a structurally qualified existing concrete dam: an exposed factory-bonded PVC/nonwoven geotextile barrier installed in dry accessible conditions, mechanically anchored and tensioned, with watertight perimeter and a continuous drained interface. The retained dam is the established parent state. The service independently restores its upstream surface waterproofing by integrating sheet, anchor, perimeter and drain components; these are one integrated responsibility and are not duplicate finishing and assembly inventories. Dry access requires actual owner-approved drawdown, shutdown and dewatering where necessary. It excludes a new dam, whole structural reconstruction, embankment blanket, crack-only repair and underwater or flowing-water mattress/zipper installation. No avoided dam manufacture, lost generation credit or guaranteed zero leakage is inferred. [carpi-dam-rehab; carpi-dry-execution; cazzuffi-geosynthetic-barriers] | `carpi-dam-rehab`; `carpi-dry-execution`; `cazzuffi-geosynthetic-barriers` |
| b_route | rehabilitate | Retain actual qualified concrete substrate and pressure/anchor design. Include actual preparation, local repair, separate cushion/drainage if engineered, field seams, tension, perimeter and drain continuity. Additional geonet is conditional; factory-bonded geotextile is already in the composite. | carpi-dam-rehab; cazzuffi-geosynthetic-barriers |
| b_gate | accepted_waterproofing | Actual competent design verifies substrate, anchor pull-out/attachment and pressure-appropriate perimeter. Required actual seam, connection, anchor, perimeter and drain tests must meet approved criteria; repair and retest defects before signed owner handover. Include impoundment/leakage observation only as required by approved actual handover; no brochure guarantee or universal test list. | carpi-dam-rehab; cazzuffi-geosynthetic-barriers |
| b_resources | rehabilitate | Own all incremental shutdown/drawdown/dewatering, access, containment, preparation, cleaning, welding, cure, tests, rework, cleanup and actual water fate through acceptance. Providers must disclose paid-for actual resources and coverage; unknown is not zero. Operations after handover are outside this service; no future energy or water saving credits. | carpi-dry-execution |
| b_period | rehabilitate | Index preparation, installation, curing if actual, tests, rework, cleanup and acceptance across every reporting period. Reconcile opening and closing stocks and outstanding defects. Shared assets cover manufacture, maintenance, replacement and end-of-life across all consumers and periods, not this job alone. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rehabilitate | Dry surface finishing waterproofing rehabilitation | required | Actual dry access on qualified retained concrete face | Restore established upstream surface; preparation, joining, drainage, tests and defect closure owned here | accepted_waterproofing |

### Process: Dry waterproofing rehabilitation (`rehabilitate`)

The established parent is the existing qualified concrete face. This node joins the separate component roles into the completed exposed drained waterproofing system, with actual joining/welding services and finished-surface acceptance. It owns local preparation/repair, dry access, shared equipment, test/coupon losses, defective assemblies and all rework. No new-dam parent-product purchase or extra internal finished-surface output is created. Failed seams, anchors, perimeter or drains remain rejected; repair/retest loops carry the same defect and job IDs, and actual discards/usable returns exit through the cards below.

#### Inputs

##### Product flows

###### Factory PVC/nonwoven geotextile composite sheet supplied (`liner_supply`)

Factory PVC/nonwoven geotextile composite sheet supplied. Record actual material state and attributed physical quantity.

- Selected flow: Factory PVC/nonwoven geotextile composite sheet supplied
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Attributable gross supplied sheet area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cazzuffi-geosynthetic-barriers`

Range evidence need: Actual roll width/length, bonded construction, thickness, cutting layout, laps and losses are needed for the same dam-face geometry; historical typical thickness is not a purchase factor.

###### Mechanical anchor profile (`anchor_profiles_anchor`)

One actual independently identified mechanical anchor profile. This is a conditional independent object supported within the original anchor_profiles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Mechanical anchoring and tensioning profiles. Record actual material state and attributed physical quantity.

- Selected flow: Mechanical anchor profile
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_anchor_profiles_anchor_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied profile length / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Mechanical tensioning profile (`anchor_profiles_tension`)

One actual independently identified mechanical tensioning profile. This is a conditional independent object supported within the original anchor_profiles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Mechanical anchoring and tensioning profiles. Record actual material state and attributed physical quantity.

- Selected flow: Mechanical tensioning profile
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_anchor_profiles_tension_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied profile length / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Complete anchor assembly (`anchor_fasteners_anchor`)

One actual independently identified complete anchor assembly. This is a conditional independent object supported within the original anchor_fasteners scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record actual counted supplies, including anchor assemblies, drain fittings, packaged repair kits or cleaning/test items only when supplied in native Count. Match return_count and never repurchase kit constituents. Length-, area-, volume- and mass-measured supplies have separate owners.

- Selected flow: Complete anchor assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_anchor_fasteners_anchor_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied actual count / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied counted drain fitting (`anchor_fasteners_drain_fitting`)

One actual independently identified separately supplied counted drain fitting. This is a conditional independent object supported within the original anchor_fasteners scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record actual counted supplies, including anchor assemblies, drain fittings, packaged repair kits or cleaning/test items only when supplied in native Count. Match return_count and never repurchase kit constituents. Length-, area-, volume- and mass-measured supplies have separate owners.

- Selected flow: Separately supplied counted drain fitting
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_anchor_fasteners_drain_fitting_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied actual count / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Complete packaged repair kit (`anchor_fasteners_repair_kit`)

One actual independently identified complete packaged repair kit. This is a conditional independent object supported within the original anchor_fasteners scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record actual counted supplies, including anchor assemblies, drain fittings, packaged repair kits or cleaning/test items only when supplied in native Count. Match return_count and never repurchase kit constituents. Length-, area-, volume- and mass-measured supplies have separate owners.

- Selected flow: Complete packaged repair kit
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_anchor_fasteners_repair_kit_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied actual count / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Count-supplied cleaning article (`anchor_fasteners_cleaning_item`)

One actual independently identified count-supplied cleaning article. This is a conditional independent object supported within the original anchor_fasteners scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record actual counted supplies, including anchor assemblies, drain fittings, packaged repair kits or cleaning/test items only when supplied in native Count. Match return_count and never repurchase kit constituents. Length-, area-, volume- and mass-measured supplies have separate owners.

- Selected flow: Count-supplied cleaning article
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_anchor_fasteners_cleaning_item_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied actual count / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Count-supplied test article (`anchor_fasteners_test_item`)

One actual independently identified count-supplied test article. This is a conditional independent object supported within the original anchor_fasteners scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record actual counted supplies, including anchor assemblies, drain fittings, packaged repair kits or cleaning/test items only when supplied in native Count. Match return_count and never repurchase kit constituents. Length-, area-, volume- and mass-measured supplies have separate owners.

- Selected flow: Count-supplied test article
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_anchor_fasteners_test_item_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied actual count / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Pressure-qualified perimeter strip (`perimeter_seals_strip`)

One actual independently identified pressure-qualified perimeter strip. This is a conditional independent object supported within the original perimeter_seals scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Pressure-qualified perimeter strips and gaskets. Record actual material state and attributed physical quantity.

- Selected flow: Pressure-qualified perimeter strip
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_perimeter_seals_strip_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied perimeter component length / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Pressure-qualified perimeter gasket (`perimeter_seals_gasket`)

One actual independently identified pressure-qualified perimeter gasket. This is a conditional independent object supported within the original perimeter_seals scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Pressure-qualified perimeter strips and gaskets. Record actual material state and attributed physical quantity.

- Selected flow: Pressure-qualified perimeter gasket
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_perimeter_seals_gasket_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied perimeter component length / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Length-supplied drain collector (`drain_components_collector`)

One actual independently identified length-supplied drain collector. This is a conditional independent object supported within the original drain_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record only actual length-measured collectors, conduits and discharge components. Independently supplied counted fittings belong to anchor_fasteners; no fictitious length conversion is allowed.

- Selected flow: Length-supplied drain collector
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_drain_components_collector_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied drain component length / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Length-supplied drain conduit (`drain_components_conduit`)

One actual independently identified length-supplied drain conduit. This is a conditional independent object supported within the original drain_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record only actual length-measured collectors, conduits and discharge components. Independently supplied counted fittings belong to anchor_fasteners; no fictitious length conversion is allowed.

- Selected flow: Length-supplied drain conduit
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_drain_components_conduit_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied drain component length / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Length-supplied discharge conduit (`drain_components_outlet`)

One actual independently identified length-supplied discharge conduit. This is a conditional independent object supported within the original drain_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record only actual length-measured collectors, conduits and discharge components. Independently supplied counted fittings belong to anchor_fasteners; no fictitious length conversion is allowed.

- Selected flow: Length-supplied discharge conduit
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_drain_components_outlet_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied drain component length / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Independent additional drainage sheet (`additional_geonet_drainage`)

One actual independently identified independent additional drainage sheet. This is a conditional independent object supported within the original additional_geonet scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Additional drainage or anti-puncture sheet where required. Record actual material state and attributed physical quantity.

- Selected flow: Independent additional drainage sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_additional_geonet_drainage_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied additional sheet area / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Independent additional anti-puncture sheet (`additional_geonet_antipuncture`)

One actual independently identified independent additional anti-puncture sheet. This is a conditional independent object supported within the original additional_geonet scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Additional drainage or anti-puncture sheet where required. Record actual material state and attributed physical quantity.

- Selected flow: Independent additional anti-puncture sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_additional_geonet_antipuncture_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied additional sheet area / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Local substrate repair formulation (`repair_auxiliaries_repair`)

One actual independently identified local substrate repair formulation. This is a conditional independent object supported within the original repair_auxiliaries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only native mass-measured actual repair/grout/seam products belong here; actual Count kits or Volume liquid supply belongs to the matching native-unit card. Factory kits and individual constituents are exclusive purchases.

- Selected flow: Local substrate repair formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_repair_auxiliaries_repair_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Attributable gross supplied product mass / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Anchor grout formulation (`repair_auxiliaries_grout`)

One actual independently identified anchor grout formulation. This is a conditional independent object supported within the original repair_auxiliaries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only native mass-measured actual repair/grout/seam products belong here; actual Count kits or Volume liquid supply belongs to the matching native-unit card. Factory kits and individual constituents are exclusive purchases.

- Selected flow: Anchor grout formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_repair_auxiliaries_grout_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Attributable gross supplied product mass / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Compatible seam auxiliary formulation (`repair_auxiliaries_seam`)

One actual independently identified compatible seam auxiliary formulation. This is a conditional independent object supported within the original repair_auxiliaries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only native mass-measured actual repair/grout/seam products belong here; actual Count kits or Volume liquid supply belongs to the matching native-unit card. Factory kits and individual constituents are exclusive purchases.

- Selected flow: Compatible seam auxiliary formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_repair_auxiliaries_seam_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Attributable gross supplied product mass / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Preparation consumable product (`clean_test_supplies_preparation`)

One actual independently identified preparation consumable product. This is a conditional independent object supported within the original clean_test_supplies scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record only native mass-measured preparation, cleaning, containment, test and packaging consumables. Actual Count, Area, Length or Volume supplies use their matching separate native-unit supply cards, including their returns; these are mutually exclusive purchases.

- Selected flow: Preparation consumable product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_clean_test_supplies_preparation_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Attributable gross supplied consumable mass / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Cleaning formulation (`clean_test_supplies_cleaner`)

One actual independently identified cleaning formulation. This is a conditional independent object supported within the original clean_test_supplies scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record only native mass-measured preparation, cleaning, containment, test and packaging consumables. Actual Count, Area, Length or Volume supplies use their matching separate native-unit supply cards, including their returns; these are mutually exclusive purchases.

- Selected flow: Cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_clean_test_supplies_cleaner_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Attributable gross supplied consumable mass / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Containment consumable product (`clean_test_supplies_containment`)

One actual independently identified containment consumable product. This is a conditional independent object supported within the original clean_test_supplies scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record only native mass-measured preparation, cleaning, containment, test and packaging consumables. Actual Count, Area, Length or Volume supplies use their matching separate native-unit supply cards, including their returns; these are mutually exclusive purchases.

- Selected flow: Containment consumable product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_clean_test_supplies_containment_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Attributable gross supplied consumable mass / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Mass-measured expendable test supply (`clean_test_supplies_test`)

One actual independently identified mass-measured expendable test supply. This is a conditional independent object supported within the original clean_test_supplies scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record only native mass-measured preparation, cleaning, containment, test and packaging consumables. Actual Count, Area, Length or Volume supplies use their matching separate native-unit supply cards, including their returns; these are mutually exclusive purchases.

- Selected flow: Mass-measured expendable test supply
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_clean_test_supplies_test_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Attributable gross supplied consumable mass / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied packaging product (`clean_test_supplies_packaging`)

One actual independently identified separately supplied packaging product. This is a conditional independent object supported within the original clean_test_supplies scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record only native mass-measured preparation, cleaning, containment, test and packaging consumables. Actual Count, Area, Length or Volume supplies use their matching separate native-unit supply cards, including their returns; these are mutually exclusive purchases.

- Selected flow: Separately supplied packaging product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_clean_test_supplies_packaging_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Attributable gross supplied consumable mass / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Water supplied for preparation, cleaning, repair and testing (`job_water`)

Water supplied for preparation, cleaning, repair and testing. Record actual material state and attributed physical quantity.

- Selected flow: Water supplied for preparation, cleaning, repair and testing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Attributable supplied water volume / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`

Range evidence need: Need phase-separated metering and provider water, recirculation and final fate; reservoir water state is not a purchased input.

###### Actual fuel supplied to job equipment (`fuel_supply`)

Each actual fuel SKU/state has one Mass/kg supply exchange. All original fuel_volume_supply records and cp_fuel volume/unit/stock/density/state/temperature observations remain auxiliary measurements and native physical closure, never another supply or usable-return view. Net weigh fuel, or convert actual volume with evidenced same-SKU/state density, volume unit and temperature (and pressure basis for gas); missing evidence blocks completion. Compatible repair/cleaning formulations likewise use only their selected Mass/kg children; original native_volume_supplies and cp_material volume observations remain auxiliary conversions of those same physical products. Complete Count kits and separately supplied formulation/components remain exclusive purchases.

- Selected flow: Actual fuel supplied to job equipment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable gross supplied fuel mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`

Range evidence need: Need actual fuel grade, opening/receipts/closing, returns, burn, nonburned waste and losses; measured density/state/temperature supports any volume conversion.

###### Actual job electricity including providers (`electricity`)

Actual job electricity including providers. Record actual material state and attributed physical quantity.

- Selected flow: Actual job electricity including providers
- Flow property / unit: Energy / kWh
- Amount rule: Attributable metered electricity / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

Range evidence need: Need actual welding, pumping, access, lighting and test meters or substantiated equipment load records, supply mix and failed-attempt demand.

###### Actual job freight service (`freight`)

Actual job freight service. Record actual material state and attributed physical quantity.

- Selected flow: Actual job freight service
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Attributable actual mass-distance transport work / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`

Range evidence need: Need actual net cargo mass, legs, distances, load sharing, empty running and returns, with matching transport dataset coverage.


###### Lifecycle-complete access asset hour service (`shared_assets_access`)

One actual independently identified lifecycle-complete access asset hour service. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Use this hour-based service card only for an actual compatible measured operating-hour driver and a provider/upstream service that covers complete-life manufacture, maintenance, replacements and end-of-life per h. Rental duration or price is not a measured operating driver. If the actual driver/unit differs, retain its actual native inventory and independently verify compatible support before finalization.

- Selected flow: Lifecycle-complete access asset hour service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_shared_assets_access_quantity, fixed Duration/h, then normalize once by original reference denominator A. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. A=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Actual attributable compatible measured service hours / A, only under the stated complete-life per-h coverage
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Lifecycle-complete pump hour service (`shared_assets_pump`)

One actual independently identified lifecycle-complete pump hour service. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Use this hour-based service card only for an actual compatible measured operating-hour driver and a provider/upstream service that covers complete-life manufacture, maintenance, replacements and end-of-life per h. Rental duration or price is not a measured operating driver. If the actual driver/unit differs, retain its actual native inventory and independently verify compatible support before finalization.

- Selected flow: Lifecycle-complete pump hour service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_shared_assets_pump_quantity, fixed Duration/h, then normalize once by original reference denominator A. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. A=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Actual attributable compatible measured service hours / A, only under the stated complete-life per-h coverage
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Lifecycle-complete welding equipment hour service (`shared_assets_welder`)

One actual independently identified lifecycle-complete welding equipment hour service. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Use this hour-based service card only for an actual compatible measured operating-hour driver and a provider/upstream service that covers complete-life manufacture, maintenance, replacements and end-of-life per h. Rental duration or price is not a measured operating driver. If the actual driver/unit differs, retain its actual native inventory and independently verify compatible support before finalization.

- Selected flow: Lifecycle-complete welding equipment hour service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_shared_assets_welder_quantity, fixed Duration/h, then normalize once by original reference denominator A. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. A=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Actual attributable compatible measured service hours / A, only under the stated complete-life per-h coverage
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Lifecycle-complete test asset hour service (`shared_assets_test`)

One actual independently identified lifecycle-complete test asset hour service. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Use this hour-based service card only for an actual compatible measured operating-hour driver and a provider/upstream service that covers complete-life manufacture, maintenance, replacements and end-of-life per h. Rental duration or price is not a measured operating driver. If the actual driver/unit differs, retain its actual native inventory and independently verify compatible support before finalization.

- Selected flow: Lifecycle-complete test asset hour service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_shared_assets_test_quantity, fixed Duration/h, then normalize once by original reference denominator A. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. A=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Actual attributable compatible measured service hours / A, only under the stated complete-life per-h coverage
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Independent containment sheet (`native_area_supplies_containment`)

One actual independently identified independent containment sheet. This is a conditional independent object supported within the original native_area_supplies scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only actual native Area supplies not already owned by liner_supply or additional_geonet; one owner per SKU and scope.

- Selected flow: Independent containment sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_native_area_supplies_containment_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied auxiliary area / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Independent protective sheet (`native_area_supplies_protection`)

One actual independently identified independent protective sheet. This is a conditional independent object supported within the original native_area_supplies scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only actual native Area supplies not already owned by liner_supply or additional_geonet; one owner per SKU and scope.

- Selected flow: Independent protective sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_native_area_supplies_protection_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied auxiliary area / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Independent expendable test sheet (`native_area_supplies_test`)

One actual independently identified independent expendable test sheet. This is a conditional independent object supported within the original native_area_supplies scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only actual native Area supplies not already owned by liner_supply or additional_geonet; one owner per SKU and scope.

- Selected flow: Independent expendable test sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_native_area_supplies_test_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Attributable gross supplied auxiliary area / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.





#### Outputs

##### Product flows

###### Accepted dry-installed drained PVC geocomposite concrete-dam upstream-face waterproofing rehabilitation (`accepted_waterproofing`)

Accepted dry-installed drained PVC geocomposite concrete-dam upstream-face waterproofing rehabilitation. Record actual material state and attributed physical quantity.

- Selected flow: Accepted dry-installed drained PVC geocomposite concrete-dam upstream-face waterproofing rehabilitation
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: 1 m2
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Sources: `carpi-dam-rehab`; `carpi-dry-execution`; `cazzuffi-geosynthetic-barriers`

Range evidence need: The exact one is reference normalization only; actual positive A and project seam, anchor, perimeter, drain and required impoundment observations must prove acceptance.

###### Usable outward return of factory pvc/nonwoven geotextile composite sheet supplied (`return_area_liner_supply_liner_supply`)

One actual usable outward custody portion of factory pvc/nonwoven geotextile composite sheet supplied. This is a conditional independent object supported within the original return_area scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable sheet returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of factory pvc/nonwoven geotextile composite sheet supplied
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_return_area_liner_supply_liner_supply_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of independent additional drainage sheet (`return_area_additional_geonet_drainage`)

One actual usable outward custody portion of independent additional drainage sheet. This is a conditional independent object supported within the original return_area scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable sheet returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of independent additional drainage sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_return_area_additional_geonet_drainage_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of independent additional anti-puncture sheet (`return_area_additional_geonet_antipuncture`)

One actual usable outward custody portion of independent additional anti-puncture sheet. This is a conditional independent object supported within the original return_area scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable sheet returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of independent additional anti-puncture sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_return_area_additional_geonet_antipuncture_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of independent containment sheet (`return_area_native_area_supplies_containment`)

One actual usable outward custody portion of independent containment sheet. This is a conditional independent object supported within the original return_area scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable sheet returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of independent containment sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_return_area_native_area_supplies_containment_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of independent protective sheet (`return_area_native_area_supplies_protection`)

One actual usable outward custody portion of independent protective sheet. This is a conditional independent object supported within the original return_area scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable sheet returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of independent protective sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_return_area_native_area_supplies_protection_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of independent expendable test sheet (`return_area_native_area_supplies_test`)

One actual usable outward custody portion of independent expendable test sheet. This is a conditional independent object supported within the original return_area scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable sheet returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of independent expendable test sheet
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_return_area_native_area_supplies_test_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Usable outward return of mechanical anchor profile (`return_length_anchor_profiles_anchor`)

One actual usable outward custody portion of mechanical anchor profile. This is a conditional independent object supported within the original return_length scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of mechanical anchor profile
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_return_length_anchor_profiles_anchor_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of mechanical tensioning profile (`return_length_anchor_profiles_tension`)

One actual usable outward custody portion of mechanical tensioning profile. This is a conditional independent object supported within the original return_length scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of mechanical tensioning profile
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_return_length_anchor_profiles_tension_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of pressure-qualified perimeter strip (`return_length_perimeter_seals_strip`)

One actual usable outward custody portion of pressure-qualified perimeter strip. This is a conditional independent object supported within the original return_length scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of pressure-qualified perimeter strip
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_return_length_perimeter_seals_strip_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of pressure-qualified perimeter gasket (`return_length_perimeter_seals_gasket`)

One actual usable outward custody portion of pressure-qualified perimeter gasket. This is a conditional independent object supported within the original return_length scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of pressure-qualified perimeter gasket
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_return_length_perimeter_seals_gasket_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of length-supplied drain collector (`return_length_drain_components_collector`)

One actual usable outward custody portion of length-supplied drain collector. This is a conditional independent object supported within the original return_length scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of length-supplied drain collector
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_return_length_drain_components_collector_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of length-supplied drain conduit (`return_length_drain_components_conduit`)

One actual usable outward custody portion of length-supplied drain conduit. This is a conditional independent object supported within the original return_length scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of length-supplied drain conduit
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_return_length_drain_components_conduit_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of length-supplied discharge conduit (`return_length_drain_components_outlet`)

One actual usable outward custody portion of length-supplied discharge conduit. This is a conditional independent object supported within the original return_length scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of length-supplied discharge conduit
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_return_length_drain_components_outlet_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Usable outward return of complete anchor assembly (`return_count_anchor_fasteners_anchor`)

One actual usable outward custody portion of complete anchor assembly. This is a conditional independent object supported within the original return_count scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable counted supplies returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of complete anchor assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_return_count_anchor_fasteners_anchor_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of separately supplied counted drain fitting (`return_count_anchor_fasteners_drain_fitting`)

One actual usable outward custody portion of separately supplied counted drain fitting. This is a conditional independent object supported within the original return_count scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable counted supplies returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of separately supplied counted drain fitting
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_return_count_anchor_fasteners_drain_fitting_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of complete packaged repair kit (`return_count_anchor_fasteners_repair_kit`)

One actual usable outward custody portion of complete packaged repair kit. This is a conditional independent object supported within the original return_count scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable counted supplies returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of complete packaged repair kit
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_return_count_anchor_fasteners_repair_kit_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of count-supplied cleaning article (`return_count_anchor_fasteners_cleaning_item`)

One actual usable outward custody portion of count-supplied cleaning article. This is a conditional independent object supported within the original return_count scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable counted supplies returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of count-supplied cleaning article
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_return_count_anchor_fasteners_cleaning_item_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of count-supplied test article (`return_count_anchor_fasteners_test_item`)

One actual usable outward custody portion of count-supplied test article. This is a conditional independent object supported within the original return_count scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable counted supplies returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of count-supplied test article
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_return_count_anchor_fasteners_test_item_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Usable outward return of local substrate repair formulation (`return_mass_repair_auxiliaries_repair`)

One actual usable outward custody portion of local substrate repair formulation. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of local substrate repair formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_repair_auxiliaries_repair_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of anchor grout formulation (`return_mass_repair_auxiliaries_grout`)

One actual usable outward custody portion of anchor grout formulation. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of anchor grout formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_repair_auxiliaries_grout_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of compatible seam auxiliary formulation (`return_mass_repair_auxiliaries_seam`)

One actual usable outward custody portion of compatible seam auxiliary formulation. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of compatible seam auxiliary formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_repair_auxiliaries_seam_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of preparation consumable product (`return_mass_clean_test_supplies_preparation`)

One actual usable outward custody portion of preparation consumable product. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of preparation consumable product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_clean_test_supplies_preparation_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of cleaning formulation (`return_mass_clean_test_supplies_cleaner`)

One actual usable outward custody portion of cleaning formulation. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_clean_test_supplies_cleaner_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of containment consumable product (`return_mass_clean_test_supplies_containment`)

One actual usable outward custody portion of containment consumable product. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of containment consumable product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_clean_test_supplies_containment_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of mass-measured expendable test supply (`return_mass_clean_test_supplies_test`)

One actual usable outward custody portion of mass-measured expendable test supply. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of mass-measured expendable test supply
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_clean_test_supplies_test_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of separately supplied packaging product (`return_mass_clean_test_supplies_packaging`)

One actual usable outward custody portion of separately supplied packaging product. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of separately supplied packaging product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_clean_test_supplies_packaging_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of actual fuel supplied to job equipment (`return_mass_fuel_supply_fuel_supply`)

One actual usable outward custody portion of actual fuel supplied to job equipment. This is a conditional independent object supported within the original return_mass scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of actual fuel supplied to job equipment
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_return_mass_fuel_supply_fuel_supply_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward usable return quantity / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Usable outward return of water supplied for preparation, cleaning, repair and testing (`return_volume_job_water_job_water`)

One actual usable outward custody portion of water supplied for preparation, cleaning, repair and testing. This is a conditional independent object supported within the original return_volume scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Usable volume-measured products or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Selected flow: Usable outward return of water supplied for preparation, cleaning, repair and testing
- Flow property / unit: Volume / m3
- Amount rule: Independently measure actual_return_volume_job_water_job_water_quantity in fixed m3; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Actual outward usable native volume / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

###### Removed historical concrete-substrate waste (`solid_waste_host`)

One actual independently identified removed historical concrete-substrate waste. This is a conditional independent object supported within the original solid_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity.

- Selected flow: Removed historical concrete-substrate waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_solid_waste_host_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward waste mass by class and fate / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Composite liner cutting waste (`solid_waste_liner`)

One actual independently identified composite liner cutting waste. This is a conditional independent object supported within the original solid_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity.

- Selected flow: Composite liner cutting waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_solid_waste_liner_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward waste mass by class and fate / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Removed failed seam composite waste (`solid_waste_seam`)

One actual independently identified removed failed seam composite waste. This is a conditional independent object supported within the original solid_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity.

- Selected flow: Removed failed seam composite waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_solid_waste_seam_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward waste mass by class and fate / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Cured repair formulation residue (`solid_waste_repair`)

One actual independently identified cured repair formulation residue. This is a conditional independent object supported within the original solid_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity.

- Selected flow: Cured repair formulation residue
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_solid_waste_repair_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward waste mass by class and fate / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded job packaging (`solid_waste_packaging`)

One actual independently identified discarded job packaging. This is a conditional independent object supported within the original solid_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity.

- Selected flow: Discarded job packaging
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_solid_waste_packaging_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward waste mass by class and fate / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Contained nonburned fuel waste (`solid_waste_fuel`)

One actual independently identified contained nonburned fuel waste. This is a conditional independent object supported within the original solid_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity.

- Selected flow: Contained nonburned fuel waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_solid_waste_fuel_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward waste mass by class and fate / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Spent job consumable (`solid_waste_consumable`)

One actual independently identified spent job consumable. This is a conditional independent object supported within the original solid_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity.

- Selected flow: Spent job consumable
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_solid_waste_consumable_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outward waste mass by class and fate / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual contained dewatering, cleaning and test wastewater (`contained_water`)

Actual contained dewatering, cleaning and test wastewater. Record actual material state and attributed physical quantity.

- Selected flow: Actual contained dewatering, cleaning and test wastewater
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual outward contained water volume by quality and fate / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`

Range evidence need: Need metered event/phase volumes, contamination, recirculation, retained stocks and treatment/discharge evidence; collection is not an elementary release.

##### Elementary flows

###### Actual direct liquid water discharge (`direct_releases_direct_water`)

One actual independently identified actual direct liquid water discharge. This is a conditional independent object supported within the original direct_releases scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual substance-specific releases to identified receiving medium. Record actual material state and attributed physical quantity.

- Selected flow: Actual direct liquid water discharge
- Flow property / unit: Volume / m3
- Amount rule: Activate direct_releases_direct_water only for an evidenced actual liquid-water output from the technosphere to the environment within this work boundary, fixed Volume/m3. Reservoir drawdown or natural-water movement within the environment creates no automatic purchased-water supply, resource withdrawal or this output; presence of cp_water direct_discharge_volume is not occurrence evidence. Quantify only the actual discharged-state water constituent, never unknown whole effluent/fluid mass or volume as pure H2O. The PCR fixes two measurement routes: for direct_water_only, actual_direct_releases_direct_water_quantity = independently measured direct_water_only_volume_m3; for water_mass_density, actual_direct_releases_direct_water_quantity = discharged_mixture_net_mass_kg * actual_discharge_water_mass_fraction / discharged_water_density_kg_per_m3. The latter requires representative actual discharge-state water mass fraction, basis/evidence and compatible water density/temperature/source; obtain whole-fluid net mass by real weighing, never an assumed fraction. Both give unnormalized m3; inventory amount = actual_direct_releases_direct_water_quantity / A once. Missing boundary, occurrence, current-state composition or conversion evidence blocks completion, never zero or a supply residual. Actual non-H2O pollutants still require independent substance/medium/basis collection and elementary exchanges; listing water volume cannot delete them or make them diagnostic-only. Water volume and species masses are not directly added, and a whole-effluent identity cannot replace species. Contained_water sent to treatment is distinct from this environmental output; an H2O-to-air UUID cannot identify liquid water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule |
| --- | --- | --- |
| a_single | rehabilitate | One accepted rehabilitation output owns failed attempts, cutoffs, rework, replacement and repeat tests. Rejected sheets, failed welds, loose anchors, leaking perimeter or blocked drains stay off accepted A until closure. Rework remains in rehabilitate with defect/event links; discarded material exits its producing event through waste and usable returns through matched native-unit output. No generic co-product, recycled-material or avoided-dam credit. |
| a_stock | rehabilitate | For each actual SKU/unit and period S = opening_stock + gross_receipts - tare - closing_stock, using actual external receipts and carried attributable stocks. Use gross-with-outlets: S retains upstream burdens of actual outward usable returns, nonreturned waste and loss and each outlet is recorded once. If a compatible consumed-only upstream convention is selected, subtract matched outward usable returns once and suppress its duplicate product-output burden/credit; disclose reconciliation. Internal issues are not purchases; closing recovered stock is not an outward outlet. |
| a_shared | shared_assets_access; shared_assets_pump; shared_assets_welder; shared_assets_test; atomic_shared_assets; atomic_bounded_services | Each shared access/pump/welder/test asset has a complete all-job/node/period consumer register. Attribute its full manufacture + maintenance + replacement + end-of-life burden using actual compatible job driver / full-life compatible driver, including every consumer. Supply complete observed life or observed history plus evidenced remainder, replacements, termination and end-of-life with uncertainty, sensitivity and update. Missing life coverage or denominator blocks a final dataset. Provider-included assets/utilities/freight/spares and direct resources have one owner, never both. |
| a_period | rehabilitate | Attribute each receipt, stock, input, asset use, output and routine/incident event to the actual job, phase and period; transfer balances by stable IDs. Early-period work carries to its eventual unique accepted surface without creating interim accepted area. Exclude unrelated reservoir operation using documented physical driver and period boundary. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | rehabilitate | accepted_waterproofing | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; surface_id; survey_geometry; gross_area; excluded_area; A; area_unit; head_envelope; substrate_approval; seam_ids; anchor_ids; perimeter_ids; drain_ids; approved_criteria; results; defect_ids; retest_links; signed_handover; acceptance_date | Survey the developed face, reconcile unique surface IDs and signed project acceptance; retain all required tests and observations. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | m2 | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | As-built survey, approved design, calibrated tests and owner signature |
| cp_material | rehabilitate | liner_supply; anchor_profiles; anchor_fasteners; perimeter_seals; drain_components; additional_geonet; repair_auxiliaries; clean_test_supplies; return_area; return_length; return_count; native_area_supplies; native_length_supplies; native_volume_supplies | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; sku_id; product_state; native_quantity; native_unit; opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; installed_retained; intermediate_use; discarded; released; density; density_unit; temperature; conversion_source; supplier; package_component_scope; recipe_approval; defect_link; temperature_unit; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; receipt_basis; gross_mass_kg; tare_mass_kg; net_receipts; pressure_basis; pressure_unit; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Reconcile supplier receipts, traceable native-unit stock and measured installed/outlet ledgers by SKU; include every provider-paid material. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | Actual native units | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Delivery/return receipts, roll and BOM dimensions, calibration and approved recipe/state evidence |
| cp_water | rehabilitate | job_water; contained_water | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; water_source; supplied_volume; unit; retained_stock; recirculated_volume; dewatering_volume; outward_contained_volume; direct_discharge_volume; receiving_medium; quality; treatment_destination; provider_scope; meter_id; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; water_output_activation_evidence; actual_technosphere_environment_boundary; water_source_origin; source_receiving_state; water_quantity_method; direct_water_only_volume_m3; discharged_mixture_net_mass_kg; actual_discharge_water_mass_fraction; water_fraction_basis; water_fraction_current_state_evidence; discharged_water_density_kg_per_m3; density_temperature_source; non_h2o_species_exchange_links | Meter source and phase water; reconcile job-induced reservoir drawdown/dewatering separately from purchased water, recirculation, contained waste and direct discharge. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. Activate direct_releases_direct_water only for an evidenced actual liquid-water output from the technosphere to the environment within this work boundary, fixed Volume/m3. Reservoir drawdown or natural-water movement within the environment creates no automatic purchased-water supply, resource withdrawal or this output; presence of cp_water direct_discharge_volume is not occurrence evidence. Quantify only the actual discharged-state water constituent, never unknown whole effluent/fluid mass or volume as pure H2O. The PCR fixes two measurement routes: for direct_water_only, actual_direct_releases_direct_water_quantity = independently measured direct_water_only_volume_m3; for water_mass_density, actual_direct_releases_direct_water_quantity = discharged_mixture_net_mass_kg * actual_discharge_water_mass_fraction / discharged_water_density_kg_per_m3. The latter requires representative actual discharge-state water mass fraction, basis/evidence and compatible water density/temperature/source; obtain whole-fluid net mass by real weighing, never an assumed fraction. Both give unnormalized m3; inventory amount = actual_direct_releases_direct_water_quantity / A once. Missing boundary, occurrence, current-state composition or conversion evidence blocks completion, never zero or a supply residual. Actual non-H2O pollutants still require independent substance/medium/basis collection and elementary exchanges; listing water volume cannot delete them or make them diagnostic-only. Water volume and species masses are not directly added, and a whole-effluent identity cannot replace species. Contained_water sent to treatment is distinct from this environmental output; an H2O-to-air UUID cannot identify liquid water. | m3 | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Meters, permissions, provider records, analyses and destination receipts; actual technosphere boundary/occurrence evidence, actual discharge-state water constituent measurement/analysis and non-H2O exchange links |
| cp_fuel | rehabilitate | fuel_supply; fuel_volume_supply | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; fuel_sku; opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; measured_burned_quantity; burned_native_unit; burn_method; burn_uncertainty; audited_fate_balance; unknown_loss_investigation; nonburned_waste; uncontained_loss; total_spill_audit; recovered_to_closing; native_quantity; native_unit; volume; volume_unit; density; density_unit; state; temperature; conversion_source; engine_id; temperature_unit; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; receipt_basis; gross_mass_kg; tare_mass_kg; net_receipts; pressure_basis; pressure_unit; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Record measured burned quantity or derive it only from complete audited disjoint native-unit stock/fates; retain uncertainty and investigate unknown loss. Preserve actual volume/unit and density/unit/state/temperature/source when conversion is independently needed. Total spill is audit only; recovered retained spill belongs to closing. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | Actual native fuel unit; kg or m3 only when actually measured | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Stock/dispensing/return logs, calibrated meters and loss incident reports |
| cp_energy | rehabilitate | electricity | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; supply_id; meter_id; start_reading; end_reading; electricity_kwh; equipment_id; load; duty; operating_duration; duration_unit; allocation_driver; provider_scope | Meter each owned supply including providers; substantiate equipment-based estimates with actual load/duty and duration, avoiding meter/generator double counting. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | kWh | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Calibrated meters and time-stamped equipment records |
| cp_freight | rehabilitate | freight | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; shipment_id; leg_id; cargo_id; mass; mass_unit; distance; distance_unit; mode; load_share; empty_return; route; provider_scope | Collect real delivery, return and waste legs; reconcile cargo net mass and provider dataset coverage. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | kg*km | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Consignment notes, routes, loads and dataset boundary |
| cp_provider | rehabilitate | bounded_services | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; provider_id; contract_scope; completed_result; native_quantity; native_unit; support_verification; upstream_coverage; excluded_resources; electricity; fuel; water; transport; assets; spares; owner_register; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Require bounded completed physical service and matched native-unit upstream inventory; obtain actual primary resources and explicit coverage/exclusions before suppressing direct rows. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | Actual verified native service unit | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Completion certificate and auditable provider resource/coverage records |
| cp_assets | rehabilitate | shared_assets | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; consumer_register; service_start; service_end; observed_history; evidenced_remainder; remainder_source; replacements; termination; end_of_life; manufacture_burden; maintenance_burden; replacement_burden; end_of_life_burden; job_driver; whole_life_driver; driver_unit; upstream_coverage; uncertainty; sensitivity; update_trigger; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Record complete all-consumer life and compatible driver shares for each actual asset; reconcile provider/rental/spare coverage. Hour service requires actual compatible measured operating hours and complete-life burden per h; rent/lease duration is not automatically that driver. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | h or actual compatible measured driver | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Asset history, maintenance/replacement/end-of-life evidence and evidenced future coverage |
| cp_outlets | rehabilitate | return_mass; solid_waste; return_volume | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; material_id; supply_sku; native_quantity; native_unit; outlet_class; waste_mass; mass_unit; quality; destination; outward_receipt; return_match; upstream_convention; defect_link; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Weigh/classify actual discarded and removed material; retain native usable return receipts and distinguish closing stock from outward outlets. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg; actual native return unit | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Weighbridge notes, return receipts, classification and receiving facility evidence |
| cp_emissions | rehabilitate | direct_releases | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; substance_id; particle_size; medium; routine_incident; activity; activity_unit; measured_amount; amount_unit; factor; factor_unit; factor_source; composition; fate; captured; stock; returned; waste; released; detection_limit; uncertainty; composition_basis; fate_basis; composition_source; fate_source; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Measure actual species/medium releases or use valid scoped activity factors/composition-fate; exclude capture, stocks, returns and waste once. Keep whole-fluid balance nonadditive with substance view. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg substance | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Sampling/calibration, actual factor applicability and event reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_area | accepted_waterproofing | A = sum of unique accepted net developed surface areas; output = 1 m2. Duplicate geometry, seam laps and repeated work never add A. | survey_geometry; excluded_area; signed_handover; cp_acceptance | A; 1 m2 |  |
| c_supply | liner_supply; anchor_profiles_anchor; anchor_profiles_tension; atomic_anchor_profiles; anchor_fasteners_anchor; anchor_fasteners_drain_fitting; anchor_fasteners_repair_kit; anchor_fasteners_cleaning_item; anchor_fasteners_test_item; atomic_anchor_fasteners; perimeter_seals_strip; perimeter_seals_gasket; atomic_perimeter_seals; drain_components_collector; drain_components_conduit; drain_components_outlet; atomic_drain_components; additional_geonet_drainage; additional_geonet_antipuncture; atomic_additional_geonet; repair_auxiliaries_repair; repair_auxiliaries_grout; repair_auxiliaries_seam; atomic_repair_auxiliaries; clean_test_supplies_preparation; clean_test_supplies_cleaner; clean_test_supplies_containment; clean_test_supplies_test; clean_test_supplies_packaging; atomic_clean_test_supplies; fuel_supply; native_area_supplies_containment; native_area_supplies_protection; native_area_supplies_test; atomic_native_area_supplies; atomic_native_length_supplies; repair_auxiliaries_repair; repair_auxiliaries_grout; repair_auxiliaries_seam; atomic_repair_auxiliaries; clean_test_supplies_preparation; clean_test_supplies_cleaner; clean_test_supplies_containment; clean_test_supplies_test; clean_test_supplies_packaging; atomic_clean_test_supplies; fuel_supply | S = opening_stock + gross_receipts - tare - closing_stock; retain S in its actual compatible unit; inventory amount = attributable S / A. Match each physical final outlet once; usable return treatment follows a_stock. | opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; cp_material; cp_fuel; A | attributable supplied quantity per reference flow |  |
| c_burn | fuel_supply | Use actual measured burned_quantity, or derive burned_quantity = opening_stock + gross_receipts - tare - closing_stock - outward_usable_return - nonburned_waste - uncontained_loss only from a complete audited native-unit fate balance. Retain uncertainty and investigate unknown loss; an unexplained residual is not combustion. Close every balance separately for each actual fuel SKU/state in one identical native unit; m3 is not kg. Only an independently required mass-based emission-factor/activity view uses measured density/unit/state/temperature/source, and it is nonadditive to native supply/return. Upstream fuel inventory uses S, not burned_quantity. Recovered retained spill is in closing_stock; total_spill_audit is nonadditive. | cp_fuel; fuel_sku; disjoint final fates | measured or audited native-unit combustion activity |  |
| c_direct | job_water; electricity; atomic_bounded_services; return_area_liner_supply_liner_supply; return_area_additional_geonet_drainage; return_area_additional_geonet_antipuncture; return_area_native_area_supplies_containment; return_area_native_area_supplies_protection; return_area_native_area_supplies_test; atomic_return_area; return_length_anchor_profiles_anchor; return_length_anchor_profiles_tension; return_length_perimeter_seals_strip; return_length_perimeter_seals_gasket; return_length_drain_components_collector; return_length_drain_components_conduit; return_length_drain_components_outlet; atomic_return_length; return_count_anchor_fasteners_anchor; return_count_anchor_fasteners_drain_fitting; return_count_anchor_fasteners_repair_kit; return_count_anchor_fasteners_cleaning_item; return_count_anchor_fasteners_test_item; atomic_return_count; return_mass_repair_auxiliaries_repair; return_mass_repair_auxiliaries_grout; return_mass_repair_auxiliaries_seam; return_mass_clean_test_supplies_preparation; return_mass_clean_test_supplies_cleaner; return_mass_clean_test_supplies_containment; return_mass_clean_test_supplies_test; return_mass_clean_test_supplies_packaging; return_mass_fuel_supply_fuel_supply; atomic_return_mass; solid_waste_host; solid_waste_liner; solid_waste_seam; solid_waste_repair; solid_waste_packaging; solid_waste_fuel; solid_waste_consumable; atomic_solid_waste; contained_water; return_volume_job_water_job_water | inventory amount = attributable actual physical quantity / A; preserve each measured native property/unit and separate source, state, event and fate. No netting water streams, returned stock or provider resources across incompatible units or scopes. | cp_water; cp_energy; cp_provider; cp_material; cp_outlets; A | native inventory quantity per reference flow |  |
| c_transport | freight | transport work = sum of attributed cargo mass in kg times actual leg distance in km; inventory amount = transport work / A. Match empty-return and carrier scope once. | cp_freight; mass; distance; A | kg*km per reference flow |  |
| c_assets | shared_assets_access; shared_assets_pump; shared_assets_welder; shared_assets_test; atomic_shared_assets | life burden = manufacture_burden + maintenance_burden + replacement_burden + end_of_life_burden; job share = job_driver / whole_life_driver. For the actual compatible hour driver only, complete-life burden per h = life burden / whole_life_driver; inventory service hours = job_driver / A; inventory service hours times complete-life burden per h = life burden times job_driver / whole_life_driver / A. Use that complete-life service once; never add an asset-share purchase to the same hour service. For another actual native driver use its verified compatible unit and equivalent full-life relation. | cp_assets; job_driver; whole_life_driver; A | compatible service driver and burden per reference flow |  |
| c_release | atomic_direct_releases | emitted mass = measured release or valid actual activity times applicable species/medium factor or evidenced composition-fate mass; inventory amount = emitted mass / A. Retain capture/stock/returns/waste outside release and never add whole-fluid and species views. A complete activity-to-species emission factor already includes its declared composition/fate; do not multiply those again unless the factor definition explicitly requires it. | cp_emissions; cp_fuel; actual applicable factor; A | kg substance per reference flow |  |
| atomic_child_normalization | anchor_profiles_anchor; anchor_profiles_tension; anchor_fasteners_anchor; anchor_fasteners_drain_fitting; anchor_fasteners_repair_kit; anchor_fasteners_cleaning_item; anchor_fasteners_test_item; perimeter_seals_strip; perimeter_seals_gasket; drain_components_collector; drain_components_conduit; drain_components_outlet; additional_geonet_drainage; additional_geonet_antipuncture; repair_auxiliaries_repair; repair_auxiliaries_grout; repair_auxiliaries_seam; clean_test_supplies_preparation; clean_test_supplies_cleaner; clean_test_supplies_containment; clean_test_supplies_test; clean_test_supplies_packaging; shared_assets_access; shared_assets_pump; shared_assets_welder; shared_assets_test; native_area_supplies_containment; native_area_supplies_protection; native_area_supplies_test; return_area_liner_supply_liner_supply; return_area_additional_geonet_drainage; return_area_additional_geonet_antipuncture; return_area_native_area_supplies_containment; return_area_native_area_supplies_protection; return_area_native_area_supplies_test; return_length_anchor_profiles_anchor; return_length_anchor_profiles_tension; return_length_perimeter_seals_strip; return_length_perimeter_seals_gasket; return_length_drain_components_collector; return_length_drain_components_conduit; return_length_drain_components_outlet; return_count_anchor_fasteners_anchor; return_count_anchor_fasteners_drain_fitting; return_count_anchor_fasteners_repair_kit; return_count_anchor_fasteners_cleaning_item; return_count_anchor_fasteners_test_item; return_mass_repair_auxiliaries_repair; return_mass_repair_auxiliaries_grout; return_mass_repair_auxiliaries_seam; return_mass_clean_test_supplies_preparation; return_mass_clean_test_supplies_cleaner; return_mass_clean_test_supplies_containment; return_mass_clean_test_supplies_test; return_mass_clean_test_supplies_packaging; return_mass_fuel_supply_fuel_supply; return_volume_job_water_job_water; solid_waste_host; solid_waste_liner; solid_waste_seam; solid_waste_repair; solid_waste_packaging; solid_waste_fuel; solid_waste_consumable; direct_releases_direct_water | Record independent_physical_quantity separately by atomic_flow_row_id; actual_<row_id>_quantity is its named alias only, never a copied family amount. Materials retain original CP per-identity/state gross/net stock and outward-return conventions; transfers use actual paired custody quantity; usable exits and wastes use independent actual fate quantities. Number-of-items owned asset equivalents use this PCR original job_driver/full_life_driver complete-life fraction including manufacture, maintenance, replacement and end of life, with every consumer and a positive complete denominator. Duration/h service children instead use actual attributable job hours with the matching complete-life burden per hour; never multiply hours by the fraction again. Purchased services use only actual complete physical tasks whose real contract defines Item(s), with original actual attribution; hours, days and prices cannot become event counts. atomic_child_intensity = independent_physical_quantity / A, where A is unique finally accepted net developed waterproofed dam-face area in m2 under net_area under the original acceptance rule; A=0 blocks normalization. Non-exchange parent role ledgers and original CP operands retain their stock, transfer, closure and ownership functions, without adding a second exchange or changing the method. | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; A; cp_material; cp_provider; cp_assets; cp_fuel; cp_outlets; cp_emissions | atomic_child_intensity |  |
| atomic_direct_water_quantity | direct_releases_direct_water | Activate direct_releases_direct_water only for an evidenced actual liquid-water output from the technosphere to the environment within this work boundary, fixed Volume/m3. Reservoir drawdown or natural-water movement within the environment creates no automatic purchased-water supply, resource withdrawal or this output; presence of cp_water direct_discharge_volume is not occurrence evidence. Quantify only the actual discharged-state water constituent, never unknown whole effluent/fluid mass or volume as pure H2O. The PCR fixes two measurement routes: for direct_water_only, actual_direct_releases_direct_water_quantity = independently measured direct_water_only_volume_m3; for water_mass_density, actual_direct_releases_direct_water_quantity = discharged_mixture_net_mass_kg * actual_discharge_water_mass_fraction / discharged_water_density_kg_per_m3. The latter requires representative actual discharge-state water mass fraction, basis/evidence and compatible water density/temperature/source; obtain whole-fluid net mass by real weighing, never an assumed fraction. Both give unnormalized m3; inventory amount = actual_direct_releases_direct_water_quantity / A once. Missing boundary, occurrence, current-state composition or conversion evidence blocks completion, never zero or a supply residual. Actual non-H2O pollutants still require independent substance/medium/basis collection and elementary exchanges; listing water volume cannot delete them or make them diagnostic-only. Water volume and species masses are not directly added, and a whole-effluent identity cannot replace species. Contained_water sent to treatment is distinct from this environmental output; an H2O-to-air UUID cannot identify liquid water. | cp_water; water_output_activation_evidence; actual_technosphere_environment_boundary; water_source_origin; source_receiving_state; water_quantity_method; direct_water_only_volume_m3; discharged_mixture_net_mass_kg; actual_discharge_water_mass_fraction; water_fraction_basis; water_fraction_current_state_evidence; discharged_water_density_kg_per_m3; density_temperature_source; non_h2o_species_exchange_links; A | actual_direct_releases_direct_water_quantity; water_intensity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify actual concrete exchanges and support units before a final dataset. Umbrella cards require actual SKU/provider/waste/species realization, not arbitrary near matches. | Supplier specifications and concrete identity/detail confirmations |
| dq_coverage | rehabilitate | Collect complete job phases including failed attempts and provider resources, actual absence evidence when applicable, and all-consumer asset life. Missing coverage is an explicit gap and blocks finalization. | Event, owner, period and life registers |
| dq_metrology | all inventory rows | Keep native quantity/unit, stock/outlet reconciliations, calibration, density/state/temperature/source for needed conversions and explicit uncertainty; validate water and fuel separately. | Primary receipts, meters, scales and conversion evidence |
| atomic_anchor_profiles | rehabilitate; cp_material | Former anchor_profiles is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Mechanical anchoring and tensioning profiles. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_anchor_fasteners | rehabilitate; cp_material | Former anchor_fasteners is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record actual counted supplies, including anchor assemblies, drain fittings, packaged repair kits or cleaning/test items only when supplied in native Count. Match return_count and never repurchase kit constituents. Length-, area-, volume- and mass-measured supplies have separate owners. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_perimeter_seals | rehabilitate; cp_material | Former perimeter_seals is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Pressure-qualified perimeter strips and gaskets. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_drain_components | rehabilitate; cp_material | Former drain_components is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record only actual length-measured collectors, conduits and discharge components. Independently supplied counted fittings belong to anchor_fasteners; no fictitious length conversion is allowed. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_additional_geonet | rehabilitate; cp_material | Former additional_geonet is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Additional drainage or anti-puncture sheet where required. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_repair_auxiliaries | rehabilitate; cp_material | Former repair_auxiliaries is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Only native mass-measured actual repair/grout/seam products belong here; actual Count kits or Volume liquid supply belongs to the matching native-unit card. Factory kits and individual constituents are exclusive purchases. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_clean_test_supplies | rehabilitate; cp_material | Former clean_test_supplies is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record only native mass-measured preparation, cleaning, containment, test and packaging consumables. Actual Count, Area, Length or Volume supplies use their matching separate native-unit supply cards, including their returns; these are mutually exclusive purchases. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_bounded_services | rehabilitate; cp_provider | Former bounded_services is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actually bounded engineering, access, installation or test providers. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_provider; actual_child_register; parent_ledger_id |
| atomic_shared_assets | rehabilitate; cp_assets | Former shared_assets is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Use this hour-based service card only for an actual compatible measured operating-hour driver and a provider/upstream service that covers complete-life manufacture, maintenance, replacements and end-of-life per h. Rental duration or price is not a measured operating driver. If the actual driver/unit differs, retain its actual native inventory and independently verify compatible support before finalization. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_assets; actual_child_register; parent_ledger_id |
| atomic_native_area_supplies | rehabilitate; cp_material | Former native_area_supplies is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Only actual native Area supplies not already owned by liner_supply or additional_geonet; one owner per SKU and scope. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_native_length_supplies | rehabilitate; cp_material | Former native_length_supplies is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual independently supplied linear auxiliaries only; never recode counted fittings as length. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_return_area | rehabilitate; cp_material | Former return_area is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Usable sheet returned out of the job. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_return_length | rehabilitate; cp_material | Former return_length is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_return_count | rehabilitate; cp_material | Former return_count is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Usable counted supplies returned out of the job. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_return_mass | rehabilitate; cp_outlets | Former return_mass is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_outlets; actual_child_register; parent_ledger_id |
| atomic_solid_waste | rehabilitate; cp_outlets | Former solid_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_outlets; actual_child_register; parent_ledger_id |
| atomic_direct_releases | rehabilitate; cp_emissions | Former direct_releases is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual substance-specific releases to identified receiving medium. Record actual material state and attributed physical quantity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_emissions; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | rehabilitate | Legacy roles are non-exchange stock, activity, fate or closure keys in the original CP. Independent child exchanges carry quantities; atomic_ requirements retain mandatory remaining-roster refinement and finalization blocks. Original raw fields, helpers and native-unit operands retain their responsibilities and reconcile by child identity and compatible unit, never adding parent totals or unlike units. Source-table Applies-to migration: anchor_profiles => anchor_profiles_anchor, anchor_profiles_tension, atomic_anchor_profiles; anchor_fasteners => anchor_fasteners_anchor, anchor_fasteners_drain_fitting, anchor_fasteners_repair_kit, anchor_fasteners_cleaning_item, anchor_fasteners_test_item, atomic_anchor_fasteners; perimeter_seals => perimeter_seals_strip, perimeter_seals_gasket, atomic_perimeter_seals; drain_components => drain_components_collector, drain_components_conduit, drain_components_outlet, atomic_drain_components; additional_geonet => additional_geonet_drainage, additional_geonet_antipuncture, atomic_additional_geonet; repair_auxiliaries => repair_auxiliaries_repair, repair_auxiliaries_grout, repair_auxiliaries_seam, atomic_repair_auxiliaries; clean_test_supplies => clean_test_supplies_preparation, clean_test_supplies_cleaner, clean_test_supplies_containment, clean_test_supplies_test, clean_test_supplies_packaging, atomic_clean_test_supplies; bounded_services => atomic_bounded_services; shared_assets => shared_assets_access, shared_assets_pump, shared_assets_welder, shared_assets_test, atomic_shared_assets; native_area_supplies => native_area_supplies_containment, native_area_supplies_protection, native_area_supplies_test, atomic_native_area_supplies; native_length_supplies => atomic_native_length_supplies; native_volume_supplies => repair_auxiliaries; clean_test_supplies; fuel_volume_supply => fuel_supply; return_area => return_area_liner_supply_liner_supply, return_area_additional_geonet_drainage, return_area_additional_geonet_antipuncture, return_area_native_area_supplies_containment, return_area_native_area_supplies_protection, return_area_native_area_supplies_test, atomic_return_area; return_length => return_length_anchor_profiles_anchor, return_length_anchor_profiles_tension, return_length_perimeter_seals_strip, return_length_perimeter_seals_gasket, return_length_drain_components_collector, return_length_drain_components_conduit, return_length_drain_components_outlet, atomic_return_length; return_count => return_count_anchor_fasteners_anchor, return_count_anchor_fasteners_drain_fitting, return_count_anchor_fasteners_repair_kit, return_count_anchor_fasteners_cleaning_item, return_count_anchor_fasteners_test_item, atomic_return_count; return_mass => return_mass_repair_auxiliaries_repair, return_mass_repair_auxiliaries_grout, return_mass_repair_auxiliaries_seam, return_mass_clean_test_supplies_preparation, return_mass_clean_test_supplies_cleaner, return_mass_clean_test_supplies_containment, return_mass_clean_test_supplies_test, return_mass_clean_test_supplies_packaging, return_mass_fuel_supply_fuel_supply, atomic_return_mass; return_volume => return_volume_job_water_job_water; solid_waste => solid_waste_host, solid_waste_liner, solid_waste_seam, solid_waste_repair, solid_waste_packaging, solid_waste_fuel, solid_waste_consumable, atomic_solid_waste; direct_releases => direct_releases_direct_water, atomic_direct_releases | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | rehabilitate | The following routes each child to its original role, node, unique unit and method CP. Independently apply that original role measurement, stock, source/fate, rework, share, conversion and normalization method to each actual identity/state child. Retain the original helper/selector role parameter as legacy_parent_role, but supply quantity operands from this child independent records; ROW_UNIT(child_row_id) is the explicit unit below. Reconcile stocks/transfers only within the same identity/state and compatible native unit, grouping different materials, media, states and units separately. Parent totals are non-exchange diagnostics, never copied as child operands or summed across unlike units. Unsupported original-helper applicability or missing actual conversion, denominator or evidence blocks finalization; field records cannot choose a new method. Original role-named formula operands remain ledger names rather than duplicate exchanges. A cross-unit legacy role executes by this mapping and actual child unit instead of inheriting a wrong fixed unit. Routing: anchor_profiles_anchor => role=anchor_profiles, node=rehabilitate, property=Length, unit=m, CP=cp_material; anchor_profiles_tension => role=anchor_profiles, node=rehabilitate, property=Length, unit=m, CP=cp_material; anchor_fasteners_anchor => role=anchor_fasteners, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; anchor_fasteners_drain_fitting => role=anchor_fasteners, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; anchor_fasteners_repair_kit => role=anchor_fasteners, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; anchor_fasteners_cleaning_item => role=anchor_fasteners, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; anchor_fasteners_test_item => role=anchor_fasteners, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; perimeter_seals_strip => role=perimeter_seals, node=rehabilitate, property=Length, unit=m, CP=cp_material; perimeter_seals_gasket => role=perimeter_seals, node=rehabilitate, property=Length, unit=m, CP=cp_material; drain_components_collector => role=drain_components, node=rehabilitate, property=Length, unit=m, CP=cp_material; drain_components_conduit => role=drain_components, node=rehabilitate, property=Length, unit=m, CP=cp_material; drain_components_outlet => role=drain_components, node=rehabilitate, property=Length, unit=m, CP=cp_material; additional_geonet_drainage => role=additional_geonet, node=rehabilitate, property=Area, unit=m2, CP=cp_material; additional_geonet_antipuncture => role=additional_geonet, node=rehabilitate, property=Area, unit=m2, CP=cp_material; repair_auxiliaries_repair => role=repair_auxiliaries, node=rehabilitate, property=Mass, unit=kg, CP=cp_material; repair_auxiliaries_grout => role=repair_auxiliaries, node=rehabilitate, property=Mass, unit=kg, CP=cp_material; repair_auxiliaries_seam => role=repair_auxiliaries, node=rehabilitate, property=Mass, unit=kg, CP=cp_material; clean_test_supplies_preparation => role=clean_test_supplies, node=rehabilitate, property=Mass, unit=kg, CP=cp_material; clean_test_supplies_cleaner => role=clean_test_supplies, node=rehabilitate, property=Mass, unit=kg, CP=cp_material; clean_test_supplies_containment => role=clean_test_supplies, node=rehabilitate, property=Mass, unit=kg, CP=cp_material; clean_test_supplies_test => role=clean_test_supplies, node=rehabilitate, property=Mass, unit=kg, CP=cp_material; clean_test_supplies_packaging => role=clean_test_supplies, node=rehabilitate, property=Mass, unit=kg, CP=cp_material; shared_assets_access => role=shared_assets, node=rehabilitate, property=Duration, unit=h, CP=cp_assets; shared_assets_pump => role=shared_assets, node=rehabilitate, property=Duration, unit=h, CP=cp_assets; shared_assets_welder => role=shared_assets, node=rehabilitate, property=Duration, unit=h, CP=cp_assets; shared_assets_test => role=shared_assets, node=rehabilitate, property=Duration, unit=h, CP=cp_assets; native_area_supplies_containment => role=native_area_supplies, node=rehabilitate, property=Area, unit=m2, CP=cp_material; native_area_supplies_protection => role=native_area_supplies, node=rehabilitate, property=Area, unit=m2, CP=cp_material; native_area_supplies_test => role=native_area_supplies, node=rehabilitate, property=Area, unit=m2, CP=cp_material; return_area_liner_supply_liner_supply => role=return_area, node=rehabilitate, property=Area, unit=m2, CP=cp_material; return_area_additional_geonet_drainage => role=return_area, node=rehabilitate, property=Area, unit=m2, CP=cp_material; return_area_additional_geonet_antipuncture => role=return_area, node=rehabilitate, property=Area, unit=m2, CP=cp_material; return_area_native_area_supplies_containment => role=return_area, node=rehabilitate, property=Area, unit=m2, CP=cp_material; return_area_native_area_supplies_protection => role=return_area, node=rehabilitate, property=Area, unit=m2, CP=cp_material; return_area_native_area_supplies_test => role=return_area, node=rehabilitate, property=Area, unit=m2, CP=cp_material; return_length_anchor_profiles_anchor => role=return_length, node=rehabilitate, property=Length, unit=m, CP=cp_material; return_length_anchor_profiles_tension => role=return_length, node=rehabilitate, property=Length, unit=m, CP=cp_material; return_length_perimeter_seals_strip => role=return_length, node=rehabilitate, property=Length, unit=m, CP=cp_material; return_length_perimeter_seals_gasket => role=return_length, node=rehabilitate, property=Length, unit=m, CP=cp_material; return_length_drain_components_collector => role=return_length, node=rehabilitate, property=Length, unit=m, CP=cp_material; return_length_drain_components_conduit => role=return_length, node=rehabilitate, property=Length, unit=m, CP=cp_material; return_length_drain_components_outlet => role=return_length, node=rehabilitate, property=Length, unit=m, CP=cp_material; return_count_anchor_fasteners_anchor => role=return_count, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; return_count_anchor_fasteners_drain_fitting => role=return_count, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; return_count_anchor_fasteners_repair_kit => role=return_count, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; return_count_anchor_fasteners_cleaning_item => role=return_count, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; return_count_anchor_fasteners_test_item => role=return_count, node=rehabilitate, property=Number of items, unit=Item(s), CP=cp_material; return_mass_repair_auxiliaries_repair => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_mass_repair_auxiliaries_grout => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_mass_repair_auxiliaries_seam => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_mass_clean_test_supplies_preparation => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_mass_clean_test_supplies_cleaner => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_mass_clean_test_supplies_containment => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_mass_clean_test_supplies_test => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_mass_clean_test_supplies_packaging => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_mass_fuel_supply_fuel_supply => role=return_mass, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; return_volume_job_water_job_water => role=return_volume, node=rehabilitate, property=Volume, unit=m3, CP=cp_outlets; solid_waste_host => role=solid_waste, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; solid_waste_liner => role=solid_waste, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; solid_waste_seam => role=solid_waste, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; solid_waste_repair => role=solid_waste, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; solid_waste_packaging => role=solid_waste, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; solid_waste_fuel => role=solid_waste, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; solid_waste_consumable => role=solid_waste, node=rehabilitate, property=Mass, unit=kg, CP=cp_outlets; direct_releases_direct_water => role=direct_releases, node=rehabilitate, property=Volume, unit=m3, CP=cp_water | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| single_fuel_and_formulation_units | fuel_supply; repair_auxiliaries_repair; repair_auxiliaries_grout; repair_auxiliaries_seam; clean_test_supplies_preparation; clean_test_supplies_cleaner; clean_test_supplies_containment; clean_test_supplies_test; clean_test_supplies_packaging; return_mass_repair_auxiliaries_repair; return_mass_repair_auxiliaries_grout; return_mass_repair_auxiliaries_seam; return_mass_clean_test_supplies_preparation; return_mass_clean_test_supplies_cleaner; return_mass_clean_test_supplies_containment; return_mass_clean_test_supplies_test; return_mass_clean_test_supplies_packaging; return_mass_fuel_supply_fuel_supply; atomic_return_mass; return_volume_job_water_job_water | Each actual fuel SKU/state has one Mass/kg supply exchange. All original fuel_volume_supply records and cp_fuel volume/unit/stock/density/state/temperature observations remain auxiliary measurements and native physical closure, never another supply or usable-return view. Net weigh fuel, or convert actual volume with evidenced same-SKU/state density, volume unit and temperature (and pressure basis for gas); missing evidence blocks completion. Compatible repair/cleaning formulations likewise use only their selected Mass/kg children; original native_volume_supplies and cp_material volume observations remain auxiliary conversions of those same physical products. Complete Count kits and separately supplied formulation/components remain exclusive purchases. | cp_fuel; cp_material; actual_child_register; same_identity_conversion_evidence |
| atomic_compatible_native_stock | all material and fuel child exchanges | Use opening + net external receipts - intact unused closing in each child unique exchange unit. Direct count/length/area/volume net_receipts already use that native unit; never subtract kg tare. Only an actual weighing route first calculates gross_mass_kg-tare_mass_kg, then converts if needed using evidenced actual same-SKU/state operands into the unique exchange unit, with no second tare deduction. Original formulation/fuel native volumes remain auxiliary observations, converted with evidenced density/conditions before entering the kg stock group; unlike units are never added. Original a_stock gross-with-outlets or compatible consumed-only convention, once-only usable-return treatment and nonreturned-loss responsibility remain unchanged. | cp_material; cp_fuel; receipt_basis; native_unit; gross_mass_kg; tare_mass_kg; net_receipts; density; density_unit; state; temperature; conversion_source; pressure_basis |
| atomic_range_noninheritance | anchor_profiles_anchor; anchor_profiles_tension; anchor_fasteners_anchor; anchor_fasteners_drain_fitting; anchor_fasteners_repair_kit; anchor_fasteners_cleaning_item; anchor_fasteners_test_item; perimeter_seals_strip; perimeter_seals_gasket; drain_components_collector; drain_components_conduit; drain_components_outlet; additional_geonet_drainage; additional_geonet_antipuncture; repair_auxiliaries_repair; repair_auxiliaries_grout; repair_auxiliaries_seam; clean_test_supplies_preparation; clean_test_supplies_cleaner; clean_test_supplies_containment; clean_test_supplies_test; clean_test_supplies_packaging; shared_assets_access; shared_assets_pump; shared_assets_welder; shared_assets_test; native_area_supplies_containment; native_area_supplies_protection; native_area_supplies_test; return_area_liner_supply_liner_supply; return_area_additional_geonet_drainage; return_area_additional_geonet_antipuncture; return_area_native_area_supplies_containment; return_area_native_area_supplies_protection; return_area_native_area_supplies_test; return_length_anchor_profiles_anchor; return_length_anchor_profiles_tension; return_length_perimeter_seals_strip; return_length_perimeter_seals_gasket; return_length_drain_components_collector; return_length_drain_components_conduit; return_length_drain_components_outlet; return_count_anchor_fasteners_anchor; return_count_anchor_fasteners_drain_fitting; return_count_anchor_fasteners_repair_kit; return_count_anchor_fasteners_cleaning_item; return_count_anchor_fasteners_test_item; return_mass_repair_auxiliaries_repair; return_mass_repair_auxiliaries_grout; return_mass_repair_auxiliaries_seam; return_mass_clean_test_supplies_preparation; return_mass_clean_test_supplies_cleaner; return_mass_clean_test_supplies_containment; return_mass_clean_test_supplies_test; return_mass_clean_test_supplies_packaging; return_mass_fuel_supply_fuel_supply; return_volume_job_water_job_water; solid_waste_host; solid_waste_liner; solid_waste_seam; solid_waste_repair; solid_waste_packaging; solid_waste_fuel; solid_waste_consumable; direct_releases_direct_water | Retired parent numerical ranges, per-exchange screening instructions and rationales are retained only in implementation audit, applying to neither new child exchanges nor parent-family sums and never proportionally allocated. Each new child has independent evidence needs for actual quantity, identity/state, measurement/conversion, uncertainty and comparable independent observations. Add its own interval only after review confirms applicability to this independent object; never validate a batch with its own maximum. Original ranges of unchanged semantically compatible atomic objects retain their original status. | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |
| atomic_direct_water_boundary_and_composition | direct_releases_direct_water; atomic_direct_releases | Activate direct_releases_direct_water only for an evidenced actual liquid-water output from the technosphere to the environment within this work boundary, fixed Volume/m3. Reservoir drawdown or natural-water movement within the environment creates no automatic purchased-water supply, resource withdrawal or this output; presence of cp_water direct_discharge_volume is not occurrence evidence. Quantify only the actual discharged-state water constituent, never unknown whole effluent/fluid mass or volume as pure H2O. The PCR fixes two measurement routes: for direct_water_only, actual_direct_releases_direct_water_quantity = independently measured direct_water_only_volume_m3; for water_mass_density, actual_direct_releases_direct_water_quantity = discharged_mixture_net_mass_kg * actual_discharge_water_mass_fraction / discharged_water_density_kg_per_m3. The latter requires representative actual discharge-state water mass fraction, basis/evidence and compatible water density/temperature/source; obtain whole-fluid net mass by real weighing, never an assumed fraction. Both give unnormalized m3; inventory amount = actual_direct_releases_direct_water_quantity / A once. Missing boundary, occurrence, current-state composition or conversion evidence blocks completion, never zero or a supply residual. Actual non-H2O pollutants still require independent substance/medium/basis collection and elementary exchanges; listing water volume cannot delete them or make them diagnostic-only. Water volume and species masses are not directly added, and a whole-effluent identity cannot replace species. Contained_water sent to treatment is distinct from this environmental output; an H2O-to-air UUID cannot identify liquid water. | cp_water; cp_emissions; water_output_activation_evidence; actual_technosphere_environment_boundary; water_source_origin; source_receiving_state; water_quantity_method; direct_water_only_volume_m3; discharged_mixture_net_mass_kg; actual_discharge_water_mass_fraction; water_fraction_basis; water_fraction_current_state_evidence; discharged_water_density_kg_per_m3; density_temperature_source; non_h2o_species_exchange_links |

## 9. Validation Rules

| rule_id | Applies to | Rule |
| --- | --- | --- |
| v_gate | accepted_waterproofing | A must be positive, unique and accepted under b_gate; missing structural/anchor/perimeter/drain/seam acceptance, required observation or unresolved defect means no accepted output. |
| v_ledgers | rehabilitate | Reconcile all supply/outlet/native-unit states, fuel supplied versus burned, actual water fate, whole-fluid/species nonadditivity and one-owner provider resources. Missing actual data is not zero. |
| v_assets | shared_assets_access; shared_assets_pump; shared_assets_welder; shared_assets_test; atomic_shared_assets | Reject incomplete consumer lists, missing full-life denominator, unsupported remainder/replacements/termination/end-of-life or duplicated owner scope. Assess period-specific uncertainty and sensitivity before final dataset. |
| v_route | rehabilitate | Confirm actual dry accessible installation and retained concrete dam subset; reject submerged/flowing-water, new-dam or unsupported universal case parameters. Reworked defects remain linked to the same job and accepted surface once. |
| close_atomic_anchor_profiles | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_anchor_profiles is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_anchor_fasteners | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_anchor_fasteners is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_perimeter_seals | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_perimeter_seals is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_drain_components | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_drain_components is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_additional_geonet | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_additional_geonet is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_repair_auxiliaries | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_repair_auxiliaries is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_clean_test_supplies | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_clean_test_supplies is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_bounded_services | rehabilitate; cp_provider | Block final foreground completion until every actual object in atomic_bounded_services is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_shared_assets | rehabilitate; cp_assets | Block final foreground completion until every actual object in atomic_shared_assets is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_native_area_supplies | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_native_area_supplies is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_native_length_supplies | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_native_length_supplies is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_return_area | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_return_area is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_return_length | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_return_length is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_return_count | rehabilitate; cp_material | Block final foreground completion until every actual object in atomic_return_count is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_return_mass | rehabilitate; cp_outlets | Block final foreground completion until every actual object in atomic_return_mass is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_solid_waste | rehabilitate; cp_outlets | Block final foreground completion until every actual object in atomic_solid_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| close_atomic_direct_releases | rehabilitate; cp_emissions | Block final foreground completion until every actual object in atomic_direct_releases is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | Verify actual source/receipt evidence, original physical quantities/units and ownership for the same material/state/event/gate. Traceable reuse of the same signed measurement is allowed; copied parent totals, overwritten receipts and forced unknown equality are prohibited. Unexplained differences without uncertainty, actual loss or state-transition responsibility evidence block completion; verify exactly one normalization per card. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for an accepted rehabilitation service |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Same qualified dry-installed drained concrete-dam PVC geocomposite repair route with disclosed actual geometry, head and acceptance |
| excluded_use | Whole-dam construction, submerged repairs, reservoir operation, future generation or avoided water/asset credits; membrane supply alone |
| required_metadata | dam/site and work-package IDs; retained structural condition; actual head and water-level envelope; dry-access and shutdown arrangement; net developed coverage and exclusions; surface geometry and penetrations and seams/laps; factory sheet specification; anchor design and tension; perimeter pressure design; drainage layout/destination; approved QA criteria and tests and defects/retests and signed acceptance date |
| required_quality_disclosure | Actual reference and exchange identities/support; gaps and actual absence; source periods; test closure; stock/fate/provider ownership; all-consumer life coverage; uncertainty and sensitivity; no generalized brochure guarantees |
| update_trigger | New substrate/head/design, sheet/anchor/perimeter/drain system, dry-access method, acceptance criteria, provider coverage, measurement or asset life evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| carpi-dam-rehab | handbook | Carpi Tech, Dam repair & rehabilitation with waterproofing geomembranes solutions, https://www.carpitech.com/solution/repair/dams/ | Concrete-dam repair scope and actual engineering responsibility; no quantitative LCA defaults |
| carpi-dry-execution | handbook | Carpi Tech, Execution conditions, https://www.carpitech.com/solution/repair/execution-conditions/ | Dry access versus underwater/flowing-water routes and owner-approved operational interface |
| cazzuffi-geosynthetic-barriers | literature | Cazzuffi, Giroud, Scuero and Vaschetti, Geosynthetic barriers systems for dams, section 4.4, PDF pp.30–32, printed pp.142–144; https://library.geosyntheticssociety.org/wp-content/uploads/resources/proceedings/Geosynthetic%20barriers%20systems%20for%20dams.pdf | Factory-bonded PVC/geotextile, mechanical anchor/tension profiles, pressure-appropriate perimeter and drained interface; historical dimensions not universal inventory factors |
