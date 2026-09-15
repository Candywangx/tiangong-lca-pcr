---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-ferro-alloys
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other ferro-alloys

## 1. Scope and Applicability

This PCR applies to factory-gate production of ferro-alloys that are not separately classified as ferro-manganese, ferro-chromium, or ferro-nickel. Covered products include ferrosilicon, ferrovanadium, ferromolybdenum, ferrotungsten, ferrotitanium, ferroniobium, ferroboron, ferrophosphorus, and other iron-based master alloys meeting the declared residual category boundary. The data package shall identify one actual alloy grade; this PCR does not authorize an unspecified average across unlike alloy chemistries or production routes.

The foreground boundary begins with receipt of burden-bearing raw materials and energy at the ferro-alloy plant and ends with a saleable, composition-tested product at the factory gate. It includes onsite material handling, reduction or remelting, tapping and ladle treatment, solidification, crushing, screening, internal recycling, and associated air-pollution-control operations when performed. It excludes upstream mining and production already represented by supplier datasets, transport after the factory gate, use in iron or steel making, downstream steel production, and capital goods unless the study goal explicitly includes them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.other-ferro-alloys |
| classification_refs | CPC 3.0: 41115 Other ferro-alloys |
| covered_products | Declared grades of ferrosilicon, ferrovanadium, ferromolybdenum, ferrotungsten, ferrotitanium, ferroniobium, ferroboron, ferrophosphorus, and other residual ferro-alloys |
| excluded_products | Ferro-manganese; ferro-chromium; ferro-nickel; pig iron and spiegeleisen; directly reduced iron; iron or steel powders; crude steel; pure alloying metals; silicon metal when not sold as a ferro-alloy |
| representative_product | A composition-tested, saleable declared grade of other ferro-alloy at the producing plant |
| production_route | Site-declared carbothermic submerged-arc reduction, metallothermic or silicothermic reduction, induction/remelting, or another documented route; do not combine unlike routes without separate inventories |
| market_state | Solid lumps, granules, or powder at the producing plant gate, with declared alloy grade, particle-size class, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of one declared grade of other ferro-alloy for use as an alloying, deoxidizing, or process additive |
| How much | 1 kg net saleable product |
| How well | Conforming to the producer-declared chemical composition, carbon content, physical form, particle-size class, and acceptance specification |
| How long or cycle | One production campaign or reporting period represented by the dataset; no service-duration credit is assigned |
| reference_flow_link | reference_product_other_ferroalloy |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable other ferro-alloy at the factory gate |
| Reference product flow | Other ferro-alloy, declared grade, at plant |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy designation and composition; carbon content; reduction or remelting route; furnace or reaction-vessel type; plant geography; product form and particle-size class; moisture if material; packaging state; reporting period; electricity supply; carbon-reducer origin; off-gas fate; slag, dust, and off-spec-product fate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the net mass of accepted saleable product at the factory gate; exclude pallets and packaging, and report moisture when it materially affects comparability. |
| `grade_assay` | product and intermediate alloy | Mass fraction | kg/kg | Report the campaign-weighted chemical assay and carbon content used to identify the declared grade; do not infer grade from trade name alone. |
| `energy_conversion` | electricity and other metered energy | Energy | kWh or MJ | Preserve the metered energy carrier and unit; document every conversion factor and do not merge electricity with heat or fuel. |
| `mass_reconciliation` | each production route | Mass | kg | Reconcile measured charge, saleable product, internally recycled material, slag, captured dust, and other recorded losses for the same reporting period; explain unresolved imbalance. |
| `air_emission_mass` | direct atmospheric emissions | Mass | kg | Report pollutant mass for the declared air compartment and monitoring basis; retain dry/wet gas, oxygen correction, capture, flare, or recovery assumptions. |

## 5. System Boundary

Include all onsite operations needed to convert received feedstocks into the declared saleable grade, including charge preparation, furnace or reaction-vessel operation, tapping, ladle treatment, casting or granulation, crushing and screening, internal recycling, and operation of dust or off-gas controls. Upstream production of electricity, ores, concentrates, reducers, fluxes, scrap preparation, and packaging shall be linked as background datasets rather than duplicated inside the foreground process.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Composition- and state-declared ores, concentrates, oxides, iron units, reducers, fluxes, electrodes, electricity, and water as received at the ferro-alloy plant boundary |
| starting_condition_role | Burden-bearing upstream inputs to the foreground ferro-alloy production route |
| product_classification_scope | One declared other-ferro-alloy grade within the residual CPC 41115 boundary; separately classified ferro-manganese, ferro-chromium, and ferro-nickel are outside scope |
| recursive_input_rule | When an input is itself an other ferro-alloy, record it as a separately sourced upstream product with its grade, route, and supplier dataset; do not recursively reproduce the same foreground route inside itself |
| upstream_dataset_requirement | Link each purchased material and energy input to a geographically and technologically representative cradle-to-gate dataset, or disclose a named data gap without substituting a proxy UUID |
| disclosure | Declare product chemistry and form, process route, furnace enclosure, electricity supply, carbon-source origin, internal recycling, off-gas capture or use, slag and dust fate, allocation, geography, and reporting period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_plant_gate` | foreground system | Start at receipt of burden-bearing inputs and end at accepted product leaving the producing plant; include onsite pollution-control operations associated with production. | `us-epa-ap42-ferroalloy-1995` |
| `boundary_route_separation` | multi-route facilities | Keep carbothermic, metallothermic, remelting, and conditioning inventories separate until measured common services require documented allocation. | `us-epa-ap42-ferroalloy-1995` |
| `boundary_offgas_residues` | furnace gas, slag, and dust | Record off-gas combustion, recovery, flaring, captured dust, slag reuse, sale, recycling, or disposal according to the actual site fate. | `us-epa-ap42-ferroalloy-1995` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| carbothermic_smelting | Carbothermic submerged-arc smelting | conditional | Include when the declared alloy is produced by carbon reduction in a submerged electric arc or equivalent resistance furnace | Foreground reduction, tapping, and primary gas control | kg molten or cast route product |
| metallothermic_reduction | Metallothermic or silicothermic reduction | conditional | Include when aluminium, silicon, or both reduce a declared metal oxide to the ferro-alloy | Foreground reaction, tapping, and primary dust control | kg molten or cast route product |
| product_conditioning | Product cooling, crushing, screening, and release | required | Always include; zero-value an operation only with evidence that the saleable product bypasses it | Foreground finishing and factory-gate release | 1 kg net saleable other ferro-alloy |

### Process: Carbothermic submerged-arc smelting (`carbothermic_smelting`)

#### Inputs

##### Product flows

###### Quartz feed (`cb_quartz`)

Record quartz only when silica is charged as a reactant for the declared grade.

- Selected flow: Quartz, declared metallurgical grade
- Flow property / unit: Mass / kg
- Amount rule: measured dry or as-received mass with moisture basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cb_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Iron oxide concentrate (`cb_iron_oxide_concentrate`)

Record the chemically declared iron-bearing oxide feed when it crosses the plant boundary.

- Selected flow: Iron oxide concentrate, declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured received mass and retained moisture and iron assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cb_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Steel scrap iron unit (`cb_steel_scrap`)

Record prepared steel scrap when it supplies iron to the furnace charge.

- Selected flow: Steel scrap, declared grade and preparation state
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass net of rejected receipts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cb_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Metallurgical coke reducer (`cb_metallurgical_coke`)

Record coke as one distinct carbon-reducer input; do not combine it with charcoal, coal, or wood chips.

- Selected flow: Metallurgical coke, declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass with moisture, ash, and carbon basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cb_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Limestone flux (`cb_limestone`)

Record limestone when charged as a flux for the declared furnace campaign.

- Selected flow: Limestone, declared flux grade
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass with moisture and carbonate basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cb_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Graphite electrode consumption (`cb_graphite_electrode`)

Record the measured net consumption of the declared furnace electrode type.

- Selected flow: Graphite electrode, declared furnace grade
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts minus closing stock and recoverable remnants
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cb_electrodes`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Furnace electricity (`cb_electricity`)

Record electricity delivered to the submerged-arc furnace and its dedicated controls separately from other energy carriers.

- Selected flow: Alternating current, actual site supply
- Flow property / unit: Energy / MJ
- Amount rule: metered electricity attributable to the furnace campaign, converted to MJ with the documented conversion rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cb_electricity`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Cooling-water make-up (`cb_cooling_water`)

Record only make-up water entering the plant system; report recirculation separately in operational metadata without counting it repeatedly as a boundary input.

- Selected flow: Cooling-water make-up, declared source and treatment state
- Flow property / unit: Mass / kg
- Amount rule: metered make-up water assigned to the furnace campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cb_water`
- Sources: `us-epa-ap42-ferroalloy-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molten or cast carbothermic ferro-alloy intermediate (`cb_molten_alloy`)

Record the actual declared alloy grade transferred to conditioning, preserving its physical state.

- Selected flow: Molten or cast other ferro-alloy intermediate, declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass reconciled to taps and retained inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cb_product`
- Sources: `us-epa-ap42-ferroalloy-1995`

##### Waste flows

###### Carbothermic furnace slag (`cb_slag`)

Record slag as waste only when its actual site fate meets the dataset's waste-flow definition; separately disclose internal recycle or sale as a co-product.

- Selected flow: Carbothermic ferro-alloy furnace slag, declared composition
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the process by the declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cb_residues`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Captured furnace dust (`cb_captured_dust`)

Record collected particulate removed by baghouse, scrubber, or other primary control with its treatment state and destination.

- Selected flow: Captured carbothermic ferro-alloy furnace dust
- Flow property / unit: Mass / kg
- Amount rule: measured collected mass adjusted for retained moisture when relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cb_residues`
- Sources: `us-epa-ap42-ferroalloy-1995`

##### Elementary flows

###### Fossil carbon monoxide to air (`cb_co_air`)

Record uncaptured or discharged fossil carbon monoxide after any combustion, recovery, or flare operation. Biogenic carbon monoxide is a distinct exchange and shall not be merged into this row.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) / kg; unit group Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: monitored or engineering-calculated fossil carbon-monoxide stack and fugitive mass for the campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cb_air_emissions`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Fossil carbon dioxide to air (`cb_co2_air`)

Record direct fossil carbon dioxide from metallurgical coke, fossil electrode consumption, and any other declared fossil carbon source. Biogenic carbon dioxide is a distinct exchange and shall not be merged into this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) / kg; unit group Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: monitored or carbon-balance-derived direct fossil carbon-dioxide mass for the campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg molten or cast carbothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cb_air_emissions`
- Sources: `us-epa-ap42-ferroalloy-1995`

### Process: Metallothermic or silicothermic reduction (`metallothermic_reduction`)

#### Inputs

##### Product flows

###### Vanadium pentoxide feed (`mt_vanadium_pentoxide`)

Record vanadium pentoxide only for a declared ferrovanadium route that consumes it.

- Selected flow: Vanadium pentoxide, declared purity and physical state
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass and retained assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Molybdenum trioxide feed (`mt_molybdenum_trioxide`)

Record molybdenum trioxide only for a declared ferromolybdenum route that consumes it.

- Selected flow: Molybdenum trioxide, declared purity and physical state
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass and retained assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Tungsten trioxide feed (`mt_tungsten_trioxide`)

Record tungsten trioxide only for a declared ferrotungsten route that consumes it.

- Selected flow: Tungsten trioxide, declared purity and physical state
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass and retained assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Niobium pentoxide feed (`mt_niobium_pentoxide`)

Record niobium pentoxide only for a declared ferroniobium route that consumes it.

- Selected flow: Niobium pentoxide, declared purity and physical state
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass and retained assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Titanium dioxide feed (`mt_titanium_dioxide`)

Record titanium dioxide-bearing feed only for a declared ferrotitanium route that consumes it.

- Selected flow: Titanium dioxide, declared purity and physical state
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass and retained assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Aluminium reductant (`mt_aluminium`)

Record aluminium as a distinct reducer when used in the declared metallothermic reaction.

- Selected flow: Aluminium metal, declared purity and particle form
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Ferrosilicon reductant (`mt_ferrosilicon_reductant`)

Record ferrosilicon as a distinct reducer when used in the declared silicothermic reaction.

- Selected flow: Ferrosilicon, declared silicon and carbon grade
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Steel scrap iron unit (`mt_steel_scrap`)

Record prepared steel scrap when it supplies iron to the metallothermic charge.

- Selected flow: Steel scrap, declared grade and preparation state
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass net of rejected receipts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Calcium oxide flux (`mt_calcium_oxide`)

Record calcium oxide only when it is charged as a flux in the declared reaction.

- Selected flow: Calcium oxide, declared flux grade
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_materials`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Auxiliary electricity (`mt_electricity`)

Record electricity for charge preparation, preheating, fume extraction, and dedicated route equipment without combining it with fuel.

- Selected flow: Alternating current, actual site supply
- Flow property / unit: Energy / MJ
- Amount rule: metered electricity attributable to the metallothermic campaign, converted to MJ with the documented conversion rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mt_electricity`
- Sources: `us-epa-ap42-ferroalloy-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molten or cast metallothermic ferro-alloy intermediate (`mt_molten_alloy`)

Record the actual declared alloy grade transferred to conditioning, preserving its physical state.

- Selected flow: Molten or cast other ferro-alloy intermediate, declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured recovered alloy mass reconciled to reaction batches and retained inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mt_product`
- Sources: `us-epa-ap42-ferroalloy-1995`

##### Waste flows

###### Metallothermic reaction slag (`mt_slag`)

Record the chemically declared reaction slag according to its actual recycling, sale, treatment, or disposal fate.

- Selected flow: Metallothermic ferro-alloy reaction slag, declared composition
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the process by the declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_residues`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Captured reaction dust (`mt_captured_dust`)

Record particulate captured from charging, reaction, tapping, and cooling with its actual treatment state and destination.

- Selected flow: Captured metallothermic ferro-alloy reaction dust
- Flow property / unit: Mass / kg
- Amount rule: measured collected mass adjusted for retained moisture when relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg molten or cast metallothermic route product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mt_residues`
- Sources: `us-epa-ap42-ferroalloy-1995`

##### Elementary flows

### Process: Product cooling, crushing, screening, and release (`product_conditioning`)

#### Inputs

##### Product flows

###### Molten or cast ferro-alloy intermediate (`pc_molten_alloy`)

Record the route-linked intermediate entering cooling or finishing; preserve alloy grade and producing process.

- Selected flow: Molten or cast other ferro-alloy intermediate, declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass from the declared upstream route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable other ferro-alloy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pc_internal_transfer`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Conditioning electricity (`pc_electricity`)

Record electricity for cooling auxiliaries, crushing, screening, conveying, and dedicated dust collection.

- Selected flow: Alternating current, actual site supply
- Flow property / unit: Energy / MJ
- Amount rule: metered electricity attributable to product conditioning, converted to MJ with the documented conversion rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable other ferro-alloy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pc_electricity`
- Sources: `us-epa-ap42-ferroalloy-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable declared-grade other ferro-alloy (`reference_product_other_ferroalloy`)

This is the reference product after acceptance testing and final mass determination.

- Selected flow: Other ferro-alloy, declared grade, at plant
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) / kg; unit group Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: 1 kg net accepted product by definition; collect total campaign output before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable other ferro-alloy at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pc_product_release`
- Sources: `unstats-cpc-3-2025`; `us-epa-ap42-ferroalloy-1995`

##### Waste flows

###### Off-spec ferro-alloy scrap (`pc_offspec_scrap`)

Record rejected or off-size alloy as waste only when it leaves internal recycling and meets the declared waste-flow status.

- Selected flow: Off-spec other ferro-alloy scrap, declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured mass by actual internal recycle, external recycling, sale, or disposal fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable other ferro-alloy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pc_residues`
- Sources: `us-epa-ap42-ferroalloy-1995`

###### Captured crushing and screening dust (`pc_captured_dust`)

Record dust collected from product breaking, crushing, screening, transfer, and storage with its actual fate.

- Selected flow: Captured other ferro-alloy crushing and screening dust
- Flow property / unit: Mass / kg
- Amount rule: measured collected mass attributable to the declared product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net saleable other ferro-alloy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pc_residues`
- Sources: `us-epa-ap42-ferroalloy-1995`

##### Elementary flows

###### Residual PM10 to air (`pc_pm10_air`)

Record residual particulate matter no greater than 10 micrometres discharged after conditioning dust controls.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: monitored or engineering-calculated discharged mass attributable to the declared campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net saleable other ferro-alloy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pc_air_emissions`
- Sources: `us-epa-ap42-ferroalloy-1995`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | route and campaign inventories | Avoid allocation by separate metering and subdivision of carbothermic, metallothermic, remelting, and conditioning operations wherever records permit. |  |
| `allocation_internal_recycling` | internally recycled alloy, slag, and dust | Keep burdens and credits for material recycled within the foreground system inside that system; do not create an exported co-product for an internal transfer. | `us-epa-ap42-ferroalloy-1995` |
| `allocation_exported_coproduct` | sold slag, recovered furnace gas, or other exported co-product | Apply documented physical causality when measurable; otherwise allocate unresolved shared burdens by dry mass, report the sensitivity, and disclose product prices without using them silently as the default basis. | `us-epa-ap42-ferroalloy-1995` |
| `allocation_shared_services` | shared electricity, water, extraction, and conditioning services | Allocate measured shared services by causal meter, operating time, gas volume, or equipment throughput; use product mass only when no more causal record exists and disclose the affected share. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cb_materials` | carbothermic_smelting | charge materials | weighbridge, batch sheet, receipt assay | material identity; supplier; lot; wet mass; moisture; assay; charged mass; returns | reconcile receipts, stock change, and furnace batch sheets | kg | each receipt and charge | complete declared campaign or annual period | all carbothermic furnaces in scope | sum charged mass by atomic material and divide by route output | calibrated scales, supplier certificates, moisture and assay records |
| `cp_cb_electrodes` | carbothermic_smelting | graphite electrode | inventory and maintenance log | opening stock; receipts; closing stock; recoverable remnants; electrode grade | stock-balance calculation | kg | each reporting period | same period as furnace output | all carbothermic furnaces in scope | net consumed mass divided by route output | stock count, purchase records, maintenance log |
| `cp_cb_electricity` | carbothermic_smelting | furnace electricity | revenue or submeter record | meter id; opening and closing reading; losses; campaign assignment; supplier mix | calibrated meter reading | kWh | continuous or per batch | same period as furnace output | furnace and dedicated controls | sum attributable readings and divide by route output | meter calibration and reconciliation to site invoice |
| `cp_cb_water` | carbothermic_smelting | cooling-water make-up | water submeter and treatment log | source; treatment state; make-up volume or mass; blowdown; recirculation | submeter reading and water balance | kg | daily or continuous | same period as furnace output | furnace cooling system | count only boundary make-up and divide by route output | meter calibration and water-balance closure |
| `cp_cb_product` | carbothermic_smelting | molten or cast route product | tap, ladle, casting, and stock record | alloy grade; tap mass; transfer mass; assay; inventory change | reconcile taps, transfers, and inventory | kg | each tap or batch | complete declared campaign | all carbothermic route output | net transferred grade-specific mass | scale calibration, assay certificate, signed production log |
| `cp_cb_residues` | carbothermic_smelting | slag and captured dust | container, skip, weighbridge, and destination record | residue identity; mass; moisture; composition; destination; internal recycle | direct weighing and destination reconciliation | kg | each movement | same period as furnace output | all route residue destinations | sum by atomic residue and fate | scale tickets, laboratory composition, transfer manifest |
| `cp_cb_air_emissions` | carbothermic_smelting | carbon monoxide and carbon dioxide | CEMS, stack test, gas-use, flare, and carbon-balance record | gas flow; concentration; temperature; pressure; moisture; oxygen; operating time; carbon source; recovery and flare | validated monitoring or documented mass balance | kg | continuous or campaign-representative test | same period as furnace output | stacks and material fugitive sources in scope | calculate each pollutant separately and divide by route output | calibration gas, stack-test report, uncertainty and data-coverage statement |
| `cp_mt_materials` | metallothermic_reduction | oxide feeds, reducers, iron units, and flux | batch sheet, receipt assay, and scale record | material identity; purity; physical state; lot; charged mass; returns | batch-scale record reconciled to receipts and stock | kg | each reaction batch | complete declared campaign | all metallothermic vessels in scope | sum each atomic material and divide by route output | calibrated scales, supplier assay, batch authorization |
| `cp_mt_electricity` | metallothermic_reduction | auxiliary electricity | submeter or equipment-hour record | meter reading; equipment load; operating time; campaign assignment; supplier mix | direct metering, or documented load-time calculation when unmetered | kWh | each batch or reporting period | same period as reaction output | dedicated preparation, extraction, and handling equipment | sum attributable electricity and divide by route output | meter calibration or equipment specification and operating log |
| `cp_mt_product` | metallothermic_reduction | molten or cast route product | batch yield, tap, casting, and assay record | alloy grade; recovered mass; retained metal; assay; inventory change | reconcile reaction batches and recovered alloy | kg | each batch | complete declared campaign | all metallothermic route output | net transferred grade-specific mass | calibrated scales, assay certificate, signed batch record |
| `cp_mt_residues` | metallothermic_reduction | reaction slag and captured dust | container, weighbridge, and destination record | residue identity; mass; moisture; composition; destination; internal recycle | direct weighing and destination reconciliation | kg | each movement | same period as reaction output | all route residue destinations | sum by atomic residue and fate | scale tickets, laboratory composition, transfer manifest |
| `cp_pc_internal_transfer` | product_conditioning | incoming alloy intermediate | transfer and inventory record | source process; grade; physical state; transfer mass; beginning and ending inventory | reconcile route outputs with conditioning receipts | kg | each transfer | complete declared campaign | all conditioning lines in scope | net grade-specific mass entering conditioning | scale calibration and cross-process reconciliation |
| `cp_pc_electricity` | product_conditioning | conditioning electricity | submeter or equipment-hour record | meter reading; line; operating time; product grade; supplier mix | direct metering, or documented load-time calculation when unmetered | kWh | continuous or each shift | same period as saleable output | cooling, crushing, screening, conveying, and dedicated controls | sum attributable electricity and divide by accepted product | meter calibration or equipment specification and operating log |
| `cp_pc_product_release` | product_conditioning | saleable product | packing, dispatch, stock, and quality-release record | grade; lot; gross mass; packaging tare; net mass; assay; particle size; moisture; release status | reconcile accepted net mass, dispatch, and stock change | kg | each released lot | complete declared campaign | all product release points | sum accepted net product by declared grade | calibrated scales, laboratory certificate, release authorization |
| `cp_pc_residues` | product_conditioning | off-spec scrap and captured dust | rejection, container, weighbridge, and destination record | residue identity; grade; mass; moisture; destination; internal recycle | direct weighing and fate reconciliation | kg | each movement | same period as saleable output | all conditioning residue destinations | sum by atomic residue and fate | scale tickets, rejection record, transfer manifest |
| `cp_pc_air_emissions` | product_conditioning | PM10 | stack test, dust-control, and operating record | gas flow; PM10 concentration; operating time; control status; material throughput | validated stack test or engineering calculation tied to actual control operation | kg | campaign-representative test and each control-state change | same period as saleable output | conditioning exhausts and identified fugitive sources | calculate discharged PM10 and divide by accepted product | stack-test report, control-maintenance log, uncertainty statement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Divide each period-total exchange by accepted net mass of the same declared product grade; keep unlike grades or routes separate unless a documented allocation rule is applied. | period exchange; accepted net product mass; grade; route | exchange per 1 kg reference product |  |
| `calc_stock_balance` | electrodes and stored materials | Consumption = opening stock + receipts - closing stock - externally returned or transferred material; reconcile unexplained loss. | opening stock; receipts; closing stock; returns; transfers | net consumed mass |  |
| `calc_carbon_emissions` | direct carbon monoxide and carbon dioxide | Use validated concentration-and-flow monitoring or a documented carbon balance; subtract recovered or exported carbon-containing gas only when measured and avoid double counting subsequent combustion. | gas flow; concentration; time; moisture; oxygen; carbon input; recovered gas; flare records | separate direct CO and CO2 masses | `us-epa-ap42-ferroalloy-1995` |
| `calc_mass_reconciliation` | each route and conditioning | Compare total measured mass inputs with product, internal transfers, residues, measured emissions, and inventory change; retain the imbalance and its investigation rather than forcing closure. | material inputs; products; residues; measured emissions; inventory changes | documented route mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Identify one alloy grade, chemical assay, carbon content, physical form, particle-size class, and acceptance specification. | lot release and laboratory certificates |
| `dq_route_identity` | all foreground processes | Identify the reduction or remelting route, furnace or vessel type, enclosure and gas-control configuration, and material preparation performed onsite. | process flow diagram, equipment register, campaign log |
| `dq_temporal_alignment` | all exchanges | Use the same reporting period for material, energy, production, residue, and emission records; disclose gaps, shutdowns, and abnormal campaigns. | period reconciliation and coverage statement |
| `dq_geographic_technology` | upstream links | Select supplier datasets that match the declared geography, technology, product state, and grade; document any unresolved identity instead of silently using a proxy. | supplier metadata and UUID audit record |
| `dq_completeness` | inventory | Include each actually used material, energy carrier, waste, and direct emission as one atomic row and reconcile it to source records. | signed completeness checklist and mass or energy reconciliation |
| `dq_uncertainty` | calculated and monitored values | Retain meter, assay, sampling, emission-test, allocation, and data-gap uncertainty and state how it affects the normalized result. | calibration, laboratory QA, stack-test QA, and uncertainty statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | product category | Reject a data package that omits the alloy grade, composition, carbon content, route, physical form, or factory-gate state. | `unstats-cpc-3-2025` |
| `validation_exclusions` | product category | Reject use of this PCR for ferro-manganese, ferro-chromium, ferro-nickel, pig iron, directly reduced iron, iron or steel powder, crude steel, or a pure alloying metal. | `unstats-cpc-3-2025` |
| `validation_reference_mass` | reference flow | Confirm that normalized output equals 1 kg net accepted product and excludes packaging tare. |  |
| `validation_route_processes` | process map | Require the applicable production route plus product conditioning; explain every omitted normally associated operation. | `us-epa-ap42-ferroalloy-1995` |
| `validation_atomic_inventory` | inventory | Reject combined utilities, fuels, raw materials, wastes, or emissions; each row must identify one physical or chemical exchange. |  |
| `validation_internal_transfers` | route and conditioning links | Confirm that grade-specific upstream route output equals conditioning input after documented inventory change and loss. |  |
| `validation_offgas_residues` | direct emissions and wastes | Confirm that carbon monoxide, carbon dioxide, slag, captured dust, PM10, and off-spec product are reported when applicable and their actual recovery, reuse, sale, or disposal fate is declared. | `us-epa-ap42-ferroalloy-1995` |
| `validation_uuid_status` | all UUID-bearing rows | Accept only directly audited public Tiangong state-code-100 identities whose names, flow type, classification, property, unit group, product state, geography, technology, and comments match the row. |  |
| `validation_range_evidence` | quantitative QA ranges | Do not infer an external range from fewer than two independent original-text sources with compatible boundary, functional unit, and product state; omit the range and preserve the foreground collection requirement when evidence is insufficient. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Grade-, route-, site-, and period-specific foreground production dataset eligible for later publication after methodology and identity review |
| downstream_use | Secondary dataset or background dataset for systems consuming a declared other ferro-alloy at the producing plant gate |
| allowed_use | Studies whose alloy grade, physical form, geography, production route, electricity supply, carbon-source origin, and residue treatment are compatible or explicitly adjusted |
| excluded_use | Unspecified average ferro-alloy; separately classified ferro-manganese, ferro-chromium, or ferro-nickel; pure alloying metal; downstream steelmaking; a different route or grade without documented representativeness |
| required_metadata | PCR id and version; product and grade; composition and carbon content; form and particle size; route and equipment; plant geography; reporting period; production volume; electricity supply; reducer origin; off-gas, slag, dust, and off-spec-product fate; allocation; UUID audit status |
| required_quality_disclosure | Primary-data coverage; meter and assay QA; stack-test or calculation basis; mass-balance residual; allocation shares; upstream dataset representativeness; unresolved UUIDs and range-evidence needs; uncertainty and data gaps |
| update_trigger | Change in alloy grade or specification, production route, furnace or controls, electricity supply, reducer origin, residue fate, allocation, plant geography, or a material shift in inputs, emissions, or production efficiency |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure and Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv and https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-04) | Official product classification identity and residual boundary relative to separately listed ferro-manganese, ferro-chromium, and ferro-nickel |
| `us-epa-ap42-ferroalloy-1995` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, AP-42 Section 12.4 Ferroalloy Production, October 1986, reformatted January 1995, https://www.epa.gov/sites/production/files/2020-11/documents/c12s04.pdf (retrieved 2026-09-04) | Ferro-alloy definition, submerged-arc and metallothermic route decomposition, raw-material preparation, tapping and conditioning, slag and dust handling, and direct air-emission coverage |
| `cn-mofcom-ferroalloy-2009` | Official guidance (`official_guidance`) | Ministry of Commerce of the People's Republic of China, Announcement No. 93 of 2009 and annexed ferro-alloy export enterprise categories, https://www.mofcom.gov.cn/zcfb/blgg/art/2009/art_25c5e2496e634d28b4ba58211d059275.html (retrieved 2026-09-04) | Verification of professional Chinese ferro-alloy terminology, including “其他铁合金” and names of representative alloy families |
