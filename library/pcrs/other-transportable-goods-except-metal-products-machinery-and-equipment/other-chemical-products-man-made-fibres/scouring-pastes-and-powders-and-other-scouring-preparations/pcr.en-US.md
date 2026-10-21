---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.scouring-pastes-and-powders-and-other-scouring-preparations
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Aqueous mineral scouring cream manufacture and delivery

## 1. Scope and Applicability

This narrower method covers manufacturing one non-bleach aqueous mineral abrasive cream from separately acquired ingredients by wet dispersion, followed by filling, quality release, storage, handling and actual accepted delivery in closed plastic bottles. The representative supply is Ecover Global Cream Cleaner500ml with its disclosed ingredient set; a site must confirm the natural ground-carbonate route, complete recipe and supply states. It is not a reconstruction of that manufacturer’s proprietary process. The Omya patent comparative GCC cream supports wet-dispersion operations only: its alkali, synthetic thickener and perfume recipe is different and supplies no defaults here. [ecover-cream-supply; omya-cream-dispersion]

Excluded: dry scouring powders, acid descalers, chlorine/oxygen bleach formulations, surface-reacted/PCC abrasive production, polishing wax/solvent products, surfactant/soap synthesis, use services and efficacy/dose equivalence. Soap, bleach and fragrance are not added from the CPC label. If the actual site uses them, or acid/base reaction processing, reassess this narrow scope with original manufacturing/species evidence rather than silently adding a generic recipe. A physically identical polishing formulation requires reuse assessment.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.scouring-pastes-and-powders-and-other-scouring-preparations |
| classification_refs | CPC3.0:35334; narrower |
| covered_products | Non-bleach aqueous ground-carbonate/bentonite/quartz abrasive cream with acquired coco-glucoside preparation and disclosed alcohol/preservative/glycerin/xanthan inputs |
| excluded_products | Dry powder; reactive acid/bleach formulations; pure abrasives; wax polish; oral/skin cosmetics; laundry formulation |
| representative_product | Ecover Global Cream Cleaner, supplied500ml plastic bottle; no default bottle mass, density, recipe proportion, purity or cleaning dose |
| production_route | Receive and weigh separate ingredients; wet/dispense and disperse minerals and gums in water; controlled agitation and surfactant/alcohol addition; actual homogenisation and inspection; filling and closure; quality release; stock and dispatch |
| market_state | Wet cream in closed plastic bottle; net cream mass excluding packaging at actual accepted delivery |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared mineral abrasive cleaning cream for hard surfaces; no claim of equal cleaning performance |
| How much | 1 kg |
| How well | Meet the declared actual recipe, solids/water, dispersion stability, physical state and quality acceptance specification; no universal efficacy threshold |
| How long or cycle | One documented production/stock/delivery accounting period with opening and closing cohort burdens |
| reference_flow_link | delivered_cream |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Washing Agent `1ee04905-0d1a-453e-9d3a-9ce612d79be0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual net accepted delivery gate and period; single non-bleach aqueous mineral-scouring SKU and recipe version; natural ground carbonate grade and particle distribution; bentonite and quartz identity and moisture; whole surfactant preparation assay and carrier water; denatured-alcohol constituents and assays; cream water and dry-solids fractions; bottle closure label and transport packaging BOM; measured net mass or actual density with temperature; site geography supply route and actual unit operations; matched opening and closing WIP finished goods and carried burdens; physical loss emissions test coverage and actual species evidence; declared quality acceptance criteria without dose or cleaning-equivalence default |

The reference UUID is broad identity only. Preserve the complete identity limitations in the terminal inventory card. Reference gate Q is actual net accepted delivered cream, not newly quality-released production P, bottle count or nominal500ml. Undelivered closing finished cream is not Q. Returns and later reacceptance never create another physical quantity; use persistent lot-unit identifiers and a documented correction ledger.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use1kg net delivered wet cream. Match all inventory and collection amounts to this actual delivery gate, product, route and state; Q>0. |
| wet_dry | material and product | Mass | kg | Keep as-received total mass, assayed solids/actives and carrier water separate. Dry mass=m_wet*x_dry is a subledger; do not buy both total solution and its constituents. |
| volume_mass | liquid and bottle | Mass | kg | Prefer net weighing. If volume conversion is necessary use m=rho_actual(T)*V with actual mixture density and units; no native secondary-property coefficient or pure-water/mineral density. |
| integrated_volume | measured gas or liquid | Volume | m3 | Integrated V is already a period quantity. A rate v requires time integration; never multiply an already integrated volume by duration again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Acquired ready-grade raw ingredients, utilities and packaging at actual receipt gate; opening raw/WIP/finished stocks and their upstream/process burden vectors declared |
| starting_condition_role | foreground_input_gate |
| product_classification_scope | CPC3.0:35334 narrower aqueous mineral cream |
| recursive_input_rule | Purchased finished cream is an explicit input with upstream burden, not a fresh onsite formulation; internal returned/reworked cream cancels on consolidation |
| upstream_dataset_requirement | Supplier-compatible full formulation, grade, assay, geography and provider evidence; this PCR and broad UUID supply no recipe quantities or background burdens |
| disclosure | Whole foreground through actual accepted delivery: wet dispersion, losses, failed runs, rework, packing, quality control, storage, handling, dispatch and carried WIP/FG burdens. Declare actual delivery place and transport scope. |

The one consolidated process below contains distinct physical operations; internal transfers cancel but their real operating loads remain.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | cream_delivery | Include all actual ingredient preparation, powder handling/wetting, dispersion, alcohol addition, quality sampling, filling, closure, cleaning, emission controls, storage and dispatch within the declared gate. Failed or zero-output runs and rework retain burdens; no hypothetical zero dust/VOC. | ecover-cream-supply; omya-cream-dispersion; niosh-carbonate-dust; niosh-ethanol-volatility |
| boundary_stocks | cream_delivery | Distinguish production release P from actual delivery Q. Reconcile raw, WIP and finished opening/closing stocks and their burdens. Newly released cream is only an internal production-to-warehouse transfer in the consolidated delivery process; never sum P and closing finished stock as terminal outputs. |  |
| boundary_chemistry | cream_delivery | No acid/alkali/chlorine combination is inferred from the category. Any real transformation needs independent species and reaction evidence; distinguish reaction gas/water, hydrate or structural water change, physical evaporation and entrainment. A closure residual or COD cannot establish them. | nist-water-phase |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cream_delivery | Wet dispersion, filling, stock and delivery | required | Actual eligible non-bleach aqueous mineral cream route | Consolidated physical foreground with separately owned raw ledgers | 1 kg |

### Process: Cream manufacture and delivery (`cream_delivery`)

#### Inputs

##### Product flows

###### Calcium-carbonate abrasive (`carbonate`)

Record the separately acquired ground mineral, actual natural provenance, particle distribution and moisture. Do not substitute precipitated or acid surface-reacted carbonate; manufacturer ingredient naming alone does not prove the natural grade.

- Selected flow: Ground natural calcium carbonate powder
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual carbonate; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply; omya-cream-dispersion; niosh-carbonate-dust

###### Bentonite rheology mineral (`bentonite`)

Record supplied grade, moisture and actual hydration/dispersion; do not represent clay as carbonate or assume all clay mass is dry solids.

- Selected flow: Bentonite powder
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual bentonite; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply

###### Quartz abrasive (`quartz`)

Record quartz grade, particle size, crystalline-silica content and actual charge separately from carbonate and bentonite. Assess its dust separately in the particle ledger.

- Selected flow: Quartz powder
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual quartz; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply; niosh-quartz-dust

###### Whole coco-glucoside preparation (`coco_glucoside`)

Record the whole separately purchased aqueous preparation and its actual active content, carrier water and other constituents as subledgers. No duplicate purchase of its active or water; do not copy the patent20percent solution assay.

- Selected flow: Aqueous coco-glucoside surfactant preparation
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual coco_glucoside; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply

###### Whole denatured-alcohol preparation (`denatured_alcohol`)

The disclosed Alcohol denat. is a whole commercial input. Confirm ethanol chemistry, assay, water and each actual denaturant from supplier primary records; the public ingredient list supplies none of these amounts. Add an individually named emission card for every actual volatile denaturant; no pure-ethanol procurement duplicate.

- Selected flow: Denatured ethanol preparation
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual denatured_alcohol; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply; niosh-ethanol-volatility

###### Glycerin preparation (`glycerin`)

Use the whole supplied glycerin grade and assay; any carrier water belongs to its subledger, not an additional ingredient input.

- Selected flow: Glycerin preparation
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual glycerin; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply

###### Preservative preparation (`phenoxyethanol`)

Record this one purchased preservative formulation, concentration and constituents; do not treat a supplier blend as pure phenoxyethanol without evidence.

- Selected flow: Phenoxyethanol preservative preparation
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual phenoxyethanol; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply

###### Xanthan rheology modifier (`xanthan`)

Record separately supplied gum, assay/moisture and actual wetting; no generic polymer-thickener replacement or patent Rheosolve recipe is imposed.

- Selected flow: Xanthan gum powder
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual xanthan; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply

###### Separately supplied formulation water (`blend_water`)

Record only water independently charged, after distinguishing solution-carried water; 500ml bottle volume is not product mass and pure-water density is not cream density.

- Selected flow: Formulation water
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual blend_water; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: ecover-cream-supply

###### Cleaning water (`clean_water`)

Record actual equipment and filling-line rinse water separately from retained formulation water; returned rinse used in formulation is an internal transfer, counted once.

- Selected flow: Equipment cleaning water
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual clean_water; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Electricity (`electricity`)

Meter dispersion, pumping, filling, inspection, ventilation/dust control, cleaning, warehouse and handling loads over the complete period; include failed runs and idle burden assigned to the product cohort.

- Selected flow: Electricity supplied to the site
- Flow property / unit: Electrical energy / kWh
- Amount rule: A_i/Q for actual electricity; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Purchased process heat (`heat`)

Conditional on actual heating. Record metered delivered heat separately; room-temperature mixing is not permission to remove real heating or drying. Onsite fuel heat requires the specific fuel and individual combustion emissions instead of a duplicate purchased-heat charge.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: A_i/Q for actual heat; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Handling diesel (`diesel`)

Conditional on actual diesel handling equipment. Record fuel, engine state and separate measured or independently factored individual combustion species; electric handling remains in electricity. No zero combustion or generic exhaust bundle is assumed.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual diesel; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Empty bottle (`bottle`)

The commercial example establishes a recycled/plant-plastic bottle, not a polymer grade or recycled fraction. Weigh the actual acquired bottle; retain resin/BOM, recycled-content and provider evidence.

- Selected flow: Empty plastic scouring-cream bottle
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual bottle; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources: ecover-cream-supply

###### Bottle closure (`cap`)

Record the actual separately acquired single closure, material and mass; an integral supplied closure is not purchased twice.

- Selected flow: Plastic bottle closure
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual cap; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Bottle label (`label`)

Include one actually supplied label article and its constituent/BOM evidence; if printing is onsite, replace with separate actual substrate, ink and adhesive exchanges.

- Selected flow: Printed bottle label
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual label; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Corrugated shipping carton (`carton`)

Weigh actual transport cartons and allocate actual reuse cycles; no assumed universal carton count.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual carton; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Pallet wrap film (`film`)

Conditional on actual use; weigh the single film article and record resin and waste.

- Selected flow: Pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual film; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Wood pallet (`pallet`)

Conditional on actual use; record physical mass, reuse, repair and real return logistics without one new pallet per shipment by default.

- Selected flow: Wood transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual pallet; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted delivered cream (`delivered_cream`)

One terminal Product output only: this declared non-bleach aqueous mineral scouring cream, net of its bottle and other packaging, actually accepted at the declared delivery gate. Native broad identity describes hard-surface cleaners including dirt/dust/stains/odour removal and liquid/powder/spray/granular forms, with surfactants as major constituents; it does not specify a cream recipe. Native optional name components, geography/locationOfSupply and CAS are absent; Product flow with Mass only, no density. Its35310 surfactant classification is inconsistent with the hard-surface preparation description and remains disclosed identity debt. No supplied factory, regional mix, grade or provider burden is inferred; require this dataset qualitative cream specification independently.

- Selected flow: Washing Agent `1ee04905-0d1a-453e-9d3a-9ce612d79be0`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_delivery
- Sources: ecover-cream-supply

##### Waste flows

###### Discarded cream (`reject_cream`)

Only discarded off-spec/returned cream crossing the waste boundary; internal rework is a transfer. Include wet mass, water/solids/organic composition and actual treatment.

- Selected flow: Discarded aqueous scouring cream
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual reject_cream; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

###### Collected mineral dust (`captured_dust`)

Actual captured mixed mineral powder is one waste stream; distinguish carbonates/clay/quartz composition, fines and moisture. Internal verified reuse is not a fresh external mineral purchase or an air emission.

- Selected flow: Collected mineral dust residue
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual captured_dust; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

###### Rinse effluent (`rinse_effluent`)

Record measured untreated aqueous discharge and solids/ethanol content to the actual wastewater recipient. COD is a water-quality observation, not carbon-species or reaction-water inference.

- Selected flow: Scouring-cream equipment rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual rinse_effluent; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

###### Discarded bottle (`bottle_scrap`)

Actual bottle rejects and breakage; separate retained cream to prevent assigning the same content mass to both packaging waste and cream waste.

- Selected flow: Discarded plastic bottle
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual bottle_scrap; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

###### Discarded closure (`cap_scrap`)

Record actual closure rejects independently.

- Selected flow: Discarded plastic closure
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual cap_scrap; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

###### Discarded label (`label_scrap`)

Record actual rejected labels; separate other liners or adhesive wastes as additional atomic rows when they occur.

- Selected flow: Discarded bottle label
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual label_scrap; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

###### Discarded carton (`carton_scrap`)

Record actual rejected/end-of-life cartons and treatment.

- Selected flow: Discarded corrugated carton
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual carton_scrap; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

###### Discarded wrap (`film_scrap`)

Conditional on actual film use and waste; no universal recycling credit.

- Selected flow: Discarded stretch film
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual film_scrap; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

###### Discarded pallet (`pallet_scrap`)

Conditional on actual pallet waste; distinguish repair and returned reusable pallets.

- Selected flow: Discarded wood pallet
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual pallet_scrap; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_balance
- Sources:

##### Elementary flows

###### Airborne mineral particulate (`mineral_pm`)

Quantify actual uncaptured emitted particulate independently of collected dust. Retain measured size fractions, carbonate/clay/quartz composition and test coverage; add individual supported species/fraction rows if required. No dust-free assumption from wet final product.

- Selected flow: Mineral particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual mineral_pm; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emissions
- Sources: niosh-carbonate-dust; niosh-quartz-dust

###### Ethanol emitted to air (`ethanol_air`)

Measure ethanol loss from actual receiving/mixing/filling/storage conditions or use an independently justified species-specific model. NIOSH pure-ethanol volatility supports investigation only, not a loss factor or cream density. Other denaturants and phenoxyethanol require their own actual species rows and evidence when emitted.

- Selected flow: Ethanol to air
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual ethanol_air; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emissions
- Sources: niosh-ethanol-volatility

###### Water physically evaporated (`water_vapour`)

Independently measured physical evaporation is not reaction water or a fitted mass residual. Separate free/sorbed/structural water changes and condensate; the NIST phase-change record supplies no factory rate.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_i/Q for actual water_vapour; raw numerator attributed to the delivered cohort and divided once in the sole reporting calculation
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emissions
- Sources: nist-water-phase

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_shared | cream_delivery | Avoid allocation with separate meters and batch/lot tracing first. For genuine shared utility, warehouse and handling burdens retain the measured total, causal driver, all product denominators, fractions summing to1 and sensitivity. Product-specific failed/rework burden stays with its cohort; no unreported loss subtraction. |  |
| allocation_returns | cream_delivery | Internal recovered cream/dust and return/reacceptance are not co-products or new output. Attribute retained burdens with the same persistent cohort ledger. Actual waste treatment is included; any externally saleable co-product requires separate identity, quantity and justified allocation, never an automatic recycling credit. |  |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | cream_delivery | ingredient and preparation records | weighing and supplier records | batch_id; supplier_lot; recipe_version; wet_mass; assay; solids; water; impurities; rejected_charge; opening_raw; closing_raw | Owner: formulation technologist. Retain unnormalised receipts, weighed actual consumed charges and raw-stock movements for every eligible run, including failures. Preserve whole preparations and constituent subledgers without duplicate procurement. Confirm natural carbonate, gum/mineral grades and actual denaturants; no patent recipe defaults. Retain raw totals and carry vectors only; calc_normalize is the sole reporting normalisation, not another operation here | kg and actual assays | Each lot and complete reporting period | One matched complete production/stock/delivery period including failed runs and stock carry | Actual named manufacturing and delivery sites and route | per 1 kg reference flow | Calibrations, invoices, original assays, lot links, raw meter/delivery/stock and review records |
| cp_utilities | cream_delivery | actual operating loads | meter and fuel records | meter_start; meter_end; timestamps; rate; integrated_volume; unit; temperature; density; heating; failed_run_energy; shared_driver | Owner: utilities engineer. Keep raw readings and matched operation/cleaning/idle/emission-control/warehouse/handling/dispatch burdens; record actual electric/fuel/heating arrangements. Rates and integrated volumes remain distinct. No division byQ here; collect real conditional-operation inputs and each actual emission species separately. Retain raw totals and carry vectors only; calc_normalize is the sole reporting normalisation, not another operation here | kWh; MJ; kg; m3; h | Each lot and complete reporting period | One matched complete production/stock/delivery period including failed runs and stock carry | Actual named manufacturing and delivery sites and route | per 1 kg reference flow | Calibrations, invoices, original assays, lot links, raw meter/delivery/stock and review records |
| cp_packaging | cream_delivery | each packaging article | BOM weighing and stock records | article_id; supplier; resin; mass; counts; opening; closing; scrap; reuse; returns; net_fill; tare | Owner: packaging engineer. Weigh each actual bottle, closure, label, carton, film and pallet and retain composition/stock/return evidence. Include filling rejects and actual loads. A complete purchased article includes its embedded constituents; no duplicate constituent purchase. Retain raw totals and carry vectors only; calc_normalize is the sole reporting normalisation, not another operation here | kg and count | Each lot and complete reporting period | One matched complete production/stock/delivery period including failed runs and stock carry | Actual named manufacturing and delivery sites and route | per 1 kg reference flow | Calibrations, invoices, original assays, lot links, raw meter/delivery/stock and review records |
| cp_delivery | cream_delivery | net accepted delivery and all stocks | traceable delivery acceptance and inventory | unique_lot_unit; P_release; gross_delivery; tare; accepted_net; returns; reacceptance; opening_WIP; closing_WIP; opening_FG; closing_FG; burden_vectors; storage_days; dispatch | Owner: quality-and-logistics controller. Retain unnormalised measured net deliveries and acceptance/return corrections, separate new releaseP, opening/closingWIP/FG mass and carried burdens, complete same-period release/storage/dispatch logs. Track unique physical units across returns and periods so reacceptance cannot manufacture output; correct earlier claims explicitly. Never include undelivered closingFG inQ. Do not divide any raw numerator here. Retain raw totals and carry vectors only; calc_normalize is the sole reporting normalisation, not another operation here | kg; burden vectors; day | Each lot and complete reporting period | One matched complete production/stock/delivery period including failed runs and stock carry | Actual named manufacturing and delivery sites and route | per 1 kg reference flow | Calibrations, invoices, original assays, lot links, raw meter/delivery/stock and review records |
| cp_balance | cream_delivery | mass species water and wastes | weighing assays and treatment manifests | opening_mass; receipts; WIP; FG; delivered; wastes; captured_dust; effluent; water_states; elemental_assays; reaction_evidence; uncertainty | Owner: process mass-balance engineer. Retain complete raw wet/dry/element/species ledgers and all sampled/wasted/returned material, measured water states and carry burdens. Reconcile physical balances separately from lifecycle burden attribution. If an actual reaction exists obtain independent stoichiometry/speciation and extent evidence; never fit two unknown outlets or reaction water to a shared residual. Retain raw totals and carry vectors only; calc_normalize is the sole reporting normalisation, not another operation here | kg and elemental/species assays | Each lot and complete reporting period | One matched complete production/stock/delivery period including failed runs and stock carry | Actual named manufacturing and delivery sites and route | per 1 kg reference flow | Calibrations, invoices, original assays, lot links, raw meter/delivery/stock and review records |
| cp_emissions | cream_delivery | particulate ethanol water and additional actual species | source-specific measured emissions | test_location; timestamps; exhaust_rate; integrated_volume; concentration; particle_fractions; mineral_assay; ethanol; denaturant_species; vapour; condensate; capture; uncertainty | Owner: environmental measurement engineer. Collect unnormalised measured source concentrations/volumes or justified species-specific factors with original method and time coverage; distinguish captured dust from release, ethanol from other organics, physical water vapour from reaction/structural-water change. Require independent evidence for actual reaction gas/water if present; otherwise no invented species. No missing test becomes zero. Retain raw totals and carry vectors only; calc_normalize is the sole reporting normalisation, not another operation here | kg; mg/m3; m3; h | Each lot and complete reporting period | One matched complete production/stock/delivery period including failed runs and stock carry | Actual named manufacturing and delivery sites and route | per 1 kg reference flow | Calibrations, invoices, original assays, lot links, raw meter/delivery/stock and review records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_conversion | physical raw ledgers | Convert each actual raw unit once to its row unit; m=rho_actual(T)*V only with actual solution density. Dry/active/carrier-water subledgers use measured fractions without duplicating external procurement. For a rate use integral(rate dt); integratedV receives no extra time factor. | raw_quantity; raw_unit; measured_density; measured_fraction; integrated_volume; duration | converted raw ledger |  |
| calc_delivery | terminal delivered_cream | Q=sum(unique net actually accepted cream deliveries) minus documented returns/corrections not retained as delivered; Q>0. Resolve cross-period return corrections and avoid counting reaccepted units twice. P is separately recorded quality-release mass. Opening/closingFG and WIP retain their own mass and carried burdens; closing undeliveredFG is not Q. | unique accepted net; returns; corrections; opening_FG; closing_FG; opening_WIP; closing_WIP | Q in kg and physical stock ledger |  |
| calc_burden | unnormalised delivery-cohort burdens | For each flow burden retain all raw product-assigned current-period loads D_i, opening carried load O_i and closing carried load C_i; delivered cohort numerator A_i=D_i+O_i-C_i, with documented lot attribution and shared-load allocation. Raw purchases versus consumption retain raw-stock corrections separately. Include failed/zero-output/rework/return, packaging, storage, handling and dispatch loads; carry undelivered/WIP burdens instead of dropping them. Cancel internal cream/dust transfers, never their operating loads. Distinguish current measured physical emissions from historical carried emission burdens. | D_i; O_i; C_i; lot attribution; shared allocation | unnormalised A_i and carry reconciliation |  |
| calc_normalize | all inventory cards | Report x_i=A_i/Q per1kg net delivered wet cream, once only after calc_conversion, calc_delivery and calc_burden. The terminal cream is Q/Q=1kg. Card Amount rule and protocol aggregation_rule refer to this same reporting operation; collection methods never predivide byQ. Do not divide already normalised vectors again. | A_i; Q | x_i per1kg net delivered cream |  |
| calc_physical_closure | complete physical mass elements and water | For each physical constituent: opening raw+WIP+FG plus external receipts and actual supported reaction/uptake equals delivered+closing raw+WIP+FG+actual waste+actual emissions and independently supported transformations, with sampling/returns and uncertainty explicit. ReleaseP is internal. Maintain C/Si/Ca and water subledgers using actual assays. No balance residual establishes reaction gas, reaction water, evaporation or a COD-derived species. | physical stock and receipts; delivery; waste; emissions; assays; independently supported species | separate closure and unresolved residual | nist-water-phase |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_recipe | all materials | Confirm actual whole supply states, all ingredients/denaturants, grades, assays, geography and route. Public lists/patent examples cannot fill unknown recipe proportions or purity. | Supplier originals, process records and complete BOM |
| quality_gate | reference and burdens | Require positiveQ, unique accepted delivery ledger and raw numerator/carry reconciliation. Unresolved stock burden or omitted failed runs makes delivery result incomplete. | Lot, return, WIP, finished stock and raw-period audits |
| quality_species | emissions and water | Keep detection limits, test coverage and uncertainty; missing is not zero. Independently justify every species/factor and every reaction-water claim; physical evaporation and captured dust remain distinct. | Original source tests, assay and species evidence |
| quality_native | all selected UUIDs | Broad reference identity retains every disclosed name/comment/geographic/property limit. Verify auxiliary native identities and supplier providers before dataset production; UUID/schema success is not methodological approval. | Complete exact native originals and provider compatibility evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_cream | Require exactly one declared terminal Product row consistent with reference UUID,1kg Mass and actual delivery gateQ; no rebranding an intermediate or co-product with the same UUID. Preserve thirteen complete required qualifiers. |  |
| validate_inventory | cream_delivery | Each inventory card is one physical exchange. All actual inputs, waste and emission species, operations and carry burdens are complete. Conditional absent exchanges need documented non-applicability; no generic zero VOC/dust, bleach or fragrance added from label. | ecover-cream-supply; niosh-carbonate-dust; niosh-ethanol-volatility |
| validate_accounting | all ledgers | Verify unit conversions, no repeated normalisation, complete WIP/FG burden carry, returns and shared allocation, physical mass/element closure and independently supported species/reaction-water versus physical evaporation. Unexplained residuals are findings, not fitted emissions. | nist-water-phase |
| validate_evidence | dataset applicability | EPO comparative laboratory cream is not the Ecover formula or factory. No patent speeds, recipe percentages, pH, abrasion, dose or emission factor is imposed. Manufacturer marketing is not functional equivalence; dataset actual recipe, gate and tests control applicability. | omya-cream-dispersion; ecover-cream-supply |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Mass-based upstream supply of the explicitly qualified cream at its declared delivery gate |
| allowed_use | Use with matching SKU chemistry, physical state, supplier route, gate and complete burden accounting |
| excluded_use | Universal CPC35334 default, soap/surfactant synthesis, bleach/acid product, polishing or cleaning-dose equivalence, pure mineral supply |
| required_metadata | All required qualifiers, period, route, actual sites, inventory scope, raw ledger owners and source identity |
| required_quality_disclosure | Reference native classification debt, unresolved auxiliary/provider identities, recipe uncertainty, test limits, stock carry and coverage; no scientific approval inferred |
| update_trigger | Recipe/grade/supply state, packaging, actual process, gate, source, provider or species evidence changes |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ecover-cream-supply | literature | Ecover Global, Cream Cleaner, snapshot2026-10-16. https://global.ecover.com/global/products/ecover/cream-cleaner/ | 500ml bottle and disclosed ingredient set only. No factory process, proportions, assays, polymer grade/mass, density, location or efficacy factor; usage copy not adopted. |
| omya-cream-dispersion | literature | Omya International AG, EP2883573A1,2015-06-17, Example3 paras0130-0133 Table7 comparative Sample10, PDFp14. https://data.epo.org/publication-server/rest/v1.2/publication-dates/20150617/patents/EP2883573NWA1/document.pdf | Original laboratory wet dispersion/GCC cream process decomposition. Different alkali/thickener/lemon/polysorbate recipe; not Ecover manufacture, industrial rate or numeric default. Samples11/12 surface-reacted mineral excluded. |
| niosh-carbonate-dust | official_guidance | NIOSH Pocket Guide, Calcium carbonate, reviewed2019-10-30, snapshot2026-10-16. https://www.cdc.gov/niosh/npg/npgd0090.html | Independent pure-carbonate powder/dust and natural/synthetic identity context only. Not quartz evidence, emission factor, product density or occupational-limit-based emitted mass. |
| niosh-ethanol-volatility | official_guidance | NIOSH Pocket Guide, Ethyl alcohol, reviewed2019-10-30, snapshot2026-10-16. https://www.cdc.gov/niosh/npg/npgd0262.html | Independent pure-ethanol volatility/species evidence only; not blend loss rate, actual denaturant identity, mixture density or zero VOC. |
| nist-water-phase | official_guidance | NIST Chemistry WebBook SRD69, Water, phase change data, snapshot2026-10-16. https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=4 | Independent physical water phase-change context only; no reaction-water stoichiometry, site evaporation or thermal-energy factor. |
| niosh-quartz-dust | official_guidance | NIOSH Pocket Guide, Silica crystalline as respirable dust, snapshot2026-10-16. https://www.cdc.gov/niosh/npg/npgd0684.html | Independent quartz/crystalline-silica particulate identity only; no product emission factor, actual grade, cream density or concentration-limit conversion to emitted mass. |
