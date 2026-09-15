---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.processed-liquid-milk
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Processed liquid milk

## 1. Scope and Applicability

This PCR applies to liquid milk made fit for the declared market by one or more operations such as separation or fat standardisation, homogenisation, pasteurisation, sterilisation, ultra-high-temperature treatment, permitted fortification, cooling, and filling. It covers whole, partially skimmed, skimmed, and composition-equivalent reconstituted milk when the final product remains unflavoured, non-fermented liquid milk. The foreground data package represents processing from accepted milk at the dairy gate through the declared packaged or bulk product at the dairy gate.

The PCR does not cover raw milk, fresh cream, concentrated or dried milk, sweetened milk, fermented or acidified milk, flavoured milk, infant formula, or plant-based milk alternatives. Upstream raw-milk production, production of purchased utilities and packaging, distribution after the dairy gate, retail, use, and end-of-life are not foreground operations; they are connected through declared upstream or downstream datasets when required by the study scope.

Tiangong process `bf42212c-0425-402b-85bc-64ec44aec568` is an identity reference for an aggregated processed-liquid-milk manufacturing process whose quantitative reference is the selected product flow. It supports the category-level process identity but does not replace the site-specific process decomposition and foreground records required below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.processed-liquid-milk |
| classification_refs | CPC 3.0 22110, Processed liquid milk, exact |
| covered_products | Unflavoured processed liquid milk, including whole, partially skimmed, skimmed, fortified, pasteurised, homogenised, sterilised, UHT, and composition-equivalent reconstituted milk |
| excluded_products | Raw milk; fresh or concentrated cream; concentrated, evaporated, condensed, or dried milk; sweetened, flavoured, fermented, curdled, or acidified milk; infant formula; plant-based alternatives |
| representative_product | Unflavoured processed cow milk in its declared primary package, ready for dispatch at the dairy gate |
| production_route | Milk reception and chilled storage; conditional clarification, separation, and standardisation; heat treatment; conditional homogenisation; cooling; filling; storage; cleaning and effluent management |
| market_state | Finished liquid product at dairy gate; refrigerated for pasteurised or other cold-chain products, or ambient-stable in an aseptic package for a validated UHT or sterilised route |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of processed liquid milk meeting the declared composition, food-safety treatment, and packaging specification at the dairy gate |
| How much | 1 kg net mass of processed liquid milk, excluding the mass of its primary and secondary packaging |
| How well | Conforms to the declared animal species, fat class, solids or fortification specification, heat-treatment route, homogenisation state, packaging configuration, and applicable food-safety requirements |
| How long or cycle | One production lot at release from the dairy gate; shelf-life duration and required storage temperature are declared but no consumer storage service is included |
| reference_flow_link | The functional unit is realised by exactly 1 kg of the Tiangong product flow specified below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net processed liquid milk |
| Reference product flow | Processed liquid milk `02cfe33a-6f85-4477-bfde-c8057d01cfa1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal species and source-milk identity; raw-milk versus composition-equivalent reconstituted route; fat class or measured fat content; protein and total-solids basis; heat-treatment route; homogenisation state; fortification; package material and nominal fill size or bulk delivery; net-product mass basis; production geography; dairy-gate storage temperature; declared shelf life |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the net mass of liquid milk only. Record packaging as separate inventory inputs and do not include packaging mass in the 1 kg reference amount. |
| `volume_to_mass` | milk, water, and liquid chemical records | Mass or volume with measured conversion basis | kg or m3 | Convert volume records to mass only with a density applicable to the measured material, temperature, composition, and lot or reporting period. Retain the original volume, density, temperature, and calculation. |
| `composition_basis` | milk and dairy co-products | Mass fraction | kg/kg | Record fat, protein, and total solids on a consistent analytical and wet-mass basis; identify sampling method and averaging period. Do not infer a missing composition from a product name. |
| `energy_carrier_separation` | purchased electricity, fuels, steam, hot water, and cooling | Energy | kWh, MJ, or MWh | Preserve each energy carrier as a separate exchange. For facility-level QA only, convert electricity and thermal energy to MWh using documented physical unit conversions and do not combine primary energy with delivered energy. |
| `wastewater_volume` | process wastewater | Volume | m3 | Report discharged wastewater volume after subtracting separately metered uncontaminated water that does not enter the process-wastewater system. Preserve treatment destination and measurement point. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted milk at the dairy reception point, with supplier or source, animal species, quantity, temperature, composition, acceptance status, and lot or delivery time declared |
| starting_condition_role | Foreground collection starts with reception, storage, and processing at the dairy; production of source milk is represented by a matched upstream dataset |
| product_classification_scope | Unflavoured processed liquid milk within the reviewed semantic scope of CPC 3.0 22110, independent of the classification system used by a consuming dataset |
| recursive_input_rule | When processed liquid milk or off-specification milk from the same category is used as rework, record it as a distinct technosphere input with origin and quantity, terminate recursion at its supplying dataset, and prevent double counting of its prior processing |
| upstream_dataset_requirement | Use geographically, temporally, technologically, animal-species, and composition-matched datasets for raw or reconstituted milk components, electricity, fuels or steam, water, cleaning chemicals, refrigerants, and packaging materials |
| disclosure | Declare source-milk route, facility geography, allocation boundary, included unit operations, bypassed or outsourced operations, heat-treatment and storage route, packaging scope, wastewater destination, and any process data shared with other dairy products |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_dairy_reception` | foreground system boundary | Include milk reception, acceptance measurement, chilled storage, applicable standardisation, heat treatment, homogenisation, cooling, filling, dairy-gate storage, cleaning, product losses, and process wastewater generated for the declared product route. | `ifc-dairy-ehs-2007`; `unsd-cpc-22110` |
| `boundary_upstream_inputs` | upstream technosphere | Connect source milk, reconstitution ingredients where applicable, utilities, water, chemicals, packaging, and refrigerant supply through explicit upstream datasets; do not silently omit their production. | `ifc-dairy-ehs-2007` |
| `boundary_downstream_exclusion` | downstream stages | Exclude distribution after the dairy gate, retail, consumer refrigeration, consumption, packaging end-of-life, and product end-of-life from the foreground process, while identifying them as downstream stages for a lifecycle model. | `idf-dairy-pefcr-2018` |
| `boundary_losses_and_effluent` | losses and emissions | Include rejected milk, spills, separator residues, packaging scrap, cleaning chemicals, wastewater, treatment sludge, and direct refrigerant or combustion emissions when they cross the foreground boundary; disclose recovery, treatment, and destination. | `ifc-dairy-ehs-2007` |
| `boundary_heat_route` | heat treatment | Record the actual treatment route and its time-temperature or equivalent validation records. Apply the legal food-safety criteria of the production jurisdiction and disclose the criteria used. | `eu-reg-853-2004` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_and_standardisation` | Milk reception and standardisation | `required` | Always include reception and storage; include clarification, separation, composition adjustment, or reconstitution only when performed for the declared product | Foreground material preparation | kg accepted milk and kg standardised milk leaving the process |
| `heat_treatment_and_filling` | Heat treatment, cooling, and filling | `required` | Always include the validated heat-treatment and filling route; homogenisation and aseptic filling apply when used | Foreground product manufacture | 1 kg net processed liquid milk at dairy gate; Tiangong category process identity `bf42212c-0425-402b-85bc-64ec44aec568` |
| `sanitation_and_wastewater_management` | Sanitation and wastewater management | `required` | Include all cleaning, CIP, tanker or line washing, effluent collection, and on-site treatment attributable to the declared product route | Cross-cutting foreground support and treatment | reporting-period services allocated to the reference product |

### Process: Milk reception and standardisation (`milk_reception_and_standardisation`)

#### Inputs

##### Product flows

###### Accepted source milk (`source_milk_input`)

Accepted raw milk, or declared preserved milk components and water for a composition-equivalent reconstituted route, enters the foreground dairy after quantity, temperature, quality, species, and composition checks.

- Selected flow: Site- and species-specific source milk or declared reconstitution components; exact Tiangong flow identity must be selected for the foreground package
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection, normalized to the net reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milk_mass_and_composition`
- Sources: `unsd-cpc-22110`; `ifc-dairy-ehs-2007`
- Range: Provisional raw-milk mass-balance screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.95
  - Upper: 1.20
  - Unit: kg/kg net processed liquid milk
  - Basis: accepted source milk before separation losses or co-product removal per reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reception and separation electricity (`reception_electricity`)

Electricity for unloading, pumping, cooling, storage agitation, clarification, and separation is recorded from submeters or a documented facility allocation.

- Selected flow: Geography- and voltage-matched electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity attributable to reception and standardisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `ifc-dairy-ehs-2007`; `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standardised milk intermediate (`standardised_milk_output`)

Accepted milk after the declared clarification, separation, composition adjustment, reconstitution, or storage steps is passed to heat treatment.

- Selected flow: Standardised milk intermediate, represented as an internal product flow without reusing the final reference product as an external output
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with source milk, co-products, rejects, and retained line inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_mass_and_composition`
- Sources: `ifc-dairy-ehs-2007`

###### Cream or other marketable milk fraction (`separation_coproduct`)

When fat standardisation or separation produces a marketable milk fraction, record its measured mass and composition as a co-product rather than a waste.

- Selected flow: Exact cream or milk-fraction product flow matching the sold or transferred material
- Flow property / unit: Mass / kg
- Amount rule: measured co-product mass and composition leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milk_mass_and_composition`
- Sources: `ifc-dairy-ehs-2007`; `iso-14044-2006`

##### Waste flows

###### Rejected milk and separator residues (`reception_rejects`)

Rejected deliveries, filter or separator residues, and milk lost during reception are recorded by destination; recovered food or feed material is reclassified as a product only when it has a documented use.

- Selected flow: Destination-specific organic waste or wastewater flow
- Flow property / unit: Mass / kg
- Amount rule: measured rejection, spill, filter-residue, and separator-discharge mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent_records`
- Sources: `ifc-dairy-ehs-2007`

##### Elementary flows

### Process: Heat treatment, cooling, and filling (`heat_treatment_and_filling`)

#### Inputs

##### Product flows

###### Standardised milk feed (`standardised_milk_input`)

The reconciled intermediate milk from reception and standardisation enters the validated heat-treatment route.

- Selected flow: Standardised milk internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from the preceding process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milk_mass_and_composition`
- Sources: `ifc-dairy-ehs-2007`

###### Process electricity (`process_electricity`)

Electricity for pumping, homogenisation, heat-exchange auxiliaries, cooling, filling, packaging equipment, and product storage is retained as a separate carrier.

- Selected flow: Geography- and voltage-matched electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: measured submetered electricity or documented allocation from facility meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `ifc-dairy-ehs-2007`; `eu-fdm-bat-2019`

###### Thermal energy carriers (`thermal_energy`)

Fuel, steam, or hot-water inputs used for heat treatment and product-temperature control are recorded as separate purchased carriers or on-site fuel inputs without combining their delivered quantities.

- Selected flow: Carrier- and supplier-specific fuel, steam, or hot-water product flow
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered thermal energy or calculated energy from measured fuel use and a documented conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `ifc-dairy-ehs-2007`; `eu-fdm-bat-2019`

###### Primary packaging materials (`primary_packaging`)

All package components needed to contain and protect the reference product are recorded by material and component, including caps, closures, labels, and aseptic barrier layers where present.

- Selected flow: Material-specific packaging product flows matching the actual package bill of materials
- Flow property / unit: Mass / kg
- Amount rule: issued packaging minus documented reusable or recycled in-process scrap, reconciled with good packaged units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ifc-dairy-ehs-2007`
- Range: Provisional primary-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.050
  - Unit: kg packaging/kg net processed liquid milk
  - Basis: total primary-package components issued per reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Processed liquid milk reference product (`processed_liquid_milk_output`)

The released, conforming product at the dairy gate is the quantitative reference output.

- Selected flow: Processed liquid milk `02cfe33a-6f85-4477-bfde-c8057d01cfa1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed at 1 kg net liquid-milk mass after release checks; package mass is excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-22110`

##### Waste flows

###### Off-specification product and packaging scrap (`filling_rejects`)

Product losses, start-up and shutdown losses, damaged packages, and packaging offcuts are separately measured and assigned to reuse, recovery, wastewater, recycling, treatment, or disposal.

- Selected flow: Destination-specific milk-product waste and packaging-waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced rejected product and packaging material by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent_records`
- Sources: `ifc-dairy-ehs-2007`

##### Elementary flows

###### Refrigerant leakage to air (`refrigerant_leakage`)

When mechanical refrigeration serves the declared route, leakage is reported by actual refrigerant species; no generic refrigerant elementary flow may replace the substance-specific flow.

- Selected flow: Exact Tiangong elementary flow for the recorded refrigerant species emitted to air
- Flow property / unit: Mass / kg
- Amount rule: annual inventory loss plus service additions minus documented recovery, allocated to the declared product route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ifc-dairy-ehs-2007`

### Process: Sanitation and wastewater management (`sanitation_and_wastewater_management`)

#### Inputs

##### Product flows

###### Process and cleaning water (`process_cleaning_water`)

Potable or otherwise approved water used for product-contact operations, rinsing, tanker and line cleaning, CIP, and floor cleaning is measured at the relevant boundary.

- Selected flow: Geography- and quality-matched water supply product flow
- Flow property / unit: Volume / m3
- Amount rule: metered process and cleaning water attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_and_water_records`
- Sources: `ifc-dairy-ehs-2007`

###### Cleaning and sanitation chemicals (`cleaning_chemicals`)

Alkaline, acidic, disinfecting, and other cleaning agents are recorded by supplied formulation and active concentration without substituting a generic chemical for an unknown formulation.

- Selected flow: Formulation- or active-ingredient-specific chemical product flow
- Flow property / unit: Mass / kg
- Amount rule: issued chemical mass reconciled with stock change and dilution records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_and_water_records`
- Sources: `ifc-dairy-ehs-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Process wastewater to treatment (`process_wastewater`)

Milk-bearing rinses, CIP discharge, tanker and line wash water, and other contaminated streams are recorded at the discharge or treatment-entry meter with destination and on-site treatment declared.

- Selected flow: Wastewater flow matching the actual treatment route and receiving system
- Flow property / unit: Volume / m3
- Amount rule: measured process-wastewater discharge attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted source milk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent_records`
- Sources: `ifc-dairy-ehs-2007`; `eu-fdm-bat-2019`
- Range: Market-milk facility wastewater-discharge QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0003
  - Upper: 0.0030
  - Unit: m3/kg raw material
  - Basis: yearly average specific wastewater discharge for facilities where market milk is at least 80 percent of production
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bat-2019`

###### Wastewater-treatment sludge (`wastewater_sludge`)

When wastewater is treated on site, treatment sludge and other residuals are recorded by wet or dry mass basis and destination.

- Selected flow: Destination-specific wastewater-treatment sludge flow
- Flow property / unit: Mass / kg
- Amount rule: measured sludge mass with solids content, treatment, recovery, and disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net processed liquid milk at dairy gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent_records`
- Sources: `ifc-dairy-ehs-2007`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all shared dairy operations | First avoid allocation by submetering and subdividing unit operations, and assign directly measured packaging, heat-treatment, cleaning, storage, and waste-management records to the product route that causes them. | `iso-14044-2006`; `idf-dairy-pefcr-2018` |
| `allocation_reconcile_milk_components` | standardisation and separation | Reconcile input and output mass plus fat, protein, and total solids before allocation. Cream and other saleable milk fractions are co-products; product losses and treatment residuals are not co-products unless a documented beneficial use makes them products. | `ifc-dairy-ehs-2007` |
| `allocation_physical_relationship` | residual shared burdens | When subdivision cannot remove a shared burden, use a documented physical relationship that reflects the causal use of the operation, such as throughput, treatment time, cooling load, or retained milk solids. Do not default to total wet mass when it does not represent the causal relationship. | `iso-14044-2006` |
| `allocation_other_relationship` | no defensible physical relationship | If no defensible physical relationship exists, use another documented relationship such as contemporaneous economic value, disclose price period and geography, and report a sensitivity check against a plausible alternative. | `iso-14044-2006` |
| `allocation_no_avoided_burden_credit` | wastes and recovered materials | Do not credit avoided products inside the foreground dataset unless the declared LCA modelling framework explicitly requires substitution. Report recovery outputs and treatment destinations transparently for downstream modelling. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_milk_mass_and_composition` | `milk_reception_and_standardisation` | source milk, intermediates, products, co-products | weighbridge, calibrated flow meter, silo balance, laboratory record, batch record | delivery mass or volume; density and temperature when converted; species; supplier; fat; protein; total solids; accepted or rejected mass; intermediate transfer; co-product mass | capture each delivery and production lot; reconcile daily mass and composition | kg; kg/kg; °C | each delivery and lot, aggregated daily and monthly | at least 12 consecutive representative months or the full campaign | all reception, storage, separation, and product lines serving the declared product | sum masses after stock correction; calculate composition-weighted averages; normalize to released net product | calibration records, laboratory QA, stock reconciliation, rejection logs |
| `cp_utility_records` | `heat_treatment_and_filling` | electricity and thermal carriers | utility meter, submeter, invoice, fuel or steam meter | carrier identity; meter start and end; fuel quantity; steam or heat quantity; electricity; production downtime; allocation driver | capture carrier-specific meters and reconcile with facility invoices | kWh; MJ; MWh; carrier unit | continuous or shift, aggregated monthly | at least 12 consecutive representative months or the full campaign | all meters serving reception, processing, filling, cold storage, and allocated utilities | subtract excluded users; preserve carriers; allocate shared quantities with section 7 rules; normalize to accepted milk and net product | meter calibration, invoice reconciliation, documented conversion factors |
| `cp_heat_treatment_records` | `heat_treatment_and_filling` | validated treatment and release | automated time-temperature chart, divert-valve record, sterilisation or UHT validation, release test | route; inlet and outlet temperature; holding time; flow or batch; diversion events; validation criterion; release status | retain continuous critical-control records and exception review for each lot | °C; s or min; pass/fail | continuous for each lot | full reporting period | every heat-treatment line serving the declared product | link each released lot to treatment record and applicable legal or HACCP criterion | instrument calibration, HACCP verification, release authorization |
| `cp_packaging_records` | `heat_treatment_and_filling` | primary packaging and rejects | bill of materials, issue and return log, filler count, scrap record | component; material; supplier; component mass; units issued; good units; scrap; recycled or disposed quantity | reconcile packaging stock and line counts by product code | kg; item | each production lot, aggregated monthly | full reporting period | every filling and packing line serving the declared product | issued minus returned stock, separated by component and destination, divided by net product | supplier specifications, component weigh checks, line reconciliation |
| `cp_cip_and_water_records` | `sanitation_and_wastewater_management` | water and cleaning agents | water meter, CIP recipe, chemical issue and stock record | water volume; CIP circuit; cycle count; concentration; supplied formulation; chemical mass; recovered rinse; product route | meter water and reconcile chemical issues with recipes and stock | m3; kg; kg active ingredient | each CIP cycle or shift, aggregated monthly | full reporting period | all circuits and cleaning activities attributable to the declared product | subtract documented reuse; allocate shared cycles by causal driver; normalize to net product | meter calibration, concentration tests, CIP completion logs, stock reconciliation |
| `cp_waste_and_effluent_records` | `sanitation_and_wastewater_management` | rejects, wastewater, sludge, packaging waste | waste scale, effluent meter, treatment log, disposal or recovery manifest | waste identity; mass or volume; solids content; COD or BOD when monitored; treatment; destination; recovery status | meter or weigh each stream at a defined boundary and retain destination evidence | kg; m3; kg dry solids | continuous or each shipment, aggregated monthly | full reporting period | all product-route and shared treatment streams | keep streams separate; apply stock or solids correction; normalize to accepted milk and net product | meter calibration, laboratory QA, manifests, treatment records |
| `cp_refrigerant_records` | `heat_treatment_and_filling` | refrigerant emissions | refrigerant inventory, purchase, service, recovery, and equipment log | refrigerant species; opening and closing charge; additions; recovered mass; equipment and service event | annual mass balance by refrigerant species and equipment group | kg | each service event, reconciled annually | full reporting year | refrigeration equipment serving the declared route | opening inventory plus additions minus closing inventory and recovered mass, allocated by documented cooling-load driver | service certificates, cylinder records, leak-test and recovery logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | all inventory rows | normalized amount = reporting-period amount attributable to the declared route divided by reporting-period net mass of released processed liquid milk | attributable amount; net released product mass | amount per 1 kg reference flow |  |
| `calc_volume_to_mass` | milk records reported by volume | mass = measured volume multiplied by density measured or documented for the applicable material, temperature, composition, and period | volume; density; temperature; composition | kg milk or liquid input |  |
| `calc_mass_and_solids_balance` | reception and standardisation | reconcile input mass and fat, protein, and total solids against products, co-products, wastes, stock change, and documented measurement uncertainty | source milk; components; products; co-products; waste; stock change; composition | mass and component closure percentages | `ifc-dairy-ehs-2007` |
| `calc_site_energy_intensity` | facility-level energy QA | specific energy = total delivered electricity plus delivered thermal energy converted to MWh divided by tonnes of raw materials; retain carrier-specific exchanges separately | electricity; thermal energy; raw-material mass | MWh/tonne raw materials | `eu-fdm-bat-2019` |
| `calc_wastewater_intensity` | facility-level wastewater QA | specific wastewater discharge = metered process-wastewater discharge divided by tonnes of raw materials | process wastewater volume; raw-material mass | m3/tonne raw materials | `eu-fdm-bat-2019` |
| `calc_refrigerant_loss` | refrigeration | emitted mass = opening charge plus additions minus closing charge minus recovered refrigerant, calculated separately for each species | inventory and service records | kg refrigerant emitted by species | `ifc-dairy-ehs-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Product species, composition, treatment route, package, geography, storage condition, and net mass basis are complete and consistent with the reference flow. | approved product specification, label or bulk contract, release record |
| `dq_temporal_coverage` | foreground activity data | Use at least 12 consecutive representative months unless the product is seasonal or campaign-based; explain downtime, abnormal production, and extrapolation. | dated meter extracts, production calendar, invoices, batch records |
| `dq_mass_balance` | milk and packaging | Reconcile milk and primary packaging input, product, co-product, waste, stock change, and documented uncertainty before normalisation. | signed mass-balance workbook, stock records, calibration evidence |
| `dq_metering_and_conversion` | measured quantities | Identify meter, calibration status, measurement point, original unit, conversion factor, and responsible record owner. | calibration certificates, meter map, calculation record |
| `dq_allocation` | shared operations and co-products | Retain direct assignments, allocation driver values, allocation factors, price or physical data when used, and sensitivity result. | allocation worksheet and source records |
| `dq_source_dataset_match` | upstream datasets | Document temporal, geographic, technological, species, composition, carrier, material, and treatment-route match; disclose proxies and their expected direction of bias. | dataset metadata and proxy justification |
| `dq_traceability` | all foreground records | Trace every normalized value to an immutable source record, calculation rule, responsible person or system, and reporting period without embedding private credentials. | record identifiers, audit trail, QA approval |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference output UUID, Mass flow-property UUID, Units of mass unit-group UUID, reference unit kg, and fixed amount 1 kg must exactly match section 3 and the output row. |  |
| `validate_required_qualifiers` | dataset metadata | Reject an incomplete package when any required qualifier is absent, ambiguous, or inconsistent with the selected product flow and process route. | `unsd-cpc-22110` |
| `validate_scope_exclusions` | product category | Reject raw milk, cream, concentrated or dried milk, sweetened, fermented, acidified, flavoured milk, and non-dairy alternatives from this PCR. | `unsd-cpc-22110` |
| `validate_heat_treatment` | heat-treatment route | Require treatment route, time-temperature or equivalent validation, exception handling, applicable jurisdictional criterion, and lot release linkage; if EU criteria are claimed, verify them against Regulation (EC) No 853/2004. | `eu-reg-853-2004` |
| `validate_mass_and_solids_closure` | milk processing | Flag unexplained imbalance in total milk mass or fat, protein, and total solids; the package must state closure, measurement uncertainty, stock change, and corrective action rather than forcing the balance. | `ifc-dairy-ehs-2007` |
| `validate_energy_qa` | facility-level energy | For a facility where market milk is at least 80 percent of production, compare yearly specific delivered energy with 0.1 to 0.6 MWh per tonne of raw materials; values outside the indicative range require explanation, not automatic replacement. | `eu-fdm-bat-2019` |
| `validate_wastewater_qa` | facility-level wastewater | For a facility where market milk is at least 80 percent of production, compare yearly specific process-wastewater discharge with 0.3 to 3.0 m3 per tonne of raw materials; values outside the indicative range require boundary and meter review. | `eu-fdm-bat-2019` |
| `validate_coproduct_allocation` | standardisation and shared operations | Require co-product classification, direct assignment, allocation driver, factor totals, and sensitivity disclosure; allocation factors across outputs must sum to one for each shared burden. | `iso-14044-2006` |
| `validate_waste_destinations` | waste and effluent | Every reject, residue, packaging scrap, wastewater, sludge, and recovered stream must have a quantity, classification, and destination without double counting recovery and disposal. | `ifc-dairy-ehs-2007` |
| `validate_no_double_counting` | foreground and upstream datasets | Verify that dairy reception and processing are not simultaneously embedded in the upstream milk dataset and repeated in the foreground, and that rework is not recursively expanded twice. |  |
| `validate_refrigerant_species` | refrigeration emissions | When refrigeration applies, require substance-specific inventory and elementary-flow identity; reject a generic refrigerant emission that obscures the actual species. | `ifc-dairy-ehs-2007` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for processed liquid milk at the dairy gate |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after review, and may supply a downstream `process` or `lifecyclemodel` for distribution, retail, use, and end-of-life |
| allowed_use | Attributional dairy-gate inventories and broader lifecycle models whose product composition, treatment route, package, geography, time, allocation, and upstream milk route match the dataset |
| excluded_use | Raw-milk production; cream, concentrated, dried, sweetened, fermented, acidified, or flavoured milk; plant-based alternatives; unsupported comparison of unlike species, fat classes, treatments, packages, or allocation methods |
| required_metadata | PCR id and version when published; product and required qualifiers; geography; reference year and reporting period; facility and technology description; included and outsourced operations; upstream dataset identities; allocation method; data owners; review status |
| required_quality_disclosure | Primary-data coverage; meter and laboratory QA; mass and solids closure; co-product and waste handling; energy and wastewater QA comparisons; proxy datasets; uncertainty and sensitivity; unresolved identity or range limitations |
| update_trigger | Material change in source milk or formulation, heat-treatment or filling technology, package, facility, utility mix, wastewater treatment, allocation method, legal food-safety requirements, Tiangong reference identities, or evidence used for QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-22110` | `dataset` | United Nations Statistics Division, CPC classification detail for code 22110, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/22110, retrieved 2026-08-10 | Included and excluded product scope and classification identity |
| `ifc-dairy-ehs-2007` | `official_guidance` | World Bank Group / IFC, Environmental, Health, and Safety Guidelines for Dairy Processing, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-dairy-processing-ehs-guidelines-en.pdf, retrieved 2026-08-10 | Dairy process decomposition, reception and cooling, standardisation, heat treatment, packaging, CIP, waste, wastewater, energy, and data-quality controls |
| `eu-fdm-bat-2019` | `standard` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, Official Journal L 313, 4 December 2019, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj, retrieved 2026-08-10 | Market-milk facility specific-energy and specific-wastewater-discharge QA ranges and resource-efficiency context |
| `eu-reg-853-2004` | `standard` | Regulation (EC) No 853/2004, consolidated text of 27 January 2026, Annex III Section IX, https://eur-lex.europa.eu/eli/reg/2004/853/2026-01-27/eng, retrieved 2026-08-10 | Heat-treatment route, time-temperature or equivalent validation, and release-record requirements |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including published amendments, https://www.iso.org/standard/38498.html, retrieved 2026-08-10 | Allocation hierarchy, physical relationships, other relationships, sensitivity, reporting, and review |
| `idf-dairy-pefcr-2018` | `official_guidance` | International Dairy Federation, Dairy Product Environmental Footprint 2018, https://fil-idf.org/dairy-declaration/dairy-product-environmental-footprint-2018/, retrieved 2026-08-10 | Dairy life-cycle stages, primary and secondary data roles, data quality, and downstream boundary disclosure |
