---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.non-alcoholic-wine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-alcoholic wine

## 1. Scope and Applicability

This PCR covers factory-gate foreground data production for a beverage obtained exclusively from wine or special wine that has fully attained its wine characteristics and is then dealcoholised to an actual alcoholic strength below 0.5% by volume. It covers receipt and qualification of the base wine, dealcoholisation, post-treatment finishing and stabilisation, release testing, and packaging when packaging is included in the declared product form.

Partially dealcoholised wine at or above 0.5% vol, grape juice or must that has not first become wine, non-grape fermented beverages, wine-based mixed drinks, aromatised wine products, and wine vinegar are excluded. Upstream grape growing and base-wine production, and downstream distribution, retail, use, and end-of-life are represented by linked datasets when they fall within the study scope; they are not silently absorbed into this foreground package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.non-alcoholic-wine |
| classification_refs | CPC 3.0: 24491, Non-alcoholic wine, exact mapping context |
| covered_products | Still or sparkling saleable beverages obtained exclusively from finished wine or special wine through permitted dealcoholisation and having actual alcoholic strength below 0.5% vol |
| excluded_products | Partially dealcoholised wine at or above 0.5% vol; beverages made directly from grape juice or must without first attaining wine characteristics; non-grape fermented beverages; aromatised wine products; wine vinegar |
| representative_product | Finished non-alcoholic wine, production mix, at plant |
| production_route | Qualified base wine receipt; partial vacuum evaporation, membrane technique, distillation, or a declared permitted combination; finishing and stabilisation; release; optional packaging |
| market_state | Saleable liquid beverage at the manufacturing plant, with packaging inclusion explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A saleable non-alcoholic wine beverage meeting the declared product and jurisdictional specifications |
| How much | 1 kg net beverage mass |
| How well | Produced from wine or special wine by a declared permitted dealcoholisation technique, with actual alcoholic strength below 0.5% vol and no organoleptic defect attributable to dealcoholisation |
| How long or cycle | One released production lot at the factory gate; no service duration |
| reference_flow_link | The functional unit is realised by the single reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net beverage mass |
| Reference product flow | Non-alcoholic wine `014d2659-f8e8-4a23-adfa-97cbda224bab` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | base-wine category and origin; still or sparkling state; dealcoholisation technique or combination; incoming and final actual alcoholic strength by volume; residual-sugar or sweetness class where relevant; packaging inclusion and format; production geography; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg of net beverage as the quantitative reference. Packaging mass is a separate inventory input and is never included in the 1 kg beverage mass. |
| `batch_normalisation` | all foreground exchanges | Mass, energy, volume, count, or other property appropriate to the resolved flow | kg reference product denominator | Normalize each lot or campaign total to released net beverage mass after deducting off-spec and rejected product. Preserve the original measured unit and conversion factor. |
| `alcoholic_strength` | incoming base wine and released product | Actual alcoholic strength by volume | % vol | Record laboratory or controlled in-line results for both incoming base wine and released product, including test method, sample time, temperature correction where applicable, and jurisdictional decision threshold. |
| `volume_to_mass` | liquid records reported by volume | Mass | kg | Convert volume to mass only with a measured or product-specific density for the same material state and temperature; retain the density, temperature, and source record. Do not assume water density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Base wine or special wine has fully attained its applicable wine characteristics, has no organoleptic defect that would invalidate dealcoholisation, and is accepted at the foreground facility with measured mass or volume, density when needed, and alcoholic strength |
| starting_condition_role | Upstream product input to the non-alcoholic-wine foreground production package |
| product_classification_scope | The canonical semantic scope above; CPC 3.0 code 24491 is mapping context and does not define the process boundary |
| recursive_input_rule | Purchased or transferred non-alcoholic wine used for rework is recorded as a separate input with its own upstream dataset and is not netted against the reference output; same-lot internal recirculation is reported in process notes but not double-counted as a boundary exchange |
| upstream_dataset_requirement | Base-wine inputs require a linked upstream dataset covering grape production and vinification through the declared accepted-wine condition, or an explicit documented cut-off if the study does not include those stages |
| disclosure | Declare base-wine category and source, dealcoholisation technique or combination, incoming and final alcoholic strength, recovered aroma handling, removed-ethanol fate, finishing operations, packaging scope, allocation decisions, excluded stages, and all linked upstream and downstream datasets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_wine_precondition` | product identity and starting condition | Dealcoholisation shall occur only after the input has become wine or special wine and attained the applicable wine characteristics; direct processing of juice or must does not satisfy this PCR. | `oiv-eco-432-2012`; `eu-reg-2021-2117`; `eu-commission-2024-694` |
| `sb_required_operations` | foreground boundary | Include accepted base-wine receipt, the declared dealcoholisation operation, associated electricity, heat or fuel, process and cleaning water, separation media or service inputs, recovered and discarded output streams, finishing and stabilisation, release testing, and foreground waste treatment or transfer. | `oiv-oeno-394a-2012`; `eu-reg-2021-2117`; `oiv-cst-431-2011` |
| `sb_permitted_techniques` | dealcoholisation | Identify partial vacuum evaporation, membrane technique, distillation, or the actual permitted combination. Do not use a generic undeclared “alcohol removal” process. | `oiv-oeno-394a-2012`; `eu-reg-2021-2117` |
| `sb_packaging_scope` | finishing and release | Include primary, secondary, and tertiary packaging and packaging losses when the reference product is declared packaged; otherwise exclude packaging and state that the reference product is bulk at plant. | `oiv-cst-431-2011` |
| `sb_downstream_linkage` | lifecycle model linkage | Distribution, retail cooling, consumer use, and end-of-life remain outside this foreground package unless explicitly brought into the declared study; when included, connect them as separate downstream datasets. | `oiv-cst-431-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `base_wine_acceptance` | Base-wine receipt and acceptance | required | Always | Foreground receipt, identity, and qualification | Accepted base-wine mass transferred to dealcoholisation |
| `dealcoholisation` | Dealcoholisation | required | Always | Foreground ethanol separation and intermediate production | Dealcoholised intermediate transferred to finishing |
| `finishing_and_release` | Finishing, stabilisation, and release | required | Always | Foreground final formulation, quality release, and reference-product production | 1 kg released non-alcoholic wine |

### Process: Base-wine receipt and acceptance (`base_wine_acceptance`)

#### Inputs

##### Product flows

###### Base wine accepted as the principal material input (`base_wine_input`)

Record each base-wine lot entering the foreground facility after it has attained wine characteristics. Keep supplier or internal upstream-dataset linkage, mass or volume and density records, alcoholic strength, wine category, origin, and acceptance result.

- Selected flow: Base wine or special wine, resolved for the declared category
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass attributable to the released lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_base_wine_lots`
- Sources: `oiv-eco-432-2012`; `eu-commission-2024-694`
- Range: Provisional base-wine input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.8
  - Upper: 2.0
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad first-pass estimate before site yield and removed-stream evidence are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Rejected incoming wine (`rejected_base_wine`)

Record incoming wine rejected after receipt when it crosses the foreground boundary to return, treatment, or disposal. Do not subtract it from accepted base-wine input.

- Selected flow: Rejected wine, destination-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Range: Provisional rejected-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad screening interval pending reviewed facility records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Dealcoholisation (`dealcoholisation`)

#### Inputs

##### Product flows

###### Accepted base wine transferred to dealcoholisation (`accepted_wine_feed`)

Record the accepted base-wine mass fed to the declared separation equipment. Internal tank transfers are reconciled but not double-counted as boundary inputs.

- Selected flow: Accepted base wine or special wine
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dealcoholisation_feed`
- Sources: `oiv-oeno-394a-2012`; `eu-reg-2021-2117`
- Range: Provisional separation-feed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.8
  - Upper: 2.0
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad first-pass estimate before site mass balance is available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to separation and aroma recovery (`dealcoholisation_electricity`)

Record metered electricity for pumps, vacuum systems, membranes, distillation equipment, chilling, controls, and aroma recovery attributable to the lot.

- Selected flow: Electricity, resolved to the site supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered or transparently allocated electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `oiv-cst-431-2011`
- Range: Provisional electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg released non-alcoholic wine
  - Basis: deliberately broad estimate spanning different separation configurations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy or fuel supplied to dealcoholisation (`dealcoholisation_thermal_energy`)

Record purchased heat or steam and direct fuel separately by resolved flow. Preserve energy property and measured quantity; do not combine unlike carriers into an undocumented total.

- Selected flow: Thermal energy, steam, or fuel, resolved separately by carrier
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or fuel-derived energy attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `oiv-cst-431-2011`
- Range: Provisional thermal-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ/kg released non-alcoholic wine
  - Basis: deliberately broad estimate spanning membrane, vacuum, and distillation configurations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and cleaning water supplied to dealcoholisation (`dealcoholisation_water`)

Record process water and cleaning-in-place water separately where metering permits. Exclude water already contained in the accepted wine.

- Selected flow: Process water, resolved to the site supply
- Flow property / unit: Mass / kg
- Amount rule: measured supplied water attributable to production and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Range: Provisional water-use screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad screening interval pending technology- and site-specific records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dealcoholised wine intermediate (`dealcoholised_intermediate`)

Record the net intermediate transferred to finishing together with actual alcoholic strength, mass, tank identity, and recovered-aroma recombination status.

- Selected flow: Dealcoholised wine intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_streams`
- Sources: `oiv-oeno-394a-2012`; `eu-reg-2021-2117`

###### Recovered ethanol-rich fraction sent to beneficial use (`recovered_ethanol_fraction`)

Record a recovered ethanol-rich fraction as a product output only when ownership, specification, destination, and beneficial use are documented. Otherwise use the waste row below.

- Selected flow: Ethanol-rich recovered fraction, composition-specific product flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured exported mass and measured ethanol concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Range: Provisional recovered-fraction screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad mass-balance screening interval; not an allocation default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Ethanol-containing separation residue sent to treatment (`ethanol_containing_waste`)

Use this row instead of the product row when the ethanol-containing fraction is discarded or sent to waste treatment. Record composition and destination.

- Selected flow: Ethanol-containing liquid waste, destination-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Range: Provisional ethanol-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad mass-balance screening interval; mutually exclusive with recovered product accounting for the same material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dealcoholisation and cleaning wastewater (`dealcoholisation_wastewater`)

Record wastewater leaving the foreground process by destination, with direct discharge or treatment route and relevant composition indicators retained in source records.

- Selected flow: Wastewater, treatment-route-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or volume converted with measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Range: Provisional wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad screening interval pending site water balance and cleaning records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Finishing, stabilisation, and release (`finishing_and_release`)

#### Inputs

##### Product flows

###### Dealcoholised intermediate transferred to finishing (`finishing_intermediate_input`)

Record the mass received from dealcoholisation and reconcile it to the corresponding intermediate output without creating a second system-boundary input.

- Selected flow: Dealcoholised wine intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_streams`

###### Finishing and stabilisation material inputs (`finishing_material_inputs`)

Create one resolved exchange for each water addition, recovered aroma, carbon dioxide, stabilising agent, filtration medium, or other permitted finishing material crossing the process boundary. Do not report an untraceable aggregate.

- Selected flow: Each finishing material, resolved separately
- Flow property / unit: Mass / kg
- Amount rule: measured or batch-formula quantity for each material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Range: Provisional total-finishing-material screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad aggregate screening interval; dataset exchanges remain material-specific
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and cold-stabilisation electricity (`finishing_electricity`)

Record electricity for chilling, filtration, pumping, carbonation, tank mixing, controls, and release operations.

- Selected flow: Electricity, resolved to the site supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered or transparently allocated electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `oiv-cst-431-2011`
- Range: Provisional finishing-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg released non-alcoholic wine
  - Basis: broad first-pass estimate pending site metering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and cleaning water (`finishing_water`)

Record product-contact and cleaning water separately when possible, excluding water already present in the intermediate.

- Selected flow: Process water, resolved to the site supply
- Flow property / unit: Mass / kg
- Amount rule: measured supplied water attributable to finishing and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Range: Provisional finishing-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad screening interval pending site water balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials when packaged product is declared (`packaging_materials`)

When packaging is in scope, create separate exchanges for the primary container, closure, label, secondary packaging, pallet or tertiary packaging, and reusable-packaging losses. Omit this row only for explicitly declared bulk product.

- Selected flow: Each packaging material and component, resolved separately
- Flow property / unit: Mass / kg
- Amount rule: component count multiplied by measured unit mass, including recorded losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Range: Provisional packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg packaging/kg released non-alcoholic wine
  - Basis: broad screening interval including bulk and heavy-container formats
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released non-alcoholic wine reference product (`released_non_alcoholic_wine`)

Record only saleable net beverage that passed product-identity, alcoholic-strength, sensory, and release checks. Packaging mass is excluded from this product-flow amount.

- Selected flow: Non-alcoholic wine `014d2659-f8e8-4a23-adfa-97cbda224bab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed at 1 kg as the reference product after normalization from measured released mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_release`
- Sources: `oiv-eco-432-2012`; `eu-commission-2024-694`
- Range: Reference normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: normalized reference product identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Off-spec or rejected finished beverage (`off_spec_finished_wine`)

Record product failing release or packaging checks by actual reuse, rework, treatment, or disposal destination. Rework returned to the same lot is not double-counted.

- Selected flow: Off-spec non-alcoholic wine, destination-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Range: Provisional finished-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad screening interval pending reviewed facility records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and cleaning wastewater (`finishing_wastewater`)

Record wastewater leaving finishing and cleaning by destination; retain relevant composition and treatment information.

- Selected flow: Wastewater, treatment-route-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or volume converted with measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Range: Provisional finishing-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad screening interval pending site water balance and cleaning records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging scrap and damaged components (`packaging_waste`)

When packaging is in scope, record packaging scrap and damaged components by material and destination, net of verified same-process reuse.

- Selected flow: Packaging waste, material- and destination-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured packaging scrap by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released non-alcoholic wine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional packaging-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg released non-alcoholic wine
  - Basis: broad screening interval pending packaging-line records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | all shared and multi-output operations | First avoid allocation through process subdivision, separate metering, or expansion of the model to include the displaced function where justified by the study goal. Document the chosen approach and do not combine it with another approach for the same burden. | `iso-14044-2006` |
| `alloc_internal_transfers` | internal intermediate transfers and same-lot rework | Do not allocate burdens between sequential internal stages. Carry measured inputs and outputs forward; do not count an internal transfer or same-lot recirculation as a new system-boundary input. | `iso-14044-2006` |
| `alloc_ethanol_fraction` | recovered ethanol-rich fraction or other exported co-product | If subdivision or system expansion is not practicable and allocation remains necessary, use a physical relationship demonstrably governing resource or energy use; use mass only when that relationship is justified. If no physical relationship is defensible, use an economic relationship based on a representative period. Report quantities, properties, prices, period, and sensitivity. | `iso-14044-2006` |
| `alloc_waste` | ethanol-containing waste, wastewater, rejected wine, off-spec product, and packaging waste | Waste treatment burdens remain with the foreground product until the documented point at which a secondary product with a defined function leaves the waste system. Do not assign co-product credit merely because a waste stream contains recoverable ethanol or material. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_base_wine_lots` | `base_wine_acceptance` | incoming base wine and rejection | lot receipt and laboratory record | lot_id; supplier_or_internal_source; upstream_dataset_ref; wine_category; origin; mass; volume; density; temperature; actual_alcohol_pct_vol; organoleptic_acceptance; accepted_or_rejected; destination | calibrated weighbridge, tank gauge, density record, laboratory or controlled in-line test, and signed acceptance record | kg; L; kg/L; % vol | each lot | all lots in the representative period | each foreground facility | sum accepted and rejected mass by lot and preserve source-specific linkage | calibration status; test method; sample id; acceptance record; supplier or internal trace |
| `cp_dealcoholisation_feed` | `dealcoholisation` | accepted wine feed | batch and tank transfer record | batch_id; source_tank; destination_equipment; technique; start_time; end_time; mass; volume; density; actual_alcohol_pct_vol | calibrated tank mass or volume measurement with density and batch linkage | kg; L; kg/L; % vol | each batch | all batches in the representative period | each dealcoholisation line | sum measured feed by released-lot linkage; exclude recirculation double counting | meter calibration; tank reconciliation; batch genealogy |
| `cp_utilities` | `dealcoholisation`; `finishing_and_release` | electricity, heat, steam, and fuels | meter, invoice, and equipment allocation record | meter_id; carrier; opening_reading; closing_reading; unit; batch_or_time_period; equipment_runtime; allocation_driver | dedicated meter preferred; otherwise documented allocation from shared meter or invoice | kWh; MJ; carrier-specific physical unit | each batch or shortest available billing interval | representative operating period covering production and cleaning | each facility and line | subtract non-production use; allocate shared use with documented driver; normalize to released mass | meter class; invoice reconciliation; allocation calculation; missing-data flag |
| `cp_water` | `dealcoholisation`; `finishing_and_release` | process water, cleaning water, and wastewater | meter and cleaning log | meter_id; operation; supplied_volume_or_mass; wastewater_volume_or_mass; density_if_used; treatment_route; cleaning_cycle | dedicated water meter and wastewater meter or reconciled tank/truck records | kg; m3 | each batch or cleaning cycle | representative operating period including cleaning | each facility and discharge route | separate product-contact, cleaning, and wastewater where possible; reconcile supply, product addition, evaporation, and discharge | meter calibration; cleaning log; discharge record; water-balance reconciliation |
| `cp_output_streams` | `dealcoholisation`; `finishing_and_release` | intermediates and internal transfers | tank transfer and laboratory record | batch_id; stream_id; mass; volume; density; actual_alcohol_pct_vol; ethanol_concentration; aroma_recovery_status; source_tank; destination_tank | calibrated tank or scale measurement and laboratory analysis | kg; L; kg/L; % vol | each transfer | all production lots in the representative period | each line and tank | reconcile linked output and input records; do not count internal transfer as boundary exchange | tank reconciliation; sample id; laboratory method; batch genealogy |
| `cp_finishing_materials` | `finishing_and_release` | finishing and stabilisation materials | batch formula and issue record | batch_id; material_id; resolved_flow_ref; lot_id; issued_mass_or_volume; returned_mass; density; purpose | controlled recipe plus warehouse issue and return record | kg; L | each batch | all production lots in the representative period | each facility | net issued amount by material; normalize to released mass | approved recipe; lot trace; scale calibration; material specification |
| `cp_packaging` | `finishing_and_release` | packaging materials and scrap | bill of materials, component mass, and line record | format_id; component_id; resolved_flow_ref; count_used; count_rejected; unit_mass; returned_count; reusable_cycles; scrap_mass; destination | verified bill of materials, counted components, sampled component mass, and scrap weighing | count; kg | each packaging run | representative packaging period | each packaging line and declared format | count times verified unit mass plus measured losses; separate materials and destinations | bill-of-material revision; scale calibration; count reconciliation; reuse record |
| `cp_waste_and_coproducts` | `base_wine_acceptance`; `dealcoholisation`; `finishing_and_release` | rejected wine, recovered fractions, waste, and off-spec product | transfer, weigh ticket, analysis, and destination record | stream_id; batch_id; mass; volume; density; composition; ethanol_concentration; product_or_waste_status; destination; ownership_transfer; revenue_if_allocation_used | calibrated scale, tank record, laboratory analysis, and signed transfer document | kg; L; % mass or % vol; currency | each transfer | all production and waste transfers in the representative period | each facility and destination | sum by stream status and destination; prevent product/waste double classification for the same mass | weigh ticket; laboratory method; destination evidence; contract or invoice |
| `cp_final_release` | `finishing_and_release` | released reference product | batch release and net-mass record | batch_id; product_id; net_released_mass; actual_alcohol_pct_vol; residual_sugar_or_sweetness; still_or_sparkling; sensory_result; package_scope; release_time; disposition | calibrated tank or filling-line mass balance, laboratory test, sensory release, and quality authorisation | kg; % vol | each released lot | all released lots in the representative period | each facility and product format | sum only conforming released net beverage mass; exclude packaging mass, rejects, and unreleased stock | signed release; laboratory method; calibration; product specification; lot trace |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | all foreground exchanges | Normalized exchange = attributable exchange quantity / measured released net beverage mass. Convert the denominator to kg before division and retain the original quantity and conversion. | exchange quantity; released net beverage mass; density or unit conversion where needed | exchange per 1 kg reference product |  |
| `calc_shared_utility` | shared electricity, heat, fuel, water, and cleaning services | Prefer dedicated metering. If shared, subtract independently measured non-product loads and allocate the remainder using a documented causal driver such as equipment runtime, throughput, or measured load; mass allocation is not an automatic default. | shared total; excluded loads; causal driver by product lot | attributable utility quantity | `iso-14044-2006` |
| `calc_packaging_mass` | packaging inputs | Packaging mass = sum for each component of net component count multiplied by verified unit mass, plus separately measured uncounted scrap; report each material separately. | component count; returned count; unit mass; scrap mass | kg packaging material per kg reference product |  |
| `calc_material_balance` | base wine, additions, intermediate, released product, recovered fraction, waste, and wastewater | Reconcile measured input and output masses at batch level. Report measured evaporation or vented material when known and disclose unexplained imbalance within the combined measurement uncertainty; do not force balance by changing the reference output. | measured inputs; outputs; stock change; evaporation or vented loss; measurement uncertainty | documented mass-balance reconciliation |  |
| `calc_allocation` | exported co-products and shared operations | Apply the selected allocation hierarchy once, using the collected physical or economic driver and documenting sensitivity where the allocation materially affects results. | subdivided burdens; exported quantities and properties; representative prices if used | allocated foreground exchanges and disclosed allocation factor | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and base-wine lots | Preserve product identity, wine category, origin, upstream-dataset linkage, still or sparkling state, and dealcoholisation technique for every included lot. | batch genealogy, supplier or internal record, product specification |
| `dq_measurement` | mass, volume, density, alcoholic strength, utilities, and waste | Use calibrated or controlled measurement systems appropriate to the quantity. Retain method, calibration status, sampling point, time, and any conversion factor. | calibration certificate, laboratory method, meter record, conversion worksheet |
| `dq_representativeness` | foreground period | Use a period covering the technologies, product formats, cleaning cycles, start-ups, shutdowns, and seasonal or campaign conditions represented by the dataset; explain exclusions and missing-data substitutions. | production schedule, batch list, coverage assessment, missing-data log |
| `dq_completeness` | process inventory | Account for accepted and rejected wine, all material additions, electricity, heat or fuel, water, released product, recovered and discarded ethanol fractions, wastewater, packaging when in scope, off-spec product, and directly measured emissions or losses. | process map, material and water balances, utility reconciliation, waste register |
| `dq_allocation` | shared services and co-products | Retain the unallocated totals, allocation hierarchy decision, driver data, calculation, and sensitivity needed to reproduce every allocation. | allocation worksheet and source records |
| `dq_product_release` | final reference product | Retain actual alcoholic strength, sample and method, release decision, sensory conformity, minimum-durability determination where applicable, and packaging-scope declaration. | laboratory certificate, signed release, sensory record, label or specification review |
| `dq_provisional_ranges` | all reasoned estimates | Treat every `reasoned_estimate` range as provisional authoring and QA guidance only. Replace it with reviewed foreground or source-backed evidence, or document explicit reviewer acceptance, before publication. | range-evidence review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | foreground package | Fail identity validation if the product was not obtained from wine or special wine that first attained its applicable characteristics, or if the dataset represents a directly fermented juice, partially dealcoholised wine, or another excluded beverage. | `oiv-eco-432-2012`; `eu-reg-2021-2117`; `eu-commission-2024-694` |
| `val_reference` | reference flow | Require exactly one reference output of 1 kg net beverage using product flow UUID `014d2659-f8e8-4a23-adfa-97cbda224bab`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. Packaging mass shall not be included in the reference amount. |  |
| `val_alcoholic_strength` | released product | Require a recorded actual alcoholic strength below 0.5% vol for this canonical scope, plus test method and release evidence. A jurisdiction-specific threshold shall be declared and may impose additional requirements, but shall not broaden this PCR to partially dealcoholised wine. | `oiv-eco-432-2012`; `eu-commission-2024-694` |
| `val_technique` | dealcoholisation process | Require a declared permitted technique or combination and evidence that dealcoholisation did not create an organoleptic defect. Flag simultaneous alcohol removal and compensating increase of sugar in the corresponding must as nonconforming. | `oiv-oeno-394a-2012`; `eu-reg-2021-2117` |
| `val_mass_balance` | each production lot | Require linked input, output, stock-change, and waste records and a documented reconciliation within combined measurement uncertainty. Report unexplained imbalance; do not manufacture a balancing exchange. |  |
| `val_stream_classification` | removed ethanol and other secondary streams | The same stream mass shall not be reported simultaneously as recovered product and waste. Require composition, destination, ownership transfer, and allocation treatment. | `iso-14044-2006` |
| `val_allocation` | shared and multi-output processes | Require avoidance or subdivision to be considered first. If allocation remains, require the chosen physical or economic relationship, period, factor calculation, and sensitivity to be reproducible. | `iso-14044-2006` |
| `val_packaging` | declared packaged product | When packaging is declared in scope, require material-specific packaging inputs and packaging waste; when bulk is declared, require packaging exchanges to be absent and the bulk condition to be explicit. |  |
| `val_provisional_ranges` | candidate quantitative guidance | Report every value outside a provisional range for review, but do not treat a `reasoned_estimate` as a legal or publication-critical conformity limit. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for finished non-alcoholic wine at plant |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product footprints and lifecycle models that explicitly link appropriate upstream base-wine production and declared downstream stages; comparison only when scope, product state, packaging, geography, technology, reference period, and allocation are equivalent |
| excluded_use | Direct representation of partially dealcoholised wine, grape juice beverages, non-grape fermented beverages, or a complete cradle-to-grave product system without linked upstream and downstream datasets |
| required_metadata | canonical PCR id; reference flow UUID and mass property; production geography and period; base-wine category and source; still or sparkling state; dealcoholisation technique; incoming and final alcoholic strength; packaging scope and format; allocation method; linked datasets |
| required_quality_disclosure | measurement and calibration coverage; laboratory and sensory methods; temporal and facility coverage; mass, water, and utility reconciliation; missing data; provisional ranges used; co-product and waste destinations; allocation sensitivity |
| update_trigger | Change in product definition or legal threshold; change in dealcoholisation technology or energy system; material change in base-wine sourcing, formulation, packaging, yield, co-product fate, allocation, facility coverage, or reference period; replacement of provisional ranges with reviewed evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `oiv-eco-432-2012` | official_guidance | OIV Resolution OIV-ECO 432-2012, “Beverage obtained by dealcoholisation of wine”, https://www.oiv.int/de/node/3304 (retrieved 2026-08-11) | canonical product definition, exclusive wine input, below-0.5% vol scope |
| `oiv-oeno-394a-2012` | official_guidance | OIV Resolution OIV-OENO 394A-2012, “Dealcoholisation of wines”, https://www.oiv.int/node/3274 (retrieved 2026-08-11) | process decomposition, permitted separation techniques, organoleptic and operating restrictions |
| `eu-reg-2021-2117` | standard | Regulation (EU) 2021/2117, ELI https://eur-lex.europa.eu/eli/reg/2021/2117/oj (retrieved 2026-08-11) | requirement that wine first attain its characteristics, permitted techniques, process and labelling boundary |
| `eu-commission-2024-694` | official_guidance | European Commission Notice C/2024/694, “Questions and answers on the implementation of EU rules on the de-alcoholisation of wines”, ELI https://data.europa.eu/eli/C/2024/694/oj (retrieved 2026-08-11) | distinction from partially dealcoholised wine, alcoholic-strength and release disclosures, minimum-durability responsibility |
| `oiv-cst-431-2011` | official_guidance | OIV Resolution OIV-CST 431-2011, “General principles of the OIV greenhouse gas accounting protocol for the vine and wine sector”, https://www.oiv.int/node/3309 (retrieved 2026-08-11) | energy and direct/indirect activity coverage, boundary and linked-stage disclosure |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, Clause 4.3.4 | allocation hierarchy, subdivision, physical and other allocation relationships |
