---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.wadding-gauze-bandages-and-similar-articles
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Non-sterile unmedicated absorbent cotton rolls

## 1. Scope and Applicability

This environmental LCA manufacturing method covers unmedicated, non-sterile hydrophilic pure-cotton wool supplied as a wrapped roll, made from externally supplied virgin ginned cotton lint by alkaline scouring, hydrogen-peroxide bleaching, washing/rinsing, conditional acid finishing, hydro-extraction, drying, lapping/carding, rolling/cutting, packing and quality release. The declared base route purchases steam and electricity and sends wastewater to external treatment. Record actual fibre grade and supply moisture, bleaching/finishing chemistry, drying energy, outsourced operations and each packaging component. The government roadmap supports process decomposition; the independently specified GIMA 34838 roll supports a real non-sterile pure-cotton market state, not proof of GIMA factory chemistry or packaging composition.

Exclude woven gauze, bandages, cotton balls/pads, synthetic or blended fibre, linters/recycled-cotton substitution, drug impregnation, composite/adhesive dressings and sterile products. A different fibre, bleach chemistry, supplied form, sterility or packaging architecture needs separate applicability and inventory assessment; CPC 35279 is broader than this method. No clinical application instruction, efficacy equivalence, absorption-capacity default, service-life default or sterilization operating parameter is supplied. The roadmap also discusses gamma treatment/sterile cotton; those statements cannot be transferred to this non-sterile product. Actual treatment is never erased: if present, retain its supplier, materials, energy, transport, losses and releases and reassess the supplied-state boundary before applying this method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.wadding-gauze-bandages-and-similar-articles |
| classification_refs | CPC 3.0 35279; classification broader than method; mapping review pending |
| covered_products | Wrapped, unmedicated non-sterile pure-cotton absorbent wool roll of one declared SKU |
| excluded_products | Gauze; bandages; balls/pads; other fibres; impregnated/composite/sterile products |
| representative_product | Non-sterile cotton wool roll, e.g. GIMA 34838; nominal pack size is not a universal measured mass |
| production_route | Virgin cotton lint; alkaline scour; peroxide bleach; wash; conditional HCl finish; extract; dry; card; roll; cut; pack; release |
| market_state | Dry-to-declared-moisture non-sterile roll in declared paper/PE packaging; carton when actually included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the declared non-sterile absorbent pure-cotton roll; a material supply function without a clinical equivalence claim |
| How much | 1 kg net cotton, excluding all packaging, at the declared release moisture |
| How well | Meet the actual SKU acceptance specification and report its test evidence; no universal absorption or sterility performance is imposed |
| How long or cycle | One matched actual production/release cohort; no number of uses or lifetime is assumed |
| reference_flow_link | finished_roll |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wadding, gauze, bandages and similar articles `6014f191-3872-4607-8c5a-c4a216c96724` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pure cotton fibre grade and origin; virgin ginned lint; supply and release moisture; roll dimensions and actual net cotton mass; non-sterile and unmedicated state; scour and peroxide/finishing formulation; drying and steam supply; outsourced steps; paper and PE grade and actual packaging architecture; release gate and lot cohort; site geography and period; waste/treatment route; storage and dispatch coverage |

The reference gate is new positive quality-released output after the declared packing and acceptance steps. Q is not dispatch quantity. Count each physical lot once; returns and reacceptance do not create new production. Missing required qualifiers makes a foreground package incomplete. The broad native reference identity and all its limits are retained in the terminal flow card.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh unique newly released cotton net of paper, bag and carton at actual release moisture using cp_release; the terminal row is 1 kg. |
| wet_supply | fibre and commercial solutions | Mass | kg | Record whole supplied wet mass; use independently assayed moisture/concentration for dry fibre, active and carrier-water subledgers only. No duplicate purchase of constituents. |
| unit_conversion | raw meters and count records | Measured quantity | kg; kWh; t km | Convert mass with actual net pack weights, volume with independently applicable density and conditions, and rates with duration. An already integrated volume has no extra time multiplier. Secondary property factors are not density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received virgin ginned cotton lint and separately supplied chemicals, utilities and packaging |
| starting_condition_role | Externally acquired inputs, with upstream agricultural/ginning burdens |
| product_classification_scope | Only the qualified non-sterile unmedicated pure-cotton roll subset of CPC 35279 |
| recursive_input_rule | Purchased already purified cotton retains its prior processing burden; disclose the shifted entry gate and do not model purification twice. This is a boundary variant requiring review, not virgin lint by relabelling. |
| upstream_dataset_requirement | Compatible fibre origin/grade, commercial formulations, utility supply, packaging and outsourced treatment providers; generic identity does not select a provider |
| disclosure | Declare all included sites, periods, subcontractors, pre-release storage, rejects and post-release ledger coverage; no measured industrial averages are supplied |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | manufacture | Include actual opening/cleaning, scour, bleach, all rinses/finishing, extraction, drying, carding, conversion, QC, packing, internal movement and cleaning, including failed runs and rework. Keep purchased heat/electricity and actual outsourced operations once. An onsite boiler, onsite effluent treatment or other energy route requires explicit process expansion with separate fuel, water, chemical, waste and elementary exchanges, not omitted loads. | `msme-cotton-wool-roadmap` |
| boundary_gate | production and finished goods | Production ends at new quality release. Do not add closing finished stock of the same released Q as another production output. Maintain opening/closing finished stocks and carried burdens in the separate storage/dispatch ledger; preserve actual storage, packing, handling, freight and returns burdens. When combining ledgers, cancel internal product and burden handoffs. A delivery-gate dataset must use actual net deliveries and matched opening/closing finished inventory with carried burdens; it cannot relabel Q or assume release equals delivery. |  |
| boundary_state | supplied state | Non-sterile does not justify deleting actual treatment. Record any real subcontract treatment and its losses; sterile or medicated output is outside this scope until independently reassessed. Exclude clinical use and end of life from this manufacturing dataset and disclose them. | `gima-nonsterile-cotton-roll` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Integrated cotton preparation, conversion, packing and release | required | Declared virgin-cotton/peroxide route | Owns all pre-release raw numerators and new release Q | finished_roll: 1 kg |
| storage_dispatch | Separate post-release storage and dispatch ledger | conditional | Actual post-release activities included in the reported dataset | Owns its raw loads and finished-stock carried burdens; no new output Q | Same identified released cohort; supplementary load per 1 kg reference flow |

### Process: Cotton roll manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Virgin ginned cotton lint (`cotton_lint`)

Record the received bale grade, origin, moisture and contaminants; this is cotton lint, not linters, yarn, fabric or synthetic fibre.

- Selected flow: Virgin ginned cotton lint
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `msme-cotton-wool-roadmap`

###### Sodium hydroxide aqueous solution (`caustic_solution`)

Whole purchased scouring solution at its assayed supply concentration; constituent NaOH and carrier water are subledgers.

- Selected flow: Sodium hydroxide aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `msme-cotton-wool-roadmap`

###### Hydrogen peroxide aqueous solution (`peroxide_solution`)

Whole purchased peroxide solution for this declared bleaching route, including its actual stabilizer formulation; no hypochlorite substitution.

- Selected flow: Hydrogen peroxide aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `msme-cotton-wool-roadmap`

###### Sodium carbonate (`soda_ash`)

Include only when the actual scouring recipe uses this separately purchased chemical; otherwise document absence.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `msme-cotton-wool-roadmap`

###### Scouring detergent formulation (`detergent`)

One identified purchased detergent formulation, with supplier grade and full supply composition; do not invent surfactant species or dose.

- Selected flow: Scouring detergent formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `msme-cotton-wool-roadmap`

###### Hydrochloric acid aqueous solution (`acid_solution`)

Include whole purchased dilute acid only if actually used to remove residual alkalinity; another acid requires its own atomic exchange and route reassessment.

- Selected flow: Hydrochloric acid aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `msme-cotton-wool-roadmap`

###### Process water (`water`)

Meter actual separate water additions for scouring, washing, rinsing and cleaning. Recycled water is an internal loop; solution carrier water is not purchased twice.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `msme-cotton-wool-roadmap`

###### Purchased process steam (`steam`)

Use delivered steam mass, inlet and return enthalpy and actual condensate return; purchased steam generation burdens are upstream and are not duplicated as onsite fuel.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `msme-cotton-wool-roadmap`

###### Purchased electricity (`electricity`)

Record opening, extraction, dryer, carding, rolling, cutting, sealing, QC, cleaning, failed runs and pre-release handling loads, with actual supply voltage and geography.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `msme-cotton-wool-roadmap`

###### Paper interleaf (`paper_interleaf`)

Record actual paper grade and mass supplied with the roll where used. Packaging is excluded from cotton reference mass but its production, conversion and losses remain included.

- Selected flow: Paper interleaf
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `msme-cotton-wool-roadmap`

###### Polyethylene packaging bag (`pe_bag`)

Record the actual single heat-sealed polyethylene bag grade and mass. The manufacturer example does not establish its resin grade, thickness or package mass.

- Selected flow: Polyethylene packaging bag
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `msme-cotton-wool-roadmap`

###### Corrugated shipping carton (`carton`)

Include actual corrugated carton only where supplied in the declared release configuration; do not infer carton count or composition from a sales unit.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `msme-cotton-wool-roadmap`

#### Outputs

##### Product flows

###### Wadding, gauze, bandages and similar articles (`finished_roll`)

Terminal Product output: only the qualified non-sterile, unmedicated pure-cotton roll. Native name is a broad family, with empty flowProperties name component, Production mix at plant, Finished product manufactured, HS 2022 30.05 comment, no CAS or geography/locationOfSupply field, Product flow type and one Mass property. Its Chinese basename repeats bandages and is retained verbatim; it is not evidence of a gauze or bandage construction. It provides no fibre, sterility, package, performance or provider quantities. Declare all SKU qualifiers independently.

- Selected flow: Wadding, gauze, bandages and similar articles `6014f191-3872-4607-8c5a-c4a216c96724`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `gima-nonsterile-cotton-roll`

###### Returned steam condensate (`condensate_return`)

Record actual condensate crossing the boundary and its enthalpy; internal condensate circulation is not an external exchange or a cotton coproduct.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `msme-cotton-wool-roadmap`

##### Waste flows

###### Rejected cotton fibre (`cotton_reject`)

Weigh disposed opening/card waste, QC samples and irrecoverable rejects by destination. Internal rework transfers are not discarded waste.

- Selected flow: Rejected cotton fibre
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `msme-cotton-wool-roadmap`

###### Cotton-processing wastewater (`wastewater`)

Measure the combined wet-process effluent and actual composition to external treatment. Carry its treatment burden and transport once; no direct-river emission is invented.

- Selected flow: Cotton-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `msme-cotton-wool-roadmap`

###### Paper interleaf scrap (`paper_scrap`)

Record this paper scrap separately from cotton and plastic rejects and attach actual treatment.

- Selected flow: Paper interleaf scrap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `msme-cotton-wool-roadmap`

###### Polyethylene bag scrap (`pe_scrap`)

Record this film scrap separately and attach actual recovery or disposal.

- Selected flow: Polyethylene bag scrap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `msme-cotton-wool-roadmap`

###### Corrugated carton scrap (`carton_scrap`)

Record damaged cartons separately, when cartons are used.

- Selected flow: Corrugated carton scrap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `msme-cotton-wool-roadmap`

##### Elementary flows

###### Water vapour to air (`water_vapour`)

Determine actual evaporated water from independently measured wet/dry fibre, water, steam and effluent balances; do not infer unknown reaction water and an unknown outlet from the same residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_balance`
- Sources: `msme-cotton-wool-roadmap`

###### Cotton particulate matter to air (`fibre_dust`)

Include measured particulate escape after capture when present; collected dust belongs in the waste row and is not emitted again.

- Selected flow: Cotton particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `msme-cotton-wool-roadmap`

### Process: Storage and dispatch (`storage_dispatch`)

#### Inputs

##### Product flows

###### Purchased electricity (`storage_electricity`)

For an actually included post-release warehouse ledger, retain metered storage and electric handling energy by the same released cohort and residence. Do not move it into the manufacturing raw numerator.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_storage`
- Sources:

###### Diesel fuel (`handling_diesel`)

Include actual diesel-powered handling fuel for that ledger where used, with upstream fuel and separately evidenced combustion emissions in the dataset; absence requires records, not a default zero.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_storage`
- Sources:

###### Road freight transport service (`dispatch_freight`)

Include actual attributable shipment mass times distance for reported dispatch; retain empty-return and load-factor treatment from the provider. No default distance or delivery quantity is assigned.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t km
- Amount rule: A_i / Q, reported once in the original row unit per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_storage`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_separate | shared equipment and utilities | Separate SKU/route/sterility/packaging cohorts first. Use meters or documented physical causation for shared loads; retain failed and zero-output runs in their causal cohort. No default yield, inspection loss or economic allocation factor is assigned. | jrc-ilcd-2010-allocation |
| allocation_rework | rework, waste and coproducts | Internal recirculation cancels on integration and adds its actual repeated processing burdens. Returned/reaccepted cotton is not new production. Cotton rejects are waste unless an evidenced saleable coproduct specification and allocation are declared; no avoided-product credit by assumption. External treatment and recycling are counted once under the declared accounting convention. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule column declares the final report basis only. All collection methods retain undivided raw numerators; normalize_release below owns the only division.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | new accepted output | foreground_records | SKU; lot ID; first release event; net cotton mass; tare; moisture; rejects; returns; WIP | Weigh newly accepted finished rolls on calibrated scales and reconcile unique lot first release. Q is positive new net cotton release, not dispatch or reacceptance. Preserve failed/zero-output lots and WIP ledgers without creating Q. | kg | Each lot and meter interval | Complete actual period and matched cohort with carried burdens | Declared site and named subcontractors | per 1 kg reference flow | Release register, scale calibration and SKU acceptance tests |
| cp_materials | manufacture | fibre and chemical supplies | foreground_records | Receipt mass; issued mass; grade; cotton origin; assay; moisture; carrier water; stock opening/closing; returned issues; WIP burdens | Owner collects undivided raw period totals and opening/closing WIP quantities with carried burdens, including failed, zero-output and rework runs; never perform A_i/Q here. Reconcile issued/returned stocks, whole solutions and separately acquired blend ingredients; count mixing energy/losses. | kg | Each lot and meter interval | Complete actual period and matched cohort with carried burdens | Declared site and named subcontractors | per 1 kg reference flow | Invoices, stock records, supplier composition and assays |
| cp_water | manufacture | water and wet processing | foreground_records | Water meter; batch; wash/rinse additions; recycle; solution water; moisture; WIP water | Owner collects undivided raw period totals and opening/closing WIP quantities with carried burdens, including failed, zero-output and rework runs; never perform A_i/Q here. Measure water additions and loops separately without duplicate carrier-water procurement. | kg | Each lot and meter interval | Complete actual period and matched cohort with carried burdens | Declared site and named subcontractors | per 1 kg reference flow | Calibrated meters and batch water records |
| cp_utilities | manufacture | power and steam | foreground_records | Meter start/end; kWh; steam mass; inlet enthalpy; condensate mass/enthalpy; interval; allocations; standby and failed-run use | Owner collects undivided raw period totals and opening/closing WIP quantities with carried burdens, including failed, zero-output and rework runs; never perform A_i/Q here. Meter supplied energy and condensate, retaining actual utility supply voltage, geography and conversion bases. | kWh; kg; kJ/kg | Each lot and meter interval | Complete actual period and matched cohort with carried burdens | Declared site and named subcontractors | per 1 kg reference flow | Meters, utility bills, steam state and return records |
| cp_packaging | manufacture | each package component | foreground_records | SKU BOM; component grade; issued/returned mass; unit tare; packed lots; scrap; package stocks and WIP | Owner collects undivided raw period totals and opening/closing WIP quantities with carried burdens, including failed, zero-output and rework runs; never perform A_i/Q here. Weigh each component separately; keep all actual paper, bag, carton, ink, label or closure burdens as separate dataset exchanges if present. | kg | Each lot and meter interval | Complete actual period and matched cohort with carried burdens | Declared site and named subcontractors | per 1 kg reference flow | BOM, packaging weighing and issue records |
| cp_waste | manufacture | rejects, effluent and emissions | foreground_records | Stream; mass; moisture; composition; treatment destination; manifests; particulate tests; sampling; failed lots; WIP carried waste burden | Owner collects undivided raw period totals and opening/closing WIP quantities with carried burdens, including failed, zero-output and rework runs; never perform A_i/Q here. Measure each stream and independently supported actual emission species; retain outsourced treatment and transport. Do not use COD as a species or physical mass closure surrogate. | kg | Each lot and meter interval | Complete actual period and matched cohort with carried burdens | Declared site and named subcontractors | per 1 kg reference flow | Waste manifests, effluent analyses, provider and emission records |
| cp_balance | manufacture | physical and water balance | foreground_records | Wet and dry fibre; all solution masses/assays; free and bound water; steam/condensate; wastewater; evaporation; rejects; independent species/reactions; WIP | Owner collects undivided raw period totals and opening/closing WIP quantities with carried burdens, including failed, zero-output and rework runs; never perform A_i/Q here. Reconcile physical mass/elements separately from independently evidenced chemistry and water phase changes; report unresolved balance uncertainty rather than fit reaction water to a residual. | kg | Each lot and meter interval | Complete actual period and matched cohort with carried burdens | Declared site and named subcontractors | per 1 kg reference flow | Independent moisture, composition, water and outlet measurements |
| cp_storage | storage_dispatch | actual separate storage and dispatch loads | foreground_records | Release cohort; opening/closing finished mass and carried burdens; internal handoffs; residence; dispatch/return masses; electricity; diesel; transport mass/distance; repacking and waste | Owner retains undivided raw storage, packing, handling, dispatch, return and rework amounts for identified lots and actual residence, plus opening/closing finished-stock carried burdens. No division, new Q, or removal of undispatched burdens occurs here. Add atomic repacking, combustion-emission and waste rows in the dataset when actually present. | kg; kWh; t km | Each lot and meter interval | Complete actual period and matched cohort with carried burdens | Declared site and named subcontractors | per 1 kg reference flow | Warehouse lot ledger, stock burdens, dispatch records and meters |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_cohort | all manufacturing numerators | For each exchange, retain complete raw consumption/burden, including failed/zero-output and repeated rework. Attribute A_i = raw period burden + opening WIP carried burden - closing WIP carried burden for the same product, route and supplied-state cohort; substantiate actual transfer records. Direct raw physical exchanges and carried historical burdens remain separately traceable; do not add carried mass as a second purchase. Do not subtract finished stock already counted in Q. | raw_period; opening_WIP; closing_WIP; cp_materials; cp_utilities; cp_waste | A_i |  |
| normalize_release | all included inventory rows except terminal reference | q_i = A_i / Q; Q = unique positive newly quality-released net cotton mass in kg for the matched cohort from cp_release. First convert raw records once to each row unit. This is the only normalization: inventory amount expressions, protocol aggregation references and this rule describe the same report operation, not sequential divisions. For storage_dispatch use its separately reconciled A_i attributable to that same release cohort and Q, retaining any unfinished residence as a disclosed scope limit. Q <= 0 cannot produce a normalized released-product dataset; retain its burdens for the matched causal cohort. | A_i; Q; cp_release; cp_storage | q_i |  |
| supply_subledgers | solutions, cotton moisture and water | For each whole purchased formulation m, constituent mass = m times its independent assay fraction. For cotton, dry mass = wet mass times (1 - measured moisture fraction). Carrier water, active matter and fibre dry mass are subledgers, not extra external inputs. Independently support actual species and any reaction-water formation/consumption; keep phase/free/bound-water changes distinct. No COD or closure-residual fitting. | whole_supply_mass; assay_fraction; measured_moisture; cp_balance | constituent_and_water_subledgers |  |
| finished_ledger | storage and dispatch reconciliation | Closing finished stock = opening finished stock + new release + actual returns - actual dispatch - disposal, with other documented physical movements shown explicitly. Carry historical burdens with the same lots. Returns/reacceptance do not increase new release. Integration cancels the release-to-storage internal handoff and its burdens. Actual net delivery, if separately reported, excludes undispatched stock and is a different denominator requiring its own matched carried-burden calculation. | cp_release; cp_storage; stock_movements; carried_burdens | reconciled_finished_ledger |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | supplied product | Retain fibre identification, non-sterile/unmedicated declaration, actual formulation, dimensions, moisture, package BOM and acceptance tests. Generic flow identity does not prove performance or background/provider compatibility. | Supplier and release evidence |
| quality_completeness | all raw loads and transfer burdens | Reconcile stock, WIP, zero-output runs, rejects, rework, outsourcing, utility supply and treatment destinations. Every additional actual ingredient, package component, fuel, waste and emission must have its own atomic dataset exchange. Document excluded scope and remaining uncertainty explicitly. | Raw ledgers and independent balance |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference and scope | Require terminal Product output finished_roll, matching reference UUID, 1 kg net cotton, complete required qualifiers and the declared new-release gate. Reject a different fibre, form, sterile/drug/composite state or unassessed packaging route. | `gima-nonsterile-cotton-roll` |
| validate_period | normalization and ownership | Require positive unique Q, matched raw numerators with failed/zero-output and rework, full WIP carried burdens, and one normalize_release operation. Collection cannot already divide by Q. Do not add closing finished goods to new release or count returns twice. Separate warehouse/dispatch owner and retained loads are mandatory when included. |  |
| validate_balance | mass, water and environmental exchanges | Check physical mass/elements and moisture on stated bases, using independent actual species/reaction evidence. Whole formulations cannot be duplicated as constituent purchases; integrated volume cannot be multiplied by time again. Unknown reaction water cannot close an unknown outlet by the same residual. Retain treatment/provider evidence and uncertainty rather than claim closure from COD. |  |
| validate_evidence | claim limits | Public project recipes, losses, nominal package counts, absorption tests and sterilization discussion are contextual evidence, not industry defaults, clinical equivalence or operating instructions. Missing actual foreground evidence makes the concrete dataset incomplete; it does not create measured values. | `msme-cotton-wool-roadmap`; `gima-nonsterile-cotton-roll` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Environmental modelling of this exact supplied roll and declared release gate |
| allowed_use | Manufacturing inventories with matched SKU, route, fibre, supplied state, moisture, packaging, geography and period |
| excluded_use | Clinical efficacy/safety equivalence, treatment instruction, sterile or other-fibre substitution, whole-CPC coverage and unqualified delivery-gate comparison |
| required_metadata | pure cotton fibre grade and origin; virgin ginned lint; supply and release moisture; roll dimensions and actual net cotton mass; non-sterile and unmedicated state; scour and peroxide/finishing formulation; drying and steam supply; outsourced steps; paper and PE grade and actual packaging architecture; release gate and lot cohort; site geography and period; waste/treatment route; storage and dispatch coverage |
| required_quality_disclosure | Actual raw period and cohort; Q and first-release deduplication; WIP and finished-stock carried burdens; each protocol owner; missing auxiliary identities/provider matching; source and native identity limitations; allocation and scope uncertainty |
| update_trigger | Fibre origin/grade, recipe, outsourcing, bleaching, treatment/sterility, drying, package, release gate, provider or site/period changes |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| msme-cotton-wool-roadmap | official_guidance | MSME Development Institute Chennai, S. Suresh Babuji, Road map for domestic manufacturing of Cotton Wool Absorbent, section 3.5/3.8 and section 5 part 7, PDF pp. 8-9, 25-26; https://www.dcmsme.gov.in/23_COTTON%20WOOL%20by%20Suresh%20Babuji-converted.pdf | Process decomposition and paper/PE packing example only. Indian indicative project, not measured LCI or proof of the GIMA route. Its gamma/sterility passages are contrary scope context; no process settings, quality numbers, recipe, yield, absorption or lifetime defaults are adopted. |
| gima-nonsterile-cotton-roll | handbook | GIMA S.p.A., COTTON WOOL 1000 g - roll, product 34838, Description and product information; https://www.gimaitaly.com/Prodotti/first-aid-emergency/dressing-medication-gauzes-plasters/cotton-wool/cotton-wool-1000-g-roll-34838 | Primary manufacturer product evidence: hydrophilic 100% cotton, roll, non-sterile. Nominal mass and sales-unit count identify one product only, not universal measured mass, usage, performance or packaging intensity. No factory route, cultivar, supply geography or polymer grade is established. |
| jrc-ilcd-2010-allocation | handbook | European Commission JRC, ILCD Handbook General guide Detailed guidance, first edition March 2010, section 7.9.3, PDF pp277–278 / printed pp257–258; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Virtual subdivision and determining physical causality for attributional shared-service burden assignment only. No product-specific route, composition, yield, emission or utility factor, fixed allocation share, substitution credit or full PEF conformity is supplied. Stock and normalization rules remain PCR-specific consistency reasoning. |
