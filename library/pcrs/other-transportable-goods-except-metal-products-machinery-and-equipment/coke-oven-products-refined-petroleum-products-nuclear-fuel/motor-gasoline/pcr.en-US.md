---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.motor-gasoline
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Motor gasoline

## 1. Scope and Applicability

This PCR governs foreground data packages for finished motor gasoline produced at a petroleum refinery or gasoline blending facility and released at the declared refinery gate. It is product-category methodology, not a specification for one octane grade, one refinery configuration, or one national market.

The foreground boundary begins with receipt of crude oil, intermediate refinery feedstocks, blending components, oxygenates, additives, purchased energy, water, hydrogen, and treatment chemicals at the refinery boundary. It covers the separation, conversion, treating, utility, environmental-control, blending, batch-certification, finished-product storage, and refinery-gate dispatch operations that are attributable to the released gasoline. Upstream production and transport of purchased inputs are linked through separate datasets. Downstream terminal distribution, filling-station operations, vehicle use and combustion, and end-of-life activities are outside the default gate.

The data producer shall apply the product standard and legal requirements valid for the declared geography and production period. Product grade, octane designation, sulfur and benzene content, oxygenate type and fraction, biogenic carbon fraction, seasonal or volatility class, density reference conditions, and release-batch status shall be disclosed rather than assumed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.motor-gasoline |
| classification_refs | CPC 3.0: 33311 Motor gasoline (exact classification context; positive mapping governance remains outside this PCR) |
| covered_products | Finished motor gasoline for spark-ignition road-vehicle engines, including conventional and oxygenated grades when petroleum-derived gasoline remains the basic constituent and the product is classified as motor gasoline under the applicable market rules |
| excluded_products | Aviation gasoline; gasoline-type jet fuel; naphtha; unfinished blendstocks and octane-enhancing components sold as such; refinery fuel gas; liquefied petroleum gas; high-alcohol or other alternative fuels that do not remain within the declared motor-gasoline classification; downstream distribution service; vehicle combustion service |
| representative_product | Production-weighted mix of conforming finished motor-gasoline batches released by the declared refinery or facility for the stated geography and reporting period |
| production_route | Receipt and separation of refinery feedstocks; route-specific conversion and treating; utility and environmental-control services; component blending and batch certification; finished-product storage and refinery-gate dispatch |
| market_state | Bulk liquid, released as a conforming finished batch in refinery product storage or at the refinery dispatch point before downstream distribution |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished motor gasoline meeting the declared applicable product specification at the refinery gate |
| How much | 1 kg |
| How well | A released, conforming batch with the required product and market qualifiers disclosed |
| How long or cycle | The facility reporting period used to construct the production-weighted dataset; no use-phase service duration is included |
| reference_flow_link | motor_gasoline_ref |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | applicable specification and release status; geography and facility gate; reporting period; octane grade or grade mix; sulfur and benzene content; oxygenate type and fraction; fossil and biogenic fractions; seasonal or volatility class; density value, temperature basis and test method; refinery configuration and crude/feedstock slate; allocation method |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the completed foreground inventory to 1 kg net finished motor gasoline dispatched at the declared gate. Do not substitute volume without a documented batch-specific conversion. |
| `volume_to_mass` | Liquid feedstocks, components, finished batches and inventory changes reported by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert metered volume with the density measured or certified for the represented batch and record the temperature basis, test method, source record and conversion formula. |
| `energy_basis` | Purchased fuels, refinery fuel, steam, electricity and energy-based allocation | Energy or net calorific value appropriate to the selected flow | MJ and/or kWh, retained with conversion metadata | Preserve measured billing or meter units. When lower-heating-value energy is used for allocation, apply one consistent LHV basis and retain product-specific LHV evidence rather than a generic gasoline constant. |
| `component_separation` | Oxygenates, renewable components and additives | Mass and, where required by the applicable specification, volume fraction | kg and declared fraction unit | Record each component separately before calculating the finished blend; fossil gasoline, biogenic oxygenates and other blending components shall not be collapsed into one unqualified input. |
| `inventory_change` | Tanks and work-in-process | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile opening inventory, receipts, internal transfers, production, dispatch, rework, losses and closing inventory on the same density and temperature basis. |
| `emission_basis` | Direct air and water releases | Species-specific flow property and unit | kg unless the selected flow requires another unit | Record measured or calculated species separately and retain dry/wet basis, oxygen reference, standard-condition conversion, monitoring period and method where applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Metered or invoiced crude oil, refinery feedstocks, blending components, oxygenates, additives, purchased energy, water, hydrogen and treatment chemicals received at the declared refinery boundary, with quantity, composition or grade, origin, time and inventory state recorded |
| starting_condition_role | Foreground refinery-gate starting condition; upstream production and inbound transport are represented by linked supplier or regional datasets rather than recreated inside the foreground refinery processes |
| product_classification_scope | Finished motor gasoline only; aviation gasoline, jet fuel, naphtha, unfinished blendstocks sold as products, and alternative fuels outside the declared motor-gasoline classification are excluded |
| recursive_input_rule | Motor gasoline or same-category rework entering the foreground system shall be recorded as a separate product input with supplier or prior-batch identity. Stop recursion at the declared upstream dataset and prevent its burdens or mass from being counted again as virgin refinery production. |
| upstream_dataset_requirement | Link each purchased feedstock, energy carrier, hydrogen, oxygenate, additive, chemical and inbound transport service to a temporally, geographically and technologically representative upstream dataset; disclose proxy use and material gaps |
| disclosure | Facility and gate; refinery configuration; included process units; crude and feedstock slate; production and inventory period; product-grade mix; oxygenate and biogenic fractions; applicable product standard; allocation drivers and factors; shared utilities and controls; flare, storage, wastewater and waste-treatment coverage; exclusions and proxies |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | foreground_system | Include operations from receipt of refinery feedstocks and purchased inputs through release and dispatch of finished motor gasoline at the declared refinery gate. | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `boundary_required_operations` | process_completeness | Include every separation, conversion, treating, hydrogen-consuming, utility, blending, storage and environmental-control operation that materially serves the represented gasoline route; mark non-applicable units explicitly. | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `boundary_upstream_links` | purchased_inputs | Model purchased crude oil, feedstocks, energy, hydrogen, components, chemicals and transport with separate upstream datasets and avoid duplicating their production inside the foreground refinery. | `eu-pef-method-2021` |
| `boundary_direct_releases` | foreground_emissions_and_waste | Include direct combustion and process releases, catalyst-regeneration emissions, flaring, fugitive and storage/loading losses, wastewater discharges, recovered sulfur, spent catalysts, sludges and other wastes when generated by included operations. | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `boundary_exclusions` | downstream_and_use | Exclude downstream terminal distribution, retail dispensing and vehicle combustion unless the study explicitly extends the gate and reports those stages separately. | `un-cpc-v3-2025`; `eu-pef-method-2021` |
| `boundary_capital_goods` | infrastructure | Exclude capital equipment by default only when the goal and applicable program permit it; disclose the exclusion and include material infrastructure when required by the governing study rules. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_separation` | Feedstock receipt, desalting and primary separation | required | Always include; units that are not operated for the represented feedstock slate shall be marked not applicable | Foreground feedstock conditioning and atmospheric/vacuum fractionation | Net mass of separated streams transferred to downstream refinery units during the reporting period |
| `conversion_treating` | Gasoline-component conversion and treating | required | Include the actual route-specific combination of cracking, hydrocracking, reforming, isomerization, alkylation, hydrotreating, sweetening and related recovery operations | Foreground production and upgrading of gasoline blend components | Net mass of treated gasoline-range components transferred to blending |
| `utilities_environment` | Refinery utilities and environmental controls | required | Include onsite and purchased utilities plus controls and treatment systems serving included operations; allocate shared services transparently | Shared steam, electricity, fuel, hydrogen, cooling, flare, sulfur recovery, wastewater and waste treatment | Metered service quantities and treated outputs attributable to included operations |
| `blending_certification` | Finished-gasoline blending and batch certification | required | Always include final component blending, additives, oxygenates, rework, quality testing and release decision | Foreground creation of conforming finished motor gasoline | Net mass of released gasoline transferred to finished-product storage |
| `storage_dispatch` | Finished-product storage and refinery-gate dispatch | required | Always include finished-product tankage and dispatch up to the declared gate; include loading only when it is inside that gate | Foreground storage, inventory reconciliation and reference-product dispatch | Net mass of conforming motor gasoline dispatched at the declared gate |

### Process: Feedstock receipt, desalting and primary separation (`feedstock_separation`)

#### Inputs

##### Product flows

###### Received crude oil and other refinery feedstocks (`received_refinery_feedstocks`)

Record each crude oil, condensate, unfinished oil and purchased intermediate stream that enters the refinery boundary and contributes to the represented gasoline production.

- Selected flow: Crude oil and refinery feedstocks, separated by grade and supplier
- Flow property / unit: Mass / kg
- Amount rule: measured receipt mass adjusted for documented inventory transfers and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_separation_records`
- Sources: `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

###### Desalting water and process chemicals (`separation_water_chemicals`)

Record make-up water, demulsifiers, caustic and other chemicals delivered specifically to feedstock conditioning and primary separation.

- Selected flow: Process water and separation chemicals, recorded as separate product flows
- Flow property / unit: Mass or volume with documented conversion / kg or m3
- Amount rule: metered, invoiced or stock-reconciled consumption by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_separation_records`
- Sources: `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

##### Waste flows

No waste input is mandatory. Imported slops or residues accepted for reprocessing shall be recorded as separate waste inputs and shall not be hidden in the crude-oil quantity.

##### Elementary flows

No elementary input is prescribed separately from the selected upstream product datasets.

#### Outputs

##### Product flows

###### Separated refinery streams (`separated_refinery_streams`)

Record measured transfers of naphtha and other fractions from primary separation to conversion, treating, blending, fuel or co-product routes.

- Selected flow: Refinery intermediate streams, separated by stream identity
- Flow property / unit: Mass / kg
- Amount rule: calculated from calibrated transfer meters and tank inventory changes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per process output and reconciled to the facility reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_separation_records`
- Sources: `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

##### Waste flows

###### Desalter sludge, oily solids and wastewater sent to treatment (`separation_residuals`)

Record residues leaving separation for onsite or offsite treatment without netting recovered hydrocarbons against the waste quantity.

- Selected flow: Oily sludge and refinery wastewater, recorded separately
- Flow property / unit: Mass or volume with solids and oil content / kg or m3
- Amount rule: measured transfer quantity with composition or dry-matter basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_separation_records`
- Sources: `eu-jrc-ref-bref-2015`

##### Elementary flows

###### Direct separation-unit releases (`separation_direct_releases`)

Create one exchange per measured or calculated pollutant released directly from included separation equipment, heaters and vents; do not aggregate unlike species.

- Selected flow: Species-specific air and water elementary flows
- Flow property / unit: Mass / kg
- Amount rule: monitored release or regulator-approved calculation based on operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_separation_records`
- Sources: `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

### Process: Gasoline-component conversion and treating (`conversion_treating`)

#### Inputs

##### Product flows

###### Gasoline-range and conversion feed streams (`conversion_feed_streams`)

Record each internal or purchased feed stream entering the route-specific conversion and treating units used for the gasoline blend.

- Selected flow: Refinery intermediate feed streams, separated by unit and stream identity
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled across unit boundaries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per unit output and facility reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

###### Hydrogen, catalysts and treating chemicals (`conversion_auxiliaries`)

Record purchased and internally supplied hydrogen, catalyst make-up, caustic, amines, solvents and other process chemicals by consuming unit.

- Selected flow: Hydrogen, catalysts and treating chemicals, recorded as separate product flows
- Flow property / unit: Mass / kg
- Amount rule: meter, invoice, batch-charge or catalyst-inventory consumption attributable to the included units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per unit output and normalized to 1 kg finished motor gasoline
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `eu-jrc-ref-bref-2015`

##### Waste flows

No waste input is mandatory. Reprocessed catalyst fines or refinery residues shall be recorded explicitly when they cross the process boundary.

##### Elementary flows

No elementary input is prescribed separately from the selected upstream and utility product datasets.

#### Outputs

##### Product flows

###### Treated gasoline blend components (`treated_gasoline_components`)

Record each route-specific gasoline component transferred to final blending, retaining its unit of origin and measured properties.

- Selected flow: Treated gasoline-range blend components
- Flow property / unit: Mass / kg
- Amount rule: measured net component production after unit recycle and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per unit output and normalized to 1 kg finished motor gasoline
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

###### Refinery co-products and internal fuels (`conversion_co_products`)

Record LPG, refinery gas, sulfur-bearing streams, coke and other co-products separately, identifying internal consumption and external sale without double counting.

- Selected flow: Unit-specific refinery co-products and internal fuels
- Flow property / unit: Mass or energy with documented conversion / kg or MJ
- Amount rule: measured net output by destination and inventory state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per unit output and facility reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `eu-jrc-ref-bref-2015`

##### Waste flows

###### Spent catalysts and conversion residues (`spent_catalysts_residues`)

Record spent catalyst, catalyst fines, filter solids and unit residues by treatment or recovery destination.

- Selected flow: Spent catalyst and refinery process residue, separated by material
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or inventory-change quantity on a stated wet or dry basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `eu-jrc-ref-bref-2015`

##### Elementary flows

###### Conversion and catalyst-regeneration releases (`conversion_direct_releases`)

Create species-specific exchanges for direct releases from process heaters, cracking and catalyst regeneration, reforming, hydrogen-consuming units, vents and flares attributable to the included route.

- Selected flow: Species-specific CO2, CH4, N2O, CO, NOx, SOx, VOC and particulate elementary flows, plus other monitored pollutants
- Flow property / unit: Mass / kg
- Amount rule: continuous monitoring, stack test, mass balance or regulator-approved calculation from operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

### Process: Refinery utilities and environmental controls (`utilities_environment`)

#### Inputs

##### Product flows

###### Purchased and onsite utility inputs (`utility_inputs`)

Record purchased electricity and steam, refinery fuels, natural gas, make-up water, cooling-water make-up, boiler chemicals and externally supplied hydrogen that serve included operations.

- Selected flow: Electricity, steam, fuels, water, hydrogen and treatment chemicals as separate product flows
- Flow property / unit: Energy or mass / kWh, MJ, kg or m3 as applicable
- Amount rule: metered or invoiced quantity assigned to included operations using the declared utility-allocation driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_environment_records`
- Sources: `eu-jrc-ref-bref-2015`; `argonne-refinery-allocation-2003`

##### Waste flows

###### Wastewater and residuals received for onsite treatment (`waste_received_for_treatment`)

Record wastewater, oily sludge, spent caustic and other residuals transferred from included foreground units to shared onsite treatment.

- Selected flow: Refinery wastewater and treatment feed wastes, separated by source and type
- Flow property / unit: Volume and mass with composition / m3 and kg
- Amount rule: measured transfer quantity reconciled to treatment-plant influent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per facility reporting period and allocated to 1 kg finished motor gasoline
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_environment_records`
- Sources: `eu-jrc-ref-bref-2015`

##### Elementary flows

No elementary input is prescribed separately from water-withdrawal flows selected for the represented geography.

#### Outputs

##### Product flows

###### Utility services and recovered products (`utility_services_recovered_products`)

Record internally generated steam, electricity and hydrogen delivered to included units and recovered sulfur or other saleable treatment products by destination.

- Selected flow: Steam, electricity, hydrogen and recovered products as separate product flows
- Flow property / unit: Energy or mass / MJ, kWh or kg
- Amount rule: metered output less documented distribution loss, separated by receiving unit or allocation pool
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per service output and facility reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_environment_records`
- Sources: `eu-jrc-ref-bref-2015`

##### Waste flows

###### Treatment sludge and environmental-control residues (`treatment_residuals`)

Record wastewater-treatment sludge, sulfur-recovery residues, spent sorbent and other control wastes sent to recovery, treatment or disposal.

- Selected flow: Treatment residuals, separated by material and destination
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or inventory-change quantity on a declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_environment_records`
- Sources: `eu-jrc-ref-bref-2015`

##### Elementary flows

###### Utility, flare and treatment-system releases (`utility_environment_releases`)

Create species-specific exchanges for combustion, hydrogen production, flaring, sulfur recovery, wastewater treatment and other shared-control releases attributed to the included gasoline route.

- Selected flow: Species-specific air and water elementary flows
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from fuel, flare, influent, effluent and operating records using the approved site method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_environment_records`
- Sources: `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

### Process: Finished-gasoline blending and batch certification (`blending_certification`)

#### Inputs

##### Product flows

###### Gasoline components, oxygenates and additives (`blend_inputs`)

Record every component entering the finished blend, including its source unit or supplier, fossil or biogenic status, measured quantity and relevant quality properties.

- Selected flow: Gasoline blend components, oxygenates and additives as separate product flows
- Flow property / unit: Mass / kg, retaining required volume-fraction records
- Amount rule: measured batch charge corrected for inventory and transfer differences
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per released finished batch and normalized to 1 kg finished motor gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_certification_records`
- Sources: `china-gb-17930-2016`; `us-40-cfr-1090`

###### Same-category gasoline and rework input (`motor_gasoline_recursive_input`)

Record purchased motor gasoline, returned batch material or internal rework as a separate same-category input and link it to the upstream or prior-batch dataset selected under the recursive-input rule.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured input mass by supplier or prior-batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per released finished batch and normalized to 1 kg finished motor gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_certification_records`
- Sources: `un-cpc-v3-2025`

##### Waste flows

No waste input is mandatory. Offsite slops accepted for blending or reprocessing shall retain their waste status until the applicable recovery rule is met.

##### Elementary flows

No elementary input is prescribed separately from upstream datasets.

#### Outputs

##### Product flows

###### Released motor gasoline transferred to storage (`released_gasoline_to_storage`)

Record only batches that pass the applicable specification and facility release decision; nonconforming material remains rework or off-spec stock.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: released batch mass calculated from certified volume and batch density or measured directly by mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per released batch and normalized to 1 kg finished motor gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blending_certification_records`
- Sources: `china-gb-17930-2016`; `us-40-cfr-1090`

##### Waste flows

###### Off-spec gasoline, blend slops and tank residues (`blending_residuals`)

Record nonconforming batches, slops and residues by actual destination; material returned to the process is an internal rework transfer, not a negative waste output.

- Selected flow: Off-spec gasoline and blending residues, separated by destination
- Flow property / unit: Mass / kg
- Amount rule: measured quantity from batch disposition and tank reconciliation records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_certification_records`
- Sources: `us-40-cfr-1090`

##### Elementary flows

###### Blending and certification-area releases (`blending_releases`)

Record species-specific evaporative, vent and spill-related releases that cross the environment boundary during blending and batch handling.

- Selected flow: Species-specific VOC and other monitored elementary flows
- Flow property / unit: Mass / kg
- Amount rule: monitored or mass-balance release calculated from batch and control-system records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blending_certification_records`
- Sources: `eu-jrc-ref-bref-2015`; `us-40-cfr-1090`

### Process: Finished-product storage and refinery-gate dispatch (`storage_dispatch`)

#### Inputs

##### Product flows

###### Released gasoline received into finished-product storage (`stored_finished_gasoline_input`)

Record released gasoline received from blending by batch and grade, using the same density and temperature basis as the dispatch reconciliation.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: transfer mass from certified batch records and storage-tank receipts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per storage period and normalized to 1 kg dispatched motor gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `eu-jrc-ref-bref-2015`; `us-40-cfr-1090`

##### Waste flows

No waste input is mandatory.

##### Elementary flows

No elementary input is prescribed separately from upstream datasets.

#### Outputs

##### Product flows

###### Net motor gasoline dispatched at the refinery gate (`motor_gasoline_ref`)

This is the quantitative reference output. Measure net conforming gasoline transferred across the declared gate after accounting for returns and documented inventory changes.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dispatch mass; normalize the completed dataset to exactly 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `china-gb-17930-2016`; `us-40-cfr-1090`

##### Waste flows

###### Tank bottoms, recovered spills and dispatch residues (`storage_dispatch_residuals`)

Record storage and loading residues by actual recovery, rework, treatment or disposal destination.

- Selected flow: Tank bottoms, spill recovery material and dispatch residues as separate waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured removal or recovery quantity with moisture and hydrocarbon content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `eu-jrc-ref-bref-2015`

##### Elementary flows

###### Storage and loading losses (`storage_loading_releases`)

Record species-specific breathing, working, transfer and loading releases after vapor recovery or control; do not treat the gross inventory discrepancy as an air emission without supporting calculation evidence.

- Selected flow: Species-specific VOC and other monitored elementary flows
- Flow property / unit: Mass / kg
- Amount rule: monitored or approved tank/loading calculation using actual throughput, controls and operating conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished motor gasoline dispatched at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `eu-jrc-ref-bref-2015`; `epa-ap42-petroleum-refining-2015`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_units` | multifunctional_refinery_units | First subdivide the refinery into measured unit operations and trace feed, energy, hydrogen, utilities, products and direct releases to the units and products that cause them. | `iso-14044-2006`; `eu-pef-method-2021`; `argonne-refinery-allocation-2003` |
| `allocation_shared_utilities` | shared_utility_and_control_systems | Assign shared steam, electricity, fuel, hydrogen, flare, wastewater and environmental-control burdens with measured causal drivers such as metered service, fuel demand, hydrogen demand, treated load or pollutant load. | `eu-pef-method-2021`; `argonne-refinery-allocation-2003` |
| `allocation_remaining_multifunctionality` | unresolved_refinery_burdens | When subdivision and direct causal assignment cannot resolve a shared burden, use a documented physical relationship. Process-level energy allocation based on product-specific net energy is the preferred screening fallback for energy-bearing refinery products; justify deviations. | `iso-14044-2006`; `argonne-refinery-allocation-2003` |
| `allocation_economic_fallback` | no_defensible_physical_relation | Use economic allocation only when no defensible physical relationship exists and the study goal permits it; use contemporaneous, representative prices and disclose the price period, geography and sensitivity. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_internal_recycling` | internal_fuels_rework_and_recovered_material | Track internal refinery fuel, rework, recovered vapor and recovered hydrocarbon as internal transfers. Count their production burdens once and do not credit or subtract the same quantity twice. | `eu-pef-method-2021`; `eu-jrc-ref-bref-2015` |
| `allocation_sensitivity` | material_allocation_choice | Report a sensitivity result for each materially different defensible allocation method and explain the method selected for the published dataset. | `iso-14044-2006`; `argonne-refinery-allocation-2003` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_separation_records` | `feedstock_separation` | feedstock receipts, separated streams, desalting inputs, residues and direct releases | calibrated meters; tank gauges; invoices; laboratory assays; operating and emissions records | timestamp; material/stream id; supplier/origin; mass or volume; density and temperature; water/sulfur or other relevant assay; opening/closing inventory; destination; meter id; uncertainty; pollutant and monitoring basis | reconcile receipts, unit transfers, tank inventories, residues and monitored releases by stream and reporting period | kg; m3; kg pollutant | continuous or per transfer, batch and reporting period | complete foreground reporting period, including startup, shutdown and abnormal events | all included receipt, desalting and primary-separation units | sum measured quantities, convert volume with batch density, reconcile inventory change, then normalize after allocation | meter calibration; laboratory method; invoice/tank reconciliation; data-gap and abnormal-event log |
| `cp_conversion_treating_records` | `conversion_treating` | conversion feeds, auxiliaries, components, co-products, spent materials and direct releases | unit meters; production logs; catalyst and chemical inventory; laboratory assays; continuous monitors and approved calculations | unit id; route; feed/output stream; mass; energy; hydrogen; catalyst/chemical charge; recycle; inventory change; operating hours; pollutant; monitoring method; control status | reconcile each included unit before aggregation and retain route-specific transfers and emissions | kg; MJ; kWh; kg pollutant | continuous, batch charge and reporting period | complete foreground reporting period with downtime and abnormal operation | every included conversion and treating unit | calculate net unit outputs and direct releases, then assign or allocate them with the declared driver | meter calibration; assay; catalyst inventory; CEMS/stack-test record; unit mass-and-energy balance |
| `cp_utilities_environment_records` | `utilities_environment` | purchased and onsite utilities, environmental-treatment loads, recovered products, residuals and releases | utility meters; fuel analyses; invoices; flare logs; hydrogen/steam/power balances; wastewater and waste records | service id; source; meter; quantity; energy basis; receiving unit; influent/effluent quantity and composition; flare flow/composition; waste mass/moisture; recovered-product mass | reconcile generated, purchased, distributed, exported and lost services; reconcile treatment influent and outputs | MJ; kWh; kg; m3; kg pollutant | continuous/monthly and reporting period | same period as production, including abnormal operation | all shared utility and environmental-control systems serving included processes | assign direct metered services first; allocate remaining shared service by declared causal driver | calibrated meters; fuel analysis; treatment laboratory data; flare and waste manifests; allocation reconciliation |
| `cp_blending_certification_records` | `blending_certification` | blend components, same-category inputs, released batches, off-spec material and blending releases | batch tickets; blend-control system; tank gauges; component certificates; accredited or approved laboratory tests; release/disposition records | batch id; component id/source; fossil/biogenic status; mass/volume; density/temperature; octane; sulfur; benzene; oxygenate; volatility/RVP; distillation; grade; specification; release status; rework destination | retain one component and quality record set per batch and reconcile blend inputs to released, rework and loss quantities | kg; m3; property-specific units | each component transfer and finished batch | every released and nonconforming batch in the reporting period | all finished-gasoline blend tanks and certification points | calculate component fractions and batch mass; aggregate only conforming released batches to the declared grade mix | calibration; certificate of analysis; laboratory method; chain of custody; signed release/disposition record |
| `cp_storage_dispatch_records` | `storage_dispatch` | finished-gasoline receipts, inventories, dispatch, returns, residues and releases | custody-transfer meters; tank gauges; dispatch tickets; vapor-control records; spill and residue records | batch/grade; tank; opening/closing stock; receipts; dispatch; returns; density/temperature; meter id; destination; vapor-control status; residue or spill disposition | reconcile each tank and grade on one mass basis before summing net refinery-gate dispatch | kg; m3; kg pollutant | each transfer and reporting period | complete foreground reporting period | all finished-product tanks and dispatch points inside the declared gate | receipts + opening stock - closing stock - net dispatch - documented transfers = reconciled loss or unexplained difference; calculate emissions separately | custody-transfer calibration; tank table; dispatch document; vapor-control operation; variance investigation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_volume_to_mass` | all liquid streams reported by volume | mass = observed or standardised volume × batch-specific density on the matching temperature basis | volume; density; temperature basis; test method | kg by batch or stream | `china-gb-17930-2016`; `us-40-cfr-1090` |
| `calc_component_fraction` | finished gasoline blend | component fraction = component mass or corrected volume divided by the corresponding total finished-batch basis; fossil and biogenic components remain separate | component transfers; density; total released batch | component fractions and fossil/biogenic split | `us-40-cfr-1090` |
| `calc_net_unit_output` | refinery unit and storage inventories | net output = measured transfers out - measured returns - increase in attributable inventory, reconciled with transfers in and documented losses | transfer meters; opening/closing inventory; returns; rework; losses | net process output by stream | `eu-jrc-ref-bref-2015` |
| `calc_allocation_factor` | shared unit or refinery burden | allocation factor = selected causal or physical driver for gasoline divided by the same driver summed over all co-products; factors across the pool shall sum to 1 within rounding tolerance | metered drivers; product energy or other physical relation; co-product set | burden-allocation factors | `iso-14044-2006`; `argonne-refinery-allocation-2003` |
| `calc_reference_normalization` | completed foreground inventory | normalized amount = allocated reporting-period amount divided by net kg of conforming motor gasoline dispatched at the declared gate | allocated inventory; reference dispatch mass | inventory amount per 1 kg reference flow | `eu-pef-method-2021` |
| `calc_storage_reconciliation` | finished-product tankage and dispatch | reconcile receipts, dispatch, returns and inventory change first; classify only supported releases as emissions or wastes and retain unexplained variance as a data-quality finding | tank and custody-transfer records; spill, vapor and residue records | net dispatch, supported loss flows and unexplained variance | `eu-jrc-ref-bref-2015` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate that every aggregated output batch is finished motor gasoline and not aviation gasoline, jet fuel, naphtha, an unfinished blendstock or another alternative fuel. | applicable specification; certificate of analysis; batch release and classification record |
| `dq_technology` | refinery configuration and route | Identify included and non-applicable units, feedstock slate, hydrogen source, utility system, blend route and environmental controls; do not use a generic refinery route without qualification. | unit list; process-flow diagram; production ledger; configuration record |
| `dq_temporal` | all foreground data | Use one coherent production and inventory period that includes normal, startup, shutdown and abnormal events; disclose exclusions and any temporally mismatched upstream datasets. | meter coverage report; event log; dataset dates; gap register |
| `dq_geography` | foreground and upstream data | State the facility location and market; use geographically representative upstream datasets or disclose proxies and sensitivity. | facility metadata; supplier origin; upstream dataset geography |
| `dq_measurement` | volumes, masses, energy and emissions | Retain calibration, density/temperature conversion, laboratory and emissions-monitoring evidence with uncertainty or method limitations. | calibration certificates; laboratory methods; CEMS/stack-test reports; calculation sheets |
| `dq_completeness` | process and flow coverage | Account for all included units, shared utilities, flares, storage, wastewater, wastes and co-products; reconcile missing or excluded data against materiality and governing study rules. | process-to-data matrix; completeness check; exclusion log |
| `dq_allocation` | multifunctional burdens | Store pool membership, drivers, factors, factor sum, rationale and sensitivity; allocation shall be reproducible from collected data. | allocation workbook or machine-readable calculation; alternative-method result |
| `dq_mass_balance` | facility, unit, blend and storage balances | Reconcile inputs, outputs, recycle, inventory change, wastes and documented losses on compatible bases; investigate unexplained imbalance rather than assigning it automatically to emissions. | signed balance; variance threshold and investigation record |
| `dq_no_generic_defaults` | quantitative inventory | Do not replace missing refinery measurements with an uncited generic process dataset or an unlabeled estimate. Report the gap; any later provisional estimate shall be explicitly marked `reasoned_estimate`, scoped, reviewed and replaced before publication-critical use. | data-gap register; estimate approval and replacement plan |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference_flow | The product flow UUID, mass property UUID, unit-group UUID, reference unit and 1 kg amount shall match the Reference Flow table. |  |
| `validation_product_scope` | released_batches | Every reference-output batch shall be documented as finished motor gasoline under the applicable specification; excluded fuel categories and unfinished blendstocks shall not be aggregated. | `un-cpc-v3-2025`; `china-gb-17930-2016`; `us-40-cfr-1090` |
| `validation_required_qualifiers` | dataset_metadata | All required qualifiers shall be present and internally consistent with the represented batches, geography, period and route. | `china-gb-17930-2016`; `us-40-cfr-1090` |
| `validation_mass_conversion` | volume_based_records | Every volume-to-mass conversion shall include density, temperature basis, test method and calculation; otherwise the affected mass result is inconclusive. | `us-40-cfr-1090` |
| `validation_process_coverage` | foreground_process_map | Every required process shall have records or an explicit non-applicability justification, and every material operating unit serving the gasoline route shall map to one process. | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `validation_recursive_input` | same_category_input | Same-category gasoline and rework inputs shall carry supplier or prior-batch identity and shall not be counted again as virgin reference output or receive duplicated upstream burden. | `eu-pef-method-2021` |
| `validation_allocation` | multifunctionality | Allocation pools, drivers, factors and factor sums shall be reproducible; subdivision and causal assignment shall precede remaining physical or economic allocation. | `iso-14044-2006`; `eu-pef-method-2021`; `argonne-refinery-allocation-2003` |
| `validation_mass_balance` | unit_blend_and_storage_balances | Input, output, recycle, inventory, waste and documented-loss balances shall close within the facility's approved measurement uncertainty; unexplained variance shall be reported as a finding, not forced into a flow. | `eu-jrc-ref-bref-2015` |
| `validation_direct_releases` | emissions_and_waste | Direct process, combustion, regeneration, flare, fugitive, storage, wastewater and waste flows shall be species- and destination-specific where records permit; aggregate or omitted flows require documented limitations. | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `validation_representativeness` | published_dataset | Technology, crude/feedstock slate, product mix, time and geography shall match the stated use; an old or foreign refinery proxy shall not be presented as a current local benchmark without explicit limitation and sensitivity. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | Supply of refinery-gate finished motor gasoline to foreground processes and lifecycle models, with separate downstream distribution and combustion when required by the study |
| allowed_use | Attributional product and process modelling for the declared refinery configuration, geography, reporting period, product-grade mix and allocation method; transparent scenario or sensitivity use when limitations are retained |
| excluded_use | Vehicle tailpipe or use-phase emissions by itself; filling-station or delivered-fuel supply without downstream stages; aviation gasoline or other excluded fuels; an unqualified global, current-China or current-market benchmark; regulatory compliance certification |
| required_metadata | PCR id and version; facility and gate; geography; reporting period; applicable standard; batch and grade mix; octane; sulfur and benzene; oxygenate type/fraction; fossil and biogenic fractions; seasonal/volatility class; density and temperature basis; refinery configuration and feedstock slate; included units; energy and hydrogen sources; allocation pools/drivers/factors; reference flow UUIDs; upstream dataset references |
| required_quality_disclosure | Data-quality rating or equivalent evidence for technology, geography, time and precision; coverage and gap register; meter/laboratory basis; mass-balance results; allocation sensitivity; proxy and exclusion list; abnormal-operation treatment; unexplained variance |
| update_trigger | Change in applicable fuel specification, product or oxygenate slate, refinery configuration, crude/feedstock slate, hydrogen or energy system, environmental controls, allocation drivers, gate definition, or evidence that the represented period is no longer technologically, geographically or temporally representative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, CPC 33311 Motor gasoline, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (repository source retrieved 2026-06-23) | Product-category identity and exclusions from adjacent CPC fuel categories |
| `china-gb-17930-2016` | standard | State Administration for Market Regulation / Standardization Administration of China, GB 17930-2016, Gasoline for motor vehicles, current standard record, https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D81743D3A7E05397BE0A0AB82A (accessed 2026-08-09) | Applicable Chinese product-specification identity, batch qualification and required quality disclosure |
| `us-40-cfr-1090` | official_guidance | U.S. Electronic Code of Federal Regulations, 40 CFR Part 1090, Regulation of Fuels, Fuel Additives, and Regulated Blendstocks, https://www.ecfr.gov/current/title-40/chapter-I/subchapter-U/part-1090 (accessed 2026-08-09) | Gasoline batch identity, sulfur, benzene, oxygenate, RVP, density, sampling, testing and reporting records |
| `epa-ap42-petroleum-refining-2015` | official_guidance | U.S. EPA, AP-42 Section 5.1 Petroleum Refining, April 2015, https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf (accessed 2026-08-09) | Refinery process decomposition and direct-emission source coverage |
| `eu-jrc-ref-bref-2015` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Refining of Mineral Oil and Gas, 2015, https://eippcb.jrc.ec.europa.eu/reference/refining-mineral-oil-and-gas-0 (accessed 2026-08-09) | Included refinery units, utilities, storage, blending, wastewater, waste and emissions-control coverage |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (accessed 2026-08-09) | Boundary, subdivision, allocation hierarchy, upstream linking and technological/geographical/temporal data quality |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including current amendments, https://www.iso.org/standard/38498.html (accessed 2026-08-09) | LCA inventory, allocation, reporting and sensitivity requirements |
| `argonne-refinery-allocation-2003` | official_guidance | Argonne National Laboratory GREET, Wang, Lee and Molburg, Allocation of Energy Use in Petroleum Refineries to Petroleum Products: Implications for Life-Cycle Energy Use and Emission Inventory of Petroleum Transportation Fuels, 2003, https://greet.anl.gov/files/1c49xpjg (accessed 2026-08-09) | Process-level refinery allocation and rejection of undifferentiated whole-refinery allocation as the default |
