---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-filament-yarn-containing-85-or-more-by-weight-of-such-filaments
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other woven fabrics of man-made filament yarn, containing 85% or more by weight of such filaments

## 1. Scope and Applicability

This PCR applies to factory-gate production of woven fabric whose textile-fibre mass contains at least 85% man-made filament yarn and whose product identity falls within the semantic scope stated below. It supports production of a foreground data package for greige, piece-dyed, printed, or otherwise finished fabric, provided the supplied market state and every applied treatment are declared.

The foreground boundary begins with receipt of man-made filament yarn and other purchased inputs at the fabric-producing site. It includes yarn preparation, weaving, inspection, and packing, plus sizing, desizing, washing, scouring, bleaching, dyeing, printing, coating, functional finishing, thermal treatment, and on-site emission or waste treatment whenever those operations form part of the declared production route. Upstream fibre and filament-yarn manufacture is represented by supplier-specific or suitable secondary datasets and is not recreated inside this foreground system.

The PCR excludes knitted or tufted fabrics; fabrics below the 85% man-made-filament threshold; fabrics whose identity is governed by a more specific category such as tyre cord, high-tenacity-yarn fabric, pile fabric, narrow fabric, or a special coated or laminated fabric; made-up textile articles; apparel; and downstream cutting and sewing. Product classification must be confirmed from composition, construction, and supplied market state rather than inferred from the directory path alone.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-filament-yarn-containing-85-or-more-by-weight-of-such-filaments |
| classification_refs | CPC 3.0: 26720 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Woven fabrics containing at least 85% by textile-fibre mass of man-made filaments, including declared greige, dyed, printed, or finished states that remain within this product category |
| excluded_products | Knitted or tufted fabrics; fabrics below the 85% threshold; staple-fibre-dominant fabrics; tyre cord, high-tenacity-yarn, pile, narrow, or separately classified special fabrics; made-up articles and apparel |
| representative_product | Saleable roll of woven man-made-filament fabric meeting the declared composition, weave, mass-per-area, width, colour, and finish specification |
| production_route | Man-made filament yarn receipt -> yarn preparation and optional sizing -> weaving -> conditional wet pretreatment, coloration, printing, finishing, and thermal treatment -> inspection and packing |
| market_state | Factory-gate fabric in the declared supplied state, normally rolled and packed; moisture state, coating or finish, usable width, and packaging inclusion must be stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide woven fabric made predominantly from man-made filament yarn for subsequent conversion into textile products |
| How much | 1 kg net mass of conforming fabric at the factory gate |
| How well | Meets the declared fibre composition (at least 85% man-made filaments), weave construction, mass per unit area, usable width, colour/print, and finish specification |
| How long or cycle | One completed manufacturing batch or campaign up to factory-gate release; no use-life performance is asserted |
| reference_flow_link | The reference flow is the net mass of conforming saleable fabric needed to fulfil the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming fabric output |
| Reference product flow | Other woven fabrics of man-made filament yarn, containing 85% or more by weight of such filaments `6604db91-24a3-43c8-aeec-8384210e643f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | man-made filament polymer or polymer mix; textile-fibre composition by mass; weave construction; mass per unit area; usable width; greige/dyed/printed state; finishing and thermal-treatment route; coating or lamination status; moisture-conditioning basis; production geography and period; packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg of net conforming fabric after the declared conditioning procedure; exclude cores, pallets, wraps, and other packaging from reference-product mass and inventory them separately. |
| `composition_threshold` | fibre composition | Mass fraction | % by textile-fibre mass | Demonstrate that man-made filaments account for at least 85% of textile-fibre mass; exclude removable packaging, non-textile hardware, and process moisture from the denominator. |
| `area_mass_conversion` | fabric length or area records | Mass and area | kg, m2, g/m2 | Convert area-based production records to mass only from batch-specific usable width, length, and conditioned mass-per-area measurements; retain the measured values and formula. |
| `resource_normalisation` | material, energy, water, waste, and emission records | Relevant measured property | kg, m3, kWh, MJ, or measured emission unit | Normalize each quantity to 1 kg of conforming fabric from the same production period after subtracting documented internal reuse or recovery without creating negative purchases. |
| `wet_process_basis` | water and process liquor | Volume and textile mass | m3 and kg | Record gross intake, separately measured internal reuse/recycle, and net external intake; link batch liquor measurements to the mass of textile treated. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Man-made filament yarn and other purchased inputs received at the fabric-producing site, with supplier, composition, mass, moisture/conditioning basis, and upstream dataset references declared |
| starting_condition_role | Upstream product inputs to the foreground fabric-manufacturing system |
| product_classification_scope | Woven fabrics containing at least 85% by textile-fibre mass of man-made filaments and remaining within the stated semantic category |
| recursive_input_rule | If a fabric input within this same category crosses the foreground boundary, record it once as a product input with an upstream dataset; do not recursively reproduce its embedded fabric-manufacturing inventory inside the current foreground package |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise use geographically, technologically, and temporally representative secondary datasets for filament yarn, chemicals, electricity, fuels, water supply, transport, packaging, and off-site treatment |
| disclosure | Declare the start point, site configuration, product state, included and omitted conditional processes, upstream dataset choices, internal reuse, emission-control arrangement, wastewater destination, allocation method, and packaging treatment |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground process boundary | Include all on-site operations from yarn receipt through release of conforming fabric, and include each optional wet, coloration, printing, finishing, coating, or thermal operation when it occurs for the declared product. | eu-textiles-bat-2022-2508 |
| `sb_inputs_outputs` | foreground inventory | Account for textile materials, process chemicals, water, energy, wastewater, waste gas, recovered materials, wastes, and direct releases at the process level wherever measurement permits. | eu-textiles-bat-2022-2508 |
| `sb_upstream` | purchased inputs | Represent burdens before the declared starting condition through linked upstream datasets; do not omit a material input merely because its manufacture occurs outside the foreground site. | eu-pef-2021-2279 |
| `sb_treatment` | wastewater, waste gas, and solid waste | Include on-site treatment in the process where it occurs; otherwise record the untreated or pretreated waste flow to an external treatment dataset and prevent double counting of the same treatment. | eu-textiles-bat-2022-2508 |
| `sb_capital_goods` | infrastructure and equipment | Capital goods are excluded from the default factory-gate foreground inventory unless the study goal, governing programme, or materiality assessment requires them; disclose the choice. | eu-pef-2021-2279 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01_yarn_preparation_weaving` | Yarn preparation and weaving | required | Always include yarn handling, warping, weaving, and any sizing performed for the declared fabric | Convert purchased filament yarn into woven greige fabric | kg greige fabric leaving weaving |
| `p02_wet_pretreatment` | Wet pretreatment | conditional | Include when desizing, washing, scouring, bleaching, or another wet pretreatment is performed | Prepare fabric for sale or subsequent coloration/finishing | kg pretreated fabric output |
| `p03_coloration_finishing` | Coloration, printing, and finishing | conditional | Include each dyeing, printing, coating, functional-finishing, drying, curing, thermofixation, or heat-setting operation actually used | Impart declared colour, appearance, handle, or functional properties | kg treated fabric output |
| `p04_inspection_packing` | Final inspection and packing | required | Always include final quality sorting, rolling, net-mass determination, and packing | Release the declared factory-gate reference product | 1 kg conforming fabric output |

### Process: Yarn preparation and weaving (`p01_yarn_preparation_weaving`)

#### Inputs

##### Product flows

###### Polyester filament yarn (`polyester_filament_yarn_input`)

Record purchased polyester warp or weft filament yarn as one polymer-specific input; do not combine its mass with another yarn polymer.

- Selected flow: Polyester filament yarn
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include for each polyester-containing product lot; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: weighed receipts or issued-to-production mass corrected for stock change and the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: eu-textiles-bat-2022-2508

###### Polyamide filament yarn (`polyamide_filament_yarn_input`)

Record purchased polyamide filament yarn separately from polyester and regenerated-cellulose yarn.

- Selected flow: Polyamide filament yarn
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include for each polyamide-containing product lot; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: weighed receipts or issued-to-production mass corrected for stock change and the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: eu-textiles-bat-2022-2508

###### Viscose rayon filament yarn (`viscose_filament_yarn_input`)

Record purchased viscose rayon filament yarn separately from synthetic filament yarns.

- Selected flow: Viscose rayon filament yarn
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include for each viscose-containing product lot; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: weighed receipts or issued-to-production mass corrected for stock change and the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: eu-textiles-bat-2022-2508

For any other man-made filament polymer present in the declared fabric, add a separate atomic input row and a separate row for its waste; never merge polymer identities into one exchange.

###### Polyvinyl alcohol warp size (`polyvinyl_alcohol_size_input`)

Record polyvinyl alcohol warp size only when it is applied on site; other sizing chemicals require their own atomic rows.

- Selected flow: Polyvinyl alcohol warp sizing agent
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when dosed; omit otherwise
- Flow property / unit: Mass / kg commercial product
- Amount rule: issued mass minus return to stock, with solids content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: eu-textiles-bat-2022-2508

###### Water for sizing or humidification (`sizing_water_input`)

Record externally supplied water used in on-site sizing or weaving-room humidification separately from recycled water.

- Selected flow: Process water for sizing and humidification
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when water crosses this process boundary; omit otherwise
- Flow property / unit: Volume / m3
- Amount rule: metered gross external intake minus separately metered return to internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: eu-textiles-bat-2022-2508

###### Electricity for yarn preparation and weaving (`weaving_electricity_input`)

Record purchased electricity used by warping, sizing drives, weaving, ventilation, humidification and integrated dust extraction.

- Selected flow: Site electricity supply
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Required where electrically driven equipment is used
- Flow property / unit: Energy / kWh
- Amount rule: process submeter total or documented equipment-level calculation from measured demand and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: eu-textiles-bat-2022-2508

###### Purchased steam for sizing (`sizing_steam_input`)

Record purchased steam separately from electricity and fuels when steam crosses the process boundary for sizing or drying.

- Selected flow: Purchased steam for textile sizing
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when purchased steam is used; omit otherwise
- Flow property / unit: Energy / MJ
- Amount rule: metered supplied steam energy on the declared pressure and condensate-return basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: eu-textiles-bat-2022-2508

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven fabric (`greige_fabric_output`)

Record the conditioned mass of fabric accepted from weaving before any subsequent wet or finishing operation.

- Selected flow: Greige woven man-made-filament fabric
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_quality`
- Sources: eu-textiles-bat-2022-2508

##### Waste flows

###### Waste polyester filament yarn (`polyester_yarn_waste`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Waste polyester filament yarn
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when generated; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Waste polyamide filament yarn (`polyamide_yarn_waste`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Waste polyamide filament yarn
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when generated; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Waste viscose rayon filament yarn (`viscose_yarn_waste`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Waste viscose rayon filament yarn
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when generated; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Woven-fabric edge offcuts (`fabric_edge_offcuts`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Man-made-filament woven-fabric edge offcuts
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when generated; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

##### Elementary flows

###### Particulate matter released from weaving (`weaving_particulate_air`)

Record direct particulate release only when it crosses the site boundary; captured dust is a waste flow instead.

- Selected flow: Particulate matter to air, measured size fraction
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only for a measured direct site release; captured dust remains a separate waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated exhaust flow multiplied by measured concentration and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric leaving weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_measurements`
- Sources: eu-textiles-bat-2022-2508

### Process: Wet pretreatment (`p02_wet_pretreatment`)

#### Inputs

##### Product flows

###### Greige fabric entering wet pretreatment (`pretreatment_fabric_input`)

Record greige or partially treated fabric entering each wet operation and preserve the link to the preceding process.

- Selected flow: Greige woven man-made-filament fabric
- UUID status: unresolved - see manifest row-specific rejection reason
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: eu-textiles-bat-2022-2508

###### Water for wet pretreatment (`pretreatment_water_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Process water for textile wet pretreatment
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when externally supplied water is used; omit otherwise
- Flow property / unit: Volume / m3
- Amount rule: metered gross external intake minus separately metered internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: eu-textiles-bat-2022-2508

###### Sodium hydroxide for scouring (`sodium_hydroxide_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Sodium hydroxide solution for textile scouring
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when dosed; omit otherwise
- Flow property / unit: Mass / kg solution
- Amount rule: measured recipe issue, retaining solution concentration and active mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: eu-textiles-bat-2022-2508

###### Hydrogen peroxide for bleaching (`hydrogen_peroxide_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Hydrogen peroxide solution for textile bleaching
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when dosed; omit otherwise
- Flow property / unit: Mass / kg solution
- Amount rule: measured recipe issue, retaining solution concentration and active mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: eu-textiles-bat-2022-2508

###### Non-ionic textile detergent (`pretreatment_detergent_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Non-ionic textile detergent
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when dosed; each other commercial chemical requires its own atomic row
- Flow property / unit: Mass / kg commercial product
- Amount rule: measured recipe issue with active content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: eu-textiles-bat-2022-2508

###### Electricity for wet pretreatment (`pretreatment_electricity_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Site electricity supply
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when electrically driven equipment is used
- Flow property / unit: Energy / kWh
- Amount rule: process submeter total or documented equipment-level calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: eu-textiles-bat-2022-2508

###### Purchased steam for wet pretreatment (`pretreatment_steam_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Purchased steam for textile wet pretreatment
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when purchased steam is used; omit otherwise
- Flow property / unit: Energy / MJ
- Amount rule: metered supplied steam energy on the declared pressure and condensate-return basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: eu-textiles-bat-2022-2508

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pretreated fabric (`pretreated_fabric_output`)

Record the conditioned mass and treatment state of fabric accepted from pretreatment.

- Selected flow: Pretreated woven man-made-filament fabric
- UUID status: unresolved - see manifest row-specific rejection reason
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_quality`
- Sources: eu-textiles-bat-2022-2508

##### Waste flows

###### Pretreatment wastewater (`pretreatment_wastewater`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Textile pretreatment wastewater
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when wastewater leaves the process for on-site or external treatment
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater volume before the next treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Pretreatment sludge (`pretreatment_sludge`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Textile pretreatment sludge at reported moisture content
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when sludge leaves the process boundary
- Flow property / unit: Mass / kg wet sludge
- Amount rule: measured mass by treatment destination with moisture content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste_records`
- Sources: eu-textiles-bat-2022-2508

##### Elementary flows

###### Chemical oxygen demand released to water (`pretreatment_cod_water`)

Where treated effluent or channelled air leaves the site, calculate relevant pollutant mass from measured flow and concentration; do not duplicate pollutants embedded in wastewater sent to external treatment.

- Selected flow: Chemical oxygen demand to water
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only for treated effluent released from the site; omit when the pollutant remains represented within wastewater sent to external treatment
- Flow property / unit: Mass / kg
- Amount rule: measured flow multiplied by representative measured concentration for the corresponding operating period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_measurements`
- Sources: eu-textiles-bat-2022-2508

### Process: Coloration, printing, and finishing (`p03_coloration_finishing`)

#### Inputs

##### Product flows

###### Fabric entering coloration and finishing (`finishing_fabric_input`)

Record the mass and prior treatment state of fabric entering every applicable coloration, printing, coating, finishing, or thermal-treatment sequence.

- Selected flow: Woven man-made-filament fabric entering coloration and finishing
- UUID status: unresolved - see manifest row-specific rejection reason
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: eu-textiles-bat-2022-2508

###### Water for coloration and finishing (`finishing_water_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Process water for textile coloration and finishing
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when externally supplied water is used; omit otherwise
- Flow property / unit: Volume / m3
- Amount rule: metered gross external intake minus separately metered internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_recipe_energy`
- Sources: eu-textiles-bat-2022-2508

###### Disperse dye formulation (`disperse_dye_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Declared commercial disperse dye formulation
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only for batches using this formulation; each formulation requires its own atomic row
- Flow property / unit: Mass / kg commercial product
- Amount rule: measured recipe issue with active content and colour index retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_recipe_energy`
- Sources: eu-textiles-bat-2022-2508

###### Acid dye formulation (`acid_dye_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Declared commercial acid dye formulation
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only for batches using this formulation; each formulation requires its own atomic row
- Flow property / unit: Mass / kg commercial product
- Amount rule: measured recipe issue with active content and colour index retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_recipe_energy`
- Sources: eu-textiles-bat-2022-2508

###### Reactive dye formulation (`reactive_dye_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Declared commercial reactive dye formulation
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only for batches using this formulation; each formulation requires its own atomic row
- Flow property / unit: Mass / kg commercial product
- Amount rule: measured recipe issue with active content and colour index retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_recipe_energy`
- Sources: eu-textiles-bat-2022-2508

###### Textile pigment formulation (`pigment_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Declared commercial textile pigment formulation
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only for pigment-printing or pigment-finishing batches; each formulation requires its own atomic row
- Flow property / unit: Mass / kg commercial product
- Amount rule: measured recipe issue with active content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_recipe_energy`
- Sources: eu-textiles-bat-2022-2508

###### Acrylic textile binder (`acrylic_binder_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Acrylic binder for textile printing
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when dosed; omit otherwise
- Flow property / unit: Mass / kg commercial product
- Amount rule: measured recipe issue with solids content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_recipe_energy`
- Sources: eu-textiles-bat-2022-2508

###### Silicone textile softener (`silicone_softener_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Silicone softener for textile finishing
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when dosed; omit otherwise
- Flow property / unit: Mass / kg commercial product
- Amount rule: measured recipe issue with active content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_recipe_energy`
- Sources: eu-textiles-bat-2022-2508

###### Electricity for coloration and finishing (`finishing_electricity_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Site electricity supply
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when electrically driven equipment is used
- Flow property / unit: Energy / kWh
- Amount rule: process submeter total or documented equipment-level calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: eu-textiles-bat-2022-2508

###### Purchased steam for coloration and finishing (`finishing_steam_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Purchased steam for textile coloration and finishing
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when purchased steam is used; omit otherwise
- Flow property / unit: Energy / MJ
- Amount rule: metered supplied steam energy on the declared pressure and condensate-return basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: eu-textiles-bat-2022-2508

###### Natural gas for direct thermal treatment (`finishing_natural_gas_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Natural gas combusted in on-site textile-finishing equipment
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only when natural gas is combusted in scope; omit otherwise
- Flow property / unit: Energy / MJ lower heating value
- Amount rule: metered gas consumption converted using the supplier lower-heating-value record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_recipe_energy`
- Sources: eu-textiles-bat-2022-2508

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated fabric (`treated_fabric_output`)

Record accepted output mass and the achieved colour, print, finish, coating, and heat-setting state.

- Selected flow: Treated woven man-made-filament fabric
- UUID status: unresolved - see manifest row-specific rejection reason
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_quality`
- Sources: eu-textiles-bat-2022-2508

##### Waste flows

###### Finishing wastewater (`finishing_wastewater`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Textile coloration and finishing wastewater
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when wastewater leaves the process for on-site or external treatment
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater volume before the next treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Finishing sludge (`finishing_sludge`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Textile coloration and finishing sludge at reported moisture content
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when sludge leaves the process boundary
- Flow property / unit: Mass / kg wet sludge
- Amount rule: measured mass by treatment destination with moisture content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Spent printing paste (`spent_printing_paste`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Spent textile printing paste
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when printing paste is discarded; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured discarded paste mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste_records`
- Sources: eu-textiles-bat-2022-2508

##### Elementary flows

###### Formaldehyde released to air (`formaldehyde_air`)

Record formaldehyde as its own elementary exchange when relevant to the declared recipe and measured release point.

- Selected flow: Formaldehyde to air
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only for a measured direct site release
- Flow property / unit: Mass / kg
- Amount rule: measured mass release or exhaust/effluent flow multiplied by measured concentration and corresponding operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_measurements`
- Sources: eu-textiles-bat-2022-2508

###### Ammonia released to air (`ammonia_air`)

Record ammonia as its own elementary exchange when relevant to the declared recipe and measured release point.

- Selected flow: Ammonia to air
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include only for a measured direct site release
- Flow property / unit: Mass / kg
- Amount rule: measured exhaust flow multiplied by ammonia concentration and corresponding operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_measurements`
- Sources: eu-textiles-bat-2022-2508

### Process: Final inspection and packing (`p04_inspection_packing`)

#### Inputs

##### Product flows

###### Fabric entering final inspection (`inspection_fabric_input`)

Record the conditioned mass entering final inspection from the actual final upstream step.

- Selected flow: Woven man-made-filament fabric in the declared supplied state
- UUID status: unresolved - see manifest row-specific rejection reason
- Flow property / unit: Mass / kg
- Amount rule: measured input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming packed fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_quality`
- Sources: eu-textiles-bat-2022-2508

###### Paperboard roll core (`paperboard_core_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Paperboard textile roll core
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when used; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured bill-of-material mass attributable to released fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric, excluding packaging mass from the reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: eu-textiles-bat-2022-2508

###### Polyethylene roll wrap (`polyethylene_wrap_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Polyethylene film for textile roll wrapping
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when used; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured bill-of-material mass attributable to released fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric, excluding packaging mass from the reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: eu-textiles-bat-2022-2508

###### Polypropylene packing strap (`polypropylene_strapping_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Polypropylene textile-roll packing strap
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when used; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured bill-of-material mass attributable to released fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric, excluding packaging mass from the reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: eu-textiles-bat-2022-2508

###### Wooden pallet (`wooden_pallet_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Wooden pallet for textile-roll dispatch
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include attributable one-way or amortised reusable pallet use; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass multiplied by the documented attributable-use share
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric, excluding packaging mass from the reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: eu-textiles-bat-2022-2508

###### Electricity for inspection and packing (`packing_electricity_input`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Site electricity supply
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when electrically driven inspection or packing equipment is used
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented equipment-level calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: eu-textiles-bat-2022-2508

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming factory-gate woven fabric (`reference_fabric_output`)

This is the quantitative reference output after final quality acceptance.

- Selected flow: Other woven fabrics of man-made filament yarn, containing 85% or more by weight of such filaments `6604db91-24a3-43c8-aeec-8384210e643f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net conforming fabric
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Rejected woven fabric (`rejected_fabric_waste`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Rejected CPC 26720 woven fabric
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when rejected fabric leaves the process as waste
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Waste paperboard roll core (`waste_paperboard_core`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Waste paperboard textile roll core
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when discarded; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Waste polyethylene roll wrap (`waste_polyethylene_wrap`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Waste polyethylene textile roll wrap
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when discarded; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Waste polypropylene packing strap (`waste_polypropylene_strapping`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Waste polypropylene textile-roll packing strap
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when discarded; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

###### Waste wooden pallet (`waste_wooden_pallet`)

Record this exchange as a separate atomic inventory row; use the row-specific applicability, amount, identity, and destination rules below.

- Selected flow: Discarded wooden textile-roll pallet
- UUID status: unresolved - see manifest row-specific rejection reason
- Applicability: Include when a pallet is discarded within the boundary; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: eu-textiles-bat-2022-2508

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | multi-output and shared processes | Avoid allocation by separately metering or otherwise subdividing operations attributable to the declared fabric; investigate justified system expansion only when the additional function is included and reported consistently. | eu-pef-2021-2279 |
| `alloc_physical_relation` | inseparable shared inputs and outputs | If subdivision or justified system expansion is not possible, allocate using a documented physical relationship that reflects causality, such as conditioned mass, machine time, or measured energy demand. | eu-pef-2021-2279 |
| `alloc_other_relation_last` | shared burdens lacking a defensible physical relationship | Use another relationship such as relative economic value only as a last resort; disclose the products, prices, period, currency, factor calculation, and sensitivity. | eu-pef-2021-2279 |
| `alloc_internal_reuse` | internally reused water, heat, size, or fabric | Record gross generation or intake and internal reuse separately; count only net external inputs and final outputs, and do not award an avoided-product credit inside the same foreground system. | eu-textiles-bat-2022-2508 |
| `alloc_waste_and_recovery` | exported residues and recovered materials | Keep waste treatment and any recovered-material output distinct. Apply credits or end-of-life formulas only when required by the governing study method, with the method and parameters disclosed. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | p01_yarn_preparation_weaving; p02_wet_pretreatment; p03_coloration_finishing | yarn and intermediate fabric inputs | weighbridge, scale, ERP issue/return, supplier record | batch_id; material_id; polymer; filament_share; gross_mass; tare; conditioned_mass; moisture_basis; return_mass | calibrated weighing reconciled to issued and returned quantities | kg | each receipt and batch transfer | representative production period, normally at least 12 consecutive months or justified campaign | all sites and lines producing the declared product | sum net conditioned mass by process and product route, then divide by conforming output mass | calibration certificates; supplier composition declarations; batch reconciliation |
| `cp_chemical_use` | p01_yarn_preparation_weaving | sizing and weaving auxiliaries | recipe, dispensing log, stock issue/return | batch_id; chemical_name; supplier; active_content; issued_mass; returned_mass; recovered_mass | weigh or meter each issued and returned chemical | kg | each batch or continuous campaign | same period as reference output | all sizing and weaving lines in scope | net external chemical use equals issued minus return and verified internal recovery | scale/meter calibration; safety data sheet; recipe approval |
| `cp_energy_records` | all processes | electricity, fuel, steam, compressed air | submeter, fuel invoice, boiler or utility log | meter_id; process_id; opening; closing; unit; allocation_driver; operating_hours; recovered_energy | direct process metering preferred; documented engineering allocation only for shared meters | kWh or MJ | continuous or per batch, aggregated monthly | same period as reference output | all included production and support equipment | sum net purchased energy by process; retain recovered energy separately | meter calibration; invoices; allocation workbook; energy audit |
| `cp_wet_process_records` | p02_wet_pretreatment | water, liquor, chemicals, and energy | batch controller, flowmeter, recipe and meter logs | batch_id; textile_mass; water_intake; reused_water; liquor_volume; pH; temperature; chemical_dose; electricity; steam; fuel | automated records or calibrated meters linked to each process step | m3, kg, kWh, MJ | each batch or continuous campaign | same period as reference output | every included wet-treatment line | aggregate gross and reused quantities separately, then normalize net external use to accepted output | flowmeter calibration; recipe log; water balance; process-control export |
| `cp_finishing_recipe_energy` | p03_coloration_finishing | dyes, finishes, water, and thermal energy | recipe, dispensing, flowmeter, energy meter, machine log | batch_id; chemical_id; active_content; dose; water; electricity; steam; fuel; line_speed; temperature; residence_time; recovered_heat | measured recipe issue and utility metering linked to the treatment route | kg, m3, kWh, MJ | each batch or campaign | same period as reference output | every included coloration, printing, coating, finishing, and thermal line | aggregate by declared route and normalize to accepted treated fabric | calibration; recipe approval; machine log; energy audit |
| `cp_output_mass_quality` | all processes | intermediate and conforming product output | calibrated scale and quality release record | batch_id; input_mass; output_mass; width; length; mass_per_area; moisture_basis; defect_grade; accepted_mass; rejected_mass | weigh output and reconcile area-based records using measured width and mass per area | kg, m, m2, g/m2 | each batch or roll | same period as reference output | all product lines and inspection stations | sum accepted conditioned mass by state; segregate rejects and inventory change | scale calibration; laboratory test; inspection release; mass reconciliation |
| `cp_wastewater_waste_records` | p02_wet_pretreatment; p03_coloration_finishing | wastewater, sludge, spent liquor, and solid waste | flowmeter, transfer note, waste manifest, scale | process_id; stream_id; volume; mass; destination; hazardous_status; reused_amount; treatment_route | meter wastewater and weigh or document waste transfers by stream | m3 or kg | each discharge batch or monthly where continuous | same period as reference output | all included process and treatment areas | aggregate each stream by destination; do not combine internal reuse with final discharge | flowmeter calibration; laboratory report; waste manifest; treatment invoice |
| `cp_emission_measurements` | p01_yarn_preparation_weaving; p02_wet_pretreatment; p03_coloration_finishing | direct releases to air or water | stack/effluent measurement and operating log | source_id; pollutant; concentration; flow_rate; sampling_time; operating_time; method; detection_limit; abatement_state | use applicable recognised standard methods and representative operating conditions | mg/Nm3, mg/L, Nm3/h, m3, h, then kg | according to permit and source relevance; at least when process or recipe changes materially | same period as reference output | every relevant on-site discharge point | calculate pollutant mass for matching operating period and normalize to process output | accredited laboratory report; sampling plan; instrument calibration; chain of custody |
| `cp_packing_records` | p04_inspection_packing | packaging and inspection utilities | bill of materials, issue record, electricity submeter | roll_id; material_id; packaging_mass; returnable_flag; pallet_share; electricity | measured bill of materials and metered or documented shared electricity | kg or kWh | each packing batch, aggregated monthly | same period as reference output | all final inspection and packing stations | sum attributable inputs and divide by conforming fabric mass | bill of materials; stock reconciliation; meter record |
| `cp_waste_records` | p01_yarn_preparation_weaving; p04_inspection_packing | textile and packaging waste | scale, waste manifest, internal recovery log | date; process_id; waste_type; mass; destination; internal_reuse; external_recovery; disposal | weigh each waste category and reconcile internal reuse and external transfer | kg | each transfer, aggregated monthly | same period as reference output | all included lines | sum by process, material, and fate; prevent double counting with product outputs | scale calibration; manifest; recycler receipt; mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | all inventory rows | normalized quantity = quantity attributable to the product route / net conforming reference-product mass from the same period | attributable quantity; net conforming fabric mass | quantity per 1 kg reference product | eu-textiles-bat-2022-2508 |
| `calc_composition_share` | product category threshold | man-made filament share (%) = man-made filament mass / total textile-fibre mass x 100; require result >= 85 | supplier composition and verified textile-fibre masses | man-made filament mass percentage | unsd-cpc-3-0-2025 |
| `calc_area_to_mass` | length or area production records | fabric mass (kg) = usable area (m2) x measured mass per area (g/m2) / 1000; reconcile against scale mass and investigate material variance | usable length; usable width; measured mass per area; scale mass | conditioned fabric mass | eu-pef-2021-2279 |
| `calc_water_net_use` | wet processes | net external water = gross external intake - metered water returned for internal reuse within the foreground system; report gross intake and reuse alongside net use | water intake; internal reuse; treated textile mass | m3 water per kg process output | eu-textiles-bat-2022-2508 |
| `calc_emission_mass` | direct air or water releases | pollutant mass = representative concentration x measured discharge or exhaust volume, with unit conversion and matching operating period | concentration; flow or discharge volume; operating time | kg pollutant per kg process output | eu-textiles-bat-2022-2508 |
| `calc_mass_balance` | each process and full foreground system | reconcile conditioned material inputs with product outputs, exported wastes, direct mass releases, and documented inventory change; explain residuals rather than forcing balance | input mass; product mass; waste mass; release mass; inventory change | mass-balance residual and reconciliation statement | eu-textiles-bat-2022-2508 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and material inputs | Retain supplier declarations and batch tests for polymer type, filament share, weave, mass per area, usable width, finish, and conditioned mass; demonstrate the >=85% threshold for the represented product mix. | supplier certificates; laboratory reports; roll and batch records |
| `dq_process_coverage` | process map | Map every actual operation and emission-control step to a process id; document why each conditional process is included or omitted and reconcile transfers between processes. | process flow diagram; route sheet; equipment list; mass reconciliation |
| `dq_measurement` | foreground quantities | Prefer calibrated direct measurement. For shared utilities, document the allocation driver, meter coverage, calculation, and uncertainty; calculations must remain reproducible from retained raw fields. | calibration certificates; meters; invoices; calculation workbook; audit trail |
| `dq_temporal` | foreground dataset | Use a representative production period, normally at least 12 consecutive months; a shorter campaign requires justification, seasonality assessment, and disclosure of abnormal operating conditions. | dated production, meter, purchase, and discharge records |
| `dq_representativeness` | foreground and upstream data | Assess and disclose technological, geographical, temporal, and precision representativeness for significant activity data and direct elementary flows; document substitutions and data gaps. | data-quality assessment; supplier/site metadata; uncertainty notes; eu-pef-2021-2279 |
| `dq_emissions` | wastewater and waste gas | Characterise relevant streams from the chemical inventory and process route, use recognised measurement methods, retain detection limits, and match samples to representative operating conditions. | accredited laboratory results; sampling plan; method reference; eu-textiles-bat-2022-2508 |
| `dq_completeness` | full inventory | Reconcile annual or campaign material, water, energy, wastewater, recovered material, and waste totals to process-level records; report missing data and cut-offs explicitly. | input-output inventory; water and energy balances; waste manifests; eu-textiles-bat-2022-2508 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_category_identity` | product identity | Fail validation if the product is not woven fabric, the man-made filament share is below 85% of textile-fibre mass, or a more specific excluded category governs the product. | unsd-cpc-3-0-2025 |
| `val_reference_flow` | quantitative reference | Require exactly 1 kg net conforming fabric linked to product flow `6604db91-24a3-43c8-aeec-8384210e643f`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg; packaging mass must not be included. |  |
| `val_qualifiers` | reference-flow metadata | Require every listed qualifier, including polymer/composition, weave, mass per area, width, treatment state, finish, conditioning basis, geography, period, and packaging inclusion. | eu-pef-2021-2279 |
| `val_route_boundary` | process coverage | Require yarn preparation, weaving, inspection, and packing; require every conditional wet or finishing process actually used and a reason for each omitted conditional process. | eu-textiles-bat-2022-2508 |
| `val_input_output_inventory` | foreground inventory | Require process-level material, chemical, water, energy, product, wastewater, direct-emission, recovered-material, and waste records relevant to the declared route, with no double counting between waste flows and elementary releases. | eu-textiles-bat-2022-2508 |
| `val_mass_balance` | material consistency | Require a reproducible process and full-system mass balance; flag unexplained residuals for review rather than silently adjusting an input or output. | eu-textiles-bat-2022-2508 |
| `val_allocation` | shared and multi-output processes | Require evidence that subdivision was attempted first and validate the selected physical or last-resort other allocation relationship, factors, period, and sensitivity. | eu-pef-2021-2279 |
| `val_data_quality` | dataset fitness | Require traceable raw records, calibration or equivalent quality evidence, temporal coverage, site and technology representativeness, upstream dataset references, and explicit gap disclosure. | eu-pef-2021-2279; eu-textiles-bat-2022-2508 |
| `val_source_traceability` | evidence-bearing rules | Require every cited source id to resolve in Data Sources and prohibit search summaries, authoring logs, and Tiangong lookup traces from being treated as external evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for the declared woven man-made-filament fabric |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | LCA of downstream textile conversion, apparel, furnishings, industrial textile products, procurement comparisons, and supply-chain modelling when category, geography, technology, period, and supplied state are representative |
| excluded_use | Direct comparison of fabrics with different function or durability; attribution to fibre or yarn production alone; products below the 85% threshold or in excluded special-fabric categories; use-phase or end-of-life claims not modelled by this factory-gate dataset |
| required_metadata | canonical PCR id; product flow UUID; composition and polymer mix; weave; mass per area and width; supplied treatment state; process route; site geography; reference period; conditioning basis; packaging inclusion; upstream datasets; allocation method |
| required_quality_disclosure | process coverage; primary-data share; meter and laboratory coverage; temporal, technological, geographical, and precision representativeness; mass-balance residuals; shared-utility allocation; relevant emission measurements; data gaps; cut-offs; uncertainty and sensitivity |
| update_trigger | Change in polymer or composition class, weave or mass-per-area specification, supplied state, process route, chemistry, energy or water system, emission control, allocation basis, site mix, upstream datasets, or reference period that could materially change the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 resources and explanatory notes, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-10) | Classification context and product-scope threshold |
| `eu-textiles-bat-2022-2508` | standard | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI: http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-10) | Process decomposition; input-output inventory; process monitoring; water, energy, wastewater, air emissions, chemicals, waste, and quality evidence |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, including the 23 May 2022 corrigendum, ELI: http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-10) | Functional-unit structure; life-cycle boundary; multifunctionality hierarchy; representativeness, verification, and data-quality disclosure |
