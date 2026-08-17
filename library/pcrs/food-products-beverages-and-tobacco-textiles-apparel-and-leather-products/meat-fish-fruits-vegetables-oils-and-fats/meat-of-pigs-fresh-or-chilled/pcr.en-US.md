---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-fresh-or-chilled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat of pigs, fresh or chilled

## 1. Scope and Applicability

This PCR applies to raw edible meat from domesticated pigs supplied fresh or chilled at a slaughterhouse or meat-cutting plant gate. It covers carcasses, sides and meat cuts, whether bone-in or boneless, when the product has not been frozen, salted, dried, smoked, cooked, canned, fermented or otherwise further prepared. The representative route is receipt of live pigs, slaughter and dressing, chilling, and cold storage; cutting, deboning, trimming and packaging are included when they are needed to produce the declared market form.

The PCR excludes live pigs as the reference product, edible offal sold as a separate product category, rendered fats, hides or skins sold separately, processed or preserved pork, frozen pork, retail preparation, cooking, distribution after the declared plant gate, and consumer use. Upstream pig production is represented by a separate supplier or background dataset and is not recreated inside the slaughterhouse foreground inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-fresh-or-chilled |
| classification_refs | CPC 3.0: 21113, Meat of pigs, fresh or chilled (exact scope reference) |
| covered_products | Raw edible pig carcasses, sides and meat cuts supplied fresh or chilled; bone-in or boneless; unpackaged or packaged at the declared plant gate |
| excluded_products | Live pigs; edible offal as a separate product; pig skin as a separate product; rendered fat; frozen pork; salted, dried, smoked, cured, fermented, cooked or canned pork; retail or food-service preparation |
| representative_product | Chilled dressed pig carcass at slaughterhouse gate |
| production_route | Live-pig receipt and lairage; slaughter, bleeding, scalding/dehairing, evisceration, inspection and dressing; chilling and cold storage; conditional cutting, deboning, trimming and packaging |
| market_state | Raw and fresh or chilled, with declared product form, bone status, packaging state, gate and product temperature |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of raw edible pig meat in the declared carcass, side or cut form at a slaughterhouse or cutting-plant gate |
| How much | 1,000 kg net product mass, excluding transport and secondary packaging |
| How well | Food-grade, passed applicable inspection, not frozen or further preserved, and meeting the declared fresh/chilled temperature specification |
| How long or cycle | One production lot at dispatch; no service duration is assigned |
| reference_flow_link | 1,000 kg of the declared fresh or chilled pig-meat product |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Pig carcass, chilled `452e40cd-9178-4f2e-b248-18c81dd83f43` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form (carcass, side or named cut); bone-in or boneless; fresh or chilled condition; product temperature and measurement point; slaughterhouse or cutting-plant gate; packaging state and included packaging; geography; production route; cold-storage duration; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net meat or carcass mass at the declared gate. Exclude transport and secondary packaging; state whether immediate primary packaging is excluded or separately inventoried. |
| `cold_carcass_basis` | pig carcass output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When the declared product is a carcass, disclose the cold-carcass definition and excluded body parts; do not silently substitute live weight or hot carcass weight. |
| `temperature_state` | reference product condition | Temperature | degrees Celsius | Record fresh/chilled status, measured product temperature, measurement location and time. A concrete dataset must apply its governing legal or customer specification; for EU-context datasets, other meat is chilled to no more than 7 degrees Celsius unless an applicable authorised exception is documented. |
| `energy_conversion` | purchased electricity and thermal energy | Energy | kWh or MJ | Preserve the measured energy unit and conversion trace. Use 1 kWh = 3.6 MJ when conversion is required; do not combine electricity and thermal energy without retaining their separate carrier identities. |
| `water_volume` | process water and wastewater | Volume | m3 | Prefer metered volume. If mass is converted to volume, disclose density, temperature and conversion formula. |

## 5. System Boundary

The foreground boundary starts when live pigs cross the slaughterhouse gate and ends when the declared fresh or chilled carcass, side or meat cut is ready for dispatch at the declared slaughterhouse or cutting-plant gate. It includes on-site utilities, cleaning and sanitation, chilling, cold storage before dispatch, wastewater handling and treatment attributable to the included operations, and management of slaughter co-products and wastes. Upstream pig rearing, feed production and inbound transport are represented by linked upstream datasets. Downstream distribution, retail, cooking, consumption and end-of-life of packaging are excluded unless the study goal explicitly extends the boundary and reports them separately.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live pigs received at the slaughterhouse gate, with supplier, origin, live mass, animal count, transport handover and receipt time declared |
| starting_condition_role | Upstream product input that anchors the foreground slaughter and primary-processing dataset |
| product_classification_scope | Raw edible meat of domesticated pigs in fresh or chilled carcass, side or cut form; CPC 3.0 code 21113 is an exact classification reference |
| recursive_input_rule | If fresh or chilled pig carcasses, sides or cuts are purchased for further cutting or packing, record them as linked upstream product inputs and do not recreate their slaughter burden inside the cutting process |
| upstream_dataset_requirement | Use a geographically and temporally representative live-pig or fresh/chilled pig-meat supplier dataset with declared gate, production system, mass basis and allocation method |
| disclosure | Declare the starting product, gate, included processes, product form, temperature state, cold-storage duration, packaging, treatment of purchased same-category inputs, and any excluded on-site operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_required_operations` | slaughter_dress_chill | Include receiving/lairage activities attributable to the lot, slaughter, bleeding, scalding and dehairing, evisceration, inspection, dressing/splitting, washing, chilling, pre-dispatch cold storage, cleaning, utilities and attributable wastewater management. | `codex-cxc-58-2005`; `eu-853-2004`; `eu-bat-sa-2023` |
| `sb_conditional_cutting` | cut_pack | Include cutting, deboning, trimming, product handling, primary packaging and their utilities and wastes when the declared reference product is a cut or packaged product. | `unece-porcine-meat-2018`; `eu-853-2004` |
| `sb_upstream_live_pig` | live_pig_supply | Keep pig rearing, feed production and inbound transport outside the foreground slaughter process and link representative upstream datasets rather than omitting their burdens. | `fao-leap-pig-2018` |
| `sb_same_category_recursion` | purchased_fresh_chilled_pork | Stop recursion at a purchased same-category product and link its upstream dataset; disclose the purchased product form and gate. | `fao-leap-pig-2018` |
| `sb_downstream_exclusions` | post_gate_activities | Exclude downstream transport, retail, cooking and consumption from this plant-gate PCR unless the study explicitly adds and reports them as separate processes. | `fao-leap-pig-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_dress_chill` | Pig slaughter, dressing and chilling | `required` | Always included for live-pig receipt to chilled carcass production | Foreground primary processing | 1,000 kg chilled dressed carcass output before conditional further cutting |
| `cut_pack` | Carcass cutting, deboning and packaging | `conditional` | Include when the declared product is a side, named cut, boneless meat or packaged product rather than an unpackaged carcass | Foreground product-form conversion | 1,000 kg declared fresh or chilled meat output |

### Process: Pig slaughter, dressing and chilling (`slaughter_dress_chill`)

#### Inputs

##### Product flows

###### Live pigs received (`live_pigs`)

Live pigs cross the foreground boundary at slaughterhouse receipt. Use weighbridge, scale and animal-count records and link a representative upstream pig-production dataset.

- Selected flow: Live pigs
- Flow property / unit: Mass / kg
- Amount rule: measured live mass accepted for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_pig_receipt`
- Sources: `fao-leap-pig-2018`
- Range: Provisional replaceable live-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg chilled dressed carcass output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water supplied (`slaughter_water`)

Record metered water used for animal washing, scalding, carcass washing, cleaning and sanitation attributable to slaughter, dressing and chilling.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered attributable process-water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_water`
- Sources: `eu-bat-sa-2023`
- Range: Pig-slaughter specific wastewater-discharge BAT-AEPL used as a water-use screening proxy, not an allowed input range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.70
  - Upper: 3.50
  - Unit: m3
  - Basis: per 1,000 kg pig carcass output, yearly-average exclusive-slaughtering basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-bat-sa-2023`

###### Purchased electricity (`slaughter_electricity`)

Record electricity used by slaughter equipment, pumps, ventilation, refrigeration, cold storage, cleaning and attributable wastewater handling.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoice-reconciled electricity allocated to the included process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_energy`
- Sources: `eu-bat-sa-2023`
- Range: Pig-slaughter specific net-energy BAT-AEPL screening range for total heat plus electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 65
  - Upper: 370
  - Unit: kWh
  - Basis: per 1,000 kg pig carcass output, yearly-average exclusive-slaughtering basis; compare combined net energy rather than electricity alone
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-bat-sa-2023`

###### Fuels and purchased thermal energy (`slaughter_thermal_energy`)

Record each fuel and purchased heat carrier separately for hot water, scalding, sanitation and other included uses.

- Selected flow: Site-specific fuel or purchased thermal energy
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured fuel quantity converted with a documented factor, or metered purchased heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_energy`
- Sources: `eu-bat-sa-2023`
- Range: Provisional replaceable thermal-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1200
  - Unit: kWh
  - Basis: per 1,000 kg chilled dressed carcass output; broad authoring screen before site evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation materials (`slaughter_cleaning_materials`)

Record detergents, disinfectants and other process chemicals that cross the process boundary, preserving product identity and concentration.

- Selected flow: Site-specific cleaning or sanitation product
- Flow property / unit: Mass / kg
- Amount rule: stock issue, purchase and dosing records reconciled to the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_materials`
- Sources: `codex-cxc-58-2005`; `eu-bat-sa-2023`

##### Waste flows

No waste input is required by default. Record returned or reprocessed material only when it crosses the declared foreground boundary.

##### Elementary flows

Record direct water abstraction as an elementary input only when it is not already represented by a supplied water product dataset; prevent double counting.

#### Outputs

##### Product flows

###### Chilled dressed pig carcass (`chilled_carcass`)

This is the representative reference product from slaughter and dressing. Measure dispatch or cold-carcass mass and retain the declared carcass definition and temperature state.

- Selected flow: Pig carcass, chilled `452e40cd-9178-4f2e-b248-18c81dd83f43`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize measured qualifying output to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_product_output`
- Sources: `unece-porcine-meat-2018`; `eu-853-2004`; `mass-balance-identity`
- Range: Reference-flow normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg declared reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Separated slaughter co-products (`slaughter_coproducts`)

Record each saleable or internally used co-product separately, including edible offal, blood, fat, bones and skin where applicable; do not aggregate products with wastes.

- Selected flow: Site-specific separated pig slaughter co-product
- Flow property / unit: Mass / kg
- Amount rule: measured mass by co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `fao-leap-pig-2018`; `eu-bat-sa-2023`
- Range: Provisional replaceable co-product mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: total separated co-products per 1,000 kg chilled dressed carcass output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Slaughter residues sent to waste treatment (`slaughter_residues`)

Record non-product animal material and other solid residues by treatment route. A material sold or used as a co-product must instead be recorded in the product-flow group.

- Selected flow: Site-specific slaughter residue
- Flow property / unit: Mass / kg
- Amount rule: measured mass by residue class and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproducts`
- Sources: `eu-bat-sa-2023`
- Range: Provisional replaceable waste-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg chilled dressed carcass output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Slaughterhouse wastewater (`slaughter_wastewater`)

Record wastewater leaving the included operations before or after on-site treatment as declared, without duplicating the same water stream at two boundary points.

- Selected flow: Slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge attributable to the included process, with treatment boundary declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `eu-bat-sa-2023`
- Range: Pig-slaughter specific wastewater-discharge BAT-AEPL
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.70
  - Upper: 3.50
  - Unit: m3
  - Basis: per 1,000 kg pig carcass output, yearly-average exclusive-slaughtering basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-bat-sa-2023`

##### Elementary flows

###### Refrigerant loss to air (`refrigerant_loss`)

Record refrigerant make-up attributable to leakage from chilling and cold-storage systems by refrigerant identity. Use direct service records or a documented stock-balance calculation.

- Selected flow: Refrigerant-specific emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured make-up or calculated annual refrigerant stock loss attributable to the included production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-bat-sa-2023`
- Range: Provisional replaceable refrigerant-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1,000 kg chilled dressed carcass output; broad screen pending equipment-specific records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Carcass cutting, deboning and packaging (`cut_pack`)

#### Inputs

##### Product flows

###### Chilled carcass or side input (`cutting_meat_input`)

Record the chilled pig carcass, side or primal input when further cutting or packaging is included. Link its upstream slaughter dataset and do not recreate slaughter burdens.

- Selected flow: Chilled pig carcass, side or cut input
- Flow property / unit: Mass / kg
- Amount rule: measured input mass by product form
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared fresh or chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_input_output`
- Sources: `unece-porcine-meat-2018`
- Range: Provisional replaceable cutting-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: chilled carcass or side input per 1,000 kg declared meat output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cutting and refrigeration electricity (`cutting_electricity`)

Record electricity attributable to cutting, deboning, ventilation, refrigeration and cold storage after the slaughter-stage output.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or defensibly allocated electricity for the included cutting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared fresh or chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_energy_water`
- Sources: `eu-bat-sa-2023`
- Range: Provisional replaceable cutting-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kWh
  - Basis: per 1,000 kg declared fresh or chilled meat output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cutting and cleaning water (`cutting_water`)

Record metered water used by included cutting, equipment washing and sanitation activities.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered attributable water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared fresh or chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_energy_water`
- Sources: `codex-cxc-58-2005`
- Range: Provisional replaceable cutting-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per 1,000 kg declared fresh or chilled meat output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging materials (`primary_packaging`)

Record trays, films, bags, pads, labels and other primary packaging when the declared product is packaged at the plant gate.

- Selected flow: Packaging material by material and format
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials quantity reconciled to packaged product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged fresh or chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_packaging`
- Sources: `unece-porcine-meat-2018`
- Range: Provisional replaceable packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per 1,000 kg packaged fresh or chilled meat output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is required by default.

##### Elementary flows

Record direct water abstraction only when it is not already represented by a supplied water product dataset.

#### Outputs

##### Product flows

###### Declared fresh or chilled pork product (`fresh_chilled_pork_output`)

Record the specified carcass side, named cut or boneless meat output and its temperature, bone status and packaging state.

- Selected flow: Product-specific fresh or chilled pig-meat flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize measured qualifying output to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_input_output`
- Sources: `unece-porcine-meat-2018`; `mass-balance-identity`
- Range: Reference-flow normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg declared reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Cutting co-products (`cutting_coproducts`)

Record bones, fat, trimmings and other saleable outputs separately by product identity and destination.

- Selected flow: Site-specific cutting co-product
- Flow property / unit: Mass / kg
- Amount rule: measured mass by co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared fresh or chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_input_output`
- Sources: `fao-leap-pig-2018`; `unece-porcine-meat-2018`
- Range: Provisional replaceable cutting co-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg declared fresh or chilled meat output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cutting and packaging waste (`cutting_packaging_waste`)

Record non-product trimmings and discarded packaging by material and treatment route; do not classify saleable co-products as waste.

- Selected flow: Site-specific cutting or packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared fresh or chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_input_output`
- Sources: `eu-bat-sa-2023`
- Range: Provisional replaceable cutting-waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: per 1,000 kg declared fresh or chilled meat output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record refrigerant loss and any direct emissions from the cutting and cold-storage systems when they are attributable and not already included in `slaughter_dress_chill`.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | all_multifunctional_operations | First avoid allocation by separately metering and subdividing independently operated activities; use system expansion only when a direct, demonstrable substitution can be represented consistently with the study goal. | `eu-pef-2021-2279` |
| `alloc_physical` | inseparable_slaughter_and_cutting_burdens | When subdivision or justified system expansion is not possible, allocate shared burdens using a documented relevant physical relationship that reflects how the process burdens relate to the co-products; do not assume that mass is automatically the relevant relationship. | `eu-pef-2021-2279` |
| `alloc_other_relationship` | residual_multifunctionality | If no relevant physical relationship can be demonstrated, use another documented relationship, such as economic value, and retain product quantities, prices, price period, currency and calculation factors for review. | `eu-pef-2021-2279`; `fao-leap-pig-2018` |
| `alloc_waste_boundary` | wastes_and_coproducts | Assign no co-product credit to a material classified as waste unless a documented downstream use and the chosen allocation or substitution method justify it; record treatment burdens through the declared waste boundary. | `eu-pef-2021-2279`; `eu-bat-sa-2023` |
| `alloc_disclosure` | dataset_reporting | Report the hierarchy step used, factors for every product and co-product, excluded outputs, price or physical data periods, treatment of edible and inedible outputs, and a sensitivity result when the choice materially affects the reference product. | `eu-pef-2021-2279`; `fao-leap-pig-2018` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_pig_receipt` | `slaughter_dress_chill` | live pigs | weighbridge and livestock receipt records | supplier; origin; lot id; animal count; gross, tare and net live mass; receipt time | calibrated scale or weighbridge reconciled to receipt records | kg; head | each lot | representative 12-month period or declared campaign | all pigs feeding the included line | sum accepted live mass by lot, excluding rejected animals not processed | calibration records; receipt reconciliation; rejection log |
| `cp_slaughter_water` | `slaughter_dress_chill` | process water | water-meter and utility records | meter id; opening and closing readings; submeter boundary; operating days; shared-use allocation | direct meter preferred; documented allocation from facility meter if no submeter | m3 | daily or shift readings, aggregated monthly | representative 12-month period | included slaughter, cleaning and chilling operations | subtract unrelated uses and normalize attributable volume to product output | meter calibration; utility invoice reconciliation; allocation worksheet |
| `cp_slaughter_energy` | `slaughter_dress_chill` | electricity, fuels and heat | meters, invoices and fuel stock records | carrier; meter or invoice quantity; conversion factor; opening and closing fuel stock; included equipment | direct metering or invoice/stock-balance reconciliation by carrier | kWh; MJ; carrier unit | monthly, with production-period matching | representative 12-month period | included slaughter, chilling, cold storage and attributable treatment | calculate net purchased energy by carrier, retain recovered energy separately, then normalize | meter checks; invoices; conversion-factor source; reconciliation |
| `cp_slaughter_materials` | `slaughter_dress_chill` | cleaning and sanitation materials | purchase, stock and dosing records | product id; concentration; opening and closing stock; purchased and issued mass; dosing log | stock balance reconciled to dosing records | kg | monthly | representative 12-month period | included slaughter and sanitation areas | net issue = opening + purchases - closing - unrelated uses | stock count; invoices; dosing calibration |
| `cp_slaughter_product_output` | `slaughter_dress_chill` | chilled carcass output | scale, inspection and dispatch records | lot id; hot or cold mass flag; cold carcass definition; output mass; temperature; inspection status; dispatch time | calibrated carcass or dispatch scale with temperature record | kg; degrees Celsius | each lot | same period as inputs | included slaughter line and pre-dispatch cold store | sum conforming output only and normalize all flows to 1,000 kg | scale calibration; inspection release; temperature log; mass reconciliation |
| `cp_slaughter_coproducts` | `slaughter_dress_chill` | co-products and solid residues | scales, containers, sales and waste transfer records | material id; product/waste status; mass; destination; price and currency if sold; treatment route | direct weighing preferred; container count times verified unit mass only when weighing is unavailable | kg; currency/kg | each lot or dispatch | same period as reference output | all co-products and solid residues from the included slaughter line | aggregate separately by material and destination; never net products against wastes | scale calibration; sales invoice; waste transfer note; destination evidence |
| `cp_slaughter_wastewater` | `slaughter_dress_chill` | wastewater | effluent meter and treatment records | flow; boundary point; treatment status; pH; temperature; monitored pollutant parameters | continuous or periodic metering at the declared boundary | m3; parameter-specific units | continuous where available, aggregated monthly | representative 12-month period | included slaughter line and declared wastewater-treatment boundary | avoid double counting pre-treatment and post-treatment volume; normalize declared discharge | meter checks; sampling plan; laboratory reports; treatment logs |
| `cp_refrigerant_records` | `slaughter_dress_chill` | refrigerant loss | refrigerant inventory and maintenance records | refrigerant id; system id; opening stock; purchases; recoveries; closing stock; recharge; disposal | annual stock balance supported by service records | kg | each service event and annual reconciliation | representative 12-month period | refrigeration systems serving the included chilling and cold storage | loss = opening + purchases - closing - recovered - disposed, allocated to included cooling load | service certificates; cylinder records; stock reconciliation |
| `cp_cutting_input_output` | `cut_pack` | meat input, product, co-products and wastes | line scales, yield sheets, packaging and dispatch records | input product id and mass; output cut id and mass; bone status; temperature; co-product mass; waste mass; destination | calibrated line and dispatch scales reconciled by production batch | kg; degrees Celsius | each batch | representative 12-month period or declared campaign | all included cutting, deboning and packaging lines | mass-balance each batch, then aggregate like product specifications and normalize to 1,000 kg output | scale calibration; batch yield report; release record; mass-balance review |
| `cp_cutting_energy_water` | `cut_pack` | cutting electricity and water | submeter, invoice and operating-hour records | meter readings; line hours; production mass; shared-service driver | direct submeter preferred; documented engineering allocation if shared | kWh; m3 | daily or monthly | same period as cutting output | included cutting, refrigeration, cleaning and packaging operations | subtract unrelated uses and normalize attributable quantities to output | meter checks; invoice reconciliation; allocation worksheet |
| `cp_primary_packaging` | `cut_pack` | primary packaging | bill of materials and stock records | packaging material; unit mass; units issued; rejects; returned stock | bill-of-materials quantity reconciled to stock issue and packaged units | kg; item | each packaging run | same period as packaged output | all packaged product specifications in the declared output | packaging mass = verified unit mass times net units used, by material | supplier specification; unit-mass check; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_1000kg` | all inventory rows | normalized amount = period-attributable amount / qualifying reference-product mass x 1,000 kg | attributable flow amount; qualifying product output mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_energy_total` | slaughter energy QA | convert each carrier to kWh using documented factors, sum purchased heat and electricity, subtract only measured recovered energy, and compare the result with the BAT-AEPL on its stated yearly-average basis | electricity; fuels; purchased heat; recovered energy; carcass output | net kWh per 1,000 kg carcass output | `eu-bat-sa-2023` |
| `calc_refrigerant_loss` | refrigerant loss | annual loss = opening stock + purchases - closing stock - recovered quantity - documented disposal; allocate only the share serving included refrigeration | inventory and service-event fields | kg refrigerant loss per 1,000 kg product | `eu-bat-sa-2023` |
| `calc_mass_balance` | slaughter and cutting batches | compare measured animal or meat inputs with reference product, co-products, wastes, wastewater-borne solids when measured, stock change and documented losses; investigate unexplained imbalance rather than forcing closure | all measured mass inputs and outputs; stock change | mass-balance residual and explanation | `mass-balance-identity` |
| `calc_allocation_factors` | shared burdens | derive factors only after applying the allocation hierarchy; factors across included products must sum to 1 for each shared burden pool | subdivision data; physical relationship data; quantities; prices and price period where used | allocation factor by output and burden pool | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and same-category inputs | Product form, bone status, fresh/chilled state, temperature, gate, packaging and Tiangong flow identity must match the declared dataset; a carcass flow must not silently represent a processed or frozen product. | product specification; dispatch record; temperature log; flow UUID check |
| `dq_temporal` | foreground inventory | Use a representative continuous 12-month period where seasonal operation permits; otherwise disclose the campaign dates, production share and reason it is representative. | dated meter, production and dispatch records |
| `dq_measurement` | mass, water and energy | Use calibrated direct measurement where available and retain any shared-service allocation driver and conversion factor. | calibration certificates; meter logs; invoices; allocation worksheet |
| `dq_completeness` | included operations | Cover live-pig input, qualifying product, all material co-products and wastes, water, wastewater, electricity, thermal energy, cleaning materials and refrigerant losses; justify any omitted relevant flow. | signed completeness checklist; process flow diagram; mass and utility reconciliation |
| `dq_mass_balance` | each production stage | Investigate and disclose material residuals; do not use an allocation factor or an invented loss to hide an unexplained imbalance. | batch and period mass-balance worksheet; corrective-action record |
| `dq_allocation` | multifunctional outputs | Retain the evidence for the selected hierarchy step and all factor inputs; price data must state currency, geography, time period and averaging method. | allocation workbook; quantity records; price evidence; sensitivity result |
| `dq_temperature` | fresh/chilled claim | Retain product-temperature measurements and the applicable legal or customer limit at the declared measurement point. | calibrated temperature log; specification; release record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Fail if the product UUID, mass property, unit group, reference unit or required product qualifiers are missing or inconsistent with fresh or chilled pig meat. | `unstats-cpc-3-0-2025`; `unece-porcine-meat-2018` |
| `val_boundary` | process coverage | Fail if slaughter/dressing/chilling is omitted for a live-pig starting condition, or if cutting/packaging burdens are omitted when the declared product form requires them. | `codex-cxc-58-2005`; `eu-853-2004` |
| `val_upstream` | upstream supply | Fail if live-pig or purchased same-category input burdens are neither linked to a representative upstream dataset nor explicitly reported as an unresolved coverage gap. | `fao-leap-pig-2018` |
| `val_temperature` | market state | Fail if a chilled product lacks its temperature specification and measurement evidence; flag values outside the applicable specification for review. | `eu-853-2004` |
| `val_mass_balance` | slaughter and cutting inventory | Fail if reference output, co-products and wastes are not separately quantified; flag an unexplained material imbalance for correction. | `mass-balance-identity`; `fao-leap-pig-2018` |
| `val_energy_water` | utility QA | Compare annualized net energy and wastewater discharge with the source-backed pig-slaughter BAT-AEPL ranges only on a comparable exclusive-slaughtering basis; an outlier is a review finding, not automatic replacement by a default. | `eu-bat-sa-2023` |
| `val_allocation` | co-product handling | Fail if shared burdens are allocated without the hierarchy step, factor basis and factors being disclosed, or if factors for a burden pool do not sum to 1. | `eu-pef-2021-2279` |
| `val_reasoned_estimates` | provisional ranges | Treat every `reasoned_estimate` range as a temporary, replaceable QA screen; fail publication readiness if it is used as a mandatory allowed range or as a substitute for collected foreground data. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product and unit-process data package for fresh or chilled pig meat at a declared slaughterhouse or cutting-plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness, allocation, completeness and source coverage |
| allowed_use | Product LCAs and supply-chain models whose product form, fresh/chilled state, geography, technology, gate and time period are compatible with the dataset |
| excluded_use | Frozen or further processed pork; edible offal as reference product; live-pig production alone; comparative public claims without method and representativeness review; direct use of provisional reasoned estimates as site data |
| required_metadata | PCR id and version when published; product form and bone status; flow UUID; gate; geography; reference period; temperature state; packaging; included processes; upstream dataset links; allocation method and factors; data ownership and review status |
| required_quality_disclosure | Metering and estimation shares; temporal and geographic representativeness; mass-balance residual; omitted flows; co-product treatment; BAT-AEPL comparison basis; provisional ranges still present; uncertainty and review findings |
| update_trigger | Material change in product form, slaughter or cutting technology, chilling system, utility mix, co-product markets or allocation, legal temperature specification, supplier system, geography, or foreground data older than the programme's accepted representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure and explanatory notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-10) | Classification identity and fresh/chilled pig-meat scope |
| `unece-porcine-meat-2018` | `standard` | UNECE, ECE/TRADE/369/Rev.3, UNECE Standard: Porcine Meat - Carcases and Cuts, 2018, https://unece.org/trade/documents/2024/02/session-documents/unece-standard-porcine-meat-carcases-and-cuts (retrieved 2026-08-10) | Raw pork carcass/cut identity, handling state, product-form and packaging qualifiers |
| `fao-leap-pig-2018` | `official_guidance` | FAO LEAP Partnership, Environmental performance of pig supply chains: Guidelines for assessment, Version 1, 2018, https://openknowledge.fao.org/handle/20.500.14283/i8686en (retrieved 2026-08-10) | Cradle-to-primary-processing boundary, pig supply-chain data requirements and slaughter co-products |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius, CXC 58-2005, Code of Hygienic Practice for Meat, 2005, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/ (retrieved 2026-08-10) | Slaughter, dressing, hygienic handling, cooling and sanitation process requirements |
| `eu-853-2004` | `standard` | Regulation (EC) No 853/2004 laying down specific hygiene rules for food of animal origin, consolidated text, https://eur-lex.europa.eu/eli/reg/2004/853/oj/eng (retrieved 2026-08-10) | Pig slaughter/dressing hygiene, chilling, cutting and product-temperature rules |
| `eu-bat-sa-2023` | `official_guidance` | Commission Implementing Decision (EU) 2023/2749 establishing BAT conclusions for slaughterhouses, animal by-products and/or edible co-products industries, https://eur-lex.europa.eu/eli/dec_impl/2023/2749/2023-12-18/eng (retrieved 2026-08-10) | Annual water, energy, wastewater and refrigerant monitoring; pig-slaughter energy and wastewater QA ranges; process and waste controls |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-10) | Multifunctionality hierarchy, physical allocation, other-relationship allocation and disclosure |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass and reference-flow normalization identity defined in this PCR | 1,000 kg normalization, product-output identity and mass-balance validation |
