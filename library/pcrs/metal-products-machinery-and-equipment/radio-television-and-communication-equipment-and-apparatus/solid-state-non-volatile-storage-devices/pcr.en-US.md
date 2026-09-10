---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.solid-state-non-volatile-storage-devices
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Solid-state non-volatile storage devices

## 1. Scope and Applicability

This PCR supports foreground data packages for finished solid-state non-volatile storage devices supplied at the manufacturing gate. It covers devices and solid-state media that retain data without power and are delivered with the physical integration needed to record data from an external source, including generic client, enterprise, embedded, card, and comparable finished embodiments within CPC 3.0 code 47550.

The category includes finished solid-state drives, flash memory cards or flash electronic storage cards, and functionally equivalent finished solid-state non-volatile storage products. A concrete data package must identify its actual architecture and must not claim that a single capacity, interface, form factor, memory-cell technology, or application class represents the whole category.

This PCR excludes bare NAND dies or wafers, unpackaged or separately traded memory/controller integrated circuits, semiconductor fabrication intermediates, magnetic or optical recording media, hard disk drives, removable-media drives and readers, smart cards, complete data-centre storage systems, host computers, and software or recorded content. Those products require their own product identity and upstream or downstream datasets. The distinction between an included flash memory card and an excluded removable-media storage unit is that the former is the solid-state recording medium/device itself, while the latter is a reader or drive designed to accept removable media. Category interpretation follows the UN CPC explanatory notes. [`unsd-cpc-3-0-2025`]

The default data-production boundary is cradle-to-manufacturing-gate at the aggregate dataset level. Foreground collection begins with accepted purchased components and materials at the reporting site and ends with packaged conforming product at the site gate. Upstream production of NAND, controllers, other integrated circuits, printed circuit boards, substrates, connectors, enclosures, joining materials, and packaging remains in the product system through supplier-specific or representative background datasets even when it is outside the assembler's direct foreground control.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.solid-state-non-volatile-storage-devices |
| classification_refs | CPC 3.0: 47550, Solid-state non-volatile storage devices (exact scope reference) |
| covered_products | Finished solid-state non-volatile storage devices or media that record externally supplied data; generic SSD, flash memory card, flash electronic storage card, and equivalent finished embodiments |
| excluded_products | Bare NAND or controller dies/wafers/chips; semiconductor intermediates; HDDs; magnetic or optical media; removable-media readers/drives; smart cards; complete storage arrays or host computers; software or recorded content; capacity-, model-, material-, route-, or application-specific flows used as a generic category reference |
| representative_product | A mass-weighted declared production mix of conforming finished devices at the manufacturing gate, with capacity, interface/protocol, form factor, media technology, firmware state, application class, enclosure and packaging state disclosed |
| production_route | Purchased-component receipt and reconciliation; electronic/media interconnection and device assembly; firmware/configuration programming; functional test and yield control; final packaging; allocated site utilities and waste management |
| market_state | Finished, quality-released, unrecorded or factory-initialized product at the manufacturing gate; not a bare component and not a host system |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of finished solid-state non-volatile storage devices able to record data from an external source |
| How much | 1 kg net mass of conforming finished product at the manufacturing gate, excluding transport packaging unless the declared dataset intentionally includes it and reports its mass separately |
| How well | Product identity and CPC 47550 scope are satisfied; user capacity, interface/protocol and speed class, form factor, non-volatile media type/technology, firmware revision or configuration state, client/enterprise/embedded/card application class, enclosure state, and packaging state are declared |
| How long or cycle | One declared production lot or reporting period at the manufacturing gate; service life and use-stage workload are not represented by the mass reference and must be modelled separately when relevant |
| reference_flow_link | 1 kg of Solid-state non-volatile storage devices `4c208ec5-5d80-4547-ab8e-347ef5fb1caf` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Solid-state non-volatile storage devices `4c208ec5-5d80-4547-ab8e-347ef5fb1caf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | user capacity and capacity convention; interface/protocol and rated speed; form factor and dimensions; non-volatile media type and memory-cell technology where known; controller and firmware/configuration state; client, enterprise, embedded, card, or other application class; enclosure and connector state; factory-recorded content or initialization state; production geography and reporting period; product and included-packaging masses; production-mix or single-product basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. SNIA device-level reporting identifies user capacity, interface/speed, form factor, media type, firmware revision, and intended client or enterprise context as material descriptors; the same descriptors are therefore retained here without prescribing a particular performance level. [`snia-sss-pts-2-0-2`]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or otherwise reconcile the net mass of conforming finished devices. Exclude transport packaging from the 1 kg reference amount and report included primary or retail packaging separately unless the declared product flow explicitly includes it. |
| `capacity_is_qualifier` | User capacity | Declared digital storage capacity | GB or TB with decimal/binary convention stated | Capacity is a required product qualifier and calculation driver, not a substitute for the mass reference flow. Do not convert a capacity-specific result to another capacity without product-specific bill-of-materials, yield, and energy evidence. [`snia-sss-pts-2-0-2`] |
| `energy_measurement` | Electricity and fuel inputs | Energy | kWh, MJ, or source meter unit with documented conversion | Preserve source meter units and conversion factors. Separate directly metered process energy from allocated shared-facility energy and prevent double counting. |
| `water_and_gas_measurement` | Water and process gas inputs | Mass or volume at declared conditions | kg, m3, Nm3, or source meter unit | State temperature/pressure convention for gaseous volumes and density/conversion basis where mass and volume are converted. |
| `lot_to_reference_normalization` | All foreground amounts | Quantity appropriate to each flow | Row-specific unit per 1 kg reference product | Normalize only after reconciling the same reporting period's conforming net product mass, rejects, rework, and inventory changes. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_finished_device_gate` | Foreground manufacturing | Include component receipt and reconciliation, assembly/interconnection, programming or configuration, functional testing and yield disposition, finished-product packaging, and the allocated share of site utilities, abatement, wastewater and waste management needed to deliver conforming finished product at the manufacturing gate. | `eu-pef-method-2021`; `samsung-semiconductor-lca-method` |
| `boundary_upstream_component_coverage` | Purchased components and materials | NAND packages, controller and support ICs, substrates/PCBs, connectors, enclosures, joining materials, consumables, utilities, and packaging must retain upstream production through supplier-specific or representative datasets. Do not cut off semiconductor components because their physical mass is small. | `eu-pef-method-2021`; `boyd-horvath-dornfeld-nand-lca-2011` |
| `boundary_foreground_control` | Vertically integrated production | When wafer fabrication, IC packaging, PCB/substrate manufacture, connector manufacture, or enclosure manufacture is under the reporting organisation's direct control, collect it as additional foreground processes or attach disaggregated site datasets; otherwise use reviewed upstream datasets and disclose the boundary. | `eu-pef-method-2021`; `samsung-semiconductor-lca-method` |
| `boundary_use_and_end_of_life` | Downstream stages | Distribution, use-phase electricity, maintenance, service-life extension, data erasure, reuse and end-of-life are outside this manufacturing-gate foreground package unless explicitly added as separate downstream modules. A mass-based dataset alone must not support comparative storage-service claims. | `eu-pef-method-2021`; `boyd-horvath-dornfeld-nand-lca-2011` |
| `boundary_no_unreported_cutoff` | Completeness | Report all known material, energy, water, process-gas, waste and direct-emission flows. Any unavailable quantity remains a documented data gap; it is not silently treated as zero. | `eu-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted purchased components, materials and consumables at the reporting site's receiving point, with opening inventories and upstream dataset links declared |
| starting_condition_role | Foreground assembly-gate input condition for producing a cradle-to-manufacturing-gate aggregate data package |
| product_classification_scope | Finished solid-state non-volatile storage devices within CPC 3.0 code 47550; included flash cards are the recording device/media itself, not an external reader or drive |
| recursive_input_rule | If an input is itself a finished product in this same category, record its quantity once as a product input and link a separate upstream dataset; do not recursively expand the same PCR within the current foreground process |
| upstream_dataset_requirement | Every purchased semiconductor, electronic, structural, joining, utility and packaging input requires a supplier-specific or representative upstream dataset with geography, technology and time representativeness disclosed |
| disclosure | Declare ownership boundary, included sites and processes, outsourced operations, product-mix basis, component technology, capacity mix, yield/rework treatment, electricity geography and period, allocation drivers, packaging treatment, and any unresolved quantity or upstream dataset gap |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `device_assembly_and_programming` | Device assembly and programming | required | Always included for a finished device; adapt the interconnection step to card, module, board, packaged-drive, or equivalent architecture | Foreground production | Net assembled device mass transferred to testing and all associated input, scrap and direct-emission records |
| `functional_test_and_yield_control` | Functional test and yield control | required | Always included; test protocol and conditioning intensity reflect declared product/application class | Foreground conditioning and quality release | Conforming unpackaged device mass and reconciled rejected/reworked device mass |
| `finished_product_packaging` | Finished-product packaging | required | Always included; zero or reusable packaging must be explicitly demonstrated | Foreground finalization | Packaged output corresponding to 1 kg net finished device plus separately reported packaging mass |
| `site_support_and_waste_management` | Site support and waste management | required | Include only shared burdens not already directly metered to the other processes | Foreground support | Causally allocated share per 1 kg net finished reference product |

### Process: Device assembly and programming (`device_assembly_and_programming`)

#### Inputs

##### Product flows

###### Purchased non-volatile memory components (`purchased_nvm_components`)

Record all NAND packages, other non-volatile memory packages, stacked packages, or finished memory modules incorporated into the device. Bare wafer or die fabrication is an upstream product system unless it is explicitly brought into the foreground boundary.

- Selected flow: Purchased non-volatile memory components, resolved by actual component identity before publication
- Flow property / unit: Mass / kg
- Amount rule: supplier receipt and bill-of-materials mass reconciled to components issued to the production lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_and_material_records`
- Sources: `boyd-horvath-dornfeld-nand-lca-2011`; `samsung-semiconductor-lca-method`

###### Controllers and support electronics (`controller_and_support_electronics`)

Record controller ICs, power-management ICs, passive components, security or bridge devices and other populated electronics incorporated into the product.

- Selected flow: Controller and support electronic components, resolved by actual component identity before publication
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials quantity multiplied by verified component mass, reconciled to issued and returned components
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_and_material_records`
- Sources: `samsung-semiconductor-lca-method`

###### Interconnect and structural components (`interconnect_and_structural_components`)

Record the PCB or substrate, connector, enclosure, heat spreader, labels and other permanent structural parts of the finished device.

- Selected flow: Interconnect and structural components, one reviewed flow per material/component class
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials and receipt mass, corrected for opening/closing inventories and production returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_and_material_records`
- Sources: `eu-pef-method-2021`

###### Joining and assembly materials (`joining_and_assembly_materials`)

Record solder, adhesives, underfill, encapsulants, coatings, cleaning agents and other materials consumed by assembly.

- Selected flow: Joining and assembly materials, one reviewed flow per substance or formulated product
- Flow property / unit: Mass / kg
- Amount rule: purchase/issue records or line dispensing records less documented returns, normalized to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_and_material_records`
- Sources: `eu-pef-method-2021`

###### Assembly-line electricity (`assembly_line_electricity`)

Record electricity directly metered or causally assigned to placement, joining, curing, cleaning, programming and related line equipment.

- Selected flow: Electricity supply matching the site, period and voltage level
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or equipment power-time records for the reporting period, excluding shared electricity recorded under site support
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_records`
- Sources: `eu-pef-method-2021`; `samsung-semiconductor-lca-method`

##### Waste flows

#### Outputs

##### Product flows

###### Assembled and programmed device transferred to testing (`assembled_programmed_device`)

Record the mass transferred to functional testing, including work in progress carried across the reporting-period boundary.

- Selected flow: Assembled solid-state storage device before final test
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass plus closing work in progress minus opening work in progress
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_yield_rework_and_waste_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

###### Assembly scrap and material losses (`assembly_scrap_and_losses`)

Record rejected components, board/substrate scrap, solder dross, spent assembly materials and other externally treated assembly wastes separately by treatment route.

- Selected flow: Assembly waste, one reviewed waste flow per waste class and treatment route
- Flow property / unit: Mass / kg
- Amount rule: weighbridge, hazardous-waste manifest, scrap sale, or production reject record; subtract only documented internal reuse returned within the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_yield_rework_and_waste_records`
- Sources: `eu-pef-method-2021`

##### Elementary flows

###### Direct assembly emissions (`assembly_direct_emissions`)

Record each measured or permitted direct release from cleaning, joining, curing or coating as a separate elementary flow; do not duplicate releases already contained in upstream electricity or material datasets.

- Selected flow: Site-specific elementary emission to air, water or soil, resolved substance by substance
- Flow property / unit: Mass / kg
- Amount rule: stack/effluent measurement, mass balance or regulated release record attributable to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_emission_and_discharge_records`
- Sources: `eu-pef-method-2021`

### Process: Functional test and yield control (`functional_test_and_yield_control`)

#### Inputs

##### Product flows

###### Assembled devices entering test (`assembled_devices_entering_test`)

Record mass and unit count entering test, including opening and closing work in progress.

- Selected flow: Assembled solid-state storage device before final test
- Flow property / unit: Mass / kg
- Amount rule: production execution records reconciled to transferred mass and unit count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_yield_rework_and_waste_records`
- Sources: `snia-sss-pts-2-0-2`

###### Test and conditioning electricity (`test_and_conditioning_electricity`)

Record electricity for functional test, data-write/read conditioning, burn-in where applied, thermal control and test-support equipment. The test state, workload and duration must match the declared product class.

- Selected flow: Electricity supply matching the site, period and voltage level
- Flow property / unit: Energy / kWh
- Amount rule: test-cell sub-metering or tester power-time records linked to tested units and test recipes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_recipe_energy_and_result_records`
- Sources: `snia-sss-pts-2-0-2`

###### Test consumables and replacements (`test_consumables_and_replacements`)

Record sockets, fixtures, thermal-interface materials, cleaning materials and other consumables when consumed or replaced during the reporting period.

- Selected flow: Test consumables, one reviewed flow per material or component class
- Flow property / unit: Mass / kg or item count converted with measured item mass
- Amount rule: issue and replacement records allocated by tested units, tester-hours or another causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_recipe_energy_and_result_records`
- Sources: `eu-pef-method-2021`

#### Outputs

##### Product flows

###### Conforming unpackaged devices (`conforming_unpacked_devices`)

Record only quality-released finished devices. Preserve capacity, interface, form factor, media type, firmware and application-class distribution for mixed production.

- Selected flow: Solid-state non-volatile storage devices `4c208ec5-5d80-4547-ab8e-347ef5fb1caf`
- Flow property / unit: Mass / kg
- Amount rule: quality-release unit count multiplied by measured product mass and reconciled to shipment/packaging transfer records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_product_mass_and_qualifiers`
- Sources: `unsd-cpc-3-0-2025`; `snia-sss-pts-2-0-2`

##### Waste flows

###### Failed devices and test waste (`failed_devices_and_test_waste`)

Record failed devices, replaced parts and spent test consumables by final disposition. Reworked devices returned within the boundary are not external waste but must remain in the yield reconciliation.

- Selected flow: Failed electronic device and test waste, one reviewed waste flow per final disposition
- Flow property / unit: Mass / kg
- Amount rule: failure-analysis and disposition records reconciled to tested, reworked, released and scrapped unit counts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_yield_rework_and_waste_records`
- Sources: `eu-pef-method-2021`

##### Elementary flows

###### Direct test emissions (`test_direct_emissions`)

Record direct releases from test or conditioning only when they occur; use separate elementary flows by substance and receiving compartment.

- Selected flow: Site-specific elementary emission to air, water or soil, resolved substance by substance
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated release attributable to the test process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_emission_and_discharge_records`
- Sources: `eu-pef-method-2021`

### Process: Finished-product packaging (`finished_product_packaging`)

#### Inputs

##### Product flows

###### Conforming devices entering packaging (`devices_entering_packaging`)

Record the net mass of conforming devices transferred into packaging.

- Selected flow: Solid-state non-volatile storage devices `4c208ec5-5d80-4547-ab8e-347ef5fb1caf`
- Flow property / unit: Mass / kg
- Amount rule: packaging transfer records reconciled to quality-release and shipment records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_mass_and_qualifiers`
- Sources: `unsd-cpc-3-0-2025`

###### Primary, secondary and transport packaging (`packaging_material_inputs`)

Record bags, trays, reels, cards, boxes, cushioning, labels, desiccants and pallets separately by material and packaging level. Reusable packaging must include trips, losses and return logistics in its separate upstream model.

- Selected flow: Packaging material, one reviewed flow per material and packaging level
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and purchase/issue records reconciled to packed units and packaging waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_energy_and_waste_records`
- Sources: `eu-pef-method-2021`

###### Packaging-line electricity (`packaging_line_electricity`)

Record directly metered or causally allocated electricity for packaging equipment, excluding shared electricity recorded under site support.

- Selected flow: Electricity supply matching the site, period and voltage level
- Flow property / unit: Energy / kWh
- Amount rule: packaging-line meter or equipment power-time records for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_energy_and_waste_records`
- Sources: `eu-pef-method-2021`

#### Outputs

##### Product flows

###### Packaged finished reference product (`packaged_finished_reference_product`)

The reference output is 1 kg net finished device. Packaging mass is reported as a separate input and metadata value so that studies can include or exclude packaging consistently.

- Selected flow: Solid-state non-volatile storage devices `4c208ec5-5d80-4547-ab8e-347ef5fb1caf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net conforming device mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging waste (`packaging_waste`)

Record damaged, trimmed or unused packaging leaving the site by material and treatment route.

- Selected flow: Packaging waste, one reviewed waste flow per material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: waste weighing or packaging material balance for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_energy_and_waste_records`
- Sources: `eu-pef-method-2021`

##### Elementary flows

###### Direct packaging emissions (`packaging_direct_emissions`)

Record direct packaging-line releases only when present, as separate elementary flows by substance and receiving compartment.

- Selected flow: Site-specific elementary emission to air, water or soil, resolved substance by substance
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated release attributable to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_emission_and_discharge_records`
- Sources: `eu-pef-method-2021`

### Process: Site support and waste management (`site_support_and_waste_management`)

#### Inputs

##### Product flows

###### Shared site energy and fuels (`shared_site_energy_and_fuels`)

Record electricity and fuels for HVAC, dry air, compressed air, vacuum, lighting, offices and other shared services only to the extent not already directly metered to a production process.

- Selected flow: Site- and period-specific electricity and fuel supplies, one reviewed flow per supply
- Flow property / unit: Energy / kWh or MJ
- Amount rule: site meter totals minus directly assigned process consumption, allocated with documented causal drivers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_site_utility_records`
- Sources: `eu-pef-method-2021`; `samsung-semiconductor-lca-method`

###### Shared water and process gases (`shared_water_and_process_gases`)

Record shared water, nitrogen and other process gases not captured by direct line records. Semiconductor-fabrication gases belong in the supplier or vertically integrated fabrication dataset, not as unsupported assembly estimates.

- Selected flow: Water and process-gas supplies, one reviewed flow per supply
- Flow property / unit: Mass or volume / kg, m3 or Nm3 with conditions declared
- Amount rule: site meter and purchase records minus directly assigned consumption, allocated with documented causal drivers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_site_utility_records`
- Sources: `boyd-horvath-dornfeld-nand-lca-2011`; `samsung-semiconductor-lca-method`

#### Outputs

##### Product flows

##### Waste flows

###### Shared wastewater and solid waste (`shared_wastewater_and_solid_waste`)

Record shared wastewater and site wastes not already assigned to a production process, separated by composition where known and final treatment route.

- Selected flow: Wastewater or solid waste, one reviewed waste flow per waste class and treatment route
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: discharge meters, waste manifests and treatment invoices minus directly assigned process wastes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_site_utility_records`
- Sources: `eu-pef-method-2021`

##### Elementary flows

###### Shared direct site emissions (`shared_direct_site_emissions`)

Record each remaining direct air, water or soil emission after subtracting releases already assigned to production processes. Preserve substance and receiving-compartment identity.

- Selected flow: Site-specific elementary emission to air, water or soil, resolved substance by substance
- Flow property / unit: Mass / kg
- Amount rule: site monitoring or regulated release total minus directly assigned releases, allocated with the same causal drivers as the associated support activity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_emission_and_discharge_records`
- Sources: `eu-pef-method-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Multi-product lines and shared processes | First avoid allocation by sub-metering, separate production orders, process subdivision, or a documented physical expansion of the measured system. | `eu-pef-method-2021` |
| `allocation_physical_driver` | Shared site utilities, consumables and wastes | When subdivision is not feasible, use a causal physical driver such as measured equipment energy, machine-hours, test-hours, occupied area with time, material throughput, or net product mass. Explain why the driver represents resource use; do not default to revenue. | `eu-pef-method-2021` |
| `allocation_product_mix` | Multiple capacities, form factors or technologies | Retain product-specific BOM, mass, test recipe, yield and energy records where available. A production-mix dataset must be mass-weighted or production-weighted from disclosed product-specific records; do not scale solely by capacity. | `eu-pef-method-2021`; `snia-sss-pts-2-0-2` |
| `allocation_rework_and_internal_recycling` | Rework and internally returned material | Keep reworked units and internally returned material inside the foreground boundary. Count only net external inputs, conforming outputs and externally transferred wastes, while retaining gross yield and rework records for audit. | `eu-pef-method-2021` |
| `allocation_recovered_material` | Scrap sold or sent for recovery | Record the outgoing waste/material quantity and treatment route without an unreviewed avoided-burden credit in the foreground manufacturing dataset. Apply recycling or end-of-life credits only in a declared downstream method that is consistent across compared systems. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_and_material_records` | `device_assembly_and_programming` | `purchased_nvm_components`; `controller_and_support_electronics`; `interconnect_and_structural_components`; `joining_and_assembly_materials` | BOM, purchase receipt, material issue/return and inventory record | product/SKU; supplier; component/material identity; quantity; unit mass; lot; issue; return; opening/closing inventory; scrap link | Export controlled BOM and ERP/MES records; verify representative unit masses by weighing or supplier declaration | kg and item | Each production lot with monthly reconciliation | Same representative reporting period as output | All included manufacturing sites and outsourced assembly under operational control | Reconcile issued plus opening inventory minus returns and closing inventory to incorporated material and recorded loss, then normalize to conforming net product mass | Approved BOM revision, supplier specification, calibration record, ERP/MES extract and reconciliation sign-off |
| `cp_process_energy_records` | `device_assembly_and_programming` | `assembly_line_electricity` | Sub-meter, equipment runtime and power record | meter id; start/end reading; interval; equipment; recipe; runtime; tested/assembled units; voltage level | Prefer calibrated sub-metering; otherwise use measured power by operating state multiplied by logged runtime | kWh | Continuous or per lot; reconcile monthly | At least 12 representative months or justified production campaign | Each included assembly line/site | Sum direct process energy and divide by same-period conforming net product mass; exclude energy captured as shared support | Meter calibration, raw interval export, equipment log and no-double-count reconciliation |
| `cp_mass_yield_rework_and_waste_records` | `device_assembly_and_programming`; `functional_test_and_yield_control` | `assembled_programmed_device`; `assembly_scrap_and_losses`; `assembled_devices_entering_test`; `failed_devices_and_test_waste` | MES transfer, yield, rework, scrap and waste disposition record | input units/mass; good units/mass; rework loops; WIP change; reject code; waste mass; disposition; treatment route | Reconcile production orders, weigh representative products and wastes, and link external waste documents | kg and item | Each lot; monthly closure | Same reporting period as material and energy records | All included production and test operations | good output + external waste + closing WIP - opening WIP must reconcile with input and documented inventory changes within stated tolerance | Scales calibration, MES audit trail, failure analysis, waste manifest and signed mass-balance review |
| `cp_test_recipe_energy_and_result_records` | `functional_test_and_yield_control` | `test_and_conditioning_electricity`; `test_consumables_and_replacements` | Test recipe, tester log, power record, consumable issue and result record | device class; capacity; interface; firmware; media type; recipe; workload; test duration; power/energy; pass/fail/rework; consumables | Link tester and power data to serial/lot results and actual test recipe; retain deviations from standard settings | kWh, kg, item and h | Each tested lot or statistically complete automated log | Same representative reporting period as output | Each included test cell/site | Aggregate energy and consumables by actual tested population, preserving product/application class before normalizing to conforming mass | Test-system calibration, immutable recipe/version, SNIA-compatible descriptors where applicable, and traceable pass/fail log |
| `cp_finished_product_mass_and_qualifiers` | `functional_test_and_yield_control`; `finished_product_packaging` | `conforming_unpacked_devices`; `devices_entering_packaging`; `packaged_finished_reference_product` | Quality release, product master, measured mass and shipment transfer record | SKU; capacity convention; interface/protocol; speed; form factor; media type; firmware; application class; enclosure; unit mass; released units; packaging state | Export released population and product master; weigh a documented representative sample for each product family | kg and item | Each released lot; product mass rechecked after design change | Same reporting period as inventory | All products/sites included in dataset | Calculate net finished mass by qualified product family; production-mix aggregation preserves weights and qualifiers | Calibrated scale, sampling record, product specification, quality release and shipment reconciliation |
| `cp_packaging_material_energy_and_waste_records` | `finished_product_packaging` | `packaging_material_inputs`; `packaging_line_electricity`; `packaging_waste` | Packaging BOM, issue, meter and waste record | packaging level; material; unit mass; issued/returned quantity; packed units; meter readings; waste mass; reuse cycles/losses | Reconcile packaging BOM and purchases to packed output and waste; meter packaging energy where material | kg, item and kWh | Each lot with monthly reconciliation | Same reporting period as packaged output | Each included packaging location | Report packaging separately by material and level; allocate reusable packaging over evidenced trips and losses | Packaging specification, supplier declaration, scale/meter calibration, reuse log and mass balance |
| `cp_shared_site_utility_records` | `site_support_and_waste_management` | `shared_site_energy_and_fuels`; `shared_water_and_process_gases`; `shared_wastewater_and_solid_waste` | Site meter, invoice, tank/purchase and waste record | utility/fuel identity; meter; interval; quantity; directly assigned subtraction; site output; allocation driver; waste class/route | Collect site totals, subtract direct process records, and allocate residual with a documented causal driver | kWh, MJ, kg, m3 or Nm3 | Monthly | At least 12 representative months or justified campaign | Each included site | Residual shared total is allocated once; all direct and shared amounts reconcile to the site total | Invoice/meter agreement, calibration, allocation worksheet, waste manifest and management approval |
| `cp_site_emission_and_discharge_records` | `device_assembly_and_programming`; `functional_test_and_yield_control`; `finished_product_packaging`; `site_support_and_waste_management` | `assembly_direct_emissions`; `test_direct_emissions`; `packaging_direct_emissions`; `shared_direct_site_emissions` | Stack, effluent, permit, laboratory and mass-balance record | substance; compartment; source; concentration; flow; duration; abatement; uncertainty; direct-process assignment | Use measured releases where available; otherwise use a documented mass balance or regulated method and identify estimation basis | kg per substance | Per monitoring plan with reporting-period reconciliation | Same representative reporting period as output | All included emission points and discharge routes | Sum direct-process and residual shared releases once, normalized to conforming net product mass | Accredited laboratory result, calibrated monitor, permit report, abatement log and calculation audit trail |
| `cp_supplier_upstream_coverage` | `device_assembly_and_programming` | all purchased component, material, utility and packaging inputs | Supplier PCF/LCI, verified EPD, process dataset or background dataset metadata | dataset id/version; supplier/technology; geography; year; boundary; allocation; data quality; component/material match | Match each material input to a reviewed upstream dataset and document proxy hierarchy where primary supplier data are unavailable | dataset reference | At dataset build and every source update | Prefer data representative of the foreground reporting period | All purchased inputs across included sites | Coverage table must reconcile every non-zero purchased input to one upstream dataset without double counting | Supplier verification, dataset metadata, representativeness assessment and reviewer approval |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_finished_mass` | Reference normalization | net finished mass = sum(released unit count by qualified product family × verified net unit mass); exclude separately reported packaging | released units; qualified product family; sampled unit mass; packaging state | kg net finished product | `eu-pef-method-2021`; `snia-sss-pts-2-0-2` |
| `calc_inventory_normalization` | Every foreground flow | normalized amount = reporting-period flow amount / reporting-period net finished product mass | collected flow amount; `calc_net_finished_mass` output | row unit per 1 kg reference product | `eu-pef-method-2021` |
| `calc_material_reconciliation` | Components and materials | opening inventory + receipts - closing inventory - documented returns = incorporated material + recorded scrap/loss + justified inventory variance | inventory, receipt, return, BOM incorporation and waste records | reconciled input and variance by material/component | `eu-pef-method-2021` |
| `calc_yield_rework_reconciliation` | Assembly and test | input units/mass + opening WIP = conforming output + external waste + closing WIP + documented transfers; rework loops remain internal and are reported separately | input, output, WIP, rework, reject and waste records | gross yield, final yield, rework rate and unexplained balance | `eu-pef-method-2021` |
| `calc_shared_burden_allocation` | Site support | allocated burden = residual shared total × documented causal-driver share; residual shared total = site total - all direct assignments | site total; direct assignments; selected physical driver by product family/process | allocated shared utility, waste or emission amount | `eu-pef-method-2021` |
| `calc_upstream_coverage` | Purchased inputs | coverage = mass or relevant quantity of purchased inputs linked to reviewed upstream datasets / total purchased input quantity; report uncovered rows separately rather than treating them as zero | reconciled purchased-input table; upstream dataset coverage table | coverage ratio and uncovered-input list | `eu-pef-method-2021`; `boyd-horvath-dornfeld-nand-lca-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and outputs | Verify that the output is a finished CPC 47550 solid-state non-volatile storage device/media and not a bare semiconductor, magnetic/optical medium, reader/drive, storage array, host computer or capacity-specific proxy presented as the generic category. | Product master, BOM, photographs/specification, CPC scope review and exact Tiangong flow identity |
| `dq_product_qualifiers` | Product mix | Retain capacity convention, interface/protocol, speed, form factor, media type, firmware/configuration, application class, enclosure, packaging and production-mix weights for every included family. | Controlled product master and released-population extract aligned with SNIA device descriptors |
| `dq_temporal_representativeness` | Foreground records | Use at least 12 consecutive representative months unless a shorter campaign is justified; identify shutdowns, ramp-up, design transitions and abnormal yields. | Dated meter, MES, ERP, test, waste and shipment records plus representativeness justification |
| `dq_geographic_and_technology_match` | Upstream datasets | Prefer supplier/site and technology-specific datasets. Document geography, node or memory technology, packaging route, electricity mix, year and proxy limitations for semiconductor and electronic components. | Supplier dataset metadata and representativeness assessment |
| `dq_completeness` | All inventory | Reconcile BOM, energy, water, gas, product, reject, waste and emissions. Unavailable important quantities remain explicit gaps and prevent publication-ready completeness. | Signed reconciliation tables, uncovered-input list and gap register |
| `dq_measurement_quality` | Foreground measurements | Retain meter/scale identification, calibration, sampling, conversion factors, uncertainty and responsible record owner. | Calibration certificates, raw exports, sampling plan and calculation workbook |
| `dq_no_double_counting` | Direct and shared burdens | Direct process records plus residual shared allocation must reconcile to site totals; no flow may appear in both direct and shared records. | Site reconciliation and allocation worksheet |
| `dq_source_limitations` | External evidence | Do not transfer numerical values from old semiconductor technology generations, a single SSD model, or another capacity/form factor into the generic PCR. Use such evidence only for boundary, process and qualifier design unless current representative quantitative evidence is provided. | Source-use review for every external citation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference product UUID must equal `4c208ec5-5d80-4547-ab8e-347ef5fb1caf`, resolve to state-code 100 Product flow, and retain CPC 47550 identity, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. | `unsd-cpc-3-0-2025` |
| `validate_finished_product_scope` | Product identity | Reject a package whose reference product is a bare NAND/controller die, wafer, chip, semiconductor intermediate, magnetic/optical medium, removable-media reader/drive, smart card, complete storage system, host computer, software/content, or a single capacity/model flow substituted for the generic category. | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | Product metadata | Fail completeness when any required capacity, interface, form factor, media, firmware/configuration, application class, enclosure/connector, initialization, geography/period, mass, packaging or mix qualifier is missing. | `snia-sss-pts-2-0-2` |
| `validate_reference_mass` | Quantitative reference | Net conforming device output must equal 1 kg after normalization; included packaging mass must be separately visible and must not silently change the device reference mass. | `eu-pef-method-2021` |
| `validate_mass_yield_reconciliation` | Assembly and test | Flag unexplained differences among component/material inputs, work-in-progress changes, conforming output, rework and external waste. The dataset must state and justify its reconciliation tolerance. | `eu-pef-method-2021` |
| `validate_energy_and_utility_reconciliation` | Direct and shared utilities | Directly metered amounts plus residual shared allocation must equal the site total for each utility and period within the declared tolerance, with no double counting. | `eu-pef-method-2021` |
| `validate_upstream_coverage` | Purchased inputs | Every non-zero purchased component/material/utility/packaging input must link to a reviewed upstream dataset or be reported as an unresolved gap; missing low-mass semiconductor coverage is not accepted as zero. | `eu-pef-method-2021`; `boyd-horvath-dornfeld-nand-lca-2011` |
| `validate_allocation_disclosure` | Shared and multi-product processes | Require the selected causal driver, numerator, denominator, direct-assignment subtraction, product-mix weighting and justification; flag revenue-only allocation unless physical causality is demonstrably unavailable and review accepts it. | `eu-pef-method-2021` |
| `validate_no_capacity_scaling` | Cross-product use | Reject conversion between capacities, form factors, technologies or application classes based only on a GB/TB ratio. Require product-specific BOM, yield, test and energy evidence. | `snia-sss-pts-2-0-2`; `boyd-horvath-dornfeld-nand-lca-2011` |
| `validate_downstream_claims` | Comparative use | A mass-based manufacturing-gate dataset alone is incomplete for comparisons of storage service. Require a separate functional-equivalence model covering capacity convention, workload, performance, endurance/service life, use electricity and end-of-life. | `eu-pef-method-2021`; `snia-sss-pts-2-0-2` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for finished solid-state non-volatile storage devices, publishable as a disaggregated or aggregated `secondary_dataset` or `background_dataset` after review |
| downstream_use | Supply-chain modelling of finished SSD, flash-card and equivalent CPC 47550 device production; component contribution analysis; downstream device, computer, embedded-equipment or storage-service models that add their own use and end-of-life assumptions |
| allowed_use | Use for the declared capacity/form-factor/technology/application mix and manufacturing geography/period; aggregation across products only with disclosed weights and qualifier preservation |
| excluded_use | Bare NAND/chip production; magnetic/optical media or readers; storage arrays/host computers; capacity-only scaling; service-level or comparative environmental claims without functional equivalence, workload, endurance/life, use electricity and end-of-life modules |
| required_metadata | PCR id/version; reference UUID/property/unit group/unit; CPC scope; product qualifiers; product and packaging mass; production sites and period; technology and capacity mix; foreground ownership boundary; upstream dataset table; yield/rework; direct/shared utility split; allocation drivers; source versions; unresolved gaps |
| required_quality_disclosure | Temporal, geographic and technological representativeness; meter/scale calibration; BOM and mass-balance reconciliation; test-recipe coverage; upstream semiconductor dataset quality; allocation sensitivity; proxy limitations; excluded stages; data completeness and uncertainty |
| update_trigger | Material product architecture, memory technology, capacity/form-factor mix, test recipe, firmware/configuration, manufacturing site, electricity supply, BOM, yield, packaging, supplier dataset, allocation method, CPC scope, Tiangong UUID identity, or external method source change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `standard` | United Nations Statistics Division. *Central Product Classification Version 3.0: Explanatory Notes*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-08-09). | CPC 47550 identity; included solid-state non-volatile recording devices/cards; separation from magnetic/optical media, fixed/removable-media storage units, readers and other categories |
| `eu-pef-method-2021` | `official_guidance` | European Commission. *Commission Recommendation (EU) 2021/2279, Annex I: Product Environmental Footprint Method*, 16 December 2021. https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf (accessed 2026-08-09). | Functional unit, reference flow, life-cycle boundary, foreground/background distinction, data collection and quality, cut-off/completeness, multi-functionality, allocation and reporting rules |
| `snia-sss-pts-2-0-2` | `standard` | Storage Networking Industry Association. *Solid State Storage Performance Test Specification*, Version 2.0.2, 1 October 2020. https://www.snia.org/sites/default/files/2025-02/SNIA-SSS-PTS-2.0.2.pdf (accessed 2026-08-09). | Device-level scope and required capacity, interface/speed, form-factor, media, firmware and client/enterprise descriptors; test-state and workload disclosure |
| `boyd-horvath-dornfeld-nand-lca-2011` | `literature` | Boyd, S. B.; Horvath, A.; Dornfeld, D. *Life-Cycle Assessment of NAND Flash Memory*. IEEE Transactions on Semiconductor Manufacturing 24(1), 117-124 (2011). DOI: 10.1109/TSM.2010.2087395. Open accepted manuscript: https://escholarship.org/uc/item/2wr9b3t1 (accessed 2026-08-09). | NAND fabrication process and inventory significance; electricity, water, chemicals, process emissions, infrastructure and abatement coverage; warning against unsupported cross-technology or capacity extrapolation |
| `samsung-semiconductor-lca-method` | `literature` | Samsung Semiconductor. *Life Cycle Assessment: From raw materials to disposal, efforts to reduce carbon*, including third-party-validated PCF system description. https://semiconductor.samsung.com/sustainability/environment/green-technology/life-cycle-assessment/ (accessed 2026-08-09). | Current industry evidence for cradle-to-gate raw-material, manufacturing, packaging and test coverage; activity-data collection; electricity, process-gas, water and process-level reporting |
