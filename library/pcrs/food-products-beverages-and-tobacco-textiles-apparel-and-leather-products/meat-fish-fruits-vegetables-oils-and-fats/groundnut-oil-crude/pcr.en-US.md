---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-crude
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Groundnut oil, crude

## 1. Scope and Applicability

This PCR applies to gate-to-gate production of crude groundnut oil (arachis oil or peanut oil) from received groundnuts. It covers receiving, cleaning, shelling when in-shell material is received, drying or conditioning, oil extraction by mechanical pressing and/or solvent extraction, crude-oil solids separation or clarification, on-site storage, and loadout at the producing mill gate.

The PCR excludes groundnut cultivation, off-site transport before mill receipt, edible-oil refining (including neutralization, bleaching, deodorization, and winterization), fractionation, hydrogenation, formulation, retail packaging, distribution, use, and end-of-life. Upstream groundnut and energy datasets may be linked but are not re-inventoried inside this foreground boundary. Refined groundnut oil and oils blended with other botanical sources are outside scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-crude |
| classification_refs | CPC 3.0: 21621, Groundnut oil, crude |
| covered_products | Unrefined oil derived from groundnuts (seeds of *Arachis hypogaea* L.), including arachis oil and peanut oil, leaving mechanical pressing, solvent extraction, or a declared combined route after physical clarification |
| excluded_products | Refined groundnut oil; virgin/cold-pressed retail oil represented as a finished consumer product; blended vegetable oils; extracted groundnut meal or press cake as the reference product; oils from other botanical sources |
| representative_product | Crude groundnut oil at the producing mill gate, before refining |
| production_route | Receiving and preparation followed by mechanical pressing, solvent extraction, or a declared combined route; then clarification, storage, and loadout |
| market_state | Bulk, unrefined crude oil at the producing plant gate; extraction route, intended grade, and moisture/solids condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of unrefined groundnut oil for subsequent refining or declared industrial use |
| How much | 1 kg of net crude groundnut oil output |
| How well | Derived only from groundnuts; physically clarified as declared; not refined, blended, or diluted; route and intended grade declared |
| How long or cycle | One reporting-period production output at the mill gate; no service duration applies |
| reference_flow_link | Net qualifying crude-oil mass leaving the foreground production system after clarification and before refining |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Groundnut oil, crude `4becfdba-2a4c-4c6f-a503-75db987fdc16` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical source (*Arachis hypogaea* L.); input state (in-shell or shelled); extraction route; mechanical press type and number of passes when applicable; solvent identity and recovery system when applicable; clarification method; intended food/non-food grade; geographic scope; reporting period; allocation method; co-product and residue fates |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference crude groundnut oil output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net saleable crude-oil mass after clarification and before refining; subtract returns, off-spec diversions, and closing-inventory increases and add opening-inventory drawdown consistently. |
| `material_mass_basis` | Groundnuts, oil, cake/meal, shells, sludge, solvent, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass and the moisture or dry-matter basis used; do not mix wet and dry quantities in mass balance or allocation without an explicit conversion. |
| `energy_conversion` | Electricity, fuels, and purchased steam/heat | Energy property of the selected Tiangong flow | kWh or MJ | Retain the metered or invoice unit and convert only with a documented unit conversion; do not treat electricity and fuel energy as interchangeable flows. |
| `solvent_mass_balance` | Solvent-extraction route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile solvent purchases/makeup, opening and closing stocks, recovered and reused solvent, solvent exported in products or waste, and releases over the same period. |
| `conditioning_temperature` | Heated conditioning before mechanical pressing | Temperature property of the selected measurement record | °C | Record actual time, temperature, and moisture. The FAO small-expeller description of 60–90 °C is a route-specific diagnostic benchmark, not a default value or conformance limit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Groundnuts received at the mill gate, with in-shell/shelled state, origin, moisture, storage condition, and accepted/rejected mass declared |
| starting_condition_role | Upstream product input to foreground groundnut-oil production |
| product_classification_scope | Crude groundnut oil only; CPC 3.0 code 21621 is mapping context and does not broaden the semantic boundary |
| recursive_input_rule | Purchased crude groundnut oil that is blended, reworked, or otherwise enters the same product category shall be recorded as a separate upstream product input and shall not be recursively reconstructed inside this PCR boundary |
| upstream_dataset_requirement | Link representative upstream datasets for groundnut production, purchased electricity, fuels, heat/steam, water, solvent, packaging, and off-site waste treatment; disclose geography, technology, and temporal match |
| disclosure | Declare extraction route, feedstock state and moisture basis, included preparation steps, solvent recovery and emission-accounting method when relevant, internal recycling, co-product fates, allocation method, excluded operations, and any data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_to_crude_gate` | All datasets | Include all foreground operations from mill receipt of groundnuts through qualifying crude-oil storage and loadout; exclude cultivation and refining while linking their datasets only when required by the study system. | `codex-cxs-210-1999`; `fao-groundnut-postharvest-2002` |
| `boundary_route_specific_steps` | Extraction route | Include shelling, conditioning, pressing passes, solvent extraction, desolventizing, meal drying/cooling, solvent recovery, and clarification only when performed; the route declaration shall control which conditional processes are active. | `fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995` |
| `boundary_internal_recycling` | Recovered oil, solvent, water, and solids | Record internal loops once and report only net external inputs and releases, while retaining gross recovery data needed to verify the balance. | `us-epa-ap42-9-11-1-1995` |
| `boundary_no_refining` | Crude-oil product | Stop before alkali or physical refining, bleaching, deodorization, winterization, fractionation, or formulation. | `us-epa-ap42-9-11-1-1995` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_receiving_preparation` | Receiving and groundnut preparation | `required` | Always; shelling is conditional on in-shell receipt and heating is conditional on the declared route | Establish accepted oil-bearing feedstock and prepared material | kg prepared groundnuts |
| `p_mechanical_extraction` | Mechanical oil extraction | `conditional` | Include for hydraulic, expeller, ghani, or other pressing routes | Separate crude oil and press cake by pressure, with route-specific conditioning | kg crude oil from pressing |
| `p_solvent_extraction` | Solvent extraction and recovery | `conditional` | Include when solvent is used on prepared groundnuts or press cake | Extract oil, desolventize meal, and recover solvent | kg crude oil from solvent extraction |
| `p_clarification_storage` | Crude-oil clarification, storage, and loadout | `required` | Always; select settling, filtration, centrifugation, or another declared physical method | Produce the net qualifying crude-oil reference output | 1 kg net crude groundnut oil |

### Process: Receiving and groundnut preparation (`p_receiving_preparation`)

#### Inputs

##### Product flows

###### Received groundnuts (`received_groundnuts`)

Record accepted groundnuts crossing the mill gate. Use the selected in-shell flow only for in-shell receipt; a shelled-input dataset shall select a Tiangong flow whose identity and market state match shelled groundnuts.

- Selected flow: Peanut, in shell, dried to safe moisture `19b26342-ff22-426f-bac3-74cd48cae179`
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass, separately recording rejected lots, foreign matter, and opening/closing stock changes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared groundnuts output and later normalized to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `codex-cxs-210-1999`; `fao-rural-oilseed-quality-1995`

###### Preparation utilities (`preparation_utilities`)

Record electricity, fuel, steam/heat, and water as separate site- and geography-specific product flows for cleaning, shelling, drying, milling, flaking, and conditioning.

- Selected flow: Select the applicable Tiangong utility flows for the site; no geography-independent utility UUID is prescribed
- Flow property / unit: Flow-specific energy, mass, or volume property / metered unit
- Amount rule: Metered use or reconciled invoice quantity attributable to preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared groundnuts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared groundnuts (`prepared_groundnuts`)

Record the measured oil-bearing material transferred internally to pressing or solvent extraction. Treat it as an internal intermediate; no external Tiangong product-flow UUID is prescribed.

- Selected flow: Prepared groundnuts, route and moisture state declared (internal intermediate)
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass with moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared groundnuts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`

###### Valorized groundnut shells (`shells_coproduct`)

Record shells as a product output only when they have a documented recipient and beneficial use; otherwise use the waste row below.

- Selected flow: Select a Tiangong groundnut-shell product flow matching the documented use
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched mass, mutually exclusive with discarded-shell mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared groundnuts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `fao-groundnut-postharvest-2002`

##### Waste flows

###### Discarded shells and preparation rejects (`preparation_rejects`)

Record shells, stones, damaged kernels, dust collector solids, and rejected material sent to waste treatment, excluding quantities recorded as products.

- Selected flow: Select waste flows matching the physical material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or reconciled dispatched waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared groundnuts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`

##### Elementary flows

### Process: Mechanical oil extraction (`p_mechanical_extraction`)

#### Inputs

##### Product flows

###### Prepared groundnuts to press (`press_feed`)

Record the measured internal transfer to each press pass, avoiding double counting recirculated press cake.

- Selected flow: Prepared groundnuts, route and moisture state declared (internal intermediate)
- Flow property / unit: Mass / kg
- Amount rule: Net feed mass entering the pressing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from pressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `fao-groundnut-postharvest-2002`

###### Pressing utilities (`pressing_utilities`)

Record electricity, drive fuel, and direct heat or steam as separate site-specific flows.

- Selected flow: Select applicable Tiangong utility flows for the site
- Flow property / unit: Flow-specific energy or mass property / metered unit
- Amount rule: Metered or invoice-reconciled consumption attributable to pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from pressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fao-groundnut-postharvest-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude groundnut oil from pressing (`pressed_crude_oil`)

Record crude oil transferred to clarification before any refining operation.

- Selected flow: Groundnut oil, crude `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass, adjusted for internal oil recycle and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from pressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `fao-groundnut-postharvest-2002`

###### Groundnut press cake (`groundnut_press_cake`)

Record the solid mechanical-pressing co-product and its moisture, residual-oil condition, destination, and fitness for the declared use.

- Selected flow: Groundnut press cake `51d899e2-0ace-4f0b-8db9-b1ebf0533eac`
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched or internally transferred mass, with inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from pressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `fao-groundnut-postharvest-2002`; `fao-leap-animal-feeds-2016`

##### Waste flows

##### Elementary flows

###### Particulate matter from pressing and handling (`pressing_particulate`)

Record measured or site-modelled particulate releases by the actual receiving compartment and control device.

- Selected flow: Select the Tiangong elementary flow matching particle size and receiving compartment
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or documented site emission calculation; do not use an unrelated oilseed default as a groundnut measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from pressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `us-epa-ap42-9-11-1-1995`

### Process: Solvent extraction and recovery (`p_solvent_extraction`)

#### Inputs

##### Product flows

###### Prepared groundnuts or press cake to solvent extraction (`solvent_feed`)

Record the actual oil-bearing feed to the extractor, distinguishing prepared kernels from previously pressed cake.

- Selected flow: Prepared groundnuts or groundnut press cake, matching the declared route
- Flow property / unit: Mass / kg
- Amount rule: Net measured extractor feed, excluding internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from solvent extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995`

###### Hexane makeup (`hexane_makeup`)

Record net purchased or externally supplied hexane entering the site balance; recovered internal hexane is not a second external input.

- Selected flow: Hexane `7e175110-5d8a-419e-8dee-2649554084e7`
- Flow property / unit: Mass / kg
- Amount rule: Purchases plus opening stock minus closing stock, adjusted for transfers and documented solvent contained in products or wastes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from solvent extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Solvent-extraction utilities (`solvent_utilities`)

Record electricity, steam/heat, cooling water, and other utilities separately for extraction, distillation, stripping, desolventizing, drying, cooling, and solvent recovery.

- Selected flow: Select applicable Tiangong utility flows for the site
- Flow property / unit: Flow-specific property / metered unit
- Amount rule: Metered or invoice-reconciled quantity attributable to the solvent route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from solvent extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude groundnut oil from solvent extraction (`solvent_crude_oil`)

Record desolventized crude oil transferred to clarification.

- Selected flow: Groundnut oil, crude `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass after solvent stripping, adjusted for recycle and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from solvent extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Solvent-extracted groundnut meal (`groundnut_meal`)

Record desolventized meal as a product only when it has documented beneficial use and meets the applicable quality requirements. Select a verified Tiangong groundnut-meal flow; no current UUID is prescribed by this PCR.

- Selected flow: Solvent-extracted groundnut meal, feed or other destination declared
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched or internally transferred mass, with moisture and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from solvent extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `fao-groundnut-postharvest-2002`; `fao-leap-animal-feeds-2016`

##### Waste flows

###### Off-spec meal and solvent-bearing residues (`solvent_route_waste`)

Record waste meal, sludge, spent absorbent, and contaminated residues by physical identity and treatment route.

- Selected flow: Select Tiangong waste flows matching the material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched waste, including documented solvent content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from solvent extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Elementary flows

###### Hexane released to air (`hexane_to_air`)

Record net hexane release using the reconciled site solvent balance and the actual receiving compartment. The UUID below is appropriate only for non-urban air or high-stack releases; select another Tiangong compartment when site conditions differ.

- Selected flow: Hexane, emissions to non-urban air or from high stacks `fe0acd60-3ddc-11dd-a692-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculated net solvent loss to air after separately accounting for solvent in products, wastewater, and waste; replace with verified direct monitoring when available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude oil from solvent extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-ap42-9-11-1-1995`

### Process: Crude-oil clarification, storage, and loadout (`p_clarification_storage`)

#### Inputs

##### Product flows

###### Unclarified crude groundnut oil (`unclarified_crude_oil`)

Record the internal crude-oil transfer from all active extraction routes without counting it as an additional external input.

- Selected flow: Groundnut oil, crude `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass from extraction to clarification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net crude groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`

###### Clarification and storage utilities (`clarification_utilities`)

Record electricity, filter media, inert gas, and other consumed products separately when used.

- Selected flow: Select applicable Tiangong utility and consumable flows for the site
- Flow property / unit: Flow-specific property / metered or purchase unit
- Amount rule: Metered or purchase-reconciled quantity attributable to clarification, storage, and loadout
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net crude groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fao-groundnut-postharvest-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net crude groundnut oil reference output (`reference_crude_oil`)

Record saleable crude groundnut oil after physical clarification and before any refining step.

- Selected flow: Groundnut oil, crude `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg after normalization from collected net qualifying output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net crude groundnut oil at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `codex-cxs-210-1999`

##### Waste flows

###### Clarification sludge and spent filter material (`clarification_waste`)

Record foots, sediment, spent filter media, and off-spec oil sent to treatment, with any recovered oil returned to the internal balance.

- Selected flow: Select Tiangong waste flows matching the material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched waste net of documented internal oil recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net crude groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `fao-groundnut-postharvest-2002`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Oil, cake/meal, shells, and route-specific operations | First avoid allocation by subdividing the plant and assigning inputs, emissions, and post-separation operations directly to the product or production unit that causes them. | `fao-leap-animal-feeds-2016` |
| `allocation_shared_burdens` | Remaining shared burdens before product separation | When subdivision cannot resolve shared burdens, use economic allocation among crude oil and beneficial co-products using contemporaneous, documented prices; calculate factors over a representative period and ensure factors sum to one. | `fao-leap-animal-feeds-2016` |
| `allocation_sensitivity` | Material co-products | Report dry-mass and gross-energy allocation as sensitivity cases when data allow, and disclose how the selected method changes the crude-oil result. | `fao-leap-animal-feeds-2016` |
| `allocation_waste_definition` | Shells, rejects, sludge, and off-spec meal | Treat an output as a co-product only when a documented recipient and beneficial use exist. Waste without marketable function receives no co-product credit; its handling remains with the generating process. | `fao-leap-animal-feeds-2016` |
| `allocation_data_disclosure` | All allocated datasets | Disclose co-product wet and dry masses, moisture, prices and averaging period, energy-content data where used, allocation factors, excluded outputs, and sensitivity results. | `fao-leap-animal-feeds-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | all active processes | Feedstock, intermediates, oil, cake/meal, shells, products, rejects, and stocks | Weighbridge, calibrated scale, tank-gauge, dispatch, and inventory records | timestamp; batch_id; material_id; route; gross_mass; tare_mass; net_mass; moisture; opening_stock; closing_stock; destination | Reconcile batch/shift records to monthly and annual totals; retain internal-transfer identifiers | kg; % moisture | Each batch or shift; stock at reporting-period boundaries | Complete representative reporting period, normally at least 12 consecutive months | All foreground lines and storage tanks producing the declared output | Sum external inputs/outputs; cancel matched internal transfers; adjust for stock change; normalize with `calc_reference_normalization` | Calibration certificates; signed weigh tickets; tank tables; stocktake reconciliation; rejected-lot records |
| `cp_utilities` | all active processes | Electricity, fuels, steam/heat, water, and consumables | Meter, submeter, invoice, purchase, and operating-hour records | meter_id; start_reading; end_reading; invoice_quantity; fuel_type; steam_condition; process_assignment; allocation_key | Prefer submeters; reconcile invoices to site totals and document any engineering allocation | kWh; MJ; kg; m3 | Continuous/shift/monthly as available | Same period as product output | All included foreground equipment | Directly assign metered quantities; allocate only residual shared utility use with a documented driver | Meter calibration; invoices; fuel certificates; reconciliation variance |
| `cp_solvent_balance` | `p_solvent_extraction` | Hexane input, recovery, stock, product/waste content, and releases | Purchase, tank inventory, recovery meter, laboratory, wastewater, waste, and monitoring records | opening_stock; purchases; closing_stock; recovered_reused; product_residual; wastewater_loss; waste_loss; monitored_air_release; transfers | Perform one closed solvent balance over the reporting period and investigate unexplained imbalance | kg | Daily/shift records aggregated monthly and annually | Same period as solvent-route oil output | Entire solvent handling, extraction, recovery, storage, and vent system | Apply `calc_hexane_balance`; do not count recovered internal solvent as new external input | Tank calibration; purchase invoices; laboratory methods; monitoring reports; signed waste manifests |
| `cp_waste_emissions` | all active processes | Waste, wastewater, particulate, VOC, and other releases | Weigh tickets, manifests, discharge meters, stack/fugitive monitoring, and documented emission calculations | material_or_substance; quantity; compartment; particle_size; treatment; control_device; method; uncertainty | Record by physical identity and receiving compartment; retain calculation parameters and control status | kg; m3 | Per dispatch or monitoring campaign; aggregate to reporting period | Representative of normal and abnormal operating conditions | All foreground emission points and waste routes | Sum measured values; use documented site calculations only for unmeasured periods | Laboratory accreditation; method reference; monitoring calibration; manifests; control-device logs |
| `cp_route_quality` | `p_receiving_preparation`; extraction processes | Feedstock condition, extraction route, oil/cake quality, and operating state | Receiving inspection, laboratory, batch sheet, and control-system records | botanical_identity; in_shell_or_shelled; moisture; mould_or_aflatoxin_control; press_type; press_passes; conditioning_time; conditioning_temperature; solvent_identity; meal_desolventized; oil_solids; intended_grade | Sample representative lots and record route settings for each campaign | %, °C, min, categorical | Each lot/campaign with periodic laboratory tests | Same period as inventory | All feedstock lots and active extraction routes | Report distribution and production-weighted average where meaningful; do not replace records with benchmark values | Sampling plan; laboratory method; certificates of analysis; control-system logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = reporting-period net flow amount / reporting-period net qualifying crude-oil output | Reconciled external flow totals; opening/closing stocks; qualifying oil output | Amount per 1 kg crude groundnut oil |  |
| `calc_material_balance` | Each active process and whole foreground system | imbalance = total mass inputs - total mass outputs - documented releases - closing-stock increase + opening-stock increase; report absolute and percentage imbalance | Wet-mass records on consistent moisture basis; releases; stock changes | Mass-balance result and unexplained difference |  |
| `calc_hexane_balance` | Solvent route | net external hexane input = purchases + opening stock - closing stock - documented net transfers; reconcile this with air, wastewater, waste, and product/meal residual solvent | Solvent purchase, stock, recovery, product/waste content, and monitoring records | Net hexane input and compartment-specific releases per kg crude oil | `us-epa-ap42-9-11-1-1995` |
| `calc_allocation_factors` | Shared extraction burdens | factor_i = economic value_i / sum of economic values of all beneficial co-products; also calculate dry-mass and gross-energy sensitivity factors when data allow | Co-product quantities, moisture, prices, averaging period, gross energy | Allocation factors and sensitivity cases | `fao-leap-animal-feeds-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Feedstock and reference product | Demonstrate groundnut botanical source and exclude refined or blended oil from the reference output. | Supplier/lot identity, route record, product specification, and reference-flow UUID; `codex-cxs-210-1999` |
| `dq_temporal` | Foreground inventory | Use one consistent representative period; disclose shutdowns, abnormal losses, campaigns, and missing months. | Production calendar, meter coverage, and gap log |
| `dq_mass_balance` | Material and solvent balances | Reconcile all major inputs, outputs, internal transfers, stocks, wastes, and releases; investigate unexplained imbalance rather than forcing closure. | `calc_material_balance`; `calc_hexane_balance`; signed reconciliation |
| `dq_route` | Mechanical and solvent routes | Activate only performed process modules and retain press passes, conditioning, solvent recovery, desolventizing, and control-device status. | Batch sheets, process diagram, and operating/control logs; `fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995` |
| `dq_groundnut_quality` | Incoming groundnuts and meal/cake destination | Retain moisture, mould/aflatoxin control, rejected-lot, and destination evidence; do not classify contaminated or unusable material as a beneficial co-product. | Sampling and laboratory records; `fao-rural-oilseed-quality-1995` |
| `dq_uuid` | Tiangong references | Verify every selected UUID against the intended flow type, reference property, market state, and receiving compartment before publication. | Tiangong identity readback and dataset review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | Reference product | Fail if the output is refined, blended, from another botanical source, or lacks the crude-oil route/grade declaration. | `codex-cxs-210-1999` |
| `validate_reference_flow` | Quantitative reference | Require exactly 1 kg after normalization, product-flow UUID `4becfdba-2a4c-4c6f-a503-75db987fdc16`, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, and Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`. |  |
| `validate_boundary` | Foreground system | Require mill receipt through physical clarification/storage/loadout, prohibit refining, and require upstream datasets rather than recursive reconstruction. | `fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995` |
| `validate_route_inventory` | Active processes | Require preparation and clarification; require mechanical and/or solvent module consistent with the declared route and all route-specific inputs, co-products, wastes, and releases. | `fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995` |
| `validate_material_balance` | Each process and total system | Require a disclosed material-balance result on consistent wet/dry basis, stock changes, internal-transfer cancellation, and investigation of unexplained imbalance. |  |
| `validate_solvent_route` | Solvent extraction | If solvent is used, require solvent identity, recovery-system description, net external solvent input, stock-adjusted mass balance, product/waste residuals, and compartment-specific releases; otherwise mark the check skipped as not applicable. | `us-epa-ap42-9-11-1-1995` |
| `validate_allocation` | Co-products | Require subdivision before allocation, documented beneficial-use decisions, economic factors summing to one for remaining shared burdens, and dry-mass/gross-energy sensitivity where data allow. | `fao-leap-animal-feeds-2016` |
| `validate_qualifiers_and_quality` | Dataset metadata | Require all reference-flow qualifiers, temporal/site coverage, feedstock condition, co-product destinations, UUID review, and quality evidence. | `fao-rural-oilseed-quality-1995` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for crude groundnut oil at the producing mill gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product carbon footprint and LCA models that need an explicit crude-groundnut-oil production stage; connection to representative upstream groundnut/utility datasets and downstream refining datasets |
| excluded_use | Direct representation of refined retail oil; comparative public claims without equivalent upstream, allocation, and quality scope; use of route-inapplicable solvent or pressing data |
| required_metadata | Geography; reporting period; plant technology; feedstock origin and in-shell/shelled state; route; oil grade; reference-flow qualifiers; upstream datasets; co-product fates; allocation; mass-balance and solvent-balance methods |
| required_quality_disclosure | Foreground coverage; meter and scale coverage; stock reconciliation; moisture basis; abnormal operations; missing data; UUID selection; emission method; allocation sensitivity; unresolved imbalance |
| update_trigger | Material change in feedstock state, extraction route, solvent/control system, clarification boundary, product grade, co-product destination, allocation method, technology, geography, or representative reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | FAO/WHO Codex Alimentarius, *Standard for Named Vegetable Oils*, CXS 210-1999 (official PDF: https://www.fao.org/input/download/standards/336/CXS_210e_2015.pdf; retrieved 2026-08-10) | Arachis/peanut/groundnut oil identity, botanical source, and distinction from downstream refining/product states |
| `fao-rural-oilseed-quality-1995` | `official_guidance` | FAO, *Quality assurance for small-scale rural food industries*, section 2.1.2 Oilseeds (https://www.fao.org/4/v5380e/V5380E07.HTM; retrieved 2026-08-10) | Receiving quality, mould/aflatoxin controls, de-husking, milling, heating, expelling, and crude-oil state |
| `fao-groundnut-postharvest-2002` | `official_guidance` | FAO INPhO, *Groundnut: Post-harvest Operations* (https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Groundnut.pdf; retrieved 2026-08-10) | Groundnut-specific preparation, conditioning, pressing, filtration, solvent-route applicability, cake/meal co-product, and crude-oil uses |
| `us-epa-ap42-9-11-1-1995` | `official_guidance` | US EPA, AP-42, section 9.11.1, *Vegetable Oil Processing*, November 1995 (https://gaftp.epa.gov/ap42/ch09/s1101/final/c9s1101_nov1995.pdf; retrieved 2026-08-10) | Solvent extraction, desolventizing, crude-oil/meal separation, hexane recovery, storage/vent sources, particulate emissions, and solvent mass-balance method |
| `fao-leap-animal-feeds-2016` | `official_guidance` | FAO LEAP Partnership, *Environmental performance of animal feeds supply chains: Guidelines for assessment*, Version 1, 2016, ISBN 978-92-5-109499-0 (official record: https://openknowledge.fao.org/handle/20.500.14283/i6433e; retrieved 2026-08-10) | Multifunctional process subdivision, direct assignment, oilseed-crushing allocation, economic allocation, and dry-mass/gross-energy sensitivity |
