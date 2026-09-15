---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-copper
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Powders and flakes of copper

## 1. Scope and Applicability

This PCR applies to elemental copper placed on the market as powder or flakes at the producer gate. It covers copper-powder production by atomization, oxide reduction, or electrolysis; flake production by mechanical milling of copper powder; route-specific washing, drying, reducing or annealing; particle-size classification, blending, pollution control, and packing. The foreground data package shall select the actual route and include only its conditional processes.

The PCR excludes copper ores and concentrates, copper matte, slag and ash, copper salts or oxides sold as products, copper-alloy powders, copper scrap sold without conversion to powder, downstream compaction, sintering, additive manufacturing, paste formulation, component production, use, and end-of-life. Nano-specific surface functionalization or a chemical synthesis route may use this PCR only when all additional atomic reagents, solvents, wastes, and emissions are disclosed; this PCR does not supply default rows for an undisclosed route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-copper |
| classification_refs | CPC 3.0: 41511, Powders and flakes of copper |
| covered_products | Elemental copper powder and elemental copper flakes, including atomized, oxide-reduced, electrolytic, and mechanically flaked grades |
| excluded_products | Copper-alloy powder; copper oxide or salt powder sold as such; copper ore, matte, slag, ash, scrap, paste, compact, sintered part, and additive-manufactured part |
| representative_product | Net dry elemental copper powder or flakes meeting the declared sale specification |
| production_route | Atomization, oxide reduction, electrolysis, or copper-powder flake milling; the foreground package shall declare one actual route and its conditioning sequence |
| market_state | Dry powder or flakes in the sold container at the producer gate, with morphology, particle-size distribution, copper content, surface treatment, moisture, oxygen content, and packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide elemental copper in powder or flake form for downstream formulation, consolidation, coating, or other declared industrial use |
| How much | 1 kg net dry accepted product at the producer gate |
| How well | Meets the declared copper-content, morphology, particle-size-distribution, apparent-density, moisture, oxygen-content, and surface-treatment specification |
| How long or cycle | One production batch and release at the producer gate; no use duration is represented |
| reference_flow_link | `reference_copper_powder_or_flakes` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dry accepted product |
| Reference product flow | Powders and flakes of copper |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | copper content and impurity specification; powder or flake morphology; production route; particle-size distribution and test method; apparent density where specified; moisture and oxygen-content basis; surface treatment or lubricant residue; net dry-mass determination; recycled-content claim and chain of custody; production geography and period; packaging included in the sale |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and copper-bearing material rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry mass. Subtract container tare and separately report moisture or retained processing liquid; do not treat gross packed mass as product mass. |
| `copper_assay_basis` | Copper mass balance | Mass and declared copper mass fraction | kg and kg/kg | Record material mass and laboratory copper assay on the same dry basis; calculate contained copper without assuming that every copper-bearing stream is pure copper. |
| `electricity_energy` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh as raw data and convert to MJ with `calc_electricity_conversion`; identify voltage level, grid geography, supplier, and meter boundary. |
| `gas_reference_volume` | Nitrogen, hydrogen, and natural-gas rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State pressure, temperature, moisture basis, and whether the volume is actual or normalized; do not combine gases of different identity or supply state. |
| `solvent_net_consumption` | Heptane row | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record fresh input, recovered amount, inventory change, waste transfer, and direct release separately; report net consumption only after the solvent balance closes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt at the powder plant of the route-specific copper cathode, copper anode, copper oxide, or copper-powder precursor, together with route chemicals and energy carriers |
| starting_condition_role | Foreground gate-to-gate starting condition; upstream production is represented by supplier or background datasets |
| product_classification_scope | Elemental copper powder and flakes corresponding semantically to CPC 3.0 code 41511, independent of classification-system ownership |
| recursive_input_rule | When copper powder is used to make copper flakes, record the powder once as `copper_powder_precursor` with an upstream dataset; do not recursively reproduce the same powder-production system inside the flake process |
| upstream_dataset_requirement | Use geographically, temporally, technologically, and product-state representative upstream datasets for every purchased input; disclose proxies and recycled-content accounting |
| disclosure | Declare the actual formation route, starting material state and assay, intermediate transfers, conditioning sequence, pollution-control boundary, recovered-material loops, direct releases, packaging boundary, geography, production period, and cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | Foreground process boundary | Include the selected powder-formation route, its route-specific washing or atmosphere control, drying or annealing, particle-size conditioning, pollution control, and final packing through accepted product at the producer gate. | `neikov-nonferrous-powder-2014`; `uspto-us4884754-copper-flakes` |
| `boundary_rule_2` | Conditional routes | Include atomization only when liquid copper is atomized; oxide reduction only when copper oxide is reduced; electrolysis only when a powder deposit is produced; and flake milling only when a copper-powder precursor is mechanically converted to flakes. | `neikov-nonferrous-powder-2014`; `uspto-us4884754-copper-flakes` |
| `boundary_rule_3` | Direct burdens | Include direct energy use, process gases, make-up water, chemicals, solvent, wastes, wastewater, and measured or calculated direct releases. Do not assign upstream electricity or purchased-material emissions as foreground elementary flows. |  |
| `boundary_rule_4` | Excluded downstream operations | Exclude powder compaction, sintering, paste formulation, coating application, additive manufacturing, finished-part manufacture, use, and end-of-life unless a separate declared study expands the boundary. | `uspto-us4884754-copper-flakes` |
| `boundary_rule_5` | Same-category recursion | A purchased or transferred copper-powder precursor is one product input with an upstream dataset; the same unit process shall not be counted again through recursive category tracing. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `atomization` | Copper melting and atomization | `conditional` | Include when the declared route converts molten copper to particles with water or nitrogen gas | Foreground powder formation | Per kg accepted atomized intermediate reconciled to the reference product |
| `oxide_reduction` | Copper-oxide reduction | `conditional` | Include when copper oxide is reduced in hydrogen, natural gas, or the declared reducing atmosphere | Foreground powder formation | Per kg accepted reduced intermediate reconciled to the reference product |
| `electrolysis` | Electrolytic copper-powder deposition | `conditional` | Include when copper is electrodeposited as a removable powder deposit | Foreground powder formation and washing | Per kg accepted electrolytic intermediate reconciled to the reference product |
| `flake_milling` | Copper-powder flake milling | `conditional` | Include when copper-powder precursor is mechanically flattened or comminuted to flakes | Foreground morphology conversion | Per kg accepted flake intermediate reconciled to the reference product |
| `finishing` | Classification, blending, control, and packing | `required` | Always include for saleable dry powder or flakes | Foreground finishing and reference-product release | Per 1 kg net dry accepted reference product |

### Process: Copper melting and atomization (`atomization`)

#### Inputs

##### Product flows

###### Primary copper cathode feed (`atomization_copper_cathode`)

Record the specific copper feed melted for atomization; do not substitute a broad copper-alloy or scrap identity.

- Selected flow: Primary copper cathode `a3e71c01-d625-4f53-8c5e-caa08808cdaf`
- Flow property / unit: Mass / kg
- Amount rule: weighed dry copper cathode charged to the melting system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted atomized intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Water atomizing medium (`atomization_process_water`)

Include only for water atomization; record make-up water crossing the process boundary, not recirculated internal water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or mass-balanced make-up process water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted atomized intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Nitrogen atomizing gas (`atomization_nitrogen_gas`)

Include only when nitrogen is the atomizing or protective gas.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: metered nitrogen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted atomized intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Atomization electricity (`atomization_electricity`)

Record only electricity consumed by the atomization system and its dedicated auxiliaries within the declared meter boundary.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: separately metered or defensibly submeter-allocated electricity for melting, pumping, gas compression, and auxiliaries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted atomized intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

#### Outputs

##### Product flows

###### Atomized copper-powder intermediate (`atomized_copper_powder_intermediate`)

Treat this as an internal transfer to finishing, not as an additional reference-product output.

- Selected flow: Atomized copper powder; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted dry intermediate mass transferred to finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per atomization batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

### Process: Copper-oxide reduction (`oxide_reduction`)

#### Inputs

##### Product flows

###### Copper-oxide feed (`reduction_copper_oxide`)

Record the actual copper-oxide composition and assay because CuO and Cu2O have different copper and oxygen contents.

- Selected flow: Copper oxide `4cc720c4-ff95-41cf-85ed-d73cb80c1b3a`
- Flow property / unit: Mass / kg
- Amount rule: weighed dry copper oxide charged, with CuO/Cu2O composition and copper assay recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reduced intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Hydrogen reducing gas (`reduction_hydrogen_gas`)

Include only when molecular hydrogen crosses the foreground boundary as reducing gas.

- Selected flow: Hydrogen gas; UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered hydrogen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted reduced intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Natural-gas reducing atmosphere or furnace fuel (`reduction_natural_gas`)

Include only when gaseous natural gas is consumed in the declared reduction atmosphere or burned on site for process heat.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gaseous natural gas at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted reduced intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Reduction-process electricity (`reduction_electricity`)

Record only electricity used by the reduction route and its dedicated material handling and controls.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: separately metered or defensibly submeter-allocated electricity for furnace, conveying, crushing, and auxiliaries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reduced intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

#### Outputs

##### Product flows

###### Reduced copper-powder intermediate (`reduced_copper_powder_intermediate`)

Treat this as an internal transfer to finishing, with rejected or recycled material recorded separately in the foreground balance.

- Selected flow: Oxide-reduced copper powder; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted dry intermediate mass transferred to finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reduction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

##### Elementary flows

###### Direct fossil carbon dioxide (`reduction_fossil_carbon_dioxide`)

Include only for on-site oxidation or combustion of fossil natural gas; exclude upstream emissions embedded in purchased electricity or gas datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct emission or calculated site fuel carbon balance under `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reduced intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reduction_records`
- Sources:

### Process: Electrolytic copper-powder deposition (`electrolysis`)

#### Inputs

##### Product flows

###### Copper anode (`electrolysis_anode_copper`)

Record consumed anode copper from opening and closing mass records for the declared electrolytic-powder campaign.

- Selected flow: Anode Copper `8885183a-5ee5-492e-a31b-9f5f1ac9d636`
- Flow property / unit: Mass / kg
- Amount rule: weighed anode consumption over the powder-production campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted electrolytic intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Sulfuric-acid electrolyte make-up (`electrolysis_sulfuric_acid`)

Record sulfuric acid entering the boundary as delivered solution mass and measured concentration, retaining both values.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: concentration-corrected sulfuric-acid make-up crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted electrolytic intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Electrolyte and washing water (`electrolysis_process_water`)

Record boundary-crossing make-up water; do not count recirculating electrolyte or wash water repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up water for electrolyte preparation and powder washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electrolytic intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Electrolysis electricity (`electrolysis_electricity`)

Record rectifier and dedicated auxiliary electricity for the declared campaign without combining unrelated site loads.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered rectifier and auxiliary electricity assigned to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electrolytic intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

#### Outputs

##### Product flows

###### Electrolytic copper-powder intermediate (`electrolytic_copper_powder_intermediate`)

Treat the washed and dried powder as an internal transfer to finishing, not as a second final product.

- Selected flow: Electrolytic copper powder; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted dry intermediate mass transferred to finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per electrolysis campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

##### Waste flows

###### Spent copper-bearing sulfuric-acid electrolyte (`spent_copper_electrolyte`)

Record only electrolyte crossing the boundary for regeneration or treatment and preserve its copper and acid composition.

- Selected flow: Spent copper-bearing sulfuric-acid electrolyte; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed transfer to regeneration or treatment, with copper and acid concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electrolytic intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

###### Copper-bearing rinse wastewater (`copper_bearing_rinse_wastewater`)

Record the aqueous discharge separately from spent electrolyte and from captured solids.

- Selected flow: Copper-bearing rinse wastewater; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: metered discharge mass with copper concentration and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electrolytic intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

### Process: Copper-powder flake milling (`flake_milling`)

#### Inputs

##### Product flows

###### Copper-powder precursor (`copper_powder_precursor`)

Record one upstream copper-powder input for flake production and do not recursively reproduce its manufacturing system.

- Selected flow: Copper powder precursor; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed net dry copper powder charged to milling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted flake intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

###### Stearic-acid surfactant (`flake_stearic_acid`)

Include only when stearic acid is actually used; record another surfactant as its own additional atomic row.

- Selected flow: Stearic acid; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed fresh stearic acid charged to milling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted flake intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

###### Heptane milling medium (`flake_heptane`)

Include only when heptane is actually used; record fresh input separately from recovered internal solvent.

- Selected flow: Heptane `f3026a5f-e4ce-4bb3-b015-92d56ebb0091`
- Flow property / unit: Mass / kg
- Amount rule: fresh heptane input minus documented return to supplier, not gross recirculating charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted flake intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

###### Nitrogen jet-milling gas (`flake_nitrogen_gas`)

Include only when nitrogen, rather than compressed air, is purchased or generated for fluid-energy milling.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: metered nitrogen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted flake intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

###### Flake-milling electricity (`flake_electricity`)

Record the milling, drying, gas-compression, recovery, and dedicated auxiliary electricity inside the declared boundary.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: separately metered or defensibly submeter-allocated electricity for milling, vacuum drying, gas compression, and auxiliaries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted flake intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

#### Outputs

##### Product flows

###### Copper-flake intermediate (`copper_flakes_intermediate`)

Treat the accepted dry flakes as an internal transfer to finishing and reconcile them to precursor input and route losses.

- Selected flow: Milled copper flakes; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted dry flake mass transferred to finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per flake-milling batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

### Process: Classification, blending, control, and packing (`finishing`)

#### Inputs

##### Product flows

###### Finishing electricity (`finishing_electricity`)

Record electricity for classification, blending, control, and packing without duplicating formation-route electricity.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: separately metered or defensibly submeter-allocated electricity for screening, classification, blending, dust collection, and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `neikov-nonferrous-powder-2014`

#### Outputs

##### Product flows

###### Reference copper powder or flakes (`reference_copper_powder_or_flakes`)

This is the sole quantitative reference output; choose powder or flake morphology and disclose the selected route and sale specification.

- Selected flow: Powders and flakes of copper
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net dry accepted product calculated from packed conforming mass after tare and moisture correction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `un-cpc-3-structure-2025`

##### Elementary flows

###### Direct copper to air (`finishing_copper_to_air`)

Record copper mass crossing the foreground environmental boundary after control; do not use captured powder returned internally as an elementary emission.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured copper in process-vent discharge or calculated from validated concentration and dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Direct heptane to outdoor air (`flake_heptane_to_air`)

Include only for the heptane flake-milling route when heptane crosses the outdoor environmental boundary after recovery and control.

- Selected flow: Heptane to outdoor air, unspecified subcompartment; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured process-vent heptane or calculated loss under `calc_heptane_balance`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `uspto-us4884754-copper-flakes`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Foreground subdivision | Avoid allocation by separately metering the selected formation route, flake conversion, finishing, pollution control, and internally recycled loops whenever the records permit subdivision. |  |
| `allocation_rule_2` | Internal recycling | Do not assign a co-product credit to copper powder, dust, solvent, electrolyte, or water returned within the same foreground system; record the internal loop and only the fresh make-up and boundary-crossing outputs. |  |
| `allocation_rule_3` | Exported copper-bearing material | Record each exported copper-bearing material as its own product or waste flow with mass, copper assay, destination, and contractual status. Do not prescribe a default avoided-burden credit or allocation factor; disclose the study-specific treatment and provide a sensitivity result when it materially changes conclusions. |  |
| `allocation_rule_4` | Shared site services | Allocate a shared measured total only after subdivision is impracticable, using a documented causal driver such as metered operating time or equipment load; do not use product value merely because it is available. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_atomization_records` | `atomization` | Copper feed, atomizing medium, electricity, accepted intermediate | Batch and meter records | batch_id; cathode_mass; cathode_assay; water_makeup; nitrogen_volume; gas_reference_conditions; electricity_kWh; accepted_dry_powder_mass | Calibrated scales, water and gas meters, electricity meter, laboratory release record | kg; m3; kWh | Each batch with monthly meter reconciliation | At least 12 representative months or the full shorter campaign | All atomization equipment and dedicated controls in the declared site boundary | Sum inputs and energy; divide by accepted dry intermediate; reconcile copper mass | Calibration records, invoices, batch sheets, assay certificates, and meter reconciliation |
| `cp_reduction_records` | `oxide_reduction` | Oxide feed, reducing gases, electricity, direct CO2, accepted intermediate | Batch, gas, meter, and emission records | batch_id; oxide_mass; CuO_Cu2O_fraction; copper_assay; hydrogen_volume; natural_gas_volume; gas_reference_conditions; electricity_kWh; direct_CO2_mass; accepted_dry_powder_mass | Calibrated scales and meters; laboratory assay; stack record or fuel carbon balance | kg; m3; kWh | Each batch with monthly utility and carbon reconciliation | At least 12 representative months or the full shorter campaign | Reduction furnace, crushing, transfer, and dedicated controls | Sum by batch; calculate direct CO2 only from foreground fossil gas; divide by accepted dry intermediate | Calibration, fuel invoices, composition certificate, batch sheets, assay, and carbon-balance evidence |
| `cp_electrolysis_records` | `electrolysis` | Anode, acid, water, electricity, powder, electrolyte waste, rinse wastewater | Campaign, laboratory, meter, and waste-transfer records | campaign_id; anode_opening_mass; anode_closing_mass; acid_makeup_mass; acid_concentration; water_makeup; electricity_kWh; dry_powder_mass; spent_electrolyte_mass; spent_electrolyte_copper; rinse_wastewater_mass; wastewater_copper | Weighing, chemical inventory, meters, laboratory analyses, and waste manifests | kg; kg/kg; kWh | Each campaign with monthly balance | At least 12 representative months or the full shorter campaign | Cells, circulation, powder removal, washing, drying, and dedicated treatment | Calculate consumed anode and pure-acid make-up; reconcile copper and liquid balances; divide by accepted dry intermediate | Scale and meter calibration, laboratory QA/QC, chemical invoices, waste manifests, and campaign log |
| `cp_flake_milling_records` | `flake_milling` | Powder precursor, stearic acid, heptane, nitrogen, electricity, flake intermediate | Batch, solvent-inventory, gas, and meter records | batch_id; precursor_dry_mass; precursor_assay; stearic_acid_mass; fresh_heptane_mass; recovered_heptane_mass; heptane_inventory_change; nitrogen_volume; gas_reference_conditions; electricity_kWh; accepted_dry_flake_mass | Calibrated scales, tank or container inventory, gas meter, electricity meter, and release testing | kg; m3; kWh | Each batch with monthly solvent reconciliation | At least 12 representative months or the full shorter campaign | Milling, drying, fluid-energy milling, transfer, and dedicated recovery | Apply solvent balance; sum energy and gas; divide by accepted dry flake output | Calibration, purchase and recovery records, batch sheets, and release test evidence |
| `cp_finishing_records` | `finishing` | Electricity, accepted product, copper air release, heptane air release | Lot, packing, meter, stack, and solvent-balance records | lot_id; gross_packed_mass; package_tare; sample_moisture; accepted_net_dry_mass; electricity_kWh; stack_copper_concentration; dry_gas_volume; measured_heptane_mass; upstream_intermediate_mass | Calibrated packing scale and meter; release test; stack sampling; validated solvent balance | kg; kg/kg; kWh; m3 | Each lot with monthly control-system reconciliation | At least 12 representative months or the full shorter campaign | Classification, blending, dust control, packing, and applicable process vents | Calculate net dry accepted product and direct releases; normalize all selected route records to 1 kg product | Scale and meter calibration, certificates of analysis, rejected-lot log, stack QA/QC, and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | Reference product | net dry accepted mass = gross packed mass - package tare - water mass attributable to measured moisture | gross_packed_mass; package_tare; sample_moisture | kg net dry accepted product |  |
| `calc_electricity_conversion` | Every electricity row | electricity_MJ = metered_kWh × 3.6 | electricity_kWh | MJ electricity |  |
| `calc_gas_normalization` | Nitrogen, hydrogen, and natural gas | Convert actual meter volume to the declared reference conditions using recorded absolute pressure, temperature, compressibility treatment, and moisture basis; retain raw actual volume | actual_volume; pressure; temperature; moisture_basis; reference_conditions | m3 at declared reference conditions |  |
| `calc_pure_acid_makeup` | Sulfuric acid | pure sulfuric-acid make-up = delivered solution mass × measured acid mass fraction | acid_makeup_mass; acid_concentration | kg H2SO4 equivalent and kg delivered solution, both retained |  |
| `calc_copper_balance` | Each selected route and the combined foreground system | Reconcile contained copper in feed with contained copper in accepted product, boundary-crossing copper-bearing products and wastes, direct copper releases, and inventory change; investigate and disclose the residual rather than forcing closure | dry masses; copper assays; inventory change; copper release data | documented copper mass balance and residual |  |
| `calc_direct_fossil_co2` | Direct fossil CO2 | Use measured stack CO2 where representative; otherwise calculate only from foreground fossil natural-gas consumption and documented fuel carbon content and oxidation, excluding upstream emissions | natural_gas_volume; fuel composition or carbon content; oxidation evidence | kg direct fossil CO2 |  |
| `calc_heptane_balance` | Heptane route | fresh heptane + opening inventory = recovered heptane + returned heptane + waste heptane + direct air release + closing inventory + documented residual | fresh, recovered, returned, waste, release, and inventory records | kg net consumption, kg direct release, and balance residual | `uspto-us4884754-copper-flakes` |
| `calc_route_normalization` | All process rows | Normalize each selected route exchange by the accepted dry intermediate, link the intermediate to finishing, then normalize the combined system by net dry accepted reference product without double counting internal transfers | process totals; intermediate transfers; accepted product | exchange per 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Retain certificate of analysis and sale specification for copper content, morphology, particle-size distribution and method, apparent density when specified, moisture, oxygen content, and surface treatment. | Lot release certificate and product specification |
| `dq_route` | Process map | Identify the actual route and equipment sequence; conditional processes shall agree with inventory rows and no absent route shall carry a nonzero exchange. | Process flow diagram, batch route code, and operator record |
| `dq_temporal` | Foreground totals | Use at least 12 representative months unless the campaign is shorter; explain start-up, shutdown, abnormal, and excluded periods. | Production calendar and exclusion log |
| `dq_completeness` | Mass, copper, water, solvent, and energy records | Reconcile meters and inventories to purchase, production, and waste records; disclose all residuals and their disposition. | Signed reconciliation and corrective-action record |
| `dq_measurement` | Scales, meters, and analyses | Use instruments within calibration and laboratory methods with documented sampling, detection limits, duplicates, blanks, and chain of custody where applicable. | Calibration certificates and laboratory QA/QC |
| `dq_upstream` | Purchased product inputs | Match geography, technology, product state, purity, recycled content, and delivery boundary; disclose every proxy. | Supplier declarations and dataset-selection log |
| `dq_uncertainty` | Reported exchanges | Quantify or qualitatively rank uncertainty from measurement, allocation, proxy choice, composition, and temporal variability; do not replace missing foreground records with PCR ranges. | Uncertainty register and sensitivity results |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Product identity | The output shall be elemental copper powder or flakes; reject records whose sold output is copper alloy, oxide, salt, ore, matte, slag, ash, scrap, paste, compact, or finished part. | `un-cpc-3-structure-2025` |
| `validation_rule_2` | Reference flow | The reference output shall equal 1 kg net dry accepted product and shall declare every required qualifier; the missing Tiangong reference-product UUID remains an explicit authoring gap. |  |
| `validation_rule_3` | Route consistency | Exactly the declared formation route or routes shall be included; every included conditional process shall have its detailed inventory, and absent routes shall not contribute exchanges. | `neikov-nonferrous-powder-2014`; `uspto-us4884754-copper-flakes` |
| `validation_rule_4` | Atomic inventory | Every row shall represent one product, waste, or elementary exchange; combined utilities, fuels, chemicals, wastes, or emissions are invalid. |  |
| `validation_rule_5` | Internal intermediates | Atomized, reduced, electrolytic, or flake intermediates shall link route production to finishing exactly once and shall not be mistaken for additional final output. |  |
| `validation_rule_6` | Copper balance | The contained-copper balance shall include feed, accepted output, exported material, waste, direct release, and inventory change; unresolved residuals shall be disclosed and investigated. |  |
| `validation_rule_7` | Energy and direct emissions | Electricity shall be converted from retained kWh records to MJ; direct fossil CO2 shall include only foreground oxidation or combustion and shall exclude upstream electricity emissions. |  |
| `validation_rule_8` | Solvent route | When heptane is used, fresh input, recovery, inventory change, waste transfer, and direct release shall be reconciled; an indoor-air heptane UUID shall not be used for an outdoor process vent. | `uspto-us4884754-copper-flakes` |
| `validation_rule_9` | Evidence gaps | No external amount range may be published from a single case or search snippet; unresolved UUID and range-evidence needs in the manifest shall remain visible until exact identity or two-source evidence is reviewed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a completed, reviewed foreground data package |
| downstream_use | Process datasets for copper-powder or copper-flake supply in product systems and lifecycle models |
| allowed_use | Use when product identity, route, geography, period, product specification, recycled-content treatment, upstream datasets, and allocation approach are representative of the study |
| excluded_use | Do not use as a proxy for copper alloy powder, copper compounds, copper scrap, downstream powder consolidation or parts, or an undisclosed chemical or nano-functionalization route |
| required_metadata | PCR id and version; route; site geography; production period; copper assay; morphology; particle-size distribution and method; apparent density if relevant; moisture and oxygen basis; surface treatment; reference-product UUID status; upstream dataset identities; allocation; cut-offs; packaging boundary |
| required_quality_disclosure | Foreground coverage, meter and scale calibration, laboratory QA/QC, mass and copper balance residuals, solvent balance where applicable, conditional rows, data gaps, proxies, uncertainty, and unresolved UUID or range evidence |
| update_trigger | Route or equipment change; feed or product specification change; material change in energy, gas, water, solvent, yield, waste, or direct release; new exact Tiangong flow; new two-source quantitative evidence; or elapsed review period defined by the publisher |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, row 41511, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23; exact cached bytes independently verified 2026-09-04) | Official classification identity and category wording |
| `neikov-nonferrous-powder-2014` | `literature` | Oleg Neikov, “Non-ferrous powder production: Manufacturing methods and properties of copper, aluminium, titanium and nickel powders,” Powder Metallurgy Review, Summer 2014, pp. 64-75, https://www.metal-powder.tech/wp-content/uploads/2016/07/MAGAZINE-PMR-Summer-2014-PDF-double-page-edition.pdf (original PDF text and rendered pages verified 2026-09-04) | Atomization, oxide-reduction, and electrolysis process decomposition; copper-feed, reducing-atmosphere, and route-disclosure requirements |
| `uspto-us4884754-copper-flakes` | `literature` | Preston B. Kemp, Jr. and Walter A. Johnson, US4884754A, “Process for producing fine copper flakes,” issued 5 December 1989, https://patents.google.com/patent/US4884754A/en (full description and claims verified 2026-09-04) | Copper-powder precursor, media milling with heptane and surfactant, drying, and fluid-energy-milling process decomposition |
