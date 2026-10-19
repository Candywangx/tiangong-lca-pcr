---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.other-kerosene
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Hydrotreated non-aviation kerosene

## 1. Scope and Applicability

This PCR covers saleable petroleum kerosene manufactured through refinery distillation and operated hydrotreating, followed by any specification blending, quality release, storage and loading at the refinery gate. The product is a kerosene-range liquid released under a declared non-aviation supply specification for burning/heating or another qualifying use. It is not defined by a new end-use label or trade grade. The supplied subset must declare actual distillation curve, sulphur, aromatics where relevant, flash point, density/reference temperature, water and sediment, composition and acceptance record. No universal recipe, yield, emission factor or numerical quality limit is prescribed. UNSD energy definitions support the kerosene/jet distinction; their historical numerical descriptors are not contemporary universal product limits (`unsd-kerosene-definitions`).

Untreated straight-run finished kerosene, stand-alone blending/distribution of already finished fuel without operated hydrotreatment, aviation-certified jet fuel, gasoline, gas oil, white spirit/special-boiling-point spirits, sulfonated kerosene, coal-tar or synthetic/biogenic kerosene routes are excluded. Straight-run kerosene is an eligible feed only if hydrotreated before release. This is a narrower subset of CPC 3.0 33349 within the petroleum-product parent scope; classification acceptance is separate. Existing jet-fuel methodology may inform shared refinery unit rules but its aviation scope and quality release cannot be silently extended. Downstream distribution and customer combustion are separate processes, never default direct emissions of this manufacturing site.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.other-kerosene |
| classification_refs | CPC 3.0: 33349 Other kerosene; narrower manufacturing/quality subset, proposed only |
| covered_products | Petroleum kerosene-range liquid, distilled and hydrotreated, released to a declared non-aviation specification |
| excluded_products | Untreated finished kerosene; jet fuel; gas oil; naphtha; white spirit/SBP; sulfonated kerosene; synthesis/biogenic routes; stand-alone terminal blending |
| representative_product | An accepted homogeneous hydrotreated non-aviation kerosene batch, bulk liquid at the refinery dispatch gate |
| production_route | Crude/feed receipt; desalting and distillation; kerosene hydrotreating; conditional blending; quality release; storage/loading; operated utilities and abatement |
| market_state | Bulk liquid before downstream transport/use; batch and supply-quality subset declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of accepted hydrotreated non-aviation kerosene at the refinery dispatch gate |
| How much | 1 kg net accepted kerosene |
| How well | Actual declared non-aviation supply specification and batch acceptance; grade and use do not alone establish identity |
| How long or cycle | One declared production period or batch; no combustion service or duration is implied |
| reference_flow_link | reference_product_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Kerosene `4489ad5c-84f0-440f-9e21-82e4e109495f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Crude/feed origin; actual distillation and hydrotreatment; batch/SKU; non-aviation specification; quality test results; petroleum composition; density and temperature; reporting period/geography; gate; co-product slate; allocation; utility/provider bases |

Declare every required qualifier in the foreground package. Batch/SKU, quantities and quality observations are future collection requirements, not invented site facts. Flow identity is not a background process, a quantity default or evidence that a supplier basis is compatible. The selected reference represents refinery distillation and hydrotreating; it cannot identify an untreated preceding distillate. Kerosene is a variable petroleum mixture: a same-name record carrying a single molecular formula cannot provide its composition, molecular weight, elemental fractions or heating value. Aviation-only/Jet A identities cannot be renamed for this reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference_product_output | Mass | kg | Use net mass of the actually dispatched and accepted finished kerosene mixture, including its measured retained water and incorporated additives, excluding container tare and separately removed water/sediment or rejected material. No universal water, additive or hydrocarbon proportion is prescribed. Convert a custody volume only with the matching whole-batch density at the same temperature and documented volume correction. |
| gas_volume | natural_gas_input | Volume | m3 | Retain the declared Volume/m3 collection basis. Match meter and provider temperature, absolute pressure, wet/dry composition and compressibility; record gauge-to-absolute pressure conversion where applicable. A gas-volume unit alone defines no normal/standard reference conditions, purity or density. Identity ambiguity and incompatible background quantity bases remain pending. |
| electrical_energy | electricity_input | Net calorific value | MJ | Preserve the verified flow-property label; use metered electrical energy, with 1 kWh = 3.6 MJ from the verified energy unit group. This is a unit conversion, not fuel heating value. |
| steam_basis | steam_input, steam_export | Mass | kg | Collect actual steam mass, absolute/gauge pressure distinction, temperature, dryness, inlet/return states and enthalpy on one documented datum. Reconcile delivered enthalpy, actual condensate/steam returns and losses to net delivered energy in MJ. Preserve a selected record's native mass or energy property; kg and MJ are not interchangeable without this state-dependent bridge. Do not choose a pressure-specific identity from its short name or infer usable heat from MJ alone; never count one supply again as both physical steam and purchased heat burden. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crude petroleum and actual unfinished refinery feed received by the operated refinery; purchased inputs carry upstream datasets |
| starting_condition_role | Foreground manufacturing supply boundary |
| product_classification_scope | Hydrotreated non-aviation petroleum kerosene, proposed narrower subset of CPC 3.0 33349, not every kerosene route |
| recursive_input_rule | Already finished kerosene received for commingling/rework remains a product input with its original upstream burden; identify its actual prior treatment and any genuinely operated additional treatment separately. Never relabel a hydrotreated finished input as untreated distillate, hide repeated treatment, or reattribute its completed upstream manufacture. Stand-alone finishing of purchased finished fuel is outside this PCR |
| upstream_dataset_requirement | Link actual crude/feed, hydrogen, grid electricity, natural gas, steam, water, chemicals and waste-treatment providers; match technology, geography, period and quantity basis |
| disclosure | Retain a full unallocated site/unit physical ledger and a separate allocated environmental-burden ledger; record all internal paired transfers and receiving boundaries |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | kerosene_manufacture | Include all operated contributing separation, hydrotreatment, finishing, tank/loading, hydrogen/utility and abatement operations. The declared refinery boundary retains its actual co-product slate. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| boundary_internal | internal interfaces | Aggregate this foreground as one manufacturing unit; retain stage-specific metering and internal source/destination links with equal quantities. Internal kerosene transfers are not additional finished outputs. | `eu-jrc-ref-bref-2015` |
| boundary_use | downstream use | Exclude customer combustion, distribution after the declared gate and user storage. Model actual site combustion/flaring only; any extension is a separate downstream process. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| boundary_completeness | actual site exchanges | Inventory cards are atomic templates, not a universal plant recipe. Include only applicable rows with supporting records and extend with one row per other actual feed, additive, fuel, co-product, waste or emitted species. Missing observations are unknown, not zero; no unlisted stream may be silently cut off. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| kerosene_manufacture | Integrated distillation, hydrotreatment, finishing and refinery dispatch | required | Distillation and kerosene hydrotreatment are operated within the declared refinery boundary | One aggregated foreground unit with stage-level metering, actual utilities and environmental controls | per 1 kg reference flow |

Retain the physical sequence: crude/feed receipt → desalting/fractionation → kerosene hydrotreatment → conditional component blending → quality release → tank/loading. Keep sour gas → amine/Claus/flare, sour water → stripping/reuse/treatment, hydrogen recycle, refinery gas fuel, condensate, heat and electricity links at both ends. Identify whole carrier quantities and their contained species separately. Shared-unit co-products remain in the physical graph even when their environmental burdens are subsequently allocated.

The full physical ledger includes actual combustion/process air, whole flue/vent gases, purge and recycle gases, oil/water phases, chemical solutions, sludges, stock changes and losses. Assign each stream one measured boundary and source/receiver; add one atomic exchange for every other actual external material or release. Species within a whole carrier are composition entries, not additional total mass. Internally generated acid gas, stripped water, recovered oil, hydrogen and heat keep paired links and are not purchased inputs or direct environmental releases. Retained product water/additives stay in the accepted mixture mass; separated water, off-spec product and rework stay in their own ledgers.

Bulk dispatch does not imply zero container or maintenance burdens. Document actual chemical/feed containers, loading equipment, seals, lubricants, cleaning materials, replacement parts, cleaning utilities and residues. The conditional steel-drum cards below illustrate one specific container only; no capacity, SKU, quantity, service life or mandatory packaging recipe is assumed. Extend every other actual material separately. Retain empty-container return/reuse, repair, washing, contamination, loss, retirement and inventory movements; allocate reusable-container manufacture and maintenance using documented actual service/use records in the burden ledger. Return mass is a physical transfer, not an automatic environmental credit.

### Process: Integrated kerosene manufacture (`kerosene_manufacture`)

#### Inputs

##### Product flows

###### Crude oil (`crude_input`)

Crude petroleum supplied to the operated refinery. Measure net oil mass separately from free water and sediment; disclose crude assay and supplier. The database nominal calorific-value qualifier is not a site default; verify provider compatibility independently.

- Selected flow: Crude oil `e8186909-07ca-41ef-9f5f-0ba05982720a`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Untreated straight-run kerosene cut (`straight_run_component`)

Purchased untreated straight-run kerosene cut, only when subsequently hydrotreated inside this foreground. Declare distillation range and contaminants; do not identify this untreated input with the finished hydrotreated reference flow.

- Selected flow: Untreated straight-run kerosene cut
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Hydrogen make-up gas mixture (`hydrogen_input`)

This exchange measures the whole actual hydrogen make-up gas mixture entering operated hydrotreatment; record whole-gas mass and composition, H2 fraction/purity, source route, pressure, temperature, wet/dry meter basis and net make-up separately from recycle hydrogen. A pure-H2 quantity and whole hydrogen-rich gas quantity are separate bases; reconcile impurities and purge without counting the same gas twice. No default purity or pressure is assumed. Coal-to-methanol/ethylene hydrogen is not a generic refinery hydrogen identity. On-site hydrogen manufacture requires its actual atomic feeds, products and emissions in the site ledger.

- Selected flow: Hydrogen make-up gas mixture
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Alternating current (`electricity_input`)

Purchased alternating current, conditional on the verified CN, 1–35 kV customer-side grid-average supply interface. Record voltage, geography, period and provider losses; use a separately verified flow for other voltages or generation routes. Internal generation is balanced separately.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Purchased process steam (`steam_input`)

Purchased process steam at the actual pressure and temperature, including steam used for stripping. Collect mass, pressure, temperature, dryness, inlet enthalpy and condensate/return state. Neither a mass nor an MJ property alone establishes net delivered heat; the provider basis must match the measured enthalpy balance.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Pipeline natural-gas mixture (`natural_gas_input`)

Actual pipeline natural-gas mixture for operated furnaces, boilers or hydrogen production, when used. The collection basis is Volume/m3, with measured composition, moisture, temperature, absolute pressure, compressibility and supplier volume conditions; purity, standard conditions and energy content are not defaults. Reconcile whole-gas mass and carbon from actual composition/density. A methane CAS or high-pressure CH4 synonym cannot establish the identity of this variable gas mixture. An unresolved identity must not inherit another record's secondary mass/energy factors as measured density or heating value.

- Selected flow: Pipeline natural-gas mixture
- Flow property / unit: Volume / m3
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Process water (`process_water_input`)

Purchased process water used as reaction/solution or wash medium; distinguish supplied water from direct abstraction, other actual water grades, and internally recovered condensate or stripped sour water. Record quality and mass, with measured density for volume conversion. This identity is not a default for all cooling, drinking or demineralised water.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Sodium hydroxide (`caustic_input`)

Solid industrial sodium hydroxide only for actual caustic preparation or pH control, matching the record’s 95–98% supplied grade. Collect assay and as-delivered mass; an aqueous caustic purchase requires its own concentration-specific atomic flow, not this solid identity.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### N-methyldiethanolamine (`amine_input`)

N-methyldiethanolamine supplied for actual acid-gas scrubbing, only if that solvent is used. Record formulation, active fraction and make-up; another amine or formulated solvent requires a separate atomic row.

- Selected flow: N-methyldiethanolamine
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Cobalt–molybdenum on alumina hydrotreating catalyst (`catalyst_input`)

Fresh cobalt–molybdenum hydrotreating catalyst on alumina, conditional on actual catalyst identity. Record grade, support, metal loading, sulfiding state, change-out dates and campaign throughput; do not model the full catalyst as pure cobalt or molybdenum.

- Selected flow: Cobalt–molybdenum on alumina hydrotreating catalyst
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Nitrogen (`nitrogen_input`)

Air-separation gaseous nitrogen make-up for actual purging or tank inerting. Verify supplier purity, gas/liquid state and mass basis; do not transplant bottled-beverage inerting or liquid-nitrogen datasets.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### ferric chloride (`ferric_chloride_input`)

Anhydrous ferric chloride supplied for actual wastewater coagulation. Measure solid supplied mass and assay; aqueous or hydrated grades require their own flow and documented concentration conversion.

- Selected flow: ferric chloride `d29463c7-fbbf-4811-b122-a651f205d603`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Reusable steel chemical drum (`drum_input`)

One reusable steel drum entering the boundary only if actually used for feed or chemical supply. Record its own tare mass, material/coating, identifier, condition, ownership, opening/closing stock, actual service records, washing and repair. Contents are separate exchanges; no assumed drum capacity, weight or lifetime. This conditional card does not convert bulk kerosene dispatch into a packaged-product scope.

- Selected flow: Reusable steel chemical drum
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_containers`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

##### Waste flows

##### Elementary flows

###### river water (`river_water_input`)

Direct river-water abstraction, only when physically performed by the foreground site. Record catchment/location, volume and return destination; purchased water must not also be counted as foreground abstraction.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

#### Outputs

##### Product flows

###### Kerosene (`reference_product_output`)

Net accepted non-aviation kerosene mixture dispatched after refinery distillation, hydrotreating and specification finishing, including actual retained water and incorporated additives. Reconcile dispatch meter, batch certificate, tank inventory, samples, recirculation, off-spec rework and loss; this is the sole reference-product output.

- Selected flow: Kerosene `4489ad5c-84f0-440f-9e21-82e4e109495f`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: `cp_reference`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### naphtha (`naphtha_output`)

Saleable naphtha co-product leaving the same declared refinery boundary. Retain its full physical mass, grade and destination; internal reformer or blending transfers remain internal links.

- Selected flow: naphtha `4f19ca0d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Gasoline (`gasoline_output`)

Saleable gasoline co-product; record actual octane, specification and component slate. Keep physical output before environmental-burden allocation, without assuming a default gasoline formulation.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Kerosene-type jet fuel (`jet_fuel_output`)

Aviation-specification-certified kerosene-type jet fuel produced alongside the reference product. Keep its separate certified batch mass; its stricter aviation product quality is not inferred for the non-aviation kerosene.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Diesel fuel (`gas_oil_output`)

Saleable diesel/gas-oil co-product with actual specification, sulphur, density and treatment declared. Hydrotreated kerosene blended into diesel is assigned to this finished physical output, not also to dispatched kerosene.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Separated propane (`propane_output`)

Separated propane co-product only when separately sold; record purity, liquefied/gas state and custody quantity. Do not split a sold mixed LPG batch into fictitious pure propane and butane outputs.

- Selected flow: Separated propane
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Butane (`butane_output`)

Separated n-butane co-product only when sold separately and consistent with CAS 106-97-8. Confirm purity, isomer composition and state; mixed butanes or isobutane require their own identity. Butane internally dosed to gasoline is an internal transfer; exclude quantities already counted in mixed LPG.

- Selected flow: Butane `e02e31b8-818f-44b7-af25-f32f1e923965`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Treated refinery fuel-gas mixture (`refinery_gas_output`)

Exported treated refinery fuel-gas mixture, only when crossing the site boundary. Record species composition, sulphur, pressure and energy basis. Gas burned or recycled on site remains in the internal gas and carbon/sulphur ledgers, not an exported co-product.

- Selected flow: Treated refinery fuel-gas mixture
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Residual heavy fuel oil (`residual_fuel_output`)

Saleable residual heavy fuel oil, with actual viscosity, sulphur, density and cutter-stock composition. Neither internal furnace consumption nor a polymer-chain input dataset represents this export quantity.

- Selected flow: Residual heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Recovered elemental sulphur, crude (`sulfur_output`)

Crude elemental sulphur recovered from the refinery Claus sulphur recovery unit and sold. Record moisture, hydrocarbon contamination, purity and physical output; converted H2S is an internal transfer, not an additional direct sulphur emission.

- Selected flow: Recovered elemental sulphur, crude `93f4a22b-b419-48ec-8068-ededf8684dfc`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Green petroleum coke (`coke_output`)

Green petroleum coke co-product only if an operated refinery coker belongs to the shared boundary. Declare green/calcined state, sulphur, metals, moisture and receiver; coal coke, calcined coke and Bayer-process records are not substitutes.

- Selected flow: Green petroleum coke
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Unmodified petroleum bitumen (`bitumen_output`)

Unmodified refinery petroleum bitumen sold as such, conditional on actual production. Record grade and state; preserve product identity separately from road-aggregate asphalt mixtures or natural asphalt.

- Selected flow: Unmodified petroleum bitumen
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Exported process steam (`steam_export`)

Exported process steam as one physical utility co-product, only when sold across the site boundary. Collect pressure, temperature, quality, mass and return enthalpy; net exported heat and allocation are separate from physical steam quantity.

- Selected flow: Exported process steam
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Exported electricity (`electricity_export`)

Exported electricity as one utility co-product, only when sold across the site boundary. Record meter, voltage and provider interface; internal electricity consumed by the refinery is not export.

- Selected flow: Exported electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Liquefied petroleum gas (`lpg_output`)

Mixed refinery liquefied petroleum gas sold as one mixture, with propane/butane and impurity composition measured. Use this row instead of, not in addition to, pure constituent rows for the same sold batch.

- Selected flow: Saleable refinery liquefied petroleum gas mixture
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Empty reusable steel chemical drum (`drum_return`)

One empty reusable steel chemical drum returned to its actual owner/receiver for reuse. Record tare and residual contents separately, return condition, inventory and paired receipt/return identifiers. Keep cleaning and repair material/energy/wastes explicit. Return is not disposal or an automatic credit, and no same drum is counted again as retired waste.

- Selected flow: Empty reusable steel chemical drum
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_containers`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

##### Waste flows

###### refinery sludge (`oily_sludge_output`)

One outgoing oily refinery sludge stream from the declared collection point. Record wet mass, oil, water, solids, hazardous constituents and receiver; keep distinct sources as separate exchanges where treatment conditions differ. Preserve whole as-transferred wet carrier quantity and contained water, solids and species separately, on the actual receiver's acceptance basis. Do not add those components again to total mass or duplicate a stream under multiple sludge/wastewater cards; internal treatment is represented by paired links.

- Selected flow: refinery sludge `b8bb8aa8-3170-4476-b9cb-4e42642b5da0`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Spent cobalt–molybdenum/alumina hydrotreating catalyst (`spent_catalyst_output`)

Spent cobalt–molybdenum/alumina hydrotreating catalyst, separated from fresh catalyst. Record residual oil, sulphur, metals, support, wet/dry mass and regeneration/recovery receiver; do not substitute a power-plant SCR catalyst or pure nickel catalyst.

- Selected flow: Spent cobalt–molybdenum/alumina hydrotreating catalyst
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Sulphidic spent sodium-caustic liquor (`spent_caustic_output`)

One outgoing sulphidic spent sodium-caustic liquor, only when exported rather than internally regenerated. Record water, free caustic, sulphide, phenols, hydrocarbons, mass and accepted treatment route. Preserve whole as-transferred wet carrier quantity and contained water, solids and species separately, on the actual receiver's acceptance basis. Do not add those components again to total mass or duplicate a stream under multiple sludge/wastewater cards; internal treatment is represented by paired links.

- Selected flow: Sulphidic spent sodium-caustic liquor
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Untreated refinery oily/sour wastewater (`wastewater_output`)

Untreated refinery oily/sour wastewater sent to an external treatment provider. Preserve actual oil, dissolved sulphur/nitrogen, salinity and volume/mass; this technosphere transfer is not direct receiving-water discharge and not manganese-slag wash water. Preserve whole as-transferred wet carrier quantity and contained water, solids and species separately, on the actual receiver's acceptance basis. Do not add those components again to total mass or duplicate a stream under multiple sludge/wastewater cards; internal treatment is represented by paired links.

- Selected flow: Untreated refinery oily/sour wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Primary oil-separation/DAF sludge (`primary_sludge_output`)

One primary oil-separation/DAF sludge stream exported from on-site wastewater treatment, separate from tank-bottom sludge and biological sludge. Record oil, solids, water, metals and receiver. Preserve whole as-transferred wet carrier quantity and contained water, solids and species separately, on the actual receiver's acceptance basis. Do not add those components again to total mass or duplicate a stream under multiple sludge/wastewater cards; internal treatment is represented by paired links.

- Selected flow: Primary oil-separation/DAF sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Excess refinery biological sludge (`bio_sludge_output`)

One excess biological wastewater sludge stream exported after declared dewatering. Record dry solids, moisture, oil, hazardous contaminants and receiver; municipal sewage-sludge or return-activated-sludge identities do not establish this exported refinery waste. Preserve whole as-transferred wet carrier quantity and contained water, solids and species separately, on the actual receiver's acceptance basis. Do not add those components again to total mass or duplicate a stream under multiple sludge/wastewater cards; internal treatment is represented by paired links.

- Selected flow: Excess refinery biological sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Untreated refinery acid-gas mixture (`sour_gas_output`)

One whole untreated refinery acid-gas mixture transferred to an external treatment/SRU receiver only when crossing the declared boundary. Collect whole-gas mass, H2S/CO2/NH3/hydrocarbon/water composition, pressure, temperature and accepted receiving process. H2S component mass alone is not the whole mixture. Inside-boundary amine/SRU/flare links remain paired internal transfers; only measured residual species reaching air belong to elementary emissions. Do not copy pure-H2S, H2S-in-SRU-feed or water-treatment-chemical identity onto the whole exported waste.

- Selected flow: Untreated refinery acid-gas mixture
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Retired contaminated steel chemical drum (`drum_waste`)

One retired contaminated steel chemical drum transferred as waste to an actual licensed receiver, conditional on actual retirement. Record steel/coating tare, residual chemicals/water, wet shipped mass, hazard classification and recovery/disposal acceptance. Distinguish recyclable clean steel, reusable returns and separately removed contents; none is a default treatment route or a duplicate mass.

- Selected flow: Retired contaminated steel chemical drum
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_containers`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_air`)

Actual fossil carbon dioxide released to outdoor air from operated process/utility combustion, flaring and process vents. Reconcile with fossil carbon in feeds, products and wastes; do not burn the entire sold kerosene in the production inventory.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### methane (fossil) (`methane_air`)

Actual fossil methane reaching outdoor air from leaks, tanks, wastewater or incomplete combustion. Use methane-specific measurements/composition; do not equate total hydrocarbons or all vented gas with methane.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Nitrogen oxides as NO and NO2 aggregate (`nox_air`)

Actual NO and NO2 aggregate reported as NOx, excluding N2O. A kg reference does not prove NO2-equivalent mass: confirm monitoring, selected flow and LCIA quantity definitions before linking an UUID. Use separate NO/NO2 exchanges instead when species-resolved; never count both representations.

- Selected flow: Nitrogen oxides as NO and NO2 aggregate
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### sulfur dioxide (`so2_air`)

Measured sulphur dioxide reaching outdoor air after operated furnace, flare or sulphur-recovery controls. Quantity is SO2 mass, not elemental-S mass or undifferentiated SOx. Retain other actual sulphur species as separate atomic exchanges.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### carbon monoxide (fossil) (`co_air`)

Actual fossil carbon monoxide released to outdoor air after combustion/control. Record species mass and distinguish it from CO2 and bulk carbon; reconcile carbon conservation without creating a default combustion factor.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### nitrous oxide (`n2o_air`)

Actual nitrous oxide released to outdoor air where supported by monitoring or an applicable source-specific estimation method. Keep separate from NOx and record missing measurement as unknown, not automatic zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### hydrogen sulfide (`h2s_air`)

Hydrogen sulphide actually released to outdoor air after controls. Sour gas transferred to amine/SRU/flare inside the refinery is an internal link; only residual release is an elementary exchange.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### benzene (`benzene_air`)

Actual benzene released to outdoor air from storage, loading, equipment leakage or wastewater. Measure whole kerosene-vapour loss and its actual vapour composition separately from benzene or other VOC species; liquid-batch composition does not automatically describe evaporated vapour. Whole vapour mass is not benzene mass. Reconcile species with whole hydrocarbon/carrier totals; represent other actual species in separate atomic rows and keep uncharacterised remainder explicit. No duplicate species burden inside a total-VOC exchange.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### particles (PM2.5) (`pm25_air`)

Outdoor particulate emission in the PM2.5 size class after capture; include actual utility/catalyst/coke sources within the boundary. Captured solids are wastes, not air emissions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### particles (PM2.5 - PM10) (`pm_coarse_air`)

Outdoor particulate emission strictly in the PM2.5–PM10 interval. Derive only from compatible simultaneous size measurements; do not add cumulative PM10 to PM2.5.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### particles (> PM10) (`pm_large_air`)

Outdoor particles larger than PM10 where actual emissions and size evidence exist. Retain independently of smaller size intervals; missing size data requires review rather than an invented residual.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### Water (`effluent_water`)

Actual liquid water component discharged directly to fresh water after on-site treatment, on the verified Volume/m3 basis. Retain the whole effluent carrier volume/mass, measured water fraction/density and contained pollutants separately; whole effluent volume is not automatically pure-water volume. Species releases are contained in that carrier and are not additional whole-stream mass. Sewered wastewater is a technosphere transfer; sea-water discharge requires a different verified elementary flow.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### benzene (`benzene_water`)

Benzene actually discharged to fresh water, as species mass. Use matched flow and concentration intervals at the final outfall; pre-treatment concentrations do not describe final discharge.

- Selected flow: benzene `08a91e70-3ddc-11dd-9207-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### phenol (`phenol_water`)

Phenol actually discharged to fresh water, specifically CAS 108-95-2. A total-phenols assay does not prove pure-phenol mass; speciate or leave the quantity-definition gap unresolved.

- Selected flow: phenol `08a91e70-3ddc-11dd-975b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### sulfide (`sulfide_water`)

Sulfide ion actually discharged to fresh water. Confirm assay basis and speciation; a result reported as total sulphur or dissolved H2S cannot be copied as sulfide-ion mass.

- Selected flow: sulfide `4d9a8790-3ddd-11dd-9066-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### ammonium (`ammonium_water`)

Ammonium ion actually discharged to fresh water. Convert an assay expressed as nitrogen only with a documented molecular-mass relation and compatible speciation; do not duplicate total nitrogen.

- Selected flow: ammonium `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### nitrate (`nitrate_water`)

Nitrate ion actually discharged to fresh water when present in treated wastewater. Declare ion versus nitrate-nitrogen basis and use documented conversion; do not infer nitrate from total nitrogen.

- Selected flow: nitrate `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### phosphate (`phosphate_water`)

Phosphate ion actually discharged to fresh water when present. Declare orthophosphate speciation and ion versus P basis; total phosphorus cannot be assigned wholesale to this species.

- Selected flow: phosphate `08a91e70-3ddc-11dd-9787-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### ammonia (`ammonia_air`)

Actual ammonia reaching outdoor air from sour-water handling or other operated sources. Record NH3 mass, not ammoniacal nitrogen mass; internally recovered ammonia is a product transfer.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### carbon dioxide (biogenic) (`co2_bio`)

Biogenic carbon dioxide released to outdoor air only where actual utility fuel or wastewater carbon contains biogenic carbon. Require separately identified actual biogenic-carbon-bearing source inputs and source-fraction evidence. Require an atomic biogenic fuel input only when actual fuel is the carbon source; for wastewater-origin carbon, trace the actual incoming wastewater feed and its carbon-bearing sources through the physical ledger and paired internal links, without inventing a fuel input or assuming a biogenic fraction. Retain this LCI exchange even if a GHG indicator reports it separately.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

###### water vapour (`vapor_air`)

Actual water vapour from cooling, process steam losses and operated combustion released to outdoor air. Reconcile evaporation with water ingress, condensate return, effluent and inventory change; growing-plant evapotranspiration is not this flow.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured applicable physical exchange divided by net accepted reference-product mass for the same period; retain the full unallocated quantity in the source ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared units | Avoid allocation where feasible by subdivision with actual unit meters and causally attributable operations. System expansion may be used only with explicit equivalent function, substitution evidence and separate sensitivity; it is not an automatic credit. | `eu-jrc-ref-bref-2015` |
| allocation_burdens | shared environmental burdens | For remaining shared burdens, justify a physical relationship for the actual unit and output slate. Mass or energy shares are not automatically causal. If no defensible physical relationship exists, disclose economic allocation with matched period, prices, currency, output states and sensitivity. Retain factors and source workbooks, and verify factor sum equals 1. Container manufacture, actual repeated use, washing, repair, loss and end-of-life are assigned separately from the full physical container return ledger; no default reuse count or substitution credit. | `eu-jrc-ref-bref-2015` |
| allocation_physical | all physical exchanges | Maintain full measured gas/liquid/solid products and mass/water/carbon/sulphur/energy balances before allocation. Apply allocation only to attributable environmental burdens in a separate ledger; do not mechanically multiply physical co-product outputs or internal paired flows by allocation shares. Do not delete co-products to make a reference-output check pass. | `eu-jrc-ref-bref-2015` |

The allocation hierarchy and audit safeguards above are this PCR’s declared modelling rules, informed by the BREF’s actual multifunctional refinery structure; the BREF is not represented as prescribing a numerical allocation formula.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | kerosene_manufacture | reference product | quality/dispatch/tank records | batch; SKU; specification; distillation curve; sulphur; aromatics; flash point; actual retained water/additives; separated water/sediment; density; temperature; accepted whole-mixture net dispatched mass; tank change; rework; rejected material | Use calibrated custody mass metering or traceable volume and same-batch density/temperature correction; reconcile release certificate, tank change, rework and loss; normalization operation: net accepted reference mass; per 1 kg reference flow | kg | each batch and dispatch | all accepted production | full declared dispatch boundary | per 1 kg reference flow | meter calibration; density test; certificate; reconciliation |
| cp_inputs | kerosene_manufacture | purchased materials/utilities | meter and supplier records | flow; supplier; batch/SKU; route; grade; composition/purity; concentration; state; amount; unit; pressure absolute/gauge; temperature; wet/dry; compressibility; density; enthalpy datum; condensate; provider reference basis; containers/maintenance materials | Meter actual receipts and stock change; retain invoices and supplier reference definitions; verify each conversion and exclude internally recycled amounts; normalization operation: physical input totals divided by accepted reference mass; per 1 kg reference flow | row unit | each receipt; continuous utilities | same production period | all contributing refinery stages | per 1 kg reference flow | calibration; supplier declarations; composition tests; provider checks |
| cp_products | kerosene_manufacture | co-products | unit/tank/dispatch ledgers | output; grade; phase; mass; density; water; C; S; energy; destination; internal transfer; stock change | Meter each actual co-product separately before allocation; reconcile internal transfer endpoints and sold batches; prevent LPG/constituent overlap; normalization operation: physical output totals divided by accepted reference mass; per 1 kg reference flow | row unit | each batch and continuous unit totals | same production period | full shared gas/liquid/solid slate and utility exports | per 1 kg reference flow | output certificates; meter calibration; paired-flow reconciliation |
| cp_wastes | kerosene_manufacture | outgoing wastes | weighbridge and receiver records | stream; source; mass; volume; moisture; dry solids; oil; metals; S; N; hazardous constituents; receiver; route | Weigh or meter each exported stream and sample composition; distinguish primary sludge, biological sludge, catalyst and spent liquor; record actual treatment acceptance; normalization operation: physical waste totals divided by accepted reference mass; per 1 kg reference flow | row unit | each shipment and representative composite sampling | same production period including catalyst campaigns | all outgoing site waste boundaries | per 1 kg reference flow | receiver acceptance; manifests; weighing; lab results |
| cp_air | kerosene_manufacture | direct air emissions | monitoring and control records | source; species; origin; concentration; whole carrier/kerosene-vapour mass and vapour composition; gas flow; time; T; P; oxygen; wet/dry; capture; flare events; size class; detection limit; method | Use actual stack/vent monitoring or justified source-specific calculations and leak/tank measurements; match gas and concentration bases; retain raw and post-control values, including abnormal operation; normalization operation: species release totals divided by accepted reference mass; per 1 kg reference flow | kg | continuous where available; representative runs and all events | same production period | actual operated utility/process/tank/wastewater/flare sources | per 1 kg reference flow | monitoring method; calibration; detection limits; carbon/sulphur checks |
| cp_water | kerosene_manufacture | water/resource exchanges | water meters and laboratory records | abstraction; outfall; actual receiving medium/receiver; location; whole effluent carrier volume/mass; water fraction; density; time; species; concentration; ion/element basis; temperature; reuse; evaporation; inventory change | Meter abstraction and final outfall separately; use time-matched flow-weighted species sampling, declare freshwater/sea/sewer receiving boundary and record actual water reuse; normalization operation: water/species totals divided by accepted reference mass; per 1 kg reference flow | m3; kg | continuous volume; matched composite sampling | same production period | direct resource and environmental boundaries | per 1 kg reference flow | meter calibration; lab speciation; water reconciliation |
| cp_balances | kerosene_manufacture | physical and burden reconciliation | unit balance and allocation workbook | unit; whole feed/carriers/combustion air; gas/liquid/solid output; internal endpoints; water; C fossil/bio; H; O; S; N; other relevant elements; reaction species changes; heat/enthalpy datum; electricity; returns; losses; inventories; containers/maintenance; error; allocation driver; prices; factors | Retain the complete physical process map and unallocated ledgers; reconcile each conserved component with measured composition and inventories; calculate burden allocation separately; normalization operation: retain unallocated balances and allocated burdens; per 1 kg reference flow | kg; m3; MJ; dimensionless | each period and route/grade change | same production period | all shared contributing units and their receiving systems | per 1 kg reference flow | balance residual explanation; factor-sum check; workbook reproduction |
| cp_containers | kerosene_manufacture | container movements/maintenance | custody and maintenance ledger | material; container id; actual SKU; tare; contents; owner; receiver; stock; receipt; return; reuse; repair; cleaning materials/energy/water; residues; loss; retirement; actual services | Weigh container and contents separately and reconcile paired returns and stock; add each actual cleaning/repair material, utility and waste as an atomic row; normalization operation: physical exchange totals divided by accepted reference mass; per 1 kg reference flow | kg; row unit | each movement and service | same production period with documented reuse history | actual feed/chemical containers and receiving systems | per 1 kg reference flow | weighing; custody; service logs; receiver acceptance; separate burden ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all physical inventory rows | For the same period define R as net accepted kerosene mass in kg. Physical normalized exchange = measured exchange total / R; R must be positive. Keep co-products unallocated. | cp_reference; cp_inputs; cp_products; cp_wastes; cp_containers | physical exchange per 1 kg reference flow | `eu-jrc-ref-bref-2015` |
| species_release | air and water species | Integrate matched concentration × carrier flow × duration over measured intervals after controls; convert units explicitly, or use measured species mass directly. Ion/element and NOx definitions must match; no default factor. | cp_air; cp_water | species totals for period_normalization | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| physical_balance | shared physical process map | For each unit, total mass and each conserved element: inputs = outputs + inventory change + explained residual. Include actual whole carriers and combustion/process air; reconcile C fossil/biogenic, H, O, S, N and other relevant elements from actual composition. Reactions redistribute species but are never an extra source/sink of total mass or elements. Water-species generation/consumption may be recorded only through documented reaction stoichiometry consistent with H/O conservation; track all liquid, vapour, product-bound, solution/sludge and return water. Reconcile energy on a declared enthalpy/heating-value datum, including chemical/thermal/electrical inputs, actual exports, returns, losses and inventory; avoid adding reaction heat again when included in the selected energy convention. Internal transfers cancel only in aggregation and retain both endpoints. | cp_balances | unallocated physical balance and unexplained gap register | `eu-jrc-ref-bref-2015` |
| burden_allocation | remaining shared environmental burdens | Product burden = dedicated attributable burden + sum of each shared burden × its justified product factor. Reconcile factor sum to 1 per shared burden; keep physical flows unchanged and divide the product burden by R. | cp_balances; cp_reference | separate allocated product environmental-burden ledger | `eu-jrc-ref-bref-2015` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | reference product | Verify the exact distillation/hydrotreatment route and non-aviation supply subset; no aviation/specification or untreated route substitution. | route diagram; batch certificate; actual quality tests |
| dq_quantity | all exchanges | Separate flow identity from provider/reference-basis compatibility. Unknown pressure, composition, concentration, receiving medium or NOx definition remains pending and blocks a claim of complete dataset linkage. | original flow metadata; supplier documentation; raw meters and lab results |
| dq_coverage | site ledger | Cover normal, start-up, shutdown, abnormal, flare, catalyst-change and waste-treatment activity for the declared period; disclose missing data, uncertainty and detection-limit treatment. | operations log; monitoring coverage; receiver records |
| dq_balance | co-products and internal transfers | Retain every actual co-product and paired internal transfer before burden allocation; explain mass/water/C/S/energy residuals. | full physical graph; unallocated balances; separate burden workbook |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | Reject an untreated, aviation-certified, sulfonated, synthetic/biogenic or other excluded product offered under the generic kerosene name; require the declared release quality and route. | `unsd-kerosene-definitions`; `eu-jrc-ref-bref-2015` |
| validate_reference | all outputs | Require exactly one finished reference-product output and 1 kg net accepted basis. Preserve co-products and combine physically identical kerosene inter-stage transfers inside the aggregated unit; never fabricate an extra UUID or hide an identity to pass checking. | `eu-jrc-ref-bref-2015` |
| validate_balances | physical and allocated ledgers | Require physical co-product quality/quantity, whole-carrier/species non-overlap, complete paired transfers, container/maintenance/return/inventory coverage, total mass/water/element/energy checks and a separately reproducible allocation ledger. Chemical reaction is never an extra total-mass or elemental source/sink. Absence is incomplete evidence, not proof of zero. | `eu-jrc-ref-bref-2015` |
| validate_emissions | direct releases | Require correct species, origin and receiving compartment; exclude customer combustion from site emissions. Keep N2O separate from NOx, PM size classes disjoint, captured dust separate, VOC totals non-duplicated and biogenic CO2 visible where applicable. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| validate_providers | upstream linkage | A verified UUID alone is insufficient. Unresolved identity or supplier steam/gas/electricity/concentration basis must be disclosed and prevents calling that exchange fully linked; no incompatible nearby identity or correction flow substitution. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unallocated multi-output foreground refinery manufacturing dataset with one kerosene reference output and a separate product-specific allocated burden ledger |
| downstream_use | secondary_dataset; background_dataset only after complete actual provider linkage and disclosed allocation |
| allowed_use | Declared refinery-gate kerosene supply; cradle-to-gate models with upstream links; downstream use models adding distribution/combustion separately |
| excluded_use | Generic all-route/all-grade kerosene factors; fuel combustion service; aviation qualification; unverified terminal manufacture |
| required_metadata | Batch/specification/quality; actual route; geography/period; gate; composition; atomic flows/providers; co-products; balances; allocation hierarchy and drivers |
| required_quality_disclosure | Unresolved identities and quantity bases; missing coverage; uncertainty; historical/external factors and their actual scope; separately reported allocation sensitivity |
| update_trigger | Material change in crude/feed, quality subset, hydrotreatment, blend slate, utilities, control, provider, gate, co-products, allocation or monitoring |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-jrc-ref-bref-2015` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Refining of Mineral Oil and Gas (2015), https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf | Sections 1.4.1–1.4.3 (printed 29–33/PDF 63–67), 2.13 (78–86/PDF 112–120), 2.19 (101–102/PDF 135–136), 2.21 (107–108/PDF 141–142), 2.25 (115/PDF 149), 4.24.1–4.24.2 (540–542/PDF 574–576): actual refinery process interfaces, co-products, utilities, air/water/waste coverage; no universal historical quantity reuse |
| `us-epa-ap42-5-1-2015` | official_guidance | U.S. EPA, AP-42 Section 5.1 Petroleum Refining (April 2015), https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf | 5.1.1, printed 5.1-1 and 5.1-3/PDF 1 and 3: refinery manufacture, separation/treating/handling and auxiliary boundaries. Emission factors are not adopted; apply only actual source-specific methods if separately verified |
| `unsd-kerosene-definitions` | official_guidance | UNSD Energy Yearbook Definitions, Kerosene and kerosene-type jet fuel, https://unstats.un.org/unsd/energy/yearbook/def_english_print.htm | Qualitative petroleum kerosene versus aviation fuel distinction only; historical numeric descriptors are not a contemporary universal supply specification |
