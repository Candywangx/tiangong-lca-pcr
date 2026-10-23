---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.oils-and-other-products-of-the-distillation-of-high-temperature-coal-tar-and-similar-pr-0606318d
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# High-temperature coal-tar binder pitch

## 1. Scope and Applicability

This PCR covers neat, unmodified industrial binder pitch recovered as the bottom product of continuous atmospheric fractional distillation of high-temperature coke-oven coal tar. The delivered reference is homogeneous molten bulk at a declared temperature and pressure, before downstream electrode/anode manufacture. It is a variable-composition aromatic UVCB material, not a single pure chemical, a water emulsion or a solvent solution. Its grade, softening behaviour, insolubles and residual water are actual lot acceptance requirements, not prescribed recipe values. `ifc-coal-tar-2007`; `rain-pitch-products`

Exclude crude recovered tar, wood/peat/lignite tar, petroleum pitch and coal-tar/petroleum blends, independently marketed distillate oils as reference products, pitch coke, air-blown or chemically modified pitch, mesophase pitch, emulsified/formulated binders, and electrode/carbon manufacture. Recoverable distillate mixtures remain physical coproducts in this foreground. The upstream recovered-crude-coal-tar PCR ends before this independent distillation and must be linked with an evidenced provider boundary. A classification label cannot establish full-category applicability. `wco-hs-2022-ch27`; `un-cpc-3-2025`

Use the process only after confirming the actual feed origin, continuous atmospheric route and molten binder delivery. Alternative cut schemes are actual operations of the same distillation method, not an obligatory set of all fractions. No universal feed recipe, pitch yield, density, purity, heating duty, dosage, emission factor or allocation fraction is supplied. Incompatible routes require separate applicability review rather than substitutions to obtain a UUID.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.oils-and-other-products-of-the-distillation-of-high-temperature-coal-tar-and-similar-pr-0606318d |
| classification_refs | CPC 3.0 34540; proposed narrower relation, independently accepted mapping required |
| covered_products | Neat high-temperature coal-tar binder pitch from continuous atmospheric fractional distillation, hot bulk molten delivery |
| excluded_products | Crude tar; other-origin/blended/formulated or chemically modified pitch; independent oil products; pitch coke; carbon/electrode products |
| representative_product | One actual accepted binder-pitch grade and lot, with origin and molten-state specification |
| production_route | Crude tar receipt and measured dehydration; continuous atmospheric fractional distillation; pitch conditioning by separation; hot storage and bulk transfer; actual emission control and residue export |
| market_state | Homogeneous molten industrial binder pitch at plant delivery interface, declared temperature and pressure, without package volume |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an identified coal-tar binder feedstock to downstream carbon manufacture |
| How much | 1 m3 accepted net molten pitch at the declared delivery state |
| How well | Actual customer-accepted grade, measured composition/water/insolubles and softening behaviour; no assumed equivalence between grades |
| How long or cycle | One bulk supply at the gate; downstream service life is outside this reference |
| reference_flow_link | reference_pitch |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pitch `7d42bfb3-afaa-4b54-a1ab-f2dead883200` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | High-temperature coke-oven coal origin; neat unmodified UVCB binder; actual grade/SKU and acceptance method; residual water and insolubles; atmospheric route/cuts; delivery temperature and pressure; homogeneous liquid volume excluding voids/containers; actual lot density method and temperature; matched supplier reference-volume convention; upstream allocation; reporting period and plant; receiver and gate |

The broad native Pitch flow has CAS 65996-93-2 and a coal-tar-binder supply route. Restrict it to the above subset. Neither a broad synonym nor a Volume property proves the supplier temperature convention, measured density, complete dataset or quantity compatibility; those are collected and verified before a provider is linked. The 1 m3 convention follows its reference property and cannot silently be treated as 1 kg, cold loose-solid bulk volume, or a mass-based database coefficient.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_volume | reference product | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Collect accepted net molten volume using cp_product at one declared temperature/pressure state. Use a calibrated liquid meter/tank-volume method validated for actual viscosity and temperature, or traceable net weighing with independently measured same-lot liquid density at that state; retain both mass and volume. No universal density or expansion factor. |
| solution_basis | sodium_hydroxide; tar_feed; wastewater; tar_sludge | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep as-supplied wet carrier mass, dry/active/component mass and carrier water distinct. For an assayed solution, component mass equals solution mass times its measured mass fraction; water already in the solution is not a second input. |
| utility_basis | gas; electricity; steam; condensate_return; cooling_water; water | actual declared reference property | actual declared reference unit | Preserve native gas Volume/m3 and electricity Net calorific value/MJ. Convert metered electricity kWh to MJ using 3.6, with actual supply level. Steam is delivered carrier mass with measured state; liquid return is separately metered. Do not equate kg of steam or an MJ property to net useful heat. |
| species_basis | all elementary rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report measured species mass and stated outdoor-air compartment; reconcile gas sampling volume, dry/wet basis, temperature/pressure and any oxygen correction before integrating. NO, NO2 and N2O are distinct; a reported NOx-as-NO2 quantity is not species mass. PM fractions are disjoint. |

The reference volume/density and wet-component protocols are explicit foreground measurement design requirements, supported by the chemical-sector inventory/monitoring framework; they impose no industry-wide conversion number. Quantity/uncertainty evidence remains necessary for a concrete data package. `jrc-cww-bref-2016`; `ifc-coal-tar-2007`

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted recovered crude high-temperature coke-oven tar at the distillery receiving interface, with measured entrained water/solids and an upstream dataset |
| starting_condition_role | supplied intermediate; coal carbonisation and crude-tar recovery are upstream |
| product_classification_scope | A narrower binder-pitch subset of CPC 3.0 34540; other distillation products are coproducts, not additional reference identities |
| recursive_input_rule | Record actual external same-category pitch input separately with its supplied state/provider and burden. Internal recovered pitch/tar recycle is an equal-quantity physical link, not a new purchased input. External pitch blending is outside this neat-bottom-product scope. |
| upstream_dataset_requirement | Use a compatible recovered crude-tar supplier inventory including upstream coking/recovery allocation; verify its ending interface and whether dewatering, storage, heaters or delivery overlap this foreground |
| disclosure | Plant/period; source coke-oven route; wet feed and impurities; actual dehydration/cut map; heater/utilities/control configuration; hot delivery state; treatment/export interfaces; physical and burden ledgers and all gaps |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_foreground | tar_distillation | Include receipt, actual dehydration, atmospheric cuts, pitch storage/transfer, on-site heaters, cooling/cleaning and actual release control. Aggregate processing and bulk dispatch as one foreground unit while retaining stage meters and internal equal-quantity links; reference_pitch is the single finished output. | `ifc-coal-tar-2007`; `rain-pitch-products` |
| boundary_interfaces | tar_distillation | Coal carbonisation/crude-tar recovery and downstream oil refining/electrode production stay in separate compatible provider processes. This profile exports contaminated water and sludge to independently modelled treatment interfaces; an on-site final-discharge WWTP requires explicit extension with measured treatment inputs, sludge and each final receiving-water species. Off-site transfer is not an elementary release. | `jrc-cww-bref-2016`; `wco-hs-2022-ch27` |
| boundary_completeness | all inventory rows | Keep actual start-up, shutdown, upset, cleaning and stock changes in the collection period. Assess all actual fuels, alkalis, lubricants, adsorbents, packaging and release-control consumables; add one atomic row per additional occurrence. Internal condensate/tar recovery and gross circulating cooling water are not externally purchased anew. Unquantified releases and missing matches remain explicit, not zero. | `jrc-cww-bref-2016`; `ifc-coal-tar-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tar_distillation | Crude-tar receiving, dehydration, atmospheric fractionation and hot pitch delivery | required | Verified high-temperature coke-oven feed and neat binder pitch route; retain actual equipment/cut stages | foreground production | 1 m3 reference_pitch |

### Process: Tar distillation and bulk binder-pitch delivery (`tar_distillation`)

Each conditional row is quantified if actually present. Document evidence-backed absence, a missing amount, or a missing identity separately. The list is a route-specific starting inventory, not proof all emissions occur or a licence to omit discovered species. All physical rows share the same accepted-pitch-volume denominator; allocation is applied only to the separate environmental-burden ledger. Air rows use outdoor air unspecified when source location is aggregated; a known more specific compartment needs a separately verified matching flow. `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

#### Inputs

##### Product flows

###### Coal tar (`tar_feed`)

Accepted crude high-temperature coke-oven coal tar at receipt. Measure wet net mass, entrained water, solids, ash and elemental composition; obtain its upstream burden and separation boundary. The broad coal-tar identity has no default heating value.

- Selected flow: Coal tar `7b09995f-2ee9-4584-b244-c2d84ea75585`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_material; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Alternating current (`electricity`)

Purchased CN 1–35 kV grid-average alternating current at the user interface only when the actual supply matches. The selected native location of supply is CN; use a separately verified compatible flow/provider for another geography or voltage. Record location/provider and period; retain meter levels and prevent double counting of the plant meter and internal submeters.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect same-period physical amount under cp_utility; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### natural gas in the gaseous state (`gas`)

Fossil gaseous natural gas burned in the actual distillation heater. Match supplier reference volume to meter temperature, absolute pressure, dry/wet state, composition and compressibility; the database secondary mass coefficient is not density. Other fuels require separate atomic rows and evidence.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect same-period physical amount under cp_utility; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### de-ionised water (`water`)

Actual purchased de-ionised water for preparation, cleaning or utility makeup, conditional on actual use. Weigh or convert a metered liquid volume using measured compatible density; do not apply this identity to untreated cooling makeup or water already inside supplied alkali.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_utility; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Industrial cooling makeup water (`cooling_water`)

Actual fresh makeup entering the on-site cooling circuit. Measure source, water quality, volume and blowdown; circulating flow is an internal service and is not purchased again. An electricity-based brewery cooling service cannot represent this water.

- Selected flow: Industrial cooling makeup water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect same-period physical amount under cp_utility; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Purchased process steam (`steam`)

Conditional delivered steam mass for actual indirect heating or direct injection. Collect supply pressure (gauge/absolute), temperature, dryness, mass and supplier boundary; retain liquid return separately. A pressure-specific 11.0 MPaG candidate is unavailable without matching conditions. Steam mass and heat service must not both carry the same burden.

- Selected flow: Purchased process steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_utility; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Aqueous sodium hydroxide for tar neutralisation (`sodium_hydroxide`)

Conditional caustic solution for the documented corrosion-control route. Collect actual supplied solution mass, NaOH mass fraction, carrier water, impurities and dosage; if made on site, record solid NaOH and added water separately instead. Do not assume a universal recipe or pharmaceutical-route compatibility.

- Selected flow: Aqueous sodium hydroxide for tar neutralisation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_material; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

#### Outputs

##### Product flows

###### Pitch (`reference_pitch`)

Neat, unmodified high-temperature coal-tar binder pitch, delivered as homogeneous molten bulk at declared temperature and pressure. Its UVCB identity is not one pure PAH. Exclude water, solvent, petroleum or wood-tar additions and container volume; determine accepted net volume with cp_product.

- Selected flow: Pitch `7d42bfb3-afaa-4b54-a1ab-f2dead883200`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Coal-tar light distillate oil (`light_oil`)

Conditional actual primary light distillate leaving the unit; assay composition and distillation interval. Do not substitute cracked petroleum coking gas oil or wash oil. Further isolated pure benzene belongs to its downstream separation process.

- Selected flow: Coal-tar light distillate oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_material; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Coal-tar naphthalene oil fraction (`naphthalene_oil`)

Conditional actual naphthalene-rich mixed fraction, not pure naphthalene, naphthol or petroleum naphtha. Record the actual cut and composition without importing historical concentration or yield.

- Selected flow: Coal-tar naphthalene oil fraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_material; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Coal-tar middle creosote oil fraction (`middle_oil`)

Conditional separately recovered middle creosote fraction, before any subsequent blending or refining. Identify PAH/phenolic composition and cut boundaries; do not use tall oil or turpentine.

- Selected flow: Coal-tar middle creosote oil fraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_material; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Anthracene oil (`heavy_oil`)

Conditional recovered coal-tar anthracene oil mixture at the distillation gate; CAS 90640-80-5 is a mixture identity, not pure anthracene. Retain physical delivered mass and actual grades even after allocation.

- Selected flow: Anthracene oil `1a17fbe6-a61c-4ace-8fee-e101f643d18a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_material; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Liquid utility steam condensate return (`condensate_return`)

Conditional measured liquid return to the utility supplier, with pressure, temperature and enthalpy state. It is not steam or milk condensate. Directly injected steam retained in process water does not also leave as this return.

- Selected flow: Liquid utility steam condensate return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_utility; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

##### Waste flows

###### Coal-tar distillation oily wastewater to external treatment (`wastewater`)

Actual segregated contaminated water exported to an independently modelled treatment interface. Collect water, oil, suspended solids, BOD/COD, individual PAH, salts and ammonium where present, wet mass and recipient acceptance. The stream is not an elementary release to freshwater or electrolytic manganese-residue washwater.

- Selected flow: Coal-tar distillation oily wastewater to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_waste; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### Coal-tar distillation sediment sludge (`tar_sludge`)

Actual separated PAH-bearing tar/solid/water sludge sent to a documented receiver. Measure wet mass, water, ash, composition and hazard/treatment conditions. Recovered pitch is not waste merely because it is a distillation residue; a native 31.4 MJ/kg residue grade is not established.

- Selected flow: Coal-tar distillation sediment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_waste; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

##### Elementary flows

###### benzene (`benzene_air`)

Actual benzene released from storage, transfer or process vents after capture; include measured fugitive and stack contributions without a total-VOC double count.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### naphthalene (`naphthalene_air`)

Actual naphthalene released after recovery/control; distinguish retained naphthalene in product/waste and emitted mass.

- Selected flow: naphthalene `fe0acd60-3ddc-11dd-a682-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### benzo[a]pyrene (`bap_air`)

Actual benzo[a]pyrene in released vapour/aerosol, with sampling phase recovery and matrix validation. This is one species, not total PAH or all tar fume.

- Selected flow: benzo[a]pyrene `08a91e70-3ddc-11dd-9221-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### particles (PM2.5) (`pm25_air`)

Actual PM2.5 leaving the boundary, with sampled aerodynamic size and condensable/filterable convention. Retained collected material stays in its recycle/waste ledger.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### particles (PM2.5 - PM10) (`pmcoarse_air`)

Actual non-overlapping PM2.5–PM10 size fraction. Subtract nested totals only with matched methods, time and moisture conventions; do not invent a split.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### particles (> PM10) (`pmover10_air`)

Actual particles larger than PM10 leaving the boundary; keep distinct from smaller fractions and captured tar aerosol.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### carbon dioxide (fossil) (`co2_air`)

Actual net fossil CO2 generated by the on-site natural-gas heater and any actual organic destruction control. Remove incoming carrier-air CO2 on a documented consistent basis; do not infer distillation destroys all tar carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### carbon monoxide (fossil) (`co_air`)

Actual fossil carbon monoxide from the heater or actual combustion control; measured species mass, not CO2 equivalent.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### nitrogen dioxide (`no2_air`)

Actual NO2 species mass. An NOx total reported as NO2-equivalent cannot populate both NO and NO2; unresolved speciation or quantity conventions remain gaps.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### nitrogen monoxide (`no_air`)

Actual nitrogen monoxide species mass from combustion; reconcile with measured NO2 and the stated NOx basis without including N2O.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### sulfur dioxide (`so2_air`)

Actual SO2 released from the heater or control train, conditional on fuel/composition and actual monitoring; not total SOx or a stratospheric compartment.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### methane (fossil) (`methane_air`)

Actual fossil methane leaks or unburned releases; no delayed-emission correction flow and no conversion from NMVOC totals.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### nitrous oxide (`n2o_air`)

Actual nitrous oxide when demonstrated by the heater/control assessment; quantify or document evidence-backed absence, and keep separate from NOx.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### hydrogen chloride (`hcl_air`)

Actual hydrogen chloride release where entrained ammonium chloride decomposes and neutralisation/capture does not retain it. It is gaseous HCl, not aqueous chloride or an assumed neutralisation yield.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### water vapour (`water_air`)

Actual water vapour released from process/cooling/combustion, distinguishing carrier humidity, evaporated feed water and chemically formed water. Do not also count the same mass as wastewater or condensate return.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect same-period physical amount under cp_air; per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-coal-tar-2007`; `jrc-cww-bref-2016`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | tar_distillation | Preserve the unallocated physical network and use measured subdivision/direct attribution first. For remaining joint burdens, test and justify determining physical causality (e.g. measured cut-specific separation/heating duty); mass alone is not proof of energy causality. If no defensible physical relationship is available, use coproduct economic values at the same distillation gate and condition, with comparable reporting-period net prices and sensitivity. No fixed fractions or automatic burden-free tar/pitch. | `ilcd-detailed-2010` |
| allocation_ledgers | all inventory rows | Let delivered pitch and all actual saleable cuts have physical quantities and stocks; retain them without multiplying by allocation shares. Attribute direct burdens to their causes. Economic share for product j is its same-gate production-equivalent net revenue divided by the sum for all eligible actual coproducts; reconcile stocks/deliveries and justify inferred intermediate prices. Allocate only the remaining joint environmental burdens. Shares at each stage must sum to one. Waste fees are not coproduct revenue. | `ilcd-detailed-2010`; `jrc-cww-bref-2016` |
| allocation_upstream | tar_feed | Verify whether supplier tar burdens are already allocated at the coking/recovery stage. Preserve that upstream stage and never apply the distillery fraction a second time to the physical feed or coproduct masses. Confirm treatment responsibility for exported residuals; no avoided-product credit without an explicit compatible consequential method and displacement evidence. | `ilcd-detailed-2010` |

For a pitch-specific linked LCI, retain the complete physical ledger and construct a separate attribution view: B_pitch = B_direct_pitch + alpha_pitch * B_joint, using a justified stage-specific share and dividing by accepted pitch volume. Upstream supplier tar burdens already allocated at coking/recovery remain that provider input; the distillery may attribute its resulting joint environmental burden across its own fractions, without repeating the same stage share. Attributed supplier-input equivalents are burden-accounting entries, not changed feed masses or scaled physical coproduct outputs. Do not present the unallocated collection inventory alone as a fully attributed single-product dataset. `ilcd-detailed-2010`

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols use one representative operating period including actual maintenance/start-up/shutdown and stock movements. Raw readings remain separated by stage, lot and operating mode before aggregation. The aggregation denominator is accepted net molten pitch volume at the single declared delivery state; missing temperature/density/provider conventions prevent a complete linked package. This method requires future actual SKU/site/supplier measurements and supplies no invented survey or plant data. `ifc-coal-tar-2007`; `jrc-cww-bref-2016` Retain raw unnormalised interval amounts and sum the complete reporting-period numerator before one application of normalize_period; never average interval ratios or divide a pre-normalised amount again. Include failed and zero-output interval inputs, waste and releases in the same applicable period pool. Reconcile accepted deliveries, returns/cancellations, reacceptance and opening/closing stocks by lot; credit each net accepted volume once, and do not count internal rework passes as new output. Carry inventory burdens consistently so old-stock deliveries are not paired with current processing alone. If accepted net reference volume is zero, preserve the pool and disclose the unresolved unit result instead of dividing by zero or discarding the burdens. Protocol aggregation labels describe the final per-reference basis, not a second division.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | tar_distillation | reference_pitch | acceptance_record | lot/SKU; origin; route; composition; water; ash/QI/TI; softening test and method; molten T/p; calibrated delivered net volume; net mass; density and density T; opening/closing inventory; rejects/returns; supplier convention | Calibrated liquid flowmeter or tank-volume method validated for hot pitch viscosity/state, excluding vessel and voids; independently reconcile traceable net weighing and same-lot density at the declared state. Assay actual acceptance properties with documented representative sampling, laboratory method, matrix/precision and grade criteria; no assumed density. | m3 | each delivery/lot and stock closure | whole common reporting period | actual receiving-to-delivery foreground | per reference flow | calibration; meter viscosity/T range; tank table or weigh tickets; density laboratory record; acceptance originals |
| cp_material | tar_distillation | tar_feed; sodium_hydroxide; light_oil; naphthalene_oil; middle_oil; heavy_oil | measured_material_record | stage/lot; gross/tare net wet mass; cut interval/T/p; composition; water/active fraction; contamination; stocks; delivery/receiver; internal transfer pairs; actual source | Use calibrated mass readings or net weighing and representative sealed samples; record each actual fraction and supplied solution separately. Retain rejected/off-spec lots and water carried in mixtures. Record unchanged stock bases and matching internal interfaces. | kg | batch or continuous meter interval and inventory closure | same whole reporting period as cp_product | receipt, cuts and accepted external transfers | per reference flow | weighing calibration; assays and sample/method validity; stock records; supplier/recipient acceptance |
| cp_utility | tar_distillation | electricity; gas; water; cooling_water; steam; condensate_return | metered_utility_record | meter/stage; voltage; kWh/MJ; gas volume/T/p/humidity/composition/Z; liquid water volume/density; steam supply mass/T/p/dryness; liquid return mass/T/p; direct injection; supplier quantity definition; heat-state method; period/stocks | Read calibrated utility meters and record supplier boundaries. Convert gas/liquid volume only on measured compatible state bases. Retain steam carrier and return enthalpy separately; heat interpretation requires a validated state-property method and complete measured supply/return/loss balance, not a database coefficient. Internal cooling circulation is retained for equipment balances. | declared row unit | meter intervals covering all operating modes | same whole reporting period as cp_product | heater, distillation, storage, cooling and transfer | per reference flow | meter and supplier originals; state/quality records; property-method validity; utilities reconciliation |
| cp_waste | tar_distillation | wastewater; tar_sludge | transfer_record | actual source/receiver; wet mass; water/solids/oil; BOD/COD method; individual PAH; chloride/ammonium where present; hazard class; treatment acceptance; stock; sampling uncertainty | Weigh each segregated export and obtain documented receiver/treatment data; assay representative oily water/sludge with matrix-validated methods, distinguishing wastewater pollutant content from final receiving-environment release. | kg | each transfer and representative composition campaign | same whole reporting period as cp_product | exact external treatment interface | per reference flow | weighed transfers; accredited/validated analyses; treatment/receiver records; stock closure |
| cp_air | tar_distillation | all elementary rows | measured_emission_record | species/CAS; source/control; carrier-air inlet/outlet O2/N2/H2O/CO2; actual reaction and extent evidence; sample phase; dry/wet gas flow; T/p/O2; concentration basis; time; stack/fugitive mode; humidity; PM aerodynamic intervals/filterable-condensable basis; detection/recovery/uncertainty; actual operation hours | Measure controlled outlet species and gas flow on matched bases, covering actual heating, storage, transfer and upset modes; integrate concentration times flow over time. Use validated source-specific fugitive measurements or a disclosed substantiated engineering estimate with its uncertainty. Total-VOC/PAH or tar-fume screening is a completeness check, not one species exchange; bulk mass-balance residuals alone are not accurate emission measurements. | kg | representative operating-mode campaigns and monitored intervals | same whole reporting period as cp_product, including upsets | all actual outdoor releases after control | per reference flow | sampling train/phase recovery and matrix validation; flow meter/calibration; method/detection/uncertainty; mode coverage and actual hours |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Divide each same-period unallocated physical exchange by the same-period accepted molten pitch volume in m3 at the declared state; reference_pitch is fixed at 1 m3. Apply environmental attribution in a separate ledger, then divide attributed burdens by that same volume. Preserve all physical coproduct outputs and internal transfers. All protocols use one representative operating period including actual maintenance/start-up/shutdown and stock movements. Raw readings remain separated by stage, lot and operating mode before aggregation. The aggregation denominator is accepted net molten pitch volume at the single declared delivery state; missing temperature/density/provider conventions prevent a complete linked package. This method requires future actual SKU/site/supplier measurements and supplies no invented survey or plant data. `ifc-coal-tar-2007`; `jrc-cww-bref-2016` Retain raw unnormalised interval amounts and sum the complete reporting-period numerator before one application of normalize_period; never average interval ratios or divide a pre-normalised amount again. Include failed and zero-output interval inputs, waste and releases in the same applicable period pool. Reconcile accepted deliveries, returns/cancellations, reacceptance and opening/closing stocks by lot; credit each net accepted volume once, and do not count internal rework passes as new output. Carry inventory burdens consistently so old-stock deliveries are not paired with current processing alone. If accepted net reference volume is zero, preserve the pool and disclose the unresolved unit result instead of dividing by zero or discarding the burdens. Protocol aggregation labels describe the final per-reference basis, not a second division. | cp_product; relevant collection protocol | physical exchange and separately attributed burden per reference flow | `ilcd-detailed-2010`; `jrc-cww-bref-2016` |

Retain volume-weighted density information per lot: a mass-based delivery contributes its measured net mass divided by its measured same-state liquid density to accepted volume; summed lots must share the declared state or a validated grade-specific temperature correction. Water/active-matter bookkeeping uses wet mass multiplied by the actual measured mass fraction. These physical calculations do not create quantities from absent measurements. Steam is retained as a carrier-mass interface until a validated thermodynamic/supplier convention establishes any linked heat quantity; unknown convention remains an explicit gap.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_physical | all inventory rows | Reconcile unallocated inputs plus opening stocks with all external products, waste, air releases and closing stocks using measured composition and equal-quantity internal links. Keep total-mass and elemental C/H/O/N/S conservation separate from reactive-species bookkeeping. Retain measured carrier-air inlet and outlet O2/N2/H2O/CO2 in the engineering combustion sub-balance, independently of the pollutant exchange list; reconcile net fossil CO2 and water-vapour releases with incoming carrier components and actually formed species without duplication. For water, opening H2O + incoming H2O + actual H2O formation equals closing H2O + outgoing H2O + actual H2O consumption; substantiate reaction terms from actual chemistry and measured reaction extent. Do not enforce water or dry matter as if each were an element conserved through reaction. Do not count mixture water twice, use COD as carbon, or fit reaction terms or emissions to a residual. Retain discrepancies against measured uncertainty, not an invented tolerance. | actual assays, carrier-air inlet/outlet composition, actual reaction evidence, stock closure and physical network; jrc-cww-bref-2016 |
| quality_energy | utility and heater stages | Retain electrical input, gas measured calorific basis, material/steam/return sensible and latent enthalpy, useful duties and evidenced losses on common reference states. Match actual heater and supplier conventions; do not duplicate steam-carrier and heat-service burdens. Distillation does not mean the feed carbon is completely combusted. Unproved state conversions cannot support a complete heat link. | stage meters, declared property methods, measured state/composition and supplier boundary |
| quality_releases | all elementary rows | Screen all actual emitted species from feed/impurity/heater/control evidence; extend atomic rows for actual additional PAH/VOC, ammonia, sulfur or other species and any on-site final aqueous releases. Reconcile individual VOC/PAH to totals on identical mass conventions without representing both as duplicate elementary masses. PM2.5, PM2.5–10 and >PM10 are disjoint. When particle-bound PAH is included in measured PM, retain its species-specific emission but identify it as a PM constituent so its mass is counted once in the physical balance. Retained dust/aerosol and recovered tar are not outdoor emission. | source sampling, actual feed and operating/control map; ifc-coal-tar-2007 |
| quality_links | all inventory rows | UUID physical identity is separate from supplier/treatment dataset, geographic/voltage scope, quantity basis and amount. Resolve blank identities and verify actual provider conventions before making complete linked-data claims. Unavailable monitoring, site/SKU/grade or provider basis is disclosed rather than replaced by a database coefficient. | native identities and independently collected supplier/receiver and quantity records |
| quality_carbon | combustion and material stages | Preserve carbon retained in pitch/cuts/residues versus emitted fossil species. If actual additional biogenic input is present, reassess scope and record biogenic carbon flows separately; do not delete biogenic CO2 because a GHG reporting convention omits it. Carbon-neutral or free-coproduct assumptions are not authorized. | composition-based physical carbon ledger, emission originals and supplier attribution |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_pitch | Require one finished reference output at 1 m3 homogeneous molten neat binder pitch and matching bilingual quantity/volume convention. Verify high-temperature coal origin, atmospheric route, grade, T/p, density measurement and provider volume basis. Reject petroleum/wood blends, cold bulk void volume and nominal 1 kg substitutions. | `ifc-coal-tar-2007`; `wco-hs-2022-ch27` |
| validate_balance | all inventory rows | Check complete unallocated physical mass/water/elemental balances, stocks and same-quantity internal transfers independently from allocated burdens. Do not multiply coproduct output quantities by their allocation share. Missing measurements/species and unexplained residuals remain unresolved; an aggregate balance does not prove emission completeness. | `jrc-cww-bref-2016`; `ilcd-detailed-2010` |
| validate_allocation | tar_feed; tar_distillation | Verify the upstream coking/recovery allocation status, non-overlapping interface, direct-attribution evidence, joint-burden criterion, same-gate cut quantities/prices and stage share sums. A nominal scaffold or classification leaf is no upstream methodology evidence. | `ilcd-detailed-2010` |
| validate_inventory | all inventory rows | Verify each atomic row's physical identity, CAS/route, official Chinese display, flow type, reference property/unit and receiving compartment. Require actual occurrence/absence, amount and provider compatibility independently. No correction flow, unrelated waste stream, or positive amount inferred merely from a successful identity search. | `jrc-cww-bref-2016`; `ifc-coal-tar-2007` |
| validate_emissions | all elementary rows | Verify species mass versus analytical equivalents, non-overlapping PM fractions, phase recovery, sampling/flow state, normal and abnormal mode coverage, and all actual additional species. N2O is outside NOx and NO2-equivalent does not prove NO2 species. Statutory guideline concentrations are neither default emissions nor plant survey data. | `ifc-coal-tar-2007`; `jrc-cww-bref-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary distillery foreground with separate physical and allocated-burden ledgers |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible hot bulk neat coal-tar binder-pitch supply with actual composition, state, quantity and linked upstream/treatment evidence |
| excluded_use | Full CPC34540 coverage; oil/pitch-coke/electrode manufacture; other-origin or formulated pitch; default density/yield/energy/recipe; incomplete linked-data or methodology-approval claims |
| required_metadata | all reference qualifiers; site/SKU/grade/period; actual process/control/treatment map; physical conservation and staged allocation; supplier interfaces; original methods |
| required_quality_disclosure | actual measured and estimated fields; sampling/uncertainty and uncovered modes; pending identities and provider states; native metadata conflicts; incomplete quantity/species links |
| update_trigger | Changed feed origin, atmospheric route/cut scheme, product modification/grade/delivery state, heater/control/treatment configuration, supplier definition, or allocation method |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 2025-06-30 original structure, LF1457–1458 (3454/34540); broad mixed leaf, narrower proposal only, not process evidence or accepted mapping. |
| wco-hs-2022-ch27 | `official_guidance` | https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0527_2022e.pdf?la=en | 2022, PDF2 headings2706/2707/2708; classification context distinguishing crude tar, distillates and pitch/coke; no formal CPC-HS equivalence asserted. |
| ifc-coal-tar-2007 | `official_guidance` | https://www.ifc.org/content/dam/ifc/doc/2000/2007-large-vol-inorganic-compounds-coaltar-ehs-guidelines-en.pdf | 2007-12-10; PDF/printed1,6–7,9–10,18,28–29, coal-tar paragraphs and general monitoring only. Qualitative route/coproduct/corrosion-control and release screening; no historical yield, concentration limit, industry capacity, single-plant quantity or other chemical benchmark adopted as recipe/factor. |
| jrc-cww-bref-2016 | `official_guidance` | https://publications.jrc.ec.europa.eu/repository/handle/JRC103096 | 2016, chemical-sector CWW BREF, section3.1.5.2.4 (PDF138–139/printed108–109) and BAT2–5 (PDF573–574/printed543–544). Inventory, stock, stream characterization and monitoring context; bulk balances insufficiently accurate alone for emissions. Generic methods, not pitch-specific numeric defaults. |
| ilcd-detailed-2010 | `official_guidance` | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | First edition2010, sections7.9.2–7.9.3.3 (PDF276–277,283–284/printed256–257,263–264); multifunctionality hierarchy, justified physical causality and same-gate economic fallback. No fixed pitch fraction or full-framework conformity claim. |
| rain-pitch-products | `literature` | https://www.raincarbon.com/products-and-services/carbon-products/coal-tar-and-petroleum-distillation-products | Manufacturer original product catalogue, accessed2026-10-14; Pitch Products/Coal Tar Pitch. Current binder grades/uses and coal-tar-distillation origin, distinguished from separately offered petroleum/specialty products. No universal specification, formula, site amount or emissions evidence. |
