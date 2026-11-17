---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-electricity-on-own-account
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Distribution of electricity (on own account)

## 1. Scope and Applicability

This PCR defines own-account AC distribution from named metered network-entry handoffs through actual distribution transformation, lines, protection and control to metered customer delivery. It covers overhead and underground networks, necessary operational monitoring and existing electricity-meter maintenance. Each dataset fixes its voltage combination, topology, responsible assets, customer class and acceptance conditions; equal energy alone does not establish equivalent network services.

Exclude the generated-electricity commodity itself, transmission before the inlet, end-use electricity consumption, new-meter installation and independently sold meter-reading services. Network-connected storage/conversion facilities and independently delivered ancillary services such as frequency control are also excluded, so coverage of CPC 3.0 69112 is narrower. Necessary switching, protection and operational control remain part of this distribution activity; the ancillary-service exclusion cannot remove them. Do not expand the boundary merely to cover the whole classification. The classification original supports scope, not a loss rate or default factor. [Source: `un-cpc-69112`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-electricity-on-own-account |
| classification_refs | CPC 3.0 69112; narrower |
| covered_products | Own-account AC network distribution service characterized by named customer delivery energy; necessary operational control and existing-meter maintenance |
| excluded_products | Generation commodity; upstream transmission; end use; new meter installation; independent meter reading; storage/conversion; independent ancillary services |
| representative_product | AC distribution service delivering 1 kWh accepted at declared customer handoffs, inlet, voltage and quality conditions |
| production_route | Metered entry → distribution transformation/conveyance/control → metered customer acceptance; necessary maintenance in parallel |
| market_state | Delivered distribution service with energy, quality and responsibility records; tariff is not an inventory quantity |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Service of delivering electricity through the declared AC distribution network |
| How much | 1 kWh active energy accepted at customer handoff; annual accepted customer total is Q |
| How well | Actual supply-contract inlet/outlet voltage, frequency, reliability and accepted quality; no invented universal limits |
| How long or cycle | One complete consecutive 12-month operating period, including outages, faults and maintenance burdens; unserved demand does not increase output |
| reference_flow_link | `accepted_distribution` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted AC electricity distribution service |
| Reference flow property | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` |
| Reference unit | kWh |
| Required qualifiers | Network/asset/inlet/customer-point IDs; own-account responsibility; AC and voltage/frequency; overhead/underground topology and line length; transformer/switchgear media and ratings; customer class; 12-month start/end/timezone; quality and outage records; Q and loss ledger; imports/exports/reverse flows; outsourcing coverage; retained commissioned-asset lifetime shares and supplier coverage; supply region/provider/upstream boundary; interfaces with excluded storage and ancillary services |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_energy` | accepted_distribution | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Use cp_energy: Q is accepted active energy at named customer points, not inlet energy, apparent energy, capacity, fees or meter-reading count. Q must be positive. Adopt the Net calorific value property and energy unit group already used by an official electrical-service record as an energy-throughput service convention; this is not combustion heat. The service product UUID remains unbound and cannot borrow a transformation-service identity with different voltage boundaries. |
| `energy_conversion` | aux_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the verified electricity flow property; kWh × 3.6 = MJ. This is the electrical-energy reporting convention, not a claim that electricity has a combustion heating value. Convert the numerator only and retain the same reference denominator. |
| `material_conversion` | sf6_makeup; oil_makeup; waste_oil; sf6_for_destruction; recovered_sf6_product; sf6_air; oil_soil | Mass | kg | Liquid volume-to-mass needs batch density at applicable temperature; gas containers need tare removal and measured composition conversion to species mass. Never multiply pure-species mass by concentration again. Missing or negative reconciliation results cannot be set to zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing named AC network receives energy at metered inlet; capital inputs are accepted commissioned assets, not burden-free existing stock |
| starting_condition_role | foreground_start |
| product_classification_scope | Declared AC distribution subset of CPC 69112; narrower, with original excluded routes retained |
| recursive_input_rule | Other-network interfaces and background input products/services are recorded once at declared gates; no supplier/receiver recursion |
| upstream_dataset_requirement | Gate-matched generation for service loss/auxiliary energy, specific material/equipment/service supply, and external carrier treatment linked separately as background |
| disclosure | Foreground gates; exclusions; Q/balance; actual assets and service shares; provider resource coverage; waste stocks/handover; unbound identity and background gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_service` | Foreground comprises operation between the named AC inlet and customer acceptance gates, plus operator-responsible on-site servicing. Transmission, generation of accepted commodity Q, end use, new-meter installation, independent meter reading, storage/conversion and independent ancillary services remain excluded. Necessary protection/control and existing-meter maintenance remain included. | un-cpc-69112; epa-electricity-delivery |
| `boundary_foreground` | Inventory exchanges crossing those foreground gates and actual releases. Purchased specific equipment, materials and services enter as defined products with one primary property/unit. Do not expand supplier manufacture, mining, delivery travel, roads/tools/vehicles or receiver treatment internals. Capital is retained only as specified commissioned network assets with measured mass and one supported lifetime share; upstream inventories matching that commissioned gate supply its background burden. This foreground choice is not a claim of zero background burden or a source-mandated EPD boundary. |  |
| `boundary_loss_commodity` | Link upstream generation once for technical losses L_s, physically confirmed nonaccepted delivery F and auxiliary A_s attributable to this service. Generated commodity Q is linked separately once by a combined commodity system. Other-network export X retains its own commodity and conveyance burden; do not divide that burden by customer Q. A supplied electricity dataset already including this segment losses/assets cannot be stacked with this service. |  |
| `boundary_atomic` | Atomic means one defined measurable object with one primary flow property and one preferred unit, not chemical decomposition of complete equipment or one characterized waste carrier. Independent inputs remain separate even if both use kg. Different media, directions, gas formulations and independently supplied services require separate cards. Actual absent exchanges require evidence; unknown is not absent. |  |
| `boundary_gas` | Use the actually owned/operated equipment and cylinder stock boundary, including measured gas entering/leaving inside accepted equipment. Integral initial SF6/oil is within the commissioned asset input, never a second purchased material input. All foreground release events including servicing remain measured by species. Supplier preacceptance commissioning/filling and receiver destruction are outside this gate. An unresolved boundary or missing charge/composition prevents a complete balance. Regulatory thresholds are not cutoffs. | epa-sf6-balance |
| `boundary_waste` | Waste ends at actual documented external handover. Record one characterized carrier, its origin, opening/generation/dispatch/closing stock, receiver gate and downstream linkage requirement; retained stock is not an observed future handover. No paired receiver inputs or invented off-site reagents/emissions. A complete lifecycle model may later link a matching treatment dataset once; do not confuse this foreground-only dataset with a complete treatment footprint. Treatment physically inside the operator gate must be explicitly added with its own actual exchanges before completeness. |  |
| `boundary_interfaces` | Separate co-located storage, conversion and independently supplied ancillary services with meters and asset/work-order gates. Internal cycling does not increase Q. Missing separation prevents completion. Background product/service coverage must specify supplied resources/stages and exclusions, so actual operator-provided resources are recorded once while included supplier resources are not repeated. | un-cpc-69112 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| operation | Distribution operation and delivery | required | Actual operated network; individual card conditions apply | foreground_production | per declared reference flow |
| assets | Specific commissioned network assets and actual retirement handover | required | Actual corresponding configuration and retained capital responsibility | foreground_production | per declared reference flow |
| maintenance | Specific externally purchased on-site network services | conditional | Actual contracted service matching its card; own work is screened separately | foreground_production | per declared reference flow |

### Process: Distribution operation and delivery (`operation`)

#### Inputs

##### Product flows

###### Electricity at distribution-network inlet (`loss_electricity`)

Electricity needed for attributable technical loss L_s and physically evidenced nonaccepted delivery F. Record inlet voltage, supplier, region and delivered gate; accepted commodity Q is a separate ledger. Do not substitute a final-customer-voltage electricity inventory.

- Selected flow: Electricity at distribution-network inlet
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: (L_s + F) / Q kWh per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources:

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`aux_electricity`)

Attributable purchased auxiliary AC at the point of use for protection, communications, control, cooling and responsible offices. Record voltage/provider/region and net external gate. Exclude electricity already included in a purchased specific service and technical losses. The historical official identity leaves voltage and supplier unspecified.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 A_s / Q MJ per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources:

###### Sulfur hexafluoride (`sf6_makeup`)

Only when pure SF6 is actually separately supplied for operating equipment: measured net consumed SF6, purity and equipment specified. Integral initial charge in a commissioned device is already inside that device input. Internal recovered gas is a stock transfer. A purchased insulating mixture requires its own total-mixture-mass card, not pure-species purchase.

- Selected flow: Sulfur hexafluoride
- Flow property / unit: Mass / kg
- Amount rule: Attributable net operational consumption / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `epa-sf6-balance`

###### Mineral transformer insulating oil (`oil_makeup`)

Only actual separately supplied mineral insulating oil consumed in operation. Identify grade and batch, exclude integral initial oil in commissioned transformers and internally recirculated oil. Other liquid formulations require independent cards.

- Selected flow: Mineral transformer insulating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable net operational oil consumption / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Product flows

###### Accepted AC electricity distribution service (`accepted_distribution`)

The reference service at named customer acceptance points; generated commodity is separate. Internal transfers, exports, reverse injections, rejected delivery and unserved demand do not increase accepted Q.

- Selected flow: Accepted AC electricity distribution service
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: 1 kWh
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources:

###### Recovered SF6 insulating gas (`recovered_sf6_product`)

Only an actual characterized SF6 batch accepted by an external receiver for reuse at foreground handover. Weigh total stream without cylinder tare; composition/specification/acceptance determine identity. Retained internal recovery is stock; rejected batch is waste. No automatic credit.

- Selected flow: Recovered SF6 insulating gas
- Flow property / unit: Mass / kg
- Amount rule: Attributable accepted recovered gas stream mass / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `epa-sf6-balance`

##### Waste flows

###### Spent mineral transformer insulating oil (`waste_oil`)

Actual operational spent oil carrier at documented external handover, with composition, contamination and receiver. Exclude oil still contained in a retired transformer and oil released to soil. Retained waste is closing stock, not a fictitious dispatch. Receiver treatment internals are outside foreground.

- Selected flow: Spent mineral transformer insulating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual external handover mass / Q kg; track generation and stock separately
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Spent SF6 insulating gas for destruction (`sf6_for_destruction`)

Actual total characterized gas-carrier mass handed to the external receiver as waste, including composition/contamination and net gas mass excluding cylinder tare. Pure SF6 species content is a separate balance field, not an additional waste output. No assumed downstream destruction emissions or future receipt.

- Selected flow: Spent SF6 insulating gas for destruction
- Flow property / unit: Mass / kg
- Amount rule: Attributable actual external waste-gas handover mass / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `epa-sf6-balance`

##### Elementary flows

###### Sulfur hexafluoride to air (`sf6_air`)

Actual pure SF6 species mass released to air within the operated network and servicing gates. Reconcile calibrated species stock/event balance; exclude supplier preacceptance filling, accepted intact gas handover and receiver treatment emissions. Unknown residual is not zero or assumed release.

- Selected flow: Sulfur hexafluoride to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable foreground SF6 air-release species mass / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `epa-sf6-balance`

###### Mineral insulating oil to soil (`oil_soil`)

Only incident mineral insulating oil actually reaching soil after recovery. Contaminated soil is a waste carrier and cannot duplicate its contained released oil. Other actual receiving media require separate cards.

- Selected flow: Mineral insulating oil to soil
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured unrecovered oil reaching soil / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_spill`
- Sources:

### Process: Specific network assets (`assets`)

#### Inputs

##### Product flows

###### Mineral-oil-filled copper-wound AC distribution transformer (`distribution_transformer`)

Conditional on the actual installed asset matching this specific identity (model, rated capacity, inlet/outlet voltages, copper winding and mineral-oil fill). Different configurations require their own defined card. Apply `inv_asset_gate` in section 8.

- Selected flow: Mineral-oil-filled copper-wound AC distribution transformer
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × original accepted net asset mass_j) / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### SF6-insulated AC distribution switchgear (`distribution_switchgear`)

Conditional on the actual installed asset matching this specific identity (model, voltage/current rating, enclosure and contained gas composition/charge). Different configurations require their own defined card. Apply `inv_asset_gate` in section 8.

- Selected flow: SF6-insulated AC distribution switchgear
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × original accepted net asset mass_j) / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### XLPE-insulated aluminium AC distribution cable (`distribution_cable`)

Conditional on the actual installed asset matching this specific identity (model, rated voltage, conductor cross-section, sheath, length and net mass). Different configurations require their own defined card. Apply `inv_asset_gate` in section 8.

- Selected flow: XLPE-insulated aluminium AC distribution cable
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × original accepted net asset mass_j) / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Prestressed concrete distribution pole (`distribution_pole`)

Conditional on the actual installed asset matching this specific identity (model, dimensions, reinforcement, design load and net mass). Different configurations require their own defined card. Apply `inv_asset_gate` in section 8.

- Selected flow: Prestressed concrete distribution pole
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × original accepted net asset mass_j) / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Static AC electricity meter (`distribution_meter`)

Conditional on the actual installed asset matching this specific identity (model, accuracy class, connection type and net mass). Different configurations require their own defined card. Apply `inv_asset_gate` in section 8.

- Selected flow: Static AC electricity meter
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × original accepted net asset mass_j) / Q kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

#### Outputs

##### Waste flows

###### Discarded mineral-oil-filled copper-wound ac distribution transformer (`retired_distribution_transformer`)

Removed oil/gas and separated components are excluded from this carrier when recorded separately. Apply `inv_retired_carrier` in section 8.

- Selected flow: Discarded mineral-oil-filled copper-wound ac distribution transformer
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × actual retired-carrier handover mass_j) / Q kg; preserve original asset ledger
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Discarded sf6-insulated ac distribution switchgear (`retired_distribution_switchgear`)

Removed oil/gas and separated components are excluded from this carrier when recorded separately. Apply `inv_retired_carrier` in section 8.

- Selected flow: Discarded sf6-insulated ac distribution switchgear
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × actual retired-carrier handover mass_j) / Q kg; preserve original asset ledger
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Discarded xlpe-insulated aluminium ac distribution cable (`retired_distribution_cable`)

Removed oil/gas and separated components are excluded from this carrier when recorded separately. Apply `inv_retired_carrier` in section 8.

- Selected flow: Discarded xlpe-insulated aluminium ac distribution cable
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × actual retired-carrier handover mass_j) / Q kg; preserve original asset ledger
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Discarded prestressed concrete distribution pole (`retired_distribution_pole`)

Removed oil/gas and separated components are excluded from this carrier when recorded separately. Apply `inv_retired_carrier` in section 8.

- Selected flow: Discarded prestressed concrete distribution pole
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × actual retired-carrier handover mass_j) / Q kg; preserve original asset ledger
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Discarded static ac electricity meter (`retired_distribution_meter`)

Removed oil/gas and separated components are excluded from this carrier when recorded separately. Apply `inv_retired_carrier` in section 8.

- Selected flow: Discarded static ac electricity meter
- Flow property / unit: Mass / kg
- Amount rule: sum_j(a_j × actual retired-carrier handover mass_j) / Q kg; preserve original asset ledger
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

### Process: Specific purchased on-site services (`maintenance`)

#### Inputs

##### Product flows

###### On-site static AC electricity-meter calibration service (`meter_calibration`)

Only when purchased externally for actual responsible work: existing meters, named accuracy test protocol and signed calibration acceptance. Do not inventory provider internals or repeat included supplies. Apply `inv_technician_service` in section 8.

- Selected flow: On-site static AC electricity-meter calibration service
- Flow property / unit: Time / h
- Amount rule: sum_w(attributed accepted technician-hours_w) / Q h
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_work`
- Sources:

###### On-site SF6 switchgear leak-test and recovery service (`sf6_servicing`)

Only when purchased externally for actual responsible work: named SF6 equipment, leak-test/recovery method and signed work acceptance. Do not inventory provider internals or repeat included supplies. Apply `inv_technician_service` in section 8.

- Selected flow: On-site SF6 switchgear leak-test and recovery service
- Flow property / unit: Time / h
- Amount rule: sum_w(attributed accepted technician-hours_w) / Q h
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_work`
- Sources:

###### Distribution-line mechanical vegetation-clearance service (`vegetation_clearance`)

Only when purchased externally for actual responsible work: named line corridor, mechanical clearance method and accepted cleared extent. Do not inventory provider internals or repeat included supplies. Apply `inv_technician_service` in section 8.

- Selected flow: Distribution-line mechanical vegetation-clearance service
- Flow property / unit: Time / h
- Amount rule: sum_w(attributed accepted technician-hours_w) / Q h
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_work`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_network` | Assign loss, auxiliary, customer and inter-network services first by meters/work orders. Shared variable losses use calibrated service-specific load/network models; shared fixed standby/assets use this service occupied design peak capacity-time. Keep raw kW, h, beneficiary IDs and shares summing to one for the period. Like denominators do not make unlike voltage/gate services equivalent. |  |
| `allocate_assets` | For each original asset j retain beneficiary-period service cohorts k and the same occupied design capacity-time driver u (design kW times occupied h). Initially a_jk = u_k / supported all-beneficiary lifetime U. Freeze accepted historical postings on a life/utilization revision: F_prev_all is the sum of fractions already booked across all beneficiaries and periods; each future interval uses a_jk = (1 - F_prev_all) × u_current / U_remaining_all, where the positive evidenced remaining capacity-time includes that interval and every remaining beneficiary. Require 0 <= F_prev_all <= 1 and 0 <= u_current <= U_remaining_all; cumulative provisional fractions across all beneficiaries must not exceed one. Update the balance after each posting; a revised life must not restart the original mass. At actual final retirement calculate w_jk = u_actual_k / sum_all_lifetime_actual_u across all original cohorts and delta_jk = w_jk - F_booked_jk. Preserve original records and issue versioned corrections to each original cohort and its own accepted Q_k; delta may be positive or negative, never a negative physical exchange or substitution credit. The final shares sum to one and apply consistently to the original asset, its one-time capital-site source events and actual retirement carriers; each source quantity retains its own previously booked fractions (zero for newly observed quantities). Never charge the residual to the disposal-period Q. Unknown/nonpositive denominators or unsupported prior shares require resolution, never equal splitting or a current-Q fallback. No second service share. Long-lived replacements receive new original keys; current consumables are not capital. Unsupported future fate is not measured retirement. Final capital settlement and source/original-denominator revisions follow capital_source_amendment; recurring components do not receive lifetime allocation. |  |
| `allocate_services` | Specific purchased work uses directly evidenced service hours first. For shared work, service share is this network accepted technician-hours / total accepted technician-hours for that order; record each beneficiary and assign once. Provider resources included in the service background are not also foreground material/energy inputs. Own-work resources are direct foreground exchanges; wages or internal labour hours are not a purchased environmental flow. |  |
| `allocate_recovery` | No automatic recovery credit. Accepted recovered product, waste, retained inventory, return and rejection are distinct. Original waste cohorts persist across storage/dispatch periods and cannot shift historic retirement mass or burden wholesale to current Q. Record background handover obligations explicitly without expanding receivers. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_energy | operation | Accepted delivery, inlet losses and auxiliary electricity | meter_and_settlement | meter ID/gate; voltage; active kWh; I,D,X,A_int,A_ext; reverse injection; Q; physical rejected F evidence; load-model L; service partition; interval/timezone; corrections; calibration; outage; uncertainty | Collect synchronized inlet, inter-network, auxiliary and customer meter intervals; reconcile acceptance and operations monthly. Obtain positive Q and calibrated technical-loss model or adequate meters. Separate residual R from actual loss and physical F. Aggregate attributable totals, then calc_normalize once. | kWh | Original intervals; monthly reconciliation | Same complete consecutive 12 months; linked original asset/cohort records retained | Declared network and all interfaces | per reference flow | Calibration, wiring/multipliers, settlement, timestamps and model validation |
| cp_material | operation | Operational makeup insulating oil | stock_and_weighing | batch/grade; asset; initial-fill/makeup distinction; opening/closing stock; external receipts/returns; withdrawals; internal recovery; gross/tare; density and temperature unique source-event ID; operational/capital tag; original asset key; a_j or current beneficiary share; original service cohort/Q; | Weigh every movement at stock/servicing gates; volume converts only using applicable batch density and temperature. Net consumption = opening + received - closing - externally returned/disbursed, adjusted by documented separately accounted stock destinations; reconcile withdrawals, waste and release, cancel internal transfers. Aggregate attributed actual makeup, divide once by Q. Apply calc_site_attribution once to source events; retain raw unallocated physical QA separately. | kg | Each movement; monthly reconciliation | Same complete consecutive 12 months; linked original asset/cohort records retained | Equipment and oil store | per reference flow | Calibrated scales, batch sheets, receipts and work orders |
| cp_gas | operation | SF6 supplies, recovery, waste and release | species_mass_balance | event ID/date; equipment/cylinder; state; purity/species fraction; gross/tare/net stream mass; opening/closing container and equipment species stock; accepted equipment-contained acquisitions/disbursements; makeup; internal recovery; external accepted product/waste handover; stock responsibility; release route/uncertainty unique source-event ID; operational/capital tag; original asset key; a_j or current beneficiary share; original service cohort/Q; | At each servicing and both year ends weigh containers and measure/verify equipment charge and composition; classify every event against the actual foreground acceptance/handover gate. Reconcile calc_gas, external total-stream cards and pure-species balance separately. Include contractor releases inside the gate; exclude supplier preacceptance and receiver posthandover events. Missing charge, identity, negative/unexplained balance is an explicit gap. Apply calc_site_attribution once to source events; retain raw unallocated physical QA separately. | kg | Each event and both year ends | Same complete consecutive 12 months; linked original asset/cohort records retained | Equipment, cylinders and operator-responsible servicing gate | per reference flow | Calibrated weighing, composition tests, charge records and signed receiver receipts |
| cp_spill | operation | Oil release to soil | incident_mass_balance | event/date; equipment; composition; escaped/recovered oil; compartment; contaminated-soil carrier mass and oil content; uncertainty unique source-event ID; operational/capital tag; original asset key; a_j or current beneficiary share; original service cohort/Q; | Investigate each incident at actual location, reconcile escaped oil with recovered stock/waste and unrecovered receiving medium. Record oil species/carrier once, not full soil plus its contained oil as duplicate releases. Aggregate actual unrecovered soil oil and divide by Q. Unknown fate remains unresolved. Apply calc_site_attribution once to source events; retain raw unallocated physical QA separately. | kg | Each incident; annual reconciliation | Same complete consecutive 12 months; linked original asset/cohort records retained | Network incident location | per reference flow | Incident reports, sampling, recovery manifests and mass balance |
| cp_waste | operation | Operational oil waste external handover | handover_stock_records | original cohort; carrier identity/composition/state; generation/opening/dispatch/closing kg; receiver and gate; receipt date/quantity; retained stock; removed fill overlap; source responsibility unique source-event ID; operational/capital tag; original asset key; a_j or current beneficiary share; original service cohort/Q; | Weigh and characterize each batch at generation and actual handover; retain stock/origin ledger monthly. Resolve differences between dispatch and receiver weighing; do not fabricate future receipts. Aggregate original-cohort actual handover once per applicable service share; disclose stored quantities and matching background treatment requirement. Apply calc_site_attribution once to source events; retain raw unallocated physical QA separately. | kg | Each batch and monthly stock close | Same complete consecutive 12 months; linked original asset/cohort records retained | Operator store to external handover gate | per reference flow | Calibrated weighing, carrier analyses, receiver receipts and stock ledger |
| cp_assets | assets | Specific commissioned assets and actual retired carriers | asset_mass_and_service_ledger | original asset ID; model/specification; acceptance date/site/gate; supplied-stage coverage; integral initial oil/gas; net kg; weighing or count×verified model mass; kW,h occupied capacity-time per service/all beneficiaries/all periods; supported life/use and revisions; previous shares; actual retirement kg/state/receipt; separated fill mass; uncertainty; revision date/version; F_prev_all; u_current; U_remaining_all; actual lifetime u_actual_k; source-specific F_booked_jk; w_jk; signed delta_jk; original cohort Q_k and correction links; ; source-specific B/version and original N fields in cp_capital_amendment | At opening, each change, each life revision and final retirement, verify asset model and accepted mass using calibrated weighing or count times verified model mass. Collect all beneficiaries and intervals with design kW and occupied h, retain immutable previous postings and remaining-life evidence, and calculate allocate_assets using the frozen-history remaining balance. At actual final retirement reconcile all actual lifetime drivers, w_jk, signed corrections and each original cohort Q_k, separately for original assets, capital-site events and actual carriers; archive versioned corrections without altering raw physical records. Unknown/nonpositive driver or Q denominators block results. Measure actual handover kg and separated fills; no hypothetical separation, supplier internals or receiver internals. Complete cp_capital_amendment reconciliation for final settlement and source/denominator revisions. | kg | Opening; each change/life revision/handover; annual close; final retirement | Same complete consecutive 12 months; linked original asset/cohort records retained | Named network asset acceptance and retirement gates | per reference flow | Asset specifications, calibration/drawing mass, acceptance, lifetime basis, allocation and receiver ledger |
| cp_capital_amendment | assets | original-asset sources and their one-time capital-event components; excludes recurring operating components | versioned_original_source_and_cohort_ledger | asset_ID; source_ID and original row_ID/native unit; original acceptance/event gate; full measured source quantity and old/new versions; measurement/calibration/state basis; each original beneficiary-period/driver unit/u_actual; period b where applicable; all past/future beneficiaries; F_prev_all and remaining_driver; accepted g/F_booked; raw booked B; old normalized result/original N and corrected N; background model versions/scope; actual final retirement evidence; A_new/delta_A/replacement/deduplication links | Collect original records at asset/supplier acceptance, actual site events and receiver handover gates as applicable; verify full quantities through the existing cp_assets weighing/configuration-count/length/driver measurement and calibration methods. At every source/life/model/denominator revision and final retirement, compare old/new records for every original cohort and apply capital_source_amendment. Reconcile all-beneficiary fractions, source totals and each amendment link; the service data custodian reviews and signs the reconciliation. Prove nonoccurrence by complete event registers/zero-activity evidence, never absence-as-zero; retain unresolved identities, measurement uncertainty and incomplete causes. | source-native units; fixed driver units; original reference units | each acceptance/event/revision/final retirement; annual reconciliation | complete original asset history and original service cohorts; evidenced remaining life | existing foreground gates and capital-source responsibility only | once per original reference flow | raw measurement/calibration; signed acceptance/event/receiver records; source/model versions; all-beneficiary and revision reconciliation ledger |
| cp_work | maintenance | Specific purchased services | accepted_technician_hours | work order/provider; one specific service ID; asset/location; scope/acceptance criterion; technician ID; start/end/breaks; accepted on-site h; beneficiary/time assignment; coverage matrix for provider energy/material/travel/tools and operator-supplied gas/oil; acceptance evidence unique source-event ID; operational/capital tag; original asset key; a_j or current beneficiary share; original service cohort/Q; | Collect each technician timesheet and signed work acceptance at site; sum individual accepted on-site hours after breaks. Allocate shared work by accepted hours once. Verify background service exact gate/coverage; separate operator supplies and actual outputs, and remove duplicate included provider resources. Own staff hours are activity records only; screen actual own-work materials/releases separately. Apply calc_site_attribution once to source events; retain raw unallocated physical QA separately. | h | Each work order; monthly reconciliation | Same complete consecutive 12 months; linked original asset/cohort records retained | Specified network work location and contract gate | per reference flow | Signed timesheets, test/work protocol, acceptance and resource coverage matrix |
| cp_screen | operation | Actual foreground applicability and added identities | applicability_and_completeness | site/asset/work order; occurred/absent/unknown; actual exchange/specification; supplier gate; raw property/unit; independent card/protocol/formula; uncertainty and responsible collector | At opening, each change and year close screen actual operation, own maintenance, other asset configurations, direct energy/chemicals, waste and releases. Retain evidenced conditional core cards only; add each actual uncovered foreground object with one property/unit and executable collection/calculation before a complete dataset. Do not request supplier or receiver internals or prelist hypothetical pollutants. Unknown identity or quantity is a gap, never zero. | actual exchange unit | Opening; each change; year close | Same complete consecutive 12 months; linked original asset/cohort records retained | Operated foreground gates only | per reference flow | Specifications, work orders, purchases, observations and absence evidence |

### Calculation Rules

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | accepted_distribution | Q = sum accepted forward active kWh at named customer points for the complete same 12 months, including evidenced authorized unbilled delivery. Q>0. Reverse flows, rejected energy and unserved demand are separate; reference output = 1 kWh. | cp_energy | Q; 1 kWh |  |
| `calc_energy` | loss_electricity; aux_electricity | I = D + X + A_int + L + R; I includes actual reverse injections to the network. D is physical customer delivery, X is other-network export, A_int is auxiliary drawn inside inlet meters; separately purchased auxiliary A_ext is outside I. A=A_int+A_ext. Determine L by calibrated model or sufficient metering, not residual relabelling. Attribute L,A,D to this service versus X under allocate_network, yielding L_s,A_s,D_s. F=D_s-Q only with physical delivery/acceptance evidence. Meter error and unknown R cannot become L,F or zero. Loss inlet burden=(L_s+F)/Q kWh; auxiliary burden=3.6 A_s/Q MJ; kWh×3.6=MJ. | cp_energy; I;D;X;A_int;A_ext;L;R;Q | L_s; A_s; F; service electricity inputs | ea-distribution-losses |
| `calc_normalize` | all inventory rows | For each card calculate raw attributable foreground-period total in its single preferred unit, then divide by the same service cohort accepted Q once. Original-cohort asset/site-event corrections use that original Q_k under allocate_assets, never substitute current Q. Failed or zero-output individual tasks remain assigned to their evidenced original service cohort and its positive accepted Q; they do not add Q or disappear. If no positive accepted Q exists for the responsible service cohort, retain raw totals and an unresolved gap and do not produce a unit-reference result; never shift them to an unrelated successful cohort. Multiply site activity by a supplied factor only after checking its denominator and gate. Already normalized values are not divided again. Internal inputs/intermediates, losses, asset kg and technician h are not fixed to final output 1. Reference amount is dimensionless 1 with unit kWh. | cp_energy; attributed totals | amount per 1 kWh accepted service |  |
| `calc_gas` | sf6_makeup; sf6_for_destruction; recovered_sf6_product; sf6_air | E = S_open + B_open + P - S_close - B_close - T for pure SF6 species, where S is container stock, B is measured equipment charge, P is all external species entering the actual foreground gate including accepted equipment-contained charge, and T is all actual external species leaving including equipment-contained gas, recovered product and waste. Cancel internal recovery/transfers. Convert a measured whole stream to species mass once using measured composition; do not repeat a species fraction on pure mass. Reconcile unique in-gate release events and uncertainty; E is a QA balance until negative/unexplained residual is resolved, not an automatic emission factor. SF6_air = attributed actual in-gate release species total/Q. Product/waste gas cards use their measured total carrier masses, while sf6_makeup excludes integral accepted asset fill. Preacceptance supplier and posthandover receiver releases are not in this balance. | cp_gas; species stocks; species acquisitions; species disbursements and event evidence | QA species balance; actual kg SF6/Q and external stream kg/Q | epa-sf6-balance |
| `calc_assets` | all assets process rows | For each original asset j and service cohort k use a_jk (a_j in card quantities) from allocate_assets once: X_ik = sum_j(a_jk × M_ij), where M_ij is original accepted whole-device net kg matching the exact card. Count converts using verified model-specific net kg/item; drawing/density conversion requires applicable state, density and uncertainty; never assume a device mass. Actual retirement carrier mass is measured at handover, not inferred from future fate or a BOM. At final retirement use w_jk for each actual carrier and asset; correction for source quantity M_ij is (w_jk - F_booked_jk) × M_ij, with F_booked_jk taken from that source quantity ledger. Thus a newly measured carrier with no prior posting uses F_booked_jk=0. Preserve raw physical mass and original postings; versioned corrections amend original cohort results using that cohort Q_k once, not disposal-year Q. A negative correction reverses an over-allocation only; it is not negative physical mass or an avoided-burden credit. No nested supplier capital or second service share. Require supported positive lifetime driver and original cohort Q_k; unresolved denominators block per-reference results. Apply capital_source_amendment for final settlement, source quantity/model-version corrections and original-denominator changes; any delta-fraction times source-quantity expression here is conditional on its unchanged-source/model requirements. | cp_assets; original asset mass; lifetime capacity-time; previous allocation; actual retirement | Attributable specific asset and actual retirement-carrier kg/Q |  |
| capital_source_amendment | original-asset sources and their one-time capital-event components; excludes recurring operating components | Within this entry's declared applies_to scope, apply the complete ordered rule group: capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | attributed totals in source-native units; normalize once by original N_c |  |
| `calc_work` | all maintenance process rows | H_w=sum_technicians(accepted on-site end-start-break hours), not elapsed crew time after an additional head-count multiplier. Direct work uses assigned H_w; shared work uses H_w×this-network accepted-hours/total-order accepted-hours once. The exact specific service input=sum attributed H_w/Q h. Confirm provider coverage matrix and separately provided operator resources before linking background service. Quantity acceptance confirms performed in-scope hours, not successful maintenance outcome. Include evidenced failed, rejected and rework hours actually consumed, even when the work result was not accepted; record disputes/credits separately without erasing physical service. Failed delivery does not increase Q. Before normalization apply calc_site_attribution to each source task total, keeping raw performed hours and its original asset/service cohort. | cp_work; accepted technician-hours and assignment | Specific service h/Q |  |
| `calc_waste` | waste_oil; sf6_for_destruction; all retired asset carriers | For each original carrier cohort, opening stock + actual generated - actual external handover - documented conversion/internal reuse = closing stock, with actual measured loss separately accounted. Handed-over carrier mass is counted once at external gate, with original responsibility and applicable asset share; unsent stock remains stock, not an assumed receipt. Removed oil/gas/parts cannot also remain in complete-device mass. Background treatment links match the actual carrier/gate once; no receiver internal flow cards. | cp_waste; cp_gas; cp_assets | Stock reconciliation and actual external kg/Q |  |
| calc_site_attribution | actual in-gate source events | Record each actual in-gate gas, material, spill, service and waste source event with unique ID, original asset, original service cohort and operational/capital classification. Recurring work uses its measured current beneficiary share once. An identifiable original-asset retirement or one-time postacceptance capital-site task follows the same original-asset allocation ledger and final w_jk under allocate_assets; preserve each event quantity and its own booked shares, and correct by delta_jk times that event quantity in versioned original-cohort results/Q_k. No whole charge to event-year Q, extra lifetime/parent share or negative physical flow from negative correction. Apply the share to actual resources, contracted work and releases before calc_normalize; asset rows already weighted by calc_assets and other already attributed quantities have weight 1 here. Assign failed/zero-output tasks to their original service cohort before normalization; unsupported or nonpositive Q_k blocks the result rather than erasing consumption. Supplier manufacture/installation/filling before commissioned acceptance remains background. Unallocated annual physical gas balance is QA only; do not add event-weighted releases to it again. Actual carrier handover retains original source cohort; unoccurred events remain unobserved. Final capital settlement and source/original-denominator revisions follow capital_source_amendment; recurring components do not receive lifetime allocation. | cp_gas; cp_material; cp_spill; cp_work; cp_assets; cp_waste; Q | Once-attributed actual site-event totals/Q |  |
| capital_source_amendment_history | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. This rule completes the existing frozen-history/remaining-life policy; it does not require retrospective replacement of historical life fractions at every life revision. Keep the original asset key, each native-unit source s and version, exact product/event gate, all beneficiary-period cohorts c, immutable raw measurements and accepted postings. Before actual final retirement, life/utilization revisions freeze historical fractions and allocate only the remaining fraction using the existing evidenced remaining driver; require 0<=F_prev_all<=1 and include the current interval and all future beneficiaries in the positive remaining denominator. A late first-observed capital source uses each historical accepted fraction and the same remaining ledger, not a full event-year charge. Use the existing occupied design kW times occupied hours for all original beneficiary-period cohorts. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_final_shares | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At actual final retirement set w_c=u_actual_c/U_final with U_final=sum_all_original_beneficiaries(u_actual)>0; all final shares sum to one, including non-study/failed/standby responsibilities already prescribed by the original driver. A transfer to continued use is not final retirement. Zero or unknown lifetime activity, unsupported prior fractions or missing original cohorts prevents final allocation; retain raw totals and the gap, never equal-split or invent use. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_source_revision | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For source correction before retirement use each original cohort accepted fraction g_c; at final retirement use g_c=w_c. Q_s,new is the evidenced FULL source quantity before allocation in its original card unit, not a remaining unallocated balance or a previously weighted amount. B_s,c is the actual previously booked attributed raw quantity for that source/cohort, with its quantity/model version and previous normalized result. Calculate A_s,c,new=Q_s,new*g_c and delta_A_s,c=A_s,c,new-B_s,c. A newly observed source has B=0 where unposted; a correction to an existing source replaces that source ID, not an additional purchase or disposal event. The shortcut (g_new-F_booked)*Q_s is valid only when the source quantity and linked model version are unchanged and B=F_booked*Q_s; otherwise use A_new-B. Reconcile physical gross receipt/stock/transfer/handover separately; signed corrections are model amendments, never negative physical exchanges or substitution credits. For a changed linked supply/treatment model, replace the affected original-cohort inventory/results even if delta_A=0; remove the previous model contribution and record both versions and scope. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_normalization | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Normalize the complete revised attributed amount once by the original cohort current verified reference denominator N_c (Q, D or A as locally named). If N_c itself changes, replace the complete old normalized result; do not add delta_A/new_N to a result based on old_N. Zero-output events retain their already prescribed causal parent; a parent without positive N_c retains raw attributed totals and an incomplete normalized result, never shifts to an unrelated positive-output period. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_scope | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Apply this to each actual capital-origin source covered by the existing gates, including separately counted initial fill, post-acceptance capital-site events and actual retirement carriers where present; do not create new sources, extend background boundaries, duplicate included supply stages or apply lifetime fractions to routine operation. These are explicit candidate accounting rules, not claimed numerical requirements of the cited classification or technical sources. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_coverage | all inventory rows | A named operator collector owns each protocol and original record. Record what, location, timestamps, raw unit, calibrated method, frequency and coverage. Each conditional card is occurred/absent/unknown with specification/work evidence; actual additions need exact individual card, protocol and formula before completeness. No supplier-material catalogue or speculative emission defaults. | cp_screen; original evidence |
| quality_identity | all inventory rows | Unbound flow identities stay explicit per row until direct official records with immutable evidence hash match object, state, type/direction/role, property/unit and receiving compartment. Only the historical point-of-use Alternating current binding is retained; no fresh server verification is claimed. A search hit or similar name does not bind the service or capital equipment. | official direct-record evidence; manifest unresolved_flow_identities |
| quality_missing | all inventory rows | Missing quantities, unknown identities, unsupported mass/lifetime/density or unexplained balances are not zero. Report gap, responsible collector, resolution method and uncertainty; withhold a complete dataset until critical gaps close. Estimates require explicit site-specific basis, range and sensitivity, never an unmarked default or compliance limit. | all protocols; gap register |
| quality_background_gates | all product and waste rows | Verify each matched background input/treatment boundary, resource coverage, reference property/unit and dataset denominator. Capital asset gate includes its preacceptance manufacture/delivery/installation/initial fill; do not add those internals separately. Specific work services include only contracted declared resources. Disclose unlinked background burdens and foreground-only comparability limits. | gate and coverage matrix; supplier/receiver specifications |
| inv_asset_gate | distribution_transformer; distribution_switchgear; distribution_cable; distribution_pole; distribution_meter | The product gate is accepted commissioned asset at its declared network position; supplied manufacture, delivery, installation and integral initial filling before that gate are background and are not expanded. Net whole-device mass includes integral parts/fill, excludes packaging and separately supplied replacements. Use original asset mass and one service-period asset share, not current-year purchase mass alone. | Existing collection protocols and evidence of each listed inventory row. |
| inv_retired_carrier | retired_distribution_transformer; retired_distribution_switchgear; retired_distribution_cable; retired_distribution_pole; retired_distribution_meter | Only actual corresponding retired physical asset handed over as waste at the external foreground gate, with its real condition, retained fill and contamination. Measure net carrier mass; do not infer separation or mass from the original BOM. Keep original asset responsibility and retirement allocation; no current-year whole-retirement charge or future receiving input. | Existing collection protocols and evidence of each listed inventory row. |
| inv_technician_service | meter_calibration; sf6_servicing; vegetation_clearance | One h is one accepted on-site technician-hour, excluding breaks; crew hours are summed, not elapsed time multiplied twice. Contract identifies included provider travel, portable tools, energy and consumables and its exact upstream gate. SF6/oil separately supplied by the operator remain separate inputs; captured gas, waste handover and operator releases remain actual foreground outputs. Own staff time is not a purchased service; record actual own-work exchanges through cp_screen instead. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Require all qualifiers, positive Q and unique 1 kWh service output. Validate customer acceptance, no commodity UUID substitution, and separation of rejected, reverse, internal, exported and unserved energy. Unlike voltage, quality or gates are not interchangeable. | un-cpc-69112 |
| `validate_balance` | Check I,D,X,A_int,A_ext,L,R,Q, service attribution and physical F evidence. No auxiliary double count, residual renamed loss or unallocated export divided by Q. Unresolved critical residuals and unseparated excluded interfaces prevent completeness. | ea-distribution-losses |
| `validate_foreground` | Check one concrete object/property/unit per card, actual occurrence, executable protocol and no stale supplier/treatment chains. Confirm complete-device/integral-fill, provider-service/resources, waste/contained-substance and internal/external deduplication. Recheck asset measured kg, lifetime all-user/all-period denominator and retirement true-up once; absent background inventories are disclosed, not treated as zero. |  |
| validate_capital_amendment | Verify the original driver, freeze/remaining ledger, actual final w, each source full Q_s/B/version, original N and whole normalized-result replacement under capital_source_amendment. Recalculate unchanged-quantity share corrections, changed quantity with unchanged share, changed model with zero physical delta, corrected original N and zero-output cases; verify mutually exclusive capital/recurring components and all beneficiaries. Missing traceable old postings or positive denominators remains incomplete; prohibit disposal-year fallback, negative physical flows, duplicate normalization or second shares. |  |
| `validate_gas` | Reconcile pure-species stock and actual in-gate SF6 event totals, total-stream product/waste masses and original equipment-contained acquisitions/disbursements. No nameplate-as-charge, default leakage, repeated composition fraction, false future receipt or receiver destruction emissions in the foreground balance. | epa-sf6-balance |
| `validate_projection` | All boundary/allocation/card/protocol/calculation/quality duties must project from supported source tables into structured and machine guidance with valid row/protocol references. Compare actual semantics and bilingual conditions/formulas, not only schema/fingerprints. Atomic/localized markers and a passing check do not approve methodology, translation for publication or full CPC scope. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | distribution_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared foreground AC distribution service combined once with gate-matched background input/treatment inventories and separately generated accepted commodity |
| excluded_use | Complete delivered-electricity commodity footprint without background links; storage/independent ancillary services; comparisons across unlike gates/voltage; publication approval |
| required_metadata | All qualifiers; Q/balance; foreground gates; retained asset masses/lifetime shares; service coverage; actual waste handover/stocks; identity and source evidence |
| required_quality_disclosure | Unbound UUIDs, unlinked background datasets, residual R, meter/model/mass/lifetime uncertainty, excluded interfaces and allocation sensitivity |
| update_trigger | Changed topology/voltage/customers/responsibility, asset or service configuration, gas/loss correction, gates or background coverage |

## 11. Data Sources


| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-69112 | official_guidance | UNSD CPC Version 3.0, subclass 69112 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69112 | Own-account distribution/meter maintenance; generation/transmission/meter-installation/independent-reading exclusions; broader subclass includes storage/ancillaries excluded here |
| epa-electricity-delivery | official_guidance | US EPA, Electricity Delivery and its Environmental Impacts, updated 2026-07-14. https://www.epa.gov/energy/electricity-delivery-and-its-environmental-impacts | Distribution/transformer/line-maintenance and SF6 screening; illustrative voltage is not a universal limit |
| ea-distribution-losses | official_guidance | New Zealand Electricity Authority, Distribution losses, web snapshot 2026-10-27, Types of losses. https://www.ea.govt.nz/industry/distribution/distribution-losses/ | Technical, nontechnical, reconciliation-loss and unaccounted-energy distinctions; no default loss rate |
| epa-sf6-balance | official_guidance | US EPA, Subpart DD Information Sheet, How Must GHG Emissions Be Calculated?, web snapshot 2026-10-27. https://www.epa.gov/ghgreporting/subpart-dd-information-sheet | Species mass-balance basis using container stock, acquisition/disbursement and equipment change; measured-stock form is a conservation restatement, not a claim of statutory US reporting compliance |
