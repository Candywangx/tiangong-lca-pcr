---
schema_version: 1
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oilseeds-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---
# Other oilseeds, n.e.c.

## 1. Scope and Applicability
This PCR defines foreground rules for one named residual oilseed species within CPC 01449, from managed production to the declared gate. Each dataset shall declare exactly one species, intended use, moisture basis, grade and gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oilseeds-n-e-c |
| classification_system | CPC |
| classification_version | 3.0 |
| classification_code | 01449 |
| classification_title | Other oilseeds, n.e.c. |
| included_products | One named residual oilseed species classified in CPC 01449, such as crambe seed or hempseed, delivered as harvested or conditioned grain; castor oil seeds belong to CPC 3.0 01447 and are excluded. |
| excluded_products | Oilseeds with separate CPC leaves; seed produced and certified specifically for sowing; extracted oil; press cake or meal; foods and manufactured products. |
| representative_product | Conditioned grain of one declared residual oilseed species at the farm or conditioning gate. |
| production_route | Species-specific managed production, harvest, seed extraction, optional drying and cleaning, grading, optional packaging and storage. |
| market_state | Harvested or conditioned oilseed grain with declared species, intended use, moisture, purity or grade, and gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| what | Provision of one declared CPC 01449 oilseed species at the stated farm or conditioning gate. |
| how_much | 1 kg net oilseed mass at declared moisture. |
| how_well | Named species, intended use, moisture basis, grade or purity, route and gate are mandatory. |
| how_long_or_cycle | One crop cycle and associated conditioning lot, normalized to accepted product. |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6` |
| reference_flow_property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| reference_unit_group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| reference_unit | kg |
| required_qualifiers | one named species; intended use; moisture basis; grade or purity; production and conditioning route; declared gate |

The sole reference output is `reference_product_at_declared_handoff` at `declared_reference_handoff`, a mandatory measurement of the actual accepted product at the already declared gate. Process `grading_packaging_and_storage` remains conditional: omission of its physical activities does not remove this reference. Select the actual last included product handoff and record its process/output id; accept only the same species, physical state, grade, moisture basis and gate as Section 3. The prior `reference_product` row is the measured output of its actual operation when active, not an additional final sale. No bypass creates processing, a yield assumption, an extra burden or a change of product boundary.

## 4. Measurement and Unit Rules

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| net_mass | Reference product and mass flows | Mass | kg | Use net mass and retain gross mass, tare and scale evidence. |
| moisture | Seed and residue mass | Mass and moisture fraction | kg and % wet basis or dry basis | State the moisture convention and convert only from measured moisture. |
| field_normalization | Field inputs | Area and mass | ha and kg | Preserve field records, then normalize with accepted product from the same crop cycle. |
| energy | Machinery, drying and storage | Energy, volume or mass | kWh, MJ, L or kg | Preserve the recorded carrier and unit before conversion. |

## 5. System Boundary

The boundary begins with planting material and foreground-controlled field preparation. It includes managed production, harvest, species-specific threshing or seed extraction, optional drying, aeration and cleaning, grading, foreground packaging, storage and load-out to the declared gate. It excludes planting-seed certification, oil extraction, refining, meal manufacture, downstream transport and use. Alternative production or conditioning technologies require separate route declarations; inactive conditional nodes carry no exchanges.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | planting material entering the declared crop cycle |
| starting_condition_role | Start of foreground managed biological production for one named residual oilseed species. |
| product_classification_scope | CPC 01449 only; separately classified oilseeds are outside scope. |
| recursive_input_rule | Purchased CPC 01449 oilseed used as an input remains a separately recorded product input with species, state and supplier dataset. |
| upstream_dataset_requirement | Link supplier datasets for planting material and purchased inputs or disclose source, geography and quality. |
| disclosure | Species, cultivar where known, intended use, field mode, harvest/extraction technology, moisture, grade, gate, co-products, rejects, rework and shared-asset attribution. |

## 6. Process Inventory Structure

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_production | Managed crop production | required | Always included. | Cultivate the declared named residual oilseed species and record field operations. | Harvestable crop standing in the declared field or protected system. |
| harvest_and_extraction | Harvest and seed extraction | required | Always included; threshing, pod opening or fruit dehulling follows the species route. | Collect the crop and separate oilseed grain from field biomass. | Gross harvested seed-bearing material. |
| drying_and_conditioning | Drying and primary conditioning | conditional | Include when drying, aeration, cleaning or stabilization occurs before hand-off. | Reach the declared safe moisture and remove foreign matter. | Conditioned oilseed mass at declared moisture. |
| grading_packaging_and_storage | Grading, packaging and storage | conditional | Include foreground-controlled grading, bagging, bulk storage or load-out. | Release one declared grade and use route at the stated gate. | Net reference product at the declared gate. |
| `declared_reference_handoff` | Accepted-product measurement at declared handoff | required | Every actual selected route, including bypass of conditional conditioning/packing/storage | Measurement and reconciliation only; no added physical processing | 1 kg net accepted product at the same declared gate |


### Process: Managed crop production (`managed_production`)

#### Inputs

##### Product flows

###### Planting material (`planting_material`)

Only for an actual Crambe abyssinica planting route; for any other species, create a separate species-specific planting-material exchange and verify its identity.

- Selected flow: Crambe seed for sowing
- Flow property / unit: kg
- Amount rule: Measured mass of Crambe sowing seed actually planted; do not use the harvested commodity product as a substitute.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilizer, urea input (`nutrient_products`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`

###### Fertilizer, monoammonium phosphate input (`nutrient_products_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`

###### Fertilizer, potassium chloride input (`nutrient_products_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`

###### Cattle manure, as applied input (`nutrient_products_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`

###### Agricultural limestone input (`nutrient_products_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`

###### Irrigation water, groundwater input (`irrigation_water`)

Conditional one-material exchange: include Irrigation water, groundwater only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Irrigation water, groundwater
- Flow property / unit: Volume / m3
- Amount rule: Measure the quantity of Irrigation water, groundwater actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route Specific (`route_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

###### Diesel fuel input (`field_energy`)

Conditional one-material exchange: include Diesel fuel only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure the quantity of Diesel fuel actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`

###### Electricity, medium voltage input (`field_energy_electricity`)

Conditional one-material exchange: include Electricity, medium voltage only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measure the quantity of Electricity, medium voltage actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Harvest-ready oilseed crop, declared species (`standing_crop`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Harvest-ready oilseed crop, declared species
- Flow property / unit: Mass / kg
- Amount rule: Calculated harvestable crop mass transferred to harvest.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: harvestable mass at field maturity.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_yield`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg accepted product
  - Basis: harvestable mass at field maturity
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

###### Direct soil nitrous oxide (`soil_n2o_emission`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select exact N2O-to-air identity after method and medium are declared
- Flow property / unit: kg N2O
- Amount rule: Calculate from recorded N inputs using the declared regional method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route Specific (`route_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg N2O/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate loss to water (`nitrate_loss_to_water`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select exact nitrate species and receiving medium
- Flow property / unit: Mass / kg NO3-
- Amount rule: Calculate only with a declared applicable method and receiving medium.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route Specific (`route_specific`)
Raw activity or stage basis: per crop cycle, normalized by accepted oilseed output.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg nitrate-N/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Final exchange mass is kg NO3-; retain N-based activity, factors and screens in a separate ledger. Convert only the mass of N attributed to this chemical species by 62/14 exactly once, then normalize once to the accepted reference output. Do not treat total nutrient balance, soil retention or unexplained deficit as this release. Record each actual receiving compartment separately. Any gas-volume record requires its measured temperature, pressure and a supported mass conversion; it is not interchangeable with compound mass.

### Process: Harvest and seed extraction (`harvest_and_extraction`)

#### Inputs

##### Product flows

###### Harvest-ready oilseed crop, declared species (`standing_crop_input`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Harvest-ready oilseed crop, declared species
- Flow property / unit: Mass / kg
- Amount rule: Transfer the measured harvestable crop from managed production.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: gross harvestable crop entering harvest.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_yield`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg accepted product
  - Basis: gross harvestable crop entering harvest
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel input (`harvest_energy`)

Conditional one-material exchange: include Diesel fuel only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure the quantity of Diesel fuel actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology Specific (`technology_specific`)
Raw activity or stage basis: per harvested lot.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`

###### Electricity, medium voltage input (`harvest_energy_electricity`)

Conditional one-material exchange: include Electricity, medium voltage only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measure the quantity of Electricity, medium voltage actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology Specific (`technology_specific`)
Raw activity or stage basis: per harvested lot.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Raw extracted oilseed grain (`raw_oilseed_grain`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c.
- Flow property / unit: kg
- Amount rule: Measured raw grain after species-specific extraction and before conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
Raw activity or stage basis: gross raw seed at measured moisture.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg accepted product
  - Basis: gross raw seed at measured moisture
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Verify this intermediate state or co-product grade independently; the reference-output UUID is not evidence for this row.

##### Waste flows

###### Harvest and extraction residue (`harvest_residue`)

Only when Crambe stalks leave the process as waste; saleable stalks require a separate product output and allocation decision. Other residues require distinct material and destination identities.

- Selected flow: Crambe stalk waste
- Flow property / unit: kg
- Amount rule: Measured mass of Crambe stalks sent to the declared waste-management route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route Specific (`route_specific`)
Raw activity or stage basis: per harvested lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4
  - Unit: kg/kg raw seed
  - Basis: per harvested lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Measure field and handling losses by species, lot and fate in the harvest mass balance. Uncollected material remaining on the field is a measured loss or land-management input, not a saleable output or a generic Tiangong waste exchange. Create a separate atomic exchange only when a concrete material actually crosses the process boundary.

##### Elementary flows

None.

### Process: Drying and primary conditioning (`drying_and_conditioning`)

#### Inputs

##### Product flows

###### Raw oilseed input (`raw_oilseed_input`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
- Amount rule: Transfer measured raw seed at incoming moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
Raw activity or stage basis: incoming conditioning lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg conditioned seed
  - Basis: incoming conditioning lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel input (`conditioning_energy`)

Conditional one-material exchange: include Diesel fuel only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure the quantity of Diesel fuel actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology Specific (`technology_specific`)
Raw activity or stage basis: per conditioned lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`

###### Electricity, medium voltage input (`conditioning_energy_electricity`)

Conditional one-material exchange: include Electricity, medium voltage only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measure the quantity of Electricity, medium voltage actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology Specific (`technology_specific`)
Raw activity or stage basis: per conditioned lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`

###### Process water, tap water input (`cleaning_water`)

Conditional one-material exchange: include Process water, tap water only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Process water, tap water
- Flow property / unit: Volume / m3
- Amount rule: Measure the quantity of Process water, tap water actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route Specific (`route_specific`)
Raw activity or stage basis: per conditioned lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_conditioning`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Conditioned oilseed grain (`conditioned_oilseed`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c.
- Flow property / unit: kg
- Amount rule: Measured conditioned seed at declared moisture and purity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
Raw activity or stage basis: conditioned lot output.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg raw seed
  - Basis: conditioned lot output
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Verify this intermediate state or co-product grade independently; the reference-output UUID is not evidence for this row.

##### Waste flows

###### Cleaning rejects and foreign matter (`cleaning_rejects`)

Only when Crambe screenings are discarded as waste; saleable lower-grade seed requires a separate product output. Other foreign materials require distinct waste identities.

- Selected flow: Crambe seed screenings waste
- Flow property / unit: kg
- Amount rule: Measured Crambe seed screenings discarded to the declared treatment route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per conditioned lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg raw seed
  - Basis: per conditioned lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Dust from dry handling (`dust_release`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select exact particulate identity and receiving air compartment
- Flow property / unit: kg
- Amount rule: Measure or calculate released dust after capture; do not use a generic particulate UUID.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology Specific (`technology_specific`)
Raw activity or stage basis: per conditioned lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg conditioned seed
  - Basis: per conditioned lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grading, packaging and storage (`grading_packaging_and_storage`)

#### Inputs

##### Product flows

###### Conditioned oilseed input (`conditioned_oilseed_input`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
- Amount rule: Transfer conditioned seed to grading, storage or load-out.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
Raw activity or stage basis: incoming finalization lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_final`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg product
  - Basis: incoming finalization lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated cardboard box input (`packaging_materials`)

Conditional one-material exchange: include Corrugated cardboard box only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Measure the quantity of Corrugated cardboard box actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
Raw activity or stage basis: per final product lot.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Polyethylene packaging film input (`packaging_materials_plastic_film`)

Conditional one-material exchange: include Polyethylene packaging film only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measure the quantity of Polyethylene packaging film actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
Raw activity or stage basis: per final product lot.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Diesel fuel input (`storage_energy`)

Conditional one-material exchange: include Diesel fuel only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure the quantity of Diesel fuel actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per final product lot.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`

###### Electricity, medium voltage input (`storage_energy_electricity`)

Conditional one-material exchange: include Electricity, medium voltage only when process records establish its use. Record every other actual carrier, water source or material as a separate exchange with its own quantity and verified or explicitly unresolved identity. This example does not assert use.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measure the quantity of Electricity, medium voltage actually used in this process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per final product lot.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Declared other oilseed at gate (`reference_product`)

Record the measured accepted output of `grading_packaging_and_storage` only when that operation actually occurs. Preserve species, condition, grade, moisture, lot and its real outgoing gate. This stable row id identifies an actual route output; the sole final reference is reference_product_at_declared_handoff. Retain raw output and link the selected final lot without counting it as another final product. Any UUID shown is usable only for its independently confirmed physical state/gate; an incompatible upstream/intermediate state needs a separately verified or explicit unresolved identity. Preserve the original stage measurement and collection records.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
Raw output measurement and reconciliation: Weigh the accepted net lot output of the actual operation under `cp_final`, retain gross/tare, rejects, stocks, moisture and matched onward lot records, and reconcile before final normalization.

- Amount rule: measured accepted net output from the actual operation under `cp_final`; retain raw lot quantity and actual stage throughput, then derive its final contribution once under the final-handoff normalization in Section 8; never prescribe a fixed intermediate yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured actual operation/lot output and throughput, retained before one final-reference normalization.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final`

###### Downgraded saleable oilseed (`downgraded_oilseed`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c.
- Flow property / unit: kg
- Amount rule: Measure separately when a lower grade remains a saleable oilseed output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
Raw activity or stage basis: per grading lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_final`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg graded input
  - Basis: per grading lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Verify this intermediate state or co-product grade independently; the reference-output UUID is not evidence for this row.

##### Waste flows

###### Crambe seed screenings waste (`final_rejects`)

Conditional one-material exchange: include Crambe seed screenings waste only when the actual route and records establish its use or release. Other products, fuels, waste materials, or emitted species require separate atomic rows with independent quantity, state and identity. No use is inferred from this example.

- Selected flow: Crambe seed screenings waste
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate only Crambe seed screenings waste for this process and period using route-specific records; do not combine other species or carriers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
Raw activity or stage basis: per final product lot.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_final`

##### Elementary flows

None.

### Process: Accepted-product measurement at declared handoff (`declared_reference_handoff`)
This measurement adds no processing, waste generation or emission. Preserve all real upstream operations and losses; bypass only operations demonstrated absent. Select one actual terminal product lot and cancel its paired internal transfer once when aggregating the system. Do not sum inactive routes, co-products or both source and handoff as accepted final output.

#### Inputs
##### Product flows
###### Accepted actual-route product at the same handoff (`actual_route_product_for_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net mass at this same handoff, normalized as R/R * 1 kg; paired input equals accepted output, with raw R retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`

##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows
###### Reference product at declared handoff (`reference_product_at_declared_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`

##### Waste flows
Actual waste remains at the operation that generates it; no duplicate here.
##### Elementary flows
Actual releases remain at their responsible physical operation; no duplicate here.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_assignment | all nodes | Directly assign measurable species-, field-, batch-, grade- and use-specific inputs. | mass-balance-identity |
| multi_output | saleable seed grades and species-specific co-products | Record every intended output separately; allocate shared burdens by mass at the declared moisture basis unless reviewed economic evidence supports another rule. | mass-balance-identity |
| residue_fate | stalks, hulls, pods and rejects | Treat as a co-product only with an independent saleable destination and reference flow; otherwise record residue or waste and fate. | mass-balance-identity |
| shared_assets | shared machinery, drying and storage | Attribute once by measured hours, energy or throughput and prevent duplication between field and conditioning nodes. | mass-balance-identity |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


All ranges are provisional QA screens, not default inventory values or compliance limits.

### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_field | managed_production | field inputs | primary activity record | species, field area, planting, product IDs, nutrient composition, water and protection products | field log, invoices and meters; Raw aggregation and attribution: sum by product and field-cycle; each nutrient product once | ha; kg; m3; L | each operation | complete crop cycle | declared field or protected unit | per declared reference flow | invoices, labels, calibrated meters |
| cp_energy | all processes | energy carriers | meter or allocation record | carrier, quantity, unit, equipment, hours and process | meter, fuel ticket or equipment log; Raw aggregation and attribution: sum by carrier and assign once to process | kWh; MJ; L; kg | each operation or batch | complete crop cycle and conditioning lots | named field and facility | per declared reference flow | meter calibration, invoices, machine logs |
| cp_yield | managed_production | crop yield | weighing and survey record | standing estimate, harvested mass, area and loss | calibrated scale and field survey; Raw aggregation and attribution: reconcile standing, harvested and field-loss mass | kg; ha | each harvest lot | complete harvest window | field and lot | per declared reference flow | scale certificate and survey sheet |
| cp_emissions | managed_production | soil emissions | calculation input record | N inputs, species, medium, soil and method factors | nutrient ledger and declared method; Raw aggregation and attribution: calculate separately by species and receiving medium | kg N; kg emission | each crop cycle | all managed periods | field | per declared reference flow | nutrient ledger and method sheet |
| cp_harvest | harvest_and_extraction | seed and residues | lot mass record | gross crop, raw seed, residues, losses, technology and destination | calibrated weighing and lot log; Raw aggregation and attribution: mass reconcile all outputs and stock change | kg | each lot | complete harvest window | field and lot | per declared reference flow | scale certificate and lot tickets |
| cp_conditioning | drying_and_conditioning | moisture, product and rejects | batch record | incoming and outgoing mass, moisture, foreign matter, dust, water and route | scale, moisture test, meter and batch log; Raw aggregation and attribution: dry-matter and wet-mass reconciliation by batch | kg; %; m3 | each batch | all conditioning batches | conditioning line and batch | per declared reference flow | scale and moisture calibration, batch sheet |
| cp_packaging | grading_packaging_and_storage | packaging | material issue record | material type, mass, count, reuse and product lot | warehouse issue and packaging log; Raw aggregation and attribution: sum virgin and reused materials separately | kg; item | each lot | all packed lots | packing line and lot | per declared reference flow | invoice, issue ticket, count check |
| cp_final | grading_packaging_and_storage | grades and reference product | final lot record | species, use, moisture, grade, accepted, downgraded, rejected and stock change | calibrated scale, grade test and dispatch ticket; Raw aggregation and attribution: reconcile incoming with grades, rejects and stock change | kg; % | each lot | all released lots | facility, store and lot | per declared reference flow | scale certificate, lab or grade report, dispatch ticket |
| `cp_phase1_environment_coverage` | managed_production | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage; site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inputs | Divide same-cycle or same-batch input by net accepted product at the declared gate. | activity records and product mass | inventory per kg reference product |  |
| moisture_balance | drying | Conserve dry matter; calculate removed water from measured incoming and outgoing moisture and check losses. | incoming/outgoing mass and moisture | dry-matter discrepancy | mass-balance-identity |
| lot_balance | harvest and conditioning | Input plus stock decrease equals products, residues, wastes, releases and stock increase. | all measured lot flows | mass discrepancy | mass-balance-identity |
| nutrient_expand | nutrient inputs | Emit each physical product exchange once and retain composition for analytical N/P/K; do not duplicate compound products. | product ID, mass and composition | concrete product exchanges and nutrient ledger |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_emissions`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference product | Species, use, moisture, grade, route and gate shall all be populated. | lot and dispatch records |
| dq_mass | all processes | Calibrate scales and reconcile field, harvest, conditioning and final-lot balances. | calibration certificates and balance sheet |
| dq_route | conditional processes | Activate only conditioning, packaging and storage routes that actually occur. | operation and batch logs |
| dq_binding | all exchanges | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | flow identity audit |

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | actual accepted terminal product and paired transfer | scale/lot/acceptance records | species; state; grade; moisture/basis; gate; actual_terminal_process_id; actual_terminal_output_row_id; lot/transfer_id; gross/tare/net mass R; raw stage totals/throughputs; stocks, rejects and destinations | Weigh accepted net R at the existing gate; match exactly one actual terminal source of the same lot/state and reconcile all earlier losses and stocks. If conditional preparation is absent use the last actual included eligible product output, without inventing that preparation. Preserve original activity records and all required qualifiers. | kg and native activity units | each accepted lot | matched production and handoff period | existing declared producer/primary gate | per declared reference flow | calibrated weighing, acceptance/grade records, lot chain, activation/bypass evidence and closed balances |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | all foreground quantities and actual route outputs | Let R be positive measured accepted final mass in kg for one matched species/state/grade/gate/period, excluding tare, rejects, co-products and held stock. Physical ledger = raw physical quantity/R * 1 kg, without burden-allocation scaling. Attributable inventory contribution = attributable raw quantity/R * 1 kg, preserving native numerator units and the existing output/period attribution. A local intensity q_i=Q_i/O_i first reconstructs Q_i=q_i*actual linked O_i; do not divide by R again after final normalization. Both handoff sides are the same measured event R/R*1 kg, not another physical yield. Include only actual active operations; record and substantiate bypass. Missing/nonpositive R or an unlinked terminal record blocks a normalized complete result, not zero. Preserve original stage data and cancel paired internal transfers once. | cp_declared_reference_handoff; original linked collection protocols | native quantities per declared final reference | `declared-handoff-measurement-definition` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_other | product identity | Confirm the named species belongs in CPC 01449 and has no separate oilseed CPC leaf. | unsd-cpc-30 |
| validate_reference | reference flow | Check 1 kg net mass and mandatory species, use, moisture, grade and gate qualifiers. | mass-balance-identity |
| validate_balance | each lot | Reconcile inputs, outputs, losses, stock and moisture change without double-counting transfers. | mass-balance-identity |
| validate_ranges | every card | Investigate observations outside screens, but do not reject supported real measurements solely for exceeding a provisional interval. |  |
| validate_sets | parameterized inputs | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | selected actual route and all conditional bypass states | Check both presence and absence of optional conditioning/packing/storage against actual records: exactly one required handoff reference persists, its source product/state/gate matches Section 3, active physical rows retain measured throughput, and inactive physical activities add no exchange. Require raw accepted mass, upstream closure, unique transfer pairing and single final normalization; an unexplained state or missing identity is not an assumed valid branch. | `declared-handoff-measurement-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | species-, field- and batch-specific other-oilseed foreground data package |
| downstream_use | `secondary_dataset`; may serve as `background_dataset` after geography, technology and time matching |
| allowed_use | modelling one named CPC 01449 oilseed from production to the declared gate |
| excluded_use | other CPC oilseeds, sowing seed, oil, meal or multi-species averages |
| required_metadata | species, use, moisture, grade, geography, cycle, production technology, conditioning route, gate and allocation |
| required_quality_disclosure | weighing and moisture checks, concrete flow identity verification, unresolved identities, provisional ranges and gaps |
| update_trigger | change in species, use, technology, moisture, grade, gate, allocation or method factor |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-30 | official_guidance | United Nations Statistics Division, CPC Version 3.0, https://unstats.un.org/unsd/classifications/Econ/cpc | category boundary and residual-category decision |
| fao-grain-storage | official_guidance | FAO, Grain storage techniques, https://www.fao.org/4/s1250e/S1250E0u.htm | drying, cleaning, storage and moisture-record route |
| mass-balance-identity | method_factor | Conservation relation for mass inputs, outputs, losses and stock change | batch and moisture mass reconciliation |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | This PCR Sections 3, 6 and 8: matched accepted handoff mass divided by itself times the declared reference amount; physical transfer pairing and dimensional normalization identity, not an empirical yield or new physical operation. | single accepted reference and measured route-throughput linkage |
