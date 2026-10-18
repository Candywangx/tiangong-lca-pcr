---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.wood-charcoal
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Industrial retort unbriquetted wood charcoal

## 1. Scope and Applicability

Applies to untreated non-coniferous roundwood converted in closed industrial retorts, with internal combustion of off-gas for process heat, followed by cooling, screening and bulk loading of unactivated, unbriquetted wood charcoal. Handling is electric and supply is low-voltage grid electricity; auxiliary firing may use the same roundwood or pipeline natural gas. Water circulation, condensate capture and offsite wastewater treatment are conditional on installed equipment. Charcoal is a physical mixture of fixed carbon, volatiles, mineral ash and moisture, not a single pure-carbon species; fixed-carbon content must not replace product mass. Sources: fao-industrial-charcoal-1985; epa-charcoal-1995.

Excludes open pit/earth kilns, multiple-hearth powder-charcoal/briquetting routes, activation, binder/mineral-coal blends, non-wood feedstocks, treated or glued wood, commercial chemical co-product recovery/refining, downstream use and direct liquid environmental discharge. The proFagus original demonstrates actual chemical recovery, but its plant recipe, yields and environmental marketing do not establish industry defaults; that route is outside this single-product method (profagus-retort-biochemicals). Other fuels, packaging or commercial co-products require specific atomic exchanges and method evidence before applicability is extended. CPC 34510 establishes the wood-charcoal classification, not complete coverage of all routes (un-cpc-34510).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.wood-charcoal |
| classification_refs | CPC 3.0:34510; narrower |
| covered_products | Bulk unbriquetted wood charcoal within the declared retort route |
| excluded_products | Activated carbon, briquettes, mineral-coal coke, recovered chemicals, soil-biochar performance claims |
| representative_product | Retort lump charcoal from non-coniferous roundwood; actual species and grade declared |
| production_route | Roundwood receipt/cutting → drying → closed retort and off-gas heat recovery → cooling → screening → bulk loading |
| market_state | Accepted unactivated bulk lump charcoal at declared moisture and quality grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of specified charcoal at producer gate; no equivalent cooking, adsorption or reduction performance claim |
| How much | 1 kg accepted net as-delivered charcoal |
| How well | Actual wood species, screened size grade, moisture, ash, volatiles, fixed carbon and intended-use quality specification |
| How long or cycle | Declared representative production campaign through bulk loading; no service lifetime asserted |
| reference_flow_link | charcoal_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Charcoal `d05420ab-1fe9-4a24-91fa-b877460920cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Untreated non-coniferous species and provenance; actual retort and heat recovery; unactivated/unbriquetted; bulk; as-delivered wet-basis moisture; size grade; ash/volatile/fixed-carbon test bases; firing fuels and off-gas treatment; geography/campaign/providers; net mass/tare; single-product and waste receiver conditions |

Missing required qualifiers make the data package reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | charcoal_output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg accepted net as-delivered charcoal; cp_product uses calibrated weighing less measured tare, with matched delivery moisture. |
| moisture_basis | wood_input; charcoal_output | Mass | kg | cp_wood and cp_product measure wet-basis moisture w separately; diagnostic dry mass m_dry = m_wet × (1 − w). Report dry-basis yield separately without changing the delivered-mass denominator; no historical volume, stacking or yield coefficients (fao-industrial-charcoal-1985, 2.3 and 2.9.1). |
| energy_basis | electricity_input; gas_input | Net calorific value; Volume | MJ; m3 | Electricity uses metered kWh × 3.6 to MJ; retain the database Net calorific value property name without inferring combustion efficiency. Gas temperature/pressure, wet/dry basis, composition and compressibility must match provider/background m3; unknown compatibility leaves the background link incomplete. |
| emissions_basis | all elementary outputs | Mass | kg | Align concentration, flow and time on temperature/pressure, wet/dry and sampling bases before integration; report actual species mass. NOx equivalents are not NO or NO2 mass; source-split CO2/CO/CH4 without duplicating totals and fractions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated non-coniferous roundwood delivered at gate and actual electricity/gas/water supplies |
| starting_condition_role | Foreground receipt point; not zero upstream burden |
| product_classification_scope | Declared retort unbriquetted wood-charcoal subset of CPC 34510 |
| recursive_input_rule | Record internal fines/wood/off-gas returns in the physical ledger without another external reference output; purchased-charcoal processing is outside this roundwood route |
| upstream_dataset_requirement | Compatible forestry/harvest/roadside and inbound transport, geographic/year-specific grid, pipeline gas and water backgrounds; disclose each gap |
| disclosure | Equipment, carbonization/firing fuels, controls, water destination, internal links, single-product status, foreground/background responsibilities and abnormal operation |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | retort_unit | Include wood preparation, drying, retort, gas heat recovery/treatment, cooling, screening and onsite loading in one foreground unit with separate stage measurements. Internal links have equal quantities at both ends. | fao-industrial-charcoal-1985 |
| boundary_emissions | retort_unit | Account for post-treatment release, diffuse leaks, start-up/shutdown and failures; captured liquids/dust and internal gas are not also emitted. WGC BAT 2, 3 and 8 inform conditional monitoring design; the CPC chemical label does not establish EU legal applicability or permit BAT limits to replace measurement. | epa-charcoal-1995; jrc-wgc-2023 |
| boundary_exclusions | applicability | Use only the declared single-product internal heat-recovery route. Commercial chemical recovery, fines sales, heat exports, purchased steam, other fuels or direct liquid discharge require new applicability assessment, separate measurement and specific methods. | fao-industrial-charcoal-1985; profagus-retort-biochemicals |

### Physical Reconciliation and Analytical Coverage

Keep unallocated opening/closing stocks and stage transfers for received wood, drying/retort charge, accepted and rejected charcoal, fines, aqueous condensate, dissolved and separated tar, non-condensable retort gas, auxiliary fuels, cooling water and captured residues. Record actual combustion air and its moisture, flue-gas throughput/composition and water-vapour discharge on compatible time and temperature/pressure bases. An internal transfer appears equally at sender and receiver; only an actual external exchange enters the normalized inventory. Tar retained in charcoal, dissolved in condensate, decanted, burned or emitted has distinct destinations; never infer their quantities from chemical-recovery examples. A separately transferred tar waste or any additional actual product needs its own concrete exchange and applicability assessment; do not hide it in the aqueous-condensate row (fao-industrial-charcoal-1985, 2.4–2.6 and 2.9.2).

For each lot retain measured moisture, ash, volatiles and their wet/dry test bases; fixed carbon by proximate difference is not an elemental-carbon measurement. Use documented representative elemental analysis of dry wood, charcoal, tar and residues and measured gas composition for independent C, H and O conservation checks, including water, combustion oxygen and stock changes. The water ledger distinguishes feed/air moisture and cooling makeup from reaction-generated water and reconciles measured water in product, condensate, wastewater and vapour. Attribute pyrolysis and combustion water with the stage measurements and H/O conservation; report unresolved attribution and residual uncertainty rather than forcing closure, assuming all condensate is feed moisture, or imposing a universal wood formula or reaction-water yield. Record the laboratory method, sampling, calibration, recovery and uncertainty for each matrix (fao-industrial-charcoal-1985, 2.3–2.6 and 2.9.1).

Retain a gross heat ledger before allocation: document measured gross calorific values and moisture bases for actual wood, charcoal, retort gas and tar/condensate fuels; reconcile auxiliary heat and electricity, internal heat recovery, sensible/latent heat, reaction heat, retained product energy, stock changes and losses on one declared convention. Disclose calorimetry or metered-heat methods and any conversion between gross and net calorific bases. Electricity's database property name does not make it a combustible fuel; FAO's example calorific values and energy diagrams are not defaults. Internal recovered heat is a transfer, not an avoided-product credit (fao-industrial-charcoal-1985, 2.6 and 2.9.1).

Select documented sampling and analytical methods for the actual post-treatment gas, leaks and captured phases. WGC BAT 8 provides a conditional EN/equivalent-quality method framework, not a universal retort speciation method. Require demonstrated analyte/matrix coverage, sampling location and duration, recovery/blanks, calibration, detection limits and uncertainty. Total organic carbon cannot be assigned as methanol, ethanol, acetone or acetic-acid mass; NOx-equivalent readings cannot establish separate NO/NO2 masses. Document separate vapour, aerosol and condensable fractions and disjoint particle-size measurements; EPA's briquetting controls and uncontrolled kiln factors cannot supply retort size shares or capture efficiencies. Measure captured and released fractions separately, reconcile phase overlap and retain additional detected species as atomic exchanges. Unsupported analytical coverage makes the data package incomplete (epa-charcoal-1995, 10.7.2; jrc-wgc-2023, BAT 2, 3 and 8).

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retort_unit | Integrated roundwood-to-bulk-charcoal unit | required | Declared route | foreground | charcoal_output |

Conditional rows receive quantities only when the exchange occurs; absence needs equipment/measurement evidence, and missing measurement is not zero. This is not a fixed recipe. Add individual species rows and identities for other substances found in screening; unresolved total VOC or POM is not one verified species.

### Process: Industrial retort charcoal (`retort_unit`)

#### Inputs

##### Product flows

###### Fuel wood of non-coniferous wood (`wood_input`)

Untreated non-coniferous roundwood received in its actual natural moisture state at the producer gate; pair net lot mass with moisture, bark, ash/soil contamination and elemental-analysis bases. Separate carbonization charge, external wood firing and unconverted return in the physical ledger. The forest-roadside identity requires a separately documented inbound transport link. Reject treated wood and glued panels.

- Selected flow: Fuel wood of non-coniferous wood `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_wood and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_wood
- Sources: fao-industrial-charcoal-1985

###### Alternating current (`electricity_input`)

Purchased low-voltage (<1 kV) grid-average alternating current for electric handling, cutting, fans and screening. Verify the actual connection and supplier geography/year; other voltage supplies require another verified identity. Convert metered kWh to MJ using 3.6, without treating electricity as combustion fuel.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected through cp_utilities and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_utilities
- Sources: fao-industrial-charcoal-1985

###### natural gas in the gaseous state (`gas_input`)

Pipeline gaseous natural gas only for documented start-up or supplementary firing. Volume requires temperature, pressure, wet/dry basis, composition and compressibility with supplier/background m3 compatibility; the secondary mass property is not a density measurement. No fixed heating value or methane fraction is supplied.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collected through cp_utilities and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_utilities
- Sources: fao-industrial-charcoal-1985

###### Tap water (`water_input`)

Purchased treated tap water for cooling makeup and cleaning where used. Meter once at entry; recirculating cooling water is an internal transfer. Convert measured volume to mass with documented local water density, not the database secondary conversion as a universal default.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_water and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: fao-industrial-charcoal-1985

#### Outputs

##### Product flows

###### Charcoal (`charcoal_output`)

One accepted cooled and screened unbriquetted wood-charcoal output at bulk loading, at declared as-delivered moisture. Excludes packaging tare, rejected fines and other products. This broad identity contains wood charcoal; its incidental activated-charcoal description does not authorize activation or pure-carbon assumptions.

- Selected flow: Charcoal `d05420ab-1fe9-4a24-91fa-b877460920cc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: cp_product
- Sources: fao-industrial-charcoal-1985

##### Waste flows

###### Discarded unbriquetted wood-charcoal fines (`charcoal_fines_waste`)

Include only collected charcoal fines sent offsite for waste treatment; record particle size, moisture, ash, contamination and receiver. Internal return is not an external waste or an air emission. Sale as a product changes the declared single-product route.

- Selected flow: Discarded unbriquetted wood-charcoal fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_residues and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_residues
- Sources: fao-industrial-charcoal-1985

###### Discarded wood-carbonization pyroligneous condensate (`condensate_waste`)

One collected aqueous pyrolysis condensate stream, with actual tar, organic acid, alcohol and water composition recorded; not pure acetic acid or pure methanol. Include only offsite waste transfer, not internally burned condensate.

- Selected flow: Discarded wood-carbonization pyroligneous condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_residues and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_residues
- Sources: fao-industrial-charcoal-1985

###### Wood-combustion ash from retort heating (`wood_ash_waste`)

Ash from documented auxiliary wood firing, if generated; weigh separately from charcoal ash remaining in the product and captured charcoal fines; identify moisture, mineral composition and receiver.

- Selected flow: Wood-combustion ash from retort heating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_residues and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_residues
- Sources: fao-industrial-charcoal-1985

###### Wood-charcoal cooling and cleaning wastewater (`wastewater_output`)

One segregated cooling/cleaning wastewater stream sent to offsite treatment, if generated; record water mass, dissolved/suspended constituents, concentrations and receiving treatment. No direct freshwater discharge is covered. Condensate retained separately is not counted again here.

- Selected flow: Wood-charcoal cooling and cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_water and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: fao-industrial-charcoal-1985

##### Elementary flows

###### carbon dioxide (biogenic) (`co2_biogenic`)

Biogenic CO2 reaching outdoor air after wood/off-gas combustion; retain in LCI regardless of climate-reporting exclusions. Separate product carbon, internal gas carbon and actual emissions.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### carbon dioxide (fossil) (`co2_fossil`)

Fossil CO2 from natural-gas firing, where used; do not map all stack CO2 as biogenic. Source-apportion using measured fuel carbon and compatible monitoring.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### carbon monoxide (biogenic) (`co_biogenic`)

Residual biogenic CO escaping from wood pyrolysis, gas combustion and leaks; only the fraction actually crossing the environment boundary.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### carbon monoxide (fossil) (`co_fossil`)

Residual fossil CO from natural gas combustion, if detected or methodically quantified; do not duplicate a source-mixed CO total.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### methane (biogenic) (`methane_biogenic`)

Biogenic methane from pyrolysis and unburned wood gas, measured after treatment plus leaks; internal gas circulation is not a release.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### methane (fossil) (`methane_fossil`)

Fossil methane from pipeline-gas leakage or combustion slip, where applicable; a delayed-emission correction flow is not this exchange.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### nitrogen monoxide (`nitrogen_monoxide`)

Actual NO mass to outdoor air, distinct from NO2 and N2O. A NOx result reported as NO2 equivalent cannot be assigned to this row without measured speciation and documented conversion.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### nitrogen dioxide (`nitrogen_dioxide`)

Actual NO2 mass to outdoor air. Do not add an aggregate NOx exchange to NO and NO2; total NOx-only observations remain an unresolved speciation/basis issue, not assumed zero.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### particles (PM2.5) (`pm_fine`)

Released PM2.5 from actual exhaust and handling measurements. Captured dust is not emitted PM; document filterable versus condensable coverage.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### particles (PM2.5 - PM10) (`pm_coarse`)

Released disjoint PM2.5–PM10 fraction, not cumulative PM10. Derive only from compatible paired measurements; do not invent size shares from total PM.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### particles (> PM10) (`pm_large`)

Released particles above PM10, distinct from the two smaller intervals. Total PM reconciliation must account for condensables; do not count chemically speciated aerosol mass twice.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### methanol (`methanol_air`)

Methanol vapour that remains after treatment or leaks, CAS 67-56-1; not the amount present in captured liquid condensate.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### acetic acid (`acetic_acid_air`)

Acetic acid vapour actually released, CAS 64-19-7; excludes collected wood vinegar and acid aerosol already accounted within the particulate basis.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### ethane (`ethane_air`)

Ethane vapour actually released from pyrolysis gas, CAS 74-84-0; obtain species-specific measurement instead of using total VOC as ethane.

- Selected flow: ethane `4d9a8790-3ddd-11dd-9219-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### ethanol (`ethanol_air`)

Ethanol vapour actually released, CAS 64-17-5; source screening establishes a potential species, not a positive emission amount.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### acetone (`acetone_air`)

Acetone vapour actually released, CAS 67-64-1; keep captured condensate composition separate from the air exchange.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### hydrogen (`hydrogen_air`)

Hydrogen escaping from pyrolysis gas, CAS 1333-74-0; measure the escaping portion, not the internally burned gas.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### water vapour (`water_vapour_air`)

Water vapour reaching outdoor air from wood drying, carbonization, combustion and cooling; reconcile wood moisture, pyrolysis reaction water, combustion-generated water and cooling losses separately using the measured water and C/H/O ledgers, without counting captured condensate as vapour.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected through cp_air and normalized by accepted net delivered charcoal mass for the same campaign; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single_product | retort_unit | Accepted charcoal is the only commercial product in this route; assign attributable external burdens to charcoal without avoided-product credit for internal gas heat recovery. Preserve all actual physical outputs and losses. | jrc-ilcd-2010; fao-industrial-charcoal-1985 |
| allocation_physical_ledger | physical_balance | Do not multiply physical wood, water, carbon or heat balances by allocation shares; internal loops are neither new feed nor free outputs. Do not treat wood vinegar as pure acid or tar as a pure constituent, or derive co-product yields from potential components. | fao-industrial-charcoal-1985 |
| allocation_scope_change | commercial_cooutputs | Commercial chemicals, fines or net heat exports require a reassessed route and separately metered subdivision; inseparable processes need a goal/scope-compatible justified physical-causality or subsequent appropriate criterion with sensitivity disclosure. This PCR provides no default mass shares or prices. | jrc-ilcd-2010; profagus-retort-biochemicals |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All external rows use one complete matched reporting pool for the same site, route and product state/grade, including failed and zero-output runs, rework, starts/stops and cleaning. Retain unnormalized period totals, stage transfers, opening/closing stocks and work in progress (WIP), with their attributable burdens. The common denominator Q is accepted loaded net charcoal kg with stock, WIP, rejects and fines reconciled separately. Exclude opening stock produced outside the pool from Q, or carry its matched prior-production burdens; never divide current-period loads by unmatched shipment mass or omit failed-run burdens. Zero-output subperiods retain their burdens in a justified matched pool with positive Q; if the complete pool has no positive Q, report per-kg results unavailable rather than zero or dividing by zero. Pair measured moisture with each weighed lot. Every protocol retains raw totals; its aggregation-rule column states the final per-1-kg output basis. Reconcile physical totals and stage attribution, then apply campaign_normalization exactly once. Credit each accepted net lot once after returns and reacceptance; internal rework is not new product output.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | retort_unit | charcoal_output | Foreground measured records | Lot, calibrated net weighing, measured tare, delivery moisture, size, ash/volatiles/fixed carbon and bases, opening/closing stock, rejects | Calibrated loading scale; paired laboratory moisture and quality tests | kg | Each lot | Declared complete representative campaign with start/end dates | Actual site and declared-route equipment | per 1 kg reference flow | Calibration, sampling, lot links, stock reconciliation, gaps and uncertainty |
| cp_wood | retort_unit | wood_input | Foreground measured records | Species/treatment, supplier, received net mass/moisture, charge/external-firing wood/returns, opening/closing stock, transport records | Calibrated receipt/charge weighing; representative moisture samples; material lot tracking | kg | Each receipt and carbonization cycle | Declared complete representative campaign with start/end dates | Actual site and declared-route equipment | per 1 kg reference flow | Calibration, sampling, lot links, stock reconciliation, gaps and uncertainty |
| cp_utilities | retort_unit | electricity_input; gas_input | Foreground measured records | Electric/gas meter readings, stage/equipment/time, supply voltage/provider/grid year, gas temperature/pressure/wet-dry/composition/compressibility and heating-value basis | Calibrated equipment metering reconciled to bills/provider background definitions; separate start-up/shutdown | MJ; m3 | Continuous with cycle totals | Declared complete representative campaign with start/end dates | Actual site and declared-route equipment | per 1 kg reference flow | Calibration, sampling, lot links, stock reconciliation, gaps and uncertainty |
| cp_water | retort_unit | water_input; wastewater_output | Foreground measured records | Inlet mass or volume/density, makeup, circulation, cooling/cleaning, wastewater mass/composition/concentrations, receiver | Calibrated water meter/tank weighing and laboratory samples; distinguish circulation, offsite wastewater and condensate | kg | Continuous and each wastewater shipment | Declared complete representative campaign with start/end dates | Actual site and declared-route equipment | per 1 kg reference flow | Calibration, sampling, lot links, stock reconciliation, gaps and uncertainty |
| cp_residues | retort_unit | charcoal_fines_waste; condensate_waste; wood_ash_waste | Foreground measured records | Per-stream net mass/tare/moisture/composition, internal returns, transfer notes, waste status and receiving treatment | Separately weigh fines/condensate/heating ash; matched samples and receiver documents | kg | Each generation and shipment | Declared complete representative campaign with start/end dates | Actual site and declared-route equipment | per 1 kg reference flow | Calibration, sampling, lot links, stock reconciliation, gaps and uncertainty |
| cp_air | retort_unit | elementary outputs | Foreground measured records | Species/CAS/origin, outlet/leak point, species mass concentration or verified conversion, gas volume flow rate F (m3/time) or already integrated volume V (m3), interval/time/start-up/failures, matched temperature/pressure/wet-dry basis, size/condensables, detection limits, NO/NO2 speciation, fuel carbon | Representative full-cycle outlet and diffuse monitoring, including abnormal events; obtain raw period species masses through emission_integration with actual species/source apportionment, then apply campaign_normalization once. Do not multiply already integrated gas volume by time or zero-fill from historical AP42 factors | kg | Representative complete cycles and each abnormal event | Declared complete representative campaign with start/end dates | Actual site and declared-route equipment | per 1 kg reference flow | Calibration, sampling, lot links, stock reconciliation, gaps and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | For each non-reference external flow i, reconcile the raw attributable period amount X_i, stocks, WIP and returns over the complete matched pool defined above; q_i = X_i / Q exactly once. X_i has not already been divided by Q. Keep all matched failed/zero-output/rework burdens; internal transfers are not new external exchanges. Keep charcoal_output exactly 1 kg. If Q is not positive, the per-kg result is unavailable; do not discard failed runs or report zero burden. All external rows use one complete matched reporting pool for the same site, route and product state/grade, including failed and zero-output runs, rework, starts/stops and cleaning. Retain unnormalized period totals, stage transfers, opening/closing stocks and work in progress (WIP), with their attributable burdens. The common denominator Q is accepted loaded net charcoal kg with stock, WIP, rejects and fines reconciled separately. Exclude opening stock produced outside the pool from Q, or carry its matched prior-production burdens; never divide current-period loads by unmatched shipment mass or omit failed-run burdens. Zero-output subperiods retain their burdens in a justified matched pool with positive Q; if the complete pool has no positive Q, report per-kg results unavailable rather than zero or dividing by zero. Pair measured moisture with each weighed lot. Every protocol retains raw totals; its aggregation-rule column states the final per-1-kg output basis. Reconcile physical totals and stage attribution, then apply campaign_normalization exactly once. Credit each accepted net lot once after returns and reacceptance; internal rework is not new product output. | cp_product; cp_wood; cp_utilities; cp_water; cp_residues; cp_air | Normalized inventory from raw matched-pool totals, or unavailable if Q is not positive | fao-industrial-charcoal-1985 |
| dry_yield | wood_input; charcoal_output | For each lot m_dry = m_wet × (1 − w_wet_basis). Report dry-charge yield and total dry wood consumed including external wood firing separately; keep unconverted returns distinct without duplicate consumption. | cp_wood; cp_product | Dry-basis diagnostics; reference denominator unchanged | fao-industrial-charcoal-1985 |
| emission_integration | all elementary outputs | Calculate raw period species mass as the time integral E_i = integral C_i(t) F(t) dt, where C_i is species mass concentration and F is gas volume flow rate. For interval gas volumes V_j already integrated over time, sum flow-weighted interval concentrations C_i,j times V_j; do not multiply V_j by duration again. C_i times a volume flow rate times interval duration is valid only for a justified constant or compatible interval-average basis. Match concentration/flow temperature-pressure and wet-dry bases and convert units explicitly to kg. Match operating phases and source origins; disclose detection-limit treatment and unresolved species. | cp_air; cp_utilities; cp_product | Raw actual campaign emission mass; apply campaign_normalization afterward exactly once | jrc-wgc-2023; epa-charcoal-1995 |
| physical_balances | retort_unit | Retain wet-mass, dry-wood, total-carbon, water and heat ledgers; record combustion air/flue-gas throughput, reaction water, product/residue carbon, CO2/CO/CH4 and other carbon species, opening/closing stock and unmeasured residuals. Internal gas/condensate links have equal quantities at both ends and are not also external fuel inputs or air emissions. | cp_wood; cp_product; cp_utilities; cp_water; cp_residues; cp_air | Unallocated physical balances and residual explanation | fao-industrial-charcoal-1985 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity | all inventory rows | Declare actual species/route/supply state; successful UUID identity does not establish a complete background dataset. | Supplier primary records, direct identity and quantity-basis checks |
| completeness | retort_unit | Screen all external exchanges and additional measured species; disclose missing measurements, unresolved speciation/UUIDs and incompatible backgrounds individually, without claiming zero or complete validation. | Process map, full-cycle monitoring, physical balances and receiver records |
| representativeness | retort_unit | Document site, equipment, lot weights, season, moisture and start-up loads; single-plant and historical FAO/EPA data are not industry quantity defaults. | cp_product; cp_wood; cp_utilities; cp_air |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | charcoal_output | Exactly one reference product output: 1 kg net delivered charcoal; every row and collection protocol uses the same reference denominator with lot moisture qualifiers, excluding packaging tare and fixed-carbon-only mass. | fao-industrial-charcoal-1985 |
| validation_boundary | retort_unit | Check route exclusions and actual equipment; each waste/emission is one atomic exchange with compatible medium/origin/provider basis. Expose unresolved identity/quantity instead of substituting a neighbouring industry candidate. | fao-industrial-charcoal-1985; jrc-wgc-2023 |
| validation_emissions | elementary outputs | The three particle intervals are disjoint; cumulative PM10/total PM are reconciliation totals, not additional summed exchanges. Aggregate NOx needs NO/NO2 speciation, excluding N2O; total VOC/POM cannot replace actual species. Do not delete biogenic CO2 or duplicate captured and released material. | epa-charcoal-1995; jrc-wgc-2023 |
| validation_balances | retort_unit | Preserve the unallocated stock, phase, water, independent C/H/O and gross heat ledgers specified in Section 5, equal internal return links and residuals; missing concentration/flow, unmatched gas volumes, unspecified waste receiver or unresolved source origin makes data-package validation incomplete. | fao-industrial-charcoal-1985 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Production inventory for charcoal within the declared scope; complete quantity compatibility before background linkage |
| allowed_use | Charcoal input with matched species/route/moisture/grade |
| excluded_use | Activated-carbon performance, briquette recipes, soil carbon-storage credits, pure-carbon substitution, other routes and direct liquid discharge |
| required_metadata | Reference qualifiers, site/campaign, single-product status, emission media/origins, provider quantity bases and all waste destinations |
| required_quality_disclosure | Measured coverage, physical-balance residuals, identity/speciation/background gaps, representativeness and uncertainty; unmeasured is not zero |
| update_trigger | Changes in feed/route, co-products/heat exports, grade/moisture, voltage/providers, controls/emissions or waste receivers |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-34510` | `official_guidance` | UNSD CPC Version 3.0, subclass 34510 — Wood charcoal. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34510 | Classification label only; no process, purity or quantity rule. |
| `fao-industrial-charcoal-1985` | `handbook` | FAO Forestry Paper 63, Industrial charcoal making (1985), chapters 2 and 3. https://www.fao.org/4/X5555E/x5555e03.htm ; https://www.fao.org/4/X5555E/x5555e04.htm | 2.3 yield/measurement; 2.4–2.8 carbonization/heat recovery; 2.9.1 quality/composition/gross calorific bases; 2.9.2 aqueous and separate tar phases; 3.2–3.4 retorts. Historical examples establish physical methods only, not default temperatures, yields, recipes or energy. |
| `epa-charcoal-1995` | `official_guidance` | US EPA AP-42, Section 10.7 Charcoal, September 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c10s07.pdf | 10.7.1 manufacture and 10.7.2 emissions; printed 10.7-1, 10.7-5 and 10.7-6. Species/control screening only. Tables 10.7-1/2 are historical uncontrolled rating-E factors, not default emissions for this retort; briquette quantities excluded. |
| `jrc-wgc-2023` | `official_guidance` | European Commission JRC, WGC BREF (2023), Scope and BAT 2, 3, 8. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/WGC_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Printed xx–xxii and 267–274 (PDF 26–28 and 295–302); waste-gas inventory, abnormal operation and matched monitoring design after chemical-sector applicability assessment. No automatic legal applicability, limit values, CO2 accounting exclusions or frequencies as LCI defaults. |
| `profagus-retort-biochemicals` | `literature` | proFagus, Biochemicals — Products for industry, producer primary webpage. https://profagus.de/en/biochemicals/ | Plant primary evidence of wood retorts and chemical recovery, identifying a commercial co-product route requiring exclusion or reassessment; environmental marketing is not measured zero-emission or generic-yield evidence. |
| `jrc-ilcd-2010` | `official_guidance` | JRC ILCD Handbook, General guide for LCA — Detailed guidance, first edition March 2010, 7.9.3. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Printed 257/PDF 277; physical-causality and subsequent market-value criteria for inseparable multifunctionality, constrained by goal/scope. This single-product route does not create co-product credits from internal gas. |
