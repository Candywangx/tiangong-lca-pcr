---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43922-43923-and-43933-weighing-machine-weights-parts-3e51a445
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclasses 43922, 43923 and 43933; weighing machine weights; parts of agricultural or horticultural mechanical appliances for projecting, dispersing or spraying liquids or powders

## 1. Scope and Applicability

This PCR governs gate-to-gate foreground data production for saleable parts of the machinery identified below and for weighing-machine weights. It covers a declared batch of one specified part number, or a mass-aggregated family only when all members share material composition, manufacturing route, quality specification, market state, production site, and reporting period. It applies to metal and polymer parts made by purchased-material preparation, forming, machining, joining, heat treatment, cleaning, surface finishing, inspection, and packaging, with each activity included only when it actually occurs.

Complete weighing machinery, complete fire extinguishers or spraying appliances, complete calendering or rolling machines, agricultural or horticultural spraying appliances themselves, metal-rolling-mill parts, unrelated machinery parts, repair services, capital equipment, distribution, use, and end-of-life are excluded. The official CPC identity establishes category scope but does not prescribe a material or manufacturing route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43922-43923-and-43933-weighing-machine-weights-parts-3e51a445 |
| classification_refs | CPC 3.0: 43943 (exact classification context; mapping acceptance remains separately governed) |
| covered_products | Parts for CPC 43922 weighing machinery; parts for CPC 43923 fire extinguishers, spray guns, blasting and similar projecting machinery; parts for CPC 43933 calendering or other rolling machines except machines for metals or glass; weighing-machine weights; and parts of agricultural or horticultural mechanical appliances for projecting, dispersing or spraying liquids or powders |
| excluded_products | Complete machinery or appliances; balances of sensitivity 5 cg or better; parts of metal- or glass-rolling machines; generic non-electrical machinery parts not demonstrably within this boundary; repair services; tooling and capital equipment |
| representative_product | One declared saleable machinery part or weighing-machine weight conforming to its drawing, bill of materials, and acceptance specification |
| production_route | Route-specific manufacture from declared purchased metal or polymer feedstock, including only the forming, machining, joining, heat-treatment, cleaning, coating, inspection, and packaging operations actually performed |
| market_state | Finished, inspected, saleable part at the manufacturing-site gate, with packaging included only when supplied with the product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished part or weighing-machine weight within the covered boundary and conforming to the declared drawing and acceptance specification |
| How much | 1,000 kg net mass of conforming saleable parts, excluding packaging mass |
| How well | Meets the declared part number, material grade or formulation, dimensional tolerances, surface condition, coating specification, inspection plan, and applicable legal or customer requirements |
| How long or cycle | One completed manufacturing batch represented over the declared reporting period; no use-life performance is claimed |
| reference_flow_link | Net conforming output from `component_manufacture`; packaging, rejects, and production scrap are separate exchanges |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Parts for the goods of subclasses 43922, 43923 and 43933, weighing machine weights, parts of agricultural or horticultural mechanical appliances for projecting, dispersing or spraying liquids or powders `2e29c602-77c9-4507-a7de-ccac1ff525b8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC-covered product subtype; part number or family rule; parent-machine application; material grade or polymer formulation; net product mass; drawing revision; manufacturing route; heat treatment; surface treatment or coating; quality specification and inspection status; included packaging; production site and geography; technology; reporting period; recycled-content claim basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net conforming product mass after final inspection and before packaging; exclude packaging, rejects, retained samples, work in progress, and reusable transport fixtures. |
| `batch_normalization` | all inventory rows | Row-specific property | row reference unit per 1,000 kg | Normalize only records for the same site, route, product family, and reporting period by multiplying the recorded exchange by 1,000 and dividing by net conforming product mass in kg. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered energy basis; convert kWh using 1 kWh = 3.6 MJ, and disclose grid, voltage, geography, losses, and on-site generation. |
| `gas_volume_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State metering reference temperature and pressure and use one consistent reference condition; do not mix standard, normal, and actual cubic metres without documented conversion. |
| `mass_balance` | material inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile purchased material with conforming product, co-products, scrap, waste, emissions, stock change, and documented measurement loss. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased feedstocks, chemicals, gases, energy, water, and packaging are received at the manufacturing-site gate with supplier product state and upstream dataset declared |
| starting_condition_role | Upstream cutoff between supplier production and foreground part manufacture |
| product_classification_scope | The foreground output must be demonstrably within the covered semantic boundary; CPC 43943 is classification context rather than canonical identity |
| recursive_input_rule | A purchased component within this PCR is one upstream product input with its own supplier dataset; do not recursively reproduce its manufacture inside the same foreground process |
| upstream_dataset_requirement | Link each purchased input to a geographically and technologically representative upstream dataset and disclose proxies |
| disclosure | Declare site, route, product subtype, family rule, material and recycled content, included and excluded operations, surface treatment, packaging boundary, allocation, reporting period, and upstream proxies |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground system | Include receipt and internal handling of purchased inputs, all on-site operations needed for conforming parts, on-site utilities and treatment, direct emissions, production waste, inspection, and supplied packaging through the outbound site gate. | `eu-pef-method-2021` |
| `boundary_route_disclosure` | route-specific operations | Include forming, machining, joining, heat treatment, aqueous or solvent cleaning, coating, and finishing only when performed; record outsourced processing as an upstream product or service dataset. | `eu-jrc-sf-bref-2024`, `eu-jrc-stm-bref-2006`, `eu-jrc-sts-bref-2020` |
| `boundary_exclusions` | excluded life-cycle stages | Exclude capital goods, employee commuting, downstream distribution, installation, maintenance, use, and end-of-life unless the study explicitly expands and reports them separately. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture` | Route-specific component manufacture, finishing, inspection, and packaging | required | Always include; disclose actual operations and add one atomic row for every other actual exchange | Foreground production | 1,000 kg net conforming saleable part output |

### Process: Route-specific component manufacture, finishing, inspection, and packaging (`component_manufacture`)

#### Inputs

##### Product flows

###### Non-alloy steel bar feedstock (`non_alloy_steel_bars`)

Record only when this exact material state appears in the bill of materials; other steel grades or forms require separate rows.

- Selected flow: Non-alloy steel bars `b904bee3-489f-4ee7-88b9-2a9a06d62113`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Supplier receipts plus opening stock minus closing stock consumed by the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_packaging_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Primary aluminium-alloy sheet feedstock (`primary_aluminium_alloy_sheet`)

Record only when this exact purchased state is used; do not merge strip, ingot, secondary alloy, or other aluminium forms.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Supplier receipts plus opening stock minus closing stock consumed by the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_packaging_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Cast-iron feedstock (`cast_iron_feedstock`)

Record only for routes that purchase cast iron; the UUID is unresolved because the exact-name candidate has a conflicting classification.

- Selected flow: Cast-iron feedstock
- Flow property / unit: Mass / kg
- Amount rule: Supplier receipts plus opening stock minus closing stock consumed by the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_packaging_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Polypropylene granulate (`polypropylene_granulate`)

Record only for polypropylene moulding routes; other polymers and recycled formulations require separate rows.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Supplier receipts plus opening stock minus closing stock consumed by the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_packaging_records`
- Sources:

###### Electricity (`electricity`)

Include all purchased electricity used by production equipment, ventilation, compressed-air generation, process cooling, cleaning, coating, inspection, and packaging.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Dedicated meter reading or documented causal allocation from a reconciled site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_gas_records`
- Sources:

###### Gaseous natural gas (`natural_gas`)

Include only when natural gas is combusted on site for melting, heating, heat treatment, coating cure, or another declared operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered volume attributable to the batch at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_gas_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Industrial oxygen (`industrial_oxygen`)

Include only when purchased oxygen is consumed in thermal cutting, melting, or another declared operation.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Supplier or flow-meter volume attributable to the batch with pressure, purity, temperature, and supply boundary disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_gas_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Carbon-dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Include only when carbon dioxide is purchased for welding; do not use this row for combustion emissions.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Cylinder inventory balance or mass-flow record attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_gas_records`
- Sources:

###### Process water (`process_water`)

Include only water consumed or incorporated in machining, cooling, aqueous cleaning, rinsing, or surface treatment; separately disclose recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Make-up water meter or tank balance, excluding internally recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide (`sodium_hydroxide`)

Include only when consumed in aqueous cleaning or surface treatment; report supplied solution mass and concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Supplier issue record for supplied product attributable to the batch, with concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Cutting fluid (`cutting_fluid`)

Include fresh cutting fluid added to machining systems; disclose formulation, dilution water, recirculation, and stock change.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fresh concentrate issued plus opening stock minus closing stock attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Powder coating (`powder_coating`)

Include only powder coating applied to the declared parts; report fresh input net of documented recovery to stock.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fresh powder issued plus opening stock minus closing stock and recovered powder returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-sts-bref-2020`

###### Corrugated-cardboard packaging (`corrugated_cardboard`)

Include only corrugated cardboard supplied with the saleable product; exclude reusable packaging unless its allocated loss is recorded.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Supplied item count multiplied by verified item mass, or direct packaging issue mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_packaging_records`
- Sources:

###### Polyethylene packaging film (`polyethylene_packaging_film`)

Include only polyethylene film supplied with the product. The UUID is unresolved because the exact-name candidate has a conflicting classification.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Supplied item count or length multiplied by verified unit mass, or direct issue mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming saleable reference product (`reference_product_output`)

Record only inspected saleable parts within the boundary; rejects and rework-in-progress are excluded.

- Selected flow: Parts for the goods of subclasses 43922, 43923 and 43933, weighing machine weights, parts of agricultural or horticultural mechanical appliances for projecting, dispersing or spraying liquids or powders `2e29c602-77c9-4507-a7de-ccac1ff525b8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Set to 1,000 kg after normalization from measured net conforming batch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_waste_emission_records`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Include steel offcuts, chips, and rejected steel parts leaving as scrap; separately record other metal and polymer wastes.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed outgoing scrap plus closing scrap stock minus opening scrap stock attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_emission_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Cleaning wastewater (`cleaning_wastewater`)

Include only wastewater discharged or sent to treatment from aqueous cleaning or surface treatment; disclose composition, treatment, and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Discharge meter, tank transfer mass, or verified volume-to-mass conversion attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_emission_records`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air_emission`)

Include direct fossil carbon dioxide from on-site fuel combustion; exclude upstream electricity emissions and purchased shielding-gas input.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Direct measurement or calculation from metered fossil fuel using a documented carbon-content method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_waste_emission_records`
- Sources:

###### PM10 to air (`pm10_air_emission`)

Include measured or permitted PM10 from grinding, blasting, thermal cutting, or coating only when present. The UUID remains unresolved until the site release compartment is verified.

- Selected flow: particles (PM10), emission to air
- Flow property / unit: Mass / kg
- Amount rule: Site-specific measurement or documented calculation from control-device records and a verified emission method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming saleable part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_emission_records`
- Sources: `eu-jrc-sf-bref-2024`, `eu-jrc-sts-bref-2020`
+
## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared operations and utilities | Avoid allocation by collecting product-line or batch-specific records and subdividing shared operations wherever technically feasible. | `eu-pef-method-2021` |
| `allocation_physical` | unavoidable shared inputs, wastes, and emissions | When subdivision is infeasible, use a documented causal physical driver such as machine hours, metered energy, processed mass, bath loading, or coating area; demonstrate why it represents the exchange and keep one method throughout the period. | `eu-pef-method-2021` |
| `allocation_other` | cases without a defensible physical relationship | Use another relationship, including economic allocation, only after documenting why subdivision and physical allocation are infeasible; report the factor, period, products, sensitivity, and share. Do not credit scrap or recycling without a separately declared method. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_packaging_records` | `component_manufacture` | material and supplied packaging by row_id | invoice, receipt, issue, stock count, bill of materials, item-mass test | identity, grade or formulation, supplier, quantity, unit, lot, opening and closing stock, batch, packaging count, item mass | Reconcile receipts, issues, returns, and stocks; weigh representative packaging when converting count to mass | kg | each batch; monthly reconciliation | output reporting period | all included lines at the site | Sum batch-attributable consumption by atomic flow and normalize | calibrated scale, supplier specification, stock reconciliation, bill-of-material revision |
| `cp_energy_gas_records` | `component_manufacture` | electricity and each gas by row_id | meter, invoice, cylinder balance, runtime | meter readings, invoice quantity, unit, reference conditions, purity, cylinder stock, line, batch, allocation driver | Prefer dedicated meters; otherwise allocate a reconciled site total using a causal physical driver | MJ, m3, or kg by row | meter interval or cylinder change; monthly aggregation | output reporting period | included equipment and utilities | Sum net purchases, adjust stock or exports, allocate, and normalize | calibration, invoice reconciliation, reference-condition record, allocation worksheet |
| `cp_water_chemical_records` | `component_manufacture` | process water and each chemical by row_id | meter, tank balance, issue, stock count, formulation | fresh input, concentration, dilution water, recovered amount, opening and closing stock, batch, line | Record fresh material crossing the boundary and separately track internal recirculation and recovery to stock | kg | each batch; monthly reconciliation | output reporting period | included wet, machining, and coating operations | Net fresh input equals receipts or issues plus opening stock minus closing stock and returns; normalize | calibration, concentration certificate, bath log, inventory reconciliation |
| `cp_output_waste_emission_records` | `component_manufacture` | product, each waste, and each direct emission by row_id | production mass, inspection, waste manifest, meter, stack test, fuel record | output and reject mass, waste mass, stock change, discharge, contaminant, treatment, fuel carbon data, PM10 result, compartment | Weigh outputs and wastes, meter discharges, and use direct emissions measurement where available | kg | each batch, discharge, or required test | output reporting period | all included release points and destinations | Reconcile stocks, calculate emissions from collected inputs where needed, and normalize | calibration, inspection release, waste manifest, laboratory or stack report, calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory amount | normalized amount = batch-attributable exchange × 1,000 / net conforming product mass | collected exchange; net conforming product mass | row amount per 1,000 kg reference product | |
| `calc_electricity_conversion` | electricity recorded in kWh | electricity MJ = purchased kWh × 3.6 | purchased kWh | purchased MJ | |
| `calc_packaging_mass` | count- or length-based packaging | packaging mass = verified unit mass × count, or verified linear mass × length | count or length; verified mass factor | kg packaging supplied | |
| `calc_fossil_co2` | fossil combustion without direct CO2 measurement | Use collected fuel, verified carbon content or an approved fuel-specific factor, oxidation basis, and documented unit conversions; identify the method and factor source in the dataset | fuel quantity; carbon content or factor; oxidation basis | kg fossil CO2 | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and every exchange | Retain family rule, drawing revision, parent-machine application, material or formulation, supplier or destination, resolved Tiangong identity, and proxy rationale. | release record, bill of materials, supplier specification, manifest, UUID audit |
| `dq_route` | boundary and process map | Identify every actual operation, outsourced operation, and atomic exchange not prelisted here. | route sheet, process flow, work instructions, supplier service records |
| `dq_measurement` | quantities | Use calibrated meters and scales where available; document estimation, conversion, allocation, reference conditions, concentration, stock change, and uncertainty. | calibration, meter log, laboratory result, calculation worksheet |
| `dq_temporal` | reporting period | Use a continuous representative period and disclose shutdowns, startup lots, abnormal rejects, rework, and capacity utilization. | dated production, meter, stock, inspection, and waste records |
| `dq_completeness` | inventory | Reconcile material and output mass and explain gaps; add each actual material, energy, chemical, gas, waste, wastewater, and elementary emission as a separate row. | mass-balance worksheet and completeness checklist |
| `dq_ranges` | important flows | Until two independent boundary-compatible original sources support an external range, use foreground collection without a numerical default and flag comparisons for review. | unresolved range-evidence register and foreground records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Fail if output is outside the covered boundary, the reference UUID differs, or required product, material, route, quality, geography, technology, or period qualifiers are missing. | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference flow | Require exactly 1,000 kg net conforming product after normalization; exclude packaging, rejects, scrap, and work in progress. | |
| `validate_inventory_atomicity` | process inventory | Fail any combined or umbrella Selected flow; require one direction, flow type, property, unit, amount method, and applicability condition per exchange. | |
| `validate_uuid_semantics` | UUID-bearing rows | Require UUID, English and official Chinese names, flow type, classification, property, unit group, and product state to match; unresolved rows remain UUID-empty with documented reasons. | |
| `validate_energy_gas` | electricity and gases | Require electricity conversion and gas reference conditions, purity or composition, supply boundary, geography, and allocation. | |
| `validate_mass_balance` | material and output records | Require a mass balance and explanation for measurement loss, stock change, scrap, waste, emissions, and unreconciled difference. | |
| `validate_allocation` | shared processes | Require allocation hierarchy, driver, factor, period, products, and sensitivity; reject undocumented allocation or double credit for scrap. | `eu-pef-method-2021` |
| `validate_ranges` | numerical external ranges | Reject an inferred range unless at least two independent original sources have compatible boundaries, functional unit, and product state and the synthesis explains geographic and technological differences. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review and publication |
| downstream_use | Foreground process modelling of the declared covered part or weighing-machine weight and compatible lifecycle-model aggregation |
| allowed_use | Declared product subtype, material, route, quality, geography, technology, packaging boundary, and period, or a documented representative average of compatible records |
| excluded_use | Complete machinery, unrelated parts, different materials or routes without adjustment, use, maintenance, distribution, end-of-life, or materially different geography or technology |
| required_metadata | PCR id and version when published; reference UUID; subtype; family rule; parent application; material and recycled content; net mass; drawing and specification; route; site; geography; technology; period; operations; packaging; upstream datasets and proxies; allocation |
| required_quality_disclosure | Primary-data share; meter and scale coverage; representativeness; mass balance; allocation shares; missing or estimated exchanges; unresolved UUIDs; emission methods; upstream proxies; uncertainty and review status |
| update_trigger | Change in family, material, recycled content, supplier, route, heat or surface treatment, packaging, site, energy, emission control, allocation, upstream dataset, or material shift in yield, scrap, water, energy, or emissions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official category identity, parent subclasses, coverage, and exclusions |
| `eu-jrc-sf-bref-2024` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Smitheries and Foundries Industry BREF official page, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry (retrieved 2026-09-06) | Conditional forming, machining, finishing, heat treatment, casting, and material-management decomposition |
| `eu-jrc-stm-bref-2006` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Surface Treatment of Metals and Plastics BREF official page, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-06) | Conditional aqueous electrolytic or chemical surface treatment |
| `eu-jrc-sts-bref-2020` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Surface Treatment Using Organic Solvents BREF official page, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation (retrieved 2026-09-06) | Conditional coating, painting, cleaning, and degreasing |
| `eu-pef-method-2021` | Standard (`standard`) | Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, consolidated 30 December 2021, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 (retrieved 2026-09-06) | Functional unit, boundary, company-specific data, quality, and multifunctionality hierarchy |
