---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-buffalo-fresh-chilled-or-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Edible offal of buffalo, fresh, chilled or frozen

## 1. Scope and Applicability

This PCR applies to edible buffalo organs released for human consumption in exactly one declared state: fresh, chilled, or frozen. It covers organ-specific products such as liver, heart, kidney, tongue, brain, tripe, small intestine, large intestine, lung, and spleen. Each foreground dataset declares one exact organ identity; a market-recognized edible buffalo organ not enumerated here requires its own atomic rows through every applicable process before release and must never be represented by an “other offal” collection flow.

The foreground boundary begins with accepted live buffalo at slaughterhouse receipt and ends with 1 kg net qualified edible offal released at the facility gate after organ recovery, separation, trimming, washing, exactly one state-conditioning branch, packaging, sanitation, and applicable on-site wastewater treatment. Buffalo husbandry and inbound transport are upstream. Distribution, retail, preparation, consumption, and end-of-life are downstream.

Buffalo skeletal meat, inedible organs, mixed-species offal, offal from non-buffalo animals, and cooked, cured, smoked, dried, salted, or otherwise preserved offal outside the fresh, chilled, or frozen states are excluded from the reference product. Specific carcass products, blood, hide, head frame, horn, hoof, fat, tail, rejected organs, wastewater, treatment residues, and direct emissions remain visible as atomic exchanges for completeness and allocation. The cited sources support classification scope, process structure, primary-data collection, allocation, transparency, quality, and verification; this PCR imports no default quantities, factors, or ranges from them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-buffalo-fresh-chilled-or-frozen |
| classification_refs | CPC 3.0: 21152, exact |
| covered_products | One declared edible buffalo organ released fresh, chilled, or frozen for human consumption |
| excluded_products | Buffalo skeletal meat; inedible buffalo organs; mixed-species offal; non-buffalo offal; cooked, cured, smoked, dried, salted, or otherwise preserved offal |
| representative_product | Net qualified buffalo liver, heart, kidney, tongue, brain, tripe, small intestine, large intestine, lung, spleen, or another exactly named edible buffalo organ |
| production_route | Live-buffalo receipt; slaughter; bleeding; evisceration; organ recovery; organ separation; trimming; washing; one mutually exclusive state branch; packaging; sanitation; conditional on-site wastewater treatment |
| market_state | Exactly one of fresh, chilled, or frozen, with organ identity, release temperature, packaging, facility, and batch declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one exactly identified edible buffalo organ for human consumption |
| How much | 1 kg net qualified product, excluding packaging mass |
| How well | The declared organ passes facility and applicable legal edibility requirements and retains one unambiguous fresh, chilled, or frozen state |
| How long or cycle | One organ batch from accepted live buffalo through facility-gate release; state-conditioning and storage duration are declared |
| reference_flow_link | ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net qualified edible buffalo offal, excluding packaging mass |
| Reference product flow | Edible offal of buffalo, fresh, chilled or frozen `ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact organ identity; buffalo species or declared taxon; human-consumption edibility status; exactly one market state; fresh handling time or chilled storage temperature or frozen storage temperature; trimming and cleaning specification; whole organ or declared cut form; packaging or bulk configuration; net product mass excluding packaging; facility; batch; reporting period; evidence excluding skeletal meat; evidence excluding non-edible offal; evidence excluding non-buffalo species |

Every qualifier listed above must appear in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. A data package with a missing organ identity or more than one market state is not conformant.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Set the sole reference output to exactly 1 kg net qualified edible buffalo organ and exclude packaging mass. |
| `organ_identity` | Every organ input, intermediate, reject, and output | Mass | kg | Keep each named organ on its own row and preserve identity through slaughter, preparation, state conditioning, and packaging. |
| `state_identity` | Reference lot and state-conditioned intermediates | Mass | kg | Assign exactly one of fresh, chilled, or frozen to each reference lot; do not aggregate states in one reference quantity. |
| `net_edible_mass` | Edible organ, co-product, reject, and solid residue | Mass | kg | Use calibrated gross and tare measurements, preserve batch links, and report each physical mass once. |
| `electricity_energy` | Each process-specific electricity input | Energy | kWh | Record receipt, slaughter, preparation, fresh handling, chilling, freezing, packaging, sanitation, and wastewater-treatment electricity independently. |
| `thermal_energy` | Purchased steam and purchased hot water | Energy | MJ | Meter each purchased thermal carrier separately and prevent double counting with fuel used for on-site heat generation. |
| `fuel_quantity` | Natural gas, diesel, and liquefied petroleum gas | Volume or Mass | m3 or kg | Record each fuel separately and document any density or energy conversion. |
| `water_volume` | Each water or wastewater stream | Volume | m3 | Measure each named stream separately before mixing where feasible and reconcile intake, transfer, treatment, and discharge. |
| `refrigerant_mass` | R-717, R-134a, and R-744 | Mass | kg | Maintain a substance-specific balance for every refrigerant actually present and keep make-up separate from emission. |
| `pollutant_mass` | Each air or water release | Mass | kg | Report one pollutant and one environmental compartment per row using matched foreground records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live buffalo accepted at slaughterhouse receipt with batch identity and net live mass recorded |
| starting_condition_role | Foreground entry condition; husbandry and inbound transport remain upstream datasets |
| product_classification_scope | CPC 21152 edible buffalo offal in one fresh, chilled, or frozen state; skeletal meat, inedible organs, non-buffalo offal, and further-preserved products are excluded |
| recursive_input_rule | If a CPC 21152 product re-enters a foreground operation, record the exactly named organ and state once as a product input and link its upstream dataset without duplicating prior production |
| upstream_dataset_requirement | Use transparent upstream datasets for husbandry, feed, veterinary inputs, inbound transport, purchased utilities, chemicals, packaging, refrigerants, and off-site waste treatment when included in study scope |
| disclosure | Declare organ identity, buffalo taxon, edibility status, state branch, time and temperature, trimming, packaging, facility, period, allocation, co-product destinations, refrigerants, wastewater route, and exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_classification` | Reference product | Limit the reference product to CPC 21152 edible buffalo offal that is fresh, chilled, or frozen; exclude skeletal meat and adjacent offal categories. | `unsd-cpc-3-21152` |
| `boundary_foreground_stages` | Foreground system | Include receipt, slaughter, bleeding, evisceration, organ recovery, organ preparation, one state branch, packaging, sanitation, and applicable on-site wastewater treatment. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_state_exclusivity` | State-conditioning routes | Include exactly one of fresh conditioning, chilling, or freezing for each reference lot and keep branch-specific utilities, refrigerants, rejects, and wastewaters separate. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_exact_organ` | Organ inventory | Use one exact organ per selected flow; when another edible organ is produced, add organ-specific rows rather than an aggregate or selector. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_upstream_downstream` | Study boundary | Treat buffalo husbandry and inbound transport as upstream and distribution, retail, preparation, consumption, and end-of-life as downstream unless a study extension is explicitly disclosed. | `eu-pef-2021-2279` |
| `boundary_wastewater` | On-site wastewater treatment | Include the treatment process only when at least one named foreground wastewater is treated on site; otherwise preserve the individual off-site transfer boundaries. | `ec-jrc-sa-bref-jrc135916` |
| `boundary_uuid_completeness` | Inventory completeness | Retain a specific material, energy, water, refrigerant, waste, wastewater, or emission row even when its non-reference Tiangong UUID is unresolved. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `buffalo_receipt_and_holding` | Buffalo receipt and holding | `required` | Include for every slaughterhouse dataset beginning with live buffalo. | Establishes accepted live-buffalo mass, holding utilities, mortality, manure, and washwater before slaughter. | Accepted live-buffalo mass associated with the declared 1 kg offal reference output. |
| `slaughter_bleeding_and_organ_recovery` | Slaughter, bleeding, and organ recovery | `required` | Include for every edible-offal dataset produced from accepted live buffalo. | Performs slaughter and evisceration, recovers each candidate edible organ separately, and records shared carcass products, residues, wastewater, utilities, and combustion releases. | Raw organ mass and shared slaughter inventory associated with the declared 1 kg offal reference output. |
| `offal_separation_trimming_and_washing` | Offal separation, trimming, and washing | `required` | Include for every declared edible organ before state-specific conditioning. | Separates one organ identity at a time, removes organ-specific rejects, washes the organ, and preserves organ-specific washwater and thermal records. | Cleaned eligible organ mass associated with the declared 1 kg reference output. |
| `fresh_offal_conditioning` | Fresh offal conditioning | `conditional` | Include only when the reference lot is released fresh; exclude the chilled and frozen branches for that lot. | Maintains the fresh state during short controlled handling and records each organ output and organ-specific rejection separately. | Fresh organ mass associated with the declared 1 kg fresh reference output. |
| `chilling_and_chilled_storage` | Chilling and chilled storage | `conditional` | Include only when the reference lot is released chilled; exclude the fresh and frozen branches for that lot. | Chills each eligible organ, stores it at the declared chilled temperature, and tracks refrigerant substances, water, ice, rejects, wastewater, and compressor oil separately. | Chilled organ mass associated with the declared 1 kg chilled reference output. |
| `freezing_and_frozen_storage` | Freezing and frozen storage | `conditional` | Include only when the reference lot is released frozen; exclude the fresh and chilled branches for that lot. | Freezes each eligible organ, stores it at the declared frozen temperature, and tracks glazing water, refrigerants, rejects, defrost water, and compressor oil independently. | Frozen organ mass associated with the declared 1 kg frozen reference output. |
| `packaging_and_release` | Packaging and product release | `required` | Include after exactly one declared state branch for each reference lot; record only packaging components and gases actually used. | Receives organ-specific fresh, chilled, or frozen material, records each packaging component, and releases the sole generic CPC 21152 reference flow with explicit organ and state qualifiers. | Exactly 1 kg net qualified edible buffalo offal in one declared state, excluding packaging mass. |
| `cleaning_and_disinfection` | Cleaning and disinfection | `required` | Include facility sanitation and retain each chemical or thermal carrier only when actually used. | Records water, power, each thermal carrier, each fuel, each cleaning chemical, each chemical-specific wastewater, solid sweepings, and individual combustion pollutants. | Sanitation activity allocated to the declared 1 kg reference output. |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include only when at least one named foreground wastewater stream is treated on site before discharge or transfer. | Receives each named wastewater separately, records each treatment consumable, separates residues, and reports each final water or air release as one exchange. | Treatment activity and discharge associated with the declared 1 kg reference output. |

### Process: Buffalo receipt and holding (`buffalo_receipt_and_holding`)

#### Inputs

##### Product flows

###### Live buffalo received (`receipt_live_buffalo`)

Live buffalo enters the Buffalo receipt and holding boundary as the single live buffalo received. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Live buffalo
- Flow property / unit: Mass / kg
- Amount rule: Measure net live mass with a calibrated livestock scale or weighbridge after subtracting documented vehicle or crate tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_live_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Holding drinking water (`receipt_holding_water`)

Potable water enters the Buffalo receipt and holding boundary as the single holding drinking water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Read this water input from a dedicated calibrated meter or document a causal allocation from a reconciled shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Holding-area electricity (`receipt_holding_electricity`)

Electricity, medium voltage enters the Buffalo receipt and holding boundary as the single holding-area electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live buffalo (`receipt_accepted_buffalo`)

Accepted live buffalo leaves the Buffalo receipt and holding boundary as the single accepted live buffalo. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Accepted live buffalo
- Flow property / unit: Mass / kg
- Amount rule: Measure net live mass with a calibrated livestock scale or weighbridge after subtracting documented vehicle or crate tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_live_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Dead-on-arrival buffalo carcass (`receipt_doa_buffalo`)

Dead-on-arrival buffalo carcass leaves the Buffalo receipt and holding boundary as the single dead-on-arrival buffalo carcass. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Dead-on-arrival buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo manure (`receipt_buffalo_manure`)

Buffalo manure leaves the Buffalo receipt and holding boundary as the single buffalo manure. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo manure
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Holding-area washwater (`receipt_holding_washwater`)

Buffalo holding-area washwater leaves the Buffalo receipt and holding boundary as the single holding-area washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo holding-area washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Slaughter, bleeding, and organ recovery (`slaughter_bleeding_and_organ_recovery`)

#### Inputs

##### Product flows

###### Accepted live buffalo input (`slaughter_accepted_buffalo`)

Accepted live buffalo enters the Slaughter, bleeding, and organ recovery boundary as the single accepted live buffalo input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Accepted live buffalo
- Flow property / unit: Mass / kg
- Amount rule: Measure net live mass with a calibrated livestock scale or weighbridge after subtracting documented vehicle or crate tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_live_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter process water (`slaughter_process_water`)

Process water enters the Slaughter, bleeding, and organ recovery boundary as the single slaughter process water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Read this water input from a dedicated calibrated meter or document a causal allocation from a reconciled shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter electricity (`slaughter_electricity`)

Electricity, medium voltage enters the Slaughter, bleeding, and organ recovery boundary as the single slaughter electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Purchased slaughter steam (`slaughter_purchased_steam`)

Steam, purchased enters the Slaughter, bleeding, and organ recovery boundary as the single purchased slaughter steam. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased steam crossing the facility boundary from a heat meter or supplier record, excluding internally generated heat already represented by fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Purchased slaughter hot water (`slaughter_purchased_hot_water`)

Hot water, purchased enters the Slaughter, bleeding, and organ recovery boundary as the single purchased slaughter hot water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased hot-water heat from measured flow and temperature or a supplier heat meter, excluding internally generated heat already represented by fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter natural gas (`slaughter_natural_gas`)

Natural gas enters the Slaughter, bleeding, and organ recovery boundary as the single slaughter natural gas. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Record natural gas consumed for this stage from a calibrated gas meter or a reconciled invoice allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter diesel (`slaughter_diesel`)

Diesel fuel enters the Slaughter, bleeding, and organ recovery boundary as the single slaughter diesel. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Reconcile diesel issued to this stage from tank, purchase, and closing-stock records, using a documented density conversion when needed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter liquefied petroleum gas (`slaughter_lpg`)

Liquefied petroleum gas enters the Slaughter, bleeding, and organ recovery boundary as the single slaughter liquefied petroleum gas. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Reconcile liquefied-petroleum-gas use from cylinder or tank issue, purchase, return, and stock records for this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Eviscerated buffalo carcass (`slaughter_eviscerated_carcass`)

Eviscerated buffalo carcass leaves the Slaughter, bleeding, and organ recovery boundary as the single eviscerated buffalo carcass. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Eviscerated buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo liver recovered (`slaughter_raw_liver`)

Buffalo liver, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo liver recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo heart recovered (`slaughter_raw_heart`)

Buffalo heart, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo heart recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo kidney recovered (`slaughter_raw_kidney`)

Buffalo kidney, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo kidney recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo tongue recovered (`slaughter_raw_tongue`)

Buffalo tongue, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo tongue recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo brain recovered (`slaughter_raw_brain`)

Buffalo brain, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo brain recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo tripe recovered (`slaughter_raw_tripe`)

Buffalo tripe, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo tripe recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo small intestine recovered (`slaughter_raw_small_intestine`)

Buffalo small intestine, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo small intestine recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small intestine, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo large intestine recovered (`slaughter_raw_large_intestine`)

Buffalo large intestine, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo large intestine recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large intestine, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo lung recovered (`slaughter_raw_lung`)

Buffalo lung, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo lung recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo spleen recovered (`slaughter_raw_spleen`)

Buffalo spleen, raw leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo spleen recovered. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_products`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered buffalo blood (`slaughter_recovered_blood`)

Recovered buffalo blood leaves the Slaughter, bleeding, and organ recovery boundary as the single recovered buffalo blood. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Recovered buffalo blood
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo hide (`slaughter_raw_hide`)

Raw buffalo hide leaves the Slaughter, bleeding, and organ recovery boundary as the single raw buffalo hide. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Raw buffalo hide
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo head frame (`slaughter_head_frame`)

Buffalo head frame leaves the Slaughter, bleeding, and organ recovery boundary as the single buffalo head frame. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo head frame
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo horn (`slaughter_horn`)

Buffalo horn leaves the Slaughter, bleeding, and organ recovery boundary as the single buffalo horn. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo horn
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo hoof (`slaughter_hoof`)

Buffalo hoof leaves the Slaughter, bleeding, and organ recovery boundary as the single buffalo hoof. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo hoof
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered buffalo fat (`slaughter_recovered_fat`)

Recovered buffalo fat leaves the Slaughter, bleeding, and organ recovery boundary as the single recovered buffalo fat. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Recovered buffalo fat
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo tail (`slaughter_tail`)

Buffalo tail leaves the Slaughter, bleeding, and organ recovery boundary as the single buffalo tail. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tail
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Discarded buffalo blood (`slaughter_discarded_blood`)

Discarded buffalo blood leaves the Slaughter, bleeding, and organ recovery boundary as the single discarded buffalo blood. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Discarded buffalo blood
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded buffalo hide (`slaughter_discarded_hide`)

Discarded raw buffalo hide leaves the Slaughter, bleeding, and organ recovery boundary as the single discarded buffalo hide. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Discarded raw buffalo hide
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded buffalo head frame (`slaughter_discarded_head_frame`)

Discarded buffalo head frame leaves the Slaughter, bleeding, and organ recovery boundary as the single discarded buffalo head frame. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Discarded buffalo head frame
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded buffalo horn (`slaughter_discarded_horn`)

Discarded buffalo horn leaves the Slaughter, bleeding, and organ recovery boundary as the single discarded buffalo horn. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Discarded buffalo horn
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded buffalo hoof (`slaughter_discarded_hoof`)

Discarded buffalo hoof leaves the Slaughter, bleeding, and organ recovery boundary as the single discarded buffalo hoof. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Discarded buffalo hoof
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded buffalo fat (`slaughter_discarded_fat`)

Discarded buffalo fat leaves the Slaughter, bleeding, and organ recovery boundary as the single discarded buffalo fat. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Discarded buffalo fat
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded buffalo tail (`slaughter_discarded_tail`)

Discarded buffalo tail leaves the Slaughter, bleeding, and organ recovery boundary as the single discarded buffalo tail. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Discarded buffalo tail
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo stomach contents (`slaughter_stomach_contents`)

Buffalo stomach contents leaves the Slaughter, bleeding, and organ recovery boundary as the single buffalo stomach contents. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo stomach contents
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo intestinal contents (`slaughter_intestinal_contents`)

Buffalo intestinal contents leaves the Slaughter, bleeding, and organ recovery boundary as the single buffalo intestinal contents. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Condemned buffalo carcass (`slaughter_condemned_carcass`)

Condemned buffalo carcass leaves the Slaughter, bleeding, and organ recovery boundary as the single condemned buffalo carcass. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Condemned buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### High-load slaughter wastewater (`slaughter_high_load_wastewater`)

High-organic-load buffalo slaughter wastewater leaves the Slaughter, bleeding, and organ recovery boundary as the single high-load slaughter wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: High-organic-load buffalo slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon-dioxide release from slaughter (`slaughter_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Slaughter, bleeding, and organ recovery boundary as the single fossil carbon-dioxide release from slaughter. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitrogen-oxide release from slaughter (`slaughter_nox_air`)

Nitrogen oxides, to air leaves the Slaughter, bleeding, and organ recovery boundary as the single nitrogen-oxide release from slaughter. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sulfur-oxide release from slaughter (`slaughter_sox_air`)

Sulfur oxides, to air leaves the Slaughter, bleeding, and organ recovery boundary as the single sulfur-oxide release from slaughter. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fine particulate release from slaughter (`slaughter_pm25_air`)

Particulate matter, < 2.5 µm, to air leaves the Slaughter, bleeding, and organ recovery boundary as the single fine particulate release from slaughter. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Particulate matter, < 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Coarse particulate release from slaughter (`slaughter_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air leaves the Slaughter, bleeding, and organ recovery boundary as the single coarse particulate release from slaughter. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Offal separation, trimming, and washing (`offal_separation_trimming_and_washing`)

#### Inputs

##### Product flows

###### Raw buffalo liver input (`prep_raw_liver`)

Buffalo liver, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo liver input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo heart input (`prep_raw_heart`)

Buffalo heart, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo heart input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo kidney input (`prep_raw_kidney`)

Buffalo kidney, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo kidney input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo tongue input (`prep_raw_tongue`)

Buffalo tongue, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo tongue input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo brain input (`prep_raw_brain`)

Buffalo brain, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo brain input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo tripe input (`prep_raw_tripe`)

Buffalo tripe, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo tripe input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo small intestine input (`prep_raw_small_intestine`)

Buffalo small intestine, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo small intestine input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small intestine, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo large intestine input (`prep_raw_large_intestine`)

Buffalo large intestine, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo large intestine input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large intestine, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo lung input (`prep_raw_lung`)

Buffalo lung, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo lung input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Raw buffalo spleen input (`prep_raw_spleen`)

Buffalo spleen, raw enters the Offal separation, trimming, and washing boundary as the single raw buffalo spleen input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen, raw
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Offal-washing process water (`prep_process_water`)

Process water enters the Offal separation, trimming, and washing boundary as the single offal-washing process water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Read this water input from a dedicated calibrated meter or document a causal allocation from a reconciled shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Offal-preparation electricity (`prep_electricity`)

Electricity, medium voltage enters the Offal separation, trimming, and washing boundary as the single offal-preparation electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Purchased offal-preparation steam (`prep_purchased_steam`)

Steam, purchased enters the Offal separation, trimming, and washing boundary as the single purchased offal-preparation steam. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased steam crossing the facility boundary from a heat meter or supplier record, excluding internally generated heat already represented by fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Purchased offal-preparation hot water (`prep_purchased_hot_water`)

Hot water, purchased enters the Offal separation, trimming, and washing boundary as the single purchased offal-preparation hot water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased hot-water heat from measured flow and temperature or a supplier heat meter, excluding internally generated heat already represented by fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Offal-preparation natural gas (`prep_natural_gas`)

Natural gas enters the Offal separation, trimming, and washing boundary as the single offal-preparation natural gas. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Record natural gas consumed for this stage from a calibrated gas meter or a reconciled invoice allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Offal-preparation diesel (`prep_diesel`)

Diesel fuel enters the Offal separation, trimming, and washing boundary as the single offal-preparation diesel. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Reconcile diesel issued to this stage from tank, purchase, and closing-stock records, using a documented density conversion when needed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Offal-preparation liquefied petroleum gas (`prep_lpg`)

Liquefied petroleum gas enters the Offal separation, trimming, and washing boundary as the single offal-preparation liquefied petroleum gas. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Reconcile liquefied-petroleum-gas use from cylinder or tank issue, purchase, return, and stock records for this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned buffalo liver output (`prep_cleaned_liver`)

Buffalo liver, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo liver output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo heart output (`prep_cleaned_heart`)

Buffalo heart, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo heart output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo kidney output (`prep_cleaned_kidney`)

Buffalo kidney, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo kidney output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo tongue output (`prep_cleaned_tongue`)

Buffalo tongue, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo tongue output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo brain output (`prep_cleaned_brain`)

Buffalo brain, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo brain output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo tripe output (`prep_cleaned_tripe`)

Buffalo tripe, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo tripe output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo small intestine output (`prep_cleaned_small_intestine`)

Buffalo small intestine, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo small intestine output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small intestine, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo large intestine output (`prep_cleaned_large_intestine`)

Buffalo large intestine, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo large intestine output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large intestine, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo lung output (`prep_cleaned_lung`)

Buffalo lung, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo lung output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo spleen output (`prep_cleaned_spleen`)

Buffalo spleen, cleaned leaves the Offal separation, trimming, and washing boundary as the single cleaned buffalo spleen output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Buffalo liver trimming waste (`prep_liver_trimming_waste`)

Buffalo liver trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo liver trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo heart trimming waste (`prep_heart_trimming_waste`)

Buffalo heart trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo heart trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo kidney trimming waste (`prep_kidney_trimming_waste`)

Buffalo kidney trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo kidney trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo tongue trimming waste (`prep_tongue_trimming_waste`)

Buffalo tongue trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo tongue trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo brain trimming waste (`prep_brain_trimming_waste`)

Buffalo brain trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo brain trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo tripe trimming waste (`prep_tripe_trimming_waste`)

Buffalo tripe trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo tripe trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo small intestine trimming waste (`prep_small_intestine_trimming_waste`)

Buffalo small-intestine trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo small intestine trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small-intestine trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo large intestine trimming waste (`prep_large_intestine_trimming_waste`)

Buffalo large-intestine trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo large intestine trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large-intestine trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo lung trimming waste (`prep_lung_trimming_waste`)

Buffalo lung trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo lung trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo spleen trimming waste (`prep_spleen_trimming_waste`)

Buffalo spleen trimming waste leaves the Offal separation, trimming, and washing boundary as the single buffalo spleen trimming waste. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_solid_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo liver washwater (`prep_liver_washwater`)

Buffalo liver washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo liver washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo heart washwater (`prep_heart_washwater`)

Buffalo heart washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo heart washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo kidney washwater (`prep_kidney_washwater`)

Buffalo kidney washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo kidney washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo tongue washwater (`prep_tongue_washwater`)

Buffalo tongue washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo tongue washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo brain washwater (`prep_brain_washwater`)

Buffalo brain washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo brain washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo tripe washwater (`prep_tripe_washwater`)

Buffalo tripe washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo tripe washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo small intestine washwater (`prep_small_intestine_washwater`)

Buffalo small-intestine washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo small intestine washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small-intestine washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo large intestine washwater (`prep_large_intestine_washwater`)

Buffalo large-intestine washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo large intestine washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large-intestine washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo lung washwater (`prep_lung_washwater`)

Buffalo lung washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo lung washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo spleen washwater (`prep_spleen_washwater`)

Buffalo spleen washwater leaves the Offal separation, trimming, and washing boundary as the single buffalo spleen washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_washwater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon-dioxide release from offal preparation (`prep_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Offal separation, trimming, and washing boundary as the single fossil carbon-dioxide release from offal preparation. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitrogen-oxide release from offal preparation (`prep_nox_air`)

Nitrogen oxides, to air leaves the Offal separation, trimming, and washing boundary as the single nitrogen-oxide release from offal preparation. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sulfur-oxide release from offal preparation (`prep_sox_air`)

Sulfur oxides, to air leaves the Offal separation, trimming, and washing boundary as the single sulfur-oxide release from offal preparation. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fine particulate release from offal preparation (`prep_pm25_air`)

Particulate matter, < 2.5 µm, to air leaves the Offal separation, trimming, and washing boundary as the single fine particulate release from offal preparation. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Particulate matter, < 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Coarse particulate release from offal preparation (`prep_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air leaves the Offal separation, trimming, and washing boundary as the single coarse particulate release from offal preparation. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Fresh offal conditioning (`fresh_offal_conditioning`)

#### Inputs

##### Product flows

###### Cleaned buffalo liver for fresh route (`fresh_cleaned_liver_input`)

Buffalo liver, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo liver for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo heart for fresh route (`fresh_cleaned_heart_input`)

Buffalo heart, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo heart for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo kidney for fresh route (`fresh_cleaned_kidney_input`)

Buffalo kidney, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo kidney for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo tongue for fresh route (`fresh_cleaned_tongue_input`)

Buffalo tongue, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo tongue for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo brain for fresh route (`fresh_cleaned_brain_input`)

Buffalo brain, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo brain for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo tripe for fresh route (`fresh_cleaned_tripe_input`)

Buffalo tripe, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo tripe for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo small intestine for fresh route (`fresh_cleaned_small_intestine_input`)

Buffalo small intestine, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo small intestine for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small intestine, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo large intestine for fresh route (`fresh_cleaned_large_intestine_input`)

Buffalo large intestine, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo large intestine for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large intestine, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo lung for fresh route (`fresh_cleaned_lung_input`)

Buffalo lung, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo lung for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo spleen for fresh route (`fresh_cleaned_spleen_input`)

Buffalo spleen, cleaned enters the Fresh offal conditioning boundary as the single cleaned buffalo spleen for fresh route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh-route handling electricity (`fresh_handling_electricity`)

Electricity, medium voltage enters the Fresh offal conditioning boundary as the single fresh-route handling electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh buffalo liver output (`fresh_liver_output`)

Fresh buffalo liver leaves the Fresh offal conditioning boundary as the single fresh buffalo liver output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo heart output (`fresh_heart_output`)

Fresh buffalo heart leaves the Fresh offal conditioning boundary as the single fresh buffalo heart output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo kidney output (`fresh_kidney_output`)

Fresh buffalo kidney leaves the Fresh offal conditioning boundary as the single fresh buffalo kidney output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo tongue output (`fresh_tongue_output`)

Fresh buffalo tongue leaves the Fresh offal conditioning boundary as the single fresh buffalo tongue output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo brain output (`fresh_brain_output`)

Fresh buffalo brain leaves the Fresh offal conditioning boundary as the single fresh buffalo brain output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo tripe output (`fresh_tripe_output`)

Fresh buffalo tripe leaves the Fresh offal conditioning boundary as the single fresh buffalo tripe output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo small intestine output (`fresh_small_intestine_output`)

Fresh buffalo small intestine leaves the Fresh offal conditioning boundary as the single fresh buffalo small intestine output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo large intestine output (`fresh_large_intestine_output`)

Fresh buffalo large intestine leaves the Fresh offal conditioning boundary as the single fresh buffalo large intestine output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo lung output (`fresh_lung_output`)

Fresh buffalo lung leaves the Fresh offal conditioning boundary as the single fresh buffalo lung output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo spleen output (`fresh_spleen_output`)

Fresh buffalo spleen leaves the Fresh offal conditioning boundary as the single fresh buffalo spleen output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected fresh buffalo liver (`fresh_liver_reject`)

Rejected fresh buffalo liver leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo liver. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo heart (`fresh_heart_reject`)

Rejected fresh buffalo heart leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo heart. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo kidney (`fresh_kidney_reject`)

Rejected fresh buffalo kidney leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo kidney. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo tongue (`fresh_tongue_reject`)

Rejected fresh buffalo tongue leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo tongue. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo brain (`fresh_brain_reject`)

Rejected fresh buffalo brain leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo brain. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo tripe (`fresh_tripe_reject`)

Rejected fresh buffalo tripe leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo tripe. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo small intestine (`fresh_small_intestine_reject`)

Rejected fresh buffalo small intestine leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo small intestine. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo large intestine (`fresh_large_intestine_reject`)

Rejected fresh buffalo large intestine leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo large intestine. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo lung (`fresh_lung_reject`)

Rejected fresh buffalo lung leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo lung. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected fresh buffalo spleen (`fresh_spleen_reject`)

Rejected fresh buffalo spleen leaves the Fresh offal conditioning boundary as the single rejected fresh buffalo spleen. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected fresh buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_rejects`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Chilling and chilled storage (`chilling_and_chilled_storage`)

#### Inputs

##### Product flows

###### Cleaned buffalo liver for chilled route (`chill_cleaned_liver_input`)

Buffalo liver, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo liver for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo heart for chilled route (`chill_cleaned_heart_input`)

Buffalo heart, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo heart for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo kidney for chilled route (`chill_cleaned_kidney_input`)

Buffalo kidney, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo kidney for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo tongue for chilled route (`chill_cleaned_tongue_input`)

Buffalo tongue, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo tongue for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo brain for chilled route (`chill_cleaned_brain_input`)

Buffalo brain, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo brain for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo tripe for chilled route (`chill_cleaned_tripe_input`)

Buffalo tripe, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo tripe for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo small intestine for chilled route (`chill_cleaned_small_intestine_input`)

Buffalo small intestine, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo small intestine for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small intestine, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo large intestine for chilled route (`chill_cleaned_large_intestine_input`)

Buffalo large intestine, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo large intestine for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large intestine, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo lung for chilled route (`chill_cleaned_lung_input`)

Buffalo lung, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo lung for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo spleen for chilled route (`chill_cleaned_spleen_input`)

Buffalo spleen, cleaned enters the Chilling and chilled storage boundary as the single cleaned buffalo spleen for chilled route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling process water (`chill_process_water`)

Process water enters the Chilling and chilled storage boundary as the single chilling process water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Read this water input from a dedicated calibrated meter or document a causal allocation from a reconciled shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling ice (`chill_ice`)

Ice enters the Chilling and chilled storage boundary as the single chilling ice. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Ice
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling electricity (`chill_electricity`)

Electricity, medium voltage enters the Chilling and chilled storage boundary as the single chilling electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-717 refrigerant make-up (`chill_r717_makeup`)

Ammonia refrigerant R-717 enters the Chilling and chilled storage boundary as the single r-717 refrigerant make-up. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Ammonia refrigerant R-717
- Flow property / unit: Mass / kg
- Amount rule: Measure make-up for this refrigerant substance from cylinder weights and reconcile purchases, recovery, transfers, stock, and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a refrigerant make-up (`chill_r134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant R-134a enters the Chilling and chilled storage boundary as the single r-134a refrigerant make-up. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant R-134a
- Flow property / unit: Mass / kg
- Amount rule: Measure make-up for this refrigerant substance from cylinder weights and reconcile purchases, recovery, transfers, stock, and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 refrigerant make-up (`chill_r744_makeup`)

Carbon dioxide refrigerant R-744 enters the Chilling and chilled storage boundary as the single r-744 refrigerant make-up. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide refrigerant R-744
- Flow property / unit: Mass / kg
- Amount rule: Measure make-up for this refrigerant substance from cylinder weights and reconcile purchases, recovery, transfers, stock, and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled buffalo liver output (`chill_liver_output`)

Chilled buffalo liver leaves the Chilling and chilled storage boundary as the single chilled buffalo liver output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo heart output (`chill_heart_output`)

Chilled buffalo heart leaves the Chilling and chilled storage boundary as the single chilled buffalo heart output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo kidney output (`chill_kidney_output`)

Chilled buffalo kidney leaves the Chilling and chilled storage boundary as the single chilled buffalo kidney output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo tongue output (`chill_tongue_output`)

Chilled buffalo tongue leaves the Chilling and chilled storage boundary as the single chilled buffalo tongue output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo brain output (`chill_brain_output`)

Chilled buffalo brain leaves the Chilling and chilled storage boundary as the single chilled buffalo brain output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo tripe output (`chill_tripe_output`)

Chilled buffalo tripe leaves the Chilling and chilled storage boundary as the single chilled buffalo tripe output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo small intestine output (`chill_small_intestine_output`)

Chilled buffalo small intestine leaves the Chilling and chilled storage boundary as the single chilled buffalo small intestine output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo large intestine output (`chill_large_intestine_output`)

Chilled buffalo large intestine leaves the Chilling and chilled storage boundary as the single chilled buffalo large intestine output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo lung output (`chill_lung_output`)

Chilled buffalo lung leaves the Chilling and chilled storage boundary as the single chilled buffalo lung output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo spleen output (`chill_spleen_output`)

Chilled buffalo spleen leaves the Chilling and chilled storage boundary as the single chilled buffalo spleen output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected chilled buffalo liver (`chill_liver_reject`)

Rejected chilled buffalo liver leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo liver. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo heart (`chill_heart_reject`)

Rejected chilled buffalo heart leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo heart. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo kidney (`chill_kidney_reject`)

Rejected chilled buffalo kidney leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo kidney. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo tongue (`chill_tongue_reject`)

Rejected chilled buffalo tongue leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo tongue. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo brain (`chill_brain_reject`)

Rejected chilled buffalo brain leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo brain. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo tripe (`chill_tripe_reject`)

Rejected chilled buffalo tripe leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo tripe. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo small intestine (`chill_small_intestine_reject`)

Rejected chilled buffalo small intestine leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo small intestine. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo large intestine (`chill_large_intestine_reject`)

Rejected chilled buffalo large intestine leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo large intestine. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo lung (`chill_lung_reject`)

Rejected chilled buffalo lung leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo lung. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected chilled buffalo spleen (`chill_spleen_reject`)

Rejected chilled buffalo spleen leaves the Chilling and chilled storage boundary as the single rejected chilled buffalo spleen. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected chilled buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling wastewater (`chill_process_wastewater`)

Buffalo-offal chilling wastewater leaves the Chilling and chilled storage boundary as the single chilling wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo-offal chilling wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled-storage defrost wastewater (`chill_defrost_wastewater`)

Chilled-storage defrost wastewater leaves the Chilling and chilled storage boundary as the single chilled-storage defrost wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled-storage defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste chilling-compressor oil (`chill_compressor_oil`)

Waste refrigeration compressor oil leaves the Chilling and chilled storage boundary as the single waste chilling-compressor oil. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste refrigeration compressor oil
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chill_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### R-717 ammonia release (`chill_ammonia_air`)

Ammonia, to air leaves the Chilling and chilled storage boundary as the single r-717 ammonia release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss of this one refrigerant substance from a substance-specific stock balance reconciled to recovery and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a release (`chill_r134a_air`)

1,1,1,2-Tetrafluoroethane, to air leaves the Chilling and chilled storage boundary as the single r-134a release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss of this one refrigerant substance from a substance-specific stock balance reconciled to recovery and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fossil R-744 carbon-dioxide release (`chill_r744_fossil_air`)

Carbon dioxide, fossil, to air leaves the Chilling and chilled storage boundary as the single fossil r-744 carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss of this one refrigerant substance from a substance-specific stock balance reconciled to recovery and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic R-744 carbon-dioxide release (`chill_r744_biogenic_air`)

Carbon dioxide, biogenic, to air leaves the Chilling and chilled storage boundary as the single biogenic r-744 carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss of this one refrigerant substance from a substance-specific stock balance reconciled to recovery and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Freezing and frozen storage (`freezing_and_frozen_storage`)

#### Inputs

##### Product flows

###### Cleaned buffalo liver for frozen route (`freeze_cleaned_liver_input`)

Buffalo liver, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo liver for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo heart for frozen route (`freeze_cleaned_heart_input`)

Buffalo heart, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo heart for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo kidney for frozen route (`freeze_cleaned_kidney_input`)

Buffalo kidney, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo kidney for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo tongue for frozen route (`freeze_cleaned_tongue_input`)

Buffalo tongue, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo tongue for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo brain for frozen route (`freeze_cleaned_brain_input`)

Buffalo brain, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo brain for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo tripe for frozen route (`freeze_cleaned_tripe_input`)

Buffalo tripe, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo tripe for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo small intestine for frozen route (`freeze_cleaned_small_intestine_input`)

Buffalo small intestine, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo small intestine for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small intestine, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo large intestine for frozen route (`freeze_cleaned_large_intestine_input`)

Buffalo large intestine, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo large intestine for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large intestine, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo lung for frozen route (`freeze_cleaned_lung_input`)

Buffalo lung, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo lung for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cleaned buffalo spleen for frozen route (`freeze_cleaned_spleen_input`)

Buffalo spleen, cleaned enters the Freezing and frozen storage boundary as the single cleaned buffalo spleen for frozen route. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen, cleaned
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Freezing glaze water (`freeze_glazing_water`)

Process water enters the Freezing and frozen storage boundary as the single freezing glaze water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Read this water input from a dedicated calibrated meter or document a causal allocation from a reconciled shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Freezing electricity (`freeze_electricity`)

Electricity, medium voltage enters the Freezing and frozen storage boundary as the single freezing electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-717 refrigerant make-up (`freeze_r717_makeup`)

Ammonia refrigerant R-717 enters the Freezing and frozen storage boundary as the single r-717 refrigerant make-up. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Ammonia refrigerant R-717
- Flow property / unit: Mass / kg
- Amount rule: Measure make-up for this refrigerant substance from cylinder weights and reconcile purchases, recovery, transfers, stock, and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a refrigerant make-up (`freeze_r134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant R-134a enters the Freezing and frozen storage boundary as the single r-134a refrigerant make-up. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant R-134a
- Flow property / unit: Mass / kg
- Amount rule: Measure make-up for this refrigerant substance from cylinder weights and reconcile purchases, recovery, transfers, stock, and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 refrigerant make-up (`freeze_r744_makeup`)

Carbon dioxide refrigerant R-744 enters the Freezing and frozen storage boundary as the single r-744 refrigerant make-up. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide refrigerant R-744
- Flow property / unit: Mass / kg
- Amount rule: Measure make-up for this refrigerant substance from cylinder weights and reconcile purchases, recovery, transfers, stock, and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen buffalo liver output (`freeze_liver_output`)

Frozen buffalo liver leaves the Freezing and frozen storage boundary as the single frozen buffalo liver output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo heart output (`freeze_heart_output`)

Frozen buffalo heart leaves the Freezing and frozen storage boundary as the single frozen buffalo heart output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo kidney output (`freeze_kidney_output`)

Frozen buffalo kidney leaves the Freezing and frozen storage boundary as the single frozen buffalo kidney output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo tongue output (`freeze_tongue_output`)

Frozen buffalo tongue leaves the Freezing and frozen storage boundary as the single frozen buffalo tongue output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo brain output (`freeze_brain_output`)

Frozen buffalo brain leaves the Freezing and frozen storage boundary as the single frozen buffalo brain output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo tripe output (`freeze_tripe_output`)

Frozen buffalo tripe leaves the Freezing and frozen storage boundary as the single frozen buffalo tripe output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo small intestine output (`freeze_small_intestine_output`)

Frozen buffalo small intestine leaves the Freezing and frozen storage boundary as the single frozen buffalo small intestine output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo large intestine output (`freeze_large_intestine_output`)

Frozen buffalo large intestine leaves the Freezing and frozen storage boundary as the single frozen buffalo large intestine output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo lung output (`freeze_lung_output`)

Frozen buffalo lung leaves the Freezing and frozen storage boundary as the single frozen buffalo lung output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo spleen output (`freeze_spleen_output`)

Frozen buffalo spleen leaves the Freezing and frozen storage boundary as the single frozen buffalo spleen output. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected frozen buffalo liver (`freeze_liver_reject`)

Rejected frozen buffalo liver leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo liver. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo heart (`freeze_heart_reject`)

Rejected frozen buffalo heart leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo heart. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo kidney (`freeze_kidney_reject`)

Rejected frozen buffalo kidney leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo kidney. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo tongue (`freeze_tongue_reject`)

Rejected frozen buffalo tongue leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo tongue. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo brain (`freeze_brain_reject`)

Rejected frozen buffalo brain leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo brain. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo tripe (`freeze_tripe_reject`)

Rejected frozen buffalo tripe leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo tripe. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo small intestine (`freeze_small_intestine_reject`)

Rejected frozen buffalo small intestine leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo small intestine. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo large intestine (`freeze_large_intestine_reject`)

Rejected frozen buffalo large intestine leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo large intestine. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo lung (`freeze_lung_reject`)

Rejected frozen buffalo lung leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo lung. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Rejected frozen buffalo spleen (`freeze_spleen_reject`)

Rejected frozen buffalo spleen leaves the Freezing and frozen storage boundary as the single rejected frozen buffalo spleen. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Rejected frozen buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Glazing wastewater (`freeze_glaze_wastewater`)

Buffalo-offal glazing wastewater leaves the Freezing and frozen storage boundary as the single glazing wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo-offal glazing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen-storage defrost wastewater (`freeze_defrost_wastewater`)

Frozen-storage defrost wastewater leaves the Freezing and frozen storage boundary as the single frozen-storage defrost wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen-storage defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste freezing-compressor oil (`freeze_compressor_oil`)

Waste refrigeration compressor oil leaves the Freezing and frozen storage boundary as the single waste freezing-compressor oil. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste refrigeration compressor oil
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freeze_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### R-717 ammonia release (`freeze_ammonia_air`)

Ammonia, to air leaves the Freezing and frozen storage boundary as the single r-717 ammonia release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss of this one refrigerant substance from a substance-specific stock balance reconciled to recovery and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freeze_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a release (`freeze_r134a_air`)

1,1,1,2-Tetrafluoroethane, to air leaves the Freezing and frozen storage boundary as the single r-134a release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss of this one refrigerant substance from a substance-specific stock balance reconciled to recovery and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freeze_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fossil R-744 carbon-dioxide release (`freeze_r744_fossil_air`)

Carbon dioxide, fossil, to air leaves the Freezing and frozen storage boundary as the single fossil r-744 carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss of this one refrigerant substance from a substance-specific stock balance reconciled to recovery and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freeze_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic R-744 carbon-dioxide release (`freeze_r744_biogenic_air`)

Carbon dioxide, biogenic, to air leaves the Freezing and frozen storage boundary as the single biogenic r-744 carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss of this one refrigerant substance from a substance-specific stock balance reconciled to recovery and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freeze_refrigerants`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Packaging and product release (`packaging_and_release`)

#### Inputs

##### Product flows

###### Fresh buffalo liver packaging input (`pack_fresh_liver_input`)

Fresh buffalo liver enters the Packaging and product release boundary as the single fresh buffalo liver packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo heart packaging input (`pack_fresh_heart_input`)

Fresh buffalo heart enters the Packaging and product release boundary as the single fresh buffalo heart packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo kidney packaging input (`pack_fresh_kidney_input`)

Fresh buffalo kidney enters the Packaging and product release boundary as the single fresh buffalo kidney packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo tongue packaging input (`pack_fresh_tongue_input`)

Fresh buffalo tongue enters the Packaging and product release boundary as the single fresh buffalo tongue packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo brain packaging input (`pack_fresh_brain_input`)

Fresh buffalo brain enters the Packaging and product release boundary as the single fresh buffalo brain packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo tripe packaging input (`pack_fresh_tripe_input`)

Fresh buffalo tripe enters the Packaging and product release boundary as the single fresh buffalo tripe packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo small intestine packaging input (`pack_fresh_small_intestine_input`)

Fresh buffalo small intestine enters the Packaging and product release boundary as the single fresh buffalo small intestine packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo large intestine packaging input (`pack_fresh_large_intestine_input`)

Fresh buffalo large intestine enters the Packaging and product release boundary as the single fresh buffalo large intestine packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo lung packaging input (`pack_fresh_lung_input`)

Fresh buffalo lung enters the Packaging and product release boundary as the single fresh buffalo lung packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fresh buffalo spleen packaging input (`pack_fresh_spleen_input`)

Fresh buffalo spleen enters the Packaging and product release boundary as the single fresh buffalo spleen packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Fresh buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo liver packaging input (`pack_chilled_liver_input`)

Chilled buffalo liver enters the Packaging and product release boundary as the single chilled buffalo liver packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo heart packaging input (`pack_chilled_heart_input`)

Chilled buffalo heart enters the Packaging and product release boundary as the single chilled buffalo heart packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo kidney packaging input (`pack_chilled_kidney_input`)

Chilled buffalo kidney enters the Packaging and product release boundary as the single chilled buffalo kidney packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo tongue packaging input (`pack_chilled_tongue_input`)

Chilled buffalo tongue enters the Packaging and product release boundary as the single chilled buffalo tongue packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo brain packaging input (`pack_chilled_brain_input`)

Chilled buffalo brain enters the Packaging and product release boundary as the single chilled buffalo brain packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo tripe packaging input (`pack_chilled_tripe_input`)

Chilled buffalo tripe enters the Packaging and product release boundary as the single chilled buffalo tripe packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo small intestine packaging input (`pack_chilled_small_intestine_input`)

Chilled buffalo small intestine enters the Packaging and product release boundary as the single chilled buffalo small intestine packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo large intestine packaging input (`pack_chilled_large_intestine_input`)

Chilled buffalo large intestine enters the Packaging and product release boundary as the single chilled buffalo large intestine packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo lung packaging input (`pack_chilled_lung_input`)

Chilled buffalo lung enters the Packaging and product release boundary as the single chilled buffalo lung packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled buffalo spleen packaging input (`pack_chilled_spleen_input`)

Chilled buffalo spleen enters the Packaging and product release boundary as the single chilled buffalo spleen packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo liver packaging input (`pack_frozen_liver_input`)

Frozen buffalo liver enters the Packaging and product release boundary as the single frozen buffalo liver packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo liver
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo heart packaging input (`pack_frozen_heart_input`)

Frozen buffalo heart enters the Packaging and product release boundary as the single frozen buffalo heart packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo heart
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo kidney packaging input (`pack_frozen_kidney_input`)

Frozen buffalo kidney enters the Packaging and product release boundary as the single frozen buffalo kidney packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo kidney
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo tongue packaging input (`pack_frozen_tongue_input`)

Frozen buffalo tongue enters the Packaging and product release boundary as the single frozen buffalo tongue packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo tongue
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo brain packaging input (`pack_frozen_brain_input`)

Frozen buffalo brain enters the Packaging and product release boundary as the single frozen buffalo brain packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo brain
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo tripe packaging input (`pack_frozen_tripe_input`)

Frozen buffalo tripe enters the Packaging and product release boundary as the single frozen buffalo tripe packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo tripe
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo small intestine packaging input (`pack_frozen_small_intestine_input`)

Frozen buffalo small intestine enters the Packaging and product release boundary as the single frozen buffalo small intestine packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo large intestine packaging input (`pack_frozen_large_intestine_input`)

Frozen buffalo large intestine enters the Packaging and product release boundary as the single frozen buffalo large intestine packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo lung packaging input (`pack_frozen_lung_input`)

Frozen buffalo lung enters the Packaging and product release boundary as the single frozen buffalo lung packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo lung
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen buffalo spleen packaging input (`pack_frozen_spleen_input`)

Frozen buffalo spleen enters the Packaging and product release boundary as the single frozen buffalo spleen packaging input. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen buffalo spleen
- Flow property / unit: Mass / kg
- Amount rule: Measure the net transferred mass on a calibrated scale and link the result to the organ-specific batch record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_organ_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging-line electricity (`packaging_electricity`)

Electricity, medium voltage enters the Packaging and product release boundary as the single packaging-line electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Linear-low-density-polyethylene film (`pack_lldpe_film`)

Linear low-density polyethylene film enters the Packaging and product release boundary as the single linear-low-density-polyethylene film. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Linear low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### High-density-polyethylene liner (`pack_hdpe_liner`)

High-density polyethylene liner enters the Packaging and product release boundary as the single high-density-polyethylene liner. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: High-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polyamide film (`pack_polyamide_film`)

Polyamide film enters the Packaging and product release boundary as the single polyamide film. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Polyamide film
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polypropylene tray (`pack_polypropylene_tray`)

Polypropylene tray enters the Packaging and product release boundary as the single polypropylene tray. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Expanded-polystyrene tray (`pack_eps_tray`)

Expanded polystyrene tray enters the Packaging and product release boundary as the single expanded-polystyrene tray. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Expanded polystyrene tray
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cellulose absorbent pad (`pack_cellulose_pad`)

Cellulose absorbent pad enters the Packaging and product release boundary as the single cellulose absorbent pad. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Cellulose absorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Paper label (`pack_paper_label`)

Paper label enters the Packaging and product release boundary as the single paper label. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Corrugated-fibreboard box (`pack_corrugated_box`)

Corrugated fibreboard box enters the Packaging and product release boundary as the single corrugated-fibreboard box. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polypropylene strap (`pack_polypropylene_strap`)

Polypropylene strap enters the Packaging and product release boundary as the single polypropylene strap. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Polypropylene strap
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Reusable high-density-polyethylene crate (`pack_reusable_hdpe_crate`)

High-density polyethylene reusable crate enters the Packaging and product release boundary as the single reusable high-density-polyethylene crate. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: High-density polyethylene reusable crate
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wooden pallet (`pack_wooden_pallet`)

Wooden pallet enters the Packaging and product release boundary as the single wooden pallet. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measure net consumption of this single packaging component from issue and stock records; for a reusable item use actual loss or replacement consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitrogen packaging gas (`pack_nitrogen_gas`)

Nitrogen gas enters the Packaging and product release boundary as the single nitrogen packaging gas. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_gases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Carbon-dioxide packaging gas (`pack_carbon_dioxide_gas`)

Carbon dioxide gas enters the Packaging and product release boundary as the single carbon-dioxide packaging gas. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide gas
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_gases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dry-ice cooling medium (`pack_dry_ice`)

Carbon dioxide, solid enters the Packaging and product release boundary as the single dry-ice cooling medium. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, solid
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_gases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified edible buffalo offal reference output (`reference_edible_buffalo_offal`)

Edible offal of buffalo, fresh, chilled or frozen is the sole reference flow. Exactly one organ identity and one market state are declared for its fixed 1 kg net output, with packaging mass excluded.

- Selected flow: Edible offal of buffalo, fresh, chilled or frozen `ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c`
- Flow property / unit: Mass / kg
- Amount rule: Fix the reference output at exactly 1 kg net qualified edible buffalo offal in the declared fresh, chilled, or frozen state; exclude packaging mass.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-21152`; `eu-pef-2021-2279`

##### Waste flows

###### Waste linear-low-density-polyethylene film (`pack_waste_lldpe_film`)

Waste linear low-density polyethylene film leaves the Packaging and product release boundary as the single waste linear-low-density-polyethylene film. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste linear low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste high-density-polyethylene liner (`pack_waste_hdpe_liner`)

Waste high-density polyethylene liner leaves the Packaging and product release boundary as the single waste high-density-polyethylene liner. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste high-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste polyamide film (`pack_waste_polyamide_film`)

Waste polyamide film leaves the Packaging and product release boundary as the single waste polyamide film. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste polyamide film
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste polypropylene tray (`pack_waste_polypropylene_tray`)

Waste polypropylene tray leaves the Packaging and product release boundary as the single waste polypropylene tray. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste expanded-polystyrene tray (`pack_waste_eps_tray`)

Waste expanded polystyrene tray leaves the Packaging and product release boundary as the single waste expanded-polystyrene tray. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste expanded polystyrene tray
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste cellulose absorbent pad (`pack_waste_cellulose_pad`)

Waste cellulose absorbent pad leaves the Packaging and product release boundary as the single waste cellulose absorbent pad. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste cellulose absorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste paper label (`pack_waste_paper_label`)

Waste paper label leaves the Packaging and product release boundary as the single waste paper label. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste paper label
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste corrugated-fibreboard box (`pack_waste_corrugated_box`)

Waste corrugated fibreboard box leaves the Packaging and product release boundary as the single waste corrugated-fibreboard box. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste polypropylene strap (`pack_waste_polypropylene_strap`)

Waste polypropylene strap leaves the Packaging and product release boundary as the single waste polypropylene strap. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste polypropylene strap
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste high-density-polyethylene crate (`pack_waste_hdpe_crate`)

Waste high-density polyethylene crate leaves the Packaging and product release boundary as the single waste high-density-polyethylene crate. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste high-density polyethylene crate
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste wooden pallet (`pack_waste_wooden_pallet`)

Waste wooden pallet leaves the Packaging and product release boundary as the single waste wooden pallet. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging-area washwater (`packaging_washwater`)

Buffalo-offal packaging washwater leaves the Packaging and product release boundary as the single packaging-area washwater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo-offal packaging washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Nitrogen packaging-gas release (`pack_nitrogen_air`)

Nitrogen, to air leaves the Packaging and product release boundary as the single nitrogen packaging-gas release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitrogen, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one gas release from a matched material balance or calibrated direct measurement while retaining origin and air compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_gas_releases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fossil packaging-gas carbon-dioxide release (`pack_gas_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Packaging and product release boundary as the single fossil packaging-gas carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one gas release from a matched material balance or calibrated direct measurement while retaining origin and air compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_gas_releases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic packaging-gas carbon-dioxide release (`pack_gas_biogenic_co2_air`)

Carbon dioxide, biogenic, to air leaves the Packaging and product release boundary as the single biogenic packaging-gas carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one gas release from a matched material balance or calibrated direct measurement while retaining origin and air compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_gas_releases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fossil dry-ice carbon-dioxide release (`pack_dry_ice_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Packaging and product release boundary as the single fossil dry-ice carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one gas release from a matched material balance or calibrated direct measurement while retaining origin and air compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_gas_releases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic dry-ice carbon-dioxide release (`pack_dry_ice_biogenic_co2_air`)

Carbon dioxide, biogenic, to air leaves the Packaging and product release boundary as the single biogenic dry-ice carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one gas release from a matched material balance or calibrated direct measurement while retaining origin and air compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_gas_releases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Cleaning and disinfection (`cleaning_and_disinfection`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

Process water enters the Cleaning and disinfection boundary as the single sanitation water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Read this water input from a dedicated calibrated meter or document a causal allocation from a reconciled shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation electricity (`sanitation_electricity`)

Electricity, medium voltage enters the Cleaning and disinfection boundary as the single sanitation electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Purchased sanitation steam (`sanitation_steam`)

Steam, purchased enters the Cleaning and disinfection boundary as the single purchased sanitation steam. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased steam crossing the facility boundary from a heat meter or supplier record, excluding internally generated heat already represented by fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Purchased sanitation hot water (`sanitation_hot_water`)

Hot water, purchased enters the Cleaning and disinfection boundary as the single purchased sanitation hot water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased hot-water heat from measured flow and temperature or a supplier heat meter, excluding internally generated heat already represented by fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation natural gas (`sanitation_natural_gas`)

Natural gas enters the Cleaning and disinfection boundary as the single sanitation natural gas. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Record natural gas consumed for this stage from a calibrated gas meter or a reconciled invoice allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation diesel (`sanitation_diesel`)

Diesel fuel enters the Cleaning and disinfection boundary as the single sanitation diesel. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Reconcile diesel issued to this stage from tank, purchase, and closing-stock records, using a documented density conversion when needed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation liquefied petroleum gas (`sanitation_lpg`)

Liquefied petroleum gas enters the Cleaning and disinfection boundary as the single sanitation liquefied petroleum gas. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Reconcile liquefied-petroleum-gas use from cylinder or tank issue, purchase, return, and stock records for this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hydroxide cleaner (`sanitation_sodium_hydroxide`)

Sodium hydroxide enters the Cleaning and disinfection boundary as the single sodium-hydroxide cleaner. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemicals`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric-acid cleaner (`sanitation_nitric_acid`)

Nitric acid enters the Cleaning and disinfection boundary as the single nitric-acid cleaner. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemicals`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric-acid cleaner (`sanitation_phosphoric_acid`)

Phosphoric acid enters the Cleaning and disinfection boundary as the single phosphoric-acid cleaner. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemicals`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic-acid disinfectant (`sanitation_peracetic_acid`)

Peracetic acid enters the Cleaning and disinfection boundary as the single peracetic-acid disinfectant. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemicals`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hypochlorite disinfectant (`sanitation_sodium_hypochlorite`)

Sodium hypochlorite enters the Cleaning and disinfection boundary as the single sodium-hypochlorite disinfectant. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemicals`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium-chloride disinfectant (`sanitation_benzalkonium_chloride`)

Benzalkonium chloride enters the Cleaning and disinfection boundary as the single benzalkonium-chloride disinfectant. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Benzalkonium chloride
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemicals`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sodium-hydroxide sanitation wastewater (`sanitation_sodium_hydroxide_wastewater`)

Sodium-hydroxide sanitation wastewater leaves the Cleaning and disinfection boundary as the single sodium-hydroxide sanitation wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sodium-hydroxide sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric-acid sanitation wastewater (`sanitation_nitric_acid_wastewater`)

Nitric-acid sanitation wastewater leaves the Cleaning and disinfection boundary as the single nitric-acid sanitation wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric-acid sanitation wastewater (`sanitation_phosphoric_acid_wastewater`)

Phosphoric-acid sanitation wastewater leaves the Cleaning and disinfection boundary as the single phosphoric-acid sanitation wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Phosphoric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic-acid sanitation wastewater (`sanitation_peracetic_acid_wastewater`)

Peracetic-acid sanitation wastewater leaves the Cleaning and disinfection boundary as the single peracetic-acid sanitation wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Peracetic-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hypochlorite sanitation wastewater (`sanitation_hypochlorite_wastewater`)

Sodium-hypochlorite sanitation wastewater leaves the Cleaning and disinfection boundary as the single sodium-hypochlorite sanitation wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sodium-hypochlorite sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium-chloride sanitation wastewater (`sanitation_benzalkonium_wastewater`)

Benzalkonium-chloride sanitation wastewater leaves the Cleaning and disinfection boundary as the single benzalkonium-chloride sanitation wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Benzalkonium-chloride sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Final-rinse sanitation wastewater (`sanitation_final_rinse_wastewater`)

Final-rinse sanitation wastewater leaves the Cleaning and disinfection boundary as the single final-rinse sanitation wastewater. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Final-rinse sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation floor sweepings (`sanitation_floor_sweepings`)

Buffalo-offal facility floor sweepings leaves the Cleaning and disinfection boundary as the single sanitation floor sweepings. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo-offal facility floor sweepings
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon-dioxide sanitation release (`sanitation_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves the Cleaning and disinfection boundary as the single fossil carbon-dioxide sanitation release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitrogen-oxide sanitation release (`sanitation_nox_air`)

Nitrogen oxides, to air leaves the Cleaning and disinfection boundary as the single nitrogen-oxide sanitation release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sulfur-oxide sanitation release (`sanitation_sox_air`)

Sulfur oxides, to air leaves the Cleaning and disinfection boundary as the single sulfur-oxide sanitation release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fine particulate sanitation release (`sanitation_pm25_air`)

Particulate matter, < 2.5 µm, to air leaves the Cleaning and disinfection boundary as the single fine particulate sanitation release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Particulate matter, < 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Coarse particulate sanitation release (`sanitation_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air leaves the Cleaning and disinfection boundary as the single coarse particulate sanitation release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one air pollutant from the matched stage fuel record and a documented facility factor or direct stack measurement; this PCR supplies no default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wwt_electricity`)

Electricity, medium voltage enters the On-site wastewater treatment boundary as the single wastewater-treatment electricity. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Read electricity for this named stage from a submeter or allocate a reconciled shared meter with a documented operating-time, load, or throughput driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Treatment-polymer make-up water (`wwt_makeup_water`)

Process water enters the On-site wastewater treatment boundary as the single treatment-polymer make-up water. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Read this water input from a dedicated calibrated meter or document a causal allocation from a reconciled shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Ferric-chloride coagulant (`wwt_ferric_chloride`)

Ferric chloride enters the On-site wastewater treatment boundary as the single ferric-chloride coagulant. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Anionic-polyacrylamide flocculant (`wwt_polyacrylamide`)

Anionic polyacrylamide enters the On-site wastewater treatment boundary as the single anionic-polyacrylamide flocculant. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater-treatment sodium hydroxide (`wwt_sodium_hydroxide`)

Sodium hydroxide enters the On-site wastewater treatment boundary as the single wastewater-treatment sodium hydroxide. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater-treatment sulfuric acid (`wwt_sulfuric_acid`)

Sulfuric acid enters the On-site wastewater treatment boundary as the single wastewater-treatment sulfuric acid. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Reconcile net use of this chemical from concentration, dosing, purchase, return, opening-stock, and closing-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumables`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Holding-area washwater influent (`wwt_holding_washwater`)

Buffalo holding-area washwater enters the On-site wastewater treatment boundary as the single holding-area washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo holding-area washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter wastewater influent (`wwt_slaughter_wastewater`)

High-organic-load buffalo slaughter wastewater enters the On-site wastewater treatment boundary as the single slaughter wastewater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: High-organic-load buffalo slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo liver washwater influent (`wwt_liver_washwater`)

Buffalo liver washwater enters the On-site wastewater treatment boundary as the single buffalo liver washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo liver washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo heart washwater influent (`wwt_heart_washwater`)

Buffalo heart washwater enters the On-site wastewater treatment boundary as the single buffalo heart washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo heart washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo kidney washwater influent (`wwt_kidney_washwater`)

Buffalo kidney washwater enters the On-site wastewater treatment boundary as the single buffalo kidney washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo kidney washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo tongue washwater influent (`wwt_tongue_washwater`)

Buffalo tongue washwater enters the On-site wastewater treatment boundary as the single buffalo tongue washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tongue washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo brain washwater influent (`wwt_brain_washwater`)

Buffalo brain washwater enters the On-site wastewater treatment boundary as the single buffalo brain washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo brain washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo tripe washwater influent (`wwt_tripe_washwater`)

Buffalo tripe washwater enters the On-site wastewater treatment boundary as the single buffalo tripe washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo tripe washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo small intestine washwater influent (`wwt_small_intestine_washwater`)

Buffalo small-intestine washwater enters the On-site wastewater treatment boundary as the single buffalo small intestine washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo small-intestine washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo large intestine washwater influent (`wwt_large_intestine_washwater`)

Buffalo large-intestine washwater enters the On-site wastewater treatment boundary as the single buffalo large intestine washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo large-intestine washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo lung washwater influent (`wwt_lung_washwater`)

Buffalo lung washwater enters the On-site wastewater treatment boundary as the single buffalo lung washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo lung washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Buffalo spleen washwater influent (`wwt_spleen_washwater`)

Buffalo spleen washwater enters the On-site wastewater treatment boundary as the single buffalo spleen washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo spleen washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling wastewater influent (`wwt_chilling_wastewater`)

Buffalo-offal chilling wastewater enters the On-site wastewater treatment boundary as the single chilling wastewater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo-offal chilling wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilled-storage defrost influent (`wwt_chill_defrost_wastewater`)

Chilled-storage defrost wastewater enters the On-site wastewater treatment boundary as the single chilled-storage defrost influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chilled-storage defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Glazing wastewater influent (`wwt_glazing_wastewater`)

Buffalo-offal glazing wastewater enters the On-site wastewater treatment boundary as the single glazing wastewater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo-offal glazing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen-storage defrost influent (`wwt_freeze_defrost_wastewater`)

Frozen-storage defrost wastewater enters the On-site wastewater treatment boundary as the single frozen-storage defrost influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Frozen-storage defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging washwater influent (`wwt_packaging_washwater`)

Buffalo-offal packaging washwater enters the On-site wastewater treatment boundary as the single packaging washwater influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Buffalo-offal packaging washwater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hydroxide sanitation influent (`wwt_sodium_hydroxide_wastewater`)

Sodium-hydroxide sanitation wastewater enters the On-site wastewater treatment boundary as the single sodium-hydroxide sanitation influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sodium-hydroxide sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric-acid sanitation influent (`wwt_nitric_acid_wastewater`)

Nitric-acid sanitation wastewater enters the On-site wastewater treatment boundary as the single nitric-acid sanitation influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric-acid sanitation influent (`wwt_phosphoric_acid_wastewater`)

Phosphoric-acid sanitation wastewater enters the On-site wastewater treatment boundary as the single phosphoric-acid sanitation influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Phosphoric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic-acid sanitation influent (`wwt_peracetic_acid_wastewater`)

Peracetic-acid sanitation wastewater enters the On-site wastewater treatment boundary as the single peracetic-acid sanitation influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Peracetic-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hypochlorite sanitation influent (`wwt_hypochlorite_wastewater`)

Sodium-hypochlorite sanitation wastewater enters the On-site wastewater treatment boundary as the single sodium-hypochlorite sanitation influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Sodium-hypochlorite sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium-chloride sanitation influent (`wwt_benzalkonium_wastewater`)

Benzalkonium-chloride sanitation wastewater enters the On-site wastewater treatment boundary as the single benzalkonium-chloride sanitation influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Benzalkonium-chloride sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Final-rinse sanitation influent (`wwt_final_rinse_wastewater`)

Final-rinse sanitation wastewater enters the On-site wastewater treatment boundary as the single final-rinse sanitation influent. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Final-rinse sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measure this named wastewater before mixing with a dedicated flow meter, tank record, or documented hydraulic allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered wastewater grease (`wwt_recovered_grease`)

Recovered wastewater grease leaves the On-site wastewater treatment boundary as the single recovered wastewater grease. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Recovered wastewater grease
- Flow property / unit: Mass / kg
- Amount rule: Measure the separately recovered mass and retain its declared beneficial destination; classify the same mass only once as product or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Wastewater screenings (`wwt_screenings`)

Wastewater screenings leaves the On-site wastewater treatment boundary as the single wastewater screenings. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dissolved-air-flotation sludge (`wwt_daf_sludge`)

Dissolved-air-flotation sludge leaves the On-site wastewater treatment boundary as the single dissolved-air-flotation sludge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Dissolved-air-flotation sludge
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biological wastewater sludge (`wwt_biological_sludge`)

Biological wastewater sludge leaves the On-site wastewater treatment boundary as the single biological wastewater sludge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Biological wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded wastewater grease (`wwt_discarded_grease`)

Discarded wastewater grease leaves the On-site wastewater treatment boundary as the single discarded wastewater grease. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Discarded wastewater grease
- Flow property / unit: Mass / kg
- Amount rule: Measure this named waste separately by calibrated container weighing and destination records, preventing duplicate reporting as a recovered product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_residues`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Treated-effluent discharge (`wwt_treated_effluent`)

Treated wastewater effluent, to surface water leaves the On-site wastewater treatment boundary as the single treated-effluent discharge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Treated wastewater effluent, to surface water
- Flow property / unit: Volume / m3
- Amount rule: Record final treated-effluent volume for the same discharge point and period used by the pollutant measurements.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_discharge`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Five-day biochemical-oxygen-demand discharge (`wwt_bod5_water`)

Biochemical oxygen demand, 5-day, to water leaves the On-site wastewater treatment boundary as the single five-day biochemical-oxygen-demand discharge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Biochemical oxygen demand, 5-day, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water pollutant from discharge volume and a representative concentration measured for the same point and period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chemical-oxygen-demand discharge (`wwt_cod_water`)

Chemical oxygen demand, to water leaves the On-site wastewater treatment boundary as the single chemical-oxygen-demand discharge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water pollutant from discharge volume and a representative concentration measured for the same point and period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Total-suspended-solids discharge (`wwt_tss_water`)

Total suspended solids, to water leaves the On-site wastewater treatment boundary as the single total-suspended-solids discharge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Total suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water pollutant from discharge volume and a representative concentration measured for the same point and period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Total-nitrogen discharge (`wwt_total_n_water`)

Nitrogen, total, to water leaves the On-site wastewater treatment boundary as the single total-nitrogen discharge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water pollutant from discharge volume and a representative concentration measured for the same point and period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Total-phosphorus discharge (`wwt_total_p_water`)

Phosphorus, total, to water leaves the On-site wastewater treatment boundary as the single total-phosphorus discharge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water pollutant from discharge volume and a representative concentration measured for the same point and period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chloride discharge (`wwt_chloride_water`)

Chloride, to water leaves the On-site wastewater treatment boundary as the single chloride discharge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Chloride, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water pollutant from discharge volume and a representative concentration measured for the same point and period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Ammonium discharge (`wwt_ammonium_water`)

Ammonium, to water leaves the On-site wastewater treatment boundary as the single ammonium discharge. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Ammonium, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one water pollutant from discharge volume and a representative concentration measured for the same point and period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic methane release (`wwt_biogenic_methane_air`)

Methane, biogenic, to air leaves the On-site wastewater treatment boundary as the single biogenic methane release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one gas release from a matched material balance or calibrated direct measurement while retaining origin and air compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_releases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic carbon-dioxide release (`wwt_biogenic_co2_air`)

Carbon dioxide, biogenic, to air leaves the On-site wastewater treatment boundary as the single biogenic carbon-dioxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one gas release from a matched material balance or calibrated direct measurement while retaining origin and air compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_releases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitrous-oxide release (`wwt_nitrous_oxide_air`)

Nitrous oxide, to air leaves the On-site wastewater treatment boundary as the single nitrous-oxide release. Applicability and quantity are documented for this row without combining another exchange.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this one gas release from a matched material balance or calibrated direct measurement while retaining origin and air compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified edible buffalo offal at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_releases`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Shared slaughter and utility operations | Prefer measured process subdivision and direct assignment to the organ batch before applying an allocation. | `eu-pef-2021-2279` |
| `allocation_shared_slaughter` | Carcass, edible organs, blood, hide, head frame, horn, hoof, fat, and tail | When shared burdens remain, use a documented physical relationship reflecting the process; use mass only when it is defensible, and disclose any economic relationship used after the applicable hierarchy is evaluated. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_product_waste_status` | Every recovered material | Classify a measured quantity once as product or waste according to legal status and documented destination; never duplicate the same mass in both roles. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_organ_mass_balance` | Slaughter and organ preparation | Reconcile accepted live mass with carcass, each organ, other recovered products, condemned material, contents, residues, wastewater solids, inventory change, and documented measurement difference. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_waste_treatment` | Waste and wastewater | Assign foreground collection and on-site treatment activity to this system, disclose the off-site treatment boundary, and report any credit separately. | `eu-pef-2021-2279` |
| `allocation_reusable_packaging` | Reusable crate and wooden pallet | Allocate only measured replacement or loss consumption through actual issue and return records; disclose lifetime and loss assumptions. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_live_mass` | `buffalo_receipt_and_holding` | Live-buffalo mass at the named boundary | Livestock scale or weighbridge record | row_id; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Measure gross and tare on calibrated equipment, calculate net live mass, and reconcile receipt with accepted, mortality, and slaughter records. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; weigh ticket; animal batch register; reconciliation |
| `cp_receipt_utilities` | `buffalo_receipt_and_holding` | One water, electricity, steam, hot-water, or fuel input | Meter, supplier, stock, tank, or cylinder record | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | Collect each carrier independently, reconcile purchases and stock, and document any shared-meter allocation without combining carriers. | m3, kWh, MJ, or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; stock ledger; allocation worksheet |
| `cp_receipt_residues` | `buffalo_receipt_and_holding` | One named waste, wastewater, reject, sludge, grease, or residue | Scale, flow-meter, container, manifest, and destination record | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | Measure the named stream independently, retain its destination and legal status, and reconcile it without duplicate product classification. | kg or m3 as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; waste record; manifest; destination receipt; balance reconciliation |
| `cp_slaughter_live_mass` | `slaughter_bleeding_and_organ_recovery` | Live-buffalo mass at the named boundary | Livestock scale or weighbridge record | row_id; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Measure gross and tare on calibrated equipment, calculate net live mass, and reconcile receipt with accepted, mortality, and slaughter records. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; weigh ticket; animal batch register; reconciliation |
| `cp_slaughter_utilities` | `slaughter_bleeding_and_organ_recovery` | One water, electricity, steam, hot-water, or fuel input | Meter, supplier, stock, tank, or cylinder record | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | Collect each carrier independently, reconcile purchases and stock, and document any shared-meter allocation without combining carriers. | m3, kWh, MJ, or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; stock ledger; allocation worksheet |
| `cp_slaughter_products` | `slaughter_bleeding_and_organ_recovery` | One organ-specific or co-product mass | Calibrated scale and batch transfer record | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | Weigh each named organ or recovered output separately and link its identity, state, disposition, and batch. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; batch sheet; release or destination record; mass balance |
| `cp_slaughter_coproducts` | `slaughter_bleeding_and_organ_recovery` | One organ-specific or co-product mass | Calibrated scale and batch transfer record | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | Weigh each named organ or recovered output separately and link its identity, state, disposition, and batch. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; batch sheet; release or destination record; mass balance |
| `cp_slaughter_residues` | `slaughter_bleeding_and_organ_recovery` | One named waste, wastewater, reject, sludge, grease, or residue | Scale, flow-meter, container, manifest, and destination record | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | Measure the named stream independently, retain its destination and legal status, and reconcile it without duplicate product classification. | kg or m3 as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; waste record; manifest; destination receipt; balance reconciliation |
| `cp_slaughter_wastewater` | `slaughter_bleeding_and_organ_recovery` | One named wastewater stream or one discharge parameter | Flow-meter, composite-sample, laboratory, and discharge record | row_id; sampling_point; start_time; end_time; volume; concentration; analyte; unit; method; detection_limit | Measure stream volume before mixing where feasible and pair representative concentration results with the same point and reporting period. | m3 or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; sampling plan; chain of custody; laboratory report; discharge log |
| `cp_slaughter_air_emissions` | `slaughter_bleeding_and_organ_recovery` | One named emission to air | Fuel, material-balance, stack, direct-measurement, and calculation record | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | Calculate or measure each emitted substance separately and retain the matched activity, origin, compartment, factor provenance, and period. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Matched activity record; stack or service record; factor evidence; calculation review |
| `cp_prep_organ_mass` | `offal_separation_trimming_and_washing` | One organ-specific or co-product mass | Calibrated scale and batch transfer record | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | Weigh each named organ or recovered output separately and link its identity, state, disposition, and batch. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; batch sheet; release or destination record; mass balance |
| `cp_prep_utilities` | `offal_separation_trimming_and_washing` | One water, electricity, steam, hot-water, or fuel input | Meter, supplier, stock, tank, or cylinder record | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | Collect each carrier independently, reconcile purchases and stock, and document any shared-meter allocation without combining carriers. | m3, kWh, MJ, or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; stock ledger; allocation worksheet |
| `cp_prep_solid_residues` | `offal_separation_trimming_and_washing` | One named solid waste, reject, or recovered residue | Container scale, waste log, manifest, and destination record | row_id; batch_id; material_identity; container_id; gross_mass; tare_mass; net_mass; destination; legal_status; timestamp | Measure the named material separately and record destination and legal status so one mass is not reported as both product and waste. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; waste log; manifest; destination receipt; mass balance |
| `cp_prep_washwater` | `offal_separation_trimming_and_washing` | One atomic exchange linked to its row_id | Foreground operating record | row_id; batch_id; timestamp; quantity; unit; record_id; instrument_id | Capture the named exchange separately and preserve an auditable link to its original record. | Unit declared by the flow card | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Instrument status; source record; batch reconciliation; responsible-person approval |
| `cp_prep_air_emissions` | `offal_separation_trimming_and_washing` | One named emission to air | Fuel, material-balance, stack, direct-measurement, and calculation record | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | Calculate or measure each emitted substance separately and retain the matched activity, origin, compartment, factor provenance, and period. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Matched activity record; stack or service record; factor evidence; calculation review |
| `cp_fresh_organ_mass` | `fresh_offal_conditioning` | One organ-specific or co-product mass | Calibrated scale and batch transfer record | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | Weigh each named organ or recovered output separately and link its identity, state, disposition, and batch. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; batch sheet; release or destination record; mass balance |
| `cp_fresh_utilities` | `fresh_offal_conditioning` | One water, electricity, steam, hot-water, or fuel input | Meter, supplier, stock, tank, or cylinder record | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | Collect each carrier independently, reconcile purchases and stock, and document any shared-meter allocation without combining carriers. | m3, kWh, MJ, or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; stock ledger; allocation worksheet |
| `cp_fresh_rejects` | `fresh_offal_conditioning` | One named solid waste, reject, or recovered residue | Container scale, waste log, manifest, and destination record | row_id; batch_id; material_identity; container_id; gross_mass; tare_mass; net_mass; destination; legal_status; timestamp | Measure the named material separately and record destination and legal status so one mass is not reported as both product and waste. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; waste log; manifest; destination receipt; mass balance |
| `cp_chill_organ_mass` | `chilling_and_chilled_storage` | One organ-specific or co-product mass | Calibrated scale and batch transfer record | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | Weigh each named organ or recovered output separately and link its identity, state, disposition, and batch. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; batch sheet; release or destination record; mass balance |
| `cp_chill_utilities` | `chilling_and_chilled_storage` | One water, electricity, steam, hot-water, or fuel input | Meter, supplier, stock, tank, or cylinder record | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | Collect each carrier independently, reconcile purchases and stock, and document any shared-meter allocation without combining carriers. | m3, kWh, MJ, or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; stock ledger; allocation worksheet |
| `cp_chill_refrigerants` | `chilling_and_chilled_storage` | One substance-specific refrigerant make-up or release | Cylinder weight, stock, recovery, transfer, and service record | row_id; substance; equipment_id; opening_stock; receipts; recovered_mass; transferred_mass; closing_stock; direct_loss; unit | Maintain an independent mass balance for this refrigerant substance and reconcile it to recovery and service events. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Cylinder-scale calibration; service log; invoice; recovery certificate; mass-balance review |
| `cp_chill_residues` | `chilling_and_chilled_storage` | One named waste, wastewater, reject, sludge, grease, or residue | Scale, flow-meter, container, manifest, and destination record | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | Measure the named stream independently, retain its destination and legal status, and reconcile it without duplicate product classification. | kg or m3 as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; waste record; manifest; destination receipt; balance reconciliation |
| `cp_freeze_organ_mass` | `freezing_and_frozen_storage` | One organ-specific or co-product mass | Calibrated scale and batch transfer record | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | Weigh each named organ or recovered output separately and link its identity, state, disposition, and batch. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; batch sheet; release or destination record; mass balance |
| `cp_freeze_utilities` | `freezing_and_frozen_storage` | One water, electricity, steam, hot-water, or fuel input | Meter, supplier, stock, tank, or cylinder record | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | Collect each carrier independently, reconcile purchases and stock, and document any shared-meter allocation without combining carriers. | m3, kWh, MJ, or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; stock ledger; allocation worksheet |
| `cp_freeze_refrigerants` | `freezing_and_frozen_storage` | One substance-specific refrigerant make-up or release | Cylinder weight, stock, recovery, transfer, and service record | row_id; substance; equipment_id; opening_stock; receipts; recovered_mass; transferred_mass; closing_stock; direct_loss; unit | Maintain an independent mass balance for this refrigerant substance and reconcile it to recovery and service events. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Cylinder-scale calibration; service log; invoice; recovery certificate; mass-balance review |
| `cp_freeze_residues` | `freezing_and_frozen_storage` | One named waste, wastewater, reject, sludge, grease, or residue | Scale, flow-meter, container, manifest, and destination record | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | Measure the named stream independently, retain its destination and legal status, and reconcile it without duplicate product classification. | kg or m3 as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; waste record; manifest; destination receipt; balance reconciliation |
| `cp_packaging_organ_mass` | `packaging_and_release` | One organ-specific or co-product mass | Calibrated scale and batch transfer record | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | Weigh each named organ or recovered output separately and link its identity, state, disposition, and batch. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale calibration; batch sheet; release or destination record; mass balance |
| `cp_packaging_energy` | `packaging_and_release` | One water, electricity, steam, hot-water, or fuel input | Meter, supplier, stock, tank, or cylinder record | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | Collect each carrier independently, reconcile purchases and stock, and document any shared-meter allocation without combining carriers. | m3, kWh, MJ, or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; stock ledger; allocation worksheet |
| `cp_packaging_components` | `packaging_and_release` | One chemical, treatment consumable, packaging component, or packaging gas | Purchase, dosing, issue, return, and stock record | row_id; material_identity; grade_or_concentration; opening_stock; receipts; issued_quantity; returns; closing_stock; unit; batch_id | Reconcile the named material independently and link net consumption to the applicable organ batch. | kg, m3, kWh, or MJ as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Invoice; specification; dosing or issue record; stock reconciliation |
| `cp_packaging_gases` | `packaging_and_release` | One chemical, treatment consumable, packaging component, or packaging gas | Purchase, dosing, issue, return, and stock record | row_id; material_identity; grade_or_concentration; opening_stock; receipts; issued_quantity; returns; closing_stock; unit; batch_id | Reconcile the named material independently and link net consumption to the applicable organ batch. | kg, m3, kWh, or MJ as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Invoice; specification; dosing or issue record; stock reconciliation |
| `cp_packaging_waste` | `packaging_and_release` | One named waste, wastewater, reject, sludge, grease, or residue | Scale, flow-meter, container, manifest, and destination record | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | Measure the named stream independently, retain its destination and legal status, and reconcile it without duplicate product classification. | kg or m3 as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; waste record; manifest; destination receipt; balance reconciliation |
| `cp_packaging_gas_releases` | `packaging_and_release` | One named emission to air | Fuel, material-balance, stack, direct-measurement, and calculation record | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | Calculate or measure each emitted substance separately and retain the matched activity, origin, compartment, factor provenance, and period. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Matched activity record; stack or service record; factor evidence; calculation review |
| `cp_sanitation_utilities` | `cleaning_and_disinfection` | One water, electricity, steam, hot-water, or fuel input | Meter, supplier, stock, tank, or cylinder record | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | Collect each carrier independently, reconcile purchases and stock, and document any shared-meter allocation without combining carriers. | m3, kWh, MJ, or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; invoice; stock ledger; allocation worksheet |
| `cp_sanitation_chemicals` | `cleaning_and_disinfection` | One chemical, treatment consumable, packaging component, or packaging gas | Purchase, dosing, issue, return, and stock record | row_id; material_identity; grade_or_concentration; opening_stock; receipts; issued_quantity; returns; closing_stock; unit; batch_id | Reconcile the named material independently and link net consumption to the applicable organ batch. | kg, m3, kWh, or MJ as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Invoice; specification; dosing or issue record; stock reconciliation |
| `cp_sanitation_wastewater` | `cleaning_and_disinfection` | One named waste, wastewater, reject, sludge, grease, or residue | Scale, flow-meter, container, manifest, and destination record | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | Measure the named stream independently, retain its destination and legal status, and reconcile it without duplicate product classification. | kg or m3 as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; waste record; manifest; destination receipt; balance reconciliation |
| `cp_sanitation_air_emissions` | `cleaning_and_disinfection` | One named emission to air | Fuel, material-balance, stack, direct-measurement, and calculation record | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | Calculate or measure each emitted substance separately and retain the matched activity, origin, compartment, factor provenance, and period. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Matched activity record; stack or service record; factor evidence; calculation review |
| `cp_wwt_consumables` | `onsite_wastewater_treatment` | One chemical, treatment consumable, packaging component, or packaging gas | Purchase, dosing, issue, return, and stock record | row_id; material_identity; grade_or_concentration; opening_stock; receipts; issued_quantity; returns; closing_stock; unit; batch_id | Reconcile the named material independently and link net consumption to the applicable organ batch. | kg, m3, kWh, or MJ as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Invoice; specification; dosing or issue record; stock reconciliation |
| `cp_wwt_influent` | `onsite_wastewater_treatment` | One named wastewater stream or one discharge parameter | Flow-meter, composite-sample, laboratory, and discharge record | row_id; sampling_point; start_time; end_time; volume; concentration; analyte; unit; method; detection_limit | Measure stream volume before mixing where feasible and pair representative concentration results with the same point and reporting period. | m3 or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; sampling plan; chain of custody; laboratory report; discharge log |
| `cp_wwt_residues` | `onsite_wastewater_treatment` | One named waste, wastewater, reject, sludge, grease, or residue | Scale, flow-meter, container, manifest, and destination record | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | Measure the named stream independently, retain its destination and legal status, and reconcile it without duplicate product classification. | kg or m3 as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Scale or meter calibration; waste record; manifest; destination receipt; balance reconciliation |
| `cp_wwt_discharge` | `onsite_wastewater_treatment` | One named wastewater stream or one discharge parameter | Flow-meter, composite-sample, laboratory, and discharge record | row_id; sampling_point; start_time; end_time; volume; concentration; analyte; unit; method; detection_limit | Measure stream volume before mixing where feasible and pair representative concentration results with the same point and reporting period. | m3 or kg as declared | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Meter calibration; sampling plan; chain of custody; laboratory report; discharge log |
| `cp_wwt_air_releases` | `onsite_wastewater_treatment` | One named emission to air | Fuel, material-balance, stack, direct-measurement, and calculation record | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | Calculate or measure each emitted substance separately and retain the matched activity, origin, compartment, factor provenance, and period. | kg | Each batch with reporting-period reconciliation | Complete declared foreground reporting period | Foreground slaughterhouse or offal-processing facility | Sum only records assigned to this process and row_id, prevent duplicate assignment, then normalize by net qualified reference-product mass. | Matched activity record; stack or service record; factor evidence; calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every non-reference row | Divide the batch or reporting-period exchange by the matched net mass of qualified reference product; retain unrounded numerator and denominator. | row-specific quantity; net qualified organ mass | Quantity per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_organ_mass_balance` | Receipt, slaughter, preparation, state conditioning, and packaging | Reconcile measured input with organ outputs, carcass products, co-products, rejects, wastes, inventory change, and documented measurement difference; do not invent a balancing flow. | calibrated mass records; inventory change | Disclosed organ and facility mass balance | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_state_route` | Fresh, chilled, and frozen branches | Assign a reference batch to one state route from release records; normalize only that branch and reject any calculation that mixes branch quantities. | organ batch id; release state; branch records | One state-specific foreground inventory | `eu-pef-2021-2279` |
| `calc_combustion_release` | Each combustion-pollutant row | Multiply the separately collected fuel quantity by a documented facility-specific pollutant factor, or use a matched direct stack result; preserve source, unit, and period. | fuel quantity; pollutant factor or stack result | Pollutant mass to air | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | Each refrigerant-emission row | Calculate opening stock plus receipts minus closing stock, recovered mass, and transfers for one substance, then reconcile with service-loss records. | substance-specific stock and service records | Refrigerant mass to air | `eu-pef-2021-2279` |
| `calc_shared_meter` | Shared utility meters | Use a documented causal driver only after evaluating direct submetering; preserve the unallocated total and allocation worksheet. | shared-meter quantity; operating time, load, or throughput | Process-specific utility quantity | `eu-pef-2021-2279` |
| `calc_packaging_consumption` | Each packaging component | Calculate opening stock plus receipts minus closing stock, returns, and unused transfers; for reusable items use measured replacement or loss. | component-specific stock, issue, return, and loss records | Component mass per reference product | `eu-pef-2021-2279` |
| `calc_effluent_load` | Each wastewater-pollutant row | Multiply matched discharge volume by a representative measured concentration from the same point and period with explicit unit conversion. | discharge volume; measured concentration | Pollutant mass to water | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | Reference product | Demonstrate CPC 21152, buffalo origin, exact organ identity, human-consumption edibility, one declared state, and exclusion of packaging mass. | Product specification; veterinary or food-safety release; batch record; reference UUID |
| `dq_state_traceability` | Fresh, chilled, or frozen route | Preserve branch selection, handling duration, temperature records, and proof that the same reference batch did not enter another state branch. | Time record; temperature log; route record; release record |
| `dq_primary_foreground` | Foreground operations | Use facility-specific primary records for every material, utility, organ, co-product, waste, wastewater, refrigerant, and direct release. | Meters; scales; invoices; stock ledgers; service logs; manifests; laboratory reports |
| `dq_temporal_coverage` | Reporting period | Cover a representative period including slaughter, organ preparation, selected state conditioning, packaging, sanitation, storage, and treatment variability. | Dated records; production calendar; completeness reconciliation |
| `dq_atomic_inventory` | Inventory rows | Preserve one exact exchange per row and maintain row-level closure with manifest unresolved-UUID review entries. | Ordered row-id audit; UUID register; source-record crosswalk |
| `dq_mass_water_balance` | Facility balances | Reconcile organ and facility mass balances plus water intake, wastewater transfer, treatment, and discharge; explain material residuals with evidence. | Mass-balance worksheet; water-balance worksheet; reviewer approval |
| `dq_refrigerant_balance` | Chilling and freezing systems | Identify each refrigerant and reconcile make-up, recovery, transfer, inventory, and release for the same period; retain R-744 origin. | Cylinder weights; service logs; purchase and recovery records; substance balance |
| `dq_calculation_traceability` | Calculated values | Retain raw values, units, factors, formulas, conversions, factor provenance, and exact batch or period links. | Reproducible calculation file; source-record ids; calculation review |
| `dq_independent_review` | Dataset package | Review scope, reference flow, state branch, organ identity, completeness, allocation, calculations, data quality, and exclusions before lifecycle promotion. | Validation record; reviewer identity; issue disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | Reference flow | Require UUID ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c, Product flow type, exact CPC 21152 scope, Mass property 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, kg, and exactly 1 kg net output. | `unsd-cpc-3-21152` |
| `validate_product_scope` | Product identity | Reject skeletal meat, inedible offal, mixed-species offal, non-buffalo offal, and cooked, cured, smoked, dried, salted, or further-preserved products. | `unsd-cpc-3-21152` |
| `validate_exact_organ` | Organ identity | Require one exactly named organ for the reference lot and an atomic row in every applicable process; reject an “other offal” selected flow. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_state_exclusivity` | State routes | Require exactly one of fresh, chilled, or frozen for each reference lot and reject mixed-state normalization. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_process_coverage` | Process inventory | Require all required processes and documented inclusion decisions for the three state branches and on-site wastewater treatment. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_atomic_exchange` | Inventory | Reject combined carriers, chemicals, packaging components, organs, co-products, wastes, wastewater pollutants, or emissions in one selected flow. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_fixed_value` | Amount modes | Require the reference output as the sole fixed value and prohibit invented fixed quantities or ranges for non-reference rows. | `eu-pef-2021-2279` |
| `validate_mass_allocation` | Slaughter and organ preparation | Require mass reconciliation, product-versus-waste exclusivity, allocation disclosure, and sensitivity where allocation materially affects results. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_refrigerants` | Chilled and frozen routes | Require substance-specific make-up and release records for every refrigerant present and separate fossil from biogenic R-744 release. | `eu-pef-2021-2279` |
| `validate_wastewater` | Wastewater | Require named wastewater inputs, matched discharge volume and concentration, and documented off-site transfer when on-site treatment is absent. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_unresolved_uuid` | Non-reference identities | Permit a blank UUID only for a physically specific row with matching selected_flow_candidates and rejected_candidates under that row_id in manifest.yaml. | `eu-pef-2021-2279` |
| `validate_data_quality` | Foreground package | Require primary-record traceability, representative temporal coverage, reproducible calculations, complete disclosures, and independent review evidence. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process package for 1 kg net qualified edible buffalo offal in one declared fresh, chilled, or frozen state |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product carbon footprinting, life-cycle assessment, supplier exchange, facility improvement, and reviewed aggregation when organ and state qualifiers remain explicit |
| excluded_use | Direct representation of skeletal meat, inedible offal, mixed-species offal, non-buffalo offal, husbandry, inbound transport, retail, preparation, consumption, or further-preserved products |
| required_metadata | PCR id; CPC code; reference UUID; buffalo taxon; exact organ; edibility status; state; time and temperature; trimming; packaging; net mass; facility; geography; technology; batch; period; allocation; co-product destinations; refrigerants; wastewater route; unresolved UUID register |
| required_quality_disclosure | Primary-data share; meter and scale coverage; shared-record allocations; organ and facility mass balances; water balance; refrigerant balance; state-route proof; data gaps; calculation provenance; validation findings |
| update_trigger | Change in organ mix, buffalo taxon, edibility rules, state route, chilling or freezing technology, refrigerant, thermal supply, packaging, sanitation chemistry, wastewater route, allocation, co-product legal status, facility configuration, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21152` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 21152, retained raw file CPC_Ver_3.0_Structure_30Jun2025.csv, SHA-256 5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c, retrieved 2026-06-23T08:55:39.235Z; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact category boundary for edible buffalo offal in fresh, chilled, or frozen states and separation from neighboring categories |
| `ec-jrc-sa-bref-jrc135916` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries, JRC135916, DOI 10.2760/18199; https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Receipt, slaughter, bleeding, evisceration, organ and co-product recovery, cooling, freezing, cleaning, utilities, wastewater, residues, emissions, and foreground process structure; no quantitative default imported |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text; https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific inventory, company-specific foreground data, completeness, allocation, transparency, data quality, calculation traceability, and verification |
