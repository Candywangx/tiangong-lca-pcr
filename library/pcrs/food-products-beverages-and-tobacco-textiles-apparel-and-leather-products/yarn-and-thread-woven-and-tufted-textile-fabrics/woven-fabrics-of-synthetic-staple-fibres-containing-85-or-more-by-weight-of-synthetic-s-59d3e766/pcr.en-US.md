---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-synthetic-staple-fibres-containing-85-or-more-by-weight-of-synthetic-s-59d3e766
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics of synthetic staple fibres, containing 85% or more by weight of synthetic staple fibres

## 1. Scope and Applicability

This PCR applies to woven fabrics whose fibre composition contains at least 85% synthetic staple fibres by product mass. It supports foreground data packages for fabric made from purchased yarn through yarn preparation, weaving, inspection, and roll preparation, with wet pretreatment, dyeing, printing, coating, lamination, or finishing included only when performed within the reporting facility boundary.

The PCR covers greige or finished woven fabric supplied at the factory gate when the fabric composition, construction, finish state, width, and mass per unit area are declared. It excludes yarn production, production of man-made fibres or polymers, knitted or tufted fabrics, fabrics primarily made from synthetic filaments, apparel manufacture, distribution, use, and end-of-life. Upstream production of purchased yarn, chemicals, energy, water, and packaging is represented by linked upstream datasets rather than recreated within the foreground processes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-synthetic-staple-fibres-containing-85-or-more-by-weight-of-synthetic-s-59d3e766 |
| classification_refs | CPC 3.0: 26740 (exact) |
| covered_products | Woven fabrics containing at least 85% synthetic staple fibres by mass, including greige, dyed, printed, coated, laminated, or otherwise finished variants when their treatment route is declared |
| excluded_products | Synthetic-filament woven fabrics; knitted and tufted fabrics; fabrics with less than 85% synthetic staple fibres by mass; yarn, polymer, fibre, apparel, and made-up textile production |
| representative_product | A market-average roll of woven fabric made predominantly from polyester, polyamide, acrylic, or other synthetic staple-fibre yarn |
| production_route | Purchased-yarn receipt and conditioning; warping and optional sizing; weaving; inspection and roll preparation; optional wet pretreatment, coloration, and finishing; packaging at the factory gate |
| market_state | Greige or finished fabric roll at the manufacturing plant gate; dry mass, finish state, and construction declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Woven fabric containing at least 85% synthetic staple fibres by mass, supplied in the declared greige or finished state |
| How much | 1 kg net dry mass of conforming fabric at the factory gate |
| How well | Meets the declared fibre composition, weave construction, width, mass per unit area, finish state, and applicable product specification |
| How long or cycle | One production lot delivered at the factory gate; no service-life duration is assigned to this intermediate product |
| reference_flow_link | One kilogram of the declared fabric product flow, normalized on net dry mass excluding packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of synthetic staple fibres, containing 85% or more by weight of synthetic staple fibres `b72e06e9-57a4-4e56-8c34-10fa61220193` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | synthetic staple-fibre mass fraction and polymer type(s); other fibre components; greige or finished state; weave construction; fabric width; mass per unit area; dyeing/printing/coating/lamination/finishing route; recycled-content claim if any; production geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | Reference fabric output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net dry conforming fabric; exclude packaging and separately report measured moisture basis and any conversion to dry mass. |
| `fibre_composition_mass_fraction` | Product-category eligibility | Mass fraction | % by mass | Verify by supplier certificate, bill of materials, or laboratory result that synthetic staple fibres are at least 85% of the declared fabric mass. |
| `fabric_area_conversion` | Area-based production records | Mass and area | kg and m2 | Convert area-based records using lot-specific measured mass per unit area; do not substitute a generic conversion factor without disclosure. |
| `process_normalization` | All process inputs and outputs | Mass or metered activity | kg, kWh, MJ, m3, or pollutant-specific mass | Normalize from the same reporting period and production denominator, and document any meter, batch, or line allocation used. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `foreground_gate_boundary` | foreground_system_boundary | Include all on-site yarn preparation, warping, sizing, weaving, inspection, roll preparation, and packaging activities from purchased-yarn receipt to the declared fabric at the plant gate; include wet and thermal treatments when performed on site. | `eu-textiles-bat-2022`; `eu-textiles-bref-2023` |
| `purchased_input_linkage` | upstream_product_inputs | Record purchased yarn, chemicals, energy carriers, water, and packaging as product inputs and link each material input to a geographically and technologically representative upstream dataset. | `eu-pef-recommendation-2021` |
| `conditional_route_disclosure` | conditional_processes | Declare whether sizing, desizing, washing, dyeing, printing, coating, lamination, heat-setting, and finishing occur on site, off site, or not at all; do not silently omit an activity required to reach the declared market state. | `eu-textiles-bat-2022` |
| `direct_release_boundary` | elementary_and_waste_flows | Record on-site air emissions and direct water emissions as elementary outputs; record wastewater sent to external treatment and solid residues sent to waste management as waste outputs, with destination and treatment route. | `eu-textiles-bat-2022` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased synthetic staple-fibre yarn and any other component yarn are received at the reporting facility gate with composition, mass, moisture basis, supplier, and origin declared. |
| starting_condition_role | The purchased yarn is the upstream product input and the starting material for foreground fabric manufacture. |
| product_classification_scope | Woven fabric containing at least 85% synthetic staple fibres by mass; CPC 3.0 code 26740 is classification context, not the canonical PCR identity. |
| recursive_input_rule | If a same-category woven fabric is used as an input, keep it as an explicit product input with its own upstream dataset; do not recursively reproduce its manufacture inside this foreground package. |
| upstream_dataset_requirement | Use representative upstream datasets for purchased yarn, other fibres or yarns, sizing agents, dyes and auxiliaries, fuels, electricity, water, packaging, and external waste treatment; disclose geography, technology, and temporal fit. |
| disclosure | Declare facility, reporting period, loom technology, fabric construction, composition, finish state, included on-site treatments, off-site treatments, allocation, recycled content, and data gaps. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | Yarn receipt, conditioning, warping, and sizing | required | Sizing inputs are conditional when no size is applied | Prepare purchased warp and weft yarn for weaving | kg prepared yarn |
| `weaving` | Weaving | required | Always included for conforming woven fabric | Interlace warp and weft into greige fabric | kg greige fabric |
| `wet_finishing` | Wet pretreatment, coloration, and finishing | conditional | Include each operation performed on site to achieve the declared product state | Convert greige fabric to treated or finished fabric | kg treated fabric |
| `inspection_packaging` | Inspection, mending, roll preparation, and packaging | required | Packaging inputs apply when supplied with the product | Produce the conforming factory-gate fabric roll | kg conforming fabric |

### Process: Yarn receipt, conditioning, warping, and sizing (`yarn_preparation`)

#### Inputs

##### Product flows

###### Purchased polyester staple-fibre yarn (`purchased_synthetic_yarn`)

Purchased polyester staple-fibre yarn is the representative synthetic yarn input. A facility using polyamide, acrylic, polypropylene, or another synthetic staple-fibre yarn must add one separate atomic product-flow row for each actual yarn identity.

- Selected flow: Polyester staple-fibre yarn
- Flow property / unit: Mass / kg
- Amount rule: measured received dry mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Purchased cotton yarn (`other_component_yarn`)

Record purchased cotton yarn only when it is used as the non-synthetic component. Each other component yarn used by the facility must be represented by its own atomic row, and the finished product must still meet the 85% composition threshold.

- Selected flow: Cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: measured received dry mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Polyvinyl alcohol sizing agent (`sizing_chemicals`)

Record polyvinyl alcohol used as warp size by commercial grade and active content. Any starch, polyacrylate, lubricant, antistatic agent, or other preparation chemical used must be added as its own atomic product-flow row.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- Flow property / unit: Mass / kg
- Amount rule: batch issue quantity minus documented return or recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-textiles-bat-2022`

###### Electricity for preparation equipment (`preparation_electricity`)

Include electricity for conditioning, winding, warping, sizing, ventilation, and allocated auxiliary equipment.

- Selected flow: Electricity, at facility
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented line-level allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared sized polyester warp yarn (`prepared_yarn`)

Prepared sized polyester warp yarn is the internal warp intermediate transferred to weaving. Prepared weft yarn, when separately tracked, is represented by a distinct dataset row.

- Selected flow: Prepared sized polyester warp yarn
- Flow property / unit: Mass / kg
- Amount rule: dry input yarn plus retained size minus recorded yarn and size losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Polyester yarn ends from preparation (`preparation_waste`)

Record polyester yarn ends removed during winding, warping, or sizing. Sweepings, unusable cones, and sizing residues are separate waste identities and must not be merged into this row.

- Selected flow: Polyester yarn ends from preparation
- Flow property / unit: Mass / kg
- Amount rule: weighed waste removed from the preparation process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery`

##### Elementary flows

### Process: Weaving (`weaving`)

#### Inputs

##### Product flows

###### Prepared sized polyester warp-yarn input (`weaving_yarn_input`)

Record the prepared sized polyester warp yarn transferred to each weaving lot. Each distinct weft-yarn identity is recorded in a separate atomic product-flow row in the produced data package.

- Selected flow: Prepared sized polyester warp yarn
- Flow property / unit: Mass / kg
- Amount rule: measured or inventory-reconciled dry mass issued to weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Electricity for looms and weaving auxiliaries (`weaving_electricity`)

Include loom drives, air compressors for air-jet looms, humidification, ventilation, and directly attributable auxiliaries.

- Selected flow: Electricity, at facility
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment-power and operating-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-textiles-bat-2022`

###### Compressed air for air-jet looms (`weaving_compressed_air`)

Include compressed air delivered to air-jet looms when that loom technology is used; omit this row only when no compressed-air loom or other direct weaving demand exists.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: submetered compressed-air volume or documented compressor delivery allocated to the weaving lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

###### PM2.5 released from weaving (`weaving_dust_air`)

Record measured PM2.5 released after abatement when it crosses the environment boundary. Other measured particle-size fractions are separate elementary-flow rows; do not duplicate captured dust reported as waste.

- Selected flow: Particulate matter, less than 2.5 µm, to air, unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured mass flow integrated over operating time or documented site emission calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_monitoring`
- Sources: `eu-textiles-bat-2022`

#### Outputs

##### Product flows

###### Greige woven fabric (`greige_fabric`)

Greige fabric is the woven intermediate before optional wet processing or final inspection.

- Selected flow: Greige woven fabric of synthetic staple fibres
- Flow property / unit: Mass / kg
- Amount rule: weighed net dry conforming and off-grade greige fabric produced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Polyester woven-fabric selvedge waste (`weaving_textile_waste`)

Record polyester woven-fabric selvedge waste removed during weaving or edge trimming. Yarn breaks, loom-start waste, and other fibre compositions are separate waste rows.

- Selected flow: Polyester woven-fabric selvedge waste
- Flow property / unit: Mass / kg
- Amount rule: weighed waste removed from weaving and trimming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Wet pretreatment, coloration, and finishing (`wet_finishing`)

#### Inputs

##### Product flows

###### Greige fabric for treatment (`wet_process_fabric_input`)

Include this input only when washing, desizing, dyeing, printing, coating, lamination, heat-setting, or finishing is performed on site.

- Selected flow: Greige woven fabric of synthetic staple fibres
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass charged to the treatment line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Process water (`wet_process_water`)

Record water supplied to washing, desizing, dyeing, rinsing, finishing, and equipment cleaning, net of metered reuse returned to the same process denominator.

- Selected flow: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- Flow property / unit: Mass / kg
- Amount rule: metered water volume converted with the measured or declared water density, minus separately metered water reused or recycled to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per tonne of textile material treated and converted to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-textiles-bat-2022`
- Range: Synthetic-material washing yearly-average water-intensity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 20
  - Unit: m3
  - Basis: per tonne of synthetic material washed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-textiles-bat-2022`
- Range: Fabric batch-dyeing yearly-average water-intensity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 150
  - Unit: m3
  - Basis: per tonne of fabric batch dyed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-textiles-bat-2022`
- Range: Continuous-dyeing yearly-average water-intensity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 16
  - Unit: m3
  - Basis: per tonne of textile material continuously dyed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide (`wet_process_chemicals`)

Record sodium hydroxide used for scouring, pH adjustment, or another declared wet-processing step by product strength and active content.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: issued quantity minus documented return, recovery, or unused remainder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-textiles-bat-2022`

###### Hydrogen peroxide solution, 50% in water (`hydrogen_peroxide_50`)

Record 50% hydrogen peroxide solution when used for bleaching or oxidative treatment; another supplied concentration is a different product-flow identity.

- Selected flow: Hydrogen peroxide solution, 50% in water `afda772f-b130-4c32-9a89-c4e79ba4e0e8`
- Flow property / unit: Mass / kg
- Amount rule: issued product mass minus documented return or unused remainder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-textiles-bat-2022`

###### Acetic acid (`acetic_acid`)

Record acetic acid used for bath pH control, neutralisation, or a declared finishing recipe; supplied solutions of a declared concentration must remain distinguishable in the foreground records.

- Selected flow: Acetic acid `e2450fd4-acdc-4ab3-b8e3-269f8882a44e`
- Flow property / unit: Mass / kg
- Amount rule: issued product mass minus documented return or unused remainder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-textiles-bat-2022`

###### C.I. Disperse Blue 56 dye (`disperse_blue_56`)

Record this dye only when the supplier identity or colour-index declaration confirms C.I. Disperse Blue 56. Every other dye, carrier, surfactant, salt, alkali, reducing agent, coating, binder, or finishing agent is a separate atomic product-flow row.

- Selected flow: C.I. Disperse Blue 56
- Flow property / unit: Mass / kg
- Amount rule: issued product mass minus documented return or unused remainder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-textiles-bat-2022`

###### Purchased steam for wet and finishing operations (`wet_process_thermal_energy`)

Include purchased steam used for drying, curing, thermofixation, or heat-setting. Record steam mass and state; calculate useful energy from documented pressure, temperature, condensate return, and enthalpy. Any directly burned fuel or other purchased heat is a separate atomic row.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass / kg
- Amount rule: metered purchased steam mass, with useful energy calculated separately from documented steam and condensate state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per tonne of textile material thermally treated and converted to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-textiles-bat-2022`
- Range: Thermal-treatment yearly-average specific-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 4.4
  - Unit: MWh
  - Basis: per tonne of textile material thermally treated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated or finished fabric (`treated_fabric`)

Record the dry mass transferred to inspection and declare each treatment that establishes the output state.

- Selected flow: Treated or finished woven fabric of synthetic staple fibres
- Flow property / unit: Mass / kg
- Amount rule: measured net dry output mass by treatment lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Wastewater sent to treatment (`wet_process_wastewater`)

Record flow, treatment destination, and relevant pollutant loads for wastewater leaving the foreground facility for treatment.

- Selected flow: Wastewater, textile wet processing, to water `a60031a7-ea29-49ef-b578-90de910fcf8e`
- Flow property / unit: Mass / kg
- Amount rule: metered wastewater volume converted with measured or declared density, with pollutant characterization for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Chemical oxygen demand discharged to water (`direct_water_emissions`)

When wastewater is discharged directly to the environment, report chemical oxygen demand after on-site treatment; do not duplicate loads embedded in wastewater sent to external treatment. Every other relevant pollutant is a separate elementary-flow row.

- Selected flow: Chemical oxygen demand, to water, unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- Flow property / unit: Mass / kg
- Amount rule: discharge volume multiplied by representative measured concentration, integrated over the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_monitoring`
- Sources: `eu-textiles-bat-2022`

###### Fossil carbon dioxide from thermal treatment (`thermal_air_emissions`)

When fossil fuel is burned on site, report fossil carbon dioxide released from the relevant thermal-treatment or combustion outlet. Carbon monoxide, nitrogen oxides, particulate fractions, volatile organic compounds, and other monitored pollutants are separate elementary-flow rows.

- Selected flow: Carbon dioxide, fossil, to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured mass flow integrated over operating time or documented site emission calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_monitoring`
- Sources: `eu-textiles-bat-2022`

### Process: Inspection, mending, roll preparation, and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Greige fabric for final inspection (`inspection_fabric_input`)

Record greige woven fabric when no wet processing occurs on site. Do not use this row for a treated or finished input.

- Selected flow: Greige woven fabric of synthetic staple fibres
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass transferred to final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Treated fabric for final inspection (`inspection_treated_fabric_input`)

Record treated woven fabric transferred from the on-site wet-finishing process. Omit this row when the product remains greige.

- Selected flow: Treated woven fabric of synthetic staple fibres
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass transferred from wet finishing to final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Corrugated cardboard packaging (`packaging_materials`)

Record corrugated-cardboard cores, sleeves, or boxes supplied with the fabric product. Each other packaging component is a separate product-flow row.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: issued packaging mass assigned to shipped conforming fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polyethylene wrapping film (`polyethylene_packaging_film`)

Record polyethylene film wrapped around the finished roll when it is supplied with the product.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: issued polyethylene-film mass assigned to shipped conforming fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polypropylene strapping (`polypropylene_strapping`)

Record polypropylene strapping used to secure the fabric roll or pallet. Polypropylene twine and cable ties are different product identities and must not be substituted.

- Selected flow: Polypropylene strapping
- Flow property / unit: Mass / kg
- Amount rule: issued polypropylene-strapping mass assigned to shipped conforming fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Wooden pallet (`wooden_pallet`)

Record the wooden pallet supplied with the shipment; reusable-pallet ownership and return arrangements must be declared.

- Selected flow: Wooden pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: pallet mass assigned to shipped conforming fabric after applying the declared reuse convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Electricity for inspection and roll preparation (`inspection_electricity`)

Include inspection machines, mending, rolling, cutting, local extraction, and allocated auxiliary electricity.

- Selected flow: Electricity, at facility
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment-power and operating-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming woven fabric at factory gate (`reference_fabric_output`)

This is the reference product flow. Net dry mass excludes packaging and is accompanied by all required qualifiers.

- Selected flow: Woven fabrics of synthetic staple fibres, containing 85% or more by weight of synthetic staple fibres `b72e06e9-57a4-4e56-8c34-10fa61220193`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net dry conforming fabric
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Off-grade woven synthetic staple-fibre fabric (`final_textile_waste`)

Record rejected off-grade woven synthetic staple-fibre fabric. Inspection cuttings and edge trims are separate waste identities and must be added as separate atomic rows when generated.

- Selected flow: Off-grade woven synthetic staple-fibre fabric
- Flow property / unit: Mass / kg
- Amount rule: weighed waste removed during inspection, trimming, and roll preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation_by_subdivision` | independently_meterable_lines_and_batches | First subdivide processes and use line-, machine-, batch-, or product-specific measurements so shared burdens are avoided where practicable. | `eu-pef-recommendation-2021` |
| `shared_utility_causal_allocation` | shared_energy_water_air_and_treatment | Allocate shared utilities and treatment burdens using a documented causal driver such as metered consumption, machine operating time and rated load, compressed-air demand, or wastewater volume and pollutant load. | `eu-textiles-bat-2022`; `eu-pef-recommendation-2021` |
| `mass_allocation_fallback` | inseparable_fabric_outputs | If causal subdivision is not feasible and multiple fabric grades are jointly produced, allocate remaining burdens by net dry output mass and disclose why physical mass is an appropriate fallback; do not allocate burdens to internal scrap that is immediately returned to the same process. | `eu-pef-recommendation-2021` |
| `recovered_material_disclosure` | exported_scrap_recovered_size_and_heat | Report recovered yarn, fabric scrap, sizing agent, water, solvent, or heat separately and disclose the selected downstream recycling or substitution method; do not claim an avoided burden without the downstream modelling rule. | `eu-textiles-bat-2022`; `eu-pef-recommendation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `yarn_preparation`; `weaving`; `wet_finishing`; `inspection_packaging` | Material inputs, intermediates, conforming output | Scale tickets, production orders, inventory movements, quality records | lot_id; material_id; fibre composition; wet_mass; moisture; dry_mass; input/output/rework status; timestamp | Calibrated scales and lot-level inventory reconciliation | kg dry mass | Each lot, aggregated monthly | At least 12 representative consecutive months or the complete shorter campaign | All included lines and facilities | Sum dry input and output by process and lot; reconcile stock change, rework, and waste; normalize to conforming output | Scale calibration, supplier composition evidence, moisture method, and signed reconciliation |
| `cp_chemical_use` | `yarn_preparation`; `wet_finishing` | Sizing, dyes, auxiliaries, and finishes | Batch recipe, issue/return log, supplier specification | chemical_id; active_content; issued_mass; returned_mass; recovered_mass; batch_id; hazard classification | Batch-level material issue and return reconciliation | kg product and kg active substance | Each batch | Same period as production data | All included preparation and wet-processing lines | Net use equals issued minus returned and recovered quantity; normalize to treated output | Recipe approval, stock reconciliation, supplier safety and technical data |
| `cp_energy_use` | all foreground processes | Electricity, fuel, steam, and useful heat | Meters, invoices, fuel logs, operating records | meter_id; start/end reading; energy carrier; fuel quantity; heating value; recovered_heat; machine_hours; allocation_driver | Submetering preferred; otherwise documented engineering allocation | kWh, MJ, or MWh | Continuous or each billing period; aggregate monthly | At least 12 representative consecutive months or complete campaign | Facility and included process lines | Subtract documented recovered energy returned to the same process; allocate shared consumption using the declared causal driver | Meter calibration, invoice reconciliation, and allocation worksheet |
| `cp_water_and_wastewater` | `wet_finishing` | Process water and wastewater | Flow meters, batch logs, water balances, discharge records | inlet_volume; reused_volume; recycled_volume; discharge_volume; process; batch_id; sampling_period | Metered water balance by process; characterize wastewater at relevant points | m3 and pollutant-specific mass | Continuous or per batch; aggregate monthly | At least 12 representative consecutive months or complete campaign | All included wet-processing and treatment units | Net process water equals inlet minus separately metered reuse/recycling; reconcile discharge, evaporation, product carryover, and stock change | Meter calibration, water-balance closure, sampling and laboratory reports |
| `cp_waste_and_recovery` | all foreground processes | Solid and liquid residues, recovered materials | Weighbridge tickets, bins, manifests, recycler receipts | waste_id; mass; moisture; origin_process; hazardous_status; destination; treatment; recovered_quantity | Weigh by waste stream and destination | kg dry mass where relevant | Each shipment; aggregate monthly | Same period as production data | Entire foreground facility | Sum by waste type and route; avoid double counting internal recirculation | Calibrated scale, manifest, and receiving-facility evidence |
| `cp_emissions_monitoring` | `weaving`; `wet_finishing` | Direct air and water emissions | Stack tests, continuous monitoring, discharge sampling, operating hours | pollutant; concentration; flow; duration; method; detection_limit; abatement_status; sampling_time | Applicable recognized monitoring method and representative sampling | kg pollutant; mg/Nm3; mg/L; m3; h | At permit or BAT-relevant frequency and during representative operation | Same period as production data | All relevant direct release points | Pollutant mass equals representative concentration multiplied by flow and duration; aggregate release points without double counting | Laboratory accreditation, method reference, QA/QC blanks, calibration, and permit report |
| `cp_packaging_records` | `inspection_packaging` | Packaging supplied with product | Packaging bill of materials and issue records | material_id; component; unit_mass; quantity; reusable_flag; shipment_id | Count components and verify representative unit mass | kg | Each shipment or packaging configuration | Same period as production data | All shipped products in scope | Sum material-specific packaging mass and normalize to net dry fabric output | Approved packaging specification and periodic weight check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass` | yarn and fabric mass | dry_mass = measured_wet_mass × (1 - moisture_mass_fraction); use the declared measurement basis and preserve measured values | measured_wet_mass; moisture_mass_fraction | kg dry mass |  |
| `calc_normalized_inventory` | every inventory flow | normalized_amount = reporting_period_flow_amount / reporting_period_net_dry_conforming_fabric_output | flow amount; net dry conforming output | amount per kg reference flow | `eu-pef-recommendation-2021` |
| `calc_fibre_fraction` | product eligibility | synthetic_staple_fraction = dry mass of synthetic staple-fibre components / total dry fibre mass × 100 | component dry masses or verified composition certificate | % by mass |  |
| `calc_direct_emission_mass` | direct air and water emissions | emission_mass = representative concentration × measured flow × applicable operating or discharge duration, with unit conversion and non-detect treatment disclosed | concentration; flow; duration; unit conversion | kg pollutant | `eu-textiles-bat-2022` |
| `calc_mass_balance` | each process and reporting period | mass_balance_gap = material inputs + opening stock - product outputs - waste outputs - closing stock; separately disclose measured volatile or aqueous losses where material | input/output/waste/stock masses | kg and % of inputs | `eu-textiles-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and material inputs | Retain lot-level composition, polymer type, staple-fibre evidence, construction, finish state, width, mass per unit area, and supplier or production identity. | Product specification, supplier certificate, bill of materials, and lot quality record |
| `dq_temporal_representativeness` | all foreground records | Use a representative continuous 12-month period where available; for shorter campaigns disclose dates, production coverage, seasonality, and reasons the period is representative. | Production calendar, meter coverage, and campaign record |
| `dq_technology_geography` | process and upstream datasets | Identify loom type, wet-processing technology, abatement, facility geography, and upstream dataset geography and technology; justify proxies. | Equipment register, process flow sheet, and dataset metadata |
| `dq_completeness` | inputs, outputs, wastes, and direct emissions | Reconcile material, water, and energy inventories; document excluded flows and demonstrate that conditional operations match the declared market state. | Signed balances, inventory-of-inputs-and-outputs review, and exclusion log |
| `dq_measurement_traceability` | measured and calculated amounts | Preserve raw readings, calibration status, formulas, allocation drivers, sampling methods, detection-limit handling, and responsible person. | Calibration certificates, laboratory reports, invoices, and calculation workbook |
| `dq_external_verifiability` | published data package | Make source references, foreground protocols, quality disclosures, and calculation lineage available for independent review without exposing protected commercial data. | Verification package and reviewer record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_composition` | reference_product | Confirm that synthetic staple fibres comprise at least 85% by mass and that the product is woven rather than knitted, tufted, or primarily filament-based. | `un-cpc-3.0-2025` |
| `validate_reference_identity` | reference_flow | Confirm product-flow UUID `b72e06e9-57a4-4e56-8c34-10fa61220193`, Mass flow-property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and 1 kg net dry reference amount. |  |
| `validate_route_coverage` | foreground_process_map | Confirm yarn preparation, weaving, inspection, and roll preparation are included and each wet, thermal, coating, printing, lamination, or finishing operation used to reach the declared product state is included or explicitly linked as off-site. | `eu-textiles-bat-2022` |
| `validate_material_balance` | process_inventory | Require a documented material-balance reconciliation for each process and investigate material gaps before publication. | `eu-textiles-bat-2022` |
| `validate_wet_process_performance` | conditional_wet_processing | When applicable, compare yearly-average water intensity on the matching process basis with 5–20 m3/t for synthetic-material washing, 10–150 m3/t for fabric batch dyeing, or 2–16 m3/t for continuous dyeing; values outside the relevant screen require explanation and are not automatically invalid. | `eu-textiles-bat-2022` |
| `validate_thermal_energy` | conditional_thermal_treatment | When thermal treatment is included, compare net yearly-average specific energy with 0.5–4.4 MWh/t of textile material thermally treated; values outside the screen require explanation and are not automatically invalid. | `eu-textiles-bat-2022` |
| `validate_emission_routing` | waste_and_elementary_outputs | Confirm wastewater to external treatment is a waste flow, direct releases are elementary flows, captured residues are waste flows, and no pollutant mass is double counted. | `eu-textiles-bat-2022` |
| `validate_allocation_and_quality` | published_foreground_package | Confirm shared burdens use a disclosed causal driver or justified mass fallback and that temporal, technological, geographical, completeness, and traceability evidence is retained. | `eu-pef-recommendation-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for woven synthetic staple-fibre fabric manufacture |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product and supply-chain LCA when composition, construction, finish state, technology, geography, reporting period, system boundary, and allocation are compatible with the study |
| excluded_use | Direct comparison of fabrics with different functions or finish states without equivalence; apparel use-phase claims; polymer or fibre production; knitted, tufted, or synthetic-filament fabric modelling; unsupported facility or regional extrapolation |
| required_metadata | PCR id; product-flow UUID; composition and polymer types; staple-fibre evidence; construction; greige/finished state; width; mass per unit area; treatment route; loom technology; facility and geography; reporting period; recycled content; allocation; upstream datasets; data owner |
| required_quality_disclosure | Foreground coverage; meter and scale coverage; dry-mass conversion; mass/water/energy balance results; conditional operations; emission monitoring; allocation drivers; upstream proxy choices; excluded flows; uncertainty and unresolved data gaps |
| update_trigger | Change in fibre composition or threshold eligibility, yarn source, loom or wet-processing technology, product finish, facility, allocation, abatement, upstream dataset, regulatory requirement, or a material change in water, energy, chemical, waste, or emission intensity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3.0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 26740, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Official product-category title, 85% synthetic-staple-fibre threshold, and exclusions from adjacent filament, artificial-staple, special-fabric, and knitted-fabric categories |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, CELEX 32022D2508, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 (retrieved 2026-08-11) | Fabric-production and weaving process scope; input/output inventory; monitoring; chemical, water, energy, waste, wastewater, and air-emission rules; official water and thermal-energy screening ranges |
| `eu-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, published January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-11) | Sector and fibre applicability; process decomposition for synthetic textile materials and finishing routes |
| `eu-pef-recommendation-2021` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Life-cycle dataset modelling, upstream linkage, allocation hierarchy, data quality, disclosure, and verification context |
