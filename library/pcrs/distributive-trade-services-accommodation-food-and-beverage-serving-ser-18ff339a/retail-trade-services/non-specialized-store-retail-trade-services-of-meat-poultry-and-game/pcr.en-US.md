---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-meat-poultry-and-game
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# In-store retail service for sealed vacuum-packed chilled boneless pork tenderloin

## 1. Scope and Applicability

This candidate methodology specifies the incremental retail service for one homogeneous chilled vacuum-packed boneless pork-tenderloin configuration in a non-specialized store. It preserves unopened packs from the receiving door through final qualified customer carryout and final handling of failed goods. Species/cut, sealed net-content basis, refrigeration configuration and retrospective physical fate are essential comparability conditions; it is a narrower subset of CPC 62123, not guidance for all meat products. The design choices below use cited qualitative methods plus explicit foreground protocols; no complete-standard conformity is claimed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-meat-poultry-and-game |
| classification_refs | CPC 3.0 62123: Non-specialized store retail trade services, of meat, poultry and game; narrower proposed relationship; official note includes goods of group 211. |
| covered_products | Incremental in-store retail service for one declared SKU of intact vacuum PA/PE packed raw chilled boneless pork tenderloin, customer carryout. |
| excluded_products | Other species/cuts; minced, cured or cooked meat; bone-in meat; open counter meat; absorbent-pad packs; frozen/thawed goods; slaughter/primary chilling; repacking; ice; retailer bags; delivery. |
| representative_product | In-store retail service for sealed vacuum-packed chilled boneless pork tenderloin |
| production_route | Receipt of already chilled sealed packs; R290 closed-cabinet hold/display; electric checkout and customer carryout; fate and hygiene; complete asset accounting. |
| market_state | Raw chilled never-frozen boneless pork tenderloin, intact vacuum PA/PE pouch; net wet contents include retained purge and exclude dry package/outer carton. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | In-store retail service for sealed vacuum-packed chilled boneless pork tenderloin |
| How much | 1 kg of finally qualified accepted net wet merchandise contents, including purge retained in the sealed pouch. |
| How well | Declared SKU, seal integrity and measured time-temperature meet declared supplier/local acceptance specification; no numeric threshold is supplied here. |
| How long or cycle | One prospectively fixed contiguous site/SKU/configuration reporting pool, through disclosed return/fate closure and later signed corrections. |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | In-store retail service for sealed vacuum-packed chilled boneless pork tenderloin |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (service throughput basis, not merchandise identity) |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site; non-specialized-store channel; SKU/species/cut; chilled never-frozen state; PA/PE pouch construction and dry tare; net contents including retained purge; supplier and receiving gate; acceptance/time-temperature specification and history; reporting/return closure dates; R290/electric configuration; background ownership; beneficiary/allocation/asset ledger; fate recipients |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net | service_output; failed_goods_background | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure receipt and final acceptance separately on the same net wet-content definition including retained purge, calibrated gross minus dry pack tare. Their numerical kg are not assumed equal: use unique-pack original-source responsibility mapping for receipt equivalents. Never count package or added ice as pork. |
| electric_energy | cold_power; store_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use 3.6 MJ/kWh once on measured attributed electricity; the product flow does not select a generation mix/provider. |
| physical_carriers | tap_water; alkaline_cleaner; hypochlorite; cleaning_effluent; condensate; r290_supply; r290_recovery; propane_air; water_vapour_air; packed_pork_waste; carton_waste; building_asset; building_terminal; hvac_asset; hvac_terminal; cabinet_asset; cabinet_terminal; shelf_asset; shelf_terminal; pos_asset; pos_terminal; cart_asset; cart_terminal; compressor_replacement; removed_compressor; hydraulic_oil; waste_oil; compressor_oil_supply; used_compressor_oil | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Each is the named complete physical carrier; use measured mass or measured applicable density at recorded temperature. Preserve mixture/formulation and terminal device boundaries. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already chilled intact vacuum-packed pork tenderloin physically received at the retail door. |
| starting_condition_role | Declared incremental retail gate; upstream goods remain traceable for loss coupling. |
| product_classification_scope | Narrower service subset of CPC 3.0 62123; goods group 211 context only. |
| recursive_input_rule | Do not recurse service into itself for internal moves or resales. Transfer linked packs with original background ownership. |
| upstream_dataset_requirement | Match original receiving-gate packed pork background with actual primary/transit packaging and inbound cold transport; verify asset, utility and waste-treatment provider boundaries. |
| disclosure | Incremental service excludes finally successful goods production; full product users add B_s/Q original-gate kg per actual accepted kg, while B_f/Q failed/lost original-gate background is already included here; B_s is not assumed equal to Q. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_route | all | Only one prospectively declared SKU configuration: chilled never-frozen raw boneless pork tenderloin in intact vacuum PA/PE pouches, no retailer repacking, cutting, cooking, added ice, carrier bags or delivery. Record species, cut, supplier, pouch construction/tare, pack size, temperature acceptance specification and actual time-temperature history. A failed specification is not qualified service. Changed species, frozen route, open meat, absorbent pads or added packaging require a separately authored and checked configuration before use. | un-cpc62123; fao-cold02; fao-cold04 |
| gates | all | Foreground starts at physical receipt of already chilled packed goods at the store door and ends at qualified customer carryout or documented terminal fate. Cover receipt, storage/display, checkout, refusals/returns, cleaning, utility provision, refrigerant and waste handling plus all six named asset classes. Include shared staff sanitation, office and closed/idle/failure periods. Customer travel/use is excluded and disclosed; no retailer vehicle route occurs in this configuration. | jrc-retail2013; ghg-product2011 |
| goods_coupling | failed_goods_background | Keep the original-gate responsibility of finally successful merchandise outside this incremental service, including its original primary/transit packaging and inbound transport. Downstream full product aggregation adds B_s/Q original-gate kg per actual finally accepted kg Q, never a default 1 kg/kg. This service includes B_f/Q only; open B_open and evidenced successor B_t retain their traceable owners and cannot be dropped. Assign each whole original pack to one exclusive final responsibility class; failed-pack descendants share that one parent background and do not receive separate original manufacture. Receipt-equivalent closure is independent of physical endpoint mass. Supplier returns retain original ownership until evidenced successor responsibility, including reverse-route responsibility. External unqualified retention F has recipient, physical state, destination and original-background owner; it is not automatic retailer waste. | ghg-product2011 |
| no_double_carriers | all | All actual exchanges need presence/absence evidence. R290 is the sole specified refrigeration species; electric resistance/ventilation HVAC without refrigerant circuit, no combustion/ice or transport is an eligibility condition, not a zero assumption. An additional actual chemical, repair part, refrigerant, transport leg, waste destination or direct external species requires a named atomic bilingual card, process protocol, amount calculation and provider exclusion audit before completeness. Unknown presence/quantity/provider scope blocks completeness. | jrc-retail2013 |
| provider_scope | all | Every supply, treatment and asset provider must match state, geography, reference quantity and gate. Treatment includes verified actual pickup/haul and terminal processing; utilities, operation, maintenance, replacement and end-of-life are excluded from manufacture providers unless explicitly integrated and removed from foreground once. Provider empty-haul coverage requires observed vehicle-distance evidence even with zero tonne-km. Unknown coverage is unresolved. | ghg-product2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| holding | Cold holding and display | required | Declared configuration; each actual conditional carrier needs presence/absence evidence. | Incremental service contribution | 1 kg finally accepted net contents |
| retail | Receipt coordination, checkout and acceptance | required | Declared configuration; each actual conditional carrier needs presence/absence evidence. | Incremental service contribution | 1 kg finally accepted net contents |
| cleaning | Hygiene and liquid handling | required | Declared configuration; each actual conditional carrier needs presence/absence evidence. | Incremental service contribution | 1 kg finally accepted net contents |
| residual | Goods fate and loss-background responsibility | required | Declared configuration; each actual conditional carrier needs presence/absence evidence. | Incremental service contribution | 1 kg finally accepted net contents |
| assets | Complete physical assets, maintenance and terminal carriers | required | Declared configuration; each actual conditional carrier needs presence/absence evidence. | Incremental service contribution | 1 kg finally accepted net contents |

### Process: Cold holding and display (`holding`)

#### Inputs

##### Product flows

###### Alternating current (`cold_power`)

3.6 * attributed cold-circuit kWh / Q MJ; includes defrost, fans, standby and failures.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * attributed cold-circuit kWh / Q MJ; includes defrost, fans, standby and failures.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cold_meter
- Sources: jrc-retail2013; ghg-product2011; fao-cold04

###### Refrigerant-grade propane (R290), liquid, contained (`r290_supply`)

Initial charge * cabinet lifetime responsibility plus event-attributed top-ups, then / Q kg; dry cabinet provider excludes this charge; track all charged propane to loss/recovery/stock.

- Selected flow: Refrigerant-grade propane (R290), liquid, contained
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Initial charge * cabinet lifetime responsibility plus event-attributed top-ups, then / Q kg; dry cabinet provider excludes this charge; track all charged propane to loss/recovery/stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: refrigerant
- Sources: jrc-retail2013; ghg-product2011; fao-cold04

#### Outputs

##### Waste flows

###### Recovered propane refrigerant, contained, for off-site recovery (`r290_recovery`)

Actual contained removed propane sent out * the cabinet lifetime responsibility f_cabinet / Q kg at retirement; during-life service recovery uses event-specific beneficiaries instead, never both; one contained-transfer term only.

- Selected flow: Recovered propane refrigerant, contained, for off-site recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual contained removed propane sent out * the cabinet lifetime responsibility f_cabinet / Q kg at retirement; during-life service recovery uses event-specific beneficiaries instead, never both; one contained-transfer term only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: refrigerant
- Sources: jrc-retail2013; ghg-product2011; fao-cold04

###### Cold-cabinet condensate and defrost water, liquid, to sewer treatment (`condensate`)

Actual whole collected liquid carrier mass attributed / Q kg; shared drain portions are disjoint from cleaning_effluent.

- Selected flow: Cold-cabinet condensate and defrost water, liquid, to sewer treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole collected liquid carrier mass attributed / Q kg; shared drain portions are disjoint from cleaning_effluent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: condensate_meter
- Sources: jrc-retail2013; ghg-product2011; fao-cold04

##### Elementary flows

###### Propane, gas, to external air (`propane_air`)

Source-isolated positive exterior propane E_j for the actual cabinet, then attributed across this cabinet beneficiaries once and / Q kg. Whole-room propane flux is an independent closure check and cannot substitute for the target source.

- Selected flow: propane `fe0acd60-3ddc-11dd-aae9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Source-isolated positive exterior propane E_j for the actual cabinet, then attributed across this cabinet beneficiaries once and / Q kg. Whole-room propane flux is an independent closure check and cannot substitute for the target source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: refrigerant
- Sources: jrc-retail2013; ghg-product2011; fao-cold04

### Process: Receipt coordination, checkout and acceptance (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`store_power`)

3.6 * attributed disjoint store kWh / Q MJ; includes lighting, POS and HVAC operation.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * attributed disjoint store kWh / Q MJ; includes lighting, POS and HVAC operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: store_meter
- Sources: jrc-retail2013; ghg-product2011

#### Outputs

##### Product flows

###### In-store retail service for sealed vacuum-packed chilled boneless pork tenderloin (`service_output`)

Q / Q = 1 kg of finally qualified accepted merchandise throughput; this is service quantity, not pork production.

- Selected flow: In-store retail service for sealed vacuum-packed chilled boneless pork tenderloin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: sale_ledger
- Sources: jrc-retail2013; ghg-product2011

##### Elementary flows

###### Water vapour, gas, net service contribution to external air (`water_vapour_air`)

Measured positive net exterior service-attributable water species flux integrated over actual intervals / Q kg; reconcile room stock, imported moisture and captured liquid; never use total condensate as meat evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured positive net exterior service-attributable water species flux integrated over actual intervals / Q kg; reconcile room stock, imported moisture and captured liquid; never use total condensate as meat evaporation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: store_air
- Sources: jrc-retail2013; ghg-product2011

### Process: Hygiene and liquid handling (`cleaning`)

#### Inputs

##### Product flows

###### Potable tap water, liquid, at retail meter (`tap_water`)

V_import * measured applicable rho_water * cleaning attribution / Q kg; meter already excludes internal reuse.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_import * measured applicable rho_water * cleaning attribution / Q kg; meter already excludes internal reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: hygiene
- Sources: jrc-retail2013; ghg-product2011

###### Sodium hydroxide cleaning solution, liquid, supplier formulation (`alkaline_cleaner`)

Actual formulated solution consumed / Q kg after attribution; preserve measured concentration; do not report active NaOH mass as solution mass.

- Selected flow: Sodium hydroxide cleaning solution, liquid, supplier formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual formulated solution consumed / Q kg after attribution; preserve measured concentration; do not report active NaOH mass as solution mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: hygiene
- Sources: jrc-retail2013; ghg-product2011

###### Sodium hypochlorite disinfecting solution, liquid, supplier formulation (`hypochlorite`)

Actual formulated solution consumed / Q kg after attribution; dilution water belongs only to tap_water.

- Selected flow: Sodium hypochlorite disinfecting solution, liquid, supplier formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual formulated solution consumed / Q kg after attribution; dilution water belongs only to tap_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: hygiene
- Sources: jrc-retail2013; ghg-product2011

#### Outputs

##### Waste flows

###### Retail cleaning effluent, whole liquid carrier, to sewer treatment (`cleaning_effluent`)

V_discharge * measured rho_effluent * attribution / Q kg; includes measured dissolved cleaner and purge; exclude separately routed condensate.

- Selected flow: Retail cleaning effluent, whole liquid carrier, to sewer treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_discharge * measured rho_effluent * attribution / Q kg; includes measured dissolved cleaner and purge; exclude separately routed condensate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: hygiene
- Sources: jrc-retail2013; ghg-product2011

### Process: Goods fate and loss-background responsibility (`residual`)

#### Inputs

##### Product flows

###### Sealed vacuum PA/PE packed chilled boneless pork tenderloin, at original receiving gate (`failed_goods_background`)

B_f / Q kg of original-receiving-gate equivalent net contents, resolved by unique-pack original-source responsibility mapping; never substitute terminal wet loss mass or full wastewater/condensate mass. Packed original-gate provider includes actual primary/transit packaging and inbound transport exactly once.

- Selected flow: Sealed vacuum PA/PE packed chilled boneless pork tenderloin, at original receiving gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_f / Q kg of original-receiving-gate equivalent net contents, resolved by unique-pack original-source responsibility mapping; never substitute terminal wet loss mass or full wastewater/condensate mass. Packed original-gate provider includes actual primary/transit packaging and inbound transport exactly once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: fate_ledger
- Sources: jrc-retail2013; ghg-product2011

#### Outputs

##### Waste flows

###### Discarded sealed vacuum-packed chilled pork tenderloin, whole PA/PE pouch and contents, for treatment (`packed_pork_waste`)

Actual whole discarded pack mass / Q kg after attribution; no separate pouch waste card for the same pack; treatment provider covers actual mixed carrier.

- Selected flow: Discarded sealed vacuum-packed chilled pork tenderloin, whole PA/PE pouch and contents, for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole discarded pack mass / Q kg after attribution; no separate pouch waste card for the same pack; treatment provider covers actual mixed carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: fate_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Discarded corrugated fibreboard transit carton, measured moisture state, for recycling (`carton_waste`)

Actual discarded carton mass / Q kg after attribution; primary pouch is excluded; original carton manufacturing ownership follows calc_goods ledger.

- Selected flow: Discarded corrugated fibreboard transit carton, measured moisture state, for recycling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual discarded carton mass / Q kg after attribution; primary pouch is excluded; original carton manufacturing ownership follows the original-gate goods ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: fate_ledger
- Sources: jrc-retail2013; ghg-product2011

### Process: Complete physical assets, maintenance and terminal carriers (`assets`)

#### Inputs

##### Product flows

###### Retail building shell and fixed wiring/plumbing/lighting, complete installation (`building_asset`)

Measured complete installed physical mass m_building * f_building / Q kg under calc_asset; one matching manufacture/installation provider; no constituent duplication.

- Selected flow: Retail building shell and fixed wiring/plumbing/lighting, complete installation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete installed physical mass m_building * f_building / Q kg under the asset-exposure equation; one matching manufacture/installation provider; no constituent duplication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Electric resistance heating and mechanical ventilation unit, complete installed device without refrigerant circuit (`hvac_asset`)

Measured complete installed physical mass m_hvac * f_hvac / Q kg under calc_asset; one matching manufacture/installation provider; no constituent duplication.

- Selected flow: Electric resistance heating and mechanical ventilation unit, complete installed device without refrigerant circuit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete installed physical mass m_hvac * f_hvac / Q kg under the asset-exposure equation; one matching manufacture/installation provider; no constituent duplication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### R290 closed refrigerated display cabinet, complete installed dry device without free refrigerant charge (`cabinet_asset`)

Measured complete installed physical mass m_cabinet * f_cabinet / Q kg under calc_asset; one matching manufacture/installation provider; no constituent duplication.

- Selected flow: R290 closed refrigerated display cabinet, complete installed dry device without free refrigerant charge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete installed physical mass m_cabinet * f_cabinet / Q kg under the asset-exposure equation; one matching manufacture/installation provider; no constituent duplication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Steel retail shelving unit, complete installed unit (`shelf_asset`)

Measured complete installed physical mass m_shelf * f_shelf / Q kg under calc_asset; one matching manufacture/installation provider; no constituent duplication.

- Selected flow: Steel retail shelving unit, complete installed unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete installed physical mass m_shelf * f_shelf / Q kg under the asset-exposure equation; one matching manufacture/installation provider; no constituent duplication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Electronic point-of-sale terminal, complete device (`pos_asset`)

Measured complete installed physical mass m_pos * f_pos / Q kg under calc_asset; one matching manufacture/installation provider; no constituent duplication.

- Selected flow: Electronic point-of-sale terminal, complete device
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete installed physical mass m_pos * f_pos / Q kg under the asset-exposure equation; one matching manufacture/installation provider; no constituent duplication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Manual hydraulic pallet truck, complete device (`cart_asset`)

Measured complete installed physical mass m_cart * f_cart / Q kg under calc_asset; one matching manufacture/installation provider; no constituent duplication.

- Selected flow: Manual hydraulic pallet truck, complete device
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete installed physical mass m_cart * f_cart / Q kg under the asset-exposure equation; one matching manufacture/installation provider; no constituent duplication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Replacement R290 hermetic compressor, complete device without refrigerant charge (`compressor_replacement`)

Actual complete replacement compressor mass including factory-sealed mineral lubricating oil but excluding R290 charge, event attribution / Q kg. Factory oil manufacture is inside this complete provider once; additional actual oil additions are compressor_oil_supply only.

- Selected flow: Replacement R290 hermetic compressor, complete device without refrigerant charge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual complete replacement compressor mass including factory-sealed mineral lubricating oil but excluding R290 charge, event attribution / Q kg. Factory oil manufacture is inside this complete provider once; additional actual oil additions are compressor_oil_supply only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: maintenance
- Sources: jrc-retail2013; ghg-product2011

###### Mineral hydraulic oil, liquid, for manual pallet truck (`hydraulic_oil`)

Actual mineral hydraulic oil added after pallet-truck commissioning, event-specific attribution / Q kg; initial factory fill is already in cart_asset provider and is not added here.

- Selected flow: Mineral hydraulic oil, liquid, for manual pallet truck
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual mineral hydraulic oil added after pallet-truck commissioning, event-specific attribution / Q kg; initial factory fill is already in cart_asset provider and is not added here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: maintenance
- Sources: jrc-retail2013; ghg-product2011

###### Mineral refrigeration compressor lubricating oil, liquid, manufacturer-specified R290 grade (`compressor_oil_supply`)

Actual additional compressor mineral oil added by service event, attributable / Q kg; excludes factory-sealed oil already in complete cabinet/replacement compressor; manufacturer grade and presence evidence required.

- Selected flow: Mineral refrigeration compressor lubricating oil, liquid, manufacturer-specified R290 grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual additional compressor mineral oil added by service event, attributable / Q kg; excludes factory-sealed oil already in complete cabinet/replacement compressor; manufacturer grade and presence evidence required.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: maintenance
- Sources: jrc-retail2013; ghg-product2011

#### Outputs

##### Waste flows

###### Decommissioned retail building shell and fixed wiring/plumbing/lighting, complete installation, whole terminal carrier for treatment (`building_terminal`)

Actual whole terminal carrier mass w_building * f_building / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.

- Selected flow: Decommissioned retail building shell and fixed wiring/plumbing/lighting, complete installation, whole terminal carrier for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole terminal carrier mass w_building * f_building / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Decommissioned electric resistance heating and mechanical ventilation unit, complete installed device without refrigerant circuit, whole terminal carrier for treatment (`hvac_terminal`)

Actual whole terminal carrier mass w_hvac * f_hvac / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.

- Selected flow: Decommissioned electric resistance heating and mechanical ventilation unit, complete installed device without refrigerant circuit, whole terminal carrier for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole terminal carrier mass w_hvac * f_hvac / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Decommissioned r290 closed refrigerated display cabinet, complete installed dry device without free refrigerant charge, whole terminal carrier for treatment (`cabinet_terminal`)

Actual whole terminal carrier mass w_cabinet * f_cabinet / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.

- Selected flow: Decommissioned r290 closed refrigerated display cabinet, complete installed dry device without free refrigerant charge, whole terminal carrier for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole terminal carrier mass w_cabinet * f_cabinet / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Decommissioned steel retail shelving unit, complete installed unit, whole terminal carrier for treatment (`shelf_terminal`)

Actual whole terminal carrier mass w_shelf * f_shelf / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.

- Selected flow: Decommissioned steel retail shelving unit, complete installed unit, whole terminal carrier for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole terminal carrier mass w_shelf * f_shelf / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Decommissioned electronic point-of-sale terminal, complete device, whole terminal carrier for treatment (`pos_terminal`)

Actual whole terminal carrier mass w_pos * f_pos / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.

- Selected flow: Decommissioned electronic point-of-sale terminal, complete device, whole terminal carrier for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole terminal carrier mass w_pos * f_pos / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Decommissioned manual hydraulic pallet truck, complete device, whole terminal carrier for treatment (`cart_terminal`)

Actual whole terminal carrier mass w_cart * f_cart / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.

- Selected flow: Decommissioned manual hydraulic pallet truck, complete device, whole terminal carrier for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole terminal carrier mass w_cart * f_cart / Q kg; direct net weighing OR component reconstruction, never both; no second manufacture fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: asset_ledger
- Sources: jrc-retail2013; ghg-product2011

###### Removed hermetic compressor, R290 evacuated, for treatment (`removed_compressor`)

Actual complete removed compressor with R290 evacuated, attributed / Q kg; measured device mass includes all lubricating oil still sealed at actual handoff. If oil is physically drained, direct measured remaining device mass already excludes that measured oil; report separated oil only in used_compressor_oil, never pallet-truck waste_oil. Binding/provider must match the measured retained-oil state.

- Selected flow: Removed hermetic compressor, R290 evacuated, for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual complete removed compressor with R290 evacuated, attributed / Q kg; measured device mass includes all lubricating oil still sealed at actual handoff. If oil is physically drained, direct measured remaining device mass already excludes that measured oil; report separated oil only in used_compressor_oil, never pallet-truck waste_oil. Binding/provider must match the measured retained-oil state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: maintenance
- Sources: jrc-retail2013; ghg-product2011

###### Used mineral hydraulic oil, liquid, for off-site treatment (`waste_oil`)

Actual separately collected pallet-truck mineral hydraulic oil / Q kg: during-life drain uses event beneficiary share; final-retirement drain uses the same f_cart as the whole truck exactly once. Oil still inside measured terminal truck stays in cart_terminal, not this carrier; direct net truck weighing already excludes actual drained oil. No compressor oil here.

- Selected flow: Used mineral hydraulic oil, liquid, for off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual separately collected pallet-truck mineral hydraulic oil / Q kg: during-life drain uses event beneficiary share; final-retirement drain uses the same f_cart as the whole truck exactly once. Oil still inside measured terminal truck stays in cart_terminal, not this carrier; direct net truck weighing already excludes actual drained oil. No compressor oil here.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: maintenance
- Sources: jrc-retail2013; ghg-product2011

###### Used mineral refrigeration compressor lubricating oil, liquid, separately drained for treatment (`used_compressor_oil`)

Actual separately drained compressor mineral oil / Q kg; during-life removal uses event responsibility; final cabinet retirement uses f_cabinet once, separate replacement-compressor removal uses its matched event responsibility. Retained sealed oil remains in complete device carrier; this is never pallet-truck hydraulic waste.

- Selected flow: Used mineral refrigeration compressor lubricating oil, liquid, separately drained for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual separately drained compressor mineral oil / Q kg; during-life removal uses event responsibility; final cabinet retirement uses f_cabinet once, separate replacement-compressor removal uses its matched event responsibility. Retained sealed oil remains in complete device carrier; this is never pallet-truck hydraulic waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: maintenance
- Sources: jrc-retail2013; ghg-product2011

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivision | all | Use disjoint direct meters/subdivision first. For each remaining shared total T_j, define actual beneficiaries b and causal exposures d_bj: cold allocated occupied pack volume-hours with site heat-load validation; non-cold store power and building/HVAC floor-area-hours; checkout POS powered transaction-time; shelving volume-hours; truck loaded plus empty handling-time; hygiene cleaned area-events. Allocate A_bj=T_j*d_bj/sum_b(d_bj). Include idle/closed/failure totals, all beneficiaries and zero-sale cohorts. For zero-driver intervals use prospectively reserved capacity-time over all beneficiaries and disclose; do not discard intervals. Reconcile sum A=T. | ghg-product2011 |
| asset_ownership | assets | Keep persistent serial asset ledger across all periods and beneficiaries. With measured mass m_a, expected total lifetime causal exposure D_a and current beneficiary exposure e_ap, f_ap=e_ap/D_a. Lifetime revisions replace all previously booked fractions with e_history/D_new and book signed corrections to the original cohorts; never restart manufacture. Cumulative fractions cannot exceed 1; at final retirement allocate the remaining residual once to all lifetime beneficiaries by their measured cumulative exposure, including idle reserved capacity. Apply each fraction once to manufacture and once to that asset terminal carrier. Events outside a cohort retain their dates and original attribution. | ghg-product2011 |
| asset_partition | assets | Building covers envelope/foundation and fixed wiring/plumbing/lighting, excluding separately listed HVAC/cabinet/shelf/POS/truck. Complete dry cabinet excludes free R290 but includes initial complete compressor and its sealed factory mineral lubricant; replacement compressor provider likewise includes factory-sealed lubricant, never added again as oil supply. Complete cart_asset includes initial hydraulic fill and its manufacture once; hydraulic_oil is actual later additions only. A removed compressor is only refrigerant-evacuated, not assumed oil-drained. Sealed oil retained in a complete removed/terminal device stays in that real complete carrier. If physically drained, the separate measured compressor oil goes to used_compressor_oil; pallet-truck hydraulic oil goes only to waste_oil. For final original-fluid removal use the corresponding whole-asset f_cabinet or f_cart once; actual during-life oil/repair events use matched event attribution separately. Direct net weighing of the complete remaining device already excludes drained fluids/removed parts; component reconstruction is exclusive and cannot subtract them again. No second initial oil manufacture, full-device manufacture or extra terminal manufacture fraction. | jrc-retail2013 |
| service_pool | all | Declare site/SKU/equipment configuration and contiguous reporting pool before observing outcomes. Retain all failure and zero-sale cohorts in that same pool, including their goods backgrounds and resources. Q is finally qualified accepted net contents, not gross physical handovers, revenue or refunds. Late physical returns revise the original numerator resources, lost backgrounds, Q and fates, with actual dates, never duplicate them in a new cohort. Financial refunds/discounts without physical return or qualification change do not reverse Q. No co-product credit, avoided-production credit or automatic waste substitution. | ghg-product2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sale_ledger | retail | service_output | Primary measured event/interval ledger | pool_id; SKU; original_lot_id; unique_pack_id; event_id; event_time; gross_handovers_H; returns_R; qualified_mass; reversal_mass; F; receipt_net; closing_stock; supplier_return; losses; pack_tare; temperature; seal; acceptance_spec; receiving_g_i; source_parent_ids; paired_receipt_final_weights; B_s_i; B_f_i; B_open_i; B_t_i | Scan every receipt, movement, handover, refusal and return; calibrated gross scales minus configuration-specific measured dry pouch tare; retained purge belongs to net contents; verify sampled tare and receipt/customer scales; temperature log and seal acceptance per pack/lot; no statutory default is set. This retail view and fate_ledger view share the same immutable event/pack IDs; no duplicate measurement, responsibility or normalization. Pair the actual receipt and acceptance state, never infer equal wet masses. Use calc_stock and calc_q once; follow unique packs through resale, record physical and financial events separately; keep late revisions in original pool. | kg | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Calibration, scale checks, supplier specification, label/lot photos, POS and signed acceptance/return evidence. |
| cold_meter | holding | cold_power | Primary measured event/interval ledger | meter_id; circuit_tree; kWh_start; kWh_end; time; occupancy_volume_hours; idle_time; beneficiary_ids; outage | Read cabinet/defrost/fan circuit meter continuously with interval closure checks; verify calibration and circuit containment; missing intervals stay unknown. Allocate measured totals by subdivision then subdivision rule; convert 3.6 MJ/kWh and divide by Q once. | kWh | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Meter calibration, wiring diagram and full beneficiary reconciliation. |
| store_meter | retail | store_power | Primary measured event/interval ledger | meter_id; parent_contains_cold; total_kWh; cold_submeter_kWh; all_other_beneficiary_exposure; floor_area_hours; POS_time; period | Read independent store meter or parent meter with verified contained cold submeter. Subtract cold only from a parent actually containing it; never subtract from disjoint meter. Include HVAC, offices, toilets, checkout, illumination and closed time. Reconcile all store circuits once, causal attribution under subdivision, then calc_normalize. | kWh | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Bills, calibrated meters, containment topology and full-year interval coverage disclosure. |
| refrigerant | holding | r290_supply; r290_recovery; propane_air | Primary measured event/interval ledger | source_serial_j; service_event; charge_in/out_j_once; device_stocks_j; room_stocks_j; capture_stocks_j; capture_export/import_j; source_tracer_or_apportionment; other_sources_and_owners; whole_room_absolute_inlet/outlet_species_kg_h; mode; blank; interval; all_cabinet_beneficiaries | Weigh every device/cylinder/captured stock and transfer by source serial and date with calibrated scales. Independently monitor whole-room exterior propane flux. Isolate cabinet-origin exterior contribution by source-resolved balances or validated source-specific tracer/direct exterior flux; do not relabel whole-room total as cabinet loss. Resolve other sources and their distinct stock/capture histories. Record actual capture retained net change and capture export/import separately; source uncertainty blocks completion. Reconcile isolated source exterior balance against independently measured whole-room flux across all actual sources, then attribute only this cabinet pool once across its own beneficiaries and normalize /Q. Direct source flux and source balance are exclusive; device recovery and room capture cannot be same carrier. | kg | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | R290 plate/SDS, cylinder scale checks, recovery tickets, calibrated flux and room/capture measurements. |
| hygiene | cleaning | tap_water; alkaline_cleaner; hypochlorite; cleaning_effluent | Primary measured event/interval ledger | event_id; site; import_volume; water_density_temperature; solution_kg; NaOH_concentration; NaOCl_concentration; dilution_water; discharge_volume; effluent_density_temperature; dissolved_purge_kg; drainage_portions; cleaned_area_events; calibration | Meter incoming water and full discharge; weigh each supplier-formulated chemical separately, record batch SDS/concentration and density where volume converts to mass. Measure effluent as full liquid carrier including dissolved additives/purge. Water reuse is internal and not subtracted from import. Include staff sanitation share with same water and actual effluent composition or add separate atomic carrier before use. Use calc_water direct mode only; reconcile supply balance separately, distinguish condensate drain share, allocate full totals by cleaned-area events then /Q once. | kg; m3 | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Meter/scale calibration, density samples and temperature, product SDS, drain plan and treatment acceptance. |
| condensate_meter | holding | condensate | Primary measured event/interval ledger | interval; cabinet_id; total_liquid_kg; drain_id; common_drain_cleaning_share; room_humidity; packaging_leak; stock_exposure | Collect and weigh whole condensate/defrost carrier per cabinet or validated segregated common-drain intervals. Record infiltration, room moisture and product leakage contributors; do not infer meat evaporation from condensate alone. Disjoint drain portions + cleaning_effluent = measured total common drain; allocate actual carrier once under subdivision then /Q. | kg | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Calibrated weighing, drain segregation test, full-liquid balance and treatment receipt. |
| fate_ledger | residual | failed_goods_background; packed_pork_waste; carton_waste | Primary measured event/interval ledger | unique_original_pack_id; measured_receiving_g_i; event_id/time; actual_final_wet_net/tare; paired_receipt_final_state; source_parent_ids; source_composition_observations; final_exclusive_class_k_i; B_s_i; B_f_i; B_open_i; B_t_i; Q_actual; F; terminal_carrier_ids/gross_mass; external_water/chemical_share; native_source_species_release; successor_whole_pack_background_owner; reverse_route_owner; recipient; uncertainty | Pair calibrated original receiving weights with actual final wet weights and seal/acceptance state for each unique unopened original pack; dry pouch tare is measured by representative same-SKU/lot companion packs, not by opening sale packs. Do not assume equal receipt and final wet kg. Keep every failed-pack separated carrier linked to the same parent original g_i and one final background class. Use actual source tracing/composition measurement to distinguish meat/purge/original-source species-water from foreign cleaning water, chemicals and environmental moisture; where destructive composition sampling is needed, use representative same-supplier/lot companion packs and paired actual source/carrier samples with calibrated validated lab method and uncertainty, no default ratio. This source characterization supports physical source mass only, not a dry-matter food-background allocation. Whole terminal carriers are weighed as actual mixtures. Verify successor continuation for the entire original-pack background and reverse route; waste receiver alone does not establish B_t. Close original-equivalent B_s+B_f+B_open+B_t to original g_i independently of actual wet stock and Q. One original-pack background once across failed parent and separated terminal carriers; service B_f/Q and downstream B_s/Q. Legitimate B_open and evidenced supplier/whole-pack B_t retain this pool operational/return/asset resources and signed later corrections. Independent background-owning portions are outside this scope until a separately reviewed method exists. | kg | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Signed recipient/return/waste tickets, original supplier gate datasets, packaging BOM, calibrated mass and transport coverage. |
| asset_ledger | assets | building_asset; building_terminal; hvac_asset; hvac_terminal; cabinet_asset; cabinet_terminal; shelf_asset; shelf_terminal; pos_asset; pos_terminal; cart_asset; cart_terminal | Primary measured event/interval ledger | serial; asset_class; installed_mass; BOM_scope; commissioning; expected_lifetime_exposure_D; e_pool; all_beneficiaries_history; prior_fraction_version; revision; final_residual; terminal_mass; removed_parts; mode; recipient; initial_factory_oil_inclusion; actual_retained_or_drained_fluid; matched_fluid_terminal_fraction | Survey all building, HVAC, cabinet, shelf, POS and truck serials. Obtain complete installed masses by calibrated weighing or signed construction/installed BOM with matching provider. Collect causal exposures every interval and preserve the lifetime ledger; terminal direct net weighbridge OR explicit remaining-component BOM mass, exclusive. No invented lifetime. Cabinet/replacement-compressor factory lubricant and truck initial hydraulic fill are included in their complete device provider once; free R290 is excluded from dry cabinet. Retained oil remains in full terminal carrier; separately drained oil uses source-specific oil card and the same whole-asset terminal fraction once. calc_asset with signed replacement of prior allocations and final residual; manufacture scopes disjoint by asset_partition. Reconcile complete package BOM and terminal carrier once. | kg; exposure hours | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Asset register, installed BOM/weighing, provider scope sheet, lifetime/exposure history, signed retirement and receiver evidence. |
| maintenance | assets | compressor_replacement; removed_compressor; hydraulic_oil; waste_oil; compressor_oil_supply; used_compressor_oil | Primary measured event/interval ledger | event_id; serial; date; complete_device_mass; retained_factory_oil; R290_removed_once; compressor_oil_added/drained; hydraulic_oil_added/drained; oil_source_grade; initial_factory_fill_provider; direct_net_or_BOM_mode; terminal_or_service_event; matched_f_cabinet/f_cart_or_event_share; recipient; provider_scope | Read work orders and manufacturer mineral-oil grade; separately weigh each actual compressor oil and pallet-truck hydraulic oil addition/removal, never mix the two ledgers or waste identities. Complete cabinet/replacement compressor manufacture includes factory-sealed lubricant and truck manufacture includes initial hydraulic fill; collect supplier package inclusion and actual fluid presence. A refrigerant-evacuated compressor retains sealed oil unless actual draining is weighed and evidenced. Device direct net weighing already excludes separately drained fluid; do not subtract again. Unknown oil type, factory inclusion or retained/drained state is unresolved. Manufacturing initial oil once in complete package; actual maintenance additions/removals use event allocation; final separately drained carrier uses matching whole-asset lifetime fraction once and retained oil stays in whole terminal device. Then normalize each disjoint carrier /Q once. | kg | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Work orders, scale checks, supplier device scope and treatment/transport receipts. |
| store_air | retail | water_vapour_air | Primary measured event/interval ledger | period; boundary; absolute_inlet_species_kg_h; absolute_outlet_species_kg_h; blank_mode; room_opening_water; room_closing_water; cleaning_evaporation; product_escape; other_beneficiaries; condensate_capture; sampling_time; calibration | Measure real exterior humidity species mass flux and room stock/capture over representative full operation/idle/failure intervals, calibrated flow and humidity instruments with air density/temperature/pressure basis. Raw absolute inlet/outlet, already differential and already blank-corrected rates are exclusive modes, remove background once. Attribute full building flux across all actual beneficiaries; product sublot kg/h estimates require measured residence/stock exposure before pooling. Use exterior flux equation; positive net service water release only is water_vapour_air. Negative transfer requires separately authored elementary uptake card before completeness; unknown flux cannot be zero. Separate already captured whole liquid condensate/effluent. | kg | Every event and each meter interval; periodic verified inventory closure | Complete declared pool plus linked late/final lifetime corrections | Declared site and all actual shared beneficiaries, including idle/failure | per 1 kg reference flow | Calibrated inlet/outlet observations, blank/mode record, moisture balance, sublot exposure and full beneficiary reconciliation. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_stock | sale_ledger; fate_ledger | Track physical movements at their actual event state, separately from Q and receipt-equivalent background. For the original-content source ledger: S_open_src + receipts_src + R_src + transfers_in_src = S_close_src + H_src + supplier_returns_src + transfers_out_src + separated_food_or_purge_src + source_species_release_from_contents. Record meat/purge transfers separately from water/species leaving the contents into room or collection. Each source release crosses the contents boundary once; later condensation, mixing or external emission does not remove that source mass again. All endpoint carrier gross masses are separately measured, with source-content fractions versus cleaning water, imported room moisture, chemical and packaging identified by paired measurement/composition evidence. Full cleaning effluent or full condensate cannot stand for original meat, purge or source water loss. Physical handovers H and returns R are gross movements independent of acceptance; external F is already in H, never another physical outflow. Unknown source apportionment or balance residual is unresolved, never zero. | S_open_src; receipts_src; R_src; transfers_in_src; S_close_src; H_src; supplier_returns_src; transfers_out_src; separated_food_or_purge_src; source_species_release_from_contents; carrier_gross_mass; measured_source_composition | Actual-state original-content source balance and separate whole-carrier ledger | ghg-product2011 |
| calc_q | service_output | Q=sum qualified accepted net wet contents - sum reversals of those same acceptance events. Each final accepted pack contributes once after linked returns/resales; reversal without physical return records F separately. Retained purge remains net contents; no mass deduction from price discounts alone. | qualified_mass; reversal_mass; unique_pack_id; acceptance_spec | Q kg finally accepted contents | ghg-product2011 |
| calc_goods | failed_goods_background | For each unique original pack i retain measured receiving net wet contents g_i and paired actual receipt-to-final-state weights, seal/specification evidence, event IDs and uncertainty. Assign one final original-background responsibility class k_i: s for finally qualified success, f for finally failed/lost or externally unqualified retained under this service responsibility, open for stock/unresolved fate, or t for evidenced continuation of the entire original-pack background by a successor including supplier return. B_k,i=g_i if k=k_i, otherwise 0 only when the mutually exclusive class is evidenced; B_s,i+B_f,i+B_open,i+B_t,i=g_i. Unknown class or missing g_i is unresolved, never a zero. These B quantities are original-receiving-gate equivalents, not final wet contents q_i; final Q is measured separately. Moisture change does not create a new original manufacture or imply B_s=Q. The finally accepted intact pack inherits its original g_i even if actual wet mass changed. A failed parent pack and any separated meat, purge, original-source water/species or residual pouch remain one B_f parent background, not another g_i for each terminal carrier. Failure waste collection/transport/treatment stays within this service responsibility even if physically separated for handling; it does not transfer the original production background. Only a verified whole-original-pack continuation with explicit successor original-background and reverse-route ownership qualifies for B_t. Splitting original contents into independently sold, reused, donated or background-owning portions is outside this intact-pack PCR and blocks completeness until a separately reviewed partition/aggregation method is adopted; never substitute endpoint wet kg or an unsupported dry-matter ratio. Sum B_k by unique packs/provider lots. Service includes B_f/Q; successful downstream adds B_s/Q original-gate kg per actual accepted kg. Original packaging and inbound transport follow that same whole-pack responsibility once. Supplier continuation B_t and legitimate B_open do not erase this pool operation, handling, return, asset, failure or zero-sale resources. Late returns/reclassification replace the original pack class, original service numerator and successful-background join with signed corrections under the same parent, never create another manufacture. | unique_original_pack_id; measured_receiving_g_i; paired_actual_receipt_final_weights; final_Q; final_exclusive_class_k_i; acceptance_and_seal_evidence; successor_whole_pack_owner; reverse_route_owner; B_s_i; B_f_i; B_open_i; B_t_i; parent_terminal_carrier_ids; uncertainty; original_gate_provider_scope | B_s; B_f; B_open; B_t original-gate kg, whole-pack one-owner closure, B_s/Q downstream and B_f/Q service | ghg-product2011 |
| calc_normalize | all inventory rows except service_output | q_r=A_r/Q for Q>0; A_r is the already attributed pool absolute amount. Raw totals first, causal attribution second, one final normalization last. Do not reapply composition/destination/allocation fractions already present in A_r. kWh to MJ is 3.6 exactly by adopted energy unit support. | raw_totals; beneficiary_exposures; A_r; Q | Row-specific units per kg final qualified accepted contents | ghg-product2011 |
| calc_water | tap_water; cleaning_effluent; condensate | Supply M_import=V_import*rho_water(T). Direct effluent M_eff=V_discharge*rho_effluent(T) only, with full-carrier density; do not subtract evaporation/storage or multiply a water-only balance by effluent density. Supply closure independently accounts for evaporated water, stock change, actual water in products and actual drains. No reconstruction mode is authorized here. M_common_drain=M_eff_cleaning_share+M_condensate_share with disjoint measured portions; actual dissolved cleaner/purge is already in full liquid mass, never added again. | V_import; rho_water; V_discharge; rho_effluent; T; disjoint_drain_portions | Distinct actual liquid-carrier kg before allocation | jrc-retail2013 |
| calc_gas | r290_supply; r290_recovery; propane_air | For each cabinet/source serial j, L_j=opening_charge_j+contained_in_j-closing_charge_j-contained_out_j_once; device recovery never enters room release. Target-source exterior balance is E_j=L_j+room_open_j-room_close_j-(capture_close_j-capture_open_j)-capture_exports_j+capture_imports_j. Room/capture stocks and transfers must be source-resolved; net captured-stock change and actual external export/import are separate non-overlapping terms. An export from prior captured stock is canceled by its stock decrease, never another capture subtraction. A target-source tracer/direct exterior flux is an exclusive alternative to that source balance. Independently measure the whole-room exterior propane net flux E_room from absolute inlet/outlet species kg/h over intervals, OR already differential/blank-corrected rates; modes exclusive, background removed once. Require sum of all independently resolved source E_j to reconcile E_room and measured uncertainty; other room sources receive their own matched ownership and are excluded from this cabinet target, not added to it and allocated by cabinet exposure. Only after isolating this cabinet E_j may its complete pool be attributed once across all actual cabinet beneficiaries by the declared causal driver. If source tracing/apportionment, mixed room/capture storage or any other source remains unresolved, target emission completeness is unresolved. Contained refrigerant recovery is one device contained_out term; room capture is a different physical transfer with its own stock/export records, never the same mass twice. The current r290_recovery card covers device-contained refrigerant only; any actual room-capture export needs a distinct atomic carrier card matching its measured physical medium, protocol/process and amount before completeness. Do not label sorbent, mixed condensate or a captured mixture as pure recovered propane; evidenced no-capture remains an absence record, not an assumed zero. | source_serial_j; opening_charge_j; contained_in_j; closing_charge_j; contained_out_j_once; room_open_j; room_close_j; capture_open_j; capture_close_j; capture_exports_j; capture_imports_j; source_apportionment_evidence; whole_room_exterior_flux; mode; all_cabinet_beneficiaries | Source-isolated cabinet exterior propane kg, independently reconciled with whole-room flux | fao-cold04 |
| calc_asset | building_asset; hvac_asset; cabinet_asset; shelf_asset; pos_asset; cart_asset; building_terminal; hvac_terminal; cabinet_terminal; shelf_terminal; pos_terminal; cart_terminal | f_ap=e_ap/D_a; A_manufacture=m_a*f_ap; A_terminal=w_a*f_ap. On D revision replace old f_history by e_history/D_new, book signed differences to old cohorts and apply final retirement residual once across full lifetime exposure. Sum lifetime f<=1 before closure, =1 after closure. Terminal direct net weighing w_a already excludes actual removed compressor, separately drained oil and recovered refrigerant; sealed lubricant still present remains in measured whole device. Exclusive BOM mode sums only actual remaining components/contained fluids. Do not subtract removed parts twice or multiply terminal mass by another manufacture fraction. | m_a; w_a; e_ap; D_a; previous_allocations; terminal_mode; remaining_components | Attributable complete asset manufacture and terminal carrier kg | ghg-product2011 |
| calc_exterior_water | water_vapour_air | Absolute mode E=sum[(outlet_water_kg_h-inlet_water_kg_h)*interval_h] after one evidenced blank correction where not already removed. Differential or blank-corrected rate modes integrate the recorded kg/h once with no repeated subtraction. Reconcile E=actual_internal_water_sources+room_opening_water-room_closing_water-actual_captured_liquid, excluding imported environmental moisture already canceled in net inlet/outlet and excluding non-service beneficiary contributions once. Sublot kg/h times measured residence hours gives that sublot mass; kg-based rates multiply matching measured kg-hours once; sum all sublots then allocate and /Q once. Condensed water is liquid carrier, never also air emission. | absolute_or_differential_mode; inlet_water_kg_h; outlet_water_kg_h; interval_h; blank; room_stocks; actual_internal_water_sources; actual_captured_liquid; beneficiary_shares; measured_sublot_exposure | Reconciled exterior service-attributable net water kg | fao-cold04; ghg-product2011 |
| calc_oil_ownership | compressor_replacement; removed_compressor; hydraulic_oil; waste_oil; compressor_oil_supply; used_compressor_oil; cabinet_asset; cabinet_terminal; cart_asset; cart_terminal | Initial factory oil manufacture is included once in complete cabinet/compressor/truck provider mass and scope, with no separate initial-oil input. A_added_event=m_added*event_share; A_removed_event=m_removed*event_share. At final retirement, A_drained_cabinet_oil=m_actual_drained*f_cabinet and A_drained_truck_oil=m_actual_drained*f_cart; each carrier once, not another manufacture fraction. If oil remains sealed, it stays in directly measured complete terminal device mass w_a and has no separate waste-oil exchange. Track each source oil: opening+actual_additions=closing_retained+actual_separated_removals+measured_other_fate; cross-device oils never substitute for each other. Whole terminal direct net weighing and reconstructed component/BOM mode are exclusive; direct measured remaining mass already excludes actual drained oil. Unknown oil presence/type/provider inclusion, retained/separated fate or ledger discrepancy blocks completeness. | factory_fill_inclusion; oil_source_serial; opening; actual_additions; closing_retained; actual_separated_removals; measured_other_fate; event_share; f_cabinet; f_cart; direct_net_or_BOM_mode | Disjoint source-specific oil manufacture, event and terminal responsibility | ghg-product2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all | Document route eligibility with inspection evidence: sealed PA/PE pork tenderloin SKU, no absorbent pad/additional retailer packaging, no ice/freezing/delivery/combustion, actual R290 cabinet and electric HVAC. Supplier and local food safety criteria determine recorded acceptance; this PCR supplies no numeric legal threshold. Record monitoring interval adequacy against holding duration and excursions. | Supplier specification, seals, inspection, cold log, equipment plate and local acceptance decision. |
| inventory_complete | all | Keep every actual flow individually identified with real process, direction/type, state/medium, property/unit, quantity, collection and provider boundaries. Non-empty inventory cards do not prove actual occurrence. Conditional absence needs invoices, inspection or ledger evidence; unresolved quantity, identity, fate or missing measurement prevents complete dataset use. | Row binding register, calibrated raw records, conditional absence evidence and provider scope exclusions. |
| periods | all | Declare contiguous reporting dates before outcomes, complete seasonal/site coverage, cutoff and late-return revision window. Keep actual event time and original cohort attribution, full beneficiaries and all zero-sale cohorts; retain unnormalizable pools and all uncertainty. No unsupported default amount, lifetime or concentration. | Timestamped ledger, coverage/missingness report, lifetime register and signed corrections. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_binding | all | Before complete dataset use, independently bind each non-electricity flow (including service) to one appropriate Tiangong flow; verify public state, exact bilingual name, type, state, medium, property/unit and provider against original direct-read evidence. Mass support does not establish a pork/service flow. Historical electricity identity does not establish supplier mix or current availability. Preserve all unresolved identities and quantities explicitly; unknown is never zero. | ghg-product2011 |
| balances | all | Require source-resolved actual-state contents stock and distinct corrected Q, plus original-gate-equivalent B_s/B_f/B_open/B_t closure; never equate endpoint wet kg with original production kg. Every native meat/purge transfer and species-water release has original source attribution; cleaning water, chemicals and environmental moisture are excluded from original content source mass. Terminal liquid whole-carrier mass is not a source-food loss. Require target propane source E_j independently reconciled to whole-room all-source flux, net capture stocks and disjoint exports. Require complete device/factory oil inclusion, retained/separately drained oil evidence and source-specific oil carrier fractions. Missing source/composition, stock, owner or uncertainty closure blocks completeness. | fao-cold04; ghg-product2011 |
| zero_output | all | Normalize only when Q>0 and every required row/conditional absence has evidence. Entirely zero-output pools retain absolute exchanges, failed goods and unresolved fates, report unnormalizable and are never erased or assigned a fabricated denominator. A target PCR mechanical check is not scientific approval or standard-conformity certification. | ghg-product2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Incremental retail-service process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matched declared chilled sealed pork-tenderloin configuration only, after all quantity/identity/fate/asset completion; join successful merchandise B_s/Q original-gate background once per actual accepted kg, never default 1 kg/kg. |
| excluded_use | All-meat retail average; slaughter/manufacture; frozen or open meat; whole consumed-pork footprint without downstream product aggregation; safety certification. |
| required_metadata | All reference qualifiers, provider gates, reporting/return dates, measured Q and absolute pool ledger, original-gate goods responsibility, all six asset histories and treatment routes. |
| required_quality_disclosure | All unbound identities, missing quantities/coverage, uncertainty, failed/zero-output cohorts, corrections, provider exclusions and independent review status. |
| update_trigger | SKU/pack/state/temperature acceptance changes, route or refrigerant change, asset lifetime revision, late return/fate correction or improved provider evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62123 | official_guidance | UN Statistics Division, CPC Version 3.0, subclass 62123, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62123 | Classification meaning: retail services related to group 211; not service methodology. |
| fao-cold02 | handbook | FAO, Manual on meat cold store operation and management, Cold preservation of meat products, https://www.fao.org/4/t0098e/T0098E02.htm | Qualitative chilled versus frozen meat and packaging/preservation context; no temperature, duration or shrink factor adopted. |
| fao-cold04 | handbook | FAO, Manual on meat cold store operation and management, Refrigeration equipment, https://www.fao.org/4/t0098e/T0098E04.htm | Temperature monitoring, equipment, humidity and evaporation context; not an R290 leakage factor or shelf-life mandate. |
| jrc-retail2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, 2013, EUR25998 EN, section 1.2 pp.4-6, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Qualitative direct retail energy/water/chemical/waste screening and upstream/consumer separation; no numeric default. |
| ghg-product2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 6-7 and 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Unit of analysis, transparent boundary and allocation hierarchy guidance; specific ledger formulas are PCR foreground design choices, not quoted standard mandates or full conformity. |
