---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.superphosphate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Cured ungranulated single superphosphate from purchased sulfuric acid

## 1. Scope and Applicability

This method covers ungranulated, unammoniated, unblended SSP made by acidulating phosphate rock with purchased virgin contact-process sulfuric acid solution, then curing, crushing and bulk dispatch. Foreground grinding, conveying, dilution, reaction/curing and abatement are electrically driven; purchased steam, fuel drying, combustion-powered handling and commercial fluorosilicic-acid recovery are absent. Verify these site conditions before applying this boundary. SSP is a mixture of monocalcium phosphate, retained calcium sulfate, residual minerals and moisture, not a pure single compound. BREF 10.2 supports sale after curing; EPA 8.5.1 identifies grinding/acidulation/curing and release points. The producer original supports purchased acid and a powder branch; its bagging step does not establish bulk delivery.

Exclude TSP, mixed sulfuric/phosphoric-acid concentrated superphosphate, partially acidulated phosphate rock (PAPR), ammoniation, micronutrient enrichment or nitrogen blends, granulation, integrated acid manufacture, bone-meal routes and field use. Collect actual operations and grade; historical yield, concentration, residence time, temperature and single-plant consumption/emissions are not defaults. `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `epa-ap42-tsp-1993`, `agrophos-ssp-process`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.superphosphate |
| classification_refs | CPC 3.0 34621 Superphosphate; narrower |
| covered_products | Cured bulk ungranulated SSP |
| excluded_products | TSP; mixed-acid concentrated products; PAPR; granular, ammoniated, blended or fortified products; pure monocalcium phosphate |
| representative_product | SSP powder with measured moisture and grade |
| production_route | Purchased-acid dilution; electric rock grinding; acidulation; curing; crushing and bulk dispatch |
| market_state | Solid powder mixture at actual moisture; mass reference is not P2O5 nutrient mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply accepted cured SSP powder at the plant for phosphatic-fertilizer use; no field-effect equivalence asserted |
| How much | 1 kg accepted net SSP mixture |
| How well | Declare moisture, total/available/water-soluble P2O5, free acidity, S/Ca, particle size, impurities and acceptance evidence for the applicable grade |
| How long or cycle | Plant delivery for one declared period/campaign; no assumed service life or application count |
| reference_flow_link | ssp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Superphosphate `8c9749b5-e19f-4480-a575-3058aff804b3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg |
| Reference unit | kg |
| Required qualifiers | SKU; site/period; SSP not TSP; ungranulated/unammoniated/unblended; acid/rock suppliers; bulk delivery; moisture; total/available/water-soluble P2O5 and assay basis; free acidity; S/Ca; size; impurities/grade acceptance; starting condition; voltage/meter boundary and absence of combustion equipment |

Declare every required qualifier in data-package metadata, process notes or reference-flow comments; omissions make that package’s reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference-mass | ssp | Mass | kg | 1 kg is delivered as-is net SSP mass excluding packaging; pair moisture with dry/as-is assay basis. Do not substitute pure phosphate or nutrient mass. Use cp_product. |
| solution-basis | acid | Mass | kg | Input is delivered 93–98% solution mass; actual H2SO4 mass = solution mass times measured mass fraction. Carrier water is already included; added dilution water is separate. |
| nutrient-basis | ssp | Mass | kg | Available P2O5 mass = as-is product mass times measured available-P2O5 fraction on the same basis. Distinguish total, available and water-soluble phosphorus; no nominal-label or historical-grade default conversion. |
| electricity-basis | electricity | Net calorific value | MJ | Convert metered kWh using 1 kWh = 3.6 MJ; verify supplier electrical-energy reference, voltage and loss boundary. Unit conversion does not prove background compatibility. |
| water-basis | water | Volume | m3 | Measure new supplied volume; mass water balance uses measured/traceable density and temperature, not the database secondary mass coefficient. |
| same-denominator | all inventory rows | reference flow | 1 kg | Divide exchange totals by concurrent accepted net SSP mass in kg; reconcile curing work-in-progress, recycle, stocks and rejects separately. Every stage uses the same denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received beneficiated phosphate rock and purchased virgin contact-process 93–98% sulfuric acid solution; treated tap water and 1–35 kV power; traceable lots/providers |
| starting_condition_role | foreground production |
| product_classification_scope | Cured ungranulated bulk SSP subset of CPC 34621 |
| recursive_input_rule | Purchased SSP is not phosphate-rock feed; disclose any same-category input and reassess applicability. Internal recycle does not import another background production burden |
| upstream_dataset_requirement | Use compatible upstream rock mining/beneficiation, acid manufacture, power, tap-water, inbound transport and off-site waste-treatment data; provider/composition/amount bases must match; missing backgrounds are not zero burdens |
| disclosure | Disclose start, upstream completion, campaign stocks, supplied solution/as-is product, waste destinations and release coverage; methodology is not a completed dataset |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| include-stages | ssp_production | Include receiving/grinding, dilution, acidulation, curing, crushing, bulk handling, dust/scrubbing controls and rinsing. Meter stages separately then aggregate one foreground unit; internal SSP transfers are not another reference-product output. | ec-lvic-aaf-2007; epa-ap42-ssp-1993 |
| retain-sulfate | ssp_production | Calcium sulfate retained in SSP belongs to the product mixture; do not import wet-process phosphoric-acid filtration and invent a gypsum co-product. | ec-lvic-aaf-2007 |
| scope-conditions | ssp_production | Verify absence of combustion-driven equipment, supplied steam/fuel drying, bagging, granulation, ammoniation, saleable scrubber acid and direct liquid environmental release. If any occurs, extend separately reviewed exchanges/process rules; do not continue this scope by assigning missing items zero. | ec-lvic-aaf-2007; epa-ap42-ssp-1993 |
| emission-survey | ssp_production | Survey post-control, curing-building and fugitive releases. Screen rock-borne metals/radionuclides/organics and cleaning agents; add each actually present unlisted species/aid separately with identity and quantity verification. This table alone does not prove inventory completeness. Verify stormwater and wastewater routes. | epa-ap42-ssp-1993; ec-lvic-aaf-2007 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ssp_production | Cured ungranulated SSP production | required | When scoped route applies | foreground production | 1 kg accepted SSP |

Grinding → acid dilution/mixing → den → stockpile curing → crushing → acceptance/bulk dispatch. Retain stage-level material/energy/control records. Keep physical mass, water, P, F and C balances separate from the environmental-burden ledger; both ends of internal dust/liquor loops have equal amounts, while the aggregated inventory contains only boundary crossings.

### Process: Cured ungranulated SSP production (`ssp_production`)

#### Inputs

##### Product flows

###### rock (`rock`)

Phosphate ore received for electric grinding; measure delivered wet mass, moisture, P2O5 assay, carbonate carbon, organic carbon, F, Fe, Al, Mg and contaminants. Record beneficiation and grind size; do not treat the ore as pure apatite.

- Selected flow: Phosphate Ore `f71b42aa-e220-4371-8fa4-9aa8946a6262`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_feed, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### acid (`acid`)

Received 93–98% sulfuric acid solution before measured on-site dilution. Record actual concentration, virgin contact-acid supplier, impurities and delivered mass. This row includes its carrier water; not kg of pure H2SO4.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_feed, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### electricity (`electricity`)

Purchased CN grid-average AC at 1–35 kV; the selected native locationOfSupply is CN, and another geography requires a separately verified compatible flow/provider. Meter electricity for grinding, conveyors, crushing, handling, pumps and air-pollution control. Record meter boundary, supplier/grid period and transformer losses. The native property is Net calorific value; use MJ of metered electrical energy and disclose this naming convention, not a fuel heating value.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected exchange amount using cp_energy, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### water (`water`)

Purchased treated tap water for acid dilution, scrubbing and cleaning. This selected UUID specifies production/supply at a water-treatment plant in Hong Kong (HK); use only for a compatible actual supply. Another geography or treatment requires a separately verified flow/provider. Meter only new supply; internally circulated water is not another input. Native reference is volume m3; do not apply the database screening mass coefficient as site density.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` ; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collected exchange amount using cp_water, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

#### Outputs

##### Product flows

###### ssp (`ssp`)

One accepted cured ungranulated SSP mixture at bulk dispatch, including actual moisture and retained calcium sulfate, excluding packaging and rejected product. Its grade must be measured; the identity record’s 0-20-0-11S description is not a default assay.

- Selected flow: Superphosphate `8c9749b5-e19f-4480-a575-3058aff804b3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `agrophos-ssp-process`

##### Waste flows

###### scrubber_purge (`scrubber_purge`)

Fluoride/phosphate-bearing aqueous SSP scrubber purge sent to off-site treatment; wet solution mass, acidity, dissolved/suspended solids and receiver acceptance required. Rinse liquor joining the same tank is included once. Internal reuse is excluded from this outward exchange.

- Selected flow: Fluoride/phosphate-bearing aqueous SSP scrubber purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_waste, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### scrubber_sludge (`scrubber_sludge`)

Conditional settled silica/phosphate-bearing scrubber sludge sent off site; measure wet mass, dry solids, fluoride, metals and acceptance. This is not assumed pure calcium fluoride or biological sewage sludge. Record zero with evidence if no separate solids removal occurs.

- Selected flow: Silica/phosphate-bearing SSP scrubber sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_waste, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### dust_waste (`dust_waste`)

Conditional captured phosphate dust actually discarded, not returned to the den. Identify rock/product dust and contamination; weigh receiver-bound mass and document acceptance. Recycled dust remains an internal physical loop, not waste or airborne emission.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_waste, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

##### Elementary flows

###### hf (`hf`)

Hydrogen fluoride after controls plus captured-site fugitive discharge to outdoor air, unspecified subcompartment. Measure kg of molecular HF with validated species-resolved sampling. Total fluorine alone cannot define this quantity.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_air, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### sif4 (`sif4`)

Silicon tetrafluoride leaving controls/curing to outdoor air, unspecified subcompartment. Account for hydrolysis and actual sampling species; do not call scrubber hexafluorosilicate liquor airborne SiF4 or duplicate fluorine particulate mass.

- Selected flow: silicium tetrafluoride `fe0acd60-3ddc-11dd-a706-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_air, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### pm_fine (`pm_fine`)

Emitted aerodynamic PM2.5 from ore unloading/grinding, den, curing, crushing and dispatch; measure after controls plus fugitives, to outdoor air unspecified. Do not use collected baghouse dust as emitted PM.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_air, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `epa-method201a-2020`

###### pm_mid (`pm_mid`)

Emitted aerodynamic particles above 2.5 and up to 10 micrometres, to outdoor air unspecified. Derive only from paired compatible PM10 and PM2.5 measurements; report uncertainty and reject a negative difference.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_air, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `epa-method201a-2020`

###### pm_coarse (`pm_coarse`)

Emitted aerodynamic particles above 10 micrometres, to outdoor air unspecified. Requires compatible total filterable PM and PM10 coverage; no assumed fraction and no nested addition of total PM, PM10 and PM2.5.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_air, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `epa-method201a-2020`

###### co2 (`co2`)

Conditional mineral/fossil carbon dioxide released during acidulation, to outdoor air unspecified; measure carbonate carbon reacted and emitted CO2, with carbon retained in product/purge/stock reconciled. Electricity background CO2 is not another foreground emission.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_carbon, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### co2_biogenic (`co2_biogenic`)

Conditional biogenic carbon dioxide, only where carbon-origin evidence and oxidation measurements establish it. Retain it in LCI even if a separate greenhouse-gas reporting convention omits it. Unknown rock organic-carbon origin must not be assigned biogenic by assumption.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_carbon, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### methanethiol (`methanethiol`)

Conditional methyl mercaptan to outdoor air unspecified only if species analysis detects CAS 74-93-1. BREF identifies mercaptan odour potential, not universal methanethiol release; an odour score or total VOC cannot supply this row. Add separately identified other compounds when the survey finds them.

- Selected flow: methyl mercaptan `fe0acd60-3ddc-11dd-9e59-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_air, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### water_vapour (`water_vapour`)

Conditional actual process-attributable water vapour reaching outdoor air, unspecified subcompartment, from acidulation, curing or wet offgas controls after any actual capture/condensation. Reconcile outlet gaseous water with incoming carrier-air moisture on matched gas-quantity and T/P bases. Internal evaporation followed by recovery is not this external exchange. Keep recovered condensate, aqueous purge, product free/structural water and entrained liquid/aerosol water distinct; do not count the same water twice with particulate mass. No positive amount follows from the word evaporation, and zero requires actual absence or a supported net-water reconciliation; missing data remain unresolved. Use cp_water and the common complete-period normalization.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected exchange amount using cp_water, divided by concurrent accepted net SSP mass in kg, per 1 kg reference flow; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| separate-recycle | ssp_production | Retain internal dust/liquor recycle physically; it is not a co-product and does not duplicate upstream burdens. Disposed residues carry actual treatment burdens, without automatic substitution credits. | ec-lvic-aaf-2007; epa-ap42-ssp-1993 |
| single-mixture | ssp | Reference product is the complete SSP mixture; calcium sulfate, monocalcium phosphate and moisture are not separate co-products. No other sold product exists in this scope; do not allocate among nutrient components. | ec-lvic-aaf-2007 |
| shared-utilities | ssp_production | Prefer submetering/campaign segregation for shared electricity, water and controls; otherwise use documented causal drivers and disclose shared scope/uncertainty. No default revenue split; never scale physical product quantity by a burden share. | agrophos-ssp-process; ec-lvic-aaf-2007 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | ssp_production | ssp | weighing/acceptance | campaign; SKU; net dispatch; returns/reacceptance; opening/closing WIP and finished stock; production history and carried inventory burdens; rejects/recycle; moisture; P2O5 forms/bases; free acid; S/Ca; size; impurities/grade | Calibrated scales and stock reconciliation; paired laboratory samples and applicable-grade acceptance | kg | each batch/dispatch | same declared period including starts/abnormal operation and cross-period curing | declared scoped site, with stock/shared facilities identified | per 1 kg reference flow | calibration; assays; acceptance; detection limits; reconciliation; uncertainty |
| cp_feed | ssp_production | rock; acid | supply/feed records | provider; lot; receipt/feed amount; stock; acid concentration/impurities; ore moisture/composition/carbon origin/size; dilution water | Calibrated weighing/mass meters, receipt assays and stock reconciliation; volume delivery needs measured density/temperature | kg | each lot/feed | same declared period including starts/abnormal operation and cross-period curing | declared scoped site, with stock/shared facilities identified | per 1 kg reference flow | calibration; assays; acceptance; detection limits; reconciliation; uncertainty |
| cp_energy | ssp_production | electricity | submeter records | kWh; voltage; provider/grid period; meter boundary; stages; losses/shared drivers; abnormal operation | Stage electrical submeters and supply records; reconcile transformer/background loss boundaries | MJ | continuous/campaign | same declared period including starts/abnormal operation and cross-period curing | declared scoped site, with stock/shared facilities identified | per 1 kg reference flow | calibration; assays; acceptance; detection limits; reconciliation; uncertainty |
| cp_water | ssp_production | water; water_vapour | meter/recycle records | new water m3; use; temperature/density; acid carrier water; stocks; recycle liquor; purge; inlet/outlet gas moisture and matched gas quantities/rates; T/P and wet/dry basis; actual condensate/capture records; separate gas-phase H2O kg; evaporation/product water; free versus structural water and test conditions; independently measured reaction/phase conversion and water formation/consumption | Meter new supplied liquid in m3 and reconcile uses; retain circulation separately without adding to supply. For water_vapour, use validated paired outlet gas-moisture/quantity measurements and inlet carrier-air moisture to determine process-attributable gaseous H2O kg after actual recovery. Keep liquid condensate/purge, entrained droplets, product free/structural water, independently evidenced reaction water and stocks separate. Use already integrated gas volume once, or integrate moisture concentration times volumetric flow rate over time. Do not infer evaporation from liquid supply volume or an unexplained balance residual; reconcile uncertainty and retain missing measurements as findings | m3; kg | continuous/campaign | same declared period including starts/abnormal operation and cross-period curing | declared scoped site, with stock/shared facilities identified | per 1 kg reference flow | calibration; assays; acceptance; detection limits; reconciliation; uncertainty |
| cp_waste | ssp_production | scrubber_purge; scrubber_sludge; dust_waste | outbound records/assays | wet mass; dry solids; F/P; acidity; metals/contamination; internal reuse; stock; receiver/treatment route | Weigh outbound consignments and reconcile manifests; assay receiver conditions; generated internal amount is not external disposal | kg | each consignment | same declared period including starts/abnormal operation and cross-period curing | declared scoped site, with stock/shared facilities identified | per 1 kg reference flow | calibration; assays; acceptance; detection limits; reconciliation; uncertainty |
| cp_air | ssp_production | hf; sif4; pm_fine; pm_mid; pm_coarse; methanethiol | emission tests/survey | species/compartment; total-F/molecular basis; size; concentration; dry/wet gas volume; T/P; moisture; operating hours; controls/bypass; fugitives; detection limits/uncertainty | Integrate post-control concentration with matching gas volume/time by source; quantify fugitives independently; validate species/size methods and use suitable alternatives for saturated wet gas | kg | representative tests plus annual operating reconciliation | same declared period including starts/abnormal operation and cross-period curing | declared scoped site, with stock/shared facilities identified | per 1 kg reference flow | calibration; assays; acceptance; detection limits; reconciliation; uncertainty |
| cp_carbon | ssp_production | co2; co2_biogenic | carbon balance/offgas | ore/acid carbon; carbonate/organic carbon; origin split; retained carbon in product/waste/stocks; measured CO2/gas volume | Cross-check assays with gas volume/species measurements; unknown origin stays unresolved; origin labels do not replace measurement | kg | each campaign assay/representative test | same declared period including starts/abnormal operation and cross-period curing | declared scoped site, with stock/shared facilities identified | per 1 kg reference flow | calibration; assays; acceptance; detection limits; reconciliation; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period-normalization | all inventory rows | Sum raw exchange quantities over the complete same route, as-is grade and declared period, including attributable failed/zero-output batches, starts/stops, cleaning and rework, then divide once by positive accepted net SSP mass in kg; ssp output = 1 kg. Do not average successful-batch ratios or divide pre-normalized per-kg amounts again. Reconcile returns/reacceptance, curing WIP and finished stocks with production history and carried burdens so acceptance is credited once and the attributed numerator covers the same output; burden adjustments do not erase raw physical exchanges. Internal recycle is not new accepted output. Do not divide whole-plant input by partial dispatch. If accepted output is zero, preserve raw totals and disclose no unit result rather than divide or omit burdens. | cp_product; cp_feed; cp_energy; cp_water; cp_waste; cp_air; cp_carbon | exchange amounts per 1 kg reference flow | ec-lvic-aaf-2007; agrophos-ssp-process |
| composition-reconciliation | rock; acid; ssp; scrubber_purge; scrubber_sludge | Use measured composition to conserve total mass and actual elements, including P/F/C and relevant Ca/S/H/O: inputs plus opening stocks equal outputs plus closing stocks and disclosed uncertainty/residual. Keep MCP/calcium-sulfate formation, actual acid/carbonate/fluoride reactions and water/dry-component species accounts separate. Water inputs plus independently evidenced reaction formation equal outputs plus stock change and actual consumption; distinguish structural water from free water and do not count hydration/dehydration as new water molecules. Validate balanced actual reaction equations against independent reactant/product/phase measurements and uncertainty; do not import an ideal ore recipe, fit reaction water or dry matter to a residual, or use COD as carbon mass. Wet mass times (1 minus measured moisture fraction) is only method-defined dry mass: state which free/structural water or other volatiles the test removes; it is not automatically the mass of anhydrous phosphate/calcium-sulfate phases. Identify each P2O5 assay form and basis. Reaction checks do not supply ore composition, acid demand, yield or emissions. | cp_product; cp_feed; cp_water; cp_waste; cp_carbon | element/water balances and composition disclosure | ec-lvic-aaf-2007 |
| fluorine-accounting | hf; sif4 | For species-resolved F-basis mass, convert to molecular mass using that assayed species molecular mass divided by the total mass of all F atoms in one molecule (conversion ratio M_species / (n_F × M_F), where n_F is 1 for HF and 4 for SiF4). Treat HF and SiF4 separately. Unspeciated total F cannot be arbitrarily split or added again to fluorine-bearing particle mass. | cp_air; cp_waste | molecular species releases and F balance | epa-ap42-ssp-1993; ec-lvic-aaf-2007 |
| particle-partition | pm_fine; pm_mid; pm_coarse | Paired compatible tests: middle fraction = PM10 minus PM2.5; coarse fraction = total filterable PM minus PM10. Preserve uncertainty and reject negative differences. Determine/report condensable PM separately and check overlap with species/size entries; do not force Method 201A onto wet-droplet conditions. | cp_air | nonoverlapping air-particle fractions and coverage disclosure | epa-method201a-2020; epa-ap42-ssp-1993 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity-and-provider | all inventory rows | Establish UUID identity separately from provider amount/background compatibility; never replace unresolved UUIDs with adjacent species. | provider specification, lot, composition, dimension and background metadata |
| coverage-and-time | ssp_production | Prove scoped operations and all boundary exchanges; disclose representativeness, annual/campaign coverage, missing/below-detection values and uncertainty. | process map, meter register, assays/control records and source-by-source survey |
| no-defaults | all inventory rows | No 1993 factors, 2007 plant tables/BAT concentrations or commercial grade become positive-release, recipe or energy defaults; site_specific means future collection requirements. | actual collection and method applicability |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference-unique | ssp | Exactly one ssp reference output: 1 kg accepted as-is net mass. Internal transfers are not another reference output; both languages, inventory, collection and conversion share the denominator. | agrophos-ssp-process; ec-lvic-aaf-2007 |
| scope-and-background | ssp_production | Verify every scope condition, upstream completion and provider basis; missing/incompatible backgrounds, unresolved waste identity or unproven zero releases prohibit a complete-dataset claim. | ec-lvic-aaf-2007; epa-ap42-ssp-1993 |
| balances | ssp_production | Recheck physical mass/water/P/F/C and burden ledgers separately; investigate discrepancies, match internal link quantities, retain sulfate in SSP without a gypsum co-product, and use no invented reaction yield. | ec-lvic-aaf-2007 |
| emission-completeness | ssp_production | Verify HF/SiF4 molecular bases, nonoverlapping PM/condensable coverage and all actual species. Total F/VOC/odour is not a specific species; retain biogenic CO2 in LCI. Unmeasured or method-inapplicable releases remain unresolved. | epa-ap42-ssp-1993; epa-method201a-2020; ec-lvic-aaf-2007 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Production dataset after complete site collection/review; this record is methodology only |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Upstream modelling of compatible powdered SSP route/delivery, with actual grade and moisture disclosed |
| excluded_use | TSP/granular/mixed-acid/PAPR/fortified fertilizer; pure monocalcium phosphate; field nutrient equivalence; generic complete background with missing upstream data |
| required_metadata | All reference qualifiers, period/providers, map, stock/composition, units, upstream/waste links and compartments |
| required_quality_disclosure | Collection coverage, detection limits, basis compatibility, unresolved identity/releases, uncertainty and scientific-review status |
| update_trigger | Changed feed/acid origin or concentration, grade/size, route/delivery/controls, energy, release or background |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ec-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007, chapter 10, especially 10.1, 10.2, Figure 10.1 and 10.4.1–10.4.3; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf ; retrieved 2026-10-14 | Route/SSP mixture, sale after curing, dust/fluorine control; no historical plant quantity, BAT concentration/efficiency, grade or residence-time default |
| epa-ap42-ssp-1993 | official_guidance | US EPA AP-42 section 8.5.1 Normal Superphosphates, July 1993, reformatted January 1995, pp. 8.5.1-1–4; https://www.epa.gov/sites/default/files/2020-09/documents/8.5.1_normal_superphosphates.pdf ; retrieved 2026-10-14 | Acidulation/curing and source-specific fluorine/particles; E-rated historical factors not adopted; absent metal/organic factors do not establish zero releases |
| epa-ap42-tsp-1993 | official_guidance | US EPA AP-42 section 8.5.2 Triple Superphosphates, July 1993, reformatted January 1995, p. 8.5.2-1; https://www.epa.gov/sites/default/files/2020-09/documents/8.5.2_triple_superphosphates.pdf ; retrieved 2026-10-14 | Counterevidence/exclusion for phosphoric-acid TSP route; no imported TSP feed/yield |
| agrophos-ssp-process | literature | Agro Phos India Limited, Manufacturing Process, section 1 Single Super Phosphate (SSP); https://www.agrophos.com/manufacturing-process/ ; retrieved 2026-10-14 | Producer purchased acid, powder/granular branches and assay acceptance; single-site bags/temperature/details not universal defaults; bagging branch not adopted |
| epa-method201a-2020 | method_factor | US EPA Method 201A, October 7 2020, sections 1.1–1.6; https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf ; retrieved 2026-10-14 | Stationary filterable PM2.5/PM10 and differences; unsuitable for saturated wet-droplet gas; condensables require suitable separate testing/overlap checks; no default coarse fraction |
