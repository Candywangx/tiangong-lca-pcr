---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.gas-fired-calcitic-quicklime
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Calcitic quicklime from natural-gas-fired limestone calcination

## 1. Scope and Applicability

Applies to industrial CaO-dominant calcitic quicklime manufactured from natural limestone by an actual natural-gas-fired kiln, before intentional slaking. Cover the complete whole accepted pebble/lump or actually crushed/ground product, including measured incidental Mg phases, residual carbonate, moisture and impurities; this is not a pure-reagent or active-CaO denominator. Actual kiln subtype, quarry provenance, accepted chemistry, reactivity and particle grade are required qualifiers, not universal defaults. EPA §11.17.1 and Figure11.17-1 distinguish the natural-stone calcination and downstream hydration branches; NLA printed1/3/8 independently confirms stone preparation, quicklime forms, hydrate/milk differences and bulk/bag supply (`epa-lime-1998`, `nla-lime-essential`).

Exclude deliberate Ca(OH)2/hydrated lime, putty or slurry/milk, hydraulic lime/binders, dolomitic or magnesian quicklime as the intended product family, PCC, cement clinker, pure laboratory-reagent manufacture, non-natural carbonate feed, and coal/oil/biomass/electrically calcined routes. Any incidental hydroxide or hydraulic phase must be measured against the real quicklime specification; it is not a licence to relabel a hydrated or hydraulic product. A future different use of the same physical quicklime does not create another canonical PCR. This is technical synthesis of primary source routes, not a claim that one SKU/factory or current order demonstrates every conditional unit. No default temperature, purity, recipe, fuel factor, density, activity or lifetime is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.gas-fired-calcitic-quicklime |
| classification_refs | CPC 3.0 37420; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Whole industrial calcitic quicklime before intentional hydration; actual pebble/lump or dry mechanically sized powder; bulk or actual bag supply |
| excluded_products | Hydrated/hydraulic lime; lime milk/putty; dolime; clinker; PCC; reagent-only and other feed/fuel routes listed in Section1 |
| representative_product | A declared calcitic quicklime grade with independently tested phases and first acceptance |
| production_route | Natural limestone receipt with upstream burdens → actual preparation → natural-gas calcination → cooling/sizing → first quality release → actual cohort storage/packing/handling/dispatch |
| market_state | Whole prehydration quicklime; declared size and delivery state; net product excludes packages |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one declared accepted industrial calcitic quicklime product |
| How much | 1 kg net whole product at first quality release |
| How well | Actual phase/assay/moisture/reactivity/particle and acceptance specification; no universal grade equivalence |
| How long or cycle | One declared first-release cohort and production interval; disclose the separately observed subsequent service horizon |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | quicklime `c28c9315-f4c9-4cfc-9463-872e47fc133f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and reporting period; natural calcitic limestone origin and supplier; kiln type and natural-gas route; SKU and CaO-dominant nonhydraulic prehydration state; actual active/free CaO and total Ca assay bases; residual carbonate and Mg-bearing phases; hydroxide and hydraulic phases; free water versus chemically bound water; particle form and size distribution; measured reactivity/test method and acceptance specification; first-release cohort Q and unique release history; opening/closing WIP and each inherited flow-burden vector; finished-stock cohort quantities and carried manufacturing vectors; storage/packing/dispatch horizon and actual incremental service; net/gross packaging and owner; utility quantity states and provider geography; actual gas/solid/liquid species and receiving endpoints; asset service and allocation evidence |

The native reference is a whole industrial quicklime Product flow at plant, calcination route, before hydration, measured by total mass; it does not set CaO assay, Mg content, impurities, moisture, reactivity or supplier geography. Those ordinary collection/provider facts are required in the real foreground package, not evidence of a different molecule or a missing core identity. Declare every qualifier in metadata, process notes or reference comments. The finished card retains the same restrictions and selected physical row in both languages.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| first_release | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = sum of measured net whole quicklime first quality releases after cooling and final sizing for one declared production cohort. Count each accepted physical batch once. Include accepted retained incidental constituents; exclude all packaging. Q is not pure/active CaO, dry solids, oxide-equivalent Ca, shipment or invoice mass. Closing finished stock already released belongs in Q; do not subtract its manufacturing vector or add its mass as another production output. |
| species_basis | reference product; limestone; offspec; kiln_dust | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure mineral phases, free/active CaO, Ca(OH)2, Ca/Mg carbonate and actual hydraulic phases separately; oxide-equivalent elemental assays and loss on ignition do not establish real oxide, water or CO2 species. Record test atmosphere, temperature schedule, dry/as-received/ignited basis and uncertainty. Independently determine free moisture, bound water and carbonate conversion; one mass residual cannot fit both unknown water and CO2. |
| gas_state | gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter gas in its actual delivery T/P, wetness, composition and compressibility; reconcile to the provider cubic-metre state. Derive physical carrier kg and heat MJ only from independent same-state density/composition/calorific evidence, never from a secondary flow-property coefficient. |
| electrical_energy | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve electricity native MJ; exact support units convert 1 kWh to 3.6 MJ. Keep electrical energy, fuel heat and material carrier mass separate; do not impose Mass/kg on an energy inventory row. |
| quantity_dimensions | all inventory rows | Native extensive property | Native reference unit | Preserve each selected row native extensive property/unit. For physical balances additionally measure actual material kg independently, with substance-specific same-state density for liquids/gases. An already integrated m3 quantity is not multiplied by time; only true rates are integrated. Counts need measured same-article net mass/configuration, never a guessed item kg or secondary coefficient. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual receipt of natural burden-bearing limestone at the lime site, with quarry/external preparation upstream; no purchased-finished-quicklime manufacture substitute |
| starting_condition_role | foreground_start |
| product_classification_scope | Only the declared calcitic natural-gas quicklime subset of CPC37420 |
| recursive_input_rule | Pair and cancel internal stone/lime/dust transfers; external quicklime rework/feed changes provenance and needs an explicit scope decision with inherited burdens |
| upstream_dataset_requirement | Compatible extraction/preparation, fuel, electricity, water, each supplied formulation/article and capital-service backgrounds with exact quantity states and single ownership; all missing links remain disclosed |
| disclosure | Actual site/period/cohort; stages and meters; Q gate; FG service horizon; all physical boundaries, stocks, modes, returns, suppliers and unresolved quantities/identities |

| rule_id | Rule | Sources |
| --- | --- | --- |
| boundary_route | Include receipt of natural limestone with upstream quarry/preparation burden, actual onsite preparation, natural-gas calcination, cooling/heat recovery, screening/conditional grinding, first QC release, dust/water controls and maintenance. Expand each actual stage and pairing inside the aggregate model; no purchased-finished-product repacking shortcut. | epa-lime-1998; nla-lime-essential |
| boundary_modes | Retain all failed batches, no-output periods, starts/stops, standby, cleanup, testing samples and actual rework. Rework of hydrated/carbonated/off-grade quicklime requires manufacturer/specification permission, actual route, postwork tests and acceptance/disposition; never assume it safely returns to grade. A reinspection or delivery cannot create another first release. | epa-lime-1998 |
| boundary_services | First-release manufacturing is the reference gate. Preserve actual subsequent same-cohort storage, packing, handling and factory dispatch as a separate incremental service vector over a declared observation horizon. Older opening-FG cohorts retain their own original released kg and manufacturing history; never assign their service to current Q by default. No downstream application, slaking or future recarbonation credit. | epa-lime-1998; ilcd-attributional-2010 |
| boundary_complete | Each real chemical formulation, utility, fuel, article, waste and species requires one concrete atomic exchange and one physical/burden owner. Whole purchased mixtures include assay/water/additive subaccounts without extra purchases; onsite mixing retains every actual purchased input, energy and loss. Add any real unlisted chemical, refractory grade, filter, spare part, transport service, fuel or release before dataset completion; absence and a numeric zero require evidence. | epa-lime-1998; ilcd-attributional-2010 |
| boundary_heat_water | Reconcile actual cooling/wash/wet-control water and each free/liquid/vapour/bound/reaction-water phase. Internal heat/air/water returns cancel only after equal paired interfaces. If a real external steam/hot-water/condensate interface exists, add separately verified atomic supply and return cards with mass, temperature, pressure/phase, enthalpy reference and supplier water/energy convention; do not duplicate a provider or invent a boiler. | epa-lime-1998 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| lime_line | Aggregate calcitic quicklime manufacturing and cohort services | required | Actual natural-gas calcination; each conditional exchange independently justified | foreground_production | 1 kg net first quality released whole quicklime |

Preserve the stage sequence and stage meters inside lime_line: receipt/stone preparation → kiln calcination → cooling/heat recovery → screening/conditional milling → first QC release Q → FG storage/packing/handling/factory dispatch. Keep manufacture, FG services and combined physical gates separately; Q is an internal checkpoint at the combined gate. Every physical transfer retains equal measured link ends and inherited per-flow vectors. Required qualifying context for all cards is the calcitic prehydration state and actual route/cohort/period, not pure CaO. Conditional cards require observed presence or documented absence; site-specific unknowns stay pending. Add every actual unlisted atomic exchange.

### Process: Calcitic quicklime line (`lime_line`)

#### Inputs

##### Product flows

###### Natural calcitic limestone feed (`limestone`)

Receive the whole burden-bearing natural limestone lot, including measured free moisture and mineral impurities. Native identity is mass-based limestone with composition, grade, extraction route and provider unspecified; establish those facts from actual quarry/supplier records. Record CaCO3, Mg carbonate, CaO, hydroxide, silica, clay and other real phases independently. This is not precipitated pure carbonate, dolime, purchased quicklime or a default pure-CaCO3 recipe. Quarry extraction and any preparation already performed remain upstream; expand actual onsite crushing, sizing, conditional washing and drying.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_inputs after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-lime-1998`; `nla-lime-essential`

###### Fossil pipeline natural gas (`gas`)

Actual whole gaseous pipeline natural-gas mixture with compressed supply/consumption state, T/P, wetness, compressibility, complete composition and independent density/heating value. Methane CAS and pressurized-CH4 aliases alone do not establish a whole-mixture identity; until representative-CAS versus pure-methane interpretations are resolved this auxiliary remains unbound and needs full provider/native whole-supply qualification. Retain original m3, actual carrier kg and heat MJ independently; secondary Mass=1 is not density. No fixed composition/HHV or pure-methane purchase substitution; include all actual warm-up/idle/failure supplies.

- Selected flow: Gaseous pipeline natural gas mixture
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_inputs after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-lime-1998`

###### Delivered medium-voltage grid electricity (`electricity`)

Native supply is CN grid-average consumption mix delivered to a 1–35 kV user. Bind only for that actual geography, voltage and supply mix; another source requires its own verified exchange. Meter crushing, fans, kiln drives, dust collection, milling, packing, storage, controls and all idle/failed/rework operation. Preserve native Net calorific value/MJ and convert kWh using the exact unit-group 3.6 MJ/kWh; this is electrical supply, not purchased heat.

Reference unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`。

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_inputs after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-lime-1998`

###### Externally supplied treated process water (`process_water`)

Conditional treated liquid industrial water for actual stone washing, cooling makeup, dust control or cleaning, not deliberate product hydration. Native Process Water does not define a source/provider/grade. Distinguish each use and delivery state; count supplier-included water treatment once. Keep gross external ingress even when retained in closing wet stock; internal circulation cancels only after paired measurements. Direct abstraction requires a separate basin-specific resource row and onsite treatment, rather than this purchased-water identity.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_inputs after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-lime-1998`

###### Petroleum diesel fuel (`diesel`)

Conditional whole supplied diesel for actual onsite loaders or emergency equipment. Declare fuel specification, renewable fraction, measured density/temperature and net calorific tests. Farm, shipyard or building-specific fuel routes do not establish this actual yard-fuel role. Retain exhaust species and real idle operation separately; never treat an invoice litre as a kilogram.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Petroleum diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_inputs after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-lime-1998`

###### Mineral lubricating oil formulation (`lubricant`)

Conditional whole purchased mineral-oil lubricant, including additives, counted once. Do not repurchase constituent oil/additives in subaccounts. A PAO/total-synthesis native lubricant is not mineral oil; current UUID is unresolved. Keep loose stocks, installed oil, actual filling, topping-up, drained oil, losses and spill recovery, with temperature and water content. Oil left installed at period close does not erase the real ingress.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Mineral lubricating oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_inputs after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-lime-1998`

###### Fired magnesia lining brick (`refractory`)

Conditional fired magnesite brick made by high-temperature sintering of magnesium raw material, at plant. Native commentary specifies MgO 89–98%, feed limiting size generally 3–5 mm and firing 1550–1600 °C, higher-purity firing above 1750 °C. These are native compatibility restrictions, never a kiln recipe or assumed supplier measurements. Confirm actual grade/route against them; other lining material needs its own atomic row. Native clay classification is anomalous despite a consistent fired-brick physical identity. Track new/used loose and installed pieces, actual insertion/removal, wear, attached lime and wet mass; do not double-purchase initial lining included with an assembled kiln.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: fired magnesite brick `251839cf-ed91-4e67-b17c-3eb546eecd40`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_inputs after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-lime-1998`

###### Polyester dust-filter bag (`filter_bag`)

Conditional one complete purchased polyester bag for a documented compatible cooled exhaust/handling application. Verify polymer, coating, cage inclusion, temperature/chemical suitability and supplier specification; a polyester fibre or mesh roll is not a complete bag. No UUID is adopted. Count complete supplied formulation once; item count needs calibrated net article mass of the same construction before kg conversion. Track installed and loose bags, attached dust, repair and removal; another filter medium needs its own row.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Polyester dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_inputs after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-lime-1998`

###### Natural-gas lime kiln assembly (`kiln_asset`)

Conditional actual capital kiln assembly with a documented complete equipment boundary and manufacturing burden vector. Measure net delivered mass from calibrated weighing or traceable component drawings/records, including explicitly supplied initial lining/fluids only once. Keep every physical receipt and opening/closing installed assembly; separate replacement lining, oil and other parts that cross the boundary independently. Inventory A_i for service is a documented mass-equivalent share of that assembly manufacturing vector over actual service/function use; it is not the physical receipt mass, one whole kiln per kg product, a default lifetime or zero merely because no kiln was purchased this period. Missing service-history evidence remains a data-package gap.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Natural-gas lime kiln assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_assets after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Paper quicklime sack receipt (`sack_new`)

One complete paper sack, commonly kraft, from the native paper-bag family. Verify actual construction and moisture protection; integral liners/adhesives remain in the whole supplier-owned sack background. A separately purchased liner is a distinct exchange. Native general recyclability claims are not this site waste fate. Packaging P includes all actually purchased packaging, separately invoiced or paid within a bundle; retain its upstream provider within that bundle or separately, never both. First non-purchase external receipts I = N_ext are disjoint and use the same-material *_with_supply card. Retain its actual physical mass and one upstream burden owner. Closing stock never deletes this ingress.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。 Paid P and first non-purchase I = N_ext are disjoint, with whole wet carried contents counted once.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Paper quicklime sack external return received (`sack_return_in`)

One complete paper sack, commonly kraft, from the native paper-bag family. Verify actual construction and moisture protection; integral liners/adhesives remain in the whole supplier-owned sack background. A separately purchased liner is a distinct exchange. Native general recyclability claims are not this site waste fate. Conditional same physical article returned across the boundary. Identify owner, prior dispatch, condition and already carried burden; no new production/purchase or credit is implied. Gross returned mass stays physical even if unused at close.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Polyethylene pallet wrap receipt (`film_new`)

One PE film material, CAS 9002-88-4; verify actual resin, thickness and additives. It does not stand for PET/PVC/PP, an integral sack liner, or an entire packaging kit. Native CPC29220 luggage assignment is anomalous; basename/CAS/comment support PE film, while provider compatibility remains separate. Packaging P includes all actually purchased packaging, separately invoiced or paid within a bundle; retain its upstream provider within that bundle or separately, never both. First non-purchase external receipts I = N_ext are disjoint and use the same-material *_with_supply card. Retain its actual physical mass and one upstream burden owner. Closing stock never deletes this ingress.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。 Paid P and first non-purchase I = N_ext are disjoint, with whole wet carried contents counted once.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Polyethylene pallet wrap external return received (`film_return_in`)

One PE film material, CAS 9002-88-4; verify actual resin, thickness and additives. It does not stand for PET/PVC/PP, an integral sack liner, or an entire packaging kit. Native CPC29220 luggage assignment is anomalous; basename/CAS/comment support PE film, while provider compatibility remains separate. Conditional same physical article returned across the boundary. Identify owner, prior dispatch, condition and already carried burden; no new production/purchase or credit is implied. Gross returned mass stays physical even if unused at close.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Wooden board pallet receipt (`pallet_new`)

Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg, no fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; select only the actual whole transport pallet with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-item kg or life inferred. Prior lumber-mill/boards-slats supply-stage completeness was insufficiently explicit, not proven raw/unassembled-only; prior taxonomy debt is separate. Whole bought contents count once. Independently weigh actual purchase, external-return receipt, gross dispatch and outward return with one owner and no recreated original burden; paid purchase P excludes separately recorded first non-purchase I = N_ext.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。 Paid P and first non-purchase I = N_ext are disjoint, with whole wet carried contents counted once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Wooden board pallet external return received (`pallet_return_in`)

Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg, no fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; select only the actual whole transport pallet with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-item kg or life inferred. Prior lumber-mill/boards-slats supply-stage completeness was insufficiently explicit, not proven raw/unassembled-only; prior taxonomy debt is separate. Whole bought contents count once. Independently weigh actual purchase, external-return receipt, gross dispatch and outward return with one owner and no recreated original burden; paid purchase P excludes separately recorded first non-purchase I = N_ext.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Returned CaO-bearing calcitic lime (`quicklime_return_in`)

Conditional actual customer return from an identified original first-release cohort, with its complete current wet physical mass and actual CaO/hydroxide/carbonate phases. Retain the original released kg and inherited manufacturing vector separately from the received mass; added water/CO2 and actual losses cannot be hidden by assuming equal original/return weights. Do not repurchase, create new Q, or remove original manufacturing burden just because material returned. Capture actual return transport, receipt, testing, storage and approved rework increments for the original cohort. Rework requires manufacturer/spec permission, postwork tests and disposition; externally purchased finished lime as manufacturing feed is outside this raw-limestone route. This unresolved returned-material identity is not a pure CaO or fresh-quicklime substitute.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Returned CaO-bearing calcitic lime
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_cohort after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cohort`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Paper bag (`sack_with_supply`)

Record the same complete physical article/material on its first non-purchase external receipt I = N_ext: unpaid packaging included with another supply, a loan, rental, gift or transfer. This incoming leg is disjoint from paid P and a true return ER of the same article previously sent outward by this site; ER requires that prior outward record. Preserve actual new/used condition, whole wet quantity and inherited ownership. Paid bundled packaging belongs to P with one included provider; a first receipt or later reuse alone creates no second manufacture, purchase or credit. Actual rental/handling service and its compatible provider remain separately attributable. One complete paper sack, commonly kraft, from the native paper-bag family. Verify actual construction and moisture protection; integral liners/adhesives remain in the whole supplier-owned sack background. A separately purchased liner is a distinct exchange. Native general recyclability claims are not this site waste fate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Polyethylene film (`film_with_supply`)

Record the same complete physical article/material on its first non-purchase external receipt I = N_ext: unpaid packaging included with another supply, a loan, rental, gift or transfer. This incoming leg is disjoint from paid P and a true return ER of the same article previously sent outward by this site; ER requires that prior outward record. Preserve actual new/used condition, whole wet quantity and inherited ownership. Paid bundled packaging belongs to P with one included provider; a first receipt or later reuse alone creates no second manufacture, purchase or credit. Actual rental/handling service and its compatible provider remain separately attributable. One PE film material, CAS 9002-88-4; verify actual resin, thickness and additives. It does not stand for PET/PVC/PP, an integral sack liner, or an entire packaging kit. Native CPC29220 luggage assignment is anomalous; basename/CAS/comment support PE film, while provider compatibility remains separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`pallet_with_supply`)

Record the same complete physical article/material on its first non-purchase external receipt I = N_ext: unpaid packaging included with another supply, a loan, rental, gift or transfer. This incoming leg is disjoint from paid P and a true return ER of the same article previously sent outward by this site; ER requires that prior outward record. Preserve actual new/used condition, whole wet quantity and inherited ownership. Paid bundled packaging belongs to P with one included provider; a first receipt or later reuse alone creates no second manufacture, purchase or credit. Actual rental/handling service and its compatible provider remain separately attributable. Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg, no fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; select only the actual whole transport pallet with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-item kg or life inferred. Prior lumber-mill/boards-slats supply-stage completeness was insufficiently explicit, not proven raw/unassembled-only; prior taxonomy debt is separate. Whole bought contents count once.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Wooden pallet repair board (`pallet_repair_wood`)

Only actual separate pallet repair-board receipts, with wood species/treatment, dry material, free/absorbed water, provider and ownership. Not a whole pallet or duplicate whole-pallet included contents; actual fasteners/glue need specific rows. Retained added material/water remains influx, attributed to actual manufacture Q or original Qc/H without assumed repair/life.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Process Water (`pack_repair_water`)

Only actual externally treated industrial Process Water for packaging cleaning/repair, native Product Mass/kg with actual treatment grade/provider qualification. Not quicklime slaking water; raw abstraction/internal circulation/wastewater have separate ownership. Independently measure state/additions and disjoint retained wetwood/package, wastewater and vapour outlets; no duplicate whole-supply carried water.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `epa-lime-1998`

##### Elementary flows

###### Molecular oxygen from air (`oxygen_in`)

Molecular O2, CAS 7782-44-7, resource from air, not purchased pure/liquid oxygen. Measure gross air volume/composition, temperature, pressure and humidity by source/mode. Retain complete gross species mass and source partition in the physical ledger; do not add a second aggregate air input. Native extensive property remains Mass/kg. Unknown carrier quantity is not zero. Native oxygen aliases also mention liquid oxygen and dioxygenyl ion. Those aliases are not adopted as physical state or ion identity: the bound CAS and resource/air-emission role are restricted here to molecular O2 measured in actual air; incompatible ion/isotope or purchased/liquid-oxygen use fails applicability.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Molecular nitrogen from air (`nitrogen_in`)

Molecular N2, CAS 7727-37-9, renewable element resource from air, not nitrogen oxides or bottled nitrogen. Measure gross air volume/composition, temperature, pressure and humidity by source/mode. Retain complete gross species mass and source partition in the physical ledger; do not add a second aggregate air input. Native extensive property remains Mass/kg. Unknown carrier quantity is not zero.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Argon from air (`argon_in`)

Nonradioactive molecular/atomic argon, CAS 7440-37-1, resource from air, not argon-41 or purchased gas. Measure gross air volume/composition, temperature, pressure and humidity by source/mode. Retain complete gross species mass and source partition in the physical ledger; do not add a second aggregate air input. Native extensive property remains Mass/kg. Unknown carrier quantity is not zero.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

 Native ordinary neutral natural Ar CAS7440-37-1, resource from air, Mass/kg. Isotope Ar41/Ar40 alias noise does not establish radioactive material/activity. Actual neutral gas and source/compartment govern; no assumed air fraction or purchased gas Product.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Water vapour in inlet air (`humidity_in`)

H2O vapour carried with actual ambient/combustion/cooling air; CAS 7732-18-5. Water-vapour emission identities do not represent this resource input. Measure gross air volume/composition, temperature, pressure and humidity by source/mode. Retain complete gross species mass and source partition in the physical ledger; do not add a second aggregate air input. Native extensive property remains Mass/kg. Unknown carrier quantity is not zero.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Water vapour in inlet air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Ambient carbon dioxide entering with air (`ambient_co2_in`)

Ambient molecular CO2, CAS 124-38-9, with separately established origin fractions; no fossil/biogenic resource identity is assumed from a search label. Measure gross air volume/composition, temperature, pressure and humidity by source/mode. Retain complete gross species mass and source partition in the physical ledger; do not add a second aggregate air input. Native extensive property remains Mass/kg. Unknown carrier quantity is not zero.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Ambient carbon dioxide entering with air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Atmospheric water vapour absorbed by packaging (`pack_humidity_in`)

Only actual packaging uptake of ambient H2O vapour CAS7732-18-5, independently measured gaseous humidity/state and absorbed mass without assumed air fraction/density. Disjoint from water carried in P/I/ER/Radd; retained real uptake remains influx and cannot be zeroed because another atomic card exists.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Atmospheric water vapour absorbed by packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `epa-lime-1998`

#### Outputs

##### Product flows

###### Paper quicklime sack accompanying gross shipment (`sack_dispatch`)

One complete paper sack, commonly kraft, from the native paper-bag family. Verify actual construction and moisture protection; integral liners/adhesives remain in the whole supplier-owned sack background. A separately purchased liner is a distinct exchange. Native general recyclability claims are not this site waste fate. Conditional full article mass accompanying every actual gross product shipment, including later-returned shipments. Exclude it from net product Q. This physical carrier is not an independently credited coproduct; the quantity is not multiplied by an economic burden share.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Paper quicklime sack empty external return (`sack_return_out`)

One complete paper sack, commonly kraft, from the native paper-bag family. Verify actual construction and moisture protection; integral liners/adhesives remain in the whole supplier-owned sack background. A separately purchased liner is a distinct exchange. Native general recyclability claims are not this site waste fate. Conditional actual empty article returned outside the site, distinct from product-accompanying dispatch and internal reuse. Record mass, receiver, damage, remaining service and burden ownership; do not infer an avoided virgin article.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Polyethylene pallet wrap accompanying gross shipment (`film_dispatch`)

One PE film material, CAS 9002-88-4; verify actual resin, thickness and additives. It does not stand for PET/PVC/PP, an integral sack liner, or an entire packaging kit. Native CPC29220 luggage assignment is anomalous; basename/CAS/comment support PE film, while provider compatibility remains separate. Conditional full article mass accompanying every actual gross product shipment, including later-returned shipments. Exclude it from net product Q. This physical carrier is not an independently credited coproduct; the quantity is not multiplied by an economic burden share.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Polyethylene pallet wrap empty external return (`film_return_out`)

One PE film material, CAS 9002-88-4; verify actual resin, thickness and additives. It does not stand for PET/PVC/PP, an integral sack liner, or an entire packaging kit. Native CPC29220 luggage assignment is anomalous; basename/CAS/comment support PE film, while provider compatibility remains separate. Conditional actual empty article returned outside the site, distinct from product-accompanying dispatch and internal reuse. Record mass, receiver, damage, remaining service and burden ownership; do not infer an avoided virgin article.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Wooden board pallet accompanying gross shipment (`pallet_dispatch`)

Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg, no fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; select only the actual whole transport pallet with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-item kg or life inferred. Prior lumber-mill/boards-slats supply-stage completeness was insufficiently explicit, not proven raw/unassembled-only; prior taxonomy debt is separate. Whole bought contents count once. Independently weigh actual purchase, external-return receipt, gross dispatch and outward return with one owner and no recreated original burden; paid purchase P excludes separately recorded first non-purchase I = N_ext.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nla-lime-essential`; `ilcd-attributional-2010`

###### Wooden board pallet empty external return (`pallet_return_out`)

Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg, no fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; select only the actual whole transport pallet with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-item kg or life inferred. Prior lumber-mill/boards-slats supply-stage completeness was insufficiently explicit, not proven raw/unassembled-only; prior taxonomy debt is separate. Whole bought contents count once. Independently weigh actual purchase, external-return receipt, gross dispatch and outward return with one owner and no recreated original burden; paid purchase P excludes separately recorded first non-purchase I = N_ext.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### First quality released calcitic quicklime (`finished`)

Whole industrial quicklime made by natural limestone calcination and supplied before intentional hydration; the native Product flow is industrial grade at plant, measured by total product mass. Active CaO, magnesium constituents, impurities, moisture, reactivity, particle form and geography are unspecified natively and must be established by actual lot tests. This PCR limits the family to CaO-dominant calcitic material, without invented purity thresholds. Exclude Ca(OH)2, lime milk, hydraulic phases as the intended binder, dolime and reagent-only pure-compound substitution. Weigh net accepted physical product at first quality release after actual cooling/sizing; packaging is separate. Q includes same-cohort closing finished stock and is never counted again as a second production output. Post-release storage/packing/handling/dispatch retains its actual incremental service vector and stated horizon for the original cohort.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: quicklime `c28c9315-f4c9-4cfc-9463-872e47fc133f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_reference`
- Sources: `epa-lime-1998`; `nla-lime-essential`

###### Uncalcined limestone screenings (`limestone_screenings`)

Conditional externally supplied uncalcined limestone size fraction with verified natural mineral identity. Native limestone does not establish grade, provider, actual coproduct status or an allocation key. Weigh the complete wet physical output and separately establish its actual function/receiver. Internal rescreening is paired internal transfer. This is not first-released quicklime Q.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Exported recovered hot-air heat (`export_heat`)

Conditional actual hot-air heat supplied to an independently established external function. Meter heat from matching air flow, composition, temperature and enthalpy reference with actual supply/return convention. Air-carrier species remain atomic physical exchanges. Do not invent steam, a boiler, condensate or an automatic substitution credit. Internal kiln/cooler heat recovery cancels internally and is not this export.

- Selected flow: Exported recovered hot-air heat
- Flow property / unit: Energy / MJ
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_energy after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

##### Waste flows

###### Separated CaO-bearing kiln-filter dust (`kiln_dust`)

Conditional separated mixed mineral dust from the actual filter; state CaO/carbonate/hydroxide phases, moisture, contaminants and receiver. Do not use cement clinker/chloride-dust identities. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Separated CaO-bearing kiln-filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Rejected calcitic quicklime (`offspec`)

Failed, contaminated, over/underburned, hydrated or carbonated material for actual disposition, not accepted Q. No compatible waste UUID is confirmed. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Rejected calcitic quicklime
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Spent polyester filter bag (`spent_filter`)

Conditional whole removed bag with adhering lime and water; separately removed dust is deducted from its attached fraction exactly once, never from both actual cross-boundary exchanges. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Spent polyester filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Spent magnesia kiln brick (`spent_refractory`)

Conditional removed used brick with adhering material and water, actual wear, contamination and treatment. Fresh brick is not a waste identity. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Spent magnesia kiln brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Used mineral lubricating oil (`used_oil`)

Conditional contaminated used petroleum lubricant at generation point; native Waste flow allows petroleum/synthetic oils and leaves treatment unspecified. Record actual whole oil/water/contamination and receiver. Do not infer recycling, combustion or credit. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Untreated limestone-washing wastewater (`wastewater`)

Conditional whole untreated wash/cleaning wastewater transferred to a named external treatment operator. This is one wet stream, not COD, a freshwater elementary release or a generic wastewater from another industry. Measure total volume, density, water and dissolved/suspended constituents independently. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Untreated limestone-washing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Limestone-washing mineral sludge (`sludge`)

Conditional physically separated wet mineral sludge, with actual water, carbonate/hydroxide phases and contaminants. Sewage or drilling-sludge candidates do not establish this identity. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Limestone-washing mineral sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Waste quicklime paper sack (`waste_sack`)

Conditional whole discarded paper sack with actual liner/adhesive and adhering lime/water. A fresh bag Product identity does not establish waste status/treatment. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Waste quicklime paper sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Waste polyethylene pallet film (`waste_film`)

Conditional discarded PE wrap, separately weighed with adhering contamination; not virgin film or mixed plastic waste of unspecified resin. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Waste polyethylene pallet film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Waste wooden board pallet (`waste_pallet`)

Conditional damaged/retired wooden pallet, whole construction, measured moisture and adhering matter, distinct from reusable returned pallets. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Waste wooden board pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Retired lime-kiln steel assembly (`retired_kiln`)

Conditional actually removed equipment with complete assembly boundary, loose/installed components and remaining fluids. Record its physical gross mass and remaining burden vector; do not assume metal recovery or a fixed depreciation life. Retain full measured gross output, its manufacture/control/treatment burden and inherited cohort vector; sale or offsite transfer alone never deducts ordinary production waste burden. A genuine separate function requires the explicit allocation decision before one vector transfer.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Retired lime-kiln steel assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_residues after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Discarded wooden pallet repair board (`removed_pallet_wood`)

Actual old repair wood removed, independently measured drywood/water/contamination and destination. Not whole-pallet waste or duplicate W. Sale/export alone does not subtract manufacture/treatment burden or establish credit.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Discarded wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

###### Packaging cleaning and repair wastewater (`pack_repair_wastewater`)

Only actual package-cleaning/repair wastewater sent for treatment with measured liquid, wood/contaminants and destination; disjoint from retained wetwood/package water and vapour/other exits. Not direct environmental liquid or a guessed COD/element molecule; no reversible quicklime hydration assumed.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Packaging cleaning and repair wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `epa-lime-1998`; `ilcd-attributional-2010`

##### Elementary flows

###### Molecular oxygen discharged to air (`oxygen_out`)

Unreacted O2, CAS 7782-44-7; gross outlet mass distinct from oxygen consumed in fuel oxidation. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate. Native oxygen aliases also mention liquid oxygen and dioxygenyl ion. Those aliases are not adopted as physical state or ion identity: the bound CAS and resource/air-emission role are restricted here to molecular O2 measured in actual air; incompatible ion/isotope or purchased/liquid-oxygen use fails applicability.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Molecular nitrogen discharged to air (`nitrogen_out`)

Molecular N2, CAS 7727-37-9; retain inlet/outlet gross masses and actual conversion to nitrogen species without assuming a universal air composition. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Argon discharged to air (`argon_out`)

Nonradioactive Ar, CAS 7440-37-1, passed through measured source air, not argon-41. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

 Native ordinary natural neutral Ar CAS7440-37-1, contemporary unspecified-air emission, Mass/kg. Actual gross outlet/pass-through remains distinct from resource inlet and net generated release; Ar41/Ar40 aliases authorize no isotope/activity, indoor or long-term substitution.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Water vapour discharged to air (`vapour_out`)

H2O vapour, CAS 7732-18-5, to air rather than water. Partition inlet humidity, feed drying, actual combustion/reaction water and other sources from independent evidence. Water on dust, liquid drops and structurally bound hydroxide water are different phases. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

 Native actual gaseous molecular H2O CAS7732-18-5, contemporary unspecified-air emission Mass/kg. Ice/heavy-water/ionic and unrelated aliases do not authorize those phases/isotopes or liquid/aerosol substitution. Independently measure actual water phase and gas state, not a single wet residual jointly fitted with carbonate CO2.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Geological-carbonate carbon dioxide to air (`co2_carbonate`)

Molecular CO2, CAS 124-38-9, from measured decomposition of geological carbonates. The fossil-origin elementary identity is adopted for nonbiogenic geological carbon with explicit process-source tagging; never for biogenic carbonate or captured product gas. Measure carbonate consumption/residual phases and CO2 independently: do not apply the AP-42 theoretical factor or call this fuel CO2. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate. Native aliases include dry ice and carbon-dioxide ions; they do not establish solid CO2 or ionic carbon in this molecular gas-to-air exchange. A hard CAS/species or origin conflict fails applicability.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Fossil-fuel carbon dioxide to air (`co2_fuel`)

Molecular fossil CO2, CAS 124-38-9, generated from actual fuel carbon and conversion. Separate carbonate-derived CO2 and air pass-through. CO/CH4/retained carbon need their own measured accounts; do not assume complete combustion. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate. Native aliases include dry ice and carbon-dioxide ions; they do not establish solid CO2 or ionic carbon in this molecular gas-to-air exchange. A hard CAS/species or origin conflict fails applicability.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Ambient carbon dioxide passed to outlet air (`co2_ambient_out`)

Molecular CO2 already in inlet air, not newly generated fuel or carbonate release and not an uptake credit. Retain measured gross source/origin fractions in the physical carrier account; model net environmental release consistently without deleting physical mass. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Ambient carbon dioxide passed to outlet air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Fossil carbon monoxide to air (`co`)

Molecular CO, CAS 630-08-0, from fossil carbon, not purchased CO Product gas or total carbon. Native air-unspecified identity does not establish actual source height. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate. Native aliases include flue gas and cryogenic liquid CO; this row covers only the molecular fossil CO constituent, not an exhaust mixture or liquid supply.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Fossil methane to air (`methane`)

Molecular CH4, CAS 74-82-8, from actual leaks/incomplete oxidation, not total VOC/TOC. Require an unambiguous molecular CH4 identity; graphite, carbon nanotubes and formaldehyde are not substitutes. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

 Native molecular CH4 CAS74-82-8, fossil-origin contemporary unspecified-air emission Mass/kg. Primary name/CAS/EC200-812-7 match methane; extensive graphite/carbon-black/charcoal/nanotube/chlorinated-organic/biogas/isotope aliases do not authorize those chemical forms or biogenic origin. Use independently confirmed fossil CH4 from actual fuel leaks/incomplete oxidation only, not totalVOC/TOC or gas-mixture purchase mass.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Nitrogen monoxide to air (`no`)

Molecular NO, CAS 10102-43-9, separately measured from NO2. Require a molecular NO identity distinct from HNO/nitroxyl. Total NOx or NO2-equivalent monitoring cannot be assigned to actual NO mass without independent speciation and compatible conversion. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

 Native molecular NO CAS10102-43-9, contemporary unspecified-air emission Mass/kg. Primary name/CAS/media describe NO; HNO/nitroxyl/nitrosyl-hydride and NO2 mistranslation aliases do not authorize different chemistry. Require actual NO-specific analysis and uncertainty, not aggregate NOx/NO2-equivalent assignment.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Nitrogen dioxide to air (`no2`)

Molecular NO2, CAS 10102-44-0, not nitrite, N2O, total NOx or an assumed NO2-equivalent mass. Separate actual species measurement is required. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Sulfur dioxide to air (`so2`)

Molecular SO2, CAS 7446-09-5; distinguish feed/fuel sulfur, sulfur retained as actual solid phases and other real sulfur gases. Total SOx is not this species. No universal sulfur-capture efficiency. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Dinitrogen monoxide to air (`n2o`)

Molecular N2O, CAS 10024-97-2, only when independently evidenced; no total-nitrogen or NOx allocation into this gas. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Unsized filterable mineral particulate to air (`pm`)

One actually emitted mineral-dust exchange with particle size unspecified, not captured dust or an invented chemical compound. Native broad elementary identity permits unspecified chemistry/control and does not impose the historic clinker example amount or a size distribution. Measure source/phase/method; resolve disjoint bins when actual size data exist. Condensable PM, analytical Ca and compound subfractions must not be added again to the same dust mass. Native bound emission rows use air, unspecified subcompartment; disclose actual outlet and use a separately verified more specific identity when required. Quantify this species independently on a consistent gas/measurement basis; unknown is pending, never zero. Gross physical mass, net release and allocation of burdens remain separate.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_air after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-lime-1998`

###### Liquid water discharged to freshwater (`water_fresh`)

Conditional actual liquid water carrier discharged directly to a specified freshwater receiving body after actual onsite treatment, CAS 7732-18-5. Current UUID is unresolved; wastewater-to-treatment, seawater and water-vapour identities do not substitute. Independently measure whole wet effluent mass/volume, same-state density, carrier water, dissolved and suspended constituents. Add each actual chemical release separately; pH/COD/total Ca are measurements, not proof of one chemical species. Count whole wet mass once in the physical ledger and its constituents only as subaccounts.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Liquid water discharged to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_water after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-lime-1998`

###### water vapour (`pack_water_vapour`)

Only actual packaging-repair/storage gaseous H2O CAS7732-18-5 contemporary unspecified-air Mass/kg; ice/heavywater/ionic aliases do not authorize those states. Independently measure evaporation and drymaterial loss, never fit both from one wet residual. No duplicate water in another same-side outgoing flow term; retained new water still has real influx, with manufactureQ/originalQc/H ownership.  This same actual H2O exchange also covers ordinary storage and handling desorption/evaporation, even with no repair or drying event; actual measured phase/outlet and nonoverlapping source ownership remain required.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the result of the sole a_i = A_i / Q equation in Section 8 for cp_packaging after attribution; retain unnormalized collection and gross physical quantities separately. No second division or assumed amount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `epa-lime-1998`

## 7. Allocation and Co-product Handling

| rule_id | Rule | Sources |
| --- | --- | --- |
| allocation_scope | This method is attributional only, in a declared scenario requiring allocation (Situation C2, or a specifically justified allocation case under the ILCD provisions). It does not offer a free choice between physical/economic allocation, substitution or consequential expansion. Industrial route sources establish manufacturing facts, not an LCA allocation method. | ilcd-attributional-2010 |
| allocation_order | First use dedicated measurements and real or virtual subdivision to assign every exclusively caused exchange. For the genuinely shared remainder, identify the determining physical causality for each exchange/function, supported by quantitative change or an actual limiting service relationship; generic mass/energy shares alone are not proof. Different exchanges may need different determining causes. | ilcd-attributional-2010 |
| allocation_residual | Only the unresolved common remainder after those steps may use contemporaneous actual market values for the real co-functions at the same common-process gate, actual state and quantity. Remove downstream conditioning/packing/transport value; document observed transactions, missing/negative values, residual scope and sensitivity. No fixed fraction or automatic heat/dust/recycling credit. | ilcd-attributional-2010 |
| allocation_vectors | Keep complete gross physical mass, species, packages and assets before burden allocation. For each flow retain dedicated/shared/remaining-stock vectors and the reason for each single transfer. Ordinary manufacturing rejects, breakage, samples, control wastes and treatment burden remain assigned to the actual production function unless an independently real other cohort/function and justified burden handoff are demonstrated; sale/offsite transfer is insufficient. | ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule column declares the final reference basis only. Each protocol collects unnormalized raw totals/vectors; conversion and attribution precede the single a_i = A_i / Q equation below. Neither collection nor this basis label divides the quantity.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | lime_line | finished | Release and phase tests | batch/SKU; unique first acceptance ID/time; calibrated gross/tare/net kg; CaO/active CaO/Ca(OH)2/carbonate/Mg/hydraulic phase assays; free and bound water; assay basis; reactivity method/result; particle form/size; acceptance/disposition; Q | Weigh each unique accepted whole-product batch after actual final cooling/sizing on calibrated equipment; separately sample phases/water and test actual specification. Link reinspection/return IDs without another Q. | kg | each acceptance and representative lab lot | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | calibration; signed first release; lab methods; uncertainty |
| cp_inputs | lime_line | limestone; gas; electricity; process_water; diesel; lubricant; refractory; filter_bag | Receiving and native-unit meters | row_id; source/owner; lot and whole formulation; opening/purchase/ingress/use/closing; supplier-included packaging; phase/moisture; route/form/grade; gas T/P/Z/wetness/composition; fuel calorific test; electricity geography/voltage/mix; water treatment; original unit; asset installed/loose state; receipt_or_already_net_consumption_basis; included_stock_adjustments; independent_raw_WIP_nonWIP_quantities; full_per_exchange_history | Read calibrated receiving scales/meters and complete supplier records; record whole externally supplied material once. Meter stages and all operating modes separately. Preserve raw measured quantities and same-state conversions; keep actual ingress alongside closing wet stock. Preserve gross/net basis and corrections already included; no second stock adjustment. | kg; m3; MJ | each receipt and continuous/interval meter | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | calibration; supplier declarations; bills; stock tickets |
| cp_air | lime_line | oxygen_in; nitrogen_in; argon_in; humidity_in; ambient_co2_in; oxygen_out; nitrogen_out; argon_out; vapour_out; co2_carbonate; co2_fuel; co2_ambient_out; co; methane; no; no2; so2; n2o; pm | Source gas and particulate monitoring | species/phase/CAS; inlet/outlet/source/mode; interval/hours; true rate or integrated volume; T/P/humidity/Z; dry/wet/O2-correction convention; concentration/molar basis; independent carbonate/fuel/ambient origin; speciation; mineral PM fraction/condensable/metal overlaps; uncertainty and detection limits; leak inventory | Use applicable calibrated source-specific inlet/stack/fugitive methods and independent phase/composition evidence. Preserve measured rates or integrated quantities as observed; normalize concentration states before integration. NOx/TOC/COD indicators never create species masses. Keep gross carriers and net generated releases separately. | kg; m3; rate with original time unit | continuous/representative modes with complete operating hours | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | sampling method applicability; calibration; blanks; paired flow/composition; detection limits |
| cp_water | lime_line | process_water; wastewater; sludge; vapour_out; water_fresh | Water phase and receiving body | source/treatment/use; external ingress; internal circulation; original volume/rate; measured same-state density; free/adsorbed/structural/reaction water; whole effluent wet mass; water carrier and dissolved/suspended matter; sludge water; temperatures; receiving endpoint; named chemical species | Pair calibrated water meters and representative laboratory phase/species tests; distinguish actual resources, purchased water, offsite wastewater, onsite sludge and direct freshwater output. Independent measurement reconciles water phases and heat interfaces; no automatic water density or residual species inference. | kg; m3 | each interval/discharge/cleaning with paired sampling | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | water meters; density/state measurements; laboratory; receiver records |
| cp_cohort | lime_line | all inventory rows | Stage physical and burden inheritance | stage and paired transfer IDs; all original units; opening/closing raw/WIP/FG; first-release ID/Q; failed/startstop/idle/cleanup/sample/rework; each flow inherited amount/burden vector and owner; FG cohort manufacture vector; service horizon H_c and Q_c; gross shipments/returns/losses and original IDs; wet mass; Ca/Mg/C/O/H/N/S and other actual elements; actual phases; actual_service_on_held_FG; original_delivery_specific_record; actual_return_new_water_CO2; removed_old_material; independent_water_loss; postwork_acceptance_disposition; authorization/status separate from performed-event occurrence; actual unauthorized/unapproved/failed/rejected work; all real incremental matter/water/energy/emission/waste burdens; acceptance/disposition; future unperformed unknown; unused-unassigned stores | Reconcile calibrated stage material/energy records and traceable stock/cost-burden vectors by batch/cohort. Carry every flow independently across raw/WIP and older FG; obtain actual rework permission/test/disposition. Preserve manufacture, FG-service and combined physical gates without counting the internal Q checkpoint twice. Real rework requires actual manufacturer permission, same-terminal grade compatibility, actual route and postwork phase/assay/reactivity/size/moisture acceptance and disposition. Hydrated/hardened/carbonated material is not presumed reversible; separately measure all actual new material/water/CO2 and removed old material/water, retain original Q_c/H_c and manufacturing history. Capture all actual work and resulting physical flows and burdens regardless of permission, failure or rejection. Permission and posttests authorize work/continued qualification only and never erase unauthorized/failed events. Preserve original Q_c/H_c and actual new/old material/water, custody and disposition; no assumed reversal of hydration/carbonation. | kg; m3; MJ; original native unit | every batch/transfer plus full period stock closure | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | paired stage logs; stock reconciliation; inherited vectors; release/return lineage; test reports |
| cp_packaging | lime_line | sack_new; sack_return_in; sack_dispatch; sack_return_out; film_new; film_return_in; film_dispatch; film_return_out; pallet_new; pallet_return_in; pallet_dispatch; pallet_return_out; waste_sack; waste_film; waste_pallet; sack_with_supply; film_with_supply; pallet_with_supply; pallet_repair_wood; pack_repair_water; pack_humidity_in; removed_pallet_wood; pack_repair_wastewater; pack_water_vapour | Single-article packaging stock | article/material/construction; net article kg or actual same-configuration weighing; new/used owner; supplier-included ingress burden; opening/closing empty/attached WIP/FG/reusable states; fresh receipt; external return received; gross shipment ID/carried article mass; empty external return; waste; internal reuse; service history; P; I; ER; S; EO; W; Radd; Rremove; H2Oin; H2Oout; same_side_flow_ownership; independent_dry_material_water; complete gross P/I/ER/S/EO/W by each pool; ordinary storage/handling humidity interval; real assembly tare and disjoint component masses; matched internal handoff IDs; actual single/multiple collection outlets; per-pool W source quantities; total-versus-partition nonadditivity; X same-side other-flow identities, not stocks; P including bundled-paid; I = N_ext first non-purchase incoming; payment and prior-outward article IDs | Weigh and reconcile each material/article separately, including all product-accompanying gross dispatches and returned articles. Distinguish mutually exclusive stock states and trace prior burden ownership; include actual liner/adhesive boundaries. Record original counts without an assumed article weight. Partition every incoming article by actual purchase/payment and same-item prior outward history into P, I = N_ext or ER. Preserve actual ownership, condition and included-provider/service records once; first non-purchase receipt is not a return or an outward leg. Measure full gross six directions and actual repair/moisture terms separately, retaining real added material/water on influx even when in closing wetstock; only same-side flow-term duplication cancels. Include ordinary storage/handling moisture uptake/release without inventing repair. Reconcile assembled article versus unique components through measured paired internal transfers; whole wet ingress includes integral water once. For a real combined waste outlet retain one actual Waste exchange with independent per-pool source-W memo records, total OR disjoint partition and one treatment/provider; do not fabricate separate exits for ledger symmetry. | kg; original item count | each receipt/dispatch/return/disposal and stock closure | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | article specifications; calibrated weights; ownership and signed return records |
| cp_assets | lime_line | kiln_asset; refractory; filter_bag; lubricant; spent_refractory; spent_filter; used_oil; retired_kiln | Physical asset and service history | asset/part boundary/configuration; measured complete net mass; initial supplier-included lining/fluids; opening/closing loose/in-service new/used mass; actual installed/removed/worn mass; adhering lime/water; installed fluids; inherited manufacturing vector; actual operating/function history; remaining service; maintenance/retirement; service share and uncertainty; gross_receipts_returns; actual_new_material_water; removed_old_material; independent_water_loss; parent_child_disjoint_ledger | Use calibrated weighing or traceable complete component mass records for the same equipment configuration. Reconcile physical stock and actual new/used receipts/removals independently of service burden. Derive causal service shares from actual function/use histories, including residual burden; no lifetime, depreciation percentage or per-item kg is invented. Independently retain actual new parts/material/water and removed old parts/water, full gross receipts/returns and closing moisture/fluid; wholearticle included parts remain subaccounts and service shares never shrink physical quantities. | kg; actual service/time unit | each installation/repair/removal plus period service closure | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | asset boundary/mass records; service logs; causal assignment; remaining-burden reconciliation |
| cp_residues | lime_line | limestone_screenings; kiln_dust; offspec; spent_filter; spent_refractory; used_oil; wastewater; sludge; waste_sack; waste_film; waste_pallet; retired_kiln | Residue and receiver handoff | row_id; whole wet kg; phase/chemical/element assays; free/bound water; adhering versus separated dust; reject/rework/sample lineage; legal/functional state; receiver/treatment; sale/transport; inherited burden owner and single transfer decision | Weigh every separate actual outward stream and characterize it with representative samples and receiver records; distinguish reuse/coproduct/waste/environmental release. Keep attached/separated material once while retaining every real boundary crossing; preserve ordinary manufacturing waste burden and all downstream treatment required by the chosen model. | kg; original wet volume with measured density | each shipment/removal/treatment and representative lab lot | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | scale tickets; lab; receiver acceptance and treatment; vector transfer ledger |
| cp_energy | lime_line | gas; electricity; diesel; export_heat | Energy and thermal state | stage/mode; true energy/rate/interval; gas volume state; fuel composition and calorific basis; electricity native unit; solid/gas/liquid flow/temperature/pressure/phase; specific heat/enthalpy method; reaction duty; stored energy; actual internal/external recovered heat; losses; supplier return and water/energy convention; actual gross thermal-carrier ingress and Product return V; matched kg/state/T/P/enthalpy reference; independent heat MJ; same-provider owner; no extra purchase/credit | Read calibrated fuel/electricity/heat meters and paired physical-state records. Integrate only true rates; retain carrier mass separately from heat. Reconcile real heat recovery and thermodynamic reference; add any actual external steam/hot-water and return interfaces individually before completion, with no default boiler. For each actual external thermal interface added before completion, retain full gross carrier supply/return kg independently of heatMJ and attributable provider-service vector; normalize physicalV once, with one provider and no assumed return credit or second purchase. | MJ; m3; kg; original rate unit | continuous/interval and all operating modes | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | meter/thermal calibration; independent calorific/state data; heat balance |
| cp_allocation | lime_line | all inventory rows | Dedicated causality and residual values | attributional scenario; real outputs/functions; dedicated meters; real/virtual subdivision; exchange-specific determining causality; remaining common vector; common gate and actual state; period market prices/quantities; downstream cost adjustments; sensitivity; each physical/burden owner and transfer | Document each hierarchy decision and actual limiting relation from primary process/transaction records. Only unresolved common burdens use the same-gate/state contemporary values. Physical mass remains full; retain pre/post allocation and inherited vectors, service cohort and residual stock. No source brochure determines a universal allocation share. | native exchange unit; currency; share | each actual multifunctional case and study period | Full declared production interval and cohort-specific subsequent observed service horizon; all modes included | One actual site and named stage/cohort; older cohorts separately retained | per 1 kg reference flow | dedicated measurement; quantitative causality; transaction/price evidence; alternatives and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| first_release_q | finished | Q = sum of calibrated net kg at unique first acceptance events for the selected cohort; reinspection and shipment events contribute no new production. Q = 0 retains all real loads and unresolved attribution, with no unit result. | cp_reference | Q | epa-lime-1998 |
| raw_conversion | all inventory rows | For each source interval convert original mass/volume/energy units before attribution. Integrate a true rate over its actual interval, or multiply matched concentration by an already integrated volume without multiplying time again. Reconcile T/P, dry/wet, oxygen-correction and chemical/molar bases first; retain originals, conversions and uncertainties. | cp_inputs; cp_air; cp_water; cp_energy | Unnormalized compatible source amounts | epa-lime-1998 |
| manufacturing_vector | all inventory rows | B_mfg = B_open_raw_WIP_unassigned_stores + B_current + B_inherited_attributable - B_close_raw_WIP_unassigned_stores - B_single_justified_other_function_transfer. Each B is a per-flow vector with source, stage, quantity basis and owner. Released FG vectors are never part of B_close; they are already in Q. Carry unassigned Q=0 failure burdens explicitly rather than deleting them or inventing physical WIP. Declare gross receipt/occurrence versus already-stock-adjusted net issue/consumption per exchange; only apply stock adjustments not yet included, never the same raw-stock correction twice. Independently preserve every disjoint raw/WIP/unassigned non-WIP physical quantity and each inherited exchange vector, including upstream history of consumed opening material. Ordinary waste/reject/failure or sale alone does not establish a transfer outside the cohort or burden credit; require a real distinct function/cohort and justified attribution once. This B_mfg burden-vector equation does not define any custody-only physical card numerator. For actual FG, packaging, asset/part receipts/removals/returns and any real external thermal-carrier supply or return, A_physical is the full measured specific gross leg V in its actual native unit/state, never B_open+U-B_close, an inherited-vector sum or an economic/service share. Keep physical quantities and each separately owned supply/operation/treatment/service vector in separate views; reconcile the latter by this rule only once. | cp_cohort; cp_inputs; cp_allocation | Manufacturing burden vector for selected Q | ilcd-attributional-2010 |
| service_vector | all inventory rows | For each original released cohort c retain Q_c, its manufacturing vector and observed horizon H_c. Attribute only actual incremental post-release storage/packing/handling/dispatch/rework service to c with dedicated or determining causal records. Current-production cohort uses Q_c = Q; older FG keeps its own Q_c and separate service result. Reuse, return or repeated dispatch never recreates manufacturing burden or released kg. Actual performed services on held closing FG retain their full actual incremental burdens over original Q_c/H_c; holding does not justify a deduction. Gross FG-return and package movement quantities are independent ledger-only physical legs, not inherited burden vectors, second stock corrections or economic shares. Keep original delivery-specific records distinct from changed wet return mass; never infer D_rev or replace Q by net delivery. Manufacturer/specification permission and postwork tests govern authorization and continued product qualification, not whether actual performed work exists. Retain every actual unauthorized, unapproved, failed or rejected work event and its material/water/energy, releases, waste, custody and attributable burden at original Q_c/H_c; record its real disposition without assuming restoration or another first release. Future unperformed work remains unknown, while only unused and unassigned store burden may carry forward. | cp_cohort; cp_allocation; cp_packaging | Separate cohort service increments | ilcd-attributional-2010 |
| normalize_once | all inventory rows | a_i = A_i / Q. A_i is the compatible unnormalized manufacturing exchange or attributable service increment of the same selected first-release cohort after raw_conversion and the documented allocation decision. For old cohorts perform the same operation once with their original Q_c in their own ledger. Physical outputs remain gross before allocation. Flow cards and protocol aggregation reference this calculation only and never divide again. For ledger-only gross FG/package movements, the numerator is the full measured specific leg after native-unit conversion, without burden-vector additions, stock correction or allocation scaling; normalize once by the actual owning Q or original Q_c and report separately from attributed supplier/operation burdens. A receipt included with another supply or a return/dispatch creates no additional provider purchase or credit. This gross-V exception also covers actual assets/parts and any real thermal-carrier ingress or condensate/hot-water Product return added under boundary_heat_water: convert the full measured carrier leg once and divide only by owning Q or original Q_c/H_c. Preserve carrier kg, phase/T/P/enthalpy reference independently of heat MJ. Neither carrier return nor separate mass/energy dimensions create a second provider purchase, automatic credit or a negative manufacturing/service burden. Internal circulation cancels only at matched internal interfaces. | Q; cp_reference; cp_inputs; cp_air; cp_water; cp_cohort; cp_packaging; cp_assets; cp_residues; cp_energy; cp_allocation | a_i per 1 kg reference flow | ilcd-attributional-2010 |
| physical_gates | all inventory rows | For each stage and the combined physical gate: opening actual wet stock + full external physical ingress = closing actual wet stock + full actual external egress, including gas species, water phases, products, packages, residues and assets. Pair identical internal transfers and cancel them only once. The manufacture-to-FG Q checkpoint cancels internally at the combined gate; combined stock/shipment mass must not add Q a second time. Element balances for Ca/Mg/C/O/H/N/S and every relevant measured element are independent of chemical phase evidence; do not force both unknown reaction water and CO2 from one residual. | cp_cohort; cp_inputs; cp_air; cp_water; cp_assets; cp_packaging; cp_residues | Unallocated stage and combined physical ledgers | epa-lime-1998 |
| reaction_water_carbon | all inventory rows | Use measured carbonate/oxide/hydroxide phases, feed/fuel carbon and actual gas species to check CaCO3 → CaO + CO2 and real Mg-carbonate conversions. CaO + H2O → Ca(OH)2 consumes water; Ca(OH)2 + CO2 → CaCO3 + H2O generates water. Pure carbonate decarbonation generates no water; combustion water requires actual fuel hydrogen and conversion. Distinguish free/adsorbed/liquid/vapour/structural water, actual hydroxyl equivalents and dissolved components. No default purity, conversion, fuel stoichiometry or future carbonation credit. | cp_reference; cp_cohort; cp_air; cp_water | Independent element and species reconciliation | epa-lime-1998 |
| packaging_stock | sack_new; sack_return_in; sack_dispatch; sack_return_out; film_new; film_return_in; film_dispatch; film_return_out; pallet_new; pallet_return_in; pallet_dispatch; pallet_return_out; waste_sack; waste_film; waste_pallet; sack_with_supply; film_with_supply; pallet_with_supply; pallet_repair_wood; pack_repair_water; pack_humidity_in; removed_pallet_wood; pack_repair_wastewater; pack_water_vapour | For each single packaging article/material separately: opening empty + opening attached WIP/FG + opening reusable + all paid receipts P + first non-purchase external receipts I = N_ext + true external returns ER = closing in the same complete states + all gross shipment-accompanying outward mass + empty external returns + waste. Categories partition stock, not overlapping totals. Internal reuse cancels; supplier-included ingress keeps physical mass and one upstream owner. No packaging mass enters Q, repeated purchase, automatic coproduct or mass scaled by economic share. For each material partition receipts into all paid P (including bundled-paid packaging), first non-purchase external receipts I = N_ext (including unpaid supplier-included, loaned, rented, gifted or transferred articles) and true received returns ER with the same-item prior outward record. N_ext is incoming, never outward or inferred from generic first supply; it may be new or used. Keep gross shipments S, external returns sent EO and waste W separately. Retain one upstream owner and actual service provider without a second included purchase or an assumed zero burden. Add actual measured repair Radd/Rremove and water H2Oin/H2Oout: opening disjoint pools+P+I+ER+Radd+H2Oin = closing pools+S+EO+W+Rremove+H2Oout. Deduplicate only the same water/material already carried by another same-side flow term of this bridge; never cancel real retained influx against closing wetstock, an opposite-direction term or another atomic-card representation. Whole wet P/I/ER/Radd contents count once. Independently measure drymaterial and free/absorbed water, with specific actual repair inputs/removed outlets and manufactureQ/originalQc/H ownership; no assumed repair or wet slaking. Ordinary storage/handling absorption and desorption/evaporation require no repair event; record actual moisture directions and states whether or not any repair occurs. Whole purchased sacks include supplier-integral liner/adhesive/seam/print only as composition subaccounts; separately supplied onsite components require their own actual receipt and one owner. Use a disjoint component basis or reconciled whole-article basis: empty assembled tare equals measured bought-article contribution plus actual added component/retained water minus real removal/loss, excluding product contents. Never add complete assembled tare and its same liner/thread/glue contribution again. In article mode pair component-to-article internal handoff IDs, replace their same-gate stock/shipment figures with the reconciled article and cancel matched internal transfers. If actual collection combines sources in one outlet, instantiate one qualified atomic Waste exchange for that real stream; independently measured per-pool W source values are raw memo withdrawals summing to that outlet, not extra LCA outlets. Use the total OR its disjoint partition, never both, and count treatment/provider once; genuinely separate outlets retain separate actual cards. | cp_packaging; cp_residues | Three separate complete package ledgers | ilcd-attributional-2010 |
| asset_service | kiln_asset; refractory; filter_bag; lubricant; spent_refractory; spent_filter; used_oil; retired_kiln | Preserve actual new/used spare and equipment receipts, installation/removal, wear, loose/in-service stocks, adhering matter and installed fluids on complete physical mass gates. Do not cancel a real ingress merely because its mass remains in closing stock. Separately derive attributable manufacturing/service burden from verified asset boundary, inherited vector and actual limiting use/service history across cohorts; retain unallocated remainder, actual maintenance and retirement. No fixed lifetime or one full asset per kg output. | cp_assets; cp_inputs; cp_residues; cp_allocation | Physical asset stock and separate service-burden ledger | ilcd-attributional-2010 |
| energy_balance | gas; electricity; diesel; export_heat | Reconcile actual fuel heat, electrical energy and opening stored enthalpy against carbonate reaction duty, drying, product/gas/water enthalpy, closing stored enthalpy, exported heat and measured/model-disclosed losses on one declared reference. Internal recovery cancels once. Do not add fuel oxidation energy twice as both LHV and extra reaction heat; preserve physical fuel/air/water mass independently. | cp_energy; cp_inputs; cp_air; cp_water | Declared energy and enthalpy reconciliation | epa-lime-1998 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Confirm real phase/form/CAS, whole-supply composition, native route/type/media/property/unit and provider restrictions. Unresolved auxiliary identities stay concrete atomic rows; they do not prove absence or authorize near-match UUIDs. | cp_reference; cp_inputs; cp_air; cp_residues |
| raw_complete | all inventory rows | Keep original units, instrument calibration, representative operating modes, period/cohort matching, all failure/idle loads, uncertainty and detection limits. Pending observations are never zero or a claimed completed dataset. | cp_reference; cp_cohort; cp_air; cp_energy |
| balances | all inventory rows | Independently reconcile full wet physical mass, relevant elements, actual chemical species/water phases, every packaging state, asset stock, service burden and heat. An unexplained residual remains a visible discrepancy rather than an invented balancing exchange. | cp_cohort; cp_packaging; cp_assets; cp_water |
| sources | all inventory rows | US historical EPA and undated industry brochure support general process/state distinctions only. No factor, temperature, density, purity, recipe or grade transfers into a site result. ILCD is the chosen attributional method source only; no full standards-compliance or scientific-approval claim. | epa-lime-1998; nla-lime-essential; ilcd-attributional-2010 |

## 9. Validation Rules

| rule_id | Rule | Sources |
| --- | --- | --- |
| validate_applicability | Confirm natural calcitic feed, actual natural-gas kiln and CaO-dominant industrial prehydration terminal product with actual acceptance specification. A leaf name or molecular-reagent UUID cannot establish the whole product; deliberate hydrate, hydraulic binder, dolime or another fuel route requires a separate scope decision. | epa-lime-1998; nla-lime-essential |
| validate_q | finished is the only reference product output: 1 kg net first released whole product. Bilingual gate/cohort/denominator agree. No finished-stock manufacturing deduction or second Q; older FG keeps original burdens and own Q_c. Q=0 produces no unit result. | ilcd-attributional-2010 |
| validate_atomic | Every actual exchange is atomic and current native/type/media identity compatible; unresolved rows, measured additional species and all conditional absence proofs remain explicit. Provider support, real quantities and characterization coverage are independent checks. | epa-lime-1998 |
| validate_normalization | Raw collection and conversion precede real allocation. Apply normalize_once once to each attributable exchange/vector of the selected Q; cards/aggregation do not repeat division. Physical gross mass is never scaled by burden shares. | ilcd-attributional-2010 |
| validate_complete | Require complete physical/species/element/water/energy/packaging/asset and stage/combined gates, inheritance and rework acceptance evidence. Unresolved real data contradictions make that package incomplete. Structural measurement success does not establish scientific review, translation review, accepted mapping or publication. | epa-lime-1998; ilcd-attributional-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply of the specified industrial calcitic prehydration quicklime after actual quantities, native/provider identities, burden inheritance and declared service horizon are complete |
| excluded_use | Whole-leaf37420 coverage; hydrated/hydraulic/dolomitic product claims; pure-CaO equivalence; unmeasured emission or recarbonation credit; unsupported comparative/compliance claims |
| required_metadata | All reference qualifiers; actual stage/stock/cohort and Q gate; FG horizon; supply backgrounds; native restrictions; every raw protocol and conversion; allocation and physical ledgers Separate gross physicalV and inherited/allocated burden views with original cohortQ_c/H_c; disjoint whole-article/component assembly and internal handoff reconciliation; actual collection-outlet identities with nonadditive per-pool source-W memo subaccounts; ordinary storage/handling humidity and all actual unauthorized/failed work retained. |
| required_quality_disclosure | Unresolved identities/provider and characterization coverage; pending quantities/speciation; inherited-vector and balance discrepancies; time/site relevance, uncertainty and independent review state |
| update_trigger | Changed feed origin, kiln/fuel, intentional hydration/hydraulic state, product grade, utility/provider/media, actual waste function, service horizon, asset history or new primary evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-lime-1998 | official_guidance | US EPA AP-42 §11.17 Lime Manufacturing; February1998; SupplementD update described in text. §§11.17.1–11.17.3; Figure11.17-1; Table11.17-5 and its source/footnote continuation. https://www.epa.gov/sites/default/files/2020-10/documents/c11s17.pdf | Natural limestone preparation and gas-kiln/cooling/size routes; hydration and dolomitic counterexamples; control/release sources; carbonate versus fuel CO2 and source-dependent factor limitations. No numeric factor or operating target adopted. |
| nla-lime-essential | literature | National Lime Association, Lime: The Essential Chemical; undated brochure; printed1/3/8, PDF2/4/9. https://www.lime.org/wp-content/uploads/lime-essential-chemical.pdf | Independent industry-original qualitative product/state and preparation/manufacture context, quicklime/hydrate/milk distinction, pebble/powder/bulk/bag supply and actual equipment investment. No composition, temperature, consumption, life or allocation default. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance; first edition March2010; §§7.9.2–7.9.3, printed255–268, PDF275–288; common-gate price counterexample printed265. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Declared attributional allocation scenario only: real/virtual subdivision, exchange-specific determining causality, residual common-gate actual-state market value, service/capital attribution and price-boundary limitations. Not industrial lime process evidence or a universal physical/economic option. |
