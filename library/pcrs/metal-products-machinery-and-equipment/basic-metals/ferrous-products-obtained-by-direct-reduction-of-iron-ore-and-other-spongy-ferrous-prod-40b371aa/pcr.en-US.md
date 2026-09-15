---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.ferrous-products-obtained-by-direct-reduction-of-iron-ore-and-other-spongy-ferrous-prod-40b371aa
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ferrous products obtained by direct reduction of iron ore and other spongy ferrous products, in lumps, pellets or similar forms; iron having a minimum purity by weight of 99.94%, in lumps, pellets or similar forms

## 1. Scope and Applicability

This PCR applies to factory-gate production of direct-reduced iron (DRI), other sponge-iron products, hot-briquetted iron (HBI), and iron of at least 99.94% purity by mass when supplied in lump, pellet, briquette, or a physically equivalent primary form. It supports one product dataset for one declared product family, form, production route, purity, metallization state, carbon content, and delivery temperature.

The product boundary is the unwrought ferrous intermediate ready for dispatch from the producing works. Iron-ore mining and beneficiation, purchased pellet or lump production, purchased reductant and electricity production, and inbound transport are represented by linked upstream datasets. Downstream melting into steel, alloying, casting, rolling, fabrication, use, and end-of-life are excluded. Granules and powders, pig iron, spiegeleisen, steel scrap, crude steel, and finished steel products are excluded.

DRI is iron ore reduced to iron without melting; gas-, coal-, and hydrogen-based routes are kept distinct. For high-purity iron, the dataset must declare whether the route is electrolytic, direct-reduction followed by melting separation and slag refining, or another documented purification route. The inventory below provides atomic rows for the verified common routes and requires any additional route-specific exchange to be added as one concrete flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.ferrous-products-obtained-by-direct-reduction-of-iron-ore-and-other-spongy-ferrous-prod-40b371aa |
| classification_refs | CPC 3.0: 41116 (exact classification context) |
| covered_products | DRI pellets; DRI lumps; other sponge-iron primary forms; HBI; iron with purity by mass of at least 99.94% in lump, pellet, or similar primary form |
| excluded_products | iron or steel granules and powders; pig iron; spiegeleisen; scrap; crude steel; cast, rolled, forged, or fabricated steel products; downstream steel made from DRI or high-purity iron |
| representative_product | direct-reduced iron pellets, at producing-works gate |
| production_route | declared gas-based, coal-based, hydrogen-based, electrolytic, or direct-reduction/melting-separation/refining route; mixed routes reported separately or production-mass weighted |
| market_state | unwrought dry bulk ferrous intermediate, cold or hot as declared, in a declared lump, pellet, briquette, or similar primary form |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provision of an unwrought ferrous intermediate meeting the declared DRI, sponge-iron, HBI, or high-purity-iron specification |
| How much | 1,000 kg net dry product mass |
| How well | declared product family and form; total iron; metallic iron or metallization; iron purity where applicable; carbon; gangue; moisture; size distribution; delivery temperature |
| How long or cycle | one production reporting period ending when the product is ready for dispatch at the producing-works gate |
| reference_flow_link | dr_dri_pellets |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net dry mass |
| Reference product flow | Direct-reduced iron pellets |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product_family; physical_form; production_route; total_iron_mass_fraction; metallic_iron_or_metallization; iron_purity_mass_fraction_if_applicable; carbon_mass_fraction; gangue_mass_fraction; moisture_mass_fraction; size_distribution; cold_or_hot_delivery_state; delivery_temperature_if_hot; site; geography; reporting_period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | reference product and all mass-normalized exchanges | Mass | kg | Normalize to 1,000 kg net dry reference product. Record gross mass and measured moisture separately and do not count free water as product mass. |
| `gas_mass_conversion` | natural gas, hydrogen, oxygen, and measured off-gas inputs or outputs | Mass | kg | Preserve the original standard volume, reference temperature, reference pressure, composition, and density factor, then convert to mass for the normalized inventory. |
| `energy_preservation` | electricity and fuels | Energy or fuel mass | kWh, MJ, or kg | Preserve metered electricity in kWh and each fuel in its measured unit; disclose net/gross calorific basis for any energy conversion and never aggregate unlike carriers before normalization. |
| `product_quality_basis` | DRI, HBI, sponge iron, and high-purity iron | Mass fraction | kg/kg or % by mass | Report each quality result on its laboratory basis and disclose whether metallic iron, total iron, metallization, purity, carbon, gangue, and moisture are wet- or dry-basis measurements. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | measured receipt at the producing works of iron-ore pellet, iron-ore lump, magnetite concentrate, DRI precursor, or purified ferrous electrolyte, together with each purchased reductant, energy carrier, water, oxygen, and refining material |
| starting_condition_role | gate-to-gate foreground start; upstream burdens are linked through supplier-specific or representative datasets |
| product_classification_scope | one declared DRI, sponge-iron, HBI, or at-least-99.94%-pure iron product in a declared primary form |
| recursive_input_rule | an externally supplied DRI or other product covered by this PCR is an input product flow with its own upstream dataset and is not recursively recreated inside the receiving process |
| upstream_dataset_requirement | supplier-specific datasets are preferred for iron-bearing feed, reductants, electricity, oxygen, water, and refining materials; otherwise use geographically and technologically representative secondary datasets and disclose substitutions |
| disclosure | declare route, included unit processes, feed form, reductant, on-site gas generation, CCUS, internal gas recycling, briquetting, purification route, product form and quality, delivery state, site, geography, reporting period, upstream dataset choices, and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground production chain | Include every on-site unit operation from receipt of the declared starting materials through reduction or purification, product forming, pollution control, internal transport, wastewater treatment, and release of the dispatch-ready product. | `worldsteel-lci-methodology-2017` |
| `boundary_upstream_links` | purchased inputs | Link upstream production and inbound transport for iron-bearing feed, reductants, electricity, fuels, oxygen, water, and refining materials; do not duplicate their upstream burdens in foreground exchanges. | `worldsteel-lci-methodology-2017` |
| `boundary_route_separation` | technology and product routes | Keep gas-based, coal-based, hydrogen-based, electrolytic, and melting-separation/refining routes separate unless a production-mass-weighted average and its calculation are disclosed. | `iea-iron-steel-roadmap-2020`; `worldsteel-lci-methodology-2017` |
| `boundary_downstream_exclusion` | product gate | Exclude downstream steelmaking, alloying, casting, rolling, fabrication, use, and end-of-life from this product dataset. | `unsd-cpc-30-2025`; `doe-green-hydrogen-iron-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| direct_reduction | Direct reduction and product cooling | conditional | Include when producing DRI or sponge iron, or when DRI is an on-site precursor to high-purity iron. | reduction of iron oxide without melting, plus cooling and gas/water treatment | 1,000 kg dry DRI or sponge-iron output |
| hot_briquetting | Hot briquetting and cooling | conditional | Include when hot DRI is compacted into HBI or an equivalent briquetted primary form. | densification and dispatch conditioning | 1,000 kg dry HBI output |
| purity_refining | High-purity iron production and forming | conditional | Include when the reference product is iron of at least 99.94% purity; select only rows applicable to the declared electrolytic or metallurgical purification route. | purification, separation/refining, and forming into lump or pellet form | 1,000 kg dry high-purity iron output |

### Process: Direct reduction and product cooling (`direct_reduction`)

#### Inputs

##### Product flows

###### Direct-reduction-grade iron ore pellets (`dr_iron_ore_pellets`)

Record purchased or transferred oxide pellets entering a shaft, rotary-kiln, or other direct-reduction reactor; use only when pellet feed is used.

- Selected flow: Direct-reduction-grade iron ore pellets
- Flow property / unit: Mass / kg
- Amount rule: measured dry pellet feed crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_materials`
- Sources: `doe-green-hydrogen-iron-2018`

###### Direct-reduction-grade iron ore lump (`dr_iron_ore_lump`)

Record sized lump ore entering the reduction reactor; use only when lump feed is used and keep it separate from pellets.

- Selected flow: lump ore `7ed38ce9-37f3-4957-89d2-153b63e127dd`
- Flow property / unit: Mass / kg
- Amount rule: measured dry lump-ore feed crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_materials`
- Sources: `unsd-cpc-30-2025`

###### Natural gas (`dr_natural_gas`)

Record natural gas purchased for reducing-gas generation or direct process fuel; use only for a gas-consuming route.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural gas attributed to the direct-reduction process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_energy`
- Sources: `doe-green-hydrogen-iron-2018`; `iea-iron-steel-roadmap-2020`

###### Hydrogen (`dr_hydrogen`)

Record externally supplied or separately metered on-site hydrogen entering the reduction loop; use only for hydrogen-containing routes and do not count internally recycled hydrogen twice.

- Selected flow: Hydrogen
- Flow property / unit: Mass / kg
- Amount rule: measured net hydrogen make-up crossing the direct-reduction boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_energy`
- Sources: `doe-green-hydrogen-iron-2018`; `iea-iron-steel-roadmap-2020`

###### Non-coking coal (`dr_non_coking_coal`)

Record non-coking coal fed as reductant or process fuel; use only for a coal-based direct-reduction route.

- Selected flow: Non-coking coal
- Flow property / unit: Mass / kg
- Amount rule: measured dry coal feed attributed to direct reduction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_energy`
- Sources: `iea-iron-steel-roadmap-2020`

###### Oxygen (`dr_oxygen`)

Record purchased oxygen entering reforming, partial oxidation, heating, or other direct-reduction operations; use only when it crosses the site boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: measured oxygen delivered to the direct-reduction process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_materials`
- Sources: `worldsteel-lci-methodology-2017`

###### Electricity (`dr_electricity`)

Record metered electricity for ore handling, gas compression, reactor auxiliaries, cooling, screening, dedusting, and treatment within this process boundary.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submeter-allocated electricity consumed by direct reduction and product cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_energy`
- Sources: `worldsteel-lci-methodology-2017`

###### Process water (`dr_process_water`)

Record make-up water entering gas scrubbing, cooling, dust control, or other direct-reduction operations; do not include internally recycled water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up water crossing the direct-reduction boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_water`
- Sources: `doe-green-hydrogen-iron-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Direct-reduced iron pellets (`dr_dri_pellets`)

Record saleable DRI retaining pellet form; this is the representative reference-product row and applies only when pellets are the declared product.

- Selected flow: Direct-reduced iron pellets
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of conforming pellet product ready for dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_products`
- Sources: `unsd-cpc-30-2025`; `doe-green-hydrogen-iron-2018`

###### Direct-reduced iron lumps (`dr_dri_lumps`)

Record saleable DRI or sponge iron in lump form; use only when lump is the declared product.

- Selected flow: Direct-reduced iron lumps
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of conforming lump product ready for dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_products`
- Sources: `unsd-cpc-30-2025`; `doe-green-hydrogen-iron-2018`

##### Waste flows

###### Direct-reduction wastewater (`dr_wastewater`)

Record net wastewater transferred from reduction-gas scrubbing, cooling, or other direct-reduction operations to treatment or discharge.

- Selected flow: Direct-reduction wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured net wastewater leaving the process before downstream treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_wastes`
- Sources: `worldsteel-lci-methodology-2017`

###### Direct-reduced iron fines for disposal (`dr_dri_fines`)

Record off-specification DRI fines sent to disposal; recovered fines returned to production remain internal and are disclosed separately.

- Selected flow: Direct-reduced iron fines for disposal
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of DRI fines leaving as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dr_wastes`
- Sources: `worldsteel-lci-methodology-2017`

##### Elementary flows

###### Carbon dioxide to air (`dr_carbon_dioxide`)

Record measured or balanced direct carbon dioxide released from reduction, reforming, combustion, venting, and flaring after subtracting captured carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: monitored direct release plus validated balance estimates, net of captured carbon dioxide
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dr_air`
- Sources: `worldsteel-lci-methodology-2017`

###### Carbon monoxide to air (`dr_carbon_monoxide`)

Record direct carbon monoxide released after control from the direct-reduction process.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: monitored or mass-balance-derived carbon monoxide released to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dr_air`
- Sources: `worldsteel-lci-methodology-2017`

###### Particulate matter to air (`dr_particulate_matter`)

Record total particulate matter released after control from ore handling, reduction, cooling, screening, and dust collection.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: monitored stack release plus documented fugitive estimate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry direct-reduced product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dr_air`
- Sources: `worldsteel-lci-methodology-2017`

### Process: Hot briquetting and cooling (`hot_briquetting`)

#### Inputs

##### Product flows

###### Hot direct-reduced iron (`hb_hot_dri`)

Record hot DRI transferred into the briquetting press; apply only when HBI is produced and avoid duplicating the upstream DRI burden.

- Selected flow: Hot direct-reduced iron
- Flow property / unit: Mass / kg
- Amount rule: measured dry hot DRI feed to briquetting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry HBI output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hb_materials`
- Sources: `midrex-forms-of-dri`

###### Electricity (`hb_electricity`)

Record metered electricity consumed by briquetting, conveying, cooling, screening, and dedusting equipment.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submeter-allocated electricity consumed by hot briquetting and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry HBI output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hb_energy_water`
- Sources: `worldsteel-lci-methodology-2017`

###### Cooling water (`hb_cooling_water`)

Record net make-up water used to cool HBI; do not count recirculated water as a new input.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Amount rule: measured net cooling-water make-up crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry HBI output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hb_energy_water`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot-briquetted iron (`hb_hbi`)

Record conforming HBI ready for dispatch; use only when briquette is the declared product form.

- Selected flow: Hot-briquetted iron
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of conforming HBI ready for dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hb_products_wastes`
- Sources: `midrex-forms-of-dri`; `unsd-cpc-30-2025`

##### Waste flows

###### Briquetting DRI fines for disposal (`hb_dri_fines`)

Record DRI or HBI fines sent to disposal after briquetting and screening.

- Selected flow: Briquetting DRI fines for disposal
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of fines leaving the briquetting process as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry HBI output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hb_products_wastes`
- Sources: `worldsteel-lci-methodology-2017`

##### Elementary flows

###### Particulate matter to air (`hb_particulate_matter`)

Record particulate matter released after control from hot briquetting, conveying, cooling, and screening.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: monitored stack release plus documented fugitive estimate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry HBI output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hb_air`
- Sources: `worldsteel-lci-methodology-2017`

### Process: High-purity iron production and forming (`purity_refining`)

#### Inputs

##### Product flows

###### Direct-reduced iron precursor (`pr_dri_precursor`)

Record DRI entering melting separation and slag refining; use only for the declared direct-reduction/refining route.

- Selected flow: Direct-reduced iron precursor
- Flow property / unit: Mass / kg
- Amount rule: measured dry DRI feed entering melting separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_materials`
- Sources: `li-high-purity-iron-2020`

###### Iron(II) chloride solution (`pr_iron_chloride_solution`)

Record purified iron(II) chloride electrolyte entering electrolytic iron production; use only when this electrolyte is used.

- Selected flow: Iron(II) chloride solution
- Flow property / unit: Mass / kg
- Amount rule: measured net fresh iron(II) chloride solution make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_materials`
- Sources: `zhang-electrolytic-iron-2025`

###### Iron(II) sulfate solution (`pr_iron_sulfate_solution`)

Record purified iron(II) sulfate electrolyte entering electrolytic iron production; use only when this electrolyte is used.

- Selected flow: Iron(II) sulfate solution
- Flow property / unit: Mass / kg
- Amount rule: measured net fresh iron(II) sulfate solution make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_materials`
- Sources: `zhang-electrolytic-iron-2025`

###### High-basicity calcium oxide-aluminium oxide refining slag (`pr_high_basicity_slag`)

Record prepared high-basicity refining slag entering deoxidation/refining; use only for the declared slag-refining route and disclose its composition.

- Selected flow: High-basicity calcium oxide-aluminium oxide refining slag
- Flow property / unit: Mass / kg
- Amount rule: measured dry refining-slag charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_materials`
- Sources: `li-high-purity-iron-2020`

###### Electricity (`pr_electricity`)

Record metered electricity for electrolysis, melting, refining, vacuum treatment, forming, cooling, and pollution control within the declared route.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submeter-allocated electricity consumed by high-purity iron production and forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_energy_water`
- Sources: `li-high-purity-iron-2020`; `zhang-electrolytic-iron-2025`; `worldsteel-lci-methodology-2017`

###### Process water (`pr_process_water`)

Record net make-up water used in electrolyte preparation, washing, cooling, or pollution control for the declared high-purity route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up water crossing the high-purity process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_energy_water`
- Sources: `li-high-purity-iron-2020`; `zhang-electrolytic-iron-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### High-purity iron lumps (`pr_high_purity_iron_lump`)

Record conforming iron of at least 99.94% purity by mass in lump form; use only when lump is the declared product.

- Selected flow: High-purity iron lumps, minimum 99.94% iron by mass
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of conforming high-purity iron lumps ready for dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_products`
- Sources: `unsd-cpc-30-2025`; `china-mof-tariff-2019`; `li-high-purity-iron-2020`; `zhang-electrolytic-iron-2025`

###### High-purity iron pellets (`pr_high_purity_iron_pellet`)

Record conforming iron of at least 99.94% purity by mass in pellet form; use only when pellet is the declared product.

- Selected flow: High-purity iron pellets, minimum 99.94% iron by mass
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of conforming high-purity iron pellets ready for dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_products`
- Sources: `unsd-cpc-30-2025`; `china-mof-tariff-2019`; `li-high-purity-iron-2020`; `zhang-electrolytic-iron-2025`

##### Waste flows

###### Spent ferrous electrolyte (`pr_spent_electrolyte`)

Record spent iron-bearing electrolyte transferred to recovery or treatment; use only for an electrolytic route.

- Selected flow: Spent ferrous electrolyte
- Flow property / unit: Mass / kg
- Amount rule: measured net spent electrolyte leaving high-purity iron production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_wastes`
- Sources: `zhang-electrolytic-iron-2025`

###### Spent high-basicity refining slag (`pr_refining_slag`)

Record spent refining slag transferred to recovery or disposal; use only for a melting-separation/slag-refining route.

- Selected flow: Spent high-basicity refining slag
- Flow property / unit: Mass / kg
- Amount rule: measured dry spent refining slag leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pr_wastes`
- Sources: `li-high-purity-iron-2020`

##### Elementary flows

###### Particulate matter to air (`pr_particulate_matter`)

Record particulate matter released after control from material handling, melting, refining, and product forming.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: monitored stack release plus documented fugitive estimate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry high-purity iron output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pr_air`
- Sources: `worldsteel-lci-methodology-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | route unit operations and separately metered products | Avoid allocation by subdividing reduction, briquetting, purification, gas generation, wastewater treatment, and recovery operations wherever their inputs and outputs are independently measured. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | recycled top gas, water, DRI fines, slag, and electrolyte | Treat internal recycling as an internal loop: count only net make-up inputs and net releases across the foreground boundary and do not create a credit for internal circulation. | `worldsteel-lci-methodology-2017` |
| `allocation_exported_coproduct` | exported process gas, captured carbon dioxide, recovered fines, slag, or other marketable co-product | Use system expansion only when the substituted product, equivalent function, market, and avoided production dataset are documented; report the substitution credit separately. Otherwise report an unallocated inventory and an explicit sensitivity case. | `worldsteel-lci-methodology-2017` |
| `allocation_multiple_products` | simultaneous saleable DRI, HBI, or high-purity iron outputs | Prefer separate campaigns or measured process subdivision. If inseparable, allocate residual shared burdens by dry product mass and disclose product-specific sensitivity to an economic allocation. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dr_materials` | direct_reduction | iron-bearing feed, oxygen, and reductant materials | weighbridge, feeder, inventory, and supplier records | timestamp; material_id; wet_mass; moisture; composition; standard_volume_if_gas; temperature; pressure | reconcile calibrated meters and stock changes by campaign | kg; Nm3 where originally metered | batch and monthly | representative 12 months; shorter period justified | all direct-reduction units and shared supply systems | dry mass or gas mass allocated from direct meters; shared meters allocated by documented operating driver | calibration, supplier certificate, stock reconciliation, composition and moisture test |
| `cp_dr_energy` | direct_reduction | natural gas, hydrogen, coal, and electricity | custody meter, submeter, fuel issue, and stock records | timestamp; carrier; quantity; unit; calorific_basis; gas_composition; meter_id; process_id | reconcile purchases, generation, exports, and stock changes | kWh; MJ; kg; Nm3 | continuous or batch; monthly reconciliation | representative 12 months | direct-reduction reactor, reformer, compressors, cooling, screening, and controls | net imported carrier per reporting period, with internal gas recycling excluded | meter calibration, invoices, gas analysis, stock reconciliation |
| `cp_dr_water` | direct_reduction | process-water make-up | water meter and balance records | timestamp; source; make_up_volume; density; recycled_volume; discharge_volume | meter net make-up and reconcile circuit balance | kg; m3 | continuous; monthly reconciliation | representative 12 months | gas scrubbing, cooling, dedusting, and direct-reduction treatment | net make-up mass per reporting period | meter calibration and water-balance closure |
| `cp_dr_products` | direct_reduction | DRI pellet and lump outputs | certified scale, dispatch, and laboratory records | batch_id; gross_mass; moisture; form; total_iron; metallic_iron; metallization; carbon; gangue; size; temperature | sum conforming dispatch mass and convert to dry mass | kg | batch | representative 12 months | all product discharge and dispatch points | separate product forms and off-specification material before normalization | scale calibration, certificate of analysis, moisture and size test |
| `cp_dr_wastes` | direct_reduction | wastewater and disposed DRI fines | transfer meter, scale, manifest, and treatment records | timestamp; waste_id; mass_or_volume; solids; moisture; destination; recovery_status | reconcile transfers with internal returns and treatment receipts | kg; m3 | batch or continuous; monthly | representative 12 months | all direct-reduction waste exits | net external waste transfer by atomic waste flow | calibrated meter or scale, waste manifest, treatment receipt |
| `cp_dr_air` | direct_reduction | carbon dioxide, carbon monoxide, and particulate matter | continuous emissions monitor, stack test, fuel/gas composition, flare, capture, and production records | source_id; pollutant; concentration; flow_rate; duration; fuel_carbon; vented_gas; captured_co2 | integrate monitors; fill approved gaps with documented mass balance | kg; mg/Nm3; Nm3 | continuous and required stack-test interval | representative 12 months including normal maintenance | all stacks, vents, flares, and quantified fugitives | sum releases by pollutant; subtract verified capture; normalize by dry output | monitor calibration, stack-test report, carbon and gas balance |
| `cp_hb_materials` | hot_briquetting | hot DRI feed | transfer scale and temperature records | timestamp; wet_mass; moisture; temperature; transfer_origin | reconcile hot DRI transfer with briquette output and fines | kg | batch or continuous | representative 12 months | all HBI lines | dry feed mass by line and campaign | scale calibration, moisture and temperature records |
| `cp_hb_energy_water` | hot_briquetting | electricity and cooling-water make-up | submeter and water-meter records | timestamp; electricity; make_up_water; recycled_water; meter_id | meter line consumption and reconcile shared services | kWh; kg; m3 | continuous; monthly | representative 12 months | pressing, conveying, cooling, screening, and controls | net electricity and water make-up by line | meter calibration and utility balance |
| `cp_hb_products_wastes` | hot_briquetting | HBI output and disposed fines | certified scale, dispatch, laboratory, and waste records | batch_id; product_mass; moisture; density; size; fines_mass; destination | separate conforming HBI, internally returned fines, and external waste | kg | batch | representative 12 months | all HBI lines and dispatch points | dry net output and external waste by campaign | scale calibration, product certificate, waste manifest |
| `cp_hb_air` | hot_briquetting | particulate matter | stack test, dust-collector, operating-hour, and production records | source_id; concentration; flow_rate; duration; collector_status | integrate measured releases and document fugitive estimate | kg; mg/Nm3 | stack-test interval; monthly estimate | representative 12 months | briquetting, cooling, screening, and transfer points | sum controlled and quantified fugitive releases | stack-test report and dust-collector maintenance record |
| `cp_pr_materials` | purity_refining | DRI precursor, electrolytes, and refining slag | batch scale, tank level, composition, and inventory records | batch_id; material_id; mass; concentration; composition; stock_change; route | reconcile fresh input, recovered internal material, and stock change | kg | batch and monthly | representative production campaign or 12 months | all purification, melting, and refining units | net fresh material input by atomic material and route | scale/tank calibration, assay, batch sheet, stock reconciliation |
| `cp_pr_energy_water` | purity_refining | electricity and process-water make-up | submeter and water-meter records | timestamp; unit_operation; electricity; make_up_water; recycled_water | meter route unit operations and reconcile shared services | kWh; kg; m3 | continuous or batch; monthly | representative production campaign or 12 months | electrolysis, melting, refining, forming, cooling, and controls | net electricity and water make-up by declared route | meter calibration and utility balance |
| `cp_pr_products` | purity_refining | high-purity iron output | certified scale, assay, dispatch, and form records | batch_id; mass; moisture; iron_purity; impurity_panel; form; size; temperature | sum conforming product separately by form and purity grade | kg | batch | all campaigns in reporting period | all final forming and dispatch points | dry net conforming output by product form | scale calibration, certificate of analysis, impurity detection limits |
| `cp_pr_wastes` | purity_refining | spent electrolyte and spent refining slag | tank transfer, scale, waste manifest, and recovery records | batch_id; waste_id; mass; concentration; moisture; destination; recovery_status | measure net external transfer after internal recovery | kg | batch and monthly | all campaigns in reporting period | all purification and refining waste exits | aggregate each atomic waste separately by route | meter/scale calibration, assay, waste manifest, treatment receipt |
| `cp_pr_air` | purity_refining | particulate matter | stack test, dust-collector, operating-hour, and production records | source_id; concentration; flow_rate; duration; collector_status | integrate measured releases and document fugitive estimate | kg; mg/Nm3 | stack-test interval; monthly estimate | all campaigns in reporting period | melting, refining, forming, and material handling | sum controlled and quantified fugitive releases | stack-test report and dust-collector maintenance record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass_normalization` | mass inputs and outputs | normalized amount = net measured dry amount / net dry reference-product mass × 1,000 kg | gross mass; moisture; stock change; internal return; dry reference-product mass | kg per 1,000 kg dry reference product | `worldsteel-lci-methodology-2017` |
| `calc_energy_normalization` | electricity and fuel | normalized amount = net carrier consumed / net dry reference-product mass × 1,000 kg; preserve carrier-specific units and conversion basis | meter readings; imports; exports; stock change; calorific basis; dry reference-product mass | kWh, MJ, or kg per 1,000 kg dry reference product | `worldsteel-lci-methodology-2017` |
| `calc_gas_mass` | natural gas, hydrogen, oxygen, and measured gases | gas mass = corrected standard volume × verified density from measured composition and declared reference conditions | volume; temperature; pressure; composition; reference conditions; density | kg gas | `doe-green-hydrogen-iron-2018` |
| `calc_route_weighting` | multi-site or multi-route dataset | weighted exchange = sum(route exchange × conforming dry route output) / sum(conforming dry output); retain separate route results in supporting data | route-specific normalized exchange; dry product output; product form and quality | production-mass-weighted exchange | `worldsteel-lci-methodology-2017` |
| `calc_direct_air_release` | direct air emissions | release = integrated monitored release + justified gap estimate + vent and flare release - verified capture; do not subtract biogenic or upstream credits here | concentration; gas flow; time; composition; vent/flare records; capture records | kg pollutant per reporting period and per 1,000 kg product | `worldsteel-lci-methodology-2017` |
| `calc_balance_checks` | process validation | close total mass, iron, and carbon balances for each applicable process; report residuals and explain material deviations | all measured inputs, outputs, stock changes, recycled flows, iron assays, carbon assays | mass-, iron-, and carbon-balance residuals | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Product family, form, route, purity/metallization, carbon, gangue, moisture, size, and hot/cold delivery state shall identify one saleable product. | dispatch specification and certificate of analysis |
| `dq_technology` | route inventory | Unit operations, reductant, gas generation, internal recycling, CCUS, briquetting, purification, and treatment shall match the declared route; mixed routes shall remain traceable. | process-flow diagram, meter map, and route ledger |
| `dq_temporal` | foreground records | Prefer 12 consecutive representative months. A shorter period shall cover the full operating pattern and be justified. | dated production, utility, maintenance, and laboratory records |
| `dq_geography` | upstream links | Electricity and other material datasets shall represent the actual supplier or production region and technology where material. | supplier identity, grid contract, and dataset metadata |
| `dq_completeness` | all processes | Include all energetic inputs and all known material, waste, water, and emission flows; document exclusions and their mass, energy, and environmental relevance. | completeness checklist, meter reconciliation, and exclusion register |
| `dq_measurement` | measured and calculated values | Retain calibration status, raw units, conversions, allocation keys, uncertainty, detection limits, and data-gap treatment so results are reproducible. | calibration certificates, calculation workbook, QA review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm that the normalized output equals 1,000 kg net dry mass and that all required qualifiers are present and mutually consistent. | `worldsteel-lci-methodology-2017` |
| `validation_route_rows` | process inventory | Confirm that every included row belongs to the declared route, every applicable atomic exchange is present, and non-applicable alternative rows are absent rather than zero-filled. | `iea-iron-steel-roadmap-2020`; `li-high-purity-iron-2020` |
| `validation_balances` | direct reduction, briquetting, and purity refining | Perform total mass and iron balances for every included process and a carbon balance for carbon-bearing routes; investigate and disclose residuals. | `worldsteel-lci-methodology-2017` |
| `validation_no_double_counting` | internal loops and upstream data | Verify that recycled top gas, water, DRI fines, slag, and electrolyte are not counted as both internal circulation and purchased inputs, and that upstream burdens appear once. | `worldsteel-lci-methodology-2017` |
| `validation_emissions` | releases and capture | Reconcile monitored emissions with fuel, gas, carbon, vent, flare, pollution-control, and capture records and report below-detection-limit treatment. | `worldsteel-lci-methodology-2017` |
| `validation_purity` | high-purity iron product | Verify iron purity by mass is at least 99.94% using a documented analytical method and impurity panel; a DRI metallization result is not a substitute for iron-purity conformance. | `unsd-cpc-30-2025`; `china-mof-tariff-2019`; `li-high-purity-iron-2020` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from verified foreground production records |
| downstream_use | upstream iron-bearing intermediate for steelmaking, alloy production, foundry, or other declared product systems; lifecyclemodel projection with route-specific upstream links |
| allowed_use | modelling the declared product family, form, route, quality, site/geography, technology, and reporting period at the producing-works gate |
| excluded_use | representing downstream crude or finished steel; substituting DRI for high-purity iron or one route for another without documented equivalence; public comparative assertions without a study-specific functional unit and review |
| required_metadata | PCR id and version; product family and form; route and unit operations; total iron; metallic iron/metallization or iron purity; carbon; gangue; moisture; size; delivery state/temperature; site; geography; reporting period; allocation; cut-offs; upstream datasets; data quality and uncertainty |
| required_quality_disclosure | foreground/secondary split; meter and assay coverage; missing-data treatment; mass/iron/carbon balance residuals; route weighting; allocation and substitution choices; exclusions; unresolved UUIDs and range-evidence status |
| update_trigger | material change in feed, reductant, electricity, purification route, CCUS, gas recycling, briquetting, product form or quality, allocation, site mix, upstream datasets, or reporting data older than the programme's accepted representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-30-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-02) | official product identity, forms, and 99.94% purity threshold |
| `china-mof-tariff-2019` | official_guidance | Ministry of Finance of the People's Republic of China, 2019 tariff implementation plan, lines 72031000 and 72039000, https://m.mof.gov.cn/czxw/201812/P020181226472875236412.pdf (retrieved 2026-09-02) | verified professional Chinese terminology for directly reduced iron products, sponge iron, and the 99.94% purity threshold |
| `doe-green-hydrogen-iron-2018` | official_guidance | Ed Green, The Use of Hydrogen in the Iron and Steel Industry, U.S. Department of Energy H2@Scale Workshop, 1 August 2018, https://www.energy.gov/sites/default/files/2018/08/f54/fcto-h2-scale-kickoff-2018-19-green.pdf (retrieved 2026-09-02) | DRI definition, reduction without melting, hydrogen and carbon-monoxide reduction chemistry, and the natural-gas DRI route |
| `iea-iron-steel-roadmap-2020` | official_guidance | International Energy Agency, Iron and Steel Technology Roadmap, 2020, https://www.iea.org/reports/iron-and-steel-technology-roadmap (retrieved 2026-09-02) | separation of gas-, coal-, blended-hydrogen-, and 100% hydrogen-based DRI technology routes |
| `worldsteel-lci-methodology-2017` | handbook | World Steel Association, Life Cycle Inventory Methodology Report for Steel Products, 2017, ISBN 978-2-930069-89-0, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-02) | declared mass unit, gate-to-gate and upstream boundaries, technology/geographic/temporal coverage, data collection, emissions, completeness, validation balances, and co-product handling |
| `midrex-forms-of-dri` | extension_guidance | Midrex Technologies, Inc., Forms of DRI, https://www.midrex.com/direct-reduced-iron/forms-of-dri/ (retrieved 2026-09-03) | CDRI, HDRI, and HBI market forms; hot DRI transfer; binder-free hot briquetting and dispatch state |
| `li-high-purity-iron-2020` | literature | Li, B.; Sun, G.; Li, S.; Guo, H.; Guo, J. The Preparation of High-Purity Iron (99.987%) Employing a Process of Direct Reduction-Melting Separation-Slag Refining. Materials 13(8), 1839 (2020). https://doi.org/10.3390/ma13081839 | high-purity-iron route alternatives and verified direct-reduction, melting-separation, slag-refining, and electrolytic process decomposition |
| `zhang-electrolytic-iron-2025` | literature | Zhang, D.; Liu, T.; Xie, G.; Wang, B.; Cao, X.; Bai, J.; Zhong, M.; Dong, H. The Effect of Electrolytic Temperature on the Purity of Electrolytic Pure Iron. Metals 15(9), 1055 (2025). https://doi.org/10.3390/met15091055 | ferrous-chloride and ferrous-sulfate electrolyte route evidence, electricity-driven electrodeposition, and high-purity-iron quality control |
