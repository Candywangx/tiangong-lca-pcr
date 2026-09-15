---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.metallized-yarn
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Metallized yarn

## 1. Scope and Applicability

This PCR applies to factory-gate metallized yarn classified as CPC 3.0 code 27993. It covers textile yarn or a yarn-forming textile component that is covered with metal or combined with a metal monofilament, thread, strip, or comparable discrete metallic component and is sold as yarn for downstream textile manufacture. The foreground package shall declare the textile substrate, metal species, metal-incorporation route, yarn construction, surface or protective coating, linear density, metal mass fraction, and saleable state.

The PCR excludes uncombined textile yarn, bare metal wire sold as wire, woven fabrics made from metal thread or metallized yarn, finished garments and other downstream textile articles, and mixtures whose metallic component or manufacturing route is not disclosed. The reference inventory provides two route archetypes supported by the evidence: direct metal coating of a textile yarn and mechanical combination of a metal monofilament with a base yarn. A producer using another route shall preserve the same measurement, boundary, allocation, data-quality, and validation rules while recording every actual material, utility, waste, and elementary exchange as a separate atomic row.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.metallized-yarn |
| classification_refs | CPC 3.0: 27993, Metallized yarn |
| covered_products | Metal-coated textile yarn; textile yarn combined with a metal monofilament, thread, or strip; metallized yarn supplied for downstream weaving, knitting, embroidery, or other textile manufacture. |
| excluded_products | Uncombined textile yarn; bare metal wire sold as wire; woven fabrics of metal thread or metallized yarn; non-metallic gimped yarn; finished fabrics, garments, and other downstream articles; products with an undeclared metal or substrate. |
| representative_product | Saleable metallized yarn wound for industrial textile use, represented by either aluminium-coated polyester filament yarn or polyester yarn mechanically combined with stainless steel monofilament. |
| production_route | Route-specific at-plant production: direct metal coating by a declared deposition or plating technique, or mechanical twisting/wrapping of one declared metal monofilament with one declared textile base yarn, followed by in-line inspection and winding. |
| market_state | Finished, dry, saleable yarn at the factory gate; net yarn mass excludes cones, spools, reusable carriers, and transport packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Metallized yarn that supplies a declared metallic component within a textile-yarn construction for downstream textile manufacture. |
| How much | 1 kg net dry mass of saleable metallized yarn at the factory gate. |
| How well | Conforms to the producer's declared substrate, metal species, metal mass fraction, yarn construction, linear density, coating state, and acceptance specification. |
| How long or cycle | One completed production batch; no service duration is assigned to the intermediate product. |
| reference_flow_link | The functional unit is realized by the reference product flow below after rejection and rework are accounted for. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dry metallized yarn |
| Reference product flow | Metallized yarn `fae82400-7c2c-4779-a516-2c6dcdbee472` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | textile substrate and fibre composition; metal species and form; metal-incorporation route; yarn construction; linear density and test condition; metal mass fraction; protective coating or finish; moisture condition; production geography; production period; saleable state; exclusion of cone, spool, carrier, and transport-packaging mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net dry saleable yarn. Exclude cones, spools, reusable carriers, and transport packaging; disclose the moisture-conditioning basis used for weighing. |
| `material_mass` | Textile substrate, metal, finished yarn, rejects, and scrap | Mass | kg | Measure by calibrated scale or derive from reconciled batch issue and return records. Preserve each material identity and do not combine different metals, substrates, or waste streams. |
| `electricity_use` | Electricity consumed by coating, twisting/wrapping, inspection, and winding | Energy | kWh | Use route-specific submetered electricity where available; otherwise allocate a documented shared meter by operating time, rated load, or another physical driver before normalization. |
| `linear_density_disclosure` | Saleable metallized yarn | Linear density | tex | Report the test method, conditioning state, number of determinations, and batch result used for product acceptance; do not convert linear density into product mass without the measured yarn length and matching condition. |

## 5. System Boundary

The foreground boundary begins when declared textile yarn, metallic feedstock or monofilament, and other route-specific inputs are received by the metallized-yarn producer. It includes route-specific metal incorporation, twisting or wrapping when applicable, in-line inspection, winding, rework, and handling of rejects generated by those operations. Production of textile yarn, aluminium, stainless steel, electricity, and other purchased inputs remains upstream and requires linked upstream datasets. Downstream weaving, knitting, embroidery, garment manufacture, use, and end-of-life are outside the foreground boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received textile substrate and metallic feedstock at the metallized-yarn manufacturing site, with supplier, composition, mass, moisture condition, and upstream dataset identifiers declared. |
| starting_condition_role | Upstream product input to the foreground metallized-yarn operation. |
| product_classification_scope | CPC 3.0 code 27993 only; downstream woven fabric and other textile articles are outside this PCR. |
| recursive_input_rule | If metallized yarn is consumed as an input to produce the reference metallized yarn, record it once as an upstream product input with its own dataset and mass; do not recursively reopen its production inside the same foreground process. |
| upstream_dataset_requirement | Provide product-specific or representative upstream datasets for each textile substrate, each metal feedstock, electricity supply, and every other purchased input actually used. |
| disclosure | Disclose the metal species and form, substrate composition, incorporation technique, protective finish, rework loop, yield definition, excluded packaging or carrier mass, site, period, and any shared-process allocation. |

### Normative Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_specific` | Foreground process map | Include only the declared route, but include every operation at the producing site from received inputs through accepted wound yarn, including route-specific coating or combination, rework, inspection, and reject handling. | `repon-mikucioniene-2021`; `jrc-textiles-bref-2023` |
| `boundary_upstream_inputs` | Purchased material and energy inputs | Keep upstream production outside the foreground boundary and link a dataset for each separately identified textile substrate, metal, and energy carrier. | `ec-pef-2021-2279` |
| `boundary_no_hidden_wet_steps` | Wet plating, cleaning, or coating steps when present | If the declared route uses water, chemicals, solvents, or wet treatment, add each actual chemical input, water input, wastewater output, sludge output, and substance-specific direct emission as an atomic exchange; absence of such steps must be documented rather than represented by a zero-value placeholder. | `jrc-textiles-bref-2023` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_coating` | Direct metal coating, inspection, and winding | conditional | Include when metal is deposited or plated directly onto the textile yarn. | Creates accepted metal-coated yarn from one declared textile substrate and one declared metal species. | 1 kg accepted metallized yarn from this route |
| `metal_filament_combination` | Metal monofilament combination, inspection, and winding | conditional | Include when a metal monofilament is twisted or wrapped with a base textile yarn. | Creates accepted combined metallic yarn from one declared base yarn and one declared metal monofilament. | 1 kg accepted metallized yarn from this route |

### Process: Direct metal coating, inspection, and winding (`metal_coating`)

#### Inputs

##### Product flows

###### Polyester filament yarn substrate (`polyester_yarn_input_coating`)

Undyed polyester filament yarn crosses the foreground boundary as the textile substrate for the representative direct-coating route. Its issued dry mass is obtained from batch issue and return records.

- Selected flow: Polyester filament yarn, undyed
- Flow property / unit: Mass / kg
- Amount rule: Foreground dry mass issued to the coating batch, net of documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted metallized yarn from `metal_coating`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_coating_batch`
- Sources: `repon-mikucioniene-2021`

###### Aluminium feedstock (`aluminium_input_coating`)

Aluminium crosses the foreground boundary as the representative metal deposited onto the polyester yarn. Record actual net batch consumption and retain metal grade and supplier evidence.

- Selected flow: Aluminium, primary, unwrought
- Flow property / unit: Mass / kg
- Amount rule: Foreground aluminium issued minus recovered clean return, measured for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted metallized yarn from `metal_coating`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_coating_batch`
- Sources: `repon-mikucioniene-2021`

###### Medium-voltage electricity for metal coating (`electricity_input_coating`)

Electricity crosses the foreground boundary to operate deposition or plating equipment, vacuum equipment when used, inspection, and winding for this route.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Route-specific submeter reading or documented physical allocation of the shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted metallized yarn from `metal_coating`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_coating_energy`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted metallized yarn from direct coating (`metallized_yarn_output_coating`)

Accepted coated yarn is the route-specific reference product after in-line inspection, rework accounting, and winding. Its net dry mass excludes the cone, spool, carrier, and transport packaging.

- Selected flow: Metallized yarn `fae82400-7c2c-4779-a516-2c6dcdbee472`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg accepted net dry yarn by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Off-spec aluminium-coated polyester yarn (`offspec_yarn_output_coating`)

Rejected coated yarn leaves the process as one separately weighed waste stream unless it is demonstrably returned to the same batch as rework.

- Selected flow: Off-spec aluminium-coated polyester yarn
- Flow property / unit: Mass / kg
- Amount rule: Foreground rejected mass not returned as documented rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted metallized yarn from `metal_coating`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_coating_batch`
- Sources:

##### Elementary flows

### Process: Metal monofilament combination, inspection, and winding (`metal_filament_combination`)

#### Inputs

##### Product flows

###### Polyester filament base yarn (`polyester_yarn_input_combination`)

Undyed polyester filament yarn crosses the foreground boundary as the base yarn around which the representative stainless steel monofilament is mechanically combined.

- Selected flow: Polyester filament yarn, undyed
- Flow property / unit: Mass / kg
- Amount rule: Foreground dry mass issued to the combination batch, net of documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted metallized yarn from `metal_filament_combination`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_combination_batch`
- Sources: `repon-mikucioniene-2021`

###### Stainless steel monofilament (`stainless_steel_monofilament_input`)

One declared stainless steel monofilament crosses the foreground boundary as the metallic component twisted or wrapped with the polyester base yarn.

- Selected flow: Stainless steel monofilament
- Flow property / unit: Mass / kg
- Amount rule: Foreground dry mass issued to the combination batch, net of documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted metallized yarn from `metal_filament_combination`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_combination_batch`
- Sources: `repon-mikucioniene-2021`

###### Medium-voltage electricity for twisting and winding (`electricity_input_combination`)

Electricity crosses the foreground boundary to operate twisting or wrapping, in-line inspection, and winding equipment for this route.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Route-specific submeter reading or documented physical allocation of the shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted metallized yarn from `metal_filament_combination`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_combination_energy`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted metallized yarn from monofilament combination (`metallized_yarn_output_combination`)

Accepted combined yarn is the route-specific reference product after in-line inspection, rework accounting, and winding. Its net dry mass excludes the cone, spool, carrier, and transport packaging.

- Selected flow: Metallized yarn `fae82400-7c2c-4779-a516-2c6dcdbee472`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg accepted net dry yarn by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Off-spec stainless-steel-filament polyester yarn (`offspec_yarn_output_combination`)

Rejected combined yarn leaves the process as one separately weighed waste stream unless it is demonstrably returned to the same batch as rework.

- Selected flow: Off-spec stainless-steel-filament polyester yarn
- Flow property / unit: Mass / kg
- Amount rule: Foreground rejected mass not returned as documented rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted metallized yarn from `metal_filament_combination`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_combination_batch`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Route-specific production batch | First separate route, product, and rework records so that inputs, energy, accepted output, and rejects are directly assigned without allocation. | `ec-pef-2021-2279` |
| `allocation_physical` | Shared coating, twisting, inspection, winding, or utility records | When direct assignment is not possible, allocate by a documented physical relationship such as route-specific operating time, metered energy, or dry mass throughput; economic allocation is permitted only when no defensible physical relationship exists and must be disclosed. | `ec-pef-2021-2279` |
| `allocation_rework` | Internal rework | Keep reworked yarn inside the producing batch and count only its additional measured material and energy once; do not report the same reworked mass as both product and waste. | `ec-pef-2021-2279` |
| `allocation_scrap` | Off-spec yarn leaving the foreground boundary | Report the measured reject as a waste output. Any recycling credit or substituted-product claim belongs to an explicitly declared downstream scenario and shall not reduce the foreground inventory silently. | `ec-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_metal_coating_batch` | `metal_coating` | substrate input, aluminium input, accepted output, reject output, and rework | batch material record | batch_id; substrate_item; substrate_mass; aluminium_item; aluminium_issued_mass; aluminium_return_mass; accepted_net_dry_mass; reject_mass; rework_mass; moisture_condition | Calibrated scale records reconciled to issue, return, production, quality, and waste tickets. | kg | every batch | Representative continuous 12-month period or all batches in a shorter declared campaign | Every site included in the dataset | Sum non-overlapping batch records, keep rework internal, then normalize by accepted net dry mass. | Calibration certificate; signed batch record; material issue and return tickets; reject disposition; moisture-conditioning record. |
| `cp_metal_coating_energy` | `metal_coating` | coating, inspection, and winding electricity | meter record | meter_id; start_time; end_time; start_reading; end_reading; route_runtime; shared_meter_driver; batch_id | Read a route submeter; if shared, retain meter total and the physical allocation calculation. | kWh | every batch or meter interval | Same period and site coverage as material records | Every coating line included in the dataset | Subtract verified non-production loads when separately metered, allocate shared use by the declared physical driver, and normalize by accepted net dry mass. | Meter identification; calibration or utility reconciliation; operating log; allocation workbook. |
| `cp_metal_combination_batch` | `metal_filament_combination` | base-yarn input, monofilament input, accepted output, reject output, and rework | batch material record | batch_id; base_yarn_item; base_yarn_mass; metal_monofilament_item; metal_monofilament_mass; accepted_net_dry_mass; reject_mass; rework_mass; moisture_condition | Calibrated scale records reconciled to issue, return, production, quality, and waste tickets. | kg | every batch | Representative continuous 12-month period or all batches in a shorter declared campaign | Every site included in the dataset | Sum non-overlapping batch records, keep rework internal, then normalize by accepted net dry mass. | Calibration certificate; signed batch record; issue and return tickets; reject disposition; moisture-conditioning record. |
| `cp_metal_combination_energy` | `metal_filament_combination` | twisting, inspection, and winding electricity | meter record | meter_id; start_time; end_time; start_reading; end_reading; route_runtime; shared_meter_driver; batch_id | Read a route submeter; if shared, retain meter total and the physical allocation calculation. | kWh | every batch or meter interval | Same period and site coverage as material records | Every combination line included in the dataset | Subtract verified non-production loads when separately metered, allocate shared use by the declared physical driver, and normalize by accepted net dry mass. | Meter identification; calibration or utility reconciliation; operating log; allocation workbook. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | Every collected material, energy, and waste exchange | normalized exchange = route-period exchange / accepted net dry metallized yarn from the same route and period | non-overlapping exchange total; accepted net dry yarn mass | kg/kg or kWh/kg as applicable | `ec-pef-2021-2279` |
| `calc_metal_consumption` | Direct-coating metal input | net metal input = issued metal - verified clean metal return; do not subtract metal contained in waste that leaves the foreground boundary | issued metal mass; clean return mass | kg net metal input | `ec-pef-2021-2279` |
| `calc_batch_mass_balance` | Each route and reporting period | mass-balance difference = total material inputs - accepted yarn output - measured material waste outputs - verified clean returns; investigate and disclose the residual rather than forcing it to zero | substrate and metal inputs; accepted output; waste outputs; clean returns | kg and percent of total material input | `ec-pef-2021-2279` |
| `calc_metal_mass_fraction` | Reference product qualifier | metal mass fraction = measured metal mass in accepted yarn / accepted net dry yarn mass, using batch mass reconciliation or a documented product-composition test | accepted-product metal mass; accepted net dry yarn mass | kg metal/kg yarn | `repon-mikucioniene-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and all inputs | Retain exact substrate composition, metal species and form, route, yarn construction, linear density, coating or finish, and Tiangong UUID where confirmed. | Product specification; bill of materials; state-100 UUID evidence; supplier declaration. |
| `dq_temporal` | Foreground records | Use one representative continuous 12-month period unless the campaign is shorter; disclose the period, shutdowns, and excluded batches. | Production calendar; batch register; meter coverage report. |
| `dq_completeness` | Each included route | Reconcile material issue, return, accepted output, rework, rejects, and metered energy; document any route-specific water, chemical, solvent, wastewater, sludge, or direct-emission exchange that actually occurs. | Signed reconciliation; waste tickets; meter reconciliation; environmental monitoring records. |
| `dq_measurement` | Mass, energy, and linear density | Use calibrated or utility-reconciled instruments and retain method, condition, frequency, and uncertainty or tolerance information. | Calibration certificates; test report; utility invoice; instrument log. |
| `dq_representativeness` | Multi-line or multi-site dataset | Include all lines and sites claimed by the dataset or document a production-weighted sampling and aggregation method. | Line/site production totals; sampling plan; aggregation workbook. |
| `dq_uuid_resolution` | Unresolved inventory flow identities | Do not assign an inventory UUID until the named atomic exchange is confirmed independently by hybrid retrieval and a state-100 direct read. | Manifest row-level candidate record and direct-read evidence. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The product flow UUID shall resolve at state 100 to Product flow, base name Metallized yarn, CPC 27993, quantitative reference Mass, and reference unit kg. | `unsd-cpc-3-2025` |
| `validate_reference_amount` | Reference flow | Accepted output shall equal exactly 1 kg net dry yarn; carrier and packaging mass shall be excluded and moisture condition disclosed. | `ec-pef-2021-2279` |
| `validate_route_exclusivity` | Process map | Include `metal_coating`, `metal_filament_combination`, or both only when production records show the corresponding route; do not merge route inventories before route-level mass and energy reconciliation. | `repon-mikucioniene-2021` |
| `validate_atomic_flows` | Inventory rows | Every selected flow shall be one concrete exchange. Different metals, textile substrates, chemicals, energy carriers, waste streams, and emitted substances shall remain separate rows. | `jrc-textiles-bref-2023` |
| `validate_mass_balance` | Each route and period | Report the calculated mass-balance residual and investigate material discrepancies against issue, return, rework, reject, and accepted-output records. | `ec-pef-2021-2279` |
| `validate_uuid_evidence` | Inventory UUIDs | Reject an inventory UUID that lacks both hybrid-retrieval evidence and an exact state-100 direct read for the selected atomic flow. |  |
| `validate_bilingual_alignment` | English and Chinese PCR renderings | The ordered process ids, row ids, rule ids, controlled tokens, source ids, and UUIDs shall match exactly across languages. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground metallized-yarn production data package and publishable unit-process dataset. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA of downstream yarn processing, weaving, knitting, embroidery, textile products, and route-specific supply-chain studies when the required qualifiers and representativeness match. |
| excluded_use | Bare metal wire, uncombined textile yarn, woven fabric, garments, products with undisclosed metal or substrate, or comparisons that ignore different metal species, metal fractions, coating routes, or yarn constructions. |
| required_metadata | PCR id and version; CPC 27993; product-flow and Mass UUIDs; textile substrate; metal species and form; incorporation route; yarn construction; linear density; metal mass fraction; coating or finish; moisture condition; geography; period; route share; allocation; net-mass exclusions; unresolved UUIDs. |
| required_quality_disclosure | Record coverage; calibration and meter reconciliation; mass-balance residual; route-level allocation; rework and reject treatment; upstream dataset selection; missing route-specific exchanges; UUID verification state; data limitations. |
| update_trigger | Change in substrate, metal species or form, metal fraction, deposition/plating or combination route, protective finish, major equipment, electricity supply, site mix, allocation method, product specification, or representative period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, explanatory notes dated 30 June 2025, subclass 27993, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13). | Exact CPC subclass identity and separation from adjacent textile articles. |
| `ec-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-13). | Life-cycle inventory completeness, company-specific foreground data, physical allocation preference, normalization, and quality disclosure. |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://eippcb.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-13). | Textile-operation process coverage and conditional recording of energy, water, chemicals, wastes, wastewater, and emissions. |
| `repon-mikucioniene-2021` | literature | Repon, M. R.; Mikucioniene, D. Progress in Flexible Electronic Textile for Heating Application: A Critical Review. Materials 14 (2021) 6540. https://doi.org/10.3390/ma14216540. Open full text verified through Europe PMC PMC8585370. | Metal-wire/base-yarn combination; metal-coated yarn route; sputtering, electroless plating, and vapour-deposition route evidence; route and composition disclosure. |
