---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.refrigerating-and-freezing-equipment-and-heat-pumps-except-household-type-equipment
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Refrigerating and freezing equipment and heat pumps, except household type equipment

## 1. Scope and Applicability

This PCR governs foreground factory-gate data packages for complete commercial or industrial refrigerating equipment, freezing equipment, process chillers, condensing units, and heat pumps that are not household-type equipment. The modeled item must be a complete identified model or production family, not a refrigerant, component, installation service, or generic cooling service. The rules apply to assembly from purchased materials and components, any reported in-house preparation, refrigerant-circuit charging and testing when applicable, final testing, and release packaging.

The factory-gate result does not represent installation, distribution, operation, maintenance, refrigerant servicing, or end-of-life. Operational performance remains required metadata because equipment subtype, capacity, temperature class, refrigerant, and charge distinguish materially different products. Household refrigerators, household freezers, household air conditioners, household heat pumps, stand-alone components, and service activities are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.refrigerating-and-freezing-equipment-and-heat-pumps-except-household-type-equipment |
| classification_refs | CPC 3.0: 43913, Refrigerating and freezing equipment and heat pumps, except household type equipment |
| covered_products | Complete non-household commercial or industrial refrigerating and freezing equipment, professional refrigerated equipment, process chillers, condensing units, and heat pumps |
| excluded_products | Household-type equipment; air-conditioning machines outside CPC 43913; loose compressors, heat exchangers, fans, controls, and other components sold separately; refrigerants sold separately; installation, repair, and refrigeration services |
| representative_product | One accepted complete commercial or industrial refrigeration, freezing, chiller, condensing-unit, or heat-pump model at the manufacturer's factory gate |
| production_route | Assembly of purchased structural materials and components, with model-specific circuit charging, pressure/leak testing, performance/electrical testing, and release packaging |
| market_state | Complete new equipment as released by the manufacturer, with factory refrigerant charge and packaging status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One complete identified non-household refrigerating/freezing equipment or heat-pump item |
| How much | One accepted item, represented by its measured net product mass in kg |
| How well | Conforms to the declared equipment subtype, rated cooling and/or heating capacity, temperature class, electrical supply, refrigerant species and factory charge, and final acceptance-test criteria |
| How long or cycle | One factory-gate production and acceptance cycle; operation over service life is excluded |
| reference_flow_link | The output `finished_equipment` is the sole quantitative reference for all foreground exchanges |

| Field | Value |
| --- | --- |
| Reference amount | Actual net mass in kg of one accepted equipment item |
| Reference product flow | Refrigerating and freezing equipment and heat pumps, except household type equipment `0c1bef08-e0fc-465a-aff0-c3a43837edbc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equipment subtype and model or production family; rated cooling and/or heating capacity with test standard and conditions; operating temperature class; refrigerant species and factory charge; heat-source and heat-sink configuration; electrical supply; net product mass; installation configuration; factory-gate geography; production period; packaging status |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The exact TianGong product identity is mass-based; item count is descriptive and must be accompanied by the measured mass of the accepted item.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_mass` | `finished_equipment` and all per-item normalization | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or derive from an auditable model-specific bill of materials the net mass of one accepted item; exclude separately reported packaging and reusable shipping fixtures, and reconcile any item-count conversion to this mass. |
| `material_and_component_mass` | Purchased materials, incorporated components, packaging, scrap, test gases, process water, refrigerant charges, and factory refrigerant loss | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report each atomic exchange separately by measured, invoiced, BOM, cylinder, or mass-balance mass; do not combine unlike materials, components, gases, refrigerants, wastes, or emissions. |
| `electricity_energy` | `manufacturing_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered kWh record and convert only for projection using 1 kWh = 3.6 MJ; document meter boundary, allocation driver, voltage level, geography, and grid contract. |
| `refrigerant_species_balance` | Refrigerant inputs and factory refrigerant emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep every refrigerant species or blend in a separate row and close the model-period mass balance from opening stock, receipts, closing stock, charged product, recovery, returns, and measured or calculated loss; never substitute one refrigerant for another. |
| `gas_reference_conditions` | `gaseous_nitrogen_test_gas` and `helium_test_gas` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If the source record is volumetric, retain temperature and pressure and convert to mass only with a supplier certificate or documented density at matching reference conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, refrigerants, test gases, water, electricity, and packaging as received at the reporting factory gate |
| starting_condition_role | The foreground record begins at receipt into the manufacturing site; supplier production and inbound transport are represented only through linked upstream datasets when included by the study |
| product_classification_scope | Complete products within the semantic boundary of CPC 3.0 code 43913, independent of whether a classification mapping has yet been centrally accepted |
| recursive_input_rule | If a complete CPC 43913 product is consumed as an input, record it once as a purchased upstream product and link its supplier dataset; do not recursively reopen its manufacturing inventory inside this foreground package |
| upstream_dataset_requirement | Every purchased input included in the modeled life-cycle system must link to a geographically and technologically appropriate upstream dataset or carry an explicit data gap; foreground quantities remain site and product specific |
| disclosure | Declare equipment subtype, production route, included in-house operations, purchased-component boundary, refrigerant charging and test status, packaging status, factory geography, reporting period, and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | Include material/component receipt, reported in-house preparation, assembly, joining, refrigerant-circuit charging and testing when applicable, electrical and performance testing, packaging, accepted equipment output, factory scrap, and measured factory emissions through release at the manufacturing gate. | `epd-international-25543` |
| `boundary_use_stage_excluded` | foreground_system_boundary | Exclude distribution, installation, operation, maintenance, refrigerant servicing, and end-of-life from the foreground result; retain rated performance, refrigerant identity, charge, and test-condition metadata so downstream use-stage modeling can be attached without changing the product identity. | `eu-2015-1095-professional-refrigeration`; `jrc91168-commercial-refrigeration` |
| `boundary_conditional_operations` | foreground_system_boundary | Apply a conditional row only when the declared model and factory route actually use that material, component, refrigerant, test medium, water, packaging item, waste route, or emission; otherwise record it as not applicable and do not replace it with another choice in the same row. |  |
| `boundary_upstream_linking` | foreground_system_boundary | Do not add upstream supplier production or inbound transport to the foreground factory operation; link separate upstream datasets where the study includes them and disclose missing links. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_preparation_and_assembly` | Component preparation and equipment assembly | required | Include for every modeled item; report only the preparation steps actually performed at the factory and treat purchased finished components as product inputs. | Converts purchased structural materials and components into assembled equipment and records manufacturing electricity and segregated metal scrap. | One accepted equipment item represented by `finished_equipment` |
| `refrigerant_circuit_charging_and_test` | Refrigerant-circuit charging and testing | conditional | Include when the factory charges, pressure-tests, leak-tests, evacuates, flushes, or wet-tests a refrigerant or hydraulic circuit; apply only the specific refrigerant and test-media rows used by the declared model. | Records circuit test media, process water, factory refrigerant charge, and measured factory refrigerant loss by species. | One accepted equipment item represented by `finished_equipment` |
| `final_packaging_and_release` | Final testing, packaging, and release | required | Include final acceptance and release for every item; packaging inputs apply only when the declared factory-gate product is shipped with that packaging component. | Records release packaging and the complete accepted reference product. | One accepted equipment item represented by `finished_equipment` |

### Process: Component preparation and equipment assembly (`component_preparation_and_assembly`)

#### Inputs

##### Product flows

###### Carbon-steel sheet (`carbon_steel_sheet`)

Carbon-steel sheet crosses the factory boundary when cut or formed into panels, frames, bases, tanks, or brackets for the modeled item.

- Selected flow: Carbon-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record the net issued mass attributable to one accepted item from stock issues, cut plans, or the model-specific BOM; include this row only when carbon-steel sheet is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `epd-international-25543`

###### Aluminium sheet (`aluminium_sheet`)

Aluminium sheet crosses the factory boundary when incorporated into casings, panels, fins, or other model-specific parts.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record BOM or stock-issue mass per accepted item; include only when aluminium sheet is incorporated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Copper tubing (`copper_tubing`)

Copper tubing crosses the factory boundary as refrigerant or hydraulic circuit tubing incorporated into the item.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: Record model-specific BOM, measured issue, or length converted with documented tube dimensions and density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `epd-international-25543`

###### Hermetic refrigeration compressor (`hermetic_refrigeration_compressor`)

The complete hermetic compressor is recorded as a purchased component only for models that incorporate this compressor type.

- Selected flow: Hermetic refrigeration compressor `a2a3427c-5d93-494b-a1fd-bcab42fea432`
- Flow property / unit: Mass / kg
- Amount rule: Sum verified supplier masses for the quantity installed in one accepted item; do not use this row for semi-hermetic, open, or other compressor types.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `epd-international-25543`

###### Finned heat exchanger (`finned_heat_exchanger`)

A purchased finned heat exchanger crosses the boundary when installed as a complete coil or exchanger assembly.

- Selected flow: Finned heat exchanger
- Flow property / unit: Mass / kg
- Amount rule: Sum supplier-certified or receiving masses for finned heat exchangers installed in one accepted item; include only for purchased complete exchangers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `epd-international-25543`

###### Electric axial fan (`electric_axial_fan`)

A purchased electric axial fan crosses the boundary when installed for air movement in the modeled item.

- Selected flow: Electric axial fan
- Flow property / unit: Mass / kg
- Amount rule: Sum supplier-certified or receiving masses for electric axial fans installed in one accepted item; include only for this fan type.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `epd-international-25543`

###### Electronic control unit (`electronic_control_unit`)

The electronic control unit is recorded as a purchased component when incorporated into the declared model.

- Selected flow: Electronic control unit `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- Flow property / unit: Mass / kg
- Amount rule: Sum supplier-certified or BOM masses for the control units installed in one accepted item.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `epd-international-25543`

###### Rigid polyurethane insulation foam (`rigid_polyurethane_insulation_foam`)

Rigid polyurethane insulation foam crosses the factory boundary when incorporated into insulated panels, tanks, cabinets, or piping.

- Selected flow: Rigid polyurethane insulation foam
- Flow property / unit: Mass / kg
- Amount rule: Record the cured foam mass incorporated per accepted item from BOM, dispensing records, or panel supplier declarations; include only when this insulation is present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Manufacturing electricity (`manufacturing_electricity`)

Purchased electricity crosses the factory boundary for attributable cutting, forming, brazing, assembly, evacuation, testing, and supporting operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Allocate metered electricity to accepted model output using submetering or a documented causal driver; convert retained kWh records using `electricity_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_electricity`
- Sources:

##### Waste flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap (`steel_scrap`)

Segregated steel offcuts and rejected steel parts leave the assembly process as waste when generated on site.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: Record measured steel scrap generated and removed from the modeled production boundary per accepted item; include only for in-house steel preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_scrap_records`
- Sources:

###### Aluminium scrap (`aluminium_scrap`)

Segregated aluminium offcuts and rejected aluminium parts leave the assembly process as waste when generated on site.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Record measured aluminium scrap generated and removed from the modeled production boundary per accepted item; include only for in-house aluminium preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_scrap_records`
- Sources:

###### Copper scrap (`copper_scrap`)

Segregated copper-tube offcuts and rejected copper parts leave the assembly process as waste when generated on site.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Record measured copper scrap generated and removed from the modeled production boundary per accepted item; include only for in-house copper preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_scrap_records`
- Sources:

##### Elementary flows

### Process: Refrigerant-circuit charging and testing (`refrigerant_circuit_charging_and_test`)

#### Inputs

##### Product flows

###### Gaseous nitrogen test gas (`gaseous_nitrogen_test_gas`)

Gaseous nitrogen crosses the boundary when consumed for circuit pressurization, purging, or leak testing.

- Selected flow: Gaseous nitrogen test gas
- Flow property / unit: Mass / kg
- Amount rule: Record cylinder or bulk-stock withdrawal less measured recovery per accepted item; include only when gaseous nitrogen is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_materials`
- Sources: `epd-international-25543`

###### Helium test gas (`helium_test_gas`)

Helium crosses the boundary when consumed as a tracer gas for leak detection.

- Selected flow: Helium test gas
- Flow property / unit: Mass / kg
- Amount rule: Record cylinder or bulk-stock withdrawal less measured recovery per accepted item; include only when helium leak testing is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_materials`
- Sources: `epd-international-25543`

###### Process water (`process_water`)

Process water crosses the boundary only when consumed in factory hydraulic testing, cleaning, or wet commissioning included in the declared route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Record metered or batch-accounted water entering included operations, net of separately measured recirculation; do not use this row for cooling water or discharged wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_materials`
- Sources:

###### R410A factory charge (`r410a_charge`)

R410A crosses the boundary as a product input only for equipment factory-charged with this blend.

- Selected flow: Refrigerant R410A `7d38fb13-97b6-4c65-a866-0d89444afbe4`
- Flow property / unit: Mass / kg
- Amount rule: Record the R410A mass retained in the accepted item, reconciled to the species-specific factory mass balance; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R404A factory charge (`r404a_charge`)

R404A crosses the boundary as a product input only for equipment factory-charged with this blend.

- Selected flow: Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass / kg
- Amount rule: Record the R404A mass retained in the accepted item, reconciled to the species-specific factory mass balance; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R134a factory charge (`r134a_charge`)

R134a crosses the boundary as a product input only for equipment factory-charged with this refrigerant.

- Selected flow: Refrigerant R134a `1ed335ef-341f-46cc-be90-6bf805244f28`
- Flow property / unit: Mass / kg
- Amount rule: Record the R134a mass retained in the accepted item, reconciled to the species-specific factory mass balance; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R290 propane factory charge (`r290_propane_charge`)

Refrigerant-grade propane crosses the boundary only for equipment factory-charged with R290.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass / kg
- Amount rule: Record the refrigerant-grade R290 mass retained in the accepted item, including declared purity, reconciled to the species-specific factory mass balance; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R744 carbon-dioxide factory charge (`r744_carbon_dioxide_charge`)

Refrigerant-grade carbon dioxide crosses the boundary only for equipment factory-charged with R744.

- Selected flow: Refrigerant-grade carbon dioxide (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record the R744 mass retained in the accepted item, including declared purity and supply state, reconciled to the species-specific factory mass balance; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R717 ammonia factory charge (`r717_ammonia_charge`)

Anhydrous refrigerant-grade ammonia crosses the boundary only for equipment factory-charged with R717.

- Selected flow: Ammonia `9874382d-672c-4601-a3ce-9a4ae21e663b`
- Flow property / unit: Mass / kg
- Amount rule: Record the anhydrous refrigerant-grade R717 mass retained in the accepted item, including declared purity, reconciled to the species-specific factory mass balance; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-2024-573-fgas`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### R410A emitted to air during manufacturing (`r410a_emission_to_air`)

R410A is recorded as an elementary output only when a species-specific factory mass balance demonstrates an unrecovered atmospheric loss.

- Selected flow: Refrigerant R410A to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate non-negative R410A loss from the closed factory mass balance after charge, recovery, returns, and closing stock; do not include upstream refrigerant-production emissions or substitute constituent emissions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-2024-573-fgas`

### Process: Final testing, packaging, and release (`final_packaging_and_release`)

#### Inputs

##### Product flows

###### Corrugated-board box (`corrugated_board_box`)

Corrugated-board boxes cross the boundary as release packaging when supplied with the declared factory-gate item.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual packaging BOM or scale mass attributable to one released item; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `epd-international-25543`

###### EURO wooden pallet (`euro_wooden_pallet`)

A EURO-format wooden pallet crosses the boundary when shipped with the item and is not a reusable factory fixture.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Record pallet mass divided by the actual number of released items carried; otherwise mark not applicable and disclose reusable pooling separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `epd-international-25543`

###### LDPE packaging film (`ldpe_packaging_film`)

Low-density polyethylene film crosses the boundary when used to wrap or protect the released item.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Record packaging BOM, roll-consumption, or scale mass attributable to one released item; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `epd-international-25543`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished non-household refrigerating/freezing equipment or heat pump (`finished_equipment`)

The complete accepted item leaves the foreground manufacturing boundary as the reference product after required final tests and release disposition.

- Selected flow: Refrigerating and freezing equipment and heat pumps, except household type equipment `0c1bef08-e0fc-465a-aff0-c3a43837edbc`
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or auditable BOM-derived net mass of one accepted item and reconcile it to the declared item count and packaging exclusion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one accepted equipment item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_record`
- Sources: `un-cpc-3-0-structure-2025`; `epd-international-25543`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_submetering` | foreground_burden_allocation | Avoid allocation by separate BOMs, production orders, meters, batch logs, charge logs, test records, and scrap records for the declared model or production family. |  |
| `allocation_shared_factory_resources` | foreground_burden_allocation | When shared electricity, water, test gas, or overhead cannot be subdivided, apply a documented causal driver such as machine time, test time, metered load, or production hours; use mass or item count only when shown to represent resource causation. |  |
| `allocation_scrap_no_credit` | foreground_burden_allocation | Report steel, aluminium, and copper scrap as waste at the point of generation; assign no avoided-burden or recycling credit inside this foreground inventory, and disclose any downstream recycling model separately. |  |
| `allocation_rework_and_rejects` | foreground_burden_allocation | Include attributable rework inputs and allocate unrecovered rejected-item burdens across accepted output using the documented production-order accounting period; exclude inputs demonstrably recovered intact into the same period. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_preparation_and_assembly` | Structural materials and incorporated components | Model BOM, purchase specification, goods receipt, stock issue, cut plan | model, part number, material specification, quantity, unit mass, issued mass, incorporated mass, supplier | Reconcile approved BOM to production-order issues and supplier mass evidence | kg | Each model revision and production order | Representative production period, normally at least 12 consecutive months or the complete shorter campaign | Reporting factory | Sum conforming incorporated quantities and attributable issues; normalize to accepted items | Approved BOM revision, supplier datasheet or invoice, stock ledger, production-order reconciliation |
| `cp_factory_electricity` | `component_preparation_and_assembly` | Manufacturing electricity | Main/submeter readings, interval data, production hours | meter id, opening and closing reading, kWh, area or machine, model output, downtime | Submeter preferred; otherwise reconcile site bill and allocate with a causal operating driver | kWh retained; MJ projected | Monthly or finer | Same representative period as production output | Reporting factory and included production areas | Subtract excluded loads, allocate included load, divide by accepted items, convert at 3.6 MJ/kWh | Calibrated meter record, utility invoice, reconciliation and allocation worksheet |
| `cp_scrap_records` | `component_preparation_and_assembly` | Segregated steel, aluminium, and copper scrap | Weigh ticket, bin log, recycler receipt | material, gross and tare mass, date, production area, disposition | Weigh each segregated stream and reconcile opening/closing bin inventory | kg | Each removal, aggregated monthly | Same representative period as production output | Reporting factory | Sum net generated mass by material and normalize to accepted items | Calibrated scale or external weighbridge ticket and recycler receipt |
| `cp_test_materials` | `refrigerant_circuit_charging_and_test` | Nitrogen, helium, and process water | Cylinder/bulk inventory, meter, batch test log | medium, purity, opening stock, receipts, closing stock, recovered amount, reference conditions, water meter | Close medium-specific stock balance and link use to tested serial numbers | kg | Each batch, cylinder change, or meter period | Same representative period as tested accepted output | Charging and test stations | Net consumed mass divided by accepted tested items; retain gas conversion evidence | Cylinder certificate, calibrated meter, recovery log, test record |
| `cp_refrigerant_balance` | `refrigerant_circuit_charging_and_test` | Refrigerant charge and factory loss by species | Refrigerant stock, receipt, charging-machine, recovery, return, and serial charge logs | species, blend designation, purity, opening stock, receipts, closing stock, charged mass, recovered mass, returned mass, serial number | Close a separate mass balance for each refrigerant species or blend | kg | Each charging event with monthly closure | Same representative period as charged accepted output | All factory storage and charging points | Charged product mass is the accepted serial charge; loss is balance residual after recovery and returns, never below zero without investigation | Calibrated charging equipment, purchase/return records, recovery logs, signed balance worksheet |
| `cp_packaging_bom` | `final_packaging_and_release` | Corrugated boxes, EURO pallets, and LDPE film | Packaging BOM, issue record, scale record | packaging type, material, unit mass, issued quantity, reusable status, items per pallet | Reconcile issued packaging to released serial numbers and weigh representative packs | kg | Each packaging design revision and production order | Same representative period as released output | Reporting factory dispatch boundary | Sum packaging supplied with one item; allocate shared pallet by actual item count | Approved packaging specification, scale record, issue and dispatch reconciliation |
| `cp_acceptance_record` | `final_packaging_and_release` | Finished equipment reference product | Serial, model, net-mass, performance, electrical and release records | serial, model, subtype, capacity, test standard and conditions, temperature class, electrical supply, refrigerant, charge, net mass, acceptance status, release date | Link calibrated final-test results and mass record to each accepted serial or statistically controlled model family | item and kg | Each accepted item | Same representative period as all input records | Final test and dispatch gate | Count accepted items and report measured or BOM-reconciled net mass per item | Signed acceptance record, calibrated test result, scale or controlled BOM, nonconformance disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_per_accepted_item` | All foreground exchanges | Divide the period total attributable to the declared model by accepted items in the same period; for mixed-model production first apply the documented causal allocation driver. | attributable period quantity; accepted item count; allocation driver where needed | atomic exchange per accepted item |  |
| `calc_electricity_to_mj` | `manufacturing_electricity` | projected MJ = retained metered kWh × 3.6 | included metered kWh | electricity in MJ per accepted item |  |
| `calc_refrigerant_charge` | Refrigerant input rows | Sum verified charge retained in accepted serials for each refrigerant separately and divide by accepted charged items of that design. | serial charge logs; accepted charged item count | refrigerant charge in kg per accepted item | `eu-2015-1095-professional-refrigeration`; `eu-2024-573-fgas` |
| `calc_refrigerant_loss` | `r410a_emission_to_air` | loss = opening stock + receipts − closing stock − accepted product charge − recovered mass − returned mass; investigate negative or unexplained balances and report only demonstrated non-negative atmospheric loss. | stock, receipts, charges, recovery, returns | R410A emitted to air in kg per accepted item | `eu-2024-573-fgas` |
| `calc_scrap_by_material` | Metal scrap outputs | For each metal separately, generated scrap = outbound scrap + closing on-site scrap − opening on-site scrap; normalize to accepted items after model attribution. | material-specific bin inventory and outbound weights | waste mass by metal per accepted item |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal_alignment` | All foreground records | Use one common representative production period; where a shorter campaign is used, disclose dates, reason, and production coverage. | Period reconciliation linking invoices, meters, stock, production, test, and release records |
| `dq_model_representativeness` | Product family datasets | Demonstrate that included models share material architecture, component technology, refrigerant route, factory operations, and acceptance criteria; otherwise publish separate datasets. | Model-family definition, BOM comparison, route matrix, production-weight calculation |
| `dq_measurement_traceability` | Mass, energy, gas, charge, and performance records | Identify instrument, calibration or supplier certificate, measurement resolution, conversion, and responsible record system. | Calibration certificates, supplier certificates, controlled meter register, audit trail |
| `dq_completeness` | Inventory | Reconcile all 26 required atomic rows as measured/calculated or explicitly not applicable, close material-specific and refrigerant balances, and disclose unresolved UUID identities without inventing proxies. | Signed completeness checklist, balances, UUID audit receipts, exception log |
| `dq_geography_and_technology` | Foreground and linked upstream data | Declare factory geography, technology, purchased-component boundary, grid contract, refrigerant grade, and supplier geography; explain any non-representative upstream link. | Dataset metadata, supplier declarations, linked-dataset review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | foreground_dataset_conformance | Confirm that the modeled output is a complete non-household CPC 43913 product, the reference UUID is exact and public state 100, the output property is Mass, and one accepted item is reconciled to its net kg mass. | `un-cpc-3-0-structure-2025` |
| `validate_qualifiers` | foreground_dataset_conformance | Reject a data package that omits equipment subtype/model, capacity and test conditions, temperature class, refrigerant species and charge, heat-source/sink configuration, electrical supply, net mass, factory geography, period, or packaging status. | `eu-2015-1095-professional-refrigeration` |
| `validate_atomic_inventory` | foreground_dataset_conformance | Confirm every inventory card represents one atomic exchange, uses the exact audited UUID when adopted, and is either quantified or explicitly not applicable under its condition; no umbrella utility, fuel, packaging, waste, emission, component, or refrigerant selector is allowed. |  |
| `validate_refrigerant_exclusivity` | foreground_dataset_conformance | Confirm that only refrigerants actually charged into the declared model are active, each is recorded separately, charge and factory loss close by species, and product refrigerant flows are not used as elementary emissions. | `jrc91168-commercial-refrigeration`; `eu-2024-573-fgas` |
| `validate_boundary_and_allocation` | foreground_dataset_conformance | Confirm factory-gate exclusions, upstream links, shared-resource drivers, rework/reject treatment, and no foreground recycling credit; report any study-level extension separately. |  |
| `validate_bilingual_alignment` | foreground_dataset_conformance | Confirm the English and Chinese projections preserve identical process ids, row ids, rule ids, source ids, UUIDs, controlled codes, and inventory-row order, and use official TianGong Chinese base names for every UUID-bearing flow. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or demonstrably production-weighted family foreground manufacturing dataset for one complete non-household refrigerating/freezing equipment or heat-pump item |
| downstream_use | Link upstream supply datasets and, when required, separate distribution, installation, operation, servicing, and end-of-life scenarios to construct process or lifecycle-model projections |
| allowed_use | Factory-gate comparison only among products with compatible subtype, function, capacity/test conditions, temperature class, refrigerant, factory boundary, geography, period, and packaging status |
| excluded_use | Direct comparison of unlike cooling/heating functions; household equipment; component or refrigerant production; use-stage efficiency claims; cradle-to-grave results without separate downstream modules |
| required_metadata | All reference-flow qualifiers; process applicability; purchased-component boundary; foreground period and geography; source record systems; allocation drivers; upstream links and gaps; UUID audit status; package version |
| required_quality_disclosure | Coverage of accepted output, model-family representativeness, measurement/calibration status, mass and refrigerant balance closure, allocation fraction, exclusions, not-applicable rows, unresolved UUIDs, and absence of source-backed amount ranges |
| update_trigger | Change in model architecture, rated function/capacity class, refrigerant or charge, compressor/heat-exchanger technology, major material or packaging design, factory route/site, grid contract, allocation driver, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Original-text verification of CPC 43913 code and English product classification identity |
| `epd-international-25543` | Dataset (`dataset`) | EPD International, EPD-IES-0025543:003, NRG350R commercial heat pump/chiller product record and declaration: https://www.environdec.com/library/epd25543 | Original-text verification of an in-scope CPC 43913 product, one-piece declared unit with mass conversion, and factory assembly, brazing, pressurization, helium/nitrogen leak testing, evacuation, wiring, final testing, and packaging operations and components |
| `eu-2015-1095-professional-refrigeration` | Standard (`standard`) | European Commission, Commission Regulation (EU) 2015/1095 on professional refrigerated storage cabinets, blast cabinets, condensing units and process chillers: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32015R1095 | Original-text verification of covered professional equipment definitions, rated-performance/test information, annual energy information, and refrigerant type/name/GWP/charge reporting fields |
| `jrc91168-commercial-refrigeration` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Ecodesign for Commercial Refrigeration, JRC91168, 2014: https://publications.jrc.ec.europa.eu/repository/bitstream/JRC91168/comm_refrig_published_bkg_doc%20-%202014%20august%2026.pdf | Original-text verification that energy and refrigerant are material aspects and that R290, R600a, R744, R404A, R134a, and R410A occur as distinct refrigerants or blends in commercial refrigeration contexts |
| `eu-2024-573-fgas` | Standard (`standard`) | European Parliament and Council, Regulation (EU) 2024/573 on fluorinated greenhouse gases, consolidated text: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R0573-20240220 | Original-text verification of equipment-category/refrigerant applicability distinctions and mixture mass-fraction treatment; used as a reporting and conformance rule, not as empirical amount evidence |
