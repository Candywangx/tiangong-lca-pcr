---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Maize (corn), other

## 1. Scope and Applicability

This PCR applies to shelled maize grain (*Zea mays* L.) other than planting seed, supplied as an unprocessed agricultural product at the farm gate. It covers one crop cycle from the declared field starting condition through field preparation, sowing, crop management, harvest, and the on-farm cleaning, drying, handling, and storage actually performed before the declared farm gate.

It excludes maize seed intended for planting, sweet corn harvested as a vegetable, whole-crop forage or silage maize, and products made by milling, wet milling, starch extraction, fermentation, cooking, flaking, or other downstream processing. Off-farm transport after the declared gate, merchant storage, industrial drying, and downstream conversion are outside the default boundary. A study may add them as separate downstream processes but shall not relabel the enlarged result as the default farm-gate profile.

The PCR is geography- and technology-neutral. A concrete data package shall identify the production geography, crop year or cycle, cultivar or hybrid, rainfed or irrigated status, tillage and residue management, previous crop and relevant prior land use, harvested form, moisture basis, declared grade or end-use class, and the location and condition of the farm gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other |
| classification_refs | CPC 3.0: 01122 Maize (corn), other |
| covered_products | Shelled maize grain other than planting seed; unprocessed grain for declared food, feed, industrial, or other uses at the farm gate |
| excluded_products | Planting seed; sweet corn harvested as a vegetable; forage or silage maize; green whole-crop maize; maize meal, flour, grits, flakes, starch, oil, ethanol, and other processed maize products |
| representative_product | Bulk shelled maize grain, cleaned as applicable and delivered at the farm gate on a declared moisture and quality basis |
| production_route | Field preparation, sowing, crop management, harvest, and actual on-farm post-harvest operations before the farm gate |
| market_state | Unprocessed agricultural grain at farm gate; net mass, moisture content, grade or intended-use class, geography, and crop cycle declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Shelled, unprocessed maize grain other than planting seed, delivered at the declared farm gate |
| How much | 1 kg net product mass |
| How well | Moisture content and basis, damaged or broken kernel fraction when available, foreign matter or screenings basis, declared grade or intended-use class, and geographic origin are specified; a human-food conformity claim additionally identifies the applicable specification |
| How long or cycle | One declared maize crop cycle through the farm gate; any included on-farm storage duration is stated |
| reference_flow_link | The reference output of `farm_gate_preparation`; all crop-cycle quantities are normalized to this output using measured saleable mass and moisture |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net maize grain at the declared farm gate |
| Reference product flow | Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 3.0 code 01122 scope; farm-gate location; crop year or crop-cycle dates; geography; cultivar or hybrid when known; rainfed or irrigated status; harvested and delivered form; moisture percentage and wet-basis or dry-basis convention; reference or contractual moisture when mass is corrected; grade or intended-use class; net-of-packaging statement; included post-harvest operations; storage duration when included |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net maize-grain mass in kg, excluding packaging, and state whether the mass is as received or corrected to a declared moisture content. |
| `moisture_basis` | harvested and farm-gate grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record moisture as percent wet basis unless another convention is explicitly named; retain measured as-received mass and moisture before applying any correction. |
| `dry_matter_conversion` | grain mass compared across moisture states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert mass only with the dry-matter identity in `calc_moisture_correction`; do not report moisture loss during drying as material loss. |
| `area_and_yield` | field operations and crop yield | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain cultivated and harvested area in ha, harvested mass in kg or t, moisture, and the calculated yield basis before normalization to 1 kg reference product. |
| `fertilizer_nutrients` | mineral and organic nutrient inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record formulated-product mass separately from N, P2O5, K2O, elemental P or K, and other nutrient quantities; name the nutrient convention used and do not treat product mass as nutrient mass. |
| `energy_preservation` | fuel, electricity, drying, pumping, and storage energy | Energy | MJ and kWh | Preserve measured fuel quantity and fuel type, metered electricity in kWh, and thermal energy or fuel in its original unit; document every conversion and avoid double-counting fuel supply and direct combustion. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_crop_cycle` | foreground crop production | Include field preparation, sowing, crop management, irrigation when used, fertilization, crop protection, harvest, and every on-farm cleaning, drying, handling, and storage operation performed before the declared farm gate. | `fao-leap-feed-2016` |
| `sb_upstream_inputs` | purchased and transferred inputs | Record seed, fertilizers, organic amendments, crop-protection products, fuels, electricity, supplied water, machinery or contracted services when material, and packaging when used; link each technosphere input to a geographically and technologically representative upstream dataset or disclose the proxy. | `fao-leap-feed-2016`; `eu-pef-2021` |
| `sb_field_emissions` | managed-soil and field emissions | Calculate direct and indirect N2O associated with synthetic and organic N, crop residues, and relevant soil-N mineralization; calculate CO2 from lime and urea where applied; include NH3, NO, nitrate leaching, and other material field emissions using the most specific accepted regional method and collected activity data. | `ipcc-2019-managed-soils`; `eea-emep-agricultural-soils-2023` |
| `sb_land_and_soil` | land occupation, land-use change, and soil carbon | Record occupied area and crop-cycle duration. Assess land-use change and soil-carbon stock change when required by the selected LCA method or when recent land conversion, drainage, biochar, or a material management change is present; disclose the method, period, and exclusions. | `eu-pef-2021`; `fao-leap-feed-2016` |
| `sb_residues` | stover, cobs, husks, and other crop residues | Treat residue retained, mulched, incorporated, grazed in situ, or burned as a field-management pathway and account for its relevant emissions. Record residue crossing the farm gate as a co-product only when its quantity and destination are evidenced. | `ipcc-2019-managed-soils`; `eea-emep-agricultural-soils-2023` |
| `sb_postharvest_gate` | post-harvest operations | Include drying, cleaning, aeration, conveying, and storage only to the extent performed before the declared farm gate; report incoming and outgoing grain mass and moisture so drying loss is separated from dry-matter loss. | `fao-grain-drying`; `fao-postharvest-loss-2019` |
| `sb_default_exclusions` | default farm-gate profile | Exclude planting-seed production, off-farm distribution after the gate, merchant or industrial storage, milling, starch or oil extraction, fermentation, cooking, feed manufacture, and product use or end-of-life unless added as separately identified downstream processes. | `fao-leap-feed-2016` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The identified land parcel at the start of the maize crop cycle, with previous crop, residue condition, soil-management carry-over, relevant prior land use, and any pre-existing crop or field preparation stated |
| starting_condition_role | Foreground crop-cycle start; inherited burdens or credits are included only when the selected LCA method assigns them and the assignment is documented |
| product_classification_scope | Shelled unprocessed maize grain other than planting seed, corresponding to CPC 3.0 code 01122 |
| recursive_input_rule | If non-seed maize grain within this product category enters a foreground process, record it once as a product input with a supplier or upstream dataset and do not recursively recreate its production under this PCR; distinguish planting seed as a separate product category |
| upstream_dataset_requirement | Every purchased or transferred product, energy, transport, machinery-service, or waste-treatment input has a representative upstream dataset, or a documented proxy with geography, technology, time, and uncertainty limitations |
| disclosure | Geography; crop year and dates; cultivar or hybrid; previous crop and relevant land history; tillage; rainfed or irrigated status; water source; fertilizer and crop-protection regime; residue pathway; harvested and saleable mass; moisture basis; losses; co-products; allocation; included post-harvest operations; storage duration; gate location; emission-factor methods; data gaps and proxies |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation_and_harvest` | Field cultivation and harvest | required |  | Foreground crop cycle from declared field start through harvest; TianGong process identity candidate `47013f74-294a-40d7-aefb-89221c484af4` is regional identity evidence only and is not a default geography or exact reference-product process | One cultivated ha and complete crop cycle, normalized by measured saleable grain output at declared moisture |
| `farm_gate_preparation` | On-farm preparation to farm gate | required |  | Foreground transfer from harvested grain to the declared farm-gate product; drying, cleaning, aeration, storage, and packaging subactivities are included only when actually performed | 1 kg net maize grain output at the declared farm gate |

### Process: Field cultivation and harvest (`field_cultivation_and_harvest`)

#### Inputs

##### Product flows

###### Planting seed supplied to the field (`planting_seed`)

Record seed used for sowing as a distinct product input; it is not the CPC 01122 reference output.

- Selected flow: Corn seed
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass issued to the identified fields, net of returned unused seed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional seed-use screening estimate, replace with field records or reviewed regional evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 5
  - Upper: 100
  - Unit: kg/ha crop cycle
  - Basis: broad authoring screen for grain-maize sowing seed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mineral fertilizer products (`mineral_fertilizers`)

Record each formulated fertilizer separately and retain both product mass and declared nutrient analysis.

- Selected flow: Mineral fertilizer products
- Flow property / unit: Mass / kg product; nutrient content / kg N, kg P2O5 or kg P, kg K2O or kg K as declared
- Amount rule: measured delivered or issued mass minus documented returns, reconciled to field application records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional total formulated-fertilizer screening estimate, replace with field records or reviewed regional evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg product/ha crop cycle
  - Basis: total formulated mineral fertilizer, not nutrient mass
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Organic amendments and manure (`organic_amendments`)

Record manure, compost, digestate, biosolids, or other organic amendments only when applied, including wet mass, dry matter, N content, source, treatment, and any incoming burden required by the selected method.

- Selected flow: Organic soil amendments
- Flow property / unit: Mass / kg or t wet mass and dry matter; kg N
- Amount rule: measured application quantity and analysed or supplier-declared composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

###### Crop-protection products (`crop_protection_products`)

Record each formulated herbicide, insecticide, fungicide, seed treatment, growth regulator, or other crop-protection product used, together with active ingredient and application method.

- Selected flow: Crop-protection products
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: measured product issued or applied, reconciled to spray or application logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional formulated-product screening estimate, replace with product-specific field records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg formulated product/ha crop cycle
  - Basis: all crop-protection products combined; not active-ingredient mass
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-operation fuels (`field_fuels`)

Record fuel by type and operation, including owned and contracted machinery when the fuel is within the foreground boundary.

- Selected flow: Field-operation fuels
- Flow property / unit: Volume or mass and net calorific value / L, kg, and MJ
- Amount rule: measured issue, invoice, tank balance, telematics, or contractor record; identify whether direct combustion is modelled separately or within a combustion service dataset
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy`
- Range: Provisional field-fuel screening estimate, replace with machinery or supplier records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: L diesel-equivalent/ha crop cycle
  - Basis: all field operations; convert other fuels transparently
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field electricity (`field_electricity`)

Record electricity for irrigation pumping and other field operations when used, with meter boundary and electricity-supply identity.

- Selected flow: Electricity supplied to field operations
- Flow property / unit: Energy / kWh
- Amount rule: metered consumption or an engineering calculation from pump power and operating time using `calc_pumping_electricity`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy`
- Range: Provisional field-electricity screening estimate, replace with meter or engineering records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh/ha crop cycle
  - Basis: irrigation and other field electricity combined
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied irrigation water (`supplied_irrigation_water`)

Use this row only when treated or delivered irrigation water is modelled as a product input; do not also record the same water as a direct elementary withdrawal.

- Selected flow: Supplied irrigation water
- Flow property / unit: Volume / m3
- Amount rule: measured delivered volume at the field boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Range: Provisional irrigation-water screening estimate, replace with metered or water-balance evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha crop cycle
  - Basis: gross water delivered to the field boundary
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct irrigation-water withdrawal (`irrigation_water_withdrawal`)

Use this row only when water is withdrawn directly from the environment; identify source and compartment and do not duplicate supplied water.

- Selected flow: Water withdrawal from environment
- Flow property / unit: Volume / m3
- Amount rule: metered withdrawal or documented pump-flow calculation by source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Range: Provisional direct-withdrawal screening estimate, replace with metered or water-balance evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha crop cycle
  - Basis: gross direct withdrawal at source
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Occupation of agricultural land (`land_occupation`)

Record the occupied field area and crop-cycle duration; any land transformation is a separate elementary flow under the chosen method.

- Selected flow: Occupation of arable land
- Flow property / unit: Area-time / ha·year
- Amount rule: geospatial or field-register area multiplied by the fraction of a year occupied by the crop cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_and_land_records`

#### Outputs

##### Product flows

###### Harvested maize grain transferred to post-harvest preparation (`harvested_maize_transfer`)

Record harvested shelled-grain mass and moisture before on-farm cleaning or drying, avoiding inclusion of whole-crop forage mass.

- Selected flow: Harvested maize grain, field-edge transfer
- Flow property / unit: Mass / kg
- Amount rule: measured harvested grain mass with contemporaneous moisture measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output`
- Range: Provisional grain-yield screening estimate, replace with weighbridge records and reviewed regional evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 30
  - Unit: t as-received grain/ha crop cycle
  - Basis: harvested shelled-grain mass at measured moisture
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removed crop residues crossing the gate (`removed_crop_residues`)

Record stover, cobs, husks, or other residues as a product output only when measured, removed from the field or farm system, and transferred for a documented use.

- Selected flow: Maize crop residues, removed
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured removed mass corrected to dry matter; zero when residues remain, are incorporated, burned, or grazed in situ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_and_land_records`

##### Waste flows

##### Elementary flows

###### Nitrous oxide from managed soil (`direct_and_indirect_n2o`)

Calculate direct and relevant indirect N2O from collected N additions, residue N, management, climate, soil, volatilization, and leaching data using the selected IPCC tier or a documented superior regional method.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: `calc_managed_soil_n2o`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_activity_data`
- Sources: `ipcc-2019-managed-soils`

###### Ammonia from fertilization and crop residues (`field_ammonia`)

Calculate NH3 by fertilizer type and application conditions and, where relevant, from crop residues left on the surface, using a regional method consistent with EMEP/EEA guidance or a documented superior method.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg NH3
- Amount rule: `calc_field_ammonia`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_activity_data`
- Sources: `eea-emep-agricultural-soils-2023`

###### Nitrogen leached or lost in runoff (`nitrate_leaching`)

Calculate N leaching and runoff only where the selected method and climate or irrigation conditions make the pathway applicable; preserve N mass before conversion to the selected nitrate or nitrogen flow.

- Selected flow: Nitrate or nitrogen to water
- Flow property / unit: Mass / kg N or kg nitrate, convention declared
- Amount rule: `calc_n_leaching`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_activity_data`
- Sources: `ipcc-2019-managed-soils`

###### Carbon dioxide from lime and urea (`lime_urea_co2`)

Calculate CO2 from urea fertilization and carbonate-containing liming materials when applied; do not include unrelated fuel-combustion CO2 in this row.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg CO2
- Amount rule: `calc_lime_urea_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha and crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_activity_data`
- Sources: `ipcc-2019-managed-soils`

### Process: On-farm preparation to farm gate (`farm_gate_preparation`)

#### Inputs

##### Product flows

###### Harvested maize received from the field (`harvested_maize_input`)

Transfer the measured harvested grain and moisture from `harvested_maize_transfer` without creating an upstream burden a second time.

- Selected flow: Harvested maize grain, field-edge transfer
- Flow property / unit: Mass / kg
- Amount rule: equal to the internal transfer output from `field_cultivation_and_harvest`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per post-harvest process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_output`

###### Post-harvest fuels and thermal energy (`postharvest_fuel_heat`)

Record fuel or purchased heat for drying and storage only when used before the declared farm gate, with dryer technology and inlet and outlet moisture.

- Selected flow: Drying and storage fuel or heat
- Flow property / unit: Energy / MJ; original fuel quantity retained
- Amount rule: measured fuel, heat-meter, invoice, or engineering record attributable to the grain lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net farm-gate grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_operations`
- Range: Provisional drying-and-storage heat screening estimate, replace with lot and equipment records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg net farm-gate grain
  - Basis: all thermal energy used before the gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Post-harvest electricity (`postharvest_electricity`)

Record electricity for drying fans, aeration, conveying, cleaning, weighing, and storage only when used before the gate.

- Selected flow: Electricity supplied to post-harvest operations
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated facility meter consumption using recorded equipment time and power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net farm-gate grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_operations`
- Range: Provisional post-harvest electricity screening estimate, replace with meter or engineering records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg net farm-gate grain
  - Basis: drying, aeration, conveying, cleaning, weighing, and storage before the gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`farm_gate_packaging`)

Record bags, liners, pallets, or other packaging only when supplied with the grain at the gate; packaging mass is excluded from the reference product mass.

- Selected flow: Farm-gate grain packaging materials
- Flow property / unit: Mass / kg by material
- Amount rule: purchased or issued packaging reconciled to packed output, net of reuse and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net farm-gate grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_operations`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net maize grain at farm gate (`reference_maize_grain`)

This is the reference output: saleable shelled maize grain after the on-farm operations actually performed, with moisture and quality qualifiers declared.

- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg net product at declared moisture, or measured output normalized to 1 kg using `calc_moisture_correction`
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Screenings and rejected grain (`screenings_and_rejects`)

Record dry-matter loss, foreign matter, damaged grain, and rejected grain by measured fate. Reclassify a measured output as a co-product rather than waste when it has a documented beneficial destination and the allocation rule applies.

- Selected flow: Grain screenings and rejects
- Flow property / unit: Mass / kg at measured moisture and kg dry matter
- Amount rule: measured outgoing waste or reject mass, moisture-corrected for reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested maize input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_operations`
- Range: Provisional screenings-and-rejects screening estimate, replace with lot mass-balance records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg harvested maize input
  - Basis: as dry-matter-equivalent fraction of harvested grain input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all multifunctional foreground processes | Avoid allocation by subdividing separately metered operations and assigning inputs, energy, emissions, and losses directly to maize grain, removed residues, or another output whenever records permit. | `eu-pef-2021`; `fao-leap-feed-2016` |
| `allocation_physical_then_other` | inseparable joint production | When subdivision is not possible, use a documented causal or biophysical relationship that represents the driver of the shared inputs or emissions. If no defensible physical relationship exists, use a documented other relationship such as relative economic value and provide a sensitivity result when the allocation materially affects the profile. | `eu-pef-2021`; `fao-leap-feed-2016` |
| `allocation_residue_status` | maize stover, cobs, husks, and screenings | Residues retained, incorporated, burned, or grazed in situ are management pathways, not co-products leaving the system. Allocate upstream burdens to a removed residue only when its measured quantity, destination, product or waste status, and the selected allocation relationship are documented. | `fao-leap-feed-2016`; `ipcc-2019-managed-soils` |
| `allocation_storage_energy` | shared drying and storage facilities | Submeter energy where possible. Otherwise allocate only the measured shared consumption to the maize lot using a documented physical driver such as metered operating time, grain mass processed, moisture removed for drying, or volume-time occupied for storage. | `eu-pef-2021` |
| `allocation_rotation_and_infrastructure` | rotations and shared capital services | Follow the selected LCA method for burdens or credits shared across crop rotations, land-management changes, machinery, and infrastructure; state the period, denominator, allocation factor, and excluded capital items. | `eu-pef-2021`; `fao-leap-feed-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_cultivation_and_harvest` | seed, fertilizer, amendment, and crop-protection inputs | invoices, stock issues, application logs, product labels, nutrient analyses | field_id; date; product; supplier; lot; mass_or_volume; formulation; N_P_K_convention; active_ingredient; returned_quantity | reconcile purchased and issued quantities to field application records and retain product specifications | kg; L; kg N; kg P2O5 or kg P; kg K2O or kg K; kg active ingredient | each receipt and application | complete crop cycle | every field in dataset population | sum by product and field, subtract documented returns, then area-weight or output-weight only after field-level reconciliation | invoices; stock ledger; calibrated scales or meters; application log; label or laboratory analysis |
| `cp_field_energy` | `field_cultivation_and_harvest` | field fuel and electricity | fuel issues, invoices, machinery or contractor logs, electricity meters | field_id; operation; equipment; fuel_type; quantity; electricity_kWh; hours; contractor_scope; meter_boundary | direct metering preferred; otherwise engineering calculation from equipment records with assumptions retained | L; kg; MJ; kWh; h | each operation or billing period | complete crop cycle | owned and contracted operations for all included fields | sum by energy carrier and operation; prevent overlap between contractor service, fuel supply, and direct combustion | invoices; tank balance; meter readings; telematics; contractor declaration; equipment rating |
| `cp_water_records` | `field_cultivation_and_harvest` | irrigation water | withdrawal meters, delivery records, pump logs, irrigation schedules | source; compartment; field_id; date; meter_start; meter_end; flow_rate; runtime; delivered_volume; treatment_status | meter direct withdrawal or delivered water; use pump-flow calculation only when meter evidence is unavailable | m3 | each irrigation event | complete crop cycle | all irrigated fields and water sources | sum by source and field; report conveyance losses separately when within the boundary; never duplicate supplied and directly withdrawn water | calibrated meter; abstraction permit; delivery invoice; pump test; irrigation log |
| `cp_crop_and_land_records` | `field_cultivation_and_harvest` | crop identity, land, management, and residues | field register, geospatial boundary, crop log, soil and residue records | field_id; area_ha; sowing_date; harvest_date; cultivar; previous_crop; prior_land_use; tillage; soil; residue_mass; residue_moisture; residue_destination; land_change_date | identify every field polygon and reconcile managed area, crop dates, and residue pathways | ha; dates; kg; percent moisture | field setup, each material management event, and harvest | complete crop cycle plus method-required land-history period | every included field | retain field-level records; aggregate only after checking area overlap and crop-cycle completeness | field maps; land register; geospatial files; crop logs; weigh records; soil or residue analyses |
| `cp_harvest_and_output` | `field_cultivation_and_harvest` | harvested and saleable maize output | combine monitor, weighbridge, scale tickets, moisture tests, sales or transfer records | field_id; lot_id; gross_mass; tare; net_mass; moisture_percent; moisture_basis; sampling_time; harvested_form; transfer_destination | weigh each lot and measure representative moisture at transfer; reconcile field totals to farm-gate lots | kg; t; percent wet basis | each harvest or transfer lot | complete harvest and all included deliveries | every included field and lot | sum net mass by lot; retain measured moisture; calculate dry matter and any common-moisture mass separately | calibrated weighbridge or scales; calibrated moisture meter or laboratory result; lot tickets |
| `cp_emission_activity_data` | `field_cultivation_and_harvest` | managed-soil and field emissions | linked nutrient, residue, soil, climate, irrigation, and application records | synthetic_N; organic_N; residue_N; fertilizer_type; application_method; incorporation_delay; soil_pH; climate_zone; leaching_condition; lime_type; lime_mass; urea_mass; regional_factor_set | join field activity data to the selected IPCC or regional emission method without replacing measured activity with defaults | kg N; kg product; kg C; ha; dates | each application and crop cycle | complete crop cycle and factor-representative climate period | every field or justified homogeneous stratum | calculate by field and source pathway before aggregation; retain factor version, tier, units, and conversions | application logs; nutrient analyses; soil tests; climate or regional classification; method and factor citation |
| `cp_postharvest_operations` | `farm_gate_preparation` | cleaning, drying, aeration, storage, packaging, losses, and farm-gate output | lot mass balance, moisture tests, meters, fuel records, storage logs, packaging records | lot_id; input_mass; input_moisture; output_mass; output_moisture; screenings_mass; reject_mass; fuel; heat; electricity; storage_start; storage_end; capacity; packaging_mass; destination | follow lots through each included operation and reconcile mass, dry matter, energy, losses, and storage duration | kg; percent wet basis; MJ; kWh; m3; days | each lot and operation; storage at least monthly and at entry and exit | harvest through declared farm gate | every included lot, dryer, store, and packing line | moisture-correct before classifying dry-matter loss; allocate shared energy with recorded physical driver; aggregate only reconciled lots | calibrated scales; moisture meter or laboratory result; energy meter; invoices; dryer and storage logs; inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_correction` | grain compared at different moisture contents | For wet-basis moisture fractions MC, dry matter equals M_as_received × (1 − MC_as_received); mass at a declared reference moisture equals dry_matter ÷ (1 − MC_reference). Keep measured mass and moisture and do not classify the calculated water difference as product loss. | measured mass; measured moisture; moisture convention; declared reference moisture | dry-matter-equivalent mass and mass at declared moisture | `fao-postharvest-loss-2019`; `fao-grain-drying` |
| `calc_saleable_yield` | field crop output | Saleable yield equals moisture-consistent net farm-gate grain mass divided by harvested area; report harvested and saleable yield separately when screenings, rejects, or storage loss occur. | net farm-gate grain mass; farm-gate moisture; harvested area; screenings and rejects | kg or t grain per ha at declared moisture | `faostat-crops-production` |
| `calc_pumping_electricity` | irrigation pumping without direct metering | Use measured flow and runtime with pump power, or a documented hydraulic-energy calculation with head and verified efficiency; retain source measurements and uncertainty and do not substitute the provisional range for records. | water volume or flow and runtime; pump power or head and efficiency | kWh irrigation electricity |  |
| `calc_managed_soil_n2o` | direct and indirect N2O | Apply the most specific accepted country or regional Tier 2 or Tier 3 method. Otherwise apply the disclosed IPCC 2019 Tier 1 equations and factors to synthetic N, organic N, crop-residue N, relevant soil-N mineralization, volatilization, and leaching pathways; preserve N2O-N to N2O conversion. | synthetic N; organic N; residue N; soil and climate class; volatilization and leaching applicability; selected factors | kg N2O by direct and indirect pathway | `ipcc-2019-managed-soils` |
| `calc_field_ammonia` | NH3 from fertilizer and residues | Apply fertilizer-type and application-condition factors from an accepted regional inventory method; calculate residue NH3 only for the applicable surface-residue pathway and keep NH3-N and NH3 units explicit. | N by fertilizer type; soil pH; application and incorporation; residue N; surface duration; regional factors | kg NH3 by source pathway | `eea-emep-agricultural-soils-2023` |
| `calc_n_leaching` | N leaching and runoff | Use a locally accepted nutrient-loss model when available; otherwise apply the disclosed IPCC leaching and runoff fraction only where climatic and irrigation conditions make it applicable, and state conversion between kg N and the selected nitrate or nitrogen flow. | susceptible N inputs; leaching applicability; selected fraction; molecular-mass convention | kg N leached and selected water-emission flow | `ipcc-2019-managed-soils` |
| `calc_lime_urea_co2` | lime and urea application | Calculate CO2 from the carbon content or IPCC factors for the measured amount and type of limestone, dolomite, other carbonate material, and urea; report zero only with evidence that none was applied. | lime type and mass; urea mass; carbon content or selected factor | kg CO2 to air | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and dataset population | Product is non-seed shelled maize grain within CPC 01122; every included field and lot belongs to the declared crop cycle, geography, and farm-gate population. | field and lot registers; product description; CPC scope; sales or transfer records |
| `dq_temporal` | activity data | Cover at least one complete crop cycle from field start through all included farm-gate lots; disclose atypical weather, partial fields, carry-over storage, and whether multi-year averaging is used. | dated crop logs; invoices; meters; harvest and storage records; climate description |
| `dq_completeness` | inventory | Reconcile all material input, energy, water, output, residue, waste, and direct-emission activity records within the boundary; list exclusions and quantify or explain every material data gap. | reconciliation tables; meter and invoice coverage; LEAP completeness and data-quality review |
| `dq_mass_moisture` | harvest and post-harvest balance | Reconcile grain input, net product, screenings, rejects, dry-matter loss, and moisture change by lot; a decrease in water during drying is not dry-matter loss. | calibrated weights; moisture tests; lot balance; `calc_moisture_correction` |
| `dq_geography_technology` | upstream datasets and factors | Match geography, irrigation status, tillage, crop-management technology, energy supply, and emission-factor region; document every proxy and why it is the best available match. | dataset metadata; factor documentation; proxy register |
| `dq_uncertainty` | measured, calculated, and allocated values | Retain measurement precision, sampling basis, missing-data treatment, factor uncertainty, allocation sensitivity, and provisional-range replacements; distinguish collected records from defaults and proxies. | calibration records; sampling plan; uncertainty or range fields; allocation sensitivity |
| `dq_source_priority` | external methods and benchmarks | Use applicable official standards, guidance, and datasets before lower-tier evidence; record source version or publication identity and access date, and do not treat search snippets or author estimates as external evidence. | source register and source ids in this PCR |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | product identity | Confirm the output is shelled unprocessed maize grain other than planting seed and that the reference product flow resolves to Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`; reject seed, sweet-corn, forage or silage, and processed-product substitutions. |  |
| `validation_reference_flow` | functional unit and reference flow | Confirm exactly 1 kg net grain at the declared farm gate, with moisture percentage and convention, reference moisture when corrected, crop cycle, geography, grade or intended-use class, included post-harvest operations, storage duration when applicable, and net-of-packaging status. | `fao-postharvest-loss-2019`; `codex-maize-cxs-153` |
| `validation_process_identity` | TianGong process reference | Treat process `47013f74-294a-40d7-aefb-89221c484af4` only as a regional cultivation identity candidate. Before use, verify its geography, technology, system boundary, and that its reference output resolves to the exact CPC 01122 Corn flow; otherwise construct or select a conforming foreground process and do not silently use the candidate. |  |
| `validation_boundary` | process and inventory completeness | Confirm both required process sections are represented, every actual on-farm operation before the gate is included, off-farm downstream processing is excluded or separately identified, and upstream datasets or disclosed proxies exist for every technosphere input. | `fao-leap-feed-2016`; `eu-pef-2021` |
| `validation_water` | irrigation inventory | Confirm supplied water and direct environmental withdrawal are not both used for the same volume; identify source, compartment, measured quantity, pumping energy, and any within-boundary conveyance loss. |  |
| `validation_nutrients_emissions` | fertilizer, soil, and field emissions | Reconcile formulated fertilizer and organic amendment records to nutrient N; confirm selected tiers, factors, applicability, units, and conversions for N2O, NH3, leaching or runoff, and lime or urea CO2; report omitted material pathways as inconclusive rather than zero. | `ipcc-2019-managed-soils`; `eea-emep-agricultural-soils-2023` |
| `validation_mass_balance` | harvest and post-harvest lots | Reconcile harvested grain dry matter with farm-gate product, removed co-products, screenings, rejects, and measured dry-matter loss; separate moisture removal from loss and investigate any unexplained imbalance. | `fao-postharvest-loss-2019`; `fao-grain-drying` |
| `validation_allocation` | multifunctional processes | Verify subdivision was attempted first; where allocation remains, record output status, selected physical or other relationship, factor, period and prices when relevant, and sensitivity for material choices. | `eu-pef-2021`; `fao-leap-feed-2016` |
| `validation_human_food_claim` | grain claimed to conform to Codex CXS 153-1985 | Apply the standard only when human-food conformity is claimed; then verify the declared moisture limit, safety and suitability, abnormal odour or flavour, living insects, filth, and other applicable specification fields. Do not apply the 15.5 percent moisture limit as a universal rule for feed or industrial grain. | `codex-maize-cxs-153` |
| `validation_data_quality` | final data package | Report accepted inputs, checks performed, checks skipped, findings, proxies, remaining provisional estimates, and completeness. Missing critical identity, mass, moisture, boundary, allocation, or emission-method evidence makes validation inconclusive or failed, not complete. | `fao-leap-feed-2016`; `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground crop-production data package and publishable cradle-to-farm-gate maize-grain dataset |
| downstream_use | `secondary_dataset`; `background_dataset`; source for downstream `process` and `lifecyclemodel` projections when scope and representativeness match |
| allowed_use | Attributional modelling of non-seed maize grain at farm gate for the declared geography, crop cycle, moisture, grade or intended-use class, technology, and allocation basis; aggregation only after compatibility checks |
| excluded_use | Planting seed, sweet corn, forage or silage maize, processed maize products, unsupported geography or technology, farm-to-market distribution, and comparative or public claims without the review required by the applicable programme |
| required_metadata | PCR id; CPC 01122 scope; reference flow UUID; process identities used; geography; field population; crop year and dates; cultivar or hybrid when known; previous crop and relevant land history; tillage; rainfed or irrigated status; water source; input and energy regime; harvested and saleable yield; moisture convention and values; grade or intended use; residue pathway; allocation; gate; included post-harvest operations; storage duration; emission methods and factor versions; upstream datasets and proxies |
| required_quality_disclosure | Coverage and reconciliation; measurement and sampling methods; calibration; temporal, geographic, and technological representativeness; mass and moisture balance; uncertainty; data gaps; provisional `reasoned_estimate` ranges replaced or retained; allocation sensitivity; skipped validation checks |
| update_trigger | New crop-cycle data; changed field population, geography, cultivar, irrigation, tillage, nutrient or crop-protection regime; changed yield or moisture basis; new drying or storage technology; changed residue or co-product destination; revised allocation; new upstream datasets; revised official emission method or factor; resolved provisional evidence gap; material QA failure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-feed-2016` | `official_guidance` | FAO LEAP Partnership. *Environmental performance of animal feeds supply chains: Guidelines for assessment*. https://openknowledge.fao.org/server/api/core/bitstreams/6a82c7ca-8e71-426a-9994-557fd854b241/content (accessed 2026-08-07). | Cradle-to-gate crop/feed system boundary, inventory completeness, primary-data preference, data-quality dimensions, subdivision, and co-product handling |
| `ipcc-2019-managed-soils` | `official_guidance` | IPCC. *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf (accessed 2026-08-07). | Direct and indirect N2O pathways, N activity data, volatilization and leaching applicability, and CO2 from lime and urea |
| `eea-emep-agricultural-soils-2023` | `official_guidance` | European Environment Agency. *EMEP/EEA air pollutant emission inventory guidebook 2023*, 3.D Crop production and agricultural soils. https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-d-agricultural-soils-2023/@@download/file (accessed 2026-08-07). | NH3 and NO activity data and calculation pathways for fertilizer application and crop residues |
| `eu-pef-2021` | `official_guidance` | European Commission. Commission Recommendation (EU) 2021/2279, consolidated text and Annex I Product Environmental Footprint method. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02021H2279-20211230 (accessed 2026-08-07). | Functional-unit framing, life-cycle inventory and data-quality expectations, subdivision and allocation hierarchy, shared electricity and storage allocation, and disclosure |
| `codex-maize-cxs-153` | `standard` | Codex Alimentarius Commission. *Standard for Maize (Corn), CXS 153-1985*, adopted 1985, revised 1995 and amended 2019. https://www.fao.org/input/download/standards/51/CXS_153e.pdf (accessed 2026-08-07). | Conditional human-food product specification, moisture and quality qualifiers; not a universal feed or industrial-grain requirement |
| `fao-grain-drying` | `handbook` | FAO. *Agricultural engineering in development: Drying* and *Monitoring grain*. https://openknowledge.fao.org/server/api/core/bitstreams/aa7e0adf-5bbb-4f73-bb2d-70d3d5802703/content/T0522E08.htm and https://www.fao.org/3/t0522e/T0522E0a.htm (accessed 2026-08-07). | Conditional drying and storage boundary, instrument-based moisture measurement, and safe-storage moisture selection |
| `fao-postharvest-loss-2019` | `official_guidance` | FAO. *Guidelines on the measurement of harvest and post-harvest losses*. https://openknowledge.fao.org/server/api/core/bitstreams/bd596c08-1202-4745-b23d-07bb5dc84b06/content (accessed 2026-08-07). | Lot mass balance, moisture-consistent loss measurement, and separation of drying water loss from dry-matter loss |
| `faostat-crops-production` | `dataset` | FAO. *FAOSTAT: Crop Production, Yield, Harvested Area and Processed*, global national annual dataset. https://data.apps.fao.org/catalog/dataset/crop-production-yield-harvested-area-and-processed-global-national-annual-faostat/resource/baad642c-1067-4a94-85ff-9a664fffba58 (accessed 2026-08-07). | Geography- and year-matched yield and harvested-area plausibility checks; not a substitute for foreground yield records |
