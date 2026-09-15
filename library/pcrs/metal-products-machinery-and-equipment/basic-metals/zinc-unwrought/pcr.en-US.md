---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.zinc-unwrought
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Zinc, unwrought

## 1. Scope and Applicability

This PCR applies to the production of zinc metal in unwrought market form at the zinc-production facility gate. It covers primary electrolytic and thermal production from zinc concentrate and secondary recovery from zinc scrap when the reference output is unwrought zinc. It includes feed preparation within the facility, roasting or sintering when used, leaching and purification when used, electrowinning or thermal reduction and condensation, refining, melting, casting into unwrought form, and directly associated onsite off-gas, water, and residue management.

Mining, beneficiation, and concentration of ore are represented by upstream datasets for purchased zinc concentrate. Collection and preparation before zinc scrap reaches the facility, external transport, downstream galvanizing, alloy fabrication, rolling, extrusion, drawing, powder production, zinc-oxide production, product use, and end-of-life are outside the foreground boundary unless the study explicitly extends it. Zinc dust and powder, fabricated zinc products, zinc compounds, and waste zinc are not reference products under this PCR.

The foreground data package shall identify the production route, feed origin, zinc grade, product grade, facility geography, electricity supply, fuel mix, and whether sulfuric acid or another recoverable material leaves the facility as a co-product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.zinc-unwrought |
| classification_refs | CPC 3.0: 41442, Zinc, unwrought |
| covered_products | Zinc metal sold in unwrought form from primary or secondary zinc production, including slab or ingot output before downstream fabrication |
| excluded_products | Zinc dust, powders, flakes, oxide, peroxide, fabricated bars, rods, profiles, wire, plates, sheets, strip, foil, zinc-coated articles, and zinc waste or scrap sold as waste |
| representative_product | Facility-gate unwrought zinc metal |
| production_route | Primary electrolytic, primary thermal, or secondary zinc recovery; route and feed shares shall be declared |
| market_state | Solid unwrought zinc at the facility gate, with declared physical form, zinc grade, alloying status, and purity specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unwrought zinc metal for downstream fabrication or metallurgical use |
| How much | 1 kg unwrought zinc at the zinc-production facility gate |
| How well | Meets the declared zinc grade, composition, physical-form, and customer or product-specification requirements |
| How long or cycle | One production lot; no service duration is assigned |
| reference_flow_link | The normalized output row `out_unwrought_zinc` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Zinc, unwrought |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production route; primary and secondary feed shares; product physical form; zinc grade and purity; alloying status and composition; facility geography; technology; reference year; electricity supply; fuel mix; sulfuric-acid recovery status; allocation method; facility-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalized rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory exchanges to 1 kg of saleable unwrought zinc leaving the facility gate; report gross cast mass, internal remelt, off-spec return, and net saleable mass separately before normalization. |
| `wet_dry_basis` | concentrate, scrap, slag, and leach residue | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-weighed mass and moisture or dry-solids fraction; convert to the stated wet or dry basis without mixing bases. |
| `contained_zinc` | zinc-bearing feed and residue | Zinc content `7c367337-54f2-4fe9-8ee3-3f42681b0792` | kg Zn | Retain laboratory zinc grade and calculate contained zinc independently from total material mass; do not substitute contained-zinc mass for total flow mass. |
| `electricity_energy` | purchased and onsite electricity | energy | kWh | Preserve metered kWh; if an energy conversion is needed, use 1 kWh = 3.6 MJ and disclose the original meter unit and voltage level. |
| `gas_reference_conditions` | natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volume at declared temperature and pressure and retain supplier net calorific value so energy and volume records remain auditable. |
| `solution_concentration` | sulfuric acid | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record solution mass and acid mass fraction; separately identify purchased, onsite-generated, internally recycled, and exported sulfuric acid. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Zinc concentrate received at the primary smelter gate and/or sorted zinc scrap received at the secondary zinc-recovery gate, together with purchased utilities and reagents |
| starting_condition_role | Upstream products and wastes entering the foreground zinc-production facility |
| product_classification_scope | Unwrought zinc metal only; zinc compounds, powders, fabricated products, and zinc waste are outside the reference-product identity |
| recursive_input_rule | Purchased unwrought zinc used for remelting shall be recorded as a separate product input with an upstream dataset and shall not be silently treated as internal recycle or recursively expanded within this PCR |
| upstream_dataset_requirement | Use geographically and technologically representative upstream datasets for concentrate, scrap preparation, electricity, fuels, reagents, water supply, and external waste treatment |
| disclosure | Declare route, feed shares and grades, included unit operations, onsite energy generation, internal recycling, controlled and fugitive emission points, water boundary, residue destinations, co-products, and cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | all routes | Include all unit operations from receipt of qualified concentrate or scrap through saleable unwrought-zinc casting, including directly associated onsite off-gas, effluent, and residue treatment. | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981` |
| `boundary_upstream` | purchased inputs | Model mining, concentration, scrap collection and preparation outside the facility, purchased energy, reagents, and water through upstream datasets; do not duplicate their upstream emissions as direct facility emissions. | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981` |
| `boundary_route_disclosure` | route-dependent operations | Include roasting, leaching, purification and electrowinning only when used; include sintering, reduction, retorting, condensation or secondary pretreatment only when used, and state every exclusion. | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`; `ipcc-2006-metal-industry-zinc` |
| `boundary_carbon_accounting` | fuels and carbonaceous reductants | Separate direct process carbon dioxide from fuel-combustion emissions and prevent double counting with upstream coke production or energy datasets. | `ipcc-2006-metal-industry-zinc` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `zinc_unwrought_production` | Unwrought zinc production, refining, and casting | required | All datasets; route-specific exchanges apply only when their stated route is used | Foreground aggregation of feed preparation, hydrometallurgical or thermal zinc recovery, refining, casting, and onsite pollution control | 1 kg saleable unwrought zinc output |

### Process: Unwrought zinc production, refining, and casting (`zinc_unwrought_production`)

#### Inputs

##### Product flows

###### Zinc concentrate for primary production (`in_zinc_concentrate`)

Record zinc concentrate received from beneficiation when a primary route is used; do not use this row for run-of-mine ore or finished zinc metal.

- Selected flow: Zinc concentrate `ecb60d59-d9e3-4d96-958d-7b4453a8174f`
- Flow property / unit: Mass / kg
- Amount rule: measured received concentrate mass, with moisture and zinc grade retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_mass`
- Sources: `us-epa-ap42-zinc-smelting-1986`

###### Sulfuric acid used in leaching (`in_sulfuric_acid`)

Record net sulfuric acid entering the hydrometallurgical route after separating onsite generation and internal recycle.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: purchased plus transferred-in sulfuric acid, excluding internal recycle, with concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_mass`
- Sources: `us-epa-ap42-zinc-smelting-1986`

###### Process water (`in_process_water`)

Record process water consumed in leaching, washing, cooling make-up, gas cleaning, and other onsite zinc-production operations; exclude water merely passing through without consumption.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered water entering the foreground system minus separately measured pass-through returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`

###### Purchased electricity (`in_electricity`)

Record electricity delivered across the facility boundary for electrolysis, retorting, material handling, pumping, gas cleaning, and casting. The Tiangong UUID remains unresolved because ranked candidates did not provide consistent property and unit support.

- Selected flow: Purchased electricity, delivered at the declared voltage level
- Flow property / unit: Energy / kWh
- Amount rule: revenue-meter imports minus metered exports, with onsite generation reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `us-epa-ap42-zinc-smelting-1986`

###### Natural gas used onsite (`in_natural_gas`)

Record natural gas consumed for direct process heat only when the facility uses it; retain reference conditions and net calorific value.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas consumption assigned to included zinc-production operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_meter`
- Sources: `us-epa-ap42-zinc-smelting-1986`; `ipcc-2006-metal-industry-zinc`

###### Metallurgical coke reductant (`in_metallurgical_coke`)

Record metallurgical coke only for thermal reduction, Imperial Smelting, electrothermic, Waelz-kiln, or other declared carbon-reduction operations.

- Selected flow: metallurgical coke `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- Flow property / unit: Mass / kg
- Amount rule: measured coke charged to included zinc-production operations, with moisture, ash, and carbon content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_meter`
- Sources: `us-epa-ap42-zinc-smelting-1986`; `ipcc-2006-metal-industry-zinc`

##### Waste flows

###### Zinc scrap for secondary recovery (`in_zinc_scrap`)

Record zinc scrap accepted as a waste input only when the secondary route is included; retain source, composition, contamination, and any burden-allocation convention.

- Selected flow: zinc scrap `b1629e09-83ea-4027-aab4-3a02406fac02`
- Flow property / unit: Mass / kg
- Amount rule: measured received zinc-scrap mass, with moisture, zinc content, and contaminants retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_mass`
- Sources: `us-epa-ap42-secondary-zinc-1981`; `ipcc-2006-metal-industry-zinc`

##### Elementary flows

No elementary input is prescribed. Resource extractions embodied in purchased products are represented in their upstream datasets.

#### Outputs

##### Product flows

###### Saleable unwrought zinc (`out_unwrought_zinc`)

Record only conforming zinc metal leaving the facility in unwrought market form. The reference-product UUID remains unresolved because the zinc-ingot candidate conflicts with its fabricated-zinc classification.

- Selected flow: Zinc, unwrought
- Flow property / unit: Mass / kg
- Amount rule: normalize measured net saleable unwrought-zinc output to 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-structure-2025`; `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`

###### Sulfuric acid co-product (`out_sulfuric_acid`)

Record sulfuric acid leaving the foreground facility as a saleable co-product; do not count acid internally recycled to leaching as an output.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: measured exported acid solution mass with acid concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `us-epa-ap42-zinc-smelting-1986`

##### Waste flows

###### Zinc slag from thermal processing (`out_zinc_slag`)

Record zinc slag crossing the facility boundary from thermal zinc production or secondary recovery; retain destination and recoverable zinc content.

- Selected flow: zinc slag (unspecified) `1fe4a169-ae95-4eb8-b3d4-f5db63d1ca23`
- Flow property / unit: Mass / kg
- Amount rule: measured slag mass leaving the foreground system, separated from internally recycled slag
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `us-epa-ap42-zinc-smelting-1986`; `ipcc-2006-metal-industry-zinc`

###### Zinc-bearing leach residue (`out_zinc_leach_residue`)

Record solid residue leaving leaching and purification in the hydrometallurgical route. No exact Tiangong waste UUID was found; do not substitute zinc scrap or thermal zinc slag.

- Selected flow: Zinc-bearing leach residue
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass leaving the foreground system, with wet mass, moisture, dry mass, and zinc content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `us-epa-ap42-zinc-smelting-1986`

##### Elementary flows

###### Fossil carbon dioxide to air (`out_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide from carbonaceous reducing agents and onsite fuel combustion, while preventing double counting between process and energy accounting.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct fossil CO2 or facility carbon balance for included operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-2006-metal-industry-zinc`

###### Sulfur dioxide to air, unspecified (`out_sulfur_dioxide_air`)

Record sulfur dioxide remaining after sulfur recovery and air-pollution control, including quantified fugitive releases. No exact unspecified-air UUID was found.

- Selected flow: Sulfur dioxide to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured controlled stack plus quantified fugitive sulfur-dioxide emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us-epa-ap42-zinc-smelting-1986`

###### Zinc to air, unspecified (`out_zinc_air`)

Record zinc in controlled and fugitive air emissions as elemental zinc mass, not total particulate mass.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured zinc mass in stack and fugitive air releases
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`

###### Zinc to water, unspecified (`out_zinc_water`)

Record dissolved and suspended zinc discharged across the facility water boundary after treatment; disclose the receiving-water compartment when known.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: treated-effluent volume multiplied by representative zinc concentration, plus separately measured direct releases
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable unwrought zinc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separately metered unit operations | Avoid allocation by subdividing primary, secondary, acid-production, lead-recovery, residue-treatment, and utility operations wherever separate measurements exist. | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981` |
| `allocation_joint_lead_zinc` | simultaneous lead and zinc production | Assign jointly consumed coke and direct process emissions using a documented plant-specific physical relationship or mass balance; report factors and prevent double counting between lead and zinc. | `ipcc-2006-metal-industry-zinc` |
| `allocation_sulfuric_acid` | saleable sulfuric acid | First assign directly measured acid-plant inputs and outputs to acid production; allocate only residual inseparable burdens using a declared physical relationship, or economic allocation when no defensible physical relation exists, and report a sensitivity result. | `us-epa-ap42-zinc-smelting-1986` |
| `allocation_waste_inputs` | zinc scrap and other waste feeds | State the waste-allocation convention, any incoming burden, pretreatment boundary, and credits; do not claim avoided primary zinc production inside the inventory unless the study applies and discloses a consequential substitution model. | `us-epa-ap42-secondary-zinc-1981` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_mass` | `zinc_unwrought_production` | zinc concentrate and zinc scrap | weighbridge and laboratory records | received mass; tare; moisture; zinc grade; lot id; supplier; feed route | reconcile weighbridge tickets with laboratory certificates and stock change | kg; mass fraction | each receipt and monthly close | representative continuous 12-month period | all feed receiving points in scope | receipts plus opening stock minus closing stock, separated by feed type, then normalized | calibrated scale records; sampling plan; laboratory QA/QC; stock reconciliation |
| `cp_reagent_mass` | `zinc_unwrought_production` | sulfuric acid input | purchase, transfer, tank, and concentration records | solution mass or volume; density; acid fraction; opening and closing stock; internal recycle | reconcile invoices and calibrated tank measurements; distinguish purchased, generated, recycled, and exported acid | kg solution; kg H2SO4 | batch or daily meter and monthly close | same 12-month period as product output | all included acid storage and process circuits | purchased plus transfer-in plus opening stock minus closing stock minus export, excluding internal recycle | tank calibration; density and assay method; invoice reconciliation |
| `cp_water_meter` | `zinc_unwrought_production` | process water input | water-meter records | withdrawal; purchased water; returned pass-through water; meter id | read calibrated boundary and sub-meters and reconcile with utility invoices | kg or m3 | daily or monthly | same 12-month period as product output | all included water entry points | net consumed boundary water, converted with documented density when needed | meter calibration; water balance; missing-data log |
| `cp_electricity_meter` | `zinc_unwrought_production` | purchased electricity input | revenue and sub-meter records | imported kWh; exported kWh; onsite generation; voltage; meter id | reconcile revenue meter, sub-meters, and onsite generation records | kWh | interval or monthly | same 12-month period as product output | all included electrical boundary meters | imports minus exports; do not net onsite generation against fuel inputs without disclosure | meter calibration; invoices; energy balance |
| `cp_fuel_meter` | `zinc_unwrought_production` | natural gas and metallurgical coke | fuel meter, scale, inventory, and assay records | gas volume; reference conditions; calorific value; coke mass; moisture; ash; carbon; stock change | reconcile gas bills and calibrated meters; reconcile coke receipts, scales, and stocks | m3; MJ; kg | continuous or each delivery and monthly close | same 12-month period as product output | all included fuel and reductant entry points | consumption equals receipts plus opening stock minus closing stock, separated by material and use | meter and scale calibration; supplier assay; carbon balance |
| `cp_product_mass` | `zinc_unwrought_production` | unwrought zinc and sulfuric acid outputs | casting scale, dispatch, tank, and laboratory records | gross cast zinc; internal remelt; off-spec return; net saleable zinc; acid solution mass; acid fraction; shipment id | reconcile production, internal return, inventory, and dispatch records | kg | lot and monthly close | same 12-month period as inputs | all product and co-product exit points | net saleable output equals shipped plus closing stock minus opening stock, excluding internal recycle | calibrated scales and tanks; product assay; dispatch reconciliation |
| `cp_waste_mass` | `zinc_unwrought_production` | zinc slag and zinc-bearing leach residue | waste scale, manifest, moisture, and assay records | wet mass; moisture; dry mass; zinc grade; destination; internal recycle | reconcile scales, waste manifests, laboratory assays, and internal returns | kg | each shipment and monthly close | same 12-month period as product output | all included waste exit points | external output only; internal recycle remains inside the boundary | scale calibration; chain of custody; laboratory QA/QC; waste-handler receipt |
| `cp_emissions` | `zinc_unwrought_production` | fossil CO2, sulfur dioxide, zinc to air, and zinc to water | continuous monitoring, stack tests, effluent monitoring, fuel and reductant assays | gas flow; concentration; operating hours; effluent flow; zinc concentration; fuel carbon; coke carbon; control-device downtime | use validated direct measurements where available; otherwise calculate from collected activity and assay data with stated equations | kg; concentration; flow rate | continuous, campaign, or permit-compliant sampling with monthly aggregation | representative continuous 12-month period including abnormal operation | all included point, fugitive, and water discharge boundaries | sum measured points and justified fugitive estimates; prevent process-energy double counting | calibration; detection limits; sampling representativeness; laboratory QA/QC; mass and carbon balances |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_inventory` | every inventory row | normalized exchange = period exchange / net saleable unwrought-zinc output | period exchange; net saleable zinc mass | exchange per 1 kg unwrought zinc |  |
| `calc_dry_mass` | zinc-bearing feed and residue | dry mass = wet mass × (1 − moisture mass fraction) | wet mass; moisture mass fraction | kg dry material |  |
| `calc_contained_zinc` | zinc-bearing feed and residue | contained zinc = dry mass × dry-basis zinc mass fraction | dry mass; zinc assay | kg Zn |  |
| `calc_acid_mass` | sulfuric acid | acid mass = solution mass × sulfuric-acid mass fraction | solution mass; concentration | kg H2SO4 | `us-epa-ap42-zinc-smelting-1986` |
| `calc_waterborne_zinc` | zinc to water | zinc mass = treated-effluent volume × representative zinc concentration, with unit conversion and detection-limit treatment disclosed | effluent volume; zinc concentration | kg Zn to water |  |
| `calc_process_co2` | thermal zinc routes | Prefer measured facility emissions; otherwise apply a transparent carbon balance to collected reducing-agent and other carbonaceous process-material data and separate fuel-combustion accounting | carbon inputs; carbon retained in outputs and wastes; measured emissions where available | kg fossil CO2 | `ipcc-2006-metal-industry-zinc` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain product form, zinc grade, purity or alloy composition, lot definition, and conformity evidence. | product assay, specification, and dispatch record |
| `dq_route` | all inventory | Identify primary electrolytic, thermal, or secondary route and report primary and secondary feed shares. | process flow diagram, feed records, and production log |
| `dq_temporal` | all foreground data | Use one representative continuous 12-month period or justify a shorter campaign that captures start-up, shutdown, maintenance, and abnormal operation. | dated meter, production, maintenance, and emission records |
| `dq_completeness` | mass, zinc, sulfur, energy, carbon, and water balances | Reconcile inputs, saleable outputs, internal recycle, stocks, wastes, and direct releases; explain material residuals and all exclusions. | signed balance worksheets and reconciliation findings |
| `dq_measurement` | meters, scales, assays, and emission monitoring | Retain calibration status, method, sampling frequency, detection limits, missing-data treatment, and laboratory QA/QC. | calibration certificates, method records, and QA/QC results |
| `dq_geography` | upstream supplies and direct releases | Match electricity, fuel, water, concentrate, scrap, and treatment datasets to the declared geography and disclose receiving compartments. | supplier and facility location records; dataset metadata |
| `dq_allocation` | co-products and joint production | Retain subdivision logic, allocation basis, factors, price period if economic allocation is used, and sensitivity results. | allocation worksheet and source records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | `out_unwrought_zinc` | Net saleable unwrought-zinc output shall equal 1 kg after normalization, and gross casting, internal remelt, off-spec return, and inventory change shall remain auditable. |  |
| `validate_product_boundary` | reference product | Reject a dataset whose reference output is zinc powder, zinc oxide, a fabricated zinc product, or zinc scrap rather than unwrought zinc metal. | `un-cpc-3-0-structure-2025` |
| `validate_route_rows` | route-specific inventory | A route-specific row shall be present only when its declared operation is used; absence shall be supported by route documentation, not a zero entered without explanation. | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`; `ipcc-2006-metal-industry-zinc` |
| `validate_zinc_balance` | feed, product, co-product, slag, residue, and emissions | Complete a contained-zinc balance using consistent wet/dry bases and assays; investigate and explain the residual. |  |
| `validate_sulfur_balance` | sulfide concentrate, sulfuric acid, sulfur dioxide, and sulfur-bearing residue | Complete a sulfur balance when sulfide concentrate is processed and distinguish recovered acid from emitted sulfur dioxide. | `us-epa-ap42-zinc-smelting-1986` |
| `validate_carbon_double_count` | natural gas, coke, and fossil carbon dioxide | Demonstrate that process CO2, onsite fuel-combustion CO2, upstream fuel burdens, and coke-production emissions are neither omitted nor double counted. | `ipcc-2006-metal-industry-zinc` |
| `validate_uuid_gaps` | unresolved Tiangong flows | Before publication, resolve or explicitly review the unwrought-zinc reference product, electricity, leach-residue, and sulfur-dioxide UUID gaps; do not substitute a near match. |  |
| `validate_sources` | externally constrained rules | Every external source id shall resolve to the Data Sources table and shall be used only for the original-text-supported role stated there. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Facility-specific foreground production dataset suitable for reviewed publication as a secondary_dataset or background_dataset after source, UUID, and methodology review |
| downstream_use | Attributional process inventories and lifecycle models requiring unwrought zinc at the production facility gate |
| allowed_use | Use for the declared route, product grade, geography, technology, reference period, feed shares, electricity supply, fuel mix, water boundary, and allocation method |
| excluded_use | Do not use as a generic zinc-mining dataset, fabricated-zinc dataset, zinc-compound dataset, or consequential recycling credit without a separate model and disclosure |
| required_metadata | PCR id and version; product form and grade; route and feed shares; facility geography; technology; reference period; electricity and fuel supply; water boundary; co-products; allocation; cut-offs; upstream dataset identities |
| required_quality_disclosure | Data coverage; meter and scale calibration; sampling and assay methods; temporal representativeness; mass, zinc, sulfur, energy, carbon, and water balance results; missing-data treatment; uncertainty; unresolved UUIDs; source applicability |
| update_trigger | Change in route, feed shares or grade, product grade, major technology, electricity or fuel supply, emission control, water system, co-product recovery, allocation method, facility geography, or reference period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Original text verifies CPC 41442 as “Zinc, unwrought” and distinguishes fabricated zinc product subclasses |
| `us-epa-ap42-zinc-smelting-1986` | official_guidance | U.S. EPA, AP-42 Section 12.7, Zinc Smelting, October 1986, reformatted January 1995, https://www.epa.gov/sites/production/files/2020-11/documents/c12s07.pdf (retrieved 2026-09-04) | Original text verifies primary zinc process decomposition, concentrate roasting, electrolytic leaching/purification/electrolysis, thermal retorting, slab zinc and sulfuric-acid output, and sulfur-dioxide, particulate, and metal-emission control points |
| `us-epa-ap42-secondary-zinc-1981` | official_guidance | U.S. EPA, AP-42 Section 12.14, Secondary Zinc Processing, April 1981, https://www.epa.gov/sites/production/files/2020-11/documents/c12s14.pdf (retrieved 2026-09-04) | Original text verifies secondary zinc recovery from scrap through pretreatment, melting, refining, and slab-zinc output and supports the secondary-route boundary and waste/emission collection needs |
| `ipcc-2006-metal-industry-zinc` | official_guidance | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 3, Chapter 4, Section 4.7 Zinc Production, https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_4_Ch4_Metal_Industry.pdf (retrieved 2026-09-04) | Original text verifies electrolytic, electrothermic, Imperial Smelting, Waelz-kiln, and secondary routes; carbonaceous reductant and direct process-CO2 accounting; plant-specific activity data; allocation and double-counting controls |
