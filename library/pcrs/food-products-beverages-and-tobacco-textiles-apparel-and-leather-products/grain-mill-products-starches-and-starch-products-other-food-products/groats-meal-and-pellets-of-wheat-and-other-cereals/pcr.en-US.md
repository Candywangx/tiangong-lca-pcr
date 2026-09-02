---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.groats-meal-and-pellets-of-wheat-and-other-cereals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Groats, meal and pellets of wheat and other cereals

## 1. Scope and Applicability

This PCR covers CPC 3.0 code 23130: groats, meal, and pellets made from wheat or another explicitly named cereal. Every foreground data package shall lock exactly one botanical cereal species, exactly one product form, and one actual manufacturing route. It shall not average across cereal species, combine groats with meal or pellets, or use “other cereal” as a material identity.

The foreground boundary begins when the declared cereal grain and purchased utilities cross the manufacturing facility gate. It includes receipt and storage, cleaning and grading, route-specific conditioning, dehulling, cutting, grinding, sieving, route-specific pelleting and cooling, finished storage and release, campaign-attributable cleaning, dust control, and conditional onsite heat or wastewater treatment. Agriculture, grain drying or processing before receipt, and inbound transport require separate upstream datasets. Distribution beyond the facility gate, retail, use, and end-of-life are downstream.

Covered products are dry cereal groats, cereal meal, and cereal pellets whose exact cereal species and physical form are declared. Flour, flakes, rolled grain, malt, starch, breakfast cereal, couscous, compound feed, multi-ingredient prepared food, and any product outside CPC 23130 are excluded. A product described by a Codex commodity standard is included only when its CPC identity is still 23130.

No default amount, range, yield, moisture adjustment, energy intensity, loss fraction, or emission factor is prescribed. Dataset values come from foreground records or calculations from collected records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.groats-meal-and-pellets-of-wheat-and-other-cereals |
| classification_refs | CPC 3.0: 23130 — Groats, meal and pellets of wheat and other cereals (exact) |
| covered_products | One explicitly named cereal species supplied as one declared form: groats, meal, or pellets. |
| excluded_products | Flour; flakes; rolled grain; malt; starch; breakfast cereal; couscous; compound feed; prepared multi-ingredient food; cross-species or cross-form averages; any “other cereal” fallback identity. |
| representative_product | One product-specific batch of net conforming groats, meal, or pellets from one declared botanical cereal species. |
| production_route | Exact facility route from grain receipt through the applicable cleaning, conditioning, dehulling, milling, sieving, pelleting, cooling, packaging, storage, hygiene, dust-control, heat-generation, and wastewater-treatment operations. |
| market_state | One declared dry bulk or packaged release state with product-specific moisture, particle-size or pellet-size specification, and storage condition. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one specific, specification-conforming CPC 23130 cereal product at the manufacturing facility gate. |
| How much | 1 kg net conforming product, excluding every packaging material. |
| How well | Meets the locked species identity, product-form definition, composition, moisture, particle-size or pellet-size, hygiene, and release specification. |
| How long or cycle | One released production batch; facility storage duration through release is disclosed. |
| reference_flow_link | Assign the 1 kg reference amount to exactly one `final_<species>_<form>` output row in `packaging_storage_release`; every other final-product row is not applicable. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Groats, meal and pellets of wheat and other cereals `d38c3022-dc92-41e0-83b7-6bc99fa5b392` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical cereal species; groats or meal or pellets form; whole or dehulled or degermed state; exact particle-size or pellet-size specification; moisture basis and release moisture; actual cleaning and conditioning route; actual dehulling and milling route; pelleting and cooling route when applicable; exact packaging composition; bulk or packaged release state; net conforming mass; co-product routing; reject routing; dust-control configuration; wastewater routing |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent data-package fields. The broad Tiangong reference identity never authorises averaging across species or forms.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net conforming released product; exclude every packaging component from reference mass. |
| `species_form_lock` | reference product and inventory | Mass | kg | Retain one botanical species and one product form throughout one data package; do not average or substitute another cereal or form. |
| `moisture_basis` | grain, intermediate products, co-products, and wastes | Mass | kg | Record as-measured mass and moisture basis; calculate dry-matter mass only from batch-specific moisture measurements. |
| `particle_specification` | groats and meal | Mass | kg | Retain the product-specific sieve or particle-size specification and the test method used for release. |
| `pellet_specification` | pellets | Mass | kg | Retain the product-specific pellet diameter, length or screen specification, fines criterion, and release test. |
| `packaging_exclusion` | packaging | Mass | kg | Exclude packaging from reference mass while recording each physical packaging material as a separate inventory exchange. |
| `energy_units` | electricity, steam, hot water, and fuels | Energy | kWh or MJ | Preserve native meter and invoice units and document every conversion factor before normalization. |
| `water_units` | process water and wastewater | Volume | m3 | Record each water stream separately and preserve the measured volume basis. |
| `pollutant_load` | emissions to air or water | Mass | kg | Calculate a load only from collected activity, volume, concentration, or direct-measurement records and a documented formula. |
| `mass_balance` | every process | Mass | kg | Reconcile inputs to products, co-products, wastes, stock changes, retained moisture, and measured releases without imposing a default yield. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Exact cereal species, supplier lot, moisture condition, contamination or screening status, mass, and storage state at the manufacturing facility gate. |
| starting_condition_role | Foreground receipt of one identified cereal grain; upstream cultivation, prior drying, and inbound transport remain separate datasets. |
| product_classification_scope | CPC 3.0 code 23130 only; each package represents one species and one of groats, meal, or pellets. |
| recursive_input_rule | A purchased CPC 23130 intermediate is recorded once as an upstream product input with its exact species and form; do not recursively reproduce its manufacturing inventory. |
| upstream_dataset_requirement | Use separate upstream datasets for cereal cultivation, prior post-harvest operations, inbound transport, purchased energy, water, chemicals, packaging, and waste treatment outside the facility. |
| disclosure | Declare geography, technology, batch period, species, form, grain condition, route, packaging, co-products, waste destinations, dust controls, onsite utilities, and wastewater boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | foreground system | Begin at the manufacturing facility gate when the exact cereal grain and purchased utilities are received. | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `boundary_end` | foreground system | End after one exact conforming product is stored, released, and measured at the facility gate. | `eu-pef-2021-2279` |
| `scope_lock` | product identity | Lock one botanical species, one groats or meal or pellets form, and one actual route; cross-species and cross-form averages are non-conforming. | `un-cpc-3-2025`, `codex-cxs-155-1985`, `codex-cxs-178-1991` |
| `upstream_exclusion` | upstream stages | Keep cultivation, pre-receipt post-harvest operations, and inbound transport outside the foreground boundary and link separate upstream datasets. | `eu-pef-2021-2279` |
| `cleaning_inclusion` | grain preparation | Include the actual screening, aspiration, magnetic separation, de-stoning, scouring, washing, and grading steps used by the locked route. | `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003` |
| `conditioning_inclusion` | conditioning | Include water, purchased steam, purchased hot water, holding time, and moisture change only when physically applied. | `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003` |
| `pellet_route` | pellet products | Include meal conditioning, die pressing, cooling, screening, fines handling, and storage only for a pellet product. | `us-epa-ap42-grain-2003` |
| `dust_boundary` | air emissions | Include captured dust, spent control media, dust-control utilities, and residual PM releases for every applicable source and control device. | `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031` |
| `heat_boundary` | heat supply | Record purchased steam or hot water when heat crosses the facility boundary; record fuel and feedwater when heat is generated onsite; never count both for the same heat quantity. | `ec-jrc-fdm-bref-2019`, `eu-pef-2021-2279` |
| `wastewater_boundary` | wastewater | Include onsite treatment only when physically operated in the foreground facility; otherwise record each named untreated wastewater stream at the facility boundary. | `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031` |
| `downstream_exclusion` | downstream stages | Exclude distribution beyond the facility gate, retail, use, and end-of-life from the foreground boundary. | `eu-pef-2021-2279` |
| `unlisted_species_rule` | unlisted valid cereal | Before validation, add one exact atomic row for every in-scope cereal species, material, package, waste, pollutant, or emission not already listed; never use an “other cereal” selector. | `un-cpc-3-2025`, `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `grain_receiving_storage` | Grain receiving and storage | required | Always include receipt, lot identification, weighing, and facility storage for the locked cereal species. | Foreground receipt and storage of one declared cereal species. | mass of accepted grain assigned to the locked production batch |
| `grain_cleaning_grading` | Grain cleaning and grading | required | Always include the actual screening, aspiration, magnetic separation, de-stoning, scouring, washing, or grading steps used. | Foreground removal of named foreign materials and preparation of one clean grain stream. | mass of cleaned grain by exact species |
| `conditioning_tempering` | Conditioning and tempering | conditional | Include only when water, purchased steam, purchased hot water, or a holding step changes grain moisture or milling behaviour. | Foreground moisture adjustment and tempering of one cleaned grain stream. | mass of tempered grain by exact species |
| `dehulling_milling_sieving` | Dehulling, milling and sieving | required | Always include the actual dehulling, cutting, grinding, classification, and sieving operations needed for the locked groats, meal, or pellet route. | Foreground production of species-specific groats or meal and named co-products. | mass of each exact product form and co-product |
| `pellet_forming_cooling` | Pellet forming and cooling | conditional | Include only when the declared reference product form is pellets. | Foreground steam conditioning, die pressing, cooling, and screening for one species-specific pellet. | mass of conforming species-specific pellets |
| `packaging_storage_release` | Packaging, finished storage and release | required | Always include finished-product storage and release; include each packaging material only when it is physically used. | Foreground release of exactly one species-specific product form at the facility gate. | net mass of one conforming released product |
| `dust_collection_control` | Dust collection and control | conditional | Include when aspiration, a cyclone, a fabric filter, wet scrubbing, or oil suppression is used for the locked route. | Foreground capture, recovery, disposal, and residual release of process dust. | mass of captured dust and residual particulate release |
| `hygiene_cleaning` | Hygiene and equipment cleaning | required | Always include campaign-attributable dry cleaning and any wet cleaning or sanitation actually performed. | Foreground hygiene operations for food-contact equipment and production areas. | campaign-attributable cleaning records |
| `onsite_heat_generation` | Onsite heat generation | conditional | Include only when steam or hot water is generated inside the foreground facility boundary. | Foreground conversion of one recorded fuel into steam or hot water. | fuel inventory and useful heat output |
| `onsite_wastewater_treatment` | Onsite wastewater treatment | conditional | Include only when wastewater treatment is physically operated within the foreground facility boundary. | Foreground treatment of each named wastewater stream and recording of residual pollutants. | volume and pollutant load of each treated stream |

### Process: Grain receiving and storage (`grain_receiving_storage`)

#### Inputs

##### Product flows

###### Receive Common wheat grain (`receive_common_wheat_grain`)

Common wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive Durum wheat grain (`receive_durum_wheat_grain`)

Durum wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive Rye grain (`receive_rye_grain`)

Rye grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive Barley grain (`receive_barley_grain`)

Barley grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive Oat grain (`receive_oats_grain`)

Oat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive Maize grain (`receive_maize_grain`)

Maize grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive Sorghum grain (`receive_sorghum_grain`)

Sorghum grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive Pearl millet grain (`receive_pearl_millet_grain`)

Pearl millet grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply grid electricity to grain receiving (`receiving_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply diesel to receiving mobile equipment (`receiving_diesel`)

Diesel fuel is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Diesel fuel physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply liquefied petroleum gas to receiving mobile equipment (`receiving_lpg`)

Liquefied petroleum gas is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Liquefied petroleum gas physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply Ammonia refrigerant R717 makeup (`receiving_r717_makeup`)

Ammonia refrigerant R717 makeup is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Ammonia refrigerant R717 makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Ammonia refrigerant R717 makeup physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply Carbon dioxide refrigerant R744 makeup (`receiving_r744_makeup`)

Carbon dioxide refrigerant R744 makeup is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Carbon dioxide refrigerant R744 makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Carbon dioxide refrigerant R744 makeup physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply Propane refrigerant R290 makeup (`receiving_r290_makeup`)

Propane refrigerant R290 makeup is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Propane refrigerant R290 makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Propane refrigerant R290 makeup physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

###### Transfer accepted Common wheat grain (`accepted_common_wheat_grain`)

Accepted Common wheat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Common wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Common wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer accepted Durum wheat grain (`accepted_durum_wheat_grain`)

Accepted Durum wheat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Durum wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Durum wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer accepted Rye grain (`accepted_rye_grain`)

Accepted Rye grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Rye grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer accepted Barley grain (`accepted_barley_grain`)

Accepted Barley grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Barley grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Barley grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer accepted Oat grain (`accepted_oats_grain`)

Accepted Oat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Oat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Oat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer accepted Maize grain (`accepted_maize_grain`)

Accepted Maize grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Maize grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer accepted Sorghum grain (`accepted_sorghum_grain`)

Accepted Sorghum grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Sorghum grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Sorghum grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer accepted Pearl millet grain (`accepted_pearl_millet_grain`)

Accepted Pearl millet grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Pearl millet grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Pearl millet grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

###### Remove rejected Common wheat grain (`receiving_reject_common_wheat`)

Common wheat grain receiving reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat grain receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat grain receiving reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rejected Durum wheat grain (`receiving_reject_durum_wheat`)

Durum wheat grain receiving reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat grain receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat grain receiving reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rejected Rye grain (`receiving_reject_rye`)

Rye grain receiving reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye grain receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye grain receiving reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rejected Barley grain (`receiving_reject_barley`)

Barley grain receiving reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley grain receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley grain receiving reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rejected Oat grain (`receiving_reject_oats`)

Oat grain receiving reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oat grain receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oat grain receiving reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rejected Maize grain (`receiving_reject_maize`)

Maize grain receiving reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize grain receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize grain receiving reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rejected Sorghum grain (`receiving_reject_sorghum`)

Sorghum grain receiving reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum grain receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum grain receiving reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rejected Pearl millet grain (`receiving_reject_pearl_millet`)

Pearl millet grain receiving reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet grain receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet grain receiving reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove low-density polyethylene liner waste (`receiving_ldpe_liner_waste`)

Low-density polyethylene inbound liner waste is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Low-density polyethylene inbound liner waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Low-density polyethylene inbound liner waste physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove woven polypropylene sack waste (`receiving_pp_sack_waste`)

Woven polypropylene inbound sack waste is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Woven polypropylene inbound sack waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Woven polypropylene inbound sack waste physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove corrugated fibreboard carton waste (`receiving_carton_waste`)

Corrugated fibreboard inbound carton waste is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Corrugated fibreboard inbound carton waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Corrugated fibreboard inbound carton waste physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove wooden pallet waste (`receiving_pallet_waste`)

Wooden inbound pallet waste is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Wooden inbound pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Wooden inbound pallet waste physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

###### Release Ammonia R717 to air (`receiving_r717_release`)

Ammonia R717 to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Ammonia R717 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Ammonia R717 to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release Carbon dioxide R744 to air (`receiving_r744_release`)

Carbon dioxide R744 to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Carbon dioxide R744 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Carbon dioxide R744 to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release Propane R290 to air (`receiving_r290_release`)

Propane R290 to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Propane R290 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Propane R290 to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 10 µm (`receiving_pm10`)

Particulate matter below 10 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 10 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 10 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 2.5 µm (`receiving_pm25`)

Particulate matter below 2.5 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 2.5 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.



### Process: Grain cleaning and grading (`grain_cleaning_grading`)

#### Inputs

##### Product flows

###### Clean accepted Common wheat grain (`cleaning_input_common_wheat`)

Accepted Common wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Common wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Common wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Clean accepted Durum wheat grain (`cleaning_input_durum_wheat`)

Accepted Durum wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Durum wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Durum wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Clean accepted Rye grain (`cleaning_input_rye`)

Accepted Rye grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Rye grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Clean accepted Barley grain (`cleaning_input_barley`)

Accepted Barley grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Barley grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Barley grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Clean accepted Oat grain (`cleaning_input_oats`)

Accepted Oat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Oat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Oat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Clean accepted Maize grain (`cleaning_input_maize`)

Accepted Maize grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Maize grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Clean accepted Sorghum grain (`cleaning_input_sorghum`)

Accepted Sorghum grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Sorghum grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Sorghum grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Clean accepted Pearl millet grain (`cleaning_input_pearl_millet`)

Accepted Pearl millet grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Accepted Pearl millet grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Accepted Pearl millet grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply grid electricity to grain cleaning (`cleaning_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply compressed air to grain aspiration (`cleaning_compressed_air`)

Compressed air is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Compressed air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply process water to wet grain cleaning (`wet_cleaning_water`)

Process water for wet grain cleaning is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Process water for wet grain cleaning
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Process water for wet grain cleaning physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Apply food-grade white mineral oil (`dust_suppression_white_mineral_oil`)

Food-grade white mineral oil is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Food-grade white mineral oil
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Food-grade white mineral oil physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Apply refined soybean oil (`dust_suppression_soybean_oil`)

Refined soybean oil is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Refined soybean oil
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Refined soybean oil physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

###### Transfer cleaned Common wheat grain (`cleaned_common_wheat_grain`)

Cleaned Common wheat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Common wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Common wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer cleaned Durum wheat grain (`cleaned_durum_wheat_grain`)

Cleaned Durum wheat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Durum wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Durum wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer cleaned Rye grain (`cleaned_rye_grain`)

Cleaned Rye grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Rye grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer cleaned Barley grain (`cleaned_barley_grain`)

Cleaned Barley grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Barley grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Barley grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer cleaned Oat grain (`cleaned_oats_grain`)

Cleaned Oat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Oat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Oat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer cleaned Maize grain (`cleaned_maize_grain`)

Cleaned Maize grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Maize grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer cleaned Sorghum grain (`cleaned_sorghum_grain`)

Cleaned Sorghum grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Sorghum grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Sorghum grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer cleaned Pearl millet grain (`cleaned_pearl_millet_grain`)

Cleaned Pearl millet grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Pearl millet grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Pearl millet grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

###### Remove common wheat cleaning screenings (`screenings_common_wheat`)

Common wheat cleaning screenings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat cleaning screenings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove durum wheat cleaning screenings (`screenings_durum_wheat`)

Durum wheat cleaning screenings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat cleaning screenings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rye cleaning screenings (`screenings_rye`)

Rye cleaning screenings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye cleaning screenings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove barley cleaning screenings (`screenings_barley`)

Barley cleaning screenings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley cleaning screenings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove oats cleaning screenings (`screenings_oats`)

Oats cleaning screenings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats cleaning screenings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove maize cleaning screenings (`screenings_maize`)

Maize cleaning screenings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize cleaning screenings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove sorghum cleaning screenings (`screenings_sorghum`)

Sorghum cleaning screenings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum cleaning screenings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove pearl millet cleaning screenings (`screenings_pearl_millet`)

Pearl millet cleaning screenings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet cleaning screenings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove stone reject (`cleaning_stone_reject`)

Stone cleaning reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Stone cleaning reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Stone cleaning reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove sand reject (`cleaning_sand_reject`)

Sand cleaning reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sand cleaning reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sand cleaning reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove ferrous metal reject (`cleaning_ferrous_reject`)

Ferrous metal cleaning reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Ferrous metal cleaning reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Ferrous metal cleaning reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove chaff reject (`cleaning_chaff_reject`)

Chaff cleaning reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Chaff cleaning reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Chaff cleaning reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove weed seed reject (`cleaning_weed_seed_reject`)

Weed seed cleaning reject is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Weed seed cleaning reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Weed seed cleaning reject physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove wet grain cleaning wastewater (`wet_cleaning_wastewater`)

Wet grain cleaning wastewater is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Wet grain cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Wet grain cleaning wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

###### Release particulate matter below 10 µm (`cleaning_pm10`)

Particulate matter below 10 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 10 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 10 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 2.5 µm (`cleaning_pm25`)

Particulate matter below 2.5 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 2.5 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.



### Process: Conditioning and tempering (`conditioning_tempering`)

#### Inputs

##### Product flows

###### Condition cleaned Common wheat grain (`conditioning_input_common_wheat`)

Cleaned Common wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Common wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Common wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Condition cleaned Durum wheat grain (`conditioning_input_durum_wheat`)

Cleaned Durum wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Durum wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Durum wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Condition cleaned Rye grain (`conditioning_input_rye`)

Cleaned Rye grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Rye grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Condition cleaned Barley grain (`conditioning_input_barley`)

Cleaned Barley grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Barley grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Barley grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Condition cleaned Oat grain (`conditioning_input_oats`)

Cleaned Oat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Oat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Oat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Condition cleaned Maize grain (`conditioning_input_maize`)

Cleaned Maize grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Maize grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Condition cleaned Sorghum grain (`conditioning_input_sorghum`)

Cleaned Sorghum grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Sorghum grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Sorghum grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Condition cleaned Pearl millet grain (`conditioning_input_pearl_millet`)

Cleaned Pearl millet grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Pearl millet grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Pearl millet grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply tempering water (`tempering_water`)

Process water for grain tempering is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Process water for grain tempering
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Process water for grain tempering physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply grid electricity to conditioning (`conditioning_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply purchased steam to conditioning (`conditioning_purchased_steam`)

Purchased steam is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Purchased steam physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply purchased hot water to conditioning (`conditioning_purchased_hot_water`)

Purchased hot water is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Purchased hot water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

###### Transfer tempered Common wheat grain (`tempered_common_wheat_grain`)

Tempered Common wheat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Common wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Common wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer tempered Durum wheat grain (`tempered_durum_wheat_grain`)

Tempered Durum wheat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Durum wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Durum wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer tempered Rye grain (`tempered_rye_grain`)

Tempered Rye grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Rye grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer tempered Barley grain (`tempered_barley_grain`)

Tempered Barley grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Barley grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Barley grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer tempered Oat grain (`tempered_oats_grain`)

Tempered Oat grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Oat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Oat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer tempered Maize grain (`tempered_maize_grain`)

Tempered Maize grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Maize grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer tempered Sorghum grain (`tempered_sorghum_grain`)

Tempered Sorghum grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Sorghum grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Sorghum grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Transfer tempered Pearl millet grain (`tempered_pearl_millet_grain`)

Tempered Pearl millet grain is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Pearl millet grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Pearl millet grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

###### Remove conditioning condensate (`conditioning_condensate`)

Grain conditioning condensate is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grain conditioning condensate
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grain conditioning condensate physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

No atomic exchange is declared in this group for the current PCR.


### Process: Dehulling, milling and sieving (`dehulling_milling_sieving`)

#### Inputs

##### Product flows

###### Mill cleaned Common wheat grain (`milling_cleaned_common_wheat`)

Cleaned Common wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Common wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Common wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill tempered Common wheat grain (`milling_tempered_common_wheat`)

Tempered Common wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Common wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Common wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill cleaned Durum wheat grain (`milling_cleaned_durum_wheat`)

Cleaned Durum wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Durum wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Durum wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill tempered Durum wheat grain (`milling_tempered_durum_wheat`)

Tempered Durum wheat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Durum wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Durum wheat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill cleaned Rye grain (`milling_cleaned_rye`)

Cleaned Rye grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Rye grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill tempered Rye grain (`milling_tempered_rye`)

Tempered Rye grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Rye grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill cleaned Barley grain (`milling_cleaned_barley`)

Cleaned Barley grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Barley grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Barley grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill tempered Barley grain (`milling_tempered_barley`)

Tempered Barley grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Barley grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Barley grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill cleaned Oat grain (`milling_cleaned_oats`)

Cleaned Oat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Oat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Oat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill tempered Oat grain (`milling_tempered_oats`)

Tempered Oat grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Oat grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Oat grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill cleaned Maize grain (`milling_cleaned_maize`)

Cleaned Maize grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Maize grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill tempered Maize grain (`milling_tempered_maize`)

Tempered Maize grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Maize grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill cleaned Sorghum grain (`milling_cleaned_sorghum`)

Cleaned Sorghum grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Sorghum grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Sorghum grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill tempered Sorghum grain (`milling_tempered_sorghum`)

Tempered Sorghum grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Sorghum grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Sorghum grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill cleaned Pearl millet grain (`milling_cleaned_pearl_millet`)

Cleaned Pearl millet grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cleaned Pearl millet grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cleaned Pearl millet grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Mill tempered Pearl millet grain (`milling_tempered_pearl_millet`)

Tempered Pearl millet grain is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Tempered Pearl millet grain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Tempered Pearl millet grain physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply grid electricity to milling (`milling_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply compressed air to milling (`milling_compressed_air`)

Compressed air is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Compressed air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply cooling water to milling equipment (`milling_cooling_water`)

Cooling water is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cooling water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

###### Produce common wheat groats (`intermediate_common_wheat_groats`)

Common wheat groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce common wheat meal (`intermediate_common_wheat_meal`)

Common wheat meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Common wheat bran (`coproduct_common_wheat_bran`)

Common wheat bran is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat bran
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat bran physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Common wheat germ (`coproduct_common_wheat_germ`)

Common wheat germ is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat germ
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat germ physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce durum wheat groats (`intermediate_durum_wheat_groats`)

Durum wheat groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce durum wheat meal (`intermediate_durum_wheat_meal`)

Durum wheat meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Durum wheat bran (`coproduct_durum_wheat_bran`)

Durum wheat bran is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat bran
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat bran physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Durum wheat germ (`coproduct_durum_wheat_germ`)

Durum wheat germ is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat germ
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat germ physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce rye groats (`intermediate_rye_groats`)

Rye groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce rye meal (`intermediate_rye_meal`)

Rye meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Rye bran (`coproduct_rye_bran`)

Rye bran is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye bran
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye bran physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Rye germ (`coproduct_rye_germ`)

Rye germ is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye germ
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye germ physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce barley groats (`intermediate_barley_groats`)

Barley groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce barley meal (`intermediate_barley_meal`)

Barley meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Barley hulls (`coproduct_barley_bran`)

Barley hulls is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley hulls
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley hulls physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Barley germ (`coproduct_barley_germ`)

Barley germ is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley germ
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley germ physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce oats groats (`intermediate_oats_groats`)

Oats groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce oats meal (`intermediate_oats_meal`)

Oats meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Oat hulls (`coproduct_oats_bran`)

Oat hulls is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oat hulls
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oat hulls physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Oat germ (`coproduct_oats_germ`)

Oat germ is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oat germ
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oat germ physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce maize groats (`intermediate_maize_groats`)

Maize groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce maize meal (`intermediate_maize_meal`)

Maize meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Maize bran (`coproduct_maize_bran`)

Maize bran is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize bran
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize bran physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Maize germ (`coproduct_maize_germ`)

Maize germ is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize germ
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize germ physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce sorghum groats (`intermediate_sorghum_groats`)

Sorghum groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce sorghum meal (`intermediate_sorghum_meal`)

Sorghum meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Sorghum bran (`coproduct_sorghum_bran`)

Sorghum bran is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum bran
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum bran physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Sorghum germ (`coproduct_sorghum_germ`)

Sorghum germ is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum germ
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum germ physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce pearl millet groats (`intermediate_pearl_millet_groats`)

Pearl millet groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce pearl millet meal (`intermediate_pearl_millet_meal`)

Pearl millet meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Pearl millet bran (`coproduct_pearl_millet_bran`)

Pearl millet bran is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet bran
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet bran physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate Pearl millet germ (`coproduct_pearl_millet_germ`)

Pearl millet germ is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet germ
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet germ physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

###### Remove common wheat milling tailings (`milling_tailings_common_wheat`)

Common wheat milling tailings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat milling tailings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat milling tailings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove durum wheat milling tailings (`milling_tailings_durum_wheat`)

Durum wheat milling tailings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat milling tailings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat milling tailings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rye milling tailings (`milling_tailings_rye`)

Rye milling tailings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye milling tailings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye milling tailings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove barley milling tailings (`milling_tailings_barley`)

Barley milling tailings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley milling tailings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley milling tailings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove oats milling tailings (`milling_tailings_oats`)

Oats milling tailings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats milling tailings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats milling tailings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove maize milling tailings (`milling_tailings_maize`)

Maize milling tailings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize milling tailings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize milling tailings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove sorghum milling tailings (`milling_tailings_sorghum`)

Sorghum milling tailings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum milling tailings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum milling tailings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove pearl millet milling tailings (`milling_tailings_pearl_millet`)

Pearl millet milling tailings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet milling tailings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet milling tailings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove alloy steel milling wear debris (`milling_steel_wear`)

Alloy steel milling wear debris is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Alloy steel milling wear debris
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Alloy steel milling wear debris physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove polyester sieve mesh waste (`milling_sieve_mesh_waste`)

Polyester sieve mesh waste is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Polyester sieve mesh waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Polyester sieve mesh waste physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove milling cooling wastewater (`milling_cooling_wastewater`)

Milling cooling wastewater is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Milling cooling wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Milling cooling wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

###### Release particulate matter below 10 µm (`milling_pm10`)

Particulate matter below 10 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 10 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 10 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 2.5 µm (`milling_pm25`)

Particulate matter below 2.5 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 2.5 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.



### Process: Pellet forming and cooling (`pellet_forming_cooling`)

#### Inputs

##### Product flows

###### Pelletise common wheat meal (`pellet_input_common_wheat_meal`)

Common wheat meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Pelletise durum wheat meal (`pellet_input_durum_wheat_meal`)

Durum wheat meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Pelletise rye meal (`pellet_input_rye_meal`)

Rye meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Pelletise barley meal (`pellet_input_barley_meal`)

Barley meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Pelletise oats meal (`pellet_input_oats_meal`)

Oats meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Pelletise maize meal (`pellet_input_maize_meal`)

Maize meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Pelletise sorghum meal (`pellet_input_sorghum_meal`)

Sorghum meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Pelletise pearl millet meal (`pellet_input_pearl_millet_meal`)

Pearl millet meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply pellet conditioning water (`pellet_conditioning_water`)

Process water for pellet conditioning is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Process water for pellet conditioning
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Process water for pellet conditioning physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply grid electricity to pellet forming (`pellet_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply purchased steam to pellet conditioning (`pellet_purchased_steam`)

Purchased steam is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Purchased steam physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply purchased hot water to pellet conditioning (`pellet_purchased_hot_water`)

Purchased hot water is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Purchased hot water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

###### Produce common wheat pellets (`intermediate_common_wheat_pellets`)

Common wheat pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate common wheat pellet fines (`pellet_fines_common_wheat`)

Common wheat pellet fines is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat pellet fines physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce durum wheat pellets (`intermediate_durum_wheat_pellets`)

Durum wheat pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate durum wheat pellet fines (`pellet_fines_durum_wheat`)

Durum wheat pellet fines is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat pellet fines physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce rye pellets (`intermediate_rye_pellets`)

Rye pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate rye pellet fines (`pellet_fines_rye`)

Rye pellet fines is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye pellet fines physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce barley pellets (`intermediate_barley_pellets`)

Barley pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate barley pellet fines (`pellet_fines_barley`)

Barley pellet fines is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley pellet fines physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce oats pellets (`intermediate_oats_pellets`)

Oats pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate oats pellet fines (`pellet_fines_oats`)

Oats pellet fines is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats pellet fines physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce maize pellets (`intermediate_maize_pellets`)

Maize pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate maize pellet fines (`pellet_fines_maize`)

Maize pellet fines is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize pellet fines physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce sorghum pellets (`intermediate_sorghum_pellets`)

Sorghum pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate sorghum pellet fines (`pellet_fines_sorghum`)

Sorghum pellet fines is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum pellet fines physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce pearl millet pellets (`intermediate_pearl_millet_pellets`)

Pearl millet pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Separate pearl millet pellet fines (`pellet_fines_pearl_millet`)

Pearl millet pellet fines is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet pellet fines physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

###### Remove off-spec common wheat pellets (`offspec_pellet_common_wheat`)

Off-spec common wheat pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec common wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec common wheat pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec durum wheat pellets (`offspec_pellet_durum_wheat`)

Off-spec durum wheat pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec durum wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec durum wheat pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec rye pellets (`offspec_pellet_rye`)

Off-spec rye pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec rye pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec rye pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec barley pellets (`offspec_pellet_barley`)

Off-spec barley pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec barley pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec barley pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec oats pellets (`offspec_pellet_oats`)

Off-spec oats pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec oats pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec oats pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec maize pellets (`offspec_pellet_maize`)

Off-spec maize pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec maize pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec maize pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec sorghum pellets (`offspec_pellet_sorghum`)

Off-spec sorghum pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec sorghum pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec sorghum pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec pearl millet pellets (`offspec_pellet_pearl_millet`)

Off-spec pearl millet pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec pearl millet pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec pearl millet pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove pellet conditioning condensate (`pellet_conditioning_condensate`)

Pellet conditioning condensate is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pellet conditioning condensate
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pellet conditioning condensate physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

###### Release particulate matter below 10 µm (`pellet_pm10`)

Particulate matter below 10 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 10 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 10 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 2.5 µm (`pellet_pm25`)

Particulate matter below 2.5 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pellet_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 2.5 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.



### Process: Packaging, finished storage and release (`packaging_storage_release`)

#### Inputs

##### Product flows

###### Receive common wheat groats for release (`release_input_common_wheat_groats`)

Common wheat groats is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive common wheat meal for release (`release_input_common_wheat_meal`)

Common wheat meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive common wheat pellets for release (`release_input_common_wheat_pellets`)

Common wheat pellets is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive durum wheat groats for release (`release_input_durum_wheat_groats`)

Durum wheat groats is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive durum wheat meal for release (`release_input_durum_wheat_meal`)

Durum wheat meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive durum wheat pellets for release (`release_input_durum_wheat_pellets`)

Durum wheat pellets is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive rye groats for release (`release_input_rye_groats`)

Rye groats is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive rye meal for release (`release_input_rye_meal`)

Rye meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive rye pellets for release (`release_input_rye_pellets`)

Rye pellets is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive barley groats for release (`release_input_barley_groats`)

Barley groats is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive barley meal for release (`release_input_barley_meal`)

Barley meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive barley pellets for release (`release_input_barley_pellets`)

Barley pellets is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive oats groats for release (`release_input_oats_groats`)

Oats groats is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive oats meal for release (`release_input_oats_meal`)

Oats meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive oats pellets for release (`release_input_oats_pellets`)

Oats pellets is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive maize groats for release (`release_input_maize_groats`)

Maize groats is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive maize meal for release (`release_input_maize_meal`)

Maize meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive maize pellets for release (`release_input_maize_pellets`)

Maize pellets is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive sorghum groats for release (`release_input_sorghum_groats`)

Sorghum groats is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive sorghum meal for release (`release_input_sorghum_meal`)

Sorghum meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive sorghum pellets for release (`release_input_sorghum_pellets`)

Sorghum pellets is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive pearl millet groats for release (`release_input_pearl_millet_groats`)

Pearl millet groats is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive pearl millet meal for release (`release_input_pearl_millet_meal`)

Pearl millet meal is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Receive pearl millet pellets for release (`release_input_pearl_millet_pellets`)

Pearl millet pellets is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply grid electricity to finished storage (`release_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply low-density polyethylene bag (`pack_ldpe_bag`)

Low-density polyethylene bag is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Low-density polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Low-density polyethylene bag physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply woven polypropylene sack (`pack_pp_sack`)

Woven polypropylene sack is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Woven polypropylene sack physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply kraft paper sack (`pack_kraft_sack`)

Kraft paper sack is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Kraft paper sack physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply corrugated fibreboard carton (`pack_fibreboard_carton`)

Corrugated fibreboard carton is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Corrugated fibreboard carton
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Corrugated fibreboard carton physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply wooden pallet (`pack_wood_pallet`)

Wooden pallet is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Wooden pallet physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply steel strapping (`pack_steel_strap`)

Steel strapping is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Steel strapping
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Steel strapping physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply low-density polyethylene stretch film (`pack_ldpe_stretch_film`)

Low-density polyethylene stretch film is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Low-density polyethylene stretch film physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply Ammonia refrigerant R717 makeup (`release_r717_makeup`)

Ammonia refrigerant R717 makeup is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Ammonia refrigerant R717 makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Ammonia refrigerant R717 makeup physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply Carbon dioxide refrigerant R744 makeup (`release_r744_makeup`)

Carbon dioxide refrigerant R744 makeup is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Carbon dioxide refrigerant R744 makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Carbon dioxide refrigerant R744 makeup physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply Propane refrigerant R290 makeup (`release_r290_makeup`)

Propane refrigerant R290 makeup is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Propane refrigerant R290 makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Propane refrigerant R290 makeup physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

###### Release common wheat groats (`final_common_wheat_groats`)

Common wheat groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Common wheat groats only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release common wheat meal (`final_common_wheat_meal`)

Common wheat meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Common wheat meal only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release common wheat pellets (`final_common_wheat_pellets`)

Common wheat pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Common wheat pellets only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release durum wheat groats (`final_durum_wheat_groats`)

Durum wheat groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Durum wheat groats only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release durum wheat meal (`final_durum_wheat_meal`)

Durum wheat meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Durum wheat meal only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release durum wheat pellets (`final_durum_wheat_pellets`)

Durum wheat pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Durum wheat pellets only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release rye groats (`final_rye_groats`)

Rye groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Rye groats only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release rye meal (`final_rye_meal`)

Rye meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Rye meal only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release rye pellets (`final_rye_pellets`)

Rye pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Rye pellets only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release barley groats (`final_barley_groats`)

Barley groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Barley groats only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release barley meal (`final_barley_meal`)

Barley meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Barley meal only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release barley pellets (`final_barley_pellets`)

Barley pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Barley pellets only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release oats groats (`final_oats_groats`)

Oats groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Oats groats only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release oats meal (`final_oats_meal`)

Oats meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Oats meal only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release oats pellets (`final_oats_pellets`)

Oats pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Oats pellets only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release maize groats (`final_maize_groats`)

Maize groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Maize groats only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release maize meal (`final_maize_meal`)

Maize meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Maize meal only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release maize pellets (`final_maize_pellets`)

Maize pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Maize pellets only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release sorghum groats (`final_sorghum_groats`)

Sorghum groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Sorghum groats only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release sorghum meal (`final_sorghum_meal`)

Sorghum meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Sorghum meal only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release sorghum pellets (`final_sorghum_pellets`)

Sorghum pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Sorghum pellets only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release pearl millet groats (`final_pearl_millet_groats`)

Pearl millet groats is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Pearl millet groats only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release pearl millet meal (`final_pearl_millet_meal`)

Pearl millet meal is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Pearl millet meal only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release pearl millet pellets (`final_pearl_millet_pellets`)

Pearl millet pellets is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Exactly one final-product row shall carry the 1 kg reference amount for the locked species and product form; record Pearl millet pellets only when it is that declared reference product.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

###### Remove off-spec common wheat groats (`release_reject_common_wheat_groats`)

Off-spec common wheat groats is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec common wheat groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec common wheat groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec common wheat meal (`release_reject_common_wheat_meal`)

Off-spec common wheat meal is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec common wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec common wheat meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec common wheat pellets (`release_reject_common_wheat_pellets`)

Off-spec common wheat pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec common wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec common wheat pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec durum wheat groats (`release_reject_durum_wheat_groats`)

Off-spec durum wheat groats is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec durum wheat groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec durum wheat groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec durum wheat meal (`release_reject_durum_wheat_meal`)

Off-spec durum wheat meal is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec durum wheat meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec durum wheat meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec durum wheat pellets (`release_reject_durum_wheat_pellets`)

Off-spec durum wheat pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec durum wheat pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec durum wheat pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec rye groats (`release_reject_rye_groats`)

Off-spec rye groats is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec rye groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec rye groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec rye meal (`release_reject_rye_meal`)

Off-spec rye meal is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec rye meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec rye meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec rye pellets (`release_reject_rye_pellets`)

Off-spec rye pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec rye pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec rye pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec barley groats (`release_reject_barley_groats`)

Off-spec barley groats is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec barley groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec barley groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec barley meal (`release_reject_barley_meal`)

Off-spec barley meal is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec barley meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec barley meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec barley pellets (`release_reject_barley_pellets`)

Off-spec barley pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec barley pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec barley pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec oats groats (`release_reject_oats_groats`)

Off-spec oats groats is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec oats groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec oats groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec oats meal (`release_reject_oats_meal`)

Off-spec oats meal is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec oats meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec oats meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec oats pellets (`release_reject_oats_pellets`)

Off-spec oats pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec oats pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec oats pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec maize groats (`release_reject_maize_groats`)

Off-spec maize groats is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec maize groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec maize groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec maize meal (`release_reject_maize_meal`)

Off-spec maize meal is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec maize meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec maize meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec maize pellets (`release_reject_maize_pellets`)

Off-spec maize pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec maize pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec maize pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec sorghum groats (`release_reject_sorghum_groats`)

Off-spec sorghum groats is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec sorghum groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec sorghum groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec sorghum meal (`release_reject_sorghum_meal`)

Off-spec sorghum meal is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec sorghum meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec sorghum meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec sorghum pellets (`release_reject_sorghum_pellets`)

Off-spec sorghum pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec sorghum pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec sorghum pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec pearl millet groats (`release_reject_pearl_millet_groats`)

Off-spec pearl millet groats is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec pearl millet groats
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec pearl millet groats physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec pearl millet meal (`release_reject_pearl_millet_meal`)

Off-spec pearl millet meal is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec pearl millet meal
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec pearl millet meal physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove off-spec pearl millet pellets (`release_reject_pearl_millet_pellets`)

Off-spec pearl millet pellets is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Off-spec pearl millet pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Off-spec pearl millet pellets physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove low-density polyethylene bag scrap (`scrap_ldpe_bag`)

Low-density polyethylene bag scrap is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Low-density polyethylene bag scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Low-density polyethylene bag scrap physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove woven polypropylene sack scrap (`scrap_pp_sack`)

Woven polypropylene sack scrap is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Woven polypropylene sack scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Woven polypropylene sack scrap physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove kraft paper sack scrap (`scrap_kraft_sack`)

Kraft paper sack scrap is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Kraft paper sack scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Kraft paper sack scrap physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove corrugated fibreboard carton scrap (`scrap_fibreboard_carton`)

Corrugated fibreboard carton scrap is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Corrugated fibreboard carton scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Corrugated fibreboard carton scrap physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove wooden pallet scrap (`scrap_wood_pallet`)

Wooden pallet scrap is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Wooden pallet scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Wooden pallet scrap physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove steel strapping scrap (`scrap_steel_strap`)

Steel strapping scrap is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Steel strapping scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Steel strapping scrap physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove low-density polyethylene stretch film scrap (`scrap_ldpe_stretch_film`)

Low-density polyethylene stretch film scrap is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Low-density polyethylene stretch film scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Low-density polyethylene stretch film scrap physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

###### Release Ammonia R717 to air (`release_r717_release`)

Ammonia R717 to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Ammonia R717 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Ammonia R717 to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release Carbon dioxide R744 to air (`release_r744_release`)

Carbon dioxide R744 to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Carbon dioxide R744 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Carbon dioxide R744 to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release Propane R290 to air (`release_r290_release`)

Propane R290 to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Propane R290 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Propane R290 to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 10 µm (`release_pm10`)

Particulate matter below 10 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 10 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 10 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 2.5 µm (`release_pm25`)

Particulate matter below 2.5 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 2.5 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.



### Process: Dust collection and control (`dust_collection_control`)

#### Inputs

##### Product flows

###### Supply grid electricity to dust control (`dust_control_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply compressed air to fabric-filter cleaning (`dust_control_compressed_air`)

Compressed air is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Compressed air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply polyester needle-felt filter fabric (`dust_control_filter_fabric`)

Polyester needle-felt filter fabric is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Polyester needle-felt filter fabric
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Polyester needle-felt filter fabric physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply process water to wet scrubber (`dust_control_scrubber_water`)

Process water for wet scrubbing is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Process water for wet scrubbing
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_inputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Process water for wet scrubbing physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

No atomic exchange is declared in this group for the current PCR.

##### Waste flows

###### Remove captured common wheat dust (`captured_dust_common_wheat`)

Captured common wheat dust is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Captured common wheat dust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Captured common wheat dust physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove captured durum wheat dust (`captured_dust_durum_wheat`)

Captured durum wheat dust is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Captured durum wheat dust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Captured durum wheat dust physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove captured rye dust (`captured_dust_rye`)

Captured rye dust is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Captured rye dust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Captured rye dust physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove captured barley dust (`captured_dust_barley`)

Captured barley dust is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Captured barley dust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Captured barley dust physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove captured oats dust (`captured_dust_oats`)

Captured oats dust is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Captured oats dust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Captured oats dust physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove captured maize dust (`captured_dust_maize`)

Captured maize dust is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Captured maize dust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Captured maize dust physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove captured sorghum dust (`captured_dust_sorghum`)

Captured sorghum dust is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Captured sorghum dust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Captured sorghum dust physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove captured pearl millet dust (`captured_dust_pearl_millet`)

Captured pearl millet dust is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Captured pearl millet dust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Captured pearl millet dust physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove spent polyester filter fabric (`spent_filter_fabric`)

Spent polyester filter fabric is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Spent polyester filter fabric
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Spent polyester filter fabric physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove grain-dust scrubber wastewater (`scrubber_wastewater`)

Grain-dust scrubber wastewater is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grain-dust scrubber wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grain-dust scrubber wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

###### Release residual particulate matter below 10 µm (`controlled_pm10`)

Particulate matter below 10 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 10 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 10 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release residual particulate matter below 2.5 µm (`controlled_pm25`)

Particulate matter below 2.5 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_outputs`
- Sources: `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 2.5 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.



### Process: Hygiene and equipment cleaning (`hygiene_cleaning`)

#### Inputs

##### Product flows

###### Supply grid electricity to hygiene cleaning (`hygiene_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply compressed air to dry cleaning (`hygiene_compressed_air`)

Compressed air is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Compressed air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply process water to hygiene cleaning (`hygiene_process_water`)

Process water for hygiene cleaning is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Process water for hygiene cleaning
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Process water for hygiene cleaning physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply purchased hot water to hygiene cleaning (`hygiene_purchased_hot_water`)

Purchased hot water is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Purchased hot water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply purchased steam to hygiene cleaning (`hygiene_purchased_steam`)

Purchased steam is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Purchased steam physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply sodium hydroxide (`hygiene_sodium_hydroxide`)

Sodium hydroxide is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sodium hydroxide physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply nitric acid (`hygiene_nitric_acid`)

Nitric acid is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Nitric acid physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply phosphoric acid (`hygiene_phosphoric_acid`)

Phosphoric acid is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Phosphoric acid physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply peracetic acid (`hygiene_peracetic_acid`)

Peracetic acid is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Peracetic acid physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply sodium hypochlorite (`hygiene_sodium_hypochlorite`)

Sodium hypochlorite is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sodium hypochlorite physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

No atomic exchange is declared in this group for the current PCR.

##### Waste flows

###### Remove common wheat dry sweepings (`dry_sweepings_common_wheat`)

Common wheat dry sweepings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Common wheat dry sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Common wheat dry sweepings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove durum wheat dry sweepings (`dry_sweepings_durum_wheat`)

Durum wheat dry sweepings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Durum wheat dry sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Durum wheat dry sweepings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove rye dry sweepings (`dry_sweepings_rye`)

Rye dry sweepings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Rye dry sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Rye dry sweepings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove barley dry sweepings (`dry_sweepings_barley`)

Barley dry sweepings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Barley dry sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Barley dry sweepings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove oats dry sweepings (`dry_sweepings_oats`)

Oats dry sweepings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oats dry sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oats dry sweepings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove maize dry sweepings (`dry_sweepings_maize`)

Maize dry sweepings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Maize dry sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Maize dry sweepings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove sorghum dry sweepings (`dry_sweepings_sorghum`)

Sorghum dry sweepings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sorghum dry sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sorghum dry sweepings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove pearl millet dry sweepings (`dry_sweepings_pearl_millet`)

Pearl millet dry sweepings is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pearl millet dry sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pearl millet dry sweepings physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove hygiene cleaning wastewater (`hygiene_wastewater`)

Hygiene cleaning wastewater is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Hygiene cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Hygiene cleaning wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove polypropylene cleaning-wipe waste (`hygiene_wipe_waste`)

Polypropylene cleaning-wipe waste is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Polypropylene cleaning-wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hygiene_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Polypropylene cleaning-wipe waste physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

No atomic exchange is declared in this group for the current PCR.


### Process: Onsite heat generation (`onsite_heat_generation`)

#### Inputs

##### Product flows

###### Supply grid electricity to onsite heat generation (`heat_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply boiler feedwater (`boiler_feedwater`)

Boiler feedwater is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Boiler feedwater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Boiler feedwater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply natural gas (`heat_natural_gas`)

Natural gas is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Natural gas physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply diesel fuel (`heat_diesel`)

Diesel fuel is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Diesel fuel physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply liquefied petroleum gas (`heat_lpg`)

Liquefied petroleum gas is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Liquefied petroleum gas physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply light fuel oil (`heat_light_fuel_oil`)

Light fuel oil is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Light fuel oil
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Light fuel oil physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

No atomic exchange is declared in this group for the current PCR.

##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

###### Produce onsite steam (`onsite_steam`)

Onsite steam is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Onsite steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Onsite steam physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Produce onsite hot water (`onsite_hot_water`)

Onsite hot water is recorded as one atomic output product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Onsite hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Onsite hot water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

###### Remove boiler blowdown wastewater (`boiler_blowdown`)

Boiler blowdown wastewater is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Boiler blowdown wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove light fuel oil tank sludge (`fuel_oil_tank_sludge`)

Light fuel oil tank sludge is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Light fuel oil tank sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Light fuel oil tank sludge physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

###### Release fossil carbon dioxide (`combustion_co2`)

Carbon dioxide, fossil, to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Carbon dioxide, fossil, to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release nitrogen oxides (`combustion_nox`)

Nitrogen oxides to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Nitrogen oxides to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release sulfur oxides (`combustion_sox`)

Sulfur oxides to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sulfur oxides to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release carbon monoxide (`combustion_co`)

Carbon monoxide to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Carbon monoxide to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 10 µm (`combustion_pm10`)

Particulate matter below 10 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 10 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 10 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release particulate matter below 2.5 µm (`combustion_pm25`)

Particulate matter below 2.5 µm to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Particulate matter below 2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Particulate matter below 2.5 µm to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release methane (`combustion_ch4`)

Methane to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Methane to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release nitrous oxide (`combustion_n2o`)

Nitrous oxide to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Nitrous oxide to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.



### Process: Onsite wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Supply grid electricity to wastewater treatment (`wwt_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grid electricity, medium voltage physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply sodium hydroxide to wastewater treatment (`wwt_sodium_hydroxide`)

Sodium hydroxide is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sodium hydroxide physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply sulfuric acid to wastewater treatment (`wwt_sulfuric_acid`)

Sulfuric acid is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Sulfuric acid physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply ferric chloride to wastewater treatment (`wwt_ferric_chloride`)

Ferric chloride is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Ferric chloride physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply calcium hydroxide to wastewater treatment (`wwt_calcium_hydroxide`)

Calcium hydroxide is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Calcium hydroxide physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Supply anionic polyacrylamide to wastewater treatment (`wwt_polyacrylamide`)

Anionic polyacrylamide is recorded as one atomic input product exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Anionic polyacrylamide physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Waste flows

###### Treat wet grain cleaning wastewater (`wwt_grain_washwater`)

Wet grain cleaning wastewater is recorded as one atomic input waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Wet grain cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Wet grain cleaning wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Treat grain conditioning condensate (`wwt_conditioning_condensate`)

Grain conditioning condensate is recorded as one atomic input waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grain conditioning condensate
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grain conditioning condensate physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Treat milling cooling wastewater (`wwt_milling_cooling_water`)

Milling cooling wastewater is recorded as one atomic input waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Milling cooling wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Milling cooling wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Treat pellet conditioning condensate (`wwt_pellet_condensate`)

Pellet conditioning condensate is recorded as one atomic input waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Pellet conditioning condensate
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Pellet conditioning condensate physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Treat grain-dust scrubber wastewater (`wwt_scrubber_water`)

Grain-dust scrubber wastewater is recorded as one atomic input waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Grain-dust scrubber wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Grain-dust scrubber wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Treat hygiene cleaning wastewater (`wwt_hygiene_water`)

Hygiene cleaning wastewater is recorded as one atomic input waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Hygiene cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Hygiene cleaning wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Treat boiler blowdown wastewater (`wwt_boiler_blowdown`)

Boiler blowdown wastewater is recorded as one atomic input waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_inputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Boiler blowdown wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

No atomic exchange is declared in this group for the current PCR.

#### Outputs

##### Product flows

No atomic exchange is declared in this group for the current PCR.

##### Waste flows

###### Transfer treated cereal-mill wastewater (`treated_wastewater`)

Treated cereal-mill wastewater is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Treated cereal-mill wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Treated cereal-mill wastewater physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove cereal-mill wastewater-treatment sludge (`wwt_sludge`)

Cereal-mill wastewater-treatment sludge is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cereal-mill wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cereal-mill wastewater-treatment sludge physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Remove cereal-mill wastewater-treatment grit (`wwt_grit`)

Cereal-mill wastewater-treatment grit is recorded as one atomic output waste exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Cereal-mill wastewater-treatment grit
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Cereal-mill wastewater-treatment grit physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.


##### Elementary flows

###### Release biochemical oxygen demand (`wwt_bod5`)

Biochemical oxygen demand to water is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Biochemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Biochemical oxygen demand to water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release chemical oxygen demand (`wwt_cod`)

Chemical oxygen demand to water is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Chemical oxygen demand to water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release total suspended solids (`wwt_tss`)

Total suspended solids to water is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Total suspended solids to water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release total nitrogen (`wwt_total_n`)

Total nitrogen to water is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Total nitrogen to water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release total phosphorus (`wwt_total_p`)

Total phosphorus to water is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Total phosphorus to water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release oil content (`wwt_oil_grease`)

Oil content to water is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Oil content to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Oil content to water physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release methane from wastewater treatment (`wwt_methane`)

Methane to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Methane to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.

###### Release nitrous oxide from wastewater treatment (`wwt_n2o`)

Nitrous oxide to air is recorded as one atomic output elementary exchange in this process; it does not represent any other grain, material, carrier, waste, pollutant, or emission.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product at the manufacturing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_outputs`
- Sources: `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact flow-hybrid-search and public state-100 direct-read confirmation.
- Applicability: Record only when Nitrous oxide to air physically crosses this process boundary for the locked cereal species, product form, and actual route; otherwise mark this atomic row not applicable.
- Uncertainty: Retain instrument resolution, calibration status, sampling basis, temporal coverage, and the batch reconciliation difference.



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | all processes | Use product-specific recipes, batch mass records, submeters, production time, and equipment state to avoid allocation wherever possible. | `eu-pef-2021-2279` |
| `no_species_average` | all outputs | Never allocate or average one cereal species to another species or one product form to another form. | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `internal_transfer` | internal intermediates | Record an internal intermediate once as an output and once as the matching downstream input; do not add an upstream burden twice. | `eu-pef-2021-2279` |
| `fines_rework` | pellet fines | Keep fines returned within the same locked batch inside its mass balance; record exported fines as a separate species-specific product output. | `us-epa-ap42-grain-2003`, `eu-pef-2021-2279` |
| `co_product_identity` | bran, hulls, and germ | Keep every named species-specific bran, hull, and germ output separate with measured mass, destination, and economic or physical function. | `codex-cxs-155-1985`, `codex-cxs-178-1991`, `eu-pef-2021-2279` |
| `physical_relation` | co-products | If allocation cannot be avoided, use a documented physical relationship only when it represents the causal production relationship. | `eu-pef-2021-2279` |
| `economic_fallback` | co-products | Use economic allocation only when the study method requires it and a physical relation is not representative; retain prices, period, currency, and sensitivity. | `eu-pef-2021-2279` |
| `waste_treatment` | wastes | Do not assign avoided burdens or credits without an explicit downstream treatment model and disclosed method. | `eu-pef-2021-2279` |
| `allocation_disclosure` | published dataset | Disclose the allocation hierarchy, quantities, factors, co-product destinations, internal recycling, and unresolved choices. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_inputs` | `grain_receiving_storage` | Grain receiving and storage inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all grain receiving and storage input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_receiving_outputs` | `grain_receiving_storage` | Grain receiving and storage outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all grain receiving and storage output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_cleaning_inputs` | `grain_cleaning_grading` | Grain cleaning and grading inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all grain cleaning and grading input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_cleaning_outputs` | `grain_cleaning_grading` | Grain cleaning and grading outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all grain cleaning and grading output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_conditioning_inputs` | `conditioning_tempering` | Conditioning and tempering inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all conditioning and tempering input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_conditioning_outputs` | `conditioning_tempering` | Conditioning and tempering outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all conditioning and tempering output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_milling_inputs` | `dehulling_milling_sieving` | Dehulling, milling and sieving inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all dehulling, milling and sieving input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_milling_outputs` | `dehulling_milling_sieving` | Dehulling, milling and sieving outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all dehulling, milling and sieving output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_pellet_inputs` | `pellet_forming_cooling` | Pellet forming and cooling inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all pellet forming and cooling input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_pellet_outputs` | `pellet_forming_cooling` | Pellet forming and cooling outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all pellet forming and cooling output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_release_inputs` | `packaging_storage_release` | Packaging, finished storage and release inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all packaging, finished storage and release input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_release_outputs` | `packaging_storage_release` | Packaging, finished storage and release outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all packaging, finished storage and release output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_dust_inputs` | `dust_collection_control` | Dust collection and control inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all dust collection and control input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_dust_outputs` | `dust_collection_control` | Dust collection and control outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all dust collection and control output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_hygiene_inputs` | `hygiene_cleaning` | Hygiene and equipment cleaning inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all hygiene and equipment cleaning input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_hygiene_outputs` | `hygiene_cleaning` | Hygiene and equipment cleaning outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all hygiene and equipment cleaning output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_heat_inputs` | `onsite_heat_generation` | Onsite heat generation inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all onsite heat generation input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_heat_outputs` | `onsite_heat_generation` | Onsite heat generation outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all onsite heat generation output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |
| `cp_wwt_inputs` | `onsite_wastewater_treatment` | Onsite wastewater treatment inputs | batch input records | batch id; row_id; exact flow identity; supplier or meter id; opening reading; closing reading; gross amount; tare; net amount; unit; timestamp; allocation key | Use calibrated scales, utility meters, delivery documents, stock movements, and equipment logs; preserve the native unit of each atomic row. | native unit declared on the atomic flow card | each batch and each meter interval | complete production campaign | all onsite wastewater treatment input points | Sum only records attributable to the locked species, product form, and route; normalize after the net conforming output is known. | calibration records; supplier specifications; meter identifiers; batch traceability; reconciliation record |
| `cp_wwt_outputs` | `onsite_wastewater_treatment` | Onsite wastewater treatment outputs | batch output and emission records | batch id; row_id; exact flow identity; destination or compartment; gross amount; tare; net amount; concentration; volume; emission factor source; unit; timestamp | Use calibrated scales, discharge meters, laboratory results, direct emission measurements, and documented calculations from collected activity data. | native unit declared on the atomic flow card | each batch or representative monitored interval | complete production campaign | all onsite wastewater treatment output points | Keep every product, co-product, waste, wastewater stream, and elementary emission separate and normalize to the selected final-product mass. | calibration records; laboratory chain of custody; calculation sheet; destination evidence; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference` | every inventory row | normalized amount = batch-attributable amount / net conforming selected final-product mass | batch-attributable amount; selected final-product mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `net_mass` | mass records | net mass = gross mass - tare mass | gross mass; tare mass | net mass | `eu-pef-2021-2279` |
| `dry_matter` | moisture-sensitive flows | dry mass = measured mass × (1 - measured moisture mass fraction) | measured mass; batch moisture result | dry mass | `fao-grain-milling-quality-1995` |
| `process_mass_balance` | every process | reconciliation difference = total measured inputs - total measured products - total measured co-products - total measured wastes - stock change - measured releases | process input and output records | reconciliation difference | `eu-pef-2021-2279` |
| `shared_meter` | shared utilities | batch amount = meter-period amount × documented causal allocation key; use runtime only when equipment load is demonstrably stable | meter readings; batch timestamps; equipment state; allocation key | batch-attributable utility amount | `eu-pef-2021-2279` |
| `refrigerant_loss` | refrigerants | release = opening inventory + additions - closing inventory - documented recovery or transfer | refrigerant inventory and service records | refrigerant release by exact substance | `eu-pef-2021-2279` |
| `dust_balance` | dust control | residual release = dust entering control - captured dust - deposited dust - returned product dust, reconciled with direct monitoring where available | dust capture records; filter records; monitoring results | residual particulate release | `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031` |
| `combustion_emission` | onsite fuel combustion | emission = measured fuel amount × documented fuel-specific factor or direct monitored load; no default factor is supplied by this PCR | fuel record; fuel-specific factor or direct measurement | pollutant mass by elementary flow | `eu-pef-2021-2279`, `ec-jrc-fdm-bref-2019` |
| `wastewater_load` | wastewater pollutants | pollutant load = measured discharge volume × representative measured concentration with unit conversion | flow volume; laboratory concentration; sampling period | pollutant mass by elementary flow | `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279` |
| `packaging_mass` | packaging | packaging mass = issued packaging stock - returned unused stock - verified clean reusable stock change | packaging issue and return records | consumed packaging mass by material | `eu-pef-2021-2279` |
| `final_output_selection` | reference product | exactly one `final_<species>_<form>` row receives the batch net conforming mass; all other final rows are not applicable | product specification; release record; net mass | selected final-product mass | `un-cpc-3-2025`, `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain botanical species, product form, whole or dehulled or degermed state, particle or pellet specification, moisture basis, and release state. | approved product specification and batch traveller |
| `dq_scope` | foreground package | Demonstrate that one package contains one species, one form, and one route. | dataset metadata and process map |
| `dq_traceability` | grain and product | Preserve supplier lot, internal batch, silo or bin, production campaign, and released lot links. | lot genealogy record |
| `dq_calibration` | measured values | Use calibrated scales, meters, samplers, and laboratory instruments within their valid calibration period. | calibration certificates and instrument logs |
| `dq_moisture` | mass conversion | Retain sampling location, test method, timestamp, replicate results, and wet or dry basis. | moisture laboratory record |
| `dq_particle_size` | groats, meal, and pellets | Retain sieve set or pellet measurement method, sample basis, and release result. | particle-size or pellet-size test |
| `dq_temporal` | foreground data | Cover a representative complete production campaign and disclose shutdowns, start-ups, and abnormal batches. | production calendar and exception log |
| `dq_completeness` | inventory | Reconcile every applicable atomic row, including zero or not-applicable decisions, co-products, wastes, wastewater, dust, and direct emissions. | signed completeness matrix |
| `dq_sources` | calculated values | Retain every formula, factor source, unit conversion, and calculation version. | calculation workbook and source register |
| `dq_destinations` | co-products and wastes | Retain quantity, recipient, treatment route, and transfer evidence for every outgoing stream. | weighbridge ticket and transfer document |
| `dq_uncertainty` | all rows | Preserve instrument resolution, sampling uncertainty, missing-data treatment, and reconciliation difference. | uncertainty register |
| `dq_review` | published dataset | Complete independent technical review of identity, boundary, allocation, mass balance, sources, and bilingual machine-field alignment. | signed review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Reference flow shall match the verified CPC 23130 Product flow, Mass property, Units of mass group, and kg unit declared in section 3. | `un-cpc-3-2025` |
| `val_reference_mass` | reference amount | Reference amount shall be 1 kg net conforming product and exclude packaging. | `eu-pef-2021-2279` |
| `val_species` | product identity | Botanical cereal species shall be explicit; “other cereal” is not a valid species identity. | `un-cpc-3-2025` |
| `val_form` | product identity | Exactly one of groats, meal, or pellets shall be declared for the reference product. | `un-cpc-3-2025` |
| `val_one_final_row` | final product | Exactly one `final_<species>_<form>` row shall carry the normalized 1 kg reference amount. | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `val_process_map` | process inventory | Every process section shall match one process-map id and every required process-map row shall have one process section. | `us-epa-ap42-grain-2003` |
| `val_atomic_flow` | inventory cards | Every selected flow shall be one concrete exchange; plural categories, carrier lists, and selector instructions are invalid. | `eu-pef-2021-2279` |
| `val_unlisted_flow` | valid unlisted exchange | Add an exact atomic row before validation when an in-scope species, input, package, co-product, waste, pollutant, or emission is absent. | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `val_uuid_policy` | non-reference UUIDs | Keep a non-reference UUID blank unless exact atomic semantics are confirmed by flow-hybrid-search and public state-100 direct read. | `eu-pef-2021-2279` |
| `val_modes` | inventory amounts | Use only `foreground_record` or `calculated_value`; no fixed default, modelled estimate, or reasoned range is permitted here. | `eu-pef-2021-2279` |
| `val_protocols` | inventory cards | Every collected or calculated card shall link to an existing collection protocol. | `eu-pef-2021-2279` |
| `val_mass_balance` | every process | Complete a species-specific and form-specific process mass balance and disclose the reconciliation difference. | `eu-pef-2021-2279` |
| `val_conditioning` | conditioning | Conditioning water, steam, hot water, and holding shall appear only when physically used and measured. | `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003` |
| `val_pellet_route` | pellets | Pellet data shall include conditioning, die pressing, cooling, screening, fines, and off-spec pellet routing. | `us-epa-ap42-grain-2003` |
| `val_packaging` | packaging | Each physical packaging material shall be separate and excluded from reference mass. | `codex-cxs-155-1985`, `codex-cxs-178-1991`, `eu-pef-2021-2279` |
| `val_heat_double_count` | heat | Purchased heat and onsite fuel shall not represent the same heat quantity. | `ec-jrc-fdm-bref-2019`, `eu-pef-2021-2279` |
| `val_dust` | dust | Record source-specific captured dust, control inputs, spent media, and residual PM releases without netting different species. | `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031` |
| `val_wastewater` | wastewater | Keep each wastewater stream and each discharged pollutant separate; treatment inputs and sludge shall be explicit when onsite treatment applies. | `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031` |
| `val_allocation` | co-products | Disclose allocation avoidance, internal recycling, co-product quantities, allocation basis, and sensitivity without a default factor. | `eu-pef-2021-2279` |
| `val_bilingual` | bilingual PCR | English and Chinese process ids, row ids, controlled tokens, protocol ids, rule ids, source ids, UUIDs, and order shall match. | `eu-pef-2021-2279` |
| `val_completeness` | published dataset | No applicable card, data source, calculation, uncertainty note, or destination evidence may be omitted. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | product-specific foreground dataset suitable for review as a `secondary_dataset` or `background_dataset` after approval |
| downstream_use | lifecycle models that require one explicit cereal species and one CPC 23130 product form at a manufacturing facility gate |
| allowed_use | modelling of the declared species, form, geography, technology, campaign, packaging state, and allocation method |
| excluded_use | substitution across cereal species or product forms; undisclosed averages; use as a flour, starch, malt, breakfast cereal, compound-feed, or prepared-food dataset |
| required_metadata | PCR id; CPC code; species; form; grain condition; route; facility geography; campaign; technology; moisture and particle or pellet specification; packaging; allocation; co-product and waste destinations |
| required_quality_disclosure | completeness; data sources; foreground coverage; calibration; mass-balance difference; allocation; uncertainty; missing data; UUID gaps; review status |
| update_trigger | changed species, form, formulation, route, equipment, energy supply, dust control, packaging, allocation, regulation, source evidence, UUID identity, or material data-quality result |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0, retained raw structure dated 30 June 2025, code 23130, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-13). | Exact CPC title and scope boundary for groats, meal, and pellets of wheat and other cereals. |
| `fao-grain-milling-quality-1995` | `official_guidance` | FAO, Quality assurance for small-scale rural food industries, Chapter 2: grain cleaning, conditioning, milling, dehulling, and sieving, https://www.fao.org/4/v5380e/v5380e06.htm (retrieved 2026-08-13). | Incoming-lot records, contaminant removal, conditioning water and moisture checks, dehulling, milling, sieving, and equipment-quality records. |
| `us-epa-ap42-grain-2003` | `official_guidance` | U.S. EPA, AP-42 Section 9.9.1, Grain Elevators and Processes, April 2003, https://www.epa.gov/sites/default/files/2020-10/documents/c9s0909-1.pdf (retrieved 2026-08-13). | Receiving, cleaning, tempering, milling, steam conditioning, pelleting, cooling, screening, bagging, dust sources, oil suppression, cyclones, filters, and wet scrubbers. |
| `ec-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, EUR 29978 EN, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (retrieved 2026-08-13). | Food-sector process boundary, utilities, energy and water records, waste, wastewater, and air-emission control structure. |
| `eu-fdm-bat-2019-2031` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-13). | Grain-milling dust monitoring and bag filtration, pellet-cooling dust, energy management, water-stream separation, and wastewater management. |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-13). | Functional and reference flow, product-specific company data, complete material-energy-waste-emission inventory, allocation, data quality, transparency, and verification. |
| `codex-cxs-155-1985` | `standard` | Codex Alimentarius CXS 155-1985, Standard for Degermed Maize (Corn) Meal and Maize (Corn) Grits, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B155-1985%252FCXS_155e.pdf (retrieved 2026-08-13). | Concrete maize species and groats/meal identity, cleaning, grinding, bran and germ removal, hygiene, particle properties, and packaging. |
| `codex-cxs-178-1991` | `standard` | Codex Alimentarius CXS 178-1991, Standard for Durum Wheat Semolina and Durum Wheat Flour, https://www.fao.org/input/download/standards/60/CXS_178e.pdf (retrieved 2026-08-13). | Durum wheat species identity, milling and comminution, bran and germ separation, particle-size quality, hygiene, and packaging. |
| `codex-cxs-199-1995` | `standard` | Codex Alimentarius CXS 199-1995, Standard for Wheat and Durum Wheat, https://www.fao.org/input/download/standards/62/CXS_199e.pdf (retrieved 2026-08-13). | Wheat and durum wheat identity, moisture and extraneous-matter records, cleaning and sorting, hygiene, lot identity, and packaging. |
