---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rice, seed

## 1. Scope and Applicability

This PCR governs foreground data packages for rice seed produced for sowing. It covers multiplication of declared parent seed, field production, harvest, drying, cleaning and grading, lot testing and release, optional seed treatment, packaging, and storage up to the producer or processor dispatch gate. The concrete data package shall identify the production geography, crop year, variety or hybrid, seed generation or class, certification or quality-assurance scheme, treatment state, packaging state, and release criteria.

Rice grain produced for food, feed, milling, brewing, or other non-sowing uses is outside scope. Milled rice, rice bran, rice husk sold as a separate product, seedlings and transplants, and genebank accessions maintained primarily for conservation are outside scope. Downstream commercial rice cultivation after the seed leaves the dispatch gate is outside the foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed |
| classification_refs | CPC 3.0:01131 (Rice, seed) |
| covered_products | Seed of Oryza species intended for sowing, including hybrid and non-hybrid lots and declared breeder, foundation, registered, certified, or equivalent seed classes when produced for sale or transfer as planting seed |
| excluded_products | Paddy or rice grain not released for sowing; milled rice and milling products; seedlings and transplants; conservation-only genebank accessions |
| representative_product | Quality-assured rice seed, dried, cleaned, graded, lot-tested, and released for sowing |
| production_route | Parent-seed receipt and identity control; seed-crop establishment and field management; harvest; drying; cleaning and grading; optional treatment; lot testing, packaging, and storage to dispatch |
| market_state | Saleable or transferable seed lot at producer or seed-processor dispatch gate, bulk or packaged as declared, untreated or treated as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Rice seed released for sowing at the producer or seed-processor dispatch gate |
| How much | 1,000 kg net seed product |
| How well | Lot satisfies the declared jurisdiction, certification or quality-assurance scheme, sampling method, analytical purity, varietal identity or purity, germination, moisture, seed-health, and treatment requirements applicable to that lot |
| How long or cycle | One declared seed multiplication, conditioning, release, and included storage campaign |
| reference_flow_link | rf_rice_seed_at_dispatch |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; crop year and season; Oryza species and variety or hybrid; seed generation or class; certification or quality-assurance scheme; lot identifier; sampling and test method; analytical purity; varietal identity or purity; germination; moisture content and basis; seed-health status where required; treatment active ingredient and loading or untreated declaration; packaging state; dispatch gate and included storage duration |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the net mass of released rice seed; exclude packaging mass. Normalize inventory quantities to 1,000 kg of released seed. |
| `moisture_declaration` | Harvested, conditioned, and released seed mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass as received at the measured moisture content and report moisture on the declared test basis. Do not silently convert to dry matter. If dry-matter comparison is used, retain the original mass and moisture and state the conversion formula. |
| `mass_unit_conversion` | Mass records supplied in g or t | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the confirmed mass unit group: 1 t = 1,000 kg and 1 g = 0.001 kg. Preserve source units in raw records. |
| `seed_count_conversion` | Seed counts converted to mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts only with a lot- or variety-specific thousand-seed mass measured for the represented lot; retain sample result, moisture, and calculation. |
| `nutrient_and_active_ingredient_basis` | Fertilizers and crop-protection or seed-treatment products | Declared product mass and constituent mass | kg | Record formulated product mass and, separately, calculated nutrient or active-ingredient mass. Never substitute kg product for kg N, P, K, or active ingredient. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | foreground_system_boundary | Include parent-seed receipt and identity control, seed-crop establishment and field management, direct field emissions, harvest and field handling, reception, drying, cleaning and grading, lot sampling and testing, optional treatment when applied, packaging, and storage up to the declared dispatch gate. | `fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018` |
| `boundary_upstream_inputs` | upstream_technosphere | Include upstream production and delivery of parent seed, fertilizers, soil amendments, crop-protection products, fuels, electricity, irrigation supply, drying energy, treatment products, and packaging through geographically and technologically appropriate datasets. | `eu-pef-2021` |
| `boundary_direct_field_emissions` | rice_field_emissions | Quantify rice-field CH4 for flooded or otherwise methane-relevant production and direct and indirect N2O from managed-soil nitrogen inputs using measured emissions or a declared, current, geographically appropriate method. Record all activity data and factors and avoid duplicate elementary-flow reporting. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils` |
| `boundary_land_and_carbon_change` | land_use_and_soil_carbon | Include land-use change, peat or organic-soil drainage, and soil-carbon change when applicable to the represented site and study goal; otherwise disclose the screening basis and exclusion. | `ipcc-2019-cropland` |
| `boundary_excluded_downstream` | excluded_downstream | Exclude transport after the dispatch gate, downstream sowing and commercial rice cultivation, use of the harvested commercial crop, and end-of-life of downstream products. Capital goods and breeding research are excluded unless the study goal, applicable program rules, or a materiality assessment requires them. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Parent rice seed entering the multiplication cycle, with supplier, variety or parental line, seed generation or class, treatment state, lot identity, mass, moisture, and quality status declared |
| starting_condition_role | Upstream technosphere input and seed genealogy anchor |
| product_classification_scope | Rice seed intended for sowing under CPC 3.0:01131, independent of local certification terminology |
| recursive_input_rule | Record same-category parent seed as a distinct upstream input with its actual generation or class. Do not make the current data package its own provider and do not recursively apply the same reference output as an unbounded self-loop. |
| upstream_dataset_requirement | Link a separately represented parent-seed dataset with compatible geography, generation, treatment, and quality scope; if unavailable, disclose the data gap, proxy, and cut-off effect rather than assigning zero burden. |
| disclosure | Declare parent-seed generation or class, supplier and geography, seed rate, treatment, any proxy dataset, excluded generations, and whether hybrid parental lines or non-hybrid seed were used. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | Rice seed-crop production and harvest | `required` | Always | Foreground multiplication, field management, harvest, and direct agricultural emissions | Measured harvested seed-crop mass and cultivated area linked to the released lot |
| `seed_conditioning` | Seed reception, drying, cleaning, and grading | `required` | Always | Foreground conditioning and separation of saleable seed from downgraded material and waste | Measured conditioned-seed mass leaving cleaning and grading |
| `lot_release_packaging_storage` | Lot release, optional treatment, packaging, and storage | `required` | Always; untreated, bulk, and zero-storage routes retain explicit zero or not-applicable records | Foreground testing, release, final preparation, and dispatch | 1,000 kg net released rice seed at dispatch gate |

### Process: Rice seed-crop production and harvest (`seed_crop_production`)

#### Inputs

##### Product flows

###### Parent rice seed for multiplication (`parent_rice_seed`)

Parent seed crosses the foreground boundary as the controlled biological input for the declared generation or class.

- Selected flow: Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Flow property / unit: Mass / kg
- Amount rule: measured parent-seed mass assigned to the represented field and released lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `oecd-seed-schemes-2026`
- Range: Provisional parent-seed screening estimate, replace with lot records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilizers and soil amendments (`fertilizer_products`)

Record each formulated fertilizer and amendment separately and retain product composition so nutrient inputs and managed-soil emissions can be calculated without conflating product and nutrient mass.

- Selected flow: Geography- and formulation-specific fertilizer or soil-amendment product flows selected during data-package implementation
- Flow property / unit: Mass / kg product; constituent mass / kg N, P, K, or other declared constituent
- Amount rule: measured purchases or application records reconciled to field and lot, with nutrient content calculated by `calc_nutrient_mass`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad provisional formulated-product screening estimate, replace with regional evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg formulated product
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_products`)

Record each herbicide, insecticide, fungicide, molluscicide, biological control, or other crop-protection product applied to the represented seed crop.

- Selected flow: Product-specific crop-protection flows selected during data-package implementation
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: measured application records with active-ingredient mass calculated from formulation concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources:
- Range: Broad provisional formulated-product screening estimate, replace with regional evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg formulated product
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water`)

Record delivered irrigation water once. Distinguish abstracted water, delivery losses, and purchased water to prevent double counting between elementary and product flows.

- Selected flow: Geography- and source-specific irrigation-water supply flow selected during data-package implementation
- Flow property / unit: Volume / m3
- Amount rule: metered delivery, pumping records, or field water balance for the represented crop and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources:
- Range: Broad provisional irrigation screening estimate, replace with water-regime evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field fuels (`field_fuels`)

Record fuel by type for land preparation, transplanting or direct seeding, crop care, pumping, harvest, and field handling when fuel crosses the foreground boundary.

- Selected flow: Fuel-specific product flows selected for the declared geography and supply route
- Flow property / unit: Mass / kg or energy / MJ, with original purchased unit retained
- Amount rule: measured fuel issue, invoice, or equipment log reconciled to the represented field and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources:
- Range: Broad provisional fuel screening estimate, replace with regional equipment evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg fuel
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field electricity (`field_electricity`)

Record electricity used for pumping and other field operations with a geography- and time-representative supply mix.

- Selected flow: Electricity supply flow selected for the declared geography and voltage level
- Flow property / unit: Energy / kWh
- Amount rule: measured meter, invoice, or equipment power-and-runtime calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources:
- Range: Broad provisional field-electricity screening estimate, replace with pumping records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested rice seed crop entering conditioning (`harvested_seed_crop`)

Record harvested seed-bearing paddy assigned to the represented lot before final drying, cleaning, and grading, with moisture and impurities declared.

- Selected flow: Harvested rice seed crop, lot-specific intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: measured reception or harvest mass linked to the released lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_outputs`
- Sources: `fao-seeds-toolkit-processing-2018`
- Range: Broad provisional mass-balance screening estimate, replace with lot yield records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 3000
  - Unit: kg harvested seed crop
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rice straw and other field co-products (`field_coproducts`)

Record each harvested or marketed field co-product separately; material left on or returned to the field is an internally managed residue, not a product output unless it crosses the process boundary.

- Selected flow: Co-product-specific flow selected during data-package implementation
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated dry or as-received mass with moisture basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_outputs`
- Sources:
- Range: Broad provisional co-product screening estimate, replace with field records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg co-product
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Methane emitted from rice cultivation (`field_ch4`)

Calculate CH4 for methane-relevant rice production from cultivated area, cultivation period, water regime during and before cultivation, organic amendments, and the selected emission factor method.

- Selected flow: Methane to the applicable air compartment selected during data-package implementation
- Flow property / unit: Mass / kg CH4
- Amount rule: `calc_rice_field_ch4`; use measured site emissions when representative, otherwise a declared IPCC Tier 1 or higher method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-cropland`

###### Nitrous oxide emitted from managed soils (`field_n2o`)

Calculate direct and applicable indirect N2O from synthetic and organic N, crop residues, mineralization, volatilization, and leaching or runoff without double counting background fertilizer production.

- Selected flow: Dinitrogen monoxide to the applicable air compartment selected during data-package implementation
- Flow property / unit: Mass / kg N2O
- Amount rule: `calc_managed_soil_n2o`; use measured site emissions when representative, otherwise a declared IPCC Tier 1 or higher method and convert N2O-N to N2O where required
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-managed-soils`

### Process: Seed reception, drying, cleaning, and grading (`seed_conditioning`)

#### Inputs

##### Product flows

###### Harvested rice seed crop received (`received_seed_crop`)

Receive and identify the harvested lot before drying and separation; preserve its link to field, crop year, variety, and generation.

- Selected flow: Harvested rice seed crop, lot-specific intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: measured reception mass with moisture and impurity fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seeds-toolkit-processing-2018`

###### Conditioning electricity (`conditioning_electricity`)

Record electricity for conveying, fans, drying, cleaning, grading, dust control, and supporting equipment.

- Selected flow: Electricity supply flow selected for facility geography and voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered or allocated facility electricity for the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seeds-toolkit-processing-2018`
- Range: Broad provisional conditioning-electricity screening estimate, replace with facility records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying fuel or heat (`drying_energy`)

Record each fuel or purchased-heat input used to reduce seed moisture; preserve fuel type and combustion location.

- Selected flow: Fuel- or heat-specific product flow selected during data-package implementation
- Flow property / unit: Energy / MJ or fuel mass / kg
- Amount rule: measured fuel or heat use assigned to the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seeds-toolkit-processing-2018`
- Range: Broad provisional drying-energy screening estimate, replace with dryer records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: MJ
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned rice seed candidate lot (`conditioned_seed`)

Record clean, graded seed awaiting or passing lot release, with moisture, purity, germination, and varietal status linked to the lot.

- Selected flow: Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned-seed mass linked to lot-release records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seeds-toolkit-quality-2018`; `irri-rice-seed-quality`

###### Downgraded seed or grain co-product (`downgraded_seed_product`)

Record rejected material as a product only when it is sold or transferred for a documented beneficial use and meets that receiving market's specification.

- Selected flow: Destination-specific downgraded grain or other co-product flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition category
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Broad provisional downgraded-product screening estimate, replace with lot mass balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cleaning rejects requiring treatment (`conditioning_waste`)

Record inert matter, diseased or damaged seed, dust collected as waste, and other rejects as waste when no beneficial product destination is documented.

- Selected flow: Destination- and treatment-specific waste flow selected during data-package implementation
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by waste treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seeds-toolkit-processing-2018`
- Range: Broad provisional conditioning-waste screening estimate, replace with lot mass balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Lot release, optional treatment, packaging, and storage (`lot_release_packaging_storage`)

#### Inputs

##### Product flows

###### Conditioned rice seed entering release (`conditioned_seed_input`)

Record the conditioned lot entering sampling, testing, treatment if applicable, packaging, and included storage.

- Selected flow: Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_storage`
- Sources: `ista-rules-seed-testing-2026`; `oecd-seed-schemes-2026`

###### Seed-treatment product (`seed_treatment_product`)

Include only when the released lot is treated; record formulated product, active ingredient, loading, application loss, and treated mass.

- Selected flow: Product-specific seed-treatment flow selected during data-package implementation
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: measured batch issue and residual reconciliation; zero with untreated declaration when not applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_storage`
- Sources: `fao-seeds-toolkit-processing-2018`
- Range: Broad provisional treatment-product screening estimate, replace with product label and batch records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg formulated product
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record each bag, liner, label, pallet, wrap, or bulk-container share included up to dispatch; use zero with an explicit bulk declaration when no packaging crosses the boundary.

- Selected flow: Material- and geography-specific packaging product flows
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issue per released lot, including losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_storage`
- Sources: `fao-seeds-toolkit-processing-2018`
- Range: Broad provisional packaging screening estimate, replace with bill-of-material records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg packaging
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Release and storage electricity (`release_storage_electricity`)

Record electricity for testing-area support, treatment, packaging, ventilation, humidity control, and storage included before dispatch.

- Selected flow: Electricity supply flow selected for facility geography and voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity over the declared included storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_storage`
- Sources:
- Range: Broad provisional release-and-storage electricity screening estimate, replace with facility records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg released rice seed and declared storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released rice seed at dispatch gate (`released_rice_seed`)

This is the reference output. It is the net seed mass that passed the declared lot-release rules and is ready for sowing at the dispatch gate.

- Selected flow: Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Flow property / unit: Mass / kg
- Amount rule: measured released net seed mass normalized by `calc_reference_normalization`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_packaging_storage`
- Sources: `fao-qds-2006`; `ista-rules-seed-testing-2026`; `oecd-seed-schemes-2026`

##### Waste flows

###### Treatment and packaging waste (`release_packaging_waste`)

Record unused treatment product, contaminated packaging, damaged bags, sweepings, and test residues by actual treatment route.

- Selected flow: Destination- and treatment-specific waste flow selected during data-package implementation
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass and disposition records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released rice seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_storage`
- Sources:
- Range: Broad provisional release-waste screening estimate, replace with facility records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg released rice seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all_multifunctional_processes | Avoid allocation first by collecting lot- and operation-specific data and subdividing field, drying, cleaning, treatment, packaging, and storage operations. Use system expansion only when the added function and substituted product are explicitly justified. | `eu-pef-2021` |
| `allocation_physical_causality` | field_and_conditioning_coproducts | If subdivision or justified system expansion is not possible, allocate only by a documented physical causal relationship that reflects how the input or operation generates released seed and each co-product. Do not select mass merely because mass data are available. | `eu-pef-2021` |
| `allocation_economic_fallback` | field_and_conditioning_coproducts | When no defensible physical causal relationship exists, use economic allocation based on documented, representative prices at the split point. Record price basis, currency, period, geography, moisture and quality state, and sensitivity to price variation. | `eu-pef-2021` |
| `allocation_waste_and_downgraded_material` | rejects_and_residues | Classify a reject as co-product only when a documented beneficial destination and market specification exist. Otherwise treat it as waste and include treatment burdens; do not assign an avoided-product credit without an explicitly justified substitution model. | `eu-pef-2021`; `fao-seeds-toolkit-processing-2018` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_inputs` | `seed_crop_production` | Parent seed, fertilizers, amendments, crop protection, irrigation, fuels, electricity | Field register, supplier document, invoice, meter, and equipment log | field_id; lot_id; area; dates; parent_seed_mass; parent_seed_class; product_name; formulation; nutrient_or_active_fraction; applied_mass; irrigation_volume; fuel_type_and_amount; electricity; allocation_key | Reconcile source documents and field logs to the represented field and released lot; preserve original units and missing-data flags | Native record units plus kg, m3, MJ, and kWh after controlled conversion | Each application or operation; aggregate per field and crop cycle | Entire represented multiplication crop cycle | All fields contributing to the released lot | Sum attributable records; allocate shared operations only by the approved Section 7 rule; normalize after released mass is known | Supplier labels or certificates, calibrated meter evidence, invoice or issue record, operator log, and reconciliation sign-off |
| `cp_crop_outputs` | `seed_crop_production` | Harvested seed crop, straw, and field co-products | Harvest ticket, scale record, moisture test, field map, and disposition record | field_id; lot_id; harvested_mass; moisture; impurity_fraction; straw_mass; residue_management; co_product_mass; destination | Link calibrated scale and moisture results to each contributing field and lot | kg, percent moisture, ha | Each harvest load and final field reconciliation | Harvest period for the represented crop cycle | All contributing fields | Sum loads by lot; retain moisture basis; reconcile products, residues, and losses | Scale calibration, signed ticket, moisture method, field-lot genealogy, and disposition evidence |
| `cp_field_emission_activity` | `seed_crop_production` | CH4 and N2O activity data | Field register, water-management log, amendment and nutrient record, soil or emission measurement | area; cultivation_days; ecosystem; water_regime_during; pre_season_water_regime; organic_amendment_type_rate_and_timing; soil_type; cultivar; synthetic_N; organic_N; residue_N; mineralized_N; volatilization_and_leaching_context; method_and_factor_ids | Collect activity data at the most disaggregated represented field or regime; use measured emissions only when sampling is representative | ha, day, kg amendment, kg N, and method-specific units | Each management event and crop cycle | Full cultivation period plus method-required pre-season period | Each field and water regime contributing to the lot | Calculate separately by field or regime, then sum and normalize to released mass | Complete activity-data sheet, method version, factor source and tier, units, conversion check, and reviewer sign-off |
| `cp_conditioning_records` | `seed_conditioning` | Reception, drying, cleaning, grading, energy, conditioned product, co-products, and waste | Lot ledger, scale, moisture test, meter, fuel issue, machine log, and disposition record | lot_id; input_mass_and_moisture; drying_method; electricity; fuel_or_heat; output_mass_and_moisture; clean_seed_mass; downgrade_mass; waste_mass; destinations; runtime | Reconcile each lot through reception, drying, cleaning, and grading; use submetering where available | kg, percent moisture, kWh, MJ, hour | Each lot and operation | Entire conditioning campaign represented by the dataset | All conditioning sites handling the lot | Mass and energy balance by lot; allocate shared utilities only by the approved Section 7 rule | Scale and meter calibration, moisture test, machine log, lot genealogy, and signed disposition record |
| `cp_release_packaging_storage` | `lot_release_packaging_storage` | Sampling, quality tests, treatment, packaging, storage, released mass, and waste | Sampling record, laboratory certificate, treatment batch, packaging issue, inventory ledger, meter, and dispatch note | lot_id; sampling_method; laboratory; test_dates; purity; varietal_identity_or_purity; germination; moisture; seed_health; treatment_product_and_active; treatment_loading; package_material_and_mass; storage_dates_conditions_and_energy; released_mass; waste | Use the declared national, certification, or ISTA-compatible lot sampling and testing procedure; reconcile batch and dispatch records | kg, percent, kWh, day, and test-specific units | Each lot; storage energy at meter or billing interval | From conditioned-lot receipt through dispatch | Every release, packaging, and storage site for the represented lot | Include only passing released mass in the reference output; normalize all attributed records to 1,000 kg | Authorized sampler or laboratory evidence, test certificate, treatment and packaging reconciliation, storage log, and dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized_amount = attributable_amount / released_net_seed_mass * 1000 kg | attributable_amount; released_net_seed_mass | Inventory amount per 1,000 kg released rice seed |  |
| `calc_nutrient_mass` | Fertilizer and amendment records | constituent_mass = formulated_product_mass * declared_constituent_mass_fraction; keep nutrient convention such as N, P, P2O5, K, or K2O explicit and convert only with a stated stoichiometric factor | product_mass; formulation_or_certificate; constituent_fraction; nutrient_convention | kg of each declared constituent and kg formulated product | `ipcc-2019-managed-soils` |
| `calc_moisture_conversion` | Optional dry-matter comparison | dry_mass = as_received_mass * (1 - moisture_fraction_wet_basis); retain as-received mass and do not replace the reference flow | as_received_mass; moisture_fraction; moisture_basis | Diagnostic dry mass plus retained original values | `irri-rice-seed-quality` |
| `calc_rice_field_ch4` | Methane-relevant rice fields | For each homogeneous field or regime, CH4 = adjusted_daily_emission_factor * cultivation_period * annual_harvested_area; determine the adjusted factor from the declared baseline and applicable water-regime, pre-season, organic-amendment, and higher-tier soil or cultivar scaling factors, then sum fields and normalize to released seed | area; cultivation_days; water_regimes; organic_amendments; soil; cultivar; selected_factor_set | kg CH4 per 1,000 kg released rice seed | `ipcc-2019-cropland` |
| `calc_managed_soil_n2o` | Managed-soil nitrogen inputs | Apply the selected IPCC equations to direct and applicable indirect N2O-N from synthetic and organic N, residues, mineralization, volatilization, and leaching or runoff; convert N2O-N to N2O using 44/28 and normalize to released seed | N inputs by source; residue and mineralization N; volatilization and leaching fractions; selected emission factors | kg N2O per 1,000 kg released rice seed | `ipcc-2019-managed-soils` |
| `calc_allocation` | Shared multifunctional operations | Apply Section 7 hierarchy; record pre-allocation totals, chosen relationship, factor numerator and denominator, allocated totals, and a reconciliation to one | shared inputs_and_outputs; co_product_quantities_or_values; approved_basis | Allocation factors and allocated inventory by product | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_genealogy` | Parent seed, fields, conditioning, and released lot | Maintain an unbroken link among parent-seed lot, variety or parental lines, field, harvest loads, conditioning lot, quality-test sample, package or bulk lot, and dispatch. | Lot genealogy, labels, field inspection, and reconciliation records |
| `dq_measurement` | Mass, moisture, water, energy, and test results | Use calibrated or verified instruments appropriate to the declared method; retain original readings, units, calibration status, and corrections. | Calibration certificate, check standard, laboratory accreditation or authorization, and raw result |
| `dq_seed_quality` | Released product | Report the actual applicable release thresholds and results. FAO QDS, OECD, or ISTA material may support the declared route but shall not override stricter or product-specific national rules; hybrid and non-hybrid requirements shall not be conflated. | Applicable rule or scheme, sampling record, test certificate, and release decision |
| `dq_temporal_representativeness` | Foreground inventory | Cover the full crop cycle and all conditioning and storage included before dispatch. Combine seasons or years only with documented production weighting and variability. | Coverage matrix by field, lot, operation, month, and crop year |
| `dq_completeness` | Important inputs, outputs, emissions, and wastes | Reconcile mass and energy records and disclose every estimated, missing, cut-off, proxy, and zero value. A zero shall mean verified absence, not missing data. | Mass and energy balance, missing-data register, cut-off assessment, and reviewer sign-off |
| `dq_geographic_technology_match` | Background links and factors | Select background datasets and emission factors consistent with production geography, electricity supply, irrigation and water regime, fuel, fertilizer route, conditioning technology, and waste treatment. | Dataset selection record and method-factor record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference_flow | Require product flow UUID `14c42414-b19b-47c4-863f-1b86b50ff6bf`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1,000 kg net released seed after normalization. UUIDs shall not include dataset versions. |  |
| `validation_required_qualifiers` | reference_flow_and_metadata | Fail when any required qualifier is absent or when hybrid or non-hybrid route, seed class, treatment, packaging, moisture basis, or dispatch gate is ambiguous. | `fao-qds-2006`; `oecd-seed-schemes-2026` |
| `validation_process_coverage` | process_inventory | Require all three process-map entries and a field-to-lot-to-dispatch genealogy. Conditional activities shall be represented by measured values, explicit zero or not-applicable status, or a documented exclusion. | `fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018` |
| `validation_mass_balance` | crop_conditioning_and_release | Require lot-level mass reconciliation across harvested input, conditioned seed, released seed, co-products, waste, samples, moisture change, and documented losses. Investigate unexplained imbalance rather than forcing closure. | `fao-seeds-toolkit-processing-2018` |
| `validation_seed_quality` | lot_release | Require representative lot sampling and documented purity, varietal identity or purity, germination, moisture, and other applicable tests under the declared scheme. Verify that thresholds correspond to the exact seed type and jurisdiction. | `ista-rules-seed-testing-2026`; `oecd-seed-schemes-2026`; `fao-qds-2006` |
| `validation_field_emissions` | rice_field_emissions | For methane-relevant production require area, cultivation period, during-season and pre-season water regime, organic amendment data, factor set and tier. For managed-soil N2O require N sources and direct and applicable indirect pathways. Fail double counting or undocumented factor substitution. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils` |
| `validation_allocation` | multifunctional_processes | Require the Section 7 hierarchy, pre-allocation totals, allocation factors summing to one for the allocated share, split-point values, and sensitivity when economic allocation is used. | `eu-pef-2021` |
| `validation_reasoned_estimates` | provisional_ranges | Treat every `reasoned_estimate` range as a replaceable screening aid, not as foreground evidence or an allowed conformance interval. Require disclosure and replace it before publication-critical use unless explicitly accepted in review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground rice-seed production data package eligible, after review and verification, for publication as a secondary_dataset and background_dataset |
| downstream_use | Construction of process datasets for released rice seed and lifecyclemodel projections that consume seed as a planting input |
| allowed_use | Geography-, crop-year-, route-, seed-class-, quality-, treatment-, packaging-, and storage-matched modelling; transparent regional aggregation with production weighting |
| excluded_use | Food or feed rice production as the reference product; undisclosed substitution across hybrid and non-hybrid routes or certification regimes; generic use that hides material water regime, parent-seed, quality, treatment, geography, or crop-year differences |
| required_metadata | PCR id; data owner; geography and sites; crop year and season; Oryza species and variety or hybrid; parent and released seed generation or class; lot genealogy; certification or quality scheme; sampling and test methods and results; treatment; packaging; dispatch gate; included storage; allocation; background datasets; emission methods and factors; reasoned estimates; cut-offs and proxies |
| required_quality_disclosure | Temporal, geographic, and technological coverage; field and lot completeness; instrument and laboratory evidence; mass and energy balances; uncertainty and variability; missing data; proxies; allocation sensitivity; status of every reasoned estimate |
| update_trigger | Material change in variety or hybrid route, parent-seed generation, production geography, water regime, field inputs, yield, conditioning or treatment technology, packaging, storage, quality or certification rules, background datasets, emission-factor method, allocation, or evidence that invalidates a screening range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-qds-2006` | Official guidance (`official_guidance`) | FAO. Quality Declared Seed System, Plant Production and Protection Paper 185. https://www.fao.org/4/a0503e/a0503e00.pdf (retrieved 2026-08-07) | Seed-producer responsibility, lot sampling and testing, and route-specific germination, analytical-purity, varietal-purity, moisture, health, and hybrid-rice requirements |
| `fao-seeds-toolkit-processing-2018` | Official guidance (`official_guidance`) | FAO and AfricaSeeds. Seeds Toolkit Module 2: Seed processing: principles, equipment and practice. https://openknowledge.fao.org/server/api/core/bitstreams/2019283b-6271-4b2e-82c0-19ac6256c591/content (retrieved 2026-08-07) | Process decomposition: reception, drying, cleaning and grading, treatment, weighing, packaging, and storage; lot traceability and mass reconciliation |
| `fao-seeds-toolkit-quality-2018` | Official guidance (`official_guidance`) | FAO and AfricaSeeds. Seeds Toolkit Module 3: Seed quality assurance. https://openknowledge.fao.org/server/api/core/bitstreams/b601435e-9c03-4ca5-8927-9f712418ec38/content (retrieved 2026-08-07) | Purity, germination, moisture, viability, vigour, seed health, variety verification, certification, and quality-control records |
| `ista-rules-seed-testing-2026` | Standard (`standard`) | International Seed Testing Association. International Rules for Seed Testing 2026, Chapter 2 Sampling and official Rules portal. https://www.seedtest.org/api/rm/776HVE3532HC95N/free-chapter-2-sampling.pdf and https://www.seedtest.org/en/publications/international-rules-seed-testing.html (retrieved 2026-08-07) | Representative seed-lot sampling and declaration of applicable purity, germination, moisture, and other test methods |
| `oecd-seed-schemes-2026` | Standard (`standard`) | OECD. OECD Seed Schemes Rules and Regulations 2026. https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/seeds/rules-and-regulation-eng.pdf (retrieved 2026-08-07) | Seed generation and certification identity, previous cropping, isolation, field inspection, varietal identity and purity, lot control, and traceability |
| `irri-rice-seed-quality` | Extension guidance (`extension_guidance`) | International Rice Research Institute, Rice Knowledge Bank. Seed Quality and How to produce good seed. http://www.knowledgebank.irri.org/images/docs/seed-quality-management.pdf and http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/seed-quality/producing-good-seed (retrieved 2026-08-07) | Rice-specific harvest, threshing, cleaning, drying, storage, moisture, germination, purity, and lot-quality context |
| `ipcc-2019-cropland` | Method factor (`method_factor`) | IPCC. 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 5: Cropland. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf (retrieved 2026-08-07) | Rice-cultivation CH4 equation, cultivated area, cultivation period, water-regime and organic-amendment scaling, and land or soil-carbon screening |
| `ipcc-2019-managed-soils` | Method factor (`method_factor`) | IPCC. 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf (retrieved 2026-08-07) | Direct and indirect managed-soil N2O activity data, equations, factors, and N2O-N to N2O reporting |
| `eu-pef-2021` | Official guidance (`official_guidance`) | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method, corrected text. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021H2279R(01) (retrieved 2026-08-07) | Multifunctionality hierarchy: subdivision or system expansion, physical causal relationship, then another relationship such as economic allocation; electricity subdivision and documentation |
