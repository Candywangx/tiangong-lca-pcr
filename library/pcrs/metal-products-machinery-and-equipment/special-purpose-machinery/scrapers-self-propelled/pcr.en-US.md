---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.scrapers-self-propelled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Scrapers, self-propelled

## 1. Scope and Applicability

This PCR covers a new, accepted, complete self-propelled scraper at the factory gate. The machine integrates its own traction and a scraper bowl for cutting, loading, carrying and discharging earth or similar mineral material. Record the actual tractor/scraper configuration, installed engine count, bowl type and acceptance fill state. The Caterpillar 657 brochure demonstrates a wheel tractor-scraper with tractor and scraper engines, a bowl, tires and hydraulic systems; it is an example of the boundary, not a category-wide bill of materials or mass value (`cat-657-2020`).

This is a cradle-to-factory-gate foreground data rule. It includes purchased material and component upstream datasets, on-site fabrication when performed, final assembly, and fuel and emissions from factory testing. It excludes distribution, operation at the customer's jobsite, maintenance and end of life. Such later stages require separately declared scenarios if a full-life-cycle result is prepared (`ec-pef-method-2021`). The United Nations CPC 3.0 structure lists self-propelled scrapers separately from dozers, graders, rollers, loaders, excavators and off-highway dumpers (`un-cpc-3-2025`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.scrapers-self-propelled |
| classification_refs | CPC 3.0: 44423, Scrapers, self-propelled (`un-cpc-3-2025`) |
| covered_products | Complete new self-propelled wheel tractor-scrapers with an integral scraping/loading bowl, including disclosed single- or twin-engine configurations. |
| excluded_products | Towed scrapers; graders; dozers; excavators; front-end loaders; dumpers; detachable blades or bowls sold separately; component-only assemblies; used or refurbished machines. |
| representative_product | One accepted complete self-propelled scraper with declared bowl and propulsion configuration (`cat-657-2020`). |
| production_route | Purchased components, conditional on-site steel fabrication, final assembly, and factory functional testing. |
| market_state | New complete machine accepted at the factory gate, without transport packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an accepted self-propelled machine able to scrape/load, carry and discharge earth or mineral material. |
| How much | One complete machine of the declared configuration; its measured accepted net mass is M kg. |
| How well | Record rated bowl capacity, payload or cut width, installed engine count and applicable acceptance test; no common performance value is imposed (`cat-657-2020`). |
| How long or cycle | One factory-gate delivery; service life and operating duty cycle are outside this declared result. |
| reference_flow_link | `finished_scraper` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Scrapers, self-propelled `42b7c34e-7d9d-4e3f-845b-0cd920105c35` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; serial number; bowl and propulsion configuration; installed engine and tire count; acceptance fill state; factory location and period; measured net mass M |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |

The mass record excludes shipping packaging, operator and test payload, and records the fuel and service-fluid fill state. A brochure operating weight that includes full fuel is not a universal accepted net mass (`cat-657-2020`). Every input and waste exchange is collected per one accepted finished scraper of the same configuration; do not substitute an unmeasured catalog weight.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel and discrete machine components enter the reporting production site; declare whether the steel bowl is made on site or purchased. |
| starting_condition_role | Physical starting condition for the foreground manufacturing boundary. |
| product_classification_scope | Finished self-propelled scraper as CPC 44423; upstream parts keep their own product identities. |
| recursive_input_rule | A purchased complete scraper entering for finishing remains a separately disclosed input; do not recursively replace it with this PCR's own output. |
| upstream_dataset_requirement | Link each purchased material/component and fuel to a suitable upstream dataset with matching material, technology, geography and product state. |
| disclosure | Report site, period, configuration, purchased-versus-fabricated bowl route, included tests, excluded stages and upstream data gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | manufacturing boundary | Include manufacturing and assembly from component entry through accepted finished machine leaving the site; include manufacturing waste and internal movements where material (`ec-pef-method-2021`). | `ec-pef-method-2021` |
| `boundary_route` | fabrication route | Include on-site cutting, forming and welding only when performed; otherwise record the purchased fabricated bowl as its own upstream product. Do not count both paths for the same bowl (`epa-clean-lines-metal-fabrication-2007`; `cat-657-2020`). | `epa-clean-lines-metal-fabrication-2007`; `cat-657-2020` |
| `boundary_test` | factory test | Include fuel and direct exhaust from factory tests before acceptance; exclude customer use and downstream stages (`ec-pef-method-2021`). | `ec-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | On-site steel fabrication | `conditional` | Include when steel cutting, forming or welding of scraper structural parts occurs at the reporting site. | Foreground fabrication and scrap generation. | per one accepted finished scraper |
| `assembly_test` | Final assembly and factory test | `required` | All covered machines undergo final assembly and acceptance; include actual factory test route. | Foreground assembly, installed components, fuels, direct test emissions and finished output. | per one accepted finished scraper |

### Process: On-site steel fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Steel plate entering cutting and forming (`plate`)

When steel structural parts are cut or formed on site; otherwise record the purchased fabricated bowl at assembly.

- Selected flow: Hot-rolled carbon steel plate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual kg exchange per one accepted finished scraper using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-clean-lines-metal-fabrication-2007`


###### Steel welding wire consumed in fabrication (`wire`)

When arc welding is performed on site.

- Selected flow: Steel welding wire (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual kg exchange per one accepted finished scraper using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-clean-lines-metal-fabrication-2007`


###### Grid electricity for metal fabrication (`power`)

When fabrication is performed on site; include metered cutting, forming and welding electricity.

- Selected flow: Grid electricity, medium voltage (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Collect the actual kWh exchange per one accepted finished scraper using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ec-pef-method-2021`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Carbon steel cutting scrap leaving fabrication (`scrap`)

When carbon steel offcuts or swarf leave the fabrication process; report their documented destination.

- Selected flow: Carbon steel cutting scrap (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual kg exchange per one accepted finished scraper using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-clean-lines-metal-fabrication-2007`


##### Elementary flows

### Process: Final assembly and factory test (`assembly_test`)

#### Inputs

##### Product flows

###### Purchased fabricated scraper bowl entering assembly (`purchased_bowl`)

Only when the bowl is purchased as a complete fabricated component; exclude the same bowl from on-site plate and welding inputs.

- Selected flow: Fabricated steel scraper bowl (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual kg exchange per one accepted finished scraper using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `cat-657-2020`


###### Diesel engine installed in the scraper (`engine`)

For each installed engine; record actual engine count and mass for the accepted configuration, including twin-engine variants.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record the installed diesel engine count per one accepted finished scraper using cp_engine_count.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_engine_count`
- Sources: `cat-657-2020`


###### Pneumatic off-road tire installed (`tire`)

For each installed tire in a wheeled scraper configuration; record actual tire count and mass.

- Selected flow: Pneumatic off-road rubber tire (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual kg exchange per one accepted finished scraper using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `cat-657-2020`


###### Hydraulic oil charged into accepted machine (`hydraulic_oil`)

Only for a mineral-oil hydraulic system and the acceptance fill; another actual fluid requires its own identified row.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual kg exchange per one accepted finished scraper using cp_fluids.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fluids`
- Sources: `cat-657-2020`


###### Diesel consumed in factory functional test (`test_diesel`)

When the installed diesel engine is run before factory gate; count fuel actually combusted in tests, not retained acceptance fill, and record the actual fuel grade.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual kg exchange per one accepted finished scraper using cp_test_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_fuel`
- Sources: `cat-657-2020`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete self-propelled scraper (`finished_scraper`)

Exactly one accepted complete machine of the declared configuration; amount is measured net mass M kg.

- Selected flow: Scrapers, self-propelled `42b7c34e-7d9d-4e3f-845b-0cd920105c35`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`; `cat-657-2020`


##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from factory diesel test (`test_co2`)

When diesel is combusted in on-site testing; use measured exhaust or a documented fuel carbon-balance calculation in the data package.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual kg exchange per one accepted finished scraper using cp_test_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_emission`
- Sources: `ec-pef-method-2021`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | shared fabrication or assembly lines | First separate directly metered processes and batches; assign measured material, electricity, fuel, scrap and emission records to the represented machine/configuration where possible. | `ec-pef-method-2021` |
| `alloc_shared` | unavoidable common site inputs | If subdivision is impossible, use a documented causal physical driver such as metered process hours or component mass; disclose the driver, denominators and sensitivity. | `ec-pef-method-2021` |
| `alloc_scrap` | steel scrap | Record carbon steel cutting scrap and its real destination separately; do not silently subtract sale receipts or assumed recycling credits from gross material input. | `epa-clean-lines-metal-fabrication-2007`; `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `assembly_test` | accepted machine mass | calibrated weighing and acceptance record | model; configuration; serial number; accepted net mass M; fuel and fluid fill state | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted machine | declared production period | reporting site | accepted net mass per machine | calibration and signed acceptance record |
| `cp_material` | `fabrication` | plate and wire input | issue, purchase and return records | material grade; kg issued; kg returned; machine or batch id | Reconcile material issues and returns to the actual scraper structural fabrication batch. | kg | each fabrication batch | declared production period | reporting site | per one accepted finished machine | stock ledger and batch traveler |
| `cp_energy` | `fabrication` | grid electricity | submeter and production log | kWh; meter id; machine hours; configuration | Read submeter for fabrication; if shared, apply the disclosed physical allocation driver. | kWh | each batch or shift | declared production period | reporting site | per one accepted finished machine | meter and allocation record |
| `cp_waste` | `fabrication` | carbon steel scrap | weighed waste dispatch | kg; grade; destination; batch id | Weigh carbon steel offcuts and swarf separately from non-steel waste; record destination. | kg | each dispatch | declared production period | reporting site | per one accepted finished machine | weigh ticket and transfer record |
| `cp_components` | `assembly_test` | installed components | bill of materials and supplier receipt | component identity; installed count; net kg; serial number | Reconcile actual installed bowl and tires to the accepted configuration and supplier receipts. | kg | each accepted machine | declared production period | reporting site | per one accepted finished machine | bill of materials and receipt |
| `cp_engine_count` | `assembly_test` | installed diesel engine count | engine serial and assembly record | engine model; serial number; installed count; net kg for reconciliation | Count the diesel engines actually installed in the accepted machine and reconcile purchase and assembly records. | Item(s) | each accepted machine | declared production period | reporting site | per one accepted finished machine | engine receipt and signed assembly record |
| `cp_fluids` | `assembly_test` | hydraulic oil charge | fill and inventory log | oil grade; kg dispensed; kg recovered; fill state | Reconcile oil dispensed into the accepted hydraulic system with recovered or drained oil. | kg | each accepted machine | declared production period | reporting site | per one accepted finished machine | fill log and purchase specification |
| `cp_test_fuel` | `assembly_test` | diesel combusted in test | fuel meter and test log | kg before; kg after; fuel grade; test id | Measure diesel actually combusted in factory test, separating fuel retained at acceptance. | kg | each factory test | declared production period | reporting site | per one accepted finished machine | calibrated meter and test report |
| `cp_test_emission` | `assembly_test` | fossil CO2 to air | exhaust measurement or carbon-balance worksheet | measured kg CO2 or fuel kg and documented carbon factor; test id | Use measured test exhaust when available; otherwise calculate from the recorded fuel carbon balance and disclose factors in the data package. | kg | each factory test | declared production period | reporting site | per one accepted finished machine | measurement report or auditable balance |

### Calculation Rules

No numerical machine mass or cross-product average is supplied by this PCR. Dataset producers may calculate site-specific allocations from the protocols above, preserving the per-machine denominator and documenting each physical driver.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | reference and components | Match model, serial number, bowl route, engines, tires and fill state across M and all inventory rows. | acceptance record and bill of materials |
| `dq_temporal` | all foreground flows | Use the declared production period and site, and identify any noncontemporaneous supplier data. | dated records and supplier metadata (`ec-pef-method-2021`) |
| `dq_mass_balance` | material and waste | Reconcile steel issued, steel retained in the machine and separately weighed steel scrap; explain unresolved differences. | stock ledger, bill of materials and weigh tickets (`epa-clean-lines-metal-fabrication-2007`) |
| `dq_no_default_weight` | reference mass | Do not replace measured M with a model brochure operating weight or a different fill state. | calibrated weighing record (`cat-657-2020`) |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | reference product | Require the finished scraper UUID, exact machine configuration and measured M kg to agree with the accepted machine; no component-only flow may replace the output. | `un-cpc-3-2025`; `cat-657-2020` |
| `val_basis` | all inventory rows | Require one accepted finished scraper as the denominator for every material, energy, waste and test emission amount; test fuel and retained fuel are separate. | `ec-pef-method-2021` |
| `val_route` | fabrication and purchased bowl | Require route evidence and prohibit counting the same bowl through both on-site steel fabrication and a purchased complete bowl. | `epa-clean-lines-metal-fabrication-2007`; `cat-657-2020` |
| `val_gaps` | unresolved identity and ranges | Disclose unresolved flow UUIDs and missing independent range evidence; do not substitute proxy UUIDs or model-specific brochure values. | `ec-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Primary foreground data package for manufacturing one accepted new self-propelled scraper. |
| downstream_use | Publish verified process and lifecyclemodel projections; may serve as a secondary or background dataset after review. |
| allowed_use | Cradle-to-factory-gate comparison only when configuration, boundary, mass and data quality are harmonized. |
| excluded_use | Unqualified service-life, earthmoving productivity, or operational fuel comparison. |
| required_metadata | model; serial/configuration; site; period; M and fill state; bowl route; test route; allocation drivers; upstream datasets |
| required_quality_disclosure | measured and estimated records; source geography/technology; missing UUIDs; unresolved empirical ranges; mass-balance residuals; exclusions |
| update_trigger | changed machine configuration, site route, component supply, fuel/energy mix or material foreground records |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-26) | official classification identity only |
| `cat-657-2020` | `handbook` | 657 WHEEL TRACTOR-SCRAPER, Caterpillar AEXQ2604-00, https://s7d2.scene7.com/is/content/Caterpillar/CM20200825-44b60-322ae (retrieved 2026-09-26) | complete-machine boundary, components and model-specific weight caveat |
| `epa-clean-lines-metal-fabrication-2007` | `official_guidance` | Clean Lines: Strategies for Reducing Your Environmental Footprint — Metal Fabrication Operations, U.S. EPA, https://www.epa.gov/sites/default/files/2015-03/documents/fabrication.pdf (retrieved 2026-09-26) | cutting/welding process and scrap/fluid inventory |
| `ec-pef-method-2021` | `official_guidance` | Annex I. Product Environmental Footprint Method, European Commission 2021, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (retrieved 2026-09-26) | functional reference, stage boundary, allocation hierarchy and primary-data collection |
