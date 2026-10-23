---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.urea
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Additive-free bulk solid urea by total recycle synthesis

## 1. Scope and Applicability

This method covers additive-free bulk solid urea made by ammonia/CO2 synthesis, carbamate decomposition and total reactant recycling, followed by concentration/melting, prilling or granulation, cooling and screening, delivered at the factory gate. The product must meet its declared agricultural-urea grade and the verified reference-flow identity. End-use labels do not create new PCR identities. Create separate route datasets; do not combine equipment, recycle ratios, consumption or emission factors from prilling and granulation. Historical physical-process support: `ec-lvic-aaf-2007` §8.2.1, Figure 8.1, §8.2.1.1 and `epa-ap42-urea-1993` §8.2.1–8.2.3.

Excluded are UAN, other mixed fertilisers, supplied urea solutions, automotive urea solution, resins or melamine, specialised purification/recrystallisation products, controlled-release coatings, clay coating and intentional formaldehyde/anticaking conditioning. An actual formulation cannot be renamed additive-free by omitting an additive; introducing these substances leaves this scope. The producer original `yara-technical-urea` confirms a commercial prill option without anticaking agent, not a universal recipe or numerical acceptance specification.

The foreground unit receives external feedstocks and utilities and aggregates manufacture through bulk loading, gas controls and process-water desorption/hydrolysis. Link external steam/electricity production burdens through suitable upstream datasets. On-site boilers, CHP, inert-purge combustion and biological wastewater treatment require their own units; do not include their burdens here while omitting their fuels and emissions. Disclose ammonia/CO2 origin, interface and burden treatment; byproduct CO2 is not automatically burden-free.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.urea |
| classification_refs | CPC 3.0 34611 Urea; narrower scope; classification is not methodology identity |
| covered_products | Accepted additive-free uncoated bulk solid urea prills or granules |
| excluded_products | UAN, supplied solutions, coating/additive formulations, resins, melamine, specialised purification/recrystallisation routes |
| representative_product | Bulk urea prills meeting the actual agricultural grade and declared purity/moisture/biuret requirements |
| production_route | Liquid ammonia/CO2 high-pressure synthesis; total reactant recycle; concentration and particle formation; cooling/screening; declared gas/water treatment |
| market_state | Bulk solid at factory gate, measured as net physical supplied mass; residual water and impurities analysed separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply usable urea feedstock at factory gate, without substituting fertilisation or end-use service |
| How much | 1 kg accepted bulk solid urea in its supplied state |
| How well | Actual SKU/grade acceptance; disclose urea, total N, moisture, biuret, free ammonia, particle size and additive-free confirmation |
| How long or cycle | One factory-gate delivery within the same declared representative collection period; no downstream service lifetime |
| reference_flow_link | urea_finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and period; SKU/grade; feedstock origin/purity; CO2 carbon origin; total-recycle/stripping technology; prilling/granulation equipment; supplied moisture/impurities; no coating/additives; particle size; utility headers/background bases; controls; wastewater fate; bulk delivery interface |

Declare required qualifiers in metadata, process notes or reference-flow comments. The 1 kg is accepted net supplied product mass, not 1 kg pure urea or 1 kg nitrogen. Do not silently pool moisture states, grades or routes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net bulk product mass Q for the same period, corrected for stocks and returns; exclude transport vehicle tare. Report moisture and urea assay without changing the supplied-mass denominator. |
| gas_volume | feed_co2, passivation_air | Volume | m3 | Match actual and provider gas volume conventions using recorded absolute pressure, temperature, composition, wet/dry state and compressibility. Unknown compatibility makes that dataset link incomplete; no universal density or a secondary database mass coefficient is accepted. |
| steam_basis | steam_hp, steam_mp, steam_lp, steam_export | Mass | kg | Retain each actual header separately and reconcile condensate return. Net usable heat comes from measured steam/condensate enthalpy and the supplier boundary, not from a steam UUID or a generic MJ property. |
| electricity_unit | electricity | Net calorific value | MJ | The selected property uses the native label Net calorific value and energy unit MJ. Meter electrical energy and document kWh-to-MJ conversion, not a combustion heating-value assumption. |
| species_basis | nh3_air, nh3_water, ammonium_water, urea_water | Mass | kg | Distinguish molecular mass from kg N; preserve analysis definitions and molecular-mass conversion factors. NH3 and NH4+ must partition measured total ammoniacal nitrogen rather than each repeat it. |
| dust_bands | pm_fine_air, pm_coarse_air, pm_over10_air | Mass | kg | Use disjoint size-band masses. A cumulative PM10 result includes PM2.5; derive the coarse band only from measurements on a compatible sampling basis and retain uncertainties. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of external liquid ammonia, CO2, treated process water and utilities; record opening stocks of recycle liquor/seeds/water/steam |
| starting_condition_role | foreground_gate |
| product_classification_scope | Additive-free bulk solid urea; a narrower part of CPC 34611 |
| recursive_input_rule | Keep internal recovered NH3/CO2/carbamate, urea fines, condensate and steam as equal-quantity internal links; purchased urea of the same category requires its upstream link without infinite recursion through this unit |
| upstream_dataset_requirement | Link actual feedstock origin, quality, transport and supply energy, utilities and waste-treatment providers; unknown bases/missing providers are explicit dataset gaps |
| disclosure | Disclose stages, chosen finishing route, meter boundaries, internal/external interfaces, controls, abnormal operation, utility sources and discharge/reuse destinations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | urea_manufacture | Include receiving, compression/pumping, synthesis, stripping/decomposition and recovery, concentration, selected particle formation, cooling/screening, storage/loading and their gas/water controls. Phase records remain separately measurable within one foreground unit. | ec-lvic-aaf-2007; epa-ap42-urea-1993 |
| boundary_recycle | urea_manufacture | Record internal flow endpoints in the same physical unit/state. Recovered material is neither new purchased feed nor avoided burden. Include external losses and treatment transfers once. | ec-lvic-aaf-2007 |
| boundary_utilities | urea_manufacture | Retain steam-header imports, recoveries, exports and condensate return separately. Source Table 8.19 excludes particle formation from its energy example; collected energy must also include actual finishing, cooling and controls. | ec-lvic-aaf-2007 |
| boundary_water | urea_manufacture | Separate internal process-water reuse, external reuse product, wastewater-to-treatment and direct natural discharge. Biological treatment and its chemicals/emissions require a separate treatment unit; no universal recipe is given. | ec-lvic-aaf-2007 |
| boundary_scope | urea_manufacture | Confirm additive-free route from procurement/formulation records; isolate incompatible variants. Atmospheric source inventories include detected feed impurities; any additional actual substance must be a separately identified atomic row, not silently omitted or represented by total VOC/total nitrogen. | epa-ap42-urea-1993; ec-lvic-aaf-2007; yara-technical-urea |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| urea_manufacture | Urea manufacture through bulk delivery | required | Declared total-recycle additive-free solid route | Combined foreground unit with separate stage meters | urea_finished |

Physical sequence: receipt → synthesis/stripping and reactant recovery → concentration → chosen particle formation → cooling/screening → storage/bulk loading. Gas controls and process-water desorption/hydrolysis connect to their source stages. Reactant, scrubber liquor, fines and water/heat recovery form internal loops. Retain full physical stage mass/water/carbon/nitrogen balances; keep the allocated environmental-burden ledger separately.

### Process: Urea manufacture (`urea_manufacture`)

#### Inputs

##### Product flows

###### Fresh anhydrous liquid ammonia (`feed_ammonia`)

Fresh feed only, corrected for tank stock changes and measured purity; recycled ammonia is internal. Do not use an aqueous-ammonia record.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Fresh carbon dioxide reagent (`feed_co2`)

Separate compressed reagent CO2 from atmospheric emissions. The reference is Volume/m3; record pressure, temperature, wet/dry state, composition, compressibility and supplier volume convention. A mass balance uses measured composition and a documented conversion, never a database secondary coefficient as density. The native record is a Product flow with CO2 CAS and a captured/processed high-purity reagent description, but its name metadata says waste flow at point of generation. Retain this internal role/location conflict explicitly; it does not prove untreated composition, zero burden or the actual supply interface. Conditional physical identity requires the actual CO2 source, delivery/custody point, purity/state, capture/purification/compression boundary, upstream burdens and m3 convention to match. An unresolved provider boundary remains an incomplete link.

- Selected flow: Carbon dioxide, in chemical industry `25d43910-4875-4d29-9941-950138d9fae8`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Purchased medium-voltage electricity (`electricity`)

The selected identity is grid-average 1-35 kV AC supplied to the user. Use it only for that physical interface; a different voltage or dedicated generation needs its own verified identity/provider. Submeter compression, pumps, concentration, finishing, cooling and water treatment; avoid counting steam-driven and electrically driven compression together.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### High-pressure steam header (`steam_hp`)

One independently metered imported steam header in the declared high-pressure steam header. Record actual absolute/gauge pressure convention, temperature, dryness, condensate return and supplier reference quantity. The broad steam identity does not establish a pressure, energy amount or upstream dataset. An absent header has documented not_applicable status; distinct headers remain separate.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Medium-pressure steam header (`steam_mp`)

One independently metered imported steam header in the declared medium-pressure steam header. Record actual absolute/gauge pressure convention, temperature, dryness, condensate return and supplier reference quantity. The broad steam identity does not establish a pressure, energy amount or upstream dataset. An absent header has documented not_applicable status; distinct headers remain separate.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Low-pressure steam header (`steam_lp`)

One independently metered imported steam header in the declared low-pressure steam header. Record actual absolute/gauge pressure convention, temperature, dryness, condensate return and supplier reference quantity. The broad steam identity does not establish a pressure, energy amount or upstream dataset. An absent header has documented not_applicable status; distinct headers remain separate.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Treated process-water make-up (`water_makeup`)

Net externally supplied treated liquid water, split by its actual water-quality circuit in the data package. Cooling circulation is an internal volume, not water consumption. Record flushing, seal, scrubber, cooling and boiler-water demands separately in raw records; direct resource abstraction needs distinct source-specific elementary inputs and a water-supply unit.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### External compressed passivation air (`passivation_air`)

Conditional on air supplied across the foreground boundary for corrosion passivation or pneumatic use. Record O2 composition, pressure, drying and volume convention. Ambient finishing air is an operating measurement, not a purchased compressed-air exchange; on-site compression is covered by its electricity and raw air records without duplicate purchased air.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

##### Waste flows

No selected exchange at this boundary; separately record and verify an atomic exchange if actually present.

##### Elementary flows

No selected exchange at this boundary; separately record and verify an atomic exchange if actually present.

#### Outputs

##### Product flows

###### Accepted finished bulk solid urea (`urea_finished`)

One final reference output for combined synthesis, concentration and finishing. Intermediate solution, melt, seed particles and internally recovered offsize product remain in the physical stage balance. The reference UUID is not duplicated as an intermediate product output.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: `cp_product`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Exported recovered steam (`steam_export`)

Conditional on separately metered usable recovered steam delivered outside this unit. Retain its actual header pressure, temperature and quantity as a full physical output; internal heat reuse is not an export. Distinct exported headers require separate atomic exchanges.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Treated process water delivered for external reuse (`water_reuse_export`)

Conditional on accepted treated liquid water supplied to another user, with measured urea/ammonia content and receiver quality requirements. Internal condensate reuse stays internal. Do not call untreated effluent a saleable water product.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

##### Waste flows

###### Discarded solid urea fines (`waste_urea`)

Only non-recycled contaminated or off-spec solid urea sent to a named waste receiver. Record water content, urea, contamination, destination and treatment. Internally recycled fines are not waste outputs.

- Selected flow: Discarded solid urea fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Urea process condensate transferred for external treatment (`wastewater_transfer`)

Conditional on aqueous condensate/blowdown leaving this unit for further treatment, not a discharge to nature. Record volume, urea, NH3/NH4, total nitrogen, COD, pH, solids and receiving treatment conditions.

- Selected flow: Urea process condensate transferred for external treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

##### Elementary flows

###### Ammonia discharged to outdoor air (`nh3_air`)

Post-control atmospheric NH3 from synthesis/recovery, concentration, prilling/granulation, cooling, screening, storage and loading; include leaks and abnormal operation. Measure NH3 mass, not nitrogen mass. Recovered ammonia in scrubber liquid remains internal. Subcompartment is air unspecified only when a more precise release descriptor is unavailable.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Fossil-origin carbon dioxide vented to air (`co2_fossil_air`)

Actual non-recovered fossil CO2 vented after controls, by source; product-bound carbon and internal recycled CO2 are not emissions. Upstream ammonia-plant CO2 is outside this foreground unit and must be handled consistently in its provider inventory.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Biogenic-origin carbon dioxide vented to air (`co2_bio_air`)

Retain actual biogenic CO2 separately whenever carbon-origin evidence establishes it; a climate reporting convention never deletes this LCI exchange. Absence requires source evidence; an unknown origin remains pending rather than assigned to fossil or biogenic.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Particles of aerodynamic diameter at most 2.5 micrometres (`pm_fine_air`)

Net particulate mass crossing the atmospheric boundary in this disjoint aerodynamic-size band, after controls. Sample prilling/granulation, cooling, screening and loading sources separately. Do not add cumulative PM10 or TSP to these bands; collected dust returned to the process is not an atmospheric emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Particles larger than 2.5 and at most 10 micrometres (`pm_coarse_air`)

Net particulate mass crossing the atmospheric boundary in this disjoint aerodynamic-size band, after controls. Sample prilling/granulation, cooling, screening and loading sources separately. Do not add cumulative PM10 or TSP to these bands; collected dust returned to the process is not an atmospheric emission.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Particles larger than 10 micrometres (`pm_over10_air`)

Net particulate mass crossing the atmospheric boundary in this disjoint aerodynamic-size band, after controls. Sample prilling/granulation, cooling, screening and loading sources separately. Do not add cumulative PM10 or TSP to these bands; collected dust returned to the process is not an atmospheric emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Dissolved un-ionised ammonia released to freshwater (`nh3_water`)

Only the independently speciated NH3 fraction in direct discharge to natural freshwater after the included water treatment. Report molecular NH3 mass; ammonium and urea are separate. Total ammoniacal nitrogen cannot be copied simultaneously into NH3 and NH4 rows.

- Selected flow: ammonia `08a91e70-3ddc-11dd-96b0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Ammonium ions released to freshwater (`ammonium_water`)

Only the independently speciated NH4+ fraction of direct discharge, in kg of NH4+ rather than kg of N; record pH/temperature and the analytical conversion basis. This is not ammonium nitrate or ammonium sulphate product.

- Selected flow: ammonium `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Urea molecules released to freshwater (`urea_water`)

Actual residual CO(NH2)2 in direct treated-water discharge. Convert urea-N only using the documented stoichiometric molecular-mass relationship; do not add total nitrogen as another mass of urea. Do not record pollutant load inside externally transferred wastewater as this direct emission.

- Selected flow: urea `9abf6aa9-c299-47ae-b9d7-539d65107fd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Liquid-water discharge to natural freshwater (`liquid_water`)

Actual liquid effluent crossing the natural freshwater boundary, Volume/m3. The water carrier volume and contained pollutant masses are separate dimensions; the physical water balance counts this stream once. This is not freshwater abstraction.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Water vapour released to air (`water_vapour`)

Actual atmospheric water loss from concentration/cooling/finishing that is not condensed and reused. Reconcile reaction water, imported steam, make-up, condensate return, liquid outputs and stock change; do not treat closed-loop evaporation and condensation as two external exchanges.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Fossil methane in process vent (`methane_air`)

Conditional on measured fossil-origin methane impurity escaping through process vents after controls; source Table 8.10 is a case observation, not a default positive release. Verify origin and measured load; other carbon origins require their own atomic identity.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### Fossil carbon monoxide in process vent (`co_air`)

Conditional on measured fossil-origin CO impurity in process vent gas after controls. Do not use a CO2 record or an unrelated combustion factor; independently measured CO with its carbon origin enters the actual vent balance.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure the period quantity under the linked protocol and normalize by same-period accepted net output Q in kg; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

## 7. Allocation and Co-product Handling

These allocation rules are authored modelling requirements. The BREF supports the integrated material/energy context, not an ISO allocation hierarchy or market-price evidence.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_avoid | urea_manufacture | First subdivide by actual meters and process origin; assign attributable feeds, utilities and emissions directly. Internal recycling is not a coproduct. The selected foreground reference is urea, not ammonia manufacture. | ec-lvic-aaf-2007 |
| allocation_physical | urea_manufacture | Keep all physical coproduct outputs, stage balances and internal links at measured full quantity. Allocation shares act on shared environmental burdens, not physical output mass, water or heat. | ec-lvic-aaf-2007 |
| allocation_residual | urea_manufacture | For genuinely inseparable shared burdens with usable exported steam or accepted recovered water, document the causal relationship, basis and denominator and test sensitivity. If no defensible physical relationship exists, disclose a chosen economic allocation using actual comparable-period net values; no default share or price is prescribed. Reject unsupported shares rather than forcing a single-product balance. | ec-lvic-aaf-2007 |
| allocation_co2 | feed_co2 | Disclose CO2 provider capture/purification/compression energy and upstream allocation. Do not award a capture credit and also deduct product-retained carbon as a negative emission. Downstream release is outside the factory-gate boundary; disclose carbon provenance and quantity for later modelling. | ec-lvic-aaf-2007 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | urea_manufacture | urea_finished | weighing and assay | net delivered mass; opening/closing finished stocks; returns; SKU; grade; urea assay; total N; water; biuret; free NH3; particle size; formulation | Calibrated bulk scales, stock reconciliation and documented representative sampling/analysis; verify actual additive-free formulation. Divide raw period totals by same-period Q using normalize_period and the aggregation basis below. | kg; mass fractions | each lot; period reconciliation | same declared representative period including abnormal operation | same site and route; accepted bulk delivery | per 1 kg reference flow | scale calibration; assay methods and certificates; acceptance and stock records |
| cp_feed | urea_manufacture | feed_ammonia; feed_co2; passivation_air | receipt, meter and composition records | feed totals; stock changes; composition; purity; carbon origin; phase; T; absolute P; wet/dry basis; Z; supplier reference convention; air O2 | Calibrated mass/volume meters and tank reconciliation; validate gas conversion using sample composition and compatible equation/state definition. Divide raw period totals by same-period Q using normalize_period and the aggregation basis below. | kg; m3; composition; T; P | continuous/batch; regular assay | same period as Q | external feed interfaces and internal recycle meters distinguished | per 1 kg reference flow | meter calibration; gas certificates; supplier basis; conversion calculation |
| cp_energy | urea_manufacture | electricity; steam_hp; steam_mp; steam_lp; steam_export | meter and enthalpy records | electrical kWh; voltage; supplier/mix; each steam header mass, T, P, quality; condensate-return mass and enthalpy; stage duties; export user | Submeter compressors, synthesis/recovery, concentration, finishing/cooling, loading and controls. Use pressure/temperature/dryness and traceable steam properties for enthalpy balances; separate mass/heat and imports/exports. Divide raw period totals by same-period Q using normalize_period and the aggregation basis below. | kWh; MJ; kg; T; P | continuous or shift totals | same period as Q | all included stages and each external utility header | per 1 kg reference flow | meter checks; enthalpy method/version; provider reference boundary; separate condensate ledger |
| cp_water | urea_manufacture | water_makeup; water_reuse_export; water_vapour | water meter and stage balance | make-up and circulation; independently evidenced net reaction-water formation/consumption; stage assays and reaction extents/model inputs; steam-derived water; stream density/composition and fraction bases; flush/seal/scrubber water; internal reuse; evaporation; condensate return; opening/closing liquid/WIP stocks; external receiver and quality | Meter external water interfaces and collect stage assays/state records for synthesis, included hydrolysis and other actual reactions. Determine reaction-water terms through assay_balance from independent actual reaction-extent evidence, not the residual needed to close this water ledger. Reconcile measured steam-derived/carrier water, liquid outputs, atmospheric losses and stock changes with uncertainty; record receiver acceptance. Retain raw complete-pool totals and apply normalize_period once. | kg; m3; composition | continuous/batch; period balance | same period as Q | cooling, concentration and treatment circuits | per 1 kg reference flow | meter checks; assay and reaction-model basis; physical water ledger; reaction-extent and measurement uncertainty |
| cp_waste | urea_manufacture | waste_urea; wastewater_transfer | dispatch and receiver records | wet/dry mass; volume; water; urea; NH3/NH4; total N; COD; pH; solids; contaminants; receiver; treatment; transport | Weigh discarded solids and meter transferred condensate; representative composition analysis and receiver/treatment acceptance. No unverified generic waste UUID substitutes for origin/fate. Divide raw period totals by same-period Q using normalize_period and the aggregation basis below. | kg; m3; mg/L; mass fractions | each dispatch; representative samples | same period as Q | each external waste-to-treatment interface | per 1 kg reference flow | weighbridge/meters; analytical QA; transfer receipts and destination contract |
| cp_air | urea_manufacture | nh3_air; co2_fossil_air; co2_bio_air; pm_fine_air; pm_coarse_air; pm_over10_air; methane_air; co_air | emission monitoring and vent balance | source; post-control concentration; dry/wet gas flow; T/P; duration; particle cumulative/band definition; NH3 molecular basis; fossil/biogenic carbon evidence; impurities; control state; abnormal events | Measure each external atmospheric source after controls with matched concentration/flow conditions and duration; include fugitive and event inventories with justified methods. Size-band sampling and control inlet/outlet distinctions are retained; no historic factor copied as a default. Divide raw period totals by same-period Q using normalize_period and the aggregation basis below. | kg; mg/m3; m3; time | continuous or representative tests plus events | same period as Q including startup/shutdown | synthesis/recovery, concentration, finishing, cooling, screening, storage/loading and controls | per 1 kg reference flow | test method/calibration; gas state conventions; source map; detection limits; control operation; uncertainty |
| cp_effluent | urea_manufacture | nh3_water; ammonium_water; urea_water; liquid_water | final discharge flow and speciation analysis | direct discharge volume; receiving body; pH/T; NH3; NH4; urea; total N; COD; sampling; detection limits; treatment bypass | Flow-proportional representative sampling at the final natural-discharge interface after included treatment; establish molecular/species versus N basis and speciation without duplicating total ammonia. Wastewater-to-treatment uses cp_waste instead. Divide raw period totals by same-period Q using normalize_period and the aggregation basis below. | m3; mg/L; kg; pH; T | continuous flow; representative samples and bypass events | same period as Q | direct freshwater discharge only | per 1 kg reference flow | laboratory methods; flow calibration; molecular factors/speciation; receiver and treatment boundary |

Raw record units may differ; retain the selected native reference property/unit and basis-compatibility evidence after conversion. Unmeasured amounts receive no default. Investigate actual impurities/auxiliaries and add separate atomic exchanges when present; approximate collection totals do not establish completeness. Each protocol retains unnormalized totals for the same complete site, route and supplied-state/grade reporting pool, including failed/zero-output runs, rework, cleaning, starts/stops and opening/closing work in progress with its attributable burdens. The aggregation basis denotes the final inventory basis; apply normalize_period once to raw totals, not again to an already normalized protocol result.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For each non-reference exchange i, q_i = X_i / Q exactly once. X_i is the raw attributable stock-corrected exchange for the complete reporting pool defined above, before per-kg division; Q is accepted net supplied urea kg matched to that same site, route, grade/state and pool. Reconcile receipts, production/delivery, returns, opening/closing stocks and WIP with their attributable burdens; do not charge current loads to unmatched shipments or omit failed/zero-output/rework burdens. Prior-period stock requires its matched prior burdens or exclusion from Q. A zero-output subperiod retains its burdens in a justified complete pool with positive Q; if the complete pool has no positive Q, report the per-kg result unavailable, never zero burden or division by zero. Credit each final accepted net lot once after returns and reacceptance; internal rework is not additional product output. Keep urea_finished exactly 1 kg; allocation does not scale physical outputs or alter Q. | period exchange; Q; cp_product; applicable row protocol | exchange per 1 kg reference flow, or unavailable when no positive matched Q exists | ec-lvic-aaf-2007 |
| assay_balance | feed_ammonia, feed_co2, urea_finished, waste_urea, wastewater_transfer | For a physical mass measured in kg, species kg = physical kg times measured species mass fraction. For feed_co2 recorded in m3, first establish mass from measured gas composition, absolute P, T, wet/dry state, Z and a documented compatible conversion, or obtain species moles from the validated molar/volume-fraction basis and convert with documented molecular masses. Never multiply m3 directly by a mass fraction to obtain kg. Convert liquid volume using measured stream density/state before applying mass fractions; retain full solution mass, assayed constituents and carrier water separately. These component accounts do not replace the actual supplier reference quantity or supplied-product denominator. Conserve total mass and relevant C/N/H/O across all inputs, outputs and stage stocks. Separately establish actual net water formation/consumption and dry-species conversion from stage assays and an independently supported reaction-extent model, including urea synthesis, included hydrolysis and actual side reactions. Do not determine those terms by forcing water or dry-component residuals to close. Stoichiometry is a consistency test, not a yield, complete-conversion or actual-consumption default. | assays and fraction bases; molecular masses; verified gas/liquid conversions; actual reaction-extent evidence; stage stocks; cp_feed; cp_product; cp_water; cp_energy; cp_waste; cp_air; cp_effluent | species kg, conserved mass/element ledger and independently evidenced reaction-water terms with uncertainty | ec-lvic-aaf-2007 |
| air_load | nh3_air, co2_fossil_air, co2_bio_air, pm_fine_air, pm_coarse_air, pm_over10_air, methane_air, co_air | For compatible gas-state definitions, source load = sum of concentration times gas volume over matched intervals with explicit unit conversion. Reconcile controlled outlet, fugitives and events once; retain detection-limit treatment and uncertainty. | source concentration; volume; duration; cp_air | post-control species/band load | epa-ap42-urea-1993; ec-lvic-aaf-2007 |
| effluent_load | nh3_water, ammonium_water, urea_water | Species load = sum of species concentration times discharge volume for matched intervals. Convert mg/L with m3 to kg explicitly; convert kg N to molecular species only with supported assay/speciation and molecular-mass ratios. | volume; concentration; assay basis; pH/T; cp_effluent | direct freshwater species mass | ec-lvic-aaf-2007 |
| energy_balance | steam_hp, steam_mp, steam_lp, steam_export | Usable steam heat = incoming mass times incoming specific enthalpy minus actual condensate-return heat, with the measured system boundary and losses disclosed. Keep electrical energy separate; kWh times 3.6 gives MJ. Do not sum internal recovery and external supply twice. | steam/condensate meters; state; enthalpy basis; cp_energy | header mass/heat balance and metered electricity | ec-lvic-aaf-2007 |
| allocation_ledger | all inventory rows | Apply documented shares only to inseparable shared environmental burdens after direct attribution. Shares sum to one for their declared burden pool. Retain all physical coproduct quantities in an unallocated ledger; no fixed share is specified. | direct attribution; causal/economic basis; burden pool; output quantities | separate allocated burden ledger | ec-lvic-aaf-2007 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify physical species, phase, formulation, route, medium, primary property and units; a UUID is identity evidence only. Record unresolved waste identity and basis/provider gaps. | direct identities; supplier/receiver specification |
| period | all inventory rows | Use one declared representative period and site/route; disclose production rate, startup/shutdown, seasonal finishing conditions and missing records. Never import one-factory historical consumption as a universal amount. | production/meter logs; assay and source scope |
| closure | urea_manufacture | Reconcile physical mass, nitrogen, carbon, water and each steam header, including opening/closing stocks, reaction water, products, losses and all destinations; investigate residuals against measurement uncertainty, not an invented tolerance. | separate stage physical ledger; uncertainty budget |
| completeness | all inventory rows | Check actual formulation, passivation, cleaning, maintenance and gas/effluent impurities. Add each additional actual chemical, waste or emission as a separate verified atomic exchange; unknowns cannot be declared zero or complete. | site process map; procurement and source monitoring |
| background | product inputs; waste outputs | Match background supply/treatment state, grade, reference quantity, geography/period and allocation. Unconfirmed gas/steam bases or receiving conditions make the dataset link incomplete. | provider metadata; meter and treatment compatibility |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | urea_manufacture | Reject supplied solutions, UAN, incompatible grades/routes and intentional coating/conditioning additives. Verify reference UUID/state, product qualifiers and one finished reference output. | unsd-cpc3-urea; yara-technical-urea |
| validate_denominator | all inventory rows | Reference amount, inventory normalization and linked protocol aggregation all use 1 kg accepted supplied urea and the same measured Q. Reject purity- or N-normalized values mislabeled as supplied-product mass. | ec-lvic-aaf-2007 |
| validate_atomic | all inventory rows | Each row is one atomic exchange. Check UUID species/route/CAS, native property/unit and Chinese name; reject correction flows, near-name substitutes and incompatible media. Blank identity remains explicit; verified identity does not establish a complete provider link. | ec-lvic-aaf-2007 |
| validate_balances | urea_manufacture | Require physical mass/water/N/C/steam closure evidence and equal-quantity internal links. Verify allocation burdens separately; never multiply physical coproduct outputs by allocation shares. | ec-lvic-aaf-2007 |
| validate_emissions | urea_manufacture | Cover actual post-control vents, finishing and loading dust, leaks/events, evaporated water and final effluent/transfer fate. Use disjoint dust bands, molecular nitrogen species and fossil/biogenic carbon provenance; do not infer default positive emissions or delete measured biogenic CO2. | ec-lvic-aaf-2007; epa-ap42-urea-1993 |
| validate_gaps | all inventory rows | Before claiming dataset completeness, resolve all applicable waste UUIDs, actual SKU/assays, utility basis/provider matches, additional detected species and receiver conditions. Non-detect, measured zero, absent interface and unknown quantity remain distinct; undisclosed gaps fail completeness. | ec-lvic-aaf-2007 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | upstream urea input with known grade and route |
| allowed_use | actual declared additive-free solid urea, factory-gate boundary and quality limitations |
| excluded_use | no end-use fertilisation/SCR service, UAN/supplied solutions, additive formulation, incompatible technology or unresolved basis links |
| required_metadata | product qualifiers; route/site/period; physical reference basis; all applicable atomic flows; physical unallocated and allocated-burden ledgers; background/treatment interfaces |
| required_quality_disclosure | measured/calculated/estimated distinction; representativeness, detection limits, uncertainty, missing items and basis-match state; future protocols are not existing measured data |
| update_trigger | changes in SKU/formulation, purity/moisture, synthesis/finishing technology, headers/providers, controls or destination |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ec-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007. [Official full text](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf), §1.5.1 (printed 33/PDF 61), §8.2.1 and Figure 8.1 (324–326/PDF 352–354), Tables 8.5–8.10 (329–335/PDF 357–363), §8.4.12–8.4.13 (357–359/PDF 385–387), §8.5 (362/PDF 390). | Historical synthesis/recovery/particle-formation and water-treatment boundary; separate utility/state and balance measurements. Cases/BAT levels do not supply universal amounts, yield, recipe or current legal thresholds. |
| epa-ap42-urea-1993 | official_guidance | US EPA, AP-42 §8.2 Urea, July 1993, reformatted January 1995. [Official full text](https://www.epa.gov/sites/default/files/2020-09/documents/8.2_urea.pdf), §8.2.1–8.2.3, Figure 8.2-1, pp.8.2-1–8.2-3. | Independent historical process/source map; finishing dust, ammonia and conditioning distinction. Route-specific/controlled factors and old factory observations are not defaults. |
| yara-technical-urea | literature | Yara International, [Technical Urea](https://www.yara.com/industrial-nitrogen/base-chemicals/technical-urea/), sections “You can get Urea in two forms” and “How we produce Urea”, accessed 2026-10-13 UTC. | Producer confirmation of prill/granule and additive-free prill option, ammonia/CO2 manufacture, solid versus solution state. No SKU/quantity defaults. |
| unsd-cpc3-urea | official_guidance | UNSD, [CPC Version 3.0 subclass 34611 — Urea](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34611) and class 3461 breakdown, accessed 2026-10-13 UTC. | Classification location and distinction from subclass 34616 UAN; narrower scope recommendation, not proof of complete classification coverage. |
