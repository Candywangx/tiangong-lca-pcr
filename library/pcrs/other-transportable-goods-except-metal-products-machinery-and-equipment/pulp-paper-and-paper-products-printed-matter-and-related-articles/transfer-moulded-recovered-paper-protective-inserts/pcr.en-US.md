---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.transfer-moulded-recovered-paper-protective-inserts
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Uncoated transfer-moulded recovered-paper protective inserts, oven dried

## 1. Scope and Applicability

This PCR covers unprinted, uncoated three-dimensional protective packaging inserts from externally recovered waste paper: mechanical repulping/cleaning, vacuum forming on a forming mould, transfer to a take-off mould, then oven drying, actual dry trimming and dispatch. The selected route uses electricity and/or a pipeline-natural-gas oven burner, chemical-free white-water fibre separation and external wastewater treatment. It requires no intentionally added binder, dye, wet-strength resin, coating or process chemical; equipment mineral lubrication is separate. Confirm every route condition from actual records. No plant dataset, recipe, yield, moisture target or emission default is supplied.

Excluded are paper/board dry cutting or folding, cigarette-paper booklets/tubes/narrow rolls, paper-machine sheet/reel manufacture, market pulp, paper-pulp filter blocks/plates, virgin-fibre reinforcement, deinking/bleaching, thick-wall single-mould or precision hot-mould-dried products, chemically modified/printed/coated/laminated inserts, food-contact articles and stand-alone cartons. Steam, biomass, CHP and on-site biological effluent treatment need additional reviewed route methodology. Intended use or classification label alone creates no separate PCR identity.

Didone et al. distinguish transfer moulding with oven drying from heated-mould drying. JRC stock-preparation and dry-finishing passages support only those corresponding operations. Huhtamaki documents recovered-paper wine-bottle protectors as a concrete material-use example, without proving the current site route. These sources do not make the heterogeneous classification a single production method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.transfer-moulded-recovered-paper-protective-inserts |
| classification_refs | CPC 3.0 32199; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unprinted uncoated recovered-paper vacuum-transfer-moulded oven-dried protective packaging inserts |
| excluded_products | Dry-cut paper articles; tobacco-paper conversion; filter media; paper sheets/reels and pulp; other moulding/drying or chemical routes; food-contact articles; stand-alone cartons |
| representative_product | Recovered-paper shaped bottle/electronics cushioning insert with documented design, furnish and as-sold moisture |
| production_route | Received waste paper → repulping/mechanical cleaning → vacuum forming/transfer → oven drying → actual trim/inspection/dispatch; internal white-water and off-spec returns |
| market_state | Accepted net insert at producer gate at actual as-sold moisture; dispatch materials excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Shaped cushioning insert for a declared transported product |
| How much | 1 kg accepted net insert |
| How well | Declared geometry, fit, cushioning/compression performance and test conditions, furnish, density/thickness and measured moisture; equal mass alone does not establish equal protection |
| How long or cycle | One reporting-period output; service comparisons require an explicit packaging use cycle and equivalent protection |
| reference_flow_link | `finished` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Packaging insert, moulded pulp `75ec26b8-f2ed-4a61-8a46-0ceaf1008ace` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/period; accepted net mass/tare; as-sold wet-basis moisture; design/geometry and performance test; waste grade/origin/contaminants; actual forming/transfer/oven route; no intentional process additives; electricity voltage/supply and gas volume basis; water/treatment/receiver; upstream waste handover and allocation; dispatch materials |

Declare all required qualifiers in the foreground package. The broad product identity is restricted by these physical route/market conditions; its auxiliary-use comment never justifies omitting accepted product mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Q = total accepted net as-sold insert kg for the matched reporting period. Exclude packaging, rejects and unaccepted stock. Every row and collection aggregation uses per 1 kg reference flow. |
| moisture_basis | wet stock and accepted product | Mass fraction | kg/kg | Record actual water mass fraction w on a wet basis: water mass = wet mass × w and non-water mass = wet mass × (1 − w). Non-water mass is not automatically dry solids: independently measure or validate solid, dissolved and nonaqueous constituents using a documented method, including volatile-organic losses where relevant. Use Q at as-sold moisture for normalization, never a literature dry-content default. |
| quantity_compatibility | utility and release rows | Verified row reference property | Verified row reference unit | Prove supplier/reference quantity equivalence for gas volume, electricity delivery, water mass and monitoring species. Identity availability alone does not prove background linkage or conversion. Unknown remains pending. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Recovered waste paper received in actual delivered waste state; disclose earlier collection/sorting/baling/transport and contamination |
| starting_condition_role | Foreground production gate; upstream recovery and treatment remain explicit linked burdens |
| product_classification_scope | CPC 3.0:32199; narrower |
| recursive_input_rule | Internal white water, off-spec inserts and dust returns remain internal links; externally recovered same-category paper retains its actual handover and compatible upstream dataset once, without recursively re-counting prior product lives |
| upstream_dataset_requirement | Compatible received waste state, recovery operations and freight; actual water/materials/utility delivery; receiver-specific off-site effluent/waste handling |
| disclosure | Physical operations and balances, linked background operations, additive absence proof, supply/reference bases, stocks, captured/emitted fractions, receivers, exclusions and gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | production route | Include actual receiving, sorting, mechanical repulping/screening/cleaning and any mechanical refining, stock tanks/pumps, forming vacuum, take-off/transfer, oven heating/fans, actual dry trimming, inspection, dispatch and auxiliaries. Confirm chemical-free stock/water route and the absence of excluded processing from equipment and purchasing records. | didone-moulded-pulp-2017; jrc-ppb-2015 |
| boundary_recovery | received waste | Waste status/recycled content never establishes zero prior burden. Record legal/physical handover and the governing recycling allocation method; represent earlier recovery and freight once within foreground or supplier background. Missing allocation evidence remains a gap. | jrc-ppb-2015; eu-pef-allocation-2021 |
| boundary_outlets | water, waste and air | External treatment transfer is a waste exchange, not receiving-water discharge. The selected route includes no on-site biological treatment or direct liquid discharge. Retain chemical-free fibre separation, purge/cleaning water and actual solids. Air rows cover only final outdoor releases after actual capture; shared exhausts require source separation. | jrc-ppb-2015 |
| boundary_energy | oven and utilities | Record actual electricity and optional pipeline-gas burners. Do not add purchased steam/heat for the same oven duty or infer fuel from the word drying. Actual different fuel, steam, CHP, abatement reagent or onsite biological treatment fails this bounded route until its separate reviewed exchanges/method are available. | didone-moulded-pulp-2017; epa-gas-screening |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_insert | Integrated stock preparation, transfer moulding, oven drying and dispatch | required | Bounded route demonstrated by actual records | One foreground unit with stage-separated physical measurements | finished: 1 kg |

Physical route: accepted received paper + make-up water → cleaned stock → wet formed/transfer insert → dried inspected insert → dispatch. Stock cleaning yields actual rejects; forming filtrate returns to stock; trim/off-spec returns to pulping where actually reused. The unit is aggregated because drying/finishing/packing transfers of the same insert do not establish a second product identity. Stage electricity/gas, wet mass, moisture, stock and throughput records remain separate. Keep every internal link equal at both ends, including actual wet mass/water/solids; no fabricated intermediate UUID is introduced.

Screen each atomic row for actual occurrence; an absent exchange needs equipment/material/outlet evidence, while missing records remain unknown. These rows are not a fixed recipe or mandatory positive emissions. Additional actually present species/materials require individually verified atomic rows and route applicability before a dataset is complete.

Retain physical dispatch accounts: reference insert mass, delivered PE film and PP twine, their separate offcuts, customer packaging, and actual pallet/container return and stock movements. Pallets, reusable containers, maintenance replacements, cleaning cloths, other lubricants or compressed-air losses observed at the site require their own verified atomic exchanges and compatible upstream/receiver links before the dataset is complete; no default amount or omission is justified by this bounded list. Keep durable infrastructure treatment and any exclusion separately declared with the chosen study boundary.

### Process: Integrated insert production (`p_insert`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Meter actual low-voltage (<1 kV) grid-average user-side supply for stock preparation, vacuum and compressed air, fans, electric oven heat if used, finishing and auxiliaries. Other voltages or supply routes require their own verified flow; no duplicate grid and transformation service.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `jrc-ppb-2015`

###### natural gas in the gaseous state (`gas`)

Include only on-site pipeline-gas oven burners when actually present. Record dry/wet gas composition, temperature, pressure, compressibility and supplier background m3 definition; no density from a secondary property coefficient. Volume conversion and background compatibility require proof; unknown remains pending. No gas boiler or steam is represented by this row.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `epa-gas-screening`

###### Process Water (`water`)

Measure purchased treated make-up/process and water-only cleaning water crossing the boundary. Do not count internally circulating white water again or duplicate an upstream water resource abstraction. Keep supplier treatment/quality and measured volume-to-mass conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

###### Polyethylene film (`film`)

Conditional actual polyethylene dispatch wrapping film, excluding product net mass. Confirm resin/grade, additives, supplier and wet/dry mass; no plastic or packaging default percentage.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `didone-moulded-pulp-2017`

###### Polypropylene twine (`twine`)

Conditional actual polypropylene bundling twine, not strap, fibre furnish or mixed packaging. Record provider, composition and mass. A case-use description of farm-gate bundling does not supply this plant quantity or production background.

- Selected flow: Polypropylene twine `0f3c91d9-9f30-42ab-b5e4-0b3ce42cb0fe`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `didone-moulded-pulp-2017`

###### Mineral lubricating oil for forming-line equipment (`oil`)

Conditional actual mineral oil for bearings, transmissions or oil-lubricated vacuum equipment; identify petroleum-derived composition, additive grade and consumption versus sump stock. Identity remains unresolved: any candidate specifying a calorific value requires actual supplier/specification proof of that value and its gross/net, dry/wet and temperature basis before adoption; a mass reference does not remove this restriction. Fully synthetic lubricants are different exchanges and need separate identity.

- Selected flow: Mineral lubricating oil for forming-line equipment
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `didone-moulded-pulp-2017`

##### Waste flows

###### waste paper (unspecified) (`recovered_paper`)

Externally recovered waste newspaper/paper of declared grade, received moisture, contaminant content and supplier handover. Only the actual waste state uses this waste identity; purchased secondary product requires separate compatible product identity. No virgin reinforcement, deinking, bleaching or imported finished pulp in this route.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`

#### Outputs

##### Product flows

###### Packaging insert, moulded pulp (`finished`)

Accepted finished dry protective insert at actual as-sold moisture; include actual product fibres, ash and residual water. Exclude dispatch wrapping, twine, rejects and stock not accepted. Reference amount is 1 kg.

- Selected flow: Packaging insert, moulded pulp `75ec26b8-f2ed-4a61-8a46-0ceaf1008ace`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: `didone-moulded-pulp-2017`

##### Waste flows

###### Waste solid (`reject`)

One actual mixed screening/cleaning reject stream crossing the gate under this broad industrial-solid-waste identity, with fibre/plastic/metal/mineral fractions, moisture and receiver recorded. Distinct separately collected streams require separate atomic exchanges; neither clean waste paper nor optical-assembly rejects substitutes for this mixed stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### sludge (paper production) (`sludge`)

Conditional primary fibre/mineral sludge removed by chemical-free settling or filtration of white water, physically leaving the site. Record wet mass, dry solids, fibre/ash/ink and contaminants, dewatering and receiver acceptance. It is not deinking or biological sludge; neither absence nor composition is assumed.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### Waste liquid (`wastewater`)

Record actual purge and cleaning wastewater transferred to the external treatment operator, after any declared chemical-free fibre separation. The selected flow represents the whole untreated transferred liquid, including its water and non-water constituents; it supplies no default composition, hazard class or receiver treatment. Measure transfer volume and actual whole-liquid density at recorded temperature; whole-liquid mass = volume × compatible density. Measure water fraction, suspended/dissolved solids, COD/BOD/TSS, nutrients and contaminants separately as analytical attributes; COD/BOD are oxygen-equivalent indicators, not constituent masses. Do not replace the whole-liquid exchange with dry-residue mass. The gate transfer is not direct discharge; downstream loads belong to external treatment once.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

###### waste paper (unspecified) (`trim`)

Only clean uncoated paper-fibre trim/rejected insert actually sold or removed for recovery. Record moisture, ash/ink/contamination and receiver. Returned off-spec material remains an internal loop, not this external exchange. This row is not the final reference product.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### Dust (`dust`)

Record dry finishing/handling dust physically captured and sent out, including actual fibres, ash and contamination. Internally returned dust is an internal link; only uncaptured final boundary releases enter PM emissions. This waste identity covers collected industrial dust; its broad name and bilingual comment do not prove paper composition or receiver compatibility, which require actual records.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### Packaging waste, plastic (`film_waste`)

Conditional actual unwashed polyethylene dispatch-film cutting waste; this broad plastic-packaging-waste identity supplies no polymer grade or treatment route. Keep this PE stream separate from PP twine waste and identify grade, cleanliness and receiver route. Do not substitute a cleaned mechanical-recycling output for an as-generated unwashed waste.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `didone-moulded-pulp-2017`

###### Packaging waste, plastic (`twine_waste`)

Conditional actual as-generated PP bundling-twine waste; keep it separate from PE film waste despite sharing this broad plastic-packaging-waste identity. Record actual polymer composition, grade, contamination and receiving operation. A preassigned mechanical-recycling record requires evidence of that route and state and is not automatically the as-generated exchange.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `didone-moulded-pulp-2017`

###### Used lubricating oil (`spent_oil`)

Conditional used mineral lubricating oil physically collected for a declared external receiver. Weigh actual waste and record contamination, receiver and storage changes; do not infer treatment or recovery credits.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `didone-moulded-pulp-2017`

##### Elementary flows

###### carbon dioxide (fossil) (`co2f`)

Actual fossil carbon dioxide from the pipeline-gas burner; measured load or gas-specific carbon balance with measured composition and incomplete-combustion corrections, not a fixed oxidation fraction. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-screening`

###### carbon dioxide (biogenic) (`co2b`)

Any actual biogenic CO2 released from fibre-stock degradation or fibre oxidation during the defined operations, separately from fuel CO2. Retain in LCI even when a GHG indicator treats it separately; do not assume all retained fibre carbon is emitted. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `didone-moulded-pulp-2017`

###### carbon monoxide (fossil) (`co`)

Actual fossil CO from the gas burner; species mass with fuel origin proven. Fibre-origin CO requires a distinct compatible biogenic/generic flow, not this fossil record. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-screening`

###### methane (fossil) (`methane`)

Actual fossil methane from incomplete gas combustion and on-site gas leaks, retaining source-resolved measurements before aggregation. Biological methane, if observed, is a distinct flow; no methane in upstream gas supply is counted again here. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-screening`

###### Nitrogen oxides (`nox`)

Actual NOx indicator excluding N2O. Record whether monitor mass is NO2-equivalent or actual summed NO/NO2 mass and prove LCI/LCIA quantity-definition compatibility before use; a kg reference does not prove equivalence. Do not add individual NO/NO2 again. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-screening`

###### nitrous oxide (`n2o`)

Actual N2O molecular mass from combustion, kept separate from NOx. No boiler factor is presumed applicable to an oven burner. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-screening`

###### sulfur dioxide (`so2`)

Actual SO2 molecular mass; use matched monitoring or a verified gas sulfur balance accounting for retained sulfur and other species. No default pipeline sulfur or SOx-to-SO2 equivalence. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-screening`

###### particles (PM2.5) (`pm25`)

Actual outlet/fugitive PM2.5 mass from drying, burner and dry finishing; trace source, capture and condensable/filterable measurement coverage. Do not add PM10 or total dust containing this fraction. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ppb-2015`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Actual PM2.5-to-PM10 mass, directly size-resolved or derived from matched PM10 minus PM2.5 records. Require the same location, period, wet/dry and sampling definition; incompatible or negative differences remain pending. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ppb-2015`

###### particles (> PM10) (`pmover10`)

Actual >PM10 mass from dry handling/finishing, directly measured or matched total particulate minus PM10. Keep the three bins disjoint; captured/reused dust is not an atmospheric release. No sawmill or papermill default dust factor. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-ppb-2015`

###### water vapour (`water_vapour`)

Actual water vapour crossing the atmospheric boundary from oven drying and stock/cleaning evaporation, including separately identified combustion water where relevant. Reconcile process-water, air-humidity and fuel-hydrogen contributions; no duplicate condensate. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `didone-moulded-pulp-2017`

###### acetic acid (`acetic`)

Conditional acetic acid identified by actual drying-exhaust chemical speciation (CAS 64-19-7), not a mandatory positive release or assumed paper recipe. Keep species mass rather than total VOC carbon. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `didone-moulded-pulp-2017`

###### benzene (`benzene`)

Conditional actual benzene identified by gas-burner/exhaust speciation (CAS 71-43-2). Confirm occurrence and detection limits; no trace fuel-composition or emission default. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-screening`

###### formaldehyde (`formaldehyde`)

Conditional actual formaldehyde identified by gas-burner/drying-exhaust speciation (CAS 50-00-0). Species mass is distinct from VOC-carbon totals; no universal occurrence or factor. Use outdoor-air unspecified only when no finer subcompartment is established; never substitute indoor or long-term emissions.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible reporting-period exchange divided by Q kg accepted net as-sold insert.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-gas-screening`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | physical unit and outputs | Keep an unallocated physical ledger of received/wet/dry fibre, water, product, waste, captured solids, releases and stock changes. Never multiply coproduct physical output or one end of an internal link by an allocation share. Record waste versus useful coproduct status and receiver evidence. | eu-pef-allocation-2021 |
| allocation_burdens | shared environmental burdens | For an attributional insert dataset, first subdivide or directly meter burdens. Where impossible, document a causal physical driver for the shared duty, product scope and period, and reconciled shares summing to one. Economic allocation requires evidence why a physical relationship fails, matching stage-specific prices and sensitivity. Keep a separate burden ledger; no default mass share or automatic recovered-material substitution credit. System expansion would be a separately specified multi-function study. | eu-pef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | p_insert | finished | production/acceptance record | lot; design; net/tare mass; count; wet-basis moisture; accepted/rejected status; stocks; Q | Calibrated net product weighing matched to acceptance and stock records; count requires measured design-specific net mass, never a literature per-piece weight | kg | each lot | one matched representative reporting period; document missing intervals | declared insert line and linked utilities/outlets | per 1 kg reference flow | calibration, raw records, reconciliation, laboratory QA and uncertainty |
| cp_material | p_insert | input materials | receipts, consumption and assay | supplier; grade/CAS; waste handover; wet mass/moisture/ash/contamination; opening/closing stock; PE/PP grade; lubricant state; composition and calorific-value basis | Weigh deliveries and stock changes, reconcile issues/returns with actual production; assay fibre solids; verify each material and supplier basis | kg | each receipt/lot | one matched representative reporting period; document missing intervals | declared insert line and linked utilities/outlets | per 1 kg reference flow | calibration, raw records, reconciliation, laboratory QA and uncertainty |
| cp_utility | p_insert | electricity; gas | calibrated meters and supplier definitions | stage meter start/end; kWh; voltage/delivery point; gas m3; T/P; composition; wet/dry basis; Z; supplier background reference conditions; burner configuration | Matched boundary meters with submeter or documented causal allocation; compare supplier delivery/reference definitions; preserve gas volume and verify any state conversion | kWh; MJ; m3 | interval meter and bill reconciliation | one matched representative reporting period; document missing intervals | declared insert line and linked utilities/outlets | per 1 kg reference flow | calibration, raw records, reconciliation, laboratory QA and uncertainty |
| cp_water | p_insert | water; wastewater | meters, samples and transfer manifests | make-up; circulating white water; wet stock; purge/cleaning transfer; volume; temperature; measured whole-liquid density and water fraction; independently measured suspended/dissolved solids; concentration units; COD/BOD/TSS/nutrients; receiver; destination and stocks | Calibrated meters and whole-liquid mass/density measurements at documented temperature; independent water/solids assays and representative flow-matched composites and receiver records; measure treatment condition and prove no direct discharge | kg; m3; reported concentration units | interval flows, representative campaigns | one matched representative reporting period; document missing intervals | declared insert line and linked utilities/outlets | per 1 kg reference flow | calibration, raw records, reconciliation, laboratory QA and uncertainty |
| cp_air | p_insert | elementary air rows | outlet tests, gas/solid balances and fugitive surveys | outlet/source; species/CAS; fossil/biogenic origin; submedium; concentration and units; flow/time; moisture/O2/reference T/P; capture; PM fractions/filterable/condensable; NOx definition; detection limits; uncertainty | Measure representative matched concentrations and exhaust volumes including start/stop, dryer/trim fugitive losses and actual leakage; speciate VOCs and reconcile carbon/water; extrapolation requires operating coverage and uncertainty | kg; reported concentration and volume units | representative monitoring plus continuous operation coverage | one matched representative reporting period; document missing intervals | declared insert line and linked utilities/outlets | per 1 kg reference flow | calibration, raw records, reconciliation, laboratory QA and uncertainty |
| cp_waste | p_insert | external waste outputs | weighing, composition and handover | stream; wet mass/moisture/solids; fibre/ash/plastic/metal/ink/oil; contamination; generation/returns; storage; receiver and accepted treatment state | Weigh each separately handled stream; sample actual composition and moisture; reconcile dispatch/receiver manifests and internal returns | kg | each stream/dispatch | one matched representative reporting period; document missing intervals | declared insert line and linked utilities/outlets | per 1 kg reference flow | calibration, raw records, reconciliation, laboratory QA and uncertainty |
| cp_balance | p_insert | physical stages and shares | stage/link and allocation records | received/cleaned/wet/dried/accepted quantities; moisture/ash/carbon; white water/stock changes; internal link pairs; operating duties and coproduct evidence | Maintain stage-resolved unallocated physical accounts; reconcile both ends of internal links and measured carbon/water/solids; independently derive justified burden shares | kg; justified driver unit | matched reporting period and each process change | one matched representative reporting period; document missing intervals | declared insert line and linked utilities/outlets | per 1 kg reference flow | calibration, raw records, reconciliation, laboratory QA and uncertainty |

All collection protocols aggregate to per 1 kg reference flow only after dividing their compatible actual reporting-period exchanges by Q kg accepted net as-sold insert. Retain the unnormalized raw stage, stock, loop, source and receiver records. For electricity, convert metered kWh to MJ using 3.6 MJ/kWh before this division; gas volume-state/background equivalence requires actual proof, not a default conversion. The finished row is 1 kg by definition and cp_output establishes Q. Internal link quantities and physical outputs are preserved before any separate burden allocation.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Exchange per 1 kg reference flow = actual compatible period exchange / Q kg accepted net as-sold insert. Keep physical quantities separate from attributed environmental burdens. | cp_output; cp_material; cp_utility; cp_water; cp_air; cp_waste | normalized exchange | didone-moulded-pulp-2017 |
| release_load | air outlet records | Integrate matched species concentration × actual compatible exhaust volume over measured intervals, with documented units, reference conditions, startup/shutdown and uncertainty. Different NOx/VOC/PM reporting definitions require proven equivalence; no concentration alone is a period mass. | cp_air; cp_utility | actual released period mass | epa-gas-screening |
| physical_balance | unallocated stock, stages and internal loops | Water mass = wet mass × measured wet-basis water fraction; non-water mass = wet mass × (1 − that fraction). Independently measure or validate dry-solids and other non-water constituent accounts; loss on drying need not equal water. Reconcile inputs = outputs + stock change in separate constituent, water and fossil/biogenic carbon ledgers, including actual residues and gases, intake combustion air/oxygen, air moisture, combustion water and uncertainty. Do not invent ash/carbon/oxidation fractions or numerical closure tolerances. | cp_balance; cp_output; cp_material; cp_water; cp_air; cp_waste | reconciled physical ledgers | jrc-ppb-2015 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Confirm atomic identity, name/CAS, hard route/material limits, medium/submedium and reference property/unit. A metadata defect or missing identity remains explicit; never substitute a neighbouring flow merely because it resolves. | cp_material; cp_air; cp_waste |
| dq_basis | supplier and site quantities | Require traceable matched period, meter calibration, actual dry/wet bases, source-resolved emissions and supplier background compatibility. Unknown differs from zero or demonstrated non-occurrence. | cp_output; cp_utility; cp_water; cp_air |
| dq_scope | evidence and inventories | Historical literature and one producer are scope evidence only, not universal recipes or quantitative priors. Document missing monitoring, records, receiver composition/treatment and additional actual species; a provisional methodology is not a completed plant dataset. | all collection protocols |
| dq_physical | balances and allocated burdens | Preserve the measured physical map and all internal links at equal quantities, then create a separate justified burden ledger. Investigate residuals using uncertainty, not arbitrary forced closure. | cp_balance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | reference and route | Exactly one product output is the final reference: finished = 1 kg net accepted insert at actual as-sold moisture. Confirm received recovered waste, forming and transfer moulds, oven route and each exclusion/qualifier. Equal purpose, mass or label does not prove route compatibility. | didone-moulded-pulp-2017 |
| validation_measurement | all rows | EN/ZH must share reference quantity, denominator, aggregation and formulas. Require property/unit chains and actual provider/monitor quantity equivalence; gas m3 and NOx kg compatibility may not be presumed. | jrc-ppb-2015 |
| validation_outlets | physical loops and releases | Reconcile measured water/non-water constituents, independently verified solids and carbon before burden allocation; transferred wastewater uses whole-liquid mass with compatible volume/density/temperature, not dry solids. No double counting internal white water/broke/captured dust, outside-treatment emissions or nested PM intervals. Retain biogenic CO2 in LCI; N2O is separate from NOx. VOC total carbon and COD/BOD/TSS analytical descriptors do not substitute for individual released species. | jrc-ppb-2015; epa-gas-screening |
| validation_completeness | completed foreground package | Missing identities, actual amounts, receiver routes, provider/reference equivalence, additional actual flows or unexplained residuals make the dataset incomplete, not zero. Report checks performed/skipped and all gaps. Unknown or unsupported measurements require review; passing content checks establishes neither scientific approval nor TIDAS schema validity. | jrc-ppb-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributed foreground production of the bounded moulded insert |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Route- and design-compatible protective insert input after all dataset identity/quantity/background gaps are supplied |
| excluded_use | Full CPC32199 coverage, dry-cut paper or cigarette paper, food-contact/other forming routes, generic recipes, automatic recycling credits or equal-mass protection claims |
| required_metadata | Reference qualifiers, source/receiver/background references, actual stage physical records, period, normalized exchanges, recycling method and independent burden-allocation ledger |
| required_quality_disclosure | Verified/conditional/unresolved identities, quantity bases, omitted scope, uncertainty/residuals, checks performed/skipped and remaining gaps |
| update_trigger | Changed furnish/waste status, forming/drying/additive route, energy supply, treatment receiver, new species/monitoring or resolved identity/basis debt |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| didone-moulded-pulp-2017 | literature | Didone et al. (2017), Moulded Pulp Manufacturing: Overview and Prospects for the Process Technology. Packaging Technology and Science 30(6), 231–249. https://doi.org/10.1002/pts.2289 ; https://backend.orbit.dtu.dk/ws/files/130393242/Moulded_Pulp_Manufacturing_Overview_and_Prospects_for_the_Process_Technology.pdf | Accepted manuscript §1.1 (printed p.3/PDF p.4), §2/2.1 (printed p.6/PDF p.7), §2.2 and Figure 4 (printed pp.7–8/PDF pp.8–9): transfer/oven versus precision hot-mould routes, vacuum forming and mechanical recovered-paper screening. Technology scope only; no historical thickness, moisture, residence-time, throughput or energy values adopted. |
| jrc-ppb-2015 | official_guidance | JRC (2015), Best Available Techniques Reference Document for the Production of Pulp, Paper and Board. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | §6.1.2, printed pp.551–554/PDF pp.589–592: mechanical repulping, screening, process-water purification and rejects; only corresponding operations, not a moulded-product recipe or Testliner machine layout. §7.1.10, printed p.670/PDF p.708: dry cutting dust as an operation-specific completeness check, not a factor. |
| huhtamaki-recovered-fibres | handbook | Huhtamaki, Fibers: recycled and virgin. https://www.huhtamaki.com/en/highlights/sustainability/fibers-recycled-and-virgin/ | Publisher paragraph on post-consumer recovered paper used for wine-bottle protectors and other moulded packaging; historical producer-specific material-use evidence and virgin-fibre food-contact countercontext. Does not prove this site forming/fuel/additive route or generic quantities. |
| epa-gas-screening | official_guidance | US EPA, AP-42 §1.4 Natural Gas Combustion, October 2026 disclaimer edition (footer 10/26), pp.1.4-1–1.4-3. https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Boiler/furnace combustion discussion used for pollutant/speciation screening and source-testing cautions only. No boiler emission factor, gas composition, PM-size assertion or fixed oxidation fraction is transferred to moulded-pulp oven burners. |
| eu-pef-allocation-2021 | official_guidance | European Commission (2021), Recommendation (EU) 2021/2279, Annex I §4.5, pp.63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Allocation hierarchy and justification of physical/economic relationships. This bounded attributional method adopts no automatic substitution credit, full PEF circular-footprint formula or PEF compliance claim. |
