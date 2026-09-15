---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-sports-footwear-except-skating-boots
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other sports footwear, except skating boots

## 1. Scope and Applicability

This PCR specifies foreground, factory-gate inventory rules for manufacturing other sports footwear except skating boots. It covers product-specific upper preparation, any on-site sole-component forming, lasting and final assembly, finishing, and sales-packaging operations. Purchased materials and components enter as product flows; their upstream production is represented by separately linked background datasets. Distribution, retail, use, maintenance, and end-of-life are outside the foreground boundary.

The rules apply to a real production route and reporting period. A dataset must not substitute a generic footwear recipe for the actual bill of materials, energy carriers, chemicals, packaging, emissions, or wastes. Each exchange is reported atomically. If a listed conditional exchange is absent, the dataset records it as not applicable rather than zero unless zero is directly demonstrated.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-sports-footwear-except-skating-boots |
| classification_refs | CPC 3.0: 29490 — Other sports footwear, except skating boots |
| covered_products | Finished sports footwear classified to CPC 29490, including sports footwear not assigned to the separate ski-boot, cross-country-ski-footwear, snowboard-boot, tennis-shoe, basketball-shoe, gym-shoe, training-shoe or similar specific classes |
| excluded_products | Skating boots; ski boots, cross-country ski footwear and snowboard boots; tennis, basketball, gym, training and similar footwear assigned to CPC 2942; non-sports footwear; unfinished footwear components sold separately |
| representative_product | A saleable pair or batch of other sports footwear whose product mass, construction, size mix, material composition, and manufacturing route are declared |
| production_route | Purchased materials and components; upper cutting and stitching; conditional on-site sole-component forming; lasting, adhesive application, sole attachment, pressing and finishing; sales packaging |
| market_state | Finished product, manufactured |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished other sports footwear, except skating boots, with the actual product construction and size mix declared |
| How much | 1 kg net mass of accepted finished footwear, excluding sales and transport packaging |
| How well | Conforms to the producer's saleable-product specification; rejects and rework are included in the manufacturing inventory and not in the reference output |
| How long or cycle | One completed manufacturing output over the declared reporting period; no use-life claim is included |
| reference_flow_link | The quantitative reference is the state-100 Tiangong product flow identified below |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other sports footwear, except skating boots `a372c679-9693-4957-aad9-98b6d6b5e435` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product model or product family; construction; upper material system; sole material system; footwear size range and production-weighted size mix; pair-to-mass conversion; production site; reporting period; included on-site processes; packaging configuration |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted finished footwear | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate the net mass of accepted footwear only; normalize every process result to 1 kg reference output. |
| `packaging_exclusion` | sales and transport packaging | Mass | kg | Exclude packaging mass from reference product mass and report every packaging material as a separate product input and waste output. |
| `count_to_mass` | pairs, pieces, eyelets, laces and components recorded by count | Mass | kg | Convert counts using a contemporaneous, product-specific mean mass from a documented sample; retain counts and sample observations. |
| `electricity_measurement` | purchased or generated electricity | Energy | kWh | Record each electricity supply separately from steam, heat and fuels; allocate shared meters only by documented submetering or a causal operating driver. |
| `steam_and_hot_water` | purchased steam and purchased hot water | Energy | MJ | Calculate useful energy from measured mass flow and inlet/outlet state or supplier energy records; do not combine steam and hot water. |
| `fuel_lhv` | natural gas and liquefied petroleum gas | Energy | MJ LHV | Convert measured fuel quantity with supplier-period lower-heating-value data and retain original quantities and factors. |
| `solvent_mass_balance` | acetone and ethyl acetate | Mass | kg | Reconcile each named solvent separately across purchases, stock change, product/waste retention, recovery and emission. |
| `refrigerant_mass_balance` | each refrigerant used by on-site cooling equipment | Mass | kg | Report each chemical separately and calculate leakage from charge, additions, recovery and closing stock; do not report a generic refrigerant flow. |

## 5. System Boundary

The foreground boundary begins when purchased raw materials, compounds, parts, chemicals, packaging, electricity, steam, hot water and fuels enter the manufacturing site. It ends when accepted footwear and its separately inventoried sales packaging leave final packaging. It includes internal rework, rejects, direct air emissions and wastes from the included operations. Capital goods, employee commuting, distribution, retail, use and end-of-life are excluded unless a separate study explicitly extends the boundary and labels that extension.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased upper materials, sole materials or components, accessories, process chemicals and packaging at the manufacturing-site gate |
| starting_condition_role | Foreground product inputs linked to appropriate supplier or background datasets |
| product_classification_scope | CPC 3.0 code 29490 only |
| recursive_input_rule | If finished CPC 29490 footwear is exceptionally used as an input, record that direct input and link its supplier dataset; do not reproduce its manufacturing inventory inside this dataset. |
| upstream_dataset_requirement | Link each purchased material, component, electricity supply, fuel, steam or hot-water input to a geographically, temporally and technologically appropriate background dataset. |
| disclosure | Declare purchased-versus-on-site component manufacture, outsourced operations, cut-off decisions, data gaps and any boundary extension. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all foreground processes | Include upper preparation, included on-site sole-component forming, lasting and assembly, finishing, packaging, internal rework, rejects, direct emissions and wastes from receipt of inputs through packaged product. | `af-pefcr-2025`; `krug-2021-footwear-manufacturing` |
| `boundary_actual_route` | purchased and on-site operations | Model the actual route: omit an on-site forming process only when the corresponding component is purchased and its supplier dataset is linked. | `af-pefcr-2025` |
| `boundary_atomic_exchanges` | all inventory exchanges | Record each material, packaging component, electricity supply, heat carrier, fuel, refrigerant, emission and waste as a separate flow. | `eu-pef-2021` |
| `boundary_no_downstream_claim` | published dataset | Do not infer distribution, use-life, maintenance or end-of-life performance from this factory-gate dataset. | `epd-footwear-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `upper_preparation` | Upper cutting and stitching | required | Include for every route; adapt material cards to the actual construction without aggregating unlike materials. | Converts upper materials and accessories into stitched uppers. | kg accepted stitched upper output |
| `sole_forming` | On-site sole-component forming | conditional | Include only when midsoles, outsoles or other bottom components are formed on site. | Forms declared sole components from named compounds. | kg accepted sole-component output |
| `lasting_assembly` | Lasting, bonding and finishing | required | Include actual lasting, adhesive preparation/application, activation, attachment, pressing and finishing operations. | Converts uppers and bottom components into accepted unboxed footwear. | kg accepted unboxed footwear output |
| `final_packaging` | Final inspection and packaging | required | Include all actual retail and transport packaging applied at the site. | Produces the reference footwear and separately accounts for packaging. | kg net accepted reference product |

### Process: Upper cutting and stitching (`upper_preparation`)

#### Inputs

##### Product flows

###### Finished bovine leather upper material (`upper_bovine_leather`)

Record finished bovine leather crossing the process boundary for upper parts; determine mass from issue and return records corrected for stock change.

- Selected flow: Finished bovine leather
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus returned usable material, reconciled with cutting offcuts and stitched-upper incorporation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_materials`
- Sources: `af-pefcr-2025`; `ccote-2024-footwear-lca`

###### Polyester upper textile (`upper_polyester_textile`)

Record the actual polyester textile used for upper, lining or reinforcement separately from leather and foam.

- Selected flow: Polyester textile
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus returned usable material, reconciled with cutting offcuts and stitched-upper incorporation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_materials`
- Sources: `af-pefcr-2025`

###### Polyurethane foam padding (`upper_pu_foam`)

Record flexible polyurethane foam used as upper padding as its own material input.

- Selected flow: Flexible polyurethane foam
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus returned usable material, reconciled with foam offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_materials`
- Sources: `af-pefcr-2025`

###### Polyester sewing thread (`upper_thread`)

Record polyester sewing thread separately from upper textiles and laces.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: issue mass corrected for returned spools and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_accessories`
- Sources: `af-pefcr-2025`; `krug-2021-footwear-manufacturing`

###### Polyester shoelace (`upper_shoelace`)

Record finished polyester shoelaces by measured mass; retain pair and piece counts for reconciliation.

- Selected flow: Polyester shoelace
- Flow property / unit: Mass / kg
- Amount rule: accepted piece count multiplied by product-specific sampled mean mass, plus recorded rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_upper_accessories`
- Sources: `af-pefcr-2025`; `krug-2021-footwear-manufacturing`

###### Steel eyelet (`upper_steel_eyelet`)

Record steel eyelets separately from other metal accessories and convert count to measured product-specific mass.

- Selected flow: Steel eyelet
- Flow property / unit: Mass / kg
- Amount rule: installed and rejected eyelet count multiplied by sampled mean mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_upper_accessories`
- Sources: `af-pefcr-2025`; `krug-2021-footwear-manufacturing`

###### Electricity for cutting and stitching (`upper_electricity`)

Record electricity for cutting, sewing and associated local extraction as a separate energy input.

- Selected flow: Electricity, medium voltage, at manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or causally allocated shared-meter consumption during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_electricity`
- Sources: `eu-pef-2021`; `ccote-2024-footwear-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted stitched upper (`stitched_upper_output`)

Record accepted stitched uppers transferred to lasting and assembly.

- Selected flow: Stitched sports-footwear upper
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass of accepted uppers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_output_waste`
- Sources: `krug-2021-footwear-manufacturing`

##### Waste flows

###### Bovine leather cutting offcuts (`waste_leather_offcuts`)

Record discarded leather cutting offcuts separately from textile and foam wastes.

- Selected flow: Waste finished bovine leather offcuts
- Flow property / unit: Mass / kg
- Amount rule: weighed waste by declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_output_waste`
- Sources: `af-pefcr-2025`

###### Polyester textile cutting offcuts (`waste_polyester_offcuts`)

Record discarded polyester textile cutting offcuts as a separate waste.

- Selected flow: Waste polyester textile offcuts
- Flow property / unit: Mass / kg
- Amount rule: weighed waste by declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_output_waste`
- Sources: `af-pefcr-2025`

###### Polyurethane foam offcuts (`waste_pu_foam_offcuts`)

Record polyurethane foam cutting waste separately from other upper wastes.

- Selected flow: Waste flexible polyurethane foam offcuts
- Flow property / unit: Mass / kg
- Amount rule: weighed waste by declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_output_waste`
- Sources: `af-pefcr-2025`

##### Elementary flows

### Process: On-site sole-component forming (`sole_forming`)

#### Inputs

##### Product flows

###### Ethylene-vinyl acetate compound (`sole_eva_compound`)

When EVA components are formed on site, record the named EVA compound separately from rubber and TPU.

- Selected flow: Ethylene-vinyl acetate footwear compound
- Flow property / unit: Mass / kg
- Amount rule: issued mass corrected for stock change and returned reusable compound
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_materials`
- Sources: `af-pefcr-2025`

###### Natural rubber compound (`sole_natural_rubber`)

Record natural-rubber compound for on-site outsole forming separately from synthetic rubber.

- Selected flow: Natural rubber footwear compound
- Flow property / unit: Mass / kg
- Amount rule: issued mass corrected for stock change and returned reusable compound
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_materials`
- Sources: `af-pefcr-2025`

###### Styrene-butadiene rubber compound (`sole_sbr_compound`)

Record SBR compound as its own material input when used in an on-site formed sole.

- Selected flow: Styrene-butadiene rubber footwear compound
- Flow property / unit: Mass / kg
- Amount rule: issued mass corrected for stock change and returned reusable compound
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_materials`
- Sources: `af-pefcr-2025`

###### Thermoplastic polyurethane granules (`sole_tpu_granules`)

Record TPU granules separately from EVA and rubber compounds.

- Selected flow: Thermoplastic polyurethane granules
- Flow property / unit: Mass / kg
- Amount rule: issued mass corrected for stock change and returned reusable granules
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_materials`
- Sources: `af-pefcr-2025`

###### Electricity for sole forming (`sole_electricity`)

Record electricity used by forming, moulding, trimming and local auxiliary equipment.

- Selected flow: Electricity, medium voltage, at manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered or causally allocated reporting-period consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_energy`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### Purchased steam for sole forming (`sole_steam`)

Record purchased steam only when it is actually supplied to sole-forming equipment; keep it separate from hot water and fuel.

- Selected flow: Steam, purchased, at manufacturing site
- Flow property / unit: Energy / MJ
- Amount rule: supplier energy record or mass-and-enthalpy calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_energy`
- Sources: `eu-pef-2021`

###### Natural gas for sole forming (`sole_natural_gas`)

Record natural gas consumed on site separately from LPG and purchased heat carriers.

- Selected flow: Natural gas, combusted in industrial equipment
- Flow property / unit: Energy / MJ LHV
- Amount rule: measured fuel quantity multiplied by supplier-period lower heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_energy`
- Sources: `eu-pef-2021`

###### R-134a refrigerant make-up (`sole_r134a_makeup`)

As an explicit route check, record R-134a make-up separately when R-134a cooling equipment serves the on-site sole-forming process; otherwise mark this card not applicable. Any different refrigerant requires its own chemical-specific card.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: measured refrigerant added during the reporting period and causally assigned to the included cooling equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_refrigerant`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted EVA midsole (`eva_midsole_output`)

Record accepted on-site formed EVA midsoles separately from outsole products.

- Selected flow: Ethylene-vinyl acetate footwear midsole
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_output_waste`
- Sources: `af-pefcr-2025`

###### Accepted rubber outsole (`rubber_outsole_output`)

Record accepted on-site formed rubber outsoles as their own product output.

- Selected flow: Rubber footwear outsole
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_output_waste`
- Sources: `af-pefcr-2025`

##### Waste flows

###### EVA forming scrap (`waste_eva_scrap`)

Record non-recirculated EVA sprues, flash and rejects by actual treatment destination.

- Selected flow: Waste ethylene-vinyl acetate footwear compound
- Flow property / unit: Mass / kg
- Amount rule: weighed non-recirculated scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_output_waste`
- Sources: `af-pefcr-2025`

###### Natural rubber forming scrap (`waste_natural_rubber_scrap`)

Record non-recirculated natural-rubber forming scrap separately from SBR and TPU scrap.

- Selected flow: Waste natural rubber footwear compound
- Flow property / unit: Mass / kg
- Amount rule: weighed non-recirculated scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_output_waste`
- Sources: `af-pefcr-2025`

###### SBR forming scrap (`waste_sbr_scrap`)

Record non-recirculated SBR forming scrap as an atomic waste stream.

- Selected flow: Waste styrene-butadiene rubber footwear compound
- Flow property / unit: Mass / kg
- Amount rule: weighed non-recirculated scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_output_waste`
- Sources: `af-pefcr-2025`

###### TPU forming scrap (`waste_tpu_scrap`)

Record non-recirculated TPU forming scrap separately from rubber and EVA scrap.

- Selected flow: Waste thermoplastic polyurethane granules
- Flow property / unit: Mass / kg
- Amount rule: weighed non-recirculated scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_output_waste`
- Sources: `af-pefcr-2025`

##### Elementary flows

###### Fossil carbon dioxide from natural-gas combustion (`sole_co2_natural_gas`)

Calculate direct fossil carbon dioxide from the measured natural-gas input using a disclosed jurisdictional factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: natural-gas energy multiplied by the disclosed fossil carbon dioxide factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_energy`
- Sources: `eu-pef-2021`

###### R-134a emitted to air (`sole_r134a_to_air`)

For the same conditional R-134a route, calculate chemical-specific leakage to air from the equipment mass balance; do not combine it with other refrigerants.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: opening charge plus additions minus closing charge, recovered mass and contained transfer, assigned to the included equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_refrigerant`

### Process: Lasting, bonding and finishing (`lasting_assembly`)

#### Inputs

##### Product flows

###### Stitched sports-footwear upper (`assembly_upper`)

Record transferred or purchased stitched uppers by actual mass.

- Selected flow: Stitched sports-footwear upper
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering lasting and assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_components`
- Sources: `krug-2021-footwear-manufacturing`

###### Ethylene-vinyl acetate footwear midsole (`assembly_eva_midsole`)

Record EVA midsoles separately from rubber outsoles and other bottom components.

- Selected flow: Ethylene-vinyl acetate footwear midsole
- Flow property / unit: Mass / kg
- Amount rule: installed and rejected component mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_components`
- Sources: `af-pefcr-2025`

###### Rubber footwear outsole (`assembly_rubber_outsole`)

Record rubber outsoles separately from midsoles and sockliners.

- Selected flow: Rubber footwear outsole
- Flow property / unit: Mass / kg
- Amount rule: installed and rejected component mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_components`
- Sources: `af-pefcr-2025`

###### Polyurethane foam sockliner (`assembly_pu_sockliner`)

Record the polyurethane foam sockliner as a distinct component.

- Selected flow: Polyurethane foam footwear sockliner
- Flow property / unit: Mass / kg
- Amount rule: installed and rejected component mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_components`
- Sources: `af-pefcr-2025`; `ccote-2024-footwear-lca`

###### Waterborne polyurethane dispersion adhesive (`assembly_waterborne_pu_adhesive`)

Record waterborne polyurethane dispersion adhesive separately from solvent-borne adhesive and cleaning solvents.

- Selected flow: Waterborne polyurethane dispersion footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening stock minus closing stock and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_chemicals`
- Sources: `simoes-2024-footwear-adhesive`

###### Solvent-borne polyurethane adhesive (`assembly_solvent_pu_adhesive`)

Record solvent-borne polyurethane adhesive as its own formulated product input.

- Selected flow: Solvent-borne polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening stock minus closing stock and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_chemicals`
- Sources: `simoes-2024-footwear-adhesive`; `unido-footwear-environment`

###### Acetone cleaning solvent (`assembly_acetone`)

Record acetone separately from adhesive formulations and other solvents.

- Selected flow: Acetone
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening stock minus closing stock, recovered solvent and off-site waste solvent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_solvents`
- Sources: `simoes-2024-footwear-adhesive`; `unido-footwear-environment`

###### Ethyl acetate cleaning or priming solvent (`assembly_ethyl_acetate`)

Record ethyl acetate separately when used for cleaning, priming or cementing.

- Selected flow: Ethyl acetate
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening stock minus closing stock, recovered solvent and off-site waste solvent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_solvents`
- Sources: `unido-footwear-environment`

###### Electricity for lasting and assembly (`assembly_electricity`)

Record electricity for lasting, adhesive activation, pressing, extraction and finishing equipment.

- Selected flow: Electricity, medium voltage, at manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered or causally allocated reporting-period consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `eu-pef-2021`; `krug-2021-footwear-manufacturing`; `simoes-2024-footwear-adhesive`

###### Purchased hot water for assembly (`assembly_hot_water`)

Record purchased hot water separately from steam and fuels when it serves cleaning or process heating.

- Selected flow: Hot water, purchased, at manufacturing site
- Flow property / unit: Energy / MJ
- Amount rule: measured mass flow multiplied by measured temperature change and specific heat capacity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_energy`
- Sources: `eu-pef-2021`

###### Liquefied petroleum gas for assembly heating (`assembly_lpg`)

Record LPG separately from natural gas, electricity and purchased heat.

- Selected flow: Liquefied petroleum gas, combusted in industrial equipment
- Flow property / unit: Energy / MJ LHV
- Amount rule: measured LPG quantity multiplied by supplier-period lower heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_energy`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted unboxed footwear (`unboxed_footwear_output`)

Record accepted footwear transferred to packaging; exclude rejects and packaging mass.

- Selected flow: Other sports footwear, except skating boots, unboxed
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted unboxed footwear
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_output_waste`
- Sources: `af-pefcr-2025`; `krug-2021-footwear-manufacturing`

##### Waste flows

###### Waste polyurethane adhesive (`waste_pu_adhesive`)

Record uncured and cured polyurethane adhesive waste separately from solvent wastes.

- Selected flow: Waste polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: weighed discarded adhesive by actual treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_output_waste`
- Sources: `simoes-2024-footwear-adhesive`

###### Waste acetone (`waste_acetone`)

Record acetone sent off site in liquid waste separately from acetone emitted to air.

- Selected flow: Waste acetone
- Flow property / unit: Mass / kg
- Amount rule: weighed or container-volume-derived waste corrected for concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_solvents`
- Sources: `simoes-2024-footwear-adhesive`

###### Waste ethyl acetate (`waste_ethyl_acetate`)

Record ethyl acetate sent off site in liquid waste as an atomic waste stream.

- Selected flow: Waste ethyl acetate
- Flow property / unit: Mass / kg
- Amount rule: weighed or container-volume-derived waste corrected for concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_solvents`
- Sources: `unido-footwear-environment`

###### Rejected finished footwear (`waste_rejected_footwear`)

Record rejected footwear not returned to internal rework by measured mass and treatment destination.

- Selected flow: Waste rejected sports footwear
- Flow property / unit: Mass / kg
- Amount rule: measured mass of rejects leaving internal rework loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_output_waste`
- Sources: `af-pefcr-2025`; `ccote-2024-footwear-lca`

##### Elementary flows

###### Acetone emitted to air (`acetone_to_air`)

Calculate or measure acetone released to air after subtracting recovery, waste and retained quantities.

- Selected flow: Acetone, to air
- Flow property / unit: Mass / kg
- Amount rule: chemical-specific mass balance or calibrated emission measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_solvents`
- Sources: `simoes-2024-footwear-adhesive`; `unido-footwear-environment`

###### Ethyl acetate emitted to air (`ethyl_acetate_to_air`)

Calculate or measure ethyl acetate released to air separately from acetone.

- Selected flow: Ethyl acetate, to air
- Flow property / unit: Mass / kg
- Amount rule: chemical-specific mass balance or calibrated emission measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_solvents`
- Sources: `unido-footwear-environment`

###### Fossil carbon dioxide from LPG combustion (`assembly_co2_lpg`)

Calculate direct fossil carbon dioxide from measured LPG consumption using a disclosed jurisdictional factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: LPG energy multiplied by the disclosed fossil carbon dioxide factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unboxed footwear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_energy`
- Sources: `eu-pef-2021`

### Process: Final inspection and packaging (`final_packaging`)

#### Inputs

##### Product flows

###### Accepted unboxed footwear (`packaging_unboxed_footwear`)

Record accepted unboxed footwear entering final inspection and packaging.

- Selected flow: Other sports footwear, except skating boots, unboxed
- Flow property / unit: Mass / kg
- Amount rule: measured net input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output`
- Sources: `af-pefcr-2025`

###### Tissue paper packaging (`packaging_tissue_paper`)

Record tissue paper separately from boxes, cartons, labels and plastic film.

- Selected flow: Tissue paper for footwear packaging
- Flow property / unit: Mass / kg
- Amount rule: issue mass corrected for stock change and unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `af-pefcr-2025`; `ccote-2024-footwear-lca`

###### Paperboard retail footwear box (`packaging_retail_box`)

Record the retail paperboard box as its own packaging input.

- Selected flow: Paperboard retail footwear box
- Flow property / unit: Mass / kg
- Amount rule: box count multiplied by product-specific sampled mean mass, including damaged boxes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `af-pefcr-2025`; `ccote-2024-footwear-lca`

###### Corrugated transport carton (`packaging_corrugated_carton`)

Record corrugated cartons separately from retail boxes.

- Selected flow: Corrugated board transport carton
- Flow property / unit: Mass / kg
- Amount rule: carton count multiplied by sampled mean mass, including damaged cartons
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `af-pefcr-2025`; `ccote-2024-footwear-lca`

###### Low-density polyethylene packaging bag (`packaging_ldpe_bag`)

Record each LDPE bag or film wrap separately from paper packaging.

- Selected flow: Low-density polyethylene footwear packaging bag
- Flow property / unit: Mass / kg
- Amount rule: bag count multiplied by sampled mean mass, including damaged bags
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `af-pefcr-2025`

###### Paper product label (`packaging_paper_label`)

Record paper labels separately from tissue paper and boxes.

- Selected flow: Paper footwear product label
- Flow property / unit: Mass / kg
- Amount rule: label count multiplied by sampled mean mass, including damaged labels
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `af-pefcr-2025`

###### Electricity for final inspection and packaging (`packaging_electricity`)

Record electricity used by final inspection, labelling, packing and local conveyors.

- Selected flow: Electricity, medium voltage, at manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered or causally allocated reporting-period consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference other sports footwear (`reference_footwear_output`)

Record the accepted net footwear mass as the quantitative reference; packaging mass remains separate.

- Selected flow: Other sports footwear, except skating boots `a372c679-9693-4957-aad9-98b6d6b5e435`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization from measured accepted net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_output`

##### Waste flows

###### Waste tissue paper packaging (`waste_tissue_paper`)

Record discarded tissue paper separately from other packaging wastes.

- Selected flow: Waste tissue paper packaging
- Flow property / unit: Mass / kg
- Amount rule: weighed waste by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `af-pefcr-2025`

###### Waste paperboard retail footwear box (`waste_retail_box`)

Record damaged or discarded retail boxes separately from corrugated cartons.

- Selected flow: Waste paperboard retail footwear box
- Flow property / unit: Mass / kg
- Amount rule: weighed waste by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `af-pefcr-2025`

###### Waste corrugated transport carton (`waste_corrugated_carton`)

Record discarded corrugated cartons as an atomic packaging waste.

- Selected flow: Waste corrugated board transport carton
- Flow property / unit: Mass / kg
- Amount rule: weighed waste by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `af-pefcr-2025`

###### Waste low-density polyethylene packaging film (`waste_ldpe_film`)

Record discarded LDPE bags and film separately from paper wastes.

- Selected flow: Waste low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: weighed waste by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `af-pefcr-2025`

###### Waste paper product label (`waste_paper_label`)

Record discarded paper labels separately from other paper packaging.

- Selected flow: Waste paper footwear product label
- Flow property / unit: Mass / kg
- Amount rule: weighed waste by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `af-pefcr-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

Subdivision and direct measurement are required before allocation. Internal rework remains inside its originating process and is not a co-product. Waste or scrap leaving the system is not credited unless it has a documented destination and an economically valuable secondary-product function; any such case must disclose the quantity, destination, substituted function and allocation method.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all shared operations | First subdivide processes or use direct metering and product-specific issue records to avoid allocation. | `eu-pef-2021`; `af-pefcr-2025` |
| `allocation_causal` | shared electricity, heat, fuel, chemicals and waste | If subdivision is impossible, allocate each atomic exchange with a documented physical causal driver such as machine time, metered energy, material throughput or accepted mass; do not apply one undifferentiated factor to all exchanges. | `eu-pef-2021` |
| `allocation_scrap` | saleable scrap or secondary outputs | Treat scrap as waste by default. If it performs a documented co-product function and has economic value, disclose it and apply the applicable study hierarchy consistently without double credit. | `eu-pef-2021` |
| `allocation_rework` | internal rework | Return rework inputs, energy and losses to the process that generated them and include them in the accepted-output denominator. | `af-pefcr-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_upper_materials` | `upper_preparation` | upper sheet and textile materials | issue/return/stock records | material identity; supplier; lot; opening stock; issues; returns; closing stock; offcuts | reconcile warehouse and cutting-room records | kg | per batch, aggregated monthly | representative 12-month period or complete campaign | each included site | sum by named material and product route | stock reconciliation and signed issue records |
| `cp_upper_accessories` | `upper_preparation` | thread, laces and eyelets | issue records and mass sample | identity; count; issue mass; return; sample size; sample mass | reconcile issues and convert counts from documented samples | kg and count | per batch | same as reference production | each included site | sum by named accessory | sample sheet and calibrated balance record |
| `cp_upper_electricity` | `upper_preparation` | electricity | meter record | meter id; start/end reading; machine hours; products processed | submeter or causally allocate shared meter | kWh | shift or batch | same as reference production | each included site | sum only after route-specific allocation | meter calibration or utility reconciliation |
| `cp_upper_output_waste` | `upper_preparation` | stitched uppers and named wastes | transfer and waste tickets | output mass; reject mass; waste identity; destination | weigh transfers and each waste stream | kg | batch | same as reference production | each included site | sum by output or waste identity and destination | mass-balance reconciliation |
| `cp_sole_materials` | `sole_forming` | named sole compounds | issue/return/stock records | compound identity; lot; opening stock; issue; return; closing stock | reconcile warehouse and forming records | kg | batch | same as reference production | each on-site forming line | sum by named compound | formulation and stock reconciliation |
| `cp_sole_energy` | `sole_forming` | electricity, steam and natural gas | meter and supplier records | carrier identity; meter; quantity; LHV; steam state | direct meter or causal allocation; calculate energy with disclosed factor | kWh or MJ | shift or batch | same as reference production | each on-site forming line | sum separately by carrier | meter, invoice and factor provenance |
| `cp_sole_refrigerant` | `sole_forming` | R-134a make-up and leakage | service and charge records | chemical identity; equipment id; opening charge; additions; recovery; closing charge | equipment-specific refrigerant mass balance | kg | each service event and annual close | same as reference production | each included cooling unit | sum only for R-134a after equipment allocation | service invoice and signed charge log |
| `cp_sole_output_waste` | `sole_forming` | sole components and compound-specific scrap | transfer and waste tickets | component identity; accepted mass; regrind return; discarded mass; destination | weigh accepted components and non-recirculated scrap | kg | batch | same as reference production | each on-site forming line | sum separately by component or compound | forming mass balance |
| `cp_assembly_components` | `lasting_assembly` | upper, midsole, outsole and sockliner | issue and transfer records | component identity; count; mass; rejects | weigh or count with product-specific mass conversion | kg and count | batch | same as reference production | each assembly line | sum by named component | bill-of-material and transfer reconciliation |
| `cp_assembly_chemicals` | `lasting_assembly` | named adhesives | purchase and stock records | formulation; supplier; opening stock; purchases; returns; closing stock; waste | chemical-specific inventory balance | kg | batch and monthly reconciliation | same as reference production | each assembly line | sum by exact formulation | safety data sheet and stock reconciliation |
| `cp_assembly_solvents` | `lasting_assembly` | acetone and ethyl acetate inputs, wastes and air emissions | purchase, stock, waste and emission records | chemical; purchase; stock; recovery; waste mass; concentration; measured emission | separate chemical mass balances or calibrated measurement | kg | monthly | same as reference production | each included site | sum separately for each chemical | closed mass balance and measurement report |
| `cp_assembly_energy` | `lasting_assembly` | electricity, hot water and LPG | meter and supplier records | carrier; meter; quantity; temperatures; LHV; operating driver | direct meter or causal allocation | kWh or MJ | shift or batch | same as reference production | each assembly line | sum separately by carrier | meter, invoice and calculation sheet |
| `cp_assembly_output_waste` | `lasting_assembly` | unboxed footwear, adhesive waste and rejects | inspection, transfer and waste records | accepted mass; rework; reject mass; waste identity; destination | weigh output and wastes; close assembly mass balance | kg | batch | same as reference production | each assembly line | sum by product and named waste | production and disposal records |
| `cp_packaging_materials` | `final_packaging` | named packaging components | issue records and mass samples | packaging identity; count; issue; return; sample size; sample mass | reconcile issues and convert counts to mass | kg and count | batch | same as reference production | each packing line | sum by named packaging component | packaging specification and sample sheet |
| `cp_packaging_energy` | `final_packaging` | electricity | meter record | meter; reading; line hours; products packed | submeter or causal line-hour allocation | kWh | shift | same as reference production | each packing line | sum after product-route allocation | meter reconciliation |
| `cp_packaging_waste` | `final_packaging` | each packaging waste | waste ticket | material identity; mass; destination | weigh each separated waste stream | kg | batch or shift | same as reference production | each packing line | sum by material and destination | disposal or recycling receipt |
| `cp_reference_output` | `final_packaging` | accepted reference footwear | production and mass sample | model; size; pair count; sample mass; reject count; net accepted mass | weigh accepted production or calculate from stratified size-specific mass sample | kg and pair | batch | same as reference production | all included lines and sites | production-weighted size mix; normalize to 1 kg | calibrated balance, sample design and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_consumption` | every named material and chemical | opening stock + receipts - closing stock - documented return = consumed mass; reconcile consumed mass to product, waste, recovery and emission as applicable | stock, receipt, return, product, waste and emission records | kg consumed per process output | `eu-pef-2021`; `af-pefcr-2025` |
| `calc_count_to_mass` | counted parts and packaging | total count × product-specific sampled mean mass; stratify by size or specification when mass differs materially | count and mass sample | kg input per process output | `af-pefcr-2025` |
| `calc_shared_energy` | shared electricity and fuels | shared measured quantity × documented causal-driver share; retain denominator and all product shares | meter quantity and causal driver | kWh or MJ by process and product | `eu-pef-2021` |
| `calc_steam_energy` | purchased steam | measured steam mass × delivered enthalpy difference; use supplier energy record when independently metered | mass, pressure/temperature or supplier record | MJ steam | `eu-pef-2021` |
| `calc_hot_water_energy` | purchased hot water | mass × specific heat capacity × measured temperature difference | water mass and inlet/outlet temperature | MJ hot-water energy | `eu-pef-2021` |
| `calc_fuel_energy` | natural gas and LPG | measured quantity × supplier-period lower heating value | fuel quantity and LHV | MJ LHV | `eu-pef-2021` |
| `calc_solvent_emission` | each named solvent | opening stock + purchases - closing stock - recovered mass - off-site waste mass - retained mass = emission, unless calibrated direct measurement replaces the balance | chemical-specific stock, recovery, waste and retention | kg named solvent to air | `simoes-2024-footwear-adhesive`; `unido-footwear-environment` |
| `calc_reference_normalization` | full foreground system | divide each reconciled exchange by accepted net footwear mass and scale to 1 kg | reconciled exchange and accepted net mass | exchange per 1 kg reference product | `af-pefcr-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and reference flow | Demonstrate CPC 29490 scope, state-100 reference UUID, model or family, construction, size range and product-weighted size mix. | classification record, product specification and production records |
| `dq_bom_completeness` | product inputs | Reconcile the complete actual bill of materials; do not replace unknown constituents with material-family placeholders. | product BOM, purchase specification, issue records and mass balance |
| `dq_route` | all processes | Declare purchased versus on-site component production, included lines, outsourced operations and rework loops. | process map, supplier records and site walk-through |
| `dq_temporal` | all foreground data | Use a representative continuous 12-month period or a complete campaign and explain abnormal downtime or product-mix changes. | dated meters, stock ledgers and production totals |
| `dq_measurement` | mass and energy records | Use calibrated instruments or reconcile supplier invoices and meters; disclose allocation where direct measurement is unavailable. | calibration, invoices, meter reconciliation and calculation sheets |
| `dq_chemical` | adhesives, solvents and emissions | Preserve exact formulation or chemical identity and close separate mass balances for acetone and ethyl acetate. | safety data sheets, stock ledger, waste manifest and emission report |
| `dq_waste_destination` | each waste flow | Report mass and actual treatment destination separately; do not net recycling receipts against material input. | waste tickets and treatment receipts |
| `dq_background` | linked upstream datasets | Document geographic, temporal and technological representativeness for each material, component and energy supply. | dataset metadata and gap assessment |
| `dq_uncertainty` | calculated or allocated values | Retain raw observations, factor provenance, sample variability and allocation denominator. | calculation workbook and uncertainty disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | PCR and reference flow | CPC code must be 29490; reference flow UUID must be `a372c679-9693-4957-aad9-98b6d6b5e435`; flow property must be Mass and reference unit kg. | `un-cpc-v3-2025`; `epd-footwear-2024` |
| `validate_scope` | product dataset | Reject skating boots and products classified to CPC 2941 or 2942, and reject datasets whose product construction or market state is not declared. | `un-cpc-v3-2025` |
| `validate_route` | process inventory | Require upper preparation, lasting/assembly and packaging; require sole forming only when performed on site and otherwise require linked purchased sole components. | `af-pefcr-2025`; `krug-2021-footwear-manufacturing` |
| `validate_atomic_inventory` | all exchanges | Reject aggregate utilities, energy-carrier, materials, packaging, emissions or waste rows; each exchange must name one resolvable physical or chemical flow. | `eu-pef-2021`; `af-pefcr-2025` |
| `validate_mass_balance` | materials and outputs | Require route-level reconciliation of each named material to product, returned stock, internal recirculation, waste and emissions, and reconcile accepted output to the 1 kg reference. | `eu-pef-2021`; `af-pefcr-2025` |
| `validate_energy` | electricity, steam, hot water and fuels | Require separate measured or calculated quantities and factors for each carrier; reject combined energy rows. | `eu-pef-2021` |
| `validate_solvents` | acetone and ethyl acetate | Require separate input, waste, recovery and air-emission accounting for each used solvent. | `simoes-2024-footwear-adhesive`; `unido-footwear-environment` |
| `validate_refrigerants` | on-site cooling | If refrigerant make-up or leakage occurs, require a separate chemical-specific input and elementary emission card with a closed mass balance; a generic refrigerant row fails. | `eu-pef-2021` |
| `validate_packaging` | final packaging | Require each actual packaging component and each packaging waste separately, while excluding packaging mass from the reference product. | `af-pefcr-2025`; `ccote-2024-footwear-lca` |
| `validate_evidence` | foreground records | Require linked collection protocols, raw-record retention, source IDs for externally supported methods, and explicit disclosure of unresolved UUIDs and data gaps. | `eu-pef-2021`; `af-pefcr-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific secondary dataset or background dataset for factory-gate manufacture of CPC 29490 footwear |
| downstream_use | Foreground package construction and linked process or lifecycle-model projection |
| allowed_use | Modelling the declared product construction, size mix, site, technology and reporting period; aggregation only after atomic exchanges remain traceable |
| excluded_use | Claims about other footwear classes; consumer use-life comparisons; distribution or end-of-life claims; substitution of a generic recipe for an undisclosed product route |
| required_metadata | PCR id and version; CPC 29490; reference UUID; model or family; construction; size mix; net product mass; site and geography; reporting period; included and outsourced processes; packaging configuration; allocation and cut-off disclosures |
| required_quality_disclosure | BOM and mass-balance completeness; meter and stock-record coverage; calculation factors; allocation drivers; solvent balance; waste destinations; background-data representativeness; unresolved UUIDs and uncertainty |
| update_trigger | Material change in product construction, supplier route, on-site forming, adhesive or solvent system, energy supply, packaging, site, allocation driver, reporting-period representativeness, CPC scope or Tiangong reference-flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | official_guidance | United Nations Statistics Division. *Central Product Classification (CPC) Version 3.0, Explanatory Notes*, subclass 29490. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-20). | Exact classification title, hierarchy and exclusions |
| `eu-pef-2021` | official_guidance | European Commission. Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-20). | Product-specific inventory, company-specific data, allocation, data quality and reporting rules |
| `af-pefcr-2025` | official_guidance | Apparel and Footwear Product Environmental Footprint Category Rules, version 3.1, 29 April 2025. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf (retrieved 2026-08-20); European Commission recognition: https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en. | Footwear BOM, component manufacture, assembly, packaging, primary data and quality requirements |
| `epd-footwear-2024` | standard | International EPD System. PCR 2024:04 Footwear, version 1.0.0, valid to 2028-06-19. https://www.environdec.com/pcr-library/pcr_edf5de69-f200-455d-3a37-08dba55a27da (retrieved 2026-08-20). | Independent PCR confirmation that CPC 2949 other sports footwear is within footwear scope |
| `ccote-2024-footwear-lca` | literature | C. C. Cote et al. “Environmental Impact of Footwear Using Life Cycle Assessment—Case Study of Professional Footwear.” *Sustainability* 16(14), 6094 (2024). https://doi.org/10.3390/su16146094; full text: https://www.mdpi.com/2071-1050/16/14/6094/html. | Footwear materials, cutting, stitching, injection, packaging, energy, water, emissions and production-waste decomposition; no case values used as defaults or ranges |
| `krug-2021-footwear-manufacturing` | literature | S. Krug et al. “Towards footwear manufacturing 4.0: shoe sole robotic grasping in assembling operations.” *The International Journal of Advanced Manufacturing Technology* (2021). https://doi.org/10.1007/s00170-021-06697-0; full text: https://link.springer.com/article/10.1007/s00170-021-06697-0. | Cutting, stitching, shaping, adhesive application, sole assembly and pressing process sequence |
| `simoes-2024-footwear-adhesive` | literature | C. L. Simões et al. “Environmental assessment of an innovative adhesive for the footwear industry: road map for product development.” *The International Journal of Life Cycle Assessment* (2024). https://doi.org/10.1007/s11367-024-02314-w; full text: https://link.springer.com/article/10.1007/s11367-024-02314-w. | Waterborne and solvent-borne polyurethane adhesive systems, acetone and product-specific adhesive inventory; no case values used as defaults or ranges |
| `unido-footwear-environment` | extension_guidance | United Nations Industrial Development Organization. *Environmental Aspects of Footwear and Leather Products Manufacture*. https://downloads.unido.org/ot/47/88/4788513/20001-_23435.PDF (retrieved 2026-08-20). | Operation-specific solvent use and direct footwear-manufacturing emissions, including acetone and ethyl acetate |
