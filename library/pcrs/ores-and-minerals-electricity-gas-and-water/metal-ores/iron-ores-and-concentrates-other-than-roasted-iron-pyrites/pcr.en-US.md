---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.iron-ores-and-concentrates-other-than-roasted-iron-pyrites
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Iron ores and concentrates, other than roasted iron pyrites

## 1. Scope and Applicability

This PCR produces site-specific foreground inventories for iron ores and iron concentrates at the declared mine or beneficiation gate. It covers direct-shipping ore, lump ore, fines and non-agglomerated concentrates from surface or underground extraction and physical beneficiation. Magnetite and hematite routes must be distinguished. Roasted iron pyrites, fired pellets, sinter, direct-reduced iron, pig iron and steel are excluded. Pelletizing, sintering and metallurgical reduction require separate downstream methodology. Magnetic roasting or chemical leaching requires an explicitly extended route inventory and cannot be represented as ordinary physical separation.

The reference is a declared product quantity, not an assertion that different ore grades provide equal furnace performance. This PCR defines its own foreground scope and collection requirements; technical sources support process applicability, rather than industry-wide recipes or consumption defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.iron-ores-and-concentrates-other-than-roasted-iron-pyrites |
| classification_refs | CPC 3.0:14100; classification context only |
| covered_products | Direct-shipping iron ore; lump ore; iron ore fines; non-agglomerated iron concentrate |
| excluded_products | Roasted iron pyrites; pellets; sinter; metallic iron; steel |
| representative_product | Dewatered iron concentrate with declared dry-basis total Fe assay and particle size |
| production_route | Extraction, crushing/screening, conditional grinding and magnetic/gravity separation, conditional flotation, dewatering and gate handling |
| market_state | Bulk ore or concentrate; moisture, mineralogy, size and grade declared at gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply iron-bearing mineral feedstock for downstream ironmaking preparation |
| How much | 1 kg dry product at the declared gate |
| How well | Declare total Fe on a dry basis, mineralogy, size distribution, moisture, SiO2, Al2O3, P and S; no universal minimum grade is imposed |
| How long or cycle | One gate delivery; no service-life requirement |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Concentrate powder `3d8f36b6-aab1-4687-ac75-00bf966ed458` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | mine and plant location; reporting period; gate; extraction or purchased-feed start; product form; ore mineralogy; route; dry-basis Fe assay; moisture basis and sampling method; particle size; SiO2; Al2O3; P; S; saleable dry mass; upstream-link coverage; allocation method |

The object above represents the concentrate route. An ore/lump/fines dataset must use the matching product identity in both the reference object and `final_product`; confirmed Iron ore `aa72a314-73ed-4400-95a0-a8f9f837a27f` is an ore candidate, not an automatic concentrate substitute. Preserve the 1 kg dry basis and declare the actual grade/form. A linked provider must use the same moisture convention; if its flow mass is as-received, convert the exchange to wet mass with the measured moisture and expose 1 kg dry equivalent in metadata. Never reinterpret a provider flow silently. Required qualifiers must appear in the foreground data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| dry_reference | reference product | Mass | kg | Use 1 kg dry product. Collect wet mass and matched wet-basis moisture by cp_product; remove free moisture only, not chemically bound water. |
| grade_basis | ore and concentrate | Mass fraction | kg/kg | Record total Fe as a dry-basis mass fraction. Convert reported percent by division by 100; contained Fe does not replace product mass. |
| energy_basis | `site_electricity` | Net calorific value | MJ | Convert metered kWh to MJ using 3.6 MJ/kWh. The provider voltage must match the declared meter boundary. |
| water_basis | water and slurry | Volume; Mass | m3; kg | Keep water volume, slurry wet mass and solids dry mass separate. Convert only with measured density/solids fraction for the same sample. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Either in-situ ore at the mine or purchased ore entering a separately declared beneficiation plant |
| starting_condition_role | Extraction foreground or beneficiation-only foreground, explicitly distinguished |
| product_classification_scope | Iron ores and non-agglomerated concentrates; CPC 3.0:14100 provides classification context |
| recursive_input_rule | Purchased same-category ore enters once as an input with an upstream provider; internal middlings and recycle do not restart category tracing |
| upstream_dataset_requirement | Link purchased feed, fuel, electricity, reagents, transport and off-site waste treatment; disclose geography, technology, moisture basis and coverage |
| disclosure | Gate, process coverage, stock changes, stripping, water sources, tailings fate, infrastructure/closure treatment and omissions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all datasets | Include the actual drilling, extraction, hauling, crushing, separation and dewatering stages within the declared foreground; include purchased-feed transport to the plant. | `epa-iron-1994` |
| boundary_services | site operations | Include pumping, dust control, tailings handling and mine-water treatment. Recycled water is internal throughput; record fresh withdrawals separately. | `ifc-mining-2007` |
| boundary_start | purchased ore | A beneficiation-only package must retain the upstream ore link; it cannot claim cradle-to-gate coverage when extraction burdens are absent. Internal mined ore carries no second upstream ore provider. |  |
| boundary_extension | lifecycle coverage | Exclude downstream agglomeration, smelting and customer transport from this gate inventory. Declare exploration, capital equipment, mine development, closure and post-closure coverage; include attributable long-term waste management or document an assessed omission, never silently assume zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mining | Extraction and internal ore haul | conditional | In-situ extraction is inside the declared boundary | Ore recovery and waste-rock generation | per 1 kg reference flow |
| beneficiation | Crushing, screening and physical separation | conditional | The actual route crushes, screens, grinds or separates ore | Prepare size and recover iron-bearing minerals | per 1 kg reference flow |
| flotation | Flotation upgrading | conditional | The actual route uses flotation | Route-specific reagent use and separation | per 1 kg reference flow |
| finishing | Dewatering, product control and gate handling | required | All datasets; dewatering only where physically performed | Saleable product release | per 1 kg reference flow |
| site_services | Utilities, tailings and water management | required | All datasets, scaled to attributable activity | Single site utility ledger and environmental controls | per 1 kg reference flow |

All exchange amounts use the same reporting-period saleable dry-output denominator D in kg. Internal ore transfers cancel on consolidation. Concentrate movements between beneficiation, flotation and finishing are stage-balance observations in the collection protocols, not additional product exchanges in this gate inventory; only final_product is the completed concentrate output. Tailings and rock receive on-site management or an explicitly linked off-site treatment, once. On-site final deposited stocks are tracked physically, not invented as elementary emissions. The site-services ledger records all utilities and direct releases once; stage submeter values must reconcile to it, not be added again.

Each card is conditional on the named exchange occurring. These are concrete example identities, not a complete site recipe: add each actual explosive, collector, frother, fuel, lubricant, liner, packaging item, recovered co-product, waste and emitted substance as its own card with matched identity and protocol. Include CO, SO2, CH4, N2O, coarse/fine dust, nitrate and dissolved metals where source records establish releases. Do not silently assign zero when unmeasured. Alternate reagents require separate identities, not a renamed UUID.

### Process: Extraction and internal ore haul (`mining`)

#### Inputs

##### Product flows

###### Emulsion Explosive (`mining_explosive`)

Issued emulsion-explosive mass / D; only when this formulation is used. Add each other actual explosive and detonator separately.

- Selected flow: Emulsion Explosive `eb58ee82-ee46-4306-baef-51dfef1d1ccc`
- Flow property / unit: Mass / kg
- Amount rule: Issued emulsion-explosive mass / D; only when this formulation is used. Add each other actual explosive and detonator separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining`
- Sources: `epa-iron-1994`

##### Waste flows

##### Elementary flows

###### Iron ore, in ground (`ore_resource`)

Dry extracted ore mass / D; ore mass including gangue, not contained Fe; exclude barren overburden.

- Selected flow: Iron ore, in ground `a41972a3-173d-4d12-8394-0a0da769234b`
- Flow property / unit: Mass / kg
- Amount rule: Dry extracted ore mass / D; ore mass including gangue, not contained Fe; exclude barren overburden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining`
- Sources:

#### Outputs

##### Product flows

###### Iron ore (`mined_ore`)

Dry mined ore transferred / D; record stock change and loss. Internal transfer only when linked to beneficiation.

- Selected flow: Iron ore `aa72a314-73ed-4400-95a0-a8f9f837a27f`
- Flow property / unit: Mass / kg
- Amount rule: Dry mined ore transferred / D; record stock change and loss. Internal transfer only when linked to beneficiation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining`
- Sources:

##### Waste flows

###### Iron-mine waste rock (`waste_rock`)

Dry waste-rock mass / D; includes separately identified stripping/development rock, with fate and stock changes.

- Selected flow: Iron-mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Dry waste-rock mass / D; includes separately identified stripping/development rock, with fate and stock changes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining`
- Sources:

###### Iron-mine overburden soil (`overburden`)

Removed soil mass / D when stripping occurs; record dry basis and restoration storage separately.

- Selected flow: Iron-mine overburden soil
- Flow property / unit: Mass / kg
- Amount rule: Removed soil mass / D when stripping occurs; record dry basis and restoration storage separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining`
- Sources:

##### Elementary flows

### Process: Crushing, screening and physical separation (`beneficiation`)

#### Inputs

##### Product flows

###### Iron ore (`ore_feed`)

Dry ore feed consumed / D, adjusted for feed stocks. Internal mined feed and externally purchased feed are separately tagged.

- Selected flow: Iron ore `aa72a314-73ed-4400-95a0-a8f9f837a27f`
- Flow property / unit: Mass / kg
- Amount rule: Dry ore feed consumed / D, adjusted for feed stocks. Internal mined feed and externally purchased feed are separately tagged.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_beneficiation`
- Sources:

###### Steel ball (`grinding_balls`)

Net steel-ball consumption / D when wet steel-ball milling applies and the material matches the selected identity; reconcile purchases, additions and ball stocks.

- Selected flow: Steel ball `d5f10af9-1429-4a11-b47f-71173cc13b2f`
- Flow property / unit: Mass / kg
- Amount rule: Net steel-ball consumption / D when wet steel-ball milling applies and the material matches the selected identity; reconcile purchases, additions and ball stocks.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_beneficiation`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Iron-ore separation tailings (`separation_tailings`)

Dry tailings solids / D; collect slurry wet mass and solids fraction separately; declare sulfide content and management fate.

- Selected flow: Iron-ore separation tailings
- Flow property / unit: Mass / kg
- Amount rule: Dry tailings solids / D; collect slurry wet mass and solids fraction separately; declare sulfide content and management fate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_beneficiation`
- Sources: `epa-iron-1994`

##### Elementary flows

### Process: Flotation upgrading (`flotation`)

#### Inputs

##### Product flows

###### corn starch (`flotation_starch`)

Issued corn-starch dry mass / D only when corn starch is used as depressant; distinguish gelatinization water.

- Selected flow: corn starch `982918a4-54b1-4792-9ee5-2f3155d4e929`
- Flow property / unit: Mass / kg
- Amount rule: Issued corn-starch dry mass / D only when corn starch is used as depressant; distinguish gelatinization water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flotation`
- Sources:

###### Sodium hydroxide (`flotation_naoh`)

NaOH dry-equivalent mass / D when used; record formulation concentration and actual solution mass without counting dilution water twice.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: NaOH dry-equivalent mass / D when used; record formulation concentration and actual solution mass without counting dilution water twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flotation`
- Sources:

###### Dodecylamine acetate (`flotation_collector`)

Issued formulated collector mass / D only when this exact chemical is used; document purity and reject other amines as automatic substitutes.

- Selected flow: Dodecylamine acetate
- Flow property / unit: Mass / kg
- Amount rule: Issued formulated collector mass / D only when this exact chemical is used; document purity and reject other amines as automatic substitutes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flotation`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Iron-ore flotation tailings (`flotation_tailings`)

Dry flotation-tailings solids / D; retain reagent composition and receiving management route.

- Selected flow: Iron-ore flotation tailings
- Flow property / unit: Mass / kg
- Amount rule: Dry flotation-tailings solids / D; retain reagent composition and receiving management route.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flotation`
- Sources:

##### Elementary flows

### Process: Dewatering, product control and gate handling (`finishing`)

#### Inputs

##### Product flows

###### Polyacrylamide (`dewatering_flocculant`)

Issued formulated polyacrylamide mass / D only where used; disclose ionic form and active concentration.

- Selected flow: Polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Issued formulated polyacrylamide mass / D only where used; disclose ionic form and active concentration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Concentrate powder (`final_product`)

1 kg

- Selected flow: Concentrate powder `3d8f36b6-aab1-4687-ac75-00bf966ed458`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Utilities, tailings and water management (`site_services`)

#### Inputs

##### Product flows

###### Alternating current (`site_electricity`)

Metered attributable electricity in MJ / D; match 1–35 kV consumption boundary. Count mining, milling, flotation, filters, pumps and treatment once in this site ledger.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered attributable electricity in MJ / D; match 1–35 kV consumption boundary. Count mining, milling, flotation, filters, pumps and treatment once in this site ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Diesel fuel (`site_diesel`)

Diesel consumed in kg / D; use batch density for volume records and retain equipment allocation. Supplier fuel production and direct combustion are separate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Diesel consumed in kg / D; use batch density for volume records and retain equipment allocation. Supplier fuel production and direct combustion are separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Process Water (`purchased_water`)

Purchased treated process-water mass / D when supplied externally; do not also record supplier abstraction as direct site withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Purchased treated process-water mass / D when supplied externally; do not also record supplier abstraction as direct site withdrawal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

###### Hydrated lime (`neutralization_lime`)

Issued Ca(OH)2 product mass / D only when neutralization uses hydrated lime; record purity.

- Selected flow: Hydrated lime
- Flow property / unit: Mass / kg
- Amount rule: Issued Ca(OH)2 product mass / D only when neutralization uses hydrated lime; record purity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Waste flows

##### Elementary flows

###### river water (`river_withdrawal`)

Direct river withdrawal in m3 / D when present; exclude internal recirculation.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Direct river withdrawal in m3 / D when present; exclude internal recirculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### ground water (`groundwater_withdrawal`)

Direct groundwater abstraction including mine dewatering in m3 / D when present; identify reuse, discharge and consumed fraction.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Direct groundwater abstraction including mine dewatering in m3 / D when present; identify reuse, discharge and consumed fraction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### Occupation, mineral extraction site (`mine_land_occupation`)

Occupied mining and waste-management area multiplied by occupation duration / D; declare land class and avoid overlapping areas.

- Selected flow: Occupation, mineral extraction site
- Flow property / unit: Area*time / m2*a
- Amount rule: Occupied mining and waste-management area multiplied by occupation duration / D; declare land class and avoid overlapping areas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`
- Sources:

#### Outputs

##### Product flows

##### Waste flows

###### Iron-mine wastewater (`offsite_wastewater`)

Transferred untreated or partly treated wastewater wet mass / D only for off-site treatment; link the receiving treatment and do not duplicate on-site releases.

- Selected flow: Iron-mine wastewater
- Flow property / unit: Mass / kg
- Amount rule: Transferred untreated or partly treated wastewater wet mass / D only for off-site treatment; link the receiving treatment and do not duplicate on-site releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Iron-mine water-treatment sludge (`water_treatment_sludge`)

Sludge dry mass / D with moisture and destination; account treatment separately from tailings.

- Selected flow: Iron-mine water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Sludge dry mass / D with moisture and destination; account treatment separately from tailings.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### carbon dioxide (fossil) (`direct_fossil_co2`)

Direct fossil CO2 released to air in kg / D from on-site fuel and blasting; use measured emissions or a documented fuel-carbon balance, not electricity-provider emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct fossil CO2 released to air in kg / D from on-site fuel and blasting; use measured emissions or a documented fuel-carbon balance, not electricity-provider emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### particles (PM2.5) (`direct_pm25`)

Measured airborne PM2.5 kg / D after controls from mining, crushing, handling and combustion; do not treat captured dust as released PM2.5.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured airborne PM2.5 kg / D after controls from mining, crushing, handling and combustion; do not treat captured dust as released PM2.5.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen oxides, to air (`direct_nox`)

Measured NOx mass expressed as NO2 / D for engines and blasting where released; record measurement basis.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured NOx mass expressed as NO2 / D for engines and blasting where released; record measurement basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Water, to surface water (`effluent_water`)

Discharged water in m3 / D after on-site treatment; retain receiving basin and release point, separately from wastewater transferred to a treatment provider.

- Selected flow: Water, to surface water
- Flow property / unit: Volume / m3
- Amount rule: Discharged water in m3 / D after on-site treatment; retain receiving basin and release point, separately from wastewater transferred to a treatment provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

###### Iron, to fresh water (`effluent_iron`)

Measured dissolved/total iron load in kg / D at final discharge; specify analytical fraction and avoid duplicating the same load.

- Selected flow: Iron, to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Measured dissolved/total iron load in kg / D at final discharge; specify analytical fraction and avoid duplicating the same load.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | multiple saleable outputs | First investigate subdivision or system expansion. Prefer measured process-specific attribution; an expanded-system result must remain labelled as such. If unavoidable, use a justified underlying physical relationship, then a documented other relationship such as economic value. | `eu-ef-2021` |
| allocation_ore_grades | lump, fines and concentrate | Do not allocate common mining burdens by contained Fe automatically. If economic allocation is justified, share_i = dry_mass_i * price_i / sum(dry_mass_j * price_j); use comparable net gate prices, same period and moisture basis, disclose price sensitivity and keep output-specific finishing burdens direct. | `eu-ef-2021` |
| allocation_waste | tailings, overburden and waste rock | Disposal materials are not saleable co-products merely because they have mass. Retain attributable handling and treatment burdens. A demonstrated saleable recovered product requires a separate identity, specification, buyer evidence and justified allocation; do not add an unsupported avoided-production credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | finishing | saleable output and moisture | weighing and assay | batch; wet mass W; wet-basis moisture w; dry-basis Fe fraction f; size; impurities; stocks; gate receipts | Calibrated weighbridge or belt scale; matched lot moisture sampling and laboratory assay. Use ISO 3087 or a disclosed validated equivalent; the public ISO scope does not supply the complete laboratory procedure. | kg; kg/kg | each lot | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |
| cp_mining | mining | ore, explosive, overburden and rock | mine production records | pit or stope; ore tonnes; moisture; explosive issue; rock/soil volumes; density; stock change; destinations | Reconcile mine survey, calibrated scales, drilling/blast logs and issue records; convert surveyed volume with sampled material density. | kg | shift and blast | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |
| cp_beneficiation | beneficiation | feed, concentrate, grinding media and tailings | plant mass balance | feed and product weights; moisture; Fe assay; media additions and stocks; tailings slurry mass; solids fraction | Matched feed/product samples, scales and slurry density/solids tests; measure circulating middlings separately. | kg; kg/kg | shift and composite sample | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |
| cp_flotation | flotation | flotation feed, product, reagents and rejects | reagent and plant records | chemical name; CAS; formulation; concentration; issued mass; opening and closing stocks; concentrate and tailings solids | Verify safety data sheets and issue logs; weigh or meter each chemical separately; reconcile stage mass and assay. | kg | batch and shift | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |
| cp_utilities | site_services | electricity and diesel | utility meters and fuel stock ledger | meter kWh; voltage; diesel mass or litres; density; receipts; stocks; equipment hours; attribution shares | Dedicated meters and fuel records; reconcile whole-site totals to attributable activities and exclude contractor fuel already included in a service provider. | MJ; kg | daily, reconciled monthly | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |
| cp_water | site_services | withdrawal, purchased water, reuse and discharge | water balance | source; basin; inflow; purchased water; return water; discharge; evaporation; product/tailings retained water; stock change | Source and outfall meters with basin identification; retain a separate internal-circulation ledger. | m3; kg | daily and seasonal reconciliation | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |
| cp_waste | site_services | waste fate and treatment | treatment and disposal ledger | tailings solids; wet mass; sulfate/sulfide characterization; neutralizer; sludge; destination; storage; closure plan | Weighbridge, slurry measurements, treatment logs and receiving manifests; record on-site management inventories and assessed future requirements separately. | kg | transfer and monthly balance | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |
| cp_emissions | site_services | direct air and water releases | monitoring or documented calculation | source; substance; compartment; concentration; gas/liquid flow; operating hours; control; fuel carbon; factor source; detection limit | Representative stack, fugitive and outfall measurements; load = concentration * matched flow * time with explicit unit conversion. Fuel-carbon estimates require measured composition and oxidation assumptions. | kg | operating campaign and permit schedule | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |
| cp_land | site_services | land occupation | survey and permit map | polygon; land class; area; duration; overlapping boundary; reclamation state | GIS/survey polygons and mine plan; distinguish occupation from transformation and record each transformation land class separately. | m2*a | annual and land change | same declared reporting period | declared mine/plant; no unrelated production | per 1 kg reference flow | calibration, source records, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| dry_mass | product and intermediate solids | dry_mass = W * (1 - w); D = sum(saleable dry mass); w is moisture fraction on wet mass, 0 <= w < 1. Reconcile production = dispatch + closing stock - opening stock + identified losses. | W; w; cp_product | dry_mass; D | `iso-moisture-2020` |
| normalize_period | all inventory rows | Normalized exchange = attributable reporting-period exchange / D; D is positive saleable dry-output mass in kg; final_product = 1 kg dry product. Never average batch intensities without mass weighting. | period totals; D; allocation shares | exchange per 1 kg reference flow |  |
| fe_recovery | beneficiation and flotation | Contained Fe = dry solids mass * dry-basis Fe fraction; Fe recovery = Fe in recovered product / Fe in consumed feed, with stock changes and all exits reconciled. | dry masses; Fe assays; stocks | contained Fe; recovery |  |
| water_reconcile | site water ledger | External inflows = discharge + evaporation + water exported in product/waste + storage increase; internal return water cancels. Do not equate gross withdrawal with net consumption. | cp_water; moisture; stocks | water balance residual | `ifc-mining-2007` |
| energy_conversion | site_electricity; site_diesel | Electricity MJ = metered kWh * 3.6; diesel kg = measured litres * batch density in kg/L; on-site generation inputs are recorded once and internal generated power is not purchased grid power. | cp_utilities; density | MJ; kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_period | all collection protocols | Use one common representative reporting period, normally a full operating year as this PCR collection design; shorter campaigns require reason, seasonality and capacity disclosure. | period register; operating hours |
| quality_identity | each exchange | Verify flow type, chemical identity, product form, compartment, reference property and bilingual official name; pending identities require resolution before publication. | supplier specification and identity records |
| quality_uncertainty | balance and estimates | Retain scale/meter calibration, assay representativeness, density, factor provenance and uncertainty; explain residuals using measured uncertainties rather than a universal fixed tolerance. | calibration; assays; balance sheets |
| quality_missing | unmeasured conditional flows | Distinguish absent, unmeasured, modelled and excluded exchanges; provide an estimate and source or a coverage gap, never an unsupported zero. | completeness register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference and final product | Require matching product UUID/form, 1 kg dry basis, all qualifiers, positive D and matched moisture/Fe assay. Wet-mass providers require explicit conversion. |  |
| validate_balance | all stages | Check dry-solid, contained-Fe and water balances with stock changes and uncertainty; recovery fractions must lie between zero and one unless a documented balance correction resolves the discrepancy. |  |
| validate_double_count | utilities, intermediates and wastes | Cancel internal ore/concentrate/water transfers; reconcile the single utility ledger. Match waste outputs to one management fate and include treatment burdens; supplier emissions are not site direct releases. |  |
| validate_coverage | dataset handoff | Report checks performed/skipped, missing measurements, unresolved identities, omitted stages and upstream coverage. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground gate inventory for the declared iron-ore product |
| downstream_use | secondary_dataset; background_dataset after coverage and quality assessment |
| allowed_use | Matched mineral feedstock supply to downstream preparation or ironmaking; separately labelled beneficiation-only use |
| excluded_use | Unqualified comparison across grade/form/routes; pellet or steel production; cradle-to-gate claims for incomplete upstream coverage |
| required_metadata | All reference qualifiers; inventory basis; route; gate; process coverage; providers; stock treatment; allocation shares; geography; time; land and waste-management scope |
| required_quality_disclosure | Measured/modelled coverage; unresolved identities; uncertainty; balance residuals; water source/basin; chemical formulation; emission compartments; omissions and long-term treatment |
| update_trigger | Changed orebody/grade, route, recovery, reagent formulation, utility supply, waste fate, gate or reporting-period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-iron-1994 | official_guidance | US EPA, EPA 530-R-94-030 (1994), Volume 3: Iron, §§1.4–1.5. https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/iron.pdf | Historical physical process descriptions: extraction, separation and tailings. Not current market shares, consumption factors, legal limits or universal grades. |
| ifc-mining-2007 | official_guidance | IFC / World Bank Group, Environmental, Health, and Safety Guidelines for Mining (10 December 2007), §1.1 Water Use. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water-balance and return-water distinctions; not iron-specific LCA consumption ranges. |
| iso-moisture-2020 | standard | ISO 3087:2020, Iron ores — Determination of the moisture content of a lot, public scope/catalogue. https://www.iso.org/standard/72159.html | Applicability of lot-moisture determination to natural and processed iron ores. Detailed laboratory method requires access to the actual standard or a validated equivalent. |
| eu-ef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I §4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | General multifunctionality hierarchy; citation does not assert full PEF conformity. |
