---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-spark-ignition-reciprocating-or-rotary-internal-combustion-piston-engines-for-aircraft
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of spark-ignition reciprocating or rotary internal combustion piston engines for aircraft

## 1. Scope and Applicability

This PCR applies to new, finished parts manufactured specifically for spark-ignition reciprocating or rotary internal combustion piston engines for aircraft. The declared product must be an individually identified part that is complete, conforms to its applicable approved design or controlling specification, and is eligible for installation without further manufacturing.

The cradle-to-gate foreground boundary begins with purchased material stock, castings, forgings, or supplier-finished subparts at the reporting organization's gate. It includes the manufacturing, special processing, inspection, nonconforming-part control, preservation, and release activities controlled by the producer. Supplier-controlled manufacturing and special processes remain inside the product system through upstream datasets. Aircraft-engine assembly, complete engines, compression-ignition engine parts, turbojet and turboprop parts, maintenance-fabricated or remanufactured parts, aircraft operation, maintenance, and end-of-life are excluded.

Because part numbers, alloys, geometries, and special-process routes differ materially, results are comparable only when all required qualifiers and the same gate boundary are declared. This PCR does not treat one kilogram of different part numbers as functionally interchangeable.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-spark-ignition-reciprocating-or-rotary-internal-combustion-piston-engines-for-aircraft |
| classification_refs | CPC 3.0: 43152 (exact classification context) |
| covered_products | New, finished, serviceable cylinder, piston, connecting-rod, crankshaft, crankcase, valve-train, bearing-housing, and other individually identified parts made specifically for aircraft spark-ignition reciprocating or rotary piston engines, when supplied as parts rather than complete engines. |
| excluded_products | Complete engines; generic engine parts not restricted to aircraft spark-ignition piston engines; compression-ignition engine parts; turbojet, turboprop, and other reaction-engine parts; propellers; electrical ignition equipment classified separately; maintenance-fabricated, repaired, overhauled, or remanufactured parts; raw material and unfinished stock not eligible for installation. |
| representative_product | A released, individually identified aircraft spark-ignition piston-engine part conforming to the applicable drawing, material and process specification, inspection status, and production-approval basis. |
| production_route | Purchased material or near-net blank; machining and cleaning; route-specific heat treatment; route-specific surface preparation, anodizing, plating, or coating; inspection, nonconforming-part control, preservation, and release. Outsourced steps are represented by supplier datasets rather than omitted. |
| market_state | New, accepted, serviceable part at the manufacturer's gate, with part number, revision/configuration, material grade, process route, acceptance status, and net accepted mass declared; transport packaging excluded unless explicitly brought into the dataset boundary. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a new, conforming, serviceable part made specifically for an aircraft spark-ignition reciprocating or rotary piston engine. |
| How much | 1 kg net accepted mass of the declared part number and configuration at the manufacturer's gate. |
| How well | Conforms to the applicable approved design or controlling specification, including declared material, dimensions, special processes, inspection status, marking, and release basis. |
| How long or cycle | One production and release cycle ending at the manufacturer's gate; no equivalence in service life among different part numbers is asserted. |
| reference_flow_link | aircraft_engine_part_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net accepted product |
| Reference product flow | Parts of spark-ignition reciprocating or rotary internal combustion piston engines for aircraft (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part name and part number; drawing and revision/configuration; reciprocating or rotary engine application; aircraft application and eligibility basis; material grade and product state; purchased-stock or near-net-blank state; heat-treatment route; surface-treatment route; inspection and release status; net accepted mass; manufacturing site and geography; reporting period; outsourced-process boundary; allocation and recycling treatment; packaging inclusion status |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the net mass of accepted parts after final processing and before excluded transport packaging. Normalize all inventory quantities to 1 kg accepted product. |
| `accepted_product_mass` | production batches | Mass | kg | Determine accepted product mass from calibrated scales or part-count multiplied by a controlled, current measured mass per part number; exclude rejected parts and samples not released as product. |
| `energy_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity in its recorded unit and convert kWh to MJ using 1 kWh = 3.6 MJ. Do not mix electricity with fuel energy. |
| `gas_volume_conditions` | natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered gas volume and disclose the temperature, pressure, dry/wet basis, and any standard-volume conversion used. |
| `aqueous_mass_conversion` | process water and aqueous wastewater | Mass | kg | Prefer measured mass. When only volume is available, convert with a measured or documented density applicable to the stream and reporting conditions, and retain both the original volume and density evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased alloy stock, casting, forging, or supplier-finished subpart received with material/product identity, mass, supplier, geography, production route, and upstream-dataset reference. |
| starting_condition_role | Cradle-to-gate starting condition for the reporting organization's controlled manufacturing route. |
| product_classification_scope | New, finished parts specifically for aircraft spark-ignition reciprocating or rotary piston engines; not complete engines or generic/non-aircraft engine parts. |
| recursive_input_rule | A purchased input that already meets this same finished-part category is recorded as one product input with its own upstream dataset, declared part number and gate, and is not recursively decomposed inside the receiving foreground process. |
| upstream_dataset_requirement | Every purchased material, near-net blank, supplier-finished part, and outsourced special process must carry a geographically and technologically representative upstream dataset or be disclosed as an unresolved data gap; supplier-controlled burdens may not be omitted. |
| disclosure | Declare material and product state at entry, exact controlled and outsourced operations, cut-offs, site and period, yield and reject accounting, energy and water meter allocation, treatment destinations, packaging status, and any excluded tooling or capital goods. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | all foreground datasets | Include purchased-input supply, all producer-controlled manufacturing and special processes, inspection, nonconforming-part handling, preservation, and release through the manufacturer's gate. | `un-cpc-3-0-structure-2025`; `faa-ac-21-43a-2015`; `faa-ac-43-18-chg-2-2011` |
| `sb_outsourced_processes` | outsourced machining, heat treatment, surface treatment, inspection, and other special processes | Represent the supplier service and its material, energy, emission, and waste burdens with an upstream dataset; do not treat outsourcing as a cut-off. | `faa-ac-21-43a-2015`; `faa-ac-43-18-chg-2-2011` |
| `sb_use_and_end_of_life` | downstream aircraft and engine stages | Exclude engine assembly, aircraft integration, operation, maintenance, replacement, and end-of-life unless a study explicitly extends the boundary and reports those stages separately. | `un-cpc-3-0-structure-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machining_and_cleaning` | Material preparation, machining, and cleaning | required | Always include the controlled operations that turn purchased stock or near-net blanks into the declared part geometry; represent purchased finished subparts as recursive inputs under the boundary rule. | Foreground manufacturing and material-removal accounting. | Inputs, chips, spent machining fluid, energy, and water per 1 kg accepted part. |
| `heat_treatment` | Heat treatment and quenching | conditional | Include when thermal treatment or oil quenching is performed under the declared route; use supplier datasets when outsourced. | Controlled thermal processing. | Fuel, electricity, quenching-oil make-up, direct fossil CO2, and spent quench oil per 1 kg accepted part. |
| `surface_treatment` | Surface preparation and chromium-bearing anodizing or plating | conditional | Include only when the declared part route uses the represented alkaline cleaning, acid activation, chromic-acid anodizing, or chromium plating steps; other finishes require separate atomic rows. | Controlled surface processing and rinse/wastewater accounting. | Electricity, water, bath-chemical make-up, and wastewater per 1 kg accepted part. |
| `inspection_and_release` | Inspection, nonconforming-part control, preservation, and release | required | Always include final conformity activities and the measured disposition of nonconforming parts; include route-specific NDI consumables as additional atomic rows in the foreground dataset. | Quality release and final reference-product output. | Inspection energy, reject mass, and 1 kg accepted product. |

### Process: Material preparation, machining, and cleaning (`machining_and_cleaning`)

#### Inputs

##### Product flows

###### Aluminium-alloy casting blank (`aluminium_alloy_casting`)

Record the measured mass of the exact aluminium-alloy casting grade entering machining when this material route applies.

- Selected flow: Aluminium-alloy casting, declared alloy grade and casting state (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass consumed by the declared production batch, net of returned unused stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `faa-ac-43-18-chg-2-2011`

###### Alloy-steel forging blank (`alloy_steel_forging`)

Record the measured mass of the exact alloy-steel forging grade entering machining when this material route applies.

- Selected flow: Alloy-steel forging, declared alloy grade and forged state (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass consumed by the declared production batch, net of returned unused stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `faa-ac-43-18-chg-2-2011`

###### Machining electricity (`machining_electricity`)

Record electrical energy delivered to machine tools, chip and fluid handling, and in-boundary cleaning equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or documented equipment power multiplied by operating time and allocated under section 7
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Machining and cleaning process water (`machining_process_water`)

Record water supplied across the process boundary for machining-fluid preparation and part cleaning.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded process-water mass; exclude recirculated water until make-up crosses the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Cutting-fluid make-up (`cutting_fluid`)

Record purchased cutting fluid crossing the process boundary; declare formulation, concentration, and whether it is neat oil or water-miscible concentrate.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Measured make-up fluid added during the reporting period and assigned to the declared production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Aluminium machining chips (`aluminium_machining_chips`)

Record segregated aluminium-alloy chips and swarf leaving the process when the aluminium route applies.

- Selected flow: Aluminium-alloy machining chips, declared alloy and contamination state (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched or inventory-adjusted chip mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Steel machining chips (`steel_machining_chips`)

Record segregated steel chips and swarf leaving the process when the alloy-steel route applies.

- Selected flow: Steel scrap, machining chips `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched or inventory-adjusted chip mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Waste cutting oil (`waste_cutting_oil`)

Record spent neat cutting oil leaving the process only when the declared machining-fluid route uses neat oil.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Spent water-miscible cutting-fluid emulsion (`spent_water_miscible_cutting_fluid_emulsion`)

Record spent water-miscible machining emulsion separately from neat waste cutting oil when that route applies.

- Selected flow: Spent water-miscible cutting-fluid emulsion (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

##### Elementary flows

### Process: Heat treatment and quenching (`heat_treatment`)

#### Inputs

##### Product flows

###### Heat-treatment natural gas (`heat_treatment_natural_gas`)

Record gaseous natural gas burned in an in-boundary furnace only when the declared heat-treatment route uses it.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered standard or actual volume assigned to the declared heat-treatment batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources:

###### Heat-treatment electricity (`heat_treatment_electricity`)

Record electricity supplied to electric furnaces, furnace auxiliaries, quench circulation, and controls when in boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or documented equipment power multiplied by operating time and allocated under section 7
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources:

###### Quenching-oil make-up (`quenching_oil`)

Record new quenching oil added to the bath when oil quenching is part of the declared route; do not record the circulating bath inventory as consumption.

- Selected flow: Quenching Oil `02f62137-e204-46e6-8e72-e88b450fbdc4`
- Flow property / unit: Mass / kg
- Amount rule: Measured make-up and replacement oil charged during the reporting period and assigned to treated batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent quenching oil (`spent_quenching_oil`)

Record spent quenching oil removed from the bath and transferred to the declared recovery or treatment route.

- Selected flow: spent quench oil `0f997fd8-26b1-432f-a8b8-e2703616b018`
- Flow property / unit: Mass / kg
- Amount rule: Measured removed mass, adjusted for documented off-site return or on-site inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide`)

Record only direct fossil CO2 from in-boundary fuel combustion; upstream electricity emissions remain in electricity datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site-measured direct emission assigned to the heat-treatment batches, or a disclosed calculation from metered fuel, fuel carbon content, and oxidation evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_records`
- Sources:

### Process: Surface preparation and chromium-bearing anodizing or plating (`surface_treatment`)

#### Inputs

##### Product flows

###### Surface-treatment electricity (`surface_treatment_electricity`)

Record electricity supplied to rectifiers, bath heating, ventilation, pumps, and in-boundary emission controls for the declared route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity assigned to the declared parts and treatment batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `us-epa-ap42-12-20-electroplating-2021`

###### Surface-treatment process water (`surface_treatment_process_water`)

Record water added to treatment baths, cleaning, and rinsing; count only make-up crossing the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded water input assigned to the declared treatment batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `us-epa-ap42-12-20-electroplating-2021`

###### Sodium-hydroxide make-up (`sodium_hydroxide`)

Record sodium hydroxide added for alkaline cleaning or etching only when used by the declared surface-treatment recipe.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Mass of active sodium hydroxide in purchased solution or solid make-up assigned to the declared batches; retain concentration evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `us-epa-ap42-12-20-electroplating-2021`

###### Sulfuric-acid make-up (`sulfuric_acid`)

Record sulfuric acid added for acid activation or bath chemistry only when used by the declared recipe.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Mass of active sulfuric acid in purchased solution assigned to the declared batches; retain concentration evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `us-epa-ap42-12-20-electroplating-2021`

###### Chromic-acid make-up (`chromic_acid`)

Record chromic acid added only for a declared chromic-acid anodizing or hexavalent-chromium plating route.

- Selected flow: Chromic acid solution, declared concentration and bath role (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Mass of active chromic acid in purchased or prepared make-up assigned to the declared batches; retain composition and concentration evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `us-epa-ap42-12-20-electroplating-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Chromium-containing metal-finishing wastewater (`chromium_containing_metal_finishing_wastewater`)

Record the combined aqueous discharge transferred from the declared chromium-bearing treatment line to on-site or off-site treatment, before treatment when that is the process boundary.

- Selected flow: Chromium-containing metal-finishing wastewater, declared chromium speciation and concentration (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge mass, or measured volume converted with applicable density, assigned to the declared treatment batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `us-epa-ap42-12-20-electroplating-2021`

##### Elementary flows

### Process: Inspection, nonconforming-part control, preservation, and release (`inspection_and_release`)

#### Inputs

##### Product flows

###### Inspection electricity (`inspection_electricity`)

Record electricity supplied to dimensional inspection, nondestructive inspection, final cleaning, marking, and release-document equipment within the declared boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or documented equipment power multiplied by operating time and assigned to accepted and rejected parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_release_records`
- Sources: `faa-ac-21-43a-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted aircraft piston-engine part (`aircraft_engine_part_output`)

Record only parts that have passed the declared inspection and release process.

- Selected flow: Parts of spark-ignition reciprocating or rotary internal combustion piston engines for aircraft (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net accepted reference product by definition; retain measured batch accepted mass before normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-structure-2025`; `faa-ac-21-43a-2015`

##### Waste flows

###### Nonconforming aircraft piston-engine part (`nonconforming_aircraft_engine_part`)

Record the mass of rejected parts rendered unusable or transferred to a documented non-product disposition; do not net it against recyclable-metal inputs.

- Selected flow: Nonconforming aircraft spark-ignition piston-engine part, segregated for controlled disposition (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected-part mass by part number and disposition during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_release_records`
- Sources: `faa-ac-21-43a-2015`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared machines, furnaces, baths, ventilation, and inspection equipment | Prefer submetering, batch records, machine time, bath loading, or another measured causal driver. Document the driver and reconcile allocated totals to facility records. |  |
| `allocation_recycling` | aluminium chips, steel chips, rejected parts, waste oils, and other recovered residues | Report gross waste output and its destination. Do not subtract recycling credit or avoided virgin production from the foreground inventory; any recycling benefit must be modelled and disclosed in a separate downstream scenario. |  |
| `allocation_multi_output` | production campaigns with more than one saleable part | Subdivide by part number when feasible. If subdivision is not feasible, use a documented physical causal relation; economic allocation requires explicit justification and sensitivity disclosure. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_records` | `machining_and_cleaning` | Material, electricity, water, cutting fluid, chips, and spent machining fluid | Purchase/issue records, scales, meters, batch travellers, and waste manifests | part_number; batch_id; accepted_mass_kg; input_identity; input_mass_kg; electricity_MJ_or_kWh; water_mass_or_volume; cutting_fluid_mass_kg; chip_material; chip_mass_kg; spent_fluid_identity; spent_fluid_mass_kg; inventory_change; destination | Reconcile direct meters and weighed issues/dispatches to each production batch; retain original units and allocation keys. | kg; MJ; kWh; m3 | Per batch with at least monthly reconciliation | Representative continuous 12-month period or complete shorter campaign disclosed | All controlled machining and cleaning operations at the reporting site and included suppliers | Sum net boundary-crossing quantities by atomic flow, allocate only shared quantities under section 7, and divide by accepted part mass. | Calibration records, purchase and issue records, batch travellers, meter totals, waste manifests, and material-balance reconciliation |
| `cp_heat_treatment_records` | `heat_treatment` | Fuel, electricity, quenching oil, direct fossil CO2, and spent quench oil | Furnace meters, cycle logs, bath make-up/removal logs, emission records, and batch travellers | batch_id; furnace_id; cycle; treated_part_mass_kg; accepted_mass_kg; gas_m3; gas_conditions; electricity_MJ_or_kWh; quench_oil_added_kg; quench_oil_removed_kg; direct_fossil_co2_kg; emission_calculation_inputs | Link each furnace cycle and bath transaction to treated batches; retain measured fuel and electricity and all emission-calculation inputs. | kg; MJ; kWh; m3 | Per furnace cycle and bath transaction, reconciled monthly | Representative continuous 12-month period or complete shorter campaign disclosed | All in-boundary heat-treatment and quench equipment and included supplier services | Allocate shared cycles by measured treated mass or another documented causal driver, then divide by accepted part mass. | Calibrated meter records, furnace charts, controlled recipes, bath logs, emission records, and batch traceability |
| `cp_surface_treatment_records` | `surface_treatment` | Electricity, water, sodium hydroxide, sulfuric acid, chromic acid, and wastewater | Rectifier and utility meters, bath analyses, chemical issue records, rinse records, discharge meters, and treatment manifests | batch_id; route; treated_area_or_mass; accepted_mass_kg; electricity_MJ_or_kWh; water_mass_or_volume; chemical_identity; solution_mass_kg; concentration; active_chemical_mass_kg; wastewater_mass_or_volume; density; chromium_speciation; destination | Record each chemical separately on an active-substance basis, retain solution concentration, and reconcile bath additions, drag-out, rinse discharge, and inventory changes. | kg; MJ; kWh; m3 | Per batch and chemical addition, reconciled monthly | Representative continuous 12-month period or complete shorter campaign disclosed | All in-boundary surface-treatment, rinse, ventilation, and wastewater-transfer operations | Sum atomic inputs and outputs by declared route, allocate shared baths by measured ampere-hours, treated area, or another documented causal driver, and divide by accepted part mass. | Calibrated meters, certificates of analysis, bath-control logs, purchase/issue records, discharge records, and hazardous-waste documentation |
| `cp_inspection_release_records` | `inspection_and_release` | Inspection electricity, accepted product, and nonconforming parts | Inspection/test records, equipment logs, calibrated scales, release records, and nonconformance dispositions | part_number; revision; batch_id; inspection_route; electricity_MJ_or_kWh; accepted_count; accepted_mass_kg; rejected_count; rejected_mass_kg; disposition; release_status | Link energy, accepted mass, and reject mass to the same part-number campaign and retain authorized inspection and disposition records. | kg; MJ; kWh; Item(s) | Per batch or release lot, reconciled monthly | Representative continuous 12-month period or complete shorter campaign disclosed | All final inspection, marking, preservation, release, and nonconforming-part control in boundary | Sum accepted and rejected mass by part number, allocate shared inspection energy causally, and normalize to accepted mass only. | Inspection and test records, calibration status, release documents, nonconformance authorization, segregation evidence, and final disposition records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized quantity = net boundary-crossing quantity assigned to the declared part number / net accepted part mass for the same reporting period | atomic flow quantity; allocation key where needed; accepted_mass_kg | quantity per 1 kg accepted reference product |  |
| `calc_electricity_conversion` | electricity records | electricity_MJ = electricity_kWh × 3.6; preserve the original meter reading and unit | electricity_kWh | electricity_MJ |  |
| `calc_solution_active_mass` | sodium hydroxide, sulfuric acid, and chromic acid | active chemical mass = solution mass × measured or certificate concentration mass fraction | solution_mass_kg; concentration_mass_fraction | active_chemical_mass_kg | `us-epa-ap42-12-20-electroplating-2021` |
| `calc_direct_fossil_co2` | direct furnace CO2 when not continuously measured | Use the site's documented fuel-carbon calculation with metered fuel, fuel carbon content, oxidation evidence, and unit conversions; disclose the equation and factors rather than applying an undeclared default. | gas_m3 or fuel mass; reference conditions; carbon content; oxidation factor; molecular conversion | fossil_carbon_dioxide_kg |  |
| `calc_aqueous_mass` | water or wastewater recorded by volume | mass = measured volume × stream density at the declared conditions | volume; density; temperature and concentration conditions | water_or_wastewater_mass_kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | reference product and all material inputs | Preserve part number, current drawing/revision, material grade, supplier or site, batch/lot, process route, inspection status, and raw-material-to-completed-part traceability. | Controlled design data, batch travellers, certificates, supplier records, inspection status, and release record |
| `dq_temporal_scope` | all foreground records | Use one representative continuous 12-month period where available; a shorter complete campaign must state dates, production volume, seasonality limits, and why it is representative. | Meter coverage, production calendar, batch list, and reconciliation |
| `dq_atomic_completeness` | all process inventories | Reconcile purchased inputs, utilities, chemicals, wastes, direct emissions, accepted mass, rejected mass, and inventory changes; add every additional route-specific exchange as a separate atomic row. | Material and energy balances, bills, meters, bath logs, waste manifests, and omission register |
| `dq_special_processes` | heat treatment, anodizing, plating, coating, and nondestructive inspection | Declare whether each process is in-house or outsourced and retain controlled route, supplier, recipe/specification, acceptance evidence, and upstream dataset link. | Special-process certification, supplier control record, work instruction, inspection/test record, and upstream dataset |
| `dq_measurement` | meters, scales, gauges, and test equipment | Use calibrated equipment over the reporting period; document estimation, downtime, missing-data substitution, and uncertainty. | Calibration status, meter logs, maintenance records, and missing-data register |
| `dq_unresolved_uuid` | inventory rows without a confirmed Tiangong UUID | Preserve the exact atomic name and qualifiers and flag the identity as unresolved; never substitute a broader, differently classified, or differently stated flow. | UUID audit record and dataset-level unresolved-identity disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_product_identity` | reference product | Fail validation if part number, revision/configuration, aircraft spark-ignition piston-engine application, material grade, approved-design or controlling-specification basis, acceptance status, or net accepted mass is missing. | `un-cpc-3-0-structure-2025`; `faa-ac-21-43a-2015`; `faa-ac-43-18-chg-2-2011` |
| `val_boundary` | foreground and supplier-controlled operations | Fail validation if an applicable machining, heat-treatment, surface-treatment, inspection, or supplier-controlled special process is omitted without an explicit exclusion and data-gap disclosure. | `faa-ac-21-43a-2015`; `faa-ac-43-18-chg-2-2011` |
| `val_inventory_atomicity` | all exchanges | Fail validation if an inventory row combines materials, utilities, fuels, chemicals, wastes, wastewater types, or emissions, or if route applicability is not declared. |  |
| `val_mass_and_energy_reconciliation` | production period | Require accepted mass, rejected mass, material inputs, recovered chips, waste oils, chemical/water outputs, electricity, and fuel totals to reconcile with source records and documented allocation keys. |  |
| `val_quality_release` | accepted and nonconforming parts | Fail validation if inspection/test status, authorized release basis, nonconforming-part segregation, or final disposition evidence is absent. | `faa-ac-21-43a-2015` |
| `val_uuid_and_units` | UUID-bearing and unresolved rows | Require UUID-bearing rows to retain the audited flow property and unit group; require unresolved rows to remain explicitly unresolved with the same row id and semantic qualifiers. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate secondary dataset generated from foreground manufacturing records. |
| downstream_use | May serve as a secondary_dataset or background_dataset for the declared part number in aircraft piston-engine, maintenance, or aircraft product systems when geography, technology, period, route, and product-state compatibility are demonstrated. |
| allowed_use | Product-footprint and LCA modelling for the same part number/configuration or a demonstrably equivalent material, manufacturing route, acceptance state, geography, and reporting period. |
| excluded_use | Comparison of different part numbers by mass alone; complete-engine representation; compression-ignition, turbine-engine, remanufactured, repaired, or maintenance-fabricated parts; use-phase or service-life claims without additional modelling. |
| required_metadata | canonical PCR id and version; part name/number and drawing revision; engine and aircraft application; material grade; purchased-input state; controlled and outsourced route; accepted and rejected mass; site/geography; reporting period; electricity mix and gas reference conditions; allocation; recycling and treatment destinations; packaging status; source and UUID gaps. |
| required_quality_disclosure | Primary-data share and coverage; meter and scale calibration; supplier-data coverage; missing-data treatment; mass/energy reconciliation; special-process traceability; inspection/release evidence; uncertainty; unresolved UUIDs and range-evidence needs. |
| update_trigger | New part or revision, material or supplier change, manufacturing or special-process change, site/geography change, electricity or fuel-supply change, allocation change, material yield or reject-rate shift, reporting period older than the user's representativeness requirement, or resolution of a UUID/source gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05). | English category identity and exclusions from adjacent CPC product classes. |
| `un-cpc-1-1-chinese-2004` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, ST/ESA/STAT/SER.M/77/Ver.1.1. https://digitallibrary.un.org/record/536544/files/M_77ver1_1c.pdf (retrieved 2026-09-05). | Official Chinese CPC 43152 terminology used to verify the professional current translation. |
| `faa-ac-21-43a-2015` | Official guidance (`official_guidance`) | Federal Aviation Administration, AC 21-43A, Production Under 14 CFR Part 21, Subparts F, G, K, and O, 1 October 2015. https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_21-43A.pdf (retrieved 2026-09-05). | Manufacturing-process control, raw-material-to-completed-article traceability, inspection and testing, calibrated equipment, nonconforming-article control, supplier control, handling, storage, and quality records. |
| `faa-ac-43-18-chg-2-2011` | Official guidance (`official_guidance`) | Federal Aviation Administration, AC 43-18 with Changes 1 and 2, Fabrication of Aircraft Parts by Maintenance Personnel, 7 June 2011. https://www.faa.gov/documentLibrary/media/Advisory_Circular/Ac_43-18_Chg_1-2.pdf (retrieved 2026-09-05). | Installable-part boundary; design-data needs for materials, dimensions, processes, inspection and testing; and recognition of machining, plating, and welding as fabrication services. |
| `us-epa-ap42-12-20-electroplating-2021` | Official guidance (`official_guidance`) | United States Environmental Protection Agency, AP-42 Chapter 12, Section 20, Electroplating, October 2021. https://www.epa.gov/sites/production/files/2020-11/documents/c12s20.pdf (retrieved 2026-09-05). | Conditional aircraft-part chromium-plating and chromic-acid-anodizing process decomposition, including pretreatment, alkaline cleaning, acid dipping, rinsing, electricity, water, bath chemicals, and chromium-bearing emissions/wastes. |
