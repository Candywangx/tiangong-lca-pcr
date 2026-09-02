---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whey
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Whey

## 1. Scope and Applicability

This PCR supports foreground data packages for whey sold or transferred as a fluid dairy product at a declared plant gate. It covers sweet whey separated after enzyme-coagulated cheese or casein manufacture and acid whey separated after acid coagulation. The declared product may be untreated, clarified, pasteurised, cooled, or concentrated while remaining a pumpable liquid whey product. Each dataset shall disclose the source dairy process, animal species or species mixture, sweet/acid status, total-solids or dry-matter content, acidity or pH, treatment route, temperature state, and bulk or packaged market state.

The foreground gate starts when separated whey enters the whey collection line or when purchased fluid whey is received at the reporting facility. It ends when conforming fluid whey is ready for dispatch at the declared plant gate. Collection, transfer, clarification, cream/fines removal, cooling, storage, pasteurisation, membrane concentration, evaporation, cleaning-in-place, packaging, and on-site effluent handling are included when performed for the declared fluid-whey product. Milk production, cheese or casein manufacture before whey separation, production of purchased utilities and materials, off-site transport, downstream conversion, distribution, use, and end-of-life require linked datasets when included in the study scope.

Whey powder, acid whey powder, whey protein concentrate or isolate sold as a dry product, lactose, whey permeate powder, whey cheese, formulated whey beverages, and products whose dairy constituents no longer meet the declared fluid-whey identity are excluded. Drying is outside this PCR because the CPC scope is the fluid whey product; use an appropriate downstream product PCR for powder or ingredient manufacture.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whey |
| classification_refs | CPC 3.0 `22130` Whey |
| covered_products | sweet whey and acid whey marketed or transferred as fluid dairy products; untreated, clarified, pasteurised, cooled, or concentrated liquid whey when the state is declared |
| excluded_products | whey and acid whey powders; dried whey ingredients; whey protein concentrate or isolate sold as dry products; lactose; whey permeate powder; whey cheese; formulated whey beverages; cheese, casein, milk, cream, and non-dairy analogues |
| representative_product | saleable fluid whey at the declared plant gate |
| production_route | recovery after cheese or casein coagulation and curd separation, followed by route-specific conditioning, storage, and dispatch |
| market_state | bulk or packaged pumpable liquid; sweet or acid; declared solids, composition, temperature, treatment, and concentration state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | conforming fluid whey supplied for food, feed, fermentation, ingredient manufacture, or another declared downstream use |
| How much | 1 kg wet product at the declared plant gate |
| How well | meets the declared sweet/acid identity, source-process specification, solids and composition basis, pH or acidity, microbiological or commercial specification, and treatment state |
| How long or cycle | one production batch or reporting-period output, normalized to 1 kg dispatched product |
| reference_flow_link | reference product output `whey_reference_product` from `storage_and_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Whey `7ee9083e-5a51-476e-b96f-1501752e169a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sweet or acid whey; originating dairy product and animal species; raw, clarified, pasteurised, cooled, or concentrated state; total solids or dry matter; protein, fat, lactose, ash or mineral basis when available; pH or titratable acidity; temperature; bulk or packaging form; manufacturing geography; plant gate; allocation treatment of upstream shared dairy operations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_wet_mass` | reference whey product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference flow as wet as-dispatched product mass; do not substitute dry-matter mass for the 1 kg reference amount. |
| `composition_basis` | whey feedstock, intermediates, product, losses, and co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg plus declared mass fraction | Record wet mass and the sampling basis for total solids or dry matter; disclose whether protein, fat, lactose, ash, and acidity values are measured on wet or dry basis. |
| `concentration_conversion` | concentrated liquid whey | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert feed and concentrate quantities through measured wet mass and solids mass balance; retain the concentration factor and evaporated or removed water separately. |
| `utility_conversion` | electricity, fuels, steam, refrigeration, and water | applicable energy, mass, or volume property | kWh, MJ, kg, or m3 | Preserve measured utility units and document conversion factors; normalize utilities only after batch or reporting-period totals are reconciled to conforming product mass. |

## 5. System Boundary

The dataset shall represent the declared fluid-whey route without silently importing upstream cheese burdens, downstream powder manufacture, or disposal credits.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | separated wet whey entering the recovery line, or purchased fluid whey received at the facility |
| starting_condition_role | product identity and upstream-burden hand-off for the fluid-whey foreground system |
| product_classification_scope | CPC 3.0 `22130` Whey, interpreted as fluid whey rather than the separately classified powder product |
| recursive_input_rule | an input already classified as fluid whey is recorded as a product input with the Whey flow UUID, its wet mass and qualifiers, and a linked upstream dataset; do not recreate its upstream whey-production burdens inside the receiving process |
| upstream_dataset_requirement | link milk, cheese or casein production and shared coagulation/separation burdens through reviewed upstream datasets and the declared allocation treatment; link purchased whey when the foreground starts at receipt |
| disclosure | disclose whey origin, sweet/acid status, source dairy product, species, solids and composition basis, treatment state, receipt or separation point, included operations, allocation method, losses, co-products, effluent route, geography, period, and plant gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_identity` | product inclusion | Include only fluid whey separated from curd after coagulation in cheese, casein, or similar dairy manufacture and preserve sweet/acid and source-process identity. | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `boundary_start_and_end` | foreground gate | Start at whey separation into the recovery line or at purchased-fluid-whey receipt; end at conforming fluid whey ready for dispatch at the declared plant gate. | `codex-cxs-289-1995-whey-powders`; `us-epa-ap42-9-6-1-cheese` |
| `boundary_included_operations` | on-site whey handling | Include collection, transfer, clarification, cooling, pasteurisation, liquid concentration, storage, cleaning, packaging, and on-site effluent handling when performed for the declared product. | `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese` |
| `boundary_acid_whey_timing` | acid whey route | Record the time from separation to conditioning and avoid unreported holding that changes acidity; acid whey should be processed promptly and the actual residence time shall be disclosed. | `eu-2019-2031-fdm-bat` |
| `boundary_downstream_exclusions` | powders and derived ingredients | Exclude drying and downstream manufacture of whey powder, protein concentrates or isolates, lactose, permeate powder, whey cheese, and formulated beverages from the fluid-whey foreground gate. | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `boundary_recursive_whey_input` | purchased or transferred fluid whey | Record same-category whey as an input with an upstream dataset and do not double-count its upstream dairy or recovery burdens. |  |
| `boundary_emissions_and_waste` | direct releases and treatment | Include measured on-site wastewater, product losses, residues, refrigerant losses, combustion releases, and treatment outputs attributable to included operations; disclose off-site treatment links. | `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| whey_receipt_and_recovery | Whey receipt and recovery | required |  | foreground collection and product hand-off | wet whey transferred to conditioning |
| liquid_whey_conditioning | Liquid whey conditioning | conditional | include clarification, cream/fines removal, pasteurisation, cooling, membrane treatment, or evaporation when performed before sale as fluid whey | foreground conditioning | conditioned pumpable whey |
| storage_and_dispatch | Storage and dispatch | required |  | foreground storage and product dispatch | 1 kg conforming fluid whey dispatched |
| onsite_effluent_management | On-site effluent management | conditional | include when wastewater or product losses are treated, equalised, digested, or discharged on site | foreground waste and emission management | treated effluent and residual outputs |

### Process: Whey receipt and recovery (`whey_receipt_and_recovery`)

#### Inputs

##### Product flows

###### Separated or purchased fluid whey feedstock (`raw_whey_input`)

Record the wet whey entering the foreground system, including origin, sweet/acid status, composition, temperature, and the linked upstream burden hand-off.

- Selected flow: Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass received or transferred into the whey recovery line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_whey_batch_mass_and_composition`
- Data source: Calibrated tank, load-cell, transfer, laboratory, stock, and dispatch records governed by `cp_whey_batch_mass_and_composition`.
- UUID status: Verified existing reference flow (`verified_reference`).
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Required (`required`). Required for every dataset; distinguish separated on-site whey from purchased whey and link its upstream dataset.
- Sources: `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

###### Electricity for whey receipt, transfer, and initial cooling (`recovery_electricity`)

Record electricity consumed by receipt, pumping, screening, transfer, and initial cooling as one stage-specific electricity exchange.

- Selected flow: Electricity supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented equipment allocation for whey receipt and recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Required (`required`). Required for the receipt-and-recovery process; report an evidenced zero only when no electricity is consumed.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered wet whey transferred to conditioning or storage (`recovered_whey_intermediate`)

Calculate the wet intermediate transferred after accounting for retained heel, samples, separately recovered outputs, and recorded whey losses.

- Selected flow: Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or reconciled batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_whey_batch_mass_and_composition`
- Data source: Calibrated tank, load-cell, transfer, laboratory, stock, and dispatch records governed by `cp_whey_batch_mass_and_composition`.
- UUID status: Verified existing reference flow (`verified_reference`).
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Required (`required`). Required; route directly to storage when no conditioning operation occurs.
- Sources: `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

##### Waste flows

###### Waste whey from receipt and recovery (`recovery_whey_loss`)

Record whey spillage, retained heel, sampling loss, or rejected raw whey that is sent to one documented waste or treatment destination.

- Selected flow: Waste whey from recovery
- Flow property / unit: Mass / kg
- Amount rule: measured waste-whey mass or reconciled mass-balance difference assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on a physical waste-whey stream; do not combine it with wastewater or separator residues.
- Sources: `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese`

##### Elementary flows

### Process: Liquid whey conditioning (`liquid_whey_conditioning`)

#### Inputs

##### Product flows

###### Recovered whey entering conditioning (`conditioning_whey_input`)

Record the wet mass and composition of recovered whey entering the included conditioning operations.

- Selected flow: Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from recovery or receipt tank
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_whey_batch_mass_and_composition`
- Data source: Calibrated tank, load-cell, transfer, laboratory, stock, and dispatch records governed by `cp_whey_batch_mass_and_composition`.
- UUID status: Verified existing reference flow (`verified_reference`).
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on inclusion of `liquid_whey_conditioning`.
- Sources: `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

###### Electricity for liquid whey conditioning (`conditioning_electricity`)

Record electricity for clarification, separation, pasteurisation auxiliaries, cooling, membrane treatment, evaporation auxiliaries, and associated pumps.

- Selected flow: Electricity supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented equipment allocation for included conditioning operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on electricity-consuming conditioning equipment; keep this stage separate from recovery and storage electricity.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Purchased steam for whey conditioning (`conditioning_purchased_steam`)

Record purchased steam crossing the facility boundary for pasteurisation or evaporation without combining it with hot water or fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: metered steam mass; retain pressure, temperature, condensate return, and enthalpy calculation in the foreground record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on purchased steam use; do not use this card for steam generated from on-site fuel already recorded separately.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Purchased hot water for whey conditioning (`conditioning_purchased_hot_water`)

Record purchased hot water used as a thermal utility as a separate carrier from process water and steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: metered hot-water mass with supply and return temperatures retained for the heat calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on purchased hot-water supply; do not duplicate water already recorded as process or CIP water.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Natural gas combusted for whey conditioning (`conditioning_natural_gas`)

Record natural gas supplied to an on-site boiler or direct heater used for included conditioning heat.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered gas quantity converted with a documented net calorific value and allocated to conditioning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on on-site natural-gas combustion; do not combine with diesel, LPG, purchased steam, or purchased hot water.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Diesel fuel combusted for whey conditioning (`conditioning_diesel`)

Record diesel supplied to an on-site boiler or heater used for included conditioning heat.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: measured diesel issue or tank-stock difference allocated to conditioning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on on-site diesel combustion; keep emergency-generator diesel in the electricity supply dataset unless directly attributable here.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Liquefied petroleum gas combusted for whey conditioning (`conditioning_lpg`)

Record liquefied petroleum gas supplied to an on-site boiler or heater used for included conditioning heat.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: measured LPG issue or tank-stock difference allocated to conditioning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on on-site LPG combustion; do not combine it with natural gas or diesel.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Process and CIP water supplied to whey conditioning (`conditioning_water`)

Record cold or ambient process and cleaning water crossing the process boundary as one water-supply exchange; purchased hot water is recorded separately.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered water or validated tank-volume record assigned to included conditioning and cleaning operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_and_materials`
- Data source: CIP dosing-controller, material-issue or purchase, water-meter, and cycle-log records governed by `cp_cleaning_water_and_materials`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on process or CIP water use; exclude purchased hot water and internally recirculated water that does not cross the boundary.
- Sources: `eu-2019-2031-fdm-bat`

###### Sodium hydroxide for CIP (`conditioning_sodium_hydroxide`)

Record sodium hydroxide supplied to the whey line by product mass and active concentration.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: inventory issue, dosing-controller, or purchase mass of sodium hydroxide reconciled to included cleaning or disinfection cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_and_materials`
- Data source: CIP dosing-controller, material-issue or purchase, water-meter, and cycle-log records governed by `cp_cleaning_water_and_materials`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on actual use of this single chemical; record any other cleaner or disinfectant in its own species-specific card.
- Sources: `eu-2019-2031-fdm-bat`

###### Nitric acid for CIP (`conditioning_nitric_acid`)

Record nitric acid supplied to the whey line separately from phosphoric acid and other cleaners.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: inventory issue, dosing-controller, or purchase mass of nitric acid reconciled to included cleaning or disinfection cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_and_materials`
- Data source: CIP dosing-controller, material-issue or purchase, water-meter, and cycle-log records governed by `cp_cleaning_water_and_materials`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on actual use of this single chemical; record any other cleaner or disinfectant in its own species-specific card.
- Sources: `eu-2019-2031-fdm-bat`

###### Phosphoric acid for CIP (`conditioning_phosphoric_acid`)

Record phosphoric acid supplied to the whey line separately from nitric acid and other cleaners.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: inventory issue, dosing-controller, or purchase mass of phosphoric acid reconciled to included cleaning or disinfection cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_and_materials`
- Data source: CIP dosing-controller, material-issue or purchase, water-meter, and cycle-log records governed by `cp_cleaning_water_and_materials`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on actual use of this single chemical; record any other cleaner or disinfectant in its own species-specific card.
- Sources: `eu-2019-2031-fdm-bat`

###### Peracetic acid disinfectant (`conditioning_peracetic_acid`)

Record peracetic acid disinfectant supplied to the whey line by product mass and active concentration.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: inventory issue, dosing-controller, or purchase mass of peracetic acid reconciled to included cleaning or disinfection cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_and_materials`
- Data source: CIP dosing-controller, material-issue or purchase, water-meter, and cycle-log records governed by `cp_cleaning_water_and_materials`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on actual use of this single chemical; record any other cleaner or disinfectant in its own species-specific card.
- Sources: `eu-2019-2031-fdm-bat`

###### Sodium hypochlorite disinfectant (`conditioning_sodium_hypochlorite`)

Record sodium hypochlorite disinfectant only when it is actually supplied to the included whey line.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: inventory issue, dosing-controller, or purchase mass of sodium hypochlorite reconciled to included cleaning or disinfection cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_and_materials`
- Data source: CIP dosing-controller, material-issue or purchase, water-meter, and cycle-log records governed by `cp_cleaning_water_and_materials`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on actual use of this single chemical; record any other cleaner or disinfectant in its own species-specific card.
- Sources: `eu-2019-2031-fdm-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned fluid whey (`conditioned_whey_output`)

Record the wet mass, solids, pH or acidity, temperature, and treatment state of conditioned whey transferred to storage.

- Selected flow: Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned-whey transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_whey_batch_mass_and_composition`
- Data source: Calibrated tank, load-cell, transfer, laboratory, stock, and dispatch records governed by `cp_whey_batch_mass_and_composition`.
- UUID status: Verified existing reference flow (`verified_reference`).
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on inclusion of conditioning; do not record the same stream again as rejected whey or wastewater.
- Sources: `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

###### Recovered whey cream (`conditioning_recovered_cream`)

Record whey cream only when clarification or separation produces a physically separate, saleable cream stream.

- Selected flow: Recovered whey cream
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and composition of the separately transferred recovered output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_and_allocation`
- Data source: Measured production, composition, destination, and allocation records governed by `cp_coproduct_and_allocation`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on a physically separate output with documented further use; do not double-count the same material in another co-product or waste card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Recovered milk fat (`conditioning_recovered_milk_fat`)

Record recovered milk fat only when it is a physically separate output distinct from whey cream.

- Selected flow: Recovered milk fat
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and composition of the separately transferred recovered output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_and_allocation`
- Data source: Measured production, composition, destination, and allocation records governed by `cp_coproduct_and_allocation`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on a physically separate output with documented further use; do not double-count the same material in another co-product or waste card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Recovered separator fines from whey clarification (`conditioning_recovered_dairy_fines`)

Record separator fines as a product only when their quantity, quality, use, and destination establish a separate recovered output.

- Selected flow: Recovered separator fines from whey clarification
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and composition of the separately transferred recovered output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_and_allocation`
- Data source: Measured production, composition, destination, and allocation records governed by `cp_coproduct_and_allocation`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on a physically separate output with documented further use; do not double-count the same material in another co-product or waste card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Fluid whey permeate (`conditioning_fluid_whey_permeate`)

Record fluid whey permeate only when membrane treatment produces a separate pumpable output with a documented use or market destination.

- Selected flow: Fluid whey permeate
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and composition of the separately transferred recovered output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_and_allocation`
- Data source: Measured production, composition, destination, and allocation records governed by `cp_coproduct_and_allocation`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on a physically separate output with documented further use; do not double-count the same material in another co-product or waste card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Evaporator condensate sent to treatment (`conditioning_evaporator_condensate`)

Record separately collected evaporator condensate that leaves conditioning for wastewater management; internal reuse is tracked in the water balance but is not a boundary exchange.

- Selected flow: Evaporator condensate from whey concentration
- Flow property / unit: Mass / kg
- Amount rule: measured waste-stream mass or volume converted with documented density and assigned to its destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste stream crossing the conditioning boundary; retain its single actual destination.
- Sources: `eu-2019-2031-fdm-bat`

###### Rejected separator fines from whey clarification (`conditioning_rejected_dairy_fines`)

Record separator fines that lack a documented product destination as one specific waste stream.

- Selected flow: Rejected separator fines from whey clarification
- Flow property / unit: Mass / kg
- Amount rule: measured waste-stream mass or volume converted with documented density and assigned to its destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste stream crossing the conditioning boundary; retain its single actual destination.
- Sources: `eu-2019-2031-fdm-bat`

###### Spent filter residue from whey conditioning (`conditioning_filter_residue`)

Record spent residue physically removed from filters used in included whey conditioning.

- Selected flow: Spent filter residue from whey conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured waste-stream mass or volume converted with documented density and assigned to its destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste stream crossing the conditioning boundary; retain its single actual destination.
- Sources: `eu-2019-2031-fdm-bat`

###### Rejected whey from conditioning (`conditioning_rejected_whey`)

Record an off-specification conditioned-whey batch as waste only when it is not recovered as product or returned internally.

- Selected flow: Rejected whey from conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured waste-stream mass or volume converted with documented density and assigned to its destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste stream crossing the conditioning boundary; retain its single actual destination.
- Sources: `eu-2019-2031-fdm-bat`

###### Wastewater from whey conditioning and CIP (`conditioning_wastewater`)

Record the wastewater stream transferred from conditioning and CIP to on-site or off-site treatment, excluding separately recovered product and condensate.

- Selected flow: Dairy processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured waste-stream mass or volume converted with documented density and assigned to its destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste stream crossing the conditioning boundary; retain its single actual destination.
- Sources: `eu-2019-2031-fdm-bat`

##### Elementary flows

###### Fossil carbon dioxide from on-site conditioning heat (`conditioning_carbon_dioxide_fossil_to_air`)

Calculate fossil carbon dioxide released from natural gas, diesel, or LPG actually combusted for included conditioning heat.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from actual fuel use with a reviewed substance-specific factor and documented unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on on-site combustion and availability of substance-specific evidence; do not derive this card by splitting an aggregate emission without a reviewed method.
- Sources: `eu-2021-2279-environmental-footprint`

###### Nitrogen monoxide from on-site conditioning heat (`conditioning_nitrogen_monoxide_to_air`)

Record nitrogen monoxide as a separate substance when measured or derived from a reviewed species-specific combustion record.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from actual fuel use with a reviewed substance-specific factor and documented unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on on-site combustion and availability of substance-specific evidence; do not derive this card by splitting an aggregate emission without a reviewed method.
- Sources: `eu-2021-2279-environmental-footprint`

###### Nitrogen dioxide from on-site conditioning heat (`conditioning_nitrogen_dioxide_to_air`)

Record nitrogen dioxide as a separate substance when measured or derived from a reviewed species-specific combustion record.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from actual fuel use with a reviewed substance-specific factor and documented unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on on-site combustion and availability of substance-specific evidence; do not derive this card by splitting an aggregate emission without a reviewed method.
- Sources: `eu-2021-2279-environmental-footprint`

###### Sulfur dioxide from on-site conditioning heat (`conditioning_sulfur_dioxide_to_air`)

Record sulfur dioxide as a separate substance when measured or calculated from documented fuel sulfur and a reviewed method.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from actual fuel use with a reviewed substance-specific factor and documented unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on on-site combustion and availability of substance-specific evidence; do not derive this card by splitting an aggregate emission without a reviewed method.
- Sources: `eu-2021-2279-environmental-footprint`

### Process: Storage and dispatch (`storage_and_dispatch`)

#### Inputs

##### Product flows

###### Conditioned whey entering storage (`storage_whey_input`)

Record the mass, composition, temperature, and condition of fluid whey entering final storage and dispatch.

- Selected flow: Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into final storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_whey_batch_mass_and_composition`
- Data source: Calibrated tank, load-cell, transfer, laboratory, stock, and dispatch records governed by `cp_whey_batch_mass_and_composition`.
- UUID status: Verified existing reference flow (`verified_reference`).
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Required (`required`). Required; the input may come directly from recovery when conditioning is not included.
- Sources: `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

###### Electricity for storage, refrigeration, transfer, and loading (`storage_electricity`)

Record stage-specific electricity for tank agitation, refrigeration, transfer, and loading.

- Selected flow: Electricity supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented equipment allocation for storage and dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Required (`required`). Required for storage and dispatch; report an evidenced zero only when these operations consume no electricity.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### R717 ammonia refrigerant make-up (`storage_ammonia_refrigerant_input`)

Record anhydrous ammonia added to an R717 refrigeration circuit serving included whey storage or cooling.

- Selected flow: Ammonia, anhydrous, refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: measured refrigerant purchase or inventory balance assigned once to the included refrigeration system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on actual R717 use; any other refrigerant must be represented by its own chemical-specific input card before dataset validation.
- Sources: `eu-2019-2031-fdm-bat`

###### Low-density polyethylene packaging film (`packaging_ldpe_film_input`)

Record low-density polyethylene packaging film crossing the declared product gate without combining it with another packaging material.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or issue quantity converted with measured or supplier-documented item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging material crossing the gate; use an evidenced `not_applicable` result for bulk dispatch and add any other material as its own card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### High-density polyethylene packaging container (`packaging_hdpe_container_input`)

Record high-density polyethylene packaging container crossing the declared product gate without combining it with another packaging material.

- Selected flow: High-density polyethylene packaging container
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or issue quantity converted with measured or supplier-documented item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging material crossing the gate; use an evidenced `not_applicable` result for bulk dispatch and add any other material as its own card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Paper packaging label (`packaging_paper_label_input`)

Record paper packaging label crossing the declared product gate without combining it with another packaging material.

- Selected flow: Paper packaging label
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or issue quantity converted with measured or supplier-documented item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging material crossing the gate; use an evidenced `not_applicable` result for bulk dispatch and add any other material as its own card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Corrugated fibreboard packaging (`packaging_corrugated_fibreboard_input`)

Record corrugated fibreboard packaging crossing the declared product gate without combining it with another packaging material.

- Selected flow: Corrugated fibreboard packaging
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or issue quantity converted with measured or supplier-documented item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging material crossing the gate; use an evidenced `not_applicable` result for bulk dispatch and add any other material as its own card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Steel packaging container (`packaging_steel_container_input`)

Record steel packaging container crossing the declared product gate without combining it with another packaging material.

- Selected flow: Steel packaging container
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or issue quantity converted with measured or supplier-documented item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging material crossing the gate; use an evidenced `not_applicable` result for bulk dispatch and add any other material as its own card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Aluminium packaging container (`packaging_aluminium_container_input`)

Record aluminium packaging container crossing the declared product gate without combining it with another packaging material.

- Selected flow: Aluminium packaging container
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or issue quantity converted with measured or supplier-documented item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging material crossing the gate; use an evidenced `not_applicable` result for bulk dispatch and add any other material as its own card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming fluid whey at the plant gate (`whey_reference_product`)

This is the reference product; record dispatched wet mass and every required qualifier for the declared fluid whey.

- Selected flow: Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg conforming wet product at the declared plant gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Data source: PCR reference-flow definition and conforming dispatch record.
- UUID status: Verified existing reference flow (`verified_reference`).
- Uncertainty: The reference amount is fixed; disclose uncertainty in wet-mass measurement and product qualification separately.
- Applicability: Required (`required`). Required and fixed as the PCR quantitative reference.
- Sources: `codex-cxs-289-1995-whey-powders`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Waste whey from storage and dispatch (`storage_whey_loss`)

Record off-specification product, tank heel, samples, spillage, or expired fluid whey sent to one documented waste destination.

- Selected flow: Waste whey from storage and dispatch
- Flow property / unit: Mass / kg
- Amount rule: measured loss or reconciled storage-and-dispatch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on a physical waste-whey stream; do not combine it with packaging waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Low-density polyethylene packaging-film scrap (`packaging_ldpe_film_waste`)

Record low-density polyethylene packaging film scrap generated before dispatch as one material-specific waste stream.

- Selected flow: Low-density polyethylene packaging film scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap or rejected-item mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging waste; do not record packaging that leaves with conforming product as plant waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Rejected high-density polyethylene packaging containers (`packaging_hdpe_container_waste`)

Record rejected high-density polyethylene packaging containers generated before dispatch as one material-specific waste stream.

- Selected flow: Rejected high-density polyethylene packaging containers
- Flow property / unit: Mass / kg
- Amount rule: measured scrap or rejected-item mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging waste; do not record packaging that leaves with conforming product as plant waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Paper-label scrap (`packaging_paper_label_waste`)

Record paper packaging label scrap generated before dispatch as one material-specific waste stream.

- Selected flow: Paper packaging label scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap or rejected-item mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging waste; do not record packaging that leaves with conforming product as plant waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Corrugated fibreboard packaging scrap (`packaging_corrugated_fibreboard_waste`)

Record corrugated fibreboard packaging scrap generated before dispatch as one material-specific waste stream.

- Selected flow: Corrugated fibreboard packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap or rejected-item mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging waste; do not record packaging that leaves with conforming product as plant waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Rejected steel packaging containers (`packaging_steel_container_waste`)

Record rejected steel packaging containers generated before dispatch as one material-specific waste stream.

- Selected flow: Rejected steel packaging containers
- Flow property / unit: Mass / kg
- Amount rule: measured scrap or rejected-item mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging waste; do not record packaging that leaves with conforming product as plant waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Rejected aluminium packaging containers (`packaging_aluminium_container_waste`)

Record rejected aluminium packaging containers generated before dispatch as one material-specific waste stream.

- Selected flow: Rejected aluminium packaging containers
- Flow property / unit: Mass / kg
- Amount rule: measured scrap or rejected-item mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Data source: Packaging bill-of-materials, issue, item-mass, count, scrap, and dispatch records governed by `cp_packaging_and_dispatch`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on this exact packaging waste; do not record packaging that leaves with conforming product as plant waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### R717 ammonia refrigerant released to air (`storage_ammonia_refrigerant_to_air`)

Record ammonia released from an R717 refrigeration circuit serving included whey storage or cooling.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: measured leak or refrigerant inventory-balance loss assigned once to the included refrigeration system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on actual R717 use and a documented release; do not use this card for another refrigerant species.
- Sources: `eu-2019-2031-fdm-bat`

### Process: On-site effluent management (`onsite_effluent_management`)

#### Inputs

##### Product flows

###### Electricity for on-site whey-effluent treatment (`effluent_treatment_electricity`)

Record electricity attributable to equalisation, pumping, aeration, separation, digestion, or final treatment of whey-line effluent.

- Selected flow: Electricity supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: metered treatment electricity or documented allocation based on whey-line hydraulic or pollutant load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Data source: Dedicated meter records are preferred; otherwise use reconciled invoice and equipment-allocation records governed by `cp_energy_and_utilities`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on on-site treatment; specific treatment chemicals, when used, require separate chemical-specific cards rather than this electricity card.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Whey-line wastewater entering on-site treatment (`whey_wastewater_input`)

Record the physical wastewater transfer from the conditioning boundary to on-site treatment once, with hydraulic load and composition.

- Selected flow: Dairy processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or volume converted using documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on on-site treatment; link this input to `conditioning_wastewater` without double-counting it in the system total.
- Sources: `eu-2019-2031-fdm-bat`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered biogas from anaerobic treatment (`effluent_recovered_biogas`)

Record biogas as a product only when anaerobic treatment produces a measured stream with documented use.

- Selected flow: Recovered biogas
- Flow property / unit: Energy / MJ
- Amount rule: measured recovered quantity transferred to its documented use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on this physically separate recovered output; do not combine it with another treatment product or waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Recovered water from whey-effluent treatment (`effluent_recovered_water`)

Record recovered water as a product only when its quantity, quality, reuse, and destination are documented.

- Selected flow: Recovered water
- Flow property / unit: Mass / kg
- Amount rule: measured recovered quantity transferred to its documented use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on this physically separate recovered output; do not combine it with another treatment product or waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### Recovered struvite from phosphorus recovery (`effluent_recovered_struvite`)

Record struvite only when phosphorus recovery produces a physically separate output with documented quality and use.

- Selected flow: Recovered struvite
- Flow property / unit: Mass / kg
- Amount rule: measured recovered quantity transferred to its documented use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on this physically separate recovered output; do not combine it with another treatment product or waste.
- Sources: `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Wastewater-treatment sludge (`effluent_treatment_sludge`)

Record wastewater-treatment sludge as a distinct wet and, where material, dry-mass stream.

- Selected flow: Wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass or volume converted with documented density; retain dry mass when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste output and its documented destination; do not merge it with another residue or discharge.
- Sources: `eu-2019-2031-fdm-bat`

###### Digestate from anaerobic whey-effluent treatment (`effluent_anaerobic_digestate`)

Record digestate from anaerobic treatment separately from aerobic sludge and screenings.

- Selected flow: Anaerobic treatment digestate
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass or volume converted with documented density; retain dry mass when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste output and its documented destination; do not merge it with another residue or discharge.
- Sources: `eu-2019-2031-fdm-bat`

###### Screenings from whey-effluent treatment (`effluent_screenings`)

Record gross solids physically removed by screens or sieves as one separate waste stream.

- Selected flow: Wastewater treatment screenings
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass or volume converted with documented density; retain dry mass when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste output and its documented destination; do not merge it with another residue or discharge.
- Sources: `eu-2019-2031-fdm-bat`

###### Treated whey wastewater transferred to sewer (`effluent_treated_wastewater_to_sewer`)

Record treated wastewater transferred to a sewer or off-site treatment system as a waste flow rather than a direct elementary release.

- Selected flow: Treated dairy wastewater to sewer
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass or volume converted with documented density; retain dry mass when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; disclose meter, scale, sampling, allocation, and temporal-coverage uncertainty from foreground records.
- Applicability: Conditional (`conditional`). Conditional on this distinct waste output and its documented destination; do not merge it with another residue or discharge.
- Sources: `eu-2019-2031-fdm-bat`

##### Elementary flows

###### Water discharged to surface water (`effluent_water_to_surface_water`)

Record the treated water mass directly discharged to a receiving surface water body.

- Selected flow: Water to surface water
- Flow property / unit: Mass / kg
- Amount rule: final-effluent volume converted to mass using documented density and normalized to reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on direct discharge to surface water and representative monitoring; do not use this card for an indirect sewer transfer.
- Sources: `eu-2019-2031-fdm-bat`

###### Chemical oxygen demand discharged to surface water (`effluent_chemical_oxygen_demand_to_water`)

Calculate chemical oxygen demand as one monitored water-emission parameter from final-effluent flow and representative COD concentration.

- Selected flow: Chemical oxygen demand to surface water
- Flow property / unit: Mass / kg
- Amount rule: final-effluent volume multiplied by representative COD concentration with documented unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on direct discharge to surface water and representative monitoring; do not use this card for an indirect sewer transfer.
- Sources: `eu-2019-2031-fdm-bat`

###### Total nitrogen discharged to surface water (`effluent_total_nitrogen_to_water`)

Calculate total nitrogen as one monitored water-emission parameter from final-effluent flow and representative TN concentration.

- Selected flow: Total nitrogen to surface water
- Flow property / unit: Mass / kg
- Amount rule: final-effluent volume multiplied by representative TN concentration with documented unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on direct discharge to surface water and representative monitoring; do not use this card for an indirect sewer transfer.
- Sources: `eu-2019-2031-fdm-bat`

###### Total phosphorus discharged to surface water (`effluent_total_phosphorus_to_water`)

Calculate total phosphorus as one monitored water-emission parameter from final-effluent flow and representative TP concentration.

- Selected flow: Total phosphorus to surface water
- Flow property / unit: Mass / kg
- Amount rule: final-effluent volume multiplied by representative TP concentration with documented unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on direct discharge to surface water and representative monitoring; do not use this card for an indirect sewer transfer.
- Sources: `eu-2019-2031-fdm-bat`

###### Total suspended solids discharged to surface water (`effluent_total_suspended_solids_to_water`)

Calculate total suspended solids as one monitored water-emission parameter from final-effluent flow and representative TSS concentration.

- Selected flow: Total suspended solids to surface water
- Flow property / unit: Mass / kg
- Amount rule: final-effluent volume multiplied by representative TSS concentration with documented unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming fluid whey dispatched at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_and_emissions`
- Data source: Calibrated scale or flow-meter, sampling, laboratory, transfer-manifest, incident, and treatment records governed by `cp_waste_effluent_and_emissions`.
- UUID status: Unresolved (`unresolved`); UUID remains blank until exact flow-hybrid-search and state=100 direct-read verification.
- Uncertainty: No PCR default or numeric range; propagate foreground measurement, allocation, conversion-factor, and mass-balance uncertainty.
- Applicability: Conditional (`conditional`). Conditional on direct discharge to surface water and representative monitoring; do not use this card for an indirect sewer transfer.
- Sources: `eu-2019-2031-fdm-bat`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | separately measurable whey recovery, conditioning, storage, cleaning, and treatment operations | Avoid allocation by subdividing metered processes and assigning directly attributable inputs, emissions, and wastes to whey operations. | `eu-2021-2279-environmental-footprint` |
| `allocation_system_expansion` | explicitly expanded product systems | Use system expansion only when the additional co-product function and substituted product are explicitly modelled and empirically justified; report the expanded-system result rather than silently crediting whey. | `eu-2021-2279-environmental-footprint` |
| `allocation_physical_relation` | inseparable shared dairy or treatment operations | When subdivision or justified system expansion is not possible, use a documented causal physical relationship relevant to the functions of whey and the other outputs; wet mass alone is not sufficient unless its functional relevance is demonstrated. | `eu-2021-2279-environmental-footprint` |
| `allocation_other_relation` | multifunctional operations lacking a defensible physical relation | Use another documented relationship, such as route-specific economic value at the co-product production stage, only after explaining why subdivision, system expansion, and physical allocation were rejected; disclose prices, period, geography, factors, and sensitivity. | `eu-2021-2279-environmental-footprint` |
| `allocation_upstream_whey` | shared coagulation, curd separation, and upstream dairy operations | Do not assign zero upstream burden to marketable whey by default. Link the reviewed upstream dataset and disclose whether whey entered as co-product, product, or waste under the actual route and destination. | `eu-2021-2279-environmental-footprint`; `eu-2019-2031-fdm-bat` |
| `allocation_recovered_outputs` | recovered cream, solids, biogas, reusable water, and other outputs | Classify an output as a co-product only when quantity, quality, further use, and destination are documented; otherwise record it as waste or an emission according to the actual handling route. | `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_whey_batch_mass_and_composition` | whey_receipt_and_recovery; liquid_whey_conditioning; storage_and_dispatch | whey feedstock, intermediates, product, co-products, and losses | batch, tank, laboratory, and dispatch records | batch/lot id; source process; species; sweet/acid status; timestamp; wet mass; total solids; protein/fat/lactose/ash when available; pH or acidity; temperature; treatment state; destination | calibrated tank, load cell, flow meter, weighbridge, and representative laboratory sampling | kg and declared composition units | each batch, transfer, or dispatch lot | representative continuous 12-month period or complete declared campaign | all included whey lines, tanks, and dispatch points | reconcile opening stock + inputs = outputs + closing stock + losses, then normalize conforming dispatch mass to 1 kg | calibration, sample chain of custody, laboratory method, batch reconciliation, and signed release record |
| `cp_energy_and_utilities` | whey_receipt_and_recovery; liquid_whey_conditioning; storage_and_dispatch | electricity, fuel, steam, heat, refrigeration, and other utilities | meter, invoice, and operating-hour records | meter id; start/end reading; fuel quantity; steam pressure/temperature or enthalpy; equipment hours/load; allocation driver; production mass | dedicated meter preferred; otherwise documented engineering allocation reconciled to facility totals | kWh, MJ, kg fuel, kg steam, or source unit | continuous or each billing period | same period as product output | all included whey equipment and shared utility systems | subtract unrelated loads, allocate documented shared loads, convert with recorded factors, and divide by conforming product kg | meter calibration, invoices, operating logs, conversion factors, and allocation reconciliation |
| `cp_cleaning_water_and_materials` | liquid_whey_conditioning; storage_and_dispatch | process water, CIP water, cleaning and disinfection products | water meter, CIP recipe, dosing, and purchase/issue records | CIP cycle id; water volume; rinse endpoint; chemical product and active concentration; dose; temperature; line/tank; recovered or discharged quantity | submeter and dosing controller preferred; otherwise validated tank volume and recipe record | kg or m3 water; kg product; active concentration | each cleaning cycle or daily | same period as product output | all included lines, tanks, and loading systems | assign cycles to equipment and product route, reconcile purchases, and normalize to conforming product kg | meter calibration, dosing calibration, CIP logs, conductivity/pH/turbidity endpoint, and purchase reconciliation |
| `cp_packaging_and_dispatch` | storage_and_dispatch | packaging and dispatched whey | bill of materials, packaging issue, count, loading, and dispatch records | packaging item/material; item mass; count; tare; gross/net product mass; bulk/packaged state; destination; lot id | calibrated scale, item-count reconciliation, and dispatch documentation | kg | each dispatch lot | same period as product output | all included dispatch modes | convert counts to mass, exclude reusable assets unless loss/replacement is attributable, and normalize to dispatched product kg | scale calibration, supplier specification, issue reconciliation, and dispatch record |
| `cp_waste_effluent_and_emissions` | whey_receipt_and_recovery; liquid_whey_conditioning; storage_and_dispatch; onsite_effluent_management | product loss, residues, wastewater, sludge, direct releases, and treatment outputs | waste transfer, flow-meter, sampling, laboratory, incident, and treatment records | stream id; source process; wet/dry mass; wastewater volume; sample time; concentration; destination; treatment route; recovery output; incident loss | calibrated scales/meters and representative sampling under documented analytical methods | kg, m3, mg/L, or pollutant-specific unit | each transfer and representative sampling event | same period as product output, covering operating and cleaning periods | all included lines and on-site treatment | calculate pollutant mass from flow and concentration, reconcile whey losses with batch balance, and normalize to conforming product kg | calibration, sampling plan, laboratory accreditation or QA, manifests, treatment logs, and mass reconciliation |
| `cp_coproduct_and_allocation` | liquid_whey_conditioning; onsite_effluent_management; shared upstream dairy operations | co-product identity and allocation | production, composition, sales, transfer, and allocation records | output id; amount; composition/function; destination; price and currency where used; price period/geography; physical relation; subdivision evidence; allocation factor; factor sum | collect process-specific records and document the allocation hierarchy decision | kg, composition units, currency/kg, or physical driver | each allocation period and material route change | same period as shared inventory and outputs | all multifunctional operations linked to the whey dataset | assign direct flows first, calculate reviewed factors for residual shared burdens, and require factors to sum to one within rounding tolerance | signed methodology decision, source records, price or physical-driver evidence, sensitivity result, and factor-sum check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_mass` | all inventory rows | normalized amount = reporting-period amount / conforming dispatched wet whey kg | dispatched wet whey mass; row amount | amount per 1 kg reference whey |  |
| `close_whey_mass_balance` | recovery, conditioning, and storage | opening stock + wet whey inputs + incorporated materials = conforming whey + co-products + wastes/losses + closing stock; investigate unexplained difference and retain solids balance for concentrated routes | batch masses; stocks; solids; co-products; wastes | wet-mass and solids-balance closure | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `calculate_concentration_factor` | concentrated liquid whey | concentration factor = feed wet mass / concentrate wet mass, cross-checked by feed and product solids mass after recorded losses | feed/product wet mass and solids fraction | concentration factor and removed-water balance |  |
| `calculate_utility_intensity` | energy and water | sum route-attributable metered use plus documented shared allocation, convert to the declared unit, and divide by conforming product kg | utility records; allocation driver; product mass | kWh, MJ, kg, or m3 per kg reference whey |  |
| `calculate_pollutant_release` | direct releases to water | pollutant kg = final-effluent volume x representative concentration x unit-conversion factor; use flow-weighted aggregation when multiple samples exist | flow meter; laboratory result; sampling coverage | pollutant kg per kg reference whey | `eu-2019-2031-fdm-bat` |
| `apply_allocation_hierarchy` | shared multifunctional operations | assign direct flows by subdivision; otherwise apply reviewed system expansion or a causal physical relation; use another relation only with documented rejection of prior steps and sensitivity | direct measurements; functions; physical driver; market values; output amounts | allocated shared inventory and factor set | `eu-2021-2279-environmental-footprint` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference whey and feedstock | Preserve source process, species, sweet/acid status, composition basis, treatment state, temperature, concentration, and bulk/packaged state for every included product lot. | batch specification, laboratory results, and dispatch record |
| `dq_mass_and_stock` | all material flows | Use calibrated mass or volume measurements, document density conversions, and reconcile stock, transfers, co-products, losses, and product at batch or reporting-period level. | calibration, inventory, batch, and reconciliation records |
| `dq_composition` | whey, co-products, and concentrated routes | Use representative samples and documented methods for total solids or dry matter, pH or acidity, and material composition fields used in identity, mass balance, or allocation. | sampling plan, chain of custody, method, laboratory QA, and results |
| `dq_temporal_coverage` | foreground activity | Use a representative continuous 12-month period or a complete declared campaign and include cleaning, start-up, shutdown, rejects, and abnormal events; justify exclusions. | production calendar, meter coverage, batch list, and incident log |
| `dq_completeness` | process map and inventory | Cover every required process and every conditional process that occurred; include utilities, cleaning, packaging, product losses, wastewater, direct emissions, and off-site treatment links when material. | process-flow diagram, inclusion checklist, ledger reconciliation, and linked datasets |
| `dq_allocation` | shared dairy and treatment operations | Retain direct-assignment evidence, hierarchy decision, driver data, allocation factors summing to one, and sensitivity where another relation such as economic value is used. | allocation workbook, source data, approval record, and sensitivity analysis |
| `dq_uuid_and_source_traceability` | database identities and external rules | Use reviewed Tiangong UUIDs without dataset versions and retain stable external source ids for non-default boundary, allocation, process, and validation rules. | identity readback record, source register, and PCR conformance review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | reference product | Require the Whey UUID, Product flow type, CPC 3.0 code `22130`, sweet/acid and source-process identity, wet-product state, composition basis, treatment, temperature, geography, and plant gate; reject powder and derived-ingredient products. | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `validate_reference_support` | quantitative reference | Require 1 kg wet whey, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and reference unit kg. |  |
| `validate_process_coverage` | foreground process map | Require recovery/receipt and storage/dispatch; require conditioning and on-site effluent management when those operations occurred; prohibit silent inclusion of drying or downstream powder manufacture. | `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese` |
| `validate_mass_and_solids_balance` | whey feedstock, product, co-products, stocks, and losses | Require wet-mass closure and, for concentrated routes, solids closure; investigate unexplained differences and prohibit double-counting the same whey as product and wastewater. | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `validate_acid_whey_timing` | acid whey route | Require separation-to-conditioning time, holding conditions, and acidity or pH records sufficient to identify material change during storage. | `eu-2019-2031-fdm-bat` |
| `validate_utilities_and_cleaning` | electricity, steam, hot water, natural gas, diesel, LPG, water, refrigerants, and cleaning substances | Require source records, unit conversions, allocation of shared services, temporal alignment, and cleaning-cycle coverage for each separately named exchange; no PCR default or numeric range substitutes for foreground data. | `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint` |
| `validate_atomic_inventory_flows` | all foreground exchanges | Require one card per actual stage-specific electricity exchange, thermal carrier, fuel, refrigerant species, water supply, processing aid, cleaning or disinfection substance, packaging material, product, co-product, waste stream, and elementary emission; reject collection labels and require a new specific card for any actual exchange not enumerated here. | `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint` |
| `validate_allocation` | multifunctional processes | Require the allocation hierarchy decision, direct assignments, selected driver, factors summing to one, source period/geography, and sensitivity where an economic or other fallback relation is used; reject undocumented zero-burden whey. | `eu-2021-2279-environmental-footprint` |
| `validate_wastewater_and_emissions` | wastes and direct releases | Require stream amount, destination, treatment link, representative sampling, calculation method, and exact elementary-flow identity before publication; do not accept pollutant concentrations without corresponding flow. | `eu-2019-2031-fdm-bat` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process foreground dataset for fluid whey recovery, conditioning, storage, and dispatch |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | fluid whey datasets with matching sweet/acid status, source dairy process and species, solids/composition basis, treatment and concentration state, temperature, packaging form, geography, time period, plant gate, and allocation method |
| excluded_use | whey or acid whey powder; dry whey ingredients; whey protein concentrate or isolate sold dry; lactose; whey permeate powder; whey cheese; formulated beverages; routes with incompatible product state or undisclosed upstream allocation |
| required_metadata | reference flow and UUIDs; CPC reference; source dairy process and species; sweet/acid status; wet mass and composition basis; pH/acidity; treatment and concentration state; temperature; bulk/packaged state; included processes; geography; period; allocation method; linked upstream and treatment datasets |
| required_quality_disclosure | meter and laboratory coverage; mass and solids balance; cleaning/start-up/shutdown coverage; allocation factors and sensitivity; unresolved quantitative evidence for range-free important flows; unresolved non-reference UUIDs; atomic waste and emission completeness; data quality assessment |
| update_trigger | material change in source dairy route, product identity, composition or concentration, processing technology, energy or water system, cleaning regime, allocation method or prices, treatment route, regulation, source evidence, geography, or data age |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-289-1995-whey-powders` | standard | Codex Alimentarius, CXS 289-1995, Standard for Whey Powders, https://www.fao.org/input/download/standards/184/CXS_289e.pdf (retrieved 2026-08-10) | authoritative definition of whey and acid whey as fluid milk products separated from curd; distinction between fluid whey and powders |
| `fao-2013-milk-dairy-human-nutrition` | official_guidance | Food and Agriculture Organization of the United Nations, Milk and dairy products in human nutrition, 2013, https://www.fao.org/4/i3396e/i3396e.pdf (retrieved 2026-08-10) | sweet/acid whey identity, source routes, uses, and product-category exclusions |
| `eu-2019-2031-fdm-bat` | standard | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-10) | prompt acid-whey processing, whey recovery routes, cleaning-in-place, water/material and energy management, low-GWP refrigerant options, wastewater monitoring parameters, and conditional treatment and recovery operations |
| `us-epa-ap42-9-6-1-cheese` | official_guidance | United States Environmental Protection Agency, AP-42 Section 9.6.1 Natural and Processed Cheese, Supplement C, August 1997, https://www.epa.gov/sites/default/files/2020-10/documents/c9s06-1.pdf (retrieved 2026-08-10) | whey separation and handling process decomposition and boundary between cheese manufacture, whey recovery, and drying |
| `eu-2021-2279-environmental-footprint` | standard | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-10) | complete foreground inventory of raw materials, energy, products, wastes, and emissions, plus multifunctionality hierarchy, subdivision, system expansion, physical allocation, and documented fallback relationships |
