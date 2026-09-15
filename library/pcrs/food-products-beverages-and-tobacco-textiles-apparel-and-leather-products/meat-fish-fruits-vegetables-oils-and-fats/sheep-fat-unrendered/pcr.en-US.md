---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sheep-fat-unrendered
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sheep fat, unrendered

## 1. Scope and Applicability

This PCR covers actual fatty tissue or fat raw material recovered from sheep after slaughter and/or cutting and transferred without rendering or refining. The represented material may be uncooled, chilled, or frozen, but the concrete foreground data package shall identify the anatomical tissue origin, slaughter or cutting route, edible or other declared disposition, physical state, temperature condition, packaging form, and dispatch handover point. Inherent moisture, connective tissue, and adhering lean tissue remain part of the measured product mass as delivered unless physically removed and separately recorded.

The default foreground ends when the declared lot of unrendered sheep fat is loaded or otherwise transferred to the next operator at the dispatch handover. It includes joint slaughter/cutting recovery where that operation is in the represented facility, fat separation and trimming, conditional washing, chilling or freezing, storage, packaging, and on-site handling. If slaughter or cutting is outside the foreground, a verified upstream sheep, carcass, or cut dataset shall carry those burdens and the associated joint-product allocation.

Rendering, fat melting, extraction, refining, fractionation, hydrogenation, interesterification, formulation, and conversion into tallow or another rendered fat are excluded. Rendered fats in CPC 21521-21529 are not interchangeable with this category. CXS 211-1999 is cited only to document that named edible tallow involving sheep is obtained by rendering; none of its composition or quality values is transferred to unrendered sheep fat.

No sheep-fat-specific default yield, energy intensity, water use, packaging ratio, cold-store duration, loss factor, or allocation share is prescribed. Foreground records are required. One provisional reasoned-estimate mass-input range is provided only as a broad QA screen and must not be used as a default yield.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sheep-fat-unrendered |
| classification_refs | CPC 3.0: 21514, Sheep fat, unrendered (exact classification reference) |
| covered_products | Actual fatty tissue or fat raw material from sheep, separated after slaughter and/or cutting, dispatched without rendering; uncooled, chilled, or frozen state when declared |
| excluded_products | Rendered or melted sheep fat; tallow and other rendered fats under CPC 21521-21529; refined, fractionated, hydrogenated, interesterified, formulated, or extracted fats; fat from cattle, buffalo, goats, pigs, poultry, fish, or other species; mixed-species fat without sheep-only mass segregation; oils from bone, marrow, or feet; hides and wool |
| representative_product | One dispatch lot of physically segregated, unrendered sheep fatty tissue after required trimming and conditioning |
| production_route | Recovery during sheep slaughter/dressing or cutting; separation and trimming; conditional washing; conditional chilling/freezing and storage; conditional packaging; dispatch handover; no rendering or refining |
| market_state | Bulk or packaged actual tissue/raw fat; uncooled, chilled, or frozen as declared; edible suitability or other disposition explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of actual sheep fatty tissue or fat raw material, recovered after slaughter and/or cutting and not rendered or refined, at the declared dispatch handover |
| How much | 1 kg net mass of the represented unrendered sheep fat as delivered, excluding reusable transport equipment and separately declared packaging tare |
| How well | Sheep-only identity and actual tissue state are preserved; slaughter/cutting route, anatomical tissue origin, disposition, unrendered state, temperature state, packaging, and handover are declared; rendered fat and other species are excluded |
| How long or cycle | One dispatch lot at the handover point; storage duration and cold-chain history up to handover are declared; no use duration is implied |
| reference_flow_link | rf_sheep_fat_unrendered |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sheep-only species identity; actual anatomical tissue origin or source cut; slaughterhouse recovery or cutting route; edible suitability or other disposition; unrendered/no-refining confirmation; declared physical temperature state (uncooled versus chilled versus frozen); product temperature specification and measured handover temperature where controlled; inherent tissue/moisture convention; packaging form and tare treatment; facility and geography; production period and lot; dispatch handover point; ownership of transport before and after handover |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product at dispatch handover | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass from a calibrated scale or verified gross-minus-tare records. Include actual tissue, inherent moisture, connective tissue, and adhering lean as delivered; exclude separately declared packaging tare and reusable transport equipment. |
| `lot_state_mass_alignment` | Input, intermediate, co-product, waste, and reference-product mass records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use masses from the same represented lot or a documented allocation period. Record whether each mass is measured before or after trimming, washing, chilling/freezing, drainage, and packaging so mass changes are not hidden. |
| `temperature_state_declaration` | Uncooled, chilled, or frozen product and storage records | Temperature and time, with mass normalization to kg | Site-recorded temperature unit and h or day | Record the written temperature specification, measured handover temperature where temperature is controlled, conditioning start/end times, storage duration, and excursions. Do not impose a generic temperature threshold from this PCR. |
| `packaging_tare` | Packaged reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or verify packaging tare separately and do not count it in the 1 kg reference product. Allocate packaging actually consumed to the represented lot. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Either sheep entering a represented slaughter/dressing joint process, or a documented sheep carcass/cut entering a separate cutting facility; the selected route and receipt condition shall be declared |
| starting_condition_role | Upstream product input to a joint slaughter/cutting system from which unrendered sheep fat is recovered |
| product_classification_scope | Sheep-only unrendered fatty tissue or raw fat corresponding to CPC 3.0 code 21514; no rendered fat and no other animal species |
| recursive_input_rule | Purchased unrendered sheep fat of the same category that is consolidated, re-trimmed, conditioned, or repacked remains a technosphere product input with its own upstream dataset; it shall not be assigned zero burden or silently merged into foreground recovery |
| upstream_dataset_requirement | A slaughter route requires an upstream sheep-production and live-animal transport dataset through the declared slaughter input; a cutting route requires an upstream carcass/cut dataset that includes sheep production, transport, slaughter, and prior joint-product allocation. Avoid gaps and double counting between the upstream dataset and this foreground |
| disclosure | Declare route, facility, geography, period, lot, anatomical tissue origin, edible/other disposition, actual tissue convention, state before and after conditioning, cold-storage duration, packaging, inbound and outbound handovers, and whether downstream transport starts before or after the reference-flow handover |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_sheep_unrendered_only` | Product identity and every represented lot | Include only segregated actual sheep fatty tissue/raw fat that has not undergone rendering or refining. Exclude and separately model rendered tallow or other products in CPC 21521-21529. | unsd-cpc-3-0-21514; codex-cxs-211-1999 |
| `boundary_slaughter_cutting_trace` | Slaughter, dressing, cutting, separation, and trimming | Identify the operation where fat becomes a separately measured output and retain post-mortem disposition and species traceability through trimming and packaging. | codex-cxc-58-2005 |
| `boundary_cold_chain` | Chilling, freezing, cold storage, and temperature-controlled handling | Include actual conditioning energy, refrigerant make-up or measured loss, storage duration, and product losses when these operations occur before handover; retain temperature records and excursions without importing a generic threshold. | codex-cxc-58-2005; eu-2019-2031-fdm-bat |
| `boundary_packaging_and_handover` | Packaging, loading, and transport interface | Include packaging and on-site handling consumed before the declared handover. Exclude transport after handover by default; if delivery to a customer gate is claimed, add route-specific transport and move the reference handover accordingly. | codex-cxc-58-2005; eu-2021-2279-pef |
| `boundary_recursive_input` | Purchased unrendered sheep fat used as an input | Link the purchased material to a verified upstream dataset and report only the incremental consolidation, trimming, conditioning, packaging, and losses in the current foreground. | eu-2021-2279-pef |
| `boundary_resource_emission_inventory` | Represented food-processing operations where the FDM BAT scope is relevant | Collect process-level water, energy, raw-material, residue, wastewater, and direct-emission records for inventory completeness. Apply this as a data-collection completeness rule only when relevant; do not import legal capacity thresholds, emission limits, or performance levels into this PCR. | eu-2019-2031-fdm-bat |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `joint_recovery` | Joint slaughter/dressing or cutting recovery | required | Represent the actual joint operation where sheep fat tissue becomes a separately identified output; if outside the foreground, represent it in the required upstream dataset | Establish sheep-only identity, joint-product point, gross fat recovery, and co-product/waste disposition | Measured gross sheep fat output and all joint outputs over the same lot or allocation period |
| `fat_trimming` | Separation, trimming, and conditional washing | required | Always represent final separation/trimming; include washing only when performed | Produce saleable unrendered sheep fat while preserving tissue-state and loss records | Net unrendered sheep fat output before cold conditioning/packaging |
| `cold_conditioning` | Chilling, freezing, and storage | conditional | Include when active cooling, freezing, controlled-temperature storage, or refrigerant use occurs before handover | Establish declared market temperature state and record cold-chain resources and losses | Conditioned unrendered sheep fat output and storage duration |
| `packaging_dispatch` | Packaging, on-site handling, and dispatch handover | required | Packaging may be zero for bulk transfer, but tare treatment and the handover shall always be recorded | Produce the reference flow at the declared ownership and transport handover | 1 kg net unrendered sheep fat at handover |
| `rendering_refining` | Rendering, melting, extraction, or refining | excluded_by_default | Never part of the default foreground for this PCR | Converts the material to a different rendered/refined product category | Not applicable |

### Process: Joint slaughter/dressing or cutting recovery (`joint_recovery`)

#### Inputs

##### Product flows

###### Route-specific sheep, carcass, or cut input (`route_sheep_input`)

Record the actual route-specific input that carries upstream sheep production, transport, and any earlier slaughter/cutting burdens. Do not substitute another ruminant or an aggregated mixed-species input.

- Selected flow: Sheep, sheep carcass, or sheep cut appropriate to the declared route; Tiangong UUID unresolved pending route-specific identity review
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass for the same lot or joint-production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured joint slaughter/cutting operation that produces the represented gross sheep fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joint_mass_and_identity`
- Sources: `codex-cxc-58-2005`

###### Water used in joint recovery (`joint_process_water`)

Record metered or allocated water used in slaughter/cutting recovery only when that operation is in the represented foreground.

- Selected flow: Process or potable water, site-specific candidate; Tiangong UUID unresolved
- Flow property / unit: Volume / m3 or Mass / kg with documented conversion
- Amount rule: Metered use, or allocation from a submetered facility total using a documented causal driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured joint-production period and normalized through the allocation rule
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-2019-2031-fdm-bat`

###### Energy used in joint recovery (`joint_process_energy`)

Record metered electricity and fuels for in-scope joint recovery operations; do not apply a sheep, cattle, or generic slaughter default.

- Selected flow: Site-specific electricity and fuel products; Tiangong UUIDs unresolved
- Flow property / unit: Energy / kWh or MJ, by carrier
- Amount rule: Metered use, or allocation from a submetered facility total using a documented causal driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured joint-production period and normalized through the allocation rule
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-2019-2031-fdm-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross sheep fatty tissue recovered for trimming (`gross_sheep_fat`)

Record the mass of sheep-only fatty tissue at the first separately measured recovery point, before final trimming and conditioning.

- Selected flow: Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- Flow property / unit: Mass / kg
- Amount rule: Measured gross recovered mass for the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured joint-production period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joint_mass_and_identity`
- Sources: `unsd-cpc-3-0-21514`; `codex-cxc-58-2005`

###### Other edible or usable joint outputs (`joint_co_products`)

Record all non-fat joint outputs that remain products or co-products, segregated by identity and disposition, so the joint allocation denominator is complete.

- Selected flow: Site-specific sheep meat, offal, hide, or other joint product candidates; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass by product identity for the same allocation period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured joint-production period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joint_mass_and_identity`
- Sources: `eu-2021-2279-pef`

##### Waste flows

###### Condemned or otherwise discarded tissue (`joint_rejected_tissue`)

Record tissue judged unsafe, unsuitable, or otherwise discarded as waste only when it crosses the waste boundary. If it is sold or transferred for a productive use, record it instead as a co-product with its actual disposition.

- Selected flow: Sheep tissue waste, disposition-specific candidate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed or container-count-derived rejected mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured joint-production period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joint_waste_and_disposition`
- Sources: `codex-cxc-58-2005`

###### Joint-process wastewater (`joint_wastewater`)

Record wastewater generated by in-scope joint recovery, with allocation and measured characteristics at the most specific practicable level.

- Selected flow: Wastewater, site-specific candidate; Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or documented water balance for the represented period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured joint-production period and normalized through the allocation rule
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-2019-2031-fdm-bat`

##### Elementary flows

### Process: Separation, trimming, and conditional washing (`fat_trimming`)

#### Inputs

##### Product flows

###### Gross sheep fatty tissue input (`gross_fat_input`)

Record the actual gross sheep fatty tissue entering final trimming. The QA range below is a provisional author reasoned estimate, not a default yield and not a value to use when measured data are absent.

- Selected flow: Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- Flow property / unit: Mass / kg
- Amount rule: Measured gross sheep fatty tissue input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net unrendered sheep fat output from trimming
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_mass_balance`
- Sources: `unsd-cpc-3-0-21514`
- Range: Provisional gross-fat-input mass-balance screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.00
  - Upper: 2.00
  - Unit: kg
  - Basis: Per 1 kg net unrendered sheep fat output from trimming; lower bound enforces conservation and the deliberately broad upper bound flags major trimming/downgrading for review without asserting a typical sheep-fat yield
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing water, when used (`trimming_wash_water`)

Record only water that actually crosses the trimming-process boundary; dry trimming has zero water input and shall be declared as such.

- Selected flow: Process or potable water, site-specific candidate; Tiangong UUID unresolved
- Flow property / unit: Volume / m3 or Mass / kg with documented conversion
- Amount rule: Metered or batch-recorded water used for the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg net unrendered sheep fat output from trimming
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_water_records`
- Sources: `codex-cxc-58-2005`; `eu-2019-2031-fdm-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net unrendered sheep fat after trimming (`trimmed_unrendered_fat`)

Record the actual tissue output before cold conditioning and packaging, preserving anatomical origin and edible/other disposition.

- Selected flow: Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- Flow property / unit: Mass / kg
- Amount rule: Measured net output after trimming and any declared drainage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per represented trimming lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_mass_balance`
- Sources: `unsd-cpc-3-0-21514`; `codex-cxc-58-2005`

##### Waste flows

###### Trim, downgraded tissue, and wash loss (`trimming_residuals`)

Record each residual by mass and actual disposition. Productive transfers are co-products, not waste; drain losses shall not be hidden in yield.

- Selected flow: Tissue residual or wastewater, disposition-specific candidate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg or Volume / m3, separately by flow
- Amount rule: Measured residual mass and wastewater volume for the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg net unrendered sheep fat output from trimming
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_mass_balance`
- Sources: `codex-cxc-58-2005`; `eu-2019-2031-fdm-bat`

##### Elementary flows

### Process: Chilling, freezing, and storage (`cold_conditioning`)

#### Inputs

##### Product flows

###### Unrendered sheep fat entering cold conditioning (`cold_stage_fat_input`)

Record the measured tissue mass and temperature state at the cold-stage entrance.

- Selected flow: Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- Flow property / unit: Mass / kg
- Amount rule: Measured lot mass entering conditioning/storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per represented cold-conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_records`
- Sources: `codex-cxc-58-2005`

###### Cold-stage electricity and fuels (`cold_stage_energy`)

Record actual energy for chilling, freezing, controlled-temperature storage, defrost, and in-scope cold-room auxiliaries. Do not borrow energy intensity from another animal species or facility.

- Selected flow: Site-specific electricity and fuel products; Tiangong UUIDs unresolved
- Flow property / unit: Energy / kWh or MJ, by carrier
- Amount rule: Submetered use or calculated share from metered equipment energy, operating time, load, and documented allocation driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg conditioned unrendered sheep fat output and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_energy_records`
- Sources: `codex-cxc-58-2005`; `eu-2019-2031-fdm-bat`

###### Refrigerant make-up (`cold_stage_refrigerant_makeup`)

Record refrigerant make-up attributable to in-scope equipment when a defensible facility allocation is available; otherwise disclose the data gap.

- Selected flow: Refrigerant by actual chemical identity; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Maintenance-record make-up mass allocated by equipment, operating period, and documented causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg conditioned unrendered sheep fat output over the represented period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned unrendered sheep fat (`conditioned_unrendered_fat`)

Record net mass, declared chilled/frozen state, handover specification, actual measured temperature where controlled, and storage time.

- Selected flow: Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- Flow property / unit: Mass / kg
- Amount rule: Measured net lot mass after conditioning and storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per represented cold-conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_records`
- Sources: `codex-cxc-58-2005`

##### Waste flows

###### Cold-stage product loss (`cold_stage_product_loss`)

Record purge, rejected tissue, damaged product, and other measured losses by actual disposition.

- Selected flow: Sheep-fat loss, disposition-specific candidate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Difference supported by weighed loss records; do not use an assumed shrink factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg conditioned unrendered sheep fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_records`

##### Elementary flows

###### Refrigerant released to air (`cold_stage_refrigerant_loss`)

When maintenance and charge records support a mass balance, record calculated release by actual refrigerant identity; otherwise report the check as inconclusive rather than assuming zero.

- Selected flow: Refrigerant emission to air by actual chemical identity; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance under `calc_refrigerant_loss`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg conditioned unrendered sheep fat output over the represented period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

### Process: Packaging, on-site handling, and dispatch handover (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Unrendered sheep fat entering dispatch preparation (`dispatch_fat_input`)

Record the net mass and state entering packaging or bulk dispatch preparation.

- Selected flow: Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- Flow property / unit: Mass / kg
- Amount rule: Measured lot mass before packaging/loading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per dispatch lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_records`

###### Packaging materials consumed (`dispatch_packaging`)

Record actual primary, secondary, and non-reusable transport packaging consumed before handover. For bulk transfer, record zero packaging and identify reusable equipment separately.

- Selected flow: Packaging material by actual material and format; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg or item count converted with verified item mass
- Amount rule: Purchase/issue records reconciled to the represented dispatch lots, net of reusable equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg net reference product at handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-2021-2279-pef`

###### On-site handling energy (`dispatch_energy`)

Record metered or equipment-record-based energy for in-scope packaging, internal movement, and loading before handover.

- Selected flow: Site-specific electricity or fuel product; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or calculated from equipment records and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg net reference product at handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_records`
- Sources: `eu-2019-2031-fdm-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference unrendered sheep fat at handover (`reference_unrendered_sheep_fat`)

This is the reference product after all in-scope operations and before downstream transport owned by the next operator.

- Selected flow: Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net product mass at the declared handover
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-21514`

##### Waste flows

###### Packaging and dispatch losses (`dispatch_waste`)

Record rejected product, damaged packaging, and other dispatch-stage waste separately by material and disposition.

- Selected flow: Product or packaging waste by actual material; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed or verified count-based mass for the represented dispatch lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg net reference product at handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_waste_and_disposition`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Joint slaughter/dressing, cutting, utilities, cold storage, and packaging | First subdivide and directly assign separately metered material, energy, packaging, waste, and emission flows to the process and product that cause them. Document meters, equipment boundaries, and allocation periods. | eu-2021-2279-pef |
| `allocation_joint_hierarchy` | Remaining multifunctional slaughter or cutting burdens | After subdivision, follow the PEF allocation hierarchy: avoid allocation through subdivision or other justified modelling where possible; where unavoidable, use a documented relevant physical causal relationship; if no defensible physical relationship exists, use another justified relationship such as economic value. Do not prescribe a sheep-fat allocation share in this PCR. | eu-2021-2279-pef |
| `allocation_complete_denominator` | Joint-product denominator | Include every saleable or otherwise productive joint output from the same lot or allocation period. Record measured masses, product identities, disposition, prices and price period when economic allocation is used, and reconcile the allocation factors to one. | eu-2021-2279-pef |
| `allocation_waste_and_credits` | Rejected tissue, wastewater, packaging waste, and productive residuals | Treat a flow as waste when the holder discards or is required to discard it. Do not award an avoided-product credit merely because a residual may have value; any substitution or recycling credit requires an explicitly documented downstream function and method consistent with the study goal. | eu-2021-2279-pef; codex-cxc-58-2005 |
| `allocation_no_cross_species_default` | All allocation factors | Do not import mass yields, price ratios, physical relationships, or allocation shares from cattle, buffalo, goats, other ruminants, or mixed-species operations as a sheep-fat default. Use represented sheep-route records or report the result as unresolved. | unsd-cpc-3-0-21514 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_joint_mass_and_identity` | `joint_recovery` | Route input, gross sheep fat, and all joint products | Scale tickets, production/lot records, species and disposition records | lot_id; species; route; input_identity; input_mass_kg; gross_fat_mass_kg; co_product_id; co_product_mass_kg; anatomical_origin; disposition; scale_id; timestamp | Calibrated weighing linked to lot and species-segregation records | kg | Each lot or production batch | All represented lots; allocation period disclosed | Every represented slaughter/cutting site | Sum by product and disposition over one consistent allocation period; retain lot-level linkage | Calibration/verification records; post-mortem disposition; species traceability; reconciliation report |
| `cp_trimming_mass_balance` | `fat_trimming` | Gross fat input, net output, trims, downgrade, and drainage | Batch sheets and scale records | lot_id; gross_input_kg; net_output_kg; trim_kg; downgraded_product_kg; waste_kg; drain_loss_kg; pre_post_state; scale_id | Calibrated weighing before and after trimming and any washing/drainage | kg | Each batch | All represented batches | Every trimming site | Reconcile input to net output plus all residual destinations before normalization | Scale verification; signed batch balance; disposition records |
| `cp_water_records` | `joint_recovery` | Joint-recovery process water and wastewater | Meter readings, invoices, batch logs, and wastewater records | meter_id; start_reading; end_reading; unit; batch_or_period; operation; wastewater_volume; measurement_point; allocation_driver | Prefer process submeter; otherwise documented water balance or causal allocation | m3 or kg | Each batch or at least each operating day, matched to production | Full represented period including cleaning | Every represented joint-recovery facility; process level where practicable | Subtract verified out-of-scope use and normalize by process output or allocation factor | Meter calibration; invoice reconciliation; water-balance closure; documented measurement point |
| `cp_trimming_water_records` | `fat_trimming` | Trimming wash water, when used | Meter readings, batch logs, and wastewater records | meter_id; start_reading; end_reading; unit; lot_id; operation; wastewater_volume; measurement_point | Prefer batch or process submeter; otherwise documented water balance | m3 or kg | Each trimming batch using water | All represented wet-trimming batches | Every represented trimming site | Subtract verified out-of-scope use and normalize by net trimmed output | Meter calibration; batch record; water-balance closure; documented measurement point |
| `cp_energy_records` | `joint_recovery` | Electricity and fuel for joint recovery | Meter readings, invoices, equipment logs | carrier; meter_id; start_reading; end_reading; unit; operating_time; equipment; process; allocation_driver | Process submeter or documented equipment calculation reconciled to facility totals | kWh or MJ | Each batch/day for variable loads; monthly reconciliation | Full represented joint-recovery period | Every represented joint-recovery facility; process/equipment level where practicable | Sum by carrier and process; normalize using direct measurement or documented causal driver | Meter calibration; invoice reconciliation; equipment specification and operating log |
| `cp_cold_chain_records` | `cold_conditioning` | Product mass, temperature state, storage, and loss | Temperature logger, warehouse, batch, and scale records | lot_id; entry_mass_kg; exit_mass_kg; entry_temperature; exit_temperature; temperature_unit; specification; start_time; end_time; excursion; loss_mass_kg; disposition | Calibrated temperature monitoring and calibrated weighing linked to inventory movements | kg; temperature unit; h or day | Each lot; continuous or facility-defined monitoring where appropriate | Entire conditioning and storage interval | Every in-scope cold room/freezer and represented lot | Time-weighted storage duration; sum lot mass and losses; no generic shrink factor | Logger calibration; alarm/excursion log; inventory reconciliation; written specification |
| `cp_cold_energy_records` | `cold_conditioning` | Cold-stage electricity and fuels | Meter readings, invoices, equipment and operating-time logs | carrier; meter_id; start_reading; end_reading; unit; equipment_id; operating_time; load_record; storage_zone; allocation_driver | Cold-stage submeter or documented equipment calculation reconciled to the relevant meter | kWh or MJ | Each batch/day for variable loads; monthly reconciliation | Entire represented conditioning and storage interval | Every in-scope cold room/freezer | Sum by carrier and equipment; normalize by conditioned output mass and disclose storage duration | Meter calibration; invoice reconciliation; equipment specification; operating/load log |
| `cp_refrigerant_records` | `cold_conditioning` | Refrigerant make-up and release | Charge, purchase, recovery, and maintenance records | equipment_id; refrigerant_identity; opening_charge_kg; added_kg; recovered_kg; closing_charge_kg; service_date; operating_period; allocation_driver | Equipment-level refrigerant mass balance | kg | Each service event with annual or represented-period reconciliation | Full represented operating period | In-scope refrigeration equipment | Calculate loss by refrigerant identity and allocate only with a documented causal driver | Certified service record; purchase/recovery record; mass-balance reconciliation |
| `cp_packaging_records` | `packaging_dispatch` | Packaging consumed and tare | Purchase/issue records, bill of materials, item mass checks | packaging_id; material; item_count; measured_item_mass_kg; purchased_mass_kg; returned_mass_kg; reusable_flag; lot_id | Reconcile issued packaging to lots; verify count-to-mass factors by weighing | kg and item | Each packaging lot; period reconciliation | Full represented period | Every represented packing line/site | Net non-reusable packaging consumed divided by net reference-product mass | Supplier specification; weigh check; inventory reconciliation; reusable-equipment register |
| `cp_dispatch_records` | `packaging_dispatch` | Reference product, on-site handling, and handover | Dispatch scale ticket, loading record, equipment log, delivery terms | lot_id; gross_mass_kg; tare_mass_kg; net_mass_kg; product_state; handover_temperature; packaging; loading_energy; handover_location; handover_time; transport_owner | Calibrated gross/tare weighing and signed transfer record | kg; temperature unit; kWh or MJ | Each dispatch lot | All represented dispatches | Every represented dispatch site | Sum net product and in-scope handling resources; normalize to 1 kg net product | Scale verification; transfer document; temperature record; equipment log |
| `cp_joint_waste_and_disposition` | `joint_recovery` | Joint-recovery waste and productive residual destinations | Weigh tickets, container records, manifests, transfer and revenue records | lot_or_period; flow_identity; mass_kg; container_count; count_to_mass_factor; destination; waste_or_product_status; treatment; revenue; currency; price_period | Direct weighing preferred; verified count conversion otherwise | kg; currency/kg when relevant | Each removal or transfer | Full represented joint-recovery period | Every represented joint-recovery site and residual stream | Sum separately by identity, status, and destination; do not net against product mass | Scale/check records; transfer manifest; invoice; legal/operational disposition record |
| `cp_dispatch_waste_and_disposition` | `packaging_dispatch` | Dispatch waste and productive residual destinations | Weigh tickets, container records, manifests, transfer and revenue records | lot_or_period; flow_identity; mass_kg; container_count; count_to_mass_factor; destination; waste_or_product_status; treatment; revenue; currency; price_period | Direct weighing preferred; verified count conversion otherwise | kg; currency/kg when relevant | Each removal or transfer | Full represented dispatch period | Every represented dispatch site and residual stream | Sum separately by identity, status, and destination; do not net against product mass | Scale/check records; transfer manifest; invoice; legal/operational disposition record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | Every inventory amount | normalized amount = represented-period amount / net reference-product mass at dispatch; retain the original unit and conversion record | Collected process amount; dispatch net mass | Amount per 1 kg net unrendered sheep fat | eu-2021-2279-pef |
| `calc_mass_balance` | `joint_recovery`; `fat_trimming`; `cold_conditioning`; `packaging_dispatch` | mass balance closure = accounted output mass / measured input mass; list product, co-product, waste, drainage, and measured storage losses separately and investigate unexplained differences | Matched input and output mass records | Process mass-balance closure and unresolved difference | eu-2021-2279-pef; eu-2019-2031-fdm-bat |
| `calc_joint_allocation` | Unsubdivided joint slaughter/cutting burdens | allocated burden to unrendered sheep fat = remaining joint burden × documented allocation factor; allocation factors across all joint outputs shall sum to 1; physical or economic driver and period shall be disclosed | Remaining joint burden; complete co-product denominator; causal data or masses and prices | Allocated joint burden and audit trail | eu-2021-2279-pef |
| `calc_cold_energy` | `cold_conditioning` | cold-stage energy = directly metered energy, or equipment power × measured operating time adjusted by documented load data and reconciled to the relevant meter; divide by conditioned output mass and disclose storage duration | Meter/equipment readings; operating time; conditioned output mass; storage duration | Energy by carrier per kg conditioned product, with duration | eu-2019-2031-fdm-bat |
| `calc_refrigerant_loss` | `cold_conditioning` | release by refrigerant = opening charge + additions - recovered amount - closing charge, adjusted only for documented transfers; negative or incomplete balances are inconclusive | Refrigerant charge, addition, recovery, and closing records | kg refrigerant release by identity and represented period | eu-2019-2031-fdm-bat |
| `calc_packaging_mass` | `packaging_dispatch` | non-reusable packaging mass = issued mass - returned unused mass; for count records, multiply verified item count by verified item mass; exclude reusable equipment and report it separately | Packaging issue/return, count, item mass, reusable flag | kg packaging per kg net reference product | eu-2021-2279-pef |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_scope` | Product and all upstream/intermediate tissue flows | Demonstrate sheep-only segregation, actual anatomical tissue/source-cut description, route, disposition, and unrendered/no-refining status. Mixed or unidentified animal fat is nonconforming. | Lot traceability, production records, post-mortem/disposition records, product specification |
| `dq_mass_metrology` | Reference mass and all material balances | Use calibrated or verified weighing; disclose gross/tare method, moisture/tissue convention, measurement stage, unexplained balance differences, and count-to-mass conversions. | Calibration/verification certificates, scale tickets, batch balance, weigh checks |
| `dq_temporal_representativeness` | All foreground records | Cover the declared production period and relevant seasonal/operating states, including chilled/frozen storage. Explain exclusions, downtime, and abnormal lots. | Coverage table, production calendar, meter and batch record completeness |
| `dq_cold_chain` | Chilled or frozen routes | Provide written temperature specification, measurement points, logger calibration, actual handover temperature where controlled, storage duration, and excursions; do not report a generic threshold as if source-backed. | Temperature logs, alarm records, calibration, warehouse records |
| `dq_allocation` | Joint slaughter/cutting and shared utilities | Document subdivision attempts, reason for the chosen remaining allocation relationship, complete denominator, source period for masses/prices, factor reconciliation, and sensitivity where allocation is material. | Process diagram, meters, product ledger, prices, allocation workbook, sensitivity result |
| `dq_inventory_completeness` | In-scope operations | Account for relevant water, energy, raw materials, packaging, wastewater, residues, direct emissions, and losses at process or site level as appropriate. State checks skipped and data gaps. | Resource/emission inventory, meters, invoices, waste manifests, reconciliation |
| `dq_reasoned_estimate_replacement` | Provisional gross-fat-input QA guardrail | Treat 1.00-2.00 kg input per kg output only as a reasoned QA screen. Replace or retire it when reviewed sheep-fat-specific batch mass balances and metrology uncertainty are available for the represented route and tissue state; never convert it into a default yield or allocation factor. | Review record linking replacement evidence to `gross_fat_input_mass_guardrail` |
| `dq_source_applicability` | Use of external standards and guidance | Apply CXC 58-2005 only to applicable meat-hygiene/process-control context; use CXS 211-1999 only to distinguish rendered named fats; use FDM BAT only for relevant inventory/monitoring completeness; do not import legal thresholds, composition values, or unrelated sector performance values. | Source applicability statement and reviewer sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow and product metadata | Fail if the product-flow UUID, Mass property UUID, Units of mass UUID, kg unit, CPC reference, or sheep-only unrendered identity does not exactly match this PCR. | unsd-cpc-3-0-21514 |
| `validate_required_qualifiers` | Foreground data package | Fail if route, anatomical tissue origin/source cut, disposition, unrendered status, temperature state, tissue/moisture convention, packaging/tare, facility/period/lot, handover, or transport ownership is missing. | unsd-cpc-3-0-21514; codex-cxc-58-2005 |
| `validate_rendering_excluded` | Process map and inventory | Fail if rendering, melting, extraction, refining, or production of tallow/rendered fat is included in the default foreground or if a CPC 21521-21529 product is used as the reference flow. | unsd-cpc-3-0-21514; codex-cxs-211-1999 |
| `validate_species_and_route` | Input and output identities | Fail if another species, a mixed-species fat stream, or a borrowed other-ruminant yield/allocation parameter is used without explicit exclusion from the reference product and separate scenario treatment. | unsd-cpc-3-0-21514 |
| `validate_mass_and_tare` | Mass balance and reference amount | Fail if net reference mass is not measured or verified, packaging tare is included in the 1 kg product, or material outputs and residuals are not reconciled; flag the provisional 1.00-2.00 QA interval only for review, never automatic substitution. | eu-2021-2279-pef |
| `validate_allocation` | Joint slaughter/cutting burdens | Fail if direct subdivision was not considered, the allocation relationship is undocumented, joint outputs are omitted, factors do not sum to 1, or a default sheep-fat allocation share is asserted without represented evidence. | eu-2021-2279-pef |
| `validate_cold_chain` | Chilled or frozen routes | Fail if conditioning/storage energy and product losses are omitted; fail if state, duration, measurement points, or excursions are undisclosed. Mark refrigerant emissions inconclusive when charge records are insufficient rather than assuming zero. | codex-cxc-58-2005; eu-2019-2031-fdm-bat |
| `validate_transport_handover` | Dispatch and transport | Fail if the handover point or transport ownership is ambiguous. If delivery transport is included, require mode, distance, load, route, temperature-control energy where applicable, and a reference flow located at the delivery handover. | codex-cxc-58-2005; eu-2021-2279-pef |
| `validate_source_limits` | Quantitative and legal claims | Fail if CXS 211-1999 composition/quality values are applied to unrendered fat, if CXC 58-2005 is used as LCA quantity evidence, or if EU 2019/2031 thresholds/performance values are generalized beyond their legal and sector scope. | codex-cxs-211-1999; codex-cxc-58-2005; eu-2019-2031-fdm-bat |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for unrendered sheep fat at a declared dispatch handover |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and data-quality review |
| allowed_use | LCA process or lifecyclemodel construction for sheep-only unrendered fat matching the declared route, anatomical tissue state, disposition, temperature state, packaging, geography, period, allocation method, and handover |
| excluded_use | Rendered/refined fats or tallow; other or mixed animal species; substitution for meat, live-sheep, hide, offal, or rendering datasets; use of provisional QA bounds as default yields; public comparative assertions without applicable review/verification |
| required_metadata | PCR id and version context; reference UUID/property/unit-group/unit; CPC reference; species; anatomical tissue/source cut; slaughter/cutting route; disposition; actual tissue/moisture convention; unrendered confirmation; temperature state/specification and handover temperature where controlled; storage duration; packaging/tare; facility/geography; period/lot; upstream dataset; process map; handovers; transport ownership; allocation method/factors/denominator; data sources |
| required_quality_disclosure | Foreground versus calculated records; mass-balance closure; meter/scale coverage and calibration; temporal/site coverage; cold-chain coverage and excursions; refrigerant-data completeness; allocation sensitivity; missing UUIDs; reasoned-estimate use and replacement status; checks performed/skipped; unresolved findings |
| update_trigger | Reviewed sheep-fat-specific mass-balance evidence; change in Tiangong reference identities; change in product scope or CPC classification; new applicable category-specific PCR/PEFCR; changed slaughter/cutting/cold-chain route; revised Codex hygiene or named-fat texts; revised PEF method; new applicable BAT conclusions; material foreground evidence that replaces the provisional QA guardrail |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21514` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, code 21514, “Sheep fat, unrendered”, official structure CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Product name, sheep-only classification scope, and separation from the rendered-fat class. Limitation: classification evidence does not define production processes, tissue composition, yields, allocation shares, or LCA quantities. |
| `codex-cxc-58-2005` | standard | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005: https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf (retrieved 2026-08-11) | Applicable slaughter/dressing and post-mortem process-control context; segregation of unsafe/unsuitable parts; cooling/freezing, storage, packaging, transport protection, and temperature-monitoring completeness. Limitation: no sheep-fat LCA amounts, yields, allocation factors, or universal temperature threshold are inferred. |
| `codex-cxs-211-1999` | standard | Codex Alimentarius, Standard for Named Animal Fats, CXS 211-1999, amended 2024: https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf (retrieved 2026-08-11) | Naming/exclusion evidence that edible tallow involving sheep is obtained by rendering. Limitation: the standard concerns named fats presented for human consumption, chiefly rendered products; its composition, quality, additive, and analytical values are not applied to unrendered sheep fat. |
| `eu-2021-2279-pef` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, including Annex I Product Environmental Footprint Method, CELEX 32021H2279: https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional unit/reference flow framing, system boundary, foreground normalization, data quality, multifunctionality hierarchy, subdivision, physical/economic allocation documentation, and verification context. Limitation: this is a general method, not a sheep-fat-specific PEFCR and not product-specific numerical evidence. |
| `eu-2019-2031-fdm-bat` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, CELEX 32019D2031: https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-11) | Conditional process-inventory and monitoring completeness for water, energy, raw materials, wastewater, waste gas, residues, and process-level monitoring where the represented installation falls within or appropriately uses the FDM context. Limitation: scope and applicability remain those of the Decision; no legal capacity threshold, BAT-AEL, monitoring frequency, or sector performance value is generalized to this PCR or to all slaughter/cutting facilities. |
