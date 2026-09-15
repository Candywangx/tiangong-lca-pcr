---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.ginger-processed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Ginger, processed

## 1. Scope and Applicability

This PCR applies to site-specific foreground data packages for CPC 23927, Ginger, processed. Every package shall lock exactly one route—dry processing or preservation in brine—and one ginger input state, preparation style, final form, particle-size specification where relevant, and package specification. Dry powder and ginger in brine shall never be combined or averaged.

The scope includes on-site receiving, washing and trimming, conditional scraping/peeling/slicing, dry-route pretreatment, drying, dry cleaning and grading, conditional crushing/grinding/sieving, brine preparation, filling and sealing, conditional thermal treatment, packaging and release, sanitation, and conditional on-site wastewater treatment. Cultivation, inbound transport, production of purchased inputs, outbound distribution, retail, use and end-of-life are outside the foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.ginger-processed |
| classification_refs | CPC 3.0: 23927 — Ginger, processed |
| covered_products | Dried or dehydrated ginger in whole, piece/cut/diced/sliced, crushed, ground or powdered form; and ginger in brine. |
| excluded_products | Raw or otherwise unprocessed ginger; ginger essential oil or oleoresin; candied ginger; and products outside the declared dry or brine form. |
| representative_product | Site-specific processed ginger with one locked raw-material state, route, form, particle-size or brine specification, and package. |
| production_route | Mutually exclusive: dry processing; or preservation in brine. Dry and brined products shall not be averaged. |
| market_state | Packaged to the declared specification, quality-released, and at the processing-site gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Processed ginger meeting the declared release specification under one locked dry or brine route. |
| How much | 1 kg net conforming product, excluding packaging mass. A brine route uses the declared sold-product net-content basis and separately reports drained ginger mass. |
| How well | Meets the declared botanical identity, product form, moisture or packing-medium, particle-size, hygiene, additive-authorisation and packaging specification. |
| How long or cycle | One traceable production batch at quality release from the processing site. |
| reference_flow_link | `reference_processed_ginger` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming processed ginger, excluding packaging mass. |
| Reference product flow | Ginger, processed `5dfbf3ec-4630-4bae-bbc6-fc931194cf64` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | route; botanical species; raw-material state; preparation style; final form; moisture basis; particle-size specification and result when applicable; brine composition, thermal treatment, net contents and drained ginger mass when applicable; packaging specification; site; line; production period; release specification |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. Any missing required qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every exchange to 1 kg net conforming processed ginger released from the locked route; exclude packaging mass. | `un-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `route_exclusivity` | foreground data package | Route identity | text | Declare exactly one of dry processing or ginger in brine; no cross-route average is permitted. | `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279` |
| `raw_material_state` | ginger input | Material state | text | Declare fresh mature rhizomes, fresh tender rhizomes, or purchased dried whole ginger, and retain supplier or receiving evidence. | `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007` |
| `dry_product_form` | dry processed ginger | Product form | text | Declare one form: whole, pieces, crushed, or ground/powdered; record the preparation and size-reduction route that produces it. | `codex-cxs-343-2021`; `fao-ginger-postharvest-operations` |
| `moisture_basis` | dried ginger and residues | Mass and moisture fraction | kg and kg/kg | Measure mass and moisture on a declared wet or dry basis; do not transfer a Codex quality limit into the LCI as a default amount. | `codex-cxs-343-2021`; `fao-ginger-postharvest-operations` |
| `particle_size` | crushed or ground ginger | Particle-size result | mm or µm | Report the declared sieve or particle-size specification, test method and batch result. | `codex-cxs-343-2021`; `fao-ginger-postharvest-operations` |
| `brine_mass_basis` | ginger in brine | Mass | kg | Report net contents and drained ginger mass separately and state whether packing medium is included in the 1 kg sold-product basis. | `codex-cxs-260-2007` |
| `ingredient_dose` | each salt, acid, preservative or processing aid | Mass | kg | Record the actual batch dose and commercial concentration for each named substance; require current authorisation where applicable. | `codex-cxs-343-2021`; `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279` |
| `utility_measurement` | each stage-specific utility | Energy or mass | kWh, MJ or kg | Use sub-meter, delivery meter, invoice or documented causal allocation; electricity, steam, hot water and each fuel remain separate. | `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `refrigerant_balance` | each installed refrigerant | Mass | kg | Record make-up, recovery and stock change for R717, R744 or R404A separately and calculate each loss by circuit mass balance. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `wastewater_load` | each wastewater pollutant | Mass | kg | Calculate each pollutant load from the measured stream flow and representative measured concentration; keep source streams and pollutants separate. | `eu-fdm-bat-2019-2031` |
| `packaging_mass` | each packaging component | Mass | kg | Record each packaging component by material and exclude all packaging mass from the reference product amount. | `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `batch_mass_balance` | each locked route batch | Mass | kg | Reconcile ginger, packing medium, product, water removal, residues, wastewater solids and measured losses before normalization. | `fao-ginger-postharvest-operations`; `eu-pef-2021-2279` |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The declared ginger input state has been received, weighed and batch-identified at the processing site. |
| starting_condition_role | Foreground gate: cultivation, supplier processing and inbound transport are represented by appropriate upstream datasets. |
| product_classification_scope | CPC 23927 processed ginger, limited to the dry form or ginger-in-brine form declared under this PCR. |
| recursive_input_rule | Retain purchased dried ginger as a visible same-category product input and link an independently bounded upstream dataset; do not recursively expand this PCR. |
| upstream_dataset_requirement | Link every purchased ginger input, ingredient, package, utility, fuel and refrigerant to an upstream dataset matching the actual product and supply market. |
| disclosure | Declare site, line, route, material state, batches, data period, packaging, cut-offs, shared-service allocation and off-site treatment boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_lock` | all foreground packages | Use exactly one dry-processing route or one ginger-in-brine route per data package; never average their raw materials, utilities, yields, packaging, wastes or emissions. | `un-cpc-3-0-2025`; `codex-cxs-343-2021`; `codex-cxs-260-2007` |
| `sb_foreground_gate` | foreground system | Start at receipt of the declared ginger state at the processing site and include controlled preparation, preservation, packaging, cleaning and conditional on-site wastewater treatment. | `fao-ginger-postharvest-operations`; `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `sb_upstream_links` | purchased products | Keep cultivation, purchased-ginger production, ingredient manufacture, packaging manufacture, electricity, heat, fuel and refrigerant production outside the foreground and link each purchased input to an upstream dataset. | `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | downstream stages | Exclude outbound distribution, retail, preparation or consumption and end-of-life from the foreground; disclose any broader study boundary separately. | `eu-pef-2021-2279` |
| `sb_recursive_input` | same-category purchased dried ginger | When purchased dried ginger within the same processed-ginger category is used for a grinding-only route, retain it as a visible product input and link an independently bounded upstream dataset rather than recursively expanding this PCR. | `eu-pef-2021-2279` |
| `sb_release_basis` | reference product release | Include only net conforming processed ginger in the reference amount; packaging mass is excluded, while brine is included only when the declared sold product and net-content basis include it. | `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `route_scope_receiving` | Route and raw-material lock; receiving | `required` | Every data package must declare one route, one raw-ginger input state or purchased dried-ginger state, product form, particle size where relevant, and package specification. | foreground gate | 1 kg net conforming processed ginger output |
| `washing_trimming` | Washing and trimming | `required` | Required for a fresh-rhizome route; for a grinding-only route using purchased dried ginger, document this process as not operated at the reporting site. | foreground transformation | 1 kg net conforming processed ginger output |
| `scraping_peeling_slicing` | Scraping, peeling and slicing | `conditional` | Include only the single preparation style actually used before drying or brining. | foreground transformation | 1 kg net conforming processed ginger output |
| `drying_pretreatment` | Drying pretreatment | `conditional` | Include only for the locked dry route when scalding or calcium-oxide bleaching is actually applied. | foreground transformation | 1 kg net conforming dry processed ginger output |
| `drying` | Drying | `conditional` | Include for a dry processed-ginger route; declare dryer technology, heat carrier, fuel, residence time and moisture endpoint. | foreground transformation | 1 kg net conforming dry processed ginger output |
| `dry_cleaning_grading` | Dry cleaning and grading | `conditional` | Include when dried ginger is air-screened, separated, cleaned or graded before release or size reduction. | foreground transformation | 1 kg net conforming dry processed ginger output |
| `crushing_grinding_sieving` | Crushing, grinding and sieving | `conditional` | Include only when the declared dry product is crushed or ground; lock the equipment and declared particle-size specification. | foreground transformation | 1 kg net conforming crushed or ground ginger output |
| `brine_preparation` | Brine preparation | `conditional` | Include only for ginger in brine; record one actual formulation and each authorised ingredient separately. | foreground transformation | 1 kg net conforming ginger-in-brine output |
| `brine_filling_thermal` | Brine filling, sealing and conditional thermal treatment | `conditional` | Include only for ginger in brine; declare container, closure, fill medium and whether pasteurisation, sterilisation or no heat treatment is used. | foreground transformation | 1 kg net conforming ginger-in-brine output |
| `packaging_release` | Packaging, specification check and release | `required` | Package the single locked product form and release it against its moisture, particle-size or brine-medium specification; do not combine dry and brined products. | foreground release | 1 kg net conforming processed ginger output |
| `cleaning_sanitation` | Cleaning and sanitation | `required` | Include wet or dry cleaning actually attributable to the declared route; keep every cleaning chemical and utility atomic. | foreground support | 1 kg net conforming processed ginger output |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include only when the reporting site operates treatment; otherwise record each untreated wastewater product flow to the external treatment boundary. | foreground support | 1 kg net conforming processed ginger output |

### Process: Route and raw-material lock; receiving (`route_scope_receiving`)

#### Inputs

##### Product flows

###### Fresh mature ginger rhizomes received for the dry route (`recv_fresh_mature_ginger`)

Record Fresh mature ginger rhizomes as one atomic product input when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Fresh mature ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Measure net mass by lot at receipt after tare correction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `un-cpc-3-0-2025`; `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### Fresh tender ginger rhizomes received for the brine route (`recv_fresh_tender_ginger`)

Record Fresh tender ginger rhizomes as one atomic product input when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Fresh tender ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Measure net mass by lot at receipt after tare correction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `un-cpc-3-0-2025`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Purchased dried whole ginger for a grinding-only route (`recv_purchased_dried_whole_ginger`)

Record Purchased dried whole ginger as one atomic product input when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased dried whole ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure net dry-ginger mass from receipt scales and supplier documents.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `un-cpc-3-0-2025`; `codex-cxs-343-2021`; `eu-pef-2021-2279`

###### Grid electricity for receiving and inspection (`recv_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the receiving-area sub-meter or allocate a shared meter with documented equipment time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel for receiving equipment (`recv_diesel`)

Record Diesel fuel as one atomic product input when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record purchased or tank-issued diesel attributable to receiving equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas for receiving equipment (`recv_lpg`)

Record Liquefied petroleum gas as one atomic product input when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record cylinder or tank withdrawal attributable to receiving equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mature ginger rhizomes (`recv_accepted_mature_ginger`)

Record Accepted mature ginger rhizomes as one atomic product output when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Accepted mature ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Measure accepted net mass after inspection and lot segregation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### Accepted tender ginger rhizomes (`recv_accepted_tender_ginger`)

Record Accepted tender ginger rhizomes as one atomic product output when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Accepted tender ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Measure accepted net mass after inspection and lot segregation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Accepted purchased dried whole ginger (`recv_accepted_dried_whole_ginger`)

Record Accepted purchased dried whole ginger as one atomic product output when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Accepted purchased dried whole ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure accepted net mass and retain moisture or condition evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `codex-cxs-343-2021`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected mature ginger rhizomes (`recv_rejected_mature_ginger`)

Record Rejected mature ginger rhizomes as one atomic waste output when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Rejected mature ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected mature rhizomes by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Rejected tender ginger rhizomes (`recv_rejected_tender_ginger`)

Record Rejected tender ginger rhizomes as one atomic waste output when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Rejected tender ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected tender rhizomes by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### Rejected purchased dried ginger (`recv_rejected_dried_ginger`)

Record Rejected purchased dried ginger as one atomic waste output when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Rejected purchased dried ginger
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected purchased dried ginger by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `codex-cxs-343-2021`; `eu-fdm-bat-2019-2031`

###### Discarded jute ginger sack (`recv_jute_sack_waste`)

Record Discarded jute ginger sack as one atomic waste output when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Discarded jute ginger sack
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded jute sacks separately from every other packaging waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Discarded polyethylene ginger sack (`recv_polyethylene_sack_waste`)

Record Discarded polyethylene ginger sack as one atomic waste output when it crosses the Route and raw-material lock; receiving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Discarded polyethylene ginger sack
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded polyethylene sacks separately from every other packaging waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_scope_receiving`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Washing and trimming (`washing_trimming`)

#### Inputs

##### Product flows

###### Accepted mature ginger rhizomes for washing (`wash_accepted_mature_ginger`)

Record Accepted mature ginger rhizomes as one atomic product input when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Accepted mature ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured accepted mass from receiving batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### Accepted tender ginger rhizomes for washing (`wash_accepted_tender_ginger`)

Record Accepted tender ginger rhizomes as one atomic product input when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Accepted tender ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured accepted mass from receiving batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Process water for ginger washing (`wash_process_water`)

Record Process water for ginger washing as one atomic product input when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Process water for ginger washing
- Flow property / unit: Mass / kg
- Amount rule: Measure make-up water delivered to the ginger washer or wash tank.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Grid electricity for washing and trimming (`wash_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the washing and trimming sub-meter or document the causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Washed mature ginger rhizomes (`wash_washed_mature_ginger`)

Record Washed mature ginger rhizomes as one atomic product output when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Washed mature ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Measure washed mature-rhizome mass at batch transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### Washed tender ginger rhizomes (`wash_washed_tender_ginger`)

Record Washed tender ginger rhizomes as one atomic product output when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Washed tender ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Measure washed tender-rhizome mass at batch transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

##### Waste flows

###### Removed ginger shoots (`wash_ginger_shoot_waste`)

Record Removed ginger shoots as one atomic waste output when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Removed ginger shoots
- Flow property / unit: Mass / kg
- Amount rule: Weigh removed ginger shoots before storage or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Removed ginger roots (`wash_ginger_root_waste`)

Record Removed ginger roots as one atomic waste output when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Removed ginger roots
- Flow property / unit: Mass / kg
- Amount rule: Weigh removed ginger roots before storage or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Mineral soil removed from ginger (`wash_mineral_soil_waste`)

Record Mineral soil removed from ginger as one atomic waste output when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Mineral soil removed from ginger
- Flow property / unit: Mass / kg
- Amount rule: Weigh mineral soil collected from the washer or trap by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Stones removed from ginger (`wash_stone_waste`)

Record Stones removed from ginger as one atomic waste output when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Stones removed from ginger
- Flow property / unit: Mass / kg
- Amount rule: Weigh stones removed from ginger separately from mineral soil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Ginger washing wastewater (`wash_wastewater`)

Record Ginger washing wastewater as one atomic waste output when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure stream volume or mass before on-site or external treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_trimming`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

##### Elementary flows

###### Ginger solids discharged with washing water (`wash_ginger_solids_to_water`)

Record Ginger solids to water as one atomic elementary output when it crosses the Washing and trimming foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger solids to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured suspended ginger solids and washing-water flow at the discharge point.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_trimming`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Scraping, peeling and slicing (`scraping_peeling_slicing`)

#### Inputs

##### Product flows

###### Washed mature ginger for preparation (`prep_washed_mature_ginger`)

Record Washed mature ginger rhizomes as one atomic product input when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Washed mature ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured batch mass from washing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### Washed tender ginger for preparation (`prep_washed_tender_ginger`)

Record Washed tender ginger rhizomes as one atomic product input when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Washed tender ginger rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured batch mass from washing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Process water for ginger preparation (`prep_process_water`)

Record Process water for ginger preparation as one atomic product input when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Process water for ginger preparation
- Flow property / unit: Mass / kg
- Amount rule: Measure water supplied to the declared scraping, peeling or slicing operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Grid electricity for scraping, peeling or slicing (`prep_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the preparation equipment sub-meter or document the causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Scraped whole mature ginger (`prep_scraped_mature_whole_ginger`)

Record Scraped whole mature ginger as one atomic product output when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scraped whole mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure the declared scraped-whole output at batch transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Sliced mature ginger (`prep_sliced_mature_ginger`)

Record Sliced mature ginger as one atomic product output when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sliced mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure sliced mature-ginger mass and record slice specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Scraped whole tender ginger (`prep_scraped_tender_whole_ginger`)

Record Scraped whole tender ginger as one atomic product output when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scraped whole tender ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure the declared scraped-whole tender-ginger output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Sliced tender ginger (`prep_sliced_tender_ginger`)

Record Sliced tender ginger as one atomic product output when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sliced tender ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure sliced tender-ginger mass and record slice specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

##### Waste flows

###### Ginger peel (`prep_ginger_peel_waste`)

Record Ginger peel as one atomic waste output when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger peel
- Flow property / unit: Mass / kg
- Amount rule: Weigh ginger peel separately at collection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Ginger trimming pieces (`prep_ginger_trim_waste`)

Record Ginger trimming pieces as one atomic waste output when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger trimming pieces
- Flow property / unit: Mass / kg
- Amount rule: Weigh trimming pieces separately from peel and rejected whole rhizomes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Ginger preparation wastewater (`prep_wastewater`)

Record Ginger preparation wastewater as one atomic waste output when it crosses the Scraping, peeling and slicing foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure the preparation wastewater stream before treatment or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scraping_peeling_slicing`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

##### Elementary flows

### Process: Drying pretreatment (`drying_pretreatment`)

#### Inputs

##### Product flows

###### Scraped whole mature ginger for dry-route pretreatment (`pretreat_scraped_whole_mature_ginger`)

Record Scraped whole mature ginger as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scraped whole mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured scraped-whole mass from preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Sliced mature ginger for dry-route pretreatment (`pretreat_sliced_mature_ginger`)

Record Sliced mature ginger as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sliced mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured sliced-ginger mass from preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Process water for ginger scalding (`pretreat_scalding_water`)

Record Process water for ginger scalding as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Process water for ginger scalding
- Flow property / unit: Mass / kg
- Amount rule: Measure water supplied to the scalding vessel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Calcium oxide bleaching processing aid (`pretreat_calcium_oxide`)

Record Calcium oxide as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Calcium oxide
- Flow property / unit: Mass / kg
- Amount rule: Record actual calcium oxide mass from batch dosing records; do not apply a default dose.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Grid electricity for drying pretreatment (`pretreat_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the pretreatment sub-meter or document the causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased saturated steam for ginger pretreatment (`pretreat_purchased_steam`)

Record Purchased saturated steam as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Measure purchased steam energy delivered to the pretreatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Purchased hot water for ginger pretreatment (`pretreat_purchased_hot_water`)

Record Purchased hot water as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Measure purchased hot-water energy delivered to the pretreatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Natural gas for ginger pretreatment (`pretreat_natural_gas`)

Record Natural gas as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Measure natural gas supplied to the pretreatment heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel for ginger pretreatment (`pretreat_diesel`)

Record Diesel fuel as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure diesel supplied to the pretreatment heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas for ginger pretreatment (`pretreat_lpg`)

Record Liquefied petroleum gas as one atomic product input when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Measure LPG supplied to the pretreatment heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Scalded whole mature ginger (`pretreat_scalded_whole_ginger`)

Record Scalded whole mature ginger as one atomic product output when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scalded whole mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure scalded whole-ginger mass at transfer to drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Scalded sliced mature ginger (`pretreat_scalded_sliced_ginger`)

Record Scalded sliced mature ginger as one atomic product output when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scalded sliced mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure scalded sliced-ginger mass at transfer to drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

##### Waste flows

###### Spent ginger scalding water (`pretreat_spent_scalding_water`)

Record Spent ginger scalding water as one atomic waste output when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent ginger scalding water
- Flow property / unit: Mass / kg
- Amount rule: Measure spent scalding water before treatment or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Calcium-containing ginger pretreatment wastewater (`pretreat_calcium_wastewater`)

Record Calcium-containing ginger pretreatment wastewater as one atomic waste output when it crosses the Drying pretreatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Calcium-containing ginger pretreatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure this stream separately when calcium oxide bleaching is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_pretreatment`
- Sources: `codex-cxs-343-2021`; `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Drying (`drying`)

#### Inputs

##### Product flows

###### Direct-drying scraped whole mature ginger (`drying_scraped_whole_mature_ginger`)

Record Scraped whole mature ginger as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scraped whole mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured prepared mass when no pretreatment is operated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Direct-drying sliced mature ginger (`drying_sliced_mature_ginger`)

Record Sliced mature ginger as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sliced mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured prepared mass when no pretreatment is operated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Scalded whole mature ginger for drying (`drying_scalded_whole_ginger`)

Record Scalded whole mature ginger as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scalded whole mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured mass from pretreatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Scalded sliced mature ginger for drying (`drying_scalded_sliced_ginger`)

Record Scalded sliced mature ginger as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scalded sliced mature ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured mass from pretreatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Grid electricity for ginger drying (`drying_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the dryer and fan sub-meter or document the causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased saturated steam for ginger drying (`drying_purchased_steam`)

Record Purchased saturated steam as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Measure steam energy delivered to the dryer heat exchanger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Purchased hot water for ginger drying (`drying_purchased_hot_water`)

Record Purchased hot water as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Measure hot-water energy delivered to the drying system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Natural gas for ginger drying (`drying_natural_gas`)

Record Natural gas as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Measure natural gas at the dryer burner.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel for ginger drying (`drying_diesel`)

Record Diesel fuel as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure diesel at the dryer burner or generator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas for ginger drying (`drying_lpg`)

Record Liquefied petroleum gas as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Measure LPG at the dryer burner.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Ammonia refrigerant (R717) make-up for drying heat-pump or cooling circuit (`drying_r717_makeup`)

Record Ammonia refrigerant (R717) as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record service-log make-up mass for the drying circuit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Carbon dioxide refrigerant (R744) make-up for drying heat-pump or cooling circuit (`drying_r744_makeup`)

Record Carbon dioxide refrigerant (R744) as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record service-log make-up mass for the drying circuit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R404A refrigerant make-up for an existing drying heat-pump or cooling circuit (`drying_r404a_makeup`)

Record R404A refrigerant as one atomic product input when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record service-log make-up mass only when this exact refrigerant is installed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried whole ginger (`drying_dried_whole_ginger`)

Record Dried whole ginger as one atomic product output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Dried whole ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure dried whole-ginger mass and record moisture release result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### Dried ginger pieces (`drying_dried_ginger_pieces`)

Record Dried ginger pieces as one atomic product output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Dried ginger pieces
- Flow property / unit: Mass / kg
- Amount rule: Measure dried-piece mass and record style and moisture release result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

##### Waste flows

###### Off-specification dried ginger (`drying_offspec_dried_ginger`)

Record Off-specification dried ginger as one atomic waste output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Off-specification dried ginger
- Flow property / unit: Mass / kg
- Amount rule: Weigh off-specification dried ginger separately by disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `codex-cxs-343-2021`; `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Water vapour released by ginger drying (`drying_water_vapour_air`)

Record Water vapour to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from reconciled inlet and dried-product moisture masses or measure condensate-equivalent loss.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### Ginger particulate matter emitted by drying (`drying_ginger_dust_air`)

Record Ginger particulate matter to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from monitored outlet concentration and gas flow or a documented site mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`

###### Fossil carbon dioxide from dryer combustion (`drying_fossil_co2_air`)

Record Carbon dioxide, fossil, to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitrogen monoxide from dryer combustion (`drying_no_air`)

Record Nitrogen monoxide to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitrogen dioxide from dryer combustion (`drying_no2_air`)

Record Nitrogen dioxide to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`

###### Sulfur dioxide from dryer combustion (`drying_so2_air`)

Record Sulfur dioxide to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`

###### PM2.5 from dryer combustion (`drying_pm25_air`)

Record Particulate matter, diameter below 2.5 µm, to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`

###### Ammonia refrigerant (R717) loss to air (`drying_r717_air`)

Record Ammonia (R717) to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual refrigerant loss from circuit inventory and recovery records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Carbon dioxide refrigerant (R744) loss to air (`drying_r744_air`)

Record Carbon dioxide refrigerant (R744) to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Carbon dioxide refrigerant (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual refrigerant loss from circuit inventory and recovery records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R404A refrigerant loss to air (`drying_r404a_air`)

Record R404A refrigerant to air as one atomic elementary output when it crosses the Drying foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual refrigerant loss from circuit inventory and recovery records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Dry cleaning and grading (`dry_cleaning_grading`)

#### Inputs

##### Product flows

###### Dried whole ginger for cleaning and grading (`grade_dried_whole_ginger`)

Record Dried whole ginger as one atomic product input when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Dried whole ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured mass from drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### Dried ginger pieces for cleaning and grading (`grade_dried_ginger_pieces`)

Record Dried ginger pieces as one atomic product input when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Dried ginger pieces
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured mass from drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### Grid electricity for dry cleaning and grading (`grade_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the air screen and separator sub-meter or document causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Compressed air for dry ginger cleaning (`grade_compressed_air`)

Record Compressed air as one atomic product input when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Measure compressed-air volume and convert using the documented compressor-specific energy relation when needed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned graded dried whole ginger (`grade_cleaned_whole_ginger`)

Record Cleaned graded dried whole ginger as one atomic product output when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Cleaned graded dried whole ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure cleaned whole-ginger mass by declared grade.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### Cleaned graded dried ginger pieces (`grade_cleaned_ginger_pieces`)

Record Cleaned graded dried ginger pieces as one atomic product output when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Cleaned graded dried ginger pieces
- Flow property / unit: Mass / kg
- Amount rule: Measure cleaned ginger-piece mass by declared style and grade.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

##### Waste flows

###### Dried ginger screenings (`grade_dried_ginger_screenings`)

Record Dried ginger screenings as one atomic waste output when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Dried ginger screenings
- Flow property / unit: Mass / kg
- Amount rule: Weigh screenings at the separator discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Foreign matter removed from dried ginger (`grade_foreign_matter_waste`)

Record Foreign matter removed from dried ginger as one atomic waste output when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Foreign matter removed from dried ginger
- Flow property / unit: Mass / kg
- Amount rule: Weigh foreign matter separately from ginger screenings.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### Collected ginger dust (`grade_collected_ginger_dust`)

Record Collected ginger dust as one atomic waste output when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Collected ginger dust
- Flow property / unit: Mass / kg
- Amount rule: Weigh dust collected by vacuum, cyclone or filter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Ginger particulate matter emitted by cleaning and grading (`grade_ginger_dust_air`)

Record Ginger particulate matter to air as one atomic elementary output when it crosses the Dry cleaning and grading foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured outlet concentration and gas flow or a documented dust mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_cleaning_grading`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Crushing, grinding and sieving (`crushing_grinding_sieving`)

#### Inputs

##### Product flows

###### Cleaned dried whole ginger for size reduction (`mill_cleaned_whole_ginger`)

Record Cleaned graded dried whole ginger as one atomic product input when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Cleaned graded dried whole ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured mass from dry cleaning and grading or receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### Cleaned dried ginger pieces for size reduction (`mill_cleaned_ginger_pieces`)

Record Cleaned graded dried ginger pieces as one atomic product input when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Cleaned graded dried ginger pieces
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured mass from dry cleaning and grading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### Grid electricity for crushing, grinding and sieving (`mill_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the mill and sieve sub-meter or document causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crushed dried ginger (`mill_crushed_dried_ginger`)

Record Crushed dried ginger as one atomic product output when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Crushed dried ginger
- Flow property / unit: Mass / kg
- Amount rule: Measure crushed ginger mass and record equipment and particle-size specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### Ground dried ginger powder (`mill_ground_ginger_powder`)

Record Ground dried ginger powder as one atomic product output when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ground dried ginger powder
- Flow property / unit: Mass / kg
- Amount rule: Measure ground ginger powder mass and record mill and particle-size specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### Oversize dried ginger particles for internal regrinding (`mill_oversize_ginger_recycle`)

Record Oversize dried ginger particles for internal regrinding as one atomic product output when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Oversize dried ginger particles for internal regrinding
- Flow property / unit: Mass / kg
- Amount rule: Measure oversize particles returned to the same locked batch and avoid double counting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

##### Waste flows

###### Undersize ginger powder screenings (`mill_undersize_ginger_screenings`)

Record Undersize ginger powder screenings as one atomic waste output when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Undersize ginger powder screenings
- Flow property / unit: Mass / kg
- Amount rule: Weigh undersize material sent out of the product route by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### Collected ginger grinding dust (`mill_collected_ginger_dust`)

Record Collected ginger grinding dust as one atomic waste output when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Collected ginger grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Weigh dust collected by the mill extraction system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Ginger particulate matter emitted by crushing, grinding and sieving (`mill_ginger_dust_air`)

Record Ginger particulate matter to air as one atomic elementary output when it crosses the Crushing, grinding and sieving foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured outlet concentration and gas flow or a documented dust mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crushing_grinding_sieving`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Brine preparation (`brine_preparation`)

#### Inputs

##### Product flows

###### Process water for sodium chloride brine (`brine_water`)

Record Process water for sodium chloride brine as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Process water for sodium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: Measure water charged to the brine make-up vessel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### Sodium chloride for ginger brine (`brine_sodium_chloride`)

Record Sodium chloride as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record actual sodium chloride mass from the locked batch formula.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Acetic acid for ginger-in-brine formulation (`brine_acetic_acid`)

Record Acetic acid as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record actual dose only when specified and currently authorised; do not infer it from category permission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279`

###### Citric acid for ginger-in-brine formulation (`brine_citric_acid`)

Record Citric acid as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Citric acid
- Flow property / unit: Mass / kg
- Amount rule: Record actual dose only when specified and currently authorised; do not infer it from category permission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279`

###### Sodium benzoate preservative for ginger in brine (`brine_sodium_benzoate`)

Record Sodium benzoate as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sodium benzoate
- Flow property / unit: Mass / kg
- Amount rule: Record actual dose only when the exact preservative is used and currently authorised for the product and market.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279`

###### Potassium sorbate preservative for ginger in brine (`brine_potassium_sorbate`)

Record Potassium sorbate as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Potassium sorbate
- Flow property / unit: Mass / kg
- Amount rule: Record actual dose only when the exact preservative is used and currently authorised for the product and market.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279`

###### Grid electricity for brine preparation (`brine_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the brine-room sub-meter or document causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased saturated steam for brine preparation (`brine_purchased_steam`)

Record Purchased saturated steam as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Measure purchased steam energy delivered to the brine vessel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Purchased hot water for brine preparation (`brine_purchased_hot_water`)

Record Purchased hot water as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Measure purchased hot-water energy delivered to brine preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Natural gas for brine preparation (`brine_natural_gas`)

Record Natural gas as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Measure natural gas supplied to the brine heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel for brine preparation (`brine_diesel`)

Record Diesel fuel as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure diesel supplied to the brine heater or generator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas for brine preparation (`brine_lpg`)

Record Liquefied petroleum gas as one atomic product input when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Measure LPG supplied to the brine heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared sodium chloride brine for ginger preservation (`brine_prepared_sodium_chloride_brine`)

Record Sodium chloride brine for ginger preservation as one atomic product output when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sodium chloride brine for ginger preservation
- Flow property / unit: Mass / kg
- Amount rule: Measure prepared brine mass and retain the locked formula, concentration and pH records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`

##### Waste flows

###### Off-specification sodium chloride brine (`brine_offspec_brine`)

Record Off-specification sodium chloride brine as one atomic waste output when it crosses the Brine preparation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Off-specification sodium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: Measure off-specification brine separately before recovery, treatment or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_preparation`
- Sources: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Brine filling, sealing and conditional thermal treatment (`brine_filling_thermal`)

#### Inputs

##### Product flows

###### Scraped whole tender ginger for brine filling (`fill_scraped_whole_tender_ginger`)

Record Scraped whole tender ginger as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Scraped whole tender ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured prepared mass for the locked whole style.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Sliced tender ginger for brine filling (`fill_sliced_tender_ginger`)

Record Sliced tender ginger as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sliced tender ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured prepared mass for the locked sliced style.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Prepared sodium chloride brine for filling (`fill_prepared_brine`)

Record Sodium chloride brine for ginger preservation as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sodium chloride brine for ginger preservation
- Flow property / unit: Mass / kg
- Amount rule: Measure brine delivered to the filler and reconcile spills and retained packing medium.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Glass jar for ginger in brine (`fill_glass_jar`)

Record Glass jar as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Glass jar
- Flow property / unit: Mass / kg
- Amount rule: Record actual tare mass and count of glass jars consumed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Tinplate steel jar lid for ginger in brine (`fill_steel_lid`)

Record Tinplate steel jar lid as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Tinplate steel jar lid
- Flow property / unit: Mass / kg
- Amount rule: Record actual lid mass and count consumed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### High-density polyethylene pail for ginger in brine (`fill_hdpe_pail`)

Record High-density polyethylene pail as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: High-density polyethylene pail
- Flow property / unit: Mass / kg
- Amount rule: Record actual pail mass and count consumed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Polypropylene pail lid for ginger in brine (`fill_polypropylene_lid`)

Record Polypropylene pail lid as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Polypropylene pail lid
- Flow property / unit: Mass / kg
- Amount rule: Record actual lid mass and count consumed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Grid electricity for brine filling, sealing and thermal treatment (`fill_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the filler, sealer and thermal-process sub-meter or document causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased saturated steam for brined-ginger thermal treatment (`fill_purchased_steam`)

Record Purchased saturated steam as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Measure purchased steam energy delivered to the thermal process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Purchased hot water for brined-ginger thermal treatment (`fill_purchased_hot_water`)

Record Purchased hot water as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Measure purchased hot-water energy delivered to the thermal process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Natural gas for brined-ginger thermal treatment (`fill_natural_gas`)

Record Natural gas as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Measure natural gas supplied to the thermal-process heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel for brined-ginger thermal treatment (`fill_diesel`)

Record Diesel fuel as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure diesel supplied to the thermal-process heater or generator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas for brined-ginger thermal treatment (`fill_lpg`)

Record Liquefied petroleum gas as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Measure LPG supplied to the thermal-process heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Process cooling water for sealed ginger in brine (`fill_cooling_water`)

Record Process cooling water as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Process cooling water
- Flow property / unit: Mass / kg
- Amount rule: Measure cooling-water make-up delivered to the cooling boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Ammonia refrigerant (R717) make-up for brined-ginger cooling (`fill_r717_makeup`)

Record Ammonia refrigerant (R717) as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record service-log make-up mass for the cooling circuit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Carbon dioxide refrigerant (R744) make-up for brined-ginger cooling (`fill_r744_makeup`)

Record Carbon dioxide refrigerant (R744) as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record service-log make-up mass for the cooling circuit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R404A refrigerant make-up for an existing brined-ginger cooling circuit (`fill_r404a_makeup`)

Record R404A refrigerant as one atomic product input when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record service-log make-up mass only when this exact refrigerant is installed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Ginger in brine in a sealed glass jar (`fill_glass_packed_brined_ginger`)

Record Ginger in brine in a sealed glass jar as one atomic product output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger in brine in a sealed glass jar
- Flow property / unit: Mass / kg
- Amount rule: Measure net product contents separately from glass-jar and steel-lid tare mass; record drained ginger mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Ginger in brine in a sealed HDPE pail (`fill_hdpe_packed_brined_ginger`)

Record Ginger in brine in a sealed high-density polyethylene pail as one atomic product output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger in brine in a sealed high-density polyethylene pail
- Flow property / unit: Mass / kg
- Amount rule: Measure net product contents separately from pail and lid tare mass; record drained ginger mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-pef-2021-2279`

##### Waste flows

###### Spent sodium chloride brine (`fill_spent_brine`)

Record Spent sodium chloride brine as one atomic waste output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent sodium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: Measure spent brine before reuse, treatment or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### Brine filling wastewater (`fill_brine_filling_wastewater`)

Record Brine filling wastewater as one atomic waste output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Brine filling wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure brine filling wastewater separately from cooling, washing and cleaning wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Brined-ginger cooling wastewater (`fill_cooling_wastewater`)

Record Brined-ginger cooling wastewater as one atomic waste output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Brined-ginger cooling wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure brined-ginger cooling wastewater separately from filling, washing and cleaning wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Off-specification ginger in brine (`fill_offspec_brined_ginger`)

Record Off-specification ginger in brine as one atomic waste output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Off-specification ginger in brine
- Flow property / unit: Mass / kg
- Amount rule: Weigh off-specification brined ginger and its retained brine by disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### Broken glass jar waste (`fill_broken_glass_waste`)

Record Broken glass jar waste as one atomic waste output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Broken glass jar waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh broken glass separately and exclude contained ginger or brine from this packaging-waste row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Tinplate steel lid waste (`fill_steel_lid_waste`)

Record Tinplate steel lid waste as one atomic waste output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Tinplate steel lid waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected steel lids separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### High-density polyethylene pail waste (`fill_hdpe_pail_waste`)

Record High-density polyethylene pail waste as one atomic waste output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: High-density polyethylene pail waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected HDPE pails separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Polypropylene pail-lid waste (`fill_pp_lid_waste`)

Record Polypropylene pail-lid waste as one atomic waste output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Polypropylene pail-lid waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected polypropylene lids separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon dioxide from brined-ginger thermal treatment (`fill_fossil_co2_air`)

Record Carbon dioxide, fossil, to air as one atomic elementary output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitrogen monoxide from brined-ginger thermal treatment (`fill_no_air`)

Record Nitrogen monoxide to air as one atomic elementary output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitrogen dioxide from brined-ginger thermal treatment (`fill_no2_air`)

Record Nitrogen dioxide to air as one atomic elementary output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`

###### Sulfur dioxide from brined-ginger thermal treatment (`fill_so2_air`)

Record Sulfur dioxide to air as one atomic elementary output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`

###### PM2.5 from brined-ginger thermal treatment (`fill_pm25_air`)

Record Particulate matter, diameter below 2.5 µm, to air as one atomic elementary output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`

###### Ammonia refrigerant (R717) loss to air (`fill_r717_air`)

Record Ammonia (R717) to air as one atomic elementary output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual refrigerant loss from circuit inventory and recovery records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Carbon dioxide refrigerant (R744) loss to air (`fill_r744_air`)

Record Carbon dioxide refrigerant (R744) to air as one atomic elementary output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Carbon dioxide refrigerant (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual refrigerant loss from circuit inventory and recovery records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R404A refrigerant loss to air (`fill_r404a_air`)

Record R404A refrigerant to air as one atomic elementary output when it crosses the Brine filling, sealing and conditional thermal treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual refrigerant loss from circuit inventory and recovery records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brine_filling_thermal`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Packaging, specification check and release (`packaging_release`)

#### Inputs

##### Product flows

###### Cleaned dried whole ginger for final packaging (`pack_dried_whole_ginger`)

Record Cleaned graded dried whole ginger as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Cleaned graded dried whole ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured conforming product mass for the single locked product form.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Cleaned dried ginger pieces for final packaging (`pack_dried_ginger_pieces`)

Record Cleaned graded dried ginger pieces as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Cleaned graded dried ginger pieces
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured conforming product mass for the single locked product form.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Crushed dried ginger for final packaging (`pack_crushed_dried_ginger`)

Record Crushed dried ginger as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Crushed dried ginger
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured conforming product mass for the single locked product form.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Ground dried ginger powder for final packaging (`pack_ground_ginger_powder`)

Record Ground dried ginger powder as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ground dried ginger powder
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured conforming product mass for the single locked product form.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Sealed glass-jar ginger in brine for final release (`pack_glass_brined_ginger`)

Record Ginger in brine in a sealed glass jar as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger in brine in a sealed glass jar
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured conforming product mass for the single locked product form.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Sealed HDPE-pail ginger in brine for final release (`pack_hdpe_brined_ginger`)

Record Ginger in brine in a sealed high-density polyethylene pail as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger in brine in a sealed high-density polyethylene pail
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured conforming product mass for the single locked product form.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Kraft-paper laminated multiwall bag (`pack_kraft_laminated_bag`)

Record Kraft-paper laminated multiwall bag as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Kraft-paper laminated multiwall bag
- Flow property / unit: Mass / kg
- Amount rule: Record actual packaging-component mass consumed for conforming released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Low-density polyethylene inner liner (`pack_ldpe_liner`)

Record Low-density polyethylene inner liner as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Low-density polyethylene inner liner
- Flow property / unit: Mass / kg
- Amount rule: Record actual packaging-component mass consumed for conforming released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Corrugated fibreboard box (`pack_corrugated_box`)

Record Corrugated fibreboard box as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Record actual packaging-component mass consumed for conforming released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Paper product label (`pack_paper_label`)

Record Paper product label as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Paper product label
- Flow property / unit: Mass / kg
- Amount rule: Record actual packaging-component mass consumed for conforming released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Wooden pallet (`pack_wood_pallet`)

Record Wooden pallet as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record actual packaging-component mass consumed for conforming released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Linear low-density polyethylene stretch film (`pack_lldpe_stretch_film`)

Record Linear low-density polyethylene stretch film as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Record actual packaging-component mass consumed for conforming released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### Grid electricity for packaging and release (`pack_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the packaging-line sub-meter or document causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference output: Ginger, processed (`reference_processed_ginger`)

This is the sole CPC 23927 reference product exchange. It represents the one locked dry or ginger-in-brine product form and excludes packaging mass; the verified Tiangong product UUID is used only on this row.

- Selected flow: Ginger, processed `5dfbf3ec-4630-4bae-bbc6-fc931194cf64`
- Flow property / unit: Mass / kg
- Amount rule: Calculate 1 kg from reconciled net conforming released product mass on the locked route basis; exclude packaging mass and disclose the brine mass basis when applicable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `un-cpc-3-0-2025`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

##### Waste flows

###### Off-specification packaged processed ginger (`pack_offspec_processed_ginger`)

Record Off-specification packaged processed ginger as one atomic waste output when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Off-specification packaged processed ginger
- Flow property / unit: Mass / kg
- Amount rule: Weigh product contents separately from every discarded packaging component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### Kraft-paper laminated bag waste (`pack_kraft_bag_waste`)

Record Kraft-paper laminated bag waste as one atomic waste output when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Kraft-paper laminated bag waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh this packaging waste separately at the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Low-density polyethylene liner waste (`pack_ldpe_liner_waste`)

Record Low-density polyethylene liner waste as one atomic waste output when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Low-density polyethylene liner waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh this packaging waste separately at the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Corrugated fibreboard box waste (`pack_corrugated_box_waste`)

Record Corrugated fibreboard box waste as one atomic waste output when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Corrugated fibreboard box waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh this packaging waste separately at the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Paper label waste (`pack_paper_label_waste`)

Record Paper label waste as one atomic waste output when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Paper label waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh this packaging waste separately at the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Wood pallet waste (`pack_wood_pallet_waste`)

Record Wood pallet waste as one atomic waste output when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Wood pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh this packaging waste separately at the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Linear low-density polyethylene stretch-film waste (`pack_lldpe_film_waste`)

Record Linear low-density polyethylene stretch-film waste as one atomic waste output when it crosses the Packaging, specification check and release foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Linear low-density polyethylene stretch-film waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh this packaging waste separately at the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Cleaning and sanitation (`cleaning_sanitation`)

#### Inputs

##### Product flows

###### Process water for equipment cleaning (`clean_process_water`)

Record Process water for equipment cleaning as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Process water for equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: Measure cleaning-water make-up by cleaning event and route attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### Grid electricity for cleaning and sanitation (`clean_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the sanitation sub-meter or document causal allocation by cleaning time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased saturated steam for cleaning and sanitation (`clean_purchased_steam`)

Record Purchased saturated steam as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Measure purchased steam energy delivered to cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Purchased hot water for cleaning and sanitation (`clean_purchased_hot_water`)

Record Purchased hot water as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Measure purchased hot-water energy delivered to cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### Natural gas for cleaning-water heating (`clean_natural_gas`)

Record Natural gas as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Measure natural gas supplied to the cleaning-water heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel for cleaning-water heating (`clean_diesel`)

Record Diesel fuel as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure diesel supplied to the cleaning-water heater or generator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas for cleaning-water heating (`clean_lpg`)

Record Liquefied petroleum gas as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Measure LPG supplied to the cleaning-water heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium hydroxide cleaning chemical (`clean_sodium_hydroxide`)

Record Sodium hydroxide as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record actual chemical mass from the cleaning event; identify concentration and exclude carrier water from this chemical row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitric acid cleaning chemical (`clean_nitric_acid`)

Record Nitric acid as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record actual chemical mass from the cleaning event; identify concentration and exclude carrier water from this chemical row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Phosphoric acid cleaning chemical (`clean_phosphoric_acid`)

Record Phosphoric acid as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Record actual chemical mass from the cleaning event; identify concentration and exclude carrier water from this chemical row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Peracetic acid disinfectant (`clean_peracetic_acid`)

Record Peracetic acid as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record actual chemical mass from the cleaning event; identify concentration and exclude carrier water from this chemical row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium hypochlorite disinfectant (`clean_sodium_hypochlorite`)

Record Sodium hypochlorite as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record actual chemical mass from the cleaning event; identify concentration and exclude carrier water from this chemical row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Ethanol sanitising agent for controlled dry-area cleaning (`clean_ethanol`)

Record Ethanol as one atomic product input when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ethanol
- Flow property / unit: Mass / kg
- Amount rule: Record actual chemical mass from the cleaning event; identify concentration and exclude carrier water from this chemical row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent sodium hydroxide cleaning solution (`clean_spent_sodium_hydroxide`)

Record Spent sodium hydroxide cleaning solution as one atomic waste output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Measure the spent solution separately before mixing, recovery or treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### Spent nitric acid cleaning solution (`clean_spent_nitric_acid`)

Record Spent nitric acid cleaning solution as one atomic waste output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent nitric acid cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Measure the spent solution separately before mixing, recovery or treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### Spent phosphoric acid cleaning solution (`clean_spent_phosphoric_acid`)

Record Spent phosphoric acid cleaning solution as one atomic waste output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent phosphoric acid cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Measure the spent solution separately before mixing, recovery or treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### Spent peracetic acid disinfecting solution (`clean_spent_peracetic_acid`)

Record Spent peracetic acid disinfecting solution as one atomic waste output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent peracetic acid disinfecting solution
- Flow property / unit: Mass / kg
- Amount rule: Measure the spent solution separately before mixing, recovery or treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### Spent sodium hypochlorite disinfecting solution (`clean_spent_hypochlorite`)

Record Spent sodium hypochlorite disinfecting solution as one atomic waste output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent sodium hypochlorite disinfecting solution
- Flow property / unit: Mass / kg
- Amount rule: Measure the spent solution separately before mixing, recovery or treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### Spent ethanol sanitising solution (`clean_spent_ethanol`)

Record Spent ethanol sanitising solution as one atomic waste output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent ethanol sanitising solution
- Flow property / unit: Mass / kg
- Amount rule: Measure the spent solution separately before mixing, recovery or treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### Ginger-processing equipment cleaning wastewater (`clean_equipment_wastewater`)

Record Ginger-processing equipment cleaning wastewater as one atomic waste output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger-processing equipment cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure wet-cleaning wastewater separately from ginger washing and brine-filling wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Dry-collected ginger processing residue (`clean_dry_collected_residue`)

Record Dry-collected ginger processing residue as one atomic waste output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Dry-collected ginger processing residue
- Flow property / unit: Mass / kg
- Amount rule: Weigh residue collected by brushing, scraping or vacuum cleaning before wet cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Fossil carbon dioxide from cleaning-water heating (`clean_fossil_co2_air`)

Record Carbon dioxide, fossil, to air as one atomic elementary output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitrogen monoxide from cleaning-water heating (`clean_no_air`)

Record Nitrogen monoxide to air as one atomic elementary output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitrogen dioxide from cleaning-water heating (`clean_no2_air`)

Record Nitrogen dioxide to air as one atomic elementary output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### Sulfur dioxide from cleaning-water heating (`clean_so2_air`)

Record Sulfur dioxide to air as one atomic elementary output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

###### PM2.5 from cleaning-water heating (`clean_pm25_air`)

Record Particulate matter, diameter below 2.5 µm, to air as one atomic elementary output when it crosses the Cleaning and sanitation foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from measured fuel use and documented site-specific or applicable emission factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-fdm-bat-2019-2031`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Grid electricity for on-site wastewater treatment (`wwt_grid_electricity`)

Record Grid electricity as one atomic product input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Read the treatment-plant sub-meter or document causal allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Ferric chloride for on-site wastewater treatment (`wwt_ferric_chloride`)

Record Ferric chloride as one atomic product input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record actual ferric chloride mass from dosing records; identify commercial concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Polyacrylamide flocculant for on-site wastewater treatment (`wwt_polyacrylamide`)

Record Polyacrylamide flocculant as one atomic product input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Record actual polyacrylamide mass from dosing records; identify formulation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium hydroxide for wastewater pH adjustment (`wwt_sodium_hydroxide`)

Record Sodium hydroxide as one atomic product input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record actual sodium hydroxide mass from treatment dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

###### Ginger washing wastewater to on-site treatment (`wwt_washing_wastewater`)

Record Ginger washing wastewater as one atomic waste input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure the incoming stream separately at the treatment inlet; do not combine its inventory row with another wastewater source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Ginger preparation wastewater to on-site treatment (`wwt_preparation_wastewater`)

Record Ginger preparation wastewater as one atomic waste input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure the incoming stream separately at the treatment inlet; do not combine its inventory row with another wastewater source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Spent ginger scalding water to on-site treatment (`wwt_scalding_wastewater`)

Record Spent ginger scalding water as one atomic waste input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent ginger scalding water
- Flow property / unit: Mass / kg
- Amount rule: Measure the incoming stream separately at the treatment inlet; do not combine its inventory row with another wastewater source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Calcium-containing pretreatment wastewater to on-site treatment (`wwt_calcium_wastewater`)

Record Calcium-containing ginger pretreatment wastewater as one atomic waste input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Calcium-containing ginger pretreatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure the incoming stream separately at the treatment inlet; do not combine its inventory row with another wastewater source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Brine filling wastewater to on-site treatment (`wwt_brine_filling_wastewater`)

Record Brine filling wastewater as one atomic waste input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Brine filling wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure brine filling wastewater separately at the treatment inlet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Brined-ginger cooling wastewater to on-site treatment (`wwt_cooling_wastewater`)

Record Brined-ginger cooling wastewater as one atomic waste input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Brined-ginger cooling wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure brined-ginger cooling wastewater separately at the treatment inlet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Equipment cleaning wastewater to on-site treatment (`wwt_cleaning_wastewater`)

Record Ginger-processing equipment cleaning wastewater as one atomic waste input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger-processing equipment cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure the incoming stream separately at the treatment inlet; do not combine its inventory row with another wastewater source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Spent sodium chloride brine to on-site treatment (`wwt_spent_brine`)

Record Spent sodium chloride brine as one atomic waste input when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Spent sodium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: Measure the incoming stream separately at the treatment inlet; do not combine its inventory row with another wastewater source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated ginger-processing wastewater (`wwt_treated_wastewater`)

Record Treated ginger-processing wastewater as one atomic waste output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Treated ginger-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure treated effluent mass or volume at the discharge boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Ginger-processing wastewater screenings (`wwt_screenings`)

Record Ginger-processing wastewater screenings as one atomic waste output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger-processing wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Weigh screenings after dewatering and record wet or dry basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Ginger-processing wastewater treatment sludge (`wwt_sludge`)

Record Ginger-processing wastewater treatment sludge as one atomic waste output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Ginger-processing wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weigh sludge by dispatch and record solids content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### Concentrated sodium chloride brine waste (`wwt_brine_concentrate`)

Record Concentrated sodium chloride brine waste as one atomic waste output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Concentrated sodium chloride brine waste
- Flow property / unit: Mass / kg
- Amount rule: Measure concentrate separately when brine is segregated or concentrated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

##### Elementary flows

###### Chemical oxygen demand in treated effluent (`wwt_cod_water`)

Record Chemical oxygen demand to water as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual pollutant load from measured effluent flow and representative measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Five-day biochemical oxygen demand in treated effluent (`wwt_bod5_water`)

Record Biochemical oxygen demand, 5 days, to water as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual pollutant load from measured effluent flow and representative measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Total organic carbon in treated effluent (`wwt_toc_water`)

Record Total organic carbon to water as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Total organic carbon to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual pollutant load from measured effluent flow and representative measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Total suspended solids in treated effluent (`wwt_tss_water`)

Record Total suspended solids to water as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual pollutant load from measured effluent flow and representative measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Total nitrogen in treated effluent (`wwt_tn_water`)

Record Total nitrogen to water as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual pollutant load from measured effluent flow and representative measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Total phosphorus in treated effluent (`wwt_tp_water`)

Record Total phosphorus to water as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual pollutant load from measured effluent flow and representative measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Chloride in treated effluent (`wwt_chloride_water`)

Record Chloride to water as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the individual pollutant load from measured effluent flow and representative measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`

###### Methane from on-site biological wastewater treatment (`wwt_methane_air`)

Record Methane to air as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from site monitoring or a documented plant-specific treatment model; do not apply an unspecified default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitrous oxide from on-site biological wastewater treatment (`wwt_nitrous_oxide_air`)

Record Dinitrogen monoxide to air as one atomic elementary output when it crosses the On-site wastewater treatment foreground boundary; include it only when the locked route and site records demonstrate this exchange.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from site monitoring or a documented plant-specific treatment model; do not apply an unspecified default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per declared route batch, normalized to 1 kg net conforming Ginger, processed output excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_route_subdivision` | shared or alternative routes | Subdivide dry processing and brine processing, and further subdivide distinct product forms, before allocating any shared burden; a combined average is non-conforming. | `eu-pef-2021-2279` |
| `alloc_direct_measurement` | directly metered exchanges | Assign directly measured raw materials, utilities, wastes and emissions to the batch or line that generated them. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `alloc_shared_services` | shared utilities and cleaning | For an unavoidable shared exchange, use a documented physical causal driver such as sub-metered energy, equipment operating time, cleaned surface-time or measured wastewater volume; disclose the driver and do not impose a PCR default factor. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `alloc_residues` | ginger residues and off-spec material | Treat peel, screenings, dust, off-spec ginger and spent brine as waste unless documented records show a marketable co-product; if a co-product exists, disclose the physical relationship and allocation method without applying an unverified avoided-burden credit. | `eu-pef-2021-2279` |
| `alloc_mass_balance` | all product and residue outputs | Reconcile route-specific input mass to conforming product, retained packing medium, water removed, product residues, wastewater solids and recorded losses before normalization. | `fao-ginger-postharvest-operations`; `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route_scope_receiving` | `route_scope_receiving` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_washing_trimming` | `washing_trimming` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_scraping_peeling_slicing` | `scraping_peeling_slicing` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_drying_pretreatment` | `drying_pretreatment` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_drying` | `drying` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_dry_cleaning_grading` | `dry_cleaning_grading` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_crushing_grinding_sieving` | `crushing_grinding_sieving` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_brine_preparation` | `brine_preparation` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_brine_filling_thermal` | `brine_filling_thermal` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_packaging_release` | `packaging_release` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |
| `cp_onsite_wastewater_treatment` | `onsite_wastewater_treatment` | all atomic exchanges | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | Collect route-specific primary records at the exchange point; reconcile them to the batch mass balance and retain source documents. | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | Aggregate only homogeneous batches with the same route, raw-material state, product form, particle-size specification and package; normalize after reconciliation. | calibration record, invoice or ticket, laboratory method, batch traceability, reconciliation and reviewer sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | normalized amount = reconciled route-specific exchange amount / net conforming processed ginger mass released on the declared basis | reconciled exchange amount; released net product mass | exchange amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_brine_mass_disclosure` | ginger in brine | report net contents and drained ginger mass separately; calculate drained fraction only from measured container net and drained masses | measured net contents; measured drained ginger mass | declared brine-route mass descriptors | `codex-cxs-260-2007` |
| `calc_mass_balance` | each production batch | mass-balance difference = total measured product inputs - total measured product outputs - measured waste outputs - calculated elementary mass transfers | route-specific inputs; products; wastes; measured or calculated mass transfers | batch mass-balance difference | `fao-ginger-postharvest-operations`; `eu-pef-2021-2279` |
| `calc_combustion_emissions` | each fired utility | emission mass = measured fuel quantity × site-specific or documented supplier/regulatory emission factor; keep CO2, NO, NO2, SO2 and PM2.5 separate | fuel quantity; fuel property; factor provenance | individual combustion emission mass | `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_loss` | each refrigerant circuit | refrigerant loss = opening stock + additions - closing stock - documented recovery; calculate each refrigerant separately | opening stock; additions; closing stock; recovery | individual refrigerant emission mass | `eu-fdm-bat-2019-2031` |
| `calc_wastewater_load` | each discharged pollutant | pollutant load = measured wastewater volume × representative measured concentration, with sampling period and method aligned | stream volume; pollutant concentration; sampling period | individual pollutant mass | `eu-fdm-bat-2019-2031` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_representativeness` | all activity data | Data shall represent the declared site, line, route, raw-material state, product form, particle-size specification and package; mixed-route averages are not representative. | route key, batch genealogy and production dates |
| `dq_temporal_coverage` | foreground records | Use a disclosed consecutive period covering normal operation and relevant cleaning cycles; disclose shutdowns, trials and abnormal batches. | dated meter intervals, batch records and cleaning logs |
| `dq_metering` | utilities and water | Retain calibrated meter or invoice evidence and document any causal allocation from a shared meter. | calibration certificates, invoices, sub-meter records and allocation worksheet |
| `dq_mass_and_quality` | ginger products | Retain scales, moisture tests, particle-size results and brine net/drained-mass checks appropriate to the locked product specification. | scale checks, laboratory methods, certificates of analysis and release records |
| `dq_waste_and_emissions` | wastes and emissions | Retain waste tickets, wastewater flow and concentration records, emission-factor provenance and refrigerant service logs. | tickets, laboratory reports, monitoring reports and service logs |
| `dq_verification` | complete data package | An independent reviewer shall verify route exclusivity, source traceability, formula implementation, mass balance, allocation and bilingual machine-field alignment. | signed review checklist and resolved findings |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | product identity | Confirm CPC 23927 processed ginger and reject raw ginger, ginger oil, oleoresin, preserved confectionery products and any product outside the declared dry or brine form. | `un-cpc-3-0-2025`; `codex-cxs-343-2021`; `codex-cxs-260-2007` |
| `val_route_exclusivity` | route metadata | Require exactly one route token, one raw-material state, one preparation style, one final product form and one packaging specification; reject dry/brine averages. | `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279` |
| `val_reference_uuid` | reference flow identity | Require the reference product UUID, Mass flow-property UUID, Units-of-mass unit-group UUID and kg unit to match the PCR reference definition. |  |
| `val_reference_mass` | reference amount | Normalize to 1 kg net conforming processed ginger excluding packaging; for ginger in brine also disclose net contents, packing-medium treatment and drained ginger mass. | `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031` |
| `val_atomic_inventory` | inventory exchanges | Require one specific exchange per row; reject selector or collection labels and require every unresolved non-reference UUID to remain blank and closed by manifest review metadata. | `eu-pef-2021-2279` |
| `val_primary_data` | foreground amounts | Require foreground_record or calculated_value from collected foreground records; reject undocumented defaults, ranges and reasoned estimates. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `val_mass_balance` | route mass balance | Require a reconciled batch mass balance and an explanation of losses, moisture removal, packing medium, residues and wastewater solids. | `fao-ginger-postharvest-operations`; `eu-pef-2021-2279` |
| `val_utility_and_emissions` | utilities and emissions | Require stage-specific electricity, steam, hot water, each fuel, refrigerant, wastewater stream, pollutant and air emission actually present; require explicit non-applicability evidence for omitted conditional exchanges. | `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `val_additives` | brine formulation | For each acid or preservative, require actual dose records, ingredient identity and current product/jurisdiction authorisation; Codex category permission is not a default recipe. | `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025` |
| `val_bilingual_structure` | bilingual record | Require identical process_id, row_id, selected-flow identity, UUID, controlled tokens, collection protocol and source-id order in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | A site-specific foreground data package for one locked processed-ginger route and product specification. |
| downstream_use | Construction of processed-ginger product flows, unit processes and lifecycle models, and subsequent LCA studies with an explicit boundary. |
| allowed_use | Use when route, raw-material state, product form, mass basis, site, data period, packaging and data quality match the target study. |
| excluded_use | Do not use as a mixed dry/brine average, for raw ginger, ginger oil, oleoresin or candied ginger, or as a PCR-supplied industry-default inventory. |
| required_metadata | CPC; reference UUID; route; botanical identity; raw-material state; preparation style; product form; moisture or brine mass basis; particle size; packaging; site; line; data period; technology; allocation; cut-offs; upstream links. |
| required_quality_disclosure | coverage period, batch count, meters and calibration, laboratory methods, mass-balance difference, shared-service allocation, waste destinations, emission-factor provenance, unresolved UUIDs and verification status. |
| update_trigger | Material change in route, raw-material state, formulation, additive authorisation, equipment, heat carrier, fuel, refrigerant, packaging, site, quality specification or representative data period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | standard | United Nations Statistics Division, Central Product Classification Version 3.0; retained repository row `23927,"Ginger, processed"` in `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv`; [official classification entry](https://unstats.un.org/unsd/classifications/Family/Detail/2107). | Defines the exact CPC 23927 identity and distinguishes processed ginger from raw ginger. |
| `codex-cxs-343-2021` | standard | Codex Alimentarius, CXS 343-2021, Standard for Dried or Dehydrated Ginger, amended 2025; [official PDF](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B343-2021%2FCXS_343e.pdf). | Supports dried-ginger botanical identity, whole/piece/crushed/ground forms, hygiene, style declaration and conditional calcium-oxide processing-aid treatment; no quality limit is used as an LCI default. |
| `codex-cxs-260-2007` | standard | Codex Alimentarius, CXS 260-2007, Standard for Pickled Fruits and Vegetables; [official PDF](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B260-2007%2FCXS_260e.pdf). | Supports ginger in brine, packing-medium identity, salt and acidic-medium formulation, hygiene, net/drained-mass disclosure and product naming. |
| `codex-gsfa-04-2-2-3-2025` | dataset | Codex GSFA Online, food category 04.2.2.3, updated through CAC48 (2025); [official category page](https://www.fao.org/gsfaonline/foods/details.html?id=80). | Confirms pickled ginger within the brined-vegetable category and identifies current category provisions for benzoates and sorbates; the site formula and applicable market law remain controlling. |
| `codex-cxc-75-2015` | official_guidance | Codex Alimentarius, CXC 75-2015, Code of Hygienic Practice for Low-Moisture Foods, Annex III for spices; [official PDF](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B75-2015%2FCXC_075e.pdf). | Supports controlled dry-area cleaning, dry residue removal, vacuum or filtered-air cleaning and conditional wet or alcohol-based sanitation for dried spice processing. |
| `fao-ginger-postharvest-operations` | extension_guidance | FAO INPhO, *Ginger: Post-harvest Operations*; [official PDF](https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Ginger.pdf). | Supports receiving, debris/shoot/root removal, washing, scalding, scraping/peeling/slicing, calcium-oxide bleaching, drying, air screening, size reduction, grading and specific dry-product packaging forms; example quantities are not adopted as defaults. |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries*, JRC118627, DOI [10.2760/243911](https://doi.org/10.2760/243911); [JRC record](https://publications.jrc.ec.europa.eu/repository/handle/JRC118627). | Supports food-processing utilities, water and energy inventories, cleaning, refrigeration, waste, wastewater and air-emission process structure without category-default inventory amounts. |
| `eu-fdm-bat-2019-2031` | standard | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries; [EUR-Lex full text](https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj). | Requires inventories of water, energy, raw materials, wastewater and waste gas; supports separate COD, BOD, TOC, TSS, TN, TP, chloride, dust, NOx and SOx records, refrigeration controls and measured/calculated monitoring. |
| `eu-pef-2021-2279` | method_factor | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods; [EUR-Lex full text](https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng). | Requires product-specific bills of materials and company-specific manufacturing data, complete LCI, transparent allocation, data quality, reporting and verification. |
