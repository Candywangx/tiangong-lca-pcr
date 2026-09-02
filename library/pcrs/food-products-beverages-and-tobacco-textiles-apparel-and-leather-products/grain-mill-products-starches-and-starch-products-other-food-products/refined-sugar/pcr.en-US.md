---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-sugar
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Refined sugar

## 1. Scope and Applicability

This PCR applies to foreground data packages for refined sucrose products manufactured from sugar cane or sugar beet feedstocks and delivered at the declared refinery or factory gate. It covers unflavoured and uncoloured refined crystalline sugar forms, including white granulated sugar, soft white sugar, refined brown sugar, powdered refined sucrose, and equivalent bulk or packaged grades when their product specification is declared.

The PCR covers route-specific feedstock preparation, extraction or melting, purification and decolourisation where used, evaporation, crystallisation, centrifugal separation, drying or conditioning, bulk handling, and packaging when packaging is included at the declared gate. On-site wastewater treatment is included when operated by the reporting facility; otherwise the wastewater flow and the receiving treatment service shall be reported.

Raw cane or beet sugar sold without further refining, molasses sold as the principal product, glucose and fructose products, sugar syrups, maple products, confectionery, and refined sugar containing added flavouring or colouring are excluded. Agricultural cultivation, inbound transport, distribution, retail, use, and end-of-life are outside the foreground gate-to-gate inventory unless the declared study scope explicitly adds them with separate upstream or downstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-sugar |
| classification_refs | CPC 3.0:23520 (exact; Refined sugar) |
| covered_products | Unflavoured and uncoloured refined sucrose from cane or beet, including white granulated, soft white, refined brown, powdered, lump, cube, and equivalent bulk or packaged refined grades |
| excluded_products | Raw cane or beet sugar without further refining; molasses as principal product; glucose, fructose, lactose, syrups, maple products, confectionery; refined sugar with added flavouring or colouring |
| representative_product | Soft white sugar as the UUID-backed representative refined sugar flow; each data package shall declare the actual refined sugar subtype and specification |
| production_route | Cane raw-sugar refinery route or integrated beet-sugar route, with the declared starting feedstock and all included refining stages identified |
| market_state | Dry or conditioned refined sucrose at the refinery/factory gate, bulk or packaged as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Refined sucrose providing a declared food-ingredient sweetening product at the refinery or factory gate |
| How much | 1,000 kg net refined sugar, excluding packaging |
| How well | Conforming to the declared refined sugar subtype and applicable product specification; for the UUID-backed soft white representative, declare sucrose plus invert sugar content, moisture or loss on drying, colour, and additives |
| How long or cycle | One production campaign represented by the reporting period; no use-duration function is assigned to this intermediate food product |
| reference_flow_link | `crystallization_finishing.refined_sugar_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net refined sugar at the declared gate |
| Reference product flow | Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | refined sugar subtype; cane, beet, or mixed origin; production route; starting feedstock state; sucrose or polarisation specification; moisture or loss on drying; colour grade; additive status; packaging inclusion; plant gate; geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. Codex CXS 212-1999 supplies the product-description and quality context; local legal or customer specifications may be stricter and shall then be identified.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference refined sugar | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg net sugar product; exclude packaging mass and separately report packaging inputs. |
| `product_quality_basis` | reference refined sugar quality | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether composition is as-received or dry basis and retain the test method, sampling date, and lot or campaign represented. |
| `utility_conversion` | electricity and thermal-energy inputs | Energy property of the selected utility flow | kWh for electricity; MJ for fuels, heat, and steam | Preserve metered units and conversion factors; do not convert steam, fuel, and electricity into a single undifferentiated energy flow. |
| `water_accounting` | water inputs, reused water, condensate, and wastewater | Volume or mass property of the selected flow | m3 or kg | Report withdrawals, purchased water, internal reuse, condensate recovery, and discharge separately; internal recirculation shall not be counted as a new technosphere input. |
| `co_product_mass` | molasses, beet pulp, filter cake, and other co-products or residues | Mass property of the selected flow | kg | Measure each output on a consistent wet or dry basis and declare moisture content when it affects mass balance or allocation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sugar beet at factory receipt, raw cane/beet sugar at refinery receipt, or a traceable intermediate sugar liquor entering the first included foreground operation |
| starting_condition_role | Upstream hand-off into the foreground refined-sugar manufacturing system |
| product_classification_scope | Refined sucrose products within the reviewed semantic scope of this PCR, independent of any one classification code |
| recursive_input_rule | A same-category refined sugar input shall be recorded as an upstream product input with its own dataset and shall not be expanded recursively inside the current foreground process. |
| upstream_dataset_requirement | Every excluded upstream stage shall be represented by a compatible dataset for the declared feedstock, origin, technology, geography, and hand-off condition. |
| disclosure | Declare starting feedstock, included and excluded stages, cut-offs, internal recycling loops, utility boundary, packaging boundary, wastewater destination, geography, and reporting period. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground manufacturing | Include all refining operations between the declared starting condition and the declared plant gate, including utilities, process aids, co-products, wastes, wastewater, and direct emissions. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `boundary_02` | process completeness | Maintain a process flow sheet and inventories of raw materials, water, energy, wastewater, and waste-gas streams so their origins and receiving treatment steps are traceable. | `eu-fdm-bat-2019-2031` |
| `boundary_03` | upstream and downstream links | Use separate compatible datasets for excluded feedstock production, transport, distribution, use, and end-of-life stages; do not imply that their burdens are zero. | `eu-pef-2021-2279` |
| `boundary_04` | packaging | Include primary, secondary, and tertiary packaging only when it is supplied with the reference product at the declared gate; otherwise state the exclusion. | `eu-pef-2021-2279` |
| `boundary_05` | cut-offs | Report any excluded material or energy flow and justify it; known environmentally relevant inputs, co-products, emissions, and wastes shall not be omitted merely because they are difficult to measure. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | Feedstock preparation and extraction or melting | conditional | Required when beet or raw sugar receipt occurs inside the foreground boundary | Prepare a traceable sugar liquor for purification | kg prepared sugar liquor |
| `purification_concentration` | Purification, decolourisation, filtration, and concentration | required | Always required; route-specific operations may be absent only when demonstrated by the declared incoming intermediate | Remove non-sugar material and concentrate sugar liquor | kg concentrated sugar liquor |
| `crystallization_finishing` | Crystallisation, separation, drying, conditioning, and handling | required | Always required | Produce refined sugar and separate co-products | 1,000 kg net refined sugar |
| `packaging` | Packaging | conditional | Required when packaging is supplied at the declared product gate | Package the finished sugar and record packaging losses | 1,000 kg net refined sugar packaged |
| `wastewater_treatment` | On-site wastewater treatment | conditional | Required when wastewater is treated on site; otherwise record transfer to external treatment | Treat effluent and report residual emissions and sludge | m3 wastewater treated |

### Process: Feedstock preparation and extraction or melting (`feedstock_preparation`)

#### Inputs

##### Product flows

###### Route-specific sugar feedstock (`sugar_feedstock`)

Record sugar beets, raw cane or beet sugar, or another declared intermediate entering the first foreground operation. The input identity and amount shall be supported by receipt and inventory records.

- Selected flow: Route-specific sugar feedstock; select a Tiangong product flow matching the declared state and origin
- Flow property / unit: Mass / kg
- Amount rule: measured net feedstock received and consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Preparation water (`preparation_water`)

Record externally supplied water used for beet washing and extraction or raw-sugar melting, net of internal recirculation.

- Selected flow: Process water matching the actual supply source
- Flow property / unit: Volume / m3
- Amount rule: metered or balance-derived external water supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Replaceable provisional preparation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3
  - Basis: per 1,000 kg net refined sugar output; route-dependent and not a conformance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for preparation (`preparation_electricity`)

Record metered electricity used by receiving, conveying, washing, slicing, extraction, melting, and associated pumps within this process.

- Selected flow: Electricity supply matching plant voltage and geography
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered consumption or allocated plant meter balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Replaceable provisional electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg net refined sugar output; route-dependent and not a default value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared sugar liquor (`prepared_sugar_liquor`)

Record the route-specific liquor passed to purification, together with solids or sucrose concentration and measurement basis.

- Selected flow: Prepared sugar liquor matching the actual intermediate state
- Flow property / unit: Mass / kg
- Amount rule: measured transfer or calculated tank mass from volume and density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_liquor`
- Sources:

###### Beet pulp or recoverable preparation residue (`preparation_coproduct`)

Record a separately used beet pulp or other marketed residue as a co-product; classify material without a product use as waste instead.

- Selected flow: Route-specific pulp or recoverable residue
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with dry-matter or moisture disclosure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Preparation rejects and wash solids (`preparation_rejects`)

Record stones, soil, screenings, off-specification feedstock, and other wastes leaving preparation.

- Selected flow: Route-specific preparation waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment or container mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Elementary flows

### Process: Purification, decolourisation, filtration, and concentration (`purification_concentration`)

#### Inputs

##### Product flows

###### Prepared sugar liquor input (`prepared_liquor_input`)

Record the prepared liquor transferred from the route-specific preparation process without double counting internal transfers as external inputs.

- Selected flow: Prepared sugar liquor matching `prepared_sugar_liquor`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer or calculated tank mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_liquor`
- Sources:

###### Purification and decolourisation aids (`purification_aids`)

Record lime, carbon dioxide, acids, alkalis, adsorbents, filter aids, ion-exchange regenerants, and other aids actually consumed, each as a separate exchange in the produced dataset.

- Selected flow: Chemical-specific product flow matching the purchased material
- Flow property / unit: Mass / kg
- Amount rule: stock change plus receipts minus closing stock, corrected for transfers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Purification and evaporation energy (`purification_energy`)

Record electricity, fuels, heat, and steam as separate flows. Preserve the metered form and account for any on-site combined heat and power system consistently.

- Selected flow: Utility-specific product flows matching geography and technology
- Flow property / unit: Energy / kWh for electricity and MJ for fuels, heat, or steam
- Amount rule: metered consumption or documented energy balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Replaceable provisional combined thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: GJ
  - Basis: per 1,000 kg net refined sugar output; technology-dependent and not a conformance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Concentrated purified sugar liquor (`concentrated_liquor`)

Record the concentrated liquor sent to crystallisation, including mass, dry matter or soluble solids, sucrose concentration, and transfer period.

- Selected flow: Concentrated purified sugar liquor matching the route
- Flow property / unit: Mass / kg
- Amount rule: measured transfer or calculated tank mass from volume, density, and concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_liquor`
- Sources:

###### Recovered condensate (`recovered_condensate`)

Record condensate exported as a useful product; internal reuse remains an internal loop documented in the water balance.

- Selected flow: Recovered process condensate
- Flow property / unit: Volume / m3
- Amount rule: metered condensate exported from the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Filter cake, spent adsorbent, and purification residue (`purification_residue`)

Record each residue separately and distinguish marketed co-products from waste sent to recovery, treatment, or disposal.

- Selected flow: Residue-specific waste or product flow according to actual destination
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with moisture or dry-matter disclosure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Elementary flows

### Process: Crystallisation, separation, drying, conditioning, and handling (`crystallization_finishing`)

#### Inputs

##### Product flows

###### Concentrated sugar liquor input (`concentrated_liquor_input`)

Record the concentrated liquor transferred into crystallisation and reconcile it with the output from purification and concentration.

- Selected flow: Concentrated purified sugar liquor matching `concentrated_liquor`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer or calculated tank mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_liquor`
- Sources:

###### Crystallisation and finishing energy (`finishing_energy`)

Record electricity, fuels, heat, and steam for crystallisation, centrifugation, drying, cooling, conditioning, and bulk handling as separate utility flows.

- Selected flow: Utility-specific product flows matching geography and technology
- Flow property / unit: Energy / kWh for electricity and MJ for fuels, heat, or steam
- Amount rule: metered consumption or documented energy balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined sugar output (`refined_sugar_output`)

Record conforming refined sugar at the declared gate. The actual product subtype shall be declared even when the representative Tiangong flow is used.

- Selected flow: Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1,000 kg net refined sugar
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net refined sugar at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-212-1999`

###### Molasses co-product (`molasses_coproduct`)

Record final molasses or other mother-liquor co-product when it leaves the foreground system for a beneficial use.

- Selected flow: Molasses product flow matching cane or beet origin and state
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass with dry-matter or moisture disclosure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:
- Range: Replaceable provisional molasses screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 800
  - Unit: kg
  - Basis: per 1,000 kg net refined sugar output; route-dependent and not an allocation factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Off-specification sugar and captured dust (`offspec_sugar_waste`)

Record material that leaves the product system as waste; internally reworked sugar remains an internal loop and shall not be double counted.

- Selected flow: Sugar-containing production waste matching the actual destination
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment or container mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Elementary flows

###### Channelled particulate emissions (`sugar_particulate_air`)

Record measured or calculated particulate matter released after abatement from drying, cooling, conveying, and handling; do not report captured dust as an elementary emission.

- Selected flow: Particulate-matter elementary flow matching the reported size fraction
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by dry-gas flow and operating time, or a documented site emission inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Packaging (`packaging`)

#### Inputs

##### Product flows

###### Packaging materials (`packaging_materials`)

Record each primary, secondary, and tertiary packaging material supplied with the product, including reusable packaging and pallet accounting where applicable.

- Selected flow: Material-specific packaging product flow
- Flow property / unit: Mass / kg or item count with measured mass conversion
- Amount rule: packaging bill of materials minus documented reusable returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Packaging losses (`packaging_losses`)

Record damaged bags, films, cartons, pallets, and other packaging wastes generated before the plant gate.

- Selected flow: Material-specific packaging waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment or stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Elementary flows

### Process: On-site wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment utilities and chemicals (`wastewater_treatment_inputs`)

Record electricity, aeration energy, chemicals, and externally supplied treatment materials used by the on-site system as separate product flows.

- Selected flow: Utility- and chemical-specific product flows
- Flow property / unit: Energy or mass property / flow-specific unit
- Amount rule: metered consumption and stock records attributable to refinery wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Refinery wastewater received for treatment (`wastewater_received`)

Record the wastewater volume and relevant pollutant loads entering on-site or external treatment.

- Selected flow: Sugar-refinery wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge to treatment, reconciled with the site water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Replaceable provisional wastewater-volume screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3
  - Basis: per 1,000 kg net refined sugar output; route-dependent and not a discharge limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge (`treatment_sludge`)

Record sludge and separated solids sent to recovery, treatment, or disposal, with dry-matter content and destination.

- Selected flow: Wastewater-treatment sludge matching actual classification
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with dry-matter disclosure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources:

##### Elementary flows

###### Treated effluent emissions to water (`treated_effluent`)

Record discharged water and relevant pollutant loads, including COD or TOC, total nitrogen, total phosphorus, and suspended solids when applicable to the permit and site inventory.

- Selected flow: Substance-specific elementary flows to water
- Flow property / unit: Mass / kg pollutant; water volume / m3 reported separately
- Amount rule: measured concentration multiplied by discharge volume over the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net refined sugar output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-fdm-bat-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | multi-output operations | Avoid allocation first by subdivision or by separately metering independently operated preparation, purification, crystallisation, energy, and treatment processes. | `eu-pef-2021-2279` |
| `allocation_02` | physically coupled co-products | When subdivision is not possible, use a demonstrated underlying physical relationship only if it represents how changes in the process drive the co-product outputs; document the relationship and factors. | `eu-pef-2021-2279` |
| `allocation_03` | remaining multi-functionality | If no defensible physical relationship exists, apply an explicitly documented other relationship, normally economic allocation based on representative prices, and report a sensitivity case for material co-products. | `eu-pef-2021-2279` |
| `allocation_04` | molasses, beet pulp, filter cake, and recoverable residues | Classify an output as a co-product only when it has a documented beneficial use and leaves the product system; otherwise model it as waste with its treatment burden. | `eu-pef-2021-2279` |
| `allocation_05` | internal loops | Do not allocate burdens to internally recirculated liquor, sugar, water, condensate, or steam; close the internal balance and count only external inputs and outputs. | `eu-fdm-bat-2019-2031` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `feedstock_preparation`; `purification_concentration` | feedstock and process-aid inputs | weighbridge, invoice, stock ledger, batch sheet | date; material id; supplier; gross mass; tare; net mass; opening stock; receipts; closing stock; moisture if relevant | calibrated scale plus stock reconciliation | kg | each receipt and monthly reconciliation | complete reporting period | all included lines and warehouses | sum net consumed mass, then normalize by conforming refined sugar output | scale calibration; invoice and stock reconciliation; missing-record log |
| `cp_water_balance` | all included processes | water withdrawal, purchase, reuse, condensate, wastewater, discharge | water-meter and water-balance record | meter id; timestamp; source or destination; volume; meter status; estimated downtime | calibrated meters plus documented balance for unmetered branches | m3 | daily or campaign total, monthly reconciliation | complete reporting period | all included water nodes | external input and discharge totals minus documented internal recirculation | meter calibration; closure residual; downtime estimate record |
| `cp_energy_records` | all included processes | electricity, fuels, heat, and steam | meter, invoice, and energy-balance record | meter id; timestamp; energy carrier; quantity; unit; supplier; lower or higher heating value basis; CHP export | sub-meter, invoice, or documented plant energy balance | kWh; MJ; kg or m3 fuel with conversion factor | continuous or invoice period; monthly reconciliation | complete reporting period | all included production and utility systems | preserve carriers separately and normalize each to refined sugar output | meter calibration; invoices; conversion-factor source; energy-balance closure |
| `cp_intermediate_liquor` | `feedstock_preparation`; `purification_concentration`; `crystallization_finishing` | prepared and concentrated liquor transfers | inter-process transfer and laboratory record | tank id; batch; mass or volume; density; temperature; dry matter or soluble solids; sucrose concentration | calibrated tank or flow measurement plus laboratory test | kg; m3; % | each batch or continuous total | complete reporting period | every transfer between included stages | convert volume to mass with matched density and reconcile stage transfers | instrument calibration; laboratory method; batch linkage; balance residual |
| `cp_output_mass` | all included processes | refined sugar, co-products, residues, and wastes | dispatch, scale, and waste record | product or waste id; destination; gross mass; tare; net mass; moisture or dry matter; disposition | calibrated scale, dispatch record, and waste manifest | kg | each batch or shipment | complete reporting period | all included output points | sum by product identity and destination; normalize to refined sugar output | scale calibration; dispatch or waste documentation; moisture test |
| `cp_direct_emissions` | `crystallization_finishing`; `wastewater_treatment` | air and water emissions | monitoring and emissions-calculation record | source id; sample time; concentration; gas or water flow; operating hours; method; detection limit; abatement status | direct monitoring or permit-compliant calculation | kg pollutant; mg/Nm3; mg/L; m3 | permit frequency and campaign coverage | representative operating conditions across the reporting period | every relevant discharge point | concentration times measured flow and time, with non-detect handling disclosed | accredited test report; flow-meter calibration; permit record; calculation sheet |
| `cp_packaging_records` | `packaging` | packaging materials and losses | packaging bill-of-materials and reconciliation record | packaging code; material; item count; unit mass; purchased mass; returned units; waste mass | bill of materials, purchase records, item weighing, and waste reconciliation | kg; item | each packaging specification and monthly total | complete reporting period | all packaging supplied with the declared product | item count times verified unit mass, adjusted for returns and losses | specification; sample-weigh record; purchase and waste reconciliation |
| `cp_treatment_records` | `wastewater_treatment` | treatment inputs, sludge, and operating data | treatment operations and waste record | treatment train; utility or chemical id; quantity; sludge mass; moisture; uptime; bypass | meters, dosing logs, laboratory records, and waste manifests | flow-specific | daily or batch, monthly reconciliation | complete reporting period | on-site treatment serving included operations | sum attributable inputs and outputs; disclose shared-treatment allocation | meter and dosing calibration; laboratory QA; bypass and maintenance log |
| `cp_product_quality` | `crystallization_finishing` | refined sugar specification | laboratory and product-release record | lot; subtype; polarisation or sucrose result; invert sugar; moisture or loss on drying; colour; ash; additives; test method | representative laboratory sampling and product release records | test-specific | each lot or statistically justified composite | all product represented by the dataset | all finished-product sampling and release points | production-weighted result and pass/fail by declared specification | laboratory method; calibration; sample plan; release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | reference product | Net refined sugar mass = gross dispatch mass - tare and packaging mass; exclude non-conforming or reworked stock not leaving the declared gate. | gross mass; tare; packaging mass; product disposition | kg conforming refined sugar | `codex-cxs-212-1999` |
| `calc_specific_inventory` | every external inventory flow | Specific amount = reporting-period flow amount / reporting-period net conforming refined sugar mass x 1,000 kg. | collected flow amount; net refined sugar output | flow amount per 1,000 kg refined sugar | `eu-pef-2021-2279` |
| `calc_liquor_mass` | intermediate liquor | Liquor mass = measured volume x density at the matched temperature; retain measured concentration and sampling basis. | volume; density; temperature; concentration | kg intermediate liquor and composition fields |  |
| `calc_emission_load` | direct emissions | Emission load = measured concentration x measured dry-gas or wastewater volume, with unit conversion and operating coverage documented. | concentration; flow; time or total volume; non-detect rule | kg pollutant per reporting period | `eu-fdm-bat-2019-2031` |
| `calc_mass_balance` | each process and full foreground system | Reconcile external and inter-process mass inputs with products, co-products, wastes, emissions, inventory change, and explained water removal or addition; investigate material residuals. | all mass-bearing inputs and outputs; stocks; moisture and solids data | mass-balance residual and explanation |  |
| `calc_allocation_factor` | multi-output process | Derive allocation factors only after applying the hierarchy in Section 7; factors across all co-products shall sum to 1 within rounding tolerance and the data period shall match the inventory. | subdivided records or physical/economic allocation driver | documented allocation factor by output | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all material inputs/outputs | Preserve product subtype, origin, route, starting condition, specification, Tiangong UUID where selected, and gate identity. | product specification; supplier and dispatch records; UUID lookup record outside PCR content |
| `dq_temporal` | foreground inventory | Use one complete and representative reporting period; cover seasonal campaigns, start-up, shutdown, and abnormal periods or disclose exclusions. | production calendar; meter and batch coverage; exclusion log |
| `dq_technology` | foreground inventory | Describe extraction or melting, purification, decolourisation, evaporation, crystallisation, drying, energy system, dust control, and wastewater treatment technologies actually used. | process flow sheet; equipment list; operating records |
| `dq_geography` | utilities and upstream links | Use datasets representative of the plant, feedstock origin, electricity grid, fuels, water source, treatment destination, and transport geography. | supplier origin; plant location; utility contracts; dataset metadata |
| `dq_completeness` | all known inputs and outputs | Include all known raw materials, water, energy, products, co-products, emissions, and wastes; disclose and justify any cut-off. | material, water, and energy balances; emission inventory; cut-off log |
| `dq_precision` | measured and calculated values | Retain calibration, sampling, laboratory, density, moisture, conversion, and uncertainty evidence sufficient to reproduce each normalized value. | calibration certificates; laboratory QA; calculation sheets; uncertainty record |
| `dq_consistency` | bilingual and multi-process dataset | Apply consistent wet/dry basis, net/gross mass, reporting period, allocation method, and internal-transfer treatment across processes. | cross-process reconciliation; reviewer checklist; bilingual rule-id check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | PCR identity | The canonical PCR id, CPC reference, covered products, exclusions, and declared product subtype shall be present and mutually consistent. |  |
| `validation_02` | reference flow | The reference output shall equal 1,000 kg net refined sugar, use the selected product-flow, Mass, and Units-of-mass UUIDs without dataset versions, and declare all required qualifiers. | `codex-cxs-212-1999` |
| `validation_03` | product quality | Product release evidence shall demonstrate conformance with the declared subtype specification; values and test basis for purity or polarisation, moisture, colour, and additives shall be disclosed as applicable. | `codex-cxs-212-1999` |
| `validation_04` | boundary completeness | Every included process in the process map shall have matching inventory records, and excluded upstream or downstream stages shall have explicit dataset links or scope disclosures. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validation_05` | material, water, and energy balance | Process and site balances shall reconcile internal transfers and external flows; unexplained residuals, unmetered estimates, and internal recirculation shall be reported and reviewed. | `eu-fdm-bat-2019-2031` |
| `validation_06` | multi-functionality | Co-product classification and allocation shall follow the Section 7 hierarchy, factors shall sum to 1 within rounding tolerance, and material alternative methods shall be tested. | `eu-pef-2021-2279` |
| `validation_07` | emissions and waste | Wastewater, channelled air emissions, captured residues, sludge, off-specification sugar, and their destinations shall not be omitted or double counted. | `eu-fdm-bat-2019-2031` |
| `validation_08` | provisional ranges | Every `reasoned_estimate` range shall remain labelled replaceable and shall not override collected site data or be presented as a regulatory, BAT, or conformance limit. |  |
| `validation_09` | data quality | Temporal, technological, geographical, completeness, and precision evidence shall be retained for company-specific activity data and direct elementary flows. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground refined-sugar production data package at the declared factory or refinery gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product carbon footprint and LCA models requiring route-, geography-, specification-, and gate-matched refined-sugar manufacturing data |
| excluded_use | Unqualified substitution for raw sugar, syrups, glucose or fructose, flavoured or coloured sugar, confectionery, another route or geography, or a cradle-to-grave result without linked stages |
| required_metadata | PCR id; product subtype and specification; cane/beet origin; starting condition; route; included stages; plant gate; geography; reporting period; technology; utility mix; packaging scope; co-product treatment; allocation method; cut-offs; UUIDs |
| required_quality_disclosure | Data coverage; measured versus calculated shares; calibration and sampling evidence; material, water, and energy balance residuals; missing data; provisional ranges used; allocation sensitivity; source and dataset representativeness |
| update_trigger | Material change in feedstock origin or state, product specification, process route, energy or water system, abatement or treatment, packaging, allocation basis, plant geography, or reporting period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-212-1999` | standard | FAO/WHO Codex Alimentarius, CXS 212-1999, Standard for Sugars, amended through 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+212-1999%2FCXS_212e.pdf (retrieved 2026-08-10) | Product boundary, refined sugar subtype descriptions, composition and quality qualifiers, and analysis context |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission, Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019D2031 (retrieved 2026-08-10) | Sugar-manufacturing process and environmental-inventory scope; water, energy, wastewater, waste-gas, monitoring, and treatment records |
| `eu-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-10) | Functional unit and reference flow, system boundary, company-specific inventory completeness, data quality, cut-offs, packaging, and multi-functionality hierarchy |
