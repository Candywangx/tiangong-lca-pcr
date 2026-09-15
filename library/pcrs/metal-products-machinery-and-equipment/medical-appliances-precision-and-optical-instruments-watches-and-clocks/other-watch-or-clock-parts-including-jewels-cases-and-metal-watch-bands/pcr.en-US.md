---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-watch-or-clock-parts-including-jewels-cases-and-metal-watch-bands
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other watch or clock parts (including jewels, cases and metal watch bands)

## 1. Scope and Applicability

This PCR applies to the cradle-to-factory-gate production of a declared finished watch or clock part covered by the semantic boundary of CPC 48490. Covered outputs include watch or clock cases and case components, metal watch bands and their links, synthetic jewel bearings prepared as watch or clock parts, and other separately marketable watch or clock parts not classified as complete movements. The dataset shall represent one declared part design and shall not average unlike part types, materials, or finishing routes unless the product mix and weighting basis are disclosed.

Finished watches, finished clocks, complete watch or clock movements, time-recording apparatus, non-metal watch straps, unworked clock or watch glass blanks, repair services, and distribution services are excluded. Upstream production of metals, synthetic corundum, chemicals, electricity, and water is represented by supplier datasets. Use, maintenance, distribution, and end-of-life of the finished watch or clock are outside the boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-watch-or-clock-parts-including-jewels-cases-and-metal-watch-bands |
| classification_refs | CPC 3.0: 48490, exact semantic correspondence (`un-cpc-3-0-structure-2025`) |
| covered_products | Finished watch or clock cases and case components; metal watch bands and links; synthetic jewel bearings made as watch or clock parts; other separately marketable watch or clock parts within CPC 48490 |
| excluded_products | Complete watches; complete clocks; complete movements; non-metal watch straps; unworked clock or watch glass blanks; repair, manufacturing-service, and trade-service outputs |
| representative_product | A declared finished watch or clock part meeting its drawing and release specification; a stainless-steel case component or metal watch-band link is the representative metal route, while a synthetic jewel bearing is a conditional precision-mineral route |
| production_route | Configuration-specific forming or precision machining, optional aqueous cleaning and surface treatment, finishing, inspection, and release; the actual route and all skipped conditional exchanges shall be declared |
| market_state | Saleable finished part at the manufacturing-site gate, after inspection and before incorporation into a complete watch, clock, or movement; removable transport packaging excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a declared finished watch or clock part ready for incorporation into a watch, clock, or movement, or for sale as a replacement part |
| How much | 1 kg of saleable finished part at the manufacturing-site gate |
| How well | Conforming to the declared drawing and release specification for material grade, dimensions and tolerances, surface finish or coating, and applicable skin-contact requirements |
| How long or cycle | One production lot; no use-stage lifetime or timekeeping service is asserted |
| reference_flow_link | Net mass of conforming saleable parts released from the represented production lot, excluding rejects, process scrap, and removable transport packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished watch or clock part (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part type and drawing or stock-keeping identity; material and alloy or synthetic-jewel specification; dimensions and tolerance class; surface finish and coating stack; production technology; saleable product state; site and country or region; production period; recycled-content claim where applicable; skin-contact status; mass inclusion and packaging exclusions |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize inventory to 1 kg of conforming saleable finished parts. Include integral coatings and permanently assembled subcomponents; exclude rejects, process scrap, fixtures, and removable transport packaging from reference-product mass. |
| `count_to_mass` | Records maintained by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass using a lot-specific mean mass from a documented representative sample or verified engineering mass. Retain sample size, scale calibration, and calculation. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh in raw records and convert to MJ using 1 kWh = 3.6 MJ. Declare voltage level, grid geography, on-site generation treatment, and whether facility losses are included. |
| `water_mass` | Process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; when volume is metered, convert with a documented temperature-appropriate density and retain the original volume and conversion assumption. |

## 5. System Boundary

Include receipt of production materials at the foreground gate; forming, cutting, machining, grinding, polishing, drilling, jewel shaping, cleaning, rinsing, surface treatment, coating, inspection, rework, and on-site treatment when performed for the declared part; direct utilities; direct wastes; and direct elementary emissions. The precise route is configuration-specific. Aqueous chemical or electrolytic surface treatment is conditional and shall include its material, water, power, waste, and emission exchanges when operated (`eu-jrc-stm-bref-2006`, `us-epa-ap42-electroplating-12-20`).

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground manufacturing | Include every on-site operation from receipt of production stock through release of the saleable part, including rework and on-site waste or emission controls attributable to the product. |  |
| `boundary_surface_treatment` | aqueous chemical or electrolytic surface treatment | Include cleaning, rinsing, rectifier electricity, bath make-up chemicals, drag-out or bath losses, wastewater, treatment residues, and direct mists when the declared route uses them. | `eu-jrc-stm-bref-2006`; `us-epa-ap42-electroplating-12-20` |
| `boundary_exclusions` | downstream stages | Exclude assembly into a complete movement, watch, or clock; distribution; use; maintenance; and end-of-life unless the study explicitly extends the system and reports those additions separately. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased production stock and chemicals delivered to the manufacturing-site gate, with material grade, stock form, supplier geography, recycled content, and delivery state declared |
| starting_condition_role | Foreground gate for part manufacture; upstream extraction, refining, alloy production, synthetic-corundum production, chemical production, and energy supply remain in linked upstream datasets |
| product_classification_scope | Separately marketable watch or clock parts within the semantic boundary of CPC 48490; classification is mapping context rather than canonical PCR identity |
| recursive_input_rule | If a purchased input is itself a finished part within this PCR boundary, record it as a product input with its own upstream dataset and do not recursively remodel its manufacture in the same foreground process |
| upstream_dataset_requirement | Each purchased material, chemical, electricity, and water input shall link to a geographically and technologically representative upstream dataset; proxies require explicit disclosure and sensitivity review |
| disclosure | Declare part type, bill of materials, alloy or synthetic-jewel grade, route steps, surface-treatment chemistry, rework, yield, subcontracted operations, waste treatment, air-release compartment, site geography, production period, and packaging exclusions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_manufacture_release` | Manufacture, finishing, inspection, and release of the declared watch or clock part | required | Always; each conditional inventory row is recorded only when its stated material or technology is used, and skipped rows are declared not applicable | Aggregated foreground production process | 1 kg of conforming saleable finished part |

### Process: Manufacture, finishing, inspection, and release (`part_manufacture_release`)

#### Inputs

##### Product flows

###### Stainless-steel production stock (`stainless_steel_input`)

Record purchased stainless steel crossing the foreground gate when the declared part contains stainless steel. The bill of materials and receiving records determine the mass; alloy grade, stock form, supplier, recycled content, and delivery state remain foreground qualifiers.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net purchased stainless-steel mass issued to represented lots, less documented returns to stores, normalized to saleable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming saleable finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `reclaru-2023-watch-straps-corrosion`

###### Synthetic-ruby blank (`synthetic_ruby_blank`)

Record synthetic-ruby blanks only for a declared jewel-bearing route. The selected flow remains UUID-unresolved; do not substitute rubber, generic abrasive, or natural gemstone flows.

- Selected flow: Synthetic ruby blank (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass of synthetic-ruby blanks issued to represented lots, less documented returns to stores, normalized to saleable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming saleable finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources:

###### Purchased electricity (`electricity_input`)

Record electricity consumed by attributable forming, machining, jewel shaping, cleaning, surface treatment, finishing, inspection, and on-site control equipment. Allocate shared meters only by a documented causal driver.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered or causally allocated electricity for represented lots, converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming saleable finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources:

###### Process water (`process_water_input`)

Record water supplied for cleaning, rinsing, aqueous machining-fluid preparation, and attributable on-site treatment. Cooling water in a closed loop is recorded only for net make-up crossing the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or tank-balance process-water input attributable to represented lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming saleable finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `eu-jrc-stm-bref-2006`; `us-epa-ap42-electroplating-12-20`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide_input`)

Record sodium hydroxide only when it is added to an alkaline cleaning bath used for the declared part. Record pure-substance equivalent and retain solution concentration and replenishment records.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased solution mass multiplied by verified sodium-hydroxide mass fraction, adjusted for stock change and normalized to saleable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming saleable finished part using alkaline cleaning
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_records`
- Sources: `us-epa-ap42-electroplating-12-20`

###### Chromium trioxide for hexavalent chromium treatment (`chromium_trioxide`)

Record chromium trioxide only when the declared route uses a hexavalent-chromium bath. The UUID remains unresolved because the name-matching candidate had a conflicting chemical classification.

- Selected flow: Chromium trioxide (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Pure chromium-trioxide equivalent added to attributable baths, adjusted for inventory change and documented recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming saleable finished part using the hexavalent-chromium route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_records`
- Sources: `us-epa-ap42-electroplating-12-20`

###### Cutting fluid (`cutting_fluid_input`)

Record formulated cutting fluid crossing the foreground boundary when used for machining. Retain formulation type, concentrate dilution, replenishment, recovered volume, and stock change.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass of cutting-fluid product consumed, including concentrate and make-up but excluding internally recirculated fluid
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming saleable finished part using cutting fluid
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_records`
- Sources:

##### Waste flows

No waste flow is accepted as an input to this aggregated foreground process. Recycled-content claims belong to the purchased-material dataset and required qualifiers.

##### Elementary flows

No direct elementary input is prescribed. Any site-specific resource withdrawal crossing from the environment shall be added as its own atomic elementary-flow row in the foreground dataset.

#### Outputs

##### Product flows

###### Conforming finished watch or clock part (`finished_watch_clock_part`)

Record only parts released as conforming saleable output. The generic reference-product UUID is unresolved because available candidates represented narrower case, movement-component, or kitted-component states.

- Selected flow: Finished watch or clock part (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg reference product after normalization from measured saleable lot output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming saleable finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated steel chips, turnings, stampings, and rejected steel pieces leaving the foreground process for recycling or treatment. Apply this row only when steel is processed and disclose contamination and destination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net mass of post-industrial steel scrap leaving the represented lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming saleable finished part using steel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_shipments`
- Sources:

###### Waste cutting oil (`waste_cutting_oil`)

Record waste cutting oil leaving the site only when the machining fluid is oil-based. Aqueous spent machining fluid requires a separately resolved atomic waste flow and shall not be reported under this UUID.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass of waste cutting oil transferred off site, adjusted for documented retained inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming saleable finished part using oil-based cutting fluid
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_shipments`
- Sources:

###### Metal-bearing surface-treatment wastewater (`metal_bearing_wastewater`)

Record aqueous effluent containing dissolved or suspended treatment metals when it leaves the foreground process for on-site or off-site treatment. The UUID remains unresolved; generic cleaning wastewater is not an exact substitute.

- Selected flow: Metal-bearing surface-treatment wastewater (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered discharge mass or volume converted to mass with documented density, including attributable rinses and bath dumps and excluding internal recirculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming saleable finished part using aqueous surface treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_liquid_waste`
- Sources: `eu-jrc-stm-bref-2006`; `us-epa-ap42-electroplating-12-20`

##### Elementary flows

###### Chromium(VI) emission to air, unspecified (`chromium_vi_air`)

Record chromium(VI) released after control only when a hexavalent-chromium operation is used and the site cannot support a more specific air-compartment flow. Do not include upstream emissions from electricity or chemical production.

- Selected flow: chromium (vi) `08a91e70-3ddc-11dd-950b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Site-measured controlled release or a documented bath-specific mass balance for the represented lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming saleable finished part using a hexavalent-chromium route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-ap42-electroplating-12-20`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | multi-product manufacturing | Prefer subdivision, lot tracing, machine time, material issues, and dedicated meters so the declared part receives directly attributable inputs and outputs. |  |
| `allocation_shared_operations` | unavoidable shared utilities and support operations | Use a causal physical driver such as measured machine-hours, bath loading area-time, or metered throughput. Mass allocation is allowed only when the same operation and material state make mass causal; disclose the driver and test sensitivity. |  |
| `allocation_scrap` | post-industrial scrap and recovered materials | Treat process scrap as a waste output at the foreground gate. Do not subtract avoided primary production or recycling credit inside the inventory; any end-of-life or substitution modelling shall be reported separately. |  |
| `allocation_no_value_default` | valuable parts or by-products | Economic allocation is not the default. If physical causality cannot be established and economic allocation is used, disclose prices, period, currency, allocation share, and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issues` | `part_manufacture_release` | stainless-steel stock; synthetic-ruby blanks | purchase, receiving, stores issue, return, and bill-of-material records | material identity; alloy or grade; stock form; supplier; batch; gross issue; returned quantity; recycled content | Reconcile receiving and stores movements to production orders and inventory change | kg | per issue and monthly reconciliation | Representative continuous 12-month period or all lots in a shorter declared campaign | All manufacturing sites in the dataset | Sum net issues by atomic material and divide by conforming saleable output | Purchase specification, receiving inspection, calibrated scale records, and inventory reconciliation |
| `cp_utility_meters` | `part_manufacture_release` | electricity; process water | utility meters, submeter logs, and production timestamps | opening and closing readings; meter id; unit; route equipment; production order; allocation driver | Read dedicated meters or allocate shared meters using documented machine-hours or throughput | kWh; m3; kg | per batch or shift, aggregated monthly | Same period as represented production | All attributable equipment and on-site controls | Subtract baselines, allocate shared use, convert units, and divide by conforming saleable output | Meter calibration, bills, time logs, and reconciliation to facility totals |
| `cp_chemical_records` | `part_manufacture_release` | sodium hydroxide; chromium trioxide; cutting fluid | purchase, batch make-up, issue, concentration, recovery, and stock records | chemical identity; concentration; issued quantity; returned or recovered quantity; opening and closing stock; bath or machine id | Reconcile net consumption by chemical and convert formulated product to declared pure-substance basis only where required | kg | per addition and monthly reconciliation | Same period as represented production | All applicable baths and machining equipment | Net additions plus opening stock minus closing stock and recovery, divided by conforming saleable output | Supplier certificate, concentration test, issue log, stock reconciliation, and scale calibration |
| `cp_product_output` | `part_manufacture_release` | conforming finished part | production order, inspection, reject, rework, and dispatch records | part identity; lot; gross output; reject mass; rework return; conforming released mass | Weigh or count released parts and convert counts using `count_to_mass` | kg; item | per lot | Same period as all inputs and outputs | All represented production lines and sites | Sum conforming released mass only; use it as normalization denominator | Release certificate, inspection record, scale calibration, and count-to-mass sample |
| `cp_waste_shipments` | `part_manufacture_release` | post-industrial steel scrap; waste cutting oil | waste container weights, manifests, recycler receipts, and inventory records | waste identity; source operation; gross and tare mass; moisture or contamination; destination; opening and closing stored mass | Weigh each outbound container and reconcile stored waste | kg | per shipment and monthly inventory | Same period as represented production | All represented production lines and waste storage | Shipments plus closing stored mass minus opening stored mass, divided by conforming saleable output | Calibrated scale ticket, waste manifest, composition evidence, and recycler receipt |
| `cp_liquid_waste` | `part_manufacture_release` | metal-bearing surface-treatment wastewater | effluent meter, tank transfer, laboratory, and treatment records | flow or transferred volume; density; metal species and concentration; bath origin; treatment route; recirculation | Meter discharge or reconcile tank transfers; convert volume to mass and exclude internal recirculation | m3; kg; mg/L | per discharge or continuously, aggregated monthly | Same period as represented production | All applicable surface-treatment lines and treatment units | Sum net boundary-crossing discharge mass and divide by conforming saleable output | Meter calibration, tank gauge record, laboratory chain of custody, and treatment manifest |
| `cp_air_emissions` | `part_manufacture_release` | chromium(VI) air emission | stack test, continuous or periodic measurement, bath operation, control-device, and production records | chromium(VI) concentration; gas flow; test duration; control status; bath current-time; represented output; release compartment | Use compliant site measurements where available; otherwise use a disclosed bath-specific mass balance and flag the estimation method | kg; mg/m3; m3/h | each required test and each operating period represented | Same production period or a justified representative test period | Every applicable hexavalent-chromium source and control device | Integrate measured release over operating time and divide by conforming saleable output | Test report, method, detection limit, instrument calibration, operating log, and control inspection |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | all inventory rows | Normalized amount = boundary-crossing amount attributable to represented lots / conforming released product mass | Attributable flow amount; conforming released mass | Flow amount per 1 kg reference product |  |
| `calc_electricity_conversion` | electricity | Electricity (MJ) = metered electricity (kWh) × 3.6 | Metered kWh | MJ |  |
| `calc_solution_active_mass` | sodium hydroxide and chromium trioxide | Pure-substance mass = purchased or issued solution mass × verified mass fraction, adjusted for stock change and recovery | Solution mass; concentration; stock change; recovery | kg pure substance | `us-epa-ap42-electroplating-12-20` |
| `calc_count_to_mass` | item-count output records | Released mass = released item count × documented lot-specific mean mass | Count; representative sample masses | kg conforming released product |  |
| `calc_chromium_air` | chromium(VI) air release | Integrate measured concentration × dry gas flow × operating time after controls; if a mass balance is used, disclose every term and uncertainty | Concentration; gas flow; time; or bath input, recovery, waste and retained inventory | kg chromium(VI) emitted | `us-epa-ap42-electroplating-12-20` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and materials | Preserve part drawing or stock-keeping identity, material grade, supplier, stock form, surface finish, and Tiangong flow UUID where resolved; never aggregate unlike part types without weights. | Drawing, bill of materials, supplier certificate, receiving inspection, and flow audit |
| `dq_temporal` | all foreground records | Use a continuous representative 12-month period where available; a shorter campaign shall cover all lots and disclose seasonality, maintenance, start-up, and abnormal events. | Dated production, meter, material, waste, and maintenance records |
| `dq_completeness` | all boundary exchanges | Reconcile material input with conforming output, rejects, scrap, waste, emissions, inventory change, and documented uncertainty; explain every material imbalance. | Lot mass balance and reconciliation worksheet |
| `dq_measurement` | meters, scales, concentration tests, and emission tests | Use instruments within calibration; retain units, detection limits, sampling method, conversion factors, and data corrections. | Calibration certificates, laboratory chain of custody, and test reports |
| `dq_route_disclosure` | conditional technologies | Declare whether stainless steel, synthetic jewel material, cutting fluid, aqueous cleaning, chromium treatment, and emission controls apply; a skipped row requires a not-applicable justification. | Process flow diagram, route declaration, and production-order evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | functional unit and reference flow | Verify that the reference output is exactly 1 kg of one declared conforming part design and that all required qualifiers are present. | `un-cpc-3-0-structure-2025` |
| `validate_inventory_accounting` | inventory completeness | Confirm that every boundary-crossing material, chemical, utility, waste, and direct elementary exchange is atomic, has one direction and flow type, and is normalized to the same conforming-output mass. |  |
| `validate_conditional_routes` | conditional rows | Verify each conditional row against the declared bill of materials and route; require an amount when applicable and a documented not-applicable reason when absent. |  |
| `validate_mass_balance` | material conversion | Reconcile material inputs with conforming output, scrap, liquid wastes, direct releases, stock change, and documented measurement uncertainty; investigate unexplained gaps. |  |
| `validate_surface_treatment` | aqueous or electrolytic treatment | When surface treatment is used, verify bath chemistry, water, electricity, wastewater, treatment residues, and measured or calculated direct emissions against operating and control records. | `eu-jrc-stm-bref-2006`; `us-epa-ap42-electroplating-12-20` |
| `validate_uuid_scope` | Tiangong references | Reject narrower case, movement-component, kitted-product, external-supply waste, wrong-compartment emission, and chemically misclassified UUIDs as substitutes for the declared rows. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a verified foreground production package |
| downstream_use | Product-system modelling of a declared watch or clock part, including later assembly into a movement, watch, or clock |
| allowed_use | Use for the declared part design, material, finishing route, site or represented geography, technology, and production period; adaptation is allowed only when differences and sensitivity are documented |
| excluded_use | Finished watches or clocks; complete movements; non-metal straps; unworked glass blanks; repair or trade services; undisclosed averages across unlike parts; use-stage lifetime claims |
| required_metadata | PCR id and version; part identity; drawing or stock-keeping identity; material and alloy grade; dimensions; finish or coating stack; skin-contact status; site and geography; technology; production period; reference mass basis; bill of materials; route steps; allocation; upstream datasets; unresolved UUIDs |
| required_quality_disclosure | Primary-data share; temporal, geographic, and technological representativeness; meter and scale coverage; mass-balance closure; allocation shares; proxy datasets; rework; yield; waste destinations; emission measurement methods and detection limits; excluded operations |
| update_trigger | Change in part design or material, alloy supplier or recycled content, forming or machining technology, surface-treatment chemistry or control, site or electricity mix, allocation driver, yield, waste route, upstream dataset, or any foreground value beyond its documented uncertainty |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, row 48490. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official classification identity and semantic product boundary |
| `eu-jrc-stm-bref-2006` | `official_guidance` | European Commission Joint Research Centre, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, adopted August 2006. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-07) | Conditional aqueous electrolytic or chemical surface-treatment boundary and associated activities |
| `us-epa-ap42-electroplating-12-20` | `official_guidance` | United States Environmental Protection Agency, AP-42 Section 12.20, Electroplating. https://www.epa.gov/sites/default/files/2020-11/documents/b12s20.pdf (retrieved 2026-09-07) | Electroplating process decomposition, alkaline cleaning, rinsing, bath chemistry, and direct mist-emission collection |
| `reclaru-2023-watch-straps-corrosion` | `literature` | Reclaru, L. (2023), Sensitization to Corrosion of Austenitic Stainless Steels: Watch Straps Intended to Come into Direct and Prolonged Contact with Skin. Coatings 13(1), 18. https://doi.org/10.3390/coatings13010018 | Stainless-steel watch-band material identity and alloy-grade and skin-contact qualifiers |
