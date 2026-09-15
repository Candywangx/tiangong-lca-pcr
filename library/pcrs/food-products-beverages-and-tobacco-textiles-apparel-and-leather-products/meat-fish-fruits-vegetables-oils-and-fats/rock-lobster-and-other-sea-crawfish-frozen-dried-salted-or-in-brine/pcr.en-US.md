---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rock-lobster-and-other-sea-crawfish-frozen-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rock lobster and other sea crawfish, frozen, dried, salted or in brine

## 1. Scope and Applicability

This PCR supports foreground data packages for rock lobster and other sea crawfish preserved and marketed as frozen, dried, dry-salted, or in brine. The producer shall declare exactly one preservation route for each reported result. Route-specific inputs, yields, wastes, storage conditions, and results shall remain separate; a multi-route average is allowed only when each route result and the aggregation basis are also disclosed.

The foreground boundary begins with received live, fresh, chilled, or otherwise declared source crustaceans at the processing gate and ends with 1 kg net preserved product at the producer gate after packaging and, for the frozen route, frozen storage to the declared dispatch point. Harvesting or aquaculture, feed, vessel operations, and inbound transport are represented by upstream datasets. Distribution after the producer gate, retail, consumer preparation, and end-of-life are excluded unless separately added by the study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rock-lobster-and-other-sea-crawfish-frozen-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21252 (exact) |
| covered_products | Rock lobster and other sea crawfish sold frozen, dried, dry-salted, wet-salted, pickled, or otherwise held in food-grade brine; whole, tail, or other declared presentation |
| excluded_products | Live, fresh, or merely chilled crustaceans; canned or otherwise heat-sterilized shelf-stable preparations; mixed prepared dishes; products whose crustacean species or preservation route is not declared |
| representative_product | Market-ready rock lobster or other sea crawfish preserved by one declared route |
| production_route | Receipt and preparation; exactly one of freezing, hygienic drying, dry-salting, or brining/wet-salting; packaging; frozen storage only for the frozen route |
| market_state | Packaged frozen, dried, salted, or brined product at the producer dispatch gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Preserved rock lobster or other sea crawfish suitable for the declared market use |
| How much | 1 kg net target product mass |
| How well | Conforms to the declared species, presentation, preservation route, food-safety controls, and dispatch condition |
| How long or cycle | One production lot through the producer dispatch gate; frozen storage duration is declared for the frozen route |
| reference_flow_link | The functional unit is realized by the single reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net target product mass |
| Reference product flow | Rock lobster and other sea crawfish, frozen, dried, salted or in brine `7b3eb43f-1808-43ec-963b-40e088052194` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or commercial species group; whole/tail/other presentation; shell-on or shell-off; cooked or uncooked; preservation route (`frozen`, `dried`, `dry_salted`, or `brined`); glazing status and excluded glaze mass; free-brine drainage basis; absorbed salt status; packaging format; producer-gate condition; frozen storage duration and temperature when applicable |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net target product mass excluding primary packaging, free surface glaze, and free packing brine after the declared drainage procedure. Shell is included only when it is part of the marketed presentation. |
| `mass_balance_basis` | all mass inputs and outputs | Mass | kg | Normalize measured lot totals to 1 kg net reference product and retain unrounded lot-level input, product, residue, wastewater, spent-brine, and packaging records. |
| `energy_basis` | electricity and thermal energy | Energy | kWh and MJ | Preserve metered units, document conversion factors, and normalize only after allocating shared utilities to the declared route and lot. |
| `route_conditioned_measurement` | preservation and storage records | Route-specific measured property | declared row unit | Do not substitute a frozen-route measurement for a dried, salted, or brined route, or vice versa. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Species or commercial species group; live/fresh/chilled or other received state; whole/tail/other presentation; shell and cooking status; received mass and temperature; supplier lot; origin and upstream dataset reference |
| starting_condition_role | Processing-gate input whose harvesting or aquaculture and inbound supply-chain burdens are supplied by upstream datasets |
| product_classification_scope | Preserved rock lobster and other sea crawfish corresponding to CPC 3.0 code 21252, used only as classification context |
| recursive_input_rule | If an already-preserved product in this same category is repacked, reconditioned, or stored, record it as an upstream product input and do not recreate its earlier preservation processes in the foreground system. |
| upstream_dataset_requirement | Upstream datasets shall represent the declared species, production origin, source state, and inbound transport to the processing gate; proxies and mismatches shall be disclosed. |
| disclosure | Declare starting condition, preservation route, edible presentation, process location, lot period, cut-offs, upstream dataset choices, cold-chain hand-off, and any route aggregation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_separation` | foreground process boundary | Include receipt and preparation, exactly one declared preservation route, packaging, and frozen storage only when the product is frozen; never include non-applicable route operations as zero-data placeholders in a route result. | `codex-cxc-52-2003`; `unsd-cpc-3-0-2025` |
| `boundary_upstream_supply` | source crustaceans and inbound supply | Represent harvesting or aquaculture, vessel or farm operations, and inbound transport with upstream datasets matched to the declared source condition. | `eu-pef-2021-2279` |
| `boundary_food_safety_records` | foreground handling and preservation | Retain lot traceability, time-temperature, hygiene, salting/brining/drying control, and release records applicable to the declared route; these records support inventory quality but do not replace regulatory compliance. | `codex-cxc-52-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | Receipt and preparation | required | Included for source receipt, sorting, washing, dressing, shell or viscera removal, and any declared cooking before preservation | Foreground preparation | Per 1 kg net reference product |
| `route_specific_preservation` | Route-specific preservation | required | Execute exactly one declared route: freezing, hygienic drying, dry-salting, or brining/wet-salting | Foreground preservation | Per 1 kg net reference product |
| `packaging` | Packaging | required | Include the packaging actually used for the declared market state | Foreground packaging | Per 1 kg net reference product |
| `frozen_storage` | Frozen storage to dispatch | conditional | Include only for the frozen route and only through the declared producer-gate dispatch point | Foreground cold storage | Per 1 kg net frozen reference product and declared storage duration |

### Process: Receipt and preparation (`receipt_and_preparation`)

#### Inputs

##### Product flows

###### Received source crustaceans (`received_source_crustaceans`)

Record the measured mass and declared condition of incoming lobster or crawfish that crosses the processing gate.

- Selected flow: Received rock lobster or other sea crawfish
- Flow property / unit: Mass / kg
- Amount rule: measured received lot mass normalized to 1 kg net reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_mass_balance`
- Range: Provisional raw-material yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg net reference product
  - Basis: received source crustacean mass per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water and ice (`preparation_water_and_ice`)

Record potable or clean process water and purchased or generated ice used for washing, chilling, thawing, or preparation; avoid double counting water embedded in purchased ice.

- Selected flow: Process water and ice
- Flow property / unit: Mass / kg
- Amount rule: measured water plus ice mass, with recycled water reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation water and ice screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg net reference product
  - Basis: total preparation water and ice per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record metered or allocated electricity for sorting, washing, cutting, pumping, chilling, thawing, and preparation equipment.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: route- and lot-attributed metered electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_utilities`
- Range: Provisional preparation electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg net reference product
  - Basis: preparation electricity per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared crustacean intermediate (`prepared_crustacean_intermediate`)

Record the prepared mass transferred to the declared preservation route.

- Selected flow: Prepared rock lobster or other sea crawfish
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_mass_balance`

##### Waste flows

###### Shell, viscera, rejects, and other preparation residues (`preparation_residues`)

Record each materially different residue separately, including destination and whether it is waste or a saleable co-product.

- Selected flow: Crustacean preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_mass_balance`
- Range: Provisional preparation residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 9
  - Unit: kg/kg net reference product
  - Basis: preparation residues per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving the foreground facility after accounting for recycled water and water retained in product or residues.

- Selected flow: Preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_utilities`
- Range: Provisional preparation wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg net reference product
  - Basis: preparation wastewater per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Route-specific preservation (`route_specific_preservation`)

#### Inputs

##### Product flows

###### Prepared crustacean input (`prepared_crustacean_input`)

Record the prepared mass entering exactly one declared preservation route.

- Selected flow: Prepared rock lobster or other sea crawfish
- Flow property / unit: Mass / kg
- Amount rule: measured route input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_mass_and_route`
- Range: Provisional preservation-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg net reference product
  - Basis: prepared input mass per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation electricity (`preservation_electricity`)

Record route-attributed electricity for freezing, drying fans, pumps, brine circulation, and other equipment actually used; non-applicable equipment is excluded.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or documented route allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_utilities`
- Sources: `fao-fisheries-technical-paper-340`
- Range: Provisional preservation electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kWh/kg net reference product
  - Basis: route-specific electricity per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation thermal energy (`preservation_thermal_energy`)

Record fuel, steam, or purchased heat used only when cooking, heated drying, or another declared route step consumes thermal energy.

- Selected flow: Thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: metered or fuel-derived route-specific thermal energy; zero only with evidence that no thermal step occurs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_utilities`
- Range: Provisional thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg net reference product
  - Basis: route-specific thermal energy per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Food-grade salt (`preservation_salt`)

Record food-grade salt only for dry-salted or brined/wet-salted product, distinguishing salt retained in product from salt leaving in spent brine or wastewater.

- Selected flow: Food-grade sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: measured issued salt minus returned unused salt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_mass_and_route`
- Sources: `codex-cxc-52-2003`
- Range: Provisional salt-use screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg/kg net reference product
  - Basis: salt input per kg salted or brined reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brine, glazing, and route water (`preservation_route_water`)

Record water used for brine preparation, glazing, and route-specific process operations; brine water is included only for the brined route and glaze is included only when applied.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: measured route water, excluding water already recorded in preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_mass_and_route`
- Sources: `codex-cxc-52-2003`
- Range: Provisional route-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net reference product
  - Basis: brine, glaze, and other route water per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Preserved crustacean intermediate (`preserved_crustacean_intermediate`)

Record preserved product transferred to packaging, with the route, moisture or salt condition, glaze status, and mass defined consistently with the reference-flow qualifiers.

- Selected flow: Preserved rock lobster or other sea crawfish
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass on the declared net-product basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_mass_and_route`

##### Waste flows

###### Preservation wastewater and spent brine (`preservation_wastewater_and_spent_brine`)

Record route-specific wastewater and spent brine separately when their composition or treatment differs.

- Selected flow: Preservation wastewater or spent brine
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass or calculated route water-and-salt balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_mass_and_route`
- Range: Provisional wastewater and spent-brine screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net reference product
  - Basis: preservation wastewater and spent brine per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging (`packaging`)

#### Inputs

##### Product flows

###### Preserved product for packaging (`preserved_product_for_packaging`)

Record preserved product entering the packaging operation on the same net-mass basis used for packaged output.

- Selected flow: Preserved rock lobster or other sea crawfish
- Flow property / unit: Mass / kg
- Amount rule: measured packaging-line input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Primary and secondary packaging materials (`packaging_materials`)

Record each packaging material by material and mass, including liners, pouches, trays, cartons, labels, and brine containers actually used.

- Selected flow: Packaging materials by material
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued mass minus returned stock, allocated to conforming packaged output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-material screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kg/kg net reference product
  - Basis: total packaging input per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging electricity (`packaging_electricity`)

Record electricity for sealing, vacuum or modified-atmosphere equipment, labelling, and packaging-line auxiliaries actually used.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or documented packaging-line allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net reference product
  - Basis: packaging electricity per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Packaged preserved product (`packaged_preserved_product`)

For dried, dry-salted, and brined routes this is the producer-gate reference product; for the frozen route it transfers to frozen storage.

- Selected flow: Rock lobster and other sea crawfish, frozen, dried, salted or in brine `7b3eb43f-1808-43ec-963b-40e088052194`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net target product mass at the applicable gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record production scrap by material and management destination.

- Selected flow: Packaging production scrap by material
- Flow property / unit: Mass / kg
- Amount rule: measured packaging scrap mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-scrap screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net reference product
  - Basis: packaging scrap per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Frozen storage to dispatch (`frozen_storage`)

#### Inputs

##### Product flows

###### Packaged frozen product entering storage (`packaged_frozen_product_input`)

Include this row only for the frozen route and record mass at storage entry.

- Selected flow: Packaged frozen rock lobster or other sea crawfish
- Flow property / unit: Mass / kg
- Amount rule: measured storage-entry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_records`

###### Frozen-storage electricity (`frozen_storage_electricity`)

Record storage electricity through the declared dispatch point and retain storage duration and temperature records.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered facility electricity allocated by documented capacity-time or measured load method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen reference product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_records`
- Sources: `fao-fisheries-technical-paper-340`; `codex-cxc-52-2003`
- Range: Provisional frozen-storage electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg net frozen reference product
  - Basis: storage electricity through producer-gate dispatch per kg net frozen product
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up (`refrigerant_makeup`)

Record purchased refrigerant charged to equipment serving the included frozen storage and allocate only the inventory-balance loss attributable to the reporting period.

- Selected flow: Refrigerant by substance
- Flow property / unit: Mass / kg
- Amount rule: measured refrigerant additions by substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reporting-period refrigerant inventory for included equipment
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_records`
- Range: Provisional refrigerant make-up screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net frozen reference product
  - Basis: allocated refrigerant make-up per kg net frozen product
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Frozen product at producer dispatch gate (`frozen_product_at_dispatch`)

Record the frozen reference product after the declared storage duration and before outbound distribution.

- Selected flow: Rock lobster and other sea crawfish, frozen, dried, salted or in brine `7b3eb43f-1808-43ec-963b-40e088052194`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net frozen target product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 1 kg net frozen reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Elementary flows

###### Refrigerant emissions to air (`refrigerant_emissions_to_air`)

Calculate emissions by named substance from the reporting-period inventory balance for included equipment; do not use an unspecified refrigerant aggregate.

- Selected flow: Refrigerant emission to air by substance
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus additions minus closing inventory minus documented recovery, normalized to included stored output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen reference product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_records`
- Range: Provisional refrigerant-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net frozen reference product
  - Basis: allocated refrigerant loss per kg net frozen product
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | frozen, dried, dry-salted, and brined production | Subdivide route-specific processes, utilities, yields, and wastes before allocation. Report each route result separately and do not use an unconditional multi-route average. | `eu-pef-2021-2279` |
| `allocation_shared_operations` | shared preparation, packaging, and site utilities | Use direct measurement first; otherwise use a documented physical causal driver such as processed mass, metered operating time, or capacity-time. If no physical relationship can be justified, use a documented economic allocation with contemporaneous prices and a sensitivity result. | `eu-pef-2021-2279` |
| `allocation_residues_and_coproducts` | shell, viscera, rejects, recovered product, and other outputs | Classify each output as product, co-product, or waste using its actual destination. Avoid allocation by process subdivision; when unavoidable, apply the same physical-then-economic hierarchy and disclose any credits or substituted products separately. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_mass_balance` | `receipt_and_preparation` | received mass, prepared transfer, residues | weighbridge or calibrated scale records | lot_id; species; received_state; presentation; received_mass; prepared_mass; residue_mass_by_destination; cooking_status | reconcile receiving, transfer, and waste records by lot | kg | each lot | representative production period with all included lots | each facility and line | sum by lot and route, then divide by conforming net output | calibration records; lot reconciliation; destination records |
| `cp_receipt_utilities` | `receipt_and_preparation` | water, ice, electricity, wastewater | meters, invoices, production logs, water balance | meter_start; meter_end; purchased_ice_mass; recycled_water; discharge_mass; operating_time; lot_output | direct submetering preferred; documented allocation where shared | kg; kWh | each lot or meter interval | same period as production lots | each facility and relevant utility system | subtract recycled loops and allocate shared utilities by measured driver | meter calibration; invoices; allocation worksheet; water balance |
| `cp_preservation_mass_and_route` | `route_specific_preservation` | route identity, input/output mass, salt, water, spent brine | batch sheets, scales, formulation and discharge records | route_code; batch_id; input_mass; output_mass; salt_issued; unused_salt; route_water; retained_salt; spent_brine; wastewater; time; temperature; moisture_or_drainage_basis | collect separately for exactly one declared route per batch | kg; h; °C | each batch | all included preservation batches | each facility, line, and route | aggregate only within the same route and declared product state | calibrated scales; formulation records; route control logs; mass balance |
| `cp_preservation_utilities` | `route_specific_preservation` | electricity and thermal energy | submeters, fuel records, steam or heat meters | route_code; meter_start; meter_end; fuel_quantity; fuel_energy; steam_or_heat; operating_time; output_mass | direct route metering preferred; documented equipment-time allocation otherwise | kWh; MJ | each batch or meter interval | same period as preservation batches | each facility, equipment set, and route | convert with documented factors and divide by route-specific net output | meter calibration; invoices; conversion factors; allocation worksheet |
| `cp_packaging_records` | `packaging` | product mass, packaging, electricity, scrap | line scales, material issues, meters, scrap records | batch_id; input_mass; net_output_mass; material_type; issued_mass; returned_mass; scrap_mass; electricity; package_count | reconcile packaging-line mass and material issues by batch | kg; kWh; item | each packaging batch | all included packaging batches | each facility and packaging line | aggregate by packaging format and divide by conforming net output | scale and meter calibration; bill of materials; stock reconciliation |
| `cp_frozen_storage_records` | `frozen_storage` | stored mass, duration, temperature, electricity, refrigerant | warehouse movements, temperature loggers, meters, refrigerant service records | lot_id; entry_mass; dispatch_mass; entry_time; dispatch_time; temperature_series; electricity; refrigerant_substance; opening_inventory; additions; closing_inventory; recovery | collect only for frozen-route lots through producer-gate dispatch | kg; day; °C; kWh | continuous temperature; each movement; monthly utility and refrigerant reconciliation | full included storage period | each cold store and refrigeration system | allocate electricity by documented capacity-time or measured load; calculate substance-specific loss by inventory balance | calibrated logger and meter records; service invoices; inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | packaged preserved output | net target product mass = gross filled unit mass - primary packaging mass - free glaze mass - free packing brine after the declared drainage procedure | gross mass; packaging mass; glaze mass; drained free-brine mass; shell-in-presentation declaration | kg net target product | `codex-cxc-52-2003` |
| `calc_process_mass_balance` | preparation, preservation, and packaging | reconcile measured inputs with product outputs, separately measured residues, wastewater or spent brine, retained water or salt, and documented stock change; investigate unexplained imbalance | protocol mass records by process and lot | route-specific yield and reconciliation result | `eu-pef-2021-2279` |
| `calc_normalized_utilities` | all utilities | normalized utility = route-attributed utility quantity / conforming net reference-product output | meter or invoice quantity; allocation driver; net output | kWh or MJ per kg net reference product | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | frozen storage | refrigerant loss by substance = opening inventory + additions - closing inventory - documented recovery; allocate only to included equipment and storage period | substance-specific inventory and service records; stored output | kg refrigerant emitted per kg net frozen product | `fao-fisheries-technical-paper-340` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_route` | every dataset | Declare species or commercial group, presentation, shell/cooking status, exactly one preservation route, net-mass method, packaging, and gate condition. | product specification; batch record; label; route code |
| `dq_temporal_and_site_coverage` | foreground records | Use a representative period covering all included lots, routes, shifts, and seasonal conditions; disclose exclusions, shutdowns, and shared-service allocation. | production calendar; lot list; meter coverage; exclusion log |
| `dq_measurement_and_reconciliation` | mass, water, energy, salt, packaging, waste, and refrigerant | Retain calibration or invoice evidence, reconcile process balances, and investigate missing records, outliers, and unexplained losses before aggregation. | calibration certificates; invoices; balance worksheets; corrective-action records |
| `dq_upstream_and_proxy_quality` | upstream datasets | Assess technological, geographical, temporal, and precision/completeness suitability; disclose proxy choices and material mismatches. | dataset metadata and documented data-quality rating consistent with `eu-pef-2021-2279` |
| `dq_reasoned_estimates` | all provisional ranges | Do not use these QA ranges as measured foreground values. Replace each with collected or accepted source-backed evidence, or document reviewer acceptance and uncertainty before activation. | review record; replacement source or approved uncertainty note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference flow and packaged output | Verify one reference flow equals exactly 1 kg net target product using the declared drainage, glaze, packaging, and shell basis and the specified Mass property and unit group UUIDs. | `codex-cxc-52-2003` |
| `validate_single_route` | process map and inventory | Verify exactly one of `frozen`, `dried`, `dry_salted`, or `brined` is declared for each result; frozen storage shall appear only for `frozen`, while salt and brine inputs shall appear only when used by the declared route. | `codex-cxc-52-2003`; `unsd-cpc-3-0-2025` |
| `validate_mass_and_utility_completeness` | foreground inventory | Verify process mass reconciliation and coverage of material water or ice, electricity, thermal energy, salt, packaging, residues, wastewater or spent brine, and refrigerant flows applicable to the route; require a documented zero or exclusion for any applicable missing flow. | `eu-pef-2021-2279` |
| `validate_food_safety_traceability` | lot and route records | Verify traceable lots and applicable time-temperature, hygiene, drying, salting/brining, and release-control records are retained; failure is a data-quality finding and this PCR does not certify legal compliance. | `codex-cxc-52-2003` |
| `validate_provisional_ranges` | reasoned-estimate QA guardrails | Flag values outside a provisional range for investigation, but never replace foreground records with the range; all provisional ranges remain review items before activation. |  |
| `validate_uuid_completeness` | non-reference inventory flows | Before activation, resolve and review Tiangong UUIDs for material non-reference flows or document an approved semantic fallback; the reference flow UUID is mandatory. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared preserved-lobster or crawfish route |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and completeness |
| allowed_use | Product and process LCA models matching the declared species group, presentation, preservation route, technology, geography, period, packaging, storage duration, and producer-gate boundary |
| excluded_use | Unqualified substitution among frozen, dried, dry-salted, and brined routes; live/fresh/chilled or canned products; legal or food-safety certification; use of provisional ranges as measured inventory |
| required_metadata | PCR id; species or commercial group; presentation; shell/cooking status; route code; net-mass and drainage basis; location; technology; reference period; packaging; frozen storage duration and temperature; upstream datasets; allocation; cut-offs; data-quality assessment |
| required_quality_disclosure | Foreground coverage; meter and scale basis; process reconciliation; missing data; reasoned estimates; allocation drivers; route aggregation; upstream proxies; unresolved UUIDs; uncertainty and review status |
| update_trigger | Change in species mix, presentation, preservation route or technology, yield, energy system, salt or brine practice, packaging, cold-store system or duration, refrigerant, site, regulation, upstream dataset, or source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, code 21252, 2025 structure; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Classification scope and distinction of the covered preserved-product category |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products; https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (retrieved 2026-08-11) | Lobster handling and processing, freezing, drying, salting/brining, hygiene, traceability, packaging, storage, and process controls |
| `fao-fisheries-technical-paper-340` | official_guidance | FAO Fisheries Technical Paper 340, Freezing and refrigerated storage in fisheries, 1994; https://www.fao.org/4/v3630e/v3630e00.htm (retrieved 2026-08-11) | Frozen-route process decomposition, refrigeration energy records, cold storage, packaging, temperature measurement, and refrigerant management |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Functional-unit and boundary consistency, primary data, allocation hierarchy, data-quality assessment, and disclosure |
