---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.table-kitchen-or-other-household-articles-and-parts-thereof-of-iron-steel-copper-or-alu-44fd82fb
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Table, kitchen or other household articles and parts thereof, of iron, steel, copper or aluminium; cooking or heating apparatus of a kind used for domestic purposes, non-electric, of copper; pot scourers and scouring or polishing pads, gloves and the like, of iron or steel, copper or aluminium; iron or steel wool; hand-operated mechanical appliances, weighing 10 kg or less, used in the preparation, conditioning or serving of food or drink

## 1. Scope and Applicability

This PCR applies to factory-gate production of table, kitchen and other household articles made principally from iron, steel, copper or aluminium, the listed non-electric domestic copper cooking or heating apparatus, metal scourers and wool, and hand-operated food or drink preparation, conditioning or serving appliances weighing no more than 10 kg. A concrete data package shall identify one product, principal metal and alloy, construction, finish, component set and packaging configuration; the broad CPC wording does not permit averaging unlike products without a declared sampling plan.

The representative route is a formed and polished stainless-steel household article made from purchased flat-rolled stock. It provides an auditable common route, not a claim that every covered product is stainless steel. Product-specific casting, wire-forming, copper heating, coating, joining, handle, blade, gear or multi-material assembly operations shall be added as separate conditional processes and atomic exchanges when present.

Electric domestic appliances; household articles principally of glass, ceramic, plastics, wood or textiles; cutlery classified separately; industrial food-processing machinery; and primary metal production are outside this PCR identity. Distribution after the factory gate, household use, maintenance and end-of-life are excluded from the foreground boundary unless the study explicitly extends it.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.table-kitchen-or-other-household-articles-and-parts-thereof-of-iron-steel-copper-or-alu-44fd82fb |
| classification_refs | CPC 3.0: 42912, exact classification context; the canonical PCR identity remains classification-independent |
| covered_products | Metal tableware, kitchenware and other household articles and parts; non-electric domestic copper cooking or heating apparatus; metal scourers, scouring or polishing pads, gloves and similar articles; iron or steel wool; hand-operated food or drink appliances of 10 kg or less |
| excluded_products | Electric domestic appliances; separately classified cutlery; industrial food-processing machinery; and household goods whose principal material is not iron, steel, copper or aluminium |
| representative_product | One formed, mechanically polished stainless-steel household article, inspected and packaged at the factory gate |
| production_route | Purchased further-worked flat-rolled stainless steel; stock preparation; cutting, forming and trimming; conditional thermal treatment; surface finishing and aqueous cleaning; inspection and packaging |
| market_state | Finished factory-gate article, dry and serviceable, with declared net product mass and packaging supplied separately in the inventory |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared household preparation, serving, cleaning, cooking or heating function of one specified covered metal article |
| How much | 1 kg net mass of finished article at the factory gate, excluding packaging |
| How well | Meets the declared alloy, construction, dimensions, surface finish, component configuration and applicable product performance or safety specification |
| How long or cycle | Declared design service life or rated cycles for the specific article; service life is disclosed but does not change the factory-gate 1 kg normalization |
| reference_flow_link | The reference flow is the net finished product mass required to provide the declared product function; all foreground inputs and outputs are normalized to 1 kg net finished article |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished article, excluding corrugated box and LDPE protective film |
| Reference product flow | Finished metal household article |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | specific product family and function; principal metal and alloy grade; net product mass; item mass and item count; dimensions or capacity; manufacturing route; surface finish and coating; joined components and non-metal components; recycled-content claim and evidence; factory geography and technology; packaging configuration; quality or safety specification; design service life or rated cycles |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh saleable product after final inspection and before packaging. Exclude all packaging mass and normalize every foreground exchange to 1 kg net finished article. |
| `item_to_mass` | count-based production and packaging records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts using a measured, product-specific mean item mass and retain sample size, weighing date and dispersion; do not use a nominal catalogue mass without verification. |
| `electricity_energy` | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh in raw records and convert to MJ using 1 kWh = 3.6 MJ; disclose voltage, grid geography, contractual supply and whether losses are included. |
| `gas_volume_basis` | natural-gas row | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record meter volume and its temperature, pressure and dry or wet reference conditions; convert only with a documented site or supplier method. |
| `water_mass_basis` | process-water row | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass measurement; when a volume meter is used, retain volume and the measured or documented density used for conversion. |
| `material_balance` | metal stock, product, scrap and captured dust | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile metal-bearing inputs with saleable product, transferred intermediates, scrap, captured dust and measured direct releases for the same reporting period and product allocation. |

## 5. System Boundary

The foreground boundary starts with receipt of purchased, specification-conforming metal stock and other purchased components and ends with the dry, inspected and packaged article at the factory gate. It includes stock handling, cutting, forming, trimming, route-required thermal treatment, mechanical or chemical surface preparation, finishing, cleaning, direct utilities, direct releases, waste collection, inspection and packaging. Upstream production and delivery of purchased metal, chemicals, fuels, electricity and packaging are represented by linked background datasets. Primary metal making is not duplicated in the foreground.

Conditional processes are included only when the declared product route uses them. A data package shall not replace a concrete exchange with a generic material, utility, waste or emission collection.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock and purchased components meeting the declared alloy, form, finish and supplier specifications at the foreground factory receiving point |
| starting_condition_role | foreground gate input with upstream production and inbound delivery represented by linked background datasets |
| product_classification_scope | Classification is used to confirm covered product identity only; route, alloy, construction and market state are declared independently |
| recursive_input_rule | A purchased input that is itself a finished covered household article is recorded as a separate product input with supplier identity and upstream dataset and is not recursively re-manufactured inside this foreground system |
| upstream_dataset_requirement | Link each purchased metal, chemical, energy carrier, component and packaging input to a geography-, technology- and state-compatible upstream dataset; disclose any proxy rather than silently substituting it |
| disclosure | Declare product identity, alloy, stock form, route, included and omitted conditional processes, coating and finish, packaging, site geography, reporting period, allocation and every foreground exclusion |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground system | Include all factory processes from purchased-stock receipt through inspected and packaged product dispatch; link purchased inputs to upstream datasets and keep distribution, use and end-of-life outside this gate-to-gate foreground boundary. | `ec-pef-method-2021` |
| `boundary_route_instantiation` | product route | Instantiate only the processes used by the declared product, but preserve separate atomic rows for every material, energy, waste and direct elementary exchange. | `us-epa-fabricated-metal-sector-notebook-1995` |
| `boundary_surface_treatment` | chemical or electrolytic surface treatment | When a water-based surface-treatment line is used, include pretreatment, core treatment, rinsing, drying, water and energy, bath chemicals, drag-out, wastewater, spent solution, sludge and direct air releases. | `ec-jrc-stm-bref-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_receipt_and_preparation` | Stock receipt and blank preparation | required | Always for the representative purchased-stock route | Receive, inspect and cut purchased stock into blanks | kg prepared blank transferred to forming |
| `forming_and_trimming` | Forming and trimming | required | Always for the representative formed-product route | Press-form the blank and trim the product geometry | kg formed body transferred onward |
| `thermal_treatment` | Thermal treatment | conditional | Include when the declared alloy and forming route require annealing, stress relief or thermal conditioning | Produce a surface-ready metallurgical state | kg heat-treated body |
| `surface_finishing_and_cleaning` | Surface finishing and cleaning | required | Always; instantiate only the mechanical and aqueous operations actually used | Produce the declared finish and clean product | kg inspected article before packaging |
| `final_inspection_and_packaging` | Final inspection and packaging | required | Always; packaging rows apply when the declared corrugated-box and LDPE-film configuration is used | Release the factory-gate reference product | 1 kg net finished article |

### Process: Stock receipt and blank preparation (`stock_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Representative stainless-steel stock (`stock_stainless_flat_roll`)

Purchased stainless-steel flat-rolled stock crosses the factory gate and is weighed against receipt and bill-of-material records.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: received mass attributable to accepted blanks and receipt-stage rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

###### Receipt and blanking electricity (`stock_receipt_electricity`)

Metered electrical energy used for receiving, inspection and blank cutting is assigned to accepted production.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity attributable to stock receipt and blank preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `ec-pef-method-2021`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Prepared stainless-steel blank (`prepared_blank_output`)

Accepted cut blanks are weighed or calculated from verified piece counts and measured mean blank mass before forming.

- Selected flow: Prepared stainless-steel blank
- Flow property / unit: Mass / kg
- Amount rule: measured or count-converted blank mass transferred to forming
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared blank output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_mass_transfer`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

##### Waste flows

###### Receipt and blanking steel scrap (`stock_scrap_output`)

Rejected stock ends and blanking offcuts are kept separate and weighed at the point they leave the process.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured receipt-reject and blanking-scrap mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_waste`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

##### Elementary flows

No direct elementary output is prescribed for this process.

### Process: Forming and trimming (`forming_and_trimming`)

#### Inputs

##### Product flows

###### Prepared stainless-steel blank input (`prepared_blank_input`)

The internal blank transfer is recorded to preserve process-level mass balance.

- Selected flow: Prepared stainless-steel blank
- Flow property / unit: Mass / kg
- Amount rule: mass transferred from stock preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formed body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_mass_transfer`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

###### Forming and trimming electricity (`forming_electricity`)

Presses, trimming machines and directly associated extraction equipment are submetered or allocated from a documented machine-time meter group.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity attributable to forming and trimming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `ec-pef-method-2021`

###### Cutting fluid (`forming_cutting_fluid`)

Oil-based cutting fluid supplied to trimming equipment is recorded net of recovered and returned fluid.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus unchanged return and recovered reusable fluid
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_fluid`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Formed stainless-steel body (`formed_body_output`)

The formed and trimmed internal body is recorded before any thermal or finishing step.

- Selected flow: Formed stainless-steel household-article body
- Flow property / unit: Mass / kg
- Amount rule: measured or count-converted mass transferred from forming
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formed body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_mass_transfer`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

##### Waste flows

###### Forming and trimming steel scrap (`forming_scrap_output`)

Separated metal offcuts and rejected formed pieces are weighed before recycling or other treatment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured forming and trimming scrap sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_waste`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

###### Waste cutting oil (`waste_cutting_oil_output`)

Spent oil-based cutting fluid leaving the site is weighed and linked to its treatment destination.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured spent cutting-oil mass transferred off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_fluid`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

##### Elementary flows

No direct elementary output is prescribed separately from measured finishing dust for this process.

### Process: Thermal treatment (`thermal_treatment`)

#### Inputs

##### Product flows

###### Formed body entering thermal treatment (`formed_body_thermal_input`)

This internal transfer applies only when annealing, stress relief or other thermal conditioning is required.

- Selected flow: Formed stainless-steel household-article body
- Flow property / unit: Mass / kg
- Amount rule: mass of formed body charged to the thermal-treatment unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg heat-treated body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_mass_transfer`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

###### Natural gas for thermal treatment (`thermal_natural_gas`)

Natural gas crossing the foreground boundary is metered at documented reference conditions for the included furnace campaign.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume attributable to included thermal treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_fuel`
- Sources: `ec-pef-method-2021`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Heat-treated stainless-steel body (`heat_treated_body_output`)

The conditioned body is weighed or count-converted when it leaves the furnace campaign.

- Selected flow: Heat-treated stainless-steel household-article body
- Flow property / unit: Mass / kg
- Amount rule: measured or count-converted body mass transferred to finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg heat-treated body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_mass_transfer`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

##### Waste flows

No waste output is prescribed; any furnace scale or refractory waste present shall be added as its own concrete row.

##### Elementary flows

###### Direct fossil carbon dioxide (`thermal_fossil_co2`)

Direct fossil carbon dioxide from on-site natural-gas combustion is measured or calculated from collected fuel and documented facility-specific carbon data; upstream electricity emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct emission or collected natural gas multiplied by documented facility-specific carbon content and oxidation method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_co2`
- Sources: `ec-pef-method-2021`

### Process: Surface finishing and cleaning (`surface_finishing_and_cleaning`)

#### Inputs

##### Product flows

###### Surface-ready formed body (`surface_ready_body_input`)

The internal body entering finishing reflects the declared route after forming and any applicable thermal treatment.

- Selected flow: Surface-ready formed stainless-steel household-article body
- Flow property / unit: Mass / kg
- Amount rule: mass transferred into the finishing line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg inspected pre-packaging article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_mass_transfer`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

###### Finishing electricity (`finishing_electricity`)

Electrical energy for polishing, extraction, aqueous cleaning, pumps and drying is recorded for the included finishing operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity attributable to surface finishing and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `ec-jrc-stm-bref-2006`

###### Sodium hydroxide for aqueous cleaning (`finishing_sodium_hydroxide`)

Sodium hydroxide entering the declared alkaline cleaning bath is recorded as neat chemical-equivalent mass with solution concentration retained.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued neat-equivalent mass consumed by bath make-up and replenishment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_inputs`
- Sources: `ec-jrc-stm-bref-2006`

###### Process water for cleaning and rinsing (`finishing_process_water`)

Process water supplied to cleaning, rinsing and included bath make-up is measured at the finishing-line boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water mass entering cleaning, rinsing and bath make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_inputs`
- Sources: `ec-jrc-stm-bref-2006`

###### White fused alumina polishing abrasive (`finishing_white_fused_alumina`)

White fused alumina issued to mechanical polishing is recorded net of clean recovered abrasive returned to use.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus clean reusable abrasive recovered within the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_inputs`
- Sources: `us-epa-fabricated-metal-sector-notebook-1995`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Inspected article before packaging (`prepack_article_output`)

Dry articles meeting the declared finish and inspection requirements are weighed before packaging.

- Selected flow: Inspected stainless-steel household article before packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or count-converted accepted article mass transferred to packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg inspected pre-packaging article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_product`
- Sources: `ec-pef-method-2021`

##### Waste flows

###### Alkaline metal-finishing wastewater (`alkaline_finishing_wastewater`)

Combined wastewater from the declared alkaline cleaning and rinse steps is recorded before any off-site transfer or on-site treatment unit outside this process card.

- Selected flow: Alkaline metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving the finishing-line boundary, with pH and metal content retained as qualifiers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `ec-jrc-stm-bref-2006`

###### Captured grinding and polishing dust (`grinding_dust_output`)

Dust collected by filters, local extraction or housekeeping from the declared grinding and polishing operation is weighed as a separate waste.

- Selected flow: Dust from Grinding and Sieving `e0f3b3af-7794-4c25-ae58-5e4302b226d2`
- Flow property / unit: Mass / kg
- Amount rule: measured collected dust mass sent to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_and_pm`
- Sources: `ec-jrc-stm-bref-2006`

##### Elementary flows

###### Direct PM10 from mechanical finishing (`pm10_air_output`)

Uncaptured particles (PM10) from mechanical finishing are recorded only when measured or calculated for a confirmed receiving-air compartment; the compartment-specific Tiangong UUID remains under review.

- Selected flow: particles (PM10), direct emission to air
- Flow property / unit: Mass / kg
- Amount rule: source-tested or validated calculated direct PM10 mass leaving the foreground site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_and_pm`
- Sources: `ec-jrc-stm-bref-2006`

### Process: Final inspection and packaging (`final_inspection_and_packaging`)

#### Inputs

##### Product flows

###### Inspected article input (`prepack_article_input`)

The accepted dry article crosses into packaging as an internal product transfer.

- Selected flow: Inspected stainless-steel household article before packaging
- Flow property / unit: Mass / kg
- Amount rule: mass transferred from finishing to packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_product`
- Sources: `ec-pef-method-2021`

###### Packaging-line electricity (`packaging_electricity`)

Electrical energy used for final inspection, labelling, sealing and packaging is recorded separately from upstream production energy.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity attributable to final inspection and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `ec-pef-method-2021`

###### Corrugated board box (`corrugated_box_input`)

Corrugated boxes supplied with the reference product are weighed from packaging bills of material or verified supplier specifications.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: packaging bill-of-material mass consumed for saleable product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `ec-pef-method-2021`

###### LDPE protective film (`ldpe_film_input`)

Low-density polyethylene film supplied with the reference product is weighed from packaging bills of material or verified supplier specifications.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: packaging bill-of-material mass consumed for saleable product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `ec-pef-method-2021`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Factory-gate reference product (`reference_product_output`)

The saleable article is weighed net of packaging and linked to a complete product specification; no exact public Tiangong reference-product UUID was found.

- Selected flow: Finished metal household article
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output of 1 kg net finished article
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net finished article at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`

##### Waste flows

No generic packaging-waste row is permitted. Record each actual box, film, label or rejected-product waste as a separate concrete waste exchange when generated.

##### Elementary flows

No direct elementary output is prescribed for this process.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared lines and utilities | First subdivide by process, product family, batch, meter or machine time so only inputs and outputs directly attributable to the declared product remain. | `ec-pef-method-2021` |
| `allocation_physical_relation` | inseparable shared operations | If subdivision is not possible, apply a documented relevant physical relationship: machine time or metered energy for utilities and measured mass for material losses. Demonstrate why the relationship represents causation and disclose the factor. | `ec-pef-method-2021` |
| `allocation_other_relation` | no defensible physical relationship | Use another relationship only after documenting why subdivision, system expansion and a relevant physical relationship are infeasible; report a sensitivity check and do not use an undocumented default. | `ec-pef-method-2021` |
| `allocation_scrap_boundary` | separated scrap and recovered abrasive | Record gross foreground inputs and outgoing waste or internally recovered material separately. Do not add an avoided-production credit inside this factory-gate inventory unless the downstream method and expanded boundary are explicitly declared. | `ec-pef-method-2021`; `ec-jrc-stm-bref-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `stock_receipt_and_preparation` | stainless-steel stock | scale ticket, receiving record and bill of material | receipt mass; accepted mass; alloy grade; thickness; supplier; recycled content; lot id | reconcile calibrated receiving scale with purchasing and production issue records | kg | each delivery and production lot | representative 12 consecutive months or declared campaign | all receiving points serving included production | sum attributable accepted and rejected mass, then normalize by accepted net product | scale calibration, material certificate and reconciliation log |
| `cp_process_energy` | all applicable processes | electricity | submeter or meter-group log | start and end reading; kWh; meter id; process; product lot; operating time | direct submeter preferred; otherwise documented machine-time allocation from a stable meter group | kWh and MJ | each batch or at least monthly | same period as production | all included factory processes | subtract documented non-production loads, convert kWh to MJ and normalize | meter calibration and allocation worksheet |
| `cp_intermediate_mass_transfer` | stock, forming, thermal and finishing processes | internal product transfer | scale or verified count record | gross mass; tare; item count; mean item mass; source process; destination process; lot id | weigh transfer container or convert verified counts using measured mean item mass | kg | each lot | same period as production | all included transfers | reconcile matched input and output transfers by lot | scale calibration, sampling record and transfer reconciliation |
| `cp_scrap_waste` | stock and forming processes | post-industrial steel scrap | scrap-container weight and waste-transfer record | gross mass; tare; grade; contamination; source process; destination; date | weigh segregated scrap containers before internal recycling or off-site transfer | kg | each container or shipment | same period as production | all included scrap points | sum net scrap by source process and product allocation | scale calibration and destination receipt |
| `cp_cutting_fluid` | `forming_and_trimming` | cutting fluid and waste cutting oil | inventory issue, return, recovery and waste-transfer record | issued mass; unchanged return; recovered mass; waste mass; formulation; water content; lot id | mass balance purchased or issued fluid, reusable return and off-site waste | kg | each replenishment and waste shipment | same period as production | included trimming equipment | consumed fluid equals issues minus reusable returns, adjusted for stock change | stock reconciliation and waste manifest |
| `cp_thermal_fuel` | `thermal_treatment` | natural gas | calibrated gas-meter and furnace campaign log | volume; temperature; pressure; dry or wet basis; meter id; campaign; product mass | read dedicated meter or documented shared-meter allocation | m3 | each campaign or daily | same period as thermally treated production | included furnace units | aggregate reference-condition volume by product campaign | meter calibration and conversion record |
| `cp_direct_co2` | `thermal_treatment` | fossil carbon dioxide | direct monitor or fuel-carbon calculation record | measured CO2; fuel volume; carbon content; oxidation factor; reference conditions; campaign | use direct measurement or calculate from collected fuel and documented facility-specific carbon data | kg | each campaign or reporting month | same period as fuel record | included on-site combustion sources | sum direct fossil CO2 and normalize; exclude upstream fuel and electricity emissions | monitor calibration or signed calculation sheet and supplier carbon data |
| `cp_surface_treatment_inputs` | `surface_finishing_and_cleaning` | water, sodium hydroxide and abrasive | line meter, bath log and material issue record | water; chemical solution mass; concentration; abrasive issue; recovered abrasive; bath id; product lot | meter water and reconcile chemical or abrasive issues, returns and stock change | kg | each shift or batch | same period as finished production | all included finishing operations | calculate neat chemical and net abrasive consumption, then normalize | meter calibration, bath analysis and stock reconciliation |
| `cp_wastewater` | `surface_finishing_and_cleaning` | alkaline finishing wastewater | discharge meter, tank-volume and laboratory record | wastewater mass or volume; density; pH; metal concentration; treatment; destination; time | meter discharge or use calibrated tank change with density conversion | kg | each discharge or continuously | same period as finishing production | all included finishing drains | aggregate before dilution and avoid double-counting treatment recirculation | meter calibration, laboratory report and transfer receipt |
| `cp_dust_and_pm` | `surface_finishing_and_cleaning` | captured dust and direct PM10 | filter weight, container weight, source test or validated calculation | gross and tare mass; filter change; PM10 result; airflow; run time; release point; compartment | weigh captured dust separately and measure or calculate uncaptured PM10 for the confirmed release point | kg | each filter or container change and each required source test | representative production period | all included finishing extraction points | reconcile captured and released particulate without double-counting | scale calibration, source-test report and release-point record |
| `cp_packaging_materials` | `final_inspection_and_packaging` | corrugated box and LDPE film | packaging bill of material and supplier specification | component id; unit mass; units issued; return; waste; product units; lot | verify unit mass by weighing and reconcile issues and returns | kg | each packaging lot | same period as finished production | all included packaging lines | net component mass supplied with saleable product divided by net product mass | supplier specification, sample weighing and stock reconciliation |
| `cp_finished_product` | finishing and packaging processes | inspected and reference product | final scale, item-count and release record | net product mass; item count; mean item mass; rejects; specification; packaging tare; lot id | weigh accepted dry product before packaging and reconcile released quantity | kg | each production lot | representative 12 months or declared campaign | all included product lines | sum accepted net mass and set reference output to 1 kg | scale calibration, inspection release and count-to-mass record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | normalized amount = attributable exchange amount / accepted net finished-product mass | attributable exchange; accepted net mass | exchange per 1 kg net finished article | `ec-pef-method-2021` |
| `calc_count_to_mass` | count-only records | mass = item count × measured product-specific mean item mass | item count; sampled item masses | kg product or packaging | `ec-pef-method-2021` |
| `calc_electricity_mj` | electricity | MJ = metered kWh × 3.6 | metered kWh | electricity in MJ |  |
| `calc_cutting_fluid_consumption` | cutting fluid | consumed mass = opening stock + purchases or issues - closing stock - unchanged return - clean recovered fluid | stock, issue, return and recovery records | net cutting-fluid consumption | `us-epa-fabricated-metal-sector-notebook-1995` |
| `calc_direct_fossil_co2` | natural-gas combustion | use direct measured CO2; otherwise apply the documented facility-specific fuel-carbon and oxidation calculation to collected gas | direct monitor or gas volume, carbon content and oxidation method | kg direct fossil CO2 | `ec-pef-method-2021` |
| `calc_metal_balance` | metal-bearing flows | input metal mass = net product metal + outgoing scrap + captured metal-bearing dust + direct metal release + documented stock change and retained intermediates | stock, product, scrap, dust, release and stock records | mass-balance difference and reconciliation ratio | `us-epa-fabricated-metal-sector-notebook-1995` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain product drawing or specification, material certificate, measured net mass, finish, component and packaging configuration and service-life claim. | approved specification, certificate and inspection release |
| `dq_temporal_alignment` | all foreground data | Use one common representative period; disclose campaigns, shutdowns, rework and any extrapolation. | dated production, meter, stock and waste records |
| `dq_meter_traceability` | mass, energy, water and gas | Identify each meter or scale, calibration status, resolution and allocation boundary. | current calibration certificate and meter map |
| `dq_completeness` | process inventory | Reconcile purchasing, stock change, production output and waste transfers; explain every missing or estimated exchange. | signed reconciliation and completeness checklist |
| `dq_route_specificity` | conditional processes | Document whether thermal treatment, chemical finishing, coating, joining and each packaging component applies; do not average absent operations into the product. | route sheet, batch traveller and bill of materials |
| `dq_background_linkage` | purchased inputs | Use upstream datasets compatible with material state, alloy or formulation, supplier geography, technology and delivery boundary; disclose every proxy. | dataset metadata and proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Fail the data package if product family, principal metal, alloy, net mass, route, finish, component set, factory geography, packaging or service-life qualifier is missing. | `un-cpc-3-0-2025`; `ec-pef-method-2021` |
| `validate_reference_amount` | reference flow | Confirm that the published reference output is exactly 1 kg net finished article and excludes all packaging mass. | `ec-pef-method-2021` |
| `validate_inventory_identity` | every inventory row | Require one atomic selected flow with a confirmed UUID or an explicit unresolved identity finding; reject umbrella utilities, materials, wastes or emissions. |  |
| `validate_process_coverage` | product route | Match every required process and each applicable conditional process to production records; record a justified not-applicable decision for omitted conditional stages. | `us-epa-fabricated-metal-sector-notebook-1995`; `ec-jrc-stm-bref-2006` |
| `validate_metal_balance` | metal-bearing inventory | Investigate and disclose any unreconciled difference among input stock, net product, scrap, captured dust, direct release, stock change and retained intermediate mass. | `us-epa-fabricated-metal-sector-notebook-1995` |
| `validate_utility_conversion` | electricity, gas and water | Recompute kWh-to-MJ, gas reference-condition and water volume-to-mass conversions from retained raw records. | `ec-pef-method-2021` |
| `validate_waste_destination` | all waste outputs | Require measured mass, source process, composition qualifier and treatment or recycling destination for each concrete waste flow. | `ec-jrc-stm-bref-2006` |
| `validate_ranges` | important quantitative flows | Treat the absence of two independent compatible sources as an unresolved range-evidence need; do not invent an acceptance range or use a single published case as a range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate foreground manufacturing dataset that may become a `secondary_dataset` or `background_dataset` after methodology review, UUID closure and dataset quality review |
| downstream_use | Product-specific gate-to-gate process datasets and lifecyclemodel inputs for declared metal household articles |
| allowed_use | Modelling the declared factory, product, alloy, route, finish and packaging configuration after all required qualifiers and unresolved identities are addressed |
| excluded_use | Unqualified CPC-wide averages; automatic substitution among steel, copper, aluminium and iron products; cradle-to-grave or comparative claims without distribution, use, lifetime and end-of-life modelling |
| required_metadata | PCR id; product specification; CPC context; principal metal and alloy; net mass and item count; route and conditional stages; finish and coating; site and period; energy and water supply; allocation; packaging; UUID and proxy status |
| required_quality_disclosure | Measurement coverage and calibration; count-to-mass sampling; metal balance; meter allocation; data gaps; estimates; background-dataset compatibility; waste destinations; direct-release method; unresolved UUIDs and range evidence needs |
| update_trigger | Material change in product design, alloy, supplier, forming or finishing technology, thermal route, packaging, energy or water supply, allocation, regulation, foreground period, or Tiangong flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-05 | Official CPC 42912 classification identity and listed product scope |
| `us-epa-fabricated-metal-sector-notebook-1995` | Official guidance (`official_guidance`) | U.S. EPA, Profile of the Fabricated Metal Products Industry, EPA/310-R-95-007, September 1995, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000DGC.TXT, retrieved 2026-09-05 | Metal shaping, surface preparation, finishing, material inputs, wastes and route decomposition |
| `ec-jrc-stm-bref-2006` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf, retrieved 2026-09-05 | Water-based surface-treatment process boundary, utilities, chemicals, rinsing, wastewater, sludge, dust and direct releases |
| `ec-pef-method-2021` | Standard (`standard`) | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, consolidated 30 December 2021, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230, retrieved 2026-09-05 | Functional unit, reference-flow normalization, system boundary, company-specific data, data quality and allocation hierarchy |
