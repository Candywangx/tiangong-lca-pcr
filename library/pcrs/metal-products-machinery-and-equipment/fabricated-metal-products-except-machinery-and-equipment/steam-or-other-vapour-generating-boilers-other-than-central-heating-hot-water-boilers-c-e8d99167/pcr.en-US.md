---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.steam-or-other-vapour-generating-boilers-other-than-central-heating-hot-water-boilers-c-e8d99167
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Steam or other vapour generating boilers (other than central heating hot water boilers capable also of producing low pressure steam); super-heated water boilers

## 1. Scope and Applicability

This PCR applies to the cradle-to-manufacturer-gate production of a finished boiler whose principal product function is to generate steam or another vapour, or to supply pressurized hot water above its atmospheric boiling temperature. It covers fire-tube, water-tube, hybrid and other boiler designs, including integral economizers or air preheaters when they are part of the product as sold.

It excludes central-heating hot-water boilers capable only additionally of producing low-pressure steam, separately supplied boiler auxiliary plant, separately supplied condensers, spare parts, installation at the customer site, steam distribution, feedwater treatment outside the sold boiler, operation, maintenance and end of life. A foreground package shall state whether the declared product is a steam/vapour boiler or an over-110 °C pressurized hot-water boiler; the latter is retained because it is explicitly part of the official classification even though the steam-boiler study did not model it as a separate technology.

This mass-normalized factory-gate PCR supports comparison of manufacturing inventories. It does not compare the lifetime steam or heat service of boilers with different efficiencies, pressures, capacities or service lives.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.steam-or-other-vapour-generating-boilers-other-than-central-heating-hot-water-boilers-c-e8d99167 |
| classification_refs | CPC 3.0: 42320 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Finished fire-tube, water-tube, hybrid or other steam/vapour-generating boilers; finished pressurized hot-water boilers operating above 110 °C; integral efficiency components included in the product as sold |
| excluded_products | Central-heating boilers for hot water or low-pressure steam; separately supplied auxiliary plant, condensers and parts; complete steam-generation services or delivered steam/heat |
| representative_product | A factory-complete industrial steam boiler ready for shipment after pressure and quality testing |
| production_route | Purchased-material receipt; cutting and forming; welding and assembly; insulation or refractory installation where specified; protective coating where specified; factory inspection and hydrostatic testing; preparation for shipment |
| market_state | Finished boiler at the manufacturer gate, identified by dry shipped mass and declared configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a finished steam/vapour-generating or pressurized super-heated-water boiler at the manufacturer gate |
| How much | 1 kg of dry, saleable boiler as shipped, excluding temporary test water |
| How well | Conforms to the declared boiler design, rated thermal output, working pressure, outlet medium and temperature, fuel or heat source, integral-component scope and factory acceptance requirements |
| How long or cycle | One production lot at factory gate; not normalized to operating life or lifetime heat output |
| reference_flow_link | The measured dry saleable mass of the `boiler_reference_product` output is normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Steam/vapour-generating or super-heated-water boiler (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | outlet medium; fire-tube/water-tube/hybrid/other design; rated thermal output; rated steam or hot-water capacity; maximum allowable working pressure; rated outlet temperature; fuel or heat source; integral economizer/air-preheater/burner/control scope; dry shipped mass; factory geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate the dry saleable product mass from controlled bill-of-material and shipment records; exclude temporary hydrostatic-test water, returnable transport fixtures and separately sold auxiliary plant. |
| `mass_normalization` | all mass exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Divide reporting-period exchange mass by dry saleable boiler mass produced in the same period; preserve unrounded source quantities and conversion factors. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered electricity to MJ using 1 kWh = 3.6 MJ and do not mix purchased electricity with fuels or purchased heat. |
| `gas_reference_conditions` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report measured gas volume at declared reference temperature and pressure; disclose any standard-volume conversion and meter basis. |
| `water_mass_conversion` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass or convert measured volume with a documented density and temperature; report net input only when reuse is measured and separately disclosed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased plates, insulation, refractory, welding consumables, coatings, energy and water cross the factory boundary with supplier and product-state records; the foreground starts at receipt by the boiler manufacturer. |
| starting_condition_role | Factory-gate input condition for foreground fabrication and assembly; upstream production remains represented by linked supplier or secondary datasets. |
| product_classification_scope | Finished boiler equipment within the semantic boundary above; classification identity does not include separately supplied auxiliary plant, boiler parts or delivered steam/heat. |
| recursive_input_rule | If a purchased input is itself a finished boiler in this category, record it as one disclosed supplier product input with its own upstream dataset and do not recursively reproduce its manufacture inside this foreground process. |
| upstream_dataset_requirement | Link every purchased atomic product input to a geographically and technologically representative upstream dataset; add separate atomic rows for configuration-specific components not listed in the minimum inventory. |
| disclosure | Declare component scope, purchased-versus-fabricated split, boiler design and pressure class, output medium, fuel/heat source, test route, coating route, factory geography, reporting period and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground product system | Include material receipt through cutting, forming, welding, assembly, applicable insulation/refractory/coating, factory testing and shipment preparation; exclude customer-site installation, distribution, operation, maintenance and end of life. | eu-steam-boilers-ecodesign-2014 |
| `boundary_integral_components` | product configuration | Include economizers, air preheaters, burners, controls and other items only when integral to the boiler product as sold; separately supplied auxiliary plant is outside this PCR product identity and shall be modelled separately. | eu-steam-boilers-ecodesign-2014; un-cpc-3-0-structure-2025 |
| `boundary_complete_bom` | purchased and fabricated components | Reconcile the complete product bill of materials to the dry shipped mass and add each omitted configuration-specific material or component as one atomic exchange with a disclosed upstream dataset. | eu-steam-boilers-ecodesign-2014; eu-pef-method-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `boiler_manufacture` | Integrated boiler fabrication, assembly, finishing and factory testing | required | Always included for a finished boiler; conditional flow cards apply only when their stated route is present | foreground production | 1 kg dry saleable boiler at manufacturer gate |

### Process: Integrated boiler fabrication, assembly, finishing and factory testing (`boiler_manufacture`)

#### Inputs

##### Product flows

###### Carbon-steel plate for boiler pressure parts (`carbon_steel_pressure_plate`)

Record carbon-steel plate entering fabrication of pressure-retaining shells, drums, headers, tubesheets or other declared boiler parts. The exact pressure-vessel grade and purchased product state shall be retained in the foreground record.

- Selected flow: Carbon-steel pressure-vessel plate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unopened returns to stores
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_records`
- Sources: eu-steam-boilers-ecodesign-2014

###### Rock-wool insulation (`rock_wool_insulation`)

Record rock wool installed within the sold boiler boundary. Apply only when the declared design uses rock-wool insulation; other insulation materials require separate atomic rows.

- Selected flow: rock wool `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented offcuts sent to separately recorded waste routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_records`
- Sources: eu-steam-boilers-ecodesign-2014

###### Refractory-brick lining (`refractory_brick_lining`)

Record refractory bricks installed in the sold boiler. Apply only when refractory brick is part of the declared configuration; castable or fibre refractory requires a separate atomic row.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass / kg
- Amount rule: measured issued refractory-brick mass attributable to saleable boilers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_records`
- Sources: eu-steam-boilers-ecodesign-2014

###### Flux-cored welding wire (`flux_cored_wire`)

Record flux-cored wire consumed in pressure-part or structural welding. Apply only to flux-cored arc-welding operations; other electrodes, wires, fluxes and shielding gases require separate atomic rows.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: stores issue minus unused returns, reconciled to welding job records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_records`
- Sources: us-epa-ap42-electric-arc-welding

###### Industrial maintenance coating (`industrial_maintenance_coating`)

Record formulated protective coating applied to boiler surfaces. Apply only when a liquid industrial maintenance coating is used; powder, waterborne or other coating products require their own atomic rows.

- Selected flow: Industrial Maintenance Coatings `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- Flow property / unit: Mass / kg
- Amount rule: coating issued to application, including measured overspray and application losses within the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_records`
- Sources: eu-steam-boilers-ecodesign-2014; us-epa-ap42-other-metal-coating

###### Industrial oxygen for thermal cutting (`industrial_oxygen_cutting`)

Record purchased oxygen used for oxy-fuel cutting or gouging. Apply only when that fabrication route is used and keep purity, pressure and reference conditions in the foreground record.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-invoiced oxygen volume attributable to boiler fabrication
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: us-epa-ap42-electric-arc-welding

###### Hydrostatic-test process water (`hydrostatic_test_water`)

Record process water introduced for factory hydrostatic pressure testing. Measure reuse and return separately so the input is not inferred from vessel volume alone.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh test-water input crossing the factory process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrostatic_test_water_records`
- Sources:

###### Manufacturing electricity (`manufacturing_electricity`)

Record purchased electricity used by cutting, forming, welding, handling, assembly, coating ventilation or curing, inspection and testing within the foreground boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or an auditable allocation of the factory meter to included boiler production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Factory natural gas (`factory_natural_gas`)

Record gaseous natural gas burned during included hot testing, direct-fired curing or other documented factory operations. Apply only when the gas is consumed inside the foreground boundary; boiler lifetime fuel use is excluded.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gas volume attributable to included factory operations at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished boiler reference product (`boiler_reference_product`)

Record dry saleable boiler mass after factory acceptance and before shipment. Temporary test water and separately sold auxiliary plant are not part of this output.

- Selected flow: Steam/vapour-generating or super-heated-water boiler (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or BOM-reconciled dry mass of accepted saleable boilers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: normalized to 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_mass_records`
- Sources: un-cpc-3-0-structure-2025; eu-steam-boilers-ecodesign-2014

##### Waste flows

###### Steel fabrication scrap (`steel_scrap_output`)

Record segregated ferrous plate, tube and section offcuts leaving the foreground as scrap. Keep stainless or other alloy scrap in separate rows when composition affects the receiving route.

- Selected flow: Scrap steel `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- Flow property / unit: Mass / kg
- Amount rule: measured scrap dispatched from included boiler production, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch_records`
- Sources:

###### Hydrostatic-test wastewater (`hydrostatic_test_wastewater`)

Record test water that leaves the foreground for sewerage, treatment or disposal. Apply only to discharged water; internally reused or retained water is not an output.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured discharged hydrostatic-test water by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrostatic_test_water_records`
- Sources:

##### Elementary flows

###### Welding particulate matter to air (`welding_particulate_air`)

Record total particulate matter released to air from included welding after capture and control. Apply to welding routes that generate and release particulate; do not substitute a single metal species for total particulate matter.

- Selected flow: Welding particulate matter to air (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured outlet and fugitive particulate, or a documented process-specific calculation from welding-consumable use and control performance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`
- Sources: us-epa-ap42-electric-arc-welding

###### Coating volatile organic compounds to air (`coating_voc_air`)

Record volatile organic compounds released to air from liquid coating application, flash-off and curing after capture and control. Apply only when the declared coating contains VOC.

- Selected flow: Volatile organic compounds to air (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: calculate from collected coating mass, supplier VOC fraction, recovered solvent and measured control destruction or removal
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`
- Sources: us-epa-ap42-other-metal-coating

###### Fossil carbon dioxide from factory natural gas (`factory_fossil_co2_air`)

Record direct fossil carbon dioxide released by natural-gas combustion in included factory operations. Apply only when `factory_natural_gas` is present; upstream electricity emissions and boiler use-phase emissions are excluded.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site stack measurement or documented fuel-carbon balance for the metered factory gas attributed to boiler production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry saleable boiler output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared factory operations | Subdivide meters, work orders and material issues to the boiler process wherever practicable before applying allocation. | eu-pef-method-2021 |
| `allocation_physical_second` | inseparable shared operations | If subdivision is not practicable, allocate by a documented causal physical relationship such as machine time, energy demand or processed mass; justify why that relationship represents the shared operation. | eu-pef-method-2021 |
| `allocation_other_last` | residual multifunctionality | Use another relationship, including economic allocation, only after documenting why subdivision and a causal physical relationship are not feasible; disclose the factor, period and sensitivity. | eu-pef-method-2021 |
| `scrap_no_unreported_credit` | steel scrap output | Report scrap mass and receiving route separately. Do not subtract an avoided-primary-steel credit inside the foreground inventory unless the downstream modelling method is explicitly declared and applied consistently. | eu-pef-method-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass_records` | `boiler_manufacture` | material inputs and saleable boiler output | controlled BOM, stores issue, return, job and final weight records | product_id; material_grade; flow_identity; supplier; issued_mass; returned_mass; installed_mass; scrap_link; dry_product_mass; unit | reconcile ERP/BOM quantities to job records and calibrated weighing where available | kg | each production order; aggregate for reporting period | complete reporting period | all included production lines at the declared factory | sum net issued atomic material and accepted dry output by product configuration, then normalize by dry saleable output mass | approved BOM revision; stores ledger; scale calibration; job closeout; mass reconciliation |
| `cp_energy_and_gas_records` | `boiler_manufacture` | electricity, natural gas and industrial oxygen | submeter, main meter, invoice and production-driver records | meter_id; start_reading; end_reading; fuel_or_gas_identity; reference_temperature; reference_pressure; allocation_driver; product_id; unit | prefer process submeters; otherwise allocate the reconciled factory meter with a causal documented driver | MJ; m3 | monthly and each applicable test campaign | complete reporting period | included fabrication, coating and testing areas | subtract verified non-production use, allocate shared use, and normalize to dry saleable boiler mass | meter calibration; invoice reconciliation; allocation workbook; reference-condition record |
| `cp_hydrostatic_test_water_records` | `boiler_manufacture` | test-water input and wastewater output | test sheet, water meter and discharge record | product_id; test_id; input_volume_or_mass; reused_quantity; retained_quantity; discharged_quantity; destination; density; unit | meter each fill and discharge or reconcile a dedicated tank balance | kg; m3 | each hydrostatic test | complete reporting period | all included test bays | convert to mass where needed, keep reuse explicit, sum fresh input and discharged output separately, normalize by dry saleable output mass | calibrated meter; signed test report; tank balance; discharge manifest |
| `cp_waste_dispatch_records` | `boiler_manufacture` | steel scrap | segregated bin weight and dispatch record | waste_identity; alloy_family; gross_weight; tare; internal_reuse; destination; date; unit | weigh each dispatch and reconcile to production-area scrap bins | kg | each dispatch; monthly reconciliation | complete reporting period | all included fabrication areas | sum net externally dispatched scrap attributable to boiler production and normalize by dry saleable output mass | weighbridge ticket; waste manifest; bin reconciliation |
| `cp_air_emission_records` | `boiler_manufacture` | welding particulate, coating VOC and fossil CO2 | stack test, CEMS, coating issue, supplier composition, consumable use, fuel and control records | source_id; pollutant_identity; measured_concentration; gas_flow; operating_time; consumable_mass; VOC_fraction; recovered_mass; control_efficiency; gas_volume; carbon_content; unit | use compliant measurements where available; otherwise use a transparent source-specific mass balance tied to collected activity and control data | kg; m3 | each test campaign or monthly activity balance | representative campaigns covering the reporting period and all applicable routes | all included emission points and documented fugitive releases | calculate gross and controlled releases by route, avoid double counting, sum by atomic flow and normalize by dry saleable output mass | laboratory report; instrument calibration; supplier SDS; control log; activity reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory exchange | normalized amount = reporting-period exchange amount / reporting-period dry saleable boiler mass | collected atomic exchange amount; dry saleable boiler mass | amount per 1 kg reference product |  |
| `calc_electricity_conversion` | purchased electricity | electricity_MJ = electricity_kWh × 3.6 | calibrated electricity reading in kWh | electricity in MJ |  |
| `calc_coating_voc` | coating VOC to air | released VOC = coating consumed × supplier VOC mass fraction − recovered solvent − VOC destroyed or removed by measured controls; do not apply the rule to powder coating with no declared VOC | coating mass; supplier VOC fraction; recovered solvent; measured control removal or destruction | kg VOC released | us-epa-ap42-other-metal-coating |
| `calc_welding_particulate` | welding particulate to air | use measured total particulate where available; otherwise multiply consumable use by a process/electrode-specific documented fume factor and then apply measured capture and control performance | consumable mass; welding process; electrode identity; fume factor; capture and control data | kg particulate released | us-epa-ap42-electric-arc-welding |
| `calc_mass_reconciliation` | product and material mass | compare dry saleable product plus separately measured scrap and wastes with net issued material; investigate rather than force-close differences due to emissions, stock change or measurement uncertainty | net issued material; dry product; scrap; waste; relevant emissions; stock change | documented mass-balance difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve the required qualifiers and the approved product configuration so unlike boiler designs are not silently pooled. | product datasheet; nameplate specification; approved drawing; test certificate |
| `dq_temporal_coverage` | all foreground exchanges | Cover one representative continuous 12-month period or document seasonality, production interruptions and the reason for a shorter period. | dated meter, ERP, invoice, test and dispatch records |
| `dq_meter_reconciliation` | energy, gas and water | Reconcile submeters to site totals and disclose allocation and reference-condition conversions. | calibration certificates; invoices; reconciliation workbook |
| `dq_bom_completeness` | material inputs and output | Reconcile the complete bill of materials and configuration-specific purchased components to dry shipped mass; do not hide omitted materials in a combined row. | controlled BOM; stores ledger; shipment weight; mass balance |
| `dq_emission_specificity` | direct air emissions | Retain pollutant identity, emission point, measurement or factor source, control state and operating route; a species result shall not be reported as total particulate or total VOC. | stack report; laboratory result; SDS; factor citation; control log |
| `dq_upstream_representativeness` | purchased product inputs | Use upstream datasets consistent with product grade/state, supplier geography and technology, and disclose proxies. | supplier declaration; dataset metadata; proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | dataset identity | Confirm the canonical PCR id, finished-boiler boundary, all required qualifiers, dry-mass reference amount and unresolved reference-product UUID status. | un-cpc-3-0-structure-2025; eu-steam-boilers-ecodesign-2014 |
| `validate_process_presence` | process inventory | Require `boiler_manufacture` and all applicable atomic input, waste and elementary flow cards; conditional rows must be present or explicitly shown not applicable with evidence. | eu-steam-boilers-ecodesign-2014; us-epa-ap42-electric-arc-welding; us-epa-ap42-other-metal-coating |
| `validate_no_use_phase` | system boundary | Reject lifetime boiler fuel, generated steam or hot-water service, customer-site feedwater treatment and distribution from the factory-gate foreground inventory. | eu-steam-boilers-ecodesign-2014 |
| `validate_bom_mass` | mass reconciliation | Check that net issued material is reconciled to dry product, scrap, wastes, emissions and stock change; investigate material differences rather than balancing them with an unspecified flow. | eu-pef-method-2021 |
| `validate_energy_separation` | energy inventory | Confirm electricity and natural gas remain separate atomic exchanges and that natural gas and direct fossil CO2 are either jointly applicable or their difference is explained. |  |
| `validate_water_balance` | hydrostatic testing | Confirm fresh test-water input, measured reuse/retention and wastewater discharge are not double counted and that temporary water is excluded from dry product mass. |  |
| `validate_allocation_disclosure` | shared operations | Confirm subdivision was attempted first and every remaining allocation driver, factor, period and sensitivity is disclosed. | eu-pef-method-2021 |
| `validate_uuid_gaps` | unresolved identities | Keep UUID-empty carbon-steel plate, reference boiler, welding particulate and coating VOC rows unresolved until an exact public state-100 identity is confirmed; do not substitute a proxy. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Cradle-to-manufacturer-gate foreground data package and its process or lifecyclemodel projection for finished boiler manufacturing |
| allowed_use | Comparative manufacturing studies after matching design, pressure, capacity, configuration, geography and time; contribution analysis of boiler materials and factory operations; background use when representativeness is documented |
| excluded_use | Comparison of lifetime steam or heat service, operational efficiency, fuel performance, installed steam systems, central-heating boilers, or separately supplied auxiliary plant without additional downstream modelling |
| required_metadata | canonical PCR id; outlet medium; design; rated output and capacity; working pressure; outlet temperature; fuel/heat source; integral-component scope; dry shipped mass; purchased-versus-fabricated split; factory geography; reporting period; allocation; unresolved UUIDs; exclusions |
| required_quality_disclosure | primary-data coverage; BOM and mass reconciliation; meter coverage and allocation; upstream dataset representativeness; emission measurement/factor basis; water reuse; scrap destination; conditional-route applicability; proxy use; uncertainty and unresolved range evidence |
| update_trigger | Material change in product design, pressure or capacity class, bill of materials, supplier geography, welding/coating/test route, factory energy mix, allocation method, emission controls, reference-product identity, or availability of independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official category identity and exclusion of central-heating hot-water boilers |
| `cn-mofcom-gazette-2011-53` | official_guidance | China Foreign Trade and Economic Cooperation Gazette, 2011 No. 53 (Total No. 690), supervised by the Ministry of Commerce, heading 8402 on printed p. 36, https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web2757/site/picture/zcom/upload/20111130/U201111301322643543135.pdf (retrieved 2026-09-05) | Professional Chinese product title terminology and the central-heating hot-water-boiler exclusion |
| `eu-steam-boilers-ecodesign-2014` | official_guidance | PwC, ICCS and Fraunhofer ISI, Ecodesign Preparatory Study on Steam Boilers, Final Report, 2014, https://www.energimyndigheten.se/4a9642/globalassets/energieffektivisering_/jag-ar-saljare-eller-tillverkare/dokument/produkter-med-krav/angpannor/20141217-steam-boilers-ecodesign-final-report.pdf (retrieved 2026-09-05) | Product and strict-system scope, fire-tube/water-tube distinctions, integral options, manufacturing BOM categories and configuration qualifiers |
| `us-epa-ap42-electric-arc-welding` | official_guidance | U.S. EPA, AP-42 Final Background Document for Electric Arc Welding, Section 12.19, https://www.epa.gov/sites/default/files/2020-11/documents/c12s19_0.pdf (retrieved 2026-09-05) | Welding-process decomposition, consumable identity and particulate collection/calculation requirements |
| `us-epa-ap42-other-metal-coating` | official_guidance | U.S. EPA, AP-42 Section 4.2.2.4 Other Metal Coating, https://19january2021snapshot.epa.gov/sites/static/files/2020-10/documents/c4s02_2d.pdf (retrieved 2026-09-05) | Metal-coating process, coating/VOC material balance and control-state requirements |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-09-05) | Allocation hierarchy, materiality, data quality and transparent modelling requirements |
