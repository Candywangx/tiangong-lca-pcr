---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.diammonium-hydrogenorthophosphate-diammonium-phosphate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Granular fertilizer-grade diammonium phosphate

## 1. Scope and Applicability

This methodology draft addresses fertilizer-grade granular DAP made by ammoniating wet-process phosphoric acid, followed by granulation, drying, cooling, sizing, conditioning and plant-gate delivery. It covers pre-neutraliser, pipe-reactor and combined configurations only when actual operation is documented. It does not model acid or ammonia manufacture inside this foreground unit; their production and delivery require linked upstream datasets. The DAP-specific basis is LVIC-AAF section 7.2.8 (printed page 288).

Exclude MAP as the declared product, ammonium polyphosphate solutions, high-purity reagent crystals, ammoniated superphosphates, nitrophosphate conversion, PK/potassium nitrate and dry-blended NPK. Sulfate and actual impurities may be present in commercial DAP: a nutrient grade is not a pure-species mass fraction. Producer specifications illustrate product identification only and supply no universal formulation, moisture, yield or energy amount.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.diammonium-hydrogenorthophosphate-diammonium-phosphate |
| classification_refs | CPC 3.0 34642; narrower |
| covered_products | Granular fertilizer-grade DAP, with actual declared assays and delivery state |
| excluded_products | MAP; other NP formulations; PK; potassium nitrate; NPK blends; liquid polyphosphate; high-purity DAP |
| representative_product | Granular fertilizer-grade diammonium phosphate |
| production_route | Wet-process phosphoric acid + anhydrous ammonia; reaction and granulation loop |
| market_state | Accepted granular solid, bulk or actual packaged delivery at plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply DAP nitrogen/phosphate fertilizer as a declared material |
| How much | 1 kg net accepted fertilizer product |
| How well | Declared batch assays of total/ammoniacal N, available/water-soluble and total P/P2O5, moisture, DAP/sulfate composition, granule size and conformity test method; no crop-yield equivalence claim |
| How long or cycle | One declared production campaign or representative reporting period, through plant-gate acceptance |
| reference_flow_link | dap_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Diammonium hydrogenorthophosphate (diammonium phosphate) `522a424b-bc31-44d1-93c6-47da1f41b0f2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU and producer; CAS/species and composition; nutrient assay methods and reporting basis; wet/as-delivered net mass; moisture; acid route and concentration; ammonia state; granulation configuration; actual coating ingredients; packaging; geography and period; background-provider quantity definitions |

All required qualifiers must appear in the concrete data package. Record fertilizer net mass, dry solids, nutrient equivalents and pure DAP content separately.

Keep original totals for the complete same-product, same-state and same-route reporting period, including start-up, shutdown, failed or zero-output lots, rework, rejects and work in progress (WIP). Define Q as accepted net DAP crossing the final acceptance plane once in that period. Reconcile Q against dispatch, finished-product stock changes and separately identified purchased product; do not add stock adjustments to an already counted acceptance quantity. Track WIP changes and their carried physical quantities and burdens explicitly. Divide each period exchange total by positive Q once, after any justified burden attribution; never average only successful batches or normalise an already normalised record. When Q is zero, retain the complete physical and burden pools and mark the normalised dataset unavailable. No invented divisor or zero inventory is permitted.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | dap_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg accepted net product, including actual product water and formulation constituents; exclude packaging. All inventories use this same denominator and cp_product. |
| nutrient_basis | phosphoric_acid; dap_product | Mass | kg | Separate wet liquor, active H3PO4, actual P and P2O5-equivalent quantities. Use measured assays and declared molecular-mass conversions. Available phosphate assay is not total P and cannot close the elemental P balance. Do not use N + P2O5 as total product mass. |
| utility_basis | electricity; natural_gas; imported_steam | Declared native property | MJ; m3; kg, separately | Electricity uses the native Net calorific value/MJ property, with transparent kWh conversion. Gas volume is not mass; match metering and provider reference conditions. Steam mass and net delivered enthalpy are different quantities; document both without an assumed heat factor. |
| emission_basis | all elementary outputs | Mass | kg | Retain species, origin, medium, measurement standard conditions and wet/dry basis. Convert F, N or NO2 equivalents only with defensible speciation; otherwise mark pending. Use disjoint PM fractions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh wet-process acid, ammonia and other actual inputs delivered to this foreground unit |
| starting_condition_role | foreground collection boundary |
| product_classification_scope | CPC 3.0 34642; granular fertilizer-grade subset |
| recursive_input_rule | Purchased DAP is a separate measured input with upstream production; internal fines/oversize and recovered liquor are loops, not burden-free purchased DAP or extra reference products |
| upstream_dataset_requirement | Compatible production and delivery for every external product input; include integrated-site acid/ammonia supply without duplication |
| disclosure | State starting materials, integration, transport, stocks, shared utilities, air/water treatment, packaging and equipment coverage |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_operations | Include receipt, storage, neutralisation, granulation, drying, cooling, screening/crushing, conditioning, capture/scrubbing, actual purge handling and plant-gate delivery. The single unit aggregates these physically linked stages; retain stage meters and recycle logs. | eu-lvic-aaf-2007; epa-ammonium-phosphate-1993 |
| boundary_no_free_inputs | Receipt is a foreground collection boundary, not a free upstream cut-off. External treatment and integrated utilities require linked burdens. Add each actual fuel, additive, direct abstraction and discharge as its own atomic row. Any capital-equipment exclusion must be justified and disclosed; equipment inclusion uses actual physical mass and documented service/lifetime throughput separately. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| dap_unit | Granular fertilizer-grade diammonium phosphate | required | Selected acid-ammonia route with actual site equipment | foreground | 1 kg accepted net DAP product |

### Process: DAP reaction, finishing and control (`dap_unit`)

#### Inputs

##### Product flows

###### Orthophosphoric Acid (`phosphoric_acid`)

Measure fresh acid liquor crossing the unit boundary, its water, H3PO4/P2O5 basis, impurities and fluorine. This UUID is conditional on the wet-process Central Prayon weak-acid identity. Keep wet liquor mass and active acid mass separately; confirm which one the supplier background reference represents before linking. Internal scrubber acid is not fresh acid.

- Selected flow: Orthophosphoric Acid `9102d985-3980-4e5d-a870-f5164ff2e977`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_feed`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`

###### Ammonia, anhydrous (`anhydrous_ammonia`)

Meter net fresh anhydrous NH3 feed, including tank-stock reconciliation and documented purity; do not substitute aqueous ammonia mass. Record stages of ammoniation separately in the physical log without counting the total feed twice.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_feed`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`

###### Sulfuric acid (`sulfuric_acid`)

Include only when used for analysis control or acid scrubbing. This identity requires 93–98% H2SO4 supply; measure actual wet mass and assay rather than assuming 93%. Account for resulting ammonium sulfate in the delivered fertilizer and in N/S balances; it is not a separate co-product when retained in DAP.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_feed`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `epa-ammonium-phosphate-1993`; `mosaic-dap-sds-2020`

###### Process Water (`makeup_water`)

Measure external treated make-up water for scrubbing, dilution and cleaning. Document source and treatment and measured density for any volume conversion. Keep internal pond-water circulation and acid-feed water separately in the water ledger; do not count recirculation as fresh water. Direct abstraction needs its own elementary resource row and cannot use this product UUID.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_feed`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `eu-lvic-aaf-2007`

###### Alternating current (`electricity`)

Record metered electricity for pumps, granulator, dryer drives, fans, screens, crusher, cooling, scrubbing, storage and packing; convert measured kWh using 1 kWh = 3.6 MJ. This UUID applies only to 1–35 kV grid-average supply to user in China (CN); match actual voltage, region, period and losses. Other supply needs a separately verified identity, with no assumed grid mix.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_utilities`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-lvic-aaf-2007`

###### natural gas in the gaseous state (`natural_gas`)

Include actual gas burned in the dryer or attributable on-site heat supply, and measured losses. Record pressure, temperature, dry/wet definition, composition, compressibility and meter correction; convert to the provider m3 definition explicitly. Secondary Mass meanValue 1 is not a density. Record gas consumption and combustion outputs, without also buying the same internally generated heat.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_utilities`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-gas-combustion`

###### Imported process steam (`imported_steam`)

If steam crosses the boundary, measure delivered steam mass, pressure, temperature, quality and returned condensate mass/state; report net heat separately from enthalpy differences. No steam UUID is selected until pressure and supplier reference (steam mass or delivered heat) agree; a calorific-value property alone does not establish useful delivered enthalpy.

- Selected flow: Imported process steam
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_utilities`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-ammonium-phosphate-1993`

###### Mineral Oil (`mineral_oil`)

Use this exchange only for separately supplied mineral oil or an actual ingredient in documented on-site formulation; weigh consumption and identify CAS/grade and supplier. It does not represent an entire purchased anti-caking preparation. For purchased formulations use coating_preparation for the complete supplied mass and identity; constituent amounts support the physical ledger and must not be purchased a second time upstream. Other separately supplied on-site formulation ingredients require their own atomic rows.

- Selected flow: Mineral Oil `e4d87634-a041-48d6-b071-da57551c8ab5`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_feed`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `epa-ammonium-phosphate-1993`

###### Mineral-oil-based fertilizer anti-caking preparation (`coating_preparation`)

If a formulated mineral-oil-based dust suppressant or anti-caking preparation is purchased, record the complete supplied formulation and its actual SKU, supplier, wet mass, water, active fractions and all carrier constituents. This row is not the pure mineral-oil component and has no adopted UUID. Use mineral_oil only for additional separately supplied oil; do not count formulation ingredients as duplicate purchases. Add each genuinely distinct purchased preparation as its own exchange. Total preparation and constituent/carrier balances remain linked on the same reporting basis.

- Selected flow: Mineral-oil-based fertilizer anti-caking preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured complete supplied formulation consumed during the complete reporting period divided by positive accepted net product Q once; use `cp_feed`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `epa-ammonium-phosphate-1993`

###### Polypropylene woven fertilizer sack (`pp_bag`)

If bagged delivery, measure actual sack polymer mass, capacity and count; weigh tared components and divide consumed mass by the same accepted net fertilizer output. No seed-packaging dataset, assumed 25 kg bag or default sack weight is transferable. Bulk delivery documents absence rather than a positive default.

- Selected flow: Polypropylene woven fertilizer sack
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_packaging`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `epa-ammonium-phosphate-1993`

###### Polyethylene film (`pe_liner`)

If a separate PE liner is used, measure consumed liner mass and grade. The physical PE-film identity is retained despite the source CPC29220 classification defect; clarify with the supplier. Exclude it from fertilizer net mass and do not count a liner already included in an inseparable purchased sack twice.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_packaging`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `epa-ammonium-phosphate-1993`

#### Outputs

##### Product flows

###### Granular fertilizer-grade diammonium phosphate (`dap_product`)

1 kg accepted net fertilizer, including its actual moisture, sulfate and conditioning constituents but excluding transport packaging. Count accepted production at final acceptance once and reconcile it with dispatch and opening/closing finished-product stocks; purchased finished DAP and rework are identified separately. This is not 1 kg pure (NH4)2HPO4, N or P2O5. The selected generic DAP product identity is conditional on this declared granular fertilizer subset and the whole as-delivered kg basis. Its English and Chinese baseNames, English comment and classification identify DAP; the Chinese generalComment inconsistently says “磷酸二氢铵（磷酸二铵）”. Disclose this local translation debt for curator clarification; it does not establish MAP chemistry. The native record supplies no CAS. Verify the actual product species, assays, composition and compatible background-provider quantity; do not claim that all source metadata are error-free.

- Selected flow: Diammonium hydrogenorthophosphate (diammonium phosphate) `522a424b-bc31-44d1-93c6-47da1f41b0f2`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `mosaic-dap-spec-2024`; `mosaic-dap-sds-2020`

##### Waste flows

###### Ammonium-phosphate scrubber purge liquor (`scrubber_purge`)

Record actual purge leaving this unit for a named treatment/pond destination, including water, dissolved N/P/F/S and suspended solids. Internal return is a logged loop, not an external waste. Measure wet liquor mass and assays; treatment remains linked upstream of any final environmental discharge. No manganese-residue washing wastewater identity is applicable.

- Selected flow: Ammonium-phosphate scrubber purge liquor
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_waste`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-ammonium-phosphate-1993`

###### Ammonium-phosphate scrubber sludge (`scrubber_sludge`)

Record sludge actually removed from the acid scrubber circuit, its wet mass, dry solids, nutrients/fluoride and receiver. Settled material returned internally is not external waste. Do not call this gypsum from upstream phosphoric-acid manufacture or use a generic sewage-treatment identity without source compatibility.

- Selected flow: Ammonium-phosphate scrubber sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_waste`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-ammonium-phosphate-1993`

###### Discarded off-specification granular DAP (`discarded_dap`)

Record only discarded material leaving the unit, with assays and disposal/treatment destination. Internal undersize and crushed oversize remain physical recycle. Saleable off-grade fertilizer requires an explicit product output and allocation review, not relabelling as this waste or silently adding it to accepted DAP.

- Selected flow: Discarded off-specification granular DAP
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_waste`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvic-aaf-2007`

##### Elementary flows

###### ammonia (`nh3_air`)

Include post-control process NH3 and measured storage/transfer releases; distinguish NH3 mass from NH3-N. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-ammonium-phosphate-1993`

###### hydrogen fluoride (`hf_air`)

Use speciated HF mass; total fluoride reported as F is not HF mass and cannot be duplicated across HF and SiF4. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-ammonium-phosphate-1993`

###### silicium tetrafluoride (`sif4_air`)

Use speciated SiF4 mass; unresolved total-F speciation stays pending. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: silicium tetrafluoride `fe0acd60-3ddc-11dd-a706-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-ammonium-phosphate-1993`

###### particles (PM2.5) (`pm25_air`)

Use emitted particulate mass in the aerodynamic PM2.5 fraction, after controls and including measured fugitives. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-ammonium-phosphate-1993`

###### particles (PM2.5 - PM10) (`pmcoarse_air`)

Use only the PM2.5–PM10 interval; obtain it from compatible cumulative measurements, never add PM10 to PM2.5. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-ammonium-phosphate-1993`

###### particles (> PM10) (`pmover10_air`)

Use emitted particles larger than PM10; reconcile all disjoint fractions with emitted total dust, excluding collected recycle dust. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-ammonium-phosphate-1993`

###### carbon dioxide (fossil) (`co2_air`)

Use fossil CO2 from fuel/coating carbon oxidised in the foreground; retain unburned carbon and measured CO/CH4 before closing the carbon ledger. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### carbon monoxide (fossil) (`co_air`)

Use actual emitted fossil CO, with fuel-origin evidence; do not assume all fuel carbon becomes CO2. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### nitrogen monoxide (`no_air`)

Use NO species mass, not undifferentiated NOx as NO2 equivalent; no assumed NO/NO2 split. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### nitrogen dioxide (`no2_air`)

Use NO2 species mass; keep any measured NOx-equivalent channel separate for reconciliation, without duplicate LCI loading. N2O is separate. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### sulfur dioxide (`so2_air`)

Use measured SO2 species mass when fuel sulfur/process conditions support it; sulfur retained in ammonium sulfate is not an air emission. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### methane (fossil) (`ch4_air`)

Record measured/modelled fossil methane from incomplete combustion and gas loss, with an applicable equipment method; no default positive factor. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### nitrous oxide (`n2o_air`)

Assess actual combustion N2O with an applicable measurement or equipment model; do not infer nitric-acid manufacture in this DAP boundary. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`

###### water vapour (`water_air_air`)

Measure net process evaporation separately from inlet-air moisture and fuel-combustion water; retain all in the physical water balance and export only the correctly defined emission amount. Reaction water generation/consumption and organic dry-matter conversion require an independently supported reaction and composition basis; neither COD nor a balance residual establishes water, evaporation or yield. Integrate the actual release during the same production period and divide by accepted net output. Outdoor air, unspecified; refine to a verified subcompartment when known. A detected identity does not establish a positive emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured amount attributable to the same reporting period divided by accepted net product mass; use `cp_air`. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-ammonium-phosphate-1993`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| physical_and_burden_ledgers | Keep the unallocated physical ledger (fresh feeds, recycled loops, products, wastes, emissions and stocks) separate from environmental burden attribution. Every internal link has equal donor/recipient quantity on the same state basis. Allocation never reduces real product or waste mass. | ilcd-attributional-2010 |
| allocation_hierarchy | For attributional data, subdivide campaigns/shared operations first. Where impossible, document causal physical attribution and any justified alternative with sensitivity; no default nutrient, mass or economic allocation fraction. Recycle is not a co-product credit. A saleable second grade/exported nutrient stream requires measured output and a distinct classification/destination assessment before attribution. | ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | dap_unit | accepted net fertilizer | calibrated scales; dispatch; stocks; assay | lot; period; final accepted quantity Q; start/stop; failed and zero-output lots; rework; WIP; opening/closing stocks; net/gross/tare masses; moisture; total N/P/S/F; nutrient tests; off-grade quantities | Use calibrated final-acceptance weighing to count each product quantity once; independently reconcile dispatch and finished stocks, purchased product and WIP. Retain all period totals including failed/zero-output lots and rework; sample the same lots and separate assay bases. Aggregation detail: Q kg at final acceptance counted once; divide complete period records by positive Q once per 1 kg reference flow; Q=0 retains totals with no normalised result. | kg | each lot | one representative production period | DAP unit including finishing | per 1 kg reference flow | scale calibration; stock reconciliation; analytical methods and uncertainty |
| cp_feed | dap_unit | fresh feed and coating | meter/weighing and supplier assay | row_id; amount; purity; concentration; wet/dry state; liquor water; total N/P/S/F/C; acid origin; coating formulation and full supplied preparation wet mass; component and carrier-water fractions; supplier quantity basis; stocks | Use calibrated flow meters or weighed receipts with density/state corrections and stock reconciliation; keep whole solution and component ledgers. Aggregation detail: external consumed mass / accepted net product mass, per 1 kg reference flow. | kg | each lot or continuous integration | same period as cp_product | unit external inputs; internal loops separately | per 1 kg reference flow | supplier specification and reference-quantity definition; lab tests; calibration |
| cp_utilities | dap_unit | electricity, gas and steam measured separately | submeter and enthalpy records | row_id; substage; meter readings; kWh; gas m3; pressure; temperature; dry/wet; composition; compressibility; steam kg; inlet/condensate states; provider basis | Read calibrated meters; derive only documented corrections and measured steam enthalpy differences. Subdivide shared supply using auditable measurements; retain its attribution ledger. Aggregation detail: each attributable native quantity / accepted net product mass, per 1 kg reference flow. | MJ; m3; kg separately | continuous integration | same period as cp_product | reaction, finishing, controls and attributable utilities | per 1 kg reference flow | meter calibration; actual supply voltage; gas supplier definition; steam tables and states; no assumed efficiencies |
| cp_packaging | dap_unit | actual packaging components | tared component weighing and use count | row_id; SKU; polymer; capacity; mass per piece; consumed count; damaged/rejected packaging; reuse cycles if any | Weigh actual empty components; reconcile material use and counts. Keep physical number/mass separate from any justified service-cycle burden. Aggregation detail: consumed component mass / accepted net fertilizer mass, per 1 kg reference flow. | kg | each SKU and campaign | same period as cp_product | actual delivery configuration | per 1 kg reference flow | scale calibration; bill of materials; supplier evidence; no assumed bag mass or life |
| cp_waste | dap_unit | external purge, sludge and discarded DAP separately | weighing, assays and transfer records | row_id; wet mass; water; dry solids; total N/P/S/F/C; receiver; treatment; internal return; stock changes | Measure each actual stream crossing the unit boundary; reconcile linked treatment and receiving records; distinguish direct environmental release from waste transfer. Aggregation detail: external wet mass / accepted net product mass, per 1 kg reference flow. | kg | each removal or continuous purge | same period as cp_product | unit outlet and named receiver interface | per 1 kg reference flow | weighbridge tickets; samples; receiver acceptance; residual nutrient and water balance |
| cp_air | dap_unit | each species/particle interval separately | stack/fugitive measurements and documented equipment model | row_id; source; CAS/species; origin; interval; C; gas volume; time; T/P; wet/dry; reference O2; capture; recovery; F/N/NOx basis; detection limit; uncertainty; inlet air humidity | Integrate compatible concentration and actual normalized gas volume; correct matching wet/dry and reference O2 conventions. Include captured-stack and fugitive releases after controls. Retain unmeasured channels as pending, not zero. For combustion, use only a documented applicable equipment model when measurements cannot establish the channel. Aggregation detail: each emitted species mass / accepted net product mass, per 1 kg reference flow. | kg | representative operating modes including start/stop | same period as cp_product | reaction, dryer, cooling, screening, transfers, storage and actual combustion | per 1 kg reference flow | monitoring method and calibration; gas-flow integration; operating coverage; species and PM reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalise_period | all inventory rows | For every actual external exchange retain the complete same-product/state/route period total, including start/stop, failed or zero-output lots and rework, with WIP changes disclosed. Divide its attributable total by the same positive accepted net DAP Q kg from cp_product once. Keep unallocated physical totals and burden shares separately. Q=0 has no normalised result. Reference output is 1 kg. Keep original totals for the complete same-product, same-state and same-route reporting period, including start-up, shutdown, failed or zero-output lots, rework, rejects and work in progress (WIP). Define Q as accepted net DAP crossing the final acceptance plane once in that period. Reconcile Q against dispatch, finished-product stock changes and separately identified purchased product; do not add stock adjustments to an already counted acceptance quantity. Track WIP changes and their carried physical quantities and burdens explicitly. Divide each period exchange total by positive Q once, after any justified burden attribution; never average only successful batches or normalise an already normalised record. When Q is zero, retain the complete physical and burden pools and mark the normalised dataset unavailable. No invented divisor or zero inventory is permitted. | cp_product; cp_feed; cp_utilities; cp_packaging; cp_waste; cp_air | native-unit amount per 1 kg reference flow | ilcd-attributional-2010 |
| material_reconciliation | dap_unit | For water and each element N/P/S/F/C, inputs minus external outputs minus stock increase equals the explicitly explained residual. Internal recycle cancels across the complete unit, but donor/recipient substage logs remain equal. Total P uses total-P assay, not available phosphate. Account for fuel carbon, combustion water and inlet-air moisture separately. Do not close the ledger by changing yield or deleting emissions. | cp_feed; cp_product; cp_utilities; cp_waste; cp_air | physical residual and uncertainty per period, before allocation | eu-lvic-aaf-2007 |
| speciation_reconciliation | all elementary outputs | Use species mass fractions from documented molecular masses and actual speciation to reconcile F, NH3-N and NOx equivalents. For concentration C in kg/m3 and an already integrated compatible volume V in m3, emitted mass is the sum of C times V, with no extra duration multiplier. Only a volume flow rate in m3/time is integrated with time. Match concentration and flow measurement conditions; total PM equals the disjoint intervals only when sampling bases and condensable coverage agree. Unsupported splits remain pending. | cp_air | verified emitted species kg and unresolved channels | epa-ammonium-phosphate-1993; epa-gas-combustion |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_provider | all inventory rows | Check names, CAS, comments, route, medium, reference property and supplier quantity definition together. An identity UUID does not establish provider geography, technology or concentration compatibility. Missing ordinary auxiliary/waste identity is disclosed; reference-product uncertainty blocks a usable method. | cp_feed; cp_product; cp_utilities |
| coverage_and_uncertainty | dap_unit | Retain complete period coverage and atypical operating modes. Explain detection limits, missing speciation, stock differences and allocation uncertainty; no universal recipe or process-amount default is supplied. Historical EPA controlled-plant factors and BREF cases are not transferable site values. | cp_air; cp_product; cp_waste |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_reference | Require one accepted DAP net-product reference, all qualifiers, compatible native property and a verified physically compatible product identity with disclosed metadata debts before accepting a data package. High-purity crystals or diluted reagent records do not establish fertilizer-grade product identity. | mosaic-dap-spec-2024; mosaic-dap-sds-2020 |
| validate_physical_ledgers | Check unallocated water and elemental balances, recycle equality, each external waste/product destination, all identified air channels and separate burden allocation. No double counting of captured dust, scrubber recirculation, nested PM, N/P equivalents or internally supplied heat. | eu-lvic-aaf-2007; ilcd-attributional-2010 |
| validate_pending | Do not translate unavailable measurement, unsupported speciation, unverified provider basis or infrastructure failure into zero exchange or a successful check. A concrete dataset requires resolved applicable measurement and reference identity gaps. | epa-ammonium-phosphate-1993 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | DAP supply modelling after applicability, identity and foreground-data acceptance |
| excluded_use | Agronomic yield equivalence; fertilizer application emissions; reagent-purity DAP; MAP/NPK or nitrophosphate substitution |
| required_metadata | All reference qualifiers, boundary, unit, period, actual suppliers, packaging, treatment receivers and allocation rationale |
| required_quality_disclosure | Reference/provider gaps; native metadata defects; mass/element residuals; monitoring coverage; uncertainty; exclusions |
| update_trigger | Changed acid/ammonia route, assays, formulation, utility provider, control equipment, measurement basis or reference identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | [UNSD CPC 3.0 structure, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv) | 34642 identity; adjacent 34643–34646 distinctions, not methodology approval |
| eu-lvic-aaf-2007 | official_guidance | [European Commission LVIC-AAF BREF, August 2007](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf), §§7.2.3–7.2.9, printed pp.287–289 / PDF315–317 | DAP route and physical operations only; other grades and tabulated amounts not adopted |
| epa-ammonium-phosphate-1993 | official_guidance | [US EPA AP-42 §8.5.3 Ammonium Phosphate](https://www.epa.gov/sites/default/files/2020-09/documents/8.5.3_ammonium_phosphate.pdf), July1993/reformatted1995, §§8.5.3.1–3 and Fig.8.5.3-1 | Granulation unit and release/recovery interfaces. General opening formula is MAP; do not use it as DAP chemistry. TVA recipe/controlled-site factors are not defaults. |
| mosaic-dap-spec-2024 | literature | [Mosaic Diammonium Phosphate 18-46-0 specification sheet](https://mosaicco.com/fileLibrary/publicFiles/0-Diammonium-Phosphate-Specification-Sheet.pdf), ©2024 | Producer guarantees illustrate nutrient-assay semantics; limited listed components, not a complete composition or universal grade |
| mosaic-dap-sds-2020 | literature | [Mosaic DAP SDS MOS100011](https://mosaicco.com/filelibrary/publicfiles/0-dap_sds.pdf), revised24March2020, §§1,3 | DAP species/CAS and commercial mixture distinction; producer composition ranges are not a recipe |
| epa-gas-combustion | official_guidance | [US EPA AP-42 §1.4 Natural Gas Combustion](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf), retained header10/26, §§1.4.1–1.4.3 | Conditional on-site gas combustion species; equipment applicability must be established, no boiler factor transferred to a direct dryer |
| ilcd-attributional-2010 | official_guidance | [EC JRC ILCD Handbook: General guide for LCA, Detailed guidance, first edition2010](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf), §7.9.2–3, printed pp.255–257 | Attributional subdivision and documented allocation; not automatic substitution credits |
