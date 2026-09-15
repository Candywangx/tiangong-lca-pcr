---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tungsten-molybdenum-tantalum-magnesium-cobalt-cadmium-titanium-zirconium-beryllium-gall-f36ccdf2
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Unwrought tungsten and other specified non-ferrous metals, their powders, and cobalt-metallurgy intermediates

## 1. Scope and Applicability

This PCR covers gate-to-gate production of the CPC 41601 family: unwrought tungsten, molybdenum, tantalum, magnesium, cobalt, cadmium, titanium, zirconium, beryllium, gallium, hafnium, indium, niobium, rhenium, thallium, germanium and vanadium; powders of those metals except magnesium powder; and cobalt mattes and other cobalt-metallurgy intermediates. It applies to primary, secondary, hydrometallurgical, pyrometallurgical, electrolytic and chemical routes only when the exact product, feed state and route are declared.

The category is chemically and technologically heterogeneous. The detailed inventory below is the audited representative route for tungsten powder from tungsten concentrate. A dataset for another covered product shall replace the representative process map with its actual route and atomic exchanges; it shall not reuse tungsten flows, yields or emissions as proxies. Wrought products and articles, magnesium powder, cermets, fabricated products, mining and beneficiation before the received concentrate, capital goods, employee travel and downstream use or end-of-life are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tungsten-molybdenum-tantalum-magnesium-cobalt-cadmium-titanium-zirconium-beryllium-gall-f36ccdf2 |
| classification_refs | CPC 3.0: 41601 (exact classification context; no accepted mapping is asserted by this PCR) |
| covered_products | Declared unwrought metals and non-magnesium metal powders listed in scope; cobalt mattes and other declared cobalt-metallurgy intermediates |
| excluded_products | Wrought products and articles; magnesium powder; cermets; metal waste and scrap sold as waste; products outside the declared chemical identity or market state |
| representative_product | Tungsten Powder |
| production_route | Representative route: tungsten-concentrate hydrometallurgy to tungsten trioxide followed by hydrogen reduction; other covered products require their own declared route-specific process map |
| market_state | Dry saleable powder at the producing facility gate; purity, particle-size distribution, moisture and oxygen content declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of saleable tungsten powder meeting the declared product specification |
| How much | 1 kg dry tungsten powder |
| How well | At declared tungsten purity, particle-size distribution, moisture, oxygen content and lot acceptance status |
| How long or cycle | One production lot represented over the declared reporting period |
| reference_flow_link | `tungsten_powder_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg dry saleable product |
| Reference product flow | Tungsten Powder `50fa22a2-c21a-49ec-a088-53d2c4656c86` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact chemical/product identity; primary or secondary feed status; production route; dry or as-received basis; purity and assay method; particle-size distribution; moisture; oxygen content; facility geography; technology; reporting period; allocation method |

When constructing a foreground data package, all required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A non-tungsten covered product shall use its exact product flow and preserve the 1 kg dry-product mass reference; the tungsten UUID shall not be used as a proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report saleable product on a dry-mass basis. When weighed as received, retain gross mass and measured moisture and calculate dry mass as gross mass multiplied by one minus the moisture mass fraction. |
| `gas_reference_conditions` | natural gas, industrial oxygen and unresolved hydrogen rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record gas volume with temperature, absolute pressure and dry/wet basis. Convert all gas records to the single reference condition declared by the dataset; do not combine volumes at different conditions. |
| `electricity_energy_conversion` | purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ. Declare voltage level, grid geography, on-site generation and loss boundary. |
| `material_assay_basis` | tungsten concentrate, tungsten trioxide, residue and powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain both total material mass and measured tungsten mass fraction. Never substitute contained-tungsten mass for total flow mass without an explicit conversion record. |

## 5. System Boundary

The foreground boundary starts when tungsten concentrate or another explicitly declared metallurgical feed is received at the conversion facility. For the representative route it includes alkaline digestion or leaching, solid-liquid separation, purification and precipitation/calcination to tungsten trioxide, hydrogen reduction, powder finishing, on-site air-emission control and wastewater or residue generation up to dry saleable tungsten powder at the facility gate. Upstream production and delivery of concentrate, electricity, fuels, gases, chemicals and water shall be represented by linked datasets. Treatment after a waste crosses the foreground boundary is linked as downstream treatment and is not silently absorbed.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received metallurgical feed at facility gate, with exact material identity, primary/secondary status, origin, total mass, moisture, target-metal grade and impurity profile declared |
| starting_condition_role | Upstream product input to the foreground conversion route |
| product_classification_scope | CPC 41601 context restricted to the exact covered product and market state declared by the dataset |
| recursive_input_rule | A same-category product used as feed is recorded as a separate product input with its own upstream dataset; do not recursively include its production in the current foreground process or net it against output |
| upstream_dataset_requirement | Link geographically and technologically representative datasets for each received feed, electricity supply, fuel, gas, chemical and water input |
| disclosure | Disclose product identity, route, feed origin and grade, primary/secondary share, process ownership, cut-offs, recycled-content accounting, allocation, abatement, wastewater and residue destinations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_specificity` | every foreground dataset | Include only unit operations actually used for the declared product and route, and disclose excluded route stages; do not import tungsten-route exchanges into another covered metal. | `jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | purchased feeds and utilities | Represent production and delivery of each purchased feed, electricity, fuel, industrial gas, chemical and water input with an upstream dataset. | `jrc-nfm-bref-2017` |
| `boundary_direct_releases` | foreground emissions and wastes | Record direct air releases, waterborne releases and each waste leaving the controlled process as separate atomic exchanges before downstream treatment. | `jrc-nfm-bref-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tungsten_hydrometallurgy` | Tungsten concentrate digestion, purification and oxide preparation | conditional | Required when tungsten powder is produced through an alkaline hydrometallurgical route from tungsten concentrate | foreground conversion and intermediate production | kg dry tungsten trioxide transferred to reduction |
| `tungsten_powder_reduction` | Hydrogen reduction and tungsten powder finishing | conditional | Required when tungsten powder is produced by hydrogen reduction of tungsten trioxide | foreground reduction and final product production | kg dry saleable tungsten powder |
| `other_covered_metal_route` | Declared route for another covered CPC 41601 product | conditional | Required in place of the representative tungsten route when the reference product is not tungsten powder | route-specific foreground production | 1 kg dry declared saleable product |

### Process: Tungsten concentrate digestion, purification and oxide preparation (`tungsten_hydrometallurgy`)

#### Inputs

##### Product flows

###### Tungsten concentrate feed (`tungsten_concentrate_input`)

Tungsten concentrate received from beneficiation crosses the facility gate as the representative metal-bearing feed.

- Selected flow: Tungsten concentrate `9d78c8bc-0a1c-4f89-9c86-efc516cd7e76`
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass corrected to dry mass, with tungsten grade retained separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry tungsten trioxide transferred to reduction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydromet_batch`
- Sources: `jrc-nfm-bref-2017`

###### Process water (`hydromet_process_water`)

Water supplied for digestion, washing and solution preparation is measured as one product input; recirculated internal water is not double-counted.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered net process-water input crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry tungsten trioxide transferred to reduction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydromet_batch`
- Sources: `jrc-nfm-bref-2017`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Sodium hydroxide used in alkaline digestion is recorded as delivered product mass; concentration and solution carrier water are retained.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued mass, with active NaOH concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry tungsten trioxide transferred to reduction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydromet_batch`
- Sources: `jrc-nfm-bref-2017`

###### Electricity for hydrometallurgy (`hydromet_electricity`)

Purchased electricity used by digestion, pumping, separation and purification equipment is separately submetered or allocated from a documented meter hierarchy.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electrical energy converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry tungsten trioxide transferred to reduction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydromet_batch`
- Sources: `jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tungsten trioxide intermediate (`tungsten_trioxide_output`)

Dry tungsten trioxide transferred to the reduction process is an internal product flow. Its UUID remains unresolved and it shall not be replaced with tungstic acid or ammonium paratungstate.

- Selected flow: Tungsten trioxide
- Flow property / unit: Mass / kg
- Amount rule: measured dry transfer mass reconciled with tungsten assay and batch balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry tungsten trioxide transferred to reduction
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydromet_batch`
- Sources: `jrc-nfm-bref-2017`

##### Waste flows

###### Tungsten-bearing leach residue (`tungsten_leach_residue`)

The wet solid separated after digestion or leaching is recorded as a distinct waste; moisture and residual tungsten content are retained.

- Selected flow: Tungsten-bearing leach residue
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with moisture and tungsten assay retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry tungsten trioxide transferred to reduction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydromet_batch`
- Sources: `jrc-nfm-bref-2017`

###### Tungsten-containing process wastewater (`tungsten_process_wastewater`)

Liquid wastewater discharged from washing, purification or abatement is recorded before off-site treatment; volume or density conversion and dissolved tungsten concentration are retained.

- Selected flow: Tungsten-containing process wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered volume converted to mass using measured density, or directly measured mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry tungsten trioxide transferred to reduction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydromet_batch`
- Sources: `jrc-nfm-bref-2017`

##### Elementary flows

### Process: Hydrogen reduction and tungsten powder finishing (`tungsten_powder_reduction`)

#### Inputs

##### Product flows

###### Tungsten trioxide feed (`tungsten_trioxide_input`)

The internal tungsten trioxide from hydrometallurgy enters the reduction furnace. It carries the same unresolved identity as the preceding process output.

- Selected flow: Tungsten trioxide
- Flow property / unit: Mass / kg
- Amount rule: measured dry furnace-charge mass reconciled to the transferred intermediate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry saleable tungsten powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reduction_batch`
- Sources: `jrc-nfm-bref-2017`

###### Industrial hydrogen reductant (`hydrogen_reductant`)

Elemental hydrogen supplied to reduce tungsten trioxide is recorded at the declared gas reference condition. No exact Tiangong product UUID was confirmed.

- Selected flow: Industrial hydrogen
- Flow property / unit: Volume / m3
- Amount rule: metered hydrogen supplied minus separately measured recovered hydrogen exported from the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry saleable tungsten powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reduction_batch`
- Sources: `jrc-nfm-bref-2017`

###### Electricity for reduction and finishing (`reduction_electricity`)

Purchased electricity used by reduction furnaces, gas circulation, cooling auxiliaries, milling, sieving and packing equipment is separately recorded.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electrical energy converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry saleable tungsten powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reduction_batch`
- Sources: `jrc-nfm-bref-2017`

###### Natural gas for furnace heat (`reduction_natural_gas`)

Gaseous natural gas is included only when combusted within the reduction or finishing boundary; it is not combined with hydrogen.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural gas at the declared reference condition; not applicable for an all-electric route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry saleable tungsten powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reduction_batch`
- Sources: `jrc-nfm-bref-2017`

###### Industrial oxygen for supported combustion (`combustion_oxygen`)

Industrial oxygen is included only when purchased oxygen supports on-site natural-gas combustion; purity and pressure are declared.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered oxygen at the declared reference condition; not applicable when ambient air alone supports combustion or no fuel is burned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry saleable tungsten powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reduction_batch`
- Sources: `jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable tungsten powder (`tungsten_powder_output`)

Dry saleable tungsten powder accepted against the declared lot specification is the reference output.

- Selected flow: Tungsten Powder `50fa22a2-c21a-49ec-a088-53d2c4656c86`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted lot mass corrected to dry mass; fixed to 1 kg after normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg dry saleable tungsten powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reduction_batch`
- Sources: `un-cpc-3-0-2025`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`fossil_co2_output`)

Direct fossil carbon dioxide is included only for natural gas combusted inside the foreground boundary; upstream electricity emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from metered natural gas and a verified site fuel-carbon balance; not applicable when no fossil fuel is combusted on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry saleable tungsten powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reduction_batch`
- Sources: `jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi-output foreground operations | Avoid allocation by subdividing independently metered unit operations and by preserving internal intermediate transfers. | `jrc-nfm-bref-2017` |
| `allocation_recovery_loop` | recycled process material returned within the same reporting system | Treat an internal recovery loop as an internal transfer; count only make-up input and net waste or product crossing the foreground boundary. |  |
| `allocation_joint_products` | jointly produced saleable metals or cobalt intermediates | If subdivision is not possible, apply a documented physical relation based on measured recoverable metal mass when it reflects causality; otherwise use economic allocation with the price period, currency and sensitivity disclosed. Do not credit a waste unless it leaves as a documented product with a market function. | `jrc-nfm-bref-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hydromet_batch` | `tungsten_hydrometallurgy` | each listed feed, utility, intermediate and waste exchange | batch ledger, weigh ticket, meter, laboratory assay and waste manifest | timestamp; batch_id; flow identity; supplier or destination; gross mass or meter reading; moisture; tungsten grade; concentration; meter start/end; density; unit | reconcile purchase/issue records and calibrated meters to batch production and laboratory assays | kg, m3, MJ, mass fraction | each batch with monthly reconciliation | at least 12 consecutive representative months or all batches for a shorter campaign | all foreground hydrometallurgical units under operational control | sum by atomic flow and normalize to dry tungsten trioxide transfer; document shared-meter allocation | meter calibration; weigh tickets; certificates of analysis; laboratory QA/QC; stock reconciliation; waste manifests |
| `cp_reduction_batch` | `tungsten_powder_reduction` | each listed feed, energy, gas, product and direct-emission exchange | furnace batch sheet, gas and electricity meter, product lot record and fuel-carbon record | timestamp; batch_id; flow identity; meter start/end; gas temperature and pressure; gross mass; moisture; product acceptance; carbon content; unit | reconcile furnace charges, gas and energy meters, accepted product lots and direct-emission calculation inputs | kg, m3, MJ, mass fraction | each furnace batch with monthly reconciliation | at least 12 consecutive representative months or all batches for a shorter campaign | all reduction and finishing units under operational control | sum by atomic flow and normalize to dry accepted powder; document shared-meter allocation and rejected lots | calibrated meters; batch sheets; product certificates; moisture and oxygen tests; fuel certificates; mass and carbon balance closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass` | concentrate, tungsten trioxide, residue and powder | dry mass = as-received mass × (1 − moisture mass fraction) | as-received mass; measured moisture fraction | kg dry material |  |
| `calc_flow_normalization` | every inventory row | normalized amount = reporting-period atomic-flow amount ÷ reporting-period dry accepted tungsten-powder mass | reconciled flow amount; dry accepted product mass | amount per kg reference flow |  |
| `calc_electricity_mj` | electricity records | MJ = metered kWh × 3.6 | metered kWh | MJ electricity |  |
| `calc_gas_reference_volume` | hydrogen, natural gas and oxygen records | convert measured gas volume to the dataset-declared temperature, absolute pressure and wet/dry basis and retain the conversion inputs | measured volume; temperature; absolute pressure; moisture basis; compressibility method | m3 at declared reference condition |  |
| `calc_direct_fossil_co2` | on-site natural-gas combustion | derive fossil CO2 from metered fuel and the verified site fuel-carbon balance; reconcile carbon in fuel, exported streams and unoxidized residues | natural-gas quantity; fuel carbon data; exported carbon; residual carbon | kg fossil CO2 | `jrc-nfm-bref-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all product inputs | Confirm exact chemical identity, market state, purity or grade, moisture basis, primary/secondary status and supplier or internal origin. | product specification; certificate of analysis; supplier declaration; Tiangong direct-read identity where UUID-bearing |
| `dq_route` | foreground process map | Declare every included unit operation and reconcile the process map to equipment, batch and meter records; a non-tungsten dataset must replace the representative route and flows. | process flow diagram; equipment list; batch routing; meter map |
| `dq_temporal` | all foreground records | Use one consistent reporting period and explain shutdowns, start-ups, maintenance and non-representative campaigns. | dated records; production calendar; exception log |
| `dq_completeness` | mass, tungsten and carbon balances | Report balance closure, missing-meter estimates and cut-offs; investigate material gaps that could hide residues, wastewater or emissions. | signed reconciliation; uncertainty record; corrective-action log |
| `dq_uuid` | UUID-empty rows | Preserve the exact atomic name and do not substitute a proxy UUID until a public state-100 exact flow is directly verified. | finalized hybrid-search receipt and future direct-read review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_product` | reference flow | Confirm that the reference output is dry saleable Tungsten Powder with the stated UUID, Mass property and kg unit, or that a non-tungsten covered dataset has explicitly replaced it with an exact product identity and has not retained the tungsten UUID. | `un-cpc-3-0-2025` |
| `validate_atomic_inventory` | all inventory rows | Confirm that every row is one physical, chemical, waste, energy or elementary exchange and that route-inapplicable rows are explicitly marked not applicable rather than merged or silently omitted. |  |
| `validate_balance` | each reporting period | Reconcile total material, tungsten and—when fossil fuel is burned—carbon balances across inputs, products, internal transfers, wastes and direct emissions; disclose closure and unresolved loss. | `jrc-nfm-bref-2017` |
| `validate_gas_basis` | hydrogen, natural gas and oxygen | Confirm one declared gas reference condition and verify every volume conversion from retained temperature, pressure and moisture-basis data. |  |
| `validate_no_proxy_uuid` | UUID-empty inventory rows | Reject a dataset that assigns tungstic acid, ammonium paratungstate, tungsten tailings, mixed gas or another non-exact candidate UUID to the unresolved tungsten trioxide, leach residue, wastewater or hydrogen rows. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may serve as `background_dataset` after independent review and resolution of relevant identity and range-evidence gaps |
| downstream_use | Product-footprint and lifecycle models requiring route-, geography- and product-specific production of a declared covered unwrought metal, powder or cobalt intermediate |
| allowed_use | Use when product identity, market state, feed, route, technology, geography, reporting period, allocation and data-quality disclosures match the study |
| excluded_use | Generic proxying across covered metals or routes; wrought or fabricated products; magnesium powder; mining-only datasets; comparison that ignores purity, grade, product state or allocation differences |
| required_metadata | exact product and flow UUID when available; chemical specification; dry/as-received basis; feed origin and primary/secondary share; route and technology; geography; reporting period; reference gas conditions; allocation; cut-offs; source and destination datasets |
| required_quality_disclosure | foreground share; meter and assay coverage; mass, tungsten and carbon balance closure; uncertainty and estimation methods; unresolved UUIDs; representativeness limits; range-evidence gaps |
| update_trigger | material route, feed, technology, energy mix, purity specification, allocation or abatement change; reporting period older than the programme threshold; exact replacement UUID or compatible independent range evidence becomes available |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 structure, code 41601, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official classification identity and product-boundary wording |
| `jrc-nfm-bref-2017` | `official_guidance` | Cusano, Gonzalo, Farrell, Remus, Roudier and Delgado Sancho, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, EUR 28648 EN, JRC107041, 2017, doi:10.2760/8224. https://publications.jrc.ec.europa.eu/repository/handle/JRC107041 | Non-ferrous-metal process boundary, common and sector-specific process decomposition, resource inputs, direct air/water emissions, wastes, monitoring and data-quality controls |
