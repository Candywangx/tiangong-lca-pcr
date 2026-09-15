---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.unwrought-nickel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Unwrought nickel

## 1. Scope and Applicability

This PCR governs foreground data packages for nickel metal leaving a refinery in an unwrought market form, including cathode, briquette, pellet, granule, rondelle, or comparable primary shape. It covers unalloyed unwrought nickel and unwrought nickel alloys only when nickel content, alloy designation, physical form, purity, and production route are declared. The present route inventory applies to hydrometallurgical purification followed by electrowinning or hydrogen reduction; a carbonyl-route dataset requires a later audited route extension.

It excludes nickel ores and concentrates; nickel matte, nickel oxide sinter, and other nickel-metallurgy intermediates as products; ferro-nickel and other charge nickel; nickel chemicals; nickel powder and flakes; nickel scrap; and wrought or semi-finished nickel profiles, bars, wire, plate, sheet, strip, foil, tube, and fittings. Upstream production of a purchased nickel-bearing intermediate is represented by a separate supplier dataset and is not silently merged with refinery foreground records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.unwrought-nickel |
| classification_refs | CPC 3.0: 41422, Unwrought nickel |
| covered_products | Nickel metal in unwrought refinery-gate forms, including cathode, briquette, pellet, granule, rondelle, and other declared primary shapes; unalloyed nickel and unwrought nickel alloys |
| excluded_products | Nickel ores and concentrates; nickel matte and nickel oxide sinter sold as intermediates; ferro-nickel; nickel chemicals; nickel powders and flakes; nickel scrap; wrought and semi-finished nickel products |
| representative_product | Refined unalloyed nickel in a declared unwrought market form |
| production_route | Hydrometallurgical purification followed by electrowinning or hydrogen reduction; carbonyl refining and other routes require an audited foreground-inventory extension before use |
| market_state | Dry saleable nickel metal at the refinery gate, with purity, alloy grade, form, packaging state, geography, and route declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of saleable unwrought nickel metal at the refinery gate |
| How much | 1,000 kg net mass of unwrought nickel product |
| How well | Conforming to the declared nickel purity or alloy grade and declared physical form, excluding packaging mass |
| How long or cycle | One reporting-period production output normalized to 1,000 kg |
| reference_flow_link | `out_unwrought_nickel` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Unwrought nickel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | nickel purity or alloy designation; unwrought form; refinery route; feed intermediate and its nickel grade; site and geography; reporting period; recycled-content treatment; co-product allocation method; packaging inclusion; moisture and weighing basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all amounts to 1,000 kg dry net unwrought nickel output; exclude pallet, container, and other packaging mass and disclose any moisture correction. |
| `material_mass_basis` | nickel-bearing feeds and mass reagents | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received mass and assay or concentration separately; use dry mass or active-substance mass only through a documented calculation from collected fields. |
| `gas_volume_basis` | oxygen, hydrogen, and natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume with reference temperature, reference pressure, dry/wet basis, and composition; do not compare volumes reported at different reference conditions without conversion. |
| `electricity_energy_basis` | alternating current | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered kWh record and convert to MJ using 1 kWh = 3.6 MJ; declare voltage level, grid or on-site source, and geography. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Nickel-bearing intermediate received at the refinery gate, identified as one concrete flow such as nickel matte or nickel monoxide, with supplier, origin, mass, nickel assay, moisture, and delivery state recorded |
| starting_condition_role | Upstream cut-in point for the foreground refinery; purchased-intermediate burdens remain in a linked upstream dataset |
| product_classification_scope | Unwrought nickel metal only; intermediate nickel products, ferro-nickel, chemicals, powders and flakes, and semi-finished nickel products remain outside the reference-product scope |
| recursive_input_rule | Any purchased unwrought nickel returned as recycle or blending feed is recorded as its own input with a separate upstream dataset; it is not recursively recreated using this same foreground process |
| upstream_dataset_requirement | Each nickel-bearing feed, purchased reagent, fuel, electricity supply, and water supply crossing the foreground boundary requires a geographically and technologically qualified upstream dataset or an explicit data gap |
| disclosure | Declare refinery route, included unit operations, feed identity and grade, treatment of internal recycling, direct-emission monitoring boundary, co-products and wastes, packaging treatment, and all excluded on-site operations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_refinery_gate` | foreground refinery boundary | Include purification, metal recovery, route-specific forming or briquetting, off-gas treatment, direct water treatment, internal recycling, and saleable-product weighing when operated by the reporting refinery; exclude upstream mining and intermediate production unless they are physically integrated and separately disclosed. | `eu-jrc-nfm-bref-2017` |
| `sb_route_disclosure` | route-dependent operations | Apply each conditional inventory row only when the declared technology uses that exchange; do not average electrowinning and hydrogen-reduction routes without reporting route shares and data coverage. Carbonyl refining is outside the present route inventory. | `eu-jrc-nfm-bref-2017` |
| `sb_direct_releases` | direct emissions and wastes | Add one atomic row for every measured or permitted direct substance emission and every concrete waste stream generated by the included refinery operations; do not replace them with an umbrella emissions or residues row. | `eu-jrc-nfm-bref-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pr_nickel_refining` | Nickel intermediate purification, metal recovery, and unwrought-product finishing | `required` | Always; individual flow cards are route-conditional where stated | Foreground refinery production | 1,000 kg dry net unwrought nickel output |

### Process: Nickel intermediate purification, metal recovery, and unwrought-product finishing (`pr_nickel_refining`)

#### Inputs

##### Product flows

###### Nickel matte feed (`in_nickel_matte`)

Record when nickel matte crosses the refinery boundary for leaching and purification. Keep supplier, origin, nickel assay, moisture, and other payable-metal assays with the foreground record.

- Selected flow: Nickel matte `858f8544-ed53-473b-8bfa-734455a25f3c`
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass of nickel matte consumed during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel monoxide feed (`in_nickel_monoxide`)

Record only when nickel monoxide is the declared refinery feed for a reduction route. Keep purity, particle or briquette state, moisture, origin, and supplier dataset separate from the quantity.

- Selected flow: Nickel monoxide `3e78d4a3-6ff2-4726-b43c-d761ff8624b0`
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass of nickel monoxide consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output for the applicable route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water (`in_process_water`)

Record process water that crosses the foreground boundary for leaching, washing, scrubbing, cooling makeup, or solution preparation. Do not net off recycled internal water; report internal recycling separately in process notes.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or balance-derived process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_input`
- Sources: `eu-jrc-nfm-bref-2017`

###### Industrial oxygen (`in_industrial_oxygen`)

Record only when industrial oxygen is supplied to leaching, oxidation, or another included refinery operation. Keep purity and gas-volume reference conditions with the meter record.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered standardised volume of industrial oxygen consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output for the applicable route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sodium hydroxide (`in_sodium_hydroxide`)

Record only when sodium hydroxide is purchased for neutralisation or impurity precipitation. Record delivered solution mass and concentration separately and calculate pure NaOH-equivalent mass without replacing the collected record.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered product mass with solution concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output for the applicable purification route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Alternating current (`in_alternating_current`)

Record refinery electrical energy at the facility meter boundary. Disclose voltage, grid or on-site generation source, geography, and whether auxiliary and abatement loads are included.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity consumption converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_input`
- Sources: `eu-jrc-nfm-bref-2017`

###### Hydrogen gas (`in_hydrogen`)

Record only when molecular hydrogen is consumed to reduce purified nickel solution or nickel oxide. Record purity, production or supply route, and volume reference conditions.

- Selected flow: Hydrogen gas
- Flow property / unit: Volume / m3
- Amount rule: metered standardised volume of hydrogen consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output for the hydrogen-reduction route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `eu-jrc-nfm-bref-2017`

###### Natural gas in the gaseous state (`in_natural_gas`)

Record only when gaseous natural gas is consumed as refinery fuel within an included operation. Disclose composition, supply geography, meter reference conditions, and the consuming operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered standardised volume of gaseous natural gas consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output for the applicable route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

No generic waste row is permitted. Add separate cards for each measured filter cake, gypsum-bearing residue, dust, sludge, spent electrolyte, or other concrete waste that crosses the selected site boundary, with route applicability and treatment destination declared.

##### Elementary flows

No elementary input is prescribed generically. Add each directly withdrawn resource as one substance- and compartment-specific row when it crosses the selected site boundary.

#### Outputs

##### Product flows

###### Saleable unwrought nickel (`out_unwrought_nickel`)

Record the dry net mass of conforming unwrought nickel leaving the refinery. Keep each form, purity or alloy grade, and nonconforming output separately traceable before aggregation to the reference product.

- Selected flow: Unwrought nickel
- Flow property / unit: Mass / kg
- Amount rule: measured dry net saleable-product mass; normalized reference amount equals 1,000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry net unwrought nickel output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `src_unsd_cpc_3_0_2025`; `eu-jrc-nfm-bref-2017`

##### Waste flows

No umbrella waste output is defined. Concrete route-specific wastes must be added as atomic rows under the system-boundary rule `sb_direct_releases`.

##### Elementary flows

###### Fossil carbon dioxide to air (`out_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide released from included on-site combustion. Exclude upstream electricity emissions and avoid double counting carbon already represented in measured stack totals.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or fuel-carbon-balance result for included direct sources
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry net unwrought nickel output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_co2`
- Sources: `eu-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | jointly operated refinery units | Subdivide operations and use direct meters, assays, and mass balances before applying allocation; retain route-specific treatment and abatement loads with the route that causes them. | `eu-jrc-nfm-bref-2017` |
| `al_recovered_metals` | copper, cobalt, precious-metal, or other recovered co-products | Where subdivision cannot separate a recovered co-product, apply one documented allocation method consistently to inputs, direct emissions, and wastes; report pre-allocation quantities and sensitivity to an alternative physical relation. | `eu-jrc-nfm-bref-2017` |
| `al_internal_recycling` | internal electrolyte, chlorine, acid, water, dust, and nickel-bearing recycle | Do not create upstream credits for internal closed-loop reuse; record only net boundary inputs and outputs while retaining gross internal circulation needed for process control. | `eu-jrc-nfm-bref-2017` |
| `al_external_recycling` | externally supplied recycled nickel and exported recyclable residues | Record external recycled feed and exported recyclable material as separate flows; disclose the selected recycling allocation or substitution convention and do not mix conventions within one dataset. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `pr_nickel_refining` | nickel-bearing feed and mass reagent | weighbridge, batch sheet, tank receipt, invoice, assay | flow identity; supplier; lot; gross and tare mass; moisture; concentration or assay; date; route | reconcile receipts and process issue records to stock change | kg plus mass fraction | per receipt or batch; aggregate monthly | at least one representative 12-month period | all included refinery units | opening stock + receipts - closing stock - documented transfers, then normalize by conforming output | calibrated scales; assay certificates; stock reconciliation; exception log |
| `cp_water_input` | `pr_nickel_refining` | process water | meter and water balance | meter id; opening and closing reading; source; density basis if mass is converted; recycled-water volume; date | read boundary supply meters and reconcile against major sub-meters | kg | at least monthly | same period as product output | all included refinery units | sum external make-up water without subtracting internal recycle, then normalize | meter calibration; water-balance closure; missing-data log |
| `cp_process_gases` | `pr_nickel_refining` | route-specific process gas | custody-transfer or process meter | gas identity; purity or composition; meter reading; temperature; pressure; wet/dry basis; route; date | standardise volume to the declared reference conditions | m3 | continuous or per delivery; aggregate monthly | same period as applicable route output | supplying meter to each included route | sum standardised make-up volume and normalize to route output | meter calibration; gas certificate; conversion worksheet |
| `cp_electricity_input` | `pr_nickel_refining` | alternating current | revenue and sub-meter records | meter id; kWh; voltage; supplier or generator; included units; date | reconcile facility meter with route and abatement sub-meters | kWh and MJ | continuous meter; aggregate monthly | same period as product output | all included production and direct-treatment units | sum kWh, multiply by 3.6 MJ/kWh, and normalize | meter calibration; invoice reconciliation; sub-meter coverage |
| `cp_product_output` | `pr_nickel_refining` | saleable unwrought nickel | product scale and quality-release record | product form; purity or alloy grade; gross and tare mass; moisture; disposition; date | sum only conforming released product and retain nonconforming material separately | kg | per lot; aggregate monthly | same period as inputs | refinery gate | sum dry net conforming mass by product variant before normalization | calibrated product scale; laboratory release certificate; lot reconciliation |
| `cp_direct_co2` | `pr_nickel_refining` | direct fossil carbon dioxide | stack monitor or fuel-carbon balance | source id; measured CO2 or fuel quantity; carbon content; oxidation factor; biogenic fraction; operating period | prefer measured stack totals; otherwise calculate from site fuel records without including upstream emissions | kg CO2 | continuous or per fuel batch; aggregate monthly | same period as product output | direct sources within the foreground boundary | sum non-overlapping direct sources and normalize | monitor QA records or fuel certificates; calculation audit; overlap check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory amount | normalized amount = reporting-period amount / dry net conforming unwrought nickel output × 1,000 kg | reporting-period exchange amount; `cp_product_output` dry net output | amount per 1,000 kg reference product |  |
| `calc_electricity_conversion` | `in_alternating_current` | MJ = metered kWh × 3.6 | reconciled kWh from `cp_electricity_input` | electricity input in MJ |  |
| `calc_active_reagent` | solution reagents | pure-substance equivalent = delivered solution mass × measured mass fraction; retain delivered product mass as the exchange amount unless the selected flow identity is pure substance | delivered mass; certificate or measured concentration | auditable active-substance equivalent |  |
| `calc_nickel_balance` | nickel-bearing inputs and outputs | reconcile nickel content in feeds to nickel in products, co-products, wastes, emissions, and stock change using contemporaneous assays; investigate rather than allocate unexplained imbalance | masses; nickel assays; inventory changes | nickel mass-balance closure and exception record | `eu-jrc-nfm-bref-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all exchanges | Use one concrete chemical or physical flow per row and preserve Tiangong UUID identity where confirmed; keep unresolved identities explicit. | direct-read UUID audit; lot and supplier records |
| `dq_route` | process coverage | Identify every operating refinery route and quantify its share of reference output; do not use this dataset for an unrepresented route. | process map; route production records |
| `dq_temporal` | all foreground records | Use one common representative 12-month period or document and reconcile any shorter or offset coverage. | meter dates; batch dates; production calendar |
| `dq_completeness` | mass, energy, water, gas, waste, and direct-emission records | Reconcile facility totals to included units, identify missing meters and estimated intervals, and disclose excluded operations. | balance checks; meter coverage map; missing-data log |
| `dq_assay` | nickel-bearing materials | Use contemporaneous representative assays for nickel, moisture, and allocation-relevant co-metals; disclose sampling and laboratory method. | certificates of analysis; sampling plan; laboratory QA |
| `dq_geography_technology` | upstream links | Match upstream datasets to supplier geography, production technology, product state, and delivery boundary or disclose each mismatch. | supplier dataset metadata; representativeness review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_output` | reference flow | Confirm that the output equals 1,000 kg dry net conforming unwrought nickel and that purity or alloy grade and physical form are declared. | `src_unsd_cpc_3_0_2025` |
| `val_product_boundary` | product identity | Reject datasets whose reference product is nickel matte, nickel oxide sinter, ferro-nickel, a nickel chemical, nickel powder or flake, scrap, or a semi-finished nickel product. | `src_unsd_cpc_3_0_2025` |
| `val_route_rows` | conditional inventory | Confirm that each route-conditional input is either supported by a foreground record or explicitly not applicable to the declared route; never substitute an umbrella utility, gas, chemical, waste, or emission label. | `eu-jrc-nfm-bref-2017` |
| `val_units` | measurement | Verify dry/net mass treatment, gas reference conditions, and kWh-to-MJ conversion before normalization. |  |
| `val_balance` | nickel mass balance | Require an auditable nickel balance across feed, product, co-products, wastes, emissions, and stock change; flag unexplained imbalance for review. | `eu-jrc-nfm-bref-2017` |
| `val_allocation` | co-products and recycling | Confirm subdivision was attempted first and that any allocation or recycling convention is disclosed and applied consistently. | `eu-jrc-nfm-bref-2017` |
| `val_uuid_gaps` | unresolved identities | Treat the unresolved reference product and hydrogen UUIDs as review findings; do not substitute a near match or proxy. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground refinery production dataset for one declared unwrought nickel product and route mix |
| downstream_use | `secondary_dataset`; `background_dataset` after review and resolution of publication-blocking identity and evidence gaps |
| allowed_use | Route-, product-, geography-, and period-matched LCA models requiring refinery-gate unwrought nickel |
| excluded_use | Nickel mining or concentrate production; nickel-metallurgy intermediates; ferro-nickel; nickel chemicals; powder and flakes; semi-finished products; unrepresented refinery routes; global-average proxy claims without representativeness evidence |
| required_metadata | PCR id; product form; nickel purity or alloy grade; refinery route and shares; feed identity and assay; site and geography; reporting period; energy and water supply; co-product and recycling method; packaging treatment; unresolved UUIDs |
| required_quality_disclosure | Meter and assay coverage; mass-balance closure; missing data and estimates; temporal, geographic, and technological representativeness; direct-emission monitoring; allocation sensitivity; upstream dataset mismatches |
| update_trigger | Material route, feed, product-grade, energy-source, abatement, allocation, site-boundary, or representativeness change; resolution of an unresolved UUID; or replacement of unresolved range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_cpc_3_0_2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure and Explanatory Notes, updated 30 June 2025. Structure: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; explanatory notes: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official product identity; distinction from nickel-metallurgy intermediates and nickel powders/flakes |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, EUR 28648 EN, JRC107041, DOI 10.2760/8224. https://publications.jrc.ec.europa.eu/repository/handle/JRC107041 | Refined-nickel product forms; refinery routes; process decomposition; route-specific inputs; waste and direct-emission completeness rules |
| `cn-sat-export-refund-2003` | `official_guidance` | Ministry of Finance and State Taxation Administration, Notice on Adjusting Export Tax Refund Rates, attachment 4, customs code 7502 "未锻轧镍", 13 October 2003. https://www.chinatax.gov.cn/n810341/n810765/n812198/n813051/c1205357/content.html | Professional Chinese product terminology for customs code 7502 |
