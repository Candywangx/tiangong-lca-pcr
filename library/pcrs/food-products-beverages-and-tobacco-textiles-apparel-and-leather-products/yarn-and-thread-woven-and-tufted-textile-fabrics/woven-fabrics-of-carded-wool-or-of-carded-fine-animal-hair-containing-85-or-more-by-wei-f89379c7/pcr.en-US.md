---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-carded-wool-or-of-carded-fine-animal-hair-containing-85-or-more-by-wei-f89379c7
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Woven fabrics of carded wool or of carded fine animal hair, containing 85% or more by weight of wool or fine animal hair

## 1. Scope and Applicability

This PCR covers mill-gate production of woven fabric made from carded wool yarn, carded fine-animal-hair yarn, or their combination when wool and fine animal hair together account for at least 85% of fabric mass. It covers yarn preparation, weaving, route-applicable wet or thermal finishing, and final inspection. The foreground boundary starts with qualifying yarn received at the fabric mill and ends with manufactured fabric accepted at the mill gate.

It excludes combed-wool or combed-fine-animal-hair fabrics, fabrics below the 85% composition threshold, knitted or tufted fabrics, apparel manufacture, animal husbandry, raw-wool scouring, carding, spinning, distribution, use, and end of life. Packaging is outside the reference product unless the reporting data package explicitly includes packaging in its declared product state and models each packaging component separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-carded-wool-or-of-carded-fine-animal-hair-containing-85-or-more-by-wei-f89379c7 |
| classification_refs | CPC 3.0: 26520 (exact) |
| covered_products | Woven fabrics of carded wool or carded fine animal hair containing at least 85% by mass of wool or fine animal hair |
| excluded_products | Combed-wool or combed-fine-animal-hair woven fabrics; fabrics below 85% wool or fine animal hair; knitted, crocheted, tufted, coated, laminated, or apparel products when they are classified outside the declared product category |
| representative_product | Finished woven fabric of carded wool or carded fine animal hair, containing at least 85% by mass of wool or fine animal hair |
| production_route | Qualifying carded-wool or carded-fine-animal-hair yarn receipt; warp and weft preparation; weaving; applicable finishing; inspection and mill-gate release |
| market_state | Finished product, manufactured, at fabric-mill gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of woven fabric made from carded wool or carded fine animal hair |
| How much | 1 kg of accepted fabric at the declared as-delivered moisture condition |
| How well | Wool and fine animal hair together are at least 85% by mass; carded rather than combed yarn route; product meets the declared construction, finish, and quality specification |
| How long or cycle | One production lot at mill-gate release; no use-stage service duration is represented |
| reference_flow_link | Output `final_fabric_output` from process `finishing_and_inspection` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of carded wool or of carded fine animal hair, containing 85% or more by weight of wool or fine animal hair `d5a61944-e4b9-4a9c-9b26-b2f2b413d7d0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wool and fine-animal-hair mass fraction; fibre species; carded-yarn route; fabric construction and weave; width and mass per unit area; colour and finish; as-delivered moisture condition; production site; production period; wet-finishing route; thermal-finishing route; packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product and material exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to 1 kg of accepted fabric at the declared as-delivered moisture condition; retain measured gross and accepted product masses and disclose any moisture correction. |
| `composition_threshold` | product identity and yarn inputs | Mass fraction | % by mass | Demonstrate from bill-of-material, supplier, or lot-test records that wool and fine animal hair together are at least 85% by mass; do not infer compliance from the product name alone. |
| `area_mass_conversion` | fabric area records | Mass per area and area | kg, m2, kg/m2 | When production is recorded by area or length, calculate mass from measured accepted area and lot-specific mass per unit area; retain width, length, and test records. |
| `energy_unit_separation` | electricity, steam, and fuels | Energy | kWh or MJ | Record electricity, purchased steam, and each fuel separately in their metered or invoiced units; retain the conversion factor and source when reporting a common energy unit. |
| `water_balance_units` | process water and wastewater | Volume or Mass | m3 or kg | Retain the measured water and wastewater unit; when converting between mass and volume, disclose the density and temperature basis used. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualifying carded-wool or carded-fine-animal-hair yarn, with composition evidence, received at the fabric-mill gate |
| starting_condition_role | Upstream product input; animal production, scouring, carding, and spinning burdens are represented by upstream datasets rather than repeated in this foreground system |
| product_classification_scope | Woven fabric within the reviewed semantic scope corresponding exactly to CPC 3.0 code 26520 |
| recursive_input_rule | When an input is already a woven fabric in the same product category, record it as a separately referenced upstream product flow, start the foreground account at the disclosed fabric state, and exclude overlapping yarn-preparation and weaving operations from the receiving process account. |
| upstream_dataset_requirement | Each purchased yarn or same-category fabric input requires an upstream dataset whose product identity, fibre composition, carded route, geography, period, and allocation basis are disclosed. |
| disclosure | Declare purchased-input state, included unit processes, wet and thermal finishing routes, outsourced operations, excluded operations, packaging treatment, moisture basis, and any same-category recursive input. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_yarn_to_mill_gate` | foreground system | Include yarn preparation, weaving, all route-applicable finishing performed for the declared product, inspection, associated utilities, process chemicals, wastes, and direct emissions from receipt of qualifying yarn through mill-gate release. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_route_disclosure` | process selection | Record whether sizing, washing, fulling, dyeing, drying, heat treatment, or chemical finishing occurs; do not add a process that did not occur, and do not omit a process that contributes to the accepted product. | `eu-textiles-bat-2022` |
| `boundary_input_output_inventory` | foreground records | Maintain an input-output inventory covering textile materials, each process chemical, water, energy, wastewater, waste gas, and solid or liquid waste at the detail supported by the installation and route. | `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | Warp and weft yarn preparation | required | Include preparation performed after qualifying yarn receipt, including winding, warping, and route-applicable sizing. | Converts purchased qualifying yarn into loom-ready warp and weft. | kg of loom-ready yarn |
| `weaving` | Weaving | required | Include all loom operations that form the woven fabric. | Produces grey woven fabric and records yarn losses and loom electricity. | kg of grey woven fabric |
| `finishing_and_inspection` | Finishing and final inspection | required | Include final inspection for every product and each wet or thermal finishing operation only when it occurs for the declared route. | Produces accepted mill-gate fabric and records route-specific water, chemicals, heat, fuel, wastewater, and direct emissions. | 1 kg accepted fabric |

### Process: Warp and weft yarn preparation (`yarn_preparation`)

#### Inputs

##### Product flows

###### Qualifying carded-wool or fine-animal-hair yarn (`carded_wool_yarn_input`)

This is the purchased yarn that establishes the declared starting condition. The lot record must demonstrate the carded route and at least 85% combined wool and fine-animal-hair content for the resulting fabric.

- Selected flow: Carded wool or carded fine animal hair yarn containing at least 85% wool or fine animal hair
- Flow property / unit: Mass / kg
- Amount rule: Mass of qualifying yarn issued to the preparation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of loom-ready yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_mass`
- Sources: `unsd-cpc-3-0`

###### Medium-voltage electricity for yarn preparation (`electricity_yarn_preparation`)

Metered electricity consumed by winding, warping, sizing equipment when present, ventilation, and process controls is recorded for this process only.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity consumption for the yarn-preparation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of loom-ready yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Loom-ready warp and weft yarn (`prepared_yarn_output`)

This internal product flow records the yarn accepted for weaving after preparation.

- Selected flow: Prepared warp and weft yarn of carded wool or carded fine animal hair
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred to weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per yarn-preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_mass`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

###### Carded-wool or fine-animal-hair yarn waste (`wool_yarn_waste_output`)

Collect loom-preparation yarn ends, damaged yarn, and unusable yarn generated before weaving as this separate waste flow.

- Selected flow: Carded wool or fine-animal-hair yarn waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of yarn waste leaving yarn preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of loom-ready yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_mass`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Weaving (`weaving`)

#### Inputs

##### Product flows

###### Loom-ready warp and weft yarn (`prepared_yarn_input`)

This internal input is the measured loom-ready yarn transferred from yarn preparation.

- Selected flow: Prepared warp and weft yarn of carded wool or carded fine animal hair
- Flow property / unit: Mass / kg
- Amount rule: Measured mass issued to the weaving lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of grey woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_mass`
- Sources: `eu-textiles-bat-2022`

###### Medium-voltage electricity for weaving (`electricity_weaving`)

Record loom, compressed-air generation attributed to the loom where applicable, local ventilation, and weaving-control electricity through the site's metering method.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity consumption for the weaving lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of grey woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Grey woven fabric (`grey_fabric_output`)

This internal product flow is fabric directly after weaving and before route-applicable finishing.

- Selected flow: Grey woven fabric of carded wool or carded fine animal hair containing at least 85% wool or fine animal hair
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted grey-fabric mass transferred to finishing and inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per weaving lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_mass`
- Sources: `unsd-cpc-3-0`; `eu-textiles-bat-2022`

##### Waste flows

###### Woven-fabric offcuts (`wool_fabric_offcuts_output`)

Record selvedge, start-up fabric, damaged woven fabric, and trimming losses as one composition-specific solid-waste flow; do not combine it with yarn waste or wastewater.

- Selected flow: Woven-fabric offcuts of carded wool or carded fine animal hair
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of fabric offcuts leaving weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of grey woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_mass`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Finishing and final inspection (`finishing_and_inspection`)

#### Inputs

##### Product flows

###### Grey woven fabric entering finishing (`grey_fabric_finishing_input`)

This input is the grey fabric transferred from weaving. Its mass and lot identity preserve the link to yarn composition and the carded route.

- Selected flow: Grey woven fabric of carded wool or carded fine animal hair containing at least 85% wool or fine animal hair
- Flow property / unit: Mass / kg
- Amount rule: Measured grey-fabric mass entering the finishing and inspection lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_mass`
- Sources: `unsd-cpc-3-0`; `eu-textiles-bat-2022`

###### Process water for wet finishing (`process_water_finishing`)

Record process water only when washing, fulling, dyeing, rinsing, or another aqueous finishing step occurs for the declared product route.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water supplied to the applicable finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `eu-textiles-bat-2022`

###### Purchased steam for finishing (`steam_finishing`)

Record purchased steam separately when it supplies heat to fulling, washing, dyeing, drying, or thermal finishing.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced steam delivered to the applicable finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_meter`
- Sources: `eu-textiles-bat-2022`

###### Acetic acid for pH control (`acetic_acid_finishing`)

Record acetic acid as this individual chemical input only when the finishing recipe uses it for pH control. Other chemicals must be represented by their own atomic flow rows in the foreground data package.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Mass issued from the approved recipe and verified against chemical inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_issue_mass`
- Sources: `eu-textiles-bat-2022`

###### Medium-voltage electricity for finishing and inspection (`electricity_finishing`)

Record electricity for wet-processing machinery, dryers, finishers, inspection equipment, ventilation, and controls through the site's metering method.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity consumption for the finishing and inspection lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-textiles-bat-2022`

###### Natural gas for on-site direct heat (`natural_gas_finishing`)

Record natural gas only when on-site combustion supplies direct or indirect heat to the applicable finishing or drying operation; do not combine it with purchased steam.

- Selected flow: Natural gas in the gaseous state
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas consumption attributed to the applicable finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_meter`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted woven fabric at mill gate (`final_fabric_output`)

This is the declared reference product after all applicable finishing and final inspection.

- Selected flow: Woven fabrics of carded wool or of carded fine animal hair, containing 85% or more by weight of wool or fine animal hair `d5a61944-e4b9-4a9c-9b26-b2f2b413d7d0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg after normalization to accepted product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Wool-fabric finishing wastewater (`finishing_wastewater_output`)

Record the wastewater leaving wet finishing before on-site or off-site treatment. Keep this stream separate from unpolluted cooling water and solid waste.

- Selected flow: Wool-fabric finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater volume from the applicable finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`fossil_carbon_dioxide_output`)

Record fossil carbon dioxide to the applicable air compartment only when on-site natural-gas combustion occurs and the emission is measured as a foreground release. Calculated emissions require a separately reviewed factor and calculation rule.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured fossil carbon-dioxide emission attributed to the applicable finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emission_mass`
- Sources: `eu-textiles-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared yarn-preparation, weaving, and finishing operations | Avoid allocation by metering, lot tracking, recipe records, machine time, or other subdivision that directly assigns inputs and outputs to the declared fabric. | `iso-14044-2006` |
| `allocation_physical_relationship` | inseparable multi-product operations | When subdivision is not practicable, use a documented physical relationship that reflects how the shared input or operation changes with the outputs; mass allocation may be used only when that relationship is demonstrated for the affected operation. | `iso-14044-2006` |
| `allocation_economic_fallback` | inseparable co-products without a defensible physical relationship | Economic allocation is a last-resort study choice; disclose prices, currency, price period, calculation, sensitivity, and the reason a physical relationship was not usable. | `iso-14044-2006` |
| `allocation_waste_and_recovery` | yarn waste, fabric offcuts, wastewater, and recovered materials | Do not treat a waste stream as a co-product merely because it is transferred for recovery. Record its measured mass and destination; disclose any avoided-burden or recycled-content convention outside the foreground unit-process inventory. | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_lot_mass` | `yarn_preparation`; `weaving`; `finishing_and_inspection` | yarn, grey fabric, accepted fabric | weighbridge, calibrated scale, production order, bill of material, quality release | lot_id; material_id; fibre_species; carded_route; wool_fine_hair_fraction; gross_mass; accepted_mass; moisture_condition; timestamp | Link calibrated mass records and quality release to each production lot. | kg | each lot | complete reporting period | all in-scope lines and outsourced steps | Sum accepted, issued, transfer, and rejected masses by process and lot before reference-flow normalization. | calibration certificate; supplier composition evidence; lot quality release; reconciliation record |
| `cp_electricity_meter` | `yarn_preparation`; `weaving`; `finishing_and_inspection` | medium-voltage electricity | submeter, production meter, or invoice with allocation record | meter_id; start_reading; end_reading; timestamp; process_id; lot_id; allocation_driver | Read process submeter where available; otherwise document the site-meter allocation to machine or lot. | kWh | each lot or meter interval | complete reporting period | all in-scope equipment | Sum consumption by process; allocate only documented shared-meter residuals. | meter calibration or utility invoice; allocation worksheet |
| `cp_water_meter` | `finishing_and_inspection` | process water | flow meter and wet-process batch record | meter_id; start_reading; end_reading; lot_id; operation; reuse_volume; timestamp | Record supplied, reused, and recycled water separately for each applicable wet-finishing lot. | m3 | each batch or meter interval | complete reporting period | all wet-finishing lines | Sum net external water input by lot without netting wastewater. | meter check; water balance; batch record |
| `cp_steam_meter` | `finishing_and_inspection` | purchased steam | steam meter or supplier invoice | meter_id; delivered_quantity; pressure; temperature; condensate_return; lot_id; timestamp | Measure delivered steam and retain pressure, temperature, and condensate-return information used for energy conversion. | kg or MJ | each batch or meter interval | complete reporting period | all steam-using in-scope equipment | Convert only with a documented enthalpy basis; sum by lot. | meter check; invoice; conversion worksheet |
| `cp_chemical_issue_mass` | `finishing_and_inspection` | acetic acid | approved recipe, batch sheet, chemical issue and return log | chemical_name; supplier_product; concentration; issued_mass; returned_mass; lot_id; operation; timestamp | Reconcile recipe dosage with net chemical issue for the lot and retain concentration. | kg | each batch | complete reporting period | all applicable finishing recipes | Sum net issued mass for this chemical only; create separate atomic records for every other chemical. | recipe approval; inventory reconciliation; safety data sheet |
| `cp_natural_gas_meter` | `finishing_and_inspection` | natural gas | fuel meter or supplier invoice | meter_id; start_reading; end_reading; energy_basis; lot_id; equipment; timestamp | Attribute metered fuel to operating equipment and lot using documented operating records. | m3 or MJ | each batch or meter interval | complete reporting period | all in-scope combustion equipment | Retain raw volume and heating-value basis; sum energy by lot. | meter check; invoice; heating-value certificate |
| `cp_solid_waste_mass` | `yarn_preparation`; `weaving` | yarn waste and fabric offcuts | segregated waste container scale and dispatch record | waste_name; composition; container_id; gross_mass; tare_mass; destination; lot_id; timestamp | Weigh each segregated waste stream and link it to the generating process and lot. | kg | each container or dispatch | complete reporting period | all in-scope lines | Sum net mass by atomic waste identity, process, and destination. | scale check; waste transfer record; segregation log |
| `cp_wastewater_meter` | `finishing_and_inspection` | wool-fabric finishing wastewater | wastewater flow meter and batch log | meter_id; flow; pH; temperature; conductivity; lot_id; discharge_route; timestamp | Measure the polluted finishing stream separately from reusable or unpolluted water. | m3 | each batch or meter interval | complete reporting period | all wet-finishing discharge points | Sum discharge by lot and route; do not subtract it from process-water input. | meter check; water balance; discharge log |
| `cp_direct_air_emission_mass` | `finishing_and_inspection` | fossil carbon dioxide to air | calibrated continuous or periodic emission measurement | emission_point; compartment; measured_concentration; gas_flow; duration; lot_id; method; timestamp | Measure the identified emission point using the applicable approved method and attribute only the operating interval serving the lot. | kg | applicable measurement interval | representative of the reporting period and operating route | all relevant in-scope emission points | Integrate measured mass flow over the attributed operating interval; do not substitute an uncited factor. | calibration; laboratory report; operating log; method record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all collected inventory rows | normalized amount = collected process or lot amount / accepted final-fabric mass | collected amount; accepted final-fabric mass | amount per 1 kg accepted final fabric | `iso-14044-2006` |
| `fabric_mass_from_area` | lots recorded by area or length | fabric mass = accepted length × accepted width × lot-specific mass per unit area | accepted length; accepted width; measured mass per unit area | accepted fabric mass | `iso-14044-2006` |
| `process_mass_reconciliation` | yarn preparation, weaving, and finishing | Reconcile measured product input with accepted product output, separately measured waste, retained work in progress, and documented stock change; investigate rather than force-close unexplained residuals. | input mass; output mass; waste mass; work in progress; stock change | process mass-balance finding | `eu-textiles-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and yarn inputs | Retain exact product name, composition evidence, fibre species, carded-route evidence, lot identity, and accepted Tiangong UUID status. | supplier specification; bill of material; lot test; UUID review status |
| `dq_measurement` | mass, electricity, water, steam, fuel, wastewater, and emissions | Use calibrated or otherwise controlled meters and scales; retain raw readings, units, conversion bases, and gap treatment. | calibration or verification record; raw meter log; invoice; calculation worksheet |
| `dq_temporal` | reporting period | Cover all in-scope production in the declared period and identify shutdown, start-up, abnormal operation, and missing intervals. | production calendar; meter coverage log; exception register |
| `dq_completeness` | process inventory | Reconcile every included process against material, water, energy, chemical, waste, wastewater, and relevant direct-emission records without aggregated selector flows. | input-output inventory; water balance; energy balance; chemical inventory; waste register |
| `dq_outsourcing` | outsourced preparation, weaving, or finishing | Identify the contractor, transferred product state, included operations, primary-data coverage, and any background substitution. | contract manufacturing record; transfer document; supplier dataset |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the exact reference product-flow UUID, Mass flow-property UUID, 1 kg reference amount, and all required qualifiers; fail validation when a required qualifier is absent. | `unsd-cpc-3-0` |
| `validate_category_threshold` | product and yarn composition | Confirm that wool and fine animal hair together account for at least 85% by mass and that the route is carded rather than combed. | `unsd-cpc-3-0` |
| `validate_process_route` | process map | Confirm yarn preparation, weaving, finishing, inspection, outsourcing, and exclusions against actual production records; every performed wet or thermal operation must be represented. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_atomic_inventory` | process inventory | Confirm that every exchange is one specific product, electricity or energy carrier, chemical, waste, or elementary flow; reject collection labels and reject UUIDs lacking exact identity evidence. | `eu-textiles-bat-2022` |
| `validate_input_output_inventory` | foreground completeness | Confirm separately recorded textile materials, each process chemical, water, electricity, steam, each fuel, wastewater, solid waste, and relevant direct emissions for the applicable route. | `eu-textiles-bat-2022` |
| `validate_mass_reconciliation` | each process and final reference | Reconcile lot inputs, outputs, wastes, work in progress, and stock change; report unexplained residuals and do not silently force the balance. | `eu-textiles-bat-2022` |
| `validate_allocation_disclosure` | shared and multi-product operations | Confirm subdivision evidence or the selected allocation relationship, calculation, data period, and sensitivity disclosure. | `iso-14044-2006` |
| `validate_data_coverage` | published dataset | Confirm temporal, site, route, outsourced-operation, meter, and record coverage and disclose all gaps or substitutions. | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for mill-gate woven fabric; eligible for reviewed use as a secondary_dataset or background_dataset |
| downstream_use | Construction of TianGong `process` records and downstream `lifecyclemodel` projections for products consuming CPC 26520 woven fabric |
| allowed_use | Studies whose product matches the declared fibre composition, carded route, construction, finish, geography, period, moisture basis, and mill-gate boundary |
| excluded_use | Combed-wool fabrics, fabrics below the 85% threshold, knitted or tufted textiles, apparel manufacture, use-stage performance, and product systems requiring omitted upstream or downstream stages without added datasets |
| required_metadata | PCR id; exact product-flow UUID; product and yarn composition; fibre species; carded-route evidence; weave and construction; width; mass per unit area; finish; moisture condition; site; period; process route; outsourced operations; allocation; cut-off and packaging treatment |
| required_quality_disclosure | Primary-data share; meter and scale coverage; composition and quality-test evidence; temporal and site coverage; missing records; substitutions; unresolved UUIDs; allocation method; mass-balance findings; water, energy, chemical, waste, wastewater, and direct-emission completeness |
| update_trigger | Change in fibre composition, carded/combed route, weave, finish, site, process route, energy or water system, chemical recipe, allocation, upstream yarn source, measurement system, reference-flow identity, or material evidence source |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, CPC resources and structure, https://unstats.un.org/unsd/classifications/Econ/CPC | Product-category title, composition threshold, and classification scope |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, published January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry | Textile process decomposition, including fabric production, pretreatment, dyeing, and finishing |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, CELEX 32022D2508, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022D2508 | Input-output inventory, fabric production, sizing, weaving, finishing, water, energy, chemicals, waste, wastewater, and emissions collection rules |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Inventory normalization, allocation hierarchy, reporting, and data-quality disclosure |
