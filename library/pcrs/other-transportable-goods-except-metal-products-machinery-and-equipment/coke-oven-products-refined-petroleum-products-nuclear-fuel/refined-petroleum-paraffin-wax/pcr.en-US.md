---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.refined-petroleum-paraffin-wax
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Solvent-deoiled, hydrofinished petroleum paraffin wax

## 1. Scope and Applicability

This method covers unformulated macrocrystalline petroleum paraffin wax made from refinery-distillate slack wax by single-solvent 1,2-dichloroethane (DCE) deoiling, closed solvent recovery and catalytic hydrofinishing, delivered as net bulk wax at the wax-unit gate. Declare whether dispatch is molten or solidified bulk; meter its actual net mass. Acceptance follows the actual declared SKU specification for oil content, congealing/melting behaviour, colour, sulfur, residual solvent and application restrictions. No universal purity, food/pharmaceutical certification, yield or consumption limit is invented.

Exclude petroleum jelly, microcrystalline wax from residual oils, ozokerite/lignite/peat wax, natural asphalt, refinery bitumen, green or calcined petroleum coke, coal/peat coke, insect/vegetable wax, FT/GTL or plastic-recycling wax, wax emulsions, formulated blends, candles and lubricating/base oils. Sweating, solvent-free crystallisation, other solvent systems and clay finishing need a separately evidenced extension of this product method. A different application or classification label alone creates no new PCR.

EU Refining BREF 2015 §2.3 and §4.3.3–4.3.8 support process and interface coverage. The BREF explicitly advises avoiding chlorinated solvents: this scope accounts for an existing DCE route and does not endorse DCE as preferred BAT. Confirm the actual plant route, installed controls, applicable permit conditions and allowed product uses before applying it; this historical BREF is neither a current permit nor evidence of present legal compliance. Sasol 2011 printed pp.68–69 provides an independent historical example of petroleum slack-wax deoiling followed by hydrogenation and distinguishes FT manufacture; it identifies neither this solvent nor catalyst and supplies no general quantity defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.refined-petroleum-paraffin-wax |
| classification_refs | CPC3.0:33500; proposed narrower coverage of qualified petroleum paraffin only |
| covered_products | Unformulated macrocrystalline petroleum paraffin wax from distillate slack wax |
| excluded_products | All excluded products and routes in §1; no whole mixed-leaf refinery method |
| representative_product | One accepted SKU of solvent-deoiled, hydrofinished petroleum paraffin wax |
| production_route | Slack-wax receipt → dissolution → chilling/crystallisation → filtration/washing → separate wax and soft-wax/oil solvent recovery → qualified hydrofinishing → QC/storage/bulk dispatch |
| market_state | Bulk wax; molten or solidified state, temperature and grade declared; no package mass in reference |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted unformulated petroleum paraffin wax at wax-unit dispatch gate |
| How much | 1 kg net accepted wax |
| How well | Actual SKU specification with measured oil, congealing/melting behaviour, colour, sulfur and residual DCE; no use-phase service equivalence |
| How long or cycle | One documented production campaign represented in a common reporting period; no lifetime assumption |
| reference_flow_link | wax_ref |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Petroleum refinery-distillate origin; macrocrystalline paraffin; supplier/slack-wax composition and upstream allocation; single-DCE route; catalyst grade and feed acceptance; actual oil/water/sulfur/residual-solvent results; SKU/specification and intended restrictions; bulk state and dispatch temperature; net mass; utilities/providers; geography; reporting period; co-product receivers and allocation. |

The reference identity denotes petroleum-fraction paraffin at plant with native Mass/kg. Its name qualifier “39.9MJ” is not a verified heat factor. The native record does not specify CAS, formula, refining degree or crystallinity: declare the actual CAS/composition, fully or semi-refined degree, macrocrystalline character and accepted SKU properties from the lot specification; do not invent a narrower grade or a molecular formula for this mixture. An isolated classification discrepancy does not replace these physical checks, and a same-name record with an explicit waste-plastic chemical-recovery route cannot override them. Q is the complete QA-accepted unformulated mixture mass after container tare, including its permitted retained oil, water, residual DCE and impurities. Exclude separately recovered solvent/oil/soft wax, rejected lots and packaging; do not convert Q to dry wax or sum of paraffin constituents. Gross shipped mass, returns, rework, opening/closing accepted stock and net accepted dispatch must reconcile without counting a lot twice.

Every required qualifier must be declared in dataset metadata or equivalent product/process records; missing qualifiers make the data package incomplete. A verified flow identity does not demonstrate an actual provider, quantity, purity or background dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | wax_ref | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg complete QA-accepted wax mixture after tare as denominator for every inventory row; exclude packaging, separated oil, soft wax and rejected wax. |
| `mass_conversion` | Liquid and molten material rows | Mass | kg | Convert metered volume using actual lot density and temperature; preserve measured oil/water/solvent fractions. No database secondary coefficient is a universal density. |
| `gas_basis` | hydrogen, nitrogen, purge_gas and air species | Mass | kg | For volumetric gas readings record reference and actual T/P, wet/dry composition and compressibility; use a traceable composition-specific conversion and provider basis. Component mass is not whole-stream mass. |
| `electric_energy` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve actual NCV/MJ reference of the electrical flow; convert kWh meter energy to MJ with 1 kWh = 3.6 MJ. Verify voltage/provider; do not apply a fuel heating-value factor to electricity. |
| `thermal_basis` | steam, hot_oil_heat, condensate_return | Mass and measured net thermal energy | kg; MJ | Keep imported steam mass, steam-contact water and clean condensate return distinct. Derive net duty from actual supply/return enthalpy or fluid heat capacity; an MJ or GCV identity alone does not prove net delivered heat. Unresolved provider definitions block completed dataset linkage. |
| `physical_ledgers` | all inventory rows | Mass, component mass and energy | kg; MJ | Retain raw unallocated mass, water species, C/H/O/N/S/Cl and energy ledgers first. Treat internal transfers and recycle consistently on both ends; only attribute environmental burdens afterward. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Measured petroleum-distillate slack wax transferred to the wax unit with composition, upstream provider and allocation; actual solvents, catalysts and utilities received |
| starting_condition_role | Foreground wax manufacturing gate, not entire refinery crude input |
| product_classification_scope | Only qualified petroleum paraffin subset of CPC3.0:33500 |
| recursive_input_rule | Same-unit recycled solvent/H2/wax remains internal; externally supplied refined wax or other routes require own provider and applicable method, never burden-free recursion |
| upstream_dataset_requirement | Include actual slack-wax refinery share, hydrogen, DCE, catalyst/filter material, electricity, steam, water and heat providers; include supply logistics with documented origin/distance/mode and compatible transport service; disclose unavailable backgrounds |
| disclosure | Route, SKU, state, plant/period, starting transfer, exact included units, shared-utility attribution, co-product/waste receivers, actual mass and elemental balances, upstream allocation and unresolved provider bases |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_units` | wax unit | Include receipt/storage, dissolution, chilling/crystallisation, filtration/washing, wax-side and soft-wax/oil-side solvent recovery, accepted-feed hydrofinishing, QC, rework, storage, solidification if actual bulk dispatch needs it, loading and controls. Retain stage meters inside one unit. | `eu-refining-bref-2015`; `sasol-wax-route-2011` |
| `boundary_recovery` | solvent and gas | Include both recovery branches and refrigerant losses; trace recovered solvent, actual fresh make-up, purge and residues. Record inert-gas or steam stripping as actually installed and reject solvent-contaminated feed from hydrofinishing until plant/catalyst acceptance is met. | `eu-refining-bref-2015` |
| `boundary_refinery_interface` | slack wax and co-products | Link the supplying refinery share at the physical transfer; do not duplicate its distillation/base-oil complex or charge the wax with an entire refinery. Link exported gas to actual recovery/SRU, waste liquids/solids to actual treatment; matching receiver and sender quantities use the same basis. | `eu-refining-bref-2015`; `eu-pef-allocation-2021` |
| `boundary_extensions` | site applicability | The baseline uses purchased utilities, external wastewater treatment and bulk delivery. On-site combustion, flaring, integrated wastewater treatment, solvent mixtures, packaged dispatch or different catalyst grades require evidenced additional atomic inventory and unit boundaries before claiming completeness. Do not omit measured releases, including biogenic CO2 if genuinely present in an extended site. | `eu-refining-bref-2015` |
| `boundary_support` | logistics and maintenance | Include actual supply transport, loading/unloading, tank/container cleaning, filter/catalyst maintenance and associated chemicals, water, wastes and emissions within the declared boundary, with individual atomic rows when present. Bulk dispatch excludes packaging from Q but does not erase its actual burdens: record any packaging or reusable container manufacture, repairs, cleaning, trips, returns, losses and end-of-life with measured service attribution. Declare ownership and receiver interfaces; unknown activity data remain unresolved, never a fabricated recipe. | `eu-refining-bref-2015`; `eu-pef-allocation-2021` |
| `boundary_no_factor_default` | quantities | BREF historical utility/yield tables and Sasol capacities are context, not recipe, emission factor, allocation share or universal range; do not transfer wood/paper/coal-coke evidence into petroleum wax manufacture. | `eu-refining-bref-2015`; `sasol-wax-route-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wax_manufacturing` | Solvent-deoiled, hydrofinished petroleum paraffin wax | required | Qualified route in §1 | foreground_production | 1 kg net accepted reference wax |

The physical sequence has separately metered stages. Internal wax after filtration/recovery and after hydrogenation is not an additional product exchange using the reference UUID. In the stage ledger, every internal transfer has equal receiving and sending amounts; retain wax/oil/solvent and gas compositions at each point. The boundary inventory below reports only external exchanges. Conditional rows require an applicability record and a measured amount or evidenced non-applicability, never a guessed zero. If actual air ingress, oxygen supply, extra solvent, thermal-oil make-up or another genuine stream exists, record its full mass and composition and add one specific atomic row and a compatible identity before dataset completion.

### Process: Wax manufacturing (`wax_manufacturing`)

#### Inputs

##### Product flows

###### Petroleum distillate slack wax (`feed_slack`)

Accept only refinery distillate slack wax; measure oil, wax, water, sulfur and residual solvent by lot. Exclude microcrystalline petrolatum and FT feed.

- Selected flow: Petroleum distillate slack wax
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_materials` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eu-refining-bref-2015`

###### 1,2-Dichloroethane make-up solvent (`solvent_dce`)

This route uses DCE (CAS 107-06-2) as the single deoiling solvent; record actual purity and impurities. Count make-up across the boundary, not circulating charge as repeated purchases.

- Selected flow: 1,2-Dichloroethane make-up solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_solvent` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent`
- Sources: `eu-refining-bref-2015`

###### Hydrogen gas for wax hydrofinishing (`hydrogen`)

Record make-up H2 purity, supplier production route, impurities, pressure, temperature, dryness and meter basis; recycle H2 stays in the internal ledger.

- Selected flow: Hydrogen gas for wax hydrofinishing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_materials` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eu-refining-bref-2015`

###### Alternating current (`electricity`)

Use this identity only for delivered grid-average AC at 1–35 kV with native locationOfSupply CN; verify voltage, China supply location, period and provider. A different geography or supply mix requires a compatible verified identity/background before linkage. Meter refrigeration, pumps, compression, filtration and dispatch separately.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Net measured amount from `cp_energy` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-refining-bref-2015`

###### Steam (`steam`)

This UUID is only 0.45 MPaG piped boiler steam. Verify actual gauge versus absolute pressure, temperature, dryness and chemical-industry supplier. Other steam pressures require another confirmed identity. Record import mass and enthalpy separately from clean return.

- Selected flow: Steam `aefdb9e8-b74c-4d25-bbfa-c4a1ff59dcdc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_energy` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-refining-bref-2015`

###### Net process heat delivered by an external hot-oil circuit (`hot_oil_heat`)

Include when externally supplied hot-oil heating serves melting, solvent recovery or hydrofinishing. Meter supply/return flow and temperatures, actual fluid heat capacity and heat losses. Do not count circulating thermal oil as consumed product.

- Selected flow: Net process heat delivered by an external hot-oil circuit
- Flow property / unit: Net delivered thermal energy / MJ; flow-property UUID unresolved; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Net measured amount from `cp_energy` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-refining-bref-2015`

###### nitrogen (`nitrogen`)

Include N2 make-up for closed filter blanketing or stripping if used; verify purity and supplier. Meter actual net fresh gas; internal recovered gas is not fresh consumption.

- Selected flow: nitrogen `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_materials` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eu-refining-bref-2015`

###### Cooling water (`cooling_water`)

Use for actual cooling-water make-up crossing the unit boundary, with origin, treatment and supplier declared; measure kg or convert volume using actual temperature/density. Keep circulating flow and heat duty separate.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_water` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refining-bref-2015`

###### de-ionised water (`water_supply`)

Include separately metered de-ionised water for actual cleaning or utility make-up; do not count the same cooling make-up twice.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_water` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refining-bref-2015`

###### Nickel-bearing wax hydrofinishing catalyst (`catalyst`)

Include for an actual nickel-bearing catalyst grade. Record the whole supplied catalyst mass, including support, promoter, carrier, water and impurities, and its complete formulation, initial charge, replenishment, regeneration and service period; allocate actual charge consumption over its represented throughput. Do not assert a universal Ni/W ratio.

- Selected flow: Nickel-bearing wax hydrofinishing catalyst
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_materials` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eu-refining-bref-2015`

###### Filter cloth (`filter_medium`)

For an actual filter cloth only; record material, grade, solvent compatibility, service life and replacements. This broad identity does not prescribe polypropylene or cotton.

- Selected flow: Filter cloth `117b035a-6255-425d-92b9-6c65ff1be2ab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_materials` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eu-refining-bref-2015`

###### Ammonia, anhydrous, liquid (`ammonia_product`)

Conditional on an actual anhydrous-ammonia refrigeration loop. Record charge, make-up, recovery and disposal by CAS and grade; no ammonia system is assumed for every site.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_materials` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eu-refining-bref-2015`

#### Outputs

##### Product flows

###### Paraffin wax (`wax_ref`)

Net complete QA-accepted unformulated petroleum paraffin wax mixture, including permitted residual solvent, oil, water and impurities; exclude separately recovered solvent/oil, off-spec material and packaging. Keep deoiling, hydrofinishing and bulk loading in the same foreground unit; intermediate wax transfers are internal.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `eu-refining-bref-2015`; `sasol-wax-route-2011`

###### Solvent-free petroleum deoiling oil (`coproduct_oil`)

Record actual liquid deoiling-oil output, residual wax/solvent, carbon and sulfur, receiver and acceptance. A saleable co-product is not automatically waste or burden-free.

- Selected flow: Solvent-free petroleum deoiling oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_product` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `eu-refining-bref-2015`; `sasol-wax-route-2011`

###### Separated petroleum soft wax (`soft_wax`)

Include only a separately isolated accepted soft-wax stream with measured oil, melting/congealing behaviour, carbon, sulfur and residual solvent. If this is the same physical stream as deoiling oil, record it once under the actual identity.

- Selected flow: Separated petroleum soft wax
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_product` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `eu-refining-bref-2015`; `sasol-wax-route-2011`

###### Sulfurous wax-hydrofinishing purge gas to recovery (`purge_gas`)

Measure the whole actual gaseous stream and its H2, hydrocarbon, H2S, NH3, water and other measured composition; document recovery/SRU receiver and returned hydrogen. This is one physical gas exchange, not the sum of alternative gases.

- Selected flow: Sulfurous wax-hydrofinishing purge gas to recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_gas` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `eu-refining-bref-2015`

###### Clean heating-steam condensate returned to supplier (`condensate_return`)

Only clean indirect-heating condensate accepted by the utility supplier; measure mass, temperature and return enthalpy. Solvent-contact stripping condensate goes to its waste row. No automatic avoided-steam credit.

- Selected flow: Clean heating-steam condensate returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_water` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refining-bref-2015`

##### Waste flows

###### DCE-contaminated wax-unit stripping condensate (`waste_condensate`)

Measure actual wet mass, water, DCE, oil, sulfur and receiver treatment requirements. Link external wastewater treatment; do not also report contained DCE as direct freshwater emission.

- Selected flow: DCE-contaminated wax-unit stripping condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_waste` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refining-bref-2015`

###### Wax-unit cooling-tower blowdown to treatment (`cooling_blowdown`)

For actual tower blowdown crossing the boundary; measure water, dissolved salts, actual treatment chemicals, contamination and receiving plant; no fresh-water discharge implied.

- Selected flow: Wax-unit cooling-tower blowdown to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_waste` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refining-bref-2015`

###### Spent nickel-bearing wax hydrofinishing catalyst (`waste_catalyst`)

Record wet/dry mass, metal/support composition, retained oil, sulfur, regeneration state, hazard classification and actual recovery/disposal receiver.

- Selected flow: Spent nickel-bearing wax hydrofinishing catalyst
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_waste` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refining-bref-2015`

###### Solvent-contaminated wax-filter cloth (`spent_filter`)

Record actual cloth composition, retained wax/DCE, wet/dry mass and receiver; cloth material is tied to the installed grade.

- Selected flow: Solvent-contaminated wax-filter cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_waste` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refining-bref-2015`

###### DCE solvent-recovery distillation bottoms (`waste_bottoms`)

Measure actual composition, liquid state, DCE, oil, water and receiver; no default residue quantity.

- Selected flow: DCE solvent-recovery distillation bottoms
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_waste` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refining-bref-2015`

###### Rejected petroleum paraffin wax leaving for treatment (`waste_wax`)

Only unrecoverable rejected wax leaving the unit; record rejection cause, residual solvent and actual treatment. Internal rework is not this waste.

- Selected flow: Rejected petroleum paraffin wax leaving for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_waste` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refining-bref-2015`

##### Elementary flows

###### 1,2-dichloroethane (`dce_air`)

Actual DCE mass emitted beyond controls to outdoor air, unspecified subcompartment. Include fugitives, storage/loading and measured vents; solvent recovery transfers are not emissions.

- Selected flow: 1,2-dichloroethane `fe0acd60-3ddc-11dd-a745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_air` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-refining-bref-2015`

###### hydrogen sulfide (`h2s_air`)

Actual molecular H2S release after recovery controls to outdoor air, unspecified; convert sulfur-equivalent monitoring only with declared speciation.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_air` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-refining-bref-2015`

###### hydrogen (`h2_air`)

Actual H2 released to outdoor air after recovery; measure or reconcile component gas balance, not acid-as-H+.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_air` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-refining-bref-2015`

###### dinitrogen (`nitrogen_air`)

Actual N2 from blanketing/stripping emitted to outdoor air; keep unallocated physical nitrogen balance even if LCIA has no characterisation factor.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_air` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-refining-bref-2015`

###### methane (fossil) (`methane_air`)

Conditional on measured fossil CH4 in incoming H2 impurities or process vents; only the amount actually emitted after recovery. Do not assume wax combustion.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_air` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-refining-bref-2015`

###### carbon dioxide (fossil) (`co2_air`)

Conditional on measured fossil CO2 in gas feed/vents; no on-site boiler or fuel combustion is included. Do not report upstream utility CO2 again here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_air` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-refining-bref-2015`

###### ammonia (`ammonia_air`)

Conditional on measured NH3 from actual ammonia refrigeration or hydrofinishing vents; report molecular NH3 after controls. No NH4+ or total-N substitution.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_air` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-refining-bref-2015`

###### water vapour (`water_air`)

Actual water vapour from cooling or stripping after recovery; reconcile imports, returns, condensate, product/waste moisture and storage change.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Net measured amount from `cp_water` normalized to 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refining-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_physical_first` | all streams | Preserve the unallocated physical process graph, gas/liquid/solid outputs and water-species/C/H/O/N/S/Cl/energy ledgers. Do not multiply actual co-product outputs, internal links or conserved masses by burden-allocation fractions. | `eu-refining-bref-2015`; `eu-pef-allocation-2021` |
| `allocation_avoid` | shared stages | First investigate subdivision by independent stage meters or justified system expansion; retain the expanded result as such. Wax-specific hydrofinishing/storage/loading is directly attributable when separately measured. | `eu-pef-allocation-2021` |
| `allocation_physical` | wax and separated saleable products | Where avoidance is impracticable, justify a relevant quantifiable physical relationship for shared deoiling/recovery/utility burdens. Mass allocation is allowed only with demonstrated relevance and comparable net solvent-free product masses, not because the products share33500. | `eu-pef-allocation-2021` |
| `allocation_other` | nonphysical allocation | If physical relation is unsupported, justify another relationship such as period-specific economic values at the co-production gate; document rejected alternatives, product grades, price period, currency and sensitivity. Fractions sum to one for the chosen shared burden pool. | `eu-pef-allocation-2021` |
| `allocation_interfaces` | upstream and receivers | Retain upstream slack-wax refinery allocation and full exported oil/soft wax/gas amounts, with receiver quantities. No automatic burden-free residue, avoided refinery product, recycled-solvent credit, or double-counted recovery credit. | `eu-refining-bref-2015`; `eu-pef-allocation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product` | `wax_manufacturing` | wax and co-products | production and acceptance records | stream_id; lot; SKU; origin; oil; water; C; H; O; N; S; Cl; full_mixture_composition; refining_degree; crystallinity; CAS_if_applicable; residual_DCE; congealing/melting; state; density; T; net_mass; opening/closing_stock; returns; receiver | Calibrated weighing/custody meters, actual lot laboratory release, tank reconciliation and separate stage records. Aggregation detail: Net accepted reference-wax kg Q is denominator; each real external co-product recorded once; each physical net amount / Q. | kg; actual laboratory units retained | Each lot and transfer; monthly reconciliation | Same actual representative reporting period, including every represented campaign and stock change | All included wax stages and connected storage/utility interfaces | per 1 kg reference flow | calibration; acceptance; sampling; stock ledger; receiver receipt |
| `cp_materials` | `wax_manufacturing` | material inputs | supplier, charge and stock records | material_id; CAS; grade; whole_supplied_mass; carrier; water; impurities; C/H/O/N/S/Cl; full_composition; origin; route; purity; unit; T; P; wet/dry; Z; receipts; charge; replenishment; recovered; export; stocks; service_throughput | Reconciled calibrated mass/flow meters and inventory changes; supplier CoA/SDS and catalyst feed-acceptance records; meter purity and composition for gas conversion. Aggregation detail: Net external material use over the same period / Q; catalyst/filter replacements matched to actual service throughput then period; no double charging of initial stock. | kg; source volume and conditions retained | Each receipt/charge; shift readings; service-life reconciliation | Same actual representative reporting period, including every represented campaign and stock change | All included wax stages and connected storage/utility interfaces | per 1 kg reference flow | supplier identity/CoA; gauges; issue records; service log |
| `cp_solvent` | `wax_manufacturing` | DCE circulation and make-up | closed-loop solvent ledger | whole_stream_mass; full_composition; carrier_water_impurities; DCE_purity; fresh_receipts; opening/closing_tanks; charged; wax/oil_branch_recovered; recirculated; residue; product_residual; aqueous_transfer; air_release; sample_ID | Calibrated flow/mass meters and solvent-specific laboratory measurements on both recovery branches, products, water and residues; independently reconcile air measurements. Aggregation detail: Fresh external input / Q; internal gross circulation retained separately with both link ends equal; sum actual DCE exits and stock change on common period. | kg DCE and kg actual stream | Shift/batch records; monthly closed-loop reconciliation | Same actual representative reporting period, including every represented campaign and stock change | All included wax stages and connected storage/utility interfaces | per 1 kg reference flow | assays; meter calibration; branch ledger; loss reconciliation |
| `cp_energy` | `wax_manufacturing` | electricity, steam and hot-oil heat | stage and utility meters | carrier_id; provider; voltage; meter_energy; steam_mass; pressure_gauge/absolute; T; dryness; enthalpy_in/out; clean_return_mass; hot_oil_flow; fluid_heat_capacity; supply/return_T; recovery; loss; allocation_driver | Calibrated stage submeters, supplier bills and common heat/energy balance; preserve carrier units; verify provider heat denominator before linkage. Aggregation detail: Actual physical carrier amount separately / Q; allocate shared environmental burdens only in the separate burden ledger; retain full import/return mass and enthalpy, and no netting electricity against heat. | MJ electricity/thermal; kg steam; measured source units | Continuous/shift; monthly reconciliation | Same actual representative reporting period, including every represented campaign and stock change | All included wax stages and connected storage/utility interfaces | per 1 kg reference flow | calibration; supplier reference definition; enthalpy balance; allocation record |
| `cp_water` | `wax_manufacturing` | make-up, condensate and evaporation | water and thermal records | origin; treatment; flow; density; T; clean_return; contact_condensate; blowdown; evaporation; product/waste_water; wet_gas_water; feed_material_water; reaction_formation/consumption; stocks | Calibrated water meters, actual density conversion and paired thermal/water balance; segregated samples and actual receivers. Aggregation detail: Each actual external water amount / Q; internal circulating water separate; steam condensate distinguished by contact state. | kg; m3 retained with conversion | Continuous/shift; reconciled monthly | Same actual representative reporting period, including every represented campaign and stock change | All included wax stages and connected storage/utility interfaces | per 1 kg reference flow | water meter; laboratory; return receipt; balance closure |
| `cp_gas` | `wax_manufacturing` | recovery gas and internal hydrogen | gas meters and composition | stream_id; T; P; dryness; Z; H2; CH4; CO2; H2S; NH3; H2O; other_species; full_wet_stream_mass; C/H/O/N/S/Cl; reaction_water; flow; period; recovered_return; receiver; sulfur/carbon_mass | Calibrated matched gas meters with laboratory/composition analysis and mass conversion at documented conditions; receiver readback and sulfur/carbon reconciliation. Aggregation detail: Net external gas stream / Q; whole-stream and contained-species masses separate; internal returned hydrogen equal at both ends. | kg whole stream; kg component; measured gas units | Continuous/shift; composition by batch/change; monthly reconcile | Same actual representative reporting period, including every represented campaign and stock change | All included wax stages and connected storage/utility interfaces | per 1 kg reference flow | calibration; gas analysis; receiver receipt; elemental balance |
| `cp_waste` | `wax_manufacturing` | aqueous and solid wastes | segregated waste records | row_id; origin; wet/dry_mass; water; DCE; oil; catalyst_metals/support; cloth_material; C; H; O; N; S; Cl; full_carrier_mass; hazard; treatment; receiver; transfer_date | Calibrated weighbridge/containers or metered aqueous stream with density, representative sampling, receiver acceptance and manifests; distinguish reuse from actual outward disposal. Aggregation detail: Each net actual outward waste amount / Q; contained pollutants are not also direct environmental outputs at sender. | kg wet stream; dry and constituent kg retained | Each transfer; monthly reconciliation | Same actual representative reporting period, including every represented campaign and stock change | All included wax stages and connected storage/utility interfaces | per 1 kg reference flow | sampling; assays; custody; accepted treatment evidence |
| `cp_air` | `wax_manufacturing` | species after controls | source inventory and emission measurement | source_id; species; CAS; fossil/biogenic; location/subcompartment; control; mass_rate; gas_volume; concentration; response_factor; T; P; dryness; hours; detection_limit; uncertainty; capture/recovery | Use species-specific calibrated vent/stack mass-rate measurement or justified site-representative quantified leak method. BREF3.26.1.3 explains that sniffing/OGI location alone does not give mass; retain detection limits and controls. Reconcile H2/N2 and water with physical ledgers. Aggregation detail: Integrated actual post-control species mass / Q, by source and common period; no total-VOC plus species double count and no arbitrary positive or zero emission. | kg molecular species; measured source units | Measured operating and startup/shutdown periods; full source survey on changes | Same actual representative reporting period, including every represented campaign and stock change | All included wax stages and connected storage/utility interfaces | per 1 kg reference flow | calibration; source coverage; raw readings; method validity; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | Normalized external amount = actual period external amount / Q; Q is kg net accepted reference wax from cp_product. Physical co-product masses remain full amounts in the raw ledger. | actual period amount; Q; cp_product | amount per1kg | `eu-refining-bref-2015` |
| `stock_reconciliation` | stored inputs | Net use = opening stock + receipts - closing stock - actual outward returns/transfers; internal recycle does not create an additional external receipt. | cp_materials; cp_solvent | net external kg | `eu-refining-bref-2015` |
| `solvent_closure` | DCE | Opening DCE + fresh receipts = closing DCE + DCE in products + DCE in exported oil/soft wax/gas + DCE in waste + DCE emitted + other documented exits. Internal recovered solvent cancels only between matching stage links, not against gross process energy. | cp_solvent; cp_gas; cp_waste; cp_air | solvent balance residual | `eu-refining-bref-2015` |
| `mass_and_elements` | physical process | For total mass and each measured C/H/O/N/S/Cl element: opening inventory + gross external inputs = closing inventory + gross external outputs, including accepted wax, all co-products, returns, wastes and actual molecular emissions. Include water, gas impurities, catalyst/support and other carriers in their whole streams. Reactions add no total-mass or elemental source/sink. Reconcile stage links, gas conversion and analytical scope with uncertainty; unknown composition is an explicit gap, not zero or an invented balancing loss. | cp_product; cp_materials; cp_water; cp_gas; cp_waste; cp_air | unallocated ledger residual | `eu-refining-bref-2015` |
| `species_reactions` | water and reacting species | Opening species + species inputs + evidenced reaction formation = closing species + species outputs + evidenced reaction consumption. Water includes feed/carrier moisture, wet H2/N2, steam/contact condensate, clean return, cooling evaporation, wastewater and product/waste moisture. H2 consumption, H2S/NH3 formation and actual reaction water belong here; molecular species are contained in whole streams and are not added again to total mass. DCE closure assumes no reaction; investigate demonstrated degradation with a separate species balance and Cl/C/H conservation. | cp_materials; cp_solvent; cp_water; cp_gas; cp_waste; cp_air | species balance and reaction evidence | `eu-refining-bref-2015` |
| `gross_net_accounting` | boundary exchanges and stocks | Retain gross receipts, dispatch, outward/inward returns and opening/closing stocks before deriving net use. Use gross exchanges plus stock change for physical balances; never subtract stock change again from a balance already using net use. Catalyst/filter/refrigerant service attribution is a separate throughput burden calculation; the actual charge, in-service stock, recovery and disposal remain whole physical masses in their actual periods. | cp_product; cp_materials; cp_solvent; cp_waste | gross ledger; separate net use and service burden | `eu-refining-bref-2015`; `eu-pef-allocation-2021` |
| `interface_matrix` | all stage and external links | Record link_id, sender/receiver unit and stream, boundary/internal role, gross quantity/unit, whole composition, water and elements, T/P/wet basis, energy datum, period/stocks/returns, source record, provider reference and allocated burden separately. Preserve paired solvent, wax, oil/soft wax, H2/wet gas, water/steam/condensate and heat links. Missing linkage is a disclosed gap, not a proxy or zero; external treatment emissions belong at the treatment unit. | all collection protocols; receiver records | paired link matrix and unresolved links | `eu-refining-bref-2015`; `eu-pef-allocation-2021` |
| `thermal_duty` | steam and hot-oil circuit | Heat transferred at the metering interface = measured inlet enthalpy flow - measured returned enthalpy flow, using the same datum and full flow conditions. Useful process duty subtracts only downstream losses not already included in that interface difference; record the meter boundary so the same loss is never subtracted twice. Keep imported steam kg and steam-contact water in the water ledger; verify whether supplier reference denotes gross production, delivered heat or net usable heat. | cp_energy; cp_water | measured net MJ; separate kg | `eu-refining-bref-2015` |
| `energy_closure` | whole unit and stages | Reconcile imported electricity/work and heat, exported useful energy, full material-stream sensible/latent enthalpy, thermal accumulation and boundary losses on a common datum and period. Represent chemical conversion either with consistent species chemical enthalpies or with an independently evidenced reaction-heat term, never both. Retain gross heating/cooling, recovered heat and stage pairs; recovery is not a second purchased utility or an automatic credit. No wax-name calorific qualifier, boiler GCV or invented conversion substitutes for the actual energy balance. | cp_energy; cp_product; cp_materials; cp_gas; cp_water | unallocated energy residual | `eu-refining-bref-2015` |
| `gas_species` | gas stream and emissions | Obtain molecular component mass from actual composition and a valid condition-specific whole-gas mass conversion; integrate measured emitted species mass rates over observed operating time. Monitoring as C, S or N needs explicit molecular conversion/speciation, not silent relabelling. | cp_gas; cp_air | kg actual molecular species | `eu-refining-bref-2015` |
| `burden_partition` | shared burden pool | Product burden per kg wax = directly attributable wax burden / Q + justified wax allocation fraction × remaining shared burden / Q. Derive physical or economic fractions from collected evidence; do not apply this equation to real co-product output quantities. | Q; direct burden; shared burden; allocation evidence | attributed environmental burden | `eu-pef-allocation-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all rows | Verify actual SKU, CAS/composition, material state, route, exact media, property and provider basis separately; unresolved UUID or background cannot be represented by an incompatible close name. | CoA, original identity, supplier records |
| `quality_period` | unit ledger | Use a representative actual common period and disclosed campaigns; include shutdown/startup and catalyst/refrigerant changes; no fabricated survey duration. | dated raw records and representativeness assessment |
| `quality_balance` | all physical stages | Investigate residuals against measured uncertainty, sampling and stocks; report unresolved residuals explicitly. No arbitrary numeric tolerance. | unallocated mass/element/water/energy balances |
| `quality_emission` | source coverage | Retain species, control, location, detection limit and uncertainty. Absence of a test is not zero; screening concentration/OGI alone is not mass. | source inventory, method and raw tests |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | product and route | Verify petroleum-distillate macrocrystalline origin, single DCE route, actual catalyst/feed acceptance, hydrofinishing, SKU and bulk dispatch state. Mixed classification33500does not establish applicability. | `eu-refining-bref-2015`; `sasol-wax-route-2011` |
| `validate_reference` | wax_ref | Exactly one accepted reference-product output uses the reference UUID and row link; 1 kg net accepted wax is identical to all inventory/protocol denominators in both languages. Internal intermediate wax is in the stage ledger. | `eu-refining-bref-2015` |
| `validate_atomic_identity` | inventory | Every row is one real exchange; independently check route/CAS, exact media, property, unit and official localized name. Fill UUID gaps only after actual search and state100direct read; blank UUIDs remain explicit and actual datasets require compatible resolved identities/providers. | `eu-refining-bref-2015` |
| `validate_balance` | physical ledger | Retain complete gas/liquid/solid, water-species, C/H/O/N/S/Cl and energy records; internal links equal at both ends and exported streams match receivers. Physical co-products are not scaled by burden fractions. | `eu-refining-bref-2015`; `eu-pef-allocation-2021` |
| `validate_recovery` | solvent and gas | Reconcile DCE on both product branches and all measured losses; gas to recovery or condensate to treatment is not also a direct environmental emission. Retain control losses and declared refrigerant changes. | `eu-refining-bref-2015` |
| `validate_energy` | utility links | Verify electrical voltage/NCV basis, steam0.45MPaGwhere selected, gauge/absolute pressure, T/dryness, provider reference and net thermal-energy basis. A generic MJflow or calorific property alone does not complete steam/heat linkage. | `eu-refining-bref-2015` |
| `validate_allocations` | burden ledger | Record avoidance assessment, justified relationship, real driver/price records, fractions, sensitivity and upstream refinery share. Do not silently assign zero burden to residues or double-count credits. | `eu-pef-allocation-2021` |
| `validate_extensions` | additional site units | Before complete dataset claims, add actual atomic flows and evidence for combustion, flare, wastewater treatment, other utilities/refrigerants or packaging. Include all measured species; particulate nested size intervals and aggregates must not be added twice. Unknown relationships or missing emission coverage remain incomplete. | `eu-refining-bref-2015` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after complete provider, inventory and quality resolution |
| downstream_use | Qualified petroleum paraffin input to separately modelled wax formulations or applications |
| allowed_use | Matching petroleum origin, product specification, route, state, geography and period; declared allocation and utility basis |
| excluded_use | Whole33500coverage; coke/bitumen/petrolatum/FT/plastic wax proxies; universal recipe; use-phase performance equivalence; food/pharma certification claim |
| required_metadata | All reference qualifiers; upstream refinery share; actual atomic exchanges/providers; unit boundaries; period; co-product receivers; method/uncertainty; allocation and compatible utility definitions |
| required_quality_disclosure | Identity/provider gaps, missing sampling, residual balances, provisional backgrounds and unreviewed/excluded units remain explicit; no automatic methodological approval |
| update_trigger | Feed origin/SKU/solvent/catalyst/process/control/utility/receiver/geography/period change or authoritative evidence change |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `eu-refining-bref-2015` | Official guidance (`official_guidance`) | European Commission JRC, Best Available Techniques Reference Document for the Refining of Mineral Oil and Gas, 2015, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf | §2.3 p.48(PDF82); §3.26.1.3 pp.228–229(PDF262–263); §4.3.3–4.3.8 pp.256–259(PDF290–293); §4.25 p.574(PDF608). Process, solvent-recovery branches, hydrogen/catalysts, gas/sulfur interfaces, utilities, waste and quantified-leak limitations. Historical numbers are not defaults; chlorinated-solvent avoidance and applicability limits retained. |
| `sasol-wax-route-2011` | Literature (`literature`) | Sasol Limited, Form20-F for year ended30June2011, filed7October2011, printed pp.68–69(PDF69–70), https://www.sasol.com/sites/default/files/2023-11/Sasol%20Form%2020-F%2C%2030%20June%202011.pdf | Primary historical producer description distinguishes petroleum slack-wax deoiling/hydrogenation in Hamburg from FT manufacture in Sasolburg; bulk/solidified sales. Does not identify DCE or catalyst, establish current production, or supply a recipe, capacity default, emission factor or quantitative range. |
| `eu-pef-allocation-2021` | Official guidance (`official_guidance`) | European Commission, Recommendation(EU)2021/2279, AnnexI §4.5, pp.63–64, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Generic multifunctionality hierarchy only: investigate subdivision/expansion, relevant physical relationship, then justified other relationship. No wax-specific fraction; no claim of complete PEF or recycling-CFF compliance. |
