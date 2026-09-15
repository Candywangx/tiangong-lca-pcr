---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.nickel-mattes-nickel-oxide-sinters-and-other-intermediate-products-of-nickel-metallurgy
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nickel mattes, nickel oxide sinters and other intermediate products of nickel metallurgy

## 1. Scope and Applicability

This PCR covers the gate-to-gate production of nickel mattes, nickel oxide sinters, and other nickel-bearing metallurgical intermediates whose intended next use is further nickel or co-metal recovery or refining. Covered routes include sulphidic-concentrate smelting, oxidic laterite preparation and smelting with sulphur addition, roasting or sintering to an oxide intermediate, and hydrometallurgical precipitation of an intermediate. A foreground data package shall select one actual product and route; it shall not average unlike product states without separately reported production and composition data.

The foreground boundary begins when nickel-bearing ore, concentrate, or a specifically identified secondary feed crosses the production-site gate. It includes on-site preparation, drying, calcining, roasting, smelting, converting, slag cleaning, leaching or precipitation when used to make the declared intermediate, product granulation or dewatering, on-site off-gas and wastewater treatment, and management of captured dust and slag up to the site gate. Upstream mining, concentration, purchased energy and reagent production, capital goods, transport before the site gate, and downstream refining to unwrought nickel or chemicals are represented by upstream datasets and are not part of the foreground process.

The category excludes nickel ores and concentrates sold without metallurgical conversion; ferro-nickel and nickel pig iron; unwrought refined nickel; finished nickel alloys; and nickel chemicals sold as final chemical products rather than as declared metallurgical intermediates. Packaging is included only when it crosses the declared product gate and shall then be added as separate atomic material rows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.nickel-mattes-nickel-oxide-sinters-and-other-intermediate-products-of-nickel-metallurgy |
| classification_refs | CPC 3.0: 41421 (exact classification context); HS 7501 terminology corroboration |
| covered_products | Low- or high-grade nickel matte; nickel oxide sinter; hydrometallurgical nickel intermediate; another nickel-bearing intermediate demonstrably sold for further nickel metallurgy |
| excluded_products | Nickel ore or concentrate; ferro-nickel; nickel pig iron; unwrought refined nickel; finished nickel alloy; final-market nickel sulfate, nickel carbonate, or other nickel chemical |
| representative_product | A declared nickel metallurgy intermediate at the production-site gate |
| production_route | Declared sulphidic pyrometallurgical, laterite pyrometallurgical, oxide roasting/sintering, hydrometallurgical precipitation, or specifically documented combined route |
| market_state | As-shipped solid, granulate, sinter, filter cake, or slurry; moisture, dry solids, nickel content, sulfur content, and co-metal content declared as applicable |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Nickel-bearing metallurgical intermediate supplied for further nickel or co-metal recovery or refining |
| How much | 1,000 kg of declared product as shipped at the production-site gate |
| How well | Product form, dry-solids fraction, nickel content, sulfur content, major co-metals, and key impurity specification are measured for the represented lot or campaign |
| How long or cycle | One declared production campaign or reporting period, with lot-weighted output normalized to 1,000 kg |
| reference_flow_link | `out_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Nickel metallurgy intermediate product (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Product name and form; route; ore/feed class; as-shipped mass; dry-solids fraction or moisture; nickel content; sulfur content; cobalt and copper content when material; impurity specification; site and geography; reporting period; recovered-acid treatment; slag and dust recycle status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-based exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1,000 kg of product as shipped; retain unrounded measured mass before normalization. |
| `dry_mass_disclosure` | Product and nickel-bearing feed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-shipped mass and measured moisture or dry-solids fraction; calculate dry mass without silently changing the reference flow to dry product. |
| `contained_nickel` | Product, feed, slag, and dust | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg Ni | Calculate contained nickel from the measured material mass and representative nickel assay; state whether the assay is wet- or dry-basis. |
| `gas_volume_conditions` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume and its temperature, pressure, and dry/wet reference condition; do not combine unlike volume reference conditions. |
| `energy_conversion` | Alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered energy record and document any kWh-to-MJ conversion using 1 kWh = 3.6 MJ. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Nickel-bearing ore, concentrate, or specifically identified secondary feed received at the production-site gate with mass, moisture, nickel assay, and route-relevant composition recorded |
| starting_condition_role | Foreground input boundary for conversion to the declared nickel metallurgy intermediate |
| product_classification_scope | Nickel mattes, nickel oxide sinters, and other intermediate products of nickel metallurgy; excludes ores/concentrates and refined nickel products |
| recursive_input_rule | If an input is itself a covered nickel metallurgy intermediate, record that exact input as a separate product exchange with an upstream dataset and do not recursively include its prior production in this foreground process. |
| upstream_dataset_requirement | Every purchased feed, fuel, electricity, oxygen, water, and reagent crossing the site gate requires a geography-, technology-, and product-state-appropriate upstream dataset. |
| disclosure | Declare route, feed type, preparation state, recovered heat, oxygen plant boundary, off-gas sulfur recovery, slag cleaning and recycle, dust recycle, water recycle, wastewater treatment, direct-release compartments, and any excluded shared infrastructure. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | Foreground route | Include the actual preparation, thermal, hydrometallurgical, conditioning, off-gas, and water-treatment operations used to produce the declared intermediate; do not substitute an average of unmeasured routes. | `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | Purchased inputs | Stop the foreground boundary at the site gate and link each purchased feed, energy carrier, water, oxygen, and reagent to an upstream dataset. | `eu-jrc-nfm-bref-2017` |
| `boundary_direct_releases` | Air and water emissions | Include measured or calculated direct releases after on-site abatement; upstream electricity-generation emissions shall not be duplicated as foreground emissions. | `eu-jrc-nfm-bref-2017` |
| `boundary_recovery_loops` | Slag, dust, sulfur, and heat recovery | Model on-site returns as internal loops and report only net site-gate exchanges; disclose transfers to another site as technosphere outputs or wastes according to their actual status. | `eu-jrc-nfm-bref-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `nickel_intermediate_production` | Nickel intermediate production and on-site treatment | required | Include the measured unit operations for the declared route; route-specific rows apply only when that exchange crosses the selected foreground boundary. | Foreground conversion, product conditioning, off-gas treatment, water treatment, and residue management | 1,000 kg declared product as shipped |

### Process: Nickel intermediate production and on-site treatment (`nickel_intermediate_production`)

This consolidated process prevents route-by-exchange Cartesian duplication. Each card is one atomic exchange. Apply only cards whose stated route condition occurs, and add any other actual site exchange as its own atomic row before dataset publication.

#### Inputs

##### Product flows

###### Nickel sulphide concentrate (`in_nickel_sulfide_concentrate`)

Record this input only for a route receiving a concentrated sulphidic nickel feed.

- Selected flow: Nickel sulphide concentrate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net measured concentrate mass crossing the site gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel laterite ore (`in_nickel_laterite_ore`)

Record this input only for a route receiving oxidic laterite, including a declared limonite or saprolite state.

- Selected flow: Nickel laterite ore (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net measured laterite mass crossing the site gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `eu-jrc-nfm-bref-2017`

###### Silica flux (`in_silica_sand`)

Record silica sand when used as flux in the declared thermal route.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass / kg
- Amount rule: Net measured silica sand charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sulfur addition (`in_sulfur`)

Record elemental sulfur only when it is added to form a sulphide matte or for another declared metallurgical reaction.

- Selected flow: Sulfur `36a73796-51c8-44d6-9615-c4bc338274ec`
- Flow property / unit: Mass / kg
- Amount rule: Net measured elemental sulfur charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `eu-jrc-nfm-bref-2017`

###### Metallurgical coke (`in_metallurgical_coke`)

Record metallurgical coke only when used as reductant or furnace fuel.

- Selected flow: metallurgical coke `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- Flow property / unit: Mass / kg
- Amount rule: Net measured metallurgical coke charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `eu-jrc-nfm-bref-2017`

###### Gaseous natural gas (`in_natural_gas`)

Record purchased gaseous natural gas combusted in dryers, kilns, furnaces, or auxiliary units.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Net metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas`
- Sources: `eu-jrc-nfm-bref-2017`

###### Alternating-current electricity (`in_electricity`)

Record net imported alternating-current electricity for process and auxiliary equipment.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Net metered imported electricity after deducting separately metered site-gate exports
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas`
- Sources: `eu-jrc-nfm-bref-2017`

###### Industrial oxygen (`in_industrial_oxygen`)

Record purchased or over-the-fence industrial oxygen; exclude on-site oxygen-production electricity only when that production is represented by a separate upstream dataset.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Net metered oxygen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water (`in_process_water`)

Record net make-up process water after measured internal water recycle.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Net measured process-water input crossing the site gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sulfuric acid input (`in_sulfuric_acid`)

Record sulfuric acid only when purchased or transferred into a hydrometallurgical route; do not net it against recovered sulfuric acid output.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Net measured sulfuric-acid solution mass, with concentration declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Aqueous ammonia (`in_aqueous_ammonia`)

Record aqueous ammonia only for an ammonia-leach or precipitation route.

- Selected flow: Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- Flow property / unit: Mass / kg
- Amount rule: Net measured aqueous-ammonia solution mass, with concentration declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Hydrogen sulfide reagent (`in_hydrogen_sulfide`)

Record hydrogen sulfide only when supplied as the precipitation reagent for a nickel-cobalt sulphide intermediate.

- Selected flow: Hydrogen sulfide (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net measured hydrogen-sulfide mass, excluding carrier gas mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sodium hydroxide (`in_sodium_hydroxide`)

Record sodium hydroxide only when used for pH control, precipitation, scrubbing, or water treatment within the foreground boundary.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Net measured sodium-hydroxide solution or solid mass, with concentration and physical state declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

No waste input is generically required. A site that receives a specific nickel-bearing waste shall add that exact atomic waste flow with measured mass, composition, treatment role, and upstream status.

##### Elementary flows

No elementary input is generically required. Resource extractions belong in upstream datasets for purchased materials and energy.

#### Outputs

##### Product flows

###### Declared nickel metallurgy intermediate (`out_reference_product`)

This is the category-wide reference product; its exact product name and state shall be declared because no single public UUID covers every included intermediate.

- Selected flow: Nickel metallurgy intermediate product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg after normalizing measured dispatch mass for the declared reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg declared product as shipped
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_dispatch`
- Sources: `un-cpc-3-0-structure-2025`, `china-mof-tariff-2013`, `eu-jrc-nfm-bref-2017`

###### Recovered sulfuric acid (`out_sulfuric_acid`)

Record sulfuric acid exported from an on-site off-gas acid plant as a co-product; do not record internally consumed acid as a gross output.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Net measured sulfuric-acid solution mass crossing the site gate, with concentration declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_dispatch`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Nickel smelter slag (`out_nickel_smelter_slag`)

Record net nickel smelter slag leaving the site after internal slag cleaning and returns; disclose recovery or disposal destination and nickel assay.

- Selected flow: nickel smelter slag `4fcb4fe9-a429-4de3-aaf0-a0ed897fd4ce`
- Flow property / unit: Mass / kg
- Amount rule: Net measured slag mass crossing the site gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel-bearing collected flue-gas dust (`out_nickel_flue_gas_dust`)

Record net captured nickel-bearing flue-gas dust transferred off site after subtracting measured internal recycle.

- Selected flow: Nickel-bearing flue-gas dust (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net measured captured-dust mass crossing the site gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`out_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide from on-site combustion and carbon reductant oxidation; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or carbon-balance calculation for direct foreground sources
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

###### Direct sulfur dioxide to air (`out_sulfur_dioxide_air`)

Record atomic sulfur dioxide released to the ordinary unspecified-air compartment after capture and acid production; do not substitute a sulfur-oxides umbrella flow.

- Selected flow: Sulfur dioxide to air, unspecified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured stack and diffuse sulfur dioxide after on-site abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel to air, unspecified (`out_nickel_air`)

Record total measured nickel mass released to air after on-site capture, using the unspecified-air compartment only when a more specific receiving compartment is unavailable.

- Selected flow: nickel `08a91e70-3ddc-11dd-96c8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack plus quantified diffuse nickel emissions after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel to water, unspecified (`out_nickel_water`)

Record total measured nickel mass in direct treated-water releases, using the unspecified-water compartment only when the receiving water is not available.

- Selected flow: nickel `08a91e70-3ddc-11dd-96ce-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by flow-weighted nickel concentration after on-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared product as shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Separately measured route units and outputs | Avoid allocation by subdividing separately metered preparation, smelting, leaching, gas-treatment, acid-production, and residue-treatment operations. | `eu-jrc-nfm-bref-2017` |
| `allocation_internal_returns` | On-site matte, slag, dust, water, acid, and heat returns | Treat measured on-site returns as internal loops; assign their treatment burdens to the foreground process and report only net site-gate exchanges. | `eu-jrc-nfm-bref-2017` |
| `allocation_coproducts` | Exported sulfuric acid or another valuable co-product | First use a documented physical causal relationship such as sulfur converted to exported acid; if no defensible causal relationship exists, use revenue-based allocation with the price period, currency, and sensitivity to zero-credit treatment disclosed. | `eu-jrc-nfm-bref-2017` |
| `allocation_recovered_metals` | Slag, dust, cake, or residue sent for metal recovery | Do not assign avoided primary-metal credits inside the foreground inventory unless the study applies an explicitly documented substitution model; disclose recoverable nickel and co-metal content separately. | `eu-jrc-nfm-bref-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `nickel_intermediate_production` | Feed, flux, sulfur, and coke inputs | Weighbridge, belt scale, batch ticket, invoice, and assay | gross mass; tare; moisture; dry solids; Ni; S; Co; Cu; material state; lot id | Reconcile calibrated receipt and charge records to inventory change | kg and mass fraction | Each lot and monthly reconciliation | Same reporting period as product output | All included site units | Sum net consumed mass and normalize by dispatch output | Scale calibration, stock reconciliation, sampling plan, assay certificate |
| `cp_energy_and_gas` | `nickel_intermediate_production` | Natural gas, electricity, and oxygen inputs | Custody meter and submeter records | meter start/end; import; export; pressure; temperature; gas condition; oxygen purity; outage | Reconcile site-gate meters with route-unit submeters | m3 and MJ | Continuous or each billing interval | At least one representative production campaign and the reporting period | All included site units | Net imports divided by qualifying product output | Meter calibration, invoice reconciliation, missing-data log |
| `cp_water_records` | `nickel_intermediate_production` | Net process-water input | Intake and recycle meter records | make-up water; returned water; inventory change; source; quality | Water balance using calibrated meters | kg | Daily or continuous, monthly reconciliation | Same reporting period as product output | Foreground water system | Site-gate make-up water divided by qualifying output | Meter calibration and water-balance closure |
| `cp_reagent_records` | `nickel_intermediate_production` | Acid, ammonia, hydrogen sulfide, and sodium hydroxide inputs | Tank level, flow meter, batch ticket, invoice, concentration assay | delivered mass; opening/closing stock; concentration; purity; physical state; return | Reconcile purchases, stock change, and batch dosing | kg solution and mass fraction | Each delivery and batch, monthly reconciliation | Same reporting period as applicable route output | Reagent storage and included route units | Net pure or solution mass as explicitly labelled, normalized by output | Tank calibration, concentration certificate, dosing reconciliation |
| `cp_product_dispatch` | `nickel_intermediate_production` | Reference product and exported acid | Dispatch scale, tank meter, product assay, inventory | product mass; acid mass; moisture; dry solids; Ni; S; Co; Cu; acid concentration; lot | Reconcile production, inventory change, and dispatch | kg and mass fraction | Each lot or transfer | Complete reporting period | All product finishing and dispatch points | Lot-weighted mass and assays; normalize reference product to 1,000 kg | Scale calibration, assay QA/QC, inventory reconciliation |
| `cp_waste_records` | `nickel_intermediate_production` | Slag and captured dust outputs | Scale tickets, containers, inventory, transfer manifests, assays | mass; Ni; Co; Cu; moisture; origin; internal return; destination; waste status | Reconcile generated, internally returned, stored, and transferred quantities | kg and mass fraction | Each transfer, monthly reconciliation | Same reporting period as product output | All included collection and treatment units | Report net site-gate waste after internal returns | Manifest, scale calibration, representative assay, stock reconciliation |
| `cp_air_emissions` | `nickel_intermediate_production` | Direct carbon dioxide, sulfur dioxide, and nickel to air | Continuous monitor, stack test, fuel/carbon record, diffuse survey | gas flow; concentration; operating hours; fuel carbon; coke carbon; captured sulfur; detection limit | Integrate valid measurements; use documented carbon balance only for carbon dioxide gaps | kg | Continuous where available and each required test | Representative operating states across the reporting period | All included stacks and quantified diffuse sources | Sum direct releases after abatement and normalize by output | Monitor calibration, valid-data coverage, stack-test report, carbon-balance closure |
| `cp_water_emissions` | `nickel_intermediate_production` | Nickel to water | Discharge meter and flow-proportional sample | discharge volume; Ni concentration; detection limit; bypass; receiving water | Multiply integrated discharge by flow-weighted concentration | kg | Continuous flow and permit-consistent sampling | Same reporting period as product output | All direct foreground discharge points | Sum post-treatment direct releases and normalize by output | Laboratory accreditation, blanks, duplicates, meter calibration, permit record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_output` | Every inventory row | normalized amount = reporting-period net exchange / reporting-period qualifying product mass × 1,000 kg | Net exchange; qualifying product dispatch mass | Exchange per 1,000 kg product |  |
| `calc_dry_mass` | Feed, product, slag, and dust | dry mass = as-shipped mass × (1 − moisture mass fraction), or as-shipped mass × measured dry-solids fraction | As-shipped mass; representative moisture or dry-solids fraction | Dry mass with basis label |  |
| `calc_contained_nickel` | Nickel-bearing materials | contained Ni = material mass on the assay basis × measured nickel mass fraction | Material mass; assay basis; Ni fraction | kg Ni |  |
| `calc_gas_reference` | Natural gas and oxygen | Convert volume only with recorded temperature, absolute pressure, compressibility treatment, and wet/dry basis; retain original metered value. | Metered volume and reference conditions | Comparable m3 at declared conditions |  |
| `calc_direct_co2` | `out_carbon_dioxide_fossil` | Prefer measured direct CO2; otherwise apply a documented carbon balance to consumed fossil fuel and reductant carbon, subtracting measured carbon retained in products or wastes. | Fuel and coke carbon; retained carbon; measured CO2 | kg direct fossil CO2 | `eu-jrc-nfm-bref-2017` |
| `calc_nickel_water` | `out_nickel_water` | nickel release = sum of discharge volume interval × flow-weighted nickel concentration interval; handle below-detection values by the declared laboratory rule. | Discharge volume; nickel concentration; detection limit | kg nickel to water | `eu-jrc-nfm-bref-2017` |
| `calc_mass_balance` | Ni, S, Co, and Cu balance | Reconcile measured inputs, product, co-products, wastes, emissions, and inventory change; investigate material imbalance before publication. | Assays and masses for all relevant exchanges | Element balance and closure statement | `eu-jrc-nfm-bref-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Product form and intended further-metallurgy use shall demonstrate inclusion in this PCR and exclusion from ore/concentrate, ferro-nickel, and refined-nickel categories. | Product specification, contract, process description, and classification record |
| `dq_route` | Foreground process | Route, furnace or reactor type, feed state, preparation, conditioning, and abatement units shall match the reported inventory rows. | Process flow diagram and unit-operation list |
| `dq_assay` | Nickel-bearing materials | Use representative sampling and traceable Ni, S, Co, Cu, moisture, and impurity analyses on the stated wet or dry basis. | Sampling plan, laboratory method, certificates, QA/QC results |
| `dq_temporal` | All rows | Align input, output, stock-change, and emission records to the same period and disclose shutdown, start-up, bypass, and campaign changes. | Period reconciliation and operating log |
| `dq_completeness` | Site boundary | Reconcile site-gate meters, receipts, dispatch, wastes, and direct releases; explain excluded flows and missing data. | Mass, element, energy, and water balance checks |
| `dq_background` | Upstream datasets | Match geography, technology, product state, concentration, electricity voltage/grid, oxygen boundary, and gas volume conditions. | Dataset metadata and mapping note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Product category | Reject a dataset that represents ore/concentrate, ferro-nickel, nickel pig iron, unwrought refined nickel, or a final-market nickel chemical instead of a declared metallurgy intermediate. | `un-cpc-3-0-structure-2025`, `china-mof-tariff-2013` |
| `validate_reference` | Reference flow | Require exactly 1,000 kg as-shipped reference product and all required product, composition, route, site, and period qualifiers. | `un-cpc-3-0-structure-2025` |
| `validate_route_rows` | Inventory | Require every applied row to match the declared route and every actual material, energy, waste, and direct-emission exchange to be represented by one atomic flow. | `eu-jrc-nfm-bref-2017` |
| `validate_uuid_semantics` | UUID-bearing rows | Confirm flow type, base name, property, unit group, compartment, and physical state; do not substitute a broader species group or a route-specific product for another row. |  |
| `validate_internal_loops` | Recycle and recovery | Reject double counting of internally returned matte, slag, dust, water, acid, or heat as both gross output and new input. | `eu-jrc-nfm-bref-2017` |
| `validate_direct_emissions` | Air and water outputs | Require direct foreground emissions after abatement and exclude upstream electricity and purchased-input production emissions from direct rows. | `eu-jrc-nfm-bref-2017` |
| `validate_balances` | Material accounting | Require disclosed Ni and S balance closure and explanations for all material discrepancies above the site-defined measurement uncertainty. | `eu-jrc-nfm-bref-2017` |
| `validate_ranges` | Quantity screening | Treat all inventory amounts as foreground values; no external QA range is approved until two independent, original-text-verified, boundary-compatible sources support it. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset eligible for review as a `secondary_dataset` or `background_dataset` after all unresolved identities and evidence needs are addressed |
| downstream_use | Product systems requiring a declared nickel matte, nickel oxide sinter, or other nickel metallurgy intermediate |
| allowed_use | Use for the reported product form, route, feed class, site geography, composition, technology, abatement, and reporting period, or for a justified close match with all differences disclosed |
| excluded_use | Do not use as a proxy for nickel ore/concentrate, ferro-nickel, nickel pig iron, refined nickel, final-market nickel chemicals, or a different intermediate route without documented representativeness |
| required_metadata | PCR id and version; product name and form; route; site and geography; reporting period; feed class; mass/moisture/dry solids; Ni/S/Co/Cu assays; energy and oxygen boundaries; slag/dust/water recycle; direct-release compartments; allocation method; upstream dataset identities |
| required_quality_disclosure | Temporal and technological representativeness; measurement and assay methods; meter and laboratory QA/QC; data completeness; mass and element balance closure; missing-data treatment; allocation sensitivity; unresolved UUID and range-evidence status |
| update_trigger | Change in product form, feed class, route, furnace/reactor, energy or oxygen supply boundary, sulfur capture, slag/dust recycle, wastewater treatment, allocation, or a material shift in mass or element balances |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, code 41421. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official English category identity and classification scope |
| `china-mof-tariff-2013` | official_guidance | Ministry of Finance of the People's Republic of China, 2013 tariff schedule table, lines 75011000, 75012010, and 75012090. https://gss.mof.gov.cn/gzdt/zhengcefabu/201306/P020130708509079068339.pdf (retrieved 2026-09-04) | Professional Chinese terminology and HS 7501 boundary corroboration |
| `eu-jrc-nfm-bref-2017` | official_guidance | Cusano, G. et al., *Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries*, European Commission JRC, EUR 28648 EN, JRC107041, 2017, doi:10.2760/8224. https://publications.jrc.ec.europa.eu/repository/handle/JRC107041 (retrieved 2026-09-04) | Nickel route decomposition, foreground exchanges, recovery loops, direct-emission boundary, collection, and quality rules |
