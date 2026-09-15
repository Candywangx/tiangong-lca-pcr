---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-sewing-thread
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cotton sewing thread

## 1. Scope and Applicability

This PCR governs factory-gate foreground data packages for cotton sewing thread made from purchased cotton yarn. The boundary begins with received yarn and includes actual on-site plying/twisting, route-gated singeing, scouring, peroxide bleaching, mercerising, package dyeing, washing/rinsing, drying/conditioning, lubrication, winding, inspection, and packaging. Cotton cultivation, ginning, fibre preparation, spinning of incoming yarn, distribution, sewing, use, and end of life are outside this gate-to-gate boundary and require linked datasets when claimed.

Conditional routes are never averaged. Each lot shall declare which operations occurred, which did not, the specific recipe chemicals and heat carriers used, and whether wastewater was sent to on-site or off-site treatment. Any vat, sulphur, pigment, specialty finish, alternative refrigerant, or alternative packaging route not represented by the atomic cards below requires additional specific cards before the dataset can claim completeness.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-sewing-thread |
| classification_refs | CPC 3.0: 26350 - Cotton sewing thread |
| covered_products | Cotton sewing thread manufactured for sewing, in greige, bleached, mercerised, dyed, wax-finished, or silicone-finished states when the actual route is declared |
| excluded_products | Cotton yarn not manufactured as sewing thread; man-made-fibre sewing thread; embroidery yarn; twine; cordage; woven or knitted fabric; garment sewing operations |
| representative_product | Dyed, lubricated, plied cotton sewing thread wound on polypropylene spools and packed in paperboard boxes |
| production_route | Yarn preparation, plying, and twisting; Singeing or gassing; Scouring; Hydrogen-peroxide bleaching; Mercerising and neutralisation; Package dyeing; Post-dye washing and rinsing; Drying and conditioning; Lubrication, final winding, inspection, and packaging |
| market_state | Factory-gate saleable thread with cotton composition, yarn count/linear density, ply, twist, colour state, finish, spool, net mass, geography, and reporting period declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate saleable cotton sewing thread |
| How much | 1 kg net thread mass, excluding spool and transport packaging |
| How well | Meets the declared cotton composition, linear density, ply, twist, tensile/elongation grade, colour-fastness class where dyed, finish, and package specification |
| How long or cycle | One released production lot at factory gate; no use-duration equivalence is claimed |
| reference_flow_link | final_cotton_sewing_thread |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cotton sewing thread |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 26350; sewing-thread use; cotton mass fraction; incoming-yarn identity; yarn count or linear density; ply count; twist direction and level; singeing state; scouring/bleaching/mercerising state; dye class and colour state; lubricant identity; spool identity; net thread mass; production geography; reporting period |

The Tiangong reference row is the verified representative dyed route. Its generic dyed-yarn display does not replace CPC 26350 and sewing-thread qualifiers, and an undyed product shall declare its colour state explicitly.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | final_cotton_sewing_thread | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure conditioned net thread mass and exclude spool and transport packaging; disclose moisture/conditioning basis. |
| `material_mass` | each material, chemical, packaging component, waste, and mass emission | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep every identity separate; convert formulation mass to active-substance equivalent only with a verified assay and retain both values. |
| `water_volume` | each water and wastewater stream | Volume | m3 | Meter fresh, reused, and discharged water separately by unit operation; do not infer wastewater as equal to intake without a water balance. |
| `carrier_energy` | electricity, natural gas, steam, and purchased hot water | Energy | kWh or MJ | Preserve each carrier separately and report conversion factors; never average mutually exclusive heat routes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased cotton yarn at the thread facility, with supplier, lot, composition, yarn count, ply, twist, colour/finish state, mass, and moisture basis declared |
| starting_condition_role | Upstream product input to the gate-to-gate cotton sewing-thread dataset |
| product_classification_scope | CPC 3.0 code 26350; classification is scope evidence, not canonical identity |
| recursive_input_rule | A purchased input already sold as cotton sewing thread remains a separate upstream product flow and is not relabelled as raw cotton yarn or recursively expanded. |
| upstream_dataset_requirement | Each purchased yarn requires a compatible upstream dataset matching cotton composition, spinning route, geography, moisture basis, and market state, or an explicit data gap. |
| disclosure | Declare every on-site unit operation, route gate, heat carrier, recipe chemical, wastewater destination, emission point, waste route, and excluded upstream/downstream stage. |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_unit_operations` | foreground gate-to-gate production | Include every actual listed unit operation and assign inputs/outputs to it; omitted operations require an explicit not-applicable justification. | `csir-sewing-threads-1979`; `eu-textiles-bat-2022` |
| `boundary_route_gates` | conditional routes | Do not average dyed with undyed, mercerised with non-mercerised, wax with PDMS, or alternative heat/refrigerant routes. | `csir-sewing-threads-1979`; `eu-textiles-bat-2022` |
| `boundary_effluent` | wet processing | Keep each unit-operation wastewater stream separate through the transfer point; direct water emissions require pollutant-specific elementary-flow cards based on monitoring. | `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `plying_twisting` | Yarn preparation, plying, and twisting | `required` | Always included; purchased cotton singles or plied yarn is converted to the declared sewing-thread construction | Foreground mechanical conversion | 1 kg net saleable cotton sewing thread |
| `singeing` | Singeing or gassing | `conditional` | Include only when the product specification declares a singed or gassed thread; otherwise not applicable | Route-specific surface-fibre removal | 1 kg singed thread transferred |
| `scouring` | Scouring | `conditional` | Include only when aqueous scouring occurs on site before bleaching, mercerising, or dyeing | Route-specific wet pretreatment | 1 kg scoured thread transferred |
| `bleaching` | Hydrogen-peroxide bleaching | `conditional` | Include only for bleached or pale-shade product made with the declared peroxide route | Route-specific bleaching | 1 kg bleached thread transferred |
| `mercerising` | Mercerising and neutralisation | `conditional` | Include only when the product specification declares mercerised cotton thread | Route-specific cotton-thread finishing | 1 kg mercerised thread transferred |
| `package_dyeing` | Package dyeing | `conditional` | Include only for dyed product; model the declared reactive-dye route and do not average it with vat, sulphur, pigment, or undyed routes | Route-specific coloration | 1 kg dyed thread transferred |
| `washing_rinsing` | Post-dye washing and rinsing | `conditional` | Include when wet pretreatment or dyeing requires washing or rinsing; keep water and effluent assigned to the actual upstream operation | Route-specific washing | 1 kg washed thread transferred |
| `drying_conditioning` | Drying and conditioning | `conditional` | Include after any wet process; select actual electricity, natural-gas, steam, and refrigerant cards independently and never average mutually exclusive heat routes | Route-specific moisture removal | 1 kg dried conditioned thread transferred |
| `lubrication_winding_packaging` | Lubrication, final winding, inspection, and packaging | `required` | Always included; select the actual paraffin-wax or polydimethylsiloxane finish route separately and record each packaging component | Foreground final finishing and packing | 1 kg net saleable cotton sewing thread |

### Process: Yarn preparation, plying, and twisting (`plying_twisting`)

#### Inputs

##### Product flows

###### Purchased cotton yarn (`input_cotton_yarn`)

This card records one atomic exchange. Applicability gate: Record each composition-distinct cotton yarn as its own dataset exchange; this card covers one declared cotton-yarn grade.

- Selected flow: Cotton yarn for sewing-thread conversion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass issued to the lot minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `csir-sewing-threads-1979`

###### Electricity for plying and twisting (`input_twisting_electricity`)

This card records one atomic exchange.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or physically allocated electricity consumed by plying and twisting equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cotton yarn offcuts (`output_cotton_yarn_offcuts`)

This card records one atomic exchange.

- Selected flow: Cotton yarn offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass leaving the lot for external reuse, recycling, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Singeing or gassing (`singeing`)

#### Inputs

##### Product flows

###### Natural gas for singeing (`input_singeing_natural_gas`)

This card records one atomic exchange. Applicability gate: Only when direct gas-flame singeing is used.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered natural gas combusted in direct singeing burners
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_fuel_energy`
- Sources: `eu-textiles-bat-2022`

###### Electricity for singeing (`input_singeing_electricity`)

This card records one atomic exchange.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or physically allocated electricity for singeing drives and extraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from singeing (`output_singeing_co2_fossil`)

This card records one atomic exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fuel quantity multiplied by the reviewed site or supplier carbon factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: fuel_inventory (`fuel_inventory`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_energy`
- Sources: `eu-textiles-bat-2022`

###### Nitrogen oxides from singeing (`output_singeing_nox`)

This card records one atomic exchange.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured stack load or fuel quantity multiplied by a documented applicable factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: fuel_inventory (`fuel_inventory`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-textiles-bat-2022`

###### Cotton dust from singeing (`output_singeing_dust`)

This card records one atomic exchange.

- Selected flow: Particulate matter, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured channelled mass after abatement; do not estimate diffuse dust as a combined emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-textiles-bat-2022`

### Process: Scouring (`scouring`)

#### Inputs

##### Product flows

###### Scouring process water (`input_scouring_water`)

This card records one atomic exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered fresh water consumed by scouring including assigned cleaning water minus verified reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg scoured thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wet_process_water`
- Sources: `eu-textiles-bat-2022`
- Range: BAT yearly-average scouring-water performance interval
  - Range role: typical_range (`typical_range`)
  - Lower: 5
  - Upper: 15
  - Unit: m3/t
  - Basis: per tonne cellulosic material scoured in batch operation
  - Basis kind: process_output (`process_output`)
  - Evidence kind: external_source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide for scouring (`input_scouring_sodium_hydroxide`)

This card records one atomic exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-substance-equivalent mass from recipe issue and assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg scoured thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`

###### Alcohol-ethoxylate wetting agent (`input_scouring_alcohol_ethoxylate`)

This card records one atomic exchange.

- Selected flow: Alcohol ethoxylate surfactant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured active-substance-equivalent mass issued to the scouring bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg scoured thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`

###### Steam for scouring (`input_scouring_steam`)

This card records one atomic exchange.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy assigned to scouring
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg scoured thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Scouring wastewater (`output_scouring_wastewater`)

This card records one atomic exchange.

- Selected flow: Scouring wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater transferred to on-site or off-site treatment, net of documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg scoured thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Hydrogen-peroxide bleaching (`bleaching`)

#### Inputs

##### Product flows

###### Bleaching process water (`input_bleaching_water`)

This card records one atomic exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered fresh water consumed by bleaching including assigned cleaning water minus verified reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg bleached thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wet_process_water`
- Sources: `eu-textiles-bat-2022`
- Range: BAT yearly-average batch-bleaching water interval
  - Range role: typical_range (`typical_range`)
  - Lower: 10
  - Upper: 32
  - Unit: m3/t
  - Basis: per tonne cellulosic material bleached in batch operation
  - Basis kind: process_output (`process_output`)
  - Evidence kind: external_source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

###### Hydrogen peroxide bleaching agent (`input_bleaching_hydrogen_peroxide`)

This card records one atomic exchange.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-substance-equivalent mass from recipe issue and assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg bleached thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide for bleaching (`input_bleaching_sodium_hydroxide`)

This card records one atomic exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-substance-equivalent mass from recipe issue and assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg bleached thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`

###### Steam for bleaching (`input_bleaching_steam`)

This card records one atomic exchange.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy assigned to bleaching
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg bleached thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Bleaching wastewater (`output_bleaching_wastewater`)

This card records one atomic exchange.

- Selected flow: Bleaching wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater transferred to on-site or off-site treatment, net of documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg bleached thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Mercerising and neutralisation (`mercerising`)

#### Inputs

##### Product flows

###### Mercerising process water (`input_mercerising_water`)

This card records one atomic exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered fresh water consumed by mercerising and neutralisation minus verified reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg mercerised thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wet_process_water`
- Sources: `eu-textiles-bat-2022`
- Range: BAT yearly-average mercerising-water performance interval
  - Range role: typical_range (`typical_range`)
  - Lower: 2
  - Upper: 13
  - Unit: m3/t
  - Basis: per tonne cellulosic material mercerised
  - Basis kind: process_output (`process_output`)
  - Evidence kind: external_source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide for mercerising (`input_mercerising_sodium_hydroxide`)

This card records one atomic exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-substance-equivalent mass issued to the mercerising bath minus recovered caustic returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg mercerised thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `csir-sewing-threads-1979`; `eu-textiles-bat-2022`

###### Acetic acid for neutralisation (`input_mercerising_acetic_acid`)

This card records one atomic exchange.

- Selected flow: Acetic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-substance-equivalent mass issued for neutralisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg mercerised thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Mercerising wastewater (`output_mercerising_wastewater`)

This card records one atomic exchange.

- Selected flow: Mercerising wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater transferred to on-site or off-site treatment, net of documented caustic and water recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg mercerised thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Package dyeing (`package_dyeing`)

#### Inputs

##### Product flows

###### Package-dyeing process water (`input_dyeing_water`)

This card records one atomic exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered fresh water consumed by the dyeing operation including assigned cleaning water minus verified reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg dyed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wet_process_water`
- Sources: `eu-textiles-bat-2022`
- Range: BAT yearly-average yarn batch-dyeing water interval
  - Range role: typical_range (`typical_range`)
  - Lower: 3
  - Upper: 140
  - Unit: m3/t
  - Basis: per tonne yarn batch dyed
  - Basis kind: process_output (`process_output`)
  - Evidence kind: external_source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

###### Reactive dye (`input_reactive_dye`)

This card records one atomic exchange. Applicability gate: Only for the declared reactive-dye route; other dye classes require separate atomic cards and route review.

- Selected flow: Reactive dye
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured active-dyestuff-equivalent mass issued for the declared shade recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg dyed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`

###### Sodium chloride for reactive dyeing (`input_dyeing_sodium_chloride`)

This card records one atomic exchange.

- Selected flow: Sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-substance-equivalent mass issued to the dye bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg dyed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`

###### Sodium carbonate for reactive dyeing (`input_dyeing_sodium_carbonate`)

This card records one atomic exchange.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-substance-equivalent mass issued to the dye bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg dyed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`

###### Steam for package dyeing (`input_dyeing_steam`)

This card records one atomic exchange. Applicability gate: Record only when steam crosses the process boundary; do not average with purchased hot water.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy assigned to package dyeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg dyed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-textiles-bat-2022`

###### Purchased hot water for package dyeing (`input_dyeing_hot_water`)

This card records one atomic exchange. Applicability gate: Record only when purchased hot water crosses the boundary; do not average with steam.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered thermal energy in purchased hot water assigned to package dyeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg dyed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent reactive dye liquor (`output_spent_dye_liquor`)

This card records one atomic exchange.

- Selected flow: Spent reactive dye liquor
- Flow property / unit: Volume / m3
- Amount rule: metered separately collected spent dye liquor transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg dyed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Post-dye washing and rinsing (`washing_rinsing`)

#### Inputs

##### Product flows

###### Post-dye washing and rinsing water (`input_rinsing_water`)

This card records one atomic exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered fresh water used for post-dye washing and rinsing minus verified reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg washed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wet_process_water`
- Sources: `eu-textiles-bat-2022`

###### Electricity for washing and rinsing (`input_rinsing_electricity`)

This card records one atomic exchange.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or physically allocated electricity consumed by pumps and drives
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg washed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-dye washing and rinsing wastewater (`output_rinsing_wastewater`)

This card records one atomic exchange.

- Selected flow: Post-dye washing and rinsing wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater transferred to on-site or off-site treatment, net of documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg washed thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Drying and conditioning (`drying_conditioning`)

#### Inputs

##### Product flows

###### Electricity for drying (`input_drying_electricity`)

This card records one atomic exchange.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or physically allocated electricity consumed by the dryer and air-handling equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg dried conditioned thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-textiles-bat-2022`

###### Natural gas for direct drying (`input_drying_natural_gas`)

This card records one atomic exchange. Applicability gate: Only for direct-fired drying; do not average with steam-heated or all-electric routes.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered natural gas combusted by direct-fired drying equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1 kg dried conditioned thread
- Basis kind: fuel_inventory (`fuel_inventory`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_fuel_energy`
- Sources: `eu-textiles-bat-2022`

###### Steam for indirect drying (`input_drying_steam`)

This card records one atomic exchange. Applicability gate: Only for the steam-heated route; do not average with direct natural-gas or all-electric routes.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy assigned to indirect drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1 kg dried conditioned thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-textiles-bat-2022`

###### R-134a refrigerant make-up (`input_refrigerant_r134a`)

This card records one atomic exchange. Applicability gate: Only when in-scope cooling equipment uses R-134a; other refrigerants require separate atomic cards.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured make-up refrigerant attributable to in-scope process cooling equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1 kg dried conditioned thread
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_refrigerant`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### R-134a emission to air (`output_refrigerant_r134a_air`)

This card records one atomic exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a), to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: R134a_emitted_kg = opening_inventory_kg + purchases_kg - closing_inventory_kg - recovered_kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1 kg dried conditioned thread
- Basis kind: process_output (`process_output`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources: `eu-textiles-bat-2022`

### Process: Lubrication, final winding, inspection, and packaging (`lubrication_winding_packaging`)

#### Inputs

##### Product flows

###### Paraffin-wax thread finish (`input_paraffin_wax_finish`)

This card records one atomic exchange. Applicability gate: Use only for the declared wax-finish route; do not average with the silicone route.

- Selected flow: Paraffin wax
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured paraffin-wax mass applied minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_finish_mass`
- Sources: `csir-sewing-threads-1979`

###### Polydimethylsiloxane thread finish (`input_pdms_finish`)

This card records one atomic exchange. Applicability gate: Use only for the declared silicone-finish route; do not average with the paraffin-wax route.

- Selected flow: Polydimethylsiloxane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured polydimethylsiloxane active mass applied minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_finish_mass`
- Sources: `csir-sewing-threads-1979`

###### Electricity for final winding and packing (`input_final_winding_electricity`)

This card records one atomic exchange.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: submetered or physically allocated electricity consumed by lubrication, winding, inspection, and packing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-textiles-bat-2022`

###### Polypropylene sewing-thread spool (`input_polypropylene_spool`)

This card records one atomic exchange.

- Selected flow: Polypropylene sewing-thread spool
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: verified unit mass multiplied by net spool count incorporated in released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Paperboard packaging box (`input_paperboard_box`)

This card records one atomic exchange.

- Selected flow: Paperboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: verified unit mass multiplied by net box count used for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Low-density polyethylene packaging film (`input_ldpe_film`)

This card records one atomic exchange.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured film roll consumption assigned to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Final cotton sewing thread (`final_cotton_sewing_thread`)

This card records one atomic exchange. No semantically exact public Tiangong Product flow has been verified; the same-CPC “Dyed Cotton Yarns” candidate is broader than cotton sewing thread and is rejected.

- Selected flow: Cotton sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass of conforming cotton sewing thread excluding spool and transport packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

###### Final cotton sewing-thread offcuts (`output_final_thread_offcuts`)

This card records one atomic exchange.

- Selected flow: Cotton sewing-thread offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass transferred to external reuse, recycling, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1 kg net saleable cotton sewing thread
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared meters and services | First subdivide lines, lots, and unit operations and collect directly attributable records. | `eu-pef-2021` |
| `allocation_physical_relation` | residual shared burdens | When subdivision is not practicable, use a documented causal physical relation such as operating time, metered throughput, or delivered energy; net-mass allocation is allowed only when it represents that relation. | `eu-pef-2021` |
| `allocation_no_waste_credit` | internal rework and external waste | Return internal rework to the originating lot without co-product credit; report externally transferred waste and any recovery modelling separately. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `plying_twisting` | cotton yarn | warehouse issue and return records | material_id; supplier_lot; gross_kg; return_kg; moisture_basis | weigh and reconcile issued less returned mass | kg | each lot; monthly reconciliation | declared reporting period | all in-scope lines | sum net consumed mass by material_id and lot; divide by conforming output | calibrated scale; supplier specification; stock reconciliation |
| `cp_process_energy` | `multiple` | electricity | submeter and production records | meter_start; meter_end; process_id; lot_id; operating_time | direct submetering preferred; otherwise documented physical allocation | kWh | each shift or lot; monthly reconciliation | declared reporting period | all in-scope equipment | assigned_kWh / conforming_output_kg | meter calibration; utility-bill reconciliation; allocation worksheet |
| `cp_fuel_energy` | `singeing; drying_conditioning` | natural gas | fuel meter and fuel specification | meter_start; meter_end; net_calorific_value; process_id; lot_id | direct fuel metering by operation | m3 and MJ | each shift or lot; monthly reconciliation | declared reporting period | all in-scope burners | fuel_MJ = volume_m3 * NCV_MJ_per_m3; normalize by conforming output | meter calibration; supplier NCV; combustion record |
| `cp_thermal_energy` | `scouring; bleaching; package_dyeing; drying_conditioning` | steam or purchased hot water | thermal meter and utility record | mass_or_volume; inlet_temperature; outlet_temperature; pressure; process_id; lot_id | meter delivered thermal carrier separately by carrier | MJ | each batch; monthly reconciliation | declared reporting period | all in-scope wet and drying equipment | carrier-specific delivered_MJ / process_output_kg; never average carriers | meter calibration; steam/hot-water balance; invoice reconciliation |
| `cp_wet_process_water` | `scouring; bleaching; mercerising; package_dyeing; washing_rinsing` | process water | water meter and batch record | meter_start; meter_end; reused_m3; process_id; lot_id | meter fresh and reused water separately by unit operation | m3 | each batch; monthly reconciliation | declared reporting period | all in-scope wet operations | fresh_m3 = gross_input_m3 - verified_reused_m3; divide by process output | meter calibration; water balance; batch sheet |
| `cp_recipe_chemical` | `scouring; bleaching; mercerising; package_dyeing` | individual recipe chemical | batch recipe, issue, return, and assay records | chemical_id; CAS_or_spec; formulation_kg; active_fraction; return_kg; process_id; lot_id | record every formulation separately and convert only with verified assay | kg | each batch | declared reporting period | all in-scope wet operations | active_kg = (issued_kg - returned_kg) * active_fraction | approved recipe; supplier SDS/specification; calibrated dosing record |
| `cp_wastewater` | `scouring; bleaching; mercerising; package_dyeing; washing_rinsing` | individual wastewater stream | flow meter, batch discharge, and transfer record | stream_id; process_id; volume_m3; destination; COD; pH; temperature; sampling_time | meter each segregated stream before mixing or treatment | m3 | each discharge; monthly reconciliation | declared reporting period | all in-scope wet operations | sum by stream_id and destination; subtract only verified reuse | flow-meter calibration; chain of custody; laboratory report; water balance |
| `cp_air_emissions` | `singeing` | individual air emission | stack test or continuous monitor | pollutant_id; concentration; gas_flow; duration; moisture; oxygen_reference | use applicable EN/ISO method and calculate pollutant mass by emission point | kg | permit or BAT frequency and after material change | declared reporting period | all in-scope singeing emission points | pollutant_kg = concentration * standardised_gas_volume | accredited laboratory report; instrument QA/QC; operating log |
| `cp_refrigerant` | `drying_conditioning` | R-134a | refrigerant inventory and service log | opening_kg; purchases_kg; closing_kg; recovered_kg; equipment_id; lot_allocation | reconcile sealed-system inventory and service additions by refrigerant identity | kg | each service event; annual reconciliation | declared reporting period | in-scope process cooling equipment | R134a_emitted_kg = opening_inventory_kg + purchases_kg - closing_inventory_kg - recovered_kg | technician service record; cylinder weights; leak test |
| `cp_finish_mass` | `lubrication_winding_packaging` | paraffin wax or PDMS | finish issue, return, and formulation records | finish_id; active_fraction; issued_kg; returned_kg; lot_id | record each finish route separately and calculate active mass | kg | each lot | declared reporting period | all in-scope lubrication lines | active_finish_kg = (issued_kg - returned_kg) * active_fraction | supplier specification; batch sheet; calibrated dosing record |
| `cp_packaging` | `lubrication_winding_packaging` | each packaging component | component count, unit mass, and roll-consumption records | component_id; count; sampled_unit_mass; roll_start_kg; roll_end_kg; lot_id | weigh representative units and reconcile issued quantities | kg | each packaging lot | declared reporting period | all packaging for released product | component_kg = net_count * verified_unit_mass or measured_roll_consumption | calibrated scale; supplier specification; count reconciliation |
| `cp_product_output` | `lubrication_winding_packaging` | final cotton sewing thread | finished-goods scale and quality release | lot_id; gross_kg; spool_tare_kg; packaging_tare_kg; net_thread_kg; moisture_basis; release_status | weigh released product and subtract separately measured non-thread tare | kg | each lot | declared reporting period | all released reference product | net_thread_kg = gross_kg - spool_tare_kg - packaging_tare_kg | calibrated scale; tare study; quality release |
| `cp_waste_mass` | `plying_twisting; lubrication_winding_packaging` | each cotton-thread waste stream | waste-bin scale and transfer record | waste_id; source_process; gross_kg; tare_kg; destination; date | weigh each transfer separately by waste identity | kg | each transfer; monthly reconciliation | declared reporting period | all in-scope lines | net_waste_kg = gross_kg - tare_kg | calibrated scale; transfer receipt; mass balance |

### Calculation Rules

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | final_cotton_sewing_thread | net_thread_kg = gross_kg - spool_tare_kg - packaging_tare_kg | gross_kg; spool_tare_kg; packaging_tare_kg | net_thread_kg | `eu-pef-2021` |
| `calc_normalized_flow` | every inventory row | normalized_amount = lot_flow_amount / net_thread_kg | lot_flow_amount; net_thread_kg | amount per 1 kg net thread | `eu-pef-2021` |
| `calc_recipe_active_mass` | each recipe chemical | active_kg = (issued_kg - returned_kg) * active_fraction | issued_kg; returned_kg; active_fraction | active_kg | `eu-textiles-bat-2022` |
| `calc_r134a_emission` | output_refrigerant_r134a_air | R134a_emitted_kg = opening_inventory_kg + purchases_kg - closing_inventory_kg - recovered_kg | opening_inventory_kg; purchases_kg; closing_inventory_kg; recovered_kg | R134a_emitted_kg | `eu-textiles-bat-2022` |

### Data Quality Requirements

| requirement_id | applies_to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and cotton-yarn input | Retain product specification, CPC 26350 evidence, cotton composition, sewing-thread use, yarn count, ply, twist, route states, and final release. | supplier specification; bill of materials; quality release |
| `dq_temporal` | all foreground rows | Prefer a representative continuous 12-month period; disclose shorter campaigns, downtime, seasonality, and product mix. | dated production, meter, recipe, laboratory, and transfer records |
| `dq_completeness` | all processes and flows | Reconcile cotton-yarn mass, thread output, stock change, offcuts, every recipe chemical, every carrier, packaging, wastewater, wastes, and direct emissions; explain gaps without forcing closure. | signed material, water, and energy balances; boundary checklist |
| `dq_uuid` | all selected flows | Before activation, adopt an inventory UUID only after state_code=100 direct read confirms exact name semantics, flow type, property, and unit; unresolved identities remain explicit. | row_id-linked UUID review record |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference flow | Fail if the dataset is not normalized to 1 kg net cotton sewing thread, includes spool/packaging tare, or omits any required qualifier. | `unsd-cpc-3-0-2025`; `eu-pef-2021` |
| `validate_atomic_flows` | every inventory card | Fail any collection label, combined utility, combined chemical, combined packaging, combined waste, or combined emission; each card shall identify one exchange. | `eu-textiles-bat-2022` |
| `validate_route_gate` | conditional processes and cards | Fail if mutually exclusive routes are averaged or a present route lacks its process and atomic exchanges. | `csir-sewing-threads-1979`; `eu-textiles-bat-2022` |
| `validate_water_emissions` | direct discharge | Fail a direct-discharge claim that reports only wastewater volume; add separate monitored pollutant elementary flows, including COD and other relevant substances identified by the input/output inventory. | `eu-textiles-bat-2022` |
| `validate_uuid_state` | UUID-bearing rows | Accept only Tiangong state_code=100 rows with verified exact identity and declared property/unit. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for cotton sewing thread |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and representativeness assessment |
| allowed_use | Broader LCA models when compatible upstream cotton-yarn datasets and all actual conditional routes are linked |
| excluded_use | Man-made sewing thread; generic cotton yarn; cradle-to-gate claims without upstream yarn; dyed/finished claims with omitted wet processing; route-average proxies |
| required_metadata | PCR id; CPC 26350; required qualifiers; facility; geography; reporting period; process gates; recipes; carrier identities; wastewater destination; allocation; data quality; unresolved UUIDs |
| required_quality_disclosure | primary-record share; meter coverage; recipe assay coverage; temporal/site coverage; mass/water/energy balances; shared allocations; excluded flows; direct-emission monitoring; unresolved UUIDs |
| update_trigger | change in cotton-yarn grade, ply/twist, wet route, dye class, finish, energy carrier, refrigerant, packaging, wastewater treatment, allocation, facility, or material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 26350, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-21) | official category identity and separation from non-sewing cotton yarn |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508, BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-21) | unit-operation boundary; per-process material, water, energy, chemical, waste, wastewater and emission monitoring; water ranges; route controls |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Product Environmental Footprint method, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-21) | functional unit, reference-flow normalization, company-specific data, subdivision and physical allocation |
| `csir-sewing-threads-1979` | `handbook` | Hunter, L. and Cawood, M.P., Textiles: Some Technical Information and Data IV: Sewability, Sewing Needles, Threads and Seams, South African Wool and Textile Research Institute of the CSIR, 1979, https://researchspace.csir.co.za/bitstream/10204/4720/1/Hunter%20L_2.pdf (retrieved 2026-08-21) | sewing-thread plying/twist, cotton mercerising, singeing, dyeing, paraffin/silicone lubrication, finishing, winding and quality qualifiers |
