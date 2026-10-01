---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coal-gas-water-gas-producer-gas-and-similar-gases-other-than-petroleum-gases-and-other-71d75228
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Coal gas, water gas, producer gas and similar gases, other than petroleum gases and other gaseous hydrocarbons

## 1. Scope and Applicability

This PCR covers manufacture or recovery of one origin-qualified coal, water or producer gas at a measured delivery gate, excluding petroleum gas and natural gas. Distinguish air/oxygen/steam gasification, coal carbonisation and industrial recovered gases. For a coke-oven, distribution-gasworks or recovered steel-gas dataset, the corresponding narrower PCR supplies origin-specific upstream burden and treatment rules; do not create an additional gasification inventory for those origins. The gasification block here applies only to actual solid-feed gasification. Purification, storage and compression occur only where physically performed. A gas burned on site without a measured exported fuel transfer is a fuel input to heat/power production rather than a gas-product supply. `netl-gasification-2002`, `un-energy-2024`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coal-gas-water-gas-producer-gas-and-similar-gases-other-than-petroleum-gases-and-other-71d75228 |
| classification_refs | CPC 3.0:17200 |
| covered_products | One identified non-petroleum manufactured or recovered fuel gas |
| excluded_products | Natural gas; refinery gas; petroleum hydrocarbon gases; standalone hydrogen; unmetered heat-only production |
| representative_product | Manufactured fuel gas at the declared gate |
| production_route | Solid-feed gasification; Parent-process raw-gas recovery; Gas cleaning and conditioning; Metered storage and delivery |
| market_state | Dry gas at a declared origin, composition, pressure and metered gate |

### Subtype methodology selection

| Origin | Applicable PCR |
| --- | --- |
| Coke-oven origin | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coke-oven-gas` |
| Distribution gas-works origin | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.gas-works-gas-and-other-manufactured-gases-for-distribution` |
| Recovered industrial gas origin | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.recovered-gases` |

Apply the relevant subtype to its actual origin; preserve its parent-process and provider boundary. A subtype reference does not add a second gasifier, a second parent burden or an avoided-fuel credit. Other solid-feed gasification uses the conditional gasification block and actual feed identity below.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply origin- and composition-qualified fuel gas as a material/energy carrier |
| How much | 1 kg |
| How well | site/year; origin and subtype; feedstock; gasifying agent; dry/wet basis; gas composition; pressure and temperature; density; net calorific value; parent burden allocation; cleaning technology; gate; own-use and losses; compressibility and gas-volume reference conditions; fossil/biogenic carbon share; applicable subtype PCR |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Manufactured fuel gas at the declared gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; origin and subtype; feedstock; gasifying agent; dry/wet basis; gas composition; pressure and temperature; density; net calorific value; parent burden allocation; cleaning technology; gate; own-use and losses; compressibility and gas-volume reference conditions; fossil/biogenic carbon share; applicable subtype PCR |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | Close dry gas mass and carbon balances using measured feed carbon, product composition, tar/char carbon, combustion and emissions. Record moisture/steam separately. Gas mass equals corrected volume times measured composition-dependent density at the same reference conditions. A producer-gas heating value or density cannot substitute for water gas, coke-oven gas or recovered gas. Cancel internal recycled gas and cooling-water loops. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased solid feed for gasification, or burden-bearing raw gas from a separately characterized carbonisation or industrial parent process |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | One identified non-petroleum manufactured or recovered fuel gas |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; origin and subtype; feedstock; gasifying agent; dry/wet basis; gas composition; pressure and temperature; density; net calorific value; parent burden allocation; cleaning technology; gate; own-use and losses; compressibility and gas-volume reference conditions; fossil/biogenic carbon share; applicable subtype PCR |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | This PCR covers manufacture or recovery of one origin-qualified coal, water or producer gas at a measured delivery gate, excluding petroleum gas and natural gas. Distinguish air/oxygen/steam gasification, coal carbonisation and industrial recovered gases. For a coke-oven, distribution-gasworks or recovered steel-gas dataset, the corresponding narrower PCR supplies origin-specific upstream burden and treatment rules; do not create an additional gasification inventory for those origins. The gasification block here applies only to actual solid-feed gasification. Purification, storage and compression occur only where physically performed. A gas burned on site without a measured exported fuel transfer is a fuel input to heat/power production rather than a gas-product supply. | `netl-gasification-2002`, `un-energy-2024` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| gasification | Solid-feed gasification | conditional | Air/oxygen/steam gasification route | Foreground production | per 1 kg reference flow |
| recovery | Parent-process raw-gas recovery | conditional | Carbonisation or industrial by-product gas route; apply subtype PCR | Foreground production | per 1 kg reference flow |
| cleanup | Gas cleaning and conditioning | conditional | Cleaning actually performed | Foreground production | per 1 kg reference flow |
| delivery | Metered storage and delivery | required | All declared sites | Foreground production | per 1 kg reference flow |

### Process: Solid-feed gasification (`gasification`)

#### Inputs

##### Product flows

###### Bituminous-coal gasification feed (`coal_feed`)

Only actual bituminous-coal feed; measure moisture, ash and carbon. Each other solid feed requires its own atomic card and matching route evidence.

- Selected flow: Bituminite `f10e7264-fc49-491a-a886-f717e3c7a437`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_coal_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coal_feed`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Gasification oxygen (`oxygen_feed`)

Only purchased oxygen for the actual oxygen-blown route; record purity and supplier state. On-site ASU inputs and allocated electricity replace the purchased-oxygen provider without duplicate burdens.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_oxygen_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oxygen_feed`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Gasification steam (`steam_feed`)

Only purchased steam; record actual pressure, temperature and phase quality; on-site generation uses actual fuel/water inventories.

- Selected flow: Gasification steam
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steam_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam_feed`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Gasification electricity (`gasifier_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Feed preparation, blowers and gasifier auxiliaries; allocate shared meters once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_gasifier_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gasifier_power`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Coke feed for water-gas production (`coke_feed`)

Only actual coke/steam route; record supplier, carbon and ash. Do not count both coke and its supplier coal at this boundary.

- Selected flow: Coke feed for water-gas production
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_coke_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coke_feed`
- Sources: `netl-gasification-2002`, `un-energy-2024`

##### Elementary flows

###### Ambient gasification air (`gasifier_air`)

Only an air-blown gasifier; measure intake and nitrogen balance; manufactured oxygen is separate.

- Selected flow: air `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gasifier_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gasifier_air`
- Sources: `netl-gasification-2002`, `un-energy-2024`

#### Outputs

##### Waste flows

###### Gasifier ash (`gasifier_ash`)

Only discarded ash; record dry mass, carbon, leachability and treatment. Slag requires its own state-specific row.

- Selected flow: Gasifier ash
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gasifier_ash; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gasifier_ash`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Gasifier slag transferred for management (`gasifier_slag`)

Only actual slagging gasifier; distinguish ash/char, dry solids, residual carbon and final fate.

- Selected flow: Gasifier slag transferred for management
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gasifier_slag; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gasifier_slag`
- Sources: `netl-gasification-2002`, `un-energy-2024`

### Process: Parent-process raw-gas recovery (`recovery`)

#### Inputs

##### Product flows

###### Raw industrial fuel gas (`parent_raw_gas`)

Only actual recovered-gas route; specify parent process and subtype, contaminants and allocated upstream provider.

- Selected flow: Raw industrial fuel gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_parent_raw_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parent_raw_gas`
- Sources: `netl-gasification-2002`, `un-energy-2024`

### Process: Gas cleaning and conditioning (`cleanup`)

#### Inputs

##### Product flows

###### Gas-scrubber process water (`scrubber_water`)

Purchased fresh make-up only; circulating water is not repeated supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_scrubber_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_scrubber_water`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Gas-cleaning electricity (`cleanup_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual particulate removal, acid-gas cleaning and circulation.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_cleanup_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleanup_power`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Methyldiethanolamine solvent make-up (`mdea_makeup`)

Only an actual MDEA system; circulating solvent is internal. Each other solvent requires its own identity and active concentration.

- Selected flow: Methyldiethanolamine solvent make-up
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mdea_makeup; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mdea_makeup`
- Sources: `netl-gasification-2002`, `un-energy-2024`

#### Outputs

##### Waste flows

###### Gas-cleaning tar residue (`tar_residue`)

Only discarded tar residue; saleable recovered tar needs its own product row and allocation.

- Selected flow: Gas-cleaning tar residue
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tar_residue; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tar_residue`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Gas-scrubber effluent transferred for treatment (`scrubber_effluent`)

Only external treatment transfer; final species/receiving-water discharges are separate rows.

- Selected flow: Gas-scrubber effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_scrubber_effluent; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_scrubber_effluent`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Spent methyldiethanolamine solvent (`spent_mdea`)

Only actual solvent purges transferred for treatment; record water/acid-gas content and fate.

- Selected flow: Spent methyldiethanolamine solvent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_spent_mdea; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_mdea`
- Sources: `netl-gasification-2002`, `un-energy-2024`

##### Elementary flows

###### Fossil carbon dioxide to outdoor air (`co2_air`)

Only measured direct fossil CO2 from removed acid gas and on-site combustion; exclude captured gas and supplier emissions from this direct release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `netl-gasification-2002`, `un-energy-2024`

### Process: Metered storage and delivery (`delivery`)

#### Inputs

##### Product flows

###### Gas-delivery electricity (`delivery_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual gas-holder and compression meters, excluding upstream cleaning duplication.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_power`
- Sources: `netl-gasification-2002`, `un-energy-2024`

#### Outputs

##### Product flows

###### Manufactured fuel gas at the declared gate (`final_product`)

One identified origin and dry gas composition; reference represents supply, not combustion heat.

- Selected flow: Manufactured fuel gas at the declared gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `netl-gasification-2002`, `un-energy-2024`

##### Elementary flows

###### Fossil carbon monoxide to outdoor air (`carbon_monoxide_air`)

Only unrecovered fossil carbon monoxide from measured leaks, vents or actual on-site combustion; biogenic CO requires a distinct compatible identity.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_carbon_monoxide_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon_monoxide_air`
- Sources: `netl-gasification-2002`, `un-energy-2024`

###### Fossil methane to outdoor air (`methane_air`)

Only actual unrecovered fossil methane; measure composition and leakage. Do not represent mixed gas as methane.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_methane_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_methane_air`
- Sources: `netl-gasification-2002`, `un-energy-2024`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Retain the actual parent-process burden on recovered gas; it is not burden-free because it is a by-product. Subdivide gasification and exported heat or power first, then allocate unavoidable joint products using demonstrated causality. Do not claim both avoided fuel and allocated co-product credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coal_feed | gasification | `coal_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gasifier_air | gasification | `gasifier_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_oxygen_feed | gasification | `oxygen_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steam_feed | gasification | `steam_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gasifier_power | gasification | `gasifier_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gasifier_ash | gasification | `gasifier_ash` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_parent_raw_gas | recovery | `parent_raw_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure calibrated net gas mass or matched-condition volume with measured composition, temperature, absolute pressure and compressibility; retain dry/wet basis and calorific-value assay. Reconcile stocks, own use and recycling. cp_output independently records positive accepted gas mass D, excluding burned or flared gas. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_scrubber_water | cleanup | `scrubber_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_cleanup_power | cleanup | `cleanup_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tar_residue | cleanup | `tar_residue` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_scrubber_effluent | cleanup | `scrubber_effluent` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_power | delivery | `delivery_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_carbon_monoxide_air | delivery | `carbon_monoxide_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate calibrated gas flow and measured species concentration over operating duration, with temperature/pressure and compartment. If modelling is necessary, retain source-specific measured activity, carbon/species balance, factor provenance and uncertainty. No generic factor assumed. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | delivery | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure calibrated net gas mass or matched-condition volume with measured composition, temperature, absolute pressure and compressibility; retain dry/wet basis and calorific-value assay. Reconcile stocks, own use and recycling. cp_output independently records positive accepted gas mass D, excluding burned or flared gas. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_coke_feed | gasification | `coke_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gasifier_slag | gasification | `gasifier_slag` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mdea_makeup | cleanup | `mdea_makeup` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_spent_mdea | cleanup | `spent_mdea` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | cleanup | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate calibrated gas flow and measured species concentration over matched time, temperature and pressure. If metering is unavailable, retain measured source activity, traceable factor, carbon/species balance and uncertainty; no universal factor or conversion efficiency. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_methane_air | delivery | `methane_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate calibrated gas flow and measured species concentration over matched time, temperature and pressure. If metering is unavailable, retain measured source activity, traceable factor, carbon/species balance and uncertainty; no universal factor or conversion efficiency. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Dry gas at a declared origin, composition, pressure and metered gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | Close dry gas mass and carbon balances using measured feed carbon, product composition, tar/char carbon, combustion and emissions. Record moisture/steam separately. Gas mass equals corrected volume times measured composition-dependent density at the same reference conditions. A producer-gas heating value or density cannot substitute for water gas, coke-oven gas or recovered gas. Cancel internal recycled gas and cooling-water loops. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | Close dry gas mass and carbon balances using measured feed carbon, product composition, tar/char carbon, combustion and emissions. Record moisture/steam separately. Gas mass equals corrected volume times measured composition-dependent density at the same reference conditions. A producer-gas heating value or density cannot substitute for water gas, coke-oven gas or recovered gas. Cancel internal recycled gas and cooling-water loops. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply origin- and composition-qualified fuel gas as a material/energy carrier |
| excluded_use | Natural gas; refinery gas; petroleum hydrocarbon gases; standalone hydrogen; unmetered heat-only production |
| required_metadata | site/year; origin and subtype; feedstock; gasifying agent; dry/wet basis; gas composition; pressure and temperature; density; net calorific value; parent burden allocation; cleaning technology; gate; own-use and losses; compressibility and gas-volume reference conditions; fossil/biogenic carbon share; applicable subtype PCR |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| netl-gasification-2002 | official_guidance | DOE/NETL, Major Environmental Aspects of Gasification-Based Power Generation Technologies, Final Report, December 2002, sections 1.1.2–1.1.5, printed pp.1-6 and 1-11–1-12 (PDF pp.44,49–50). https://www.netl.doe.gov/sites/default/files/netl-file/final-env.pdf | Gasification agents, particulate and acid-gas cleanup, ash and wastewater; historical process evidence only. |
| un-energy-2024 | official_guidance | UNSD, Guidelines for the Annual Questionnaire on Energy Statistics, May 2024, fuel definitions. https://unstats.un.org/unsd/energy/energy-questionnaire-guidelines.pdf | Fuel identity and calorific-value basis; no assumed gas composition. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
