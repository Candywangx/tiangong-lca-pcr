---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.white-spirit-and-special-boiling-point-industrial-spirits
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Petroleum white spirit and special-boiling-point solvent mixtures (fractionation and optional hydrogen treatment)

## 1. Scope and Applicability

This PCR is a method for bulk liquid petroleum-derived white spirit and special-boiling-point (SBP) solvent mixtures manufactured by actual fractionation, with hydrodesulfurization and/or catalytic hydrogenation only when operated. A dataset represents one declared SKU, aromatic-content class, distillation curve and supply state, not a generic hydrocarbon CAS. The selected reference identity covers only white spirit distilling within 135–200 °C with flash point above 30 °C, or SBP distilling within 30–200 °C. Historical grades beyond those limits need another reference identity. The white-spirit flash-point condition does not apply to SBP. The reference record has no CAS or fixed catalytic route; its manufactured-at-plant name and separate boiling descriptions do not establish every commercial solvent grade. White spirit is an evaporating petroleum solvent, distinct from white mineral oil. Pure isolated chemicals, synthetic isoparaffins, formulated paint or cleaner, aviation fuel, generic naphtha/kerosene sold as fuel/feedstock, and solvent-extracted white spirit (type 2) are outside this boundary.

WHO/IPCS EHC 187 §§2.1.1 and 3.2 distinguishes distillation-only, hydrodesulfurized and hydrogenated petroleum mixtures and a separate extraction route. These historical type descriptions establish route distinctions, not present-day assay or quantity defaults. Shell’s SBP product page describes its deeply hydrogenated paraffin/cycloparaffin range; its sales specification remains grade-specific. SBP coverage here is limited to petroleum-fraction mixtures with documented fractionation and treatment, and excludes isolated hexane/heptane and synthetic routes. Record actual initial/final boiling points, full curve where available, aromatic mass or volume basis, benzene, sulphur, density and flash point against the real supply contract. Shell SBP 40/65 and SBP 140/165 TDS illustrate distinct hydrogenated-feedstock mixtures within the SBP boiling envelope; the latter is not thereby white spirit. Their typical physical properties and common UVCB CAS do not establish the actual site SKU, assay, fractionation history or quantities. WHO historical compositions, producer examples and SDS reporting thresholds are not universal doses, emission fractions or evidence of absence below a threshold.

The declared foreground begins at receipt of separately metered refinery naphtha/kerosene stocks at the solvent works and ends at the bulk custody-transfer gate. Crude extraction and refinery stock production are upstream linked systems; their multi-product allocation and treatment must remain disclosed. Distillation, actual catalytic treatment, recovery, storage, utilities and bulk loading are one aggregated foreground unit with separately metered stages. Retail packaging, subsequent formulation, use-phase evaporation and downstream distribution are excluded. If those operations are required, expand the boundary with atomic exchanges and dedicated evidence; do not silently assign them zero. Separately account for actual incoming-feed and catalyst containers, bulk-loading equipment cleaning, seals, lubricants, filters and other maintenance materials, their wastes and return logistics within this gate. Excluding retail packs does not exclude these actual operations. Reusable containers require their own stock, service-life and return ledger; no default container lifetime is assumed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.white-spirit-and-special-boiling-point-industrial-spirits |
| classification_refs | CPC 3.0:33350; narrower scope limited to the product and route defined here; mapping acceptance is maintained separately in classifications/mappings/. |
| covered_products | Bulk white spirit and SBP petroleum-solvent mixtures from fractionation, with actually operated HDS/hydrogenation declared. |
| excluded_products | White mineral oil; isolated chemical solvents; synthetic isoparaffins; type 2 solvent extraction; formulated products; retail packs; generic feedstock or fuel grades. |
| representative_product | One assayed and accepted bulk petroleum-solvent SKU at custody transfer. |
| production_route | Refinery-stock receipt; actual fractionation and optional HDS/hydrogenation in documented order; recovery; quality release; storage; bulk loading. |
| market_state | Unformulated bulk liquid with specified distillation curve, aromatic class and actual supply condition. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of one specified petroleum-solvent mixture at the solvent-works bulk gate. |
| How much | 1 kg net accepted bulk solvent, excluding containers and vehicle. |
| How well | Actual SKU specification is met; assay, aromatic basis, treatment history, distillation curve and supply state are declared. This mass basis does not assert equal solvent performance across grades. |
| How long or cycle | One representative reporting period with inventories reconciled; no use lifetime is assumed. |
| reference_flow_link | finished_solvent |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | White spirit and special boiling point industrial spirits `5fb93398-c4c6-4b60-bb16-ca956bc35985` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU; mixture rather than pure species; petroleum origin; received feed identity and prior treatment; actual HDS/hydrogenation and stage order; aromatic assay and mass/volume basis; benzene and sulphur; distillation test and full curve or IBP/FBP; flash point; density and reference temperature; bulk supply state; gate; site; reporting period; provider quantity basis; allocation and recovery destinations |

The platform Chinese product display is a mistranslation; the record comment and this PCR define a petroleum-solvent fraction, excluding ethanol, beverage/alcoholic products and white mineral oil.

The qualifiers shall be present in the concrete data package. Tiangong flow identity and provider quantity/background compatibility are separate requirements; a broad product identity cannot establish a grade-specific production dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Use net accepted mass at the declared gate; exclude packaging, tank heels, off-spec waste and internal transfers; all inventory rows use per 1 kg reference flow. |
| `liquid_conversion` | liquid streams | Mass | kg | Convert volume only with the actual stream density and declared temperature; retain volume, assay and method. No universal solvent density or UVCB molecular weight is assumed. |
| `steam_basis` | steam | Mass | kg | Keep steam mass and net useful heat distinct; Q = m_supply*h_supply - m_return*h_return with measured supply/return states, kg and kJ/kg yielding kJ, and a common declared enthalpy reference; include each carrier stream if there are multiple returns. Convert gauge pressure with measured local atmospheric pressure, not a universal offset. Meter gross supplied steam and return mass separately; a return does not silently reduce a provider reference defined as gross supplied kg. For a heat-service provider, use its measured net delivered MJ definition instead. Count one external energy service and retain carrier mass/water balances without duplicating heat burdens; unknown provider/state/heat basis remains pending. |
| `gas_basis` | gas inputs | Volume | m3 | Preserve gas reference temperature, pressure, composition, wet/dry and compressibility with the provider definition; a secondary mass coefficient is not a density. H2 circulation is not net makeup. |
| `energy_basis` | electricity and fuel records | Energy | MJ | Record carrier-specific meters and actual provider property (including NCV/GCV for fuel); retain original kWh and documented conversion. Do not count fuel input and its generated heat as two external energy supplies. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stocks` | solvent_manufacture | Start at metered refinery-stock receipt, include actual fractionation and treatment, recovery, quality release, tank operations, utilities and bulk loading; retain stage-level records. | `eu-refinery-bref-2015` |
| `boundary_upstream` | external inputs | Link representative stock, H2, power, fuels, steam, water and catalyst background datasets with their physical/quantity bases, upstream refining coproduct handling and actual route; no zero-burden refinery stocks. | `eu-pef-2021` |
| `boundary_releases` | included operations | Include actual process vents, equipment leaks, tanks, loading, heaters, flares, water interfaces and waste transfers after actual control. Extend inventory with each actual chemical, fuel or pollutant not enumerated here; this conditional list is not a cut-off. | `us-epa-ap42-refining-2015` |
| `boundary_internal` | recycle and recovery | Retain a physical process map with same-quantity paired transfers for H2 recycle, light/heavy returns, recovered liquid, steam/condensate and heat. Internal links cancel only in the aggregated external inventory, not in the mass/water/carbon/sulphur/energy ledgers. | `eu-refinery-bref-2015` |
| `boundary_services` | off-site treatment | Wastewater, sour gas and spent catalyst transferred outside the foreground retain actual amounts, composition and receivers and linked treatment. If treatment is inside the foreground, replace transfer with measured inputs, recovered products, residues and direct releases without double counting. | `eu-refinery-bref-2015` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Separately metered straight-run naphtha/kerosene stocks received with declared upstream origin, prior treatment, assay and quantity basis. |
| starting_condition_role | Foreground solvent-works entry; crude distillation remains in linked upstream datasets. |
| product_classification_scope | Narrower than CPC 33350: petroleum solvent mixtures through fractionation and optional HDS/hydrogenation, bulk supply; extraction and other excluded routes require separate assessment. |
| recursive_input_rule | Same-category external solvent feed requires its own representative upstream record and measured input. Internal recycle retains source/destination and equal mass without recursive dataset creation. |
| upstream_dataset_requirement | Physical identity, actual route, geography/time, state, property and quantity compatibility for every purchased stock or utility; disclosed refinery coproduct allocation. |
| disclosure | Actual stage order, feed and grade, aromatic/boiling assays, bulk gate, period, control equipment, utility bases, balances, receiving services, exclusions and unresolved links. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `solvent_manufacture` | Integrated solvent fractionation, actual treatment, recovery and bulk dispatch | required | One documented route per dataset; conditional cards apply only to operations actually present. | One aggregated foreground with separately metered fractionation, treatment, tanks, utilities and loading. | per 1 kg reference flow |

Actual diagram: metered refinery stock → fractionation → operated HDS/hydrogenation in its actual order → quality release → bulk storage/loading. Record each light/heavy cut and hydrogen recycle separator stream, wash/sour water, condensate, recovered vapour, purge to fuel/recovery/flare, and external receiver. Reversed treatment/fractionation order is allowed only with the actual diagram. No universal yield, hydrogen consumption or aromatic reduction is inferred.

### Process: Integrated solvent manufacture (`solvent_manufacture`)

#### Inputs

##### Product flows

###### Straight-run petroleum naphtha for solvent fractionation (`feed_naphtha`)

Include only the actually received, metered crude atmospheric-distillation side-cut specified by this UUID. Hydrocracker, reformer, synthetic or solvent-redistillation streams require separately verified identities; later upstream treatment cannot be hidden behind this straight-run name. Declare crude origin, prior treatment, distillation curve and upstream provider; do not infer feed grade from a broad CAS.

- Selected flow: Naphtha `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `who-white-spirit-1996`

###### Straight-run petroleum kerosene for solvent fractionation (`feed_kerosene`)

Include only actual kerosene feed; it is a separate exchange from naphtha and not a substitute for finished white spirit. The native CAS 8008-20-6 identifies a mixture; its sumFormula C15H32 does not establish a pure compound, universal molecular weight, carbon fraction or measured assay. The record has no hard route field, so actual straight-run origin and prior treatment still require supplier evidence.

- Selected flow: Kerosene `23e5fea5-d83a-4d27-9cb2-2907f715f4ab`
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `who-white-spirit-1996`

###### Hydrogen gas for catalytic solvent treatment (`hydrogen`)

Conditional on operated HDS or hydrogenation. Record purchased or refinery-transferred makeup, purity and fossil/other production route separately from compressor recycle.

- Selected flow: Hydrogen gas for catalytic solvent treatment
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `eu-refinery-bref-2015`

###### Electricity supplied to solvent manufacture (`electricity`)

Meter distillation pumps, hydrogen compressors, cooling, vapour recovery and loading; require a compatible provider voltage and reference energy definition. This UUID is only Chinese (CN) 1–35 kV grid-average alternating current at the user. Match actual supply country, voltage, grid provider and declared reference Net calorific value/MJ; another voltage or own generation requires another atomic identity. No database mix is a default site background.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-refinery-bref-2015`

###### Process steam supplied to solvent fractionation (`steam`)

Conditional on supplied steam. Record actual pressure, temperature, dryness and return condition; match supply-side reference quantity. Mass and MJ records alone do not establish net delivered heat.

- Selected flow: Process steam supplied to solvent fractionation
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-refinery-bref-2015`

###### Natural gas supplied to solvent-process heaters (`natural_gas`)

Conditional on actually fired natural gas. Preserve supplier volume basis, temperature, pressure, wet/dry condition, composition and compressibility; convert to mass only with an independently supported gas density. This identity is compressed, pipeline-delivered gaseous natural gas. Retain actual supplier T/P, wet/dry, composition and Z against its reference Volume/m3; the secondary Mass value is not a gas density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-refinery-bref-2015`

###### Refinery fuel gas supplied from an external refinery unit (`refinery_fuel_gas`)

Conditional on external supply; retain measured composition, sulphur and heating-value basis. Internally generated purge burned within this foreground remains an internal link and is counted in direct releases once.

- Selected flow: Refinery fuel gas supplied from an external refinery unit
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-refinery-bref-2015`

###### Demineralized water supplied to solvent treatment (`demin_water`)

Include external wash or boiler makeup water actually used; track washing, cooling and steam uses independently in the water ledger. Apply only to actual deionized water from ion exchange or reverse osmosis, the native hard route, at the production gate and with compatible purity/provider. A broad comment mentioning distillation does not override this hard route; distillation-only, untreated raw or merely softened water requires another verified identity.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refinery-bref-2015`

###### Purchased cooling-water makeup (`cooling_water`)

Conditional on purchased makeup. Do not use gross circulating water as purchased consumption or duplicate a direct resource withdrawal.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refinery-bref-2015`

###### Nitrogen gas for solvent tank blanketing (`nitrogen`)

Conditional on actual inerting. Record vent destination, consumption and provider gas basis; no nitrogen consumption is imposed on a non-inerted tank. Apply to actually supplied gaseous nitrogen from air separation; do not use the reference meanValue as a site density or consumption default.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `eu-refinery-bref-2015`

###### Nickel-molybdenum oxide catalyst on alumina for hydrotreating (`nimo_catalyst`)

Conditional on this actual catalyst formulation; record active metal loading, carrier, fresh/spent basis and replacement campaign. Other catalyst chemistry requires its own atomic row and verified identity.

- Selected flow: Nickel-molybdenum oxide catalyst on alumina for hydrotreating
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `eu-refinery-bref-2015`

###### Cobalt-molybdenum oxide catalyst on alumina for hydrodesulfurization (`como_catalyst`)

Conditional on this actual formulation; do not charge an alternative catalyst twice for one reactor bed. Use actual replacement mass, not a refinery-average factor.

- Selected flow: Cobalt-molybdenum oxide catalyst on alumina for hydrodesulfurization
- Flow property / unit: Mass / kg
- Amount rule: Measure the external net input over the declared period, reconcile inventory and returns; divide by net accepted solvent mass per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `eu-refinery-bref-2015`

##### Waste flows

##### Elementary flows

###### Water withdrawn from river for solvent-process makeup (`river_water`)

Conditional on actual direct withdrawal from this resource compartment; record location and abstraction meter; exclude purchased and recirculating water.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Meter actual withdrawal Volume/m3; retain site/country, source and compatible meter basis; use actual density only for the separate water mass ledger and normalize per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refinery-bref-2015`

###### Water withdrawn from groundwater for solvent-process makeup (`groundwater`)

Conditional on actual direct withdrawal from this resource compartment; record location and abstraction meter; exclude purchased and recirculating water.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Meter actual withdrawal Volume/m3; retain site/country, source and compatible meter basis; use actual density only for the separate water mass ledger and normalize per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refinery-bref-2015`

#### Outputs

##### Product flows

###### White spirit or special-boiling-point petroleum solvent, bulk liquid (`finished_solvent`)

One accepted SKU/grade and actual route per dataset. Combine quality release, storage and loading with manufacture in this foreground; intermediate solvent transfers are not a second finished-product exchange. Actual petroleum mixture within record limits: white spirit distillation 135–200 °C and flash point above 30 °C, or SBP distillation within 30–200 °C; actual fractionation/HDS/hydrogenation and bulk state required. Historical broader white-spirit variants outside this identity are excluded.

- Selected flow: White spirit and special boiling point industrial spirits `5fb93398-c4c6-4b60-bb16-ca956bc35985`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `who-white-spirit-1996`

###### Light petroleum distillate separated from solvent fractionation (`light_cut`)

Record actual light side-cut composition, boiling curve, treatment and receiving unit. Internally returned light cut is an internal link, not an external output.

- Selected flow: Light petroleum distillate separated from solvent fractionation
- Flow property / unit: Mass / kg
- Amount rule: Measure actual external output before allocation; reconcile inventory and normalize per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `eu-refinery-bref-2015`

###### Heavy petroleum distillate separated from solvent fractionation (`heavy_cut`)

Record actual heavy bottoms specification, net mass and receiver; do not label it white mineral oil or finished solvent without product evidence.

- Selected flow: Heavy petroleum distillate separated from solvent fractionation
- Flow property / unit: Mass / kg
- Amount rule: Measure actual external output before allocation; reconcile inventory and normalize per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `eu-refinery-bref-2015`

###### Hydrogen-rich sour purge gas to refinery gas recovery (`sour_purge_gas`)

Conditional on recovery transfer outside this foreground. This is one measured mixture stream with H2, hydrocarbon, H2S, water and any NH3 assay, actual state and receiver; keep internal recycle and on-site flaring separate.

- Selected flow: Hydrogen-rich sour purge gas to refinery gas recovery
- Flow property / unit: Mass / kg
- Amount rule: Measure actual external output before allocation; reconcile inventory and normalize per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `eu-refinery-bref-2015`

###### Steam condensate returned to the utility supplier (`condensate_return`)

Conditional on actual external condensate return; record mass, pressure, temperature and contamination and bind the steam enthalpy balance.

- Selected flow: Steam condensate returned to the utility supplier
- Flow property / unit: Mass / kg
- Amount rule: Measure actual external output before allocation; reconcile inventory and normalize per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refinery-bref-2015`

###### Useful heat exported from solvent manufacture (`exported_heat`)

Conditional on actual externally delivered useful heat with measured supply/return conditions. Internal feed/effluent heat recovery is a physical internal energy link, not an exported product.

- Selected flow: Useful heat exported from solvent manufacture
- Flow property / unit: Energy / MJ
- Amount rule: Measure actual external output before allocation; reconcile inventory and normalize per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-refinery-bref-2015`

##### Waste flows

###### Sour wastewater from petroleum-solvent treatment sent to external treatment (`sour_water`)

Measure actual effluent sent to sour-water stripping or wastewater treatment, with oil, sulphide, NH3 and water content; do not substitute a wastewater row from another industry. Record one whole wet carrier mass and its constituent subledger; contained water or contaminants are not additional physical outputs or direct releases at this treatment handoff.

- Selected flow: Sour wastewater from petroleum-solvent treatment sent to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Weigh or meter the actual external wet waste stream, retain constituent analyses and normalize per 1 kg reference flow; do not assume recovery efficiency or credits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refinery-bref-2015`

###### Spent nickel-molybdenum hydrotreating catalyst (`spent_nimo`)

Conditional on the corresponding actual catalyst. Retain sulphur, coke, metals, moisture, packaging and recovery/disposal destination; match fresh/spent inventory and campaign.

- Selected flow: Spent nickel-molybdenum hydrotreating catalyst
- Flow property / unit: Mass / kg
- Amount rule: Weigh or meter the actual external wet waste stream, retain constituent analyses and normalize per 1 kg reference flow; do not assume recovery efficiency or credits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refinery-bref-2015`

###### Spent cobalt-molybdenum hydrodesulfurization catalyst (`spent_como`)

Conditional on the corresponding actual catalyst, measured separately from spent Ni/Mo catalyst and with its actual receiver and contamination.

- Selected flow: Spent cobalt-molybdenum hydrodesulfurization catalyst
- Flow property / unit: Mass / kg
- Amount rule: Weigh or meter the actual external wet waste stream, retain constituent analyses and normalize per 1 kg reference flow; do not assume recovery efficiency or credits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refinery-bref-2015`

###### Oily sludge from petroleum-solvent tank cleaning (`oily_sludge`)

Conditional on actual tank-cleaning sludge; retain water, oil and solids fractions, contaminated status and treatment. Do not combine a liquid waste-solvent purge with sludge.

- Selected flow: Oily sludge from petroleum-solvent tank cleaning
- Flow property / unit: Mass / kg
- Amount rule: Weigh or meter the actual external wet waste stream, retain constituent analyses and normalize per 1 kg reference flow; do not assume recovery efficiency or credits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refinery-bref-2015`

###### Waste petroleum solvent purge sent off site for recovery or disposal (`waste_solvent`)

Conditional on external waste transfer after recovery; retain actual composition, water content, hazardous status and receiver. Conforming finished product is consolidated into finished_solvent.

- Selected flow: Waste petroleum solvent purge sent off site for recovery or disposal
- Flow property / unit: Mass / kg
- Amount rule: Weigh or meter the actual external wet waste stream, retain constituent analyses and normalize per 1 kg reference flow; do not assume recovery efficiency or credits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-refinery-bref-2015`

##### Elementary flows

###### Carbon dioxide, fossil, to outdoor air (`co2_fossil`)

Include actual fossil combustion and destruction emissions from included heaters, boilers and flares. Maintain fuel carbon, residual carbon and control boundaries.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Carbon monoxide to outdoor air (`co`)

Include measured or route-supported incomplete-combustion releases; retain measurement conditions and installed control.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Methane, fossil, to outdoor air (`ch4_fossil`)

Record actual fossil methane leakage and combustion slip separately from non-methane VOC.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Nitrogen oxides, excluding nitrous oxide, to outdoor air (`nox`)

Use an aggregate only after monitor, inventory and LCIA quantity definitions agree; Mass/kg alone does not establish NO2 equivalent. If reporting NO/NO2 separately, replace this aggregate and do not sum both representations. Physical NOx aggregate identity is retained conditionally; its Mass/kg does not prove NO2-equivalent quantity. Provider and actual monitor/LCI/LCIA basis remain required; exclude N2O and do not also inventory NO/NO2 quantities represented by the aggregate.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Sulfur dioxide to outdoor air (`so2`)

Record actual combustion or destruction SO2 with sulphur input and removed sulphur reconciled; no complete conversion is assumed without evidence.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Hydrogen sulfide to outdoor air (`h2s`)

Conditional on actual uncontained H2S releases. H2S captured in a gas stream to a refinery treatment unit is a physical gas transfer, not an elementary air release.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Benzene to outdoor air (`benzene_air`)

Quantify benzene separately when present in the actual vapour; preserve its measured species mass and exclude it from the residual NMVOC exchange. Do not infer vapour benzene from a liquid aromatic limit.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Non-methane volatile organic compounds from petroleum solvent, to outdoor air (`nmvoc`)

One aggregate exchange is allowed only with supported actual vapour-speciation coverage, exclusion of methane, and total molecular-mass basis. Vapour composition is not assumed equal to liquid composition. Replace the aggregate with verified individual species when required by the assessment; never sum the aggregate and its constituents. Use only the residual non-methane VOC molecular-mass sum after benzene and every other individually inventoried component have been removed from the same actual vapour balance. Determine actual liquid and vapour speciation and identify high-impact constituents; inventory each available species individually, and never hide a known high-impact constituent in this sum. An unsupported residual remains unresolved; total NMVOC is a diagnostic, not an additional exchange.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Particulate matter, diameter below 2.5 micrometres, to outdoor air (`pm25`)

Conditional on actual particulate emissions; record filterable/condensable method boundaries and size cut. Keep aerosol-bound toxic species and particle totals linked to one physical release. Their characterization may use distinct mechanisms, but constituent mass must not be added again to total carrier mass. Check LCIA overlap and coverage explicitly; neither delete species toxicity nor count the same characterized fraction twice. Gas-phase VOC and condensable particulate boundaries must follow the actual sampling method.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Particulate matter, diameter 2.5 to 10 micrometres, to outdoor air (`pm25_10`)

Use the non-overlapping fraction only with compatible PM10 and PM2.5 measurements; never add PM10 inclusive to PM2.5 inclusive.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Particulate matter, diameter above 10 micrometres, to outdoor air (`pm_over10`)

Conditional on an actual supported coarse-particle fraction from included combustion or handling; collected solids are waste/recycle, not released particles.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Water vapour to outdoor air (`water_evap`)

Record actual net process water added to outdoor air, separately from resource withdrawal, liquid return and recirculation. Retain inlet ambient humidity and water in fuels, wet feed, steam and carrier gas against outlet humidity. Combustion or reaction water is a compound transformation supported by actual elemental/stoichiometric evidence; it is not an extra total-mass source. Gross exhaust water is not assumed to be process evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Quantify actual release after installed controls using cp_air; retain compound/aggregate definition and normalize per 1 kg reference flow. A concentration without flow and duration is not an emitted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-ap42-refining-2015`

###### Liquid water discharged to fresh surface water (`water_discharge`)

Conditional on a final discharge within the declared foreground. Off-site wastewater transfer and its receiving treatment dataset cannot also be reported as an untreated direct discharge. Retain gross effluent volume and assay separately; this H2O flow represents the water component on a compatible Volume/m3 basis, not the mass of the entire wet mixture. Convert component mass using supported density/reference conditions. Benzene and other measured species belong to the same whole-discharge composition ledger, not extra mass beyond the carrier.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Meter gross final effluent and assay its water fraction; quantify the H2O component on the native Volume/m3 basis with supported density/reference conditions, retain the freshwater receiver and normalize per 1 kg reference flow. Keep gross wet mass and species masses in the separate whole-carrier ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refinery-bref-2015`

###### Benzene discharged to fresh surface water (`benzene_water`)

Conditional on analytically established benzene in the final discharge. This is species mass, not COD, TOC or total oil; do not invent a benzene fraction from a solvent CAS or product aromatic limit.

- Selected flow: benzene `08a91e70-3ddc-11dd-9207-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Integrate representative final-effluent benzene concentration with contemporaneous gross effluent volume on the same sample basis, rather than H2O component volume, and normalize per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-refinery-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | shared production | First avoid allocation through documented subdivision or system expansion where appropriate; otherwise justify a physical relationship, then economic allocation if no defensible physical relationship exists. A solvent-use label alone does not determine allocation. | `eu-pef-2021` |
| `allocation_ledgers` | all physical outputs | Keep all measured product, side-cut, gas, water and waste amounts in the unallocated physical ledger. Allocate only shared environmental burdens; never multiply coproduct mass, internal transfer or actual discharge mass by an allocation share to close the physical balance. | `eu-pef-2021` |
| `allocation_factor` | shared environmental burdens | For a justified basis b_j, a_j = b_j / sum(b_j) over the documented coproduct set; allocated shared burden B_j = a_j * B_shared, with directly attributable burdens assigned separately. Retain period, product set, basis, prices or physical relationships and sensitivity; no fixed allocation factor is supplied. For an economic basis, use same-stage accepted quantities and comparable net unit prices: b_j = P_j*p_j; document currency, period, taxes, transport, container charges, rejected/returned lots and prices supported by sales records. Stage-specific shares sum to one over the documented coproduct set; physical quantities remain unallocated. | `eu-pef-2021` |
| `allocation_recovery` | recovery and waste treatment | No default avoided-product credit for recovered cuts, heat or catalyst. Record actual receiving route and consistent treatment model, allocation and substitution quality before applying a justified credit; avoid counting recovery at both sender and receiver. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Actual site SKU, feed, composition and quantities are fields to collect; this PCR supplies no invented filled observations. Retain opening/closing quantities and composition for feed, each intermediate, finished/rejected/rework product, recycled solvent, catalysts and containers over the same period. Record dispatch, acceptance, customer returns, supplier returns, reprocessing, heels, spills and already recorded waste separately; unrelated returned grades cannot arbitrarily cancel inputs or product. Keep gross/tare container measurements, cleaning and maintenance materials, replacement parts and their wastes and return/reuse cycles, adding each actually present item as an atomic exchange. Separate H2 makeup, circulation, reaction consumption, purge and dissolved residual; match quantity, composition and destination at both ends of every product, side-cut and recovered-solvent link.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | solvent_manufacture | Material and reference-product mass | Calibrated custody meters, scales, batch/tank records and supplier certificates | SKU; route; feed/cut IDs; assay; net accepted product; density/temperature; opening/closing stocks; makeup H2; gas composition; internal transfers; receiver; C/H/O/N/S assays; stage stocks/moisture; rejects/rework/returns; gross/tare/reuse container ledger; maintenance inputs/wastes | Read and reconcile actual external and paired internal meters; collect assay per feed and product lot. Aggregation rule: Sum external net quantities with inventory reconciliation; divide by net accepted solvent kg for per 1 kg reference flow; retain all unallocated physical coproducts | kg; m3 where traceably converted | Each batch/transfer; monthly reconciliation | One declared representative period covering actual grade campaigns and significant transients | Feed, fractionation, reactor, separators, recovery and loading | per 1 kg reference flow | Calibration; supplier basis; assays; stage diagram; balance residuals |
| `cp_energy` | solvent_manufacture | Electricity, steam, fuels and recovered/exported heat | Carrier-specific meters and utility contracts | meter IDs; voltage/property; kWh/MJ; fuel composition; NCV/GCV; gas T/P/Z/wet-dry; steam P/T/dryness and gauge/absolute basis; local atmosphere; supply/return m/h with common reference; internal recovered heat; material sensible/latent heat; energy stocks/losses | Meter actual stages and pair energy transfers; record supply/return enthalpy and reference; preserve original carrier. Aggregation rule: Sum each compatible carrier independently; divide by net accepted solvent kg for per 1 kg reference flow; keep internal heat and external heat separate | MJ; kWh; kg steam; m3 gas | Continuous or each utility period; monthly reconciliation | One declared representative period covering actual grade campaigns and significant transients | All included compressors, pumps, heaters, cooling and vapour recovery | per 1 kg reference flow | Calibration; contract/reference property; enthalpy method; stage attribution |
| `cp_water` | solvent_manufacture | Withdrawal, purchased makeup, sour water, condensate and final discharge | Water meters, flow-proportional sampling and treatment manifests | source compartment; water T/density; wash/cooling/steam destination; circulation; evaporation; condensate return; receiver; oil/sulphide/NH3; final benzene concentration; concurrent discharge volume; whole wet carrier and water fraction; inlet humidity; supported net reaction water | Pair water interfaces and sample actual final discharge; integrate species concentration with contemporaneous flow/duration; no COD/TOC-to-species conversion. Aggregation rule: Reconcile withdrawals plus imports, returns, evaporation, discharge and stock change; divide each external quantity by accepted solvent kg for per 1 kg reference flow | kg; m3; mg/L; hours | Continuous volume; representative batch/flow-proportional samples | One declared representative period covering actual grade campaigns and significant transients | Actual water and treatment interfaces within the declared boundary | per 1 kg reference flow | Calibration; chain of custody; laboratory limits; moisture and receiver records |
| `cp_waste` | solvent_manufacture | Wastewater, spent catalysts, tank sludge and waste solvent | Weigh tickets, waste assays, stock and recovery records | stream ID; wet mass; water/oil/solids; metal/sulphur/coke; hazard status; internal recovery; external receiver; transport; treatment model; whole wet carrier composition closure; separated packaging tare; maintenance wastes and returns | Measure each actual waste stream independently; catalyst replacement campaigns are linked to the product output represented by their service period. Aggregation rule: Sum each external wet waste independently; preserve constituent mass and service-period attribution; divide by accepted solvent kg for per 1 kg reference flow | kg | Each waste transfer or catalyst replacement | One declared representative period covering actual grade campaigns and significant transients | Included waste generation, collection and actual recovery handoff | per 1 kg reference flow | Waste manifests; assays; campaign records; receiving treatment contract |
| `cp_air` | solvent_manufacture | Actual post-control elementary releases | Stack/vent tests, validated leak/tank/loading calculations and event logs | source; species/CAS or aggregate membership; vapour assay; concentration response basis; flow; duration; capture and destruction; flare event; fuel C/S; particle cut; fossil carbon; uncertainty; aerosol species/LCIA overlap; inlet/outlet humidity and carrier background; residual NMVOC membership coverage | Measure representative actual sources; validate estimates against stream service, controls and operating time. Retain liquid/vapour distinction, raw detection limits, response factors and complete pollutant scope. Aggregation rule: Integrate each non-overlapping release after actual control; divide by accepted solvent kg for per 1 kg reference flow; retain physical release and separately allocated burden ledgers | kg species; measured raw concentration and flow units | Representative normal/transient campaigns and continuous operating logs | One declared representative period covering actual grade campaigns and significant transients | Actual heaters, boilers, flare, vents, equipment, tanks, loading and included treatment | per 1 kg reference flow | Method/version; calibrations; assay; gas-basis conversion; source coverage; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | x_ref = X_net / P; X_net is an actual inventory-reconciled external exchange over the same period; P is net accepted finished-solvent kg in cp_mass. Retain physical balances before allocation and normalize allocated burdens separately. | X_net; P; cp_mass | exchange per 1 kg reference flow | `eu-pef-2021` |
| `calc_balances` | physical ledgers | Across all whole carrier streams: external inputs + opening inventory = external outputs + closing inventory + separately measured losses not already represented as emissions or waste. At each stage pair every internal transfer with the same unallocated quantity and composition; preserve feed, intermediate, finished/rejected product, catalyst, recoverable solvent and container stocks. Close total mass and C/H/O/N/S and other relevant elements with actual assays, air O2/N2, inlet humidity and outlet gases included. HDS/hydrogenation transform species and H2/S distribution but cannot be additional total-mass or elemental sources/sinks. In the water-component ledger include verified net reaction formation/consumption without adding it again to total mass. Whole wet waste, purge and discharge carriers include their constituent water/oil/solids once. Energy closure uses consistent measured chemical-energy/enthalpy bases, work, useful supplied/exported heat, material sensible/latent heat, stock change and supported dissipation; do not add reaction heat twice to a formation-enthalpy balance. | cp_mass; cp_water; cp_energy; cp_waste; cp_air | unallocated balance residuals and uncertainty | `eu-refinery-bref-2015` |
| `calc_emission_mass` | air and water release rows | Integrate compatible species concentration and contemporaneous flow over measured operating duration, with raw unit conversions and real capture/destruction accounted once. For gas records reported as carbon or FID equivalents, actual speciation and response/molecular conversion are needed before reporting kg compound or kg NMVOC; unexplained balance residual is not a specific emission. | cp_air; cp_water; actual sample analyses | kg actual non-overlapping release before reference normalization | `us-epa-ap42-refining-2015` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all exchanges | Resolve physical identity using complete name, CAS, comment, classification and hard route/state fields; property and unit-group support plus provider quantity basis are separate checks. A broad hydrocarbon CAS does not establish a mixture assay. | Supplier assay/specification; direct flow records; compatible provider definitions |
| `dq_methods` | measurements and estimates | Declare actual representative period, completeness, calibration, limits and uncertainty. Historical or one-factory observations, typical producer compositions, SDS disclosure/analytical thresholds and BAT concentrations are not universal recipes, emission factors, doses, absence evidence or input defaults. Boilers, flares, storage and loading each require their own applicable method; AP-42 refinery examples do not establish their quantities. | Retained actual raw records, method applicability and excluded-source rationale |
| `dq_completeness` | process boundaries | Record additional actual chemicals, catalysts, flared gases, pollutants and wastes as separate atomic exchanges; do not omit known releases merely because no exact UUID is available. Biogenic CO2, if actually present, requires its own row and is retained in LCI despite any climate reporting convention. | Actual plant diagram, source register and balance coverage |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Reject white mineral oil, extraction-route type 2, pure monomers, synthetic solvent routes or grades whose actual mixture/route/state falls outside this scope. Classification or broad CAS alone is insufficient. | `who-white-spirit-1996` |
| `validate_reference` | finished_solvent | Exactly one finished-solvent product output realizes the 1 kg reference. Known identical intermediate solvent transfers remain physical internal links; neither a fabricated UUID nor hidden identity may evade reference-output checks. | `eu-refinery-bref-2015` |
| `validate_quantity` | all inventory rows | Require the same period, net accepted-mass denominator, collection aggregation and unit conversion in both languages; inspect physical/provider bases independently from database identity. | `eu-pef-2021` |
| `validate_balance` | physical and allocated ledgers | Reconcile complete unallocated whole-carrier mass, water components, C/H/O/N/S and other relevant elements and energy with uncertainties, actual side-cut receivers, stocks, containers, maintenance, returns and paired internal links. Reaction transformations do not repair a total-mass/elemental residual, and allocation does not repair missing physical outputs. | `eu-refinery-bref-2015` |
| `validate_pollutants` | elementary rows | Verify species, medium/subcompartment, fossil/biogenic origin, actual property/unit and monitor/LCIA basis. No correction flow or nearby substance may substitute. Use a residual NMVOC mass sum excluding benzene and every individually represented constituent, plus non-overlapping particle-size fractions and documented aerosol-species/particle characterization overlap; exclude N2O from NOx and require evidence for its NO2-equivalent basis. | `us-epa-ap42-refining-2015` |
| `validate_pending` | unresolved links | A missing reference-product identity, reference property/unit-group support, unspecified steam quantity basis or unsupported pollutant aggregate prevents a complete ready-to-use data package. Preserve precise names and actual quantities while resolving gaps; no zero or proxy silently replaces them. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after complete data-package validation and declared use. |
| downstream_use | Supply of the declared bulk solvent to a separately modelled formulation or industrial use. |
| allowed_use | One compatible physical solvent grade, route and supplier quantity basis with disclosed allocation and complete linked upstream/service records. |
| excluded_use | White mineral oil, generic hydrocarbon mixtures, extraction/synthetic routes, pure chemicals, retail packaging, use-phase emissions or comparisons of unlike grades without harmonization. |
| required_metadata | SKU; petroleum/mixture identity; feed and actual route; assays/boiling curve; bulk state and gate; provider bases; period/site; stage and internal transfer map; allocation; recovery and treatment receivers. |
| required_quality_disclosure | Measurement coverage; balanced physical ledgers; allocated burdens; uncertainty; method applicability; remaining identity/provider gaps and their use restrictions. |
| update_trigger | Change in feed/crude source, aromatic class, boiling range, treatment, catalyst, utilities, controls, receiver, allocation or provider reference basis. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `who-white-spirit-1996` | official_guidance | [WHO/IPCS EHC 187, 1996](https://www.inchem.org/documents/ehc/ehc/ehc187.htm), §§2.1.1, 3.2; §§2.1.2/5.3.1 as mixture-context qualifications | Historical identity and route distinctions only; no historical assay, density, recipe, factors or survey default. |
| `shell-sbp-40-65-tds` | handbook | [Shell SBP 40/65 Technical Datasheet](https://www.shell.com/content/dam/shell/assets/en/business-functions/chemical/documents/Shell%20TDS-SBP%2040%2065.pdf), pp.1–3 | Specific hydrogenated-feedstock mixture example and grade/contract qualification; no typical assay, density, flash point, dose or yield default. |
| `shell-sbp-140-165-tds` | handbook | [Shell SBP 140/165 Technical Datasheet](https://www.shell.com/content/dam/shell/assets/en/business-functions/chemical/documents/Shell%20TDS-SBP%20140%20165.pdf), pp.1–3 | Specific SBP example distinguishes SBP from white-spirit flash-point condition; no universal grade or quantitative default. |
| `shell-sbp-product` | handbook | [Shell Chemicals, Special boiling point solvents](https://www.shell.com/business-customers/chemicals/our-products/solvents-hydrocarbon/special-boiling-point-solvents.html), product description and sales-contract qualification; page updated 20 January 2026 | Producer evidence for a deeply hydrogenated SBP mixture range, limited to that range; individual pure-solvent listings do not broaden this scope. No quantitative performance default. |
| `eu-refinery-bref-2015` | official_guidance | [JRC Refining of Mineral Oil and Gas BREF, 2015](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf), §§2.13 (PDF 112–115), 2.21 (PDF 141–142), 2.25 (PDF 149), spent catalyst §3.25 (PDF 256) | Actual hydrotreatment/recycle/wash-water, catalyst and refinery transfer interfaces; storage and abatement scope. Not hydrocracking-yield or general solvent-quantity defaults. |
| `us-epa-ap42-refining-2015` | official_guidance | [US EPA AP-42 §5.1 Petroleum Refining, April 2015](https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf), §§5.1.2.4, 5.1.2.8–9, 5.1.3; PDF 7, 9, 15–17 | Utility/steam, blowdown, heaters, leaks, tanks, transfer and wastewater interfaces; historical hypothetical-refinery/factor tables excluded as defaults. Chapter 1 boiler and source-specific methods remain necessary. |
| `eu-pef-2021` | official_guidance | [Commission Recommendation (EU) 2021/2279, Annex I §4.5](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf), multifunctionality hierarchy | Allocation hierarchy and disclosed modelling choices; no PEF-compliance or published-methodology approval claim. |
