---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.civil-low-enriched-uranium-hexafluoride


language: en-US
sync_with: pcr.zh-CN.md
status: candidate

content_maturity: authored_methodology
translation_status: canonical
---

# Civil low-enriched uranium hexafluoride environmental accounting

## 1. Scope and Applicability

This PCR defines public civil environmental accounting for one conventional low-enriched uranium hexafluoride (UF6) compound supplied at a producer gate. It requires a documented civil light-water-reactor fuel supply specification and segregated product records. The producer's public description establishes a solid enriched UF6 delivery state and weighing records (`urenco-civil-product`). It supplies no default assay or purity here.

Exclude plutonium, reprocessed uranium, high-enriched uranium, advanced fuel grades including LEU+ and HALEU, uranium metal, oxides, ceramics, fuel pellets/rods/assemblies, alloys, dispersions and formulated mixtures. A supply solution is not this solid compound: active solute and carrier-water accounting would require another reviewed scope. Natural uranium input and depleted output are distinguished from the enriched product. No reactor-energy functional equivalence, avoided-power credit or radiation-dose claim is made.

Only aggregate environmental inputs, outputs and supporting measurements are authored. Concentration/separation operations, cascade configuration, equipment implementation, material fabrication, operating targets and optimization are outside this guidance. Public facility totals establish possible monitoring domains, never a recipe, production coefficient or default quantity (`urenco-environment`). A different SKU, feed history, product state or boundary requires applicability review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.civil-low-enriched-uranium-hexafluoride |
| classification_refs | CPC 3.0:33620; narrower scope limited to the product and route defined here; mapping acceptance is maintained separately in classifications/mappings/. |
| covered_products | One segregated conventional civil low-enriched solid UF6 compound at the producer delivery gate |
| excluded_products | Plutonium; reprocessed uranium; advanced/high-enriched grades; metal, oxide, ceramic, alloy, dispersion or formulated mixture; fuel assemblies; enrichment services measured only as work units |
| representative_product | Actual accepted civil UF6 lot with independently verified net compound mass and supplier certificate |
| production_route | Documented licensed civil supplier; aggregate environmental inventory of the selected site boundary, with no operational enrichment instructions |
| market_state | Solid UF6 in a declared delivery container; container tare excluded from the compound reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared civil UF6 compound as feedstock for downstream civil fuel fabrication |
| How much | 1 kg net accepted UF6 compound |
| How well | Actual conventional civil customer specification and accepted lot composition; no default purity or isotope assay |
| How long or cycle | One delivery gate; temporal inventory covers a matched declared reporting period, not reactor lifetime |
| reference_flow_link | civil_uf6 |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uranium enriched in U235 and its compounds, plutonium and its compounds, alloys, dispersions, ceramic products and mixtures containing uranium enriched in U235, plutonium or compounds of these products `1fd727d2-a1bf-430d-80ba-2bfa822ea822` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Civil end use; actual SKU/lot/provider; UF6 composition and impurity basis; conventional accepted specification; non-reprocessed origin; solid delivery state; net compound mass; tare exclusion; site/geography/period; foreground starting/ending gates; upstream and waste-treatment coverage; allocation decision and uncertainty |

The full native name and comments include enriched uranium compounds without a metal-only chemical restriction; this permits a conditional identity for the single UF6 subset, not a uranium/plutonium basket. A CPC label alone cannot override an incompatible CAS, formula, route or grade. The broad record has no actual isotope composition or current customer grade: a source-generic grade is not a verified lot. Collect the actual certificate or planned qualified sampling evidence before completing a dataset; future collection is permitted and missing values remain unknown. Required qualifiers are obligations, not claims of completed verification. Identity matching does not establish supplier-dataset compatibility.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net accepted whole UF6 compound mass, excluding delivery-container tare. Define positive independently measured period output D through cp_product. kg of uranium, kg of U-235, activity and service work units are different bases. |
| separate_activity | radionuclide emissions | Radioactivity `93a60a56-a3c8-17da-a746-0800200c9a66` | Bq | Preserve isotope, medium and reference date. The verified unit group has kBq as reference and Bq as a supported unit (1 Bq = 0.001 kBq); this unit conversion is not a mass/activity or dose conversion. Never infer isotope-specific activity from total alpha. |
| utility_basis | utility rows | Native reference property | Native reference unit | Electricity identity uses Net calorific value/MJ (1 kWh = 3.6 MJ); gas uses Volume/m3; selected tap water uses Mass/kg. Collect compatible provider bases; preserve wet/dry, temperature and pressure information, with no universal density or heating value. |

Whole-lot net delivered mass is the reference quantity. Record UF6 mass portion and impurities on their stated whole-lot denominator; record elemental-U mass separately on the sampled material and moisture basis. Isotope fractions require an explicit uranium-only denominator and mass/atom/activity convention. Activity retains its individual nuclide, environmental medium, sampling interval and reference date. None of these quantities is interchangeable with compound kg, dose, chemical purity or total uranium alpha. Any laboratory conversion requires its documented material scope, method and uncertainty; no universal factor is supplied. For an activity amount a collected in Bq, the supported native reference amount is 0.001 × a kBq; an amount reported in kBq is 1000 × that amount in Bq. Keep the original unit and date when normalizing by D.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of documented natural UF6 at the licensed civil site boundary; upstream extraction and conversion require compatible separate datasets |
| starting_condition_role | Supplied upstream material, not a burden-free resource |
| product_classification_scope | Only the defined conventional civil UF6 subset of CPC33620; natural feed and depleted output are separate identities |
| recursive_input_rule | Same-category supplied enriched UF6, if introduced, is a separate measured input with its own upstream boundary and provenance; this natural-feed route cannot silently absorb it |
| upstream_dataset_requirement | Verified feed, utility and transport providers with matching material state, quantity, geography, period and gate; disclose missing upstream coverage |
| disclosure | Declare site reporting period, feed origin, output gate, stored by-products, transport endpoints, container coverage, shared-site allocation, infrastructure/end-of-life coverage and missing inventory |

- `civil_environment_boundary`: Use one aggregate foreground environmental unit covering attributable utilities, environmental controls, storage and delivery within the declared site gate. Keep actual production stages as independently metered collection scopes without publishing technical operation instructions. Preserve physical internal links with equal amounts at both ends; cancel internal transfers only when aggregating this unit.
- `environmental_streams`: Separate purchased inputs, transferable products, waste sent for treatment and releases to each environmental medium. Radioactive waste and air/water releases require site-specific permitted monitoring (`ea-nuclear-environment`). Use CWW BAT2(II–III) stream-characterization principles only as analogous chemical environmental inventory practice; nuclear limits and permit applicability are not imported (`jrc-cww-bat2`).
- `complete_scope`: The cards below are a concrete conditional baseline, not an exhaustive plant bill of materials. Before a completed dataset, reconcile all actual site environmental streams and permits; add one atomic row for every additional fuel, purchased heat, water source, chemical, cylinder/overpack material, refrigerant, waste and emission. Record actual compositions and destinations. No absent, unmeasured or unresolved stream may silently become zero. Container reuse requires actual lifetime/use allocation; neither container-free supply nor a container recipe is assumed.
- `physical_scope_register`: Reconcile every actual boundary inflow/outflow and opening/closing stock. Include wet intake/exhaust air and its dry-air/moisture basis, water vapour, liquid water, cooling returns, condensate, aqueous carriers, retained filters/sludge/contamination, returned product and residual material, packing, cylinders/overpacks, maintenance supplies and wastes. Record actual quantity and fate per atomic exchange; add identities only after verification. Internal air/water circulation is not an external input or release. Purchased transport, storage, treatment and maintenance services are separate service records; their background inventories must not be added as duplicate foreground physical streams.
- `energy_scope_register`: Reconcile metered electricity, each actual fuel, purchased heat/steam/cooling, exported energy and energy accumulation/loss on consistent reporting scopes. Collect time-integrated readings; where only power is observed, record the measured time profile and integrate it over the actual interval. Nameplate power, calendar hours or an assumed load factor cannot establish consumption. Purchased-utility burdens and site-owned direct emissions remain separate (`urenco-environment`).

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| civil_environment | Aggregate public civil UF6 environmental account | required | Only the scoped licensed natural-feed/conventional civil-product boundary | foreground environmental unit | 1 kg reference flow |

### Process: Aggregate public civil UF6 environmental account (`civil_environment`)

#### Inputs

##### Product flows

###### Natural feed (`natural_feed`)

Conditional UF6 chemical identity for documented natural-isotope feed only; the native record does not verify natural composition or a current lot grade and declares CN supply geography. Actual origin, composition, state and supplier geography/gate must be established separately. It is not the enriched reference product. Upstream conversion requires a compatible supplier dataset; reprocessed uranium is excluded.

- Selected flow: Uranium hexafluoride `e0aa0856-f028-4d22-bab5-660613307174`
- Flow property / unit: Mass / kg
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_feed. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `urenco-civil-product`

###### Electricity (`electricity`)

Only grid-average medium-voltage 1–35 kV supply at the user meter; the native identity declares CN supply geography and cannot establish a non-CN background provider. Metered kWh may be converted with the verified unit group. A specific electricity contract requires a separately compatible provider; this identity does not prove its generation mix.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_electricity. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `urenco-environment`; `ea-nuclear-environment`

###### Natural gas (`natural_gas`)

Conditional auxiliary pipeline gas at consumption, not pure methane or liquefied gas. Record composition, temperature, absolute pressure, wet/dry basis, compressibility and provider m3 definition; do not use the secondary mass coefficient as density. Unresolved compatibility blocks the background link.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_gas. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `urenco-environment`; `ea-nuclear-environment`

###### Supply water (`supply_water`)

Only actual treated tap water supplied to the site. Metered volume requires measured or supplier-supported density at the recorded conditions; no default conversion. Other abstraction sources need separate atomic rows.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_water. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `urenco-environment`; `ea-nuclear-environment`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Civil uf6 (`civil_uf6`)

The broad database name is used solely for this single conventional civil low-enriched UF6 compound, accepted as a solid at the producer delivery gate. It does not represent plutonium, an alloy, a dispersion, a ceramic or an arbitrary mixture. Supplier composition and gate compatibility are required.

- Selected flow: Uranium enriched in U235 and its compounds, plutonium and its compounds, alloys, dispersions, ceramic products and mixtures containing uranium enriched in U235, plutonium or compounds of these products `1fd727d2-a1bf-430d-80ba-2bfa822ea822`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `urenco-civil-product`

###### Depleted uf6 (`depleted_uf6`)

Conditional physically segregated depleted UF6 output. This broad compound identity is narrowed to UF6 only; exclude thorium, metal and oxide. Record destination, legal product/waste status and any retained inventory. Product designation requires documented subsequent use; otherwise resolve a separate waste identity. Do not infer production quantities or credits. At the aggregate site gate this row records actual external product transfer only; material remaining on site is closing stock. If storage is a separate modelled unit, use equal measured internal-link endpoints and cancel that transfer once at site aggregation.

- Selected flow: Uranium depleted in U235 and its compounds, thorium and its compounds, alloys, dispersions, ceramic products and mixtures containing uranium depleted in U235, thorium or compounds of these products `f9e02fdf-db98-4802-9f1d-10d680f67065`
- Flow property / unit: Mass / kg
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_coproduct. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct`
- Sources: `urenco-civil-product`

##### Waste flows

###### Spent filter (`spent_filter`)

Conditional actual stream only; preserve specific physical identity, composition, compartment and receiver. UUID remains unresolved; no substitute and no assumed zero.

- Selected flow: Uranium-contaminated spent air filter
- Flow property / unit: Mass / kg
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_waste. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `urenco-environment`; `ea-nuclear-environment`

###### Wastewater (`wastewater`)

Conditional actual stream only; preserve specific physical identity, composition, compartment and receiver. UUID remains unresolved; no substitute and no assumed zero.

- Selected flow: Uranium-bearing aqueous effluent transferred to off-site licensed treatment
- Flow property / unit: Mass / kg
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_waste. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `urenco-environment`; `ea-nuclear-environment`

##### Elementary flows

###### Co2 fossil (`co2_fossil`)

Conditional fossil CO2 crossing to non-urban outdoor air or high-stack air from site-owned auxiliary combustion. Preserve biogenic CO2 separately if actually present. Do not count purchased-electricity emissions again as direct site emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-9c13-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_air. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `urenco-environment`

###### Hf air (`hf_air`)

Only measured hydrogen fluoride discharged to outdoor air, unspecified subcompartment. This is molecular HF mass, not fluoride ion, elemental fluorine or all fluorinated gases. Retained or treated material is not an atmospheric release.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_air. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ea-nuclear-environment`; `jrc-cww-bat2`

###### No2 air (`no2_air`)

Conditional separately speciated nitrogen dioxide to outdoor air, unspecified. Aggregate NOx is not this species; NO2-equivalent totals need separate quantity-definition review. Exclude N2O and avoid double counting NO/NO2 with NOx.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_air. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ea-nuclear-environment`; `jrc-cww-bat2`

###### U234 air (`u234_air`)

Only individually measured U-234 activity discharged to outdoor air, unspecified; no total-alpha substitution.

- Selected flow: uranium-234 `4d9a8790-3ddd-11dd-8daf-0050c2490048`
- Flow property / unit: Radioactivity / Bq
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_radio. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_radio`
- Sources: `ea-nuclear-environment`; `jrc-cww-bat2`

###### U235 air (`u235_air`)

Only individually measured U-235 activity discharged to outdoor air, unspecified; no total-alpha substitution.

- Selected flow: uranium-235 `08a91e70-3ddc-11dd-9c3c-0050c2490048`
- Flow property / unit: Radioactivity / Bq
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_radio. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_radio`
- Sources: `ea-nuclear-environment`; `jrc-cww-bat2`

###### U238 air (`u238_air`)

Conditional individually analysed U-238 activity discharged to outdoor air, unspecified. The full native record and same-UUID official JRC definition support uranium-238 and Radioactivity/kBq. The official Chinese display 铀α is broader translation debt, not a total-alpha-only restriction. Require isotope-specific analytical records, activity reference date and uncertainty; no total-alpha, total-U, dose or mass substitution. Future sampling is a dataset obligation, not a verified current observation.

- Selected flow: uranium-238 `08a91e70-3ddc-11dd-9c44-0050c2490048`
- Flow property / unit: Radioactivity / Bq
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_radio. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_radio`
- Sources: `ea-nuclear-environment`; `jrc-cww-bat2`

###### U234 water (`u234_water`)

Only individually measured U-234 activity actually reaching freshwater; no off-site wastewater-transfer activity here.

- Selected flow: uranium-234 `fe0acd60-3ddc-11dd-ae3f-0050c2490048`
- Flow property / unit: Radioactivity / Bq
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_radio. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_radio`
- Sources: `ea-nuclear-environment`; `jrc-cww-bat2`

###### U235 water (`u235_water`)

Only individually measured U-235 activity actually reaching freshwater; no off-site wastewater-transfer activity here.

- Selected flow: uranium-235 `08a91e70-3ddc-11dd-9c40-0050c2490048`
- Flow property / unit: Radioactivity / Bq
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_radio. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_radio`
- Sources: `ea-nuclear-environment`; `jrc-cww-bat2`

###### U238 water (`u238_water`)

Conditional individually analysed U-238 activity actually reaching freshwater; exclude off-site wastewater transfers. The full native record and same-UUID official JRC definition support uranium-238 and Radioactivity/kBq. The official Chinese display 铀α is broader translation debt, not a total-alpha-only restriction. Require isotope-specific analytical records, activity reference date and uncertainty; no total-alpha, total-U, dose or mass substitution. Future sampling is a dataset obligation, not a verified current observation.

- Selected flow: uranium-238 `4d9a8790-3ddd-11dd-8db4-0050c2490048`
- Flow property / unit: Radioactivity / Bq
- Amount rule: Use independently collected attributable period amount divided by D from cp_product; retain original records through cp_radio. No default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_radio`
- Sources: `ea-nuclear-environment`; `jrc-cww-bat2`

## 7. Allocation and Co-product Handling

- `physical_and_burden_ledgers`: Keep an independently measured physical ledger for feed, accepted product, depleted material, waste, discharge and changes in stocks. Preserve each physical co-output in full before allocating environmental burdens; multiplying its actual mass by an allocation share would corrupt the physical account. Do not derive output, yield, purification loss or a recipe from assumed balances.
- `allocation_decision`: Avoid allocation through actual collection subdivision where feasible, consistent with the general product GHG hierarchy (`ghg-product-allocation`, chapter9, p.63). For inseparable joint burdens, require a documented physical causal relation; otherwise justify and independently review another relationship, including actual economic evidence if used. This is an authored adaptation for LCI, not a nuclear-specific allocation standard. No default split, work-unit equation, isotope balance or substitution credit is supplied.
- `tails_fate`: Distinguish retained tails, usable co-product and waste using actual acceptance, owner and receiver records. Include attributable storage and eventual-management coverage or disclose omissions; storage does not prove avoided production. Retained material is closing physical stock, not an external product or waste transfer; production and later dispatch are different events. External product/waste transfers are distinct from environmental release.
- `period_burden_carryover`: Preserve lot-linked opening/closing stocks and their carried environmental burdens separately from physical quantities. For the accepted lots counted in D, reconcile prior-period burdens brought forward, current-period attributable burdens and burdens retained for future lots. Earlier production must not be charged again merely on later dispatch; current-period site totals must not all be assigned to dispatch of opening stocks. Storage, shared services and returned/reworked lots need actual scope and allocation evidence. Disclose an unreconciled carryover rather than treating stocks as burden-free.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | civil_environment | civil_uf6 | Weighing and acceptance | Lot/SKU; civil specification; certificate; gross/tare/net whole compound mass; UF6 portion/impurity basis; elemental-U mass and isotope-fraction convention; grade verification state; opening/closing lot stock; returns; carried burdens; date | Calibrated weighing and traceable acceptance; exclude container tare; verify actual compound and origin; Aggregation calculation: D = sum of accepted net UF6 output in kg for the declared product gate and lot cohort; exclude tare and duplicate acceptance/redispatch; reconcile returns and opening/closing stocks with carried burdens; reference output is 1 kg | kg | Each accepted lot | Same declared inventory period | Selected producer gate only | per 1 kg reference flow | Scale calibration; signed acceptance; certificate; uncertainty |
| cp_feed | civil_environment | natural_feed | Supplier and receipt record | Lot/provider; natural origin; actual UF6 composition; net whole compound mass; stocks; upstream gate | Independently measured receipt and certificate reconciliation, no recipe or default ratio; Aggregation calculation: Net attributable feed / D; cancel internal transfers once | kg | Each receipt | Same period as D | Selected boundary | per 1 kg reference flow | Supplier evidence; traceable scales; compatible background |
| cp_electricity | civil_environment | electricity | Meter record | Meter readings; time intervals and power profile where needed; voltage; contract/provider; geography/period; meter coverage; shared services; energy returns | Calibrated meter reconciliation; verify actual supply mix and gate; Aggregation calculation: Attributable supplied energy / D; verified kWh-to-MJ conversion only | MJ | Meter intervals | Same period as D | Site scopes with actual shared-service separation | per 1 kg reference flow | Meter calibration; invoices; shared-site separation |
| cp_gas | civil_environment | natural_gas | Gas meter and supplier record | Volume; temperature; pressure; dry/wet basis; composition; compressibility; provider volume convention | Calibrated meter and supplier reconciliation at compatible conditions; Aggregation calculation: Compatible attributable supplied volume / D; incompatible definition remains pending | m3 | Meter intervals | Same period as D | Actual auxiliary supply | per 1 kg reference flow | Meter certificate; provider quantity definition |
| cp_water | civil_environment | supply_water | Water meter/receipt | Source/provider; volume/mass; density evidence and conditions; withdrawals/returns/recycle/stocks | Meter or weighing; source-specific reconciliation and supported conversion; Aggregation calculation: Attributable supply mass / D; internal circulation not counted as new supply | kg | Meter intervals | Same period as D | Actual supply and fate | per 1 kg reference flow | Calibration; density evidence; source and fate |
| cp_coproduct | civil_environment | depleted_uf6 | Output and storage record | Whole UF6 net mass; certificate; physical state; ownership; retained stock; receiver/use; legal status | Independently measured output and stock/receiver reconciliation; no output ratio inference; Aggregation calculation: Full measured external product transfer / D; retain on-site production and opening/closing stocks separately; burden allocation recorded separately | kg | Each output/stock closure | Same period as D | Selected gate and disclosed storage | per 1 kg reference flow | Scale; certificate; actual product use or waste status |
| cp_waste | civil_environment | spent_filter; wastewater | Waste consignment | Individual row_id; material/aqueous composition; contamination; radionuclide identity/activity; mass; receiver; treatment boundary | Weigh or use volume with supported density; reconcile licensed transfer records per atomic stream; Aggregation calculation: Each actual stream mass / D; no subtraction of unmeasured contaminants | kg | Each consignment | Same period as D | Transfer gate; downstream treatment separately declared | per 1 kg reference flow | Waste classification; consignment; receiver acceptance; analytical limits |
| cp_air | civil_environment | co2_fossil; hf_air; no2_air | Species-specific monitoring | Individual species; origin; outlet; medium; quantity basis; sampling/flow intervals; detection limit; uncertainty | Validated site environmental monitoring and compatible concentration/flow integration; preserve raw measured totals and method; Aggregation calculation: Each actual species release mass / D; exclude internal recapture and duplicate aggregate totals | kg | Monitoring intervals and reporting closure | Same period as D | Actual releases leaving site, not workplace concentrations | per 1 kg reference flow | Laboratory accreditation; calibrated monitor; permit method and uncertainty |
| cp_radio | civil_environment | u234_air; u235_air; u238_air; u234_water; u235_water; u238_water | Isotope-specific release monitoring | Individual isotope; medium/receiver; activity; unit; reference date; sample timing; discharge volume/flow; nondetects; uncertainty | Approved environmental laboratory method and measured discharge; isotope-specific assay; retain time/decay basis and non-detect treatment; Aggregation calculation: Each isotope/medium activity / D; no total-alpha disaggregation or duplicate transfer/release | Bq | Monitoring intervals and reporting closure | Same period as D | Actual atmospheric or freshwater discharge | per 1 kg reference flow | Laboratory method; detection limits; reference date; no assumed equilibrium |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all inventory rows | Physical exchange = independently collected boundary amount / D; preserve unallocated physical totals and stock changes. D is accepted whole UF6 output in kg for the cp_product gate/cohort. Compute the product environmental inventory separately from evidence-backed attributable/allocated burdens and lot-matched stock carryover / D. Allocated inventory cannot be used as the physical balance or to rescale paired physical transfers. | cp_product; row-specific protocol | per 1 kg reference flow |  |
| quantity_reconciliation | all inventory rows | Reconcile whole-compound mass, water, stocks and external transfers using independent records; preserve elemental-U assays, isotope fractions and activity as separate descriptors. No default purity, moisture, formulation, purification yield, enrichment work or activity-to-mass conversion. Obtain any actual conversion from a validated lab/provider method with scope and uncertainty. | Actual scales/meters, certificates and laboratory records | Reconciliation residuals and uncertainty, separately from allocated burdens |  |
| physical_conservation | actual boundary register | Reconcile opening stock plus all external physical inflows against closing stock plus all external physical outflows, including wet air, water, retained material, containers and returns. For total mass and conserved elements, chemical reactions do not add sources or sinks. Species accounting may record evidenced chemical formation/consumption on the same scope, without authoring reaction recipes or operational parameters. Keep residuals and measurement uncertainty; do not infer missing process quantities to force closure. | Full physical register; independent quantity/composition records | Unallocated mass/element/species reconciliation with explicit scope |  |
| ledger_separation | site, services and product inventory | Preserve the complete site physical and energy records, matched internal-link endpoints and retained stocks. Keep service quantities, upstream background inventories and allocated product burdens in separate ledgers with explicit cross-references; prevent double counting and reconcile period/cohort coverage. | Meter/transfer/stock records; supplier services; allocation evidence | Traceable physical records and separately derived product inventory |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | Product and providers | Verify actual single compound, civil specification, feed origin, product state and compatible net whole-UF6 basis; broad UUID is not a generic provider or composition default | Lot acceptance and source-specific background |
| monitoring_scope | All environmental streams | Review actual permits and physical environmental outlets; separate radionuclide species and media. Chemical toxicity mass, radioactive activity and dose are different quantities. Do not invent equilibrium or generic removal performance | Site monitoring plan and accredited analyses |
| conditional_completeness | All cards and actual additional flows | Document present/absent/unknown status and complete atomic site inventory before dataset completion; unidentified material or unmeasured release is pending, not zero | Full stream register, permit coverage and uncertainty |
| source_limits | External evidence | Manufacturer environmental reporting is site/group evidence, not universal quantity; CWW is analogous inventory management only; English permit context is not a global legal or radiological certificate | Source scope and field records |

## 9. Validation Rules

- `check_reference`: Exactly one enriched product output links civil_uf6 to 1 kg net accepted whole compound. Natural/depleted UF6, container mass, uranium-content mass, activity and work units cannot share that reference denominator without an explicit validated conversion and applicability review.
- `check_environment`: Verify each actual atomic flow's type, species, origin, compartment, reference property/unit and compatible provider. Reconcile product/waste/environmental fates, wet air/water, energy, packing/containers, maintenance, returns and stocks. Distinguish retained contamination from actual environmental release. Do not allocate physical output masses; internal links must agree in identity, property, unit, amount and period at both ends. Reconcile stock-carried burdens and service/background links separately from physical conservation.
- `check_completeness`: A completed dataset requires positive independently measured D, compatible upstream data, full actual environmental-stream register, source-specific isotope reporting, evidence-backed allocation and uncertainty. Empty UUIDs, unknown quantity bases, untreated coverage gaps or missing monitoring are explicit pending items; a structural PCR check is not dataset completion, permit compliance or independent scientific approval.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground environmental inventory for a declared civil conventional UF6 supply boundary |
| downstream_use | secondary_dataset; background_dataset only after dataset-level completeness and independent applicability review |
| allowed_use | Public civil environmental accounting with the declared product, provider, gate, quantities and uncertainty |
| excluded_use | Enrichment/separation/fabrication operating instructions; weapon-material production or optimization; plutonium; excluded product grades; reactor dose/safety claims; automatic comparison of different chemical or isotope bases |
| required_metadata | Required qualifiers; D and period; upstream coverage; storage and waste fates; allocation evidence; individual species/medium and activity reference date |
| required_quality_disclosure | Authored candidate; independent review pending; unresolved identities; monitoring/detection limits; provider quantity compatibility; missing stages and uncertainty |
| update_trigger | Different product/feed history/state, supplier boundary, environmental outlets, provider basis, monitoring method or reviewed identity correction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| urenco-civil-product | official_guidance | Urenco, Our role in nuclear fuel; https://www.urenco.com/about/nuclear-fuel-cycle ; product delivery and weighing passages, snapshot2026-10-13 | Real civil supplied UF6 state and weighing context only; no operational descriptions or manufacturing quantities adopted |
| urenco-environment | official_guidance | Urenco, Environmental Impact; https://www.urenco.com/sustainability/environmental-impact ; scope1/2/3, environmental/waste monitoring passages, snapshot2026-10-13 | Producer environmental accounting domains; company statements are not universal factors or product allocation data |
| ea-nuclear-environment | official_guidance | Environment Agency, Nuclear sites: environmental regulation; https://www.gov.uk/guidance/nuclear-sites-environmental-regulation ; environmental permits and monitoring sections | England-specific nuclear environmental scope; distinguish radioactive waste and air/water discharge, not a global permit or isotope emission factor |
| jrc-cww-bat2 | official_guidance | European Commission JRC, CWW BREF2016; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf ; BAT2(II–III), printed543/PDF573 | Analogous stream-characterization and pollutant-load recording for chemical environmental inventories only; no nuclear BAT applicability, numerical limit, recipe or operating chemistry transfer |
| ghg-product-allocation | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; chapter9, tables9.1–9.2, printed63/PDF65 | General GHG product allocation hierarchy; authored adaptation to LCI explicitly limited, not nuclear methodology approval |
