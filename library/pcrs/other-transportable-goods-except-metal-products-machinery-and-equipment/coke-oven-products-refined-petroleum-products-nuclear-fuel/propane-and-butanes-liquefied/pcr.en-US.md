---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.propane-and-butanes-liquefied
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Liquefied propane and butanes: refinery separation and bulk delivery

## 1. Scope and Applicability

This method covers refinery gas-separation or liquid refinery-component blending/supply routes for fossil commercial propane, specified butane grades and composition-defined LPG blends at one industrial bulk liquid delivery gate. It starts with actual burden-bearing raw gas, mixed natural-gas liquids, refinery gas/liquid fractions or purchased liquid blending components. Use the gas-recovery and refinery submodels already supporting that feed, extending only the actual separation, final treatment, blending, liquid storage and loading operations. A fractionation co-product is not justification to recreate an entire gas field or refinery. Do not impose a fractionation step on an actual component-blending terminal. `ref-bref-2015`, `eia-propane-2023`, `eia-storage-2026`

Exclude standalone natural-gas fractionator finished-product reference bindings, LNG, gaseous propane/butane delivery, olefin-rich propane/propylene or butylene products, extraction, refinery cracking/reforming manufacture, high-purity analytical/refrigerant certification and customer combustion. Bulk liquid may be pressurised, refrigerated or both; a gaseous cubic metre, refrigeration-circuit propane charge or unseparated Y-grade is not the delivered liquid reference product. No universal composition, purity, pressure, temperature, recipe, yield or emission factor is prescribed. The data producer must select one physically verified product identity before using this method.

Natural-gas-derived feeds enter only where actually received by this refinery or refinery-component supply unit; reuse upstream gas-recovery/treatment methodology once. That feed origin does not automatically place a standalone natural-gas fractionator within this reference binding.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.propane-and-butanes-liquefied |
| classification_refs | CPC 3.0:33410; narrower |
| covered_products | Fossil commercial liquid propane; specified n-butane/isobutane grade; composition-defined propane-butane LPG blend |
| excluded_products | Standalone natural-gas fractionator reference binding; LNG; gaseous delivery; olefin-rich petrochemical gas; extraction or whole-refinery inventory; analytical/refrigerant certification; cylinder manufacture; customer combustion |
| representative_product | One composition-qualified commercial SKU at a declared liquid gate |
| production_route | Actual refinery separation/final treatment extending an existing recovery or fractionation submodel; liquid refinery-component blending/supply; liquid storage/delivery |
| market_state | Bulk liquid maintained by pressure, refrigeration or both |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver composition- and quality-qualified liquid propane/butane product, without useful-heat equivalence |
| How much | 1 kg |
| How well | site and production period; one SKU and commercial grade; propane/n-butane/isobutane assay and olefin impurities; purity; water and sulfur; fossil origin; raw-feed sources and upstream gates; recovery/separation or purchased-component blending route; liquid phase at transfer; mass meter or liquid density and measured volume; temperature and absolute pressure; gas-volume wet/dry and reference conditions with compressibility; storage and loading vapour destination; utilities and steam-return basis; co-products and allocation; gate and transport scope |
| How long or cycle | One liquid-gate supply in a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and production period; one SKU and commercial grade; propane/n-butane/isobutane assay and olefin impurities; purity; water and sulfur; fossil origin; raw-feed sources and upstream gates; recovery/separation or purchased-component blending route; liquid phase at transfer; mass meter or liquid density and measured volume; temperature and absolute pressure; gas-volume wet/dry and reference conditions with compressibility; storage and loading vapour destination; utilities and steam-return basis; co-products and allocation; gate and transport scope |

Declare every qualifier in dataset metadata or reference-flow comments. The reference mass property/unit group are verified native links for the representative LPG flow; actual provider quantities, composition/grade and liquid-gate compatibility still require dataset-specific collection.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | D is positive accepted net whole liquid product mass for the same SKU, route, site and period, collected using cp_final_product; every row uses per 1 kg reference flow. Include accepted contained water, odorant and other additives in D; D is not dry hydrocarbon mass. Exclude packaging, container tare and duplicate internal handoffs. Reconcile actual returns, heels and stock changes without subtracting a return twice. |
| liquid_volume | final_product, blend_propane, blend_nbutane, blend_ibutane | Mass | kg | Obtain liquid mass by calibrated mass metering or m_liquid=V_liquid*rho_liquid(T,P,x), with measured liquid volume, temperature, absolute pressure and composition-compatible density. Gas volume cannot directly represent liquid product quantity; unknown liquid density/state remains unresolved. |
| gas_volume | raw_gas, refinery_gas, residue_gas, fuel_gas | Volume | m3 | Keep raw gas volume wet/dry basis and metered/reference T/P. Convert using m_gas=P_abs*V_gas*MW(x)/(Z*R*T) in consistent units, or matching measured gas-phase density. Match provider/background m3 definition; a database secondary mass factor is not gas density. |
| steam_heat | steam, condensate_return | Energy | MJ | Record steam and returned condensate using actual mass, pressure, temperature, quality and enthalpy. Net delivered heat=m_in*h_in-m_return*h_return with declared enthalpy datum, other losses and boundary. Steam mass or an MJ property alone does not establish net delivery basis. |
| utilities_active | electricity, mea, teg, caustic, odorant | Declared row property | MJ; kg | Preserve actual electricity reference property; 1kWh=3.6MJ. Input flow quantity is delivered-grade product mass. Active substance mass=m_product*w_active; retain carrier water/contaminants in the physical ledger, without an additional purchased-water exchange for contained water. Do not treat wet solution as pure chemical. No default concentration or quantity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Burden-bearing gas/liquid feed at an existing submodel interface or purchased liquid blending components |
| starting_condition_role | Supplied feed; no repeated resource extraction or whole refinery |
| product_classification_scope | Fossil commercial liquid propane; specified n-butane/isobutane grade; composition-defined propane-butane LPG blend |
| recursive_input_rule | Purchased same-category components link complete supplier/gate datasets; internal recycling retains matched endpoints without another purchase or credit. |
| upstream_dataset_requirement | Actual gas/refinery feed, blending component, utility, material, infrastructure and waste-management interfaces and burdens; disclose missing coverage. |
| disclosure | site and production period; one SKU and commercial grade; propane/n-butane/isobutane assay and olefin impurities; purity; water and sulfur; fossil origin; raw-feed sources and upstream gates; recovery/separation or purchased-component blending route; liquid phase at transfer; mass meter or liquid density and measured volume; temperature and absolute pressure; gas-volume wet/dry and reference conditions with compressibility; storage and loading vapour destination; utilities and steam-return basis; co-products and allocation; gate and transport scope |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_existing | all operations | Start at the disclosed gas/liquid inlet to the existing recovery/fractionation submodel. Preserve supplier extraction/refinery conversion burdens, feed provenance and all upstream gas/liquid/solid co-products (including coke where applicable) in their original physical ledger; do not delete or duplicate them. Shared treatment, sulfur recovery, wastewater management and energy systems must have one owner. An integrated site may expose the shared physical submodel and operation-level allocation; a standalone terminal links qualified upstream datasets. | ref-bref-2015; epa-gas-processing-1995 |
| boundary_stages | lpg | Declare reception, actual cooling/absorption, de-ethanising, depropanising/debutanising/isomer separation, actual sweetening/drying, blending, odorisation, liquid storage and closed-loop loading/vapour handling stage meters. Their sequence is site-specific. Aggregate them as one LPG foreground unit; cancel internal same-material links with identical endpoint quantities, while retaining stage mass/energy observations. No additional finished-reference output at a storage/packaging handoff. | ref-bref-2015; eia-storage-2026 |
| boundary_vapour | lpg | Distinguish recovered vapour recycled internally, gas sent to an existing fuel header, gas transferred to external treatment, vented species and flare/combustion exhaust. Measure the actual recovery and destruction state; never classify all displaced LPG vapour as emitted or assume complete combustion. Refrigeration-circuit losses are tracked independently from product losses. | ref-bref-2015; epa-gas-processing-1995 |
| boundary_energy | lpg | Record electricity, imported steam, fuel and each actual refrigerant separately. Recovered upstream reboiling heat retains its heat interface and prior burden; it is not free steam. Imported steam is distinct from foreground boiler fuel and exhaust. Include actual refrigeration/cooling, wastewater and spent adsorbent handling. Actual additional chemicals, refrigerants, packaging, wastes and releases each require their own atomic exchange before dataset completion. A background link must cover the entire actual operation and upstream burdens; record its gate, period, composition/state and coverage. A cutoff needs a documented rationale, omitted burdens and sensitivity; missing quantities never become zero, and paired physical pipes remain in the unallocated ledger. | ref-bref-2015 |
| boundary_gate | lpg | The product gate is the documented liquid custody transfer, before customer vaporisation or use. Include on-site tank residence and loading losses through that gate; off-site shipping enters only if explicitly within the declared boundary and supported by its own submodel. Allocate infrastructure over actual lifetime throughput or justify exclusion and sensitivity. Bulk tank and pressure-container manufacture are not additional foreground production stages, but their service burdens remain attributable to LPG delivery: collect container/tank identity, material and tare, lifetime throughput or service cycles, repair/replacement, inspection, cleaning/hydrotest, coating, utilities, wastes and retirement. Include actual reusable-container return/empty handling within the gate, residual LPG and returned stocks. Link complete service datasets once; add an atomic exchange for each actual material, utility, waste or release they do not cover. Do not count the entire durable container mass as consumed per filling, assume unlimited reuse, or assign a default lifetime. | eia-storage-2026 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| lpg | Actual LPG separation or blending and liquid delivery | required | Actual declared site route; absent stages excluded with evidence | Foreground production with separate stage observations | per 1 kg reference flow |

Stage ledger: inlet gas/liquid reception → actual treatment/fractionation → composition acceptance or blending → liquid tank → loading transfer. Purchased-component blending starts at component reception. Every internal link retains from/to, mass or composition/T/P-qualified volume, period and equal endpoint quantities. Mark circulating absorbent, refrigerant, recovered vapour, own-use fuel header and stocks separately. Do not add absent stages or upstream operations already counted.

### Process: Actual LPG separation or blending and liquid delivery (`lpg`)

#### Inputs

##### Product flows

###### Wet natural gas feed supplied to LPG recovery (`raw_gas`)

Only gas received at the declared recovery interface. Preserve wet/dry composition, water, acid gas and upstream gas-production burdens. Reuse the existing gas-method submodel once; extraction is not repeated.

- Selected flow: Wet natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_raw_gas and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_raw_gas`
- Sources: ref-bref-2015; epa-gas-processing-1995; eia-propane-2023

###### Refinery C1-C5 gas feed to gas separation (`refinery_gas`)

Only a metered refinery gas inlet. Retain contributing distillation, cracking and reforming origins and associated prior burdens; this unit does not reproduce those units.

- Selected flow: Refinery C1-C5 gas feed to gas separation
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_refinery_gas and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refinery_gas`
- Sources: ref-bref-2015

###### Mixed natural gas liquids feed to fractionation (`mixed_ngl`)

Only received Y-grade liquid; preserve C2/C3/C4/C5+, sulfur, water and supplier recovery boundary. This is not finished LPG or a gaseous cubic metre.

- Selected flow: Mixed natural gas liquids feed to fractionation
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_mixed_ngl and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mixed_ngl`
- Sources: ref-bref-2015; eia-propane-2023

###### Refinery C3-C4 liquid feed to LPG separation (`refinery_liquid`)

Only the actual liquid inlet from refinery units; record olefins and treatment history. Cancel links inside the aggregated LPG unit.

Use this UUID only for a received refinery LPG liquid fraction already matching the actual commercial C3/C4 supply identity. Olefin-rich or unseparated raw liquids require another flow.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_refinery_liquid and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refinery_liquid`
- Sources: ref-bref-2015

###### Liquid propane supplied for LPG blending (`blend_propane`)

External blending component only. Use actual batch composition, liquid mass and burden-bearing supplier dataset. Internal recovered fraction is a stage observation, not another purchase.

Use only an actual compatible propane grade and supply/circuit state; collect mass and certificate composition. Supplier grade, liquid/circuit state and density-condition compatibility are separate requirements; neither record density nor an assumed refrigerant-grade purity is a PCR default.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_blend_propane and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blend_propane`
- Sources: ref-bref-2015; eia-storage-2026

###### Liquid n-butane supplied for LPG blending (`blend_nbutane`)

External blending component only. Use actual batch composition, liquid mass and burden-bearing supplier dataset. Internal recovered fraction is a stage observation, not another purchase.

This UUID is normal butane, CAS106-97-8; it is not isobutane. Actual impurities, commercial grade, liquid state and recipient must be compatible.

- Selected flow: Butane `e02e31b8-818f-44b7-af25-f32f1e923965`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_blend_nbutane and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blend_nbutane`
- Sources: ref-bref-2015; eia-storage-2026

###### Liquid isobutane supplied for LPG blending (`blend_ibutane`)

External blending component only. Use actual batch composition, liquid mass and burden-bearing supplier dataset. Internal recovered fraction is a stage observation, not another purchase.

- Selected flow: Liquid isobutane supplied for LPG blending
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_blend_ibutane and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blend_ibutane`
- Sources: ref-bref-2015; eia-storage-2026

###### Electricity supplied to LPG processing (`electricity`)

Meter compression, chilling, fractionation, vapour recovery and loading separately; aggregate once. Require actual supplier, voltage and reference energy property. No incineration-power surrogate.

This UUID applies only to actual 1–35 kV consumption-side grid-average AC. Use the native Net calorific value/MJ reference and a geographically/temporally compatible supplier. Other voltages, self-generation or special sources require separate verified bindings.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual matched-period quantity using cp_electricity and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: ref-bref-2015

###### Process steam supplied to LPG reboilers (`steam`)

Purchased steam only. Actual pressure, temperature, quality and condensate return define net delivered heat. Unknown supplier MJ basis stays unresolved; internally generated steam needs its own fuels and releases.

- Selected flow: Process steam
- Flow property / unit: Energy / MJ
- Amount rule: Collect actual matched-period quantity using cp_steam and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources: ref-bref-2015

###### Natural gas supplied for on-site LPG heating (`fuel_gas`)

Only external gaseous natural-gas fuel; retain provider m3 T/P, wet/dry composition and compressibility. A secondary mass factor is not density. Internal refinery gas diverted to own use remains in the physical ledger, not a second external purchase.

The native reference is Volume/m3, not Mass. Supplier reference T/P, wet/dry composition and compressibility must be compatible before linking background quantities; no secondary mass coefficient is treated as density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual matched-period quantity using cp_fuel_gas and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel_gas`
- Sources: ref-bref-2015

###### Fresh process water supplied to LPG processing (`water`)

Purchased make-up only, excluding circulating cooling water. Record supply quality, metered mass and actual use. Direct withdrawal is the separate river-water row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_water and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: ref-bref-2015

###### Monoethanolamine make-up to LPG acid-gas treatment (`mea`)

Only actual MEA treatment not already included in the upstream dataset. Measure active MEA mass and carrier water independently; other solvents require separate identities.

This UUID is supplied high-purity monoethanolamine of at least99.5% purity. Collect delivered-grade product mass; record actual assay and dilution water independently. It does not identify an entire aqueous circulating solvent solution.

- Selected flow: Ethanolamine `2d7079eb-ae82-427f-8d0c-95ba3e263729`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_mea and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mea`
- Sources: ref-bref-2015

###### Triethylene glycol make-up to LPG feed dehydration (`teg`)

Only an actual TEG dehydration unit within the declared gate; no generic solvent recipe or repeated circulation quantity.

- Selected flow: Triethylene glycol make-up to LPG feed dehydration
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_teg and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_teg`
- Sources: ref-bref-2015

###### Industrial sodium hydroxide product for LPG treatment (`caustic`)

Only actual caustic treatment/guard bed. Record delivered product mass and active fraction; retain its contained water in the water balance without a second purchased-water exchange.

This UUID is supplied industrial solid sodium hydroxide of95–98% purity. Use delivered-grade product mass, not active-pure-NaOH mass; assay and any dilution water are retained separately. Other concentrations or grades require another identity.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_caustic and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_caustic`
- Sources: ref-bref-2015

###### Molecular-sieve adsorbent supplied to LPG drying (`sieve`)

Only actual sieve replacement; supplier composition and regeneration cycles required. Mercury-removal sorbents of different chemistry require their own row.

- Selected flow: Molecular-sieve adsorbent supplied to LPG drying
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_sieve and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sieve`
- Sources: ref-bref-2015

###### Propane make-up to LPG refrigeration circuit (`refrigerant_propane`)

Only actual propane refrigerant, not LPG product or the circulating charge. Record recharge and retirement; other refrigerants need separate cards and emissions.

Use only an actual compatible propane grade and supply/circuit state; collect mass and certificate composition. Supplier grade, liquid/circuit state and density-condition compatibility are separate requirements; neither record density nor an assumed refrigerant-grade purity is a PCR default.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_refrigerant_propane and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant_propane`
- Sources: ref-bref-2015

###### Ethanethiol supplied for LPG odorisation (`odorant`)

Conditional only on actual ethanethiol (CAS75-08-1), with certificate, purity and dose records. Collect delivered whole product mass and actual ethanethiol fraction. A formulated odorant mixture requires a separate composition-qualified formulation exchange including its carriers; ethanethiol active mass does not represent the whole formulation. Reconcile storage, dosing, spills, retained product and species releases without purchasing contained carrier twice. No compulsory odorant or default dosage; a different odorant is a different row.

- Selected flow: Ethanethiol supplied for LPG odorisation
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_odorant and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_odorant`
- Sources: ref-bref-2015

###### Nitrogen gas supplied for LPG purging (`nitrogen`)

Actual external nitrogen only. Use cylinder net mass or measured composition-qualified gas volume; purge vapours require species accounting.

This UUID is compatible air-separation nitrogen gas; confirm actual gaseous delivery grade and mass. Do not substitute liquid nitrogen.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_nitrogen and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nitrogen`
- Sources: ref-bref-2015

##### Elementary flows

###### Fresh river water withdrawn for LPG cooling (`river_water`)

Only direct river withdrawal at the actual basin; do not confuse product process water or liquid emission to water. Record intake and actual return separately.

This UUID is renewable river-water resource from water, Volume/m3, not wastewater or water release. Record actual basin and returned water separately.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual matched-period quantity using cp_river_water and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: ref-bref-2015

###### Ambient atmospheric air entering on-site combustion (`combustion_air`)

Only actual on-site combustion; retain measured or oxygen-balance-derived air mass, moisture and oxygen/nitrogen inputs in the physical balance.

This UUID is renewable material resource from air, Mass/kg, not an air-emission flow. Retain raw combustion-air metering or oxygen balance.

- Selected flow: air `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_combustion_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_combustion_air`
- Sources: ref-bref-2015

#### Outputs

##### Product flows

###### Liquefied propane-butane product at the declared gate (`final_product`)

Exactly one selected saleable composition-qualified liquid SKU/grade per dataset. The representative LPG mixture UUID is not proof of a pure propane or pure butane identity; a distinct single-species SKU requires its own verified route/grade-compatible reference binding before dataset completion. Measure accepted whole net liquid mass D including accepted contained water and additives, excluding packaging and tare. Record dry hydrocarbon mass only as a derived composition quantity. Stage intermediates are not additional reference outputs.

The representative UUID is refinery LPG supply at an industrial gate. Require an actual liquid commercial C3/C4 product and composition/grade acceptance; no database calorific value or generic density is a foreground quantity. A standalone natural-gas fractionator requires a separately verified route-compatible reference binding before use.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_product`
- Sources: ref-bref-2015

###### Methane-rich residual gas exported from LPG separation (`residue_gas`)

Only actual exported gas; preserve C1/C2 composition, supplier basis and receiver. Internal fuel use has no exported co-product credit.

- Selected flow: Methane-rich residual gas exported from LPG separation
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_residue_gas and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_gas`
- Sources: ref-bref-2015

###### Ethane fraction exported from LPG separation (`ethane_product`)

Only saleable exported C2 fraction with actual impurities and mass.

- Selected flow: ethane `75e47deb-a71a-472e-aaff-7d6767db1e8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_ethane_product and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ethane_product`
- Sources: ref-bref-2015

###### C5-plus condensate exported from LPG separation (`c5_product`)

Only actual exported stabilized condensate/light gasoline. Declare composition and receiver; recycled absorbent is internal.

- Selected flow: C5-plus condensate exported from LPG separation
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_c5_product and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_c5_product`
- Sources: ref-bref-2015

###### Non-reference liquid propane exported as co-product (`coproduct_propane`)

Only if propane is not the selected reference SKU; retain distinct validated identity, grade and gate.

Use only an actual compatible propane grade and supply/circuit state; collect mass and certificate composition. Supplier grade, liquid/circuit state and density-condition compatibility are separate requirements; neither record density nor an assumed refrigerant-grade purity is a PCR default.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_coproduct_propane and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coproduct_propane`
- Sources: ref-bref-2015

###### Non-reference liquid n-butane exported as co-product (`coproduct_nbutane`)

Only if this n-butane grade is not the reference SKU; internal blend component is not exported.

This UUID is normal butane, CAS106-97-8; it is not isobutane. Actual impurities, commercial grade, liquid state and recipient must be compatible.

- Selected flow: Butane `e02e31b8-818f-44b7-af25-f32f1e923965`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_coproduct_nbutane and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coproduct_nbutane`
- Sources: ref-bref-2015

###### Non-reference liquid isobutane exported as co-product (`coproduct_ibutane`)

Only if this isobutane grade is not the reference SKU; preserve isomer assay and receiver.

- Selected flow: Non-reference liquid isobutane exported as co-product
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_coproduct_ibutane and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coproduct_ibutane`
- Sources: ref-bref-2015

###### Liquid steam condensate returned to heat supplier (`condensate_return`)

Only actual returned condensate; keep mass, temperature and enthalpy without a second heat credit.

- Selected flow: Liquid steam condensate returned to heat supplier
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_condensate_return and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condensate_return`
- Sources: ref-bref-2015

##### Waste flows

###### LPG treatment wastewater transferred for treatment (`wastewater`)

Only a transfer to treatment. Record water, hydrocarbons, sulfide, ammonia, amines and recipient; no electrolytic-manganese wastewater surrogate. On-site treated discharge requires receiving compartment and separate pollutant rows.

This is a broad industrial wastewater transfer identity conditioned on actual compatible secondary/tertiary recipient treatment. Record chemical loads, water mass and receiving facility; a treated-water release or source-specific silicon/manganese wastewater is a different exchange.

- Selected flow: Wastewater `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_wastewater and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: ref-bref-2015

###### Hydrogen-sulfide-rich acid gas transferred for sulfur recovery (`acid_gas`)

Only actual transferred acid gas; record whole mixed-stream mass and H2S/CO2/water plus other actual species fractions on the same wet/dry basis. H2S mass=m_acid_gas*w_H2S is a constituent observation, not the whole transfer quantity or an extra mass output. Link sulfur recovery and its actual sulfur products, tail gas, water and residues once. Transfer is not H2S air emission; on-site sulfur recovery requires its full submodel and sulfur product ledger.

- Selected flow: Hydrogen-sulfide-rich acid gas transferred for sulfur recovery
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_acid_gas and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acid_gas`
- Sources: ref-bref-2015

###### Spent monoethanolamine solvent transferred for treatment (`spent_amine`)

Only actual discharged MEA solvent, with water and contaminant composition; regenerated circulating solvent is internal.

- Selected flow: Spent monoethanolamine solvent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_spent_amine and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_amine`
- Sources: ref-bref-2015

###### Spent LPG molecular-sieve adsorbent transferred for treatment (`spent_sieve`)

Only actual spent sieve; retain hydrocarbons, sulfur and measured mercury where present, plus receiver and hazardous status.

Use only an actual spent molecular-sieve solid with substrate, adsorbates, mercury where present, hazardous status and receiver documented. This generic identity does not establish a treatment provider.

- Selected flow: Waste molecular sieve `2328c994-b537-46f8-81a2-60cdbe77a095`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_spent_sieve and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_sieve`
- Sources: ref-bref-2015

###### Spent LPG caustic solution transferred for treatment (`spent_caustic`)

Only actual spent caustic solution; retain water, sodium, sulfide/mercaptide, hydrocarbons and recipient treatment.

- Selected flow: Spent LPG caustic solution transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_spent_caustic and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_caustic`
- Sources: ref-bref-2015

##### Elementary flows

###### Fossil methane emitted to outdoor air (`methane_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_methane_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_methane_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Fossil ethane emitted to outdoor air (`ethane_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: ethane `4d9a8790-3ddd-11dd-9219-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_ethane_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ethane_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Fossil propane emitted to outdoor air (`propane_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: propane `fe0acd60-3ddc-11dd-aae9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_propane_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_propane_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Fossil n-butane emitted to outdoor air (`nbutane_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: n-butane `4d9a8790-3ddd-11dd-94c2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_nbutane_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nbutane_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Fossil isobutane emitted to outdoor air (`ibutane_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: isobutane `4d9a8790-3ddd-11dd-9355-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_ibutane_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ibutane_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Ethanethiol emitted to outdoor air (`ethanethiol_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

- Selected flow: Ethanethiol emitted to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect actual matched-period quantity using cp_ethanethiol_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ethanethiol_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Fossil carbon dioxide emitted to outdoor air (`co2_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_co2_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Hydrogen sulfide emitted to outdoor air (`h2s_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_h2s_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_h2s_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Sulfur dioxide emitted to outdoor air (`so2_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_so2_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_so2_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Carbon monoxide emitted to outdoor air (`co_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_co_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Nitrogen monoxide emitted to outdoor air (`no_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_no_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_no_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Nitrogen dioxide emitted to outdoor air (`no2_air`)

Only actual release of this species after recovery/control, with outdoor-air receiving compartment and source process. Separate leaks, vents, loading displacement, refrigerant losses and combustion/flare stacks. Record concentration quantity definition, flow, T/P, duration and uncertainty. No total-VOC/NOx or correction-flow surrogate and no assumed complete oxidation.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_no2_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_no2_air`
- Sources: ref-bref-2015; epa-gas-processing-1995

###### Particulate matter of diameter up to 2.5 micrometres emitted to outdoor air (`pm25_air`)

Only actual particle-bearing combustion/flare/control release. Retain measurement definition of aerodynamic size, filterable/condensable basis and final outdoor-air compartment. These three bins must be mutually exclusive; cumulative PM10 and PM2.5 cannot be summed. Captured sorbent/dust is not an air release.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_pm25_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm25_air`
- Sources: ref-bref-2015

###### Particulate matter above 2.5 and up to 10 micrometres emitted to outdoor air (`pm2510_air`)

Only actual particle-bearing combustion/flare/control release. Retain measurement definition of aerodynamic size, filterable/condensable basis and final outdoor-air compartment. These three bins must be mutually exclusive; cumulative PM10 and PM2.5 cannot be summed. Captured sorbent/dust is not an air release.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_pm2510_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm2510_air`
- Sources: ref-bref-2015

###### Particulate matter above 10 micrometres emitted to outdoor air (`pmover10_air`)

Only actual particle-bearing combustion/flare/control release. Retain measurement definition of aerodynamic size, filterable/condensable basis and final outdoor-air compartment. These three bins must be mutually exclusive; cumulative PM10 and PM2.5 cannot be summed. Captured sorbent/dust is not an air release.

This UUID is outdoor-air unspecified. Retain actual fossil origin and this species mass; known more specific air subcompartments require matching verified UUIDs, never indoor, soil, water or long-term substitutions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual matched-period quantity using cp_pmover10_air and divide by D for per 1 kg reference flow. Retain pre-allocation physical quantity; shared burdens use the separate allocation account.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pmover10_air`
- Sources: ref-bref-2015

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared burdens | First subdivide by actual metered operations or assess a documented expanded system. For unresolved shared burdens, use a demonstrable causal physical relationship; if unavailable, justify same-gate period-matched economic allocation and sensitivity. Do not infer a universal mass or heating-value share from the product label. | eu-pef-multifunctionality-2021 |
| allocation_ledgers | all rows | Keep the unallocated physical process diagram and feed/product/total-mass/water/C/H/O/N/S/energy balances separate from the environmental burden account. Preserve co-product quantities, compositions, phases, receivers and stock changes. Multiply only shared burdens by accepted allocation factors; do not mechanically multiply physical co-product outputs by those factors. In the reference-specific result, selected product is 1 kg; all physical observations remain traceable by D. | eu-pef-multifunctionality-2021; ref-bref-2015 |
| allocation_internal | internal links | Internal recycling of absorbent, refrigerant, vapour, gas fuel or condensate is recorded at both stage endpoints with matching quantities, but does not create a second external input or avoided-product credit. Own-use fuel is part of actual physical energy/carbon balance and its combustion has one owner. Waste disposal and flaring do not become saleable co-products. | ref-bref-2015; eu-pef-multifunctionality-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw_gas | lpg | `raw_gas` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_refinery_gas | lpg | `refinery_gas` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_mixed_ngl | lpg | `mixed_ngl` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_refinery_liquid | lpg | `refinery_liquid` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_blend_propane | lpg | `blend_propane` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_blend_nbutane | lpg | `blend_nbutane` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_blend_ibutane | lpg | `blend_ibutane` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_electricity | lpg | `electricity` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | MJ | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_steam | lpg | `steam` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Meter actual steam pressure/temperature/quality, inlet mass/enthalpy and returned condensate separately; verify supplier net-MJ basis, enthalpy datum, delivery losses and physical boundary. Unknown basis prevents a complete supply link. | MJ | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_fuel_gas | lpg | `fuel_gas` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | m3 | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_water | lpg | `water` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_mea | lpg | `mea` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_teg | lpg | `teg` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_caustic | lpg | `caustic` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_sieve | lpg | `sieve` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_refrigerant_propane | lpg | `refrigerant_propane` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_odorant | lpg | `odorant` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Collect delivered whole ethanethiol-grade mass, assay, storage/return stocks and actual dose. For a formulated mixture, add a separately verified whole-formulation exchange with carrier/active fractions and trace retained product, spills and species releases; no assumed dose or duplicate carrier purchase. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_nitrogen | lpg | `nitrogen` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_river_water | lpg | `river_water` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Meter direct withdrawal volume at the actual basin/country, convert to physical water mass with compatible measured density, and separately record return water, evaporation, losses and receiving water body. Pollution species require their own verified receiving-media exchanges; a wastewater-treatment transfer is not an elementary freshwater discharge. | m3 | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_combustion_air | lpg | `combustion_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Collect actual combustion air whole mass, moisture and oxygen/nitrogen composition using calibrated metering or documented oxygen balance; retain unreacted N2/O2 and water in gross exhaust. Pollutant species partition the carrier; unknown air or exhaust quantities cannot be zero. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_final_product | lpg | `final_product` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated mass meter or liquid loading weighing; volume conversion requires same-liquid composition, T/P and density. Reconcile batch acceptance, returned product/heels and opening/closing liquid and vapour stocks to independent positive D; D includes accepted water/additives, not dry hydrocarbon mass. Retain tank liquid volume and vapour space separately, with density(T,P,x) for liquid and P/T/Z/composition for vapour. These are future site measurements, not invented default quantities. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_residue_gas | lpg | `residue_gas` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_ethane_product | lpg | `ethane_product` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_c5_product | lpg | `c5_product` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_coproduct_propane | lpg | `coproduct_propane` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_coproduct_nbutane | lpg | `coproduct_nbutane` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_coproduct_ibutane | lpg | `coproduct_ibutane` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_condensate_return | lpg | `condensate_return` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Meter returned liquid condensate mass, temperature/pressure and enthalpy on the steam-supplier datum; retain actual flash vapour, drain, loss and return stock paths. Reconcile with inlet steam water and net heat without a duplicate heat credit. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_wastewater | lpg | `wastewater` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_acid_gas | lpg | `acid_gas` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Meter whole mixed acid-gas mass, or convert matching wet/dry P/T/Z/composition volume; assay H2S, CO2, water and other species. Retain whole kg and constituent kg as separate observations without adding them together; link receiver sulfur-recovery balance and burdens once. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_spent_amine | lpg | `spent_amine` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_spent_sieve | lpg | `spent_sieve` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_spent_caustic | lpg | `spent_caustic` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Use calibrated scales, flow/utility meters and assays at actual stages/interfaces; reconcile matched period and opening/closing stocks, preserving raw units and dimensional conversions. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_methane_air | lpg | `methane_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_ethane_air | lpg | `ethane_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_propane_air | lpg | `propane_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_nbutane_air | lpg | `nbutane_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_ibutane_air | lpg | `ibutane_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_ethanethiol_air | lpg | `ethanethiol_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_co2_air | lpg | `co2_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_h2s_air | lpg | `h2s_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_so2_air | lpg | `so2_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_co_air | lpg | `co_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_no_air | lpg | `no_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_no2_air | lpg | `no2_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_pm25_air | lpg | `pm25_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_pm2510_air | lpg | `pm2510_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_pmover10_air | lpg | `pmover10_air` | measurement_record | site; period; SKU; actual route; phase; whole quantity and original unit; calibration; liquid/vapour opening/closing stocks; returns/heels; paired internal links; D; composition/purity/water/sulfur/additives; temperature/absolute pressure; gas wet/dry basis/Z; liquid density conditions; provider basis; receiving compartment or recipient; uncertainty | Integrate calibrated source flow and this species concentration over time; retain gas wet/dry basis, T/P, monitored amount definition, efficiency and outdoor-air subcompartment. Leak estimates need equipment, screening method, operating time, composition and corresponding method provenance. Preserve before/after control quantities; no unsourced factor. | kg | Each batch or continuous records; monthly reconciliation | Complete production year or justified representative period; startup/shutdown and seasonality retained | Same declared site and liquid gate | per 1 kg reference flow | Calibration, original records, assays, provider definitions, residuals and uncertainty |
| cp_allocation | lpg | shared burdens | allocation_record | operation physical quantities; product and gas/liquid/solid co-products; prices; currency; period; shared meters; causal evidence | First reconcile the complete unallocated ledger, then record subdivision and causal/economic allocation by operation; do not change physical co-product amounts. | kg; MJ; currency | Monthly reconciliation | Same production period | Same shared system | per 1 kg reference flow; burden account | Unallocated physical ledger; shares sum to1; sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all inventory rows | Normalized physical exchange=actual matched-period quantity / D; environmental burden=(direct burden+allocated shared burden)/D. Cancel internal links first; physical co-product quantities are not multiplied by allocation shares. | cp_final_product; row-specific cp; cp_allocation | per 1 kg reference flow | eu-pef-multifunctionality-2021 |
| physical_balance | lpg | Reconcile original physical ledger as sum(in)+opening_stock=sum(out)+closing_stock+residual; check total mass, water, C, H, O, N, S and energy separately. Whole carriers cross each physical boundary once; their constituent species are partitions, not additional mass. Chemical reactions redistribute species and may form/consume water, but are not extra sources or sinks of total mass or conserved elements. Measured composition with T/P/density or gas-state conversion establishes species mass. Retain combustion air, fuel, exhaust and incomplete flare conversion separately; unknown losses retain residuals and investigation. | Stage meters; composition; T/P; stocks; cp_allocation | Balance residuals, uncertainty and unallocated physical ledger | ref-bref-2015; epa-gas-processing-1995 |
| water_elements | lpg | Track water in feeds, solutions, product, steam, condensate, wastewater, humid air, evaporated water and stocks. Include reaction water with measured/stoichiometric provenance in the water-species account; conserve H/O over all species independently. Reconcile C/H/O/N/S from actual compositions, including air oxygen/nitrogen, purging N2, unreacted exhaust N2/O2, odorant sulfur and amine nitrogen. Retain sodium and other actual elements where needed for caustic/adsorbent closure. Gross exhaust/wastewater carriers and their pollutant species must not be added twice to total physical mass; missing species remain identified residuals. | Stage assays; air/fuel/steam/water meters; cp_acid_gas; cp_spent_amine; cp_spent_caustic | Separate water and conserved-element ledgers with residuals | ref-bref-2015; epa-gas-processing-1995 |
| energy_balance | lpg | Reconcile actual fuel/feed/product chemical energy, imported net steam heat, electricity/work, recovered heat interfaces, refrigeration duty, exported heat, heat loss and energy stocks using declared consistent enthalpy and calorific bases. Electricity, heat and cooling duty are not material mass inputs. A net-steam-MJ exchange is accompanied by physical steam/return water observations, not a second gross-steam energy burden or condensate heat credit. Cooling duty is heat moved, not additional purchased energy when electricity/fuel already supplies it. No product heating value, boiler efficiency or utility-per-product default is assumed. | Actual compositions/calorimetry; utility meters; steam and return enthalpies; stocks | Energy residuals and supplier-basis compatibility | ref-bref-2015 |
| species_emission | air emissions | Species emission mass=integral(actual exit flow*matching mass concentration*dt), or documented composition/mole/volume-concentration conversion. Speciate after recovery; total VOC, carbon-equivalent readings or NO2-equivalent require explicit original monitoring basis and conversion. Do not treat all VOC as propane. | Source flow; species assay; T/P; duration; capture/destruction observations | This species mass crossing gate; normalize by D | ref-bref-2015; epa-gas-processing-1995 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representative | lpg | Same SKU, route, period, site and state; record seasonal blend changes and startup/shutdown separately, without pooling incompatible batch purities. | Original records, assays and stage ledger |
| evidence_limits | all rows | No universal yield, recipe or range. BREF historical utility ratios are per feed, not product; EPA historical sulfur factors apply only to their specific acid-gas combustion conditions. Neither is a default. Identity lookup does not establish provider basis or complete dataset. | Source limitations and foreground protocols |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify one selected saleable liquid product identity and one final_product output, 1 kg net reference, positive measured D, actual composition/purity and all qualifiers. An unresolved reference UUID or incompatible physical route/property/unit prevents a usable completed dataset. Do not reuse a gas/LNG reference or refrigerant circuit charge as LPG. | ref-bref-2015; eia-storage-2026 |
| validate_quantity | all rows | Preserve raw mass/volume/T/P and conversion provenance. Gas and liquid volume bases remain separate; supplier/background reference bases must be independently compatible, not merely identity-matched. Steam pressure and enthalpy basis, active chemical fraction and electricity property must be established. | ref-bref-2015 |
| validate_balance | lpg | Reconcile feeds, liquid and gaseous products, vents, flare carbon/sulfur, water, spent materials, own use and stock change before allocation. Retain residuals and meter uncertainty; no forced zero residual. Distinguish acid gas sent for sulfur recovery from air H2S; distinguish wastewater transfer from receiving-water emissions. | ref-bref-2015; epa-gas-processing-1995 |
| validate_carriers_services | lpg | Check complete stage/background coverage, paired pipes, liquid/vapour inventories and returns; reconcile whole-carrier mass without adding constituent quantities twice. Require separate total mass, water, C/H/O/N/S and energy residuals. Check actual packaging and durable pressure-container/tank service life, maintenance, cleaning, return and retirement burdens with one owner and per-D service allocation; exclusions need evidence and sensitivity. A generic reference label or a matching unit cannot override conflicting source route, location, composition or grade. | ref-bref-2015; eia-storage-2026; eu-pef-multifunctionality-2021 |
| validate_species | air emissions | Check actual species, fossil/biogenic origin, CAS where applicable, outdoor-air compartment/subcompartment and amount definition against the flow original. Never substitute nitropropane for propane, a correction flow for a pollutant, or a total VOC/NOx quantity for individual species. NO and NO2 cannot be duplicated with total NOx; NOx is not N2O. Preserve actual biogenic CO2 if an auxiliary biogenic fuel occurs, with its own added input/emission rows. Particulate bins must be disjoint with filterable/condensable definitions. | ref-bref-2015; epa-gas-processing-1995 |
| validate_complete | dataset | Document performed/skipped checks, identity gaps, missing upstream burdens, measurements and provider bases. Actual MEA/TEG regeneration, sulfur recovery, on-site water treatment, other refrigerants or combustion engines require complete compatible submodels, including actual BTEX/isomers, N2O and other measured releases as atomic rows. Missing, unknown, measured zero and a measured nondetect with detection limit are different; conditional not-applicable status requires route evidence. Future collection requirements do not establish actual quantities or SKU acceptance. No historical/single-plant composition, utility ratio or factor establishes a general default. | ref-bref-2015; epa-gas-processing-1995 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Commercial liquid propane/butane supply at the verified same composition, grade and gate, only after complete identity/provider-basis linkage |
| excluded_use | Standalone natural-gas fractionator reference binding; LNG; gaseous delivery; olefin-rich petrochemical gas; extraction or whole-refinery inventory; analytical/refrigerant certification; cylinder manufacture; customer combustion |
| required_metadata | site and production period; one SKU and commercial grade; propane/n-butane/isobutane assay and olefin impurities; purity; water and sulfur; fossil origin; raw-feed sources and upstream gates; recovery/separation or purchased-component blending route; liquid phase at transfer; mass meter or liquid density and measured volume; temperature and absolute pressure; gas-volume wet/dry and reference conditions with compressibility; storage and loading vapour destination; utilities and steam-return basis; co-products and allocation; gate and transport scope |
| required_quality_disclosure | Unallocated physical ledger, burden account, coverage, provider bases, identity gaps, uncertainty, skipped checks and scientific-review state |
| update_trigger | Changed product composition/state, feed provenance, separation/blending route, provider basis, recovery/treatment or allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ref-bref-2015 | official_guidance | European Commission JRC, Refining of Mineral Oil and Gas BREF (2015),2.12 printed pp76–77/PDF110–111;2.17 pp96–97/PDF130–131;3.12 p191/PDF225;4.12 p397/PDF431. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf | Gas/liquid feeds, multiproduct separation, final treatment, fugitive/odorant losses and energy interfaces; no offshore extraction model or historical utility/diagram-condition defaults. |
| epa-gas-processing-1995 | official_guidance | US EPA, AP-42 5.3 Natural Gas Processing (January1995),5.3.1–5.3.3 and Table5.3-1 caveats, PDF1 and4. https://www.epa.gov/sites/default/files/2020-09/documents/5.3_natural_gas_processing.pdf | Gas processing/acid-gas destinations, leaks and TEG-regeneration emissions evidence; historical acid-gas combustion factors and regional H2S values are not universal LPG/boiler factors. |
| eia-propane-2023 | official_guidance | US EIA, Where do hydrocarbon gas liquids come from? Propane in depth, updated26December2023, propane-production paragraphs. https://www.eia.gov/energyexplained/hydrocarbon-gas-liquids/where-do-hydrocarbon-gas-liquids-come-from-in-depth.php | Natural-gas/refinery origins and Y-grade/fractionation distinction; not a purity acceptance standard, fixed composition or yield. |
| eia-storage-2026 | official_guidance | US EIA, Transporting and storing hydrocarbon gas liquids,13October2026 acquisition snapshot, transport/storage paragraphs. https://www.eia.gov/energyexplained/hydrocarbon-gas-liquids/transporting-and-storing-hydrocarbon-gas-liquids.php | Liquid LPG components and pressure/refrigeration state; transport modes do not impose transport inclusion or numerical defaults. |
| eu-pef-multifunctionality-2021 | official_guidance | European Commission,C(2021)9332 final AnnexI,4.5,PDF63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Multifunctionality hierarchy and allocation rationale; no claim of complete PEF conformity. |
