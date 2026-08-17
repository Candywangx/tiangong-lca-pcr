---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.silk-yarn-and-yarn-spun-from-silk-waste-silk-worn-gut
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Silk yarn and yarn spun from silk waste; silk-worn gut

## 1. Scope and Applicability

This PCR applies to foreground production of saleable silk yarn made from incoming raw silk, spun silk yarn made from silk waste, and silkworm gut formed from a dissected silkworm silk gland. The product is modelled at the producer's factory gate before dyeing, weighting, weaving, knitting, retail packaging, and outbound distribution.

The declared route determines which process sections apply. A foreground data package shall not combine reeled or thrown filament yarn, yarn spun from silk waste, and silkworm gut into one undeclared production mix. Sericulture, cocoon production, raw-silk production, and production of purchased silk waste are upstream processes represented by linked datasets rather than by invented foreground values.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.silk-yarn-and-yarn-spun-from-silk-waste-silk-worn-gut |
| classification_refs | CPC 3.0: 26310, Silk yarn and yarn spun from silk waste; silk-worn gut |
| covered_products | Thrown or twisted filament silk yarn made from incoming raw silk; spun silk yarn made from silk waste; silkworm gut formed from a silkworm silk gland |
| excluded_products | Raw silk not thrown (CPC 26110); woven or knitted silk fabric; dyed or weighted silk unless the treatment is explicitly included as an additional foreground process; synthetic or regenerated filament yarn; finished sutures or fishing tackle; retail packaging |
| representative_product | Undyed spun silk yarn made from degummed silk waste |
| production_route | One declared route: filament-yarn forming from raw silk; silk-waste degumming, dressing and spinning; or acid-assisted silkworm-gut forming |
| market_state | Unpackaged, undyed, unweighted saleable yarn or silkworm gut at the factory gate, with declared moisture/conditioning state and quality specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable silk yarn or silkworm gut providing a declared textile-yarn or gut-filament specification |
| How much | 1 kg net dry product mass, excluding any carrier, cone, wrap, pallet, or other packaging |
| How well | Meets the declared route, material origin, sericin condition where applicable, yarn construction, linear density or gut diameter, twist where applicable, and tensile-quality specification |
| How long or cycle | One production batch delivered at the factory gate; no use-stage duration is assigned to this intermediate product |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dry product |
| Reference product flow | Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product route; silk source and species where known; filament or staple form; sericin condition where applicable; single, folded or cabled construction; linear density in tex or, for silkworm gut, diameter and length; twist direction and twist level where applicable; moisture or conditioning basis; quality-test method; production geography; included processing steps; production period |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent data-package field. A route-inapplicable qualifier shall be explicitly marked not applicable rather than omitted.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | reference product and all mass-balance flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass on the declared dry or conditioned basis; retain measured gross mass, packaging tare, moisture or conditioning method, and conversion calculation. |
| `linear_density_tex` | silk yarn and silkworm gut when linear density is specified | Linear density | tex | Express and convert linear density using the Tex System; if measured from yarn packages, declare the conditioning and test procedure. |
| `electricity_metering` | each electricity card | Energy | kWh | Record the electricity supply voltage and supply scenario, preserve metered kWh, and do not merge electricity with steam, natural gas, or other energy carriers. |
| `steam_metering` | delivered steam | Mass | kg | Record delivered steam mass, pressure, condensate-return boundary, and meter or invoice basis; any conversion to energy shall retain the measured steam state and calculation inputs. |
| `fuel_metering` | gaseous natural gas | Mass | kg | Preserve purchased fuel mass and declared supply state; if volume or energy is the raw record, retain measured conditions and the site-specific conversion factor. |
| `chemical_active_mass` | sodium carbonate and acetic acid | Mass | kg | Report each chemical separately as product mass or active-substance-equivalent mass using supplier concentration and batch issue records; do not aggregate chemicals. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_gate` | all routes | Include only the declared route processes under direct foreground control, from receipt of raw silk, silk waste, or dissected silk glands through saleable unpackaged product at the factory gate. | `unsd-cpc-3-0-2025`; `iso-14044-2006` |
| `boundary_upstream_links` | purchased inputs | Link raw silk, silk waste, silk glands, water, chemicals, electricity, steam, and natural gas to upstream datasets with disclosed geography, technology, and supply scenario; do not assign zero burdens to purchased inputs. | `iso-14044-2006` |
| `boundary_route_selection` | product identity | Select one route and declare every included optional step. Silk-waste yarn requires degumming/dressing and spinning; filament yarn requires forming/twisting/winding; silkworm gut requires acid-assisted gland stretching. | `eu-textiles-bref-2023`; `yin-et-al-2021-spun-silk`; `cenis-et-al-2015-silkworm-gut` |
| `boundary_wet_operations` | degumming and washing | Include process water, each chemical, delivered steam, electricity, saleable recovered sericin when produced, and the sericin-bearing wastewater leaving the process. | `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007` |
| `boundary_actual_atomic_exchanges` | all foreground processes | Record every actual material, chemical, electricity supply, steam supply, fuel, waste stream, recovered product, and direct elementary emission as a separate exchange; a flow not pre-listed in this PCR shall still be added as one specific atomic exchange. | `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007` |
| `boundary_exclusions` | downstream and upstream processes | Keep sericulture, cocoon production, raw-silk production, dyeing, weighting, fabric formation, product use, retail packaging, and outbound distribution outside the foreground boundary unless the declared study explicitly adds them as separate processes. | `unsd-cpc-3-0-2025`; `eu-textiles-bref-2023` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One route-specific material received at the foreground facility: raw silk, silk waste, or a dissected silkworm silk gland |
| starting_condition_role | Upstream product input to a directly controlled yarn- or gut-forming route |
| product_classification_scope | CPC 3.0 code 26310 output; incoming raw silk and recovered silk waste retain their own product identities |
| recursive_input_rule | A CPC 26310 silk-yarn input used for gassing or another directly controlled finishing step remains an explicit product input and links to its upstream process; it is not recursively expanded inside the same process. |
| upstream_dataset_requirement | A geographically and technologically representative upstream dataset is required for every purchased input and utility; proxy use shall be disclosed and justified. |
| disclosure | Declare route, starting material, sericin condition, included mechanical and wet processes, gassing status, production geography and period, allocation method, and all unresolved or proxy identities. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `silk_filament_yarn_forming` | Filament silk yarn forming, twisting and winding | conditional | Required when the declared product is filament silk yarn made from incoming raw silk | Foreground filament-yarn production | Per 1 kg net dry filament silk yarn output |
| `silk_waste_degumming_dressing` | Silk-waste degumming and dressing | conditional | Required when the declared product is yarn spun from silk waste | Foreground wet preparation and fibre dressing | Per kg degummed silk fibre output transferred to spinning |
| `spun_silk_spinning` | Spun-silk drafting, spinning, plying and winding | conditional | Required when the declared product is yarn spun from silk waste | Foreground spun-yarn production | Per 1 kg net dry spun silk yarn output |
| `spun_silk_gassing` | Spun-silk yarn gassing | conditional | Included only when protruding fibres and neps are removed with a fuel-gas flame | Foreground route-specific yarn finishing | Per 1 kg net dry gassed spun silk yarn output |
| `silkworm_gut_forming` | Silkworm-gut acid conditioning and stretching | conditional | Required when the declared product is silkworm gut | Foreground gut-filament forming | Per 1 kg net dry silkworm gut output |

### Process: Filament silk yarn forming, twisting and winding (`silk_filament_yarn_forming`)

#### Inputs

##### Product flows

###### Incoming raw silk (`filament_raw_silk_input`)

Raw silk crosses the foreground boundary for doubling, twisting, throwing and winding into filament yarn.

- Selected flow: Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net dry or conditioned mass issued to the route, less returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry filament silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filament_batch_records`
- Sources: `eu-textiles-bref-2023`

###### Medium-voltage grid electricity (`filament_electricity`)

Electricity used by twisting, throwing, winding, ventilation and directly assigned auxiliary equipment is recorded separately from heat and fuel.

- Selected flow: Electricity, medium voltage, grid supply at plant
- Flow property / unit: Energy / kWh
- Amount rule: Route-assigned interval meter reading or documented submeter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry filament silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filament_electricity_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable filament silk yarn (`filament_yarn_output`)

The output is thrown or twisted filament silk yarn meeting the declared construction and linear-density specification.

- Selected flow: Silk filament yarn, thrown and wound
- Flow property / unit: Mass / kg
- Amount rule: Weighed net dry or conditioned conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: route output before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filament_batch_records`
- Sources: `iso-1144-2016`; `iso-2060-1994`; `iso-2062-2009`

###### Recovered silk waste (`filament_recovered_silk_waste`)

Silk offcuts and broken filament transferred as a usable input to another production system are recorded as this product output.

- Selected flow: Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed mass accepted for recovery and transferred out of the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry filament silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filament_batch_records`
- Sources: `yin-et-al-2021-spun-silk`

##### Waste flows

###### Discarded silk waste (`filament_discarded_silk_waste`)

Silk residues not accepted for recovery and sent to waste management are recorded separately from recovered silk waste.

- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed mass crossing the waste-management boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry filament silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filament_batch_records`

##### Elementary flows

### Process: Silk-waste degumming and dressing (`silk_waste_degumming_dressing`)

#### Inputs

##### Product flows

###### Incoming silk waste (`waste_degumming_silk_input`)

Silk waste is the route-specific raw material and is recorded as a product input when purchased or transferred for recovery.

- Selected flow: Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed received mass issued to the batch, corrected to the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg degummed silk fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_batch_records`
- Sources: `yin-et-al-2021-spun-silk`

###### Process water (`waste_degumming_water`)

Water entering degumming, washing and rinsing is recorded as one water product input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered process-water mass, or metered volume converted with recorded water density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg degummed silk fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_water_meter`
- Sources: `eu-textiles-bref-2023`

###### Sodium carbonate (`waste_degumming_sodium_carbonate`)

Sodium carbonate is recorded only for a batch whose documented degumming recipe uses this specific alkali.

- Selected flow: Sodium carbonate `5462c2da-d3dd-41f0-a78f-51024d2d1a69`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net chemical mass issued to the batch from weighed issue records or supplier invoice reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg degummed silk fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_batch_records`
- Sources: `eu-textiles-bref-2023`

###### Supplied steam (`waste_degumming_steam`)

Steam crossing the process boundary for bath heating is recorded separately from electricity and fuel.

- Selected flow: Steam, 10 bar, supplied to plant
- Flow property / unit: Mass / kg
- Amount rule: Metered delivered steam mass assigned to the batch; declare pressure and condensate-return boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg degummed silk fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_steam_meter`
- Sources: `eu-textiles-bref-2023`

###### Medium-voltage grid electricity (`waste_degumming_electricity`)

Electricity used by bath circulation, washing, dressing, combing and directly assigned auxiliaries is recorded independently.

- Selected flow: Electricity, medium voltage, grid supply at plant
- Flow property / unit: Energy / kWh
- Amount rule: Route-assigned interval meter reading or documented submeter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg degummed silk fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_electricity_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Degummed silk fibre (`degummed_silk_fibre_output`)

The dressed fibre output has the route-declared portion of sericin and contaminants removed and is ready for drafting and spinning.

- Selected flow: Degummed silk fibre
- Flow property / unit: Mass / kg
- Amount rule: Weighed net dry or conditioned fibre mass transferred to spinning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: degumming and dressing batch output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_batch_records`
- Sources: `eu-textiles-bref-2023`; `yin-et-al-2021-spun-silk`

###### Recovered sericin (`recovered_sericin_output`)

Sericin isolated as a saleable product is recorded only when recovery, product quality and transfer are documented; dissolved sericin remaining in wastewater is not this product.

- Selected flow: Recovered sericin
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry recovered sericin meeting the declared product specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg degummed silk fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_batch_records`
- Sources: `eu-textiles-bref-2023`

##### Waste flows

###### Silk degumming wastewater (`degumming_wastewater`)

The sericin-bearing aqueous stream sent to on-site or off-site treatment is recorded as one route-specific waste flow.

- Selected flow: Silk degumming wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass, or measured volume converted with recorded density, assigned to the batch before treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg degummed silk fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_batch_records`
- Sources: `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007`

##### Elementary flows

### Process: Spun-silk drafting, spinning, plying and winding (`spun_silk_spinning`)

#### Inputs

##### Product flows

###### Degummed silk fibre input (`spinning_degummed_silk_input`)

Degummed, dressed silk fibre crosses into drafting and spinning as one specific intermediate product.

- Selected flow: Degummed silk fibre
- Flow property / unit: Mass / kg
- Amount rule: Weighed net dry or conditioned fibre mass issued to spinning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `yin-et-al-2021-spun-silk`

###### Medium-voltage grid electricity (`spinning_electricity`)

Electricity used by drafting, roving, spinning, plying, winding, ventilation and directly assigned auxiliary equipment is recorded independently.

- Selected flow: Electricity, medium voltage, grid supply at plant
- Flow property / unit: Energy / kWh
- Amount rule: Route-assigned interval meter reading or documented submeter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_electricity_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Spun silk yarn (`spun_silk_output`)

The conforming output is the representative reference product for the silk-waste spinning route.

- Selected flow: Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net dry or conditioned conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: route output before packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `iso-1144-2016`; `iso-2060-1994`; `iso-2062-2009`; `yin-et-al-2021-spun-silk`

##### Waste flows

###### Discarded silk waste (`spinning_silk_waste`)

Short fibres, neps and off-specification silk sent to waste management are recorded as one silk-waste flow.

- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed mass crossing the waste-management boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `yin-et-al-2021-spun-silk`

##### Elementary flows

### Process: Spun-silk yarn gassing (`spun_silk_gassing`)

#### Inputs

##### Product flows

###### Ungassed spun silk yarn (`gassing_spun_silk_input`)

Spun silk yarn enters this optional process only when a fuel-gas flame is used to remove protruding fibres and neps.

- Selected flow: Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net dry or conditioned input to the gassing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry gassed spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gassing_batch_records`
- Sources: `yin-et-al-2021-spun-silk`

###### Gaseous natural gas (`gassing_natural_gas`)

Natural gas consumed by the gassing flame is recorded as one fuel input.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced fuel mass assigned to the gassing line and production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry gassed spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gassing_gas_meter`
- Sources: `yin-et-al-2021-spun-silk`

###### Medium-voltage grid electricity (`gassing_electricity`)

Electricity used by the gassing machine, drive, controls and directly assigned extraction equipment is recorded separately from natural gas.

- Selected flow: Electricity, medium voltage, grid supply at plant
- Flow property / unit: Energy / kWh
- Amount rule: Line submeter reading or documented allocation from interval-meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry gassed spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gassing_electricity_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gassed spun silk yarn (`gassing_spun_silk_output`)

The output is conforming spun silk yarn after the declared gassing operation.

- Selected flow: Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net dry or conditioned conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: route output before packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gassing_batch_records`
- Sources: `yin-et-al-2021-spun-silk`

##### Waste flows

###### Captured silk waste from gassing (`gassing_silk_waste`)

Captured burnt fibre, neps and off-specification silk sent to waste management are recorded as silk waste.

- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed captured material crossing the waste-management boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry gassed spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gassing_batch_records`
- Sources: `yin-et-al-2021-spun-silk`

##### Elementary flows

###### Fossil carbon monoxide to air (`gassing_carbon_monoxide_air`)

Direct fossil carbon monoxide leaving the gassing process to unspecified air is recorded from route-specific monitoring or a validated site emission inventory.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured or site-inventory mass emitted after abatement; no default factor is supplied by this PCR
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry gassed spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gassing_air_monitoring`
- Sources: `yin-et-al-2021-spun-silk`; `ifc-textiles-ehs-2007`

###### Fine particulate matter to air (`gassing_particulate_air`)

Direct fine particulate matter not captured by the extraction or abatement system is recorded separately from captured silk waste.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured emitted mass after abatement; no default factor is supplied by this PCR
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry gassed spun silk yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gassing_air_monitoring`
- Sources: `yin-et-al-2021-spun-silk`; `ifc-textiles-ehs-2007`

### Process: Silkworm-gut acid conditioning and stretching (`silkworm_gut_forming`)

#### Inputs

##### Product flows

###### Silkworm silk gland (`silk_gland_input`)

A dissected Bombyx mori silk gland is the specific biological material entering the gut-forming route.

- Selected flow: Silkworm silk gland
- Flow property / unit: Mass / kg
- Amount rule: Weighed fresh gland mass issued to the forming batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry silkworm gut output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gut_batch_records`
- Sources: `cenis-et-al-2015-silkworm-gut`

###### Process water (`silkworm_gut_water`)

Water used to prepare the acid bath and rinse the formed gut is recorded separately from acetic acid.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered water mass, or metered volume converted with recorded water density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry silkworm gut output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gut_water_meter`
- Sources: `cenis-et-al-2015-silkworm-gut`

###### Acetic acid (`silkworm_gut_acetic_acid`)

Acetic acid in the conditioning bath is recorded as pure-acid-equivalent mass, distinct from bath water.

- Selected flow: Acetic acid (acetic acid) `c7564d76-47c4-440c-9eb8-3242c38eeb1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Solution mass multiplied by the supplier-certified acetic-acid mass fraction using `calc_acetic_acid_active_mass`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry silkworm gut output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gut_acid_records`
- Sources: `cenis-et-al-2015-silkworm-gut`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable silkworm gut (`silkworm_gut_output`)

The output is acid-conditioned and stretched silkworm gut meeting the declared diameter, length and tensile specification.

- Selected flow: Silkworm gut
- Flow property / unit: Mass / kg
- Amount rule: Weighed net dry conforming product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: route output before packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gut_batch_records`
- Sources: `cenis-et-al-2015-silkworm-gut`; `iso-2062-2009`

##### Waste flows

###### Silkworm tissue waste (`silkworm_tissue_waste`)

Biological tissue remaining after silk-gland removal and sent to waste management is recorded as one specific waste stream.

- Selected flow: Silkworm tissue waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet mass crossing the waste-management boundary, with dry-matter content retained when measured
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry silkworm gut output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gut_batch_records`
- Sources: `cenis-et-al-2015-silkworm-gut`

###### Spent silkworm-gut acetic-acid bath (`silkworm_acidic_wastewater`)

The spent aqueous acetic-acid bath sent to treatment is recorded separately from biological tissue waste.

- Selected flow: Spent silkworm-gut acetic-acid bath
- Flow property / unit: Mass / kg
- Amount rule: Measured bath mass discharged to treatment, or measured volume converted with recorded density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry silkworm gut output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gut_batch_records`
- Sources: `cenis-et-al-2015-silkworm-gut`; `ifc-textiles-ehs-2007`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all routes | Subdivide route-specific processes and separately meter batches, utilities and outputs before applying allocation. | `iso-14044-2006` |
| `allocation_recovered_silk` | recovered silk waste | When recovered silk waste is transferred as a useful product, keep it as a product output and document the allocation relationship; material sent to waste management remains a Waste flow and receives no product credit. | `iso-14044-2006`; `yin-et-al-2021-spun-silk` |
| `allocation_recovered_sericin` | recovered sericin | When saleable sericin is recovered, first subdivide the recovery operation; if shared burdens cannot be subdivided, use a documented physical relationship that reflects the process, and use economic allocation only when no defensible physical relationship exists. | `iso-14044-2006`; `eu-textiles-bref-2023` |
| `allocation_no_unreported_credit` | all wastes and co-products | Do not apply avoided-burden, substitution or recycling credits unless the study explicitly models the additional function and reports the method, substituted product, geography and sensitivity result. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_filament_batch_records` | `silk_filament_yarn_forming` | material, product and silk-waste mass | scale tickets and batch records | batch_id; row_id; gross_mass; tare_mass; moisture_or_conditioning_basis; accepted_output_mass; recovered_mass; discarded_mass | Calibrated scale linked to production and disposition records | kg | Each batch | Representative continuous 12-month period or all batches in the declared shorter period | All included filament-yarn lines | Sum by row_id and batch; subtract tare and returned material; normalize with `calc_normalize_reference` | Calibration records, batch genealogy, recovery acceptance and waste transfer notes |
| `cp_filament_electricity_meter` | `silk_filament_yarn_forming` | medium-voltage grid electricity | interval meter or submeter | meter_id; voltage; supplier; interval_start; interval_end; opening_kwh; closing_kwh; excluded_load_kwh | Calibrated meter; subtract documented non-route loads | kWh | Each interval and monthly reconciliation | Same period as product batches | All included filament-yarn equipment | Sum route kWh and allocate shared measured loads with disclosed driver | Meter calibration, bills and load-allocation worksheet |
| `cp_degumming_batch_records` | `silk_waste_degumming_dressing` | silk waste, sodium carbonate, fibre output, recovered sericin and wastewater | scale, recipe and batch records | batch_id; row_id; gross_mass; tare_mass; moisture_basis; recipe_issue_mass; output_mass; wastewater_mass_or_volume; density; destination | Calibrated scales and batch recipe/disposition records | kg | Each batch | Representative continuous 12-month period or all batches in the declared shorter period | All included degumming and dressing lines | Sum each row separately; convert wastewater volume only with recorded density | Calibration, recipe approval, batch genealogy, discharge and transfer records |
| `cp_degumming_water_meter` | `silk_waste_degumming_dressing` | process water | water meter | meter_id; opening_volume; closing_volume; density; batch_id; reused_water_mass | Calibrated meter with batch assignment | kg | Each batch or metering interval | Same period as degumming batches | All included wet-process lines | Fresh input only; report reused internal water separately without double counting | Meter calibration and water balance |
| `cp_degumming_steam_meter` | `silk_waste_degumming_dressing` | supplied steam | steam meter or supplier record | meter_id; steam_mass; pressure; condensate_return_mass; batch_id | Calibrated steam meter or reconciled supplier record | kg | Each batch or metering interval | Same period as degumming batches | All included wet-process lines | Sum delivered steam crossing the boundary; disclose condensate-return convention | Meter calibration, steam balance and invoice reconciliation |
| `cp_degumming_electricity_meter` | `silk_waste_degumming_dressing` | medium-voltage grid electricity | interval meter or submeter | meter_id; voltage; supplier; interval_start; interval_end; opening_kwh; closing_kwh; excluded_load_kwh | Calibrated meter; subtract documented non-route loads | kWh | Each interval and monthly reconciliation | Same period as degumming batches | All included wet-process and dressing equipment | Sum route kWh and allocate shared measured loads with disclosed driver | Meter calibration, bills and allocation worksheet |
| `cp_spinning_batch_records` | `spun_silk_spinning` | degummed fibre, spun silk and silk-waste mass | scale tickets and batch records | batch_id; row_id; gross_mass; tare_mass; moisture_or_conditioning_basis; accepted_output_mass; discarded_mass | Calibrated scale linked to spinning and disposition records | kg | Each batch | Representative continuous 12-month period or all batches in the declared shorter period | All included spinning lines | Sum by row_id and batch; subtract tare; normalize with `calc_normalize_reference` | Calibration, batch genealogy, quality release and waste transfer notes |
| `cp_spinning_electricity_meter` | `spun_silk_spinning` | medium-voltage grid electricity | interval meter or submeter | meter_id; voltage; supplier; interval_start; interval_end; opening_kwh; closing_kwh; excluded_load_kwh | Calibrated meter; subtract documented non-route loads | kWh | Each interval and monthly reconciliation | Same period as spinning batches | All included spinning equipment | Sum route kWh and allocate shared measured loads with disclosed driver | Meter calibration, bills and allocation worksheet |
| `cp_gassing_batch_records` | `spun_silk_gassing` | yarn input, yarn output and captured silk waste | scale tickets and batch records | batch_id; row_id; gross_mass; tare_mass; conditioning_basis; accepted_output_mass; captured_waste_mass | Calibrated scale linked to gassing and disposition records | kg | Each batch | All gassed batches in the declared period | All included gassing lines | Sum each row separately and normalize with `calc_normalize_reference` | Calibration, batch genealogy, quality release and waste transfer notes |
| `cp_gassing_gas_meter` | `spun_silk_gassing` | gaseous natural gas | fuel meter or invoice | meter_id; raw_volume_or_mass; temperature; pressure; conversion_factor; assigned_batch; supplier | Calibrated meter or supplier record with site-specific conversion | kg | Each interval and monthly reconciliation | Same period as gassed batches | All included gassing burners | Convert raw record to kg using retained measured conditions; allocate shared use with disclosed driver | Meter calibration, gas bills and conversion worksheet |
| `cp_gassing_electricity_meter` | `spun_silk_gassing` | medium-voltage grid electricity | interval meter or submeter | meter_id; voltage; supplier; opening_kwh; closing_kwh; excluded_load_kwh | Calibrated meter; subtract documented non-route loads | kWh | Each interval and monthly reconciliation | Same period as gassed batches | Gassing drive, control and assigned extraction equipment | Sum route kWh and allocate shared measured loads with disclosed driver | Meter calibration, bills and allocation worksheet |
| `cp_gassing_air_monitoring` | `spun_silk_gassing` | carbon monoxide and fine particulate emissions | stack or workplace-exhaust monitoring and operating log | sampling_point; pollutant; concentration; gas_flow; duration; abatement_state; batch_id; detection_limit | Accredited or documented site method applied downstream of included abatement | kg | Representative operating campaigns and after material change | Covers normal, start-up and shut-down conditions in the declared period | Every included gassing exhaust | Calculate emitted mass from measured concentration, flow and duration; report below-detection treatment | Method, calibration, detection limits, lab report and operating log |
| `cp_gut_batch_records` | `silkworm_gut_forming` | silk gland, gut product, tissue waste and spent acidic bath | scale, bath and batch records | batch_id; row_id; gross_mass; tare_mass; acid_bath_mass_or_volume; density; product_dry_mass; tissue_wet_mass; destination | Calibrated scales and batch/disposition records | kg | Each batch | All batches in the declared production period | All included gut-forming stations | Sum each row separately; retain wet/dry basis; normalize with `calc_normalize_reference` | Calibration, batch genealogy, product quality and waste-transfer records |
| `cp_gut_water_meter` | `silkworm_gut_forming` | process water | water meter or weighed addition | batch_id; water_volume_or_mass; density; reused_water_mass | Calibrated meter or scale | kg | Each batch | Same period as gut batches | All included bath and rinse stations | Fresh input only; convert volume only with recorded density | Meter or scale calibration and bath sheet |
| `cp_gut_acid_records` | `silkworm_gut_forming` | acetic acid | supplier certificate and weighed solution issue | batch_id; solution_mass; certified_acetic_acid_mass_fraction; returned_solution_mass | Weighed issue reconciled to supplier concentration | kg active acetic acid | Each batch and supplier lot | Same period as gut batches | All included acid baths | Apply `calc_acetic_acid_active_mass`; do not combine with process water | Scale calibration, certificate of analysis and batch recipe |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every inventory row | normalized_amount = route-period row amount / route-period net dry conforming product mass | row amount; net dry conforming product mass | amount per 1 kg reference product | `iso-14044-2006` |
| `calc_net_dry_product_mass` | yarn or gut product | net_dry_mass = gross conditioned mass - packaging tare - measured water mass above the declared dry basis | gross mass; tare; moisture or conditioning result | kg net dry product | `iso-2060-1994` |
| `calc_acetic_acid_active_mass` | `silkworm_gut_acetic_acid` | active_acetic_acid_mass = net solution mass × supplier-certified acetic-acid mass fraction | solution mass; certified mass fraction; returned solution mass | kg active acetic acid | `cenis-et-al-2015-silkworm-gut` |
| `calc_direct_air_emission` | gassing elementary outputs | emitted_mass = measured concentration × measured exhaust flow × operating duration, with unit conversion and documented below-detection handling | concentration; exhaust flow; duration; abatement state | kg pollutant emitted | `ifc-textiles-ehs-2007` |
| `calc_route_mass_balance` | each route process | mass_balance_gap = total measured mass inputs - total measured product, waste and measured emission outputs, reported with moisture and accumulation terms | all mass inputs; all mass outputs; moisture change; stock change | disclosed kg and percent mass-balance gap | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | every flow card | Preserve row_id, flow direction, flow type, selected flow name and confirmed UUID; an unresolved UUID shall remain explicit and shall not be replaced by a broad candidate. | Flow list/get verification record and manifest review metadata |
| `dq_route` | product and process map | Route, starting material, sericin condition, gassing status and included processes shall be batch-traceable. | Product specification and batch genealogy |
| `dq_measurement` | foreground amounts | Use calibrated meters or scales and retain raw records, tare, unit conversion, allocation driver and detection-limit treatment. | Calibration certificates, meter exports, scale tickets and calculation workbook |
| `dq_temporal` | published average | Cover a representative continuous 12-month period; a shorter campaign is allowed only with production dates, batch coverage and seasonality limitation disclosed. | Production calendar and completeness calculation |
| `dq_completeness` | all processes | Reconcile production, material, chemical, utility, waste, wastewater and direct-emission records; explain every omitted or below-detection exchange. | Route mass balance, utility reconciliation and omission log |
| `dq_external_links` | upstream datasets | Match input identity, geography, technology, voltage, steam pressure and fuel supply state as closely as available; disclose every proxy and mismatch. | Upstream dataset metadata and proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | The data package shall normalize to 1 kg net dry product and use confirmed Spun Silk UUID `6c639604-29e8-44b6-be18-4e0ad97fdef8` for the representative spun-silk product; another covered route shall use an exact reviewed product UUID before release. | `unsd-cpc-3-0-2025`; `iso-14044-2006` |
| `validation_route_declaration` | process map | Exactly one covered product route shall be declared, and every route-required process plus every actually used optional process shall be present. | `eu-textiles-bref-2023`; `yin-et-al-2021-spun-silk`; `cenis-et-al-2015-silkworm-gut` |
| `validation_atomic_inventory` | all inventory rows | Every exchange shall have one row_id, one direction, one flow type and one specific selected flow; combined utilities, chemicals, packaging, wastes or emissions fail validation. | `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007` |
| `validation_foreground_amounts` | all foreground rows | Every amount shall come from a retained foreground record or an explicit calculation from collected records; this PCR supplies no guessed default amount or reasoned-estimate range. | `iso-14044-2006` |
| `validation_wet_route` | silk-waste degumming | A wet-route package shall contain silk waste, process water, each actual chemical, steam when transferred, electricity, degummed fibre, recovered sericin when produced, and route-specific wastewater, with all amounts separately reconciled. | `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007`; `yin-et-al-2021-spun-silk` |
| `validation_gassing` | gassing route | When gassing is included, natural gas, electricity, yarn input/output, captured silk waste, fossil carbon monoxide and fine particulate emissions shall be measured or explicitly documented below detection after abatement. | `yin-et-al-2021-spun-silk`; `ifc-textiles-ehs-2007` |
| `validation_gut_route` | silkworm-gut forming | A gut-route package shall separately record silk gland, process water, active acetic acid, gut output, tissue waste and spent acidic bath and shall declare diameter, length and tensile-quality evidence. | `cenis-et-al-2015-silkworm-gut`; `iso-2062-2009` |
| `validation_mass_balance` | each route | The route mass balance shall report input, product, recovered material, waste, wastewater, measured emissions, moisture change, stock change and residual gap on consistent bases. | `iso-14044-2006` |
| `validation_uuid_resolution` | release readiness | Every route-required unresolved flow identity shall be resolved or accepted through formal review before active or published release; the confirmed reference product, Mass property and Units of mass group identities shall remain unchanged unless superseded by documented public-record review; semantically rejected candidates shall not be substituted. | `unsd-cpc-3-0-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared CPC 26310 silk-yarn or silkworm-gut route |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product-footprint, LCA and supply-chain modelling when route, geography, period, product specification and upstream links match the study |
| excluded_use | Undeclared average across filament yarn, spun silk and silkworm gut; proxy for raw silk, woven fabric, dyed or weighted silk, finished sutures, or a route with materially different wet processing or energy supply |
| required_metadata | PCR id and version; product route; product and flow UUIDs; geography; reference period; silk source/species where known; sericin condition; yarn construction or gut dimensions; linear density or diameter; twist where applicable; moisture basis; process list; utility supply scenarios; allocation method; data owner and review status |
| required_quality_disclosure | Foreground coverage; meter and scale calibration; mass-balance gap; proxy datasets; unresolved identities; below-detection treatment; wastewater destination; abatement state; allocation sensitivity; excluded processes |
| update_trigger | Change in starting material, route, degumming recipe, gassing technology, energy supply, product specification, allocation method, wastewater treatment, abatement, geography, or a material change in measured inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 26310, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Product-category scope and classification identity |
| `eu-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf (retrieved 2026-08-12) | Silk input boundary, yarn processing, silk scouring, utilities, wastewater and monitoring |
| `ifc-textiles-ehs-2007` | Official guidance (`official_guidance`) | IFC / World Bank Group, Environmental, Health, and Safety Guidelines for Textile Manufacturing, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-textiles-manufacturing-ehs-guidelines-en.pdf (retrieved 2026-08-12) | Wastewater, energy, air-emission and monitoring requirements |
| `iso-1144-2016` | Standard (`standard`) | ISO 1144:2016, Textiles — Universal system for designating linear density (Tex System), https://www.iso.org/standard/70774.html (retrieved 2026-08-12) | Linear-density declaration and unit convention |
| `iso-2060-1994` | Standard (`standard`) | ISO 2060:1994, Textiles — Yarn from packages — Determination of linear density (mass per unit length) by the skein method, https://www.iso.org/standard/6837.html (retrieved 2026-08-12) | Yarn mass-per-length measurement and conditioning declaration |
| `iso-2062-2009` | Standard (`standard`) | ISO 2062:2009, Textiles — Yarns from packages — Determination of single-end breaking force and elongation at break using constant rate of extension, https://www.iso.org/standard/45642.html (retrieved 2026-08-12) | Yarn and gut tensile-quality evidence |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (retrieved 2026-08-12) | Boundary, inventory, allocation, normalization and data-quality method |
| `yin-et-al-2021-spun-silk` | Literature (`literature`) | Yin, R. et al., Cleaner Production of Mulberry Spun Silk Yarns via a Shortened and Gassing-free Production Route, Journal of Cleaner Production, DOI: 10.1016/j.jclepro.2020.123690 | Silk-waste degumming, dressing, spinning, gassing and waste-flow decomposition |
| `cenis-et-al-2015-silkworm-gut` | Literature (`literature`) | Cenis, J. L. et al., Mechanical behaviour and formation process of silkworm silk gut, Soft Matter 11 (2015) 8981–8991, DOI: 10.1039/C5SM01877C | Silk-gland, acidic-bath and stretching route for silkworm gut |
