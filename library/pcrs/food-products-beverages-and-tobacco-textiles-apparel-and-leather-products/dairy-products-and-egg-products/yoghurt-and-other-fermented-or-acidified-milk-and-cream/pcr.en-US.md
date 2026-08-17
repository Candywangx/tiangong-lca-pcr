---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.yoghurt-and-other-fermented-or-acidified-milk-and-cream
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Yoghurt and other fermented or acidified milk and cream

## 1. Scope and Applicability

This PCR governs foreground data packages for yoghurt and other milk or cream products whose defining transformation is microbial fermentation, direct acidification, or both. It covers plain, flavoured, fruited, concentrated, heat-treated-after-fermentation, drinkable, spoonable, and other market forms when the product remains a fermented or acidified dairy product. It also covers fermented and acidified cream.

The PCR does not cover unfermented drinking milk, cheese, butter and anhydrous milk fat, dried whey ingredients, frozen dairy desserts, plant-based analogues, or products in which the dairy portion no longer defines the product. Raw-milk farming and transport to the dairy are upstream rather than foreground processes. Distribution, retail, consumer refrigeration or use, and end-of-life are outside the core factory-gate foreground package unless a declared study expands the boundary.

The canonical foreground result is un-packaged product at the manufacturing facility cold-storage or dispatch gate. Product formulation, species, fat and dry-matter content, microbial or direct-acidification route, post-fermentation heat treatment, concentration, flavouring, packaging status, geography, and reference period are mandatory qualifiers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.yoghurt-and-other-fermented-or-acidified-milk-and-cream` |
| classification_refs | CPC 3.0: 22230 (exact mapping context; acceptance is governed separately) |
| covered_products | Yoghurt; alternate-culture yoghurt; fermented milk; concentrated fermented milk; fermented-milk drinks; flavoured or fruited fermented milk; heat-treated fermented milk; fermented cream; acidified milk; acidified cream |
| excluded_products | Unfermented liquid milk; cheese; butter and anhydrous milk fat; dried whey products; ice cream and frozen dairy desserts; non-dairy analogues; farm-gate raw milk |
| representative_product | Refrigerated spoonable fermented milk or yoghurt, standardized, cultured, plain or flavoured, at the dairy dispatch gate |
| production_route | Chilled dairy ingredient receipt; standardization and optional homogenization; heat treatment; inoculation and fermentation or controlled direct acidification; optional concentration, blending, or post-fermentation heat treatment; cooling; filling or bulk dispatch; cold storage |
| market_state | Chilled liquid, semi-liquid, gelled, or concentrated dairy product; packaged or bulk as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fermented or acidified milk or cream fit for its declared food use |
| How much | 1 kg net product, excluding packaging |
| How well | Conforming to the declared product identity, formulation, fat and dry-matter content, treatment route, applicable food-safety requirements, and shelf-life specification |
| How long or cycle | One production batch through release at the manufacturing facility cold-storage or dispatch gate; declared shelf-life and storage temperature are metadata qualifiers |
| reference_flow_link | `fermented_dairy_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fermented Dairy Products `62cf4ac0-49ff-484a-9d1e-73e6df7f7743` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product designation; animal species; plain/flavoured/fruited; milk-fat and dry-matter content; spoonable/liquid/concentrated state; fermentation culture or acidification route; heat treatment before and after acidification; packaging status; storage temperature; geography; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground inventory to 1 kg net fermented or acidified dairy product. Packaging mass is excluded from the reference amount and recorded separately. |
| `wet_and_dry_matter` | dairy inputs, product, and dairy co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg wet mass and kg dry matter | Record wet mass and measured dry-matter fraction separately; never substitute volume for mass without a product- and temperature-specific density record. |
| `energy_carriers_separate` | facility energy | Energy | kWh and MJ | Preserve electricity in kWh and fuels or purchased thermal energy in MJ by carrier; document conversion factors and do not add them before conversion to a common energy unit. |
| `water_volume_consistent` | process and cleaning water | Volume | L or m3 | Record metered water volume and use 1 m3 = 1,000 L. Do not infer wastewater volume from water input when evaporation, product incorporation, or reuse is material. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Chilled dairy ingredients and other formulation inputs accepted at the manufacturing facility, with supplier identity, quantity, composition, temperature, and upstream dataset links declared |
| starting_condition_role | factory-gate foreground input |
| product_classification_scope | Fermented or acidified milk and cream products defined by product identity and route; CPC 3.0 code 22230 is classification context only |
| recursive_input_rule | A purchased fermented or acidified milk or cream input remains a visible product input with quantity and upstream dataset reference; do not recursively re-model it as if produced by the receiving facility |
| upstream_dataset_requirement | Link raw milk, cream, milk powders, other dairy ingredients, non-dairy ingredients, energy carriers, water supply, packaging, chemicals, and transport added by the declared scope to geographically and temporally appropriate upstream datasets |
| disclosure | Declare species, formulation, starting ingredient state, fermentation or acidification route, heat treatments, concentration, packaging inclusion, cold-storage endpoint, geography, reference period, excluded stages, and any proxy datasets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | core foreground package | Include receipt and storage, standardization, heat treatment and homogenization when used, fermentation or direct acidification, concentration or blending when used, cooling, filling or bulk dispatch, on-site cold storage, sanitation, direct emissions, product losses, waste, and wastewater up to the manufacturing dispatch gate. | `ifc-dairy-processing-ehs-2007`; `dairy-pefcr-2025` |
| `boundary_upstream_links` | purchased inputs | Keep farming, raw-milk collection, inbound transport, ingredient manufacture, energy supply, packaging manufacture, and chemical manufacture outside the foreground operation but link them through explicit upstream datasets when included in study scope. | `ifc-dairy-processing-ehs-2007`; `dairy-pefcr-2025` |
| `boundary_route_disclosure` | product identity | Distinguish microbial fermentation, direct acidification, combined routes, and post-fermentation heat treatment because these routes change required inputs, product claims, and storage conditions. | `codex-fermented-milks-243`; `codex-cream-288`; `ecfr-acidified-milk-131-111` |
| `boundary_optional_downstream` | expanded studies | Distribution, retail, consumer refrigeration and use, food loss, and packaging end-of-life may be appended only as separately declared downstream modules and shall not be folded into the factory-gate foreground result. | `dairy-pefcr-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `dairy_preparation` | Dairy receipt, standardization, and heat preparation | required | Always included | foreground production | kg prepared dairy mix |
| `fermentation_or_acidification` | Fermentation or controlled acidification | required | At least one declared route must be active | foreground transformation | kg treated bulk product |
| `finishing_and_cold_storage` | Conditioning, filling, and cold storage | required | Always included; packaging rows apply only when packaging is in scope | foreground finishing and storage | 1 kg released net product |
| `sanitation_and_wastewater` | Cleaning, product-loss control, and wastewater handling | required | Always included | foreground support and emissions control | allocated activity per 1 kg released net product |

### Process: Dairy receipt, standardization, and heat preparation (`dairy_preparation`)

#### Inputs

##### Product flows

###### Dairy base ingredients (`dairy_base_ingredients`)

Record milk, cream, skimmed milk, milk powder, whey-derived dairy ingredients, and other dairy materials that physically enter the product formulation. Keep each supplier ingredient separately identifiable.

- Selected flow: Declared dairy ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured accepted wet mass by ingredient and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Sources: `codex-fermented-milks-243`; `codex-cream-288`; `dairy-pefcr-2025`
- Range: Fermented-milk representative-formulation QA range for total dairy ingredients
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.80
  - Upper: 1.00
  - Unit: kg/kg released net product
  - Basis: total dairy ingredients in the plain, flavoured, and fruited spoonable examples
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

###### Non-dairy formulation ingredients (`non_dairy_ingredients`)

Record sugar, fruit preparations, flavours, stabilizers, salts, potable formulation water, and other permitted non-dairy ingredients separately when used.

- Selected flow: Declared non-dairy ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured batch issue or dosing record by ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Sources: `codex-fermented-milks-243`; `dairy-pefcr-2025`
- Range: Codex compositional ceiling for flavoured fermented milk
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg product
  - Basis: non-dairy ingredient mass fraction of flavoured fermented milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `codex-fermented-milks-243`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared dairy mix (`prepared_dairy_mix`)

The prepared mix is the measured intermediate after standardization, optional homogenization, and the declared heat treatment.

- Selected flow: Prepared dairy mix
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured ingredient inputs, transfers, and preparation losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_materials`
- Sources: `dairy-pefcr-2025`
- Range: Prepared-mix mass-balance screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.80
  - Upper: 1.10
  - Unit: kg/kg released net product
  - Basis: transferred prepared mix before fermentation or direct acidification
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Fermentation or controlled acidification (`fermentation_or_acidification`)

#### Inputs

##### Product flows

###### Prepared dairy mix input (`prepared_mix_input`)

Record the transferred prepared dairy mix entering the fermentation or acidification vessel.

- Selected flow: Prepared dairy mix
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated mass from calibrated vessel volume and product-specific density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_operation`
- Sources: `codex-fermented-milks-243`; `ecfr-acidified-milk-131-111`

###### Starter culture (`starter_culture`)

Record the identity and amount of each starter or other microorganism when microbial fermentation is used. Do not create this row for a direct-acidification-only product without culture.

- Selected flow: Declared starter culture
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-certified culture dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_operation`
- Sources: `codex-fermented-milks-243`; `codex-cream-288`

###### Acidifying ingredient (`acidifying_ingredient`)

Record acid or acidity regulator identity and dose when direct acidification is used. Do not infer a chemical acid input for products acidified solely by microbial fermentation.

- Selected flow: Declared food-grade acidifying ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured dosing record by substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_operation`
- Sources: `codex-cream-288`; `ecfr-acidified-milk-131-111`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fermented or acidified bulk product (`treated_bulk_product`)

Record the mass transferred after the declared endpoint pH or acidity, including any concentration, post-fermentation heat treatment, or blending that occurs before filling.

- Selected flow: Fermented or acidified bulk dairy product
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to vessel and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_operation`
- Sources: `codex-fermented-milks-243`; `codex-cream-288`; `ecfr-acidified-milk-131-111`

##### Waste flows

##### Elementary flows

### Process: Conditioning, filling, and cold storage (`finishing_and_cold_storage`)

#### Inputs

##### Product flows

###### Treated bulk product input (`treated_bulk_input`)

Record bulk product received from fermentation or acidification and reconcile it to filling or bulk dispatch.

- Selected flow: Fermented or acidified bulk dairy product
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_losses`
- Sources: `dairy-pefcr-2025`

###### Primary and secondary packaging (`packaging_materials`)

Record packaging by material and component when packaging is within the declared scope. For the canonical unpackaged reference, report packaging separately and do not add it to the 1 kg product amount.

- Selected flow: Declared packaging material
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging mass minus verified stock change, normalized by packed net product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged net product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `dairy-pefcr-2025`
- Range: Broad packaging-mass QA range across bulk and common consumer packs
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.10
  - Unit: kg packaging/kg net product
  - Basis: bulk product through high-mass single-use consumer container examples
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

###### Facility electricity (`facility_electricity`)

Collect metered electricity for preparation, fermentation or acidification, pumping, filling, refrigeration, storage, sanitation, and allocated support operations without double counting submetered loads.

- Selected flow: Electricity, declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered purchased plus on-site electricity consumed, net of exported electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net product after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_utilities`
- Sources: `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- Range: Dairy PEFCR replaceable default for fermented-milk processing electricity
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.137
  - Upper: 0.137
  - Unit: kWh/kg product
  - Basis: dairy-processing facility electricity per kg fermented milk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

###### Facility thermal energy (`facility_thermal_energy`)

Collect fuel and purchased heat by carrier for heat treatment, hot water, sanitation, and allocated support operations.

- Selected flow: Declared fuel or purchased thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced lower-heating-value energy by carrier, with conversion documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net product after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- Range: Dairy PEFCR replaceable default for fermented-milk processing thermal energy
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.590
  - Upper: 0.590
  - Unit: MJ/kg product
  - Basis: dairy-processing facility thermal energy per kg fermented milk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record rejected containers, lids, labels, cartons, and films by material and treatment route.

- Selected flow: Packaging waste, declared material
- Flow property / unit: Mass / kg
- Amount rule: measured scrap or packaging mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged net product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `dairy-pefcr-2025`
- Range: Provisional packaging-scrap screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg packaging issued
  - Basis: packaging scrap fraction before dispatch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant losses to air (`refrigerant_loss_air`)

Record refrigerant substance and annual leakage from systems serving the foreground facility.

- Selected flow: Declared refrigerant emission to air
- Flow property / unit: Mass / kg
- Amount rule: annual refrigerant additions plus opening charge minus closing charge and recovered quantity, allocated to product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net product after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `dairy-pefcr-2025`
- Range: Dairy PEFCR replaceable default refrigerant loss
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.000000005
  - Upper: 0.000000005
  - Unit: kg/kg product
  - Basis: 5.00E-6 g refrigerant per kg fermented milk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

#### Outputs

##### Product flows

###### Released fermented dairy product (`fermented_dairy_product_output`)

This is the declared reference product after quality release at the facility cold-storage or dispatch gate.

- Selected flow: Fermented Dairy Products `62cf4ac0-49ff-484a-9d1e-73e6df7f7743`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference amount of released net product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `dairy-pefcr-2025`
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: canonical reference amount
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

##### Waste flows

###### Off-specification product and process losses (`off_spec_product`)

Record spills, start-up and changeover losses, rejected product, and expired on-site stock separately from wastewater whenever they can be recovered or treated as a material stream.

- Selected flow: Off-specification fermented dairy product
- Flow property / unit: Mass / kg
- Amount rule: measured loss, reject, and recovery records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_losses`
- Sources: `ifc-dairy-processing-ehs-2007`
- Range: Provisional product-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg released net product
  - Basis: all foreground product losses before dispatch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning, product-loss control, and wastewater handling (`sanitation_and_wastewater`)

#### Inputs

##### Product flows

###### Process and cleaning water (`process_cleaning_water`)

Record make-up water for formulation, rinsing, cleaning-in-place, manual cleaning, cooling systems, and other foreground uses, net of internally reused water where measured.

- Selected flow: Process water, regionalized supply
- Flow property / unit: Volume / L
- Amount rule: metered withdrawal minus separately metered internal reuse, with formulation water identified
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net product after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- Range: Dairy PEFCR replaceable default water use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 3.2
  - Upper: 3.2
  - Unit: L/kg product
  - Basis: dairy-processing facility water use per kg fermented milk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

###### Acid cleaning agents (`acid_cleaning_agents`)

Record each acid cleaning agent as supplied and retain active concentration when available.

- Selected flow: Declared acid cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued mass minus stock change, allocated to product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net product after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- Range: Dairy PEFCR replaceable default acid-cleaner use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.030
  - Upper: 0.030
  - Unit: kg/kg product
  - Basis: acid cleaning agent per kg fermented milk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

###### Alkaline cleaning agents (`alkaline_cleaning_agents`)

Record each alkaline cleaning agent as supplied and retain active concentration when available.

- Selected flow: Declared alkaline cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued mass minus stock change, allocated to product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net product after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- Range: Dairy PEFCR replaceable default alkaline-cleaner use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.060
  - Upper: 0.060
  - Unit: kg/kg product
  - Basis: alkaline cleaning agent per kg fermented milk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Dairy-processing wastewater to treatment (`dairy_wastewater`)

Record wastewater volume and measured COD or other locally material load before off-site or on-site treatment. Keep recovered product and separately collected high-strength streams out of this row.

- Selected flow: Dairy-processing wastewater
- Flow property / unit: Volume / L
- Amount rule: metered wastewater sent to treatment; do not assume equality with water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net product after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- Range: Dairy PEFCR replaceable default wastewater volume
  - Range role: Default estimate (`default_estimate`)
  - Lower: 4.6
  - Upper: 4.6
  - Unit: L/kg product
  - Basis: wastewater sent to treatment per kg fermented milk product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dairy-pefcr-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | multi-output foreground operations | First use separate metering, subdivision, or batch-specific records to assign inputs, utilities, emissions, wastes, and packaging directly to the product that caused them. | `dairy-pefcr-2025` |
| `allocation_dry_matter` | inseparable dairy co-products and shared dairy-processing burdens | When direct assignment is impossible, allocate raw-milk upstream burdens, shared energy, water, chemicals, and wastewater by each dairy output's measured dry-matter mass: allocation factor i = dry-matter fraction i x wet output mass i / sum of that product over all dairy outputs. | `dairy-pefcr-2025` |
| `allocation_direct_materials` | product-specific ingredients and packaging | Assign formulation ingredients and packaging directly to the product using batch and bill-of-material records; do not distribute them across unrelated products. | `dairy-pefcr-2025` |
| `allocation_losses` | waste and product loss | Assign a loss directly when its originating product or batch is known; otherwise apply the same documented shared-process allocation basis used for the operation that generated it. | `ifc-dairy-processing-ehs-2007`; `dairy-pefcr-2025` |
| `allocation_disclosure` | all allocated inventory | Report the allocation level, data period, outputs, wet masses, dry-matter fractions, formula, resulting factors, and any deviation from direct assignment. | `dairy-pefcr-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_materials` | `dairy_preparation` | dairy and non-dairy inputs; prepared mix | batch production records | ingredient_id; supplier; lot_id; accepted_mass; dry_matter_fraction; dosing_mass; prepared_mix_mass; transfer_loss | calibrated scales, tank load cells, or volume plus measured density; reconcile to recipe and stock movement | kg wet mass; kg dry matter | each batch | representative continuous 12-month period | all lines producing the declared product | sum accepted inputs and outputs, then normalize to released net product | calibration certificates; supplier specifications; batch reconciliation; stock records |
| `cp_route_operation` | `fermentation_or_acidification` | culture, acidifier, treated bulk product, and route qualifiers | batch log and quality record | batch_id; culture_id; culture_dose; acidifier_id; acidifier_dose; starting_mass; endpoint_mass; pH; titratable_acidity; time; temperature; heat_treatment | dosing records, calibrated pH or acidity measurement, time-temperature historian, and vessel mass or volume record | kg; pH; acidity; deg C; h | each batch | same period as production output | every included route and product family | aggregate mass by route; keep route qualifiers separate before normalization | instrument calibration; culture or acidifier certificate; batch release record |
| `cp_facility_utilities` | `finishing_and_cold_storage` | electricity, thermal energy, and refrigerant loss | meter, invoice, and refrigerant service record | electricity_import; onsite_generation; electricity_export; fuel_quantity; fuel_LHV; purchased_heat; opening_charge; additions; recovered_refrigerant; closing_charge; allocation_driver | utility meters and invoices; documented lower-heating-value conversion; refrigerant mass balance | kWh; MJ; kg | monthly, with annual reconciliation | representative continuous 12-month period | complete facility plus disclosed submeter coverage | subtract exports; avoid double counting; directly assign submetered use and allocate remainder by section 7 | meter identifiers; invoices; conversion factors; service logs; production totals |
| `cp_packaging_records` | `finishing_and_cold_storage` | packaging inputs and scrap | bill of materials, issue, stock, and scrap records | material_id; component; issued_mass; opening_stock; closing_stock; scrap_mass; packed_product_mass | weighed components or supplier mass specifications reconciled to stock and filled units | kg | each packaging campaign; monthly aggregation | same period as product output | all packaging used for the declared product | consumed mass = issues plus opening stock minus closing stock; normalize to packed net product | supplier specification; inventory reconciliation; scrap tickets |
| `cp_output_and_losses` | `finishing_and_cold_storage` | released product and product losses | batch release, filling, stock, and waste records | batch_id; filled_net_mass; bulk_dispatch_mass; released_mass; reject_mass; spill_mass; recovered_mass; destination | calibrated filler checks, dispatch scales, tank measurements, and waste records | kg | each batch | same period as input and utility data | all batches and routes in the dataset | sum released product; classify and reconcile each loss; normalize inventory to released mass | calibration records; release certificate; dispatch record; waste transfer evidence |
| `cp_sanitation_records` | `sanitation_and_wastewater` | water and cleaning agents | meter, CIP recipe, purchase, issue, and stock records | water_withdrawal; reused_water; formulation_water; cleaner_id; supplied_concentration; cleaner_mass; opening_stock; closing_stock; allocation_driver | water meters; CIP control logs; chemical issue and stock reconciliation | L or m3; kg | each cleaning cycle where available; monthly minimum | representative continuous 12-month period | all included process lines and shared sanitation systems | directly assign line records; allocate shared remainder by section 7; do not subtract reuse twice | meter calibration; CIP historian; chemical specifications; inventory reconciliation |
| `cp_wastewater_records` | `sanitation_and_wastewater` | wastewater volume and load | effluent meter, sampling, and treatment record | discharge_volume; treatment_destination; COD_concentration; sampling_time; sample_method; recovered_high_strength_streams | calibrated flow meter and representative composite sampling before treatment | m3; mg/L COD | continuous volume; representative sampling by permit or site plan | same period as production and water records | all foreground drains with exclusions disclosed | volume-weight concentration to annual load; allocate by direct line record or section 7 | meter calibration; laboratory report; chain of custody; treatment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all inventory rows | normalized amount = attributed foreground amount / released net product mass | attributed amount; released net product mass | amount per 1 kg released net product | `dairy-pefcr-2025` |
| `calculate_dry_matter_allocation` | shared dairy-processing burdens | factor_i = dry_matter_fraction_i x wet_output_mass_i / sum(dry_matter_fraction_j x wet_output_mass_j); attributed amount_i = shared amount x factor_i | wet output masses; dry-matter fractions; shared amount | allocation factor and attributed amount by output | `dairy-pefcr-2025` |
| `calculate_refrigerant_loss` | refrigeration systems | emitted refrigerant = opening charge + additions - closing charge - recovered quantity; negative results require reconciliation and are not accepted | opening charge; additions; closing charge; recovered quantity | kg refrigerant emitted before allocation | `dairy-pefcr-2025` |
| `calculate_cod_load` | wastewater | COD load = wastewater volume x measured COD concentration with consistent L and mass units | discharge volume; COD concentration | kg COD before allocation | `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007` |
| `reconcile_product_mass` | each batch and annual dataset | inputs = released product + separately recovered product + material waste + wastewater-borne product solids + inventory change, within a disclosed reconciliation tolerance | input masses; outputs; losses; stock change | mass-balance residual and relative difference | `ifc-dairy-processing-ehs-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and route | Identify product designation, species, formulation family, fat and dry-matter content, fermentation culture or acidifier, heat treatments, concentration, packaging status, and storage condition. | specification; recipe; batch release and label records |
| `dq_measurement` | mass, utilities, chemicals, and wastewater | Use calibrated measurement where available; disclose volume-to-mass densities, energy conversions, sampling methods, missing submeter coverage, and allocation drivers. | calibration certificates; meter list; conversion worksheet; laboratory methods |
| `dq_temporal` | foreground dataset | Use a continuous 12-month period representative of normal operation, or document shorter coverage, seasonality, start-up, shutdown, and product-mix effects. | dated source records; production calendar; representativeness statement |
| `dq_completeness` | all foreground processes | Reconcile material inputs to product, recovered material, waste, wastewater-borne solids, and stock change; account for all included process lines and shared utilities. | mass-balance worksheet; site and line coverage map; excluded-flow log |
| `dq_source_alignment` | upstream datasets | Match ingredient, energy, packaging, chemical, and treatment datasets to geography, technology, and reference period; disclose proxies and data gaps. | dataset references; selection rationale; proxy register |
| `dq_default_replacement` | source-backed default values | Treat Dairy PEFCR example/default quantities only as replaceable screening values. A shareable foreground dataset must replace them with collected or calculated site-specific values and disclose any remaining default. | field-level provenance and default-replacement log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | The output flow UUID, Mass property UUID, Units of mass UUID, and normalized amount shall equal the declared reference-flow object and 1 kg net product. |  |
| `validate_required_qualifiers` | product identity | Reject a data package missing any required qualifier or failing to distinguish microbial fermentation, direct acidification, combined treatment, and post-fermentation heat treatment. | `codex-fermented-milks-243`; `codex-cream-288`; `ecfr-acidified-milk-131-111` |
| `validate_route_inputs` | fermentation or acidification process | A microbial route shall identify culture and dose; a direct-acidification route shall identify acidifying substances and doses; absent route inputs shall not be invented. | `codex-fermented-milks-243`; `codex-cream-288`; `ecfr-acidified-milk-131-111` |
| `validate_no_double_count` | utilities, cleaning, and losses | Reject duplicated utility, cleaning, product-loss, wastewater, or packaging quantities across unit-process records and shared facility totals. | `dairy-pefcr-2025` |
| `validate_allocation` | multi-product facility data | Reject shared burdens without direct assignment evidence or a disclosed dry-matter allocation calculation whose factors sum to 1 within rounding tolerance. | `dairy-pefcr-2025` |
| `validate_mass_balance` | batch and annual foreground inventory | Require a disclosed mass-balance residual; investigate and explain material imbalance rather than forcing the reference output to close. | `ifc-dairy-processing-ehs-2007` |
| `validate_wastewater` | sanitation and wastewater | Require wastewater volume and treatment destination; when COD is material or required by the site plan, require representative measured concentration and calculated load. | `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007` |
| `validate_defaults` | all source-backed defaults | Fail publication-quality completeness if any Dairy PEFCR default remains without explicit justification, uncertainty disclosure, and a replacement plan. | `dairy-pefcr-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground data package for dairy manufacturing, suitable for publication as a secondary or background dataset after review |
| downstream_use | `secondary_dataset`; `background_dataset`; input to `process` and `lifecyclemodel` projections |
| allowed_use | Product-specific factory-gate modelling of fermented or acidified milk and cream; extension to broader life-cycle models through explicit upstream and downstream links |
| excluded_use | Unqualified comparison between different dairy subcategories; direct use for non-dairy analogues; farm production; undisclosed consumer-stage or cradle-to-grave claims; compliance claims against an expired external PEFCR |
| required_metadata | PCR id and version state; product designation and required qualifiers; facility geography; technology and route; reference period; boundary; data sources; upstream dataset links; allocation; default use; data quality |
| required_quality_disclosure | Primary-data share and coverage; meter and sampling coverage; mass-balance residual; allocation factors; default or proxy values; geographic, temporal, and technological representativeness; exclusions and uncertainty |
| update_trigger | Material formulation or route change; new heat treatment or concentration step; packaging or refrigerant change; facility or supplier change; allocation shift; reference data update; new reviewed category rule; data older than the declared representativeness window |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-fermented-milks-243` | Standard (`standard`) | FAO/WHO Codex Alimentarius, CXS 243-2003, Standard for Fermented Milks, amended 2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+243-2003%2FCXS_243e.pdf (retrieved 2026-08-10) | Fermented-milk scope, microbial routes, permitted ingredients, product qualifiers, composition ceiling, and heat-treatment distinction |
| `codex-cream-288` | Standard (`standard`) | FAO/WHO Codex Alimentarius, CXS 288-1976, Standard for Cream and Prepared Creams, https://www.fao.org/input/download/standards/180/CXS_288e.pdf (retrieved 2026-08-10) | Fermented-cream and acidified-cream definitions, ingredients, and route distinction |
| `ecfr-acidified-milk-131-111` | Standard (`standard`) | U.S. Electronic Code of Federal Regulations, 21 CFR 131.111, Acidified milk, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-131/subpart-B/section-131.111 (retrieved 2026-08-10) | Official direct-acidification product definition and acidifying-input route evidence |
| `dairy-pefcr-2025` | Official guidance (`official_guidance`) | European Dairy Association Technical Secretariat, Product Environmental Footprint Category Rules for Dairy Products, Final PEFCR, February 2025, https://eda.euromilk.org/wp-content/uploads/2025/02/PEFCR-DairyProducts_update_final.pdf (retrieved 2026-08-10; stated validity ended December 2025, used as technical evidence rather than a current compliance claim) | Foreground process decomposition, reference mass context, company-specific data fields, dry-matter allocation, packaging examples, and replaceable facility defaults |
| `ifc-dairy-processing-ehs-2007` | Official guidance (`official_guidance`) | World Bank Group / IFC, Environmental, Health, and Safety Guidelines for Dairy Processing, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-dairy-processing-ehs-guidelines-en.pdf (retrieved 2026-08-10) | Factory-gate processing boundary, receipt and storage, heat treatment, cleaning-in-place, product-loss prevention, wastewater, energy, and monitoring rules |
