---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-other
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other-use non-conifer roundwood

## 1. Scope and Applicability

This PCR covers untreated non-conifer roundwood supplied at forest-roadside producer handover for industrial uses other than sawing, veneer, pulp, panels or fuel. It includes raw poles, piling, posts, fencing and pitprops and feedstock for shingles/shakes, wood wool, tanning/distillation, mushroom growing and match blocks. These intended uses are qualifiers, not separate reference products. Finished poles/posts, chemical treatment, sawnwood, veneer sheets, finished shingles, wood chips, recycled wood and downstream use are outside the reference boundary. Veneer-specific billets and similar wood belong to the saw/veneer category, not automatically to this category. Product scope follows `un-cpc-other-nonconifer`; operation decomposition uses `fao-wood-harvesting`. All numeric screening ranges below are provisional, not typical performance claims or substitutes for collection.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-other |
| classification_refs | CPC 3.0: 03129 |
| covered_products | Untreated non-conifer other-use industrial roundwood; intended uses in section 1 |
| excluded_products | Conifer wood; saw/veneer/pulp/panel/fuel reference products; chips; treated or fabricated products |
| representative_product | One declared lot of other-use non-conifer roundwood at forest roadside |
| production_route | Actual managed plantation, coppice or natural-regeneration regime, or documented unmanaged natural origin; felling/removal and extraction, primary preparation, use grading |
| market_state | Unprocessed roundwood at forest-roadside producer handover; actual bark and moisture state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Other-use non-conifer industrial roundwood at forest-roadside handover |
| How much | 1 kg |
| How well | Declared species, intended use, dimensions/grade, bark and moisture state; no treatment |
| How long or cycle | Actual harvest lot and reporting interval, linked to all establishment/regrowth/management and harvest periods; no default rotation |
| reference_flow_link | `other_roundwood_roadside` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Roundwood of non-coniferous wood, other `b8b84d78-13c2-4dab-9b6d-8e7d9dc32f3b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual non-conifer species/cohort; origin and management regime; intended other industrial use; dimensions/quality grade; roadside handover; bark state; moisture value and wet/dry basis; reporting interval; route and contractor scope |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference and fixed standing timber | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual measured mass at stated moisture and bark condition. Standing timber also remains a kg exchange, not a volume amount attached to a mass identity. |
| `lot_bridge` | Volume or count records | Measured same-lot bridge | kg; m3; count | Retain solid versus stacked volume and geometry, bark basis and matching density/moisture. No universal hardwood density or volume/count conversion. |
| `moisture_basis` | Wood balances | Mass and moisture | kg; moisture fraction | Declare moisture convention. For wet-basis fraction w, dry mass=m_wet*(1-w); for dry-basis ratio r, dry mass=m_wet/(1+r). Never interchange them. |
| `input_units` | Energy, fertilizer and services | Actual compatible property | kg; kWh; h; count | Separate real carriers/materials/services. kg fuel plus kWh electricity is not one total. Record fertilizer product mass and nutrient composition separately. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual established/regenerating managed stand, equivalent purchased standing stock, or evidenced unmanaged natural non-conifer source |
| starting_condition_role | Source condition before harvest; not a finished-product gate |
| product_classification_scope | Other-use untreated non-conifer roundwood; exclude saw/veneer/pulp/panel/fuel reference outputs |
| recursive_input_rule | Declare acquired same-category wood state/gate and provenance. Link an equivalent upstream dataset; never loop the reference output into its own input or omit upstream burden. |
| upstream_dataset_requirement | Acquired managed standing stock must have equivalent species/cohort, origin, management periods and mass/moisture/bark basis. Where missing, collect/repair evidence rather than assume zero. |
| disclosure | Origin, interventions, planting/regrowth history, land/carbon ledger, actual route, start/end gates, ownership, reporting periods, shared assets and omissions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `roadside_gate` | All product outputs | Include actual stand-related duties, removal, extraction and primary preparation up to roadside producer handover. Exclude long-distance mill delivery, chemical treatment, fabrication and use. | `un-cpc-other-nonconifer`; `fao-wood-harvesting` |
| `node_responsibility` | Harvest and preparation | Harvest owns source removal and extraction; preparation owns raw-to-prepared changes. Do not add a parallel resource-removal node or duplicate combined cut-to-length operations. | `fao-wood-harvesting` |
| `source_history` | Stand/start condition | Collect actual origin and interventions across establishment, regrowth, thinning and final/selective harvest periods. Unmanaged source is not a zero-burden assumption; land/carbon records remain necessary. |  |
| `retained_material` | Residues and losses | Record retained branches, stumps, unmerchantable biomass and damage in the site ledger; export as product or waste only where actual destination establishes that status. |  |
| `shared_ownership` | Roads, machines and contractors | Identify consumers and service periods; allocate actual shared burden once. Purchased service must disclose embedded energy/equipment/emissions to avoid overlaps. |  |
| `boundary_direct_release_coverage` | `stand`; `harvest`; `preparation`; `grading` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_preparation; cp_direct_release_grading. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

The managed-production parent is `stand`. Plantation establishment adds planting-stock records; coppice adds stool/previous-cut lineage and regrowth-period records; managed natural regeneration adds recorded interventions without assumed planting or fertilizer. Choose the actual regime per cohort: these alternatives cannot represent the same trees simultaneously. Unmanaged natural origin bypasses this managed parent only after origin/history and necessary land/carbon records are documented; no generic managed timber identity is substituted. Harvest and extraction parent `harvest` may use manual, motor-manual, mechanized, animal or cable implementation only when actual equipment, terrain, distance and service scope are collected. Tree-length, whole-tree and cut-to-length routes change preparation location, material state and responsibility. Integrated operations may share one burden ledger, never duplicate felling or conditioning. These route deltas are collection requirements, not universal performance factors.

Select the route from actual incoming state and ownership. Qualified purchased harvested, extracted, prepared or graded feed may enter at its real receiving node; completed upstream operations are not mandatory foreground operations and standing stock or biological resources must not be charged again. Receiving cards record actual material, grade, wet/dry basis, receipt gate, upstream dataset and process coverage; add the actual receiving exchange if none exists. Bypass does not remove upstream burdens; actual operations cannot be skipped and final reference product, quality and gate remain unchanged.

## 6. Process Inventory Structure

Inventory reporting and process measurement layers: card amounts are reported per 1 kg reference flow; original quantities, same-lot process outputs, material states and period attribution remain individually recorded in collection protocols and calculation rules. Assign input burdens directly first and allocate shared burdens under Section 7. Preserve unallocated physical transfer and co-product ledgers, then divide each applicable lot amount by the positive final reference-product quantity of the same boundary and period; burden allocation must not shrink a material balance. Do not count internal transfers again as final outputs. Range blocks retain their explicitly declared original denominators: test process-output ranges locally before comparing any reference-normalized amount. If a Range must be converted, scale both bounds using the measured process-output/final-reference-quantity ratio and reviewed attribution factors applicable only to burdens, retaining original bounds and evidence; never assume this ratio is one. Each energy carrier, fertilizer formulation, material and substance keeps its own unit; unlike units cannot be summed. The final reference output is accepted lot quantity divided by itself; rejects, packaging and non-reference grades are excluded from its denominator.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand` | Managed stand production | `conditional` | Actual managed plantation, coppice or natural regeneration within scope; otherwise equivalent upstream record or documented natural source | Managed stock at forest-site handoff; establishment/regrowth/management responsibility | 1 kg other-use reference at roadside |
| `harvest` | Harvest, removal and extraction | conditional | Own harvest/removal or extraction occurs inside the foreground; managed and natural source inputs are mutually exclusive per lot. Bypass completed operations for purchased wood with matched upstream coverage. | Collected wood at landing; distinct removal responsibility, not stock growth or preparation | 1 kg other-use reference at roadside |
| `preparation` | Primary roundwood preparation | `conditional` | Actual delimbing, bucking or debarking; integrate with harvest only with one ledger and matching state handoff | Raw-to-prepared wood handoff before use grading | 1 kg other-use reference at roadside |
| `grading` | Intended-use grading and roadside handover | `required` | Actual accepted, reassigned, rejected or inventory-held lots | Enumerated use/destination states and sole reference at roadside | 1 kg other-use reference at roadside |

This map separates responsibilities, not mandatory duplicate datasets. A real integrated operation may merge nodes while preserving every state, transfer and burden ledger. Class-level energy, fertilizer, service and consumable cards may expand into zero, one or multiple actual exchanges; a variable class cannot receive one fabricated UUID or a mixed-unit amount. Record actual direct emissions, land occupation/transformation, biomass retained in the forest, damage and carbon stocks in the linked collection ledger. For any final elementary exchange establish substance, receiving compartment, unit and verified concrete UUID, and do not add a generic pollutant or automatic biomass carbon credit. Empty flow-type groups mean no generic exchange is prescribed, not permission to omit actual material flows.

### Process: Managed stand production (`stand`)

Node `stand` must complete the direct-release coverage reconciliation in `cp_direct_release_stand`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Non-conifer planting stock (`stand_planting_material`)

Collect planting stock actually introduced, including species, propagation mode and mortality; do not assume planting in coppice or naturally regenerated stands.

- Selected flow: Non-conifer planting stock
- Flow property / unit: Count / count
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand`

- Range: Provisional count QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: count
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Standing timber (merchantable growing stock) (`stand_merchantable_stock`)

For evidenced managed non-conifer stands only, measure the merchantable stock passed to harvest at forest site. Record cohort, periods, bark and moisture and use an actual same-lot mass-volume bridge.

- Selected flow: Standing timber (merchantable growing stock) `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows


##### Elementary flows



### Process: Harvest, removal and extraction (`harvest`)

Node `harvest` must complete the direct-release coverage reconciliation in `cp_direct_release_harvest`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Gasoline (`harvest_energy_gasoline`)

Felling and resource removal with an actual gasoline saw: this card covers only the gasoline component prepared on site, with two-stroke oil separately identified. Purchased premix needs its own compatible identity; diesel harvesters or electric saws require their actual separate identities.

Activate only when equipment and purchase records identify this fuel at this node. Record grade, formulation, supplier and actual mass; convert volume using documented density, not a default. The UUID identifies a fuel product, not a combustion service or emission factor. Account for actual foreground combustion separately without duplicating an inclusive upstream service. For on-site two-stroke mixing, count gasoline and the documented mixing oil separately; never assign the entire premix mass to gasoline. A purchased premix is a different product and must not be substituted with this UUID.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_harvest`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `saw-fuel-identity`

Apply `harvest_energy_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

###### Standing timber (merchantable growing stock) (`harvest_managed_stock`)

Use only for a managed forest or plantation starting condition with species/cohort evidence. Match the stand output or an equivalent upstream dataset; do not also enter natural biomass for the same trees.

- Selected flow: Standing timber (merchantable growing stock) `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows


##### Elementary flows

###### Natural non-conifer merchantable biomass removed from forest (`harvest_natural_biomass`)

Only for an evidenced unmanaged natural starting condition: quantify the removed merchantable biomass from forest inventory and actual mass-volume-moisture records. Retain land, management history and carbon records; this resource input does not imply zero upstream burdens or a carbon credit.

- Selected flow: Natural non-conifer merchantable biomass removed from forest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Non-conifer wood collected at extraction handoff (`harvest_raw_wood`)

Measure felled non-conifer wood after extraction to the landing, distinguishing tree-length, whole-tree and cut-to-length state. Retain same-lot identity; do not label it the final graded roadside product.

- Selected flow: Non-conifer wood collected at extraction handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered non-conifer harvest residues for a declared use (`harvest_recovered_residue`)

Record only residues deliberately recovered and handed off as a product, with actual destination and moisture basis. Material retained on site stays in the residue ledger, not a fictitious product exchange.

- Selected flow: Recovered non-conifer harvest residues for a declared use
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Non-conifer harvest waste sent to treatment (`harvest_exported_waste`)

Measure waste that actually crosses to a documented treatment destination; distinguish it from saleable residue and biomass retained at the site.

- Selected flow: Non-conifer harvest waste sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows



### Process: Primary roundwood preparation (`preparation`)

Node `preparation` must complete the direct-release coverage reconciliation in `cp_direct_release_preparation`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Gasoline (`preparation_energy_gasoline`)

Delimbing and bucking using an actual gasoline saw, with separately identified mixing oil; record optional debarking equipment separately. Exclude finished sawn goods and veneer production.

Activate only when equipment and purchase records identify this fuel at this node. Record grade, formulation, supplier and actual mass; convert volume using documented density, not a default. The UUID identifies a fuel product, not a combustion service or emission factor. Account for actual foreground combustion separately without duplicating an inclusive upstream service. For on-site two-stroke mixing, count gasoline and the documented mixing oil separately; never assign the entire premix mass to gasoline. A purchased premix is a different product and must not be substituted with this UUID.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_preparation`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preparation`
- Sources: `saw-fuel-identity`

Apply `preparation_energy_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

###### Non-conifer wood collected at extraction handoff (`preparation_raw_wood`)

Reconcile the raw wood accepted from harvest with lot, state, bark and moisture. Integrated cut-to-length work may combine nodes but cannot duplicate this transfer or its burdens.

- Selected flow: Non-conifer wood collected at extraction handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lubricating oil (`preparation_consumables_mineral_oil`)

Only for actual petroleum-based lubricant used by preparation equipment. Confirm supplier formulation; do not apply this petroleum identity to vegetable-based or PAO oils. Record destinations and losses separately without treating all consumption as combustion or assuming all oil is recovered.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual material mass consumed at this node, excluding returns and upstream-service inclusions; apply documented period/output attribution once and divide by the matched final accepted reference-output mass. Preserve raw quantities and do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preparation`
- Sources: `saw-chain-oils`

No numerical range is inherited from the former group. Collect actual quantity and uncertainty; lack of applicable range evidence does not justify a default or zero.

###### Rapeseed-based formulated saw-chain lubricant (`preparation_consumables_vegetable_oil`)

Only when the documented chain-oil formulation is rapeseed-based; retain additive composition and supplier grade. Raw edible rapeseed oil is not an interchangeable finished-lubricant identity.

- Selected flow: Rapeseed-based formulated saw-chain lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual material mass consumed at this node, excluding returns and upstream-service inclusions; apply documented period/output attribution once and divide by the matched final accepted reference-output mass. Preserve raw quantities and do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preparation`
- Sources: `saw-chain-oils`

No numerical range is inherited from the former group. Collect actual quantity and uncertainty; lack of applicable range evidence does not justify a default or zero.

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Prepared non-conifer roundwood before use grading (`preparation_wood`)

Measure delimbing, bucking and any actual debarking output passed to grading. Record dimensions, removed bark and moisture changes; no chemical treatment or finished-product conversion is included.

- Selected flow: Prepared non-conifer roundwood before use grading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered non-conifer preparation residues for a declared use (`preparation_recovered_residue`)

Record bark or offcuts recovered as products by actual destination, not as the roundwood reference. Each real exchange is identified during dataset construction.

- Selected flow: Recovered non-conifer preparation residues for a declared use
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Non-conifer preparation waste sent to treatment (`preparation_wood_waste`)

Measure rejected wood or bark actually dispatched to treatment and retain the destination; do not combine with retained residues or saleable co-products.

- Selected flow: Non-conifer preparation waste sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows



### Process: Intended-use grading and roadside handover (`grading`)

Node `grading` must complete the direct-release coverage reconciliation in `cp_direct_release_grading`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Diesel fuel (`grading_energy_diesel`)

Sorting and loading only where a diesel loader actually operates before the roadside producer gate; manual scaling does not activate this card and outbound mill transport is excluded.

Activate only when equipment and purchase records identify this fuel at this node. Record grade, formulation, supplier and actual mass; convert volume using documented density, not a default. The UUID identifies a fuel product, not a combustion service or emission factor. Account for actual foreground combustion separately without duplicating an inclusive upstream service.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_grading`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grading`
- Sources: `forest-operation-energy`

Apply `grading_energy_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

###### Prepared non-conifer roundwood before use grading (`grading_wood`)

Accept prepared lots with dimensional, moisture and bark records and reconcile the grading input with upstream output.

- Selected flow: Prepared non-conifer roundwood before use grading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Roundwood of non-coniferous wood, other (`other_roundwood_roadside`)

Measure the untreated other-use roundwood handed over at forest roadside. Aggregate within this category only after retaining actual intended-use, species and quality qualifiers; this is the sole reference output.

- Selected flow: Roundwood of non-coniferous wood, other `b8b84d78-13c2-4dab-9b6d-8e7d9dc32f3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Measurement detail: Divide positive measured roadside reference-lot mass by the same reference mass, normalized to 1 kg.

- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading`

- Range: Reference-mass normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Non-conifer sawlogs and veneer logs at roadside (`grading_saw_veneer`)

Record only lots genuinely reassigned to saw or veneer use; exclude them from other-use reference mass and retain actual buyer grade and gate.

- Selected flow: Non-conifer sawlogs and veneer logs at roadside
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Non-conifer pulpwood and panel roundwood at roadside (`grading_pulp_panel`)

Record roundwood reassigned to pulp or panel production, not chips or mill residues; it is a separate co-product outside the other-use reference.

- Selected flow: Non-conifer pulpwood and panel roundwood at roadside
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Non-conifer fuelwood at roadside (`grading_fuelwood`)

Record an actual energy-use destination separately; do not automatically turn unsold wood into fuelwood or claim avoided-fuel credit.

- Selected flow: Non-conifer fuelwood at roadside `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected non-conifer roundwood sent to treatment (`grading_reject_waste`)

Measure rejects sent to actual treatment after distinguishing other industrial destinations and temporary unsold stocks.

- Selected flow: Rejected non-conifer roundwood sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

- Range: Provisional kg QA screen (each actual component separately; not an empirical maximum)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg other-use reference product at roadside
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows




## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `physical_separation` | Intended outputs | First assign separable operation burdens to measured destination lots. Other-use roundwood, saw/veneer logs, pulp/panel roundwood, fuelwood and recovered residues are distinct actual outputs; never count one lot twice. |  |
| `shared_output_mass` | Remaining shared harvest/preparation/grading burdens | For genuinely inseparable common burdens use measured dry-wood mass shares over all intended outputs at their actual handoffs, with equivalent bark/moisture boundary. Document denominator and excluded water/waste. This protocol choice is not a universal forestry factor; unsupported conversion blocks this allocation. |  |
| `economic_exception` | Output attribution | If mass does not represent the production relationship, document a reviewed alternative using current same-gate prices/grades and perform sensitivity. Do not silently switch methods or apply avoided-product credits. |  |
| `period_asset_ledger` | Establishment, regrowth, thinning, harvest and shared assets | Link every input, asset, replacement/termination and output to actual cohort/period. Assign documented service-use shares across benefiting consumers, periods and outputs once; do not charge the same share more than once. Do not invent rotation, lifetime, yield or residual credit. |  |
| `waste_not_coproduct` | Waste and retained residues | Do not allocate intended-product burden to treatment waste or uncollected forest residue as saleable output. Retain disposal burden and carbon/land information under the declared method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `stand_fertilizer_specific_input` | `cp_stand` | Operation stand: Record actual fertilizer formulations and product mass separately, with nutrient analysis; zero is allowed only when non-use is evidenced. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. |
| `stand_service_specific_input` | `cp_stand` | Operation stand: Record outsourced operations and attributable road, equipment or other service use by actual scope and consumer-period ledger. Do not repeat burdens already in an upstream dataset or energy record. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. |
| `harvest_service_specific_input` | `cp_harvest` | Operation harvest: Record outsourced operations and attributable road, equipment or other service use by actual scope and consumer-period ledger. Do not repeat burdens already in an upstream dataset or energy record. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. |
| `preparation_service_specific_input` | `cp_preparation` | Operation preparation: Record outsourced operations and attributable road, equipment or other service use by actual scope and consumer-period ledger. Do not repeat burdens already in an upstream dataset or energy record. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. |
| `grading_service_specific_input` | `cp_grading` | Operation grading: Record outsourced operations and attributable road, equipment or other service use by actual scope and consumer-period ledger. Do not repeat burdens already in an upstream dataset or energy record. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. |


### Route-specific energy identification requirements

Select energy exchanges from the actual product state, operation, equipment and supply records. The conditional cards below are not a mandatory or exhaustive fuel list. For each requirement, document applicability and the used carrier, supplier, service period, native quantity and allocation; add a separate physically specific card and verify its UUID for any actual input not yet represented. An unidentified input remains an explicit completeness gap, never a zero or a generic energy exchange. Evidence of manual work, ambient drying or a bypass can justify non-use only for the affected operation. Preserve every required operation even when no example card is supplied.

Separate purchased supply from on-site conversion. Link self-generated electricity internally to the foreground generator and count its actual fuel and emissions there once; do not also charge a purchased-electricity supply for the same internal transfer. Likewise do not count supplier-side fuel again with purchased heat. Reconcile shared meters and contractor-included energy against existing cards, with one physical quantity assigned once. Retain source quantities, output throughput, shared-service allocation and excluded post-gate activities. For each carrier, apply period/output attribution once and scale to the declared reference quantity using matched accepted final output in the same product unit; do not normalize an already normalized amount again. Process-native intensities require a measured throughput link to that final output. These requirements do not set a consumption default or certify dataset completeness.

| requirement_id | collection_protocol_id | Required operation and evidence |
| --- | --- | --- |
| `stand_energy_identification` | `cp_stand` | Stand establishment and management equipment inside the declared forest boundary. Select fuel only from the actual silvicultural operation and engine specification; do not presume powered treatment. (`forest-operation-energy`) |
| `harvest_energy_identification` | `cp_harvest` | Felling and resource removal with an actual gasoline saw: this card covers only the gasoline component prepared on site, with two-stroke oil separately identified. Purchased premix needs its own compatible identity; diesel harvesters or electric saws require their actual separate identities. (`saw-fuel-identity`) |
| `preparation_energy_identification` | `cp_preparation` | Delimbing and bucking using an actual gasoline saw, with separately identified mixing oil; record optional debarking equipment separately. Exclude finished sawn goods and veneer production. (`saw-fuel-identity`) |
| `grading_energy_identification` | `cp_grading` | Sorting and loading only where a diesel loader actually operates before the roadside producer gate; manual scaling does not activate this card and outbound mill transport is excluded. (`forest-operation-energy`) |


### Material and service identification requirements

Identify each actual material or independently supplied service from supplier and activity records; record composition/specification, quantity, unit, node and period separately. Add one concrete exchange per identity before dataset completion; these requirements are not a single exchange. Reconcile with existing cards and inclusive services to avoid duplication. Allocate reusable assets over evidenced use and preserve physical quantities; normalize once to the matched final reference output. Missing identity or use evidence is a completeness gap, not zero use. Conditional examples below are not an exhaustive bill of materials and do not prescribe use or amounts.

| requirement_id | collection_protocol_id | Required scope |
| --- | --- | --- |
| `preparation_consumables_identification` | `cp_preparation` | preparation lubricants and cutting-tool replacements |


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand` | stand | Planting, fertilizer, managed stock, energy and service | Actual cohort and intervention ledger | species; origin; stand area; dates; planting/regrowth; fertilizer formulation/nutrients; energy carrier; asset consumer; stock moisture/bark/mass | Forest inventory, intervention records, invoices and same-lot measurements; Raw aggregation operation: Attribute cohort/period ledger once then normalize by measured reference mass; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. Route-specific requirements: `stand_energy_identification`: Stand establishment and management equipment inside the declared forest boundary. Select fuel only from the actual silvicultural operation and engine specification; do not presume powered treatment. (`forest-operation-energy`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. `stand_fertilizer_specific_input`: Operation stand: Record actual fertilizer formulations and product mass separately, with nutrient analysis; zero is allowed only when non-use is evidenced. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `stand_service_specific_input`: Operation stand: Record outsourced operations and attributable road, equipment or other service use by actual scope and consumer-period ledger. Do not repeat burdens already in an upstream dataset or energy record. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg; kWh; h; count; m3 retained separately | Every intervention and stock handoff | All actual establishment/regrowth/management phases supporting harvested cohort | Declared stand and related suppliers/assets | per 1 kg reference flow | Survey method; invoices; calibration; provenance; omissions |
| `cp_harvest` | harvest | Source, removed wood, recovered residues, waste, energy and service | Harvest/extraction lot and origin ledger | managed/unmanaged source; source history; tree/lot ids; technology; terrain; extraction distance; bark/moisture; mass/volume; residue/waste destination; land/carbon/direct emissions | Harvest tickets, forestry surveys, weighing, actual contractor scope and documented carbon/land measurements or explicit models; Raw aggregation operation: Reconcile source and collected outputs by lot; do not overlap managed/natural inputs; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. Route-specific requirements: `harvest_energy_identification`: Felling and resource removal with an actual gasoline saw: this card covers only the gasoline component prepared on site, with two-stroke oil separately identified. Purchased premix needs its own compatible identity; diesel harvesters or electric saws require their actual separate identities. (`saw-fuel-identity`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. `harvest_service_specific_input`: Operation harvest: Record outsourced operations and attributable road, equipment or other service use by actual scope and consumer-period ledger. Do not repeat burdens already in an upstream dataset or energy record. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg; kWh; h; m3; land/emission units separately | Each lot and actual operation | Actual harvest interval with source-period links | Source site through landing handoff | per 1 kg reference flow | Traceable tickets; paired measurements; model assumptions; service scope |
| `cp_preparation` | preparation | Wood-state changes, consumables, energy, services and destinations | Preparation batch ledger | raw/prepared lot; dimensions; bark removed; moisture before/after; consumables; service scope; residue/waste destination | Batch weighing and process logs, invoices and contractor evidence; Raw aggregation operation: Match raw/prepared states; quantify losses/destinations; integrate route once; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. Route-specific requirements: `preparation_energy_identification`: Delimbing and bucking using an actual gasoline saw, with separately identified mixing oil; record optional debarking equipment separately. Exclude finished sawn goods and veneer production. (`saw-fuel-identity`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. `preparation_service_specific_input`: Operation preparation: Record outsourced operations and attributable road, equipment or other service use by actual scope and consumer-period ledger. Do not repeat burdens already in an upstream dataset or energy record. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg; kWh; h; dimensions retained separately | Every batch | Preparation interval for matched harvest lots | Landing or actual preparation site before grading | per 1 kg reference flow | Scale calibration; moisture method; handoff records |
| `cp_grading` | grading | Use-grade outputs, energy, service and rejects | Roadside grade/handover ledger | lot; species; intended use; grade; dimensions; moisture/bark; accepted/reference/saw/pulp/fuel/waste/held amounts; buyer/gate | Weighing, grading records and handover tickets linked to actual buyers/destinations; Raw aggregation operation: Reconcile all grades/rejects/inventory; normalize only by actual other-use reference mass; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. Route-specific requirements: `grading_energy_identification`: Sorting and loading only where a diesel loader actually operates before the roadside producer gate; manual scaling does not activate this card and outbound mill transport is excluded. (`forest-operation-energy`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. `grading_service_specific_input`: Operation grading: Record outsourced operations and attributable road, equipment or other service use by actual scope and consumer-period ledger. Do not repeat burdens already in an upstream dataset or energy record. Original quantity method: Collect actual quantities under the linked protocol, attribute periods/outputs, and normalize separately by measured roadside reference mass. Evidence is required for non-applicability; missing is not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg; kWh; h; count and m3 only with actual bridges | Every grade decision and handover | Reporting interval and closing inventory | Forest-roadside producer handover | per 1 kg reference flow | Grading criteria; tickets; calibration; closing stocks |
| `cp_direct_release_stand` | `stand` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_harvest` | `harvest` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_preparation` | `preparation` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_grading` | `grading` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_inventory` | Separate physical-ledger and burden normalization | R is the positive final accepted net other-use roundwood mass in kg for the same boundary, lot and period, excluding co-products, internal transfers and unaccepted stocks. Report original material, co-product and transfer totals Q as q_phys = Q/R without a burden-allocation share. Report environmental burdens B as b_ref = B_attributed/R only after one evidenced direct/output/period/asset attribution. Do not divide final-reference intensities again; cancel paired internal transfers only at whole-package aggregation, not as additional final outputs. | unallocated physical totals Q; burdens B and attribution records; matched positive reference mass R | Amount per 1 kg reference | `mass-normalization-identity` |
| `dry_mass` | Wood and output allocation | m_dry=m_wet*(1-w_wet), or m_wet/(1+r_dry); use declared measured convention and matching bark state. | Lot wet mass; measured moisture; bark basis | Equivalent dry-wood masses | `mass-normalization-identity` |
| `mass_reconciliation` | Each wood-state handoff | Opening stock+received=outputs+retained/transferred losses+closing stock, on equivalent dry wood/bark basis; water changes separately. Document measurement uncertainty. | Matched lot/period input, output, loss and stock ledgers | Balance residual with measured uncertainty | `mass-normalization-identity` |
| `period_shares` | Cohorts and shared assets | Direct assignments first, then documented use-period/output shares summing to one for each actual burden; no universal lifetime. | Event ledger; asset service use; output dry masses | Attributed amounts without duplication |  |
| `calculate_direct_release_ledger` | `stand`; `harvest`; `preparation`; `grading` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_preparation; cp_direct_release_grading; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | Each final exchange | Confirm actual flow type, state/gate, intended use, destination and support unit/property before a concrete UUID; umbrella classes are not finished exchange identities. | Detail confirmation and actual lot/provider evidence |
| `measurement_quality` | Wood and conversion | Collect species and same-lot mass, moisture/bark and actual volume/count bridges. Missing data are not zero or an assumed density. | Calibrated measurements and bridge provenance |
| `coverage_quality` | All periods/nodes | Cover the actual management, source history, extraction and handover intervals and closing stocks; enumerate missing services, land/carbon or emission records. | Period/cohort/consumer ledger and completeness statement |
| `screening_quality` | All Range blocks | Provisional QA screens flag values for investigation, not rejection, defaults or conforming performance. Replace with reviewed local evidence when available. | Investigation and actual measurement evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_gate_check` | Reference lot | Require one untreated other-use non-conifer roadside output, positive measured mass and all qualifiers; no treated-pole, sawlog, pulpwood or finished-product substitution. | `un-cpc-other-nonconifer` |
| `state_balance_check` | All wood transfers | Match process/direction/state/lot, reconcile equivalent moisture/bark bases and stock changes, investigate measured residuals rather than force a default yield. | `mass-normalization-identity` |
| `source_route_check` | Source and route | For each cohort select managed or unmanaged source without duplicate trees; managed fixed standing identity requires evidenced managed context. Verify parent/delta and integrated-operation ownership from current records. |  |
| `period_shared_check` | Output/period/asset ledgers | Verify all intended outputs, period events, consuming nodes and actual handoffs; shares reconcile to one without repeated service, fuel or equipment burden. |  |
| `identity_units_check` | All final exchanges | Require concrete verified UUIDs and compatible property/unit for actual exchanges. Never bind an energy/fertilizer/service class to one arbitrary carrier; never sum unlike units. |  |
| `environment_check` | Land/carbon/direct emissions | Retain actual source and compartment/substance records, exclusions and uncertainty; no automatic carbon neutrality, stock credit, rotation, density or avoided-product credit. |  |
| `range_check` | Each card | For every supplied quantitative screen, verify the concrete exchange, bounds, compatible unit and denominator, basis, applicability, evidence kind and external sources; keep EN/ZH/projection equivalent. Provisional reasoned estimates are non-enforcing review prompts, not default quantities, allowed losses or proof of completeness. Where no compatible quantitative bound is supported, explicitly report screening unavailable and review measurements, matched component balances and uncertainty; do not invent a range to satisfy this check. Final reference normalization remains exact and is not an empirical yield. Actual exchange quantities, protocols and compatible unit/conversion evidence are required independently of screening. |  |
| `validate_direct_release_coverage` | `stand`; `harvest`; `preparation`; `grading` | For every activated node, reconcile its activity list against cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_preparation; cp_direct_release_grading: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

- Reconcile required/conditional activation and upstream coverage against incoming state at each node; purchased completed-state feed must not duplicate growth, harvest or preparation. Equal classification does not replace state and gate matching.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Untreated other-use non-conifer roundwood supply at the declared forest-roadside gate with explicit qualifiers |
| excluded_use | Finished/treated products; generic saw/veneer/pulp/panel/fuel supply; mill-delivered or downstream use inventories; automatic carbon credits |
| required_metadata | Actual product lot/species/use/quality; origin/management and land history; moisture/bark/measurement; start/end gates; parent/route deltas; periods/cohort; upstream and contractor scope; attribution |
| required_quality_disclosure | Completeness, calibration, missing identities/measurements, provisional QA screens, land/carbon/emission assumptions and uncertainty |
| update_trigger | Change in source, management, product intended use/grade, route/gate, supplier scope, measured conversion, allocation or environmental evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-other-nonconifer` | `official_guidance` | UNSD CPC 3.0 03129; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03129 | Other-use product boundary and exclusions |
| `fao-wood-harvesting` | `official_guidance` | FAO SFM Toolbox, Wood harvesting; https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=1 | Felling, extraction, landing preparation and documented alternative operation responsibilities; not numeric ranges |
| `mass-normalization-identity` | `method_factor` | Mass normalization identity q/M and dry/wet mass accounting identity; mathematical conservation with measured lot moisture/bark basis | Normalization and mass-balance calculations; no empirical density or yield |
| `saw-chain-oils` | literature | Skoupy, Biologically Degradable Oils for Power Saws, FAO World Forestry Congress, 2003. https://www.fao.org/4/XII/0093-B1.htm | Mineral and vegetable-based chain lubricant distinction; no regional legal rule, numerical consumption or environmental-loss fraction is adopted. |
| `forest-operation-energy` | official_guidance | FAO, Guidelines for implementation of forest management operations, harvesting/extraction and landing. https://www.fao.org/4/w8212e/w8212e08.htm | Conditional equipment and boundary context; no fuel intensity, universal powertrain or logging prescription is adopted. |
| `saw-fuel-identity` | handbook | STIHL, Mixing Oil and Gasoline. https://www.stihlusa.com/en/guides-projects/how-to-use-start/mixing-oil-and-gasoline | Distinguishes gasoline and mixing oil for an actual compatible saw; no universal mix ratio is prescribed. |
