---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-offal-fresh-chilled-or-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other meat and edible offal, fresh, chilled or frozen

## 1. Scope and Applicability

This PCR governs foreground data packages for products classified exactly as CPC 21170. The official scope covers meat and edible offal from reptiles and non-poultry birds, including pigeons, game birds, grouse, ostriches, partridges, pheasants, quails, wild ducks, and wild geese, in fresh, chilled, or frozen form. Poultry meat and poultry edible offal under CPC 2112, CPC 2114, and CPC 21160 are excluded.

Because CPC 21170 is broad, a conforming foreground package must lock the reference product to exactly one common and scientific species identity, exactly one skeletal-meat identity or one explicitly named edible organ, and exactly one market state. Multi-species lots, a combined meat-and-offal product, and mixed fresh/chilled/frozen reference outputs are not conforming. The authored inventory provides concrete example routes for nine species; an in-scope species or organ not represented here requires new species- and tissue-specific atomic rows before use.

The foreground boundary starts after lawful farming or capture and inbound transport end at facility receiving. It includes receiving, slaughter, primary separation, preparation, conditional chilling or freezing, packaging, storage, release, sanitation, heat generation, and conditional on-site wastewater treatment. Farming, lawful capture or hunting, and inbound transport are upstream; distribution after the facility gate, retail, use, and end-of-life are downstream.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-offal-fresh-chilled-or-frozen` |
| classification_refs | CPC 3.0: 21170, exact |
| covered_products | Fresh, chilled, or frozen skeletal meat or one specifically identified edible organ from one in-scope reptile or non-poultry bird species |
| excluded_products | Poultry meat under CPC 2112 or CPC 2114; poultry edible offal under CPC 21160; multi-species reference products; combined meat-and-offal reference products; mixed market states; non-edible tissues |
| representative_product | One kilogram of net conforming product for one declared scientific species, one declared skeletal-meat or edible-organ identity, and one declared fresh, chilled, or frozen state |
| production_route | Species receiving; slaughter and primary separation; tissue preparation; conditional chilling or freezing; variant packaging, storage, and release; sanitation and heat generation; conditional on-site wastewater treatment |
| market_state | Exactly one of fresh, chilled, or frozen for the complete reference output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming CPC 21170 meat or edible offal for one explicitly identified species and one explicitly identified skeletal-meat or organ identity |
| How much | 1 kg |
| How well | Passed applicable legal, food-safety, species-identity, product-state, and facility release requirements; packaging mass excluded |
| How long or cycle | One production lot through facility-gate release |
| reference_flow_link | Exact public Tiangong Product flow verified at state 100 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Other meat and edible offal, fresh, chilled or frozen `e67d4710-2094-4972-85a2-9e593546ae82` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 21170; one common species name; one scientific species name; reptile or non-poultry-bird scope evidence; lawful origin; one skeletal-meat or named edible-organ identity; meat or organ declaration; exactly one fresh, chilled, or frozen state; net product mass; production site; reporting period; conditioning technology; storage duration; packaging composition reported separately |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete. The official broad flow name supplies category identity only and does not authorize a mixed species, tissue, or state output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine released net conforming mass on calibrated scales after the species, tissue, and state lock has been applied. |
| `mu_variant_mass` | Selected species-tissue-state input | Mass | kg | Exactly one fully specified variant mass must reconcile to the released net reference-product mass. |
| `mu_live_mass` | Live animals | Mass | kg | Measure the one declared species separately; do not aggregate another species into the same scale record. |
| `mu_tissue_mass` | Meat, organs, co-products, and solid wastes | Mass | kg | Measure each physical tissue identity independently and disclose wet, net, or dry-matter basis where relevant. |
| `mu_packaging_excluded` | Reference product and packaging | Mass | kg | Exclude packaging mass from the reference amount and record every packaging component separately. |
| `mu_electricity` | Electricity | Energy | kWh | Use calibrated meters and retain the stage boundary and allocation driver. |
| `mu_heat` | Purchased steam, purchased hot water, and each on-site fuel | Energy | MJ | Convert each measured carrier with period-matched physical-property records and prevent duplicate heat accounting. |
| `mu_water` | Water and wastewater | Volume | m3 | Use metered volume and keep species-specific high-load, routine, defrost, condensate, sewer, reuse, and direct-discharge streams distinct. |
| `mu_refrigerant` | Each refrigerant species | Mass | kg | Reconcile each species and circuit independently for make-up and loss. |
| `mu_direct_release` | Each direct air or water release | Mass | kg | Calculate one substance or monitored parameter from matched measured activity and concentration or a verified factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One explicitly identified reptile or non-poultry bird species crosses facility receiving after inbound transport ends |
| starting_condition_role | Species-locked foreground starting condition |
| product_classification_scope | Exact CPC 21170, excluding poultry CPC 2112, CPC 2114, and CPC 21160 |
| recursive_input_rule | Declare the origin and exact species-tissue-state identity of any CPC 21170 intermediate and prevent recursive counting |
| upstream_dataset_requirement | Model farming, lawful capture or hunting, and inbound transport in separate upstream datasets with geography, period, and method disclosed |
| disclosure | Facility; reporting period; common and scientific species name; origin status; skeletal-meat or organ identity; one market state; process configuration; conditioning and storage technology; heat route; refrigerant species; packaging BoM; co-product and waste destinations; wastewater route |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | foreground system | Start when one explicitly identified animal species enters facility receiving after inbound transport ends. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_upstream` | upstream activities | Model farming, lawful capture or hunting, and inbound transport in separate upstream datasets. | `eu-2021-2279-environmental-footprint` |
| `boundary_core` | foreground processes | Include receiving, slaughter, primary separation, tissue preparation, conditional chilling or freezing, packaging, storage, release, and sanitation. | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_end` | foreground system | End with 1 kg net conforming CPC 21170 product at the facility gate, excluding packaging mass. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_downstream` | downstream activities | Exclude distribution after the facility gate, retail, use, and end-of-life from this foreground inventory. | `eu-2021-2279-environmental-footprint` |
| `boundary_wwtp` | on-site wastewater treatment | Include on-site treatment only when operated inside the reporting facility boundary; otherwise record each wastewater transfer. | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_species` | species identity | Require one common and scientific species name; never aggregate reptile, game-bird, or multi-species production into one dataset. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_tissue` | product identity | Require skeletal meat or one explicitly named edible organ; never combine meat and edible offal in one reference output. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_state` | market state | Require exactly one fresh, chilled, or frozen state and enable only matching state-specific rows. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_poultry_exclusion` | classification scope | Exclude poultry meat and poultry edible offal classified under CPC 2112, 2114, or 21160. | `un-cpc-3-0-structure-2025` |
| `boundary_completeness` | all foreground exchanges | Record every known exchange atomically or disclose verified absence; do not apply a category cut-off. | `eu-2021-2279-environmental-footprint` |
| `boundary_extension` | unlisted in-scope species or organ | Add new fully species- and tissue-specific rows when the selected in-scope variant is not represented; never use an other-species or other-organ flow. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_recursive` | same-category intermediate input | Declare origin for any CPC 21170 intermediate and prevent recursive counting of the same production. | `eu-2021-2279-environmental-footprint` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `species_receiving` | Species-specific animal receiving and acceptance | `required` | Every production lot | Starts foreground records after lawful production or capture and inbound transport end | per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate |
| `slaughter_primary_separation` | Slaughter and species-specific primary separation | `required` | Every accepted lot | Separates explicitly named meat, edible organs, co-products, and residuals | per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate |
| `meat_offal_preparation` | Species- and tissue-specific preparation | `required` | Every reference-product lot | Trims, washes, inspects, and measures one named meat or organ route | per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate |
| `state_conditioning` | State-specific chilling and freezing | `conditional` | Required for chilled or frozen reference state; bypassed for fresh state | Produces separately named chilled and frozen variants and records refrigeration | per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate |
| `variant_packaging_release` | Variant packaging, storage, and release | `required` | Every released reference-product lot | Selects exactly one species-tissue-state variant and releases the broad official reference identity | per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate |
| `hygiene_heat_generation` | Hygiene and on-site heat generation | `required` | Every production lot and sanitation cycle | Records individual cleaning inputs, heat carriers, wastewater, and combustion releases | per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate |
| `onsite_wastewater_treatment` | Conditional on-site wastewater treatment | `conditional` | Only when treatment is operated inside the reporting facility boundary | Records individually identified treatment inputs, residues, destinations, and releases | per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate |

### Process: Species-specific animal receiving and acceptance (`species_receiving`)

#### Inputs

##### Product flows

###### Live Nile crocodile entering receiving (`receiving_live_nile_crocodile`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Nile crocodile (Crocodylus niloticus) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Live Rock dove entering receiving (`receiving_live_rock_dove`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Rock dove (Columba livia) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Live Red grouse entering receiving (`receiving_live_red_grouse`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Red grouse (Lagopus lagopus scotica) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Live Common ostrich entering receiving (`receiving_live_common_ostrich`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Common ostrich (Struthio camelus) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Live Grey partridge entering receiving (`receiving_live_grey_partridge`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Grey partridge (Perdix perdix) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Live Common pheasant entering receiving (`receiving_live_common_pheasant`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Common pheasant (Phasianus colchicus) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Live Common quail entering receiving (`receiving_live_common_quail`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Common quail (Coturnix coturnix) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Live Wild mallard entering receiving (`receiving_live_wild_mallard`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Wild mallard (Anas platyrhynchos) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Live Wild greylag goose entering receiving (`receiving_live_wild_greylag_goose`)

This card is limited to one explicitly named species and begins the foreground boundary after inbound transport.

- Selected flow: Live Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass of Wild greylag goose (Anser anser) entering receiving and link it to species identity and lawful-origin records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser) being the single declared species for the dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Receiving electricity (`receiving_electricity`)

Electricity operates gates, inspection, lighting, ventilation, and handling equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the receiving-area submeter and calculate the lot share from documented equipment activity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by receiving.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Receiving water (`receiving_water`)

Water is supplied for animal watering and receiving-area operation.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the receiving and holding-area water meter for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Required when facility water is supplied.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted Nile crocodile transfer (`receiving_accepted_nile_crocodile`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Nile crocodile (Crocodylus niloticus) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Rock dove transfer (`receiving_accepted_rock_dove`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Rock dove (Columba livia) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Red grouse transfer (`receiving_accepted_red_grouse`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Red grouse (Lagopus lagopus scotica) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Common ostrich transfer (`receiving_accepted_common_ostrich`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Common ostrich (Struthio camelus) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Grey partridge transfer (`receiving_accepted_grey_partridge`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Grey partridge (Perdix perdix) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Common pheasant transfer (`receiving_accepted_common_pheasant`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Common pheasant (Phasianus colchicus) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Common quail transfer (`receiving_accepted_common_quail`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Common quail (Coturnix coturnix) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Wild mallard transfer (`receiving_accepted_wild_mallard`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Wild mallard (Anas platyrhynchos) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Wild greylag goose transfer (`receiving_accepted_wild_greylag_goose`)

This species-specific intermediate transfers accepted animals to slaughter without changing species identity.

- Selected flow: Accepted live Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted live mass of Wild greylag goose (Anser anser) transferred to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser) being accepted.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Nile crocodile excreta (`receiving_excreta_nile_crocodile`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Nile crocodile (Crocodylus niloticus) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Nile crocodile (Crocodylus niloticus).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile receiving wash wastewater (`receiving_wash_wastewater_nile_crocodile`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Nile crocodile (Crocodylus niloticus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Nile crocodile (Crocodylus niloticus).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove excreta (`receiving_excreta_rock_dove`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Rock dove (Columba livia) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Rock dove (Columba livia).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove receiving wash wastewater (`receiving_wash_wastewater_rock_dove`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Rock dove (Columba livia)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Rock dove (Columba livia).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Rock dove (Columba livia).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse excreta (`receiving_excreta_red_grouse`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Red grouse (Lagopus lagopus scotica) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Red grouse (Lagopus lagopus scotica).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse receiving wash wastewater (`receiving_wash_wastewater_red_grouse`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Red grouse (Lagopus lagopus scotica).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Red grouse (Lagopus lagopus scotica).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich excreta (`receiving_excreta_common_ostrich`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Common ostrich (Struthio camelus) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Common ostrich (Struthio camelus).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich receiving wash wastewater (`receiving_wash_wastewater_common_ostrich`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Common ostrich (Struthio camelus)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Common ostrich (Struthio camelus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Common ostrich (Struthio camelus).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge excreta (`receiving_excreta_grey_partridge`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Grey partridge (Perdix perdix) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Grey partridge (Perdix perdix).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge receiving wash wastewater (`receiving_wash_wastewater_grey_partridge`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Grey partridge (Perdix perdix)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Grey partridge (Perdix perdix).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Grey partridge (Perdix perdix).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant excreta (`receiving_excreta_common_pheasant`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Common pheasant (Phasianus colchicus) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Common pheasant (Phasianus colchicus).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant receiving wash wastewater (`receiving_wash_wastewater_common_pheasant`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Common pheasant (Phasianus colchicus)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Common pheasant (Phasianus colchicus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Common pheasant (Phasianus colchicus).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail excreta (`receiving_excreta_common_quail`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Common quail (Coturnix coturnix) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Common quail (Coturnix coturnix).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail receiving wash wastewater (`receiving_wash_wastewater_common_quail`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Common quail (Coturnix coturnix)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Common quail (Coturnix coturnix).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Common quail (Coturnix coturnix).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard excreta (`receiving_excreta_wild_mallard`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Wild mallard (Anas platyrhynchos) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Wild mallard (Anas platyrhynchos).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard receiving wash wastewater (`receiving_wash_wastewater_wild_mallard`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Wild mallard (Anas platyrhynchos).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Wild mallard (Anas platyrhynchos).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose excreta (`receiving_excreta_wild_greylag_goose`)

The excreta is a single species-specific solid waste stream.

- Selected flow: Excreta from live Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass of excreta from Wild greylag goose (Anser anser) using container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on separate collection during receipt or holding of Wild greylag goose (Anser anser).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose receiving wash wastewater (`receiving_wash_wastewater_wild_greylag_goose`)

This is the receiving wash-water stream generated while processing one declared species.

- Selected flow: Receiving wash wastewater from Wild greylag goose (Anser anser)
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated drain meter or calculate volume from matched wash-water records for Wild greylag goose (Anser anser).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wash wastewater generation for Wild greylag goose (Anser anser).
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

### Process: Slaughter and species-specific primary separation (`slaughter_primary_separation`)

#### Inputs

##### Product flows

###### Accepted Nile crocodile input (`slaughter_accepted_nile_crocodile_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Nile crocodile (Crocodylus niloticus) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Rock dove input (`slaughter_accepted_rock_dove_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Rock dove (Columba livia) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Red grouse input (`slaughter_accepted_red_grouse_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Red grouse (Lagopus lagopus scotica) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Common ostrich input (`slaughter_accepted_common_ostrich_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Common ostrich (Struthio camelus) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Grey partridge input (`slaughter_accepted_grey_partridge_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Grey partridge (Perdix perdix) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Common pheasant input (`slaughter_accepted_common_pheasant_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Common pheasant (Phasianus colchicus) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Common quail input (`slaughter_accepted_common_quail_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Common quail (Coturnix coturnix) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Wild mallard input (`slaughter_accepted_wild_mallard_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Wild mallard (Anas platyrhynchos) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Accepted Wild greylag goose input (`slaughter_accepted_wild_greylag_goose_input`)

This input retains the exact species identity established at receiving.

- Selected flow: Accepted live Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated accepted-animal transfer for Wild greylag goose (Anser anser) from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser) being the single declared species.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter electricity (`slaughter_electricity`)

Electricity operates restraint, stunning where applicable, hoisting, cutting, pumping, ventilation, and separation equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use a slaughter-line submeter; calculate shared use only from metered activity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter process water (`slaughter_water`)

This water excludes later tissue washing and facility sanitation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water supplied directly to slaughter, evisceration, and primary washing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Required when process water is supplied.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separated Nile crocodile skeletal meat (`slaughter_untrimmed_nile_crocodile_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Nile crocodile (Crocodylus niloticus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Nile crocodile (Crocodylus niloticus) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Nile crocodile liver (`slaughter_untrimmed_nile_crocodile_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Nile crocodile (Crocodylus niloticus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Nile crocodile (Crocodylus niloticus) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Nile crocodile heart (`slaughter_untrimmed_nile_crocodile_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Nile crocodile (Crocodylus niloticus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Nile crocodile (Crocodylus niloticus) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Nile crocodile kidney (`slaughter_untrimmed_nile_crocodile_kidney`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) kidney
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed kidney from Nile crocodile (Crocodylus niloticus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Nile crocodile (Crocodylus niloticus) kidney for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Nile crocodile stomach (`slaughter_untrimmed_nile_crocodile_stomach`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) stomach
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed stomach from Nile crocodile (Crocodylus niloticus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Nile crocodile (Crocodylus niloticus) stomach for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Rock dove skeletal meat (`slaughter_untrimmed_rock_dove_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Rock dove (Columba livia) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Rock dove (Columba livia) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Rock dove (Columba livia) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Rock dove liver (`slaughter_untrimmed_rock_dove_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Rock dove (Columba livia) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Rock dove (Columba livia) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Rock dove (Columba livia) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Rock dove heart (`slaughter_untrimmed_rock_dove_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Rock dove (Columba livia) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Rock dove (Columba livia) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Rock dove (Columba livia) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Rock dove gizzard (`slaughter_untrimmed_rock_dove_gizzard`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Rock dove (Columba livia) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed gizzard from Rock dove (Columba livia) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Rock dove (Columba livia) gizzard for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Red grouse skeletal meat (`slaughter_untrimmed_red_grouse_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Red grouse (Lagopus lagopus scotica) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Red grouse (Lagopus lagopus scotica) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Red grouse liver (`slaughter_untrimmed_red_grouse_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Red grouse (Lagopus lagopus scotica) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Red grouse (Lagopus lagopus scotica) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Red grouse (Lagopus lagopus scotica) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Red grouse heart (`slaughter_untrimmed_red_grouse_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Red grouse (Lagopus lagopus scotica) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Red grouse (Lagopus lagopus scotica) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Red grouse (Lagopus lagopus scotica) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Red grouse gizzard (`slaughter_untrimmed_red_grouse_gizzard`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Red grouse (Lagopus lagopus scotica) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed gizzard from Red grouse (Lagopus lagopus scotica) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Red grouse (Lagopus lagopus scotica) gizzard for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common ostrich skeletal meat (`slaughter_untrimmed_common_ostrich_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common ostrich (Struthio camelus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Common ostrich (Struthio camelus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common ostrich (Struthio camelus) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common ostrich liver (`slaughter_untrimmed_common_ostrich_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common ostrich (Struthio camelus) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Common ostrich (Struthio camelus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common ostrich (Struthio camelus) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common ostrich heart (`slaughter_untrimmed_common_ostrich_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common ostrich (Struthio camelus) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Common ostrich (Struthio camelus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common ostrich (Struthio camelus) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common ostrich gizzard (`slaughter_untrimmed_common_ostrich_gizzard`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common ostrich (Struthio camelus) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed gizzard from Common ostrich (Struthio camelus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common ostrich (Struthio camelus) gizzard for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Grey partridge skeletal meat (`slaughter_untrimmed_grey_partridge_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Grey partridge (Perdix perdix) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Grey partridge (Perdix perdix) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Grey partridge (Perdix perdix) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Grey partridge liver (`slaughter_untrimmed_grey_partridge_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Grey partridge (Perdix perdix) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Grey partridge (Perdix perdix) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Grey partridge (Perdix perdix) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Grey partridge heart (`slaughter_untrimmed_grey_partridge_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Grey partridge (Perdix perdix) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Grey partridge (Perdix perdix) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Grey partridge (Perdix perdix) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Grey partridge gizzard (`slaughter_untrimmed_grey_partridge_gizzard`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Grey partridge (Perdix perdix) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed gizzard from Grey partridge (Perdix perdix) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Grey partridge (Perdix perdix) gizzard for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common pheasant skeletal meat (`slaughter_untrimmed_common_pheasant_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common pheasant (Phasianus colchicus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Common pheasant (Phasianus colchicus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common pheasant (Phasianus colchicus) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common pheasant liver (`slaughter_untrimmed_common_pheasant_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common pheasant (Phasianus colchicus) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Common pheasant (Phasianus colchicus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common pheasant (Phasianus colchicus) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common pheasant heart (`slaughter_untrimmed_common_pheasant_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common pheasant (Phasianus colchicus) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Common pheasant (Phasianus colchicus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common pheasant (Phasianus colchicus) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common pheasant gizzard (`slaughter_untrimmed_common_pheasant_gizzard`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common pheasant (Phasianus colchicus) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed gizzard from Common pheasant (Phasianus colchicus) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common pheasant (Phasianus colchicus) gizzard for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common quail skeletal meat (`slaughter_untrimmed_common_quail_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common quail (Coturnix coturnix) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Common quail (Coturnix coturnix) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common quail (Coturnix coturnix) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common quail liver (`slaughter_untrimmed_common_quail_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common quail (Coturnix coturnix) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Common quail (Coturnix coturnix) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common quail (Coturnix coturnix) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common quail heart (`slaughter_untrimmed_common_quail_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common quail (Coturnix coturnix) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Common quail (Coturnix coturnix) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common quail (Coturnix coturnix) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Common quail gizzard (`slaughter_untrimmed_common_quail_gizzard`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Common quail (Coturnix coturnix) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed gizzard from Common quail (Coturnix coturnix) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Common quail (Coturnix coturnix) gizzard for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Wild mallard skeletal meat (`slaughter_untrimmed_wild_mallard_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Wild mallard (Anas platyrhynchos) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Wild mallard (Anas platyrhynchos) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Wild mallard liver (`slaughter_untrimmed_wild_mallard_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Wild mallard (Anas platyrhynchos) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Wild mallard (Anas platyrhynchos) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Wild mallard (Anas platyrhynchos) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Wild mallard heart (`slaughter_untrimmed_wild_mallard_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Wild mallard (Anas platyrhynchos) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Wild mallard (Anas platyrhynchos) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Wild mallard (Anas platyrhynchos) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Wild mallard gizzard (`slaughter_untrimmed_wild_mallard_gizzard`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Wild mallard (Anas platyrhynchos) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed gizzard from Wild mallard (Anas platyrhynchos) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Wild mallard (Anas platyrhynchos) gizzard for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Wild greylag goose skeletal meat (`slaughter_untrimmed_wild_greylag_goose_skeletal_meat`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Wild greylag goose (Anser anser) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed skeletal meat from Wild greylag goose (Anser anser) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Wild greylag goose (Anser anser) skeletal meat for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Wild greylag goose liver (`slaughter_untrimmed_wild_greylag_goose_liver`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Wild greylag goose (Anser anser) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed liver from Wild greylag goose (Anser anser) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Wild greylag goose (Anser anser) liver for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Wild greylag goose heart (`slaughter_untrimmed_wild_greylag_goose_heart`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Wild greylag goose (Anser anser) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed heart from Wild greylag goose (Anser anser) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Wild greylag goose (Anser anser) heart for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated Wild greylag goose gizzard (`slaughter_untrimmed_wild_greylag_goose_gizzard`)

This is one tissue-specific intermediate and cannot represent another meat cut or organ.

- Selected flow: Untrimmed Wild greylag goose (Anser anser) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated untrimmed gizzard from Wild greylag goose (Anser anser) before transfer to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on recovery of Wild greylag goose (Anser anser) gizzard for edible use.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered skin from Nile crocodile (`slaughter_cover_nile_crocodile`)

The skin is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Nile crocodile (Crocodylus niloticus) skin for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated skin mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Nile crocodile (Crocodylus niloticus) skin.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Nile crocodile blood (`slaughter_recovered_blood_nile_crocodile`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Nile crocodile (Crocodylus niloticus) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Nile crocodile fat (`slaughter_recovered_fat_nile_crocodile`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Nile crocodile (Crocodylus niloticus) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered feathers from Rock dove (`slaughter_cover_rock_dove`)

The feathers is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Rock dove (Columba livia) feathers for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated feathers mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Rock dove (Columba livia) feathers.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Rock dove blood (`slaughter_recovered_blood_rock_dove`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Rock dove (Columba livia) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Rock dove fat (`slaughter_recovered_fat_rock_dove`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Rock dove (Columba livia) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered feathers from Red grouse (`slaughter_cover_red_grouse`)

The feathers is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Red grouse (Lagopus lagopus scotica) feathers for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated feathers mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Red grouse (Lagopus lagopus scotica) feathers.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Red grouse blood (`slaughter_recovered_blood_red_grouse`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Red grouse (Lagopus lagopus scotica) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Red grouse fat (`slaughter_recovered_fat_red_grouse`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Red grouse (Lagopus lagopus scotica) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered feathers from Common ostrich (`slaughter_cover_common_ostrich`)

The feathers is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Common ostrich (Struthio camelus) feathers for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated feathers mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Common ostrich (Struthio camelus) feathers.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Common ostrich blood (`slaughter_recovered_blood_common_ostrich`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Common ostrich (Struthio camelus) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Common ostrich fat (`slaughter_recovered_fat_common_ostrich`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Common ostrich (Struthio camelus) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered feathers from Grey partridge (`slaughter_cover_grey_partridge`)

The feathers is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Grey partridge (Perdix perdix) feathers for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated feathers mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Grey partridge (Perdix perdix) feathers.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Grey partridge blood (`slaughter_recovered_blood_grey_partridge`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Grey partridge (Perdix perdix) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Grey partridge fat (`slaughter_recovered_fat_grey_partridge`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Grey partridge (Perdix perdix) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered feathers from Common pheasant (`slaughter_cover_common_pheasant`)

The feathers is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Common pheasant (Phasianus colchicus) feathers for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated feathers mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Common pheasant (Phasianus colchicus) feathers.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Common pheasant blood (`slaughter_recovered_blood_common_pheasant`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Common pheasant (Phasianus colchicus) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Common pheasant fat (`slaughter_recovered_fat_common_pheasant`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Common pheasant (Phasianus colchicus) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered feathers from Common quail (`slaughter_cover_common_quail`)

The feathers is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Common quail (Coturnix coturnix) feathers for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated feathers mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Common quail (Coturnix coturnix) feathers.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Common quail blood (`slaughter_recovered_blood_common_quail`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Common quail (Coturnix coturnix) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Common quail fat (`slaughter_recovered_fat_common_quail`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Common quail (Coturnix coturnix) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered feathers from Wild mallard (`slaughter_cover_wild_mallard`)

The feathers is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Wild mallard (Anas platyrhynchos) feathers for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated feathers mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Wild mallard (Anas platyrhynchos) feathers.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Wild mallard blood (`slaughter_recovered_blood_wild_mallard`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Wild mallard (Anas platyrhynchos) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Wild mallard fat (`slaughter_recovered_fat_wild_mallard`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Wild mallard (Anas platyrhynchos) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered feathers from Wild greylag goose (`slaughter_cover_wild_greylag_goose`)

The feathers is a species-specific co-product only when destination evidence proves productive use.

- Selected flow: Wild greylag goose (Anser anser) feathers for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated feathers mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented recovery of Wild greylag goose (Anser anser) feathers.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Wild greylag goose blood (`slaughter_recovered_blood_wild_greylag_goose`)

Recovered blood is kept separate from waste blood of the same species.

- Selected flow: Recovered blood from Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Wild greylag goose (Anser anser) collected for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered Wild greylag goose fat (`slaughter_recovered_fat_wild_greylag_goose`)

Recovered fat is a distinct species-specific co-product.

- Selected flow: Recovered slaughter fat from Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated fat mass from Wild greylag goose (Anser anser) accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented productive recovery.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Waste Nile crocodile blood (`slaughter_waste_blood_nile_crocodile`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Nile crocodile (Crocodylus niloticus) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile bone residual (`slaughter_bone_residual_nile_crocodile`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Nile crocodile (Crocodylus niloticus) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile digestive contents (`slaughter_digestive_contents_nile_crocodile`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Nile crocodile (Crocodylus niloticus).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile inedible tissue (`slaughter_inedible_tissue_nile_crocodile`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Nile crocodile (Crocodylus niloticus) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile slaughter wastewater (`slaughter_high_load_wastewater_nile_crocodile`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Nile crocodile (Crocodylus niloticus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste Rock dove blood (`slaughter_waste_blood_rock_dove`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Rock dove (Columba livia) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove bone residual (`slaughter_bone_residual_rock_dove`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Rock dove (Columba livia) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove digestive contents (`slaughter_digestive_contents_rock_dove`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Rock dove (Columba livia).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove inedible tissue (`slaughter_inedible_tissue_rock_dove`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Rock dove (Columba livia)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Rock dove (Columba livia) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove slaughter wastewater (`slaughter_high_load_wastewater_rock_dove`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Rock dove (Columba livia)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Rock dove (Columba livia).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste Red grouse blood (`slaughter_waste_blood_red_grouse`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Red grouse (Lagopus lagopus scotica) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse bone residual (`slaughter_bone_residual_red_grouse`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Red grouse (Lagopus lagopus scotica) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse digestive contents (`slaughter_digestive_contents_red_grouse`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Red grouse (Lagopus lagopus scotica).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse inedible tissue (`slaughter_inedible_tissue_red_grouse`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Red grouse (Lagopus lagopus scotica) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse slaughter wastewater (`slaughter_high_load_wastewater_red_grouse`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Red grouse (Lagopus lagopus scotica).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste Common ostrich blood (`slaughter_waste_blood_common_ostrich`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Common ostrich (Struthio camelus) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich bone residual (`slaughter_bone_residual_common_ostrich`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Common ostrich (Struthio camelus) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich digestive contents (`slaughter_digestive_contents_common_ostrich`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Common ostrich (Struthio camelus).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich inedible tissue (`slaughter_inedible_tissue_common_ostrich`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Common ostrich (Struthio camelus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Common ostrich (Struthio camelus) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich slaughter wastewater (`slaughter_high_load_wastewater_common_ostrich`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Common ostrich (Struthio camelus)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Common ostrich (Struthio camelus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste Grey partridge blood (`slaughter_waste_blood_grey_partridge`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Grey partridge (Perdix perdix) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge bone residual (`slaughter_bone_residual_grey_partridge`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Grey partridge (Perdix perdix) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge digestive contents (`slaughter_digestive_contents_grey_partridge`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Grey partridge (Perdix perdix).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge inedible tissue (`slaughter_inedible_tissue_grey_partridge`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Grey partridge (Perdix perdix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Grey partridge (Perdix perdix) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge slaughter wastewater (`slaughter_high_load_wastewater_grey_partridge`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Grey partridge (Perdix perdix)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Grey partridge (Perdix perdix).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste Common pheasant blood (`slaughter_waste_blood_common_pheasant`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Common pheasant (Phasianus colchicus) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant bone residual (`slaughter_bone_residual_common_pheasant`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Common pheasant (Phasianus colchicus) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant digestive contents (`slaughter_digestive_contents_common_pheasant`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Common pheasant (Phasianus colchicus).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant inedible tissue (`slaughter_inedible_tissue_common_pheasant`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Common pheasant (Phasianus colchicus)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Common pheasant (Phasianus colchicus) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant slaughter wastewater (`slaughter_high_load_wastewater_common_pheasant`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Common pheasant (Phasianus colchicus)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Common pheasant (Phasianus colchicus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste Common quail blood (`slaughter_waste_blood_common_quail`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Common quail (Coturnix coturnix) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail bone residual (`slaughter_bone_residual_common_quail`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Common quail (Coturnix coturnix) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail digestive contents (`slaughter_digestive_contents_common_quail`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Common quail (Coturnix coturnix).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail inedible tissue (`slaughter_inedible_tissue_common_quail`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Common quail (Coturnix coturnix)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Common quail (Coturnix coturnix) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail slaughter wastewater (`slaughter_high_load_wastewater_common_quail`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Common quail (Coturnix coturnix)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Common quail (Coturnix coturnix).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste Wild mallard blood (`slaughter_waste_blood_wild_mallard`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Wild mallard (Anas platyrhynchos) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard bone residual (`slaughter_bone_residual_wild_mallard`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Wild mallard (Anas platyrhynchos) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard digestive contents (`slaughter_digestive_contents_wild_mallard`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Wild mallard (Anas platyrhynchos).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard inedible tissue (`slaughter_inedible_tissue_wild_mallard`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Wild mallard (Anas platyrhynchos) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard slaughter wastewater (`slaughter_high_load_wastewater_wild_mallard`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Wild mallard (Anas platyrhynchos).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste Wild greylag goose blood (`slaughter_waste_blood_wild_greylag_goose`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste blood from Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass from Wild greylag goose (Anser anser) classified and dispatched as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose bone residual (`slaughter_bone_residual_wild_greylag_goose`)

This card contains bone only and excludes tissue trimming and digestive contents.

- Selected flow: Bone residual from Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record separately weighed bone mass from Wild greylag goose (Anser anser) sent to a waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose digestive contents (`slaughter_digestive_contents_wild_greylag_goose`)

Digestive contents are kept separate from edible organs, tissue waste, and wastewater.

- Selected flow: Digestive contents from Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet digestive-content mass from Wild greylag goose (Anser anser).
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on evisceration and separate collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose inedible tissue (`slaughter_inedible_tissue_wild_greylag_goose`)

This species-specific residual excludes bone, blood, digestive contents, and edible-tissue trimming.

- Selected flow: Inedible tissue residual from Wild greylag goose (Anser anser)
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated non-edible tissue mass from Wild greylag goose (Anser anser) dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose slaughter wastewater (`slaughter_high_load_wastewater_wild_greylag_goose`)

This species-specific wastewater carries concentrated load from bleeding, evisceration, and primary washing.

- Selected flow: High-organic-load slaughter wastewater from Wild greylag goose (Anser anser)
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated meter or a matched process-water balance for slaughter wastewater from Wild greylag goose (Anser anser).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on transfer to treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Slaughter ammonia release (`slaughter_ammonia_to_air`)

Ammonia is one substance-specific direct air release.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured exhaust flow and temporally matched ammonia concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter hydrogen sulfide release (`slaughter_hydrogen_sulfide_to_air`)

Hydrogen sulfide is recorded separately from ammonia.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured exhaust flow and temporally matched hydrogen sulfide concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### Process: Species- and tissue-specific preparation (`meat_offal_preparation`)

#### Inputs

##### Product flows

###### Untrimmed Nile crocodile skeletal meat input (`preparation_untrimmed_nile_crocodile_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Nile crocodile (Crocodylus niloticus) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Nile crocodile liver input (`preparation_untrimmed_nile_crocodile_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Nile crocodile (Crocodylus niloticus) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Nile crocodile (Crocodylus niloticus) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Nile crocodile heart input (`preparation_untrimmed_nile_crocodile_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Nile crocodile (Crocodylus niloticus) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Nile crocodile (Crocodylus niloticus) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Nile crocodile kidney input (`preparation_untrimmed_nile_crocodile_kidney_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) kidney
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Nile crocodile (Crocodylus niloticus) kidney.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Nile crocodile (Crocodylus niloticus) kidney.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Nile crocodile stomach input (`preparation_untrimmed_nile_crocodile_stomach_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Nile crocodile (Crocodylus niloticus) stomach
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Nile crocodile (Crocodylus niloticus) stomach.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Nile crocodile (Crocodylus niloticus) stomach.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Rock dove skeletal meat input (`preparation_untrimmed_rock_dove_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Rock dove (Columba livia) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Rock dove (Columba livia) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Rock dove (Columba livia) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Rock dove liver input (`preparation_untrimmed_rock_dove_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Rock dove (Columba livia) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Rock dove (Columba livia) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Rock dove (Columba livia) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Rock dove heart input (`preparation_untrimmed_rock_dove_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Rock dove (Columba livia) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Rock dove (Columba livia) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Rock dove (Columba livia) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Rock dove gizzard input (`preparation_untrimmed_rock_dove_gizzard_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Rock dove (Columba livia) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Rock dove (Columba livia) gizzard.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Rock dove (Columba livia) gizzard.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Red grouse skeletal meat input (`preparation_untrimmed_red_grouse_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Red grouse (Lagopus lagopus scotica) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Red grouse liver input (`preparation_untrimmed_red_grouse_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Red grouse (Lagopus lagopus scotica) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Red grouse (Lagopus lagopus scotica) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Red grouse (Lagopus lagopus scotica) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Red grouse heart input (`preparation_untrimmed_red_grouse_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Red grouse (Lagopus lagopus scotica) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Red grouse (Lagopus lagopus scotica) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Red grouse (Lagopus lagopus scotica) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Red grouse gizzard input (`preparation_untrimmed_red_grouse_gizzard_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Red grouse (Lagopus lagopus scotica) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Red grouse (Lagopus lagopus scotica) gizzard.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Red grouse (Lagopus lagopus scotica) gizzard.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common ostrich skeletal meat input (`preparation_untrimmed_common_ostrich_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common ostrich (Struthio camelus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common ostrich (Struthio camelus) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common ostrich (Struthio camelus) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common ostrich liver input (`preparation_untrimmed_common_ostrich_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common ostrich (Struthio camelus) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common ostrich (Struthio camelus) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common ostrich (Struthio camelus) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common ostrich heart input (`preparation_untrimmed_common_ostrich_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common ostrich (Struthio camelus) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common ostrich (Struthio camelus) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common ostrich (Struthio camelus) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common ostrich gizzard input (`preparation_untrimmed_common_ostrich_gizzard_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common ostrich (Struthio camelus) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common ostrich (Struthio camelus) gizzard.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common ostrich (Struthio camelus) gizzard.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Grey partridge skeletal meat input (`preparation_untrimmed_grey_partridge_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Grey partridge (Perdix perdix) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Grey partridge (Perdix perdix) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Grey partridge (Perdix perdix) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Grey partridge liver input (`preparation_untrimmed_grey_partridge_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Grey partridge (Perdix perdix) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Grey partridge (Perdix perdix) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Grey partridge (Perdix perdix) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Grey partridge heart input (`preparation_untrimmed_grey_partridge_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Grey partridge (Perdix perdix) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Grey partridge (Perdix perdix) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Grey partridge (Perdix perdix) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Grey partridge gizzard input (`preparation_untrimmed_grey_partridge_gizzard_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Grey partridge (Perdix perdix) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Grey partridge (Perdix perdix) gizzard.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Grey partridge (Perdix perdix) gizzard.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common pheasant skeletal meat input (`preparation_untrimmed_common_pheasant_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common pheasant (Phasianus colchicus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common pheasant (Phasianus colchicus) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common pheasant (Phasianus colchicus) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common pheasant liver input (`preparation_untrimmed_common_pheasant_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common pheasant (Phasianus colchicus) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common pheasant (Phasianus colchicus) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common pheasant (Phasianus colchicus) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common pheasant heart input (`preparation_untrimmed_common_pheasant_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common pheasant (Phasianus colchicus) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common pheasant (Phasianus colchicus) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common pheasant (Phasianus colchicus) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common pheasant gizzard input (`preparation_untrimmed_common_pheasant_gizzard_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common pheasant (Phasianus colchicus) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common pheasant (Phasianus colchicus) gizzard.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common pheasant (Phasianus colchicus) gizzard.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common quail skeletal meat input (`preparation_untrimmed_common_quail_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common quail (Coturnix coturnix) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common quail (Coturnix coturnix) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common quail (Coturnix coturnix) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common quail liver input (`preparation_untrimmed_common_quail_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common quail (Coturnix coturnix) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common quail (Coturnix coturnix) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common quail (Coturnix coturnix) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common quail heart input (`preparation_untrimmed_common_quail_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common quail (Coturnix coturnix) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common quail (Coturnix coturnix) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common quail (Coturnix coturnix) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Common quail gizzard input (`preparation_untrimmed_common_quail_gizzard_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Common quail (Coturnix coturnix) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Common quail (Coturnix coturnix) gizzard.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Common quail (Coturnix coturnix) gizzard.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Wild mallard skeletal meat input (`preparation_untrimmed_wild_mallard_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Wild mallard (Anas platyrhynchos) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Wild mallard (Anas platyrhynchos) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Wild mallard liver input (`preparation_untrimmed_wild_mallard_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Wild mallard (Anas platyrhynchos) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Wild mallard (Anas platyrhynchos) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Wild mallard (Anas platyrhynchos) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Wild mallard heart input (`preparation_untrimmed_wild_mallard_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Wild mallard (Anas platyrhynchos) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Wild mallard (Anas platyrhynchos) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Wild mallard (Anas platyrhynchos) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Wild mallard gizzard input (`preparation_untrimmed_wild_mallard_gizzard_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Wild mallard (Anas platyrhynchos) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Wild mallard (Anas platyrhynchos) gizzard.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Wild mallard (Anas platyrhynchos) gizzard.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Wild greylag goose skeletal meat input (`preparation_untrimmed_wild_greylag_goose_skeletal_meat_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Wild greylag goose (Anser anser) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Wild greylag goose (Anser anser) skeletal meat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Wild greylag goose (Anser anser) skeletal meat.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Wild greylag goose liver input (`preparation_untrimmed_wild_greylag_goose_liver_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Wild greylag goose (Anser anser) liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Wild greylag goose (Anser anser) liver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Wild greylag goose (Anser anser) liver.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Wild greylag goose heart input (`preparation_untrimmed_wild_greylag_goose_heart_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Wild greylag goose (Anser anser) heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Wild greylag goose (Anser anser) heart.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Wild greylag goose (Anser anser) heart.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed Wild greylag goose gizzard input (`preparation_untrimmed_wild_greylag_goose_gizzard_input`)

The input is limited to one species and one meat or organ identity.

- Selected flow: Untrimmed Wild greylag goose (Anser anser) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated transfer mass for untrimmed Wild greylag goose (Anser anser) gizzard.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on selection of Wild greylag goose (Anser anser) gizzard.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Preparation electricity (`preparation_electricity`)

Electricity operates trimming, washing, inspection, pumping, and handling equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the preparation-area submeter and a documented activity share for common equipment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Tissue preparation water (`preparation_water`)

Water used for tissue preparation is separate from slaughter and sanitation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the preparation-area water meter for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Required when wet preparation occurs.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fresh Nile crocodile skeletal meat (`preparation_fresh_nile_crocodile_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Nile crocodile (Crocodylus niloticus) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Nile crocodile liver (`preparation_fresh_nile_crocodile_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Nile crocodile (Crocodylus niloticus) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Nile crocodile heart (`preparation_fresh_nile_crocodile_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Nile crocodile (Crocodylus niloticus) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Nile crocodile kidney (`preparation_fresh_nile_crocodile_kidney`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) kidney, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Nile crocodile (Crocodylus niloticus) kidney after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus) kidney being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Nile crocodile stomach (`preparation_fresh_nile_crocodile_stomach`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) stomach, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Nile crocodile (Crocodylus niloticus) stomach after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus) stomach being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Rock dove skeletal meat (`preparation_fresh_rock_dove_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Rock dove (Columba livia) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Rock dove (Columba livia) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Rock dove liver (`preparation_fresh_rock_dove_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Rock dove (Columba livia) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Rock dove (Columba livia) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Rock dove heart (`preparation_fresh_rock_dove_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Rock dove (Columba livia) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Rock dove (Columba livia) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Rock dove gizzard (`preparation_fresh_rock_dove_gizzard`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Rock dove (Columba livia) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Rock dove (Columba livia) gizzard after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia) gizzard being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Red grouse skeletal meat (`preparation_fresh_red_grouse_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Red grouse (Lagopus lagopus scotica) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Red grouse liver (`preparation_fresh_red_grouse_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Red grouse (Lagopus lagopus scotica) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Red grouse heart (`preparation_fresh_red_grouse_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Red grouse (Lagopus lagopus scotica) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Red grouse gizzard (`preparation_fresh_red_grouse_gizzard`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Red grouse (Lagopus lagopus scotica) gizzard after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica) gizzard being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common ostrich skeletal meat (`preparation_fresh_common_ostrich_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common ostrich (Struthio camelus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common ostrich (Struthio camelus) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common ostrich liver (`preparation_fresh_common_ostrich_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common ostrich (Struthio camelus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common ostrich (Struthio camelus) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common ostrich heart (`preparation_fresh_common_ostrich_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common ostrich (Struthio camelus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common ostrich (Struthio camelus) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common ostrich gizzard (`preparation_fresh_common_ostrich_gizzard`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common ostrich (Struthio camelus) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common ostrich (Struthio camelus) gizzard after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus) gizzard being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Grey partridge skeletal meat (`preparation_fresh_grey_partridge_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Grey partridge (Perdix perdix) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Grey partridge (Perdix perdix) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Grey partridge liver (`preparation_fresh_grey_partridge_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Grey partridge (Perdix perdix) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Grey partridge (Perdix perdix) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Grey partridge heart (`preparation_fresh_grey_partridge_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Grey partridge (Perdix perdix) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Grey partridge (Perdix perdix) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Grey partridge gizzard (`preparation_fresh_grey_partridge_gizzard`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Grey partridge (Perdix perdix) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Grey partridge (Perdix perdix) gizzard after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix) gizzard being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common pheasant skeletal meat (`preparation_fresh_common_pheasant_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common pheasant (Phasianus colchicus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common pheasant (Phasianus colchicus) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common pheasant liver (`preparation_fresh_common_pheasant_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common pheasant (Phasianus colchicus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common pheasant (Phasianus colchicus) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common pheasant heart (`preparation_fresh_common_pheasant_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common pheasant (Phasianus colchicus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common pheasant (Phasianus colchicus) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common pheasant gizzard (`preparation_fresh_common_pheasant_gizzard`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common pheasant (Phasianus colchicus) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common pheasant (Phasianus colchicus) gizzard after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus) gizzard being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common quail skeletal meat (`preparation_fresh_common_quail_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common quail (Coturnix coturnix) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common quail (Coturnix coturnix) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common quail liver (`preparation_fresh_common_quail_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common quail (Coturnix coturnix) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common quail (Coturnix coturnix) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common quail heart (`preparation_fresh_common_quail_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common quail (Coturnix coturnix) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common quail (Coturnix coturnix) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Common quail gizzard (`preparation_fresh_common_quail_gizzard`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Common quail (Coturnix coturnix) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Common quail (Coturnix coturnix) gizzard after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix) gizzard being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Wild mallard skeletal meat (`preparation_fresh_wild_mallard_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Wild mallard (Anas platyrhynchos) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Wild mallard (Anas platyrhynchos) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Wild mallard liver (`preparation_fresh_wild_mallard_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Wild mallard (Anas platyrhynchos) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Wild mallard (Anas platyrhynchos) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Wild mallard heart (`preparation_fresh_wild_mallard_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Wild mallard (Anas platyrhynchos) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Wild mallard (Anas platyrhynchos) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Wild mallard gizzard (`preparation_fresh_wild_mallard_gizzard`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Wild mallard (Anas platyrhynchos) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Wild mallard (Anas platyrhynchos) gizzard after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos) gizzard being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Wild greylag goose skeletal meat (`preparation_fresh_wild_greylag_goose_skeletal_meat`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Wild greylag goose (Anser anser) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Wild greylag goose (Anser anser) skeletal meat after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser) skeletal meat being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Wild greylag goose liver (`preparation_fresh_wild_greylag_goose_liver`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Wild greylag goose (Anser anser) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Wild greylag goose (Anser anser) liver after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser) liver being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Wild greylag goose heart (`preparation_fresh_wild_greylag_goose_heart`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Wild greylag goose (Anser anser) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Wild greylag goose (Anser anser) heart after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser) heart being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Prepared fresh Wild greylag goose gizzard (`preparation_fresh_wild_greylag_goose_gizzard`)

This card is the fresh state of one explicit species-tissue variant.

- Selected flow: Wild greylag goose (Anser anser) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net accepted mass of fresh Wild greylag goose (Anser anser) gizzard after trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser) gizzard being prepared for edible release.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Nile crocodile skeletal meat trimming waste (`preparation_trim_waste_nile_crocodile_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Nile crocodile (Crocodylus niloticus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Nile crocodile (Crocodylus niloticus) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile liver trimming waste (`preparation_trim_waste_nile_crocodile_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Nile crocodile (Crocodylus niloticus) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Nile crocodile (Crocodylus niloticus) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile heart trimming waste (`preparation_trim_waste_nile_crocodile_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Nile crocodile (Crocodylus niloticus) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Nile crocodile (Crocodylus niloticus) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile kidney trimming waste (`preparation_trim_waste_nile_crocodile_kidney`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Nile crocodile (Crocodylus niloticus) kidney
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Nile crocodile (Crocodylus niloticus) kidney separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile stomach trimming waste (`preparation_trim_waste_nile_crocodile_stomach`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Nile crocodile (Crocodylus niloticus) stomach
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Nile crocodile (Crocodylus niloticus) stomach separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove skeletal meat trimming waste (`preparation_trim_waste_rock_dove_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Rock dove (Columba livia) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Rock dove (Columba livia) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove liver trimming waste (`preparation_trim_waste_rock_dove_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Rock dove (Columba livia) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Rock dove (Columba livia) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove heart trimming waste (`preparation_trim_waste_rock_dove_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Rock dove (Columba livia) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Rock dove (Columba livia) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove gizzard trimming waste (`preparation_trim_waste_rock_dove_gizzard`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Rock dove (Columba livia) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Rock dove (Columba livia) gizzard separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse skeletal meat trimming waste (`preparation_trim_waste_red_grouse_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Red grouse (Lagopus lagopus scotica) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Red grouse (Lagopus lagopus scotica) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse liver trimming waste (`preparation_trim_waste_red_grouse_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Red grouse (Lagopus lagopus scotica) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Red grouse (Lagopus lagopus scotica) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse heart trimming waste (`preparation_trim_waste_red_grouse_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Red grouse (Lagopus lagopus scotica) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Red grouse (Lagopus lagopus scotica) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse gizzard trimming waste (`preparation_trim_waste_red_grouse_gizzard`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Red grouse (Lagopus lagopus scotica) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Red grouse (Lagopus lagopus scotica) gizzard separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich skeletal meat trimming waste (`preparation_trim_waste_common_ostrich_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common ostrich (Struthio camelus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common ostrich (Struthio camelus) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich liver trimming waste (`preparation_trim_waste_common_ostrich_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common ostrich (Struthio camelus) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common ostrich (Struthio camelus) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich heart trimming waste (`preparation_trim_waste_common_ostrich_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common ostrich (Struthio camelus) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common ostrich (Struthio camelus) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich gizzard trimming waste (`preparation_trim_waste_common_ostrich_gizzard`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common ostrich (Struthio camelus) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common ostrich (Struthio camelus) gizzard separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge skeletal meat trimming waste (`preparation_trim_waste_grey_partridge_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Grey partridge (Perdix perdix) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Grey partridge (Perdix perdix) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge liver trimming waste (`preparation_trim_waste_grey_partridge_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Grey partridge (Perdix perdix) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Grey partridge (Perdix perdix) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge heart trimming waste (`preparation_trim_waste_grey_partridge_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Grey partridge (Perdix perdix) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Grey partridge (Perdix perdix) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge gizzard trimming waste (`preparation_trim_waste_grey_partridge_gizzard`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Grey partridge (Perdix perdix) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Grey partridge (Perdix perdix) gizzard separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant skeletal meat trimming waste (`preparation_trim_waste_common_pheasant_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common pheasant (Phasianus colchicus) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common pheasant (Phasianus colchicus) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant liver trimming waste (`preparation_trim_waste_common_pheasant_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common pheasant (Phasianus colchicus) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common pheasant (Phasianus colchicus) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant heart trimming waste (`preparation_trim_waste_common_pheasant_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common pheasant (Phasianus colchicus) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common pheasant (Phasianus colchicus) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant gizzard trimming waste (`preparation_trim_waste_common_pheasant_gizzard`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common pheasant (Phasianus colchicus) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common pheasant (Phasianus colchicus) gizzard separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail skeletal meat trimming waste (`preparation_trim_waste_common_quail_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common quail (Coturnix coturnix) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common quail (Coturnix coturnix) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail liver trimming waste (`preparation_trim_waste_common_quail_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common quail (Coturnix coturnix) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common quail (Coturnix coturnix) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail heart trimming waste (`preparation_trim_waste_common_quail_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common quail (Coturnix coturnix) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common quail (Coturnix coturnix) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail gizzard trimming waste (`preparation_trim_waste_common_quail_gizzard`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Common quail (Coturnix coturnix) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Common quail (Coturnix coturnix) gizzard separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard skeletal meat trimming waste (`preparation_trim_waste_wild_mallard_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Wild mallard (Anas platyrhynchos) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Wild mallard (Anas platyrhynchos) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard liver trimming waste (`preparation_trim_waste_wild_mallard_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Wild mallard (Anas platyrhynchos) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Wild mallard (Anas platyrhynchos) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard heart trimming waste (`preparation_trim_waste_wild_mallard_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Wild mallard (Anas platyrhynchos) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Wild mallard (Anas platyrhynchos) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard gizzard trimming waste (`preparation_trim_waste_wild_mallard_gizzard`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Wild mallard (Anas platyrhynchos) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Wild mallard (Anas platyrhynchos) gizzard separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose skeletal meat trimming waste (`preparation_trim_waste_wild_greylag_goose_skeletal_meat`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Wild greylag goose (Anser anser) skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Wild greylag goose (Anser anser) skeletal meat separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose liver trimming waste (`preparation_trim_waste_wild_greylag_goose_liver`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Wild greylag goose (Anser anser) liver
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Wild greylag goose (Anser anser) liver separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose heart trimming waste (`preparation_trim_waste_wild_greylag_goose_heart`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Wild greylag goose (Anser anser) heart
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Wild greylag goose (Anser anser) heart separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose gizzard trimming waste (`preparation_trim_waste_wild_greylag_goose_gizzard`)

This waste is specific to one species and one meat or organ identity.

- Selected flow: Trimming waste from Wild greylag goose (Anser anser) gizzard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected trimming material from Wild greylag goose (Anser anser) gizzard separately from every other tissue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on trimming waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nile crocodile preparation wastewater (`preparation_wash_wastewater_nile_crocodile`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Nile crocodile (Crocodylus niloticus)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Nile crocodile (Crocodylus niloticus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rock dove preparation wastewater (`preparation_wash_wastewater_rock_dove`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Rock dove (Columba livia)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Rock dove (Columba livia).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Red grouse preparation wastewater (`preparation_wash_wastewater_red_grouse`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Red grouse (Lagopus lagopus scotica)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Red grouse (Lagopus lagopus scotica).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common ostrich preparation wastewater (`preparation_wash_wastewater_common_ostrich`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Common ostrich (Struthio camelus)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Common ostrich (Struthio camelus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grey partridge preparation wastewater (`preparation_wash_wastewater_grey_partridge`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Grey partridge (Perdix perdix)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Grey partridge (Perdix perdix).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common pheasant preparation wastewater (`preparation_wash_wastewater_common_pheasant`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Common pheasant (Phasianus colchicus)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Common pheasant (Phasianus colchicus).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Common quail preparation wastewater (`preparation_wash_wastewater_common_quail`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Common quail (Coturnix coturnix)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Common quail (Coturnix coturnix).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild mallard preparation wastewater (`preparation_wash_wastewater_wild_mallard`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Wild mallard (Anas platyrhynchos)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Wild mallard (Anas platyrhynchos).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wild greylag goose preparation wastewater (`preparation_wash_wastewater_wild_greylag_goose`)

This species-specific stream carries water from meat or organ washing and inspection.

- Selected flow: High-organic-load preparation wastewater from Wild greylag goose (Anser anser)
- Flow property / unit: Volume / m3
- Amount rule: Record a segregated drain meter or calculate volume from matched washing records for Wild greylag goose (Anser anser).
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

### Process: State-specific chilling and freezing (`state_conditioning`)

#### Inputs

##### Product flows

###### Fresh Nile crocodile skeletal meat entering conditioning (`conditioning_fresh_nile_crocodile_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Nile crocodile (Crocodylus niloticus) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Nile crocodile liver entering conditioning (`conditioning_fresh_nile_crocodile_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Nile crocodile (Crocodylus niloticus) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Nile crocodile heart entering conditioning (`conditioning_fresh_nile_crocodile_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Nile crocodile (Crocodylus niloticus) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Nile crocodile kidney entering conditioning (`conditioning_fresh_nile_crocodile_kidney_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) kidney, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Nile crocodile (Crocodylus niloticus) kidney mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Nile crocodile stomach entering conditioning (`conditioning_fresh_nile_crocodile_stomach_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) stomach, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Nile crocodile (Crocodylus niloticus) stomach mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Rock dove skeletal meat entering conditioning (`conditioning_fresh_rock_dove_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Rock dove (Columba livia) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Rock dove (Columba livia) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Rock dove liver entering conditioning (`conditioning_fresh_rock_dove_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Rock dove (Columba livia) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Rock dove (Columba livia) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Rock dove heart entering conditioning (`conditioning_fresh_rock_dove_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Rock dove (Columba livia) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Rock dove (Columba livia) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Rock dove gizzard entering conditioning (`conditioning_fresh_rock_dove_gizzard_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Rock dove (Columba livia) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Rock dove (Columba livia) gizzard mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Red grouse skeletal meat entering conditioning (`conditioning_fresh_red_grouse_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Red grouse (Lagopus lagopus scotica) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Red grouse liver entering conditioning (`conditioning_fresh_red_grouse_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Red grouse (Lagopus lagopus scotica) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Red grouse heart entering conditioning (`conditioning_fresh_red_grouse_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Red grouse (Lagopus lagopus scotica) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Red grouse gizzard entering conditioning (`conditioning_fresh_red_grouse_gizzard_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Red grouse (Lagopus lagopus scotica) gizzard mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common ostrich skeletal meat entering conditioning (`conditioning_fresh_common_ostrich_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common ostrich (Struthio camelus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common ostrich (Struthio camelus) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common ostrich liver entering conditioning (`conditioning_fresh_common_ostrich_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common ostrich (Struthio camelus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common ostrich (Struthio camelus) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common ostrich heart entering conditioning (`conditioning_fresh_common_ostrich_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common ostrich (Struthio camelus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common ostrich (Struthio camelus) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common ostrich gizzard entering conditioning (`conditioning_fresh_common_ostrich_gizzard_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common ostrich (Struthio camelus) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common ostrich (Struthio camelus) gizzard mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Grey partridge skeletal meat entering conditioning (`conditioning_fresh_grey_partridge_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Grey partridge (Perdix perdix) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Grey partridge (Perdix perdix) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Grey partridge liver entering conditioning (`conditioning_fresh_grey_partridge_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Grey partridge (Perdix perdix) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Grey partridge (Perdix perdix) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Grey partridge heart entering conditioning (`conditioning_fresh_grey_partridge_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Grey partridge (Perdix perdix) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Grey partridge (Perdix perdix) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Grey partridge gizzard entering conditioning (`conditioning_fresh_grey_partridge_gizzard_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Grey partridge (Perdix perdix) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Grey partridge (Perdix perdix) gizzard mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common pheasant skeletal meat entering conditioning (`conditioning_fresh_common_pheasant_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common pheasant (Phasianus colchicus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common pheasant (Phasianus colchicus) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common pheasant liver entering conditioning (`conditioning_fresh_common_pheasant_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common pheasant (Phasianus colchicus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common pheasant (Phasianus colchicus) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common pheasant heart entering conditioning (`conditioning_fresh_common_pheasant_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common pheasant (Phasianus colchicus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common pheasant (Phasianus colchicus) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common pheasant gizzard entering conditioning (`conditioning_fresh_common_pheasant_gizzard_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common pheasant (Phasianus colchicus) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common pheasant (Phasianus colchicus) gizzard mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common quail skeletal meat entering conditioning (`conditioning_fresh_common_quail_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common quail (Coturnix coturnix) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common quail (Coturnix coturnix) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common quail liver entering conditioning (`conditioning_fresh_common_quail_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common quail (Coturnix coturnix) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common quail (Coturnix coturnix) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common quail heart entering conditioning (`conditioning_fresh_common_quail_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common quail (Coturnix coturnix) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common quail (Coturnix coturnix) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Common quail gizzard entering conditioning (`conditioning_fresh_common_quail_gizzard_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Common quail (Coturnix coturnix) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Common quail (Coturnix coturnix) gizzard mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Wild mallard skeletal meat entering conditioning (`conditioning_fresh_wild_mallard_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Wild mallard (Anas platyrhynchos) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Wild mallard (Anas platyrhynchos) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Wild mallard liver entering conditioning (`conditioning_fresh_wild_mallard_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Wild mallard (Anas platyrhynchos) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Wild mallard (Anas platyrhynchos) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Wild mallard heart entering conditioning (`conditioning_fresh_wild_mallard_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Wild mallard (Anas platyrhynchos) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Wild mallard (Anas platyrhynchos) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Wild mallard gizzard entering conditioning (`conditioning_fresh_wild_mallard_gizzard_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Wild mallard (Anas platyrhynchos) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Wild mallard (Anas platyrhynchos) gizzard mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Wild greylag goose skeletal meat entering conditioning (`conditioning_fresh_wild_greylag_goose_skeletal_meat_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Wild greylag goose (Anser anser) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Wild greylag goose (Anser anser) skeletal meat mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Wild greylag goose liver entering conditioning (`conditioning_fresh_wild_greylag_goose_liver_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Wild greylag goose (Anser anser) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Wild greylag goose (Anser anser) liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Wild greylag goose heart entering conditioning (`conditioning_fresh_wild_greylag_goose_heart_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Wild greylag goose (Anser anser) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Wild greylag goose (Anser anser) heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh Wild greylag goose gizzard entering conditioning (`conditioning_fresh_wild_greylag_goose_gizzard_input`)

This input enters only the chilled or frozen route for one species-tissue variant.

- Selected flow: Wild greylag goose (Anser anser) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured fresh Wild greylag goose (Anser anser) gizzard mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on the declared state being chilled or frozen and this variant being selected.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilling electricity (`conditioning_chilling_electricity`)

Electricity for chilling is separate from freezing and storage electricity.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the chilling-system submeter and calculate the lot share from measured residence and occupancy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_utilities`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on chilled production.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Freezing electricity (`conditioning_freezing_electricity`)

Electricity for freezing is separate from chilling and frozen storage.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the freezer submeter and calculate the lot share from measured residence and occupancy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_utilities`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on frozen production.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Conditioning process water (`conditioning_process_water`)

This water excludes cleaning water recorded in hygiene operations.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water used directly by chilling, freezing, or defrost equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_utilities`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on water use by conditioning equipment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R717 refrigerant make-up (`conditioning_r717_makeup`)

R717 make-up is recorded separately from every other refrigerant species.

- Selected flow: Ammonia, refrigerant grade R717
- Flow property / unit: Mass / kg
- Amount rule: Record R717 make-up by circuit from cylinder weights and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on an R717 circuit and recorded make-up.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R744 refrigerant make-up (`conditioning_r744_makeup`)

R744 make-up is recorded separately from every other refrigerant species.

- Selected flow: Carbon dioxide, refrigerant grade R744
- Flow property / unit: Mass / kg
- Amount rule: Record R744 make-up by circuit from cylinder weights and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on an R744 circuit and recorded make-up.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R290 refrigerant make-up (`conditioning_r290_makeup`)

R290 make-up is recorded separately from every other refrigerant species.

- Selected flow: Propane, refrigerant grade R290
- Flow property / unit: Mass / kg
- Amount rule: Record R290 make-up by circuit from cylinder weights and service records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on an R290 circuit and recorded make-up.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled Nile crocodile skeletal meat (`conditioning_chilled_nile_crocodile_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Nile crocodile (Crocodylus niloticus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Nile crocodile skeletal meat (`conditioning_frozen_nile_crocodile_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Nile crocodile (Crocodylus niloticus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Nile crocodile liver (`conditioning_chilled_nile_crocodile_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Nile crocodile (Crocodylus niloticus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Nile crocodile liver (`conditioning_frozen_nile_crocodile_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Nile crocodile (Crocodylus niloticus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Nile crocodile heart (`conditioning_chilled_nile_crocodile_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Nile crocodile (Crocodylus niloticus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Nile crocodile heart (`conditioning_frozen_nile_crocodile_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Nile crocodile (Crocodylus niloticus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Nile crocodile kidney (`conditioning_chilled_nile_crocodile_kidney`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Nile crocodile (Crocodylus niloticus) kidney, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) kidney transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Nile crocodile kidney (`conditioning_frozen_nile_crocodile_kidney`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Nile crocodile (Crocodylus niloticus) kidney, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) kidney transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Nile crocodile stomach (`conditioning_chilled_nile_crocodile_stomach`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Nile crocodile (Crocodylus niloticus) stomach, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) stomach transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Nile crocodile stomach (`conditioning_frozen_nile_crocodile_stomach`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Nile crocodile (Crocodylus niloticus) stomach, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) stomach transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Rock dove skeletal meat (`conditioning_chilled_rock_dove_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Rock dove (Columba livia) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Rock dove (Columba livia) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Rock dove skeletal meat (`conditioning_frozen_rock_dove_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Rock dove (Columba livia) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Rock dove (Columba livia) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Rock dove liver (`conditioning_chilled_rock_dove_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Rock dove (Columba livia) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Rock dove (Columba livia) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Rock dove liver (`conditioning_frozen_rock_dove_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Rock dove (Columba livia) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Rock dove (Columba livia) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Rock dove heart (`conditioning_chilled_rock_dove_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Rock dove (Columba livia) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Rock dove (Columba livia) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Rock dove heart (`conditioning_frozen_rock_dove_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Rock dove (Columba livia) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Rock dove (Columba livia) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Rock dove gizzard (`conditioning_chilled_rock_dove_gizzard`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Rock dove (Columba livia) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Rock dove (Columba livia) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Rock dove gizzard (`conditioning_frozen_rock_dove_gizzard`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Rock dove (Columba livia) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Rock dove (Columba livia) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Red grouse skeletal meat (`conditioning_chilled_red_grouse_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Red grouse (Lagopus lagopus scotica) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Red grouse (Lagopus lagopus scotica) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Red grouse skeletal meat (`conditioning_frozen_red_grouse_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Red grouse (Lagopus lagopus scotica) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Red grouse (Lagopus lagopus scotica) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Red grouse liver (`conditioning_chilled_red_grouse_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Red grouse (Lagopus lagopus scotica) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Red grouse (Lagopus lagopus scotica) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Red grouse liver (`conditioning_frozen_red_grouse_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Red grouse (Lagopus lagopus scotica) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Red grouse (Lagopus lagopus scotica) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Red grouse heart (`conditioning_chilled_red_grouse_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Red grouse (Lagopus lagopus scotica) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Red grouse (Lagopus lagopus scotica) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Red grouse heart (`conditioning_frozen_red_grouse_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Red grouse (Lagopus lagopus scotica) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Red grouse (Lagopus lagopus scotica) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Red grouse gizzard (`conditioning_chilled_red_grouse_gizzard`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Red grouse (Lagopus lagopus scotica) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Red grouse (Lagopus lagopus scotica) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Red grouse gizzard (`conditioning_frozen_red_grouse_gizzard`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Red grouse (Lagopus lagopus scotica) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Red grouse (Lagopus lagopus scotica) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common ostrich skeletal meat (`conditioning_chilled_common_ostrich_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common ostrich (Struthio camelus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common ostrich (Struthio camelus) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common ostrich skeletal meat (`conditioning_frozen_common_ostrich_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common ostrich (Struthio camelus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common ostrich (Struthio camelus) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common ostrich liver (`conditioning_chilled_common_ostrich_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common ostrich (Struthio camelus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common ostrich (Struthio camelus) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common ostrich liver (`conditioning_frozen_common_ostrich_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common ostrich (Struthio camelus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common ostrich (Struthio camelus) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common ostrich heart (`conditioning_chilled_common_ostrich_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common ostrich (Struthio camelus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common ostrich (Struthio camelus) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common ostrich heart (`conditioning_frozen_common_ostrich_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common ostrich (Struthio camelus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common ostrich (Struthio camelus) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common ostrich gizzard (`conditioning_chilled_common_ostrich_gizzard`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common ostrich (Struthio camelus) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common ostrich (Struthio camelus) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common ostrich gizzard (`conditioning_frozen_common_ostrich_gizzard`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common ostrich (Struthio camelus) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common ostrich (Struthio camelus) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Grey partridge skeletal meat (`conditioning_chilled_grey_partridge_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Grey partridge (Perdix perdix) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Grey partridge (Perdix perdix) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Grey partridge skeletal meat (`conditioning_frozen_grey_partridge_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Grey partridge (Perdix perdix) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Grey partridge (Perdix perdix) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Grey partridge liver (`conditioning_chilled_grey_partridge_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Grey partridge (Perdix perdix) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Grey partridge (Perdix perdix) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Grey partridge liver (`conditioning_frozen_grey_partridge_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Grey partridge (Perdix perdix) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Grey partridge (Perdix perdix) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Grey partridge heart (`conditioning_chilled_grey_partridge_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Grey partridge (Perdix perdix) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Grey partridge (Perdix perdix) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Grey partridge heart (`conditioning_frozen_grey_partridge_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Grey partridge (Perdix perdix) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Grey partridge (Perdix perdix) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Grey partridge gizzard (`conditioning_chilled_grey_partridge_gizzard`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Grey partridge (Perdix perdix) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Grey partridge (Perdix perdix) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Grey partridge gizzard (`conditioning_frozen_grey_partridge_gizzard`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Grey partridge (Perdix perdix) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Grey partridge (Perdix perdix) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common pheasant skeletal meat (`conditioning_chilled_common_pheasant_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common pheasant (Phasianus colchicus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common pheasant (Phasianus colchicus) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common pheasant skeletal meat (`conditioning_frozen_common_pheasant_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common pheasant (Phasianus colchicus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common pheasant (Phasianus colchicus) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common pheasant liver (`conditioning_chilled_common_pheasant_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common pheasant (Phasianus colchicus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common pheasant (Phasianus colchicus) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common pheasant liver (`conditioning_frozen_common_pheasant_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common pheasant (Phasianus colchicus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common pheasant (Phasianus colchicus) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common pheasant heart (`conditioning_chilled_common_pheasant_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common pheasant (Phasianus colchicus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common pheasant (Phasianus colchicus) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common pheasant heart (`conditioning_frozen_common_pheasant_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common pheasant (Phasianus colchicus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common pheasant (Phasianus colchicus) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common pheasant gizzard (`conditioning_chilled_common_pheasant_gizzard`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common pheasant (Phasianus colchicus) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common pheasant (Phasianus colchicus) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common pheasant gizzard (`conditioning_frozen_common_pheasant_gizzard`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common pheasant (Phasianus colchicus) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common pheasant (Phasianus colchicus) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common quail skeletal meat (`conditioning_chilled_common_quail_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common quail (Coturnix coturnix) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common quail (Coturnix coturnix) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common quail skeletal meat (`conditioning_frozen_common_quail_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common quail (Coturnix coturnix) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common quail (Coturnix coturnix) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common quail liver (`conditioning_chilled_common_quail_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common quail (Coturnix coturnix) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common quail (Coturnix coturnix) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common quail liver (`conditioning_frozen_common_quail_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common quail (Coturnix coturnix) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common quail (Coturnix coturnix) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common quail heart (`conditioning_chilled_common_quail_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common quail (Coturnix coturnix) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common quail (Coturnix coturnix) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common quail heart (`conditioning_frozen_common_quail_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common quail (Coturnix coturnix) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common quail (Coturnix coturnix) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Common quail gizzard (`conditioning_chilled_common_quail_gizzard`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Common quail (Coturnix coturnix) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common quail (Coturnix coturnix) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Common quail gizzard (`conditioning_frozen_common_quail_gizzard`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Common quail (Coturnix coturnix) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common quail (Coturnix coturnix) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Wild mallard skeletal meat (`conditioning_chilled_wild_mallard_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Wild mallard (Anas platyrhynchos) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild mallard (Anas platyrhynchos) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Wild mallard skeletal meat (`conditioning_frozen_wild_mallard_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Wild mallard (Anas platyrhynchos) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild mallard (Anas platyrhynchos) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Wild mallard liver (`conditioning_chilled_wild_mallard_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Wild mallard (Anas platyrhynchos) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild mallard (Anas platyrhynchos) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Wild mallard liver (`conditioning_frozen_wild_mallard_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Wild mallard (Anas platyrhynchos) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild mallard (Anas platyrhynchos) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Wild mallard heart (`conditioning_chilled_wild_mallard_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Wild mallard (Anas platyrhynchos) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild mallard (Anas platyrhynchos) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Wild mallard heart (`conditioning_frozen_wild_mallard_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Wild mallard (Anas platyrhynchos) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild mallard (Anas platyrhynchos) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Wild mallard gizzard (`conditioning_chilled_wild_mallard_gizzard`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Wild mallard (Anas platyrhynchos) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild mallard (Anas platyrhynchos) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Wild mallard gizzard (`conditioning_frozen_wild_mallard_gizzard`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Wild mallard (Anas platyrhynchos) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild mallard (Anas platyrhynchos) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Wild greylag goose skeletal meat (`conditioning_chilled_wild_greylag_goose_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Wild greylag goose (Anser anser) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild greylag goose (Anser anser) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Wild greylag goose skeletal meat (`conditioning_frozen_wild_greylag_goose_skeletal_meat`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Wild greylag goose (Anser anser) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild greylag goose (Anser anser) skeletal meat transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Wild greylag goose liver (`conditioning_chilled_wild_greylag_goose_liver`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Wild greylag goose (Anser anser) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild greylag goose (Anser anser) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Wild greylag goose liver (`conditioning_frozen_wild_greylag_goose_liver`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Wild greylag goose (Anser anser) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild greylag goose (Anser anser) liver transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Wild greylag goose heart (`conditioning_chilled_wild_greylag_goose_heart`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Wild greylag goose (Anser anser) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild greylag goose (Anser anser) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Wild greylag goose heart (`conditioning_frozen_wild_greylag_goose_heart`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Wild greylag goose (Anser anser) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild greylag goose (Anser anser) heart transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled Wild greylag goose gizzard (`conditioning_chilled_wild_greylag_goose_gizzard`)

This output is limited to one species, one meat or organ identity, and the chilled state.

- Selected flow: Wild greylag goose (Anser anser) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild greylag goose (Anser anser) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and chilled state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen Wild greylag goose gizzard (`conditioning_frozen_wild_greylag_goose_gizzard`)

This output is limited to one species, one meat or organ identity, and the frozen state.

- Selected flow: Wild greylag goose (Anser anser) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild greylag goose (Anser anser) gizzard transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_products`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on this variant and frozen state being declared.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Defrost wastewater (`conditioning_defrost_wastewater`)

Defrost wastewater is kept separate from condensate and sanitation wastewater.

- Selected flow: Cold-system defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated defrost drain meter or calculate volume from matched defrost-water records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_utilities`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on wet defrost and drain discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Cold-system condensate wastewater (`conditioning_condensate_wastewater`)

Condensate is one specific aqueous output from the cold system.

- Selected flow: Cold-system condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the condensate drain meter after subtracting documented reuse.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_utilities`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on condensate discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### R717 refrigerant release (`conditioning_r717_to_air`)

This is a direct R717 release to air only.

- Selected flow: Ammonia, R717 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate R717 loss by species- and circuit-specific inventory reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on a documented R717 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R744 refrigerant release (`conditioning_r744_to_air`)

This is a direct R744 release to air only.

- Selected flow: Carbon dioxide, R744 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate R744 loss by species- and circuit-specific inventory reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on a documented R744 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R290 refrigerant release (`conditioning_r290_to_air`)

This is a direct R290 release to air only.

- Selected flow: Propane, R290 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate R290 loss by species- and circuit-specific inventory reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on a documented R290 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### Process: Variant packaging, storage, and release (`variant_packaging_release`)

#### Inputs

##### Product flows

###### fresh Nile crocodile skeletal meat variant (`packaging_fresh_nile_crocodile_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Nile crocodile (Crocodylus niloticus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Nile crocodile skeletal meat variant (`packaging_chilled_nile_crocodile_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Nile crocodile skeletal meat variant (`packaging_frozen_nile_crocodile_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Nile crocodile liver variant (`packaging_fresh_nile_crocodile_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Nile crocodile (Crocodylus niloticus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Nile crocodile liver variant (`packaging_chilled_nile_crocodile_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Nile crocodile liver variant (`packaging_frozen_nile_crocodile_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Nile crocodile heart variant (`packaging_fresh_nile_crocodile_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Nile crocodile (Crocodylus niloticus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Nile crocodile heart variant (`packaging_chilled_nile_crocodile_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Nile crocodile heart variant (`packaging_frozen_nile_crocodile_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Nile crocodile kidney variant (`packaging_fresh_nile_crocodile_kidney`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) kidney, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Nile crocodile (Crocodylus niloticus) kidney assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), kidney, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Nile crocodile kidney variant (`packaging_chilled_nile_crocodile_kidney`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) kidney, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) kidney assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), kidney, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Nile crocodile kidney variant (`packaging_frozen_nile_crocodile_kidney`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) kidney, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) kidney assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), kidney, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Nile crocodile stomach variant (`packaging_fresh_nile_crocodile_stomach`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) stomach, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Nile crocodile (Crocodylus niloticus) stomach assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), stomach, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Nile crocodile stomach variant (`packaging_chilled_nile_crocodile_stomach`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) stomach, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Nile crocodile (Crocodylus niloticus) stomach assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), stomach, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Nile crocodile stomach variant (`packaging_frozen_nile_crocodile_stomach`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Nile crocodile (Crocodylus niloticus) stomach, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Nile crocodile (Crocodylus niloticus) stomach assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Nile crocodile (Crocodylus niloticus), stomach, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Rock dove skeletal meat variant (`packaging_fresh_rock_dove_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Rock dove (Columba livia) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Rock dove skeletal meat variant (`packaging_chilled_rock_dove_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Rock dove (Columba livia) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Rock dove skeletal meat variant (`packaging_frozen_rock_dove_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Rock dove (Columba livia) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Rock dove liver variant (`packaging_fresh_rock_dove_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Rock dove (Columba livia) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Rock dove liver variant (`packaging_chilled_rock_dove_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Rock dove (Columba livia) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Rock dove liver variant (`packaging_frozen_rock_dove_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Rock dove (Columba livia) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Rock dove heart variant (`packaging_fresh_rock_dove_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Rock dove (Columba livia) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Rock dove heart variant (`packaging_chilled_rock_dove_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Rock dove (Columba livia) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Rock dove heart variant (`packaging_frozen_rock_dove_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Rock dove (Columba livia) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Rock dove gizzard variant (`packaging_fresh_rock_dove_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Rock dove (Columba livia) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), gizzard, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Rock dove gizzard variant (`packaging_chilled_rock_dove_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Rock dove (Columba livia) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), gizzard, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Rock dove gizzard variant (`packaging_frozen_rock_dove_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Rock dove (Columba livia) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Rock dove (Columba livia) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Rock dove (Columba livia), gizzard, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Red grouse skeletal meat variant (`packaging_fresh_red_grouse_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Red grouse (Lagopus lagopus scotica) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Red grouse skeletal meat variant (`packaging_chilled_red_grouse_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Red grouse (Lagopus lagopus scotica) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Red grouse skeletal meat variant (`packaging_frozen_red_grouse_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Red grouse (Lagopus lagopus scotica) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Red grouse liver variant (`packaging_fresh_red_grouse_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Red grouse (Lagopus lagopus scotica) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Red grouse liver variant (`packaging_chilled_red_grouse_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Red grouse (Lagopus lagopus scotica) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Red grouse liver variant (`packaging_frozen_red_grouse_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Red grouse (Lagopus lagopus scotica) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Red grouse heart variant (`packaging_fresh_red_grouse_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Red grouse (Lagopus lagopus scotica) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Red grouse heart variant (`packaging_chilled_red_grouse_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Red grouse (Lagopus lagopus scotica) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Red grouse heart variant (`packaging_frozen_red_grouse_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Red grouse (Lagopus lagopus scotica) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Red grouse gizzard variant (`packaging_fresh_red_grouse_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Red grouse (Lagopus lagopus scotica) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), gizzard, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Red grouse gizzard variant (`packaging_chilled_red_grouse_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Red grouse (Lagopus lagopus scotica) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), gizzard, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Red grouse gizzard variant (`packaging_frozen_red_grouse_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Red grouse (Lagopus lagopus scotica) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Red grouse (Lagopus lagopus scotica) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Red grouse (Lagopus lagopus scotica), gizzard, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common ostrich skeletal meat variant (`packaging_fresh_common_ostrich_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common ostrich (Struthio camelus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common ostrich skeletal meat variant (`packaging_chilled_common_ostrich_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common ostrich (Struthio camelus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common ostrich skeletal meat variant (`packaging_frozen_common_ostrich_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common ostrich (Struthio camelus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common ostrich liver variant (`packaging_fresh_common_ostrich_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common ostrich (Struthio camelus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common ostrich liver variant (`packaging_chilled_common_ostrich_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common ostrich (Struthio camelus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common ostrich liver variant (`packaging_frozen_common_ostrich_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common ostrich (Struthio camelus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common ostrich heart variant (`packaging_fresh_common_ostrich_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common ostrich (Struthio camelus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common ostrich heart variant (`packaging_chilled_common_ostrich_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common ostrich (Struthio camelus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common ostrich heart variant (`packaging_frozen_common_ostrich_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common ostrich (Struthio camelus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common ostrich gizzard variant (`packaging_fresh_common_ostrich_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common ostrich (Struthio camelus) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), gizzard, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common ostrich gizzard variant (`packaging_chilled_common_ostrich_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common ostrich (Struthio camelus) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), gizzard, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common ostrich gizzard variant (`packaging_frozen_common_ostrich_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common ostrich (Struthio camelus) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common ostrich (Struthio camelus) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common ostrich (Struthio camelus), gizzard, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Grey partridge skeletal meat variant (`packaging_fresh_grey_partridge_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Grey partridge (Perdix perdix) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Grey partridge skeletal meat variant (`packaging_chilled_grey_partridge_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Grey partridge (Perdix perdix) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Grey partridge skeletal meat variant (`packaging_frozen_grey_partridge_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Grey partridge (Perdix perdix) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Grey partridge liver variant (`packaging_fresh_grey_partridge_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Grey partridge (Perdix perdix) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Grey partridge liver variant (`packaging_chilled_grey_partridge_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Grey partridge (Perdix perdix) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Grey partridge liver variant (`packaging_frozen_grey_partridge_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Grey partridge (Perdix perdix) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Grey partridge heart variant (`packaging_fresh_grey_partridge_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Grey partridge (Perdix perdix) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Grey partridge heart variant (`packaging_chilled_grey_partridge_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Grey partridge (Perdix perdix) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Grey partridge heart variant (`packaging_frozen_grey_partridge_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Grey partridge (Perdix perdix) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Grey partridge gizzard variant (`packaging_fresh_grey_partridge_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Grey partridge (Perdix perdix) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), gizzard, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Grey partridge gizzard variant (`packaging_chilled_grey_partridge_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Grey partridge (Perdix perdix) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), gizzard, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Grey partridge gizzard variant (`packaging_frozen_grey_partridge_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Grey partridge (Perdix perdix) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Grey partridge (Perdix perdix) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Grey partridge (Perdix perdix), gizzard, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common pheasant skeletal meat variant (`packaging_fresh_common_pheasant_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common pheasant (Phasianus colchicus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common pheasant skeletal meat variant (`packaging_chilled_common_pheasant_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common pheasant (Phasianus colchicus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common pheasant skeletal meat variant (`packaging_frozen_common_pheasant_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common pheasant (Phasianus colchicus) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common pheasant liver variant (`packaging_fresh_common_pheasant_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common pheasant (Phasianus colchicus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common pheasant liver variant (`packaging_chilled_common_pheasant_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common pheasant (Phasianus colchicus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common pheasant liver variant (`packaging_frozen_common_pheasant_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common pheasant (Phasianus colchicus) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common pheasant heart variant (`packaging_fresh_common_pheasant_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common pheasant (Phasianus colchicus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common pheasant heart variant (`packaging_chilled_common_pheasant_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common pheasant (Phasianus colchicus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common pheasant heart variant (`packaging_frozen_common_pheasant_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common pheasant (Phasianus colchicus) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common pheasant gizzard variant (`packaging_fresh_common_pheasant_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common pheasant (Phasianus colchicus) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), gizzard, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common pheasant gizzard variant (`packaging_chilled_common_pheasant_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common pheasant (Phasianus colchicus) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), gizzard, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common pheasant gizzard variant (`packaging_frozen_common_pheasant_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common pheasant (Phasianus colchicus) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common pheasant (Phasianus colchicus) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common pheasant (Phasianus colchicus), gizzard, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common quail skeletal meat variant (`packaging_fresh_common_quail_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common quail (Coturnix coturnix) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common quail skeletal meat variant (`packaging_chilled_common_quail_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common quail (Coturnix coturnix) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common quail skeletal meat variant (`packaging_frozen_common_quail_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common quail (Coturnix coturnix) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common quail liver variant (`packaging_fresh_common_quail_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common quail (Coturnix coturnix) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common quail liver variant (`packaging_chilled_common_quail_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common quail (Coturnix coturnix) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common quail liver variant (`packaging_frozen_common_quail_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common quail (Coturnix coturnix) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common quail heart variant (`packaging_fresh_common_quail_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common quail (Coturnix coturnix) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common quail heart variant (`packaging_chilled_common_quail_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common quail (Coturnix coturnix) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common quail heart variant (`packaging_frozen_common_quail_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common quail (Coturnix coturnix) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Common quail gizzard variant (`packaging_fresh_common_quail_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Common quail (Coturnix coturnix) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), gizzard, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Common quail gizzard variant (`packaging_chilled_common_quail_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Common quail (Coturnix coturnix) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), gizzard, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Common quail gizzard variant (`packaging_frozen_common_quail_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Common quail (Coturnix coturnix) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Common quail (Coturnix coturnix) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Common quail (Coturnix coturnix), gizzard, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Wild mallard skeletal meat variant (`packaging_fresh_wild_mallard_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Wild mallard (Anas platyrhynchos) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Wild mallard skeletal meat variant (`packaging_chilled_wild_mallard_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild mallard (Anas platyrhynchos) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Wild mallard skeletal meat variant (`packaging_frozen_wild_mallard_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild mallard (Anas platyrhynchos) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Wild mallard liver variant (`packaging_fresh_wild_mallard_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Wild mallard (Anas platyrhynchos) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Wild mallard liver variant (`packaging_chilled_wild_mallard_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild mallard (Anas platyrhynchos) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Wild mallard liver variant (`packaging_frozen_wild_mallard_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild mallard (Anas platyrhynchos) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Wild mallard heart variant (`packaging_fresh_wild_mallard_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Wild mallard (Anas platyrhynchos) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Wild mallard heart variant (`packaging_chilled_wild_mallard_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild mallard (Anas platyrhynchos) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Wild mallard heart variant (`packaging_frozen_wild_mallard_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild mallard (Anas platyrhynchos) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Wild mallard gizzard variant (`packaging_fresh_wild_mallard_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Wild mallard (Anas platyrhynchos) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), gizzard, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Wild mallard gizzard variant (`packaging_chilled_wild_mallard_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild mallard (Anas platyrhynchos) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), gizzard, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Wild mallard gizzard variant (`packaging_frozen_wild_mallard_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild mallard (Anas platyrhynchos) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild mallard (Anas platyrhynchos) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild mallard (Anas platyrhynchos), gizzard, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Wild greylag goose skeletal meat variant (`packaging_fresh_wild_greylag_goose_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Wild greylag goose (Anser anser) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), skeletal meat, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Wild greylag goose skeletal meat variant (`packaging_chilled_wild_greylag_goose_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild greylag goose (Anser anser) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), skeletal meat, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Wild greylag goose skeletal meat variant (`packaging_frozen_wild_greylag_goose_skeletal_meat`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild greylag goose (Anser anser) skeletal meat assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), skeletal meat, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Wild greylag goose liver variant (`packaging_fresh_wild_greylag_goose_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Wild greylag goose (Anser anser) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), liver, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Wild greylag goose liver variant (`packaging_chilled_wild_greylag_goose_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild greylag goose (Anser anser) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), liver, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Wild greylag goose liver variant (`packaging_frozen_wild_greylag_goose_liver`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild greylag goose (Anser anser) liver assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), liver, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Wild greylag goose heart variant (`packaging_fresh_wild_greylag_goose_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Wild greylag goose (Anser anser) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), heart, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Wild greylag goose heart variant (`packaging_chilled_wild_greylag_goose_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild greylag goose (Anser anser) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), heart, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Wild greylag goose heart variant (`packaging_frozen_wild_greylag_goose_heart`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild greylag goose (Anser anser) heart assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), heart, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### fresh Wild greylag goose gizzard variant (`packaging_fresh_wild_greylag_goose_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of fresh Wild greylag goose (Anser anser) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), gizzard, and fresh being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### chilled Wild greylag goose gizzard variant (`packaging_chilled_wild_greylag_goose_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of chilled Wild greylag goose (Anser anser) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), gizzard, and chilled being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### frozen Wild greylag goose gizzard variant (`packaging_frozen_wild_greylag_goose_gizzard`)

This is one fully specified species-tissue-state input; one dataset may activate exactly one such variant.

- Selected flow: Wild greylag goose (Anser anser) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of frozen Wild greylag goose (Anser anser) gizzard assigned to the released reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_variant_selection`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on Wild greylag goose (Anser anser), gizzard, and frozen being the three declared reference qualifiers.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Packaging electricity (`packaging_electricity`)

Packaging electricity excludes chilled and frozen storage meters.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the packaging-line submeter and a documented lot share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by packaging.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled storage electricity (`storage_chilled_electricity`)

Chilled storage electricity applies only to the chilled reference state.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the chilled-room submeter and measured product residence and occupancy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on chilled storage.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen storage electricity (`storage_frozen_electricity`)

Frozen storage electricity applies only to the frozen reference state.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the frozen-room submeter and measured product residence and occupancy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on frozen storage.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### LDPE film component (`packaging_ldpe_film`)

LDPE film is one material-specific packaging component.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Calculate issued LDPE film less returned material for the released lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on the product BoM containing LDPE film.
- Sources: `eu-2021-2279-environmental-footprint`

###### Fibreboard box component (`packaging_fibreboard_box`)

The corrugated fibreboard box is separate from labels, film, and pallets.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Calculate box count multiplied by verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on the product BoM containing a fibreboard box.
- Sources: `eu-2021-2279-environmental-footprint`

###### Paper label component (`packaging_paper_label`)

Paper labels are one independently measured packaging material.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Calculate label count multiplied by verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on paper-label use.
- Sources: `eu-2021-2279-environmental-footprint`

###### Wood pallet component (`packaging_wood_pallet`)

The reusable wood pallet remains separate from single-use packaging components.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Calculate allocated pallet mass from verified pallet mass and documented reuse cycles.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on pallet use.
- Sources: `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference output for one declared CPC 21170 variant (`cpc21170_reference_product`)

The broad official Tiangong flow is used as category identity only; the actual dataset output is one fully specified species-tissue-state variant.

- Selected flow: Other meat and edible offal, fresh, chilled or frozen `e67d4710-2094-4972-85a2-9e593546ae82`
- Flow property / unit: Mass / kg
- Amount rule: Record exactly 1 kg net conforming product for one declared species, one declared skeletal-meat or organ identity, and one declared fresh, chilled, or frozen state; exclude packaging mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- UUID status: Verified public state=100 Product flow with exact CPC 21170 and Mass reference.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Required; exactly one quantitative reference output per dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Rejected fresh Nile crocodile skeletal meat (`packaging_reject_fresh_nile_crocodile_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Nile crocodile (Crocodylus niloticus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Nile crocodile skeletal meat (`packaging_reject_chilled_nile_crocodile_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Nile crocodile (Crocodylus niloticus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Nile crocodile skeletal meat (`packaging_reject_frozen_nile_crocodile_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Nile crocodile (Crocodylus niloticus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Nile crocodile liver (`packaging_reject_fresh_nile_crocodile_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Nile crocodile (Crocodylus niloticus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Nile crocodile liver (`packaging_reject_chilled_nile_crocodile_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Nile crocodile (Crocodylus niloticus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Nile crocodile liver (`packaging_reject_frozen_nile_crocodile_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Nile crocodile (Crocodylus niloticus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Nile crocodile heart (`packaging_reject_fresh_nile_crocodile_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Nile crocodile (Crocodylus niloticus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Nile crocodile heart (`packaging_reject_chilled_nile_crocodile_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Nile crocodile (Crocodylus niloticus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Nile crocodile heart (`packaging_reject_frozen_nile_crocodile_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Nile crocodile (Crocodylus niloticus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Nile crocodile kidney (`packaging_reject_fresh_nile_crocodile_kidney`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) kidney, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Nile crocodile (Crocodylus niloticus) kidney separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Nile crocodile kidney (`packaging_reject_chilled_nile_crocodile_kidney`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) kidney, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Nile crocodile (Crocodylus niloticus) kidney separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Nile crocodile kidney (`packaging_reject_frozen_nile_crocodile_kidney`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) kidney, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Nile crocodile (Crocodylus niloticus) kidney separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Nile crocodile stomach (`packaging_reject_fresh_nile_crocodile_stomach`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) stomach, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Nile crocodile (Crocodylus niloticus) stomach separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Nile crocodile stomach (`packaging_reject_chilled_nile_crocodile_stomach`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) stomach, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Nile crocodile (Crocodylus niloticus) stomach separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Nile crocodile stomach (`packaging_reject_frozen_nile_crocodile_stomach`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Nile crocodile (Crocodylus niloticus) stomach, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Nile crocodile (Crocodylus niloticus) stomach separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Rock dove skeletal meat (`packaging_reject_fresh_rock_dove_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Rock dove (Columba livia) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Rock dove skeletal meat (`packaging_reject_chilled_rock_dove_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Rock dove (Columba livia) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Rock dove skeletal meat (`packaging_reject_frozen_rock_dove_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Rock dove (Columba livia) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Rock dove liver (`packaging_reject_fresh_rock_dove_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Rock dove (Columba livia) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Rock dove liver (`packaging_reject_chilled_rock_dove_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Rock dove (Columba livia) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Rock dove liver (`packaging_reject_frozen_rock_dove_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Rock dove (Columba livia) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Rock dove heart (`packaging_reject_fresh_rock_dove_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Rock dove (Columba livia) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Rock dove heart (`packaging_reject_chilled_rock_dove_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Rock dove (Columba livia) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Rock dove heart (`packaging_reject_frozen_rock_dove_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Rock dove (Columba livia) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Rock dove gizzard (`packaging_reject_fresh_rock_dove_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Rock dove (Columba livia) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Rock dove gizzard (`packaging_reject_chilled_rock_dove_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Rock dove (Columba livia) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Rock dove gizzard (`packaging_reject_frozen_rock_dove_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Rock dove (Columba livia) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Rock dove (Columba livia) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Red grouse skeletal meat (`packaging_reject_fresh_red_grouse_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Red grouse (Lagopus lagopus scotica) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Red grouse skeletal meat (`packaging_reject_chilled_red_grouse_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Red grouse (Lagopus lagopus scotica) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Red grouse skeletal meat (`packaging_reject_frozen_red_grouse_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Red grouse (Lagopus lagopus scotica) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Red grouse liver (`packaging_reject_fresh_red_grouse_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Red grouse (Lagopus lagopus scotica) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Red grouse liver (`packaging_reject_chilled_red_grouse_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Red grouse (Lagopus lagopus scotica) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Red grouse liver (`packaging_reject_frozen_red_grouse_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Red grouse (Lagopus lagopus scotica) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Red grouse heart (`packaging_reject_fresh_red_grouse_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Red grouse (Lagopus lagopus scotica) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Red grouse heart (`packaging_reject_chilled_red_grouse_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Red grouse (Lagopus lagopus scotica) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Red grouse heart (`packaging_reject_frozen_red_grouse_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Red grouse (Lagopus lagopus scotica) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Red grouse gizzard (`packaging_reject_fresh_red_grouse_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Red grouse (Lagopus lagopus scotica) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Red grouse gizzard (`packaging_reject_chilled_red_grouse_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Red grouse (Lagopus lagopus scotica) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Red grouse gizzard (`packaging_reject_frozen_red_grouse_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Red grouse (Lagopus lagopus scotica) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Red grouse (Lagopus lagopus scotica) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common ostrich skeletal meat (`packaging_reject_fresh_common_ostrich_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common ostrich (Struthio camelus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common ostrich skeletal meat (`packaging_reject_chilled_common_ostrich_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common ostrich (Struthio camelus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common ostrich skeletal meat (`packaging_reject_frozen_common_ostrich_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common ostrich (Struthio camelus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common ostrich liver (`packaging_reject_fresh_common_ostrich_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common ostrich (Struthio camelus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common ostrich liver (`packaging_reject_chilled_common_ostrich_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common ostrich (Struthio camelus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common ostrich liver (`packaging_reject_frozen_common_ostrich_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common ostrich (Struthio camelus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common ostrich heart (`packaging_reject_fresh_common_ostrich_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common ostrich (Struthio camelus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common ostrich heart (`packaging_reject_chilled_common_ostrich_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common ostrich (Struthio camelus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common ostrich heart (`packaging_reject_frozen_common_ostrich_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common ostrich (Struthio camelus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common ostrich gizzard (`packaging_reject_fresh_common_ostrich_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common ostrich (Struthio camelus) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common ostrich gizzard (`packaging_reject_chilled_common_ostrich_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common ostrich (Struthio camelus) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common ostrich gizzard (`packaging_reject_frozen_common_ostrich_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common ostrich (Struthio camelus) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common ostrich (Struthio camelus) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Grey partridge skeletal meat (`packaging_reject_fresh_grey_partridge_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Grey partridge (Perdix perdix) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Grey partridge skeletal meat (`packaging_reject_chilled_grey_partridge_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Grey partridge (Perdix perdix) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Grey partridge skeletal meat (`packaging_reject_frozen_grey_partridge_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Grey partridge (Perdix perdix) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Grey partridge liver (`packaging_reject_fresh_grey_partridge_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Grey partridge (Perdix perdix) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Grey partridge liver (`packaging_reject_chilled_grey_partridge_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Grey partridge (Perdix perdix) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Grey partridge liver (`packaging_reject_frozen_grey_partridge_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Grey partridge (Perdix perdix) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Grey partridge heart (`packaging_reject_fresh_grey_partridge_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Grey partridge (Perdix perdix) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Grey partridge heart (`packaging_reject_chilled_grey_partridge_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Grey partridge (Perdix perdix) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Grey partridge heart (`packaging_reject_frozen_grey_partridge_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Grey partridge (Perdix perdix) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Grey partridge gizzard (`packaging_reject_fresh_grey_partridge_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Grey partridge (Perdix perdix) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Grey partridge gizzard (`packaging_reject_chilled_grey_partridge_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Grey partridge (Perdix perdix) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Grey partridge gizzard (`packaging_reject_frozen_grey_partridge_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Grey partridge (Perdix perdix) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Grey partridge (Perdix perdix) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common pheasant skeletal meat (`packaging_reject_fresh_common_pheasant_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common pheasant (Phasianus colchicus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common pheasant skeletal meat (`packaging_reject_chilled_common_pheasant_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common pheasant (Phasianus colchicus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common pheasant skeletal meat (`packaging_reject_frozen_common_pheasant_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common pheasant (Phasianus colchicus) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common pheasant liver (`packaging_reject_fresh_common_pheasant_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common pheasant (Phasianus colchicus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common pheasant liver (`packaging_reject_chilled_common_pheasant_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common pheasant (Phasianus colchicus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common pheasant liver (`packaging_reject_frozen_common_pheasant_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common pheasant (Phasianus colchicus) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common pheasant heart (`packaging_reject_fresh_common_pheasant_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common pheasant (Phasianus colchicus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common pheasant heart (`packaging_reject_chilled_common_pheasant_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common pheasant (Phasianus colchicus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common pheasant heart (`packaging_reject_frozen_common_pheasant_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common pheasant (Phasianus colchicus) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common pheasant gizzard (`packaging_reject_fresh_common_pheasant_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common pheasant (Phasianus colchicus) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common pheasant gizzard (`packaging_reject_chilled_common_pheasant_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common pheasant (Phasianus colchicus) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common pheasant gizzard (`packaging_reject_frozen_common_pheasant_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common pheasant (Phasianus colchicus) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common pheasant (Phasianus colchicus) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common quail skeletal meat (`packaging_reject_fresh_common_quail_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common quail (Coturnix coturnix) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common quail skeletal meat (`packaging_reject_chilled_common_quail_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common quail (Coturnix coturnix) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common quail skeletal meat (`packaging_reject_frozen_common_quail_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common quail (Coturnix coturnix) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common quail liver (`packaging_reject_fresh_common_quail_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common quail (Coturnix coturnix) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common quail liver (`packaging_reject_chilled_common_quail_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common quail (Coturnix coturnix) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common quail liver (`packaging_reject_frozen_common_quail_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common quail (Coturnix coturnix) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common quail heart (`packaging_reject_fresh_common_quail_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common quail (Coturnix coturnix) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common quail heart (`packaging_reject_chilled_common_quail_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common quail (Coturnix coturnix) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common quail heart (`packaging_reject_frozen_common_quail_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common quail (Coturnix coturnix) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Common quail gizzard (`packaging_reject_fresh_common_quail_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Common quail (Coturnix coturnix) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Common quail gizzard (`packaging_reject_chilled_common_quail_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Common quail (Coturnix coturnix) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Common quail gizzard (`packaging_reject_frozen_common_quail_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Common quail (Coturnix coturnix) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Common quail (Coturnix coturnix) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Wild mallard skeletal meat (`packaging_reject_fresh_wild_mallard_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Wild mallard (Anas platyrhynchos) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Wild mallard skeletal meat (`packaging_reject_chilled_wild_mallard_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Wild mallard (Anas platyrhynchos) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Wild mallard skeletal meat (`packaging_reject_frozen_wild_mallard_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Wild mallard (Anas platyrhynchos) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Wild mallard liver (`packaging_reject_fresh_wild_mallard_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Wild mallard (Anas platyrhynchos) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Wild mallard liver (`packaging_reject_chilled_wild_mallard_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Wild mallard (Anas platyrhynchos) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Wild mallard liver (`packaging_reject_frozen_wild_mallard_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Wild mallard (Anas platyrhynchos) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Wild mallard heart (`packaging_reject_fresh_wild_mallard_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Wild mallard (Anas platyrhynchos) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Wild mallard heart (`packaging_reject_chilled_wild_mallard_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Wild mallard (Anas platyrhynchos) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Wild mallard heart (`packaging_reject_frozen_wild_mallard_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Wild mallard (Anas platyrhynchos) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Wild mallard gizzard (`packaging_reject_fresh_wild_mallard_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Wild mallard (Anas platyrhynchos) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Wild mallard gizzard (`packaging_reject_chilled_wild_mallard_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Wild mallard (Anas platyrhynchos) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Wild mallard gizzard (`packaging_reject_frozen_wild_mallard_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild mallard (Anas platyrhynchos) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Wild mallard (Anas platyrhynchos) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Wild greylag goose skeletal meat (`packaging_reject_fresh_wild_greylag_goose_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) skeletal meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Wild greylag goose (Anser anser) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Wild greylag goose skeletal meat (`packaging_reject_chilled_wild_greylag_goose_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) skeletal meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Wild greylag goose (Anser anser) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Wild greylag goose skeletal meat (`packaging_reject_frozen_wild_greylag_goose_skeletal_meat`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) skeletal meat, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Wild greylag goose (Anser anser) skeletal meat separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Wild greylag goose liver (`packaging_reject_fresh_wild_greylag_goose_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Wild greylag goose (Anser anser) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Wild greylag goose liver (`packaging_reject_chilled_wild_greylag_goose_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Wild greylag goose (Anser anser) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Wild greylag goose liver (`packaging_reject_frozen_wild_greylag_goose_liver`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Wild greylag goose (Anser anser) liver separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Wild greylag goose heart (`packaging_reject_fresh_wild_greylag_goose_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Wild greylag goose (Anser anser) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Wild greylag goose heart (`packaging_reject_chilled_wild_greylag_goose_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Wild greylag goose (Anser anser) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Wild greylag goose heart (`packaging_reject_frozen_wild_greylag_goose_heart`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Wild greylag goose (Anser anser) heart separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected fresh Wild greylag goose gizzard (`packaging_reject_fresh_wild_greylag_goose_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) gizzard, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fresh Wild greylag goose (Anser anser) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected chilled Wild greylag goose gizzard (`packaging_reject_chilled_wild_greylag_goose_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) gizzard, chilled
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected chilled Wild greylag goose (Anser anser) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected frozen Wild greylag goose gizzard (`packaging_reject_frozen_wild_greylag_goose_gizzard`)

This reject retains one species, one tissue, and one state identity.

- Selected flow: Rejected Wild greylag goose (Anser anser) gizzard, frozen
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected frozen Wild greylag goose (Anser anser) gizzard separately from every other variant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on rejection of this exact variant.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### LDPE film offcut waste (`packaging_ldpe_film_waste`)

This waste contains LDPE packaging film only.

- Selected flow: Low-density polyethylene film offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh LDPE film offcuts and damaged film separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on LDPE waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fibreboard packaging waste (`packaging_fibreboard_waste`)

This waste contains corrugated fibreboard packaging only.

- Selected flow: Corrugated fibreboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh damaged or discarded corrugated fibreboard packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on fibreboard waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Paper label waste (`packaging_paper_label_waste`)

This waste contains paper labels only.

- Selected flow: Paper label waste
- Flow property / unit: Mass / kg
- Amount rule: Calculate unused and damaged paper-label mass from counts and verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on label waste generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Damaged wood pallet waste (`packaging_wood_pallet_waste`)

Damaged wood pallets are a distinct packaging waste stream.

- Selected flow: Damaged wood pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Calculate pallet waste from verified pallet mass and documented retirement from use.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on pallet retirement.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

### Process: Hygiene and on-site heat generation (`hygiene_heat_generation`)

#### Inputs

##### Product flows

###### Hygiene electricity (`hygiene_electricity`)

Electricity operates pumps, pressure washers, dosing equipment, and ventilation.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the sanitation-system submeter and a documented hygiene-cycle lot share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hygiene_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Hygiene water (`hygiene_water`)

Hygiene water is separate from process water in production stages.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water assigned to sanitation cycles for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Required for wet sanitation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Purchased steam (`hygiene_purchased_steam`)

Purchased steam is one imported heat carrier and does not represent on-site fuel.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Calculate delivered steam energy from the supplier meter and documented steam condition.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_carriers`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on purchased steam use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Purchased hot water (`hygiene_purchased_hot_water`)

Purchased hot water is separate from steam and on-site fuels.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Calculate delivered energy from measured hot-water quantity and temperature change.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_carriers`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on purchased hot-water use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Natural gas (`hygiene_natural_gas`)

Natural gas is one on-site heat-generation route.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Calculate energy from the calibrated gas meter and period-matched quality data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_carriers`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on natural-gas use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Diesel fuel (`hygiene_diesel`)

Diesel is one on-site heat-generation route.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Calculate energy from calibrated tank or purchase records and documented fuel properties.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_carriers`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on diesel use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Liquefied petroleum gas (`hygiene_lpg`)

Liquefied petroleum gas is one on-site heat-generation route.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Calculate energy from calibrated tank or purchase records and documented fuel properties.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_carriers`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on liquefied petroleum gas use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Sodium hydroxide cleaner (`hygiene_sodium_hydroxide`)

Sodium hydroxide is one chemical species.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record issued sodium hydroxide mass from stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on sodium hydroxide use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nitric acid cleaner (`hygiene_nitric_acid`)

Nitric acid is one chemical species and is separate from alkali cleaner.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record issued nitric acid mass from stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on nitric acid use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Peracetic acid disinfectant (`hygiene_peracetic_acid`)

Peracetic acid is one disinfectant species.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record issued peracetic acid mass from stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on peracetic acid use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Routine sanitation wastewater (`hygiene_routine_wastewater`)

Routine sanitation wastewater is separate from high-organic-load wastewater.

- Selected flow: Routine meat-processing sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the routine sanitation-drain meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_wastewater`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Required when generated.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### High-load sanitation wastewater (`hygiene_high_load_wastewater`)

This stream carries concentrated blood, fat, or tissue residues from sanitation.

- Selected flow: High-organic-load meat-processing sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the segregated high-load drain meter or calculate volume from matched wash-water records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hygiene_wastewater`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on segregated collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Fossil carbon dioxide (`combustion_co2_fossil_to_air`)

Fossil carbon dioxide is one direct combustion release.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured fossil-fuel use and a documented fuel-specific carbon balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on on-site fossil-fuel combustion.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nitrogen monoxide (`combustion_nitrogen_monoxide_to_air`)

Nitrogen monoxide is separate from nitrogen dioxide.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement or a verified equipment-specific factor applied to measured fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nitrogen dioxide (`combustion_nitrogen_dioxide_to_air`)

Nitrogen dioxide is separate from nitrogen monoxide.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement or a verified equipment-specific factor applied to measured fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Sulfur dioxide (`combustion_sulfur_dioxide_to_air`)

Sulfur dioxide is one substance-specific direct release.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured fuel sulfur content or direct measurement to calculate mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on sulfur-bearing fuel combustion.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fine particulate matter (`combustion_pm25_to_air`)

Fine particulate matter is recorded in one aerodynamic size fraction.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement or a verified equipment-specific factor applied to measured fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Coarse particulate matter (`combustion_pm_coarse_to_air`)

Coarse particulate matter is separate from the below-2.5-micrometre fraction.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement or a verified equipment-specific factor applied to measured fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### Process: Conditional on-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wwtp_electricity`)

Electricity operates pumps, aeration, separation, and sludge handling.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Use the treatment-plant submeter and calculate the lot share from treated volume or pollutant load.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on on-site treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wastewater-treatment process water (`wwtp_process_water`)

This input excludes wastewater and reclaimed-water recirculation.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record clean water used for reagent preparation or equipment operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on clean-water use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Calcium hydroxide reagent (`wwtp_calcium_hydroxide`)

Calcium hydroxide is one pH-control or precipitation reagent.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record issued calcium hydroxide mass from treatment stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Aluminium sulfate reagent (`wwtp_aluminium_sulfate`)

Aluminium sulfate is one precipitation reagent.

- Selected flow: Aluminium sulfate
- Flow property / unit: Mass / kg
- Amount rule: Record issued aluminium sulfate mass from treatment stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Ferric chloride reagent (`wwtp_ferric_chloride`)

Ferric chloride is one precipitation reagent.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record issued ferric chloride mass from treatment stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Routine wastewater input (`wwtp_routine_wastewater_input`)

Routine wastewater remains separate from high-organic-load wastewater.

- Selected flow: Routine CPC 21170 processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Sum metered routine wastewater entering on-site treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on receipt.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### High-load wastewater input (`wwtp_high_load_wastewater_input`)

High-organic-load wastewater is one distinct treatment input.

- Selected flow: High-organic-load CPC 21170 processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Sum metered high-organic-load wastewater entering on-site treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on receipt.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

#### Outputs

##### Product flows

###### Reclaimed water (`wwtp_reclaimed_water`)

Treated water is a product only when quality and destination evidence prove productive reuse.

- Selected flow: Reclaimed process water
- Flow property / unit: Volume / m3
- Amount rule: Record the reclaimed-water meter at transfer to documented productive use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on documented reuse.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Treated wastewater to sewer (`wwtp_treated_wastewater_to_sewer`)

This is a sewer or off-site treatment transfer, not a direct surface-water release.

- Selected flow: Treated CPC 21170 processing wastewater to sewer
- Flow property / unit: Volume / m3
- Amount rule: Record the final sewer-transfer meter after on-site treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on sewer transfer.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Screening solids (`wwtp_screening_solids`)

Screening solids are separate from grease skim and sludge.

- Selected flow: CPC 21170 wastewater screening solids
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass removed by screens and sent to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on screening.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grease skim (`wwtp_grease_skim`)

Grease skim is separate from biological and chemical sludge.

- Selected flow: CPC 21170 wastewater grease skim
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass removed by grease separation or flotation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on grease separation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Biological sludge (`wwtp_biological_sludge`)

Biological sludge is one distinct treatment residue.

- Selected flow: CPC 21170 biological wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass and measured dry-matter fraction of biological sludge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on biological treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chemical sludge (`wwtp_chemical_sludge`)

Chemical precipitation sludge is separate from biological sludge.

- Selected flow: CPC 21170 chemical precipitation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass and measured dry-matter fraction of chemical precipitation sludge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document scale or meter resolution, calibration, missing records, identity error, and lot attribution.
- Applicability: Conditional on chemical precipitation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Chemical oxygen demand (`wwtp_cod_to_water`)

COD is one direct water-release parameter.

- Selected flow: Chemical oxygen demand to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply final-effluent volume by temporally matched COD concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Five-day biochemical oxygen demand (`wwtp_bod5_to_water`)

BOD5 is recorded separately from COD.

- Selected flow: Five-day biochemical oxygen demand to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply final-effluent volume by temporally matched BOD5 concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Total nitrogen (`wwtp_total_nitrogen_to_water`)

Total nitrogen is one direct water-release parameter.

- Selected flow: Total nitrogen to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply final-effluent volume by temporally matched total-nitrogen concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Total phosphorus (`wwtp_total_phosphorus_to_water`)

Total phosphorus is one direct water-release parameter.

- Selected flow: Total phosphorus to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply final-effluent volume by temporally matched total-phosphorus concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Total suspended solids (`wwtp_tss_to_water`)

Total suspended solids are separate from oxygen-demand and nutrient parameters.

- Selected flow: Total suspended solids to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply final-effluent volume by temporally matched suspended-solids concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Treatment ammonia (`wwtp_ammonia_to_air`)

Ammonia is one direct air release from treatment.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured treatment exhaust flow and temporally matched ammonia concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_air`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Treatment hydrogen sulfide (`wwtp_hydrogen_sulfide_to_air`)

Hydrogen sulfide is recorded separately from ammonia.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured treatment exhaust flow and temporally matched hydrogen sulfide concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming CPC 21170 product for one declared species-tissue-state variant at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_air`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, identity error, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multi-output slaughter and separation | First avoid allocation through subdivision and direct measurement of every named tissue, co-product, utility, and waste. | `eu-2021-2279-environmental-footprint` |
| `allocation_expand` | co-products with additional functions | If subdivision cannot resolve function, investigate transparent system expansion before partitioning burdens. | `eu-2021-2279-environmental-footprint` |
| `allocation_physical` | remaining multi-output process | Use a documented physical relationship reflecting causal input use and output formation when allocation remains necessary. | `eu-2021-2279-environmental-footprint` |
| `allocation_economic` | remaining unresolved relationship | Use economic allocation only when subdivision, system expansion, and a relevant physical relationship are not defensible; disclose sensitivity. | `eu-2021-2279-environmental-footprint` |
| `allocation_status` | each co-product and waste | Establish product or waste status from quality, legal status, and destination evidence before allocation; never assign one quantity to both. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `allocation_reference_variant` | reference species-tissue-state variant | Assign the reference product only to the one declared variant; other edible outputs remain separately measured co-products. | `eu-2021-2279-environmental-footprint` |
| `allocation_waste` | waste treatment | Do not credit a waste destination unless the selected LCA method and documented receiving function require it. | `eu-2021-2279-environmental-footprint` |
| `allocation_capture` | upstream production or lawful capture | Keep farming, capture, or hunting burdens in upstream datasets; disclose the upstream method selected. | `eu-2021-2279-environmental-footprint` |
| `allocation_consistency` | all process links | Do not double count species-tissue transfers, alternative heat routes, refrigerant make-up and loss, or wastewater outputs and treatment inputs. | `eu-2021-2279-environmental-footprint` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_inputs` | `species_receiving` | species-specific live animals, electricity, and water | scale ticket; species record; origin record; utility meter | timestamp; lot_id; species_common_name; scientific_name; origin_status; scale_id; gross_mass; tare_mass; meter_id; opening_reading; closing_reading | Link calibrated animal mass and utilities to the lot after inbound transport ends. | kg; kWh; m3 | each lot | full study period | receiving and holding area | sum each row_id once; allocate shared utilities by documented activity | scale and meter calibration; species identity; lawful-origin record; meter reconciliation |
| `cp_receiving_outputs` | `species_receiving` | accepted species transfer, excreta, and species-specific wash wastewater | transfer scale; acceptance log; waste scale; drain meter | timestamp; lot_id; row_id; species_common_name; scientific_name; accepted_mass; waste_mass; drain_volume; destination | Measure each species-specific output independently and retain destination evidence. | kg; m3 | each lot | full study period | receiving and holding area | sum each row_id once; no cross-species aggregation | calibration; signed acceptance; waste destination; water balance |
| `cp_slaughter_inputs` | `slaughter_primary_separation` | accepted animals, slaughter electricity, and water | transfer scale; electricity meter; water meter | timestamp; lot_id; species_common_name; scientific_name; source_process; mass; meter_id; opening_reading; closing_reading | Link one species-specific accepted transfer and utilities to the slaughter lot. | kg; kWh; m3 | each lot | full study period | slaughter line | sum direct records; allocate shared utilities by documented equipment activity | transfer reconciliation; scale and meter calibration; operating log |
| `cp_slaughter_outputs` | `slaughter_primary_separation` | species-tissue intermediates, named co-products, residuals, and wastewater | scale; inspection record; destination record; wastewater meter | timestamp; lot_id; row_id; species_common_name; scientific_name; tissue_identity; legal_status; mass; volume; destination | Weigh each physical output separately and determine product or waste status before aggregation. | kg; m3 | each lot | full study period | slaughter and primary-separation area | sum each row_id once; prohibit overlap between product and waste status | scale calibration; inspection; destination evidence; species mass balance |
| `cp_slaughter_air` | `slaughter_primary_separation` | ammonia and hydrogen sulfide direct releases | airflow and concentration monitoring | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | Match each substance concentration to exhaust flow and slaughter operation. | kg | monitoring campaign and material change | representative operation within study period | slaughter release points | integrate each substance mass flow over applicable operating time | laboratory report; method; instrument calibration |
| `cp_preparation_inputs` | `meat_offal_preparation` | untrimmed species-tissue inputs, electricity, and water | transfer scale; utility meter; preparation log | timestamp; lot_id; species_common_name; scientific_name; tissue_identity; mass; meter_id; opening_reading; closing_reading | Link every species-tissue transfer and utility record to preparation. | kg; kWh; m3 | each lot | full study period | meat and offal preparation area | sum each row_id once; allocate shared utilities by documented operation | scale and meter calibration; transfer and preparation records |
| `cp_preparation_outputs` | `meat_offal_preparation` | fresh species-tissue outputs, trimming waste, and wash wastewater | product scale; reject scale; inspection record; drain meter | timestamp; lot_id; row_id; species_common_name; scientific_name; tissue_identity; accepted_mass; rejected_mass; volume; destination | Measure accepted product, trimming waste, and wastewater independently. | kg; m3 | each lot | full study period | meat and offal preparation area | sum each row_id once; reconcile each tissue input to outputs | scale calibration; inspection; destination; mass and water balance |
| `cp_conditioning_products` | `state_conditioning` | fresh inputs and chilled or frozen outputs | transfer scale; temperature record; state release | timestamp; lot_id; row_id; species_common_name; scientific_name; tissue_identity; market_state; mass; temperature; residence_time | Link every species-tissue input and output to exactly one declared market state. | kg | each lot | full study period | chiller and freezer | sum each state-specific row once; prevent state mixing | scale calibration; temperature log; state release |
| `cp_conditioning_utilities` | `state_conditioning` | chilling electricity, freezing electricity, water, defrost wastewater, and condensate | submeter; water meter; drain meter; operating log | timestamp; lot_id; equipment_id; meter_id; opening_reading; closing_reading; residence_time; occupancy; destination | Measure each cold-system utility and aqueous output separately. | kWh; m3 | each lot | full study period | cold-system equipment | sum each row_id once; allocate by measured residence and occupancy | meter calibration; equipment log; water balance |
| `cp_refrigerant_inventory` | `state_conditioning` | R717, R744, and R290 make-up and releases | purchase; cylinder stock; service log; leak record; circuit inventory | date; circuit_id; refrigerant_code; opening_stock; receipts; closing_stock; recovered_mass; transferred_mass; leak_event | Reconcile each refrigerant species and circuit independently. | kg | each service event and annual closure | full study period | cold-system circuits inside boundary | opening stock plus receipts minus closing stock, recovery, and documented transfers | invoice; cylinder weights; service record; leak-detector log |
| `cp_variant_selection` | `variant_packaging_release` | fully specified species-tissue-state inputs | product scale; variant declaration; release record | timestamp; lot_id; species_common_name; scientific_name; tissue_identity; tissue_kind; market_state; net_mass | Measure exactly one fully specified variant for the reference output. | kg | each lot | full study period | packaging and release area | sum exactly one applicable variant row to released net product mass | scale calibration; signed variant declaration; state record |
| `cp_packaging_bom` | `variant_packaging_release` | each named packaging component | product-specific BoM; issue-return record; component count | lot_id; component_identity; issued_mass; returned_mass; count; unit_mass; reuse_cycles | Calculate every named packaging component separately from BoM and stock records. | kg | each lot | full study period | packaging line | sum each component separately; reusable pallets by documented use cycles | approved BoM; stock ledger; unit-mass test; pallet ledger |
| `cp_release_records` | `variant_packaging_release` | packaging electricity, state-specific storage electricity, and reference output | electricity submeter; storage occupancy; release scale; quality record | timestamp; lot_id; species_common_name; scientific_name; tissue_identity; market_state; output_net_mass; meter_reading; storage_duration; release_status | Determine net conforming product mass and stage electricity for the released variant. | kg; kWh | each lot | full study period | packaging, storage, and release area | sum released net product once; exclude packaging mass | scale and meter calibration; signed release; temperature record |
| `cp_packaging_waste` | `variant_packaging_release` | state-specific rejects and each packaging waste | waste scale; reject log; component count | timestamp; lot_id; row_id; species_common_name; scientific_name; tissue_identity; market_state; gross_mass; tare_mass; count; destination | Measure each fully specified reject and each material-specific packaging waste separately. | kg | each lot | full study period | packaging and release area | sum each row_id once; exclude rejects from reference mass | waste ticket; reject record; scale calibration |
| `cp_hygiene_inputs` | `hygiene_heat_generation` | electricity, water, sodium hydroxide, nitric acid, and peracetic acid | submeter; chemical stock and dosing log; sanitation record | timestamp; lot_id; cycle_id; substance; issued_mass; concentration; meter_reading | Assign each measured sanitation resource to the lot and retain chemical identity. | kg; m3; kWh | each sanitation cycle | full study period | foreground sanitation systems | sum each substance separately; allocate shared cycles by time or cleaned area | meter calibration; stock reconciliation; dosing log; sanitation record |
| `cp_heat_carriers` | `hygiene_heat_generation` | purchased steam, purchased hot water, natural gas, diesel, and liquefied petroleum gas | supplier meter; boiler meter; tank and purchase ledger | timestamp; lot_id; carrier_identity; quantity; temperature; pressure; heating_value; meter_id | Record each imported heat carrier or on-site fuel separately and reconcile alternative heat routes. | MJ | each sanitation cycle and monthly closure | full study period | heat systems serving sanitation | convert each carrier with documented properties; prohibit double counting | invoice; calibrated meter; fuel-quality record; boiler log |
| `cp_hygiene_wastewater` | `hygiene_heat_generation` | routine and high-organic-load sanitation wastewater | segregated drain meter; sanitation-cycle log | timestamp; lot_id; stream_identity; opening_reading; closing_reading; destination | Measure routine and high-load sanitation wastewater independently. | m3 | each sanitation cycle | full study period | sanitation drains | sum each stream once by destination | drain-meter calibration; flow diagram; transfer record |
| `cp_combustion_releases` | `hygiene_heat_generation` | each named direct combustion release | fuel meter; direct monitoring; verified equipment factor | timestamp; equipment_id; fuel_identity; fuel_quantity; substance; concentration_or_factor; factor_source | Determine each substance release from direct measurement or a verified factor applied to measured fuel. | kg | monitoring campaign and reporting period | full study period | on-site combustion equipment | calculate each substance separately; exclude upstream purchased heat | monitoring report; fuel record; factor provenance; calculation review |
| `cp_wwtp_inputs` | `onsite_wastewater_treatment` | wastewater inputs, electricity, water, and each treatment reagent | influent meter; submeter; chemical stock and dosing log | timestamp; lot_id; row_id; stream_or_substance; meter_reading; issued_mass; concentration; treated_volume | Measure every wastewater stream and reagent independently at the treatment boundary. | kg; m3; kWh | daily and each lot allocation | full study period | on-site wastewater-treatment plant | sum each row_id separately; allocate shared treatment by measured volume or load | meter calibration; chemical reconciliation; treatment log |
| `cp_wwtp_outputs` | `onsite_wastewater_treatment` | reclaimed water, sewer wastewater, screening solids, grease skim, and each sludge | outlet meter; waste scale; destination and quality record | timestamp; row_id; volume; wet_mass; dry_matter; quality_result; destination | Measure each treatment output separately and establish product or waste status. | kg; m3 | daily and each dispatch | full study period | on-site wastewater-treatment plant | sum each row_id once; keep reuse, sewer, and residue destinations distinct | meter and scale calibration; laboratory result; dispatch record |
| `cp_water_discharge` | `onsite_wastewater_treatment` | COD, BOD5, total nitrogen, total phosphorus, and total suspended solids releases | final-effluent meter; accredited laboratory analysis | timestamp; sample_id; effluent_volume; parameter; concentration; method; detection_limit | Match each parameter concentration to the same direct-discharge period. | kg | permit monitoring frequency and material change | full study period | final direct-discharge point | effluent volume multiplied by temporally matched concentration for each parameter | laboratory accreditation; chain of custody; meter calibration; calculation review |
| `cp_wwtp_air` | `onsite_wastewater_treatment` | ammonia and hydrogen sulfide direct releases | airflow and concentration monitoring | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | Match each substance concentration to treatment airflow and operating time. | kg | monitoring campaign and material change | representative operation within study period | wastewater-treatment air-release points | integrate each substance mass flow over applicable operating time | laboratory report; method; instrument calibration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Divide each lot-attributed exchange by released net conforming reference-product mass. | lot-attributed exchange; released net mass | exchange per 1 kg reference product | `eu-2021-2279-environmental-footprint` |
| `calc_variant_gate` | all species-tissue-state rows | Filter the inventory to one declared scientific species name, one skeletal-meat or organ identity, and one market state before normalization. | species identity; tissue identity; market state; row applicability | one active reference variant | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `calc_stage_electricity` | each stage electricity row | Use a direct submeter or multiply a shared metered total by an auditable equipment activity, residence, or occupancy share. | meter total; activity or occupancy; lot mass | stage electricity per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_species_mass_balance` | each species lot | Reconcile live mass with all separately measured edible tissues, co-products, residuals, wastewater-associated solids, and stock change. | species-specific input and output masses | species-specific process mass balance | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_tissue_mass_balance` | each meat or organ route | Reconcile untrimmed tissue with accepted product and tissue-specific trimming waste without forced balancing. | untrimmed mass; accepted mass; reject mass; stock change | tissue-specific mass balance | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_refrigerant_loss` | each refrigerant species | For each circuit, reconcile opening stock plus receipts against closing stock, recovery, and documented transfers. | opening stock; receipts; closing stock; recovered mass; transfers | species-specific refrigerant loss | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_packaging_mass` | each packaging component | Use issued mass less returned mass, or count multiplied by verified unit mass; apply documented reuse cycles only to pallets. | issued mass; returned mass; count; unit mass; reuse ledger | component mass per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_heat_energy` | each heat carrier and on-site fuel | Convert measured carrier quantity using period-matched temperature, pressure, density, or heating value. | measured carrier quantity; carrier properties | MJ per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_combustion_release` | each direct combustion substance | Use direct measured mass flow or a verified equipment-specific factor applied to measured fuel. | measured fuel; concentration and flow or verified factor | substance mass to air per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_wastewater_volume` | each wastewater stream | Use a dedicated meter or subtract only documented retained, recovered, or evaporated water from matched metered supply. | stream meter or matched water-balance records | m3 wastewater per reference flow | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_water_release` | each direct water-release parameter | Multiply measured final-effluent volume by a temporally matched measured concentration and convert units. | effluent volume; parameter concentration; unit conversion | parameter mass to surface water per reference flow | `ec-jrc-2024-sa-bref-jrc135916` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_variant_identity` | reference product | Use one scientific species identity, one skeletal-meat or named organ identity, and one market state. | signed variant declaration; species record; release record |
| `dq_scope_exclusion` | species scope | Prove that the selected animal is an in-scope reptile or non-poultry bird and is not poultry under CPC 2112, 2114, or 21160. | classification review; species identity; origin record |
| `dq_product_specific` | reference product and packaging | Use variant-specific net mass, BoM, storage, and release records. | approved specification; BoM; signed release |
| `dq_site_specific` | foreground operations | Use company-specific activity data and direct releases for facility-operated processes. | meter; scale; ledger; laboratory; service records |
| `dq_temporal` | all foreground rows | Cover a representative production period and disclose shutdowns, maintenance, seasonal operation, and gaps. | coverage statement; gap register; operating calendar |
| `dq_technology` | conditioning, heat, and wastewater treatment | Identify actual equipment, refrigerant species, heat route, and treatment configuration. | equipment register; piping diagram; service log; process-flow diagram |
| `dq_species_mass_balance` | slaughter and separation | Reconcile one declared species without combining records from another species. | signed species-specific mass balance |
| `dq_tissue_mass_balance` | preparation and release | Reconcile each named meat or organ route and investigate residuals. | signed tissue-specific mass balance |
| `dq_meter_reconciliation` | utilities and wastewater | Reconcile submeters to facility meters and document every allocation driver. | meter hierarchy; calibration; allocation worksheet |
| `dq_destination` | co-products and wastes | Retain destination and legal-status evidence so one physical stream is not both product and waste. | contract; dispatch ticket; acceptance record |
| `dq_uuid` | all inventory identities | Use a Tiangong UUID only after exact semantic hybrid search and public state=100 direct-read verification; otherwise keep it absent. | dual-verification evidence or manifest unresolved entry |
| `dq_uncertainty` | all inventory rows | Document resolution, calibration, missing-data treatment, factor provenance, and allocation uncertainty without inventing a range. | uncertainty register; calculation review |
| `dq_completeness` | full inventory | Demonstrate coverage of species-specific products, utilities, chemicals, packaging, wastes, and direct air and water exchanges. | process-flow diagram; row checklist; reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | reference flow | Require Product flow e67d4710-2094-4972-85a2-9e593546ae82, Mass 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, and kg. | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference output | Require exactly 1 kg net conforming product and exclude packaging mass. | `un-cpc-3-0-structure-2025` |
| `validate_species_lock` | reference qualifier | Require exactly one common and scientific species identity. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `validate_tissue_lock` | reference qualifier | Require exactly one skeletal-meat or explicitly named edible-organ identity. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `validate_state_lock` | reference qualifier | Require exactly one of fresh, chilled, or frozen. | `un-cpc-3-0-structure-2025` |
| `validate_variant_rows` | inventory applicability | Require exactly one species-tissue-state input to the release process and prohibit activating any conflicting variant row. | `eu-2021-2279-environmental-footprint` |
| `validate_scope` | species classification | Require an in-scope reptile or non-poultry bird and reject poultry under CPC 2112, 2114, and 21160. | `un-cpc-3-0-structure-2025` |
| `validate_unlisted_variant` | unlisted in-scope species or organ | Add new species- and tissue-specific rows before use; reject reptile, game bird, declared species, other organ, or similar selector labels. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `validate_boundary` | process coverage | Require every mandatory process and a documented decision for state conditioning and on-site wastewater treatment. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_atomic` | inventory rows | Require one physical or chemical exchange per row_id and nonempty description, amount rule, protocol, uncertainty, applicability, and sources. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_selector_free` | selected flows | Reject collection labels and selection instructions; keep species products, utilities, fuels, refrigerants, chemicals, packaging, wastes, and releases separate. | `eu-2021-2279-environmental-footprint` |
| `validate_official_name_exception` | reference selected flow | Permit collection words only in the official CPC 21170 reference-flow name; every non-reference Selected flow must be selector-free. | `un-cpc-3-0-structure-2025` |
| `validate_uuid` | inventory UUIDs | Accept a non-reference UUID only after exact semantic hybrid search and public state=100 direct-read verification; otherwise require no UUID. | `eu-2021-2279-environmental-footprint` |
| `validate_manifest_closure` | unresolved UUIDs | Require each UUID-free row_id exactly once in manifest review metadata with candidate identity and rejection reason. | `eu-2021-2279-environmental-footprint` |
| `validate_value_mode` | inventory amounts | Allow only foreground_record or calculated_value backed by collected records; reject unsupported authored quantities and default ranges. | `eu-2021-2279-environmental-footprint` |
| `validate_species_mass_balance` | physical outputs | Reconcile one species-specific live input with all named tissues, co-products, residuals, and stock change without forced balancing. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_tissue_mass_balance` | meat and organ routes | Reconcile every selected tissue input, accepted output, trimming waste, and reject without mixing tissues. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_heat_routes` | thermal inputs | Prevent duplicate accounting of purchased steam, purchased hot water, and on-site fuel for the same heat. | `eu-2021-2279-environmental-footprint` |
| `validate_refrigerants` | cold system | Identify each actual refrigerant species and circuit; require its own make-up and direct-release row when loss occurs. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_hygiene_chemicals` | sanitation | Identify every cleaning and disinfection substance separately from stock and dosing records. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_packaging` | packaging | Match each packaging component and material-specific waste to the product BoM and exclude packaging mass from reference mass. | `eu-2021-2279-environmental-footprint` |
| `validate_destinations` | co-products and wastes | Require destination and status evidence and prohibit assigning one physical quantity to both product and waste. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_wastewater` | wastewater | Keep routine and high-organic-load wastewater separate and distinguish sewer transfer, direct discharge, and on-site treatment. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_air_releases` | direct air releases | Require substance-specific measurement or calculation and factor provenance; reject aggregate combustion or refrigerant-release rows. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_water_releases` | direct water releases | Require temporally matched effluent volume and parameter concentration for each direct-discharge row. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_sources` | evidence | Use only the listed UN CPC, EC JRC SA BREF, and Commission Recommendation sources; do not treat UUID lookup as amount evidence. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_bilingual` | bilingual record | Require identical ordered process_id, direction, flow_type, row_id, UUID, controlled tokens, protocol ids, and source-id sequences in en-US and zh-CN. | `eu-2021-2279-environmental-footprint` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Facility-specific foreground data package for one CPC 21170 species-tissue-state variant |
| downstream_use | Construction and validation of TianGong flow, process, lifecyclemodel, and dataset projections |
| allowed_use | Product-specific modelling when one in-scope species, one skeletal-meat or edible-organ identity, one market state, facility boundary, technology, and collection period are disclosed |
| excluded_use | Category-default inventory; multi-species product; combined meat and offal; mixed states; poultry CPC 2112, CPC 2114, or CPC 21160; unidentified reptile or game-bird selector |
| required_metadata | Facility geography; period; production volume; lot; common and scientific species name; origin; meat or organ identity; exact tissue; one market state; net-mass method; process configuration; conditioning technology; storage duration; heat route; refrigerant species; packaging BoM; destinations; wastewater route |
| required_quality_disclosure | Identity evidence; meter and scale calibration; temporal coverage; missing data; calculation inputs; allocation decisions; species and tissue mass balances; uncertainty; UUID status |
| update_trigger | Change in classification scope, species, tissue, state, production origin, process configuration, conditioning or storage technology, heat route, refrigerant, packaging BoM, destination, wastewater route, or evidence source |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Dataset (`dataset`) | United Nations Statistics Division, CPC Ver. 3.0 official page, https://unstats.un.org/unsd/classifications/Econ/CPC; retained raw structure `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` | Exact CPC 21170 identity; reptile and non-poultry bird meat and edible-offal scope; fresh, chilled, or frozen states; exclusion of poultry CPC 2112, CPC 2114, and CPC 21160 |
| `ec-jrc-2024-sa-bref-jrc135916` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, 2024, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Receiving, slaughter, primary separation, tissue preparation, chilling and freezing, sanitation, utilities, refrigerants, residuals, wastewater, sludge, and direct air and water releases |
| `eu-2021-2279-environmental-footprint` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific identity and BoM; company-specific manufacturing data; complete LCI; allocation hierarchy; completeness, transparency, data quality, and verification |
