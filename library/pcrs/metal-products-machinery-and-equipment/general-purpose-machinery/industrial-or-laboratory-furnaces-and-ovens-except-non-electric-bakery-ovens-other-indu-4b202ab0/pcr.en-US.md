---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.industrial-or-laboratory-furnaces-and-ovens-except-non-electric-bakery-ovens-other-indu-4b202ab0
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Industrial or laboratory furnaces and ovens, except non-electric bakery ovens; other industrial or laboratory induction or dielectric heating equipment

## 1. Scope and Applicability

This PCR applies to cradle-to-factory-gate production of industrial or laboratory furnaces, ovens, kilns, dryers, melters, and other industrial or laboratory induction, microwave, radio-frequency, or dielectric heating equipment whose principal function is process heating. It covers the declared equipment, factory-installed heating system, controls, insulation or refractory lining, included auxiliaries, factory acceptance testing, and transport packaging supplied with the equipment.

The PCR excludes non-electric bakery ovens, domestic cooking and space-heating appliances, furnace burners or stokers supplied as separate products, spare parts supplied separately, boiler manufacture, installation at the customer site, operating energy and consumables during use, maintenance, and end-of-life. A data package must not claim category-wide comparability unless equipment function, heating technology, rated duty, maximum operating temperature, included auxiliaries, and design service life are equivalent.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.industrial-or-laboratory-furnaces-and-ovens-except-non-electric-bakery-ovens-other-indu-4b202ab0 |
| classification_refs | CPC 3.0: 43420 |
| covered_products | Industrial and laboratory furnaces, ovens, kilns, dryers and melters; industrial or laboratory induction, microwave, radio-frequency and dielectric heating equipment; factory-integrated controls and auxiliaries supplied as part of the equipment |
| excluded_products | Non-electric bakery ovens; domestic cooking or space-heating appliances; separately supplied furnace burners, stokers and parts; boilers; customer-site installation; use and end-of-life services |
| representative_product | A factory-tested industrial or laboratory process-heating equipment assembly, complete with the heating system, enclosure, declared lining or insulation, controls and included auxiliaries |
| production_route | Product-specific bill of materials followed by metal preparation and fabrication, lining or insulation installation where designed, electrical and mechanical assembly, factory acceptance testing, finishing where applied, and transport packaging |
| market_state | Complete, factory-tested equipment at the manufacturer's factory gate, before customer-site installation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of complete industrial or laboratory process-heating equipment that performs the declared heating, melting, drying, curing or thermal-treatment duty |
| How much | 1,000 kg net mass of complete factory-tested equipment, excluding separately reported transport packaging |
| How well | Meets the declared rated power or capacity, maximum operating temperature, usable chamber or work-zone dimensions, atmosphere or pressure capability, temperature-control performance, safety functions and acceptance-test specification |
| How long or cycle | The declared design service life and reference duty profile; use-stage operation is outside this factory-gate inventory but must be declared to support downstream modelling |
| reference_flow_link | The reference flow is the 1,000 kg net equipment output from `equipment_manufacturing` (`reference_product`) |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Industrial or laboratory furnaces and ovens, except non-electric bakery ovens, other industrial or laboratory induction or dielectric heating equipment `b7fbf2da-6bb0-4f10-b78b-fdf2207373d2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equipment subtype; heating technology and energy source; direct or indirect heating; rated power or thermal input; rated throughput or batch capacity; maximum operating temperature; chamber or work-zone dimensions; controlled atmosphere, vacuum or pressure capability; temperature-control specification; included burners, power supply, controls, fans, conveyors, heat recovery and other auxiliaries; net equipment mass; packaging mass and type; factory acceptance-test programme; manufacturing geography; reference year; design service life; reference duty profile |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product and normalization | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net equipment mass after factory acceptance, excluding separately reported transport packaging; normalize every inventory amount to exactly 1,000 kg net equipment. |
| `bom_mass_basis` | bill-of-material product inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual issued-to-production mass by specific material and reconcile returns to stores, offcuts, scrap, rework and incorporated mass; do not substitute purchase expenditure or a generic material share. |
| `electricity_energy_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ; declare grid geography, voltage level, contractual supply and included losses. |
| `gas_volume_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volume at declared reference temperature and pressure; when meters use different conditions, retain the raw reading and documented conversion to the declared reference conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, fuels, gases, water and electricity delivered to the manufacturing-site boundary, each linked to an upstream dataset appropriate to its declared specification and geography |
| starting_condition_role | Upstream-supplied technosphere inputs to the foreground equipment-manufacturing unit process |
| product_classification_scope | Complete industrial or laboratory process-heating equipment within the reviewed CPC 43420 semantic boundary, independent of the external classification identifier |
| recursive_input_rule | A purchased complete heating-equipment unit within the same semantic category is recorded as a separate product input with its own upstream dataset and declared mass; its internal manufacture is not reopened inside this foreground process |
| upstream_dataset_requirement | Use specification-, product-state-, technology-, geography- and time-representative datasets for every purchased material, component, fuel, utility and packaging input; disclose every proxy and unresolved identity |
| disclosure | Declare product configuration, BOM scope, outsourced operations, manufacturing sites, test programme, allocation, exclusions, data gaps, packaging treatment and whether factory-integrated auxiliaries are included |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | foreground equipment production | Include product-specific BOM inputs, on-site fabrication and assembly, lining or insulation installation, finishing where performed, factory acceptance testing, direct emissions, waste handling to the point it leaves the site, and transport packaging; stop at the manufacturer's factory gate before customer-site installation. | `eu-pef-method-2021`; `us-doe-process-heating-sourcebook-2007` |
| `boundary_outsourced_operations` | outsourced fabrication, coating, heat treatment or assembly | Include an upstream product or service dataset for every outsourced operation attributable to the reference product and disclose the supplier geography, technology, product state and returned component mass. | `eu-pef-method-2021` |
| `boundary_no_silent_cutoff` | inventory completeness | Do not omit a known material, energy, waste or direct-emission flow by default; any exclusion must be quantified, justified for the stated study method and disclosed with its expected material, energy and environmental significance. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `equipment_manufacturing` | Equipment fabrication, assembly, factory acceptance testing and packaging | required | Always include; each conditional atomic exchange below is included only when the declared product design or manufacturing/test operation uses that exchange | Foreground manufacture of complete process-heating equipment | 1,000 kg net complete factory-tested equipment output |

### Process: Equipment fabrication, assembly, factory acceptance testing and packaging (`equipment_manufacturing`)

#### Inputs

##### Product flows

###### Alloy-steel plate for shells and fabricated parts (`alloy_steel_plate`)

Record alloy-steel plate issued to fabrication when it is incorporated into the enclosure, chamber, ducts, supports or other fabricated parts.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from the product-specific BOM and stores records after subtracting documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-method-2021`

###### Structural steel sections for frames and supports (`structural_steel_sections`)

Record welded steel angles, shapes and sections incorporated into the equipment frame or load-support structure.

- Selected flow: Steel `b5e4fcbb-ad3f-4511-b007-67131b98866a`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from the product-specific BOM and stores records after subtracting documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-method-2021`

###### Heat-resistant stainless-alloy plate for hot-zone parts (`heat_resistant_alloy_plate`)

Include only when the declared design uses a heat-resistant stainless alloy in radiant tubes, muffles, retorts, heating-element supports or other hot-zone parts; record the exact alloy grade.

- Selected flow: Heat-resistant stainless-alloy plate
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass by declared alloy grade from the product-specific BOM and stores records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `us-doe-process-heating-sourcebook-2007`; `eu-pef-method-2021`

###### Refractory brick lining (`refractory_bricks`)

Include only when refractory bricks are installed; declare chemistry, grade, density, maximum service temperature and installed location.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass / kg
- Amount rule: Net installed mass plus separately recorded installation offcuts, based on issued and returned quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-method-2021`

###### Aluminium-silicate-wool insulation (`aluminium_silicate_wool`)

Include only when aluminium-silicate wool is installed; declare grade, density, binder, maximum service temperature and installed location.

- Selected flow: aluminium silicate wool `fce8fd2c-a5f6-4eff-ae6b-0f8f7cf29dce`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from the product-specific BOM after subtracting documented returns and separately recording offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-method-2021`

###### Rock-wool insulation (`rock_wool`)

Include only when rock wool is installed; declare density, binder or facing, maximum service temperature and installed location.

- Selected flow: rock wool `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from the product-specific BOM after subtracting documented returns and separately recording offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-method-2021`

###### Copper wire for conductors and induction coils (`copper_wire`)

Record copper wire incorporated into power conductors, windings or induction coils; declare purity, conductor form, insulation state and equipment function.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass / kg
- Amount rule: Net incorporated mass from the product-specific BOM and stores records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-method-2021`; `us-doe-process-heating-sourcebook-2007`

###### Electronic control unit (`electronic_control_unit`)

Record each supplied electronic control unit by net mass when it is incorporated into the reference equipment; declare voltage class, enclosure rating and control functions.

- Selected flow: Electronic control unit `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- Flow property / unit: Mass / kg
- Amount rule: Net incorporated mass from the product-specific BOM and supplier records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-method-2021`

###### Purchased electricity (`electricity`)

Record metered electricity attributable to material preparation, fabrication, assembly, ventilation, finishing, factory acceptance testing and packaging; exclude upstream emissions already represented by the electricity dataset from direct-emission rows.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered product-line or equipment-order electricity, or a documented allocation from site meters using causal machine-hours or measured loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-pef-method-2021`

###### Natural gas for factory acceptance testing (`natural_gas`)

Include only natural gas combusted on site for acceptance testing of fuel-fired equipment or attributable manufacturing heat; declare gas composition, reference conditions and test purpose.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered test-cell or attributable batch volume at declared reference temperature and pressure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuels_gases_water`
- Sources: `us-doe-process-heating-sourcebook-2007`

###### Industrial oxygen for cutting or welding (`industrial_oxygen`)

Include only purchased industrial oxygen used in attributable oxy-fuel cutting or welding; declare purity, supply pressure and reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory-change volume attributable to the reference product at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuels_gases_water`
- Sources: `eu-pef-method-2021`

###### Process water for cleaning and testing (`process_water`)

Include process water delivered to equipment cleaning, hydrostatic or cooling-circuit testing when these operations occur; declare source, quality and whether water is recirculated.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water or documented tank mass balance attributable to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuels_gases_water`
- Sources: `eu-pef-method-2021`

###### Wooden transport pallet (`wooden_pallet`)

Include only wooden pallets or load boards supplied with the equipment at the factory gate; declare pallet type, timber treatment, reuse state and mass.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Shipped mass from packaging BOM or weighed packaging records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete factory-tested process-heating equipment (`reference_product`)

Record the net mass of complete equipment after acceptance testing and before customer-site installation; transport packaging is reported separately as an input and excluded from net equipment mass.

- Selected flow: Industrial or laboratory furnaces and ovens, except non-electric bakery ovens, other industrial or laboratory induction or dielectric heating equipment `b7fbf2da-6bb0-4f10-b78b-fdf2207373d2`
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of exactly 1,000 kg net complete equipment after normalization from weighed shipment or engineering mass records
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-structure-2025`; `us-doe-process-heating-sourcebook-2007`

##### Waste flows

###### Segregated steel fabrication scrap (`steel_scrap`)

Record ferrous offcuts, skeletons and rejected steel parts that leave the foreground process as segregated steel scrap; declare alloy family, contamination and destination.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap by production order, or inventory change plus documented segregation records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `eu-pef-method-2021`

###### Refractory lining installation offcuts (`refractory_lining_offcut_waste`)

Include only clean refractory-brick or refractory-fibre offcuts generated during installation; do not combine removed service-contaminated refractory with this new-material offcut stream.

- Selected flow: Refractory lining installation offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated offcuts or issued-minus-installed-minus-returned mass balance by production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `eu-pef-method-2021`

##### Elementary flows

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil_to_air`)

Include direct fossil carbon dioxide from on-site combustion attributable to manufacturing or factory acceptance testing; exclude power-generation emissions represented upstream in the electricity dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from recorded fossil-fuel use and site-specific carbon content and oxidation data, or use compliant direct stack measurement; document the method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_gases_water`
- Sources: `eu-pef-method-2021`

###### Particulate matter to air, particle size unspecified (`particulate_matter_to_air`)

Include measured or calculated direct particulate releases from attributable cutting, welding, grinding and other fabrication operations after control devices; if size-resolved measurements are available, add those atomic elementary flows rather than merging them here.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Stack or workplace-exhaust measurement attributable to the production order, or documented exhaust-volume × concentration calculation after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-method-2021`

###### Nitrogen oxides to air, unspecified compartment (`nitrogen_oxides_to_air`)

Include only direct nitrogen-oxides emissions from fuel-fired manufacturing or acceptance testing and state the reporting convention, such as mass as NO2; keep the UUID empty until an exact unspecified-air identity is confirmed.

- Selected flow: Nitrogen oxides to air, unspecified compartment
- Flow property / unit: Mass / kg
- Amount rule: Compliant stack measurement or documented exhaust-volume × concentration calculation attributable to recorded fuel-fired testing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net complete equipment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-method-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared manufacturing and test operations | Avoid allocation by metering or subdividing production orders, work centres, test cells and waste streams whenever technically feasible. | `eu-pef-method-2021` |
| `allocation_causal_driver` | remaining shared electricity, fuel, water, gases and waste | When subdivision is infeasible, allocate using a documented causal driver appropriate to the exchange, such as measured machine-hours and load for electricity, burner test time and thermal input for gas, or weighed production-order mass for wastes; do not use revenue unless no physical relationship can be justified. | `eu-pef-method-2021` |
| `allocation_coproduct_disclosure` | saleable by-products and recovered materials | Record each physical co-product or waste output before any downstream treatment, disclose ownership and end-of-waste status, and document the allocation or system-expansion treatment selected by the governing study method; do not silently subtract an avoided-burden credit from foreground amounts. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `equipment_manufacturing` | material, component and packaging inputs | product-specific BOM, stores issue/return, supplier specification and weighing record | production order; component or material id; specification or grade; supplier; issued mass; returned mass; installed mass; packaging mass; date | Reconcile approved BOM to issued and returned quantities and retain supplier specifications; weigh packaging when BOM mass is unavailable | kg | each production order | complete production order from material issue through shipment | all manufacturing sites and outsourced BOM contributors in scope | Sum net issued mass by atomic material/component and normalize with `calc_normalize_reference_mass` | approved BOM revision; stores transactions; calibration record; supplier certificate; shipment record |
| `cp_electricity` | `equipment_manufacturing` | purchased electricity | revenue meter, submeter and machine/test-cell log | meter id; opening and closing reading; unit; timestamp; production order; machine or test cell; run hours; measured load; allocation driver | Prefer production-order submetering; otherwise allocate site-meter change using causal measured loads or machine-hours | kWh and MJ | continuous or each shift, aggregated per order | full fabrication, assembly, testing and packaging period | every foreground manufacturing site | Convert kWh to MJ and normalize with `calc_normalize_reference_mass`; reconcile allocated totals to site meter | meter calibration; bills; submeter export; machine log; reconciliation |
| `cp_fuels_gases_water` | `equipment_manufacturing` | natural gas, industrial oxygen, process water and combustion carbon | meter, cylinder inventory, delivery, composition and test log | flow id; opening/closing meter; delivered and returned quantity; unit; temperature; pressure; composition or purity; carbon content; test purpose; production order | Meter attributable use; otherwise reconcile inventory change and deliveries to production/test records | native m3 or kg, with declared conversion | each test or production order | full manufacturing and acceptance-test period | every site using the exchange | Convert gases to declared reference conditions; calculate attributable fossil carbon dioxide with `calc_fossil_co2`; normalize all values | calibrated meter; cylinder ledger; delivery note; gas certificate; water meter; test log; calculation sheet |
| `cp_wastes` | `equipment_manufacturing` | steel scrap and refractory installation offcuts | weighbridge, bin scale, waste transfer and production-order segregation record | waste type; composition; gross/tare/net mass; production order; contamination; destination; date; end-of-waste status | Segregate and weigh each atomic waste stream; use issued-minus-installed-minus-returned mass balance only when physical weighing is impracticable | kg | each container or production order | full manufacturing period | all foreground sites and attributable outsourced operations | Sum net waste mass by row and normalize with `calc_normalize_reference_mass` | calibrated scale; photographs or segregation audit; transfer note; mass-balance reconciliation |
| `cp_direct_emissions` | `equipment_manufacturing` | direct particulate matter and nitrogen oxides | stack or exhaust measurement and operating/test log | pollutant identity; compartment; concentration; exhaust volume or flow and duration; moisture and reference conditions; control status; fuel/test event; production order | Use jurisdiction-compliant measurement where required; otherwise use documented concentration × dry-gas-volume calculation matched to attributable operation | kg after calculation | each representative test campaign and whenever process/control changes | representative of reporting year and all declared emission routes | every foreground emission point in scope | Calculate emitted mass after controls, aggregate by atomic elementary flow, and normalize with `calc_normalize_reference_mass` | laboratory report; instrument calibration; sampling plan; operating log; calculation sheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every non-reference inventory row | normalized amount = attributable exchange amount × 1,000 kg / net complete equipment output mass for the same production-order population | attributable row amount; net equipment output mass excluding transport packaging | row amount per 1,000 kg net complete equipment | `eu-pef-method-2021` |
| `calc_bom_reconciliation` | material and component rows | net issued mass = issued mass − returned-to-store mass; reconcile net issued mass to incorporated mass + separately recorded scrap/offcuts + documented inventory change | BOM; stores issues; returns; incorporated mass; waste mass; inventory change | reconciled atomic material input and mass-balance difference | `eu-pef-method-2021` |
| `calc_fossil_co2` | `carbon_dioxide_fossil_to_air` | Use the documented site-specific carbon-balance or compliant measurement method; if calculated, emitted fossil CO2 = attributable fuel quantity × measured carbon-content basis × oxidation fraction × molecular-mass conversion, with all units and reference conditions explicit | attributable fossil-fuel quantity; carbon content; oxidation fraction; density or volume conversion where needed | kg fossil carbon dioxide per 1,000 kg net equipment | `eu-pef-method-2021` |
| `calc_direct_emission_mass` | particulate matter and nitrogen oxides | emitted mass = matched exhaust concentration × dry exhaust-gas volume after control, corrected to the declared reference conditions and reporting convention | concentration; flow rate or total volume; duration; moisture/reference corrections; control status | kg named elementary flow per 1,000 kg net equipment | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | The declared product configuration and CPC 43420 semantic boundary must be supported by drawings, specifications, rated-duty data and the acceptance-test record; separately supplied parts and excluded products must not be merged into the reference output. | approved specification; drawing list; acceptance certificate; product mass record |
| `dq_bom_completeness` | material and component inputs | Use the final product-specific BOM revision and reconcile issued, returned, incorporated and wasted mass; disclose omitted minor items and outsourced assemblies individually. | BOM revision history; stores ledger; reconciliation; supplier documents |
| `dq_temporal_scope` | all foreground amounts | Collect a complete production order or a production-weighted set of orders representative of the reporting year; disclose order count, atypical tests, rework and shutdown periods. | order list; timestamps; production summary; representativeness assessment |
| `dq_geography_technology` | upstream links and foreground sites | Match upstream datasets and foreground records to declared manufacturing geography, alloy/material grade, heating technology, electricity supply and gas reference conditions; disclose every proxy. | dataset metadata; supplier certificate; site and meter metadata; proxy register |
| `dq_measurement_quality` | meters, scales and emission measurements | Instruments must be within their calibration or verification period; estimated or allocated data must identify the method, driver, uncertainty and affected share. | calibration certificates; QA logs; allocation worksheet; uncertainty statement |
| `dq_completeness_review` | whole inventory | Review all known material, energy, water, gas, waste and direct-emission routes; record exclusions and data gaps without replacing atomic flows with umbrella labels. | completeness checklist; process walk-through; material/energy balance; unresolved-flow register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow | The `reference_product` output must equal exactly 1,000 kg after normalization, use the confirmed mass property and unit group, exclude transport packaging mass, and carry every required qualifier. | `un-cpc-3-0-structure-2025`; `eu-pef-method-2021` |
| `validate_atomic_inventory` | process inventory | Every selected flow must be one atomic product, waste or elementary exchange with direction, flow type, property, unit, amount rule, basis, evidence and collection protocol aligned; unresolved UUIDs must remain empty and appear in manifest review metadata. | `eu-pef-method-2021` |
| `validate_bom_balance` | BOM and wastes | For each material family, net issued mass must reconcile to incorporated mass, separately recorded waste/offcuts and documented inventory change within a disclosed tolerance supported by measurement uncertainty. | `eu-pef-method-2021` |
| `validate_conditional_routes` | technology- and design-specific rows | Each conditional row must be supported by the declared equipment design or factory operation; when absent, record it as not applicable with evidence rather than zero without explanation. | `us-doe-process-heating-sourcebook-2007` |
| `validate_energy_emission_boundary` | electricity, fuels and direct emissions | Direct-emission rows may contain only releases from foreground combustion or fabrication; emissions already represented in upstream electricity, fuel, material or component datasets must not be duplicated. | `eu-pef-method-2021` |
| `validate_data_quality` | published dataset | Confirm product-specific BOM and manufacturing data, temporal/geographical/technological representativeness, meter and scale calibration, allocation reconciliation, explicit exclusions, data gaps and proxy disclosure before release. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-factory-gate foreground dataset for complete industrial or laboratory process-heating equipment |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for equipment production in a downstream process or lifecycle model when the required qualifiers and system boundary match |
| allowed_use | Product footprinting, capital-equipment inventory, procurement analysis and downstream lifecycle modelling for equipment with equivalent function, heating technology, rated duty, configuration, manufacturing geography and factory-gate state |
| excluded_use | Unqualified comparison of different furnace/oven functions or technology classes; use-stage energy modelling without a declared duty profile; separately supplied burners or parts; non-electric bakery ovens; domestic heating/cooking equipment; customer-site installation or end-of-life |
| required_metadata | PCR id and version state; product model and configuration; function and equipment subtype; heating technology and energy source; rated power/thermal input and capacity; maximum temperature; chamber/work-zone dimensions; atmosphere/vacuum/pressure; included auxiliaries; net mass; packaging; acceptance test; sites and geography; reference year; order population; service life and duty profile; allocation; exclusions; proxies and unresolved flows |
| required_quality_disclosure | BOM reconciliation and completeness; primary-data share; meter/scale/emission-measurement methods and calibration; temporal, geographical and technological representativeness; allocation drivers; upstream dataset choices; direct-emission method; packaging treatment; uncertainty; exclusions and data gaps |
| update_trigger | Product redesign changing mass, lining, insulation, controls, heating technology or auxiliaries; supplier/material-grade change; manufacturing-site or energy-supply change; revised test programme; change in allocation or emission controls; data older than the declared representativeness period; confirmed replacement for any unresolved UUID or range evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Structure*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; verified SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Exact CPC 43420 classification identity and stated exclusion of non-electric bakery ovens |
| `us-doe-process-heating-sourcebook-2007` | Official guidance (`official_guidance`) | U.S. Department of Energy, Office of Energy Efficiency and Renewable Energy, *Improving Process Heating System Performance: A Sourcebook for Industry*, Second Edition, 2007, https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/process_heating_sourcebook2.pdf (retrieved 2026-09-05) | Original-text-verified product-function and heating-technology boundary; fuel- and electric-based equipment distinctions; high-temperature alloy and integrated-system qualifiers |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, consolidated English text, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 (retrieved 2026-09-05) | Original-text-verified product-specific BOM and company-specific manufacturing data requirements; foreground records, allocation hierarchy, completeness, cut-off disclosure, data quality and normalization rules |
