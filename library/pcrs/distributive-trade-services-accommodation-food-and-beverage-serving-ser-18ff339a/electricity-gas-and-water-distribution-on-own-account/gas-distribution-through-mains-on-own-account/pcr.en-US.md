---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.gas-distribution-through-mains-on-own-account
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Gas distribution through mains (on own account)

## 1. Scope and Applicability

This rule specifies the distribution component of own-account dry fossil natural gas supply through local mains and services. It is a narrower methodology profile than CPC 69120. It requires an already conditioned and odorized inlet and a route without distribution-gate operational combustion, flaring, purification or onsite odorization. All normative requirements are in the rule tables, flow cards and collection protocols below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.gas-distribution-through-mains-on-own-account |
| classification_refs | CPC 3.0:69120; narrower |
| covered_products | Own-account local distribution component of dry fossil natural gas through mains/services; integral meter maintenance |
| excluded_products | Other gaseous fuels; fee/contract distribution; long-distance transmission; standalone meter installation and reading; gas manufacture; LNG/cylinders; distribution-gate operational combustion/flaring/purification/odorization |
| representative_product | 1 dry normal m3 of accepted customer gas delivery measured as distribution activity |
| production_route | City-gate custody receipt; local pressure regulation; mains/service lines; customer custody-meter acceptance |
| market_state | Pipeline-quality already odorized dry natural gas; declared composition, delivery pressure and acceptance specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Own-account local gas distribution |
| How much | 1 m3 |
| How well | Accepted dry fossil natural gas meeting the declared customer custody pressure, quality and metering specification |
| How long or cycle | One complete consecutive 12-month operating window; no customer use duration is implied |
| reference_flow_link | accepted_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Own-account local dry-natural-gas distribution service |
| Reference flow property | Normal Volume `93a60a56-a3c8-13da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | own-account ownership/responsibility; network and segment; inlet/outlet custody meter coordinates and IDs; gas fossil origin and dry composition including odorant; 273.15 K and 101325 Pa absolute; moisture correction; compressibility and density method; delivery pressure and acceptance specification; actual 12-month window; accepted net D with original delivery cohort and return revision; foreground supply/service gates and capital coverage; uncertainty; excluded-operation occurrence screen |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| gas_reference | reference product | Normal Volume `93a60a56-a3c8-13da-a746-0800200c9a66` | m3 | Reference quantity is distribution activity for 1 m3 accepted dry fossil natural gas at 273.15 K and 101325 Pa absolute. It is neither combustion-energy input nor operating-pressure volume; composition and delivery pressure are separate qualifiers. |
| gas_state_conversion | all gas records | Normal Volume | m3 | Convert uncorrected wet actual volume once by convert_gas_volume using absolute pressure, water-vapour partial pressure, kelvin temperature and matched compressibility. Already corrected meters are not corrected again. Energy invoices require contemporaneous measured lower heating value and gross/net reconciliation. |
| common_denominator | all inventory rows | one primary property on each card | one preferred row unit | Each card has one clearly defined measurement object, one primary property and one preferred unit. Evidence-based raw-field conversions may produce that unit; mass/count/time are not alternative card units. Sum attributable totals Aj for the same complete consecutive 12 months, then divide once by positive D, accepted dry normal delivered m3 defined by accepted_delivery_cohort; later returns revise the original cohort and its normalized inventory together, never an unrelated current denominator. Intermediate inputs are not fixed to reference quantity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already conditioned and odorized dry fossil natural gas at the identified city-gate custody inlet |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC 3.0:69120; narrower |
| recursive_input_rule | Record operation, on-site maintenance and specified asset/service boundary exchanges; do not expand supplier internals. An adjacent same-category distribution segment needs prior review of separate gates and loss ownership. |
| upstream_dataset_requirement | Later background links must match delivery gates and included scope for electricity, replacement gas, specific assets/consumables and installation/calibration/transport services; waste treatment begins at foreground handover. Upstream accepted commodity gas is owned once by the separate commodity model. |
| disclosure | City/customer gates, composition, standard state, pressure, foreground processes, specific capital shares, service contract coverage, background stages not expanded and gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | Apply only to own-account local mains/services distribution of dry fossil natural gas already conditioned and odorized at the city-gate inlet. Include pressure reduction, electric boosting/heating where present, leak surveys, meter maintenance and emergency work up to accepted customer custody meters. Declare exact gates, ownership, gas quality, pressure and acceptance. | un-cpc-gas-distribution; eia-gas-delivery |
| boundary_exclusions | all processes | Exclude gas manufacture/processing, transmission, bulk storage, LNG/cylinders, customer combustion, fee distribution and standalone meter products. Distribution-gate operational fuel combustion, flaring, purification or onsite odorization makes this narrower profile inapplicable; never call an actual excluded operation zero. | un-cpc-gas-distribution; eia-gas-delivery |
| boundary_service | gas_makeup; accepted_service | The service inventory carries the main commodity in a custody/stock ledger, not purchased-gas and sold-gas inventory cards. The separately identified commodity model owns accepted deliveries, rejected commodity transfers and off-spec supplier returns, with source/stock carry-forward preventing duplicate upstream production. This distribution service owns city-gate supply burden of actual unrecovered physical losses and confirmed unrecovered unauthorized withdrawals through gas_makeup once; the commodity model must exclude both quantities. Unauthorized custody transfers remain in the physical ledger, outside accepted D and direct gas emissions. Invoice residuals and linepack changes are not automatically emissions or replacement gas. |  |
| boundary_foreground | distribution; maintenance | Inventory boundary exchanges of operated network and actual on-site maintenance. Specific delivered complete assets, characterized solutions and defined external services may remain whole when one measurable object has one primary property/unit. Remove supplier manufacture/mining, provider vehicle/road/tool manufacture, provider transport chains and off-site receiver treatment internals. This is a foreground model; later matched background links carry their upstream burdens without duplicating a foreground input. |  |
| boundary_assets | maintenance | Retain original network pipe, regulating station and independent metering assets as specified delivered product inputs plus the separately defined pipe-installation service. Establish nonoverlapping acceptance lists, physical units, supplier/contract gate and actual original quantity; an integrated meter/connector/coating is not a second input. Capital delivery packaging removed by the supplier stays in its service gate; packaging actually retained/generated by the foreground requires a specific material/waste card and stock/handover records before complete use. Attribute continuing asset service by capital_share. Do not omit the same replacement merely because finance calls it capital or expense. Direct consumed maintenance seals/oil/calibration gas/test water use actual consumption; a persistent replacement asset receives its own original key and asset share, never both. |  |
| boundary_contracts | maintenance; electricity | For each purchased service collect actual contract specification, primary unit, delivery/acceptance gate and included supplies, energy, travel, maintenance, waste and direct-release coverage. Foreground-supplied excluded items are recorded separately once; provider-included items are not repeated. Meter only net external purchased electricity used by foreground operations/maintenance after excluding service-provider included supply. Actual unlisted foreground inputs/releases require specific reviewed cards; a missing contract item is a gap, not permission to ignore it. |  |
| boundary_waste | all waste outputs | Record each actual characterized waste carrier once at documented foreground stock/removal and handover gate, with receiver and accepted mass; do not also output its contained substances. An intact removed meter/station may be one characterized carrier. No assumed dismantling into pure fractions or paired future treatment-receipt card. Off-site receiver treatment/haul resources and emissions are background, not current foreground exchanges. Actual on-site treatment/discharge needs an explicit reviewed process and release/waste cards before complete use. |  |
| boundary_compartment | all elementary outputs | Assign each physical release to its first technosphere-to-environment interface: air vent/open leak to air; buried direct release to soil. These event amounts are mutually exclusive; later soil-to-air migration is not a second distribution emission. A surface/plume reading alone does not prove total buried source loss. Unknown medium or retained/transformed gas is a gap needing reconciled source measurement. |  |
| boundary_species | distribution; maintenance | Keep separately identified actual chemical species and first receiving medium. The gas-composition cards are conditional on an assay/event demonstrating that species release; no default fractions or automatically populated minor species. Additional actual constituents require a specific card and aligned protocol/calculation/translation. Calibration-mixture releases are separate from network-gas events and are never replacement-gas losses. |  |
| boundary_transfers | distribution | Recovered network gas may only be reinjected within the same network under this profile: match recovery/reinjection IDs and cancel internal quantities without credit. Identify separate commodity-model responsibility for every supplier return by custody ID, quantity, receiving gate and destination. External recovered-gas/nitrogen exports or gas waste treatment require reviewed specific product/waste transfers and gates before use; do not omit actual transfers. A second distribution segment needs nonoverlapping gates/loss ownership review. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| distribution | Local gas distribution and loss accounting | required | Every applicable network | foreground | 1 m3 accepted_service |
| maintenance | Network asset service inputs and on-site maintenance | required | Actual continuing assets and maintenance; individual cards conditional on actual configuration/events | support | Attributed original totals per reference flow |

### Process: Local gas distribution (`distribution`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Meter only net accepted externally purchased alternating current actually used by network operation, on-site leak survey and maintenance, including controls, electric heating/boosting, telemetry and actual on-site tools. Measure at identified points of use and exclude purchased-service included electricity; supplier generation internals are not expanded. Distribution-gate operational combustion still makes this profile inapplicable.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured kWh × 3.6 / D; cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources:

###### Dry fossil natural gas at city-gate inlet for physical losses and unauthorized withdrawals (`gas_makeup`)

One composition-specific natural-gas product input in kg for measured unrecovered physical losses plus confirmed unrecovered unauthorized withdrawals assigned to this distribution service. Retain its inlet supply specification and upstream dataset scope; it is not total gas carried. These two attribution causes do not change the single gas substance/property/unit. Unauthorized gas is a custody transfer, not an elementary emission.

- Selected flow: Dry fossil natural gas at city-gate inlet for physical losses and unauthorized withdrawals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed (physical_loss_mass + U_mass) / D; cp_gas; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources:

###### Gaseous nitrogen supplied for pipeline purging (`nitrogen_purge`)

Conditional only when a recorded nitrogen purge occurs. Weigh cylinder/supply stock before and after each event and reconcile issued, returned and remaining quantities; use actual event injection, not unmatched annual procurement. Keep supplied nitrogen separate from nitrogen already present in natural gas and from its subsequent air release.

- Selected flow: Gaseous nitrogen supplied for pipeline purging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Event-measured nitrogen actually withdrawn from stock and injected into the network kg / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Own-account local dry-natural-gas distribution service (`accepted_service`)

The service measures accepted net delivery D = G - R linked to the original acceptance cohort by accepted_delivery_cohort, at customer custody meters on the declared dry normal basis. Physical monthly balances use gross G, not D. Internal transfers, rejected gas, unauthorized withdrawals and repeat readings do not create service output.

- Selected flow: Own-account local dry-natural-gas distribution service
- Flow property / unit: Normal Volume `93a60a56-a3c8-13da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources: `un-cpc-gas-distribution`

##### Waste flows

##### Elementary flows

###### Methane, fossil, to air (`methane_air`)

Conditional on Methane, fossil, crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `epa-gas-calculation-2025`

###### Carbon dioxide, fossil, to air (`carbon_dioxide_air`)

Conditional on Carbon dioxide, fossil, crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `epa-gas-calculation-2025`

###### Ethane to air (`ethane_air`)

Conditional on Ethane crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: Ethane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Propane to air (`propane_air`)

Conditional on Propane crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: Propane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### n-Butane to air (`n_butane_air`)

Conditional on n-Butane crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: n-Butane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Isobutane to air (`isobutane_air`)

Conditional on Isobutane crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: Isobutane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### n-Pentane to air (`n_pentane_air`)

Conditional on n-Pentane crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: n-Pentane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Isopentane to air (`isopentane_air`)

Conditional on Isopentane crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: Isopentane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen to air (`nitrogen_air`)

Conditional on Nitrogen crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: Nitrogen to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Tetrahydrothiophene to air (`tht_air`)

Conditional on Tetrahydrothiophene crossing directly from the network to receiving air. Preserve actual fossil origin and state where relevant. Apply `inv_air_species` in section 8.

- Selected flow: Tetrahydrothiophene to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Methane, fossil, to soil (`methane_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: Methane, fossil, to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `epa-gas-calculation-2025`

###### Carbon dioxide, fossil, to soil (`carbon_dioxide_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: Carbon dioxide, fossil, to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `epa-gas-calculation-2025`

###### Ethane to soil (`ethane_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: Ethane to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Propane to soil (`propane_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: Propane to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### n-Butane to soil (`n_butane_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: n-Butane to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Isobutane to soil (`isobutane_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: Isobutane to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### n-Pentane to soil (`n_pentane_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: n-Pentane to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Isopentane to soil (`isopentane_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: Isopentane to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen to soil (`nitrogen_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: Nitrogen to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

###### Tetrahydrothiophene to soil (`tht_soil`)

Conditional on this constituent crossing the pipeline boundary directly into soil. Apply `inv_soil_release` in section 8.

- Selected flow: Tetrahydrothiophene to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Once-attributed measured or species-calculated emitted mass / D; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources:

### Process: Network asset service and on-site maintenance (`maintenance`)

#### Inputs

##### Product flows

###### Accepted polyethylene gas-main pipe section with its specified fittings (`asset_pe_pipe`)

Measured mass of one specified pressure class, diameter and PE grade at delivered-product gate; excludes packaging and installation service. Do not add resin, fittings already included or supplier factory inputs.

- Selected flow: Accepted polyethylene gas-main pipe section with its specified fittings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum original accepted kg × attributable asset service fraction alpha for its original key / D; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Accepted coated carbon-steel gas-main pipe section with its specified fittings (`asset_steel_pipe`)

Measured complete pipe-section mass including attached corrosion coating and specified fittings, with grade, wall thickness and diameter recorded; do not add contained coating or steel separately.

- Selected flow: Accepted coated carbon-steel gas-main pipe section with its specified fittings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum original accepted kg × attributable asset service fraction alpha for its original key / D; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Accepted prefabricated electrically operated gas pressure-regulating station (`asset_station`)

One accepted configuration-specific complete station at commissioned on-site handover, including skid, regulators, valves, controls, integral meters and declared foundation/installation coverage. Weigh the complete station or sum verified nonoverlapping delivered-module masses. Supplier procurement/build stages are background; do not add its contained parts or duplicate installation.

- Selected flow: Accepted prefabricated electrically operated gas pressure-regulating station
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum original accepted kg × attributable asset service fraction alpha for its original key / D; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Accepted independent diaphragm gas-meter assembly (`asset_customer_meter`)

One actual independently supplied customer meter configuration at accepted commissioned handover, including specified casing, index and connectors; exclude a meter already inside asset_station. Obtain mass by calibrated weighing or verified supplier specification and accepted counts.

- Selected flow: Accepted independent diaphragm gas-meter assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum original accepted kg × attributable asset service fraction alpha for its original key / D; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Accepted gas-main trenching, pipe-laying and reinstatement service (`pipe_installation`)

A specific contract activity measured by accepted route length for one declared trench/depth/surface and pipe-installation specification. It includes excavation, bedding, backfill, joining, testing and surface restoration plus contractor energy, travel, tools and waste handling within the agreed gate; excludes separately purchased pipe and separately supplied foreground test water. Collect actual acceptance lengths and contract included/excluded items; do not add contractor internal materials/energy or the same station installation.

- Selected flow: Accepted gas-main trenching, pipe-laying and reinstatement service
- Flow property / unit: Length / m
- Amount rule: Sum original accepted m × attributable asset service fraction alpha for its original key / D; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Nitrile-rubber gas-system replacement seal (`seal_nitrile`)

Actual specification-specific seals issued and consumed in recorded maintenance, including one documented formulation; no constituent decomposition.

- Selected flow: Nitrile-rubber gas-system replacement seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable actual consumed kg / D once, from opening stock + receipts - closing stock - unused returns; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources:

###### Mineral lubricating oil for gas-network equipment (`lubricant`)

Actual specified oil consumed in foreground equipment maintenance; exclude oil included in supplied equipment or a purchased service.

- Selected flow: Mineral lubricating oil for gas-network equipment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable actual consumed kg / D once, from opening stock + receipts - closing stock - unused returns; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources:

###### Certified methane-in-nitrogen calibration gas mixture (`calibration_mix`)

One delivered certified calibration-mixture specification by total mixture mass; record methane mole/mass fraction and certificate. It is a calibration product, never network loss-replacement gas; separate actual emitted methane and nitrogen by certificate and recovery balance.

- Selected flow: Certified methane-in-nitrogen calibration gas mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable actual consumed kg / D once, from opening stock + receipts - closing stock - unused returns; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources:

###### Water supplied for gas-main hydrostatic pressure testing (`test_water`)

Actual water withdrawn for a documented on-site pressure-test event, measured at the foreground inlet. Exclude water included in installation/calibration contracts; the discharged carrier is handed over once as waste when not retained or reused.

- Selected flow: Water supplied for gas-main hydrostatic pressure testing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable actual consumed kg / D once, from opening stock + receipts - closing stock - unused returns; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources:

###### External calibration of one specified gas custody meter (`meter_calibration_service`)

Conditional only when an independent external calibration contract occurs: measured technician time on that specified meter against its accepted test protocol; includes provider calibration gas, instruments, energy, travel and wastes unless explicit contract exclusions. Excluded supplies are recorded on their separate actual rows; never count included calibration gas or its provider emissions again.

- Selected flow: External calibration of one specified gas custody meter
- Flow property / unit: Time / h
- Amount rule: Sum actual accepted h attributable to network maintenance jobs / D once; cp_services.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources:

###### Dedicated light-van transport service for gas-network maintenance crew (`maintenance_transport_service`)

Conditional externally supplied light-van service transporting the identified maintenance crew/tools, including provider vehicle, fuel, empty positioning and allocated idle work within the accepted trip gate. Use actual loaded and empty vehicle distance with job attribution; contract idle-only charges must convert through evidenced provider total service allocation, not disappear at zero km. This is a specific transport product; do not add its provider fuel/vehicle/road inventory.

- Selected flow: Dedicated light-van transport service for gas-network maintenance crew
- Flow property / unit: Vehicle distance / vehicle-km
- Amount rule: Sum actual accepted vehicle-km attributable to network maintenance jobs / D once; cp_services.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Removed polyethylene gas-pipe carrier (`waste_pe_pipe`)

Do not record service-provider included wastes or contained substances again. Apply `inv_waste_carrier` in section 8.

- Selected flow: Removed polyethylene gas-pipe carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable handed-over carrier kg reconciled with opening/closing storage / D; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Removed coated carbon-steel gas-pipe carrier (`waste_steel_pipe`)

Do not record service-provider included wastes or contained substances again. Apply `inv_waste_carrier` in section 8.

- Selected flow: Removed coated carbon-steel gas-pipe carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable handed-over carrier kg reconciled with opening/closing storage / D; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Removed diaphragm gas-meter assembly (`waste_meter`)

Do not record service-provider included wastes or contained substances again. Apply `inv_waste_carrier` in section 8.

- Selected flow: Removed diaphragm gas-meter assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable handed-over carrier kg reconciled with opening/closing storage / D; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Removed gas pressure-regulating station assembly (`waste_station`)

Do not record service-provider included wastes or contained substances again. Apply `inv_waste_carrier` in section 8.

- Selected flow: Removed gas pressure-regulating station assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable handed-over carrier kg reconciled with opening/closing storage / D; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Spent nitrile-rubber gas-system seal (`waste_nitrile`)

Do not record service-provider included wastes or contained substances again. Apply `inv_waste_carrier` in section 8.

- Selected flow: Spent nitrile-rubber gas-system seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable handed-over carrier kg reconciled with opening/closing storage / D; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral lubricating oil from gas-network equipment (`waste_oil`)

Do not record service-provider included wastes or contained substances again. Apply `inv_waste_carrier` in section 8.

- Selected flow: Spent mineral lubricating oil from gas-network equipment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable handed-over carrier kg reconciled with opening/closing storage / D; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Characterized wastewater from gas-main hydrostatic pressure testing (`waste_pressure_water`)

Do not record service-provider included wastes or contained substances again. Apply `inv_waste_carrier` in section 8.

- Selected flow: Characterized wastewater from gas-main hydrostatic pressure testing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable handed-over carrier kg reconciled with opening/closing storage / D; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Methane, fossil, from calibration to air (`calibration_methane_air`)

Conditional actual on-site release from the certified calibration mixture to air. Exclude recovered gas, residual cylinder stock and provider-included calibration service emissions; never add it to network leak/replacement gas. Other actual media/species need reviewed extension.

- Selected flow: Methane, fossil, from calibration to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum per-event(sole source-event weight × actual released mixture kg × certificate species mass fraction) / D; for directly measured species kg apply only the sole event weight before / D, never composition again; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources:

###### Nitrogen from calibration to air (`calibration_nitrogen_air`)

Conditional actual on-site release from the certified calibration mixture to air. Exclude recovered gas, residual cylinder stock and provider-included calibration service emissions; never add it to network leak/replacement gas. Other actual media/species need reviewed extension.

- Selected flow: Nitrogen from calibration to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum per-event(sole source-event weight × actual released mixture kg × certificate species mass fraction) / D; for directly measured species kg apply only the sole event weight before / D, never composition again; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources:


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocate_direct | all inventory rows | Subdivide independently metered network/station/jobs first; directly assigned quantities have share 1. Common purchased electricity uses submetered actual use first, otherwise measured device kW times actual operating/standby h reconciled to the common meter. Remaining shared recurring maintenance materials and calibration work use this network recorded performed technician-hours / the same all-beneficiary job technician-hours once. Dedicated transport is assigned directly; a shared crew trip uses this network actual technician passenger-km / all-beneficiary passenger-km for the same trip, with empty positioning tied to its evidenced carried-service cohort. Do not choose a different driver later or repeat a share on already assigned activity. Original capital-site events use foreground_site_attribution instead. Missing/nonpositive denominators are gaps, not equal or price allocation. |  |
| allocate_assets | asset_pe_pipe; asset_steel_pipe; asset_station; asset_customer_meter; pipe_installation | Use capital_share for each retained original stationary asset and its installation once. Preserve original quantity/specification/key, commissioning date, evidenced life estimate, all-user time/service ledger and prior allocations. No nested provider vehicle/road/tool supporting-capital inventory is collected. Quantitative lifetimes or masses are site evidence, never defaults. Final capital settlement and source/original-denominator revisions follow capital_source_amendment; recurring components do not receive lifetime allocation. |  |
| allocate_losses | distribution | Assign each leak/vent and confirmed unauthorized-withdrawal event to responsible segment and original period once; shared measured amounts use accepted normal-volume throughput after physical subdivision. The service bears the city-gate production burden of unrecovered U_mass together with physical_loss_mass, normalized by accepted D, without adding U to D or treating U as an emission. Rejected delivery, failed maintenance/testing and emergency work burden accepted D. No co-product or avoided-gas/recycling credit. Accepted commodity-gas production and supplier-return accounting remain in the separate commodity model; it must not count gas_makeup again. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gas | distribution | accepted_service; gas_makeup | Custody and stock ledger | meter ID; gate; timestamp; direction; acceptance/rejection; returns; Va/Vn; correction status; Pa; pw; Ta; Zn; Za; dry composition; density; Hn; gross/net ratio; linepack opening/closing; internal transfers; source/grade; off-spec supplier-return receiver and receiving gate; exact external commodity-model ID; physical transfer quantity; burden/responsibility proof; original acceptance/event ID and cohort; gross G; actual customer R and return timestamp; supplier Sret; other Oin/Oout source/receiver and ownership; confirmed unauthorized U event/gate, metering method, duration, measured normal volume, density/composition, uncertainty, recovery ID/quantity/date and original event link; S0/S1; correction version and original/revised D and U_mass; commodity-model exclusion proof for gas_makeup; | Read calibrated custody meters and synchronized linepack model/instrument records; inspect certificates and source/grade assays. Sample each source/grade change and monthly stable operation; verify actual pressure/temperature, dryness and composition-specific compressibility and density. Reconcile delivery specification and signed acceptance separately from invoices. Read each return and unauthorized-transfer/recovery at its actual custody gate/time using calibrated measurement, retaining raw readings and state conversion. Require independent event evidence of unauthorized transfer, its period/duration and recipient, or explicitly unknown recipient, separately from meter imbalance. A reviewed site-specific estimate needs method/source/uncertainty and sensitivity; unsupported U remains unresolved, never reclassified as leak. Record monthly occurred/absent/unknown for each transfer class with supporting evidence; unsupported absence is not zero. Reconcile transfer and recovery IDs to original acceptance/event cohorts and version both the denominator and linked inventory corrections. | m3; kg; Pa; K; MJ/m3 | interval meter data; monthly reconciliation; every grade change | one complete consecutive 12-month window including outages | all city gates; customer custody meters; same network linepack | per reference flow | calibration; meter configuration; signed acceptance; assays; uncertainty; stock and transfer reconciliation |
| cp_release | distribution | nitrogen_purge; network gas elementary outputs | Event and leak survey register | event/component ID; source; start/end; repair/recheck; rate and unit; whole/species factor flag; method; uncertainty; sample time; dry composition; species density; THT kg/m3; nitrogen opening/closing stock, issued/returned and actual injected kg; nitrogen kg recovered/retained/emitted; first recipient air/soil/unknown; buried depth/path; source-loss determination; dry mixture compressibility; species molar mass; capture; overlap ID; original asset/event key; operational/capital-site phase; alpha or current beneficiary share; | Survey all in-scope mains/services, valves and meter/regulator equipment at least annually and after each repair/incident. Measure calibrated leak/vent flow; integrate documented actual event durations including time before detection with evidence-based uncertainty. For inaccessible leaks use reviewed component/material-specific site estimation with source and uncertainty, not a universal default or unexplained gas balance. Record every blowdown, purge and emergency event; verify representative gas assay for each event regime and additional event samples when different. | m3; kg; h | every event; annual full survey; repair recheck | same full 12 months including unattended intervals and emergencies | all in-scope segments, stations, meters, vents and purges | per reference flow | calibrations; detection limits; event durations; assays; signed repair logs; first receiving medium and buried-path evidence; source-loss method; capture and overlap reconciliation |
| cp_energy | distribution | electricity | Point-of-use purchased-power ledger | meter; timestamp; net accepted kWh; grid receipts/returns; device; voltage; actual kW and operating/standby h; service contract exclusions; network/job beneficiary key | Read calibrated interval meters; reconcile gross external supply and its returns with invoice and common meter. Split actual network/maintenance use from supplier-included service electricity; use actual kW/h only for unmetered inseparable shares and reconcile total. No onsite generation assumed. | kWh; MJ | each interval; monthly closure | same complete consecutive 12 months as D | all foreground points of use | per reference flow | calibration; provider gate; meter/invoice and allocation reconciliation |
| cp_assets | maintenance | asset_pe_pipe; asset_steel_pipe; asset_station; asset_customer_meter; pipe_installation | Original accepted asset and installation ledger | original asset key; configuration/BOM acceptance scope; included/excluded parts; mass or installed length; weighing or item count × verified mass; supplier acceptance gate; original delivery/commissioning date; acceptance certificate; active days/h; all-user reserved dry-normal-volume capacity and reservation/availability h; matching capacity-hour totals; evidenced life estimate and uncertainty; prior fractions; remaining fraction; replacement/disposal link; service included materials/energy/travel/waste ; source-specific B/version and original N fields in cp_capital_amendment | Inspect original delivery, site drawings, equipment tags and accepted work certificates; weigh each defined asset or reconcile verified module/unit masses and accepted count, never invent machine weight. Measure route length from signed as-built sections. Cover existing and new assets, audit all-beneficiary ledgers and life evidence; missing original stock evidence is a tracked gap. Review remaining life annually and at configuration/retirement changes. Complete cp_capital_amendment reconciliation for final settlement and source/denominator revisions. | kg; m; item; day; h | each delivery/replacement; monthly use; annual life review | current D window plus persistent original asset service history | in-scope mains, stations and independent meters only | per reference flow | scale calibration; supplier mass evidence; accepted as-built records; driver reconciliation; life-estimate source and prior-period true-up log |
| cp_capital_amendment | maintenance | original-asset sources and their one-time capital-event components; excludes recurring operating components | versioned_original_source_and_cohort_ledger | asset_ID; source_ID and original row_ID/native unit; original acceptance/event gate; full measured source quantity and old/new versions; measurement/calibration/state basis; each original beneficiary-period/driver unit/u_actual; period b where applicable; all past/future beneficiaries; F_prev_all and remaining_driver; accepted g/F_booked; raw booked B; old normalized result/original N and corrected N; background model versions/scope; actual final retirement evidence; A_new/delta_A/replacement/deduplication links | Collect original records at asset/supplier acceptance, actual site events and receiver handover gates as applicable; verify full quantities through the existing cp_assets weighing/configuration-count/length/driver measurement and calibration methods. At every source/life/model/denominator revision and final retirement, compare old/new records for every original cohort and apply capital_source_amendment. Reconcile all-beneficiary fractions, source totals and each amendment link; the service data custodian reviews and signs the reconciliation. Prove nonoccurrence by complete event registers/zero-activity evidence, never absence-as-zero; retain unresolved identities, measurement uncertainty and incomplete causes. | source-native units; fixed driver units; original reference units | each acceptance/event/revision/final retirement; annual reconciliation | complete original asset history and original service cohorts; evidenced remaining life | existing foreground gates and capital-source responsibility only | once per original reference flow | raw measurement/calibration; signed acceptance/event/receiver records; source/model versions; all-beneficiary and revision reconciliation ledger |
| cp_maintenance | maintenance | seal_nitrile; lubricant; calibration_mix; test_water; calibration_methane_air; calibration_nitrogen_air | On-site job consumption and release ledger | job/date/asset; material/grade/state; opening stock; receipts; unused returns; closing stock; issued/actually consumed kg; calibration certificate composition and molar masses; cylinder before/after mass; recovered/retained/actually released gas; first air interface; test inlet meter/density/temperature; service included scope; beneficiary driver; uncertainty unique original source job/asset; recurring/capital-site tag; all-beneficiary performed technician-hours; | At each actual job weigh issues/returns and cylinder stocks, inspect certified mixture and calibrated testing-water meter; convert volume using actual water density at recorded temperature and formulation where relevant. Reconcile consumed material with waste/retention; calibration mixture methane+nitrogen masses close separately from pipeline-gas ledger. Exclude provider-included supplies/releases; missing composition or release fate is unresolved. | kg; m3; K | every job; monthly stock closure | same complete 12 months as D | actual foreground on-site maintenance only | per reference flow | calibrated scales/meters; signed job and stock logs; certificate; species and water reconciliation |
| cp_services | maintenance | meter_calibration_service; maintenance_transport_service | Defined service contract acceptance ledger | service/job/provider/contract; exact meter/trip configuration; included/excluded resources/emissions/wastes; raw technician timestamps; accepted h; trip start/end/loaded/empty km; vehicle ID/class; idle-only work; actual beneficiary driver; acceptance; conversion evidence beneficiary technician IDs/counts and each carried leg km; linked empty leg/service cohort; | Verify service scope at contract and each acceptance; record actual calibrated technician work h or odometer/GPS vehicle-km, including attributable empty positioning. For a crew of several technicians use total technician h consistently with provider dataset. Idle-only activity must be assigned to the evidenced trip/service cohort with a nonzero total distance and provider-included idle burden; a wholly zero-distance contract requires a separately reviewed time-based service, not zero inventory. Reconcile one contract input with all excluded foreground supplies and no included-item duplicate. | h; vehicle-km | each actual contract job/trip; monthly reconciliation | same complete 12 months as D | defined network jobs and their service gates | per reference flow | contract; signed acceptance; technician timesheets; GPS/odometer; provider scope and idle coverage evidence |
| cp_waste | maintenance | waste_pe_pipe; waste_steel_pipe; waste_meter; waste_station; waste_nitrile; waste_oil; waste_pressure_water | Foreground removal, storage and handover ledger | lot; source job/asset; operational/capital origin; original capital cohort if applicable; actual configuration; attached materials; wet/dry basis; measured carrier kg; sample composition/moisture; opening/generated/closing storage; handover/acceptance date; receiver/site/gate; accepted kg; contractual responsibility; calibration; inventory estimate/true-up status | Weigh each actual characterized carrier before handover; verify signed manifests and receiver acceptance without requiring receiver internal treatment records. Reconcile opening stock + generation - closing stock - handover and investigate transit discrepancies. Retained onsite waste is disclosed as stock, never fictitious treatment or environmental emission. Separate actual operational jobs from original capital disposal and apply capital_retirement. If a new actual carrier/onsite release is identified, extend the specific card set before complete use. | kg | each removal/generation/handover; monthly stock closure | same D window; original capital history for capital waste | foreground generation and documented handover gate only | per reference flow | scales; sampling; manifests; receiver acceptance; stock/asset reconciliation; pending gate register |
| cp_scope | distribution | all conditional exchanges | Occurrence and scope register | site/job/period; asset configuration; conditional row; occurred/absent/unknown; excluded combustion/flare/purification/odorization; actual contract gates; unlisted input/waste/species; evidence; reviewer/date; gap owner/method | Cross-check physical equipment, utility purchases, custody/maintenance/emergency logs, service contracts and waste records. Sign each conditional state for every site and full period; unknown never means absent. Actual excluded route rejects this profile; an actual unlisted foreground exchange requires reviewed specific extension. Supplier-internal processes are not converted into new foreground cards. | occurrence state | initial; each change/event; annual closure | same full 12-month window | all in-scope sites and actual foreground jobs | per reference flow | signed checklist; physical/contract evidence; gap register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_gas_volume | all gas records | For an uncorrected wet actual reading: Vn = Va × (Pa - pw)/Pn × Tn/Ta × Zn/Za; Tn = 273.15 K; Pn = 101325 Pa absolute. Collect Pa, pw, Ta, Zn and Za for the same gas/state interval. For already dry readings pw = 0 only with dryness evidence. If instrument already reports this dry normal basis use its Vn unchanged; different normal bases require their documented conversion. | cp_gas; Va; Pa; pw; Ta; Zn; Za | dry normal gas m3 | epa-gas-calculation-2025 |
| energy_to_volume | accepted_service; gas_makeup | When only a gas energy total E is available, Vn = E/Hn using contemporaneous measured lower heating value Hn in MJ per dry normal m3 on this PCR basis. Convert energy units before division. A gross-heating-value invoice must first be reconciled with measured gross/net ratio; no generic heating value or fixed density. Do not apply both meter volume and energy-derived volume to the same transfer. | cp_gas; E; Hn | reconciled normal volume |  |
| gas_balance | distribution | For each physical month reconcile S0 + C + R + Oin = G + U + Sret + Oout + L + S1 + residual. S0/S1 are opening/closing linepack; C is city-gate supply excluding separately recorded returns; R is actual customer return of previously accepted gas; G is gross accepted outward customer delivery before returns; U is confirmed gross unauthorized outward transfer, not an inferred balance loss; L is measured unrecovered physical leak/vent loss; Sret is actual supplier return; Oin/Oout are other evidenced external receipts/outlets, including returned unauthorized gas and rejected transfers, with exact source/receiver and responsibility model. All categories are mutually exclusive; supplier returns are not customer R. Use gross G here, never net D; R remains a physical inlet in its actual month, even when its acceptance cohort is earlier. Internal transfers cancel. Sum only compatible dry normal volumes and separately reconcile constituent mass with measured densities/composition; changing composition requires mass-based reconciliation. Investigate residual against propagated meter/stock uncertainty; unknown residual is neither confirmed U nor methane nor zero. Externally supplied purge nitrogen has a separate balance and is not natural-gas receipt/loss. | cp_gas; cp_release | physical monthly gross gas balance and residual |  |
| accepted_delivery_cohort | accepted_service; gas_makeup | For each complete 12-month service cohort p, D_p = G_p - R_p in dry normal m3; G_p is gross accepted delivery originating in p and R_p is cumulative actual return linked to those exact acceptance IDs, source/grade and original period, regardless of return date. A credit note without physical return does not create R. Do not deduct supplier returns, rejected/unaccepted transfers or U from D. Record the actual return as current physical inflow/stock, but revise the original cohort D and all its Aj/D amounts once with versioned correction history; do not deduct an earlier-cohort return from unrelated current D. Retain original commodity source/burden on returned stock, without a fresh purchase or duplicate production credit; any later accepted redelivery needs its own acceptance ID linked to that stock. Reconcile cumulative returns against original delivery and block missing links, over-returns or nonpositive D. Later correction/recovery of U similarly revises original U_mass and that cohort gas_makeup; never subtract it from an unrelated current event. | cp_gas; original acceptance/event ID; source/grade; G; R; U; recovery; cohort; correction history | original-cohort positive net D and versioned inventory correction |  |
| release_species | methane_air; carbon_dioxide_air; ethane_air; propane_air; n_butane_air; isobutane_air; n_pentane_air; isopentane_air; nitrogen_air; tht_air; methane_soil; carbon_dioxide_soil; ethane_soil; propane_soil; n_butane_soil; isobutane_soil; n_pentane_soil; isopentane_soil; nitrogen_soil; tht_soil | For each nonoverlapping first-interface leak/vent event e, mi = sum(Vn,e × Pn × xi,e × Mi / (Zmix,n,e × R × Tn)) in kg; Vn is dry mixture m3, Pn = 101325 Pa, Tn = 273.15 K, xi is measured dry mole fraction, Mi is species molar mass in kg/mol, R is the SI molar gas constant in Pa*m3/(mol*K), and Zmix,n is this event mixture compressibility at Pn/Tn. Equivalently use independently measured mixture kg times measured species mass fraction, never both methods. Never multiply mixture volume directly by pure-species density unless an independently justified equal-Z approximation and its uncertainty have been reviewed. A species-specific measured mass/rate or species-specific emission factor already includes composition: do not multiply xi again. Integrate each actual rate over documented leak/event duration and sum once; avoid overlap between routine surveys and the same emergency event. No oxidation factor applies to unburned gas. THT uses measured concentration in kg/m3 directly; multiply Vn only once. | cp_release; cp_gas; xi; Mi; Zmix; R | species kg per reporting window | epa-gas-calculation-2025 |
| makeup_loss | gas_makeup | Attributable input kg = physical_loss_mass + U_mass before division by D. physical_loss_mass is measured unrecovered leak/vent mass by event; U_mass is confirmed unauthorized transfer mass less evidenced physical recovery linked to that original event, not an invoice gap or an inferred residual. Billing, payment or financial compensation does not remove actual gas supply burden. Unauthorized recovery is Oin only, never customer R; the same return/recovery ID cannot appear in both categories. Calculate each mass from matched measured dry normal volume and whole-gas density/composition, or reconcile measured species masses once. Separate source/grade quantities before aggregation and link the corresponding city-gate supply scope; no default density/composition. Assign both to this distribution service once; exclude them from the commodity model and exclude the distribution segment from the supply dataset to prevent recursion. Only physical_loss_mass can generate direct leaked-species emissions through release_species; U never generates methane/other elementary outputs merely because it was withdrawn. Do not add linepack changes, internal circulation or unexplained residual. Exclude external purge nitrogen from a species sum. Recovery/corrections follow accepted_delivery_cohort; physical custody transfers/stock are recorded gross without burden allocation. | cp_gas; cp_release | city-gate gas kg for physical losses and confirmed unrecovered unauthorized withdrawals |  |
| normalize_totals | all inventory rows | For every nonreference row amount = attributable original total Aj / D once. Electricity Aj = attributable accepted kWh × 3.6 MJ/kWh. Asset and associated installation Aj use capital_share first; operational consumed materials/services use actual net consumption and measured beneficiary share once. Different input properties remain on their respective card units; no supplier physical recursion. | cp_gas; cp_energy; cp_assets; cp_maintenance; cp_services; cp_waste; D | preferred row unit per reference flow |  |
| capital_share | asset_pe_pipe; asset_steel_pipe; asset_station; asset_customer_meter; pipe_installation | For original stationary asset a and period p, alpha_a,p = t_active_a,p / L_a × b_a,p. t_active is actual in-service time in this D window, in the same unit as evidenced estimated total service life L_a; include standby/outage while the asset remains available and record actual commissioning/removal dates. b is this network measured nonoverlapping share of total all-beneficiary service during that same active period, after subdivision. A dedicated network asset has b = 1. For a shared asset b = this network documented reserved dry-normal-volume capacity (m3/h) × actual reservation/availability h, summed over the period, divided by the identical sum for all beneficiaries of that asset; retain verified configuration/capacity and reservation records including standby. This fixed capacity-hour driver is not sales price or a later modeller choice; reconcile all-user totals and never apply the same beneficiary share twice. A missing/nonpositive denominator is a gap. Original accepted asset kg/m × alpha is attributed before /D; installation m uses the identical associated asset alpha, not another life fraction. Preserve the original asset key, all periods/users and cumulative fractions <=1. L is an evidence-supported estimate with uncertainty until retirement, not a known future actual value. At a life revision freeze already-booked fractions; thereafter allocate the remaining original fraction by actual remaining-period active time / evidenced remaining life × the same all-user b, rather than resetting the original total. True-up affected cohorts at retirement; never reset past fractions or invent mass/life. A persistent replacement creates its own key; direct recurring consumables/jobs have no second capital fraction. Apply capital_source_amendment for final settlement, source quantity/model-version corrections and original-denominator changes; any delta-fraction times source-quantity expression here is conditional on its unchanged-source/model requirements. | cp_assets; original asset key; t_active; L; b; prior fractions | conserved original asset attribution |  |
| capital_source_amendment | original-asset sources and their one-time capital-event components; excludes recurring operating components | Within this entry's declared applies_to scope, apply the complete ordered rule group: capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | attributed totals in source-native units; normalize once by original N_c |  |
| capital_retirement | capital-origin waste outputs | Link actual foreground capital removal/handover carrier mass to its original asset key and service-beneficiary cohorts. The asset lifetime foreground waste total is attributed once using the same conserved final service fractions as its original asset input. Do not charge the full retired mass to disposal-year D and also to historical capital cohorts. Before actual retirement, disclose future waste as unobserved and the fixed attribution/true-up method; do not invent a future receiving process or call it observed. When actual mass/gate is available, replace any explicitly evidenced prospective handover estimate and true-up the original affected cohorts; no parallel prospective/actual postings. Operational repair waste uses current actual job share without life allocation. Final capital settlement and source/original-denominator revisions follow capital_source_amendment; recurring components do not receive lifetime allocation. | cp_assets; cp_waste; original asset key; original service fractions | capital and operational waste attribution once |  |
| nitrogen_balance | nitrogen_purge; nitrogen_air; nitrogen_soil | Externally supplied purge nitrogen = recovered + retained + exported + released to air + released to soil, using actual events and one first interface. Add native gas nitrogen releases separately from release_species, and do not include purge nitrogen in replacement natural-gas mass. Internal recovery/reinjection cancels; an actual external export requires reviewed transfer identity/gate, never unrecorded output. | cp_release; cp_gas | separate purge-nitrogen mass closure |  |
| calibration_balance | calibration_mix; calibration_methane_air; calibration_nitrogen_air | For the actual certified two-component mixture, derive mass fractions from the certificate directly, or wi = xi Mi / sum(xj Mj) for measured mole fractions. Actual mixture withdrawn = returned/recovered + retained + released. Species release kg = actual released mixture kg × wi once; species-measured kg is not multiplied again. Close both species masses and reconcile cylinder stocks. No default mixture, no pure-species-density multiplication of mixture volume, and no connection to network replacement-gas loss. | cp_maintenance; certificate; xi; Mi; stocks; recovery | calibration-specific methane and nitrogen kg |  |
| waste_handover | all waste outputs | For each actual carrier lot: opening foreground stock + actual generation = accepted handover + closing foreground stock + evidenced other actual transfer. Reconcile carrier wet mass and characterized composition; do not add carrier mass plus contained substances. A receiver shipment is not an elementary release or automatically recovered co-product; no unproved recycling credit. Resources/emissions of off-site treatment stay in the matched background link, not a second foreground chain. | cp_waste; carrier mass; storage; receiver acceptance | measured foreground handover kg |  |
| foreground_site_attribution | all inventory rows | Classify each actual foreground job/event as recurring operation or identifiable original-asset installation/commissioning/retirement. Recurring materials, work, test/calibration releases and waste use the fixed current-job beneficiary share under allocate_direct. Original capital-site source events use that associated original asset conserved alpha from capital_share once before /D; actual handover stays with its original event/cohort under capital_retirement, not all disposal-year D. Do not apply alpha again to already weighted asset or installation service inputs. Collect raw event quantity, original asset key, phase, beneficiary, alpha and original denominator in cp_assets/cp_maintenance/cp_services/cp_waste. Physical gas/material balances remain unallocated QA; phase-weighted totals are separate and never added twice. Supplier preacceptance activities already included in the chosen product/service gate are not foreground events. Unknown actual phase or quantities block complete data. Already attributed quantities retain weight 1 here; do not repeat any current beneficiary share already applied by the specific work/material rule. Final capital settlement and source/original-denominator revisions follow capital_source_amendment; recurring components do not receive lifetime allocation. | cp_assets; cp_maintenance; cp_services; cp_waste; D | Once-attributed actual site totals/D |  |
| capital_source_amendment_history | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. This rule completes the existing frozen-history/remaining-life policy; it does not require retrospective replacement of historical life fractions at every life revision. Keep the original asset key, each native-unit source s and version, exact product/event gate, all beneficiary-period cohorts c, immutable raw measurements and accepted postings. Before actual final retirement, life/utilization revisions freeze historical fractions and allocate only the remaining fraction using the existing evidenced remaining driver; require 0<=F_prev_all<=1 and include the current interval and all future beneficiaries in the positive remaining denominator. A late first-observed capital source uses each historical accepted fraction and the same remaining ledger, not a full event-year charge. Preserve the existing time-then-period-share policy: for each original active period p, u_c,p=t_active_p*b_c,p, where b is that period reserved dry-normal-volume capacity-hour share and the shares of all beneficiaries sum to one. U_final=sum_p(t_active_p)=sum_c,p(u_c,p), counting each active period once. Do not replace this with a cross-period total-capacity-hour weighting. Standby/outage while available remains in t_active under capital_share. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_final_shares | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At actual final retirement set w_c=u_actual_c/U_final with U_final=sum_all_original_beneficiaries(u_actual)>0; all final shares sum to one, including non-study/failed/standby responsibilities already prescribed by the original driver. A transfer to continued use is not final retirement. Zero or unknown lifetime activity, unsupported prior fractions or missing original cohorts prevents final allocation; retain raw totals and the gap, never equal-split or invent use. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_source_revision | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For source correction before retirement use each original cohort accepted fraction g_c; at final retirement use g_c=w_c. Q_s,new is the evidenced FULL source quantity before allocation in its original card unit, not a remaining unallocated balance or a previously weighted amount. B_s,c is the actual previously booked attributed raw quantity for that source/cohort, with its quantity/model version and previous normalized result. Calculate A_s,c,new=Q_s,new*g_c and delta_A_s,c=A_s,c,new-B_s,c. A newly observed source has B=0 where unposted; a correction to an existing source replaces that source ID, not an additional purchase or disposal event. The shortcut (g_new-F_booked)*Q_s is valid only when the source quantity and linked model version are unchanged and B=F_booked*Q_s; otherwise use A_new-B. Reconcile physical gross receipt/stock/transfer/handover separately; signed corrections are model amendments, never negative physical exchanges or substitution credits. For a changed linked supply/treatment model, replace the affected original-cohort inventory/results even if delta_A=0; remove the previous model contribution and record both versions and scope. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_normalization | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Normalize the complete revised attributed amount once by the original cohort current verified reference denominator N_c (Q, D or A as locally named). If N_c itself changes, replace the complete old normalized result; do not add delta_A/new_N to a result based on old_N. Zero-output events retain their already prescribed causal parent; a parent without positive N_c retains raw attributed totals and an incomplete normalized result, never shifts to an unrelated positive-output period. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |
| capital_source_amendment_scope | original-asset sources and their one-time capital-event components; excludes recurring operating components | Component of capital_source_amendment. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Apply this to each actual capital-origin source covered by the existing gates, including separately counted initial fill, post-acceptance capital-site events and actual retirement carriers where present; do not create new sources, extend background boundaries, duplicate included supply stages or apply lifetime fractions to routine operation. These are explicit candidate accounting rules, not claimed numerical requirements of the cited classification or technical sources. | cp_capital_amendment; cp_assets | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Unbound cards are specified measurement candidates. Before use independently direct-read exact object, record state, property, unit, medium and official bilingual names with hash-bound receipts. Historical Alternating current applies only to its verified point-of-use role and is not a fresh query; search hits/agent opinion cannot bind identity. | cp_gas; cp_energy; cp_assets; cp_maintenance; cp_services; cp_waste |
| quality_missing | all inventory rows | Unknown quantity, identity, composition, original asset amount/life, contract coverage, duration or medium is missing, never zero. Record owner, recovery method, uncertainty and completeness effect; use only reviewed site-specific estimation with sensitivity or block a complete claim. Examples, estimates and detection limits are not defaults/compliance limits. | cp_scope; all collection protocols |
| quality_occurrence | all processes | Sign occurred/absent/unknown per site/job and full period. Use actual assays, not automatic minor-species emissions. Actual excluded routes reject applicability; extend specific actual missing foreground exchanges, not supplier internals. | cp_scope |
| quality_temporal | all inventory rows | Use complete consecutive 12 months including standby, outages, unattended intervals and emergencies with monthly reconciliation. Sample each source/grade change and at least monthly stable operation, adding event samples when different; record representativeness, calibration/detection limits, state/compressibility provenance and propagated uncertainty. | cp_gas; cp_release; cp_energy |
| quality_gate_closure | maintenance | Reconcile original responsibility to specific asset/services, on-site consumables, wastes and actual releases. A purchased complete object needs no chemical decomposition: verify one measurement object/property/unit and contract gate. Preserve original capital shares/history and true-up without recursive background factory/vehicle/road/tool/receiver inventories. Shorter foreground inventories do not make accepted commodity gas free upstream: identify external commodity-model ownership. | cp_assets; cp_maintenance; cp_services; cp_waste; cp_gas |
| inv_air_species | methane_air; carbon_dioxide_air; ethane_air; propane_air; n_butane_air; isobutane_air; n_pentane_air; isopentane_air; nitrogen_air; tht_air | Assign nonoverlapping measured leak/vent events to this species only; no total mixture emission or duplicate soil-source release. | Existing collection protocols and evidence of each listed inventory row. |
| inv_soil_release | methane_soil; carbon_dioxide_soil; ethane_soil; propane_soil; n_butane_soil; isobutane_soil; n_pentane_soil; isopentane_soil; nitrogen_soil; tht_soil | Use the source-interface loss quantity and soil compartment; do not also count its later migration into air as another source release. Downstream environmental transformation belongs to an explicitly separate fate model, not an assumed oxidation factor. | Existing collection protocols and evidence of each listed inventory row. |
| inv_waste_carrier | waste_pe_pipe; waste_steel_pipe; waste_meter; waste_station; waste_nitrile; waste_oil; waste_pressure_water | Conditional on this actual carrier being removed or generated within foreground responsibility and handed over. Measure its actual carrier mass, attached materials/contamination and water content; identify source asset/job, storage and accepted receiver gate. Capital-retirement waste follows original asset attribution; direct operational waste follows the current job. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | accepted_service | Verify own-account dry-natural-gas route, accepted custody gates and excluded-operation occurrence. Reject whole-CPC exact coverage, fee distribution, hydrogen/LPG/manufactured gas/transmission equivalence, or customer combustion included in this service. | un-cpc-gas-distribution |
| validate_reference | all inventory rows | Require all qualifiers, unique 1 m3 accepted_service, positive D, actual 12-month interval, returns and one normalization. Verify dry state, normal conditions, Zmix, same assay and exact unit/formula on both language cards. |  |
| validate_balance | distribution; maintenance | Independently reconcile gas, species, purge nitrogen and calibration-mixture balances. Reject unexplained-residual-as-methane, native/purge/calibration source mixing, composition twice, mixture plus species double count, unproved air/soil duplication or pure-species-density multiplication. Require monthly gross G with actual R and confirmed U outlets, distinct supplier/other transfers and zero-or-explained residual within measured uncertainty. Trace D = G - R to its original cohort, version cross-period corrections once and reconcile stock/source carry-forward. Verify gas_makeup owns unrecovered physical loss plus confirmed unrecovered U, with commodity-model exclusion; U must not increase D or direct gas emissions. |  |
| validate_foreground | all inventory rows | Each card is one specific measurable exchange with one primary property and preferred unit; defined complete assets/solutions/services may remain whole. Verify scope/acceptance, included-resource de-duplication, actual original asset shares and waste handover; no supplier recursion, undefined catch-all, unknown zero, mass+same assembly, contained-waste duplicate or full-capital charge at retirement. |  |
| validate_capital_amendment | original-asset sources and their one-time capital-event components; excludes recurring operating components | Verify the original driver, freeze/remaining ledger, actual final w, each source full Q_s/B/version, original N and whole normalized-result replacement under capital_source_amendment. Recalculate unchanged-quantity share corrections, changed quantity with unchanged share, changed model with zero physical delta, corrected original N and zero-output cases; verify mutually exclusive capital/recurring components and all beneficiaries. Missing traceable old postings or positive denominators remains incomplete; prohibit disposal-year fallback, negative physical flows, duplicate normalization or second shares. |  |
| validate_projection | all inventory rows | Compare bilingual objects, official display names where bound, directions/types, IDs, units, formulas/denominators, conditions, negations, obligation strength and all protocol/rule references. Regenerated structured/guidance must include every mandatory table rule. Schema/fingerprint/atomic/localized checks are structural evidence, not scientific approval; identity/data gaps remain explicit and block publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | own_account_gas_distribution_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Distribution-stage foreground inventory for a separately scoped commodity-gas model; later matched background supply/service/treatment links once |
| excluded_use | Full gas production-to-combustion footprint; fee distribution; other gas/excluded routes; full lifecycle claim without matched background links; scientific approval inferred from checks |
| required_metadata | All reference qualifiers; D; gas/species/purge/calibration balances; external commodity-model ownership; foreground process gates; specific asset/service acceptance scope; original asset mass/length and all-user lifetime service fractions; current consumption; waste handover/storage; row-specific identity receipts |
| required_quality_disclosure | Unbound identities; missing quantities/life/contract coverage; estimates and true-up; unobserved future retirement; uncertainty; background stages not expanded/linked and de-duplication |
| update_trigger | Gas specification/source change; network/equipment/contract gate change; recalibration; leak/emergency; remaining-life evidence/retirement true-up; new actual foreground exchange |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-gas-distribution | official_guidance | UNSD CPC 3.0, 69120. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69120 | Own-account gaseous-fuel distribution and meter maintenance; exclusions and narrower scope assessment |
| eia-gas-delivery | official_guidance | US EIA, Natural gas explained: Delivery and storage of natural gas. https://www.eia.gov/energyexplained/natural-gas/delivery-and-storage.php | Distinguish processing, long-distance transmission, local mains/services and bulk storage |
| epa-gas-calculation-2025 | official_guidance | US EPA, 40 CFR 98.233, July 1 2025 edition, paragraphs (t), (u), (v), equations W-33, W-35, W-36, printed pp.931–933. https://www.govinfo.gov/content/pkg/CFR-2025-title40-vol23/pdf/CFR-2025-title40-vol23-sec98-233.pdf | Gas-state correction, CH4/CO2 speciation and mass conversion structure only; the dry-gas equation is a PCR-designed SI adaptation including measured water vapour and standard-state compressibility. This PCR independently requires measured site composition and uses 273.15 K/101325 Pa; it adopts no US standard-state densities, default composition, threshold or reporting exemption and is not a regulatory compliance determination. |
