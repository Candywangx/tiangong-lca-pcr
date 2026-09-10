---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.kerosene-type-jet-fuel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Kerosene-type jet fuel

## 1. Scope and Applicability

This PCR applies to the production of finished kerosene-type aviation turbine fuel supplied as a homogeneous, quality-certified batch at the refinery or manufacturing-terminal dispatch boundary. It covers petroleum-derived kerosene-type grades such as Jet A and Jet A-1 and other nationally recognized kerosene-type aviation turbine fuels when the governing specification and grade are declared. A finished blend containing approved synthetic or co-processed components is in scope only when it is certified to an accepted kerosene-type aviation fuel specification and remains within the declared CPC parent scope for petroleum oils or preparations containing at least 70% by weight of petroleum oils.

The foreground boundary includes the route actually operated at the reporting site: manufacture or receipt of kerosene-range components, component treatment where performed, batch blending and additive dosing, specification testing and certification, finished-product storage, and loading to the point-of-manufacture dispatch boundary. For a terminal-manufactured product, refinery manufacture of purchased blend components is represented by upstream datasets rather than recreated as terminal foreground activity.

The PCR excludes gasoline-type or wide-cut jet fuel, other kerosene sold for lighting or heating, aviation gasoline, neat synthetic aviation fuel or blends outside the declared CPC petroleum-product scope, additives sold as separate products, airport hydrant operation, downstream distribution, aircraft refuelling, aircraft operation and combustion, and capital construction unless a study explicitly extends the boundary and reports the extension separately. Conformance with this PCR does not by itself establish ASTM, Defence Standard, CORSIA, sustainability, or airworthiness certification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.kerosene-type-jet-fuel |
| classification_refs | CPC 3.0: 33342 Kerosene-type jet fuel (exact semantic reference; mapping acceptance is governed separately) |
| covered_products | Finished kerosene-type aviation turbine fuels for aircraft gas-turbine engines, including Jet A, Jet A-1, and other declared kerosene-type grades; qualified synthetic or co-processed components only when the finished certified blend remains within the declared CPC petroleum-product scope |
| excluded_products | Gasoline-type or wide-cut jet fuel; other kerosene for non-aviation uses; aviation gasoline; neat synthetic aviation fuels or blends outside the CPC petroleum-product scope; separate additives; downstream fuel delivery and use services |
| representative_product | A homogeneous batch of finished kerosene-type jet fuel certified to a declared aviation turbine fuel specification |
| production_route | Integrated refinery fractionation and treatment followed by blending and certification, or manufacturing-terminal blending of qualified upstream kerosene-range components followed by certification |
| market_state | Finished, specification-certified liquid fuel in the dispatch tank at the refinery or manufacturing terminal, before downstream distribution and aircraft use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished kerosene-type jet fuel at the point-of-manufacture dispatch boundary |
| How much | 1 kg net mass of released product |
| How well | Homogeneous batch conforming to the declared kerosene-type aviation turbine fuel grade and specification, with a valid certificate of quality or equivalent release record |
| How long or cycle | One released batch; annual or campaign datasets aggregate released batches over the declared reporting period |
| reference_flow_link | The quantitative reference exchange is the net mass loaded from the certified finished-product batch after measured storage and loading losses |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Governing fuel specification and grade; petroleum-derived, synthetic, and co-processed component shares; point of manufacture; geography; production route; batch or reporting period; density at 15°C; net calorific value and its basis; additive package; quality certificate identity; storage and loading boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net released fuel; do not use gross tank volume or loaded vehicle volume as the reference amount. |
| `volume_to_mass` | liquid product and liquid blend components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured volume to mass with the batch-specific density corrected to 15°C and retain the observed volume, temperature, density, test method, and correction method; do not apply a generic default density. |
| `energy_basis` | calorific value and energy-normalized reporting | Net calorific value | MJ/kg | Record whether energy values use net or gross calorific value; use batch-specific net calorific value for optional MJ-normalized results and do not replace the mass reference flow. |
| `grade_property_basis` | fuel quality properties | Grade-specific property | Specification unit | Record each quality result in the unit and test basis required by the declared fuel specification; a batch average must not be used to conceal a nonconforming batch. |
| `utility_energy_conversion` | electricity, steam, heat, and fuel use | Energy | kWh or MJ | Preserve the metered unit and conversion basis; use 1 kWh = 3.6 MJ for electricity conversion and declare pressure, temperature, and enthalpy assumptions for steam or heat. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Integrated refinery route: conditioned crude oil or petroleum feedstock received at the refinery process boundary. Manufacturing-terminal route: qualified kerosene-range blend components received with upstream datasets and batch-quality documentation. |
| starting_condition_role | The foreground starting condition identifies where site records begin; activities before that point are represented by linked upstream datasets rather than omitted. |
| product_classification_scope | Finished kerosene-type aviation turbine fuel within CPC 3.0 code 33342 and its petroleum-product parent scope; grade and specification are dataset qualifiers, not separate canonical PCR identities. |
| recursive_input_rule | Finished kerosene-type jet fuel entering blending, rework, or commingling is recorded as a product input with its own upstream dataset and batch identity; do not recursively expand the same category inside the foreground system. |
| upstream_dataset_requirement | Provide geographically and technologically representative upstream datasets for crude or petroleum feedstocks, purchased kerosene components, hydrogen, electricity, fuels, steam, water, additives, treatment chemicals, and off-site waste treatment. |
| disclosure | Declare site type, route, feed and component slate, specification and grade, reporting period, foreground start and end points, included process units, storage and loading point, allocation method, cut-offs, and any boundary extension. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground production | Include the operated component-manufacture or component-receipt route, treatment, blending, quality release, finished-product storage, and point-of-manufacture loading needed to produce the certified reference product. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`; `mod-def-stan-91-091-14` |
| `boundary_rule_2` | upstream supply | Link upstream datasets for every purchased feed, blend component, utility, additive, and treatment service crossing the foreground boundary; a terminal dataset must not claim refinery operations that it did not operate. | `eu-jrc-ref-bref-2015`; `eu-pef-2021-2279` |
| `boundary_rule_3` | emissions and wastes | Include measured or calculated direct air emissions, wastewater, oily residues, spent treatment materials, off-spec fuel, tank bottoms, and loading or storage losses from included units, without double counting recovered streams. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| `boundary_rule_4` | excluded downstream stages | Exclude downstream pipeline, truck, rail, marine, airport storage and hydrant operations, aircraft refuelling, and aircraft combustion unless the study explicitly extends the boundary and reports those stages separately. | `eu-jrc-ref-bref-2015` |
| `boundary_rule_5` | infrastructure | Exclude capital equipment and one-time construction from the default foreground production dataset; disclose and separately model them when material to the declared study goal. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture_or_receipt` | Kerosene-range component manufacture or receipt | required | Integrated refineries model operated fractionation and treatment; manufacturing terminals record purchased qualified components and link their upstream production datasets | foreground component supply and upstream linkage | per 1 kg net released reference product |
| `batch_blending_and_release` | Batch blending, additive dosing, specification testing, and release | required | Always included | foreground product manufacture and batch certification | per 1 kg net released reference product |
| `finished_storage_and_loading` | Finished-product storage and loading at point of manufacture | required | Always included through the dispatch meter or equivalent point-of-manufacture boundary | foreground storage and dispatch | 1 kg net released reference product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when refinery or terminal wastewater is treated within the reporting site | foreground waste treatment | per 1 kg net released reference product |

### Process: Kerosene-range component manufacture or receipt (`component_manufacture_or_receipt`)

#### Inputs

##### Product flows

###### Petroleum feedstock or purchased kerosene-range components (`petroleum_feedstock_or_components`)

Record conditioned crude oil and petroleum intermediates processed by an integrated refinery, or each purchased kerosene-range component received by a manufacturing terminal. Preserve supplier, origin, batch, specification, mass, and upstream dataset identity.

- Selected flow: Dataset-specific Tiangong product flow matching the declared feed or blend component
- Flow property / unit: Mass / kg
- Amount rule: measured received mass corrected for inventory changes and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional feed-or-component mass screening guardrail; replace with reviewed route-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 20
  - Unit: kg/kg net released reference product
  - Basis: broad temporary range spanning terminal component receipt and integrated refinery feed attribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hydrogen supplied to operated treatment units (`treatment_hydrogen`)

Record metered hydrogen crossing the process boundary when hydrotreating or hydroprocessing is operated for kerosene components. Exclude hydrogen embedded in a purchased upstream component dataset.

- Selected flow: Dataset-specific Tiangong hydrogen product flow for the actual production route
- Flow property / unit: Mass / kg
- Amount rule: metered hydrogen supply minus measured purge or return credited elsewhere
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogen_and_chemicals`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`
- Range: Provisional hydrogen screening guardrail; replace with reviewed route-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg net released reference product
  - Basis: broad temporary range including routes with no operated hydrogen treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity consumed by component operations (`component_electricity`)

Record metered electricity for operated distillation, treating, pumping, separation, and associated controls, with shared-utility allocation disclosed.

- Selected flow: Dataset-specific Tiangong electricity product flow for the actual grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to included component operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `eu-pef-2021-2279`
- Range: Provisional component-electricity screening guardrail; replace with reviewed route-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net released reference product
  - Basis: broad temporary range for operated separation, treatment, pumping, and controls
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process fuel, steam, and heat consumed by component operations (`component_thermal_energy`)

Record each fuel, steam, and heat carrier as a separate dataset exchange using metered quantities and the actual energy basis. Do not collapse purchased energy and internally recovered refinery fuel into one undocumented total.

- Selected flow: Dataset-specific Tiangong fuel, steam, or heat product flow for each carrier
- Flow property / unit: Energy or carrier-specific property / MJ, kg, or m3
- Amount rule: metered carrier use with declared enthalpy or calorific-value conversion where required
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional component thermal-energy screening guardrail; replace with reviewed route-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg net released reference product
  - Basis: broad temporary total after converting each carrier to the declared energy basis
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water consumed by component operations (`component_process_water`)

Record purchased or internally supplied process water crossing the selected unit boundary, net of separately measured recirculation.

- Selected flow: Dataset-specific Tiangong water product flow matching source and treatment state
- Flow property / unit: Volume / m3
- Amount rule: metered make-up water supplied to included component operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional component-water screening guardrail; replace with reviewed site-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg net released reference product
  - Basis: broad temporary make-up-water range net of measured recirculation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Kerosene-range blend components (`kerosene_blend_components`)

Record each kerosene-range component leaving operated fractionation or treatment, or received component transferred into blending, with mass, batch identity, and quality status.

- Selected flow: Dataset-specific Tiangong kerosene-range product flow matching treatment and market state
- Flow property / unit: Mass / kg
- Amount rule: measured component mass transferred to blending, reconciled with tank inventory changes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`
- Range: Provisional blend-component mass screening guardrail; replace with reviewed route-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.5
  - Unit: kg/kg net released reference product
  - Basis: broad temporary transferred-component range before downstream storage and loading losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other refinery co-products (`other_refinery_coproducts`)

Record each co-product from shared refinery units separately. The unallocated production inventory and the allocation relation must remain available for review.

- Selected flow: Dataset-specific Tiangong product flow for each actual refinery co-product
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: measured co-product output before allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting-period refinery throughput before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-pef-2021-2279`
- Range: Provisional co-product screening guardrail; replace with reviewed refinery output evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: declared output unit/unit refinery throughput
  - Basis: broad temporary check applied separately to each declared co-product before allocation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Process wastewater transferred to treatment (`component_wastewater`)

Record wastewater leaving included component operations by measured volume and relevant pollutant load; link to on-site or off-site treatment without treating recovered water as both avoided input and waste output.

- Selected flow: Dataset-specific Tiangong wastewater flow matching composition and receiving treatment
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater transferred from included component operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional component-wastewater screening guardrail; replace with reviewed site-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg net released reference product
  - Basis: broad temporary transferred-wastewater range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Oily sludge and spent treatment materials (`component_solid_wastes`)

Instantiate separate waste exchanges for oily sludge, spent catalyst, spent caustic, filters, and other treatment residues actually generated.

- Selected flow: Dataset-specific Tiangong waste flow matching each residue and treatment route
- Flow property / unit: Mass / kg
- Amount rule: weighed or documented waste transferred to storage, recovery, or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional component-residue screening guardrail; replace with reviewed site-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net released reference product
  - Basis: broad temporary total applied after keeping each waste exchange separate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct combustion and process air emissions (`component_air_emissions`)

Instantiate one elementary exchange per reported substance and compartment, including fossil carbon dioxide, methane, nitrogen oxides, sulfur oxides, particulate matter, and non-methane volatile organic compounds where emitted by included units.

- Selected flow: Dataset-specific Tiangong elementary flow for each substance and receiving air compartment
- Flow property / unit: Mass / kg
- Amount rule: measured emission or documented calculation from site activity records and approved factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`
- Range: Provisional direct-air-emission screening guardrail; replace with reviewed substance-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg substance/kg net released reference product
  - Basis: broad temporary check applied separately to each emitted substance and compartment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Batch blending, additive dosing, specification testing, and release (`batch_blending_and_release`)

#### Inputs

##### Product flows

###### Kerosene-range blend components supplied to the batch (`batch_components`)

Record every petroleum-derived, synthetic, co-processed, and rework component entering the batch separately by batch identity, mass, component type, origin, and certification status.

- Selected flow: Dataset-specific Tiangong product flow matching each blend component
- Flow property / unit: Mass / kg
- Amount rule: batch transfer mass corrected with batch-specific density when measured by volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg blended batch before storage and loading losses
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_blending`
- Sources: `mod-def-stan-91-091-14`; `astm-d1655-23`

###### Qualified additives dosed to the batch (`qualified_additives`)

Record each additive separately with qualified product identity, active concentration, dose, point of addition, and batch certificate entry.

- Selected flow: Dataset-specific Tiangong additive product flow matching the qualified additive
- Flow property / unit: Mass / kg
- Amount rule: measured additive dose to the released batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg blended batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_blending`
- Sources: `mod-def-stan-91-091-14`; `astm-d1655-23`

###### Electricity for blending, transfer, and quality control (`blending_electricity`)

Record metered electricity for blending pumps, transfer, sampling, and site laboratory work when attributable to the batch operation.

- Selected flow: Dataset-specific Tiangong electricity product flow for the actual grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: metered or transparently allocated electricity for blending and quality release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg blended batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `eu-pef-2021-2279`
- Range: Provisional blending-electricity screening guardrail; replace with reviewed site-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg blended batch
  - Basis: broad temporary range for blending, transfer, sampling, and quality control
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released kerosene-type jet fuel batch (`released_jet_fuel_batch`)

Record only homogeneous batches released against the declared specification. Preserve the certificate identity and all component and additive declarations required by that specification.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: measured released batch mass before finished-product storage and loading losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per released batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_quality_release`
- Sources: `mod-def-stan-91-091-14`; `astm-d1655-23`; `faa-ac-20-24d-chg1`
- Range: Released-batch mass normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg released batch
  - Basis: exact mass normalization within the released-batch process row
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Off-specification or quarantined batch material (`off_spec_batch_material`)

Record off-specification material transferred to rework, downgrade, recovery, or treatment. Reworked material re-entering a later batch remains a traceable product input rather than an avoided waste credit.

- Selected flow: Dataset-specific Tiangong product or waste flow matching the actual disposition
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released batch output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_quality_release`
- Sources: `mod-def-stan-91-091-14`
- Range: Provisional off-specification-material screening guardrail; replace with reviewed batch evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg released batch output
  - Basis: broad temporary check summed across separately reported disposition routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Blending and sampling losses to air (`blending_air_losses`)

Record substance-specific volatile emissions from blending, sampling, and transfer where they cross the environment boundary.

- Selected flow: Dataset-specific Tiangong elementary flow for each emitted substance and air compartment
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated volatile loss from batch and site records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released batch output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

### Process: Finished-product storage and loading at point of manufacture (`finished_storage_and_loading`)

#### Inputs

##### Product flows

###### Released fuel entering finished-product storage (`released_fuel_to_storage`)

Record the mass of certified fuel transferred into finished-product tanks and preserve its batch identity through loading.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: measured tank receipt mass linked to the release certificate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_loading`
- Sources: `mod-def-stan-91-091-14`
- Range: Provisional certified-fuel receipt screening guardrail; replace with reviewed tank-balance evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg net dispatched reference product
  - Basis: broad temporary range allowing measured storage, sampling, and loading losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for tank farm and loading (`storage_loading_electricity`)

Record metered electricity for finished-product storage, circulation, filtration, and loading within the point-of-manufacture boundary.

- Selected flow: Dataset-specific Tiangong electricity product flow for the actual grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: metered or transparently allocated electricity for finished-product storage and loading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `eu-pef-2021-2279`
- Range: Provisional storage-and-loading electricity screening guardrail; replace with reviewed site-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg net dispatched reference product
  - Basis: broad temporary range for circulation, filtration, pumping, and loading
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net dispatched kerosene-type jet fuel reference product (`reference_product_output`)

The net quantity crossing the refinery or manufacturing-terminal dispatch meter is the reference product output after reconciling certified tank receipts, inventory change, recirculation, samples, rework, and measured losses.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: fixed normalization to 1 kg net dispatched conforming product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `mass-balance-identity`
- Range: Reference normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Tank bottoms, filter residues, and drained water (`storage_loading_wastes`)

Instantiate separate waste exchanges for tank bottoms, filter residues, and drained or contaminated water by actual disposition route.

- Selected flow: Dataset-specific Tiangong waste flow matching each material and treatment route
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured quantity removed from finished-product storage and loading systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional storage-and-loading waste screening guardrail; replace with reviewed site-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: declared kg or m3/kg net dispatched reference product
  - Basis: broad temporary total applied after keeping material and volume exchanges separate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Finished-product storage and loading losses to air (`storage_loading_air_losses`)

Record substance-specific fugitive or displaced-vapour emissions that are not recovered and cross the environment boundary.

- Selected flow: Dataset-specific Tiangong elementary flow for each emitted substance and air compartment
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated loss from tank, loading, and vapour-control records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`
- Range: Provisional storage-and-loading air-loss screening guardrail; replace with reviewed substance-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg substance/kg net dispatched reference product
  - Basis: broad temporary check applied separately to each emitted substance and air compartment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment utilities and chemicals (`wastewater_treatment_inputs`)

Instantiate separate product exchanges for electricity, treatment chemicals, and make-up water consumed by on-site wastewater treatment.

- Selected flow: Dataset-specific Tiangong product flow for each actual utility or treatment chemical
- Flow property / unit: Carrier-specific property / kWh, kg, or m3
- Amount rule: metered or purchase-record quantity attributable to refinery or terminal wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional wastewater-treatment input screening guardrail; replace with reviewed carrier-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: declared exchange unit/kg net dispatched reference product
  - Basis: broad temporary check applied separately in the declared unit for each utility or chemical
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Process wastewater received for on-site treatment (`wastewater_to_onsite_treatment`)

Record wastewater transferred from included operations without duplicating the same transfer as an elementary emission.

- Selected flow: Dataset-specific Tiangong wastewater flow matching composition and treatment state
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater received by the on-site treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional wastewater-throughput screening guardrail; replace with reviewed site-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg net dispatched reference product
  - Basis: broad temporary wastewater volume received for on-site treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered water or hydrocarbons (`wastewater_recovered_products`)

Record recovered water or hydrocarbons as product outputs only when they meet a declared reuse specification and their subsequent use is documented.

- Selected flow: Dataset-specific Tiangong product flow matching the recovered material state
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured recovered quantity meeting the declared reuse specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional recovered-product screening guardrail; replace with reviewed material-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: declared kg or m3/kg net dispatched reference product
  - Basis: broad temporary total applied after keeping recovered water and hydrocarbons separate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wastewater-treatment sludge and residuals (`wastewater_treatment_residuals`)

Instantiate separate waste exchanges for sludge, spent media, and other residuals by disposition route.

- Selected flow: Dataset-specific Tiangong waste flow matching each residual and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured residual quantity transferred off-site or to further on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional wastewater-residual screening guardrail; replace with reviewed site-specific evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net dispatched reference product
  - Basis: broad temporary total applied after keeping each residual exchange separate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated effluent emissions to water (`treated_effluent_to_water`)

Instantiate one elementary exchange per reported substance and receiving water compartment using measured discharge volume and concentration.

- Selected flow: Dataset-specific Tiangong elementary flow for each substance and receiving water compartment
- Flow property / unit: Mass / kg
- Amount rule: discharged volume multiplied by matched-period effluent concentration, corrected for sampling coverage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dispatched reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-ref-bref-2015`
- Range: Provisional treated-effluent substance screening guardrail; replace with reviewed discharge evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg substance/kg net dispatched reference product
  - Basis: broad temporary check applied separately to each emitted substance and water compartment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | unit-process burdens | Avoid allocation by subdividing metered unit operations and assigning directly measured feeds, utilities, emissions, and wastes to the process outputs that cause them. | `eu-pef-2021-2279` |
| `allocation_rule_2` | shared refinery units | When subdivision or system expansion is not feasible, allocate shared burdens using a documented physical relationship that reflects how the unit operation changes with its outputs; mass, energy, or another causal parameter may be used only when justified for that unit. | `eu-pef-2021-2279` |
| `allocation_rule_3` | economic fallback | Use economic allocation only when subdivision, system expansion, and a relevant physical relationship are not feasible; use site- and period-specific net product values and disclose prices, averaging period, currency, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_rule_4` | recovered streams and rework | Do not credit internal recirculation, recovered fuel, off-spec rework, or recovered vapour as avoided external production while it remains inside the foreground system; record the transfer and prevent double counting. | `mass-balance-identity`; `eu-jrc-ref-bref-2015` |
| `allocation_rule_5` | allocation disclosure | Publish unallocated measured totals, output quantities, allocation factors, allocation method, and the post-allocation inventory so reviewers can reproduce the jet-fuel share. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | `component_manufacture_or_receipt` | feed, component, intermediate, co-product, and inventory balance | mass ledger and tank records | batch_id; material_id; opening_inventory; receipts; transfers; outputs; closing_inventory; density_15c; meter_status | calibrated mass or volume meters plus tank reconciliation | kg and m3 | each transfer and monthly close | all included batches in the reporting period | all included component units and tanks | reconcile opening inventory + receipts - outputs - closing inventory by material and period | meter calibration; tank gauge verification; reconciliation sign-off |
| `cp_hydrogen_and_chemicals` | `component_manufacture_or_receipt` | hydrogen and treatment chemicals | meter and issue records | material_id; supplier; quantity; purity; unit; unit_id; batch; destination | calibrated meter, weigh ticket, or controlled issue record | kg | each transfer or shift | all operated treatment campaigns | all included treatment units | sum by material and normalize after allocation | calibration; purchase reconciliation; purity certificate |
| `cp_utility_meters` | all | electricity, fuel, steam, and heat | utility meter records | meter_id; timestamp; opening; closing; unit; energy_basis; pressure; temperature; allocation_key | calibrated site or submeter readings | kWh, MJ, kg, or m3 | hourly, shift, or monthly according to meter | complete reporting period | included units, tank farm, loading, and laboratory | subtract exports and non-scope use; apply disclosed shared-utility allocation | calibration; meter coverage map; invoice reconciliation |
| `cp_water_and_wastewater` | all | make-up water, wastewater, treatment, and effluent | flow meter and laboratory records | stream_id; volume; timestamp; source_or_destination; sample_id; concentration; analyte; detection_limit | calibrated flow meter and representative sampling | m3 and kg | continuous or each discharge with matched sampling | complete reporting period | all included water and wastewater systems | match concentration and flow periods; sum substance loads; avoid duplicate transfer and emission entries | meter calibration; laboratory QA/QC; sampling plan |
| `cp_waste_records` | all | solid and liquid residuals | weigh ticket and manifest | waste_id; description; quantity; unit; date; treatment_route; carrier; recovery_status | scale, container record, and waste manifest | kg or m3 | each shipment or internal transfer | complete reporting period | all included units and waste stores | sum by waste type and route; reconcile opening and closing waste inventory | scale calibration; signed manifest; receiver record |
| `cp_direct_emissions` | all | direct air and water emissions | monitoring and factor-calculation records | source_id; substance; compartment; measured_value; activity_data; factor; factor_source; control_status; period | continuous monitoring, periodic test, mass balance, or approved factor calculation | kg | source-specific monitoring frequency | complete reporting period | every included emission source | calculate each substance separately and normalize after allocation | monitoring calibration; test report; factor provenance; control downtime log |
| `cp_batch_blending` | `batch_blending_and_release` | blend components and additives | batch recipe and transfer records | batch_id; component_batch_id; component_type; volume; mass; density_15c; additive_id; additive_dose; addition_point | controlled batch recipe plus calibrated transfer measurement | kg, m3, and mg/L | each batch | every released and rejected batch in the reporting period | blending tanks and additive systems | convert volumes with batch-specific density; reconcile recipe to tank mass | meter calibration; component certificates; additive qualification and issue records |
| `cp_batch_quality_release` | `batch_blending_and_release` | specification testing, homogeneity, release, quarantine, and rework | certificate and laboratory records | batch_id; tank_id; specification; grade; sample_id; test_method; result; limit; additive_declaration; component_share; release_status; certificate_id | representative batch sampling and accredited or controlled laboratory testing | specification units | each batch before release | every batch in the reporting period | point of manufacture | do not average away a failure; aggregate only conforming released batches and separately report rejected or reworked mass | certificate of quality; laboratory QA/QC; sample chain of custody; authorized release signature |
| `cp_storage_and_loading` | `finished_storage_and_loading` | certified tank receipt, inventory, samples, losses, and dispatch | tank and loading ledger | batch_id; tank_id; receipt_mass; opening_inventory; closing_inventory; sample_mass; rework_mass; dispatch_mass; meter_id | calibrated tank gauge and dispatch meter with batch traceability | kg and m3 | each transfer and dispatch; daily inventory | all released fuel in the reporting period | finished-product tanks through point-of-manufacture dispatch meter | reconcile certified receipt to net dispatch, inventory change, samples, rework, and losses | meter calibration; tank reconciliation; dispatch ticket; certificate link |
| `cp_allocation_records` | `component_manufacture_or_receipt` | shared refinery burdens and co-products | allocation workbook and source ledgers | unit_id; input_total; output_id; output_quantity; physical_driver; price; currency; period; allocation_factor | reviewed calculation from metered unit and product records | dimensionless plus source units | each reporting period and material route change | same period as the foreground inventory | all shared units contributing to the product | apply the declared hierarchy and retain unallocated and allocated totals | independent recalculation; factor sum check; source ledger links; sensitivity result |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | all inventory rows | normalized amount = allocated reporting-period amount / net dispatched conforming product mass | allocated amount; net dispatched mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calc_volume_to_mass` | liquid feeds, components, and product | mass = observed volume corrected to 15°C × batch-specific density at 15°C | observed volume; temperature; correction method; density_15c | kg | `mod-def-stan-91-091-14` |
| `calc_energy_conversion` | electricity and energy carriers | electricity_MJ = kWh × 3.6; other carrier energy = measured quantity × declared net or gross calorific value or measured enthalpy | metered quantity; carrier property; energy basis | MJ with retained original unit | `mass-balance-identity` |
| `calc_effluent_load` | treated effluent | substance mass = matched-period discharged volume × concentration, with unit and detection-limit treatment documented | discharge volume; analyte concentration; sampling coverage | kg substance to water | `eu-jrc-ref-bref-2015` |
| `calc_allocation` | shared refinery burdens | apply subdivision first; otherwise apply the justified physical relation; use economic allocation only as documented fallback; verify all allocation factors sum to 1 for the shared burden | unallocated inventory; outputs; allocation drivers | allocated inventory and factor set | `eu-pef-2021-2279` |
| `calc_storage_reconciliation` | finished storage and loading | certified receipts = net dispatch + closing inventory - opening inventory + samples + rework transfers + measured losses, with unexplained remainder disclosed | tank and dispatch ledger fields | reconciled net reference output and loss balance | `mass-balance-identity`; `mod-def-stan-91-091-14` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare fuel grade, governing specification, point of manufacture, component shares, additive package, and Tiangong reference-flow UUID; do not substitute generic kerosene or a narrow non-representative product flow. | product specification; certificate of quality; flow identity record |
| `dq_batch_traceability` | blending, release, storage, and loading | Maintain batch lineage from every blend component through the release certificate and dispatch record; identify rework and commingled batches explicitly. | component certificates; batch recipe; certificate of quality; tank and dispatch ledger |
| `dq_temporal` | foreground inventory | Use one complete, declared reporting period representative of normal operation; identify shutdowns, abnormal events, inventory carry-over, and campaigns that materially affect the result. | dated meters, ledgers, operating log, and production report |
| `dq_completeness` | mass, energy, emissions, and wastes | Reconcile material and energy ledgers without silent cut-offs; disclose every excluded stream, estimated record, unmatched balance remainder, and monitoring gap. | signed reconciliation; completeness register; gap log |
| `dq_measurement` | meters and laboratory results | Use calibrated measurement systems and retain method, unit, detection limit, correction basis, and calibration status. | calibration certificates; laboratory QA/QC; sampling plan |
| `dq_allocation` | shared refinery units | Retain unallocated totals and reproduce every allocation factor from source records for the same reporting period. | allocation workbook; output ledger; physical-driver or price evidence; sensitivity result |
| `dq_upstream_linkage` | purchased inputs and off-site treatment | Use geography-, technology-, and market-state-appropriate upstream datasets and prevent duplication with foreground operations. | supplier identity; dataset metadata; boundary cross-check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product identity | Reject a dataset whose product is gasoline-type jet fuel, non-aviation kerosene, aviation gasoline, an undeclared synthetic blend outside the CPC petroleum-product scope, or a product lacking a declared kerosene-type aviation turbine fuel specification and grade. | `unsd-energy-product-definitions`; `astm-d1655-23`; `faa-ac-20-24d-chg1` |
| `validation_rule_2` | reference flow | Require exactly 1 kg net dispatched conforming product linked to flow `e1ede47a-b840-45e6-b711-98cb547902cf`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, and Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. | `mass-balance-identity` |
| `validation_rule_3` | fuel-grade conformance | Require a batch-specific quality certificate or equivalent release record and apply the limits of the declared grade and specification. For ASTM D1655 grades, Jet A-1 differs from Jet A by the lower maximum freezing point of -47°C versus -40°C; do not apply one grade label to the other without evidence. | `astm-d1655-23`; `faa-ac-20-24d-chg1` |
| `validation_rule_4` | Jet A-1 quality checks | When the dataset declares Jet A-1 to Defence Standard 91-091 Issue 14, verify at least flash point ≥ 38.0°C, density at 15°C between 775.0 and 840.0 kg/m3, freezing point ≤ -47.0°C, viscosity at -20°C ≤ 8.000 mm2/s, and net specific energy ≥ 42.80 MJ/kg, together with all other applicable standard requirements. | `mod-def-stan-91-091-14` |
| `validation_rule_5` | batch integrity and traceability | Require a homogeneous batch, representative sampling, component and additive declarations, authorized release, and traceability from component certificates to the dispatch record; for Defence Standard 91-091 Issue 14, investigate density variation greater than 3.0 kg/m3 across the batch rather than treating it as homogeneous. | `mod-def-stan-91-091-14` |
| `validation_rule_6` | system boundary | Confirm that operated component supply or linked upstream datasets, treatment, blending, quality release, finished storage, and point-of-manufacture loading are included and that downstream distribution and aircraft use are not silently mixed into the foreground result. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| `validation_rule_7` | inventory completeness | Require explicit records for feeds and components, hydrogen when treatment is operated, utilities, water, co-products, direct emissions, wastewater, wastes, off-spec material, storage and loading losses, and off-site treatment links where applicable. | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| `validation_rule_8` | allocation | Verify the allocation hierarchy, causal justification, factor sum, unallocated totals, allocated totals, and economic sensitivity where economic allocation is used. | `eu-pef-2021-2279` |
| `validation_rule_9` | mass and batch reconciliation | Require reconciliation of component inputs, released batch mass, net dispatch, inventory change, samples, rework, co-products, wastes, and measured losses; disclose rather than force-close any unexplained remainder. | `mass-balance-identity`; `mod-def-stan-91-091-14` |
| `validation_rule_10` | estimates and UUIDs | Flag any modelled amount, provisional range, non-reference flow UUID, or process UUID that lacks documented selection evidence; Tiangong identity rows do not by themselves justify quantitative amounts. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a finished kerosene-type jet fuel batch or representative production mix at the point-of-manufacture dispatch boundary |
| downstream_use | Secondary dataset or background dataset for product-system models that require refinery- or terminal-gate kerosene-type jet fuel supply |
| allowed_use | Cradle-to-gate models when linked to complete upstream datasets; refinery or terminal benchmarking with matched boundaries; downstream fuel distribution and aircraft-use models that add those stages separately |
| excluded_use | Stand-alone claim of ASTM or Defence Standard certification; CORSIA or sustainability eligibility; comparison of grades or sites without matched specification, allocation, geography, technology, and reporting period; direct representation of airport delivery or aircraft combustion |
| required_metadata | PCR id; Tiangong flow UUID; fuel grade and specification; point of manufacture; geography; technology and route; component shares; additive package; batch or reporting period; foreground boundary; allocation method; reference mass; density at 15°C; net calorific value basis; data sources |
| required_quality_disclosure | Batch traceability and release status; measured versus calculated amounts; meter and laboratory coverage; inventory reconciliation; direct-emission methods; wastewater and waste coverage; allocation factors and sensitivity; upstream dataset choices; cut-offs; data gaps; provisional estimates |
| update_trigger | Change in fuel specification or grade; material route, component slate, synthetic or co-processed share, refinery configuration, treatment severity, energy source, allocation method, storage or loading system, geography, regulation, or reporting-period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-energy-product-definitions` | official_guidance | United Nations Statistics Division, Energy Yearbook Definitions, Kerosene-type jet fuel, https://unstats.un.org/unsd/energy/yearbook/def_english_print.htm (retrieved 2026-08-09) | category boundary and distinction from gasoline-type jet fuel and other kerosene |
| `astm-d1655-23` | standard | ASTM International, ASTM D1655-23, Standard Specification for Aviation Turbine Fuels, https://www.astm.org/d1655-23.html (retrieved 2026-08-09) | Jet A and Jet A-1 scope, minimum property groups, additives, sampling, and testing |
| `faa-ac-20-24d-chg1` | official_guidance | U.S. Federal Aviation Administration, AC 20-24D Change 1, Approval of Propulsion Fuels, Additives, and Lubricating Oils, https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-24D_Chg_1.pdf (retrieved 2026-08-09) | accepted kerosene-type grade context and Jet A versus Jet A-1 freezing-point distinction |
| `mod-def-stan-91-091-14` | standard | UK Ministry of Defence, Defence Standard 91-091 Issue 14, Turbine Fuel, Kerosene Type, Jet A-1, 7 March 2022, hosted copy: https://kamino.fra1.cdn.digitaloceanspaces.com/jig/app/uploads/2022/07/91-091-Issue-14.pdf (retrieved 2026-08-09) | Jet A-1 limits, batch homogeneity, quality assurance, certification, additives, components, and traceability |
| `eu-jrc-ref-bref-2015` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Refining of Mineral Oil and Gas, 2015, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf (retrieved 2026-08-09) | refinery process decomposition, treatment, blending, storage, loading, emissions, wastewater, and waste coverage |
| `us-epa-ap42-5-1-2015` | official_guidance | U.S. Environmental Protection Agency, AP-42 Section 5.1 Petroleum Refining, April 2015, https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf (retrieved 2026-08-09) | refinery separation, conversion, treating, storage, wastewater, and direct-emission source structure |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, Annex I, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-09) | data production, upstream linkage, allocation hierarchy, unit-process subdivision, and quality disclosure |
| `mass-balance-identity` | method_factor | Conservation-of-mass and unit-conversion identities used by this PCR; no empirical default inventory value | reference normalization, material reconciliation, and deterministic unit conversions |
