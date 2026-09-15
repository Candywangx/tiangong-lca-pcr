---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-8d49dcd5
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for a voltage not exceeding 1,000 V

## 1. Scope and Applicability

This PCR governs foreground data packages for complete low-voltage boards, consoles, cabinets and other equipped bases that switch, protect, control or distribute electricity at a declared rated voltage not exceeding 1,000 V. It covers fixed or movable, enclosed or open assemblies for industrial, commercial, infrastructure, photovoltaic, energy-storage interconnection and residential applications when the delivered product is a complete equipped assembly.

The data package must describe the actual configuration. A bare enclosure, one switching device, one part, or one residential distribution board must not be used as a proxy for this whole heterogeneous category. The CPC voltage ceiling remains 1,000 V even where a referenced technical standard has a wider DC scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-8d49dcd5 |
| classification_refs | CPC 3.0: 46213 (exact) |
| covered_products | Complete boards, consoles, switchboards, panelboards, control cabinets and other bases equipped with switching, protection, measurement or control apparatus for declared rated voltage not exceeding 1,000 V; includes declared photovoltaic and energy-storage interconnection configurations. |
| excluded_products | Empty enclosures before apparatus is installed; individual switching, protection or connection apparatus; parts supplied separately; assemblies rated above 1,000 V; batteries, converters, inverters, transformers or external cooling equipment that are not part of the delivered equipped assembly. |
| representative_product | No category-wide default configuration. Representativeness is model- and application-specific and must be established from the declared electrical ratings, configuration, materials, protection/control functions, enclosure and operating conditions. |
| production_route | Purchased or in-house fabricated enclosure and busbars; procurement of switching/protection/control devices and auxiliaries; mechanical assembly; busbar and internal wiring; programming where applicable; inspection and factory testing; packaging and dispatch. |
| market_state | Complete factory-tested assembly at the declared dispatch gate, including installed apparatus, internal conductors, mandatory accessories and separately quantified delivery packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete, factory-tested low-voltage equipped assembly providing its declared switching, protection, control and/or distribution functions. |
| How much | The mass corresponding to one declared delivered assembly, reported through a 1 kg reference amount. |
| How well | The declared rated voltage and current, short-circuit capability, protection/control configuration, IP rating, cooling method and application. |
| How long or cycle | One declared reference service life and operating scenario; no category-wide lifetime or load profile is assumed. |
| reference_flow_link | The functional unit is linked to the total net kg of the complete assembly; the data package must state kg per delivered assembly and scale the 1 kg reference result to the declared unit. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V `961bc3fa-a52f-47fe-afc0-0abac92f5fd1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and application; AC or DC; rated voltage; rated assembly current and relevant circuit currents; declared short-circuit withstand, making or breaking ratings; indoor or outdoor use; enclosure construction and material masses; busbar material and mass; installed switching, protection, control, metering and communication configuration; IP rating; cooling method and auxiliary power; net assembly mass; delivery accessories and packaging boundary; reference service life; operating/load profile when use is modelled; production geography, technology and period; applicable verification or factory-test basis |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, test documentation or an equivalent field. Missing qualifiers make the reference flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the net mass of the complete equipped assembly and the conversion between one delivered assembly and the 1 kg reference amount. |
| `material_mass` | enclosure, busbars, installed devices, internal wiring, auxiliaries and accessories | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record component and material masses on a consistent dry, net-product basis; record packaging separately. |
| `factory_energy` | fabrication, assembly and testing energy | Energy | kWh | Use metered or invoice-reconciled energy and state the allocation to the declared model and production period. |
| `use_energy` | load losses, auxiliary controls and active cooling when use is in scope | Energy | kWh | Calculate from measured or technically calculated losses and the declared load/time scenario; do not apply a category default. |
| `service_life` | reference service life and replacements | Time | year | Declare the product-specific service life, basis, maintenance and component replacement scenario without treating a source-product lifetime as a category default. |

## 5. System Boundary

The foreground manufacturing boundary begins when purchased materials, fabricated parts and apparatus are received at the assembly site and ends with the complete tested assembly and its delivery packaging at the declared dispatch gate. Upstream production of purchased inputs is linked through separate datasets. Distribution, installation, operation, maintenance and end-of-life are separate scenario modules unless the study explicitly brings them into scope.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_assembly` | product identity | Include the enclosure or equipped base, busbars, installed switching/protection/control apparatus, internal wiring, auxiliaries, mandatory accessories, factory testing and separately quantified delivery packaging that form the declared delivered assembly. | `iec-61439-1-2020`; `iec-61439-2-2020`; `pep-psr-0005-ed3-1` |
| `boundary_factory_gate` | foreground manufacturing | Include site-controlled fabrication, finishing, assembly, wiring, programming, inspection, testing, rework, waste handling and packaging through the dispatch gate; disclose which fabrication steps are purchased rather than site-controlled. | `pep-psr-0005-ed3-1`; `abb-enviline-ess750-epd-2023` |
| `boundary_upstream_inputs` | purchased inputs | Link purchased enclosure parts, busbars, devices, electronics, cables, auxiliaries, coatings and packaging to geographically and technologically appropriate upstream datasets; do not replace them with an unqualified whole-category proxy. | `pep-psr-0005-ed3-1` |
| `boundary_downstream_scenarios` | life-cycle extensions | Keep distribution, installation, operation, maintenance, replacements and end-of-life outside the factory-gate foreground result unless explicitly included; when included, report each module separately with product-specific scenarios. | `pep-psr-0005-ed3-1`; `abb-enviline-ess750-epd-2023` |
| `boundary_category_exclusions` | category applicability | Reject empty enclosures, single apparatus and assemblies above the CPC voltage ceiling; a residential distribution board may represent only its declared subtype, not the entire category. | `un-cpc-v3-46213`; `iec-62208-2023`; `iec-61439-3-2024` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, parts, apparatus and subassemblies accepted at the declared assembly site, with supplier, geography, technology and mass records. |
| starting_condition_role | Disclosed foreground product inputs linked to upstream datasets. |
| product_classification_scope | Complete equipped assemblies within CPC 3.0 code 46213 and rated not above 1,000 V. |
| recursive_input_rule | A purchased input already classified as CPC 46213 remains an explicit same-category product input with its own mass, configuration, supplier and upstream dataset; it is not recursively expanded or silently merged with the reference output. |
| upstream_dataset_requirement | Use input-specific datasets matching material or apparatus identity, production geography, technology and period; disclose proxies and data gaps. |
| disclosure | State the dispatch gate, included accessories and packaging, purchased versus in-house fabrication, excluded life-cycle modules, and any same-category subassembly input. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication_finishing` | Enclosure and busbar fabrication and finishing | conditional | Include when sheet-metal work, busbar processing or surface finishing is controlled by the reporting site. | foreground unit process | kg accepted fabricated parts |
| `assembly_testing` | Mechanical/electrical assembly and factory testing | required | Always include for a complete equipped assembly. | foreground unit process | kg complete tested assembly |
| `packaging_dispatch` | Delivery packaging and dispatch preparation | required | Always include; report zero only with evidence of no delivery packaging. | foreground unit process | kg reference product at dispatch gate |
| `use_operation` | Operation, cooling and maintenance scenario | excluded_by_default | Include only for an explicitly declared cradle-to-grave or use-stage result. | scenario process | one declared assembly over declared service life |

### Process: Enclosure and Busbar Fabrication and Finishing (`fabrication_finishing`)

#### Inputs

##### Product flows

###### Fabrication materials and treatments (`fabrication_materials`)

Record sheet or structural metal, copper or aluminium conductor stock, coatings, chemicals and other inputs actually consumed by site-controlled fabrication.

- Selected flow: Route-specific fabrication materials and treatment inputs
- Flow property / unit: Mass / kg
- Amount rule: Accepted input mass from purchasing, stores and batch records, by material and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fabricated parts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `pep-psr-0005-ed3-1`

###### Fabrication energy (`fabrication_energy`)

Record metered electricity and fuels for cutting, punching, bending, joining, busbar processing and finishing.

- Selected flow: Site-specific electricity and fuel inputs
- Flow property / unit: Energy / kWh or fuel-specific unit
- Amount rule: Metered use allocated to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fabricated parts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy`
- Sources: `pep-psr-0005-ed3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fabricated enclosure and busbars (`fabricated_parts`)

Record accepted parts transferred to assembly; keep enclosure steel or aluminium and copper or aluminium busbar masses separately identifiable.

- Selected flow: Fabricated enclosure, base and busbar subassembly
- Flow property / unit: Mass / kg
- Amount rule: Accepted mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per fabrication batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `iec-61439-1-2020`

##### Waste flows

###### Fabrication scrap and treatment waste (`fabrication_waste`)

Record metal scrap, spent treatment materials and other process waste by material and actual destination.

- Selected flow: Route-specific fabrication waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste by type and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fabricated parts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_waste`
- Sources: `pep-psr-0005-ed3-1`

##### Elementary flows

###### Direct fabrication and finishing releases (`direct_fabrication_releases`)

When site-controlled finishing produces direct releases, record measured or mass-balance-derived air and water emissions individually; do not represent treatment waste as an elementary flow.

- Selected flow: Substance-specific direct air or water release
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented material balance for the declared fabrication batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fabricated parts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_releases`
- Sources: `pep-psr-0005-ed3-1`

### Process: Mechanical/Electrical Assembly and Factory Testing (`assembly_testing`)

#### Inputs

##### Product flows

###### Installed bill of materials (`installed_bom`)

Record the mass and quantity of the enclosure/base, busbars, switching and protection devices, control and metering electronics, communication devices, internal wires and connectors, insulation, auxiliaries, active-cooling equipment, fasteners and mandatory accessories by part and material.

- Selected flow: Configuration-specific installed components and materials
- Flow property / unit: Mass / kg
- Amount rule: Net installed mass reconciled from the as-built bill of materials, part weights and measured assembly mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg complete tested assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `pep-psr-0005-ed3-1`; `abb-enviline-ess750-epd-2023`

###### Assembly and test energy (`assembly_test_energy`)

Record electricity and other energy for assembly, wiring, programming, inspection, testing and rework.

- Selected flow: Site-specific assembly and test energy
- Flow property / unit: Energy / kWh
- Amount rule: Metered or invoice-reconciled energy allocated to the declared model and production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg complete tested assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `pep-psr-0005-ed3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete tested assembly (`tested_assembly`)

Record the configured assembly that has passed the declared factory inspection and verification basis.

- Selected flow: Complete factory-tested low-voltage equipped assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured net assembly mass excluding delivery packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per completed assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_test`
- Sources: `iec-61439-1-2020`; `iec-61439-2-2020`

##### Waste flows

###### Assembly rejects and production waste (`assembly_waste`)

Record rejected components, wire and busbar offcuts, damaged electronics, consumables and incoming packaging waste without netting recycling credits from the input inventory.

- Selected flow: Configuration-specific assembly and test waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste by type, cause and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg complete tested assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste`
- Sources: `pep-psr-0005-ed3-1`

##### Elementary flows

### Process: Delivery Packaging and Dispatch Preparation (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Tested assembly input (`tested_assembly_input`)

Transfer the net tested assembly without changing its mass or configuration.

- Selected flow: Complete factory-tested low-voltage equipped assembly
- Flow property / unit: Mass / kg
- Amount rule: Equal to the accepted output of `assembly_testing`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per delivered assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_reconciliation`
- Sources:

###### Delivery packaging and accessories (`delivery_packaging`)

Record wood, cardboard, paper, plastics, pallets, corrosion protection, restraints and separately delivered mandatory accessories by material and mass.

- Selected flow: Delivery packaging and separately delivered mandatory accessories
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by packaging material and accessory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per delivered assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `pep-psr-0005-ed3-1`; `abb-enviline-ess750-epd-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product at dispatch gate (`reference_product`)

Output the complete assembly at the declared gate. Packaging mass is linked but excluded from the 1 kg net-product reference amount.

- Selected flow: Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net complete assembly; state kg and packaging kg per delivered assembly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product at dispatch gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_reconciliation`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Operation, Cooling and Maintenance Scenario (`use_operation`)

#### Inputs

##### Product flows

###### Operational electricity and replacements (`use_energy_replacements`)

When a use-stage result is requested, record losses of conductors and installed apparatus, auxiliary/control power, active cooling, declared maintenance and replacements for the actual load and lifetime scenario.

- Selected flow: Scenario-specific electricity, maintenance materials and replacement components
- Flow property / unit: Energy / kWh and Mass / kg
- Amount rule: Calculated from declared loss measurements or technical calculations, auxiliary/cooling power, operating profile, service life and replacement records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared assembly over declared reference service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario`
- Sources: `pep-psr-0005-ed3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all foreground processes | Subdivide fabrication, assembly, testing and packaging by line, batch or model before allocating shared burdens. | `pep-psr-0005-ed3-1` |
| `allocation_physical_driver` | shared energy, consumables and waste | Use direct metering, machine time, tested-unit count, processed material mass or another documented causal physical driver; use product mass only when it represents the causal relationship. | `pep-psr-0005-ed3-1` |
| `allocation_economic_exception` | residual shared burdens | Economic allocation is not a default; use it only when subdivision and causal physical allocation are infeasible, and disclose the values, period, sensitivity and reason. | `pep-psr-0005-ed3-1` |
| `allocation_recycling_separation` | scrap, recycling and recovery | Record waste destinations and any recycling or recovery model separately; do not subtract anticipated recycling benefits from virgin or recycled input quantities and do not double count recovered-material credits. | `pep-psr-0005-ed3-1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `fabrication_finishing` | fabrication materials and accepted parts | fabrication BOM and purchasing/stores record | model; part number; supplier; material/grade; quantity; unit mass; input mass; accepted-part mass; enclosure mass; busbar mass; recycled-content claim | Reconcile controlled fabrication BOM, drawings, scales and supplier declarations to the accepted batch. | kg, item | each model/revision and representative fabrication batch | declared production period | each reporting site and outsourced fabricator | Sum input and accepted mass by material and grade; keep enclosure and busbar materials separate. | approved fabrication BOM; weighing record; supplier declaration |
| `cp_assembly_bom` | `assembly_testing` | installed BOM | as-built BOM and component record | model; part number; supplier; function; material; quantity; unit mass; installed mass; enclosure mass; busbar mass; device/electronics mass | Reconcile controlled BOM, drawings, part weights and scale records to the as-built unit. | kg, item | each model/revision and representative production lot | declared production period | each reporting assembly site | Sum installed mass by material and functional group; keep enclosure, busbars, devices, electronics, wires, cooling and accessories separate. | approved BOM revision; weighing record; supplier declaration |
| `cp_fabrication_energy` | `fabrication_finishing` | fabrication energy | meter, submeter, equipment log or invoice | meter boundary; start/end reading; energy carrier; fabrication activity; operating time; model; lot; accepted output mass; allocation driver | Prefer process submetering; reconcile with site invoices and fabrication records. | kWh or carrier-specific unit | each lot or no less frequently than the available meter/invoice period | representative declared fabrication period | each reporting fabrication site | Subtract unrelated loads and allocate remaining use to accepted fabricated-part output with the rule in section 7. | meter calibration/status; invoice reconciliation; production log |
| `cp_assembly_energy` | `assembly_testing` | assembly and testing energy | meter, submeter, equipment log or invoice | meter boundary; start/end reading; energy carrier; assembly/test activity; operating time; model; lot; tested output mass; allocation driver | Prefer process submetering; reconcile with site invoices and assembly/test records. | kWh or carrier-specific unit | each lot or no less frequently than the available meter/invoice period | representative declared assembly period | each reporting assembly site | Subtract unrelated loads and allocate remaining use to complete tested output with the rule in section 7. | meter calibration/status; invoice reconciliation; production log |
| `cp_fabrication_waste` | `fabrication_finishing` | fabrication waste | scale ticket and waste transfer record | fabrication activity; material; hazard class; gross/tare/net mass; destination; treatment; date; lot | Reconcile fabrication waste logs with transporter or treatment records. | kg | each shipment and fabrication period | same period as fabrication inventory | each reporting fabrication site | Sum by material and actual treatment destination; do not net against inputs. | scale ticket; transfer note; treatment evidence |
| `cp_assembly_waste` | `assembly_testing` | assembly and testing waste | scale ticket and waste transfer record | assembly/test activity; material; hazard class; gross/tare/net mass; destination; treatment; date; lot | Reconcile assembly/test waste logs with transporter or treatment records. | kg | each shipment and assembly period | same period as assembly inventory | each reporting assembly site | Sum by material and actual treatment destination; do not net against inputs. | scale ticket; transfer note; treatment evidence |
| `cp_direct_releases` | `fabrication_finishing` | direct air and water releases | stack/wastewater measurement or material-balance record | substance; compartment; measurement boundary; concentration; volume or mass; batch; method; date | Use site measurement where available; otherwise use a documented input-output material balance without converting waste transfers into emissions. | kg | each monitored period or fabrication batch | same period as fabrication inventory | each reporting finishing site | Sum each substance and compartment separately and normalize to accepted fabricated-part output. | laboratory or meter record; calculation and balance closure |
| `cp_configuration_test` | `assembly_testing` | ratings, configuration and tested assembly | approved design, nameplate and test record | model; serial/lot; AC/DC; rated voltage/current; circuit ratings; short-circuit ratings; IP; enclosure/busbar materials; protection/control list; cooling; auxiliary power; dimensions; net mass; test basis/result | Extract from controlled engineering and factory-test records and reconcile to the shipped configuration. | declared engineering units and kg | each model/revision and tested lot | current declared model and production period | each reporting site | Do not average unlike configurations unless the product mix and weighting are reported. | approved drawing; nameplate; design verification; routine/factory test record |
| `cp_packaging` | `packaging_dispatch` | delivery packaging and accessories | packing specification and weighing record | packaging material; quantity; mass; reusable status; accessory identity/mass; destination | Weigh or calculate from controlled packing specifications and verify against shipments. | kg per assembly | each packing design/revision and representative shipment | declared shipping period | each dispatch site | Sum by packaging material; keep packaging and separately delivered accessories distinct from net product mass. | packing list; scale record; packaging specification |
| `cp_mass_reconciliation` | `packaging_dispatch` | mass balance and reference output | BOM, scale and transfer record | installed material mass; net tested mass; accessory mass; packaging mass; rework/reject mass; delivered mass | Reconcile as-built BOM and process transfers to calibrated scale records. | kg | each model/revision and representative lot | same period as BOM and production data | each reporting site | Explain all residual differences; do not force an unexplained residual into an unspecified material. | signed reconciliation; calibration evidence; variance investigation |
| `cp_use_scenario` | `use_operation` | use losses, auxiliaries, cooling, life and replacements | type/routine test, engineering calculation, operating profile and maintenance record | load points; current; voltage; power loss; auxiliary/cooling power; hours by load; ambient condition; service life; maintenance; replacement type/count; grid geography | Use applicable-standard measurement, laboratory report, engineering calculation or manufacturer data and document the chosen scenario. | W, kWh, h, year, item, kg | each declared use scenario and model revision | declared service life | declared application and geography | Integrate losses and auxiliary/cooling demand over declared hours; keep replacement inventory explicit. | test/calculation report; scenario justification; maintenance plan |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_scaling` | reference product | reference result per assembly = result per kg × net kg per delivered assembly | 1 kg reference result; measured net assembly mass | result per delivered assembly |  |
| `calc_material_reconciliation` | complete assembly | net assembly mass = sum of installed enclosure/base, busbars, apparatus, electronics, wiring, auxiliaries, cooling, fasteners and mandatory accessory masses; investigate and disclose any residual | as-built BOM; part weights; measured net mass | reconciled material inventory and residual disclosure | `pep-psr-0005-ed3-1` |
| `calc_factory_energy_intensity` | fabrication and assembly/testing | allocated process energy per kg = process energy assigned to the declared model or lot ÷ accepted kg output | energy record; production record; allocation driver | kWh per kg process output | `pep-psr-0005-ed3-1` |
| `calc_waste_intensity` | production waste | waste per kg = waste mass attributed to the declared process/model ÷ accepted kg process output | waste records; accepted output mass | kg waste per kg output by type and destination |  |
| `calc_use_energy` | optional use stage | use energy = sum over declared load states of measured or calculated assembly loss × hours + auxiliary/control power × hours + active-cooling power × hours; add explicit replacement inventories | loss data; auxiliary/cooling demand; load/time profile; life; replacements | kWh and replacement inventory per declared assembly life | `pep-psr-0005-ed3-1` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | product identity | Data must describe one declared model/configuration or a transparent production mix; all electrical, enclosure, busbar, protection/control, IP, cooling and delivery qualifiers must match it. | controlled design, BOM, nameplate and test records |
| `dq_mass_completeness` | material inventory | Reconcile installed material groups to measured net assembly mass and disclose the value and cause of every unresolved residual. | signed mass reconciliation and variance investigation |
| `dq_temporal_site` | foreground data | Use a declared representative production period and identify every assembly, fabrication and dispatch site; disclose exceptional downtime, rework or product-mix effects. | dated meters, invoices, production and shipment records |
| `dq_upstream_match` | purchased inputs | Match upstream data to material/apparatus identity, geography, technology and time; disclose every proxy and why it is the closest available choice. | supplier evidence, dataset metadata and proxy register |
| `dq_use_scenario` | optional use stage | Tie losses, auxiliary/cooling demand, load profile, service life, maintenance and replacements to the declared configuration; do not substitute a product-specific published scenario as a category default. | test/calculation report and scenario justification |
| `dq_source_traceability` | all calculated values | Preserve source record identifiers, transformations, allocation drivers, units and reviewer-reproducible calculations. | calculation workbook or controlled data pipeline with lineage |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_voltage` | product identity | Confirm the dataset is a complete equipped assembly in CPC 46213 and its declared rated voltage does not exceed 1,000 V; reject an empty enclosure, individual apparatus, part or higher-voltage assembly. | `un-cpc-v3-46213`; `iec-62208-2023` |
| `validate_reference_identity` | reference flow | Confirm product flow `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and kg, without embedding dataset versions. |  |
| `validate_qualifiers` | reference flow | Confirm every required qualifier is present and consistent with the controlled design, nameplate, BOM and test record. | `iec-61439-1-2020`; `iec-61439-2-2020` |
| `validate_mass_balance` | material inventory | Confirm installed material groups reconcile to measured net product mass; flag and disclose every unexplained residual rather than inserting an unspecified default. | `pep-psr-0005-ed3-1` |
| `validate_process_boundary` | foreground processes | Confirm all site-controlled fabrication, assembly, testing, rework, waste handling and packaging are included and purchased processes are disclosed and linked upstream. | `pep-psr-0005-ed3-1` |
| `validate_energy_allocation` | factory energy | Confirm meter/invoice reconciliation, excluded unrelated loads and the documented physical allocation driver for the declared model and period. | `pep-psr-0005-ed3-1` |
| `validate_waste_destinations` | waste | Confirm production waste mass, type and actual destination are recorded without netting recycling credits from inputs. | `pep-psr-0005-ed3-1` |
| `validate_use_scenario` | optional use stage | When use is reported, confirm losses, auxiliary/control and cooling energy, load/time profile, service life, maintenance, replacements and grid geography are configuration-specific and separately disclosed. | `pep-psr-0005-ed3-1` |
| `validate_no_proxy_extrapolation` | representativeness | Reject a claim that an empty cabinet, one switching device, one residential distribution board or one photovoltaic/energy-storage model represents the full category without a declared and weighted product mix. | `iec-62208-2023`; `iec-61439-3-2024`; `abb-enviline-ess750-epd-2023` |
| `validate_source_lineage` | all reported values | Confirm every foreground value and calculation is linked to its collection record, unit, period, site and transformation; sources support rules only and are not used as unreviewed default quantities. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset |
| allowed_use | Configuration-specific factory-gate datasets for complete CPC 46213 assemblies, and explicitly separated distribution, installation, use, maintenance and end-of-life scenario extensions. |
| excluded_use | Empty enclosures; individual devices or parts; assemblies above 1,000 V; unqualified category-average claims; extrapolation of one residential, photovoltaic or energy-storage assembly to the whole category. |
| required_metadata | PCR id; CPC code; reference-flow UUIDs; model and application; AC/DC; rated voltage/current and short-circuit ratings; configuration; enclosure and busbar materials; protection/control functions; IP; cooling and auxiliary power; net mass; packaging/delivery boundary; service life; geography; technology; period; sites; allocation; scenario modules. |
| required_quality_disclosure | BOM and mass reconciliation; foreground metering and allocation; waste destinations; upstream dataset matches and proxies; factory-test basis; product-mix weighting; optional use/lifetime/replacement assumptions; data gaps and reviewer-reproducible lineage. |
| update_trigger | Design or BOM revision; changed ratings, enclosure/busbar material, device/control configuration, IP or cooling; changed production route/site/energy mix; changed packaging/delivery boundary; changed service-life or use scenario; materially improved supplier or foreground evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-46213` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, class 46213 and adjacent classes, https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf (retrieved 2026-08-08) | category identity, voltage ceiling and exclusions |
| `iec-61439-1-2020` | standard | IEC 61439-1:2020, Low-voltage switchgear and controlgear assemblies - Part 1: General rules, https://webstore.iec.ch/en/publication/32338 (retrieved 2026-08-08) | assembly characteristics, construction and verification qualifiers |
| `iec-61439-2-2020` | standard | IEC 61439-2:2020, Low-voltage switchgear and controlgear assemblies - Part 2: Power switchgear and controlgear assemblies, https://webstore.iec.ch/en/publication/30043 (retrieved 2026-08-08) | assembly scope, applications, IP and active-cooling declarations |
| `iec-61439-3-2024` | standard | IEC 61439-3:2024, Distribution boards intended to be operated by ordinary persons, https://webstore.iec.ch/en/publication/68496 (retrieved 2026-08-08) | residential distribution-board subtype boundary |
| `iec-62208-2023` | standard | IEC 62208:2023, Empty enclosures for low-voltage switchgear and controlgear assemblies - General requirements, https://webstore.iec.ch/en/publication/67906 (retrieved 2026-08-08) | exclusion of empty enclosures |
| `pep-psr-0005-ed3-1` | official_guidance | PEP ecopassport, PSR-0005-ed3.1-EN-2023 06 06, Specific Rules for Electrical Switchgear and Control Gear Solutions, https://register.pep-ecopassport.org/documents/public/PSR-0005-EN (retrieved 2026-08-08) | boundary, inventory completeness, allocation, use-energy method and data quality |
| `abb-enviline-ess750-epd-2023` | dataset | ABB, Enviline ESS 750 Energy Storage System, verified EPD NEPD-4756-4011, https://www.epd-norge.no/getfile.php/1342230-1691345766/EPDer/Byggevarer/NEPD-4756-4011_Enviline----ESS-750-----Energy-Storage-System.pdf (retrieved 2026-08-08) | non-default evidence for material/process decomposition and product-specific scenario variability |
