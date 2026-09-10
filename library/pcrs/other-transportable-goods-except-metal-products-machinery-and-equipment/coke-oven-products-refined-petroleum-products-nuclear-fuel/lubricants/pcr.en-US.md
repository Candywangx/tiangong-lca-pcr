---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.lubricants
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Petroleum-derived finished lubricating oils

## 1. Scope and Applicability

This PCR applies to foreground production of liquid, finished lubricating oils whose formulation contains at least 70% by mass petroleum oils or oils obtained from bituminous materials and that are delivered at the lubricant plant dispatch gate. It covers mineral-oil-based engine, gear, hydraulic, circulating, compressor, turbine, metalworking, and comparable industrial lubricating oils when their product family, formulation, performance grade, and packaging state are declared.

The common foreground route begins with saleable petroleum base oils, additive packages, and other formulation materials received at the lubricant plant; it includes metering, blending, heating or cooling where used, filtration, quality control, rework, filling or bulk loading, and management of direct wastes and emissions. Upstream crude extraction, refinery base-oil manufacture, additive manufacture, and packaging manufacture are represented by linked upstream datasets rather than silently absorbed into the foreground plant.

Lubricating greases, predominantly synthetic PAO or ester lubricants, biobased lubricants, non-petroleum lubricating preparations, used or waste oils, and base oils sold as unfinished intermediates are excluded. Distribution, use-phase performance or avoided-emission claims, maintenance, collection, re-refining, and end-of-life are outside this plant-gate foreground rule unless a separately documented downstream model is added.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.lubricants |
| classification_refs | CPC 3.0 33380 Lubricants (`narrower`: this PCR is limited to liquid petroleum-derived finished lubricating oils) |
| covered_products | Liquid finished lubricating oils containing at least 70% by mass petroleum oils, including declared engine, gear, hydraulic, circulating, compressor, turbine, metalworking, and comparable industrial-oil families |
| excluded_products | Lubricating greases; predominantly synthetic, ester, silicone, or biobased lubricants; non-petroleum preparations; used or waste oils; unfinished base oils; fuels and solvents |
| representative_product | A market-ready petroleum-derived finished lubricating oil with declared product family, viscosity or performance grade, base-oil source, additive package, and packaging state |
| production_route | Receipt of petroleum base oils and additives; batch or continuous formulation and blending; conditional heating, cooling and filtration; quality control and rework; filling or bulk loading at plant |
| market_state | Liquid finished product at the lubricant manufacturing plant dispatch gate, either unpackaged bulk or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Market-ready liquid petroleum-derived finished lubricating oil at the plant dispatch gate |
| How much | 1 kg net lubricating oil, excluding the mass of packaging |
| How well | Meets the declared product-family and performance specification and contains at least 70% by mass petroleum oils or oils obtained from bituminous materials |
| How long or cycle | One finished production batch represented within a documented representative production period; no use-phase service is included |
| reference_flow_link | Net saleable lubricant mass after quality control, excluding packaging, rework returned to the same batch system, and off-spec or waste material |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family and intended lubrication application; liquid state; petroleum-oil mass fraction; base-oil group and virgin or re-refined share; additive-package identity and mass fraction; viscosity or performance grade and governing specification; bulk or packaging format; production geography; production period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent data-package field. A generic classification code or trade name is not a substitute for these qualifiers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg net conforming lubricating oil at dispatch; keep packaging mass separate. |
| `volume_to_mass` | lubricant or liquid inputs reported by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured volume with density for the actual product or batch and measured temperature; record density, temperature, source, and conversion. |
| `petroleum_fraction` | formulation composition | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | Calculate petroleum-oil mass fraction from batch formulation records; it must be at least 0.70 for this PCR. |
| `packaging_separation` | primary and transport packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report packaging by material and mass per kg net lubricant; do not include it in the reference-product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Saleable petroleum base oils, additive packages, cleaning materials, utilities, and packaging materials received at the lubricant plant gate, with supplier identity and incoming mass recorded |
| starting_condition_role | Foreground manufacturing gate; upstream production burdens are supplied by linked provider datasets |
| product_classification_scope | Liquid petroleum-derived finished lubricating oils within CPC 3.0 33380; excludes grease and non-petroleum-majority formulations |
| recursive_input_rule | Re-refined base oil or other same-category oil entering the formulation is recorded as an input with its own upstream provider dataset and declared recycled share; do not recursively apply this finished-lubricant PCR to that input |
| upstream_dataset_requirement | Link each material, energy carrier, electricity, steam, water, transport, and packaging input to a geographically and technologically representative provider dataset or disclose a reviewed proxy and its limitations |
| disclosure | Declare formulation family, petroleum and re-refined fractions, plant geography, production period, included operations, packaging format, allocation basis, upstream proxies, exclusions, and whether blending utilities are sub-metered or allocated |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_plant_gate` | foreground lubricant manufacturing | Include unloading and storage under plant control, metering, blending, conditional heating or cooling, filtration, quality control, rework, filling or bulk loading, direct emissions, wastewater, and production waste through dispatch gate. | api-tr-1533-2023; us-epa-petroleum-refining-2005 |
| `boundary_upstream_links` | received base oils, additives, utilities, and packaging | Represent upstream manufacture and inbound supply with linked provider datasets; do not treat received materials as burden-free. | api-tr-1533-2023 |
| `boundary_exclusions` | distribution, use, and end-of-life | Exclude customer logistics, lubricant use, avoided emissions, used-oil collection, re-refining, and end-of-life from this foreground package unless separately modelled and disclosed. | api-tr-1533-2023 |
| `boundary_cutoff_disclosure` | excluded material or energy flows | Do not exclude a flow solely because its mass is small; screen environmental significance, retain regulated or hazardous releases, and disclose every exclusion and its justification. | api-tr-1533-2023 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formulation_blending` | Formulation, blending, conditioning, and quality control | required | Always included | Foreground production of conforming bulk finished lubricating oil from received components | kg conforming blended oil transferred to dispatch |
| `filling_dispatch` | Filling, packaging or bulk loading, and dispatch | required | Always included; for bulk product record loading without primary packaging | Delivery of net conforming reference product at the plant dispatch gate | 1 kg net finished lubricating oil |

### Process: Formulation, blending, conditioning, and quality control (`formulation_blending`)

#### Inputs

##### Product flows

###### Petroleum base oils and petroleum-derived blending components (`petroleum_base_oils`)

Record every base-oil stream entering the batch, including its supplier flow, API base-oil group where known, virgin or re-refined status, received mass, and batch assignment.

- Selected flow: Grade-specific petroleum base oil or petroleum-derived blending component selected for the actual formulation
- Flow property / unit: Mass / kg
- Amount rule: metered or weighed batch input mass attributable to conforming finished lubricant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming blended lubricating oil transferred to dispatch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Sources: `unsd-cpc-3-0`
- Range: Petroleum-oil composition boundary
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0.70
  - Upper: 1.00
  - Unit: kg/kg finished lubricant
  - Basis: petroleum oils or oils from bituminous materials per kg formulation mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `unsd-cpc-3-0`

###### Additive package and formulation components (`additive_package`)

Record additive packages and individual formulation components by supplier identity and batch mass; confidential composition may be aggregated only if mass and upstream burden remain traceable.

- Selected flow: Supplier-specific additive package or formulation-component product flow
- Flow property / unit: Mass / kg
- Amount rule: weighed or metered component mass charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming blended lubricating oil transferred to dispatch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Sources: `api-tr-1533-2023`
- Range: Non-petroleum formulation mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg finished lubricant
  - Basis: remaining formulation mass after the minimum petroleum-oil fraction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Purchased electricity for blending and conditioning (`blending_electricity`)

Record sub-metered electricity where available; otherwise allocate a reconciled facility meter total to batches under the allocation rules.

- Selected flow: Geography- and voltage-specific purchased electricity provider
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered or allocated electricity consumed by transfer, agitation, heating or cooling, filtration, and quality-control equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming blended lubricating oil transferred to dispatch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_utilities`
- Sources: `api-tr-1533-2023`
- Range: Provisional broad screening range pending site records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg blended lubricant
  - Basis: electricity used in formulation and conditioning per kg conforming process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy, fuel, or imported steam (`blending_thermal_energy`)

Record the actual energy carrier and quantity used for tank heating, component conditioning, line heating, or other thermal duties; omit the row only when records prove no thermal energy is used.

- Selected flow: Site-specific fuel, heat, or steam provider selected for the actual utility
- Flow property / unit: Energy / MJ
- Amount rule: measured energy or fuel consumption, or a documented calculation from meter readings and carrier properties
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming blended lubricating oil transferred to dispatch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_utilities`
- Sources: `api-tr-1533-2023`
- Range: Provisional broad screening range pending site records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg blended lubricant
  - Basis: delivered thermal energy per kg conforming process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and cleaning water (`process_water`)

Record water used in product-contact operations, cleaning, cooling makeup, and other attributable production uses; do not add closed-loop circulation repeatedly.

- Selected flow: Site-specific water supply flow
- Flow property / unit: Mass / kg
- Amount rule: measured withdrawal or allocated attributable water use less separately recorded non-production demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming blended lubricating oil transferred to dispatch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_utilities`
- Range: Provisional broad screening range pending site records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg blended lubricant
  - Basis: attributable water withdrawal per kg conforming process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming bulk blended lubricating oil (`blended_lubricant`)

Record the mass transferred after formulation, conditioning, filtration, and quality release to filling or bulk loading.

- Selected flow: Conforming unpackaged lubricating oil intermediate for the declared product family
- Flow property / unit: Mass / kg
- Amount rule: released tank or batch mass transferred to dispatch operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output before filling losses and packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_outputs_wastes`

##### Waste flows

###### Unrecoverable oily residues, filters, and cleaning waste (`unrecoverable_oily_waste`)

Record oil-bearing residues that leave the foreground system for treatment; material returned as controlled rework to the same product system is not waste.

- Selected flow: Site-specific waste-oil, oily-solid, spent-filter, or cleaning-waste flow selected by actual waste identity
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or inventory change reconciled to waste manifests and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming blended lubricating oil transferred to dispatch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_outputs_wastes`
- Range: Provisional broad loss screen pending site records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg blended lubricant
  - Basis: unrecoverable production waste per kg conforming process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process wastewater sent to treatment (`process_wastewater`)

Record wastewater leaving the process boundary after cleaning or other production operations and identify onsite or offsite treatment.

- Selected flow: Site-specific wastewater flow distinguished by treatment route
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or documented water balance attributable to lubricant production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming blended lubricating oil transferred to dispatch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_outputs_wastes`
- Range: Provisional broad discharge screen pending site records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg blended lubricant
  - Basis: process wastewater sent to treatment per kg conforming process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct air, water, or soil releases from blending operations (`direct_process_emissions`)

Record measured, calculated, or permit-reported releases such as volatile organic compounds only when they cross the environment boundary; do not duplicate emissions already embedded in energy or upstream provider datasets.

- Selected flow: Substance- and compartment-specific TianGong elementary flow selected for each reported release
- Flow property / unit: Mass / kg
- Amount rule: measured or regulated calculation for each substance attributable to the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming blended lubricating oil transferred to dispatch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

### Process: Filling, packaging or bulk loading, and dispatch (`filling_dispatch`)

#### Inputs

##### Product flows

###### Conforming bulk blended lubricating oil received from blending (`blended_lubricant_input`)

Record the measured mass entering filling or bulk-loading operations and reconcile it to the blending output.

- Selected flow: Conforming unpackaged lubricating oil intermediate for the declared product family
- Flow property / unit: Mass / kg
- Amount rule: transfer-meter or tank-inventory mass entering dispatch operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished lubricating oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_materials`

###### Primary, secondary, and transport packaging (`packaging_materials`)

Record packaging by material, recycled content where known, units used, tare mass, reuse cycles, and losses; record zero primary packaging for bulk product rather than inventing a package.

- Selected flow: Material-specific packaging product flow for each actual packaging component
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging mass attributable to net finished lubricant, adjusted for reusable-container cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished lubricating oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_materials`
- Sources: `api-tr-1533-2023`
- Range: Provisional broad packaging screen pending actual format records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg packaging/kg net lubricant
  - Basis: all packaging material issued per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for filling and dispatch (`filling_electricity`)

Record electricity for pumps, filling lines, labelling, conveyors, and attributable dispatch equipment.

- Selected flow: Geography- and voltage-specific purchased electricity provider
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered or allocated electricity consumed by dispatch operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished lubricating oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_utilities`
- Range: Provisional broad screening range pending site records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg net lubricant
  - Basis: dispatch electricity per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net market-ready petroleum-derived finished lubricating oil (`reference_lubricating_oil`)

This is the quantitative reference output after quality release and filling or bulk loading; packaging is modelled separately.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming lubricating oil
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net finished lubricating oil at dispatch gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

##### Waste flows

###### Packaging rejects and filling losses sent to treatment (`dispatch_waste`)

Record rejected packaging and lubricant-contaminated material that is not returned as rework.

- Selected flow: Material- and treatment-specific waste flow selected for each actual waste stream
- Flow property / unit: Mass / kg
- Amount rule: weighed or counted waste converted to mass and reconciled to packaging and lubricant issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished lubricating oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_outputs_wastes`
- Range: Provisional broad dispatch-waste screen pending site records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg net lubricant
  - Basis: packaging and unrecovered filling waste per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct releases from filling and loading (`dispatch_emissions`)

Record substance- and compartment-specific releases from filling or bulk loading when measured or required by a permit; do not duplicate upstream or blending emissions.

- Selected flow: Substance- and compartment-specific TianGong elementary flow selected for each reported release
- Flow property / unit: Mass / kg
- Amount rule: measured or regulated calculation attributable to dispatch operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished lubricating oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | batch materials, utilities, wastes, and emissions | Avoid allocation by separate batch records, sub-metering, tank reconciliation, or subdivision of independently measured operations wherever practical. | api-tr-1533-2023 |
| `allocation_shared_utilities` | shared electricity, heat, steam, water, and site services | When product routes have similar utility intensity, allocate reconciled shared utilities by net mass of conforming output; when intensity differs materially, use sub-metering or a documented causal engineering basis and disclose the result. | api-tr-1533-2023 |
| `allocation_rework` | in-system rework | Return controlled same-product rework to the batch mass balance without assigning a second upstream burden; material leaving the product system is recorded as product, waste, or emission according to its actual fate. | mass-balance-identity |
| `allocation_upstream_coproducts` | base oils and additive provider datasets | Use the provider dataset's reviewed co-product allocation; do not reallocate upstream refinery or chemical burdens inside the lubricant blending foreground. If a provider method is unknown, disclose the limitation. | api-tr-1533-2023 |
| `allocation_no_unverified_credit` | waste and recovered material | Do not assign avoided-burden or recycling credits in this foreground process without an explicit downstream system model and consistent allocation method. | api-tr-1533-2023 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_materials` | `formulation_blending` | base oils, additives, and formulation materials | batch recipe, weigh ticket, transfer meter, tank inventory | batch_id; product_code; supplier_flow; material_role; base_oil_group; virgin_or_rerefined; opening_mass; received_mass; charged_mass; closing_mass; unit; density; temperature | reconcile recipe, weigh/flow records, and tank inventory for each batch | kg; L with density conversion | each batch | representative period covering at least 12 consecutive months | all production lines and tanks serving the declared product | sum attributable material by product and divide by conforming blended output; reconcile inventory change | calibrated scale or meter record, recipe authorization, supplier specification, tank reconciliation |
| `cp_blending_utilities` | `formulation_blending` | electricity, heat, steam, fuel, and water | utility meter, invoice, equipment log | meter_id; carrier; opening_reading; closing_reading; unit; line_or_area; operating_hours; batch_ids; allocation_basis | use sub-metering first; otherwise reconcile site totals and apply the approved allocation rule | kWh; MJ; kg; m3 | monthly and by batch where metered | same representative 12-month period | blending, heating, cooling, filtration, laboratory, and attributable support equipment | subtract non-production demand, allocate only the reconciled remainder, and normalize to conforming output | meter calibration, invoices, fuel analysis, allocation worksheet, reconciliation sign-off |
| `cp_blending_outputs_wastes` | `formulation_blending` | released product, rework, oily waste, filters, and wastewater | tank transfer, production report, waste manifest, wastewater meter | batch_id; released_mass; rework_returned; waste_stream; waste_mass; wastewater_volume_or_mass; treatment_route; opening_inventory; closing_inventory | reconcile released product and all non-product outputs to material inputs | kg; m3 with density conversion | each batch and each waste shipment | same representative 12-month period | all included blending operations | aggregate by product family and treatment route; keep rework inside the balance and waste outside it | signed release record, manifest, wastewater log, inventory reconciliation |
| `cp_direct_emissions` | `formulation_blending`; `filling_dispatch` | direct elementary releases | stack or fugitive measurement, permit report, emission calculation | substance; compartment; measurement_method; activity_data; factor; measured_amount; uncertainty; reporting_period; process_area | use measured releases where available; otherwise use the regulated calculation method and retain inputs | kg substance | measurement or permit-report frequency | same representative 12-month period | all included emission points and process areas | sum by substance and compartment without duplicating provider-dataset emissions | laboratory report, calibrated instrument, permit submission, calculation workbook |
| `cp_filling_materials` | `filling_dispatch` | bulk lubricant transfer and packaging | filling meter, tank inventory, bill of materials, purchase and issue record | product_code; package_type; material; unit_count; tare_mass; recycled_content; reuse_cycles; lubricant_in; lubricant_out; rejected_units | reconcile lubricant transfer and issued packaging to saleable dispatched mass | kg; item count converted to kg | each batch or dispatch lot | same representative 12-month period | all filling lines and bulk-loading points for the product | aggregate packaging by material and divide by net dispatched lubricant; report bulk packaging as zero | calibrated filler, tare test, packaging specification, issue record, dispatch record |
| `cp_filling_utilities` | `filling_dispatch` | dispatch electricity and fuel | utility meter, equipment log, fuel record | meter_id; carrier; readings; operating_hours; line; product_lots; allocation_basis | sub-meter or allocate reconciled dispatch-area utility use | kWh; MJ | monthly and by lot where metered | same representative 12-month period | filling, labelling, conveying, and bulk loading | allocate by a documented causal basis or net output mass when intensities are similar | meter record, invoice, allocation worksheet, supervisor approval |
| `cp_filling_outputs_wastes` | `filling_dispatch` | saleable product, filling loss, and packaging reject | dispatch record, line reconciliation, waste manifest | lot_id; lubricant_in; net_product_out; package_issue; package_reject; lubricant_loss; rework_return; waste_mass; treatment_route | reconcile each lot and retain traceability to waste fate | kg; item count converted to kg | each dispatch lot and waste shipment | same representative 12-month period | all included filling and loading operations | sum saleable output and non-product outputs; do not count returned rework as waste | signed dispatch record, line balance, weigh ticket, manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | every foreground inventory row | normalized amount = attributable amount in the representative period / net kg conforming reference product dispatched in that period | attributable row amount; net dispatched lubricant mass | amount per 1 kg reference product | mass-balance-identity |
| `calc_volume_to_mass` | volume-based liquid records | mass = measured volume × density at the recorded temperature; do not use a generic density when product-specific density is available | volume; density; measurement temperature | kg material | api-tr-1533-2023 |
| `calc_petroleum_fraction` | formulation identity | petroleum fraction = mass of petroleum oils and oils from bituminous materials / total net lubricant formulation mass; result must be at least 0.70 | batch formulation masses and material identities | kg petroleum oil/kg formulation | unsd-cpc-3-0; mass-balance-identity |
| `calc_process_mass_balance` | each process and batch family | residual = total mass inputs - net product outputs - recorded rework transfers - waste outputs - measured elementary mass releases - closing inventory increase + opening inventory decrease; investigate and disclose residual | material, product, waste, emission, and inventory records | mass-balance residual and closure statement | mass-balance-identity |
| `calc_packaging_intensity` | packaged product | packaging intensity by material = packaging material issued less verified reusable returns and rejects / net kg lubricant dispatched | packaging issue, return, reject, tare, and dispatch records | kg packaging material/kg net lubricant | api-tr-1533-2023 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and formulation | Preserve product code, family, application, performance or viscosity grade, liquid state, petroleum fraction, base-oil group, re-refined share, additive package, and packaging format. | approved formulation, product specification, certificate of analysis, batch release |
| `dq_temporal` | all foreground records | Use one representative period covering at least 12 consecutive months; identify shutdowns, abnormal campaigns, and substitutions. | dated records, production calendar, exception log |
| `dq_measurement` | mass, volume, utilities, and emissions | Use calibrated instruments or controlled invoices; document density and temperature for volume conversion and retain calculation inputs. | calibration certificate, invoice, laboratory report, conversion worksheet |
| `dq_completeness` | foreground boundary | Reconcile all included lines, tanks, filling points, wastes, and direct releases; disclose omitted operations and quantify the potential significance where possible. | site map, meter map, mass and utility balances, exclusion register |
| `dq_representativeness` | upstream providers and proxies | Match technology, geography, time, base-oil route, and packaging material; document every proxy and why a more representative provider was unavailable. | provider metadata, proxy assessment, source review |
| `dq_confidentiality` | confidential formulations | Aggregation may protect trade secrets, but must preserve total mass, petroleum fraction, upstream burdens, additive-package traceability, and validation evidence. | controlled confidential annex and public aggregation statement |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | product identity | Fail if the product is not a liquid finished lubricating oil, if petroleum-oil fraction is below 0.70 or unsupported, or if required qualifiers are missing. | unsd-cpc-3-0 |
| `validate_reference_flow` | quantitative reference | Require exactly 1 kg net conforming Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268` with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; packaging must be separate. | mass-balance-identity |
| `validate_process_coverage` | process inventory | Require both `formulation_blending` and `filling_dispatch`, including bulk loading when no primary packaging is used; fail if a plant-controlled material, utility, waste, or direct release is silently omitted. | api-tr-1533-2023 |
| `validate_mass_balance` | formulation and dispatch | Require documented process mass-balance closure, investigation of residuals against the site's approved tolerance, and disclosure of remaining residual; rework must not be double counted as product and waste. | mass-balance-identity |
| `validate_allocation` | shared operations | Require sub-metering, mass allocation for similar-intensity routes, or a documented causal basis for materially different routes; disclose the selected basis and affected flows. | api-tr-1533-2023 |
| `validate_temporal_completeness` | foreground data period | Require at least 12 consecutive months of representative foreground records or a justified shorter campaign that covers the complete production campaign and its inventory changes. | api-tr-1533-2023 |
| `validate_upstream_links` | material and energy inputs | Require a provider dataset or reviewed proxy for every non-trivial input and disclose technology, geography, time, and allocation limitations. | api-tr-1533-2023 |
| `validate_no_double_count` | utilities, packaging, emissions, and rework | Fail when a quantity is counted in more than one process, embedded provider emissions are repeated as direct emissions, reusable packaging is counted on every cycle without adjustment, or rework receives a second production burden. | mass-balance-identity |
| `validate_reasoned_ranges` | provisional ranges | Treat every `reasoned_estimate` range as a screening aid only; it cannot replace foreground records and must be disclosed and replaced before publication-critical use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for petroleum-derived finished lubricating oil at the lubricant plant dispatch gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product- and site-qualified process LCI, cradle-to-gate models with linked upstream providers, supplier footprints, and comparison only between datasets with aligned formulation scope, boundary, allocation, period, packaging treatment, and data quality |
| excluded_use | Lubricating grease or non-petroleum formulations; generic use-phase performance; avoided-emission claims; cradle-to-grave claims; combustion or fuel substitution; unqualified comparison across product families or performance grades |
| required_metadata | canonical PCR id; product family and application; liquid state; petroleum fraction; base-oil group and re-refined share; additive package; viscosity or performance grade and specification; plant geography; production period; bulk or packaging format; boundary; allocation; provider datasets; proxy list |
| required_quality_disclosure | foreground coverage and calibration; mass-balance residual; utility allocation; formulation confidentiality treatment; temporal, geographic, and technological representativeness; upstream proxy limitations; reasoned estimates; exclusions and cut-off decisions |
| update_trigger | Material formulation, base-oil route or re-refined share change; product-family or performance-specification change; plant or technology change; packaging change; allocation change; provider replacement; production period rollover; new evidence that invalidates a provisional range or boundary rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, CPC 33380 Lubricants, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-09) | classification boundary and minimum petroleum-oil share inherited from CPC group context |
| `environdec-pcr-2025-06` | standard | International EPD System, PCR 2025:06 Lubricating products, version 1.0.3, https://www.environdec.com/pcr-library/pcr_c41f1c3a-ce16-4e42-470c-08dcb7aea32c (retrieved 2026-08-09) | confirmation that a material PCR category exists for CPC 3338 lubricants; category-level scope context |
| `api-tr-1533-2023` | official_guidance | American Petroleum Institute, API Technical Report 1533, Lubricants Life Cycle Assessment and Carbon Footprinting—Methodology and Best Practice, First Edition, May 2023, https://www.api.org/-/media/files/certification/engine-oil-diesel/publications/api%20tr%201533.pdf (retrieved 2026-08-09) | declared mass unit, life-cycle boundary, allocation hierarchy, lubricant blending inventory, packaging, collection period, data hierarchy, and data quality |
| `us-epa-petroleum-refining-2005` | official_guidance | U.S. Environmental Protection Agency, Appendix A—Overview of Petroleum Refining, November 2005, https://www.epa.gov/sites/production/files/documents/AppendixA_Overview_of_Petroleum_Ref.pdf (retrieved 2026-08-09) | petroleum lubricant refining and blending process decomposition and distinction between oils and greases |
| `mass-balance-identity` | method_factor | Conservation of mass applied to each declared batch and process boundary | normalization, formulation composition, rework treatment, and process mass-balance validation |
