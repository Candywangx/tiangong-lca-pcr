---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-telephone-sets-and-apparatus-for-transmission-or-reception-of-voice-images-or-oth-5b63ed57
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other telephone sets and apparatus for transmission or reception of voice, images or other data, including apparatus for communication in a wired or wireless network (such as a local or wide area network)

## 1. Scope and Applicability

This PCR applies to finished equipment whose principal product function is transmitting or receiving voice, images, or other data, including communication over wired or wireless local- or wide-area networks. The category is deliberately heterogeneous: it includes non-cordless line telephone sets, building intercom apparatus, non-cellular portable radio telephones, base stations, hubs, routers, gateways, channel-to-channel adapters, modems, radiotelegraphic apparatus, telephone switchboards, and radio-telephonic or radio-telegraphic telemetry receivers. A foreground package shall identify its actual device family and configuration; a router, switch, access point, base station, or telephone shall never be used as a proxy for the whole category.

The core reference is factory-gate production per kilogram of net finished equipment. Purchased components and modules retain their upstream burdens through linked datasets. Use, maintenance, refurbishment, and end-of-life processes are conditional extensions for cradle-to-grave studies and shall use the declared configuration, operating lifetime, traffic or duty profile, geography, and route-specific records. This PCR does not provide generic numerical defaults across device families; missing quantities require foreground collection.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-telephone-sets-and-apparatus-for-transmission-or-reception-of-voice-images-or-oth-5b63ed57 |
| classification_refs | CPC 3.0: 47223 (exact scope reference) |
| covered_products | Finished non-cordless line telephone and building intercom apparatus; non-cellular portable radio telephones; base stations; hubs, routers, gateways and other switching/routing apparatus; channel adapters; modems and access termination apparatus; radiotelegraphic apparatus; telephone switchboards; radio-telephonic or radio-telegraphic telemetry receivers; other finished voice, image or data transmission/reception apparatus within the stated boundary. |
| excluded_products | Cordless-handset line telephones (CPC 47221); cellular or other wireless-network telephone handsets (CPC 47222); broadcast transmission apparatus and cameras (CPC 47211-47215); network cards for automatic data-processing machines (CPC 45281); separately sold parts (CPC 47401); telecommunications services; standalone servers, storage, UPS, cables, antennas or site infrastructure unless supplied as integral declared components of the finished equipment. |
| representative_product | No single physical model represents the category. The representative object is the declared, production-weighted finished-equipment configuration within one named device family. |
| production_route | Purchased and/or in-house electronic, electromechanical and mechanical parts; PCBA/module integration; chassis assembly; software/firmware loading and configuration; functional and safety testing; optional packaging and factory dispatch. In-house part fabrication is included only when performed within the declared foreground boundary. |
| market_state | Finished, manufactured and functionally tested equipment at the factory gate; packaging state and included accessories are declared separately. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a declared finished apparatus configuration for transmitting or receiving voice, images or other data. |
| How much | 1 kg net mass of finished equipment, excluding separately reported packaging. |
| How well | The declared model/configuration is assembled, configured and has passed the manufacturer's release tests for its stated communication function and market. |
| How long or cycle | One declared production campaign or reporting period. Operating lifetime and use profile are required only when use or cradle-to-grave stages are added. |
| reference_flow_link | `equipment_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other telephone sets and apparatus for transmission or reception of voice, images or other data, including apparatus for communication in a wired or wireless network (such as a local or wide area network) `8b57a042-ffa4-4f3d-a5c7-556fce28e7b3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | device family; manufacturer model and configuration identifier; fixed or modular construction; installed modules and power supplies; port/interface counts, media and rated speeds; wired/wireless protocols and frequency bands where applicable; rated capacity, throughput, users or coverage where applicable; power-input type and nameplate rating; PoE input/output treatment where applicable; included antennas, batteries, handsets, cables, accessories and software/firmware; net equipment mass; packaging inclusion and mass; production geography and period; production-weighting method; factory-gate state; release-test status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all factory-gate inventory to 1 kg net finished equipment. Measure net equipment separately from packaging, removable accessories not included in the sale configuration, and shipping pallets. |
| `configuration_weighting` | multi-model or configurable production | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Build results from the actual declared model/configuration or a documented production-weighted mix. Do not average unrelated device families or use one model as a whole-category proxy. |
| `operational_energy` | conditional use stage | Energy | kWh | Calculate electricity from measured input power and time in each declared state/load bin. Record hardware/software configuration, connected ports or radio load, traffic/duty profile, supply conditions, measurement boundary, and treatment of power delivered to downstream devices. |
| `transport_service` | transport processes | Transport service | tkm | Calculate tonne-kilometres from shipped mass, route distance and mode; use chargeable mass or volume where it constrains capacity and disclose included empty returns. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, parts, modules, subassemblies and accessories at the first foreground-controlled manufacturing gate; earlier in-house fabrication is included only when explicitly declared. |
| starting_condition_role | Foreground manufacturing entry point for the actual equipment configuration. |
| product_classification_scope | Semantic scope of finished voice, image and data transmission/reception apparatus described above; classification is used as a scope reference and does not define a generic technology route. |
| recursive_input_rule | A purchased input that is itself finished equipment in this category shall be linked to a separate upstream dataset and recorded as an equipment/module input. Do not recursively decompose it with this PCR and do not substitute the broad reference flow for unidentified components. |
| upstream_dataset_requirement | Every purchased material, part, module, power supply, battery, cable, antenna and accessory with material significance or environmental significance requires an identity-matched upstream dataset or a documented data gap and sensitivity treatment. |
| disclosure | Declare device family, configuration, BOM coverage, in-house versus purchased processes, production geography/period, allocation basis, cut-offs, packaging state, included accessories, test boundary, and any conditional use, maintenance, refurbishment or end-of-life scenario. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_no_single_device_proxy` | category representation | Represent each declared device family/configuration from its own BOM and process/use records. Results for routers, switches, access points, base stations, telephones or another narrow family shall not be generalized to the entire category. | `un-cpc-v3-47223`; `etsi-es-203-199-v1-4-1` |
| `boundary_production_core` | factory-gate dataset | Include applicable parts production, PCBA/module and final assembly, configuration, release testing, packaging when declared, production yields, wastes, direct releases, energy supplies and transports within or between included stages. | `etsi-es-203-199-v1-4-1` |
| `boundary_lifecycle_extension` | cradle-to-grave extension | When the study extends beyond the factory gate, include installation, operating electricity, maintenance/spares, de-installation, transport, preparation for reuse/refurbishment and route-specific end-of-life treatment. State any omitted stage and justification. | `etsi-es-203-199-v1-4-1`; `eu-weee-directive-2012-19-eu` |
| `boundary_cutoff` | all included stages | Avoid cut-off where practicable. Any exclusion shall be checked for mass, energy and environmental significance, cumulatively documented, and included in sensitivity analysis when it could affect conclusions. | `etsi-es-203-199-v1-4-1` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `in_house_part_production` | In-house part and subassembly production | conditional | Include when PCBAs, electronic modules, enclosures, cables, power assemblies or other parts are fabricated within the foreground-controlled site. | foreground part production | kg accepted part/subassembly output |
| `equipment_assembly_and_test` | Equipment assembly, configuration and release testing | required | Always include for the declared finished-equipment configuration. | foreground manufacturing | kg tested equipment output |
| `packaging_and_factory_gate` | Packaging and factory-gate release | required | Always include; packaging inputs may be zero only when the declared reference state is unpackaged. | foreground finalization | 1 kg net finished equipment |
| `use_and_maintenance` | Equipment use and maintenance | conditional | Include for use-stage or cradle-to-grave studies. | conditional downstream use | declared operating year or lifetime, reconciled to 1 kg equipment |
| `end_of_life_treatment` | De-installation and end-of-life treatment | conditional | Include for cradle-to-grave, reuse, refurbishment or disposal scenarios. | conditional downstream treatment | kg de-installed equipment routed |

### Process: In-house part and subassembly production (`in_house_part_production`)

#### Inputs

##### Product flows

###### BOM-traced raw materials and purchased parts (`part_material_inputs`)

Record each material and purchased part separately by identity, supplier route and accepted mass when it enters an in-house part process.

- Selected flow: Foreground-selected Tiangong product flow matching each declared material or part
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: accepted quantity from receiving records and BOM reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted part or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `etsi-es-203-199-v1-4-1`

###### Part-process energy, water and process chemicals (`part_process_utilities`)

Record electricity, fuels, water, gases, plating/cleaning chemicals and other utilities as separate flows for each applicable in-house technology.

- Selected flow: Foreground-selected utility or chemical flow matching metered and purchase records
- Flow property / unit: flow-specific property and unit
- Amount rule: metered or purchase-balanced consumption allocated to accepted part output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted part or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_process_records`
- Sources: `etsi-es-203-199-v1-4-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted in-house parts and subassemblies (`in_house_subassemblies`)

These accepted intermediates leave the part process and enter equipment assembly; transferred mass is measured by batch.

- Selected flow: Foreground-defined intermediate part or subassembly flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted output transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_process_records`
- Sources:

##### Waste flows

###### In-house part scrap and treatment routes (`part_scrap`)

Scrap crosses to rework, recycling or disposal and is recorded by material, measured mass and destination.

- Selected flow: Separate Tiangong waste flow for each recorded scrap or hazardous-waste stream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed or mass-balanced scrap by material and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted part or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release_records`
- Sources:

##### Elementary flows

###### Direct releases from in-house part processing (`part_process_releases`)

Monitored emissions to air, water or soil cross the environment boundary and are recorded separately by elementary-flow identity.

- Selected flow: Separate verified Tiangong elementary flow for each monitored release
- Flow property / unit: release-specific property and unit
- Amount rule: measured release or calculated value from monitored activity and a cited factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted part or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release_records`
- Sources:

### Process: Equipment assembly, configuration and release testing (`equipment_assembly_and_test`)

#### Inputs

##### Product flows

###### Purchased and in-house components, modules and accessories (`assembly_components`)

Keep PCBAs, integrated modules, chassis/enclosures, power supplies, batteries, displays, cooling parts, cables, antennas, handsets and other included accessories as separate BOM-traced inputs.

- Selected flow: Identity-matched upstream product flow for each component or module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: accepted BOM quantity multiplied by measured or supplier-declared unit mass, reconciled to receiving and production records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg tested equipment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `etsi-es-203-199-v1-4-1`

###### Assembly consumables (`assembly_consumables`)

Consumables are incorporated, consumed or lost during assembly and are quantified from issued, returned and measured process records.

- Selected flow: Foreground-selected product flow for solder, adhesive, fasteners, cleaning agents and other consumed materials
- Flow property / unit: flow-specific property and unit
- Amount rule: issued minus returned inventory, or measured process consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg tested equipment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Assembly, configuration and test electricity (`assembly_test_electricity`)

Electricity crosses the assembly/test boundary and is obtained from submeters or a documented causal allocation of facility meters.

- Selected flow: Geography- and period-matched electricity supply flow selected in the foreground package
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption, or facility-meter consumption allocated by documented machine-hours or production time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg tested equipment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `etsi-es-203-199-v1-4-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Functionally tested equipment before packaging (`tested_equipment`)

Accepted tested equipment leaves assembly for final packaging; only units passing release criteria are included in the measured output.

- Selected flow: Foreground intermediate equipment flow matching the declared configuration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass of accepted units that pass release testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_and_tests`
- Sources:

##### Waste flows

###### Assembly rejects and failed parts (`assembly_rejects`)

Failed parts and rejected units leave assembly for rework, supplier return, recycling or disposal and are measured by final disposition.

- Selected flow: Separate waste or reusable-part flow by disposition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed rejects classified as rework, return to supplier, recycling or disposal; do not count reworked units twice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg tested equipment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_and_tests`
- Sources:

##### Elementary flows

### Process: Packaging and factory-gate release (`packaging_and_factory_gate`)

#### Inputs

##### Product flows

###### Tested equipment input (`tested_equipment_input`)

This intermediate transfers from the matched assembly output into finalization without changing identity or double-counting upstream burdens.

- Selected flow: Foreground intermediate equipment flow matching `tested_equipment`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: transferred accepted mass from equipment assembly and test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_and_tests`
- Sources:

###### Packaging materials (`packaging_materials`)

Record primary, secondary and tertiary packaging separately; enter zero only for a verified unpackaged reference state.

- Selected flow: Identity-matched packaging material or packaging product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued packaging mass reconciled to packed units and packaging waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `etsi-es-203-199-v1-4-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished equipment at factory gate (`equipment_output`)

The declared net equipment leaves the foreground production boundary after final release; its fixed mass is the quantitative reference.

- Selected flow: Other telephone sets and apparatus for transmission or reception of voice, images or other data, including apparatus for communication in a wired or wireless network (such as a local or wide area network) `8b57a042-ffa4-4f3d-a5c7-556fce28e7b3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg net finished equipment; packaging mass is excluded and reported separately
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging operation waste (`packaging_waste`)

Packaging offcuts and rejected packs leave the packing process for treatment and are weighed or calculated by material balance.

- Selected flow: Separate waste flow by packaging material and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed waste or packaging material input minus packaging shipped with accepted products
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Elementary flows

### Process: Equipment use and maintenance (`use_and_maintenance`)

#### Inputs

##### Product flows

###### Operating electricity (`operating_electricity`)

Measure the actual declared configuration across representative states or load bins; do not transfer router, switch, access-point or base-station power data to another family.

- Selected flow: Geography- and period-matched electricity supply flow
- Flow property / unit: Energy / kWh
- Amount rule: sum of measured input power in each state/load bin multiplied by time in that bin over the declared operating period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg equipment and declared operating year or lifetime
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_power_profile`
- Sources: `etsi-es-203-199-v1-4-1`; `epa-energy-star-lne-v1-1`

###### Maintenance and replacement parts (`maintenance_parts`)

Installed spares cross into the use-stage system during service and are quantified from configuration-specific maintenance records.

- Selected flow: Identity-matched replacement part, module, battery, fan, power supply or consumable flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: installed replacement quantities from service records over the declared operating period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg equipment and declared operating year or lifetime
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance_records`
- Sources: `etsi-es-203-199-v1-4-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Replaced parts and maintenance waste (`maintenance_waste`)

Removed parts cross from equipment use to reuse, recycling or disposal and are reconciled to maintenance interventions.

- Selected flow: Separate waste or reusable-part flow by disposition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: removed quantity from service records, reconciled to installed replacements
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg equipment and declared operating year or lifetime
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance_records`
- Sources:

##### Elementary flows

### Process: De-installation and end-of-life treatment (`end_of_life_treatment`)

#### Inputs

##### Product flows

##### Waste flows

###### De-installed equipment routed to treatment (`deinstalled_equipment`)

Equipment crosses from use into the declared reuse, refurbishment, recycling or disposal route and is weighed at route entry.

- Selected flow: Foreground-defined waste equipment flow matching the declared configuration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by route to reuse, refurbishment, recycling or final disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg equipment leaving the use stage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eol_routes`
- Sources: `etsi-es-203-199-v1-4-1`; `eu-weee-directive-2012-19-eu`

##### Elementary flows

#### Outputs

##### Product flows

###### Reusable equipment, parts and recovered materials (`recovered_outputs`)

Verified reusable goods and recovered materials leave treatment as product outputs and are measured by identity and destination.

- Selected flow: Separate product flow for each verified reusable equipment/part or recovered material output
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured treatment output by material and destination; credits are applied only under the declared recycling allocation method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg equipment entering treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eol_routes`
- Sources: `etsi-es-203-199-v1-4-1`; `eu-weee-directive-2012-19-eu`

##### Waste flows

###### End-of-life treatment residues (`eol_residues`)

Non-recovered residues leave treatment for final recovery or disposal and are recorded separately by waste identity and route.

- Selected flow: Separate waste flow for each residue and final route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured treatment residues after dismantling and material recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg equipment entering treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eol_routes`
- Sources: `eu-weee-directive-2012-19-eu`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared manufacturing and support processes | Avoid allocation by submetering or subdividing lines, test stations, part processes and support activities for the declared product/configuration wherever practicable. | `etsi-es-203-199-v1-4-1` |
| `allocation_physical` | unavoidable shared facility burdens | Allocate shared burdens by a causal physical driver such as machine-hours, test time, PCB area, good-die area, accepted mass, floor-time or another documented driver. Use one method consistently for all environmental loads from the common process. | `etsi-es-203-199-v1-4-1` |
| `allocation_economic_fallback` | shared burdens lacking a defensible physical relationship | Economic allocation may be used only when physical allocation is not feasible; disclose values, period, affected burdens and sensitivity to the alternative. | `etsi-es-203-199-v1-4-1` |
| `allocation_recycling` | reuse, refurbishment and recovered material | State the recycling/reuse allocation convention and life-cycle boundary explicitly. Do not count both an avoided-primary-material credit and the same recovered output without a consistent method. | `etsi-es-203-199-v1-4-1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `in_house_part_production`; `equipment_assembly_and_test` | materials, components and modules | controlled BOM, receiving record and supplier specification | part_id; revision; supplier; quantity_per_unit; unit_mass; material; included_accessory; accepted_quantity; scrap | reconcile released BOM to goods receipts, production issues and measured sample masses | kg and item | each BOM revision and campaign | complete reporting period | all included models and sites | sum accepted mass by configuration; retain separate component identities | approved BOM; scale record; supplier declaration; reconciliation log |
| `cp_part_process_records` | `in_house_part_production` | in-house parts, utilities and outputs | meter, batch ticket and production log | technology; batch; input_quantity; utility; meter_start; meter_end; accepted_output; rejects; downtime | collect by part technology and batch; allocate only shared meters with a documented driver | flow-specific | each batch with monthly reconciliation | representative period covering seasonal/route variation | every in-scope part facility | normalize to accepted part output, preserving technology route | meter calibration; batch record; yield reconciliation |
| `cp_waste_and_release_records` | `in_house_part_production` | scrap and direct releases | waste manifest, monitor and permit report | stream; quantity; destination; pollutant; concentration; volume; factor_source | weigh waste and use monitored releases; calculated releases require cited factors and activity data | flow-specific | each shipment or monitoring interval | same period as production | all included sites and outlets | sum by flow and route; no netting of recovered value | manifests; laboratory/monitor QA; permits; factor reference |
| `cp_assembly_records` | `equipment_assembly_and_test` | assembly consumables and energy | submeter, stores issue and line log | line; model; configuration; units; net_mass; kWh; consumable_issue; consumable_return; test_time | submeter preferred; otherwise allocate by causal machine/test time | kWh and flow-specific | shift or batch | representative reporting period | every included assembly/test site | aggregate by configuration then production-weight to the declared mix | calibrated meter; ERP issue/return; line record |
| `cp_production_output_and_tests` | `equipment_assembly_and_test`; `packaging_and_factory_gate` | accepted product and rejects | production count, mass and release-test record | serial_or_lot; configuration; produced; passed; reworked; rejected; net_mass; test_result | reconcile accepted output, rework and final rejects to production input | kg and item | each lot | complete reporting period | all included lines | count a unit once when finally accepted; retain rejects by disposition | release-test report; calibrated scale; reconciliation |
| `cp_packaging_records` | `packaging_and_factory_gate` | packaging and packaging waste | packaging BOM, issue and waste record | material; pack_level; mass_per_pack; units_per_pack; issue; return; waste; pallet_share | weigh representative packs and reconcile issued material to shipped packs and waste | kg | each packaging revision with period reconciliation | reporting period | all included packing sites | normalize packaging separately per kg net equipment | packaging specification; scale record; waste manifest |
| `cp_use_power_profile` | `use_and_maintenance` | operating electricity | calibrated power test or field telemetry | configuration; firmware; supply; ports; modules; radio_or_traffic_profile; state; input_power; duration; downstream_power; ambient; test_method | measure at equipment input across representative states/load bins; for eligible LNE use the documented ENERGY STAR configuration/test method or justify an equivalent | W, h, kWh | test per configuration; field bins continuously or representative sampling | declared operating year/lifetime | declared market and deployment | sum state power multiplied by time; keep downstream delivered power treatment explicit | calibration certificate; test setup; telemetry completeness; configuration record |
| `cp_maintenance_records` | `use_and_maintenance` | replacement parts and removed waste | service and spare-parts log | date; configuration; part; installed_quantity; removed_quantity; disposition; travel | reconcile service tickets to spare-parts issues and returns | kg and item | each intervention | declared operating period | declared deployment population | aggregate per configuration and operating period | service ticket; inventory record; disposition proof |
| `cp_eol_routes` | `end_of_life_treatment` | de-installed equipment and treatment outputs | de-installation, transport and recycler record | mass; route; distance; reuse_test; removed_components; recovered_material; residue; destination | follow measured consignments or a declared, region-specific scenario; keep reuse/refurbishment and waste routes separate | kg and tkm | each consignment or representative audited campaign | scenario year | declared end market | mass-balance each route from received equipment to outputs/residues | weighbridge; transport record; functionality test; recycler certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all manufacturing rows | normalized amount = period amount / accepted net finished-equipment mass | period flow amount; accepted kg | amount per 1 kg reference product | `etsi-es-203-199-v1-4-1` |
| `calc_bom_mass` | component inputs | component mass = accepted units × quantity per unit × verified unit mass; reconcile sum plus consumables, wastes and outputs | BOM; receiving; sample mass; yield | kg component per kg product | `etsi-es-203-199-v1-4-1` |
| `calc_production_mix` | multiple configurations | mix result = sum(configuration result × accepted net mass share); never combine semantically different device families without separate results | configuration inventories; accepted masses | production-weighted result | `un-cpc-v3-47223`; `etsi-es-203-199-v1-4-1` |
| `calc_use_energy` | conditional use stage | electricity = sum(input power in state/load bin × hours in bin) / 1000; state whether downstream PoE or other delivered power is included | W; hours; configuration; load profile | kWh per declared period | `etsi-es-203-199-v1-4-1`; `epa-energy-star-lne-v1-1` |
| `calc_transport` | transport | transport service = shipped mass in tonnes × route distance in km, by mode and leg | kg; km; mode; load factor | tkm | `etsi-es-203-199-v1-4-1` |
| `calc_mass_balance` | production and end-of-life | inputs = product outputs + waste outputs + measured releases ± stock change, using consistent dry/as-received basis as applicable | mass records; stock change; releases | balance and unexplained difference | `etsi-es-203-199-v1-4-1` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | Preserve exact flow identity and declare device family/configuration; no narrow device or wrong-classification proxy is acceptable for the broad reference product. | Tiangong UUID readback; BOM; model/configuration record |
| `dq_representativeness` | all foreground records | Report time, geography, technology, model mix and site coverage; explain exclusions and production weighting. | coverage table; production totals; site list |
| `dq_completeness` | BOM and process inventory | Reconcile BOM mass, accepted product, rejects, packaging and stock changes; assess mass-, energy- and environmentally significant omissions cumulatively. | reconciliation; cut-off register; sensitivity analysis |
| `dq_measurement` | meters, scales and test equipment | Use calibrated or verified instruments with traceable units and retain measurement boundary and uncertainty. | calibration/verification certificates; test setup; uncertainty statement |
| `dq_secondary_data` | upstream and scenario data | Use geography-, time- and technology-matched datasets; record source, version/year and substitution rationale. | dataset register; source references; data-quality assessment |
| `dq_power_profile` | conditional use stage | The profile shall represent the actual hardware/software configuration and declared traffic, radio, port and duty states; LNE tests shall disclose tested ports/modules and measurement setup. | power report; configuration; telemetry; `epa-energy-star-lne-v1-1` |
| `dq_eol` | conditional end-of-life | Preserve route-specific masses and evidence for reuse/refurbishment, removed hazardous components, recovery and residues. | functionality tests; recycler records; WEEE treatment evidence where applicable |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference product UUID shall be `8b57a042-ffa4-4f3d-a5c7-556fce28e7b3`, state code 100, Product flow, with Mass `93a60a56-a3c8-11da-a746-0800200b9a66` and kg from Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. |  |
| `validate_family_configuration` | category scope | Reject a package lacking device family and configuration qualifiers, or one that generalizes a router, switch, access point, base station, telephone or another narrow product to the whole category. | `un-cpc-v3-47223`; `epa-energy-star-lne-v1-1` |
| `validate_reference_amount` | factory-gate output | Net finished-equipment output shall equal 1 kg after normalization; packaging shall be reported separately and must not be embedded silently. |  |
| `validate_process_coverage` | foreground boundary | Require assembly/configuration/testing and factory-gate release, plus every applicable in-house part process. Conditional lifecycle processes shall appear whenever the claimed scope includes them. | `etsi-es-203-199-v1-4-1` |
| `validate_bom_and_mass_balance` | production inventory | Require BOM/component traceability and a documented mass balance; unresolved significant differences are findings, not automatic cut-offs. | `etsi-es-203-199-v1-4-1` |
| `validate_operational_energy` | conditional use stage | Require measured power/load-state data and time profile for the actual configuration, with explicit PoE/downstream-power boundary; borrowed narrow-family power values fail unless justified as a named scenario with sensitivity. | `etsi-es-203-199-v1-4-1`; `epa-energy-star-lne-v1-1` |
| `validate_allocation` | shared processes | Require subdivision where practicable, otherwise a causal physical allocation basis; economic fallback and sensitivity shall be disclosed. | `etsi-es-203-199-v1-4-1` |
| `validate_eol_routes` | conditional end-of-life | Require route mass balance and conditional removal/treatment of batteries, qualifying PCBAs, brominated-flame-retardant plastics, displays, external cables and other applicable components. | `eu-weee-directive-2012-19-eu` |
| `validate_data_quality` | all data | Report methodological consistency, completeness, uncertainty, representativeness, age, acquisition method, supplier independence, geography, technology and cut-off treatment. | `etsi-es-203-199-v1-4-1` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and configuration-specific foreground manufacturing dataset; conditional lifecycle extensions remain separate, explicitly linked processes. |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness, upstream links, allocation and completeness |
| allowed_use | Model production of the declared finished equipment/configuration at factory gate; aggregate only within the same device family using documented production weights; extend to use and end-of-life with configuration- and scenario-specific records. |
| excluded_use | Whole-category proxy based on one router, switch, access point, base station, telephone or model; comparison across unlike devices without equivalent function/capacity/lifetime; use-stage modelling from nameplate power alone; unidentified BOM substitution; unqualified market-average claims. |
| required_metadata | PCR id/version; reference UUID; device family; manufacturer/model/configuration; fixed/modular state; modules, ports/interfaces, protocols/bands, capacity/performance; power architecture and PoE boundary; included accessories/software; net mass and packaging; production sites/period; technology route; BOM coverage; allocation; cut-offs; geography; data sources; conditional lifetime/use/EoL scenario. |
| required_quality_disclosure | Foreground/secondary data shares; temporal, geographical and technological representativeness; configuration and production weighting; BOM and mass-balance completeness; measurement/calibration; uncertainty; cut-offs; allocation sensitivity; missing upstream datasets; use-profile and end-of-life scenario quality. |
| update_trigger | BOM, model family, chassis/module or power architecture change; material change in production route, site, supplier, yield or energy mix; firmware change affecting power; new measured use profile; market or end-of-life route change; source/standard revision; unresolved data gap becomes material. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-47223` | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-09) | Product-family inclusions/exclusions and the evidence that this is a heterogeneous category. |
| `etsi-es-203-199-v1-4-1` | standard | ETSI ES 203 199 V1.4.1 (2025-01), Methodology for environmental Life Cycle Assessment (LCA) of Information and Communication Technology (ICT) goods, networks and services, https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.04.01_60/es_203199v010401p.pdf (retrieved 2026-08-09) | BOM and part decomposition, life-cycle boundary, primary data, cut-off, allocation, use energy, maintenance, transport, end-of-life and data-quality rules. |
| `epa-energy-star-lne-v1-1` | official_guidance | U.S. EPA ENERGY STAR Product Specification for Large Network Equipment, Eligibility Criteria Version 1.1 and Test Method Rev. Jan-2016, https://www.energystar.gov/sites/default/files/ENERGY%20STAR%20LNE%20Version%201.1%20Final%20Specification.pdf (retrieved 2026-08-09) | Conditional large-network-equipment family/configuration descriptors and active/idle power-performance test records; not a proxy for other device families. |
| `eu-weee-directive-2012-19-eu` | official_guidance | Directive 2012/19/EU on waste electrical and electronic equipment (WEEE), current consolidated version available from EUR-Lex, http://data.europa.eu/eli/dir/2012/19/oj (retrieved 2026-08-09) | Conditional end-of-life functionality evidence and selective treatment of applicable batteries, PCBAs, plastics, displays, cables and other components. |
