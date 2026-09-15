---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.medical-surgical-or-laboratory-sterilizers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Medical, surgical or laboratory sterilizers

## 1. Scope and Applicability

This PCR covers cradle-to-gate production of finished sterilizers designed for medical, surgical or laboratory loads, including steam, dry-heat and low-temperature sterilizers. It includes upstream production of bill-of-material inputs and purchased components, foreground fabrication and assembly, factory testing and cleaning, and shipping packaging up to the manufacturer factory gate.

The representative route is a configurable laboratory steam sterilizer with a stainless-steel pressure chamber, electronic controls and optional integral steam generation. For another sterilization technology, declare the technology and instantiate its technology-specific BOM, process inputs, wastes and test requirements as separate atomic exchanges without duplicating the common rules.

Use-phase cycles, customer installation, distribution after the factory gate, maintenance, replacement consumables and end-of-life are excluded. Washer-disinfectors without a sterilization function, household appliances, and industrial food or pharmaceutical treatment equipment outside the medical, surgical or laboratory boundary are excluded. Detachable accessories and loading equipment are included only when shipped with the declared product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.medical-surgical-or-laboratory-sterilizers |
| classification_refs | CPC 3.0: 48140, exact contextual reference |
| covered_products | Finished medical, surgical and laboratory sterilizers using steam, dry heat or low-temperature sterilizing agents |
| excluded_products | Washer-disinfectors without sterilization; household sterilizers; sterilization services; separately sold use consumables; non-medical industrial thermal-treatment equipment |
| representative_product | Configurable laboratory steam sterilizer with stainless-steel chamber, electronic controls and optional integral steam generator |
| production_route | BOM-based component supply, on-site metal fabrication where applicable, assembly, factory functional and safety testing, cleaning, and shipping packaging |
| market_state | Finished, tested and packaged capital equipment at the manufacturer factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a finished medical, surgical or laboratory sterilizer ready to leave the manufacturer factory gate |
| How much | 1 kg net finished sterilizer, excluding detachable shipping packaging |
| How well | Conforming to the declared intended use, sterilization technology, validated factory test plan and applicable market requirements |
| How long or cycle | One factory-gate product delivery; design life and rated cycle capability are metadata and are not amortized into this reference flow |
| reference_flow_link | Reference product output row `finished_sterilizer` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished sterilizer |
| Reference product flow | Medical, surgical or laboratory sterilizer (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sterilization technology and agent; intended application and validated loads; model and usable chamber volume; pressure-vessel and principal materials; integrated or external utility generation; installed options and shipped accessories; net mass; factory geography and year; packaging inclusion and reuse basis |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_product_mass` | reference product and BOM normalization | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or reconcile the net finished sterilizer without detachable shipping packaging; normalize amounts to 1 kg net finished product. |
| `packaging_separation` | shipping packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging exchange separately and exclude it from net product mass; reused pallets use net consumption per shipment after documented turns. |
| `electricity_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter records in kWh and convert using 1 kWh = 3.6 MJ; do not mix factory and customer-use electricity. |
| `water_mass_conversion` | process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; when only volume is available, use measured or supplier-declared density and retain the conversion record. |

## 5. System Boundary

The cradle-to-gate system includes raw-material extraction and component production through upstream datasets, inbound component supply, manufacturer-controlled fabrication, assembly, factory testing, cleaning and final packaging. The verified Getinge PEP uses a BOM-based material model and separates supplier production from factory and final packaging; the FDA record supports stainless pressure-vessel construction for the representative steam route.

Distribution after the factory gate, operation, on-site utilities consumed by customers, service, maintenance and end-of-life are outside this PCR. Factory test cycles remain inside the boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, components and packaging received at the reporting factory gate, with linked upstream cradle-to-supplier datasets |
| starting_condition_role | Foreground entry condition for fabrication, assembly, testing, cleaning and packaging |
| product_classification_scope | Finished equipment that performs sterilization for medical, surgical or laboratory loads |
| recursive_input_rule | If an input is a complete or near-complete sterilizer, stop recursion at that transfer and link a separately documented upstream sterilizer dataset. |
| upstream_dataset_requirement | Prefer supplier-specific datasets for metals, electronics, cables, plastics and packaging; otherwise use representative background datasets and disclose substitutions. |
| disclosure | Declare factory geography/year, model, net mass, technology, included fabrication, supplier-data coverage, test boundary, packaging, recycled content and allocation. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | product_system | Include upstream BOM/component production, manufacturer operations, factory tests and final packaging through the factory gate; exclude downstream distribution, use, service and end-of-life. | `getinge-lancer-lss-pep-2025` |
| `boundary_route_disclosure` | technology_route | Declare technology, intended load, chamber capacity, integrated utilities and included fabrication because configuration changes BOM and factory requirements. | `getinge-lancer-lss-pep-2025`; `fda-getinge-k122071-2013` |
| `boundary_test_utilities` | factory_testing | Include utilities consumed by factory acceptance, safety and leak tests; exclude customer sterilization cycles. | `fda-getinge-k122071-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sterilizer_manufacturing` | Sterilizer fabrication, assembly, factory testing and packaging | `required` | Always included; conditional exchanges apply only when the stated operation occurs inside the foreground boundary. | foreground production | 1 kg net finished sterilizer |

### Process: Sterilizer fabrication, assembly, factory testing and packaging (`sterilizer_manufacturing`)

#### Inputs

##### Product flows

###### Stainless-steel sheet for chamber and casing (`stainless_steel_sheet`)

Record stainless sheet entering manufacturer-controlled forming or assembly. Use the actual alloy and thickness; the representative vessel uses a 316-family grade.

- Selected flow: Stainless-steel sheet (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: purchased mass issued to the product, including measured fabrication scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `getinge-lancer-lss-pep-2025`; `fda-getinge-k122071-2013`

###### Aluminium sheet (`aluminium_sheet`)

Record aluminium sheet entering product-specific fabrication or assembly, retaining the alloy, temper and thickness in foreground records.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: purchased mass issued to the product, including measured aluminium scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `getinge-lancer-lss-pep-2025`

###### ABS granulate for in-house moulding (`abs_granulate`)

Include only when ABS parts are moulded in the foreground factory; purchased parts of another resin are separate instantiated product rows.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass / kg
- Amount rule: purchased ABS issued to in-house moulding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished sterilizer; zero with documented non-applicability when absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `getinge-lancer-lss-pep-2025`

###### Printed wire board (`printed_wire_board`)

Record the installed printed wire boards for the declared control-system configuration by measured or BOM mass.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: BOM mass installed in the declared control configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `getinge-lancer-lss-pep-2025`

###### Low-voltage cable (`low_voltage_cable`)

Record installed low-voltage cable length from the approved cut list, preserving conductor and insulation specifications.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: installed cut-list or BOM length; retain conductor and insulation specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cable_length`
- Sources: `getinge-lancer-lss-pep-2025`

###### Purchased electricity (`electricity`)

Record purchased electrical energy attributable to included fabrication, assembly, factory testing and packaging operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or causally allocated factory electricity converted from kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_electricity`
- Sources: `getinge-lancer-lss-pep-2025`

###### Process water (`process_water`)

Record process water consumed in included fabrication, cleaning and factory testing, with source, quality and conversion basis retained.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered water for included fabrication, cleaning and factory testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_water`
- Sources: `getinge-lancer-lss-pep-2025`

###### Industrial oxygen for on-site fabrication (`industrial_oxygen`)

Include industrial oxygen only when cutting, brazing or another oxygen-consuming fabrication operation occurs inside the foreground boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: purchased or metered oxygen used by an included cutting or brazing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished sterilizer; zero with documented non-applicability when absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources:

###### Carbon dioxide shielding gas for on-site welding (`carbon_dioxide_shielding_gas`)

Include carbon dioxide only when it is consumed as shielding gas by welding inside the foreground boundary.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: purchased cylinder or bulk mass consumed as welding shielding gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished sterilizer; zero with documented non-applicability when absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources:

###### Wooden shipping pallet (`wooden_pallet`)

Record wooden pallet mass shipped with the product and account explicitly for documented reuse and losses.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: pallet dry mass divided by documented reuse turns, adjusted for losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`
- Sources: `getinge-lancer-lss-pep-2025`

###### Corrugated board shipping boxes (`corrugated_board_boxes`)

Record the mass of corrugated board boxes shipped with the finished sterilizer under the declared packaging configuration.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured or specification-derived box mass shipped with the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `getinge-lancer-lss-pep-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished sterilizer at factory gate (`finished_sterilizer`)

The reference product is the net mass of a complete sterilizer released at the factory gate, excluding removable transport packaging.

- Selected flow: Medical, surgical or laboratory sterilizer (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net finished sterilizer by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net finished sterilizer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol:
- Sources: `un-cpc-3-0-structure-2025`; `getinge-lancer-lss-pep-2025`; `fda-getinge-k122071-2013`

##### Waste flows

###### 316-family stainless-steel fabrication scrap (`stainless_steel_scrap`)

Record segregated 316-family stainless-steel scrap leaving included foreground fabrication, without an avoided-primary-metal credit unless the background model requires it.

- Selected flow: stainless steel scrap (316, from external supply) `f20af980-11c6-4a6b-8dbc-4aa7683bfd98`
- Flow property / unit: Mass / kg
- Amount rule: weighed segregated scrap dispatched for recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished sterilizer; zero with documented non-applicability when fabrication is off-site
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_waste`
- Sources: `fda-getinge-k122071-2013`

###### Aluminium fabrication scrap (`aluminium_scrap`)

Record segregated aluminium scrap leaving included foreground fabrication and retain its measured destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: weighed segregated aluminium scrap dispatched from the factory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished sterilizer; zero with documented non-applicability when fabrication is off-site
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_waste`
- Sources: `getinge-lancer-lss-pep-2025`

###### Wastewater from equipment cleaning (`cleaning_wastewater`)

Record wastewater discharged from included equipment-cleaning operations, reconciled to process-water input and separately measured losses.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or water-balance result for included cleaning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished sterilizer; zero with documented non-applicability when no wet cleaning discharge occurs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `getinge-lancer-lss-pep-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_factory_processes | Subdivide product-specific fabrication, assembly and tests before allocating shared burdens. |  |
| `allocation_shared_utilities` | shared_electricity_water_and_gases | Use dedicated records first; otherwise allocate by a causal driver such as machine time, test-cycle duration or line throughput. Use mass only when no better driver exists and disclose it. |  |
| `allocation_scrap` | metal_scrap_and_recovery | Report scrap mass and route at the factory boundary. Do not credit avoided primary metal unless the chosen background model explicitly applies and discloses that convention. |  |
| `allocation_reusable_packaging` | wooden_pallet | Divide pallet mass by documented expected turns adjusted for losses; if turns are unknown, assign the full pallet to the shipment. | `getinge-lancer-lss-pep-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass` | `sterilizer_manufacturing` | mass-based BOM inputs and finished product | approved BOM and issue record | model; revision; material; purchased, issued and installed mass; net product mass; units | reconcile BOM, purchasing, issue records and product weighing | kg | each revision and batch | representative year | factory and declared suppliers | atomic mass divided by total net finished mass | approved BOM, invoices, weigh tickets, calibration |
| `cp_cable_length` | `sterilizer_manufacturing` | low-voltage cable | cable cut list and BOM | specification; conductor; insulation; voltage; installed length; units | reconcile cut list and installed length | m | each revision and batch | representative year | factory | installed length divided by net finished mass | approved cut list and issue record |
| `cp_factory_electricity` | `sterilizer_manufacturing` | electricity | meter and production record | meter readings; kWh; area; test cycles; units; net mass | dedicated meter or reconciled site meter with causal allocation | kWh | monthly | one complete representative production year | included factory operations | subtract excluded loads, allocate, convert to MJ and normalize | calibration, invoices, allocation reconciliation |
| `cp_factory_water` | `sterilizer_manufacturing` | process water | meter, batch and test record | volume or mass; source; quality; operation; density; net mass | meter or reconcile invoices and batch records | kg or m3 | monthly and test campaign | one complete representative production year | included factory operations | allocate included water, convert to mass and normalize | calibration, invoices, batch logs, density evidence |
| `cp_process_gases` | `sterilizer_manufacturing` | oxygen and shielding carbon dioxide | cylinder/bulk and job record | gas; purity; delivery; inventory change; job; reference conditions | reconcile supply and inventory change to jobs | kg or m3 | each delivery and batch | representative year | on-site fabrication | attributable consumption divided by net product mass | certificates, invoices, cylinder logs |
| `cp_packaging_mass` | `sterilizer_manufacturing` | pallet and corrugated boxes | specification and dispatch record | identity; dry mass; model; units; turns; loss | weigh or verified packaging specification | kg | each design revision and sample | representative year | final packaging | net consumed mass divided by net product mass | drawing, calibration, dispatch and reuse evidence |
| `cp_factory_waste` | `sterilizer_manufacturing` | metal scrap | segregated dispatch record | alloy; gross/tare mass; destination; batch; net mass | weighbridge or container weights reconciled to transfer documents | kg | each dispatch | one complete representative production year | factory | included atomic waste divided by net product mass | weigh tickets, transfer records, segregation |
| `cp_cleaning_wastewater` | `sterilizer_manufacturing` | cleaning wastewater | discharge and cleaning record | water input; discharge; retained water; losses; chemistry; route; net mass | meter or calculated water balance | kg or m3 | each campaign, monthly aggregate | one complete representative production year | cleaning operations | reconcile wastewater to water input and normalize | calibration, balance, analysis, treatment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | mass-based rows | normalized amount = included row mass / total net finished sterilizer mass | row mass; net product mass | kg/kg net product | `getinge-lancer-lss-pep-2025` |
| `calc_cable_normalization` | `low_voltage_cable` | installed cable length / total net finished sterilizer mass | cable length; net mass | m/kg net product | `getinge-lancer-lss-pep-2025` |
| `calc_electricity` | `electricity` | included kWh × 3.6 / total net finished sterilizer mass | kWh; net mass | MJ/kg net product | `getinge-lancer-lss-pep-2025` |
| `calc_reusable_pallet` | `wooden_pallet` | dry mass × (1 + loss allowance) / expected turns / net product mass | pallet mass; turns; loss; net mass | kg/kg net product | `getinge-lancer-lss-pep-2025` |
| `calc_cleaning_wastewater` | `cleaning_wastewater` | water input − retained water − separately measured losses | water records; net mass | kg/kg net product | `getinge-lancer-lss-pep-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Identify model, technology, intended loads, chamber volume, utilities, options and conformity basis. | technical file, conformity declaration, model BOM |
| `dq_bom_completeness` | material and component rows | Reconcile all materially significant net product mass to atomic BOM inputs; explain every excluded or unquantified remainder with named rows, never an umbrella flow. | BOM reconciliation and completeness review |
| `dq_temporal` | utilities and wastes | Use one complete representative production year or justify a shorter campaign that captures production and test variability. | dated meters, production and dispatch records |
| `dq_supplier_coverage` | upstream datasets | Report supplier-specific mass coverage and every generic background substitution. | supplier data register and dataset mapping |
| `dq_mass_balance` | materials, product and wastes | Reconcile issued material to installed product, scrap, returned stock and losses without counting supplier scrap twice. | batch material balance |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference_product | Confirm output is exactly 1 kg net finished sterilizer and detachable shipping packaging is excluded. | `getinge-lancer-lss-pep-2025` |
| `validation_required_qualifiers` | dataset_metadata | Reject a package missing technology, intended load, model, chamber volume, utility configuration, net mass, factory geography/year or packaging basis. | `getinge-lancer-lss-pep-2025`; `fda-getinge-k122071-2013` |
| `validation_atomic_inventory` | process_inventory | Confirm each row is one physical, chemical, waste or energy exchange; reject umbrellas and route selectors. |  |
| `validation_uuid_and_unit` | tiangong_references | Verify public state 100, flow type, baseName, property and unit group for UUID rows; register every blank UUID in manifest unresolved metadata. |  |
| `validation_boundary` | product_system | Confirm upstream BOM production and factory tests are included and customer operation, downstream distribution, service and end-of-life are excluded. | `getinge-lancer-lss-pep-2025` |
| `validation_balance` | mass_and_water_balance | Reconcile net product, issued materials, segregated scrap, packaging separation and cleaning-water balance; investigate gaps. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review and publication |
| downstream_use | Cradle-to-gate inventories for procurement, product LCAs and lifecycle models that add downstream stages separately |
| allowed_use | Declared configurations whose technology, model, chamber volume, BOM coverage, factory geography/year and packaging basis match or are transparently adapted |
| excluded_use | Comparing sterilization-cycle performance, claiming use-phase impacts, representing washer-disinfectors, or applying to an undisclosed materially different technology |
| required_metadata | PCR/version; model; technology/agent; intended loads; chamber volume; utilities; options/accessories; net mass; factory geography/year; supplier coverage; packaging; allocation |
| required_quality_disclosure | BOM coverage; temporal coverage; metering/allocation; unresolved UUIDs; background substitutions; recycled content; scrap routes; water balance; verification |
| update_trigger | Model or technology change; BOM/chamber redesign; factory or supplier change; utility change; packaging redesign; new exact reference UUID; stale foreground period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (hash-verified original; retrieved 2026-09-06) | Official CPC 48140 identity |
| `getinge-lancer-lss-pep-2025` | `literature` | Getinge, Product Environmental Profile: Getinge Lancer LSS Laboratory Steam Sterilizer, DMS-0011032, 2025, https://www.getinge.com/dam/life-science/documents/english/getinge-lancer-lss-pep-107396-en.pdf (original PDF verified; retrieved 2026-09-06) | Representative product, BOM-based cradle-to-gate model, material/component families, packaging, factory energy and water |
| `fda-getinge-k122071-2013` | `official_guidance` | U.S. FDA, 510(k) Summary K122071, Getinge 400HC-E/500HC-E Series Steam Sterilizer, 2013, https://www.accessdata.fda.gov/cdrh_docs/pdf12/k122071.pdf (original PDF verified; retrieved 2026-09-06) | Intended use, steam principle, stainless pressure vessel and factory test context |
| `samr-sterilizer-terminology` | `official_guidance` | State Administration for Market Regulation, national-standard record for safety requirements for sterilizers and washer-disinfectors used to treat medical materials, https://std.samr.gov.cn/gb/search/gbDetailed?id=bThFnEWwh9Q%3D&mode=p (official page verified; retrieved 2026-09-06) | Professional Chinese term 灭菌器 and washer-disinfector distinction |
