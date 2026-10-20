---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.excreta-of-animals-useful-for-manure-fertilizer-and-fuel-preparation
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Collection and solid storage of cattle farmyard manure for agricultural use

## 1. Scope and Applicability

This PCR covers preparation of bulk solid cattle farmyard manure for subsequent agricultural use: scrape collection of cattle excreta already containing declared straw bedding, solid storage without deliberate composting, removal of plastic foreign matter where present, and weighing/loading at the preparation gate. It is a physically specified mixture, not a pure nutrient. Natural biological change during storage remains in the inventory. Source `epa-manure-practices` distinguishes storage from composting, separation, drying and digestion; `ipcc-manure-2019` distinguishes management from downstream soil and fuel pathways.

Exclude liquid/slurry flushing and separation, poultry or non-cattle manure, added lime/chemical treatment, deliberate composting, anaerobic digestion, sanitisation, forced drying, pellet/briquette manufacture, fuel products and combustion, downstream transport and land application. Existing animal husbandry inventories supply the incoming interface; this PCR cannot duplicate their management emissions. A changed route requires a separate applicability decision, not a UUID substitution. No generic nutrient grade, emission factor, residence time or saleability threshold is prescribed. `epa-manure-sampling` supports representative sampling; its field-application protocols are adapted to this earlier dispatch gate and do not establish sanitation or legal acceptance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.excreta-of-animals-useful-for-manure-fertilizer-and-fuel-preparation |
| classification_refs | CPC 3.0 34654; narrower |
| covered_products | Solid cattle excreta with declared existing straw bedding and retained urine, supplied as bulk agricultural farmyard manure |
| excluded_products | Other species manure; slurry; separated solids; compost; digestate; chemically treated manure; dried pellets; manure fuel |
| representative_product | Bulk solid cattle farmyard manure at declared moisture and nutrient composition |
| production_route | Scrape collection → solid storage → optional plastic removal → weighing and bulk loading; one integrated foreground unit |
| market_state | Moist solid as supplied, packaging excluded, at preparation gate; agricultural destination declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply cattle farmyard manure as an organic material for subsequent agricultural use |
| How much | 1 kg net accepted supplied wet manure |
| How well | Declared cattle source, bedding, moisture, total solids, volatile solids, total C, total N and TAN, P, K, contamination, destination and applicable acceptance records; not nutrient-equivalent to mineral fertiliser |
| How long or cycle | One declared collection/storage/dispatch period including residence and opening/closing inventories |
| reference_flow_link | finished_manure |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmyard manure `26c889af-72da-455b-aae9-df5d1472280c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cattle source and upstream gate; straw bedding and urine retention; solid-state evidence; wet mass and moisture; total solids and volatile solids; C N TAN P K assays and bases; storage duration and cover; collection route; contamination and acceptance; bulk gate and recipient; geography and period; upstream allocation and burden interface |

Required qualifiers must be recorded in concrete dataset metadata or linked records. A flow identity is not a supplier inventory or proof of crop nutrient availability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net as-supplied accepted wet manure; calibrated gross minus tare excludes transport equipment and packaging. Do not replace wet product mass with dry matter or nutrient mass. |
| wet_dry | raw_manure, finished_manure, leachate, rejected_manure | Mass | kg | Measure whole wet stream once; dry matter = wet mass × total-solids mass fraction; water = wet mass − dry matter. Volatile solids are measured on stated dry basis and are not identical to elemental carbon or COD. Straw and urine constituents already in raw manure are subledgers, not additional purchases. |
| raw_conversions | all inventory rows | Mass or Net calorific value | kg or MJ | Convert raw units before normalization: kg from measured integrated liquid volume × matching density, and kg species from concentration × integrated exhaust/liquid volume. Integrate a flow rate over time only if the original is a rate. Align gas temperature pressure moisture and concentration basis; no second time factor for cumulative volume. |
| nutrient_basis | raw_manure, finished_manure, leachate | Mass | kg | TAN means total ammoniacal nitrogen, NH3-N plus NH4-N, on an explicitly stated wet or dry assay basis; TAN is not emitted molecular ammonia. Report P and K as elements; oxide-basis laboratory results require an explicit documented stoichiometric conversion. Do not infer plant availability from total nutrient content. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cattle excreta with existing straw bedding and retained urine at a documented transfer gate before the modeled collection/storage steps; upstream husbandry and previous management burdens declared |
| starting_condition_role | Foreground collection interface, not an automatic waste cut-off |
| product_classification_scope | CPC 3.0 34654 agricultural-use solid cattle subset; narrower |
| recursive_input_rule | An incoming manure product of the same category terminates recursion only through an identified upstream dataset and disclosed gate; do not declare it burden-free or count its prior storage twice |
| upstream_dataset_requirement | Identify upstream cattle husbandry or residue-transfer inventory, feed/bedding responsibility, manure allocation, prior management coverage, geography, time and reference basis; reconcile matched physical transfer and burdens |
| disclosure | Report included stages and gates, residence/cover, all incoming and outgoing stocks, raw quantities, inherited burdens, excluded land application/fuel uses and missing numerical links |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manure_unit | Include collection, storage, loading, cleaning, on-site machinery energy and direct emissions. Aggregate stages physically without hiding stage meters; no duplicate reference output at internal hand-offs. | `epa-manure-practices`; `ipcc-manure-2019` |
| boundary_paths | manure_unit | Keep downstream field application and fuel use outside this supplied-material gate; no avoided fertiliser, avoided lagoon methane or energy substitution credit by default. Collected leachate treatment is linked once to its receiver; actual uncontrolled losses require species- and receiving-medium-specific extra rows before acceptance. | `epa-manure-practices`; `ipcc-manure-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manure_unit | Cattle manure collection, solid storage and bulk supply | required | Declared solid cattle agricultural-use route | foreground_production | 1 kg finished_manure |

### Process: Cattle manure preparation (`manure_unit`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Conditional electricity for scrapers, conveyance, weighing and loading. This identity is CN, <1 kV, consumption mix to user, grid-average supply. It is not a universal grid flow: a different supply requires separately verified identity and provider. Native reference property is Net calorific value; meter kWh × 3.6 gives MJ of electrical energy, not fuel heating value.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable amount per reference flow, from cp_utilities after raw conversion and complete-pool reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### Diesel fuel (`diesel`)

Conditional diesel consumed by collection/loading machinery, including idling, starts, failed handling and return handling. Native grade, formulation, refinery, geography and provider are unspecified. Record actual grade, fossil/biogenic fraction, density at measured temperature and provider. Direct exhaust is included once; an upstream combustion-inclusive dataset cannot be added to the same direct exhaust.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per reference flow, from cp_utilities after raw conversion and complete-pool reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### Tap water (`water`)

Conditional treated tap water for equipment/pad cleaning; not a flush-slurry collection route. Native production mix at plant and water-production/supply identity has no specified geography. Reference is mass; convert metered integrated volume using measured or supplier-supported density, without another time multiplier. Collect cleaning drainage in leachate.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per reference flow, from cp_utilities after raw conversion and complete-pool reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

##### Waste flows

###### Manure, cattle (`raw_manure`)

Incoming cattle excreta with existing straw bedding and retained urine, before this collection/storage unit. Record the whole moist stream once; reject a waste-input linkage if the actual upstream exchange is a traded product. Native identity is technology-specific, at farm; neither geography nor solids fraction is fixed. Preserve upstream burdens under the declared interface, not an automatic zero-burden assumption.

- Selected flow: Manure, cattle `87d40009-0114-4927-a82c-6ba41de4f994`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per reference flow, from cp_mass after raw conversion and complete-pool reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

##### Elementary flows

###### oxygen (`oxygen`)

Net oxygen consumed from air by measured biological transformation and on-site combustion; renewable element resource from air. Exclude unchanged carrier air. Support oxygen demand independently by gas measurement or a defined stoichiometric model, never by an unexplained mass residual.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_balance after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_balance`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### Water (rain water) (`rain`)

Only rainfall actually entering the manure/storage balance, a renewable material resource from water. Roof-diverted clean rainfall is outside this exchange; record exposed area, rain gauge and collection efficiency without assuming all site rainfall enters manure.

- Selected flow: Water (rain water) `2a240c57-b782-4745-943b-0602d7a953c4`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_balance after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_balance`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

#### Outputs

##### Product flows

###### Farmyard manure (`finished_manure`)

Accepted bulk solid cattle farmyard manure supplied at the preparation gate for subsequent agricultural use. Native identity is at plant, field use, composition unspecified and geography unspecified; this does not include field spreading burdens. This PCR restricts that broad mixture to cattle excreta with declared existing straw bedding, no deliberate composting or additives. No nutrient concentration or water fraction is supplied by the UUID.

- Selected flow: Farmyard manure `26c889af-72da-455b-aae9-df5d1472280c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

##### Waste flows

###### Collected cattle-manure leachate (`leachate`)

Collected cattle-manure leachate sent to documented wastewater treatment, including captured pad drainage and cleaning water. One actual moist waste mixture; dissolved species and water are analytical subledgers, not duplicate waste mass. Internal recirculation is retained in records without a boundary output. No exact leachate identity was confirmed.

- Selected flow: Collected cattle-manure leachate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per reference flow, from cp_mass after raw conversion and complete-pool reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### Plastic screenings contaminated with cattle manure (`screenings`)

Removed plastic foreign-matter screenings contaminated with cattle manure, only where removal occurs; document composition, moisture and receiver. Do not substitute generic manure, compost or unrelated industrial sludge. Other contaminant materials require separate atomic rows before dataset acceptance.

- Selected flow: Plastic screenings contaminated with cattle manure
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per reference flow, from cp_mass after raw conversion and complete-pool reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### Rejected solid cattle manure for disposal (`rejected_manure`)

Rejected solid cattle manure sent for disposal rather than sold as accepted farmyard manure. Record contamination, age, mass and treatment receiver independently. Returned material re-entering the same pool is an internal rework transfer, not another accepted product.

- Selected flow: Rejected solid cattle manure for disposal
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per reference flow, from cp_mass after raw conversion and complete-pool reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

##### Elementary flows

###### water vapour (`vapor`)

Net water vapour to outdoor air, unspecified. Record evaporation separately from independently supported biochemical/combustion water formation or consumption; no active drying in scope. Do not solve both unknown reaction water and unknown vapour from one residual. Use cp_balance to establish net H2O transfer with matched incoming/outgoing humidity and integrated air/gas quantities, or a validated independent evaporation/condensation method; retain ambient water inputs and do not assume them zero.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_balance after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_balance`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### methane (biogenic) (`methane_bio`)

Biogenic methane released from manure collection and solid storage to outdoor air, unspecified. Include anaerobic pockets and storage residence; not enteric methane. Measure or use a documented system/climate/species-specific method; no default factor copied into this PCR.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### carbon dioxide (biogenic) (`co2_bio`)

Biogenic carbon dioxide from actual organic matter transformation and any verified biofraction in diesel, to outdoor air, unspecified. Retain in LCI even if a selected impact method treats biogenic CO2 differently. Do not infer it as an unmeasured carbon closure residual.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### ammonia (`ammonia`)

Ammonia to outdoor air, unspecified; use molecular NH3 mass. Convert separately reported NH3-N with 17/14 only when that analytical basis is explicit. Emissions before the declared incoming gate belong to upstream husbandry; avoid overlap.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### nitrous oxide (`n2o`)

Nitrous oxide from management or conditional engine operation to outdoor air, unspecified; use molecular N2O. Convert explicitly reported N2O-N by 44/28 once. Do not add an indirect national-inventory N2O estimate to the same NH3/NOx precursor under a characterisation method already accounting for that pathway.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### dinitrogen (`nitrogen`)

Net dinitrogen generated by manure denitrification to outdoor air, unspecified. Exclude atmospheric N2 that merely passes through. A nitrogen balance does not independently establish the amount of N2 when other nitrogen losses are also unknown.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`

###### nitrogen monoxide (`no`)

Speciated nitrogen monoxide from manure or engine to outdoor air, unspecified, only when measured as NO. Use either species-resolved accounting or non-overlapping NOx aggregate portions, not both for the same emission.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### Nitrogen oxides (`nox`)

Conditional nitrogen-oxides aggregate to outdoor air, unspecified, excluding N2O. Native Mass/kg alone does not prove NO2-equivalent. Bind monitoring, inventory and impact-method quantity definitions with documented conversion before use; otherwise leave the numerical link pending. No overlap with the NO row; add a separately verified NO2 row if using species accounting.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### carbon dioxide (fossil) (`co2_fossil`)

Fossil carbon dioxide from diesel operation to outdoor air, unspecified; derive from actual fossil fuel carbon and oxidised species with measured fuel records, not a universal diesel factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-2021`

###### carbon monoxide (fossil) (`co`)

Fossil carbon monoxide from actual fossil diesel operation to outdoor air, unspecified, using engine/duty-specific evidence. Biofraction CO needs its own verified elementary identity, not this fossil flow.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-2021`

###### sulfur dioxide (`so2`)

Sulfur dioxide from actual diesel sulfur oxidised to SO2, to outdoor air, unspecified. Account separately for sulfur retained in particles or other species; no assumed sulfur content or total conversion.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-2021`

###### methane (fossil) (`methane_fossil`)

Conditional unburned fossil methane in diesel exhaust to outdoor air, unspecified. Keep separate from manure biogenic methane; no delayed-emission correction flow.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-2021`

###### non-methane volatile organic compounds (`nmvoc`)

Conditional non-methane volatile organic compounds to outdoor air, unspecified. Use documented non-methane aggregate mass; HC/TOC as carbon is not automatically this quantity. Require speciation or an independently justified aggregate conversion and no double counting of constituent rows. Follow the native flow restriction: inventory individual substances wherever possible, and never hide highly impacting substances in this aggregate; verify their separate elementary identities and retain only the non-overlapping remainder here.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-nonroad-2021`

###### particles (PM2.5) (`pm25`)

Emitted particles ≤2.5 micrometres from actual dry handling and conditional engine exhaust to outdoor air, unspecified. Separate collected dust from emitted particles. No default dust factor; include actual handling moisture, controls and exhaust filtration.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Emitted particles >2.5 and ≤10 micrometres to outdoor air, unspecified. Derive from comparable cumulative PM10 minus PM2.5 only with matched measurement boundaries, methods and nonnegative result. Do not sum cumulative PM10 again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### particles (> PM10) (`pmover10`)

Emitted particles >10 micrometres to outdoor air, unspecified, when handling releases them. Reconcile with total suspended particulate and disjoint finer fractions; settled or captured dust does not automatically cross the site boundary.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Amount calculated from collected raw fields per reference flow, using cp_emissions after raw conversion and complete-pool reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single | manure_unit | The scoped unit has one intended saleable output. Assign its attributable preparation burdens to accepted manure; rejected manure and leachate remain waste treatment obligations, not presumed co-products. Investigate metered subdivision or system expansion first, and document why a higher-priority option cannot represent the actual functions before selecting allocation. If a separate saleable product or treatment service exists, document functionality and a justified physical causal relationship; if unavailable justify economic allocation with period-matched prices and sensitivity. Do not use a universal nutrient/energy share. At the incoming gate record actual residual/co-product/waste status, farm-gate price or economic-value evidence, the applicable upstream allocation method and inherited burdens. A no-upstream-burden result requires that method and evidence; it never removes receiving, collection or storage burdens within manure_unit. The cited cattle-farm example supplies conditional context, not a universal dairy allocation default. | `ec-pef-allocation-2021` |
| allocation_ledgers | all inventory rows | Maintain complete unallocated physical mass/water/C/N/P/K and separate allocated burden accounts. Never multiply physical co-product quantities by burden shares. Document the incoming manure burden interface and excluded/retained upstream management so no stage is lost or counted twice. | `ipcc-manure-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | manure_unit | Incoming/output mass and product composition | weighing_and_assay | lot; cattle source; bedding and urine; gross tare net wet mass; TS VS C N TAN P K assays and bases; accept/reject status; dispatch/return IDs; opening/closing WIP and stock mass and burdens; receiver | Calibrated weighbridge or scales at intake/dispatch and separate waste weighing. Representative multi-location/depth composite samples across first/middle/last discharge portions; preserve actual moisture and sample storage. Laboratory TS, VS, C/N, TAN, P/K with method and uncertainty; sampling adapted from PM1558 to supply gate. Do not substitute top-only samples or annual book composition. | kg; kg/kg; % | Each load; each homogeneous lot and material/storage change | Complete matched period and route/state/product pool including starts stops failed and zero-output runs, returns and rework, opening/closing WIP and stocks with carried burdens | Same cattle-manure collection/storage facility and declared gates | per 1 kg reference flow | Calibration, weighing tickets, lot sampling plan, laboratory report and traceable stock/burden ledger |
| cp_utilities | manure_unit | Electricity diesel and cleaning tap water | meter_and_fuel_records | start/end meter; voltage geography provider; kWh; diesel purchases tank stocks transfers kg or litres temperature density fossil fraction C S LHV; engine power duty hours; cleaning-water volume density; shared-load drivers | Use submeter differences and reconciled fuel-tank records; measure density if converting volume. Allocate shared machinery by metered actual work; include idling and failed runs. Record equipment emission control and avoid upstream/directed combustion overlap. | MJ; kWh; kg; litre; m3; h | Each shift and campaign; opening/closing stock readings | Complete matched period and route/state/product pool including starts stops failed and zero-output runs, returns and rework, opening/closing WIP and stocks with carried burdens | Metered equipment serving manure_unit only | per 1 kg reference flow | Meter calibration, invoices, fuel assay, work logs and supplier dataset basis |
| cp_emissions | manure_unit | Actual emitted species and particle fractions | measurement_or_documented_model | storage age temperature cover TS VS N TAN; emission interval; species concentration; background; integrated exhaust or rate; temperature pressure dry/wet basis; engine model year tier load aftertreatment C S fuel; PM cut size; detection limits | Measure representative storage and handling fluxes using calibrated capture/chamber/dispersion methods with site boundary, background and temporal coverage. Engine emissions use actual duty-compatible testing or an explicitly justified model. IPCC methods require actual species/system/climate/VS/N applicability and review of factors; use of a model is disclosed, not represented as measurement. No residual-based gas species or generic positive amounts. | kg species; kg N; mg/m3; m3; m3/h; h | Representative operating/storage intervals and seasons, including abnormal operation | Complete matched period and route/state/product pool including starts stops failed and zero-output runs, returns and rework, opening/closing WIP and stocks with carried burdens | Outdoor emissions across manure_unit boundary; separate manure and engine origins | per 1 kg reference flow | Sampling design, calibration, model version/factors/applicability, species bases and uncertainty |
| cp_balance | manure_unit | Physical mass water and elements | balance_with_independent_measurements | all stream wet/dry masses and C H O N P K; oxygen uptake; rainfall exposed area; vapour; organic decomposition; independently measured reaction water; start/end stocks; inlet/outlet or upwind/downwind humidity; matched integrated dry-air/gas amount or flow-rate/time with T/P and wet/dry basis; condensation/deposition; independently measured evaporation method and coverage | Reconcile measured streams, oxygen consumption, weather and independently justified biochemical/combustion stoichiometry with explicit uncertainty. Distinguish free-water evaporation, water formed/consumed, dry-organic-matter transformation and dissolved solids. COD/VS are not species-resolved mass closure. Unexplained residuals remain findings. Determine net vapour from matched incoming and outgoing H2O carried by measured integrated dry-air/gas quantities and humidity, or a validated independent evaporation/condensation measurement covering the same open or enclosed boundary. Retain gross atmospheric H2O inflow/outflow in the physical water ledger and only their net transfer in the vapour exchange; do not assume ambient inflow is zero or infer unknown vapour and reaction water from one residual. Rain is a separate actual water input, not ambient humidity. | kg; kg element; kg water; mm; m2; kg dry air; kg water/kg dry air; m3; m3/h; h; degC; Pa | Each pool period with matched stock and emission coverage | Complete matched period and route/state/product pool including starts stops failed and zero-output runs, returns and rework, opening/closing WIP and stocks with carried burdens | Physical manure_unit before burden allocation | per 1 kg reference flow | Independent assays/gas and water evidence; residual and uncertainty report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| pool_account | all inventory rows | Reconcile raw period inputs and burdens plus opening WIP/stock carried burdens minus closing WIP/stock carried burdens and separately identified outward obligations. Return/rework transfers retain their physical identity and burden history; internal cycles cancel, not count as new output. Q is unique accepted supplied wet mass with returned/cancelled deliveries removed; all failed/zero-output loads of the same pool remain. Each resulting attributable exchange total is divided by Q once only when Q > 0. | cp_mass; cp_utilities; cp_emissions; cp_balance | Inventory per 1 kg accepted wet output |  |
| species_conversion | ammonia, n2o, no, nox | Convert explicitly documented element-as-N masses to molecular NH3 by 17/14, N2O by 44/28 or NO by 30/14 only for the matching species. NOx aggregate conversion requires separately documented quantity definition compatible with the inventory and impact method; N2O is excluded. Never convert total N loss to NH3 alone. | cp_emissions | Raw period molecular-species masses before pool accounting | `ipcc-manure-2019` |
| element_balance | manure_unit | Opening element stock + measured element inputs = closing element stock + accepted manure + waste/reject transfers + measured species releases on the same raw-period element basis. Keep carbon, nitrogen, phosphorus and potassium separate. Include oxygen from air and net biological transformations in total mass/water accounting with independently supported reaction-water terms; do not create a balancing output or omit biogenic CO2. | cp_mass; cp_balance; cp_emissions | Unallocated physical balance and disclosed residuals | `ipcc-manure-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_complete | all inventory rows | Require complete matched production pool and positive accepted denominator, native identity/state/medium and exact property/unit compatibility. Include actual maintenance inputs/wastes, other contaminants and any uncontrolled runoff/leaching as additional specific rows when material; unknowns are not zero. | cp_mass; cp_utilities; cp_emissions; cp_balance |
| quality_sampling | finished_manure | Dispatch sampling must represent supplied composition after storage losses; no assumed fixed feed/bedding formula or nutrients. Declare sampling adaptation, laboratory method, detection limits, uncertainty, actual sanitation/legal acceptance and intended recipient; this PCR does not certify fertiliser safety. | `epa-manure-sampling`; cp_mass |
| quality_background | all inventory rows | Link actual provider datasets with geography, time, route, composition and wet/dry/energy reference basis. Flow UUID verification does not validate provider quantities or upstream process completeness. Disclose gaps without substituting an incompatible supplier. | cp_utilities; cp_mass |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_manure | Exactly one accepted product reference row, 1 kg net wet mass, same denominator throughout both languages and protocols. Zero total accepted supply forbids normalization; unresolved final reference identity or unsupported measurement relationship blocks dataset use. |  |
| validation_balance | manure_unit | Check complete raw-period mass/water/C/N/P/K balances before allocation, matched inventory burdens, unique acceptance, no duplicate internal flows, no invented reaction water or gas residual. Quantify residuals against declared measurement uncertainty and investigate unexplained differences. | `ipcc-manure-2019` |
| validation_emissions | all inventory rows | Confirm each actual species/CAS, biogenic or fossil origin, outdoor air or resource medium and property-unit chain. Require molecular/element and NOx/NMVOC basis compatibility. PM fractions must be mutually exclusive; no source/destination or dust-collection double counting. Methods/factors are not measured results, and absent identity is not evidence of absent emission. | `ipcc-manure-2019`; `epa-nonroad-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply-stage manure material input for agriculture, after applicability and provider review |
| allowed_use | Declared bulk solid cattle agricultural route and its measured wet-mass basis |
| excluded_use | Generic all-excreta or nutrient-equivalent fertiliser; fuel, compost, digestate or field application datasets; safety or methodology approval claim |
| required_metadata | Reference qualifiers; gates; geographic/time coverage; raw pool and stock/burden ledger; assays; all actual identities/providers; allocation and methods |
| required_quality_disclosure | Sampling representativeness, uncertainty, missing auxiliary identities, provider compatibility and omitted stages; no claim of generic emission ranges |
| update_trigger | Animal source/bedding/route/moisture/storage change, new contamination or receiver, altered supply/geography, new measurement or methodological evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD CPC 3.0 structure, 30 June 2025, row 34654; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification scope only; not proof that every excreta route is one process or that an accepted mapping exists. |
| epa-manure-practices | official_guidance | US EPA AgSTAR, Practices to Reduce Methane Emissions from Livestock Manure Management, Solid Storage and comparison with Composting/Manure Drying/Solid Separation; snapshot 2026-10-16; https://www.epa.gov/agstar/practices-reduce-methane-emissions-livestock-manure-management | Route separation, handling/storage and runoff/emission screening. Qualitative only; no national illustrative reduction percentages, default residence or performance transferred. |
| epa-manure-sampling | extension_guidance | US EPA NPDES Permit Writers Manual for CAFOs Appendix O, PM1558 revised November 2003, PDF pp117–120 / printed O-115–O-118; https://www.epa.gov/sites/default/files/2015-08/documents/cafo_permitmanual_appendixo.pdf | Representative solid-manure and composite sampling; adapted from application/storage sampling to earlier supply gate. Not current regulation, generic formula, sanitation proof or a fixed number of samples for all sites. |
| ipcc-manure-2019 | method_factor | IPCC 2019 Refinement Volume 4 Chapter 10, §§10.4,10.5,10.5.4 and equations10.23,10.25; printed/PDF pp50,64,74–77,94–95; https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | CH4/VS and nitrogen species pathways, molecular conversion and management/soil/fuel boundary. National inventory method requires site/animal/system/climate evidence; no default factors or recipes imported. Keep measured biogenic CO2 in LCI; prevent double characterization of indirect N2O. |
| epa-nonroad-2021 | official_guidance | US EPA EPA-420-R-21-021 September2021, Exhaust and Crankcase Emission Factors for Nonroad Compression-Ignition Engines in MOVES3.0.2, Introduction and §§3,9,11; publisher HTML/TXT https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1013KWQ.TXT | Diesel equipment pollutant coverage and activity/technology dependence; publisher text rendering, not a locally acquired PDF. No US fleet factor, PM split, sulfur content, engine tier or HC-to-NMVOC conversion adopted as generic. Actual engine/fuel/duty/species evidence remains mandatory. |
| ec-pef-allocation-2021 | official_guidance | European Commission, C(2021)9332 final, Annex I, Product Environmental Footprint method, 16 December 2021, §§4.5 and4.5.1.2, PDF pp63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General multifunctionality hierarchy and conditional cattle-farm manure status/value and upstream burden context. Actual upstream method, price/status and gate coverage must be established; do not transplant dairy/IDF defaults, circular-footprint formulas or an automatic residual zero-burden rule. Collection/storage obligations at this unit remain included. |
