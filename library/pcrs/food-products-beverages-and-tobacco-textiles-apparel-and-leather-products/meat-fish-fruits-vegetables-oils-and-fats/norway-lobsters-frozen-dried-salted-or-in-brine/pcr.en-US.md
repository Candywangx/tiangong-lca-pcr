---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.norway-lobsters-frozen-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Norway lobsters, frozen, dried, salted or in brine

## 1. Scope and Applicability

This PCR supports foreground data packages for raw Norway lobster (*Nephrops norvegicus*), in shell or not, preserved by one declared route: frozen, dried, salted, or in brine. It covers processor-gate operations from receipt of eligible live, fresh, or chilled raw material through preparation, the declared preservation route, packaging, and any on-site storage before dispatch. Capture, aquaculture, landing and inbound transport are upstream dataset inputs; distribution, retail, cooking, consumption and end-of-life are outside the foreground boundary.

Cooked, smoked, canned, or otherwise processed Norway lobster; other lobster species; and route mixtures that cannot be separated into route-specific inventories are excluded. The foreground data package shall not average frozen, dried, salted and brined production unless each route is separately modelled and the aggregation purpose and weighting records are disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.norway-lobsters-frozen-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21254 (exact) |
| covered_products | Raw *Nephrops norvegicus*, in shell or not, frozen, dried, salted, or in brine |
| excluded_products | Live, fresh or chilled product sold without the declared preservation step; cooked, smoked, canned or otherwise processed product; other lobster species; inseparable multi-route averages |
| representative_product | Raw Norway lobster preserved by the single route declared for the foreground data package |
| production_route | Receipt and preparation; exactly one of freezing, drying, salting or brining; packaging; on-site storage when applicable |
| market_state | Packaged preserved product at the processor gate, with route, shell/presentation state and storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Preserved raw Norway lobster suitable for its declared market presentation |
| How much | 1 kg net product mass |
| How well | *Nephrops norvegicus*; declared frozen, dried, salted or brined route; declared in-shell or shell-off presentation; food-safety release criteria met |
| How long or cycle | One production lot through processor-gate dispatch, including the actual declared on-site storage duration |
| reference_flow_link | `norway_lobster_preserved_net_mass` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product mass |
| Reference product flow | Norway lobsters, frozen, dried, salted or in brine `0906636d-b63a-40c2-b99a-d3df121fcac6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species: *Nephrops norvegicus*; preservation route: frozen, dried, salted or brined; presentation: in shell or shell-off; raw state; net-mass method; free brine or glaze exclusion; packaging format; production geography and period; storage temperature and duration when applicable |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net product mass at processor-gate dispatch. Exclude packaging, free preserving brine and external ice or glaze from the reference mass; for glazed frozen product, determine deglazed net mass consistently with CXS 95-1981. |
| `mass_state` | Raw input, prepared intermediate, product, residuals and wastewater | Mass | kg | Record weighed mass and measurement state for each lot. Declare whether shell, surface water, salt uptake, glaze and free brine are included; do not mix wet, drained, deglazed and dry-matter bases. |
| `energy_units` | Electricity and thermal energy | Energy | kWh or MJ | Retain metered units and conversion factors. Convert only with documented factors and keep electricity separate from fuels or purchased heat. |
| `storage_basis` | Refrigeration and storage inputs | Energy or Mass | kWh, MJ or kg | Record actual storage duration, temperature regime, equipment scope and product throughput; allocate shared storage using the rule in section 7. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw *Nephrops norvegicus* received live, fresh or chilled at the processor gate, with source, harvest method, presentation, temperature and incoming mass documented |
| starting_condition_role | Upstream product input to the foreground processing system |
| product_classification_scope | Preserved raw Norway lobster corresponding to CPC 3.0 code 21254; classification does not replace the semantic species, route and presentation qualifiers |
| recursive_input_rule | If an input is already a product within this PCR scope, record it as a purchased preserved product input with its upstream dataset and do not recreate its preservation operations; disclose the quantity and reason |
| upstream_dataset_requirement | Use representative upstream datasets for capture or aquaculture, landing, ice/chilling and inbound transport corresponding to the declared raw-material source |
| disclosure | Report raw-material origin, wild or farmed source, harvest method when known, incoming state, preservation route, product presentation, facility geography, production period, storage regime and any excluded or outsourced operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_separation` | All foreground operations | Include receipt/preparation, exactly one declared preservation route, packaging and applicable on-site storage. Keep route-specific inputs and outputs separate; do not create an unconditional combined frozen/dried/salted/brined inventory. | `unsd-cpc-3-0`; `codex-cxc-52-2003` |
| `boundary_upstream_inputs` | Raw lobster, packaging, salt, water, energy and ancillary materials | Model inputs crossing the processor gate as product flows linked to representative upstream datasets. Capture or aquaculture and inbound transport remain upstream unless the study explicitly extends the foreground boundary and discloses that extension. | `eu-pef-2021-2279` |
| `boundary_food_safety` | Receipt, preparation, preservation, packaging and storage | Include the measurements and control records needed by the facility's prerequisite and HACCP-based food-safety system; food-safety compliance is a release condition, not an environmental credit. | `codex-cxc-52-2003`; `codex-cxs-95-1981` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare` | Raw-material receipt and preparation | `required` | Always; preparation actions are recorded only when performed | Establish lot identity, mass and hygienic starting condition | kg prepared raw Norway lobster |
| `route_preservation` | Declared preservation route | `required` | Execute exactly one declared route: frozen, dried, salted or brined | Produce the preserved product state without mixing route inventories | kg preserved product before packaging |
| `pack_product` | Packaging and final net-mass determination | `required` | Always | Produce the packaged processor-gate product and reference mass | kg net packaged product excluding packaging, free brine and external glaze |
| `store_dispatch` | On-site storage to dispatch | `conditional` | Required for frozen product and whenever any route is stored before dispatch | Maintain declared product condition until processor-gate dispatch | kg product dispatched and storage-duration record |

### Process: Raw-material receipt and preparation (`receive_prepare`)

#### Inputs

##### Product flows

###### Eligible raw Norway lobster (`raw_lobster_input`)

Raw live, fresh or chilled *Nephrops norvegicus* crosses the processor-gate boundary with an upstream dataset.

- Selected flow: Raw Norway lobster, exact Tiangong flow pending review
- Flow property / unit: Mass / kg
- Amount rule: Weighed received mass by lot, retaining source, temperature, presentation and wild/farmed status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared raw Norway lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_route`
- Sources: `unsd-cpc-3-0`; `codex-cxc-52-2003`

###### Water and ice used in preparation (`preparation_water_ice`)

Record potable or otherwise food-safety-compliant water and ice that cross the foreground boundary for washing, rinsing or chilling.

- Selected flow: Process water and ice, exact Tiangong flows pending review
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: Metered, tank-difference or purchase-record quantity; report water and ice separately and record source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared raw Norway lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_records`
- Sources: `codex-cxc-52-2003`; `codex-cxs-95-1981`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared raw Norway lobster (`prepared_lobster`)

Prepared lobster is the measured intermediate passed to the declared preservation route.

- Selected flow: Prepared raw Norway lobster, exact Tiangong flow pending review
- Flow property / unit: Mass / kg
- Amount rule: Weighed prepared mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared raw Norway lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_route`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Rejected lobster and removed material (`preparation_residuals`)

Record rejects, shell or other removed material by destination and legal waste or co-product status.

- Selected flow: Seafood preparation residual, exact Tiangong flow pending review
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balance-derived quantity by destination; calculation is allowed only when all contributing masses are recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared raw Norway lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_route`
- Sources: `codex-cxc-52-2003`

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, including destination and whether its quantity is metered or calculated from water balance.

- Selected flow: Seafood-processing wastewater, exact Tiangong flow pending review
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or calculated water balance with retained inputs and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared raw Norway lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

### Process: Declared preservation route (`route_preservation`)

#### Inputs

##### Product flows

###### Prepared lobster input (`preservation_lobster_input`)

Record the measured prepared-lobster input to the single declared route.

- Selected flow: Prepared raw Norway lobster, exact Tiangong flow pending review
- Flow property / unit: Mass / kg
- Amount rule: Weighed route input by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg preserved product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_route`
- Sources: `codex-cxc-52-2003`

###### Route water, ice or brine water (`route_water_ice`)

Record only water or ice used by the declared route, including glazing water for frozen product and brine water for brined product; omit the row when no such input occurs.

- Selected flow: Process water or ice, exact Tiangong flow pending review
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: Metered or batch-record quantity separated by use and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_records`
- Sources: `codex-cxc-52-2003`; `codex-cxs-95-1981`

###### Salt input (`preservation_salt`)

Record food-grade salt only for salted or brined production and distinguish initial charge, make-up and recoverable carry-over.

- Selected flow: Food-grade salt, exact Tiangong flow pending review
- Flow property / unit: Mass / kg
- Amount rule: Weighed batch issue less documented recovered carry-over; zero or omitted for frozen and unsalted dried routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_records`
- Sources: `codex-cxc-52-2003`

###### Electricity and thermal energy (`preservation_energy`)

Record metered electricity and any fuel or purchased heat used by freezing, drying, brine circulation or other equipment actually operated for the declared route.

- Selected flow: Electricity, fuel or purchased heat, exact Tiangong flows pending review
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Route-submetered use; otherwise allocate a shared meter by documented equipment time, load and rated demand under `allocation_shared_resources`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Route-specific preserved Norway lobster (`preserved_lobster`)

Record product mass and route endpoint. Frozen product shall reach and remain at the route temperature required by the applicable product specification; dried, salted and brined products shall retain route-specific endpoint and food-safety records.

- Selected flow: Norway lobsters, frozen, dried, salted or in brine `0906636d-b63a-40c2-b99a-d3df121fcac6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed preserved product before packaging, with route and measurement state declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg preserved product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_route`
- Sources: `codex-cxc-52-2003`; `codex-cxs-95-1981`

##### Waste flows

###### Preservation residuals and spent brine (`preservation_residuals`)

Record off-specification product, fines, spent salt or brine and other route residuals separately by destination; do not combine free brine with product mass.

- Selected flow: Route-specific food-processing residual or spent brine, exact Tiangong flows pending review
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Measured batch discharge or documented mass balance by residual type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `codex-cxc-52-2003`

###### Preservation wastewater (`preservation_wastewater`)

Record cleaning, thawing, rinsing or brine-management wastewater when it leaves the process boundary.

- Selected flow: Seafood-processing wastewater, exact Tiangong flow pending review
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or calculated water balance, separated from spent brine when destinations differ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

###### Refrigerant released during preservation (`preservation_refrigerant_loss`)

Include route equipment refrigerant losses only when refrigeration equipment is within the foreground operational boundary.

- Selected flow: Refrigerant emission to air by actual substance, exact Tiangong elementary flow pending review
- Flow property / unit: Mass / kg
- Amount rule: Substance-specific service-record loss allocated to the equipment and reporting period; do not apply an uncited default leakage rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved product output during the reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`

### Process: Packaging and final net-mass determination (`pack_product`)

#### Inputs

##### Product flows

###### Preserved lobster input (`packaging_product_input`)

Record route-specific preserved product entering packaging without changing the declared route.

- Selected flow: Norway lobsters, frozen, dried, salted or in brine `0906636d-b63a-40c2-b99a-d3df121fcac6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed packaging-line input by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_route`
- Sources: `codex-cxs-95-1981`

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material and purchased component separately, including reusable packaging cycles when claimed.

- Selected flow: Packaging material by actual material and component, exact Tiangong flows pending review
- Flow property / unit: Mass or Items / kg or item
- Amount rule: Purchase, issue or bill-of-material quantity reconciled to packed units; convert item counts with documented item mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net packaged reference product (`norway_lobster_preserved_net_mass`)

This is the reference flow. Net product mass excludes packaging, free preserving brine and external ice or glaze and retains the declared shell/presentation state.

- Selected flow: Norway lobsters, frozen, dried, salted or in brine `0906636d-b63a-40c2-b99a-d3df121fcac6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net product mass after applying `calc_net_product_mass`
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_lot_mass_route`
- Sources: `codex-cxs-95-1981`

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record line scrap and rejected packaging separately by material and destination.

- Selected flow: Packaging waste by material, exact Tiangong flows pending review
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap or packaging material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

### Process: On-site storage to dispatch (`store_dispatch`)

#### Inputs

##### Product flows

###### Packaged preserved product entering storage (`stored_product_input`)

Record packaged product entering on-site storage. This process is mandatory for frozen product and conditional for other routes.

- Selected flow: Norway lobsters, frozen, dried, salted or in brine `0906636d-b63a-40c2-b99a-d3df121fcac6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or reconciled packaged product entering storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`
- Sources: `codex-cxs-95-1981`

###### Storage electricity and heat (`storage_energy`)

Record actual electricity and any heat used to maintain the declared storage condition.

- Selected flow: Electricity or purchased heat, exact Tiangong flows pending review
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Submetered use or documented shared-store allocation using storage time, occupied capacity and monitored load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg product dispatched for the declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`
- Sources: `codex-cxs-95-1981`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved product dispatched (`dispatched_product`)

Record dispatched mass, storage duration and condition. Frozen product shall be maintained at -18 °C or colder through this process.

- Selected flow: Norway lobsters, frozen, dried, salted or in brine `0906636d-b63a-40c2-b99a-d3df121fcac6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or reconciled dispatch mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`
- Sources: `codex-cxs-95-1981`

##### Waste flows

###### Storage losses (`storage_product_loss`)

Record damaged, temperature-abused or otherwise rejected product by destination.

- Selected flow: Off-specification Norway lobster product, exact Tiangong flow pending review
- Flow property / unit: Mass / kg
- Amount rule: Weighed storage loss by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`
- Sources: `codex-cxc-52-2003`; `codex-cxs-95-1981`

##### Elementary flows

###### Refrigerant released during storage (`storage_refrigerant_loss`)

Include refrigerant loss from in-scope cold stores by actual substance.

- Selected flow: Refrigerant emission to air by actual substance, exact Tiangong elementary flow pending review
- Flow property / unit: Mass / kg
- Amount rule: Substance-specific service-record loss allocated to the cold store and reporting period; do not apply an uncited default leakage rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg product dispatched during the reporting period
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_route_separation` | Multiple preservation routes or materially different presentations | Avoid allocation by subdividing route, line, batch and presentation inventories. Do not allocate a combined multi-route inventory to the reference product when route-specific records can be obtained. | `eu-pef-2021-2279` |
| `allocation_co_products` | Marketed shell, meat, residual or other co-product | First seek process subdivision or a documented physical causal relationship. If this is not feasible, use an economic relationship based on contemporaneous net revenue and report prices, period and sensitivity; do not assign zero burden solely because an output is secondary. | `eu-pef-2021-2279` |
| `allocation_shared_resources` | Shared water, energy, packaging equipment and storage | Prefer direct metering. Otherwise use a documented physical driver such as equipment time and load, line throughput, occupied cold-store capacity and storage duration; disclose the driver and test whether it materially changes results. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | Rejects, wastewater, spent brine, packaging scrap and refrigerant losses | Do not treat waste as a co-product unless a documented market function exists. Include in-boundary collection or treatment operations and emissions, and disclose any downstream waste-treatment dataset and recycling or recovery convention. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_route` | `receive_prepare`; `route_preservation`; `pack_product` | Lot identity, route and mass balance | Weighbridge, scale, batch and release records | lot_id; species; source; wild_or_farmed; incoming_state; route; presentation; raw_mass; prepared_mass; preserved_mass; packed_net_mass; free_brine_or_glaze_mass; residual_mass | Calibrated weighing linked by lot; route and presentation recorded at each transfer | kg | Each lot | Representative production period, normally at least 12 consecutive months or all seasonal campaigns | All in-scope lines and sites | Sum by lot and route; normalize only after mass-state reconciliation | Calibration, lot traceability, release record and reconciliation explanation |
| `cp_material_energy_records` | `receive_prepare`; `route_preservation` | Water, ice, salt, electricity, fuel and heat | Meter, invoice, tank, batch issue and equipment records | timestamp; meter_or_record_id; material_or_energy; quantity; unit; route; line; lot_or_period; allocation_driver | Direct submeter or batch issue preferred; reconcile shared totals to invoices | Native unit plus converted m3, kg, kWh or MJ | Each batch or meter interval | Same period as production data | All in-scope utilities and route equipment | Sum by route and lot/period; allocate only under `allocation_shared_resources` | Meter calibration, invoices, conversion factors and reconciliation |
| `cp_packaging_records` | `pack_product` | Packaging input and scrap | Bill of materials, purchase, issue and scrap records | component_id; material; item_mass; items_issued; reusable_cycles; scrap_mass; packed_units; lot_id | Reconcile issued components, packed units, stock change and scrap | kg and item | Each packaging campaign | Same period as production data | All primary and secondary packaging in scope | Convert items using measured item mass; report each material separately | Supplier specification, item-mass sample and inventory reconciliation |
| `cp_storage_records` | `store_dispatch` | Stored mass, time, temperature and energy | Warehouse management, temperature logger and meter records | lot_id; mass_in; mass_out; loss_mass; entry_time; exit_time; temperature_series; meter_use; occupied_capacity | Link dispatch lots to storage interval and monitored condition | kg; h or day; °C; kWh or MJ | Continuous temperature; each receipt/dispatch; each meter interval | Same period as production data | All in-scope storage rooms | Product-time and capacity-weighted aggregation; preserve route and temperature regime | Logger calibration, alarms, corrective actions and meter reconciliation |
| `cp_waste_and_emissions` | `receive_prepare`; `route_preservation`; `pack_product`; `store_dispatch` | Residuals, wastewater and destinations | Scales, flow meters, manifests and treatment records | waste_id; type; mass_or_volume; unit; route; lot_or_period; destination; treatment; co_product_status | Measure separately by material and destination; water balance only when meters are unavailable | kg or m3 | Each batch, shipment or reporting interval | Same period as production data | All in-scope discharge and waste points | Sum by type and destination; reconcile to mass and water balances | Manifests, meter records, treatment invoices and reconciliation |
| `cp_refrigerant_records` | `route_preservation`; `store_dispatch` | Refrigerant stock and service balance | Equipment register, purchase, charge, recovery and service records | equipment_id; refrigerant; opening_stock; purchases; charged; recovered; closing_stock; service_date; operating_scope | Substance-specific stock/service balance; exclude equipment outside the foreground boundary | kg | Each service event and annual reconciliation | Same period as production data | All in-scope refrigeration equipment | Calculate loss by `calc_refrigerant_loss`, then allocate to in-scope throughput | Service certificates, stock reconciliation and equipment register |
| `cp_food_safety_route` | `receive_prepare`; `route_preservation`; `pack_product`; `store_dispatch` | Route endpoint and release controls | HACCP, sanitation, temperature, salinity, moisture and release records as applicable | lot_id; route; control_point; limit; result; timestamp; corrective_action; release_status | Use the facility's validated route-specific food-safety plan and applicable Codex controls | Route-specific | Each control point and lot | Same period as production data | Every declared route and line | No averaging across failed and released lots; link exceptions to corrective action | HACCP validation, monitoring, verification and release authorization |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_product_mass` | Packaged reference product | Net product mass = gross filled-container mass - packaging tare - free preserving brine - external ice or glaze. Use the legally applicable drained or deglazed method and retain shell/presentation state. | gross mass; packaging tare; free brine mass; external ice/glaze mass | kg net product mass | `codex-cxs-95-1981` |
| `calc_route_yield` | Receipt, preparation and preservation | Yield = net preserved product mass / eligible raw lobster input mass for the same lot and route. Report residual destinations and explain unreconciled mass; do not use an uncited default yield. | eligible raw mass; net preserved mass; residual and discharge records | route-specific kg/kg yield and reconciliation | `codex-cxc-52-2003` |
| `calc_inventory_normalization` | All inventory rows | Normalized amount = allocated foreground amount / dispatched net product mass for the same route, site and period. | foreground amount; allocation record; dispatched net product mass | amount per 1 kg reference flow | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | Refrigeration equipment | Refrigerant loss = opening stock + purchases + charged quantity - recovered quantity - closing stock, reconciled with service records and restricted to in-scope equipment. | substance-specific stock and service fields | kg refrigerant emitted by substance before allocation | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Raw input and reference product | Demonstrate *Nephrops norvegicus* identity, lot traceability, route, raw state, presentation and processor-gate net-mass basis. | Supplier/landing record, species identification, lot record, label and release record; `unsd-cpc-3-0`; `codex-cxs-95-1981` |
| `dq_temporal_geographic_technology` | All foreground data | Use data representative of the declared sites, technologies, seasonal production and reporting period; disclose gaps, outsourced operations and substitutions. | Site list, equipment register, production calendar and representativeness assessment; `eu-pef-2021-2279` |
| `dq_completeness_reconciliation` | Mass, water, energy, packaging, waste and refrigerant records | Reconcile inputs and outputs at route and reporting-period level. Investigate rather than silently close material gaps; report data coverage and estimation share. | Mass/water/energy balances, invoices, meter coverage and gap log; `eu-pef-2021-2279` |
| `dq_measurement_quality` | Metered and weighed records | Retain units, calibration status, sampling frequency, conversion factors and responsible data owner. | Calibration certificates, raw exports, scale logs and calculation workbook |
| `dq_food_safety_records` | All declared routes | Retain validated route-specific controls, monitoring, corrective action and release evidence. Frozen product records shall demonstrate the applicable freezing and storage condition. | HACCP and release records; `codex-cxc-52-2003`; `codex-cxs-95-1981` |
| `dq_provisional_values` | Missing foreground quantities | Do not introduce a numerical default or QA range without reviewed evidence. Any temporary estimate shall be labelled `reasoned_estimate`, documented as replaceable and reported in the data-quality disclosure. | Data-gap register and reviewer decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail if the product-flow UUID, Mass property UUID, unit-group UUID, 1 kg amount, species, raw state, route, presentation or net-mass qualifiers are missing or inconsistent. | `unsd-cpc-3-0`; `codex-cxs-95-1981` |
| `validate_single_route` | Process map and inventory | Fail if no preservation route is declared, more than one route is combined without separate inventories, or a route-specific input is applied unconditionally to another route. | `unsd-cpc-3-0`; `codex-cxc-52-2003` |
| `validate_mass_and_units` | Lot and normalized inventory | Fail if reference mass includes packaging, free brine or external glaze; if mass states are mixed without conversion; or if lot inputs, products and residuals lack a documented reconciliation. | `codex-cxs-95-1981` |
| `validate_route_controls` | Preservation and storage | Fail if applicable food-safety release records are absent. For frozen product, fail if the thermal centre did not reach -18 °C or colder after stabilization or storage was not maintained at -18 °C or colder. | `codex-cxc-52-2003`; `codex-cxs-95-1981` |
| `validate_allocation` | Co-products and shared resources | Fail if avoidable route aggregation remains, an allocation driver lacks records, a marketed co-product is assigned zero burden without justification, or waste conventions are undisclosed. | `eu-pef-2021-2279` |
| `validate_data_completeness` | Foreground package | Fail if required protocols omit route/site/period coverage, if material data gaps are hidden, or if any numerical temporary value is not labelled `reasoned_estimate` and disclosed as replaceable. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-system dataset for preserved raw Norway lobster at the processor gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review for scope, representativeness and data quality |
| allowed_use | Route-specific process or lifecycle modelling that matches species, raw state, presentation, geography, technology, period and processor-gate boundary |
| excluded_use | Live/fresh/chilled, cooked, smoked, canned or other lobster products; other species; undisclosed multi-route averages; capture/aquaculture claims not supported by the linked upstream dataset |
| required_metadata | PCR id; CPC reference; product-flow UUID; species; raw state; preservation route; presentation; net-mass method; site and geography; technology; reporting period; raw-material source; allocation method; storage temperature and duration; upstream datasets |
| required_quality_disclosure | Protocol coverage; metered/weighed share; estimation share; mass/water/energy reconciliation; representativeness; route controls; allocation drivers; non-reference UUID gaps; temporary `reasoned_estimate` values and replacement plan |
| update_trigger | Change in species/scope, preservation route, line technology, energy or refrigerant system, packaging, co-product market, allocation driver, upstream source, site mix, regulation or food-safety specification; or new reviewed quantitative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, official structure and explanatory notes, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-11) | Product-category scope, *Nephrops norvegicus* identity and preservation-route exclusions |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/4/a1553e/a1553e00.pdf (retrieved 2026-08-11) | Process decomposition, prerequisite programmes, HACCP-based controls, hygienic handling, route and storage records |
| `codex-cxs-95-1981` | `standard` | Codex Alimentarius, CXS 95-1981, Standard for Quick-Frozen Lobsters, amended 2024, https://openknowledge.fao.org/handle/20.500.14283/ce0070en (retrieved 2026-08-11) | Norway lobster species and frozen-route definition, -18 °C endpoint/storage, glazing water, deglazed net mass, labelling and release checks |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Boundary consistency, allocation hierarchy, shared-resource allocation, packaging, data quality, completeness and disclosure |
