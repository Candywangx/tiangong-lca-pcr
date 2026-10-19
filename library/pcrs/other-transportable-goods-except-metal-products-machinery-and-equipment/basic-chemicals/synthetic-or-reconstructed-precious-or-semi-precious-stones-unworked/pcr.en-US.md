---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-or-reconstructed-precious-or-semi-precious-stones-unworked
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Unworked colorless synthetic sapphire by oxyhydrogen flame fusion

## 1. Scope and Applicability

This method covers only unworked colorless, intentionally undoped, gem-grade single-crystal synthetic sapphire grown from purchased high-purity unfused alumina powder by oxyhydrogen flame fusion using separately purchased gaseous H2 and O2, followed by actual stabilization, grading and packing. Future foreground collection verifies purity, crystal quality, defects, lot, acceptance grade, actual SKU and provider; no recipe, yield, furnace temperature, cycle or energy default is prescribed. (`stettler-verneuil`; `orbray-sapphire-production`; `sebal-sapphire`; `gia-synthetic-gems`)

Exclude natural stones, reconstructed/bonded mixtures, intentionally colored sapphire and ruby, spinel, synthetic diamond, other growth routes, abrasive corundum, sintered ceramics, and cut, polished, drilled or mounted products. Technical remelt crystal is excluded as reference product but actual sales remain a separate physical output. Gas production and alumina refining are upstream; on-site gas production is outside this method. Non-electric stabilization, wet purification or other materials require compatible original evidence and separate inventory before claiming coverage. CPC 34560 is only a broad classification, not authority to extend the method. (`un-cpc-3-2025`; `stettler-verneuil`; `orbray-sapphire-production`)

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-or-reconstructed-precious-or-semi-precious-stones-unworked |
| classification_refs | CPC 3.0:34560; narrower |
| covered_products | Unworked colorless intentionally undoped gem-grade flame-fusion sapphire single crystals |
| excluded_products | Natural/reconstructed/doped gems; other growth routes; remelt feed as reference; worked gems and technical components |
| representative_product | An unworked colorless sapphire crystal accepted to a declared buyer gem-grade specification |
| production_route | Unfused alumina powder + purchased H2/O2 → seeded flame-fusion growth → actual stabilization → grading and packing |
| market_state | At plant delivery, unworked clean dry crystal; packaging excluded from net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide accepted colorless single-crystal material for subsequent gem working |
| How much | 1 kg accepted net crystal |
| How well | Declare single-crystal Al2O3 identity, no intentional dopants, color, defects and gem-grade acceptance specification; no prescribed numerical purity |
| How long or cycle | One production-period plant delivery; no service-life functional equivalence asserted |
| reference_flow_link | accepted_sapphire |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Synthetic or reconstructed precious or semi-precious stones, unworked `7821e8ad-ee2f-4cb9-bccd-5e2ce4169481` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual SKU/lot; gem-grade acceptance; single-crystal Al2O3 composition and impurities; no intentional dopants; colorless; Verneuil oxyhydrogen route; unworked state; dry net mass; actual stabilization; gas source/basis; site/year; packaging; off-grade fate |

The broad reference flow is a physical locator conditioned by the above qualifiers; it does not cover all synthetic or reconstructed stones. Functional unit, reference flow, inventory, collection aggregation and calculation share the same 1 kg accepted dry net crystal denominator. Missing qualifiers make the dataset reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated lot weighing of accepted dry net crystal, excluding packaging, water, loose powder and foreign material. Q is total accepted net crystal mass for the same production period, collected by cp_product and strictly positive; piece count or carat reporting does not change the denominator. |
| gas_basis | hydrogen_supply; oxygen_supply | H2: Mass; O2: Volume | kg; m3 | Use measured temperature, absolute pressure, wet/dry composition, compressibility and supplier conditions for necessary volume/mass conversion; no secondary property coefficient is a universal density. Unproven quantity/background compatibility leaves the link incomplete. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered undoped unfused alumina powder, separately purchased H2/O2 and compatible seed |
| starting_condition_role | Foreground start; raw-material/gas production burdens linked upstream |
| product_classification_scope | Declared narrower subset of CPC 34560 |
| recursive_input_rule | Purchased same-category seed links its supplier dataset without infinite recursion; internal reuse stays in stocks/transfers, not a new external flow |
| upstream_dataset_requirement | Each purchased material, gas, electricity and packaging requires compatible route, composition, state, geography, time and reference basis; UUID identity is not background-data completeness |
| disclosure | actual site/year, providers, route, stabilization/cooling/abatement configuration, foreground/upstream split and data gaps |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground_system_boundary | Include material/gas receipt, feeding, flame-fusion growth, actual stabilization, grading, packing and associated electricity, cooling and abatement. Do not double-count delivery already included in purchased backgrounds; actual uncovered transport needs a separate service exchange. | stettler-verneuil; orbray-sapphire-production; sebal-sapphire |
| single_unit | foreground_process_links | Aggregate physical crystal transfer between growth, stabilization and packing in one foreground unit while retaining stage measurements. One gem-grade finished reference output; both ends of an internal link carry equal quantities, without inventing a second UUID. | sebal-sapphire; jrc-sic-bref-2007 |
| release_scope | environment_boundary | Physical mass/water balances cover crystals, dust, wastes, condensate, actual liquid exits and air releases. Internal reuse is not export; wastewater sent to treatment is distinct from discharge to natural water. Add each actual chemical, fuel, pollutant or waste as an atomic row; unknown does not mean absent. | jrc-sic-bref-2007 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| verneuil_production | Receipt, flame-fusion growth, actual stabilization, grading and packing | required | Declared purchased-gas, colorless undoped route; stabilization, cooling and packing equipment included as actually used | foreground production | per 1 kg reference flow |

### Process: Colorless sapphire flame-fusion production (`verneuil_production`)

#### Inputs

##### Product flows

###### High-purity unfused alumina powder (`alumina_feed`)

Weigh dry alumina feed and assay moisture, Al2O3 purity and unintended impurities by actual lot. No dopants or premixed colorant feed are within scope.

- Selected flow: Alumina (aluminium oxide), except artificial corundum `2b64b550-00d6-4210-aa50-7c061511518d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_materials for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `stettler-verneuil`; `orbray-sapphire-production`

###### Purchased gaseous hydrogen H2 (`hydrogen_supply`)

Meter supplied H2 separately from O2; measure purity, delivered mass and stocks. Cylinder tare or gas volume conversion must be traceable; no hydrogenated oil, raw gas or peroxide substitutes.

- Selected flow: Purchased gaseous hydrogen H2
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_gases for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_gases`
- Sources: `stettler-verneuil`; `orbray-sapphire-production`

###### Purchased gaseous oxygen O2 (`oxygen_supply`)

Use the Volume reference in m3 for gaseous O2. Record temperature, absolute pressure, wet/dry composition and compressibility; match supplier/background volume conditions. This identity is industrial oxygen separation on a normal-condition volume basis. Its stated 1.429 kg/Nm3 is not an operating-condition density or a PCR conversion default; obtain the underlying normal T/P convention and supplier conditions. Unknown volume compatibility blocks the dataset link.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Use cp_gases for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_gases`
- Sources: `stettler-verneuil`; `orbray-sapphire-production`

###### Purchased medium-voltage grid electricity (`electricity`)

Meter powder feeding, flame controls, extraction, cooling pumps, any actual electric stabilization furnace, inspection and packing separately by stage. This UUID is only CN 1–35 kV grid-average consumption mix to user; other supply needs a compatible flow. Preserve Net calorific value/MJ; meter kWh becomes MJ by the exact unit relation 1 kWh = 3.6 MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_power for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_power`
- Sources: `jrc-sic-bref-2007`

###### Treated tap water for cooling makeup (`cooling_makeup`)

Include only actual purchased treated tap-water makeup, not internal circulation. This flow has Mass/kg reference; convert metered liquid volume with measured density and temperature, not a database screening density. Add other actual abstraction or treatment chemicals as separate specific rows.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_water for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: `jrc-sic-bref-2007`

###### Purchased unworked undoped synthetic sapphire seed (`seed_crystal`)

Use a compatible unworked sapphire fragment of known origin and growth history. Weigh new external seed consumption; account for opening/closing seed stock. Reused seed within the foreground is an internal transfer and has no second upstream charge.

- Selected flow: Synthetic or reconstructed precious or semi-precious stones, unworked `7821e8ad-ee2f-4cb9-bccd-5e2ce4169481`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_materials for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `stettler-verneuil`; `orbray-sapphire-production`

###### Alumina ceramic growth pedestal (`alumina_pedestal`)

Conditional on actual alumina-ceramic pedestal use; identify ceramic composition, grade, replacement mass and service life. Ceramic pieces are not purchased alumina powder or a crucible. Add other actual furnace refractory compositions separately.

- Selected flow: Alumina ceramic growth pedestal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_materials for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `jrc-sic-bref-2007`

###### Polyethylene film for product packing (`pe_film`)

Conditional on actual PE film use; confirm polymer CAS 9002-88-4, grade and supplier. Weigh film consumed excluding crystal net mass; account for reused packaging. The source CPC luggage classification conflict remains disclosed; do not extend to PET or mixed laminates.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_materials for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `jrc-sic-bref-2007`

###### Corrugated cardboard shipping box (`corrugated_box`)

Conditional on this actual packaging; weigh boxes and obtain measured supplier fibre/adhesive/coating composition. Do not adopt the searched box record with a fixed 16.6% virgin/83.4% recycled mix unless actual SKU evidence agrees; folding paper boxes are a different construction.

- Selected flow: Corrugated cardboard shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_materials for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `jrc-sic-bref-2007`

#### Outputs

##### Product flows

###### Accepted unworked colorless Verneuil sapphire (`accepted_sapphire`)

1 kg. Weigh accepted dry net crystals after actual stabilization and quality grading, before any cutting, polishing or mounting. Exclude packaging, loose powder, pedestal, water and remelt-grade material. Grade acceptance supports gem use without a fabricated purity or yield default.

- Selected flow: Synthetic or reconstructed precious or semi-precious stones, unworked `7821e8ad-ee2f-4cb9-bccd-5e2ce4169481`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: source_rule
- Collection protocol: `cp_product`
- Sources: `stettler-verneuil`; `sebal-sapphire`

###### Off-grade synthetic sapphire crystal sold as remelt feed (`remelt_coproduct`)

Conditional on actual sale for another growth route. Record its actual physical mass, grade, sale contract and receiver; keep separate from gemstone-grade reference output. No distinct exact flow identity was verified; do not conceal it or assign the gemstone UUID solely to satisfy a checker. Resolve before completing a joint-output dataset.

- Selected flow: Off-grade synthetic sapphire crystal sold as remelt feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_product for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_product`
- Sources: `stettler-verneuil`; `sebal-sapphire`

##### Waste flows

###### Rejected undoped sapphire crystal for disposal (`rejected_crystal`)

Only material actually discarded across the boundary; record composition, measured dry mass and receiving route. Internal rework is not a waste export; saleable remelt feed belongs in remelt_coproduct, not both rows.

- Selected flow: Rejected undoped sapphire crystal for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_waste for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: `jrc-sic-bref-2007`

###### Collected alumina powder sent off site (`captured_alumina_dust`)

Weigh this single captured powder stream and assay composition/contamination. The broad Dust waste identity is limited here to actual captured alumina powder. Dust internally returned to feeding remains an internal transfer; emitted particulate is counted separately after abatement.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_waste for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: `jrc-sic-bref-2007`

###### Spent alumina ceramic growth pedestal (`spent_alumina_pedestal`)

Conditional on replacement; preserve actual ceramic composition, mass, contamination and receiver. Reject the searched refractory waste flow restricted to aluminium production.

- Selected flow: Spent alumina ceramic growth pedestal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_waste for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: `jrc-sic-bref-2007`

###### Untreated cooling-water bleed sent to treatment (`cooling_bleed`)

Conditional on an actual exported bleed; collect mass, volume, temperature, suspended solids and each actual additive/pollutant. The candidate is restricted to secondary/tertiary treatment and cannot identify untreated bleed. No direct receiving-water emission is represented by this row.

- Selected flow: Untreated cooling-water bleed sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_water for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: `jrc-sic-bref-2007`

###### Uncleaned discarded polyethylene packing film (`waste_pe_film`)

Conditional on generated film waste; measure mass, polymer and contamination and record receiver. Do not use a flow already cleaned at a recycling plant for this untreated plant-gate waste.

- Selected flow: Uncleaned discarded polyethylene packing film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_waste for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: `jrc-sic-bref-2007`

###### Damaged cardboard boxes from packing (`waste_cardboard`)

Conditional on packing scrap/damaged boxes at the plant; weigh actual cardboard waste and record contamination and receiver. The identity source mentions an expert 2% assumption; that number is not adopted. Inbound packaging waste requires a separately compatible exchange.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_waste for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: `jrc-sic-bref-2007`

##### Elementary flows

###### PM2.5 to outdoor air (`pm25_air`)

Measure released particles of aerodynamic diameter at most 2.5 micrometres after control, including assessed condensable contribution where relevant. Separate stack and fugitive sources; do not add nested PM10 or total PM to these exclusive fractions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_air for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `epa-201a-2020`; `jrc-sic-bref-2007`

###### PM2.5–PM10 to outdoor air (`pm25_10_air`)

Use the exclusive fraction above 2.5 and at most 10 micrometres, derived only from compatible contemporaneous PM10 and PM2.5 measurements or direct fraction sampling. Unknown fractionation remains incomplete, not zero.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_air for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `epa-201a-2020`; `jrc-sic-bref-2007`

###### Particles above PM10 to outdoor air (`pmover10_air`)

Collect the exclusive fraction above 10 micrometres using a compatible total/filterable fraction measurement and documented size separation. Do not infer it from PM10 alone or count captured dust as this emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_air for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `epa-201a-2020`; `jrc-sic-bref-2007`

###### Water vapour to outdoor air (`water_vapour_air`)

Determine actual vented water from consumed hydrogen combustion, gas moisture and cooling evaporation with measured gas/water balance. Separate condensate recovered or exported as liquid. No database property coefficient or theoretical complete-combustion assumption replaces leak and moisture measurements.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_air for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `jrc-sic-bref-2007`

###### Unburned hydrogen to outdoor air (`hydrogen_air`)

Assess actual supply leakage, start/stop purges and unburned outlet H2 by calibrated measurements or a traceable reconciled balance with uncertainty. Absence needs documented assessment; no default emission factor.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_air for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `jrc-sic-bref-2007`

###### Nitrogen monoxide to outdoor air (`nitric_oxide_air`)

Conditional on actual NO detected or quantified where nitrogen enters the hot flame. Measure actual NO species mass; aggregate NOx as NO2-equivalent is not NO mass. Exclude N2O and avoid counting any NOx aggregate again.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_air for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `jrc-sic-bref-2007`

###### Nitrogen dioxide to outdoor air (`nitrogen_dioxide_air`)

Conditional on actual NO2 detected or quantified; record actual species mass and sampling basis. When only aggregate NOx exists, obtain compatible speciation; do not assign that whole amount to both NO and NO2 or claim zero.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use cp_air for this measured exchange over the same production period; divide the attributable measured amount by same-period accepted net dry crystal mass Q. A conditional row with no actual exchange requires documented absence assessment.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `jrc-sic-bref-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | foreground_burden_allocation | Declare a product-specific attributional inventory goal. First directly attribute specific operations by measured stage/campaign or virtual subdivision, and assess whether system expansion is applicable. Only where these options are inappropriate or infeasible and allocation is needed, apply demonstrable determining physical causality separately to inseparable shared burdens; allocate residual burdens lacking such a relationship by verified same-period market values at the common-process exit in their actual delivered condition. Remove subsequent processing/packing/transport differences and disclose prices, physical mass, allocation scope and sensitivity. No default share or universal consequential-study allocation claim. | jrc-ilcd-allocation-2010; stettler-verneuil |
| physical_before_burden | physical_balance | Preserve actual physical outputs, wastes, releases and internal links without multiplying by burden allocation shares. Keep a separate allocated environmental-burden ledger; apply chosen shares only to joint burdens, summing to one and avoiding repeat allocation. | jrc-sic-bref-2007 |
| waste_recovery | waste_classification | Record disposal, recovery or actual sale status and receiver; saleable remelt material is neither a negative emission nor a free by-product. No default substitution credit; a substitution scenario separately declares displaced product, quality and burden boundary. | jrc-ilcd-allocation-2010; stettler-verneuil |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | verneuil_production | accepted crystals; coproduct | weighing_acceptance | SKU; lot; net dry mass; Al2O3 assay; color; defects; gem-grade acceptance; remelt sale/fate; opening/closing stocks | Calibrated weighing and traceable lot acceptance, distinct gem-grade/remelt/waste records | kg | every lot | same complete representative production period including normal operation, start/stop and rework | declared foreground site/equipment | per 1 kg reference flow | calibration, assays, coverage, balance reconciliation and uncertainty records |
| cp_materials | verneuil_production | each solid input | purchase_weighing | row_id; SKU; supplier; composition; purity; moisture; delivered/consumed mass; opening/closing stocks; pedestal replacement/life; packaging type | Separate calibrated weighing and supplier certificates for each material; reconcile purchases, stocks and consumption | kg | every lot/change | same complete representative production period including normal operation, start/stop and rework | declared foreground site/equipment | per 1 kg reference flow | calibration, assays, coverage, balance reconciliation and uncertainty records |
| cp_gases | verneuil_production | each purchased gas | gas_metering | species; purity; mass/volume; temperature; absolute pressure; wet/dry basis; compressibility; supply route; meter; stocks; purge/leak; provider reference conditions | Calibrated independent gas meters or traceable cylinder tare/net records; reconcile measured conversion with provider | kg H2; m3 O2 | continuous and every delivery | same complete representative production period including normal operation, start/stop and rework | declared foreground site/equipment | per 1 kg reference flow | calibration, assays, coverage, balance reconciliation and uncertainty records |
| cp_power | verneuil_production | stage electricity | metering | stage; kWh; supply country; voltage; provider; stabilization program; run/idle hours; shared loads | Stage submetering and reconciled invoices; convert kWh to MJ with 3.6; attribute measured shared load explicitly | MJ | continuous | same complete representative production period including normal operation, start/stop and rework | declared foreground site/equipment | per 1 kg reference flow | calibration, assays, coverage, balance reconciliation and uncertainty records |
| cp_water | verneuil_production | makeup and bleed | metering_sampling | row_id; supplied/bleed volume; temperature; density; composition; treatment receiver; circulation; evaporation; condensate; additive identities | Meter actual boundary entry/exit and measure density for mass reference; assay actual contamination; internal circulation separately | kg | continuous and every bleed | same complete representative production period including normal operation, start/stop and rework | declared foreground site/equipment | per 1 kg reference flow | calibration, assays, coverage, balance reconciliation and uncertainty records |
| cp_waste | verneuil_production | each solid waste | weighing_transfer | row_id; composition; contamination; dry/wet mass; moisture; retained/returned dust; waste/sale status; receiver | Separate calibrated weighing and waste transfer records by actual stream; reconcile internal recovery without double export | kg | every transfer | same complete representative production period including normal operation, start/stop and rework | declared foreground site/equipment | per 1 kg reference flow | calibration, assays, coverage, balance reconciliation and uncertainty records |
| cp_air | verneuil_production | each outdoor air species/fraction | monitoring_balance | source; species/CAS; fraction; sample time; concentration; gas volume; T/P/moisture; operating time; detection limit; capture/condensate; uncertainty; nitrogen ingress; species definition | Measure released mass for each source/species/fraction or use an explicitly reconciled measured physical balance; apply stack method only within its limitations and assess fugitives separately | kg | representative campaigns and continuous records where available | same complete representative production period including normal operation, start/stop and rework | declared foreground site/equipment | per 1 kg reference flow | calibration, assays, coverage, balance reconciliation and uncertainty records |

Keep raw unallocated totals for one matched route, supplied state, gem-grade acceptance specification and representative period, including attributable failed and zero-accepted-output batches as well as start/stop, idle and rework operations. Reconcile opening/closing work in progress and finished stocks with their accumulated inventory burdens, using documented carry-in/carry-out attribution without lost or duplicated burdens. Q counts final accepted crystal production once, reconciled with dispatch and stocks; returned, reworked and reaccepted material is not counted again, and final rejects are excluded. Apply normalize_inventory to each reconciled raw period total once; row, protocol and calculation descriptions denote that same division. A complete period with Q <= 0 cannot produce a per-kg dataset; justify a wider representative period or report an incomplete result.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_inventory | all inventory rows | Keep measured physical totals for every row first; normalized amount = attributable same-period exchange total for that row / Q; Q is accepted gem-grade dry net crystal mass in kg from cp_product. Reference output = 1 kg. Joint burdens are attributed with the declared allocation before normalization, without altering physical balances. Keep raw unallocated totals for one matched route, supplied state, gem-grade acceptance specification and representative period, including attributable failed and zero-accepted-output batches as well as start/stop, idle and rework operations. Reconcile opening/closing work in progress and finished stocks with their accumulated inventory burdens, using documented carry-in/carry-out attribution without lost or duplicated burdens. Q counts final accepted crystal production once, reconciled with dispatch and stocks; returned, reworked and reaccepted material is not counted again, and final rejects are excluded. Apply normalize_inventory to each reconciled raw period total once; row, protocol and calculation descriptions denote that same division. A complete period with Q <= 0 cannot produce a per-kg dataset; justify a wider representative period or report an incomplete result. | cp_product; cp_materials; cp_gases; cp_power; cp_water; cp_waste; cp_air | exchange per 1 kg reference flow | jrc-sic-bref-2007 |
| particulate_partition | pm25_air; pm25_10_air; pmover10_air | Partition exclusive fractions only from same-basis contemporaneous measurements; PM2.5–10 = compatible PM10 minus PM2.5; >10 requires compatible total particulate and sizing evidence. Assess condensable contribution separately where relevant without duplication; filterable-only results do not establish complete total release. | cp_air | exclusive particle masses and completeness statement | epa-201a-2020 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | reference product; every input | Obtain actual SKU, lot, provider originals and assays confirming unworked gem-grade colorless undoped single crystal and route; classification labels or UUIDs alone do not establish site identity. | stettler-verneuil; un-cpc-3-2025; cp_product |
| balances | all inventory rows | Reconcile same-period alumina/crystal physical masses and separate H/O/water balance across feed, seed, product, off-grade material, wastes, dust and stocks. Retain original residuals, explanations and measurement uncertainty; no default yield or forced closure. | jrc-sic-bref-2007; cp_materials; cp_gases; cp_water; cp_air |
| monitoring_applicability | cp_air | EPA201A applies only to compatible stationary-source filterable fractions, preserving original droplet/temperature limits; wet oxyhydrogen exhaust needs a validated alternative if unsuitable. Fugitives, condensable contribution and gas species each require valid methods. Unknown species/fractions, aggregate-only NOx or incompatible gas basis cannot be reported complete. | epa-201a-2020; cp_air; cp_gases |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference product | Require exactly one accepted gem-grade reference output consistent with 1 kg dry net mass, the same Q and every bilingual denominator. Qualify the broad unworked identity to the declared subset; exclude remelt feed, packaging, water and other gems. | un-cpc-3-2025; stettler-verneuil |
| validate_exchanges | all inventory rows | Each row is one atomic flow; check adopted names, CAS where present, route, reference property, unit and compartment, with separate quantity/provider compatibility. Blank UUIDs are unresolved; no complete dataset claim until each applicable row is resolved. | jrc-sic-bref-2007 |
| validate_ledger | physical_and_burden_ledgers | Separate physical and allocated-burden ledgers; equal physical amounts on both internal-link ends; three exclusive PM fractions, no captured/emitted dust double count and no NO/NO2 plus NOx aggregate duplication. Do not omit start/stop, leaks, stocks or reuse without evidence. | jrc-sic-bref-2007; epa-201a-2020 |
| validate_route | method_applicability | Intentional doping, on-site gas production, another growth route or worked gems are outside method scope. Stabilization energy source, purification, cooling and each actual material need compatible inventory; report gaps rather than zero or a neighboring product. | stettler-verneuil; orbray-sapphire-production; sebal-sapphire |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | product-specific attributional foreground production inventory |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Production input for unworked colorless flame-fusion sapphire satisfying every qualifier |
| excluded_use | Whole-leaf 34560 coverage; other crystals/reconstructed products; technical remelt feed as reference; substitutes for alumina refining or worked jewelry; completeness claims with identity/basis gaps |
| required_metadata | all reference qualifiers; actual site/time/provider; upstream boundary; SKU/quality acceptance; stabilization/cooling/abatement; measurement/balances; co-products/allocation |
| required_quality_disclosure | per-row identity and quantity/background compatibility; actual applicability/absence evidence; scope/gaps; uncertainty and physical balance residuals; PM/gas-species completeness; no numeric defaults |
| update_trigger | change in provider, SKU, recipe/doping, growth/stabilization route, gas basis, yield, abatement, background or classification acceptance |

## 11. Data Sources

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; originals checked 2026-10-14 (local date) | 34560 broad classification; narrower subset only |
| stettler-verneuil | handbook | Stettler Sapphire, Le procédé Verneuil, qu’est ce que c’est ?, 21 March 2023 / modified 3 July 2024; https://stettlersapphire.ch/le-procede-verneuil-quest-ce-que-cest/; originals checked 2026-10-14 (local date) | Pure alumina/oxyhydrogen/seed route; colorless crystals and remelt-feed counterboundary; no quantitative defaults |
| orbray-sapphire-production | handbook | Orbray, Production of Sapphire, published 14 April 2021, last modified 15 May 2026; https://orbray.com/magazine_en/archives/19; originals checked 2026-10-14 (local date) | Physical flame-fusion steps and distinct alternative growth routes; ruby recipe and historic sizes/cycles not transferred |
| sebal-sapphire | handbook | Sebal/Timsaph, 100% Swiss sapphire, undated technical page; https://sebal.ch/en/100-swiss-sapphire; originals checked 2026-10-14 (local date) | Producer raw-sapphire growth and stabilization; actual stabilization route must be declared |
| jrc-sic-bref-2007 | official_guidance | European Commission, Speciality Inorganic Chemicals BREF, August 2007; scope pp. xxv–xxvi, §2.3 p.18, §§3.7.1–3.7.3 pp.41–42; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/sic_bref_0907.pdf; originals checked 2026-10-14 (local date) | Only generic physical handling/integration/measurement/waste accounting; not sapphire-specific legal/BAT scope or pigment-family limits |
| epa-201a-2020 | method_factor | US EPA, Method 201A, 7 October 2020, §§1.1–1.6; https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf; originals checked 2026-10-14 (local date) | Filterable PM fractions for applicable stationary stacks; droplet, temperature, condensable and total-PM limitations; no emission factor |
| gia-synthetic-gems | handbook | GIA, Robert Weldon, An Introduction to Synthetic Gem Materials, undated; https://www.gia.edu/gem-synthetic; original checked 2026-10-14 (local date) | Synthetic sapphire gem use, crystals before cutting and separate growth routes; no numeric or current legal requirements transferred |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook — General guide for LCA — Detailed guidance, March 2010, §§7.9.3.1–7.9.3.3 and provisions, printed pp.257–258,264,266 / PDF277–278,284,286; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; original checked 2026-10-14 (local date) | Allocation prerequisites, determining physical causality and common-process-exit value; no sapphire industry allocation share |
