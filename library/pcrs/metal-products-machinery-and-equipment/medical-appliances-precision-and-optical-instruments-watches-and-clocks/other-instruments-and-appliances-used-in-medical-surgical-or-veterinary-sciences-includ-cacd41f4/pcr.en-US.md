---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-instruments-and-appliances-used-in-medical-surgical-or-veterinary-sciences-includ-cacd41f4
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other instruments and appliances used in medical, surgical or veterinary sciences

## 1. Scope and Applicability

This PCR covers cradle-to-factory-gate production of finished medical, surgical, ophthalmic, or veterinary instruments and appliances in the CPC 48150 boundary, including syringes, needles, catheters, cannulae, and electro-medical apparatus not elsewhere classified. It applies to sterile and non-sterile products, disposable and reusable products, and passive and powered products only when the foreground data package declares the concrete device type, bill of materials, manufacturing route, sterile state, intended use, packaging configuration, and factory-gate product state.

It excludes electro-diagnostic apparatus, ultraviolet or infrared medical apparatus, dental instruments other than syringes and needles, medical or laboratory sterilizers as products, mechano-therapy and respiratory appliances, orthopaedic and prosthetic appliances, medical furniture, standalone parts and accessories, pharmaceuticals, and health-care services. Use and maintenance, clinical consumables, distribution beyond the factory gate, and end-of-life are outside the default boundary. A study may extend the boundary only by disclosing the additional processes separately.

The category is heterogeneous. The shared rules below do not authorize a generic average device. Each dataset shall represent one declared product specification and include only the applicable material, cleaning, sterilization, and packaging routes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-instruments-and-appliances-used-in-medical-surgical-or-veterinary-sciences-includ-cacd41f4 |
| classification_refs | CPC 3.0:48150 (exact) |
| covered_products | Finished syringes, needles, catheters, cannulae, ophthalmic instruments and appliances n.e.c., and other medical, surgical, veterinary, or electro-medical instruments and appliances n.e.c. |
| excluded_products | Electro-diagnostic apparatus; ultraviolet or infrared medical apparatus; dental instruments other than syringes and needles; sterilizers sold as products; mechano-therapy and respiratory appliances; orthopaedic or prosthetic appliances; medical furniture; standalone parts and accessories; pharmaceuticals; services |
| representative_product | One declared finished device model or homogeneous device family within the covered boundary |
| production_route | Declared bill-of-material route with applicable component fabrication, assembly and cleaning, sterilization, and packaging processes |
| market_state | Finished device at the manufacturer factory gate, with sterile state, reusable/disposable status, packaging configuration, and release specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished medical, surgical, ophthalmic, or veterinary instrument or appliance that performs its declared intended function |
| How much | 1 kg net mass of conforming finished device at the factory gate |
| How well | Meets the declared model, intended-use, performance, cleanliness, sterile-state, and release specifications |
| How long or cycle | One factory-gate delivery; use-stage lifetime or procedure count is declared for interpretation but is not included in this cradle-to-gate reference amount |
| reference_flow_link | The reference product output `finished_medical_instrument` equals the 1 kg reference amount |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass of conforming finished device |
| Reference product flow | Other instruments and appliances used in medical, surgical or veterinary sciences (including syringes, needles, catheters, cannulae, ophthalmic instruments and appliances n.e.c. and electro-medical apparatus n.e.c.) `01d838ad-6413-41ad-ba7a-a159be4b8a20` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | device generic name and model or homogeneous family; intended medical, surgical, ophthalmic, or veterinary function; disposable or reusable state; passive or powered state; net device mass excluding packaging; principal materials and grades; manufacturing technologies; sterile or non-sterile state; sterilization method and site when applicable; sterile-barrier and sales-pack configuration; production geography and reference year; factory-gate boundary; accepted and rejected product mass; co-product and scrap-credit treatment |

When constructing a foreground data package, every required qualifier shall be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and normalization denominator | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh conforming finished devices without transport packaging; include integral components and non-removable accessories supplied as part of the declared device. Normalize all inventory amounts to 1 kg accepted output. |
| `packaging_mass_separation` | Sterile barrier, protective packaging, labels, and sales cartons | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging material separately from net device mass; convert item counts using measured average mass from the same packaging specification. |
| `energy_conversion` | Purchased electricity and process energy | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` or the directly audited energy property | MJ | Preserve the source meter unit and convert electricity only with 1 kWh = 3.6 MJ; do not mix delivered steam mass with heat energy. |
| `water_mass_conversion` | Process water and wastewater recorded volumetrically | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain measured volume, temperature, and an applicable measured or documented density; report the converted mass and do not assume wastewater density when composition materially differs from water. |
| `sterilization_service_basis` | Contract irradiation sterilization | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg treated device | Normalize the invoiced or treatment-record service quantity to the accepted device mass in the same sterilization load and disclose dose, load allocation, and return yield. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, purchased components, packaging items, utilities, and contracted sterilization services at their receiving boundary; supplier processes are represented by upstream datasets |
| starting_condition_role | Cradle-to-gate foreground manufacturing starting condition |
| product_classification_scope | Finished CPC 48150 instruments and appliances only; adjacent device categories, standalone components, pharmaceuticals, and services are excluded |
| recursive_input_rule | A purchased CPC 48150 device used as a component or subassembly is recorded as an upstream product input with its own dataset and is not recursively decomposed inside this foreground system |
| upstream_dataset_requirement | Use geography-, technology-, grade-, and product-state-compatible upstream datasets for every purchased material, component, utility, packaging item, and contract service |
| disclosure | Declare manufacturing sites, outsourced operations, bill-of-material coverage, sterile state, sterilization route, packaging configuration, rejected-product treatment, allocation basis, and any boundary extension |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | All foreground datasets | Include receipt and preparation of inputs, in-house component fabrication, assembly, cleaning, testing, applicable sterilization, packaging, release, and all wastes and direct emissions through the finished-device factory gate. | `un-isic-rev4-3250`; `us-fda-qmsr-2026` |
| `boundary_outsourced_operations` | Contract manufacturing and sterilization | Include outsourced operations as upstream services or linked foreground processes and prevent double counting of returned device mass. | `us-fda-qmsr-2026`; `us-fda-sterilization-process-controls` |
| `boundary_sterile_route` | Products placed on the market sterile | Include the validated sterilization cycle, preconditioning, conditioning, aeration or cooling, monitoring, rejected loads, and sterile-pack integrity controls applicable to the declared method. | `eu-mdr-2017-745`; `us-fda-sterilization-process-controls` |
| `boundary_direct_emissions` | Site-controlled releases | Record measured direct releases at the elementary-flow boundary, including controlled and fugitive ethylene oxide when that route applies; do not duplicate upstream electricity or fuel emissions. | `us-epa-ethylene-oxide-neshap` |
| `boundary_excluded_lifecycle` | Default cradle-to-gate study | Exclude distribution after the factory gate, clinical use, reprocessing during use, maintenance, and end-of-life unless the declared study extends and reports those stages separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Component and material preparation | `required` | Always; record only materials and fabrication operations used by the declared bill of materials | Foreground component fabrication and preparation | kg accepted components transferred to assembly |
| `assembly_cleaning_testing` | Assembly, cleaning, and release testing | `required` | Always; cleaning chemicals and water apply only when used | Foreground assembly and product release | kg conforming device before sterilization or packaging |
| `ethylene_oxide_sterilization` | Ethylene oxide sterilization | `conditional` | Include only when the declared product is sterilized with ethylene oxide | Foreground or contracted terminal sterilization | kg accepted device released from the EtO cycle |
| `steam_sterilization` | Steam sterilization | `conditional` | Include only when the declared product is steam sterilized | Foreground or contracted terminal sterilization | kg accepted device released from the steam cycle |
| `irradiation_sterilization` | Irradiation sterilization | `conditional` | Include only when the declared product is sterilized by gamma, electron-beam, or X-ray irradiation | Contract or foreground terminal sterilization | kg accepted irradiated device |
| `packaging_release` | Packaging, labelling, and factory-gate release | `required` | Always; each packaging row applies only when present in the declared configuration | Foreground packaging and final release | 1 kg net conforming finished device at factory gate |

### Process: Component and material preparation (`component_fabrication`)

#### Inputs

##### Product flows

###### Polypropylene granulate for moulded components (`polypropylene_granulate`)

Record virgin polypropylene granulate only when polypropylene components are moulded within the foreground boundary. The Tiangong UUID remains unresolved.

- Selected flow: Polypropylene granulate
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass less unopened material returned to controlled inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources:

###### Stainless steel for metal components (`stainless_steel`)

Record stainless steel only for declared metal-component routes and disclose alloy grade and supplied form.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass / kg
- Amount rule: measured stainless-steel issue less unchanged material returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources:

###### Electricity for component fabrication (`fabrication_electricity`)

Record metered electricity for moulding, machining, forming, welding, and directly attributable fabrication auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to accepted components using machine time or validated submetering
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_utilities`
- Sources:

###### Process water for component washing (`fabrication_process_water`)

Record process water only when component washing or rinsing occurs within this process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to component washing after documented recirculation is netted once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_utilities`
- Sources:

###### Carbon dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record carbon dioxide only when it is purchased and consumed as welding shielding gas for declared components.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: cylinder or bulk-tank mass balance attributable to the declared welding route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Polypropylene fabrication waste (`polypropylene_waste`)

Record segregated polypropylene runners, sprues, rejects, and trimmings leaving this process; internal regrind reused in the same system is not a boundary output.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing polypropylene waste by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_scrap`
- Sources:

###### Stainless-steel fabrication scrap (`stainless_steel_scrap`)

Record site-generated stainless-steel offcuts, swarf, and rejected pieces leaving this process. The Tiangong UUID remains unresolved because audited candidates did not match this site-generated alloy state.

- Selected flow: Site-generated stainless-steel scrap
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing stainless-steel scrap by alloy grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_scrap`
- Sources:

##### Elementary flows

### Process: Assembly, cleaning, and release testing (`assembly_cleaning_testing`)

#### Inputs

##### Product flows

###### Isopropanol for product cleaning (`assembly_isopropanol`)

Record isopropanol only when consumed in cleaning or surface preparation and disclose purity and recovery.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: purchase-and-inventory mass balance less recovered isopropanol returned to use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_inputs`
- Sources:

###### Sodium hydroxide cleaning agent (`assembly_sodium_hydroxide`)

Record sodium hydroxide only when used in an aqueous cleaning formulation; report pure sodium-hydroxide mass and solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured solution mass multiplied by recorded sodium-hydroxide mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_inputs`
- Sources:

###### Process water for final cleaning (`assembly_process_water`)

Record process water supplied to final cleaning and rinsing, netting recirculated water once.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to the declared cleaning train
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_utilities`
- Sources:

###### Electricity for assembly and testing (`assembly_electricity`)

Record metered electricity for assembly equipment, clean-area equipment allocated to the product, leak testing, functional testing, and release inspection.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated by validated equipment time, clean-area occupancy, or submetering
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_utilities`
- Sources: `us-fda-qmsr-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater leaving cleaning and rinsing before external treatment; disclose composition, on-site treatment, and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured discharged wastewater mass after internal recirculation and before external treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

##### Elementary flows

### Process: Ethylene oxide sterilization (`ethylene_oxide_sterilization`)

#### Inputs

##### Product flows

###### Ethylene oxide sterilant (`ethylene_oxide_sterilant`)

Record purchased ethylene oxide entering the validated cycle, including preconditioning, chamber injection, and any carrier formulation allocation.

- Selected flow: Ethylene Oxide `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- Flow property / unit: Mass / kg
- Amount rule: measured injected ethylene-oxide mass allocated to the accepted product mass in the load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sterilized device
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eto_cycle`
- Sources: `us-fda-sterilization-process-controls`

###### Electricity for EtO sterilization (`eto_sterilization_electricity`)

Record electricity for preconditioning, chamber operation, abatement, aeration, and directly attributable auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to the accepted product mass in the sterilization load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sterilized device
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eto_cycle`
- Sources: `us-fda-sterilization-process-controls`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Ethylene oxide emitted to air (`ethylene_oxide_to_air`)

Record measured controlled-stack and fugitive ethylene-oxide releases without subtracting regulatory allowances; keep emission points traceable.

- Selected flow: ethylene oxide `fe0acd60-3ddc-11dd-a488-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: sum of measured or validated mass-balance releases to air for the allocated sterilization load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sterilized device
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eto_emissions`
- Sources: `us-epa-ethylene-oxide-neshap`

### Process: Steam sterilization (`steam_sterilization`)

#### Inputs

##### Product flows

###### Process steam supplied to the sterilizer (`process_steam`)

Record delivered process steam for the validated steam cycle, net of separately measured condensate returned across the boundary.

- Selected flow: Process steam `41a70607-cc98-4ae8-8556-e33cdf13157e`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered steam mass less measured condensate returned to the supplier system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sterilized device
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_cycle`
- Sources: `us-fda-sterilization-process-controls`

###### Electricity for steam sterilization (`steam_sterilization_electricity`)

Record electricity for the sterilizer, controls, vacuum, drying, cooling, and directly attributable auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to the accepted product mass in the sterilization load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sterilized device
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_cycle`
- Sources: `us-fda-sterilization-process-controls`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Irradiation sterilization (`irradiation_sterilization`)

#### Inputs

##### Product flows

###### Medical-device irradiation sterilization service (`irradiation_sterilization_service`)

Record the contracted gamma, electron-beam, or X-ray sterilization service as one declared service route. The Tiangong UUID remains unresolved.

- Selected flow: Medical-device irradiation sterilization service
- Flow property / unit: Mass / kg treated device
- Amount rule: invoiced or treatment-record mass allocated to accepted devices in the declared load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted sterilized device
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irradiation_service`
- Sources: `us-fda-sterilization-process-controls`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Packaging, labelling, and factory-gate release (`packaging_release`)

#### Inputs

##### Product flows

###### Paper box (`paper_box`)

Record paper or paperboard boxes present in the declared sales or transport-pack configuration.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured average mass for the current box specification
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `eu-mdr-2017-745`

###### Polyethylene packaging film (`polyethylene_packaging_film`)

Record polyethylene film only when it forms a pouch, wrap, or other declared packaging layer. The Tiangong UUID remains unresolved.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured average film mass for the current packaging specification
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `eu-mdr-2017-745`

###### Electricity for packaging and release (`packaging_electricity`)

Record electricity for forming, sealing, labelling, inspection, and release operations attributable to the declared product.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated by packaging-line time or output count
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_utilities`
- Sources: `us-fda-qmsr-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished medical instrument or appliance (`finished_medical_instrument`)

This is the released factory-gate reference product after applicable sterilization and packaging; packaging mass is excluded from the reference amount.

- Selected flow: Other instruments and appliances used in medical, surgical or veterinary sciences (including syringes, needles, catheters, cannulae, ophthalmic instruments and appliances n.e.c. and electro-medical apparatus n.e.c.) `01d838ad-6413-41ad-ba7a-a159be4b8a20`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net mass of conforming finished device
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared manufacturing, clean-area, sterilization, and packaging operations | Avoid allocation by submetering or subdividing processes by device family, line, cycle, or load whenever technically feasible. |  |
| `allocation_physical_driver` | Residual shared utilities and services | Allocate by the physical driver that causes consumption, such as machine time, occupied clean-area time, treated mass, chamber volume-time, packaging-line time, or tested units; document the selected driver and sensitivity. |  |
| `allocation_rejects` | Rejected products and failed sterilization loads | Assign burdens through the point of rejection to total production and normalize to accepted output; disclose rework and resterilization separately. | `us-fda-sterilization-process-controls` |
| `allocation_recycling` | Scrap and recovered materials | Use the study's declared recycling approach consistently; report gross scrap mass and destination and do not subtract an avoided-production credit directly from foreground material input. |  |
| `allocation_no_economic_default` | Multi-product sites | Do not use economic allocation unless physical subdivision or a causal physical driver is demonstrably unavailable; justify and sensitivity-test any economic allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | polypropylene granulate; stainless steel | ERP issue/return records and verified bill of materials | material identity; grade; lot; issued mass; returned mass; accepted component mass | Reconcile issued and returned material by product order | kg | Each batch or production order | A production-representative reporting period; justify shorter or discontinuous coverage | Every fabrication site in scope | Sum net issued mass by material and normalize to accepted finished-device mass | Purchase specification, lot traceability, calibrated scales, ERP reconciliation |
| `cp_component_utilities` | `component_fabrication` | electricity; process water; carbon dioxide | Submeters, machine logs, cylinder or tank records | meter start/end; machine time; water recirculation; gas stock and deliveries; accepted output | Direct metering or documented mass balance with causal allocation | kWh; kg | Each batch, shift, or meter period | Same period as production denominator | Every fabrication site in scope | Sum net use, allocate with recorded driver, then normalize | Meter calibration, utility invoices, machine logs, inventory reconciliation |
| `cp_component_scrap` | `component_fabrication` | polypropylene waste; stainless-steel scrap | Waste tickets, bins, weighbridge records | material; alloy or polymer; mass; contamination; destination; internal regrind | Weigh each segregated outgoing stream | kg | Each shipment or batch | Same period as material input | Every fabrication site in scope | Sum external boundary outputs by material and destination | Calibrated scale, waste transfer record, recycler receipt |
| `cp_assembly_inputs` | `assembly_cleaning_testing` | isopropanol; sodium hydroxide | Chemical issue, concentration, recovery, and inventory records | chemical identity; purity; solution mass; concentration; opening/closing stock; recovery | Chemical mass balance by cleaning campaign | kg | Each batch or campaign | Same period as accepted output | Every assembly/cleaning site | Calculate pure chemical consumption and normalize | Supplier certificate, formulation record, calibrated dosing record |
| `cp_assembly_utilities` | `assembly_cleaning_testing` | process water; electricity | Water and electricity submeters plus equipment logs | meter start/end; recirculation; line time; clean-area occupancy; accepted output | Direct meter or causal allocation | kg; kWh | Each batch, shift, or meter period | Same period as accepted output | Every assembly and test site | Sum net use and normalize after conversion | Meter calibration, invoices, line records |
| `cp_cleaning_wastewater` | `assembly_cleaning_testing` | wastewater | Discharge meter and treatment records | volume or mass; temperature; density; composition; internal treatment; destination | Measure each discharge or balanced treatment-system total | kg | Each batch or daily | Same period as cleaning inputs | Every discharge point in scope | Sum net boundary discharge and normalize | Flow-meter calibration, sampling results, treatment log |
| `cp_eto_cycle` | `ethylene_oxide_sterilization` | ethylene oxide; electricity | Validated cycle and utility records | product load mass; injected EtO; formulation; time; temperature; pressure; humidity; aeration; electricity; accepted and rejected mass | Capture each sterilization-cycle record and allocate only to accepted load output | kg; kWh | Each cycle | All cycles in the reporting period | Each in-house or contracted EtO facility | Sum allocated inputs and normalize to accepted sterilized mass | Approved validation, cycle chart, calibrated sensors, load-release record |
| `cp_eto_emissions` | `ethylene_oxide_sterilization` | ethylene oxide to air | Continuous monitoring, stack tests, leak surveys, or validated mass balance | vent identity; measured concentration; flow; duration; capture efficiency; fugitive release; load id | Quantify each release point with the permitted validated method | kg | Each cycle or regulatory monitoring period | Same period as EtO input | All controlled and fugitive release points | Sum direct air releases and allocate to accepted loads | Monitoring QA/QC, calibration, regulatory report |
| `cp_steam_cycle` | `steam_sterilization` | process steam; electricity | Validated cycle, steam meter, condensate meter, and electricity meter | load mass; steam in; condensate returned; cycle parameters; electricity; accepted and rejected mass | Capture each cycle and meter balance | kg; kWh | Each cycle | All cycles in the reporting period | Each steam-sterilization facility | Sum net steam and allocated electricity; normalize to accepted sterilized mass | Approved validation, calibrated meters, cycle and release records |
| `cp_irradiation_service` | `irradiation_sterilization` | irradiation sterilization service | Contract treatment and invoice records | technology; facility; load id; treated mass; dose; load allocation; accepted and rejected mass | Reconcile service records with returned released product | kg treated device | Each load | All loads in the reporting period | Every contracted or in-house irradiation facility | Sum treated mass allocated to accepted output | Dose record, service certificate, receipt and release reconciliation |
| `cp_packaging_materials` | `packaging_release` | paper box; polyethylene film | Packaging specification, issue record, and sample weighing | material identity; specification; item count; sample masses; scrap; packaged units | Weigh representative current-specification samples and reconcile issued counts | kg | Each specification change and monthly reconciliation | Same period as packaged output | Every packaging site | Average verified item mass times used count, normalized to net device mass | Approved packaging specification, calibrated scale, line reconciliation |
| `cp_packaging_utilities` | `packaging_release` | electricity | Submeter and packaging-line records | meter start/end; line time; packaged units; accepted output | Direct meter or line-time allocation | kWh | Each shift or meter period | Same period as packaged output | Every packaging site | Sum allocated electricity and normalize | Meter calibration, line log, invoice reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every non-reference inventory row | normalized amount = attributable period amount / net accepted finished-device mass in the same period | attributable flow amount; accepted net device mass | flow amount per 1 kg reference product |  |
| `calc_electricity_mj` | Electricity rows | MJ = measured kWh × 3.6 | measured kWh | electricity in MJ |  |
| `calc_solution_active_mass` | Sodium hydroxide | pure sodium-hydroxide mass = solution mass × measured or supplier-certified mass fraction | solution mass; sodium-hydroxide mass fraction | kg sodium hydroxide |  |
| `calc_water_mass` | Process water and wastewater | mass = measured volume × applicable documented density; retain both source volume and density | volume; temperature; density | kg water or wastewater |  |
| `calc_load_allocation` | Sterilization inputs, services, and emissions | allocated amount = cycle total × declared causal share of accepted product in the load | cycle total; load composition; accepted mass; causal allocation driver | amount attributable to the declared product | `us-fda-sterilization-process-controls` |
| `calc_packaging_mass` | Paper box and polyethylene film | packaging mass = verified average item mass × items used for accepted product | sample masses; used item count; accepted device mass | kg packaging per 1 kg reference product | `eu-mdr-2017-745` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Product model or homogeneous family, intended use, net mass, sterile state, reuse state, and packaging configuration shall be traceable to released production records. | Approved specification, device history or batch record, release record |
| `dq_material_completeness` | Bill of materials | Reconcile the complete net product mass by identified atomic materials; explain and conservatively model any unreconciled remainder without an umbrella inventory row. | Mass-reconciled bill of materials and supplier specifications |
| `dq_temporal_alignment` | All foreground rows | Numerators and accepted-output denominators shall cover the same period; disclose shutdowns, start-up, abnormal batches, and excluded periods. | Timestamped meters, production records, reconciliation worksheet |
| `dq_site_coverage` | Multi-site and outsourced production | Include every site and contracted operation that materially contributes to the declared factory-gate product or quantify and justify exclusions. | Site list, contracts, transfer records, coverage calculation |
| `dq_sterilization_traceability` | Sterile routes | Link each accepted load to validated cycle parameters, packaging integrity controls, monitoring, rejects, and release evidence. | Validation approval, cycle record, monitoring results, packaging integrity and release records |
| `dq_uuid_disclosure` | Unresolved flow identities | Keep the four declared UUID gaps explicit and do not substitute a proxy UUID; update only after a new direct state-100 audit. | Manifest unresolved register and task-bound search receipts |
| `dq_range_disclosure` | Important flows without external ranges | Treat the amount as foreground-required and disclose that no cross-product default or QA range is authorized until two independent compatible sources or reviewed foreground evidence exist. | Manifest range-evidence register and foreground collection records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | Reference flow | Confirm that the output is exactly 1 kg net conforming device mass and that all inventory rows use the same accepted-output denominator. |  |
| `validate_identity_and_route` | Dataset metadata and process map | Confirm one concrete device specification, material route, sterile state, sterilization method, packaging configuration, geography, and reporting period; reject a generic category average lacking these qualifiers. | `un-cpc-3-0-structure-2025`; `us-fda-qmsr-2026` |
| `validate_process_applicability` | Conditional processes and rows | Confirm each conditional material, cleaning chemical, sterilization route, and packaging item is either supported by records or explicitly not applicable; do not populate mutually exclusive sterilization routes simultaneously without documented split production. | `us-fda-sterilization-process-controls` |
| `validate_mass_reconciliation` | Materials, product, and wastes | Reconcile issued materials, returned inventory, accepted product, rejects, scrap, recovered material, and stock change; investigate unexplained imbalance. |  |
| `validate_eto_emissions` | EtO sterilization | Confirm direct EtO air releases cover controlled and fugitive points and remain separate from upstream energy emissions. | `us-epa-ethylene-oxide-neshap` |
| `validate_packaging_separation` | Reference product and packaging | Confirm packaging mass is excluded from net reference-product mass and each present packaging material is recorded separately. | `eu-mdr-2017-745` |
| `validate_no_proxy_uuid` | All UUID-bearing rows | Confirm every stored UUID matches the selected state-100 identity, flow type, property, and unit support; unresolved rows shall remain UUID-empty. |  |
| `validate_source_ranges` | Quantitative ranges | Reject any externally inferred range unless at least two mutually independent original sources have compatible system boundary, functional unit, and product state; no external ranges are authorized in this candidate PCR. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may be used as `background_dataset` only for a matching declared device specification and route |
| downstream_use | Foreground-data-package publication and downstream process or lifecyclemodel construction for cradle-to-factory-gate assessment |
| allowed_use | Comparison or modelling of the same device model or homogeneous family with compatible material, sterile-state, sterilization, packaging, geography, technology, allocation, and reference-year qualifiers |
| excluded_use | Generic substitution for all CPC 48150 products; clinical-procedure comparison without use-stage function and lifetime modelling; proxy for excluded medical-device categories; use of unresolved UUID rows as database matches |
| required_metadata | Canonical PCR id and version; product model or family; intended use; net mass; bill of materials; disposable/reusable and passive/powered states; sterile state and route; packaging configuration; sites and geography; reporting period; accepted output; allocation; data coverage; unresolved identities |
| required_quality_disclosure | Primary-data share; mass reconciliation; metering and allocation methods; site and supplier coverage; sterilization validation and monitoring basis; rejects and rework; packaging mass separation; unresolved UUIDs; absence of externally authorized ranges |
| update_trigger | Material or supplier change; product redesign; new manufacturing site or technology; sterilization or packaging change; allocation change; updated foreground year; new exact Tiangong UUID; two-source range synthesis; boundary or regulation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official English CPC 48150 classification identity and scope |
| `un-cpc-1-1-zh-2002` | `official_guidance` | United Nations Statistics Division, 产品总分类版本1.1, Series M No. 77, Ver.1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-06) | Verified professional Chinese wording for the unchanged CPC 48150 label |
| `un-isic-rev4-3250` | `official_guidance` | United Nations Statistics Division, ISIC Rev.4 class 3250 detail, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/27/3250 (retrieved 2026-09-06) | Manufacturing-scope examples, including syringes, needles, catheters, cannulae, and ophthalmic goods |
| `eu-mdr-2017-745` | `standard` | Regulation (EU) 2017/745 on medical devices, consolidated original text, https://eur-lex.europa.eu/eli/reg/2017/745/2017-05-05/eng (retrieved 2026-09-06) | Device/material qualifiers, sterile-state and sterile-packaging boundary, packaging integrity and disclosure |
| `us-fda-qmsr-2026` | `official_guidance` | U.S. Food and Drug Administration, Quality Management System Regulation (QMSR), https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr (retrieved 2026-09-06) | Finished-device market state and production-record boundary |
| `us-fda-sterilization-process-controls` | `official_guidance` | U.S. Food and Drug Administration, Sterilization Process Controls, https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/sterilization-process-controls (retrieved 2026-09-06) | Conditional sterilization process map, cycle parameters, monitoring, rejects, and packaging-integrity controls |
| `us-epa-ethylene-oxide-neshap` | `official_guidance` | U.S. Environmental Protection Agency, Ethylene Oxide Emissions Standards for Sterilization Facilities: NESHAP, https://www.epa.gov/stationary-sources-air-pollution/ethylene-oxide-emissions-standards-sterilization-facilities-0 (retrieved 2026-09-06) | Direct ethylene-oxide air-emission boundary and control-system disclosure |
