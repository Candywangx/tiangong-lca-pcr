---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Maize (corn), seed

## 1. Scope and Applicability

This PCR applies to maize (*Zea mays* L.) seed intentionally produced and prepared for sowing. It covers open-pollinated varieties, inbred parental lines, and hybrid seed classes when the concrete foreground data package declares the variety or hybrid identity, generation or seed class, applicable certification or quality-declaration scheme, and treatment status.

The foreground boundary begins with parent, pre-basic, basic, or otherwise authorised source seed entering the declared multiplication cycle. It includes field establishment and management, genetic-purity controls, harvest and field handling, transport to a conditioning facility when applicable, reception, drying, shelling, cleaning, grading, optional treatment or coating, representative sampling and quality testing, packaging, storage, and dispatch of saleable seed. The route follows the principal seed-processing operations identified by FAO and retains field-inspection, lot-control, and labelling evidence required by the applicable seed scheme (`fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018`; `oecd-seed-schemes-2026`; `eu-cereal-seed-directive-66-402`).

This PCR excludes maize grain intended for food, feed, starch, oil, fermentation, or other non-propagation uses; forage and silage maize; sweet-corn ears; seed lots rejected from sowing use; crop breeding and variety-development research before authorised source seed exists; and crop production after the packaged seed is dispatched and sown. National or scheme-specific legal requirements remain controlling where they are stricter than this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-seed |
| classification_refs | CPC 3.0: 01121, Maize (corn), seed (exact classification reference; mapping acceptance is maintained outside this PCR) |
| covered_products | Maize seed intended for sowing, including declared open-pollinated, inbred-line, single-cross, three-way-cross, top-cross, and other hybrid seed classes |
| excluded_products | Maize grain for food, feed, industrial use, or bioenergy; forage or silage maize; sweet-corn ears; non-conforming or rejected seed; breeding and R&D outputs before authorised source seed |
| representative_product | A traceable lot of cleaned, graded, quality-tested, labelled, and packaged maize seed ready for sowing |
| production_route | Authorised source seed -> dedicated seed-crop multiplication and harvest -> conditioning and grading -> optional treatment -> testing, packaging, storage, and dispatch |
| market_state | Net saleable mass at conditioning-facility gate, with variety or hybrid, seed class, certification or quality-declaration scheme, treatment status, moisture, purity, germination, lot, geography, and production year declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable maize seed ready for sowing at the conditioning-facility gate |
| How much | 1,000 kg net seed mass, excluding secondary and tertiary transport packaging |
| How well | Meets the lot specification and applicable scheme for identity, varietal and analytical purity, germination, moisture, health, treatment, packaging, sealing, and labelling |
| How long or cycle | One declared multiplication and conditioning campaign, including storage up to dispatch; storage duration is reported |
| reference_flow_link | Output of `treatment_testing_packaging_storage`; the related TianGong generic conditioning process `c1933b4e-86c6-4282-a27f-a06bf7ce85f7` may be used only as an identity reference after maize-seed scope and exchanges are verified |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical species; variety or hybrid and parental system; seed class or generation; certification or quality-declaration scheme and jurisdiction; treated or untreated status; treatment active ingredient and loading when treated; germination; analytical purity; varietal purity; moisture content and measurement basis; health status where regulated; lot identifier; production geography and year; conditioning site; storage duration; packaging format |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent data-package fields. Missing required qualifiers make the reference-flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Saleable reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1,000 kg net saleable seed at the declared dispatch moisture; do not include pallets or secondary and tertiary transport packaging in reference mass. |
| `moisture_basis` | Seed input, intermediate seed, rejects, and saleable seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and % moisture | Record mass and moisture on the same lot and state wet-basis or dry-basis convention. When converting, use dry mass = wet mass x (1 - wet-basis moisture fraction); do not silently compare masses at different moisture contents (`fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018`). |
| `nutrient_basis` | Fertiliser and organic amendment records | Product mass and nutrient mass | kg product and kg N, P2O5, K2O or declared nutrient | Preserve formulated-product mass and calculate nutrient inputs from recorded composition. Nitrogen used in IPCC equations must be expressed as kg N (`ipcc-2019-managed-soils`). |
| `treatment_basis` | Seed-treatment or coating material | Mass | kg product and kg active ingredient | Record formulated product and active ingredient separately and normalize both to 1,000 kg saleable seed; retain treated/untreated status and application rate. |
| `energy_basis` | Field, conditioning, and storage energy | Energy or fuel volume with density and net calorific value | kWh, MJ, kg, or L as recorded | Preserve metered electricity and purchased fuel units. Any conversion must retain the conversion factor, source, and whether lower or higher heating value was used. |
| `quality_test_basis` | Germination, purity, moisture, health, and varietal tests | Test result and sample basis | %, count, or declared laboratory unit | Store the sampling method, test method, sample size, laboratory, date, and pass/fail criterion with each result; do not substitute a certificate statement for the underlying lot result (`fao-seeds-toolkit-quality-2018`; `eu-cereal-seed-directive-66-402`). |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_multiplication_cycle` | foreground_system_boundary | Include all directly controlled operations from receipt of authorised source seed through dispatch of saleable maize seed, including field genetic-purity operations, harvest, conditioning, testing, packaging, and storage. | `fao-seeds-toolkit-processing-2018`; `oecd-seed-schemes-2026` |
| `system_boundary_upstream_inputs` | purchased_inputs | Link source seed, fertilisers, amendments, crop-protection products, fuels, electricity, water supply, treatment products, and packaging to representative upstream datasets; prevent double counting between purchased energy and direct-combustion emissions. | `eu-environmental-footprint-2021` |
| `system_boundary_field_emissions` | managed_soil_and_field_emissions | Include direct and indirect managed-soil N2O attributable to synthetic and organic N, crop residues, and soil-organic-matter mineralisation where applicable; include CO2 from lime or urea and other material field emissions when the declared method requires them. | `ipcc-2019-managed-soils` |
| `system_boundary_quality_and_traceability` | seed_quality_operations | Include representative sampling, testing, rejected sample mass, conditioning losses, sealing, and labelling needed to establish the saleable lot; administrative policy development and crop-breeding R&D are outside the default boundary. | `fao-seeds-toolkit-quality-2018`; `eu-cereal-seed-directive-66-402` |
| `system_boundary_exclusions` | downstream_and_capital_goods | Exclude distribution after facility dispatch, sowing, and cultivation of the commercial maize crop. Capital goods may be excluded only with a documented materiality assessment; excluded flows and their estimated significance must be disclosed. | `eu-environmental-footprint-2021` |
| `system_boundary_no_silent_cutoff` | completeness | Do not omit a required process, major material or energy input, reject stream, or relevant elementary flow solely because its foreground value is unavailable; use a disclosed secondary estimate or record a data gap for review. | `eu-environmental-footprint-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Authorised parent, pre-basic, basic, or other source seed is received for the declared maize-seed multiplication cycle, with seed identity, generation or class, treatment status, lot, quantity, moisture, origin, and certification or quality-declaration status recorded |
| starting_condition_role | The source seed is the recursion boundary and an upstream product input, not burden-free material |
| product_classification_scope | CPC 3.0 code 01121 classification context; semantic scope is maize seed intended for sowing |
| recursive_input_rule | Record same-category source seed as a visible product input. Link one representative upstream maize-seed dataset for the purchased class and stop recursive lineage expansion at that link; never delete the input or model it as zero burden. |
| upstream_dataset_requirement | Prefer a dataset matching geography, parent or source-seed class, treatment status, production year, and declared scheme. If unavailable, use the closest reviewed seed dataset and disclose the proxy, temporal gap, geography, and sensitivity. |
| disclosure | Report the starting seed class and generation, supplier or producing site, lot, upstream dataset or proxy, allocation method, included field and conditioning stages, excluded stages, storage duration, and any estimate used because primary records were unavailable. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | Seed-crop establishment, genetic-purity management, and harvest | required | Always included | Foreground multiplication and harvest; TianGong process `3849645d-260b-42d7-98b0-9e3dc41b4f67` is a related maize-production identity reference only and supplies no PCR amount | Per harvested seed-crop mass delivered from the field and normalized to 1,000 kg saleable seed |
| `field_to_conditioner_transport` | Field-to-conditioning transport | conditional | Include when harvested material moves between separately modelled field and conditioning sites; otherwise record zero distance and co-location | Transport of harvested seed crop without duplicating vehicle burdens already included in field or conditioning records | tonne-kilometres and transported wet mass normalized to 1,000 kg saleable seed |
| `conditioning_and_grading` | Reception, drying, shelling, cleaning, and grading | required | Always included; record route-specific operations that are not used as zero | Foreground conversion of harvested seed crop into a clean, graded seed lot; TianGong process `c1933b4e-86c6-4282-a27f-a06bf7ce85f7` is a generic conditioning identity reference only | Per clean graded seed mass before treatment and normalized to 1,000 kg saleable seed |
| `treatment_testing_packaging_storage` | Treatment, quality testing, packaging, storage, and dispatch | required | Always include testing, packaging, storage, and dispatch; treatment or coating is included only when applied | Final lot qualification and saleable product output | 1,000 kg net saleable maize seed at dispatch |

### Process: Seed-crop establishment, genetic-purity management, and harvest (`seed_crop_production`)

#### Inputs

##### Product flows

###### Authorised source maize seed (`source_seed_input`)

Record parent, pre-basic, basic, or other authorised source seed that establishes the multiplication crop. Preserve variety or hybrid, parental line, generation, lot, treatment, moisture, and upstream-dataset identity.

- Selected flow: Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured source-seed mass issued to the declared fields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_and_lot_identity`
- Range: Provisional replaceable source-seed screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed variety- and field-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertiliser and organic amendment products (`fertiliser_and_amendments`)

Record each product separately with formulation, quantity, nutrient composition, application date, field, and application method. Do not treat nutrient mass as formulated-product mass.

- Selected flow: Fertiliser or organic amendment product selected for the actual formulation
- Flow property / unit: Mass / kg product and kg nutrient
- Amount rule: measured purchases adjusted for opening stock, closing stock, transfers, and returned material, reconciled to field application logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_material_inputs`
- Range: Provisional replaceable total-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg product
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed regional agronomic evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_products`)

Record each formulated herbicide, insecticide, fungicide, desiccant, or biological control product actually applied, including active ingredient fraction and treated area.

- Selected flow: Crop-protection product selected for the actual formulation
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: measured issued quantity reconciled to application and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_material_inputs`
- Range: Provisional replaceable formulated-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg formulated product
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed product- and region-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field fuel and electricity (`field_energy`)

Record fuel by type and metered electricity used for land preparation, sowing, irrigation pumping, field operations, genetic-purity work, and harvest. Labour travel is included only when the study scope requires it and must be separate.

- Selected flow: Actual fuel products and electricity supply mix
- Flow property / unit: Energy, mass, or volume / MJ, kg, L, or kWh as recorded
- Amount rule: meter, invoice, tank, and equipment logs allocated to the declared seed fields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy`
- Range: Provisional replaceable field-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: MJ purchased energy equivalent
  - Basis: per 1,000 kg saleable maize seed; preserve original fuel and electricity units and replace with reviewed regional evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied irrigation water (`supplied_irrigation_water`)

Record water delivered as a technosphere product when a water-supply or irrigation-service dataset crosses the foreground boundary. Do not duplicate the same volume as elementary abstraction.

- Selected flow: Irrigation water supply selected for the actual source and treatment state
- Flow property / unit: Volume / m3
- Amount rule: metered or calculated delivered irrigation volume by field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_water`
- Range: Provisional replaceable irrigation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed climate-, yield-, and technology-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct water abstraction (`direct_water_abstraction`)

Record irrigation water withdrawn directly from the environment by source and compartment. Use this row instead of supplied-water product flow for the same volume unless both represent distinct stages.

- Selected flow: Water, selected environmental source and compartment
- Flow property / unit: Volume / m3
- Amount rule: metered or pump-runtime-derived abstraction minus separately recorded non-field delivery losses when those losses cross a different boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_water`
- Range: Provisional replaceable direct-abstraction screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed site water-balance evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested seed crop delivered from field (`harvested_seed_crop`)

Record the wet mass leaving the seed field, distinguishing ears, shelled seed, and any separately marketed non-seed maize. Link the lot to field and harvest records.

- Selected flow: Harvested maize seed crop, route-specific intermediate product
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: calibrated scale or reconciled container mass at field dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_output_and_residues`
- Range: Provisional replaceable harvested-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 3000
  - Unit: kg wet harvested seed crop
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed route- and moisture-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Usable non-seed maize co-product (`usable_nonseed_coproduct`)

Record separately marketed male-row grain, downgraded grain, or other usable maize only when it leaves the system as a product with an evidenced use. Otherwise classify it by actual waste or residue fate.

- Selected flow: Actual non-seed maize product
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: measured mass by destination and product grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_output_and_residues`

##### Waste flows

###### Field rejects and removed plant material (`field_rejects_and_residues`)

Record rogued plants, tassels, cobs, stalks, and other removed material by mass or an approved residue model, moisture, and actual fate. Material left on field remains within the managed-soil model and is not an avoided product.

- Selected flow: Agricultural residue or waste selected for the actual fate
- Flow property / unit: Mass / kg dry matter or kg wet mass with moisture
- Amount rule: measured or field-sampling-derived quantity by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_output_and_residues`
- Range: Provisional replaceable residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg dry matter
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed field-specific residue measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Managed-soil nitrous oxide (`managed_soil_n2o`)

Calculate direct and indirect N2O from recorded synthetic and organic N inputs, returned crop-residue N, volatilisation, leaching and runoff conditions, and soil-organic-matter mineralisation where applicable. Prefer valid national or site-specific Tier 2 or Tier 3 factors; otherwise use the applicable IPCC method and disclose every factor.

- Selected flow: Nitrous oxide to air, agricultural soil compartment
- Flow property / unit: Mass / kg N2O
- Amount rule: `calc_managed_soil_n2o`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional replaceable N2O screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed regional factors and foreground nitrogen records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carbon dioxide from liming and urea (`liming_and_urea_co2`)

Include where lime, dolomite, or urea is applied and the selected study method requires field CO2. Do not duplicate upstream fertiliser-production emissions.

- Selected flow: Carbon dioxide, fossil or biogenic classification required by the selected method
- Flow property / unit: Mass / kg CO2
- Amount rule: calculate from recorded material and the applicable IPCC or national factor; zero only when records prove no applicable material was used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils`

### Process: Field-to-conditioning transport (`field_to_conditioner_transport`)

#### Inputs

##### Product flows

###### Transport service for harvested seed crop (`field_transport_service`)

Record each route, vehicle or mode, payload, distance, empty return assumption, and transported wet mass. Exclude this row only when field and conditioning operations are demonstrably co-located and transport energy is already captured elsewhere.

- Selected flow: Freight transport service for the actual mode and geography
- Flow property / unit: Transport work / tkm
- Amount rule: transported tonnes x loaded distance, with empty return modelled separately when applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_transport`
- Range: Provisional replaceable transport screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: tkm
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed route records
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested seed crop received at conditioner (`transported_seed_crop`)

Record the received mass and moisture for transport reconciliation; this is the same lot as field output adjusted only for evidenced in-transit losses or moisture change.

- Selected flow: Harvested maize seed crop, route-specific intermediate product
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: receiving-scale mass reconciled to field dispatch mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_transport`

##### Waste flows

##### Elementary flows

### Process: Reception, drying, shelling, cleaning, and grading (`conditioning_and_grading`)

#### Inputs

##### Product flows

###### Harvested seed crop received for conditioning (`conditioning_seed_input`)

Record lot identity, received form, mass, moisture, impurities, and inventory location before processing. Keep lots segregated or document controlled commingling.

- Selected flow: Harvested maize seed crop, route-specific intermediate product
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: calibrated receiving-scale mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_balance`

###### Conditioning electricity (`conditioning_electricity`)

Include electricity for receiving, conveying, drying auxiliaries, shelling, cleaning, grading, dust control, and compressed air.

- Selected flow: Electricity supply mix for the conditioning site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or facility meter allocated by documented equipment time or throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg clean graded seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy`
- Range: Provisional replaceable conditioning-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1,000 kg clean graded seed; replace with reviewed equipment and site evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying fuel or heat (`drying_energy`)

Include purchased fuel or heat used to reduce seed moisture. Record inlet and outlet moisture and protect seed viability by documenting temperature and residence-time controls (`fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018`).

- Selected flow: Actual fuel or heat supply
- Flow property / unit: Energy, mass, or volume / MJ, kg, L, or kWh as recorded
- Amount rule: metered or purchase-and-stock-reconciled drying energy by lot or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg clean graded seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy`
- Range: Provisional replaceable drying-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ purchased energy
  - Basis: per 1,000 kg clean graded seed; replace with reviewed inlet-moisture and dryer evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Clean graded seed before final treatment and packing (`clean_graded_seed`)

Record clean seed mass, moisture, grade, and lot after drying, shelling, cleaning, and grading. This intermediate remains linked to the incoming field lot or documented blend.

- Selected flow: Clean graded maize seed, route-specific intermediate product
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: calibrated scale and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_balance`

##### Waste flows

###### Conditioning screenings and rejected seed (`conditioning_rejects`)

Record husk, cob, dust, broken seed, undersize or oversize fractions, foreign material, and off-specification seed by measured mass and actual destination. A marketed by-product is reclassified as a product output and handled under allocation rules.

- Selected flow: Seed-conditioning residue or waste selected for the actual fate
- Flow property / unit: Mass / kg at measured moisture where relevant
- Amount rule: measured container or destination mass reconciled with the conditioning mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg clean graded seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_balance`
- Range: Provisional replaceable conditioning-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg clean graded seed; replace with reviewed lot and equipment evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured conditioning dust (`conditioning_dust`)

Record measured or method-modelled particulate releases after dust collection. Captured dust belongs in `conditioning_rejects` and must not also be emitted here.

- Selected flow: Particulate matter to air, size fraction and compartment selected for the measurement method
- Flow property / unit: Mass / kg
- Amount rule: stack or workplace-exhaust measurement, approved factor, or zero with documented fully closed recovery and mass-balance evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg clean graded seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass_balance`

### Process: Treatment, quality testing, packaging, storage, and dispatch (`treatment_testing_packaging_storage`)

#### Inputs

##### Product flows

###### Clean graded seed entering final preparation (`final_preparation_seed_input`)

Record the lot mass and moisture entering treatment or, for untreated seed, entering testing and packaging.

- Selected flow: Clean graded maize seed, route-specific intermediate product
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: calibrated scale and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_mass_balance`

###### Seed-treatment and coating products (`seed_treatment_products`)

Include only products actually applied. Record formulation, active ingredient, carrier water, application rate, batch, treated mass, and retained safety or regulatory documentation; untreated seed records zero with evidence.

- Selected flow: Actual treatment, colourant, inoculant, polymer, or coating product
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: issued quantity minus returns and residual stock, reconciled to applicator records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg treated saleable maize seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_and_packaging_inputs`
- Range: Provisional replaceable seed-treatment screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg formulated product
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed product-label and applicator evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging and labels (`primary_packaging`)

Record bags, liners, tags, seals, and other packaging delivered with the seed. Pallets and secondary or tertiary packaging remain inventory inputs but are excluded from reference-product mass.

- Selected flow: Actual packaging material by material and format
- Flow property / unit: Mass and item count / kg and item
- Amount rule: packaging issued minus returns and unused stock, reconciled to packed units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_and_packaging_inputs`
- Range: Provisional replaceable primary-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg packaging
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed bill-of-material and packed-unit evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Final preparation and storage electricity (`final_electricity`)

Include treatment, coating, testing, packing, ventilation, climate control, lighting allocated to storage, and dispatch handling.

- Selected flow: Electricity supply mix for the final-preparation site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or facility meter allocated by documented operating time, floor area, or throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_energy_and_storage`
- Range: Provisional replaceable final-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg saleable maize seed up to dispatch; replace with reviewed site and storage-duration evidence
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable packaged maize seed (`saleable_maize_seed`)

This is the quantitative reference output. It must be linked to the declared lot and the quality-test, treatment, packaging, storage, and dispatch records.

- Selected flow: Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: set to 1,000 kg after `calc_normalize_reference_output` using measured net saleable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1,000 kg net saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_mass_balance`

##### Waste flows

###### Quality samples and final off-specification seed (`final_rejects_and_samples`)

Record destructive test samples, spilled seed, off-specification lots or fractions, residual treatment mix, and packaging waste by actual fate. Returned or reprocessed seed remains a visible internal flow and is not automatically waste.

- Selected flow: Seed or packaging waste selected for the actual fate
- Flow property / unit: Mass / kg
- Amount rule: measured sample, reject, spill, residual, and waste mass reconciled to final inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize seed at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_mass_balance`
- Range: Provisional replaceable final-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg saleable maize seed; replace with reviewed lot records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | separately_measured_fields_lots_and_operations | Avoid allocation by subdividing field blocks, parental rows, batches, conditioning lines, storage zones, and separately metered operations whenever records allow direct assignment. | `eu-environmental-footprint-2021` |
| `allocation_recycling_internal_flows` | reprocessed_seed_and_internal_returns | Return reprocessed seed, recovered treatment mix, and internal packaging returns to the process as explicit internal flows; do not assign an avoided-product credit without an evidenced external function. | `eu-environmental-footprint-2021` |
| `allocation_physical_relationship` | unavoidable_joint_field_or_conditioning_burdens | When subdivision or system expansion is not practicable, allocate using an evidenced causal physical relationship. Use dry-mass allocation only when dry mass reasonably represents the shared process driver and preserve moisture measurements. | `eu-environmental-footprint-2021` |
| `allocation_economic_fallback` | co_products_without_causal_physical_relationship | If no defensible physical relationship exists, use a documented economic relationship based on contemporaneous prices at the point of separation, report the price basis and period, and test sensitivity to price variability. | `eu-environmental-footprint-2021` |
| `allocation_residue_fate` | residues_rejects_and_nonseed_maize | Treat material as a co-product only when it has an evidenced external function and destination. Waste treatment receives the measured waste flow; material left on field remains in the field process and is not credited as an avoided product. | `eu-environmental-footprint-2021` |
| `allocation_disclosure` | all_multifunctional_processes | Report the selected hierarchy step, products and wastes at each separation point, quantities and moisture, allocation factors, prices or physical relationship, and sensitivity result. | `eu-environmental-footprint-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_and_lot_identity` | `seed_crop_production` | source seed and lot identity | purchase, certificate, issue, and sowing records | supplier; lot; species; variety or hybrid; parental line; generation or class; scheme; treatment; mass; moisture; field; sowing date; upstream dataset | reconcile received, issued, returned, and sown quantities to field maps | kg and % moisture | each lot and field | full declared multiplication campaign | all included seed fields | sum source-seed mass by lot and field; retain identity without blending unlike classes | supplier record; certificate or quality declaration; calibrated scale; field map; reconciliation |
| `cp_field_material_inputs` | `seed_crop_production` | fertiliser, amendment, and crop-protection inputs | invoice, stock, formulation, and application records | product; formulation; active ingredient or nutrient fraction; quantity; stock movement; field; treated area; date; method | reconcile purchases and stocks to application logs | kg product; kg nutrient; kg active ingredient; ha | each application and monthly stock close | full declared multiplication campaign | all included fields | sum by product and field, calculate nutrient or active-ingredient mass, then normalize by saleable output | invoices; batch labels; stock ledger; calibrated applicator; field log |
| `cp_field_energy` | `seed_crop_production` | field fuel and electricity | fuel issue, invoice, meter, and equipment-hour records | fuel type; quantity; meter reading; equipment; operation; field; date; allocation driver | direct meter or tank record; allocate shared use by measured hours or field area with justification | L; kg; MJ; kWh; h | each operation, delivery, or meter period | full declared multiplication campaign | all included fields and directly controlled equipment | sum by energy carrier and operation, preserve original units, normalize by saleable output | invoices; meter calibration; tank reconciliation; equipment logs |
| `cp_irrigation_water` | `seed_crop_production` | supplied or directly abstracted irrigation water | meter, pump, source, and irrigation-event records | source; compartment; delivered or abstracted volume; pump runtime; flow rate; field; date; loss boundary | calibrated meter preferred; otherwise runtime x verified flow rate | m3 | each irrigation event or meter period | full irrigation season | all irrigated included fields | sum by source and field; prohibit duplication between product supply and elementary abstraction | meter calibration; pump test; water right or supplier invoice; field log |
| `cp_field_output_and_residues` | `seed_crop_production` | harvested seed crop, co-products, rejects, and residues | scale, container, field-sampling, moisture, and destination records | field; lot; output type; wet mass; moisture; dry matter; destination; date | calibrated scale; approved stratified field sampling for retained residues | kg wet; kg dry matter; % moisture | each harvest load and residue survey | harvest period for the full campaign | all included fields | reconcile field output and fate by lot; convert moisture basis explicitly; normalize by saleable output | scale tickets; moisture tests; field sampling plan; destination receipts |
| `cp_field_transport` | `field_to_conditioner_transport` | harvested-seed transport | dispatch, receiving, route, payload, and fuel or freight records | lot; wet mass; dispatch moisture; received mass; received moisture; origin; destination; mode; vehicle; loaded distance; empty return | weighbridge and route records; distance from verified route | kg; t; km; tkm | each load | all field-to-conditioning movements in campaign | all included routes | calculate tkm by load and route; reconcile dispatch and receipt after moisture adjustment | scale tickets; bill of lading; route evidence; receiving record |
| `cp_conditioning_mass_balance` | `conditioning_and_grading` | seed input, clean output, rejects, dust, and stock change | scale, moisture, bin, batch, reject, and destination records | lot; operation; input mass and moisture; output mass and moisture; reject type; captured dust; uncaptured dust measurement; opening and closing stock | calibrated scales and bin inventory; direct dust measurement or approved factor | kg; % moisture | each batch with campaign inventory close | full conditioning campaign | all included conditioning lines and stores | reconcile moisture-adjusted input = products + wastes + samples + stock change within measurement uncertainty | scale calibration; moisture tests; batch sheets; waste receipts; dust-control records |
| `cp_conditioning_energy` | `conditioning_and_grading` | electricity, fuel, and heat | meter, invoice, fuel stock, dryer, and equipment-hour records | carrier; quantity; meter period; dryer inlet and outlet moisture; temperature; runtime; throughput; allocation driver | submeter preferred; otherwise documented allocation of facility meter or fuel stock | kWh; MJ; kg; L; h | each batch, delivery, or meter period | full conditioning campaign | all included conditioning equipment | sum by carrier; allocate shared energy by causal measured driver; normalize to clean graded seed | meter calibration; invoice; fuel reconciliation; dryer log; equipment runtime |
| `cp_treatment_and_packaging_inputs` | `treatment_testing_packaging_storage` | treatment, coating, packaging, and label inputs | formulation, batch, issue, return, bill-of-material, and packed-unit records | product; active fraction; issued and returned quantity; treated mass; packaging material; item mass; item count; lot | reconcile stock movement to applicator and packing records | kg product; kg active ingredient; kg packaging; item | each treatment and packing batch | full final-preparation campaign | all included treatment and packing lines | sum by material and lot; calculate application rate; normalize by saleable output | product label; batch certificate; calibrated applicator; stock ledger; packaging specification |
| `cp_final_energy_and_storage` | `treatment_testing_packaging_storage` | treatment, testing, packing, storage, and dispatch energy | submeter, facility meter, equipment runtime, occupancy, temperature, and inventory records | carrier; meter period; equipment; runtime; stored mass; floor area; storage start and dispatch date; temperature-control status | submeter preferred; otherwise documented causal allocation | kWh; MJ; kg; L; day | meter period and each lot dispatch | from final preparation through dispatch | all included final-preparation and storage areas | allocate shared energy by measured equipment time, throughput, or mass-days; disclose driver | meter calibration; invoices; equipment logs; warehouse inventory; dispatch record |
| `cp_final_mass_balance` | `treatment_testing_packaging_storage` | saleable seed, samples, rejects, spills, returns, and stock | scale, pack count, net content, sample, reject, rework, and stock records | lot; input mass and moisture; packed units; net unit mass; saleable mass; samples; rejects; rework; opening and closing stock | calibrated scales and package net-content checks | kg; item; % moisture | each batch and lot close | full final-preparation campaign | all included final-preparation lines and stores | reconcile input = saleable output + samples + rejects + stock change after documented moisture adjustment | scale calibration; packing report; sample register; reject log; stock reconciliation |
| `cp_quality_tests` | `treatment_testing_packaging_storage` | lot identity and quality | sampling, laboratory, inspection, certificate, seal, and label records | lot; sampling method; sample size; test method; laboratory; date; germination; analytical purity; varietal purity; moisture; health; result; criterion; certificate; seal; label | representative lot sampling and competent laboratory or official scheme procedure | %; count; declared test unit | each saleable lot and required field inspection | field inspection through dispatch | every included saleable lot and its source fields | no averaging across lots that would conceal a failed criterion; retain individual results and scheme decision | sampling record; laboratory report; field inspection; certificate or quality declaration; label and seal (`fao-seeds-toolkit-quality-2018`; `oecd-seed-schemes-2026`; `eu-cereal-seed-directive-66-402`) |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_output` | all inventory rows | normalization factor = 1,000 kg / measured net saleable seed output; multiply each campaign inventory amount by this factor after any explicit moisture-basis conversion | measured saleable seed mass; inventory amount; moisture where converted | amount per 1,000 kg saleable seed |  |
| `calc_moisture_conversion` | seed and residue mass comparisons | dry mass = wet mass x (1 - wet-basis moisture fraction); conversion back to a declared wet basis must show the target moisture fraction | wet mass; wet-basis moisture fraction; target moisture when used | dry mass or explicitly converted wet mass | `fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018` |
| `calc_nutrient_and_active_mass` | fertiliser and crop-protection products | nutrient or active-ingredient mass = formulated-product mass x declared mass fraction; keep formulated-product mass as a separate inventory amount | formulated-product mass; verified composition | kg nutrient or active ingredient and kg formulated product |  |
| `calc_transport_work` | field-to-conditioning transport | transport work = sum over loads of transported wet tonnes x loaded distance in km; model empty return separately when applicable | load mass; distance; mode; empty return | tkm per 1,000 kg saleable seed |  |
| `calc_managed_soil_n2o` | managed-soil direct and indirect N2O | Apply the declared IPCC Tier 1, Tier 2, Tier 3, or approved national method to synthetic and organic N, returned residue N, mineralised soil N, volatilisation, and leaching or runoff terms; convert N2O-N to N2O by 44/28 and normalize to the reference output | kg N by source; residue N; applicable fractions and emission factors; climate or soil conditions; saleable output | kg N2O per 1,000 kg saleable seed | `ipcc-2019-managed-soils` |
| `calc_conditioning_mass_balance` | conditioning and final preparation | moisture-adjusted input = saleable and intermediate product outputs + co-products + wastes + samples + change in stock; report residual and compare it with combined measurement uncertainty | lot masses; moisture; stock; samples; rejects; co-products | mass-balance residual and closure percentage |  |
| `calc_allocation_factor` | unavoidable multifunctionality | selected allocation factor for each output = its declared physical or economic driver divided by the sum of that driver across co-products at the separation point; report unallocated waste separately | co-product quantities and moisture; causal driver or prices; separation point | allocation factors summing to 1 for allocated products | `eu-environmental-footprint-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_lot_traceability` | all seed flows | Preserve linkage from source-seed lot and field through conditioning batches, quality samples, treatment, packaged lot, and dispatch; document controlled commingling. | Lot ledger, field map, batch record, sample register, certificate or quality declaration, label, and dispatch record |
| `dq_measurement` | mass, moisture, water, energy, and application records | Use calibrated instruments or documented verified methods; state precision, calibration date, missing-data treatment, and moisture convention. | Calibration certificates, meter logs, laboratory methods, and data-gap register |
| `dq_temporal` | foreground campaign | Use records covering the full declared multiplication, conditioning, and storage period. Partial records require a documented extrapolation and uncertainty assessment. | Campaign calendar, invoices, meter periods, stock closes, and dispatch records |
| `dq_geographic_technology` | fields, conditioning, and upstream datasets | Report geography, irrigation status, seed-production system, hybrid or open-pollinated route, equipment, drying technology, treatment, and storage controls; assess proxies for representativeness. | Field and facility metadata plus proxy comparison |
| `dq_completeness` | required processes and important flows | Reconcile material and energy records across every required process; a missing major input, reject, residue, direct emission, or conditional operation is a data gap, not a zero. | Mass and energy balances, completeness checklist, and unresolved-data register (`eu-environmental-footprint-2021`) |
| `dq_quality_conformance` | saleable lot | Retain actual lot results and applicable criteria for identity, varietal and analytical purity, germination, moisture, health, treatment, packaging, sealing, and labelling. | Laboratory report, field inspection, certificate or quality declaration, and label (`fao-seeds-toolkit-quality-2018`; `oecd-seed-schemes-2026`; `eu-cereal-seed-directive-66-402`) |
| `dq_reasoned_estimates` | provisional QA ranges | Treat every `reasoned_estimate` range as a replaceable screening aid, not a default inventory value or conformity limit. Compare foreground values with the range, investigate material exceedances, and replace the range when reviewed evidence becomes available. | Foreground record, investigation note, and subsequent reviewed evidence |
| `dq_method_consistency` | emissions and allocation | Store the method version, factors, units, compartments, allocation hierarchy step, and sensitivity assumptions; prevent upstream and direct-emission double counting. | Calculation workbook or machine-readable rule trace, factor source, and allocation record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | product_identity | Confirm *Zea mays* seed intended for sowing, CPC classification context, variety or hybrid, seed class or generation, scheme and jurisdiction, treatment status, lot, geography, production year, and conditioning site; reject food, feed, industrial, forage, silage, sweet-corn, or rejected seed scope. | `oecd-seed-schemes-2026`; `eu-cereal-seed-directive-66-402` |
| `validate_reference_flow` | reference_product | Confirm exactly 1,000 kg net saleable `Corn Seeds` flow `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6` using Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, at declared dispatch moisture. |  |
| `validate_process_coverage` | foreground_system | Confirm every required process is present, each conditional operation is declared as included or not applicable with evidence, and downstream crop cultivation is excluded. | `fao-seeds-toolkit-processing-2018` |
| `validate_recursion_boundary` | source_seed_input | Confirm same-category source seed remains a non-zero product input linked to a representative upstream dataset or disclosed proxy, with no recursive deletion or double counting. | `eu-environmental-footprint-2021` |
| `validate_mass_balance` | field_conditioning_and_final_preparation | Confirm moisture conventions are consistent and each lot or campaign mass balance closes within combined measurement uncertainty; investigate unexplained residuals and prohibit negative wastes or stock changes used to force closure. | `fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018` |
| `validate_field_emissions` | managed_soil_and_field_emissions | Confirm N inputs, residue fate, volatilisation and leaching conditions, applicable factors, 44/28 conversion, compartments, and selected IPCC or national tier are recorded; confirm lime and urea CO2 applicability and no upstream double counting. | `ipcc-2019-managed-soils` |
| `validate_seed_quality` | saleable_lot | Confirm representative sampling and lot-specific identity, purity, germination, moisture, health, treatment, sealing, and labelling evidence satisfy the declared applicable scheme; do not apply EU or OECD thresholds outside their declared jurisdiction without justification. | `fao-seeds-toolkit-quality-2018`; `oecd-seed-schemes-2026`; `eu-cereal-seed-directive-66-402` |
| `validate_treatment_and_packaging` | final_preparation | Confirm treatment products, active ingredients, loading, treated mass, packaging materials, storage duration, and sample or off-specification fate reconcile to stock and lot records; untreated seed must have explicit evidence. | `fao-seeds-toolkit-processing-2018` |
| `validate_allocation` | multifunctional_processes | Confirm subdivision was attempted first, every co-product has an evidenced function and destination, allocation factors sum to 1 at each separation point, waste is not credited, and physical or economic fallback and sensitivity are disclosed. | `eu-environmental-footprint-2021` |
| `validate_data_quality_and_estimates` | dataset_readiness | Confirm full temporal coverage, calibration, geography and technology representativeness, data-gap treatment, and uncertainty disclosure. `reasoned_estimate` ranges may screen records but may not replace required foreground amounts or become publication-critical allowed ranges without review. | `eu-environmental-footprint-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground maize-seed production dataset normalized to a saleable seed lot at conditioning-facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Use as a reviewed upstream dataset for maize seed inputs or in comparative models only when product identity, seed class, geography, route, treatment, quality scheme, moisture, and temporal representativeness are compatible and all validation rules pass |
| excluded_use | Direct representation of maize grain for food, feed, industrial use, or bioenergy; forage or silage maize; crop cultivation after sowing; rejected seed; untreated seed when the dataset represents treated seed or vice versa; materially different geography or production technology without a documented proxy assessment |
| required_metadata | PCR id and version state; CPC classification reference; reference-flow UUIDs; species; variety or hybrid and parental system; seed class or generation; scheme and jurisdiction; treatment; lot; quality results and methods; geography; production year; field and conditioning route; irrigation; storage duration; packaging; source-seed upstream dataset; process coverage; allocation; data sources |
| required_quality_disclosure | Primary-data coverage; calibration and sampling evidence; mass-balance residual; missing-data and proxy treatment; representativeness; IPCC or national emission tier and factors; allocation hierarchy and sensitivity; each remaining `reasoned_estimate`; uncertainty; exclusions and their estimated significance |
| update_trigger | New or changed seed law or scheme; changed PCR scope or reference flow; revised IPCC or national field-emission method; material change in hybrid route, irrigation, drying, treatment, packaging, storage, geography, technology, allocation, or upstream source-seed dataset; foreground evidence that narrows or replaces a provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seeds-toolkit-processing-2018` | Official guidance (`official_guidance`) | Food and Agriculture Organization of the United Nations, *Seeds Toolkit — Module 2: Seed processing: principles, equipment and practice* (2018), https://openknowledge.fao.org/server/api/core/bitstreams/2019283b-6271-4b2e-82c0-19ac6256c591/content (retrieved 2026-08-07) | Seed-processing process map; reception, drying, cleaning, grading, treatment, packaging, storage, traceability, moisture, and mass-balance controls |
| `fao-seeds-toolkit-quality-2018` | Official guidance (`official_guidance`) | Food and Agriculture Organization of the United Nations, *Seeds Toolkit — Module 3: Seed quality assurance* (2018), https://openknowledge.fao.org/server/api/core/bitstreams/b601435e-9c03-4ca5-8927-9f712418ec38/content (retrieved 2026-08-07) | Representative sampling; physical and varietal purity; germination, moisture, viability, vigour, health testing; laboratory records and sample traceability |
| `oecd-seed-schemes-2026` | Standard (`standard`) | OECD, *OECD Seed Schemes: Rules and Regulations 2026*, including the Maize and Sorghum Seed Scheme, https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/seeds/rules-and-regulation-eng.pdf (retrieved 2026-08-07) | Source-seed lineage, varietal identity and purity, field inspection, post-control, lot certification, sealing, and labelling |
| `eu-cereal-seed-directive-66-402` | Standard (`standard`) | Council Directive 66/402/EEC on the marketing of cereal seed, consolidated official text, https://eur-lex.europa.eu/eli/dir/1966/402/oj/eng (retrieved 2026-08-07) | Maize field inspection and emasculation context; official sampling; identity, analytical purity, germination, packaging, sealing, and label evidence for applicable EU scope |
| `ipcc-2019-managed-soils` | Method factor (`method_factor`) | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf (retrieved 2026-08-07) | Managed-soil direct and indirect N2O calculation; nitrogen activity data; volatilisation and leaching terms; lime and urea CO2 applicability |
| `eu-environmental-footprint-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated official text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-07) | Boundary completeness, upstream and secondary-data disclosure, allocation hierarchy, representativeness, data quality, exclusions, and sensitivity |
