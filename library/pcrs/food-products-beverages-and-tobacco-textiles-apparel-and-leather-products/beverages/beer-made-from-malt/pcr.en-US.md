---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.beer-made-from-malt
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Beer made from malt

## 1. Scope and Applicability

This PCR covers foreground datasets for alcoholic beer made from malt under CPC 24310. The foreground starts with ingredients, packaging, utilities, and other inputs delivered to the brewery and ends with finished beer packaged or otherwise prepared for dispatch at the brewery gate. It includes wort production, fermentation and finishing, filling or bulk preparation, cleaning, refrigeration, on-site utilities, wastewater, losses, wastes, and co-products.

Agricultural production, malting, ingredient and packaging manufacture, inbound transport, distribution, retail or use-stage cooling, consumption losses, and end-of-life are background stages to be linked when the study boundary requires them. Non-alcoholic beer classified elsewhere, cider, perry, mead, wine, malt as a product, industrial ethanol fermentation broth, and generic brewery services are excluded. Material recipe, alcoholic-strength, and package differences require product-specific data or disclosed scenarios.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.beer-made-from-malt |
| classification_refs | CPC 3.0: 24310, Beer made from malt, exact |
| covered_products | Alcoholic finished beer made from malt, packaged or in bulk dispatch form |
| excluded_products | Non-alcoholic beer; cider; perry; mead; wine; malt; industrial ethanol fermentation broth; generic brewery services |
| representative_product | Industrially brewed malt beer at the brewery gate |
| production_route | Wort production; fermentation and finishing; filling or bulk dispatch preparation |
| market_state | Finished, saleable beer with declared beer type, alcoholic strength, package format, and shelf life |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished alcoholic malt beer at the brewery gate |
| How much | 0.1 m3 (1 hl) |
| How well | Fit for sale; declared beer type, alcoholic strength by volume, and package or bulk-dispatch format |
| How long or cycle | Declared minimum shelf life of at least one month; continuous 12-month production reporting period |
| reference_flow_link | Beer `6da29594-9e39-48eb-82d1-c7a4484d3740` |

| Field | Value |
| --- | --- |
| Reference amount | 0.1 m3 |
| Reference product flow | Beer `6da29594-9e39-48eb-82d1-c7a4484d3740` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | beer type; alcoholic strength by volume; packaged or bulk format; package material and returnability; brewery site; reporting period; minimum shelf life |

When constructing a foreground data package, all required qualifiers must be declared in metadata or equivalent product and process fields. The Tiangong Beer flow is active (`state_code=100`) and carries the exact CPC 24310 classification. For a downstream consumed-beer profile, use 0.102 m3 sold per 0.1 m3 consumed for the Beer PEFCR default 2% loss. Use 7% only when the product cannot preserve its properties for one month, or replace the default with representative evidence. Downstream scaling does not change the brewery-gate reference flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_volume` | Beer reference product and beer intermediates | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record volume at a declared measurement temperature; convert litres or hectolitres exactly to m3 and preserve the original reading. |
| `inventory_mass` | Ingredients, packaging, co-products, wastes, and emissions measured by mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record dry or as-received basis and moisture where material; use the verified Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`. |
| `energy_sum` | Electricity, fuels, steam, heat, cooling, and other energy | Energy | MWh | Preserve native quantities, conversion factors, calorific-value basis, and meter scope; convert to MWh only for the total-energy calculation. |
| `period_normalization` | All foreground flows | Reference-flow property | per 0.1 m3 | Aggregate one continuous 12-month period, reconcile stock changes and losses, allocate if needed, then normalize to conforming beer output. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_brewery_gate` | Foreground dataset | Include wort production, fermentation, finishing, filling or bulk preparation, cleaning, refrigeration, on-site utilities, wastewater, losses, wastes, and co-products from delivered brewery inputs to dispatch-ready beer. | `ec-jrc-fdm-bref-2019`; `brewers-europe-beer-pefcr-2025` |
| `boundary_upstream_inputs` | Lifecycle model | Link upstream ingredient, malt, energy, water, chemical, refrigerant, packaging, and inbound-transport datasets; prefer supplier-specific data where available. | `brewers-europe-beer-pefcr-2025` |
| `boundary_downstream_profile` | Lifecycle model | Add distribution, cooling, product losses, packaging end-of-life, and other downstream stages for the declared market and package system when cradle-to-grave results are required. | `brewers-europe-beer-pefcr-2025` |
| `boundary_no_cutoff` | Included stages | Do not omit an identified relevant flow by mass, energy, or environmental-significance cutoff. Estimate missing quantities transparently, mark them for replacement, and test materiality. | `brewers-europe-beer-pefcr-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Malt, adjuncts, hops or hop products, yeast, water, energy, cleaning materials, packaging, and other inputs delivered to the brewery |
| starting_condition_role | Background-to-foreground interface at brewery receipt |
| product_classification_scope | Alcoholic beer made from malt under CPC 24310 |
| recursive_input_rule | Finished beer received from another site is an upstream beer dataset; only local finishing, blending, or packaging remains in the reporting-site foreground. |
| upstream_dataset_requirement | Link representative production and transport datasets for delivered materials and utilities; use supplier-specific datasets when available. |
| disclosure | Declare brewery site, reporting period, starting material condition, package system, outsourced operations, missing flows, estimates, and deviations. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wort_production` | Wort production | `required` | All covered beer production | Convert brewing ingredients and water into cooled hopped wort | Cooled wort transfer volume |
| `fermentation_and_finishing` | Fermentation and finishing | `required` | All covered beer production | Ferment, mature, filter or otherwise finish beer | Finished beer transfer volume |
| `filling_and_packaging` | Filling and packaging | `required` | Include bulk dispatch preparation when no retail package is applied | Prepare finished beer for dispatch and provide the reference output | 0.1 m3 dispatch-ready beer |

### Process: Wort production (`wort_production`)

#### Inputs

##### Product flows

###### Malted cereals and adjuncts (`malted_cereals_and_adjuncts`)

The principal fermentable materials cross the brewery boundary here; receipt, recipe, and inventory records determine quantity.

- Selected flow: Malted cereals and brewing adjuncts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record each ingredient on a consistent dry or as-received basis and reconcile purchases, stock, and recipe use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `brewers-europe-beer-pefcr-2025`
- Range: Malted-barley recipe QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 6.13
  - Upper: 16
  - Unit: kg
  - Basis: per 0.1 m3 finished beer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `brewers-europe-beer-pefcr-2025`

###### Hops and hop products (`hops_and_hop_products`)

Hops, pellets, or extracts cross into wort production; purchase and recipe records determine quantities while preserving product form and concentration.

- Selected flow: Hops, hop pellets, or hop extract
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record each hop product separately on its purchased basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `brewers-europe-beer-pefcr-2025`

###### Brewing water (`wort_brewing_water`)

Water crosses into mashing, lautering, sparging, and boiling; process metering or batch-volume reconciliation determines quantity.

- Selected flow: Brewing water for wort production
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure process water and exclude cleaning water from this row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Total-water screening ceiling applied conservatively to the process row
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.60
  - Unit: m3
  - Basis: per 0.1 m3 finished beer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ec-jrc-fdm-bref-2019`

###### Wort-production energy (`wort_energy`)

Heat and electricity cross into milling, mashing, boiling, pumping, separation, and cooling; meters or equipment calculations determine quantity.

- Selected flow: Wort-production heat and electricity
- Flow property / unit: Energy / MWh
- Amount rule: Calculate from submetering or equipment load and operating time with documented factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Temporary component-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: MWh
  - Basis: per 0.1 m3 finished beer; not a wort-production benchmark
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Cooled wort (`cooled_wort`)

Cooled hopped wort crosses to fermentation; transfer volume and density or extract records determine quantity.

- Selected flow: Cooled hopped wort
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record at the measurement temperature and reconcile evaporation, trub, and line losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wort_batch_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Brewers' spent grain (`brewers_spent_grain`)

Spent grain leaves wort separation for use or treatment; weights, moisture measurements, and dispatch records determine quantity.

- Selected flow: Wet brewers' spent grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record wet mass, moisture, destination, and storage change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Temporary wet spent-grain screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: wet mass per 0.1 m3 finished beer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Fermentation and finishing (`fermentation_and_finishing`)

#### Inputs

##### Product flows

###### Cooled wort input (`cooled_wort_input`)

This intermediate crosses from wort production; matched batch-transfer records determine quantity.

- Selected flow: Cooled hopped wort from `wort_production`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Equal the paired `cooled_wort` output after explicit transfer losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: N-input (`n_input`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Brewing yeast (`brewing_yeast`)

Purchased or propagated yeast crosses into fermentation; propagation and dosing records determine quantity without double-counting internal reuse.

- Selected flow: Brewing yeast
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record fresh mass and distinguish new, propagated, reused, and surplus yeast.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Fermentation and finishing energy (`fermentation_energy`)

Energy crosses into refrigeration, pumping, filtration, stabilization, and carbonation; submetering or equipment records determine quantity.

- Selected flow: Fermentation and finishing energy
- Flow property / unit: Energy / MWh
- Amount rule: Calculate from submetering or equipment load, tank occupancy, and operating time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Temporary component-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: MWh
  - Basis: per 0.1 m3 finished beer; not a fermentation benchmark
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Finished beer before filling (`finished_beer_before_filling`)

Finished beer crosses to filling or bulk preparation; tank-transfer volume determines quantity after explicit filtration and transfer losses.

- Selected flow: Finished beer before filling
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record at the declared measurement temperature and reconcile tank and filtration losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Surplus yeast (`surplus_yeast`)

Surplus yeast leaves fermentation for reuse, sale, or treatment; tank and dispatch records determine quantity.

- Selected flow: Surplus yeast
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record wet mass, dry matter, internal reuse, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `ec-jrc-fdm-bref-2019`

##### Elementary flows

###### Fermentation carbon dioxide (`fermentation_carbon_dioxide`)

Biogenic carbon dioxide crosses to air unless recovered; extract conversion and recovery records determine generated and emitted quantities.

- Selected flow: Biogenic carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report generated, recovered, internally reused, sold, and vented quantities separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Temporary fermentation-carbon-dioxide screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 0.1 m3 finished beer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Filling and packaging (`filling_and_packaging`)

#### Inputs

##### Product flows

###### Finished beer input (`finished_beer_input`)

Finished beer crosses into filling from finishing; matched tank-transfer records determine quantity.

- Selected flow: Finished beer from `fermentation_and_finishing`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Equal the paired `finished_beer_before_filling` output after explicit transfer losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: N-input (`n_input`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `brewers-europe-beer-pefcr-2025`

###### Primary packaging (`primary_packaging_materials`)

Bottles, cans, kegs, closures, labels, and other packaging cross into filling; bills of material and line records determine quantity.

- Selected flow: Primary packaging materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record each material and format, process losses, and reusable-container trip count separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `brewers-europe-beer-pefcr-2025`
- Range: Temporary packaging-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 0.1 m3 finished beer; package-specific reconciliation is authoritative
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filling and packaging utilities (`packaging_utilities`)

Utilities cross into filling, container washing, and packing; meters and operating records determine quantities.

- Selected flow: Filling and packaging utilities
- Flow property / unit: Energy / MWh
- Amount rule: Record electricity, heat, water, chemicals, and refrigerants in native units; convert energy only for summation and record leakage separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `brewers-europe-beer-pefcr-2025`; `ec-jrc-fdm-bref-2019`
- Range: Temporary component-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: MWh
  - Basis: per 0.1 m3 finished beer; not a packaging benchmark
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Beer reference product (`beer_reference_product`)

The dispatch-ready product crosses the brewery gate as the quantitative reference output; conforming volume fixes its quantity.

- Selected flow: Beer `6da29594-9e39-48eb-82d1-c7a4484d3740`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Fixed at 0.1 m3 of conforming finished beer at brewery gate.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 0.1 m3 finished beer at brewery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:
- Range: Fixed reference-amount check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 0.1
  - Unit: m3
  - Basis: finished beer at brewery gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Brewery wastewater (`brewery_wastewater`)

Wastewater crosses from brewery operations to external treatment or discharge; effluent metering or water balance determines quantity.

- Selected flow: Brewery wastewater before external treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Reconcile intake, beer, evaporation, co-product moisture, recycling, and other losses; record treatment and pollutant loads separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-bat-fdm-2019`
- Range: Brewery-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.15
  - Upper: 0.60
  - Unit: m3
  - Basis: per 0.1 m3 finished beer; investigate outside values rather than automatically reject them
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ec-jrc-fdm-bref-2019`; `eu-bat-fdm-2019`

###### Packaging waste (`packaging_waste`)

Packaging losses cross from filling to recovery or treatment; material reconciliation and waste records determine quantity.

- Selected flow: Packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record by material and treatment route; reconcile purchases, stock, packed product, and waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 0.1 m3 finished beer at brewery gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `brewers-europe-beer-pefcr-2025`
- Range: Temporary packaging-waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 0.1 m3 finished beer; material reconciliation is authoritative
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_coproduction` | Shared brewery operations | First subdivide meters, batches, lines, tanks, and cleaning events where feasible. Directly assign beer-specific ingredients and packaging. | `brewers-europe-beer-pefcr-2025` |
| `allocation_beverages_by_volume` | Multiple beverages | Allocate residual shared brewery inputs and outputs among beverage products by finished volume produced in the same period; disclose denominator and included products. | `brewers-europe-beer-pefcr-2025` |
| `allocation_feed_coproducts` | Brewers' grains or comparable residues used as feed | Assign brewery burdens to beer and no burden to the feed co-product while reporting quantity and destination. Any avoided-product credit is a separately disclosed scenario. | `brewers-europe-beer-pefcr-2025` |
| `allocation_non_feed_coproduct_review` | Recovered carbon dioxide, yeast, extracts, or other non-feed co-products | Prefer subdivision or physical causal assignment. Otherwise document function, marketability, quantity, price, basis, and sensitivity; do not automatically apply the feed rule. | `brewers-europe-beer-pefcr-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `wort_production` | brewing ingredients | purchase, recipe, and stock records | material; form; mass; moisture; batch; stock change | Reconcile purchases, transfers, recipe issues, and inventory | kg | per receipt and batch | continuous 12 months | brewery and product | annual net use divided by conforming output | invoices; recipe system; inventory reconciliation |
| `cp_wort_batch_records` | `wort_production` | wort and residues | brew-house batch record | volume; temperature; extract; evaporation; residue; transfer loss | Capture mash, kettle, separation, cooling, and transfer records | m3; kg | per batch | continuous 12 months | brew house and product | sum conforming batches and normalize | calibrated instruments; batch reconciliation |
| `cp_utility_meters` | `wort_production`; `fermentation_and_finishing`; `filling_and_packaging` | water and energy | meter and equipment record | meter value; fuel; steam; heat; runtime; factor; scope | Read calibrated meters or calculate from equipment load and logged runtime | native unit; MWh; m3 | daily to monthly | continuous 12 months | meter area and brewery | reconcile site total, subdivide, allocate, normalize | calibration; bills; meter map; calculation sheet |
| `cp_fermentation_records` | `fermentation_and_finishing` | wort, yeast, beer, carbon dioxide | tank and laboratory record | volume; extract; temperature; yeast; transfer; loss; recovered CO2 | Reconcile tank receipts, fermentation conversion, transfers, recovery, and finished volume | m3; kg | per tank or batch | continuous 12 months | fermentation train and product | sum conforming production and normalize | tank log; laboratory result; recovery meter |
| `cp_packaging_records` | `filling_and_packaging` | beer and packaging | filler, bill-of-material, and dispatch record | filled volume; rejects; material; package; trip count; loss | Reconcile filler counters, package issues, stock, rejects, and saleable output | m3; kg | per production run | continuous 12 months | line and product | sum conforming runs and normalize | line counter; material issue; dispatch reconciliation |
| `cp_waste_coproduct_records` | `wort_production`; `fermentation_and_finishing`; `filling_and_packaging` | co-products and wastes | weighbridge, transfer, and treatment record | quantity; moisture; destination; treatment; stock change | Reconcile measured dispatch, storage change, sale, reuse, and treatment | kg; m3 | per movement and monthly | continuous 12 months | brewery | annual net output divided by conforming beer | tickets; contracts; stock survey; treatment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | All foreground flows | Allocated annual net quantity / annual conforming beer volume x 0.1 m3 | net flow quantity; conforming beer volume | quantity per reference flow |  |
| `calc_total_energy` | Brewery energy | Convert electricity, fuel, steam, heat, and refrigeration to MWh with documented factors, sum before allocation, then apply the declared rule | native energy records; conversion factors; allocation data | MWh/hl | `eu-bat-fdm-2019` |
| `calc_water_balance` | Brewery water | Intake = beer + wastewater + evaporation + co-product moisture + other losses + stock change; report recycled water separately | intake and outlet records | reconciled m3/hl and residual | `ec-jrc-fdm-bref-2019` |
| `calc_material_balance` | Brewing and filling | Reconcile ingredient dry matter, wort volume and extract, beer transfers, losses, co-products, wastes, and stock changes for the same period | process and inventory records | balance and unexplained residual | `eu-bat-fdm-2019` |
| `calc_fermentation_co2` | Fermentation | Calculate generation from measured extract conversion or documented stoichiometry; report generated, recovered, reused, sold, and vented amounts distinctly | extract conversion; recovery and vent records | kg biogenic CO2/hl by route | `ec-jrc-fdm-bref-2019` |
| `calc_reusable_packaging` | Reusable containers | Divide container manufacture by documented expected trips and include washing, rejection, and replacement; test uncertain trip counts | pool records; packaging and utility data | allocated packaging and washing per hl | `brewers-europe-beer-pefcr-2025` |
| `calc_downstream_scaling` | Consumed-beer lifecycle profile | Use 0.102 m3 sold per 0.1 m3 consumed for default 2% loss; use 7% only under the shelf-life condition or replace with representative evidence | consumed amount; loss rate | sold amount for downstream model | `brewers-europe-beer-pefcr-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reporting_period` | Foreground records | Use a continuous 12-month period covering normal and seasonal production. | dated source-system extracts and production reconciliation |
| `dq_data_age` | Company-specific data | Use data no more than three years old unless a longer period is demonstrably representative. | data vintage and representativeness justification |
| `dq_product_specificity` | Ingredients and packaging | Collect at beer-product or product-family level; site averages require an infeasibility and allocation record. | recipe, packaging bill, meter map, and allocation worksheet |
| `dq_inventory_completeness` | Brewery | Maintain water, energy, raw-material, wastewater, waste-gas, waste, and co-product inventories with flow sheets and balances. | inventory register, process map, mass and volume balances |
| `dq_traceability` | Material foreground values | Record source system, meter or document, frequency, gaps, stock change, conversion, allocation denominator, and uncertainty. | collection protocol evidence and audit trail |
| `dq_representativeness` | Upstream and PEF-aligned data | Prefer supplier-specific data, assess temporal, geographical, technological, and precision or uncertainty quality, and target company-specific DQR of 1.5 or better where required. | supplier records and documented quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_qualifiers` | Dataset metadata | Confirm CPC 24310 alcoholic malt beer and record beer type, alcoholic strength, package, site, period, and shelf life; reject non-alcoholic beer and industrial ethanol broth. | `brewers-europe-beer-pefcr-2025` |
| `validate_reference_volume` | Reference flow | Require exactly 0.1 m3 of active Beer flow `6da29594-9e39-48eb-82d1-c7a4484d3740` as the quantitative reference. |  |
| `validate_process_completeness` | Foreground | Require all three process-map stages with utilities, losses, wastes, and co-products. | `ec-jrc-fdm-bref-2019` |
| `validate_total_energy` | Brewery total | Compare normalized annual energy with 0.02-0.05 MWh/hl; investigate, reconcile, and explain outside values without replacing measurements. | `eu-bat-fdm-2019` |
| `validate_water_use` | Brewery total | Compare total intake with the 0.60 m3/hl screening ceiling; higher values require water-balance and boundary review. | `ec-jrc-fdm-bref-2019` |
| `validate_wastewater` | Brewery total | Compare wastewater with 0.15-0.60 m3/hl; review discharge, evaporation, product, co-product moisture, recycling, and treatment boundary outside this range. | `ec-jrc-fdm-bref-2019`; `eu-bat-fdm-2019` |
| `validate_mass_volume_balance` | Processes and period | Reconcile ingredients, water, wort, beer, carbon dioxide, co-products, wastes, evaporation, wastewater, filling loss, stock change, and internal transfers; disclose residual uncertainty. | `eu-bat-fdm-2019` |
| `validate_allocation` | Multi-product site | Verify subdivision first, direct assignment of beer-specific materials, volume allocation of residual shared beverage operations, and disclosed denominators and co-product treatment. | `brewers-europe-beer-pefcr-2025` |
| `validate_temporal_quality` | Foreground data | Require continuous 12-month coverage and flag company data older than three years unless representativeness is justified. | `brewers-europe-beer-pefcr-2025` |
| `validate_downstream_scaling` | Lifecycle model | Reconcile sold and consumed volumes and verify the declared 2%, 7%, or evidence-based loss without changing the brewery-gate reference flow. | `brewers-europe-beer-pefcr-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Brewery-gate foreground dataset normalized to 0.1 m3 finished malt beer |
| downstream_use | Project to a unit process or connect upstream and downstream datasets in a lifecyclemodel |
| allowed_use | Brewery inventory; hotspot screening; supplier-data collection; process improvement; disclosed cradle-to-gate or cradle-to-grave study |
| excluded_use | Comparative assertion or PEF claim without all applicable impact assessment, quality, review, and reporting provisions |
| required_metadata | Beer type; alcoholic strength; package or bulk format; brewery site; reporting period; shelf life; reference-flow UUID; CPC identity |
| required_quality_disclosure | Packaging mix; allocation; co-product destinations; recovered carbon dioxide; data gaps; temporary estimates; representativeness; deviations |
| update_trigger | Material change in recipe, strength, package mix, production technology, site, allocation, co-product destination, background data, or applicable external method |

Temporary `reasoned_estimate` ranges are replaceable QA screens, not category facts. Replace them with reviewed evidence or product and site records before publishing a high-confidence dataset.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `brewers-europe-beer-pefcr-2025` | `standard` | The Brewers of Europe. *Product Environmental Footprint Category Rules for Beer*, revised version approved 21 March 2025, accessed 2026-08-10. https://brewersofeurope.eu/wp-content/uploads/2025/05/FINAL-Revised-draft-updated-PEFCR-as-approved-by-review-panel.pdf | Beer identity and performance; lifecycle boundary; company data; allocation; brewery operations; data quality; product-loss scaling. EU PEF scope is broader than this brewery-gate foreground PCR. |
| `ec-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre. *Best Available Techniques Reference Document for the Food, Drink and Milk Industries*, 2019, accessed 2026-08-10. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf | Brewing process map; resources and residues; water; wastewater; heat; operational records. Reported values are screening evidence for European installations, not product specifications. |
| `eu-bat-fdm-2019` | `standard` | European Commission. Commission Implementing Decision (EU) 2019/2031, 2019-11-12, accessed 2026-08-10. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Environmental inventory and beer BAT-associated energy and wastewater levels. These are installation reference ranges, not fixed inventory values or product conformity limits. |
