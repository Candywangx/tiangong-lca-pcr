---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flour-meal-powder-flakes-granules-and-pellets-of-potatoes
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Flour, meal, powder, flakes, granules and pellets of potatoes

## 1. Scope and Applicability

This PCR covers the factory-gate production of potato-derived flour, meal, powder, flakes, granules, and pellets that retain the identity of processed potato material. It covers food-grade and explicitly declared non-food-grade products only when they otherwise meet this product boundary. Food hygiene requirements apply only to food-grade production; a non-food-grade dataset shall retain a non-food boundary and declare its intended industrial use.

Potato starch, modified starch, fresh or simply preserved potatoes, prepared potato dishes, fried snacks, compound mixes whose identity is not principally potato material, animal feed, and products made principally from another crop are excluded. A producer shall declare the product form, intended use, formulation, production route, market condition, and whether the product is sold as a finished ingredient or an intermediate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flour-meal-powder-flakes-granules-and-pellets-of-potatoes |
| classification_refs | CPC 3.0: 21392, exact scope |
| covered_products | Potato flour, meal, powder, flakes, granules, and pellets made principally from potato tubers and retaining processed-potato identity |
| excluded_products | Potato starch or modified starch; fresh, frozen, or simply preserved potatoes; prepared dishes and fried snacks; compound mixes not principally potato; animal feed; products principally from other crops |
| representative_product | Generic qualifying potato flour, meal, powder, flakes, granules, or pellets, with the selected form declared |
| production_route | Exactly one declared conversion route: cooked-mash drying and forming, or raw-piece drying and size reduction; finishing and packing follow the selected route |
| market_state | Factory-gate, quality-released product; bulk or packed; food-grade or explicitly declared non-food-grade; moisture and applicable mass qualifiers declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A qualifying potato flour, meal, powder, flake, granule, or pellet product that provides processed potato material in the declared form and grade |
| How much | 1 kg net product mass at the factory gate, excluding packaging, pallets, glaze, and free liquid |
| How well | Meets the producer's declared release specification for product form, moisture, particle or piece form, formulation, intended use, and food-grade status where applicable |
| How long or cycle | One production lot or campaign through quality release; no use-phase duration is assigned |
| reference_flow_link | The functional unit is realized by the single Tiangong reference product flow below at 1 kg net qualifying product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net qualifying product |
| Reference product flow | Flour, meal, powder, flakes, granules and pellets of potatoes `ab16817e-97bc-46df-99e6-362d7a934676` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; production route; intended use and food-grade status; net-mass basis; moisture content on an as-sold basis; added-salt content or salinity where applicable; glaze status and glaze-excluded mass where applicable; drained-mass basis where free liquid is present; formulation and processing aids retained in product; packaging state; release specification |

The Tiangong flow is the exact generic CPC 21392 product flow. A concrete data package shall declare every required qualifier in metadata, process notes, the reference-flow comment, or an equivalent field. Glaze and drained-mass qualifiers are normally not applicable to these dry products; they shall nevertheless be declared as not applicable or measured on the stated excluded-mass basis if such conditions occur.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all results to 1 kg quality-released net product at the factory gate. |
| `net_product_mass` | reference product and lot yield | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use product mass excluding all packaging, pallets, glaze, and free liquid; if free liquid is present, record both gross and drained mass and use drained mass for the reference amount. |
| `moisture_basis` | product and potato material | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and percent | Report moisture as mass percent on an as-sold wet basis and retain the sampling method; calculate dry matter as net mass multiplied by one minus the moisture mass fraction. |
| `salt_and_glaze_condition` | products with added salt, brine, glaze, or free liquid | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and percent | Declare added-salt content or measured salinity and separately disclose glaze-excluded or drained mass where applicable; do not count excluded glaze or free liquid in the 1 kg reference amount. |
| `route_exclusivity` | conversion inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Activate exactly one conversion route for a homogeneous product lot; do not sum cooked-mash and raw-piece route inventories for the same output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw potato tubers received at the foreground facility gate with supplier, origin, lot mass, and acceptance condition declared |
| starting_condition_role | Purchased source material entering the directly controlled receiving and processing system |
| product_classification_scope | Potato-derived flour, meal, powder, flakes, granules, and pellets within the semantic product boundary represented by CPC 3.0 code 21392 |
| recursive_input_rule | If a qualifying same-category potato product is used as an input, keep it visible as a purchased product input, link an upstream dataset, and begin foreground accounting at its receipt rather than reconstructing its upstream production inside this data package |
| upstream_dataset_requirement | Link raw potatoes, ingredients, energy carriers, water supply, packaging, and other purchased inputs to geographically and technologically representative upstream datasets |
| disclosure | Declare product form, selected route, starting material condition, food-grade or non-food-grade status, facility and geography, temporal coverage, cut-offs, excluded operations, and whether packaging is included |

### Normative boundary rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | all qualifying routes | Include receiving, inspection, cleaning and preparation, exactly one conversion route, finishing, quality release, packing when present, directly used utilities, direct emissions, wastewater, rejects, and wastes through the factory gate. | `eu-pef-2021-2279` |
| `boundary_upstream_links` | purchased inputs | Keep purchased inputs visible and link representative upstream datasets; do not replace primary foreground quantities with generic amounts when site records exist. | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | conversion routes | Select either the cooked-mash route or the raw-piece route for each homogeneous lot; a combined inventory is conforming only when physically separate product quantities are modelled as separate lots or weighted datasets. |  |
| `boundary_grade_condition` | intended use | Apply Codex food hygiene controls only to food-grade production. For a non-food-grade product, declare the industrial intended use and exclude food-only sanitation, ingredient, and food-contact assumptions unless they actually occur. | `codex-cxc-1-1969` |
| `boundary_packaging` | packed product | Include primary and secondary packaging used to release the declared product; exclude packaging from the 1 kg net-product reference mass and disclose any omitted tertiary distribution packaging. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

All `reasoned_estimate` ranges below are provisional screening guardrails, not production defaults or final allowed ranges. They apply only when representative foreground data are unavailable and shall be replaced when at least three representative campaigns, a full representative production period, or stronger transferable product-specific evidence becomes available.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `potato_receiving_preparation` | Potato receiving and preparation | required | Always included from facility-gate receipt through prepared potato material | foreground preparation | Per kg net qualifying product |
| `cooked_mash_conversion` | Cooked-mash drying and forming | conditional | Include only when the declared route cooks or mashes potatoes before drying and forming; mutually exclusive with `raw_piece_conversion` for one homogeneous lot | foreground conversion | Per kg net qualifying product from this route |
| `raw_piece_conversion` | Raw-piece drying and size reduction | conditional | Include only when the declared route dries potato pieces before milling, granulating, or pelletizing; mutually exclusive with `cooked_mash_conversion` for one homogeneous lot | foreground conversion | Per kg net qualifying product from this route |
| `finishing_packaging` | Finishing, quality release, and packaging | required | Always included; packing inputs are recorded only when the released product is packed | foreground finishing | 1 kg net qualifying product |

### Process: Potato receiving and preparation (`potato_receiving_preparation`)

#### Inputs

##### Product flows

###### Accepted raw potatoes (`raw_potatoes`)

Record accepted potato tubers crossing the facility gate, including supplier lot, received mass, acceptance status, and measured or sampled moisture or solids information where available.

- Selected flow: Raw potatoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted raw-potato mass allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_quality`
- Range: Provisional raw-potato input screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: kg/kg net product
  - Basis: applies only before representative route-specific yield records exist; replace after three representative campaigns or stronger product-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record metered or reconciled water supplied for washing, peeling support, cutting, or other preparation operations.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured preparation-water input attributed to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_resources`
- Range: Provisional preparation-water screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net product
  - Basis: applies only when no representative meter reconciliation exists; replace when metered campaign data cover the selected preparation technology
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record electricity for conveying, washing, sorting, peeling, cutting, and directly controlled preparation equipment.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or equipment load multiplied by operating time and reconciled to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_resources`
- Range: Provisional preparation-electricity screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/kg net product
  - Basis: applies only before route-specific submeter data exist; replace when representative metering or verified equipment records are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared potato material (`prepared_potato_material`)

Record the measured prepared potato mass transferred to the selected conversion route, with retained moisture or solids information linked to the lot.

- Selected flow: Prepared potato material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass to exactly one selected conversion route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- Range: Provisional prepared-material mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 8
  - Unit: kg/kg net product
  - Basis: applies only before representative preparation-yield records exist; replace after measured input, reject, and transfer masses close for representative campaigns
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Potato rejects and preparation residues (`preparation_rejects`)

Record soil-bearing rejects, peel, trimmings, and off-specification potato material separately when their treatment or destination differs.

- Selected flow: Potato preparation residues
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured residue and reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- Range: Provisional preparation-residue screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg net product
  - Basis: applies only when weighed residue records are unavailable; replace when destination-specific weights close the preparation mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving the foreground boundary, including measured quantity and treatment destination; do not duplicate water retained in product or residues.

- Selected flow: Wastewater from potato preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered discharge or reconciled water balance attributed to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- Range: Provisional preparation-wastewater screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net product
  - Basis: applies only before a discharge-meter or water-balance reconciliation exists; replace with representative measured discharge data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cooked-mash drying and forming (`cooked_mash_conversion`)

#### Inputs

##### Product flows

###### Prepared potato feed to cooked-mash route (`wet_route_feed`)

Record prepared potato material entering cooking, mashing, drying, flaking, granulating, or pellet-forming operations for this route only.

- Selected flow: Prepared potato material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured feed transferred from preparation to this route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product from the cooked-mash route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional cooked-route feed screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 8
  - Unit: kg/kg net product
  - Basis: applies only before representative cooked-route yield data exist; replace when measured feed, product, water loss, and residues close for representative campaigns
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooked-route process heat (`wet_route_heat`)

Record purchased steam, heat, or fuel input for cooking and drying; if fuel is combusted on site, also record direct stack emissions using measured fuel composition or applicable emission records.

- Selected flow: Process heat or fuel, route-specific
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy, steam enthalpy calculation, or measured fuel use converted to energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualifying product from the cooked-mash route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional cooked-route heat screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: MJ/kg net product
  - Basis: applies only before technology-specific thermal records exist; replace with representative metered steam, heat, or fuel data and verified conversion factors
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooked-route electricity (`wet_route_electricity`)

Record electricity for cooking support, mashing, conveying, drying auxiliaries, flaking, granulating, pelletizing, and dust control used by the selected route.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or reconciled equipment load and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualifying product from the cooked-mash route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional cooked-route electricity screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg net product
  - Basis: applies only before route submeters or verified equipment records exist; replace with representative cooked-route electricity records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooked-route potato intermediate (`wet_route_intermediate`)

Record the dried and formed potato intermediate transferred to finishing, including product form and moisture at transfer.

- Selected flow: Cooked-route potato intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured intermediate mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product from the cooked-mash route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional cooked-route intermediate-yield guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.5
  - Unit: kg/kg net product
  - Basis: applies only before measured finishing-yield records exist; replace when intermediate and final-product weights cover representative campaigns
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cooked-route wastewater and rejects (`wet_route_waste`)

Record route wastewater, off-specification mash, fines, and rejects separately by measured mass and treatment destination where practicable.

- Selected flow: Cooked-route wastewater and rejects
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wastewater and reject quantities by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualifying product from the cooked-mash route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional cooked-route waste screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net product
  - Basis: applies only before route-specific discharge and reject measurements exist; replace with measured destination-specific records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water evaporated during cooked-route drying (`wet_route_water_to_air`)

Calculate water transferred to air from measured feed and product moisture and reconciled water inputs; do not treat it as fossil carbon dioxide or duplicate wastewater.

- Selected flow: Water, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculated water balance using measured masses and moisture fractions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product from the cooked-mash route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_route_records`
- Range: Provisional evaporated-water mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: kg/kg net product
  - Basis: applies only before validated moisture and mass balances exist; replace with calculated campaign values from representative measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Raw-piece drying and size reduction (`raw_piece_conversion`)

#### Inputs

##### Product flows

###### Prepared potato feed to raw-piece route (`dry_route_feed`)

Record prepared potato pieces entering drying followed by milling, grinding, flaking, granulating, or pelletizing for this route only.

- Selected flow: Prepared potato material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured feed transferred from preparation to this route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product from the raw-piece route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_route_records`
- Range: Provisional raw-piece-route feed screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 8
  - Unit: kg/kg net product
  - Basis: applies only before representative raw-piece-route yield data exist; replace when feed, product, water loss, and residues close for representative campaigns
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Raw-piece-route process heat (`dry_route_heat`)

Record purchased heat or fuel used for drying and thermal conditioning; on-site combustion requires separate direct-emission records.

- Selected flow: Process heat or fuel, route-specific
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy or measured fuel use converted to energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualifying product from the raw-piece route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_route_records`
- Range: Provisional raw-piece-route heat screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: MJ/kg net product
  - Basis: applies only before technology-specific thermal records exist; replace with representative metered heat or fuel data and verified conversion factors
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Raw-piece-route electricity (`dry_route_electricity`)

Record electricity for conveying, drying auxiliaries, milling, sieving, flaking, granulating, pelletizing, and dust control.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or reconciled equipment load and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualifying product from the raw-piece route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_route_records`
- Range: Provisional raw-piece-route electricity screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg net product
  - Basis: applies only before route submeters or verified equipment records exist; replace with representative raw-piece-route electricity records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw-piece-route potato intermediate (`dry_route_intermediate`)

Record the dried and size-reduced potato intermediate transferred to finishing, including form and moisture at transfer.

- Selected flow: Raw-piece-route potato intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured intermediate mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product from the raw-piece route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_route_records`
- Range: Provisional raw-piece-route intermediate-yield guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.5
  - Unit: kg/kg net product
  - Basis: applies only before measured finishing-yield records exist; replace when intermediate and final-product weights cover representative campaigns
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Raw-piece-route rejects and fines (`dry_route_rejects`)

Record off-specification pieces, milling rejects, and recovered or discarded fines separately by destination.

- Selected flow: Raw-piece-route rejects and fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reject and fine mass by reuse, recovery, or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualifying product from the raw-piece route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_route_records`
- Range: Provisional raw-piece-route reject screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net product
  - Basis: applies only before destination-specific reject records exist; replace with measured campaign records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water evaporated during raw-piece drying (`dry_route_water_to_air`)

Calculate water transferred to air from measured feed and product moisture; separately record captured dust or direct combustion emissions when they cross the boundary.

- Selected flow: Water, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculated water balance using measured masses and moisture fractions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product from the raw-piece route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_route_records`
- Range: Provisional evaporated-water mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: kg/kg net product
  - Basis: applies only before validated moisture and mass balances exist; replace with calculated campaign values from representative measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Uncaptured particulate matter (`dry_route_particulate`)

Record measured particulate emissions to air after abatement when milling, sieving, or forming creates a direct release; captured dust remains a waste or recovered product flow.

- Selected flow: Particulate matter, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured outlet concentration multiplied by measured gas flow and operating time, or a reviewed site-specific estimate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualifying product from the raw-piece route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_route_records`
- Range: Provisional particulate-emission screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg net product
  - Basis: applies only for screening before representative emission measurements exist; replace with measured or regulator-reviewed site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Finishing, quality release, and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Intermediate from selected route (`selected_route_intermediate`)

Record intermediate product from exactly one selected conversion route and retain the route identifier in the lot record.

- Selected flow: Potato product intermediate from selected route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured intermediate mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Range: Provisional finishing-input screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.5
  - Unit: kg/kg net product
  - Basis: applies only before representative finishing-yield records exist; replace when measured intermediate and released-product weights close for representative campaigns
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Declared ingredients and retained processing aids (`declared_ingredients`)

Record salt, permitted ingredients, or processing aids retained in the product; do not add food-grade ingredients to a non-food-grade model unless actually used.

- Selected flow: Declared ingredient or retained processing aid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed issue quantity minus documented return or loss, by ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Range: Provisional declared-ingredient screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net product
  - Basis: applies only before formulation and issue records are available; replace immediately with the released formulation and lot-specific issue records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary and secondary packaging by material and measured issue quantity; packaging is not part of the 1 kg reference-product mass.

- Selected flow: Packaging materials, by material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: packaging issued to conforming units minus documented unused returns, normalized to net product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Range: Provisional packaging screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net product
  - Basis: applies only before packaging bill-of-material and issue records exist; replace with product-format-specific packaging records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and packaging electricity (`finishing_electricity`)

Record electricity for final milling, sieving, blending, agglomeration, pelletizing, quality-release support, and packing actually used.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or reconciled equipment load and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Range: Provisional finishing-electricity screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 5
  - Unit: kWh/kg net product
  - Basis: applies only before finishing and packing meter data exist; replace with representative technology-specific records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-released reference product (`reference_product_output`)

This is the exact generic Tiangong CPC 21392 product flow. Record 1 kg net released product with all required qualifiers; packaging, glaze, and free liquid are excluded.

- Selected flow: Flour, meal, powder, flakes, granules and pellets of potatoes `ab16817e-97bc-46df-99e6-362d7a934676`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg net qualifying product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Range: Exact reference-flow conformance interval
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: exact net product reference amount after excluding packaging, glaze, and free liquid
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Finishing rejects and packaging waste (`finishing_waste`)

Record off-specification product, captured fines not returned to product, and packaging waste separately by destination; internal rework shall not be double counted as a new input and output.

- Selected flow: Finishing rejects and packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste and reject mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualifying product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Range: Provisional finishing-waste screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net product
  - Basis: applies only before destination-specific finishing and packaging waste records exist; replace with measured campaign records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | route, batch, and separable operations | First subdivide records by facility, line, route, product lot, and directly metered operation so burdens remain causally linked and allocation is avoided where practicable. | `eu-pef-2021-2279` |
| `allocation_internal_rework` | internal rework | Keep internal rework inside the foreground mass balance and do not assign a separate avoided-product credit unless it crosses the system boundary as a documented co-product. | `eu-pef-2021-2279` |
| `allocation_co_products` | saleable co-products | When subdivision cannot resolve shared burdens, use a physical relation such as measured dry mass only when it reflects the underlying causal relation; otherwise use a documented economic relation and report a sensitivity result. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | wastes and recoverable residues | Report destination, treatment, and any system-model credit consistently; do not treat a residue as both an allocated co-product and an unallocated waste. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_quality` | `potato_receiving_preparation` | accepted raw potatoes and starting condition | weighbridge, receiving, supplier, and quality records | supplier; origin; lot_id; gross_mass; tare_mass; accepted_mass; rejection_mass; moisture_or_solids; acceptance_result | calibrated weighbridge or scales plus representative quality sampling | kg; percent | every received lot | representative production period, normally at least 12 months or all campaigns for seasonal operation | all supplying lots attributable to the declared facility and product | sum accepted mass by lot and retain weighted quality results before normalization | calibration records; sampling method; supplier and lot traceability; acceptance records |
| `cp_preparation_resources` | `potato_receiving_preparation` | water and electricity inputs | meters, invoices, and equipment logs | meter_start; meter_end; allocation_period; production_time; equipment_load; lot_output | direct meter preferred; otherwise reconciled invoice or verified load-time calculation | kg water; kWh | each lot or shortest representative metering interval | same period as product output | directly controlled preparation operations | subtract unrelated uses, allocate only unavoidable shared totals with disclosed basis, and normalize to released net product | meter identification; calibration or invoice reconciliation; operating logs |
| `cp_preparation_outputs` | `potato_receiving_preparation` | prepared material, residues, and wastewater | transfer scales, waste tickets, and discharge meters | prepared_mass; prepared_moisture; residue_mass_by_destination; wastewater_volume_or_mass; lot_id | calibrated scale and discharge meter or closed water balance | kg; percent | each lot or campaign | same period as associated input records | all preparation outputs for the declared product | reconcile input potato and water with transfer, residue, wastewater, and retained or evaporated water | scale calibration; destination tickets; water-balance closure |
| `cp_wet_route_records` | `cooked_mash_conversion` | cooked-route feed, utilities, outputs, and water balance | batch sheets, scales, meters, fuel records, moisture tests, and waste records | route_id; feed_mass; feed_moisture; steam_or_fuel; electricity; intermediate_mass; product_moisture; wastewater; rejects; operating_time | batch measurement with direct meters and representative moisture tests | kg; percent; MJ; kWh | each batch or shortest representative metering interval | all cooked-route campaigns in the declared period | cooked-mash route only | reconcile mass, moisture, energy, waste, and output; normalize only to product from this route | route lock; meter and scale records; test method; mass and water closure |
| `cp_dry_route_records` | `raw_piece_conversion` | raw-piece-route feed, utilities, outputs, water, rejects, and particulate | batch sheets, scales, meters, moisture tests, waste records, and emission monitoring | route_id; feed_mass; feed_moisture; heat_or_fuel; electricity; intermediate_mass; product_moisture; rejects; captured_dust; outlet_concentration; gas_flow; operating_time | batch measurement, direct meters, moisture tests, and site emission measurement where release occurs | kg; percent; MJ; kWh; concentration; gas volume | each batch; emissions at the applicable monitoring frequency | all raw-piece-route campaigns in the declared period | raw-piece route only | reconcile mass, moisture, energy, waste, output, and measured releases; normalize only to product from this route | route lock; calibration; test method; waste tickets; monitoring records; mass and water closure |
| `cp_finishing_records` | `finishing_packaging` | intermediate, ingredients, packaging, electricity, released product, and wastes | batch formulation, issue, scale, meter, packaging bill-of-material, release, and waste records | route_id; intermediate_mass; ingredient_issue_and_return; packaging_issue_and_return; electricity; gross_product_mass; net_product_mass; moisture; salt_or_salinity; glaze_mass; drained_mass; rejects; release_status | calibrated scales, formulation reconciliation, direct meters or verified load-time records, and quality testing | kg; percent; kWh | every finishing lot or campaign | all released lots in the declared period | all finishing and packing operations for the declared product | include released lots and attributable rejects, exclude packaging and applicable glaze or free liquid from net product, and normalize to released net mass | formulation approval; packaging specification; calibration; test method; release and waste records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | released product | Net reference mass equals gross filled product-system mass minus packaging, pallets, applicable glaze, and free liquid; when liquid is present use measured drained product mass. | gross mass; tare and packaging mass; glaze mass; drained mass; release status | kg net qualifying product |  |
| `calc_dry_matter` | potatoes, intermediates, and product | Dry matter equals measured mass multiplied by one minus wet-basis moisture fraction; retain the measured as-sold mass as the reference basis. | measured mass; wet-basis moisture percent | kg dry matter and kg as-sold mass |  |
| `calc_route_normalization` | each homogeneous route lot | Divide attributable input, waste, and direct-emission quantities by released net product from that same route and period; do not combine route totals before route-specific normalization. | route-tagged inventory; released net product | inventory per kg net product by route | `eu-pef-2021-2279` |
| `calc_mass_balance` | each process and lot | Reconcile measured inputs with products, wastes, retained water, evaporated water, and stock change; investigate material imbalance beyond the facility's documented measurement uncertainty. | input and output masses; moisture; stock change | disclosed mass and water balance | `eu-pef-2021-2279` |
| `calc_shared_burden` | unavoidable shared operations | Apply the allocation hierarchy in section 7, retain the selected factor and basis, and report sensitivity when an economic fallback is used. | shared burden; co-product quantities; physical or economic factor | allocated inventory by product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | all lots | Retain supplier, potato origin, facility, product form, route, formulation, intended use, grade, and lot linkage through release. | Receiving, batch, formulation, and release records; CPC identity from `unsd-cpc-3-0-21392` |
| `dq_measurement` | mass, moisture, salinity, energy, water, and emissions | Use calibrated or verified instruments and retain test methods, meter boundaries, conversion factors, and uncertainty or reconciliation evidence. | Calibration, laboratory, meter, invoice-reconciliation, and monitoring records |
| `dq_temporal_coverage` | foreground inventory | Cover a representative production period and disclose seasonality, shutdowns, atypical lots, and any sampling or extrapolation. | Period coverage report consistent with `eu-pef-2021-2279` |
| `dq_completeness` | process inventory | Account for the selected route's material, water, energy, packaging, wastes, and direct releases; document exclusions and close mass and water balances. | Balance worksheets and completeness review consistent with `eu-pef-2021-2279` |
| `dq_food_grade_condition` | food-grade lots only | Retain hygiene-control and traceability evidence appropriate to food production; do not claim Codex conformity for non-food-grade lots. | Food safety plan and records guided by `codex-cxc-1-1969` |
| `dq_estimate_replacement` | provisional ranges | Identify every `reasoned_estimate` used for screening and replace it with representative foreground evidence or reviewed transferable evidence before activation unless a reviewer explicitly accepts continued provisional use. | Range replacement log and methodology review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_category_identity` | product identity | Confirm the product is principally processed potato material in one covered form and is not potato starch, modified starch, a prepared dish, snack, feed, or another excluded product. | `unsd-cpc-3-0-21392` |
| `validation_reference_flow` | reference flow | Confirm the output uses product flow `ab16817e-97bc-46df-99e6-362d7a934676`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and exactly 1 kg net qualifying product. |  |
| `validation_mass_qualifiers` | product release | Require product form, route, intended use, net-mass basis, moisture, applicable salt or salinity, applicable glaze-excluded or drained mass, formulation, packaging state, and release specification; explicitly mark inapplicable qualifiers. |  |
| `validation_route_exclusivity` | process map | Confirm exactly one conversion route is active for each homogeneous lot and that inactive-route inputs, outputs, and burdens are zero rather than combined. |  |
| `validation_balance_and_inventory` | foreground inventory | Confirm every required process has records, all purchased inputs have upstream links, wastes have destinations, direct releases are reported where they occur, and route-specific mass and water balances are reconciled. | `eu-pef-2021-2279` |
| `validation_grade_boundary` | intended use | Confirm food-grade lots retain applicable hygiene evidence and non-food-grade lots remain explicitly non-food without assumed food-only controls. | `codex-cxc-1-1969` |
| `validation_provisional_ranges` | reasoned estimates | Treat every reasoned range as a screening finding only; require replacement or explicit reviewer acceptance when representative campaigns or stronger transferable evidence become available. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package and unit-process or aggregated factory-gate dataset for the declared qualifying potato product |
| downstream_use | May be used as a secondary_dataset or background_dataset in process and lifecyclemodel projections when geography, technology, route, grade, and product form are representative |
| allowed_use | Factory-gate modelling of the declared potato flour, meal, powder, flakes, granules, or pellets with complete qualifiers and disclosed allocation |
| excluded_use | Potato starch or modified starch; fresh or simply preserved potatoes; prepared foods or snacks; animal feed; products from other crops; undisclosed mixtures of mutually exclusive routes; substitution across food-grade and non-food-grade boundaries without justification |
| required_metadata | PCR id; CPC reference; Tiangong reference-flow UUID; product form; route; facility and geography; intended use and grade; formulation; net-mass, moisture, salt or salinity, glaze, and drained-mass qualifiers as applicable; temporal coverage; allocation; upstream links; packaging state; release specification |
| required_quality_disclosure | Primary-data share; meter and scale quality; sampling and test methods; mass and water balance; route coverage; allocation sensitivity; exclusions; waste destinations; direct-emission methods; remaining reasoned estimates and their replacement status |
| update_trigger | Change in product form, route, technology, formulation, intended use, release specification, moisture or mass basis, packaging, allocation, facility representativeness, source rules, Tiangong identity, or availability of evidence that replaces a reasoned estimate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21392` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 21392, “Flour, meal, powder, flakes, granules and pellets of potatoes”; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; accessed 2026-08-11 | Exact category identity and covered product forms |
| `codex-cxc-1-1969` | Standard (`standard`) | Codex Alimentarius, CXC 1-1969, General Principles of Food Hygiene; https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/; accessed 2026-08-11 | Conditional hygiene, traceability, and food-grade data-quality rules; not applied to non-food-grade production |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods; https://eur-lex.europa.eu/eli/reco/2021/2279/oj; accessed 2026-08-11 | Life-cycle inventory boundary, primary-data preference, allocation hierarchy, normalization, completeness, and data-quality disclosure |
