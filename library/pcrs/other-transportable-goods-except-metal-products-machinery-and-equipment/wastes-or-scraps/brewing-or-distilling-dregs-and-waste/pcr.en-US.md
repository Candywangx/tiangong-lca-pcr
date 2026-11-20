---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.brewing-or-distilling-dregs-and-waste
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Whole wet barley-malt brewers grain as a single feed ingredient

## 1. Scope and Applicability

This method covers one narrower wet single feed ingredient: the whole husk/fibre-rich spent-grain solids from malt-barley beer wort separation by an actual lauter tun or mash filter, collected and, only where real, mechanically pressed or screened, then first accepted for a named cattle-feed ingredient use. The raw material is already separated wet grain, not a purchased finished feed needing only packaging. Upstream actual malt and each declared cereal adjunct, milling, mashing and shared wort/grain separation remain compulsory physical and inherited-burden interfaces. Source synthesis combines industry brewing guidance, actual bulk moist-feed supply and equipment originals; it does not assert that these sources describe one SKU, factory, recipe or order. Actual grain/adjunct species, proportions, soluble carryover, press state and feed conformity are collected per lot; no barley percentage is invented. Lauter and mash-filter equipment are route choices, not two mandatory simultaneous operations or separate canonical products.

Exclude whole barley or malt, malting rootlets, ordinary dry-milling bran (39120), starch-factory residue (39130), wine lees/argol (39170), sugar-industry residues (39141/39149), beer or non-alcoholic beer, sweet wort as reference product, beer yeast or yeast blends, hot/cold trub, hops residue, distillery DDG/DDGS, whole stillage, industrial-ethanol residues, compound feed, dried/pelleted grain, chemical-preserved or ensiled/fermented supply, and nutritional-equivalence claims. Retain every real out-of-scope operation as a disclosed physical event and burden; a scope failure never deletes its inputs or emissions. Q is first conforming wet-mass release including qualified closing FG once; later storage, bulk loading and actual packaging are retained original-cohort services. No default moisture, composition, yield, wort/grain ratio, density, price, energy, shelf life, substitute or avoided burden is supplied. The classification waste heading is not a zero-burden or legal-status decision.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.brewing-or-distilling-dregs-and-waste |
| classification_refs | CPC 3.0:39160 Brewing or distilling dregs and waste, wet barley-malt brewers grain under the maintained narrower classification decision |
| covered_products | Whole wet unmixed unpreserved malt-barley brewing spent grain; actual cereal adjuncts and pressing state declared; one feed-ingredient receiving use |
| excluded_products | Whole grain/malt; malting rootlets; bran; starch residue; sugar residues; wine lees/argol; wort; beer; yeast/trub/hop blends; distillers grains/stillage; compound feed; dried/pelleted/ensiled/preserved product |
| representative_product | Wet barley-malt brewing spent grain at first feed-quality release |
| production_route | Actual wort-separation solids handoff; collection; conditional mechanical pressing/foreign-matter removal; sampling and first release; original-cohort storage/bulk supply |
| market_state | As-released wet single feed ingredient; independently measured net mass and dry matter; unmixed with yeast or other residues; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one conforming whole wet brewing-grain single ingredient to a named cattle-feed receiving use |
| How much | 1 kg net wet material at first qualified release, at measured same moisture/press state |
| How well | Actual recipient feed specification, measured dry matter/moisture, composition trace, foreign matter and quality tests; no nutritional substitution ratio |
| How long or cycle | One traceable first-release cohort with actual agreed storage/delivery conditions; Qc/H retained; no default shelf life |
| reference_flow_link | released_wet_grain |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole wet barley-malt brewers grain |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | brewery and lot; malt-barley origin and each cereal adjunct species/share; actual lauter-tun or mash-filter route; handoff gate and upstream Qc/burden vector; unmixed husk/fibre-rich whole grain identity; retained soluble extract and actual press state; wet mass and independent dry matter/moisture methods; first feed-quality release registry Q; foreign matter and actual feed-quality specification/test; named cattle-feed ingredient receiver/use; legal Product/Waste status and treatment owner; actual storage time temperature hygiene and delivery conditions; no drying pelleting ensiling chemical preservation or yeast/trub/hop addition; site and period H; opening/closing raw WIP FG and original cohort Qc; actual provider/voltage/fuel/carrier state; individual packaging custody and measured unit bridge; verified flow restrictions when an identity is selected |

All qualifiers must appear in dataset metadata, product/reference description or equivalent consumable context. The reference product is a semantic candidate with unresolved flow UUID; no broad by-product identity substitutes for verification of this actual terminal.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net wet first-conforming product at the same state; weigh without packaging. Q sums unique first releases including qualified closing FG once, excluding opening previously released FG and repeat release/dispatch. No dry-mass or nutritional replacement of Q. |
| wet_dry_bridge | all wet grain and liquor rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure wet mass and moisture/dry matter independently for the same lot/time/state. Water/dry matter/protein/fibre assays are non-additive component views, never extra purchased or emitted flows. No default water, extract, protein or density; one residual cannot solve two unknowns. |
| raw_basis | all inventory rows | Native measured property | native unit | Keep undivided raw numerators. Convert raw units/rates and genuine allocation/inherited vectors before section 8 normalize_once; cards/aggregation reuse its one result. Q0 retains all burdens and gives no unit result. Original-cohort services use original Qc; H is observation only. |
| energy_carriers | support | Native energy and carrier mass | MJ; kg | Electrical kWh to MJ uses 3.6. Heat requires actual supply/return mass, enthalpy and state and supplier water-energy convention. Integrated gas/liquid volume is not multiplied by time; only genuine rates are integrated. Use independently measured substance/state density; secondary coefficients do not establish density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual separated wet husk/fibre-rich malt-barley brewing grain before collection/conditional pressing and first feed-quality release; mandatory full upstream joint-process physical/burden handoff |
| starting_condition_role | upstream_intermediate |
| product_classification_scope | Narrow wet brewing-grain case within CPC39160; adjacent milling/starch/distillery/malt/beer/yeast/compound-feed identities are distinct |
| recursive_input_rule | Same-category purchased or returned wet grain retains actual supplier lot stage, physical state, previous Qc and inherited vector once; recursion never invents a parent malt purchase or resets release |
| upstream_dataset_requirement | Actual malt/each cereal adjunct supply and shared milling/mashing/wort separation, complete water/solids/wort balance, losses/stocks, provider method/gate and compatible grain-bound environmental vector |
| disclosure | All qualifiers; actual process/equipment route; upstream allocation and Beer PEF limitation; real Q/Qc/H; gross physical and inherited burdens separately; actual treatment owner and packages; ordinary gaps and true holds |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_upstream | raw_wet_grain | Require the actual supplier joint malt/adjunct supply, milling, mashing and wort/grain separation interface and inherited burden once. Declare each genuine input and output, water/dry matter, losses and stocks, allocation gate and supplier original Qc. No repeated parent-grain purchase or beer-line recreation. Missing material upstream burden is a dataset hold, not a free residue. | kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation; brewers-europe-beer-pefcr-2025 |
| b_operations | all processes | Include all real collection, mechanical pressing, screening, conveyors, storage, scales, sampling, cleaning, repairs, utilities, failed/start-stop/idle/Q0/rework and unauthorized operations. A declared narrow qualification never deletes an actual operation or flow. Actual drying, preservation or mixing is disclosed and prevents using the narrow reference identity until resolved. | kw-brewers-grains-2026; ba-solid-2024; ponndorf-wet-conveyors; vettertec-brewery |
| b_internal | liquid and grain transfers | Cancel only matched internal transfers at both measured endpoints, retaining upstream burden once. Return wort/liquor is not both fresh water and wastewater. Record real press liquor and recovered wort separately with independent mass/water/dry matter/solubles; actual external Products, Waste transfers and environment outlets have distinct owners/gates. | ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation |
| b_release | released_wet_grain; fg_service | First-quality-release Q includes first-qualified closing FG once. After release retain storage/loading/packaging service by original Qc, including historical opening FG, actual customer returns and original delivery reversal, true incremental rework F and inherited vectors. Internal Q cancels in the combined physical gate; do not add closing FG again as production. | kw-brewers-grains-2026; ilcd-2010-allocation |
| b_atomic | all inventory rows | Keep every actually present exchange atomic; add unlisted real inputs, whole supplied formulations, each fuel/chemical/package/replacement/waste and real environmental species individually. Conditional absence needs operating evidence, never a zero default. Wastewater and dust remain physical mixtures, not invented molecules; COD/TOC/total N/NOx are non-additive indicators unless a real species split is measured. | ba-solid-2024; ilcd-2010-allocation |
| b_native | UUID-bearing rows | Use complete native identity, route, form, composition, CAS where present, geography, supply mix, media, Product/Waste type and exact reference-property/unit chain. The semantic wet-grain candidate must meet all reference qualifiers; a generic by-product name does not establish identity. Actual provider/burden compatibility remains separate from flow identity. | kw-brewers-grains-2026; ilcd-2010-allocation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| grain_recovery | Collection and conditional pressing/foreign-matter removal | required | Actual separated-wet-grain handoff and real recovery route | foreground | per 1 kg reference flow |
| release | Sampling and first feed-quality release | required | Same lot with actual receiving use and specification | foreground | per 1 kg reference flow |
| fg_service | Original-cohort storage and bulk supply | required | All actual service including opening FG and return history | foreground | per 1 kg reference flow |
| support | Atomic utilities cleaning maintenance and emissions | conditional | Each actual stage-specific operation with retained failures and Q0 | foreground | per 1 kg reference flow |
| packaging | Individual protective article custody | conditional | Each actual protective sheet/bin; no mandatory package for bulk grain | foreground | per 1 kg reference flow |

Every conditional card requires evidence of presence/absence, not a zero default. Add all unlisted actual exchanges individually. Physical gross quantity and inherited environmental burden are separate non-additive views. Collection keeps undivided raw events; every card reuses section8 normalize_once.

### Process: Collection and conditional pressing/foreign-matter removal (`grain_recovery`)

#### Inputs

##### Product flows

###### Whole wet barley-malt brewers grain (`raw_wet_grain`)

Whole wet spent grain received at the actual lauter-tun or mash-filter solids outlet before the grain recovery operation. Weigh independently; retain water and adhered soluble extract in this single whole-material account. Require the actual brewery malt-barley and each cereal adjunct supply, milling, mashing water, wort separation, wort/solids/loss/stock gross records, original upstream Qc and grain-bound inherited environmental vector once. The foreground does not purchase the parent malt or recreate an already represented beer line. Never import later beer-only fermentation, chilling or filling indiscriminately. Its flow UUID remains unresolved; verify the whole wet grain, actual route, recipe and receiving specification before identity binding.

- Selected flow: Whole wet barley-malt brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_upstream`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ponndorf-wet-conveyors; ilcd-2010-allocation; brewers-europe-beer-pefcr-2025

###### Wet barley-malt brewers grain returned for rework (`rework_wet_grain`)

Only a real paired incoming rework transfer of the same whole grain, measured at both endpoints. Preserve previous stage Qc and inherited burden vector; an external returned previously released lot keeps its original release/delivery reversal. Reinspection or recirculation creates no new Q. This stage-specific unresolved UUID cannot be replaced by an incompatible feed blend.

- Selected flow: Wet barley-malt brewers grain returned for rework
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`
- Sources: kw-brewers-grains-2026; ilcd-2010-allocation

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Whole wet barley-malt brewers grain (`grain_to_release`)

Whole recovered wet grain transferred to sampling and first feed-quality release after the actual collection and any mechanical pressing or foreign-matter removal. Weigh and assay it independently; do not infer it from input minus an unexplained residual. Pair exactly with grain_for_release; no drying, yeast mixing, chemical preservation or ensiling belongs to this terminal. Its flow UUID remains unresolved; verify the whole wet grain, actual route, recipe and receiving specification before identity binding.

- Selected flow: Whole wet barley-malt brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`
- Sources: kw-brewers-grains-2026; ponndorf-wet-conveyors; vettertec-brewery

###### Recovered unfermented barley-malt wort (`recovered_wort`)

Conditional real separated liquid accepted back as wort by the brewery. Measure volume or wet mass, extract/dissolved solids, suspended solids and state independently. Declare Product acceptance and recipient or paired internal return; an internal return cancels only against its matching brewery receipt. It is neither new freshwater nor simultaneously wastewater. No default recovery or product credit.

- Selected flow: Recovered unfermented barley-malt wort
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_liquid`
- Sources: ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

##### Waste flows

###### Discarded wet-grain press liquor (`press_liquor`)

Only actual liquor sent for treatment rather than accepted wort. Independently measure whole liquor and its water/dissolved and suspended material subledgers. Record treatment owner and gate. A liquor return to the main line uses the paired internal account instead; a physical split must have independent measurements.

- Selected flow: Discarded wet-grain press liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`
- Sources: ba-solid-2024; ponndorf-wet-conveyors

###### Separated stone impurity from wet brewers grain (`stone_reject`)

Conditional independently weighed stone fraction at actual foreign-matter removal, with adhering grain and water accounted on one whole-stream basis. Do not include metal, spoilage or dust in this card.

- Selected flow: Separated stone impurity from wet brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`
- Sources: ba-solid-2024; ponndorf-wet-conveyors

###### Separated ferrous-metal impurity from wet brewers grain (`ferrous_reject`)

Conditional measured ferrous object rejected by the actual screen or magnet; preserve treatment destination. This is removed contamination, not a purchased replacement part or automatically a saleable coproduct.

- Selected flow: Separated ferrous-metal impurity from wet brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`
- Sources: ba-solid-2024; ponndorf-wet-conveyors

###### Wet barley-malt grain spillage sent for disposal (`grain_spill`)

Measure actual whole wet grain lost during collection/conveying, failed starts, leaks, cleanup or unauthorized work. Retain original inherited burden and real treatment; a recovered internal return is paired separately.

- Selected flow: Wet barley-malt grain spillage sent for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`
- Sources: ba-solid-2024; ponndorf-wet-conveyors

##### Elementary flows

### Process: Sampling and first feed-quality release (`release`)

#### Inputs

##### Product flows

###### Whole wet barley-malt brewers grain (`grain_for_release`)

Matched whole wet grain from grain_to_release; this is an internal custody transfer, not another external purchase. Preserve measured composition, actual pressing state and inherited vector. It is not a second functional output. Its flow UUID remains unresolved; verify the whole wet grain, actual route, recipe and receiving specification before identity binding.

- Selected flow: Whole wet barley-malt brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: kw-brewers-grains-2026; ponndorf-wet-conveyors

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Whole wet barley-malt brewers grain (`released_wet_grain`)

The sole reference output is net wet mass first accepted for one named cattle-feed ingredient use at the same measured state, excluding packaging. Batch release requires actual dry matter/moisture, recipe and adjunct trace, foreign matter, feed-quality tests and agreed hygienic storage/delivery conditions. Q includes first-qualified closing FG once; sales, loadout, opening already-released FG, repeated inspection and rework redelivery create no Q. Sampling and failures remain real outputs outside Q. Its flow UUID remains unresolved; verify the whole wet grain, actual route, recipe and receiving specification before identity binding.

- Selected flow: Whole wet barley-malt brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_release`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### Wet barley-malt brewers grain for rework (`rework_transfer`)

Only actual pending material returned to grain_recovery. Pair its mass and inherited vector with rework_wet_grain and cancel internally; preserve failed inspection events, new rework materials and energy. This transfer is not accepted Q.

- Selected flow: Wet barley-malt brewers grain for rework
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`
- Sources: kw-brewers-grains-2026; ilcd-2010-allocation

##### Waste flows

###### Rejected wet barley-malt brewers grain (`release_reject`)

Whole failed or spoiled grain, including startup and test batches, is weighed with measured state, original burden and actual owner/destination. Rejected lots do not enter Q. If actually sent to rework use paired rework transfers instead of counting the same mass here too.

- Selected flow: Rejected wet barley-malt brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: kw-brewers-grains-2026; ba-solid-2024

###### Wet brewers-grain laboratory sample consumed (`lab_sample`)

Record actual destructive laboratory samples as a distinct wet physical outlet with destination; a returned sample requires an actual paired return. Sampling does not disappear from mass closure or generate accepted product.

- Selected flow: Wet brewers-grain laboratory sample consumed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: kw-brewers-grains-2026; ba-solid-2024

##### Elementary flows

### Process: Original-cohort storage and bulk supply (`fg_service`)

#### Inputs

##### Product flows

###### Whole wet barley-malt brewers grain (`released_custody_in`)

Internal receipt of first-released Q plus separately recorded historical opening FG is custody, not a new purchase. Each lot retains original release Qc and per-exchange burden vector; no new grain manufacture is implied. Its flow UUID remains unresolved; verify the whole wet grain, actual route, recipe and receiving specification before identity binding.

- Selected flow: Whole wet barley-malt brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: kw-brewers-grains-2026; ilcd-2010-allocation

###### Wet barley-malt brewers grain returned from customer (`customer_return`)

Actual external return of still feed-conforming wet grain only, at its documented same state and Product status. Independently weigh and assay it; retain original delivery reversal, release Qc and burden history. A spoiled or legally Waste return uses spoiled_return instead. This conditional stage identity stays UUID-unbound rather than being called new production.

- Selected flow: Wet barley-malt brewers grain returned from customer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: kw-brewers-grains-2026; ilcd-2010-allocation

##### Waste flows

###### Spoiled wet barley-malt brewers grain returned from customer (`spoiled_return`)

Actual spoiled return accepted as Waste at this real receiving gate; record original delivery reversal and historical burden once, wet mass and independently measured dry matter, actual treatment owner and subsequent destination. It is not feed-qualified Product, new Q, or a second claim of the same customer_return mass.

- Selected flow: Spoiled wet barley-malt brewers grain returned from customer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: kw-brewers-grains-2026; ilcd-2010-allocation

##### Elementary flows

#### Outputs

##### Product flows

###### Whole wet barley-malt brewers grain (`gross_dispatch`)

Actual gross physical outward wet-grain shipments, including redelivery, at documented same feed-qualified state. Keep every shipment and original lot Qc; do not substitute net sales for gross physical mass or add dispatch to Q. Transport to farm and animal feeding are separate downstream stages unless explicitly added with their actual boundary. Its flow UUID remains unresolved; verify the whole wet grain, actual route, recipe and receiving specification before identity binding.

- Selected flow: Whole wet barley-malt brewers grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: kw-brewers-grains-2026; ilcd-2010-allocation

##### Waste flows

###### Discarded wet barley-malt grain from finished-goods custody (`fg_discard`)

Actual spoiled wet-grain stock withdrawn for one documented disposal route, including a physically traced spoiled customer return after receipt. Independently weigh whole wet mass and retain original cohort and new service burdens. A different waste destination needs its own atomic row. Separate actual spill and sample outlets use fg_spill and fg_sample.

- Selected flow: Discarded wet barley-malt grain from finished-goods custody
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: kw-brewers-grains-2026; ba-solid-2024

###### Wet barley-malt grain spillage from finished-goods handling (`fg_spill`)

Independently measured actual wet-grain loss from the original-cohort handling gate, with real collector and disposal/return destination. An actual recovered internal return must be paired, not also counted as disposal.

- Selected flow: Wet barley-malt grain spillage from finished-goods handling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: kw-brewers-grains-2026; ba-solid-2024

###### Wet brewers-grain custody sample consumed (`fg_sample`)

Actual destructive custody or dispatch sample, weighed separately with original Qc and burden; not a second quality-release output or an unexplained stock loss.

- Selected flow: Wet brewers-grain custody sample consumed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: kw-brewers-grains-2026; ba-solid-2024

##### Elementary flows

### Process: Atomic utilities cleaning maintenance and emissions (`support`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Actual purchased alternating-current grid electricity only. Record supply voltage, geography, mix, provider and meter boundary before selecting a compatible flow UUID. Use measured electrical energy in MJ (kWh multiplied by 3.6), without thermal efficiency. Include conveyors, presses, instruments, fans, own compressor, idle, Q0, cleanup and original-cohort services without duplicating their electricity.

- Selected flow: Alternating current
- Flow property / unit: Electrical energy / MJ
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ponndorf-wet-conveyors; ilcd-2010-allocation

###### Tap water (`tap_water`)

Actual municipal treated/potable water only, for cleaning, repair and any documented physical addition. The candidate is treated municipal water; actual provider identity requires verification. Weigh or use independently established matching water density and metered volume; a database secondary volume coefficient is not a measured site density. Water already inside raw wet grain or return liquor is not a fresh purchase. Genuine new water F remains even after failure or unauthorized work.

- Selected flow: Tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ponndorf-wet-conveyors; ilcd-2010-allocation

###### Diesel fuel (`diesel`)

Conditional actual diesel for handling/loading equipment, whole supplied formulation once. The semantic diesel candidate fixes no grade, formulation, density, LHV, refinery route, supply geography or provider; collect them for the real supply rather than inventing a default. Independently measure fuel mass, or verify its actual density/state for a volume bridge, and trace each combustion species. Purchased machinery service must not also duplicate its embedded fuel.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### Externally supplied compressed air (`compressed_air`)

Only actual externally supplied air. Record composition, pressure, temperature and measured mass or matching independently measured density/volume. Own-compressor power and internal air transfers are not another external purchase.

- Selected flow: Externally supplied compressed air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### Purchased steam heat carrier (`steam_supply`)

Only actual externally supplied steam, not an assumed dryer or boiler. Record mass, pressure, temperature, dryness, enthalpy and provider water/energy convention, condensate return and actual net heat once. Keep carrier mass closure and heat non-additive; do not buy fictitious boiler fuel.

- Selected flow: Purchased steam heat carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### Purchased hot-water heat carrier (`hot_water_supply`)

Only actual external hot-water heat supply, separate from municipal cleaning water. Record measured mass/flow, temperatures and enthalpy at both gates and actual returned water; never label MJ alone as net heat.

- Selected flow: Purchased hot-water heat carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### Pipeline natural-gas fuel mixture (`natural_gas`)

Only gas actually burned within this boundary, such as documented hot-water generation. Preserve actual composition, pressure, temperature, mass/volume and measured calorific basis; a natural-gas mixture must not be treated as pure methane or an unrelated process-specific supply. No drying fuel exists by default for this wet terminal.

- Selected flow: Pipeline natural-gas fuel mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### Sodium-hydroxide aqueous cleaning formulation (`caustic_cleaner`)

Conditional actual whole purchased caustic formulation, with actual concentration, additives, supplier and contact controls. Purchase it once; active NaOH and carrier water are non-additive assay subaccounts. In-house dilution records each truly purchased substance and new water/energy separately. A different reagent concentration or formulation does not establish cleaner identity.

- Selected flow: Sodium-hydroxide aqueous cleaning formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### Mineral lubricating-oil formulation (`mineral_lubricant`)

Conditional actual complete mineral lubricant for the handling equipment; record grade, whole formulation, retained stock, leaks and drained oil destination. A synthetic PAO lubricant is not interchangeable with this mineral-oil formulation. Add another specific card for a different actual lubricant.

- Selected flow: Mineral lubricating-oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

###### Stainless-steel pressing screen (`replacement_screen`)

Conditional actual complete replacement screen with specified alloy, mesh, mass and fittings boundary. Do not purchase its embedded alloy elements again. Retain real replacements even for failed or unauthorized repairs; an unverified structural-steel name is not the screen identity.

- Selected flow: Stainless-steel pressing screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ponndorf-wet-conveyors; vettertec-brewery; ilcd-2010-allocation

##### Waste flows

##### Elementary flows

###### Oxygen from ambient air consumed (`oxygen_uptake`)

Only actual oxygen consumed by documented combustion, oxidation or spoilage within this owner gate; independently measured or supported by validated species/element balance. Do not add a default air mass or use wet-mass residuals to invent reaction water. Unreacted air remains a non-additive gas-throughput balance with its independently measured composition.

- Selected flow: Oxygen from ambient air consumed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ilcd-2010-allocation

#### Outputs

##### Product flows

###### Steam condensate returned to heat supplier (`steam_condensate_return`)

Only real external Product return of the supplied steam carrier, with measured mass/state/enthalpy and provider convention. It is neither process evaporation condensate by name alone nor simultaneous wastewater/freshwater credit. Pair internal condensate if within one system.

- Selected flow: Steam condensate returned to heat supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ponndorf-wet-conveyors; ilcd-2010-allocation

###### Hot-water carrier returned to heat supplier (`heat_water_return`)

Only actual external return of the hot-water supply with measured outlet mass and thermal state. Match supply/return provider boundaries and retain net water losses, heat and actual make-up separately once.

- Selected flow: Hot-water carrier returned to heat supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: ponndorf-wet-conveyors; ilcd-2010-allocation

##### Waste flows

###### Wet-grain equipment cleaning wastewater (`cleaning_effluent`)

Whole actual effluent leaving for external treatment; record volume, independently measured density if mass is needed, pH, COD/TOC and measured real substances as non-additive characterisation. COD or total nitrogen is not a molecular pollutant mass. An effluent from another industry or an untreated release to water is not interchangeable with this external-treatment transfer. The actual treatment owner represents treatment emissions once.

- Selected flow: Wet-grain equipment cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_liquid`
- Sources: ba-solid-2024; ponndorf-wet-conveyors

###### Used mineral lubricating oil (`drained_oil`)

Actual separately collected drained mineral oil, retaining composition, contamination, inherited material and true waste handler; not an unmeasured oil-mist emission.

- Selected flow: Used mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ba-solid-2024; ponndorf-wet-conveyors

###### Discarded stainless-steel pressing screen (`removed_screen`)

Actual removed screen weighed with adhering material explicitly included or separated and measured. It is not automatically recycled or a virgin replacement; report owner and destination.

- Selected flow: Discarded stainless-steel pressing screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ba-solid-2024; ponndorf-wet-conveyors

###### Collected barley-malt grain dust sent for disposal (`captured_dust`)

Only actual collected grain dust, with whole dust composition and wet state measured. It is a waste-transfer flow; airborne particulate escaping collection is a distinct outlet. Actual dust need not exist in every wet plant, but cannot be hidden when it occurs.

- Selected flow: Collected barley-malt grain dust sent for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`
- Sources: ba-solid-2024; ponndorf-wet-conveyors

##### Elementary flows

###### water vapour (`water_vapour`)

Actual independently determined evaporation to the declared air compartment; distinguish carried water, steam carrier, condensate and reaction water. No reaction water is presumed in simple collection/pressing. One wet-mass residual cannot solve unknown evaporation and unknown liquor solids. Verify the actual species, carbon origin where applicable and final air compartment before UUID selection; retain the actual measured release without a default emission factor.

- Selected flow: water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### Barley-malt grain particulate matter to air (`grain_particulate`)

Actual emitted mixed grain particulate, not a fictitious single molecule or collected waste. Record composition, aerodynamic fraction, location and medium; do not bind a chemical dust flow from total-dust monitoring alone.

- Selected flow: Barley-malt grain particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### carbon dioxide (fossil) (`fossil_co2`)

Only actual combustion or other verified origin in this foreground; measure/derive from documented actual fuel carbon and oxidation after reconciling retained carbon. Do not add upstream power-plant emissions or default dryer emissions. Verify the actual species, carbon origin where applicable and final air compartment before UUID selection; retain the actual measured release without a default emission factor.

- Selected flow: carbon dioxide (fossil)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### carbon dioxide (biogenic) (`biogenic_co2`)

Only measured real biogenic release, for example actual spoilage; beer fermentation is not automatically inside the separated-grain foreground. Keep carbon origin separate and do not generate default credit. Verify the actual species, carbon origin where applicable and final air compartment before UUID selection; retain the actual measured release without a default emission factor.

- Selected flow: carbon dioxide (biogenic)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### Methane to air (`methane_air`)

Only actual methane leakage, spoilage or treatment emission owned within the declared gate; retain fossil/biogenic origin and independently measured species mass. Not all VOC, TOC or organic mass is methane.

- Selected flow: Methane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### carbon monoxide (fossil) (`carbon_monoxide`)

Actual CO species from the documented combustion event and air medium. Independently measured concentration times correctly integrated matching gas volume, not total carbon labelled CO. Verify the actual species, carbon origin where applicable and final air compartment before UUID selection; retain the actual measured release without a default emission factor.

- Selected flow: carbon monoxide (fossil)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### Nitrogen monoxide to air (`nitric_oxide`)

Actual NO species only; total NOx-as-NO2 is an indicator and cannot silently determine both NO and NO2. Preserve measurement conversion and exhaust boundary.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Actual NO2 species with independently determined species split; do not copy the same total NOx result into this and the NO row.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### nitrous oxide (`nitrous_oxide`)

Actual N2O species where measured or supported by a validated event-specific method; no blanket combustion or treatment factor is supplied. Verify the actual species, carbon origin where applicable and final air compartment before UUID selection; retain the actual measured release without a default emission factor.

- Selected flow: nitrous oxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

###### sulfur dioxide (`sulfur_dioxide`)

Actual SO2 species from documented fuel/operation; distinguish retained sulfur, other sulfur species and true stack discharge. No assumed diesel sulfur or emission default. Verify the actual species, carbon origin where applicable and final air compartment before UUID selection; retain the actual measured release without a default emission factor.

- Selected flow: sulfur dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: ba-solid-2024; ilcd-2010-allocation

### Process: Individual protective article custody (`packaging`)

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`cover_purchase`)

Conditional new supply of one actual unreinforced non-cellular non-self-adhesive LDPE protective sheet, neither laminate nor woven bag; actual mass, geography and provider must be collected; no default mass per sheet. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Low-density polyethylene foil (PE-LD)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### Low-density polyethylene foil (PE-LD) (`cover_return_in`)

Conditional external return received of one actual unreinforced non-cellular non-self-adhesive LDPE protective sheet, neither laminate nor woven bag; actual mass, geography and provider must be collected; no default mass per sheet. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Low-density polyethylene foil (PE-LD)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### Reusable HDPE wet-grain transport bin (`bin_purchase`)

Conditional new supply of one actual whole HDPE bin with documented fittings/composition, excluding the grain contents; the queried recycled-PE/PP container route is not evidence for every virgin or unknown actual bin. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Reusable HDPE wet-grain transport bin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### Reusable HDPE wet-grain transport bin (`bin_return_in`)

Conditional external return received of one actual whole HDPE bin with documented fittings/composition, excluding the grain contents; the queried recycled-PE/PP container route is not evidence for every virgin or unknown actual bin. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Reusable HDPE wet-grain transport bin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`cover_shipment`)

Conditional gross outward custody of one actual unreinforced non-cellular non-self-adhesive LDPE protective sheet, neither laminate nor woven bag; actual mass, geography and provider must be collected; no default mass per sheet. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Low-density polyethylene foil (PE-LD)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### Low-density polyethylene foil (PE-LD) (`cover_return_out`)

Conditional external empty return of one actual unreinforced non-cellular non-self-adhesive LDPE protective sheet, neither laminate nor woven bag; actual mass, geography and provider must be collected; no default mass per sheet. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Low-density polyethylene foil (PE-LD)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### Reusable HDPE wet-grain transport bin (`bin_shipment`)

Conditional gross outward custody of one actual whole HDPE bin with documented fittings/composition, excluding the grain contents; the queried recycled-PE/PP container route is not evidence for every virgin or unknown actual bin. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Reusable HDPE wet-grain transport bin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### Reusable HDPE wet-grain transport bin (`bin_return_out`)

Conditional external empty return of one actual whole HDPE bin with documented fittings/composition, excluding the grain contents; the queried recycled-PE/PP container route is not evidence for every virgin or unknown actual bin. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Reusable HDPE wet-grain transport bin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

##### Waste flows

###### Discarded Low-density polyethylene foil (PE-LD) (`cover_waste`)

Conditional discarded article of one actual unreinforced non-cellular non-self-adhesive LDPE protective sheet, neither laminate nor woven bag; actual mass, geography and provider must be collected; no default mass per sheet. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Discarded Low-density polyethylene foil (PE-LD)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

###### Discarded Reusable HDPE wet-grain transport bin (`bin_waste`)

Conditional discarded article of one actual whole HDPE bin with documented fittings/composition, excluding the grain contents; the queried recycled-PE/PP container route is not evidence for every virgin or unknown actual bin. Maintain this article separately: opening empty/attached WIP/FG/reusable stocks plus new purchases and external returns received equal all closing stocks plus attached gross-shipment outflow, external returns sent and waste. Internal reuse cancels; do not repurchase a returning article, add it to wet-grain Q or call it automatic coproduct. Weigh it or verify the actual same-article count-to-mass bridge; no standard article mass or trip count. This card records only its named direction and state.

- Selected flow: Discarded Reusable HDPE wet-grain transport bin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; physical g_i and linked environmental n_i are non-additive; keep raw records and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation

##### Elementary flows

## 7. Allocation and Co-product Handling

The following hierarchy applies only where the study is attributional and allocation is appropriate. These conditions bind every rule below; physical gross inventories are never allocation shares.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_framework | multifunctional upstream and foreground | This is attributional accounting where allocation is appropriate after the study-goal/framework decision; do not treat ILCD allocation guidance as a consequential substitution waiver. First independently meter dedicated grain recovery/pressing/delivery and subdivide common operations, including virtual subdivision where physically supported. Grain-exclusive treatment belongs to grain, never zero by a beer convention. | ilcd-2010-allocation |
| a_causality | remaining genuinely joint exchanges | Identify determining physical causality separately for each environmental exchange and co-function at the actual common process/gate. A mass, dry matter, energy or time property is not causal merely because measurable. Preserve actual constituent embodiment, water origin and service function; record reasoning and independent measurements, not a single arbitrary allocation key. | ilcd-2010-allocation |
| a_residual | unresolved common environmental burden | Only a genuine residual after subdivision/causality uses contemporaneous actual-state common-gate market values, with quantities, prices, period, units and sensitivity; adjust downstream conditioning/transport from prices only with evidence to return to that gate. No fixed share. Allocation changes environmental burden A, never physical gross V, actual waste, moisture, flow quantities or the wet Q denominator. | ilcd-2010-allocation |
| a_beer_pef | upstream brewery provider | Beer PEFCR Table21 and footnote17 apply its no-allocation-to-feed convention only to that beer study and explicitly do not authorise zero environmental impact for grain leaving the brewery. Require the actual supplier method and already allocated process/gate and reconcile it to this grain attributional method; an unresolved interface holds that dataset. Never extend a verified upstream convention to grain-specific pressing or delivery, or award zero whole-life burden. Annex4.2 is old sensitivity evidence with assumed beer dry matter and ration-specific substitutes, not transferable shares or credits. | brewers-europe-beer-pefcr-2025; ilcd-2010-allocation |
| a_status | products wastes and services | Product/Waste classification uses actual specification, receiving use, legal/disposal state and the supplier method; low price, the word dregs, a waste taxonomy or a feed marketing claim alone settles neither burden nor nutritional function. No automatic avoided-feed, recovered-water, heat or recycling credit; separately model any authorised scenario without altering the primary physical inventory. | kw-brewers-grains-2026; ba-solid-2024; ilcd-2010-allocation |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_upstream | grain_recovery | actual supplier handoff | supplier production and burden record | brewery; lot; actual malt source; each cereal adjunct species and quantity; milling; mash water; wort and grain wet mass; independent dry matter; liquor and impurities; upstream losses; opening and closing WIP; original Qc; allocation method and gate; exchange-specific inherited vector; actual provider | Reconcile the complete real joint wort/grain process and supplier physical balance independently, not from a beer output factor. Convert a supplier per-unit burden back to the actual received lot vector once. Document the actual method and its compatibility; preserve failures and unknowns. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg; native burden units | each received batch and supplier reconciliation | declared H plus all original upstream cohorts | actual brewery separation handoff | per 1 kg reference flow | supplier original records; scales; recipe; allocation worksheet; mass and vector closure |
| cp_mass | grain_recovery | physical wet material and transfers | scales stock and separation log | lot; gate; incoming and outgoing gross wet mass; water and dry matter tests; press state; soluble and suspended solids; raw and WIP stocks; genuine new F; paired internal transfer ids; return; waste destination; event owner; original Qc | Independently weigh every whole physical stream at matching gates; sample water/dry matter and actual recipe/foreign matter. Reconcile collection, pressing and screening without fitting two unknown streams to one residual. Preserve all failed and idle events. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg | each batch movement and stock close | same H and all affected cohorts | actual recovery and rework gates | per 1 kg reference flow | calibrated scales; matched transfer tickets; independent assays; balance residual with uncertainty |
| cp_release | release | first qualified wet output Q | quality-release registry and laboratory report | lot; net wet mass; tare; dry matter; moisture; species and adjunct trace; soluble carryover; pressing; foreign matter; actual feed specification; tests; receiver/use; release time and unique first-release id; qualified closing FG; failed mass; samples; prior release and rework flags; storage temperature time and hygiene | Weigh same-state net product on calibrated scales and sample with stated analytical methods. Match first acceptable feed-quality release to the same lot and named use; retain failures, samples, pending stock and old releases separately. No site feed certification is inferred from a source leaflet. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg | each sampling and first release | same H and original release history | actual first feed-quality release gate | per 1 kg reference flow | scale calibration; assay method; release approval; receiving specification; unique lot registry |
| cp_fg | fg_service | original-cohort stock and supply services | custody shipment return and service ledger | original Qc; opening FG and inherited vector; internal Q receipt; closing FG; gross shipment; customer returns; original delivery reversal; real rework; new water material and energy F; spoilage; samples; actual species; service owner; H | Trace every actual storage, handling and bulk supply event to its original release cohort, including historical opening FG. Weigh actual returns and losses and collect true incremental rework inputs; preserve original burden/reversal. Storage or retesting does not manufacture grain. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg; native service units | each movement service and stock close | H plus original cohort history | actual bins and loading custody gate | per 1 kg reference flow | weighbridge tickets; original release; return/reversal proof; service meters; stock ledger |
| cp_utilities | support | each actual water electrical fuel and carrier exchange | meter fuel invoice and heat-carrier log | stage and cohort; meter start/end; actual energy or water; kWh; fuel mass; actual formulation carbon sulfur LHV; gas composition pressure temperature; integrated volume or rate and interval; independently measured substance/state density; steam mass dryness pressure temperature enthalpy; hot-water supply and return; provider water/heat convention; condensate return; idle and Q0 load; original Qc | Collect raw unit-specific meters and actual supply documents. Integrate only true rates; distinguish integrated volumes. Independently measure conversion inputs and allocate shared services only after subdivision and causal review; record whole carrier supply/return before heat calculation. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg; kWh; MJ; m3 | each metered interval and operating event | same H including nonproducing periods | each actual meter and provider boundary | per 1 kg reference flow | calibration; meter map; invoices; density/enthalpy evidence; same-period allocation data |
| cp_liquid | support | each separate wort liquor wastewater outlet | liquid meter sampling and treatment transfer | origin gate; actual receiver and status; volume; wet mass; independent density; water fraction; extract; dry matter; dissolved and suspended solids; measured species; pH; COD TOC total nitrogen indicator basis; treatment owner; matched return endpoints | Independently meter and analyse every real liquid split and its actual accepted-use/treatment gate. Indicators characterise the whole stream and are not additive molecular masses. Treatment is represented by its real owner once; main-line return requires a paired receipt. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg; m3; actual assay units | each split batch and representative sample | same batch H and service cohort | actual recovery cleaning and treatment gates | per 1 kg reference flow | sampling method; liquid calibration; independent solids/water results; recipient acceptance |
| cp_maintenance | support | each whole chemical lubricant replacement and waste | purchase issue repair and removal records | specific article/substance; whole supplied formulation; active fraction as assay; supplier; concentration; stock opening closing; new F; dilution water energy; leaks; removed part; drained oil; actual waste handler; contact-control evidence; affected stage and Qc | Reconcile every actual complete purchase, issue, repair and removed object. Do not buy formulation components again; in-house preparation measures each genuine purchase and loss. Failed or unauthorized work still appears in raw ledgers. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg | each receipt repair and stock close | same H and affected cohorts | actual equipment cleaning and repair boundary | per 1 kg reference flow | supplier formulation; scale; issue ledger; repair records; waste receipt |
| cp_species | support | each actual environmental species and particulate | species-specific measurement and event balance | actual chemical species or explicit particulate mixture; origin; fossil/biogenic carbon; medium; concentration; measured integrated gas/liquid volume; rate if actually rate; time; pressure temperature moisture; independent density; gas generation capture return and release; reaction/water evidence; retained C N S; uncertainty | Use representative species measurements or a validated event-specific mass/element method with independently measured inputs. Avoid applying time twice to an integrated volume. Distinguish collected waste from escaped environmental mass and measured total indicators from individual species. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg; actual concentration and flow units | each actual emitting event and representative interval | same H including failures Q0 and services | actual emitting operation and final medium | per 1 kg reference flow | instrument calibration; sampling; fuel/element closure; species split; origin attribution |
| cp_packaging | packaging | each actual article custody | article stock issue shipment and return ledger | article id and composition; actual provider; verified same-article mass; opening empty; opening attached WIP/FG; opening reusable; new purchase; external returns received; all closing states; gross-shipment outflow; external returns sent; waste; internal reuse; original Qc | Independently weigh each actual protective sheet/bin and separate fittings when separately supplied; a verified same-article count/length bridge is allowed. Preserve all empty/attached/reusable states and actual external transfers; internal reuse cancels. Aggregation semantics: collect undivided raw quantities and inherited vectors; section8 normalize_once computes the sole final result and aggregation only references it. | kg | each article movement and stock close | all production and original-cohort service periods | actual bulk-load protective article custody | per 1 kg reference flow | supplier material specification; weighing; stock register; gross shipment and return tickets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_total | released_wet_grain | Q = sum(q_lot) over unique first feed-quality releases in H, measured net wet mass at the same state; include qualified closing FG once. Exclude opening already-released FG, repeat inspections, returns, internal custody and redelivery from new Q. | q_lot; unique first-release registry; cp_release | Q | kw-brewers-grains-2026 |
| wet_dry_bridge | raw_wet_grain; grain_to_release; released_wet_grain; press_liquor | For independently measured wet-basis water fraction w, dry mass = wet mass times (1-w). Independently test dry matter and soluble/suspended material at the same gate; reconcile uncertainty rather than solve multiple unknowns with one residual. Whole wet material is primary and component views do not add physical exchanges. | wet mass; w; independent dry matter; actual sample state; cp_mass; cp_liquid | non-additive dry and water bridge | kw-brewers-grains-2026; ponndorf-wet-conveyors |
| raw_units | all inventory rows | Convert raw observations to the named row unit before allocation: kWh times 3.6 = MJ; measured mass or independently established substance/state density times measured volume gives kg. Integrate actual rates once; never multiply an integrated volume by time. Whole purchased formulation is counted once; assay components are subledgers. | raw meter/scale observations; actual conversion evidence; cp_utilities; cp_species | raw V_i in the declared native unit | ilcd-2010-allocation |
| upstream_handoff | raw_wet_grain | Preserve the supplier whole joint-process gross physical ledger and original Qc; convert supplied normalized environmental data to the actual received lot vector exactly once, retaining its method/gate and prior allocation. Require a compatible attributed grain vector; do not apply another joint-process share to an already allocated vector or repurchase its embodied malt/water/energy. | supplier raw balance; original Qc; received mass; source method/gate; inherited vectors; cp_upstream | received lot inherited vector and separate supplier gross audit | ilcd-2010-allocation; brewers-europe-beer-pefcr-2025 |
| physical_manufacture | grain_recovery; release; support | For each actual mass gate: opening raw/WIP + genuine new external F + incoming transfers + actual environmental uptake = closing raw/WIP + first-release Q + gross returned wort/external Products + gross waste + actual elementary mass. Cancel matched internal transfers/rework only when combining gates. Energy MJ is not mass. Check total wet mass, independently measured water/dry matter and relevant actual C/N/S and species without shrinking gross V by any burden share. | raw/WIP stocks; F; paired transfers; Q; independent streams and species; cp_mass | unallocated manufacturing physical closure | ba-solid-2024; ponndorf-wet-conveyors; ilcd-2010-allocation |
| inherited_vectors | all inventory rows | For each environmental exchange, retain opening WIP inherited A plus real new converted and attributed load minus closing WIP inherited A, reconciling every real coproduct/waste/destination vector. Dedicated burdens remain direct; only genuine remaining joint burdens follow the section7 hierarchy. Failed/start-stop/idle/cleanup/rework/Q0 loads remain with actual cohorts. Physical stocks and A are independent ledgers. | opening/closing inherited A; actual new loads; allocation evidence; all destination vectors | attributable A_i with complete history | ilcd-2010-allocation |
| physical_fg | fg_service | Opening FG + internal first-release Q + gross actual customer returns + true new repair/rework material or water F + actual uptake = closing FG + gross physical dispatch + other external returns sent + service wastes + actual service environmental mass. Preserve historical burden and original delivery reversal; retest adds no mass or Q. | FG stocks; internal Q; gross returns/dispatch; true new F; losses/species; original delivery; cp_fg | unallocated FG custody physical closure | kw-brewers-grains-2026; ilcd-2010-allocation |
| combined_gate | grain_recovery; release; fg_service; support | Add manufacturing and FG physical gates and cancel identical internal Q and all other matched internal endpoints once. Qualified closing FG remains on the stock side and is not added again to production. Preserve all gross water, wet grain, waste, replacements, carrier returns and real species regardless of economic allocation, net sales or burden ownership. | manufacturing closure; FG closure; matched transfer ids | combined gross physical closure | ilcd-2010-allocation |
| heat_carriers | steam_supply; steam_condensate_return; hot_water_supply; heat_water_return | Compute actual net delivered heat from measured carrier mass and supply/return enthalpy at the documented provider boundary, including real carrier losses/make-up once under its water-energy convention. Carrier mass, its water and MJ are non-additive views. No assumed saturated state, return fraction, boiler efficiency or boiler fuel. | supply/return mass and state; enthalpy evidence; provider convention; cp_utilities | net heat plus separate carrier mass closure | ilcd-2010-allocation |
| duplicate_guard | all inventory rows | F denotes a genuinely new event. X removes only a proved duplicate representation of that same event on the same side of the same account. New rework/repair water, material, energy and real replacements are F and cannot be deducted as X. Whole wet material and components have one principal account with non-additive bridges. | event identity; same-side duplication proof; actual new receipt | deduplicated raw ledgers | ilcd-2010-allocation |
| normalize_once | all inventory rows | For positive actual Q, the sole normalization is g_i = V_i / Q for physical exchange quantity and n_i = A_i / Q for the separate linked environmental vector. V_i is actual gross physical quantity and is never multiplied by burden shares; form converted/allocated/inherited A_i first. Original-cohort services use their original Qc in this same operation; supplier gross audits keep their own Qc. Cards and aggregation reuse the one result without further division; H is not a divisor. Q0 retains raw V and A with ownership but yields no unit result. | V_i; A_i; Q; original Qc | g_i; n_i | ilcd-2010-allocation |
| package_balance | packaging | For each article separately: opening empty + opening attached WIP/FG + opening reusable + new purchases + external returns received = all closing stocks + attached gross-shipment outflow + external returns sent + waste. Internal reuse cancels and never constitutes repurchase, wet-grain Q or automatic coproduct. Separate article physical mass from attributed manufacture/washing/service burden and use original cohort Q/Qc once. | individual article stocks and gross transfers; actual unit bridge; cp_packaging | individual article closure and separate burden ledger | kw-brewers-grains-2026; ilcd-2010-allocation |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all processes | Verify actual brewing malt-barley/adjunct origin, separation route, press state, whole wet residue and single feed-use specification. Source synthesis does not establish same-factory quantities, every recipe percentage or actual feed certification. | supplier trace; recipe; process map; lot acceptance |
| dq_native | UUID-bearing rows | Audit every full native restriction and exact reference-property/unit chain in consumable descriptions. No generic by-product family certifies this narrower terminal. Require matching physical identity and provider fit before selecting a UUID. | matching original identity evidence; exact support rows |
| dq_measured | all physical gates | Use independent calibrated wet mass, dry matter/moisture and real liquid/solid/species measurements with uncertainty; no source typical composition, shelf life, density, yield or allocation share is a site default. | calibration; sampling; independent analyses; residual review |
| dq_history | all ledgers | Keep physical stocks and inherited environmental vectors separately by batch and original Qc. Reconcile upstream handoff, raw/WIP, first-release registry, FG/returns/rework, Q0 and individual packaging without dropping actual flows. | raw event ledger; burden vectors; gross balances |
| dq_gap | all dataset uses | Ordinary actual provider, quantity or auxiliary UUID gaps require collection and disclosure, not automatically draft core methodology. A real core wet-grain identity/terminal failure, missing joint upstream burden, unsupported allocation or unresolved material closure holds the affected dataset; no missing value is zero or covered. | explicit gap register; supplier and physical evidence |
| dq_source | all source evidence | Industry originals constrain actual product/route alternatives only; ILCD supports conditional attributional method; Beer PEF footnote17 is a limiting counterexample. Source applicability and the intended study framework must be documented independently. | source-specific applicability; original pages; review metadata |

## 9. Validation Rules

Failure of actual core identity, upstream burden or physical closure holds the affected dataset; an auxiliary identity/provider gap must remain explicit without deleting real exchanges. Check all following rules with their complete source context.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_terminal | released_wet_grain | Require one whole wet brewing grain from actual malt-barley wort separation, with adjunct trace, pressing state, no yeast/trub/hop blending or dry/pellet/preserved/ensiled identity, and actual single cattle-feed receiving specification. Never silently substitute DDGS, bran, starch residue, wort or beer. | kw-brewers-grains-2026; ba-solid-2024; ponndorf-wet-conveyors; vettertec-brewery; un-cpc3-2025 |
| v_handoff | raw_wet_grain | Verify the actual complete upstream joint process and grain-bound burden vector once, including supplier system/gate and original Qc. A Beer PEF no-feed-allocation record alone is insufficient for exported grain; unresolved interface remains a dataset hold, never zero. | ilcd-2010-allocation; brewers-europe-beer-pefcr-2025 |
| v_reference | released_wet_grain; fg_service | Explicit reference link selects released_wet_grain only. Q counts first conforming net wet release including qualified closing FG once; original released opening FG, returns and redelivery retain original Qc and burden without manufacturing new Q. | kw-brewers-grains-2026; ilcd-2010-allocation |
| v_balance | all physical gates | Independently reconcile upstream, manufacturing, FG and combined gross physical gates plus each packaging article. Cancel only measured matched internal endpoints including Q; never economic-scale gross V or double-add closing FG. Water/dry matter/elements and real species need independent evidence, not multiple-unknown residual fitting. | ponndorf-wet-conveyors; ilcd-2010-allocation |
| v_once | all inventory rows | Check raw collection is undivided, actual units/rates converted once and legitimate attribution/inherited A formed before the sole normalize_once operation. Physical V/Q and linked A/Q are non-additive; use original Qc for original services, never another division by H. Q0 retains real events and no unit result. | ilcd-2010-allocation |
| v_atomic | all inventory rows | Require every real atomic ingredient, whole formulation, utility, carrier return, package, replacement, waste and environmental species with complete descriptions and source ids. Missing auxiliary UUID is disclosed without deleting the flow; native hard mismatches cannot be waived by name. | ba-solid-2024; ilcd-2010-allocation |
| v_allocation | joint burden gates | Check dedicated/virtual subdivision first, exchange-specific determining physical causality second and only genuine residual contemporaneous actual-state common-gate market values; reconcile complete burden vectors and sensitivity. No automatic physical/economic share or feed substitution credit. | ilcd-2010-allocation; brewers-europe-beer-pefcr-2025 |
| v_actuality | all processes | Unlisted or unauthorised but real operations, failure/idle/cleanup/rework, spoiled stock and each actual environmental release remain in physical/burden records even if terminal qualification fails. Real treatment owner and final medium prevent duplication; no imaginary steam boiler, dryer exhaust or molecular conversion from aggregate indicators. | ba-solid-2024; ponndorf-wet-conveyors; ilcd-2010-allocation |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | One declared whole wet malt-barley brewing spent-grain single feed ingredient with complete upstream and recovery burden interface |
| allowed_use | Compatible actual recipe, wet/press state, feed receiving use and measured first-release basis; separate original-cohort supply services |
| excluded_use | Whole CPC39160 coverage; DDGS/stillage; yeast blends; compound feed; dry/pellet/ensiled material; 1kg wet to 1kg dry/protein/energy equivalence; zero-burden or substitution defaults |
| required_metadata | All required qualifiers; actual supplier method/gate; Q and original Qc/H; raw/WIP/FG stocks and inherited vectors; each package; each real treatment owner; native restrictions |
| required_quality_disclosure | Primary-source synthesis scope; independent measurements; provider and UUID gaps; upstream allocation compatibility; failed/Q0/return history; uncertainty and unresolved holds |
| update_trigger | Actual recipe or adjunct change; separation/pressing/preservation or feed-use change; upstream method/gate; stock ownership; provider/utility or packaging change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| kw-brewers-grains-2026 | handbook | KW Alternative Feeds. Brewers’ Grains, product datasheet 16 January 2026. https://kwfeeds.co.uk/wp-content/uploads/2026/01/Brewers-Grains-16.01.26.pdf | Complete four-page original: malted-barley starch extraction residue; moist single feed and bulk-tipped supply; actual feed uses; quality/disclaimer and fresh versus clamped/blended alternatives. Typical analysis, density, feeding rates and storage durations are source-specific, not adopted defaults. |
| ba-solid-2024 | handbook | Brewers Association. Solid Waste Management Manual, 2024, section3.3 pp15–17 and brewery cases pp36–37. https://cdn.brewersassociation.org/wp-content/uploads/2024/12/12094233/BAtech24-Sustainability-Solid-Waste-Management-Manual.pdf | Mashing/lautering grain origin, separate yeast/filter media/trub, collection and actual feed reuse; adjacent alternative food/compost/fuel outlets. Industry guidance is not feed certification, recipe or LCA allocation. |
| ponndorf-wet-conveyors | handbook | Ponndorf Anlagenbau. Conveyors for wet spent grains – also with attached hopper, complete manufacturer page, accessed 2026-11-20. https://ponndorf-gmbh.de/plants/conveyors-silos/conveyors-for-wet-spent-grains-also-with-attached-hopper/?lang=en | Actual lauter-tub/mash-filter to silo conveying, whole wet grain, drainage/cleaning and optional mechanical pressing sieve. Equipment capacities are not process quantities or mandatory stages. |
| vettertec-brewery | handbook | VetterTec. Brewery Industries, complete two-page manufacturer brochure with 2015/2016 artwork labels. https://www.vettertec.com/files/Medien/Content-Done/Broschueren/Technologies/Brewery%20Equipment/vt_BreweryIndustries.pdf | Collection/conveying/dewatering/silo/loading route; explicit dry-grain, mixed-yeast drying and pelleting counterexamples. No actual dryer, steam supply, protein composition or energy quantity is assumed for this wet terminal. |
| ilcd-2010-allocation | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA — Detailed guidance, first edition March2010, sections7.9.1–7.9.3 pp255–268 (PDF275–288). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Conditional attributional framework, subdivision/virtual subdivision, exchange-specific determining physical causality and only residual market value at actual state/common exit gate; no grain-specific default or consequential substitution waiver. |
| brewers-europe-beer-pefcr-2025 | standard | The Brewers of Europe. Revised PEFCR for Beer, 2025 revised draft approved by review panel, section5.7 Table21 footnote17 p55 and Annex4.2 pp93–98. https://brewersofeurope.eu/wp-content/uploads/2025/05/FINAL-Revised-draft-updated-PEFCR-as-approved-by-review-panel.pdf | Limiting counterevidence: beer-study no-feed-allocation cannot be exported as grain zero environmental burden; historical sensitivity has assumed beer dry matter and Dutch dairy-ration substitution. No numeric allocation/substitution values adopted. |
| un-cpc3-2025 | standard | United Nations Statistics Division. CPC Version 3.0, 30 June 2025, normalized structure and complete Explanatory Notes, PDF pp199–200: 39120/39130/39141/39149/39150/39160/39170. The 39160 entry has a heading only, without additional inclusions or exclusions. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification identity and adjacent boundaries only; broad leaf does not establish one canonical method, legal waste status, exact mapping or zero burden. |
