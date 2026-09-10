---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.naphtha
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Naphtha

## 1. Scope and Applicability

This PCR applies to refinery-gate production of naphtha as a saleable petroleum fraction or petrochemical feedstock. It covers light, heavy, and full-range naphtha whose declared product specification falls within CPC 3.0 subclass 33330: light or medium oils distilling between 30 °C and 210 °C that do not meet motor-gasoline specifications. The producer shall declare the actual distillation range, grade, treatment route, key contractual quality properties, and custody-transfer point; the CPC interval is a category boundary, not a substitute for the producer's specification.

The foreground starts with crude oil or unfinished refinery feed received at the refinery boundary and includes the separation, conditional treatment, storage, blending when used only to meet the declared naphtha specification, and loading activities attributable to the reference product. Upstream crude production and transport, purchased energy, hydrogen, water, and chemicals are linked through upstream datasets. Downstream steam cracking, catalytic reforming, aromatics production, gasoline blending, distribution after the refinery gate, and combustion or other use are excluded.

This PCR does not cover motor gasoline, gasoline-type or kerosene-type jet fuel, kerosene, white spirit or special-boiling-point industrial spirits, natural-gas liquids sold as distinct products, pyrolysis gasoline, or downstream petrochemicals. A petroleum stream outside the declared 30–210 °C category boundary, or one meeting the applicable motor-gasoline specification, requires another PCR or explicit manual review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.naphtha |
| classification_refs | CPC 3.0 `33330` Naphtha (`exact`) |
| covered_products | Refinery naphtha sold as light, heavy, or full-range naphtha; straight-run, cracked, hydrotreated, sweetened, or blended naphtha when the final stream remains within the declared naphtha category boundary. |
| excluded_products | Motor gasoline; aviation gasoline; gasoline-type and kerosene-type jet fuels; kerosene; white spirit and special-boiling-point spirits; separately marketed natural-gas liquids; pyrolysis gasoline; benzene, toluene, xylenes, olefins, and other downstream conversion products. |
| representative_product | Saleable naphtha at the refinery loading or custody-transfer point. |
| production_route | Crude or unfinished refinery feed receipt, separation by refinery fractionation, conditional stabilization or hydrotreating/sweetening, specification blending, storage, and loading. |
| market_state | Liquid petroleum fraction at the refinery gate, with grade, treatment status, distillation range, and contractual quality specification declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of refinery-gate naphtha as a petroleum fraction or petrochemical feedstock. |
| How much | 1,000 kg net saleable naphtha. |
| How well | Meets the declared buyer, refinery, or regulatory specification; remains within the CPC 33330 category boundary; and has its actual distillation range, grade, treatment status, and key quality properties disclosed. |
| How long or cycle | One representative production campaign or reporting period, with opening and closing inventory reconciled. |
| reference_flow_link | Net mass of conforming naphtha transferred at the declared refinery-gate custody-transfer point. |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Naphtha `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual initial and final boiling points or declared distillation range; light, heavy, or full-range grade; straight-run, cracked, hydrotreated, sweetened, or blended route; sulfur and benzene or other contractual composition limits; water and sediment basis where specified; refinery technology and feed slate; geography; reference year; allocation method; custody-transfer point; density and reference temperature when volume-to-mass conversion is used |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all refinery material-balance streams | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference product as net mass. Reconcile gross meter readings for opening and closing tank inventory, returns, off-spec diversion, and internal recycle before normalizing to 1,000 kg. |
| `volume_to_mass` | any liquid stream initially metered by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass using a measured or specification-supported density for the same stream and declared reference temperature; retain the raw volume, density, temperature, and conversion equation. |
| `energy_carriers` | purchased electricity, steam, fuel, and recovered refinery energy | Energy | MJ or kWh, as recorded | Preserve the original carrier and unit. Convert only with a documented factor, avoid double counting recovered energy, and identify whether refinery fuel gas is an internal co-product or a purchased input. |
| `water_balance` | process, cooling, boiler-feed, and wastewater streams | Mass or volume | kg or m3 | Keep water withdrawals, recirculation, evaporation, and discharge distinct. Do not report gross circulating cooling water as net withdrawal. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | foreground naphtha production | Include refinery activities from receipt of crude oil or unfinished refinery feed through separation, applicable product treatment, storage, specification blending, and loading at the declared refinery-gate custody-transfer point. | `us-epa-ap42-refining-2015`; `us-epa-refinery-effluent-guidelines` |
| `boundary_upstream_links` | purchased and imported inputs | Link crude production and transport, imported refinery intermediates, purchased naphtha, electricity, fuels, steam, hydrogen, water, and chemicals to representative upstream datasets; do not silently absorb them into an unqualified refinery average. | `eu-pef-2021` |
| `boundary_direct_releases` | controlled and fugitive refinery releases | Include direct combustion and process emissions, vents, flares, equipment leaks, storage and loading losses, wastewater releases, and treatment wastes attributable to the included processes. | `us-epa-ap42-refining-2015`; `eu-refinery-bat-2014` |
| `boundary_exclusions` | downstream conversion and use | Exclude downstream steam cracking, catalytic reforming, aromatics or olefins production, gasoline blending beyond the declared naphtha specification, distribution after the refinery gate, and product use or combustion. | `us-epa-ap42-refining-2015`; `unsd-cpc-3-2025` |
| `boundary_cutoff_disclosure` | omitted flows | Quantify all environmentally relevant material, energy, waste, and elementary flows. Any justified exclusion shall be disclosed with its basis and a sensitivity or materiality check; legal or permit-reportable releases shall not be cut off. | `eu-pef-2021`; `eu-refinery-bat-2014` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crude oil and any unfinished refinery feed are received at the refinery boundary with feed identity, origin, quantity, and quality basis recorded. |
| starting_condition_role | Foreground refinery entry condition. |
| product_classification_scope | Naphtha under CPC 3.0 subclass 33330, limited to the declared qualifying petroleum fraction and excluding separately classified finished fuels, solvents, and downstream chemicals. |
| recursive_input_rule | Purchased or internally transferred naphtha that enters an included process is recorded as a distinct product input with its own upstream dataset or documented internal transfer; do not recursively recreate its upstream naphtha production inside the same process. |
| upstream_dataset_requirement | Use representative datasets for crude production and transport, imported unfinished feed, purchased hydrogen, electricity, steam, fuels, water, chemicals, and externally supplied naphtha. |
| disclosure | Declare feed slate, route and treatment status, included units, shared utilities, allocation method and factors, tank and loading boundary, geography, period, data gaps, and every excluded refinery activity. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `refinery_separation` | Refinery feed preparation and naphtha separation | required | Always included for refinery-produced naphtha; imported naphtha shall instead enter as a disclosed upstream product input. | Foreground crude or unfinished-feed preparation and fractionation. Tiangong process identity: `e6baedfb-bafc-454a-a24e-751ebf3eea4d`. | Net separated naphtha transferred to treatment or storage, normalized to the final 1,000 kg reference product. |
| `naphtha_treatment` | Naphtha stabilization and treatment | conditional | Include when stabilization, hydrotreating, sweetening, fraction adjustment, or specification blending is performed before sale. | Foreground product conditioning and impurity removal. | Net conforming naphtha leaving treatment, normalized to the final 1,000 kg reference product. |
| `storage_and_loading` | Naphtha storage, blending, and refinery-gate loading | required | Include tanks, circulation, specification blending, and the loading mode used at the declared custody-transfer point. | Foreground final handling and dispatch. | 1,000 kg net conforming naphtha dispatched. |

### Process: Refinery feed preparation and naphtha separation (`refinery_separation`)

#### Inputs

##### Product flows

###### Crude oil and unfinished refinery feed (`refinery_feed`)

Record every crude or unfinished petroleum feed entering the included separation units. Keep different feed grades or imported intermediates separate when their upstream burdens or qualities differ materially.

- Selected flow: Route-specific crude oil or unfinished refinery feed
- Flow property / unit: Mass / kg
- Amount rule: Measured net feed charged to the included units after inventory reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refinery_mass_balance`
- Sources: `us-epa-ap42-refining-2015`

###### Separation energy and utilities (`separation_energy`)

Record metered electricity, steam, process heat, fuel gas, and other energy carriers consumed by feed preparation and fractionation. Recovered heat and internal fuel shall remain visible to prevent double counting.

- Selected flow: Carrier-specific electricity, steam, process heat, and fuels
- Flow property / unit: Energy / MJ or kWh as recorded
- Amount rule: Metered or engineering-accounted carrier consumption attributable to the included units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `us-epa-ap42-refining-2015`

###### Separation water and process chemicals (`separation_water_chemicals`)

Record net process and boiler-feed water, desalting chemicals, corrosion inhibitors, and other purchased chemicals that cross the foreground boundary.

- Selected flow: Carrier- or substance-specific water and process chemicals
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Purchased or net-withdrawn quantity attributable to the included units, excluding internal recirculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_water_records`
- Sources: `eu-refinery-bat-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separated naphtha intermediate (`separated_naphtha`)

Record the net naphtha cut transferred from separation to treatment or storage. The concrete data package shall declare grade and distillation range rather than treating all side cuts as interchangeable.

- Selected flow: Naphtha `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net measured transfer mass, reconciled for internal recycle and tank inventory change.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refinery_mass_balance`
- Sources: `unsd-cpc-3-2025`

###### Other refinery fractions and co-products (`separation_coproducts`)

Record every co-produced petroleum fraction, refinery gas, water stream reused as a product, or saleable material leaving the separated unit. These quantities define the multifunctional process and allocation factors.

- Selected flow: Product-specific refinery co-product flows
- Flow property / unit: Mass or energy, matching the product / kg or MJ
- Amount rule: Measured net co-product output by product grade and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting-period throughput before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refinery_mass_balance`
- Sources: `us-epa-ap42-refining-2015`; `eu-pef-2021`

##### Waste flows

###### Separation sludges and discarded residues (`separation_waste`)

Record desalting sludge, tank or separator residues, spent filters, and other wastes generated by the included feed preparation and separation units, by destination and treatment route.

- Selected flow: Waste-specific Tiangong waste flow selected for the documented waste and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed quantity or mass-balance estimate supported by disposal and treatment records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-refinery-bat-2014`

##### Elementary flows

###### Separation air emissions (`separation_air_emissions`)

Report direct combustion and process emissions, flares, vents, and equipment leaks by monitored or calculated substance. Select individual Tiangong elementary flows for each reported substance; do not use one unspecified aggregate emission.

- Selected flow: Substance-specific elementary flows to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or permit-consistent calculated emissions for the included units, including allocated shared sources.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-refining-2015`; `eu-refinery-bat-2014`

###### Separation water emissions (`separation_water_emissions`)

Report direct releases to water after treatment by substance and receiving compartment. Wastewater sent to another foreground treatment unit remains an internal transfer until final discharge.

- Selected flow: Substance- and compartment-specific elementary flows to water
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge concentration multiplied by represented discharge volume, corrected for internal recycle and linked to the same period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_releases`
- Sources: `us-epa-refinery-effluent-guidelines`; `eu-refinery-bat-2014`

### Process: Naphtha stabilization and treatment (`naphtha_treatment`)

#### Inputs

##### Product flows

###### Naphtha entering treatment (`naphtha_to_treatment`)

Record the actual naphtha stream entering stabilization, hydrotreating, sweetening, fraction adjustment, or specification blending.

- Selected flow: Naphtha `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net measured input mass after inventory and recycle reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_mass_balance`
- Sources: `us-epa-ap42-refining-2015`

###### Hydrogen, chemicals, and treatment utilities (`treatment_inputs`)

Record hydrogen, caustic or other treatment chemicals, electricity, steam, fuel, and water separately by carrier or substance. Record only inputs for the treatment actually performed.

- Selected flow: Carrier- or substance-specific treatment input flows
- Flow property / unit: Mass, energy, or volume / kg, MJ, kWh, or m3
- Amount rule: Metered or purchased quantity attributable to the treatment unit and reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_inputs`
- Sources: `us-epa-ap42-refining-2015`; `eu-refinery-bat-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated conforming naphtha (`treated_naphtha`)

Record the net conforming naphtha leaving treatment. The same product flow is used only when the output remains within the declared naphtha category; downstream gasoline or chemical products require other product flows.

- Selected flow: Naphtha `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net measured conforming output after off-spec diversion, recycle, and inventory change.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_mass_balance`
- Sources: `unsd-cpc-3-2025`

###### Treatment co-products and recovered streams (`treatment_coproducts`)

Record recovered refinery gas, sulfur, reusable hydrocarbon streams, and other products by identity and destination. Do not net them against energy or material inputs.

- Selected flow: Product-specific recovered or co-product flows
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: Measured net output by stream and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reporting-period treatment throughput before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_mass_balance`
- Sources: `us-epa-ap42-refining-2015`; `eu-refinery-bat-2014`

##### Waste flows

###### Spent treatment materials (`spent_treatment_materials`)

Record spent catalysts, spent caustic, filters, sludges, and other treatment wastes by composition and management route.

- Selected flow: Waste-specific Tiangong flow selected for the documented material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed replacement or disposal quantity assigned to the represented operating period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-refinery-bat-2014`

##### Elementary flows

###### Treatment air and water releases (`treatment_releases`)

Report combustion emissions, process off-gases, fugitive leaks, and final water releases by substance and compartment. Acid gas, sour water, and off-gas sent to another included unit remain internal transfers until their final treatment or release.

- Selected flow: Substance- and compartment-specific elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Measured or permit-consistent calculated releases attributable to the included treatment route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-refining-2015`; `eu-refinery-bat-2014`

### Process: Naphtha storage, blending, and refinery-gate loading (`storage_and_loading`)

#### Inputs

##### Product flows

###### Naphtha received into final handling (`naphtha_to_storage`)

Record conforming or blend-component naphtha entering the final tank and loading system, with internal transfers and recirculation identified.

- Selected flow: Naphtha `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net measured receipt mass after opening and closing inventory reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch`
- Sources: `eu-refinery-bat-2014`

###### Handling energy and ancillary materials (`handling_inputs`)

Record electricity or fuel for pumps and vapor controls, blanketing gas, and other ancillary materials consumed in final storage and loading.

- Selected flow: Carrier- or substance-specific handling input flows
- Flow property / unit: Mass or energy / kg, MJ, or kWh
- Amount rule: Metered or purchased quantity attributable to naphtha storage and loading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-refinery-bat-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dispatched reference naphtha (`reference_naphtha`)

This is the reference product transferred at the declared refinery-gate custody point. Off-spec material and internal returns are excluded from net saleable output.

- Selected flow: Naphtha `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Normalize the reconciled net custody-transfer mass of conforming naphtha to exactly 1,000 kg.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch`
- Sources: `unsd-cpc-3-2025`

##### Waste flows

###### Tank bottoms, off-spec disposal, and loading wastes (`handling_waste`)

Record tank bottoms, contaminated absorbents, unrecovered off-spec material, and other handling wastes by destination. Reworked or internally recycled material is an internal transfer, not waste.

- Selected flow: Waste-specific Tiangong flow selected for the documented waste and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed disposal quantity or inventory-supported mass balance for the represented period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-refinery-bat-2014`

##### Elementary flows

###### Storage and loading releases to air (`handling_air_emissions`)

Report working and breathing losses, loading displacement vapors, equipment leaks, and vapor-control residual emissions by substance. Keep recovered vapors as internal product transfers.

- Selected flow: Substance-specific elementary flows to air, including reported NMVOC and benzene where applicable
- Flow property / unit: Mass / kg
- Amount rule: Measured vapor-control outlet emissions or permit-consistent calculation using actual throughput, vapor properties, loading method, capture efficiency, control efficiency, and downtime.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable naphtha at the refinery gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_voc`
- Sources: `us-epa-ap42-petroleum-liquids-2008`; `eu-refinery-bat-2014`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | refinery units and directly metered streams | Avoid allocation by subdividing unit operations and assigning directly measured feed, energy, materials, wastes, and releases to the process and product that cause them. | `eu-pef-2021` |
| `allocation_physical_relationship` | inseparable multifunctional refinery operations | When subdivision or justified system expansion is not possible, use a documented, quantifiable physical relationship that reflects how shared inputs and releases relate to the co-product functions; do not select mass or energy content merely because it is convenient. | `eu-pef-2021` |
| `allocation_other_relationship` | operations with no defensible physical relationship | If another relationship such as economic allocation is used, document why subdivision, system expansion, and physical allocation were rejected; use prices at the co-production stage and test sensitivity to the allocation basis and price period. | `eu-pef-2021` |
| `allocation_internal_energy` | refinery gas, recovered heat, steam, hydrogen, and internal recycle | Keep recovered energy and internal transfers visible. Assign shared utility burdens consistently with the chosen allocation method and prevent credits or avoided burdens from being counted twice. | `eu-pef-2021`; `us-epa-ap42-refining-2015` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_refinery_mass_balance` | `refinery_separation` | refinery feed, separated naphtha, and co-products | custody meters, tank gauges, laboratory release records, and production ledger | stream_id; grade; opening_inventory; receipts; transfers; recycle; closing_inventory; saleable_output; meter_unit; density; reference_temperature | Calibrated mass meter or reconciled volume meter plus density, matched to tank and production records. | kg; source units retained | Per batch or shift; reconciled monthly | At least one representative 12-month period or every campaign for campaign production | All included separation units and connected tanks | Reconcile feed and outputs over a common period; investigate unexplained imbalance; normalize only after allocation. | calibration records; tank reconciliation; laboratory release certificate; signed production ledger |
| `cp_treatment_mass_balance` | `naphtha_treatment` | naphtha input, conforming output, recycle, off-spec, and co-products | unit meters, tank gauges, laboratory records, and operating log | stream_id; input_mass; output_mass; recycle_mass; offspec_mass; inventory_change; treatment_route; quality_result | Calibrated meters with batch or period mass-balance reconciliation. | kg | Per batch or shift; reconciled monthly | Same period as represented treatment campaign | Every included treatment unit | Reconcile all hydrocarbon inputs and outputs; retain off-spec and recycle separately. | meter calibration; laboratory analysis; operating log; reconciliation approval |
| `cp_treatment_inputs` | `naphtha_treatment` | hydrogen, treatment chemicals, water, and treatment utilities | flow meters, utility meters, issue records, purchase records, and stock ledger | input_id; quantity; concentration; meter_start; meter_end; opening_stock; receipts; issues; closing_stock; unit | Direct metering by carrier or substance preferred; otherwise reconcile purchases, issues, and stock change for the represented treatment unit. | kg; m3; kWh; MJ; source units retained | Continuous or per issue; reconciled monthly | Same period as represented treatment campaign | Every included treatment unit and its dedicated input storage | Calculate net consumption separately by carrier or substance; keep recovered or returned material distinct and apply shared-utility allocation only after the site balance. | meter calibration; invoice; issue record; stocktake; utility balance; allocation record |
| `cp_storage_dispatch` | `storage_and_loading` | naphtha receipts, tank inventory, blend transfers, and dispatch | tank gauges, custody-transfer meter, bill of lading, and release certificate | tank_id; opening_inventory; receipts; blend_transfers; returns; closing_inventory; dispatch_mass; grade; destination; custody_point | Custody-transfer mass meter or volume meter with stream-specific density and reference temperature. | kg; L or m3 with conversion evidence | Each transfer; reconciled monthly | Same reporting period as production | All final product tanks and loading systems | Net dispatch equals measured dispatch less returns, with inventory and internal transfers reconciled. | meter proving; gauge records; bill of lading; quality release certificate |
| `cp_energy_records` | `refinery_separation`; `naphtha_treatment`; `storage_and_loading` | electricity, steam, heat, fuel, and recovered energy | utility meters, fuel ledger, and engineering allocation record | carrier; meter_start; meter_end; heating_value; import; export; recovered_energy; unit; allocation_driver | Direct submetering preferred; otherwise documented engineering allocation from a complete site utility balance. | kWh; MJ; kg steam; source units retained | Continuous or shift readings; monthly reconciliation | Same period as represented production | Included units and shared utilities | Net each carrier separately; allocate shared utilities after site balance; do not net different carriers. | meter calibration; invoice; utility balance; allocation workbook |
| `cp_material_and_water_records` | `refinery_separation`; `naphtha_treatment` | water, hydrogen, catalysts, caustic, and treatment chemicals | purchase, issue, meter, and inventory records | material_id; quantity; concentration; opening_stock; receipts; issues; closing_stock; recycle; unit | Metered use or stock-change reconciliation by substance and concentration. | kg; m3; source units retained | Per issue or continuous meter; monthly reconciliation | Same period as represented production | Included units and storage | Net consumption equals opening stock plus receipts minus closing stock minus documented transfers or returns. | invoice; meter calibration; stocktake; specification or certificate of analysis |
| `cp_direct_emissions` | `refinery_separation`; `naphtha_treatment` | combustion, process, vent, flare, and fugitive emissions | continuous monitoring, stack tests, leak surveys, flare and activity records, and permit calculations | source_id; pollutant; measured_concentration; flow_rate; duration; activity; factor; control_efficiency; downtime; method | Use applicable direct measurement first; otherwise a documented regulatory or engineering method with current site activity data. | kg pollutant; source units retained | Monitoring frequency required by the applicable permit or method; at least each material operating mode | Same period as represented production, including startups, shutdowns, and abnormal events | All attributable direct sources and shared sources after allocation | Integrate measured releases over time; calculate other releases from activity and method; subtract only verified capture or recovery. | monitoring QA/QC; stack test; leak-detection record; flare log; permit report; calculation file |
| `cp_wastewater_releases` | `refinery_separation`; `naphtha_treatment` | wastewater and final releases to water | flow meter, composite sample, laboratory result, and treatment log | discharge_point; volume; pollutant; concentration; sample_time; detection_limit; treatment_route; receiving_compartment | Flow-proportional composite sampling where appropriate, paired with represented discharge volume. | m3; mg/L; kg | Permit frequency and after material process changes | Same period as represented production | All included discharge points and outsourced treatment transfers | Pollutant mass equals concentration times represented volume; handle non-detects by a disclosed rule; avoid double counting internal transfers. | accredited laboratory result; sampler log; flow-meter calibration; permit report |
| `cp_waste_records` | `refinery_separation`; `naphtha_treatment`; `storage_and_loading` | sludges, spent treatment materials, tank bottoms, and other wastes | weighbridge ticket, waste manifest, contractor record, and stock ledger | waste_id; composition; mass; date; origin_unit; destination; treatment_route; opening_stock; closing_stock | Direct weighing preferred; otherwise documented stock-change mass balance. | kg | Each shipment and monthly inventory | Same period as represented production, with campaign wastes annualized only when justified | All included units and temporary waste storage | Sum dispatched waste plus inventory change; keep recycling, recovery, treatment, and disposal routes separate. | weighbridge calibration; manifest; contractor certificate; stocktake |
| `cp_storage_voc` | `storage_and_loading` | tank, loading, and equipment-leak releases | tank parameters, throughput, vapor properties, loading mode, vapor-control monitor, and leak survey | source_id; throughput; liquid_temperature; vapor_pressure; vapor_molecular_weight; loading_mode; capture_efficiency; control_efficiency; downtime; measured_outlet; leak_rate | Direct monitoring where required; otherwise a documented AP-42 or permit-consistent calculation using site-specific inputs. | kg pollutant; source units retained | Each loading event or monthly calculation; continuous control monitoring where installed | Same period as represented dispatch | All naphtha tanks, loading racks, and associated equipment | Calculate by source and substance; add control residuals and uncontrolled downtime; keep recovered vapor internal. | control monitor; calculation file; leak survey; throughput and vapor-property records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_naphtha_output` | each included process and final reference output | Net conforming output = measured outbound transfer + closing conforming inventory - opening conforming inventory - returned or internally recycled quantity; adapt signs transparently to the site's ledger convention. | outbound transfers; opening inventory; closing inventory; returns; internal recycle; off-spec diversion | net conforming naphtha mass | `eu-pef-2021` |
| `calc_volume_to_mass` | liquid streams recorded by volume | Mass = observed or reference-temperature-corrected volume × density applicable to the same stream and temperature basis. | volume; density; measurement temperature; reference temperature; correction method | stream mass in kg | `unsd-cpc-3-2025` |
| `calc_normalized_inventory` | every inventory row | Normalized amount = allocated reporting-period row quantity ÷ net reporting-period conforming naphtha output × 1,000 kg. | row quantity; allocation factor; net conforming output | amount per 1,000 kg reference product | `eu-pef-2021` |
| `calc_pollutant_release` | calculated elementary flows | Pollutant mass = integrated measured mass rate, or activity × applicable factor adjusted by verified capture and control efficiency; method, factor version, operating mode, and downtime shall be retained. | monitoring data or activity; factor; capture efficiency; control efficiency; downtime | pollutant mass by source and compartment | `us-epa-ap42-refining-2015`; `us-epa-ap42-petroleum-liquids-2008`; `eu-refinery-bat-2014` |
| `calc_allocation_factor` | shared refinery unit or utility burdens | Allocation factor = the naphtha-specific value of the declared allocation driver divided by the sum of that driver across all co-products; apply the same factor consistently to shared inputs, wastes, and releases and document exceptions. | co-product quantities; physical or economic driver; prices and price period when used | naphtha allocation factor | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and intermediate naphtha streams | Retain grade, actual distillation range, treatment route, contractual quality results, density basis when used, and custody-transfer point; demonstrate that the output remains within the naphtha category and is not a separately classified fuel, solvent, or downstream chemical. | laboratory certificate; product specification; flow identity; batch and transfer records |
| `dq_temporal` | all foreground data | Use a common representative period, normally at least 12 months unless campaign production is justified; align material, utility, emission, wastewater, and waste data and disclose shutdowns, startups, and abnormal events. | period coverage table; operating calendar; reconciliation report |
| `dq_technology` | separation, treatment, storage, and control systems | Identify the actual fractionation, treatment, tank, loading, vapor-control, wastewater, and emission-control technologies and demonstrate that selected secondary datasets represent them. | process flow diagram; equipment list; technology-to-dataset mapping |
| `dq_geography` | upstream datasets and direct releases | Use geography-specific upstream supply and regulatory context where material; disclose mismatches between refinery location, crude origin, electricity, hydrogen, and other upstream datasets. | supplier origin; dataset metadata; geography gap assessment |
| `dq_completeness` | inventory and boundary | Reconcile total hydrocarbon mass, include material energy and water carriers, direct and fugitive emissions, wastewater releases, and wastes, and justify every exclusion. | mass and energy balances; completeness checklist; permit-to-inventory crosswalk |
| `dq_precision_uncertainty` | measured, calculated, and allocated values | Retain calibration, sampling, detection-limit, factor, allocation, and uncertainty information; distinguish measured data from calculated values and assess sensitivity to material allocation choices. | calibration and QA/QC records; calculation files; uncertainty and sensitivity results |
| `dq_representativeness` | completed foreground dataset | Assess technological, geographical, and time representativeness and precision, and report completeness and methodological consistency. | documented data-quality assessment consistent with `eu-pef-2021` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | The product flow UUID, Mass property UUID, Units of mass UUID, 1,000 kg reference amount, CPC boundary, grade, distillation range, treatment route, and custody-transfer point shall all be present and mutually consistent. | `unsd-cpc-3-2025` |
| `validate_process_coverage` | foreground process map | Separation and final storage/loading shall be present; treatment shall be present whenever the declared product route includes stabilization, hydrotreating, sweetening, fraction adjustment, or specification blending. | `us-epa-ap42-refining-2015`; `eu-refinery-bat-2014` |
| `validate_mass_balance` | each process and reporting period | Hydrocarbon inputs, outputs, recycle, inventory change, off-spec diversion, wastes, and unexplained imbalance shall be reconciled before normalization; unresolved material imbalance is an error. | `eu-pef-2021` |
| `validate_allocation` | multifunctional refinery operations and shared utilities | The selected allocation hierarchy, driver, factor, co-product set, price period if applicable, and sensitivity result shall be disclosed and applied consistently; double counting recovered energy or internal transfers is an error. | `eu-pef-2021` |
| `validate_direct_releases` | air, water, and waste inventory | Direct combustion and process emissions, flares, vents, fugitive leaks, storage/loading losses, final water releases, and treatment wastes shall be included by substance and destination or have a documented non-applicability determination. | `us-epa-ap42-refining-2015`; `us-epa-refinery-effluent-guidelines`; `eu-refinery-bat-2014` |
| `validate_period_and_quality` | completed foreground dataset | All foreground records shall cover a consistent declared period; calibration, sampling, calculation, representativeness, completeness, and uncertainty evidence shall be retained and material gaps disclosed. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground refinery-gate production dataset for naphtha. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product carbon footprint and LCA models needing refinery-gate naphtha as a feedstock, provided grade, route, geography, period, and allocation are compatible with the study. |
| excluded_use | Direct comparison of unlike naphtha grades or refinery routes without harmonization; representation of motor gasoline, jet fuel, kerosene, white spirit, pyrolysis gasoline, or downstream petrochemicals; use-phase combustion without a downstream model. |
| required_metadata | canonical PCR id; product flow UUID; grade and distillation range; treatment route; key quality specification; feed slate; refinery technology; geography; reference period; custody-transfer point; allocation hierarchy, driver and factor; included units; upstream dataset identities; data owner and review status |
| required_quality_disclosure | mass-balance closure; meter and laboratory QA/QC; temporal, technological and geographical representativeness; direct versus calculated data shares; emission and wastewater methods; allocation sensitivity; completeness; uncertainty; exclusions and unresolved gaps |
| update_trigger | Material change in feed slate, product grade or specification, fractionation or treatment route, tank/loading or control technology, allocation method, upstream supply, applicable permit method, or represented period; or a material data-quality finding. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, p. 155, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieved 2026-08-09 | CPC 33330 product boundary, naphtha identity, and distinction from motor gasoline. |
| `us-epa-ap42-refining-2015` | Official guidance (`official_guidance`) | U.S. EPA, AP-42 Section 5.1 Petroleum Refining, April 2015, https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf; retrieved 2026-08-09 | Refinery process decomposition, separation and treatment operations, utilities, direct and fugitive emission sources, wastewater treatment, and foreground inventory coverage. |
| `us-epa-ap42-petroleum-liquids-2008` | Official guidance (`official_guidance`) | U.S. EPA, AP-42 Section 5.2 Transportation and Marketing of Petroleum Liquids, June 2008, https://www.epa.gov/sites/default/files/2020-09/documents/5.2_transportation_and_marketing_of_petroleum_liquids.pdf; retrieved 2026-08-09 | Loading-loss calculation inputs, loading modes, vapor recovery, and storage/loading emission records. |
| `us-epa-refinery-effluent-guidelines` | Official guidance (`official_guidance`) | U.S. EPA, Petroleum Refining Effluent Guidelines, 40 CFR Part 419 overview, https://www.epa.gov/eg/petroleum-refining-effluent-guidelines; retrieved 2026-08-09 | Refinery product and process scope, wastewater boundary, discharge and treatment coverage. |
| `eu-refinery-bat-2014` | Standard (`standard`) | European Commission, Implementing Decision 2014/738/EU establishing BAT conclusions for the refining of mineral oil and gas, ELI http://data.europa.eu/eli/dec_impl/2014/738/oj; retrieved 2026-08-09 | Monitoring and inclusion of air and water emissions, distillation off-gas and sour-water treatment, product treatment, storage, loading, vapor recovery, waste, and control-system records. |
| `eu-pef-2021` | Official guidance (`official_guidance`) | European Commission, Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, ELI http://data.europa.eu/eli/reco/2021/2279/oj; retrieved 2026-08-09 | Functional unit and reference flow, completeness, multifunctionality hierarchy, allocation disclosure, data collection, representativeness, precision, and quality requirements. |
