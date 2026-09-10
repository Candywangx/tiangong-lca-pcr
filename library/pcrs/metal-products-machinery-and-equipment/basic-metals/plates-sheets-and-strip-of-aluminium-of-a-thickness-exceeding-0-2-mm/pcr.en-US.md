---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-aluminium-of-a-thickness-exceeding-0-2-mm
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Plates, sheets and strip, of aluminium, of a thickness exceeding 0.2 mm

## 1. Scope and Applicability

This PCR applies to wrought aluminium or aluminium-alloy plate, sheet and strip with a finished nominal thickness greater than 0.2 mm, supplied as flat product, coil or cut length at the rolling or finishing plant gate. It covers unalloyed and alloyed products, rectangular and non-rectangular products, and mill-finished or surface-treated delivery states when the treatment is declared and included in the foreground boundary.

The PCR is application-neutral. It may support foreground data packages for battery enclosures, photovoltaic structures, transport, buildings and other uses, but no one application, alloy, temper, gauge, rolling route or coating may represent the whole category. A category-average dataset is permitted only when its product mix, production-volume weighting and route coverage are documented.

Aluminium foil of thickness not exceeding 0.2 mm, reroll stock that has not reached the declared delivery state, extruded profiles, bars, rods, wire, tubes, cast parts, fabricated enclosures or structures, and downstream stamping, forming, joining, installation, use and end-of-life activities are outside this product category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-aluminium-of-a-thickness-exceeding-0-2-mm |
| classification_refs | CPC 3.0: 41534, exact |
| covered_products | Wrought aluminium or aluminium-alloy plate, sheet and strip with finished nominal thickness > 0.2 mm, in coil or cut-length form, including declared mill-finished, cleaned, pretreated, anodized, clad, painted or otherwise surface-treated states |
| excluded_products | Aluminium foil ≤ 0.2 mm; reroll stock not at the declared delivery state; extrusions, bars, rods, wire, tubes and castings; fabricated components; downstream product manufacture, installation, use and end-of-life |
| representative_product | 1,000 kg of the declared aluminium plate, sheet or strip product at the producer gate; the concrete dataset represents its declared alloy, temper, thickness, route, surface and delivery state, not the category as a single undifferentiated grade |
| production_route | Declare ingot/slab hot rolling, continuous-cast or strip-cast rolling, cold-rolling sequence, annealing or other heat treatment, surface treatment, trimming/slitting and packaging; identify purchased versus on-site cast stock |
| market_state | Producer-gate semi-finished flat-rolled aluminium product ready for the declared customer delivery condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Aluminium or aluminium-alloy plate, sheet or strip with finished nominal thickness greater than 0.2 mm, at the declared producer-gate delivery state |
| How much | 1,000 kg net saleable product, excluding packaging |
| How well | Conforms to the declared alloy designation, temper, nominal thickness and tolerance, geometry, surface treatment, finish and delivery specification |
| How long or cycle | One production campaign or reporting-period allocation normalized to the reference amount |
| reference_flow_link | `4f197be4-7b3b-11dd-ad8b-0800200c9a66` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy designation and composition specification; temper and heat-treatment state; finished nominal thickness > 0.2 mm and tolerance; plate, sheet or strip form and coil/cut-length geometry; hot-rolled, cold-rolled or continuous-cast/strip-cast route; ingot, slab, molten-metal or continuous-cast feedstock origin; annealing and other heat treatment; surface treatment, cladding or coating; primary, pre-consumer and post-consumer aluminium shares and calculation method; internal rolling-scrap return route; mill finish and final delivery state; plant, geography and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Net saleable reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the package to 1,000 kg of unpackaged product at the declared delivery state; report packaging separately. |
| `thickness_identity` | Reference product | Nominal thickness | mm | Record the finished nominal thickness and applicable tolerance; every represented product must be greater than 0.2 mm. |
| `area_to_mass` | Data collected per unit area | Mass | kg | Convert area-based records using measured lot mass or declared geometry with product-specific thickness and density; disclose the conversion and do not use one alloy density to conceal a mixed product portfolio. |
| `metal_balance` | Aluminium-bearing inputs and outputs | Mass | kg | Use a common dry-metal mass basis and reconcile net stock change, saleable product, internal return scrap, exported scrap, dross and unrecovered metal. |
| `recycled_share` | Metallic charge composition | Mass fraction | % | Calculate primary, pre-consumer and post-consumer shares from traceable charge records; report internal scrap separately and state whether it is excluded from recycled-content claims. |
| `energy_carriers` | Electricity and fuels | Energy | kWh or MJ | Keep each carrier and unit explicit; conversion may be used for aggregation only when the original measured quantity and conversion factor are retained. |

## 5. System Boundary

The foreground boundary begins with receipt of the declared metallic feedstock at the reporting plant, or with molten metal receipt when casting is controlled by the same product system, and ends with net saleable plate, sheet or strip in its declared delivery state at the producer gate. Include all selected route operations, utilities, consumables, direct releases, treatment of on-site wastes and internal scrap-remelting operations controlled within this boundary. Upstream primary aluminium, recycled ingot, alloying material, electricity, fuel, chemicals, water, packaging and off-site treatment remain linked product or waste inputs with appropriate upstream datasets.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of identified ingot, rolling slab, molten aluminium, continuous-cast strip feedstock or purchased reroll stock at the reporting plant |
| starting_condition_role | Upstream product input whose primary/recycled origin, alloy family, geography and supplier dataset are disclosed; on-site casting is foreground when controlled by the reporting system |
| product_classification_scope | CPC 3.0 41534 plate, sheet and strip with finished thickness > 0.2 mm; foil ≤ 0.2 mm and other aluminium product forms are outside scope |
| recursive_input_rule | Purchased plate, sheet, strip or reroll stock in the same category remains an explicit product input; model only the downstream transformations performed in the foreground and link the purchased input to its upstream dataset instead of recreating the same category recursively |
| upstream_dataset_requirement | Use supplier-specific or otherwise representative datasets for primary aluminium, recycled wrought-alloy ingot, cast stock, alloying additions, energy, chemicals, water, packaging and off-site waste treatment; disclose geography, technology and temporal mismatch |
| disclosure | Declare route, cast-stock source, alloy/temper, gauge, annealing, surface treatment, primary/recycled shares, internal and exported scrap routes, delivery state, cut-offs and any operation performed outside the reporting plant |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | Foreground production route | Include every controlled operation needed to reach the declared delivery state: feedstock preparation or on-site casting where applicable, hot or continuous casting/rolling route, cold rolling where used, annealing/heat treatment, surface treatment, trimming/slitting, internal scrap handling and packaging. | `european-aluminium-epr-2024` |
| `boundary_upstream_visible` | Purchased metallic feedstock | Keep primary aluminium, recycled wrought-alloy ingot, slab, molten metal and reroll stock visible as upstream product inputs with source-specific datasets and disclosed primary/recycled shares. | `european-aluminium-epr-2024` |
| `boundary_recursive_input` | Same-category purchased input | Do not recursively model purchased same-category plate, sheet or strip as if produced by the reporting plant; link it to an upstream dataset and include only the actual downstream transformation. | `iso-14044-2006` |
| `boundary_downstream_excluded` | Downstream application | Exclude fabrication into battery cases, photovoltaic supports, vehicles, building products or other components, and exclude distribution beyond the producer gate, installation, use and end-of-life unless a separately declared study extends the system. | `unsd-cpc-3-0-41534` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cast_stock_preparation` | Metallic feedstock receipt, melt preparation and cast-stock production | required | Always record received metallic feedstock; include melting, alloying, melt treatment, casting and homogenization only when controlled within the foreground system | Establishes alloy, cast-stock source and metallic charge balance | per 1,000 kg net saleable product |
| `hot_rolling` | Slab reheating and hot rolling | conditional | Include for ingot/slab hot-rolled routes | Produces hot-rolled plate, sheet or coil and route-specific scrap | per 1,000 kg output from this process |
| `continuous_casting_rolling` | Continuous casting or strip casting and rolling | conditional | Include when molten metal is cast directly to strip or thin slab and rolled without the conventional ingot route | Produces continuous-cast strip or coil and route-specific scrap | per 1,000 kg output from this process |
| `cold_rolling` | Cold rolling | conditional | Include when hot-rolled or continuous-cast stock is reduced or finished by cold rolling | Achieves declared gauge, mechanical state and surface | per 1,000 kg output from this process |
| `annealing_heat_treatment` | Annealing and other heat treatment | conditional | Include every batch, continuous anneal, solution treatment, ageing or stabilization step needed for the declared temper | Establishes declared temper and delivery state | per 1,000 kg treated output |
| `surface_treatment` | Cleaning, pretreatment, cladding, anodizing or coating | conditional | Include when any surface treatment is part of the sold product; keep untreated mill-finish products explicit | Establishes declared surface and coating state | per 1,000 kg treated output |
| `finishing_delivery` | Trimming, slitting, inspection and packaging | required | Include the operations needed to make the product saleable in its declared coil or cut-length delivery state | Produces the reference flow and closes the metal balance | per 1,000 kg net saleable product |

### Process: Metallic feedstock receipt, melt preparation and cast-stock production (`cast_stock_preparation`)

#### Inputs

##### Product flows

###### Metallic charge and purchased cast stock (`metallic_charge`)

Record each primary aluminium, recycled wrought-alloy ingot, alloying addition, rolling slab, molten-metal or purchased reroll-stock input separately. Retain supplier, alloy, mass, pre-/post-consumer origin and whether the material is an internal return.

- Selected flow: Primary aluminium, recycled aluminium, alloying material, molten aluminium, rolling ingot/slab or purchased reroll stock; one exchange per distinct material identity
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass adjusted for documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg output from `cast_stock_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_stock_records`
- Sources: `european-aluminium-epr-2024`

###### Casting utilities and consumables (`casting_utilities`)

When on-site melting or casting is included, record electricity, fuels, fluxes, grain refiners, degassing media, cooling water and other consumables as separate exchanges.

- Selected flow: carrier- or material-specific product flow; no aggregated generic substitute
- Flow property / unit: Energy or Mass / measured carrier unit, MJ, kWh or kg
- Amount rule: metered or purchased quantity attributable to the included campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg output from `cast_stock_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_stock_records`
- Sources: `european-aluminium-epr-2024`

##### Waste flows

#### Outputs

##### Product flows

###### Prepared rolling stock (`prepared_rolling_stock`)

Record the alloyed slab, ingot or other route-specific rolling stock transferred to the next included operation.

- Selected flow: alloy- and route-specific rolling stock
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg output from `cast_stock_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_stock_records`
- Sources: `european-aluminium-epr-2024`

##### Waste flows

###### Dross, skimmings and unrecovered metal (`casting_residues`)

Keep dross, skimmings, filter residues and other metal-bearing residues separate by actual destination and metal recovery route.

- Selected flow: destination-specific aluminium-bearing residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched or internally treated mass and measured recovered metal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg output from `cast_stock_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_stock_records`
- Sources: `iai-aluminium-scrap-2025`

##### Elementary flows

###### Direct casting releases (`casting_direct_releases`)

Create a separate elementary exchange for each monitored direct air or water release attributable to included melting and casting operations.

- Selected flow: substance-specific Tiangong elementary flow confirmed during dataset construction
- Flow property / unit: substance-appropriate property / measured reporting unit
- Amount rule: monitored release or permitted mass-balance calculation, without substituting a generic emission flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg output from `cast_stock_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_stock_records`

### Process: Slab reheating and hot rolling (`hot_rolling`)

#### Inputs

##### Product flows

###### Hot-rolling inputs (`hot_rolling_inputs`)

Record rolling stock, fuel, electricity, rolling oil, cooling water and roll-shop consumables as separate exchanges; preserve the slab/ingot source and alloy identity.

- Selected flow: route-specific rolling stock plus separate carrier- and material-specific inputs
- Flow property / unit: Mass or Energy / kg, kWh, MJ or measured carrier unit
- Amount rule: measured issue, meter or purchase records attributable to the hot-rolling campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_records`
- Sources: `european-aluminium-epr-2024`

##### Waste flows

#### Outputs

##### Product flows

###### Hot-rolled plate, sheet or coil (`hot_rolled_output`)

Preserve the alloy, outgoing gauge, route and whether the output is an intermediate or the declared saleable state.

- Selected flow: alloy-, gauge- and route-specific hot-rolled intermediate or saleable product
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg hot-rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_records`

##### Waste flows

###### Hot-rolling edge and crop scrap (`hot_rolling_scrap`)

Distinguish scrap returned inside the product system from scrap crossing the boundary; record alloy segregation and destination.

- Selected flow: route- and destination-specific aluminium scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass before remelting or dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_records`
- Sources: `iai-aluminium-scrap-2025`

##### Elementary flows

###### Hot-rolling direct releases (`hot_rolling_releases`)

Record each monitored release separately and retain its link to the rolling campaign and relevant control equipment.

- Selected flow: separate substance-specific elementary flow for each monitored direct release
- Flow property / unit: substance-appropriate property / measured reporting unit
- Amount rule: monitored furnace, air-control and wastewater release attributable to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_records`

### Process: Continuous casting or strip casting and rolling (`continuous_casting_rolling`)

#### Inputs

##### Product flows

###### Continuous-route inputs (`continuous_route_inputs`)

Record molten aluminium or other declared metallic feed, electricity, fuel, cooling water, lubricant and casting-roll consumables separately.

- Selected flow: route-specific molten-metal feed plus separate carrier- and material-specific inputs
- Flow property / unit: Mass or Energy / kg, kWh, MJ or measured carrier unit
- Amount rule: measured feed, meter or purchase records attributable to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg continuous-cast/rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_continuous_route_records`
- Sources: `european-aluminium-epr-2024`

##### Waste flows

#### Outputs

##### Product flows

###### Continuous-cast strip or coil (`continuous_route_output`)

Preserve alloy, outgoing gauge and the continuous-casting or strip-casting route identity through later operations.

- Selected flow: alloy-, gauge- and route-specific continuous-cast strip, thin slab or rolled coil
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg continuous-cast/rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_continuous_route_records`

##### Waste flows

###### Continuous-route scrap and residues (`continuous_route_scrap`)

Separate internally returned metal from residues or scrap sent to another treatment or recovery route.

- Selected flow: destination-specific aluminium scrap, dross or casting residue
- Flow property / unit: Mass / kg
- Amount rule: measured mass before internal return, treatment or dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg continuous-cast/rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_continuous_route_records`
- Sources: `iai-aluminium-scrap-2025`

##### Elementary flows

### Process: Cold rolling (`cold_rolling`)

#### Inputs

##### Product flows

###### Cold-rolling inputs (`cold_rolling_inputs`)

Record the incoming hot-rolled or continuous-cast stock, electricity, rolling lubricant, coolant and cleaning media separately.

- Selected flow: declared incoming aluminium stock plus separate carrier- and material-specific inputs
- Flow property / unit: Mass or Energy / kg, kWh, MJ or measured carrier unit
- Amount rule: measured issue, meter or purchase records attributable to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cold-rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources: `european-aluminium-epr-2024`

##### Waste flows

#### Outputs

##### Product flows

###### Cold-rolled plate, sheet or strip (`cold_rolled_output`)

Preserve the incoming route, achieved gauge, alloy and temper stage for the output transferred or sold.

- Selected flow: alloy-, gauge-, temper-stage- and route-specific cold-rolled intermediate or saleable product
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cold-rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`

##### Waste flows

###### Cold-rolling trim scrap and spent media (`cold_rolling_wastes`)

Keep aluminium trim scrap separate from spent rolling oil, filters and wastewater-treatment residues.

- Selected flow: destination-specific aluminium scrap or non-metal waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured generated mass by waste identity and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cold-rolled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources: `iai-aluminium-scrap-2025`

##### Elementary flows

### Process: Annealing and other heat treatment (`annealing_heat_treatment`)

#### Inputs

##### Product flows

###### Heat-treatment inputs (`heat_treatment_inputs`)

Record the aluminium intermediate, electricity, each furnace fuel and protective or process gas separately, and identify batch versus continuous treatment.

- Selected flow: declared aluminium intermediate plus separate energy-carrier and process-gas flows
- Flow property / unit: Mass or Energy / kg, kWh, MJ or measured carrier unit
- Amount rule: measured charge, meter and purchase records attributable to the heat-treatment cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `iso-2107-2023`

##### Waste flows

#### Outputs

##### Product flows

###### Heat-treated aluminium product (`heat_treated_output`)

Link the accepted output to its furnace cycle and retain the alloy, gauge and resulting temper designation.

- Selected flow: alloy-, temper-, gauge- and route-specific treated intermediate or saleable product
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass associated with the recorded furnace cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`

##### Waste flows

##### Elementary flows

###### Heat-treatment direct emissions (`heat_treatment_emissions`)

Calculate only releases attributable to the recorded treatment cycle and keep each emitted substance separate.

- Selected flow: separate substance-specific elementary flow for each monitored direct release
- Flow property / unit: substance-appropriate property / measured reporting unit
- Amount rule: monitored or fuel-balanced direct furnace emissions attributable to the treatment cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_records`

### Process: Cleaning, pretreatment, cladding, anodizing or coating (`surface_treatment`)

#### Inputs

##### Product flows

###### Surface-treatment inputs (`surface_treatment_inputs`)

Record the aluminium substrate, water, electricity, cleaners, etchants, conversion chemicals, anodizing electrolyte, cladding material, paint or other coating material as separate exchanges.

- Selected flow: declared aluminium substrate plus treatment-specific material, water and energy flows
- Flow property / unit: Mass, volume or Energy / kg, m3, kWh, MJ or measured unit
- Amount rule: measured issue, bath make-up, meter or purchase records attributable to the treated product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `iso-6361-1-2011`

##### Waste flows

#### Outputs

##### Product flows

###### Surface-treated aluminium product (`surface_treated_output`)

Preserve the substrate, treatment identity and retained treatment-material mass in the product record.

- Selected flow: product-specific treated plate, sheet or strip; do not use it as an untreated category proxy
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output including retained coating mass, with aluminium substrate and coating masses disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`

##### Waste flows

###### Surface-treatment wastewater and spent bath (`surface_treatment_wastes`)

Keep liquid, sludge, filter and coating wastes separate by composition and actual treatment destination.

- Selected flow: destination-specific wastewater, spent bath, sludge, filter or coating waste
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge or dispatched mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`

##### Elementary flows

###### Surface-treatment direct releases (`surface_treatment_releases`)

Record monitored residual releases after on-site treatment as separate substance-specific elementary exchanges.

- Selected flow: separate substance-specific elementary flow for each monitored release after on-site treatment
- Flow property / unit: substance-appropriate property / measured reporting unit
- Amount rule: monitored air or water release attributable to the treated product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`

### Process: Trimming, slitting, inspection and packaging (`finishing_delivery`)

#### Inputs

##### Product flows

###### Finishing inputs (`finishing_inputs`)

Record the incoming aluminium product, electricity, protective film, paper, pallets, straps and other packaging separately.

- Selected flow: declared aluminium intermediate plus separate energy and packaging material flows
- Flow property / unit: Mass or Energy / kg, kWh, MJ or measured unit
- Amount rule: measured issue, meter or purchase records attributable to saleable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`

##### Waste flows

#### Outputs

##### Product flows

###### Net saleable aluminium plate, sheet or strip (`reference_product`)

This is the reference product only after all declared route, heat-treatment, surface and delivery-state requirements have been met.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1,000 kg net saleable unpackaged product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Final trim scrap and packaging waste (`finishing_wastes`)

Record final trim/slitting scrap separately from packaging waste and state whether each scrap flow returns inside the product system or crosses the system boundary.

- Selected flow: destination-specific aluminium scrap or packaging waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured generated mass by identity and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `iai-aluminium-scrap-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | Multiple alloys, gauges, tempers, routes or surface states | Prefer campaign, line and process subdivision and direct metering. A single-alloy, single-coating or single-application dataset shall not be extrapolated to the category. | `iso-14044-2006` |
| `allocation_shared_operations` | Shared utilities and finishing operations | Use a physical relationship that reflects causality, such as metered energy, furnace occupancy, line time or processed mass; disclose the basis and test sensitivity when the choice materially changes results. | `iso-14044-2006` |
| `allocation_internal_scrap` | Edge, crop and trim scrap returned inside the same product system | Keep the return loop visible through gross scrap generation and remelting/return records, include controlled remelting burdens, and do not count the same internal scrap as both avoided primary aluminium and external recycled-content input. | `iai-aluminium-scrap-2025` |
| `allocation_boundary_scrap` | Process scrap entering or leaving the product-system boundary | State whether cut-off, substitution or co-product treatment is used and apply it consistently to both scrap generation and scrap use; do not combine credits from more than one approach. | `iai-aluminium-scrap-2025` |
| `allocation_recycled_content` | Primary and recycled aluminium shares | Calculate shares from traceable metallic charge after separately identifying internal return, pre-consumer and post-consumer scrap; disclose the product-system boundary and recycled-content definition. | `iai-aluminium-scrap-2025` |
| `allocation_dross` | Dross and skimmings | Record treatment and recovered metal explicitly; model residues and recovery operations according to their actual boundary and destination rather than assuming all dross is saleable co-product. | `iai-aluminium-scrap-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cast_stock_records` | `cast_stock_preparation` | metallic charge, cast stock, utilities, residues and direct releases | weighbridge, charge sheet, inventory movement, meter, laboratory and environmental record | batch id; supplier; alloy; origin category; input/output mass; stock change; carrier quantity; residue mass; recovered metal; release quantity | reconcile charge, production and environmental records by cast campaign | kg, kWh, MJ, m3 or substance reporting unit | each cast/campaign with monthly reconciliation | representative 12 consecutive months or declared campaign | all included melting/casting lines and outsourced steps identified | sum accepted records, subtract documented stock change and normalize to accepted cast-stock output | calibrated scales/meters, certificates of analysis, supplier declarations, manifests and environmental reports |
| `cp_hot_rolling_records` | `hot_rolling` | rolling stock, energy, consumables, product, scrap and releases | production order, meter, tank, weighbridge and environmental record | campaign; slab id; alloy; input/output mass; fuel; electricity; oil; water; scrap mass/destination; release quantity | join records by rolling campaign and reconcile metal mass | kg, kWh, MJ, m3 or substance reporting unit | each campaign with monthly reconciliation | representative 12 consecutive months or declared campaign | all included hot mills and reheating furnaces | allocate direct records first, then documented causal physical driver | calibration records, production reconciliation and waste manifests |
| `cp_continuous_route_records` | `continuous_casting_rolling` | molten feed, energy, consumables, strip, scrap and residues | cast log, meter, tank, weighbridge and environmental record | campaign; alloy; molten input; strip output; fuel; electricity; water; lubricant; scrap/residue mass and destination | join records by casting campaign and reconcile metal mass | kg, kWh, MJ, m3 or substance reporting unit | each campaign with monthly reconciliation | representative 12 consecutive months or declared campaign | all included casting/rolling lines | allocate direct records first, then documented causal physical driver | calibrated meters/scales, cast logs and waste manifests |
| `cp_cold_rolling_records` | `cold_rolling` | incoming stock, energy, lubricant, output and wastes | coil genealogy, production order, meter, lubricant and waste record | coil id; alloy; temper stage; thickness in/out; input/output mass; electricity; lubricant; water; scrap; spent media | join by coil/campaign and reconcile metal mass | kg, kWh, m3 or measured unit | each coil/campaign with monthly reconciliation | representative 12 consecutive months or declared campaign | all included cold mills | sum product-specific records; shared loads use disclosed physical driver | coil genealogy, calibrated meters/scales and waste manifests |
| `cp_heat_treatment_records` | `annealing_heat_treatment` | charge, energy, gas, output and direct emissions | furnace batch, recipe, meter and emission record | furnace; cycle; alloy; temper in/out; charge/output mass; time/temperature; fuel; electricity; gas; monitored emissions | join furnace cycle to treated lots and normalize to accepted output | kg, kWh, MJ, Nm3 or substance reporting unit | each furnace cycle | representative 12 consecutive months or declared campaign | all included furnaces and outsourced treatment identified | direct batch record or occupancy/treated-mass allocation with basis disclosed | furnace logs, calibrated meters and conformance test records |
| `cp_surface_treatment_records` | `surface_treatment` | substrate, chemicals, coating, water, energy, product, wastewater and releases | treatment lot, bath log, coating record, meter, discharge and waste record | lot; treatment; substrate/coating mass; chemical make-up; water; energy; wastewater; sludge; release quantity | join treatment lot and bath records; allocate shared bath losses by causal driver | kg, m3, kWh, MJ or substance reporting unit | each lot with bath and monthly reconciliation | representative 12 consecutive months or declared campaign | every included treatment/coating line and outsourced step | direct lot record or documented area/mass/line-time driver | bath analyses, coating tests, meter calibration, discharge reports and manifests |
| `cp_finishing_records` | `finishing_delivery` | incoming product, saleable output, trim scrap, packaging and energy | coil/cut-length genealogy, scale, inspection, packing and dispatch record | product id; alloy; temper; thickness; route; surface; input/output mass; scrap; package mass; delivery state | join final genealogy to accepted output and dispatch; exclude packaging from reference mass | kg, kWh or measured unit | each saleable lot with monthly reconciliation | representative 12 consecutive months or declared campaign | all finishing and packing lines | sum accepted lot records to 1,000 kg reference product | calibrated scale, inspection certificate, packing list and dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory exchanges | normalized amount = reporting-period exchange × 1,000 kg / reporting-period net saleable unpackaged product mass | exchange quantity; net saleable unpackaged mass | exchange per 1,000 kg reference product | `iso-14044-2006` |
| `calc_metal_balance` | Aluminium-bearing flows | metallic inputs + opening stock = net saleable product + internal return + exported scrap + dross/residue metal + closing stock + documented unrecovered metal; report the reconciliation difference | charge masses; product; scrap; residues; stock change | metal-balance statement and closure difference | `european-aluminium-epr-2024` |
| `calc_recycled_shares` | Metallic charge | calculate primary, pre-consumer and post-consumer aluminium shares on the declared metallic-input basis; show internal return separately and apply the declared scrap methodology | supplier declarations; charge records; internal return; scrap origin | disclosed primary/recycled shares and denominator | `iai-aluminium-scrap-2025` |
| `calc_area_mass` | Area-based records | mass = measured area × declared finished thickness × product-specific density, or use direct lot mass where available; retain coating mass separately | area; thickness; density/composition; coating mass | kg of aluminium substrate and kg of coating | `iso-6361-1-2011` |
| `calc_shared_burden` | Shared lines and utilities | apply the selected causal physical driver to each product group and document denominator, coverage and sensitivity | metered total; line time; furnace occupancy; throughput; product groups | allocated foreground exchange by product group | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Preserve alloy designation/composition standard, temper, thickness/tolerance, form/geometry, route, cast-stock source, annealing, surface treatment and delivery state for every represented product group. | inspection certificate, certificate of analysis, production route and dispatch record; `iso-6361-1-2011`; `iso-2107-2023` |
| `dq_route_coverage` | Product mix | A category-average dataset must document production-volume weighting and coverage of material routes; otherwise publish a product- or route-specific dataset. | production ledger and weighting calculation |
| `dq_recycled_origin` | Metallic charge | Supplier evidence must distinguish primary aluminium, pre-consumer scrap, post-consumer scrap and internal return, with mass and geographic source. | supplier declaration, purchase/charge record and scrap traceability; `iai-aluminium-scrap-2025` |
| `dq_temporal` | Foreground records | Use a representative 12-month period unless a campaign-specific dataset is declared; document shutdowns, abnormal production and inventory changes. | reporting-period completeness check |
| `dq_completeness` | All included operations | Reconcile production orders, meters, purchases, wastes, direct releases and outsourced steps; explain omitted flows and demonstrate they do not compromise the study goal. | signed reconciliation and omission register; `iso-14044-2006` |
| `dq_uuid_identity` | UUID-bearing references | Confirm each selected Tiangong flow without storing a dataset version; a narrower alloy-, coating- or gauge-specific candidate cannot replace the category reference flow. | Tiangong identity readback record retained outside PCR content |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require product flow `4f197be4-7b3b-11dd-ad8b-0800200c9a66`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, kg and exactly 1,000 kg net unpackaged product. | `unsd-cpc-3-0-41534` |
| `validate_thickness_scope` | Product scope | Reject any represented product with finished nominal thickness not greater than 0.2 mm and reject foil, extrusion, casting or fabricated-component outputs. | `unsd-cpc-3-0-41534` |
| `validate_required_qualifiers` | Dataset metadata | Reject a package missing alloy/temper, thickness, route, cast-stock source, annealing, surface treatment, primary/recycled shares, scrap-return route or delivery-state declarations; explicit not-applicable values require justification. | `iso-6361-1-2011`; `iso-2107-2023` |
| `validate_no_narrow_proxy` | Representativeness claim | Reject a category-average claim based only on one alloy, temper, coating, gauge, application or narrow Tiangong candidate unless the dataset is labelled product-specific and makes no category-average claim. | `iso-14044-2006` |
| `validate_route_sequence` | Process map | Require one declared cast-stock starting condition and the complete applicable sequence of hot rolling or continuous casting/rolling, cold rolling, heat treatment, surface treatment and finishing; exclude inapplicable steps explicitly. | `european-aluminium-epr-2024` |
| `validate_metal_balance` | Aluminium-bearing flows | Require a disclosed metal-balance equation, stock change and reconciliation difference; internal return scrap must not be double-counted as external input or net output. | `iai-aluminium-scrap-2025` |
| `validate_scrap_method` | Scrap and recycled content | Require separate internal, pre-consumer and post-consumer quantities and one consistently applied, disclosed cut-off, substitution or co-product approach for boundary-crossing process scrap. | `iai-aluminium-scrap-2025` |
| `validate_surface_mass` | Surface-treated products | Require treatment identity and retained coating/cladding mass; do not use a coated product dataset as an untreated or whole-category default. | `iso-6361-1-2011` |
| `validate_data_period` | Foreground data quality | Require declared geography, plants/lines, reference period, product-mix coverage, allocation drivers and evidence for outsourced operations. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground producer-gate dataset for a declared aluminium plate, sheet or strip product or a documented production-weighted product mix |
| downstream_use | Secondary dataset and background dataset for downstream process or lifecyclemodel construction when product identity, geography, period, route and allocation match the intended use |
| allowed_use | Product- or route-specific LCA; supplier data packages; battery, photovoltaic, transport or building models that consume the declared semi-finished product; documented production-weighted category mixes |
| excluded_use | Representing foil ≤ 0.2 mm, extrusions, castings or fabricated components; claiming one alloy/coating/application as the whole category; comparative assertions where product function or omitted life-cycle stages differ |
| required_metadata | PCR id; reference-flow UUIDs; alloy and composition specification; temper; thickness/tolerance; form/geometry; route and cast-stock source; annealing; surface treatment; primary/pre-/post-consumer shares; internal/exported scrap routes; delivery state; plant/geography; reference period; allocation and cut-off methods |
| required_quality_disclosure | Product-mix coverage; foreground record coverage; supplier-data coverage; metal-balance closure; meter/scale quality; temporal and geographic representativeness; proxies; outsourced steps; allocation sensitivity; unresolved identity gaps |
| update_trigger | Material change in alloy/product mix, cast-stock or primary/recycled sourcing, rolling route, annealing, coating, scrap treatment, energy supply, plant technology, allocation method, data period or reference-flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-41534` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 41534 explanatory notes and structure, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-09) | Product-category boundary, >0.2 mm threshold and distinction from foil and other aluminium forms |
| `iso-6361-1-2011` | Standard (`standard`) | ISO 6361-1:2011, Wrought aluminium and aluminium alloys — Sheets, strips and plates — Part 1: Technical conditions for inspection and delivery, https://www.iso.org/standard/51842.html (confirmed current in 2022; retrieved 2026-08-09) | Delivery-state identity, flat-rolled scope, inspection information and product-specific thickness/surface disclosure |
| `iso-2107-2023` | Standard (`standard`) | ISO 2107:2023, Aluminium and aluminium alloys — Wrought products — Temper designations, https://www.iso.org/standard/85023.html (retrieved 2026-08-09) | Mandatory temper and heat-treatment-state identification |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006 with Amendments 1:2017 and 2:2020, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (confirmed current in 2022; retrieved 2026-08-09) | System-boundary, inventory, allocation, data-quality and reporting framework |
| `european-aluminium-epr-2024` | Dataset (`dataset`) | European Aluminium, Environmental Profile Report 2024, https://european-aluminium.eu/wp-content/uploads/2025/07/Environmental-Profile-Report_2024-V20.pdf (retrieved 2026-08-09) | Aluminium value-chain decomposition; slab-to-sheet rolling boundary; primary, remelted wrought-alloy and semi-fabrication route separation; foreground process coverage |
| `iai-aluminium-scrap-2025` | Official guidance (`official_guidance`) | International Aluminium Institute, How to Treat Scrap Flows in Carbon Footprint Calculations for Aluminium Products, October 2025, https://international-aluminium.org/wp-content/uploads/2025/10/Carbon-Footprint-of-Recycled-Aluminium-IAI-Document-Final.pdf (retrieved 2026-08-09) | Internal versus process scrap definitions, recycled-content disclosure, dross treatment and consistent cut-off/substitution/co-product modelling |
