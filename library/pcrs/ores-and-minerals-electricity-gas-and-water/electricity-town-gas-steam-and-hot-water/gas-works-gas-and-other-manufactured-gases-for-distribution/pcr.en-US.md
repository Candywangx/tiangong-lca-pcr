---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.gas-works-gas-and-other-manufactured-gases-for-distribution
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Gas works gas (and other manufactured gases for distribution)

## 1. Scope and Applicability

This PCR governs foreground data packages for gas works converting, purifying or blending feedstocks into manufactured gaseous fuel for distribution, measured at the plant delivery meter. Distribution fuel is the main gas works product, rather than a recovered steelmaking gas. Carbonisation, gasification, reforming and blending are covered; declare the actual route. The official CPC structure distinguishes gas works gas, coke oven gas and recovered gases. The IEA 2008 definition supports multiple routes; the narrower CBS coal-derived town-gas definition supports the representative subclass without restricting all routes to coal. Sources: `unsd-cpc-2025`, `iea-gasworks-2008`, `cbs-town-gas`.

Exclude mere natural-gas extraction or distribution, gas by-products at standalone steelmaking coke ovens, untreated blast-furnace or converter gas, synthesis gas dedicated to chemical synthesis, pure hydrogen and end-use combustion. When such gases enter gas works as feedstocks, retain their actual input identities and upstream burdens; entry into a network alone does not change their origin. Purification, gas holders, compression and plant-outlet metering belong to production here; municipal network delivery needs a separate data package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.gas-works-gas-and-other-manufactured-gases-for-distribution |
| classification_refs | CPC 3.0:17202 |
| covered_products | Manufactured distribution fuel gas from gas works; declared carbonisation, gasification, reforming or blending route |
| excluded_products | Direct natural gas supply; recovered steelworks gas; chemical synthesis gas; pure hydrogen |
| representative_product | Purified coal-derived town gas ready for distribution |
| production_route | Actual site-specific manufacture, purification and final mixing; do not add alternative route inventories |
| market_state | Gaseous fuel at plant outlet; declared composition, pressure, temperature, wet/dry basis and quality acceptance |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply manufactured gaseous distribution fuel |
| How much | 1 m3 accepted gas at plant outlet |
| How well | Declared supply quality; composition, calorific value, impurities and interchangeability indicators |
| How long or cycle | Declared annual operating period including startup, shutdown and abnormal operation |
| reference_flow_link | reference_gas |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Gas `084a3bc0-51e3-4c71-bd26-236efaeba2b5` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | site; period; manufacture route; feedstocks and blend shares; delivery meter; volume reference temperature and absolute pressure; wet/dry basis; compressibility and meter correction method; composition; gross and net calorific values and test method; sulfur and tar content; delivery pressure; acceptance specification; upstream input boundaries |

Declare every required qualifier in metadata, process notes or reference-flow comments. One m3 at different reference conditions is not directly comparable; provide traceable conversions, not generic heating values or densities.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| volume_basis | reference product | Volume | m3 | Use corrected delivery volume collected with cp_gas; retain traceability from metering conditions to declared reference conditions. |
| electricity_units | make_electricity; clean_electricity; export_electricity | Net calorific value | MJ | Convert meter kWh using the unit identity 1 kWh = 3.6 MJ; preserve electricity energy rather than substitute gas heating value. |
| steam_quality | steam_feed | Mass | kg | Record steam mass and thermodynamic state; match upstream steam pressure, temperature and condensate return. |
| chemical_basis | caustic; iron_sorbent | Mass | kg | Collect solid sodium hydroxide mass and formulated sorbent mass. Solutions require concentration-specific flows; avoid counting solvent water twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Feedstocks and incoming gases received at site with declared identity and upstream boundary |
| starting_condition_role | Foreground production entry with accounted upstream supply |
| product_classification_scope | Gas works manufactured distribution fuel; coke oven or recovered inputs retain their incoming category |
| recursive_input_rule | Meter purchased same-category gas separately and link supplier data; internal recirculation and own-gas firing stay in internal ledgers without repeated product input |
| upstream_dataset_requirement | Match datasets for each purchased feedstock, electricity, steam, water, chemical and external waste treatment; disclose missing supply-chain coverage |
| disclosure | Site boundary, flowsheet, origins, upstream starting points, internal transfers, holder-stock changes, flaring, venting and excluded network delivery |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | foreground | Include feed preparation, actual conversion or mixing, cooling and purification, holders, final compression and metering, energy supply and abatement; select the actual route and retain startup and loss records. | iea-gasworks-2008 |
| boundary_transfers | incoming_gases | For coke oven and recovered feed gases retain supplier boundaries and burdens; record incremental gas works processing and prevent duplication of production burdens. | unsd-cpc-2025; iea-gasworks-2008 |
| boundary_internal | all inventory rows | Do not repeat internal gas, water or steam circulation as external exchanges; include own-gas combustion and flare emissions. Disclose external delivery, end use and infrastructure separately; a plant-outlet inventory is not a complete life cycle. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| make | Feed preparation and manufacture or initial mixing | required | Actual declared route | foreground production | 1 m3 reference gas |
| clean | Cooling, purification and co-product separation | conditional | Gas needs cooling, impurity removal or co-product separation | conditioning | 1 m3 reference gas |
| export | Holders, final mixing, compression and outlet metering | required | Actual delivery conditions | conditioning | 1 m3 reference gas |

Processes are collection groups within one integrated gas works. Record internal raw-gas transfers in the flowsheet ledger without repeating them as external exchanges. Include each row only under its stated condition; declare absent technologies not applicable instead of summing alternatives. Add an individual exchange in the data package for every additional solvent, catalyst, waste stream or emitted species actually present, with identity, amount, conditions and fate.

### Process: Feed preparation and gas manufacture (`make`)

#### Inputs

##### Product flows

###### Gas coal feedstock (`coal_feed`)

When gas coal is carbonised or gasified; add an exact individual flow for every other coal grade used.

- Selected flow: hard coal, gas coal `ec4b882e-3ec8-4756-9689-fa8760c16811`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

###### Gas coke (`coke_feed`)

When purchased gas coke is gasified; internal coke recycling is excluded from purchased input.

- Selected flow: Gas coke
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

###### Natural gas, gaseous (`natural_gas_feed`)

When natural gas is reformed or used as a blending component; identify feedstock and thermal-use shares separately.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

###### Naphtha (`naphtha_feed`)

When naphtha is reformed or used for enrichment.

- Selected flow: Naphtha `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

###### Liquefied petroleum gas (`lpg_feed`)

When propane/butane LPG is vaporised for enrichment or mixing.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

###### Residual fuel oil (`oil_feed`)

When residual fuel oil is gasified or used for enrichment; disclose sulfur and water content.

- Selected flow: heavy fuel oil `9490cf0e-a790-44a1-9c2f-3793bbdb452d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

###### Coke oven gas (`coke_oven_gas_feed`)

When external coke oven gas is received for conversion into the gas works distribution product; retain its upstream burden.

- Selected flow: coke oven gas `32ab44a2-c912-4c1f-98cf-856a24b3f99a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

###### Electricity (`make_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

For metered manufacture and feed preparation electricity; separate grid imports from self-generation.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use traceable measured records from cp_energy, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Steam (`steam_feed`)

When external steam supplies a reactant or heat; disclose pressure, temperature and condensate return.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_energy, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Gaseous oxygen (`oxygen_feed`)

When oxygen-blown gasification operates; state purity and gas reference conditions.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

##### Waste flows

No scheduled exchange of this type; record actual additional exchanges individually.

##### Elementary flows

###### Air, atmospheric (`air_feed`)

When atmospheric air is drawn into gasification or dilution; keep this distinct from purchased oxygen.

- Selected flow: air `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_feed, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources:

#### Outputs

##### Product flows

###### Gas coke (`gas_coke_coproduct`)

When marketable gas coke leaves coal-carbonisation operations; exclude internal recycle.

- Selected flow: Gas coke
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_products, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources:

###### Coal tar (`coal_tar_coproduct`)

When separated coal tar is sold; contaminated tar sent for disposal needs a distinct waste row in the data package.

- Selected flow: Coal tar `176de006-c7be-47ad-be03-2ce15e99c6ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_products, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources:

##### Waste flows

###### Coal gasification ash (`gasification_ash`)

When ash crosses the facility boundary; record dry mass, moisture and treatment destination.

- Selected flow: Coal gasification ash
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_waste, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`make_co2`)

For fossil carbon released by process conversion, firing and flaring, after capture; separate process and combustion records.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_emissions, attributed to the delivered reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources:

###### Carbon monoxide, to air (`make_co`)

When conversion or combustion releases carbon monoxide; distinguish it from the carbon monoxide retained in product gas.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_emissions, attributed to the delivered reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources:

###### Sulfur dioxide, to air (`make_so2`)

When sulfur-bearing fuels are oxidised and sulfur dioxide is emitted after abatement.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_emissions, attributed to the delivered reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen dioxide, to air (`make_no2`)

When nitrogen dioxide is emitted; obtain species-specific results instead of duplicating a total NOx result.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_emissions, attributed to the delivered reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen monoxide, to air (`make_no`)

When nitrogen monoxide is emitted; document analytical speciation separately from nitrogen dioxide.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_emissions, attributed to the delivered reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources:

### Process: Gas cooling and purification (`clean`)

#### Inputs

##### Product flows

###### Electricity (`clean_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

For pumps, gas cooling and purification; meter separately or document attribution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use traceable measured records from cp_energy, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Process water (`process_water`)

When fresh supplied water enters cooling or washing; exclude repeatedly circulated internal water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_water, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Sodium hydroxide (`caustic`)

When solid sodium hydroxide is dissolved for acid-gas washing; purchased solutions require their own concentration-specific flow.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_chemicals, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemicals`
- Sources:

###### Iron oxide desulfurisation sorbent (`iron_sorbent`)

When iron-oxide-based dry desulfurisation is used; record actual formulation rather than pure-oxide equivalents.

- Selected flow: Iron oxide desulfurisation sorbent
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_chemicals, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemicals`
- Sources:

##### Waste flows

No scheduled exchange of this type; record actual additional exchanges individually.

##### Elementary flows

No scheduled exchange of this type; record actual additional exchanges individually.

#### Outputs

##### Product flows

###### Recovered sulfur (`recovered_sulfur`)

When crude recovered elemental sulfur is a saleable product.

- Selected flow: Recovered elemental sulphur, crude `586e1b09-2904-4b0a-b1ef-fc012259004f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_products, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources:

##### Waste flows

###### Gas-washing wastewater (`gas_liquor`)

When contaminated gas-washing liquor is exported to treatment; onsite treatment requires separate discharge and sludge records in the data package.

- Selected flow: Gas-washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_waste, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent iron oxide desulfurisation sorbent (`spent_sorbent`)

When exhausted sorbent leaves the site; record sulfur loading, moisture and hazardous-waste classification.

- Selected flow: Spent iron oxide desulfurisation sorbent
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_waste, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Hydrogen sulfide, to air (`clean_h2s`)

When hydrogen sulfide escapes washing or sulfur recovery; product sulfur content is not an emission.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_emissions, attributed to the delivered reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources:

### Process: Conditioning and outlet delivery (`export`)

#### Inputs

##### Product flows

###### Electricity (`export_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

For final blending, compression, holders and outlet metering inside the site boundary.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use traceable measured records from cp_energy, attributed to the delivered reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

No scheduled exchange of this type; record actual additional exchanges individually.

##### Elementary flows

No scheduled exchange of this type; record actual additional exchanges individually.

#### Outputs

##### Product flows

###### Gas works gas (`reference_gas`)

Accepted distribution-ready gas at the plant outlet; exclude rejected gas, internal fuel use and recirculation.

- Selected flow: Gas `084a3bc0-51e3-4c71-bd26-236efaeba2b5`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol: `cp_gas`
- Sources: `iea-gasworks-2008`

##### Waste flows

No scheduled exchange of this type; record actual additional exchanges individually.

##### Elementary flows

###### Methane, fossil, to air (`handling_methane`)

For fugitive and vented methane from all gas-handling stages; reconcile equipment registers to avoid overlap with flares.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Use traceable measured records from cp_emissions, attributed to the delivered reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources:

###### Carbon monoxide, to air (`handling_co`)

For carbon monoxide lost by venting and leaks from gas handling; keep separate from make_co combustion emissions.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use traceable measured records from cp_emissions, attributed to the delivered reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_avoid | joint operations | Prefer subdivision and independent metering to avoid allocation. Use system expansion only in a separate study declaring all expanded functions; do not combine allocation and substitution credits in a single-product supply dataset. | ec-pef-2021 |
| allocation_physical | gas; coke; tar; sulfur | Where subdivision is unavailable, document a defensible physical causal relationship with all co-products and parameters. Energy allocation needs evidence of fuel functions and a common gross/net calorific basis; never add gas volume and solid mass as an allocation basis. | ec-pef-2021 |
| allocation_other | joint operations | If a physical relationship cannot be supported, justify rejecting preceding methods and use relative economic value at a common period and market point if appropriate. Disclose prices, quantities, shares and sensitivity. Keep waste-treatment burdens with the generating process rather than treat disposal mass as co-product value. | ec-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gas | export | reference product | meter and operating records | outlet volume; T; absolute P; wet/dry basis; correction factors; stock; composition; calorific values; acceptance certificate | Calibrated flow meter and quality testing; retain the actual correction equations and method edition and recompute delivered quantities on common conditions. | m3 | shift records with monthly reconciliation | complete declared operating year | same site and route | per reference flow | calibration, tests, transfer notes and ledgers |
| cp_feed | make | feedstock | meter and operating records | material receipts; stock; internal recycle; feedstock/thermal use; composition and moisture; gas metering conditions | Weighing, supplier records or gas meters; reconcile net external use with opening/closing stock and internal transfers. | kg; m3 | shift records with monthly reconciliation | complete declared operating year | same site and route | per reference flow | calibration, tests, transfer notes and ledgers |
| cp_energy | make; clean; export | electricity; steam | meter and operating records | process electricity; steam mass and state; condensate return; own energy; purchased energy | Collect submeter electricity and steam mass; document attribution where submeters are unavailable and express electricity in MJ. | MJ; kg | shift records with monthly reconciliation | complete declared operating year | same site and route | per reference flow | calibration, tests, transfer notes and ledgers |
| cp_water | clean | fresh supplied water | meter and operating records | water mass; makeup; circulation; discharge; evaporation; meter error | Use mass measurement or volume with measured density to reconcile new supplied water; do not repeat internal circulation. | kg | shift records with monthly reconciliation | complete declared operating year | same site and route | per reference flow | calibration, tests, transfer notes and ledgers |
| cp_chemicals | clean | individual chemical | meter and operating records | formulation; concentration; net consumption; stock; supplier; sorbent sulfur loading | Weigh each chemical and reconcile purchases, withdrawals and stock; create distinct flows for different solution concentrations. | kg | shift records with monthly reconciliation | complete declared operating year | same site and route | per reference flow | calibration, tests, transfer notes and ledgers |
| cp_products | make; clean | individual co-product | meter and operating records | co-product mass; moisture; specification; fate; price; calorific value | Weigh and reconcile sales and stock; distinguish accepted sales, recycle and disposal. | kg | shift records with monthly reconciliation | complete declared operating year | same site and route | per reference flow | calibration, tests, transfer notes and ledgers |
| cp_waste | make; clean | individual waste | meter and operating records | waste mass; moisture; hazard classification; composition; transfer note; treatment operator | Weigh each waste and reconcile transfer notes; use measured density for liquids and disclose treatment boundaries. | kg | shift records with monthly reconciliation | complete declared operating year | same site and route | per reference flow | calibration, tests, transfer notes and ledgers |
| cp_emissions | make; clean; export | individual emitted substance | meter and operating records | release point; species; concentration; flow; time; detection limit; leaks; flares; capture | Determine each substance from monitoring, material balance or documented engineering estimates; retain all inputs and uncertainty, not product-gas composition as an emitted amount. | kg | shift records with monthly reconciliation | complete declared operating year | same site and route | per reference flow | calibration, tests, transfer notes and ledgers |

Every protocol uses net accepted delivered volume from the same period as denominator. Divide each attributable period exchange by net delivered gas volume at the same declared reference conditions to obtain its quantity per 1 m3 reference flow. Fixed output 1 m3 is a normalization definition, not a measured yield. Reconcile stock changes, own fuel and losses in internal ledgers without both subtracting them from delivery and repeating them as purchased gas.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Use the collection normalization stated above, attributable period total divided by net delivered volume; retain both unallocated totals and allocated quantities. | cp_gas; cp_feed; cp_energy; cp_water; cp_chemicals; cp_products; cp_waste; cp_emissions | exchange amount per reference flow |  |
| electricity_conversion | make_electricity; clean_electricity; export_electricity | 1 kWh = 3.6 MJ; dimensional unit identity. | cp_energy | MJ electricity per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_quality | foreground | Retain actual flowsheet, all external exchanges, internal transfers and reasons for non-applicability; add atomic rows for additional materials and emissions. | flowsheet and ledgers |
| volume_quality | reference_gas | Align conditions for delivery, incoming gas meters, holder stock and calorific values; prohibit comparison where conversion is not traceable. | cp_gas; cp_feed |
| emission_quality | cp_emissions | Disclose monitoring coverage, detection limits, unmeasured species and estimate error; a total NOx measurement cannot be assigned in full to both NO and NO2. | monitoring and analytical records |
| range_quality | all inventory rows | Collect actual quantities. This PCR supplies no generic inferred ranges or default emission factors; missing records are not zero. Engineering estimates in the data package must be marked modelled_estimate with justification and uncertainty. | collection protocols and gap disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_gas | Check route, delivery state, all required qualifiers and gas conditions; mere natural-gas distribution is outside scope. | unsd-cpc-2025; iea-gasworks-2008 |
| validate_measurement | all inventory rows | Each row must agree with the same-period, same-condition 1 m3 accepted outlet gas; check properties, units, upstream compatibility, electricity conversion and steam state. |  |
| validate_balance | foreground | Reconcile carbon, sulfur and energy ledgers with consistent moisture, stock and blend composition; do not repeat material inputs after converting them to energy. Explain non-closure by measurement or coverage evidence without invented tolerances. |  |
| validate_allocation | joint operations | Check same-period co-products, method selection, prices or physical parameters and all shares; do not duplicate burdens across supplier inputs, internal circulation and site manufacture. | ec-pef-2021 |
| validate_completeness | foreground | Expose unresolved UUIDs and identity, emitted-species, treatment and upstream-coverage gaps. Retain collection requirements where range evidence is insufficient; one case is not an industry range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Gas works supply modelling at compatible product state and volume conditions; input to process or lifecyclemodel projections |
| excluded_use | Complete delivery and combustion life cycle; natural gas extraction; pure hydrogen or chemical synthesis gas; cross-route comparisons without conversion |
| required_metadata | all reference qualifiers; origins and upstream boundaries; flowsheet; allocation; internal transfers and stock; treatment destinations |
| required_quality_disclosure | UUID and range gaps; estimates; monitoring coverage and errors; missing supply chains; excluded infrastructure, delivery and end-use stages |
| update_trigger | material changes in feedstocks, route, supply quality, abatement, metering conditions or allocation market |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | classification identity, cells 17200–17203; original CSV verified, accessed 2026-10-01. |
| iea-gasworks-2008 | official_guidance | OECD/IEA, InterEnerStat: Harmonisation of Definitions of Energy Products and Flows, Products: Coal (2008), PDF pages 17–20. https://iea.blob.core.windows.net/assets/imports/events/39/Coal.pdf | route scope, gas coke and coke oven gas distinction; historical definition supplies no current efficiency, emission factor or quality standard. Accessed 2026-10-01. |
| cbs-town-gas | official_guidance | Statistics Netherlands (CBS), Gas works gas definition. https://www.cbs.nl/en-gb/our-services/methods/definitions/gas-works-gas | representative coal-derived town gas and scope comparison; narrower than IEA multi-route category. Accessed 2026-10-01. |
| ec-pef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, Annex I section 4.5, PDF pages 87–88. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | general multifunctional allocation hierarchy; methodological guidance, not a gas-specific factor or PEF conformance claim. Accessed 2026-10-01. |
