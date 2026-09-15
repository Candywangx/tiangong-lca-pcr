---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.lead-unwrought
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Lead, unwrought

## 1. Scope and Applicability

This PCR governs foreground data packages for unwrought lead metal leaving a producer as crude, refined, soft, hard, or alloyed lead in a cast primary form such as a pig, sow, or ingot. It covers primary production from lead-bearing concentrate and secondary production from lead scrap; the data package shall select and disclose one route, or transparently model a measured site-specific mix without merging route inventories before collection.

The boundary ends at the producer gate after refining, alloy adjustment when applicable, and casting. Lead ore and concentrate as products, lead scrap as a final product, lead oxides, semi-finished lead plate/sheet/strip/foil/powder, fabricated articles, batteries, and downstream rolling, extrusion, or article manufacture are outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.lead-unwrought |
| classification_refs | CPC 3.0: 41441, Lead, unwrought (mapping context only) |
| covered_products | Unwrought lead metal in crude or refined, unalloyed or declared-alloy grade, supplied in cast primary forms such as pigs, sows, or ingots |
| excluded_products | Lead ores and concentrates; lead scrap sold as scrap; lead oxides; semi-finished lead; fabricated lead articles; batteries; downstream forming and manufacture |
| representative_product | Crude lead, with actual purity, alloy composition, casting form, and saleable grade declared |
| production_route | Primary smelting and refining from lead-bearing concentrate, or secondary recovery, smelting, refining, and casting from lead scrap |
| market_state | Solid unwrought lead at the producer gate, net of transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unwrought lead metal as feedstock for downstream fabrication or alloy use |
| How much | 1 kg net saleable unwrought lead at the producer gate |
| How well | Declared lead content, impurity or alloy composition, grade specification, primary/secondary route, casting form, and conformance status |
| How long or cycle | One production batch or reporting-period output; no use-stage service life is represented |
| reference_flow_link | `primary_lead_product` or `secondary_lead_product`, according to the declared route |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Crude lead `063889a6-fcdf-48f8-a229-992a07bc2b0a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | primary, secondary, or measured mixed route; lead purity and full declared alloy/impurity composition; product grade/specification; casting form; producer geography; production technology and furnace type; reporting period; recycled-content accounting convention; net-mass and moisture/contamination basis; producer-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net saleable metal mass at the producer gate, excluding pallets, straps, mould coatings, and transport packaging. |
| `grade_composition_basis` | Lead-bearing inputs and product | Mass | kg | Record wet or as-received feed mass separately from dry mass and contained lead; report product lead content and each intentionally added alloying constituent on a consistent mass basis. |
| `electricity_energy_basis` | Purchased electricity | Energy | MJ | Record metered electricity and the grid/contract geography and voltage; convert kWh to MJ with 1 kWh = 3.6 MJ without changing the underlying meter record. |
| `fuel_energy_basis` | Natural gas and coke | Volume or Mass | m3 or kg | Preserve purchased quantity and declared reference conditions; calculate energy only with the supplier or site-specific net calorific value and retain that factor. |
| `direct_emission_basis` | Direct elementary outputs | Mass | kg | Report only releases from foreground operations; keep captured/recycled material and upstream electricity or fuel-supply emissions outside direct-emission rows. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Primary route: lead-bearing concentrate as received at the smelter gate. Secondary route: sorted lead scrap as received at the recovery/smelter gate. |
| starting_condition_role | Purchased or transferred lead-bearing feed entering the foreground producer |
| product_classification_scope | Unwrought lead metal independent of the external classification tree; CPC 41441 is mapping context |
| recursive_input_rule | Unwrought lead internally remelted within the same reporting system is an internal loop and is not duplicated as an upstream product input; purchased unwrought lead is recorded as a separate input with an upstream dataset. |
| upstream_dataset_requirement | Provide geographically and temporally representative upstream datasets for every purchased material, fuel, electricity, oxygen, water, reagent, and externally treated residue crossing the boundary. |
| disclosure | Declare route, feed origin and composition, furnace/refining technology, gas and dust controls, sulfur management, co-product destinations, waste treatment, product grade, and all exclusions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_primary_route` | Primary production | Include concentrate receipt and handling, preparation or sintering when used, smelting/reduction, gas cleaning and sulfur recovery when used, bullion refining, alloy adjustment, casting, on-site residue handling, and direct releases through the producer gate. | `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017` |
| `boundary_secondary_route` | Secondary production | Include scrap receipt and preparation performed by the producer, smelting/reduction, gas cleaning, refining or alloy adjustment, casting, on-site residue handling, and direct releases through the producer gate. | `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | Purchased inputs | Link upstream supply datasets at the actual delivered grade, state, geography, and reference conditions; do not include their upstream emissions again as direct foreground releases. |  |
| `boundary_exclusions` | Downstream stages | Exclude off-site transport after the producer gate, downstream forming/fabrication, product use, and end-of-life unless a broader study adds them as separately identified processes. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `primary_unwrought_lead` | Primary unwrought lead production | `conditional` | Include when lead-bearing concentrate is the principal feed; declare sinter/blast, direct-smelting, or other verified furnace configuration. | Foreground primary smelting, refining, and casting | kg net saleable unwrought lead |
| `secondary_unwrought_lead` | Secondary unwrought lead production | `conditional` | Include when waste and scrap of lead is the principal feed; declare scrap preparation and furnace configuration. | Foreground secondary recovery, smelting, refining, and casting | kg net saleable unwrought lead |

Exactly one route is normally selected. A producer operating both routes may report a measured site-specific mix only when separate route outputs and shared operations are documented and no exchange is double counted.

### Process: Primary unwrought lead production (`primary_unwrought_lead`)

#### Inputs

##### Product flows

###### Lead-bearing concentrate (`primary_lead_concentrate`)

Record the dry and as-received mass and contained-lead assay of concentrate delivered to the primary smelter.

- Selected flow: lead concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured concentrate received and consumed, reconciled to dry mass and contained lead
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_materials`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### Metallurgical coke (`primary_coke`)

Record coke used as reducing agent or process fuel; exclude coke internally recycled without crossing the system boundary.

- Selected flow: metallurgical coke `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured delivered coke consumed by foreground furnaces
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_materials`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### Limestone flux (`primary_limestone`)

Record limestone charged as flux, with grade and carbonate content declared.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured limestone charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_materials`
- Sources: `us-epa-ap42-primary-lead-1995`

###### Silica flux (`primary_silica_sand`)

Record silica sand charged as flux, with silica content declared.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured silica sand charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_materials`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### Industrial oxygen (`primary_oxygen`)

Record purchased oxygen when oxygen enrichment or oxygen injection is used; declare purity, pressure, and reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: metered purchased oxygen at declared reference conditions; zero only when documented absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_utilities`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water (`primary_process_water`)

Record process water crossing the facility boundary; cooling-water loops are not represented by this row unless makeup water is measured as process water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured net process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_utilities`
- Sources: `eu-jrc-nfm-bref-2017`

###### Purchased electricity (`primary_electricity`)

Record metered alternating-current electricity supplied to the facility, with voltage and grid or contract geography declared.

- Selected flow: alternating-current electricity supply
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased electricity converted from kWh when necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_utilities`
- Sources: `eu-jrc-nfm-bref-2017`

###### Gaseous natural gas (`primary_natural_gas`)

Record natural gas burned in kettles, dryers, or other directly fired foreground equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: metered natural gas at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_utilities`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### Sodium hydroxide refining reagent (`primary_sodium_hydroxide`)

Record sodium hydroxide used to remove residual impurities; declare solution concentration and supplied state.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured sodium-hydroxide product mass, with active-content concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_materials`
- Sources: `us-epa-ap42-primary-lead-1995`

##### Waste flows

No waste input is prescribed. Any externally sourced residue used as feed shall be represented by its own chemically and physically specific product or waste exchange and shall not be merged with concentrate.

##### Elementary flows

No elementary input is prescribed at the facility boundary; air used for combustion is not inventoried unless the selected modelling convention requires it consistently.

#### Outputs

##### Product flows

###### Saleable primary unwrought lead (`primary_lead_product`)

This is the quantitative-reference output for a primary-route data package.

- Selected flow: Crude lead `063889a6-fcdf-48f8-a229-992a07bc2b0a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg after normalization of measured net saleable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_outputs`
- Sources: `un-cpc-3-0-structure-2025`; `us-epa-ap42-primary-lead-1995`

###### Sulfuric acid co-product (`primary_sulfuric_acid`)

Record saleable sulfuric acid when sulfur dioxide from sulfur-bearing primary feed is converted in an on-site acid plant; otherwise document the actual sulfur-control output separately.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured saleable sulfuric acid crossing the producer boundary; zero only when no saleable acid is produced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_outputs`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Lead-smelting slag (`primary_lead_smelting_slag`)

Record slag leaving the primary process for recovery, treatment, use, or disposal, with lead content and destination declared.

- Selected flow: lead smelting slag
- Flow property / unit: Mass / kg
- Amount rule: measured slag mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_outputs`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### Lead-refining dross (`primary_lead_refining_dross`)

Record refining dross leaving the foreground system, with composition, recovery route, and final destination declared.

- Selected flow: lead refining dross
- Flow property / unit: Mass / kg
- Amount rule: measured dross mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_outputs`
- Sources: `us-epa-ap42-primary-lead-1995`

###### Copper-sulfide matte (`primary_copper_matte`)

Record matte transferred for metal recovery as a distinct output, not as slag.

- Selected flow: copper-sulfide matte from lead smelting
- Flow property / unit: Mass / kg
- Amount rule: measured matte mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_outputs`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### Arsenic-antimony speiss (`primary_speiss`)

Record speiss transferred for recovery or treatment as a distinct output, with arsenic and antimony composition declared.

- Selected flow: arsenic-antimony speiss from lead smelting
- Flow property / unit: Mass / kg
- Amount rule: measured speiss mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_outputs`
- Sources: `us-epa-ap42-primary-lead-1995`

##### Elementary flows

###### Direct fossil carbon dioxide (`primary_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide from on-site coke and fuel combustion or reduction; exclude upstream fuel and electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured direct release or site-specific carbon balance reconciled to foreground fossil-carbon inputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sulfur dioxide to air (`primary_sulfur_dioxide_air`)

Record sulfur dioxide released after gas collection, acid production, scrubbing, and other controls; do not record sulfur retained in products or residues here.

- Selected flow: sulfur dioxide to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured controlled and diffuse foreground release combined without double counting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_emissions`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### Lead to air (`primary_lead_air`)

Record lead released to air from captured stacks and quantified diffuse sources.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured lead release to air, unspecified compartment, including quantified diffuse emissions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_emissions`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### Particulate matter to air (`primary_particulate_air`)

Record total particulate matter of unspecified particle size released after controls; retain any measured size fractions as separate supporting fields rather than substituting them for this total.

- Selected flow: particulate matter to air, unspecified particle size
- Flow property / unit: Mass / kg
- Amount rule: measured total particulate release from stacks and quantified diffuse sources
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable primary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_emissions`
- Sources: `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

### Process: Secondary unwrought lead production (`secondary_unwrought_lead`)

#### Inputs

##### Product flows

###### Waste and scrap of lead (`secondary_lead_scrap`)

Record sorted lead scrap delivered to the secondary producer; battery-derived feed must be declared after separation into the actual lead-bearing fraction represented by this row.

- Selected flow: Waste and scrap of lead `c814e493-f6ff-48a6-9b92-caba670f15e3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured delivered lead-scrap mass with contained lead, moisture, sulfur, plastics, and contamination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_materials`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### Metallurgical coke (`secondary_coke`)

Record coke charged as fuel or reducing agent in the selected secondary furnace.

- Selected flow: metallurgical coke `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured coke consumed by foreground operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_materials`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### Limestone flux (`secondary_limestone`)

Record limestone charged in the selected secondary smelting route.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured limestone charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_materials`
- Sources: `us-epa-ap42-secondary-lead-2010`

###### Ferrous scrap charge (`secondary_scrap_steel`)

Record ferrous scrap used for sulfur fixation, flux formation, or heat distribution; do not merge it with lead scrap.

- Selected flow: Scrap Steel `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured ferrous scrap charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_materials`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### Industrial oxygen (`secondary_oxygen`)

Record purchased oxygen when oxygen enrichment is used, with purity, pressure, and reference conditions declared.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: metered purchased oxygen at declared reference conditions; zero only when documented absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_utilities`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water (`secondary_process_water`)

Record process water crossing the secondary-producer boundary, excluding closed-loop recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured net process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_utilities`
- Sources: `eu-jrc-nfm-bref-2017`

###### Purchased electricity (`secondary_electricity`)

Record metered alternating-current electricity supplied to the facility, with voltage and grid or contract geography declared.

- Selected flow: alternating-current electricity supply
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased electricity converted from kWh when necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_utilities`
- Sources: `eu-jrc-nfm-bref-2017`

###### Gaseous natural gas (`secondary_natural_gas`)

Record natural gas burned in scrap pretreatment, smelting, refining, or casting equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: metered natural gas at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_utilities`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### Sodium carbonate flux (`secondary_sodium_carbonate`)

Record sodium carbonate used for paste desulfurization, sulfur fixation, or furnace fluxing, with supplied grade declared.

- Selected flow: sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: measured sodium-carbonate product mass charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_materials`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### Sodium hydroxide refining reagent (`secondary_sodium_hydroxide`)

Record sodium hydroxide used in paste treatment or refining; declare solution concentration, supplied state, and process role.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured sodium-hydroxide product mass, with active-content concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_materials`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

##### Waste flows

No waste input is prescribed. If a residue is accepted as feed, record it as its own specific exchange with composition and incoming treatment state.

##### Elementary flows

No elementary input is prescribed at the facility boundary; combustion air is handled consistently with the selected modelling convention.

#### Outputs

##### Product flows

###### Saleable secondary unwrought lead (`secondary_lead_product`)

This is the quantitative-reference output for a secondary-route data package.

- Selected flow: Crude lead `063889a6-fcdf-48f8-a229-992a07bc2b0a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg after normalization of measured net saleable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_secondary_outputs`
- Sources: `un-cpc-3-0-structure-2025`; `us-epa-ap42-secondary-lead-2010`

##### Waste flows

###### Secondary-lead-smelting slag (`secondary_lead_smelting_slag`)

Record slag leaving the secondary process with lead content, sulfur-fixation role, recovery status, and destination declared.

- Selected flow: secondary lead smelting slag
- Flow property / unit: Mass / kg
- Amount rule: measured slag mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_outputs`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### Secondary-lead-refining dross (`secondary_lead_refining_dross`)

Record dross leaving the secondary refining system with composition, recovery route, and destination declared.

- Selected flow: secondary lead refining dross
- Flow property / unit: Mass / kg
- Amount rule: measured dross mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_outputs`
- Sources: `us-epa-ap42-secondary-lead-2010`

##### Elementary flows

###### Direct fossil carbon dioxide (`secondary_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide from on-site coke and fuel combustion or reduction; exclude upstream fuel and electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured direct release or site-specific carbon balance reconciled to foreground fossil-carbon inputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sulfur dioxide to air (`secondary_sulfur_dioxide_air`)

Record sulfur dioxide released after paste desulfurization, sulfur fixation, scrubbing, acid production, and other controls.

- Selected flow: sulfur dioxide to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured controlled and diffuse foreground release combined without double counting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_emissions`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### Lead to air (`secondary_lead_air`)

Record lead released to air from captured stacks and quantified diffuse sources.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured lead release to air, unspecified compartment, including quantified diffuse emissions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_emissions`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### Particulate matter to air (`secondary_particulate_air`)

Record total particulate matter of unspecified particle size released after controls; retain measured size fractions separately.

- Selected flow: particulate matter to air, unspecified particle size
- Flow property / unit: Mass / kg
- Amount rule: measured total particulate release from stacks and quantified diffuse sources
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable secondary unwrought lead
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_emissions`
- Sources: `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared operations and route mixing | Subdivide primary and secondary routes and separately metered refining, sulfur recovery, and residue recovery whenever records permit; do not average routes merely to avoid subdivision. |  |
| `allocation_internal_recycling` | Internal lead, dust, slag, and dross loops | Exclude internal-loop exchanges from external inventory totals while retaining the gross records needed for mass-balance checks; allocate no separate burden to an internal loop. | `us-epa-ap42-primary-lead-1995`; `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017` |
| `allocation_scrap_input` | Secondary lead feed | Carry the selected upstream dataset for delivered lead scrap, including collection and pretreatment within that dataset boundary; do not add an avoided-primary-lead credit inside the foreground producer. |  |
| `allocation_coproducts` | Sulfuric acid or another saleable co-product | Prefer separately measured subdivision or a documented causal physical relation. If neither is feasible, apply economic allocation using contemporaneous producer-gate values, disclose the period and price basis, and report a sensitivity result; residues without a market are treated as waste outputs, not co-products. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_primary_materials` | `primary_unwrought_lead` | Concentrate, coke, fluxes, and refining reagent | Weighbridge, batch charge, assay, and purchase records | gross_mass; tare_mass; moisture; Pb_assay; material_grade; active_content; batch_id | Reconcile delivered, returned, stored, and charged quantities by material | kg | Each delivery and furnace batch | Complete reporting period | All primary-route units within the producer boundary | Sum net consumed mass by material; retain dry-mass and contained-lead calculations separately | Calibrated scales; laboratory certificates; stock reconciliation; batch logs |
| `cp_primary_utilities` | `primary_unwrought_lead` | Oxygen, water, electricity, and natural gas | Utility meters and invoices | meter_open; meter_close; import; export; reference_conditions; NCV; allocation_key | Reconcile submeter totals to facility invoices and shared-service allocation | m3; kg; kWh; MJ | Continuous or billing interval | Complete reporting period | All foreground primary operations and documented shared services | Net imports minus verified exports; convert units only under Section 4 | Meter calibration; invoices; reference-condition and NCV records; allocation worksheet |
| `cp_primary_outputs` | `primary_unwrought_lead` | Lead, sulfuric acid, slag, dross, matte, and speiss | Product scales, shipment records, residue manifests, and assays | output_mass; grade; composition; destination; recovery_status; batch_id | Reconcile produced, shipped, stored, internally recycled, and discarded outputs | kg | Each batch or shipment | Complete reporting period | All foreground primary outputs | Sum external outputs by identity and destination; keep internal loops separate | Scale calibration; certificates of analysis; shipment and waste records; stock reconciliation |
| `cp_primary_emissions` | `primary_unwrought_lead` | Direct CO2, SO2, lead, and particulate | Continuous or periodic monitoring, validated stack tests, diffuse estimates, and fuel/carbon balance | source_id; pollutant; concentration; gas_flow; duration; capture_status; fuel_carbon; uncertainty | Calculate source-specific mass releases and reconcile capture and bypass events | kg | Monitoring interval and every reportable event | Complete reporting period including startup, shutdown, and upset events | All controlled and diffuse foreground sources | Sum source-specific direct releases once; exclude captured return and upstream emissions | Calibration and QA records; test reports; operating hours; carbon and sulfur balance; uncertainty statement |
| `cp_secondary_materials` | `secondary_unwrought_lead` | Lead scrap, coke, limestone, ferrous scrap, sodium carbonate, and sodium hydroxide | Weighbridge, sorting, assay, batch charge, and purchase records | net_mass; moisture; Pb_content; sulfur; plastics; contamination; material_grade; batch_id | Reconcile delivered, rejected, stored, separated, and charged quantities by material | kg | Each delivery and furnace batch | Complete reporting period | All secondary-route units within the producer boundary | Sum net consumed mass by specific material; keep separated non-lead fractions distinct | Calibrated scales; sorting records; laboratory assays; stock reconciliation; batch logs |
| `cp_secondary_utilities` | `secondary_unwrought_lead` | Oxygen, water, electricity, and natural gas | Utility meters and invoices | meter_open; meter_close; import; export; reference_conditions; NCV; allocation_key | Reconcile submeter totals to facility invoices and shared-service allocation | m3; kg; kWh; MJ | Continuous or billing interval | Complete reporting period | All foreground secondary operations and documented shared services | Net imports minus verified exports; convert units only under Section 4 | Meter calibration; invoices; reference-condition and NCV records; allocation worksheet |
| `cp_secondary_outputs` | `secondary_unwrought_lead` | Lead, slag, and dross | Product scales, shipment records, residue manifests, and assays | output_mass; grade; composition; destination; recovery_status; batch_id | Reconcile produced, shipped, stored, internally recycled, and discarded outputs | kg | Each batch or shipment | Complete reporting period | All foreground secondary outputs | Sum external outputs by identity and destination; keep internal loops separate | Scale calibration; certificates of analysis; shipment and waste records; stock reconciliation |
| `cp_secondary_emissions` | `secondary_unwrought_lead` | Direct CO2, SO2, lead, and particulate | Continuous or periodic monitoring, validated stack tests, diffuse estimates, and fuel/carbon balance | source_id; pollutant; concentration; gas_flow; duration; capture_status; fuel_carbon; uncertainty | Calculate source-specific mass releases and reconcile control, bypass, and afterburner events | kg | Monitoring interval and every reportable event | Complete reporting period including startup, shutdown, and upset events | All controlled and diffuse foreground sources | Sum source-specific direct releases once; exclude captured return and upstream emissions | Calibration and QA records; test reports; operating hours; carbon and sulfur balance; uncertainty statement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized amount = reporting-period exchange amount / reporting-period net saleable unwrought-lead mass | Exchange totals; net saleable lead output | Amount per 1 kg reference product |  |
| `calc_dry_concentrate` | `primary_lead_concentrate` | dry mass = as-received mass × (1 - measured moisture fraction); contained lead = dry mass × dry-basis Pb assay | As-received mass; moisture; Pb assay | Dry concentrate and contained-lead mass |  |
| `calc_scrap_contained_lead` | `secondary_lead_scrap` | contained lead = mass of each accepted scrap fraction × its measured Pb content; sum only accepted lead-bearing fractions | Fraction masses; Pb assays; reject records | Contained lead in secondary feed |  |
| `calc_direct_emission_mass` | Direct SO2, lead, and particulate | source release = concentration × dry gas flow × operating duration, adjusted only by documented reference-condition conversions; sum stack and separately quantified diffuse sources | Monitoring data; gas flow; duration; reference conditions | Pollutant mass released | `us-epa-ap42-primary-lead-1995`; `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017` |
| `calc_carbon_balance` | Direct fossil CO2 when continuous CO2 mass is unavailable | Convert site-specific fossil-carbon consumption and measured carbon retained in products/residues to direct fossil CO2 using a documented carbon balance; do not use a generic emission factor without source review. | Fuel and coke carbon; retained carbon; measured off-gas information | Direct fossil CO2 mass |  |
| `calc_mass_balance` | Each route | mass balance closure = identified external outputs plus direct mass releases and inventory change divided by identified external inputs; report the unaccounted mass and investigate material discrepancies without forcing closure. | Material inputs; products; wastes; emissions; opening and closing stocks | Route mass-balance evidence |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain product grade, lead content, full declared alloy/impurity composition, casting form, route, batch or period, and conformance evidence. | Certificates of analysis; product specifications; batch and shipment records |
| `dq_feed_identity` | Lead-bearing feed | Report feed origin, physical state, moisture, lead content, sulfur, relevant impurities, and recycled/primary status; do not substitute an umbrella feed label. | Supplier certificates; sampling plan; laboratory assays; sorting records |
| `dq_temporal_coverage` | All rows | Cover a representative continuous reporting period and include startup, shutdown, maintenance, bypass, and upset events; disclose gaps and extrapolation. | Meter completeness report; production calendar; event logs |
| `dq_mass_balance` | Each route | Reconcile lead and total mass across inputs, products, internal loops, residues, emissions, and stock changes; investigate rather than hide unexplained differences. | Lead balance; total mass balance; stock reconciliation; corrective-action notes |
| `dq_emission_coverage` | Direct emissions | Include captured stack releases and quantified diffuse releases, identify particle fraction and compartment, and exclude captured material returned to process. | Monitoring plan; stack tests; diffuse-emission method; control-device records |
| `dq_upstream_representativeness` | Purchased inputs | Use upstream datasets matching delivered geography, grade, technology, and reference conditions, and disclose substitutions. | Dataset-selection log; supplier data; representativeness assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm that the quantitative-reference output is unwrought lead, uses the verified Crude lead UUID and Mass/kg support chain, and declares all required qualifiers. | `un-cpc-3-0-structure-2025` |
| `validate_route_selection` | Process map | Require a primary, secondary, or explicitly measured mixed-site route declaration; reject a dataset that silently combines route defaults or incompatible furnace scenarios. | `eu-jrc-nfm-bref-2017` |
| `validate_inventory_atomicity` | Inventory | Require each exchange to keep one chemical or physical identity, direction, flow type, property, unit, route condition, and destination; reject umbrella utilities, materials, wastes, or emissions. |  |
| `validate_uuid_support` | UUID-bearing and unresolved rows | Recheck every final UUID against public state 100, bilingual baseName, flow type, classification, property, and unit group; unresolved rows must retain their exact identity and receive a reviewed UUID before publication. |  |
| `validate_no_double_counting` | Utilities and emissions | Confirm that direct foreground CO2, SO2, lead, and particulate exclude upstream supply-chain emissions and that internal dust, slag, dross, or metal return loops are not counted as external flows. | `us-epa-ap42-primary-lead-1995`; `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017` |
| `validate_balance_and_coverage` | Dataset completeness | Review lead balance, total mass balance, temporal coverage, stock changes, missing records, control bypasses, co-product allocation, and waste destinations; unresolved discrepancies or undocumented exclusions fail validation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` for producer-gate unwrought lead |
| downstream_use | Foreground input to lead fabrication, alloying, battery, construction, shielding, chemical, or other downstream lifecycle models when grade and route match |
| allowed_use | Product systems requiring 1 kg of declared-grade unwrought lead at the producer gate, with route, geography, technology, allocation, and recycled-content convention matched |
| excluded_use | Lead ore/concentrate, lead scrap, lead oxide, semi-finished lead, fabricated articles, batteries, unidentified mixed lead products, or a cradle-to-grave claim without added upstream/downstream processes |
| required_metadata | Product grade and composition; crude/refined/alloy state; casting form; primary/secondary/mixed route; feed origin; furnace and refining technology; geography; reporting period; allocation method; recycled-content convention; control technology; data sources; unresolved substitutions |
| required_quality_disclosure | Primary-data share; meter and assay coverage; lead and total mass-balance results; temporal gaps; diffuse-emission method; uncertainty; co-product treatment; residue destinations; upstream dataset representativeness |
| update_trigger | Change in feed mix, primary/secondary share, furnace or refining technology, product grade, sulfur or dust control, energy supply, allocation method, residue destination, reporting period, or a material mass-balance/quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official classification identity CPC 41441, Lead, unwrought |
| `us-epa-ap42-primary-lead-1995` | `official_guidance` | U.S. EPA, AP-42 Section 12.6, Primary Lead Smelting, January 1995, https://www.epa.gov/sites/production/files/2020-11/documents/c12s06.pdf (retrieved 2026-09-04) | Primary-route process decomposition, specific charge materials, refining/casting, residues, and direct air-emission candidates |
| `us-epa-ap42-secondary-lead-2010` | `official_guidance` | U.S. EPA, AP-42 Section 12.11, Secondary Lead Processing, October 1986, reformatted January 1995, tables updated September 2010, https://www.epa.gov/sites/production/files/2020-11/documents/c12s11_2010.pdf (retrieved 2026-09-04) | Secondary-route scrap preparation, smelting, refining/casting, charge materials, residues, and direct air-emission candidates |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, 2017, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf (retrieved 2026-09-04) | Primary/secondary route distinction, direct-smelting and battery-recovery variants, utilities, residues, emissions, controls, and foreground qualifiers |
