---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-molluscs-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other molluscs, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR supports foreground data packages for edible molluscs placed on the market frozen, smoked, smoke-dried, dried, salted, or in brine within CPC 3.0 subclass 21268. It covers processing from receipt of edible raw or previously prepared molluscs at the processing facility through one declared preservation route and release of the conforming packaged product at the factory gate.

Capture or aquaculture, landing, upstream production of purchased ingredients, energy, refrigerants, and packaging, distribution after the factory gate, retail, preparation, consumption, and end-of-life are represented by linked upstream or downstream datasets rather than duplicated in the foreground. Fish, crustaceans, live or fresh-only molluscs outside the stated preserved market states, and molluscs or derived materials intended for non-food uses are excluded. Inedible or food-rejected material remains outside the edible-product boundary and is recorded as waste or a disclosed non-food co-product according to its actual destination.

The selected Tiangong reference product flow is `Cephalopod`. Although that flow is classified CPC 21268, it is a narrower representative and is not a generic flow for all other molluscs. It may identify the reference product only for a cephalopod dataset. A dataset for another mollusc taxon must select and verify a semantically appropriate product flow instead of reusing this UUID.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-molluscs-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0 `21268`, Other molluscs, frozen, smoked, dried, salted or in brine |
| covered_products | Edible mollusc products in the stated frozen, smoked, smoke-dried, dried, salted, or in-brine market states |
| excluded_products | Non-food products; fish and crustaceans; live or fresh-only molluscs outside the stated preserved states; products whose taxon or processing route is not declared |
| representative_product | A declared cephalopod product when Tiangong flow `f8506281-c8fe-4960-b1eb-331d5d75811f` is used; the flow is narrower than the full category |
| production_route | Common receipt and preparation followed by exactly one route family: frozen; smoked/smoke-dried/dried; or salted/in brine |
| market_state | Conforming edible product at the processor factory gate, with preservation state, mass basis, and packaging inclusion declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A conforming edible mollusc product in one declared CPC 21268 preservation state |
| How much | 1 kg of qualifying product on the declared reference mass basis |
| How well | Meets the declared product specification and applicable food-safety acceptance criteria; taxon and route are identified |
| How long or cycle | One production lot released at the factory gate; storage duration is declared when storage is included |
| reference_flow_link | The reference amount is the measured qualifying output after route-specific mass-basis adjustments below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg conforming product |
| Reference product flow | Cephalopod `f8506281-c8fe-4960-b1eb-331d5d75811f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | scientific or commercial taxon; preservation route and technique; edible/food-grade status; net mass basis; product moisture content for dried or smoke-dried products; salt content or salinity basis for salted or brined products; glaze percentage and whether glaze is excluded for frozen products; drained mass and drainage method for products in brine; packaging inclusion; facility geography; production period |

When constructing a foreground data package, every applicable qualifier must be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent field. The default reference mass excludes packaging. Frozen product is reported as net product mass excluding glaze, with glaze percentage separately recorded. Product in brine is reported on drained product mass using a declared drainage method; if a legally required net-contents basis is used instead, both net contents and drained mass and their conversion must be reported. Dried and smoke-dried product uses as-sold mass with measured moisture content; salted and brined product uses as-sold or drained mass with measured salt content or salinity basis. A different basis is allowed only when explicitly identified and converted to the 1 kg reference flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg qualifying product on the declared net, drained, glaze-excluded, and moisture/salt basis as applicable. |
| `route_mass_basis` | Route input and output masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record received mass, prepared mass, qualifying output, rejects, packaging, glaze water, and brine separately; do not treat covering liquid, glaze, or packaging as edible reference product. |
| `moisture_salt_conversion` | Dried, smoked, salted, or brined product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured as-sold moisture and salt/salinity data. Any dry-matter, salt-free, or drained-mass conversion must show the measured inputs and formula. |
| `energy_conversion` | Electricity, thermal energy, and fuel | Declared energy or fuel property | kWh, MJ, or physical fuel unit | Preserve primary records and document conversion factors; do not combine electricity and thermal energy without a traceable conversion. |

## 5. System Boundary

The foreground begins when edible molluscs and ancillary materials are accepted at the processing facility and ends when the conforming preserved product is packaged and released at the factory gate. Include actual cleaning, evisceration or shell removal when performed, grading, route-specific preservation, cold or ambient holding attributable to the lot, packaging, direct water and energy use, food rejects, wastewater or spent brine, refrigerant leakage when applicable, and other direct emissions that cross the foreground boundary.

Purchased raw molluscs, ingredients, utilities, refrigerants, and packaging require linked upstream datasets. Excluded capital goods or minor inputs may be omitted only under the applicable study rules and must be disclosed; the PCR sets no unsupported numeric cut-off. Transport within the declared foreground and transport separately purchased for the lot must not be double counted.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Edible received molluscs at the processing-facility gate, with taxon, prior preservation state, supplier or source, temperature where relevant, and received mass declared |
| starting_condition_role | Foreground processing input; capture/aquaculture and earlier handling are upstream |
| product_classification_scope | CPC 3.0 subclass 21268 for the qualifying finished product; the Cephalopod UUID is a narrower representative |
| recursive_input_rule | A purchased input already in this PCR category is recorded once as an upstream product dataset with its state and mass basis; do not recursively reproduce its earlier preservation route in the foreground |
| upstream_dataset_requirement | Link representative datasets for received molluscs and all material purchased inputs, energy, packaging, refrigerants, and inbound transport included in the study scope |
| disclosure | Declare starting state, selected route, route exclusions, storage, packaging, mass-basis adjustments, non-food outputs, omitted flows, and upstream data substitutions |

- `boundary_route_exclusivity`: Include `prepare_molluscs` and exactly one finishing route family: `freeze_product`, `smoke_or_dry_product`, or `salt_or_brine_product`. A combined commercial product must be assigned to the route that defines its declared market state and must disclose any additional unit operations without activating a second reference-product route.
- `boundary_non_food`: Material not accepted as edible product must remain a waste or explicitly identified non-food co-product. It must not be counted in the reference flow or silently modelled as food.
- `boundary_completeness`: Include all material, energy, water, direct-emission, waste, and treatment flows that materially cross the declared foreground; disclose any rule-based exclusions and the rule applied.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_molluscs` | Receive and prepare molluscs | required | Always; record only preparation operations actually performed | Common foreground preparation | kg prepared edible molluscs |
| `freeze_product` | Freeze and finish product | conditional | Selected only when the declared route family is frozen | Mutually exclusive finishing route | kg qualifying frozen product excluding glaze |
| `smoke_or_dry_product` | Smoke or dry and finish product | conditional | Selected only when the declared route family is smoked, smoke-dried, or dried; declare the technique | Mutually exclusive finishing route | kg qualifying as-sold product with moisture declared |
| `salt_or_brine_product` | Salt or brine and finish product | conditional | Selected only when the declared route family is salted or in brine; declare dry-salt or brine technique | Mutually exclusive finishing route | kg qualifying product on declared net or drained basis |

Every range labelled “Provisional screening estimate” is a conditional `reasoned_estimate`, not a conformance limit or substitute for foreground data. Use it only when route-specific measured records are temporarily unavailable. Replace it at the first availability of representative lot/campaign measurements, supplier or utility records, or reviewed source-backed evidence; at methodology review, three representative production lots or an approved alternative evidence basis triggers replacement.

### Process: Receive and prepare molluscs (`prepare_molluscs`)

#### Inputs

##### Product flows

###### Received edible molluscs (`received_molluscs`)

Record the accepted food-grade mollusc mass entering foreground preparation, including taxon and prior state.

- Selected flow: Facility-specific edible mollusc input
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Range: Provisional screening estimate, conditional on taxon and route
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg qualifying finished product
  - Basis: received edible mass per 1 kg qualifying product; broad enough for frozen through dried routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record metered or allocated water crossing the facility boundary for washing, thawing, cleaning, or de-salting.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water use allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared edible molluscs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional screening estimate, only when water records are absent
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared edible molluscs
  - Basis: route- and facility-dependent preparation water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared edible molluscs (`prepared_molluscs`)

Calculate prepared edible mass from measured accepted input and separately measured rejects or retained non-food fractions.

- Selected flow: Prepared edible molluscs, facility-specific intermediate
- Flow property / unit: Mass / kg
- Amount rule: calculated prepared output mass reconciled to lot records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Food rejects and non-food fractions (`preparation_rejects`)

Record separately the measured material rejected from food use and its actual waste treatment or non-food destination.

- Selected flow: Organic processing residue or destination-specific non-food co-product
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg received edible molluscs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional screening estimate, conditional on received form and preparation intensity
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg received edible molluscs
  - Basis: rejected or separated fraction of received mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater crossing the foreground boundary; characterize salinity or organic loading when relevant to treatment selection.

- Selected flow: Wastewater, treatment-specific
- Flow property / unit: Mass / kg
- Amount rule: metered, balanced, or allocated wastewater volume converted to mass with the declared density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared edible molluscs
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_records`
- Range: Provisional screening estimate, only when discharge records are absent
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 25
  - Unit: kg/kg prepared edible molluscs
  - Basis: preparation wastewater leaving the process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Freeze and finish product (`freeze_product`)

#### Inputs

##### Product flows

###### Prepared mollusc input (`frozen_route_input`)

Record prepared edible molluscs transferred into the freezing route without duplicating upstream preparation.

- Selected flow: Prepared edible molluscs, facility-specific intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_route_records`

###### Freezing electricity (`freezing_electricity`)

Record metered electricity for freezing, attributable frozen storage, and finishing.

- Selected flow: Electricity, delivered
- Flow property / unit: Energy / kWh
- Amount rule: meter or engineering allocation to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg qualifying frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_route_records`
- Range: Provisional screening estimate, conditional on freezing technology and storage duration
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 3
  - Unit: kWh/kg qualifying frozen product
  - Basis: electricity for the declared frozen-route foreground
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

Record water incorporated as glaze only when glazing is applied; it is excluded from the edible reference mass.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured glaze application minus recovered water, reconciled with product glaze percentage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg frozen product excluding glaze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_route_records`
- Range: Provisional screening estimate, applicable only to glazed product
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg frozen product excluding glaze
  - Basis: applied glaze water per net edible product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-route packaging (`frozen_packaging`)

Record primary, secondary, and route-attributable tertiary packaging by material; packaging is excluded from reference mass.

- Selected flow: Packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: purchasing or packing-line records allocated to qualifying product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_route_records`
- Range: Provisional screening estimate, conditional on pack format
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg qualifying frozen product
  - Basis: total packaging mass by material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Refrigerant released (`refrigerant_release`)

Include attributable refrigerant leakage when mechanical refrigeration is within the foreground.

- Selected flow: Refrigerant emission, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: service-log mass balance allocated by documented operating driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg qualifying frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_route_records`
- Range: Provisional screening estimate, applicable only when leakage is attributable
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg qualifying frozen product
  - Basis: substance-specific foreground refrigerant release
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Qualifying frozen product (`frozen_product`)

Report the measured conforming output net of packaging and glaze and normalize it to the reference flow.

- Selected flow: Cephalopod `f8506281-c8fe-4960-b1eb-331d5d75811f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg qualifying product on the declared glaze-excluded net mass basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `unsd-cpc-3-0-21268`; `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

### Process: Smoke or dry and finish product (`smoke_or_dry_product`)

#### Inputs

##### Product flows

###### Prepared mollusc input (`smoke_dry_route_input`)

Record prepared edible molluscs transferred into the declared smoked, smoke-dried, or dried route.

- Selected flow: Prepared edible molluscs, facility-specific intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying as-sold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_dry_records`
- Sources: `codex-cxc-52-2003`

###### Route energy (`smoke_dry_energy`)

Record electricity, fuel, and purchased heat separately for smoking, drying, cooling, and attributable holding.

- Selected flow: Electricity, fuel, or heat, energy-carrier-specific
- Flow property / unit: Energy or fuel property / kWh, MJ, or physical fuel unit
- Amount rule: metered or reconciled energy-carrier records allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg qualifying as-sold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_dry_records`
- Range: Provisional screening estimate, conditional on technique and final moisture
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 30
  - Unit: MJ-equivalent/kg qualifying as-sold product
  - Basis: screening aggregate only; final inventory must retain separate energy carriers
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smoking material (`smoking_material`)

Record wood, smoke condensate, or other smoking medium only when used; identify material and whether it is consumed or recovered.

- Selected flow: Smoking medium, material-specific
- Flow property / unit: Mass / kg
- Amount rule: purchasing and batch-use records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_dry_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional screening estimate, applicable only to smoking operations
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg qualifying product
  - Basis: smoking medium charged to the declared route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smoke/dry-route packaging (`smoke_dry_packaging`)

Record packaging by material and exclude it from the reference product mass.

- Selected flow: Packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: purchasing or packing-line records allocated to qualifying product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_dry_records`
- Range: Provisional screening estimate, conditional on pack format
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg qualifying product
  - Basis: total packaging mass by material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualifying smoked or dried product (`smoke_dry_product`)

Report the conforming as-sold product with route technique and measured moisture content.

- Selected flow: Cephalopod `f8506281-c8fe-4960-b1eb-331d5d75811f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg qualifying product on the declared as-sold moisture basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `unsd-cpc-3-0-21268`; `codex-cxc-52-2003`; `eu-pef-recommendation-2021-2279`

##### Waste flows

###### Smoke/dry rejects and residues (`smoke_dry_residues`)

Record off-spec food rejects, spent smoking material, ash, and other treatment-specific residues separately by destination.

- Selected flow: Route-specific waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_dry_records`
- Range: Provisional screening estimate, conditional on technique
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg qualifying product
  - Basis: combined route residue used only for screening; final data separate waste types
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Salt or brine and finish product (`salt_or_brine_product`)

#### Inputs

##### Product flows

###### Prepared mollusc input (`salt_brine_route_input`)

Record prepared edible molluscs transferred into dry salting or brining.

- Selected flow: Prepared edible molluscs, facility-specific intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying product on declared net or drained basis
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_brine_records`
- Sources: `codex-cxc-52-2003`

###### Salt input (`salt_input`)

Record salt and other curing ingredients separately; do not infer salt uptake from charged salt without a mass balance.

- Selected flow: Salt
- Flow property / unit: Mass / kg
- Amount rule: purchasing and batch-charge records, reconciled with recovery and spent brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_brine_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional screening estimate, conditional on dry-salt or brine technique
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 2
  - Unit: kg/kg qualifying product
  - Basis: salt charged before recovered or discharged salt is reconciled
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brine water (`brine_water`)

Record water used to prepare covering or process brine when the in-brine technique is selected.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured batch charge less documented reuse, with brine salinity recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying drained product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_brine_records`
- Range: Provisional screening estimate, applicable only to brining
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg qualifying drained product
  - Basis: fresh brine water charged after documented reuse
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt/brine-route packaging (`salt_brine_packaging`)

Record packaging and containers by material; covering brine and packaging are excluded from drained reference mass.

- Selected flow: Packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: purchasing or packing-line records allocated to qualifying product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_brine_records`
- Range: Provisional screening estimate, conditional on pack format
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg qualifying product
  - Basis: total packaging mass by material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualifying salted or brined product (`salt_brine_product`)

Report the conforming product with salt or salinity basis and, for product in brine, the declared drained-mass method.

- Selected flow: Cephalopod `f8506281-c8fe-4960-b1eb-331d5d75811f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg qualifying product on the declared net or drained mass basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `unsd-cpc-3-0-21268`; `codex-cxc-52-2003`; `eu-pef-recommendation-2021-2279`

##### Waste flows

###### Spent brine and salt-bearing wastewater (`spent_brine`)

Record spent brine and salt-bearing wastewater separately from ordinary wastewater, including salinity and treatment destination.

- Selected flow: Salt-bearing wastewater or spent brine
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or batch balance less documented reuse
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_salt_brine_records`
- Range: Provisional screening estimate, applicable only when spent brine crosses the boundary
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 12
  - Unit: kg/kg qualifying product
  - Basis: spent brine or salt-bearing wastewater after documented reuse
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

- `allocation_subdivide_first`: Keep preparation and the selected preservation route at lot or line level and subdivide shared utilities whenever records permit. Do not average inactive routes into the reference product.
- `allocation_physical_then_economic`: Where subdivision or system expansion is not feasible, use a physical relationship that reflects the process causality. Mass allocation is allowed only when mass is a defensible causal relationship and the same declared mass basis is used. If no defensible physical relationship exists, use economic allocation with representative prices, period, geography, and sensitivity disclosed, following the PEF hierarchy.
- `allocation_non_food_outputs`: Food rejects, inedible fractions, spent brine, and wastes receive no edible reference product. If an output is sold or used as a non-food co-product, document its quantity, destination, substituted function if any, allocation treatment, and the effect of treating it as waste instead.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_quality` | `prepare_molluscs` | received, prepared, rejected, and qualifying masses and quality | weighbridge/batch/quality records | lot_id; taxon; supplier/source; prior_state; received_mass; prepared_mass; reject_mass; edible_status; temperature; timestamp | calibrated scales plus acceptance and release records | kg; °C where applicable | each lot | representative production period, with season disclosed | each included facility | sum by lot and reconcile transfers before normalization | calibration, lot traceability, acceptance/release record, discrepancy explanation |
| `cp_preparation_records` | `prepare_molluscs` | water, wastewater, rejects, and preparation operations | meter/batch/waste records | lot_id; operation; water_reading; wastewater_reading_or_balance; reject_type; reject_mass; destination; operating_time | submeters where available; documented allocation otherwise | kg or m3 with density; kg waste | each lot or meter period | same period as product records | each included line/facility | allocate only across documented drivers and retain raw totals | meter identification, density/conversion, destination receipt, allocation check |
| `cp_frozen_route_records` | `freeze_product` | transfers, electricity, glaze, packaging, refrigerant, and frozen output | meter/line/service records | lot_id; input_mass; output_mass; electricity; storage_time; glaze_added; glaze_percent; packaging_by_material; refrigerant_charge_and_service | batch meters, scales, packing records, and refrigerant service mass balance | kg; kWh; h | each lot; service event for refrigerant | representative frozen-route campaigns | each included freezing line | sum by lot, allocate shared refrigeration by documented operating driver, normalize to glaze-excluded output | meter and scale calibration, service logs, glaze test, allocation rationale |
| `cp_smoke_dry_records` | `smoke_or_dry_product` | transfers, energy carriers, smoking medium, packaging, moisture, residues, and output | batch/meter/quality records | lot_id; technique; input_mass; output_mass; electricity; fuel; heat; smoking_material; packaging_by_material; moisture; residue_mass_and_destination | meters, invoices reconciled to stock, scales, and moisture test | kg; kWh; MJ; fuel unit; mass fraction | each lot or meter period | representative technique-specific campaigns | each included smoking/drying line | retain energy carriers separately, allocate shared use by documented driver, normalize to as-sold output | meter/scale calibration, fuel reconciliation, moisture method, waste receipt |
| `cp_salt_brine_records` | `salt_or_brine_product` | transfers, salt, brine water, salinity, packaging, spent brine, drained mass, and output | batch/quality/discharge records | lot_id; technique; input_mass; salt_charge; water_charge; reuse; brine_salinity; product_salt_content; net_contents; drained_mass; drainage_method; packaging_by_material; spent_brine_mass; destination | scales, batch sheets, salinity test, standardized declared drainage method, and discharge records | kg; salinity or mass fraction | each lot | representative dry-salt or brine campaigns | each included curing line | close salt/water balance where practicable and normalize to declared net or drained output | calibration, salinity method, drainage method, batch reconciliation, destination receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all selected route inventories | normalized amount = route-attributable amount / measured qualifying reference-product mass | route amount; qualifying output on declared mass basis | amount per 1 kg reference flow | `eu-pef-recommendation-2021-2279` |
| `calc_preparation_balance` | `prepare_molluscs` | reconcile received mass with prepared transfer, rejects, retained material, and documented mass change; explain unresolved difference rather than forcing balance | received, prepared, reject, retained, and wastewater records | preparation yield and reconciliation | `codex-cxc-52-2003` |
| `calc_glaze_exclusion` | `freeze_product` | qualifying mass = gross frozen mass - measured glaze mass - excluded packaging mass | gross mass; glaze test or glaze mass; packaging mass | glaze-excluded net product mass | `codex-cxc-52-2003` |
| `calc_drained_mass` | `salt_or_brine_product` | use the declared standardized drainage result for reference mass; retain net contents and covering-liquid mass separately | net contents; drained mass test; drainage method | qualifying drained product mass and conversion | `codex-cxc-52-2003` |
| `calc_refrigerant_release` | `freeze_product` | attributable release = documented system loss multiplied by a disclosed allocation share based on operating records | charge, additions, recovery, inventory change, operating driver | substance-specific refrigerant release | `eu-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | Retain taxon, product state, route, edible status, supplier/source, and lot traceability; do not use the Cephalopod UUID for a non-cephalopod product. | product specification, lot and flow-identity review; `unsd-cpc-3-0-21268` |
| `dq_measurement` | mass, water, energy, salt, brine, moisture, glaze, and waste | Use calibrated or controlled measurements and retain conversion, allocation, sampling, drainage, moisture, and salinity methods. | calibration and method records; `codex-cxc-52-2003` |
| `dq_representativeness` | all foreground values | Cover representative route-specific production, disclose season, technology, geography, capacity utilization, and anomalies, and keep inactive routes out of averages. | campaign coverage report and PEF data-quality review; `eu-pef-recommendation-2021-2279` |
| `dq_completeness` | all foreground processes | Reconcile lot transfers and account for material inputs, utilities, packaging, direct emissions, wastes, and treatment destinations; explain missing or zero values. | mass/energy checks and completeness register; `eu-pef-recommendation-2021-2279` |
| `dq_estimate_replacement` | every `reasoned_estimate` | Mark estimates provisional and replace them when representative foreground records or reviewed external quantitative evidence become available; methodology review must resolve or explicitly accept remaining estimates. | replacement log and reviewer decision |

## 9. Validation Rules

- `validate_scope`: Confirm the product is an edible mollusc in one declared covered market state and is not a non-food product, fish, crustacean, or an undeclared fresh-only product.
- `validate_reference_identity`: If product flow `f8506281-c8fe-4960-b1eb-331d5d75811f` is used, confirm the product is a cephalopod and disclose that the flow is narrower than CPC 21268; otherwise require a verified taxon-appropriate flow.
- `validate_route`: Require `prepare_molluscs` and exactly one finishing route family. Reject datasets that combine two route outputs or average inactive routes without an explicit combined-product specification and allocation model.
- `validate_reference_basis`: Require 1 kg qualifying output and all applicable net-mass, moisture, salt/salinity, glaze, drained-mass, packaging, geography, and period qualifiers. Recalculate the normalization from raw records.
- `validate_inventory`: Confirm that selected-process inputs, utilities, packaging, direct emissions, rejects, wastewater or spent brine, and output destinations are present or explicitly justified as not applicable; require traceable upstream datasets for purchased inputs.
- `validate_balance_and_allocation`: Reperform mass and route-transfer reconciliations and verify subdivision/allocation choices and non-food output treatment; unresolved differences or undocumented allocation make validation inconclusive.
- `validate_estimates`: Identify every `reasoned_estimate`; fail reviewed use when replacement evidence is available but not applied, or when an estimate is used as a mandatory conformance limit without explicit reviewer acceptance.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-specific foreground product dataset for a declared edible mollusc product |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` after review and publication |
| allowed_use | LCA process or lifecycle-model construction matching the declared taxon, route, geography, technology, time, and mass basis |
| excluded_use | Generic representation of all CPC 21268 products from the Cephalopod UUID; non-food products; undeclared mixed routes; nutritional or food-safety certification |
| required_metadata | PCR id; CPC reference; product-flow UUID and semantic limitation; taxon; route/technique; edible status; net/drained/glaze/moisture/salt basis; facility geography; technology; production period; storage; packaging; upstream dataset choices; allocation |
| required_quality_disclosure | data coverage and representativeness; measurement and conversion methods; mass reconciliation; allocation; exclusions; substitutions; estimates and uncertainty; treatment of non-food outputs |
| update_trigger | New product-flow identity; change in taxon, route, technology, facility, specification, mass basis, or allocation; revised Codex/CPC/PEF rule; or availability of representative measurements or reviewed evidence that can replace a `reasoned_estimate` |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21268` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21268, “Other molluscs, frozen, smoked, dried, salted or in brine”, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-11) | Classification scope and official product-category wording; not quantitative evidence |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (accessed 2026-08-11) | Relevant receiving, hygienic handling, freezing, smoking/drying, salting/brining, product-condition, and recordkeeping process structure; no inventory default amounts |
| `eu-pef-recommendation-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (accessed 2026-08-11) | Reference-unit normalization, boundary completeness, allocation hierarchy, representativeness, data quality, and reporting rules; no product-specific inventory default amounts |
