---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.ships-propellers-and-blades-therefor
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ships' propellers and blades therefor

## 1. Scope and Applicability

This PCR covers factory-gate production of finished metallic ship screw propellers and separately supplied propeller blades made by sand moulding, casting, machining, grinding, polishing, balancing, inspection, and release. It applies to fixed-pitch propellers and to finished blades for controllable-pitch propellers when the declared product meets the purchaser's drawing, material specification, dimensional and geometrical tolerances, balancing requirements, and inspection plan.

The PCR includes copper-alloy propellers and blades covered by IACS UR W24 and may be used for another cast metallic alloy only when the foreground data package identifies that alloy and its applicable approval and test specification. It excludes aircraft turbo-propellers, pumps, propeller shafts, stand-alone controllable-pitch hubs and actuating mechanisms, composite propellers, manufacture by additive or subtractive-only routes, installation on the vessel, use, maintenance, repair, and end-of-life. A study that brings an excluded stage or an alternative manufacturing route into scope shall model it as a separately declared process system and shall not merge its inventory with this sand-cast route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.ships-propellers-and-blades-therefor |
| classification_refs | CPC 3.0: 42998, Ships' propellers and blades therefor (exact classification context) |
| covered_products | Finished metallic ship screw propellers; separately supplied finished ship-propeller blades |
| excluded_products | Aircraft turbo-propellers; pumps; propeller shafts; stand-alone pitch-control hubs and actuators; composite propellers; unfinished castings sold as another product; repaired propellers |
| representative_product | A drawing-specific, sand-cast and machined ship propeller or separately supplied blade released at the manufacturing site gate |
| production_route | Pattern and sand-mould preparation; alloy melting and casting; knock-out and cleaning; machining, grinding and polishing; balancing, inspection and release |
| market_state | Finished, inspected, uninstalled product at the manufacturer gate; unpackaged unless packaging is explicitly added by the foreground data package |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished ship propeller or separately supplied propeller blade capable of transmitting the specified shaft power as hydrodynamic thrust |
| How much | 1 kg net mass of finished product at the manufacturer gate |
| How well | Conforms to the declared drawing, propeller type, alloy specification, dimensional and geometrical tolerance class, balance criterion, surface-finish criterion, and inspection acceptance status |
| How long or cycle | One released manufacturing output; service life and vessel operation are not part of the normalization |
| reference_flow_link | Exactly 1 kg of the released reference product described by the reference-flow object and all required qualifiers below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Ships' propellers and blades therefor `8f01d846-f812-4209-a4c1-9f2daa531e79` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form (complete propeller or separate blade); fixed-pitch or controllable-pitch application; alloy designation and primary/secondary content; net product mass; diameter or blade principal dimensions; blade count where applicable; drawing or design identifier; tolerance class; balance criterion; inspection and acceptance standard; surface finish; manufacturing route; site geography; production period; packaging inclusion; factory-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference product and solid material or waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1 kg net accepted product mass after final balancing and inspection. Exclude packaging mass and record gross-to-net conversions separately. |
| `measurement_electricity` | purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using exactly 1 kWh = 3.6 MJ. Declare grid geography, voltage level, on-site generation treatment, and loss boundary. |
| `measurement_natural_gas` | gaseous natural-gas input | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report volume at declared pressure, temperature, and gas-quality reference conditions; retain the meter conversion or supplier statement used to align differing reference conditions. |
| `measurement_internal_metal` | alloy charge, rough casting, returns and swarf | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure composition-controlled metal streams by batch. Reconcile charge, rough casting, internally remelted returns, externally transferred scrap, machining swarf, other metal losses, and accepted product without counting an internal loop as a new upstream input. |
| `measurement_water_and_fluid` | process water and cutting-fluid rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net make-up crossing the foreground boundary after on-site recirculation. If volume is metered, retain density, concentration, temperature, and conversion evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specification-controlled alloy charge, pattern and mould materials, purchased energy, water, and machining consumables as received at the manufacturing-site boundary |
| starting_condition_role | Upstream-supplied products entering a foreground sand-cast propeller or blade manufacturing system |
| product_classification_scope | Finished metallic ship screw propellers and separately supplied finished propeller blades; CPC 3.0 code 42998 is mapping context, not the canonical product identity |
| recursive_input_rule | Internally returned propeller-alloy metal remains inside the foreground loop and is not a new product input. An externally purchased propeller, blade, or category-equivalent unfinished item shall be recorded once as a disclosed upstream product with its own dataset and shall not recursively invoke this PCR without a declared stopping condition. |
| upstream_dataset_requirement | Use material-, product-state-, technology-, and geography-representative upstream datasets for alloy charge, wood, silica sand, cement or other declared binder, electricity, natural gas, water, cutting fluid, and any additional foreground input crossing the site boundary. |
| disclosure | Declare complete-propeller versus blade product form, pitch application, alloy grade and recycled content, blade count and principal dimensions, tolerance and inspection specification, mould/binder route, melting technology, energy supply, internal sand and metal recovery, scrap destinations, site geography, production period, packaging inclusion, and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground cradle-to-gate production | Include pattern and mould preparation, melting and casting, knock-out and cleaning, machining, grinding, polishing, balancing, inspection, and release through the manufacturer gate. Link upstream supply datasets for all purchased inputs. | `saai-et-al-2025-propeller-lca`; `iacs-ur-w24-2024` |
| `boundary_rule_2` | manufacturing route | Use this process inventory only for the declared sand-cast metallic route. Keep additive manufacture, subtractive-only manufacture, composite moulding, and repair as separate route-specific systems. | `saai-et-al-2025-propeller-lca` |
| `boundary_rule_3` | exclusions | Exclude design activities, capital equipment, factory buildings, vessel installation, use, maintenance, repair, and end-of-life unless the study goal explicitly adds and separately reports them. | `saai-et-al-2025-propeller-lca` |
| `boundary_rule_4` | foreground completeness | Record each purchased material, energy carrier, water input, externally transferred waste or recyclable material, and direct elementary emission as an individual exchange; disclose measured exclusions and cut-offs rather than hiding them in an umbrella row. | `saai-et-al-2025-propeller-lca` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_mould_and_cast` | Pattern, mould, melting, casting and knock-out | required | Always for the sand-cast metallic route; individual wood, cement and natural-gas rows remain conditional on the declared tooling, binder and heating systems | Foreground formation of the rough propeller or blade casting | kg rough casting transferred to finishing and kg accepted final product |
| `p_finish_and_release` | Machining, grinding, polishing, balancing, inspection and release | required | Always for the sand-cast metallic route; cutting fluid and process water are conditional on wet-machining and aqueous-cleaning practice | Foreground conversion of rough casting to accepted factory-gate product | 1 kg net accepted reference product |

### Process: Pattern, mould, melting, casting and knock-out (`p_mould_and_cast`)

#### Inputs

##### Product flows

###### Propeller-alloy melting charge (`alloy_charge_input`)

Record each composition-controlled batch of purchased primary and secondary alloy feed crossing the foundry boundary. The row covers nickel-aluminium-bronze or another approved cast propeller alloy only after its designation is declared.

- Selected flow: Propeller-alloy melting charge
- Flow property / unit: Mass / kg
- Amount rule: measured net external alloy charge assigned to the production order after excluding internal same-batch returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `iacs-ur-w24-2024`; `saai-et-al-2025-propeller-lca`

###### Net wooden pattern material (`wood_pattern_material_input`)

Record wood that is consumed to make or maintain the production pattern when a wooden pattern is used. Allocate reusable-pattern consumption over the actual conforming output produced during its documented life.

- Selected flow: Wooden pattern material
- Flow property / unit: Mass / kg
- Amount rule: purchased wood plus inventory decrease and documented replacement, less reusable pattern remaining, allocated to the production order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output for the wooden-pattern route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mould_materials`
- Sources: `saai-et-al-2025-propeller-lca`

###### Virgin silica sand (`silica_sand_input`)

Record the virgin silica-sand fraction added to the mould system after any internally reclaimed sand is returned to use.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass / kg
- Amount rule: measured virgin silica sand entering mould preparation, net of unopened returns to supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mould_materials`
- Sources: `saai-et-al-2025-propeller-lca`

###### Cement binder (`cement_input`)

Record cement separately when it is incorporated in the declared mould recipe. Do not use this row for resin, clay, sodium-silicate, or another binder.

- Selected flow: Cement `e2e868d7-d816-43a5-88eb-8db34e119525`
- Flow property / unit: Mass / kg
- Amount rule: measured cement added to mould batches assigned to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output for a cement-bound mould
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mould_materials`
- Sources: `saai-et-al-2025-propeller-lca`

###### Electricity for moulding and casting (`mould_cast_electricity_input`)

Record electricity used for pattern and mould preparation, mould drying, induction melting when applicable, pouring support, knock-out, cleaning, and directly assigned foundry auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated site-meter electricity for the production order, converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mould_cast_energy`
- Sources: `saai-et-al-2025-propeller-lca`

###### Natural gas for preheating (`natural_gas_input`)

Record gaseous natural gas when gas burners preheat a melting pot, ladle, or other casting equipment. Do not use this row for a different fuel.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-accounted natural-gas volume at declared reference conditions assigned to the production order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output for the gas-fired preheating route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mould_cast_energy`
- Sources: `saai-et-al-2025-propeller-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rough propeller or blade casting (`rough_propeller_casting_output`)

Record the cleaned but unfinished casting transferred from foundry operations to machining and finishing. This internal intermediate remains distinct from the accepted reference product.

- Selected flow: Rough cast ship propeller or blade blank
- Flow property / unit: Mass / kg
- Amount rule: measured mass of cleaned rough castings transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `saai-et-al-2025-propeller-lca`

##### Waste flows

###### Spent moulding sand (`spent_moulding_sand_output`)

Record spent sand and its retained binder as the concrete moulding-material waste stream leaving reclamation or knock-out for external treatment. Keep separately recovered metal out of this row.

- Selected flow: Spent foundry moulding sand
- Flow property / unit: Mass / kg
- Amount rule: weighed outgoing spent moulding sand assigned to the production order after internal sand reclamation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mould_materials`
- Sources: `saai-et-al-2025-propeller-lca`

###### Segregated casting-alloy scrap (`casting_alloy_scrap_output`)

Record gates, risers, rejected casting metal, and other composition-controlled casting returns only when they leave the foreground system for recycling or disposal. Internal remelt remains inside the metal balance.

- Selected flow: Segregated propeller-alloy casting scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed alloy scrap crossing the site boundary, separated by alloy and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `saai-et-al-2025-propeller-lca`

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide_output`)

Record direct fossil carbon dioxide released by natural-gas combustion or another declared fossil-energy source inside this process. Exclude upstream electricity-generation emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or verified facility direct-emissions ledger amount allocated to the production order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `saai-et-al-2025-propeller-lca`

### Process: Machining, grinding, polishing, balancing, inspection and release (`p_finish_and_release`)

#### Inputs

##### Product flows

###### Rough casting received for finishing (`rough_propeller_casting_input`)

Record the unfinished casting received from `p_mould_and_cast`; its mass and batch identifier shall reconcile with the foundry output.

- Selected flow: Rough cast ship propeller or blade blank
- Flow property / unit: Mass / kg
- Amount rule: measured mass of cleaned rough castings received for machining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `saai-et-al-2025-propeller-lca`

###### Electricity for finishing and release (`finish_electricity_input`)

Record electricity for machining, grinding, polishing, balancing, dimensional measurement, non-destructive testing equipment, and directly assigned release operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated site-meter electricity for the production order, converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_energy`
- Sources: `saai-et-al-2025-propeller-lca`; `iacs-ur-w24-2024`

###### Cutting-fluid make-up (`cutting_fluid_input`)

Record the formulated cutting fluid supplied to wet machining after accounting for recirculation. Declare whether the product is neat oil, water-miscible concentrate, or another formulation.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: measured cutting-fluid make-up crossing the foreground boundary, reported as supplied product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output for wet machining
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_cutting_fluid`
- Sources:

###### Process water for wet machining or cleaning (`process_water_input`)

Record process water when it is added to cutting-fluid preparation, wet machining, or aqueous cleaning. Exclude once-through cooling water unless it crosses the declared foreground boundary as this same process-water product.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or weighed net process-water make-up after recirculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output for the applicable wet route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cutting_fluid`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference product (`reference_product_output`)

Record only the net mass that passes final dimensional, balance, surface, material, and inspection acceptance and crosses the manufacturer gate as the declared product.

- Selected flow: Ships' propellers and blades therefor `8f01d846-f812-4209-a4c1-9f2daa531e79`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg after normalization from the measured accepted product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: exactly 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_release`
- Sources: `iacs-ur-w24-2024`

##### Waste flows

###### Propeller-alloy machining swarf (`machining_swarf_output`)

Record chips, swarf, grinding removals, and balancing removals that leave finishing for recycling or disposal, separated by alloy and contamination state.

- Selected flow: Propeller-alloy machining swarf
- Flow property / unit: Mass / kg
- Amount rule: weighed or metal-balance-derived machining removals crossing the foreground boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `saai-et-al-2025-propeller-lca`

###### Spent cutting fluid (`spent_cutting_fluid_output`)

Record the composition-declared cutting-fluid waste purged from wet machining and sent to external treatment. Keep free oil, aqueous cleaning wastewater, and solid swarf as separate exchanges when present.

- Selected flow: Spent cutting fluid
- Flow property / unit: Mass / kg
- Amount rule: measured spent cutting-fluid mass leaving the foreground system after recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted propeller or blade output for wet machining
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_cutting_fluid`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | foreground operations | Avoid allocation by separately metering or engineering-allocation of pattern/mould, foundry, machining, balancing, and inspection operations to the production order. | `saai-et-al-2025-propeller-lca` |
| `allocation_rule_2` | reusable patterns and shared tooling | Allocate net pattern and shared-tooling consumption over actual conforming output during the documented service life; disclose lifetime output, replacement, residual inventory, and allocation basis. Do not charge the full reusable pattern to every product. | `saai-et-al-2025-propeller-lca` |
| `allocation_rule_3` | internal sand and alloy loops | Keep internally reclaimed sand and internally remelted alloy inside the foreground system. Report only virgin or externally purchased make-up and material that crosses the boundary, and reconcile the internal-loop quantities without applying an avoided-production credit. | `saai-et-al-2025-propeller-lca` |
| `allocation_rule_4` | externally transferred recyclable metal | State whether externally transferred metal is treated by cut-off, substitution, or another study-required allocation method. The default dataset profile uses cut-off: no avoided-primary-metal credit is assigned to the propeller dataset, and recycling burdens belong to the subsequent product system. | `saai-et-al-2025-propeller-lca` |
| `allocation_rule_5` | multiple propellers, blades, or alloy grades in one batch | Prefer batch-specific mass and energy records. If a shared measured total cannot be subdivided, allocate by a documented causal parameter; use processed metal mass only when no better driver exists and disclose the affected rows and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_metal_mass_balance` | `p_mould_and_cast`; `p_finish_and_release` | alloy charge, rough casting, internal returns, external scrap and swarf | batch weigh tickets and inventory movements | batch id; alloy designation; charge mass; rough-casting mass; internal-return mass; external-scrap mass; swarf mass; other metal loss; destination | calibrated scales linked to production and waste-transfer records | kg | each batch and transfer | complete reporting period, normally at least 12 consecutive months or all production when shorter | all in-scope foundry and finishing operations | reconcile by alloy and batch, allocate only documented shared streams, then divide by accepted product mass | calibration certificates; batch heat records; weigh tickets; recycler receipts; signed reconciliation |
| `cp_mould_materials` | `p_mould_and_cast` | wood, silica sand, cement and spent moulding sand | purchase, issue, recipe, inventory and waste records | material identity; supplier; received mass; batch issue; reclaimed sand; pattern life output; closing inventory; spent-sand mass; binder system | weigh incoming and issued materials; reconcile pattern inventory and sand reclamation | kg | each receipt, mould batch and waste transfer | complete reporting period | all in-scope mould preparation, reclamation and knock-out | net external input or output divided by accepted product mass; reusable wood is amortized over documented lifetime output | scale calibration; recipe sheets; stock counts; pattern register; waste manifests |
| `cp_mould_cast_energy` | `p_mould_and_cast` | electricity and natural gas | submeters, production logs and supplier invoices | meter id; opening and closing reading; unit; reference conditions; furnace or burner id; batch id; operating hours; allocation driver | direct submetering preferred; reconcile to invoice totals | MJ for electricity; m3 for natural gas | each batch or meter interval | complete reporting period | all in-scope pattern, mould and casting equipment | convert electricity using 3.6 MJ/kWh; allocate verified shared meter totals causally; divide by accepted product mass | meter calibration; invoices; production logs; reconciliation statement |
| `cp_finish_energy` | `p_finish_and_release` | electricity | submeters, machine logs and supplier invoices | meter id; readings; machine id; production order; operating hours; accepted output | direct machine or cell submetering preferred | MJ | each production order or meter interval | complete reporting period | all in-scope machining, grinding, polishing, balancing and inspection equipment | convert using 3.6 MJ/kWh, reconcile shared totals and divide by accepted product mass | meter calibration; invoices; machine logs; allocation workbook |
| `cp_water_and_cutting_fluid` | `p_finish_and_release` | process water, cutting-fluid make-up and spent cutting fluid | meters, purchase/issue records, tank inventory and waste manifests | formulation; concentration; received mass; water volume; density; tank opening and closing stock; make-up; purge; waste mass; treatment route | meter or weigh net make-up and outgoing purge after recirculation | kg | each make-up, purge or reporting interval | complete reporting period | all in-scope wet machining and aqueous cleaning | reconcile formulation-specific input, retained inventory and output; divide net boundary crossings by accepted product mass | meter calibration; safety data sheet; density/concentration tests; stock reconciliation; waste manifest |
| `cp_direct_emissions` | `p_mould_and_cast` | direct fossil carbon dioxide | stack monitoring or verified facility emissions ledger | source id; fuel type; monitoring result; production order; allocation driver; excluded upstream emissions | direct measurement preferred; otherwise use a facility ledger already verified under the declared reporting method | kg | each monitored campaign or reporting interval | complete reporting period | in-scope on-site combustion sources only | remove out-of-boundary sources, allocate by documented causal driver and divide by accepted product mass | monitoring QA; instrument calibration; verified ledger; source-boundary reconciliation |
| `cp_product_release` | `p_finish_and_release` | accepted reference product | final inspection and dispatch records | serial/order id; product form; alloy; drawing; net mass; dimensions; blade count; tolerance class; balance result; NDT result; surface finish; acceptance; dispatch date | calibrated final weighing linked to approved inspection dossier | kg | each released product | complete reporting period | all in-scope accepted output | sum accepted net mass only; exclude rejects, packaging and unaccepted work in progress; normalize inventory to 1 kg | scale calibration; dimensional report; balance report; material certificate; NDT report; release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | all inventory rows | Normalized amount = attributable boundary-crossing amount / net accepted product mass. | protocol-specific attributable amount; accepted net mass from `cp_product_release` | amount per 1 kg reference product |  |
| `calculation_rule_2` | electricity rows | Electricity (MJ) = metered electricity (kWh) × 3.6; retain unrounded source reading and report conversion precision. | kWh meter reading | MJ electricity |  |
| `calculation_rule_3` | metal balance | External alloy charge + opening in-process metal = accepted product + external scrap + measured other metal losses + closing in-process metal; internal remelt cancels inside the boundary. Investigate and disclose any residual. | `cp_metal_mass_balance` fields | reconciled metal balance and normalized metal rows | `saai-et-al-2025-propeller-lca` |
| `calculation_rule_4` | reusable wooden pattern | Allocated pattern wood = net wood consumption during documented pattern life × production-order accepted output / total accepted output from that pattern, unless a stronger causal driver is documented. | wood purchases and inventory; pattern register; accepted output | kg wood assigned to the production order | `saai-et-al-2025-propeller-lca` |
| `calculation_rule_5` | natural-gas reference conditions | Convert only with a documented gas-law or supplier factor that states source and target pressure, temperature and compressibility basis; do not mix standard and actual cubic metres. | metered volume and reference conditions | m3 at declared reference conditions |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_requirement_1` | product identity | Link every production order to the drawing, product form, alloy heat, dimensional and balance requirements, inspection plan, and release status. | material certificate, heat record, drawing revision, dimensional report, balance report, NDT report and release certificate |
| `quality_requirement_2` | temporal representativeness | Use a continuous period that captures normal campaigns, rework, rejects and shutdown-related consumption; normally at least 12 months, or all production when the product is made less frequently. | period coverage table and explanation of missing or abnormal intervals |
| `quality_requirement_3` | completeness | Reconcile purchased materials and energy with invoices, meters and stock movement; account for internal sand and metal recovery, external wastes, and direct emissions; quantify every exclusion. | signed mass/energy reconciliation and cut-off register |
| `quality_requirement_4` | measurement | Use calibrated instruments appropriate to the quantity and retain units, conversion factors, uncertainty or resolution, and calibration status. | calibration certificates, meter specifications and conversion workbook |
| `quality_requirement_5` | technology and geography | Identify mould/binder system, melting equipment, finishing technology, energy mix, supplier geography, foundry site and scrap-treatment destinations. | process description, supplier records, meter boundary map and waste manifests |
| `quality_requirement_6` | source and UUID gaps | Do not substitute broader, narrower, wrong-state or wrong-property Tiangong flows for unresolved rows. Preserve the concrete row identity and resolve it before publication when an exact state-100 identity becomes available. | finalized UUID-search receipts and review metadata |
| `quality_requirement_7` | quantitative ranges | Treat the case values in a single publication as process-decomposition evidence, not as a range. Add an external range only after two independent original sources with compatible boundary, unit, product state, geography and technology have been reviewed. | range synthesis record with independence keys or unresolved range-evidence entry |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference flow | Fail if the output is not exactly 1 kg net accepted product after normalization, or if product form, alloy, route, drawing/tolerance, balance, inspection status, geography, period, packaging treatment, or factory-gate boundary is missing. | `un-cpc-3-0-structure-2025`; `iacs-ur-w24-2024` |
| `validation_rule_2` | process coverage | Fail if either required process is absent or if the sand-cast route omits applicable mould preparation, melting/casting, knock-out/cleaning, machining/grinding/polishing, balancing, inspection, or release operations without a quantified exclusion. | `saai-et-al-2025-propeller-lca`; `iacs-ur-w24-2024` |
| `validation_rule_3` | metal mass balance | Fail if rough-casting output and input do not reconcile by batch, if internal remelt is counted as new external input, or if the metal-balance residual is neither corrected nor quantified and explained. | `saai-et-al-2025-propeller-lca` |
| `validation_rule_4` | conditional rows | Fail if a declared wooden-pattern, cement-bound mould, gas-preheating, wet-machining, or aqueous-cleaning route lacks its corresponding atomic input and output rows; require explicit not-applicable evidence when a conditional row is absent. | `saai-et-al-2025-propeller-lca` |
| `validation_rule_5` | energy and direct emissions | Fail if electricity and on-site fuel meters do not reconcile to the site boundary or if upstream electricity emissions are reported as direct elementary emissions. | `saai-et-al-2025-propeller-lca` |
| `validation_rule_6` | alloy quality and release | Fail if the declared alloy lacks its chemical/mechanical test evidence, if required dimensional or geometrical checks are missing, or if balancing and specified non-destructive testing are incomplete. | `iacs-ur-w24-2024` |
| `validation_rule_7` | waste and recycling | Fail if spent moulding sand, externally transferred casting scrap, machining swarf, or spent cutting fluid is merged into an umbrella row or if destination and allocation method are undisclosed. | `saai-et-al-2025-propeller-lca` |
| `validation_rule_8` | evidence completeness | Mark validation inconclusive when an unresolved UUID is silently replaced, a numeric external range lacks two independent compatible original sources, or a required collection protocol has no retained evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset suitable, after review, for use as a `secondary_dataset` or `background_dataset` |
| downstream_use | Cradle-to-gate modelling of ships, propulsion systems, shipbuilding and replacement-component supply chains requiring a mass-based finished propeller or blade input |
| allowed_use | Use for the declared alloy, product form, sand-cast route, foundry technology, geography, production period, and quality class; aggregate to a larger ship system only after preserving these qualifiers |
| excluded_use | Aircraft propellers, pumps, shafts, stand-alone pitch mechanisms, composite or additively manufactured propellers, repaired propellers, installation, vessel operation, maintenance, and end-of-life unless separately modelled |
| required_metadata | PCR id and version; product form; pitch application; alloy and recycled content; mass and dimensions; blade count; drawing/tolerance; balance and inspection status; mould/binder and melting route; finishing route; site and supplier geography; period; allocation; cut-offs; scrap and waste destinations; packaging treatment; data-owner and review status |
| required_quality_disclosure | Coverage period and completeness; primary-data share; meter and scale calibration; metal and energy reconciliation; allocation and pattern amortization; internal recovery; unresolved UUID and range evidence; source versions; deviations from IACS or purchaser requirements |
| update_trigger | Change in alloy or recycled content, product form, mould/binder or melting technology, material recovery, machining route, energy mix, site geography, supplier structure, allocation method, quality standard, or a material shift in normalized inputs, wastes, emissions, or product yield |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 42998 product-classification identity only |
| `iacs-ur-w24-2024` | standard | International Association of Classification Societies, UR W24 Rev.5 Corr.1, Cast Copper Alloy Propellers, December 2024, https://iacs.org.uk/resolutions/unified-requirements/ur-w/ur-w24-rev4-cln (retrieved 2026-09-05) | Scope of cast copper-alloy propellers and blades; foundry approval; moulding and casting controls; alloy tests; dimensions, balancing, inspection and release requirements |
| `saai-et-al-2025-propeller-lca` | literature | Saai, A. et al., Comparative life cycle assessments of greenhouse gas emissions associated with directed energy deposition repairing and sand-casting replacement of a ship propeller, Progress in Additive Manufacturing 10, 11781-11799 (2025), https://doi.org/10.1007/s40964-025-01316-w | Original-text process chain and foreground evidence for pattern and mould production, melting/casting, electricity and gas use, knock-out waste, recyclable metal, machining/grinding, balancing, quality checks, system-boundary separation and cut-off recycling treatment |
