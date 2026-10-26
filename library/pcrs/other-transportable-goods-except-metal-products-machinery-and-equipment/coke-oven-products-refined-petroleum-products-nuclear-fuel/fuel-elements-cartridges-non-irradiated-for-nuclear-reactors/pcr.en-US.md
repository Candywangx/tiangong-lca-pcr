---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-elements-cartridges-non-irradiated-for-nuclear-reactors
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Assembly and delivery of non-irradiated civilian UO2 PWR fuel assemblies

## 1. Scope and Applicability

This method covers only public environmental inventory from receipt of sealed civilian UO2 fuel rods and separately qualified structural components through assembly, acceptance and packaged delivery of complete fresh PWR assemblies. An assembly is neither a single chemical species nor a supplied solution. Record heavy-metal elemental mass, fuel-compound mass, cladding and support-metal mass separately. Non-irradiated does not mean non-radioactive. Disclose complete supplier environmental bases for upstream rods and components.

Exclude nuclear-material processing or preparation, recipes, enrichment, conversion, pellet production, opening rods, cladding manufacture, key operating parameters, design optimization, irradiation, spent fuel, MOX, metallic fuel, TRISO, research/military reactor fuel and incomplete assemblies. These are PCR physical limits; manufacturer quantities or performance do not establish industry defaults. IAEA SSR-4 supports nuclear-facility environmental records; ordinary chemical BAT does not supply default parameters for this incompatible product and route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-elements-cartridges-non-irradiated-for-nuclear-reactors |
| classification_refs | CPC 3.0:33710; narrower scope limited to the product and route defined here; mapping acceptance is maintained separately in classifications/mappings/. |
| covered_products | Complete non-irradiated civilian UO2 PWR assemblies |
| excluded_products | Fuel and routes excluded in section 1 |
| representative_product | PWR assembly qualified by actual supplier and acceptance state; no default model |
| production_route | Purchased sealed rods and finished structural components; high-level assembly, inspection and packaged delivery |
| market_state | Complete fresh assembly at factory delivery, never reactor-irradiated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide complete civilian assembly in declared accepted condition |
| How much | 1 kg accepted assembly net mass |
| How well | Actual model, supplier, completeness and civilian UO2 PWR use; no performance optimization requirement |
| How long or cycle | One factory delivery; no reactor service duration or electricity yield asserted |
| reference_flow_link | out_assembly |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fuel elements (cartridges), non-irradiated, for nuclear reactors `bc68ae27-dcc2-4716-aa92-264c1f7e7308` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Civilian UO2 PWR; never irradiated; complete assembly model and acceptance state; supplier/lot; measured net mass and completeness; separate fuel-compound, heavy-metal, cladding, each support-metal and moisture accounts; packaging exclusion; provider quantity/background denominator; start/end state and monitoring coverage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Reference output is 1 kg accepted complete assembly net mass. Use cp_mass; all inventory quantities use measured accepted net mass of the same campaign, never assembly count. |

Use a calibrated scale or traceable accepted complete-assembly net-mass records, excluding transport packaging. Obtain heavy-metal content from actual supplier mass certification; it is not fuel-compound mass. Avoid double counting rod cladding as separate support metal. Measure moisture independently rather than inferring a recipe. The radioactivity reference unit is kBq: 1 Bq = 0.001 kBq. The electricity record calls its property Net calorific value, with energy in MJ: 1 kWh = 3.6 MJ. Verify matching meter and provider bases; property naming does not imply combustion or heat delivery.

The denominator includes every retained component of the accepted assembly, including sealed contents, internal hardware, cladding and separately installed structures; neither uranium, heavy-metal, steel nor zirconium mass replaces whole-assembly net mass. Fuel type, isotope identity and non-irradiated state require actual supplier/lot certification; a source classification, elemental CAS number or generic rod description does not establish them. The reference UUID is used only for the complete manufactured fuel-element delivery defined here, supported by its full finished-product fields and complete-assembly evidence; capsules, pellets and pure uranium are incompatible substitutes.

Each isotope activity requires its own qualified detector/assay report, sampling interval, calibration, detection limit, uncertainty and activity reference date in UTC with a Z suffix. Record documented reference-date adjustments separately, without inferring isotope activity from dose, purity or total alpha. Physical particle or chemical mass crossing the boundary and isotope activity are different properties of a linked release event: preserve both metrology records, but do not count the same impact contribution twice. Particle identities and fundamental quantities (including size fraction and physical mass basis) must match the selected model; total uranium mass is not a particle-fraction measurement.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted sealed rods and separately finished structural components received at assembly facility |
| starting_condition_role | Foreground start, not elimination of upstream environmental burdens |
| product_classification_scope | The defined civilian PWR subset of CPC33710 |
| recursive_input_rule | Repackaging an incoming complete assembly is a disclosed repackaging service, not this rod-assembly route; do not recursively attribute the same assembly |
| upstream_dataset_requirement | Complete upstream environmental provider data for sealed rods on actual quantity denominators; each separately supplied component includes manufacture, energy and delivery; missing data are not zero |
| disclosure | Actual providers, completeness, period, site, process boundary, receivers and excluded stages; assembly gate-to-gate result is not a complete fuel cycle |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_complete | Include receipt, assembly, acceptance, packaging, attributable utilities and waste-management environmental quantities. Upstream nuclear-material processing enters only through qualified supplier environmental backgrounds, without recipes or key parameters. | iaea-ssr4-2017; framatome-htp |
| boundary_discharge | Waste transfer is a technosphere output; elementary flows record only actual environmental releases after controls. Distinguish air/freshwater and each nuclide; this boundary does not cover seawater discharge. | iaea-ssr4-2017 |
| boundary_physical | Include all actual wet-air, H2O, chemical/particle, energy, packaging, container, maintenance and return exchanges plus stocks and paired internal links. Add individually verified atomic cards for actual missing flows. Physical accounts and service/allocated environmental accounts remain separate; missing quantities or monitoring do not establish zero. | iaea-ssr4-2017 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Receipt, assembly, inspection and packaged delivery | required | Route in section 1 | One aggregated foreground unit with independent stage metering | out_assembly |

Stage links: receipt of sealed rods and separate structures → high-level assembly → completeness/mass acceptance → packaged delivery. Link utilities and waste management to their actual stages. Internal handovers have equal quantities at both ends and do not create a second finished reference flow. Keep complete physical inputs, product/packaging/return outputs, wastes, releases and stock changes; environmental attribution does not change these physical quantities.

Complete the physical ledger for all actually crossing wet air, water, moisture, evaporated water, entrained particles and chemicals, packaging, containers, maintenance materials, returned components and opening/closing stocks. Internal water reuse and interstage handovers have paired equal links and cancel at the aggregated boundary. Separately record every actual energy carrier and service with its own atomic identity, meter and provider basis; add cards for actual flows absent from this inventory rather than treating absence as zero. Purchased heat, steam, fuels and maintenance services are conditional actual exchanges, not assumed features of this route. Full physical container acquisitions, dispatches, returns, retirement and fleet stocks remain distinct from service use and allocated environmental inventory; no allocation share scales a physical mass or return quantity.

### Process: Receipt, assembly, inspection and packaged delivery (`assembly`)

#### Inputs

##### Product flows

###### Received sealed fuel rods (`in_rods`)

Required; certified fresh civilian UO2 rods, including their cladding, sealed contents and internal hardware. Record gross receipts, supplier returns and stock change separately. No pellet or cladding input is added again.

- Selected flow: Nuclear Fuel Rod `28f5ac8d-dbfb-415d-afd2-36d0860a1cc3`
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_material
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Separate zirconium-alloy spacer grid (`in_zr_grid`)

Conditional on this separate purchased structural component being in the actual BOM. Use only actual certified Zircaloy grid material; M5 or another incompatible alloy requires its own identity. Supplier background must include finished-grid manufacture. No default grade or proportion.

- Selected flow: Zircaloy `397d43c1-8e3e-4718-80ac-25ca8309c9b7`
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_material
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Stainless-steel assembly end fitting (`in_steel_end`)

Conditional on separately supplied end fitting; actual steel grade, delivered condition and full component provider basis are required. Do not substitute pipe fittings or primary steel mass for finished-component supply.

- Selected flow: Stainless-steel assembly end fitting
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_material
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Purchased grid electricity (`in_electricity`)

Use this identity only at a 1–35 kV grid-average user supply interface. Collect assembly, inspection, ventilation and shared-service electricity; separately identify voltage, transformation losses, region, time and provider. Database property naming is retained; this is electrical energy, not heat.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable metered electricity amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_energy
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Purchased cleaning water (`in_water`)

Conditional on water actually consumed in hardware cleaning or auxiliary services. Record treatment grade, source and meter/density basis. It is supplied liquid water, not an elementary withdrawal or solution recipe.

- Selected flow: water, process `2f102a77-b596-4289-8a8d-ce7d6e347a2d`
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_water
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Protective polyethylene film (`in_pe`)

Conditional on actual PE protective wrap. Measure polymer film net mass separately from rods, structures and water. Verify actual resin, contamination and supplier; record classification metadata debt.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_pack
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Wooden transport cradle (`in_cradle`)

Conditional on actual single-use wooden cradle. Record wood condition, moisture, treatment and component supplier; it is not a pallet by assumption.

- Selected flow: Wooden transport cradle
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_pack
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Reusable steel fuel transport container (`in_container`)

Conditional on actual reusable steel container fleet. This exchange records full measured new/replacement container acquisitions for the campaign physical ledger, not an allocation fraction of a circulating container. Keep dispatch/return masses, retirement and fleet stock in full and linked by container identity. Separately attribute container manufacture and maintenance environmental burdens using evidenced service use and provider denominators, never an assumed rotation count; do not charge both an allocated service and its already included manufacture.

- Selected flow: Reusable steel fuel transport container
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_pack
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Zircaloy assembly guide tube (`in_zr_tube`)

Conditional on separately supplied finished guide tube certified as actual Zircaloy. Include its manufacturing in the provider, not bare-alloy production alone; M5 or another incompatible alloy needs its own identity. No tube design or process parameter is prescribed.

- Selected flow: Zircaloy `397d43c1-8e3e-4718-80ac-25ca8309c9b7`
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_material
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Nickel-alloy assembly spring (`in_nickel_spring`)

Conditional on separately supplied finished nickel-alloy spring in the actual BOM; collect each actual alloy/grade and finished-component supplier basis. A nickel profile or ferronickel is not the delivered component.

- Selected flow: Nickel-alloy assembly spring
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_material
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Cellulose cleaning wipe (`in_wipe`)

Conditional on actual cellulose wipe consumption; verify supplied composition and moisture. Bare cellulose, pulp or toilet-paper stock does not establish a qualified delivered cleaning wipe.

- Selected flow: Cellulose cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_material
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

#### Outputs

##### Product flows

###### Accepted complete fresh assembly (`out_assembly`)

1 kg; accepted complete non-irradiated civilian UO2 PWR assembly, excluding transport packaging. Include sealed fuel contents, cladding and all installed support hardware.

- Selected flow: Fuel elements (cartridges), non-irradiated, for nuclear reactors `bc68ae27-dcc2-4716-aa92-264c1f7e7308`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Intact rods returned to supplier (`out_return_rods`)

Conditional on intact non-irradiated sealed rods returned to the supplier; track actual condition, mass, ownership and receiving record. No automatic environmental credit; reconcile purchased input and upstream provider treatment.

- Selected flow: Nuclear Fuel Rod `28f5ac8d-dbfb-415d-afd2-36d0860a1cc3`
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_material
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Film delivered with assembly (`out_pe`)

Conditional on protective PE film leaving with the assembly; retain full physical mass. It is auxiliary packaging, not an allocated co-product or part of reference net mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_pack
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

###### Wooden transport cradle delivered with assembly (`out_cradle`)

Conditional on the same single-use cradle leaving the gate; record the physical delivery mass and receiving party without applying the environmental allocation fraction.

- Selected flow: Wooden transport cradle delivered with assembly
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_pack
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `iaea-ssr4-2017`; `framatome-htp`

##### Waste flows

###### Rejected uncontaminated zirconium-alloy grid (`waste_zr`)

Conditional on a rejected non-fuel structural grid sent to waste management; record actual alloy, radiation survey, receiving facility and destination. Internal reuse is not waste output.

- Selected flow: Rejected uncontaminated zirconium-alloy grid
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_waste
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `iaea-ssr4-2017`

###### Rejected uncontaminated stainless-steel end fitting (`waste_steel`)

Conditional on rejected end fitting sent to a receiver after contamination characterization; forming offcuts and casting scrap are incompatible identities for this assembly-only route.

- Selected flow: Rejected uncontaminated stainless-steel end fitting
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_waste
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `iaea-ssr4-2017`

###### Untreated waste polyethylene protective film (`waste_pe`)

Conditional on discarded PE wrap; record cleanliness, grade and actual receiver. A cleaned mechanical-recycling feed is not the same delivered waste state.

- Selected flow: Untreated waste polyethylene protective film
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_waste
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `iaea-ssr4-2017`

###### Uranium-contaminated cellulose cleaning wipe (`waste_wipe`)

Conditional on this actual contaminated solid waste; characterize cellulose, moisture and contamination/activity separately. An intact rejected sealed rod is returned product or its own radioactive waste, not this wipe.

- Selected flow: Uranium-contaminated cellulose cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_waste
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `iaea-ssr4-2017`

###### Untreated assembly-hardware cleaning wastewater (`wastewater`)

Conditional on off-site treatment of this actual liquid waste; record water and individual contaminants with receiver and treatment basis. Do not also record its contained radionuclides as a direct freshwater release at this gate.

- Selected flow: Untreated assembly-hardware cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_water
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `iaea-ssr4-2017`

###### Unopened rejected UO2 sealed fuel rod (`waste_rods`)

Conditional on an intact fresh rejected rod transferred to authorized radioactive waste management instead of supplier return. Record complete rod mass and isotope activity separately; no spent-fuel or separated powder substitute.

- Selected flow: Unopened rejected UO2 sealed fuel rod
- Flow property / unit: Mass / kg
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_waste
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `iaea-ssr4-2017`

##### Elementary flows

###### Liquid water discharged to freshwater (`water_release`)

Conditional on measured direct liquid-water discharge to freshwater after controls. This Volume/m3 exchange is the net H2O portion, not the whole mixed liquid or carrier volume. Establish it from independently evidenced liquid composition, water mass and a compatible density/volume basis; retain whole-liquid mass/volume and each dissolved or suspended constituent separately. No water-vapour or freshwater resource-withdrawal identity. Do not also count the same liquid as off-site wastewater transfer.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_water_release
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_release`
- Sources: `iaea-ssr4-2017`

###### Uranium-238 discharge to air (`u238_air`)

Conditional on measured uranium-238 discharge to outdoor air, unspecified subcompartment. Record isotope-resolved activity after controls; no default positive release. Do not use total alpha, total uranium mass or a long-term/correction flow. No simultaneous off-site-waste emission.

- Selected flow: uranium-238 `08a91e70-3ddc-11dd-9c44-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_release
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `iaea-ssr4-2017`

###### Uranium-238 discharge to water (`u238_water`)

Conditional on measured uranium-238 discharge to freshwater. Record isotope-resolved activity after controls; no default positive release. Do not use total alpha, total uranium mass or a long-term/correction flow. No simultaneous off-site-waste emission.

- Selected flow: uranium-238 `4d9a8790-3ddd-11dd-8db4-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_release
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `iaea-ssr4-2017`

###### Uranium-235 discharge to air (`u235_air`)

Conditional on measured uranium-235 discharge to outdoor air, unspecified subcompartment. Record isotope-resolved activity after controls; no default positive release. Do not use total alpha, total uranium mass or a long-term/correction flow. No simultaneous off-site-waste emission.

- Selected flow: uranium-235 `08a91e70-3ddc-11dd-9c3c-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_release
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `iaea-ssr4-2017`

###### Uranium-235 discharge to water (`u235_water`)

Conditional on measured uranium-235 discharge to freshwater. Record isotope-resolved activity after controls; no default positive release. Do not use total alpha, total uranium mass or a long-term/correction flow. No simultaneous off-site-waste emission.

- Selected flow: uranium-235 `08a91e70-3ddc-11dd-9c40-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_release
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `iaea-ssr4-2017`

###### Uranium-234 discharge to air (`u234_air`)

Conditional on measured uranium-234 discharge to outdoor air, unspecified subcompartment. Record isotope-resolved activity after controls; no default positive release. Do not use total alpha, total uranium mass or a long-term/correction flow. No simultaneous off-site-waste emission.

- Selected flow: uranium-234 `4d9a8790-3ddd-11dd-8daf-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_release
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `iaea-ssr4-2017`

###### Uranium-234 discharge to water (`u234_water`)

Conditional on measured uranium-234 discharge to freshwater. Record isotope-resolved activity after controls; no default positive release. Do not use total alpha, total uranium mass or a long-term/correction flow. No simultaneous off-site-waste emission.

- Selected flow: uranium-234 `fe0acd60-3ddc-11dd-ae3f-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Full measured physical amount of this atomic exchange for the same period divided by the accepted assembly net-mass total in cp_mass; never divide by item count; use cp_release
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `iaea-ssr4-2017`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_physical | Subdivide by same-model campaigns and retain full physical mass, water, metal/heavy-metal and packaging-reuse accounts. Never multiply physical co-product outputs by allocation shares. No generic yield, recipe or scrap fraction. | iaea-ssr4-2017 |
| allocation_burdens | Prefer separately metered stages/campaigns; attribute shared energy using actual causal metering evidence and demonstrate shares sum to one. Unknown causal relationships remain disclosed, without default allocation of every burden by heavy-metal mass. Rejected items, wastes and packaging receive no automatic substitution credit; do not reallocate an already allocated supplier background. | iaea-ssr4-2017 |
| allocation_services | Preserve full physical packaging/container acquisitions, circulation, retirement, maintenance and stocks independently of service use. Attribute only environmental burdens using evidenced service pools and provider denominators; no assumed lifetime or rotation count, and no duplicated manufacture already included in a service. | iaea-ssr4-2017 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | reference product | weighing | model; supplier; lot; serial; net accepted mass; fuel-compound mass; elemental heavy-metal mass; cladding mass; support-metal mass by material; moisture; package tare | Calibrated weighing or traceable accepted complete-assembly net-mass records; reconcile supplier certified mass accounts; accepted net-mass total; all exchanges per 1 kg reference flow | kg | each accepted lot | whole declared campaign | complete accepted assembly at gate | per 1 kg reference flow | calibration; acceptance; supplier certificate |
| cp_material | assembly | purchased rods and structural components; returned rods | supplier and stock records | SKU; sealed status; lot; gross receipts; installed mass; supplier returns; opening/closing stock; each support component; provider denominator | Weigh or reconcile actual certified supplier net-mass records by delivered identity and lot; same-period physical and stock reconciliation; per 1 kg reference flow | kg | each receipt and campaign closure | same campaign | assembly inputs, returns and stocks | per 1 kg reference flow | supplier BOM; invoices; delivery/return receipts; provider scope |
| cp_energy | assembly | electricity | meter log | stage; interval; voltage; meter reading; utility sharing evidence; provider; reference quantity | Read calibrated meters and verify complete assembly/support-services coverage; attributable same-period electricity per 1 kg reference flow | MJ | each metered interval | same campaign | assembly and attributable utilities | per 1 kg reference flow | meter calibration; provider voltage/region/time; causal allocation record |
| cp_water | assembly | cleaning water and wastewater | meter and discharge records | source; treatment; water mass; density if volume meter; wastewater mass; contaminants; stock/reuse; receiver | Meter or weigh water and wastewater separately; verify actual treatment/receiver; retain water balance; same-period water/wastewater per 1 kg reference flow | kg | each metered interval and transfer | same campaign | cleaning and auxiliary boundary | per 1 kg reference flow | meter calibration; density measurement; sample and receiver records |
| cp_pack | assembly | packaging input/output and container fleet | weighing and reuse ledger | material; grade; moisture; incoming/outgoing single-use mass; container serial; full new/replacement acquisitions; dispatch/return/retirement mass; opening/closing fleet stock; maintenance inputs and wastes; service use; provider denominator; environmental allocation shares | Weigh full packaging and container physical exchanges; pair dispatch/return records; reconcile fleet stocks; keep service use and manufacture/maintenance environmental attribution separate, without assumed life; per 1 kg reference flow | kg | each delivery and campaign closure | same campaign | packaging and fleet interface | per 1 kg reference flow | tare; supplier; delivery/return and fleet records; service allocation evidence |
| cp_waste | assembly | each waste identity | transfer record | mass; material; moisture; isotope-resolved activity; contamination; storage change; receiver; destination | Characterize and weigh each segregated waste; retain authorized receiving evidence; same-period transferred waste per 1 kg reference flow; stock separately | kg | each transfer and stock closure | same campaign | assembly waste-management interface | per 1 kg reference flow | scale calibration; laboratory; waste transfer and stock records |
| cp_release | assembly | each nuclide and medium | monitoring | isotope; detector/assay report; calibration; sampling location; medium/submedium; isotope activity concentration; matching gas/liquid discharge quantity; sampling interval; activity reference date UTC Z; control stage; background; detection limit; isotope-specific uncertainty; linked physical particle/chemical record | Use qualified isotope-resolved assay and monitoring records; integrate post-control isotope concentration with matched measured discharge quantity on the same reference-date basis; retain non-detect uncertainty and coverage; link physical releases without duplicate impact contribution; per 1 kg reference flow | kBq | site monitoring programme intervals | same campaign | actual outdoor-air or freshwater release point | per 1 kg reference flow | detector and laboratory QA; calibration; sampling; reference-date and monitoring coverage records |
| cp_water_release | assembly | net H2O portion of freshwater liquid release | discharge meter and composition record | whole-liquid mass/volume; H2O mass; independently evidenced composition; water density and conditions; net H2O volume basis; receiving freshwater; meter interval; post-control stage; isotope/chemical sample coverage; event links | Measure whole discharge and independently establish its net H2O portion on a compatible density/volume basis; keep every solute/suspended constituent and isotope activity separate with matched intervals; per 1 kg reference flow | m3 | each discharge interval | same campaign | direct freshwater outlet | per 1 kg reference flow | meter calibration; composition and density evidence; receiver and sample records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_basis | all inventory rows | Divide full measured physical exchange totals and separately evidenced service attribution for the same period by accepted assembly net-mass total in cp_mass; out_assembly is fixed at 1 kg; never divide by count. | cp_mass; cp_material; cp_energy; cp_water; cp_pack; cp_waste; cp_release; cp_water_release | Atomic exchange amount per 1 kg reference flow | iaea-ssr4-2017 |

Reconcile physical quantities before attribution: opening stock + all physical boundary inputs = complete product + returned items + transferred waste + all physical boundary releases + closing stock. Total mass and each conserved element have no reaction source or sink; include wet-air and liquid components and resolve any residual with measurement uncertainty and missing-flow evidence, never a fabricated reaction term. A chemical-species ledger may separately record evidenced formation/consumption, including H2O, without changing total mass or element conservation. Nested fuel-compound, elemental uranium/heavy-metal, cladding and support-metal accounts must not be added twice or substituted for whole assembly mass. Use actual supplier certificates or mass tests; do not infer from generic purity, yield or recipe. Activity and mass have separate accounts; without independent nuclide and metrology evidence, do not infer isotope kBq from total alpha, dose, kg or assumed proportions.

Normalize full measured physical exchanges and separately calculated service/environmental attribution to the same accepted assembly net-mass total. Record the physical ledger, service-use ledger, allocation shares and allocated environmental inventory separately. Shared-service shares sum to one only over their declared service pool, without changing full product, waste or return quantities. Link constituent mass, particle mass, activity and carrier water by event and interval; a nested constituent is not additional bulk mass, and duplicate characterization of a contribution is excluded explicitly. A permit value is a limit, not an actual release measurement or proof of no release; neither safety guidance nor chemical BREF supplies a default discharge here.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_provider | upstream and reference | Preserve physical identity, completeness, actual provider quantity/environmental denominator, time, geography and allocation; missing items are not zero and a UUID does not establish complete background. | Original provider environmental data and acceptance certificates |
| environmental_coverage | all exchanges | Include every actual BOM material and consumed utility; additional actual flows need individually verified atomic identities. No supplied-solution default; if actually used, account separately for each component, active matter and carrier water and add atomic cards. Missing monitoring is not zero release; disclose uncovered nuclides/chemicals. | Actual invoices, campaign records, discharge and waste survey |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_identity | Confirm complete non-irradiated civilian UO2 PWR assembly, distinct rod identity and provider start/end states; exclude the other fuels above; finished identity cannot represent rods or pellets. | framatome-htp; iaea-ssr4-2017 |
| validate_balance | Same-period, same-model net-mass denominator applies across bilingual reference, inventory, collection and calculation; reconcile full physical/water/heavy-metal/support-metal and packaging accounts before environmental attribution; allocated mass is not physical output. | iaea-ssr4-2017 |
| validate_releases | Check each nuclide, medium, unit and detection coverage; never sum total alpha/total uranium with their isotope components; nuclides in off-site wastewater/solid waste are not direct releases here; retain every evidenced emission. Report absent monitoring coverage, detection limits or unresolved identities. | iaea-ssr4-2017 |
| validate_metrology | Require isotope-specific detector/assay evidence, calibration, uncertainty and UTC Z activity reference date for kBq. Link physical chemical/particle mass and radioactivity without duplicate characterization; particle fundamental quantities must match the model. Net H2O Volume/m3 is not whole-liquid volume. Total mass and element balances have no reaction source/sink; species formation/consumption is a separate evidenced account. A permit limit is not an actual release. | iaea-ssr4-2017 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Public assembly/delivery environmental foreground dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Civilian environmental LCA with matching physical and provider denominators |
| excluded_use | Nuclear-material preparation, design/optimization, key-parameter inference, radiological safety/licensing decisions or full-fuel-cycle claims |
| required_metadata | Section 3 qualifiers, denominator, provider backgrounds, stage coverage and attribution |
| required_quality_disclosure | Identity metadata defects, missing provider/nuclide monitoring/actual materials, detection limits, uncertainty and unresolved items |
| update_trigger | Changes in SKU, provider, delivery state, material, utilities, monitoring or quantity basis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| iaea-ssr4-2017 | official_guidance | IAEA, Safety of Nuclear Fuel Cycle Facilities, SSR-4 (2017), 1.8 (printed 3/PDF23), 9.102–9.108 (printed 110–111/PDF130–131); https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf | Nuclear-facility scope and environmental record categories. No LCI factors, recipes, permit limits or quantity defaults. Denominator, physical/species/service accounts and metrology requirements are authored PCR collection rules. |
| framatome-htp | handbook | Framatome, PWR Fuel Assembly HTP, A0529, manufacturer original; https://www.framatome.com/solutions-portfolio/portfolio/product/A0529/pwr-fuel-assembly-htp; HTP product sheet PS_US_328_ENG_05_18, pages 1–2; https://www.framatome.com/solutions-portfolio//app/uploads/2025/09/a0529-p-us-g-en-328-05-18-htp.pdf | Example of civilian PWR complete-assembly and zirconium-alloy-cladding category. One manufacturer; no generic mass, energy, recipe or design requirement. |
