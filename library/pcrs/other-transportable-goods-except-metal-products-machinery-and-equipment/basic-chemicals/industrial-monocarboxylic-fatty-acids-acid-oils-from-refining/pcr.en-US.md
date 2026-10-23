---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.industrial-monocarboxylic-fatty-acids-acid-oils-from-refining
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Distilled mixed fatty acids from coconut-oil hydrolysis

## 1. Scope and Applicability

This method covers a real industrial product route: refined coconut triglyceride oil, catalyst-free water hydrolysis, sweet-water separation, crude-acid flashing/dehydration, vacuum distillation, storage and bulk loading of a nonhydrogenated free-fatty-acid mixture. It covers a declared coconut-oil grade and measured composition, not a default chain length. IFC Annex A and Desmet identify the hydrolysis/distillation route; the producer PALMERA page distinguishes distilled coconut grades from fractionated acids. These originals establish a possible physical route and marketed product family, not an audited recipe for a named producer. (`ifc-oleochemicals-2007`; `desmet-oleochemicals`; `klk-palmera-fatty-acids`)

Exclude alkaline soapstock, crude soapstock acidulation oil, palm fatty-acid deodorizer distillate, tall-oil acids, tallow/palm/palm-kernel feed routes, chemically synthesized fossil fatty acids, hydrogenated products, methyl/other esters, fatty-acid salts, solvent/crystallization fractionation, purified single acids and formulated acid solutions. Soapstock acidulation has acid, salt, gum and aqueous-phase consequences unlike triglyceride hydrolysis; distillation does not retrospectively make their feed histories interchangeable. Upstream residue handling under the degras PCR does not cover this downstream manufactured product. (`ifc-oleochemicals-2007`; `epa-soap-fat-splitting-1974`; `epo-soapstock-separation-1985`)

The base unit receives external steam and grid electricity and does not operate combustion, hydrogenation, catalyst addition, glycerine concentration/refining or retail packaging inside its gate. If those operations are present, extend the physical model with individually reviewed inputs, outputs and direct emissions before claiming conformance. Steam supplied by another on-site subsystem still requires its separately accounted upstream dataset; its fuel and emissions cannot vanish. Optional on-site wastewater and gas treatment belong inside the selected boundary. No source pressure, concentration, yield, purity, utility demand or BAT emission level is an inventory default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.industrial-monocarboxylic-fatty-acids-acid-oils-from-refining` |
| classification_refs | CPC 3.0 `34120`; proposed `narrower` scope, accepted mapping is a separate decision |
| covered_products | Nonhydrogenated distilled mixed free fatty acids made by catalyst-free hydrolysis of refined coconut oil |
| excluded_products | Acid oils, deodorizer distillates, other feedstock origins, esters/salts, hydrogenated products, purified single acids and formulated solutions |
| representative_product | One measured coconut-derived distilled-acid SKU in the producer distilled coconut product family; no universal SKU specification |
| production_route | Refined oil receipt → hydrolysis → sweet-water separation → flash/dehydration → vacuum distillation → storage → bulk loading |
| market_state | Net bulk mixture at factory gate with declared water and residual components; no added carrier solution or package in reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Industrial supply of the specified coconut-derived free-fatty-acid mixture |
| How much | 1 kg net accepted bulk mixture |
| How well | Measured lot specification: full acid composition, water, free-acid fraction, residual glycerides/unsaponifiables, acid/saponification/iodine values where specified, contaminants and acceptance |
| How long or cycle | One release at the gate; declared representative production period, no lifetime service assertion |
| reference_flow_link | mixed_acid |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fatty Acid `ac9714b9-4722-4831-b3b4-d0d5fad447ec` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual SKU; refined coconut-oil origin and supplier; biological/fossil carbon; catalyst-free hydrolysis; absence of hydrogenation/esterification; distillation cut; full composition; free-acid/water/residual fractions and test basis; net bulk acceptance; electricity voltage/mix; steam conditions and supplier basis; plant/period; co-product and waste destinations; allocation; foreground gate |

All qualifiers must be stated in the concrete dataset. The reference is a broad industrial hydrolysis fatty-acid identity at a chemical plant, covering saturated and unsaturated acids without a single-CAS, purity, hydrogenation or feedstock restriction. Its source classification is not proof of product composition. Select the coconut-derived, nonhydrogenated distilled mixture through the declared qualifiers and actual lot profile, retaining measured water, glycerides and unsaponifiables in commercial net mass. This identity does not establish a supplier dataset, pure-acid amount or universal SKU specification. The single reference output is `mixed_acid`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Reference amount is 1 kg accepted net as-delivered bulk mixture. Preserve water and residuals; exclude transport-container tare. |
| mixture_basis | all inventory rows | Row-declared property | Row-declared unit | Normalize every exchange to per 1 kg reference flow using the same period and accepted net mixed-acid denominator B. Separately preserve physical totals, including all co-product outputs. |
| solution_basis | cleaning_naoh; sweetwater | Mass | kg | Record wet supplied mass and measured solute/water fractions. Active-mass calculations are supplementary; they do not replace wet mass or add a second water input. |
| steam_basis | splitting_steam; distillation_steam | Mass | kg | Retain actual steam mass and thermodynamic state; net delivered heat requires supply/return enthalpies and a matching provider definition. MJ or GCV alone is insufficient. |
| electricity_basis | electricity | Net calorific value | MJ | The recorded property is Net calorific value; meter electricity in kWh and convert by 1 kWh = 3.6 MJ, preserving voltage and supply boundary. It is electrical energy, not a fuel heating-value estimate. |
| composition_basis | mixed_acid; oil; sweetwater | Mass | kg | Measure species distribution, glycerides, unsaponifiables and water on stated analytical bases. Acid value is not free-acid mass without measured mixture composition/molar-mass basis; GC ester derivatization does not change product into esters. No assumed chain length. |
| carrier_basis | water_fresh; water_vapour; offsite_effluent | Row-declared property | Row-declared unit | Keep whole effluent and wet-gas carrier totals in the physical ledger. Water-species quantities and pollutant/species loads are separate analytical accounts, not quantities to add again to the whole stream. Outfall volume does not by itself establish water-species volume. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_route | fatty_acid_unit | Include receipt, storage, splitting, sweet-water separation, flash/dehydration, vacuum distillation, recovery, loading, cleaning and actual on-site environmental controls. Preserve stage-specific measurements within the aggregated unit. | `ifc-oleochemicals-2007`; `desmet-oleochemicals` |
| sb_upstream | external inputs | Attach origin-, state-, technology-, geography- and quantity-compatible upstream datasets to oil, water, electricity, chemicals and steam. This gate is not a zero-burden raw-material boundary. | `eu-pef-multifunctionality-2021` |
| sb_internal | internal transfers | Retain a physical flow diagram and matched amounts at both ends of every internal transfer, including recirculated acid residue, recovered fat, water and condensate. Do not turn internal returns into external products, wastes or avoided-product credits. | `ifc-oleochemicals-2007`; `jrc-cww-bref-2016` |
| sb_environment | outfalls and vents | Use a stream register to distinguish sewer exports, direct freshwater releases, captured organics, post-control vents and sludge. Monitor normal operation, startups, shutdowns, cleaning and upset conditions; do not inventory upstream supply emissions again. | `jrc-cww-bref-2016`; `ifc-oleochemicals-2007` |
| sb_refinement | oil receipt and site operations | Prior coconut-oil refining belongs in the refined-oil upstream dataset and is not repeated inside this gate. Include any actual additional filtration, pretreatment, maintenance, cleaning or loading operation, with each real auxiliary, replacement material, lubricant, container service and resulting waste separately recorded. Bulk delivery excludes container tare from reference mass, not actual container manufacture, reuse, cleaning or disposal burdens within the declared boundary. | `ifc-oleochemicals-2007`; `jrc-cww-bref-2016` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received refined coconut triglyceride oil and externally supplied utilities at the selected manufacturing gate |
| starting_condition_role | Measured foreground receiving condition, not virgin raw-material creation or burden-free residue recovery |
| product_classification_scope | CPC 3.0 34120 distilled coconut hydrolysis-acid subset only |
| recursive_input_rule | Internal same-category returns stay internal and balanced. External recovered fatty-acid input requires explicit identity, origin and upstream burden; it is outside this base coconut-oil recipe until reviewed. |
| upstream_dataset_requirement | Verified physical identity plus matching supplier reference quantity, grade, moisture/composition, technology, location, period and boundary; an unresolved provider is an open boundary, not zero |
| disclosure | Stage flow diagram, physical mass/water/biological-carbon/fossil-carbon balances, net exchange register, all receivers, separate allocated-burden ledger and unmeasured scope |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fatty_acid_unit | Integrated coconut-oil splitting, distillation, bulk release and controls | required | Declared catalyst-free nonhydrogenated route; all actual on-site controls included | foreground | mixed_acid; 1 kg |

The physical diagram remains oil → splitting → crude acid → dehydration/distillation → tank → bulk release; sweet water leaves splitting, light ends and heavy fraction leave distillation, and control-unit returns retain two matching internal endpoints. Intermediate acid/tank handover is not another external reference-product output. The cards below are a minimum conditional exchange register, not a recipe: activate only actual flows, justify absence with records, and add each additional measured chemical, fuel, material or emission as one reviewed atomic row.

### Process: Integrated fatty-acid manufacture (`fatty_acid_unit`)

#### Inputs

##### Product flows

###### Coconut oil, refined (`oil`)

Refined coconut triglyceride oil received for this route; record lot composition, water, free acids and actual biological/fossil carbon. Crude oil and acid oil are different starting states.

- Selected flow: Coconut oil, refined `570397b9-62ae-4576-b584-56691c7fed08`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Deionised water (`hydrolysis_water`)

Externally supplied deionised water used for hydrolysis; record treatment and quality. Internal recovered condensate is a measured internal transfer, not a repeated external input.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Tap water (`utility_water`)

Purchased treated tap water for cooling-system makeup, cleaning and treatment; measure net makeup separately from circulation. Convert meters with measured density and supply reference basis.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Alternating current (`electricity`)

Chinese grid consumption at the 1–35 kV user connection only: this native identity declares locationOfSupply CN. Record the actual Chinese regional mix, losses, transformer scope and voltage; supply outside China, another voltage or generation route requires a separately verified identity and provider.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### High-pressure steam delivered to the fat splitter (`splitting_steam`)

Record this delivered steam stream with actual pressure, temperature, dryness, mass, supply system and condensate return. Steam enthalpy and supplier MJ definitions must be reconciled before an energy-based background link.

- Selected flow: High-pressure steam delivered to the fat splitter
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Steam delivered to fatty-acid distillation heating (`distillation_steam`)

Record the separately metered distillation heating steam header only when it actually supplies the reboiler. Identify indirect heating, direct stripping and vacuum-motive duties separately; do not infer the heat-delivery route from a vacuum setpoint or generic technology page. Verify that actual steam pressure/temperature and exchanger conditions can deliver the required heat. Other heating media require their own concrete reviewed exchanges. Shared header totals must reconcile to stage readings without double counting. (`desmet-distillation`)

- Selected flow: Steam delivered to fatty-acid distillation heating
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Aqueous sodium hydroxide cleaning solution (`cleaning_naoh`)

Conditional on actual NaOH cleaning or control-unit neutralisation use; this is not alkaline soapstock acidulation or product saponification. Record the commercial grade and supplied concentration, measure delivered solution as one flow, and assay NaOH mass fraction, water fraction and impurities. Disclose active NaOH mass separately in the composition ledger. Do not count carried water again as makeup; prepare a site dilution from separately measured purchased reagent and added water without also inventing a second purchased solution.

- Selected flow: Aqueous sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Activated carbon (`activated_carbon`)

Conditional on activated-carbon air or water treatment. Record grade, carbon origin, moisture, adsorption duty, replacement and regeneration; the broad chemical identity is not a background technology.

- Selected flow: Activated carbon `5cad53b5-252a-4e2f-8197-8be465707405`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

#### Outputs

##### Product flows

###### Fatty Acid (`mixed_acid`)

Accepted nonhydrogenated distilled coconut-oil free-fatty-acid mixture in bulk at loading. Retain measured water, residual glycerides and unsaponifiables in net mass; this is not pure lauric acid or a methyl ester.

- Selected flow: Fatty Acid `ac9714b9-4722-4831-b3b4-d0d5fad447ec`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Aqueous glycerine sweet water from coconut-oil hydrolysis (`sweetwater`)

Separated aqueous glycerine stream transferred as a product to a documented glycerine-recovery receiver. Measure total as-supplied wet mass, glycerol, water, residual fat and dissolved solids. Glycerol and water species explain the carrier; they are not additional external outputs. Pure glycerol UUIDs do not identify this solution; downstream concentration and refining are outside this gate. Any waste portion retains its separate actual disposition, never a presumed zero-burden credit.

- Selected flow: Aqueous glycerine sweet water from coconut-oil hydrolysis
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Marketed heavy fatty-acid distillation fraction (`heavy_coproduct`)

Activate only for the marketed portion with a documented product specification, legal status and receiver; record water, acids, glycerides and degraded material. Each lot or portion has one disposition. Marketed, waste and internal-return portions may coexist and must partition the measured total heavy fraction without overlap.

- Selected flow: Marketed heavy fatty-acid distillation fraction
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Marketed condensed light fatty-acid distillation fraction (`light_coproduct`)

Only an actual marketed heads portion with verified specification, receiver and product status. Record whole wet mass and acid/water composition; partition it from light_ends waste and any internal recycle. Commercial sale is not inferred from technical recoverability.

- Selected flow: Marketed condensed light fatty-acid distillation fraction
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Condensate returned to the external steam supplier (`returned_condensate`)

Only condensate actually crossing the selected foreground gate back to the steam supplier. Meter mass, temperature, pressure, contamination and destination. Internal condensate reuse stays in the transfer ledger. Supplier return entitlement and energy reference must be reconciled; a physical return does not automatically earn an avoided-water or heat credit.

- Selected flow: Condensate returned to the external steam supplier
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

##### Waste flows

###### Waste pitch from fatty-acid distillation (`heavy_waste`)

Only the disposed portion of distillation heavy residue crosses this boundary. Measure wet mass, retained acids, glycerides, carbon and treatment destination; internally rehydrolysed residue is not an external waste. Do not double count heavy_coproduct.

- Selected flow: Waste pitch from fatty-acid distillation
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Condensed light ends from fatty-acid distillation (`light_ends`)

Measure the captured light-end condensate with actual water and organic composition and disposal receiver. Captured condensate is not an air release. If marketed, add a separately reviewed product disposition instead of a waste credit.

- Selected flow: Condensed light ends from fatty-acid distillation
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Discarded aqueous glycerine sweet water from coconut-oil hydrolysis (`sweetwater_waste`)

Only an actual separately exported waste portion; record wet mass, glycerol, water, residual fat, contaminants and treatment receiver. Each portion is assigned once between sweetwater product, this waste transfer, internal recovery and any physically combined offsite_effluent. Combining streams does not erase the origin or glycerol account.

- Selected flow: Discarded aqueous glycerine sweet water from coconut-oil hydrolysis
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Fat-splitting and fatty-acid-distillation wastewater exported for treatment (`offsite_effluent`)

One physically mixed wastewater transfer after documented mixing, with component-origin records preserved. Record wet mass or measured volume/density, oil/grease, glycerol, COD, pH and receiving treatment. Pollutants in this transfer are not direct environmental releases.

- Selected flow: Fat-splitting and fatty-acid-distillation wastewater exported for treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Sludge (`primary_sludge`)

Only primary oily separation sludge exported from flotation or settlement; disclose wet/dry mass, oil, residual free acids, contaminants and receiver. Internal recovered fat is recorded as an internal return.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Sludge (`biological_sludge`)

Conditional on on-site biological wastewater treatment: external excess biological sludge only, distinct from primary sludge and internal return activated sludge; record water, dry solids, carbon, contamination and receiver.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### spent activated carbon (`spent_carbon`)

Only spent activated carbon crossing the gate to a receiver; weigh wet mass and assay moisture and adsorbed organics. Internal regeneration is not a second disposal flow.

- Selected flow: spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

##### Elementary flows

###### water vapour (`water_vapour`)

Water vapour actually escaping to outdoor air after condensers and cooling; measure H2O species mass from a closed water balance or matched moisture and gas measurements, retaining the complete wet-gas carrier separately. Dry-air mass, wet vent volume and the entire flashed steam inventory are not this H2O exchange. Air subcompartment unspecified; change identity when a known subcompartment requires it.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Liquid water discharged to fresh water (`water_fresh`)

Conditional H2O-species discharge from on-site treatment or a documented uncontaminated outlet to fresh water. Retain whole effluent volume/mass, water fraction and pollutant loads separately. Express water-species volume from measured H2O mass and the declared water-density/reference convention; treating whole outfall volume as pure water requires demonstrated equivalence. COD oxygen demand is not physical dissolved mass. Do not count off-site sewer transfer again as direct release or add overlapping carrier and species totals in the mass balance.

- Selected flow: Liquid water discharged to fresh water
- Flow property / unit: Volume / m3
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### chemical oxygen demand (`cod_fresh`)

Direct freshwater outfall COD load as measured oxygen demand, kg O2-equivalent, not kg fatty acid or carbon. Retain COD as a sum indicator and inventory identified harmful substances separately; disclose LCIA overlaps rather than adding overlapping indicator burdens.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Total suspended solids discharged to fresh water (`tss_fresh`)

Direct freshwater outfall suspended-solid load from matched filtered gravimetric samples and discharge volume. Keep dissolved material, oil/grease and sludge exports separate; do not sum solid constituents again into total mass.

- Selected flow: Total suspended solids discharged to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### carbon dioxide (biogenic) (`co2_bio`)

Conditional actual biogenic CO2 from on-site degradation of coconut-derived organic carbon. Reconcile measured carbon conversion and gas evidence; exclude upstream boiler emissions already in supply datasets. Preserve this LCI exchange regardless of climate-accounting treatment.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### carbon dioxide (fossil) (`co2_fossil`)

Only identified fossil-carbon conversion inside this foreground unit, for example degradation of fossil-derived auxiliary carbon; no positive quantity inferred from a vegetable feed or purchased energy. Keep actual fossil and biological carbon ledgers separate.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### hexanoic acid (`hexanoic_air`)

Only chemically identified hexanoic acid (CAS 142-62-1) remaining in outdoor process vents or diffuse releases after capture. Screen actual vent composition; do not assume this species represents all low-molecular fatty-acid odour.

- Selected flow: hexanoic acid `0c09ad1f-8a46-45e6-bb54-078a197e7e66`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### acetaldehyde (`acetaldehyde_air`)

Only analytically identified acetaldehyde (CAS 75-07-0) from thermal degradation reaching outdoor air. No generic aldehyde or total VOC substitution; add every other measured species as its own reviewed row.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### methane (biogenic) (`methane_bio`)

Conditional on biological treatment or storage producing biogenic methane; record actual generated, captured, destroyed and leaked methane. A captured biogas flow is a technosphere transfer and must not be counted as atmospheric methane.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured physical quantity for the same period divided by accepted net mixed-acid output; retain the unallocated total. Demonstrated absence may be recorded as zero; missing evidence is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_physical | all physical flows | Keep actual oil, water, acid, sweet-water, heavy-fraction, waste and emission quantities in an unallocated physical mass/water/carbon balance. Never multiply the physical co-product output by an allocation share. Record stock changes and internal transfers explicitly. | `jrc-cww-bref-2016`; `ifc-oleochemicals-2007` |
| al_hierarchy | shared burdens | First subdivide direct product-specific measurements or consider justified system expansion for an expanded system. For the product dataset, shared burdens require a demonstrated causal physical relationship; equal wet-mass shares are not automatic, especially for dilute sweet water. If this cannot be established, justify a period- and gate-matched economic relationship. No universal allocation fraction or glycerine yield. | `eu-pef-multifunctionality-2021` |
| al_receivers | sweetwater; sweetwater_waste; heavy_coproduct; heavy_waste; light_coproduct; light_ends | Use actual specifications, contracts and legal receiver status to establish each co-product; zero price alone does not prove waste. Preserve each actual product, waste and internal-return portion of sweet water, heads and heavies; each portion is assigned once and the portions reconcile to their physical stream total. Glycerine refining belongs downstream. Waste treatment remains linked to its generating route. No assumed sale, suppressed co-product or artificial zero credit. | `ifc-oleochemicals-2007`; `eu-pef-multifunctionality-2021` |
| al_ledger | reported product burdens | Maintain a separate environmental-burden ledger with direct assignments, shared pools, allocation factors, sum checks and sensitivity. Internal recovery alone earns no avoided-product credit. Product-normalized burden quantities are not substituted for the physical balances. | `eu-pef-multifunctionality-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | fatty_acid_unit | reference product | measured_record | SKU; lot; net mass; tare; composition; water; free acids; glycerides; unsaponifiables; carbon source; method/uncertainty; acceptance; opening/closing accepted stock; dispatch; rejects; returns | Calibrated net bulk weighing or calibrated tank/mass-meter balance with measured density/temperature. Derive accepted production for the same activity period by reconciling dispatch, accepted stock changes, returns and rejects; do not divide current production inputs by unmatched shipments from earlier stocks. Use representative lot sampling and validated analytical methods; preserve chromatographic species/mass basis and test-method limits. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |
| cp_material | fatty_acid_unit | feed, solution, carbon and sweet water | measured_record | flow identity; lot; wet mass; concentration; water; contaminants; supplier; carbon origin; receiver; opening/closing stocks | Calibrated receiving/dispatch measurements and representative paired samples; reconcile invoices, inventories and composition assays. Keep sweet-water wet output and glycerol component separately. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |
| cp_water | fatty_acid_unit | water inputs | measured_record | meter; inlet/outlet; net makeup; internal circulation/recovery; water quality; density; temperature; solution-carried water | Meter distinct supply headers; document density for mass conversion; separate net purchases, internal circulation, steam-derived condensate and chemical carrier water. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |
| cp_energy | fatty_acid_unit | electricity | measured_record | stage meters; kWh; voltage; supplier; country/region; grid mix; losses; operating hours; shared allocation | Calibrated electricity meters; retain stage readings and measured shared-service assignment; verify CN geography and 1–35 kV consumption supply compatibility or select another verified physical identity. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |
| cp_steam | fatty_acid_unit | individual steam headers | measured_record | delivered mass; pressure absolute/gauge; temperature; dryness; inlet/return enthalpy; condensate mass; makeup; losses; supplier MJ convention | Meter each header and condensate return over matched intervals; use traceable steam-property calculations from actual state; verify supplier steam quantity/heat boundary before background conversion. Unknown pressure, state or MJ convention blocks that link. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |
| cp_residual | fatty_acid_unit | heavy fraction, light ends and distinct residuals | measured_record | origin; wet mass; dry solids; water; acid/glyceride fraction; carbon; contaminants; receiver; product/waste status; internal returns | Weigh and sample each physically distinct stream, including primary and biological sludge separately; reconcile dispatch manifests and internal return meters; document legal receiver and specification. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |
| cp_effluent | fatty_acid_unit | wastewater and direct water outputs | measured_record | origin; mixing point; sewer/direct receiver; flow time series; density; pH; COD; BOD; TOC; TSS; oil/grease; specific substances; laboratory method; detection limit | Matched outfall flow and representative samples, including non-routine events; monitor influent and treated outlet separately. Keep sewer-transfer composition in its waste record; direct releases occur only at the environmental outfall. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |
| cp_air | fatty_acid_unit | vent species and evaporation | measured_record | source; post-control gas volume; temperature/pressure; wet/dry basis; chemical species/CAS; concentration; capture; operating time; detection limits; water loss | Representative species-specific post-control vent measurements and documented fugitive sampling/mass balances. No total VOC-to-species factor; test actual fatty acids, aldehydes and other degradation products. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |
| cp_carbon | fatty_acid_unit | carbon partition and treatment gases | measured_record | biogenic/fossil input carbon; product/residual carbon; gas species; generated/captured/destroyed/leaked CH4; CO2; stock changes; carbon-content analysis | Separate biological/fossil carbon balances using supplier origin and measured material/gas carbon; on-site treatment gas monitoring and captured-gas meters. Do not infer CO2 from COD or unknown acid chain length. | row-declared units | each lot and continuous/representative operating intervals | one declared representative period including cleaning/upsets | all included stages and gates | per 1 kg reference flow | calibration; sample representativeness; lab method; stock/receiver reconciliation; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalized | all inventory rows | N = sum(Q) / B; Q is a measured exchange total and B is accepted net bulk mixed-acid kg from cp_release for the same period; retain Q and B and separate internal amounts. | Q; B; cp_release | exchange quantity per 1 kg reference flow | `jrc-cww-bref-2016` |
| calc_component | cleaning_naoh; sweetwater; mixed_acid | component_mass = wet_mass × measured_mass_fraction; water_mass = wet_mass × measured_water_fraction. Components explain the parent wet flow and must not be added to it as extra exchanges. | wet_mass; measured_mass_fraction; measured_water_fraction | component and water ledgers | `ifc-oleochemicals-2007` |
| calc_load | cod_fresh; tss_fresh | load_kg = sum(C_mg_per_L × V_m3 × 0.001) for matched sampling intervals; retain pollutant analytical quantity definition. COD is kg oxygen demand, TSS is kg dry suspended material. | concentration; outfall_volume; cp_effluent | measured direct outfall loads | `jrc-cww-bref-2016` |
| calc_steam | splitting_steam; distillation_steam; returned_condensate | Keep steam mass as the exchange basis. For an indirect heater, matched steady operation with all incoming steam recovered as the measured return and negligible documented work, storage and other heat losses permits heat_MJ = sum(m × (h_in − h_return)) / 1000. Use one enthalpy datum and actual absolute pressure, temperature and phase/dryness with traceable IAPWS-IF97 calculations (h in kJ/kg, m in kg) within their validity regions. Otherwise require a complete boundary-specific energy balance including flash, leakage, blowdown, stocks and losses once; this simplified formula cannot be applied to direct injection or unmatched return mass. Reconcile the provider reference definition before an energy link; never equate GCV with delivered heat. | matched_mass; actual_states; return_mass; actual_enthalpies; boundary_evidence; cp_steam | conditional heat supplement; physical steam and condensate remain separate | `iapws-if97-2012`; `ifc-oleochemicals-2007` |
| calc_burden | allocated environmental burdens | For product j, burden_j = directly_attributed_j + share_j × shared_pool; shares sum to one for each pool. If justified economic allocation is selected, share_j = measured_output_j × gate_price_j / sum(measured_output_k × gate_price_k), using priced wet or active quantity exactly as contracted. Keep physical outputs unscaled. | shared_pool; direct_attribution; measured_outputs; prices; justified_relationship | separate allocated burden ledger and sensitivity | `eu-pef-multifunctionality-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all flows | Physical identity, property/unit and actual quantity/provider compatibility are separate checks; disclose every blank UUID and open provider, no substitute pure-acid or route-incompatible dataset. | primary specifications, raw assays and provider reference definitions |
| dq_balances | fatty_acid_unit | Close stage and aggregated wet-mass, water, biological-carbon and fossil-carbon balances including stock changes, all actual co-products, residues and direct releases; report residual imbalance with measurement uncertainty, no invented tolerance. Retain species and C/H/O accounts separately using actual acid/glyceride profiles and analytically supported molecular bases. Hydrolysis consumes water into products; no universal acid molecular weight, glycerol yield or measured-species inventory follows from a generic fatty-acid identity. | flow diagram, paired transfer totals, measured profiles, carbon and composition assays |
| dq_operations | maintenance, stocks and bulk containers | Cover non-routine cleaning and maintenance, each actual lubricant, replacement/filter material, loading loss and container service at the declared gate. Reconcile reuse cycles, container stocks, delivered contents and tare; add each actual exchange with its own identity and measured amount before claiming full coverage. Excluding retail packaging is not evidence that bulk handling has no burden. | maintenance orders, chemical invoices/assays, container ownership/reuse/cleaning records and stock ledger |
| dq_coverage | all active rows | Cover a representative complete period; report gaps and detection limits. Missing data is unknown, not zero. Any additional actual species/auxiliary requires an atomic row before a complete dataset claim. | stream register and monitoring plan |
| dq_sources | source applicability | Use IFC sector guidance and CWW chemical-sector monitoring for their declared scope. Historical EPA and producer/technology pages support distinctions only; their numerical cases, limits, recipes and source pressures are not defaults. | source sections and actual local applicability assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference and inputs | Require refined coconut oil, hydrolysis/distillation and measured mixed free-acid product, with no excluded route. A broad industrial hydrolysis identity requires the actual nonhydrogenated coconut profile and whole commercial-mass basis; native hydrogenation, different feedstock, pure-acid, ester or conflicting grade restrictions cannot be waived with qualifiers. Broad classifications are not proof of composition. | `ifc-oleochemicals-2007`; `klk-palmera-fatty-acids` |
| v_reference | mixed_acid | Exactly one completed reference product output: 1 kg net mixture; all inventory denominators and collection aggregations match it in both languages. Stage handovers are internal. | `jrc-cww-bref-2016` |
| v_supply | steam; electricity; solutions | Require actual voltage, steam pressure/state/return and supply reference basis, and solution wet/active/water reconciliation. Unresolved provider quantity conventions prevent claiming a complete background link. | `ifc-oleochemicals-2007` |
| v_physical | mass and allocation ledgers | Require mass/water/carbon balance closure evidence with every actual output; internal endpoints equal; heavy-product/waste dispositions nonoverlapping. Allocation may change burden shares, never erase physical co-products or emissions. | `jrc-cww-bref-2016`; `eu-pef-multifunctionality-2021` |
| v_emissions | all environmental releases | Separate true substance, carbon origin, current/delayed timing and receiving medium. COD, TOC and species inventories must not produce duplicated impact; no generic VOC substitution. PM size classes, if present, must be nonoverlapping; captured dust/condensate is waste or recovery, not another emitted mass. Retain actual biogenic CO2 in LCI. | `jrc-cww-bref-2016`; `ifc-oleochemicals-2007` |
| v_completeness | data package | Every active exchange needs measurement evidence, identity decision, provider/receiver and unit basis. Any omitted actual exchange, blank required identity, missing sample, unsupported conversion or unknown quantity remains explicit and prevents a complete-data claim. Method authorship is not scientific approval or dataset verification. | `jrc-cww-bref-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared catalyst-free nonhydrogenated refined-coconut-oil splitting/distillation bulk grade, after actual data and applicability checks |
| excluded_use | Whole-CPC average; acidulation oil; pure single acid; esters; other feedstocks; hydrogenation; unmeasured supplier/default recipes |
| required_metadata | SKU/composition/state; net gate mass; supplier/reference conventions; carbon origin; process map; period/site; receivers; allocation; evidence and uncertainty |
| required_quality_disclosure | UUID gaps, provider/measurement gaps, carbon and water balances, omitted scope, monitoring/detection coverage and independent-review status |
| update_trigger | Feedstock, supplier, composition, hydrogenation/esterification, distillation cut, utilities, receivers, measurement basis or allocation changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ifc-oleochemicals-2007 | official_guidance | [World Bank Group/IFC, EHS Guidelines for Oleochemicals Manufacturing, 30 April 2007](https://www.ifc.org/content/dam/ifc/doc/2000/2007-oleochemicals-manufacturing-ehs-guidelines-en.pdf) | pp. 1–5, 10, 13–14: sector applicability, water/air/residues, representative monitoring, splitting/distillation and sweet-water separation. Source numeric examples and Table 3 are not inventory defaults. |
| jrc-cww-bref-2016 | official_guidance | [JRC, CWW BREF, 2016, JRC103096](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf) | Scope p. xxiii (PDF29), BAT2–4 pp.543–544 (PDF573–574): chemical-sector stream register, process sheets and matched flow/load monitoring. No BAT-AEL-to-inventory conversion or legal-conformance claim. |
| klk-palmera-fatty-acids | handbook | [KLK OLEO, PALMERA Fatty Acids, publisher product page](https://www.klkoleo.com/brand/palmera-fatty-acids/) | Description and Distilled Fatty Acids → Coconut Fatty Acid family: actual marketed vegetable mixed-acid route distinct from fractionated acid grades. Product family only; no universal composition, grade purity or plant recipe. |
| desmet-oleochemicals | handbook | [Desmet, Oleochemicals, publisher technology page](https://www.desmet.com/en/biofuel/oleochemicals) | How does it work; Raw materials: triglyceride/water splitting, two main products, distillation and coconut-oil applicability. Equipment/route evidence only, not performance or recipe defaults. |
| epa-soap-fat-splitting-1974 | official_guidance | [US EPA, Soap and Detergent Manufacturing Development Document, EPA-440/1-74-018-a, April 1974](https://www.epa.gov/sites/default/files/2016-08/documents/soap-detergent-mfg_dd_1974.pdf) | pp.24–26 (PDF39–41): historical fat splitting, glycerine separation, subsequent acid distillation and soap neutralisation distinctions. Historical catalytic examples, pressures, yields and soap recipes do not apply as defaults to the catalyst-free route. |
| eu-pef-multifunctionality-2021 | official_guidance | [European Commission, Recommendation (EU) 2021/2279, Annex I §4.5, pp.63–64](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf) | Subdivision/system expansion, causal physical relationship and justified alternative/economic allocation hierarchy only; no assertion that this PCR or future dataset is fully PEF compliant. |
| epo-soapstock-separation-1985 | literature | [EP0160326A1, Process for obtaining fatty acid product from glyceride oil soapstock, 6 November 1985](https://patents.google.com/patent/EP0160326A1/en) | Background of the invention: alkaline refining soapstock, mineral-acid acidulation and separate aqueous/emulsified/fatty-acid layers; exclusion boundary only. Patent process disclosure is not proof of a universal deployed route or recipe; its numeric composition and examples are not defaults. |
| iapws-if97-2012 | official_guidance | [IAPWS R7-97(2012), Revised Release on the Industrial Formulation 1997 for Water and Steam](https://iapws.org/technical-guidance/release/IF97-Rev) | §§1–4 and region property equations: traceable actual-state steam/water enthalpy, phase and validity checks. Thermophysical properties do not establish process duty, provider reference quantity or a universal steam amount. |
| desmet-distillation | handbook | [Desmet, Distillation & Fractionation, publisher technology page](https://www.desmet.com/en/biofuel/oleochemicals/distillation-fractionation) | Tailor-made reboiler, steam/condenser and heat-recovery options establish why actual heat-delivery configuration must be verified. No plant recipe, performance default or universal steam-heated reboiler is established. |
