---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48322-parts-and-accessories-of-cinemato-0072ad9a
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for specified photographic and projection apparatus

## 1. Scope and Applicability

This PCR applies to finished replacement parts and accessories classified in CPC 3.0 subclass 48353: parts and accessories for photographic and cinematographic cameras; cinematographic projectors; photographic flash apparatus; non-cinematographic image projectors and photographic enlargers or reducers; photographic-laboratory apparatus and equipment parts not elsewhere classified; and parts and accessories of negatoscopes and projection screens. The product reported by a foreground data package shall be one physically specified part or accessory with a declared compatibility and function.

The PCR covers cradle-to-factory-gate production of that sale-ready product. Foreground activities include the reporting manufacturer's material and component receipt, forming, machining, moulding, optical working, surface treatment, assembly, testing, and packaging when performed. Purchased materials and completed components enter through upstream datasets.

Complete cameras, complete projectors, complete photographic flash apparatus, complete laboratory apparatus, complete negatoscopes, complete projection screens, objective lenses classified separately, photographic services, sensitized photographic media, and photographic chemicals sold as products are excluded. Use and end-of-life are outside the default boundary. A product that combines a covered accessory with another function shall be included only when the covered function and mass can be separately identified.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48322-parts-and-accessories-of-cinemato-0072ad9a |
| classification_refs | CPC 3.0: 48353 (exact) |
| covered_products | Finished replacement parts and accessories for the photographic, cinematographic, projection, photographic-laboratory, negatoscope, and projection-screen products named in CPC 48353 |
| excluded_products | Complete apparatus; separately classified objective lenses; photographic services; sensitized media; photographic chemicals sold as products; generic parts with no documented compatibility with a covered apparatus |
| representative_product | One sale-ready, quality-conforming replacement part or accessory of a declared configuration |
| production_route | Configuration-specific combination of metal forming or machining, polymer moulding, optical-glass working, screen-fabric conversion, surface treatment, electronic assembly, final assembly, testing, and packaging |
| market_state | Finished and released for sale at the reporting factory gate, packaged when packaging is supplied with the product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A sale-ready, quality-conforming finished part or accessory within the covered product category |
| How much | 1 kg net finished-product mass, excluding packaging |
| How well | Meets the declared drawing or specification, compatibility, functional test, surface-finish, and release criteria |
| How long or cycle | Not applicable to the factory-gate reference flow; any warranted service life is reported as a qualifier and is not used to change the reference amount |
| reference_flow_link | The reference product output row `reference_product` from process `product_manufacturing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts and accessories for the goods of subclass 48322, parts and accessories of cinematographic projectors, parts and accessories of photographic flashlight apparatus, parts and accessories of image projectors (except cinematographic) and photographic (except cinematographic) enlargers and reducers, parts and accessories n.e.c. of apparatus and equipment for photographic laboratories, parts and accessories of negatoscopes and projection screens `44db14dc-0192-46b9-afaf-d9c90db9f97b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part or accessory type; manufacturer and model or drawing identifier; compatible host apparatus; function; principal material and bill-of-materials revision; manufacturing-route flags; net mass; packaging state and packaging mass; factory geography; technology and reporting period; quality and functional-test criteria; surface treatment and coating formulation when applicable; recycled-content claims when applicable |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the measured net mass of quality-conforming finished products. Exclude packaging and rejected units from the reference amount. |
| `batch_normalization` | all inventory rows | Mass or row-specific property | per kg reference product | Divide the exchange total for the reporting period by the net mass of released conforming product from the same period and product configuration. |
| `energy_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter kWh in source records and convert to MJ using 1 kWh = 3.6 MJ; disclose included transformer and distribution losses. |
| `count_to_mass` | pieces recorded by count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counted products or packaging to mass only with a configuration-specific sampled mean mass and retain sample count, scale record, and sampling date. |
| `water_mass` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass or volume records. If volume is converted to mass, retain measured density and temperature or state and justify the conversion. |

## 5. System Boundary

The default reporting boundary begins when purchased materials, completed components, process chemicals, packaging, water, and energy cross into the reporting factory and ends when the tested, released product is ready at the factory gate. Upstream extraction, material manufacture, and purchased-component manufacture are represented with upstream datasets. Foreground scrap, wastewater, direct air emissions, and rejects are recorded before any credit or downstream treatment model is applied.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material and component states at receipt by the reporting factory, including grade, form, supplier geography, recycled content, and upstream dataset identity |
| starting_condition_role | Upstream product inputs to configuration-specific foreground manufacture |
| product_classification_scope | One finished part or accessory within CPC 48353; the CPC identity does not make complete apparatus or separately classified objective lenses part of the reference product |
| recursive_input_rule | A purchased input already within CPC 48353 is recorded as a product input with its own upstream dataset and declared configuration; do not recursively reproduce its manufacture inside the same unit process |
| upstream_dataset_requirement | Every purchased material, component, chemical, packaging item, water supply, and energy supply shall have a geographically and technologically representative upstream dataset or a disclosed data gap |
| disclosure | Report the product configuration, route flags, included and excluded operations, outsourced operations, packaging state, cut-off decisions, upstream dataset substitutions, factory geography, and reporting period |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground manufacture | Include all configuration-applicable forming, machining, moulding, optical working, cleaning, surface treatment, assembly, testing, and packaging operations controlled by the reporting manufacturer. | `un-cpc-3-0-structure-2025`; `eu-jrc-stm-bref-2006` |
| `boundary_02` | purchased inputs | Model purchased materials and completed components with upstream datasets and do not treat supplier burdens as zero. | `ghg-protocol-product-standard-2011` |
| `boundary_03` | surface treatment | When electrolytic, chemical, or coating treatment occurs, include pretreatment, treatment, rinsing, drying or curing, water, electricity, coating or treatment material, wastewater, solid residues, and direct emissions that cross the boundary. | `eu-jrc-stm-bref-2006`; `us-epa-ap42-general-industrial-surface-coating` |
| `boundary_04` | use and end-of-life | Exclude product use, host-apparatus energy, maintenance, and end-of-life from the default factory-gate dataset; add them only in a separately declared downstream lifecycle model. | `ghg-protocol-product-standard-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `product_manufacturing` | Configuration-specific product manufacturing, testing, and packaging | required | Always include; each conditional exchange applies only when the declared product bill of materials or route uses it | foreground production | 1 kg net mass of released, quality-conforming finished part or accessory |

### Process: Configuration-specific product manufacturing, testing, and packaging (`product_manufacturing`)

#### Inputs

##### Product flows

###### Aluminium sheet (`aluminium_sheet`)

Record aluminium sheet only when it is issued to the declared product configuration.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured sheet mass issued to the production lots, net of documented returned unused sheet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Stainless-steel sheet (`stainless_steel_sheet`)

Record stainless-steel sheet only when it is issued; declare alloy grade and thickness. No exact Tiangong UUID is confirmed.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured sheet mass issued to the production lots, net of documented returned unused sheet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### ABS granulate (`abs_granulate`)

Record ABS granulate only for a moulded ABS component in the declared configuration.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass / kg
- Amount rule: measured dry granulate charged, less separately documented unused material returned to storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Optical-glass pressing blank (`optical_glass_blank`)

Record a pressing blank only when optical-glass working is performed for the covered product.

- Selected flow: Optical Glass Pressing Blank `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of optical-glass blanks issued to the production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Projection-screen fabric (`projection_screen_fabric`)

Record one declared projection-screen substrate fabric only when the covered part uses it. No exact Tiangong UUID is confirmed.

- Selected flow: Polyester woven projection-screen fabric
- Flow property / unit: Mass / kg
- Amount rule: measured fabric mass cut for the production lots, net of documented returned uncut fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Coating (`coating`)

Record the applied coating product only when coating is part of the declared route; disclose formulation, solids content, and application technology.

- Selected flow: Coating `59808a77-a33c-493f-8e5f-c0eb3e837943`
- Flow property / unit: Mass / kg
- Amount rule: coating mass issued minus measured returned coating and separately recovered coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `eu-jrc-stm-bref-2006`; `us-epa-ap42-general-industrial-surface-coating`

###### Purchased electricity (`electricity`)

Record electricity consumed by configuration-applicable production, treatment, assembly, testing, packaging, and directly supporting equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered consumption, or documented equipment-meter allocation when a dedicated meter is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`
- Sources: `eu-jrc-stm-bref-2006`

###### Process water (`process_water`)

Record supplied process water used for cleaning, rinsing, cooling makeup, optical working, or surface treatment; exclude once-through non-contact water only when demonstrably outside the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `eu-jrc-stm-bref-2006`

###### Printed-circuit-board assembly (`pcb_assembly`)

Record a populated PCB assembly only when electronics are incorporated in the declared accessory.

- Selected flow: Electronic components and PCB assemblies `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- Flow property / unit: Mass / kg
- Amount rule: BOM quantity multiplied by verified unit mass, reconciled to supplier receipts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Epoxy resin (`epoxy_resin`)

Record epoxy resin only when an epoxy bonding or potting formulation is used; other separately used resin or hardener species require their own atomic rows in the resulting data package.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Amount rule: measured resin mass issued to and consumed by the production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Corrugated board box (`corrugated_box`)

Record corrugated boxes only when supplied with the sale-ready product.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: box count multiplied by configuration-specific sampled box mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Low-density polyethylene film (`ldpe_film`)

Record LDPE film only when it is supplied with the sale-ready product.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: measured film mass issued, or length and basis mass converted under a retained specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

##### Waste flows

No waste input is prescribed. Any externally supplied waste used as a secondary material shall be represented as its own chemically or physically specific waste input in the foreground data package.

##### Elementary flows

No elementary input is prescribed. Elementary resource inputs, if directly measured and not embedded in upstream datasets, shall be added as individual flows.

#### Outputs

##### Product flows

###### Finished reference product (`reference_product`)

Record only tested, released, sale-ready product mass; exclude packaging and rejected products.

- Selected flow: Parts and accessories for the goods of subclass 48322, parts and accessories of cinematographic projectors, parts and accessories of photographic flashlight apparatus, parts and accessories of image projectors (except cinematographic) and photographic (except cinematographic) enlargers and reducers, parts and accessories n.e.c. of apparatus and equipment for photographic laboratories, parts and accessories of negatoscopes and projection screens `44db14dc-0192-46b9-afaf-d9c90db9f97b`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net mass of quality-conforming released product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Aluminium scrap (`aluminium_scrap`)

Record segregated aluminium offcuts and machining scrap generated by the applicable route.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving production as aluminium scrap before recycling credit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources:

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated steel offcuts and machining scrap generated by the applicable route.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving production as steel scrap before recycling credit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources:

###### ABS moulding scrap (`abs_moulding_scrap`)

Record only segregated ABS sprues, runners, purge, and rejected mouldings. No exact Tiangong UUID is confirmed.

- Selected flow: ABS moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving production as ABS scrap before internal reuse or external treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources:

###### Optical-glass grinding sludge (`optical_glass_grinding_sludge`)

Record dewatered optical-glass grinding sludge only when generated. No exact Tiangong UUID is confirmed.

- Selected flow: Optical-glass grinding sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and solids content, reported on the declared wet or dry basis without mixing bases
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources:

###### Surface-treatment wastewater (`surface_treatment_wastewater`)

Record wastewater leaving cleaning, rinsing, optical working, or surface treatment before external treatment; disclose whether on-site treatment is included.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: metered discharge mass or volume converted under the water-mass rule
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-jrc-stm-bref-2006`

###### Rejected finished part (`rejected_finished_part`)

Record one declared rejected finished part or accessory configuration that leaves as waste. No exact Tiangong UUID is confirmed.

- Selected flow: Rejected finished photographic or projection apparatus part or accessory
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of tested units rejected and not reworked into conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Elementary flows

###### Non-methane volatile organic compounds to air (`nmvoc_to_air`)

Record direct NMVOC released from applicable coating, cleaning, and curing operations after capture and abatement; do not include upstream electricity emissions.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack and fugitive release, or a documented coating-and-solvent mass balance net of recovery, retained product, captured waste, and abatement destruction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nmvoc_mass_balance`
- Sources: `us-epa-ap42-general-industrial-surface-coating`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | shared production lines | Avoid allocation by submetering, production-order records, equipment time, and process subdivision for the declared product configuration. | `ghg-protocol-product-standard-2011` |
| `allocation_02` | unavoidable shared utilities | If subdivision is not practicable, allocate electricity, water, and shared consumables using the physical driver that causes consumption, such as machine time, treated surface area, or measured throughput; disclose the driver and sensitivity. | `ghg-protocol-product-standard-2011` |
| `allocation_03` | metal scrap and other wastes | Report gross generated waste before recycling credit. Do not assign avoided-production credit inside the foreground unit process; model downstream recycling in a separately declared scenario. | `ghg-protocol-product-standard-2011` |
| `allocation_04` | co-products with economic value | If a valuable co-product remains after subdivision, prefer a causal physical relation; use economic allocation only when no defensible physical relation exists and disclose prices, period, currency, and sensitivity. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `product_manufacturing` | material, component, chemical, and packaging inputs | approved BOM, issue/return records, supplier receipts, sampled unit mass | product configuration; material identity; grade or formulation; lot; quantity issued; quantity returned; unit mass; packaging state | reconcile approved BOM to warehouse issues, returns, and supplier receipts; weigh representative counted items | kg | each production lot, aggregated monthly | representative consecutive 12 months or complete shorter campaign | each reporting factory and outsourced foreground operation | sum net issued mass by atomic material and divide by conforming output mass | approved BOM revision, calibrated scale record, lot trace, supplier specification, reconciliation variance |
| `cp_energy_meter` | `product_manufacturing` | purchased electricity | meter and equipment log | meter start/end; kWh; production order; machine time; allocation driver; losses included | dedicated submeter preferred; otherwise allocate facility meter only across directly supporting equipment using documented drivers | kWh retained, MJ reported | monthly and at route change | same period as output | each reporting factory | convert kWh to MJ and divide by conforming output mass | meter identifier, calibration or utility invoice, allocation worksheet |
| `cp_water_meter` | `product_manufacturing` | process-water input | water meter, tank balance, or batch sheet | water volume or mass; density basis; process; lot; returned or recirculated water | meter process makeup and distinguish recirculated water from new supply | kg | monthly or each batch for batch treatment | same period as output | each reporting factory | sum new supplied process water and divide by conforming output mass | meter identifier, balance closure, density record when converted |
| `cp_output_mass` | `product_manufacturing` | conforming and rejected product | release, test, count, and scale records | configuration; released count; rejected count; unit mass; rework status; packaging mass | reconcile quality release and test records to net product weighing | kg | each production lot | same period as inputs | each reporting factory | sum net conforming mass separately from unreworked rejected mass | release authorization, functional-test record, calibrated scale, reject disposition |
| `cp_waste_mass` | `product_manufacturing` | segregated solid wastes | container scale ticket and waste transfer record | waste identity; material; gross/tare; moisture or solids basis; destination; internal reuse | weigh each segregated waste stream before external treatment or credit | kg | each container or batch | same period as output | each reporting factory | sum each atomic waste stream, subtract verified tare, divide by conforming output mass | scale ticket, waste code, photo or composition evidence, transfer document |
| `cp_wastewater` | `product_manufacturing` | surface-treatment wastewater | discharge meter and sampling record | mass or volume; density; treatment status; destination; pH; relevant metals and organics | meter each process wastewater route and retain representative composition analyses | kg | continuous or each discharge batch | same period as output | each reporting factory | sum wastewater crossing the boundary and divide by conforming output mass | meter record, sampling plan, laboratory result, treatment-flow diagram |
| `cp_nmvoc_mass_balance` | `product_manufacturing` | direct NMVOC to air | coating/solvent issue, recovery, waste, product-retention, capture, and abatement records | formulation VOC fraction; mass used; mass returned; mass in waste; mass retained; capture efficiency; destruction efficiency; measured emissions | use validated stack/fugitive measurement where available; otherwise close a formulation-specific mass balance | kg NMVOC | each coating campaign, aggregated monthly | same period as output | each coating line at the reporting factory | direct release = VOC input minus recovered, retained, captured-as-waste, and destroyed VOC; divide by conforming output mass | SDS or formulation certificate, issue/return records, abatement test, mass-balance closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | normalized exchange | normalized amount = period exchange amount / period net mass of released conforming product | exchange amount; conforming output mass | kg, MJ, or row-specific unit per kg reference product |  |
| `calc_02` | counted input | input mass = accepted count × sampled mean unit mass | accepted count; sampled unit masses | kg input |  |
| `calc_03` | electricity | reported MJ = metered kWh × 3.6 | metered kWh | MJ electricity |  |
| `calc_04` | NMVOC | released NMVOC = formulation VOC input − recovered VOC − VOC retained in product − VOC transferred in waste − VOC destroyed by abatement | formulation and mass-balance fields from `cp_nmvoc_mass_balance` | kg NMVOC released | `us-epa-ap42-general-industrial-surface-coating` |
| `calc_05` | product and solid-waste mass balance | closure = total mass inputs − conforming product − separately measured wastes − direct mass emissions − inventory change | material and chemical inputs; outputs; inventory change | unexplained mass and closure percentage |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01` | product identity | Freeze the part number, drawing or model, compatible host apparatus, BOM revision, route, and packaging state for each aggregation group. | approved specification and BOM revision |
| `dq_02` | temporal representativeness | Use a representative consecutive 12-month period; a shorter complete campaign is allowed only for new, seasonal, or discontinued production and shall be disclosed. | dated input, output, meter, and production-order records |
| `dq_03` | completeness | Reconcile material issues, output, rejects, wastes, wastewater, and direct emissions; explain exclusions and unresolved mass-balance residuals. | mass-balance worksheet and signed exception log |
| `dq_04` | geography and technology | Identify every reporting factory, outsourced foreground operation, electricity supply geography, and major upstream dataset substitution. | site list, route diagram, supplier and dataset mapping |
| `dq_05` | measurement quality | Retain meter and scale identifiers, calibration or verification status, sampling plans, conversion factors, allocation drivers, and reconciliation variance. | calibration records and calculation workbook |
| `dq_06` | source quality | Distinguish foreground records, calculations, Tiangong identity references, and external method sources; do not convert a single published case into a range. | row-level evidence metadata and source register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | product and reference flow | Confirm that the product is one covered finished part or accessory, not a complete apparatus or separately classified objective lens, and that the reference output is exactly 1 kg net conforming product. | `un-cpc-3-0-structure-2025` |
| `validation_02` | configuration completeness | Confirm that all required qualifiers and route flags are populated and that every BOM material, component, chemical, packaging item, waste, and direct emission crossing the boundary is represented by an atomic exchange or an explained data gap. |  |
| `validation_03` | conditional rows | A conditional material or emission row may be absent only when the frozen BOM, process route, or packaging specification demonstrates non-applicability. |  |
| `validation_04` | mass and energy | Reperform unit conversions, normalization, input/output mass-balance closure, reject separation, and shared-utility allocation; investigate unexplained residuals. |  |
| `validation_05` | surface treatment | When surface treatment or solvent coating is declared, verify coating or treatment input, process water, electricity, wastewater, solid residue if generated, and direct NMVOC or a documented zero-release basis. | `eu-jrc-stm-bref-2006`; `us-epa-ap42-general-industrial-surface-coating` |
| `validation_06` | allocation | Verify that subdivision was attempted before allocation and that any remaining driver reflects a physical causal relation or is disclosed with sensitivity. | `ghg-protocol-product-standard-2011` |
| `validation_07` | evidence and unresolved items | Confirm that UUID-empty rows remain recorded as unresolved and that no external numeric range is introduced without at least two independent, boundary-compatible original sources. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` for one declared finished part or accessory configuration |
| downstream_use | Factory-gate input to host-apparatus manufacture, repair, replacement-part supply, product-footprint studies, or a separately modelled distribution/use/end-of-life lifecyclemodel |
| allowed_use | Attributional cradle-to-factory-gate modelling when product identity, configuration, geography, technology, period, packaging state, allocation, and data quality fit the study |
| excluded_use | Direct comparison of unlike functions or compatibility classes; representation of complete apparatus; substitution for a specific objective-lens PCR; use-phase or end-of-life claims without additional models; claims about configurations not covered by the frozen BOM |
| required_metadata | PCR id and version; CPC context; part number or drawing; compatible host apparatus; function; net mass; BOM revision; route flags; packaging state; factory geography; technology; period; allocation; upstream datasets; unresolved data gaps |
| required_quality_disclosure | Record coverage; measurement and calibration status; mass-balance closure; utility-allocation method; supplier-data share; treatment and emission method; reject handling; range-evidence gaps; UUID gaps |
| update_trigger | Change in product configuration, BOM, principal material, supplier geography, manufacturing or coating route, factory, electricity supply, packaging, allocation driver, emission control, or a material change in measured intensity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48353 identity and covered-product boundary |
| `eu-jrc-stm-bref-2006` | official_guidance | European Commission Joint Research Centre, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-07) | Conditional surface-treatment process structure; electricity, water, wastewater, solid-residue, and direct-emission collection requirements |
| `us-epa-ap42-general-industrial-surface-coating` | official_guidance | U.S. Environmental Protection Agency, AP-42 Section 4.2.2.1 General Industrial Surface Coating, reformatted January 1995, https://19january2021snapshot.epa.gov/sites/static/files/2020-10/documents/c4s02_2a.pdf (retrieved 2026-09-07) | Coating and separately purchased solvent records; formulation-specific NMVOC mass balance |
| `ghg-protocol-product-standard-2011` | standard | World Resources Institute and World Business Council for Sustainable Development, Product Life Cycle Accounting and Reporting Standard, 2011, https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-09-07) | Boundary disclosure, allocation hierarchy, data quality, reporting, and update rules |
