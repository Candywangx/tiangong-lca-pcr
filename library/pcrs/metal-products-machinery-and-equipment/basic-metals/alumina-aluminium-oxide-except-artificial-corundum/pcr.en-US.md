---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.alumina-aluminium-oxide-except-artificial-corundum
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Alumina (aluminium oxide), except artificial corundum

## 1. Scope and Applicability

This PCR covers gate-to-gate production of dry, non-fused alumina by the Bayer route from bauxite, including raw-material handling, digestion, clarification, precipitation, calcination, product handling, red-mud management, and on-site steam generation when operated by the reporting facility. It applies to aluminium oxide classified in CPC 3.0 code 41432 and excludes artificial corundum, fused alumina, aluminium hydroxide, specialty downstream forms made by further conversion, primary aluminium smelting, bauxite mining, and third-party upstream production of purchased materials and energy.

The reporting facility shall declare bauxite mineralogy and moisture basis, alumina grade and water basis, refinery technology, fuel and steam configuration, residue-management route, geography, and reporting period. This semantic boundary is distinct from artificial corundum because fusion is outside the covered Bayer refinery route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.alumina-aluminium-oxide-except-artificial-corundum` |
| classification_refs | CPC 3.0 `41432`, exact |
| covered_products | Dry non-fused alumina (aluminium oxide) produced from bauxite by the Bayer route |
| excluded_products | Artificial corundum; fused alumina; aluminium hydroxide; primary aluminium; bauxite; downstream specialty products |
| representative_product | Smelter-grade or other declared non-fused dry alumina at the refinery gate |
| production_route | Bayer digestion, clarification, precipitation, and calcination |
| market_state | Dry alumina as dispatched from the refinery; packaging or bulk-delivery state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dry non-fused alumina meeting the declared product specification |
| How much | 1,000 kg |
| How well | Declared aluminium-oxide content, impurities, particle specification, and moisture basis |
| How long or cycle | Production during the declared reporting period, normally 12 consecutive months |
| reference_flow_link | Net saleable alumina output at the refinery gate |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Alumina (aluminium oxide), except artificial corundum `2b64b550-00d6-4210-aa50-7c061511518d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dry-mass basis; aluminium-oxide grade and impurity specification; non-fused state; Bayer route; plant geography; reporting period; packaging or bulk-delivery state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Alumina reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net saleable alumina on the declared dry-mass basis; retain measured moisture and conversion records. |
| `solid_mass_basis` | Bauxite, sodium hydroxide, calcium oxide, red mud, and particulate matter | Mass | kg | State as-received or dry basis and convert only with measured moisture or concentration data. |
| `process_water_mass` | Process Water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use mass metering or convert measured volume with documented density and reference conditions. |
| `gas_volume_basis` | natural gas in the gaseous state | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare temperature, pressure, composition, and whether the meter reports standard or actual volume. |
| `energy_basis` | alternating current | Net calorific value | MJ | Convert facility electricity-meter data to MJ using 3.6 MJ per kWh and retain original kWh records. |
| `steam_mass_basis` | Industrial steam | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Meter steam mass and separately document pressure, temperature, condensate return, and purchased or on-site origin. |

## 5. System Boundary

The foreground starts when bauxite and other purchased inputs cross the refinery gate and ends when conforming dry alumina crosses the refinery gate. Include refinery handling, grinding, digestion, clarification, precipitation, calcination, product recovery, directly operated residue management, and directly operated steam generation. Include direct fuel combustion and measured releases; link purchased inputs to separate upstream datasets without incorporating their upstream exchanges into foreground rows.

Exclude bauxite mining and beneficiation before the declared gate, manufacture of purchased chemicals and energy, capital goods unless the study explicitly requires them, employee travel, downstream transport and use, aluminium smelting, and artificial-corundum fusion. Disclose any material site operation omitted from this gate-to-gate boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Bauxite, chemicals, water, fuels, and purchased energy at the refinery gate, with supplier state and metering basis declared |
| starting_condition_role | Gate-to-gate foreground starting condition |
| product_classification_scope | CPC 3.0 `41432`, excluding artificial corundum and downstream conversions |
| recursive_input_rule | Any returned alumina or same-category material entering the refinery is recorded once as a separate input with origin and state; do not recursively apply this PCR to that input inside the same foreground package. |
| upstream_dataset_requirement | Use geographically, technologically, temporally, and product-state representative upstream datasets for each purchased input. |
| disclosure | Report cut-offs, missing meters, allocation, recycled liquor and seed loops, residue route, energy origin, and deviations from the declared boundary. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_handling` | Raw-material handling and grinding | required | Always | Prepares bauxite feed | Bauxite transferred to digestion |
| `digestion_clarification_precipitation` | Digestion, clarification, and precipitation | required | Always | Produces aluminium-hydroxide intermediate and separates red mud | Aluminium-hydroxide feed to calcination |
| `calcination_product_handling` | Calcination and product handling | required | Always | Produces saleable dry alumina | 1,000 kg dry alumina |
| `red_mud_management` | Red-mud management | conditional | Include only when red mud is managed within the reporting facility boundary | Transfers and manages refinery residue | Red mud received for management |
| `onsite_steam_generation` | On-site steam generation | conditional | Include only when steam is generated by the reporting facility | Supplies refinery process steam | Industrial steam delivered to refinery users |

### Process: Raw-material handling and grinding (`raw_material_handling`)

#### Inputs

##### Product flows

###### Bauxite feed (`rmh_bauxite`)

Record the as-received bauxite transferred into refinery handling and grinding.

- Selected flow: Bauxite
- Flow property / unit: Mass / kg
- Amount rule: Net weighbridge or conveyor mass corrected to the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rmh_bauxite`
- Sources: `australia-npi-alumina-refining-2007`, `us-epa-ap42-primary-aluminum-12-1`

###### Electricity for handling and grinding (`rmh_electricity`)

Record metered alternating-current electricity consumed by bauxite handling and grinding.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity, or documented allocation of a shared meter by operating records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rmh_electricity`
- Sources: `australia-npi-alumina-refining-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Total particulate matter from handling and grinding (`rmh_total_particulate`)

Record total particulate matter released to air after controls from bauxite handling and grinding.

- Selected flow: Total particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Stack or ambient-source measurement; otherwise a documented site-specific mass balance or approved emission factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rmh_total_particulate`
- Sources: `us-epa-ap42-primary-aluminum-12-1`, `australia-npi-alumina-refining-2007`

### Process: Digestion, clarification, and precipitation (`digestion_clarification_precipitation`)

#### Inputs

##### Product flows

###### Process water (`dcp_process_water`)

Record process make-up water crossing this process boundary; exclude internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered net make-up water, excluding documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dcp_process_water`
- Sources: `australia-npi-alumina-refining-2007`

###### Sodium hydroxide (`dcp_sodium_hydroxide`)

Record purchased sodium hydroxide make-up entering the liquor circuit.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Invoice or tank change corrected to 100 percent sodium-hydroxide equivalent using measured concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dcp_sodium_hydroxide`
- Sources: `australia-npi-alumina-refining-2007`, `us-epa-ap42-primary-aluminum-12-1`

###### Calcium oxide (`dcp_calcium_oxide`)

Record calcium oxide supplied as refinery lime on a chemically specified mass basis.

- Selected flow: Calcium oxide
- Flow property / unit: Mass / kg
- Amount rule: Delivered mass multiplied by measured calcium-oxide fraction; exclude water and inert fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dcp_calcium_oxide`
- Sources: `australia-npi-alumina-refining-2007`, `us-epa-ap42-primary-aluminum-12-1`

###### Electricity for digestion, clarification, and precipitation (`dcp_electricity`)

Record alternating-current electricity consumed by this process group.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity, or documented allocation of a shared meter by operating records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dcp_electricity`
- Sources: `australia-npi-alumina-refining-2007`

###### Industrial steam (`dcp_industrial_steam`)

Record steam delivered to digestion and related refinery users, whether purchased or supplied from the conditional on-site process.

- Selected flow: Industrial steam `ea4e839d-d854-4a7a-a362-b4ccb8dc61ff`
- Flow property / unit: Mass / kg
- Amount rule: Metered delivered steam mass net of separately measured condensate return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dcp_industrial_steam`
- Sources: `australia-npi-alumina-refining-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Red mud from bauxite digestion (`dcp_red_mud`)

Record red mud separated from pregnant liquor and transferred to residue management.

- Selected flow: Redmud from bauxite digestion `2d27a130-27dc-48d9-bc6a-c2428bb6907b`
- Flow property / unit: Mass / kg
- Amount rule: Measured slurry or solids mass with dry-solids fraction and entrained-liquor basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dcp_red_mud`
- Sources: `australia-npi-alumina-refining-2007`, `us-epa-ap42-primary-aluminum-12-1`

##### Elementary flows

### Process: Calcination and product handling (`calcination_product_handling`)

#### Inputs

##### Product flows

###### Natural gas for calcination (`calc_natural_gas`)

Record gaseous natural gas combusted directly in calcination.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume at documented reference conditions assigned to calcination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calc_natural_gas`
- Sources: `australia-npi-alumina-refining-2007`

###### Electricity for calcination and product handling (`calc_electricity`)

Record alternating-current electricity consumed in calcination, cooling, recovery, and product handling.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity, or documented allocation of a shared meter by operating records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calc_electricity`
- Sources: `australia-npi-alumina-refining-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable dry alumina (`calc_alumina`)

Record net conforming alumina dispatched from the refinery, excluding internal recycle and off-specification material retained on site.

- Selected flow: Alumina (aluminium oxide), except artificial corundum `2b64b550-00d6-4210-aa50-7c061511518d`
- Flow property / unit: Mass / kg
- Amount rule: Net saleable dry mass at the refinery gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calc_alumina`
- Sources: `un-cpc-3-0-structure-2025`, `australia-npi-alumina-refining-2007`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from calcination fuel (`calc_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide from calcination fuel combustion; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or fuel carbon balance using site fuel quantity, composition, and oxidation basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calc_fossil_carbon_dioxide`
- Sources: `australia-npi-alumina-refining-2007`

###### Total particulate matter from calcination and product handling (`calc_total_particulate`)

Record total particulate matter released to air after controls from calcination and product handling.

- Selected flow: Total particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement; otherwise a documented site-specific mass balance or approved emission factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calc_total_particulate`
- Sources: `us-epa-ap42-primary-aluminum-12-1`, `australia-npi-alumina-refining-2007`

### Process: Red-mud management (`red_mud_management`)

#### Inputs

##### Product flows

###### Process water for residue management (`residue_process_water`)

Record make-up process water used within the residue-management boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered net make-up water excluding internal recovered water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_process_water`
- Sources: `australia-npi-alumina-refining-2007`

###### Electricity for residue management (`residue_electricity`)

Record alternating-current electricity used for pumping, thickening, filtration, or other declared residue operations.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity, or documented allocation of a shared meter by equipment operating records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_electricity`
- Sources: `australia-npi-alumina-refining-2007`

##### Waste flows

###### Red mud received for management (`residue_red_mud_input`)

Record red mud entering this process from clarification, preserving the same moisture and solids basis as the corresponding output.

- Selected flow: Redmud from bauxite digestion `2d27a130-27dc-48d9-bc6a-c2428bb6907b`
- Flow property / unit: Mass / kg
- Amount rule: Transfer mass reconciled to the upstream red-mud output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_red_mud_input`
- Sources: `australia-npi-alumina-refining-2007`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Red mud transferred to storage, treatment, or disposal (`residue_red_mud_output`)

Record red mud leaving the managed foreground process for the declared storage, treatment, use, or disposal route.

- Selected flow: Redmud from bauxite digestion `2d27a130-27dc-48d9-bc6a-c2428bb6907b`
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass with dry-solids fraction, moisture, destination, and stock change reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_red_mud_output`
- Sources: `australia-npi-alumina-refining-2007`

##### Elementary flows

### Process: On-site steam generation (`onsite_steam_generation`)

#### Inputs

##### Product flows

###### Natural gas for on-site steam generation (`utility_natural_gas`)

Record gaseous natural gas combusted in facility-operated boilers when this conditional process applies.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered boiler gas volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_natural_gas`
- Sources: `australia-npi-alumina-refining-2007`

###### Boiler feedwater (`utility_process_water`)

Record net process water supplied as boiler feedwater when on-site steam generation applies.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered feedwater less separately measured condensate return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_process_water`
- Sources: `australia-npi-alumina-refining-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Industrial steam supplied to refinery (`utility_industrial_steam`)

Record industrial steam delivered from facility-operated boilers to refinery users.

- Selected flow: Industrial steam `ea4e839d-d854-4a7a-a362-b4ccb8dc61ff`
- Flow property / unit: Mass / kg
- Amount rule: Metered delivered steam mass with pressure and temperature retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_industrial_steam`
- Sources: `australia-npi-alumina-refining-2007`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from on-site steam generation (`utility_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide from boiler natural-gas combustion when this conditional process applies.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or fuel carbon balance using site fuel quantity, composition, and oxidation basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry alumina output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_fossil_carbon_dioxide`
- Sources: `australia-npi-alumina-refining-2007`

## 7. Allocation and Co-product Handling

Avoid allocation by submetering the five process groups and reconciling internal red-mud, steam, liquor, water, and seed transfers. Internal recycle is not a new product input or output. Saleable by-products, recovered materials exported from the boundary, or shared services shall be reported explicitly rather than hidden in the alumina balance.

| allocation_id | circumstance | required rule | disclosure |
| --- | --- | --- | --- |
| `alloc_direct` | Inputs and releases attributable to one process or product | Assign directly using meters, batches, or engineering records | Measurement source and reconciliation |
| `alloc_shared_energy` | Shared electricity, steam, fuel, or water meter | Allocate using causal equipment operating data, metered energy, steam enthalpy, or mass; economic allocation is not the default | Driver, period, quantities, and sensitivity |
| `alloc_exported_coproduct` | A material leaves as a saleable co-product | Prefer subdivision or system expansion when the study goal permits; otherwise apply a documented physical relation before economic allocation | Product state, quantity, method, prices if used, and sensitivity |
| `alloc_residue` | Red mud sent to treatment, storage, disposal, or beneficial use | Keep residue generation in the alumina system and model the declared downstream route consistently with the study boundary; do not assign avoided burden without an explicit consequential rule | Destination, moisture, solids, stock change, and any credit |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rmh_bauxite` | `raw_material_handling` | `rmh_bauxite` | weighbridge and moisture records | gross mass; returns; moisture; dry solids | reconcile receipts and conveyor totals | kg | each delivery and monthly | reporting period | refinery | net mass normalized to reference flow | calibrated scale; moisture laboratory results |
| `cp_rmh_electricity` | `raw_material_handling` | `rmh_electricity` | electricity meter | kWh; meter id; timestamps | submeter or allocate shared meter | MJ | hourly or monthly | reporting period | process group | sum, convert at 3.6 MJ/kWh, normalize | calibration and meter coverage |
| `cp_rmh_total_particulate` | `raw_material_handling` | `rmh_total_particulate` | emissions record | concentration; gas flow; hours; control status | measured release or documented calculation | kg | test campaign and monthly operation | representative operation in reporting period | release point | sum release after controls | test report and control uptime |
| `cp_dcp_process_water` | `digestion_clarification_precipitation` | `dcp_process_water` | water meter | volume or mass; density; recycle | net make-up meter | kg | daily or monthly | reporting period | process group | subtract documented recycle, normalize | meter calibration and water balance |
| `cp_dcp_sodium_hydroxide` | `digestion_clarification_precipitation` | `dcp_sodium_hydroxide` | tank and assay record | solution mass; concentration; stock change | material balance | kg | delivery and monthly | reporting period | process group | 100 percent NaOH equivalent | tank calibration and assay |
| `cp_dcp_calcium_oxide` | `digestion_clarification_precipitation` | `dcp_calcium_oxide` | receipt and assay | delivered mass; CaO fraction; stock change | material balance | kg | delivery and monthly | reporting period | process group | pure CaO equivalent | scale and certificate or assay |
| `cp_dcp_electricity` | `digestion_clarification_precipitation` | `dcp_electricity` | electricity meter | kWh; meter id; timestamps | submeter or causal allocation | MJ | hourly or monthly | reporting period | process group | sum, convert, normalize | calibration and allocation record |
| `cp_dcp_industrial_steam` | `digestion_clarification_precipitation` | `dcp_industrial_steam` | steam meter | mass; pressure; temperature; condensate return | net delivered steam metering | kg | hourly or monthly | reporting period | process group | sum net delivery, normalize | calibration and steam balance |
| `cp_dcp_red_mud` | `digestion_clarification_precipitation` | `dcp_red_mud` | residue meter and assay | slurry mass; solids; moisture; liquor | transfer measurement and solids balance | kg | daily or monthly | reporting period | process group | report declared wet or dry basis consistently | meter and laboratory solids |
| `cp_calc_natural_gas` | `calcination_product_handling` | `calc_natural_gas` | gas meter | volume; temperature; pressure; composition | dedicated meter | m3 | hourly or monthly | reporting period | calcination | sum at declared conditions, normalize | meter calibration and gas quality |
| `cp_calc_electricity` | `calcination_product_handling` | `calc_electricity` | electricity meter | kWh; meter id; timestamps | submeter or causal allocation | MJ | hourly or monthly | reporting period | process group | sum, convert, normalize | calibration and allocation record |
| `cp_calc_alumina` | `calcination_product_handling` | `calc_alumina` | product scale and quality | mass; moisture; grade; off-spec; returns | dispatch and production reconciliation | kg | batch and monthly | reporting period | refinery gate | net dry conforming mass | calibrated scale and laboratory results |
| `cp_calc_fossil_carbon_dioxide` | `calcination_product_handling` | `calc_fossil_carbon_dioxide` | emissions or fuel record | CO2; fuel; carbon; oxidation | direct measure or carbon balance | kg | continuous or monthly | reporting period | calciner sources | sum direct fossil CO2 | monitor QA or fuel certificates |
| `cp_calc_total_particulate` | `calcination_product_handling` | `calc_total_particulate` | emissions record | concentration; gas flow; hours; control status | measured release or documented calculation | kg | test campaign and monthly operation | representative operation in reporting period | release point | sum release after controls | test report and control uptime |
| `cp_residue_process_water` | `red_mud_management` | `residue_process_water` | water meter | volume or mass; density; recovered water | net make-up meter | kg | daily or monthly | reporting period | residue area | subtract recovered water, normalize | calibration and water balance |
| `cp_residue_electricity` | `red_mud_management` | `residue_electricity` | electricity meter | kWh; equipment hours | submeter or causal allocation | MJ | hourly or monthly | reporting period | residue area | sum, convert, normalize | calibration and operating log |
| `cp_residue_red_mud_input` | `red_mud_management` | `residue_red_mud_input` | transfer record | mass; solids; moisture | reconcile with upstream output | kg | daily or monthly | reporting period | process transfer | same-basis transfer total | mass and solids reconciliation |
| `cp_residue_red_mud_output` | `red_mud_management` | `residue_red_mud_output` | transfer and stock record | mass; solids; moisture; destination; stock | destination and inventory balance | kg | each transfer and monthly | reporting period | residue area | output plus stock change reconciled to input | survey, scale, assay, destination record |
| `cp_utility_natural_gas` | `onsite_steam_generation` | `utility_natural_gas` | gas meter | volume; conditions; composition | boiler meter | m3 | hourly or monthly | reporting period | on-site boilers | sum at declared conditions, normalize | calibration and gas quality |
| `cp_utility_process_water` | `onsite_steam_generation` | `utility_process_water` | water meter | feedwater; condensate return | net feedwater metering | kg | hourly or monthly | reporting period | on-site boilers | feedwater less condensate return | calibration and steam-water balance |
| `cp_utility_industrial_steam` | `onsite_steam_generation` | `utility_industrial_steam` | steam meter | mass; pressure; temperature | delivered steam metering | kg | hourly or monthly | reporting period | on-site boilers | sum delivery, normalize | calibration and steam balance |
| `cp_utility_fossil_carbon_dioxide` | `onsite_steam_generation` | `utility_fossil_carbon_dioxide` | emissions or fuel record | CO2; fuel; carbon; oxidation | direct measure or carbon balance | kg | continuous or monthly | reporting period | boiler sources | sum direct fossil CO2 | monitor QA or fuel certificates |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | normalized amount = reporting-period amount / dry saleable alumina × 1,000 | row amount; `calc_alumina` | amount per 1,000 kg dry alumina |  |
| `calc_dry_mass` | wet solids | dry mass = wet mass × measured dry-solids fraction | wet mass; dry-solids fraction | kg dry material |  |
| `calc_solution_equivalent` | sodium hydroxide | pure NaOH equivalent = solution mass × measured NaOH mass fraction | solution mass; assay | kg NaOH |  |
| `calc_electricity_mj` | alternating current | MJ = metered kWh × 3.6 | metered kWh | MJ |  |
| `calc_gas_reference` | natural gas | convert only using documented meter temperature, pressure, compressibility, and reference conditions | measured gas volume; conditions | m3 at declared basis |  |
| `calc_fossil_co2` | direct fuel combustion | fossil CO2 = fuel quantity × carbon content × oxidation fraction × 44/12, unless a quality-assured direct measurement is used | fuel; carbon; oxidation | kg fossil CO2 | `australia-npi-alumina-refining-2007` |
| `calc_residue_reconciliation` | red mud | input = output to destinations + closing stock − opening stock + measured losses, on one solids and moisture basis | transfers; stocks; solids | reconciled red-mud mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | all rows | Use one common reporting period and disclose shutdowns, atypical campaigns, and substitutions. | timestamps; production calendar |
| `dq_geography` | purchased inputs | Match supply geography and delivery boundary or disclose proxy use. | supplier and dataset metadata |
| `dq_technology` | refinery | Declare Bayer technology, digestion and calciner configuration, residue route, and control equipment. | process description and equipment list |
| `dq_mass_balance` | alumina, bauxite, caustic, and red mud | Reconcile dry solids and key material stocks; investigate unexplained differences. | signed mass balance and laboratory results |
| `dq_energy_balance` | electricity, gas, and steam | Reconcile submeter totals to facility meters and avoid double counting on-site steam fuel and purchased steam. | meter hierarchy and reconciliation |
| `dq_uncertainty` | all material rows | Record meter accuracy, sampling uncertainty, estimation method, missing-data treatment, and data coverage. | uncertainty register and QA records |
| `dq_uuid` | UUID-bearing flows | Preserve the audited TianGong identity, flow type, property, unit group, and state-100 status; do not substitute a proxy UUID. | UUID audit record |

## 9. Validation Rules

| validation_id | severity | rule |
| --- | --- | --- |
| `v_reference` | error | `calc_alumina` shall equal 1,000 kg dry conforming non-fused alumina after normalization and shall use the audited reference-product UUID. |
| `v_inventory_identity` | error | Every row shall contain exactly one atomic exchange; UUID-empty rows shall remain explicitly unresolved and shall not use a proxy UUID. |
| `v_row_completeness` | error | Every included process row shall have a value, unit, method, reporting-period coverage, and evidence reference; a conditional process may be marked not applicable only with evidence. |
| `v_mass_basis` | error | Bauxite, chemicals, alumina, particulate matter, and red mud shall disclose consistent wet/dry or concentration bases and conversion records. |
| `v_residue_balance` | error | Red-mud generation, transfers, stocks, and destinations shall reconcile on one declared solids and moisture basis. |
| `v_energy_double_count` | error | When on-site steam generation is included, its natural gas and direct CO2 shall not also be embedded in a purchased-steam foreground record. |
| `v_boundary` | error | Artificial-corundum fusion, aluminium smelting, and bauxite mining shall not be represented as covered foreground processes. |
| `v_sources` | error | Final evidence shall cite verified original text; discovery metadata or snippets alone are insufficient. |
| `v_ranges` | warning | No external numeric QA range is asserted until two compatible, mutually independent original-text sources support it; foreground collection remains mandatory. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground data package for dry non-fused Bayer-process alumina |
| downstream_use | Construction of TianGong process and lifecycle-model datasets and product-footprint studies |
| allowed_use | Studies whose product state, technology, geography, period, allocation, and system boundary are compatible with the declared dataset |
| excluded_use | Artificial corundum, fused alumina, aluminium hydroxide, bauxite mining, aluminium smelting, or unqualified global-average claims |
| required_metadata | plant geography; reporting period; technology; bauxite state; alumina grade and moisture; residue route; energy origin; allocation; cut-offs; UUID audit provenance |
| required_quality_disclosure | primary-data coverage; meter and laboratory QA; missing-data treatment; uncertainty; mass and energy reconciliation; proxy upstream datasets |
| update_trigger | material process, fuel, electricity, ore, product-grade, residue-route, control, allocation, or boundary change; or loss of temporal representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact CPC 41432 product identity and exclusion of artificial corundum |
| `australia-npi-alumina-refining-2007` | `official_guidance` | Australian Government, Emission Estimation Technique Manual for Alumina Refining, Version 2.0, November 2007, https://www.dcceew.gov.au/sites/default/files/documents/falref.pdf | Bayer refinery process boundary, material and energy inputs, process stages, direct emissions, and red-mud management |
| `us-epa-ap42-primary-aluminum-12-1` | `official_guidance` | U.S. EPA, AP-42 Section 12.1, Primary Aluminum Production, https://www.epa.gov/sites/production/files/2020-11/documents/c12s01.pdf | Bayer process sequence, separation from aluminium smelting, raw-material additions, red mud, calcination, and particulate release points |
