---
schema_version: 1
pcr_id: "pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.artificial-fur-and-articles-thereof-except-headgear"
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Artificial fur and articles thereof (except headgear)

## 1. Scope and Applicability

This PCR applies to CPC 3.0 code 28330: artificial fur in roll or made-up form and articles manufactured from artificial fur, except headgear. It covers synthetic-pile fabric formation and the finishing, backing, cutting, assembly, inspection, and packaging operations actually performed within the declared foreground boundary. Natural furskins, articles of natural fur, and headgear are outside scope. The manufacturer shall identify whether the reported output is artificial-fur fabric or a made-up article and shall disclose all included route steps. Sources: `unsd-cpc-3-0-2025`, `jrc-textiles-bref-2023`, `ziouzios-et-al-2026-artificial-fur-processing`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.artificial-fur-and-articles-thereof-except-headgear` |
| classification_refs | CPC 3.0 `28330`, exact |
| covered_products | Artificial-fur pile fabric and made-up artificial-fur articles other than headgear |
| excluded_products | Natural furskins; articles of natural fur; headgear; outputs that cannot be identified as CPC 28330 |
| representative_product | Finished, manufactured artificial fur or an artificial-fur article, at plant |
| production_route | Synthetic pile-fibre or yarn formation by knitting, weaving, or tufting as applicable; wet or dry finishing; optional coating or lamination; optional cutting and sewing; inspection and packaging |
| market_state | Finished product, manufactured; production mix, at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conforming artificial fur or a conforming artificial-fur article other than headgear, with the route and product form declared |
| How much | 1 kg net product mass |
| How well | Meets the manufacturer's released specification and is accepted after final inspection |
| How long or cycle | One manufacturing reporting period, normally twelve consecutive months, with deviations disclosed |
| reference_flow_link | Tiangong flow `ac47239d-883f-4063-bcc1-fc64b2ffc8fc`, Product flow, CPC 3.0 `28330`, state code `100` |

| Field | Value |
| --- | --- |
| Reference amount | `1` |
| Reference product flow | Artificial fur and articles thereof (except headgear) (`ac47239d-883f-4063-bcc1-fc64b2ffc8fc`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | Product form (fabric or article); fibre composition by mass; pile-construction technology; backing/coating/lamination status; dyeing and finishing route; included foreground processes; site and geography; reporting period; production mix; at-plant market state; recycled-content claim if any |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| measure_reference_mass | Reference product and intermediate textile products | Mass | kg | Determine net dry product mass on calibrated scales; exclude transport and sales packaging. | `pef-apparel-footwear-v3-1-2025` |
| measure_material_mass | Fibres, yarns, dyes, binders, adhesives, linings, sewing thread, and packaging | Mass | kg | Record each chemically or materially distinct input separately from purchase, dosing, or batch records; do not combine unlike materials. | `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025` |
| measure_water | Process water and wastewater | Volume | m3 | Use process or site meters and reconcile intake, retained moisture, and discharged wastewater for the reporting period. | `jrc-textiles-bref-2023` |
| measure_energy | Electricity, steam, and natural gas | Energy | kWh for electricity; MJ for steam and natural gas | Meter each carrier separately and convert invoice quantities using documented lower-heating-value or enthalpy data where applicable. | `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025` |
| measure_waste | Each separately managed waste stream | Mass | kg | Weigh each waste stream before treatment or removal; record rework returned to production separately from waste. | `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025` |
| measure_air_emission | Each direct air pollutant | Mass | kg | Use pollutant-specific stack monitoring or a calculation from measured fuel or chemical use and documented facility-specific factors; keep each pollutant separate. | `jrc-textiles-bref-2023` |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The declared foreground starts with received synthetic pile fibre, backing yarn, purchased artificial-fur fabric, or another explicitly named intermediate input. |
| starting_condition_role | `starting_material` |
| product_classification_scope | CPC 3.0 `28330`; artificial fur and articles thereof except headgear |
| recursive_input_rule | A purchased artificial-fur input that itself falls under CPC 28330 shall be modelled as a separate upstream dataset and shall not be counted again as foreground fibre or fabric production. |
| upstream_dataset_requirement | Provide traceable upstream datasets for fibres, yarns, chemicals, fuels, electricity, steam, water, packaging, and other purchased inputs. |
| disclosure | Declare the starting condition, all included and omitted route steps, treatment of same-category inputs, and the at-plant endpoint. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_foreground_operations | Foreground system | Include every operation controlled by the reporting manufacturer from the declared starting condition through released at-plant product: applicable pile formation, dyeing and finishing, coating or lamination, cutting and assembly, inspection, rework, and packaging. | `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025`, `ziouzios-et-al-2026-artificial-fur-processing` |
| boundary_upstream_inputs | Purchased inputs | Link each purchased material and energy carrier to a traceable upstream dataset; do not absorb upstream production into an unqualified foreground input. | `eu-pef-recommendation-2021-2279`, `pef-apparel-footwear-v3-1-2025` |
| boundary_same_category_input | Purchased artificial fur | Treat purchased CPC 28330 artificial fur as a recursive upstream product input and disclose its mass and supplier dataset; exclude the supplier's production from the reporting foreground. | `unsd-cpc-3-0-2025`, `eu-pef-recommendation-2021-2279` |
| boundary_downstream_exclusion | At-plant dataset | Exclude distribution, retail, use, maintenance, and end-of-life unless a broader lifecycle model explicitly adds those stages outside this foreground package. | `eu-pef-recommendation-2021-2279` |
| boundary_losses_and_treatment | Production losses | Include material losses, rework, direct air emissions, wastewater, and wastes generated by every included operation; link off-site treatment separately. | `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pile_fabric_formation | Pile fabric formation | conditional | Include when the foreground starts with fibre or yarn and forms the pile textile by knitting, weaving, or tufting. | synthetic-pile textile formation | 1 kg greige artificial-fur fabric |
| dyeing_and_finishing | Dyeing and finishing | conditional | Include when wet treatment, dyeing, washing, drying, heat setting, raising, brushing, or related finishing is performed. | colour and surface formation | 1 kg finished artificial-fur fabric |
| coating_and_lamination | Coating and lamination | conditional | Include when a binder, backing coat, adhesive, film, or laminate is applied and cured. | backing stabilisation or lamination | 1 kg backed artificial-fur fabric |
| cutting_and_assembly | Cutting and assembly | conditional | Include for made-up articles and any fabric product that is cut or sewn within the foreground. | article conversion | 1 kg conforming artificial-fur product |
| inspection_and_packaging | Inspection and packaging | required | Include for every released product. | final release and packing | 1 kg reference product |

### Process: Pile fabric formation (`pile_fabric_formation`)

#### Inputs

##### Product flows

###### Acrylic pile fibre (`acrylic_pile_fibre`)

Record received acrylic fibre used to form the pile as one material exchange.

- Selected flow: Acrylic staple fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass issued to the process, less documented returns to stores.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg greige artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pile_fabric_formation`
- Sources: `jrc-textiles-bref-2023`, `ziouzios-et-al-2026-artificial-fur-processing`

###### Polyester pile fibre (`polyester_pile_fibre`)

Record received polyester fibre used to form the pile separately from acrylic fibre.

- Selected flow: Polyester staple fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass issued to the process, less documented returns to stores.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg greige artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pile_fabric_formation`
- Sources: `jrc-textiles-bref-2023`, `ziouzios-et-al-2026-artificial-fur-processing`

###### Polyester backing yarn (`polyester_backing_yarn`)

Record backing yarn crossing into pile formation as one yarn exchange.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass / kg
- Amount rule: Measured net yarn mass consumed after deducting reusable returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg greige artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pile_fabric_formation`
- Sources: `jrc-textiles-bref-2023`

###### Formation electricity (`formation_electricity`)

Record electricity used by knitting, weaving, tufting, trimming, and local extraction equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for this process; allocate only residual shared use under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg greige artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pile_fabric_formation`
- Sources: `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige pile fabric (`greige_artificial_fur_fabric`)

Record accepted greige artificial-fur fabric leaving pile formation.

- Selected flow: Greige artificial-fur fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass at the process gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg greige artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pile_fabric_formation`
- Sources: `jrc-textiles-bref-2023`, `ziouzios-et-al-2026-artificial-fur-processing`

##### Waste flows

###### Waste acrylic fibre (`waste_acrylic_fibre`)

Record acrylic lint, trim, and rejected acrylic pile fibre sent to waste management.

- Selected flow: Waste acrylic fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured mass leaving the process as acrylic-fibre waste; exclude internal rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg greige artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pile_fabric_formation`
- Sources: `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025`

###### Waste polyester fibre (`waste_polyester_fibre`)

Record polyester lint, trim, and rejected polyester pile fibre sent to waste management.

- Selected flow: Waste polyester fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured mass leaving the process as polyester-fibre waste; exclude internal rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg greige artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pile_fabric_formation`
- Sources: `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025`

##### Elementary flows

###### Synthetic fibre dust to air (`synthetic_fibre_dust_to_air`)

Record direct synthetic-fibre dust released after abatement; captured lint remains a waste flow.

- Selected flow: Synthetic fibre dust to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored or calculated release after abatement.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg greige artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_fabric_formation`
- Sources: `jrc-textiles-bref-2023`

### Process: Dyeing and finishing (`dyeing_and_finishing`)

Each dye and auxiliary actually used shall be added to the foreground package as its own chemically identified product-flow card; the two dye cards below apply only when those substances are used.

#### Inputs

##### Product flows

###### Greige pile fabric input (`finishing_greige_artificial_fur_fabric`)

Record greige artificial-fur fabric entering dyeing and finishing.

- Selected flow: Greige artificial-fur fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured process input mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

###### Finishing process water (`finishing_process_water`)

Record water supplied to dyeing, washing, and other wet finishing separately from steam.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process-water intake reconciled to the wet-finishing area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

###### Basic dye (`basic_dye`)

Record basic dye as one chemical exchange when it is used for acrylic coloration.

- Selected flow: Basic dye
- Flow property / unit: Mass / kg
- Amount rule: Actual dry-active dye mass dosed from recipe and batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

###### Disperse dye (`disperse_dye`)

Record disperse dye as one chemical exchange when it is used for polyester coloration.

- Selected flow: Disperse dye
- Flow property / unit: Mass / kg
- Amount rule: Actual dry-active dye mass dosed from recipe and batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

###### Finishing electricity (`finishing_electricity`)

Record electricity used by wet-treatment, drying, heat-setting, raising, brushing, and extraction equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity; allocate only residual shared use under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025`

###### Finishing natural gas (`finishing_natural_gas`)

Record natural gas combusted on site for this process separately from purchased steam.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered gas converted on a documented lower-heating-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

###### Finishing purchased steam (`finishing_purchased_steam`)

Record purchased steam as a carrier distinct from fuel and electricity.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam quantity converted using documented supply enthalpy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished artificial-fur fabric (`finished_artificial_fur_fabric`)

Record accepted fabric after dyeing and finishing.

- Selected flow: Finished artificial-fur fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass after conditioning to the declared moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`, `ziouzios-et-al-2026-artificial-fur-processing`

##### Waste flows

###### Textile dyeing wastewater (`textile_dyeing_wastewater`)

Record the aqueous waste stream transferred to on-site or off-site wastewater treatment.

- Selected flow: Textile dyeing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge volume at the wet-finishing boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

###### Fossil carbon dioxide from finishing (`finishing_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide from on-site natural-gas combustion.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from measured gas use and a documented facility-specific factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

###### Nitrogen oxides from finishing (`finishing_nitrogen_oxides`)

Record direct nitrogen oxides from on-site combustion as a separate pollutant.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from measured gas use and a documented facility-specific factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

###### NMVOC from finishing (`finishing_nmvoc`)

Record direct non-methane volatile organic compound emissions from drying, curing, or finishing.

- Selected flow: Non-methane volatile organic compounds, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored or calculated release after abatement.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg finished artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dyeing_and_finishing`
- Sources: `jrc-textiles-bref-2023`

### Process: Coating and lamination (`coating_and_lamination`)

Each binder, coating component, solvent, and adhesive actually used shall be added separately; the following material cards apply only to the identified route.

#### Inputs

##### Product flows

###### Finished fabric input (`coating_finished_artificial_fur_fabric`)

Record finished artificial-fur fabric entering backing or lamination.

- Selected flow: Finished artificial-fur fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured process input mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`

###### Aqueous SBR latex (`aqueous_styrene_butadiene_latex`)

Record aqueous styrene-butadiene latex as one binder exchange when used.

- Selected flow: Styrene-butadiene latex, aqueous
- Flow property / unit: Mass / kg
- Amount rule: Actual wet product mass dosed from batch and purchase records, with solids content disclosed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`, `ziouzios-et-al-2026-artificial-fur-processing`

###### Polyurethane adhesive (`polyurethane_adhesive`)

Record polyurethane adhesive as one material exchange when used for lamination.

- Selected flow: Polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: Actual wet product mass dosed from batch and purchase records, with solids content disclosed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`

###### Coating electricity (`coating_electricity`)

Record coating-line, laminator, ventilation, and curing electricity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity; allocate only residual shared use under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025`

###### Coating natural gas (`coating_natural_gas`)

Record natural gas combusted on site for drying or curing this process.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered gas converted on a documented lower-heating-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Backed artificial-fur fabric (`backed_artificial_fur_fabric`)

Record accepted coated or laminated artificial-fur fabric.

- Selected flow: Backed artificial-fur fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass after curing and conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`, `ziouzios-et-al-2026-artificial-fur-processing`

##### Waste flows

###### Waste SBR latex (`waste_styrene_butadiene_latex`)

Record unused or rejected styrene-butadiene latex sent to waste management.

- Selected flow: Waste styrene-butadiene latex
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass discarded; exclude recovered material returned to the same process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`

###### Waste polyurethane adhesive (`waste_polyurethane_adhesive`)

Record unused or rejected polyurethane adhesive sent to waste management.

- Selected flow: Waste polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass discarded; exclude recovered material returned to the same process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

###### Fossil carbon dioxide from coating (`coating_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide from coating-line combustion.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from measured gas use and a documented facility-specific factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`

###### Nitrogen oxides from coating (`coating_nitrogen_oxides`)

Record direct nitrogen oxides from coating-line combustion separately.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from measured gas use and a documented facility-specific factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`

###### NMVOC from coating (`coating_nmvoc`)

Record direct non-methane volatile organic compound emissions from coating, lamination, drying, and curing.

- Selected flow: Non-methane volatile organic compounds, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored or calculated release after abatement.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg backed artificial-fur fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_and_lamination`
- Sources: `jrc-textiles-bref-2023`

### Process: Cutting and assembly (`cutting_and_assembly`)

Only the fabric construction actually consumed shall be recorded; do not report both unbacked and backed fabric unless both physically enter the article.

#### Inputs

##### Product flows

###### Unbacked fabric for assembly (`assembly_finished_artificial_fur_fabric`)

Record unbacked finished artificial-fur fabric actually consumed by cutting.

- Selected flow: Finished artificial-fur fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass less reusable fabric returned to inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming artificial-fur product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_and_assembly`
- Sources: `pef-apparel-footwear-v3-1-2025`, `ziouzios-et-al-2026-artificial-fur-processing`

###### Backed fabric for assembly (`assembly_backed_artificial_fur_fabric`)

Record backed artificial-fur fabric actually consumed by cutting separately from unbacked fabric.

- Selected flow: Backed artificial-fur fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass less reusable fabric returned to inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming artificial-fur product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_and_assembly`
- Sources: `pef-apparel-footwear-v3-1-2025`, `ziouzios-et-al-2026-artificial-fur-processing`

###### Polyester sewing thread (`polyester_sewing_thread`)

Record polyester sewing thread used in assembly as one material exchange.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Measured issued thread mass less documented returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming artificial-fur product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_and_assembly`
- Sources: `pef-apparel-footwear-v3-1-2025`

###### Polyester lining fabric (`polyester_lining_fabric`)

Record polyester lining fabric when it is physically incorporated in the article.

- Selected flow: Polyester lining fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured issued lining mass less reusable returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming artificial-fur product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_and_assembly`
- Sources: `pef-apparel-footwear-v3-1-2025`

###### Assembly electricity (`assembly_electricity`)

Record cutting, sewing, local extraction, and assembly electricity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity; allocate only residual shared use under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming artificial-fur product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_and_assembly`
- Sources: `pef-apparel-footwear-v3-1-2025`, `ziouzios-et-al-2026-artificial-fur-processing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled artificial-fur product (`assembled_artificial_fur_product`)

Record conforming assembled output before final packaging.

- Selected flow: Artificial fur and articles thereof (except headgear) (`ac47239d-883f-4063-bcc1-fc64b2ffc8fc`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) / kg
- Amount rule: Measured conforming output mass before sales packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming artificial-fur product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_and_assembly`
- Sources: `unsd-cpc-3-0-2025`, `pef-apparel-footwear-v3-1-2025`

##### Waste flows

###### Artificial-fur cutting offcuts (`artificial_fur_cutting_offcuts`)

Record composite cutting offcuts as the actual managed waste stream; disclose composition.

- Selected flow: Artificial-fur cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass leaving the process; exclude reusable pieces returned to production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming artificial-fur product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_and_assembly`
- Sources: `pef-apparel-footwear-v3-1-2025`

###### Waste polyester thread (`waste_polyester_thread`)

Record rejected or trimmed polyester sewing thread separately from fabric offcuts.

- Selected flow: Waste polyester thread
- Flow property / unit: Mass / kg
- Amount rule: Measured thread waste leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming artificial-fur product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_and_assembly`
- Sources: `pef-apparel-footwear-v3-1-2025`

##### Elementary flows

### Process: Inspection and packaging (`inspection_and_packaging`)

#### Inputs

##### Product flows

###### Unpacked artificial-fur product (`unpacked_artificial_fur_product`)

Record the conforming or inspected product entering final release and packaging.

- Selected flow: Artificial fur and articles thereof (except headgear) (`ac47239d-883f-4063-bcc1-fc64b2ffc8fc`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) / kg
- Amount rule: Measured net product mass entering this process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_and_packaging`
- Sources: `unsd-cpc-3-0-2025`, `pef-apparel-footwear-v3-1-2025`

###### LDPE packaging bag (`low_density_polyethylene_packaging_bag`)

Record low-density polyethylene bags as one packaging component.

- Selected flow: Low-density polyethylene packaging bag
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled mass incorporated in delivered packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_and_packaging`
- Sources: `pef-apparel-footwear-v3-1-2025`

###### Corrugated cardboard box (`corrugated_cardboard_box`)

Record corrugated cardboard boxes separately from plastic and paper labels.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled mass incorporated in delivered packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_and_packaging`
- Sources: `pef-apparel-footwear-v3-1-2025`

###### Paper product label (`paper_product_label`)

Record paper labels as one packaging component.

- Selected flow: Paper product label
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled mass incorporated in delivered packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_and_packaging`
- Sources: `pef-apparel-footwear-v3-1-2025`

###### Packaging electricity (`packaging_electricity`)

Record inspection, conveying, sealing, and packaging electricity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity; allocate only residual shared use under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_and_packaging`
- Sources: `pef-apparel-footwear-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product (`reference_product`)

Record one kilogram of released net product; packaging mass is an input and is excluded from this reference amount.

- Selected flow: Artificial fur and articles thereof (except headgear) (`ac47239d-883f-4063-bcc1-fc64b2ffc8fc`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) / kg
- Amount rule: Exactly 1 kg net conforming product per reference flow after annual normalization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_and_packaging`
- Sources: `unsd-cpc-3-0-2025`, `pef-apparel-footwear-v3-1-2025`

##### Waste flows

###### Rejected artificial-fur product (`rejected_artificial_fur_product`)

Record inspected product rejected and sent to waste management; reworked product is not waste.

- Selected flow: Rejected artificial-fur product
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected net product mass not returned to production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_and_packaging`
- Sources: `pef-apparel-footwear-v3-1-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | All foreground processes | First subdivide metered processes and material records or expand the system where justified so that allocation is avoided. | `eu-pef-recommendation-2021-2279` |
| physical_allocation | Residual shared inputs and emissions | If subdivision is not possible, allocate by a documented physical relationship that reflects how resource use or emissions change, using process time, metered throughput, or dry product mass as applicable. | `eu-pef-recommendation-2021-2279`, `pef-apparel-footwear-v3-1-2025` |
| economic_allocation_last_resort | Outputs lacking a defensible physical relationship | Use economic allocation only when subdivision, system expansion, and physical allocation are not feasible; disclose prices, period, currency, and sensitivity. | `eu-pef-recommendation-2021-2279` |
| waste_and_rework | Offcuts, rejects, and recovered material | Keep internal rework inside the process balance without treating it as a co-product; report material that leaves for recycling or treatment as a waste flow and document any credited downstream treatment outside this foreground package. | `eu-pef-recommendation-2021-2279`, `pef-apparel-footwear-v3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pile_fabric_formation | pile_fabric_formation | all atomic exchanges | Batch production, stores, meter, waste, and emission records | input mass; electricity; accepted output; fibre waste; dust; rework | Reconcile batch tickets, calibrated scales, submeter readings, waste transfer records, and dust monitoring or filter balance. | kg; kWh | Per batch and monthly reconciliation | One representative consecutive 12-month period or disclosed shorter campaign | Each foreground formation site | Sum by site and material or pollutant identity, then normalize to accepted greige-fabric mass. | Batch tickets, scale calibration, meter records, waste tickets, monitoring reports |
| cp_dyeing_and_finishing | dyeing_and_finishing | all atomic exchanges | Recipe, batch, water, utility, output, wastewater, and stack records | greige mass; each dye and auxiliary; water; electricity; gas; steam; finished mass; wastewater; each pollutant | Reconcile recipes and dosing records with purchase data, utility meters, product scales, wastewater meters, and pollutant-specific monitoring or calculations. | kg; m3; kWh; MJ | Per batch and monthly reconciliation | One representative consecutive 12-month period or disclosed shorter campaign | Each foreground finishing site | Sum each atomic flow by site, then normalize to accepted finished-fabric mass. | Recipe sheets, dosing calibration, meters, invoices, scale records, discharge and stack reports |
| cp_coating_and_lamination | coating_and_lamination | all atomic exchanges | Recipe, batch, utility, output, waste, and stack records | fabric mass; each binder or adhesive; solids content; electricity; gas; backed mass; each chemical waste; each pollutant | Reconcile line recipes and purchase records with calibrated dosing, utility meters, output scales, waste tickets, and pollutant-specific monitoring or calculations. | kg; kWh; MJ | Per batch and monthly reconciliation | One representative consecutive 12-month period or disclosed shorter campaign | Each foreground coating or lamination site | Sum each atomic flow by site, then normalize to accepted backed-fabric mass. | Recipe sheets, safety and supplier data, dosing calibration, meters, scale records, waste and stack reports |
| cp_cutting_and_assembly | cutting_and_assembly | all atomic exchanges | Bill of materials, issue, cutting, sewing, meter, output, and waste records | each fabric mass; thread; lining; electricity; product mass; offcuts; thread waste; rework | Reconcile the bill of materials with material issues and returns, calibrated output and waste scales, and electricity submeters. | kg; kWh | Per production order and monthly reconciliation | One representative consecutive 12-month period or disclosed shorter campaign | Each foreground assembly site | Sum each atomic flow by site and product form, then normalize to conforming product mass. | BOM, issue and return tickets, cutting reports, scale calibration, meter records |
| cp_inspection_and_packaging | inspection_and_packaging | all atomic exchanges | Inspection, packaging issue, meter, released-output, and reject records | unpacked product; each packaging component; electricity; released net product; rejected product | Reconcile inspection and release counts with net product weights, packaging issues and returns, meter data, and reject records. | kg; kWh | Per production order and monthly reconciliation | One representative consecutive 12-month period or disclosed shorter campaign | Each foreground final-release site | Sum each atomic flow by site, then normalize to released net product mass excluding packaging. | Inspection records, BOM, issue and return tickets, scale calibration, meter records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize_reference_mass | Every inventory exchange | `normalized exchange = reporting-period exchange / reporting-period conforming net product mass` | Atomic exchange quantity; conforming output mass in kg | Exchange per 1 kg reference product | `eu-pef-recommendation-2021-2279`, `pef-apparel-footwear-v3-1-2025` |
| calc_material_balance | Each material-processing step | Reconcile each material identity as input = conforming product incorporation + measured waste + measured direct release + documented stock change; investigate and disclose residuals. | Material issues and returns; output composition; wastes; direct releases; opening and closing stocks | Material balance and residual by material | `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025` |
| calc_process_loss | Formation, finishing, coating, and assembly | `loss fraction = measured non-reworked material waste / net material input`; keep each material or actual composite waste stream separate. | Net material input; measured waste; internal rework | Process loss fraction and waste mass | `pef-apparel-footwear-v3-1-2025` |
| calc_direct_combustion_emissions | On-site natural-gas combustion | Prefer pollutant-specific monitoring; otherwise calculate `emission = measured fuel energy × documented facility-specific emission factor` for each pollutant. | Fuel energy; pollutant-specific factor or monitored concentration and gas flow | One direct elementary flow per pollutant | `jrc-textiles-bref-2023` |
| calc_shared_utility_allocation | Shared electricity, steam, and fuel | Use direct submetering first; otherwise apply the physical allocation selected under Section 7 and document the driver and denominator. | Shared utility total; process-specific physical driver | Utility quantity assigned to one process | `eu-pef-recommendation-2021-2279`, `pef-apparel-footwear-v3-1-2025` |
| calc_bom_coverage | Final product composition | Reconcile the bill of materials to net product mass; the reported BOM shall cover at least 95% of product mass and 100% of main fabric, lining, padding, and metal components that are present. | Component masses; net product mass | BOM coverage and disclosed omissions | `pef-apparel-footwear-v3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_technology | Each included process | Foreground records shall represent the actual pile technology, fibre composition, finishing route, coating or lamination system, assembly method, and abatement used. | Process diagram, equipment list, recipes, BOM, product specification |
| dq_geography | Site and upstream datasets | Identify each foreground site and use geographically representative electricity, fuel, water, treatment, and purchased-material datasets. | Site addresses, supplier geography, dataset metadata |
| dq_time | Foreground data | Use a representative consecutive twelve-month period where possible; disclose campaign data, shutdowns, substitutions, and any extrapolation. | Dated meter, batch, purchase, production, and waste records |
| dq_precision | Measured and calculated exchanges | Preserve raw quantities, calibration status, calculation factors, allocation drivers, and reconciliation residuals so results can be reproduced. | Calibration certificates, raw extracts, calculation workbook, review log |
| dq_completeness | Materials and emissions | Meet the BOM coverage rule and separately record all known process chemicals, energy carriers, direct pollutants, wastewater, and managed waste streams; do not use a generic “other” card. | BOM reconciliation, recipe ledger, utility ledger, permits, waste register |
| dq_consistency | Multi-site or multi-route datasets | Apply the same reference mass, dry/net mass convention, flow identity, allocation hierarchy, and reporting period to every included site and route. | Consolidation procedure and site-level checks |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference_identity | Reference flow | Confirm Tiangong UUID `ac47239d-883f-4063-bcc1-fc64b2ffc8fc`, Product flow type, CPC 3.0 `28330`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg unit. | `unsd-cpc-3-0-2025` |
| validate_scope_and_route | Dataset scope | Reject natural fur, headgear, undeclared product form, or a dataset whose included route steps and starting condition cannot be determined. | `unsd-cpc-3-0-2025`, `ziouzios-et-al-2026-artificial-fur-processing` |
| validate_atomic_inventory | Process inventory | Confirm every card contains exactly one material, energy carrier, waste stream, or pollutant; require each actual dye, auxiliary, binder, adhesive, packaging component, fuel, and emission separately. | `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025` |
| validate_mass_balance | Material processes | Reperform material balances by identity and investigate unexplained residuals, omitted offcuts, wastewater transfers, stock changes, and rework. | `jrc-textiles-bref-2023`, `pef-apparel-footwear-v3-1-2025` |
| validate_energy_and_emissions | Utilities and direct releases | Reconcile electricity, steam, and natural gas separately to meters or invoices and verify that each direct pollutant has monitoring or a documented calculation basis. | `jrc-textiles-bref-2023` |
| validate_recursive_inputs | Purchased artificial fur | Confirm that same-category purchased fabric is linked once as an upstream product dataset and is not duplicated as foreground fibre or fabric manufacture. | `unsd-cpc-3-0-2025`, `eu-pef-recommendation-2021-2279` |
| validate_allocation | Shared processes and outputs | Verify the allocation hierarchy, driver, denominator, period, and sensitivity; fail a dataset that uses unsubstantiated allocation. | `eu-pef-recommendation-2021-2279` |
| validate_data_quality | Dataset evidence | Verify technology, geography, time, precision, completeness, and consistency evidence, including BOM and recipe reconciliation. | `eu-pef-recommendation-2021-2279`, `pef-apparel-footwear-v3-1-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for finished artificial fur or a made-up artificial-fur article other than headgear, normalized to 1 kg net product at plant |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product and facility inventories, lifecycle models, hotspot assessment, supplier-data exchange, and internal design assessment when the declared product form and route match |
| excluded_use | Natural fur, headgear, products outside CPC 28330, comparative claims with non-harmonized functions, and route substitution without disclosed adjustment |
| required_metadata | CPC code; reference-flow UUID; product form; fibre composition; pile technology; backing/coating status; dyeing and finishing route; included processes; site/geography; reporting period; allocation; production mix; at-plant state |
| required_quality_disclosure | Data sources, meter and scale coverage, BOM coverage, recipe completeness, allocation drivers, upstream dataset substitutions, balance residuals, and missing pollutant measurements |
| update_trigger | Change in fibre composition, pile technology, dye or finish, coating or lamination, site, energy system, allocation, product form, supplier dataset, or representative reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division. *Central Product Classification (CPC) Version 3.0: Explanatory Notes*, 2025. [Official PDF](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Exact CPC 28330 identity, covered product wording, and exclusion of headgear |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre. *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, 2023. [Official publication page](https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry) | Textile formation, finishing, coating and lamination operations; utility, wastewater, waste, and direct-emission collection |
| `pef-apparel-footwear-v3-1-2025` | Official guidance (`official_guidance`) | Technical Secretariat for the Apparel and Footwear PEFCR. *Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1*, 29 April 2025. [Official publication page](https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/) | Lifecycle-stage process map, BOM and manufacturing data, losses, energy mix, reporting period, and data-quality requirements |
| `eu-pef-recommendation-2021-2279` | Official guidance (`official_guidance`) | European Commission. *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, 2021. [ELI record](http://data.europa.eu/eli/reco/2021/2279/oj) | Boundary consistency, upstream linkage, allocation hierarchy, and validation basis |
| `ziouzios-et-al-2026-artificial-fur-processing` | Literature (`literature`) | Ziouzios, D.; Tsepoura, G.; Vasileiadis, V. “Artificial Fur Processing and Sustainability: A Conceptual Framework for Environmental Impact Assessment.” *Applied Sciences* 16 (2026): 4920. [DOI](https://doi.org/10.3390/app16104920) | Artificial-fur-specific route decomposition only; no case value is used as a range |
