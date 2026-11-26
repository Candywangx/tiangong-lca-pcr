---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-agricultural-raw-materials-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Retail services for natural honey in sealed glass jars

## 1. Scope and Applicability

This PCR covers incremental non-specialized physical-store retail service for one homogeneous SKU of natural extracted Apis mellifera honey supplied in sealed glass jars, stored and handed over at ambient conditions without product transformation. Its reference is the service, not honey manufacture. Supplier specifications fix one fill mass and package configuration for each dataset; no universal jar mass is assumed. The official subclass also lists many unrelated raw materials; those products and routes are outside this narrower scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-agricultural-raw-materials-n-e-c |
| classification_refs | CPC 3.0 62119; narrower |
| covered_products | Retail service for one sealed glass jar of natural honey |
| excluded_products | Raw milk; shell eggs; rubber; reproductive materials; raw textile materials; waxes; other forest products; comb honey; infused honey; loose refill; online delivery; wholesale; specialized stores; honey production |
| representative_product | Retail services for natural honey in sealed glass jars; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Store receipt; manual handling; ambient display; checkout; final handover and documented fates |
| market_state | Sealed finished jars; liquid or naturally crystallized state recorded; no in-store heating or repacking |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Retail service for one sealed glass jar of natural honey |
| How much | One final accepted jar retail service of the same declared SKU |
| How well | Intact sealed jar, declared net fill, traceable acceptance and actual storage state; no numeric quality default |
| How long or cycle | Receipt through final accepted handover or resolved failure fate in a declared annual pool, with late-event corrections |
| reference_flow_link | accepted_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retail service for one sealed glass jar of natural honey |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | SKU and net fill; Apis mellifera and extraction style; floral and geographic origin; jar lid label configuration; moisture and liquid/crystallized state; seal and acceptance criteria; store gate and channel; annual cohort and late-event policy; upstream responsibility and provider boundaries; climate equipment and electricity delivery |

All required qualifiers must be declared in the foreground dataset; absence makes the reference definition incomplete. Service UUID remains unbound until a compatible service identity is confirmed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count one final accepted homogeneous-jar retail service, not an undefined mass or transport activity. Use cp_goods and denominator; jar net mass is a mandatory qualifier, not the service denominator. |
| conversion_control | all inventory rows | Preserve exchange property | Recorded physical unit | Preserve raw meter/weighing units; use physical_conversion and water_balance before attribution and normalize_service. No numeric range, default loss, density or lifetime is supplied. |
| selected_freight_identity | external_transport | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | The selected road-freight identity uses the official goods-transport property/unit.1kg*km=0.001t*km; preserve the declared original quantity/attribution mode and convert only once. Actual vehicle, cargo conditions and provider stages remain independent applicability gates, with no assumed background or extra loaded share. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Recorded sealed-jar receipt at store receiving gate, with supplier specification and upstream responsibility per jar |
| starting_condition_role | Incremental retail service starting condition |
| product_classification_scope | CPC 3.0 62119; narrower |
| recursive_input_rule | Do not recursively add the same retail service as merchandise input; link actual honey-at-gate background for non-success responsibility and external successful-goods coupling only once |
| upstream_dataset_requirement | Compatible honey jar production/primary and supplier packing/inbound transport to exact same gate; quantified and scope-deduplicated for each responsibility assignment |
| disclosure | Declare SKU, site/calendar, gate, storage state, pool, customer acceptance, final fates, upstream owner and every provider exclusion |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_product_family | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| retail_gate | The foreground begins at recorded receipt of sealed honey jars at the store receiving gate, includes inspection, manual internal transfer, ambient storage/display, checkout, spill cleaning and final acceptance or documented non-sale fate. Beekeeping, extraction, filtration, filling and primary packing are upstream. No opening, heating, dilution, blending or repacking is permitted in this route. | unsd-cpc62119; fao-honey-1996 |
| goods_responsibility | Successful-jar production, primary/supplier packaging and inbound transport to the receiving gate are excluded from the incremental service and must be coupled once by the downstream merchandise user at that exact gate. Keep an upstream responsibility ledger for every jar. Failed/lost/discarded/donated jars receive that same complete background once through failed_goods_background; never multiply all receipts by a loss rate or charge an eventually resold jar twice. Supplier returns and failed external handovers retain receipt ID, recipient, actual state, return/delivery transport, final fate and continuing background owner. A transfer of responsibility requires a named coupled dataset and proof, otherwise carry the unresolved upstream burden and block completeness. | ghg-product-2011 |
| provider_dedup | Bind each waste output to transport and treatment of its exact carrier at the actual receiver; no assumed recycling credit. Purchased complete packages must expose scope by component and event. Exclude overlapping electricity, transport, packaging production, maintenance or end-of-life from one side only, with a scope matrix and retained amount. Unknown package scope blocks completion. Exclude customer travel/use and disposal of successfully sold jars with explicit downstream responsibility. | jrc-retail-2013 |
| route_presence | Use an all-electric store with manual goods handling and one ambient honey SKU in sealed glass jars; building comfort conditioning, if present, is R32 heat-pump based, not honey cold storage. Survey equipment, invoices and spill/maintenance logs. Document absence of other fuels, purchased heat, cold rooms, powered handling, other refrigerants, disinfection agents and emissions. If present, add specific atomic cards, protocols and bilingual sync before claiming dataset completeness; never hide actual exchanges in a generic row. | jrc-retail-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Ambient honey receipt, display and handover | required | All scoped service cohorts | Foreground unit process | per reference flow |
| climate | R32 building comfort conditioning | conditional | R32 heat pump serves honey zone; survey proves presence or absence | Foreground unit process | per reference flow |
| assets | Whole-asset capital and terminal responsibility | required | Actual building shell, unpowered shelf and POS used by service | Foreground unit process | per reference flow |

### Process: Ambient honey receipt, display and handover (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`retail_power`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter receiving, shelving, lighting, fans and checkout electricity; convert kWh to MJ, attribute by allocate_pool, then divide once by D. Use the circuit map to choose mutually exclusive modes: if the retail meter is a main meter containing the climate submeter, subtract that climate quantity exactly once; if retail and climate circuits are already disjoint submeters, retain retail reading unchanged. Verify supplier-package overlap and remove it from one proven containing side only, never deduct a quantity that this meter does not include.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_retail_power`
- Sources: jrc-retail-2013

###### Mains potable water at store inlet (`clean_water`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use imported supply meter volume times measured water density; apply allocate_pool and normalize once by D. Do not subtract internal reuse from an inlet meter.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: jrc-retail-2013

###### Aqueous sodium carbonate cleaning solution (`cleaner`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Aqueous sodium carbonate cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual purchased formulation mass consumed from stock balance; record carbonate concentration and composition, never substitute active carbonate mass for whole solution; allocate once then divide by D.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_consumables`
- Sources: jrc-retail-2013

###### Dry single-use cellulose cleaning wipe (`cellulose_wipe`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Dry single-use cellulose cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use dry purchased wipe mass consumed, excluding absorbed cleaning liquid; attribute event records then divide by D.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_consumables`
- Sources: jrc-retail-2013

###### Uncoated kraft paper carrier bag (`kraft_bag`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Uncoated kraft paper carrier bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: If dispensed, weigh the actual bag grade and multiply by issued count minus unused returns; assign the single bag across actual contents by occupied volume, then divide by D. Document absence when no bag is issued.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_consumables`
- Sources: jrc-retail-2013

###### Thermal receipt paper (`receipt_paper`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Thermal receipt paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use roll stock balance and weighed consumed paper; split shared receipt lines by measured printed length attributable to this SKU, including voids and repeats, then divide by D.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_consumables`
- Sources: jrc-retail-2013

###### Natural honey in a sealed glass jar at store receiving gate (`failed_goods_background`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Natural honey in a sealed glass jar at store receiving gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply goods_responsibility to unique jars ultimately lost, discarded, donated or otherwise leaving without a target accepted service; include the complete jar, lid, label, allocated supplier packing and inbound transport to the same receiving gate once per jar, divided by D. Supplier returns remain tracked until final responsibility is evidenced. This input carries upstream burden and is not another physical receipt.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_goods`
- Sources: ghg-product-2011

###### Road freight transport service for sealed honey jars by light commercial vehicle (`external_transport`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

The selected identity denotes road-freight activity, not an actual vehicle or LCI provider. Retain this card's stated cargo/vehicle, original mass basis and complete disjoint loaded-stage requirements. The official unit group uses1t*km=1000kg*km; apply any needed unit conversion once without another consignment/owner share. Empty and powered-idle sources keep their separate actual vehicle-km/vehicle-hour identities.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Sum actual sealed-jar supplier-return/donation gross consignment tonnes times loaded distance including packaging, allocate the measured full route among actual beneficiaries, divide once by D. Verify whether the selected provider dataset explicitly includes the measured empty-route kilometres and their dispatch allocation. In provider-covered mode retain evidence that every empty trip, including zero-tonne-kilometre movements, is represented inside that dataset. Otherwise use empty_road_movement for actual vehicle-km and remove the corresponding proven empty-leg burden from the t*km provider inventory once. Unknown coverage or unquantified overlap blocks completion; an actual zero-load trip never disappears as zero t*km. Complete provider scope includes fuel, vehicle manufacture/maintenance/end-of-life and direct exhaust; inbound transport already in goods-at-gate background must not recur.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_transport`
- Sources: jrc-retail-2013

###### Empty light commercial road vehicle movement service (`empty_road_movement`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Empty light commercial road vehicle movement service
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: Conditional separate mode when measured empty travel is not demonstrably included in external_transport provider data: sum actual empty vehicle-km from dispatch and route records, including zero-load whole trips, attribute by the prospectively declared full dispatch pool among all actual beneficiaries, then divide once by D. Use a complete empty-vehicle-movement provider inventory including fuel, vehicle capital/maintenance/end-of-life and direct exhaust; remove the proven corresponding overlap from the loaded transport inventory once. In verified provider-covered mode record this row as not applicable with the empty-route coverage matrix, not as an invented zero. Unknown package scope, zero dispatch drivers or unresolved overlap remains incomplete; retain actual journeys and raw kilometres.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_transport`
- Sources: jrc-retail-2013

#### Outputs

##### Product flows

###### Retail service for one sealed glass jar of natural honey (`accepted_service`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Retail service for one sealed glass jar of natural honey
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_goods`
- Sources: unsd-cpc62119

###### Sealed glass-jar natural honey retained by external recipient without retail acceptance (`external_refusal`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Sealed glass-jar natural honey retained by external recipient without retail acceptance
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Count actual jars physically retained by the named external recipient without acceptance, divided once by D. This is F, not a target sale, not a return into stock and not automatic waste. Record physical condition and final destination, and retain upstream responsibility once under goods_responsibility until a named coupled recipient takes it with evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_goods`
- Sources: ghg-product-2011

###### Unopened sealed glass jar of natural honey returned to supplier (`supplier_return`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Unopened sealed glass jar of natural honey returned to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Count physical supplier returns by unique jar and receiver, divided by D; not a sale or automatic waste. Record return transport, receiving state and final resale/rework/disposal chain under goods_responsibility.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_goods`
- Sources: ghg-product-2011

###### Unopened sealed glass jar of natural honey donated for consumption (`donated_jar`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Unopened sealed glass jar of natural honey donated for consumption
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Count accepted donated jars from receiver acknowledgement and actual delivery, divided by D; exclude from D and include their upstream responsibility once in failed_goods_background unless an explicit coupled recipient dataset carries it. No avoided-product credit.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_goods`
- Sources: ghg-product-2011

##### Waste flows

###### Honey-contaminated glass-jar breakage waste (`broken_jar_waste`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Honey-contaminated glass-jar breakage waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh the whole actual honey/glass/lid carrier handed to the named waste receiver, excluding bin tare; divide by D. Do not add its glass or honey constituent again; separately collect any material actually separated into a distinct carrier.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: jrc-retail-2013

###### Discarded intact sealed glass-jar natural honey (`discarded_jar_waste`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Discarded intact sealed glass-jar natural honey
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh intact discarded jars including contents and primary packaging; link unique jar fate and actual receiver, divide by D; no simultaneous donation/supplier-return output for the same departure.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: jrc-retail-2013

###### Dry corrugated cardboard transport-box waste (`cardboard_waste`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Dry corrugated cardboard transport-box waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh separately collected cardboard net of container tare, with actual moisture state; attribute shared boxes by packed jar gross volume once and divide by D. Input production is already in goods background when applicable.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: jrc-retail-2013

###### Honey-soiled wet cellulose cleaning wipe waste (`used_wipe_waste`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Honey-soiled wet cellulose cleaning wipe waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh the complete wet wipe carrier with absorbed honey and cleaning liquor; divide by D. Do not duplicate absorbed liquid in effluent or honey in breakage waste; document separation at each spill.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: jrc-retail-2013

###### Honey-containing floor-cleaning wastewater to sewer treatment (`wash_effluent`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Honey-containing floor-cleaning wastewater to sewer treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual discharge mode: V_discharge times measured effluent density, allocated once and divided by D; use measured discharge, not inlet minus a guessed evaporation. Alternative reconstruction is allowed only under the declared water balance with exclusive mode and correction evidence; identify sewer receiver and treatment boundary.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: jrc-retail-2013

### Process: R32 building comfort conditioning (`climate`)

#### Inputs

##### Product flows

###### Alternating current (`climate_power`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Submeter R32 heat-pump electricity over full occupied and idle periods, convert kWh to MJ, use allocate_pool for this ambient shelf zone and divide once by D. Deduct this quantity from retail_power only if a verified main-meter/circuit map proves the retail reading contains it; already disjoint retail/climate submeter readings require no subtraction.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_climate`
- Sources: jrc-retail-2013

###### Difluoromethane refrigerant R32 (`r32_topup`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Difluoromethane refrigerant, R32, supplied `7a62f5d4-1037-46ec-b1af-52418a986c4b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual replacement R32 transferred into the equipment, not cylinder purchase mass; initial factory charge belongs only to whole heat-pump capital, and recovered/reused charge keeps its actual burden history; stock/recovery ledger reconciles service events. Attribute once and divide by D; no default leakage fraction.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_climate`
- Sources: jrc-retail-2013

#### Outputs

##### Waste flows

###### Recovered difluoromethane refrigerant R32 for reclamation or destruction (`r32_recovery`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Recovered difluoromethane refrigerant R32 for reclamation or destruction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh recovered R32 net of cylinder tare at the named receiver; divide the attributed actual mass by D once. Link actual reclamation/destruction route; recovered mass is excluded from r32_air, and from the decharged whole-unit terminal carrier.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_climate`
- Sources: jrc-retail-2013

##### Elementary flows

###### Difluoromethane to urban air (`r32_air`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

The official record provides no Chinese baseName; the aligned rendering retains the same standard chemical identifier.

- Selected flow: HFC-32 `4d9a8790-3ddd-11dd-9ca6-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate actual R32 air release from closed equipment and recovery mass balance including commissioning, repairs and decommissioning; attribute once and divide by D. Recovery to a receiver is not air emission. Specify urban air compartment; unresolved balance is unknown, never zero.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_climate`
- Sources: jrc-retail-2013

### Process: Whole-asset capital and terminal responsibility (`assets`)

#### Inputs

##### Product flows

###### Complete R32 comfort heat-pump unit (`heatpump_capital`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Complete R32 comfort heat-pump unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: For the actual identified whole asset a, use 1 complete asset * f_a,k / D_k Item(s), with current beneficiary exposure x_a,k and total lifetime exposure L_a giving f_a,k = x_a,k / L_a. Apply the signed historical and retirement corrections in asset_ledger to the original beneficiary cohorts. Count complete objects or fractional object equivalents, never unrelated repair-material masses; exclude operating utilities, separately measured maintenance and terminal treatment. Heat-pump cards are conditional on evidenced equipment presence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Complete retail building shell with fixed envelope (`building_capital`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Complete retail building shell with fixed envelope
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: For the actual identified whole asset a, use 1 complete asset * f_a,k / D_k Item(s), with current beneficiary exposure x_a,k and total lifetime exposure L_a giving f_a,k = x_a,k / L_a. Apply the signed historical and retirement corrections in asset_ledger to the original beneficiary cohorts. Count complete objects or fractional object equivalents, never unrelated repair-material masses; exclude operating utilities, separately measured maintenance and terminal treatment. Heat-pump cards are conditional on evidenced equipment presence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Complete unpowered steel display shelf (`shelf_capital`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Complete unpowered steel display shelf
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: For the actual identified whole asset a, use 1 complete asset * f_a,k / D_k Item(s), with current beneficiary exposure x_a,k and total lifetime exposure L_a giving f_a,k = x_a,k / L_a. Apply the signed historical and retirement corrections in asset_ledger to the original beneficiary cohorts. Count complete objects or fractional object equivalents, never unrelated repair-material masses; exclude operating utilities, separately measured maintenance and terminal treatment. Heat-pump cards are conditional on evidenced equipment presence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Complete electronic point-of-sale terminal (`pos_capital`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Complete electronic point-of-sale terminal
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: For the actual identified whole asset a, use 1 complete asset * f_a,k / D_k Item(s), with current beneficiary exposure x_a,k and total lifetime exposure L_a giving f_a,k = x_a,k / L_a. Apply the signed historical and retirement corrections in asset_ledger to the original beneficiary cohorts. Count complete objects or fractional object equivalents, never unrelated repair-material masses; exclude operating utilities, separately measured maintenance and terminal treatment. Heat-pump cards are conditional on evidenced equipment presence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

#### Outputs

##### Waste flows

###### Complete decharged R32 heat-pump unit (`heatpump_eol`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Complete decharged R32 heat-pump unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the whole terminal carrier q_terminal in kg actually handed to the named receiver. Apply final terminal-responsibility share h_a,k exactly once: exchange = q_terminal * h_a,k / D_k; do not multiply this amount again by manufacturing fraction f_a,k. Retain a whole-carrier count/net-mass cross-check; for POS the exchange is complete-terminal count and kg is cross-check only. Reconcile terminal totals and post revised actual amounts back to original cohorts; unobserved disposal is a disclosed future scenario. Heat-pump carrier excludes separately recovered R32. Exclude treatment already carried elsewhere.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Mixed retail-building demolition waste carrier (`building_eol`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Mixed retail-building demolition waste carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the whole terminal carrier q_terminal in kg actually handed to the named receiver. Apply final terminal-responsibility share h_a,k exactly once: exchange = q_terminal * h_a,k / D_k; do not multiply this amount again by manufacturing fraction f_a,k. Retain a whole-carrier count/net-mass cross-check; for POS the exchange is complete-terminal count and kg is cross-check only. Reconcile terminal totals and post revised actual amounts back to original cohorts; unobserved disposal is a disclosed future scenario. Heat-pump carrier excludes separately recovered R32. Exclude treatment already carried elsewhere.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Complete discarded steel display shelf (`shelf_eol`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Complete discarded steel display shelf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the whole terminal carrier q_terminal in kg actually handed to the named receiver. Apply final terminal-responsibility share h_a,k exactly once: exchange = q_terminal * h_a,k / D_k; do not multiply this amount again by manufacturing fraction f_a,k. Retain a whole-carrier count/net-mass cross-check; for POS the exchange is complete-terminal count and kg is cross-check only. Reconcile terminal totals and post revised actual amounts back to original cohorts; unobserved disposal is a disclosed future scenario. Heat-pump carrier excludes separately recovered R32. Exclude treatment already carried elsewhere.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Complete discarded electronic point-of-sale terminal (`pos_eol`)

This exchange crosses the stated process boundary; its applicable raw total and attribution are retained separately.

- Selected flow: Complete discarded electronic point-of-sale terminal
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Measure the whole terminal carrier q_terminal in Item(s) actually handed to the named receiver. Apply final terminal-responsibility share h_a,k exactly once: exchange = q_terminal * h_a,k / D_k; do not multiply this amount again by manufacturing fraction f_a,k. Retain a whole-carrier count/net-mass cross-check; for POS the exchange is complete-terminal count and kg is cross-check only. Reconcile terminal totals and post revised actual amounts back to original cohorts; unobserved disposal is a disclosed future scenario. Heat-pump carrier excludes separately recovered R32. Exclude treatment already carried elsewhere.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_pool | Prefer direct event attribution and submeters. Allocate only the residual shared pool among all actual beneficiaries: lighting/comfort electricity by measured occupied floor-area hours, handling/checkout by observed task seconds, bags/boxes by occupied packed volume, cleaning by logged cleaned area and events. Retain idle/closed/failure/zero-driver quantities. Distribute idle residual within a prospectively declared same-site/configuration annual pool using cumulative occupied area-hours; if all drivers are zero, keep the pool unallocated and incomplete. Sum allocated quantities equals each full measured pool, no sales-only denominator or economic fallback. | ghg-product-2011 |
| asset_ledger | For each persistent asset a and each period/beneficiary cohort k, record complete manufacturing/installation burden B_a, measured exposure x_a,k, total expected lifetime exposure L_a and the posted fraction. The provisional current fraction is f_a,k = x_a,k / L_a; the capital quantity is 1 complete asset * f_a,k / D_k and its upstream burden is B_a * f_a,k / D_k. Keep L_a no smaller than cumulative actual exposure and total posted fractions no greater than 1. After exposure or lifetime revision, compute corrected f_new = x_new / L_new for every affected historical cohort and post signed correction (f_new - f_posted) to that original cohort numerator; revise its normalization if D_k also changes. Never restart B_a. At retirement compute R_a = 1 - sum(corrected lifetime fractions), and distribute that final residual to the same previously declared full-lifetime beneficiaries using w_a,k = x_a,k / sum(all actual lifetime exposures), including idle and failed cohorts; write R_a * w_a,k back to each original capital numerator. Final responsibility h_a,k = corrected f_a,k + R_a * w_a,k must sum to 1. A zero total exposure or entirely zero-output beneficiary pool remains explicit and unnormalizable. For each actual terminal carrier use its measured whole mass or complete count * h_a,k / D_k exactly once; never multiply by f_a,k again. Reconcile the sum of all terminal allocations to the one actual terminal carrier; replace prior future scenarios by signed actual-minus-posted corrections to their original cohorts. Maintenance/replacements are dated actual events with specific cards unless evidenced inside a disjoint supplier package. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | accepted_service; failed_goods_background; external_refusal; supplier_return; donated_jar | event_ledger | jar_id; SKU; species; extraction_style; floral_origin; declared_fill; measured_gross_mass; matched_tare; seal_state; moisture_state; receive_gate; supplier; receipt_id; original_cohort; actual_event_date; stock_open; stock_close; acceptance; external_retained_refusal_F; price_refund; physical_return; resale; loss; final_recipient; final_fate; upstream_owner; inbound_and_return_transport | Scan unique jars and reconcile POS, physical stock and receiver confirmations; calibrate scales with check weights and retain tare sample linkage. Log seal, leakage and fermentation inspection; crystallization is a state observation, not automatic spoilage. Track supplier returns until named final responsibility. Apply denominator and goods_responsibility to unique records; preserve raw totals and normalize applicable rows once per reference flow | Item(s); kg | Every receipt, movement and fate event; physical stock at period boundaries | Entire prospectively declared annual same-SKU pool, including closed/idle/failed/zero-sales periods and late corrections | Receiving gate through store customer handover and continuing failure-fate chain | per reference flow | Signed receipt/POS exports, scales calibration, stock reconciliation, background gate/scope matrix and recipient confirmations |
| cp_retail_power | retail | retail_power | meter_record | meter_id; opening_kWh; closing_kWh; timestamp; circuit_map; climate_submeter; beneficiary; area_hours; task_seconds; idle_residual; provider_scope; meter_mode; contains_climate; actual_overlap | Read calibrated main/circuit/submeters and reconcile utility invoices. Verify the circuit map and declare one mode: main retail meter contains climate, subtract the matched climate quantity once; disjoint retail/climate submeters, do not subtract. Remove package-supplied energy only from a proven containing reading or package and never from already disjoint quantities. Survey all loads, voltage, location and provider delivery boundary. Convert using physical_conversion, allocate_pool, divide once by D per reference flow | kWh; MJ | At least each billing interval and configuration change | Full annual pool with idle and closed periods | Store receiving, display and checkout circuits | per reference flow | Meter calibration, bills, circuit map and allocation reconciliation |
| cp_consumables | retail | cleaner; cellulose_wipe; kraft_bag; receipt_paper | stock_and_event_record | material_id; formulation; concentration; unit_mass; opening_stock; receipts; closing_stock; unused_returns; spill_id; jar_id; issue_count; printed_length; packed_volume; cleaned_area; beneficiary | Weigh each actual material/formulation separately with calibrated scale; stock balance and event issue logs identify actual consumption and absence. Cleaner is one real aqueous product, not an invented mixture of other cleaning agents. Raw consumed mass, direct events then residual allocate_pool; no duplicate composition fraction; divide once by D per reference flow | kg; Item(s) | Each issue/spill; stock per interval | Full annual pool including unsuccessful handling and repeats | Honey aisle and actual shared beneficiaries | per reference flow | Supplier composition, stock invoices, calibration, issue records and absence survey |
| cp_waste | retail | broken_jar_waste; discarded_jar_waste; cardboard_waste; used_wipe_waste | handover_record | carrier_id; spill_id; jar_id; receiver; fate; date; gross_mass; container_tare; moisture; separated_components; absorbed_liquid; transport_scope; treatment_scope; beneficiary | Weigh each physically segregated carrier at transfer with calibrated scale; reconcile signed weighbridge/receiver tickets and jar fates; document actual whole mixture and contaminants, avoiding double constituent rows. Sum net carrier masses once, allocate shared cardboard and cleaning carrier by allocate_pool, divide once by D per reference flow | kg | Every spill/collection/handover | Full annual pool plus late-return corrections | Store waste exit to named receiving transport/treatment system | per reference flow | Calibration, tare checks, transfer notes, photos, fate ledger and treatment scope matrix |
| cp_water | retail | clean_water; wash_effluent | meter_and_balance_record | inlet_meter; discharge_meter; volume; timestamp; temperature; measured_density; mode; solution_mass; honey_in_liquid_mass; wipe_retention_mass; waste_retention; evaporation; storage_change; other_exports; reuse_loop; cleaning_event; beneficiary; sewer_receiver | Read calibrated separate inlet/discharge meters; sample actual effluent density at recorded temperature. If reconstructing, measure every correction and disclose uncertainty; never mix modes. Identify reused internal water separately from fresh imports and actual sewer discharge. Apply water_balance exclusively, allocate_pool once, divide by D once per reference flow | m3; kg | Each cleaning event or bounded metering interval | Full annual pool including spill failures and closed-period cleaning | Store inlet and actual sewer outlet | per reference flow | Meter calibration, density method, balance uncertainty, sewer records and mode declaration |
| cp_climate | climate | climate_power; r32_topup; r32_air; r32_recovery | equipment_meter_and_mass_balance | equipment_id; R32_identity; charge_open; charge_close; additions; recoveries; cylinder_tare; service_date; commissioning; retirement; meter_kWh; zone_area_hours; idle_residual; beneficiary | Inspect nameplate and service logs; calibrate electricity meters and refrigerant scales. Close charge/addition/recovery balance with actual recovery receivers; resolve negative or unknown residuals. Absence requires equipment survey and invoices, not a zero placeholder. Closed mass balance for air release, kWh conversion; allocate_pool including all zones, divide once by D per reference flow | kWh; MJ; kg | Each service/charge/retirement and meter interval | Full annual equipment operation including idle periods | Documented R32 comfort heat pump serving actual store zones | per reference flow | Nameplate, calibration, service/recovery certificates, zone survey and full pool reconciliation |
| cp_assets | assets | heatpump_capital; building_capital; shelf_capital; pos_capital; heatpump_eol; building_eol; shelf_eol; pos_eol | persistent_asset_ledger | asset_id; configuration; manufacture_installation_boundary; B; acquisition_date; beneficiary; exposure; L; prior_fraction; residual; revision; maintenance_event; terminal_count; terminal_net_mass; receiver; treatment_scope; x_a,k; L_a; f_posted; f_new; signed_correction; R_a; w_a,k; h_a,k; terminal_prior_scenario | Inventory actual whole building shell, shelf, POS and R32 heat pump separately; heat pump capital includes factory charge, terminal unit mass excludes separately recovered gas. Retain supplier whole-asset inventory and package exclusions; survey floor-area hours for shell/shelf, conditioned-zone area-hours for the heat pump and checkout active time for POS including attributed idle exposure. Establish L from dated design-life evidence, service history and measured/planned exposure with disclosed uncertainty, revise prospectively with historical corrections and retain final residual; never assume a default life. Weigh terminal whole carriers or use traceable whole-object records. Record dated maintenance/replacement and add actual atomic cards unless evidenced inside a disjoint package. Apply asset_ledger f=x/L to whole-asset capital, retain signed original-cohort historical corrections and retirement R*w residual postings; terminal whole-carrier quantities use h exactly once without another f, then divide each attributed amount once by original D per reference flow | Item(s); kg; m2*h; s | Each acquisition, period allocation, revision, maintenance and terminal event | Every historical and future lifetime period, never resetting on study rollover | All beneficiaries of the same identified asset, beyond honey and beyond current site if moved | per reference flow | Asset register, original supplier scope, cumulative allocation proof, revision log, terminal tickets and mass/count reconciliation |
| cp_transport | retail | external_transport; empty_road_movement | consignment_route_record | consignment_id; jar_ids; original_cohort; actual_date; sender; receiver; gross_tonnes; loaded_km; empty_km; all_route_loads; allocation; provider_package_boundary; upstream_owner; empty_trip_id; empty_vehicle_km; provider_empty_coverage; dispatch_driver; corresponding_overlap; transport_mode | Use actual waybills, load weighing, GPS/odometer and dispatch routes to reconcile every loaded and empty trip, including a trip with zero tonnes and zero t*km. Verify fuel, exhaust, vehicle capital/maintenance/end-of-life and measured empty-route coverage in the selected provider dataset. Declare mutually exclusive provider-covered or separate vehicle-km mode. If covered, retain actual empty-trip/dispatch-to-provider coverage evidence; otherwise calculate the explicit empty_road_movement row and subtract the same evidenced empty burden from loaded provider inventory once. Unknown coverage, unquantified subtraction or zero causal dispatch drivers blocks completion. Preserve all actual travel and never use zero t*km to erase it; no duplicated inbound freight. Sum gross tonnes times distance; allocate full route once, divide once by D per reference flow | t*km; vehicle*km | Every actual consignment and route | Full annual pool and late fate revisions | Actual store to supplier or donation receiver by declared road route | per reference flow | Waybills, scale checks, route log, receiver confirmations and provider scope matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| denominator | accepted_service | D = unique finally accepted same-SKU jars after physical reversals, with one surviving acceptance per jar; financial price-only refunds leave D unchanged and external retained refusal F is excluded. Record actual event date and original cohort. A late return corrects original D, all attributable retail/climate/asset numerators, upstream coupling and fate records; never place its burdens only in a new cohort. Carry failures and unsold stock into a prospectively fixed same-configuration annual pool. Entirely zero-output pools retain quantities and are not normalized. | jar_id; cohort_id; acceptance; physical_return; actual_event_date | D | ghg-product-2011 |
| normalize_service | all inventory rows | For each exchange, aggregate raw quantities by unique record, perform physical conversion, attribute once using allocate_pool or asset_ledger, then divide once by D. The service output is 1 Item(s). Raw totals, attribution fractions and final amounts remain separately auditable. D must be positive; unknown inputs are not zero. | raw_quantity; attribution_fraction; D | exchange_per_reference_flow | ghg-product-2011 |
| water_balance | clean_water; wash_effluent | Choose exactly one discharge mode. Metered: effluent_kg = V_discharge * rho_effluent, with no evaporation correction. Reconstructed, only if discharge meter unavailable: effluent mass = imported water mass + actual cleaning-solution mass + honey mass entering liquid - liquid retained in wipes/waste - evaporated mass - net liquid-storage mass increase - other measured liquid-export mass. Convert volumes to mass using each measured density at recorded temperature, and keep dry wipe mass outside this liquid balance; do not add internal recirculation. Measure all corrections and uncertainty; unresolved terms block use. Inlet water remains inlet_volume * rho_water and never subtracts reuse. | inlet_volume; V_discharge; rho_water; rho_effluent; correction_fields; discharge_mode | clean_water_kg; effluent_kg | jrc-retail-2013 |
| physical_conversion | retail_power; climate_power; cleaner; failed_goods_background; broken_jar_waste; discarded_jar_waste | Electricity_MJ = metered_kWh * 3.6. Honey net mass is measured gross jar mass minus matched empty-jar/lid/label tare at actual moisture state; do not use water density for honey. Package/waste whole-carrier mass is distinct from honey net mass. Cleaner whole-solution mass is not multiplied by concentration again. Count-to-mass conversions use measured same-SKU mass and recorded uncertainty, never a default fill mass. | metered_kWh; gross_mass; matched_tare; solution_mass; concentration | converted_quantity | fao-honey-1996 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_asset_scopes | heatpump_capital; building_capital; shelf_capital; pos_capital; heatpump_eol; building_eol; shelf_eol; pos_eol | Define mutually exclusive complete assets: building shell includes foundations, structure and fixed envelope only, excluding heat pump, movable shelves, POS, operating utilities and separately recorded repairs. Shelf is the complete unpowered steel shelf only, excluding building/POS/heat pump and lighting. POS is the complete terminal only, excluding premises, shelf, heat pump and separately identified peripherals. Heat pump is the complete installed unit including factory R32 charge only, excluding building shell, shelf, POS, replacement refrigerant, operating electricity and terminal gas recovery/treatment. Manufacturing inputs exclude all terminal treatment represented by waste outputs; maintenance and replacements remain dated actual events with separate atomic cards when present. Survey other fixed equipment and add its explicit mutually exclusive scope before completeness; unknown composition or supplier package overlaps block use. | Asset component scope matrix; supplier inventory; installation records; package exclusions; maintenance survey |
| quality_configuration | all inventory rows | Declare one SKU with species Apis mellifera, natural extracted honey, no added ingredients, recorded floral/geographic origin, net fill/tare, jar/lid/label specification, liquid/crystallized condition, seal, ambient storage history and acceptance evidence. Do not combine different fill masses, package types or transformations in one D. No numerical food-safety limits or source-mandated temperature defaults are introduced. | Supplier specification; jar sampling; environment log; inspection and acceptance records |
| quality_completeness | all inventory rows | Collect full site/calendar coverage with missing intervals and uncertainty disclosed; reconcile every conditional process presence/absence. Actual unlisted exchanges must gain named atomic cards, matching process protocols and bilingual projection before completeness. Bind all unresolved identities and actual provider/treatment data; methodology leaves quantities to site measurement, not zeros or invented ranges. | Coverage calendar; equipment/material survey; row-level binding dossier; uncertainty register |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_identity | Every binding requires an original official flow response and integrity receipt verifying UUID, public state, bilingual name, product/waste/elementary type, state/medium, property/unit chain and reference role. Generic count/mass properties do not identify a honey retail service or complete asset. Unbound cards remain explicitly unresolved and block quantitative dataset completeness until one compatible identity and provider/treatment boundary are confirmed. | ghg-product-2011 |
| validate_goods | Reconcile each unique jar: opening stock + receipts + physical customer returns = gross physical customer handovers + external retained refusal F + supplier returns + donations + discarded/lost departures + closing stock, with internal movements cancelling; gross accepted handovers include subsequently returned departures, exclude F, and differ from corrected unique D. Deduplicate resale history for D only. Distinguish payments, price refunds and physical movements. Reconcile net honey and whole-package masses separately, record residue transfers to wipes/effluent without duplication. No crystallization-only automatic loss: inspect actual acceptance and fate. | fao-honey-1996 |
| validate_scope | Require positive D, corrected late-event cohort numerators, complete annual zero-output retention, full shared-pool reconciliation, persistent asset fractions and terminal residual allocation, exact supplier-package scope deduplication and actual water-mode consistency. Any missing quantity, unknown conditional activity, unclosed fate/background responsibility or unsupported identity is an explicit incomplete result, not zero or compliance. Add actual additional exchanges before completeness. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Incremental ambient sealed-jar honey retail service unit process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same SKU, channel, gate and responsibility configuration after identity/quantity completion |
| excluded_use | Full honey product footprint, whole CPC coverage, food safety certification, supplier compliance, unmatched jars or channels |
| required_metadata | All reference qualifiers; D; site/calendar; provider gates; late-event version; unique goods and asset ledger links |
| required_quality_disclosure | Missing records/identity/provider gaps, uncertainty, zero-output pools, future terminal scenarios and background responsibility unresolved |
| update_trigger | Physical return/final fate, SKU/package/gate/equipment change, corrected measurements, revised asset lifetime or supplier scope |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc62119 | official_guidance | UNSD CPC 3.0 subclass 62119; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62119 | Natural honey is an explicitly listed merchandise subset; this PCR selects a narrower retail-service route, not the whole leaf. |
| fao-honey-1996 | handbook | FAO Agricultural Services Bulletin 124, Value-added products from beekeeping (1996), chapter 2 sections 2.1–2.3; https://www.fao.org/4/W0076e/w0076e04.htm | Honey identity, species scope, physical state, moisture/density dependence and crystallization context only. No tabulated factor or safety limit is adopted. |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN (2013), scope and section 1.2 pp.4–6; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail direct/indirect activity screening; category-specific cards and allocation drivers are PCR design decisions verified by foreground records, not a mandate or performance benchmark of this report. |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9 p.63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision and physical allocation principles; this incremental service boundary, pools, lifetime ledger and loss coupling are explicit PCR choices, not a claim of full-standard conformity. |
