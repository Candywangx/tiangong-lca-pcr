---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.casein
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Casein

## 1. Scope and Applicability

This PCR covers dried casein manufactured from skimmed milk and/or other milk-derived feed material by acid precipitation or by rennet or another suitable coagulating enzyme, followed by curd separation, washing, dewatering, drying, and finishing. It covers edible acid casein and edible rennet casein when the product is placed on the market as edible casein, and it also covers technical-grade product that is sold as casein and follows the same declared route.

The reference product must remain casein. Caseinates produced by neutralising casein or casein curd, other chemically or enzymatically modified casein derivatives, formulated casein blends, and casein glues or other adhesives are excluded. A facility that continues from casein into a caseinate, derivative, or adhesive shall terminate this PCR foreground at the casein intermediate and model the subsequent conversion under a separate applicable rule. Codex CXS 290-1995 composition and quality provisions may be used to substantiate an edible product declaration, but they are not generic inventory amounts or universal LCI limits.

The foreground boundary is factory-gate production from the declared milk-derived feed material received by the casein facility. Upstream milk production and supplier processing are represented by upstream datasets. Distribution, use, and end-of-life are outside the foreground production boundary unless a downstream study adds them explicitly.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.casein |
| classification_refs | CPC 3.0 22260 Casein |
| covered_products | Dried acid casein; dried rennet or other enzyme-coagulated casein; edible or technical grade when sold as casein |
| excluded_products | Caseinates; other casein derivatives; casein glues and adhesives; formulated blends in which casein is an ingredient rather than the declared product |
| representative_product | Dry casein powder or granules at the manufacturing gate |
| production_route | Acid precipitation or rennet/other suitable coagulating-enzyme route, declared and inventoried separately according to the route actually operated |
| market_state | Bulk or packaged dry product at factory gate, with grade, route, moisture or dry-matter basis, animal origin of milk, physical form, and packaging status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Casein supplied as a dry dairy protein product at the manufacturing gate |
| How much | 1 kg net casein product, excluding packaging |
| How well | Product is identified as acid casein or rennet/other enzyme-coagulated casein and declares edible or technical grade, moisture or dry-matter basis, physical form, and applicable product specification |
| How long or cycle | One delivered factory-gate production output; no service duration applies |
| reference_flow_link | rf_casein |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Casein `53f7b47f-8d1a-4420-8e79-e931990656e6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | coagulation route; edible or technical grade; moisture or dry-matter basis and test method; milk animal origin; physical form; product specification; facility and geography; production period; packaging status |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference casein product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net casein product mass and exclude packaging. Use the verified casein product flow and Units of mass identities shown in section 3. |
| `moisture_basis` | Casein, wet curd, and intermediate yields | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record whether each mass is as-received, wet, dry, or corrected to a declared moisture or dry-matter basis. Do not apply Codex composition limits as conversion factors; use batch or lot measurements. |
| `route_separation` | Acid and enzyme coagulation records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep route-specific inputs, outputs, yields, water, and energy separate. A weighted result may be reported only with production-mass weights for the same declared period. |
| `energy_units` | Electricity and thermal energy | Energy | kWh and MJ | Preserve metered units and conversion factors. Do not combine electricity and thermal energy into one unqualified amount. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground production | Include receipt of the declared milk-derived feed, route-specific coagulation, curd separation, washing, dewatering, drying, finishing, on-site utilities directly attributable to production, and treatment of foreground wastes through the point at which dry casein is ready at the manufacturing gate. | `codex-cxs-290-1995`; `eu-fdm-bat-2019-2031` |
| `boundary_route_actual` | coagulation route | Include acidulant or starter-culture operations only for an acid route and rennet or other coagulating-enzyme operations only for an enzyme route. Do not create a hybrid average unless the reporting product and period actually contain both routes and the weighting is disclosed. | `codex-cxs-290-1995` |
| `boundary_upstream_feed` | milk-derived feed | Represent milk production and supplier processing before the declared facility receipt point with traceable upstream datasets; do not silently recreate them inside the casein foreground. | `eu-pef-2021-2279` |
| `boundary_downstream` | post-gate stages | Exclude distribution, customer formulation, use, and end-of-life from the foreground production dataset. A downstream lifecycle model may add them without changing this reference flow. | `eu-pef-2021-2279` |
| `boundary_no_conversion` | product scope | Stop the casein foreground before neutralisation to caseinate or conversion to another derivative, glue, or adhesive. | `un-cpc-3-0-casein`; `codex-cxs-290-1995` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Milk-derived feed material received at the casein facility, normally skimmed milk or another declared product obtained from milk |
| starting_condition_role | Upstream product input to foreground casein manufacture |
| product_classification_scope | CPC 3.0 22260 Casein; the foreground output remains casein and excludes caseinates, derivatives, glues, and adhesives |
| recursive_input_rule | Purchased casein entering reprocessing shall be recorded as a same-category input with its upstream dataset and shall not cause its upstream production to be recreated; internal rework that does not cross the facility boundary shall be disclosed and netted once in the batch balance |
| upstream_dataset_requirement | Supplier- and route-representative dataset for the milk-derived feed, including geography, technology, time period, product state, dry-matter or moisture basis, and allocation status |
| disclosure | Declare feed material, animal origin, edible or technical grade, coagulation route, facility location, reporting period, drying technology, on-site or off-site wastewater treatment, packaging status, and all allocation choices |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `casein_coagulation` | Route-specific casein coagulation | required |  | Convert the declared milk-derived feed into casein curd and liquid co-product by the actual acid or enzyme route | Per kg dry casein reference product |
| `curd_recovery_washing` | Curd recovery, washing, and dewatering | required |  | Separate curd, remove soluble constituents, wash, and dewater the curd | Per kg dry casein reference product |
| `drying_finishing` | Drying, milling, finishing, and packing | required |  | Dry and finish casein to the declared factory-gate state | 1 kg net casein reference product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when wastewater generated by casein production is treated within the reporting facility boundary | Treat attributable wastewater and report releases and treatment residues | Per kg dry casein reference product |

### Process: Route-specific casein coagulation (`casein_coagulation`)

#### Inputs

##### Product flows

###### Milk-derived feed material (`milk_derived_feed`)

Record the qualified skimmed milk or other declared product obtained from milk that crosses into the casein coagulation process. Supplier processing before receipt remains upstream.

- Selected flow: Skimmed milk or other declared milk-derived feed
- Flow property / unit: Mass / kg
- Amount rule: measured received mass attributable to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coagulation_batch_records`
- Range: Provisional feed-input screening range; replace with reviewed batch or reporting-period records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 100
  - Unit: kg/kg dry casein
  - Basis: temporary broad screen for milk-derived feed input per kg dry casein; replace when complete site or batch records are available or the feed basis changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Acidulant or lactic starter for the acid route (`acid_route_agent`)

Record this row only when acid precipitation is the actual route. Identify direct mineral-acid addition, lactic fermentation, or another declared acidification method; omit the row for an enzyme route.

- Selected flow: Route-specific acidulant or lactic starter
- Flow property / unit: Mass / kg
- Amount rule: measured purchased or prepared amount attributable to acid-route batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry acid casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coagulation_batch_records`
- Sources: `codex-cxs-290-1995`
- Range: Provisional acid-route agent screen; replace with formulation and batch records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg dry acid casein
  - Basis: temporary broad screen covering direct acid or prepared starter inputs; replace when route-specific records are available or the acidification method changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rennet or other coagulating enzyme for the enzyme route (`enzyme_route_agent`)

Record this row only when rennet or another suitable coagulating enzyme is the actual route; omit it for an acid route.

- Selected flow: Rennet or other suitable coagulating enzyme
- Flow property / unit: Mass / kg
- Amount rule: measured commercial preparation amount attributable to enzyme-route batches, with preparation strength disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry enzyme-coagulated casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coagulation_batch_records`
- Sources: `codex-cxs-290-1995`
- Range: Provisional enzyme-preparation screen; replace with formulation and batch records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg dry enzyme-coagulated casein
  - Basis: temporary broad screen for commercial enzyme preparation; replace when route-specific records are available or preparation strength changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coagulation electricity (`coagulation_electricity`)

Record metered or defensibly allocated electricity for feed handling, agitation, pumping, and coagulation controls.

- Selected flow: Electricity, supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated allocation from verified submeter and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resource_meter_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- Range: Provisional coagulation-electricity screen; replace with submetered records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg dry casein
  - Basis: temporary broad screen; replace after complete route-specific meter coverage or when equipment changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coagulation thermal energy (`coagulation_thermal_energy`)

Record steam, hot-water, or fuel-derived thermal energy used within coagulation, without merging it with electricity.

- Selected flow: Thermal energy supplied to coagulation
- Flow property / unit: Energy / MJ
- Amount rule: measured energy carrier use converted with documented factors and allocated to the actual route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resource_meter_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- Range: Provisional coagulation-thermal-energy screen; replace with metered records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg dry casein
  - Basis: temporary broad screen; replace after complete route-specific energy records or when heating technology changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Coagulated casein curd (`coagulated_casein_curd`)

Calculate wet curd leaving coagulation from measured transfer mass and moisture or dry-matter testing. Keep acid and enzyme routes separate.

- Selected flow: Wet casein curd
- Flow property / unit: Mass / kg
- Amount rule: measured wet curd mass and calculated dry-matter equivalent by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coagulation_batch_records`
- Sources: `codex-cxs-290-1995`
- Range: Provisional wet-curd screen; replace with measured curd yield and moisture records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg wet curd/kg dry casein
  - Basis: temporary broad screen for wet curd transfer; replace when paired mass and moisture records cover the declared period
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquid serum co-product (`coagulation_serum`)

Record the liquid stream separated from the coagulum as a co-product when it leaves for beneficial use; otherwise classify it according to its actual waste-management route.

- Selected flow: Acid serum or rennet-casein serum, route-specific
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or volume converted with measured density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coagulation_batch_records`
- Range: Provisional serum-output screen; replace with measured transfer records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg dry casein
  - Basis: temporary broad screen for liquid co-product; replace when route-specific transfer and density records cover the declared period or destination changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Curd recovery, washing, and dewatering (`curd_recovery_washing`)

#### Inputs

##### Product flows

###### Coagulated casein curd input (`curd_input`)

Carry the route-specific wet curd from coagulation into separation and washing without duplicating the upstream milk-derived feed.

- Selected flow: Wet casein curd
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer reconciled to the coagulation output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_dewatering_records`
- Range: Provisional internal-curd reconciliation screen; replace with paired transfer records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg wet curd/kg dry casein
  - Basis: temporary broad screen; replace when paired coagulation and washing transfer records cover the declared period
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Curd washing water (`curd_washing_water`)

Record potable or process-quality water that crosses into curd washing; include recycled water only once and disclose its source and quality control.

- Selected flow: Water supplied for casein-curd washing
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water plus separately recorded recovered-water input, net of internal recirculation counted within the process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_dewatering_records`
- Sources: `codex-cxs-290-1995`; `eu-fdm-bat-2019-2031`
- Range: Provisional washing-water screen; replace with water-balance and batch records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/kg dry casein
  - Basis: temporary broad screen for make-up water; replace when process-level water balance covers the declared period or washing configuration changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovery and dewatering electricity (`recovery_electricity`)

Record electricity for separation, washing, pumping, and mechanical dewatering.

- Selected flow: Electricity, supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated allocation from verified submeter and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resource_meter_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- Range: Provisional recovery-electricity screen; replace with submetered records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg dry casein
  - Basis: temporary broad screen; replace after complete equipment-level records or when dewatering technology changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Washed and dewatered casein curd (`dewatered_casein_curd`)

Record dewatered curd mass and moisture or dry matter before drying, retaining the actual route identifier.

- Selected flow: Washed and dewatered casein curd
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass corrected only with measured moisture or dry matter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_dewatering_records`
- Range: Provisional dewatered-curd screen; replace with measured transfer and moisture records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg wet curd/kg dry casein
  - Basis: temporary broad screen; replace when paired transfer and moisture records cover the declared period
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Casein washing wastewater (`washing_wastewater`)

Record the net liquid waste stream leaving washing and dewatering, including destination and whether it is treated on site or transferred off site.

- Selected flow: Casein-production wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or transfer volume converted with measured or justified density and reconciled to the process water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_dewatering_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional wastewater screen; replace with flow-meter and water-balance records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/kg dry casein
  - Basis: temporary broad screen; replace when process-level wastewater monitoring covers the declared period or treatment routing changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Drying, milling, finishing, and packing (`drying_finishing`)

#### Inputs

##### Product flows

###### Dewatered casein curd input (`dewatered_curd_input`)

Carry the measured dewatered curd into drying and reconcile it to the upstream output.

- Selected flow: Washed and dewatered casein curd
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer corrected only with measured moisture or dry matter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_finishing_records`
- Range: Provisional drying-feed screen; replace with transfer and moisture records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg wet curd/kg dry casein
  - Basis: temporary broad screen; replace when paired feed and product records cover the declared period or dryer feed condition changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying and finishing electricity (`drying_electricity`)

Record electricity for drying auxiliaries, milling, conveying, sieving, dust control, and packing where included.

- Selected flow: Electricity, supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated allocation from verified submeter and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resource_meter_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- Range: Provisional drying-electricity screen; replace with submetered records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg dry casein
  - Basis: temporary broad screen; replace after complete dryer and finishing meter coverage or when equipment changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying thermal energy (`drying_thermal_energy`)

Record delivered steam, hot air, or fuel-derived thermal energy used for drying, with energy carrier and conversion basis disclosed.

- Selected flow: Thermal energy supplied to drying
- Flow property / unit: Energy / MJ
- Amount rule: measured energy carrier use converted with documented factors and allocated to the dryer campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resource_meter_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- Range: Provisional drying-thermal-energy screen; replace with metered records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg dry casein
  - Basis: temporary broad screen; replace after complete dryer energy records or when drying technology or feed moisture changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging materials (`primary_packaging`)

Record packaging only when the declared factory-gate product is packaged. Omit this row for a declared bulk unpackaged product.

- Selected flow: Route- and product-specific primary packaging materials
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issued minus verified returns and unused material, by packaging type
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_finishing_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging screen; replace with bill-of-material and issue records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net casein
  - Basis: temporary broad screen; replace when product-specific packaging records cover the declared period or packaging format changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Casein reference product (`casein_reference_product`)

Report the net dry casein product at the manufacturing gate. The UUID, property, unit group, and unit are fixed by section 3; product quality values remain measured foreground qualifiers.

- Selected flow: Casein `53f7b47f-8d1a-4420-8e79-e931990656e6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net reference product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `un-cpc-3-0-casein`; `codex-cxs-290-1995`
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: exact normalized net casein reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)
  - Sources: `un-cpc-3-0-casein`; `codex-cxs-290-1995`

##### Waste flows

###### Off-specification casein and finishing residues (`offspec_casein_waste`)

Record off-specification casein, collected fines not returned as internal rework, and other product residues by actual destination.

- Selected flow: Off-specification casein and finishing residues
- Flow property / unit: Mass / kg
- Amount rule: measured waste transfer net of documented internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_finishing_records`
- Range: Provisional finishing-waste screen; replace with weighed disposition records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg dry casein
  - Basis: temporary broad screen; replace when weighed waste and internal-rework records cover the declared period or product specification changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Channelled particulate matter from drying and finishing (`drying_particulate_emission`)

Record only the measured or calculated release to air after abatement. Do not convert a BAT-associated performance level into a generic emission amount.

- Selected flow: Particulate matter to air, size fraction and compartment declared
- Flow property / unit: Mass / kg
- Amount rule: measured concentration and gas flow integrated over operating time, or another documented site-specific method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_wastewater_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional particulate screen; replace with site-specific monitoring
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg dry casein
  - Basis: temporary broad screen only; replace when representative concentration, flow, control-device, and operating-time records are available or abatement changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Waste flows

###### Casein-production wastewater received for treatment (`wastewater_to_treatment`)

Include only wastewater treated within the reporting facility. Off-site treatment shall instead be represented by a traceable waste-treatment dataset.

- Selected flow: Casein-production wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured treatment inflow attributable to casein production and reconciled with upstream wastewater outputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_wastewater_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional treatment-inflow screen; replace with flow monitoring
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/kg dry casein
  - Basis: temporary broad screen; replace when attributable treatment-inflow records cover the declared period or routing changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Wastewater-treatment electricity and chemicals (`wastewater_treatment_inputs`)

Record treatment electricity and chemicals as separate underlying records; aggregate here only after preserving carrier and chemical identities in the data package.

- Selected flow: Wastewater-treatment electricity and chemicals, disaggregated in the foreground package
- Flow property / unit: Multiple properties / declared units
- Amount rule: metered electricity and measured chemical issue records attributable to casein wastewater
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_wastewater_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional treatment-input screen; replace with metered and issue records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg-or-kWh/kg dry casein, disaggregated before use
  - Basis: temporary broad presence and magnitude screen only; replace with separate electricity and chemical records before quantitative use or when treatment technology changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record sludge and other treatment residues by measured mass, solids basis, and destination.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with dry-solids content and destination declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_wastewater_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional sludge screen; replace with weighed solids records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg wet sludge/kg dry casein
  - Basis: temporary broad screen; replace when sludge mass, dry-solids, and destination records cover the declared period or treatment changes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated wastewater discharge (`treated_water_discharge`)

Record actual releases to water by receiving compartment and monitored relevant parameters; do not use BAT performance values as the inventory.

- Selected flow: Treated wastewater and monitored substances to the receiving water compartment
- Flow property / unit: Mass / kg
- Amount rule: measured flow combined with site-specific monitored concentrations or loads for relevant substances
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry casein reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_wastewater_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional treated-water flow screen; replace with monitored discharge records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg water/kg dry casein
  - Basis: temporary broad flow screen only; replace when flow and relevant-parameter monitoring covers the declared period or discharge conditions change
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared casein production operations | First use process subdivision, route-specific metering, or another documented separation that avoids allocation while preserving mass and energy balances. | `eu-pef-2021-2279` |
| `allocation_liquid_coproduct` | casein and beneficial liquid serum co-product | When subdivision cannot resolve shared burdens, apply a documented physical relationship only when it reflects the causal use of resources. If no defensible physical relationship exists, use an economic relationship based on a representative declared period and report a sensitivity result. | `eu-pef-2021-2279` |
| `allocation_cream_or_other_output` | additional milk-derived co-products | If cream separation or another milk-processing step is inside the foreground, disclose all co-products and apply the same hierarchy. Do not import a supplier allocation without confirming that its boundary and product state match the declared starting condition. | `eu-pef-2021-2279` |
| `allocation_waste_and_rework` | wastes, residues, and internal rework | Do not treat internal rework as a second output. Record net rework once. Classify a liquid or solid stream as co-product only when its beneficial use and product status are evidenced; otherwise model its actual waste treatment. | `eu-fdm-bat-2019-2031` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coagulation_batch_records` | `casein_coagulation` | feed, route agent, curd, and serum | batch production record | batch id; route; feed identity and mass; acidulant, starter, or enzyme identity and amount; curd mass; serum mass or volume and density; moisture or dry matter; timestamps | calibrated scales, tank levels, flow meters, formulation records, and laboratory results reconciled by batch | kg; L; kg/L; mass fraction | each batch or continuous campaign with defined cut points | all batches or campaigns in the declared reporting period | each producing facility and route | sum attributable records, convert volumes with measured density, calculate dry mass with measured moisture, and normalize to net dry casein output | calibration records; batch sheets; laboratory certificates; reconciliation sign-off |
| `cp_washing_dewatering_records` | `curd_recovery_washing` | curd transfer, water, dewatered curd, and wastewater | batch and meter record | batch id; inlet curd mass and moisture; make-up and recovered water; outlet curd mass and moisture; wastewater flow; recycle; destination | transfer scales, water and wastewater meters, moisture tests, and batch mass balance | kg; L; mass fraction | each batch plus meter total for each campaign | all production days in the declared reporting period | each washing and dewatering line | reconcile inlet, outlet, recycle, and wastewater; count internal recirculation once; normalize to net dry casein | meter calibration; laboratory results; signed water balance; destination records |
| `cp_drying_finishing_records` | `drying_finishing` | dryer feed, casein product, packaging, waste, and internal rework | batch, inventory, and quality record | campaign id; route; wet feed mass and moisture; net casein mass and moisture; grade; product specification; packaging issued and returned; off-specification mass; fines; rework; destinations | calibrated scales, moisture tests, warehouse issue records, quality release records, and waste manifests | kg; mass fraction | each batch or dryer campaign | all campaigns in the declared reporting period | each dryer and finishing line | reconcile dry solids, net internal rework once, subtract packaging from reference product mass, and normalize to 1 kg net casein | scale calibration; laboratory certificate; release record; inventory reconciliation; waste manifest |
| `cp_resource_meter_records` | `casein_coagulation`; `curd_recovery_washing`; `drying_finishing` | electricity and thermal energy | meter and utility record | meter id; process or line; timestamp; opening and closing readings; energy carrier; steam or fuel amount; conversion factor; operating time; allocation driver | calibrated submeters where available; otherwise documented engineering allocation from main meters and operating records | kWh; MJ; carrier-specific units | meter interval and each production campaign | complete declared reporting period including shutdown and cleaning where attributable | each facility, route, and major process | subtract verified non-production loads, allocate shared use with documented causal driver, preserve electricity and thermal energy separately, and normalize to net casein | meter calibration; invoices; conversion-factor source; allocation worksheet; operating log |
| `cp_emission_and_wastewater_records` | `drying_finishing`; `onsite_wastewater_treatment` | particulate release, treatment inputs, sludge, and treated discharge | monitoring and transfer record | source id; flow; concentration; parameter; sampling time; operating time; treatment electricity and chemicals; sludge mass and solids; receiving compartment; destination | site monitoring, laboratory analysis, flow meters, emission calculations, chemical issue records, and waste transfer records | kg; kg/h; mg/Nm3; m3; mg/L; kWh; mass fraction | according to permit and monitoring plan, plus each material operating change | representative normal operation and declared reporting period | each relevant emission point and treatment system | integrate measured concentration and flow over attributable operation, calculate loads, normalize to net casein, and retain non-detect treatment | monitoring report; laboratory accreditation; calibration; chain of custody; permit record; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass` | curd and casein mass | dry mass = measured as-received mass × measured dry-matter fraction; never substitute a Codex maximum or minimum for the batch measurement | as-received mass; measured moisture or dry matter | kg dry matter | `codex-cxs-290-1995` |
| `calc_reference_normalisation` | all inventory rows | normalized amount = attributable process amount ÷ net kg casein reference product for the same route, facility, and period | attributable amount; net casein mass | amount per 1 kg casein | `eu-pef-2021-2279` |
| `calc_route_weighting` | result containing both acid and enzyme routes | calculate each route first; combined amount = sum of route amount × route net-casein mass share, with shares and period disclosed | route-specific normalized amounts; route net-casein masses | production-mass-weighted amount | `codex-cxs-290-1995`; `eu-pef-2021-2279` |
| `calc_mass_balance` | coagulation, washing, and drying | reconcile measured inputs with products, co-products, wastes, releases, inventory change, and documented measurement uncertainty on consistent moisture or dry-matter bases | measured masses; moisture; recycle; inventory change | signed process mass balance and unexplained difference | `eu-fdm-bat-2019-2031` |
| `calc_emission_load` | monitored air and water releases | emitted load = representative measured concentration × measured flow integrated over attributable operating time, with unit conversions and non-detect handling documented | concentration; flow; time; detection-limit rule | kg release per 1 kg casein | `eu-fdm-bat-2019-2031` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate that the output is casein and not a caseinate, other derivative, glue, adhesive, or formulated blend; declare edible or technical grade and the applicable route. | product specification; sales description; process flow; CXS 290 declaration when edible |
| `dq_route_specificity` | production inventory | Keep acid and enzyme routes separate through data collection and calculation; record only the route agents actually used. | batch route code; formulation record; process flow; route-specific mass and energy reconciliation |
| `dq_primary_data` | foreground processes | Use facility- and product-specific records for feed, route agents, water, energy, products, co-products, wastes, and direct releases. A reasoned estimate is not an acceptable final foreground value. | signed batch records; calibrated meters; invoices; laboratory and monitoring reports; calculation worksheets |
| `dq_temporal_completeness` | reporting period | Cover every production batch or campaign and attributable shutdown, cleaning, rework, and treatment event in the declared period, or disclose and justify each gap. | production calendar; completeness reconciliation; missing-data log; gap treatment |
| `dq_estimate_replacement` | provisional ranges | Treat every `reasoned_estimate` range as temporary authoring or QA screening only. Replace it with reviewed site- or batch-specific evidence once a complete declared reporting period is available, or immediately after a material change in route, equipment, grade, feed, packaging, or treatment. | approved replacement dataset; review record; change-control record |
| `dq_source_limits` | Codex and BAT sources | Use Codex provisions for edible-product identity and route distinction and use BAT for process and monitoring coverage. Do not use composition limits, quality factors, BAT-AELs, or indicative BAT performance levels as generic casein LCI values. | source-use review linked to `codex-cxs-290-1995` and `eu-fdm-bat-2019-2031` |
| `dq_representativeness` | published dataset | Disclose technological, geographical, temporal, and precision representativeness, including the actual dryer, coagulation route, facility, period, and data gaps. | data quality assessment; dataset metadata; verification record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | product identity | Fail validation if the declared output is a caseinate, other derivative, casein glue, adhesive, or formulation rather than casein. | `un-cpc-3-0-casein`; `codex-cxs-290-1995`; `codex-cxs-206-1999` |
| `validate_reference_identity` | reference flow | Require product flow UUID `53f7b47f-8d1a-4420-8e79-e931990656e6`, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg net casein after normalization. | `un-cpc-3-0-casein` |
| `validate_route` | coagulation inventory | Require exactly the actual declared route for each batch or campaign. Acid-route agents shall not be reported for an enzyme-only route, and rennet or other enzyme agents shall not be reported for an acid-only route. | `codex-cxs-290-1995` |
| `validate_boundary` | process coverage | Require coagulation, curd recovery and washing, drying and finishing, route-specific utilities, wastewater routing, wastes, direct releases, co-product destinations, and upstream milk-derived-feed dataset disclosure. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_mass_basis` | mass and yield | Require consistent as-received, wet, dry, or corrected bases; reject any conversion that substitutes a Codex composition limit for measured batch moisture or dry matter. | `codex-cxs-290-1995` |
| `validate_allocation` | multi-output processes | Require allocation hierarchy, selected relationship, period, factors, co-product classification, and sensitivity where economic allocation is used; factors shall sum to one within documented rounding. | `eu-pef-2021-2279` |
| `validate_primary_records` | foreground values | Reject `reasoned_estimate` as a final amount for a published foreground dataset. Require traceable site or batch records and disclosed calculation for every material foreground row. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_source_use` | source-derived constraints | Reject use of Codex composition or quality limits and BAT emission or performance levels as uniform inventory quantities. Site monitoring and production records shall determine the LCI. | `codex-cxs-290-1995`; `eu-fdm-bat-2019-2031` |
| `validate_bilingual_alignment` | PCR renderings | Require the same ordered system-boundary, allocation, and validation rule identifiers in the English and Chinese renderings. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground casein production data package and factory-gate unit-process dataset |
| downstream_use | May support `secondary_dataset` or `background_dataset` use after review of route, geography, time, technology, allocation, and data quality |
| allowed_use | Route- and grade-matched modelling of casein production and downstream lifecycle models that preserve the declared reference-flow qualifiers |
| excluded_use | Direct proxy for caseinates, other derivatives, casein glues or adhesives; substitution between acid and enzyme routes without disclosed weighting; use of provisional ranges as final LCI |
| required_metadata | PCR id; casein flow UUID; facility and geography; reporting period; acid or enzyme route; edible or technical grade; moisture or dry-matter basis; animal origin; feed state; dryer and treatment technology; packaging status; allocation; upstream datasets |
| required_quality_disclosure | Meter and batch coverage; laboratory and monitoring methods; data gaps; estimate replacement; mass-balance difference; allocation sensitivity; technological, geographical, temporal, and precision representativeness |
| update_trigger | New reviewed site or batch evidence replacing a provisional range; material change in feed, route, equipment, grade, drying, packaging, wastewater treatment, abatement, allocation, or product specification; corrected UUID identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-casein` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 22260 Casein, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-12 | Classification identity and product-scope anchor only |
| `codex-cxs-290-1995` | Standard (`standard`) | Codex Alimentarius, CXS 290-1995 Standard for Edible Casein Products, revised 2001 and amended through 2023, https://workspace.fao.org/sites/codex/Standards/CXS%20290-1995/CXS_290e.pdf, retrieved 2026-08-12 | Edible acid casein, rennet casein, and caseinate distinction; route decomposition; potable washing water and edible-product identity; not generic LCI values |
| `codex-cxs-206-1999` | Standard (`standard`) | Codex Alimentarius, CXS 206-1999 General Standard for the Use of Dairy Terms, amended 2022, https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf, retrieved 2026-08-12 | Milk-product terminology and identity disclosure |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, OJ L 471, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng, retrieved 2026-08-12 | Product-specific foreground data, life-cycle boundary, allocation hierarchy, representativeness, reporting, and verification |
| `eu-fdm-bat-2019-2031` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, OJ L 313, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng, retrieved 2026-08-12 | Process-level inventory and monitoring coverage for water, energy, raw materials, wastewater, waste gas, residues, and treatment; BAT values are not generic LCI |
