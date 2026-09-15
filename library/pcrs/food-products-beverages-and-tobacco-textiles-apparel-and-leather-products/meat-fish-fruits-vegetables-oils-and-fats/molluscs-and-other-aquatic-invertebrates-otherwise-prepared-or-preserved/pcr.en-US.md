---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.molluscs-and-other-aquatic-invertebrates-otherwise-prepared-or-preserved
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Molluscs and other aquatic invertebrates, otherwise prepared or preserved

## 1. Scope and Applicability

This PCR defines foreground data-production rules for factory-gate manufacture of molluscs and other aquatic invertebrates that are prepared or preserved by a method more substantial than simple freezing, drying, salting, or brining. It applies to products such as abalone, clams, mussels, cuttlefish, oysters, scallops, sea cucumbers, squid, sea snails, jellyfish, octopus, sea urchins, and cockles when they are cooked, roasted, seasoned, stuffed, battered or breaded, fried, smoked, pasteurized, sterilized, canned, packed in oil or vinegar, incorporated in a non-meal sauce or chowder, formed into balls or pate, or otherwise prepared or preserved. A product frozen after one of these qualifying preservation operations remains in scope.

The foreground boundary starts when eligible live, chilled, frozen, or preliminarily handled aquatic raw material and other ingredients are accepted at the processing facility. It ends when the finished product, including its actual packaging and required factory storage, is released at the factory gate. Upstream capture or aquaculture, production of purchased ingredients and packaging, and off-site treatment remain separate upstream or downstream datasets linked to the foreground package.

The PCR excludes crustaceans; live, fresh, or chilled raw molluscs; products preserved only by freezing, drying, salting, or brining; extracts and juices; and complete prepared dishes or meals. It also excludes retail, consumer preparation, use, and end-of-life unless a downstream study explicitly adds those stages.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.molluscs-and-other-aquatic-invertebrates-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0: 21280 (exact mapping context) |
| covered_products | Otherwise prepared or preserved molluscs and non-crustacean aquatic invertebrates, including qualifying canned, pasteurized, sterilized, smoked, cooked, roasted, fried, seasoned, stuffed, coated, sauced, oiled, vinegared, formed, or pate products; products frozen after qualifying preservation are included. |
| excluded_products | Crustaceans; live, raw, fresh, or chilled-only products; products only frozen, dried, salted, or in brine; extracts and juices; complete prepared dishes and meals. |
| representative_product | Saleable edible mollusc or other aquatic-invertebrate product after its declared preparation or preservation route, with packing medium and storage state declared. |
| production_route | Receipt and cold holding; thawing or deglazing when applicable; washing, shucking, trimming, shell-fragment removal, grading, and preparation; formulation or filling; at least one qualifying preservation operation; packaging, storage, and release; plus cleaning and wastewater management. |
| market_state | Factory-gate product in the declared ambient-stable, chilled, or frozen state, packed for sale or for further food manufacture, and declared as ready-to-eat or requiring final cooking. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible molluscs or other non-crustacean aquatic invertebrates that have undergone the declared qualifying preparation or preservation route. |
| How much | 1 kg of saleable product on the declared reference-mass basis, excluding packaging. |
| How well | Conforming to the declared species, formulation, preservation route, product form, food-safety release criteria, packing medium, and storage state. |
| How long or cycle | One production-lot output at factory gate; declared shelf-life and storage conditions describe product quality but do not add a use-stage duration. |
| reference_flow_link | The functional unit is realized by the single Tiangong reference product flow below, normalized to 1 kg on the applicable net, drained-net, or integral-product mass basis. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg saleable product at factory gate, excluding packaging. For a solid product in a non-decisive liquid packing medium, use drained net mass; for a product whose sauce, paste, or liquid phase is integral, use total net product mass and declare composition. |
| Reference product flow | Molluscs and other aquatic invertebrates, otherwise prepared or preserved `5102ffa5-d24d-4e8c-b18d-d22f74677182` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species mix and common/scientific identification; wild-caught or aquaculture origin when known; incoming raw-material state; qualifying preparation and preservation technology; product form; ready-to-eat or cook-before-eating status; packing medium and formulation; net versus drained-net versus integral-product reference-mass basis; glaze treatment; packaging format and mass; ambient, chilled, or frozen release state; storage temperature; production geography and reference period; included conditional processes; foreground yield and rework treatment |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the package to 1 kg of saleable product excluding packaging and identify the applied net, drained-net, or integral-product mass basis. |
| `drained_and_glaze_mass` | Solid product in liquid medium or glazed product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure total net mass, drained edible-solid mass, packing-medium mass, and glaze mass separately. Use drained net mass when the liquid is only an adjunct; exclude glaze from the declared food net mass. |
| `internal_mass_transfer` | Internal intermediate product and rework | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each internal transfer on a wet-mass basis and retain moisture, shell-on or shell-off state, and edible-fraction qualifiers so yields are not mixed across unlike states. |
| `water_measurement` | Process and cleaning water | Volume or Mass | m3 or kg | Preserve the metered unit. Convert between volume and mass only with a documented measured or justified density and retain the original reading. |
| `energy_measurement` | Electricity, steam, fuel, refrigeration, and other energy carriers | Energy or carrier-specific property | kWh, MJ, or carrier unit | Record each purchased energy carrier separately. Preserve native meter units; if converting electricity, use 1 kWh = 3.6 MJ and disclose the conversion. |
| `batch_time_allocation` | Shared meters and batch campaigns | Mass and time | kg and h | Allocate shared consumption to product lots using recorded operating time, throughput, or another causal driver; retain the driver and all production included in the denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Eligible live, chilled, frozen, or preliminarily handled molluscan or other non-crustacean aquatic-invertebrate raw material accepted at the processing facility, with species, supplier, origin when known, incoming state, temperature, and mass recorded. |
| starting_condition_role | Foreground gate at raw-material acceptance; capture or aquaculture and upstream raw-material handling are represented by linked upstream datasets. |
| product_classification_scope | The final qualifying prepared or preserved product only; ingredient and intermediate classification does not change canonical PCR identity. |
| recursive_input_rule | Purchased product or recovered material already within this same product category is recorded once as an upstream product input with mass, state, and intended role; its prior preparation is not decomposed again inside the foreground process. |
| upstream_dataset_requirement | Link upstream datasets for aquatic raw material, ingredients, packaging, water supply, energy carriers, refrigerants, and inbound services when included in the downstream study. |
| disclosure | Declare starting state, included qualifying preservation route, packaging point, storage state, treatment of rework and co-products, on-site utilities and wastewater treatment, and every excluded or separately modelled stage. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | Foreground manufacturing | Include receipt, storage, preparation, formulation or filling, at least one qualifying preservation operation, packaging, factory storage, cleaning, and directly generated wastes and emissions when they occur at the reporting facility. | `codex-cxc-52-2003-fish-fishery-products`; `eu-jrc-fdm-bref-2019` |
| `boundary_rule_2` | Qualifying preservation | A route consisting only of freezing, drying, salting, or brining is outside this PCR. The package must identify a qualifying operation such as cooking, roasting, frying, coating, smoking, pasteurization, sterilization, canning, acidification, stuffing, seasoning, or another substantive preparation. | `codex-cxc-52-2003-fish-fishery-products` |
| `boundary_rule_3` | Hermetically sealed product | Include filling, closure, coding, staging, validated thermal processing, cooling, inspection, and storage for canned or retorted product. Use the facility's validated product-container process schedule; this PCR supplies no generic sterilization temperature or time. | `codex-cxc-52-2003-fish-fishery-products` |
| `boundary_rule_4` | Upstream and downstream linkage | Keep capture or aquaculture, purchased-input production, off-site waste treatment, distribution, retail, consumer use, and end-of-life as linked datasets unless the declared study boundary explicitly adds them. | `epd-international-pcr-2025-03` |
| `boundary_rule_5` | Packaging and cold storage | Include actual primary, secondary, and tertiary packaging used up to factory-gate release and include factory cold storage or freezing after preservation when applied. | `epd-international-pcr-2025-03` |
| `boundary_rule_6` | Completeness | Do not omit a foreground material, energy carrier, refrigerant loss, wastewater stream, direct emission, or residue solely because it is difficult to measure. Quantitatively screen and disclose every exclusion under the governing study programme. | `iso-14044-2006-lca` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_reception_and_cold_storage` | Raw-material reception and cold storage | required | Always; the actual incoming live, chilled, or frozen state is declared. | Foreground acceptance and holding | kg accepted aquatic raw material |
| `preparation_and_cleaning` | Preparation and cleaning | required | Always; individual operations such as thawing, deglazing, shucking, trimming, and grading apply only when performed. | Foreground edible-material preparation | kg prepared edible material |
| `formulation_and_filling` | Formulation, portioning, and filling | required | Always; zero additions are permitted only for a qualifying route that needs no added ingredient or packing medium. | Foreground product formulation | kg filled or formulated product before preservation |
| `qualifying_preservation` | Qualifying preservation operation | required | At least one declared operation beyond simple freezing, drying, salting, or brining. | Foreground cooking, smoking, coating/frying, pasteurization, sterilization, canning, or other qualifying preservation | kg preserved product |
| `packaging_storage_and_release` | Packaging, factory storage, and release | required | Always; ambient, chilled, or frozen route and packaging format are declared. | Foreground finalization | kg saleable reference product |
| `cleaning_and_wastewater_management` | Cleaning and wastewater management | required | Always for plant operations; identify any quantities already embedded in process meters to prevent double counting. | Foreground support and environmental control | kg reference product supported |

### Process: Raw-material reception and cold storage (`raw_material_reception_and_cold_storage`)

#### Inputs

##### Product flows

###### Eligible aquatic raw material (`eligible_aquatic_raw_material_input`)

Record each species and supplier lot entering the facility, including whether the material is live, chilled, frozen, shell-on, shucked, or previously handled. A Tiangong UUID remains to be selected for each actual raw-material identity.

- Selected flow: Eligible mollusc or other non-crustacean aquatic-invertebrate raw material (Tiangong UUID unresolved by species/state)
- Flow property / unit: Mass / kg
- Amount rule: Supplier-verified received wet mass by lot before rejects and preparation losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources:
- Range: Provisional shell-on and preparation-yield screening envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 4.0
  - Unit: kg/kg reference product
  - Basis: received aquatic raw material per kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cold-storage electricity (`reception_cold_storage_electricity`)

Record metered or causally allocated electricity for chilled or frozen holding before preparation. The selected electricity flow must match facility geography and supply contract.

- Selected flow: Electricity supply at facility (Tiangong UUID unresolved by geography)
- Flow property / unit: Energy / kWh
- Amount rule: Metered cold-store electricity allocated to accepted lots using mass-time or occupied-volume-time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted aquatic raw material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_storage_energy`
- Sources:
- Range: Provisional cold-holding electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg accepted raw material
  - Basis: electricity for facility holding before preparation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted aquatic raw material (`accepted_aquatic_raw_material_output`)

Accepted material is the received mass remaining after documented reception rejects. It transfers internally to preparation without creating an additional upstream product burden.

- Selected flow: Accepted aquatic raw material internal transfer (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass minus reception rejects and documented holding loss.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reception lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources:

##### Waste flows

###### Reception rejects (`reception_rejects`)

Record dead, damaged, spoiled, contaminated, or otherwise rejected material by actual destination and legal classification.

- Selected flow: Rejected aquatic material to actual treatment (Tiangong UUID unresolved by treatment)
- Flow property / unit: Mass / kg
- Amount rule: Weighed reception rejects by lot and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg received aquatic raw material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Sources:
- Range: Provisional reception-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg received aquatic raw material
  - Basis: reception rejects per kg received aquatic raw material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Preparation and cleaning (`preparation_and_cleaning`)

#### Inputs

##### Product flows

###### Accepted aquatic raw material for preparation (`accepted_raw_material_to_preparation`)

Record the internal mass entering thawing, deglazing, washing, shucking, trimming, shell-fragment removal, grading, or other actual preparation operations.

- Selected flow: Accepted aquatic raw material internal transfer (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced internal transfer to preparation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_mass_balance`
- Sources:

###### Preparation and washing water (`preparation_water`)

Include water used for thawing, deglazing, washing, shucking aids, product transport, and equipment rinsing when the meter boundary assigns it to preparation. Keep seawater and freshwater separate.

- Selected flow: Freshwater or treated seawater supplied to preparation (Tiangong UUID unresolved by water type)
- Flow property / unit: Volume / m3
- Amount rule: Metered preparation water minus separately metered cleaning-only water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne received aquatic raw material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Fish-and-shellfish sector proxy screening envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 32
  - Unit: m3/t received aquatic raw material
  - Basis: envelope of reported thawing, filleting, canning, and shrimp-processing water figures; proxy only, not a conformance limit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared edible aquatic material (`prepared_edible_material`)

Record the wet edible mass after actual preparation and before added ingredients, with shell-on/off, drained, and moisture state declared.

- Selected flow: Prepared edible mollusc or other aquatic-invertebrate material (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Directly weighed prepared edible material or calculated by reconciled lot mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_mass_balance`
- Sources:

###### Marketable edible co-products (`preparation_edible_coproducts`)

Record edible side streams sold or transferred as products separately from wastes and internal rework.

- Selected flow: Marketable edible aquatic co-product (Tiangong UUID unresolved by actual co-product)
- Flow property / unit: Mass / kg
- Amount rule: Weighed co-product mass by product identity and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Sources:

##### Waste flows

###### Shells, viscera, trimmings, and other residues (`preparation_solid_residues`)

Separate shells, viscera, inedible trimmings, shell fragments, and other residues by actual reuse, recovery, rendering, disposal, or wastewater destination.

- Selected flow: Aquatic-processing solid residue to actual treatment (Tiangong UUID unresolved by residue and treatment)
- Flow property / unit: Mass / kg
- Amount rule: Weighed residue by lot and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg received aquatic raw material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Sources:
- Range: Provisional preparation-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg/kg received aquatic raw material
  - Basis: preparation residues per kg received aquatic raw material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record the wastewater leaving preparation, including dissolved and suspended organic matter, salt, and cleaning carryover where present. Keep internal recirculation out of the discharge quantity.

- Selected flow: Wastewater from aquatic-product preparation to actual treatment (Tiangong UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or calculated water balance for preparation, with recirculation and evaporation identified.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 preparation water input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_and_wastewater`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional wastewater-to-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.2
  - Unit: m3/m3 preparation water input
  - Basis: wastewater leaving preparation relative to metered preparation water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Formulation, portioning, and filling (`formulation_and_filling`)

#### Inputs

##### Product flows

###### Prepared edible material input (`prepared_material_to_formulation`)

Record the prepared edible aquatic material entering formulation or filling on the same wet-mass state used for the preparation yield.

- Selected flow: Prepared edible aquatic material internal transfer (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed internal transfer to the formulation or filling line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per formulation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_and_filling`
- Sources:

###### Ingredients and packing medium (`ingredients_and_packing_medium`)

Record each ingredient separately, including water, brine, salt, oil, vinegar, sauce, seasoning, batter, breading, stuffing, binder, and additive actually incorporated into the product.

- Selected flow: Recipe ingredient or packing medium (Tiangong UUID unresolved by ingredient)
- Flow property / unit: Mass / kg
- Amount rule: Issued mass minus returned, recovered, or discarded ingredient, reconciled to filled product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg filled product before preservation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_and_filling`
- Sources:
- Range: Provisional formulation-addition screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.0
  - Unit: kg/kg filled product
  - Basis: total added ingredients and packing medium per kg filled product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary container before preservation (`primary_container_input`)

For in-container pasteurization, sterilization, or retorting, record the actual container, closure, liner, label component applied before heat treatment, and associated rejects.

- Selected flow: Primary food container and closure (Tiangong UUID unresolved by material and format)
- Flow property / unit: Mass / kg
- Amount rule: Packaging issued to conforming filled units minus recovered unused stock, with rejects recorded separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg filled product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional primary-container screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1.0
  - Unit: kg/kg filled product
  - Basis: primary packaging mass per kg filled product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Filled or formulated product (`filled_product`)

Record product and packing medium after formulation and portion control, before the qualifying preservation step. Retain fill mass, drained mass when applicable, headspace, and container format.

- Selected flow: Filled or formulated aquatic product internal transfer (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Sum conforming filled-unit net masses by lot, excluding packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per formulation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_and_filling`
- Sources: `eu-1169-2011-food-information`

##### Waste flows

###### Formulation and filling losses (`formulation_and_filling_losses`)

Record spilled product, off-specification mixture, start-up and changeover loss, overfill recovery, and ingredients sent to treatment. Keep reusable rework as an internal loop rather than a waste.

- Selected flow: Formulation or filling residue to actual treatment (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced loss by destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg filled product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_coproducts`
- Sources:
- Range: Provisional formulation-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg filled product
  - Basis: formulation and filling loss per kg filled product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Qualifying preservation operation (`qualifying_preservation`)

#### Inputs

##### Product flows

###### Product entering qualifying preservation (`product_to_preservation`)

Record the product entering the actual cooking, roasting, frying, coating, smoking, pasteurization, sterilization, canning, acidification, or other qualifying route.

- Selected flow: Filled or formulated aquatic product internal transfer (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed product entering each preservation route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_schedule`
- Sources: `codex-cxc-52-2003-fish-fishery-products`

###### Preservation electricity (`preservation_electricity`)

Record electricity for cookers, fryers, smokers, retorts, pumps, fans, refrigeration, freezing after preservation, controls, and line equipment. Exclude electricity already assigned to reception or final storage.

- Selected flow: Electricity supply at facility (Tiangong UUID unresolved by geography)
- Flow property / unit: Energy / kWh
- Amount rule: Metered or causally allocated electricity for each preservation route and lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_energy`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional preservation-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 2.0
  - Unit: kWh/kg preserved product
  - Basis: electricity for the qualifying preservation route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy carriers (`preservation_thermal_energy`)

Record steam, hot water, fuel, recovered heat, or other thermal supply separately by carrier and do not combine purchased fuel with direct combustion emissions.

- Selected flow: Steam, fuel, or recovered thermal energy used by preservation (Tiangong UUID unresolved by carrier)
- Flow property / unit: Energy / MJ or carrier-specific unit
- Amount rule: Metered thermal energy or fuel quantity allocated to the preservation route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_energy`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional preservation-thermal-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg preserved product
  - Basis: delivered thermal energy for the qualifying preservation route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved product (`preserved_product`)

Record conforming product after the qualifying preservation operation and cooling, with actual time-temperature or other validated process record linked to the lot.

- Selected flow: Preserved mollusc or other aquatic-invertebrate product internal transfer (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Conforming preserved output mass after cooling and before final packing or storage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_schedule`
- Sources: `codex-cxc-52-2003-fish-fishery-products`

##### Waste flows

###### Preservation losses and spent media (`preservation_losses_and_spent_media`)

Record product loss, spent brine, oil, sauce, coating, smoke residues, cooling-water blowdown, and off-specification units separately by actual treatment or recovery route.

- Selected flow: Preservation residue or spent process medium to actual treatment (Tiangong UUID unresolved by material)
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Weighed, metered, or reconciled quantity by residue type and destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_coproducts`
- Sources:
- Range: Provisional preservation-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg preserved product
  - Basis: preservation losses and spent media per kg preserved product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct combustion and smoking emissions (`direct_preservation_air_emissions`)

When fuel is combusted or smoke is generated on site, report direct emissions by substance using measured data or a documented fuel- and technology-specific calculation. Do not infer food-safety smoke control from an LCI default.

- Selected flow: Direct emission to air by substance (Tiangong UUID unresolved by substance)
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculated emissions from collected fuel and operating data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_energy`
- Sources:

### Process: Packaging, factory storage, and release (`packaging_storage_and_release`)

#### Inputs

##### Product flows

###### Preserved product for finalization (`preserved_product_to_finalization`)

Record conforming preserved product entering final packaging, casing, labelling, factory storage, and release.

- Selected flow: Preserved aquatic product internal transfer (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed conforming product transferred from preservation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finalization lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release`
- Sources:

###### Final packaging materials (`final_packaging_materials`)

Record primary packaging not already counted before preservation and all secondary and tertiary packaging used through factory-gate release. Separate materials and reusable transport items.

- Selected flow: Final packaging material by material and format (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Packaging issued minus returned unused stock, allocated across conforming released units.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional total-packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1.0
  - Unit: kg/kg reference product
  - Basis: all packaging through factory-gate release per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Final cold-storage electricity (`final_cold_storage_electricity`)

Include chilled or frozen factory storage after preservation until gate release and identify any energy already included in preservation meters.

- Selected flow: Electricity supply at facility (Tiangong UUID unresolved by geography)
- Flow property / unit: Energy / kWh
- Amount rule: Metered storage electricity allocated by product mass-time or occupied-volume-time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product and declared factory storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_storage_energy`
- Sources:
- Range: Provisional final-storage electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg reference product
  - Basis: electricity through factory-gate release for the declared storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable reference product (`saleable_reference_product`)

This is the sole reference output. Apply the declared mass-basis rule and retain release, coding, storage, and shelf-life metadata.

- Selected flow: Molluscs and other aquatic invertebrates, otherwise prepared or preserved `5102ffa5-d24d-4e8c-b18d-d22f74677182`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg saleable product excluding packaging on the declared net, drained-net, or integral-product basis.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_release`
- Sources: `eu-1169-2011-food-information`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-1169-2011-food-information`

##### Waste flows

###### Packaging and finished-product rejects (`finalization_rejects`)

Record damaged containers, packaging trim, label and case rejects, failed release units, and expired factory-held product by material and destination.

- Selected flow: Packaging or finished-product reject to actual treatment (Tiangong UUID unresolved by material)
- Flow property / unit: Mass / kg
- Amount rule: Weighed or counted-and-converted reject quantity by lot and destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional finalization-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg released reference product
  - Basis: packaging and product rejects per kg released reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning and wastewater management (`cleaning_and_wastewater_management`)

#### Inputs

##### Product flows

###### Cleaning water and chemicals (`cleaning_water_and_chemicals`)

Record clean-in-place and manual sanitation water and each cleaning or disinfection chemical not already included in process meters. Keep chemical product mass and active-substance mass distinct.

- Selected flow: Cleaning water and chemical products (Tiangong UUID unresolved by product)
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: Metered water and issued-minus-returned chemical quantities assigned to the product campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product supported
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_and_wastewater`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional cleaning-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg water-equivalent/kg reference product
  - Basis: combined water-equivalent screening quantity; chemicals must still be reported separately
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Combined process and cleaning wastewater (`combined_wastewater`)

Report wastewater leaving the facility boundary by treatment route, avoiding double counting of preparation and preservation streams. Retain measured flow and relevant load data such as COD, suspended solids, nitrogen, phosphorus, salt, oil and grease, and cleaning chemicals when required by the study.

- Selected flow: Food-processing wastewater to actual on-site or off-site treatment (Tiangong UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Final effluent meter minus separately exported clean water, with internal recycling excluded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_wastewater`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional facility-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 35
  - Unit: kg water-equivalent/kg reference product
  - Basis: final wastewater leaving the facility per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Process subdivision | Avoid allocation by separately metering materially different product lines, preservation routes, species groups, and packaging formats whenever technically practicable. | `iso-14044-2006-lca` |
| `allocation_rule_2` | Internal rework | Treat rework returned to the same production system as an internal loop. Record its mass and any additional processing, but do not create a co-product or duplicate upstream burden. | `iso-14044-2006-lca` |
| `allocation_rule_3` | Joint edible co-products | After subdivision, allocate inseparable shared burdens using a documented causal physical relationship. If no better causal relationship is demonstrated, use wet mass at the split point and test sensitivity to a justified economic relationship. | `iso-14044-2006-lca` |
| `allocation_rule_4` | Shells and other non-edible outputs | Classify each output as marketable co-product, recoverable residue, or waste according to its actual legal status and destination. Apply allocation only to a genuine co-product; assign handling and treatment caused by waste to the foreground product system. | `iso-14044-2006-lca` |
| `allocation_rule_5` | Shared utilities and cleaning | Allocate shared electricity, heat, refrigeration, water, cleaning, and wastewater using a causal driver such as metered use, operating time, mass-time, occupied-volume-time, or wastewater load. Disclose the driver and denominator. | `iso-14044-2006-lca` |
| `allocation_rule_6` | Allocation closure | Allocation factors for each shared process must sum to 1.0, and unallocated internal transfers, losses, and rework must remain visible in the mass balance. | `iso-14044-2006-lca` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `raw_material_reception_and_cold_storage` | aquatic raw material, accepted mass, and rejects | supplier lot and receiving record | supplier; species; origin; catch/aquaculture status when known; incoming state; shell-on/off; temperature; gross, tare, net, accepted, and rejected mass; reject reason | Calibrated scale plus receiving inspection and supplier documentation | kg and degC | Every lot | Representative production year with seasonal coverage | All reporting-facility receiving points and suppliers in scope | Sum lot masses; retain species and state strata; calculate accepted mass as received minus rejects | Scale calibration, lot identifiers, supplier documents, temperature log, and reject record |
| `cp_cold_storage_energy` | `raw_material_reception_and_cold_storage`; `packaging_storage_and_release` | chilled and frozen storage electricity | electricity meter and storage occupancy log | meter start/end; storage zone; operating hours; product mass; occupied volume; temperature set point; entry and release time | Submeter where available; otherwise allocate facility meter by documented mass-time or volume-time | kWh, h, kg, m3 | Meter interval and every lot movement | Same period as production data | All cold stores serving in-scope product | Subtract unrelated loads and allocate by recorded causal driver | Meter identifier, calibration or utility bill reconciliation, occupancy log, and allocation worksheet |
| `cp_preparation_water` | `preparation_and_cleaning` | thawing, deglazing, washing, and preparation water | water meter and operating log | source; freshwater/seawater; meter start/end; recirculation; discharge; line; lot; operating time | Dedicated meter or reconciled facility water balance | m3 | Shift or batch | Representative production year including cleaning and peak season | All preparation lines in scope | Net withdrawal = intake minus separately measured returned or internally recycled water | Meter calibration, water-treatment record, and monthly utility reconciliation |
| `cp_preparation_mass_balance` | `preparation_and_cleaning` | prepared edible material, shells, trimmings, and internal transfers | batch mass-balance record | incoming mass; thaw/drip loss; edible output; co-product; shell; viscera; trim; wastewater solids; rework | Calibrated scales and reconciled batch sheet | kg | Every batch or statistically justified continuous-line interval | Representative production year and all material species/routes | All preparation operations and mass-transfer points in scope | Sum outputs and inventory change; reconcile against input by wet-mass state | Scale calibration, batch identifier, signed reconciliation, and exception investigation |
| `cp_ingredient_and_filling` | `formulation_and_filling` | recipe ingredients, packing medium, filled mass, and losses | recipe issue, return, filler, and check-weigher records | ingredient id; issued/returned/wasted mass; formulation; container count; fill mass; drained mass; headspace; overfill; rework | Inventory issue reconciliation plus calibrated filler/check-weigher | kg, count | Every formulation lot and routine in-process checks | Representative production year and all declared formulations | All formulation, portioning, and filling lines in scope | Net ingredient use = issued minus returned and separately recovered amounts; aggregate only identical formulations | Recipe approval, instrument calibration, fill-control chart, and lot traceability |
| `cp_preservation_schedule` | `qualifying_preservation` | qualifying route and preserved output | batch, retort, cooker, smoker, fryer, pasteurizer, or other validated process record | route; equipment; product/container format; fill or initial temperature; time; temperature; pressure; flow; critical limits; deviations; conforming output | Automated recorder or qualified operator record under the validated site process | route-specific units and kg | Every batch or continuous production lot | Full reporting period | Every in-scope preservation line and product-container combination | Link each released lot to one complete process record; do not average critical-limit compliance | Calibration, validation approval, operator sign-off, deviation disposition, and release authorization |
| `cp_preservation_energy` | `qualifying_preservation` | electricity, steam, heat, fuel, refrigeration, and direct emissions | submeter, fuel issue, steam meter, and operating log | carrier; meter start/end; fuel mass/volume; steam/heat quantity; recovered heat; equipment time; throughput; emission factor source when calculated | Metered energy preferred; otherwise fuel inventory and causal allocation | kWh, MJ, kg, m3 | Batch, shift, or billing interval | Same period as production data | All preservation equipment and on-site energy generation serving in-scope product | Separate carriers; subtract exported or recovered energy; allocate shared load by operating time or throughput | Meter calibration, utility reconciliation, fuel invoice, and calculation record |
| `cp_packaging_records` | `formulation_and_filling`; `packaging_storage_and_release` | primary, secondary, tertiary, and reject packaging | packaging bill of materials, issue, return, and reject records | component id; material; unit mass; issued/returned count; conforming units; rejects; reusable cycles | Supplier specification verified by sample weighing and stock reconciliation | kg and count | Packaging batch and production lot | Representative production year and all formats | All packaging issue, application, and reject points in scope | Component mass = verified unit mass times net consumed count; allocate reusable packaging by documented cycles | Supplier specification, scale calibration, bill of materials, and stock reconciliation |
| `cp_product_release` | `packaging_storage_and_release` | reference product, net/drained mass, release state, and final rejects | release, label, check-weigher, storage, and disposition record | product id; species; route; lot; net mass; drained mass; glaze mass; container count; release state; storage temperature; release/reject quantity; shelf-life | Calibrated weighing, label verification, quality release, and warehouse record | kg, count, degC, day | Every released lot | Full reporting period | All factory-gate release and finished-product reject points in scope | Sum only conforming released product on the declared reference-mass basis | Calibration, release authorization, label approval, code traceability, and storage log |
| `cp_cleaning_and_wastewater` | `cleaning_and_wastewater_management` | cleaning water, chemicals, wastewater, and pollutant load | CIP/manual sanitation record, water meter, chemical issue, effluent flow and analysis | water intake; recycled water; chemical product and active concentration; cleaned area/equipment; wastewater flow; COD; solids; nutrients; salt; oil/grease; treatment route | Metering and laboratory analysis under site monitoring plan | m3, kg, mg/L | Each cleaning cycle for inputs; effluent sampling at permit or study frequency | Representative production year including high-load campaigns | All cleaning systems and wastewater discharge or treatment points serving in-scope production | Aggregate flow-weighted pollutant loads and allocate shared cleaning by causal driver | Meter and dosing calibration, laboratory method and QA/QC, chain of custody, and permit report |
| `cp_waste_and_coproducts` | all processes | residues, co-products, rejects, and treatment destinations | scale ticket, transfer note, inventory, and disposal or sales record | material type; legal status; wet/dry state; mass; destination; treatment; revenue when economic sensitivity is used; internal rework | Weighing or verified container count conversion plus destination documentation | kg and currency when needed | Every transfer or batch | Same period as production data | All in-scope processes and residue, co-product, reject, and waste transfer points | Sum by material, status, and destination; keep internal rework separate | Scale calibration, transfer documentation, purchaser or treatment receipt, and reconciliation to mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output` | Saleable reference product | Reference output = conforming released net mass excluding packaging; use drained edible-solid mass for a solid in non-decisive liquid medium; use total net mass when the liquid or sauce is integral; exclude glaze. | net mass; drained mass; packing-medium mass; glaze mass; release quantity | kg reference product | `eu-1169-2011-food-information` |
| `calc_accepted_material` | Reception | Accepted raw material = received net mass - reception rejects - documented holding loss. | received, rejected, and holding-loss masses | kg accepted raw material |  |
| `calc_preparation_yield` | Preparation | Preparation yield = prepared edible material / accepted aquatic raw material on aligned wet-mass and shell-state bases. | accepted input and prepared edible output | kg/kg |  |
| `calc_water_intensity` | Preparation and cleaning | Water intensity = net external water withdrawal / applicable received raw material or reference-product mass; report freshwater and seawater separately. | water intake, returned or recycled water, raw material, reference output | m3/t or m3/kg | `eu-jrc-fdm-bref-2019` |
| `calc_energy_intensity` | Preservation and storage | Energy intensity by carrier = net metered carrier input / conforming process output. Keep electricity, steam, fuel, and recovered heat separate; 1 kWh = 3.6 MJ only when a common energy display is needed. | energy meters, fuel issues, recovered/exported energy, process output | kWh/kg, MJ/kg, or carrier unit/kg | `eu-jrc-fdm-bref-2019` |
| `calc_wastewater_load` | Wastewater | Pollutant load = flow-weighted concentration times wastewater flow, converted to kg; internally recycled water is not counted as discharge. | flow, concentration, sample period, recycling | m3 and kg pollutant per reference product | `eu-jrc-fdm-bref-2019` |
| `calc_mass_balance` | Each process and total foreground | Mass-balance difference = inputs + opening inventory - outputs - closing inventory. Investigate sign, state-basis, moisture, evaporation, wastewater solids, rework, and measurement uncertainty before accepting a residual. | all measured mass transfers and inventory change | kg and percent of input | `iso-14044-2006-lca` |
| `calc_allocation` | Shared processes and co-products | Allocated burden = shared burden times documented allocation factor; all factors for a shared process must sum to 1.0. | shared burden, causal driver, allocation factors | allocated inventory by product | `iso-14044-2006-lca` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity` | Product and raw material | Preserve species or species mix, incoming state, formulation, qualifying route, final state, and lot linkage. | Supplier records, product specification, route record, and release record. |
| `dqr_measurement` | Mass, water, energy, and packaging | Use calibrated instruments or reconcile utility and stock records; retain raw readings, units, conversion factors, and allocation drivers. | Calibration certificates, meter logs, invoices, stock reconciliation, and calculation worksheet. |
| `dqr_temporal` | Foreground representation | Use one representative production year where available and cover seasonal species supply, shutdowns, cleaning campaigns, route mix, and storage duration. Disclose any shorter period and its representativeness. | Production calendar, lot register, meter period, and representativeness assessment. |
| `dqr_completeness` | Inventory | Reconcile material mass and disclose every excluded material, utility, emission, residue, and process. Do not treat a source proxy as a substitute for missing foreground data. | Mass balance, exclusion register, and source-to-field binding. |
| `dqr_preservation_control` | Canned, retorted, pasteurized, smoked, cooked, or other controlled product | Link each released lot to the applicable validated process and deviation disposition. A generic PCR temperature-time value is not acceptable. | Validated process schedule, continuous record, calibration, deviation review, and release authorization. |
| `dqr_water_proxy` | Water-use review | JRC reports about 1 m3/t raw fish for thawing, 5-11 m3/t for filleting, 15 m3/t for canning, and 23-32 m3/t for shrimp processing. Use these only as sector-proxy QA context; explain route/species differences and replace with site data. | `eu-jrc-fdm-bref-2019` plus foreground meters. |
| `dqr_energy_proxy` | Energy-use review | JRC reports 150-190 kWh/t raw fish for canning. Treat it as a fish-sector screening benchmark for combined process-energy review, not as a mollusc-specific default or a substitute for carrier-level meters. | `eu-jrc-fdm-bref-2019` plus foreground energy records. |
| `dqr_source_age` | External evidence | Recheck official regulations, standards, PCR validity, and technical guidance at each methodology review; record the applicable edition. | Source register and review date. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Reference identity | The reference flow UUID must be `5102ffa5-d24d-4e8c-b18d-d22f74677182`, its flow property must be Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, its unit group must be Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference unit must be kg. |  |
| `validation_rule_2` | Category eligibility | Reject a package that represents crustaceans, a complete meal, an extract or juice, raw/live/fresh/chilled-only product, or product preserved only by freezing, drying, salting, or brining. | `codex-cxc-52-2003-fish-fishery-products` |
| `validation_rule_3` | Required qualifiers | Reject an incomplete package when species, qualifying preservation route, formulation and packing medium, product form, ready-to-eat status, reference-mass basis, packaging, release state, geography, reference period, or included conditional operations are missing. | `codex-cxc-52-2003-fish-fishery-products`; `eu-1169-2011-food-information` |
| `validation_rule_4` | Reference mass | Confirm that packaging is excluded, glaze is excluded, and drained mass is used for a solid in a non-decisive liquid medium; otherwise require an integral-product declaration and composition. | `eu-1169-2011-food-information` |
| `validation_rule_5` | Process coverage | Confirm all six required process-map entries are represented. Operations not performed may have zero flow only when the actual route and meter boundary make that explicit; at least one qualifying preservation operation is mandatory. | `codex-cxc-52-2003-fish-fishery-products` |
| `validation_rule_6` | Thermal-process integrity | For canned, retorted, or other heat-controlled product, require a product-container-specific validated process schedule and complete time, temperature, pressure where relevant, monitoring, calibration, deviation, cooling, and release records. | `codex-cxc-52-2003-fish-fishery-products` |
| `validation_rule_7` | Mass balance | Confirm process and foreground mass balances use aligned wet/dry, shell, drained, and moisture states. Investigate unexplained residuals rather than assigning them silently to waste or evaporation. | `iso-14044-2006-lca` |
| `validation_rule_8` | Utilities and wastewater | Confirm electricity, thermal carriers, water sources, cleaning inputs, wastewater flow and relevant pollutant loads are collected without meter overlap. Flag JRC proxy figures used as dataset values instead of QA context. | `eu-jrc-fdm-bref-2019` |
| `validation_rule_9` | Allocation | Confirm subdivision was considered, the selected causal driver is documented, factors sum to 1.0, internal rework is not a co-product, and waste status matches actual destination. | `iso-14044-2006-lca` |
| `validation_rule_10` | Evidence and provisional estimates | Each external-source constraint must cite a listed source. Every `reasoned_estimate` is a temporary screening range and must not override foreground records or be presented as a publication-critical allowed range without explicit review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for otherwise prepared or preserved molluscs and other non-crustacean aquatic invertebrates. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Route-, species-, formulation-, geography-, technology-, packaging-, and storage-matched LCA process or lifecyclemodel construction after upstream raw-material and purchased-input datasets are linked. |
| excluded_use | Representation of capture or aquaculture; crustaceans; raw or simply frozen/dried/salted/brined products; complete meals; retail or consumer stages; safety certification; comparative claims across unmatched reference-mass bases or preservation routes. |
| required_metadata | PCR id and version; reference-flow UUID and mass basis; species and origin; incoming state; preparation and preservation route; product form and formulation; net/drained/glaze treatment; ready-to-eat status; packaging bill of materials; storage state and duration; facility geography; reference year; technology; supplier and route mix; process coverage; allocation method; upstream dataset links. |
| required_quality_disclosure | Foreground coverage; instrument and meter quality; temporal and seasonal representativeness; mass-balance residuals; missing UUIDs; exclusions; proxy benchmarks; all provisional `reasoned_estimate` ranges; allocation sensitivity; wastewater monitoring coverage; heat-process validation evidence; source editions and retrieval dates. |
| update_trigger | New representative year; material change in species or supplier mix, raw-material state, formulation, qualifying preservation technology, container or packaging format, storage regime, energy or water system, wastewater treatment, co-product destination, regulation, PCR requirement, or external evidence that changes a rule or screening benchmark. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003-fish-fishery-products` | standard | FAO and WHO. 2020. *Code of Practice for Fish and Fishery Products*, CXC 52-2003. DOI: https://doi.org/10.4060/cb0658en (retrieved 2026-08-11). | Mollusc and canned-product process decomposition; receipt, preparation, filling, closure, thermal processing, cooling, storage, traceability, monitoring, and validation rules. |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre. 2019. *Best Available Techniques Reference Document for the Food, Drink and Milk Industries*, Chapter 7, Fish and Shellfish Processing. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries (retrieved 2026-08-11). | Environmental process boundary; energy, water, wastewater, cleaning, and sector-proxy QA figures. |
| `eu-1169-2011-food-information` | standard | Regulation (EU) No 1169/2011, Article 23 and Annex IX, point 5. https://eur-lex.europa.eu/eli/reg/2011/1169/oj/eng (retrieved 2026-08-11). | Net quantity, drained net weight for solid food in liquid medium, and exclusion of glaze from declared net weight. |
| `iso-14044-2006-lca` | standard | ISO 14044:2006, *Environmental management - Life cycle assessment - Requirements and guidelines*, including applicable amendments. https://www.iso.org/standard/38498.html (retrieved 2026-08-11). | System-boundary completeness, allocation hierarchy, inventory consistency, and mass-balance review. |
| `epd-international-pcr-2025-03` | official_guidance | EPD International. PCR 2025:03, *Food and beverage products (main PCR)*, version 1.0.1, valid to 2030-07-14. https://www.environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5 (retrieved 2026-08-11). | Sector-level declared-unit context, factory-gate dataset profile, packaging and upstream/downstream linkage context. |
