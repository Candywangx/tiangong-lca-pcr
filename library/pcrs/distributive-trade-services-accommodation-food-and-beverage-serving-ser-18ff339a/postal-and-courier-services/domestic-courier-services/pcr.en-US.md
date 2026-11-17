---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.domestic-courier-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Domestic ambient road-parcel courier services

## 1. Scope and Applicability

This candidate PCR covers a non-universal-service-obligation domestic parcel courier network, from physical acceptance of a sealed addressed parcel to evidenced conforming delivery, including collection, electrically operated depot handling, road trunk legs and last-mile delivery. Owned diesel, petrol and battery-electric road delivery vans and contracted road legs may coexist only on distinct recorded segments. It is a narrower part of CPC 68021, not a rule for every domestic courier product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.domestic-courier-services |
| classification_refs | CPC 3.0 68021; narrower |
| covered_products | Domestic non-USO addressed ambient road parcel courier service using owned delivery vans and, where needed, separately contracted trunk transport through electrically operated depots |
| excluded_products | Letters; bicycle messenger; international consignments; USO services; local retail/food delivery; refrigerated, frozen, dangerous or live cargo; air, rail and sea legs; fuel-fired depot heating or material handling |
| representative_product | One qualifying parcel delivered within one declared domestic road service class |
| production_route | Acceptance → collection → electrical sort/handling → road trunk → last mile → conforming delivery; actual repeated/return legs remain attributable |
| market_state | Completed courier service, not ownership or production of the parcel contents |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver an accepted addressed parcel to its domestic contractual recipient |
| How much | 1 conforming delivered parcel service; one parcel is one independently tracked physical handling unit |
| How well | Declared service class, intactness/receipt criterion, destination and promised transit window; evidence must meet the contracted acceptance test |
| How long or cycle | Full closed acceptance cohort from acceptance to final delivery, return, loss or cancellation resolution; disclose actual transit distribution |
| reference_flow_link | delivered_parcel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Domestic ambient road-parcel courier delivery service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Country; non-USO status; acceptance cohort and closure date; service/time class; parcel mass and external dimensions distribution; road distance and modes; route/vehicle and depot energy scope; ownership/contract split; receipt and damage criteria; rejection/return/loss rates; allocation drivers and upstream boundary; identity gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_count` | delivered_parcel | Number of items | Item(s) | Count each unique physical parcel once only at first conforming delivery. One consignment can contain multiple parcels; never count a shipment label, scan, stop, attempt or tonne-kilometre as a delivered parcel. |
| `normalization` | all inventory rows | Declared row property | Declared row unit | Use cohort-allocated raw totals A_r and N conforming delivered parcels: q_r=A_r/N, once only; N>0. Intermediate flows use their measured quantities, never automatically 1. |
| `electricity_basis` | road_electricity; depot_electricity | Net calorific value | MJ | Point-of-use AC input: MJ=3.6*kWh at the AC meter; include charger losses once and separate traction from depot meter. Voltage, grid geography and period must be collected. Battery stored energy is not an extra product input. |
| `mass_conversion` | diesel; petrol; lubricating_oil; all material/waste/emission rows | Mass | kg | For fuel measured in litres use batch-specific density at recorded temperature: kg=V_L*rho; retain blend, biofraction and lower heating value if factor conversion needs them. Do not impose a generic density or convert mass/volume/count without measured support. |
| `asset_units` | diesel_van; petrol_van; electric_van; sorting_machine | Number of items | Item(s) | A fractional complete asset is counted against demonstrated lifetime activity; no default lifetime. Exclude original embedded batteries/tyres/components from replacement rows. No Item(s) substitution for hours, kg or tkm. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sealed addressed parcel physically accepted into the non-USO domestic road service; contents and customer-supplied packaging already exist |
| starting_condition_role | Input condition; customer goods remain an entrusted object, not an upstream courier service input |
| product_classification_scope | Narrower than CPC 3.0 68021; excludes all routes and products listed in section 2 |
| recursive_input_rule | Apply boundary_atomic_support: external activities enter through a defined single-unit service interface; do not recursively expand supplier internals. Foreground physical processes retain their existing cards and rules. Custody cargo is not a manufactured input. |
| upstream_dataset_requirement | Keep a signed scope-ownership matrix for each service contract and background dataset: exact gates, route/configuration, place/period, native reference unit, quality, supply/operation/empty/failure/maintenance/capital/terminal coverage, all-user allocation and foreground overlaps. Background coverage must preserve the existing lifecycle obligations and candidate allocation policies; it may be documented by a compatible dataset and supplier scope declaration without obtaining every internal exchange. Purchased quantity is measured at the interface; bundled independent services or incompatible units require separate concrete rows. For partial coverage partition by evidenced event/component first. Keep operator-owned assets, separately supplied energy/materials, customer-provided parts and operator-retained waste only in their own physical rows and exclude them from the supplier inventory. Suppress only identical covered supplier components; retain excluded real components through their own specific interface/physical rows. Never add the detailed counterpart to a service covering it; never erase burden because supplier detail is unavailable. Missing service-unit conversion, identity, coverage or a required complementary component blocks completeness, not zero. Existing narrower product applicability, physical stock balances, original-cohort corrections and receipt evidence remain mandatory for their actual owners. |
| disclosure | Declare accepted cohort, closure, route class, depot electrical scope, embodied asset/EOL coverage, outsourced inclusions, occurrence evidence and all unresolved identities or missing exchanges |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_service` | All acceptance, collection, depot handling, actual road movements, failed attempts, attributable empty running, return handling and incident resolution of the closed cohort are included. Final gate is conforming receipt; failed cases end at documented return, loss, pre-dispatch cancellation/handback or final nonconforming delivery closure and stay in the numerator. | `un-cpc-68021`; `ghg-transport-2013` |
| `boundary_exclusions` | Exclude manufacture/use of entrusted goods and pre-existing customer packaging, recipient travel beyond the agreed gate, employee commuting and unrelated corporate services. Courier-added labels, tape and repair boxes are included. No avoided-product credits for loss or recovery. | `un-cpc-68021`; `ghg-transport-2013` |
| `boundary_assets` | Include apportioned vehicles, sorting equipment and depot building use, maintenance/replacement and actual end-of-life treatment once. Document complete-asset dataset inclusions: original components, replacements, maintenance and EOL must not overlap separate rows. Tyre wear and refrigerant release are direct emissions when they occur. Where a complete-asset or maintenance background dataset includes use-phase wear, refrigerant releases or the same waste treatment, remove that overlapping module before adding explicit release/treatment rows; an inseparable overlap means incomplete results. Residual spent tyre/oil quantities are measured transfers, not original input masses; reconcile inputs with wear, leakage, retained stock and transferred waste so released mass is never sent again to treatment. | Apply foreground_interface_coverage: outside foreground use the specific service interface; the following detailed physical requirements apply only to foreground-owned components. `un-cpc-68021`; `ghg-transport-2013` |
| `boundary_occurrence` | This is an ambient road route with electrically operated depots, not a promise that every site fits it. Verify all fuels, chemicals, water, heating, cleaning, refrigerants, wastewater, packaging, waste and releases by bills, site walkthrough and maintenance records. Other actual atomic exchanges must be added in bilingual cards/protocols and resynced before a dataset can claim completeness; fuel-fired depots or nonroad/cold-chain legs are outside scope. Unknown occurrence is not absence. | `un-cpc-68021`; `ghg-transport-2013` |
| `boundary_supplier` | Each leg retains its unique operator/provider, actual native activity and original allocation. For independent external carriage use svc_contracted_road or svc_contracted_attempt at their mutually exclusive leg/attempt gates. Operator-responsible physical components retain their existing supplies and releases. Under foreground_interface_coverage, never duplicate fuel, electricity, assets, maintenance, empty travel, emissions or treatment included by a service or another inventory owner. Missing scope needs a specific non-overlapping interface or foreground row; otherwise completeness is blocked. | `un-cpc-68021`; `ghg-transport-2013` |

### Atomic supporting-activity boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | supporting activities | Each active exchange represents one defined material, equipment or service object with one primary property and unit. A service is not disallowed merely because it has upstream processes. Fix responsibility by provider, contract, site, event, gate and scope component before quantification. Operator-run processes and separately commissioned onsite tasks under operator inventory responsibility use foreground physical rows. Independently provided activities outside that responsibility use their specified service-interface rows; supplier manufacture, utilities, maintenance and waste remain in the matched background service, not extra foreground exchanges. A contract alone does not turn supplier internals into foreground. Do not change the product, route, custody gates or original reference denominator. Apply foreground_interface_method and foreground_interface_coverage; boundary changes need PCR review, not a data-availability choice. Ownership here means inventory responsibility, not legal title alone: rented equipment provision may be an external service while separately metered operator-run electricity remains foreground. |  |
| foreground_interface_coverage | all support processes and overlaps | Keep a signed scope-ownership matrix for each service contract and background dataset: exact gates, route/configuration, place/period, native reference unit, quality, supply/operation/empty/failure/maintenance/capital/terminal coverage, all-user allocation and foreground overlaps. Background coverage must preserve the existing lifecycle obligations and candidate allocation policies; it may be documented by a compatible dataset and supplier scope declaration without obtaining every internal exchange. Purchased quantity is measured at the interface; bundled independent services or incompatible units require separate concrete rows. For partial coverage partition by evidenced event/component first. Keep operator-owned assets, separately supplied energy/materials, customer-provided parts and operator-retained waste only in their own physical rows and exclude them from the supplier inventory. Suppress only identical covered supplier components; retain excluded real components through their own specific interface/physical rows. Never add the detailed counterpart to a service covering it; never erase burden because supplier detail is unavailable. Missing service-unit conversion, identity, coverage or a required complementary component blocks completeness, not zero. Existing narrower product applicability, physical stock balances, original-cohort corrections and receipt evidence remain mandatory for their actual owners. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| service | Courier service orchestration and outsourced legs | required | All cohort records | reference process | N delivered_parcel; outsourced legs measured independently |
| road | Owned road collection, trunk and delivery | conditional | Owned physical segments only | foreground operation | Actual vehicle-km, stop/minutes, fuel/energy and parcel load, not N vehicle-km |
| depot | Electrical depot sorting and handling | required | Sites handling the selected cohort | foreground operation | Actual parcel handling/pass time and metered utility totals |
| support_contracted_road | Support interface / foreground activity: Ambient contracted courier road carriage on a declared leg | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace the full purchased carrier lifecycle service on its existing exclusive segment/attempt boundary with supplier-owned physical inventories. Keep custody gates, all customers, failed/repeated attempts, empty returns, idling and terminal losses. No overlap with operator-owned legs or another supplier service. | support | allocation to delivered_parcel |
| support_contracted_attempt | Support interface / foreground activity: One contracted courier parcel delivery attempt | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace the full purchased carrier lifecycle service on its existing exclusive segment/attempt boundary with supplier-owned physical inventories. Keep custody gates, all customers, failed/repeated attempts, empty returns, idling and terminal losses. No overlap with operator-owned legs or another supplier service. | support | allocation to delivered_parcel |
| support_road_infrastructure | Support interface / foreground activity: Use of a specified road section by a declared vehicle class | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace road lifecycle provision with one real complete specified constructed section at construction-completion/open-to-traffic gate; later maintenance/renewal and EOL are separate physical exchanges. | support | allocation to delivered_parcel |
| support_charging_asset_service | Support interface / foreground activity: Availability of a configured charging apparatus, excluding electricity | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace lifecycle availability hours with a genuine complete factory-gate charger product plus actual external installation, replacement maintenance and EOL. H_k remains an attribution driver, not a physical flow or an item equivalence. | support | allocation to delivered_parcel |
| support_depot_building | Support interface / foreground activity: Courier depot shell occupancy, excluding operation utilities | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. | support | allocation to delivered_parcel |

### Process: Courier service orchestration and outsourced legs (`service`)

#### Inputs

##### Product flows

#### Outputs

##### Product flows

###### Domestic ambient road-parcel courier delivery service (`delivered_parcel`)

Required reference service output.

- Selected flow: Domestic ambient road-parcel courier delivery service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cohort`
- Sources: `ghg-transport-2013`

### Process: Owned road collection, trunk and delivery (`road`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Only self-operated vehicles actually burning this exact fuel; record grade, blend and biofraction.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Allocated consumed fuel mass from tank balance and segment/activity ledger / N; purchases alone are not consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_road`
- Sources: `ghg-transport-2013`

###### Petrol fuel (`petrol`)

Only self-operated vehicles actually burning this exact fuel; record grade, blend and biofraction.

- Selected flow: Petrol fuel
- Flow property / unit: Mass / kg
- Amount rule: Allocated consumed fuel mass from tank balance and segment/activity ledger / N; purchases alone are not consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_road`
- Sources: `ghg-transport-2013`

###### Alternating current (`road_electricity`)

Self-operated battery-electric road segments; provider and voltage unspecified by the flow identity. Calculation: calc_electric_stock; the result is already on the original reference basis.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6*K_traction/N
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_road`
- Sources: `ghg-transport-2013`

###### Complete diesel road parcel-delivery van (`diesel_van`)

Owned or leased actual vans; each vehicle subtype requires one compatible atomic binding before dataset completion.

- Selected flow: Complete diesel road parcel-delivery van
- Flow property / unit: Number of items / Item(s)
- Amount rule: Sum each actual vehicle allocated cohort vehicle-km / evidenced lifetime vehicle-km, then / N; this card is for its named powertrain only; bind the actual compatible model without mixing distinct vehicles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-transport-2013`

###### Complete petrol road parcel-delivery van (`petrol_van`)

Owned or leased actual vans; each vehicle subtype requires one compatible atomic binding before dataset completion.

- Selected flow: Complete petrol road parcel-delivery van
- Flow property / unit: Number of items / Item(s)
- Amount rule: Sum each actual vehicle allocated cohort vehicle-km / evidenced lifetime vehicle-km, then / N; this card is for its named powertrain only; bind the actual compatible model without mixing distinct vehicles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-transport-2013`

###### Complete battery-electric road parcel-delivery van (`electric_van`)

Owned or leased actual vans; each vehicle subtype requires one compatible atomic binding before dataset completion.

- Selected flow: Complete battery-electric road parcel-delivery van
- Flow property / unit: Number of items / Item(s)
- Amount rule: Sum each actual vehicle allocated cohort vehicle-km / evidenced lifetime vehicle-km, then / N; this card is for its named powertrain only; bind the actual compatible model without mixing distinct vehicles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-transport-2013`

###### Replacement road-vehicle tyre (`replacement_tyre`)

Only documented maintenance/replacement not included in the complete asset dataset.

- Selected flow: Replacement road-vehicle tyre
- Flow property / unit: Mass / kg
- Amount rule: Determine actually fitted replacement tyre mass from net issues, maintenance job cards and stock reconciliation, exclude original embedded tyres, attribute to actual maintenance and / N; do not multiply by complete-vehicle lifetime fractions again
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-transport-2013`

###### Road-vehicle lubricating oil (`lubricating_oil`)

Only documented maintenance/replacement not included in the complete asset dataset.

- Selected flow: Road-vehicle lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Allocate actual new lubricant fill mass from maintenance job cards reconciled with new-oil issues, returns and stock balance, then / N; drained spent oil is a separate waste output and is not deducted from new-oil input
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-transport-2013`

###### Replacement lithium iron phosphate traction battery (`replacement_battery`)

Only documented maintenance/replacement not included in the complete asset dataset.

- Selected flow: Replacement lithium iron phosphate traction battery
- Flow property / unit: Mass / kg
- Amount rule: Determine actually fitted replacement battery mass from net issues, maintenance job cards and stock reconciliation, exclude the original complete-vehicle battery, attribute to actual maintenance and / N; do not multiply by complete-vehicle lifetime fractions again; only lithium iron phosphate chemistry; another actual chemistry requires its own named card and compatible binding
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-transport-2013`

###### Purchased new R134a accepted for self-operated vehicles (`r134a_new_external`)

Only for evidenced externally acquired new R134a physically delivered for HVAC of self-operated vehicles. Purchased reclaimed supply uses its own product row. Original fill belongs to the complete vehicle; internal reuse and custody returns create no new supply. Use the chemical kg attributed by source lot and beneficiary event under section 8; unused receipt stock does not enter this cohort directly.

- Selected flow: Purchased new R134a accepted for self-operated vehicles
- Flow property / unit: Mass / kg
- Amount rule: A_supply/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`

###### Purchased reclaimed R134a accepted for self-operated vehicles (`r134a_reclaimed_external`)

Only for externally reclaimed R134a with evidenced acquisition of title, physical delivery and recharge acceptance for HVAC of self-operated vehicles. Apply `inv_reclaimed_supply` in section 8.

- Selected flow: Purchased reclaimed R134a accepted for self-operated vehicles
- Flow property / unit: Mass / kg
- Amount rule: A_reclaimed/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`

#### Outputs

##### Product flows

###### Recovered R134a transferred externally as a product (`r134a_recovered_product`)

Only for an evidenced external handover of this chemical with its identified receiver and product status. Record batch, net mass and destination; internal storage or reuse is not this output. The other status is mutually exclusive for the same handover. Follow allocation_refrigerant_recovery for burdens; unknown is not zero. Calculation: calc_owned_r134a; the result is already on the original reference basis. Apply `inv_refrigerant_identity` in section 8.

- Selected flow: Recovered R134a transferred externally as a product
- Flow property / unit: Mass / kg
- Amount rule: A_product/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`

##### Waste flows

###### Spent road-vehicle tyre (`spent_tyre`)

Apply `inv_maintenance_waste` in section 8.

- Selected flow: Spent road-vehicle tyre
- Flow property / unit: Mass / kg
- Amount rule: sum_j(G_generated_kg_j * s_origin_j) / N
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `ghg-transport-2013`

###### Spent lubricating oil (`spent_oil`)

Apply `inv_maintenance_waste` in section 8.

- Selected flow: Spent lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: sum_j(G_generated_kg_j * s_origin_j) / N
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `ghg-transport-2013`

###### Spent lithium iron phosphate traction battery (`spent_battery`)

Apply `inv_maintenance_waste` in section 8.

- Selected flow: Spent lithium iron phosphate traction battery
- Flow property / unit: Mass / kg
- Amount rule: sum_j(G_generated_kg_j * s_origin_j) / N
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `ghg-transport-2013`

###### R134a waste at generation (`r134a_recovered_waste`)

Activate only when this named refrigerant has an evidenced irreversible waste decision and is removed from usable/recharge-ready status. The waste exchange is at generation, including retained waste and supported complete treatment owned by the original cohort. Usable recovered stock does not activate it. A different mixed carrier requires its actual identity and whole-carrier quantity in a separate row, with constituents only in balances. Later physical handover verifies the original event without transferring responsibility to the dispatch period.

- Selected flow: R134a waste at generation
- Flow property / unit: Mass / kg
- Amount rule: A_waste/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`

##### Elementary flows

###### Carbon dioxide, fossil, to outdoor air (`fossil_co2`)

Apply `inv_own_combustion` in section 8.

- Selected flow: Carbon dioxide, fossil, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Sum each owned segment activity * a compatible species-resolved factor, allocate once, then / N; factor basis must match actual fuel/technology and air compartment; never use kg CO2e as kg of this substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

###### Methane, to outdoor air (`methane`)

Apply `inv_own_combustion` in section 8.

- Selected flow: Methane, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Sum each owned segment activity * a compatible species-resolved factor, allocate once, then / N; factor basis must match actual fuel/technology and air compartment; never use kg CO2e as kg of this substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

###### Dinitrogen monoxide, to outdoor air (`nitrous_oxide`)

Apply `inv_own_combustion` in section 8.

- Selected flow: Dinitrogen monoxide, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Sum each owned segment activity * a compatible species-resolved factor, allocate once, then / N; factor basis must match actual fuel/technology and air compartment; never use kg CO2e as kg of this substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

###### Carbon monoxide, to outdoor air (`carbon_monoxide`)

Apply `inv_own_combustion` in section 8.

- Selected flow: Carbon monoxide, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Sum each owned segment activity * a compatible species-resolved factor, allocate once, then / N; factor basis must match actual fuel/technology and air compartment; never use kg CO2e as kg of this substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

###### Nitrogen monoxide, to outdoor air (`nitrogen_monoxide_air`)

One chemically specific emission, not NOx or NO2-equivalent total. Use direct species mass/factor or the evidence-bound section 8 molar-speciation rule; unknown composition or an incompatible aggregate definition blocks complete quantification.

- Selected flow: Nitrogen monoxide, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: m_NO_assigned / N; substance mass only, one normalization
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`

###### Nitrogen dioxide, to outdoor air (`nitrogen_dioxide_air`)

One chemically specific emission, not NOx or NO2-equivalent total. Use direct species mass/factor or the evidence-bound section 8 molar-speciation rule; unknown composition or an incompatible aggregate definition blocks complete quantification.

- Selected flow: Nitrogen dioxide, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: m_NO2_assigned / N; substance mass only, one normalization
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`

###### Sulfur dioxide, to outdoor air (`sulfur_dioxide`)

Apply `inv_own_combustion` in section 8.

- Selected flow: Sulfur dioxide, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Sum each owned segment activity * a compatible species-resolved factor, allocate once, then / N; factor basis must match actual fuel/technology and air compartment; never use kg CO2e as kg of this substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

###### Exhaust particulate matter below 2.5 micrometres, to outdoor air (`exhaust_pm25`)

Apply `inv_own_combustion` in section 8.

- Selected flow: Exhaust particulate matter below 2.5 micrometres, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Sum each owned segment activity * a compatible species-resolved factor, allocate once, then / N; factor basis must match actual fuel/technology and air compartment; never use kg CO2e as kg of this substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

###### Exhaust particulate matter from 2.5 to 10 micrometres, to outdoor air (`exhaust_pmcoarse`)

Apply `inv_own_combustion` in section 8.

- Selected flow: Exhaust particulate matter from 2.5 to 10 micrometres, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Sum each owned segment activity * a compatible species-resolved factor, allocate once, then / N; factor basis must match actual fuel/technology and air compartment; never use kg CO2e as kg of this substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

###### 1,1,1,2-Tetrafluoroethane, to outdoor air (`r134a_air`)

Only actual R134a mobile air conditioning leakage; other refrigerants require own chemically specific card, not this UUID. Calculation: calc_owned_r134a; the result is already on the original reference basis.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: A_air/N
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

###### Tyre-wear particulate matter below 2.5 micrometres, to outdoor air (`tyre_pm25_air`)

Actual tyre wear airborne fine fraction; other particle sizes, brake/road wear and soil/water destinations require distinct added atomic cards when present.

- Selected flow: Tyre-wear particulate matter below 2.5 micrometres, to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Allocated road activity * compatible tyre-wear PM2.5-to-air factor / N; factor already size/compartment resolved must not be multiplied by those fractions again
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `ghg-transport-2013`

### Process: Electrical depot sorting and handling (`depot`)

#### Inputs

##### Product flows

###### Alternating current (`depot_electricity`)

Actual sorting, lighting, electrical heating/cooling and IT at handling sites.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6 * cohort-allocated depot electricity kWh / N, subtract separately metered road charging from depot total before allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_depot`
- Sources: `ghg-transport-2013`

###### Complete parcel-sorting machine (`sorting_machine`)

Actual sorting machines; subtype-specific complete asset binding and included-component review required.

- Selected flow: Complete parcel-sorting machine
- Flow property / unit: Number of items / Item(s)
- Amount rule: Sum cohort machine operating hours / evidenced lifetime operating hours / N; manual-only site documents absence instead of assuming one machine
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_depot_assets`
- Sources: `ghg-transport-2013`

###### Paper parcel-address label (`paper_label`)

Only courier-added material; do not count existing customer packaging manufacture.

- Selected flow: Paper parcel-address label
- Flow property / unit: Mass / kg
- Amount rule: Allocated net added material mass from issues, returns and stock reconciliation / N; backing or adhesive of a different identity requires own row when outside the supplied material dataset
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_depot`
- Sources: `ghg-transport-2013`

###### Polypropylene parcel-sealing tape (`pp_tape`)

Only courier-added material; do not count existing customer packaging manufacture.

- Selected flow: Polypropylene parcel-sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Allocated net added material mass from issues, returns and stock reconciliation / N; backing or adhesive of a different identity requires own row when outside the supplied material dataset
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_depot`
- Sources: `ghg-transport-2013`

###### Corrugated fibreboard repair box (`corrugated_box`)

Only courier-added material; do not count existing customer packaging manufacture.

- Selected flow: Corrugated fibreboard repair box
- Flow property / unit: Mass / kg
- Amount rule: Allocated net added material mass from issues, returns and stock reconciliation / N; backing or adhesive of a different identity requires own row when outside the supplied material dataset
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_depot`
- Sources: `ghg-transport-2013`

#### Outputs

##### Waste flows

###### Waste paper address labels (`waste_label_paper`)

Documented generated separated material waste; customer contents not silently included.

- Selected flow: Waste paper address labels
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort attributed generated paper-based label/liner waste kg / N under the section 8 waste-origin rule, including retained mass and its supported eventual treatment; composition and actual/prospective receiver route must match this one stream, with no dispatch-period recount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_depot_waste`
- Sources: `ghg-transport-2013`

###### Waste corrugated fibreboard repair boxes (`waste_cardboard`)

Documented generated separated material waste; customer contents not silently included.

- Selected flow: Waste corrugated fibreboard repair boxes
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort attributed generated cardboard waste kg / N under the section 8 waste-origin rule, including retained mass and its supported eventual treatment; composition and actual/prospective receiver route must match this one stream, with no dispatch-period recount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_depot_waste`
- Sources: `ghg-transport-2013`

###### Waste polypropylene tape (`waste_pp`)

Documented generated separated material waste; customer contents not silently included.

- Selected flow: Waste polypropylene tape
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort attributed generated polypropylene adhesive tape waste kg / N under the section 8 waste-origin rule, including retained mass and its supported eventual treatment; composition and actual/prospective receiver route must match this one stream, with no dispatch-period recount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_depot_waste`
- Sources: `ghg-transport-2013`

### Process: Support interface and foreground activity (Ambient contracted courier road carriage on a declared leg) (`support_contracted_road`)

#### Inputs

##### Product flows

###### Ambient contracted courier road carriage on a declared leg (`svc_contracted_road`)

External interface only under boundary_atomic_support; one contract-defined ambient contracted courier road carriage on a declared leg. Measurement: sum(actual gross payload tonnes * actual loaded leg km); match the existing exclusive trunk-leg pool, including allocated empty/failure activity. Fix provider, technology/configuration, gates, quality and included components per cp_interface_contracted_road; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_contracted_road for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_contracted_road.

- Selected flow: Ambient contracted courier road carriage on a declared leg
- Flow property / unit: Transport performance / t*km
- Amount rule: sum(A_s,e * alpha_s,e) / N; native service unit t*km; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_contracted_road`

###### supplied diesel fuel (`u_contracted_road_diesel`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Actual grade/blend and tank stock balance; measure density/temperature for volume conversion. Fuel production is upstream; combustion is separate. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: supplied diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### supplied petrol fuel (`u_contracted_road_petrol`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Actual grade/blend and tank stock balance; measure density/temperature for volume conversion. Fuel production is upstream; combustion is separate. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: supplied petrol fuel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Alternating current (`u_contracted_road_electricity_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Apply existing AC-equivalent stocks and chronological source vectors, E_total/E_zero/E_route, positive/zero charging events and 3.6 MJ/kWh once. No second loss uplift or overlap with supplier depot electricity. Calculation: calc_provider_electric_stock; the result is already on the original reference basis. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_ac_basis` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6*(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Complete diesel delivery van at factory gate (`u_contracted_road_diesel_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete diesel delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Complete petrol delivery van at factory gate (`u_contracted_road_petrol_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete petrol delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Complete battery-electric delivery van at factory gate (`u_contracted_road_electric_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete battery-electric delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Complete diesel trunk truck at factory gate (`u_contracted_road_diesel_truck`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete diesel trunk truck at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### complete replacement tyre (`u_contracted_road_replacement_tyre`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: complete replacement tyre
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### lubricant supplied to vehicle (`u_contracted_road_lubricating_oil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: lubricant supplied to vehicle
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### complete LFP replacement traction battery (`u_contracted_road_replacement_lfp_battery`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: complete LFP replacement traction battery
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Purchased new R134a accepted for contracted road vehicles (`u_contracted_road_r134a_supply`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Only for evidenced externally acquired new R134a physically delivered for HVAC of contracted road vehicles. Purchased reclaimed supply uses its own product row. Original fill belongs to the complete vehicle; internal reuse and custody returns create no new supply. Use the chemical kg attributed by source lot and beneficiary event under section 8; unused receipt stock does not enter this cohort directly.

- Selected flow: Purchased new R134a accepted for contracted road vehicles
- Flow property / unit: Mass / kg
- Amount rule: A_supply/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Purchased reclaimed R134a accepted for contracted road vehicles (`u_contracted_road_r134a_reclaimed_supply`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Only for externally reclaimed R134a with evidenced acquisition of title, physical delivery and recharge acceptance for HVAC of contracted road vehicles. Apply `inv_reclaimed_supply` in section 8.

- Selected flow: Purchased reclaimed R134a accepted for contracted road vehicles
- Flow property / unit: Mass / kg
- Amount rule: A_reclaimed/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

#### Outputs

##### Product flows

###### recovered R134a transferred as a product (`u_contracted_road_r134a_recovered_product`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only with evidenced product status at actual external handover; mutually exclusive with the waste row. One actual identified recovered refrigerant product; no automatic avoided-production credit. Internal reuse is a transfer only. Calculation: calc_carrier_r134a; the result is already on the original reference basis. Apply `inv_refrigerant_identity`, `inv_carrier_scope` in section 8.

- Selected flow: recovered R134a transferred as a product
- Flow property / unit: Mass / kg
- Amount rule: A_product/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

##### Waste flows

###### residual spent complete tyre (`u_contracted_road_spent_tyre`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: residual spent complete tyre
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### spent lubricant (`u_contracted_road_spent_oil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: spent lubricant
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### spent LFP traction battery (`u_contracted_road_spent_lfp_battery`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: spent LFP traction battery
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### complete retired diesel delivery van delivered for dismantling (`u_contracted_road_eol_diesel_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual diesel delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contracted_road_diesel_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired diesel delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### complete retired petrol delivery van delivered for dismantling (`u_contracted_road_eol_petrol_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual petrol delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contracted_road_petrol_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired petrol delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### complete retired battery-electric delivery van delivered for dismantling (`u_contracted_road_eol_electric_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual battery-electric delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contracted_road_electric_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired battery-electric delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### complete retired diesel trunk truck delivered for dismantling (`u_contracted_road_eol_diesel_truck`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual diesel trunk truck identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contracted_road_diesel_truck: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired diesel trunk truck delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### R134a waste at generation (`u_contracted_road_r134a_recovered_waste`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Activate only when this named refrigerant has an evidenced irreversible waste decision and is removed from usable/recharge-ready status. The waste exchange is at generation, including retained waste and supported complete treatment owned by the original cohort. Usable recovered stock does not activate it. A different mixed carrier requires its actual identity and whole-carrier quantity in a separate row, with constituents only in balances. Later physical handover verifies the original event without transferring responsibility to the dispatch period.

- Selected flow: R134a waste at generation
- Flow property / unit: Mass / kg
- Amount rule: A_waste/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

##### Elementary flows

###### Fossil carbon dioxide (`u_contracted_road_co2_fossil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Fossil carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Biogenic carbon dioxide (`u_contracted_road_co2_biogenic`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Biogenic carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Methane (`u_contracted_road_methane`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Methane
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Nitrous oxide (`u_contracted_road_nitrous_oxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitrous oxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Carbon monoxide (`u_contracted_road_carbon_monoxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Nitric oxide (NO) (`u_contracted_road_nitric_oxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitric oxide (NO)
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Nitrogen dioxide (NO2) (`u_contracted_road_nitrogen_dioxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitrogen dioxide (NO2)
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Sulfur dioxide (`u_contracted_road_sulfur_dioxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Exhaust particulate matter below 2.5 micrometres (`u_contracted_road_pm25`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Exhaust particulate matter below 2.5 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Exhaust particulate matter 2.5 to 10 micrometres (`u_contracted_road_pm_coarse`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Exhaust particulate matter 2.5 to 10 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### Airborne tyre-wear particulate matter below 2.5 micrometres (`u_contracted_road_tyre_pm25`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Airborne tyre-wear particulate matter below 2.5 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`

###### R134a released to air (`u_contracted_road_r134a_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Calculation: calc_carrier_r134a; the result is already on the original reference basis. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: R134a released to air
- Flow property / unit: Mass / kg
- Amount rule: A_air/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_road`


### Process: Support interface and foreground activity (One contracted courier parcel delivery attempt) (`support_contracted_attempt`)

#### Inputs

##### Product flows

###### One contracted courier parcel delivery attempt (`svc_contracted_attempt`)

External interface only under boundary_atomic_support; one contract-defined one contracted courier parcel delivery attempt. Measurement: count distinct physically executed parcel-attempt IDs, successful or failed; a repeated visit is a new attempt only with a distinct execution record; exclude trunk carriage already assigned to another leg. Fix provider, technology/configuration, gates, quality and included components per cp_interface_contracted_attempt; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_contracted_attempt for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_contracted_attempt.

- Selected flow: One contracted courier parcel delivery attempt
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(A_s,e * alpha_s,e) / N; native service unit Item(s); normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_contracted_attempt`

###### supplied diesel fuel (`u_contracted_attempt_diesel`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Actual grade/blend and tank stock balance; measure density/temperature for volume conversion. Fuel production is upstream; combustion is separate. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: supplied diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### supplied petrol fuel (`u_contracted_attempt_petrol`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Actual grade/blend and tank stock balance; measure density/temperature for volume conversion. Fuel production is upstream; combustion is separate. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: supplied petrol fuel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Alternating current (`u_contracted_attempt_electricity_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Apply existing AC-equivalent stocks and chronological source vectors, E_total/E_zero/E_route, positive/zero charging events and 3.6 MJ/kWh once. No second loss uplift or overlap with supplier depot electricity. Calculation: calc_provider_electric_stock; the result is already on the original reference basis. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_ac_basis` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6*(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Complete diesel delivery van at factory gate (`u_contracted_attempt_diesel_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete diesel delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Complete petrol delivery van at factory gate (`u_contracted_attempt_petrol_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete petrol delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Complete battery-electric delivery van at factory gate (`u_contracted_attempt_electric_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete battery-electric delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### complete replacement tyre (`u_contracted_attempt_replacement_tyre`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: complete replacement tyre
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### lubricant supplied to vehicle (`u_contracted_attempt_lubricating_oil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: lubricant supplied to vehicle
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### complete LFP replacement traction battery (`u_contracted_attempt_replacement_lfp_battery`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: complete LFP replacement traction battery
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Purchased new R134a accepted for contracted delivery-attempt vehicles (`u_contracted_attempt_r134a_supply`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Only for evidenced externally acquired new R134a physically delivered for HVAC of contracted delivery-attempt vehicles. Purchased reclaimed supply uses its own product row. Original fill belongs to the complete vehicle; internal reuse and custody returns create no new supply. Use the chemical kg attributed by source lot and beneficiary event under section 8; unused receipt stock does not enter this cohort directly.

- Selected flow: Purchased new R134a accepted for contracted delivery-attempt vehicles
- Flow property / unit: Mass / kg
- Amount rule: A_supply/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Purchased reclaimed R134a accepted for contracted delivery-attempt vehicles (`u_contracted_attempt_r134a_reclaimed_supply`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Only for externally reclaimed R134a with evidenced acquisition of title, physical delivery and recharge acceptance for HVAC of contracted delivery-attempt vehicles. Apply `inv_reclaimed_supply` in section 8.

- Selected flow: Purchased reclaimed R134a accepted for contracted delivery-attempt vehicles
- Flow property / unit: Mass / kg
- Amount rule: A_reclaimed/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

#### Outputs

##### Product flows

###### recovered R134a transferred as a product (`u_contracted_attempt_r134a_recovered_product`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only with evidenced product status at actual external handover; mutually exclusive with the waste row. One actual identified recovered refrigerant product; no automatic avoided-production credit. Internal reuse is a transfer only. Calculation: calc_carrier_r134a; the result is already on the original reference basis. Apply `inv_refrigerant_identity`, `inv_carrier_scope` in section 8.

- Selected flow: recovered R134a transferred as a product
- Flow property / unit: Mass / kg
- Amount rule: A_product/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

##### Waste flows

###### residual spent complete tyre (`u_contracted_attempt_spent_tyre`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: residual spent complete tyre
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### spent lubricant (`u_contracted_attempt_spent_oil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: spent lubricant
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### spent LFP traction battery (`u_contracted_attempt_spent_lfp_battery`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: spent LFP traction battery
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### complete retired diesel delivery van delivered for dismantling (`u_contracted_attempt_eol_diesel_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual diesel delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contracted_attempt_diesel_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired diesel delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### complete retired petrol delivery van delivered for dismantling (`u_contracted_attempt_eol_petrol_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual petrol delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contracted_attempt_petrol_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired petrol delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### complete retired battery-electric delivery van delivered for dismantling (`u_contracted_attempt_eol_electric_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual battery-electric delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contracted_attempt_electric_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired battery-electric delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### R134a waste at generation (`u_contracted_attempt_r134a_recovered_waste`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Activate only when this named refrigerant has an evidenced irreversible waste decision and is removed from usable/recharge-ready status. The waste exchange is at generation, including retained waste and supported complete treatment owned by the original cohort. Usable recovered stock does not activate it. A different mixed carrier requires its actual identity and whole-carrier quantity in a separate row, with constituents only in balances. Later physical handover verifies the original event without transferring responsibility to the dispatch period.

- Selected flow: R134a waste at generation
- Flow property / unit: Mass / kg
- Amount rule: A_waste/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

##### Elementary flows

###### Fossil carbon dioxide (`u_contracted_attempt_co2_fossil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Fossil carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Biogenic carbon dioxide (`u_contracted_attempt_co2_biogenic`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Biogenic carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Methane (`u_contracted_attempt_methane`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Methane
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Nitrous oxide (`u_contracted_attempt_nitrous_oxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitrous oxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Carbon monoxide (`u_contracted_attempt_carbon_monoxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Nitric oxide (NO) (`u_contracted_attempt_nitric_oxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitric oxide (NO)
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Nitrogen dioxide (NO2) (`u_contracted_attempt_nitrogen_dioxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitrogen dioxide (NO2)
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Sulfur dioxide (`u_contracted_attempt_sulfur_dioxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Exhaust particulate matter below 2.5 micrometres (`u_contracted_attempt_pm25`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Exhaust particulate matter below 2.5 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Exhaust particulate matter 2.5 to 10 micrometres (`u_contracted_attempt_pm_coarse`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Exhaust particulate matter 2.5 to 10 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### Airborne tyre-wear particulate matter below 2.5 micrometres (`u_contracted_attempt_tyre_pm25`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Airborne tyre-wear particulate matter below 2.5 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`

###### R134a released to air (`u_contracted_attempt_r134a_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Calculation: calc_carrier_r134a; the result is already on the original reference basis. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: R134a released to air
- Flow property / unit: Mass / kg
- Amount rule: A_air/N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contracted_attempt`


### Process: Support interface and foreground activity (Use of a specified road section by a declared vehicle class) (`support_road_infrastructure`)

#### Inputs

##### Product flows

###### Use of a specified road section by a declared vehicle class (`svc_road_infrastructure`)

External interface only under boundary_atomic_support; one contract-defined use of a specified road section by a declared vehicle class. Measurement: actual vehicle km on the identified section/class, including empty/failure km; service covers road construction, upkeep and terminal responsibility with the existing fixed and damage allocation policy. Fix provider, technology/configuration, gates, quality and included components per cp_interface_road_infrastructure; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_road_infrastructure for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_road_infrastructure.

- Selected flow: Use of a specified road section by a declared vehicle class
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: sum(A_s,e * alpha_s,e) / N; native service unit vehicle*km; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_road_infrastructure`

###### Complete specified constructed road section at opening gate (`u_road_infrastructure_constructed_section`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. One as-built physical section with exact length/width, pavement/subbase, civil/safety components and location. Ends at completed handover; excludes later upkeep, renewal, retirement and explicitly counted direct wear. Underlying construction process is already inside this complete product and is not added again. For this exact completed section, f_fixed is attributed class-specific road-space*time demand divided by all-user road-space*time demand across its evidenced whole physical life, after exclusive subdivision. q=one complete constructed section*f_fixed/N; do not multiply again by vehicle-km. Later variable upkeep is not embedded in this manufacturing product. Apply `inv_occurrence`, `inv_road_scope` in section 8.

- Selected flow: Complete specified constructed road section at opening gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### delivered asphalt mixture for road maintenance (`u_road_infrastructure_asphalt_maintenance`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Specific complete material product only where evidenced in an actual event; grade/composition/delivery gate fixed from tickets. Installation energy/emissions and removed waste remain separate; not a generic material selector. Apply `inv_occurrence`, `inv_road_scope` in section 8.

- Selected flow: delivered asphalt mixture for road maintenance
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### delivered concrete for road maintenance (`u_road_infrastructure_concrete_maintenance`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Specific complete material product only where evidenced in an actual event; grade/composition/delivery gate fixed from tickets. Installation energy/emissions and removed waste remain separate; not a generic material selector. Apply `inv_occurrence`, `inv_road_scope` in section 8.

- Selected flow: delivered concrete for road maintenance
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### road-maintenance plant diesel (`u_road_infrastructure_maintenance_diesel`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Measured actual grade; direct combustion species must be separately instantiated with matching evidence. Apply `inv_occurrence`, `inv_road_scope` in section 8.

- Selected flow: road-maintenance plant diesel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### Alternating current (`u_road_infrastructure_maintenance_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Metered maintenance electricity, excluding electricity inside upstream material manufacture and unrelated site utilities. Apply `inv_occurrence`, `inv_ac_basis`, `inv_road_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

#### Outputs

##### Waste flows

###### removed asphalt pavement (`u_road_infrastructure_maintenance_asphalt`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_occurrence`, `inv_road_scope`, `inv_terminal_carrier` in section 8.

- Selected flow: removed asphalt pavement
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### removed road concrete (`u_road_infrastructure_maintenance_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_occurrence`, `inv_road_scope`, `inv_terminal_carrier` in section 8.

- Selected flow: removed road concrete
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### terminal residual asphalt pavement (`u_road_infrastructure_eol_asphalt`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Paired manufacture row u_road_infrastructure_constructed_section: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_occurrence`, `inv_road_scope`, `inv_terminal_carrier` in section 8.

- Selected flow: terminal residual asphalt pavement
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### terminal residual road concrete (`u_road_infrastructure_eol_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Paired manufacture row u_road_infrastructure_constructed_section: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_occurrence`, `inv_road_scope`, `inv_terminal_carrier` in section 8.

- Selected flow: terminal residual road concrete
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`


### Process: Support interface and foreground activity (Availability of a configured charging apparatus, excluding electricity) (`support_charging_asset_service`)

#### Inputs

##### Product flows

###### Availability of a configured charging apparatus (`svc_charging_asset_service`)

External interface only under boundary_atomic_support; one contract-defined availability of a configured charging apparatus, excluding electricity. Measurement: actual nonoverlapping apparatus occupancy hours assigned under the existing positive-source/verified-zero event rules, including concurrent-port shares; electricity is excluded. Fix provider, technology/configuration, gates, quality and included components per cp_interface_charging_asset_service; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_charging_asset_service for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_charging_asset_service.

- Selected flow: Availability of a configured charging apparatus
- Flow property / unit: Duration / h
- Amount rule: sum(A_s,e * alpha_s,e) / N; native service unit h; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_charging_asset_service`

###### Complete specified charging apparatus at factory gate (`u_charging_asset_service_charger_manufactured`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. One complete real apparatus with model, serial, port ratings and included original cabinet/power electronics/cables/control components fixed. Manufacturing ends at factory handover. Exclude site installation, operating AC, replacement maintenance and EOL; no duplicate original component rows. Link this physical asset/installation to the actual charger serial. f_j,c=[sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)]/H_j,life. H uses nonoverlapping complete-apparatus occupied union-hours with the existing port allocation; H_j,life includes all users and positive/zero events through evidenced calendar retirement. Positive-source carryover and zero-event direct/causal/fixed-day rules remain unchanged. q_charger=one complete apparatus*f_j,c/N; installation physical quantity*q fraction follows the same f. Hours are only the attribution driver, never Item(s) or energy conversion. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: Complete specified charging apparatus at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### concrete supplied for charger foundation (`u_charging_asset_service_installation_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Actual separately supplied concrete incorporated into a uniquely registered charging foundation, excluded from road/building product gates. This is concrete supply, not a complete foundation product; separately collect actual foundation construction materials/energy and final concrete residual without duplicating the charger. No default one-foundation-per-charger or lifetime is allowed. Use an independent foundation asset/cohort ID. f_foundation = cohort-attributed foundation-supported apparatus occupied union-hours / evidenced complete foundation-life occupied union-hours of ALL supported chargers/users, across charger generations. Match capacity/configuration strata and equal-share concurrent occupied-port hours before source/zero-event cohort attribution. The original concrete quantity and terminal foundation concrete use this identical f_foundation and original final denominator. A foundation retained after charger retirement remains in its own life register; replacement casting is a new actual foundation cohort, not a current repair quantity. Missing supported foundation life or all-beneficiary use blocks completion. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: concrete supplied for charger foundation
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### Alternating current (`u_charging_asset_service_installation_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Installation-only metered energy outside complete-product manufacturing; no operating electricity or site-meter overlap. Link this physical asset/installation to the actual charger serial. f_j,c=[sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)]/H_j,life. H uses nonoverlapping complete-apparatus occupied union-hours with the existing port allocation; H_j,life includes all users and positive/zero events through evidenced calendar retirement. Positive-source carryover and zero-event direct/causal/fixed-day rules remain unchanged. q_charger=one complete apparatus*f_j,c/N; installation physical quantity*q fraction follows the same f. Hours are only the attribution driver, never Item(s) or energy conversion. Apply `inv_occurrence`, `inv_ac_basis`, `inv_charger_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### complete charger replacement cable assembly (`u_charging_asset_service_replacement_cable`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only an actually separately purchased complete cable assembly with specified connectors/rating. Exclude original cable inside new apparatus; other replacement component identities require their own confirmed rows. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: complete charger replacement cable assembly
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### Alternating current (`u_charging_asset_service_maintenance_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only separately attributable maintenance electricity; exclude already-metered charging/standby AC, which stays in existing electricity cards. Apply `inv_occurrence`, `inv_ac_basis`, `inv_charger_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

#### Outputs

##### Waste flows

###### discarded charger cable assembly (`u_charging_asset_service_removed_cable`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Measured real residual assembly stream at handover, with origin allocation and storage/treatment; no double counting if retained within a complete retired charger. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: discarded charger cable assembly
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### complete retired charging apparatus (`u_charging_asset_service_charger_eol`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. One physical residual apparatus at dismantler handover; measured mass excludes separately removed/recovered components. Complete-life beneficiary allocation and full future or actual storage/treatment chain required; no generic lifecycle-service background. Paired manufacture row u_charging_asset_service_charger_manufactured: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: complete retired charging apparatus
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### Terminal concrete residual of the separately registered charging foundation (`u_charging_asset_service_foundation_concrete_eol`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only when separate concrete foundation exists outside the road/building gate; use actual or evidenced prospective same-foundation residual and destination, not an assumed disposal date or mass. Concrete carrier to its specified treatment receiver; the terminal net residual already excludes earlier removals/reuse and losses; deduct these once only when deriving a net residual from an original gross/BOM basis, never again from measured net residual. Retain independent foundation lifetime across charger generations and its same manufacturing allocation fraction. Supported demolition, storage, transport and treatment are required; actual custody transfer replaces the original foundation model, never adds dispatch-period burden. Paired manufacture row u_charging_asset_service_installation_concrete: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_charger_scope` in section 8.

- Selected flow: Terminal concrete residual of the separately registered charging foundation
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`


### Process: Support interface and foreground activity (Courier depot shell occupancy, excluding operation utilities) (`support_depot_building`)

#### Inputs

##### Product flows

###### Courier depot shell occupancy (`svc_depot_building`)

External interface only under boundary_atomic_support; one contract-defined courier depot shell occupancy, excluding operation utilities. Measurement: actual occupied floor area m2 * elapsed years on the documented calendar basis, with the original shared-space attribution. Fix provider, technology/configuration, gates, quality and included components per cp_interface_depot_building; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_depot_building for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_depot_building.

- Selected flow: Courier depot shell occupancy
- Flow property / unit: Area-time / m2*a
- Amount rule: sum(A_s,e * alpha_s,e) / N; native service unit m2*a; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_depot_building`

###### Complete specified depot building shell at construction handover (`u_depot_building_building_constructed`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: production. Physical square metre of a completed specified shell, not square-metre-year occupancy. Declare gross/internal floor-area basis, geometry, structural/envelope/original fixed components and location. Exclude later occupancy utilities, maintenance, demolition and separately recorded sorter/IT/charger. One actual building configuration per row; distinct configurations require distinct rows. For this exact completed shell use attributed measured occupied area-time A_c and an evidenced complete physical service life L years, including calendar retirement; q_m2=A_c/L/N. The equivalent whole-building fraction is f=A_c/(the identical-basis total supported floor area*L). All users share the same capacity denominator; m2*a is not a physical output unit. Use the same whole-building f for terminal residual wastes. Apply `inv_occurrence` in section 8.

- Selected flow: Complete specified depot building shell at construction handover
- Flow property / unit: Area / m2
- Amount rule: sum(Q_product_a * f_c,a) / N; native quantity unit m2; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_depot_building`

###### building repair concrete (`u_depot_building_repair_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: maintenance. Specific grade and actual externally supplied repair mass only; no original construction overlap. Apply `inv_occurrence` in section 8.

- Selected flow: building repair concrete
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_depot_building`

###### complete replacement window assembly (`u_depot_building_replacement_window`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: maintenance. Only an actually purchased complete window with defined frame/glazing dimensions and mass. Original window remains inside initial shell; other repair products need individual confirmed identities. Apply `inv_occurrence` in section 8.

- Selected flow: complete replacement window assembly
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_depot_building`

###### Alternating current (`u_depot_building_repair_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: maintenance. Separately metered repair-only electricity outside normal site operations and upstream products. Apply `inv_occurrence`, `inv_ac_basis` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_depot_building`

#### Outputs

##### Waste flows

###### discarded complete window assembly (`u_depot_building_removed_window`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: maintenance. Real separately collected residual assembly; retained in demolition waste means no separate duplicate. Track origin responsibility, storage and treatment. Apply `inv_occurrence` in section 8.

- Selected flow: discarded complete window assembly
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_depot_building`

###### residual demolition concrete (`u_depot_building_demolition_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: eol. Actual physical concrete stream at demolition handover, excluding prior repair removals, recovered products and mass losses. Require same physical-building lifetime beneficiary basis and treatment chain; heterogeneous separately measured streams stay separate. Paired manufacture row u_depot_building_building_constructed: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_occurrence` in section 8.

- Selected flow: residual demolition concrete
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_depot_building`



## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_segment` | Subdivide by vehicle/segment/customer service class first. For loaded linehaul allocate measured segment burden by actual gross parcel mass*distance across all customers, including failed parcels. A volume-limited segment instead uses measured occupied external volume*distance only when load/capacity evidence proves volume limitation; document both mass and volume sensitivity. Never apply mass and volume shares sequentially. | `ghg-transport-2013` |
| `allocation_lastmile` | For collection/delivery tours separate metered moving activity from stop/idle activity: moving burden by actual parcel load-distance on each loaded link; stop/idle by observed service minutes per customer/parcel at each stop. Shared-stop minutes split by measured parcel handling time, with a documented time study where direct timestamps are unavailable. Empty links/repositioning are assigned to the causal tour then spread by its same loaded-link driver; no empty journey is dropped or allocated twice. Use all served customers, other acceptance cohorts and actual functions such as pre-acceptance rejection handling in every denominator. Rejection handling precedes the acceptance gate: separately record its time and remove its noncohort load share from this cohort while reconciling the whole site raw total. Never copy the full shared-stop service minutes to each parcel. | `ghg-transport-2013` |
| `allocation_depot` | Submeter exclusive equipment/areas first. Shared handling electricity/equipment use follows measured processing minutes; lighting/building occupancy follows occupied area-time share, shared IT follows measured task/device operating minutes. Meter balances must reconcile all products, customers and noncohort loads; parcel counts alone require documented equal workload evidence and sensitivity, not an assumed equality. | `ghg-transport-2013` |
| `allocation_failures` | There is no saleable additional delivery-service output. Assign burdens to the closed acceptance cohort before dividing by N; returns, redelivery, damage, loss and post-acceptance cancellation keep their burdens without service-output credit. A later return contract is distinct only after original closure and an explicit gate. Physical refrigerant recovery uses the product/waste branches in allocation_refrigerant_recovery and never adds a delivery reference. | `ghg-transport-2013` |
| allocation_refrigerant_recovery | Apply to self-operated vehicles and each separate contracted leg. An external handover meeting evidenced product acceptance is a separate physical kg output, with no substitution credit and no delivery-reference count. Use the handover cut-off: the service retains necessary vehicle maintenance, compliant recovery and safe handover work through the gate; the recipient bears onward transport, regeneration, upgrading and use. Extra separation, purification or product-specific packaging undertaken to make a saleable product belongs to that product and is physically subdivided away from delivery. If actual shared loads cannot be separated and the cut-off cannot be evidenced, block completion pending a separately reviewed multifunction allocation. The waste branch retains the compatible actual treatment burden in the service. Never classify the same batch/handover ID as both product and waste. Internal reuse is a transfer only. |  |
| allocation_maintenance_period | Replacement tyre, oil and battery, and corresponding removed-part wastes use each asset and fixed calendar maintenance year y. For routine events M_y is actual installed/new-fill or generated residual kg in y; assign by cohort-attributed vehicle km in y / all-user vehicle km in the same y, with loaded/empty route shares from allocation_segment/allocation_lastmile. Partition cross-year cohorts once. Accident-specific material and waste belongs directly to its evidenced causal cohort and is removed from the routine pool. Record generation-event responsibility even when transfer occurs later; stored waste retains that ownership. Missing or zero all-user km with a positive burden is unresolved, never zero. |  |
| allocation_charge_sources | For verified positive gross source additions I_k>0 only; zero-addition occupied events follow allocation_charge_zero. Use chronological weighted-average source accounting for each physical battery AC-equivalent energy stock. Retain S_bk by originating charging session/source k; each validated stock increase enters its source once. Before each withdrawal e, remove e*S_bk/sum_k(S_bk) from each source, then assign that withdrawal by the declared route/cohort shares. Battery transfers preserve this source vector and move equal quantities out/in, never new electricity. Opening stock needs evidenced source provenance; unknown origin remains a blocking gap. Carry remaining source fractions across periods; reconcile each source supplied = assigned draws/losses + exported stock + closing stock. Allocate charging-session capital/service hours by that source actual or evidenced forecast lifetime draws/losses assigned to each beneficiary divided by all such supported draws/losses; retain closing unconsumed capital/service shares with its source stock, revise estimates and reconcile on exhaustion. Forecasts require evidence, uncertainty and scenario disclosure, never arbitrary FIFO/whole-cohort distance substitution. Stored charge discarded or physically lost is a service loss assigned by that asset interval all-user activity shares, not an export credit; zero beneficiary with positive burden stays unresolved. No loss is added twice through the AC-equivalent curve and source ledger. |  |
| allocation_charge_zero | Classify each occupied charging event by verified gross new stored-energy source addition I_k, not net SOC change: positive addition followed by withdrawal/loss remains I_k>0. Missing or unresolved meter/BMS evidence is not I_k=0. For I_k>0 use allocation_charge_sources. For verified I_k=0 create no fictitious energy source: if dispatch/reservation evidence identifies one causal order/cohort, assign its hours and measured failed-attempt electricity directly to that cause, including failed/cancelled orders without adding successful output. If only a causal vehicle/task set is known, share within that recorded causal set by its attributed actual service elapsed time, including failed attempts and charging wait, using the existing mutually exclusive route/time pools and all customers. For genuinely shared failure with no separable causal task, use one fixed apparatus/site local-calendar-day failure pool, split cross-midnight intervals first, and allocate by all evidenced beneficiary service elapsed hours that day, including failed attempts/waits and non-study work. Fix timezone and beneficiary evidence; never choose a larger window or substitute arbitrary km/revenue. Shared time is partitioned once, not copied to every order. Positive burden with missing beneficiary evidence or zero elapsed denominator remains incomplete. Direct, causal-set and shared-day assignments are mutually exclusive and shares sum to one before study selection. These zero-addition hours remain in the same complete-life occupied-hours denominator; never assign them again through a source vector. Metered AC that never enters stock is a direct event loss/operational burden under the same shares, included once and removed from any residual route-energy pool. A zero net battery change with evidenced positive gross charge is not a zero-addition failure. I_k is gross addition from this charging event only; imported charged batteries retain their previous source vector and capital carryover, never constitute a new charging source or another session hour. |  |
| allocation_waste_origin | Fix each ordinary solid-waste generation event to its original service cohort and stratum at generation, never at later dispatch. Directly trace the generating task first; shared generation uses the existing site/handling allocation driver over the recorded generation interval, including all customer and noncohort workloads. Preserve event ID, generation date, original shares and original reference denominator through storage and internal transfers. Acquired old waste is not new generation. Retained waste keeps its original treatment responsibility; dispatch-period service does not inherit it. Record site timezone before period assignment. Shared-generation intervals are fixed local calendar months: split months first and use only same-month all-user site/handling drivers, not the later dispatch period or repeated full-cohort totals. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | supporting physical inventory | For each provider, site, configuration, event and accounting interval, partition every measured physical total into mutually exclusive inventory owners before selecting the study cohort. Use the fixed activity driver for that support process, with all users and failed work in the denominator. Direct causal attribution precedes shared allocation. Never multiply a cohort share a second time if already attributed. Keep service-level allocation quantities as raw drivers, not exchange quantities, and do not repeat division by the final reference count. Meter/stock, installed/replaced assets, internal transfers, generated waste and fate balances must reconcile at the same physical/time boundary. A complete product gate may retain its manufacturing background, but a lump service row may not be reintroduced under a different label. |  |
| allocation_atomic_capital | manufacture; installation; terminal assets | For each physical asset serial/cohort a, Q_a is its actual manufacturing/construction-gate quantity in the card unit. Set f_c,a=attributed physical lifetime activity_c,a/evidenced full-life all-user activity_a, using the process/asset-specific driver and identical configuration/capacity units. Manufacture q=sum(Q_a*f_c,a)/N_ref; each initial and whole-asset replacement creates its own asset cohort and enters once, not an additional current-period maintenance item. Installation physical quantities outside the asset product gate use that same installed-asset fraction. Terminal residual quantity in its own declared unit, evidenced from matched retirement or a prospective residual/reuse/retention plan, uses exactly the same f_c,a and original reference denominator; actual custody transfers only verify/update it. Earlier removed parts are excluded from terminal residual. Restate life and all original beneficiary cohorts under calc_capital_restatement; lifetime estimates need evidence and sensitivity, never numeric defaults. Genuine component repairs/replacements use actual causal events or the fixed provider maintenance-year shares, not another whole-life fraction. A whole component reused as a separately commissioned capital asset instead receives its own serial/lifetime register, never both treatments. |  |
| allocation_capital_restatement | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | This PCR uses full restatement, not frozen historical shares or a retirement-period catch-up. All direct and supporting capital, reusable containers, installation outside the product gate and paired terminal sources follow calc_capital_restatement. Each specific activity rule fixes the driver and beneficiary shares; these are applied once. A complete asset background already including delivery/end-of-life follows the same restatement, without separate duplicate terminal exchanges. Routine component maintenance remains under its causal/period method. |  |
| allocation_atomic_waste | operational and maintenance wastes | Generated operational and maintenance waste retains its original generation event, provider/activity cohort, shares and original reference denominator through storage and transfers. Fixed shared-waste intervals are local calendar months with timezone declared; use same-interval causal activity and all users, unless an existing more specific maintenance-year or counter-period method applies. Reconcile closing=opening+generation+internal_in-internal_out-external_dispatch-evidenced_physical_loss on consistent material/moisture bases. Include supported eventual storage/transport/treatment for retained waste, with actual evidence or an explicitly evidenced compatible prospective route and uncertainty; unknown fate remains incomplete. Later receipts replace that original event model, not add a new dispatch-period burden. Asset terminal-waste uses its paired capital fraction instead. Waste carrier and its constituents, storage losses/releases and residual treatment cannot be counted twice; the same measured site/storage operation remains under one inventory owner. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_provider_maintenance_period | u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_r134a_supply; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_recovered_product; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_r134a_supply; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_product; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_depot_building_repair_concrete; u_depot_building_replacement_window; u_depot_building_repair_ac; u_depot_building_removed_window | For every shared routine supporting-provider maintenance pool, fix interval y to the site-local calendar year with timezone and exact asset/site/configuration recorded. Split a cohort crossing years into its within-year activity. Actual installed/consumed material M_x,y and its separately measured generated waste use s_c,y=cohort-attributed beneficiary driver_y/all-beneficiary driver_y for that same year, then q=sum_y(M_x,y*s_c,y)/N_ref once. The driver is the physical support-process activity fixed in activity_*; for vehicle upkeep it is actual vehicle kilometres including once-attributed empty/failure travel, for variable road upkeep it is evidenced class-specific engineering damage in the same year, and for building fabric it is reserved floor-area-calendar-hours. Other shared support equipment uses its fixed actual all-beneficiary task/cycle/union-hour driver; retain exact configuration strata and no concurrency duplication. A signed maintenance work order fixes the causal asset and task pool before calculation, not a later modeller choice. Specific accident/failure repair is allocated exclusively to its evidenced causal order/task set, never also to the annual routine pool. Genuine component consumption excludes unused opening/closing stocks, uninstalled returns and internal transfers; generated removed parts retain this original event/year/share through later custody. No assumption that input and removed-part masses are identical. Apply one annual period share, not whole-life f, to real component repairs; entire replacement assets create separate capital cohorts instead. A positive unsupported pool or zero/unknown all-user denominator blocks completeness. Apply the same rules to retained provider maintenance cards where previously referenced; independent specific generation/fate balances and exact overlap exclusions remain mandatory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cohort` | service | delivered_parcel | Acceptance and closure event ledger | cohort_id; parcel_id; consignment_id; piece_count; acceptance_time/site; domestic_destination; USO_flag; service_class; mass_kg; dimensions_m; promised_window; receipt_time; receipt_quality; attempt_ids; rejected_before_acceptance; returned; lost; cancelled; finally_nonconforming_delivered; open_count | Scan all handovers and independently reconcile depot/recipient evidence; distinguish genuine physical split/repack from duplicate scans; Aggregation operations: Deduplicate original accepted parent parcel IDs and retain split/repack/consolidation lineage; A=D+R+L+C+F at closed cohort; pre-acceptance rejection excluded from A; open O must reach 0; N=D | Item(s); kg; m; timestamp | Each parcel event; monthly closure reconciliation | Acceptance window plus complete lag to closure | All network gates and contractual receivers | per reference flow | Signed scans, recipient evidence, exception investigation, scale/dimensioner calibration, closure and IT audit |
| cp_interface_contracted_road | support_contracted_road | svc_contracted_road | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect sum(actual gross payload tonnes * actual loaded leg km); match the existing exclusive trunk-leg pool, including allocated empty/failure activity. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | t*km | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_contracted_attempt | support_contracted_attempt | svc_contracted_attempt | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect count distinct physically executed parcel-attempt IDs, successful or failed; a repeated visit is a new attempt only with a distinct execution record; exclude trunk carriage already assigned to another leg. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | Item(s) | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_road_infrastructure | support_road_infrastructure | svc_road_infrastructure | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual vehicle km on the identified section/class, including empty/failure km; service covers road construction, upkeep and terminal responsibility with the existing fixed and damage allocation policy. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | vehicle*km | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_charging_asset_service | support_charging_asset_service | svc_charging_asset_service | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual nonoverlapping apparatus occupancy hours assigned under the existing positive-source/verified-zero event rules, including concurrent-port shares; electricity is excluded. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | h | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_depot_building | support_depot_building | svc_depot_building | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual occupied floor area m2 * elapsed years on the documented calendar basis, with the original shared-space attribution. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | m2*a | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_capital_restatement | road; depot; support_contracted_road; support_contracted_attempt; support_road_infrastructure; support_charging_asset_service; support_depot_building | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | versioned_asset_cohort_ledger | asset/source ID; source phase and native unit; original cohort/stratum and causal parent; original reference denominator and revision; all-user actual driver by original interval; fixed beneficiary shares; complete-life driver forecast/version and supporting records; manufacture/installation quantity; terminal net residual/route and version; previously booked attributed raw B and normalized result; recalculated f/A/q and signed correction; zero-use commissioning responsibility; overlap exclusions | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Join serial/source asset registers, activity meters, supplier product gates and the original result ledger; apply calc_capital_restatement on each change. Recompute using the original physical driver and all-user evidence without changing physical stocks. Reconcile old/new/correction and original denominator by source and original cohort; retain versions and calibration with the original record owner. | source-native units; original driver units; Item(s) | each acquisition/commissioning, activity, life/source revision and retirement; reconcile each original reporting period | complete asset life and all affected original cohorts | all users of the same asset configuration; original product gate and separate installation/terminal sources | per reference flow | serial/source registers; calibration; life evidence; receiver records; original-cohort results and revision chain |
| `cp_supplier` | service | activity_contracted_road; activity_contracted_attempt | Supplier activity and boundary statement | segment_id; supplier; gate_from/to; mode; fuel/powertrain; parcel_id; gross_tonnes; loaded_km; attempts; empty_return; inclusions; factor_unit; factor_boundary; receipt; allocated_total | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Collect segment manifest and supplier primary activity/dataset; verify tkm or one-parcel-attempt unit and all embedded burdens; Aggregation operations: Allocate exclusively contracted activity before /N; attach inclusion matrix and no overlap with owned segments | tkm; Item(s) | Every subcontract/segment; monthly invoice reconciliation | Whole cohort and lagged failures | Every contracted segment, all customers in shared burdens | per reference flow | Supplier signed specification, primary records, invoices, scope and unit audit |
| `cp_road` | road | diesel; petrol; road_electricity | Vehicle and segment physical activity ledger | vehicle_id; powertrain; segment_id; tour_id; parcel_ids; all_customer_loads; gross_mass; external_volume; loaded_km; empty_km; stop_minutes; idle_minutes; fuel_open/purchases/transfers/close; density; temperature; blend; meter_kWh; charger; voltage; grid; meter_period battery/session IDs; opening/closing calibrated stored kWh and SOC; traced battery transfers; paired inlet-AC/stored-energy curve; measured usable capacity; configuration/temperature/age; synchronized times source-vector S_bk; chronological charging/draw/transfer events; per-source opening/closing kWh; actual/forecast beneficiary draws and uncertainty; capital-hour carryover ledger; event/session ID and start/release time; site timezone and calendar day; verified gross source addition I_k and its meter/BMS evidence; positive/zero/unknown classification; failure/cancellation reason; causal order/cohort or vehicle/task-set IDs; all-user attributed service elapsed hours including failed attempts/waits; shared-day beneficiary evidence; direct-event AC kWh; mutually exclusive branch/share ledger; electricity/source/capital overlap crosswalk | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Fuel tank balance and calibrated AC meter; link GPS/odometer, stop log, loading scans and independent supplier totals; Aggregation operations: Resolve movement/stop allocation via allocation_lastmile; balance stocks; subtract charging from depot meter; convert once and /N For BEVs meter inlet AC and validate DC/BMS stored energy against matched charge/discharge tests; establish an empirical AC-equivalent stored-energy curve for the same battery configuration, temperature and age. A SOC percentage times nominal capacity or a nominal efficiency is insufficient. Join batteries/session stocks and route intervals under calc_electric_stock before allocation; missing stock/curve evidence blocks completeness. Apply allocation_charge_sources to all battery imports/exports and source-to-cohort attribution; transfer direction is measured at the same energy-stock boundary, with no credit for discarded charge. Retain every occupied attempt including failed/cancelled and verified zero-addition events. Measure gross addition separately from net stock change and concurrent draws; missing evidence stays unknown. Apply allocation_charge_sources only for positive I_k and allocation_charge_zero for verified zero I_k. Link causal dispatch/reservation and all-user service-time records; fix local timezone and split shared events at midnight. Reconcile branch hours to apparatus/bay occupancy and direct-event electricity to the same meter ledger once, with no fictitious stock source or route-energy duplication. Every earlier traction/motion/stop allocation in this protocol applies only to E_route after subtracting the independently metered E_zero under the section 8 electricity rule; E_zero follows its event shares once. | kg; L; kWh; km; minute; kg*km; m3*km | Each trip/refuel/charge/stop; monthly balances | Full cohort operation and attributable failures | Every operated vehicle and depot charger, including other customers | per reference flow | Calibration, fuel specifications, charger meter bills, GPS gaps, load studies and all-customer allocation reconciliation |
| `cp_depot` | depot | depot_electricity; paper_label; pp_tape; corrugated_box | Site meter and materials reconciliation | site_id; meter_id; period; kWh; road_charging_kWh; task_minutes; occupied_area; operating_time; all_customer_workloads; material_grade; issues; returns; opening_stock; closing_stock; unit_mass | Read calibrated submeters and material issues/stock sheets; physically verify label/tape/box composition and missing exchanges; Aggregation operations: Separate exclusive uses; allocate shared loads with allocation_depot; raw material consumption=opening+receipts-transfers-closing; /N once | kWh; kg; minute; m2 | Every issue; monthly meter/stock close; task study by shift/service class | Full operating period serving the cohort | Every acceptance/sort/delivery depot | per reference flow | Bills, material specification, counting-to-mass weighings, meter calibration, time study and building plan |
| `cp_assets` | road | diesel_van; petrol_van; electric_van; replacement_tyre; lubricating_oil; replacement_battery | Vehicle asset/maintenance ledger | asset_id; subtype; manufacturing_scope; original_component_scope; lifetime_km; cohort_km; replacement_part; chemistry; mass; maintenance_date; job_card_id; issues_mass; uninstalled_returns_mass; installed_mass; measured_unit_mass; receipts; opening/closing_unused_stock; inward/outward_transfers; retirement; EOL_inclusions; uncertainty asset/year y; event generation date; routine/incident causal owner; cohort and all-user km within y; source generation-ID retained through storage/transfer | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Inventory actual vehicle register and maintenance job cards; verify lifetimes with operating history and bounded scenarios; each actual subtype separately; Aggregation operations: Vehicle fractions and replacement quantities follow cards; include retirement treatment once; disaggregate missing maintenance exchanges Apply allocation_maintenance_period to every separate maintenance material; retain routine versus causal-incident segregation. | Item(s); kg; km | Every asset/job/retirement; annual scope/life review | Full cohort; documented lifetime allocation | All owned/leased vehicles supporting cohort | per reference flow | Serial/model records, supplier dataset boundary, invoices, weighings, lifetime evidence and uncertainty review |
| `cp_depot_assets` | depot | sorting_machine; activity_depot_building | Depot capital and occupancy ledger | asset_id; subtype; lifetime_hours; cohort_operating_hours; included_components; EOL_scope; floor_area_m2; occupied_days; allocation_share; other_customers | Machine run logs and maintenance register; surveyed occupied area and lease/building dataset scope; document evidence-based lifetime; Aggregation operations: Separate machine hours from occupied building area-time, allocate by allocation_depot, then /N; no extra building burdens already in occupancy service | Item(s); h; m2; day; m2*a | Each shift occupancy/run log; annual asset review | Full cohort plus demonstrated asset lifetime | All handling depots and shared occupiers | per reference flow | Counter calibration, plans, leases, complete-asset boundary, life evidence and EOL agreement |
| `cp_waste` | road | spent_tyre; spent_oil; spent_battery | Road waste carrier and treatment ledger | stream_id; composition; source_asset; opening_stock; generation; dispatch_mass; closing_stock; receiver; route; treatment_scope; retained_material; hazardous_status asset/year y; event generation date; routine/incident causal owner; cohort and all-user km within y; source generation-ID retained through storage/transfer; original generation-event ID and local timezone; internal in/out kg and paired endpoint IDs; independently evidenced physical loss kg, composition and medium; common wet/dry basis and moisture changes for generation/stock/dispatch; original cohort denominator and shares; actual/prospective storage-transport-treatment coverage and revision lineage | Weigh each named waste at each maintenance generation event and record its original causal responsibility. If reconstructing generation from stock, use the complete calc_road_maintenance_waste equation including internal transfers and verified losses. At every transfer and monthly close reconcile the same original event and material basis: closing=opening+generation+internal_in-internal_out-external_dispatch-verified_physical_loss. Preserve its allocation_maintenance_period shares and original N; later custodians do not inherit generation responsibility. Remove storage and maintenance operations already inventoried from the waste link; account actual storage releases and final residual treatment once each. Unknown loss, medium, basis conversion or fate blocks completion, with no fictitious balancing item. | kg | Every maintenance generation event, every transfer and monthly stock close | Whole cohort and lagged transfers | All vehicle workshops and named receivers | per reference flow | Scale calibration, consignment/treatment certificates, storage inventory and composition records |
| `cp_depot_waste` | depot | waste_label_paper; waste_cardboard; waste_pp | Depot waste carrier and treatment ledger | stream_id; material_grade; composition; generation; dispatch_mass; stock_change; receiver; treatment; upstream_inclusions; generation_event_id; generation_time/site; source task/cohort/stratum; original allocation shares/reference denominator; generated mass and wet/dry/composition basis; opening/closing stock by origin; internal transfer IDs and both endpoints; external dispatch; evidenced physical loss/release; receiver and destination fractions; actual/prospective route and model version; evidence/uncertainty; receipt replacement status and revision chain | Measure segregated generated mass at the generating point and record the responsible task/interval before storage; if generation is reconstructed from a complete stock balance, document all transfers, losses and measurement uncertainty and preserve original event provenance. Apply allocation_waste_origin and calc_waste_origin. At each transfer and period close reconcile origin-labelled stocks against calibration and receiver evidence. Require supported storage/transport/treatment coverage for retained mass; later receipts replace the original event model, never create a second dispatch-period burden. Verify composition and incompatible paper grades separately; no avoided-production credit. | kg | each generation and transfer; origin stocks at monthly close | Whole cohort and lagged handling; trace original generation through retained stock and eventual receiver evidence | Every depot and receiver | per reference flow | Scale calibration, sorting audit, receiver certificates and causal link to cohort |
| `cp_emission` | road | fossil_co2; methane; nitrous_oxide; carbon_monoxide; nitrogen_monoxide_air; nitrogen_dioxide_air; sulfur_dioxide; exhaust_pm25; exhaust_pmcoarse; r134a_air; tyre_pm25_air; r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste | road species releases and refrigerant physical movement register | segment_id; fuel_mass/blend; technology; emission_standard; cold_start; idle; factor_source/date; factor_value/unit; substance; compartment; PM_size; destination_fraction; composition_basis; refrigerant_type; initial/final_charge; added/recovered; wear_activity; all_customer_driver; species identity/CAS; direct mass or molar fraction; NO2-equivalent QA basis; molecular data source; compound/carbon basis; calibrated speciation and uncertainty; chemical/vehicle/store IDs; exclusive movement ID and endpoints; installed and recovered-store opening/closing kg separately; external supply receipt kg and installed addition; reuse; other in/out by subsystem; recovery into store; external product or waste handover kg, receiver and status; medium-specific losses; terminal residual; attribution period and all-user driver; handover time and gate, gross/tare/net batch kg, composition test and uncertainty, chemical kg, purchased new/reclaimed or own custody return, title and responsibility/receiver, original outbound/return movement IDs, lot opening/closing/issue/attributed shares/returns, upstream production or reclamation and transport scope, calibration ID; waste decision evidence/time; original generation event/lot; I/F/S state tag and location; measured generated gross/tare/net/composition and unit; original site/asset and timezone/interval; original causal task or all-user allocation fields/shares; original N and result version; retained tagged stock; movement IDs/endpoints; actual dispatch/receiver; storage loss/media; prospective treatment version and residual basis; original-model replacement/overlap evidence | Use source-documented uncharacterized LCI species factors or direct measurements; audit original factors, operational fit and included species; maintenance mass balance for refrigerant; occurrence register for all other releases; Aggregation operations: Apply activity*compatible factor once; multiply composition/size/destination only if absent in factor; allocate and /N; add missing species/media cards before completeness For the explicitly evidenced definition NOx=NO+NO2 expressed as NO2-equivalent, record T, its unit/basis and source-matched measured molar fraction a=n_NO/(n_NO+n_NO2). Then m_NO=a*T*M_NO/M_NO2 and m_NO2=(1-a)*T, using independently evidenced molecular masses on the same unit basis. Prefer direct substance-specific mass measurements/factors when available and do not add the QA total again. T is not ordinary NO/NO2 mixture mass; never apply a mass fraction directly to T or assign all T to NO2. If definition includes other nitrogen species, speciation or conversion evidence is missing, no two-component split is permitted: preserve the raw QA observation and block completion until actual species-specific rows and quantities are established. No numeric fraction or molecular mass is defaulted by this PCR. For each actual combustion/evaporation source, use source-matched calibrated species-resolved sampling/analysis or a traceable species-resolved factor inventory matching fuel, engine/process, control, load, cold/hot regime and period. Retain sampling recovery, calibration/response factors, detection and uncertainty, chemical identity, carbon-versus-compound basis and explicit conversions from formula/molecular data. Reconcile identified species to the measured/factor total on its original stated basis, investigating nonclosure; unidentified material is not zero and not a generic NMVOC exchange. Before completed modelling, author each actually supported species as its own named bilingual elementary card, matching compartment, quantity rule and protocol, then regenerate structured. Do not guess a fixed benzene/toluene/etc. roster, use total NMVOC as one species, or claim an exhaustive species inventory before this evidence exists. For owned R134a use the separate balances and handover branches in calc_owned_r134a, not a second generic emission factor. Total NOx is QA and an evidenced input to calc_nox_speciation only. Use calc_owned_r134a at the material or work gate for each receipt, installation, reuse, recovery, external handover, return or release. Use calibrated evidence, close monthly and reconcile lots and custody stocks to the matched asset attribution interval. Verify receipts, source states and responsibility. Use ledgers for occurrence or non-occurrence; unknown is not zero. Generated refrigerant waste quantities, shares and original denominators follow cp_refrigerant_waste_origin and calc_refrigerant_waste_origin; actual dispatch only closes custody records for that origin and does not override original responsibility. | kg substance; stated activity unit | Every activity/factor application; each refrigerant service; annual factor review and each refrigerant movement, monthly close and attribution-period reconciliation | Full cohort including empty travel, idle and failures | All self-operated segments, workshops and release locations | per reference flow | Original factor tables and units, technology fit, calibration/detection limits, component balances, factor uncertainty and LCIA mapping audit ; delivery/custody/title records, batch tests, tank and service-scale calibration and upstream overlap crosswalk |
| cp_refrigerant_waste_origin | road; support_contracted_road; support_contracted_attempt | r134a_recovered_waste; u_contracted_road_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_waste | origin_tagged_refrigerant_waste_ledger | waste decision evidence/time; original generation event/lot; I/F/S state tag and location; measured generated gross/tare/net/composition and unit; original site/asset and timezone/interval; original causal task or all-user allocation fields/shares; original N and result version; retained tagged stock; movement IDs/endpoints; actual dispatch/receiver; storage loss/media; prospective treatment version and residual basis; original-model replacement/overlap evidence | Measure at the evidenced waste-decision point using calibrated weights and batch composition; join every movement to existing I/F/S stocks and tag within the physical store without another additive inventory. Fix original cohorts/denominators under calc_refrigerant_waste_origin; on every state/transfer/dispatch/loss/receiver-evidence change reconcile tagged stock, complete treatment models and original-result corrections. | kg; fraction; Item(s) | each waste decision/transfer/loss/dispatch; each local-month reconciliation | original generation interval through complete later treatment evidence | all beneficiaries of original site/asset and physical receiver chain | per reference flow | waste decision and removal-from-use evidence; calibration; batch analysis; original shares/denominators; treatment/replacement lineage |
| cp_transport_capital | road | activity_road_infrastructure; activity_charging_asset_service | physical capital service register | road segment/class; vehicle class; all-user traffic/lifetime allocation; actual self-operated loaded/empty km; provider construction/renewal/maintenance/end-of-life inventory; explicit direct-wear exclusions; charger serial; occupied session start/end; supported battery/activity interval; cohort/all-user activity kWh; complete lifetime occupied h; idle/standby kWh; component overlap crosswalk apparatus ID; port ID; occupancy start/end; nonoverlapping port intervals; concurrent occupied-port count; measured source-labelled session draws; event/session ID and start/release time; site timezone and calendar day; verified gross source addition I_k and its meter/BMS evidence; positive/zero/unknown classification; failure/cancellation reason; causal order/cohort or vehicle/task-set IDs; all-user attributed service elapsed hours including failed attempts/waits; shared-day beneficiary evidence; direct-event AC kWh; mutually exclusive branch/share ledger; electricity/source/capital overlap crosswalk | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Trace every self-operated segment to GPS/odometer and actual road/vehicle class. Obtain primary road lifecycle inventory and evidenced complete-life traffic by class; subdivide exclusive infrastructure first, allocate variable pavement renewal/maintenance by evidenced class-specific engineering damage demand and fixed capacity/safety/civil works by documented class-specific road-space*time demand. Reconcile shares over all road users; missing traffic, engineering allocation or inventory blocks completion, with no default equivalence between classes. Verify removal of explicit direct-wear releases from infrastructure background. For chargers read calibrated session clocks and paired energy/stock records; map each occupied session to supported activity under calc_electric_stock, including all users. Assign positive-source hours by allocation_charge_sources and verified zero-addition hours by allocation_charge_zero; trace battery carryover between periods, record unknown positive burdens as gaps. Audit complete charger inventory, lifetime occupied hours, idle power and exclusion from vehicle/building capital. Apply calc_transport_capital; no costs-to-activity conversion. Apparatus occupied time is the union of intervals with any occupied port, not the sum of concurrent session clocks. Split at every port-state change; allocate each interval hours equally across its actual occupied ports, a declared availability allocation choice within the same evidenced port/service configuration. Define H_k as the sum of these allocated apparatus-hours for session k; sum_k(H_k) equals whole-apparatus union hours. Different port classes/configurations need separate strata and capacity sensitivity. Use H_k, not raw overlapping session hours, in the capital calculation; complete lifetime denominator is the same whole-apparatus occupied union-hours. Retain every occupied attempt including failed/cancelled and verified zero-addition events. Measure gross addition separately from net stock change and concurrent draws; missing evidence stays unknown. Apply allocation_charge_sources only for positive I_k and allocation_charge_zero for verified zero I_k. Link causal dispatch/reservation and all-user service-time records; fix local timezone and split shared events at midnight. Reconcile branch hours to apparatus/bay occupancy and direct-event electricity to the same meter ledger once, with no fictitious stock source or route-energy duplication. | vehicle*km; h; kWh | each segment and charging session; period reconciliation; annual capital/supplier review | complete cohort including empty/failure/return tail and evidenced infrastructure/charger life | all self-operated routes and all users of charging apparatus; purchased carriage retains its own included road capital | per reference flow | GPS/odometer calibration; road-class/traffic/engineering inventory and allocation evidence; session clock and energy calibration; charger life/scope crosswalk; no-overlap review |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_contracted_road | support_contracted_road | u_contracted_road_diesel; u_contracted_road_petrol; u_contracted_road_electricity_ac; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_co2_fossil; u_contracted_road_co2_biogenic; u_contracted_road_methane; u_contracted_road_nitrous_oxide; u_contracted_road_carbon_monoxide; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_road_sulfur_dioxide; u_contracted_road_pm25; u_contracted_road_pm_coarse; u_contracted_road_tyre_pm25; u_contracted_road_r134a_air; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_recovered_product | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; provider/vehicle/battery/session IDs; synchronous clock/timezone; inlet AC meter/calibration; actual capacity and DC/BMS gross addition I_k separate from draws; opening/closing calibrated stored energy; matched configuration/temperature/age AC-equivalent curve; source vectors S_bk and transfer IDs; per-source draw/loss/closing and capital carryover; positive/zero/unknown evidence; direct E_zero; causal task and all-user local-day service-time denominators; meter and scope overlap owner; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers; chemical/vehicle/store IDs; exclusive movement ID and endpoints; installed and recovered-store opening/closing kg separately; external supply receipt kg and installed addition; reuse; other in/out by subsystem; recovery into store; external product or waste handover kg, receiver and status; medium-specific losses; terminal residual; attribution period and all-user driver; handover time and gate, gross/tare/net batch kg, composition test and uncertainty, chemical kg, purchased new/reclaimed or own custody return, title and responsibility/receiver, original outbound/return movement IDs, lot opening/closing/issue/attributed shares/returns, upstream production or reclamation and transport scope, calibration ID; waste decision evidence/time; original generation event/lot; I/F/S state tag and location; measured generated gross/tare/net/composition and unit; original site/asset and timezone/interval; original causal task or all-user allocation fields/shares; original N and result version; retained tagged stock; movement IDs/endpoints; actual dispatch/receiver; storage loss/media; prospective treatment version and residual basis; original-model replacement/overlap evidence | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace the full purchased carrier lifecycle service on its existing exclusive segment/attempt boundary with supplier-owned physical inventories. Keep custody gates, all customers, failed/repeated attempts, empty returns, idling and terminal losses. No overlap with operator-owned legs or another supplier service. Subdivide actual supplier duty cycles by leg/technology; preserve existing loaded gross mass-distance allocation (measured physical volume only with capacity evidence), closed empty/idle-cycle and mutually exclusive last-mile service-time pools. q_x=sum(actual physical exchange x*applicable all-user cohort share)/N, once. Vehicle manufacturing q=one complete vehicle*attributed activity/evidenced whole-life activity/N. Maintenance uses actual causal events or the existing fixed local-calendar asset-year pool once; retirement uses the same lifetime beneficiary fraction and residual mass. Carrier road/charger/building products and their separate upkeep/EOL are required when in scope. Tonne-km or parcel-attempt count reconciles the supplier only; it is not a fuel/hour equivalence. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. For the provider own vehicle/battery boundary apply calc_provider_electric_stock; require calibrated capacity/AC-equivalent empirical charge-discharge curves, chronological source-labelled transfers and balanced stocks. Charging source/capital-hour carryover follows allocation_charge_sources and allocation_charge_zero where defined, using this provider original activity ownership, not a second owned-fleet copy. This vehicle rule does not apply to separately metered workshop/site/installation AC. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. Apply calc_carrier_r134a to the same provider asset and recovered store; reconcile purchases, uninstalled/recovered stocks and beneficiary events by lot. Distinguish necessary service recovery from additional sale-product operations. Do not repeat original asset charge or covered terminal treatment. Use calc_carrier_r134a at the material or work gate for each receipt, installation, reuse, recovery, external handover, return or release. Use calibrated evidence, close monthly and reconcile lots and custody stocks to the matched asset attribution interval. Verify receipts, source states and responsibility. Use ledgers for occurrence or non-occurrence; unknown is not zero. Generated refrigerant waste quantities, shares and original denominators follow cp_refrigerant_waste_origin and calc_refrigerant_waste_origin; actual dispatch only closes custody records for that origin and does not override original responsibility. | card-native units; raw tkm | every event; local-month/maintenance-year reconciliation; annual/asset-change review and each refrigerant movement, monthly close and attribution-period reconciliation | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty ; delivery/custody/title records, batch tests, tank and service-scale calibration and upstream overlap crosswalk |
| cp_support_contracted_attempt | support_contracted_attempt | u_contracted_attempt_diesel; u_contracted_attempt_petrol; u_contracted_attempt_electricity_ac; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_co2_fossil; u_contracted_attempt_co2_biogenic; u_contracted_attempt_methane; u_contracted_attempt_nitrous_oxide; u_contracted_attempt_carbon_monoxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide; u_contracted_attempt_sulfur_dioxide; u_contracted_attempt_pm25; u_contracted_attempt_pm_coarse; u_contracted_attempt_tyre_pm25; u_contracted_attempt_r134a_air; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_product | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; provider/vehicle/battery/session IDs; synchronous clock/timezone; inlet AC meter/calibration; actual capacity and DC/BMS gross addition I_k separate from draws; opening/closing calibrated stored energy; matched configuration/temperature/age AC-equivalent curve; source vectors S_bk and transfer IDs; per-source draw/loss/closing and capital carryover; positive/zero/unknown evidence; direct E_zero; causal task and all-user local-day service-time denominators; meter and scope overlap owner; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers; chemical/vehicle/store IDs; exclusive movement ID and endpoints; installed and recovered-store opening/closing kg separately; external supply receipt kg and installed addition; reuse; other in/out by subsystem; recovery into store; external product or waste handover kg, receiver and status; medium-specific losses; terminal residual; attribution period and all-user driver; handover time and gate, gross/tare/net batch kg, composition test and uncertainty, chemical kg, purchased new/reclaimed or own custody return, title and responsibility/receiver, original outbound/return movement IDs, lot opening/closing/issue/attributed shares/returns, upstream production or reclamation and transport scope, calibration ID; waste decision evidence/time; original generation event/lot; I/F/S state tag and location; measured generated gross/tare/net/composition and unit; original site/asset and timezone/interval; original causal task or all-user allocation fields/shares; original N and result version; retained tagged stock; movement IDs/endpoints; actual dispatch/receiver; storage loss/media; prospective treatment version and residual basis; original-model replacement/overlap evidence | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace the full purchased carrier lifecycle service on its existing exclusive segment/attempt boundary with supplier-owned physical inventories. Keep custody gates, all customers, failed/repeated attempts, empty returns, idling and terminal losses. No overlap with operator-owned legs or another supplier service. Subdivide actual supplier duty cycles by leg/technology; preserve existing loaded gross mass-distance allocation (measured physical volume only with capacity evidence), closed empty/idle-cycle and mutually exclusive last-mile service-time pools. q_x=sum(actual physical exchange x*applicable all-user cohort share)/N, once. Vehicle manufacturing q=one complete vehicle*attributed activity/evidenced whole-life activity/N. Maintenance uses actual causal events or the existing fixed local-calendar asset-year pool once; retirement uses the same lifetime beneficiary fraction and residual mass. Carrier road/charger/building products and their separate upkeep/EOL are required when in scope. Tonne-km or parcel-attempt count reconciles the supplier only; it is not a fuel/hour equivalence. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. For the provider own vehicle/battery boundary apply calc_provider_electric_stock; require calibrated capacity/AC-equivalent empirical charge-discharge curves, chronological source-labelled transfers and balanced stocks. Charging source/capital-hour carryover follows allocation_charge_sources and allocation_charge_zero where defined, using this provider original activity ownership, not a second owned-fleet copy. This vehicle rule does not apply to separately metered workshop/site/installation AC. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. Apply calc_carrier_r134a to the same provider asset and recovered store; reconcile purchases, uninstalled/recovered stocks and beneficiary events by lot. Distinguish necessary service recovery from additional sale-product operations. Do not repeat original asset charge or covered terminal treatment. Use calc_carrier_r134a at the material or work gate for each receipt, installation, reuse, recovery, external handover, return or release. Use calibrated evidence, close monthly and reconcile lots and custody stocks to the matched asset attribution interval. Verify receipts, source states and responsibility. Use ledgers for occurrence or non-occurrence; unknown is not zero. Generated refrigerant waste quantities, shares and original denominators follow cp_refrigerant_waste_origin and calc_refrigerant_waste_origin; actual dispatch only closes custody records for that origin and does not override original responsibility. | card-native units; raw Item(s) | every event; local-month/maintenance-year reconciliation; annual/asset-change review and each refrigerant movement, monthly close and attribution-period reconciliation | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty ; delivery/custody/title records, batch tests, tank and service-scale calibration and upstream overlap crosswalk |
| cp_support_road_infrastructure | support_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace road lifecycle provision with one real complete specified constructed section at construction-completion/open-to-traffic gate; later maintenance/renewal and EOL are separate physical exchanges. For section j record geometry and one complete section Item(s). q_section=1*f_fixed,j,c/N. Fixed construction uses evidenced class-specific road-space*time shares across all users over the documented life, with exclusive subdivision first. Variable upkeep uses the existing evidenced engineering damage share f_damage,j,y,c within the actual maintenance event fixed local-calendar year y, using all-user class-specific actual engineering damage demand in that same year and fixed local timezone; it never uses a different beneficiary year or the whole-life capital share. q_event,x=actual supplied mass/energy*f_damage,j,y,c or documented causal share/N; EOL residual carriers use the applicable whole-life beneficiary share once. Do not assume vehicle-class equivalence or equate vehicle-km to an item; actual loaded/empty/failure km remains only an attribution input. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. | card-native units; raw vehicle*km | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |
| cp_support_charging_asset_service | support_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace lifecycle availability hours with a genuine complete factory-gate charger product plus actual external installation, replacement maintenance and EOL. H_k remains an attribution driver, not a physical flow or an item equivalence. For each actual apparatus j let B_j,c=sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k). H_k is the existing nonoverlapping apparatus-union-hour allocation over actual occupied ports; source vectors and carryover apply only to gross positive stock additions, and the existing direct/causal-set/fixed-day shares to verified zero additions. q_new_charger=1 complete apparatus*B_j,c/H_j,life/N; H_j,life uses the identical occupied-union basis across documented complete life including zero events and calendar retirement. Installation and final residual streams use the same physical-asset beneficiary fraction; maintenance uses causal event assignment where available, otherwise the evidenced apparatus-period all-user occupied-hour shares. Measured operating AC stays in E_total/E_zero/E_route and the separate standby site/road ledger once; no conversion of hours to kWh or item without actual lifetime. Retain original denominator N once. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. | card-native units; raw h | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |
| cp_support_depot_building | support_depot_building | u_depot_building_building_constructed; u_depot_building_repair_concrete; u_depot_building_replacement_window; u_depot_building_repair_ac; u_depot_building_removed_window; u_depot_building_demolition_concrete | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. For physical shell j use measured attributable area-time A_j,c in m2*year, zoned and allocated under the existing all-user site rules; evidence physical service life L_j in years. q_constructed_m2=A_j,c/L_j/N. Do not retain m2*a as the physical product unit. If using one whole building Item(s) instead, q=1*A_j,c/(total supported floor area*L_j)/N, with identical area basis; choose one representation only. Actual causal repair is directly assigned; genuinely shared fixed-calendar building-year repair uses evidenced all-user occupied area-time shares in that year and divides by N once. Terminal residual streams use the corresponding whole-life occupied-area-time beneficiary fraction; no repeat full original mass after earlier removals. Construction manufacture ends at handover, never includes future maintenance/demolition. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. | card-native units; raw m2*a | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_closed_cohort` | delivered_parcel | A=accepted, D=conforming delivered, R=returned, L=lost, C=cancelled after acceptance, F=finally nonconforming delivered, O=open; A=D+R+L+C+F+O; require O=0 and N=D>0. Rejected before acceptance is outside A. Each accepted parcel has one mutually exclusive final status: D for conforming recipient receipt, F for finally nonconforming recipient delivery, R for physical return after network dispatch, L for confirmed loss, C only for a resolved cancellation with handback at the original intake before network dispatch; a cancelled parcel later returned after dispatch is R, not C. Unresolved disputes remain O.  repacking/splitting retains the original accepted parent ID and counts it once only after all fragments satisfy the original obligation; consolidation retains the original accepted parcel obligations without copying or deleting N by relabelling; partially delivered consignments count by parcel. Pending parcels require closing follow-up or a separate incomplete result, never silently removed. | cp_cohort | N Item(s) and closure reconciliation | `ghg-transport-2013` |
| foreground_interface_method | svc_contracted_road; svc_contracted_attempt; svc_road_infrastructure; svc_charging_asset_service; svc_depot_building | Before measurement classify every event/scope component as foreground physical or external service under boundary_atomic_support, with no overlap. Apply existing physical-card formulas, component rules and cp_support protocols only to the former, never demand an external provider BOM or internal meter ledger to activate a service interface. For a service row s collect raw A_s,e in its fixed native unit and alpha_s,e from the existing named activity allocation: direct cohort events have alpha=1; genuinely shared events retain the original all-user driver, failure/empty/standby treatment and event window. Allocated service amount T_s=sum(A_s,e*alpha_s,e); if the native activity ledger already contains cohort-attributed activity, alpha is already applied and must not be multiplied again. q_s=T_s/N_ref, with N_ref the original positive cohort reference output. Preserve raw totals for zero output and mark the unit result incomplete. Do not convert time, area, count or transport activity to energy or equipment mass without a separate evidenced relationship. Do not apply physical capital life fractions again to a service inventory that already contains its capital allocation. Quantities for background linkage equal q_s times an inventory per one identical service unit, once; an emission factor is not the service exchange quantity. All old physical-only instructions and service prohibitions apply only to the foreground physical branch; the service branch follows this rule and its explicit interface protocol. Incomplete or aborted service events retain their evidenced attributable burden. Do not silently discard them because the interface counts completed units: document an equivalent native service quantity supported by the contract and execution records, or add a separately identified partial-service row before claiming completeness; never assume a full unit or zero. A supplier value already per the final reference is not a raw A_s,e: recover its original total and denominator before recomputation, or prove exact equivalent normalization without dividing by the final denominator again. Any included supplier allocation is applied only once. | cp_interface_contracted_road; cp_interface_contracted_attempt; cp_interface_road_infrastructure; cp_interface_charging_asset_service; cp_interface_depot_building | native service units per original reference flow |  |
| calc_interface_contracted_road | svc_contracted_road | Apply foreground_interface_method. Native activity A_s,e (t*km): sum(actual gross payload tonnes * actual loaded leg km); match the existing exclusive trunk-leg pool, including allocated empty/failure activity. Use the existing activity_contracted_road beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/N once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_contracted_road; activity_contracted_road | t*km/N |  |
| calc_interface_contracted_attempt | svc_contracted_attempt | Apply foreground_interface_method. Native activity A_s,e (Item(s)): count distinct physically executed parcel-attempt IDs, successful or failed; a repeated visit is a new attempt only with a distinct execution record; exclude trunk carriage already assigned to another leg. Use the existing activity_contracted_attempt beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/N once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_contracted_attempt; activity_contracted_attempt | Item(s)/N |  |
| calc_interface_road_infrastructure | svc_road_infrastructure | Apply foreground_interface_method. Native activity A_s,e (vehicle*km): actual vehicle km on the identified section/class, including empty/failure km; service covers road construction, upkeep and terminal responsibility with the existing fixed and damage allocation policy. Use the existing activity_road_infrastructure beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/N once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_road_infrastructure; activity_road_infrastructure | vehicle*km/N |  |
| calc_interface_charging_asset_service | svc_charging_asset_service | Apply foreground_interface_method. Native activity A_s,e (h): actual nonoverlapping apparatus occupancy hours assigned under the existing positive-source/verified-zero event rules, including concurrent-port shares; electricity is excluded. Use the existing activity_charging_asset_service beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/N once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_charging_asset_service; activity_charging_asset_service | h/N |  |
| calc_interface_depot_building | svc_depot_building | Apply foreground_interface_method. Native activity A_s,e (m2*a): actual occupied floor area m2 * elapsed years on the documented calendar basis, with the original shared-space attribution. Use the existing activity_depot_building beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/N once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_depot_building; activity_depot_building | m2*a/N |  |
| `calc_allocate` | all inventory rows | A_r=sum_j(T_rj*s_cj); s_cj=cohort physical driver / all-customer physical driver at the same segment/task; require positive finite denominator, sum customer shares=1 and full raw total reconciliation. Use allocation_segment, allocation_lastmile and allocation_depot, never tariff revenue as the default. | cp_road; cp_depot; cp_supplier | A_r in row native unit | `ghg-transport-2013` |
| `calc_normalize` | all inventory rows | q_r=A_r/N once only; delivered_parcel=N/N=1. Do not divide upstream already-per-service intensity by N again: multiply it by compatible raw contracted activity first. Intermediate quantities, losses and returns remain actual activity. The applicable calc_electric_stock or calc_provider_electric_stock already returns final traction MJ per N; use that value directly on its traction row with no extra share, 3.6 or division by N. Use the matching final reference-basis result from calc_owned_r134a or calc_carrier_r134a for road refrigerant. Its division is the same operation as the card’s A-quantity formula; do not divide by N again. | A_r; N | q_r per 1 delivered parcel | `ghg-transport-2013` |
| `calc_stock_energy` | diesel; petrol; depot_electricity | Fuel consumed=opening+external receipts+inward transfers-outward transfers-closing; kg=V_L*rho(actual temperature/batch). For depot AC remove overlapping charger inlet readings, then convert the attributed depot kWh to MJ by 3.6. Output allocated native totals before N for calc_normalize. road_electricity is finalized by calc_electric_stock in MJ/N and is outside this rule and any repeat conversion. | cp_road; cp_depot | allocated native kg or MJ before N | `ghg-transport-2013` |
| `calc_releases` | road species and disjoint particle fractions except refrigerant | E_x=sum(activity_j*EF_xj), with factor substance, mass basis, technology, compartment and period verified from original. Apply composition and destination once only if not already included. Fossil CO2 excludes measured biogenic share; biogenic CO2 needs its own card when present. Total NOx is QA only; obtain separate NO/NO2 via calc_nox_speciation; PM2.5 and 2.5–10 ranges must not overlap; no PM10 addition to both. Wear is not exhaust; no additive GHG basket alongside component gases. For refrigerant use only calc_owned_r134a or calc_carrier_r134a, never this factor rule again. | cp_emission | Allocated kg of one substance to one compartment then /N | `ghg-transport-2013` |
| calc_owned_r134a | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air | Within this entry's declared applies_to scope, apply the complete ordered rule group: common_calc_owned_r134a_identity; common_calc_owned_r134a_stocks; common_calc_owned_r134a_initial_scope; common_calc_owned_r134a_custody; common_calc_owned_r134a_supply_origin; common_calc_owned_r134a_allocation; common_calc_owned_r134a_outputs; common_calc_owned_r134a_waste_priority. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; common_calc_owned_r134a_identity; common_calc_owned_r134a_stocks; common_calc_owned_r134a_initial_scope; common_calc_owned_r134a_custody; common_calc_owned_r134a_supply_origin; common_calc_owned_r134a_allocation; common_calc_owned_r134a_outputs; common_calc_owned_r134a_waste_priority | separate new supply, purchased reclaimed supply, named recovery product/waste and air kg per original N |  |
| calc_road_maintenance_waste | spent_tyre; spent_oil; spent_battery | For each named material and original maintenance generation event j, G_j is measured kg at the generation gate, not later dispatch or the residual after storage loss. On one evidenced wet/dry/composition basis reconcile C=O+G+I_in-I_out-D_out-L; if reconstruction is necessary, G=C-O-I_in+I_out+D_out+L. I_in/I_out are paired internal custody transfers, not new generation; L contains only independently evidenced actual physical losses, with moisture changes separately supported by basis conversions. Direct causality takes precedence; otherwise allocation_maintenance_period fixes s_origin_j from all-user kilometres of the original asset-local year y. q=sum_j(G_j*s_origin_j)/original N once; storage and transfer preserve original event/year/shares/denominator. The generation-gate waste link uses this same G basis through storage, transport and supported final treatment; later treatment receives only the compatible residual after verified storage losses/state changes. An explicit release replaces the identical release already included in that link: do not treat full G again plus the same loss. Global allocation_atomic_waste and original-event receiver-evidence replacement remain applicable. Unknown basis, transfer endpoints, loss medium or fate remains incomplete. | cp_waste; allocation_maintenance_period; allocation_atomic_waste | original-event generated kg/N and separate custody/loss/treatment reconciliation |  |
| calc_carrier_r134a | u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Within this entry's declared applies_to scope, apply the complete ordered rule group: common_calc_owned_r134a_identity; common_calc_owned_r134a_stocks; common_calc_owned_r134a_initial_scope; common_calc_owned_r134a_custody; common_calc_owned_r134a_supply_origin; common_calc_owned_r134a_allocation; common_calc_owned_r134a_outputs; common_calc_owned_r134a_waste_priority. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt; cp_refrigerant_waste_origin; common_calc_owned_r134a_identity; common_calc_owned_r134a_stocks; common_calc_owned_r134a_initial_scope; common_calc_owned_r134a_custody; common_calc_owned_r134a_supply_origin; common_calc_owned_r134a_allocation; common_calc_owned_r134a_outputs; common_calc_owned_r134a_waste_priority | separate new supply, purchased reclaimed supply, named recovery product/waste and air kg per original N |  |
| calc_refrigerant_waste_origin | r134a_recovered_waste; u_contracted_road_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_waste | Within this entry's declared applies_to scope, apply the complete ordered rule group: calc_refrigerant_waste_origin_generation; calc_refrigerant_waste_origin_quantities; calc_refrigerant_waste_origin_state_ledger; calc_refrigerant_waste_origin_fate_updates. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_emission; cp_support_contracted_road; cp_support_contracted_attempt; cp_refrigerant_waste_origin; calc_refrigerant_waste_origin_generation; calc_refrigerant_waste_origin_quantities; calc_refrigerant_waste_origin_state_ledger; calc_refrigerant_waste_origin_fate_updates | original generated mass per original N; separate physical dispatch |  |
| `calc_assets` | diesel_van; petrol_van; electric_van; sorting_machine; activity_depot_building | Vehicle fractions=cohort vehicle-km/lifetime vehicle-km; machine fractions=cohort machine-hours/lifetime machine-hours; building m2*a=allocated occupied m2*occupied days/365. Review lifetime evidence/scenarios, asset original components, replacement maintenance and EOL inclusions before summing; each component belongs to one boundary only. Only the explicitly named activity_* terms are raw supporting-activity diagnostics, never product exchanges; retained physical product/waste terms keep their original quantities, units and exchange role. Apply the separate physical-disaggregation rules only to the removed service terms. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_assets; cp_depot_assets | Allocated asset/service quantity then /N | `ghg-transport-2013` |
| `calc_replacement_materials` | replacement_tyre; replacement_battery; lubricating_oil | For each actual maintenance job, installed mass M_j=job issues minus uninstalled returns; reconcile opening unused stock+receipts+inward transfers-outward transfers-closing unused stock against all job installed amounts and retain measured unit mass for count-to-kg conversion. Lubricant uses actual new-oil fill mass, without deducting drained spent oil from new input. Attribute actual maintenance material mass to the causal vehicle and cohort using allocation_segment and allocation_lastmile: A_r=sum_j(M_j*s_cj), then q_r=A_r/N once; do not multiply by complete-vehicle lifetime fractions again. The same replacement/maintenance material already included in a complete-asset or maintenance service dataset is mutually exclusive with this rule; inseparable overlap makes results incomplete. The assignment is fixed by allocation_maintenance_period: A_r=sum_y(M_r,y*cohort_km_y/all_user_km_y) plus directly assigned causal-incident kg, never a full-cohort km numerator repeated in every year. | cp_assets; cp_road; N | kg of actually replaced tyre, LFP battery or new lubricant per delivered parcel | `ghg-transport-2013` |
| calc_waste_origin | waste_label_paper; waste_cardboard; waste_pp | For each named ordinary solid-waste stream r and generation event j, A_c,r = sum_j(G_j,r*s_c,j), then q_c,r=A_c,r/original_reference_count once. G is measured generated mass, not dispatch mass. Reconcile each material and original event: closing = opening + generation + internal_in - internal_out - external_dispatch - evidenced_physical_loss. Record actual moisture/composition changes and mutually exclusive losses/releases; no invented residual and no full residual mass plus the same released constituent. Internal transfers preserve origin and do not create another exchange. Model the original cohort waste output and its required storage/transport/final treatment even while physically retained, using actual compatible receiver evidence or an explicitly evidenced material/composition/location-matched prospective route with uncertainty. Destination fractions close to one and enter once; no default recycling or zero treatment for retained mass. Unsupported fate stays incomplete. Keep observed custody stock/dispatch as a control ledger, not another inventory addition. Later receiver evidence replaces the same event prospective model and recomputes the original cohort with its original denominator; never add that mass/treatment to a later cohort. Include every necessary lifecycle leg once through a scope crosswalk; exclude site/storage energy and handling already included by site/service inventories. Capital terminal-waste lifetime fractions and wastewater balances retain their separate rules. Here original_reference_count is the original cohort N. The generated-waste exchange is at the generation gate. Its linked complete waste-management inventory takes one kg on that same generated-mass basis through storage and all subsequent fates; final-treatment input is only the compatible measured/evidenced forecast residual after storage losses/moisture conversion, not the full original kg plus separate losses. Explicit storage releases replace the same included release in that linked inventory; a storage/handling operation already in site/service pools is removed from the waste link by a recorded scope crosswalk, never counted twice. | cp_depot_waste; cp_cohort | generated waste kg per original reference flow; origin stock and treatment revision ledger |  |
| calc_electric_stock | road_electricity | Meter-plus-stock energy E_total = metered inlet AC + opening AC-equivalent stored kWh + traced stored-energy imports - closing AC-equivalent stored kWh - traced stored-energy exports. All values cover identical physical boundaries and complete intervals; validate the configuration/temperature/age-matched empirical AC-equivalent curve under the collection protocol, preserving source vectors on transfers and charging losses once. Unknown stock/conversion is incomplete, never zero. Separate measured zero-addition direct-event AC E_zero from E_total before any route allocation: E_route=E_total-E_zero. A negative unexplained residual blocks completion. Assign E_route by the existing mutually exclusive route/motion/stop pools; assign E_zero only by allocation_charge_zero, with all-user shares and no fictitious stock source. Site/noncharging electricity remains exclusively in its separate site/support cards. Define K_traction as the sum of the cohort-assigned residual-route and direct zero-event energy (unnormalized kWh); road_electricity=3.6*K_traction/N. Write this final result directly to the traction row; calc_provider_electric_stock independently finalizes contracted rows at their own boundary. | cp_road; cp_cohort | MJ per reference flow |  |
| calc_transport_capital | activity_road_infrastructure; activity_charging_asset_service | Road activity = sum(actual self-operated segment vehicle-km * its cohort share)/N, including empty/failure legs; use the declared motion/empty-tour shares, not parcel t*km as a vehicle-km substitute. Match each road/vehicle class to the cp_transport_capital infrastructure intensity once. Charger activity = [sum_positive(H_k*a_c,k) + sum_zero(H_k*z_c,k)]/N. H_k is nonoverlapping allocated apparatus-hours from cp_transport_capital. For verified gross source addition I_k>0, a_c,k is the allocation_charge_sources beneficiary share, retaining source stock carryover. For verified I_k=0, z_c,k is the mutually exclusive direct/causal-set/fixed-day share in allocation_charge_zero. Never divide zero-addition events by energy or drop their occupied hours. Source additions are gross, not net SOC changes. All-user shares close to one; no full-cohort km repeated independently per session.  Complete charger intensity uses its full lifecycle inventory/lifetime occupied apparatus-hours, with idle/underuse and calendar retirement reflected. Standby electricity is measured over occupied and idle intervals, allocated by supported activity to all beneficiaries and included once in site/road electricity, never both. Verify exact component/module removals from vehicle, building and purchased-carriage scopes; absence of compatible evidence blocks completion. Replace raw session occupied h by H_k under cp_transport_capital; use allocation_charge_sources for positive additions and allocation_charge_zero for verified zero additions. Direct-event failed-attempt AC is assigned under the same zero-event shares once and removed from residual route-energy allocation; non-event idle standby remains separately reconciled, never duplicated. These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_transport_capital; route and cohort ledger; calc_electric_stock | raw activity diagnostic: vehicle*km; occupied charging h per reference flow |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_contracted_road | u_contracted_road_diesel; u_contracted_road_petrol; u_contracted_road_electricity_ac; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_co2_fossil; u_contracted_road_co2_biogenic; u_contracted_road_methane; u_contracted_road_nitrous_oxide; u_contracted_road_carbon_monoxide; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_road_sulfur_dioxide; u_contracted_road_pm25; u_contracted_road_pm_coarse; u_contracted_road_tyre_pm25; u_contracted_road_r134a_air; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_recovered_product | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Within this entry's declared applies_to scope, apply the complete ordered rule group: common_activity_contracted_road. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_support_contracted_road; common_activity_contracted_road | raw tkm plus uniquely attributed physical totals, not a service product |  |
| activity_contracted_attempt | u_contracted_attempt_diesel; u_contracted_attempt_petrol; u_contracted_attempt_electricity_ac; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_co2_fossil; u_contracted_attempt_co2_biogenic; u_contracted_attempt_methane; u_contracted_attempt_nitrous_oxide; u_contracted_attempt_carbon_monoxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide; u_contracted_attempt_sulfur_dioxide; u_contracted_attempt_pm25; u_contracted_attempt_pm_coarse; u_contracted_attempt_tyre_pm25; u_contracted_attempt_r134a_air; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_product | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Within this entry's declared applies_to scope, apply the complete ordered rule group: common_activity_contracted_road. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_support_contracted_attempt; common_activity_contracted_road | raw Item(s) plus uniquely attributed physical totals, not a service product |  |
| activity_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. For section j record geometry and one complete section Item(s). q_section=1*f_fixed,j,c/N. Fixed construction uses evidenced class-specific road-space*time shares across all users over the documented life, with exclusive subdivision first. Variable upkeep uses the existing evidenced engineering damage share f_damage,j,y,c within the actual maintenance event fixed local-calendar year y, using all-user class-specific actual engineering damage demand in that same year and fixed local timezone; it never uses a different beneficiary year or the whole-life capital share. q_event,x=actual supplied mass/energy*f_damage,j,y,c or documented causal share/N; EOL residual carriers use the applicable whole-life beneficiary share once. Do not assume vehicle-class equivalence or equate vehicle-km to an item; actual loaded/empty/failure km remains only an attribution input. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_road_infrastructure | raw vehicle*km plus uniquely attributed physical totals, not a service product |  |
| activity_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. For each actual apparatus j let B_j,c=sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k). H_k is the existing nonoverlapping apparatus-union-hour allocation over actual occupied ports; source vectors and carryover apply only to gross positive stock additions, and the existing direct/causal-set/fixed-day shares to verified zero additions. q_new_charger=1 complete apparatus*B_j,c/H_j,life/N; H_j,life uses the identical occupied-union basis across documented complete life including zero events and calendar retirement. Installation and final residual streams use the same physical-asset beneficiary fraction; maintenance uses causal event assignment where available, otherwise the evidenced apparatus-period all-user occupied-hour shares. Measured operating AC stays in E_total/E_zero/E_route and the separate standby site/road ledger once; no conversion of hours to kWh or item without actual lifetime. Retain original denominator N once. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_charging_asset_service | raw h plus uniquely attributed physical totals, not a service product |  |
| activity_depot_building | u_depot_building_building_constructed; u_depot_building_repair_concrete; u_depot_building_replacement_window; u_depot_building_repair_ac; u_depot_building_removed_window; u_depot_building_demolition_concrete | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. For physical shell j use measured attributable area-time A_j,c in m2*year, zoned and allocated under the existing all-user site rules; evidence physical service life L_j in years. q_constructed_m2=A_j,c/L_j/N. Do not retain m2*a as the physical product unit. If using one whole building Item(s) instead, q=1*A_j,c/(total supported floor area*L_j)/N, with identical area basis; choose one representation only. Actual causal repair is directly assigned; genuinely shared fixed-calendar building-year repair uses evidenced all-user occupied area-time shares in that year and divides by N once. Terminal residual streams use the corresponding whole-life occupied-area-time beneficiary fraction; no repeat full original mass after earlier removals. Construction manufacture ends at handover, never includes future maintenance/demolition. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_depot_building | raw m2*a plus uniquely attributed physical totals, not a service product |  |
| calc_atomic_physical | u_contracted_road_diesel; u_contracted_road_petrol; u_contracted_road_electricity_ac; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_co2_fossil; u_contracted_road_co2_biogenic; u_contracted_road_methane; u_contracted_road_nitrous_oxide; u_contracted_road_carbon_monoxide; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_road_sulfur_dioxide; u_contracted_road_pm25; u_contracted_road_pm_coarse; u_contracted_road_tyre_pm25; u_contracted_road_r134a_air; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_recovered_product; u_contracted_attempt_diesel; u_contracted_attempt_petrol; u_contracted_attempt_electricity_ac; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_co2_fossil; u_contracted_attempt_co2_biogenic; u_contracted_attempt_methane; u_contracted_attempt_nitrous_oxide; u_contracted_attempt_carbon_monoxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide; u_contracted_attempt_sulfur_dioxide; u_contracted_attempt_pm25; u_contracted_attempt_pm_coarse; u_contracted_attempt_tyre_pm25; u_contracted_attempt_r134a_air; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_product; u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_repair_concrete; u_depot_building_replacement_window; u_depot_building_repair_ac; u_depot_building_removed_window; u_depot_building_demolition_concrete | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. For operational physical flow x in matched provider interval j, recover Q_x,j in that card native physical unit from metering, stock balance, work orders or a compatible species/material-specific unit inventory. If source intensity is per activity unit, first Q_x,j=intensity_x,j*actual_all_user_activity_j; do not use money, a generic service emission basket, or an already per-reference amount without recovering its original basis. Then q_x=sum_j(Q_x,j*s_c,x,j)/N_ref once, with the fixed process driver and all-user shares. Electricity kWh converts to MJ by 3.6 once when the card uses MJ; other count/mass/volume conversions need measured configured unit mass, density, concentration and moisture as applicable. A shared meter or upstream product/service covering the same quantity/period/scope is removed by a measured overlap crosswalk, not by an assumed fraction. For traction AC and carrier R134a, use the respective dedicated final calculation directly and do not apply this generic rule again. | cp_support_contracted_road; cp_support_contracted_attempt; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_depot_building | card-native physical unit per original reference flow |  |
| calc_atomic_capital | u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. For each physical asset serial/cohort a, Q_a is its actual manufacturing/construction-gate quantity in the card unit. Set f_c,a=attributed physical lifetime activity_c,a/evidenced full-life all-user activity_a, using the process/asset-specific driver and identical configuration/capacity units. Manufacture q=sum(Q_a*f_c,a)/N_ref; each initial and whole-asset replacement creates its own asset cohort and enters once, not an additional current-period maintenance item. Installation physical quantities outside the asset product gate use that same installed-asset fraction. Terminal residual quantity in its own declared unit, evidenced from matched retirement or a prospective residual/reuse/retention plan, uses exactly the same f_c,a and original reference denominator; actual custody transfers only verify/update it. Earlier removed parts are excluded from terminal residual. Restate life and all original beneficiary cohorts under calc_capital_restatement; lifetime estimates need evidence and sensitivity, never numeric defaults. Genuine component repairs/replacements use actual causal events or the fixed provider maintenance-year shares, not another whole-life fraction. A whole component reused as a separately commissioned capital asset instead receives its own serial/lifetime register, never both treatments. | cp_support_contracted_road; cp_support_contracted_attempt; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_depot_building | manufacturing product and paired terminal residual, same lifetime fraction |  |
| calc_capital_restatement | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Within this entry's declared applies_to scope, apply the complete ordered rule group: calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | source-native unit per original cohort N_c; separate physical controls |  |
| capital_contracted_road_diesel_van | u_contracted_road_diesel_van; u_contracted_road_eol_diesel_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contracted_road_diesel_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/N, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contracted_road_eol_diesel_van: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contracted_road | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_contracted_road_petrol_van | u_contracted_road_petrol_van; u_contracted_road_eol_petrol_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contracted_road_petrol_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/N, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contracted_road_eol_petrol_van: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contracted_road | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_contracted_road_electric_van | u_contracted_road_electric_van; u_contracted_road_eol_electric_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contracted_road_electric_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/N, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contracted_road_eol_electric_van: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contracted_road | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_contracted_road_diesel_truck | u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_truck | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contracted_road_diesel_truck: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/N, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contracted_road_eol_diesel_truck: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contracted_road | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_contracted_attempt_diesel_van | u_contracted_attempt_diesel_van; u_contracted_attempt_eol_diesel_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contracted_attempt_diesel_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/N, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contracted_attempt_eol_diesel_van: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contracted_attempt | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_contracted_attempt_petrol_van | u_contracted_attempt_petrol_van; u_contracted_attempt_eol_petrol_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contracted_attempt_petrol_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/N, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contracted_attempt_eol_petrol_van: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contracted_attempt | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_contracted_attempt_electric_van | u_contracted_attempt_electric_van; u_contracted_attempt_eol_electric_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contracted_attempt_electric_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/N, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contracted_attempt_eol_electric_van: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contracted_attempt | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_road_infrastructure_constructed_section | u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_road_infrastructure_constructed_section: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. For this exact completed section, f_fixed is attributed class-specific road-space*time demand divided by all-user road-space*time demand across its evidenced whole physical life, after exclusive subdivision. q=one complete constructed section*f_fixed/N; do not multiply again by vehicle-km. Later variable upkeep is not embedded in this manufacturing product. Terminal row u_road_infrastructure_eol_asphalt: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Terminal row u_road_infrastructure_eol_concrete: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_road_infrastructure | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_charging_asset_service_charger_manufactured | u_charging_asset_service_charger_manufactured; u_charging_asset_service_charger_eol | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_charging_asset_service_charger_manufactured: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N. Link this physical asset/installation to the actual charger serial. f_j,c=[sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)]/H_j,life. H uses nonoverlapping complete-apparatus occupied union-hours with the existing port allocation; H_j,life includes all users and positive/zero events through evidenced calendar retirement. Positive-source carryover and zero-event direct/causal/fixed-day rules remain unchanged. q_charger=one complete apparatus*f_j,c/N; installation physical quantity*q fraction follows the same f. Hours are only the attribution driver, never Item(s) or energy conversion. Terminal row u_charging_asset_service_charger_eol: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_charging_asset_service | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_charging_asset_service_installation_concrete | u_charging_asset_service_installation_concrete; u_charging_asset_service_foundation_concrete_eol | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_charging_asset_service_installation_concrete: Q_a is actual unamortized kg at the declared product gate; q=sum(Q_a*f_c,a)/N. Use an independent foundation asset/cohort ID. f_foundation = cohort-attributed foundation-supported apparatus occupied union-hours / evidenced complete foundation-life occupied union-hours of ALL supported chargers/users, across charger generations. Match capacity/configuration strata and equal-share concurrent occupied-port hours before source/zero-event cohort attribution. The original concrete quantity and terminal foundation concrete use this identical f_foundation and original final denominator. A foundation retained after charger retirement remains in its own life register; replacement casting is a new actual foundation cohort, not a current repair quantity. Missing supported foundation life or all-beneficiary use blocks completion. Terminal row u_charging_asset_service_foundation_concrete_eol: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_charging_asset_service | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_charging_asset_service_installation_ac | u_charging_asset_service_installation_ac | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_charging_asset_service_installation_ac: Q_a is actual unamortized MJ at the declared product gate; q=sum(Q_a*f_c,a)/N. Link this physical asset/installation to the actual charger serial. f_j,c=[sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)]/H_j,life. H uses nonoverlapping complete-apparatus occupied union-hours with the existing port allocation; H_j,life includes all users and positive/zero events through evidenced calendar retirement. Positive-source carryover and zero-event direct/causal/fixed-day rules remain unchanged. q_charger=one complete apparatus*f_j,c/N; installation physical quantity*q fraction follows the same f. Hours are only the attribution driver, never Item(s) or energy conversion.  Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_charging_asset_service | asset-native physical unit per N; linked terminal native unit, same f |  |
| capital_depot_building_building_constructed | u_depot_building_building_constructed; u_depot_building_demolition_concrete | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_depot_building_building_constructed: Q_a is actual unamortized m2 at the declared product gate; q=sum(Q_a*f_c,a)/N. For this exact completed shell use attributed measured occupied area-time A_c and an evidenced complete physical service life L years, including calendar retirement; q_m2=A_c/L/N. The equivalent whole-building fraction is f=A_c/(the identical-basis total supported floor area*L). All users share the same capacity denominator; m2*a is not a physical output unit. Use the same whole-building f for terminal residual wastes. Terminal row u_depot_building_demolition_concrete: native kg, q=sum(R_a*f_c,a)/N; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_depot_building | asset-native physical unit per N; linked terminal native unit, same f |  |
| calc_atomic_species | all elementary physical rows | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Each elementary row identifies one substance or physically specified particle carrier and one receiving medium/subcompartment. Collect the actual substance/CAS or verified chemical identity, factor unit and mass/molar/carbon expression, source technology/fuel/load, location and receiving medium. Apply a substance-specific measured release or compatible factor once. Factory emissions already in a complete product gate are not also direct provider-use emissions. Particle size classes and fate fractions are mutually exclusive; physically defined particles are not fictitious pure elements. NOx and NMVOC totals are QA observations only, never elementary-exchange substitutes. Every actual extra species/material needs its own concrete bilingual source row, protocol, unit, fixed calculation and normal projection before completed modelling; do not use a selector or a family-name placeholder. | cp_support_contracted_road; cp_support_contracted_attempt; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_depot_building | one substance or defined physical carrier per receiver |  |
| calc_nox_speciation | nitrogen_monoxide_air; nitrogen_dioxide_air; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide | For the explicitly evidenced definition NOx=NO+NO2 expressed as NO2-equivalent, record T, its unit/basis and source-matched measured molar fraction a=n_NO/(n_NO+n_NO2). Then m_NO=a*T*M_NO/M_NO2 and m_NO2=(1-a)*T, using independently evidenced molecular masses on the same unit basis. Prefer direct substance-specific mass measurements/factors when available and do not add the QA total again. T is not ordinary NO/NO2 mixture mass; never apply a mass fraction directly to T or assign all T to NO2. If definition includes other nitrogen species, speciation or conversion evidence is missing, no two-component split is permitted: preserve the raw QA observation and block completion until actual species-specific rows and quantities are established. No numeric fraction or molecular mass is defaulted by this PCR. | cp_emission; cp_support_contracted_road; cp_support_contracted_attempt | kg NO and kg NO2, never NO2-equivalent exchange |  |
| calc_nmvoc_species | actual volatile organic species, concrete source rows required before completion | For each actual combustion/evaporation source, use source-matched calibrated species-resolved sampling/analysis or a traceable species-resolved factor inventory matching fuel, engine/process, control, load, cold/hot regime and period. Retain sampling recovery, calibration/response factors, detection and uncertainty, chemical identity, carbon-versus-compound basis and explicit conversions from formula/molecular data. Reconcile identified species to the measured/factor total on its original stated basis, investigating nonclosure; unidentified material is not zero and not a generic NMVOC exchange. Before completed modelling, author each actually supported species as its own named bilingual elementary card, matching compartment, quantity rule and protocol, then regenerate structured. Do not guess a fixed benzene/toluene/etc. roster, use total NMVOC as one species, or claim an exhaustive species inventory before this evidence exists. | cp_emission | individual supported compound kg; unresolved speciation blocks completion |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_electric_stock | u_contracted_road_electricity_ac; u_contracted_attempt_electricity_ac | Within each independently metered provider vehicle/battery boundary and complete interval j, E_total=inlet_AC+opening_AC_equivalent+traced_imports-closing_AC_equivalent-traced_exports (kWh). Calibrate usable capacity and empirical inlet-AC/stored-energy curves for the same configuration, temperature and age; percentage SOC or a default efficiency is insufficient. Preserve chronological source vectors on every battery transfer and charging/draw/loss/closing balance, including future beneficiaries and capital-hour carryover; unsupported conversion or unknown stock blocks completion. Remove independently metered direct verified-zero-gross-addition event AC E_zero before route allocation: E_route=E_total-E_zero; unexplained negative residual blocks completion. Allocate E_route using the fixed provider activity_* driver and all users at matching route/task intervals, including empty/failure work. E_zero belongs first to its evidenced causal order, then documented causal task set by actual elapsed service time; genuinely shared noncausal failures use a fixed site-local calendar-day all-user elapsed-service-time pool including failures/waits, splitting at midnight. Unknown gross addition is never zero. No route share is multiplied again onto E_zero. q_AC=(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))*3.6/N, once. Do not reapply provider shares to already attributed physical totals, add another charging-loss uplift, or include workshop/site/installation electricity in this vehicle pool. A compatible supplier intensity must demonstrate this same stock/ownership closure before use; otherwise collect original raw records. Physical-capital f remains its separately fixed lifetime driver, never a second annual energy share. | cp_support_contracted_road; cp_support_contracted_attempt | MJ per original reference flow |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_maintenance_period | u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_r134a_supply; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_recovered_product; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_r134a_supply; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_product; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_depot_building_repair_concrete; u_depot_building_replacement_window; u_depot_building_repair_ac; u_depot_building_removed_window | For every shared routine supporting-provider maintenance pool, fix interval y to the site-local calendar year with timezone and exact asset/site/configuration recorded. Split a cohort crossing years into its within-year activity. Actual installed/consumed material M_x,y and its separately measured generated waste use s_c,y=cohort-attributed beneficiary driver_y/all-beneficiary driver_y for that same year, then q=sum_y(M_x,y*s_c,y)/N_ref once. The driver is the physical support-process activity fixed in activity_*; for vehicle upkeep it is actual vehicle kilometres including once-attributed empty/failure travel, for variable road upkeep it is evidenced class-specific engineering damage in the same year, and for building fabric it is reserved floor-area-calendar-hours. Other shared support equipment uses its fixed actual all-beneficiary task/cycle/union-hour driver; retain exact configuration strata and no concurrency duplication. A signed maintenance work order fixes the causal asset and task pool before calculation, not a later modeller choice. Specific accident/failure repair is allocated exclusively to its evidenced causal order/task set, never also to the annual routine pool. Genuine component consumption excludes unused opening/closing stocks, uninstalled returns and internal transfers; generated removed parts retain this original event/year/share through later custody. No assumption that input and removed-part masses are identical. Apply one annual period share, not whole-life f, to real component repairs; entire replacement assets create separate capital cohorts instead. A positive unsupported pool or zero/unknown all-user denominator blocks completeness. Apply the same rules to retained provider maintenance cards where previously referenced; independent specific generation/fate balances and exact overlap exclusions remain mandatory. For vehicle R134a supply, recovery and release, calc_carrier_r134a is the sole quantity rule. This rule supplies only its same asset-year driver and causal attribution. The dedicated refrigerant calculation owns each purchase, first use, recovery and release; this row supplies no second refrigerant purchase or removed-part inventory. | cp_support_contracted_road; cp_support_contracted_attempt; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_depot_building | native physical unit per original reference flow |  |
| common_calc_owned_r134a_identity | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Component of calc_owned_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Record ownership, custody, processing responsibility, physical gate and both endpoints for each batch and movement ID. All balance terms are kg of the named chemical. Obtain net batch B=gross weight minus tare on a calibrated scale; determine chemical mass fraction x from batch-matched supply or receiver tests or calibrated analysis, then use B*x. Use an independently measured chemical mass once. Activate the named exchange only with evidence matching its material specification; assume neither 100% nor a default purity. For a different mixed product or mixed waste containing oil/water or other components, record its actual carrier, wet net batch mass and receiver state in a distinct row. Retain refrigerant constituent kg for mass balance only; do not add a second independent output for that same carrier. If no actual carrier row exists, add the concrete bilingual row and protocol and verify its official identity. Unknown composition, actual object or responsibility blocks completion. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| common_calc_owned_r134a_stocks | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Component of calc_owned_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Installed ledger: L_inst=I_open+X_install+U+I_other_in-I_close-R-I_other_out. R is the matched installed-out/store-in recovery, U is matched store-out/installed-in reuse and X_install is installation from the unused new-material store only. Recovered/reclaimed store: L_store=S_open+R+S_external_in+S_internal_in-S_close-U-P_ext-W_ext-S_internal_out-S_other_out. P_ext/W_ext are named-chemical constituent kg in actual product/waste handovers from that store, including constituents of mixed carriers for reconciliation. A direct handover from installed stock uses I_other_out and the actual output once with the same ID, without R/P_ext/W_ext; evidence other outflows separately. Uninstalled new store: F_open+F_purchase+F_transfer_in-F_close-X_install-F_transfer_out-F_return=F_other_out; substantiate each actual loss and other fate in F_other_out. Paired internal moves cancel over the combined boundary. Resolve all positive residuals to evidenced events and media. Only verified air release enters the air row, including verified unused-store air loss if it occurs. Unknown, negative or unreconciled balances or unsupported media block completion. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| common_calc_owned_r134a_initial_scope | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Component of calc_owned_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Original fill belongs to the complete vehicle; count workshop, external treatment and vehicle terminal coverage once by movement ID and responsibility. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| common_calc_owned_r134a_custody | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Component of calc_owned_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. S_external_in=S_purchased+S_custody. S_purchased is an externally reclaimed product accepted for this system. For own refrigerant returned from offsite processing under retained responsibility, use S_custody and match original lot, dispatch/return IDs and custody/title evidence. Do not repurchase its original material; inventory actual external reclamation, loss, transport and treatment once on its evidenced boundary, removing overlap. Keep other entrusted lots in a segregated custody ledger, reconcile and return them to the responsible party, and exclude them from U. Where this service actually takes external waste reception, reclamation or use responsibility, review that processing boundary, concrete input and treatment chain before completion. Unsupported or out-of-scope processing cannot be claimed complete. Paired moves inside the same responsibility boundary are internal only. U takes only accepted recharge-ready material within the service responsibility. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| common_calc_owned_r134a_supply_origin | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Component of calc_owned_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At physical receipt, register each purchase or equivalent acquisition of title once by receipt ID, as new supply F_purchase or purchased reclaimed product S_purchased accepted for recharge. Retain the matched supplier inventory for each batch: include new production or reclamation and compatible supply transport once, removing exact overlap with carriage or workshop coverage. Preserve source vectors through opening/closing uninstalled and recovered stocks, transfers, supplier returns, installation, disposal and release. For a physically blended same-state store with indistinguishable lots, remove source fractions in proportion to verified pre-movement source kg. Keep gross receipts in the physical ledger. Assign original supply burden when the lot first supplies an actual installation in this service or has an evidenced irreversible loss attributable to it, marking the allocated fraction. Later recovery, reuse or disposal carries only new operations, with no second purchase burden. Carry usable uninstalled stock and its unapplied supply burden forward; unused supplier returns or internal transfer alone do not enter service consumption. Across periods, allocated fractions cannot exceed the eligible lot. Apply evidenced direct causality or the matched all-user driver once. Join the original lot and beneficiary event; do not use receipt-period total as the cohort input or rebook the same lot. Put only cohort-attributed supply kg on the service input rows. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| common_calc_owned_r134a_allocation | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Component of calc_owned_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For the exact asset and site-local calendar maintenance year, assign evidenced exclusive causal events first, then allocate the remainder by cohort kilometres/all beneficiary kilometres for that year, including attributed empty and failed work. Keep source lineage for shared-store issues or losses traceable to an asset; allocate untraceable store losses first to beneficiary assets by their documented kg issued of that chemical from the same store in that year, then by their asset-km shares. Split at year boundaries; a positive pool without evidenced positive all-user km or issue denominator remains incomplete. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| common_calc_owned_r134a_outputs | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Component of calc_owned_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. A_supply and A_reclaimed are attributed purchased new and reclaimed chemical kg respectively. A_product is actual product handover kg matching the named product row. A_waste is determined only by calc_refrigerant_waste_origin from original generation events, never substituted with current dispatch quantity. Mixed carriers use their own rows rather than these named chemical rows; A_air is verified air release. Divide each by original N once. Apply allocation_refrigerant_recovery for recovery product/waste responsibilities and do not grant substitution credit. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| common_calc_owned_r134a_waste_priority | r134a_new_external; r134a_reclaimed_external; r134a_recovered_product; r134a_recovered_waste; r134a_air; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_air; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_air | Component of calc_owned_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. The current asset-period share here applies only to first-use/loss supply, usable product handovers and current releases from non-waste stock. A_waste and treatment/releases from waste-tagged stock retain their original generation responsibility under calc_refrigerant_waste_origin; this rule does not override that origin. | cp_emission; cp_assets; allocation_maintenance_period; allocation_refrigerant_recovery; cp_refrigerant_waste_origin; allocation_provider_maintenance_period; cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| calc_refrigerant_waste_origin_generation | r134a_recovered_waste; u_contracted_road_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_waste | Component of calc_refrigerant_waste_origin. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. A refrigerant becomes waste only at an evidenced irreversible decision removing it from usable/recharge-ready inventory for discard, with the actual material identity, owner and responsible service established. Recovery alone does not make usable material waste; neither later dispatch nor a commercial credit determines the generation date. Record generation event j, physical lot/location, measured gross/tare/net mass, composition/condition, original asset/site, generation interval, original beneficiary shares alpha_c,j and original service denominator N_c. For directly causal waste use the evidenced original task; otherwise apply the existing site-period or asset-maintenance-year/vehicle-month driver at generation, with that interval all-user denominator. For an untraceable shared store use the existing same-chemical issue-mass-to-asset driver in the generation interval, then its original asset beneficiary shares; unsupported or zero positive-pool denominators remain incomplete. | cp_emission; cp_support_contracted_road; cp_support_contracted_attempt; cp_refrigerant_waste_origin | Method component; the originating entry owns the inventory result |  |
| calc_refrigerant_waste_origin_quantities | r134a_recovered_waste; u_contracted_road_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_waste | Component of calc_refrigerant_waste_origin. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each named waste row r set A_waste_c,r=sum_j(G_j,r*alpha_c,j), q=A_waste_c,r/N_c once. G is the actual generated quantity on that row material/unit basis, including generated but retained waste. Only matching named-chemical waste uses the named chemical row; mixed oil/water/chemical carriers require their own actual carrier row and compatible whole-carrier mass; constituent kg remains a balance control, not another waste exchange. | cp_emission; cp_support_contracted_road; cp_support_contracted_attempt; cp_refrigerant_waste_origin | Method component; the originating entry owns the inventory result |  |
| calc_refrigerant_waste_origin_state_ledger | r134a_recovered_waste; u_contracted_road_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_waste | Component of calc_refrigerant_waste_origin. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. The waste-state register is a tagged view of the existing I/F/S physical stocks, not a fourth additive physical inventory. Classification at the same location changes the state tag only and does not also subtract R, W_ext or another physical transfer; sum usable plus waste-tagged stocks exactly once in the original stock equation. Exclude all waste-tagged mass from U or other recharge. Reconcile each waste-origin lot: closing=opening+generation+internal_in-internal_out-external_dispatch-evidenced_physical_loss, preserving original shares and N_c through transfers. Physical W_ext remains actual dispatch in the original mass balance; it is not A_waste and cannot create a new generation quantity. | cp_emission; cp_support_contracted_road; cp_support_contracted_attempt; cp_refrigerant_waste_origin | Method component; the originating entry owns the inventory result |  |
| calc_refrigerant_waste_origin_fate_updates | r134a_recovered_waste; u_contracted_road_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_waste | Component of calc_refrigerant_waste_origin. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Retained generated waste requires supported storage/transport/final treatment on the generation-gate basis under allocation_atomic_waste, using compatible actual evidence or a documented prospective route with uncertainty. Later receiver evidence replaces the same original model and recomputes the original cohort, including changes in material, residual mass or fate; never add the same quantity/treatment to the dispatch-period service. Explicit storage releases and treatment residuals must replace, not duplicate, the corresponding linked treatment inventory; shared site/storage handling already in another service row is removed by a scope crosswalk. If a physical release from waste-tagged stock is already separately modelled, retain its original waste-origin responsibility and remove that release from the linked inventory. Usable product handovers keep their existing product cut-off, never the waste branch. Unsupported origin, composition or treatment leaves the original result incomplete; later sale alone cannot relabel a generated waste event as a product. For the current waste row and original cohort, A_waste abbreviates A_waste_c,r; card D/N is that original cohort N_c, never dispatch-period output. | cp_emission; cp_support_contracted_road; cp_support_contracted_attempt; cp_refrigerant_waste_origin | Method component; the originating entry owns the inventory result |  |
| common_activity_contracted_road | u_contracted_road_diesel; u_contracted_road_petrol; u_contracted_road_electricity_ac; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_co2_fossil; u_contracted_road_co2_biogenic; u_contracted_road_methane; u_contracted_road_nitrous_oxide; u_contracted_road_carbon_monoxide; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_road_sulfur_dioxide; u_contracted_road_pm25; u_contracted_road_pm_coarse; u_contracted_road_tyre_pm25; u_contracted_road_r134a_air; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_road_r134a_recovered_waste; u_contracted_road_r134a_recovered_product; u_contracted_attempt_diesel; u_contracted_attempt_petrol; u_contracted_attempt_electricity_ac; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_co2_fossil; u_contracted_attempt_co2_biogenic; u_contracted_attempt_methane; u_contracted_attempt_nitrous_oxide; u_contracted_attempt_carbon_monoxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide; u_contracted_attempt_sulfur_dioxide; u_contracted_attempt_pm25; u_contracted_attempt_pm_coarse; u_contracted_attempt_tyre_pm25; u_contracted_attempt_r134a_air; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_r134a_recovered_product | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Component of activity_contracted_road; activity_contracted_attempt. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Raw activity ledger only, not an exchange. Subdivide actual supplier duty cycles by leg/technology; preserve existing loaded gross mass-distance allocation (measured physical volume only with capacity evidence), closed empty/idle-cycle and mutually exclusive last-mile service-time pools. q_x=sum(actual physical exchange x*applicable all-user cohort share)/N, once. Vehicle manufacturing q=one complete vehicle*attributed activity/evidenced whole-life activity/N. Maintenance uses actual causal events or the existing fixed local-calendar asset-year pool once; retirement uses the same lifetime beneficiary fraction and residual mass. Carrier road/charger/building products and their separate upkeep/EOL are required when in scope. Tonne-km or parcel-attempt count reconciles the supplier only; it is not a fuel/hour equivalence. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. This row supplies refrigerant attribution evidence only; take new supply, reclaimed supply, recovery and air release from the dedicated final calculation calc_carrier_r134a. | cp_support_contracted_road; cp_support_contracted_attempt | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_driver_revision | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For every asset a retain versioned all-user activity and each original beneficiary cohort/stratum c, including failed/empty work under its existing fixed responsibility rule. u_c,a is its attributed actual driver to date; U_a is evidenced complete-life all-user driver (actual to date plus supported remaining forecast), in the identical configuration and unit. U_a must be positive and at least the actual all-user total. Set f_c,a=u_c,a/U_a; do not use remaining activity as U_a. On every life, activity, beneficiary, source-quantity or terminal-route revision recompute every affected original cohort, including previously reported cohorts; do not preserve an old fraction while applying a new lifetime denominator only to later cohorts. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_source_correction | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each independent source s in its native unit, A_s,c,new=Q_s,new*f_c,a. Q_s,new is its current evidenced full manufacture/installation source quantity before lifetime allocation, not a remaining unallocated balance, or matched net terminal residual/complete lifecycle source; it is not a previously allocated quantity. Retain B_s,c, the previously booked attributed raw amount, and its original normalized result/version; delta_A_s,c=A_s,c,new-B_s,c. A newly evidenced terminal source has B=0, while a correction to an existing source replaces that same source ID. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_normalization | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Recompute q_s,c=A_s,c,new/N_c using that original cohort current verified reference denominator N_c; if N_c itself was corrected, replace the old result rather than adding delta_A/new_N to a result based on old_N. Sum source contributions only after removing documented overlap. Record positive/negative result corrections, never negative physical transfers, substitution credits or another current-period whole-asset purchase. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_retirement | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At final retirement replace U_a by complete actual all-user driver, recompute all f and all source quantities; for positive total activity all beneficiary fractions sum to one, including non-study beneficiaries. Measured terminal net residual is not reduced again by historical removals. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_zero_activity | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Zero-output events retain their existing causal parent cohort and its original denominator; never seek an unrelated positive-output period. If that parent has no positive N_c, retain attributed raw totals and an unresolved normalized result. With zero lifetime activity, assign only to an evidenced sole commissioning responsibility under the same original-cohort rule; otherwise retain the unallocated source and block completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_shared_driver_controls | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Keep asset manufacture, installation and terminal burden on the same revised f, while gross stock, transfers and retirements remain separate physical control records. For a calendar-time asset, u is its elapsed service-capacity time assigned once to each original class/period by the existing shared/class rule, including the prescribed vacancy/failure responsibility; U covers that same all-user calendar capacity. Do not apply the class share a second time to q. Unknown history, unsupported life/endpoint or missing original denominators blocks completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_background_version | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. If a supply-background or treatment-model version changes without a physical quantity change, replace the corresponding linked inventory and result for all affected original cohorts; a zero physical delta_A does not preserve the old model. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all inventory rows | Each selected UUID requires original official direct-read response and bound integrity evidence matching object, direction/type, physical state, property/unit and compartment; search hits are insufficient. Unbound rows are semantic candidates, not verified identities. Resolve every applicable row/reference flow and exact subtype before dataset completeness or publication. Electricity flow identifies point-of-use AC only, not grid/provider performance. | Original records, integrity receipts, per-row identity/compartment matrix |
| `quality_occurrence` | all processes | For every conditional process/card document present or demonstrably absent with site records, walk-through and responsible sign-off. Unknown and missing are never zero. Add all actual atomic exchanges required by boundary_occurrence, including other fuel/refrigerant/maintenance chemicals, water/wastewater, complete asset EOL and wear species/media; retain unresolved gaps as incomplete. | Occurrence register, bills, maintenance/EOL/receiver audit and gap register |
| `quality_time` | all protocols | Collect every network site/segment and all-customer denominator for the acceptance cohort; extend operating records through closure and reconcile cross-period stocks. Record instrument calibration, detection limits, missing interval and supplier evidence quality; no extrapolation without explicit method, evidence and uncertainty scenarios. | Calibration certificates, period/coverage matrix, closure and reconciliation logs |
| quality_waste_origin | waste_label_paper; waste_cardboard; waste_pp | For every ordinary solid-waste stream verify generation responsibility, original cohort/stratum/denominator, origin-labelled stock balance, supported actual or prospective complete treatment and later-receipt replacement. Unknown origin/fate/physical loss remains an explicit gap; future dispatch alone cannot close or reassign it. Keep wastewater and amortized terminal-asset treatment on their separate methods. | generation/stock/transfer ledgers; supported treatment scenarios; same-event receipt replacements |
| `quality_factors` | all calculated rows | No numeric fuel use, density, lifetime, wear fraction, factor or legal threshold is defaulted by this PCR. Report original source/technology/unit validity and sensitivity of allocation, lifetime and missing data. Illustrative values in cited guidance are not measurements, recommended defaults or compliance limits. | Source originals, factor basis audit, documented uncertainty/sensitivity |
| quality_charge_events | activity_charging_asset_service; road_electricity | Verify every occupied charging event is positive gross source addition, verified zero addition or unresolved; net SOC alone cannot decide. Reconcile mutually exclusive source/direct/causal-set/shared-day shares, all beneficiaries, hours and metered losses. Failed/cancelled zero-addition hours remain counted with no successful-output credit; unknown evidence is not zero. Verify electricity removal from the residual route pool and keep the complete-life occupied-hours denominator unchanged. | session/source/branch records; meter and occupancy reconciliation; all-user causal-time evidence |
| `quality_translation` | all bilingual cards and rules | Compare row/process/protocol identifiers, UUID, unit, formulas, gates, direction, waste/emission media, conditions, negations and obligation strength. Official Chinese flow names, structural alignment and full semantic review are separate checks. Reparse both languages and verify nonempty supported calculation/quality/source/protocol fields and reachable references after every edit. | Bilingual audit and parsed projection comparison |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | all disaggregated support and species | Completeness is branch-specific under foreground_interface_method and foreground_interface_coverage. Foreground physical exchanges need the retained exact identities, original measurements, species and stock reconciliation. External interfaces need one defined service/property/unit, measured activity, exact supplier gates and compatible background coverage, not exhaustive provider-internal BOMs or capital ledgers. Unknown occurrence is not absence; uncovered real scope is an explicit gap. Unbound interface UUID/property/unit-group identities remain row-specific candidates until direct official evidence and receipts resolve them. The interface is not permission for an undefined multi-service package or for an Item(s) substitute for hours/mass/transport activity. | scope-to-physical-row reconciliation; supplier/BOM/species originals; signed gap register |
| quality_service_interfaces | svc_contracted_road; svc_contracted_attempt; svc_road_infrastructure; svc_charging_asset_service; svc_depot_building | Completeness is branch-specific under foreground_interface_method and foreground_interface_coverage. Foreground physical exchanges need the retained exact identities, original measurements, species and stock reconciliation. External interfaces need one defined service/property/unit, measured activity, exact supplier gates and compatible background coverage, not exhaustive provider-internal BOMs or capital ledgers. Unknown occurrence is not absence; uncovered real scope is an explicit gap. Unbound interface UUID/property/unit-group identities remain row-specific candidates until direct official evidence and receipts resolve them. The interface is not permission for an undefined multi-service package or for an Item(s) substitute for hours/mass/transport activity. | cp_interface protocols; signed coverage/ownership matrix; native-unit reconciliation; identity receipts |
| scope_interface_contracted_road | u_contracted_road_diesel; u_contracted_road_petrol; u_contracted_road_electricity_ac; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_r134a_supply; u_contracted_road_r134a_reclaimed_supply; u_contracted_road_r134a_recovered_product; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_road_r134a_recovered_waste; u_contracted_road_co2_fossil; u_contracted_road_co2_biogenic; u_contracted_road_methane; u_contracted_road_nitrous_oxide; u_contracted_road_carbon_monoxide; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_road_sulfur_dioxide; u_contracted_road_pm25; u_contracted_road_pm_coarse; u_contracted_road_tyre_pm25; u_contracted_road_r134a_air; svc_contracted_road | For support_contracted_road, svc_contracted_road is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_contracted_attempt | u_contracted_attempt_diesel; u_contracted_attempt_petrol; u_contracted_attempt_electricity_ac; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_r134a_supply; u_contracted_attempt_r134a_reclaimed_supply; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_contracted_attempt_r134a_recovered_waste; u_contracted_attempt_co2_fossil; u_contracted_attempt_co2_biogenic; u_contracted_attempt_methane; u_contracted_attempt_nitrous_oxide; u_contracted_attempt_carbon_monoxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide; u_contracted_attempt_sulfur_dioxide; u_contracted_attempt_pm25; u_contracted_attempt_pm_coarse; u_contracted_attempt_tyre_pm25; u_contracted_attempt_r134a_air; svc_contracted_attempt | For support_contracted_attempt, svc_contracted_attempt is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; svc_road_infrastructure | For support_road_infrastructure, svc_road_infrastructure is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; svc_charging_asset_service | For support_charging_asset_service, svc_charging_asset_service is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_depot_building | u_depot_building_building_constructed; u_depot_building_repair_concrete; u_depot_building_replacement_window; u_depot_building_repair_ac; u_depot_building_removed_window; u_depot_building_demolition_concrete; svc_depot_building | For support_depot_building, svc_depot_building is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| inv_reclaimed_supply | r134a_reclaimed_external; u_contracted_road_r134a_reclaimed_supply; u_contracted_attempt_r134a_reclaimed_supply | Retain batch-matched supplier reclamation inventory, receipt and stock lineage. Use attributed chemical kg first consumed for this service under section 8; custody returns of own refrigerant and internal transfers do not activate this row. | Existing collection protocols and evidence of each listed inventory row. |
| inv_refrigerant_identity | r134a_recovered_product; u_contracted_road_r134a_recovered_product; u_contracted_attempt_r134a_recovered_product | Evidence must identify the handover object as the named refrigerant in the declared product or waste state. Record gross weight, tare, net batch weight and batch-matched composition with calibrated weighing or analytical evidence; use chemical kg in the balance. For a different mixed product or waste carrier, record the actual carrier once as its own exchange and retain constituent kg only for reconciliation. Use allocation_refrigerant_recovery for the product/waste burden boundary. | Existing collection protocols and evidence of each listed inventory row. |
| inv_maintenance_waste | spent_tyre; spent_oil; spent_battery | Actual named waste at the maintenance generation gate under calc_road_maintenance_waste, excluding identical scope already in the asset or maintenance inventory. Subsequent storage, internal transfer or dispatch does not change the original generation event or its attribution. | Existing collection protocols and evidence of each listed inventory row. |
| inv_own_combustion | fossil_co2; methane; nitrous_oxide; carbon_monoxide; sulfur_dioxide; exhaust_pm25; exhaust_pmcoarse | Actual self-operated combustion, including idle and cold start where applicable; do not add supplier-service emissions. | Existing collection protocols and evidence of each listed inventory row. |
| inv_carrier_scope | u_contracted_road_diesel; u_contracted_road_petrol; u_contracted_road_electricity_ac; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_r134a_recovered_product; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_road_co2_fossil; u_contracted_road_co2_biogenic; u_contracted_road_methane; u_contracted_road_nitrous_oxide; u_contracted_road_carbon_monoxide; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_road_sulfur_dioxide; u_contracted_road_pm25; u_contracted_road_pm_coarse; u_contracted_road_tyre_pm25; u_contracted_road_r134a_air; u_contracted_attempt_diesel; u_contracted_attempt_petrol; u_contracted_attempt_electricity_ac; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_r134a_recovered_product; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_contracted_attempt_co2_fossil; u_contracted_attempt_co2_biogenic; u_contracted_attempt_methane; u_contracted_attempt_nitrous_oxide; u_contracted_attempt_carbon_monoxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide; u_contracted_attempt_sulfur_dioxide; u_contracted_attempt_pm25; u_contracted_attempt_pm_coarse; u_contracted_attempt_tyre_pm25; u_contracted_attempt_r134a_air | Replace the full purchased carrier lifecycle service on its existing exclusive segment/attempt boundary with supplier-owned physical inventories. Keep custody gates, all customers, failed/repeated attempts, empty returns, idling and terminal losses. No overlap with operator-owned legs or another supplier service. | Existing collection protocols and evidence of each listed inventory row. |
| inv_occurrence | u_contracted_road_diesel; u_contracted_road_petrol; u_contracted_road_electricity_ac; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_replacement_tyre; u_contracted_road_lubricating_oil; u_contracted_road_replacement_lfp_battery; u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_co2_fossil; u_contracted_road_co2_biogenic; u_contracted_road_methane; u_contracted_road_nitrous_oxide; u_contracted_road_carbon_monoxide; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_road_sulfur_dioxide; u_contracted_road_pm25; u_contracted_road_pm_coarse; u_contracted_road_tyre_pm25; u_contracted_road_r134a_air; u_contracted_attempt_diesel; u_contracted_attempt_petrol; u_contracted_attempt_electricity_ac; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_replacement_tyre; u_contracted_attempt_lubricating_oil; u_contracted_attempt_replacement_lfp_battery; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_co2_fossil; u_contracted_attempt_co2_biogenic; u_contracted_attempt_methane; u_contracted_attempt_nitrous_oxide; u_contracted_attempt_carbon_monoxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide; u_contracted_attempt_sulfur_dioxide; u_contracted_attempt_pm25; u_contracted_attempt_pm_coarse; u_contracted_attempt_tyre_pm25; u_contracted_attempt_r134a_air; u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_depot_building_building_constructed; u_depot_building_repair_concrete; u_depot_building_replacement_window; u_depot_building_repair_ac; u_depot_building_removed_window; u_depot_building_demolition_concrete | Only with evidence that this exact physical exchange occurred within the replaced scope; an unknown occurrence is not zero. | Existing collection protocols and evidence of each listed inventory row. |
| inv_ac_basis | u_contracted_road_electricity_ac; u_contracted_attempt_electricity_ac; u_road_infrastructure_maintenance_ac; u_charging_asset_service_installation_ac; u_charging_asset_service_maintenance_ac; u_depot_building_repair_ac | Applies only to independently evidenced point-of-use AC; this generic UUID does not determine supplier, grid, voltage or generation technology. Meter kWh converts to MJ by 3.6 once; installation/repair AC and operating AC have disjoint meter/phase ownership. | Existing collection protocols and evidence of each listed inventory row. |
| inv_vehicle_basis | u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van | One specified physical vehicle and original components at factory handover; exclude operation, replacement maintenance, retirement, road and charger. Actual vehicle class/model must occur within this original service boundary; no new route is added. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/N, once; do not multiply again by tonne-km or parcel attempts. | Existing collection protocols and evidence of each listed inventory row. |
| inv_residual_carrier | u_contracted_road_spent_tyre; u_contracted_road_spent_oil; u_contracted_road_spent_lfp_battery; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_spent_tyre; u_contracted_attempt_spent_oil; u_contracted_attempt_spent_lfp_battery; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van | Measured real residual carrier stream at handover, excluding emitted wear/leakage and components already removed. Retain original beneficiary responsibility, storage and treatment chain; unknown future routes require disclosed scenarios. Later receipts replace the origin treatment model, not another cohort burden. | Existing collection protocols and evidence of each listed inventory row. |
| inv_carrier_emissions | u_contracted_road_co2_fossil; u_contracted_road_co2_biogenic; u_contracted_road_methane; u_contracted_road_nitrous_oxide; u_contracted_road_carbon_monoxide; u_contracted_road_nitric_oxide; u_contracted_road_nitrogen_dioxide; u_contracted_road_sulfur_dioxide; u_contracted_road_pm25; u_contracted_road_pm_coarse; u_contracted_road_tyre_pm25; u_contracted_road_r134a_air; u_contracted_attempt_co2_fossil; u_contracted_attempt_co2_biogenic; u_contracted_attempt_methane; u_contracted_attempt_nitrous_oxide; u_contracted_attempt_carbon_monoxide; u_contracted_attempt_nitric_oxide; u_contracted_attempt_nitrogen_dioxide; u_contracted_attempt_sulfur_dioxide; u_contracted_attempt_pm25; u_contracted_attempt_pm_coarse; u_contracted_attempt_tyre_pm25; u_contracted_attempt_r134a_air | Actual measured species or physical particulate fraction at the evidenced receiving air compartment; split urban/rural where the existing PCR does. NOx-as-NO2 is not actual NO2 mass; NO/NO2 need verified speciation and molecular-mass reconciliation. Wear excludes equivalent background release and residual waste mass. | Existing collection protocols and evidence of each listed inventory row. |
| inv_road_scope | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | Replace road lifecycle provision with one real complete specified constructed section at construction-completion/open-to-traffic gate; later maintenance/renewal and EOL are separate physical exchanges. | Existing collection protocols and evidence of each listed inventory row. |
| inv_terminal_carrier | u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | Real separately collected carrier stream at handover; terminal mass excludes prior replacement/removal, separately recovered products and explicit physical losses. Retain origin beneficiary allocation and full storage/treatment chain; no duplicate constituent or wear release. | Existing collection protocols and evidence of each listed inventory row. |
| inv_charger_scope | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | Replace lifecycle availability hours with a genuine complete factory-gate charger product plus actual external installation, replacement maintenance and EOL. H_k remains an attribution driver, not a physical flow or an item equivalence. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | foreground_dataset_conformance | Fail applicability for international/USO/local-delivery products or excluded modes/cold chain/fuel-fired depots; require actual service, mass/size, route, state and time-class metadata. Different classes are not equivalent without evidence; aggregate only after stratified disclosed weighting. |  |
| validate_service_interfaces | svc_contracted_road; svc_contracted_attempt; svc_road_infrastructure; svc_charging_asset_service; svc_depot_building | Verify the event/component responsibility matrix before reading row amounts. An external-service component activates its interface only; its covered detailed physical counterpart is inactive, not a measured zero. Verify one property/unit, raw native activity, original all-user allocation and single final normalization; failed/reworked/empty events follow the retained cohort rules. Test partial contracts, own energy/assets/retained wastes, already allocated supplier inventories, zero-output cohorts and missing complementary coverage. Reject double counting, invented identity/amounts, forced supplier-internal collection or an undocumented branch change. Verify all service row IDs and protocol/rule links in both languages and generated guidance. |  |
| `validate_accounting` | foreground_dataset_conformance | Require cohort closure, N>0, one final parcel status, no duplicate consignment/attempt outputs, complete customer allocation denominators and balances within declared measurement uncertainty. Investigate residuals; never force balance by invented emissions, losses or zero values. Verify mutually exclusive positive-source/verified-zero charging branches and no double electricity allocation. Test retained waste generation in cohort A and later transfer in cohort B: treatment remains with A and later receipts replace its model, without new B waste/treatment. |  |
| `validate_inventory` | foreground_dataset_conformance | Require one actual exchange per applicable card with matched type/property/unit/medium and explicit collection protocol; reject collection selectors, unresolved applicable identities for complete datasets, asset/component duplication, waste-carrier/content duplication and supplier/owned overlap. |  |
| validate_refrigerant_ledger | foreground_dataset_conformance | Check each refrigerant receipt, source batch, stock, first-use assignment, movement and external ownership/status. Verify gross/tare/net and constituent evidence, no second carrier/component exchange, and no duplicated upstream processing or retirement scope. For retained generated waste, additionally verify original generation cohorts/denominators and later treatment replacement under calc_refrigerant_waste_origin. |  |
| `validate_projection` | foreground_dataset_conformance | Require every normative boundary, allocation, calculation and quality obligation in supported structured fields; IDs/protocol references must resolve, EN/ZH rules must align and projection hashes must be current. Schema/fingerprint success alone does not establish methodology approval or complete multi-impact LCI. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | all support and emission rows | Verify the event/component responsibility matrix before reading row amounts. An external-service component activates its interface only; its covered detailed physical counterpart is inactive, not a measured zero. Verify one property/unit, raw native activity, original all-user allocation and single final normalization; failed/reworked/empty events follow the retained cohort rules. Test partial contracts, own energy/assets/retained wastes, already allocated supplier inventories, zero-output cohorts and missing complementary coverage. Reject double counting, invented identity/amounts, forced supplier-internal collection or an undocumented branch change. Verify all service row IDs and protocol/rule links in both languages and generated guidance. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | diesel_van; petrol_van; electric_van; sorting_machine; u_contracted_road_diesel_van; u_contracted_road_petrol_van; u_contracted_road_electric_van; u_contracted_road_diesel_truck; u_contracted_road_eol_diesel_van; u_contracted_road_eol_petrol_van; u_contracted_road_eol_electric_van; u_contracted_road_eol_diesel_truck; u_contracted_attempt_diesel_van; u_contracted_attempt_petrol_van; u_contracted_attempt_electric_van; u_contracted_attempt_eol_diesel_van; u_contracted_attempt_eol_petrol_van; u_contracted_attempt_eol_electric_van; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_depot_building_building_constructed; u_depot_building_demolition_concrete | Check original cohorts/denominators, all-user driver, source versions, booked amounts and restatement corrections under calc_capital_restatement. Reject frozen old history with only future-denominator changes, retirement-balance transfer to unrelated current output, and negative physical exchanges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate guidance for a foreground domestic road parcel-service process; not publication approval |
| downstream_use | secondary_dataset; background_dataset only after completed applicability, identity and methodological review |
| allowed_use | Declared domestic ambient non-USO road parcel cohort with its actual class and gates |
| excluded_use | International/USO/local food/retail/letters/bicycle messenger; nonroad or temperature-controlled cargo; claims of interchangeability across service classes; compliance certification |
| required_metadata | All reference qualifiers; cohort closure; physical allocation; route/supplier/asset/treatment boundaries; original factors; quantity and identity evidence; charging branch and failure-event ownership/timezone records; waste generation-origin ownership, retained stock and receiver-model revision chain; signed foreground/interface responsibility matrix, native service activity and background coverage; original physical activity, manufacture/terminal pairing and species basis only for foreground-owned components |
| required_quality_disclosure | Coverage and missing exchanges; conditional occurrence; uncertainty; allocation/lifetime sensitivity; unbound identities; factor/LCIA compatibility; no claim of reviewed/published methodology |
| update_trigger | Changed service/gate/route/vehicle/energy/supplier/packaging mix, new factor/identity evidence, unresolved completeness or material cohort performance changes; charging event evidence/branch correction; later waste receipt/fate or generation correction updates the original-cohort model; foreground physical identity/speciation changes or external interface configuration/unit/coverage changes require applicable concrete-row review and fresh projection |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-68021` | official_guidance | UNSD, CPC Version 3.0, 68021 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68021 | Classification inclusions/exclusions only; this PCR deliberately narrows the leaf to an ambient road parcel network |
| `ghg-transport-2013` | official_guidance | WRI/WBCSD, Technical Guidance for Calculating Scope 3 Emissions, 2013 v1.0, category 4 pp. 53–55, formulae 4.1–4.5. https://ghgprotocol.org/sites/default/files/standards/Scope3_Calculation_Guidance_0.pdf | Fuel/electricity/refrigerant activity records and physical allocation/empty-backhaul rationale. Corporate GHG guidance, not full LCA, parcel cohort denominator, specific pollutant factors or PCR allocation certification; cohort/stop/asset methods are explicit foreground protocol requirements, not quoted standards |
