---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.silk-waste
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Silk brushing waste supply

## 1. Scope and Applicability

This PCR covers one segregated Bombyx mori cocoon-brushing fibre residue generated during end finding at a filature. The supplied intermediate is wet, sericin-bearing tangled silk fibre, before intentional degumming, bleaching, mechanical garnetting, carding or spinning. Its function is a declared receiving spinner’s feedstock, subject to documented lawful supply and receiver acceptance. A classification label alone does not establish product status or exemption from waste controls. This is attributional supply accounting; a waste-treatment service requires its own service function and reference, and cannot use this Product output unchanged.

The foreground begins with received dried and stifled intact mulberry cocoons and their inherited upstream burdens. It includes receipt and sorting, storage, pan cooking, end finding/brushing, associated reeling, separate residue collection and quality release. Pan cooking and motor-driven multi-end reeling with steam-heated baths define the bounded route. The handbook explicitly describes steam-heating pipes on multi-end machines. Contracted industrial-boiler steam supply is a transparent foreground/upstream integration choice, not a claim about one contemporary factory, SKU or steam consumption. Confirm the actual delivery interface and pressure/temperature; supplier boiler and water treatment burdens belong upstream once. No chemical treatment is assumed. Finished-goods storage, packing, handling and gate dispatch remain in the cohort service account after first release.

The sole production denominator Q is newly first-released net wet brushing fibre mass after the declared free-liquid drainage condition. Packaging, separate liquid, pupae and foreign matter are excluded. Retain measured dry solids and moisture alongside Q; adding water cannot manufacture qualifying output. Material already accepted into closing finished stock is included in Q once. Later shipment, reinspection, return or rework of that accepted material never creates Q again.

Exclude cocoons as the reference product, raw continuous silk, pupae as silk waste, reeling basin scraps mixed with brushing waste, friese pooled with floss, spun-silk noil, processed floss wadding, spun yarn, cloth, used clothing, garnetted wool/cotton and chemically regenerated fibres. The UN note lists 39211 without a detailed explanatory inclusion; the narrower physical boundary follows the handbook and this PCR’s declared function. FAO chapter 8’s alkali-treated opened floss and Figure 17’s downstream spinning chain are counterexamples, not part of this wet residual supply. This PCR does not claim all of CPC 39211.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.silk-waste` |
| classification_refs | CPC 3.0 39211 Silk waste; narrower method scope; no accepted mapping is established here |
| covered_products | One segregated wet mulberry-cocoon brushing fibre residue before degumming or garnetting |
| excluded_products | Raw silk; pupae; end-missing cocoons; friese; basin scrap mixtures; spun-silk noil; processed floss wadding; yarn; regenerated fibres |
| representative_product | Wet sericin-bearing brushing fibre released for a named spun-silk feed application |
| production_route | Dried stifled cocoons received; sorting and storage; steam-heated pan cooking; end finding and multi-end reeling; segregated brushing residue collection; first release; cohort storage and dispatch |
| market_state | Wet unspun non-garnetted fibre at filature gate; actual drainage condition and measured moisture declared; no universal commercial regain |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply wet brushing silk fibre to a declared spun-silk preparation receiver |
| How much | 1 kg net wet fibre at first quality release |
| How well | Declared origin stage and silkworm species; receiver specifications for contamination and measured moisture; no intentional degumming or garnetting |
| How long or cycle | One traceable first-release cohort; later gate services retain that cohort |
| reference_flow_link | finished_brushing_fibre |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Bombyx mori origin; brushing/end-finding formation stage; dried stifled cocoon supply state; separate collection from friese and basin scrap; wet tangled fibre form; sericin condition; absence of degumming and garnetting; free-liquid drainage procedure; gross mass and tare method; measured moisture and dry solids method; receiver acceptance and intended feed use; legal product or waste status; first-release lot and Q register; geography and reporting period; steam supply and reeling configuration; origin allocation and upstream inclusion; post-release services and returns; packaging material and supply form |

Every qualifier is mandatory in the dataset’s original metadata or reference-flow context. The Product identity is generic factory production mix with unspecified treatment; it supplies no species, grade, wetness, drainage or legal acceptance. It is usable only with the narrower declared physical context. It is neither the CN on-site-collected Waste identity nor an assurance of receiver compatibility.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is newly first-released net wet brushing fibre under cp_release. Record gross scale mass minus actual tare and independently measured moisture/dry solids. Maintain lot-based water condition; no fixed regain or water addition to inflate Q. |
| raw_before_unit | all inventory rows | Original physical property | original unit | Collect unnormalized raw records. Convert each raw numerator to its row unit and attribute it before the single division in section 8. Integrated meter volumes are already totals; integrate only actual rates over time. Density must be measured for the actual substance and state; do not copy water density or derive density from a secondary flow factor. |
| electric_energy | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve kWh meter readings and use 1 kWh = 3.6 MJ once. The electricity identity is CN grid-average supply to users below 1 kV, measured in energy; its native property name does not mean fuel combustion. Other geography or voltage needs another compatible identity/provider. |
| separate_species | physical balances | Mass | kg | Reconcile wet mass, dry solids, water and relevant measured elements independently at production, finished-stock and combined gates. Retained sericin is not assumed to be pure fibroin. Do not infer dissolved sericin, evaporated water and fibre losses from the same residual. COD/TOC/TN are measured indicators; they are not mass of a named chemical. No reaction or structural-water term is asserted for this physical route. |
| pack_exclusion | each packaging article | Mass | kg | Packaging never enters Q. Item counts need a directly weighed article mass and configuration if converted to kg; no default mass per item. Keep attached packaging of opening/closing WIP and finished goods in each material ledger. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dried stifled intact mulberry cocoons received at filature; upstream rearing and drying retained once |
| starting_condition_role | Upstream product input requiring origin attribution through joint reeling |
| product_classification_scope | Narrow wet brushing fibre supply within silk waste; not other textile waste categories |
| recursive_input_rule | Purchased same-category brushing fibre is a separate lot with inherited upstream vector; it never becomes newly generated Q by relabelling or repacking |
| upstream_dataset_requirement | Require compatible cocoon rearing and stifling/drying datasets; add inbound transport and missing supplier operations once. A farm-gate fresh-cocoon identity cannot label received dried cocoons. No burden-free waste assumption. |
| disclosure | Supply state; supplier geography; route; shared-process allocation; physical and burden ledgers; WIP/FG vectors; receiver/legal evidence; services and deviations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_complete_origin | production chain | Include received cocoon preparation, storage, pan cooking, end finding and joint reeling through segregated brushing-fibre first release. Inherit upstream completed work once; do not reduce the system to purchased finished waste plus packaging. | `fao-silk-1999` |
| sb_actual_routes | utilities and deviations | The bounded route uses externally supplied industrial-boiler steam and motor electricity. Do not duplicate supplier boiler fuel, feed water or emissions as foreground exchanges. Actual on-site generation, electric resistance heating, alkali, bleach or forced fibre drying requires a separately declared route retaining every real atomic input/output and emission; nothing is zeroed or hidden. Preserve actual steam water/enthalpy delivery terms and every real external condensate Product return. | `fao-silk-1999` |
| sb_whole_period | collection scope | Retain failed lots, Q=0 periods, start/stop, idle, cleaning, spills, rejects and rework. Add each real unlisted atomic exchange separately; evidence of absence is required for not_applicable. Actual extra treatment is a deviation requiring review, never an erased burden. | `fao-silk-1999`; `ilcd-2010` |
| sb_stock_services | after first release | Maintain storage, packaging, handling and shipment by original cohort Qc. Record gross physical shipment H separately. In a combined account cancel internal production-to-stock transfers; closing newly released FG is already in Q and cannot be added as another output. Imported opening FG retains its historical vector and receives only actual incremental services/rework. | `ilcd-2010` |
| sb_status_gate | supply function | Document actual legal classification, transfer controls, receiver consent, specifications and acceptance. Sale price does not alone settle legal status. If the real function is waste treatment, do not present its treated mass as this Product supply result. | `ilcd-2010` |

## 6. Process Inventory Structure

Maintain two linked ledgers. V records complete gross physical crossings and internal transfers before environmental allocation. A records the attributable environmental vector for the selected cohort after upstream inheritance, subdivision, allocation and stock reconciliation. A does not replace V for mass balance. Cards below state the normalized exchange/reporting role; the raw V and A columns remain available independently. Cofunction quantities in V are informational physical accounts, not extra providers, reference outputs or negative credits. No card supplies a default amount.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| joint_reeling | Cocoon receipt, cooking, end finding and reeling | required | Declared bounded route | Foreground; gross and attributed accounts distinct | per 1 kg reference flow |
| residue_release | Separate brushing-fibre collection and first release | required | Declared bounded route | Foreground; gross and attributed accounts distinct | per 1 kg reference flow |
| cohort_services | Original-cohort storage, packing and gate dispatch | required | Declared bounded route | Foreground; gross and attributed accounts distinct | per 1 kg reference flow |

### Process: Cocoon receipt, cooking, end finding and reeling (`joint_reeling`)

#### Inputs

##### Product flows

###### Received dried stifled cocoons (`dried_cocoons`)

One whole supplied cocoon lot including shell and pupa. Record moisture, supplier stifling/drying and actual inbound transport; inherit the complete upstream vector once. The available fresh unprocessed farm-gate cocoon Flow is incompatible with this dried supply form and is not used.

- Selected flow: Dried stifled mulberry silkworm cocoons

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Cooking and reeling make-up water (`cooking_water`)

One supplied low-calcium/low-magnesium water stream at plant, only if the actual assay matches. Native identity supplies no treatment energy, hardness threshold or silk-quality guarantee. Record the whole water supply once; internal recirculation is not another purchase. Supplier treatment is upstream; on-site treatment instead needs its real feed water and each reagent, energy and reject stream.

- Selected flow: Soft water `65ca3c50-2294-4615-bb75-a88596dda64e`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_water`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Reeling motors and associated electricity (`reeling_electricity`)

Use only CN grid-average customer supply below 1 kV. Native Product identity and energy reference do not authorize another voltage, direct generator supply or geography. Retain individual motor/lighting meter records and their operation/idle periods; reconcile shared meters and assign attributable energy without also purchasing an internal utility output.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_energy`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Industrial boiler steam received (`industrial_steam`)

One actual external steam mass crossing at the declared industrial-boiler supply interface, with measured pressure, temperature, dryness and enthalpy. This is the single supplied article; thermal MJ is its linked subaccount, not a second purchased heat flow. A heat-energy identity cannot label this steam-mass purchase. The upstream provider must cover the contracted steam water, boiler fuel, treatment, energy and emissions once; disclose its condensate-return convention and whether reported heat is gross or already net. Do not assume an on-site boiler, direct steam injection, condensate recovery or a water-free energy service.

- Selected flow: Industrial boiler steam

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_steam`

- Sources: `fao-silk-1999`; `ilcd-2010`

#### Outputs

##### Product flows

###### Separate continuous raw-silk cofunction (`reeled_silk`)

Record actual unthrown filament output and moisture at the shared process gate in V. Do not map the residue to this output. Only a continuous unthrown-filament identity is compatible; a woven-fabric interpretation is excluded. Its cofunction is included in allocation once without a substitution credit.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Unthrown continuous mulberry raw silk

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Separate whole pupae (`whole_pupae`)

Only the actually accepted product share is a Product cofunction; waste shares require separate Waste rows. Do not use ground/sieved pupa-meal identities for whole wet pupae. Retain mass, water condition, buyer acceptance and actual gate value.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Whole silkworm pupae

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Segregated brushing-fibre transfer (`brushing_transfer`)

Internal wet sericin-bearing Bombyx mori brushing residue only, not raw silk, pupae, friese or basin scraps. Generic factory Product identity with unspecified treatment requires this complete form/route context. V records the gross transfer with its full inherited vector. This is not the reference row; cancel the matching residue-release input in the combined account.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Actual external steam-condensate return (`condensate_external_return`)

Only condensate actually crossing back to the external supplier under the documented water/energy agreement. Measure returned mass, pressure, temperature and enthalpy independently. This Product return is not bath wastewater or an automatic coproduct/negative energy provider. If the supplier heat datum is already net of returned condensate, never subtract its enthalpy again. Internal recirculation is not this external return; absence requires actual interface evidence.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Returned steam condensate water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_steam`

- Sources: `fao-silk-1999`; `ilcd-2010`

##### Waste flows

###### End-missing cocoon reject (`end_missing_cocoons`)

Keep this cocoon-shell/pupa stream apart from brushing fibre. Record actual destination and the functional status; a separately sold accepted cocoon cofunction needs its own Product account rather than sharing this waste route.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: End-missing mulberry cocoons

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Spent cooking and reeling bath (`reeling_wastewater`)

One actual aqueous waste stream delivered to a named external treatment receiver. Measure total water, suspended solids and dissolved load; source partitions are nonadditive subaccounts of this same stream, not extra providers. Do not also report untreated discharged water as an elementary emission. On-site treatment requires explicit reagent, energy, sludge and actual species outputs instead.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk cooking and reeling wastewater

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Actual discharged steam condensate (`condensate_waste`)

Only actual condensate sent as a separate aqueous waste to the declared treatment receiver instead of returned to the supplier; retain thermal state and water quality. Do not copy the same mass into external return and wastewater. If mixed with bath effluent, keep a measured mixing node, one mixed outlet total and nonadditive source partitions. Internal condensate, actual vented vapour and direct-injection water each retain their real physical destination and are never assumed equal.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Discharged steam condensate water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_steam`

- Sources: `fao-silk-1999`; `ilcd-2010`

##### Elementary flows

###### Actual water vapour to air (`bath_vapour`)

CAS 7732-18-5, emissions to air unspecified, Mass reference. Use only actual water vapour released to that medium, not liquid effluent, steam purchase, evapotranspiration or isotopic species mentioned among broad legacy synonyms. Determine moisture transfer independently from drainage and dissolved solids; do not use a mass-balance residual to solve two unknowns. If condensation remains internal it is not an external emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_water`

- Sources: `fao-silk-1999`; `ilcd-2010`

### Process: Separate brushing-fibre collection and first release (`residue_release`)

#### Inputs

##### Product flows

###### Collection and inspection electricity (`collection_electricity`)

Use only CN grid-average customer supply below 1 kV. Native Product identity and energy reference do not authorize another voltage, direct generator supply or geography. Retain individual motor/lighting meter records and their operation/idle periods; reconcile shared meters and assign attributable energy without also purchasing an internal utility output.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_energy`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Internal brushing-fibre receipt (`brushing_received`)

Same segregated wet sericin-bearing Bombyx mori brushing residue, before degumming, garnetting or spinning. Preserve original formation stage, moisture and complete inherited vector; this internal receipt is not a fresh upstream purchase. Match brushing_transfer by lot and cancel both internally.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

#### Outputs

##### Product flows

###### Newly first-released brushing fibre (`finished_brushing_fibre`)

Only newly first-released wet sericin-bearing Bombyx mori brushing residue from the declared collection stage qualifies. Generic Product identity means factory production mix and unspecified treatment; it establishes no grade, water condition, drainage performance, receiver or legal status. No degumming, garnetting, spinning, co-mingling, dilution or complete raw-silk substitution. Measure gross minus tare under the declared free-liquid drainage and moisture protocol. Closing FG already included in Q is not added again. Retain all section 3 qualifiers in native product and process context.

- Selected flow: Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: 1 kg

- Value mode: `fixed_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `method_formula`

- Collection protocol: `cp_release`

- Sources: `fao-silk-1999`; `ilcd-2010`

##### Waste flows

###### Rejected brushing fibre (`rejected_brushing_fibre`)

One segregated failed brushing-fibre stream, with its actual disposal/recovery receiver and inherited burden. Never hide failed lots in yield or assign the accepted Product UUID to a Waste output. Recovered material may enter first-release Q only if never accepted before and its real extra work is retained. Native Waste flow is CN factory generation and on-site collection with unspecified downstream treatment, which it excludes. Use only this segregated wet silk-fibre reject generated/collected on site in China. It does not identify treatment, remove moisture qualifiers or authorize the Product reference function; attach the actual external route separately.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Collected free drainage liquid (`drain_liquid`)

If free liquid is drained before the weighing gate, measure this actual separate liquid and its suspended/dissolved load independently; do not infer it together with vapour from one wet-mass residual. Combine with bath wastewater only through a measured mixing node retaining source partitions and one outlet total. No forced drying or washing is assumed.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk brushing-fibre drainage wastewater

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_water`

- Sources: `fao-silk-1999`; `ilcd-2010`

##### Elementary flows

###### Actual water vapour to air (`collection_vapour`)

CAS 7732-18-5, emissions to air unspecified, Mass reference. Use only actual water vapour released to that medium, not liquid effluent, steam purchase, evapotranspiration or isotopic species mentioned among broad legacy synonyms. Determine moisture transfer independently from drainage and dissolved solids; do not use a mass-balance residual to solve two unknowns. If condensation remains internal it is not an external emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_water`

- Sources: `fao-silk-1999`; `ilcd-2010`

### Process: Original-cohort storage, packing and gate dispatch (`cohort_services`)

#### Inputs

##### Product flows

###### Storage and handling electricity (`service_electricity`)

Use only CN grid-average customer supply below 1 kV. Native Product identity and energy reference do not authorize another voltage, direct generator supply or geography. Retain individual motor/lighting meter records and their operation/idle periods; reconcile shared meters and assign attributable energy without also purchasing an internal utility output.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_energy`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Purchased polyethylene bag (`pe_bag_purchase`)

Only one actually used PE bag article; native CAS 9002-88-4 and generic factory packing/storage identity. No woven PP, composite liner or fixed capacity is implied. Record purchases P once, opening empty/attached/reusable stock and internal reuse I separately; do not repurchase internally reused bags.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_packaging`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Externally returned polyethylene bag received (`pe_bag_external_received`)

Same qualified PE article; ER is an external physical receipt, not purchase P and not internal reuse I. Carry its retained upstream/reuse vector according to the documented ownership model; add only actual washing or repair burdens, each atomic.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_packaging`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Released fibre received into cohort services (`released_fibre_service_in`)

Internal receipt of the already first-released wet sericin-bearing Bombyx mori brushing fibre. Generic factory Product identity with unspecified treatment remains bound to original stage, moisture, receiver and legal context. Carry original Qc and full inherited vector. Receipt into FG is not new Q or another purchased provider; cancel the internal release-to-stock transfer in the combined gate.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### External return of previously accepted fibre (`accepted_fibre_external_return`)

Only the same segregated wet sericin-bearing brushing fibre with known original acceptance, shipment and inherited vector. Generic Silk waste Product identity supplies no return quality or ownership guarantee. Record actual returned mass and moisture plus original Qc; reverse an erroneous prior delivery only with its original record, and append real incremental work without another first release. Unknown or changed material is segregated pending review.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

#### Outputs

##### Product flows

###### Polyethylene bag accompanying gross shipment (`pe_bag_shipped`)

Same qualified PE article; S follows all gross physical dispatch H including historical finished goods, samples and repeated shipment. It is a packaging companion account, not extra silk production or an automatic coproduct credit. Measure packaging separately from fibre; retain origin cohort.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_packaging`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Polyethylene bag returned externally (`pe_bag_external_out`)

Same qualified PE article leaving to its actual owner, recorded as EO apart from S. Returnable ownership and actual repair/cleaning are disclosed; no automatic avoided-production credit. Internal I cancels within the site and is neither EO nor ER.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_packaging`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Gross physical brushing-fibre gate dispatch (`gross_fibre_dispatch`)

One physical dispatch of the same wet sericin-bearing Bombyx mori brushing fibre before degumming, garnetting or spinning. Generic factory Product identity requires original stage, moisture, drainage and receiver/legal context on every shipment. H includes opening FG, new FG, samples and repeated deliveries; retain source partitions without adding them to total H again. H is not Q, and this card is not an additional reference output or a credit.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

##### Waste flows

###### Discarded polyethylene bag (`pe_bag_discard`)

The one PE article discarded as W to its actual waste receiver. A Product packaging identity does not authorize a Waste binding; keep this waste UUID unresolved. Record PE mass and contamination on separate analytical fields; do not merge fibre waste or other polymers into this article.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Discarded polyethylene bag

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_packaging`

- Sources: `fao-silk-1999`; `ilcd-2010`

###### Post-release storage fibre loss (`storage_fibre_loss`)

Actual loss of previously released brushing fibre remains tied to original Qc and its inherited vector, with destination and moisture. A repeated quality test or recovered return does not create new production. Keep the historical product loss separate from never-released rejects. Native Waste flow is CN factory generation and on-site collection with unspecified downstream treatment, which it excludes. Use only this segregated wet silk-fibre reject generated/collected on site in China. It does not identify treatment, remove moisture qualifiers or authorize the Product reference function; attach the actual external route separately.

This is a gross physical/transfer companion card: retain V independently, and carry only the appropriate attributable vector in A. Do not book the gross amount as a second upstream provider or credit.

- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_ledger`

- Sources: `fao-silk-1999`; `ilcd-2010`

##### Elementary flows

###### Actual water vapour to air (`storage_vapour`)

CAS 7732-18-5, emissions to air unspecified, Mass reference. Use only actual water vapour released to that medium, not liquid effluent, steam purchase, evapotranspiration or isotopic species mentioned among broad legacy synonyms. Determine moisture transfer independently from drainage and dissolved solids; do not use a mass-balance residual to solve two unknowns. If condensation remains internal it is not an external emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the one section 8 quotient on the declared reference basis; raw totals and attribution remain separate.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_water`

- Sources: `fao-silk-1999`; `ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_framework | attributional functions | Identify every actual cofunction and its actual legal/receiver status at a common process gate. Brushing fibre is one segregated supply function. Raw silk, whole pupae and other separately accepted products are distinct; material sent for treatment is not automatically a valuable cofunction. No consequential substitution or avoided-production credit is allowed. | `ilcd-2010` |
| al_exclusive | each exchange j | First use dedicated process measurement, actual subdivision and justified virtual subdivision to assign exclusive work and embodied inputs. Separate brushing collection and its exclusive inspection from unrelated raw-silk finishing. Retain the common formation process; being a residual does not make that process burden-free. | `ilcd-2010` |
| al_causality | remaining joint exchanges | Test exchange-specific determining physical causality using measured function, technology and counterfactual changes. Different exchanges may have different drivers. Cocoon dry matter embodied in fibre, dissolved material and pupa must be independently traced; wet output mass alone is not a universal allocation key. Document losses and unvalued outputs rather than assigning all embodied material to saleable fibre. | `ilcd-2010` |
| al_residual_value | genuinely unassigned residual exchanges | Only after preceding steps remain insufficient, allocate the residual common-process vector by contemporaneous market values of actual cofunctions in their physical state at that same gate. Reconstruct gate values from later sales only by removing documented downstream conditioning, packaging, storage and transport. Keep prices, amounts, currency, dates, uncertainty and sensitivity. Do not use spun-yarn prices for wet brushing fibre or fix a universal percentage. Missing defensible values leave that residual unresolved. | `ilcd-2010` |
| al_vectors | stocks and services | Preserve each exchange-specific inherited vector by physical lot at opening/closing raw stock, WIP and FG. Withdraw unused non-WIP and closing WIP burdens only from numerators that actually included them; an already net consumption must not be reduced again. Service shares attach to original Qc, never H. Reworked previously released stock carries its original vector plus real incremental work and loss; no second product purchase or new Q. | `ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect raw unnormalized totals only. Shared protocol process_id identifies the ledger owner; raw records retain the actual process and lot for each measurement across all three processes. In their aggregation_rule cells the reference phrase declares the target reporting basis, not a command to divide raw collection. All conversions, inventory reconciliation and attribution precede the sole unit-result calculation. No plant quantities, yields, moisture defaults, allocation shares or emissions factors are supplied by this PCR.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | residue_release | first-release quantity | weighing and acceptance register | lot; origin stage; species; gross mass; tare; drainage method; drainage duration; measured moisture; dry solids; receiver criteria; first acceptance time; previous acceptance flag; Q; closing FG cohort | Calibrated wet-fibre weighing and separate moisture sampling under the declared receiver-compatible drainage condition; verify acceptance uniqueness and prevent water addition; retain failed and zero-output runs. | kg | Every lot and stock close | Complete cohort including failed work | Filature and named receiver specification | per 1 kg reference flow | Scale calibration; sampling records; original acceptance and drainage logs |
| cp_ledger | joint_reeling | atomic gross and attributable exchanges | physical and inherited-vector ledger | process id; row id; lot; original quantity; original unit; flow state; supplier; destination; opening raw/WIP/FG; receipts; gross crossings V; closing raw/WIP/FG; unused non-WIP; transfer IDs; inherited vector by j; allocation evidence; A by j; failed runs; Qc; H; return history | Weigh or meter each named exchange and match receiving/dispatch documents; retain every raw cell and separate vector; reconcile physical gates before attribution. Record raw transaction and its already-net flag. | row native unit | Each crossing plus monthly close | Entire reporting period and inherited lots | All three foreground processes and upstream suppliers | per 1 kg reference flow | Matched tickets; supplier scope; receiver receipt; vector conservation |
| cp_energy | joint_reeling | electricity by operation and cohort | meter readings | process id; lot; meter id; opening reading; closing reading; kWh; real power rate if used; time interval; heater/motor; voltage; country; idle/cleanup/startstop; calibration; cohort service driver | Read cumulative energy meters; integrate only actual power rates; separate common and dedicated loads before allocation. Keep zero-Q periods and service timing. | kWh | Shift and meter interval | Production and after-release service duration | Declared steam-heated site configuration | per 1 kg reference flow | Meter calibration and matched utility bill |
| cp_water | joint_reeling | water and species balances | mass and analytical records | process id; lot; supplied water; bath stocks; recirculation; drainage; condensate; independently measured vapour; output moisture; liquid total; suspended solids; dissolved solids; COD/TOC/TN; assay methods; temperature; integrated volume or rate; measured density; receiving medium | Meter and sample independently; preserve phase and state; quantify water and solids without solving several unknowns from one residual. Treat elemental or organic indicators separately from actual species. | kg; original analytical unit | Every lot and discharge interval | Complete baths and cohort moisture history | Filature water circuits and external treatment receiver | per 1 kg reference flow | Independent water/solids tests; meter and analytical uncertainty |
| cp_packaging | cohort_services | one ledger per packaging material | article and ownership stock register | article composition; measured article mass; opening empty; opening attached WIP; opening attached FG; opening reusable; P purchases; I internal reuse; ER external returns received; S gross shipment packaging; EO external returns out; W waste; closing empty; closing attached WIP; closing attached FG; closing reusable; Qc; H; N first non-purchased receipts; bundled-payment flag; acquisition burden owner; prior outward article and movement ID for ER | Count and weigh the actual homogeneous article configuration; match external returns and gross dispatch, including historical goods. Collect raw P/N/I/ER/S/EO/W independently; preserve ownership and inherited vector. P includes separately paid and bundled paid receipts; N is a first non-purchased external receipt, not a return or evidence of zero burden. Match ER to the same article's documented prior outward movement; record each crossing once. If N occurs, add its own atomic receipt card for the actual article. Count each acquisition provider once, including any burden already embedded in a supplied or historical vector. Add separate cards for any actual other material. | kg | Every movement and stock close | Full packaging lifetime window within reporting scope | Filature and external owners | per 1 kg reference flow | Purchase/return tickets; weighed configuration; full stock balance |
| cp_steam | joint_reeling | steam supply and condensate interface | mass and enthalpy meter register | process id; lot; steam mass; steam pressure; temperature; dryness; measured or documented enthalpy basis; heating configuration; direct/indirect contact; actual condensate return mass; return temperature/pressure/enthalpy; actual condensate discharge; actual vent mass; internal loop stock; provider water/energy inclusion; gross/net heat flag; meter uncertainty | Meter each actual external mass and thermal state independently; keep heating-water and steam circuits distinct. Reconcile supply invoice scope and return contract; do not fabricate recovery or boiler inputs. Thermal subaccounts describe the same supplied mass, not another purchase. | kg; original thermal-state units | Every supply/return interval | Complete period including idle, startstop and Q0 | Actual filature–external steam supplier interface | per 1 kg reference flow | Calibrated mass/thermal meters; enthalpy derivation; supplier boundary and return agreement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_unit_conversion | all inventory rows | Preserve original records; convert numerator units once with traceable factors before allocation. For electricity use MJ = 3.6 * kWh. For an actual rate integrate over its actual interval; cumulative readings are differences only. A substance-specific measured density converts its volume to mass when justified. | original quantities; original units; measured conversion factors; cp_energy; cp_water | converted raw row totals | `ilcd-2010` |
| gross_balance | all inventory rows | For each physical material and gate: opening stock + external receipts + internal receipts = closing stock + external outflows + internal transfers + independently measured transformation terms. Separate wet mass, dry solids, water and relevant measured elements. Cancel internal transfers only in the combined gate; use V before allocation. | V; cp_ledger; cp_water | reconciled physical V ledger | `ilcd-2010` |
| first_release_quantity | finished_brushing_fibre | Q = sum newly first-released net wet brushing fibre under cp_release. That register already includes newly accepted closing FG once. Exclude prior accepted returns, reinspection, separate water, packaging and gross shipment H. If Q = 0 preserve actual loads and issue no unit result. | cp_release; unique first acceptance records | Q | `fao-silk-1999`; `ilcd-2010` |
| attributed_vector | all inventory rows | For each exchange j and lot construct A_j from exclusively assigned and legitimately allocated converted raw loads plus inherited opening WIP vectors and actual cohort services. Remove closing WIP and unused non-WIP vectors only if included in that numerator. Already-net raw consumption is not reduced again. Sum within the selected Q cohort; historical FG retains original production vectors and only receives real incremental services. F is genuinely new foreground work; an overlap subtraction X is allowed only for an exact documented same-side duplicate already within OTHER, never for a different flow or physical export. | converted raw row totals; cp_ledger; allocation evidence; cohort service records | A_j; separate physical companion total V_j | `ilcd-2010` |
| unit_result | all inventory rows | For Q > 0 the sole unit calculation is x_j = A_j / Q. A gross physical companion report uses v_j = V_j / Q separately and is labelled physical only. For services on an earlier cohort use its original Qc in place of Q, never H; append its attributed service component to that cohort result without dividing that component again. The reference output itself is exactly 1 kg. Cards and collection reporting reference this same quotient and perform no second normalization. | A_j; V_j; Q; Qc; cp_release; cp_ledger | x_j; v_j | `ilcd-2010` |
| steam_interface | industrial_steam; condensate_external_return; condensate_waste | Preserve independently measured steam and condensate masses and their real thermodynamic states. On a consistent enthalpy datum, supplied thermal energy is incoming steam enthalpy minus actually exported return/discharge enthalpy and any other measured thermal outflow, with internal stock change explicit. The provider agreement determines whether the purchased heat datum is gross or already net; do not deduct condensate heat twice. This heat subaccount is not a second provider, a density conversion or a new Q denominator. | cp_steam; measured mass and state; enthalpy datum; supplier heat agreement | one steam mass/thermal interface subaccount | `fao-silk-1999`; `ilcd-2010` |
| packaging_balance | pe_bag_purchase; pe_bag_external_received; pe_bag_shipped; pe_bag_external_out; pe_bag_discard | For this one article: opening empty + opening attached WIP + opening attached FG + opening reusable + P + N + ER = closing empty + closing attached WIP + closing attached FG + closing reusable + S + EO + W. N is first non-purchased receipt; ER requires that same article's documented prior outward movement. P, N and ER are mutually exclusive receipt classes; S and EO never duplicate the same outward crossing. I is internal reuse and cancels. S follows all gross dispatch H, including historical goods and repeat shipment. P is one purchase; ER is not P. Neither I nor packaging is Q or an automatic coproduct. | cp_packaging; P; I; ER; S; EO; W; H; N | balanced PE article ledger | `ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each flow | Preserve original source form, actual state, supplier route, all native restrictions and complete qualifiers; an available UUID supplies no missing measurement or legal evidence. | Supplier and receiver specification; direct identity context |
| dq_complete | all rows and periods | Full raw records including failed/Q0, idle, startup, cleanup, rework, opening/closing raw/WIP/FG and exact inherited vectors; no silent zero for missing data. | cp_ledger reconciled to all physical gates |
| dq_allocation | joint work | Subdivide exclusive work first; each remaining causal driver needs evidence; only residual same-state common-gate value may be used. Preserve uncertainty and sensitivity, including unavailable values. | Original meter/process records and dated market documents |
| dq_measurement | wet fibre and effluent | Independent moisture, solids, water and actual species tests with sampling state and uncertainty. Do not apply historical floss-yield, alkali concentration or spun-yarn examples to this untreated brushing residue. | cp_release and cp_water original laboratory reports |
| dq_applicability | source synthesis | Technical operations are synthesized from a historical manual and general attributional guidance; no same-factory numerical baseline or universal receiver limit is claimed. Replace site-specific quantities with actual records and disclose source age and scope. | Source-specific applicability statement and site records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_reference | supply dataset | Require exactly one finished_brushing_fibre Product reference output with the declared UUID, Mass/kg and 1 kg, plus every required qualifier. Reject Waste-for-Product substitution, mixed fibre collections, processed floss and duplicate first acceptance. | `un-cpc3-39211`; `fao-silk-1999` |
| val_formation | process completeness | Verify complete cocoon-to-residue operations and upstream supplier states, every actual atomic input/output and route deviation. Purchased dried cocoons cannot use a native fresh farm-gate Flow; ground pupa meal and woven fabric cannot stand for whole pupae or fibre residue. | `fao-silk-1999` |
| val_balance | V and A ledgers | Check production, FG and combined physical gates separately; internal transfers cancel only at the combined gate. Check every inherited exchange vector and the separate single A/Q quotient. Q0 has retained loads and no unit result. Never use gross H or add closing FG twice. | `ilcd-2010` |
| val_packaging | each actual article | Verify complete P/N/I/ER/S/EO/W balance with all empty, attached and reusable stocks. Gross shipment packaging includes historical goods. No internal-reuse repurchase, silk-Q inclusion, duplicate external return or automatic credit. | `ilcd-2010` |
| val_evidence | release and review | Future site measurement and ordinary auxiliary/provider gaps are explicit data requirements, not invented values. Unresolved reference identity, physical terminal, allocation basis or actual core process evidence blocks a usable result. Structural check success establishes no scientific, translation, legal, mapping or publication approval. | `ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input to declared spun-silk preparation after the wet brushing-fibre gate |
| allowed_use | Same single wet unprocessed brushing-fibre supply with full route and receiver compatibility |
| excluded_use | Waste-treatment service; spent textiles; silk yarn; degummed floss; garnetted fibre; raw silk substitution; unqualified category averages |
| required_metadata | All section 3 qualifiers; production gate; Q/Qc; V/A ledgers; upstream scope and allocation; complete native restrictions |
| required_quality_disclosure | Source age and synthesis; sampling/measurement uncertainty; ordinary UUID/provider gaps; true core holds; failed and Q0 work; stock and service timing |
| update_trigger | Changed formation stage, wet/dry state, cocoon source state, treatment, species, energy architecture, receiver/legal status, allocation evidence or native identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-39211 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes (30 June 2025), pp.200–201. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Title-only silk-waste coordinate and adjacent wool/cotton/garnetted categories; does not itself specify manufacturing route |
| fao-silk-1999 | handbook | Yong-woo Lee, Silk reeling and testing manual, FAO Agricultural Services Bulletin 136 (1999), chapters5–6 and8 including Figure17. https://www.fao.org/4/x2099e/x2099e00.htm ; https://www.fao.org/4/x2099e/x2099e06.htm ; https://www.fao.org/4/x2099e/x2099e07.htm ; https://www.fao.org/4/x2099e/x2099e09.htm | Cooking and reeling architecture; brushing-residue origin and downstream spinning use; distinction from pupae, processed floss and spun noils. No numerical manufacturing default or LCA allocation factor. Steam-supply integration and collection/stock protocols are transparent technical synthesis. |
| ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook — General guide for Life Cycle Assessment — Detailed guidance, first edition March2010, sections7.9.2–7.9.3, PDF pp.275–292. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and virtual subdivision; determining physical causality by exchange; residual same-state common-gate market value. Site ledgers implement these principles; the method source does not supply silk plant quantities or legal acceptance. |
