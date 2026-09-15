---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.copper-mattes-cement-copper
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Copper mattes; cement copper

## 1. Scope and Applicability

This PCR covers two copper-bearing intermediate products at the producer gate: copper matte made by smelting copper concentrate, and cement copper (precipitated copper) made by iron cementation of a copper-bearing pregnant leach solution. A data package shall select and declare exactly one reference-product branch. If one facility produces both products, each product shall have its own normalized foreground result or a disclosed, evidence-backed allocation.

The foreground boundary starts at receipt of copper concentrate and flux for the matte branch, or at receipt of pregnant leach solution and cementing iron for the cement-copper branch. It ends when the selected intermediate product has been measured, sampled, and released at the producer gate. Upstream mining, beneficiation, concentrate production, and leaching before the received pregnant solution are represented by linked upstream datasets. Downstream matte converting, blister-copper production, anode refining, electrorefining, and manufacture of refined copper products are excluded.

The PCR does not cover copper ore, copper concentrate as the reference product, blister or anode copper, refined copper, copper alloys, copper powder, or copper scrap. Site infrastructure and capital goods are excluded unless the study goal explicitly includes them and reports them separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.copper-mattes-cement-copper |
| classification_refs | CPC 3.0: 41411, Copper mattes; cement copper |
| covered_products | Copper matte; cement copper (precipitated copper) |
| excluded_products | Copper ore and concentrate as reference products; blister copper; anode copper; refined copper; copper alloys; copper powder; copper scrap |
| representative_product | Copper matte |
| production_route | Copper-concentrate smelting to matte, or iron cementation of a copper-bearing pregnant leach solution to cement copper |
| market_state | Copper matte as molten, cast, crushed, or granulated intermediate; cement copper as separated wet cake or dried powder, with declared dry-mass basis, moisture, copper grade, impurities, and producer-gate condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a declared copper-bearing intermediate product covered by this PCR |
| How much | 1,000 kg dry mass of the declared product |
| How well | Product identified as copper matte or cement copper, with route, copper grade, moisture, physical state, impurity profile, and release specification declared |
| How long or cycle | One production batch or reporting-period share completed to the producer gate; no service lifetime applies |
| reference_flow_link | reference_product_copper_matte |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg dry product |
| Reference product flow | Copper matte |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | selected product branch; production technology; producer geography; reporting period; product physical state; dry-mass determination; moisture; copper grade; sulfur and iron content for matte; residual iron and insoluble impurities for cement copper; co-product recovery; recycled internal streams; pollution-control boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The Tiangong UUID for the reference copper-matte product remains unresolved; do not substitute the ore-classified exact-name candidate or a downstream copper product.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | Reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1,000 kg dry product. Measure as-received mass and moisture on a representative sample, and retain the dry-mass calculation. |
| `gas_reference_conditions` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | Report gas volume at the metering reference temperature and pressure; record those conditions and any conversion from operating volume. |
| `electricity_energy_basis` | Purchased electricity | Energy | kWh | Use metered active electricity. Keep voltage level, grid geography, supplier, and on-site generation boundary as foreground qualifiers; do not use a net-calorific-value proxy. |
| `solution_mass_conversion` | Pregnant and spent leach solutions | Mass | kg | If collected as volume, convert with contemporaneous density and record copper, total iron, acidity, sulfate, suspended solids, and temperature for the sampled reporting period. |
| `direct_emission_basis` | Direct air emissions | Mass | kg | Report post-control releases to the receiving air compartment. Reconcile stack measurements or calculations to the same reporting period and 1,000 kg dry-product basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Matte branch: copper concentrate and separately purchased flux received at the smelter gate. Cement branch: copper-bearing pregnant leach solution and cementing steel scrap received at the cementation operation. |
| starting_condition_role | Foreground production input gate; upstream extraction, beneficiation, concentrate production, or leaching is represented by linked upstream datasets rather than re-created inside this PCR. |
| product_classification_scope | CPC 3.0 subclass 41411, while canonical PCR meaning is limited to the two declared copper-bearing intermediate products and their production routes. |
| recursive_input_rule | If copper matte or cement copper is used internally as an input, record the measured internal transfer and do not recursively apply this PCR to that transfer; use a separate upstream dataset only when it crosses the declared foreground boundary. |
| upstream_dataset_requirement | Link supply datasets for copper concentrate, quartz stone, natural gas, industrial oxygen, electricity, pregnant leach solution, and steel scrap when those inputs cross the foreground boundary. |
| disclosure | Declare selected branch, start material state and assays, technology, pollution controls, internal recycle, co-product recovery, producer geography, reporting period, cut-offs, and every deviation from the default gate-to-gate boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_branch_selection` | Foreground model | Select copper matte or cement copper as the reference product. Include the corresponding process branch and exclude the other branch unless the facility actually operates both and the data are subdivided. | `unsd-cpc-3-0-structure-2025`, `us-epa-ap42-primary-copper-smelting-1995`, `us-bureau-mines-copper-materials-survey-1965` |
| `boundary_matte_operations` | Copper matte branch | Include concentrate and flux receipt, drying or roasting when used, smelting, matte tapping and conditioning, slag handling, direct energy, oxygen, post-control emissions, and on-site off-gas treatment that is operationally integrated with matte production. | `us-epa-ap42-primary-copper-smelting-1995` |
| `boundary_cement_operations` | Cement copper branch | Include solution transfer, iron cementation, agitation or pumping, separation of the precipitate, product conditioning, spent-solution handling, and direct releases from the cementation operation. | `us-bureau-mines-copper-materials-survey-1965` |
| `boundary_upstream_and_downstream` | Both branches | Represent upstream supplied inputs with linked datasets. Exclude downstream converting and refining from the reference-product foreground result, and do not credit future recycling or downstream metal recovery unless the study applies and discloses a separate consequential scenario. | `us-epa-ap42-primary-copper-smelting-1995`, `eu-commission-pef-method-2021` |
| `boundary_completeness` | Both branches | Include every environmentally relevant material, energy, waste, and direct elementary exchange inside the declared boundary. Add any site-specific species or material as a separate atomic flow row rather than aggregating it under a generic collection label. | `eu-commission-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_matte_smelting` | Copper concentrate smelting to copper matte | `conditional` | Include when the declared reference product is copper matte. | foreground production | dry mass of copper matte released at the producer gate |
| `p_cement_copper_production` | Iron cementation to cement copper | `conditional` | Include when the declared reference product is cement copper. | foreground production | dry mass of cement copper released at the producer gate |

### Process: Copper concentrate smelting to copper matte (`p_matte_smelting`)

#### Inputs

##### Product flows

###### Copper concentrate feed (`matte_copper_concentrate`)

Copper concentrate crosses the smelter foreground boundary as the principal copper- and sulfur-bearing feed. Record dry mass, moisture, copper, sulfur, iron, gangue, and relevant trace-element assays by batch or reconciled campaign.

- Selected flow: Copper concentrate
- Flow property / unit: Mass / kg
- Amount rule: calculate dry concentrate consumed from reconciled receipt, stock-change, return, and moisture records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_material_inputs`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

###### Quartz stone used as siliceous flux (`matte_quartz_stone_flux`)

Quartz stone is recorded only when it is the separately supplied siliceous flux. If another specific flux crosses the boundary, add that material as its own atomic product-flow row rather than relabelling this row.

- Selected flow: Quartz stone `e3cb4771-a491-487e-a16b-8482d3ebf6ff`
- Flow property / unit: Mass / kg
- Amount rule: calculate dry quartz stone charged from weighbridge, bin, and stock-change records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_material_inputs`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

###### Gaseous natural gas (`matte_natural_gas`)

Natural gas is recorded when it crosses the foreground boundary for furnace, dryer, roaster, holding, or auxiliary combustion. Exclude upstream supply emissions from direct emissions and link them through the natural-gas supply dataset.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: meter purchased natural gas and convert it to the declared reference temperature and pressure
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: m3 per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_energy_and_gases`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

###### Industrial oxygen (`matte_industrial_oxygen`)

Purchased industrial oxygen is recorded when used for oxygen enrichment or oxygen-blown smelting. When oxygen is produced on site, include its production inputs inside the foreground boundary and keep this purchased-flow row not applicable.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: meter supplied oxygen at declared reference conditions and record oxygen purity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: m3 per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_energy_and_gases`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

###### Medium-voltage electricity (`matte_electricity`)

Record active electricity imported for electric smelting and all in-boundary drives, fans, pumps, gas cleaning, and product handling. Separately meter exported or on-site generated electricity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: reconcile imported active electricity, on-site generation, exports, and stock-independent submeter totals for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kWh per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_energy_and_gases`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`, `eu-commission-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference copper matte product (`reference_product_copper_matte`)

Copper matte is the reference output for the matte branch. Record tapped and released product mass on a dry basis and retain moisture, copper, sulfur, iron, physical state, and impurity assay data.

- Selected flow: Copper matte
- Flow property / unit: Mass / kg
- Amount rule: calculate dry copper matte released from measured product mass and representative moisture determination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_outputs_and_emissions`
- Sources: `unsd-cpc-3-0-structure-2025`, `us-epa-ap42-primary-copper-smelting-1995`

###### Recovered sulfuric acid (`matte_sulfuric_acid`)

Sulfuric acid is recorded as a separate co-product only when sulfur dioxide is converted to acid inside the declared foreground boundary and the acid leaves the process as a usable product. Record concentration and commercial disposition.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: calculate acid product mass at measured concentration from product dispatch and inventory-change records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg sulfuric acid at declared concentration per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_outputs_and_emissions`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

##### Waste flows

###### Copper slag (`matte_copper_slag`)

Record the copper-bearing slag leaving smelting or slag cleaning as a waste flow until it demonstrably meets the site's declared co-product criteria. Internal slag recycle is an internal transfer and is not counted again as an external input or output.

- Selected flow: Copper slag `3b318911-2500-490f-8f56-fea047c8fbea`
- Flow property / unit: Mass / kg
- Amount rule: calculate dry external slag from dispatch, weighing, moisture, and stock-change records after subtracting internal recycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg dry copper slag per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_outputs_and_emissions`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

##### Elementary flows

###### Sulfur dioxide released to air (`matte_sulfur_dioxide_air`)

Record sulfur dioxide released after the declared gas collection and abatement system. Do not record sulfur routed into recovered sulfuric acid as an emission.

- Selected flow: sulfur dioxide to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: calculate post-control release from validated continuous monitoring, stack tests, or a reconciled sulfur balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg sulfur dioxide per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_outputs_and_emissions`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

###### Total particulate matter released to air (`matte_particulate_air`)

Record total particulate matter released after control to the declared air compartment. Add measured size fractions or metal species as separate elementary flows when available; do not treat a PM2.5 UUID as total particulate matter.

- Selected flow: Particulate matter, total, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: calculate post-control total particulate release from validated stack tests or continuous measurements and operating hours
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg total particulate matter per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_outputs_and_emissions`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

###### Fossil carbon dioxide released to air (`matte_fossil_co2_air`)

Record only direct fossil carbon dioxide from in-boundary fuel combustion and carbon-bearing reductants. Upstream electricity and fuel-supply emissions remain in linked supply datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate direct fossil carbon dioxide from metered fuel, declared carbon content, oxidation, and any measured stack reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg fossil carbon dioxide per 1,000 kg dry copper matte output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_matte_outputs_and_emissions`
- Sources: `us-epa-ap42-primary-copper-smelting-1995`

### Process: Iron cementation to cement copper (`p_cement_copper_production`)

#### Inputs

##### Product flows

###### Copper-bearing pregnant leach solution (`cement_pregnant_leach_solution`)

Record the aqueous pregnant solution that crosses into cementation. Retain solution volume or mass, density, copper concentration, total iron, acidity, sulfate, suspended solids, temperature, source process, and recycle status.

- Selected flow: Copper sulfate pregnant leach solution
- Flow property / unit: Mass / kg
- Amount rule: calculate solution mass from reconciled flow measurement and density for the cementation reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg pregnant leach solution per 1,000 kg dry cement copper output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cement_inputs_and_energy`
- Sources: `us-bureau-mines-copper-materials-survey-1965`

###### Steel scrap used as cementing iron (`cement_scrap_steel`)

Record steel scrap added as the iron cementing material. Retain grade, coating, contamination, total iron, unreacted return, and whether any burden from a prior product system is assigned.

- Selected flow: Scrap Steel `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- Flow property / unit: Mass / kg
- Amount rule: calculate net steel scrap consumed from charged, recovered unreacted, and stock-change masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: kg steel scrap consumed per 1,000 kg dry cement copper output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cement_inputs_and_energy`
- Sources: `us-bureau-mines-copper-materials-survey-1965`

###### Medium-voltage electricity (`cement_electricity`)

Record active electricity imported for solution transfer, agitation, precipitation equipment, separation, ventilation, and product handling inside the cementation boundary.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: reconcile imported active electricity, on-site generation, exports, and applicable submeters for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kWh per 1,000 kg dry cement copper output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cement_inputs_and_energy`
- Sources: `us-bureau-mines-copper-materials-survey-1965`, `eu-commission-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cement copper product (`cement_copper_product`)

Record the separated cement copper product on a dry basis. Retain as-received mass, moisture, copper grade, residual iron, insoluble material, physical state, and release specification.

- Selected flow: Cement copper
- Flow property / unit: Mass / kg
- Amount rule: calculate dry cement copper released from measured product mass and representative moisture determination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry cement copper output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cement_outputs_and_releases`
- Sources: `unsd-cpc-3-0-structure-2025`, `us-bureau-mines-copper-materials-survey-1965`

##### Waste flows

###### Iron-sulfate-bearing spent leach solution (`cement_spent_leach_solution`)

Record the liquid stream leaving cementation after copper precipitation when it crosses to recycle, treatment, discharge, or another process. Record the external transfer only once and disclose its destination.

- Selected flow: Iron-sulfate-bearing spent copper leach solution
- Flow property / unit: Mass / kg
- Amount rule: calculate external spent-solution mass from measured volume, density, recycle, purge, and stock-change records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg spent solution per 1,000 kg dry cement copper output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cement_outputs_and_releases`
- Sources: `us-bureau-mines-copper-materials-survey-1965`

##### Elementary flows

###### Hydrogen released to air (`cement_hydrogen_air`)

Record hydrogen released by reaction of excess acidity with iron when the release occurs and crosses the foreground boundary. Do not infer a non-zero quantity without measured or reconciled reaction data.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate or measure direct hydrogen release from reconciled iron consumption, solution acidity, copper precipitation, and vent data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg hydrogen per 1,000 kg dry cement copper output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cement_outputs_and_releases`
- Sources: `us-bureau-mines-copper-materials-survey-1965`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_branches` | Facilities producing copper matte and cement copper | First subdivide process trains, meters, batches, and stock changes so each declared reference product receives directly attributable foreground inputs and outputs. | `eu-commission-pef-method-2021` |
| `allocation_shared_services` | Shared utilities and treatment | Allocate only genuinely shared services that cannot be subdivided. Use a documented physical driver that represents causation, such as metered energy, treated gas volume, solution volume, or dry mass throughput; do not allocate by total product mass merely for convenience. | `eu-commission-pef-method-2021` |
| `allocation_sulfuric_acid` | Recovered sulfuric acid | Keep recovered sulfuric acid as a separate product output. Prefer subdivision or system expansion; if neither is feasible, use and justify a relevant physical relationship before considering an economic relationship. Report acid concentration and allocation sensitivity. | `us-epa-ap42-primary-copper-smelting-1995`, `eu-commission-pef-method-2021` |
| `allocation_slag_and_recycle` | Copper slag and internal recycle | Treat internal slag return as an internal transfer with no second upstream burden. Keep externally transferred slag as waste unless documented product status applies; disclose any treatment, recovery credit, or burden partitioning separately. | `us-epa-ap42-primary-copper-smelting-1995`, `eu-commission-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_matte_material_inputs` | `p_matte_smelting` | copper concentrate and quartz stone inputs | weighbridge, batch, assay, moisture, and inventory records | received mass; returned mass; opening and closing stock; moisture; copper; sulfur; iron; gangue; trace elements; quartz composition | reconcile calibrated weighing and representative laboratory samples to each batch or campaign | kg and mass fraction | each receipt and batch; monthly reconciliation | at least one representative operating year or the full campaign if shorter | all foreground smelting units supplying the declared product | net dry input equals receipts plus opening stock minus returns and closing stock, normalized to dry matte output | scale calibration; sample plan; laboratory method; chain of custody; reconciliation residual |
| `cp_matte_energy_and_gases` | `p_matte_smelting` | natural gas, industrial oxygen, and electricity | fiscal meter, submeter, invoice, and operating log | gas volume; temperature; pressure; oxygen volume and purity; electricity import; generation; export; downtime; production allocation driver | time-align calibrated meters and invoices with the smelting reporting period | m3 and kWh | continuous or each delivery; monthly reconciliation | same period as product output, covering seasonal and campaign variability | all in-boundary furnaces, gas cleaning, and auxiliaries | net imported quantity minus exports, apportioned only by documented physical drivers, normalized to dry matte output | meter calibration; invoice reconciliation; missing-data log; reference-condition conversion |
| `cp_matte_outputs_and_emissions` | `p_matte_smelting` | copper matte, sulfuric acid, copper slag, sulfur dioxide, particulate matter, and fossil carbon dioxide | product dispatch, stock, assay, stack-monitoring, stack-test, fuel, and residue records | product and slag mass; moisture; copper; sulfur; iron; acid mass and concentration; stack flow; pollutant concentration; operating hours; fuel carbon; internal recycle | reconcile product and residue balances with validated emissions monitoring after controls | kg, mass fraction, concentration, and gas volume | each batch or dispatch; continuous monitoring where installed; stack tests per permit | same representative year or full campaign as inputs | all product tapping, gas treatment, residue handling, and release points inside the boundary | calculate dry outputs and post-control releases, subtract internal recycle, and normalize to dry matte output | weighing and laboratory QA; CEMS QA; stack-test report; sulfur and carbon balance closure; inventory reconciliation |
| `cp_cement_inputs_and_energy` | `p_cement_copper_production` | pregnant solution, steel scrap, and electricity | flowmeter, tank, assay, weighbridge, stock, meter, and invoice records | solution volume and density; copper; iron; acidity; sulfate; suspended solids; temperature; scrap charge and return; scrap iron content and coating; electricity import, generation, and export | time-align calibrated solution, mass, assay, and electricity records with cementation batches | kg, m3, mass concentration, mass fraction, and kWh | each batch or continuous flow; monthly reconciliation | at least one representative operating year or full campaign if shorter | all cementation, separation, ventilation, and product-handling units inside the boundary | calculate net solution, scrap, and electricity inputs and normalize to dry cement copper output | meter and scale calibration; sampling plan; laboratory QA; invoice reconciliation; reaction-balance residual |
| `cp_cement_outputs_and_releases` | `p_cement_copper_production` | cement copper, spent solution, and hydrogen | product mass, moisture, assay, solution-flow, tank, vent, and reaction-balance records | product mass; moisture; copper; iron; insolubles; spent-solution volume and density; copper; ferrous and ferric iron; acidity; sulfate; recycle and purge; hydrogen measurement or calculation inputs | reconcile dry product, solution, copper, iron, and vent balances for each batch or reporting period | kg, m3, mass concentration, and mass fraction | each batch or continuous flow; monthly reconciliation | same period as cementation inputs | all separation, recycle, purge, product-conditioning, and vent points inside the boundary | calculate external outputs after subtracting internal recycle and normalize to dry cement copper output | scale and flowmeter calibration; representative moisture sample; laboratory QA; copper and iron balance closure; vent method documentation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_product_mass` | Copper matte and cement copper | dry product mass = as-received product mass × (1 − moisture mass fraction) | as-received mass; representative moisture mass fraction | kg dry product | `eu-commission-pef-method-2021` |
| `calc_reference_normalization` | Every inventory row | normalized amount = reporting-period net exchange × 1,000 / reporting-period dry reference-product mass | net exchange; dry reference-product mass | row unit per 1,000 kg dry product | `eu-commission-pef-method-2021` |
| `calc_gas_reference_volume` | Natural gas and industrial oxygen | Convert operating volume to the declared metering reference temperature and pressure using the documented meter or gas-law correction; do not mix incompatible reference conditions. | operating volume; temperature; pressure; meter correction; gas compressibility when material | m3 at declared reference conditions | `us-epa-ap42-primary-copper-smelting-1995` |
| `calc_matte_sulfur_balance` | Matte branch | Reconcile sulfur in concentrate and other inputs with sulfur in matte, slag, recovered acid, direct sulfur emissions, and other measured sulfur outputs; investigate and disclose the residual. | dry masses; sulfur assays; acid concentration; monitored emissions | sulfur-balance closure and normalized sulfur-bearing outputs | `us-epa-ap42-primary-copper-smelting-1995` |
| `calc_cementation_balance` | Cement copper branch | Reconcile copper and iron across pregnant solution, steel scrap, cement copper, unreacted steel, spent solution, residues, and releases using the reaction Fe + CuSO4 → Cu + FeSO4 as a stoichiometric QA relationship, not as a substitute for foreground measurements. | solution flows and assays; scrap and product masses and assays; spent-solution composition | copper-balance closure; iron-balance closure; QA residual | `us-bureau-mines-copper-materials-survey-1965` |
| `calc_stack_release` | Direct stack emissions | pollutant mass = validated post-control pollutant concentration × compatible dry or wet gas volume, with moisture, oxygen-reference, temperature, and pressure corrections documented as applicable | concentration; stack gas flow; operating time; correction parameters | kg pollutant released | `us-epa-ap42-primary-copper-smelting-1995` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Declare branch, physical state, moisture basis, copper grade, relevant impurities, release specification, and sampling method; do not use a refined- or ore-state UUID as a proxy. | product specification; dispatch record; laboratory certificate; sampling plan |
| `dq_temporal_alignment` | All foreground exchanges | Use the same reporting period for inputs, outputs, stock changes, and emissions. Cover a representative operating year or explain why a shorter campaign is representative. | dated source records; production calendar; downtime and abnormal-operation log |
| `dq_measurement_control` | Meters, scales, and assays | Retain calibration status, sample representativeness, laboratory method, detection limits, substitutions, and uncertainty for every material exchange. | calibration certificates; QA/QC charts; laboratory reports; missing-data register |
| `dq_balance_closure` | Both branches | Report mass-balance residuals and branch-specific copper balance; also report sulfur balance for matte and iron balance for cementation. Investigate material residuals rather than forcing closure through an unmeasured flow. | signed reconciliation workbook; assay records; explanation of residuals |
| `dq_atomic_completeness` | Inventory | Add each site-specific material, waste, and emitted species as a separate atomic exchange with its own identity, property, unit, amount rule, and destination. | flow register; permit pollutant list; waste manifest; completeness review |
| `dq_primary_manufacturing_data` | Foreground manufacturing | Use company-specific data for the foreground production processes and disclose any secondary-data substitution and its effect. | meter, batch, invoice, assay, dispatch, and monitoring records; substitution log; sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_branch` | Dataset identity | Confirm CPC 41411 scope, declare exactly one reference-product branch, and reject copper ore, concentrate, blister copper, anode copper, refined copper, copper alloys, powder, or scrap as the reference product. | `unsd-cpc-3-0-structure-2025` |
| `validate_reference_mass` | Reference flow | Confirm that the reference output equals 1,000 kg dry product after the documented moisture conversion and that every inventory amount uses the same denominator. | `eu-commission-pef-method-2021` |
| `validate_process_completeness` | Process inventory | For the selected branch, verify all relevant process steps, material and energy inputs, product and co-product outputs, wastes, and post-control elementary releases; skipped rows require a documented not-applicable basis. | `us-epa-ap42-primary-copper-smelting-1995`, `us-bureau-mines-copper-materials-survey-1965`, `eu-commission-pef-method-2021` |
| `validate_no_double_counting` | Upstream and internal flows | Confirm upstream supply burdens appear only in linked datasets, internal recycle is not counted as a second external exchange, and sulfur routed to acid is not also recorded as sulfur-dioxide emission. | `us-epa-ap42-primary-copper-smelting-1995` |
| `validate_balances` | Mass, copper, sulfur, and iron | Check total mass and copper closure for both branches, sulfur closure for matte, and iron closure for cementation. Report residuals, thresholds, investigations, and corrections without inventing balancing flows. | `us-epa-ap42-primary-copper-smelting-1995`, `us-bureau-mines-copper-materials-survey-1965` |
| `validate_allocation` | Multi-output operations | Confirm subdivision was attempted first, every remaining shared burden has a causal driver, recovered sulfuric acid is a separate output, and any physical, system-expansion, or economic allocation is fully disclosed with sensitivity. | `eu-commission-pef-method-2021` |
| `validate_uuid_status` | Tiangong flow identities | Use only directly verified state-100 UUIDs. Keep the nine declared unresolved rows UUID-empty until an exact public identity with compatible flow type, classification, product state, property, and unit group is verified. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset for copper matte or cement copper |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness, completeness, allocation, and unresolved identities |
| allowed_use | Product-footprint and life-cycle models needing a declared copper-matte or cement-copper producer-gate input with compatible technology, geography, grade, and boundary |
| excluded_use | Direct representation of ore mining, concentrate production, pregnant-solution leaching, blister or anode production, refining, finished copper products, or an undeclared average of the two covered branches |
| required_metadata | selected branch; geography; technology; reporting period; dry-mass method; product grade and physical state; input assays; energy supply; oxygen and gas reference conditions; pollution controls; co-products; internal recycle; allocation; upstream links; unresolved UUIDs |
| required_quality_disclosure | primary-data share; temporal and geographic representativeness; meter and assay QA; missing-data treatment; mass, copper, sulfur, and iron balance residuals as applicable; emission measurement basis; allocation sensitivity; deviations and cut-offs |
| update_trigger | Material change in feed grade, furnace or cementation technology, energy or oxygen supply, pollution control, acid recovery, solution recycle, product specification, allocation, site geography, or availability of an exact Tiangong UUID or two-source range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 41411 identity and English title |
| `china-product-specific-origin-rules` | `official_guidance` | 附件五 产品特定原产地规则. https://www.dg.gov.cn/attachment/cmsfile/304093920/0202/201504/daofile/doc233067.pdf (retrieved 2026-09-04) | Professional Chinese heading terminology 铜锍；沉积铜（泥铜） |
| `us-epa-ap42-primary-copper-smelting-1995` | `official_guidance` | U.S. EPA, AP-42, Section 12.3, Primary Copper Smelting, October 1986, reformatted January 1995. https://www.epa.gov/sites/default/files/2020-11/documents/c12s03.pdf (retrieved 2026-09-04) | Copper matte process decomposition, material and energy inputs, slag, off-gas, emissions, and sulfuric-acid recovery |
| `us-bureau-mines-copper-materials-survey-1965` | `handbook` | U.S. Department of the Interior, Bureau of Mines, Copper: A Materials Survey, Information Circular 8225, 1965. https://stacks.cdc.gov/view/cdc/206386/cdc_206386_DS1.pdf (retrieved 2026-09-04) | Cement copper definition, iron cementation reaction, pregnant solution, cementing iron, spent solution, and direct hydrogen pathway |
| `eu-commission-pef-method-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, Annexes 1 to 2, Product Environmental Footprint Method, 2021. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (retrieved 2026-09-04) | Company-specific manufacturing data, completeness, transparency, normalization, data quality, and multi-functionality hierarchy |
