---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of turkeys, fresh or chilled

## 1. Scope and Applicability

This PCR covers net conforming meat of turkeys in the fresh or chilled state within CPC 3.0 subclass 21124. It covers whole dressed carcasses and turkey meat cuts or portions when they retain the fresh or chilled market state. Product form, bone status, skin status, preservation state, dispatch temperature, and packaging format shall be declared.

Frozen turkey meat is excluded. Edible turkey offal, including separately marketed turkey liver, heart, gizzard, or other offal, is excluded from the reference product even when such material is produced as a co-product within the foreground system. Live turkeys, animal by-products, wastes, and intermediate carcasses are not alternative reference products.

The foreground boundary starts with live turkeys at the slaughterhouse receiving point and ends with bulk or packaged net conforming fresh or chilled turkey meat released at the manufacturing facility gate. Turkey farming and transport to the slaughterhouse are upstream linked systems. Distribution, retail refrigeration, use, and end-of-life are downstream linked systems. On-site wastewater treatment and cutting are conditional processes; every installed or used route is represented by its own atomic exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-fresh-or-chilled |
| classification_refs | CPC 3.0: 21124, Meat of turkeys, fresh or chilled |
| covered_products | Whole dressed turkey carcasses and turkey meat cuts or portions released fresh or chilled, excluding packaging mass |
| excluded_products | Frozen turkey meat; edible turkey offal as the reference product; meat of other bird species; live turkeys; products outside the declared fresh or chilled state |
| representative_product | Net conforming meat of turkeys, fresh or chilled, represented by the verified Tiangong CPC 21124 product flow |
| production_route | Live-bird receipt and lairage; slaughter, bleeding, defeathering, and evisceration; carcass dressing; chilling and cold storage; conditional cutting; packaging or bulk release; cleaning and disinfection; conditional on-site wastewater treatment |
| market_state | Bulk or packaged fresh or chilled turkey meat at the manufacturing facility gate, with product form, dispatch temperature, bone status, skin status, and packaging format declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming meat of turkeys in the fresh or chilled state at the manufacturing facility gate |
| How much | 1 kg net product mass, excluding packaging |
| How well | Meets the declared product specification, remains fresh or chilled without entering the frozen state, and excludes edible turkey offal |
| How long or cycle | One declared slaughter and production batch or campaign; no service duration is assigned |
| reference_flow_link | Net mass of conforming fresh or chilled turkey meat released at the facility gate after chilling, conditional cutting, and packaging or bulk release |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product, excluding packaging mass |
| Reference product flow | Meat of turkeys, fresh or chilled `653bdb6e-5456-4a7d-88d3-8493b1f27bc7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole carcass or named cut; bone-in or boneless state; skin-on or skinless state; fresh or chilled state; dispatch temperature; preservation method; packaging or bulk format; net product mass; slaughter, chilling, cutting, and packaging route; facility geography; production batch or campaign; evidence that the product was not frozen; evidence that edible offal is excluded |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete. The verified UUIDs above are stored without dataset versions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record exactly 1 kg net conforming fresh or chilled turkey meat at the facility gate. Exclude all primary, secondary, and transport packaging mass. |
| `live_weight_basis` | Live turkey receipt and slaughter-yield reconciliation | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record calibrated incoming live weight separately from carcass, meat, co-product, waste, and wastewater mass; never substitute bird count for mass without a batch-specific measured conversion. |
| `volume_to_mass_conversion` | Water, liquid chemicals, wastewater, and liquid co-products recorded by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass only with density and temperature applicable to the same named stream and represented period; retain the original volume and conversion inputs. |
| `packaging_count_to_mass` | Packaging components recorded by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass with the measured component mass for the same packaging specification and batch; keep each packaging material separate. |
| `temperature_state_evidence` | Reference product market state | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain product-temperature and storage records demonstrating the declared fresh or chilled state and absence of freezing; temperature records do not change the reference mass unit. |
| `energy_carrier_preservation` | Electricity, steam, hot water, natural gas, diesel, and LPG | Energy | kWh or MJ | Preserve each carrier's measured unit and identity through allocation and conversion. Do not combine carrier quantities into one inventory exchange. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground slaughterhouse system | Include live-turkey receipt and lairage, slaughter, bleeding, defeathering, evisceration, carcass dressing, chilling and cold storage, conditional cutting, packaging or bulk release, cleaning and disinfection, and conditional on-site wastewater treatment. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_upstream_links` | Farming and inbound transport | Treat turkey farming and transport to the slaughterhouse as upstream linked systems; do not duplicate them inside the slaughterhouse foreground inventory. | `eu-pef-2021-2279` |
| `boundary_downstream_links` | Distribution, retail, use, and end-of-life | Treat post-gate distribution, retail refrigeration, preparation, use, and end-of-life as downstream linked systems when required by the study scope. | `eu-pef-2021-2279` |
| `boundary_product_scope` | Product identity | Include only CPC 21124 fresh or chilled turkey meat as the reference product. Reject frozen turkey meat and edible turkey offal as reference-product substitutions. | `unsd-cpc-3-21124` |
| `boundary_conditional_routes` | Cutting, packaging technologies, stunning, refrigeration, and on-site treatment | Include only installed or used technologies. Mark each absent atomic card not applicable with evidence; never replace alternatives with a collection Selected flow. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_complete_lci` | All foreground processes | Record every known material, energy carrier, refrigerant, chemical, packaging component, product, co-product, waste, wastewater stream, and elementary emission separately. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_no_bref_defaults` | Quantitative inventory | Use site and batch foreground records. Do not copy BAT-associated levels, example values, or performance values from the SA BREF as default inventory quantities or ranges. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live turkeys presented at the slaughterhouse receiving point, with supplier, flock, delivery, incoming live weight, condition, and receipt time declared |
| starting_condition_role | Foreground gate-to-gate starting condition; turkey farming and inbound transport remain linked upstream systems |
| product_classification_scope | CPC 3.0 subclass 21124 only: meat of turkeys in the fresh or chilled state; frozen turkey meat and edible turkey offal are outside the reference-product scope |
| recursive_input_rule | A supplied input already classified as fresh or chilled turkey meat is recorded as a technosphere input with its upstream dataset and is not conceptually re-produced inside this foreground boundary |
| upstream_dataset_requirement | Select temporally, geographically, technologically, and physically representative datasets for live turkeys, water, energy carriers, chemicals, packaging components, treatment services, and other supplied products |
| disclosure | Declare product form and state, slaughter and chilling technology, cutting route, packaging, refrigeration circuits, fuel systems, co-product status, waste destinations, wastewater route, allocation, data period, excluded operations, and unresolved UUID identities |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `turkey_receipt_and_lairage` | Turkey receipt and lairage | `required` | Always | Receive live turkeys, document incoming live weight, and route accepted birds to slaughter | kg accepted live turkey mass per 1 kg reference product |
| `slaughter_bleeding_defeathering_evisceration` | Slaughter, bleeding, defeathering, and evisceration | `required` | Always; stunning technology is site-specific | Stun, slaughter, bleed, scald, defeather, eviscerate, and segregate named animal co-products and wastes | kg eviscerated turkey carcass transferred to dressing |
| `carcass_dressing` | Turkey carcass dressing | `required` | Always | Trim and inspect eviscerated carcasses before chilling | kg dressed turkey carcass transferred to chilling |
| `chilling_and_cold_storage` | Turkey carcass chilling and cold storage | `required` | Always; water, ice, and refrigerant cards apply only to the installed system | Cool carcasses without freezing and maintain the declared fresh or chilled state | kg chilled whole turkey carcass released to cutting or packaging |
| `cutting_and_portioning` | Turkey cutting and portioning | `conditional` | Include when the reference product is a cut, portion, deboned meat, or recovered meat trimming | Cut chilled carcasses into separately identified meat products and segregate named co-products and wastes | kg conforming turkey cuts transferred to packaging |
| `packaging_and_release` | Packaging and facility-gate release | `required` | Always; individual packaging and atmosphere cards apply only when used | Package or release bulk product, reconcile packaging, and issue the reference product at the facility gate | 1 kg net conforming fresh or chilled turkey meat, excluding packaging mass |
| `cleaning_and_disinfection` | Cleaning and disinfection | `required` | Always; each chemical and fuel card applies only when that substance is used | Clean and disinfect processing equipment and segregate each sanitation wastewater stream | attributable sanitation records per 1 kg reference product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include only when one or more named wastewater streams are treated on site | Treat separately recorded wastewater inputs and quantify each treatment residue and discharge | treated wastewater attributable to 1 kg reference product |

### Process: Turkey receipt and lairage (`turkey_receipt_and_lairage`)

#### Inputs

##### Product flows

###### Live turkey input (`live_turkeys_input`)

This product input records only Live turkeys for slaughter at the turkey receipt and lairage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Live turkeys for slaughter
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_turkey_receipt`
- Sources: `unsd-cpc-3-21124`; `ec-jrc-sa-bref-jrc135916`

###### Lairage drinking water (`lairage_drinking_water_input`)

This product input records only Potable water for turkey lairage drinking at the turkey receipt and lairage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Potable water for turkey lairage drinking
- Flow property / unit: Mass / kg
- Amount rule: metered mass or volume converted to mass with same-stream density and temperature records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_turkey_receipt`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Lairage electricity (`receipt_lairage_electricity_input`)

This product input records only Grid electricity for turkey lairage at the turkey receipt and lairage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Grid electricity for turkey lairage
- Flow property / unit: Energy / kWh
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_turkey_receipt`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live turkeys (`accepted_live_turkeys_output`)

This product output records only Accepted live turkeys transferred to slaughter at the turkey receipt and lairage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Accepted live turkeys transferred to slaughter
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_turkey_receipt`
- Sources: `unsd-cpc-3-21124`; `ec-jrc-sa-bref-jrc135916`

##### Waste flows

###### Dead-on-arrival turkeys (`dead_on_arrival_turkeys_waste_output`)

This waste output records only Dead-on-arrival turkey carcasses at the turkey receipt and lairage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Dead-on-arrival turkey carcasses
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_turkey_receipt`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Lairage turkey manure (`lairage_manure_waste_output`)

This waste output records only Turkey manure from lairage at the turkey receipt and lairage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey manure from lairage
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_turkey_receipt`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Lairage wash wastewater (`lairage_wash_wastewater_output`)

This waste output records only Lairage wash wastewater from turkey receipt at the turkey receipt and lairage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Lairage wash wastewater from turkey receipt
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_turkey_receipt`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Slaughter, bleeding, defeathering, and evisceration (`slaughter_bleeding_defeathering_evisceration`)

#### Inputs

##### Product flows

###### Accepted live turkey input (`accepted_live_turkeys_slaughter_input`)

This product input records only Accepted live turkeys transferred to slaughter at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Accepted live turkeys transferred to slaughter
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `unsd-cpc-3-21124`; `ec-jrc-sa-bref-jrc135916`

###### Slaughter process water (`slaughter_process_water_input`)

This product input records only Potable process water for turkey slaughter at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Potable process water for turkey slaughter
- Flow property / unit: Mass / kg
- Amount rule: metered mass or volume converted to mass with same-stream density and temperature records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter electricity (`slaughter_electricity_input`)

This product input records only Grid electricity for turkey slaughter at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Grid electricity for turkey slaughter
- Flow property / unit: Energy / kWh
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Purchased scalding steam (`slaughter_purchased_steam_input`)

This product input records only Purchased steam for turkey scalding at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Purchased steam for turkey scalding
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Purchased slaughter hot water (`slaughter_purchased_hot_water_input`)

This product input records only Purchased hot water for turkey slaughter at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Purchased hot water for turkey slaughter
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter natural gas (`slaughter_natural_gas_input`)

This product input records only Natural gas combusted for turkey slaughter at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Natural gas combusted for turkey slaughter
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter diesel (`slaughter_diesel_input`)

This product input records only Diesel combusted for turkey slaughter at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Diesel combusted for turkey slaughter
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter LPG (`slaughter_lpg_input`)

This product input records only Liquefied petroleum gas combusted for turkey slaughter at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Liquefied petroleum gas combusted for turkey slaughter
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Stunning carbon dioxide (`slaughter_stunning_co2_input`)

This product input records only Carbon dioxide gas for turkey stunning at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide gas for turkey stunning
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Eviscerated turkey carcasses (`eviscerated_turkey_carcass_output`)

This product output records only Eviscerated turkey carcasses transferred to dressing at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Eviscerated turkey carcasses transferred to dressing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey blood (`recovered_turkey_blood_output`)

This product output records only Turkey blood for animal-by-product processing at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey blood for animal-by-product processing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey feathers (`recovered_turkey_feathers_output`)

This product output records only Turkey feathers for animal-by-product processing at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey feathers for animal-by-product processing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey heads (`recovered_turkey_heads_output`)

This product output records only Turkey heads for animal-by-product processing at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey heads for animal-by-product processing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey feet (`recovered_turkey_feet_output`)

This product output records only Turkey feet for animal-by-product processing at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey feet for animal-by-product processing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey livers (`recovered_turkey_livers_output`)

This product output records only Turkey livers for food co-product handling at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey livers for food co-product handling
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey hearts (`recovered_turkey_hearts_output`)

This product output records only Turkey hearts for food co-product handling at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey hearts for food co-product handling
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey gizzards (`recovered_turkey_gizzards_output`)

This product output records only Turkey gizzards for food co-product handling at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey gizzards for food co-product handling
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Turkey lung waste (`turkey_lungs_waste_output`)

This waste output records only Turkey lungs sent to animal-by-product treatment at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey lungs sent to animal-by-product treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Turkey spleen waste (`turkey_spleens_waste_output`)

This waste output records only Turkey spleens sent to animal-by-product treatment at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey spleens sent to animal-by-product treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Turkey intestine waste (`turkey_intestines_waste_output`)

This waste output records only Turkey intestines sent to animal-by-product treatment at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey intestines sent to animal-by-product treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Turkey stomach contents (`turkey_stomach_contents_waste_output`)

This waste output records only Turkey stomach contents from evisceration at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey stomach contents from evisceration
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Turkey intestinal contents (`turkey_intestinal_contents_waste_output`)

This waste output records only Turkey intestinal contents from evisceration at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey intestinal contents from evisceration
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Condemned slaughter carcasses (`condemned_turkey_carcass_slaughter_waste_output`)

This waste output records only Condemned turkey carcasses from slaughter inspection at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Condemned turkey carcasses from slaughter inspection
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter high-load wastewater (`slaughter_high_load_wastewater_output`)

This waste output records only High-organic-load wastewater from turkey slaughter at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: High-organic-load wastewater from turkey slaughter
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Slaughter fossil carbon dioxide (`slaughter_fossil_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from turkey slaughter combustion at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide, fossil, to air from turkey slaughter combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter nitrogen oxides (`slaughter_nox_output`)

This elementary output records only Nitrogen oxides, to air from turkey slaughter combustion at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Nitrogen oxides, to air from turkey slaughter combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter sulfur dioxide (`slaughter_so2_output`)

This elementary output records only Sulfur dioxide, to air from turkey slaughter combustion at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sulfur dioxide, to air from turkey slaughter combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter PM2.5 (`slaughter_pm25_output`)

This elementary output records only Particulate matter, PM2.5, to air from turkey slaughter combustion at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Particulate matter, PM2.5, to air from turkey slaughter combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter PM10 (`slaughter_pm10_output`)

This elementary output records only Particulate matter, PM10, to air from turkey slaughter combustion at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Particulate matter, PM10, to air from turkey slaughter combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Stunning fossil carbon dioxide (`slaughter_stunning_fossil_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from turkey stunning at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide, fossil, to air from turkey stunning
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Stunning biogenic carbon dioxide (`slaughter_stunning_biogenic_co2_output`)

This elementary output records only Carbon dioxide, biogenic, to air from turkey stunning at the slaughter, bleeding, defeathering, and evisceration boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide, biogenic, to air from turkey stunning
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_operations`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Turkey carcass dressing (`carcass_dressing`)

#### Inputs

##### Product flows

###### Eviscerated carcass input (`eviscerated_turkey_carcass_dressing_input`)

This product input records only Eviscerated turkey carcasses transferred to dressing at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Eviscerated turkey carcasses transferred to dressing
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressing process water (`dressing_process_water_input`)

This product input records only Potable process water for turkey carcass dressing at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Potable process water for turkey carcass dressing
- Flow property / unit: Mass / kg
- Amount rule: metered mass or volume converted to mass with same-stream density and temperature records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressing electricity (`dressing_electricity_input`)

This product input records only Grid electricity for turkey carcass dressing at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Grid electricity for turkey carcass dressing
- Flow property / unit: Energy / kWh
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed turkey carcasses (`dressed_turkey_carcass_output`)

This product output records only Dressed turkey carcasses before chilling at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Dressed turkey carcasses before chilling
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey necks (`recovered_turkey_necks_output`)

This product output records only Turkey necks for food co-product handling at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey necks for food co-product handling
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered dressing fat (`recovered_turkey_fat_dressing_output`)

This product output records only Separated turkey fat from carcass dressing at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Separated turkey fat from carcass dressing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered dressing skin (`recovered_turkey_skin_dressing_output`)

This product output records only Removed turkey skin from carcass dressing at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Removed turkey skin from carcass dressing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Condemned dressing material (`condemned_turkey_dressing_waste_output`)

This waste output records only Condemned turkey meat from carcass dressing at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Condemned turkey meat from carcass dressing
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressing wash wastewater (`dressing_wash_wastewater_output`)

This waste output records only Carcass dressing wash wastewater at the turkey carcass dressing boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carcass dressing wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Turkey carcass chilling and cold storage (`chilling_and_cold_storage`)

#### Inputs

##### Product flows

###### Dressed carcass chilling input (`dressed_turkey_carcass_chilling_input`)

This product input records only Dressed turkey carcasses before chilling at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Dressed turkey carcasses before chilling
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling process water (`chilling_process_water_input`)

This product input records only Potable water for turkey carcass chilling at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Potable water for turkey carcass chilling
- Flow property / unit: Mass / kg
- Amount rule: metered mass or volume converted to mass with same-stream density and temperature records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling ice (`chilling_ice_input`)

This product input records only Ice for turkey carcass chilling at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Ice for turkey carcass chilling
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling electricity (`chilling_electricity_input`)

This product input records only Grid electricity for turkey chilling cold storage at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Grid electricity for turkey chilling cold storage
- Flow property / unit: Energy / kWh
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-717 make-up (`chilling_r717_makeup_input`)

This product input records only Ammonia refrigerant R-717 make-up at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Ammonia refrigerant R-717 make-up
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a make-up (`chilling_r134a_makeup_input`)

This product input records only Tetrafluoroethane refrigerant R-134a make-up at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Tetrafluoroethane refrigerant R-134a make-up
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 make-up (`chilling_r744_makeup_input`)

This product input records only Carbon dioxide refrigerant R-744 make-up at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide refrigerant R-744 make-up
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled whole carcasses (`chilled_whole_turkey_carcass_output`)

This product output records only Chilled whole turkey carcasses at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled whole turkey carcasses
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Chilling overflow wastewater (`chilling_overflow_wastewater_output`)

This waste output records only Turkey carcass chilling overflow wastewater at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey carcass chilling overflow wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste compressor oil (`refrigeration_compressor_oil_waste_output`)

This waste output records only Waste refrigeration compressor oil from turkey chilling at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste refrigeration compressor oil from turkey chilling
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### R-717 emission (`chilling_r717_to_air_output`)

This elementary output records only Ammonia R-717, to air from turkey chilling at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Ammonia R-717, to air from turkey chilling
- Flow property / unit: Mass / kg
- Amount rule: calculated for this refrigerant identity as opening charge plus make-up minus recovery, closing charge, and documented transfers for each circuit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a emission (`chilling_r134a_to_air_output`)

This elementary output records only Tetrafluoroethane R-134a, to air from turkey chilling at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Tetrafluoroethane R-134a, to air from turkey chilling
- Flow property / unit: Mass / kg
- Amount rule: calculated for this refrigerant identity as opening charge plus make-up minus recovery, closing charge, and documented transfers for each circuit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 fossil carbon dioxide (`chilling_r744_fossil_co2_to_air_output`)

This elementary output records only Carbon dioxide, fossil, to air from R-744 turkey refrigeration at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide, fossil, to air from R-744 turkey refrigeration
- Flow property / unit: Mass / kg
- Amount rule: calculated for this refrigerant identity as opening charge plus make-up minus recovery, closing charge, and documented transfers for each circuit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 biogenic carbon dioxide (`chilling_r744_biogenic_co2_to_air_output`)

This elementary output records only Carbon dioxide, biogenic, to air from R-744 turkey refrigeration at the turkey carcass chilling and cold storage boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide, biogenic, to air from R-744 turkey refrigeration
- Flow property / unit: Mass / kg
- Amount rule: calculated for this refrigerant identity as opening charge plus make-up minus recovery, closing charge, and documented transfers for each circuit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_refrigeration`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Turkey cutting and portioning (`cutting_and_portioning`)

#### Inputs

##### Product flows

###### Chilled carcass cutting input (`chilled_whole_turkey_cutting_input`)

This product input records only Chilled whole turkey carcasses at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled whole turkey carcasses
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cutting process water (`cutting_process_water_input`)

This product input records only Potable process water for turkey cutting at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Potable process water for turkey cutting
- Flow property / unit: Mass / kg
- Amount rule: metered mass or volume converted to mass with same-stream density and temperature records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cutting electricity (`cutting_electricity_input`)

This product input records only Grid electricity for turkey cutting at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Grid electricity for turkey cutting
- Flow property / unit: Energy / kWh
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Turkey breast meat (`chilled_turkey_breast_output`)

This product output records only Chilled turkey breast meat at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey breast meat
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Turkey thigh meat (`chilled_turkey_thigh_output`)

This product output records only Chilled turkey thigh meat at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey thigh meat
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Turkey drumstick meat (`chilled_turkey_drumstick_output`)

This product output records only Chilled turkey drumstick meat at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey drumstick meat
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Turkey wing meat (`chilled_turkey_wing_output`)

This product output records only Chilled turkey wing meat at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey wing meat
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Turkey meat trimmings (`chilled_turkey_meat_trimmings_output`)

This product output records only Chilled turkey meat trimmings for food use at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey meat trimmings for food use
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered cutting fat (`recovered_turkey_fat_cutting_output`)

This product output records only Separated turkey fat from cutting at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Separated turkey fat from cutting
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered turkey bones (`recovered_turkey_bones_output`)

This product output records only Turkey bones for animal-by-product processing at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey bones for animal-by-product processing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered cutting skin (`recovered_turkey_skin_cutting_output`)

This product output records only Turkey skin for animal-by-product processing at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey skin for animal-by-product processing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Condemned cutting meat (`condemned_turkey_meat_cutting_waste_output`)

This waste output records only Condemned turkey meat from cutting at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Condemned turkey meat from cutting
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cutting wash wastewater (`cutting_wash_wastewater_output`)

This waste output records only Turkey cutting wash wastewater at the turkey cutting and portioning boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey cutting wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Packaging and facility-gate release (`packaging_and_release`)

#### Inputs

##### Product flows

###### Whole carcass packaging input (`chilled_whole_turkey_packaging_input`)

This product input records only Chilled whole turkey carcasses at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled whole turkey carcasses
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Breast packaging input (`chilled_turkey_breast_packaging_input`)

This product input records only Chilled turkey breast meat at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey breast meat
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Thigh packaging input (`chilled_turkey_thigh_packaging_input`)

This product input records only Chilled turkey thigh meat at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey thigh meat
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Drumstick packaging input (`chilled_turkey_drumstick_packaging_input`)

This product input records only Chilled turkey drumstick meat at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey drumstick meat
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wing packaging input (`chilled_turkey_wing_packaging_input`)

This product input records only Chilled turkey wing meat at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey wing meat
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Trimmings packaging input (`chilled_turkey_trimmings_packaging_input`)

This product input records only Chilled turkey meat trimmings for food use at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chilled turkey meat trimmings for food use
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging electricity (`packaging_electricity_input`)

This product input records only Grid electricity for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Grid electricity for turkey meat packaging
- Flow property / unit: Energy / kWh
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### LLDPE shrink film (`packaging_lldpe_shrink_film_input`)

This product input records only Linear low-density polyethylene shrink film at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Linear low-density polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polyamide film (`packaging_polyamide_film_input`)

This product input records only Polyamide film for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Polyamide film for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### PET tray (`packaging_pet_tray_input`)

This product input records only Polyethylene terephthalate tray for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Polyethylene terephthalate tray for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### EPS tray (`packaging_eps_tray_input`)

This product input records only Expanded polystyrene tray for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Expanded polystyrene tray for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cellulose absorbent pad (`packaging_cellulose_absorbent_pad_input`)

This product input records only Cellulose absorbent pad for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Cellulose absorbent pad for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Paper label (`packaging_paper_label_input`)

This product input records only Paper label for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Paper label for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Corrugated case (`packaging_corrugated_case_input`)

This product input records only Corrugated paperboard case for turkey meat transport at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Corrugated paperboard case for turkey meat transport
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polypropylene strapping (`packaging_pp_strapping_input`)

This product input records only Polypropylene strapping for turkey meat transport at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Polypropylene strapping for turkey meat transport
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### HDPE crate (`packaging_hdpe_crate_input`)

This product input records only High-density polyethylene crate for turkey meat transport at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: High-density polyethylene crate for turkey meat transport
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wooden pallet (`packaging_wooden_pallet_input`)

This product input records only Wooden pallet for turkey meat transport at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Wooden pallet for turkey meat transport
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging carbon dioxide (`packaging_co2_gas_input`)

This product input records only Carbon dioxide gas for turkey meat atmosphere packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide gas for turkey meat atmosphere packaging
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging nitrogen (`packaging_nitrogen_gas_input`)

This product input records only Nitrogen gas for turkey meat atmosphere packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Nitrogen gas for turkey meat atmosphere packaging
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference turkey meat (`reference_product_output`)

This verified product output is the quantitative reference: 1 kg net conforming turkey meat in the fresh or chilled state at the facility gate. Frozen turkey meat, edible turkey offal, and packaging mass are excluded.

- Selected flow: Meat of turkeys, fresh or chilled `653bdb6e-5456-4a7d-88d3-8493b1f27bc7`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net conforming product at the facility gate; packaging mass is excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `unsd-cpc-3-21124`; `eu-pef-2021-2279`

##### Waste flows

###### Off-spec packaged meat (`offspec_packaged_turkey_meat_waste_output`)

This waste output records only Off-spec packaged turkey meat sent to waste treatment at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Off-spec packaged turkey meat sent to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste LLDPE shrink film (`waste_packaging_lldpe_shrink_film_output`)

This waste output records only Waste linear low-density polyethylene shrink film at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste linear low-density polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste Polyamide film (`waste_packaging_polyamide_film_output`)

This waste output records only Waste polyamide film for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste polyamide film for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste PET tray (`waste_packaging_pet_tray_output`)

This waste output records only Waste polyethylene terephthalate tray for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste polyethylene terephthalate tray for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste EPS tray (`waste_packaging_eps_tray_output`)

This waste output records only Waste expanded polystyrene tray for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste expanded polystyrene tray for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste Cellulose absorbent pad (`waste_packaging_cellulose_absorbent_pad_output`)

This waste output records only Waste cellulose absorbent pad for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste cellulose absorbent pad for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste Paper label (`waste_packaging_paper_label_output`)

This waste output records only Waste paper label for turkey meat packaging at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste paper label for turkey meat packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste Corrugated case (`waste_packaging_corrugated_case_output`)

This waste output records only Waste corrugated paperboard case for turkey meat transport at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste corrugated paperboard case for turkey meat transport
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste Polypropylene strapping (`waste_packaging_pp_strapping_output`)

This waste output records only Waste polypropylene strapping for turkey meat transport at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste polypropylene strapping for turkey meat transport
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste HDPE crate (`waste_packaging_hdpe_crate_output`)

This waste output records only Waste high-density polyethylene crate for turkey meat transport at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste high-density polyethylene crate for turkey meat transport
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste Wooden pallet (`waste_packaging_wooden_pallet_output`)

This waste output records only Waste wooden pallet for turkey meat transport at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Waste wooden pallet for turkey meat transport
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Packaging fossil carbon dioxide (`packaging_fossil_co2_to_air_output`)

This elementary output records only Carbon dioxide, fossil, to air from turkey packaging gas purge at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide, fossil, to air from turkey packaging gas purge
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging nitrogen emission (`packaging_nitrogen_to_air_output`)

This elementary output records only Nitrogen, to air from turkey packaging gas purge at the packaging and facility-gate release boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Nitrogen, to air from turkey packaging gas purge
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Cleaning and disinfection (`cleaning_and_disinfection`)

#### Inputs

##### Product flows

###### Sanitation process water (`sanitation_process_water_input`)

This product input records only Potable process water for turkey plant sanitation at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Potable process water for turkey plant sanitation
- Flow property / unit: Mass / kg
- Amount rule: metered mass or volume converted to mass with same-stream density and temperature records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation electricity (`sanitation_electricity_input`)

This product input records only Grid electricity for turkey plant sanitation at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Grid electricity for turkey plant sanitation
- Flow property / unit: Energy / kWh
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation purchased steam (`sanitation_purchased_steam_input`)

This product input records only Purchased steam for turkey plant sanitation at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Purchased steam for turkey plant sanitation
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation purchased hot water (`sanitation_purchased_hot_water_input`)

This product input records only Purchased hot water for turkey plant sanitation at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Purchased hot water for turkey plant sanitation
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation natural gas (`sanitation_natural_gas_input`)

This product input records only Natural gas combusted for turkey plant sanitation at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Natural gas combusted for turkey plant sanitation
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation diesel (`sanitation_diesel_input`)

This product input records only Diesel combusted for turkey plant sanitation at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Diesel combusted for turkey plant sanitation
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation LPG (`sanitation_lpg_input`)

This product input records only Liquefied petroleum gas combusted for turkey plant sanitation at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Liquefied petroleum gas combusted for turkey plant sanitation
- Flow property / unit: Energy / MJ
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium hydroxide (`sanitation_sodium_hydroxide_input`)

This product input records only Sodium hydroxide solution for turkey plant cleaning at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sodium hydroxide solution for turkey plant cleaning
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric acid (`sanitation_nitric_acid_input`)

This product input records only Nitric acid solution for turkey plant cleaning at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Nitric acid solution for turkey plant cleaning
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric acid (`sanitation_phosphoric_acid_input`)

This product input records only Phosphoric acid solution for turkey plant cleaning at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Phosphoric acid solution for turkey plant cleaning
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic acid (`sanitation_peracetic_acid_input`)

This product input records only Peracetic acid solution for turkey plant disinfection at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Peracetic acid solution for turkey plant disinfection
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium hypochlorite (`sanitation_sodium_hypochlorite_input`)

This product input records only Sodium hypochlorite solution for turkey plant disinfection at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sodium hypochlorite solution for turkey plant disinfection
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium chloride (`sanitation_benzalkonium_chloride_input`)

This product input records only Benzalkonium chloride solution for turkey plant disinfection at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Benzalkonium chloride solution for turkey plant disinfection
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Alkaline cleaning wastewater (`alkaline_cleaning_wastewater_output`)

This waste output records only Alkaline cleaning wastewater from turkey equipment at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Alkaline cleaning wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric acid wastewater (`nitric_acid_cleaning_wastewater_output`)

This waste output records only Nitric acid cleaning wastewater from turkey equipment at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Nitric acid cleaning wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric acid wastewater (`phosphoric_acid_cleaning_wastewater_output`)

This waste output records only Phosphoric acid cleaning wastewater from turkey equipment at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Phosphoric acid cleaning wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic acid wastewater (`peracetic_acid_sanitation_wastewater_output`)

This waste output records only Peracetic acid sanitation wastewater from turkey equipment at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Peracetic acid sanitation wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium hypochlorite wastewater (`sodium_hypochlorite_sanitation_wastewater_output`)

This waste output records only Sodium hypochlorite sanitation wastewater from turkey equipment at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sodium hypochlorite sanitation wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium wastewater (`benzalkonium_sanitation_wastewater_output`)

This waste output records only Benzalkonium chloride sanitation wastewater from turkey equipment at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Benzalkonium chloride sanitation wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Final rinse wastewater (`final_rinse_wastewater_output`)

This waste output records only Final rinse wastewater from turkey equipment at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Final rinse wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation floor sweepings (`sanitation_floor_sweepings_waste_output`)

This waste output records only Sanitation floor sweepings from turkey processing at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sanitation floor sweepings from turkey processing
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Sanitation fossil carbon dioxide (`sanitation_fossil_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from turkey sanitation combustion at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide, fossil, to air from turkey sanitation combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation nitrogen oxides (`sanitation_nox_output`)

This elementary output records only Nitrogen oxides, to air from turkey sanitation combustion at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Nitrogen oxides, to air from turkey sanitation combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation sulfur dioxide (`sanitation_so2_output`)

This elementary output records only Sulfur dioxide, to air from turkey sanitation combustion at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sulfur dioxide, to air from turkey sanitation combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation PM2.5 (`sanitation_pm25_output`)

This elementary output records only Particulate matter, PM2.5, to air from turkey sanitation combustion at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Particulate matter, PM2.5, to air from turkey sanitation combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation PM10 (`sanitation_pm10_output`)

This elementary output records only Particulate matter, PM10, to air from turkey sanitation combustion at the cleaning and disinfection boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Particulate matter, PM10, to air from turkey sanitation combustion
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater treatment electricity (`wastewater_treatment_electricity_input`)

This product input records only Grid electricity for turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Grid electricity for turkey wastewater treatment
- Flow property / unit: Energy / kWh
- Amount rule: metered quantity for this named energy carrier over the represented period, allocated with a documented causal driver and without combining carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Ferric chloride (`wastewater_ferric_chloride_input`)

This product input records only Ferric chloride for turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Ferric chloride for turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polyacrylamide (`wastewater_polyacrylamide_input`)

This product input records only Polyacrylamide for turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Polyacrylamide for turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater sodium hydroxide (`wastewater_sodium_hydroxide_input`)

This product input records only Sodium hydroxide for turkey wastewater pH control at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sodium hydroxide for turkey wastewater pH control
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater sulfuric acid (`wastewater_sulfuric_acid_input`)

This product input records only Sulfuric acid for turkey wastewater pH control at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sulfuric acid for turkey wastewater pH control
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed mass for this named substance, corrected for returns and documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polymer preparation water (`wastewater_polymer_makeup_water_input`)

This product input records only Potable water for turkey wastewater polymer preparation at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Potable water for turkey wastewater polymer preparation
- Flow property / unit: Mass / kg
- Amount rule: metered mass or volume converted to mass with same-stream density and temperature records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Lairage wastewater input (`lairage_wash_wastewater_treatment_input`)

This waste input records only Lairage wash wastewater from turkey receipt at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Lairage wash wastewater from turkey receipt
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter wastewater input (`slaughter_high_load_wastewater_treatment_input`)

This waste input records only High-organic-load wastewater from turkey slaughter at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: High-organic-load wastewater from turkey slaughter
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressing wastewater input (`dressing_wash_wastewater_treatment_input`)

This waste input records only Carcass dressing wash wastewater at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carcass dressing wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chilling wastewater input (`chilling_overflow_wastewater_treatment_input`)

This waste input records only Turkey carcass chilling overflow wastewater at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey carcass chilling overflow wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Cutting wastewater input (`cutting_wash_wastewater_treatment_input`)

This waste input records only Turkey cutting wash wastewater at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Turkey cutting wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Alkaline wastewater input (`alkaline_cleaning_wastewater_treatment_input`)

This waste input records only Alkaline cleaning wastewater from turkey equipment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Alkaline cleaning wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric acid wastewater input (`nitric_acid_cleaning_wastewater_treatment_input`)

This waste input records only Nitric acid cleaning wastewater from turkey equipment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Nitric acid cleaning wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric acid wastewater input (`phosphoric_acid_cleaning_wastewater_treatment_input`)

This waste input records only Phosphoric acid cleaning wastewater from turkey equipment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Phosphoric acid cleaning wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic acid wastewater input (`peracetic_acid_sanitation_wastewater_treatment_input`)

This waste input records only Peracetic acid sanitation wastewater from turkey equipment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Peracetic acid sanitation wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium hypochlorite wastewater input (`sodium_hypochlorite_sanitation_wastewater_treatment_input`)

This waste input records only Sodium hypochlorite sanitation wastewater from turkey equipment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Sodium hypochlorite sanitation wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium wastewater input (`benzalkonium_sanitation_wastewater_treatment_input`)

This waste input records only Benzalkonium chloride sanitation wastewater from turkey equipment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Benzalkonium chloride sanitation wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Final rinse wastewater input (`final_rinse_wastewater_treatment_input`)

This waste input records only Final rinse wastewater from turkey equipment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Final rinse wastewater from turkey equipment
- Flow property / unit: Mass / kg
- Amount rule: measured mass for this named exchange from calibrated scale, tank, issue, transfer, dispatch, laboratory, or waste records for the represented batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater screenings (`wastewater_screenings_output`)

This waste output records only Screenings from turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Screenings from turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### DAF sludge (`wastewater_daf_sludge_output`)

This waste output records only Dissolved-air-flotation sludge from turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Dissolved-air-flotation sludge from turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biological sludge (`wastewater_biological_sludge_output`)

This waste output records only Biological sludge from turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Biological sludge from turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater grease (`wastewater_grease_output`)

This waste output records only Recovered grease from turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Recovered grease from turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity for this named waste, retaining its treatment destination and batch identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Treated water discharge (`treated_effluent_water_output`)

This elementary output records only Water, to surface water from turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Water, to surface water from turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass for this named output from calibrated scales, containers, transfer records, or the batch material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### BOD5 discharge (`treated_effluent_bod5_output`)

This elementary output records only Biochemical oxygen demand BOD5, to surface water at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Biochemical oxygen demand BOD5, to surface water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched treated-effluent flow and laboratory concentration for this named pollutant over the same sampling period, with explicit unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### COD discharge (`treated_effluent_cod_output`)

This elementary output records only Chemical oxygen demand COD, to surface water at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chemical oxygen demand COD, to surface water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched treated-effluent flow and laboratory concentration for this named pollutant over the same sampling period, with explicit unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### TSS discharge (`treated_effluent_tss_output`)

This elementary output records only Total suspended solids, to surface water at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Total suspended solids, to surface water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched treated-effluent flow and laboratory concentration for this named pollutant over the same sampling period, with explicit unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Total nitrogen discharge (`treated_effluent_total_nitrogen_output`)

This elementary output records only Nitrogen, total, to surface water at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Nitrogen, total, to surface water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched treated-effluent flow and laboratory concentration for this named pollutant over the same sampling period, with explicit unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Total phosphorus discharge (`treated_effluent_total_phosphorus_output`)

This elementary output records only Phosphorus, total, to surface water at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Phosphorus, total, to surface water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched treated-effluent flow and laboratory concentration for this named pollutant over the same sampling period, with explicit unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chloride discharge (`treated_effluent_chloride_output`)

This elementary output records only Chloride, to surface water at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Chloride, to surface water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched treated-effluent flow and laboratory concentration for this named pollutant over the same sampling period, with explicit unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Ammonium discharge (`treated_effluent_ammonium_output`)

This elementary output records only Ammonium, to surface water at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Ammonium, to surface water
- Flow property / unit: Mass / kg
- Amount rule: calculated from matched treated-effluent flow and laboratory concentration for this named pollutant over the same sampling period, with explicit unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater methane (`wastewater_methane_to_air_output`)

This elementary output records only Methane, biogenic, to air from turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Methane, biogenic, to air from turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater biogenic carbon dioxide (`wastewater_biogenic_co2_to_air_output`)

This elementary output records only Carbon dioxide, biogenic, to air from turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Carbon dioxide, biogenic, to air from turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater nitrous oxide (`wastewater_nitrous_oxide_to_air_output`)

This elementary output records only Dinitrogen monoxide, to air from turkey wastewater treatment at the on-site wastewater treatment boundary. Its amount is obtained from the stated foreground rule for this named exchange.

- Selected flow: Dinitrogen monoxide, to air from turkey wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: calculated separately for this named elementary substance from collected fuel, gas, or process records and a documented applicable factor or mass balance; no BREF performance value is used as an inventory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled turkey meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Separately measurable operations and outputs | Avoid allocation by subdividing processes and assigning directly measured materials, utilities, chemicals, refrigeration, and treatment records to the operation and product that caused them whenever records support subdivision. | `eu-pef-2021-2279` |
| `allocation_named_co_products` | Blood, feathers, heads, feet, livers, hearts, gizzards, necks, fat, skin, bones, and meat trimmings | Record each named output's mass, composition, legal or commercial status, and destination before allocation. When subdivision is not feasible, use a documented physical relationship that reflects causality; any other relationship requires rationale, sensitivity analysis, and manual review. | `eu-pef-2021-2279`; `ec-jrc-sa-bref-jrc135916` |
| `allocation_waste_status` | Condemned material and animal by-products | Do not relabel a recovered co-product as waste or a waste as a co-product to alter burdens. Record treatment burdens and any downstream credit according to the declared legal status and destination. | `eu-pef-2021-2279`; `ec-jrc-sa-bref-jrc135916` |
| `allocation_shared_utilities` | Shared electricity, steam, hot water, fuels, refrigeration, cleaning, and cold storage | Allocate shared services using contemporaneous submetering or a documented causal driver such as operating time, equipment demand, throughput, refrigeration load, or sanitation cycle. Product mass alone is allowed only when its causal adequacy is demonstrated. | `eu-pef-2021-2279`; `ec-jrc-sa-bref-jrc135916` |
| `allocation_wastewater_treatment` | Shared on-site wastewater treatment | Allocate treatment inputs, residues, and emissions using measured wastewater volume and pollutant load for each represented stream when available; disclose the selected driver and sensitivity. | `eu-pef-2021-2279`; `ec-jrc-sa-bref-jrc135916` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_turkey_receipt` | `turkey_receipt_and_lairage` | Live turkeys, water, electricity, accepted birds, mortalities, manure, and lairage wastewater | Weighbridge, flock, meter, mortality, manure, cleaning, and transfer records | supplier; flock id; delivery id; receipt time; live weight; bird count retained as context; accepted weight; dead-on-arrival mass; water; electricity; manure; wastewater; destination; calibration id | Link each delivery and flock record to calibrated incoming weight and the represented slaughter batch | kg; kWh | Each delivery and slaughter batch | Complete represented slaughter period | Each receipt point and lairage area serving the product | Aggregate only compatible flocks and keep every named exchange separate; normalize after batch reconciliation | Weighbridge calibration, delivery ticket, flock record, mortality record, meter record, waste ticket, and signed reconciliation |
| `cp_slaughter_operations` | `slaughter_bleeding_defeathering_evisceration` | Accepted birds, process inputs, carcasses, each co-product, each waste, wastewater, and air emission | Slaughter line, scale, meter, fuel, gas, inspection, container, wastewater, and stack records | accepted live weight; water; electricity; steam; hot water; each fuel; stunning gas; eviscerated carcass; each named co-product; each named waste; wastewater; fuel factor; stack result; operating time; destination | Collect atomic line records on one batch or campaign boundary and reconcile the live-bird material balance | kg; kWh; MJ | Each slaughter batch or campaign, with utility-period reconciliation | Complete represented slaughter period | Each slaughter line, utility system, and discharge point | Sum only identical exchanges; allocate shared utilities with documented causal drivers and retain per-fuel calculations | Calibration, batch sheet, inspection record, meter, invoice, gas record, stack record, factor source, waste ticket, and mass-balance approval |
| `cp_carcass_dressing` | `carcass_dressing` | Eviscerated carcass, water, electricity, dressed carcass, neck, fat, skin, condemned meat, and wastewater | Line scale, water meter, electricity meter, inspection, transfer, waste, and discharge records | eviscerated mass; water; electricity; dressed mass; neck; fat; skin; condemned meat; wastewater; opening hold-up; closing hold-up; calibration id | Measure and reconcile each named exchange for the same dressing batch | kg; kWh | Each batch or campaign | Complete represented production period | Each dressing line | Sum identical product forms only and normalize reconciled totals to reference product | Scale and meter calibration, inspection log, transfer record, waste ticket, discharge record, and reconciliation |
| `cp_chilling_refrigeration` | `chilling_and_cold_storage` | Carcass, water, ice, electricity, each refrigerant, wastewater, compressor oil, and chilled output | Chiller, cold-store, water, ice, electricity, temperature, refrigerant service, oil, and discharge records | carcass mass; water; ice; electricity; product temperature; storage time; refrigerant identity; opening charge; make-up; recovery; closing charge; transfer; wastewater; compressor oil; calibration id | Match product, water, energy, temperature, and circuit-level refrigerant records for the represented batch and period | kg; kWh | Each batch plus each refrigerant service event; monthly utility reconciliation | Complete represented chilling and storage period | Each chiller, cold room, and refrigeration circuit | Keep each refrigerant identity separate; aggregate only compatible product states and normalize to reference product | Meter and sensor calibration, temperature log, service record, purchase record, recovery record, oil ticket, and refrigerant balance |
| `cp_cutting_portioning` | `cutting_and_portioning` | Chilled carcass, water, electricity, each meat cut, each co-product, condemned meat, and wastewater | Cutting line, scale, meter, specification, inspection, transfer, waste, and discharge records | chilled carcass input; water; electricity; breast; thigh; drumstick; wing; trimming; fat; bone; skin; condemned meat; wastewater; opening hold-up; closing hold-up | Reconcile each named cut and residual stream to the same cutting batch | kg; kWh | Each cutting batch or campaign | Complete represented cutting period | Each cutting line and product specification | Do not aggregate different cuts or bone and skin states; normalize compatible reconciled batches only | Scale and meter calibration, cutting specification, batch sheet, inspection record, transfer record, waste ticket, and reconciliation |
| `cp_packaging_release` | `packaging_and_release` | Each product form, electricity, each packaging component, each packaging gas, reference product, packaging waste, and gas purge | Packaging BOM, issue, return, filler, gas, meter, scale, waste, and dispatch records | product form; bulk input; electricity; component identity; component count; component mass; issued; returned; unused; gas identity; gas use; purge; net released product; off-spec product; packaging waste; batch id | Reconcile product, every packaging component, packaging gases, and net dispatch mass for the same batch | kg; kWh; item count retained before conversion | Each packaging batch or bulk dispatch | Complete represented release period | Each packaging line and bulk release point | Convert counts with measured component masses; keep every material and gas separate; exclude packaging from reference mass | Approved BOM, scale and meter calibration, issue and return records, gas record, waste ticket, and dispatch record |
| `cp_cleaning_disinfection` | `cleaning_and_disinfection` | Water, electricity, steam, hot water, each fuel, each chemical, each sanitation wastewater, floor sweepings, and combustion emission | Cleaning controller, water, energy, fuel, dosing, chemical issue, wastewater, sweepings, and stack records | cycle id; equipment circuit; water; electricity; steam; hot water; each fuel; chemical identity; concentration; dose; reuse; wastewater identity; wastewater mass; sweepings; fuel factor; stack result; destination | Capture cycle-level atomic inputs and outputs and allocate only cycles attributable to represented equipment and period | kg; kWh; MJ | Each sanitation cycle or discharge event, with utility-period reconciliation | Same period as represented slaughter production | Each sanitation circuit, utility system, and discharge point | Keep carriers, fuels, chemicals, wastewaters, and emissions separate; normalize attributable cycles only | Controller export, meter calibration, fuel invoice, dosing record, chemical register, discharge log, stack record, waste ticket, and allocation worksheet |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | Each wastewater input, treatment input, residue, treated water, water pollutant, and treatment air emission | Influent, dosing, energy, flow, laboratory, sludge, grease, stack or gas, and discharge records | wastewater identity; influent volume; electricity; water; each chemical; dose; treated flow; BOD5; COD; TSS; total nitrogen; total phosphorus; chloride; ammonium; screenings; DAF sludge; biological sludge; grease; methane; biogenic carbon dioxide; nitrous oxide; sampling time | Match each flow and laboratory result to the same treatment and sampling period, with explicit unit conversion | kg; kWh; concentration units retained before conversion | Each treatment batch, discharge, sampling, or monitoring event | Complete represented treatment period | Each on-site treatment train and discharge point | Keep each influent, chemical, residue, pollutant, and air emission separate; allocate by measured volume and load | Flow-meter calibration, dosing record, laboratory report, chain of custody, sludge ticket, gas record, discharge permit record, and allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | normalized amount = reconciled exchange amount / net kg conforming fresh or chilled turkey meat released at the facility gate | reconciled atomic exchange; net reference-product mass excluding packaging | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_live_bird_mass_balance` | Receipt and slaughter | residual = accepted live weight - eviscerated carcass - each named co-product - each named waste - measured process loss adjusted for documented stock or hold-up; investigate rather than assigning residual to an invented flow | accepted live weight; carcass; blood; feathers; organs; contents; condemned carcass; hold-up | reconciled live-bird balance and disclosed residual | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_cutting_mass_balance` | Dressing, chilling, cutting, and packaging | residual = incoming carcass or meat mass - each named product - each named co-product - each named waste - closing hold-up plus opening hold-up; investigate material residuals | input mass; outputs; wastes; opening hold-up; closing hold-up | reconciled process balance | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_utility_allocation` | Shared electricity, steam, hot water, natural gas, diesel, and LPG | allocated carrier = measured total for one carrier × documented causal-driver share; calculate each carrier separately | one carrier total; operating time; equipment demand; throughput; sanitation cycle; refrigeration load | allocated kWh or MJ for one carrier | `eu-pef-2021-2279`; `ec-jrc-sa-bref-jrc135916` |
| `calc_combustion_emission` | Each direct combustion pollutant | pollutant mass = sum over fuels of collected fuel quantity × documented applicable factor for the same fuel, pollutant, technology, and period; preserve each fuel calculation before summing one elementary flow | fuel quantities; pollutant-specific factors; technology; validity period | kg of one named air pollutant | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_refrigerant_balance` | Each refrigeration circuit and refrigerant | emitted mass = opening charge + make-up - recovery - closing charge - documented transfers; calculate each refrigerant and carbon origin separately | refrigerant identity; carbon origin where relevant; opening charge; make-up; recovery; closing charge; transfers | kg of one named refrigerant emitted to air | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_packaging_mass` | Each packaging component | component mass = issued count × measured mass per component - returned unused component mass; preserve specification and conversion evidence | component identity; issued count; measured component mass; returns | kg of one packaging component used or wasted | `eu-pef-2021-2279` |
| `calc_wastewater_pollutant_load` | Each treated-effluent pollutant | pollutant mass = matched treated-effluent volume × laboratory concentration for the same sampling period, with explicit unit conversion | treated flow; one pollutant concentration; sampling period; conversion factor | kg of one pollutant to surface water | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_wastewater_air_emission` | Each wastewater-treatment air emission | calculate or measure one gas separately from matched treatment activity, monitored gas data, or a documented applicable factor; preserve factor identity and period | treatment activity; gas measurement or factor; factor source; validity period | kg of one gas to air | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Demonstrate exact CPC 21124 fresh or chilled turkey-meat identity. Frozen turkey meat and edible turkey offal shall not use the reference UUID. | Product specification, label, dispatch record, temperature record, CPC source, and classification review |
| `dq_temporal_alignment` | All foreground records | Use one disclosed representative period and align material, energy, refrigerant, packaging, sanitation, and wastewater records to the represented production. | Batch genealogy, production calendar, meter periods, laboratory periods, and exclusion log |
| `dq_measurement` | Measured and calculated amounts | Identify instruments, calibration, units, conversions, factors, and calculation lineage; retain unrounded raw values. | Calibration evidence, controller exports, batch sheets, factor references, laboratory reports, and calculation workbook |
| `dq_atomic_flow_identity` | Every inventory card | Each card shall identify one material, carrier, fuel, refrigerant, chemical, packaging component, product, co-product, waste, wastewater, or elementary emission. Add a new concrete card for an actual unlisted exchange; never use a collection or selector. | Atomic inventory review, process diagram, material register, utility map, refrigerant register, chemical register, packaging BOM, waste register, and emission register |
| `dq_mass_balance` | Live-bird, carcass, cutting, and packaging processes | Reconcile named inputs and outputs on common batch boundaries and investigate residuals without creating an unverified balancing flow. | Signed batch balances, hold-up records, product records, co-product records, and waste tickets |
| `dq_temperature_state` | Chilling, cold storage, and reference product | Demonstrate that the represented product stayed within its declared fresh or chilled state and did not become frozen. | Calibrated temperature logs, storage records, deviations, and release approval |
| `dq_co_product_waste_status` | Animal parts and recovered materials | Retain mass, composition, destination, legal status, and economic or functional role for each named output before allocation. | Inspection record, sales or transfer record, waste classification, treatment ticket, and allocation review |
| `dq_refrigerant_identity` | Refrigeration circuits | Record the actual refrigerant chemical identity and carbon origin where relevant. Add separate make-up and emission cards for any actual refrigerant not already represented. | Equipment register, service record, refrigerant cylinder identity, recovery record, and circuit balance |
| `dq_effluent_quality` | On-site wastewater treatment | Match flow and pollutant measurements to the same period and discharge point; preserve detection limits, sampling method, and unit conversions. | Chain of custody, laboratory accreditation or QA record, flow calibration, discharge log, and calculation |
| `dq_uuid_resolution` | Tiangong identities | Store only exact public state100 UUIDs confirmed by both hybrid search and direct read. Leave every unverified UUID blank and retain one row-level manifest review. | Dual-verification evidence for populated UUIDs and manifest closure for blank UUIDs |
| `dq_no_unsubstantiated_values` | Quantitative inventory | Use foreground records or transparent calculations. Do not use the SA BREF or PEF documents as sources of default quantities, factors, or ranges unless an exact cited rule supports that use. | Raw records, calculation lineage, factor source, source review, and absence of unsupported ranges |
| `dq_representativeness` | Linked upstream and treatment datasets | Assess geography, technology, time, product state, and material identity; disclose proxies and their expected influence. | Dataset metadata, selection rationale, data-quality assessment, and sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_identity` | Product classification | Fail conformance when the reference product is not exact CPC 21124 turkey meat in the fresh or chilled state, is frozen turkey meat, is edible turkey offal, or is meat of another species. | `unsd-cpc-3-21124` |
| `validate_reference_uuid` | Reference product | Require product flow `653bdb6e-5456-4a7d-88d3-8493b1f27bc7`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. | `unsd-cpc-3-21124` |
| `validate_reference_net_mass` | Reference amount | Require exactly 1 kg net conforming product and exclude every packaging component from the reference mass. | `eu-pef-2021-2279` |
| `validate_required_qualifiers` | Reference-flow metadata | Fail completeness when product form, bone state, skin state, preservation state, dispatch temperature, packaging format, production route, batch, or no-freezing evidence is missing. | `unsd-cpc-3-21124`; `eu-pef-2021-2279` |
| `validate_process_boundary` | Foreground process map | Require every applicable receipt, slaughter, dressing, chilling, cutting, packaging, sanitation, and wastewater operation and explain each conditional process marked not applicable. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_atomic_inventory` | Every inventory card | Reject Selected flow values that are collections, selectors, alternatives, placeholders, or combined exchanges. Require each actual carrier, material, refrigerant, chemical, packaging component, product, co-product, waste, wastewater, and elementary emission to have its own card. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_uuid_review_closure` | Inventory identity | Require exactly one manifest unresolved review for each blank UUID and no unresolved review for the verified reference row. Reject any populated UUID without exact hybrid and public state100 direct-read confirmation. | `eu-pef-2021-2279` |
| `validate_mass_balance` | Receipt, slaughter, dressing, chilling, cutting, and packaging | Require reconciled mass balances on common periods and investigation of residuals; do not force a residual into an invented product or waste flow. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_co_product_allocation` | Multi-output operations | Require direct assignment or subdivision where feasible; otherwise require a documented causal allocation method, all inputs and outputs, rationale, and sensitivity. | `eu-pef-2021-2279` |
| `validate_temperature_state` | Chilled product | Reject a dataset that lacks product-temperature evidence or that represents frozen turkey meat with the fresh-or-chilled reference flow. | `unsd-cpc-3-21124`; `ec-jrc-sa-bref-jrc135916` |
| `validate_wastewater_emissions` | On-site wastewater treatment | Require matched flow and monitoring records for every reported pollutant and treatment air emission; prohibit use of BAT-associated levels as measured facility emissions. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_no_unsupported_estimate` | Inventory amounts and ranges | Reject any author-derived provisional estimate or unsupported numeric range in this PCR; all non-reference amounts require foreground records or calculations from those records. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate slaughterhouse production dataset for one declared CPC 21124 fresh or chilled turkey-meat product and route |
| downstream_use | `secondary_dataset` or `background_dataset` in a process or lifecyclemodel when scope, geography, technology, time, and product state are compatible |
| allowed_use | Product-specific modelling of whole carcasses or named turkey-meat cuts at the facility gate with the declared fresh or chilled state and complete atomic foreground records |
| excluded_use | Frozen turkey meat; edible turkey offal as the reference product; meat of other species; inclusion of packaging mass in the reference amount; unsupported default values or ranges; collection or selector exchanges; unsupported comparative claims |
| required_metadata | canonical PCR id; CPC coordinate; exact reference UUID; required qualifiers; facility geography; supplier and flock context; process diagram; slaughter, chilling, cutting, packaging, sanitation, and wastewater routes; production period; net product mass; co-product status; allocation; upstream datasets; treatment destinations; data-quality assessment |
| required_quality_disclosure | Data coverage and gaps; measurement and calibration evidence; live-bird and product mass balances; temperature evidence; utility, fuel, refrigerant, chemical, packaging, waste, wastewater, and emission records; proxies; allocation sensitivity; conditional-operation decisions; unresolved UUID reviews |
| update_trigger | Product classification, form, preservation state, slaughter or stunning technology, chilling or refrigeration system, cutting route, packaging, fuel system, sanitation chemistry, wastewater route, co-product status, allocation, or source method changes materially; an unresolved flow gains an exact public state100 identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21124` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21124, “Meat of turkeys, fresh or chilled”, official structure CSV dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retained as `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` with SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | Exact CPC 21124 identity and the fresh-or-chilled boundary; frozen turkey meat and edible turkey offal are excluded from this reference category |
| `ec-jrc-sa-bref-jrc135916` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, report JRC135916, DOI 10.2760/18199, https://doi.org/10.2760/18199 | Process decomposition for receiving, slaughter, bleeding, defeathering, evisceration, dressing, chilling, cutting, cleaning, utilities, wastewater, named animal by-products, wastes, and emissions; no performance value is copied as a default inventory quantity |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/oj | Reference flow, company-specific foreground data, complete LCI, allocation, transparency, data quality, and validation rules |
