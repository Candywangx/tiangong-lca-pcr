---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.brown-coal-briquettes-and-similar-solid-fuels-manufactured-from-brown-coal
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Brown coal briquettes and similar solid fuels manufactured from brown coal

## 1. Scope and Applicability

This PCR covers non-carbonized manufactured solid fuels from lignite or sub-bituminous coal, including briquettes with or without binder and dried fines and dust. Hard-coal fuels, peat briquettes, biomass briquettes and carbonized coke are excluded. Raw-coal mining is upstream; finished moisture, shaping and packaging state determine comparability. See `un-cpc3-brown-coal-fuels` for the official product boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.brown-coal-briquettes-and-similar-solid-fuels-manufactured-from-brown-coal |
| classification_refs | CPC 3.0:11040 |
| covered_products | Brown-coal briquettes; similar non-carbonized manufactured brown-coal solid fuels; dried fines and dust |
| excluded_products | Unmanufactured raw coal; hard-coal fuels; peat and biomass briquettes; coke |
| representative_product | Binder-free lignite briquette |
| production_route | Feed preparation, drying where needed, pressing or milling, cooling, release and applicable packaging |
| market_state | Saleable finished fuel at factory gate, at measured as-received moisture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide solid fuel for later combustion; does not represent delivered useful heat |
| How much | 1 kg saleable finished fuel |
| How well | Declare as-received moisture, ash, net calorific value, feed coal rank, binder formulation and product form |
| How long or cycle | One declared production accounting period covering normal operation and start/stop losses; use stage modelled separately |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Brown coal briquettes and similar solid fuels manufactured from brown coal `5a782c79-14b1-4a0a-9e61-09693c97db53` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Feed rank and origin; moisture and ash with analysis basis; net calorific value with analysis basis; binder identity and content; size and shape; heat source and carrier; packaging; geography; technology; accounting period |

Required qualifiers must be declared in data-package metadata; missing qualifiers make the reference flow incomplete. The 1 kg quantity is net fuel mass including measured moisture, excluding packaging.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference_product | Mass | kg | Use calibrated scales and release records to obtain net finished-fuel mass for the same period under cp_mass. Do not use packaged gross mass or dry mass as denominator. |
| `energy_units` | prep_electricity; drying_electricity; finish_electricity; pack_electricity; drying_heat | Energy | MJ | Convert electricity recorded in kWh using 1 kWh = 3.6 MJ; report heat as net delivered MJ. Do not substitute fuel calorific value for drying heat demand. |

The electricity conversion and declared calorific basis use `un-ires-energy`, sections 4.23 and 4.33–4.37.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Mined lignite or sub-bituminous coal entering refining site; declare moisture and prior preparation |
| starting_condition_role | Foreground input handoff, not burden-free resource |
| product_classification_scope | Manufactured brown-coal solid fuels; excludes mining, carbonization, peat and hard-coal fuels |
| recursive_input_rule | Record purchased same-category fuel as a separate input with upstream dataset; internal fines recycle stays in internal material ledger without a second external feed input |
| upstream_dataset_requirement | Link coal mining and inbound transport, heat/electricity supply, binder and packaging production, and waste treatment datasets; onsite utility generation requires a separate upstream submodel and must not be burden-free |
| disclosure | Declare handoffs, recycle, upstream coverage, utility losses, packaging, emissions and all exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground | Include feed reception, preparation, drying, mechanical shaping or milling, cooling, release and applicable packaging. | `leag-refining-route` |
| `boundary_upstream` | utility_supply | Represent utility generation in linked supply submodels, onsite or offsite. Account for fuels, combustion emissions, ash, auxiliary water and losses there; avoid double counting with utility inputs. |  |
| `boundary_complete` | all exchanges | The inventory is a starting set of common exchanges. Add atomic exchanges and protocols for every additional binder, cooling make-up water, lubricant, packaging component, purchased recycle, condensate waste stream and direct emission actually present; absence from this table is not a cut-off. |  |
| `boundary_use` | downstream | Outbound delivery, final combustion and end-user ash treatment are outside this foreground manufacturing package; downstream models must include them using finished composition and combustion technology. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | Feed preparation | `required` |  | Foreground manufacturing | 1 kg reference flow |
| drying | Drying and emission control | `conditional` | When moisture removal or associated emission-control equipment operates | Foreground manufacturing | 1 kg reference flow |
| finishing | Finishing, cooling and release | `required` |  | Foreground manufacturing | 1 kg reference flow |
| packaging | Packaging | `conditional` | When packaged product is supplied | Foreground manufacturing | 1 kg reference flow |

### Process: Feed preparation (`preparation`)

#### Inputs

##### Product flows

###### lignite (`lignite_feed`)

When lignite is used as feedstock.

- Selected flow: lignite `db766ffc-c44d-4ecf-b906-98d90565dc01`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-cpc3-brown-coal-fuels`

###### Sub-bituminous coal (`subbit_feed`)

When sub-bituminous coal is used as feedstock; record separately from lignite.

- Selected flow: Sub-bituminous coal `a3573912-328b-402e-8f64-f39e34a6a00c`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-cpc3-brown-coal-fuels`

###### Industrial alternating-current electricity (`prep_electricity`)

Meter preparation and conveying electricity; record supply voltage, country and supplier.

- Selected flow: Industrial alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

### Process: Drying and emission control (`drying`)

#### Inputs

##### Product flows

###### heat (`drying_heat`)

Include when thermal drying operates. Measure net heat delivered; record carrier, steam conditions and condensate return if applicable.

- Selected flow: heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources:

###### Industrial alternating-current electricity (`drying_electricity`)

Include dryer drives, fans and dust-control electricity when drying operates.

- Selected flow: Industrial alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Elementary flows

###### water vapour (`dryer_vapor`)

Include only evaporated water discharged to air; recovered condensate is not an air emission. Reconcile feed and product moisture and actual vent records.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Particulate matter, particle size unspecified (`plant_dust`)

Record total refining-line particulate discharge after controls, including handling and pressing; assign it here once. Use this identity only when size fraction is unspecified.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

### Process: Finishing, cooling and release (`finishing`)

#### Inputs

##### Product flows

###### Coal-tar pitch binder (`pitch_binder`)

Include only if formulation contains coal-tar pitch. This is a conditional exchange, not a default recipe.

- Selected flow: Coal-tar pitch binder
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-cpc3-brown-coal-fuels`

###### Industrial alternating-current electricity (`finish_electricity`)

Meter pressing or milling, cooling and release handling; exclude already recorded preparation and drying electricity.

- Selected flow: Industrial alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Brown coal briquettes and similar solid fuels manufactured from brown coal (`reference_product`)

Net saleable finished fuel at the factory gate, with moisture and market form declared. This is one declared formulation and physical market form per dataset; do not pool unlike finished fuels in one exchange.

- Selected flow: Manufactured brown-coal solid fuel `5a782c79-14b1-4a0a-9e61-09693c97db53`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc3-brown-coal-fuels`

##### Waste flows

###### Discarded lignite briquette fragments (`lignite_reject`)

Include only lignite-derived fragments leaving for waste treatment. Internally recycled fines are not external waste; sub-bituminous rejects require their own concrete exchange if present.

- Selected flow: Discarded lignite briquette fragments
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Packaging (`packaging`)

#### Inputs

##### Product flows

###### Polyethylene packaging film (`pe_film`)

Include when polyethylene film packaging is supplied with the fuel; bulk product has no film input.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Industrial alternating-current electricity (`pack_electricity`)

Include packaging-line electricity only when packaging operates.

- Selected flow: Industrial alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Collect attributable period exchange and normalize by net finished-product mass for the same period using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared_operations | Separate burdens by metered operation, production line or batch first; internal recycle is not a co-product. | `ghg-product-standard` |
| `allocation_shared` | shared_operations | Collect attributable burdens and physical driver records under cp_allocation; shared burdens without demonstrated physical causality must not be arbitrarily allocated by product mass. Disclose alternative allocation and sensitivity and require methodology review. | `ghg-product-standard` |
| `allocation_waste` | lignite_reject | Link actual waste treatment without automatic substitution credit for waste or internal recycle. Retain reject and start/stop burdens in the released-product denominator. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Primary-data collection and quality assessment follow `ghg-product-standard`, chapter 8; allocation subdivision and physical relationships follow chapter 9. These general GHG inventory principles support this foreground LCA package; they do not establish full Standard conformity. The site-specific weighing, metering, moisture ledger and sampling protocols below implement those principles and must be documented for the actual installation. Energy units and fuel-specific calorific basis follow `un-ires-energy`, chapter IV; no default fuel calorific value or process intensity is adopted.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | finishing | reference_product | foreground production records | batch; packaging tare; finished net mass; moisture; ash; net calorific value; form; release record | Calibrated weighing; representative same-batch sampling with analytical method and basis recorded; reconcile release and inventory | kg | per batch and monthly reconciliation | complete declared accounting period | same refining site and formulation | per 1 kg reference flow | calibration; raw ledger; boundary reconciliation; gaps and uncertainty |
| cp_material | preparation; finishing | lignite_feed; subbit_feed; pitch_binder | foreground production records | batch; material identity; coal rank; receipts; moisture; stock changes; formulation | Reconcile weighing, delivery and formulation records for net external input; track internal recycle separately | kg | per batch and monthly reconciliation | complete declared accounting period | same refining site and formulation | per 1 kg reference flow | calibration; raw ledger; boundary reconciliation; gaps and uncertainty |
| cp_energy | preparation; drying; finishing; packaging | electricity | foreground production records | meter readings; meter boundary; voltage; supplier; country; operation; accounting period | Read submeters and reconcile main meter and invoices; prevent repeated shared burdens; retain start/stop electricity | kWh | per batch and monthly reconciliation | complete declared accounting period | same refining site and formulation | per 1 kg reference flow | calibration; raw ledger; boundary reconciliation; gaps and uncertainty |
| cp_heat | drying | drying_heat | foreground production records | heat meter; steam and returned condensate flows; temperature; pressure; enthalpy; supply losses and origin | Use calibrated heat meter; for steam reconcile measured flows and inlet/return enthalpies with documented property method; no default efficiency | MJ | per batch and monthly reconciliation | complete declared accounting period | same refining site and formulation | per 1 kg reference flow | calibration; raw ledger; boundary reconciliation; gaps and uncertainty |
| cp_emissions | drying | dryer_vapor; plant_dust | foreground production records | vent flow; particulate concentration; operating hours; moisture balance; condensate fate; controls | Integrate monitored discharge with operating records; reconcile evaporated water with closed moisture ledger separating recovery and venting; disclose estimates and uncertainty for gaps | kg | per batch and monthly reconciliation | complete declared accounting period | same refining site and formulation | per 1 kg reference flow | calibration; raw ledger; boundary reconciliation; gaps and uncertainty |
| cp_waste | finishing | lignite_reject | foreground production records | waste composition; net mass; fate; recycle quantity; transfer record; coal rank | Weigh lignite fragments sent for external treatment and reconcile transfers and internal recycle; do not mix ash into this flow | kg | per batch and monthly reconciliation | complete declared accounting period | same refining site and formulation | per 1 kg reference flow | calibration; raw ledger; boundary reconciliation; gaps and uncertainty |
| cp_packaging | packaging | pe_film | foreground production records | film resin; net use; loss; product batch; packaging specification | Reconcile purchase, issue and stock ledgers for polyethylene film; record mass delivered with fuel and separate film-trim waste exchange | kg | per batch and monthly reconciliation | complete declared accounting period | same refining site and formulation | per 1 kg reference flow | calibration; raw ledger; boundary reconciliation; gaps and uncertainty |
| cp_allocation | all processes | shared_operations | foreground production records | shared burden; meters; batch; physical driver; assigned shares; co-products; sensitivity | Submeter first; retain engineering causality and reconcile all assigned shares; refer unsupported allocation for methodology review | original record unit | per batch and monthly reconciliation | complete declared accounting period | same refining site and formulation | per 1 kg reference flow | calibration; raw ledger; boundary reconciliation; gaps and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_records` | all inventory rows | Divide each attributable period exchange by released net fuel mass in the same period, retaining its numerator unit. Reference product itself is 1 kg. | cp_mass; cp_material; cp_energy; cp_heat; cp_emissions; cp_waste; cp_packaging; cp_allocation | exchange per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_state` | reference_product | Moisture, formulation, rank and calorific value must match inventory batches; do not mix dry and as-received bases. | cp_mass; cp_material |
| `quality_complete` | all inventory rows | Record period, calibration, start/stop, stocks and recycle; add every extra exchange present; missing data is not zero. | collection protocols and raw ledgers |
| `quality_range` | all inventory rows | External empirical ranges require at least two independent original-verified boundary-compatible sources; current rules require collection instead of defaults. | source applicability and independence record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product | Check 1 kg net fuel reference quantity, complete qualifiers and consistency with release batches and analytical basis. |  |
| `validate_denominator` | all inventory rows | All exchanges must use the same finished-product denominator; reconcile period, electricity conversion and heat handoff without duplicating recycle or utility-generation burdens. |  |
| `validate_balance` | material_and_water | Reconcile dry-matter and moisture balances with packaging, waste, emissions, stock and recycle ledgers; investigate discrepancies beyond declared measurement uncertainty without an unverified default tolerance. |  |
| `validate_identity` | all inventory rows | Do not substitute proxies for unresolved UUIDs; confirm actual geography, voltage, carrier, product state and emission compartment before dataset publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Fuel supply modelling with matching form, moisture and route, linked upstream and downstream |
| excluded_use | Direct useful-heat equivalence; proxy for hard coal, peat, biomass or coke; unconditional full-life-cycle comparison |
| required_metadata | Required qualifiers; metering boundaries; period; recycle; co-products; upstream/downstream links |
| required_quality_disclosure | UUID and range gaps; meter and assay uncertainty; allocation; missing data; coverage |
| update_trigger | Update when feed, formulation, moisture, utility supply, technology or packaging changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-brown-coal-fuels` | `official_guidance` | [Central Product Classification (CPC) Version 3.0 Explanatory Notes; UNSD, 30 June 2025, PDF p.56](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf); verified 2026-10-01 | Product boundary, feed ranks and binder/no-binder variants |
| `leag-refining-route` | `literature` | [Heimisch, heizstark, effizient: Veredelte Brennstoffe von LEAG](https://www.leag.de/de/standorte-technologien/veredlung/); retrieved 2026-10-01 | Preparation, drying, forming/milling and bulk/packaged state; German producer case, no default intensity |
| `ghg-product-standard` | `official_guidance` | [Product Life Cycle Accounting and Reporting Standard](https://docs.wbcsd.org/2011/09/Product_Life_Cycle_Accounting_Reporting_Standard.pdf); WRI/WBCSD, 2011, chapters 8–9, printed pp.47–48 and 63; verified 2026-10-01 | Primary data, quality indicators, subdivision and physical allocation; general principles only, no default factors |
| `un-ires-energy` | `official_guidance` | [International Recommendations for Energy Statistics](https://unstats.un.org/unsd/energystats/methodology/documents/IRES-web.pdf); United Nations, 2018, chapter IV, printed pp.44 and 46; verified 2026-10-01 | Electricity conversion, net/gross calorific basis and fuel-specific measurements; no manufacturing range |
