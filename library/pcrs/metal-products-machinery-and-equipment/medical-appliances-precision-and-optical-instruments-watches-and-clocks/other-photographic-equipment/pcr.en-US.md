---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-photographic-equipment
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other photographic equipment

## 1. Scope and Applicability

This PCR covers finished photographic equipment not represented by the separate canonical identities for objective lenses, photographic or cinematographic cameras, cinematographic projectors, sensitized photographic media, photographic chemical preparations, or parts and accessories. Consistent with the HS headings underlying this residual equipment boundary, covered products include photographic flashlight apparatus; non-cinematographic image projectors and photographic enlargers or reducers; photographic-laboratory apparatus and equipment; negatoscopes; and projection screens.

The foreground boundary is factory-gate production from received materials, components, and packaging through final assembly, any site-performed cleaning or conditioning, functional testing, and packing. The producer must declare the specific equipment family and bill of materials because the residual category spans electronic, optical, electromechanical, and passive screen products. Distribution, use, maintenance, and end-of-life are excluded unless the study goal explicitly extends the boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-photographic-equipment |
| classification_refs | CPC 3.0: 48329, Other photographic equipment (`exact`) |
| covered_products | Finished photographic flashlight apparatus; non-cinematographic image projectors; photographic enlargers and reducers; photographic-laboratory apparatus; negatoscopes; projection screens |
| excluded_products | Objective lenses sold separately; photographic and cinematographic cameras; cinematographic projectors; sensitized plates, film, or instant-print film; photographic chemical preparations; parts and accessories sold separately; digital cameras and television/video cameras |
| representative_product | Factory-gate finished electronic photographic flash unit, used only as the representative route for process and BOM prompts and not as a restriction on other covered equipment |
| production_route | Receipt of purchased materials and components; product-specific fabrication or conditioning where performed at the reporting site; final assembly; cleaning when used; functional testing; packing |
| market_state | Complete, tested, factory-gate finished equipment, with included accessories and sales packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide finished equipment that performs the declared photographic illumination, image projection/enlargement/reduction, laboratory handling, negative viewing, or projection-screen function |
| How much | 1 kg net mass of complete factory-gate finished equipment |
| How well | Conforming to the producer's declared model specification and acceptance test, with equipment family, model, BOM revision, included accessories, and packaging scope declared |
| How long or cycle | Factory-gate production only; service life or operating cycles are metadata and do not change the 1 kg production reference |
| reference_flow_link | `finished_other_photographic_equipment` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other photographic equipment (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equipment family; manufacturer and model; BOM revision; electronic, optical, laboratory-apparatus, or passive-screen route; net product mass; included accessories; packaging scope; manufacturing site and geography; reporting period; acceptance-test specification |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh complete accepted equipment without sales packaging for net reference-product mass. Normalize each reporting-period exchange by accepted net output mass to 1 kg; disclose whether included accessories are inside the net product mass. |
| `energy_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter data in its original unit and convert kWh to MJ using exactly 1 kWh = 3.6 MJ. Record voltage level, grid geography, onsite generation treatment, and loss boundary. |
| `water_mass_basis` | Process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records. When volume is metered, use a documented measured or supplier density for the reporting temperature; do not silently assume density. |
| `bom_component_mass` | Materials, components, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use supplier mass declarations or verified weighing. Distinguish supplied component mass from primary-material-equivalent mass and do not double-count both representations. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received materials, components, subassemblies, accessories, and packaging at the reporting site's gate |
| starting_condition_role | Foreground assembly/manufacturing input boundary; upstream production is represented by separately linked supplier or background datasets |
| product_classification_scope | Finished residual photographic equipment described in Product Category Identity, independent of any one model or route |
| recursive_input_rule | A received input that is itself finished equipment within this PCR is recorded once as a product input with its own upstream dataset; do not recursively decompose it inside the receiving process and also link the complete-equipment dataset |
| upstream_dataset_requirement | Every material, component, energy, water, packaging, and waste-treatment exchange requires a geographically and technologically appropriate upstream or downstream dataset, with proxy use disclosed |
| disclosure | Declare factory location, reporting period, equipment family/model, BOM revision, component manufacturing included at the site, cleaning and testing route, allocation, cut-offs, data gaps, recycled-content assumptions, and packaging scope |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_inputs` | Foreground starting condition | Start the foreground inventory at the site gate for received materials and components; link their upstream production and inbound transport separately when the study boundary includes them. | `kth-moqvist-photo-flash-2020` |
| `boundary_site_operations` | Factory-gate production | Include site-performed fabrication, assembly, cleaning or conditioning, functional testing, rejects, wastewater, and packing needed to produce accepted equipment. | `kth-moqvist-photo-flash-2020` |
| `boundary_downstream_exclusion` | Distribution, use, and end-of-life | Exclude downstream distribution, use electricity or consumables, maintenance, and end-of-life from this factory-gate PCR unless the study goal adds them as separately reported modules. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_assembly_test_pack` | Final assembly, cleaning, functional testing, and packing | `required` | Always; individual atomic exchanges apply only when present in the declared model BOM or site route | Foreground production | 1 kg accepted net finished equipment |

### Process: Final assembly, cleaning, functional testing, and packing (`final_assembly_test_pack`)

#### Inputs

##### Product flows

###### Aluminium sheet for housings, frames, or reflectors (`aluminium_sheet`)

Record this exchange when aluminium sheet enters the foreground process as a purchased material. Product design, alloy, thickness, recycled content, and forming boundary remain foreground qualifiers.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured net input during the reporting period, less returned unopened material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `kth-moqvist-photo-flash-2020`

###### ABS moulding resin (`abs_granulate`)

Record ABS granulate only when the reporting site moulds ABS parts or consumes purchased ABS granulate; do not also count the mass of the resulting purchased moulded part.

- Selected flow: Acrylonitrile-butadiene-styrene (ABS) copolymer, granulate `8f1317c1-aa51-4524-8692-74079c923e2c`
- Flow property / unit: Mass / kg
- Amount rule: measured net granulate charged to site-performed moulding, including documented process loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `kth-moqvist-photo-flash-2020`

###### Printed wire board (`printed_wire_board`)

Record each purchased printed wire board entering an electronic equipment route. Declare whether it is bare or populated; mounted parts not included in the selected flow require separate BOM records or a documented assembly dataset.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: supplier-declared or weighed board mass entering accepted and rejected units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `kth-moqvist-photo-flash-2020`

###### Objective lens (`photographic_objective_lens`)

Record this component only for equipment whose declared BOM contains a separately received objective lens.

- Selected flow: Objective lenses for cameras, projectors or photographic enlargers or reducers `cfef9f14-3271-428b-bebe-47ded2db11d4`
- Flow property / unit: Mass / kg
- Amount rule: supplier-declared or weighed lens mass entering accepted and rejected units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `wco-hs-2022-chapter-90`

###### Xenon photographic flash tube (`xenon_flash_tube`)

Record this component only for xenon-discharge photographic flash products. The Tiangong identity remains unresolved; do not substitute glass, xylene, or a ballast.

- Selected flow: Xenon photographic flash tube (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: supplier-declared or weighed flash-tube mass entering accepted and rejected units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `wco-hs-2022-chapter-90`

###### Electronic flash capacitor (`electronic_flash_capacitor`)

Record this component only for electronic flash products whose BOM contains a discrete energy-storage capacitor. The Tiangong identity remains unresolved; insulation oil is not an acceptable substitute.

- Selected flow: Electronic flash capacitor (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: supplier-declared or weighed capacitor mass entering accepted and rejected units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `kth-moqvist-photo-flash-2020`

###### Polyester projection-screen fabric (`polyester_projection_screen_fabric`)

Record this exchange only for projection-screen products using a polyester-based optical surface. Declare coating, backing, weave or knit, recycled content, and flame-retardant treatment.

- Selected flow: Polyester projection-screen fabric (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: supplier-declared or weighed finished fabric mass entering accepted and rejected screens
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `wco-hs-2022-chapter-90`

###### Purchased electricity (`electricity`)

Record electricity consumed by site-performed fabrication, assembly, cleaning or conditioning, testing, and packing. Allocate shared meters using the rule in section 7.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or invoice-reconciled electricity attributable to the reporting process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`
- Sources: `kth-moqvist-photo-flash-2020`

###### Process water for aqueous cleaning (`process_water`)

Record process water only when aqueous cleaning occurs at the reporting site. Water for sanitation or unrelated building services is outside this row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to product or component cleaning during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources:

###### Corrugated-board sales box (`corrugated_board_box`)

Record the formed corrugated-board box supplied with the finished equipment; do not also count its cardboard mass as a separate raw-board input.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: supplier-declared or weighed box mass packed with accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `kth-moqvist-photo-flash-2020`

###### Low-density polyethylene protective film (`ldpe_packaging_film`)

Record PE-LD film only when it is supplied with the product as sales or protective packaging.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: supplier-declared or weighed PE-LD film mass packed with accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished equipment (`finished_other_photographic_equipment`)

This is the reference product crossing the factory gate after assembly, acceptance testing, and packing. Record net equipment mass separately from sales packaging.

- Selected flow: Other photographic equipment (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted finished equipment produced in the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_mass`
- Sources: `un-cpc-3-0-2025`; `wco-hs-2022-chapter-90`

##### Waste flows

###### Rejected electronic assemblies (`weee_manufacturing_scrap`)

Record rejected electronic assemblies only for electronic routes and before downstream treatment. Separate recoverable components if measured as distinct waste flows.

- Selected flow: Waste electrical and electronic equipment manufacturing scrap `46be0534-0f3c-44a9-8523-63c4ad41ed8e`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from production control to a waste-treatment or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources:

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater only when aqueous cleaning occurs. Characterize contaminants and treatment state in the foreground record.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater transferred to onsite or offsite treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_mass`
- Sources:

###### Aluminium offcuts and rejected parts (`aluminium_scrap`)

Record aluminium scrap only when sheet forming, trimming, or rejection occurs at the reporting site. Do not net it against aluminium input.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to recovery or waste treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `kth-moqvist-photo-flash-2020`

##### Elementary flows

No generic elementary-emission row is prescribed. Record each measured direct emission as its own chemically specific elementary flow; do not transfer upstream electricity or material-production emissions into this foreground process.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Multi-product factory operations | First subdivide metered processes, production lines, batches, and waste records wherever independent measurement is practicable. |  |
| `allocation_shared_operations` | Shared assembly, conditioning, testing, and building services | When subdivision is not practicable, allocate shared electricity, water, and waste by a documented causal driver such as machine time, test time, batch count, or measured throughput; use mass only when no more causal driver is available and disclose sensitivity. |  |
| `allocation_scrap_no_credit` | Aluminium scrap and rejected electronic assemblies | Report waste flows gross at the foreground boundary. Do not subtract scrap revenue or an avoided-primary-material credit from the foreground inventory; model recovery consequences in the selected downstream dataset or an explicitly separate scenario. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass` | `final_assembly_test_pack` | BOM material, component, accessory, or packaging input | supplier declaration plus receiving and issue record | item code; material description; supplier; lot; quantity; unit mass; returned mass; BOM revision; accepted and rejected unit counts | Reconcile approved BOM to purchasing/warehouse records and verify representative unit mass by calibrated scale | kg | Per lot, aggregated monthly | Complete reporting period | All lines and outsourced steps included in declared site boundary | Sum net issued mass by item and map each item once to an atomic flow | BOM approval, supplier mass evidence, scale calibration, reconciliation record |
| `cp_energy_meter` | `final_assembly_test_pack` | electricity input | meter interval or utility invoice | meter id; start/end reading; interval consumption; voltage; grid supplier; onsite generation/export; allocation driver | Read dedicated meter or reconcile submeter totals to invoices | kWh and MJ | At least monthly | Complete reporting period | All included fabrication, assembly, cleaning, testing, and packing operations | Convert kWh to MJ and allocate shared consumption using section 7 | Meter calibration or invoice reconciliation and allocation worksheet |
| `cp_water_meter` | `final_assembly_test_pack` | process-water input | meter, batch log, or supplier record | source; meter id; volume or mass; temperature; density source; batch; cleaning route | Meter or weigh water supplied to included aqueous cleaning | kg | Per batch or monthly | Complete reporting period | Included cleaning equipment only | Convert documented volume to mass when needed and normalize by accepted output mass | Meter calibration, density record, and batch reconciliation |
| `cp_product_output_mass` | `final_assembly_test_pack` | accepted finished-product output | production and acceptance record | model; serial or batch; BOM revision; accepted count; rejected count; measured unit mass; included accessories; packaging excluded | Reconcile acceptance-test release records with calibrated mass measurements | kg | Per batch | Complete reporting period | Every covered model produced at the site | Sum accepted net product mass by model and reporting period | Acceptance record, scale calibration, and production reconciliation |
| `cp_waste_mass` | `final_assembly_test_pack` | solid manufacturing waste output | waste transfer and internal scrap record | waste type; source process; container tare/gross mass; contamination; destination; treatment route; date | Weigh each waste transfer and reconcile internal scrap movements | kg | Per transfer, aggregated monthly | Complete reporting period | All included production waste destinations | Sum net mass by atomic waste identity without netting revenue | Scale calibration, transfer note, and treatment receipt |
| `cp_wastewater_mass` | `final_assembly_test_pack` | cleaning-wastewater output | effluent meter and characterization record | volume or mass; temperature; density source; contaminants; treatment state; destination; batch/date | Meter wastewater and retain representative characterization | kg | Per batch or monthly | Complete reporting period | Included aqueous-cleaning discharges only | Convert documented volume to mass when needed and normalize by accepted output mass | Meter calibration, sampling record, and treatment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | Normalized amount = reporting-period row total / reporting-period accepted net equipment mass | Collected row total; accepted net equipment mass | Exchange per 1 kg accepted net finished equipment |  |
| `calc_electricity_mj` | Electricity | MJ = metered kWh × 3.6 | Metered kWh | Electricity in MJ |  |
| `calc_material_balance_screen` | Materials and wastes | Compare total mass inputs with accepted product, separately reported waste, inventory change, and documented evaporation or unmeasured residuals; investigate rather than force a balance | BOM input mass; product output mass; waste mass; opening/closing inventories | Material-balance residual and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and inventory identity | Preserve model, BOM revision, equipment family, material/part specification, Tiangong flow UUID where resolved, and supplier or waste-route identity. | Approved BOM, supplier specification, flow mapping record, waste transfer record |
| `dq_temporal` | Foreground activity | Cover a representative continuous 12-month period where available; otherwise disclose start/end dates, seasonality, ramp-up, shutdown, and extrapolation. | Meter coverage, production calendar, reconciliation worksheet |
| `dq_completeness` | Factory-gate inventory | Reconcile product output to production records, component inputs to BOM/purchasing, electricity and water to meters/invoices, and waste to transfer records; quantify all exclusions. | Signed completeness checklist and reconciliations |
| `dq_technology_geography` | Upstream datasets and shared operations | Match component state, manufacturing technology, electricity geography/voltage, recycled content, and waste-treatment route; document every proxy. | Dataset selection log and proxy justification |
| `dq_uncertainty` | Missing external ranges | Do not replace missing independent range evidence with an unlabeled case value. Report foreground variability and uncertainty from the collected period and flag the unresolved external benchmark need. | Batch statistics, meter variability, and review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | Reference product | Confirm the product is finished equipment within the covered boundary, not a camera, cinematographic projector, separately sold objective lens, sensitized medium, chemical preparation, or part/accessory. | `un-cpc-3-0-2025`; `wco-hs-2022-chapter-90` |
| `validate_reference_mass` | Functional unit and reference flow | Confirm accepted net equipment mass equals the normalization denominator, packaging is separately reported, and all required qualifiers are present. |  |
| `validate_atomic_inventory` | Process inventory | Reject combined or umbrella exchanges; each product, waste, and elementary flow must have one physical or chemical identity and one applicable property/unit. |  |
| `validate_bom_and_meter_reconciliation` | Foreground completeness | Confirm BOM/material, accepted-output, electricity, water, wastewater, and solid-waste records reconcile to the reporting period and declared site scope; explain every residual or excluded route. | `kth-moqvist-photo-flash-2020` |
| `validate_uuid_and_range_gaps` | Unresolved references and ranges | Keep unresolved UUID rows blank and linked to manifest review metadata. Do not treat the single product-specific LCA as an external amount range; require two independent boundary-compatible sources before authoring an inferred range. | `kth-moqvist-photo-flash-2020` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for a declared other-photographic-equipment model or homogeneous model family |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product carbon-footprint and LCA models requiring mass-normalized factory-gate production of the declared model and route |
| excluded_use | Unqualified average for all CPC 48329 equipment; camera production; use-phase service comparison; end-of-life claims; substitution or avoided-burden claims without separate modelling |
| required_metadata | PCR id/version; equipment family/model; BOM revision; net product mass; included accessories; packaging scope; site/geography; reporting period; route; acceptance test; allocation drivers; cut-offs; unresolved UUIDs; upstream dataset and proxy choices |
| required_quality_disclosure | Foreground data coverage and reconciliation; meter and scale quality; supplier-data share; temporal/geographical/technological representativeness; recycled content; waste-treatment route; uncertainty; missing independent range evidence |
| update_trigger | Material change in model or BOM, component supplier/technology, production site, electricity supply, cleaning/testing route, packaging, allocation driver, waste treatment, or a newly resolved Tiangong reference-product/inventory UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure and Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-07) | Official classification identity and hierarchy |
| `wco-hs-2022-chapter-90` | `standard` | World Customs Organization, HS Nomenclature 2022, Chapter 90, https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1890_2022e.pdf?la=en (retrieved 2026-09-07) | Concrete covered goods and parts exclusions underlying the residual equipment boundary |
| `kth-moqvist-photo-flash-2020` | `literature` | Tim Storfeldt Moqvist, Environmental Impact of a Portable Photo Flash – Using Life Cycle Assessment Methodology, KTH, 2020, https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-275710 (retrieved 2026-09-07) | Representative electronic-flash route, BOM/component inventory, assembly, electricity, plastics, aluminium reflector, PCB, and cardboard packaging process decomposition; not used for an external amount range |
