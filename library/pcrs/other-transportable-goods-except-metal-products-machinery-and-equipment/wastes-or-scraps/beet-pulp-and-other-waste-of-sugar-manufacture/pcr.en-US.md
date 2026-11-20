---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.beet-pulp-and-other-waste-of-sugar-manufacture
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Beet-pulp and other waste of sugar manufacture — fresh unmolassed pressed wet pulp

## 1. Scope and Applicability

This PCR retains its canonical identity for beet-pulp and other waste of sugar manufacture but authors only one narrower endpoint: sugar-beet pulp left after sucrose extraction, mechanically pressed, unmolassed, not dried or pelletized, and released fresh without ensiling or deliberate fermentation as one feed material. The function is one qualified supply for the declared receiver, not an animal production or nutritional-equivalence service. The manufacturer family and historical independent process evidence are a transparent synthesis, not one SKU or one factory inventory. Other 39149 residues remain outside this method.

The physical foreground begins at the declared extracted-pulp or already-pressed-pulp hand-off and includes the actual work still needed through first complete quality release. Supplier sugar-beet supply, washing/slicing/diffusion and genuine joint burdens are inherited once with their original method. Pressing is performed only when not already present in that hand-off. Post-release holding, handling and loading through factory-gate dispatch remain visible as a separate service ledger linked to the actual lots served. No drying, molassing, pelleting or silage process is assumed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.beet-pulp-and-other-waste-of-sugar-manufacture |
| classification_refs | CPC 3.0:39149, fresh pressed wet pulp under the maintained narrower classification decision |
| covered_products | Sugar-beet diffusion residue mechanically pressed and supplied as one unmolassed fresh wet feed material; no deliberate ensiling or fermentation |
| excluded_products | Bagasse (39141); molasses; raw beet roots or tops/tails; unpressed diffuser pulp as finished product; dried or pelleted pulp; molassed pulp; silage; fermented substrate; carbonatation lime; starch residues; compound feed; generic organic waste |
| representative_product | Unmolassed pressed wet sugar-beet pulp for a declared feed receiver; bulk fresh supply at first quality release |
| production_route | Sugar-beet supply and washing/slicing/diffusion as one verified upstream hand-off; actual pressing if not already performed; conveying; sampling; first release; separate gate storage/loading service |
| market_state | Wet pressed fibrous material; actual temperature and wet mass; measured batch dry matter; no assumed water content or nutritional equivalence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one actual qualified fresh pressed sugar-beet pulp feed material |
| How much | 1 kg net wet mass at first complete release |
| How well | Meets declared receiver/supplier feed specification; all required qualifiers proven; no assumed nutritional equivalence |
| How long or cycle | One first quality release within a declared campaign and feasible fresh-supply window |
| reference_flow_link | reference_pressed_pulp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unmolassed fresh pressed wet sugar-beet pulp |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sugar-beet origin; diffusion supplier and campaign; extracted pulp identity; pressing history; absence of added molasses; absence of drying and pelleting; absence of ensiling and deliberate fermentation; receiver and single-feed-material use; supplier specification and version; wet net mass and tare; dry-matter result and method; moisture result and method; residual-sugar result and basis; foreign matter and hygiene release; pressing-aid identity and residues; actual temperature; release and dispatch times; permitted storage and transport window; legal product or waste status; packaging state; first-release lot identifier; opening and closing WIP and FG; inherited burden vector; allocation hand-off and common gate; geographic and temporal scope |

Every qualifier must be declared in the data package with its actual evidence. The reference name is a physical candidate without a verified UUID; it is not a claim of Tiangong binding. Supplier-specific short fresh-use limits must remain distinct from dried-pellet or ensiled-product storage guidance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference` | reference product | Mass | kg | Use 1 kg net wet pressed pulp at first complete feed-quality release. Q is the measured sum of first releases of this exact state during H; dry matter is not Q. Packaging and free drainage separately removed before the defined scale point are excluded. |
| `mu_dry_bridge` | each wet pulp stream | Mass | kg | Record wet mass W and independently sampled dry fraction d at the same state; dry mass D = W × d and retained water = W × (1 − d) are non-additive subledgers. Never add D to W or infer W from an assumed moisture percentage. |
| `mu_raw_units` | all inventory rows | Declared numerator property | kg or kWh or MJ | Preserve each raw meter unit. Convert tonnes to kg by 1000 and kWh to MJ by 3.6 only where needed; retain the actual property. Integrate actual rates over recorded intervals once; a metered total volume is already integrated. Volume-to-mass requires independent density for that substance and measured state. |
| `mu_press_water` | press liquor and retained water | Mass | kg | Measure wet input and pressed output plus press liquor with its dissolved solids. Maintain water and dry-solids balances independently; press liquor returned to diffusion is a paired transfer or explicit external Product return. It is neither new water consumption nor simultaneous wastewater. One residual cannot determine two missing quantities. |
| `mu_energy` | heat and electricity | Energy | MJ or kWh | Meter electricity separately. Imported steam, if actually used for cleaning, requires mass, pressure, temperature, dryness, enthalpy, condensate return and supplier water/energy convention. The heat energy and carrier mass are linked views; do not duplicate supplied heat or invent boiler fuel. |
| `mu_once` | all inventory rows | Declared numerator property | per 1 kg reference flow | Keep gross physical crossings V distinct from attributed inherited burdens A. Collection captures raw F and stock vectors; section 8 computes A/Q once for Q > 0. H is only the observation period. Q = 0 retains all real loads and stock attribution but has no unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Either freshly extracted unpressed sugar-beet pulp at the diffuser hand-off or already pressed eligible pulp at supplier hand-off; declare exactly which. Upstream sugar-beet cultivation/supply, washing, slicing and diffusion plus shared sugar/pulp/molasses burdens are transferred once. |
| starting_condition_role | Verified intermediate manufacturing hand-off; physical state and upstream burdens are explicit |
| product_classification_scope | Narrower eligible pressed fresh feed-material endpoint within CPC 3.0:39149; other residues in that leaf remain outside |
| recursive_input_rule | Received already pressed pulp and genuine returns carry their original lot and inherited vector once; do not reapply nonexistent pressing, duplicate upstream supply or count a repeated release as new Q. |
| upstream_dataset_requirement | Obtain one actual supplier hand-off with product state, batch, upstream process inventory, subdivision/allocation method, common-gate quantities and burden vector. Link cultivation and each genuine utility/material supplier. A flow name alone does not qualify a background provider. |
| disclosure | Disclose all physical gates, inherited vectors, first-release Q, stock movements, actual post-release services, losses, failed lots, returns, quality windows, source limitations and unbound identities. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_scope` | route | Include real receipt, pressing when required, conveying, short holding, weighing, sampling, feed-quality release, cleaning and actual gate services. Stop at the declared factory-gate hand-off; link upstream supply once and disclose excluded downstream transport, storage, feeding and silage. | `sudz-pressed-pulp`; `sudz-feed-route`; `epa-ap42-beet-1997`; `vdz-beet-pulp-2005` |
| `sb_state` | eligible reference state | Prove sugar-beet extraction origin, pressing, no added molasses, no drying/pelleting and no ensiling/deliberate fermentation. Sugar manufacture or a generic waste name alone is insufficient. Any actual excluded operation remains in real activity accounts and triggers a separate scope decision; do not erase its loads. | `sudz-pressed-pulp`; `sudz-feed-route`; `nord-beet-pulp`; `sudz-bisz-pressed`; `vdz-beet-pulp-2005` |
| `sb_joint` | supplier hand-off | Separate product eligibility from legal disposition and allocation. Wet state, low price, a feed buyer or the word waste never establishes zero inherited load. Do not move sugar-specific crystallisation/drying or carbonatation lime into a fictitious pulp-only process; supplier evidence must delimit common and dedicated stages. | `epa-ap42-beet-1997`; `ilcd-allocation-2010` |
| `sb_loops` | press water and internal transfers | Only matching endpoints cancel internal transfers. Press water returned to an external diffuser has a measured hand-off and agreed solids/water/burden convention; do not also count it as external fresh-water intake, wastewater, second product revenue or automatic credit. Actual discharged press liquor uses the separate waste route. | `epa-ap42-beet-1997`; `ilcd-allocation-2010` |
| `sb_physical` | stocks and all material exits | Maintain manufacturing, FG service and combined physical balances in the same wet state. Include opening/closing WIP, pending tests, failures, start/stop, idle, cleanup, rework, samples, spoilage, soil/sand, actual drains and evaporation. Physical masses never receive environmental allocation shares. | `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010` |
| `sb_expansion` | additional actual exchanges | Conditional cards are identity-specific possibilities, not claims of site use. Add each actual unlisted reagent, purchased formulation, carrier, spare part, package, residue and environmental species as its own measured exchange before model completion; no other or zero bundle can hide it. Purchased formulations are one whole-product procurement; assay and carrier water are non-additive subaccounts. | `epa-ap42-beet-1997`; `vdz-beet-pulp-2005` |
| `sb_classification` | classification scope | Keep cane bagasse in 39141 and starch-manufacture residues in 39130; molasses and unprocessed beet root remain separate products. This record does not claim every residual in 39149 or any mixed-feed formulation. | `un-cpc3-notes-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pressing` | Mechanical pressing of extracted wet pulp | conditional | Only for actual unpressed extracted starting material; absent for already pressed supply | Foreground production | pressed_pulp_transfer |
| `release_handoff` | Conveying and first feed-quality release | required | Every eligible route; true preparation and cleanup retained | Foreground production | reference_pressed_pulp |
| `gate_service` | Released-pulp gate holding and dispatch services | conditional | Actual services through the declared gate; link old and current FG lots | Separate post-release lot service | gross_dispatch_pulp |

All cards below are per the same 1 kg reference flow. Collection retains raw numerators; the amount on a card refers to the single result of cr_inventory_once. Physical internal pairs may appear in separate unit processes but cancel in the combined boundary. Do not sum the reference release and gross service dispatch as two manufactured products. Conditional absence requires records; actual unlisted exchanges require new atomic cards.

### Process: Mechanical pressing of extracted wet pulp (`pressing`)

#### Inputs

##### Product flows

###### Extracted pulp received before pressing (`extracted_pulp`)

Use only when the actual input has left sugar extraction but has not been pressed. Weigh the entire wet pulp with measured dry matter and retained water; receive the supplier upstream burden vector once. It is not the finished reference product.

- Selected flow: Unpressed wet extracted sugar-beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_pulp_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pulp_pressing`
- Sources: `sudz-feed-route`; `epa-ap42-beet-1997`

###### Press drive electricity (`press_electricity`)

Meter the pressing drive and its attributable auxiliaries, including actual startup, failed batches and idle consumption. This does not assert voltage, generation mix or provider compatibility. Record actual alternating-current electricity in kWh; the specific flow identity and property/unit chain must be verified before binding. Provider compatibility remains a separate requirement.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_energy_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_pressing`
- Sources: `epa-ap42-beet-1997`

###### Calcium sulphate pressing aid (`press_aid`)

Conditional on actual use. Record the whole supplied preparation once with hydrate, composition, carrier and dosage; active calcium sulphate and formulation water are subaccounts, not additional purchased inputs. Do not assume a fixed grade or permission to use it.

- Selected flow: Calcium sulphate pressing-aid preparation as purchased
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_material_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_pressing`
- Sources: `sudz-bisz-pressed`; `vdz-beet-pulp-2005`

###### Equipment lubricant (`lubricant`)

Conditional actual preparation used for the declared machinery; verify product composition and compatibility. Record refill, recovery, leakage and waste separately; do not assume all issued oil is emitted.

- Selected flow: Food-contact-compatible gear lubricating oil as supplied
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_material_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_pressing`
- Sources: `vdz-beet-pulp-2005`

###### Replacement press screw part (`steel_spare`)

Conditional actual maintenance replacement attributable to the route. Measure the physical part mass and its service allocation; no assumed per-item mass. Keep removed part as a separate waste exchange.

- Selected flow: Steel press screw replacement part
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_material_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_pressing`
- Sources: `ilcd-allocation-2010`

#### Outputs

##### Product flows

###### Pressed pulp awaiting quality release (`pressed_pulp_transfer`)

Actual press discharge is an internal transfer to release_handoff with matching lot, wet mass, dry matter and burden vector. It is not a second reference output or new sale. Opening/closing pressed WIP remains visible.

- Selected flow: Unmolassed pressed wet sugar-beet pulp before release
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_pulp_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pulp_pressing`
- Sources: `sudz-pressed-pulp`; `epa-ap42-beet-1997`

###### Press liquor returned to diffusion (`press_liquor_return`)

Only the actual paired internal return or explicit external Product hand-off; retain dissolved solids, water, temperature, receiver and the supplier convention. Do not concurrently declare this same stream as fresh water or discarded wastewater; no automatic credit.

- Selected flow: Sugar-beet pulp press liquor for diffusion return
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_water_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_pressing`
- Sources: `epa-ap42-beet-1997`; `ilcd-allocation-2010`

##### Waste flows

###### Discarded press liquor (`press_liquor_discard`)

Conditional on actual discard instead of diffusion return; separately weigh or meter and sample water and dissolved organic matter. Link actual treatment destination. Never identify COD as a chemical mass.

- Selected flow: Discarded sugar-beet pulp press liquor
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_water_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_pressing`
- Sources: `epa-ap42-beet-1997`

###### Recovered waste lubricant (`used_oil`)

Conditional collected used oil to an actual waste receiver; distinct from oil leaked to a known environmental compartment. Characterize whole collected waste before choosing a background identity. Record the single actual collected used-lubricating-oil stream and destination; its flow identity remains to be verified. No treatment credit is assumed.

- Selected flow: Used lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_pressing`
- Sources: `sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

###### Removed press screw (`removed_steel`)

Conditional actual removed part; measure physical mass, contamination and destination separately from the replacement part and its allocated burden.

- Selected flow: Removed steel press screw part
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_pressing. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_pressing`
- Sources: `sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

### Process: Conveying and first feed-quality release (`release_handoff`)

#### Inputs

##### Product flows

###### Pressed WIP from the actual press (`pressed_pulp_internal`)

Match pressed_pulp_transfer exactly for internal movement; cancel only on aggregation of both included processes. Carry opening WIP burdens and current press loads without another upstream procurement.

- Selected flow: Unmolassed pressed wet sugar-beet pulp before release
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_pulp_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pulp_release_handoff`
- Sources: `sudz-pressed-pulp`; `epa-ap42-beet-1997`

###### Eligible already pressed pulp supply (`purchased_pressed_pulp`)

Alternative starting condition to extracted_pulp. Verify prior pressing and the exact fresh unmolassed state and receive one upstream vector that already includes pressing; do not fabricate another press pass. Different supply routes remain separate lots.

- Selected flow: Unmolassed pressed wet sugar-beet pulp as supplied
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_pulp_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pulp_release_handoff`
- Sources: `sudz-pressed-pulp`; `sudz-feed-route`

###### Conveying and release electricity (`release_electricity`)

Meter conveyors, sampling and weighing equipment and attributable idle/cleanup loads; reconcile with the facility meter and keep post-release services separate. Record actual alternating-current electricity in kWh; the specific flow identity and property/unit chain must be verified before binding. Provider compatibility remains a separate requirement.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_energy_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_release_handoff`
- Sources: `sudz-pressed-pulp`; `epa-ap42-beet-1997`

###### Cleaning water (`wash_water`)

Conditional actual external cleaning-water input; record supply grade and full mass. Internal press liquor is excluded from this procurement; measured water within a purchased cleaner is not procured again. Record the actual liquid cleaning-water supply, quality and mass; its flow identity remains to be verified.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_water_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_release_handoff`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### Sodium hydroxide cleaning preparation (`sodium_hydroxide_cleaner`)

Conditional actual cleaner; use one purchased whole-preparation mass and verified assay/carrier subledger. If made on site, replace this procurement with each actual purchased ingredient plus preparation energy and loss; do not add both routes.

- Selected flow: Aqueous sodium hydroxide cleaning preparation as purchased
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_material_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_release_handoff`
- Sources: `vdz-beet-pulp-2005`

###### Sodium hypochlorite cleaning preparation (`hypochlorite_cleaner`)

Conditional actual disinfectant only; record whole preparation, concentration, actual compatibility and disposition. A general hygiene source does not establish this chemical is used or allowed.

- Selected flow: Aqueous sodium hypochlorite cleaning preparation as purchased
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_material_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_release_handoff`
- Sources: `vdz-beet-pulp-2005`

###### Imported cleaning steam (`cleaning_steam`)

Only if actually supplied; retain pressure, temperature, dryness and specific enthalpy with the same carrier mass. Link a single provider heat account and its water convention; no imaginary dryer, boiler or additional heat purchase.

- Selected flow: Imported water steam for cleaning
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_heat. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources: `epa-ap42-beet-1997`

#### Outputs

##### Product flows

###### First released eligible fresh pressed pulp (`reference_pressed_pulp`)

The sole reference row. Q counts the entire eligible lot once at its first complete release for a declared feed receiver, including qualifying closing FG. Exclude opening already released FG, repeat tests/releases, internal transfers and rejected lots. Carry later storage/loading as service, not extra production.

- Selected flow: Unmolassed fresh pressed wet sugar-beet pulp
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `sudz-pressed-pulp`; `sudz-feed-route`; `vdz-beet-pulp-2005`

###### Cleaning-steam condensate return (`condensate_return`)

Only the actual external Product return, paired to cleaning_steam and measured at its temperature/enthalpy; record losses and the provider agreement. If condensate is actually discharged use a separate destination-specific waste card, not both.

- Selected flow: Liquid cleaning-steam condensate returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_heat. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources: `epa-ap42-beet-1997`

##### Waste flows

###### Rejected or spoiled wet pulp (`rejected_pulp`)

Record all actual feed-ineligible wet pulp with cause, lot, wet/dry mass and real disposition. Failed quality removes eligibility from Q, not physical loads or upstream burdens; any separate beneficial product needs its own specification and allocation decision.

- Selected flow: Rejected wet sugar-beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_release_handoff`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### Discarded pulp samples (`quality_sample_waste`)

Record destructive samples once by their actual destination; samples never count as released supply. If returned to WIP, record the matched internal movement instead of a waste output.

- Selected flow: Discarded sugar-beet pulp quality sample
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_release_handoff`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### Separated soil and sand (`separated_soil`)

Conditional actual physically separated contamination, independently weighed; keep ash analysis as a non-additive indicator. Do not invent carbonatation lime or classify all mineral residue as calcium carbonate.

- Selected flow: Soil and sand separated from wet sugar-beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_release_handoff`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### Cleaning effluent (`cleaning_effluent`)

Measure the whole aqueous waste and its dissolved/suspended fractions with the actual treatment receiver. COD, nitrogen, TOC and total solids are monitoring partitions, not extra molecular flows; add each actual species discharge only at its environmental outlet.

- Selected flow: Wet-pulp equipment cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_release_handoff`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

##### Elementary flows

###### Evaporated pulp water to air (`water_vapour_release`)

Conditional actual water evaporation, independently measured or supported by a constrained balance with all other unknowns measured. It does not establish drying; retain temperature and distinguish condensate and retained water. The binding is water vapour, CAS 7732-18-5, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_release_handoff. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_release_handoff`
- Sources: `epa-ap42-beet-1997`

### Process: Released-pulp gate holding and dispatch services (`gate_service`)

#### Inputs

##### Product flows

###### Released pulp entering gate service (`released_pulp_service_in`)

Matched internal first-release inflow; retain opening FG and externally returned old lots separately. This is not procurement or new Q. Closing FG already includes its qualifying first-release mass.

- Selected flow: Unmolassed fresh pressed wet sugar-beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_fg. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `sudz-pressed-pulp`

###### External returned fresh pressed pulp (`returned_pulp`)

Conditional genuine external return; identify original dispatch and burden reversal, quality and any actual incremental rework. Receiving, reweighing or retesting an old release never generates new Q. Spoiled or fermented returns stay in physical accounts and cannot re-enter eligible product.

- Selected flow: Returned unmolassed wet pressed sugar-beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_fg. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `sudz-pressed-pulp`; `vdz-beet-pulp-2005`

###### Gate handling electricity (`service_electricity`)

Actual post-release conveyors, storage and loading electricity is a separate service ledger for the lots served, including opening FG. Link it to those lots once; do not make storage a new product release. Record actual alternating-current electricity in kWh; the specific flow identity and property/unit chain must be verified before binding. Provider compatibility remains a separate requirement.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_energy_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_gate_service`
- Sources: `sudz-pressed-pulp`; `ilcd-allocation-2010`

###### Loader diesel (`diesel_loader`)

Conditional actual on-site diesel loader, not a pulp dryer or assumed road freight service. Keep the whole fuel and its assay; collect fuel stock reconciliation and actual species exhaust. The binding identifies the whole diesel fuel on a mass basis with grade, formulation, density, heating value, refinery route, geographic supply and provider unspecified. Verify the one actual fuel supply and carbon origin separately; it is not a burned-fuel service, biomass-origin declaration, fuel-volume density or a default calorific-value factor.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_material_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_gate_service`
- Sources: `epa-ap42-beet-1997`

###### Polyethylene transport liner (`polyethylene_film`)

Conditional actual protective liner; fresh bulk supply has none unless records show it. Do not infer carton packaging from a website icon or introduce silage film as eligible manufacture. Apply the independent packaging stock ledger. The binding is polyethylene film, CAS 9002-88-4, with the polyethylene sheet/poly-film synonyms and PE-film description. Native CPC 29220 luggage classification is inconsistent with those convergent physical identity fields; disclose this isolated classification defect rather than treating it as liner or food-contact-grade evidence. The comment describes PET as a competing distinct polyester, not the selected PE material. Verify the actual single liner composition, thickness, grade and supplier; do not bind a PET film, mixed-polymer laminate, extrusion service or silage operation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_pack. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sudz-pressed-pulp`

###### Polypropylene transport bag (`polypropylene_bag`)

Conditional only when the same eligible fresh product is genuinely bagged; retain tare and composition. Bulk illustrative sources do not establish this package. Do not count reuse as another procurement or add bag mass to Q.

- Selected flow: Woven polypropylene wet-pulp transport bag
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_pack. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sudz-pressed-pulp`

##### Elementary flows

###### Atmospheric oxygen consumed by loader (`combustion_oxygen`)

Only actual chemical oxygen consumption in the conditional diesel loader; retain the measured fuel analysis and oxygen/species balance. Unreacted atmospheric nitrogen and oxygen passing through remain non-additive gas-account context, not a second fuel or energy purchase. The binding is molecular oxygen, CAS 7782-44-7, as a resource input from air, not an oxygen emission or purchased oxygen commodity. Record only actual chemical consumption; pass-through air is not added as a second fuel or energy purchase. Do not use an emission-to-air oxygen variant.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`

#### Outputs

##### Product flows

###### Gross physical dispatch of released pulp (`gross_dispatch_pulp`)

Dispatch mass is a physical service exit only. It may include opening FG and redelivery; use lot histories and reverse original deliveries for returns. This is not added to the first-release reference row as another manufactured output.

- Selected flow: Unmolassed fresh pressed wet sugar-beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_fg. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `sudz-pressed-pulp`; `ilcd-allocation-2010`

##### Waste flows

###### Spoilage during gate holding (`service_spoilage`)

Actual post-release loss keeps original manufacturing burden and incremental service burden under the original lot; it never deletes an already recorded physical release or creates negative manufacture.

- Selected flow: Spoiled wet sugar-beet pulp from gate holding
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_gate_service`
- Sources: `sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

###### Discarded polyethylene liner (`used_film`)

Actual film disposal only; separate external returns, reusable stock and material attached to shipped pulp. Do not credit recycling without a separately justified model.

- Selected flow: Discarded polyethylene transport liner film
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_gate_service`
- Sources: `sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

###### Discarded polypropylene bag (`used_bag`)

Record the specific bag waste with destination and residual contamination; retained reusable bags remain stocks, not waste or negative procurement.

- Selected flow: Discarded woven polypropylene transport bag
- Flow property / unit: Mass / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_residue_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_gate_service`
- Sources: `sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

##### Elementary flows

###### Carbon dioxide fossil origin to air (`fossil_co2`)

Conditional actual diesel combustion species only. Retain species-resolved measurement/model, source and air compartment; do not convert a NOx/VOC total into an invented species or import pulp-dryer factors. The binding is carbon dioxide (fossil), CAS 124-38-9, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass. This UUID applies only when the complete represented exchange is evidenced as fossil-origin carbon; do not infer that origin solely from a generic diesel fuel name or route. Otherwise retain the original physical row without this binding and resolve each actual carbon-origin stream.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`

###### Carbon monoxide to air (`carbon_monoxide`)

Conditional actual diesel combustion species only. Retain species-resolved measurement/model, source and air compartment; do not convert a NOx/VOC total into an invented species or import pulp-dryer factors. The binding is carbon monoxide (fossil), CAS 630-08-0, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass. This UUID applies only when the complete represented exchange is evidenced as fossil-origin carbon; do not infer that origin solely from a generic diesel fuel name or route. Otherwise retain the original physical row without this binding and resolve each actual carbon-origin stream.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`

###### Nitrogen monoxide to air (`nitrogen_monoxide`)

Conditional actual diesel combustion species only. Retain species-resolved measurement/model, source and air compartment; do not convert a NOx/VOC total into an invented species or import pulp-dryer factors. The binding is nitrogen monoxide, CAS 10102-43-9, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Conditional actual diesel combustion species only. Retain species-resolved measurement/model, source and air compartment; do not convert a NOx/VOC total into an invented species or import pulp-dryer factors. The binding is nitrogen dioxide, CAS 10102-44-0, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`

###### Water vapour to air from loader combustion (`combustion_water`)

Conditional actual species only. Retain actual combustion water supported by fuel hydrogen analysis and the species balance; distinguish pulp evaporation and steam condensate. The binding is water vapour, CAS 7732-18-5, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### Sulfur dioxide to air from loader combustion (`sulfur_dioxide`)

Conditional actual species only. Only measured/modelled actual sulfur dioxide supported by this loader fuel and route; do not import a sugar sulphur-stove or dryer emission. The binding is sulfur dioxide, CAS 7446-09-5, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### Methane fossil origin to air (`fossil_methane`)

Conditional actual species only. Only actual unburned fuel methane with route-specific evidence; record source identity independently of biogenic spoilage methane. The binding is methane (fossil), CAS 74-82-8, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass. This UUID applies only when the complete represented exchange is evidenced as fossil-origin carbon; do not infer that origin solely from a generic diesel fuel name or route. Otherwise retain the original physical row without this binding and resolve each actual carbon-origin stream.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### Carbon dioxide biogenic origin to air (`spoilage_co2`)

Conditional actual species only. Only an actual biological release from deteriorated pulp; keep carbon origin and timing. Deterioration is a real loss, not eligible fermentation manufacture or automatic carbon neutrality. The binding is carbon dioxide (biogenic), CAS 124-38-9, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass. The biogenic origin must belong to the actual deteriorated beet-pulp carbon; this is not an avoided fossil emission or a sequestration credit.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### Methane biogenic origin to air (`spoilage_methane`)

Conditional actual species only. Only actual methane from spoiled material with independently supported conditions; no assumed anaerobic fraction or displaced-fuel credit. The binding is methane (biogenic), CAS 74-82-8, as an actual emission to air with unspecified air subcompartment. It is not a resource uptake, water/soil discharge, indoor/urban/high-stack/stratospheric or long-term variant. Retain the actual source and compartment evidence; if a different native variant is required, keep the full physical exchange and select that verified identity rather than erase or scale its mass. The biogenic origin must belong to the actual deteriorated beet-pulp carbon; this is not an avoided fossil emission or a sequestration credit.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report the single normalized result specified in section 8 for this row; raw records from cp_species_gate_service. No second division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_gate_service`
- Sources: `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

## 7. Allocation and Co-product Handling

The following rules apply only to attributional multifunctionality requiring allocation. They partition environmental burdens after technical separation; they never change the physical ledger. Real product/waste status and return endpoints require their own evidence.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_context` | attributional joint burdens | Use this hierarchy only for declared attributional modelling where allocation is required. First subdivide measured dedicated processes; then use technically justified virtual subdivision. Dedicated pulp pressing, conveying and eligible supply are assigned to pulp once; sugar-only or molasses-only finishing is excluded from that dedicated account. | `ilcd-allocation-2010` |
| `al_causality` | each remaining shared exchange | Identify an exchange-specific determining physical causal relationship and justify how changing each co-function changes that exchange. Physical presence, wet mass, dry matter, energy content or a generic physical preference is not by itself that causal proof. Keep evidence and sensitivity for unresolved relationships. | `ilcd-allocation-2010` |
| `al_residual` | genuinely unresolved common burdens | Only for the residual not resolved above use contemporaneous market values at the same common-process gate and actual state for all true co-products. Remove later dedicated transport/conditioning costs from downstream prices; disclose quantities, price period, currency, gate reconstruction and sensitivity. No default ratio is prescribed. | `ilcd-allocation-2010` |
| `al_vectors` | physical V and inherited A | Apply burden shares only to the joint environmental inventory vector. Preserve full physical sugar/pulp/molasses/press-water outputs and physical conservation independently. Supplier allocated burden is inherited once with its method; do not allocate it again at pulp receipt or scale wet product mass by the burden fraction. | `ilcd-allocation-2010` |
| `al_status` | co-product or return or waste | Determine status from actual specification, effective receiver, processing history and applicable disposition evidence plus the supplier method. Preserve truly discarded material and treatment attribution; negative or zero price alone does not erase production. Internal returns are not co-products. No assumed avoided concentrate-feed, fertilizer, fuel, recycling or substitution credit is permitted. | `sudz-pressed-pulp`; `epa-ap42-beet-1997`; `ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Raw_fields and collection_method specify unnormalised records. The aggregation_rule cell identifies the final common reporting basis only: it performs no division. Apply cr_inventory_once to the attributed numerator once after raw-unit conversion and stock reconciliation. No future foreground values are asserted here.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pulp_pressing` | pressing | wet pulp and WIP | Raw foreground record | lot; supplier; raw wet mass; dry fraction and sampling method; temperature; state; upstream vector; opening WIP; closing WIP; paired transfer endpoints | Calibrated weighbridge/belt scale and representative batch sampling; supplier process/press history and inventory receipts; record raw values before any denominator or economic share. | kg; kg/kg | each batch and stock census | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_pulp_release_handoff` | release_handoff | wet pulp and WIP | Raw foreground record | lot; supplier; raw wet mass; dry fraction and sampling method; temperature; state; upstream vector; opening WIP; closing WIP; paired transfer endpoints | Calibrated weighbridge/belt scale and representative batch sampling; supplier process/press history and inventory receipts; record raw values before any denominator or economic share. | kg; kg/kg | each batch and stock census | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_release` | release_handoff | first complete release | Raw foreground record | lot; first-release flag and time; wet net mass; tare; dry matter; moisture; residual sugar; foreign matter; hygiene; product specification; no-molasses declaration; drying/pelleting/ensiling/fermentation status; receiver; storage limit; result | Match scale tickets to a complete quality release and receiver specification; collect failed tests as well. Verify actual fresh state and feasible delivery/use window. Do not replace weighing with a typical yield. | kg; timestamp | each first release and failed lot | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_energy_pressing` | pressing | electricity | Raw foreground record | meter ID; unit; readings; rate or integrated total; interval; process; startup; idle; failures; served lots; facility reconciliation | Use real submeters or a documented causal engineering split of the reconciled total; preserve interval totals before allocation and normalization. Distinguish already integrated amounts from power rates. | kWh; MJ | meter interval and campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_energy_release_handoff` | release_handoff | electricity | Raw foreground record | meter ID; unit; readings; rate or integrated total; interval; process; startup; idle; failures; served lots; facility reconciliation | Use real submeters or a documented causal engineering split of the reconciled total; preserve interval totals before allocation and normalization. Distinguish already integrated amounts from power rates. | kWh; MJ | meter interval and campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_energy_gate_service` | gate_service | electricity | Raw foreground record | meter ID; unit; readings; rate or integrated total; interval; process; startup; idle; failures; served lots; facility reconciliation | Use real submeters or a documented causal engineering split of the reconciled total; preserve interval totals before allocation and normalization. Distinguish already integrated amounts from power rates. | kWh; MJ | meter interval and campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_material_pressing` | pressing | one supplied preparation or fuel or part | Raw foreground record | row ID; supplier; product composition; whole procurement; issue; external return; opening stock; closing stock; assay; actual use; loss; preparation route | Reconcile receipts/issues and actual stocks for each specific preparation, diesel, lubricant and spare part. Whole preparations purchased once; on-site mixing has separately purchased components and actual preparation loss/energy. | kg | each receipt/use and stock census | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_material_release_handoff` | release_handoff | one supplied preparation or fuel or part | Raw foreground record | row ID; supplier; product composition; whole procurement; issue; external return; opening stock; closing stock; assay; actual use; loss; preparation route | Reconcile receipts/issues and actual stocks for each specific preparation, diesel, lubricant and spare part. Whole preparations purchased once; on-site mixing has separately purchased components and actual preparation loss/energy. | kg | each receipt/use and stock census | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_material_gate_service` | gate_service | one supplied preparation or fuel or part | Raw foreground record | row ID; supplier; product composition; whole procurement; issue; external return; opening stock; closing stock; assay; actual use; loss; preparation route | Reconcile receipts/issues and actual stocks for each specific preparation, diesel, lubricant and spare part. Whole preparations purchased once; on-site mixing has separately purchased components and actual preparation loss/energy. | kg | each receipt/use and stock census | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_water_pressing` | pressing | specific water or aqueous stream | Raw foreground record | row ID; kg or total m3; density and substance state; time; receiver; dissolved solids; water fraction; internal pair; external hand-off; actual discharge | Weigh or meter every stream separately, sample solids and record paired return endpoints. Measure density independently for any volume conversion. Keep press return, cleaning intake, retained pulp water and final effluent distinct. | kg; m3 | stream interval and batch | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_water_release_handoff` | release_handoff | specific water or aqueous stream | Raw foreground record | row ID; kg or total m3; density and substance state; time; receiver; dissolved solids; water fraction; internal pair; external hand-off; actual discharge | Weigh or meter every stream separately, sample solids and record paired return endpoints. Measure density independently for any volume conversion. Keep press return, cleaning intake, retained pulp water and final effluent distinct. | kg; m3 | stream interval and batch | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_heat` | release_handoff | steam and condensate pair | Raw foreground record | steam mass; pressure; temperature; dryness; enthalpy basis; condensate mass and enthalpy; external losses; supplier convention | Meter the real steam/condensate pair; reconcile delivered thermal energy with actual states and the supply contract. Preserve one carrier/heat account and do not add hypothetical combustion or heat purchase. | kg; MJ | each delivery interval | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_fg` | gate_service | FG service and genuine return | Raw foreground record | lot; opening/closing released FG; current Q inflow; gross dispatch; external return received; original dispatch reverse; repeat release; loss; incremental rework; old/new burden vectors; residence time | Reconcile batch identity through every physical stock movement; inherit historical manufacturing loads once and add only actual incremental service/rework. Retesting does not create manufacture. | kg; h | each movement and stock census | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_pack` | gate_service | each specific packaging material | Raw foreground record | material ID; empty stock; attached WIP/FG stock; reusable stock; procurement; external return received; closing stocks; gross shipped outward; external return outward; waste; internal reuse; unit mass | Weigh each actual PE liner and PP bag; count-to-mass only with measured configuration-specific item mass. Apply a separate closed packaging ledger and identify actual absence in bulk supply. | kg; item | each package movement and stock census | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_residue_pressing` | pressing | each specific rejected or discarded stream | Raw foreground record | row ID; lot; wet mass; dry fraction; composition; cause; destination; legal disposition; retained manufacturing vector; treatment; returned or collected status | Measure real losses and rejects including failures and cleanup; record each waste separately. Analyze effluent indicators as non-additive partitions and identify environmental outlets independently. | kg | each loss/transfer and full campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_residue_release_handoff` | release_handoff | each specific rejected or discarded stream | Raw foreground record | row ID; lot; wet mass; dry fraction; composition; cause; destination; legal disposition; retained manufacturing vector; treatment; returned or collected status | Measure real losses and rejects including failures and cleanup; record each waste separately. Analyze effluent indicators as non-additive partitions and identify environmental outlets independently. | kg | each loss/transfer and full campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_residue_gate_service` | gate_service | each specific rejected or discarded stream | Raw foreground record | row ID; lot; wet mass; dry fraction; composition; cause; destination; legal disposition; retained manufacturing vector; treatment; returned or collected status | Measure real losses and rejects including failures and cleanup; record each waste separately. Analyze effluent indicators as non-additive partitions and identify environmental outlets independently. | kg | each loss/transfer and full campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_species_release_handoff` | release_handoff | one actual environmental species | Raw foreground record | species; chemical identity; origin; compartment; concentration; integrated gas/liquid volume; actual flow rate and time if relevant; independent density; uncertainty; monitor basis | Use species-resolved measurement or a justified route-specific model; retain raw signals and sampling coverage. Actual rate is integrated once; total volume is not multiplied by time. No COD/NOx/VOC-to-single-species assumption. | kg; m3; h | each emission interval | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_species_gate_service` | gate_service | one actual environmental species | Raw foreground record | species; chemical identity; origin; compartment; concentration; integrated gas/liquid volume; actual flow rate and time if relevant; independent density; uncertainty; monitor basis | Use species-resolved measurement or a justified route-specific model; retain raw signals and sampling coverage. Actual rate is integrated once; total volume is not multiplied by time. No COD/NOx/VOC-to-single-species assumption. | kg; m3; h | each emission interval | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_allocation_pressing` | pressing | dedicated and joint burden vector | Raw foreground record | supplier; common gate; actual co-products; quantities; dedicated inventory; exchange-specific causality; residual vector; contemporaneous prices; price state; burden shares; sensitivity; WIP/FG inherited vectors | Obtain traceable supplier records and apply subdivision before causal attribution and residual same-gate value; reconcile vectors across periods and transfer points. Preserve physical quantities independently. | native exchange units; currency | each supplier hand-off and representative campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_allocation_release_handoff` | release_handoff | dedicated and joint burden vector | Raw foreground record | supplier; common gate; actual co-products; quantities; dedicated inventory; exchange-specific causality; residual vector; contemporaneous prices; price state; burden shares; sensitivity; WIP/FG inherited vectors | Obtain traceable supplier records and apply subdivision before causal attribution and residual same-gate value; reconcile vectors across periods and transfer points. Preserve physical quantities independently. | native exchange units; currency | each supplier hand-off and representative campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |
| `cp_allocation_gate_service` | gate_service | dedicated and joint burden vector | Raw foreground record | supplier; common gate; actual co-products; quantities; dedicated inventory; exchange-specific causality; residual vector; contemporaneous prices; price state; burden shares; sensitivity; WIP/FG inherited vectors | Obtain traceable supplier records and apply subdivision before causal attribution and residual same-gate value; reconcile vectors across periods and transfer points. Preserve physical quantities independently. | native exchange units; currency | each supplier hand-off and representative campaign | Complete declared H; all zero-output and failure periods | Actual supplier/site and served lots | per 1 kg reference flow | Calibrations; raw tickets; lab methods; stock and lot trace; uncertainty |

The complete plant-period gross ledger is retained for every lot. For a dataset tied to current Q, select only independently traced physical crossings and burdens of that cohort; never estimate physical cohort quantities by an environmental or economic share. Services on opening FG and old returns remain attached to their original manufacture and separate current service record, rather than charged to current new Q. Closing current FG carries its original manufacturing vector forward; later service attaches when actually provided. A stage quantity Qc may document a measured service/transfer, but is not added to Q and cannot cause a second normalization of the same result.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_q` | reference_pressed_pulp | Q = sum of measured first-complete-release net wet masses during H for the declared eligible state; each whole lot once. Closing eligible FG is already included in Q; opening FG and repeat release are excluded. For Q = 0 retain physical and burden ledgers without a unit result. | first_release_wet_mass; eligible_state; cp_release | Q | `sudz-pressed-pulp`; `vdz-beet-pulp-2005` |
| `cr_physical` | all physical streams | For each process: opening physical stock + gross actual boundary inflows = closing physical stock + gross actual boundary outflows + independently evidenced transformation. Match internal endpoints before combined aggregation. Do not multiply either side by any burden share; wet-mass water/solids and relevant element balances are additional independent checks. | opening_physical_stock; gross_inflows; closing_physical_stock; gross_outflows; transformation; cp_pulp_pressing; cp_pulp_release_handoff; cp_water_pressing; cp_water_release_handoff; cp_fg | physical_balance | `epa-ap42-beet-1997` |
| `cr_dry_bridge` | each measured wet stream | D = W × d; retained water = W × (1 − d). W is the primary physical ledger; D and water partitions are not added again. Independently sample dissolved solids in press liquor and residues. | W; d; cp_pulp_pressing; cp_pulp_release_handoff; cp_water_pressing; cp_water_release_handoff | D and water partition | `epa-ap42-beet-1997` |
| `cr_burden` | each environmental exchange vector | A = F + opening WIP inherited vector − closing WIP inherited vector + attributable upstream vector + dedicated burden + residual common burden share − X. F is genuine new activity; exclude upstream/dedicated components already contained in F. X is only a proved same-side duplicate of the same exchange, never new repair water, material, failed production or a credit. Reconcile inventory vector by lot; post-release FG and services retain their own historical/current attribution. | F; opening_WIP_vector; closing_WIP_vector; upstream_vector; dedicated_vector; common_vector; X; cp_allocation_pressing; cp_allocation_release_handoff; cp_allocation_gate_service | A | `ilcd-allocation-2010` |
| `cr_inventory_once` | all inventory rows | a_i = A_i / Q for Q > 0, once only. Convert raw units and attribute real burdens before this division. For physical exchanges use the full reconciled physical numerator V_i / Q without environmental co-product shares. Cards and collection aggregation refer to this same result; never divide an already normalized card by Q or H again. Internal transfer pairs cancel only in the combined model. | A_i; V_i; Q; cp_release; cp_allocation_pressing; cp_allocation_release_handoff; cp_allocation_gate_service | a_i | `ilcd-allocation-2010` |
| `cr_fg` | gate_service | Opening released FG + current first-release physical inflow + external return received = closing released FG + gross dispatch + actual loss + other individually identified external exits. Current Q is already that inflow, not a second closing-FG addition. Preserve original delivery burden reversals and actual new service/rework separately; a re-delivery or retest never becomes new Q. | opening_FG; current_first_release; external_return; closing_FG; gross_dispatch; loss; cp_fg | FG and service ledger | `sudz-pressed-pulp`; `ilcd-allocation-2010` |
| `cr_pack` | each packaging material | Opening empty + opening attached WIP/FG + opening reusable + procurement + external return received = closing empty + closing attached WIP/FG + closing reusable + material accompanying gross outward dispatch + external return outward + waste. Internal reuse cancels; attached package mass is excluded from Q and physical pulp mass. | opening_packaging; procurement; external_return_received; closing_packaging; gross_shipped_packaging; external_return_outward; packaging_waste; cp_pack | packaging_balance | `sudz-pressed-pulp`; `ilcd-allocation-2010` |
| `cr_market` | residual joint vector only | Residual burden share for co-product k = contemporaneous common-gate value of k / sum of contemporaneous common-gate values of all actual co-products, only after al_context and al_causality. Report measured state quantities and values and sensitivity; apply only to the residual burden vector, never to V or Q. | common_gate_values; residual_common_vector; cp_allocation_pressing; cp_allocation_release_handoff; cp_allocation_gate_service | residual_burden_shares | `ilcd-allocation-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and supplier | Retain actual original product declaration and press/diffusion history; prove unmolassed fresh state and effective feed receiver independently of a generic family name. | Specification; traceable supplier hand-off; batch quality release |
| `dq_temporal` | campaign and stock vectors | Cover the complete period including starts, stops, idle, failure, cleanup, returns and Q = 0; preserve original manufacture dates and burden vectors in opening stocks. | Meter coverage; mass/FG/WIP roll-forward; old/new lot links |
| `dq_measurement` | each raw numerator | Retain calibration, sampling, uncertainty, physical state and independent conversion evidence; distinguish totals and rates, bulk wet mass and non-additive composition. | Scale and meter tickets; laboratory methods; raw files |
| `dq_sources` | evidence and gaps | Manufacturer route/state families support scope, not a same-factory inventory or universal composition; historical EPA/VDZ evidence does not approve present chemicals or legal feed status. ILCD supports allocation method, not industrial technology. Disclose local missing data without inventing numbers. | Source-specific applicability; dated originals; gap register |

## 9. Validation Rules

Evaluate these rules with complete section and ancestor context. Unknown core evidence is a hold, not a pass; mechanical checks do not approve methodology, translation or mapping.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity` | eligible state | Require the complete qualifier set and original product/route evidence. A supplier name, classification, UUID name, successful download or schema alone does not establish fresh unmolassed pressed-pulp applicability. Keep a true identity gap unresolved. | `sudz-pressed-pulp`; `sudz-feed-route`; `sudz-bisz-pressed` |
| `vr_uuid` | every proposed UUID | Before binding any UUID verify the complete original record, using a current direct read or an explicitly pinned public original, its native family/state/route/chemical constraints and its referenced property → unit group → reference unit chain, including declared versions where available. A pinned historical original is not a current platform readback. Separate physical flow identity from actual supplier/background compatibility. Unverified bindings remain absent. |  |
| `vr_quantity` | reference and stocks | Q has one first-release gate and wet-state basis in both languages. Check all failed/zero-output periods, WIP/FG roll-forward and old/new burden vectors. Gross dispatch, dry matter, sugar mass, nutrient content and heat value cannot substitute for Q. | `sudz-pressed-pulp`; `ilcd-allocation-2010` |
| `vr_conservation` | process and combined balances | Reconcile wet physical mass, independently measured water and dry matter plus relevant elements; identify real species and compartments separately. No arbitrary reaction water, water-density substitution, two-unknown residual fit or COD/VOC-as-molecule shortcut. | `epa-ap42-beet-1997` |
| `vr_scope` | conditional exchanges | Actual drying, molassing, pelleting or ensiling is a scope conflict, not a reason to delete its activity. Ordinary missing local quantity, auxiliary UUID or provider detail is a foreground collection gap; missing core product state or allocation basis remains a true hold. | `sudz-pressed-pulp`; `sudz-feed-route`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010` |
| `vr_once` | normalization and allocation | Reconcile raw unit conversion, dedicated attribution, common residual shares and inherited vectors before a single A/Q. Shares must sum to one for the residual common vector; never shrink physical wet pulp, water, waste or emission mass by an environmental share. Record sensitivity and uncertainty. | `ilcd-allocation-2010` |
| `vr_quality` | feed release and actual losses | Verify supplier-specific feed specification, residual sugar, foreign matter, hygiene and feasible fresh storage/transport window. Dated manufacturer examples are not universal limits or legal clearance. Record deteriorated or returned material and any actual environmental release rather than discarding the observations. | `sudz-pressed-pulp`; `sudz-bisz-pressed`; `vdz-beet-pulp-2005` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Eligible single feed-material supply to a declared receiver; link actual transport and use separately |
| allowed_use | Only this pressed fresh unmolassed wet state with verified upstream hand-off, first-release Q and documented gate services |
| excluded_use | Whole-leaf coverage; dry pellets; molassed pulp; silage; unpressed wet pulp; avoided feed credit; nutritional equivalence; feed safety certification |
| required_metadata | All required qualifiers; provider state; exact boundaries; raw units; Q and H; WIP/FG and return history; dedicated/joint burden method; actual packaging and service attribution |
| required_quality_disclosure | Identity evidence and unresolved UUIDs; original source limitations; actual sampling and meter coverage; upstream/provider applicability; uncertainty and price sensitivity; Q = 0 periods |
| update_trigger | Changed extraction or pressing state; molasses addition; drying/pelleting/ensiling; new supplier or specification; changed common gate or prices; quality failure; new material or actual emission; verified UUID availability |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `sudz-pressed-pulp` | literature | Südzucker, Pressed Sugar Beet Pulp, publisher HTML, accessed 2026-11-20. https://www.suedzucker.com/product/pressed-sugar-beet-pulp/ | Primary product family: extracted then pressed wet feed material; fresh bulk supply and supplier-specific short storage window. No universal moisture, yield or allocation factor adopted. |
| `sudz-feed-route` | literature | Südzucker, Animal Feed Products from sugar beet, publisher HTML, accessed 2026-11-20. https://www.suedzucker.com/products/animal-feed/ | Primary route from cleaned beet through extraction and fresh pressing; further molassing/drying/pelleting is a distinct route. |
| `nord-beet-pulp` | literature | Nordzucker, Sugar beet pulp, publisher HTML, accessed 2026-11-20. https://www.nordzucker.com/en/sugar-expertise-products/animal-feed/sugar-beet-pulp | Independent manufacturer family comparison of pressed, dried and molassed pulp; its variable dry-substance examples are not reference defaults. Dry-pellet storage advice is not wet-pulp guidance. |
| `sudz-bisz-pressed` | literature | Südzucker BISZ, Pressschnitzel, publisher HTML, accessed 2026-11-20. https://bisz.suedzucker.de/futtermittel/pressschnitzel/ | Single feed material from de-sugared pressed sugar beet; fresh versus ensiled state, product analysis and footnotes. Product-specific values do not establish nutritional equivalence or a universal specification. |
| `epa-ap42-beet-1997` | official_guidance | US EPA, AP-42 §9.10.1.2 Sugarbeet Processing, March 1997, pp.1–5 and Figures 9.10.1.2-1/2. https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1b.pdf | Independent extraction/pressing process and press-water return; adjacent molassed dried route as counterexample. No dryer emission factor, fixed moisture or present chemical-use assumption imported. |
| `vdz-beet-pulp-2005` | handbook | Verein der Zuckerindustrie, Concept Animal Constituents in Sugar Beet Pulps, October 2005; English printed pp.23–28 and process annex pp.34–36. https://www.zuckerverbaende.de/wp-content/uploads/2021/08/vdz-konzept_tierische_bestandteile_2005.pdf | Historical straight-feed pressing/fresh-use distinction and contamination-control process context; dried/molassed pulp and tops/tails are distinct. No current legal approval or universal zero-contamination claim. |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, first edition March 2010, §7.9.2–7.9.3, printed pp.255–265. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision, exchange-specific determining physical causality and only residual actual-state common-gate economic value; independent method evidence, not a beet-factory inventory or fixed allocation share. |
| `un-cpc3-notes-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.104 and 199. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39149 includes beet-pulp and other sugar-manufacture waste and explicitly excludes cane bagasse 39141; adjacent 39130 starch residues and 23319 prepared feed are distinct. Classification does not prove process state or methodology approval. |
