---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.dry-retort-peat-tar-industrial-fuel
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Recovered crude peat tar for industrial fuel supply

## 1. Scope and Applicability

This method covers one declared grade of crude organic peat tar recovered by condensation and phase separation from exclusive peat feed in externally heated sealed dry retorts, accepted as an industrial fuel intermediate at the declared recovery gate for a receiving fuel user beyond the joint recovery boundary. Peat coke and noncondensable gas are joint physical outputs. USGS describes the historical European retort/recovery route; Aho independently measures a peat-tar fraction in laboratory pyrolysis. These sources establish physical route and phase distinctions, not current commercial availability or a universal fuel grade (`usgs-peat-retort-1910`, `suo-peat-pyrolysis-1987`).

Exclude coal, lignite, wood and mixed-feed tar; gasification/hydrogen-assisted liquids; fast-pyrolysis routes without demonstrated equivalence; peat pitch, distilled oils, extracted chemicals, emulsified/blended fuels, aqueous condensate and waste tar as reference products. Chemical-feedstock/preservative tar and further distilled fuel fractions need a separately reviewed reference scope. The declared scope requires actual receiving-user acceptance for fuel use, measured as-supplied water/solids and calorific properties. It neither approves combustion nor substitutes one kilogram for an equal useful-heat service. Historical recipes, yields, profitability and nitrogen fractions are never defaults.

The Minnesota DNR 1981 program report defines peat tar as the pyrolysis condensate and records its use as coking-process fuel in Finland and Germany, separately from tar refined for chemical uses (`minnesota-peat-tar-fuel-1981`). This is official historical reporting of the tar fuel role, not a plant combustion test, an external-sale record, a current market or a universal crude-organic fuel specification. It does not establish the exact preparation or acceptance state of every reported tar. USGS and Aho support the recovery route/phase evidence; their coke-fuel or laboratory passages do not establish crude-tar fuel use. Actual route, phase, preparation and receiver compatibility still require foreground records.

Tar burned within the declared joint retort/recovery boundary is an internal fuel loop, including its actual heat, air, water, species emissions and residues. It is neither reference output nor an additional product credit. A separate receiving combustion unit may be outside this boundary only with a declared transfer point, actual operator/ownership and responsibility boundaries, measured handover at both ends and traceable carried burdens; common ownership alone neither proves nor forbids such a transfer. A sale is not presumed. The reference gate excludes only downstream combustion of delivered reference tar, not firing that supplies the joint recovery process.

The whole-product native Fuel identity is broader than this qualified tar. Its name/comment do not specify feed, route or liquid state; consequently peat origin, recovered crude organic phase, acceptance endpoint and fuel destination are mandatory metadata. Its jet-fuel classification conflicts with that generic physical description and must be disclosed; it does not make this tar jet fuel or supply a provider, emission factor or approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.dry-retort-peat-tar-industrial-fuel |
| classification_refs | CPC 3.0 33220; narrower product and route boundary |
| covered_products | Grade-separated recovered crude peat tar accepted for industrial fuel use |
| excluded_products | Other feedstock tars; refined oils/pitch; aqueous phase; waste tar; blended fuels; chemical-only grades |
| representative_product | Unblended crude organic peat tar, one declared water/solids grade, unpackaged at plant |
| production_route | Peat receipt/drying; sealed indirect-heated dry retort; condensation; organic/aqueous phase separation; crude-tar acceptance and storage |
| market_state | Recovery-gate fuel intermediate; actual receiving unit and handover declared; no presumed external sale; delivered-tar downstream use excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply recovered crude peat tar accepted for industrial fuel use; no assumed useful-heat equivalence |
| How much | 1 kg net accepted as-supplied crude tar, excluding free separated aqueous phase and container tare |
| How well | Declared water-specific test, solids, density/temperature, gross/net calorific test basis and receiving-user fuel specification; no fixed grade threshold |
| How long or cycle | One identified production cohort through first acceptance; later storage services remain linked to that cohort |
| reference_flow_link | accepted_peat_tar |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fuel `7ea177ac-eb74-4551-99ea-d015070bfb50` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Exclusive peat origin and deposit/land history; sealed indirect retort; condensation/phase endpoint; crude/unblended state; water/solids and sampling methods; fuel acceptance, receiving unit and handover boundary; density/temperature; calorific test basis; reporting cohort/period; gate; upstream/provider compatibility; generic-flow classification debt |

Every qualifier must be present in the foreground package. The reference is mass of the whole accepted product, not dry organic matter, phenol, carbon or delivered MJ. Generic Fuel must never automatically select a jet-fuel or petroleum provider.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net weighing or validated tank mass from same-state volume and density under cp_acceptance. One reference output is 1 kg. Retain raw and allocated records separately. |
| phase_water | peat_feed; accepted_peat_tar; aqueous_condensate | Mass | kg | Use water-specific, matrix-valid testing for each phase. Dry matter = wet mass × (1 − measured water fraction). Tar drying loss includes organic volatiles and is not water; no density or water default. |
| energy_state | electricity; natural_gas; steam | Energy; Mass; Volume | MJ; kg; m3 | Record kWh separately; kWh × 3.6 = MJ. Gas volume needs actual T, absolute P, wet/dry and compressibility; steam needs mass and supply/return enthalpy. No nominal calorific value conversion. |
| species_mass | air emissions | Mass | kg | Retain each actual species and receiving medium. Carbon, nitrogen and sulfur analysis cannot stand for CO2, NOx or SO2 emission quantities; distinguish NOx convention and nondetect limits. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received uncarbonised peat of traceable deposit and measured water state |
| starting_condition_role | Foreground receipt gate, not permission to omit peatland or upstream extraction |
| product_classification_scope | Recovered crude peat tar for fuel, sealed-retort subset |
| recursive_input_rule | Separate purchased same-category tar with upstream burdens from internal recycle; preserve gross return links and count reference acceptance once |
| upstream_dataset_requirement | Compatible peat extraction, drainage/land occupation/continuing soil fluxes/restoration and transport; actual utility providers; missing coverage remains explicit |
| disclosure | Feed/deposit history; site diagram; recovery endpoint; gas/tar fuel loops; co-products; treatment receivers; stocks and incomplete native/provider scope |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | peat_tar_recovery | Include receipt, feed drying, retort startup/heating, vapor handling, condensation, phase separation, acceptance, storage and pumping. Document actual equipment equivalence to the historical route; do not assume modern prevalence. | usgs-peat-retort-1910 |
| boundary_phase | all outputs | Keep recovered organic tar, separately removed aqueous phase, coke and gas distinct. Condensate entrainment/dissolved organics and actual losses stay in physical ledgers. Further tar refining or wastewater treatment needs added complete units before coverage claims. | usgs-peat-retort-1910; suo-peat-pyrolysis-1987 |
| boundary_fuel_return | peat_tar_recovery; accepted_peat_tar | Separate gross recovered tar into boundary-crossing accepted reference tar, internal coking fuel, waste/rework and stock. Internal tar firing belongs to the joint process with measured fuel/air and actual species, heat, water and residue ledgers; it creates no Q or export credit. A separately bounded receiving unit requires measured two-end handover, operator/ownership/responsibility and carried-burden evidence. Never omit actual firing by moving a paper gate; do not infer sale, preparation, grade or combustion factors from the historical report. | minnesota-peat-tar-fuel-1981 |
| boundary_land | peat_feed | Retain deposit, drainage dates, water table, land occupation, extracted carbon, continuing CO2/CH4/N2O/waterborne carbon and restoration interfaces with compatible upstream datasets. No automatic carbon neutrality, instant oxidation of all extracted peat or restoration credit. |  |
| boundary_utilities | support exchanges | Record actual purchased water separately from any direct abstraction in its real medium. Preserve gas returned to firing, purchased fuel, export and flaring as mutually exclusive branches. Add each actual cleaning, packaging, maintenance and infrastructure exchange or justify a disclosed burden cut-off without deleting physical balances. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| peat_tar_recovery | Joint peat dry distillation and crude-tar recovery/acceptance | required | Actual stated route; grade-separated fuel-tar campaign | foreground | 1 kg accepted crude peat tar |

### Process: Joint dry retort and tar recovery (`peat_tar_recovery`)

#### Inputs

##### Product flows

###### Uncarbonised peat feed (`peat_feed`)

Weigh actual wet feed and sample water/carbon/ash; include forming/drying inside gate.

- Selected flow: Received uncarbonised peat
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_material
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Purchased electricity (`electricity`)

Read dedicated meters or justified shared-meter drivers for drying, retort auxiliaries, cooling, separation, pumps and storage.

- Selected flow: Electricity, actual supplier at plant
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_energy
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources:

###### Supplementary fuel mixture (`natural_gas`)

Conditional on actual startup/supplemental firing; record gas state and provider quantity definition.

- Selected flow: Pipeline natural-gas fuel mixture
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_energy
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources:

###### Purchased process steam (`steam`)

Conditional on actual service; collect delivered mass, pressure and enthalpy return rather than infer from tar yield.

- Selected flow: Saturated process steam, actual pressure
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_energy
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources:

###### Purchased cooling make-up water (`cooling_water`)

Meter external make-up; internal circulation is a separate internal ledger, not new water consumption.

- Selected flow: Cooling-circuit make-up water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_water
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

###### Cleaning water (`cleaning_water`)

Conditional on actual cleaning; meter separate from cooling and preserve resulting waste route.

- Selected flow: Equipment cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_water
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

###### Maintenance lubricant (`lubricating_oil`)

Conditional on actual oil; reconcile purchases/stocks/replacements against duty and service period.

- Selected flow: Mineral lubricating oil for pumps
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_support
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_support`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fuel-tar reference output (`accepted_peat_tar`)

1 kg; qualifying crude organic peat tar accepted once for supply to an actual fuel user beyond the joint recovery boundary. Exclude internally fired tar and its stocks from this reference output; include actual internal firing in the joint-process inventory. Further refining/blending and delivered-tar downstream combustion are excluded.

- Selected flow: Fuel `7ea177ac-eb74-4551-99ea-d015070bfb50`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources: `usgs-peat-retort-1910`; `minnesota-peat-tar-fuel-1981`

###### Joint peat-coke output (`peat_coke`)

Conditional on actual peat-coke grade production; weigh this solid independently of half coke and retain water/ash/carbon tests.

- Selected flow: Peat coke, actual single grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_material
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Joint half-coke output (`peat_half_coke`)

Conditional on actual half-coke grade production; weigh this solid independently of coke and retain water/ash/carbon tests.

- Selected flow: Peat half coke, actual single grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_material
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Exported gas output (`peat_gas_export`)

Only externally delivered gas; measure composition/state/density and exclude return-to-fire, flare and leaks.

- Selected flow: Exported noncondensable peat-retort gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_material
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

##### Waste flows

###### Separated aqueous phase (`aqueous_condensate`)

Measure separately removed water-rich phase including dissolved/entrained organics; document treatment acceptance, not an elementary discharge.

- Selected flow: Peat-retort aqueous condensate to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_water
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: `usgs-peat-retort-1910`

###### Rejected organic phase (`waste_tar`)

Measure actual rejected/discarded organic phase; distinguish off-spec rework, co-product sale and disposal.

- Selected flow: Waste crude peat tar for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_material
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `usgs-peat-retort-1910`

###### Removed separator solids (`separator_sludge`)

Only actual removal; wet/dry, retained tar/water and receiver remain explicit.

- Selected flow: Peat-tar separator sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_material
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources:

###### Spent maintenance oil (`spent_oil`)

Conditional actual replacement; trace actual collection receiver and oil loss without assuming all input becomes waste oil.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_support
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_support`
- Sources:

##### Elementary flows

###### Peat-derived carbon dioxide to air (`co2_peat`)

Measure stack/vent emissions and trace carbon origin; retain unknown fractions. Peat reporting category does not decide LCI fossil/biogenic identity.

- Selected flow: Carbon dioxide from peat carbon to outdoor air, origin convention unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_air
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Auxiliary-fuel carbon dioxide to air (`co2_auxiliary`)

Record actual auxiliary contribution disjoint from peat carbon and inlet ambient CO2; no generic carbon factor.

- Selected flow: Carbon dioxide from auxiliary fossil fuel to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_air
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Carbon monoxide to air (`co_air`)

Integrate measured concentration and compatible gas flow across all operating states, with traced origins.

- Selected flow: Carbon monoxide to outdoor air, source fractions retained
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_air
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Methane to air (`ch4_air`)

Include actual leaks/vents/unburned gas; internal gas transfer is not an air emission.

- Selected flow: Methane to outdoor air, source fractions retained
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_air
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Phenol to air (`phenol_air`)

Quantify this species from condensation, tank breathing and relevant outlets; total phenols/VOC are not phenol mass.

- Selected flow: Phenol to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_air
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `usgs-peat-retort-1910`

###### Nitrogen oxides to air (`nox_air`)

Specify NOx expressed as NO2 or other actual convention; no duplicate NO/NO2; Aho nitrogen partition is not a NOx factor.

- Selected flow: Nitrogen oxides to outdoor air, explicit analytical convention
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_air
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `suo-peat-pyrolysis-1987`

###### Sulfur dioxide to air (`so2_air`)

Measure actual species; sulfur in tar, coke, water and residues is not assumed oxidized.

- Selected flow: Sulfur dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_air
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Particulate matter to air (`pm_air`)

Measure actual total particulate definition; any size-resolved additions must partition this total without double counting.

- Selected flow: Unspecified-size total particulate matter to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_air
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Water vapor to air (`water_vapor`)

Track dryer/retort/combustion water, inlet humidity and reaction water separately with declared gross/net convention.

- Selected flow: Water vapor to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; preserve physical and allocated burden amounts separately; cp_water
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | all outputs | Preserve unallocated wet/dry physical mass, water, C/H/O/N/S, mineral and energy ledgers before any burden allocation. Coke, gas, aqueous phase, tar, residues and stocks remain actual quantities; allocation never changes physical output or elemental mass. | usgs-peat-retort-1910; suo-peat-pyrolysis-1987 |
| allocation_hierarchy | shared burden pools | PCR policy adapts the GHG Product Standard subdivision/physical/economic concepts to LCI without claiming full standard conformity. Subdivide separately metered tar recovery/acceptance/storage services. Allocate residual shared burdens by a demonstrated causal physical driver; if unavailable use a justified explicit economic scenario with actual quantities/net gate values, matched period, uncertainty and sensitivity. No universal mass, heat-content or economic share. | ghg-product-allocation-2011 |
| allocation_destinations | peat_tar_recovery | Use receiver contracts and acceptance to distinguish co-product from waste. Treatment fees are burdens, not negative sale prices creating credits. Keep retained/returned gas and tar within internal recovery, never count the same mass as external output and internal fuel. Internal tar use carries no separate co-product share or avoided-fuel credit; retain its actual joint-process burdens, emissions and heat once. No automatic substitution or avoided peat/coke/fuel credits. | ghg-product-allocation-2011 |
| allocation_stock | raw/WIP/FG and accepted cohorts | Retain burden vectors separately for raw stock, work in progress and finished goods, with opening, additions, transfers, losses and closing. Carry inherited burdens with old material; assign current services by causal duty and original accepted cohort. Never divide old-stock services by unrelated new production or reset burdens at acceptance. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The authoritative Q is the independently measured net quantity summed once over unique first-acceptance events at the fixed reference gate, with each cohort quantity locked to its original event. Every dispatch-plus-closing-finished-stock expression below is a two-term bridge valid only where there are no other post-acceptance net exits. In the general case reconcile Q = D_new + F_new_close + L_new on the original acceptance-quantity basis: L_new separately traces accepted material lost, disposed of or transferred to another later state and absent from both D_new and F_new_close. The three sets are disjoint net parcel states, not gross movements. Internal loops, returns, rework, retests and temporary state changes cannot count the same accepted material again. Preserve actual event quantities and any unresolved bridge instead of reducing Q to conceal a loss. Acceptance Q is a reference-event account, not another external physical output added to dispatches or wastes. Subsequent services retain the original positive cohort Q; missing original quantities prohibit normalization.

### Data Collection Protocols

All protocols use one explicitly dated site and campaign, including startup, shutdown, leaks, grade changes and inventories. Let Q be positive new-cohort net first-acceptance tar mass: new accepted tar transferred beyond the joint recovery boundary plus new accepted closing FG destined for that qualifying transfer, each unique lot once. Exclude internally fired tar and its reserved stocks, opening FG, old deliveries, returns and retests; rejected/WIP material is not yet accepted output. Q is not gross dispatch or net stock movement. Record actual liquid composition/temperature and tank heel. Later storage/reheating/handling services for an old cohort divide by its original positive accepted quantity, not current new Q. Keep raw numerator, original cohort quantity, inherited burden vectors and all losses even where normalization cannot be completed. Missing or zero denominators remain raw and inconclusive. Each card aggregation below produces per 1 kg reference flow only after this reconciliation and applicable allocation.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | peat_tar_recovery | accepted tar and first-acceptance Q | Calibrated scale/tank and acceptance ledger | lot/cohort; first-acceptance date; gross/tare/net kg; water/solids; density/T; calorific test/basis; fuel receiver/specification; handover point/operator/ownership/responsibility; measured two-end transfer; internal fuel and reserved stocks; new qualifying dispatch/closing FG; opening FG; returns/retests; rejects; inherited burden vector | Calibrated net weighing or traceable same-state volume × density; water-specific representative sampling and actual fuel acceptance/test documents; unique lot reconciliation. | kg | Each first acceptance and stock/return transaction | Complete declared campaign and cohort lifetime services | Same site gate plus explicitly linked upstream/receiver interfaces | per 1 kg reference flow | Calibration, tank tables, sample chain, receiving-user acceptance and unique lot proof |
| cp_material | peat_tar_recovery | each solid/liquid/gas branch | Gross physical and destination ledger | phase; stage; mass; water; C/H/O/N/S; ash/minerals; gas T/P/composition/wet-dry/Z/density; feed/deposit; gas return/export/flare; tar recovered/internal fuel/reference transfer/waste/stock; receiver; stocks; rejected/reworked tar | Weigh solids/liquids, validate tank conversions and meter gas with measured same-state composition; sample every relevant phase and verify both transfer ends. | kg | Each lot plus continuous gas logs | Complete declared campaign and cohort lifetime services | Same site gate plus explicitly linked upstream/receiver interfaces | per 1 kg reference flow | Calibration, samples, receiving receipts and mass/element residual uncertainty |
| cp_energy | peat_tar_recovery | each utility and internal gas/tar service | Meters/provider definitions | kWh; service/duty; fuel m3/T/absolute P/wet-dry/Z/composition/NCV; steam kg/P/supply-return enthalpy; internal tar kg/water/composition/calorific test and firing duty; startup; old/new cohort duty; provider/year/route | Dedicated calibrated meters or documented causal shared-meter drivers; reconcile invoices to process use and retained/exported internal gas and tar without double credits. | kWh; m3; kg; MJ | Continuous metering; monthly reconciliation | Complete declared campaign and cohort lifetime services | Same site gate plus explicitly linked upstream/receiver interfaces | per 1 kg reference flow | Meter calibration, invoice, duty logs and provider compatibility |
| cp_water | peat_tar_recovery | water in each phase and utility | Water and H/O ledger | supply/abstraction source; make-up; cleaning; recycle/bleed; feed/tar/coke water; aqueous organics; air inlet/outlet humidity; combustion/reaction water; evaporation; stocks; receiver | Meter external supplies separately; representative water-specific phase tests and humid-air flows; reconcile H/O elements, dissolved organics and actual receiver with uncertainty. | kg | Continuous meters; batch phase samples | Complete declared campaign and cohort lifetime services | Same site gate plus explicitly linked upstream/receiver interfaces | per 1 kg reference flow | Meter/sample methods, selective water tests and receiving proof |
| cp_air | peat_tar_recovery | each species/source and inlet air | Monitoring and source survey | outlet/leak/tank; hours/state; flow T/P/wet-dry/O2; species/concentration; NOx convention; PM definition; inlet O2/N2/CO2/humidity; origin fractions; limits; controls | Species-specific validated tests with matched actual gas flow and operating hours; include tank breathing and startup; measure inlet/ingress air for balances; retain nondetect limits and unknown origin. | kg | Representative operating-state tests and continuous activity logs | Complete declared campaign and cohort lifetime services | Same site gate plus explicitly linked upstream/receiver interfaces | per 1 kg reference flow | QA, calibration, raw tests, limits, coverage and origin tracing |
| cp_support | peat_tar_recovery | stock cohorts, maintenance and packaging | Bill/work order and burden ledger | raw/WIP/FG lot; opening/additions/transfer/loss/closing kg and burden vectors; lubricant replacements; filter/refractory/steel; container tare; duty/service life; cleaning; receiver; net price/currency/date/fees | Reconcile physical stock and carried burdens separately; weigh actual maintenance/container materials, document duty life and matched return/waste receipts; add atomic cards for every real exchange. | kg; record | Each service/replacement/return; period close | Complete declared campaign and cohort lifetime services | Same site gate plus explicitly linked upstream/receiver interfaces | per 1 kg reference flow | Bills, measured tare, work orders, inventory reconciliation and burden provenance |
| cp_route | peat_tar_recovery | scope and upstream compatibility | Site/supplier documents | equipment diagram; temperature/residence; exclusive peat; deposit/polygon/land use/drainage/water table/extraction dates; upstream time horizon/fluxes/restoration; omitted exchanges; receiver; native metadata debt | Verify installed route and actual grade/fuel destination against scope; supplier land history and upstream LCI boundaries; survey all interfaces and state unresolved coverage. | record | Every route, grade, deposit or provider change | Complete declared campaign and cohort lifetime services | Same site gate plus explicitly linked upstream/receiver interfaces | per 1 kg reference flow | Process diagram, supplier proof and documented applicability/gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_rules | all inventory rows | Q = new first-accepted qualifying boundary transfer + new first-accepted closing FG for that transfer in kg; unique lots once; exclude internal fuel and reserved stocks, old opening FG/deliveries, returns/retests, rejects and WIP. Carry raw/WIP/FG burden vectors and later cohort services as described above; Q > 0 is required. | cp_acceptance; cp_support | positive Q and stock/cohort ledger |  |
| normalization | all inventory rows | For the selected new cohort divide attributable reconciled exchange by positive Q; for later services divide by original positive accepted cohort quantity. Keep original physical numerators separate from allocated burden numerators. Reference tar is 1 kg; missing/zero denominator is raw/inconclusive. | cp_acceptance; cp_material; cp_energy; cp_water; cp_air; cp_support | per 1 kg reference flow |  |
| phase_balance | all physical branches | Mass input + opening physical stock − outputs − closing stock = measured residual; include inlet air, fuel, water and reaction interfaces. Independently reconcile C/H/O/N/S, minerals and energy with actual phase analyses and uncertainty. Residual is not an invented emission or automatic closure. | cp_material; cp_water; cp_air; cp_energy | unallocated phase/element/energy residuals | suo-peat-pyrolysis-1987 |
| burden_split | shared burden pools | For each shared burden pool apply only justified shares summing to one after subdivision; record each driver and uncertainty. Economic scenario share = measured accepted co-product quantity × matched net gate price divided by the sum for eligible products; nonpositive/missing denominator remains unresolved. Physical phase quantities stay unweighted. | cp_material; cp_support | separate allocated burden vectors | ghg-product-allocation-2011 |
| unit_conversion | electricity; natural_gas; steam | kWh × 3.6 = MJ; tank volume × measured compatible density = kg. Gas or steam conversion requires declared provider state/enthalpy; no conversion using unrelated generic Fuel classification or secondary property coefficients. | cp_energy; cp_acceptance | compatible units and documented conversions |  |
| acceptance_event_bridge | all inventory rows | Lock Q to unique independently measured first-acceptance events. Use the two-term dispatch/closing-stock bridge only when L_new is zero; otherwise reconcile disjoint D_new, F_new_close and actual post-acceptance net exits L_new on the original acceptance basis. Retain original event Q for later losses/services and prevent internal/return/rework throughput duplication. Do not add Q as an extra external output. Unresolved event/stock evidence blocks complete normalization. | original acceptance events; net parcel-state bridge; original cohort quantities | auditable positive event Q and separate physical stock bridge |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | accepted_peat_tar | Confirm whole peat-derived crude organic product and industrial fuel acceptance, with native mass/unit support and disclosed classification debt; no jet-fuel background. | cp_acceptance; cp_route |
| quality_scope | all inventory rows | No actual utility, chemical, packaging, maintenance, waste or species exchange omitted because its UUID is unresolved. Add atomic cards and complete actual provider/receiver matching before dataset completeness. | cp_route; cp_support |
| quality_period | all inventory rows | Match campaign, sample coverage, operating states, grade and cohort. Preserve raw values, calibration, uncertainty, nondetect limits and exceptions; no historical defaults. | cp_acceptance; cp_material; cp_energy; cp_water; cp_air |
| quality_balance | all outputs | Keep full physical, elemental/species, allocation and raw/WIP/FG cohort ledgers separately; unexplained residuals and zero denominators prevent complete numerical results. | cp_material; cp_support |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | Require exclusive peat, stated sealed-retort recovery endpoint, crude organic phase and actual fuel acceptance. Reject coal-only, pure-component, solid coke, combined pyrolysis-product or combustion identities. | usgs-peat-retort-1910; minnesota-peat-tar-fuel-1981 |
| validate_denominator | all inventory rows | Check the unique positive first-acceptance Q, reference output 1 kg, same basis in both languages and all protocol aggregations. Internal tar fuel/reserved stocks, old FG, returns/retests or later cohort services cannot create new accepted output. Require actual two-end transfer evidence for any separately bounded receiver; a paper split or assumed sale cannot create Q. Missing/zero Q remains raw/inconclusive. |  |
| validate_balance | all physical branches | Require gross mass/water/element/species/energy and stock residuals with uncertainty, actual air and phase interfaces, no allocated physical outputs and no inferred universal emission or tar yield. | suo-peat-pyrolysis-1987 |
| validate_allocation | shared burden pools | Require explicit product/waste destinations, causal subdivision/drivers or justified economic scenario; each shared burden pool sums to unity and no default credits or negative waste-value credits. | ghg-product-allocation-2011 |
| validate_completeness | all inventory rows | Target methodology measurement checks do not establish a complete factory dataset. Unresolved native/provider, upstream land, species-origin, scope or denominator evidence is disclosed; no semantic TIDAS approval follows from a PCR check. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for declared accepted fuel-tar grade |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Mass-based supply of this declared peat-tar fuel intermediate with compatible provider assumptions; downstream combustion needs its own inventory |
| excluded_use | Jet fuel; chemical-feedstock tar; refinery oils/pitch; universal energy-service equivalence; generic peat/coal lifecycle or approved methodology |
| required_metadata | All reference qualifiers; unique cohorts/Q; route; deposit/land/upstream; actual providers/receivers; phase/state/composition; allocation and stock burden vectors; source locators |
| required_quality_disclosure | Historical/laboratory evidence limits and reported coking-fuel-use context without presumed external sale; generic Fuel classification debt; unresolved native/provider and carbon-origin fields; exclusions; raw/inconclusive results; uncertainty; no scientific/translation approval |
| update_trigger | Route/feed/fuel grade/phase endpoint/deposit/provider change; new measurements or evidence; resolved identity debt |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usgs-peat-retort-1910 | official_guidance | C. A. Davis, The preparation and use of peat as fuel, USGS Bulletin 442-B (1910), printed pp.121–123 / PDF pp.21–23. https://pubs.usgs.gov/bul/442-B/report.pdf | Historical peat-specific sealed retorts, tar/water recovery, joint coke/gas and internal gas heating; no modern availability, recipe, yield, price or fuel-grade defaults. |
| suo-peat-pyrolysis-1987 | literature | Martti Aho, Pyrolysis of peat, Suo 38(5):105–110 (1987), printed pp.106,108 / PDF pp.2,4; original scanned pages. https://suo.fi/pdf/9636 | Independent laboratory peat-tar capture and nitrogen partition; unresolved gas composition requires phase/species uncertainty. Not a commercial fuel specification, industrial recipe, universal phase fraction or NOx factor. |
| ghg-product-allocation-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, printed p.63 / PDF p.65, Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Subdivision and physical/economic concepts adapted as declared LCI policy; no peat-specific shares, system-expansion credit or full standard-conformity claim. |
| minnesota-peat-tar-fuel-1981 | official_guidance | Minnesota Department of Natural Resources, Division of Minerals, Minnesota Peat Program Final Report (August 1981), printed p.37 / PDF p.45, Peat Coke, Peat Tar, and Activated Carbon; report provenance PDF pp.3,7 and references printed p.91 / PDF p.99. https://www.lrl.mn.gov/docs/pre2003/other/811543.pdf | Official historical report that recovered peat-tar condensate was used as coking-process fuel in Finland and Germany. Distinct from coke and chemical refining; supports fuel role only, not external sale, current supply, exact preparation/organic-phase grade, measured combustion performance or default factors. |
