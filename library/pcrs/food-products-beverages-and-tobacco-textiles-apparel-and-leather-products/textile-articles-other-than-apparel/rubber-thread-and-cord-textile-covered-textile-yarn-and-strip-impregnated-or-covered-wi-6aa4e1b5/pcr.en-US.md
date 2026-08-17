---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.rubber-thread-and-cord-textile-covered-textile-yarn-and-strip-impregnated-or-covered-wi-6aa4e1b5
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rubber thread and cord, textile covered; textile yarn and strip, impregnated or covered with rubber or plastics

## 1. Scope and Applicability

This PCR applies to factory-gate production of CPC 27992 products made by either mechanically covering rubber thread or cord with textile yarn, or impregnating or covering textile yarn or strip with a rubber or plastic compound. The foreground boundary starts with receipt of the declared substrate, covering yarn or coating compound, process utilities, and packaging and ends with packaged saleable product at the producing factory gate.

The methodology covers route-specific covering, winding, impregnation or coating, drying or curing when used, inspection, off-spec handling, and packing. Upstream production of rubber, textile fibres and yarn, polymer compounds, electricity, fuels, water, and packaging remains represented by linked product-system datasets. The user must select the route that physically produced the declared product and must not combine the two routes into a synthetic average unless a documented production-weighted portfolio dataset is the stated study object.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.rubber-thread-and-cord-textile-covered-textile-yarn-and-strip-impregnated-or-covered-wi-6aa4e1b5` |
| classification_refs | CPC 3.0 `27992` |
| covered_products | Textile-covered rubber thread and cord; textile yarn and textile strip impregnated or covered with a declared rubber or plastic formulation. |
| excluded_products | Bare rubber thread or cord; untreated textile yarn or strip; rubberized textile fabrics; tyre cord fabric; metallized yarn; finished elastic fabrics, garments, and other downstream articles; products whose substrate or coating identity is not declared. |
| representative_product | A packaged saleable CPC 27992 thread, cord, yarn, or strip whose route, substrate, cover or coating composition, and physical specification are declared. |
| production_route | `textile_covering_and_packing` for mechanically textile-covered rubber thread or cord; `impregnation_coating_and_packing` for textile yarn or strip impregnated or covered with rubber or plastics. |
| market_state | Packaged saleable product at the producing factory gate, with moisture condition and packaging state declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Packaged saleable textile-covered rubber thread or cord, or rubber- or plastic-impregnated or covered textile yarn or strip, meeting the declared specification. |
| How much | 1 kg net product mass, excluding packaging. |
| How well | Conforming to the declared route, substrate, cover or coating formulation, dimensions or linear density, cover construction or dry coating pickup, moisture condition, and applicable test specification. |
| How long or cycle | One factory-gate production lot; no use-phase service is represented. |
| reference_flow_link | One exact CPC 27992 product output normalized to 1 kg net saleable product. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable product |
| Reference product flow | Rubber thread and cord, textile covered, textile yarn and strip, impregnated or covered with rubber or plastics `45e76d26-21e8-40f1-af58-1cc181d6832f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production route; substrate form and fibre family; rubber or plastic family and formulation identifier; textile-cover construction when applicable; linear density or gauge or dimensions; dry cover or coating mass fraction or pickup; product processing and test history; moisture condition; net and gross mass; packaging specification; production site and geography and time period |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, the reference flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1 kg net saleable product at the declared moisture condition; exclude packaging mass from the reference amount. |
| `material_mass` | substrates, covering yarns, compounds, packaging, and solid wastes | Mass | kg | Record measured received, consumed, output, and discarded mass by atomic material identity; convert dry and as-received values only with recorded moisture or solids fractions. |
| `electricity_energy` | purchased electricity | Energy | kWh | Use calibrated meter or invoice quantities for the reporting period and allocate only after route-specific metering or a documented causal driver is applied. |
| `fuel_energy` | natural gas used for drying or curing | Energy | MJ | Record delivered fuel and lower or higher heating value basis; do not mix bases within the dataset. |
| `process_water_volume` | process water | Water volume | m3 | Record water crossing the site process boundary and reconcile intake, evaporation, product carryover, discharge, and recovered water. |
| `air_emission_mass` | ammonia or toluene released to air | Mass | kg | Report only a measured or method-calculated release for the named substance and receiving compartment; absence of formulation relevance must be recorded as not applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received bare rubber thread or cord plus covering yarn for the covering route, or received textile yarn or strip plus a declared rubber or plastic coating compound for the coating route; utilities and packaging are separately received product inputs. |
| starting_condition_role | The received substrate and formulation define the gate-to-gate foreground starting condition and must not be silently replaced by raw latex, polymer resin, fibre, or monomer production. |
| product_classification_scope | CPC 3.0 `27992` only. |
| recursive_input_rule | If an input is itself a CPC 27992 product, record it as a separate upstream product input with its own declared route and avoid re-expanding it inside this foreground process. |
| upstream_dataset_requirement | Link each received material, utility, fuel, water, and packaging input to a geographically and technologically appropriate upstream dataset outside the foreground boundary. |
| disclosure | Declare route, site, reporting period, substrate condition, formulation identifier, coating solids or cover fraction, moisture basis, packaging state, exclusions, and any shared-equipment allocation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground production | Include all route-specific operations from receipt of declared substrates and auxiliaries through covering or coating, drying or curing when used, inspection, winding, off-spec handling, and packing to factory-gate product. | `eu-textiles-bat-2022`; `usitc-rubber-thread-1992` |
| `boundary_upstream_links` | purchased inputs | Exclude upstream production from the foreground process but require a linked dataset for every material, utility, fuel, water, and packaging input. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `boundary_route_gate` | route selection | Include only the route that physically produced the declared product; a portfolio average requires production-weighted foreground records and explicit disclosure. | `iso-14044-2006` |
| `boundary_packaging` | factory-gate product | Include the actual primary and distribution packaging consumed at the producing site while keeping packaging mass outside the 1 kg net-product reference amount. | `eu-pef-2021-2279` |
| `boundary_emissions_waste` | site releases and residues | Include route-specific offcuts, spent coating material, off-spec output, wastewater transfers, and measured relevant air releases; do not substitute a generic combined residue or emission. | `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `textile_covering_and_packing` | Textile covering and packing | `conditional` | Required when rubber thread or cord is mechanically covered with textile yarn. | Foreground route producing textile-covered rubber thread or cord. | 1 kg net saleable CPC 27992 output |
| `impregnation_coating_and_packing` | Impregnation, coating, drying or curing, and packing | `conditional` | Required when textile yarn or strip is impregnated or covered with a rubber or plastic compound. | Foreground route producing rubber- or plastic-treated textile yarn or strip. | 1 kg net saleable CPC 27992 output |

At least one process is required. A dataset for one physical product lot uses the applicable process only.

### Process: Textile covering and packing (`textile_covering_and_packing`)

#### Inputs

##### Product flows

###### Bare vulcanized rubber thread (`cover_bare_rubber_thread`)

Bare rubber thread crosses the foreground boundary as the elastic core to be mechanically covered. Its compound, gauge, moisture condition, and supplied mass are recorded from the production lot.

- Selected flow: Bare vulcanized rubber thread
- Flow property / unit: Mass / kg
- Amount rule: Record lot-specific consumed mass net of separately recorded returned or reusable core material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net textile-covered rubber thread or cord output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_covering_materials`
- Sources: `usitc-rubber-thread-1992`

###### Textile covering yarn (`cover_textile_yarn`)

The specific yarn wound around the rubber core is one atomic material input. Record fibre family, yarn construction, linear density, and mass actually consumed.

- Selected flow: Textile covering yarn
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass less measured reusable returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net textile-covered rubber thread or cord output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_covering_materials`
- Sources: `usitc-rubber-thread-1992`

###### Purchased electricity (`cover_electricity`)

Electricity used by covering, winding, inspection, and packing equipment is recorded separately from all thermal fuels.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use route-specific metering; otherwise allocate a reconciled meter total using recorded equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net textile-covered rubber thread or cord output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_covering_energy`
- Sources: `eu-textiles-bat-2022`

###### Corrugated board box (`cover_corrugated_board`)

The actual corrugated board shipping box consumed for the covered-thread product is recorded as a distinct packaging input.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: Record box count multiplied by verified unit mass, adjusted for opening and closing stocks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net textile-covered rubber thread or cord output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_covering_materials`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Textile-covered rubber thread or cord reference output (`covered_thread_reference_output`)

This is the route-specific saleable product output and the quantitative reference. The exact Tiangong identity was confirmed as Product flow, CPC 27992, Mass, and kg at state100.

- Selected flow: Rubber thread and cord, textile covered, textile yarn and strip, impregnated or covered with rubber or plastics `45e76d26-21e8-40f1-af58-1cc181d6832f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record net conforming product mass at the declared moisture condition and normalize it to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable textile-covered rubber thread or cord output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_covering_output_waste`
- Sources: `un-cpc-v3-27992`; `iso-20058-2017`; `iso-2321-2017`

##### Waste flows

###### Textile yarn offcuts (`cover_yarn_offcuts`)

Uncontaminated or contaminated covering-yarn offcuts leaving the process are measured separately and assigned the documented treatment destination.

- Selected flow: Textile yarn offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile lot-specific offcuts; deduct material returned directly to the same process without crossing the boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net textile-covered rubber thread or cord output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_covering_output_waste`
- Sources: `eu-textiles-bat-2022`

###### Textile-covered rubber thread offcuts (`cover_product_offcuts`)

Composite product offcuts and rejected covered thread are recorded separately from pure covering-yarn waste because their treatment options and composition differ.

- Selected flow: Textile-covered rubber thread offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weigh offcuts and rejects leaving the foreground process by treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net textile-covered rubber thread or cord output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_covering_output_waste`
- Sources: `usitc-rubber-thread-1992`

##### Elementary flows

### Process: Impregnation, coating, drying or curing, and packing (`impregnation_coating_and_packing`)

#### Inputs

##### Product flows

###### Uncoated textile yarn (`coat_textile_yarn`)

This substrate is recorded only when the treated product is yarn. Fibre family, yarn construction, linear density, moisture condition, and supplied mass must be declared.

- Selected flow: Uncoated textile yarn
- Flow property / unit: Mass / kg
- Amount rule: Record lot-specific consumed mass net of measured reusable returns; mark not applicable when textile strip is the substrate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net treated textile yarn or strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `eu-textiles-bat-2022`

###### Uncoated textile strip (`coat_textile_strip`)

This substrate is recorded only when the treated product is textile strip. Fibre family, construction, width, thickness, moisture condition, and supplied mass must be declared.

- Selected flow: Uncoated textile strip
- Flow property / unit: Mass / kg
- Amount rule: Record lot-specific consumed mass net of measured reusable returns; mark not applicable when textile yarn is the substrate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net treated textile yarn or strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `eu-textiles-bat-2022`

###### Natural rubber latex compound (`coat_natural_rubber_latex`)

A specific natural-rubber latex compound is recorded when it is the applied rubber formulation. Report formulation identifier, dry solids, water, stabilizers, and other declared components without treating the compound as an unspecified chemical collection.

- Selected flow: Natural rubber latex compound
- Flow property / unit: Mass / kg
- Amount rule: Record as-received lot mass and dry-solids fraction from batch and formulation records; mark not applicable for a plastic-only product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net rubber-impregnated or covered textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `eu-textiles-bat-2022`; `usitc-rubber-thread-1992`

###### Polyvinyl chloride coating compound (`coat_pvc_compound`)

A specific PVC compound is recorded when PVC is the applied plastic formulation. Report resin grade, plasticizer and additive package, solids, and supply condition; another polymer requires its own atomic flow in the produced dataset.

- Selected flow: Polyvinyl chloride coating compound
- Flow property / unit: Mass / kg
- Amount rule: Record as-received lot mass and solids fraction from formulation and issue records; mark not applicable when PVC is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net PVC-covered textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `eu-textiles-bat-2022`

###### Process water (`coat_process_water`)

Water added to the coating liquor or used in route-specific washing is recorded as one site input and reconciled through the water balance.

- Selected flow: Process water
- Flow property / unit: Water volume / m3
- Amount rule: Record metered or batch-volume input attributable to the coating route, net of internally recovered water that never crosses the process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net treated textile yarn or strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_utilities`
- Sources: `eu-textiles-bat-2022`

###### Purchased electricity (`coat_electricity`)

Electricity used by mixing, impregnation or coating, ventilation, winding, inspection, and packing is measured independently from fuel.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use route-specific metering; otherwise allocate a reconciled meter total using recorded equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net treated textile yarn or strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_utilities`
- Sources: `eu-textiles-bat-2022`

###### Natural gas for drying or curing (`coat_natural_gas`)

Natural gas supplied to route-specific thermal equipment is recorded when used for drying or curing and is not combined with electricity or another fuel.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record delivered volume and heating value or direct energy-meter reading for the coating route; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net treated textile yarn or strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_utilities`
- Sources: `eu-textiles-bat-2022`

###### Corrugated board box (`coat_corrugated_board`)

The actual corrugated board shipping box consumed for the treated-yarn or strip product is recorded as a distinct packaging input.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: Record box count multiplied by verified unit mass, adjusted for opening and closing stocks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net treated textile yarn or strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rubber- or plastic-treated textile yarn or strip reference output (`coated_yarn_strip_reference_output`)

This is the route-specific saleable product output and the quantitative reference. The exact Tiangong identity was confirmed as Product flow, CPC 27992, Mass, and kg at state100.

- Selected flow: Rubber thread and cord, textile covered, textile yarn and strip, impregnated or covered with rubber or plastics `45e76d26-21e8-40f1-af58-1cc181d6832f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record net conforming product mass at the declared moisture condition and normalize it to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable rubber- or plastic-treated textile yarn or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_output_waste`
- Sources: `un-cpc-v3-27992`; `eu-textiles-bat-2022`; `iso-2060-1994`

##### Waste flows

###### Spent natural rubber coating liquor (`spent_natural_rubber_coating_liquor`)

Unused or discarded natural-rubber coating liquor is a formulation-specific waste and is kept separate from plastic paste and wastewater.

- Selected flow: Spent natural rubber coating liquor
- Flow property / unit: Mass / kg
- Amount rule: Weigh or calculate from verified container mass and solids records by treatment destination; mark not applicable when natural-rubber liquor is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net rubber-treated textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_output_waste`
- Sources: `eu-textiles-bat-2022`

###### Spent PVC coating paste (`spent_pvc_coating_paste`)

Unused or discarded PVC paste is a formulation-specific waste and is kept separate from rubber liquor and wastewater.

- Selected flow: Spent PVC coating paste
- Flow property / unit: Mass / kg
- Amount rule: Weigh or calculate from verified container mass and solids records by treatment destination; mark not applicable when PVC paste is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net PVC-covered textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_output_waste`
- Sources: `eu-textiles-bat-2022`

###### Off-spec rubber-coated yarn (`offspec_rubber_coated_yarn`)

Off-spec rubber-coated yarn leaving the foreground process is recorded separately from spent liquid formulation.

- Selected flow: Off-spec rubber-coated yarn
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected rubber-coated yarn by treatment destination; mark not applicable for plastic-only production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net rubber-treated textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_output_waste`
- Sources: `eu-textiles-bat-2022`

###### Off-spec plastic-covered textile strip (`offspec_plastic_covered_strip`)

Off-spec plastic-covered textile strip leaving the foreground process is recorded separately from spent coating paste.

- Selected flow: Off-spec plastic-covered textile strip
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected plastic-covered strip by treatment destination; mark not applicable for rubber-only production or yarn products.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net plastic-covered textile strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_output_waste`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Ammonia released to air (`ammonia_to_air`)

Ammonia is recorded only when the declared latex formulation or process record establishes ammonia use and a measured or approved calculation establishes a release to air.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Use site emission measurement or a documented substance balance for the named air compartment; mark not applicable when ammonia is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net treated textile yarn or strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_output_waste`
- Sources: `eu-textiles-bat-2022`

###### Toluene released to air (`toluene_to_air`)

Toluene is recorded only when the declared coating formulation or solvent record establishes its use and a measured or approved calculation establishes a release to air.

- Selected flow: Toluene to air
- Flow property / unit: Mass / kg
- Amount rule: Use site emission measurement or a documented solvent balance for the named air compartment; mark not applicable when toluene is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net treated textile yarn or strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_output_waste`
- Sources: `eu-textiles-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | route-specific foreground operations | Prefer separate metering, batch records, and route-specific process subdivision so that allocation is avoided. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_shared` | shared covering, coating, drying, ventilation, inspection, or packing equipment | Allocate measured shared totals using a documented causal driver such as equipment operating time, metered energy, dry coating mass, or machine throughput; mass allocation is allowed only when no better physical driver exists. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_rework` | internal rework | Material reprocessed within the same reporting boundary is not a new product output; count its additional utility use and losses once and disclose the rework rate. | `iso-14044-2006` |
| `allocation_recycling` | offcuts and recovered coating material | Apply the study's declared recycling and end-of-waste convention consistently; do not give an avoided-burden credit without identifying the displaced product, substitution ratio, and supporting evidence. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_covering_materials` | `textile_covering_and_packing` | substrate, covering yarn, and corrugated box inputs | issue, return, purchase, stock, specification, and weigh records | material identity; lot; opening stock; receipts; issues; returns; closing stock; unit mass; fibre or compound specification | Reconcile each atomic material separately and retain specification and scale evidence. | kg | per lot with monthly reconciliation | same period as product output | producing site and route | Sum verified consumption by material identity, then divide by net conforming output mass. | calibrated scale records; stock reconciliation; supplier specification; lot traceability |
| `cp_covering_energy` | `textile_covering_and_packing` | electricity input | meter, invoice, equipment runtime, and rated-power records | meter start; meter end; invoice quantity; equipment id; power; runtime; route output | Use route submetering where available; otherwise reconcile the site meter and apply a documented causal equipment driver. | kWh | continuous or per shift with monthly reconciliation | same period as product output | producing site and route | Subtract documented non-route loads, allocate shared loads, and divide by net conforming output mass. | meter calibration; invoice; runtime log; allocation worksheet |
| `cp_covering_output_waste` | `textile_covering_and_packing` | product output and covering-route wastes | finished-goods, scale, rejection, waste-transfer, and treatment records | lot; gross mass; packaging mass; net mass; moisture; accepted mass; rejected mass; waste mass; destination | Reconcile accepted output and each waste stream by lot and destination. | kg | per lot | same period as material inputs | producing site and route | Sum net accepted product and separately sum each waste identity by destination. | calibrated scale; quality release; waste manifest; mass-balance worksheet |
| `cp_coating_materials` | `impregnation_coating_and_packing` | substrate, formulation, and corrugated box inputs | recipe, batch, issue, return, stock, purchase, specification, and weigh records | material identity; formulation id; lot; as-received mass; solids fraction; moisture; issues; returns; stock; unit mass | Reconcile each atomic substrate and compound separately; preserve formulation and solids evidence. | kg | per batch or lot with monthly reconciliation | same period as product output | producing site and route | Calculate verified consumption by identity and retain dry and as-received masses without mixing bases. | calibrated scale; recipe approval; safety or technical data sheet; stock reconciliation |
| `cp_coating_utilities` | `impregnation_coating_and_packing` | process water, electricity, and natural gas inputs | water meter, electricity meter, fuel meter, invoice, batch-volume, runtime, and heating-value records | meter readings; batch water; electricity; fuel volume; heating value; equipment id; runtime; recovered water | Meter each utility independently and reconcile it to the route and reporting period. | m3; kWh; MJ | continuous or per batch with monthly reconciliation | same period as product output | producing site and route | Apply route-specific meter totals or documented causal allocation; separately close the water balance. | meter calibration; invoice; batch sheet; heating-value certificate; water-balance worksheet |
| `cp_coating_output_waste` | `impregnation_coating_and_packing` | product output, formulation waste, off-spec product, and named air emissions | finished-goods, scale, batch, waste-transfer, analytical, stack-test, solvent-balance, and formulation records | net output; moisture; dry substrate; dry coating; waste identity; waste mass; destination; substance input; measured concentration; gas flow; operating time | Reconcile product and material losses, keep each waste stream separate, and quantify only substances demonstrated by the formulation and release method. | kg | per batch or lot; emissions at permit or method frequency | same period as inputs and output | producing site and route | Sum net accepted output; sum each waste by identity and destination; calculate each named emission using the approved measurement or balance method. | quality release; calibrated scale; waste manifest; laboratory or stack report; formulation record; mass-balance worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | Normalized exchange equals reporting-period exchange divided by net conforming product mass at the declared moisture condition. | exchange amount; net conforming product mass | exchange per 1 kg net product | `iso-14044-2006` |
| `calc_route_mass_balance` | each selected route | Mass-balance residual equals total material input minus net product output minus separately measured waste output minus measured material release; investigate and disclose the residual rather than forcing closure. | dry and as-received material inputs; product; wastes; measured releases; moisture and solids | route mass balance and residual | `eu-textiles-bat-2022` |
| `calc_coating_pickup` | impregnation or coating route | Dry coating pickup equals net dry treated-product mass minus net dry substrate mass; report pickup also as a fraction of net dry treated-product mass when the required measurements exist. | dry product mass; dry substrate mass | dry coating mass and mass fraction | `eu-textiles-bat-2022` |
| `calc_energy_normalization` | electricity and natural gas | Convert recorded utility quantities to the declared unit without combining electricity and fuel; fuel energy equals delivered amount multiplied by the documented heating value. | electricity meter; fuel delivery; heating value; output mass | kWh electricity per kg and MJ fuel per kg | `eu-textiles-bat-2022` |
| `calc_allocation` | shared foreground totals | Allocated amount equals reconciled shared total multiplied by the selected product's causal-driver quantity divided by the sum of the same driver for all products sharing the total. | shared total; product driver; total driver | allocated foreground amount | `iso-14044-2006`; `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and material inputs | Declare route, substrate form and fibre family, formulation identifier, cover construction or coating pickup, physical specification, and packaging state. | product specification; formulation or recipe; lot traveller; packaging bill of materials |
| `dq_temporal` | all foreground records | Use records from one coherent reporting period that captures representative operation and disclose shutdowns, trials, and abnormal batches. | reporting-period definition; production log; exception register |
| `dq_completeness` | all atomic exchanges | Reconcile meters, stocks, product, each waste stream, and relevant named releases; no combined material, utility, waste, or emission placeholder is allowed. | inventory checklist; meter and stock reconciliation; waste and emission register |
| `dq_mass_balance` | each selected route | Investigate material-balance residuals and explain moisture, volatile loss, sampling, stock, or measurement effects without inventing a balancing exchange. | signed mass-balance worksheet; measurement uncertainty record |
| `dq_chemicals` | coating route | Maintain a formulation-level chemical inventory with identity, quantity, function, solids or solvent content, and batch linkage. | approved recipe; safety and technical data sheets; batch issue records |
| `dq_tests` | saleable output | Record the applicable physical or mechanical specification and test history, including rubber-thread processing history where relevant and yarn linear-density method where relevant. | certificate of analysis; ISO 20058, ISO 2321, or ISO 2060 test record as applicable |
| `dq_uuid` | every implemented exchange | Resolve each implemented atomic exchange to one exact Tiangong flow identity with compatible type, property, and unit; unresolved candidate rows remain review findings and must not be assigned a near-neighbour UUID. | hybrid-search evidence; independent state100 direct-read evidence; review log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | dataset reference | Require the exact CPC 27992 Product flow UUID, Mass property UUID, kg reference unit, 1 kg net amount, and all required qualifiers. | `un-cpc-v3-27992`; `iso-14044-2006` |
| `validate_route` | process selection | Require at least one applicable route and reject a single-lot dataset that mixes covering and coating exchanges without a documented production-weighted portfolio definition. | `iso-14044-2006` |
| `validate_atomic_inventory` | inventory structure | Require one physically or chemically specific exchange per row and reject collection flows, selector instructions, combined utilities, combined wastes, and combined emissions. | `eu-pef-2021-2279` |
| `validate_mass_balance` | route material balance | Require input, product, waste, moisture or solids, and measured release reconciliation and a documented explanation of residuals. | `eu-textiles-bat-2022` |
| `validate_formulation` | coating route | Require the actual substrate and compound formulation, dry solids, coating pickup or cover fraction, and applicability decisions for every conditional material and substance. | `eu-textiles-bat-2022` |
| `validate_utilities` | electricity, fuel, and water | Require separate quantities, compatible units, meter or allocation evidence, heating-value basis for fuel, and a water balance where process water is used. | `eu-textiles-bat-2022` |
| `validate_emissions_waste` | wastes and releases | Require each waste identity and destination separately and report ammonia or toluene only when formulation relevance and a measured or approved calculation are documented. | `eu-textiles-bat-2022` |
| `validate_sources_protocols` | foreground evidence | Require every foreground-record row to link to a declared collection protocol and require every method claim to cite an allowed source. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `validate_uuid_evidence` | Tiangong identities | Reject unverified or semantically broader, narrower, or proxy UUIDs; report each unresolved row by row_id until hybrid and state100 direct evidence both confirm an exact identity. | `un-cpc-v3-27992` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-specific foreground data package for factory-gate production of a declared CPC 27992 product. |
| downstream_use | Construction and validation of LCA process and lifecycle-model datasets with linked upstream product systems. |
| allowed_use | Site- and period-specific product footprints, comparative work with equivalent reference-flow qualifiers and boundaries, and production improvement studies. |
| excluded_use | Generic substitution for bare rubber thread, untreated yarn, rubberized fabric, tyre cord fabric, finished elastic articles, or a product with undeclared formulation or route. |
| required_metadata | PCR id and version; CPC code; route; product and formulation qualifiers; site and geography; reporting period; technology; reference moisture; net and packaging mass; allocation method; linked upstream datasets; UUID evidence status. |
| required_quality_disclosure | Meter and scale coverage; stock reconciliation; formulation and solids evidence; route mass-balance residual; shared-equipment allocation; waste destinations; emission methods; test methods; unresolved UUIDs and exclusions. |
| update_trigger | Change in substrate, fibre family, formulation, cover construction, coating pickup, production route, thermal system, packaging, site, upstream supply, allocation driver, measurement method, or representative reporting period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-27992` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 27992, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact product-category identity and exclusions from neighbouring textile categories. |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 | Coating, drying and curing boundary; material, chemical, water, energy, waste, and air-emission foreground records; process monitoring and balances. |
| `usitc-rubber-thread-1992` | `official_guidance` | United States International Trade Commission, Extruded Rubber Thread from Malaysia, Publication 2559, 1992. https://www.usitc.gov/publications/701_731/pub2559.pdf | Rubber-thread processing sequence and the physical role of textile yarn covering around rubber thread. |
| `iso-20058-2017` | `standard` | ISO 20058:2017, General purpose rubber thread — Specification. https://www.iso.org/standard/66920.html | Rubber-thread product specification and applicability qualification. |
| `iso-2321-2017` | `standard` | ISO 2321:2017, Rubber threads — Methods of test. https://www.iso.org/standard/68003.html | Rubber-thread test methods and processing-history disclosure. |
| `iso-2060-1994` | `standard` | ISO 2060:1994, Textiles — Yarn from packages — Determination of linear density by the skein method. https://www.iso.org/standard/6837.html | Yarn linear-density measurement and product qualification. |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html | LCA boundary, allocation, data quality, calculation, and reporting method. |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng | Product environmental-footprint data quality, linked datasets, allocation, packaging, validation, and recycling disclosure. |
