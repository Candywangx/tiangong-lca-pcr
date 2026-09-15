---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.casing-tubing-and-drill-pipe-of-a-kind-used-in-the-drilling-for-oil-or-gas-seamless-of-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Casing, tubing and drill pipe, of a kind used in the drilling for oil or gas, seamless, of steel

## 1. Scope and Applicability

This PCR covers seamless steel casing, tubing and drill pipe manufactured for oil or gas drilling and well operations. It applies to non-alloy and alloy steel grades and to plain-end or finished products when the declared product specification, dimensions, grade, heat treatment, end finish, connection state and supplied components are disclosed.

The foreground boundary starts with received round steel billet or bloom and ends with conforming product at the tube-mill factory gate. Upstream steelmaking and supply of purchased materials, fuels, electricity and water are represented by linked upstream datasets. Welded casing or tubing, pipeline line pipe, hollow drill bars, general-purpose seamless tubes, separately marketed couplings or accessories, installation, use, maintenance and end-of-life are excluded unless explicitly brought into the declared study scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.casing-tubing-and-drill-pipe-of-a-kind-used-in-the-drilling-for-oil-or-gas-seamless-of-steel |
| classification_refs | CPC 3.0: 41282 (exact) |
| covered_products | seamless steel casing; seamless steel tubing; seamless steel drill pipe for oil or gas drilling or well operations |
| excluded_products | welded casing or tubing; oil or gas pipeline line pipe; hollow drill bars; other general-purpose seamless tubes; separately marketed coupling stock and accessories |
| representative_product | one declared seamless steel casing, tubing or drill-pipe product meeting the purchaser's specification |
| production_route | heating of billet or bloom; piercing; elongation; final rolling or sizing; route-dependent heat treatment; straightening; end finishing; inspection and testing |
| market_state | saleable mill-gate product, plain-end or with declared threads, couplings, tool joints, protective treatment and test status |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide seamless steel casing, tubing or drill pipe for oil or gas drilling or well operations. |
| How much | 1 kg of conforming product at the declared factory gate. |
| How well | Meets the declared purchaser specification, dimensions, steel grade, heat treatment, mechanical properties, inspection and test requirements. |
| How long or cycle | One production lot through the declared tube-mill route; service life is outside this factory-gate functional unit. |
| reference_flow_link | Net conforming product output row `ft_reference_product`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Casing, tubing and drill pipe, of a kind used in the drilling for oil or gas, seamless, of steel `955ae8bd-1b86-4080-a5e2-795460a0ebae` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | casing, tubing or drill pipe; applicable product specification and edition; steel grade; outside diameter; wall thickness; length; heat-treatment condition; end finish and connection type; plain-end, coupled or tool-jointed state; coating or surface treatment; inspection and test status; manufacturing site; geography; production period; billet or bloom input state; inclusion of upstream steelmaking; removable packaging exclusion |

When constructing a foreground data package, every required qualifier must be declared in metadata, process notes, the reference-flow comment, product description or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net conforming shipped product mass. Include integral end finishes and attached couplings or tool joints when supplied as part of the declared product; exclude removable transport packaging. |
| `electricity_conversion` | purchased electricity | Energy | MJ | Retain the original meter reading and tariff or meter boundary. When converting kWh to MJ, use exactly 3.6 MJ per kWh and preserve the unrounded source value. |
| `gas_reference_conditions` | natural gas and industrial oxygen | Volume | m3 | Declare temperature, pressure and dry/wet basis for every gas-volume record; do not combine volumes reported at different reference conditions without conversion. |
| `water_makeup_basis` | process and cooling water | Mass | kg | Record fresh or externally supplied makeup crossing the boundary; do not report gross recirculation as water input. Document density if volume is converted to mass. |
| `steel_mass_balance` | steel feed, intermediates, product, scale and scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile declared-grade steel input with conforming product, internal work in progress, mill scale, post-industrial scrap and other measured steel-bearing outputs over the same period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | received round steel billet or steel bloom at the tube-mill gate, with mass, steel grade, dimensions, supplier, production route and upstream dataset reference declared |
| starting_condition_role | purchased semi-finished steel feedstock for seamless tube manufacture |
| product_classification_scope | seamless steel casing, tubing and drill pipe for oil or gas drilling or well operations; not welded pipe or general-purpose seamless tube |
| recursive_input_rule | if a purchased or transferred input already satisfies this PCR product boundary, record it as a separate product input with its supplier dataset and do not reopen its foreground production inside the receiving process |
| upstream_dataset_requirement | attach temporally, geographically and technologically representative datasets for billet or bloom production and every purchased material, fuel, electricity, water and treatment service |
| disclosure | disclose product form, steel grade, feedstock state, piercing/rolling technology, furnace fuels, heat-treatment route, finishing and connection state, water recirculation, waste destinations, upstream steelmaking inclusion and factory gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_tube_mill_gate` | foreground process boundary | Include billet or bloom receipt, heating, piercing, elongation, final rolling or sizing, applicable heat treatment, straightening, end finishing, joining of supplied components, inspection, testing and on-site waste/emission handling through the product factory gate. | `ec-jrc-ferrous-metals-processing-2022`; `api-5ct-11-announcement-2023` |
| `boundary_upstream_supply` | cradle-to-gate inventory | Link upstream datasets for steel feedstock and purchased supplies; do not treat omission of upstream steelmaking or electricity generation as zero burden. | `worldsteel-lci-methodology-2017` |
| `boundary_exclusions` | downstream stages | Exclude distribution after the declared factory gate, well construction, use, maintenance and end-of-life unless the study explicitly extends the boundary and reports those stages separately. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `billet_heating_conditioning` | Billet or bloom heating and conditioning | required |  | foreground feed preparation | kg heated billet or bloom transferred to piercing |
| `piercing_hot_rolling` | Piercing, elongation and hot rolling | required |  | foreground seamless tube forming | kg hollow shell transferred to the next stage |
| `heat_treatment` | Heat treatment and controlled cooling | conditional | include when the declared grade or purchaser specification requires normalizing, quenching, tempering or another separate heat treatment | foreground property development | kg heat-treated tube blank |
| `finishing_testing` | Straightening, end finishing, component joining, inspection and testing | required |  | foreground final product preparation | kg conforming reference product at factory gate |

### Process: Billet or bloom heating and conditioning (`billet_heating_conditioning`)

#### Inputs

##### Product flows

###### Round steel billet input (`bh_steel_billet`)

Record the received round steel billet when it is the piercing feedstock; do not combine it with bloom input.

- Selected flow: Round steel billet of the declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured net billet mass entering the furnace
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Steel bloom input (`bh_steel_bloom`)

Record the received steel bloom only when it is the piercing feedstock; do not combine it with billet input.

- Selected flow: Steel bloom of the declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured net bloom mass entering the furnace
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Natural gas for billet heating (`bh_natural_gas`)

Record gaseous natural gas delivered to the billet-heating furnace when this fuel is consumed.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Fuel oil for billet heating (`bh_fuel_oil`)

Record fuel oil delivered to the billet-heating furnace when this fuel is consumed.

- Selected flow: Fuel Oil `f673469a-a563-4ffc-9960-fefe67090714`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered fuel-oil mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Industrial oxygen for oxy-fuel conditioning (`bh_oxygen`)

Record industrial oxygen only when oxy-fuel scarfing or oxygen-enriched combustion is used.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered industrial-oxygen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Electricity for billet heating and handling (`bh_electricity`)

Record purchased alternating-current electricity used by furnace auxiliaries, charging and handling equipment.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: metered electricity, preserving the original meter unit and conversion record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `worldsteel-lci-methodology-2017`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heated steel billet intermediate (`bh_heated_billet`)

Record the hot billet transferred to piercing when billet feedstock is used.

- Selected flow: Heated steel billet of the declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced hot billet output; zero when bloom feedstock is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Heated steel bloom intermediate (`bh_heated_bloom`)

Record the hot bloom transferred to piercing when bloom feedstock is used.

- Selected flow: Heated steel bloom of the declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced hot bloom output; zero when billet feedstock is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
##### Waste flows

###### Mill scale from heating and conditioning (`bh_mill_scale`)

Record scale physically removed from the reheated stock before or during entry to rolling.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: measured recovered wet or dry mass with moisture basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
##### Elementary flows

###### Fossil carbon dioxide from billet-heating combustion (`bh_co2`)

Record direct fossil carbon dioxide emitted from on-site billet-heating fuel combustion; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculation from metered fuel and documented carbon content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Nitrogen oxides from billet-heating combustion (`bh_nox`)

Record direct nitrogen oxides emitted from billet-heating combustion on the monitored reporting basis.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: measured or regulatorily reported stack emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_billet_heating_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
### Process: Piercing, elongation and hot rolling (`piercing_hot_rolling`)

#### Inputs

##### Product flows

###### Heated steel billet input (`pr_heated_billet`)

Record the hot billet entering the piercing unit when billet feedstock is used.

- Selected flow: Heated steel billet of the declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced hot billet input; zero when bloom feedstock is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_piercing_rolling_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Heated steel bloom input (`pr_heated_bloom`)

Record the hot bloom entering the piercing unit when bloom feedstock is used.

- Selected flow: Heated steel bloom of the declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced hot bloom input; zero when billet feedstock is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_piercing_rolling_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Electricity for piercing and rolling (`pr_electricity`)

Record purchased alternating-current electricity used by piercers, mandrel or plug mills, elongators, sizing mills and auxiliaries.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: submetered electricity or documented allocation from a common meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_piercing_rolling_records`
- Sources: `worldsteel-lci-methodology-2017`

###### Process water for descaling (`pr_process_water`)

Record fresh or externally supplied process water used for high-pressure descaling; record makeup rather than gross recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered process-water makeup with source and recirculation boundary declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_piercing_rolling_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pierced and rolled hollow-shell intermediate (`pr_hollow_shell`)

Record the internal hollow-shell output after piercing, elongation and final sizing or stretch reduction.

- Selected flow: Pierced and elongated seamless steel hollow shell
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced hollow-shell output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_piercing_rolling_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
##### Waste flows

###### Mill scale from hot rolling and descaling (`pr_mill_scale`)

Record mill scale separated during high-pressure-water descaling and hot rolling.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: measured recovered wet or dry mass with moisture basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_piercing_rolling_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Steel-production wastewater from piercing and rolling (`pr_wastewater`)

Record wastewater leaving the process for treatment when descaling or rolling-water circuits discharge.

- Selected flow: Wastewater, steel production, to treatment, to water `b7f34603-aaf6-40e1-a242-08746c85098c`
- Flow property / unit: Mass / kg
- Amount rule: metered or mass-balanced discharge to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_piercing_rolling_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
##### Elementary flows

###### Particulate matter from hot rolling and descaling (`pr_particulate`)

Record direct particulate matter emitted to air from piercing, rolling, descaling or associated capture-system outlets when particle size is not reported separately.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: measured or regulatorily reported air emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_piercing_rolling_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
### Process: Heat treatment and controlled cooling (`heat_treatment`)

#### Inputs

##### Product flows

###### As-rolled hollow-shell input (`ht_hollow_shell`)

Record the internal as-rolled hollow shell entering heat treatment.

- Selected flow: Pierced and elongated seamless steel hollow shell
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced hollow-shell input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Natural gas for heat treatment (`ht_natural_gas`)

Record gaseous natural gas delivered to normalizing, quenching or tempering furnaces when consumed.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Fuel oil for heat treatment (`ht_fuel_oil`)

Record fuel oil delivered to heat-treatment furnaces when consumed.

- Selected flow: Fuel Oil `f673469a-a563-4ffc-9960-fefe67090714`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered fuel-oil mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Electricity for heat treatment (`ht_electricity`)

Record purchased alternating-current electricity used by heat-treatment furnaces, pumps, fans and handling equipment.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: submetered electricity or documented allocation from a common meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `worldsteel-lci-methodology-2017`

###### Cooling-water makeup for quenching and cooling (`ht_cooling_water`)

Record only fresh cooling-water makeup entering quench or accelerated-cooling circuits, not gross recirculated flow.

- Selected flow: Cooling-water makeup
- Flow property / unit: Mass / kg
- Amount rule: metered makeup-water mass with source, blowdown and recirculation boundary declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated seamless tube blank (`ht_treated_tube`)

Record the internal tube blank after the specified normalizing, quenching, tempering or other declared heat-treatment route.

- Selected flow: Heat-treated seamless steel tube blank
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced treated-tube output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from heat-treatment combustion (`ht_co2`)

Record direct fossil carbon dioxide emitted from on-site heat-treatment fuel combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculation from metered fuel and documented carbon content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Nitrogen oxides from heat-treatment combustion (`ht_nox`)

Record direct nitrogen oxides emitted from heat-treatment combustion on the monitored reporting basis.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: measured or regulatorily reported stack emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
### Process: Straightening, end finishing, component joining, inspection and testing (`finishing_testing`)

#### Inputs

##### Product flows

###### Heat-treated tube blank input (`ft_treated_tube`)

Record the heat-treated internal tube blank entering straightening, end finishing, inspection and testing.

- Selected flow: Heat-treated seamless steel tube blank
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced heat-treated tube-blank input; zero for the as-rolled route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### As-rolled tube blank input (`ft_as_rolled_tube`)

Record the internal as-rolled tube blank entering straightening, end finishing, inspection and testing when the declared route bypasses heat treatment.

- Selected flow: As-rolled seamless steel tube blank
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced as-rolled tube-blank input; zero when heat treatment is applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`

###### Electricity for finishing and testing (`ft_electricity`)

Record purchased alternating-current electricity used by straightening, machining, joining, inspection, testing and handling equipment.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: submetered electricity or documented allocation from a common meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `worldsteel-lci-methodology-2017`

###### Process water for hydrostatic testing (`ft_process_water`)

Record fresh or externally supplied process water used for hydrostatic testing and final rinsing; record makeup rather than recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered process-water makeup with test-water reuse boundary declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`ft_sodium_hydroxide`)

Record sodium hydroxide only when an alkaline-cleaning bath is used before inspection, coating or shipment.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: supplier-recorded active sodium-hydroxide mass entering the bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources:

###### Cutting fluid for end finishing and threading (`ft_cutting_fluid`)

Record cutting fluid consumed when pipe ends, threads or connection surfaces are machined.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: makeup or net consumed cutting-fluid mass, excluding recirculated stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources:

###### Steel drill-pipe tool joint (`ft_tool_joint`)

Record separately manufactured steel tool joints only when they are joined to drill pipe within the declared product gate.

- Selected flow: Steel drill-pipe tool joint
- Flow property / unit: Mass / kg
- Amount rule: measured mass of tool joints incorporated into shipped drill pipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `samr-gbt-29166-2021`

###### Steel casing or tubing coupling (`ft_coupling`)

Record separately manufactured steel couplings only when supplied as part of the declared casing or tubing reference product.

- Selected flow: Steel coupling for oil-well casing or tubing
- Flow property / unit: Mass / kg
- Amount rule: measured mass of couplings incorporated in the shipped reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `api-5ct-11-announcement-2023`; `samr-gbt-19830-2023`

###### Rust-preventive coating for finished pipe (`ft_rust_preventive_coating`)

Record the specific rust-preventive coating only when applied within the declared product gate.

- Selected flow: Rust-preventive coating for steel pipe
- Flow property / unit: Mass / kg
- Amount rule: supplier-recorded coating mass minus measured returned or recovered coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `api-5ct-11-announcement-2023`

###### Thread compound for finished connections (`ft_thread_compound`)

Record thread compound only when it is applied to finished threaded connections before shipment.

- Selected flow: Thread compound for casing, tubing or drill pipe
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-recorded net thread-compound mass applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `api-5ct-11-announcement-2023`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference seamless oil-country tubular product (`ft_reference_product`)

Record the net mass of conforming casing, tubing or drill pipe leaving the declared factory gate with product form and end finish identified.

- Selected flow: Casing, tubing and drill pipe, of a kind used in the drilling for oil or gas, seamless, of steel `955ae8bd-1b86-4080-a5e2-795460a0ebae`
- Flow property / unit: Mass / kg
- Amount rule: measured net shipped product mass, excluding removable transport packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `un-cpc-3-0-structure-2025`; `api-5ct-11-announcement-2023`
##### Waste flows

###### Post-industrial steel scrap from finishing (`ft_steel_scrap`)

Record cut ends, machining swarf and rejected steel pieces leaving the process as post-industrial scrap.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap mass with destination and moisture or oil contamination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `worldsteel-lci-methodology-2017`

###### Steel-production wastewater from finishing and testing (`ft_wastewater`)

Record wastewater leaving finishing, cleaning or hydrostatic-testing circuits for treatment.

- Selected flow: Wastewater, steel production, to treatment, to water `b7f34603-aaf6-40e1-a242-08746c85098c`
- Flow property / unit: Mass / kg
- Amount rule: metered or mass-balanced discharge to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product at the declared factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_testing_records`
- Sources: `ec-jrc-ferrous-metals-processing-2022`
##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared tube-mill processes | Avoid allocation by submetering or time-, mass- or batch-resolving each product family and process wherever technically possible. | `worldsteel-lci-methodology-2017` |
| `allocation_shared_operations` | unavoidable shared utilities or treatment | When subdivision is not possible, allocate only the shared quantity using a documented physical driver that reflects causation, such as metered operating time, processed mass, furnace charge mass or wastewater volume; disclose the driver and sensitivity. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_intermediates` | heated billet, hollow shell and tube blank | Internal intermediates carry measured upstream burdens forward without economic allocation and must not be counted as co-products. |  |
| `allocation_scrap` | post-industrial steel scrap and mill scale | Report gross scrap and mill-scale outputs and destinations separately. Do not embed an avoided-burden credit in the foreground inventory; if recycling benefits are modelled, report the selected recycling method and result separately and consistently with scrap inputs. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_billet_heating_records` | `billet_heating_conditioning` | every listed input and output | weighbridge, production log, utility meter, fuel invoice and stack-monitoring record | timestamp; lot; product form; grade; input/output mass; meter start/end; gas conditions; fuel properties; emission basis; downtime | reconcile lot records with calibrated meters and invoices | kg; m3; MJ | each lot and monthly reconciliation | full representative reporting period covering normal operating variation, or a shorter campaign with justification | all equipment serving the declared product at the site | sum valid records, subtract documented returns, allocate shared meters only with disclosed physical driver, then normalize to conforming output | calibration certificates, invoices, batch genealogy, meter coverage and reconciliation residual |
| `cp_piercing_rolling_records` | `piercing_hot_rolling` | every listed input and output | production log, electricity meter, water meter, waste ticket and emission-monitoring record | timestamp; lot; intermediate mass; electricity; water makeup; recirculation; scale mass and moisture; wastewater mass and destination; particulate result | link records by lot and operating period and reconcile water and steel balances | kg; MJ | each lot and monthly reconciliation | full representative reporting period covering normal operating variation, or a shorter campaign with justification | piercing, elongation, rolling, descaling and associated treatment at the site | aggregate only records with the same boundary and normalize to hollow-shell and reference-product mass | meter calibration, scale tickets, laboratory reports, discharge records and balance closure |
| `cp_heat_treatment_records` | `heat_treatment` | every listed input and output | route log, utility meter, fuel invoice, water meter and stack-monitoring record | timestamp; lot; grade; heat-treatment cycle; input/output mass; gas conditions; fuel mass; electricity; cooling-water makeup; emissions | link route and utility records to treated lots and separate bypassed as-rolled lots | kg; m3; MJ | each lot and monthly reconciliation | full representative reporting period covering normal operating variation, or a shorter campaign with justification | heat-treatment and controlled-cooling equipment at the site | aggregate by declared route and normalize to treated output and final reference product | cycle records, calibration, invoices, meter coverage and emission-monitoring evidence |
| `cp_finishing_testing_records` | `finishing_testing` | every listed input and output | production order, material issue, utility meter, test record, weighbridge and waste/discharge record | lot; product form; specification; dimensions; grade; end finish; component masses; consumable issues/returns; water; electricity; test status; product mass; scrap; wastewater | maintain lot genealogy from tube blank through conforming shipped product and rejected outputs | kg; MJ | each lot and monthly reconciliation | full representative reporting period covering normal operating variation, or a shorter campaign with justification | all finishing, joining, inspection, testing and on-site treatment operations included at the gate | sum conforming product only; separate casing, tubing and drill pipe and connection state before any aggregation | material certificates, inspection/test reports, calibration, inventory issues, waste tickets and shipment mass |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory row | normalized amount = valid process-period exchange divided by conforming reference-product mass from the same reconciled period | exchange quantity; `ft_reference_product` mass | exchange per 1 kg reference product |  |
| `calc_electricity_mj` | electricity rows | electricity in MJ = metered electricity in kWh multiplied by 3.6 MJ/kWh | unrounded kWh reading | MJ electricity |  |
| `calc_combustion_co2` | `bh_co2`; `ht_co2` when direct measurement is unavailable | calculate fossil carbon dioxide from metered fuel quantity, documented fuel carbon content, oxidation basis and unit conversions; retain every input and do not substitute upstream electricity emissions | fuel quantity; carbon content; oxidation basis; conversion factors | kg fossil carbon dioxide |  |
| `calc_steel_balance` | steel-bearing rows | steel balance residual = declared steel feed minus conforming product minus measured scrap, scale and inventory change on a consistent dry-mass basis | steel feed; product; scrap; scale; work-in-progress change | kg unexplained steel-balance residual |  |
| `calc_water_balance` | process and cooling water | water discharge and loss reconciliation uses makeup plus transferred water minus discharge, evaporation, retained water and inventory change; gross recirculation is excluded from input | makeup; discharge; evaporation estimate; retained water; inventory change | kg water-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain product form, specification and edition, grade, dimensions, length, heat treatment, end finish, connection state, coating, inspection/test status and lot genealogy. | mill test certificate, production order and shipment record |
| `dq_measurement` | measured exchanges | Use calibrated meters or scales; disclose meter coverage, estimated shares, reference gas conditions, water conversion density and shared-meter allocation. | calibration certificates, meter map and reconciliation workbook |
| `dq_temporal` | foreground dataset | Use a full representative reporting period covering normal operating variation; justify shorter campaigns, abnormal shutdown exclusions and production-mix differences. | dated production schedule and completeness report |
| `dq_completeness` | all listed rows | Screen every atomic row for applicability and record measured zero only with evidence; identify additional site-specific materials, wastes and emissions rather than hiding them in an umbrella flow. | signed applicability review, material ledger and permit inventory |
| `dq_source_match` | upstream datasets | Match steel route and grade, fuel delivery state, electricity geography/voltage, water source and waste-treatment destination as closely as available and disclose proxies. | supplier data, dataset metadata and proxy register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product and reference flow | Confirm that the output is seamless steel casing, tubing or drill pipe for oil or gas drilling or well operations and that all required qualifiers are present; reject welded pipe, line pipe and general-purpose tube substitutions. | `un-cpc-3-0-structure-2025`; `api-5ct-11-announcement-2023` |
| `validate_reference_mass` | normalization | Confirm that every normalized exchange uses the same net conforming product mass and factory gate, with supplied couplings or tool joints treated consistently. | `api-5ct-11-announcement-2023` |
| `validate_process_route` | process map | Confirm heating, piercing, elongation and final rolling are represented; confirm heat treatment, supplied couplings/tool joints, cleaning, coating and thread compound are included exactly when the declared route uses them. | `ec-jrc-ferrous-metals-processing-2022`; `samr-gbt-29166-2021` |
| `validate_balances` | steel and water balances | Recalculate steel and water balances from unrounded records, investigate residuals and disclose unresolved loss or inventory-change terms. |  |
| `validate_energy_and_emissions` | fuel, electricity and direct emissions | Reconcile purchased energy to meters and invoices, keep direct combustion emissions separate from upstream supply emissions and confirm gas reference conditions. | `worldsteel-lci-methodology-2017`; `ec-jrc-ferrous-metals-processing-2022` |
| `validate_waste_and_recycling` | mill scale, scrap and wastewater | Confirm measured quantities, moisture or contamination basis, treatment or recycling destination and absence of embedded avoided-burden credits in foreground amounts. | `worldsteel-lci-methodology-2017` |
| `validate_unresolved_uuid_rows` | UUID-empty inventory rows | Keep the selected flow UUID empty until an exact state-100 Tiangong identity is directly verified; do not substitute a broader, duplicate-ambiguous or differently classified candidate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | cradle-to-gate modelling of seamless steel casing, tubing or drill pipe when product, route, geography, period and gate qualifiers match |
| excluded_use | welded pipe; line pipe; general-purpose tube; installation, use or end-of-life; product comparisons with mismatched specifications, routes or gates |
| required_metadata | canonical PCR id; product form; specification and edition; grade; dimensions; length; heat treatment; end finish; connection and supplied-component state; coating; inspection/test status; site; geography; period; billet/bloom state; steelmaking route; furnace fuels; electricity supply; water boundary; waste destinations; allocation; data-quality indicators |
| required_quality_disclosure | foreground coverage; primary-data share; meter and scale coverage; allocation drivers; balance residuals; upstream dataset match; proxy uses; unresolved UUID rows; uncertainty and exclusions |
| update_trigger | material change in product specification, steel grade mix, feedstock route, piercing/rolling technology, furnace fuel, heat treatment, finishing or connection state, site, electricity supply, water circuit, waste route, allocation method or data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | exact CPC 41282 identity and exclusion of welded and other seamless-pipe subclasses |
| `ec-jrc-ferrous-metals-processing-2022` | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf | seamless-tube feed state, heating, piercing, elongation, rolling, heat treatment, furnace fuel and descaling process decomposition |
| `worldsteel-lci-methodology-2017` | method_factor | https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 | cradle-to-gate steel inventory boundary, upstream coverage and consistent scrap/recycling treatment |
| `api-5ct-11-announcement-2023` | standard | https://www.api.org/products-and-services/standards/important-standards-announcements/spec5ct-tradepress | casing and tubing scope and required dimensions, masses, wall thicknesses, grades, end finishes, inspection and test qualifiers |
| `samr-gbt-19830-2023` | standard | https://std.samr.gov.cn/search/stdPage?q=GB%2FT19830 | official Chinese casing/tubing terminology and steel-pipe product identity |
| `samr-gbt-29166-2021` | standard | https://std.samr.gov.cn/gb/search/gbDetailed?id=DL89Sc%2BU1R0%3D&mode=p | official Chinese steel drill-pipe terminology and drill-pipe product scope |
