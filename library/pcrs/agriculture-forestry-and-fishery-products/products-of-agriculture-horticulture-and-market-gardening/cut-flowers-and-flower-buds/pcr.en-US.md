---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh, undyed cut flowers and flower buds

## 1. Scope and Applicability

This PCR applies to fresh cut flowers and flower buds supplied as individual stems or incorporated into bouquets, wreaths, floral baskets, and similar decorative articles. It covers open-field and protected cultivation, annual and perennial production, harvested flower preparation, conditioning, grading, cooling, bunching or article assembly, packaging, and dispatch. Conforming datasets cover distribution, storage, auction or trade, retail, consumer use and end-of-life as well, with compatible linked datasets permitted to supply stages outside the directly measured foreground.

The PCR does not cover living potted plants, bulbs or other planting material sold for cultivation, flower seed, dried or artificially preserved flowers, artificial flowers, extracted fragrances, edible flowers sold as food, or dyeing and other transformation that materially changes the cut flower after normal post-harvest conditioning. A bouquet or other article remains in scope only when cut flowers or flower buds provide its principal function; non-floral accessories and containers are recorded as separate inputs.

Species, cultivar, grade, stem length, cultivation system, production geography, harvest season, post-harvest treatment, packaging configuration, cold-chain condition, expected decorative life, and article composition can materially change inventory results. These facts shall be declared for every conforming foreground data package.


This is an independent TianGong candidate methodology using dated technical evidence. It does not certify current FloriPEFCR conformity or renew an external scheme. Classification lookup must retain the fresh, undyed scope; dried, dyed, bleached and preserved flower routes are not covered.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds |
| classification_refs | CPC 3.0: 01962, narrower relation: fresh, undyed cut flowers only |
| covered_products | Fresh cut flowers and flower buds; individual stems; bouquets; wreaths; floral baskets; similar decorative articles whose principal function is supplied by cut flowers or flower buds |
| excluded_products | Living potted plants; bulbs, cuttings, and planting stock; flower seed; dried or preserved flowers; artificial flowers; fragrances and extracts; edible flowers sold as food; separately modelled dyeing or other material transformation |
| representative_product | One consumer-ready fresh cut-flower stem supplied for decoration |
| production_route | Starting material and cultivation in open field or protected systems; harvest; post-harvest handling and conditioning; packaging and dispatch; downstream distribution, decorative use and end-of-life in the required complete system |
| market_state | Fresh, graded, conditioned, and saleable stem or declared multi-stem decorative article |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide decoration with a fresh cut-flower stem |
| How much | One stem, as purchased by the consumer |
| How well | Meets the declared producer or retailer specification for species or cultivar, grade, stem length, appearance, freshness, and packaging |
| How long or cycle | Expected decorative or vase life declared for the specific product and storage method |
| reference_flow_link | delivered_stem |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh cut-flower stem, consumer-ready at purchase |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | botanical species and cultivar; product form and article stem count; grade and stem length; open-field or protected cultivation; substrate or soil system; production geography; harvest period; post-harvest treatment; packaging configuration; cold-chain condition; expected decorative or vase life; included life-cycle stages |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete. The Tiangong reference product flow UUID shall remain unresolved rather than using the narrower `Dye Flower` flow; a semantically matching public product flow is required before activation or publication.


Only the completed cradle-to-grave system claims conformance with this PCR and its one purchased-stem reference. Node records retain actual native activity, node output and stocks without claiming standalone conformance or changing the reference. If final purchased-stem counts or downstream scenarios are unknown, retain raw contributions unnormalised; do not invent a denominator. Once complete linked coverage and matched ledgers exist, attribute each raw contribution and divide by final purchased stems exactly once. Intermediate stem outputs are measured or loss-adjusted transfers; only delivered_stem is fixed at one Item(s). A standalone farm-gate or other short-boundary product needs separately applicable guidance for its own reference; it cannot relabel that output as delivered_stem. Article-level impact divided by stem count is a declared inventory intensity, not proof that unlike bouquets, species or decorative lives are functionally equivalent.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | Reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Report the quantitative reference as exactly one consumer-ready flower stem. |
| `article_stem_conversion` | Bouquets, wreaths, floral baskets, and similar articles | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Record the measured count of qualifying flower stems in the article; divide article-level inputs and losses by the number of consumer-ready stems while retaining the article configuration as a qualifier. |
| `mass_per_stem_measurement` | Materials, products, and wastes recorded by mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate mass per declared stem for every mass-based row; do not substitute a generic stem mass when product-specific measurements are available. |
| `nutrient_basis` | Fertilisers and nutrient emissions | Mass of product and nutrient-specific mass | kg product; kg N; kg P; kg K | Preserve fertiliser product mass and calculate nutrient mass from documented composition; never treat formulated fertiliser mass as nutrient mass. |
| `active_ingredient_basis` | Plant-protection products | Mass | kg active ingredient | Collect formulated product and active-ingredient concentration, then report active-ingredient mass separately from formulated-product mass. |
| `energy_conversion` | Electricity and fuels | Energy | kWh; MJ | Preserve metered units and declared conversion factors; do not combine electricity and fuel energy without retaining carrier and technology identity. |
| `water_source_separation` | Irrigation, washing, conditioning, and transport water | Volume | m3 | Record water by source and use; report recirculated water and make-up water separately to prevent double counting. |


Use final purchased stem counts as the common denominator only after linked period, lot, stock and loss reconciliation. Keep raw stage quantities and their local output counts; scale a stage intensity by the stems required at that stage per purchased stem exactly once. Count zero-output establishment phases in perennial burden attribution. Source-specific freshwater withdrawal is an elementary input; purchased water is a product input. Internal circulation is not another external input. Density, mass per stem and transport volume are measured collection requirements, never assumed constants.

## 5. System Boundary

The conformance boundary is cradle-to-grave. Directly measured records may cover only selected nodes, but conformance requires all remaining stages to be supplied by compatible linked datasets/scenarios before final-reference normalisation. A short-boundary contribution is not a complete PCR-conforming product dataset.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or internally produced seed, cutting, young plant, bulb, rootstock, or other propagation material entering the declared cut-flower production system |
| starting_condition_role | Upstream product input to the first foreground cultivation process |
| product_classification_scope | Fresh cut flowers and flower buds and the flower-stem content of in-scope decorative articles |
| recursive_input_rule | An input already representing an in-scope consumer-ready cut flower shall be recorded as an upstream product flow and shall not be expanded again inside the receiving foreground process. |
| upstream_dataset_requirement | Use a separately documented upstream dataset for purchased propagation material, externally cultivated stems, packaging, energy, fertiliser, plant-protection products, transport, and waste treatment; disclose proxy use and data quality. |
| disclosure | Declare starting-material type and origin, cultivation system, land and infrastructure treatment, included post-harvest operations, distribution route, article assembly, losses, and the exact terminal boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | Product system | Conformance requires the complete cradle-to-grave system for one purchased fresh undyed stem, including propagation, cultivation, post-harvest, packing, distribution/retail, declared decorative use and material-specific end-of-life. A stage may be covered by a compatible linked dataset with an explicit coverage register instead of duplicate foreground expansion; it cannot be omitted from the completed system. Raw node records are contributions, not independently conforming PCR datasets. | count-mass-water-balance |
| `boundary_cultivation_inputs` | Cultivation | Include propagation material, growing media, greenhouse or protected-cultivation infrastructure when used, irrigation water, fertilisers, plant-protection products, biological-control disclosure, CO2 enrichment, energy, fuels, field operations, direct emissions, land occupation, and land-use change where relevant. | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `boundary_post_harvest` | Harvest to dispatch | Include harvesting, grading, trimming, washing or hydration, conditioning chemicals, phytosanitary treatment, cooling, cold storage, bunching or article assembly, packaging, on-site handling, product losses, wastewater, and wastes. | wur-floripefcr-2024 |
| `boundary_capital_goods` | Protected cultivation | Include greenhouse structures and cultivation-specific infrastructure through documented bill of materials, service life, occupied area, and production over that life; disclose any excluded capital goods. | wur-floripefcr-2024 |
| `boundary_cutoff_disclosure` | All stages | Do not omit a known material, energy, transport, waste, or direct-emission flow merely because it lacks data. Record it as unresolved, use a disclosed proxy, or justify exclusion against the applied study rule. | ec-pef-method-2021; wur-floripefcr-2024 |


A complete reference system includes distribution/retail, the declared decorative-use scenario and all material-specific disposal routes. An upstream-only foreground dataset remains an intermediate contribution. Missing downstream loss, use or disposal evidence must be collected or represented by an explicit supported scenario; it is not zero. Keep all technical, geographic and temporal scenario choices in the dataset. Land occupation is measured area multiplied by attributable time, with land type; land transformation and carbon-stock change are separate evidence-dependent ledgers, not inferred from occupation.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_water_ownership` | Water supply and abstraction | Purchased water links provider abstraction/supply once; supplier withdrawal is not an extra foreground elementary input. Foreground-owned direct abstraction is a source-specific elementary input with local supply activity, and its internal delivered-water transfer cancels within the aggregate boundary. Keep source/delivery meters and losses separate; do not add a second external water purchase for an internal delivery. | count-mass-water-balance |
| `boundary_luc_method` | Land transformation and carbon stocks | Use GHG Product Standard 2011 Appendix B for attributable direct land-use-change impacts. Keep occupation, establishment assets and LUC separate. Screen human-induced product-related conversions over the preceding H = max(20 years, one harvest period); plant service life is not automatically the harvest period. Use dated parcel history and the carbon pools before/after conversion, including biomass, dead organic matter and soil. A documented unchanged history can establish non-applicability; missing history cannot. Unknown parcel history requires a geographically and crop-compatible published land-history/LUC scenario under the same method, with proxy disclosure and uncertainty, or the LUC inventory remains incomplete. | ghg-product-standard-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cultivation` | Starting material, cultivation, and harvest | required | Required coverage; foreground or compatible linked supply, no standalone node conformance | Separate stem and material ledger | Measured node activity attributable to one purchased stem |
| `post_harvest` | Post-harvest preparation and conditioning | required | Required coverage; foreground or compatible linked supply, no standalone node conformance | Separate stem and material ledger | Measured node activity attributable to one purchased stem |
| `packaging_dispatch` | Packaging and dispatch | required | Required coverage; foreground or compatible linked supply, no standalone node conformance | Separate stem and material ledger | Measured node activity attributable to one purchased stem |
| `distribution_retail` | Distribution, storage, and retail | required | Required coverage; foreground or compatible linked supply, no standalone node conformance | Separate stem and material ledger | Measured node activity attributable to one purchased stem |
| `consumer_use` | Declared decorative use | required | Required coverage; foreground or compatible linked supply, no standalone node conformance | Separate stem and material ledger | Measured node activity attributable to one purchased stem |
| `end_of_life` | Material-specific end-of-life routing | required | Required coverage; foreground or compatible linked supply, no standalone node conformance | Separate stem and material ledger | Measured node activity attributable to one purchased stem |

Each specific input or service below applies only when actually used; missing records do not prove non-applicability. Create separate cards for every other actual formulation, carrier, material and emission required by section 8; examples are not recipes. Preserve physical transfers and burdens, attribute them, then normalize once to the same final reference quantity.

Apply validate_inventory_card_controls to every card below. Retain the explicit flow, unit, protocol and amount metadata at each exchange position; repeated identities do not collapse separate meters, hand-offs or treatment routes. Use calc_stem_normalization for the common final-reference conversion and the linked row-specific methods for native quantities.

### Process: Starting material, cultivation, and harvest (`cultivation`)

#### Inputs

##### Product flows

###### Supplied cultivation water (`cultivation_water`)

Record supplied cultivation water at its delivery meter; apply boundary_water_ownership to distinguish purchase from internal delivery after owned abstraction.

- Selected flow: Supplied cultivation water
- Flow property / unit: Volume / m3
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_records`
- Sources: `count-mass-water-balance`

###### Electricity at cultivation equipment supply (`cultivation_electricity`)

Record cultivation equipment electricity and its share of common utilities under cp_energy_fuel_records.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_fuel_records`
- Sources: `count-mass-water-balance`

###### Natural gas fuel supplied for on-site combustion (`cultivation_heat_fuel_natural_gas`)

Record actual natural-gas supply before on-site combustion; retain native volume conditions and keep fuel supply separate from direct combustion emissions.

- Selected flow: Natural gas fuel supplied for on-site combustion
- Flow property / unit: Volume / m3
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_fuel_records`
- Sources: `count-mass-water-balance`

###### Purchased heat delivered at the greenhouse connection (`cultivation_purchased_heat`)

Record purchased heat at the greenhouse connection; distinguish its provider coverage from on-site fuel use.

- Selected flow: Purchased heat delivered at the greenhouse connection
- Flow property / unit: Energy / MJ
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_fuel_records`
- Sources: `count-mass-water-balance`

###### Carbon dioxide supplied for greenhouse enrichment (`cultivation_enrichment_co2`)

Record delivered enrichment CO2 mass and origin; reconcile its supply, retention and release ledger.

- Selected flow: Carbon dioxide supplied for greenhouse enrichment
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cultivation_materials`
- Sources: `count-mass-water-balance`

##### Waste flows

##### Elementary flows

###### Natural freshwater withdrawn from the declared source (`cultivation_water_withdrawal`)

Record only foreground-owned abstraction from the actual natural source; reconcile it with delivery and storage under boundary_water_ownership.

- Selected flow: Natural freshwater withdrawn from the declared source
- Flow property / unit: Volume / m3
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_records`
- Sources: `count-mass-water-balance`

###### Atmospheric carbon dioxide uptake attributed to eligible land-use stock gain (`cultivation_luc_co2_uptake`)

Apply calc_luc_attribution only to evidenced eligible atmospheric uptake from land-use stock gain; exclude imported carbon and already covered transfers.

- Selected flow: Carbon dioxide (land use change) `b3d7c693-6465-4aec-86cb-68b4e457fc98`
- Flow property / unit: Mass / kg
- Amount rule: Use the separately evidenced signed carbon-stock ledger, event attribution period, beneficiary share and matched final purchased-stem denominator; record this direction only for its documented eligible quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_luc_history`
- Sources: `ghg-product-standard-2011`; `count-mass-water-balance`

###### Occupation of the declared cultivation land type (`cultivation_land_occupation`)

Record actual cultivation land class and occupied area multiplied by attributable time; keep occupation separate from infrastructure and land transformation.

- Selected flow: Occupation of the declared cultivation land type
- Flow property / unit: Area-time / m2*a
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cultivation_materials`
- Sources: `count-mass-water-balance`

#### Outputs

##### Product flows

###### Harvested fresh cut-flower stems of the declared lot (`harvested_stems`)

Record harvested stem dispatch by lot and stock ledger; reconcile the same hand-off with post_harvest_stem_input.

- Selected flow: Harvested fresh cut-flower stems of the declared lot
- Flow property / unit: Number of items / Item(s)
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output_loss_records`
- Sources: `count-mass-water-balance`

##### Waste flows

###### Discarded cultivation plant biomass sent to the declared treatment (`cultivation_biomass_waste`)

Record removed cultivation biomass mass, moisture and actual destination; distinguish evidenced waste removal from unexplained stock residuals.

- Selected flow: Discarded cultivation plant biomass sent to the declared treatment
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output_loss_records`
- Sources: `count-mass-water-balance`

##### Elementary flows

###### Nitrous oxide emitted to the declared air compartment (`cultivation_nitrous_oxide`)

Apply the declared nutrient-emission method and calc_species_mass on an N2O compound-mass basis, retaining the actual receiving air compartment.

- Selected flow: Nitrous oxide emitted to the declared air compartment
- Flow property / unit: Mass / kg N2O
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cultivation_emissions`
- Sources: `count-mass-water-balance`

###### Ammonia emitted to the declared air compartment (`cultivation_ammonia`)

Apply the declared nutrient-emission method and calc_species_mass on an NH3 compound-mass basis, retaining the actual receiving air compartment.

- Selected flow: Ammonia emitted to the declared air compartment
- Flow property / unit: Mass / kg NH3
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cultivation_emissions`
- Sources: `count-mass-water-balance`

###### Nitrate released to the declared receiving water compartment (`cultivation_nitrate`)

Record nitrate release on a NO3- mass basis to the actual receiving water; retain pathway ownership under cp_cultivation_emissions.

- Selected flow: Nitrate released to the declared receiving water compartment
- Flow property / unit: Mass / kg NO3-
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cultivation_emissions`
- Sources: `count-mass-water-balance`

###### Fossil carbon dioxide emitted to air (`cultivation_fossil_co2`)

Record direct fossil CO2 to its air compartment; keep it separate from purchased-energy CO2e and land-use-change CO2.

- Selected flow: Fossil carbon dioxide emitted to air
- Flow property / unit: Mass / kg CO2
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cultivation_emissions`
- Sources: `count-mass-water-balance`

###### Carbon dioxide to air attributed to land-use carbon-stock loss (`cultivation_luc_co2_release`)

Apply calc_luc_attribution to the evidenced positive carbon-stock release, retaining event/time attribution; do not present it as a measured annual vent flow.

- Selected flow: Carbon dioxide to air attributed to land-use carbon-stock loss
- Flow property / unit: Mass / kg
- Amount rule: Use the separately evidenced signed carbon-stock ledger, event attribution period, beneficiary share and matched final purchased-stem denominator; record this direction only for its documented eligible quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_luc_history`
- Sources: `ghg-product-standard-2011`; `count-mass-water-balance`

### Process: Post-harvest preparation and conditioning (`post_harvest`)

#### Inputs

##### Product flows

###### Harvested fresh cut-flower stems of the declared lot (`post_harvest_stem_input`)

Receive the same lot recorded by harvested_stems; reconcile received count and stocks before conditioning losses.

- Selected flow: Harvested fresh cut-flower stems of the declared lot
- Flow property / unit: Number of items / Item(s)
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output_loss_records`
- Sources: `count-mass-water-balance`

###### Supplied post-harvest process water (`post_harvest_water`)

Record water supplied for hydration, washing or conditioning at this node; reconcile material-carried water and wastewater under calc_water_components.

- Selected flow: Supplied post-harvest process water
- Flow property / unit: Volume / m3
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_harvest_records`
- Sources: `count-mass-water-balance`

###### Electricity at post-harvest equipment supply (`post_harvest_electricity`)

Record electricity attributable to post-harvest handling, cooling and storage under cp_post_harvest_records.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_harvest_records`
- Sources: `count-mass-water-balance`

###### R134a refrigerant supplied for equipment charging (`post_harvest_r134a`)

For actual R134a equipment, record charging and make-up product mass under calc_refrigerant_balance; represent other refrigerants separately.

- Selected flow: refrigerant, R134a (tetrafluoroethane) `210b4222-adda-4097-9e79-f2c9a6c172e4`
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_harvest_records`
- Sources: `count-mass-water-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable conditioned fresh cut-flower stems (`saleable_conditioned_stems`)

Record accepted conditioned-stem dispatch after rejects and stock changes; pair this hand-off with packaging_stem_input.

- Selected flow: Saleable conditioned fresh cut-flower stems
- Flow property / unit: Number of items / Item(s)
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output_loss_records`
- Sources: `count-mass-water-balance`

##### Waste flows

###### Discarded flower trimming and rejected plant biomass (`post_harvest_biomass_waste`)

Record trimming and rejected-flower mass, moisture and destination at post-harvest removal.

- Selected flow: Discarded flower trimming and rejected plant biomass
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output_loss_records`
- Sources: `count-mass-water-balance`

###### Post-harvest wastewater transferred to treatment (`post_harvest_wastewater`)

Record untreated post-harvest wastewater transferred to its receiving treatment system; distinguish it from direct environmental discharge.

- Selected flow: Post-harvest wastewater transferred to treatment
- Flow property / unit: Volume / m3
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_harvest_records`
- Sources: `count-mass-water-balance`

##### Elementary flows

###### R134a released to air (`post_harvest_refrigerant_emission`)

For actual R134a equipment, derive unrecovered air release from calc_refrigerant_balance; charging mass is not the emitted mass.

- Selected flow: R134a released to air
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_harvest_records`
- Sources: `count-mass-water-balance`

### Process: Packaging and dispatch (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Saleable conditioned fresh cut-flower stems (`packaging_stem_input`)

Receive the conditioned lot recorded by saleable_conditioned_stems; retain its count and article-assembly ledger.

- Selected flow: Saleable conditioned fresh cut-flower stems
- Flow property / unit: Number of items / Item(s)
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `count-mass-water-balance`

###### Corrugated fibreboard box (`packaging_corrugated_box`)

Record actual corrugated-box mass, composition and attributable uses; apply calc_reusable_packaging when reused.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `count-mass-water-balance`

###### Low-density polyethylene wrapping film (`packaging_ldpe_film`)

Record actual LDPE wrapping-film mass separately from other polymers and article accessories.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `count-mass-water-balance`

###### Electricity at packing and dispatch equipment supply (`packaging_dispatch_electricity`)

Record packing, assembly and dispatch electricity attributable to the declared lot.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `count-mass-water-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed fresh cut-flower stems at first dispatch (`consumer_ready_stem`)

Record packed stems at first dispatch, with article configuration and stock reconciliation; pair with distribution_stem_input.

- Selected flow: Packed fresh cut-flower stems at first dispatch
- Flow property / unit: Number of items / Item(s)
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output_loss_records`
- Sources: `count-mass-water-balance`

##### Waste flows

###### Waste corrugated fibreboard sent to the declared treatment (`packaging_corrugated_waste`)

Record corrugated packaging waste removed during packing by mass and actual destination, separate from packaging retained with the product.

- Selected flow: Waste corrugated fibreboard sent to the declared treatment
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `count-mass-water-balance`

###### Waste low-density polyethylene film sent to the declared treatment (`packaging_ldpe_waste`)

Record LDPE film waste removed during packing by mass and actual destination, separate from film retained with the product.

- Selected flow: Waste low-density polyethylene film sent to the declared treatment
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `count-mass-water-balance`

##### Elementary flows

### Process: Distribution, storage, and retail (`distribution_retail`)

#### Inputs

##### Product flows

###### Packed fresh cut-flower stems at first dispatch (`distribution_stem_input`)

Receive the packed lot recorded by consumer_ready_stem; retain storage stocks and subsequent retail losses.

- Selected flow: Packed fresh cut-flower stems at first dispatch
- Flow property / unit: Number of items / Item(s)
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_distribution_records`
- Sources: `count-mass-water-balance`

###### Road freight transport service (`distribution_road_transport`)

For actual road legs, apply calc_transport_work and allocation_transport_physical; retain physical consignment work and compatible allocated service separately.

- Selected flow: Freight Truck `d55f1329-cd61-44c0-8000-9367d38d5634`
- Flow property / unit: Transport work / tkm
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_distribution_records`
- Sources: `count-mass-water-balance`

###### Air freight transport service (`distribution_air_transport`)

For actual air legs, apply calc_transport_work and allocation_transport_physical with an air-freight provider of compatible boundary, payload and utilisation.

- Selected flow: Air freight transport service
- Flow property / unit: Transport work / tkm
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_distribution_records`
- Sources: `count-mass-water-balance`

###### Sea freight transport service (`distribution_sea_transport`)

For actual sea legs, apply calc_transport_work and allocation_transport_physical with a compatible ship/service class and coverage.

- Selected flow: Sea freight transport service
- Flow property / unit: Transport work / tkm
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_distribution_records`
- Sources: `count-mass-water-balance`

###### Electricity at storage and retail equipment supply (`distribution_electricity`)

Record distribution, storage and retail electricity attributable to the lot, with the declared storage allocation driver.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_distribution_records`
- Sources: `count-mass-water-balance`

###### R134a refrigerant supplied for equipment charging (`distribution_r134a`)

For actual distribution/retail R134a equipment, record charging and make-up under calc_refrigerant_balance; represent other refrigerants separately.

- Selected flow: refrigerant, R134a (tetrafluoroethane) `210b4222-adda-4097-9e79-f2c9a6c172e4`
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_distribution_records`
- Sources: `count-mass-water-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh cut-flower stem, consumer-ready at purchase (`delivered_stem`)

This is the unique consumer-purchase reference output: one Item(s). Reconcile its purchased lot with consumer_purchased_stem.

- Selected flow: Fresh cut-flower stem, consumer-ready at purchase
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `generic`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Sources: `count-mass-water-balance`

##### Waste flows

###### Discarded unsold or damaged fresh flower biomass (`distribution_retail_losses`)

Record removed unsold or damaged flower mass, moisture and destination; retain lost stem counts in the retail stock ledger.

- Selected flow: Discarded unsold or damaged fresh flower biomass
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_distribution_records`
- Sources: `count-mass-water-balance`

##### Elementary flows

###### R134a released to air (`distribution_refrigerant_emission`)

For actual distribution/retail R134a equipment, derive unrecovered release under calc_refrigerant_balance, separately from charging and provider-included leakage.

- Selected flow: R134a released to air
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_distribution_records`
- Sources: `count-mass-water-balance`

### Process: Declared decorative use (`consumer_use`)

#### Inputs

##### Product flows

###### Fresh cut-flower stem, consumer-ready at purchase (`consumer_purchased_stem`)

Receive the same purchased lot as delivered_stem; retain actual count, mass, moisture and stocks without adding the upstream product burden again.

- Selected flow: Fresh cut-flower stem, consumer-ready at purchase
- Flow property / unit: Number of items / Item(s)
- Amount rule: Collect actual count, mass, moisture and stock change for the same purchased lot under cp_consumer_use; reconcile the declared node-count and component-water balances, then divide by that lot's purchased stems. Use the same hand-off record at adjacent nodes without duplicating product burdens or waste treatment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumer_use`
- Sources: `count-mass-water-balance`

###### Supplied vase and flower-care water (`consumer_vase_water`)

Record supplied vase and care water for the declared decorative-life scenario; retain changes and water-balance ownership.

- Selected flow: Supplied vase and flower-care water
- Flow property / unit: Volume / m3
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumer_use`
- Sources: `count-mass-water-balance`

###### Electricity attributable to declared flower care (`consumer_electricity`)

Record only electricity attributable to actual declared flower care under cp_consumer_use; absence requires supported non-applicability.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumer_use`
- Sources: `count-mass-water-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Discarded flower biomass after decorative use sent to treatment (`consumer_discarded_flower`)

Record post-use flower removal by actual count, mass, moisture and destination; reconcile the same lot and end-of-life receipt.

- Selected flow: Discarded flower biomass after decorative use sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect actual count, mass, moisture and stock change for the same purchased lot under cp_consumer_use; reconcile the declared node-count and component-water balances, then divide by that lot's purchased stems. Use the same hand-off record at adjacent nodes without duplicating product burdens or waste treatment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumer_use`
- Sources: `count-mass-water-balance`

###### Vase and cleaning wastewater transferred to treatment (`consumer_wastewater`)

Record used vase and cleaning water transferred to its actual treatment system; do not subtract material-carried water twice.

- Selected flow: Vase and cleaning wastewater transferred to treatment
- Flow property / unit: Volume / m3
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumer_use`
- Sources: `count-mass-water-balance`

##### Elementary flows

### Process: Material-specific end-of-life routing (`end_of_life`)

#### Inputs

##### Product flows

###### Composting treatment service for flower biomass (`flower_composting_service`)

Use the evidenced composting fraction of flower biomass; treatment-service coverage and recovered-product quantities follow validate_end_of_life_materials.

- Selected flow: Composting treatment service for flower biomass
- Flow property / unit: Mass of waste treated / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `count-mass-water-balance`

###### Landfill treatment service for flower biomass (`flower_landfill_service`)

Use the evidenced landfill fraction of flower biomass; keep it separate from composting, incineration and the waste hand-off.

- Selected flow: Landfill treatment service for flower biomass
- Flow property / unit: Mass of waste treated / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `count-mass-water-balance`

###### Incineration treatment service for flower biomass (`flower_incineration_service`)

Use the evidenced incineration fraction of flower biomass; retain the provider boundary and any separately evidenced recovery function.

- Selected flow: Incineration treatment service for flower biomass
- Flow property / unit: Mass of waste treated / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `count-mass-water-balance`

##### Waste flows

###### Discarded flower biomass received for end-of-life routing (`discarded_flower_biomass`)

Reconcile received flower biomass with its removal nodes by origin, state, mass and moisture before assigning treatment shares.

- Selected flow: Discarded flower biomass received for end-of-life routing
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `count-mass-water-balance`

###### Discarded corrugated fibreboard received for end-of-life routing (`discarded_corrugated_board`)

Reconcile received corrugated board with packing waste and discarded product packaging by origin and mass; retain its own material-specific fate.

- Selected flow: Discarded corrugated fibreboard received for end-of-life routing
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `count-mass-water-balance`

###### Discarded low-density polyethylene film received for end-of-life routing (`discarded_ldpe_film`)

Reconcile received LDPE film with packing waste and discarded product packaging by origin and mass; retain its own polymer-specific fate.

- Selected flow: Discarded low-density polyethylene film received for end-of-life routing
- Flow property / unit: Mass / kg
- Amount rule: Divide the attributed native amount collected under the linked protocol by matching conforming purchased stems, once only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `count-mass-water-balance`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

IPCC 2019 Refinement managed-soil Tier 1 is the default for applicable soil routes. Use a higher Tier 2/3 only with a complete compatible site/regional method and activity record; identify the equations, factors, species bases and every excluded pathway. No soil route or factor is inferred merely from the classification code.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | All multifunctional processes | First subdivide processes and use direct measurements for the flower crop, compartment, batch, article, or route. Apply allocation only to residual shared inputs or emissions. | ec-pef-method-2021; wur-floripefcr-2024 |
| `allocation_greenhouse_land_time` | Shared greenhouse cultivation | Allocate shared energy, cleaning, land occupation, and generic operations using crop-specific sub-metering where available; otherwise use occupied area integrated over growing time. Apply economic allocation only to remaining co-products that cannot be separated physically. | wur-floripefcr-2024 |
| `allocation_chp_energy` | Combined heat and power | Apply allocation_chp_boundary to residual shared fuel and direct emissions using net useful delivered heat and electricity in MJ; retain measured efficiency and separately attribute purification burdens for recovered CO2 supplied to cultivation. | wur-floripefcr-2024 |
| `allocation_rotation_inputs` | Organic fertiliser and green manure in rotations | Attribute directly traceable inputs to the receiving crop. For residual organic-fertilizer/green-manure burdens, use each crop's measured or evidenced expected uptake of the relevant available nutrient over the complete rotation: share = crop uptake / total rotation uptake. Retain nutrient species, availability, rotation period and uncertainty; do not assign the total application to every crop. If nutrient causality cannot be evidenced, apply allocation_complete_residual and disclose the proxy; never infer zero. | count-mass-water-balance; ghg-product-standard-2011 |
| `allocation_transport_physical` | Shared freight service by homogeneous route leg | For each constant-load leg, first separate the freight-service burden from passenger or other services using documented provider allocation. Within that freight boundary use actual payload-mass shares when mass-constrained and occupied cargo-volume shares when volume-constrained; record the actual limiting constraint and every consignment. Allocate the total leg service under calc_transport_work, not the shipment physical tonne-kilometres a second time. Do not convert volume to mass using an assumed density. | count-mass-water-balance |
| `allocation_storage_volume_time` | Shared storage, auction, trade, and retail | Allocate utilities and leakage by occupied product volume multiplied by storage time. | wur-floripefcr-2024 |
| `allocation_reuse_cycles` | Reusable buckets, trays, trolleys, and containers | Divide manufacture and end-of-life burdens by verified lifetime uses and include cleaning and return transport for each use. | wur-floripefcr-2024 |
| `allocation_article_components` | Bouquets and similar articles | Normalize article-level burdens by measured flower-stem count for this PCR while retaining each non-floral component as a separate input; do not allocate accessory burdens away from the article. | wur-floripefcr-2024 |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_complete_residual` | all residual multifunctionality | First subdivide and directly meter, then use an evidenced causal physical driver. For genuine co-products without an evidenced causal physical relationship, residual economic share = own quantity*price / sum(quantity*price) for all co-products at the same hand-off and representative period. Record all outputs and shares sum to one. Disposal cost does not turn a waste into a co-product; generating burdens remain. A missing denominator/price makes the inventory incomplete, not single-output or zero burden. Do not allocate the raw physical balance. | `ghg-product-standard-2011` |
| `allocation_chp_boundary` | on-site CHP and recovered CO2 | Subdivide directly attributable equipment burdens first. Split residual shared CHP burdens by this PCR's declared physical choice of net useful electricity and heat, both in MJ, retaining all useful internal and exported outputs. Gross generation/internal losses are not delivered energy. External PEF certification-specific allocation must be demonstrated separately. Keep CO2 purification/delivery burdens and carbon origin/release ownership separate without duplication. | `ghg-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_materials` | cultivation | Starting material, growing media, infrastructure, and cultivation materials | Purchase, stock, supplier, and field records | actual propagation species/state; each material/formulation; mass/count/volume; occupied area and time; crop cohort age/stage; establishment and non-bearing inputs; replacements; termination; asset bill of materials and life; lifetime accepted output; CO2 origin, supplied mass and release/fixation ledger | Reconcile purchases and stock; verify bills of materials and supplier specifications | item; kg; m3; m2-year | Each receipt and annual reconciliation | At least three recent years for annual or protected crops, or three recent crop cycles when shorter; steady-state representation for perennials | Every included farm and cultivation compartment | per declared reference flow | Invoices, stock sheets, supplier specifications, infrastructure records, and crop-area logs |
| `cp_water_records` | cultivation | Irrigation and cultivation water | Meter and water-source records | actual source and resource compartment; supply versus own abstraction; source and delivery meters; opening/closing readings and storage; water carried by materials; make-up, discharge, evaporative and product-carried water; internal circulation; density and conditions if mass/volume converted ; meter owner and actual foreground abstraction/supply boundary; supplier withdrawal coverage; internal delivery cancellation| Read calibrated meters and reconcile water balance | m3 | Monthly and each crop cycle | Same representative period as cultivation output | Every water source and included cultivation block | per declared reference flow | Meter calibration, bills, abstraction records, and water-balance check |
| `cp_fertiliser_records` | cultivation | Fertilisers, manure, amendments, and nutrient inputs | Application and composition records | product; batch; applied mass; N/P/K composition; organic or synthetic origin; field or compartment; date | Reconcile application logs to purchase and stock records; verify composition | kg product; kg N; kg P; kg K | Each application | Same representative period as cultivation output | Every included field or compartment | per declared reference flow | Application logs, invoices, labels, laboratory or supplier composition |
| `cp_plant_protection_records` | cultivation | Plant-protection and post-harvest treatment products | Application records | product; active ingredient; concentration; formulated amount; treated area or batch; date; application method ; application route (open field, greenhouse/substrate or post-harvest); each active-ingredient fraction and retained/collected stock; first-release fate ledger linked to cp_pesticide_fate| Record each application and calculate active-ingredient mass | kg product; kg active ingredient | Each application | Same representative period as cultivation output | Every included field, greenhouse, and post-harvest area | per declared reference flow | Application logs, labels, invoices, and applicator calibration |
| `cp_energy_fuel_records` | cultivation | Electricity, heat, fuels, CHP, and CO2 enrichment | Meter, invoice, and operating records | each actual carrier; raw quantity/unit; density or net calorific value if converted; local combustion versus purchased/inclusive service; submeter/equipment use; net useful CHP heat/electricity internally used and exported; shared-driver totals; matched stem output | Sub-meter where possible; otherwise reconcile facility totals and allocation drivers | kWh; MJ; kg; m3 | Monthly and each crop cycle | Same representative period as cultivation output | Every included energy system and cultivation compartment | per declared reference flow | Meter calibration, invoices, fuel specifications, CHP logs, and allocation reconciliation |
| `cp_output_loss_records` | cultivation; post_harvest | Harvested, saleable, rejected, and lost stems and biomass | Harvest, grading, waste, and dispatch records | node; lot; reporting dates; opening and closing stem stocks; receipts; accepted dispatch; other transfers; rejected stems; evidenced physical loss; actual water and biomass mass/moisture; final purchased stems; stage-to-final lot link | Count by batch and weigh representative stems and wastes | item; kg | Each harvest and grading batch | Same representative period as cultivation output | Every included crop, grade, and handling site | per declared reference flow | Batch tickets, scale records, grade reports, waste receipts, and mass/count balance |
| `cp_cultivation_emissions` | cultivation | Direct emissions from cultivation | Calculation workpaper linked to activity records | actual mineral/organic N; residues; soil/climate/drainage; method/tier/version; factors and native species basis; direct and indirect pathway ownership; actual local fuels, lime/urea and CO2 enrichment; chemical-specific receiving compartment ; phosphorus input species, runoff/drainage concentration and volume, soluble versus particulate P, sediment mass/P fraction, crop removal and soil stock; model equations/version and region/soil/management applicability| Apply declared factor method to collected activity data | kg substance | Each reporting period | Same representative period as cultivation output | Every included field or compartment | per declared reference flow | Formula audit, source version, input traceability, and independent recalculation |
| `cp_post_harvest_records` | post_harvest | Water, conditioning agents, energy, storage, refrigerants, and wastewater | Batch, meter, stock, and maintenance records | stem count; water; agent; energy; storage volume and time; refrigerant charge, additions, recovery; wastewater | Measure by batch or reconcile shared systems | item; m3; kg; kWh; m3-day | Each batch; monthly for shared utilities | Same representative period as processed output | Every included post-harvest site | per declared reference flow | Batch sheets, meters, invoices, maintenance logs, and utility reconciliation |
| `cp_packaging_dispatch_records` | packaging_dispatch | Packaging, accessories, reusable containers, assembly, and dispatch | Bill of materials and batch records | material; mass; recycled content; article stem count; reuse cycles; cleaning; dispatch count; packaging waste | Weigh representative configurations and reconcile purchases and stock | item; kg; m3 | Each configuration and annual reconciliation | Current configuration and representative reporting year | Every included packhouse or assembly site | per declared reference flow | Packaging specifications, scale records, purchase data, reuse logs, and batch reconciliation |
| `cp_distribution_records` | distribution_retail | Transport, storage, auction, trade, retail, losses, and refrigerants | Route, shipment, facility, and sales records | origin and destination; mode; distance; fuel; load; mass and volume; storage volume and time; utility use; refrigerant; loss count and route ; per constant-load leg all eligible consignment gross payload masses excluding vehicle tare, occupied volumes, limiting constraint, loaded distance, provider passenger/freight allocation, service reference/factor unit, total service, allocated shares/quantity, actual utilisation, return and cooling coverage| Collect each route leg and reconcile facility activity | km; tkm; m3-week; kWh; kg; item | Each shipment and monthly facility totals | Representative reporting year with seasonal coverage | Every included route leg and facility | per declared reference flow | Freight documents, telematics, utility bills, inventory records, sales and waste records |
| `cp_end_of_life_scenario` | end_of_life | Flower and packaging treatment | Composition and scenario records | material mass; local collection share; composting; digestion; recycling; incineration; landfill; transport; recovery yield | Use measured composition and current geography-specific treatment evidence | kg; fraction | Each product configuration; scenario review at least annually | Current market and waste-management year | Declared consumer market | per declared reference flow | Product disassembly record, official waste statistics, treatment evidence, and scenario checksum |
| `cp_consumer_use` | consumer_use | Decorative use | Measured or supported scenario | purchased stems; species; vase and service life; decorative days; water-change count/volume; care formulation; energy; wastewater; destination ; actual received and discarded flower counts, mass, moisture and destinations; opening/closing stocks| Collect raw amounts for declared geography/configuration; scenario evidence states source, year and uncertainty | Item(s); day; m3; kg; kWh | per configuration | declared decorative period | declared consumer market | per declared reference flow | Observation record or supported scenario |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_system_coverage | cultivation; post_harvest; packaging_dispatch; distribution_retail; consumer_use; end_of_life | Complete-system linkage | Boundary register | each stage; actual provider and gate; foreground/link role; lot/period; native output; raw burdens; incorporated loss; end market/use/fate; final purchased stems | Reconcile transfers and stage coverage before final-reference normalisation; missing final denominator retains raw contributions only | item; native activity units | per system | matched reporting period | complete linked system | per declared reference flow | Provider boundaries, lot ledger and coverage register |
| cp_pesticide_fate | cultivation; post_harvest | Named active-ingredient fate | Application and compartment ledger | ingredient/CAS and fraction; route; formulation/application mass; opening/closing stocks; exhaust flux/volume and concentrations; discharge volumes/concentrations; soil deposition; crop residues; collected waste; degradation products; model version/equations/parameters/conditions; actual recipient and later-treatment coverage | Apply the route-specific first-release mass balance in calc_pesticide_release; pair sampling with actual discharge/time; separate model convention from measured fate | kg ingredient; native concentration; m3; time; area | each application/batch | matched application and fate period | actual field/equipment/bath | per declared reference flow | Sampling/calibration, application records, model and stock reconciliation |
| cp_luc_history | cultivation | Direct land transformation | Parcel history and carbon-pool ledger | parcel/geography/area; prior/current land state; conversion cause/date; before/after biomass/dead-organic/soil carbon and units; transfer/pool boundaries; harvest period and H; period overlap; gas factors/activity; atmospheric-uptake eligibility; product beneficiaries and shares; supplier LUC coverage; proxy and uncertainty | Use boundary_luc_method screening and calc_luc_attribution; retain dated land records, compatible carbon-stock evidence or explicit permitted proxy; no absence inferred from missing history | m2; year; kg C; kg substance | per event and annual review | H-year event window and matched reporting period | each included parcel/supply | per declared reference flow | Land register/maps, pool methods, dated event/period ledger and independent recalculation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stem_normalization` | All process rows | normalized amount = attributed period or batch amount / conforming consumer-ready stems represented by that amount | attributed amount; conforming stem count | amount per stem | wur-floripefcr-2024 |
| `calc_article_to_stems` | Bouquets and similar articles | amount per stem = article-level amount / measured qualifying flower-stem count; retain article identity and non-floral components | article amount; flower-stem count | amount per stem-equivalent | wur-floripefcr-2024 |
| `calc_loss_scaling` | Successive life-cycle stages | Use calc_stage_stock_loss on paired lot/node ledgers. Where stock changes and route partitions have already been reconciled, upstream stems required for one purchased stem = 1 / product of non-overlapping retained fractions, each greater than zero and at most one. Apply a loss factor once; local measured intensities and upstream linked datasets must not contain the same loss twice. | counted input, output, and loss by stage | loss-adjusted upstream stem requirement | wur-floripefcr-2024 |
| `calc_three_period_average` | Cultivation | Use three representative years or three recent complete crop cycles where applicable; retain the declared temporal window and any justified shorter new-system period. Sum attributable raw activity across periods and divide by summed matching accepted purchased-stem output. Do not take an unweighted mean of annual per-stem intensities. | period inputs; period outputs; stem counts | representative cultivation inventory per stem | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `calc_perennial_steady_state` | Perennial cut-flower systems | Represent the declared cohort and its productive life with measured development-stage areas, time, inputs and accepted outputs. Include establishment and non-bearing burdens and replacements using calc_perennial_cohort; a zero-output juvenile phase is not an excluded burden. Keep forecasts separately evidenced and disclose steady-state assumptions. | stage area, time, inputs, outputs, yields | steady-state inventory per stem | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `calc_nutrient_mass` | Fertilisers and amendments | nutrient mass = applied product mass × documented nutrient mass fraction | product mass; N/P/K composition | kg nutrient | wur-floripefcr-2024 |
| `calc_active_ingredient` | Plant-protection products | active-ingredient mass = formulated product mass × active-ingredient mass fraction | formulated mass; concentration | kg active ingredient | wur-floripefcr-2024 |
| `calc_transport_work` | distribution_road_transport, distribution_air_transport, distribution_sea_transport | Split routes when loads or consignments change. Actual consignment work = payload tonnes * loaded km, excluding vehicle tare; retain this physical ledger. Total leg work = sum(actual consignment work). The linked service quantity is total leg work * the mass share or occupied-volume share fixed by allocation_transport_physical; shares across all eligible freight sum to one. For a volume-constrained leg this allocated service quantity is not the consignment physical tkm and is never presented as measured mass. Use a freight dataset/factor compatible with that same total-leg payload, utilisation, technology and provider allocation; otherwise obtain an explicit vehicle/leg burden and multiply by the same share, or retain a service-compatibility gap. Apply empty return, utilisation and refrigeration once within the chosen service boundary; do not multiply already actual payload by load factor again. Normalize the attributed service/burden once by matched purchased stems. | Matched raw ledgers under collection protocols | Native service/substance amount attributed per purchased stem | count-mass-water-balance |
| `calc_reusable_packaging` | Reusable packaging | material burden per use = packaging manufacture and end-of-life burden / verified lifetime uses; add cleaning and return transport for the current use | packaging mass; reuse cycles; cleaning; return route | packaging burden per stem | wur-floripefcr-2024 |
| `calc_dqr` | Data quality | Assess precision, time, geography, and technology representativeness for material activity data and direct elementary flows; retain criterion scores and evidence. | activity and flow evidence; study context | data-quality record | ec-pef-method-2021; wur-floripefcr-2024 |


| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stage_stock_loss` | all stem hand-offs | On a matched lot and count basis, opening stock + receipts = accepted external dispatch + other transfers + rejected removals + evidenced physical losses + closing stock. Pair rework as one transfer; unexplained residual is not an automatic waste. Required upstream stems per purchased stem = 1 / product of measured retained fractions only where no stock/route mismatch exists; every denominator is positive. Otherwise use the complete measured node ledger. | Linked collection protocols, species/material and matched output | Evidenced quantities and reconciled ledgers | `count-mass-water-balance` |
| `calc_water_components` | water-using stages | External water + material-carried inlet water + opening stock = product-carried water + liquid discharge + evidenced evaporation + other exported water + closing stock. Internal recirculation cancels. Metered external wastewater is not reduced by reuse/evaporation a second time; distinguish waste transferred to treatment from specific direct releases. | Linked collection protocols, species/material and matched output | Evidenced quantities and reconciled ledgers | `count-mass-water-balance` |
| `calc_species_mass` | cultivation emissions | IPCC 2019 Refinement Volume 4 Chapter 11 Tier 1 is the default for applicable soil N2O and lime/urea CO2 pathways; Tier 2/3 requires a complete applicable regional/site method and activity record. For NH3 and nitrate, prefer pathway-specific measured species mass (concentration times measured discharge volume, or flux times area times time); otherwise apply a species-specific emissions model with declared version, equations, species basis and geographic/technical applicability, retaining the source of every factor and activity input. Total volatilized or leached N factors are not automatically NH3 or nitrate; unresolved species remain a gap, never zero. Use one declared regionally applicable method/tier and its actual N inputs and pathway factors. Species-specific N2O-N *44/28 gives N2O, NH3-N *17/14 gives NH3, nitrate-N *62/14 gives nitrate; measured compound mass is not reconverted. Total nutrient loss cannot be wholly assigned to one species; retain direct/indirect pathway ownership once. Local fuel/lime/urea fossil CO2 uses actual activity and compatible species factors; purchased-electricity/heat life-cycle CO2e is not local CO2 mass. | Linked collection protocols, species/material and matched output | Evidenced quantities and reconciled ledgers | `count-mass-water-balance`; `ipcc-2019-managed-soils` |
| `calc_perennial_cohort` | cultivation and infrastructure | Include establishment, non-bearing periods, replacements and termination even when no current-year event occurs. Attribute their total supported burden in proportion to accepted output over the same cohort/asset service life; period burden = total burden * period accepted output / total accepted life output. Sum raw attributable burdens and stem outputs before deriving an intensity. Forecast future output only with a documented site-specific scenario and uncertainty; no default life/yield or zero historical burden.  LUC follows its separate fixed event/time attribution and is not amortised again by this cohort formula.| Linked collection protocols, species/material and matched output | Evidenced quantities and reconciled ledgers | `count-mass-water-balance` |
| `calc_refrigerant_balance` | refrigeration equipment | For the same refrigerant and equipment, opening contained mass + charges = closing contained mass + recovered/removed mass + actual release, with documented transfers and uncertainty. Do not equate replacement purchases with leakage, assume a leak fraction, or report kg CO2e as refrigerant mass. Inclusive refrigerated transport datasets and local equipment inventories must not overlap. | Linked collection protocols, species/material and matched output | Evidenced quantities and reconciled ledgers | `count-mass-water-balance` |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_phosphorus_release` | Cultivation phosphorus | Use a field/equipment-to-receiving-water boundary for phosphorus loss. Soluble P mass = sum(matched dissolved-P concentration * actual runoff/drainage volume); particulate P mass = exported dry sediment * evidenced particulate-P fraction. Retain concentration species/units; convert elemental P to phosphate only for an evidenced phosphate-specific fraction by 94.97/30.97, never for all total P, and never reconvert measured phosphate mass. Use a measured loss ledger first; otherwise a source-backed field/soil/management-compatible runoff/erosion mass-balance model with its explicit equations and actual P input, crop removal, retention, water/sediment and stock parameters. Unexplained P-balance residual is not discharge; missing parameters remain incomplete. Report separate named P/phosphate receiving-compartment cards, without also entering the same P application as a second emission or duplicating inclusive upstream fate. | cp_cultivation_emissions; P species and physical water/sediment ledger | kg of actual P species per purchased stem | ec-pef-method-2021; count-mass-water-balance |
| `calc_pesticide_release` | Cultivation and post-harvest protection applications | For each actual active ingredient, applied mass = formulation mass * its mass fraction. Keep formulation manufacture as one upstream product input; active-ingredient bookkeeping is not another upstream purchase. Prefer an ingredient-specific first-release mass balance: opening contained stock + actual additions = closing stock + collected transfers + crop/material retention exported + evidenced degradation/transformation + releases to each actual air/water/soil compartment. Express the parent-ingredient balance on a parent-active-mass-equivalent basis; identify actual transformation products and their separate chemical mass/fate with documented stoichiometry, without assuming detoxification. Internal recirculation cancels; a balance residual is not an emission. Measure liquid release as the sum of time-matched concentration * discharged volume, air release as integrated substance mass flux * area * time (or concentration * exhaust volume), and soil release from supported deposition measurements or the declared mass-balance model. Models must close the same ingredient ledger with versioned equations, actual equipment/ventilation/drainage/application inputs and compatible measured or source-backed fate parameters; a regulatory worst-case concentration is not an inventory mass. For open-field applications only, absent more specific compatible fate data, adopt the dated PEF 2021 first-compartment convention of 0.90 soil, 0.09 air and 0.01 water times the actual field-applied active mass. Mark this as a modelled convention, not measured physical fate; do not simultaneously add later releases of that same applied mass. Do not use it for contained mixing residues, greenhouse/substrate systems or post-harvest baths. Those routes use the measured/modelled first-release ledger above; no undocumented universal fractions are permitted. Distinguish waste sent to treatment from direct environmental release, retain actual crop residues/collected liquid and assign treatment once. Missing a required fate parameter leaves an incomplete record under this fixed method, not permission to select zero or count all applied mass as released. Create separate named ingredient/compartment cards after actual ingredients are identified, never a generic pesticide-emissions card. | Raw protocol ledgers | Attributed native amounts | ec-pef-method-2021; count-mass-water-balance |
| `calc_luc_attribution` | Attributable land-use-change events | For each event under boundary_luc_method, use H = max(20 years, one harvest period) and dated carbon stocks in the same area and pools. Signed CO2 amount = (carbon before - carbon after) * 44/12, preserving the native mass unit; convert tonnes to kg by 1000 explicitly if used. Exclude transfers already counted in harvested products, imported organic material or other processes; include conversion non-CO2 gases separately using compatible event activity and species factors, never as kg CO2e in a substance card. Attribute event amounts evenly over H years from the event: annual share = event amount/H, with evidenced reporting-period overlap; events outside the attribution window do not receive a new charge. Allocate that period share among actual beneficiary products under section 7 and divide once by matched final purchased stems. Keep positive release and eligible negative carbon-stock change in separate substance ledgers; uptake requires evidence of atmospheric origin and retained stock, not imported carbon or an automatic permanence credit. LUC is not spread again over plant/greenhouse life by calc_perennial_cohort. Unknown event date, pools or denominator needs supported proxy evidence under the declared method or blocks completeness; no automatic zero. | Raw protocol ledgers | Attributed native amounts | ghg-product-standard-2011; count-mass-water-balance |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Retain species or cultivar, grade, stem length, product form, article composition, production geography, cultivation system, harvest period, post-harvest treatment, packaging, cold-chain condition, and expected decorative life. | Product specification, batch record, and reference-flow metadata |
| `dq_temporal` | Cultivation | Use three representative recent years for annual and protected systems or three consecutive recent cycles for crops shorter than a year; apply documented steady-state treatment to perennial systems. | Period coverage table and source-linked calculation |
| `dq_site_coverage` | Multi-site production | Describe the population, technology, farm practice, climate zone, and capacity strata; document included sites and production coverage. | Site register, sampling rationale, and production-volume reconciliation |
| `dq_measurement` | Material activity data | Prefer calibrated meters, verified invoices, batch counts, scales, and supplier specifications; preserve raw units and conversion factors. | Calibration, invoice, batch, scale, and specification records |
| `dq_completeness` | All required stages and flows | Reconcile inputs, outputs, losses, stock changes, water, energy, and waste; list every unresolved or excluded flow with materiality rationale. | Completeness checklist and mass/count/utility balances |
| `dq_representativeness` | Foreground and secondary data | Assess technological, geographical, temporal, and precision representativeness; disclose proxies and their expected direction of bias. | DQR workpaper and proxy register |
| `dq_source_traceability` | Calculated values and factors | Store formula, source id and version, raw inputs, allocation driver, and calculation output so an independent reviewer can reproduce the value. | Calculation workpaper and cited source |
| `dq_uuid_readiness` | Tiangong identity | Resolve each selected public flow, property, and unit-group UUID against the current Tiangong row before activation or publication; do not substitute a narrower flow. | Tiangong readback record retained outside PCR content |



### Data Quality Requirements

These are collection obligations, not exchanges. Identify each actual physical product, formulation, separately purchased service, waste and elementary substance from supplier, equipment, destination and primary records; create one card with its native property/quantity. Retain unresolved identities, do not assume an example is used, and do not infer zero. Unknown actual products do not defer PCR boundary, denominator, allocation or loss rules to modelling; this PCR fixes those methods.

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `starting_material_identity` | cultivation | All actually used propagation lots, species and physical propagation states; reject purchased-cut-flower double cultivation. Collection protocol: cp_cultivation_materials. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `growing_media_materials_identity` | cultivation | Every growing-medium constituent, support, container, greenhouse structure and infrastructure asset actually used; measured native quantities, service life and productive output. Collection protocol: cp_cultivation_materials. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `fertiliser_inputs_identity` | cultivation | Every actual formulated fertilizer, organic amendment and lime product separately, with product mass and nutrient fractions. Collection protocol: cp_fertiliser_records. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `plant_protection_inputs_identity` | cultivation | Require each actual formulation product input and each named active-ingredient/first-release-compartment elementary output under calc_pesticide_release and cp_pesticide_fate; ingredient bookkeeping does not create a second upstream product burden. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `other_cultivation_utilities_identity` | cultivation | Each actual fuel, heat carrier and utility not represented by an applicable specific card. Collection protocol: cp_energy_fuel_records. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `post_harvest_water_agents_identity` | post_harvest | Each actual hydration, preservation, sanitation and phytosanitary chemical, its concentration and separate supplied water. Collection protocol: cp_post_harvest_records. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `other_refrigerants_identity` | post_harvest; distribution_retail | Each actual refrigerant formulation and its charge, recovery and species-specific release. R134a cards apply only where R134a is actually used. Collection protocol: cp_post_harvest_records; cp_distribution_records. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `packaging_materials_identity` | packaging_dispatch | Every actual article accessory, filler, reusable bucket/tray/trolley and remaining packaging constituent; no assumed LDPE or cardboard recipe. Collection protocol: cp_packaging_dispatch_records. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `consumer_care_materials_identity` | consumer_use | Every actual care product and reusable vase component attributable to the declared decorative use. Collection protocol: cp_consumer_use. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |
| `all_waste_material_routes_identity` | end_of_life | Each additional discarded material, destination-specific treatment service and real recovered product; foreground treatment emissions are distinct substance/compartment exchanges. Collection protocol: cp_end_of_life_scenario. | Site records, specifications, raw measurements and identity readback; preserve unresolved gaps. |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_inventory_card_controls` | All process inventory cards | For every actual exchange retain material/substance, physical state, process gate, period and source/destination, including the receiving compartment when applicable. Confirm actual use and route; missing records do not establish non-applicability. Keep unverified identities unresolved rather than substituting a narrower or different material. For collected or calculated activity rows, collect native quantities under the linked protocol, reconcile matched node counts, stocks and material ledgers, and attribute shared activity using its measured driver. Apply calc_stem_normalization exactly once to the conforming purchased-stem denominator for the same complete system, period and scenario; do not divide already normalized amounts again. The fixed identity-reference output remains 1 Item(s); preserve the explicit LUC and consumer hand-off amount rules without adding another conversion. Adjacent nodes share the same physical hand-off record and cancel internal transfers on aggregation without adding product or treatment burdens twice. Reconcile on-site fuel combustion, purchased heat and enrichment CO2 with inclusive utility-service coverage; temporary plant uptake is not an automatic negative emission. For treatment services, any recovered product requires its own measured quantity and function; retain the no-duplicate-emissions and no-automatic-credit rules of validate_end_of_life_materials. | count-mass-water-balance |
| `validate_product_identity` | Reference product | Fail conformance when species or cultivar, grade, product form, stem count for an article, cultivation system, production geography, and boundary are missing. | wur-floripefcr-2024 |
| `validate_reference_flow` | Quantitative reference | Require one Item(s) at the consumer-purchase output delivered_stem, with the article stem count positive and accessories retained. Intermediate harvested, conditioned and dispatched counts follow the measured stock/loss ledger and are not fixed to one. | wur-floripefcr-2024; lan-cut-flower-review-2022 |
| `validate_reference_uuid` | Tiangong reference flow | Classification mapping accepts only this fresh-flower semantic scope; it is not current external-scheme certification or publication readiness. Verify actual dataset identity against species, fresh undyed state, hand-off and count-compatible property; otherwise retain unresolved status and do not claim full linking. Do not substitute Dyed flower. Activation/publication remain subject to their independent identity and methodology gates. |  |
| `validate_process_coverage` | Completed system and source contributions | Require all six mapped stages, including consumer_use and end_of_life, covered once by foreground records or identified compatible linked datasets. Verify their actual gates, physical transfers, period/lot matching, supplier coverage and allocation. A short-boundary farm, packhouse or retail dataset alone cannot claim conformance with this PCR or substitute its node output for delivered_stem. Missing downstream scenario, coverage or purchased-stem denominator blocks a completed system. | count-mass-water-balance |
| `validate_required_inputs` | Cultivation | Require explicit rows or justified non-applicability for starting material, growing medium, cultivation materials, water, fertilisers, plant-protection products, energy, heating or cooling, infrastructure, direct emissions, output, and losses. | wur-floripefcr-2024 |
| `validate_count_balance` | Stem transfers | Reconcile opening stocks, receipts, accepted dispatch, other transfers, rejected removals, physical loss and closing stocks under calc_stage_stock_loss; adjacent hand-offs share quantities, and post-use flowers also require mass/moisture reconciliation. |  |
| `validate_water_balance` | Water-using stages | Apply calc_water_components to external supply, material-carried water, discharge, evaporation and opening/closing water stocks, retaining measurement uncertainty; internal circulation is not another external input, and measured wastewater is not reduced twice. |  |
| `validate_allocation` | Shared processes | Require subdivision evidence or a cited allocation rule and measured driver; reject unexplained economic allocation where physical separation or causality is available. | ec-pef-method-2021; wur-floripefcr-2024 |
| `validate_temporal_coverage` | Cultivation | Require the representative period or an explicit exception consistent with annual, short-cycle, or perennial rules. | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `validate_loss_scaling` | Downstream stages | Loss fractions are at least zero and strictly below one for a route delivering a positive final reference; retain positive output and matched stocks. Verify the full node ledger and stage-factor ownership rather than assigning a missing loss to zero. | wur-floripefcr-2024 |
| `validate_source_traceability` | Calculated rows | Require every method factor, externally constrained rule, and non-default scenario to reference a listed source id; require every foreground calculated row to link to a collection protocol. | ec-pef-method-2021 |
| `validate_data_quality` | Dataset profile | Require disclosed precision, time, geography, and technology representativeness and an explicit proxy register. | ec-pef-method-2021; wur-floripefcr-2024 |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_end_of_life_materials` | end_of_life | Treatment fractions for each actual material sum to one on the same time/geography basis; reconcile composition and moisture first. Treatment services are inputs, not recovered outputs; do not repeat service-included emissions. Missing fate evidence blocks completeness. Recovery/substitution credit is not automatic; an external scheme's circularity formula requires separate conformance evidence. | `count-mass-water-balance` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_pesticide_fate` | Actual protection products and releases | Verify every active ingredient from application to each first-release compartment or evidenced retention/collection/transformation. Enforce the declared route and method hierarchy; reject open-field default fractions for protected/contained/post-harvest systems, duplicate active-ingredient supply, double-counted later fate, unexplained balance residuals and regulatory concentrations presented as mass. Missing route/fate evidence blocks a complete inventory. | ec-pef-method-2021; count-mass-water-balance |
| `validate_luc_attribution` | Land history, stocks and attribution | Require dated parcel/conversion history or the permitted explicit proxy, carbon pools and units, harvest-period evidence, H, event/period overlap, eligible gas/uptake ledgers, beneficiary shares and matched output. Reconcile linked supplier LUC coverage, land occupation and establishment inventories so each burden is counted once; reject zero inferred from missing history or an arbitrary plant-life amortisation. | ghg-product-standard-2011 |
| `validate_transport_service` | Freight legs and allocated service quantities | Reconcile physical consignment tkm separately from allocated service tkm or vehicle/leg burden. Confirm the actual limiting constraint, eligible total payload/volume, shares summing to one and compatible provider/service boundary. The allocated quantities must sum to the complete freight-leg service, with no duplicated loading, return or refrigeration correction. A volume-constrained allocation cannot silently use individual physical tkm as its allocated amount. | count-mass-water-balance |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_phosphorus_fate` | Cultivation P | Require soluble versus particulate P loss/retention evidence under calc_phosphorus_release for actual P inputs; verify the chosen field-to-water boundary, species/unit conversion and measured or modelled runoff/sediment inputs. Do not treat total applied P or an unexplained balance residual as measured phosphate release, or count both P application and the same receiving-water emission. Missing applicable fate evidence blocks completeness. | ec-pef-method-2021; count-mass-water-balance |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Complete cradle-to-grave cut-flower system per purchased stem; raw node contributions have no standalone PCR conformance |
| downstream_use | `secondary_dataset`; `background_dataset`; input to `process` and `lifecyclemodel` projections |
| allowed_use | Product-specific modelling for cut flowers and flower buds when the declared species, grade, cultivation route, geography, time, post-harvest treatment, packaging, distribution, loss, and boundary match the study |
| excluded_use | Potted plants, planting material, seed, dried or artificial flowers, edible flowers sold as food, undisclosed generic global proxies, or comparison of unlike product specifications and decorative lives |
| required_metadata | PCR id/version; full-stage coverage register with foreground/linked provider gates, lot/period and purchased-stem denominator; product qualifiers; raw node quantities; site and scenario evidence; pesticide route/fate; land history/LUC window and pools; freight constraint, physical and allocated service ledgers; sources/proxies and identity readback status |
| required_quality_disclosure | Site and production coverage; collection period; measurement and calculation methods; data-quality criteria; unresolved flows; excluded processes; proxy data and direction of bias; allocation drivers; mass, count, water, and utility reconciliation |
| update_trigger | Change in species or grade, cultivation technology, energy system, greenhouse infrastructure, water source, nutrient or plant-protection regime, post-harvest treatment, packaging, route or cold chain, loss pattern, waste treatment, source method, or any material input or emission |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| wur-floripefcr-2024 | standard | Broekema, R. et al. (2024), Product Environmental Footprint Category Rules for Cut Flowers and Potted Plants: Final version, Wageningen Economic Research Report 2024-023, DOI: 10.18174/549543, retrieved 2026-07-30 | Flower-specific functional unit and reference flow; life-cycle stages; mandatory company-specific data; allocation; temporal coverage; packaging, distribution, loss, data-quality, and end-of-life rules |
| ec-pef-method-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, sections 4.4.1.4-4.4.1.5 and general PEF method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Boundary, allocation and quality guidance; dated open-field pesticide first-compartment convention and phosphorus/compartment distinction. No current certification is asserted. |
| bsi-pas-2050-1-2012 | standard | BSI PAS 2050-1:2012, Assessment of life cycle greenhouse gas emissions from horticultural products - Supplementary requirements for the cradle-to-gate stages, official BSI record, retrieved 2026-07-30 | Horticultural temporal averaging, perennial steady state, rotation allocation, land-use-change, and cradle-to-gate disclosure |
| lan-cut-flower-review-2022 | literature | Lan, Y.-C., Tam, V. W. Y., Xing, W., Datt, R., and Chen, Z. (2022), Life cycle environmental impacts of cut flowers: A review, Journal of Cleaner Production 369, 133415, DOI: 10.1016/j.jclepro.2022.133415 | Independent evidence for stem-count functional units, category variability, and the relevance of cultivation, post-harvest, consumer, energy, water, chemical, land-use, and waste stages |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| count-mass-water-balance | method_factor | Conservation of item count, material, water and attributable burdens; explicit choices defined in this PCR | Node, stock, loss and conversion consistency; no default quantity ranges |
| ghg-product-standard-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9 and Appendix B, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Allocation hierarchy and direct-LUC screening, carbon-stock calculation and temporal attribution; specific choices are declared in this PCR |
| ipcc-2019-managed-soils | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Applicable direct/indirect soil-N and lime/urea CO2 pathways; not site quantity evidence |
| fsi-benchmarking-2024 | official_guidance | FSI FloriPEFCR Benchmarking Guidance, July 2024, https://fsi2030.com/wp-content/uploads/2024/07/20240701-FSI-FloriPEFCR-Benchmarking-guidance.pdf, sections 2-3 | Distinguish technical method evidence, tool benchmarking and formal scheme compliance; continued use is not inferred renewal |

Published 2024 FloriPEFCR rules are dated technical evidence for this standalone candidate. This record does not assert renewed validity after the historic stated end date or current PEF/FSI certification. Such claims require the then-applicable method/database versions and independent verification. This uncertainty does not alter the reviewed semantic classification relation. Quantitative screening ranges remain unavailable without compatible evidence; do not invent limits, factors, lifetimes or recipes.
