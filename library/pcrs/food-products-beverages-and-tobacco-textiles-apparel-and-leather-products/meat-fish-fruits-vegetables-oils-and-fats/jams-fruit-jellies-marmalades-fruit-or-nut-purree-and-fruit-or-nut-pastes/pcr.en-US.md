---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.jams-fruit-jellies-marmalades-fruit-or-nut-purree-and-fruit-or-nut-pastes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Jams, fruit jellies, marmalades, fruit or nut purée and fruit or nut pastes

## 1. Scope and Applicability

This PCR provides a common factory-gate foreground-data rule for marketable jams, fruit jellies, marmalades, fruit purées and pastes, and nut purées and pastes. A concrete data package shall represent one declared product, formulation, route, production site, reporting period, and market state. It shall not treat the category-average name as a substitute for those qualifiers.

The route declaration shall use one of the following route families:

1. `cxs_jam_jelly_marmalade`: jam, jelly, citrus marmalade, non-citrus marmalade, or jelly marmalade offered for direct consumption and claimed to conform to CXS 296-2009.
2. `non_cxs_fruit_preserve`: another jam, jelly, marmalade, fruit spread, reduced-sugar product, special-diet product, sweetener-formulated product, or product intended for further processing that remains within the semantic product category but is outside the CXS 296-2009 scope. Its applicable legal or buyer specification shall be declared; CXS composition limits shall not be imposed by analogy.
3. `fruit_puree_or_paste`: a marketable fruit purée or fruit paste made by preparation and size reduction, with route-specific optional sieving, blanching, deaeration, concentration, preservation, or aseptic treatment.
4. `nut_puree_or_paste`: a marketable nut purée or paste made by preparation and grinding or refining, with route-specific optional roasting, blanching, dehulling, homogenization, stabilization, or preservation.

CXS 296-2009 defines fruit purée as a possible ingredient in jam, but does not thereby establish a finished-product standard for all fruit purées, nut purées, or fruit or nut pastes. Its composition, soluble-solids, fill, defect, additive, and labelling provisions apply only to products within its stated scope and the applicable product definition. UNECE fresh-fruit and dry-produce commercial quality standards do not establish a general finished-product rule for this whole category and are not used as category-wide evidence here.

The PCR excludes unprocessed fresh fruit or nuts, fruit juices and nectars sold as beverages, frozen fruit or nuts sold as such, simply dried fruit or nuts, roasted or salted nuts sold as such, confectionery whose identity is not a fruit or nut purée or paste, and products whose declared identity falls outside the covered product names.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.jams-fruit-jellies-marmalades-fruit-or-nut-purree-and-fruit-or-nut-pastes |
| classification_refs | UNSD CPC 3.0: 21494, “Jams, fruit jellies, marmalades, fruit or nut purree and fruit or nut pastes” |
| covered_products | Marketable jams, fruit jellies, citrus and non-citrus marmalades, fruit purées and pastes, and nut purées and pastes, including packaged or bulk factory-gate products and both CXS-conforming and explicitly non-CXS routes |
| excluded_products | Unprocessed, frozen, or simply dried fruit or nuts sold as such; fruit juices or nectars sold as beverages; roasted or salted nuts sold as such; products outside the declared fruit-or-nut preserve, purée, or paste identity |
| representative_product | One declared marketable product from one of the four route families, normalized to net product mass at the factory gate |
| production_route | Ingredient receipt and preparation; exactly one declared transformation route; final conditioning and pack-out; site utilities, cleaning, and wastewater handling |
| market_state | Shelf-stable, chilled, frozen, aseptic, or otherwise preserved product, packaged for sale or transferred in a declared bulk container at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce a declared jam, fruit jelly, marmalade, fruit purée or paste, or nut purée or paste |
| How much | 1 kg net marketable product, excluding packaging mass |
| How well | Meets the declared route-specific composition, food-safety release, quality, preservation, and market specification; CXS 296-2009 requirements apply only when `cxs_jam_jelly_marmalade` is declared |
| How long or cycle | One released production lot at the factory gate; declared shelf life and its packaging dependence are metadata but downstream storage losses and service are outside this factory-gate unit |
| reference_flow_link | The reference flow is the normalized net mass of released product needed to provide the stated factory-gate function |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net marketable product at factory gate |
| Reference product flow | Jams, fruit jellies, marmalades, fruit or nut purée and fruit or nut pastes `7d119b90-a5ca-4bbc-8ab7-b1b3e3f878f9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | route family; product name and fruit or nut species; formulation and ingredient mass fractions; CXS applicability and claimed product definition; soluble solids or dry-matter basis and test method; preservation technology; packaged or bulk market state; packaging format and net fill; declared shelf life and storage condition; production geography; production site; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to released net product mass after final quality disposition and excluding primary, secondary, and transport packaging mass. |
| `mass_input_consistency` | Ingredients, water, product, residues, wastes, and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured wet-mass values; declare any conversion from volume, dry matter, concentrate, or formulation records and retain density, moisture, or solids evidence. |
| `solids_basis_declaration` | Soluble-solids or dry-matter results | Route-specific analytical property | % mass fraction or °Brix as reported | State the analytical method, sample state, temperature correction if applicable, and whether the value is soluble solids, total solids, or dry matter; do not interchange these measures. |
| `energy_carrier_separation` | Electricity, fuels, steam, and purchased heat | Carrier-specific energy property | kWh, MJ, kg, or m3 as metered | Keep each carrier in its measured unit and convert only with a disclosed conversion factor; do not merge electricity and thermal energy into an undocumented energy total. |

## 5. System Boundary

The foreground boundary starts when fruit, nuts, fruit-derived intermediates, sweetening ingredients, formulation ingredients, packaging, utilities, and cleaning materials are received at the manufacturing site. It ends when released net product and its declared packaging or bulk containment leave the factory gate. Upstream production and inbound transport are linked as secondary datasets. Distribution after the factory gate, retail and consumer storage, use, food loss after the gate, and end-of-life are excluded from this foreground dataset and must be added by a downstream full-life-cycle model when relevant.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_known_flows` | foreground_manufacturing | Record all known product, energy, water, waste, wastewater, and direct elementary flows for included manufacturing processes; avoid cut-off. If a downstream PEF study applies cut-off, it may exclude no more than the PEF cumulative 3% condition and shall explicitly justify environmental significance. | `eu-pef-recommendation-2021-2279` |
| `boundary_packaging` | packaging_and_packout | Include production of primary, secondary, transport, and bulk-container packaging required at the factory gate, plus on-site packaging losses; exclude packaging mass from the 1 kg net reference product. | `eu-pef-recommendation-2021-2279` |
| `boundary_route_evidence` | route_specific_processes | Apply CXS 296-2009 requirements only when the declared product and market purpose fall within its scope. For non-CXS preserves and all finished fruit or nut purée/paste routes, use actual foreground specifications and applicable legal or buyer requirements without extrapolating CXS thresholds. | `codex-cxs-296-2009` |
| `boundary_upstream_links` | purchased_inputs | Link each purchased ingredient, packaging material, energy carrier, water supply, and externally treated waste to geographically, technologically, and temporally representative upstream datasets; disclose proxies and missing links. | `eu-pef-recommendation-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Measured quantities and declared states of all received fruit, nuts, intermediates, sweetening and other formulation ingredients, packaging, utilities, and cleaning materials at the manufacturing-site boundary |
| starting_condition_role | Factory-gate foreground manufacturing starting condition |
| product_classification_scope | Semantic category represented by CPC 3.0 code 21494; the concrete dataset is narrowed by mandatory product and route qualifiers |
| recursive_input_rule | If a purchased input is itself a jam, jelly, marmalade, fruit or nut purée, or fruit or nut paste, record it as a technosphere product input with its supplier dataset and do not recursively re-run its production inside the receiving process |
| upstream_dataset_requirement | Supplier-specific or representative secondary datasets are required for fruit and nut production or processing, sweeteners and other ingredients, packaging, energy, water, inbound transport, and off-site treatment |
| disclosure | Declare route family, CXS applicability, input states and origins, preservation technology, packaging or bulk state, allocation choices, cut-offs, proxies, data gaps, and excluded downstream stages |

## 6. Process Inventory Structure

All provisional ranges below have `reasoned_estimate` evidence. They are deliberately broad authoring and QA priors, not compliance limits or substitutes for foreground records. Every such range shall be checked against batch mass balance and meter, invoice, formulation, waste, or wastewater records. It shall be replaced when site-specific records or reviewed external evidence become available, before methodology is promoted beyond candidate status, or whenever a foreground value falls outside the range; an out-of-range result triggers investigation and disclosure rather than automatic rejection.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | Ingredient receipt and preparation | required | Include for every route; record no-operation or pre-prepared inputs explicitly | Foreground receipt, sorting, washing, trimming, de-stoning, dehulling, or preparation | kg prepared ingredient stream |
| `fruit_preserve_transformation` | Jam, jelly, marmalade, or other fruit-preserve transformation | conditional | Include for route family `cxs_jam_jelly_marmalade` or `non_cxs_fruit_preserve` | Foreground formulation, extraction, cooking, concentration, gelling, and preservation as applicable | kg bulk fruit-preserve output |
| `puree_paste_transformation` | Fruit or nut purée/paste transformation | conditional | Include for route family `fruit_puree_or_paste` or `nut_puree_or_paste` | Foreground pulping, sieving, grinding, refining, concentration, roasting, or stabilization as applicable | kg bulk purée or paste output |
| `final_conditioning_packout` | Final conditioning and pack-out | required | Include release conditioning and packaged or bulk filling; record no separate conditioning if not used | Foreground cooling, deaeration, thermal or aseptic hold, filling, closure, and pack-out | 1 kg released net product |
| `site_utilities_cleaning` | Site utilities, cleaning, and wastewater handling | required | Include site services attributable to the declared product; record zero with evidence where a carrier is not used | Foreground utility supply, cleaning-in-place or other sanitation, and wastewater transfer | per 1 kg released net product |

### Process: Ingredient receipt and preparation (`ingredient_preparation`)

#### Inputs

##### Product flows

###### Fruit, nut, or fruit-derived main ingredient (`main_ingredient_input`)

Record each received main ingredient separately by species, origin, condition, and supplier lot. Do not combine fresh fruit, frozen fruit, pulp, purée, juice, concentrate, or nuts without a transparent formulation calculation.

- Selected flow: Route-specific fruit, nut, pulp, juice, purée, concentrate, or other main ingredient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured received mass allocated to released product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_formula_records`
- Range: Provisional main-ingredient screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: received main ingredient per kg released net product across dilute, sweetened, and concentrated route variants
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with product-specific bill-of-material and weighbridge or batch-scale evidence; investigate route identity or mass balance if outside the provisional range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fruit or nut stream (`prepared_main_stream`)

Record the mass passed to the declared transformation route after preparation.

- Selected flow: Prepared route-specific fruit or nut stream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured prepared stream mass transferred to transformation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_formula_records`
- Range: Provisional prepared-stream screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.03
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: prepared main stream per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with transfer-scale or reconciled batch records; investigate unrecorded water, residues, evaporation, or inventory change if outside the provisional range.

##### Waste flows

###### Sorting, trimming, stones, peels, shells, or preparation residues (`preparation_residues`)

Record each residue stream by material type and destination, including edible recovery, feed, by-product sale, treatment, or disposal.

- Selected flow: Route-specific preparation residue or waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured residue mass leaving ingredient preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Range: Provisional preparation-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: preparation residues per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with weighed residue records by species and preparation route; investigate mass-balance gaps if outside the provisional range.

##### Elementary flows

### Process: Jam, jelly, marmalade, or other fruit-preserve transformation (`fruit_preserve_transformation`)

#### Inputs

##### Product flows

###### Prepared fruit, juice, extract, pulp, or purée (`preserve_fruit_input`)

Record the actual fruit ingredient form used. For a CXS route, retain the data needed to calculate the applicable Section 3.1.2 fruit content and any aqueous-extract water deduction.

- Selected flow: Prepared fruit ingredient for the declared preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass entering the preserve batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_formula_records`
- Sources: `codex-cxs-296-2009`

###### Sweetening ingredients (`sweetening_ingredient_input`)

Record each sugar, fruit sugar, syrup, honey, or other declared sweetening ingredient separately. A non-CXS sweetener-formulated route shall be identified as non-CXS rather than treated as conforming by analogy.

- Selected flow: Route-specific sweetening ingredient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured formulation mass by ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_formula_records`
- Sources: `codex-cxs-296-2009`
- Range: Provisional sweetening-ingredient screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: total sweetening ingredients per kg released net product across CXS and non-CXS preserves
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with the released formulation and batch dispensing records; investigate formulation identity or concentration loss if outside the provisional range.

###### Other formulation ingredients (`preserve_other_ingredients`)

Record pectin or other gelling agents, acids, salts, spices, plant ingredients, oils, antifoaming agents, preservatives, colours, and flavours individually where used and legally permitted.

- Selected flow: Route-specific formulation ingredient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured formulation mass by ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_formula_records`
- Sources: `codex-cxs-296-2009`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk jam, jelly, marmalade, or preserve (`bulk_preserve_output`)

Record the transferred bulk product mass and route-specific quality disposition before pack-out.

- Selected flow: Bulk declared fruit-preserve product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted bulk product transferred to final conditioning and pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release_records`
- Sources: `codex-cxs-296-2009`

##### Waste flows

###### Off-specification preserve and process residues (`preserve_offspec_waste`)

Record rework separately from material leaving the product system for treatment or disposal.

- Selected flow: Off-specification preserve or process residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Range: Provisional preserve-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: off-specification preserve and residues per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with lot disposition and waste-scale records; investigate rework accounting and yield if outside the provisional range.

##### Elementary flows

### Process: Fruit or nut purée/paste transformation (`puree_paste_transformation`)

#### Inputs

##### Product flows

###### Prepared fruit or nut stream (`puree_paste_main_input`)

For fruit routes, record pulping, sieving, optional blanching, deaeration, concentration, and preservation. For nut routes, record optional roasting, blanching or dehulling, grinding or refining, homogenization, stabilization, and preservation. These operations are route candidates and shall be included only when performed.

- Selected flow: Prepared route-specific fruit or nut stream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass entering the purée or paste route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_formula_records`

###### Purée or paste formulation ingredients (`puree_paste_other_ingredients`)

Record every added water, oil, sweetener, salt, acid, stabilizer, antioxidant, or other ingredient from the actual formulation. CXS 296-2009 does not supply composition limits for this finished-product route.

- Selected flow: Route-specific purée or paste formulation ingredient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured formulation mass by ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_formula_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk fruit or nut purée or paste (`bulk_puree_paste_output`)

Record accepted bulk output with its measured dry matter or soluble solids, particle-size or texture specification where relevant, preservation state, and quality disposition.

- Selected flow: Bulk declared fruit or nut purée or paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted bulk output transferred to final conditioning and pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release_records`

##### Waste flows

###### Sieving residues, skins, shells, fines, or off-specification purée/paste (`puree_paste_residues`)

Record separated material and rejected product by type, mass, and destination. Recovered co-products shall not be relabelled as zero-burden waste.

- Selected flow: Route-specific purée or paste residue or waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Range: Provisional purée/paste residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: route residues and off-specification product per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with route-specific separator, residue, and disposition records; investigate yield or co-product classification if outside the provisional range.

##### Elementary flows

### Process: Final conditioning and pack-out (`final_conditioning_packout`)

#### Inputs

##### Product flows

###### Accepted bulk product (`accepted_bulk_product`)

Record the accepted bulk stream received from exactly one declared transformation route.

- Selected flow: Accepted bulk preserve, fruit purée/paste, or nut purée/paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass to final conditioning and pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release_records`

###### Packaging and bulk-container materials (`packaging_input`)

Record primary, closure, label, secondary, transport, and bulk-container materials separately, including reusable-container trip or loss data when applicable.

- Selected flow: Material-specific packaging or bulk-container input
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued packaging mass minus returned unused material, allocated to released product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-recommendation-2021-2279`
- Range: Provisional packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: packaging and bulk containment per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with bill-of-packaging, tare, issue-return, and reusable-trip records; investigate market-state or net-fill mismatch if outside the provisional range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference product (`released_reference_product`)

This is the sole reference product output. Packaging mass is not included in its amount.

- Selected flow: Jams, fruit jellies, marmalades, fruit or nut purée and fruit or nut pastes `7d119b90-a5ca-4bbc-8ab7-b1b3e3f878f9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg after normalization from measured released net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_release_records`
- Sources: `eu-pef-recommendation-2021-2279`

##### Waste flows

###### Packaging scrap and rejected containers (`packaging_waste`)

Record packaging scrap, breakage, rejected containers, labels, closures, and unrecovered reusable-container losses by material and destination.

- Selected flow: Material-specific packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured or inventory-reconciled packaging waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg reference product
  - Basis: packaging waste per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with waste-scale or packaging inventory-reconciliation records; investigate breakage and issue-return accounting if outside the provisional range.

##### Elementary flows

### Process: Site utilities, cleaning, and wastewater handling (`site_utilities_cleaning`)

#### Inputs

##### Product flows

###### Process and cleaning water (`process_cleaning_water`)

Record water by source and use, separating ingredient water where possible from process, cooling, and cleaning water.

- Selected flow: Source-specific water supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or reconciled water supplied to included foreground processes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Provisional process-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg reference product
  - Basis: ingredient, process, cooling, and cleaning water recorded at the site per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with submetered or reconciled water records by use; investigate reuse loops, leaks, evaporation, and wastewater balance if outside the provisional range.

###### Electricity (`electricity_input`)

Record metered electricity and the applicable supplier or grid mix separately from fuels and purchased heat.

- Selected flow: Site-specific electricity supply
- Flow property / unit: Electric energy / kWh
- Amount rule: Metered electricity attributable to included processes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Provisional electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg reference product
  - Basis: attributable site electricity per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with submeter or defensible allocation records and supplier/grid evidence; investigate process scope and meter boundaries if outside the provisional range.

###### Fuels, steam, or purchased heat (`thermal_energy_input`)

Record each fuel, steam, or purchased-heat carrier separately in its measured unit and retain the conversion used for any MJ-normalized screening.

- Selected flow: Carrier-specific fuel, steam, or purchased heat
- Flow property / unit: Carrier-specific energy or mass unit
- Amount rule: Metered or purchased amount attributable to included processes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Provisional thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg reference product
  - Basis: attributable lower-heating-value energy or purchased heat per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with carrier-specific meters, invoices, heating values, and allocation records; investigate cooking, concentration, roasting, thermal preservation, and cleaning scope if outside the provisional range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Manufacturing wastewater sent to treatment (`manufacturing_wastewater`)

Record wastewater mass or volume, destination, and measured pollutant loads or concentrations. Keep internally recycled water out of the leaving-wastewater amount.

- Selected flow: Site-specific manufacturing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or volume-and-density converted wastewater leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Range: Provisional wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg reference product
  - Basis: wastewater leaving the site per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Replacement trigger: Replace with effluent meter or volume-and-density records and treatment transfer documentation; investigate water balance and internal reuse if outside the provisional range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi_product_lines_and_shared_services | Avoid allocation first by product-specific batch records, submetering, process subdivision, or system expansion. Collect only flows directly attributable to the declared product when subdivision is possible. | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_second` | unavoidable_shared_inputs_and_outputs | If subdivision or system expansion is not possible, use and justify a measurable causal physical relationship such as batch mass, operating time, metered energy, or equipment throughput that represents resource use. | `eu-pef-recommendation-2021-2279` |
| `allocation_other_last` | no_defensible_physical_relationship | Use economic or another relationship only after documenting why subdivision, system expansion, and physical allocation are not feasible; use process-stage market values and disclose period, geography, prices, and sensitivity. | `eu-pef-recommendation-2021-2279` |
| `allocation_residue_status` | preparation_and_transformation_outputs | Classify edible or saleable residues as co-products when they carry a function or value; classify only streams sent for treatment or disposal as waste. Record rework as an internal loop, not a co-product or avoided burden. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_formula_records` | `ingredient_preparation` | Main and formulation ingredients plus prepared transfers | Batch and inventory records | lot_id; product_code; ingredient_id; species; origin; received_state; opening_stock; receipts; issued_mass; returns; closing_stock; formulation_version; prepared_transfer_mass | Calibrated scales, weighbridge, tank level with verified density, and inventory reconciliation | kg | Each receipt and batch | Entire declared reporting period | All included receiving, preparation, and formulation areas | Reconcile beginning stock plus receipts minus ending stock and non-product dispositions; allocate only by documented batch linkage | Calibration certificates, supplier lot records, formulation approval, stock reconciliation, and variance investigation |
| `cp_product_release_records` | `final_conditioning_packout` | Bulk transfer, route quality, and released net product | Batch, laboratory, fill, and release records | route_family; cxs_applicability; product_definition; batch_id; bulk_mass; net_fill; released_units; released_net_mass; soluble_solids_or_dry_matter; method; preservation_state; shelf_life; disposition | Calibrated transfer/fill measurements and approved laboratory or quality records | kg and declared quality units | Each batch and release lot | Entire declared reporting period | All included transformation and pack-out lines | Sum released net mass excluding packaging; preserve route-specific quality results and rejected or reworked quantities separately | Scale calibration, test method, sampling plan, release authorization, and lot traceability |
| `cp_waste_byproduct_records` | `ingredient_preparation` | Preparation residues, co-products, rework, and transformation wastes | Waste, by-product, and disposition records | batch_id; stream_id; material_type; mass; moisture_or_solids_if_used; destination; waste_or_coproduct_status; revenue_if_economic_allocation; rework_return | Calibrated scales, container counts with verified tare, and transfer documentation | kg | Each batch or removal | Entire declared reporting period | All included process areas and destinations | Aggregate by stream and disposition; subtract documented rework returned to the same product system | Scale or tare evidence, transfer notes, treatment receipts, sales records, and classification rationale |
| `cp_packaging_records` | `final_conditioning_packout` | Packaging inputs and wastes | Bill-of-packaging and issue-return records | packaging_item; material; unit_mass; issued_count; returned_count; rejected_count; reusable_trips; loss_rate; net_fill | Supplier specifications verified by tare measurements and inventory reconciliation | kg and count | Each packaging lot and production batch | Entire declared reporting period | All primary, closure, label, secondary, transport, and bulk-container materials | Convert counts to mass with verified unit mass; subtract unused returns; separate reusable trip allocation and losses | Supplier specification, sampled tare, line issue-return record, and waste reconciliation |
| `cp_utility_records` | `site_utilities_cleaning` | Water, electricity, fuels, steam, purchased heat, and cleaning materials | Meter, invoice, and operating records | meter_id; carrier; opening_reading; closing_reading; unit; calibration; batch_or_line; operating_time; heating_value_if_used; cleaning_cycle; internal_reuse | Submeters preferred; otherwise main meter or invoices allocated by documented physical driver | Carrier-specific unit | Continuous, shift, batch, or billing interval | Entire declared reporting period with complete meter reconciliation | All included production, utilities, and sanitation areas | Difference readings, subtract documented excluded loads, allocate shared loads using section 7 hierarchy, and preserve carrier units | Meter calibration, invoices, control-system export, operating logs, and allocation worksheet |
| `cp_wastewater_records` | `site_utilities_cleaning` | Wastewater quantity and pollutant data | Effluent meter, sampling, and transfer records | outlet_id; volume; density_if_mass_conversion; flow_period; COD; BOD; suspended_solids; nutrients; pH; treatment_destination; internal_reuse | Calibrated effluent meter plus representative sampling or verified off-site treatment records | kg or m3 and analyte-specific units | Continuous or each discharge and sampling event | Entire declared reporting period | All included wastewater outlets | Convert volume to mass only with documented density; flow-weight pollutant concentrations; exclude verified internal reuse | Meter calibration, laboratory reports, chain of custody, permit monitoring, and treatment receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = attributable reporting-period amount / released net product mass; packaging mass is excluded from the denominator | attributable flow amount; released net product mass | flow amount per 1 kg reference product | `eu-pef-recommendation-2021-2279` |
| `calc_batch_mass_balance` | Each transformation route | mass-balance residual = total measured inputs - released product - co-products - wastes - wastewater - measured or calculated evaporated water - documented inventory change; report residual and investigation | all batch input and output masses; inventory change; evaporation evidence | reconciled mass balance and residual |  |
| `calc_cxs_fruit_content` | Declared CXS jam, jelly, or marmalade route | Calculate fruit ingredient as a percentage of finished product under the applicable CXS 296-2009 Section 3.1.2 provision; for jelly deduct water used to prepare aqueous extracts where required; apply fruit-specific and mixed-fruit provisions rather than a generic threshold | fruit ingredient mass by type; finished product mass; aqueous-extract water; declared CXS product definition | CXS fruit-content result and applicable threshold | `codex-cxs-296-2009` |
| `calc_packaging_mass` | Packaging inputs | packaging mass = sum of material-specific net issued counts multiplied by verified unit mass, adjusted for documented reusable trips or losses | counts; unit masses; returns; rejected units; reusable-trip data | kg packaging per kg reference product | `eu-pef-recommendation-2021-2279` |
| `calc_shared_service_allocation` | Shared utilities and services | Apply section 7 hierarchy and calculate the declared product share from submetered use or the justified physical driver; economic allocation is last resort | shared total; product-specific meter or physical driver; co-product values if last resort | attributable shared-service amount and allocation factor | `eu-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_completeness_consistency` | Foreground dataset | Include all known inputs and outputs for included processes and reconcile process, batch, utility, packaging, waste, and wastewater records to the same reporting period and product scope. | Completeness checklist, reconciliations, and documented cut-offs or data gaps; PEF completeness and methodological consistency principles |
| `dq_representativeness` | Foreground and secondary data | Assess technological, geographical, and time-related representativeness and precision; state product, route, site, geography, reporting period, measurement basis, and uncertainty or proxy status. | DQR or equivalent documented assessment following Recommendation (EU) 2021/2279 |
| `dq_cxs_scope` | CXS claims | Retain evidence that the product definition, direct-consumption purpose, formulation, fruit content, soluble solids, fill, labelling, and applicable national choice correspond to the relevant CXS provision. Do not mark non-CXS routes as compliant. | Approved specification, formula, laboratory results, fill records, label, and applicable legal review |
| `dq_reasoned_estimates` | All `reasoned_estimate` ranges | Treat every provisional range as screening-only. Validate it against foreground records, replace it with site-specific or reviewed evidence before maturity advances beyond candidate, and investigate and disclose any out-of-range result. | Range replacement log, foreground records, reviewed source, and variance investigation |
| `dq_source_traceability` | Purchased inputs and treatment services | Link each material upstream and treatment dataset to supplier, geography, technology, time period, and any proxy decision; do not use an unqualified category average when product-specific information exists. | Supplier records, dataset metadata, and proxy justification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | dataset_identity | Confirm the manifest PCR id, common product-flow UUID, Mass flow-property UUID, Units of mass UUID, kg unit, route family, product identity, net-mass basis, and all required qualifiers are present and consistent. | `unsd-cpc-3-0-21494` |
| `validate_exactly_one_route` | process_inventory | Confirm exactly one transformation route family describes the reference product and that the matching conditional process is included; exclude the other transformation process unless separately metered co-production is explicitly modelled and allocated. |  |
| `validate_cxs_scope_and_composition` | cxs_jam_jelly_marmalade | Only for a declared CXS route, verify scope and the applicable CXS product definition and Section 3.1.2 formulation: jam/jelly uses the applicable 45% or 35% general provision with its listed fruit exceptions and mixed-fruit adjustment; citrus marmalade uses at least 200 g citrus ingredient per 1000 g finished product including at least 75 g endocarp; non-citrus marmalade uses at least 30% fruit generally or 11% for ginger. Do not apply these thresholds to non-CXS preserves, finished purées, or nut pastes. | `codex-cxs-296-2009` |
| `validate_cxs_solids_fill` | cxs_jam_jelly_marmalade | Only for a declared CXS route, verify the applicable national choice for soluble solids and the CXS provision: products under Section 3.1.2(a-c) are 60-65% or greater as applicable, non-citrus marmalade is 40-65% or less as applicable, and container fill is at least 90% of water capacity minus necessary headspace. Preserve the test and fill evidence. | `codex-cxs-296-2009` |
| `validate_non_cxs_boundary` | non_cxs_and_puree_paste_routes | Confirm the data package does not cite CXS thresholds as compliance evidence for reduced-sugar or further-processing preserves, special-diet or sweetener-formulated products, or any finished fruit purée, nut purée, or fruit/nut paste; validate against the declared applicable specification instead. | `codex-cxs-296-2009` |
| `validate_mass_and_allocation` | foreground_inventory | Reconcile reference product, ingredients, packaging, residues, co-products, wastes, wastewater, evaporation, and inventory changes; confirm shared flows follow the allocation hierarchy and all factors sum to one for the allocated total. | `eu-pef-recommendation-2021-2279` |
| `validate_data_quality_and_ranges` | foreground_and_secondary_data | Confirm completeness, methodological consistency, technological, geographical, and temporal representativeness, precision, source traceability, and disposition of every reasoned-estimate range and out-of-range value. | `eu-pef-recommendation-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific factory-gate foreground data package and resulting unit-process dataset for one declared route and market state |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication under the library lifecycle contract |
| allowed_use | Product-system modelling for the declared product, route, site, geography, reporting period, and packaging or bulk state; downstream models may add distribution, storage, use, loss, and end-of-life stages |
| excluded_use | Unqualified category-average claims; comparative assertions between unlike route families or product specifications; CXS conformity claims for non-CXS products; direct extrapolation to fruit juices, whole fruit or nuts, or other excluded products |
| required_metadata | PCR id; UUID references; route family; product and species; formulation; CXS applicability; quality and solids basis; preservation technology; packaging or bulk state; net fill; shelf life and storage condition; site, geography, reporting period; allocation; cut-offs; upstream datasets; proxies; data gaps |
| required_quality_disclosure | Record coverage and reconciliation; measurement and calculation methods; calibration; representativeness and precision; CXS evidence where applicable; allocation and cut-offs; reasoned-estimate status and replacement; out-of-range investigations; uncertainty and missing-flow limitations |
| update_trigger | Material change to product identity, formulation, route, preservation, packaging, site, utility supply, allocation, applicable law or standard; revised official CPC or CXS scope; new reviewed evidence replacing a reasoned estimate; or a data-quality finding that changes results or fitness for use |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21494` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21494, “Jams, fruit jellies, marmalades, fruit or nut purree and fruit or nut pastes”, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-08-11) | Classification identity only; it does not supply process, composition, or quantitative inventory rules |
| `codex-cxs-296-2009` | Standard (`standard`) | Codex Alimentarius, CXS 296-2009, Standard for Jams, Jellies and Marmalades, adopted 2009 and official text amended through 2025, https://workspace.fao.org/sites/codex/Standards/CXS%20296-2009/CXS_296e.pdf (accessed 2026-08-11) | Scope, product definitions, applicable fruit-content and soluble-solids provisions, quality, fill, and explicit boundary against non-covered products |
| `eu-pef-recommendation-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 of 15 December 2021, Annex I Product Environmental Footprint Method, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-08-11) | Functional unit and reference flow, supply-chain and packaging boundary, company-specific data, cut-off, allocation hierarchy, data quality, and reporting |
