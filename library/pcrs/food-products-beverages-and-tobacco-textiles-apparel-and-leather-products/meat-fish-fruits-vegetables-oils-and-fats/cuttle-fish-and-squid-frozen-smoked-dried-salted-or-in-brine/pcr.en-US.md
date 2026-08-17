---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cuttle-fish-and-squid-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cuttle fish and squid, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR authors a **narrow representative methodology for dried cephalopod products only** within CPC 3.0 code 21266. It applies to edible cuttlefish or squid received at a processing site, prepared, dried by one declared drying technology, finished, and packed as a shelf-stable dried product at the factory gate.

The Tiangong product flow `Dried cephalopod products` is narrower than the full CPC title. This PCR does **not** provide methodology coverage for products preserved and marketed as frozen, smoked, salt-cured, or in brine. Salt content must be reported because salt may be naturally present or used as a formulation aid, but a preservation route whose defining operation is salting or brining is out of scope. Ice glazing and drained mass are normally not applicable to the dried route; a non-zero glaze or a product marketed in liquid is an out-of-scope signal rather than permission to apply this PCR.

The foreground boundary is processing-site gate-to-gate. Upstream capture or aquaculture, landing, primary chilling, and inbound transport remain visible through linked upstream datasets. Distribution, retail, preparation, consumption, and end-of-life are outside the foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cuttle-fish-and-squid-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21266 — Cuttle fish and squid, frozen, smoked, dried, salted or in brine |
| covered_products | Edible cuttlefish and squid products whose declared preservation and market state is dried |
| excluded_products | Frozen products; smoked products; salt-cured products; products preserved or marketed in brine; mixed seafood products without separable cephalopod records; non-food products |
| representative_product | Dried cephalopod products; a narrower Tiangong flow representative within CPC 21266 |
| production_route | Reception and preparation, then exactly one declared drying technology route, then finishing and packaging; controlled solar/open-air and heated-air routes are mutually exclusive unless a measured hybrid is explicitly declared |
| market_state | Conforming saleable dried product at the factory gate, excluding packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a saleable dried cuttlefish or squid product from a declared dried-product route |
| How much | 1 kg net mass of conforming saleable product, excluding packaging |
| How well | Meets the producer's declared species, grade, moisture, salt-content, food-safety, and market specifications; is not frozen, smoked, salt-cured, or preserved in brine |
| How long or cycle | One production batch through the factory gate; no shelf-life service is credited |
| reference_flow_link | One kilogram of the reference product flow defined below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming saleable product at factory gate, excluding packaging |
| Reference product flow | Dried cephalopod products `ae437668-712c-407b-b8d5-7f3daf53040e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or declared species group; dried preservation route; source material state at reception; declared drying technology; batch and site; net-mass basis excluding packaging; moisture content on a declared wet or dry basis and test method; salt content or salinity and test method; ice-glaze fraction declared as zero or not applicable; drained mass declared as not applicable; product grade; geographic and temporal coverage |

When constructing a foreground data package, all required qualifiers must be declared in metadata, process notes, the reference-flow comment, product description, or an equivalent field. A non-zero glaze, an applicable drained-mass basis, or frozen, smoked, salt-cured, or brined market state fails this representative PCR's scope.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg net saleable dried product at factory gate; exclude packaging, pallets, non-product glaze, and free liquid. |
| `mass_state_consistency` | All cephalopod material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass at the measured material state and retain moisture content and test basis so dry-matter and wet-mass balances are not mixed. |
| `moisture_reporting` | Incoming, dried-bulk, and reference-product lots | Mass fraction | kg/kg | Report moisture content with wet-basis or dry-basis designation, sampling point, method, and batch coverage; do not convert bases without showing the formula. |
| `salt_glaze_drained_mass` | Reference product | Mass fraction and mass | kg/kg and kg | Report salt content or salinity. Declare glaze as zero or not applicable and drained mass as not applicable for the dried route; any contrary declaration triggers scope review. |
| `energy_carrier_separation` | Drying utilities | Carrier-specific energy | kWh or MJ | Keep electricity and each thermal fuel or purchased heat separate; do not combine primary fuel energy and delivered heat without a documented conversion and no double counting. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Processing-site foreground | Include raw-material reception, edible preparation, route-specific drying, finishing, grading, and packaging, together with directly metered utilities, process water, rejects, residues, wastewater, and on-site emissions. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream_links` | Purchased inputs | Keep received cephalopod material, energy carriers, water, packaging, and other purchased inputs as product flows linked to representative upstream datasets; disclose geography, technology, and data age. | `eu-pef-2021-2279` |
| `boundary_route_limit` | Product applicability | Apply only to the dried representative route. Frozen, smoked, salt-cured, and brine-preserved products are excluded even though CPC 21266 names them. | `unsd-cpc-3-0-21266` |
| `boundary_downstream_exclusion` | Downstream stages | Exclude outbound distribution, retail, consumer storage and preparation, consumption, and end-of-life unless the study explicitly extends the boundary and reports those additions separately. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Edible cuttlefish or squid material received at the processing-site gate, with species group, supplier, origin, capture or aquaculture status, received mass, temperature or preservation state, moisture basis when available, and any prior processing declared |
| starting_condition_role | Foreground processing begins at receipt; upstream production, landing, primary chilling, and inbound transport are represented by linked upstream datasets |
| product_classification_scope | CPC 3.0 code 21266 classification context, methodologically narrowed to dried cephalopod products only |
| recursive_input_rule | A purchased dried cephalopod input remains an explicit product input linked to an upstream dried-product dataset and is not recursively regenerated inside this foreground system |
| upstream_dataset_requirement | Use geographically, technologically, and temporally representative datasets for source cephalopods, electricity, fuels or heat, water, packaging, transport, and waste treatment; disclose substitutions and data gaps |
| disclosure | Declare the drying route, any hybrid energy split, source-material state, excluded CPC 21266 preservation routes, moisture and salt bases, net-mass basis, glaze status, drained-mass applicability, cut-offs, allocation, and all upstream dataset choices |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_reception_and_preparation` | Raw-material reception and preparation | `required` | Always for received cephalopod material | Foreground receiving, cleaning, trimming, cutting, and other declared edible preparation | Prepared cephalopod material transferred to drying |
| `route_specific_drying` | Route-specific drying | `required` | Select one route per batch: controlled solar/open-air, heated-air, or explicitly measured hybrid | Foreground moisture removal and drying control | Dried bulk cephalopod product |
| `finishing_and_packaging` | Finishing and packaging | `required` | Always for saleable packed output | Foreground equilibration, sorting, grading, packing, and release | 1 kg net conforming saleable dried product |

All ranges marked `reasoned_estimate` are deliberately broad candidate-stage screening guardrails, not production defaults. They apply only where the stated material state and technology condition match. Replace them with batch or site records collected under section 8, or with reviewed route-specific quantitative evidence, before this PCR can advance beyond candidate methodology.

### Process: Raw-material reception and preparation (`raw_material_reception_and_preparation`)

#### Inputs

##### Product flows

###### Received edible cephalopod material (`received_cephalopod_material`)

Record the mass and state of edible cuttlefish or squid material crossing the site gate. Retain supplier, origin, species group, capture or aquaculture status, prior preservation, temperature, moisture basis when available, and batch identity.

- Selected flow: Received edible cephalopod material
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass allocated to the declared dried-product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_mass_and_state`
- Range: Provisional received-material screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 10.0
  - Unit: kg/kg reference product
  - Basis: candidate screening for wet or partly dried input; replace with batch mass balance or reviewed material-state evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record water crossing the foreground boundary for washing, thawing only when the received ingredient is temporarily frozen, cleaning, or equipment contact attributable to the batch. Temporary thawing does not make frozen finished products in scope.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-allocated water use, net of documented recirculation without counting the same water twice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_utilities`
- Range: Provisional preparation-water screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: candidate screening where water-contact preparation occurs; replace with meter or batch records or reviewed site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record metered or allocated electricity for reception, washing, cutting, pumping, and other preparation equipment.

- Selected flow: Electricity, site supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated share from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_utilities`
- Range: Provisional preparation-electricity screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg reference product
  - Basis: candidate screening for preparation equipment; replace with submetered data or reviewed equipment calculations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared cephalopod material (`prepared_cephalopod_material`)

Calculate the prepared edible material transferred to drying after separately measuring residues and other outputs.

- Selected flow: Prepared edible cephalopod material
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass; reconcile received material, residues, wastewater-carried solids, and retained material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_mass_and_state`
- Range: Provisional prepared-material screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 10.0
  - Unit: kg/kg reference product
  - Basis: candidate screening across received moisture states; replace with measured transfer and final-product masses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation residues (`preparation_residues`)

Record heads, viscera, skin, pens, trimmings, spoiled material, or other residues by actual destination and by-product status; do not classify a saleable co-product as waste.

- Selected flow: Cephalopod preparation residues
- Flow property / unit: Mass / kg
- Amount rule: Measured residue mass by destination and regulatory status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_wastewater`
- Range: Provisional preparation-residue screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: candidate screening dependent on incoming preparation state; replace with weighed residue records and destination evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving the site boundary or entering on-site treatment, including the measured or estimated water volume and any monitored load required by the receiving treatment dataset.

- Selected flow: Wastewater from cephalopod preparation
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or water-balance calculation, linked to the actual treatment destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_wastewater`
- Range: Provisional wastewater screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: candidate screening where water-contact preparation occurs; replace with discharge metering or a documented site water balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Route-specific drying (`route_specific_drying`)

#### Inputs

##### Product flows

###### Prepared cephalopod material to drying (`drying_feed`)

Record the measured prepared mass and moisture basis entering the declared drying route.

- Selected flow: Prepared edible cephalopod material
- Flow property / unit: Mass / kg
- Amount rule: Measured feed mass with moisture content and sampling basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_controls`
- Range: Provisional drying-feed screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 10.0
  - Unit: kg/kg reference product
  - Basis: candidate screening across declared incoming moisture states; replace with batch feed mass and moisture tests
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying electricity (`drying_electricity`)

Record fans, heaters, controls, conveyors, dehumidification, and auxiliary electricity attributable to the selected route. For controlled solar/open-air drying, include only measured auxiliary electricity. For heated-air drying, include measured process electricity. A hybrid must disclose its measured split.

- Selected flow: Electricity, site supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered route-specific electricity or calculated value from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_energy`
- Range: Provisional drying-electricity screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kWh/kg reference product
  - Basis: candidate screening only for the declared drying technology; replace with route-specific meter data or reviewed technology evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying thermal energy carriers (`drying_thermal_energy`)

Record each fuel or purchased-heat carrier separately for heated-air or declared hybrid drying. This row is zero or not applicable for an unheated solar/open-air route; do not count both fuel input and delivered heat for the same energy.

- Selected flow: Declared thermal fuel or purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: Metered carrier quantity converted with a disclosed net-calorific-value or delivered-heat basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_energy`
- Range: Provisional thermal-energy screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg reference product
  - Basis: candidate screening for heated-air or declared hybrid drying only; replace with fuel, heat-meter, and conversion records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried bulk cephalopod product (`dried_bulk_product`)

Record dried bulk output before final grading and packing, with moisture content, salt content, and batch identity.

- Selected flow: Dried bulk cephalopod product
- Flow property / unit: Mass / kg
- Amount rule: Measured dried-bulk mass at declared moisture and salt bases
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_controls`
- Range: Provisional dried-bulk output screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.5
  - Unit: kg/kg reference product
  - Basis: candidate screening for finishing loss before packing; replace with measured dried-bulk and saleable masses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Drying rejects (`drying_rejects`)

Record scorched, contaminated, dropped, or otherwise rejected dried material by destination; separately identify material returned for rework.

- Selected flow: Rejected dried cephalopod material
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by batch, cause, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_controls`
- Range: Provisional drying-reject screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: candidate screening for the declared drying technology; replace with batch reject and rework records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed to air (`water_removed_to_air`)

Calculate evaporated water from measured feed and output masses and moisture contents. Do not treat this calculated water balance as a measured emission factor.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated by the wet-mass and moisture balance in `calc_drying_water_loss`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch_controls`
- Range: Provisional evaporated-water screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 9
  - Unit: kg/kg reference product
  - Basis: candidate screening where moisture removal is the dominant mass loss; replace with batch mass and moisture calculations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Finishing and packaging (`finishing_and_packaging`)

#### Inputs

##### Product flows

###### Dried bulk product for finishing (`finishing_feed`)

Record the batch-linked dried bulk product entering equilibration, sorting, grading, and packaging.

- Selected flow: Dried bulk cephalopod product
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass linked to the drying batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_release`
- Range: Provisional finishing-feed screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.5
  - Unit: kg/kg reference product
  - Basis: candidate screening for grading and packing losses; replace with measured transfer and saleable masses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging by material and measured mass; packaging is not part of the 1 kg reference product mass.

- Selected flow: Packaging materials by material type
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued packaging mass minus documented returns, normalized to saleable product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_finishing_utilities`
- Range: Provisional packaging screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: candidate screening for retail or bulk packs; replace with bill-of-materials and packaging issue records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing electricity (`finishing_electricity`)

Record electricity for equilibration controls, sorting, sealing, coding, and packing attributable to the batch.

- Selected flow: Electricity, site supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated share from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_finishing_utilities`
- Range: Provisional finishing-electricity screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg reference product
  - Basis: candidate screening for finishing and packaging equipment; replace with submetered or reviewed equipment data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming saleable dried cephalopod product (`reference_dried_cephalopod_product`)

This is the quantitative reference output. Record net product mass after final quality release and exclude all packaging.

- Selected flow: Dried cephalopod products `ae437668-712c-407b-b8d5-7f3daf53040e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed at 1 kg net conforming saleable product per reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `eu-pef-2021-2279`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: exact net reference amount after packaging exclusion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Finishing rejects and packaging waste (`finishing_and_packaging_waste`)

Record product rejects, rework transfers, and packaging scrap separately by material and destination; rework returned to a process remains a visible internal transfer.

- Selected flow: Finishing rejects and packaging waste by type
- Flow property / unit: Mass / kg
- Amount rule: Measured waste or rework mass by batch, material, cause, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable dried product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_finishing_utilities`
- Range: Provisional finishing-waste screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: candidate screening for grading rejects and packaging scrap; replace with weighed waste and rework records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | All batches and route technologies | Use physical batch segregation and process subdivision first. Do not combine controlled solar/open-air and heated-air inventories or any excluded preservation route into one average unless an explicitly measured hybrid batch and energy split are documented. | `eu-pef-2021-2279` |
| `allocation_rework_and_residues` | Rework, residues, and co-products | Treat internal rework as an internal transfer without duplicate burden. Record waste treatment by destination. If a residue is a saleable co-product, first seek a separable process or physical relationship; document and justify any remaining allocation. | `eu-pef-2021-2279` |
| `allocation_fallback` | Unavoidable shared inputs or outputs | When subdivision and a defensible physical relationship cannot resolve a multifunctional process, use an economic allocation based on contemporaneous prices, disclose the price basis and period, and test sensitivity; do not apply this fallback silently. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reception_mass_and_state` | `raw_material_reception_and_preparation` | received and prepared cephalopod mass and state | batch receipt and transfer records | batch id; species group; origin; capture or aquaculture status; supplier; received mass; prepared mass; temperature; prior preservation; moisture result and basis | calibrated scales plus receiving and transfer logs | kg; °C; kg/kg | every batch | representative production period, normally 12 consecutive months or the full campaign if shorter | each included site and line | retain batch values, then mass-weight by saleable output; do not average incompatible material states without disclosure | scale calibration; supplier documents; laboratory method; reconciliation sign-off |
| `cp_preparation_utilities` | `raw_material_reception_and_preparation` | preparation water and electricity | meter, submeter, or equipment log | meter openings and closings; recirculation; equipment power; run time; batch allocation driver | direct metering preferred; otherwise documented engineering calculation | kg water; kWh | each batch or at least daily with justified allocation | same period as reference-product output | each included site and utility system | subtract documented recirculation only once and allocate shared use using measured time, mass throughput, or another disclosed driver | meter calibration; invoices; equipment specifications; allocation worksheet |
| `cp_residue_and_wastewater` | `raw_material_reception_and_preparation` | residues and wastewater | weigh tickets, discharge meter, treatment and destination records | residue type; mass; by-product or waste status; destination; water discharge; monitored load where available | weigh each batch or reconciled container; meter discharge or calculate site water balance | kg | every batch or disposal event | same period as production | each site and treatment route | aggregate separately by material status and destination; link treatment datasets without merging unlike routes | scale or meter calibration; manifests; treatment invoices; water-balance reconciliation |
| `cp_drying_batch_controls` | `route_specific_drying` | feed, dried output, moisture, salt, rejects, and operating controls | batch production and laboratory records | route id; feed and output mass; feed and output moisture with basis; salt content; time; temperature; humidity or equivalent control; rejects; rework | calibrated scales and documented test methods; retain route-control logs consistent with the Codex code | kg; kg/kg; °C; h | every batch | representative production period by technology route | each dryer, line, or controlled drying area | keep routes separate; aggregate only batches with the same declared technology and compatible product specification | scale and sensor calibration; test reports; route log; release record |
| `cp_drying_energy` | `route_specific_drying` | electricity and thermal energy by carrier | meters, fuel purchase and inventory, heat meter, equipment log | route id; electricity; fuel quantity; net calorific value; purchased heat; start and end inventory; run time; allocation driver | direct metering preferred; reconcile fuel inventory and invoices; document conversions | kWh; MJ; carrier unit | every batch or at least daily with batch allocation | same period as route-specific output | each dryer and energy system | report each carrier separately; forbid duplicate fuel and delivered-heat accounting; disclose hybrid split | meter calibration; invoices; tank reconciliation; conversion source; allocation worksheet |
| `cp_finished_product_release` | `finishing_and_packaging` | saleable net mass and required qualifiers | batch release, weigh, and laboratory records | batch id; dried-bulk input; saleable net mass; grade; moisture and basis; salt content; glaze declaration; drained-mass applicability; rejects | calibrated scales and documented quality tests before release | kg; kg/kg | every batch | same period as included production | each finishing line and product specification | sum only conforming saleable net product; exclude packaging; retain product-specific moisture and salt results | scale calibration; laboratory report; release authorization; label specification |
| `cp_packaging_and_finishing_utilities` | `finishing_and_packaging` | packaging, finishing electricity, and waste | bills of materials, issue records, meter or equipment log, waste records | packaging material and mass; returns; electricity; equipment time; product rejects; packaging scrap; destination | measured issue and return records; metering or documented calculation; waste weighing | kg; kWh | every batch or production day | same period as saleable output | each finishing line | normalize net packaging use and utility share to saleable net product; keep each material and destination separate | supplier specification; stock reconciliation; meter or equipment evidence; waste manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_net_mass` | Reference product | Net saleable product mass equals gross packed mass minus packaging and any non-product mass. Glaze must be zero or not applicable and drained mass must be not applicable; otherwise stop and review scope. | gross packed mass; packaging mass; glaze declaration; drained-mass applicability; release status | kg net conforming saleable dried product | `eu-pef-2021-2279` |
| `calc_normalize_inventory` | All inventory rows | Divide the batch-attributable quantity by batch net conforming saleable product mass to report the quantity per 1 kg reference flow. | batch flow quantity; batch net saleable product mass | normalized inventory amount | `eu-pef-2021-2279` |
| `calc_drying_water_loss` | Drying water balance | Water removed equals feed wet mass multiplied by feed moisture fraction minus dried-output wet mass multiplied by output moisture fraction, after aligning both moisture results to wet basis and accounting separately for sampled rejects or transfers. | feed mass and moisture; dried-output mass and moisture; reject and transfer masses and moisture | kg calculated water removed |  |
| `calc_process_mass_balance` | Each foreground process | Reconcile measured input mass with product, waste, transfer, retained-stock change, and calculated water outputs; investigate rather than force-close material discrepancies. | all batch mass records; stock change; moisture results | documented process mass-balance residual |  |
| `calc_route_energy` | Drying energy | Report electricity and each thermal carrier separately. Convert fuel with a disclosed calorific basis and never add delivered heat produced from the same counted fuel. | electricity meters; fuel records; calorific value; purchased heat; hybrid split | kWh and MJ per kg reference product by carrier | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | Product and batch identity | Demonstrate that the product is a dried cuttlefish or squid product and not a frozen, smoked, salt-cured, or brine-preserved product; retain all required reference-flow qualifiers. | product specification; label; batch release; route declaration; `unsd-cpc-3-0-21266` |
| `dq_route_separation` | Drying technology | Keep controlled solar/open-air, heated-air, and measured hybrid batches distinguishable; disclose any hybrid split and exclude route averages that mix incompatible technologies. | route logs; energy records; batch genealogy |
| `dq_measurement` | Mass, moisture, salt, temperature, and utilities | Use calibrated instruments or documented methods at the declared sampling point and retain units, moisture basis, detection limits where relevant, and conversion formulas. | calibration certificates; laboratory reports; meter records; `codex-cxc-52-2003` |
| `dq_temporal_coverage` | Foreground averages | Prefer 12 consecutive months; if seasonal production or a shorter campaign is represented, cover the full campaign and disclose omitted periods, atypical downtime, and production weighting. | production calendar; batch register; coverage calculation |
| `dq_completeness` | Foreground inventory | Reconcile product, residue, wastewater, water, and energy records; disclose missing flows, cut-offs, substitutions, and mass-balance residuals rather than replacing them silently. | reconciliation workbook; data-gap register; `eu-pef-2021-2279` |
| `dq_estimate_replacement` | All `reasoned_estimate` ranges | Treat reasoned estimates only as candidate screening guardrails. Replace each used estimate with protocol-based foreground records or reviewed route-specific evidence before methodology activation or dataset release for normal use. | record-to-range replacement log; reviewer decision; cited replacement source |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | Product applicability | Confirm the output is dried cuttlefish or squid and that frozen, smoked, salt-cured, and brine-preserved market routes are absent; non-zero glaze or applicable drained mass fails scope. | `unsd-cpc-3-0-21266` |
| `validation_reference_flow` | Quantitative reference | Confirm exactly 1 kg net conforming saleable output uses product-flow UUID ae437668-712c-407b-b8d5-7f3daf53040e, Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66, and kg, with every required qualifier declared. | `eu-pef-2021-2279` |
| `validation_route_exclusivity` | Drying process | Confirm one technology route per batch. A controlled solar/open-air and heated-air combination is allowed only as an explicitly documented hybrid with measured energy split; never average an excluded preservation route into the dataset. |  |
| `validation_mass_and_quality` | Process and product records | Reconcile received, prepared, dried-bulk, saleable, reject, residue, wastewater, stock-change, and calculated moisture-loss records; verify moisture and salt bases and explain material residuals. | `codex-cxc-52-2003` |
| `validation_energy` | Drying utilities | Confirm electricity and each thermal carrier are separately reported, conversions are disclosed, and fuel is not double counted with heat produced from that fuel. | `eu-pef-2021-2279` |
| `validation_estimates` | Candidate quantitative screening | Flag every value that still relies on `reasoned_estimate`; such a value is provisional and cannot satisfy normal-use release until replaced by collected records or reviewed route-specific evidence. |  |
| `validation_sources_and_destinations` | Upstream and waste links | Confirm every material input, energy carrier, packaging input, wastewater, residue, reject, and other waste has an identified source or destination dataset and that substitutions and allocation are disclosed. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for one declared dried cephalopod product and drying technology |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after review, complete upstream linking, and replacement of relied-upon reasoned estimates |
| allowed_use | Factory-gate modelling of dried cuttlefish or squid products matching the declared species group, source-material state, drying technology, moisture, salt, net-mass, geography, and time period |
| excluded_use | Frozen, smoked, salt-cured, or brine-preserved products; liquid-packed products; products with non-zero glaze; mixed seafood without separable records; generic representation of all CPC 21266 routes |
| required_metadata | PCR id; product-flow UUID; species group; origin and capture or aquaculture status; site; period; source-material state; drying technology and hybrid split if any; net-mass basis; moisture content and basis; salt content; glaze declaration; drained-mass applicability; grade; allocation; upstream datasets; waste destinations |
| required_quality_disclosure | Data coverage; instrument and method evidence; batch weighting; mass and energy reconciliation; cut-offs; substitutions; allocation; reasoned-estimate replacement status; route exclusions; uncertainty and data gaps |
| update_trigger | Change in species mix, raw-material state, drying technology or energy carrier, product moisture or salt specification, packaging, site, allocation, upstream dataset, regulation, or reviewed evidence; any observed value outside a screening guardrail also triggers review rather than automatic rejection |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21266` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21266, official CPC classification materials, https://unstats.un.org/unsd/classifications/Econ/cpc, retrieved 2026-08-11 | Official CPC identity and full classification title; used to state that this methodology is intentionally narrower than the classification label |
| `codex-cxc-52-2003` | Standard (`standard`) | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official Codex texts, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/, retrieved 2026-08-11 | Fishery-product receiving, hygienic processing, drying-control, monitoring, and product-quality record structure; not used as quantitative LCI evidence |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-11 | Functional-unit and reference-flow framing, inventory completeness, data quality, upstream dataset linking, allocation hierarchy, and disclosure |
