---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peaches-otherwise-prepared-or-preserved
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Peaches, otherwise prepared or preserved

## 1. Scope and Applicability

This PCR applies to peach products that are prepared or preserved for sale and remain identifiable as a peach-based product at the facility gate. It covers route-specific operations from receipt of peaches or a declared peach intermediate through preparation, preservation, packing, and release of the finished product. Canned peaches are one covered route; they do not define the whole category.

The PCR excludes fresh peaches, solely frozen or dried peaches, sugar-preserved products, jams, jellies, marmalades, beverages, and mixed-fruit products when they belong to another product category. Agricultural production, manufacture of purchased ingredients and packaging, distribution, retail, consumer use, and end-of-life are outside the foreground boundary and are represented by linked upstream or downstream datasets when required by the study.

Each foreground data package shall describe one homogeneous preservation route and product specification. A canned heat-preservation route and another preservation route are mutually exclusive for one reference product dataset; facilities using both shall create separate route-specific datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peaches-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0: 21492, Peaches, otherwise prepared or preserved |
| covered_products | Prepared or preserved peach products, including a declared canned-stone-fruit route and other declared preservation routes that remain within this semantic category |
| excluded_products | Fresh, solely frozen, solely dried, sugar-preserved, jam, jelly, marmalade, beverage, or mixed-fruit products classified elsewhere |
| representative_product | Route-specific prepared or preserved peach product in its marketable form |
| production_route | Exactly one of `canned_heat_preservation` or `other_declared_preservation`; the routes shall not be combined in one reference product dataset |
| market_state | Finished, preserved, and packed product at the producing facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a route-specific prepared or preserved peach product in its declared marketable form |
| How much | 1 kg net peach product on the declared mass basis, excluding primary and secondary packaging mass |
| How well | Conforming to the producer's declared product specification; canned-route products additionally declare the applicable CXS 242-2003 form and packing medium |
| How long or cycle | One completed production batch or campaign through release at the producing facility gate; no storage duration or shelf-life service is implied |
| reference_flow_link | The functional unit is realized by the single Tiangong product flow and mass reference object below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Peaches, otherwise prepared or preserved `91d82100-aaec-459c-b815-abd64025b71e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | preservation route; peach form or particle form; packing medium or formulation; total-net-content or drained-solids mass basis for products in liquid medium; primary packaging type; feedstock condition at receipt; production geography; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass excluding packaging. For product in a liquid medium, declare whether the reference amount is total net contents or drained peach solids; do not convert between these bases without paired measured values. |
| `batch_mass_consistency` | peach, ingredient, intermediate, product, co-product, and waste masses | Mass | kg | Preserve the recorded as-received or other declared moisture/state basis and use one consistent batch boundary before normalization to 1 kg reference product. |
| `energy_record_consistency` | electricity, steam, heat, and fuel inputs | Energy or fuel-specific property | recorded unit plus MJ or kWh when converted | Retain meter or invoice units, conversion factor, and conversion source; do not treat electricity, thermal energy, and fuel mass or volume as interchangeable. |
| `route_and_pack_separation` | route and packaging observations | Route and packaging descriptors | not applicable | Keep records separated by the declared preservation route, product form, packing medium or formulation, and primary package; allocate shared records only under section 7. |

## 5. System Boundary

The foreground boundary begins with peaches or a declared peach intermediate received at the processing facility and ends with the released prepared or preserved peach product at the producing facility gate. It includes directly controlled receiving, sorting, preparation, preservation, packing, finished-product handling, on-site utilities, wastes, wastewater, and direct emissions. Purchased peaches, ingredients, utilities, packaging, waste treatment, and transport outside direct control are linked as upstream or downstream datasets rather than silently omitted.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Peaches or a peach intermediate at facility receipt, with product state, supplier, origin, moisture or packing-medium condition where relevant, and measured received mass declared |
| starting_condition_role | Foreground entry condition and traceability anchor; agricultural cultivation or prior intermediate production remains upstream |
| product_classification_scope | Prepared or preserved peach products within the semantic scope corresponding to CPC 3.0 subclass 21492 |
| recursive_input_rule | Record a purchased prepared or preserved peach input in the same category as a separate product input and link its supplier dataset; do not expand it again inside the receiving foreground process |
| upstream_dataset_requirement | Link datasets for peaches or peach intermediates, recipe ingredients, processing aids, energy carriers, water supply, packaging, inbound transport when in scope, and treatment of exported waste or wastewater |
| disclosure | Declare starting product condition, selected exclusive preservation route, product form, packing medium or formulation, mass basis, primary package, facility geography, reference period, and all excluded or externally treated operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | all foreground processes | Include all directly controlled operations and utilities from declared facility receipt through release of the packed product, including measured rejects, wastewater, and direct emissions. | `eu-pef-2021-2279` |
| `boundary_upstream_links` | purchased inputs and external treatment | Represent material purchased inputs, packaging, energy carriers, water supply, transport in scope, and external waste treatment with traceable upstream or downstream datasets. | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | preservation and packing | Instantiate exactly one declared preservation route for the reference product. Treat `canned_heat_preservation` as a covered route and not as the default for all products in the category. | `unsd-cpc-3-0-21492`; `codex-cxs-242-2003` |
| `boundary_exclusions` | downstream life cycle and products classified elsewhere | Keep distribution, retail, use, and end-of-life outside this facility-gate dataset, and do not use this PCR for the excluded product categories listed in section 1. | `unsd-cpc-3-0-21492`; `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_sorting` | Peach receipt, sorting, and washing | required | Include the actual receipt condition and washing practice; zero-use utility rows require documentary evidence | foreground entry and conditioning | kg received peaches or declared peach intermediate |
| `peach_preparation` | Peach preparation | required | Record only preparation steps actually performed, such as peeling, pitting, cutting, or size reduction | foreground preparation | kg prepared peach intermediate |
| `preservation_packing` | Route-specific preservation and packing | required | Instantiate exactly one of `canned_heat_preservation` or `other_declared_preservation`; never both for one reference product dataset | foreground preservation and packing | kg packed prepared or preserved peach product |
| `finished_product_release` | Finished-product handling and release | required | Include controlled cooling, holding, internal movement, inspection, and release actually performed | foreground finishing | kg reference product released at facility gate |

### Process: Peach receipt, sorting, and washing (`receiving_sorting`)

#### Inputs

##### Product flows

###### Peaches or declared peach intermediate received (`received_peach_feedstock`)

The measured peach-based feedstock crossing the facility gate anchors traceability and the foreground mass balance.

- Selected flow: Supplier-specific peach or peach-intermediate product flow
- Flow property / unit: Mass / kg
- Amount rule: measured accepted delivery mass plus separately measured receipt rejects, on the declared condition basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative receipt records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg reference product
  - Basis: bounds derived from available route- and product-specific receipt records; replace when the reference period covers a representative production campaign
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied for washing (`receiving_wash_water`)

Record supplied water only when washing occurs in this process; a documented dry-receipt route records zero use.

- Selected flow: Facility-specific water-supply product flow
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered water supplied to the receiving and washing operation, less separately metered recirculated internal water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted peach output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only when route-specific meter history is incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg or m3 per kg accepted peach output
  - Basis: bounds derived from available meter and production records; replace after a representative campaign covers normal operating and cleaning conditions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted peaches transferred to preparation (`accepted_peaches`)

This intermediate output is calculated from measured transfer or batch mass and remains on the declared product-state basis.

- Selected flow: Facility-specific accepted-peach intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass; use a documented batch mass balance only when direct transfer measurement is unavailable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative transfer records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg reference product
  - Basis: bounds derived from received, reject, and transfer mass records; replace when reconciled representative-campaign records are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Receipt rejects and foreign material (`receipt_rejects`)

Record peach material and foreign matter removed before preparation according to its actual waste or recovered-product destination.

- Selected flow: Destination-specific organic or mixed waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative reject records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg reference product
  - Basis: bounds derived from available weigh tickets and batch records; replace when the reference period captures representative incoming quality
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Receiving and washing wastewater (`receiving_wastewater`)

Record wastewater leaving the foreground process, separated from internally recirculated water.

- Selected flow: Destination-specific wastewater flow
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered discharge or facility water balance attributed to this process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted peach output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while process-level discharge records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg or m3 per kg accepted peach output
  - Basis: bounds derived from supply, recirculation, and discharge records; replace after a representative water-balance period
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Peach preparation (`peach_preparation`)

#### Inputs

##### Product flows

###### Accepted peaches (`preparation_peach_input`)

Record the accepted-peach intermediate transferred from receiving without duplicating its upstream burdens.

- Selected flow: Facility-specific accepted-peach intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to the receiving output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared peach intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative transfer records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg prepared peach intermediate
  - Basis: bounds derived from preparation batch records; replace when representative reconciled transfer and output records are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water and processing aids (`preparation_water_aids`)

Record route-specific water and each processing aid actually consumed for peeling, pitting, cutting, rinsing, or stabilization; do not add unused generic inputs.

- Selected flow: Supplier-specific water and processing-aid product flows recorded as separate exchanges in the dataset
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered, weighed, or invoice-reconciled consumption by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg prepared peach intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while ingredient- and utility-specific records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg or m3 per kg prepared peach intermediate
  - Basis: separate facility-specific bounds for each supplied input; replace when representative batch and inventory reconciliation is complete
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared peach intermediate (`prepared_peach_intermediate`)

Record the measured prepared peach output with its form and moisture or liquid-medium condition declared.

- Selected flow: Facility-specific prepared-peach intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: measured prepared output mass reconciled with preparation removals and discharges
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative output records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg reference product
  - Basis: bounds derived from reconciled input, removal, discharge, and output records; replace after a representative campaign
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pits, peels, trimmings, and off-specification material (`preparation_residues`)

Record each separated residue by measured mass and actual destination; a marketed output is a co-product and follows section 7 rather than being labelled waste.

- Selected flow: Destination-specific organic residue, waste, or co-product flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared peach intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative residue records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg prepared peach intermediate
  - Basis: bounds derived from route- and product-form-specific weigh records; replace when representative batch records cover normal grading and preparation losses
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record preparation discharge by measured volume or a documented water balance and identify on-site or external treatment.

- Selected flow: Destination-specific wastewater flow
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered discharge or calculated supply less recirculation and retained water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared peach intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_records`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while preparation discharge records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg or m3 per kg prepared peach intermediate
  - Basis: bounds derived from representative supply, recirculation, retention, and discharge records; replace when the process water balance is complete
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Route-specific preservation and packing (`preservation_packing`)

#### Inputs

##### Product flows

###### Prepared peach intermediate (`preservation_peach_input`)

Record the prepared peach transfer on the same state and mass basis as the preparation output.

- Selected flow: Facility-specific prepared-peach intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled between processes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_materials`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative transfer records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg packed product output
  - Basis: bounds derived from route-specific transfer and finished-batch records; replace after a representative campaign
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route-specific packing medium and formulation ingredients (`packing_medium_ingredients`)

Record each ingredient actually added under the selected route. For canned products, declare the packing medium and product form used under the applicable product specification.

- Selected flow: Supplier-specific ingredient product flows, separated by ingredient
- Flow property / unit: Mass / kg
- Amount rule: weighed addition or reconciled batch formulation amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg packed product output on the declared net-mass basis
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_materials`
- Sources: `codex-cxs-242-2003`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative formulation records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg packed product output
  - Basis: separate route- and formulation-specific bounds from available batch sheets; replace when representative formulation reconciliation is complete
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy and utilities (`preservation_energy`)

Record electricity, thermal energy, fuel, compressed air, refrigeration, and other utilities separately when consumed by the selected preservation route.

- Selected flow: Supplier- and carrier-specific utility product flows, separated by carrier
- Flow property / unit: Energy or carrier-specific property / recorded unit plus MJ or kWh when converted
- Amount rule: submetered use or documented allocation of facility meter and invoice records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_energy`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative route-specific utility records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: carrier-specific unit per kg packed product output
  - Basis: separate bounds by energy carrier and exclusive preservation route; replace after representative submetered or allocation records are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging components (`primary_packaging`)

Record each container, closure, liner, label, and other primary packaging component used by the selected route without including its mass in the reference product mass.

- Selected flow: Supplier-specific packaging product flows, separated by component and material
- Flow property / unit: Mass or count with measured mass conversion / kg or item
- Amount rule: issued quantity less returned unused quantity, reconciled to saleable packed units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_materials`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while component-specific issue records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg or item per kg packed product output
  - Basis: separate bounds by package format and component; replace when representative issue, return, and packed-unit records are reconciled
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed prepared or preserved peach product (`packed_peach_product`)

This is the route-specific product output before final inspection and release.

- Selected flow: Peaches, otherwise prepared or preserved `91d82100-aaec-459c-b815-abd64025b71e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net product mass excluding packaging and stated on the declared total-net-content or drained-solids basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_outputs`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative finished-batch records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg packed product output
  - Basis: bounds derived from the declared net-content basis and reconciled route-specific batch records; replace when representative finished-batch reconciliation is complete
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation, filling, and packaging residues (`preservation_packing_waste`)

Record product loss, formulation residue, off-specification packs, and packaging scrap separately by material and destination.

- Selected flow: Destination-specific product-residue and packaging-waste flows
- Flow property / unit: Mass / kg
- Amount rule: weighed or inventory-reconciled mass by waste class and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg packed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_outputs`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while waste-class records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg packed product output
  - Basis: separate bounds by route, packaging format, waste class, and destination; replace when representative records are reconciled
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation and packing wastewater (`preservation_wastewater`)

Record route-specific discharge from formulation, container preparation, processing, and cleaning, net of internal recirculation.

- Selected flow: Destination-specific wastewater flow
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered discharge or documented process water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg packed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_outputs`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while route-specific discharge records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg or m3 per kg packed product output
  - Basis: bounds derived from route-specific supply, recirculation, retention, and discharge records; replace after representative water-balance coverage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct process and utility emissions (`preservation_direct_emissions`)

Record measured or calculated elementary emissions only when fuel combustion, refrigerant loss, or another direct release occurs inside the foreground boundary; otherwise retain evidence for zero occurrence.

- Selected flow: Substance-specific Tiangong elementary flows selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from collected fuel, equipment, and emission-factor records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_energy`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while substance-specific direct-release records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg substance per kg packed product output
  - Basis: separate bounds by substance and route using available operating records; replace when representative measurements or reviewed factor calculations are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Finished-product handling and release (`finished_product_release`)

#### Inputs

##### Product flows

###### Packed peach product awaiting release (`release_product_input`)

Record the packed product transferred from preservation and packing without duplicating its production burdens.

- Selected flow: Peaches, otherwise prepared or preserved `91d82100-aaec-459c-b815-abd64025b71e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net product mass transferred to controlled holding and release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_goods`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative transfer records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg reference product
  - Basis: bounds derived from transfer, hold, reject, and release records; replace after a representative campaign
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Handling and controlled-storage energy (`release_energy`)

Record energy for controlled cooling, holding, internal movement, and inspection only when these activities occur before the facility-gate release point.

- Selected flow: Supplier- and carrier-specific utility product flows
- Flow property / unit: Energy or carrier-specific property / recorded unit plus MJ or kWh when converted
- Amount rule: submetered use or documented allocation from facility records for the actual holding duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_goods`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while finished-goods utility records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: carrier-specific unit per kg reference product
  - Basis: bounds separated by carrier and actual holding duration; replace after representative submetered or documented allocation records are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference product (`released_reference_product`)

This flow realizes the functional unit after final inspection and release at the producing facility gate.

- Selected flow: Peaches, otherwise prepared or preserved `91d82100-aaec-459c-b815-abd64025b71e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: set the quantitative reference to 1 kg and scale the reconciled batch inventory by released net product mass on the declared basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_goods`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only to screen batch-normalization records before representative reconciliation is complete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg reference product
  - Basis: the envelope shall collapse to the declared quantitative reference when reconciliation is complete; replace immediately after representative released-mass records are verified
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Held, damaged, or off-specification finished product and package (`release_waste`)

Record product and packaging removed before release, separated by material, recovery status, and destination.

- Selected flow: Destination-specific product and packaging waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured mass or inventory-reconciled package count converted with measured component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_goods`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while representative hold-and-release records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg/kg reference product
  - Basis: separate bounds for product and each package material by destination; replace when representative hold, reject, and release records are reconciled
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refrigerant or fuel-related releases during finished-product handling (`release_direct_emissions`)

Include substance-specific direct releases only when controlled storage or on-site handling equipment produces them inside the foreground boundary.

- Selected flow: Substance-specific Tiangong elementary flows selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from collected equipment, fuel, and reviewed factor records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_goods`
- Range: Conditional temporary QA envelope with no preset numeric bounds; use only while direct-release records are incomplete
  - Range role: QA guardrail (`qa_guardrail`)
  - Unit: kg substance per kg reference product
  - Basis: separate bounds by substance and equipment using available operating records; replace when representative measurements or reviewed calculations are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | independently measurable routes, products, and operations | Avoid allocation by separating the exclusive preservation routes and by subdividing independently measured operations, batches, utilities, and waste handling. | `eu-pef-2021-2279` |
| `allocation_coproduct_status` | pits, kernels, peels, pulp, recovered medium, or other marketed outputs | Determine output status from documented destination. Treat an output with a market or productive use as a co-product; treat material sent for treatment without productive use as waste. | `eu-pef-2021-2279` |
| `allocation_residual_burdens` | unavoidable shared burdens after subdivision | Apply a documented causal physical relation where one can be demonstrated. If no defensible physical relation exists, use a documented economic relation consistent with the study method and disclose values, period, sensitivity, and assigned shares. | `eu-pef-2021-2279` |
| `allocation_recovery_claims` | recovered material and exported energy | Do not subtract avoided burdens or recovery credits unless the chosen study method explicitly requires them; report the method, substituted function, data source, and sensitivity separately. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `receiving_sorting` | received peaches, water, accepted transfer, rejects, and discharge | weigh tickets, batch sheets, water meters, and discharge records | delivery_id; supplier; origin; feedstock_state; received_mass; reject_mass; accepted_mass; water_supply; recirculated_water; discharge; timestamp | record each delivery and reconcile to production batch | kg and m3 | each delivery and batch | complete declared reference period including representative incoming quality | all receiving and washing lines in dataset scope | sum by route and product specification, then normalize to accepted output and reference product as stated | calibrated-scale and meter records; batch reconciliation; exception log |
| `cp_preparation_records` | `peach_preparation` | preparation inputs, output, residues, and wastewater | batch sheets, scales, issue records, meters, and destination tickets | batch_id; input_mass; water; aid_identity; aid_mass; prepared_output_mass; residue_mass_by_destination; discharge; product_state | record each preparation batch and reconcile input, output, retained liquid, residues, and discharge | kg and m3 | each batch | complete declared reference period with normal and changeover operation | all preparation lines in dataset scope | aggregate separately by product form and preparation technology before normalization | calibration records; formulation or aid issue records; mass- and water-balance review |
| `cp_preservation_materials` | `preservation_packing` | peach transfer, formulation ingredients, and packaging components | batch formulations, scales, ingredient issues, packaging issues and returns | route; batch_id; peach_input_mass; ingredient_identity; ingredient_mass; package_component; component_mass_or_count; unused_return; packed_units | collect each exclusive-route batch and reconcile issued and returned materials | kg and item | each batch | complete declared reference period for the selected route and package format | all preservation and packing lines in dataset scope | aggregate only within one route, formulation, and package format before normalization | approved batch sheet; scale checks; inventory reconciliation; package specification |
| `cp_preservation_energy` | `preservation_packing` | energy, utilities, and direct releases | submeters, invoices, fuel logs, equipment logs, and reviewed factor calculations | route; batch_id; carrier; meter_start; meter_end; allocation_driver; fuel_quantity; equipment_charge; refill; recovered_charge; emission_factor_id | meter by route where feasible; otherwise allocate documented facility records using a causal operating driver | recorded carrier unit, MJ, kWh, and kg substance | each batch or meter interval | complete declared reference period including start-up, shutdown, and cleaning attributable to production | all preservation utilities and direct-release equipment in dataset scope | aggregate by carrier and substance for the selected route; disclose all conversions and allocations | meter calibration; invoices; equipment service records; factor identity and version |
| `cp_preservation_outputs` | `preservation_packing` | packed output, process loss, packaging scrap, and wastewater | net-content checks, batch release, waste weights, inventory reconciliation, and discharge records | route; batch_id; mass_basis; packed_net_mass; drained_mass_if_used; product_loss; waste_class; waste_destination; discharge | record each batch and keep product, package, and discharge records separate | kg and m3 | each batch | complete declared reference period for the selected route | all filling, preservation, packing, and cleaning operations in dataset scope | reconcile outputs to material and water inputs, then normalize to packed output | net-content or drained-mass checks; waste tickets; discharge meters; balance review |
| `cp_finished_goods` | `finished_product_release` | transferred product, holding utilities, release mass, rejects, and direct releases | warehouse movements, release records, submeters, service logs, and reject records | batch_id; transfer_mass; hold_start; hold_end; storage_condition; energy_by_carrier; release_mass; reject_mass; package_count; component_mass; direct_release | track each batch from packed transfer through release at the facility gate | kg, item, h, carrier unit, MJ, kWh, and kg substance | each movement, release, and meter interval | complete declared reference period including representative holding conditions | all controlled finished-goods areas before the facility gate | aggregate by product specification and holding condition; normalize to released net mass | release authorization; inventory reconciliation; meter and service records; exception log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory exchanges | Divide the reconciled exchange total by released net product mass measured on the declared reference basis; keep packaging mass outside the denominator. | exchange total; released net mass; mass-basis declaration | exchange per 1 kg reference product |  |
| `calc_route_separation` | shared facility records | Assign directly measured records first; allocate only the remaining shared amount to the selected route using a documented causal driver and retain a reconciliation to the facility total. | route meters or batch records; shared total; driver values | route-specific exchange | `eu-pef-2021-2279` |
| `calc_process_mass_balance` | each foreground process | Reconcile measured inputs with product, co-product, waste, discharge, retained water, and documented stock change on consistent state and time boundaries; investigate rather than force-close material discrepancies. | measured inputs; outputs; stock change; state-basis records | documented mass-balance check |  |
| `calc_package_mass` | count-based package records | Multiply issued net component count by measured or supplier-declared component mass and retain the component-specific conversion evidence. | issued count; returned count; component mass | kg packaging component per reference product |  |
| `calc_direct_release` | direct emissions | Calculate substance-specific release only from collected activity records and an identified reviewed factor or material balance; preserve factor identity and units. | fuel or equipment activity; factor or charge balance; released product mass | kg substance per reference product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | reference product and peach inputs | Preserve the reference-flow UUID, supplier or internal flow identity, product form, selected exclusive route, packing medium or formulation, package format, mass basis, origin, and batch linkage. | dataset metadata, approved specification, supplier record, and batch trace |
| `dq_measurement` | mass, water, energy, count, and direct-release records | Use calibrated or verified instruments where material; retain raw units, conversions, zero-use evidence, allocation drivers, and exception treatment. | calibration or verification record, meter or scale log, invoice, conversion record, and exception log |
| `dq_temporal` | foreground reference period | Cover representative production, cleaning, start-up, shutdown, and holding conditions for the declared route; identify and justify excluded abnormal periods. | production calendar, batch list, meter intervals, and exclusion rationale |
| `dq_completeness` | all four foreground processes | Reconcile received peach input through released reference product, co-products, wastes, wastewater, stock change, and direct releases; document missing records without substituting unstated zeros. | process mass and water balances, completeness checklist, and missing-data register |
| `dq_route_specificity` | preservation and packing | Keep canned-route records separate from other preservation-route records and apply CXS 242-2003 only to the canned stone-fruit route. | route code, line or batch identifier, approved recipe, and product specification |
| `dq_provisional_replacement` | every `reasoned_estimate` screening envelope | Treat the envelope as conditional and temporary, with no preset numeric constraint. Replace it when representative foreground records, reviewed empirical ranges, or source-backed quantitative evidence become available; record the replacement and affected batches. | missing-data register, replacement decision, reviewed record coverage, and versioned calculation file |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | manifest, reference flow, and dataset metadata | Confirm the canonical PCR id, Tiangong product-flow UUID, Mass UUID, Units-of-mass UUID, kg unit, and all required qualifiers exactly match the declared reference object. | `unsd-cpc-3-0-21492` |
| `validation_mass_basis` | reference amount and process balances | Confirm the 1 kg quantitative reference excludes packaging mass and declares total net contents or drained peach solids for a product in liquid medium; reject an undocumented conversion between bases. | `codex-cxs-242-2003` |
| `validation_route_exclusivity` | process map and inventory | Confirm exactly one preservation route is instantiated. A dataset containing both `canned_heat_preservation` and `other_declared_preservation` as concurrent routes is nonconforming. | `unsd-cpc-3-0-21492`; `codex-cxs-242-2003` |
| `validation_process_coverage` | foreground inventory | Confirm all four process ids are present, each conditionally occurring flow is supported by occurrence or zero-use evidence, and all inputs, outputs, wastes, wastewater, and direct releases within the foreground boundary are addressed. | `eu-pef-2021-2279` |
| `validation_record_linkage` | collected and calculated values | Confirm every `collected_record` or `calculated_from_collection` row links to a declared protocol and reconciles to raw records on the same route, product specification, period, and mass basis. | `eu-pef-2021-2279` |
| `validation_allocation` | co-products and shared operations | Confirm subdivision was attempted first and every residual allocation or recovery claim states method, driver, values, reference period, assigned shares, and sensitivity. | `eu-pef-2021-2279` |
| `validation_source_scope` | use of external sources | Confirm CPC supports only the category reference, CXS 242-2003 is used only for the canned-stone-fruit route, and PEF guidance is not treated as product-specific quantitative evidence. | `unsd-cpc-3-0-21492`; `codex-cxs-242-2003`; `eu-pef-2021-2279` |
| `validation_estimate_replacement` | provisional screening envelopes | Confirm every `reasoned_estimate` is explicitly conditional, contains no invented source id or mandatory numeric value, and is replaced once its stated representative-record or source-evidence trigger is met. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-specific foreground production dataset suitable for review as a unit-process or aggregated facility-gate dataset |
| downstream_use | May support `secondary_dataset` and `background_dataset` use in `process` or `lifecyclemodel` projections after methodology and data review |
| allowed_use | Facility-gate modelling of the declared prepared or preserved peach product when route, form, packing medium or formulation, package, geography, period, mass basis, and data quality are compatible |
| excluded_use | Fresh, solely frozen or dried, sugar-preserved, jam, jelly, marmalade, beverage, or mixed-fruit products; an undeclared mix of preservation routes; comparison across incompatible net-content bases; reviewed or published use while material provisional evidence remains unresolved |
| required_metadata | canonical PCR id; reference-flow UUID and mass object; CPC context; exclusive preservation route; product and particle form; packing medium or formulation; net-content basis; package format; feedstock condition; facility geography; technology; reference period; allocation; cut-offs; upstream dataset identities |
| required_quality_disclosure | raw-record coverage; calibration and conversion evidence; mass and water reconciliation; route separation; missing-data treatment; provisional screening envelopes and replacement status; source versions; allocation sensitivity; data-quality limitations |
| update_trigger | Change in product scope, preservation route, formulation or packing medium, net-content basis, package format, feedstock condition, facility technology, energy or water system, allocation, or representative period; availability of representative records or reviewed source-backed quantitative evidence that triggers replacement of a provisional envelope |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21492` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21492, “Peaches, otherwise prepared or preserved” | Classification reference and category label only |
| `codex-cxs-242-2003` | standard | Codex Alimentarius, CXS 242-2003, Standard for Canned Stone Fruits; current Codex standards listing checked by the batch coordinator in 2025 | Canned-peach route product form, packing-medium, and mass-basis declarations only; not evidence for the whole category or quantitative inventory values |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods | General life-cycle boundary, data-quality, allocation, calculation, and disclosure principles; not product-specific quantitative evidence |
