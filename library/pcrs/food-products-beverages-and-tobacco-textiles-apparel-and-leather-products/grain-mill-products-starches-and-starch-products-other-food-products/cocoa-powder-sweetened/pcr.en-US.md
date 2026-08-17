---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-powder-sweetened
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cocoa powder, sweetened

## 1. Scope and Applicability

This PCR applies to dry, shelf-stable mixtures in which cocoa powder and sugars are the characterizing ingredients and which are placed on the market as sweetened cocoa powder, sweetened cocoa, drinking chocolate, or an equivalent product name. It covers conventional and fat-reduced cocoa-powder variants when the formulation and applicable sales specification are declared.

The foreground manufacturing scope begins with cocoa powder, sugars, optional permitted dry ingredients, packaging, purchased energy, and water received at the manufacturing site. It includes ingredient storage and handling, dosing, dry blending, conditional conditioning or agglomeration, screening and foreign-body control, filling, and packing. Upstream production of cocoa powder, sugars, other ingredients, packaging, energy carriers, and water is represented by linked provider datasets.

Unsweetened cocoa powder, cocoa liquor, cocoa butter, solid chocolate, bulk or retail chocolate preparations other than sweetened cocoa powder, ready-to-drink cocoa beverages, and dairy-based beverage powders whose category character is not a cocoa-powder-and-sugar mixture are outside this PCR. Distribution after the factory gate, preparation by the consumer, and packaging end of life are outside a gate-to-gate dataset produced under this PCR and may be added by a downstream life-cycle model.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-powder-sweetened |
| classification_refs | CPC 3.0: 23640, Cocoa powder, sweetened |
| covered_products | Dry mixtures characterized by cocoa powder and sugars and sold as sweetened cocoa powder, sweetened cocoa, drinking chocolate, or an equivalent market name; fat-reduced variants when declared |
| excluded_products | Unsweetened cocoa powder; cocoa liquor or butter; solid chocolate and other cocoa food preparations; ready-to-drink beverages; dairy-based beverage powders not principally a cocoa-powder-and-sugar mixture |
| representative_product | A dry, free-flowing sweetened cocoa powder made by dosing and blending purchased cocoa powder and sugar, then screening and packing it at the manufacturing site |
| production_route | Receipt and storage of ingredients and packaging -> dosing -> dry mixing -> conditional conditioning or agglomeration -> screening and foreign-body control -> filling and packing |
| market_state | Dry, shelf-stable finished product at the manufacturing-site gate, in declared bulk or retail packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of sweetened cocoa powder as a dry food ingredient or beverage-preparation mix at the manufacturing-site gate |
| How much | 1 kg net mass of finished sweetened cocoa powder |
| How well | Conforming to the declared recipe, cocoa-powder content, moisture or solids specification, particle or dispersibility specification when applicable, and destination-market sales description; an EU product sold as drinking chocolate, sweetened cocoa, or sweetened cocoa powder contains at least 25% cocoa powder |
| How long or cycle | One production lot delivered at the factory gate; storage after the gate and product preparation are not included |
| reference_flow_link | 1 kg of the declared finished reference product at the factory gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cocoa powder, sweetened `75c1ef5f-a7df-489a-8c49-07a90f6c4d66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cocoa-powder mass fraction; sugar or sweetener types; fat-reduced or conventional cocoa powder; alkalized or non-alkalized cocoa powder; optional ingredients and flavours; instantized or non-instantized route; moisture or solids specification; packaging format; destination market and applicable product specification; production geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the net as-sold product mass excluding primary, secondary, and tertiary packaging; normalize all inventory results to 1 kg accepted finished product. |
| `ingredient_mass_basis` | cocoa powder, sugars, optional ingredients, rework, and product losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record weighed batch or campaign masses on a consistent as-received basis and declare any dry-matter or moisture correction separately. |
| `recipe_fraction_check` | finished product composition | Mass fraction | kg/kg | Calculate each ingredient fraction from ingredient mass charged divided by accepted net product mass; distinguish fresh input from internal rework and verify the declared cocoa-powder fraction against the applicable sales specification. |
| `energy_unit_conversion` | electricity and fuels | Energy | kWh and MJ | Retain metered or invoiced units, document conversion factors and heating-value basis, and prevent double counting of purchased electricity, fuel, steam, or heat. |
| `packaging_mass_basis` | primary, secondary, and tertiary packaging | Mass | kg | Calculate packaging mass by material from measured mass per packaging unit and units consumed, net of documented returned or reused packaging. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cocoa powder, sugars, optional ingredients, packaging materials, purchased energy carriers, and water have been received at the manufacturing site with identity, mass, supplier, origin, and provider-dataset references available. |
| starting_condition_role | Gate-to-gate manufacturing start for a dry blended intermediate food product |
| product_classification_scope | Sweetened cocoa powder represented by CPC 3.0 code 23640; classification is mapping context and does not replace the semantic product boundary. |
| recursive_input_rule | If sweetened cocoa powder from the same product category is used as an input, record it once as an upstream product flow with its provider dataset; do not recursively reproduce its manufacturing inventory inside this foreground package. |
| upstream_dataset_requirement | Link cradle-to-gate provider datasets for cocoa powder, sugars, optional ingredients, packaging materials, electricity, fuels, water, and externally treated waste; disclose supplier-specific data gaps and proxies. |
| disclosure | Declare facility and geography, reporting period, product recipe and cocoa-powder fraction, cocoa-powder type, product moisture or solids specification, included process steps, instantization or agglomeration route, packaging format, allocation choices, omitted flows, and any deviation from this boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground manufacturing | Include ingredient receipt and storage, internal transfer, dosing, blending, conditional conditioning or agglomeration, screening and foreign-body control, filling, packing, directly attributable cleaning, onsite utility use, product losses, wastes, wastewater, and direct emissions. | `eu-pef-2021-2279` |
| `boundary_upstream_links` | purchased products and services | Represent production of cocoa powder, sugars, other ingredients, packaging, purchased energy, water, transport included in the declared supplier gate, and external waste treatment with provider datasets rather than omitting their upstream burdens. | `eu-pef-2021-2279` |
| `boundary_intermediate_product_gate` | downstream stages | Treat the reference product as an intermediate product at the manufacturing-site gate; exclude downstream distribution, storage, use or preparation, and end of life unless a wider declared model adds those stages. | `eu-pef-2021-2279` |
| `boundary_omission_disclosure` | inventory completeness | Do not deliberately omit a flow because it is inconvenient to measure; document and justify any unavailable or immaterial flow, its expected significance, and the proxy or data-gap treatment used. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_receiving` | Ingredient and packaging receiving, storage, and transfer | `required` | Always | Establish traceable starting masses and deliver ingredients and packaging to production | kg ingredients or packaging issued per 1 kg accepted finished product |
| `dosing_blending` | Ingredient dosing and dry blending | `required` | Always | Produce a homogeneous sweetened cocoa powder blend from the declared recipe | 1 kg bulk blend transferred to finishing |
| `conditioning` | Conditioning, agglomeration, or instantization | `conditional` | Include when the declared product is conditioned, agglomerated, lecithinated, dried, or otherwise treated after dry blending | Impart the declared dispersibility, density, moisture, or handling properties | kg conditioned powder output |
| `finishing_packaging` | Screening, foreign-body control, filling, and packing | `required` | Always | Produce accepted packed product at the factory gate and quantify losses and packaging | 1 kg net accepted finished product |

### Process: Ingredient and packaging receiving, storage, and transfer (`ingredient_receiving`)

#### Inputs

##### Product flows

###### Purchased cocoa powder (`cocoa_powder_input`)

Purchased conventional or fat-reduced cocoa powder is the characterizing cocoa ingredient entering the site boundary.

- Selected flow: Cocoa powder, not sweetened
- Flow property / unit: Mass / kg
- Amount rule: weighed mass issued to production, excluding internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished sweetened cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_materials`
- Sources: `eu-cocoa-directive-2000-36`

###### Sugars and declared sweeteners (`sugars_input`)

Record each sugar or other declared sweetening ingredient separately so the recipe and provider datasets remain traceable.

- Selected flow: Sugar or declared sweetener, by type
- Flow property / unit: Mass / kg
- Amount rule: weighed mass issued to production, by ingredient and supplier lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished sweetened cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_materials`
- Sources: `eu-cocoa-directive-2000-36`

###### Optional ingredients (`optional_ingredients_input`)

Include flavours, salt, emulsifiers, milk ingredients, anti-caking agents, carriers, or other recipe inputs only when present and separately disclose their identity and mass.

- Selected flow: Optional food ingredient, by substance or commercial preparation
- Flow property / unit: Mass / kg
- Amount rule: weighed or metered amount issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished sweetened cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_materials`
- Sources:

###### Packaging materials received (`packaging_materials_input`)

Track primary, secondary, and tertiary packaging by material and format, including liners, labels, closures, cartons, sacks, and pallet wrap.

- Selected flow: Packaging material, by material and format
- Flow property / unit: Mass / kg
- Amount rule: packaging units consumed multiplied by verified mass per unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished sweetened cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Ingredients and packaging issued to production (`materials_issued_output`)

Record transferred materials without duplicating their upstream burdens in the next process.

- Selected flow: Materials issued to sweetened cocoa powder production
- Flow property / unit: Mass / kg
- Amount rule: inventory issue mass reconciled with production receipts and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished sweetened cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe_materials`
- Sources:

##### Waste flows

###### Damaged or contaminated incoming material and packaging (`receiving_waste_output`)

Record material rejected or damaged after it crosses the site boundary, by waste type and treatment route.

- Selected flow: Rejected ingredient or packaging waste, by material
- Flow property / unit: Mass / kg
- Amount rule: weighed rejection sent to recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished sweetened cocoa powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste`
- Sources:

##### Elementary flows

### Process: Ingredient dosing and dry blending (`dosing_blending`)

#### Inputs

##### Product flows

###### Ingredients charged to the blender (`ingredients_charged_input`)

Record cocoa powder, sugars, optional ingredients, and separately identified internal rework charged to each batch or campaign.

- Selected flow: Recipe ingredients charged to blending
- Flow property / unit: Mass / kg
- Amount rule: sum of verified batch charge weights by ingredient; internal rework is reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg bulk blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_materials`
- Sources:

###### Electricity for conveying, dosing, extraction, and mixing (`blending_electricity_input`)

Include electricity used by directly attributable conveying, weighing, dust extraction, and mixing equipment.

- Selected flow: Electricity, supplier or grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from equipment hours and rated or metered demand
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg bulk blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utilities`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk sweetened cocoa powder blend (`bulk_blend_output`)

Record the homogeneous bulk blend transferred to conditioning or finishing before packaging.

- Selected flow: Bulk sweetened cocoa powder blend
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or batch mass balance after documented blend losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg bulk blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_waste`
- Sources:

##### Waste flows

###### Blend spills, purge, and non-reworked off-specification powder (`blending_waste_output`)

Separate returned internal rework from material that leaves the product system as waste.

- Selected flow: Cocoa-and-sugar powder waste
- Flow property / unit: Mass / kg
- Amount rule: weighed mass by destination and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg bulk blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste`
- Sources:

##### Elementary flows

###### Uncaptured powder particulate released to air (`blending_dust_air_output`)

Include direct particulate emissions from transfer and mixing after deducting material captured and recorded as product rework or waste.

- Selected flow: Particulate matter to air, applicable size fraction
- Flow property / unit: Mass / kg
- Amount rule: measured emission or documented engineering calculation from control-device and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg bulk blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Conditioning, agglomeration, or instantization (`conditioning`)

#### Inputs

##### Product flows

###### Bulk blend sent to conditioning (`conditioning_blend_input`)

Include this input only when the declared route conditions, agglomerates, lecithinates, dries, or otherwise treats the blend.

- Selected flow: Bulk sweetened cocoa powder blend
- Flow property / unit: Mass / kg
- Amount rule: measured mass fed to the conditioning step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste`
- Sources:

###### Conditioning utilities and additions (`conditioning_inputs`)

Record electricity, thermal energy, water, steam, compressed air, lecithin, or other additions separately when used.

- Selected flow: Conditioning input, by utility or ingredient
- Flow property / unit: Energy or Mass / kWh, MJ, or kg as applicable
- Amount rule: metered utility use and weighed additions attributable to the conditioning step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned sweetened cocoa powder (`conditioned_powder_output`)

Record powder released from conditioning to finishing with declared moisture, bulk density, or dispersibility properties.

- Selected flow: Conditioned sweetened cocoa powder
- Flow property / unit: Mass / kg
- Amount rule: measured accepted conditioned output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_quality`
- Sources:

##### Waste flows

###### Conditioning residues and wastewater (`conditioning_waste_output`)

Record off-specification solids and wastewater separately by composition and treatment route when conditioning is included.

- Selected flow: Conditioning residue or wastewater, by route
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced quantity leaving the conditioning process as waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_waste`
- Sources:

##### Elementary flows

###### Direct conditioning emissions to air (`conditioning_air_output`)

Record direct particulates and combustion emissions from onsite thermal equipment when applicable.

- Selected flow: Direct emission to air, by elementary flow
- Flow property / unit: Mass / kg
- Amount rule: measured emission or documented calculation from fuel and control-device records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Screening, foreign-body control, filling, and packing (`finishing_packaging`)

#### Inputs

##### Product flows

###### Bulk powder sent to finishing (`bulk_powder_finishing_input`)

Record the accepted bulk blend or conditioned powder entering final screening and packing.

- Selected flow: Bulk sweetened cocoa powder
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste`
- Sources:

###### Packaging consumed (`packaging_consumed_input`)

Record packaging by material and format, distinguishing reusable or returned tertiary packaging.

- Selected flow: Packaging material, by material and format
- Flow property / unit: Mass / kg
- Amount rule: packaging units consumed multiplied by verified mass per unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Finishing and packing electricity (`packing_electricity_input`)

Include electricity for screening, magnets or metal detection, conveying, extraction, filling, sealing, coding, and directly attributable packing equipment.

- Selected flow: Electricity, supplier or grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from equipment hours and rated or metered demand
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utilities`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted sweetened cocoa powder at factory gate (`sweetened_cocoa_reference_output`)

This is the quantitative reference output after final quality release, excluding packaging mass.

- Selected flow: Cocoa powder, sweetened `75c1ef5f-a7df-489a-8c49-07a90f6c4d66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net accepted finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net accepted finished product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_output_quality`
- Sources:

##### Waste flows

###### Rejected powder and packaging waste (`finishing_waste_output`)

Record off-specification powder not returned as rework and rejected packaging by material and treatment route.

- Selected flow: Product or packaging waste, by material and route
- Flow property / unit: Mass / kg
- Amount rule: weighed quantity transferred to recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste`
- Sources:

##### Elementary flows

###### Uncaptured finishing particulate released to air (`finishing_dust_air_output`)

Include direct powder particulate released after accounting for captured powder managed as rework or waste.

- Selected flow: Particulate matter to air, applicable size fraction
- Flow property / unit: Mass / kg
- Amount rule: measured emission or documented engineering calculation from control-device and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | dedicated and shared manufacturing operations | Avoid allocation by collecting separate recipe, output, waste, energy, utility, and emission records for the sweetened cocoa powder line, batch, or campaign; use system expansion only when the additional function and substituted system are explicitly modelled. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | shared utilities and services | When subdivision is not practicable, allocate shared burdens using a documented causal physical driver such as metered energy, equipment operating time, cleaned surface or volume, or mass throughput; justify why the driver represents resource use. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | genuine co-products with no defensible physical relationship | Use economic allocation only after documenting why subdivision, system expansion, and a relevant physical relationship are not practicable; record prices, reference period, allocation factors, and a sensitivity check. | `eu-pef-2021-2279` |
| `allocation_rework_and_waste` | internal rework, off-specification powder, and wastes | Internal rework that does not cross the product-system boundary carries no co-product credit and is tracked separately from fresh input; waste leaving the boundary is not a co-product unless a documented marketable function and the selected multifunctionality method justify otherwise. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_materials` | `ingredient_receiving`; `dosing_blending` | recipe ingredients, internal rework, and materials issued | batch recipe, scale ticket, material issue, supplier lot | batch_id; product_code; ingredient_id; supplier_lot; gross_mass; tare_mass; net_mass; moisture_basis; rework_flag; timestamp | calibrated scales reconciled to approved recipe and inventory issues | kg | each batch or campaign | full declared production period | all included lines and products | sum fresh input and internal rework separately; divide by accepted net reference-product output | scale calibration; approved recipe; lot traceability; stock reconciliation |
| `cp_energy_utilities` | `dosing_blending`; `conditioning`; `finishing_packaging` | electricity, fuels, heat, steam, compressed air, and process water | submeter, invoice, fuel receipt, equipment runtime | meter_id; start_reading; end_reading; unit; fuel_quantity; heating_value_basis; equipment_hours; allocation_driver; period | direct submetering preferred; otherwise documented engineering allocation tied to operating records | kWh; MJ; kg; m3 | meter interval and monthly reconciliation | full declared production period | all included equipment and shared services | subtract exports and unrelated loads; allocate shared use by the approved causal driver; normalize to process output and reference flow | meter calibration; invoices; runtime logs; conversion-factor record |
| `cp_yield_waste` | all processes | intermediate outputs, accepted product, rework, losses, and wastes | scale ticket, production report, waste manifest, stock record | batch_id; input_mass; intermediate_output_mass; accepted_output_mass; rework_mass; waste_mass; waste_type; destination; stock_change | weigh outputs and wastes and reconcile batch, campaign, and reporting-period mass balance | kg | each batch or waste shipment with period reconciliation | full declared production period | all included lines and waste routes | keep internal rework inside the system; aggregate wastes by material and treatment route; report unexplained mass difference | scale calibration; production release; waste transfer evidence; reconciliation sign-off |
| `cp_packaging_records` | `ingredient_receiving`; `finishing_packaging` | packaging material consumed | packaging bill of materials, unit-mass test, issue and return record | packaging_id; material; format; mass_per_unit; units_issued; units_returned; reuse_cycles; supplier_lot | weigh representative packaging units and reconcile issues, returns, and packed units | kg; item | each packaging format and production period | full declared production period | all primary, secondary, and tertiary packaging used | net units consumed multiplied by verified mass per unit, aggregated by material and normalized to net product mass | balance calibration; packaging specification; issue-return reconciliation |
| `cp_direct_emissions` | `dosing_blending`; `conditioning`; `finishing_packaging` | particulate and combustion emissions to air | stack or workplace extraction measurement, fuel record, control-device log, engineering calculation | emission_point; pollutant; concentration; gas_flow; operating_time; fuel_use; control_efficiency; calculation_method | direct measurement where required; otherwise transparent calculation from activity and control records | kg; mg/m3; Nm3; h | regulatory or facility monitoring interval | full declared production period | all included direct emission points | calculate emitted mass for the declared period, subtracting captured material only when it is recorded as product or waste | laboratory report; instrument calibration; control-device maintenance; calculation review |
| `cp_output_quality` | `conditioning`; `finishing_packaging` | conditioned powder and accepted reference product | certificate of analysis, release test, finished-goods record | lot_id; net_mass; cocoa_fraction; moisture_or_solids; fat_reduced_status; alkalization_status; particle_or_dispersibility_result; release_status | approved laboratory or quality-control method linked to production lot | kg; mass fraction; specification unit | each released lot | full declared production period | all reference-product lots included | include only accepted net output in the denominator; production that is not released is rework or waste | test method; laboratory QA; signed release; product specification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = reporting-period flow amount / reporting-period accepted net finished-product mass | collected flow amount; accepted net output from `cp_output_quality` | flow amount per 1 kg reference product | |
| `calc_recipe_fraction` | cocoa powder, sugars, and optional ingredients | ingredient mass fraction = fresh ingredient mass charged / accepted net finished-product mass; report internal rework separately and do not count it as fresh upstream input | `cp_recipe_materials`; `cp_output_quality` | kg ingredient/kg finished product and declared mass fraction | `eu-cocoa-directive-2000-36` |
| `calc_energy_allocation` | shared energy and utility records | use direct submetered quantity; otherwise multiply shared quantity by the documented causal share for the included process, then normalize to accepted output | meter or invoice quantity; equipment hours, metered demand, mass throughput, or another approved driver; accepted output | kWh, MJ, kg, or m3 per kg reference product | `eu-pef-2021-2279` |
| `calc_packaging_mass` | each packaging material | packaging mass = (units issued - documented returned reusable units) x verified mass per unit; divide by accepted net product mass | `cp_packaging_records`; `cp_output_quality` | kg packaging material/kg reference product | |
| `calc_mass_reconciliation` | each process and reporting period | unexplained mass difference = total mass inputs + opening stock - product outputs - documented rework transfer - wastes - closing stock - quantified direct mass emissions; investigate rather than silently allocate the residual | recipe, stock, product, rework, waste, wastewater, and emission records | signed mass-balance reconciliation and disclosed residual | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | reference product and recipe inputs | Link every included finished-product lot to the approved recipe, ingredient and packaging lots, product qualifiers, and the exact Tiangong reference-flow identity. | batch genealogy; approved recipe; supplier and packaging records; dataset metadata |
| `dq_primary_foreground` | processes operated by the reporting facility | Use site- or company-specific measured or collected data for ingredient masses, accepted output, packaging, energy and utilities, wastes, and direct emissions; document any engineering calculation and its inputs. | meters; scale records; invoices; production reports; waste manifests; calculation files; `eu-pef-2021-2279` |
| `dq_temporal_coverage` | all foreground data | Declare start and end dates and cover a complete, representative production period including routine changeovers, cleaning, rework, and losses; disclose abnormal exclusions or campaigns. | production calendar; meter coverage; batch list; downtime and cleaning logs |
| `dq_completeness_reconciliation` | process and site inventory | Reconcile recipe, intermediate, finished-product, rework, waste, stock-change, wastewater, and direct-emission masses and investigate unexplained differences. | signed process and reporting-period mass balances |
| `dq_representativeness_precision` | foreground and provider datasets | Document technological, geographical, and time representativeness and precision; identify proxies and supplier-data gaps and explain their expected influence. | data-quality assessment using the dimensions in `eu-pef-2021-2279`; provider dataset metadata |
| `dq_calibration_and_review` | measurements and calculated values | Retain calibration or verification status, calculation formulas, allocation drivers, unit conversions, responsible reviewer, and change history. | calibration certificates; controlled calculation workbook or script; review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Confirm UUID `75c1ef5f-a7df-489a-8c49-07a90f6c4d66`, Product flow type, CPC 23640 classification, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg reference unit. | |
| `validation_category_and_recipe` | product identity | Verify that cocoa powder and sugars characterize the dry product, required qualifiers and recipe fractions are declared, exclusions are respected, and the applicable destination-market product specification is met; where the EU sweetened-cocoa sales name is claimed, verify at least 25% cocoa powder. | `eu-cocoa-directive-2000-36`; `codex-cxs-105-1981` |
| `validation_boundary_coverage` | process map and inventory | Verify inclusion of every operated step from receipt through accepted packed product, conditional conditioning steps, upstream provider links, cleaning and utility use, wastes, wastewater, and direct emissions; list and justify every omitted flow. | `eu-pef-2021-2279` |
| `validation_mass_balance` | each process and reporting period | Recalculate ingredient fractions, intermediate yields, accepted output, rework, waste, stock change, and direct mass emissions; flag unexplained residuals and double-counted rework. | |
| `validation_allocation` | shared processes and multifunctionality | Confirm that subdivision was attempted first and that every remaining allocation has a causal driver, complete factor set, consistent denominator, and documented fallback rationale. | `eu-pef-2021-2279` |
| `validation_data_quality` | foreground and provider data | Confirm complete temporal coverage, calibration and traceability evidence, provider-dataset identity, and documented technological, geographical, time, and precision assessment; flag unresolved UUIDs and proxies. | `eu-pef-2021-2279` |
| `validation_no_unlabelled_estimates` | all amounts | Reject an amount presented as measured, calculated, or source-backed when its record, formula, or cited source is absent; any future provisional estimate must use `reasoned_estimate`, omit a false source id, and remain replaceable. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Facility- and product-specific foreground data package or aggregated gate-to-gate dataset for production of sweetened cocoa powder at the manufacturing-site gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Ingredient supply-chain, food-manufacturing, beverage-preparation, packaging, and broader product life-cycle models that require a disclosed factory-gate sweetened cocoa powder input |
| excluded_use | Unsweetened cocoa powder, cocoa bean or cocoa-liquor processing, chocolate manufacture, ready-to-drink cocoa beverages, consumer preparation, distribution, or comparative claims without compatible recipes, geography, period, boundary, allocation, and review |
| required_metadata | PCR id and version context; Tiangong reference-flow UUID; facility and geography; reporting period; cocoa-powder and sugar fractions; cocoa type and treatment; optional ingredients; instantization or agglomeration route; moisture or solids specification; packaging format; process coverage; provider datasets; allocation methods; data owners and review status |
| required_quality_disclosure | Primary-data coverage; measurement and calibration evidence; mass-balance residual; allocation drivers and factors; technological, geographical, time, and precision assessment; proxy and UUID gaps; exclusions; uncertainty and review limitations |
| update_trigger | Recipe or cocoa-powder fraction change; new sweetener or optional ingredient; change between conventional and fat-reduced or alkalized cocoa; addition or removal of conditioning or agglomeration; material process, energy, yield, packaging, supplier, site, or regulation change; expired representativeness; resolved UUID or proxy gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-105-1981` | `standard` | FAO/WHO Codex Alimentarius, CXS 105-1981, Standard for Cocoa Powders (Cocoas) and Dry Mixtures of Cocoa and Sugars, current listing revised 2025, https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ (retrieved 2026-08-11) | International product-category scope and validation reference for cocoa powders and dry cocoa-sugar mixtures |
| `eu-cocoa-directive-2000-36` | `standard` | Directive 2000/36/EC of the European Parliament and of the Council relating to cocoa and chocolate products intended for human consumption, CELEX 32000L0036, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32000L0036 (retrieved 2026-08-11) | Product definitions, cocoa-powder and sugar mixture identity, EU minimum cocoa-powder content, composition and sales-description validation |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Intermediate-product life-cycle stages, system boundary, company-specific data collection, allocation hierarchy, omission disclosure, and data-quality dimensions |
