---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-apparatus-for-switching-or-protecting-electrical-circuits-or-for-making-conn-673753bb
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Electrical Apparatus for Switching, Protecting, or Connecting Circuits Above 1000 V

## 1. Scope and Applicability

This PCR covers complete individual electrical apparatus whose declared product function is switching, protecting,
isolating, earthing, voltage limiting, or making an electrical connection in a circuit with a rated voltage exceeding
1 000 V. It supports foreground data production for medium- and high-voltage apparatus used in grids, substations,
and renewable-generation or storage interconnections. Covered technologies include, where sold as individual
apparatus, circuit-breakers, switches, disconnectors, earthing switches, fuses and switch-fuse combinations, surge or
voltage-limiting protective devices, and terminals or connectors.

The PCR is technology-neutral across air, vacuum, liquid, solid, and gas insulation or interruption. A data package
shall identify the actual apparatus type and technology; it shall not use a gas-insulated switchgear example as a proxy
for the whole category. The reference dataset is cradle-to-gate at the manufacturing plant. Installation, operation,
maintenance, refurbishment, and end-of-life are outside that reference boundary, but the service-life and maintenance
facts needed to construct those downstream scenarios are mandatory disclosures.

Complete metal-enclosed switchgear or controlgear assemblies, equipped boards, consoles, cabinets, prefabricated
substations, and other system assemblies are excluded. Apparatus rated at or below 1 000 V, empty housings, bare
conductors and cables, transformers, and installation services are also excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-apparatus-for-switching-or-protecting-electrical-circuits-or-for-making-conn-673753bb |
| classification_refs | CPC 3.0: 46211 (exact) |
| covered_products | Complete individual switching, protection, isolation, earthing, voltage-limiting, and connection apparatus with rated voltage exceeding 1 000 V, including circuit-breakers, switches, disconnectors, earthing switches, fuses or switch-fuse combinations, surge protective devices, terminals, and connectors when sold as apparatus. |
| excluded_products | Complete equipped switchboards, switchgear/controlgear assemblies, cabinets, consoles, and prefabricated substations; apparatus rated at or below 1 000 V; empty enclosures; conductors and cables; transformers; installation services; and parts that do not independently perform the declared switching, protection, or connection function. |
| representative_product | A complete individual medium- or high-voltage switching, protection, or connection apparatus at the plant gate, specified by apparatus type and technology rather than by an assembled switchgear cabinet. |
| production_route | Supplier materials and components; in-house contact, conductor, insulation, mechanism, or terminal preparation where applicable; assembly and sealing or medium charging; factory routine testing; packing and dispatch. |
| market_state | Finished, manufactured, tested apparatus at the producing plant gate, before installation or integration into a switchgear assembly or substation. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of finished individual apparatus for switching, protecting, isolating, earthing, voltage limiting, or connecting a circuit rated above 1 000 V. |
| How much | 1 kg net mass of finished apparatus at the plant gate, excluding separately reported transport packaging. |
| How well | The dataset shall declare apparatus function and type, AC or DC application, rated voltage, rated continuous current where applicable, making/breaking duty and short-circuit withstand where applicable, insulation and interruption technology, sealing design, and applicable product standard. |
| How long or cycle | One production-period output normalized to 1 kg. Comparative downstream use shall additionally declare designed service life, mechanical/electrical endurance or operating-cycle basis, maintenance interval and scope, and replacement or medium-refill scenario. |
| reference_flow_link | The mass-normalized reference flow represents production inventory only; convert to an item or service-life function using the measured net item mass and the declared performance, endurance, life, and maintenance profile. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Electrical apparatus for switching or protecting electrical circuits, or for making connexions to or in electrical circuits, for a voltage exceeding 1000 V `cf33015b-81bb-4bdf-8080-72e23c262f73` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | apparatus type and switching/protection/connection function; rated voltage and AC/DC system; rated frequency for AC apparatus; rated continuous current where applicable; rated short-circuit breaking and making duty where applicable; rated short-time and peak withstand current where applicable; insulation and interruption medium with chemical identity or technology; sealed-pressure or refillable design and declared leakage performance where applicable; net product mass; contact and conductor material identities and masses; other material-family masses; designed service life; mechanical/electrical endurance or operating-cycle basis; maintenance schedule, replaceable parts and medium top-up; factory medium charge and test-release records where applicable; applicable product standard; production geography and technology; packaging scope |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset
metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing
required qualifiers make the reference flow definition incomplete for that data package. A rated value that does not
apply to the selected apparatus type shall be marked `not_applicable` with the apparatus-specific reason; it shall not
be silently omitted or recorded as zero.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured net finished-product mass. Normalize foreground quantities to 1 kg net apparatus and report transport packaging separately. |
| `item_to_mass` | Item-based production, sales, test, and maintenance records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item records using measured net mass by model or declared configuration. Retain item count, configuration, measured mass, and conversion calculation. |
| `medium_mass_balance` | Fillable insulating or interruption media | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each gas or liquid by chemical identity or mixture and reconcile opening inventory, acquisitions, returns, product charge, off-site recycling/destruction, closing inventory, and measured transfers. Unreconciled loss is a direct release, not a zero flow. |
| `performance_units` | Nameplate and test performance | Declared engineering property | Original test or nameplate unit | Preserve the units and test basis used for rated voltage, current, breaking/making duty, short-time and peak withstand, leakage, endurance, and service life. Do not convert a missing rating into zero. |
| `service_profile_conversion` | Downstream item- or service-life comparison | Mass and declared service descriptors | kg per item or declared service | Convert the 1 kg production result only with measured model mass and a disclosed service-life, endurance, loading, maintenance, replacement, and leakage scenario. Mass-only results shall not be presented as performance-equivalent comparisons. |

## 5. System Boundary

The reference system includes foreground operations from receipt of materials, components, insulating or interruption
media, and utilities at the manufacturing site through component preparation performed by the manufacturer,
assembly, sealing or filling, routine factory testing, packing, and release of the finished apparatus at the plant gate.
Upstream production of purchased metals, contact materials, conductors, ceramics, polymers, composites, electronics,
mechanisms, media, utilities, and packaging remains linked through supplier- and technology-specific background
datasets. Capital goods are included only when required by the declared study framework and shall then be disclosed.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | Reference production dataset | Include all manufacturer-controlled preparation, assembly, sealing or medium charging, factory testing, packing, rejects, wastes, and direct releases up to plant-gate release. Link purchased inputs to upstream datasets rather than treating them as burden-free. | `iec-ts-62271-320-2025`; `iso-14044-2006` |
| `boundary_category_identity` | Product scope | Include only individual apparatus rated above 1 000 V that performs the declared switching, protection, isolation, earthing, voltage-limiting, or connection function. Exclude complete equipped switchgear/controlgear assemblies and cabinets. | `iec-62271-1-2017-amd1-2021`; `iec-62271-200-2021-amd1-2024` |
| `boundary_medium_accounting` | Gas- or liquid-insulated/interrupted apparatus | Include medium acquisition, charging, recovery, recycling or destruction transfers, releases during filling and factory tests, and medium contained in the delivered apparatus. Keep each medium or mixture chemically distinct. | `iec-62271-4-2022`; `us-epa-40-cfr-98-subpart-ss` |
| `boundary_downstream_scenarios` | Installation, use, maintenance, refurbishment, and end-of-life | Exclude downstream stages from the reference production result, but retain the product-specific service life, endurance, maintenance, replacement, contained-medium, leakage-performance, recovery, and material-disassembly facts needed to model them separately. | `iec-ts-62271-320-2025`; `iec-62271-4-2022` |
| `boundary_market_regulation` | Jurisdiction-specific downstream use | Apply current market rules only when the declared geography makes them applicable. For an EU scenario, disclose the insulating or breaking medium, GWP information, charge, leakage label or monitoring basis, commissioning date, voltage/current class, and any documented derogation; do not generalize EU restrictions as global default values. | `eu-regulation-2024-573` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt at the manufacturing site of supplier-specific metals, contact and conductor materials, insulation components, mechanisms, electronics, terminals, insulating or interruption media, utilities, and packaging, each with quantity and upstream dataset reference. |
| starting_condition_role | Foreground entry condition for manufacturer-controlled production; upstream extraction, refining, component production, and utility generation are represented by linked background datasets. |
| product_classification_scope | Individual apparatus within CPC 3.0 code 46211 and rated above 1 000 V; not complete equipped boards, cabinets, switchgear assemblies, or substations. |
| recursive_input_rule | A purchased input that itself falls within this product category shall use a supplier-specific upstream dataset or an explicitly separated earlier manufacturing process; the finished reference product flow shall never be reused as its own undifferentiated input. |
| upstream_dataset_requirement | Use geography-, technology-, and material-specific datasets for contact and conductor metals, structural metals, ceramics, polymers or composites, electronic/mechanical subassemblies, insulating or interruption media, electricity and fuels, and packaging. Disclose proxies and aggregation. |
| disclosure | Declare apparatus type, applicable standard, rated voltage/current and duty, insulation/interruption medium and sealing, contact/conductor and other BOM masses, net mass, production route, factory tests, medium balance and releases, service life/endurance, maintenance and replacement profile, packaging scope, geography, reporting period, allocation, and all excluded operations. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parts_contact_preparation` | In-house parts, contacts, conductors, insulation, mechanisms, or terminals preparation | `conditional` | Include every cutting, forming, machining, joining, plating, coating, moulding, curing, or cleaning operation controlled by the reporting manufacturer; otherwise represent purchased parts through supplier datasets. | Foreground component preparation | Measured prepared-part output transferred to assembly |
| `assembly_sealing` | Apparatus assembly, sealing, and medium charging | `required` | Always include assembly; include sealing, evacuation, drying, and medium charging only when used by the declared technology. | Foreground integration and medium management | Measured test-ready apparatus output |
| `factory_testing` | Routine factory inspection and testing | `required` | Include the routine inspection and functional, dielectric, mechanical, making/breaking, leak, or pressure tests actually performed for the declared apparatus and production release. | Foreground quality assurance | Measured conforming apparatus released to packing |
| `packing_dispatch` | Packing and plant-gate dispatch preparation | `required` | Include dispatch preparation for all products; record zero packaging only when the product is demonstrably delivered without transport packaging. | Foreground plant-gate completion | 1 kg net finished apparatus plus separately reported packaging |

### Process: In-house parts, contacts, conductors, insulation, mechanisms, or terminals preparation (`parts_contact_preparation`)

#### Inputs

##### Product flows

###### In-house preparation inputs by material and component (`preparation_inputs`)

Record each metal, contact alloy, conductor, ceramic, polymer, composite, mechanism, terminal, auxiliary, and coating or
plating chemical that crosses into manufacturer-controlled preparation. Do not collapse contact or conductor
materials into an unspecified total.

- Selected flow: Supplier- and material-specific product flow selected for each actual input; no generic UUID is prescribed by this PCR
- Flow property / unit: Mass / kg
- Amount rule: Measured issued-to-process mass adjusted for documented returns and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `iec-ts-62271-320-2025`
- Range: Foreground-observed normalized input range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized mass
  - Upper: maximum observed normalized mass
  - Unit: kg/kg net finished apparatus
  - Basis: model- or configuration-specific observed production records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Preparation electricity and fuels (`preparation_energy`)

Record metered or allocated electricity and each fuel used by included forming, machining, joining, coating, curing,
cleaning, and local exhaust operations. Preserve the actual energy carrier and supplier mix.

- Selected flow: Site- and supplier-specific electricity or fuel product flow
- Flow property / unit: Energy / measured billing or meter unit
- Amount rule: Metered consumption or documented physical allocation from a measured shop total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured prepared-part output, then normalized to 1 kg net finished apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Range: Foreground-observed energy range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized energy
  - Upper: maximum observed normalized energy
  - Unit: original energy unit/kg net finished apparatus
  - Basis: observed reporting-period or production-campaign records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Segregated preparation scrap and treatment outputs (`preparation_scrap`)

Record metal offcuts, contact-material residues, spent plating or coating materials, used process liquids, sludges, and
other treatment-bound outputs separately by composition and destination.

- Selected flow: Composition- and treatment-specific waste flow selected from the current Tiangong flow library
- Flow property / unit: Mass / kg
- Amount rule: Measured waste shipment or container mass reconciled with stock change and documented internal recycling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Range: Foreground-observed waste range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized waste mass
  - Upper: maximum observed normalized waste mass
  - Unit: kg/kg net finished apparatus
  - Basis: composition-specific shipment and stock records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Elementary flows

Record measured process emissions from included preparation operations when they cross directly to air, water, or
soil. Do not duplicate emissions already represented in an upstream energy or material dataset.

#### Outputs

##### Product flows

###### Prepared parts transferred to assembly (`prepared_parts_output`)

Record the measured mass of conforming in-house prepared parts transferred to the assembly process, disaggregated by
the material and component families needed to reconcile the BOM.

- Selected flow: Product-specific internal intermediate flow; UUID not prescribed
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured prepared-part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`

##### Waste flows

No additional required waste row beyond the segregated preparation outputs recorded above.

##### Elementary flows

No additional required elementary row beyond direct measured preparation emissions.

### Process: Apparatus assembly, sealing, and medium charging (`assembly_sealing`)

#### Inputs

##### Product flows

###### Purchased and in-house components by BOM family (`assembly_components`)

Record the actual component and material inputs to the declared apparatus. Contact and conductor materials shall be
identified separately from structural metals, insulation, mechanisms, electronics, terminals, fasteners, and
auxiliaries; purchased modules shall retain supplier dataset references.

- Selected flow: Supplier-specific component/product flow or the declared internal prepared-parts flow
- Flow property / unit: Mass / kg
- Amount rule: BOM quantity multiplied by measured mass, reconciled to issue, return, and stock records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `iec-ts-62271-320-2025`
- Range: Foreground-observed BOM range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized component mass
  - Upper: maximum observed normalized component mass
  - Unit: kg/kg net finished apparatus
  - Basis: model- or configuration-specific BOM and measured-mass records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Insulating or interruption medium charged (`medium_charge_input`)

For gas- or liquid-filled apparatus, record each medium and mixture component separately, including new, reclaimed,
recycled, returned, and recovered quantities. For air, vacuum, or solid-insulated technologies without a fillable
medium, record a descriptive `not_applicable` decision rather than an invented zero-mass product flow.

- Selected flow: Chemical- or mixture-specific medium product flow; UUID selected for the actual technology
- Flow property / unit: Mass / kg
- Amount rule: Measured container transfer, certified flow meter, or container mass difference before and after charging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished apparatus of the declared technology
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_medium_mass_balance`
- Sources: `iec-62271-4-2022`; `us-epa-40-cfr-98-subpart-ss`
- Range: Foreground-observed charge range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized charge
  - Upper: maximum observed normalized charge
  - Unit: kg medium/kg net finished apparatus
  - Basis: model- and medium-specific charging records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Assembly, sealing, evacuation, and charging electricity (`assembly_energy`)

Record metered electricity and other utilities used for mechanical/electrical assembly, sealing, evacuation, drying,
and medium charging. Separate technology-specific operations from general facility overhead where measurements allow.

- Selected flow: Site- and supplier-specific electricity or utility product flow
- Flow property / unit: Energy / measured meter unit
- Amount rule: Metered consumption or documented physical allocation from measured line or facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured test-ready apparatus output, then normalized to 1 kg net finished apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Range: Foreground-observed energy range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized energy
  - Upper: maximum observed normalized energy
  - Unit: original energy unit/kg net finished apparatus
  - Basis: observed reporting-period or production-campaign records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Assembly rejects and spent auxiliaries (`assembly_waste`)

Record rejected parts, spent sealants, absorbents, filters, used containers, and other treatment-bound assembly
outputs by composition and destination. Recovered medium remains a product transfer to recovery or recycling when it
retains product status under the declared system, not an unqualified waste flow.

- Selected flow: Composition- and treatment-specific waste flow
- Flow property / unit: Mass / kg
- Amount rule: Measured waste shipment or container mass reconciled with stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Range: Foreground-observed waste range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized waste mass
  - Upper: maximum observed normalized waste mass
  - Unit: kg/kg net finished apparatus
  - Basis: composition-specific shipment and stock records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Elementary flows

#### Outputs

##### Product flows

###### Test-ready assembled apparatus (`test_ready_apparatus`)

Record the measured net mass of assembled apparatus transferred to factory testing, together with the model,
configuration, technology, and serial or batch identity.

- Selected flow: Product-specific internal intermediate flow; UUID not prescribed
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured test-ready apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_mass`

##### Waste flows

No additional required waste row beyond assembly rejects and spent auxiliaries.

##### Elementary flows

###### Insulating or interruption medium released during assembly and charging (`assembly_medium_release`)

For fillable media, report each directly released gas or volatile medium component separately. Calculate an
unmeasured residual from the documented mass balance and do not assign it to a generic air-emission proxy.

- Selected flow: Substance-specific elementary flow selected for the actual released medium
- Flow property / unit: Mass / kg
- Amount rule: Measured release plus the process-attributed residual from the medium mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished apparatus of the declared technology
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_medium_mass_balance`
- Sources: `us-epa-40-cfr-98-subpart-ss`
- Range: Physical mass-balance bounds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: medium available to the process after measured transfers and stock change
  - Unit: kg medium/kg net finished apparatus
  - Basis: substance-specific process medium balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `us-epa-40-cfr-98-subpart-ss`

### Process: Routine factory inspection and testing (`factory_testing`)

#### Inputs

##### Product flows

###### Test-ready apparatus input (`test_ready_input`)

Record the test-ready apparatus received from assembly without substituting the finished reference product flow.

- Selected flow: Product-specific internal test-ready apparatus flow
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled with accepted output, rejects, repairs, and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured conforming apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_mass`

###### Factory test electricity and utilities (`factory_test_energy`)

Record electricity and utilities used by the actual routine test sequence. The test record shall identify which
dielectric, mechanical, making/breaking, current-carrying, pressure, leak, and functional tests were performed or were
not applicable to the apparatus type.

- Selected flow: Site- and supplier-specific electricity or utility product flow
- Flow property / unit: Energy / measured meter unit
- Amount rule: Metered test-cell consumption or documented physical allocation from measured test-facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured conforming apparatus output, then normalized to 1 kg net finished apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_tests`
- Sources: `iec-62271-1-2017-amd1-2021`; `iec-62271-100-2021-amd1-2024`; `iec-62271-102-2018-amd1-2022`
- Range: Foreground-observed test-energy range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized test energy
  - Upper: maximum observed normalized test energy
  - Unit: original energy unit/kg conforming apparatus
  - Basis: apparatus- and test-sequence-specific records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

#### Outputs

##### Product flows

###### Conforming apparatus released to packing (`conforming_apparatus`)

Record only apparatus that passed the declared routine release tests. Retain the test report, rated values, measured
net mass, medium charge, leak-test result where applicable, and disposition of failed units.

- Selected flow: Product-specific internal conforming-apparatus flow; UUID not prescribed
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured conforming apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_tests`

##### Waste flows

###### Test rejects and replaced test-damaged parts (`factory_test_rejects`)

Record failed units or parts by disposition: repaired and returned to process, recycled, treated, or discarded. Do not
count a repaired unit both as a waste output and as a conforming product.

- Selected flow: Composition- and treatment-specific waste flow
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass net of documented repair returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Range: Foreground-observed reject range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized reject mass
  - Upper: maximum observed normalized reject mass
  - Unit: kg/kg net finished apparatus
  - Basis: test-disposition and repair-return records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Elementary flows

###### Insulating or interruption medium released during factory tests (`test_medium_release`)

Report measured venting, leaks, handling losses, and the test-process share of any unreconciled medium balance by
substance. A passed leak test does not justify recording manufacturing or test releases as zero.

- Selected flow: Substance-specific elementary flow selected for the actual released medium
- Flow property / unit: Mass / kg
- Amount rule: Measured release plus test-process-attributed residual from the medium mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished apparatus of the declared technology
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_medium_mass_balance`
- Sources: `us-epa-40-cfr-98-subpart-ss`
- Range: Physical mass-balance bounds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: medium available to factory testing after measured transfers and stock change
  - Unit: kg medium/kg net finished apparatus
  - Basis: substance-specific test-process medium balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `us-epa-40-cfr-98-subpart-ss`

### Process: Packing and plant-gate dispatch preparation (`packing_dispatch`)

#### Inputs

##### Product flows

###### Conforming apparatus input (`conforming_input`)

Record the measured conforming apparatus transferred from factory testing.

- Selected flow: Product-specific internal conforming-apparatus flow
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured packed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_mass`

###### Transport packaging by material (`transport_packaging`)

Record pallets, crates, corrugated board, plastics, desiccants, and protective materials separately. Packaging is not
part of the 1 kg net product reference amount and shall remain a separate inventory input.

- Selected flow: Material- and supplier-specific packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass by packed model or dispatch configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Foreground-observed packaging range
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: minimum observed normalized packaging mass
  - Upper: maximum observed normalized packaging mass
  - Unit: kg packaging/kg net finished apparatus
  - Basis: model- and dispatch-configuration-specific packing records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

Record packing rejects and discarded packaging materials under `cp_waste_outputs` when they cross the foreground
boundary.

##### Elementary flows

No category-specific elementary flow is prescribed; record direct measured releases if present.

#### Outputs

##### Product flows

###### Finished reference apparatus at plant gate (`finished_reference_product`)

This is the quantitative reference output. It excludes separately reported transport packaging and is released only
after the declared factory tests pass.

- Selected flow: Electrical apparatus for switching or protecting electrical circuits, or for making connexions to or in electrical circuits, for a voltage exceeding 1000 V `cf33015b-81bb-4bdf-8080-72e23c262f73`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization from measured net accepted product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished apparatus at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `iso-14044-2006`
- Range: Reference normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

No additional required waste row beyond measured packing rejects.

##### Elementary flows

No category-specific elementary output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Multi-product production lines | First avoid allocation by subdividing metered processes and tracing model-, line-, batch-, test-cell-, and medium-handling records. | `iso-14044-2006` |
| `allocation_physical_then_other` | Unavoidable shared utilities and operations | When subdivision is not possible, use a documented causal physical driver such as machine time, test duration, processed mass, number of operations, or measured medium throughput. Use another relationship only when a physical relationship is not defensible, and disclose the rationale and sensitivity. | `iso-14044-2006` |
| `allocation_recycling` | Scrap, recovered medium, returned parts, and recycling credits | Keep gross input, internal return, external recovery, treatment transfer, and any substitution credit separate. State the selected recycling or end-of-life method and do not credit the same recovered material or medium twice. | `iso-14044-2006`; `iec-62271-4-2022` |
| `allocation_medium_losses` | Insulating or interruption medium balance | Attribute measured and residual medium releases to the operation and reporting period in which they occur. Do not allocate an unexplained mass-balance residual away from the foreground system or to the delivered product. | `us-epa-40-cfr-98-subpart-ss` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `assembly_sealing` | BOM materials, contacts, conductors, insulation, mechanisms, electronics, terminals, fasteners, and auxiliaries | BOM, routing, issue/return ledger, supplier specification, measured component mass | model/configuration; part id; material or substance; supplier flow; quantity per item; measured unit mass; issued mass; returned mass; stock change; recycled content claim | Reconcile engineering BOM with measured masses and production issue/return records; keep contact and conductor materials separate | kg and item | Each model/configuration and reporting period | Complete declared production period | All sites contributing included parts and assembly | Sum net input by material/part and divide by accepted net product mass | Approved BOM revision, calibrated scale records, supplier specification, and ledger reconciliation |
| `cp_product_output_mass` | `packing_dispatch` | Test-ready, conforming, and finished apparatus mass | Production, serial/batch, weighbridge or calibrated scale record | model/configuration; serial or batch; gross mass; tare; packaging mass; net product mass; accepted quantity; date | Measure net product mass by model/configuration and reconcile transfers, rejects, stock, and plant-gate release | kg and item | Each batch or statistically justified model sample with production-period reconciliation | Complete declared production period | All production and dispatch sites in scope | Sum accepted net mass; retain model mass for item-to-mass conversion; normalize to 1 kg | Calibration certificate, sampling plan where used, production release, and reconciliation |
| `cp_energy_utilities` | `assembly_sealing` | Electricity, fuels, compressed air, vacuum, heat, and other utilities | Meter, invoice, equipment log, and allocation-driver record | carrier; meter id; opening/closing reading; consumption; unit; process/line; operating time; accepted output; allocation driver | Use dedicated meters where available; otherwise allocate a measured total with a causal physical driver | Original meter unit and converted energy unit | Meter interval and reporting-period reconciliation | Complete declared production period or representative campaign with dates | All included foreground operations and sites | Subtract documented non-production use, allocate by declared driver, and normalize to accepted output | Meter calibration, invoices, completeness reconciliation, and allocation calculation |
| `cp_medium_mass_balance` | `assembly_sealing` | Insulating and interruption medium acquisition, charge, recovery, transfer, stock, and release | Cylinder/container weighing, certified flow meter, inventory, charging, recovery, test, shipment, recycling, and destruction records | substance/mixture; composition; container id; opening stock; acquisitions; returns; recovered amount; charge to product; delivered-in-product amount; supplier return; recycling/destruction transfer; closing stock; measured release; process attribution | Maintain a substance-specific mass balance; measure container transfer by certified meter or before/after mass; calculate and investigate residual loss | kg by substance or mixture | Each transfer plus reporting-period balance | Complete declared production period | All included storage, charging, testing, recovery, and off-site manufacturer activities before customer transfer | Opening stock + acquisitions + returns - delivered in product - supplier/recycling/destruction transfers - closing stock = release plus documented adjustment | Calibrated meter/scale, container log, product charge certificate, shipment/recovery receipt, and signed reconciliation |
| `cp_waste_outputs` | `assembly_sealing` | Scrap, rejects, spent auxiliaries, treatment outputs, and repair returns | Waste shipment, container weighing, production reject, repair, recycling, and stock records | composition; source process; gross/tare/net mass; destination; treatment; returned-to-process mass; stock change; hazardous classification | Weigh by segregated composition and reconcile waste, repair returns, internal recycling, and stock | kg | Each shipment or container and reporting-period reconciliation | Complete declared production period | All included foreground operations and sites | Sum net external output by composition and destination; exclude documented internal returns from external waste | Scale calibration, transfer note, treatment receipt, repair disposition, and mass reconciliation |
| `cp_factory_tests` | `factory_testing` | Rated values, test sequence, pass/fail, test energy, medium release, and leakage performance | Nameplate, design certificate, routine test report, test-cell meter, leak/pressure record, nonconformance and repair record | apparatus type; applicable standard; rated voltage/current/frequency; breaking/making and withstand ratings; test id; test basis; result; energy; medium transfer/release; leak result; failed/repaired disposition | Extract approved design and routine-test records; meter the test cell or physically allocate measured facility energy | Original engineering units, kWh or MJ, kg medium, kg product | Each tested unit or production batch as required by the applicable product standard | Complete declared production period | Every test facility releasing in-scope product | Aggregate energy and releases over conforming output; retain failures and repairs separately | Approved test procedure, calibrated instruments, signed test report, nonconformance closure, and release authorization |
| `cp_packaging` | `packing_dispatch` | Transport packaging by material and dispatch configuration | Packaging BOM, scale record, purchasing/issue ledger, and dispatch record | model/configuration; packaging material; item quantity; measured unit mass; reusable status; return rate where evidenced; packed units | Measure packaging by material for each dispatch configuration and reconcile with issue and dispatch records | kg and item | Each configuration and reporting period | Complete declared production period | All dispatch sites in scope | Sum packaging mass by material and divide by net dispatched product mass | Approved packaging specification, calibrated scale, issue ledger, and dispatch reconciliation |
| `cp_life_maintenance_profile` | `factory_testing` | Downstream service-life, endurance, maintenance, replacement, leakage, and recovery descriptors | Approved product specification, type-test evidence, maintenance manual, warranty/service plan, and jurisdiction-specific label or compliance record | designed service life; mechanical/electrical endurance; operation count basis; load profile; maintenance interval; replaceable parts and masses; medium top-up; declared/tested leakage performance; recovery instruction; applicable geography and regulation | Extract only product-specific approved values; record `not_applicable` with reason where a descriptor does not apply | Original engineering unit, years, operations, kg/item, and percent/time where declared | Each model/configuration revision | Current approved design and service documentation | Product configurations represented by the production dataset | Preserve configuration-specific values; do not average incompatible ratings or technologies | Approved specification, type/routine test evidence, maintenance instruction, label, and design-change control |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | All foreground inventory rows | normalized amount = reporting-period amount / accepted net finished-apparatus mass; the reference output is exactly 1 kg | reporting-period flow amount; accepted net product mass | amount per 1 kg net finished apparatus | `iso-14044-2006` |
| `calc_item_to_mass` | Item-based BOM, production, reject, test, and packaging records | mass = item count × measured unit mass for the same model/configuration; propagate sampling uncertainty when unit mass is sampled | item count; measured unit mass; model/configuration | kg by flow and model/configuration |  |
| `calc_material_reconciliation` | BOM, prepared parts, assembly, product, waste, and stock | reconcile gross input = contained product mass + external outputs + documented internal returns + stock change + investigated residual; report scope and residual | BOM/issue mass; product mass; wastes; returns; stock changes | reconciled material-family balance and residual | `iso-14044-2006` |
| `calc_medium_release` | Each insulating or interruption medium | release = opening stock + acquisitions + returned/recovered receipts - delivered-in-product - supplier/recycling/destruction transfers - closing stock, adjusted only for documented measurement corrections; report measured and residual components separately | substance-specific stock, acquisition, charge, shipment, recovery, transfer, and measurement records | kg released by substance and process attribution | `us-epa-40-cfr-98-subpart-ss` |
| `calc_service_conversion` | Optional downstream item or service-life result | production result per item = result per kg × measured net item mass; any service-life result additionally applies the disclosed life, endurance, operating, loss, maintenance, replacement, leakage, and recovery scenario without changing the cradle-to-gate reference result | mass-normalized result; item mass; service and maintenance profile | separately labelled item or service-life scenario result | `iec-ts-62271-320-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_performance` | Product identity and reference flow | Provide the full required qualifier set and demonstrate that rated voltage exceeds 1 000 V. Use the apparatus-specific standard and mark genuinely inapplicable ratings with reasons. | Approved nameplate/specification, classification record, design certificate, and test report |
| `dq_bom_completeness` | Materials and components | Reconcile BOM, supplier inputs, internal preparation, finished mass, wastes, returns, and stock. Separately report contact and conductor materials, insulation/interruption medium, structural materials, and electronics/mechanisms. | BOM revision, supplier specifications, mass records, and reconciliation |
| `dq_medium_traceability` | Fillable media and direct releases | Preserve substance or mixture identity and composition, product charge, measured transfers, contained amount, recovery/destruction destinations, and residual calculation. Do not use leakage-test performance as a substitute for actual manufacturing-period mass balance. | Container and meter records, charge certificate, leak test, recovery/destruction receipt, and mass balance |
| `dq_temporal_geographic` | Foreground activity | State reporting-period dates, sites, production geography, represented technologies and configurations, production volume, and any campaign extrapolation. | Production, meter, purchasing, and dispatch records |
| `dq_service_maintenance` | Downstream-use descriptors | Provide designed service life, endurance or operating-cycle basis, maintenance interval/scope, replaceable parts, medium top-up and leakage basis, and end-of-life recovery instruction by model/configuration. | Approved product specification, test evidence, maintenance manual, and service plan |
| `dq_proxy_disclosure` | Upstream and downstream modelling | Identify every proxy, aggregation, omitted process, and jurisdiction-specific assumption. Do not use a switchgear assembly or a low-voltage apparatus dataset as the product reference. | Dataset mapping log and documented reviewer decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_boundary` | Product identity | Confirm that the product is individual switching/protection/connection apparatus rated above 1 000 V. Reject complete equipped switchgear/controlgear assemblies, cabinets, low-voltage apparatus, empty housings, conductors/cables, transformers, and installation services. | `iec-62271-1-2017-amd1-2021`; `iec-62271-200-2021-amd1-2024` |
| `validate_reference_identity` | Reference flow | Require product flow UUID `cf33015b-81bb-4bdf-8080-72e23c262f73`, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg normalized net product output. |  |
| `validate_rated_characteristics` | Required qualifiers | Require rated voltage above 1 000 V and the apparatus-applicable current, making/breaking, short-circuit withstand, insulation, frequency, and endurance declarations. A missing applicable rating is an error; an inapplicable field requires a reason. | `iec-62271-1-2017-amd1-2021`; `iec-62271-100-2021-amd1-2024`; `iec-62271-102-2018-amd1-2022` |
| `validate_material_disclosure` | BOM and mass balance | Require separate contact and conductor material identities and masses, insulation/interruption medium, structural material families, electronics/mechanisms, net product mass, wastes, returns, and stock changes. Reject an unspecified single total as complete BOM evidence. | `iec-ts-62271-320-2025` |
| `validate_medium_and_leakage` | Gas- or liquid-filled technology | Require medium identity/composition, opening and closing stock, acquisitions, charge, contained delivered mass, transfers to supplier/recycling/destruction, measured releases, residual calculation, seal design, and leak-test or monitoring basis. For non-fillable technology require an explicit `not_applicable` reason. | `iec-62271-4-2022`; `us-epa-40-cfr-98-subpart-ss` |
| `validate_life_and_maintenance` | Downstream scenario readiness | Require designed service life, mechanical/electrical endurance or operating-cycle basis, maintenance schedule and scope, replaceable parts, medium top-up and leakage basis where applicable, and recovery/disassembly instruction. Reject performance comparisons that use mass alone while these descriptors differ or are missing. | `iec-ts-62271-320-2025`; `iec-62271-4-2022` |
| `validate_process_completeness` | Foreground inventory | Require assembly/sealing, factory testing, packing/dispatch, any controlled parts preparation, all measured utilities, rejects/wastes, direct releases, and linked upstream datasets. Reconcile product, BOM, waste, medium, and stock records for the declared period. | `iso-14044-2006`; `us-epa-40-cfr-98-subpart-ss` |
| `validate_allocation` | Shared processes and recycling | Require subdivision or a documented causal allocation driver, separately reported recycling/recovery transfers, and no double credit. Report any non-physical allocation and sensitivity. | `iso-14044-2006` |
| `validate_market_rules` | Jurisdiction-specific use | When the dataset claims EU market applicability, validate current Regulation (EU) 2024/573 medium identity/GWP, charge, leakage label or monitoring, commissioning class/date, and derogation documentation. Otherwise label the check skipped rather than applying EU rules globally. | `eu-regulation-2024-573` |
| `validate_source_traceability` | Evidence and data quality | Require source ids for external method rules and retain calibration, BOM, test, medium-balance, maintenance, allocation, proxy, and dataset-version evidence sufficient for independent reproduction. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after review and publication |
| downstream_use | Production of a technology-, model-, geography-, and reporting-period-specific foreground package for individual >1 000 V switching/protection/connection apparatus; projection to process or lifecyclemodel records; optional installation, use, maintenance, and end-of-life scenarios kept separate from the cradle-to-gate reference result. |
| allowed_use | Cradle-to-gate inventory of a declared apparatus configuration; aggregation across compatible configurations with disclosed weighting; downstream item or service-life conversion when mass, ratings, technology, life, endurance, maintenance, leakage, replacement, and recovery assumptions are all declared. |
| excluded_use | Complete switchgear cabinet or substation modelling without added assembly-level data; low-voltage apparatus; mass-only performance comparison across unlike duties or lives; silent substitution of gas-insulated for air, vacuum, liquid, or solid technology; jurisdictional compliance claims without current evidence. |
| required_metadata | Canonical PCR id; CPC reference; product flow UUID; apparatus type/function; applicable standard; rated voltage, AC/DC and frequency; rated current and applicable making/breaking and withstand duties; insulation/interruption medium and seal design; contact/conductor and other BOM masses; net item mass; factory tests; production route/site/period/volume; packaging; designed service life and endurance; maintenance, replacement, medium top-up, leakage and recovery profile; allocation and proxy choices. |
| required_quality_disclosure | Primary-versus-secondary data share; BOM/mass and medium-balance residuals; meter/calibration status; configuration coverage; sampling and aggregation; temporal/geographic/technology representativeness; data gaps; proxies; inapplicable fields with reasons; allocation sensitivity; packaging scope; jurisdiction-specific checks performed or skipped. |
| update_trigger | Change in apparatus function or rating class, insulation/interruption medium or composition, sealing/leakage design, contact/conductor or major BOM, production route/site, applicable standard or regulation, test regime, designed life/endurance, maintenance/replacement profile, or evidence that materially changes the inventory. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-62271-1-2017-amd1-2021` | `standard` | IEC 62271-1:2017+AMD1:2021, High-voltage switchgear and controlgear — Part 1: Common specifications for alternating current switchgear and controlgear. https://webstore.iec.ch/en/publication/32982 (retrieved 2026-08-09) | >1 000 V scope, common ratings/service-condition framework, and apparatus identity and test disclosures |
| `iec-62271-100-2021-amd1-2024` | `standard` | IEC 62271-100:2021+AMD1:2024, High-voltage switchgear and controlgear — Part 100: Alternating-current circuit-breakers. https://webstore.iec.ch/en/publication/62785 (retrieved 2026-08-09) | Circuit-breaker scope and direct making/breaking test applicability |
| `iec-62271-102-2018-amd1-2022` | `standard` | IEC 62271-102:2018+AMD1:2022, High-voltage switchgear and controlgear — Part 102: Alternating current disconnectors and earthing switches. https://webstore.iec.ch/en/publication/75708 (retrieved 2026-08-09) | Disconnector/earthing-switch scope, rating, short-circuit making, and endurance applicability |
| `iec-62271-4-2022` | `standard` | IEC 62271-4:2022, High-voltage switchgear and controlgear — Part 4: Handling procedures for gases for insulation and/or switching. https://webstore.iec.ch/en/publication/64701 (retrieved 2026-08-09) | Gas identity and handling across installation, operation, repair, overhaul, abnormal operation, and end-of-life |
| `iec-ts-62271-320-2025` | `official_guidance` | IEC TS 62271-320:2025, High-voltage switchgear and controlgear — Part 320: Environmental aspects and life cycle assessment rules for high-voltage switchgear and controlgear. https://webstore.iec.ch/en/publication/69010 (retrieved 2026-08-09) | Environmentally conscious design, LCA scope, lifecycle information, BOM, service, maintenance, and end-of-life disclosures |
| `iec-62271-200-2021-amd1-2024` | `standard` | IEC 62271-200:2021+AMD1:2024, High-voltage switchgear and controlgear — Part 200: AC metal-enclosed switchgear and controlgear for rated voltages above 1 kV and up to and including 52 kV. https://webstore.iec.ch/en/publication/96236 (retrieved 2026-08-09) | Exclusion boundary for prefabricated metal-enclosed switchgear/controlgear assemblies |
| `us-epa-40-cfr-98-subpart-ss` | `official_guidance` | US EPA, Subpart SS Information Sheet — Manufacture of Electric Transmission and Distribution Equipment, 40 CFR 98.450–98.458. https://www.epa.gov/ghgreporting/subpart-ss-information-sheet (retrieved 2026-08-09) | Substance-specific insulating-gas mass balance, manufacturing/testing release accounting, charge and transfer records, and QA evidence |
| `eu-regulation-2024-573` | `official_guidance` | Regulation (EU) 2024/573 of 7 February 2024 on fluorinated greenhouse gases. https://eur-lex.europa.eu/eli/reg/2024/573/oj/eng (retrieved 2026-08-09) | Conditional EU-market medium/GWP, charge, label, leakage/monitoring, commissioning, maintenance, recovery, and derogation disclosures |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html (retrieved 2026-08-09) | Goal/scope, inventory, allocation, interpretation, reporting, and critical-review framework |
