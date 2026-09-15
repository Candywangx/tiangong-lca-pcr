---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-inedible-of-fish-crustaceans-molluscs-or-other-aquatic-invertebrates
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Flours, meals and pellets, inedible, of fish, crustaceans, molluscs or other aquatic invertebrates

## 1. Scope and Applicability

This PCR covers factory-gate production of flours, meals and pellets explicitly inedible for humans and made from fish, crustaceans, molluscs or other aquatic invertebrates. It covers products corresponding exactly to CPC 3.0 subclass 21291, including mixed-species material when its aquatic-animal composition is declared. Feed and technical destinations may be represented when the product remains explicitly non-food.

Edible fish meal, edible seafood powders, food ingredients, products made primarily from aquatic plants, fish oil as the reference product, and unspecified meal that cannot be demonstrated to be inedible are excluded. This PCR does not establish food or feed safety, legal marketability, nutritional performance, or conformity with destination-specific regulation.

The foreground boundary begins with accepted aquatic raw material at the production facility and ends with 1 kg net reference product at the factory gate. Upstream fishing, aquaculture, collection, supplier processing and inbound transport, and downstream use and end-of-life remain outside the foreground process map but shall be represented by compatible upstream or downstream datasets when required by the study scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-inedible-of-fish-crustaceans-molluscs-or-other-aquatic-invertebrates |
| classification_refs | CPC 3.0: 21291 (exact) |
| covered_products | Inedible flours, meals and pellets made from fish, crustaceans, molluscs or other aquatic invertebrates, including declared mixtures |
| excluded_products | Edible fish meal or seafood powder; food ingredients; aquatic-plant meals; fish oil as reference product; products without a demonstrated inedible/non-food identity |
| representative_product | Factory-gate inedible aquatic-animal meal, with flour or pellet form declared when applicable |
| production_route | Exactly one conversion route per dataset: wet thermal rendering with pressing and drying, or direct drying and milling without a pressing stage; final sizing or pelletizing follows the selected route |
| market_state | Dry loose or packaged flour, meal or pellet for declared non-food use at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Inedible flour, meal or pellets made from fish, crustaceans, molluscs or other aquatic invertebrates |
| How much | 1 kg net product mass at the factory gate |
| How well | Meets the producer's declared product specification and is explicitly identified as inedible/non-food; product form, source composition and route are declared |
| How long or cycle | One production lot at factory-gate release; no service duration applies |
| reference_flow_link | `inedible_aquatic_animal_flour_meal_or_pellets` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Flours, meals and pellets, inedible, of fish, crustaceans, molluscs or other aquatic invertebrates `c14df87e-86ae-4718-a6a6-f8808c8fe661` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Explicit inedible/non-food identity and intended non-food destination; flour, meal or pellet form; fish/crustacean/mollusc/other aquatic-invertebrate composition and mixed-species status; selected conversion route; net mass basis and factory-gate condition; moisture content and measurement basis; salt content or salinity when salted or brined material affects mass or yield; packaging inclusion or exclusion; gross, deglazed or drained mass and treatment of ice glaze or free liquid when applicable |

When constructing a foreground data package, every applicable required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field. Ice glaze, free liquid and packaging shall not be included in the 1 kg net reference mass unless the declared commercial specification explicitly requires a different basis and a conversion to 1 kg net product is provided. Missing applicable qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net product at factory-gate release. Exclude packaging, free liquid and removable ice glaze; where material is sold glazed or in liquid, record gross and deglazed or drained mass and document the conversion. |
| `moisture_basis` | Reference product and route mass balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record moisture fraction, test method, sampling point and whether each mass is wet-basis or dry-matter-basis; do not mix bases within yield, allocation or mass-balance calculations. |
| `salt_and_liquid_basis` | Salted, brined, washed or marine-source material | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record added salt or salinity and free-liquid treatment when they materially affect net mass, drying demand or yield; convert all quantities to the declared net product basis. |
| `inventory_normalization` | All foreground inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured source units, then normalize each lot or period total by conforming net reference-product output; keep electricity, fuel and water carrier units explicit before conversion. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground_processes | Include receiving/preparation, exactly one conversion route, and final sizing or pelletizing through factory-gate release; include applicable utilities, packaging, rejects, wastes, co-products and direct emissions. | `codex-cxc-52-2003` |
| `boundary_upstream_completeness` | upstream_inputs | Do not treat upstream aquatic raw material, energy, water, packaging or transport burdens as zero merely because they are outside the foreground process map; link compatible upstream datasets and disclose exclusions and cut-offs. | `eu-pef-2021-2279` |
| `boundary_non_food_identity` | product_scope | Keep the reference product explicitly inedible/non-food and separate from edible fish meal or seafood powder in flow identity, dataset name, product specification and intended-use metadata. | `unsd-cpc-3-0-21291` |
| `boundary_route_exclusivity` | conversion_route | Select either `wet_thermal_conversion` or `direct_drying_conversion` for one product lot or dataset segment; never sum both routes for the same material. Separate and mass-weight route segments before aggregation when a facility operates both. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Aquatic-animal raw material accepted at the facility gate, with source composition, physical state, prior preservation or supplier processing, moisture, salt/brine condition, ice glaze/free liquid and inedible status declared as applicable |
| starting_condition_role | Foreground entry condition for facility conversion; it is not a claim of burden-free raw material |
| product_classification_scope | Output exactly within CPC 3.0 subclass 21291; the PCR identity remains independent of CPC |
| recursive_input_rule | If an input already meets this PCR product definition, record it as a same-category upstream product with its own dataset and do not recreate its upstream production inside the receiving process; disclose input and output quantities to prevent recursion and double counting |
| upstream_dataset_requirement | Use supplier-specific or representative datasets for aquatic raw material, electricity, fuels, water, packaging and transport required by the study; state geography, technology, time period and allocation status |
| disclosure | Declare source-material origin and status, selected mutually exclusive route, gate condition, applicable exclusions and cut-offs, co-product/waste classification, net-mass conversion, moisture basis, salt/brine condition, glaze/drained-mass treatment and data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receiving` | Raw material receiving and preparation | required | All datasets | Foreground receiving, inspection, thawing/draining when applicable, size reduction and transfer | kg accepted aquatic raw material and kg prepared material |
| `wet_thermal_conversion` | Wet thermal conversion, pressing and drying | conditional | Select when the declared route cooks or thermally treats wet material and separates liquid or oil before drying; mutually exclusive with `direct_drying_conversion` for the same material | Foreground conversion route | kg dried meal intermediate |
| `direct_drying_conversion` | Direct drying and milling | conditional | Select when material is dried and milled without a pressing/separation stage; mutually exclusive with `wet_thermal_conversion` for the same material | Foreground conversion route | kg dried meal intermediate |
| `final_conditioning` | Final sizing, optional pelletizing and release | required | All datasets; pelletizing and packaging rows apply only when performed | Foreground final conditioning and factory-gate release | 1 kg net conforming reference product |

### Process: Raw material receiving and preparation (`raw_material_receiving`)

#### Inputs

##### Product flows

###### Accepted inedible aquatic-animal raw material (`accepted_aquatic_raw_material`)

Record lot-specific fish, crustacean, mollusc or other aquatic-invertebrate material crossing the facility gate. Keep source composition, prior processing, inedible status, moisture, salt/brine and glaze/free-liquid condition with the record.

- Selected flow: Aquatic-animal raw material (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted wet or declared dry mass by lot, before preparation losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional raw-material yield screen; applies only until a complete representative lot mass balance is available and shall then be replaced by reviewed foreground yield evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg accepted raw material/kg net product
  - Basis: broad wet- or dry-material screen per 1 kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared material transferred to the selected route (`prepared_material_output`)

Calculate the mass transferred after draining, sorting and size reduction. Transfer it to exactly one conversion route.

- Selected flow: Prepared aquatic-animal material (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: accepted mass minus measured rejects, removed free liquid and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`

##### Waste flows

###### Receiving rejects and removed foreign material (`receiving_rejects`)

Record rejected raw material, foreign matter and separately removed material by actual treatment destination; do not classify a marketable output as waste.

- Selected flow: Receiving rejects (site-selected Tiangong waste flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by lot and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted raw material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Range: Provisional reject-fraction screen; applies only when calibrated reject weighing is unavailable and shall be replaced when representative lot records exist
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg accepted raw material
  - Basis: reject mass fraction of accepted raw material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Wet thermal conversion, pressing and drying (`wet_thermal_conversion`)

#### Inputs

##### Product flows

###### Prepared material for wet thermal conversion (`wet_route_material_input`)

Record only material assigned to this route. The same material shall not enter `direct_drying_conversion`.

- Selected flow: Prepared aquatic-animal material (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured route-feed mass reconciled to `prepared_material_output`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Sources: `codex-cxc-52-2003`

###### Wet-route electricity (`wet_route_electricity`)

Record metered or allocated electricity for cooking controls, pressing, pumping, drying auxiliaries and milling on this route.

- Selected flow: Electricity, supplied (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: route-metered electricity or allocation from a documented submetering calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional electricity screen; applies only before representative route metering and shall be replaced when metered campaign data are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg dried meal intermediate
  - Basis: broad first-pass wet-route electricity screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-route thermal energy carriers (`wet_route_thermal_energy`)

Record each purchased steam, heat or fuel carrier separately; record direct combustion emissions under the corresponding elementary flows.

- Selected flow: Thermal energy carrier (carrier-specific Tiangong flow; UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: metered carrier consumption and lower- or higher-heating-value convention as declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional thermal-energy screen; applies only before representative route metering and shall be replaced when carrier-specific metered data are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg dried meal intermediate
  - Basis: broad first-pass wet-route thermal-energy screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Dried meal intermediate from wet route (`wet_route_intermediate`)

Measure dried intermediate sent to final conditioning and record moisture at the transfer point.

- Selected flow: Inedible aquatic-animal meal intermediate (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional intermediate-yield screen; applies only until complete route mass balances are reviewed and shall then be replaced by facility evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.03
  - Upper: 1
  - Unit: kg/kg prepared material
  - Basis: wet-route intermediate yield on declared moisture bases
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered oil or other marketable co-product (`wet_route_coproduct`)

Record each marketable separated output independently. If none is produced, record the row as not applicable rather than assigning zero burden by assumption.

- Selected flow: Recovered aquatic-animal co-product (co-product-specific Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured saleable co-product mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional co-product-yield screen; applies only where a co-product is recovered and shall be replaced when representative separation records exist
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.6
  - Unit: kg/kg prepared material
  - Basis: co-product mass fraction on the declared wet or dry basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wet-route wastewater and non-marketable residues (`wet_route_waste`)

Record wastewater and solid residues separately in the foreground dataset by treatment destination; this card defines their common collection rule, not a combined database flow.

- Selected flow: Wastewater or process residue (waste-specific Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharge or transfer quantity for each waste type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional waste-output screen; applies only before waste-specific measurement and shall be replaced by monitored discharge and transfer records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg dried meal intermediate
  - Basis: broad screen including separated water from wet material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct wet-route emissions (`wet_route_direct_emissions`)

Record each measured or calculated direct combustion, drying or dust emission as its own elementary flow when it crosses the environment boundary.

- Selected flow: Direct emission (substance-specific Tiangong elementary flow; UUID unresolved)
- Flow property / unit: substance-specific property / substance-specific unit
- Amount rule: monitored value or calculation from collected carrier use and a reviewed factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_route_records`

### Process: Direct drying and milling (`direct_drying_conversion`)

#### Inputs

##### Product flows

###### Prepared material for direct drying (`direct_route_material_input`)

Record only material assigned to direct drying without a pressing/separation stage. The same material shall not enter `wet_thermal_conversion`.

- Selected flow: Prepared aquatic-animal material (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured route-feed mass reconciled to `prepared_material_output`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_route_records`

###### Direct-route electricity and thermal carriers (`direct_route_energy`)

Record electricity and each thermal carrier as separate product-flow exchanges in the foreground dataset, using this common route collection rule.

- Selected flow: Electricity or thermal energy carrier (carrier-specific Tiangong flow; UUID unresolved)
- Flow property / unit: Energy / kWh or MJ, retained by carrier
- Amount rule: metered carrier-specific consumption; do not sum unlike units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_route_records`
- Range: Provisional combined route-energy screen; applies only for first-pass completeness review and shall be replaced by separate carrier-specific ranges when representative metering exists
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 60
  - Unit: MJ-equivalent/kg dried meal intermediate
  - Basis: screening conversion only; source carrier units remain authoritative
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Dried meal intermediate from direct route (`direct_route_intermediate`)

Measure dried and milled intermediate sent to final conditioning and record moisture at the transfer point.

- Selected flow: Inedible aquatic-animal meal intermediate (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_route_records`
- Range: Provisional direct-route yield screen; applies only until complete route mass balances are reviewed and shall then be replaced by facility evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.03
  - Upper: 1
  - Unit: kg/kg prepared material
  - Basis: direct-route intermediate yield on declared moisture bases
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Direct-route rejects and collected fines (`direct_route_waste`)

Record non-recycled rejects, dust-control residues and off-specification material by treatment destination; internal recycle is recorded separately and not double counted as waste.

- Selected flow: Direct-route process waste (waste-specific Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste transfer minus documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_route_records`
- Range: Provisional direct-route waste screen; applies only before representative waste weighing and shall be replaced when route-specific records exist
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg dried meal intermediate
  - Basis: non-recycled route-waste fraction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct drying emissions (`direct_route_direct_emissions`)

Record each measured or calculated direct combustion or particulate emission as its own elementary flow when it crosses the environment boundary.

- Selected flow: Direct emission (substance-specific Tiangong elementary flow; UUID unresolved)
- Flow property / unit: substance-specific property / substance-specific unit
- Amount rule: monitored value or calculation from collected carrier use and a reviewed factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried meal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_route_records`

### Process: Final sizing, optional pelletizing and release (`final_conditioning`)

#### Inputs

##### Product flows

###### Intermediate from the selected route (`selected_route_intermediate`)

Receive intermediate from exactly one route per lot or separately metered dataset segment.

- Selected flow: Inedible aquatic-animal meal intermediate (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured input reconciled to the selected route output and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conditioning_records`

###### Final-conditioning electricity (`final_conditioning_electricity`)

Record electricity for final milling, sieving, optional pelletizing, cooling and packing when performed.

- Selected flow: Electricity, supplied (site-selected Tiangong flow; UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented equipment-level calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conditioning_records`
- Range: Provisional final-conditioning electricity screen; applies only before representative metering and shall be replaced when product-form-specific records exist
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh/kg net product
  - Basis: broad sizing, pelletizing and packing electricity screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging material (`packaging_input`)

Include each packaging material only when packaging is supplied with the factory-gate product; exclude packaging mass from the 1 kg net product.

- Selected flow: Packaging material (material-specific Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or purchase-reconciled packaging consumption net of unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conditioning_records`
- Range: Provisional packaging screen; applies only to packaged product before specification-backed packaging data exist and shall then be replaced by bill-of-material records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net product
  - Basis: packaging supplied per 1 kg net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conforming inedible aquatic-animal flour, meal or pellets (`inedible_aquatic_animal_flour_meal_or_pellets`)

Release the reference product only after confirming its non-food identity, declared product form and required mass-basis qualifiers.

- Selected flow: Flours, meals and pellets, inedible, of fish, crustaceans, molluscs or other aquatic invertebrates `c14df87e-86ae-4718-a6a6-f8808c8fe661`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: fixed reference output of 1 kg net conforming product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Final rejects and non-recycled fines (`final_conditioning_waste`)

Record off-specification product, packaging losses and non-recycled fines separately by treatment destination.

- Selected flow: Final-conditioning waste (waste-specific Tiangong flow; UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass minus documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conditioning_records`
- Range: Provisional final-reject screen; applies only before representative reject weighing and shall be replaced when product-form-specific records exist
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg net product
  - Basis: non-recycled final reject fraction
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | route_and_process_outputs | Avoid allocation by route separation, process subdivision and direct metering wherever outputs can be separately modelled. Keep the two conversion routes separate before any facility-level aggregation. | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | unavoidable_multi_output_process | When subdivision is not possible, use a documented causal physical relationship between inputs/emissions and outputs. If no defensible physical relationship exists, use an economic or other justified relationship, disclose prices and period, and test sensitivity. | `eu-pef-2021-2279` |
| `allocation_output_classification` | coproduct_waste_and_internal_recycle | Classify marketable recovered oil or other usable output as a co-product, treatment-bound material as waste, and same-process recirculation as internal recycle. Do not double count internal recycle or assign zero upstream burden solely from a residue label. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `raw_material_receiving` | accepted material, prepared transfer, removed liquid and rejects | lot ticket, scale record, inspection and specification record | lot_id; source composition; inedible status; gross_mass; net/drained/deglazed_mass; moisture; salt_or_salinity; free_liquid_or_glaze; rejects; inventory_change | calibrated weighing plus lot inspection and representative sampling | kg and declared fractions | each lot | representative production period including material variability | all included receiving points | reconcile accepted input to prepared transfer, rejects, removed liquid and stock change; normalize to net reference output | scale calibration; sampling/test method; lot traceability; reconciliation sign-off |
| `cp_wet_route_records` | `wet_thermal_conversion` | route feed, utilities, intermediate, co-products, wastes and direct emissions | batch log, meter, invoice, laboratory result and waste record | batch_id; feed_mass; feed_moisture; electricity; carrier_energy; water; intermediate_mass/moisture; co-product_mass; wastewater; residue; emission_activity_data; inventory_change | route submetering and batch mass balance; calculate emissions only with reviewed factors | kg, kWh, MJ and substance-specific units | each batch or meter interval | representative operating period covering load and raw-material variability | all equipment assigned to wet route | aggregate only compatible batches; normalize to dried intermediate and then net reference output | meter calibration; carrier conversion convention; moisture method; mass-balance closure; factor identity |
| `cp_direct_route_records` | `direct_drying_conversion` | route feed, energy, intermediate, wastes and direct emissions | batch log, meter, invoice, laboratory result and waste record | batch_id; feed_mass/moisture; electricity; thermal_carrier; intermediate_mass/moisture; rejects; fines; emission_activity_data; inventory_change | route submetering and batch mass balance; keep energy carriers separate | kg, kWh, MJ and substance-specific units | each batch or meter interval | representative operating period covering load and raw-material variability | all equipment assigned to direct route | aggregate only compatible batches; normalize to dried intermediate and then net reference output | meter calibration; moisture method; mass-balance closure; factor identity |
| `cp_final_conditioning_records` | `final_conditioning` | selected intermediate, sizing/pelletizing energy, packaging, product and rejects | production order, meter, bill of materials, scale and release specification | lot_id; route_id; intermediate_mass/moisture; electricity; product_form; packaging_by_material; gross_mass; net_mass; product_moisture; salt_or_salinity; rejects; inventory_change | calibrated weighing, metering, packaging reconciliation and release sampling | kg, kWh and declared fractions | each production lot | same representative period as selected route | all final-conditioning and packing lines in scope | reconcile route input to net product, rejects and stock change; exclude packaging/free liquid/removable glaze from reference mass | scale/meter calibration; bill of materials; release test; route traceability; reconciliation sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | factory-gate product | net_reference_mass = gross_mass - packaging_mass - removable_glaze_mass - free_liquid_mass; use direct net weighing when available and retain the reconciliation | gross_mass; packaging_mass; removable_glaze_mass; free_liquid_mass; direct_net_mass | kg net reference product |  |
| `calc_dry_matter` | each material balance point | dry_matter_mass = measured_mass × (1 - moisture_mass_fraction); apply only when moisture is expressed as a 0-to-1 wet-basis mass fraction and preserve the test method | measured_mass; moisture_mass_fraction; basis declaration | kg dry matter |  |
| `calc_normalized_exchange` | each inventory exchange | normalized_amount = compatible-period exchange amount / compatible-period net conforming reference-product output | exchange amount; net output; route and period identifiers | amount per 1 kg net reference product | `eu-pef-2021-2279` |
| `calc_mass_balance` | each process and full foreground system | discrepancy = inputs + opening_stock - products - co-products - wastes - removed_liquids - closing_stock; calculate on both declared wet mass and dry matter when moisture changes materially | all mass inputs/outputs; stock change; moisture data | signed and percentage discrepancy with investigation note |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | all lots | Preserve source composition, inedible/non-food status, route, product form, destination, lot links and applicable moisture/salt/glaze/drained-mass facts from receipt through release. | Lot genealogy, specifications, inspection and release records; `unsd-cpc-3-0-21291`; `codex-cxc-52-2003` |
| `dq_measurement_basis` | mass, moisture and utility data | Use calibrated equipment or documented invoice reconciliation; identify sampling and test methods, energy conversion convention, missing intervals and estimation method. | Calibration, laboratory, meter and invoice records |
| `dq_temporal_and_operating_coverage` | foreground dataset | Cover a representative production period and relevant source-material, load, route and seasonal variability; disclose shutdown, start-up, abnormal and excluded periods. | Production calendar, batch list and coverage reconciliation; `eu-pef-2021-2279` |
| `dq_completeness_and_balance` | process and facility inventory | Reconcile all material outputs, co-products, wastes, removed liquid, internal recycle and inventory change; investigate unexplained discrepancies and disclose unresolved gaps. | Wet-mass and dry-matter balances, waste manifests and inventory records |
| `dq_background_representativeness` | linked upstream datasets | Document geography, technology, reference year, allocation status and compatibility for aquatic material, energy, water, packaging and transport datasets. | Dataset metadata and selection rationale; `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Require exactly 1 kg net output with product flow UUID `c14df87e-86ae-4718-a6a6-f8808c8fe661`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` and unit kg. |  |
| `validate_inedible_scope` | product_identity | Reject a dataset presented as edible fish meal, seafood powder or other food ingredient, or lacking an explicit inedible/non-food declaration. | `unsd-cpc-3-0-21291` |
| `validate_route_selection` | process_map | Require exactly one of `wet_thermal_conversion` and `direct_drying_conversion` for each lot or separately modelled segment; require `raw_material_receiving` and `final_conditioning`. |  |
| `validate_required_qualifiers` | reference_flow | Require every applicable qualifier, including net mass, moisture basis, salt/salinity, packaging and gross/deglazed/drained mass treatment; mark non-applicable conditions explicitly. |  |
| `validate_mass_and_transfer_balance` | foreground_inventory | Reconcile transfers between processes and calculate wet-mass and, when material, dry-matter balances; flag unexplained discrepancy for review rather than silently scaling outputs. |  |
| `validate_allocation_and_output_class` | multi_output_processes | Require subdivision or a documented allocation relation and consistent co-product, waste and internal-recycle classification; prohibit double counting. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | reasoned_estimate_ranges | Treat every `reasoned_estimate` range as a non-conformance screen only; replace it when representative foreground or reviewed external evidence becomes available and never use it as a publication-critical allowed range without explicit review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product dataset for factory-gate production of CPC 3.0 21291 inedible aquatic-animal flour, meal or pellets |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA modelling of a declared non-food product made by one compatible route, product form, raw-material composition and factory-gate condition; aggregation only after route-specific modelling and mass-weighting |
| excluded_use | Edible fish meal, edible seafood powder, food ingredients, aquatic-plant meal, fish oil as reference product, safety or nutritional claims, or facilities/routes materially inconsistent with declared metadata |
| required_metadata | Canonical PCR id; CPC 3.0 21291 reference; product UUID; inedible status and intended destination; aquatic source composition; product form; route; facility geography/technology/time; net mass and moisture basis; salt/salinity and gross/deglazed/drained mass treatment when applicable; packaging basis; allocation; cut-offs; data quality; unresolved gaps |
| required_quality_disclosure | Foreground coverage and representativeness; meter/scale/test basis; wet- and dry-mass closure; allocation and co-product/waste classification; background dataset selection; provisional reasoned-estimate rows and their replacement status |
| update_trigger | Rebuild or segment the dataset when route, equipment, fuel/electricity supply, source-material mix or condition, moisture/salt specification, yield, co-product recovery, product form, packaging or allocation materially changes; replace each provisional range when representative measured or reviewed external evidence becomes available |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21291` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21291, “Flours, meals and pellets, inedible, of fish, crustaceans, molluscs or other aquatic invertebrates” | Exact category identity and separation from edible products |
| `codex-cxc-52-2003` | Standard (`standard`) | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, current applicable revision | Directly related aquatic raw-material receiving, condition/traceability and process-control structure; used only as process evidence and not to confer food status |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method, CELEX 32021H2279 | System-boundary completeness, foreground data quality, normalization and allocation hierarchy |
