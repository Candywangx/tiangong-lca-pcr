---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.scallops-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Scallops, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers edible scallop products preserved for sale by one declared primary route: frozen, smoked, dried, salted, or held in brine. The five primary route labels are mutually exclusive for a foreground data package. A selected route may include necessary ancillary steps, such as preparatory salting or drying within smoking, but those steps do not create additional primary routes. Mixed products and sequential preservation routes require a separate, explicitly documented study scope.

The foreground boundary starts with an accepted lot of raw scallops at the preservation facility and ends with qualified, packaged product released at the facility gate under its declared storage condition. Aquaculture or wild harvest, landing, and transport to the facility are represented by upstream datasets. Retail, use, and end-of-life are outside the foreground boundary unless the study expands it and discloses the expansion.

The numerical ranges below are deliberately broad, provisional authoring and QA screens with evidence kind `reasoned_estimate`. They apply only when route- and site-specific foreground records are not yet available, are not conformance limits, and must be replaced when measured batch records or reviewed source-backed ranges become available.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.scallops-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21264, exact |
| covered_products | Edible scallop meat or edible scallop portions sold frozen, smoked, dried, salted, or in brine, with the primary preservation route declared |
| excluded_products | Live, fresh, or merely chilled scallops; non-scallop molluscs; prepared meals; mixed seafood products; undeclared combinations of primary preservation routes |
| representative_product | Qualified saleable edible scallop product at the preservation facility gate |
| production_route | Exactly one primary route: `frozen`, `smoked`, `dried`, `salted`, or `brine`; route-inherent ancillary steps are disclosed |
| market_state | Packaged saleable product under the declared frozen, chilled, ambient, or other validated storage condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply preserved edible scallop product for food preparation or further food processing |
| How much | 1 kg net edible scallop product content |
| How well | Qualified and saleable for the declared primary route and product form; packaging, shell, inedible tissue, free brine, and frozen glaze are excluded from the reference mass |
| How long or cycle | One released production lot at the preservation facility gate; declared shelf-life and storage condition accompany the dataset |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the reference product flow measured under the applicable route-specific mass rule |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg qualified saleable edible product |
| Reference product flow | Scallops, frozen, smoked, dried, salted or in brine `bc4bc819-06b0-4452-bc14-5b08c6e3abf0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | scallop species or commercial designation; raw material form; primary preservation route; edible product form; in-shell status and edible yield if applicable; as-sold moisture condition; salt or brine condition; glaze fraction and deglazing method for frozen product; draining method and time for brined product; package levels; storage temperature or condition; production geography and period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record exactly 1 kg of qualified saleable edible product content, excluding all packaging, shell, inedible tissue, free liquid, and non-product ice glaze. |
| `frozen_net_mass` | frozen route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass after a documented deglazing method; record glaze mass or fraction separately and never count glaze toward the reference flow. |
| `brined_drained_mass` | brine route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use drained edible scallop mass after a declared draining method and time; record packing brine separately. |
| `route_composition` | smoked, dried, salted, and brine routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the product as sold and report moisture condition and salt content or salinity where applicable; dry-matter or salt-free comparisons are supplementary calculations and must not replace the as-sold reference mass. |
| `in_shell_conversion` | any in-shell sale form | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Exclude shell mass from the reference flow and retain measured gross mass, edible mass, and edible-yield conversion for the same lot. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted raw scallop lot at the preservation facility gate, with source, species or commercial designation, harvest system, incoming form, temperature, and mass basis declared |
| starting_condition_role | Foreground starting condition; upstream scallop production and inbound transport remain linked upstream datasets |
| product_classification_scope | Semantic preserved-scallop category aligned exactly to CPC 3.0 code 21264 without using CPC as the canonical PCR identity |
| recursive_input_rule | An input already preserved within this same category is linked once as an upstream product dataset with its route and mass basis disclosed; do not reapply this complete foreground route recursively |
| upstream_dataset_requirement | Use representative datasets for aquaculture or wild harvest, landing or primary handling, ingredients, packaging, energy, water supply, transport, and waste treatment that cross the selected study boundary |
| disclosure | Declare included and excluded stages, the one selected primary preservation route, ancillary steps, raw material form, edible-yield basis, storage condition, allocation, cut-offs, and all dataset gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_exclusivity` | foreground route | Model exactly one primary route (`frozen`, `smoked`, `dried`, `salted`, or `brine`); include only ancillary steps actually used by that route and disclose them. | `unsd-cpc-v3-2025`; `codex-cxc-52-2003` |
| `boundary_foreground` | all foreground processes | Include preparation, selected-route preservation, packaging, on-site storage to release, all known material and energy inputs, direct releases, product outputs, co-products, and waste. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream` | incoming raw scallops and supplied inputs | Keep harvest or aquaculture and inbound supply-chain burdens in linked upstream datasets; do not omit them from the expanded product system. | `eu-pef-2021-2279` |
| `boundary_exclusions` | any excluded process or flow | Avoid cut-off; any exclusion must be explicit, justified, and assessed for significance in the completed study. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_preparation` | Raw scallop reception and preparation | `required` | Always; shucking, trimming, washing, grading, or thawing only when performed at the reporting facility | Foreground raw-material preparation | per kg prepared edible scallop output |
| `route_preservation` | Route-specific preservation | `required` | Exactly one declared primary route; record only the selected route and its actual ancillary operations | Foreground preservation | per kg preserved scallop output |
| `packaging_storage` | Packaging and on-site storage to release | `required` | Packaging levels and storage regime follow the declared product route and sale condition | Foreground finishing and facility-gate release | per 1 kg reference product |

### Process: Raw scallop reception and preparation (`raw_preparation`)

#### Inputs

##### Product flows

###### Accepted raw scallops (`raw_scallops_input`)

Record the mass and form of the accepted lot entering foreground preparation, including whether it is live, chilled, frozen, in-shell, or shucked.

- Selected flow: Raw scallops, declared incoming form
- Flow property / unit: Mass / kg
- Amount rule: measured accepted-lot mass allocated to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared edible scallop output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_mass_balance`
- Sources: `codex-cxc-52-2003`
- Range: Provisional incoming-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg raw scallops/kg prepared edible output
  - Basis: broad screen spanning shucked and in-shell incoming forms; applicable only before lot-specific edible yield is available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water and ice (`preparation_water`)

Record metered or reconciled water and ice used for washing, thawing, temperature control, or other actual preparation operations.

- Selected flow: Process water and ice
- Flow property / unit: Mass / kg
- Amount rule: measured water plus ice mass attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared edible scallop output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_mass_balance`
- Sources: `codex-cxc-52-2003`
- Range: Provisional water-and-ice screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared edible output
  - Basis: only operations actually performed; replace with metered or batch-reconciled records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared edible scallops (`prepared_scallops_output`)

Calculate prepared edible output from the same-lot mass balance and carry it to the selected preservation route.

- Selected flow: Prepared edible scallops
- Flow property / unit: Mass / kg
- Amount rule: incoming raw mass minus measured shells, inedible tissues, rejects, and other separated mass, reconciled for retained or removed water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw_mass_balance`
- Range: Provisional edible-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1
  - Unit: kg prepared edible output/kg accepted raw scallops
  - Basis: broad screen spanning in-shell and shucked inputs; replace with same-lot mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shells, inedible tissues, and rejected scallops (`preparation_residues`)

Record separated material by destination; material sold as a co-product is not recorded as waste.

- Selected flow: Scallop preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured separated mass by material and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared edible scallop output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_mass_balance`
- Sources: `codex-cxc-52-2003`
- Range: Provisional residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 19
  - Unit: kg/kg prepared edible output
  - Basis: broad screen dependent on incoming form; replace with same-lot residue records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Route-specific preservation (`route_preservation`)

#### Inputs

##### Product flows

###### Prepared edible scallops (`preservation_scallops_input`)

Carry forward the prepared output without duplicating upstream scallop burdens.

- Selected flow: Prepared edible scallops
- Flow property / unit: Mass / kg
- Amount rule: measured batch input to the selected preservation route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg preserved scallop output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`

###### Route water, ice, salt, or brine ingredients (`route_ingredients`)

Record only ingredients actually used: freezing or glaze water for the frozen route, food-grade salt and water for salted or brined routes, and preparatory salt or water only when used by the smoked or dried route.

- Selected flow: Route-specific water, ice, food-grade salt, and brine ingredients
- Flow property / unit: Mass / kg
- Amount rule: measured purchased or prepared ingredient mass by component; do not combine salt and water into an undocumented brine total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved scallop output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional route-ingredient screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg total route ingredients/kg preserved output
  - Basis: applicable components depend on the selected route; replace with recipe and batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smoke-generating material (`smoke_material`)

Record wood, plant material, or smoke preparation only for the smoked route and identify the smoking technology.

- Selected flow: Smoke-generating material or smoke preparation
- Flow property / unit: Mass / kg
- Amount rule: measured consumption attributable to the smoked batch; zero or not applicable for non-smoked routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked scallop output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional smoke-material screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg smoked output
  - Basis: smoked route only; replace with equipment and batch consumption records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity and thermal energy (`preservation_energy`)

Record metered electricity and fuel or purchased heat separately for freezing, frozen storage, smoking, drying, brine preparation, pumps, and other actual route operations.

- Selected flow: Electricity and route-specific thermal energy carriers
- Flow property / unit: Energy / kWh and MJ by carrier
- Amount rule: metered or reconciled consumption by carrier and operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved scallop output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_energy`
- Sources: `eu-pef-2021-2279`
- Range: Provisional electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg preserved output
  - Basis: broad route and technology screen; replace with metered records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional thermal-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg preserved output
  - Basis: broad route and technology screen; replace with fuel or heat records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved scallop intermediate (`preserved_scallops_output`)

Measure output under the selected route's applicable mass condition and carry it to packaging.

- Selected flow: Preserved edible scallops, selected route
- Flow property / unit: Mass / kg
- Amount rule: measured output mass with moisture, salt or salinity, glaze, and draining condition recorded as applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preservation-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 2
  - Unit: kg preserved output/kg prepared scallop input
  - Basis: broad route screen reflecting water removal or uptake; replace with route-specific batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wastewater, spent brine, and preservation rejects (`preservation_waste`)

Record aqueous and solid waste separately by composition and treatment destination; do not net these flows against product output.

- Selected flow: Wastewater, spent brine, and preservation rejects
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated from same-batch water, ingredient, and mass-balance records by waste stream
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved scallop output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preservation-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg preserved output
  - Basis: route-dependent screen; replace with batch mass balance and discharge records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Packaging and on-site storage to release (`packaging_storage`)

#### Inputs

##### Product flows

###### Preserved scallop product (`packaging_product_input`)

Record the preserved product entering packaging under the same route-specific measurement condition used for the reference flow.

- Selected flow: Preserved edible scallops, selected route
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering final packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging separately by material and mass; packaging never contributes to the 1 kg reference product mass.

- Selected flow: Packaging materials by material type
- Flow property / unit: Mass / kg
- Amount rule: measured bill of materials, purchase reconciliation, or packaging-line records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 1
  - Unit: kg packaging/kg reference product
  - Basis: broad packaging-format screen; replace with product-specific bill of materials
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### On-site storage electricity (`release_storage_energy`)

Record electricity for frozen, chilled, controlled-humidity, or other on-site storage from packaging to facility-gate release.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered storage electricity allocated by occupied capacity and time, or another disclosed physical driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`
- Range: Provisional on-site storage-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg reference product
  - Basis: route- and duration-dependent screen; replace with metered storage and occupancy records
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified saleable reference product (`reference_product_output`)

Release exactly 1 kg of qualified edible scallop product under the applicable route-specific mass condition.

- Selected flow: Scallops, frozen, smoked, dried, salted or in brine `bc4bc819-06b0-4452-bc14-5b08c6e3abf0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging scrap and rejected packed product (`packaging_waste`)

Record packaging scrap and rejected packed product separately by material and treatment destination.

- Selected flow: Packaging scrap and rejected packed scallop product
- Flow property / unit: Mass / kg
- Amount rule: measured scrap and rejected-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Range: Provisional packaging-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg reference product
  - Basis: broad line-loss screen; replace with packaging-line records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional foreground operations | First avoid allocation through process subdivision or, where justified by the study goal, system expansion. | `eu-pef-2021-2279` |
| `allocation_physical` | inseparable shared inputs and emissions | If subdivision or system expansion is not feasible, allocate using a documented physical relationship that reflects the function causing the shared burden. | `eu-pef-2021-2279` |
| `allocation_other` | no defensible physical relationship | Use another relationship, including economic allocation, only after documenting why the preceding options fail, the prices and period used, and sensitivity to the choice. | `eu-pef-2021-2279` |
| `allocation_residue_status` | shells, trimmings, spent brine, and rejected product | Classify each output as product, co-product, or waste at the point it leaves the process; do not allocate upstream burdens to a waste flow, but include its handling and treatment. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_mass_balance` | `raw_preparation` | incoming scallops, water or ice, prepared output, residues | batch mass balance | lot id; species; incoming form; gross mass; edible mass; shell and reject mass; water and ice; temperature | calibrated scales, meters, production and disposition records | kg; °C | each lot or batch | representative reporting period including normal variation | reporting facility and contracted preparation under operational control | reconcile inputs, outputs, retained water, and losses per batch, then production-weight | scale and meter calibration; lot traceability; reconciliation residual |
| `cp_preservation_batch` | `route_preservation` | ingredients, preserved output, and waste | route batch record | route; ancillary steps; recipe masses; input and output masses; moisture; salt or salinity; glaze; drain method and time; wastewater; rejects | calibrated scales, formulation records, laboratory or validated plant measurements | kg; mass fraction; salinity | each batch | representative reporting period by route | reporting facility and declared preservation line | calculate each route separately; do not average across primary routes | calibration; recipe issue record; test method; route-specific mass balance |
| `cp_preservation_energy` | `route_preservation` | electricity, fuels, heat, and direct releases | meter and fuel record | meter readings; fuel quantity; energy carrier; equipment; operating time; batch throughput; direct emission measurement or factor | submeter, invoice reconciliation, fuel log, and emission monitoring or calculation | kWh; MJ; carrier unit; kg emission | each batch or production period | representative reporting period by route and season | preservation equipment and shared utilities at reporting facility | direct meter where available; otherwise allocate by a disclosed physical driver | meter calibration; invoices; runtime log; factor identity |
| `cp_packaging_release` | `packaging_storage` | product mass, packaging, storage energy, scrap, and release condition | packaging and release record | product mass; package material and mass; scrap; storage temperature or humidity; entry and release time; occupied capacity; electricity; final quality release | bill of materials, line counts and scales, storage meter and inventory records, release certificate | kg; item; kWh; °C; hour or day | each packaging lot and storage period | representative reporting period | packaging line and on-site storage to facility gate | normalize material and allocated storage energy to compliant released product | bill-of-material revision; scale and meter calibration; inventory reconciliation; release evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | released product | Frozen: deglazed net edible mass; brine: drained edible mass; other routes: as-sold edible mass. Exclude package, shell, inedible tissue, free brine, and glaze. | measured gross, excluded fractions, route-specific test condition | kg reference product | `codex-cxc-52-2003` |
| `calc_inventory_normalization` | each foreground flow | flow amount attributed to conforming output divided by conforming reference-product mass | batch flow amount; allocation factor if any; released reference-product mass | flow amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_route_mass_balance` | preparation and preservation | reconcile measured inputs with products, co-products, waste, wastewater, evaporation, glaze, and free brine; investigate and disclose residuals | same-batch mass records and composition conditions | reconciled route mass balance | `codex-cxc-52-2003` |
| `calc_shared_storage` | on-site storage | allocate metered storage energy using occupied capacity multiplied by residence time unless a more direct meter is available | storage electricity; occupied capacity; residence time | kWh per 1 kg reference product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_route` | product and process identity | Preserve lot traceability and declare species or commercial designation, incoming form, one primary route, ancillary operations, product form, geography, and period. | lot records; route records; product specification |
| `dq_mass_condition` | reference and yield measurements | Use calibrated mass measurements and retain applicable glaze, drainage, moisture, salt or salinity, and edible-yield conditions; never compare route yields without reconciling these bases. | calibration records; test methods; same-lot mass balance |
| `dq_completeness` | foreground inventory | Account for all known material, water, energy, direct release, product, co-product, and waste flows; document and assess exclusions. | reconciliations; meters; invoices; waste manifests; limitation log |
| `dq_temporal_technology` | foreground activity data | Use a reporting period representative of normal operation and route technology, including relevant seasonal or storage variation. | production calendar; equipment identity; coverage statement |
| `dq_reasoned_estimates` | all provisional ranges | Treat every `reasoned_estimate` only as a temporary authoring or QA screen. Disclose any use and replace it when route- and site-specific records or reviewed source-backed evidence become available. | dataset limitation statement; replacement review record |
| `dq_storage_shelf_life` | released product | Declare validated storage condition and shelf-life; if an expanded PEF study models downstream loss, include packaging and shelf-life effects consistently. | product specification; release certificate; shelf-life evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require product flow UUID `bc4bc819-06b0-4452-bc14-5b08c6e3abf0`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and amount 1. |  |
| `validate_route` | dataset identity | Require exactly one primary route and reject undeclared route combinations; require only route-relevant process inputs and conditions. | `unsd-cpc-v3-2025`; `codex-cxc-52-2003` |
| `validate_mass_basis` | reference product | Reject reference mass that includes packaging, shell, inedible tissue, free brine, or glaze; require the applicable deglazing, draining, moisture, salt, and edible-yield disclosures. | `codex-cxc-52-2003` |
| `validate_process_coverage` | foreground inventory | Require all three process ids and actual material, energy, product, waste, and direct-release records for the selected route, or an explicit justified zero/not-applicable statement. | `eu-pef-2021-2279` |
| `validate_mass_balance` | preparation and preservation | Require reconciled, same-condition mass balances; unexplained residuals and cross-route averaging are findings. | `codex-cxc-52-2003` |
| `validate_allocation` | multifunctional operations | Require the allocation hierarchy, factor, basis, period, and sensitivity where allocation is used. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | any `reasoned_estimate` used | Require explicit provisional disclosure and a replacement trigger; a provisional range cannot be asserted as a publication-critical allowed interval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground preserved-scallop production dataset at the preservation facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA process or lifecyclemodel projections whose product form, primary preservation route, mass condition, geography, period, technology, and storage regime match the dataset |
| excluded_use | Live, fresh, or merely chilled scallops; other molluscs; prepared meals; mixed routes; cross-route comparison without harmonized moisture, salt, glaze, drainage, edible-yield, packaging, and boundary conditions |
| required_metadata | PCR id; reference UUIDs; CPC reference; species or commercial designation; raw form and source system; primary route and ancillary steps; product form; measurement conditions; package bill; storage condition and shelf-life; geography; period; technology; allocation and cut-offs |
| required_quality_disclosure | Foreground coverage and representativeness; calibration and test methods; same-lot mass-balance residuals; upstream datasets; allocation; exclusions; proxies; uncertainty; all retained reasoned estimates and replacement triggers |
| update_trigger | Changed product flow identity or reference property; changed route, formulation, packaging, storage, technology, or regulation; material foreground data shift; availability of measured records or reviewed source-backed ranges that replace reasoned estimates |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21264, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Official category title and alternative preservation-route scope |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (retrieved 2026-08-11) | Bivalve reception and preparation; freezing, glazing and net mass; salting, brining, drying, smoking, packaging, storage, and route-specific measurement controls |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint method, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Functional unit and reference flow; system boundary; company-specific data; normalization; allocation hierarchy; exclusions and data quality |
