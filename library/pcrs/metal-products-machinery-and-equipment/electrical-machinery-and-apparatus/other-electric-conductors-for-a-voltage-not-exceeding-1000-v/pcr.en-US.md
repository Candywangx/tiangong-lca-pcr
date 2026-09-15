---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-conductors-for-a-voltage-not-exceeding-1000-v
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other electric conductors, for a voltage not exceeding 1000 V

## 1. Scope and Applicability

This PCR guides factory-gate foreground data production for traded insulated electric conductors whose rated voltage does not exceed 1000 V and that are not assigned to a more specific conductor category. It covers single- or multicore copper-conductor products, with route-specific additions required for other conductor metals, insulation systems, screens, armour, sheaths, connectors, and packaging actually present.

It does not cover insulated winding wire, coaxial cable or other coaxial conductors, ignition or other wiring sets for vehicles, aircraft, or ships, conductors rated above 1000 V, optical-fibre cable, bare non-insulated wire, or installation, use, and end-of-life activities. The UN CPC hierarchy supplies the residual product boundary; NPCR 027 confirms that traded electrical cables and wires may use different materials. The integrated manufacturing process is material because it transforms wire rod and polymer compounds by drawing, annealing, stranding, extrusion, assembly, testing, and packing into a distinct saleable conductor.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-conductors-for-a-voltage-not-exceeding-1000-v |
| classification_refs | CPC 3.0: 46340, exact mapping context; the classification edge remains subject to repository acceptance governance |
| covered_products | Insulated electric wires and cables rated not above 1000 V that are prepared for trade and are not winding wire, coaxial conductors, vehicle/aircraft/ship wiring sets, or optical-fibre cable |
| excluded_products | CPC 46310, 46320, 46330, 46350, and 46360 products; bare conductors; upstream metal and polymer production; installation, use, and end-of-life stages |
| representative_product | Copper-conductor, PVC-insulated low-voltage wire or cable supplied as a tested, saleable factory-gate product |
| production_route | Receipt of wire rod and compounds; wire drawing and annealing; stranding where required; insulation extrusion; conditional laying-up, sheathing, marking, testing, and packing |
| market_state | Finished, tested, and saleable insulated conductor at the manufacturing gate; voltage rating, core configuration, conductor cross-section, materials, and packaging are declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished insulated electric conductor able to carry electrical current within its declared voltage, conductor, insulation, and installation specification |
| How much | 1 kg net mass of saleable conductor at the manufacturing gate |
| How well | Conforms to the declared product standard and specified rated voltage not exceeding 1000 V; conductor material and cross-section, number of cores, insulation and sheath materials, electrical resistance, and test status are declared |
| How long or cycle | One completed manufacturing batch or reporting-period production lot; service life is outside this factory-gate reference flow and must not be inferred |
| reference_flow_link | The process output row `reference_product`, normalized to 1 kg net saleable product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other electric conductors, for a voltage not exceeding 1000 V |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | rated voltage; applicable product standard; conductor material; conductor class and cross-section; number of cores; insulation, sheath, screen, and armour materials; connector state; net linear mass; product length represented; manufacturing site and geography; reporting period; recycled content by material; packaging configuration |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net saleable conductor mass excluding separable transport packaging. Normalize all foreground exchanges to 1 kg net saleable product. |
| `length_to_mass` | product records held by length | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert length to mass only with product- and batch-specific measured net linear mass; retain the measured length, linear mass, and conversion calculation. |
| `energy_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered electricity unit and convert to MJ with a documented unit identity; do not substitute upstream grid emissions for the purchased electricity input. |
| `packaging_mass` | each packaging component | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each packaging material separately and normalize by the net mass of the product shipped in that packaging configuration. |

## 5. System Boundary

The foreground boundary begins when purchased conductor feedstock, insulation materials, auxiliaries, energy, water, and packaging enter the manufacturing site. It includes drawing, annealing, stranding, extrusion, conditional assembly and sheathing, marking, testing, internal transport, packing, process rejects, spent process media, and direct site emissions. It ends with tested saleable conductor and separated manufacturing wastes at the factory gate. Upstream supply, outbound distribution, installation, use losses, and end-of-life are represented by linked datasets or later lifecycle-model stages, not by this foreground process.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased wire rod or other declared conductor feedstock, formulated insulation/sheath materials, auxiliaries, energy, water, and packaging at the manufacturing-site gate |
| starting_condition_role | Upstream products entering integrated conductor manufacture |
| product_classification_scope | Residual traded insulated electric conductors rated not above 1000 V, excluding the named sibling conductor categories |
| recursive_input_rule | A purchased insulated conductor or cable component within the same category is recorded once as an upstream product input with its own dataset; do not reopen its manufacture inside this foreground process |
| upstream_dataset_requirement | Link geographically, technologically, temporally, and materially representative upstream datasets for every purchased input and disclose recycled-content, formulation, and supplier proxies |
| disclosure | Declare voltage rating, construction, materials, included manufacturing steps, excluded or outsourced steps, site, period, allocation, packaging, and whether any same-category conductor input crosses the boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include all directly consumed materials, energy, water, auxiliaries, packing inputs, manufacturing wastes, and direct emissions from receipt of purchased inputs through tested saleable product at the factory gate. | `environdec-epd-ies-0024248-2025` |
| `boundary_variant_disclosure` | product variants | Add each actual conductor metal, polymer, additive, screen, armour, sheath, connector, and packaging component as its own atomic exchange; do not use an umbrella material row. | `epd-norge-npcr-027-2022` |
| `boundary_stage_exclusions` | downstream stages | Exclude distribution, installation, use, and end-of-life from the foreground process and disclose that these require separate scenarios when a cradle-to-grave model is built. | `epd-norge-npcr-027-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `electric_conductor_manufacturing` | Integrated low-voltage conductor manufacture and packing | required | Always; route-inapplicable atomic rows are omitted only with product-construction evidence | Foreground transformation by drawing, annealing, stranding, extrusion, conditional assembly/sheathing, testing, and packing | 1 kg net saleable finished conductor |

### Process: Integrated low-voltage conductor manufacture and packing (`electric_conductor_manufacturing`)

#### Inputs

##### Product flows

###### Copper conductor feedstock (`copper_wire_rod`)

Copper wire rod enters the representative route for drawing into conductor wire.

- Selected flow: Copper wire rod `99715c69-4245-44ff-a438-0e0d68377386`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the represented production lot, net of returned unused rod
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### PVC cable-insulation compound (`pvc_insulation_compound`)

Formulated PVC compound enters when the declared product uses PVC insulation or sheath. Its exact Tiangong identity remains unresolved; resin, plasticizer, stabilizer, filler, and other separately purchased formulation constituents must not be collapsed into this row when on-site compounding occurs.

- Selected flow: PVC cable-insulation compound
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the represented PVC-insulated production lot, net of reusable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Colour masterbatch (`colour_masterbatch`)

Masterbatch enters when colour or other masterbatch is dosed into an insulation or sheath compound.

- Selected flow: Masterbatch `71dc7f76-bcc0-4239-a8d7-03132cef6b16`
- Flow property / unit: Mass / kg
- Amount rule: measured masterbatch mass issued to the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Purchased electricity (`electricity`)

Purchased electricity crosses the site boundary for drawing, annealing, stranding, extrusion, assembly, testing, and packing.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to the represented production lot after documented allocation of shared loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_water`
- Sources: `environdec-epd-ies-0024248-2025`

###### Diesel for internal transport (`diesel_fuel`)

Diesel enters only when forklifts or other site-controlled internal transport burn diesel within the foreground boundary.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: measured or invoice-reconciled diesel consumed by applicable internal transport and allocated to the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_emissions`
- Sources: `environdec-epd-ies-0024248-2025`

###### Process-water make-up (`process_water`)

Process water enters as measured make-up for wire-drawing emulsion, extrusion cooling, or other production-contact systems; recirculated water is not counted repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up water crossing the site boundary for the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_water`
- Sources: `environdec-epd-ies-0024248-2025`

###### Wire-drawing lubricant emulsion (`drawing_lubricant_emulsion`)

Wire-drawing lubricant emulsion enters when drawing is performed on site. The selected flow is the purchased formulated emulsion or concentrate, not an umbrella lubricant category.

- Selected flow: Wire-drawing lubricant emulsion
- Flow property / unit: Mass / kg
- Amount rule: measured make-up mass issued to the drawing system for the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Wooden pallet (`wooden_pallet`)

A wooden pallet enters when it accompanies the saleable product from the factory gate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass divided by the net product mass shipped on that pallet, adjusted for documented reuse
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished conductor in the declared packaging configuration
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Low-density polyethylene packaging film (`ldpe_packaging_film`)

PE-LD foil enters when film wraps or protects the saleable product.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: measured film mass used for the declared shipment configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished conductor in the declared packaging configuration
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Corrugated cardboard packaging (`corrugated_cardboard`)

Corrugated cardboard enters when used as a packaging board, protector, carton, or separator for the product.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated cardboard mass used for the declared shipment configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished conductor in the declared packaging configuration
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Polypropylene packaging strap (`polypropylene_strap`)

Polypropylene strap enters when it secures the declared cable or pallet shipment. Its exact Tiangong UUID remains unresolved.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: measured strap mass used for the declared shipment configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished conductor in the declared packaging configuration
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Paper product label (`paper_label`)

A paper label enters when attached to the declared saleable product or its packaging.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass / kg
- Amount rule: measured paper-label mass used for the declared shipment configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished conductor in the declared packaging configuration
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `environdec-epd-ies-0024248-2025`

##### Waste flows

No waste enters the integrated manufacturing process as a required baseline input. If recycled waste is processed on site, add each specific waste material as an atomic input and disclose its pre-processing boundary.

##### Elementary flows

No elementary input is required as a baseline foreground row; purchased water is represented as a product input and upstream resource extraction belongs to linked datasets.

#### Outputs

##### Product flows

###### Finished low-voltage electric conductor (`reference_product`)

The tested saleable conductor is the quantitative reference output. No exact Tiangong product-flow UUID was confirmed.

- Selected flow: Other electric conductors, for a voltage not exceeding 1000 V
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net saleable product by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `epd-norge-npcr-027-2022`

##### Waste flows

###### Segregated copper scrap (`copper_scrap`)

Copper scrap leaves the process when drawing, stranding, setup, or reject handling produces separately collected copper waste.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured segregated copper scrap leaving the process, net of verified same-process internal recycling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Segregated PVC scrap (`pvc_scrap`)

PVC scrap leaves the process when extrusion purge, setup, trimming, or rejects are separately collected from metal-bearing cable scrap.

- Selected flow: Polyvinyl chloride `389a97eb-6bcb-4a51-a49b-79893dbc7d41`
- Flow property / unit: Mass / kg
- Amount rule: measured segregated PVC scrap leaving the process, net of verified same-process internal recycling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `environdec-epd-ies-0024248-2025`

###### Spent wire-drawing lubricant emulsion (`spent_drawing_emulsion`)

Spent drawing emulsion leaves the process only when removed from the drawing system for off-site treatment. Its exact Tiangong waste-flow UUID remains unresolved.

- Selected flow: Spent wire-drawing lubricant emulsion
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed for off-site treatment, excluding recirculated bath inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `environdec-epd-ies-0024248-2025`

##### Elementary flows

###### Fossil carbon dioxide from on-site diesel combustion (`fossil_co2_from_diesel`)

Direct fossil carbon dioxide leaves to air only when diesel is combusted in site-controlled equipment inside the foreground boundary. Upstream fuel-supply emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-reported direct fossil CO2 mass attributable to the recorded diesel use and represented lot; do not apply an uncited default factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished conductor
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all shared operations | Avoid allocation by submetering production lines, recording material issues and wastes by lot, and separating independently measurable processes. |  |
| `allocation_physical` | unavoidable shared energy, water, auxiliaries, and wastes | When subdivision is not possible, use a documented physical driver such as machine time, metered load, throughput, or material mass that reflects causality. |  |
| `allocation_mass_fallback` | shared site records without a demonstrable causal driver | Use net saleable product mass only as a disclosed fallback; report the allocation share, denominator, affected exchanges, and sensitivity. | `environdec-epd-ies-0024248-2025` |
| `scrap_no_avoided_burden` | manufacturing scrap | Record scrap at the measured factory-gate waste boundary without an avoided-burden credit in the foreground process; any recycling benefit belongs to an explicitly linked downstream model. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `electric_conductor_manufacturing` | each separately identified conductor, polymer, masterbatch, and drawing-emulsion input | weigh-ticket, warehouse issue, batch recipe, purchase reconciliation | material identity; lot; opening stock; receipts; issues; returns; closing stock; mass | reconcile mass issued to production against inventory movement and batch recipe | kg | each lot; monthly reconciliation | same reporting period as product output | all included production lines at the declared site | sum net issues by atomic material and divide by net saleable output | calibrated-scale record; supplier specification; stock reconciliation; formulation revision |
| `cp_energy_water` | `electric_conductor_manufacturing` | electricity and process-water make-up | meter and utility record | meter id; opening and closing readings; unit; line share; downtime; make-up-water reading | read dedicated meters or allocate shared meters using documented physical drivers | native meter unit and kg water | continuous or shift; monthly reconciliation | same reporting period as product output | all included lines and support systems | subtract opening from closing, remove documented non-production loads, allocate, and normalize | meter calibration; utility invoice reconciliation; allocation worksheet |
| `cp_fuel_and_emissions` | `electric_conductor_manufacturing` | diesel input and direct fossil CO2 | fuel issue log, equipment-hour log, verified emissions record | fuel identity; mass or volume; density; equipment; hours; lot; direct CO2 | reconcile fuel issues and retain site emissions calculation or verified report where direct combustion applies | kg fuel and kg CO2 | each issue; monthly reconciliation | same reporting period as product output | site-controlled combustion equipment only | allocate by measured use or equipment hours; normalize to net saleable output | invoice; tank reconciliation; density record; emissions calculation and reviewer sign-off |
| `cp_packaging_inputs` | `electric_conductor_manufacturing` | each packaging component | packaging bill of materials and packing log | component identity; mass per item; items used; reuse count; product mass shipped | weigh representative components and reconcile counts to shipment records | kg | each packaging design; each revision | packaging configurations used in reporting period | declared outgoing product packaging | component mass times net consumption divided by packaged net product mass | scale record; bill of materials; packing record; reuse evidence |
| `cp_waste_outputs` | `electric_conductor_manufacturing` | each segregated manufacturing waste | waste scale ticket, container log, disposal manifest | waste identity; gross and tare mass; destination; internal recycle quantity; lot or period | weigh each waste stream separately and reconcile storage changes and treatment manifests | kg | each removal; monthly reconciliation | same reporting period as product output | all included production and maintenance areas | outgoing waste plus closing minus opening storage, less verified same-process internal recycling; normalize | calibrated scale; manifest; recycler receipt; storage reconciliation |
| `cp_reference_output` | `electric_conductor_manufacturing` | net saleable finished conductor | finished-goods and quality-release record | product code; voltage; construction; gross mass; separable packaging mass; length; linear mass; rejected mass; release status | use released finished-goods mass, subtract separable packaging, and reconcile length-to-mass conversion | kg | each lot | same reporting period as inputs | all included saleable output | sum net released product mass; exclude rejects and separable packaging | release certificate; calibrated scale; length and linear-mass check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | every foreground exchange | normalized exchange = attributable exchange amount / net saleable product mass | atomic exchange amount; net saleable output from `cp_reference_output` | exchange per 1 kg reference product |  |
| `calc_length_mass` | product records held by length | product mass = measured product length × batch-specific net linear mass | measured length; measured net kg/m | kg net saleable product |  |
| `calc_packaging_reuse` | reusable pallet or drum | consumed packaging mass = component mass / verified expected uses; no reuse adjustment without traceable return evidence | component mass; verified reuse count; product mass carried | kg packaging per kg net product |  |
| `calc_mass_balance` | conductor metal and polymer | input mass = saleable incorporated mass + segregated scrap + other documented losses ± inventory change; investigate unexplained residuals | material issues; product composition; scrap; inventory change | material balance and unexplained residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Preserve product code, voltage rating, standard, conductor construction, material formulation, dimensions, net linear mass, and quality-release status. | product specification and release certificate |
| `dq_completeness` | inventory | Reconcile every purchased material, additive, energy carrier, water input, packaging component, waste, and direct emission actually crossing the boundary; add variant-specific exchanges as separate atomic rows. | ledger-to-inventory reconciliation and signed completeness review |
| `dq_measurement` | meters and scales | Use calibrated instruments and retain unit conversions, allocation worksheets, gross/tare corrections, and uncertainty notes. | calibration certificates and reconciliation worksheets |
| `dq_temporal` | reporting period | Use a continuous representative period and align input, output, waste, and inventory-change records; disclose shutdowns, start-ups, and abnormal production. | dated records and production log |
| `dq_representativeness` | upstream links | Match conductor grade, recycled content, polymer formulation, electricity geography, fuel technology, water supply, packaging, and waste treatment; disclose every proxy. | supplier data, dataset metadata, and proxy register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Confirm rated voltage is not above 1000 V and the product is not winding wire, coaxial conductor, vehicle/aircraft/ship wiring set, above-1000 V conductor, or optical-fibre cable. | `un-cpc-3-0-structure-2025` |
| `validate_reference` | reference flow | Confirm exactly 1 kg net saleable conductor output, separable packaging excluded, and every required qualifier disclosed. | `epd-norge-npcr-027-2022` |
| `validate_atomic_rows` | inventory | Reject any row that combines multiple materials, utilities, fuels, packaging components, wastes, or emissions; require a separate concrete exchange and route condition. |  |
| `validate_mass_balance` | conductor metal and polymer | Require reconciled material balances and documented investigation of unexplained residuals; do not net scrap against purchased input. |  |
| `validate_boundary` | foreground process | Confirm all directly consumed manufacturing and packing exchanges, wastes, and direct site emissions are included, while upstream and downstream stages are represented separately. | `environdec-epd-ies-0024248-2025` |
| `validate_uuid_status` | Tiangong references | Accept only public state-100 UUIDs whose identity, flow type, property, unit group, and product state match the row; keep unresolved rows explicit. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset suitable for publication as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Linked input to product, construction, electrical-equipment, or lifecycle models that separately add upstream supply and downstream distribution, installation, use losses, and end-of-life as required |
| allowed_use | Comparison or modelling of conductors only when voltage, construction, materials, function, geography, period, boundary, and allocation are compatible |
| excluded_use | Direct comparison across incompatible conductor functions or standards; use as a cradle-to-grave result; inference of service life or operational Joule losses; use for excluded conductor categories |
| required_metadata | PCR id and version; product code and standard; voltage; conductor construction; material composition; net linear mass; site and geography; reporting period; technology; boundary; allocation; recycled content; packaging; data sources; unresolved UUIDs |
| required_quality_disclosure | Primary-data share; meter and scale coverage; allocation share and drivers; material-balance residuals; proxy list; temporal, geographic, and technological representativeness; uncertainty and completeness review |
| update_trigger | Change in conductor design or formulation, voltage or product standard, production route or equipment, site or energy mix, supplier or recycled content, packaging, waste treatment, allocation, or a material change in normalized inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Product identity, hierarchy, and exclusions from adjacent conductor categories |
| `un-cpc-1-1-chinese-2004` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-04) | Verified professional Chinese category name and adjacent voltage-category terminology |
| `epd-norge-npcr-027-2022` | `standard` | The Norwegian EPD Foundation, NPCR 027:2022 Part B for electrical cables and wires, version 2, https://www.epd-norge.no/getfile.php/13161971-1741628082/PCRer/NPCR%20027%202022%20Part%20B%20Electrical%20cables%20and%20wires%20A2%20010322.pdf (retrieved 2026-09-04) | Electrical-cable and wire scope, declared-unit alternatives, lifecycle-stage separation, and disclosure rules |
| `environdec-epd-ies-0024248-2025` | `dataset` | AB Lietkabelis, EPD-IES-0024248:001, PVC insulated non-sheathed cable for internal wiring H07V-R 6.0-16.0 mm2, 13 June 2025, https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/94d4fb03-6def-4593-a3b9-08dda8b4f7e6/Documents (retrieved 2026-09-04) | Representative low-voltage product construction, manufacturing inputs, packaging components, factory process boundary, allocation example, and foreground-data context; no quantitative range imported |
