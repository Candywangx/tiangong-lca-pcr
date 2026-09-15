---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-meat-offal-salted-in-brine-dried-or-smoked-edible-flours-and-meal-032a0c3c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal

## 1. Scope and Applicability

This PCR applies only to a finished food product classified in CPC 21183. Because the category is broad, every foreground data package locks one exact animal species, one exact skeletal-meat identity or one exact edible organ, one documented ordered preservation or edible-powder route, and one finished physical and storage state. A generic “other meat”, “other offal”, “route-specific ingredient”, or mixed-state exchange cannot represent the declared product.

Covered routes may comprise one documented sequence of dry salting, immersion brining, brine injection, controlled drying, natural-wood smoking, purified smoke-condensate application, or enterprise-specific edible flour or meal production. Operations are activated only when they occur. Regulatory permissions and technical examples identify possible process distinctions but do not establish an actual formulation, input, factor, amount, or range.

The foreground boundary begins with accepted meat or edible offal at the preservation facility and ends with 1 kg net qualified CPC 21183 product released at the facility gate after every declared route step, packaging, sanitation, and applicable on-site wastewater treatment. Animal husbandry, slaughter or raw-material production, and inbound transport are upstream. Distribution, retail, preparation, consumption, and end-of-life are downstream. Products outside CPC 21183, inedible tissue meals, feed meals, mixed-species or mixed-tissue reference lots, and unpreserved raw meat or offal are excluded from the reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-meat-offal-salted-in-brine-dried-or-smoked-edible-flours-and-meal-032a0c3c |
| classification_refs | CPC 3.0: 21183, exact |
| covered_products | One declared exact species and meat or edible organ produced through one declared salted, brined, dried, smoked, edible-flour, or edible-meal route |
| excluded_products | Products outside CPC 21183; inedible tissue meals; feed meals; mixed-species or mixed-tissue reference lots; unpreserved raw meat or offal |
| representative_product | 1 kg net qualified declared product locked to an exact species, exact meat or organ, ordered route, finished form, and storage state |
| production_route | Raw-material receipt and preparation; declared curing, drying, smoke, or powder steps; packaging and release; sanitation; conditional on-site wastewater treatment |
| market_state | One exact salted, brined, dried, smoked, edible-flour, or edible-meal state with ready-to-eat status and ambient, refrigerated, or frozen storage declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one exactly identified CPC 21183 preserved meat, edible offal, or edible flour or meal for human consumption |
| How much | 1 kg net qualified product, excluding packaging mass |
| How well | The product meets its declared food-safety and release specification and retains one exact species, tissue, route sequence, finished form, and storage state |
| How long or cycle | One batch from accepted source material through facility-gate release; duration of every preservation step and storage stage is declared |
| reference_flow_link | 47ac991c-00e2-4c29-8df0-7a7b867c3e97 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net qualified CPC 21183 product, excluding packaging mass |
| Reference product flow | Other meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal `47ac991c-00e2-4c29-8df0-7a7b867c3e97` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact animal species; exact skeletal meat or exact edible organ; food use; ordered route code; every actual curing, drying, smoking, grinding, and sieving step; actual formulation; smoke medium; finished state as salted, brined, dried, smoked, edible flour, or edible meal; ready-to-eat or not-ready-to-eat; ambient, refrigerated, or frozen storage; time, temperature, humidity, pressure, and airflow where applicable; package or bulk configuration; net product mass; facility; batch; reporting period; evidence excluding inedible tissue and feed use |

Every qualifier listed above must appear in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. A data package missing exact species, tissue, route sequence, or finished state is not conformant.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Set the sole reference output to exactly 1 kg net qualified CPC 21183 product and exclude packaging mass. |
| `product_identity_mass` | Every source, intermediate, reject, and finished product | Mass | kg | Keep one exact species and either skeletal meat or one exact edible organ on each row through every applicable process. |
| `route_state_identity` | Cure, drying, smoke, flour, and meal states | Mass | kg | Preserve the ordered route code and one finished physical and storage state; never aggregate routes or states in one amount. |
| `ingredient_mass` | Each salt, brine ingredient, spice, additive, starter, and smoke medium | Mass | kg | Record each exact formulation substance separately from batch issue and return records; permitted substances are not assumed to be used. |
| `water_volume` | Each process-water or wastewater stream | Volume | m3 | Measure each named stream separately before mixing where feasible and reconcile intake, transfer, treatment, and discharge. |
| `electricity_energy` | Each process-specific electricity input | Energy | kWh | Record receipt, curing, drying, smoking, milling, packaging, sanitation, and wastewater-treatment electricity independently. |
| `thermal_energy` | Purchased steam and purchased hot water | Energy | MJ | Meter each purchased thermal carrier separately and prevent double counting with fuel used for on-site heat generation. |
| `fuel_quantity` | Natural gas, diesel, and liquefied petroleum gas | Volume or Mass | m3 or kg | Record each fuel separately and document density, energy, and allocation conversions. |
| `refrigerant_mass` | R-717, R-134a, and R-744 | Mass | kg | Maintain a substance-specific balance and keep make-up separate from release; retain fossil or biogenic origin for R-744. |
| `packaging_mass` | Each packaging component and its scrap | Mass | kg | Measure each bill-of-materials component separately and exclude all packaging mass from the 1 kg reference amount. |
| `pollutant_mass` | Each direct air or water release | Mass | kg | Report one named substance or monitored parameter and one environmental compartment per row from matched foreground evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One exact species and exact meat or edible organ accepted at the preservation facility with batch identity, source state, and net mass recorded |
| starting_condition_role | Foreground entry condition; husbandry, slaughter or source-material production, and inbound transport remain upstream datasets |
| product_classification_scope | CPC 21183 food locked to exact species, tissue, ordered preservation or powder route, and finished state; inedible and feed uses are excluded |
| recursive_input_rule | If a CPC 21183 product re-enters a foreground operation, record it once with exact species, tissue, and state and link its upstream dataset without duplicating prior production |
| upstream_dataset_requirement | Use transparent upstream datasets for source-material production, inbound transport, purchased utilities, ingredients, chemicals, packaging, refrigerants, and off-site treatment when included in study scope |
| disclosure | Declare species, tissue, food use, ordered route, actual formulation, smoke medium, equipment, process conditions, finished and storage state, packaging, facility, period, allocation, residue destinations, refrigerants, wastewater route, and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_classification` | Reference product | Limit the reference product to CPC 21183 and preserve one exact species, one exact meat or edible-organ identity, one ordered preservation or powder route, and one finished state. | `unsd-cpc-3-21183` |
| `boundary_exact_source` | Source material | Use an exact species-and-tissue row; an unlisted species or organ requires a new atomic row before dataset production and must not use a generic other-meat or other-offal exchange. | `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `boundary_route_sequence` | Preservation and powder routes | Declare the actual ordered sequence and include only the applicable dry-cure, immersion-brine, injection-cure, controlled-drying, natural-smoke, smoke-condensate, milling, or sieving operations. | `codex-cxs-192-1995`; `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `boundary_foreground_stages` | Foreground system | Include raw-material receipt and preparation, every declared preservation or powder step, packaging and release, sanitation, and applicable on-site wastewater treatment. | `ec-jrc-sa-bref-jrc135916`; `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `boundary_upstream_downstream` | Study boundary | Treat animal husbandry, slaughter or raw-material production, and inbound transport as upstream; treat distribution, retail, preparation, consumption, and end-of-life as downstream unless explicitly extended. | `eu-pef-2021-2279` |
| `boundary_actual_formulation` | Ingredients and additives | Include only substances present in the approved product-specific formulation; legal permission or a technical example does not establish actual use or amount. | `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `boundary_wastewater` | On-site wastewater treatment | Include on-site treatment only for individually named foreground streams actually treated on site; otherwise retain each specific off-site wastewater transfer. | `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `boundary_uuid_completeness` | Inventory completeness | Retain each physically or chemically specific material, utility, refrigerant, waste, wastewater, or emission row even when its non-reference Tiangong UUID remains unresolved. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_and_preparation` | Raw-material receipt and preparation | required | Include for every dataset beginning with received meat or edible offal. | Accepts one exact species and tissue, preserves identity, trims, washes, and prepares the raw material. | Mass of accepted exact source material associated with the declared 1 kg reference output. |
| `cure_formulation_and_application` | Cure formulation and application | conditional | Include when the declared route uses dry salting, immersion brining, brine injection, or a documented combination; declare exactly one cure method for each lot. | Applies the actual atomic formulation and preserves the selected cure-method identity. | Mass of cured exact source material leaving the declared cure method. |
| `controlled_drying` | Controlled drying | conditional | Include when drying is part of the declared route; declare natural-air, hot-air, vacuum, freeze-drying, or another exactly documented technology. | Removes moisture using the one declared drying technology while preserving species and tissue identity. | Mass of dried exact source material and measured moisture loss. |
| `smoke_treatment` | Smoke treatment | conditional | Include when natural wood smoke or purified food-grade smoke condensate is applied; declare one smoke-generation and application method. | Applies one declared smoke medium and records source-specific residues and emissions. | Mass of smoked exact source material leaving the declared smoke route. |
| `edible_flour_meal_production` | Edible flour or meal production | conditional | Include only when the reference product is an edible flour or meal; the facility flow diagram must declare every conditioning, drying, grinding, sieving, and food-safety step actually used. | Produces one exact powder or meal state from a declared species and tissue without assuming a universal route. | Mass of qualified edible flour or meal and route-specific milling residues. |
| `packaging_and_release` | Packaging and release | required | Include for every bulk or packaged reference lot. | Receives one qualified route-specific product, applies the actual packaging bill of materials, and releases the reference output. | Exactly 1 kg net qualified reference product, excluding packaging mass. |
| `cleaning_and_disinfection` | Cleaning and disinfection | required | Include all sanitation serving the foreground processes; activate only the individual chemicals and utilities actually used. | Records individual sanitation inputs, wastewater streams, residues, and direct utility emissions. | Sanitation activity allocated causally to the declared reference lot. |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include only for named foreground wastewater streams treated on site; otherwise retain each off-site transfer boundary. | Treats individually tracked wastewater streams and reports each residual and release separately. | Matched influent and effluent volumes plus pollutant loads allocated to the reference lot. |

### Process: Raw-material receipt and preparation (`raw_material_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Received Goat skeletal muscle meat (`receipt_raw_goat_meat`)

Goat skeletal muscle meat enters the Raw-material receipt and preparation boundary as the single received goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Received Horse skeletal muscle meat (`receipt_raw_horse_meat`)

Horse skeletal muscle meat enters the Raw-material receipt and preparation boundary as the single received horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Received Turkey skeletal muscle meat (`receipt_raw_turkey_meat`)

Turkey skeletal muscle meat enters the Raw-material receipt and preparation boundary as the single received turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Received Goat liver (`receipt_raw_goat_liver`)

Goat liver enters the Raw-material receipt and preparation boundary as the single received goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_materials`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Preparation water (`receipt_process_water`)

Potable water enters the Raw-material receipt and preparation boundary as the single preparation water. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Receipt electricity (`receipt_electricity`)

Electricity, medium voltage enters the Raw-material receipt and preparation boundary as the single receipt electricity. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-717 refrigerant make-up (`receipt_r717_makeup`)

Ammonia, anhydrous enters the Raw-material receipt and preparation boundary as the single r-717 refrigerant make-up. Activate only when this exact refrigerant is present in receipt or raw-material cold holding. Its quantity is kept separate from every other exchange.

- Selected flow: Ammonia, anhydrous
- Flow property / unit: Mass / kg
- Amount rule: Determine substance-specific make-up from cylinder weights, purchases, recoveries, and service logs for the matched reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a refrigerant make-up (`receipt_r134a_makeup`)

1,1,1,2-Tetrafluoroethane enters the Raw-material receipt and preparation boundary as the single r-134a refrigerant make-up. Activate only when this exact refrigerant is present in receipt or raw-material cold holding. Its quantity is kept separate from every other exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: Determine substance-specific make-up from cylinder weights, purchases, recoveries, and service logs for the matched reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-744 refrigerant make-up (`receipt_r744_makeup`)

Carbon dioxide, liquid enters the Raw-material receipt and preparation boundary as the single r-744 refrigerant make-up. Activate only when this exact refrigerant is present in receipt or raw-material cold holding. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, liquid
- Flow property / unit: Mass / kg
- Amount rule: Determine substance-specific make-up from cylinder weights, purchases, recoveries, and service logs for the matched reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

No exchange of this direction and type is defined for this process.

##### Elementary flows

No exchange of this direction and type is defined for this process.

#### Outputs

##### Product flows

###### Prepared Goat skeletal muscle meat (`receipt_prepared_goat_meat`)

Prepared Goat skeletal muscle meat leaves the Raw-material receipt and preparation boundary as the single prepared goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_outputs`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Prepared Horse skeletal muscle meat (`receipt_prepared_horse_meat`)

Prepared Horse skeletal muscle meat leaves the Raw-material receipt and preparation boundary as the single prepared horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_outputs`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Prepared Turkey skeletal muscle meat (`receipt_prepared_turkey_meat`)

Prepared Turkey skeletal muscle meat leaves the Raw-material receipt and preparation boundary as the single prepared turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_outputs`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Prepared Goat liver (`receipt_prepared_goat_liver`)

Prepared Goat liver leaves the Raw-material receipt and preparation boundary as the single prepared goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_outputs`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected Goat skeletal muscle meat (`receipt_rejected_goat_meat`)

Rejected Goat skeletal muscle meat leaves the Raw-material receipt and preparation boundary as the single rejected goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected Horse skeletal muscle meat (`receipt_rejected_horse_meat`)

Rejected Horse skeletal muscle meat leaves the Raw-material receipt and preparation boundary as the single rejected horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected Turkey skeletal muscle meat (`receipt_rejected_turkey_meat`)

Rejected Turkey skeletal muscle meat leaves the Raw-material receipt and preparation boundary as the single rejected turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected Goat liver (`receipt_rejected_goat_liver`)

Rejected Goat liver leaves the Raw-material receipt and preparation boundary as the single rejected goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Removed adipose tissue (`receipt_adipose_tissue`)

Removed adipose tissue leaves the Raw-material receipt and preparation boundary as the single removed adipose tissue. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Removed adipose tissue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Removed connective tissue (`receipt_connective_tissue`)

Removed connective tissue leaves the Raw-material receipt and preparation boundary as the single removed connective tissue. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Removed connective tissue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Removed bone fragments (`receipt_bone_fragments`)

Removed bone fragments leaves the Raw-material receipt and preparation boundary as the single removed bone fragments. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Removed bone fragments
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw-material preparation washwater (`receipt_preparation_washwater`)

Raw-material preparation washwater leaves the Raw-material receipt and preparation boundary as the single raw-material preparation washwater. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Raw-material preparation washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### R-717 ammonia release (`receipt_ammonia_air`)

Ammonia, to air leaves the Raw-material receipt and preparation boundary as the single r-717 ammonia release. Activate when an R-717 balance identifies a release. Its quantity is kept separate from every other exchange.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a release (`receipt_r134a_air`)

1,1,1,2-Tetrafluoroethane, to air leaves the Raw-material receipt and preparation boundary as the single r-134a release. Activate when an R-134a balance identifies a release. Its quantity is kept separate from every other exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Fossil-origin R-744 release (`receipt_r744_fossil_air`)

Carbon dioxide, fossil, to air leaves the Raw-material receipt and preparation boundary as the single fossil-origin r-744 release. Activate only for fossil-origin R-744 release. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Biogenic-origin R-744 release (`receipt_r744_biogenic_air`)

Carbon dioxide, biogenic, to air leaves the Raw-material receipt and preparation boundary as the single biogenic-origin r-744 release. Activate only for biogenic-origin R-744 release. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Cure formulation and application (`cure_formulation_and_application`)

#### Inputs

##### Product flows

###### Prepared input Goat skeletal muscle meat (`cure_prepared_goat_meat`)

Prepared Goat skeletal muscle meat enters the Cure formulation and application boundary as the single prepared input goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_materials`
- Sources: `codex-cxs-192-1995`; `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Prepared input Horse skeletal muscle meat (`cure_prepared_horse_meat`)

Prepared Horse skeletal muscle meat enters the Cure formulation and application boundary as the single prepared input horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_materials`
- Sources: `codex-cxs-192-1995`; `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Prepared input Turkey skeletal muscle meat (`cure_prepared_turkey_meat`)

Prepared Turkey skeletal muscle meat enters the Cure formulation and application boundary as the single prepared input turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_materials`
- Sources: `codex-cxs-192-1995`; `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Prepared input Goat liver (`cure_prepared_goat_liver`)

Prepared Goat liver enters the Cure formulation and application boundary as the single prepared input goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_materials`
- Sources: `codex-cxs-192-1995`; `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Brine or cure water (`cure_water`)

Potable water enters the Cure formulation and application boundary as the single brine or cure water. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Sodium chloride (`cure_sodium_chloride`)

Sodium chloride enters the Cure formulation and application boundary as the single sodium chloride. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Sucrose (`cure_sucrose`)

Sucrose enters the Cure formulation and application boundary as the single sucrose. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Dextrose (`cure_dextrose`)

Dextrose enters the Cure formulation and application boundary as the single dextrose. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Dextrose
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Sodium nitrite (`cure_sodium_nitrite`)

Sodium nitrite enters the Cure formulation and application boundary as the single sodium nitrite. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium nitrite
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Potassium nitrite (`cure_potassium_nitrite`)

Potassium nitrite enters the Cure formulation and application boundary as the single potassium nitrite. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Potassium nitrite
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Sodium nitrate (`cure_sodium_nitrate`)

Sodium nitrate enters the Cure formulation and application boundary as the single sodium nitrate. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium nitrate
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Potassium nitrate (`cure_potassium_nitrate`)

Potassium nitrate enters the Cure formulation and application boundary as the single potassium nitrate. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Potassium nitrate
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Sodium ascorbate (`cure_sodium_ascorbate`)

Sodium ascorbate enters the Cure formulation and application boundary as the single sodium ascorbate. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium ascorbate
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Sodium erythorbate (`cure_sodium_erythorbate`)

Sodium erythorbate enters the Cure formulation and application boundary as the single sodium erythorbate. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium erythorbate
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Sodium tripolyphosphate (`cure_sodium_tripolyphosphate`)

Sodium tripolyphosphate enters the Cure formulation and application boundary as the single sodium tripolyphosphate. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium tripolyphosphate
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Acetic acid (`cure_acetic_acid`)

Acetic acid enters the Cure formulation and application boundary as the single acetic acid. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Lactic acid (`cure_lactic_acid`)

Lactic acid enters the Cure formulation and application boundary as the single lactic acid. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Lactic acid
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Ground black pepper (`cure_black_pepper`)

Ground black pepper enters the Cure formulation and application boundary as the single ground black pepper. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Ground black pepper
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Garlic powder (`cure_garlic_powder`)

Garlic powder enters the Cure formulation and application boundary as the single garlic powder. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Garlic powder
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Ground coriander seed (`cure_coriander_seed`)

Ground coriander seed enters the Cure formulation and application boundary as the single ground coriander seed. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Ground coriander seed
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Lactobacillus sakei starter (`cure_lactobacillus_sakei`)

Lactobacillus sakei starter culture enters the Cure formulation and application boundary as the single lactobacillus sakei starter. Activate only when this exact substance appears in the approved formulation for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Lactobacillus sakei starter culture
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_formulation`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Stage electricity (`cure_electricity`)

Electricity, medium voltage enters the Cure formulation and application boundary as the single stage electricity. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_utilities`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased steam (`cure_purchased_steam`)

Steam, purchased enters the Cure formulation and application boundary as the single purchased steam. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_utilities`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased hot water (`cure_purchased_hot_water`)

Hot water, purchased enters the Cure formulation and application boundary as the single purchased hot water. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_utilities`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Natural gas (`cure_natural_gas`)

Natural gas enters the Cure formulation and application boundary as the single natural gas. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_utilities`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel (`cure_diesel`)

Diesel enters the Cure formulation and application boundary as the single diesel fuel. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Diesel
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_utilities`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas (`cure_lpg`)

Liquefied petroleum gas enters the Cure formulation and application boundary as the single liquefied petroleum gas. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_utilities`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

No exchange of this direction and type is defined for this process.

##### Elementary flows

No exchange of this direction and type is defined for this process.

#### Outputs

##### Product flows

###### Cured Goat skeletal muscle meat (`cure_cured_goat_meat`)

Cured Goat skeletal muscle meat leaves the Cure formulation and application boundary as the single cured goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_outputs`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Cured Horse skeletal muscle meat (`cure_cured_horse_meat`)

Cured Horse skeletal muscle meat leaves the Cure formulation and application boundary as the single cured horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_outputs`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Cured Turkey skeletal muscle meat (`cure_cured_turkey_meat`)

Cured Turkey skeletal muscle meat leaves the Cure formulation and application boundary as the single cured turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_outputs`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Cured Goat liver (`cure_cured_goat_liver`)

Cured Goat liver leaves the Cure formulation and application boundary as the single cured goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_outputs`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected cured Goat skeletal muscle meat (`cure_rejected_goat_meat`)

Rejected cured Goat skeletal muscle meat leaves the Cure formulation and application boundary as the single rejected cured goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected cured Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `codex-cxs-192-1995`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Rejected cured Horse skeletal muscle meat (`cure_rejected_horse_meat`)

Rejected cured Horse skeletal muscle meat leaves the Cure formulation and application boundary as the single rejected cured horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected cured Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `codex-cxs-192-1995`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Rejected cured Turkey skeletal muscle meat (`cure_rejected_turkey_meat`)

Rejected cured Turkey skeletal muscle meat leaves the Cure formulation and application boundary as the single rejected cured turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected cured Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `codex-cxs-192-1995`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Rejected cured Goat liver (`cure_rejected_goat_liver`)

Rejected cured Goat liver leaves the Cure formulation and application boundary as the single rejected cured goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected cured Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `codex-cxs-192-1995`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Spent sodium chloride (`cure_spent_dry_salt`)

Spent sodium chloride from dry curing leaves the Cure formulation and application boundary as the single spent sodium chloride. Activate only for the declared cure method that physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Spent sodium chloride from dry curing
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Spent curing brine (`cure_spent_brine`)

Spent curing brine leaves the Cure formulation and application boundary as the single spent curing brine. Activate only for the declared cure method that physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Spent curing brine
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Curing-brine filter solids (`cure_brine_filter_solids`)

Curing-brine filter solids leaves the Cure formulation and application boundary as the single curing-brine filter solids. Activate only for the declared cure method that physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Curing-brine filter solids
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Injector purge brine (`cure_injector_purge_brine`)

Injector purge brine leaves the Cure formulation and application boundary as the single injector purge brine. Activate only for the declared cure method that physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Injector purge brine
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Curing-rinse wastewater (`cure_rinse_wastewater`)

Curing-rinse wastewater leaves the Cure formulation and application boundary as the single curing-rinse wastewater. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Curing-rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Curing-equipment washwater (`cure_equipment_washwater`)

Curing-equipment washwater leaves the Cure formulation and application boundary as the single curing-equipment washwater. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Curing-equipment washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cure_residues`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon-dioxide release (`cure_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Cure formulation and application boundary as the single fossil carbon-dioxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cure_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitrogen-oxide release (`cure_nox_air`)

Nitrogen oxides, to air leaves the Cure formulation and application boundary as the single nitrogen-oxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cure_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sulfur-oxide release (`cure_sox_air`)

Sulfur oxides, to air leaves the Cure formulation and application boundary as the single sulfur-oxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cure_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Fine particulate release (`cure_pm25_air`)

Particulate matter, <=2.5 um, to air leaves the Cure formulation and application boundary as the single fine particulate release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, <=2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cure_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Coarse particulate release (`cure_pm_coarse_air`)

Particulate matter, 2.5-10 um, to air leaves the Cure formulation and application boundary as the single coarse particulate release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, 2.5-10 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cure_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Controlled drying (`controlled_drying`)

#### Inputs

##### Product flows

###### Drying input Goat skeletal muscle meat (`dry_prepared_goat_meat`)

Prepared Goat skeletal muscle meat enters the Controlled drying boundary as the single drying input goat skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared drying technology. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_materials`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Drying input Horse skeletal muscle meat (`dry_prepared_horse_meat`)

Prepared Horse skeletal muscle meat enters the Controlled drying boundary as the single drying input horse skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared drying technology. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_materials`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Drying input Turkey skeletal muscle meat (`dry_prepared_turkey_meat`)

Prepared Turkey skeletal muscle meat enters the Controlled drying boundary as the single drying input turkey skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared drying technology. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_materials`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Drying input Goat liver (`dry_prepared_goat_liver`)

Prepared Goat liver enters the Controlled drying boundary as the single drying input goat liver. Activate only when this exact intermediate is the recorded feed to the declared drying technology. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_materials`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Drying input Goat skeletal muscle meat (`dry_cured_goat_meat`)

Cured Goat skeletal muscle meat enters the Controlled drying boundary as the single drying input goat skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared drying technology. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_materials`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Drying input Horse skeletal muscle meat (`dry_cured_horse_meat`)

Cured Horse skeletal muscle meat enters the Controlled drying boundary as the single drying input horse skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared drying technology. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_materials`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Drying input Turkey skeletal muscle meat (`dry_cured_turkey_meat`)

Cured Turkey skeletal muscle meat enters the Controlled drying boundary as the single drying input turkey skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared drying technology. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_materials`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Drying input Goat liver (`dry_cured_goat_liver`)

Cured Goat liver enters the Controlled drying boundary as the single drying input goat liver. Activate only when this exact intermediate is the recorded feed to the declared drying technology. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_materials`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Stage electricity (`dry_electricity`)

Electricity, medium voltage enters the Controlled drying boundary as the single stage electricity. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utilities`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased steam (`dry_purchased_steam`)

Steam, purchased enters the Controlled drying boundary as the single purchased steam. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utilities`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased hot water (`dry_purchased_hot_water`)

Hot water, purchased enters the Controlled drying boundary as the single purchased hot water. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utilities`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Natural gas (`dry_natural_gas`)

Natural gas enters the Controlled drying boundary as the single natural gas. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utilities`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel (`dry_diesel`)

Diesel enters the Controlled drying boundary as the single diesel fuel. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Diesel
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utilities`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas (`dry_lpg`)

Liquefied petroleum gas enters the Controlled drying boundary as the single liquefied petroleum gas. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utilities`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

No exchange of this direction and type is defined for this process.

##### Elementary flows

No exchange of this direction and type is defined for this process.

#### Outputs

##### Product flows

###### Dried Goat skeletal muscle meat (`dry_dried_goat_meat`)

Dried Goat skeletal muscle meat leaves the Controlled drying boundary as the single dried goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_outputs`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Dried Horse skeletal muscle meat (`dry_dried_horse_meat`)

Dried Horse skeletal muscle meat leaves the Controlled drying boundary as the single dried horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_outputs`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Dried Turkey skeletal muscle meat (`dry_dried_turkey_meat`)

Dried Turkey skeletal muscle meat leaves the Controlled drying boundary as the single dried turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_outputs`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Dried Goat liver (`dry_dried_goat_liver`)

Dried Goat liver leaves the Controlled drying boundary as the single dried goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_outputs`
- Sources: `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected dried Goat skeletal muscle meat (`dry_rejected_goat_meat`)

Rejected dried Goat skeletal muscle meat leaves the Controlled drying boundary as the single rejected dried goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected dried Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_residues`
- Sources: `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Rejected dried Horse skeletal muscle meat (`dry_rejected_horse_meat`)

Rejected dried Horse skeletal muscle meat leaves the Controlled drying boundary as the single rejected dried horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected dried Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_residues`
- Sources: `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Rejected dried Turkey skeletal muscle meat (`dry_rejected_turkey_meat`)

Rejected dried Turkey skeletal muscle meat leaves the Controlled drying boundary as the single rejected dried turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected dried Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_residues`
- Sources: `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Rejected dried Goat liver (`dry_rejected_goat_liver`)

Rejected dried Goat liver leaves the Controlled drying boundary as the single rejected dried goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected dried Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_residues`
- Sources: `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Dryer cleaning wastewater (`dry_cleaning_wastewater`)

Dryer cleaning wastewater leaves the Controlled drying boundary as the single dryer cleaning wastewater. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Dryer cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_residues`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### Evaporated product water (`dry_water_air`)

Water, to air leaves the Controlled drying boundary as the single evaporated product water. Calculate from the matched species-and-tissue mass and moisture balance for the declared drying step. Its quantity is kept separate from every other exchange.

- Selected flow: Water, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_emissions`
- Sources: `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Fossil carbon-dioxide release (`dry_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Controlled drying boundary as the single fossil carbon-dioxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitrogen-oxide release (`dry_nox_air`)

Nitrogen oxides, to air leaves the Controlled drying boundary as the single nitrogen-oxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sulfur-oxide release (`dry_sox_air`)

Sulfur oxides, to air leaves the Controlled drying boundary as the single sulfur-oxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Fine particulate release (`dry_pm25_air`)

Particulate matter, <=2.5 um, to air leaves the Controlled drying boundary as the single fine particulate release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, <=2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Coarse particulate release (`dry_pm_coarse_air`)

Particulate matter, 2.5-10 um, to air leaves the Controlled drying boundary as the single coarse particulate release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, 2.5-10 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Smoke treatment (`smoke_treatment`)

#### Inputs

##### Product flows

###### Smoke-treatment input Goat skeletal muscle meat (`smoke_prepared_goat_meat`)

Prepared Goat skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input goat skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Horse skeletal muscle meat (`smoke_prepared_horse_meat`)

Prepared Horse skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input horse skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Turkey skeletal muscle meat (`smoke_prepared_turkey_meat`)

Prepared Turkey skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input turkey skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Goat liver (`smoke_prepared_goat_liver`)

Prepared Goat liver enters the Smoke treatment boundary as the single smoke-treatment input goat liver. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Goat skeletal muscle meat (`smoke_cured_goat_meat`)

Cured Goat skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input goat skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Horse skeletal muscle meat (`smoke_cured_horse_meat`)

Cured Horse skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input horse skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Turkey skeletal muscle meat (`smoke_cured_turkey_meat`)

Cured Turkey skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input turkey skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Goat liver (`smoke_cured_goat_liver`)

Cured Goat liver enters the Smoke treatment boundary as the single smoke-treatment input goat liver. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Goat skeletal muscle meat (`smoke_dried_goat_meat`)

Dried Goat skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input goat skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Horse skeletal muscle meat (`smoke_dried_horse_meat`)

Dried Horse skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input horse skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Turkey skeletal muscle meat (`smoke_dried_turkey_meat`)

Dried Turkey skeletal muscle meat enters the Smoke treatment boundary as the single smoke-treatment input turkey skeletal muscle meat. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoke-treatment input Goat liver (`smoke_dried_goat_liver`)

Dried Goat liver enters the Smoke treatment boundary as the single smoke-treatment input goat liver. Activate only when this exact intermediate is the recorded feed to the declared smoke treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_materials`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Food-grade hardwood chips (`smoke_hardwood_chips`)

Food-grade hardwood chips enters the Smoke treatment boundary as the single food-grade hardwood chips. Activate exactly one actual smoke-medium row for the declared application method; do not treat prohibited fuel or waste as smoke medium. Its quantity is kept separate from every other exchange.

- Selected flow: Food-grade hardwood chips
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_inputs`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Food-grade hardwood sawdust (`smoke_hardwood_sawdust`)

Food-grade hardwood sawdust enters the Smoke treatment boundary as the single food-grade hardwood sawdust. Activate exactly one actual smoke-medium row for the declared application method; do not treat prohibited fuel or waste as smoke medium. Its quantity is kept separate from every other exchange.

- Selected flow: Food-grade hardwood sawdust
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_inputs`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Purified smoke condensate (`smoke_smoke_condensate`)

Purified food-grade smoke condensate enters the Smoke treatment boundary as the single purified smoke condensate. Activate exactly one actual smoke-medium row for the declared application method; do not treat prohibited fuel or waste as smoke medium. Its quantity is kept separate from every other exchange.

- Selected flow: Purified food-grade smoke condensate
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_inputs`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Stage electricity (`smoke_electricity`)

Electricity, medium voltage enters the Smoke treatment boundary as the single stage electricity. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_utilities`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased steam (`smoke_purchased_steam`)

Steam, purchased enters the Smoke treatment boundary as the single purchased steam. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_utilities`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased hot water (`smoke_purchased_hot_water`)

Hot water, purchased enters the Smoke treatment boundary as the single purchased hot water. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_utilities`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Natural gas (`smoke_natural_gas`)

Natural gas enters the Smoke treatment boundary as the single natural gas. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_utilities`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel (`smoke_diesel`)

Diesel enters the Smoke treatment boundary as the single diesel fuel. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Diesel
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_utilities`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas (`smoke_lpg`)

Liquefied petroleum gas enters the Smoke treatment boundary as the single liquefied petroleum gas. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_utilities`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Wet-scrubber water (`smoke_scrubber_water`)

Potable water enters the Smoke treatment boundary as the single wet-scrubber water. Activate only when a wet scrubber treats the declared smoke stream. Its quantity is kept separate from every other exchange.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_inputs`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Granular activated carbon (`smoke_activated_carbon`)

Granular activated carbon enters the Smoke treatment boundary as the single granular activated carbon. Activate only when activated-carbon adsorption treats the declared smoke stream. Its quantity is kept separate from every other exchange.

- Selected flow: Granular activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_inputs`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

No exchange of this direction and type is defined for this process.

##### Elementary flows

No exchange of this direction and type is defined for this process.

#### Outputs

##### Product flows

###### Smoked Goat skeletal muscle meat (`smoke_smoked_goat_meat`)

Smoked Goat skeletal muscle meat leaves the Smoke treatment boundary as the single smoked goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_outputs`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoked Horse skeletal muscle meat (`smoke_smoked_horse_meat`)

Smoked Horse skeletal muscle meat leaves the Smoke treatment boundary as the single smoked horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_outputs`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoked Turkey skeletal muscle meat (`smoke_smoked_turkey_meat`)

Smoked Turkey skeletal muscle meat leaves the Smoke treatment boundary as the single smoked turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_outputs`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### Smoked Goat liver (`smoke_smoked_goat_liver`)

Smoked Goat liver leaves the Smoke treatment boundary as the single smoked goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_outputs`
- Sources: `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected smoked Goat skeletal muscle meat (`smoke_rejected_goat_meat`)

Rejected smoked Goat skeletal muscle meat leaves the Smoke treatment boundary as the single rejected smoked goat skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected smoked Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `eu-pef-2021-2279`

###### Rejected smoked Horse skeletal muscle meat (`smoke_rejected_horse_meat`)

Rejected smoked Horse skeletal muscle meat leaves the Smoke treatment boundary as the single rejected smoked horse skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected smoked Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `eu-pef-2021-2279`

###### Rejected smoked Turkey skeletal muscle meat (`smoke_rejected_turkey_meat`)

Rejected smoked Turkey skeletal muscle meat leaves the Smoke treatment boundary as the single rejected smoked turkey skeletal muscle meat. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected smoked Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `eu-pef-2021-2279`

###### Rejected smoked Goat liver (`smoke_rejected_goat_liver`)

Rejected smoked Goat liver leaves the Smoke treatment boundary as the single rejected smoked goat liver. Activate this row only when its exact species and tissue match the declared lot; otherwise add a new atomic row with the exact unlisted identity. Its quantity is kept separate from every other exchange.

- Selected flow: Rejected smoked Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `eu-pef-2021-2279`

###### Hardwood ash (`smoke_hardwood_ash`)

Hardwood ash leaves the Smoke treatment boundary as the single hardwood ash. Activate only when the declared smoke technology physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Hardwood ash
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Smoke-generator char (`smoke_generator_char`)

Smoke-generator char leaves the Smoke treatment boundary as the single smoke-generator char. Activate only when the declared smoke technology physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Smoke-generator char
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Smoke tar condensate (`smoke_tar_condensate`)

Smoke tar condensate leaves the Smoke treatment boundary as the single smoke tar condensate. Activate only when the declared smoke technology physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Smoke tar condensate
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Spent activated carbon (`smoke_spent_activated_carbon`)

Spent granular activated carbon leaves the Smoke treatment boundary as the single spent activated carbon. Activate only when the declared smoke technology physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Spent granular activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Smoke-scrubber liquor (`smoke_scrubber_liquor`)

Smoke-scrubber liquor leaves the Smoke treatment boundary as the single smoke-scrubber liquor. Activate only when the declared smoke technology physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Smoke-scrubber liquor
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Smokehouse cleaning wastewater (`smoke_cleaning_wastewater`)

Smokehouse cleaning wastewater leaves the Smoke treatment boundary as the single smokehouse cleaning wastewater. Activate only when the declared smoke technology physically produces this exact stream. Its quantity is kept separate from every other exchange.

- Selected flow: Smokehouse cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_residues`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon-dioxide release (`smoke_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Smoke treatment boundary as the single fossil carbon-dioxide release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Carbon-monoxide release (`smoke_co_air`)

Carbon monoxide, to air leaves the Smoke treatment boundary as the single carbon-monoxide release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitrogen-oxide release (`smoke_nox_air`)

Nitrogen oxides, to air leaves the Smoke treatment boundary as the single nitrogen-oxide release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sulfur-oxide release (`smoke_sox_air`)

Sulfur oxides, to air leaves the Smoke treatment boundary as the single sulfur-oxide release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Fine particulate release (`smoke_pm25_air`)

Particulate matter, <=2.5 um, to air leaves the Smoke treatment boundary as the single fine particulate release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, <=2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Coarse particulate release (`smoke_pm_coarse_air`)

Particulate matter, 2.5-10 um, to air leaves the Smoke treatment boundary as the single coarse particulate release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, 2.5-10 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Formaldehyde release (`smoke_formaldehyde_air`)

Formaldehyde, to air leaves the Smoke treatment boundary as the single formaldehyde release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Formaldehyde, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Acetaldehyde release (`smoke_acetaldehyde_air`)

Acetaldehyde, to air leaves the Smoke treatment boundary as the single acetaldehyde release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Acetaldehyde, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Acrolein release (`smoke_acrolein_air`)

Acrolein, to air leaves the Smoke treatment boundary as the single acrolein release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Acrolein, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Acetic-acid release (`smoke_acetic_acid_air`)

Acetic acid, to air leaves the Smoke treatment boundary as the single acetic-acid release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Acetic acid, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Formic-acid release (`smoke_formic_acid_air`)

Formic acid, to air leaves the Smoke treatment boundary as the single formic-acid release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Formic acid, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Propionic-acid release (`smoke_propionic_acid_air`)

Propionic acid, to air leaves the Smoke treatment boundary as the single propionic-acid release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Propionic acid, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Butyric-acid release (`smoke_butyric_acid_air`)

Butyric acid, to air leaves the Smoke treatment boundary as the single butyric-acid release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Butyric acid, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Benzo[a]pyrene release (`smoke_benzo_a_pyrene_air`)

Benzo[a]pyrene, to air leaves the Smoke treatment boundary as the single benzo[a]pyrene release. Activate only when direct monitoring or a documented facility calculation identifies this exact substance for the declared smoke technology. Its quantity is kept separate from every other exchange.

- Selected flow: Benzo[a]pyrene, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_emissions`
- Sources: `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Edible flour or meal production (`edible_flour_meal_production`)

#### Inputs

##### Product flows

###### Powder-line input Goat skeletal muscle meat (`flour_prepared_goat_meat`)

Prepared Goat skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input goat skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Horse skeletal muscle meat (`flour_prepared_horse_meat`)

Prepared Horse skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input horse skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Turkey skeletal muscle meat (`flour_prepared_turkey_meat`)

Prepared Turkey skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input turkey skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Goat liver (`flour_prepared_goat_liver`)

Prepared Goat liver enters the Edible flour or meal production boundary as the single powder-line input goat liver. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Prepared Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Goat skeletal muscle meat (`flour_cured_goat_meat`)

Cured Goat skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input goat skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Horse skeletal muscle meat (`flour_cured_horse_meat`)

Cured Horse skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input horse skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Turkey skeletal muscle meat (`flour_cured_turkey_meat`)

Cured Turkey skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input turkey skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Goat liver (`flour_cured_goat_liver`)

Cured Goat liver enters the Edible flour or meal production boundary as the single powder-line input goat liver. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Goat skeletal muscle meat (`flour_dried_goat_meat`)

Dried Goat skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input goat skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Horse skeletal muscle meat (`flour_dried_horse_meat`)

Dried Horse skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input horse skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Turkey skeletal muscle meat (`flour_dried_turkey_meat`)

Dried Turkey skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input turkey skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Goat liver (`flour_dried_goat_liver`)

Dried Goat liver enters the Edible flour or meal production boundary as the single powder-line input goat liver. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Goat skeletal muscle meat (`flour_smoked_goat_meat`)

Smoked Goat skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input goat skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Horse skeletal muscle meat (`flour_smoked_horse_meat`)

Smoked Horse skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input horse skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Turkey skeletal muscle meat (`flour_smoked_turkey_meat`)

Smoked Turkey skeletal muscle meat enters the Edible flour or meal production boundary as the single powder-line input turkey skeletal muscle meat. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Powder-line input Goat liver (`flour_smoked_goat_liver`)

Smoked Goat liver enters the Edible flour or meal production boundary as the single powder-line input goat liver. Activate only when this exact intermediate is the documented feed to the enterprise-specific edible powder route. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_materials`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Stage electricity (`flour_electricity`)

Electricity, medium voltage enters the Edible flour or meal production boundary as the single stage electricity. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased steam (`flour_purchased_steam`)

Steam, purchased enters the Edible flour or meal production boundary as the single purchased steam. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased hot water (`flour_purchased_hot_water`)

Hot water, purchased enters the Edible flour or meal production boundary as the single purchased hot water. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Natural gas (`flour_natural_gas`)

Natural gas enters the Edible flour or meal production boundary as the single natural gas. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel (`flour_diesel`)

Diesel enters the Edible flour or meal production boundary as the single diesel fuel. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Diesel
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas (`flour_lpg`)

Liquefied petroleum gas enters the Edible flour or meal production boundary as the single liquefied petroleum gas. Activate only when this exact carrier is consumed by the named process. Its quantity is kept separate from every other exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_utilities`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

No exchange of this direction and type is defined for this process.

##### Elementary flows

No exchange of this direction and type is defined for this process.

#### Outputs

##### Product flows

###### Edible flour of Goat skeletal muscle meat (`flour_product_goat_meat`)

Edible flour of Goat skeletal muscle meat leaves the Edible flour or meal production boundary as the single edible flour of goat skeletal muscle meat. Activate only when the qualified finished state is a fine edible flour and the enterprise-specific route is fully documented. Its quantity is kept separate from every other exchange.

- Selected flow: Edible flour of Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_outputs`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Edible flour of Horse skeletal muscle meat (`flour_product_horse_meat`)

Edible flour of Horse skeletal muscle meat leaves the Edible flour or meal production boundary as the single edible flour of horse skeletal muscle meat. Activate only when the qualified finished state is a fine edible flour and the enterprise-specific route is fully documented. Its quantity is kept separate from every other exchange.

- Selected flow: Edible flour of Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_outputs`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Edible flour of Turkey skeletal muscle meat (`flour_product_turkey_meat`)

Edible flour of Turkey skeletal muscle meat leaves the Edible flour or meal production boundary as the single edible flour of turkey skeletal muscle meat. Activate only when the qualified finished state is a fine edible flour and the enterprise-specific route is fully documented. Its quantity is kept separate from every other exchange.

- Selected flow: Edible flour of Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_outputs`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Edible flour of Goat liver (`flour_product_goat_liver`)

Edible flour of Goat liver leaves the Edible flour or meal production boundary as the single edible flour of goat liver. Activate only when the qualified finished state is a fine edible flour and the enterprise-specific route is fully documented. Its quantity is kept separate from every other exchange.

- Selected flow: Edible flour of Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_outputs`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Edible meal of Goat skeletal muscle meat (`meal_product_goat_meat`)

Edible meal of Goat skeletal muscle meat leaves the Edible flour or meal production boundary as the single edible meal of goat skeletal muscle meat. Activate only when the qualified finished state is an edible meal and the enterprise-specific route is fully documented. Its quantity is kept separate from every other exchange.

- Selected flow: Edible meal of Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_outputs`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Edible meal of Horse skeletal muscle meat (`meal_product_horse_meat`)

Edible meal of Horse skeletal muscle meat leaves the Edible flour or meal production boundary as the single edible meal of horse skeletal muscle meat. Activate only when the qualified finished state is an edible meal and the enterprise-specific route is fully documented. Its quantity is kept separate from every other exchange.

- Selected flow: Edible meal of Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_outputs`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Edible meal of Turkey skeletal muscle meat (`meal_product_turkey_meat`)

Edible meal of Turkey skeletal muscle meat leaves the Edible flour or meal production boundary as the single edible meal of turkey skeletal muscle meat. Activate only when the qualified finished state is an edible meal and the enterprise-specific route is fully documented. Its quantity is kept separate from every other exchange.

- Selected flow: Edible meal of Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_outputs`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Edible meal of Goat liver (`meal_product_goat_liver`)

Edible meal of Goat liver leaves the Edible flour or meal production boundary as the single edible meal of goat liver. Activate only when the qualified finished state is an edible meal and the enterprise-specific route is fully documented. Its quantity is kept separate from every other exchange.

- Selected flow: Edible meal of Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_outputs`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

##### Waste flows

###### Milling oversize from Goat skeletal muscle meat (`flour_oversize_goat_meat`)

Goat skeletal muscle meat milling oversize leaves the Edible flour or meal production boundary as the single milling oversize from goat skeletal muscle meat. Activate only when this exact species-and-tissue oversize is removed from the declared sieving step. Its quantity is kept separate from every other exchange.

- Selected flow: Goat skeletal muscle meat milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-pef-2021-2279`

###### Milling oversize from Horse skeletal muscle meat (`flour_oversize_horse_meat`)

Horse skeletal muscle meat milling oversize leaves the Edible flour or meal production boundary as the single milling oversize from horse skeletal muscle meat. Activate only when this exact species-and-tissue oversize is removed from the declared sieving step. Its quantity is kept separate from every other exchange.

- Selected flow: Horse skeletal muscle meat milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-pef-2021-2279`

###### Milling oversize from Turkey skeletal muscle meat (`flour_oversize_turkey_meat`)

Turkey skeletal muscle meat milling oversize leaves the Edible flour or meal production boundary as the single milling oversize from turkey skeletal muscle meat. Activate only when this exact species-and-tissue oversize is removed from the declared sieving step. Its quantity is kept separate from every other exchange.

- Selected flow: Turkey skeletal muscle meat milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-pef-2021-2279`

###### Milling oversize from Goat liver (`flour_oversize_goat_liver`)

Goat liver milling oversize leaves the Edible flour or meal production boundary as the single milling oversize from goat liver. Activate only when this exact species-and-tissue oversize is removed from the declared sieving step. Its quantity is kept separate from every other exchange.

- Selected flow: Goat liver milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-pef-2021-2279`

###### Powder-filter residue from Goat skeletal muscle meat (`flour_filter_residue_goat_meat`)

Goat skeletal muscle meat powder-filter residue leaves the Edible flour or meal production boundary as the single powder-filter residue from goat skeletal muscle meat. Activate only when this exact species-and-tissue residue is collected by the declared dust-control device. Its quantity is kept separate from every other exchange.

- Selected flow: Goat skeletal muscle meat powder-filter residue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Powder-filter residue from Horse skeletal muscle meat (`flour_filter_residue_horse_meat`)

Horse skeletal muscle meat powder-filter residue leaves the Edible flour or meal production boundary as the single powder-filter residue from horse skeletal muscle meat. Activate only when this exact species-and-tissue residue is collected by the declared dust-control device. Its quantity is kept separate from every other exchange.

- Selected flow: Horse skeletal muscle meat powder-filter residue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Powder-filter residue from Turkey skeletal muscle meat (`flour_filter_residue_turkey_meat`)

Turkey skeletal muscle meat powder-filter residue leaves the Edible flour or meal production boundary as the single powder-filter residue from turkey skeletal muscle meat. Activate only when this exact species-and-tissue residue is collected by the declared dust-control device. Its quantity is kept separate from every other exchange.

- Selected flow: Turkey skeletal muscle meat powder-filter residue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Powder-filter residue from Goat liver (`flour_filter_residue_goat_liver`)

Goat liver powder-filter residue leaves the Edible flour or meal production boundary as the single powder-filter residue from goat liver. Activate only when this exact species-and-tissue residue is collected by the declared dust-control device. Its quantity is kept separate from every other exchange.

- Selected flow: Goat liver powder-filter residue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Metal-detector reject (`flour_metal_fragments`)

Metal fragments from edible powder line leaves the Edible flour or meal production boundary as the single metal-detector reject. Activate only when the in-line detector removes this exact physical contaminant. Its quantity is kept separate from every other exchange.

- Selected flow: Metal fragments from edible powder line
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Flour-line cleaning wastewater (`flour_cleaning_wastewater`)

Flour-line cleaning wastewater leaves the Edible flour or meal production boundary as the single flour-line cleaning wastewater. Activate only when wet cleaning is used; dry-cleaning residues remain separate solid wastes. Its quantity is kept separate from every other exchange.

- Selected flow: Flour-line cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flour_residues`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### Fine edible-powder dust release (`flour_pm25_air`)

Particulate matter, <=2.5 um, to air leaves the Edible flour or meal production boundary as the single fine edible-powder dust release. Activate only when direct monitoring or a documented mass balance identifies release in this exact particle-size class. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, <=2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flour_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Coarse edible-powder dust release (`flour_pm_coarse_air`)

Particulate matter, 2.5-10 um, to air leaves the Edible flour or meal production boundary as the single coarse edible-powder dust release. Activate only when direct monitoring or a documented mass balance identifies release in this exact particle-size class. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, 2.5-10 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flour_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Packaging and release (`packaging_and_release`)

#### Inputs

##### Product flows

###### Qualified packaging input Goat skeletal muscle meat (`pack_cured_goat_meat`)

Cured Goat skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input goat skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Horse skeletal muscle meat (`pack_cured_horse_meat`)

Cured Horse skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input horse skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Turkey skeletal muscle meat (`pack_cured_turkey_meat`)

Cured Turkey skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input turkey skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat liver (`pack_cured_goat_liver`)

Cured Goat liver enters the Packaging and release boundary as the single qualified packaging input goat liver. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Cured Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat skeletal muscle meat (`pack_dried_goat_meat`)

Dried Goat skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input goat skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Horse skeletal muscle meat (`pack_dried_horse_meat`)

Dried Horse skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input horse skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Turkey skeletal muscle meat (`pack_dried_turkey_meat`)

Dried Turkey skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input turkey skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat liver (`pack_dried_goat_liver`)

Dried Goat liver enters the Packaging and release boundary as the single qualified packaging input goat liver. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Dried Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat skeletal muscle meat (`pack_smoked_goat_meat`)

Smoked Goat skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input goat skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Horse skeletal muscle meat (`pack_smoked_horse_meat`)

Smoked Horse skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input horse skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Turkey skeletal muscle meat (`pack_smoked_turkey_meat`)

Smoked Turkey skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input turkey skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat liver (`pack_smoked_goat_liver`)

Smoked Goat liver enters the Packaging and release boundary as the single qualified packaging input goat liver. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Smoked Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat skeletal muscle meat (`pack_flour_goat_meat`)

Edible flour of Goat skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input goat skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Edible flour of Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Horse skeletal muscle meat (`pack_flour_horse_meat`)

Edible flour of Horse skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input horse skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Edible flour of Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Turkey skeletal muscle meat (`pack_flour_turkey_meat`)

Edible flour of Turkey skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input turkey skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Edible flour of Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat liver (`pack_flour_goat_liver`)

Edible flour of Goat liver enters the Packaging and release boundary as the single qualified packaging input goat liver. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Edible flour of Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat skeletal muscle meat (`pack_meal_goat_meat`)

Edible meal of Goat skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input goat skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Edible meal of Goat skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Horse skeletal muscle meat (`pack_meal_horse_meat`)

Edible meal of Horse skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input horse skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Edible meal of Horse skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Turkey skeletal muscle meat (`pack_meal_turkey_meat`)

Edible meal of Turkey skeletal muscle meat enters the Packaging and release boundary as the single qualified packaging input turkey skeletal muscle meat. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Edible meal of Turkey skeletal muscle meat
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Qualified packaging input Goat liver (`pack_meal_goat_liver`)

Edible meal of Goat liver enters the Packaging and release boundary as the single qualified packaging input goat liver. Activate exactly one qualified species-tissue-state input matching the declared reference lot. Its quantity is kept separate from every other exchange.

- Selected flow: Edible meal of Goat liver
- Flow property / unit: Mass / kg
- Amount rule: Measure gross and tare mass on calibrated scales, preserve lot identity, and reconcile the value with process inputs, outputs, rejects, and moisture change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Packaging-line electricity (`pack_electricity`)

Electricity, medium voltage enters the Packaging and release boundary as the single packaging-line electricity. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_energy`
- Sources: `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Packaging nitrogen (`pack_nitrogen`)

Nitrogen, gaseous enters the Packaging and release boundary as the single packaging nitrogen. Activate only when this exact gas is used in the declared package atmosphere or cooling configuration. Its quantity is kept separate from every other exchange.

- Selected flow: Nitrogen, gaseous
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `eu-pef-2021-2279`

###### Packaging carbon dioxide (`pack_carbon_dioxide`)

Carbon dioxide, gaseous enters the Packaging and release boundary as the single packaging carbon dioxide. Activate only when this exact gas is used in the declared package atmosphere or cooling configuration. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, gaseous
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `eu-pef-2021-2279`

###### R-717 refrigerant make-up (`pack_r717_makeup`)

Ammonia, anhydrous enters the Packaging and release boundary as the single r-717 refrigerant make-up. Activate only when this exact refrigerant is present in finished-product conditioning or storage. Its quantity is kept separate from every other exchange.

- Selected flow: Ammonia, anhydrous
- Flow property / unit: Mass / kg
- Amount rule: Determine substance-specific make-up from cylinder weights, purchases, recoveries, and service logs for the matched reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a refrigerant make-up (`pack_r134a_makeup`)

1,1,1,2-Tetrafluoroethane enters the Packaging and release boundary as the single r-134a refrigerant make-up. Activate only when this exact refrigerant is present in finished-product conditioning or storage. Its quantity is kept separate from every other exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: Determine substance-specific make-up from cylinder weights, purchases, recoveries, and service logs for the matched reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-744 refrigerant make-up (`pack_r744_makeup`)

Carbon dioxide, liquid enters the Packaging and release boundary as the single r-744 refrigerant make-up. Activate only when this exact refrigerant is present in finished-product conditioning or storage. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, liquid
- Flow property / unit: Mass / kg
- Amount rule: Determine substance-specific make-up from cylinder weights, purchases, recoveries, and service logs for the matched reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_refrigerants`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Low-density polyethylene film (`pack_ldpe_film`)

Low-density polyethylene film enters the Packaging and release boundary as the single low-density polyethylene film. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Polyamide film (`pack_polyamide_film`)

Polyamide film enters the Packaging and release boundary as the single polyamide film. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Polyamide film
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Polyethylene terephthalate film (`pack_pet_film`)

Polyethylene terephthalate film enters the Packaging and release boundary as the single polyethylene terephthalate film. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Polyethylene terephthalate film
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Aluminium foil (`pack_aluminium_foil`)

Aluminium foil enters the Packaging and release boundary as the single aluminium foil. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Regenerated cellulose film (`pack_cellulose_film`)

Regenerated cellulose film enters the Packaging and release boundary as the single regenerated cellulose film. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Regenerated cellulose film
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Paper sack (`pack_paper_sack`)

Paper sack enters the Packaging and release boundary as the single paper sack. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Paper sack
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Jute sack (`pack_jute_sack`)

Jute sack enters the Packaging and release boundary as the single jute sack. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Jute sack
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Corrugated cardboard box (`pack_corrugated_box`)

Corrugated cardboard box enters the Packaging and release boundary as the single corrugated cardboard box. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Glass jar (`pack_glass_jar`)

Glass jar enters the Packaging and release boundary as the single glass jar. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Glass jar
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Polypropylene pail (`pack_polypropylene_pail`)

Polypropylene pail enters the Packaging and release boundary as the single polypropylene pail. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Polypropylene pail
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Paper label (`pack_paper_label`)

Paper label enters the Packaging and release boundary as the single paper label. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### Wooden pallet (`pack_wooden_pallet`)

Wooden pallet enters the Packaging and release boundary as the single wooden pallet. Activate only when this exact component appears in the actual packaging bill of materials. Its quantity is kept separate from every other exchange.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_materials`
- Sources: `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

##### Waste flows

No exchange of this direction and type is defined for this process.

##### Elementary flows

No exchange of this direction and type is defined for this process.

#### Outputs

##### Product flows

###### Qualified CPC 21183 reference product (`reference_cpc21183_product`)

Other meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal leaves the Packaging and release boundary as the single qualified cpc 21183 reference product. This is the sole UUID-bearing inventory row and must match the locked species, tissue, route sequence, finished state, and lot. Its quantity is kept separate from every other exchange.

- Selected flow: Other meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal `47ac991c-00e2-4c29-8df0-7a7b867c3e97`
- Flow property / unit: Mass / kg
- Amount rule: Set this sole reference output to exactly 1 kg net qualified product, excluding packaging mass; preserve all required qualifiers.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_pack_products`
- Sources: `unsd-cpc-3-21183`

##### Waste flows

###### Waste low-density polyethylene film (`pack_waste_ldpe_film`)

Waste low-density polyethylene film leaves the Packaging and release boundary as the single waste low-density polyethylene film. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste polyamide film (`pack_waste_polyamide_film`)

Waste polyamide film leaves the Packaging and release boundary as the single waste polyamide film. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste polyamide film
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste polyethylene terephthalate film (`pack_waste_pet_film`)

Waste polyethylene terephthalate film leaves the Packaging and release boundary as the single waste polyethylene terephthalate film. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste polyethylene terephthalate film
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste aluminium foil (`pack_waste_aluminium_foil`)

Waste aluminium foil leaves the Packaging and release boundary as the single waste aluminium foil. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste regenerated cellulose film (`pack_waste_cellulose_film`)

Waste regenerated cellulose film leaves the Packaging and release boundary as the single waste regenerated cellulose film. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste regenerated cellulose film
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste paper sack (`pack_waste_paper_sack`)

Waste paper sack leaves the Packaging and release boundary as the single waste paper sack. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste paper sack
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste jute sack (`pack_waste_jute_sack`)

Waste jute sack leaves the Packaging and release boundary as the single waste jute sack. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste jute sack
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste corrugated cardboard box (`pack_waste_corrugated_box`)

Waste corrugated cardboard box leaves the Packaging and release boundary as the single waste corrugated cardboard box. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste glass jar (`pack_waste_glass_jar`)

Waste glass jar leaves the Packaging and release boundary as the single waste glass jar. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste glass jar
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste polypropylene pail (`pack_waste_polypropylene_pail`)

Waste polypropylene pail leaves the Packaging and release boundary as the single waste polypropylene pail. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste polypropylene pail
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste paper label (`pack_waste_paper_label`)

Waste paper label leaves the Packaging and release boundary as the single waste paper label. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste paper label
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Waste wooden pallet (`pack_waste_wooden_pallet`)

Waste wooden pallet leaves the Packaging and release boundary as the single waste wooden pallet. Activate only when this exact packaging component becomes waste inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-pef-2021-2279`

###### Packaging-line washwater (`pack_washwater`)

Packaging-line washwater leaves the Packaging and release boundary as the single packaging-line washwater. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Packaging-line washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### R-717 ammonia release (`pack_ammonia_air`)

Ammonia, to air leaves the Packaging and release boundary as the single r-717 ammonia release. Activate when an R-717 balance identifies a release. Its quantity is kept separate from every other exchange.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a release (`pack_r134a_air`)

1,1,1,2-Tetrafluoroethane, to air leaves the Packaging and release boundary as the single r-134a release. Activate when an R-134a balance identifies a release. Its quantity is kept separate from every other exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Fossil-origin R-744 release (`pack_r744_fossil_air`)

Carbon dioxide, fossil, to air leaves the Packaging and release boundary as the single fossil-origin r-744 release. Activate only for fossil-origin R-744 release. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Biogenic-origin R-744 release (`pack_r744_biogenic_air`)

Carbon dioxide, biogenic, to air leaves the Packaging and release boundary as the single biogenic-origin r-744 release. Activate only for biogenic-origin R-744 release. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Packaging-nitrogen release (`pack_nitrogen_air`)

Nitrogen, to air leaves the Packaging and release boundary as the single packaging-nitrogen release. Activate only when packaging nitrogen is released inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Nitrogen, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Fossil-origin packaging carbon-dioxide release (`pack_gas_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Packaging and release boundary as the single fossil-origin packaging carbon-dioxide release. Activate only for fossil-origin packaging carbon dioxide. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Biogenic-origin packaging carbon-dioxide release (`pack_gas_biogenic_co2_air`)

Carbon dioxide, biogenic, to air leaves the Packaging and release boundary as the single biogenic-origin packaging carbon-dioxide release. Activate only for biogenic-origin packaging carbon dioxide. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Cleaning and disinfection (`cleaning_and_disinfection`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

Potable water enters the Cleaning and disinfection boundary as the single sanitation water. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sanitation electricity (`sanitation_electricity`)

Electricity, medium voltage enters the Cleaning and disinfection boundary as the single sanitation electricity. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased sanitation steam (`sanitation_steam`)

Steam, purchased enters the Cleaning and disinfection boundary as the single purchased sanitation steam. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased sanitation hot water (`sanitation_hot_water`)

Hot water, purchased enters the Cleaning and disinfection boundary as the single purchased sanitation hot water. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sanitation natural gas (`sanitation_natural_gas`)

Natural gas enters the Cleaning and disinfection boundary as the single sanitation natural gas. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sanitation diesel (`sanitation_diesel`)

Diesel enters the Cleaning and disinfection boundary as the single sanitation diesel. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Diesel
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sanitation liquefied petroleum gas (`sanitation_lpg`)

Liquefied petroleum gas enters the Cleaning and disinfection boundary as the single sanitation liquefied petroleum gas. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium hydroxide cleaner (`sanitation_sodium_hydroxide`)

Sodium hydroxide enters the Cleaning and disinfection boundary as the single sodium hydroxide cleaner. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitric acid cleaner (`sanitation_nitric_acid`)

Nitric acid enters the Cleaning and disinfection boundary as the single nitric acid cleaner. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Phosphoric acid cleaner (`sanitation_phosphoric_acid`)

Phosphoric acid enters the Cleaning and disinfection boundary as the single phosphoric acid cleaner. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Peracetic acid disinfectant (`sanitation_peracetic_acid`)

Peracetic acid enters the Cleaning and disinfection boundary as the single peracetic acid disinfectant. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium hypochlorite disinfectant (`sanitation_sodium_hypochlorite`)

Sodium hypochlorite enters the Cleaning and disinfection boundary as the single sodium hypochlorite disinfectant. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Benzalkonium chloride disinfectant (`sanitation_benzalkonium_chloride`)

Benzalkonium chloride enters the Cleaning and disinfection boundary as the single benzalkonium chloride disinfectant. Activate only when this exact sanitation input is consumed inside the foreground boundary. Its quantity is kept separate from every other exchange.

- Selected flow: Benzalkonium chloride
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

No exchange of this direction and type is defined for this process.

##### Elementary flows

No exchange of this direction and type is defined for this process.

#### Outputs

##### Product flows

No exchange of this direction and type is defined for this process.

##### Waste flows

###### Sodium-hydroxide sanitation wastewater (`sanitation_sodium_hydroxide_wastewater`)

Sodium-hydroxide sanitation wastewater leaves the Cleaning and disinfection boundary as the single sodium-hydroxide sanitation wastewater. Activate only when this exact wastewater stream is separately generated or tracked. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium-hydroxide sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitric-acid sanitation wastewater (`sanitation_nitric_acid_wastewater`)

Nitric-acid sanitation wastewater leaves the Cleaning and disinfection boundary as the single nitric-acid sanitation wastewater. Activate only when this exact wastewater stream is separately generated or tracked. Its quantity is kept separate from every other exchange.

- Selected flow: Nitric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Phosphoric-acid sanitation wastewater (`sanitation_phosphoric_acid_wastewater`)

Phosphoric-acid sanitation wastewater leaves the Cleaning and disinfection boundary as the single phosphoric-acid sanitation wastewater. Activate only when this exact wastewater stream is separately generated or tracked. Its quantity is kept separate from every other exchange.

- Selected flow: Phosphoric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Peracetic-acid sanitation wastewater (`sanitation_peracetic_acid_wastewater`)

Peracetic-acid sanitation wastewater leaves the Cleaning and disinfection boundary as the single peracetic-acid sanitation wastewater. Activate only when this exact wastewater stream is separately generated or tracked. Its quantity is kept separate from every other exchange.

- Selected flow: Peracetic-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium-hypochlorite sanitation wastewater (`sanitation_hypochlorite_wastewater`)

Sodium-hypochlorite sanitation wastewater leaves the Cleaning and disinfection boundary as the single sodium-hypochlorite sanitation wastewater. Activate only when this exact wastewater stream is separately generated or tracked. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium-hypochlorite sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Benzalkonium-chloride sanitation wastewater (`sanitation_benzalkonium_wastewater`)

Benzalkonium-chloride sanitation wastewater leaves the Cleaning and disinfection boundary as the single benzalkonium-chloride sanitation wastewater. Activate only when this exact wastewater stream is separately generated or tracked. Its quantity is kept separate from every other exchange.

- Selected flow: Benzalkonium-chloride sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Final-rinse sanitation wastewater (`sanitation_final_rinse_wastewater`)

Final-rinse sanitation wastewater leaves the Cleaning and disinfection boundary as the single final-rinse sanitation wastewater. Activate only when this exact wastewater stream is separately generated or tracked. Its quantity is kept separate from every other exchange.

- Selected flow: Final-rinse sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sanitation floor sweepings (`sanitation_floor_sweepings`)

Sanitation floor sweepings leaves the Cleaning and disinfection boundary as the single sanitation floor sweepings. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Sanitation floor sweepings
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon-dioxide release (`sanitation_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Cleaning and disinfection boundary as the single fossil carbon-dioxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitrogen-oxide release (`sanitation_nox_air`)

Nitrogen oxides, to air leaves the Cleaning and disinfection boundary as the single nitrogen-oxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sulfur-oxide release (`sanitation_sox_air`)

Sulfur oxides, to air leaves the Cleaning and disinfection boundary as the single sulfur-oxide release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Fine particulate release (`sanitation_pm25_air`)

Particulate matter, <=2.5 um, to air leaves the Cleaning and disinfection boundary as the single fine particulate release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, <=2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Coarse particulate release (`sanitation_pm_coarse_air`)

Particulate matter, 2.5-10 um, to air leaves the Cleaning and disinfection boundary as the single coarse particulate release. Activate when on-site combustion or direct heating associated with this process can release this exact substance. Its quantity is kept separate from every other exchange.

- Selected flow: Particulate matter, 2.5-10 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wwt_electricity`)

Electricity, medium voltage enters the On-site wastewater treatment boundary as the single wastewater-treatment electricity. Activate only when this exact input is consumed by on-site treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Treatment-polymer make-up water (`wwt_makeup_water`)

Potable water enters the On-site wastewater treatment boundary as the single treatment-polymer make-up water. Activate only when this exact input is consumed by on-site treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Read this named carrier from a dedicated meter or allocate a reconciled shared meter with a documented causal driver; do not combine another carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Ferric chloride coagulant (`wwt_ferric_chloride`)

Ferric chloride enters the On-site wastewater treatment boundary as the single ferric chloride coagulant. Activate only when this exact input is consumed by on-site treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Anionic polyacrylamide flocculant (`wwt_polyacrylamide`)

Anionic polyacrylamide enters the On-site wastewater treatment boundary as the single anionic polyacrylamide flocculant. Activate only when this exact input is consumed by on-site treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Wastewater-treatment sodium hydroxide (`wwt_sodium_hydroxide`)

Sodium hydroxide enters the On-site wastewater treatment boundary as the single wastewater-treatment sodium hydroxide. Activate only when this exact input is consumed by on-site treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Wastewater-treatment sulfuric acid (`wwt_sulfuric_acid`)

Sulfuric acid enters the On-site wastewater treatment boundary as the single wastewater-treatment sulfuric acid. Activate only when this exact input is consumed by on-site treatment. Its quantity is kept separate from every other exchange.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Weigh this one formulation ingredient from batch issue and return records and reconcile it with the approved product-specific recipe; no default dose is supplied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

###### Raw-material preparation washwater influent (`wwt_preparation_washwater`)

Raw-material preparation washwater enters the On-site wastewater treatment boundary as the single raw-material preparation washwater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Raw-material preparation washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Curing-rinse wastewater influent (`wwt_curing_rinse_wastewater`)

Curing-rinse wastewater enters the On-site wastewater treatment boundary as the single curing-rinse wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Curing-rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Curing-equipment washwater influent (`wwt_curing_equipment_washwater`)

Curing-equipment washwater enters the On-site wastewater treatment boundary as the single curing-equipment washwater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Curing-equipment washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Dryer cleaning wastewater influent (`wwt_dryer_cleaning_wastewater`)

Dryer cleaning wastewater enters the On-site wastewater treatment boundary as the single dryer cleaning wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Dryer cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Smoke-scrubber liquor influent (`wwt_smoke_scrubber_liquor`)

Smoke-scrubber liquor enters the On-site wastewater treatment boundary as the single smoke-scrubber liquor influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Smoke-scrubber liquor
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Smokehouse cleaning wastewater influent (`wwt_smokehouse_cleaning_wastewater`)

Smokehouse cleaning wastewater enters the On-site wastewater treatment boundary as the single smokehouse cleaning wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Smokehouse cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Flour-line cleaning wastewater influent (`wwt_flour_cleaning_wastewater`)

Flour-line cleaning wastewater enters the On-site wastewater treatment boundary as the single flour-line cleaning wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Flour-line cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Packaging-line washwater influent (`wwt_packaging_washwater`)

Packaging-line washwater enters the On-site wastewater treatment boundary as the single packaging-line washwater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Packaging-line washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium-hydroxide sanitation wastewater influent (`wwt_sodium_hydroxide_wastewater`)

Sodium-hydroxide sanitation wastewater enters the On-site wastewater treatment boundary as the single sodium-hydroxide sanitation wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium-hydroxide sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitric-acid sanitation wastewater influent (`wwt_nitric_acid_wastewater`)

Nitric-acid sanitation wastewater enters the On-site wastewater treatment boundary as the single nitric-acid sanitation wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Nitric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Phosphoric-acid sanitation wastewater influent (`wwt_phosphoric_acid_wastewater`)

Phosphoric-acid sanitation wastewater enters the On-site wastewater treatment boundary as the single phosphoric-acid sanitation wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Phosphoric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Peracetic-acid sanitation wastewater influent (`wwt_peracetic_acid_wastewater`)

Peracetic-acid sanitation wastewater enters the On-site wastewater treatment boundary as the single peracetic-acid sanitation wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Peracetic-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium-hypochlorite sanitation wastewater influent (`wwt_hypochlorite_wastewater`)

Sodium-hypochlorite sanitation wastewater enters the On-site wastewater treatment boundary as the single sodium-hypochlorite sanitation wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Sodium-hypochlorite sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Benzalkonium-chloride sanitation wastewater influent (`wwt_benzalkonium_wastewater`)

Benzalkonium-chloride sanitation wastewater enters the On-site wastewater treatment boundary as the single benzalkonium-chloride sanitation wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Benzalkonium-chloride sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Final-rinse sanitation wastewater influent (`wwt_final_rinse_wastewater`)

Final-rinse sanitation wastewater enters the On-site wastewater treatment boundary as the single final-rinse sanitation wastewater influent. Activate only when this exact named stream is treated on site and preserve its upstream row link. Its quantity is kept separate from every other exchange.

- Selected flow: Final-rinse sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

No exchange of this direction and type is defined for this process.

#### Outputs

##### Product flows

###### Recovered wastewater grease (`wwt_recovered_grease`)

Recovered wastewater grease leaves the On-site wastewater treatment boundary as the single recovered wastewater grease. Activate only when recovered grease has a documented lawful product destination; otherwise use the discarded-grease waste row. Its quantity is kept separate from every other exchange.

- Selected flow: Recovered wastewater grease
- Flow property / unit: Mass / kg
- Amount rule: Measure net output mass on calibrated scales, retain exact species, tissue, route, state, and lot links, and prevent duplicate reporting in another output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

###### Wastewater screenings (`wwt_screenings`)

Wastewater screenings leaves the On-site wastewater treatment boundary as the single wastewater screenings. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Dissolved-air-flotation sludge (`wwt_daf_sludge`)

Dissolved-air-flotation sludge leaves the On-site wastewater treatment boundary as the single dissolved-air-flotation sludge. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Dissolved-air-flotation sludge
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Biological wastewater sludge (`wwt_biological_sludge`)

Biological wastewater sludge leaves the On-site wastewater treatment boundary as the single biological wastewater sludge. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Biological wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Discarded wastewater grease (`wwt_discarded_grease`)

Discarded wastewater grease leaves the On-site wastewater treatment boundary as the single discarded wastewater grease. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Discarded wastewater grease
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing or volume records and retain its treatment destination and product-versus-waste decision.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Treated wastewater effluent (`wwt_treated_effluent`)

Treated wastewater effluent leaves the On-site wastewater treatment boundary as the single treated wastewater effluent. Record this exchange only when it physically occurs for the declared lot. Its quantity is kept separate from every other exchange.

- Selected flow: Treated wastewater effluent
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing using a dedicated flow meter, tank record, or documented hydraulic allocation and retain its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### Five-day biochemical oxygen demand release (`wwt_bod5_water`)

Biochemical oxygen demand, 5 days, to water leaves the On-site wastewater treatment boundary as the single five-day biochemical oxygen demand release. Activate only when this exact parameter is monitored or required for the declared discharge; do not substitute another parameter. Its quantity is kept separate from every other exchange.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water release as matched effluent volume multiplied by its measured concentration, with unit conversion and sampling basis retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_water_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Chemical oxygen demand release (`wwt_cod_water`)

Chemical oxygen demand, to water leaves the On-site wastewater treatment boundary as the single chemical oxygen demand release. Activate only when this exact parameter is monitored or required for the declared discharge; do not substitute another parameter. Its quantity is kept separate from every other exchange.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water release as matched effluent volume multiplied by its measured concentration, with unit conversion and sampling basis retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_water_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Total suspended-solids release (`wwt_tss_water`)

Total suspended solids, to water leaves the On-site wastewater treatment boundary as the single total suspended-solids release. Activate only when this exact parameter is monitored or required for the declared discharge; do not substitute another parameter. Its quantity is kept separate from every other exchange.

- Selected flow: Total suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water release as matched effluent volume multiplied by its measured concentration, with unit conversion and sampling basis retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_water_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Total-nitrogen release (`wwt_total_n_water`)

Total nitrogen, to water leaves the On-site wastewater treatment boundary as the single total-nitrogen release. Activate only when this exact parameter is monitored or required for the declared discharge; do not substitute another parameter. Its quantity is kept separate from every other exchange.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water release as matched effluent volume multiplied by its measured concentration, with unit conversion and sampling basis retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_water_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Total-phosphorus release (`wwt_total_p_water`)

Total phosphorus, to water leaves the On-site wastewater treatment boundary as the single total-phosphorus release. Activate only when this exact parameter is monitored or required for the declared discharge; do not substitute another parameter. Its quantity is kept separate from every other exchange.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water release as matched effluent volume multiplied by its measured concentration, with unit conversion and sampling basis retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_water_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Chloride release (`wwt_chloride_water`)

Chloride, to water leaves the On-site wastewater treatment boundary as the single chloride release. Activate only when this exact parameter is monitored or required for the declared discharge; do not substitute another parameter. Its quantity is kept separate from every other exchange.

- Selected flow: Chloride, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water release as matched effluent volume multiplied by its measured concentration, with unit conversion and sampling basis retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_water_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Biogenic methane release (`wwt_methane_air`)

Methane, biogenic, to air leaves the On-site wastewater treatment boundary as the single biogenic methane release. Activate only when direct monitoring or a documented facility calculation identifies this exact treatment release. Its quantity is kept separate from every other exchange.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Biogenic carbon-dioxide release (`wwt_biogenic_co2_air`)

Carbon dioxide, biogenic, to air leaves the On-site wastewater treatment boundary as the single biogenic carbon-dioxide release. Activate only when direct monitoring or a documented facility calculation identifies this exact treatment release. Its quantity is kept separate from every other exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitrous-oxide release (`wwt_nitrous_oxide_air`)

Dinitrogen monoxide, to air leaves the On-site wastewater treatment boundary as the single nitrous-oxide release. Activate only when direct monitoring or a documented facility calculation identifies this exact treatment release. Its quantity is kept separate from every other exchange.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure this one substance directly or calculate it from matched foreground activity records and a documented facility-specific factor; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified CPC 21183 reference product at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emissions`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Shared processes | Prefer measured process subdivision and direct batch assignment before any allocation. | `eu-pef-2021-2279` |
| `allocation_mass_balance` | Species, tissue, route, and state outputs | Reconcile accepted input, ingredients, product, rejects, residues, wastewater, and measured moisture change without counting one physical mass twice. | `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `allocation_product_waste_status` | Recovered materials | Classify an output as product only with a documented lawful use and destination; otherwise retain the exact waste identity. | `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `allocation_internal_recycle` | Reused brine and internal recirculation | Treat internal reuse as an internal transfer, record make-up and purge separately, and avoid reporting the recirculated quantity as a new external input. | `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `allocation_fallback` | Unavoidable shared burdens | If subdivision or a physical causal relation is not feasible, document the PEF-consistent allocation basis and preserve numerator, denominator, and affected rows. | `eu-pef-2021-2279` |
| `allocation_sensitivity` | Material allocations | Perform and disclose a sensitivity check when a shared slaughter, preservation, utility, or co-product allocation materially changes the result. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_materials` | `raw_material_receipt_and_preparation` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_receipt_utilities` | `raw_material_receipt_and_preparation` | One named utility or fuel carrier | Submeter, tank, invoice, or operating record | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | Read one carrier from its dedicated record or apply a documented causal allocation to a reconciled shared record. | m3, kWh, MJ, or kg as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; tank reconciliation; allocation worksheet |
| `cp_receipt_refrigerants` | `raw_material_receipt_and_preparation` | Substance-specific refrigerant make-up and release | Refrigerant service and stock record | row_id; refrigerant_identity; origin; opening_stock; purchased_mass; recovered_mass; closing_stock; make_up_mass; released_mass; unit; service_event_id; timestamp | Reconcile cylinder weights, purchases, recovery, closing stock, and service events for one refrigerant and origin. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Cylinder calibration; service log; purchase record; substance balance |
| `cp_receipt_outputs` | `raw_material_receipt_and_preparation` | Exact intermediate, finished product, or recovered product mass | Calibrated scale and release record | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | Measure gross and tare, calculate net mass, preserve all identity qualifiers, and reconcile with the matched process balance. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; release record; route trace; mass-balance approval |
| `cp_receipt_residues` | `raw_material_receipt_and_preparation` | One named waste, wastewater, or residue stream | Container scale, flow meter, tank, and destination record | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | Measure the named stream before mixing, retain product-versus-waste classification, and reconcile transfer and destination records. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; tank record; waste manifest; destination receipt |
| `cp_cure_materials` | `cure_formulation_and_application` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_cure_formulation` | `cure_formulation_and_application` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_cure_utilities` | `cure_formulation_and_application` | One named utility or fuel carrier | Submeter, tank, invoice, or operating record | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | Read one carrier from its dedicated record or apply a documented causal allocation to a reconciled shared record. | m3, kWh, MJ, or kg as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; tank reconciliation; allocation worksheet |
| `cp_cure_outputs` | `cure_formulation_and_application` | Exact intermediate, finished product, or recovered product mass | Calibrated scale and release record | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | Measure gross and tare, calculate net mass, preserve all identity qualifiers, and reconcile with the matched process balance. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; release record; route trace; mass-balance approval |
| `cp_cure_residues` | `cure_formulation_and_application` | One named waste, wastewater, or residue stream | Container scale, flow meter, tank, and destination record | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | Measure the named stream before mixing, retain product-versus-waste classification, and reconcile transfer and destination records. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; tank record; waste manifest; destination receipt |
| `cp_cure_emissions` | `cure_formulation_and_application` | One named direct air release | Direct measurement or activity-factor calculation file | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | Use direct monitoring or calculate one substance from matched activity records and a documented facility-specific factor; retain the full calculation. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Calibration or laboratory evidence; factor provenance; reproducible calculation |
| `cp_drying_materials` | `controlled_drying` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_drying_utilities` | `controlled_drying` | One named utility or fuel carrier | Submeter, tank, invoice, or operating record | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | Read one carrier from its dedicated record or apply a documented causal allocation to a reconciled shared record. | m3, kWh, MJ, or kg as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; tank reconciliation; allocation worksheet |
| `cp_drying_outputs` | `controlled_drying` | Exact intermediate, finished product, or recovered product mass | Calibrated scale and release record | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | Measure gross and tare, calculate net mass, preserve all identity qualifiers, and reconcile with the matched process balance. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; release record; route trace; mass-balance approval |
| `cp_drying_residues` | `controlled_drying` | One named waste, wastewater, or residue stream | Container scale, flow meter, tank, and destination record | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | Measure the named stream before mixing, retain product-versus-waste classification, and reconcile transfer and destination records. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; tank record; waste manifest; destination receipt |
| `cp_drying_emissions` | `controlled_drying` | One named direct air release | Direct measurement or activity-factor calculation file | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | Use direct monitoring or calculate one substance from matched activity records and a documented facility-specific factor; retain the full calculation. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Calibration or laboratory evidence; factor provenance; reproducible calculation |
| `cp_smoke_materials` | `smoke_treatment` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_smoke_inputs` | `smoke_treatment` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_smoke_utilities` | `smoke_treatment` | One named utility or fuel carrier | Submeter, tank, invoice, or operating record | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | Read one carrier from its dedicated record or apply a documented causal allocation to a reconciled shared record. | m3, kWh, MJ, or kg as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; tank reconciliation; allocation worksheet |
| `cp_smoke_outputs` | `smoke_treatment` | Exact intermediate, finished product, or recovered product mass | Calibrated scale and release record | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | Measure gross and tare, calculate net mass, preserve all identity qualifiers, and reconcile with the matched process balance. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; release record; route trace; mass-balance approval |
| `cp_smoke_residues` | `smoke_treatment` | One named waste, wastewater, or residue stream | Container scale, flow meter, tank, and destination record | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | Measure the named stream before mixing, retain product-versus-waste classification, and reconcile transfer and destination records. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; tank record; waste manifest; destination receipt |
| `cp_smoke_emissions` | `smoke_treatment` | One named direct air release | Direct measurement or activity-factor calculation file | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | Use direct monitoring or calculate one substance from matched activity records and a documented facility-specific factor; retain the full calculation. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Calibration or laboratory evidence; factor provenance; reproducible calculation |
| `cp_flour_materials` | `edible_flour_meal_production` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_flour_utilities` | `edible_flour_meal_production` | One named utility or fuel carrier | Submeter, tank, invoice, or operating record | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | Read one carrier from its dedicated record or apply a documented causal allocation to a reconciled shared record. | m3, kWh, MJ, or kg as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; tank reconciliation; allocation worksheet |
| `cp_flour_outputs` | `edible_flour_meal_production` | Exact intermediate, finished product, or recovered product mass | Calibrated scale and release record | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | Measure gross and tare, calculate net mass, preserve all identity qualifiers, and reconcile with the matched process balance. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; release record; route trace; mass-balance approval |
| `cp_flour_residues` | `edible_flour_meal_production` | One named waste, wastewater, or residue stream | Container scale, flow meter, tank, and destination record | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | Measure the named stream before mixing, retain product-versus-waste classification, and reconcile transfer and destination records. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; tank record; waste manifest; destination receipt |
| `cp_flour_emissions` | `edible_flour_meal_production` | One named direct air release | Direct measurement or activity-factor calculation file | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | Use direct monitoring or calculate one substance from matched activity records and a documented facility-specific factor; retain the full calculation. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Calibration or laboratory evidence; factor provenance; reproducible calculation |
| `cp_pack_products` | `packaging_and_release` | Exact intermediate, finished product, or recovered product mass | Calibrated scale and release record | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | Measure gross and tare, calculate net mass, preserve all identity qualifiers, and reconcile with the matched process balance. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; release record; route trace; mass-balance approval |
| `cp_pack_energy` | `packaging_and_release` | One named utility or fuel carrier | Submeter, tank, invoice, or operating record | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | Read one carrier from its dedicated record or apply a documented causal allocation to a reconciled shared record. | m3, kWh, MJ, or kg as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; tank reconciliation; allocation worksheet |
| `cp_pack_materials` | `packaging_and_release` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_pack_refrigerants` | `packaging_and_release` | Substance-specific refrigerant make-up and release | Refrigerant service and stock record | row_id; refrigerant_identity; origin; opening_stock; purchased_mass; recovered_mass; closing_stock; make_up_mass; released_mass; unit; service_event_id; timestamp | Reconcile cylinder weights, purchases, recovery, closing stock, and service events for one refrigerant and origin. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Cylinder calibration; service log; purchase record; substance balance |
| `cp_pack_waste` | `packaging_and_release` | One named waste, wastewater, or residue stream | Container scale, flow meter, tank, and destination record | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | Measure the named stream before mixing, retain product-versus-waste classification, and reconcile transfer and destination records. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; tank record; waste manifest; destination receipt |
| `cp_pack_emissions` | `packaging_and_release` | One named direct air release | Direct measurement or activity-factor calculation file | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | Use direct monitoring or calculate one substance from matched activity records and a documented facility-specific factor; retain the full calculation. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Calibration or laboratory evidence; factor provenance; reproducible calculation |
| `cp_sanitation_inputs` | `cleaning_and_disinfection` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_sanitation_residues` | `cleaning_and_disinfection` | One named waste, wastewater, or residue stream | Container scale, flow meter, tank, and destination record | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | Measure the named stream before mixing, retain product-versus-waste classification, and reconcile transfer and destination records. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; tank record; waste manifest; destination receipt |
| `cp_sanitation_emissions` | `cleaning_and_disinfection` | One named direct air release | Direct measurement or activity-factor calculation file | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | Use direct monitoring or calculate one substance from matched activity records and a documented facility-specific factor; retain the full calculation. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Calibration or laboratory evidence; factor provenance; reproducible calculation |
| `cp_wwt_utilities` | `onsite_wastewater_treatment` | One named utility or fuel carrier | Submeter, tank, invoice, or operating record | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | Read one carrier from its dedicated record or apply a documented causal allocation to a reconciled shared record. | m3, kWh, MJ, or kg as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; tank reconciliation; allocation worksheet |
| `cp_wwt_consumables` | `onsite_wastewater_treatment` | One named material, ingredient, chemical, or control medium | Batch issue, return, scale, and formulation record | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | Measure gross and tare or reconcile issued and returned stock for one exact row; verify identity against the approved batch record. | kg or m3 as declared | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; stock ledger; approved recipe; lot trace |
| `cp_wwt_influent` | `onsite_wastewater_treatment` | One named on-site wastewater influent | Stream-specific flow meter or tank transfer record | row_id; source_row_id; stream_identity; volume; unit; treatment_train; transfer_time; meter_id; timestamp | Link one wastewater input to its upstream row, measure before mixing, and reconcile treatment-train inflow. | m3 | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Flow-meter calibration; source-row crosswalk; hydraulic balance |
| `cp_wwt_outputs` | `onsite_wastewater_treatment` | Exact intermediate, finished product, or recovered product mass | Calibrated scale and release record | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | Measure gross and tare, calculate net mass, preserve all identity qualifiers, and reconcile with the matched process balance. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; release record; route trace; mass-balance approval |
| `cp_wwt_water_emissions` | `onsite_wastewater_treatment` | Individual treated-effluent pollutant load | Flow-proportional sample and laboratory result | row_id; discharge_id; pollutant_identity; effluent_volume; concentration; volume_unit; concentration_unit; sampling_method; laboratory_id; timestamp | Match one measured concentration to the corresponding effluent volume and retain sampling and analytical metadata. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Accredited laboratory report; flow-meter calibration; chain of custody |
| `cp_wwt_air_emissions` | `onsite_wastewater_treatment` | One named direct air release | Direct measurement or activity-factor calculation file | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | Use direct monitoring or calculate one substance from matched activity records and a documented facility-specific factor; retain the full calculation. | kg | Each batch or event with reporting-period reconciliation | Complete declared foreground reporting period | Foreground preservation facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Calibration or laboratory evidence; factor provenance; reproducible calculation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every non-reference row | Divide the matched batch or reporting-period exchange by net qualified reference-product mass; retain unrounded numerator and denominator. | row-specific quantity; net qualified reference-product mass | Quantity per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_process_mass_balance` | Each process and lot | Reconcile exact-species-and-tissue inputs plus formulation inputs with products, rejects, residues, wastewater-carried mass, and measured moisture change. | input masses; output masses; moisture records; wastewater solids | Process mass-balance residual | `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_brine_balance` | Cure formulation | Reconcile potable water and each exact ingredient with uptake, retained brine, recovered brine, purge, spent brine, and equipment wastewater. | ingredient issues; water meter; brine tank changes; purge; spent brine | Ingredient-specific brine balance | `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `calc_moisture_loss` | Drying and powder conditioning | Calculate evaporated water from matched incoming and outgoing product mass and moisture measurements, correcting for added or removed solids. | input mass and moisture; output mass and moisture; added solids; removed solids | Water released to air | `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `calc_refrigerant_balance` | Each refrigerant system | Calculate release from substance-specific opening stock, purchases, make-up, recovery, transfer, and closing stock; retain R-744 origin. | opening stock; purchases; make-up; recovery; transfer; closing stock | Substance-specific refrigerant release | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_direct_air_release` | Each calculated air-emission row | Multiply the matched process activity by a documented facility-specific factor for one substance, or use direct monitoring; no factor is supplied by this PCR. | matched activity; substance-specific factor or direct measurement | Mass of one substance released | `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_water_pollutant_load` | Each wastewater-pollutant row | Multiply matched effluent volume by the measured concentration for the same stream and period, with explicit unit conversion. | effluent volume; pollutant concentration; unit conversion | Pollutant mass to water | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_packaging_scrap` | Each packaging component | Reconcile component issues, packaged units, returned stock, and same-material scrap without including packaging in reference-product mass. | component issue; returned stock; packaged-unit count; scrap mass | Net component input and same-material scrap | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | Reference product | Demonstrate CPC 21183, exact species, exact meat or edible-organ identity, ordered route, finished state, food edibility, and exclusion of packaging mass. | Product specification; classification record; batch release; reference UUID |
| `dq_route_traceability` | Preservation and powder route | Preserve the enterprise flow diagram, route code, operation sequence, equipment identity, time, temperature, humidity, pressure, airflow, formulation, and finished storage state where applicable. | Approved flow diagram; batch sheet; equipment log; state record |
| `dq_primary_foreground` | Foreground operations | Use facility-specific primary records for every material, ingredient, utility, refrigerant, packaging component, product, residue, wastewater stream, and direct release. | Meters; scales; invoices; stock ledgers; service logs; manifests; laboratory reports |
| `dq_temporal_coverage` | Reporting period | Cover a representative period including product mix, selected route, sanitation, storage, utility, and treatment variability. | Dated records; production calendar; completeness reconciliation |
| `dq_atomic_inventory` | Inventory rows | Preserve one exact exchange per row and maintain row-level closure with manifest unresolved-UUID entries. | Ordered row-id audit; UUID register; source-record crosswalk |
| `dq_mass_brine_balance` | Mass and brine balances | Reconcile exact product mass, formulation ingredients, water, brine uptake, purge, residues, moisture loss, and wastewater; explain residuals with evidence. | Mass-balance worksheet; brine-balance worksheet; reviewer approval |
| `dq_smoke_evidence` | Smoke treatment | Identify the actual smoke medium and method, prohibit undeclared or unsuitable smoke fuel, and retain monitoring or calculation evidence for every reported smoke substance. | Smoke-medium specification; generator log; control-device log; emission record |
| `dq_refrigerant_balance` | Cold systems | Identify each refrigerant and reconcile make-up, recovery, transfer, stock, and release for the same period; retain R-744 origin. | Cylinder weights; service logs; purchase and recovery records; substance balance |
| `dq_flour_route` | Edible flour or meal | Use the actual facility flow diagram and measurements for conditioning, drying, grinding, sieving, metal control, and bagging; do not infer a universal route. | Facility flow diagram; equipment list; meter mapping; food-safety validation |
| `dq_calculation_traceability` | Calculated values | Retain raw values, units, factors, formulas, conversions, provenance, and exact batch or period links. | Reproducible calculation file; source-record ids; calculation review |
| `dq_independent_review` | Dataset package | Review scope, identity, route, inventory completeness, allocations, calculations, data quality, unresolved UUIDs, and exclusions before lifecycle promotion. | Validation record; reviewer identity; issue disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | Reference flow | Require UUID 47ac991c-00e2-4c29-8df0-7a7b867c3e97, Product flow type, exact CPC 21183 scope, Mass property 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, kg, and exactly 1 kg net output. | `unsd-cpc-3-21183` |
| `validate_scope_lock` | Product identity | Require one exact species, one exact meat or edible organ, one ordered route sequence, one finished physical state, one storage state, and food-use status; reject mixed identity. | `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validate_exact_source_rows` | Source and intermediate inventory | Require exact species-and-tissue rows through every applicable process; an unlisted identity requires a new atomic row and cannot use an other-meat or other-offal selector. | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validate_route_sequence` | Process selection | Require documented inclusion decisions and ordered links for curing, drying, smoking, flour or meal production, packaging, sanitation, and on-site wastewater treatment. | `codex-cxs-192-1995`; `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `validate_atomic_exchange` | Inventory | Reject any selected flow that combines carriers, ingredients, smoke media, packaging components, products, wastes, wastewater pollutants, or emissions. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_actual_formulation` | Cure formulation | Require a product-specific approved recipe and foreground issue records for every included ingredient; legal permission and technical examples cannot populate default inputs. | `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `validate_smoke_medium` | Smoke treatment | Require one actual declared smoke medium and application method, separate control-device records, and substance-specific emission evidence; reject prohibited smoke fuel or waste. | `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279` |
| `validate_flour_route` | Edible flour or meal | Require enterprise-specific conditioning, drying, grinding, sieving, metal-control, and packaging records for each operation actually present; reject an assumed universal process. | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validate_reference_amount` | Amount modes | Require the reference output as the sole fixed value and prohibit invented fixed quantities, default factors, or ranges for non-reference rows. | `eu-pef-2021-2279` |
| `validate_unresolved_uuid` | Non-reference identities | Permit a blank UUID only when manifest.yaml contains matching selected_flow_candidates and rejected_candidates under the same row_id. | `eu-pef-2021-2279` |
| `validate_balances` | Foreground balances | Require species-and-tissue mass balance, cure or brine balance where applicable, moisture balance for drying, packaging reconciliation, and refrigerant balance. | `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_wastewater` | Wastewater | Require named wastewater inputs, matched discharge volume and concentration for each reported parameter, and documented off-site transfer when on-site treatment is absent. | `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_data_quality` | Foreground package | Require primary-record traceability, representative temporal coverage, reproducible calculations, complete disclosures, and independent review evidence. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process package for 1 kg net qualified CPC 21183 product locked to one exact species, tissue, ordered preservation or powder route, and finished state |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product carbon footprinting, life-cycle assessment, supplier exchange, facility improvement, and reviewed aggregation when exact identity and route qualifiers remain explicit |
| excluded_use | Direct representation of another CPC product, inedible tissue meal, feed meal, mixed-species or mixed-tissue product, undeclared formulation, undeclared route, or assumed universal edible-powder process |
| required_metadata | PCR id; CPC code; reference UUID; exact species; exact meat or organ; food use; ordered route; actual formulation; smoke medium; equipment; process conditions; finished and storage state; packaging; net mass; facility; geography; technology; batch; period; allocation; residue destinations; refrigerants; wastewater route; unresolved UUID register |
| required_quality_disclosure | Primary-data share; meter and scale coverage; shared-record allocations; mass, brine, moisture, water, and refrigerant balances; smoke-emission evidence; powder-route evidence; data gaps; calculation provenance; validation findings |
| update_trigger | Change in species, tissue, food use, formulation, cure method, drying technology, smoke medium or method, powder equipment, finished or storage state, refrigerant, thermal supply, packaging, sanitation chemistry, wastewater route, allocation, facility configuration, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21183` | Dataset（`dataset`） | United Nations Statistics Division, Central Product Classification Version 3.0, code 21183, retained raw file CPC_Ver_3.0_Structure_30Jun2025.csv, SHA-256 5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c, retrieved 2026-06-23T08:55:39.235Z; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact CPC 21183 boundary and the salted, brined, dried, smoked, edible-flour, and edible-meal product states |
| `ec-jrc-sa-bref-jrc135916` | Official guidance（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries, JRC135916, DOI 10.2760/18199; https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Received meat and offal handling, trimming, sanitation, utilities, specific residues, wastewater, emissions, and foreground process structure; no quantitative default imported |
| `eu-pef-2021-2279` | Official guidance（`official_guidance`） | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text; https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific inventory, company-specific foreground data, completeness, allocation, transparency, calculation traceability, data quality, and verification |
| `codex-cxs-192-1995` | Standard（`standard`） | Codex Alimentarius, General Standard for Food Additives, CXS 192-1995, current official text; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B192-1995%2FCXS_192e.pdf | Separation of dry curing, immersion brining, brine injection, hot-air drying, and vacuum drying; permitted additives are not treated as actual formulations or default amounts |
| `codex-cxc-58-2005` | Standard（`standard`） | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B58-2005%2FCXC_058e.pdf | Species and tissue identity control, hygienic preparation, dried-product moisture protection, packaging, metal-fragment control, and rejected-tissue separation |
| `codex-cxc-68-2009` | Standard（`standard`） | Codex Alimentarius, Code of Practice for the Reduction of Contamination of Food with Polycyclic Aromatic Hydrocarbons from Smoking and Direct Drying Processes, CXC 68-2009; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B68-2009%2FCXC_068e.pdf | Natural-smoke and smoke-condensate route identity, smoke-medium restrictions, direct and indirect smoke controls, condensate and tar management, and substance-specific monitoring |
| `fao-meat-preservation-1990` | Official guidance（`official_guidance`） | Food and Agriculture Organization of the United Nations, Manual on Simple Methods of Meat Preservation, Animal Production and Health Paper 79, 1990; https://www.fao.org/4/x6932e/x6932e00.htm | Dry salting and brine preparation as separate operations, drainage, drying airflow, wood smoke, moisture control, packaging components, and quality records; example quantities are not imported |
| `eu-fdm-bat-2019-2031` | Official guidance（`official_guidance`） | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries; https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Separate water, electricity, heat, raw-material, residue, wastewater, waste-gas, cleaning, refrigeration, chloride, and pollutant records; BAT levels are not product defaults |
| `us-epa-ap42-meat-smokehouses` | Official guidance（`official_guidance`） | United States Environmental Protection Agency, AP-42 Section 9.5.2 Meat Smokehouses; https://www.epa.gov/sites/default/files/2020-10/documents/c9s05-2.pdf | Hardwood-chip, hardwood-sawdust, liquid-smoke, electric-heat, steam-heat, gas-heat, smoke-control, and individual smoke-pollutant screening; AP-42 factors are not imported |
