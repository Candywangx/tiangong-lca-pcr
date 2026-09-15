---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-of-circular-cross-section-welded-of-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other tubes and pipes, of circular cross-section, welded, of steel

## 1. Scope and Applicability

This PCR covers steel tubes and pipes whose finished cross-section is circular and whose longitudinal or helical seam is welded, except products whose defining function is oil or gas line pipe or oil/gas well casing and tubing. It covers non-alloy, alloy, and stainless steel products in uncoated or declared coated market states. Seamless pipe, non-circular sections, open-seam or riveted products, fittings, and manufacture of the upstream steel coil are outside the product boundary.

The foreground gate-to-gate system begins with documented steel coil at the pipe mill and ends with conforming pipe ready to leave the mill. Forming and seam welding are required. Pickling, heat treatment, flux-cored arc welding, and metallic coating are included only when performed for the declared product. The data package must identify steel grade, dimensions, weld technology, surface condition, heat-treatment state, coating, and production geography.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-of-circular-cross-section-welded-of-steel |
| classification_refs | CPC 3.0: 41287 (classification context; mapping acceptance is governed separately) |
| covered_products | Circular-cross-section longitudinally or helically welded tubes and pipes of non-alloy, alloy, or stainless steel, other than oil/gas line pipe and oil/gas well casing or tubing |
| excluded_products | Seamless pipe; non-circular tube or hollow profiles; open-seam, riveted, or similarly closed pipe; oil/gas line pipe; oil/gas well casing and tubing; pipe fittings; upstream steelmaking and coil production |
| representative_product | Mill-finished circular welded steel pipe supplied by mass |
| production_route | Steel coil preparation, edge forming, circular forming, seam welding, sizing, cutting, inspection, and declared conditional finishing |
| market_state | Conforming pipe at the pipe-mill gate, with coating, heat-treatment state, end finish, dimensions, and grade declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared circular-cross-section welded steel tube or pipe meeting the stated dimensional, grade, weld, surface, and inspection requirements |
| How much | 1 kg net mass of conforming pipe |
| How well | Meets the producer-declared product specification and acceptance tests, with rejected material excluded from conforming output |
| How long or cycle | One production campaign; no service life is assigned at the mill gate |
| reference_flow_link | The functional unit is realized by the mass of conforming pipe crossing the pipe-mill gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade and alloy family; outside diameter; wall thickness; length; longitudinal or helical seam; welding technology; heat-treatment state; surface and coating state; end finish; applicable product specification; inspection acceptance basis; production geography and period |

When constructing a foreground data package, every required qualifier must be declared in metadata, the reference-flow comment, or an equivalent product-description field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | conforming reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry product mass on calibrated scales after required finishing; exclude pallets, wrapping, dunnage, test coupons, and rejected pipe. |
| `length_to_mass` | production records reported by length | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert length to mass only with a documented measured mass-per-length or a geometry-and-density calculation using declared outside diameter, wall thickness, and grade density; retain the conversion basis. |
| `energy_preservation` | purchased electricity and fuel | Net calorific value | MJ | Preserve supplier or meter units and conversion factors; do not combine electricity with fuel. Report gaseous natural gas volume together with reference temperature and pressure. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Steel coil received at the pipe mill with grade, mass, dimensions, coating state, supplier dataset, and transport hand-off declared |
| starting_condition_role | Upstream steel production is represented by supplier-specific or otherwise justified upstream coil datasets; the foreground begins at mill receipt |
| product_classification_scope | Circular-cross-section welded steel tubes and pipes within the semantic boundary stated in Sections 1 and 2 |
| recursive_input_rule | A purchased input already meeting this same finished-pipe category is not re-modelled as coil; record it as an upstream same-category product with its own dataset and disclose the reason for purchase |
| upstream_dataset_requirement | Upstream datasets must match steel grade family, coil product state, coating state, production geography, and temporal period as closely as practicable |
| disclosure | Declare included operations, outsourced steps, welding route, heat treatment, pickling, galvanizing or other coating, recycled-content accounting, and the treatment destination of each waste |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground pipe-mill system | Include coil preparation, forming, seam welding, sizing, cutting, inspection, internal material handling, and on-site treatment of their direct wastes and emissions; include conditional finishing when performed. | `eu-fmp-bref-2022` |
| `boundary_upstream` | purchased products and energy | Link every purchased material and energy input to an upstream dataset outside the foreground gate-to-gate inventory; do not count upstream emissions as direct mill emissions. |  |
| `boundary_conditional_routes` | pickling, thermal treatment, arc-welding consumables, and galvanizing | Include each route only when production records show that it is used for the declared reference product and keep its exchanges separate. | `eu-fmp-bref-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming_welding` | Coil preparation, forming, welding, sizing, cutting, and inspection | `required` | Always included | Foreground pipe manufacture | kg conforming pipe output |
| `acid_pickling` | Hydrochloric-acid pickling, rinsing, and neutralization | `conditional` | Include when scale removal or surface preparation uses hydrochloric-acid pickling | Conditional surface preparation | kg pipe leaving pickling |
| `hot_dip_galvanizing` | Hot-dip zinc coating | `conditional` | Include when the declared market state has an on-site hot-dip zinc coating | Conditional protective coating | kg coated conforming pipe |

### Process: Coil preparation, forming, welding, sizing, cutting, and inspection (`forming_welding`)

#### Inputs

##### Product flows

###### Hot-rolled steel coil feedstock (`fw_hot_rolled_steel_coil`)

Record the weighed hot-rolled coil entering manufacture for the declared product campaign.

- Selected flow: steel hot rolled coil `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured net coil input allocated to the declared product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_welding`
- Sources:

###### Purchased alternating-current electricity (`fw_electricity`)

Record metered alternating-current electricity consumed by the included forming and welding line.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity for the declared campaign, preserving the documented conversion from the meter unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_welding`
- Sources:

###### Process water (`fw_process_water`)

Record make-up process water crossing the facility boundary for direct use in cooling, rinsing, or testing on this line; do not count recirculated internal water again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-converted make-up process water attributable to the declared campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_welding`
- Sources:

###### Gaseous natural gas (`fw_natural_gas`)

Record natural gas only when directly consumed for included heat treatment, drying, or other documented thermal operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume at documented reference conditions; zero only when no included gas-fired operation serves the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_welding`
- Sources:

###### Flux-cored welding wire (`fw_flux_cored_wire`)

Record flux-cored wire only for a documented flux-cored arc-welding seam or repair operation; it is not applicable to resistance or induction welding without filler.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Weighed issues minus documented returns for the declared campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_welding`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming welded steel pipe (`fw_steel_pipe`)

Record only pipe that passes the declared inspection and specification acceptance criteria.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of conforming pipe at the mill gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_welding`
- Sources:

##### Waste flows

###### Post-industrial steel scrap (`fw_post_industrial_steel_scrap`)

Record offcuts, edge trim, and rejected steel leaving the foreground system as post-industrial scrap; internal remelt or direct reuse does not cross this boundary.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap transferred out of the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_welding`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide (`fw_carbon_dioxide_fossil`)

Record only direct fossil carbon dioxide from included on-site natural-gas combustion; exclude upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from recorded fuel using a disclosed combustion factor and oxidation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_welding`
- Sources:

### Process: Hydrochloric-acid pickling, rinsing, and neutralization (`acid_pickling`)

#### Inputs

##### Product flows

###### Hydrochloric acid solution at 30% (`pk_hydrochloric_acid_30`)

Record fresh 30% hydrochloric-acid solution replenished to the pickling line; a different supplied concentration requires a distinct flow identity or an explicitly documented concentration conversion.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass / kg
- Amount rule: Measured delivered solution mass attributable to the declared campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pipe leaving pickling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling`
- Sources: `eu-fmp-bref-2022`

###### Pickling rinse water (`pk_process_water`)

Record make-up process water entering the pickling rinse stages, excluding recirculated internal water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-converted make-up water attributable to the declared campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pipe leaving pickling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling`
- Sources: `eu-fmp-bref-2022`

###### Sodium hydroxide (`pk_sodium_hydroxide`)

Record sodium hydroxide only when it is added on site to neutralize pickling liquor or rinse water within the foreground boundary.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Measured product mass, with solution concentration and dry-equivalent conversion disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pipe leaving pickling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent hydrochloric-acid pickling liquor (`pk_spent_hydrochloric_pickling_liquor`)

Record spent hydrochloric-acid liquor containing dissolved iron and entrained scale when it leaves the foreground system for recovery or treatment. The Tiangong UUID remains unresolved because no exact chemical-state candidate was found.

- Selected flow: Spent hydrochloric-acid pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-converted spent liquor sent off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pipe leaving pickling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling`
- Sources: `eu-fmp-bref-2022`

##### Elementary flows

### Process: Hot-dip zinc coating (`hot_dip_galvanizing`)

#### Inputs

##### Product flows

###### Special-high-grade zinc metal (`gv_zinc_metal`)

Record zinc metal added to the galvanizing bath and attributed through bath stock reconciliation to the declared coated-pipe campaign.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass / kg
- Amount rule: Zinc receipts plus opening stock minus closing stock and separately measured residues, allocated to the declared campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg coated conforming pipe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_galvanizing`
- Sources: `eu-fmp-bref-2022`

###### Galvanizing process water (`gv_process_water`)

Record make-up process water used by on-site cleaning, rinsing, or cooling stages serving the galvanized pipe.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-converted make-up water attributable to the declared campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg coated conforming pipe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_galvanizing`
- Sources: `eu-fmp-bref-2022`

###### Galvanizing natural gas (`gv_natural_gas`)

Record gaseous natural gas directly consumed by the galvanizing kettle or associated included drying stage.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume at documented reference conditions attributable to the declared campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg coated conforming pipe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_galvanizing`
- Sources: `eu-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct galvanizing fossil carbon dioxide (`gv_carbon_dioxide_fossil`)

Record only direct fossil carbon dioxide from natural-gas combustion in the included galvanizing process.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from recorded fuel using a disclosed combustion factor and oxidation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg coated conforming pipe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_galvanizing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared production lines and utilities | Prefer campaign, line, or meter subdivision. Allocate only residual shared quantities after documenting why subdivision is unavailable. |  |
| `allocation_residual` | residual shared inputs and emissions | Allocate by a causal physical driver such as measured operating time, processed mass, or metered demand; do not use revenue unless no defensible physical relation exists and the exception is disclosed. |  |
| `allocation_scrap` | post-industrial steel scrap | Report the scrap amount and destination separately. Apply the study's declared recycling method consistently and do not simultaneously credit avoided primary steel and assign recycled-content benefit to the same scrap. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_welding` | `forming_welding` | materials, utilities, output, scrap, and direct CO2 | production, scale, meter, invoice, and inspection records | coil mass; electricity; water; gas volume and reference conditions; wire issues and returns; accepted pipe mass; scrap mass; fuel factor; direct CO2 | Reconcile campaign records to line meters, calibrated scales, and accepted-output records | kg, MJ, m3 | each campaign, aggregated monthly | representative continuous 12-month period or all campaigns for a shorter declared production period | all equipment serving the declared line, with shared services allocated explicitly | sum each atomic exchange and divide by net conforming pipe mass | calibration records, meter reconciliation, stock balance, rejection log, and supervisor approval |
| `cp_pickling` | `acid_pickling` | acid, water, neutralizer, and spent liquor | delivery, tank, meter, batch, and waste-transfer records | solution mass and concentration; water mass or volume; sodium hydroxide mass and concentration; spent-liquor mass or volume and density | Reconcile tank stock, receipts, measured additions, and off-site transfers by campaign | kg | each bath change and campaign, aggregated monthly | same period as the pipe campaign | all pickling and rinse stages serving the declared product | calculate net fresh inputs and outgoing spent liquor, then divide by pipe mass leaving pickling | concentration certificates, calibrated tank or scale records, density method, and transfer manifest |
| `cp_galvanizing` | `hot_dip_galvanizing` | zinc, water, gas, and direct CO2 | stock, purchase, meter, production, and emission-factor records | zinc receipts and stocks; zinc residues; water; gas volume and reference conditions; coated output; fuel factor; direct CO2 | Reconcile bath metal and utility meters to the coated-pipe campaign | kg, m3 | each campaign, aggregated monthly | same period as the coated-pipe campaign | galvanizing stages serving the declared product | calculate net zinc and each utility or emission per coated output mass | bath inventory, certified scales, meter calibration, residue records, and factor provenance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | every inventory row | normalized amount = campaign exchange / net mass of the applicable conforming process output | atomic exchange amount; conforming output mass | amount per kg applicable output |  |
| `calc_water_mass` | water recorded by volume | water mass = metered volume × measured or justified density at the recorded condition; retain volume and density | water volume; density | kg process water |  |
| `calc_direct_co2` | direct natural-gas combustion | direct fossil CO2 = recorded gas activity × disclosed fuel-specific factor × oxidation fraction; do not add upstream supply-chain CO2 | gas activity; factor; oxidation fraction | kg direct fossil CO2 |  |
| `calc_zinc_balance` | galvanizing zinc input | net zinc attributed = receipts + opening bath stock - closing bath stock - separately measured residues, with allocation to the campaign disclosed | zinc receipts; stocks; residues; campaign allocation driver | kg zinc metal | `eu-fmp-bref-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Grade, dimensions, seam orientation, welding technology, heat treatment, coating, end finish, acceptance specification, geography, and period must be recorded. | product specification, production order, and inspection release |
| `dq_mass_balance` | steel-bearing flows | Reconcile coil input with conforming pipe, scrap, test coupons, work-in-process change, and other separately identified steel outputs; investigate material imbalance. | signed campaign mass balance and scale calibration |
| `dq_completeness` | all included processes | Account for at least 95% of measured input mass and measured energy by included records; list excluded flows individually and justify each exclusion. | completeness calculation and exclusion register |
| `dq_temporal` | foreground data | Prefer a continuous 12-month period; if shorter, cover all campaigns and disclose seasonality, shutdowns, and atypical production. | dated records and representativeness statement |
| `dq_conditional_routes` | conditional processes and flows | Record an explicit present/not-present decision for pickling, heat treatment, flux-cored wire, and galvanizing; do not leave route applicability implicit. | process route sheet and bill of materials |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Fail validation when any required product qualifier is missing or when the product is seamless, non-circular, open-seam/riveted, oil/gas line pipe, or oil/gas well casing/tubing. | `unsd-cpc-3-0-2025` |
| `validate_reference_amount` | reference product | Confirm that the normalized conforming Steel Pipe output equals 1 kg and uses the required Mass property and mass unit group. |  |
| `validate_inventory_balance` | steel-bearing flows | Require a documented coil-to-output mass balance and explanations for work-in-process change and every material discrepancy. |  |
| `validate_direct_emissions` | fossil carbon dioxide | Confirm that direct CO2 includes only on-site combustion and excludes upstream electricity and fuel-supply emissions. |  |
| `validate_conditional_processes` | pickling and galvanizing | Include the detailed process and its atomic exchanges when the route is present; otherwise document non-applicability and do not insert zero-valued proxy exchanges. | `eu-fmp-bref-2022` |
| `validate_unresolved_uuid` | spent pickling liquor | Keep the UUID empty until an exact public state-100 chemical-state identity is audited; do not substitute generic waste acid. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for circular welded steel pipe manufacture |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and publication readiness checks |
| allowed_use | product carbon footprinting, life-cycle assessment, procurement comparison, and downstream product modelling when grade, dimensions, weld route, coating state, geography, period, and allocation method are compatible |
| excluded_use | seamless pipe, non-circular hollow sections, oil/gas line pipe, oil/gas well casing or tubing, fittings, or a cradle-to-gate steelmaking dataset without linked upstream steel and energy datasets |
| required_metadata | all reference-flow qualifiers; site and period; included and outsourced processes; supplier dataset choices; route decisions; recycled-content and recycling method; allocation; cut-offs; data quality; unresolved UUID disclosure |
| required_quality_disclosure | meter and scale coverage, mass-balance result, completeness result, temporal representativeness, technology representativeness, source and factor provenance, and material exclusions |
| update_trigger | material change in steel grade mix, coil supplier, welding technology, product dimensions, heat treatment, coating route, energy supply, process efficiency, waste destination, allocation method, or a newer representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Original-text verification of CPC 41287 identity and separation from adjacent seamless, line-pipe, casing/tubing, non-circular, and other closure categories |
| `eu-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, Ferrous Metals Processing Industry BAT Reference Document page and adopted BREF, December 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry (retrieved 2026-09-04) | Original-text verification of downstream ferrous-metal processing, surface preparation, pickling, rinsing, finishing, and conditional hot-dip galvanizing process decomposition; no empirical amount range was inferred |
