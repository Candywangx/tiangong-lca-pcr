---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.wood-pellets
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Wood fuel pellets from untreated conifer sawdust

## 1. Scope and Applicability

This PCR covers manufacture of wood fuel pellets from received wet, clean untreated conifer sawdust, through actual moisture reduction, size preparation, conditioning, perforated-die densification, cooling, final screening, initial required packaging and first quality release. The selected thermal design is a natural-gas-fired industrial drying furnace. It is a transparent technical synthesis of primary extension and manufacturer contexts, not a claimed same-SKU/same-plant recipe or current factory inventory. The electricity binding is available only for an actual Chinese plant receiving 1–35 kV grid-average consumption mix; actual providers and all operating states must be collected. coford-pellets-2007; sca-pellets-production; bordiga-pellets.

The product contains no deliberately added binder under this route. Verify every real supply and oil/additive carryover rather than infer absence from a marketing statement. COFORD documents startup vegetable oil and possible steam; NC State explains binder and moisture variability. SCA documents a no-additive route with biomass drying and heat export, while Bordiga documents untreated solid-wood sawdust and a packaged terminal but inconsistent pine/spruce wording. Those alternative provider arrangements and numbers are not copied into the gas-fired design. No general grade, fixed density, heat value, moisture, operating recipe or fossil/biogenic credit is asserted. ncsu-energy-pellets-2013; coford-pellets-2007.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.wood-pellets |
| classification_refs | CPC 3.0:39281; narrower untreated conifer fuel-pellet method; no accepted mapping is established here |
| covered_products | Cooled screened die-extruded clean untreated conifer sawdust fuel pellets at first quality release |
| excluded_products | 39282 non-pellet agglomerated blocks/briquettes; 39283 loose non-agglomerated sawdust; treated/composite contaminated feed; added-binder fuel without separate review; torrefied/charcoal pellets; animal feed/bedding; installed heating |
| representative_product | One declared conifer-source fuel pellet lot with measured release moisture and actual quality specification |
| production_route | Wet sawdust receipt and stocks → gas-fired drying → foreign-body screening and hammer milling → actual conditioning → die extrusion → cooling and fines screening → actual initial packing → first release; separate original-cohort later services |
| market_state | Manufactured unburned fuel pellets; package mass excluded from net reference; quality and water state declared, no universal grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply declared wood pellet fuel at the manufacturing release gate; not useful heat at a customer |
| How much | 1 kg net first-quality-released pellets at measured release moisture |
| How well | Actual declared dimensions, durability, fines, ash, moisture, species/source and no deliberate binder; independent actual test evidence |
| How long or cycle | One complete declared production campaign and each unique first release; post-release service duration separately observed |
| reference_flow_link | `pellets_out` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood pellets `4905586c-0722-4c91-923f-112215546a41` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source and botanical conifer species; untreated solid-wood origin and recovery status; exclusion of composite-board/chemical contamination; sawdust physical form and bark content; actual furnace and conditioning provider; no deliberate binder and actual oil/additive disposition; die-extruded cylindrical pellet geometry; no torrefaction or carbonisation; measured release wet-basis moisture with method and dry matter; actual ash/durability/fines tests and declared grade; separate measured matched-state NCV when required; net first-release mass and batch uniqueness; primary package composition and tare; actual geography/year/energy-supply voltage and provider; stage/WIP and original FG vectors; observed post-release service duration |

Declare every required qualifier in the foreground dataset metadata, product/reference comment or equivalent field; missing qualifiers leave the reference incomplete. The native pellet UUID is a finished Product with Mass/kg at plant and no fixed quality/NCV specification; retain the complete conditions in pellets_out when reusing this guidance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is net as-released first-quality pellet mass after actual cooling/screening and primary packing; exclude packaging tare and record moisture. The linked output is 1 kg; no dry-mass or energy substitution. |
| `raw_units` | all inventory rows | Actual row property | row unit | cp_* collects unnormalized raw records. raw_to_a and energy_gas_conversion perform unit/state conversion and attribution; normalize_inventory or normalize_service is the sole division by Q or Qc. A_i and service S_ic retain numerator units and are not already per kg. |
| `moisture_basis` | all inventory rows | Mass and measured water fraction | kg | Keep wet and oven-dry mass plus stated wet/dry moisture basis; apply wood_water_balance with independent samples. Native product Mass/kg and measured NCV are distinct; no generic moisture, density or calorific conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received wet clean untreated conifer sawdust recovered at the actual supplier-to-pellet-plant gate; upstream forestry/sawmill/recovery/transport remains linked |
| starting_condition_role | Declared foreground entry, not burden-free origin or a purchase of finished pellets |
| product_classification_scope | CPC3.0 39281 fuel pellets within this narrower actual route; 39282/39283 distinct |
| recursive_input_rule | Internal fines/rework stays paired and cancels on consolidation; any external finished-pellet input needs its own upstream dataset and explicit route/applicability review, never self-recursive burden-free manufacture |
| upstream_dataset_requirement | Actual supplier recovery/product status, stock history, energy/fuel/steam, packaging and transport/treatment providers with their complete compatible boundaries |
| disclosure | Actual plant/period, start gate, source and species, chemistry, measured water/energy, allocation, WIP/FG vectors, initial packing and later observed service account |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_complete` | pellet_make | Include real upstream sawdust generation/recovery burdens and transport plus complete receipt, storage, drying, foreign-body removal, size preparation, actual conditioning, die extrusion, cooling, final screening, initial packing and first quality release. The selected design uses a natural-gas-fired dryer furnace, not a purchased finished-pellet packaging operation. A source describing wood-fuel combustion is not automatically the selected energy provider. | `coford-pellets-2007`; `sca-pellets-production` |
| `b_gate` | pellets_out | Q is the sum of unique net first-quality-released pellet masses at measured release moisture in kg, after cooling/screening and actual required primary packing. Tare is excluded. Count each physical batch once. Same-cohort closing finished goods are already part of Q, not another production output. Later shipment, retest, repacking and return do not increase Q. Keep their actual services and physical stocks. | `coford-pellets-2007` |
| `b_utilities` | pellet_make | Determine actual furnace/boiler/steam/heat provider boundaries before computing burdens. Do not default a steam boiler, equal condensate return, biomass burner, heat export or electricity generation into existence. If actual purchased steam replaces onsite generation, use one provider and the agreed heat/water boundary. Real alternative fuels, wood-fired heat, cooling water, separate preparations, filters, labels, closures or chemicals must be added as individually named atomic exchanges with full provider/emission accounting before dataset completeness; unknown is not zero. | `coford-pellets-2007`; `ncsu-energy-pellets-2013` |
| `b_returns` | pellet_make | Pair every screen-fines, captured-dust, off-spec regrind, oily startup pellet and condensate internal return with its source and receiving stage, wet/dry wood, water, oil and inherited per-exchange burden vector. Internal transfers cancel only on consolidation; repeated-pass power/heat and losses remain. Partition each captured stream among reinput, storage, external transfer and release without adding partitions to the whole. | `coford-pellets-2007` |
| `b_services` | pellet_service | Maintain a post-release service account by original release cohort c, using its original Qc in kg. Store actual cohort occupancy, moisture changes, handling throughput H, gross shipments, returns, loss and additional packaging separately. H is a service activity metric and never a production denominator. Record old-stock services even without new production. At the combined physical gate internal first-release Q transfers cancel; external net shipment need not equal Q. | `ilcd-allocation-2010` |
| `b_exclusions` | all inventory rows | No fixed grade, bag capacity, moisture target, density, calorific value, energy/yield, lifespan or emission factor is prescribed. Exclude briquettes/wood blocks (CPC39282), non-agglomerated delivered sawdust (CPC39283), composite/chemically contaminated feed, torrefied or carbonised pellets, installed heating and fuel combustion at the customer. Ordinary missing auxiliary UUIDs and provider/foreground measurements remain explicit completion requirements, not fabricated defaults. | `coford-pellets-2007`; `ncsu-energy-pellets-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pellet_make` | Complete wet-sawdust pellet manufacture | required | actual selected untreated conifer gas-fired route | foreground | unique first-release Q kg; pellets_out |
| `pellet_service` | Original-cohort released-stock services | conditional | every actually observed later service, including old stock and no-new-production periods | foreground | original release cohort Qc kg; no new reference output |

Within pellet_make collect receipt → wet storage → dryer → foreign-body separation/hammer mill → actual conditioning → press → cooler → fines screen → initial packing → quality release as distinct measured stage records. Identify lot/stage, inlet/outlet wet and dry wood, water/oil, opening/closing WIP and each inherited exchange vector. Pair screen fines and captured dust back to the actual receiving stage, oily stop/start pellets and off-spec regrind independently; record actual external waste and air release separately. These are internal diagnostics, not extra external procurement, first-release production or coproducts. A different observed sequence or actual alternative utility needs a justified expanded model before use.

### Process: Complete pellet manufacture (`pellet_make`)

#### Inputs

##### Product flows

###### Alternating current (`make_electricity`)

Metered electricity for receipt, conveyors, dryer fans, hammer mill, conditioner, die press, cooling, extraction, screens, initial packing and release testing. This Product identity is CN grid-average consumption mix to user at 1–35 kV; it is not generation, a renewable contract, a transformer service or low-voltage supply. Match actual year, region, supplier, voltage and loss boundary independently. Native Net calorific value denotes energy/MJ for this electricity flow; use metered electrical energy, never a fictitious fuel heat value.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value (electrical energy for this flow) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `coford-pellets-2007`

###### Natural gas (`dryer_gas`)

One supplied gaseous natural-gas preparation burned in the actual industrial dryer furnace, including ignition, warm-up, shutdown and idle fuel. This native Product has Mass/kg and only the industrial-furnace combustion route; no fixed composition, density, LHV, geography or supplier is specified. Meter gas mass or independently convert its measured standard volume using this supply’s measured composition and reference-state density; no native secondary ratio supplies a density. Separately identify any real onsite conditioning-steam boiler fuel and expand its complete water/emissions inventory; purchased steam must not also acquire a fictitious boiler.

- Selected flow: Natural gas `c536902d-9d84-4984-8504-ab88cdbe8b7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `coford-pellets-2007`

###### Diesel fuel (`make_diesel`)

Conditional actual diesel for incoming sawdust yard handling and internal manufacture logistics. The native Product is diesel mass only, with grade, blend, density, heating value, refinery, geography and provider unspecified; collect each. An absent diesel operation requires documented electric handling or other actual equipment evidence. Keep all combustion species separately and do not add a transport-service provider for the same fuel burn.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `sca-pellets-production`

###### Tap water (`conditioning_water`)

Actual separately supplied potable municipal water used for direct moisture conditioning or cleaning. Native identity is treated drinking-standard piped water, production supply at plant/to consumer; not untreated surface water, seawater, recovered condensate or steam. Supplier treatment, location and quality remain independent requirements. Use Mass/kg; the native secondary Volume ratio is not an independently measured site water density. Do not add water carried in received sawdust or purchased steam as another purchase.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `coford-pellets-2007`; `ncsu-energy-pellets-2013`

###### Dry water steam for pellet conditioning (`conditioning_steam`)

Conditional one externally supplied water-steam exchange for actual conditioning. Record supplier, pressure (gauge/absolute), temperature, dryness, mass and specific enthalpy with agreed heat/water boundary. No 0.45 MPaG or 11 MPaG UUID is assumed from the word steam. If generated onsite, replace this external purchase with complete actual boiler inputs and outputs and pair the internal steam handoff; retain startup, blowdown, leaks and condensate. Never model both arrangements for the same steam.

- Selected flow: Dry water steam for pellet conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `coford-pellets-2007`

###### Rapeseed oil die lubricant (`die_oil`)

Conditional single supplied rapeseed-oil preparation for a documented die stopping/startup practice; COFORD supports vegetable-oil use but does not establish rapeseed as universal or prove use at this site. Use this concrete row only when the actual supply is rapeseed oil; another real oil requires its own named row. Count the whole preparation once, with composition/assay and carried water as subsidiary accounts. Track retained oil, oily startup pellets, reinput and disposal; no-binder product claims do not erase oil. Deliberately oil-containing saleable fuel needs a separate applicability decision.

- Selected flow: Rapeseed oil die lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `coford-pellets-2007`

###### Polyethylene bag (`make_bag`)

One purchased finished PE pellet bag, including supplied printing and closure when integral. Native Product is PE bag at plant, CAS 9002-88-4, with no grade, thickness, content, capacity or supplier specified; do not substitute resin, a laminate or a woven PP sack. Measure whole supplied bag mass and count; separately supplied labels or closures need their own atomic rows. This is manufacture packaging up to first release only; cp_pack keeps the complete material-specific stock/custody equation. Only actual use applies.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `coford-pellets-2007`

###### Polyethylene film (`make_wrap`)

One finished PE pallet wrapping film, not resin or extrusion service. Native Product is at-plant PE film, CAS 9002-88-4; its comment distinguishes competing PET and does not make PET compatible. Native CPC29220 describes luggage, inconsistent with the coherent PE-film name, CAS and comment; source classification correction remains pending. This conditional physical locator does not prove the actual film grade, supply state or provider, and the classification is not adopted as a luggage identity. Branching/grade, thickness, additives, recycled share and provider require independent confirmation. This is manufacture packaging up to first release only; cp_pack keeps the complete material-specific stock/custody equation. Only actual use applies.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `coford-pellets-2007`

###### Wooden pallets (`make_pallet`)

One finished board/slat wooden load pallet. Native Product is production mix in lumber mill and wooden boards/slats route, with no EURO certification, dimensions, timber treatment, load rating or provider specified. Native active CPC17100 describes electricity, inconsistent with the coherent wooden-pallet name, wood-board/slat route and Product/Mass fields; the preserved received classification concerns wood packaging and is not a correction of the active source. Source classification clarification remains pending. Keep this conditional finished-wood-pallet locator only with actual design, treatment, grade/state and supplier/quantity evidence; it establishes no electricity exchange or verified provider. Use measured kg per actual pallet design; never infer a pallet mass from its piece count. Track reuse custody and refurbishment separately. This is manufacture packaging up to first release only; cp_pack keeps the complete material-specific stock/custody equation. Only actual use applies.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `coford-pellets-2007`

##### Waste flows

###### sawdust waste (`sawdust_in`)

One received non-agglomerated clean untreated conifer sawdust waste, recovered for pellet manufacture; supplier, botanical species, origin, bark/contamination, wet mass and moisture basis are mandatory. Native Waste identity is unspecified sawdust at plant with untreated comb/rec route and lumber byproduct/fine-particle comment; it does not prove legal waste status or zero upstream burden, and it is not a Product coproduct or an agglomerate. Verify actual material-recovery interface and inherited upstream vector. If legally supplied as Product coproduct, obtain a compatible Product identity rather than relabelling this Waste UUID. Exclude treated timber, composite-board sanding waste and chemical contamination; do not infer untreated from an unknown source.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `coford-pellets-2007`; `bordiga-pellets`

##### Elementary flows

###### oxygen (`oxygen_consumed`)

Conditional net atmospheric oxygen consumed by actual combustion, independently derived from fuel/exhaust composition and gas measurements. Native Elementary resource is oxygen from air, CAS 7782-44-7; not purchased oxygen or an emission. Keep gross inlet/outlet air diagnostics with measured humidity; cancel unchanged carrier nitrogen and excess oxygen symmetrically, not selectively to force a balance.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### dinitrogen (`nitrogen_consumed`)

Conditional net atmospheric N2 actually converted into measured nitrogen oxides during combustion, distinct from fuel nitrogen and unchanged carrier N2. Native Elementary resource is dinitrogen from air, CAS 7727-37-9, Mass/kg; not purchased liquid nitrogen, a total-nitrogen indicator or an emission. Keep independently measured gas/speciation evidence and gross air diagnostics; symmetric cancellation of unchanged carrier N2 must retain actual reactive nitrogen consumption. No assumed fuel/thermal-NOx share.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

#### Outputs

##### Product flows

###### Wood pellets (`pellets_out`)

Unique reference Product output: 1 kg net pellets at their first quality release after actual cooling, final fines screening and initial required packing. Native identity is manufactured finished wood pellets, production mix at plant, specifically sawdust/wood waste in pellet form; no fixed species, additive allowance, quality grade, geometry, moisture, density, heat value or geographic/provider specification is supplied. Here use only declared clean untreated conifer sawdust with no deliberate binder and documented actual startup-oil disposition. Qualify species/source and waste recovery, cylindrical die-extruded pellet form (not briquettes or loose sawdust), no torrefaction/carbonisation, measured release moisture, ash, durability, fines, dimensions, dry matter, net mass and package state. Record measured matched-state NCV separately when required; this native reference is Mass/kg. The same batch’s closing finished goods already contain this released output; dispatch or reinspection cannot create it again.

- Selected flow: Wood pellets `4905586c-0722-4c91-923f-112215546a41`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `coford-pellets-2007`; `sca-pellets-production`; `bordiga-pellets`

###### Returned liquid steam condensate (`condensate_return`)

Only an actual external liquid condensate return accepted by the steam supplier as a Product-return exchange, with mass, temperature, pressure, chemistry and enthalpy plus agreed supplier water/heat accounting. It is neither automatic equal-to-steam return nor negative wastewater or heat credit. Internally reused condensate is a paired internal handoff, not this external output.

- Selected flow: Returned liquid steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `coford-pellets-2007`

##### Waste flows

###### Discarded untreated conifer sawdust fines (`wood_fines_waste`)

Only physically discarded or externally transferred fines from screens/extraction, with actual moisture, contamination and treatment provider. Internal acceptable fines reinput is paired in the stage ledger and is neither another purchase nor this waste. Do not bind 39282 agglomerated wood UUIDs or generic Waste Dust to an air emission.

- Selected flow: Discarded untreated conifer sawdust fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `coford-pellets-2007`

###### Rejected oil-free conifer wood fuel pellets (`reject_pellets`)

One homogeneous oil-free rejected pellet stream from actual irrecoverable failure or pre-release quality rejection; oily startup pellets have their own separate row. A different chemical contamination or treatment stream needs another atomic row. Reground rework keeps inherited vectors and never gains new first-release mass twice.

- Selected flow: Rejected oil-free conifer wood fuel pellets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `coford-pellets-2007`

###### Rapeseed-oil-containing startup wood pellets (`oily_startup_pellets`)

One actual homogeneous whole stream of startup/stopping wood pellets containing the documented rapeseed die oil. Measure wet wood, water and oil as nonadditive constituent subaccounts of the whole rejected stream; separate acceptable internal reinput from actual external waste. It is not oil-free pellet reject, liquid oil or new first-quality production. Only this real oil formulation applies; another oil requires its own exact stream and chemistry.

- Selected flow: Rapeseed-oil-containing startup wood pellets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `coford-pellets-2007`

###### Separated mineral grit (`stone_reject`)

Actual mineral grit removed from the received sawdust. Weigh its own bin and identify mineral composition and waste treatment; never combine with ferrous scrap or wood.

- Selected flow: Separated mineral grit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `coford-pellets-2007`

###### Separated ferrous metal scrap (`ferrous_reject`)

Actual magnetically removed ferrous contamination; determine composition and waste/recovered-product status before provider binding. No generic metal recovery credit or mass-based pellet yield credit.

- Selected flow: Separated ferrous metal scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `coford-pellets-2007`

###### Wood-drying condensate wastewater (`dryer_condensate`)

Conditional one whole actual liquid effluent from the dryer condensation/cleaning system, with measured water, dissolved/entrained wood constituents, temperature and contractor. It is not clean supplier condensate. COD/VOC are analytical indicators, not independent chemical masses to add to the whole effluent. Resolve every actual discharged chemical species separately if discharged directly to nature; a whole wastewater transfer has one treatment provider.

- Selected flow: Wood-drying condensate wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `coford-pellets-2007`

###### Discarded polyethylene pellet bag (`bag_waste`)

One discarded PE bag stream, measured after decontamination/contents correction; retained wood belongs to its own measured subledger and is not added twice. Keep print/closure composition and actual contractor.

- Selected flow: Discarded polyethylene pellet bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `coford-pellets-2007`

###### Discarded polyethylene wrapping film (`wrap_waste`)

One discarded PE wrapping film stream, distinct from bags and pallets; reconcile stock, contamination and actual destination without automatic recycling credit.

- Selected flow: Discarded polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `coford-pellets-2007`

###### Discarded board wooden pallet (`pallet_waste`)

One discarded wooden pallet stream; keep actual material/treatment, repair history, mass and waste provider. Internal reuse is not a new input or saleable coproduct.

- Selected flow: Discarded board wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `coford-pellets-2007`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Conditional fossil carbon dioxide from actual gas/diesel combustion. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 124-38-9 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### carbon dioxide (biogenic) (`biogenic_co2`)

Conditional biogenic carbon dioxide only when actual wood oxidation/degradation or documented biomass combustion occurs; do not copy a biomass boiler into a gas-fired plant. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 124-38-9 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### carbon monoxide (fossil) (`carbon_monoxide`)

Conditional actual fossil carbon monoxide; independently identified biogenic CO needs its own separately verified exchange. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 630-08-0 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### nitrogen monoxide (`nitrogen_monoxide`)

Conditional actual nitrogen monoxide; NOx as NO2-equivalent cannot be called NO mass. The imported synonym list also contains HNO, nitroxyl and nitrosyl-hydride terms that do not identify neutral NO; exclude those aliases and retain a source-metadata clarification debt. Conditional use rests on principal nitrogen-monoxide name/CAS 10102-43-9, Elementary outdoor-air category and Mass reference, subject to actual neutral-NO speciation, medium and reference-mass/unit verification; do not infer corrected aliases or a measured species from the UUID. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 10102-43-9 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### methane (fossil) (`fossil_methane`)

Conditional actual fossil methane leak or combustion slip; natural gas is not pure methane. The imported synonym list is polluted with graphite, carbon-black, activated-carbon, formaldehyde and other nonmethane terms; exclude those aliases and retain a source-metadata clarification debt. Conditional use rests on principal methane (fossil) name/CAS 74-82-8, Elementary outdoor-air category and Mass reference, subject to actual CH4 speciation, fossil origin, medium and reference-mass/unit verification; the UUID does not validate the alias list or establish a measured emission. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 74-82-8 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### nitrous oxide (`nitrous_oxide`)

Conditional actual nitrous oxide, kept separate from NO and NO2. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 10024-97-2 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### sulfur dioxide (`sulfur_dioxide`)

Conditional actual sulfur dioxide, not the SOx aggregate. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 7446-09-5 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### formaldehyde (`formaldehyde`)

Conditional actual chemically identified formaldehyde from wood heating; broad synonyms mentioning formalin/polymers do not change this CAS-specific gas identity. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 50-00-0 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### Nitrogen dioxide to outdoor air (`nitrogen_dioxide`)

Actual chemically identified NO2, separately measured or independently speciated from NO. A NOx-as-NO2-equivalent monitor is not two actual species measurements. Leave identity unbound until matching medium/CAS 10102-44-0 and reference units are verified; no guessed split.

- Selected flow: Nitrogen dioxide to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

###### water vapour (`water_vapour`)

Actual net water vapour released to outdoor air from drying/cooling and combustion, CAS 7732-18-5, Mass/kg, unspecified air subcompartment. Native synonyms include liquid/ice/heavy-water terms, but the formal identity is vapour, not those forms, purchased steam or wastewater. Independently distinguish feed free water, ambient humidity, supplied steam and combustion reaction water; one residual must not fit both evaporation and reaction water. Retain unchanged inlet humidity as a paired diagnostic, not fabricated evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `coford-pellets-2007`

###### Particulate matter, particle size unspecified (`wood_pm`)

Actual emitted wood-containing particles after controls, distinguished from captured material sent back or discarded. Native Elementary is Mass/kg outdoor-air PM with unspecified size and receiving subcompartment; no composition, stack height or LCIA factor is assigned. Its retained clinker-study example is explicitly an example rather than a route restriction or wood-pellet emission factor. Measure actual wood/mineral fraction for the wood balance. If aerodynamic sizes are known use verified nonoverlapping size-specific identities instead, never sum total PM with nested PM10/PM2.5.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable manufacturing amount for the declared reference, from the sole campaign calculation in section 8; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `coford-pellets-2007`

### Process: Original-cohort post-release services (`pellet_service`)

#### Inputs

##### Product flows

###### Alternating current (`service_make_electricity`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Metered electricity for actual warehouse ventilation, storage, handling, replacement packing and dispatch. This Product identity is CN grid-average consumption mix to user at 1–35 kV; it is not generation, a renewable contract, a transformer service or low-voltage supply. Match actual year, region, supplier, voltage and loss boundary independently. Native Net calorific value denotes energy/MJ for this electricity flow; use metered electrical energy, never a fictitious fuel heat value. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value (electrical energy for this flow) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Diesel fuel (`service_make_diesel`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional actual diesel for post-release handling and internal dispatch logistics. The native Product is diesel mass only, with grade, blend, density, heating value, refinery, geography and provider unspecified; collect each. An absent diesel operation requires documented electric handling or other actual equipment evidence. Keep all combustion species separately and do not add a transport-service provider for the same fuel burn. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `sca-pellets-production`

###### Polyethylene bag (`service_make_bag`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. One purchased finished PE pellet bag, including supplied printing and closure when integral. Native Product is PE bag at plant, CAS 9002-88-4, with no grade, thickness, content, capacity or supplier specified; do not substitute resin, a laminate or a woven PP sack. Measure whole supplied bag mass and count; separately supplied labels or closures need their own atomic rows. This is actual additional service packaging only; first-release package purchases are not counted again; cp_pack keeps the complete material-specific stock/custody equation. Only actual use applies. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Polyethylene film (`service_make_wrap`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. One finished PE pallet wrapping film, not resin or extrusion service. Native Product is at-plant PE film, CAS 9002-88-4; its comment distinguishes competing PET and does not make PET compatible. Native CPC29220 describes luggage, inconsistent with the coherent PE-film name, CAS and comment; source classification correction remains pending. This conditional physical locator does not prove the actual film grade, supply state or provider, and the classification is not adopted as a luggage identity. Branching/grade, thickness, additives, recycled share and provider require independent confirmation. This is actual additional service packaging only; first-release package purchases are not counted again; cp_pack keeps the complete material-specific stock/custody equation. Only actual use applies. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Wooden pallets (`service_make_pallet`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. One finished board/slat wooden load pallet. Native Product is production mix in lumber mill and wooden boards/slats route, with no EURO certification, dimensions, timber treatment, load rating or provider specified. Native active CPC17100 describes electricity, inconsistent with the coherent wooden-pallet name, wood-board/slat route and Product/Mass fields; the preserved received classification concerns wood packaging and is not a correction of the active source. Source classification clarification remains pending. Keep this conditional finished-wood-pallet locator only with actual design, treatment, grade/state and supplier/quantity evidence; it establishes no electricity exchange or verified provider. Use measured kg per actual pallet design; never infer a pallet mass from its piece count. Track reuse custody and refurbishment separately. This is actual additional service packaging only; first-release package purchases are not counted again; cp_pack keeps the complete material-specific stock/custody equation. Only actual use applies. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

##### Waste flows

##### Elementary flows

###### oxygen (`service_oxygen_consumed`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional net atmospheric oxygen consumed by actual combustion, independently derived from fuel/exhaust composition and gas measurements. Native Elementary resource is oxygen from air, CAS 7782-44-7; not purchased oxygen or an emission. Keep gross inlet/outlet air diagnostics with measured humidity; cancel unchanged carrier nitrogen and excess oxygen symmetrically, not selectively to force a balance. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### dinitrogen (`service_nitrogen_consumed`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional net atmospheric N2 actually converted into measured nitrogen oxides during combustion, distinct from fuel nitrogen and unchanged carrier N2. Native Elementary resource is dinitrogen from air, CAS 7727-37-9, Mass/kg; not purchased liquid nitrogen, a total-nitrogen indicator or an emission. Keep independently measured gas/speciation evidence and gross air diagnostics; symmetric cancellation of unchanged carrier N2 must retain actual reactive nitrogen consumption. No assumed fuel/thermal-NOx share. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

#### Outputs

##### Product flows

##### Waste flows

###### Discarded untreated conifer sawdust fines (`service_wood_fines_waste`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Only physically discarded or externally transferred fines from screens/extraction, with actual moisture, contamination and treatment provider. Internal acceptable fines reinput is paired in the stage ledger and is neither another purchase nor this waste. Do not bind 39282 agglomerated wood UUIDs or generic Waste Dust to an air emission. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Discarded untreated conifer sawdust fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Rejected oil-free conifer wood fuel pellets (`service_reject_pellets`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. One homogeneous oil-free rejected pellet stream from actual irrecoverable failure or post-release quality rejection; oily startup pellets have their own separate row. A different chemical contamination or treatment stream needs another atomic row. Reground rework keeps inherited vectors and never gains new first-release mass twice. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Rejected oil-free conifer wood fuel pellets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Discarded polyethylene pellet bag (`service_bag_waste`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. One discarded PE bag stream, measured after decontamination/contents correction; retained wood belongs to its own measured subledger and is not added twice. Keep print/closure composition and actual contractor. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Discarded polyethylene pellet bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Discarded polyethylene wrapping film (`service_wrap_waste`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. One discarded PE wrapping film stream, distinct from bags and pallets; reconcile stock, contamination and actual destination without automatic recycling credit. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Discarded polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Discarded board wooden pallet (`service_pallet_waste`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. One discarded wooden pallet stream; keep actual material/treatment, repair history, mass and waste provider. Internal reuse is not a new input or saleable coproduct. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Discarded board wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

##### Elementary flows

###### carbon dioxide (fossil) (`service_fossil_co2`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional fossil carbon dioxide from actual gas/diesel combustion. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 124-38-9 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### carbon monoxide (fossil) (`service_carbon_monoxide`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional actual fossil carbon monoxide; independently identified biogenic CO needs its own separately verified exchange. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 630-08-0 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### nitrogen monoxide (`service_nitrogen_monoxide`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional actual nitrogen monoxide; NOx as NO2-equivalent cannot be called NO mass. The imported synonym list also contains HNO, nitroxyl and nitrosyl-hydride terms that do not identify neutral NO; exclude those aliases and retain a source-metadata clarification debt. Conditional use rests on principal nitrogen-monoxide name/CAS 10102-43-9, Elementary outdoor-air category and Mass reference, subject to actual neutral-NO speciation, medium and reference-mass/unit verification; do not infer corrected aliases or a measured species from the UUID. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 10102-43-9 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### methane (fossil) (`service_fossil_methane`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional actual fossil methane leak or combustion slip; natural gas is not pure methane. The imported synonym list is polluted with graphite, carbon-black, activated-carbon, formaldehyde and other nonmethane terms; exclude those aliases and retain a source-metadata clarification debt. Conditional use rests on principal methane (fossil) name/CAS 74-82-8, Elementary outdoor-air category and Mass reference, subject to actual CH4 speciation, fossil origin, medium and reference-mass/unit verification; the UUID does not validate the alias list or establish a measured emission. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 74-82-8 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### nitrous oxide (`service_nitrous_oxide`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional actual nitrous oxide, kept separate from NO and NO2. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 10024-97-2 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### sulfur dioxide (`service_sulfur_dioxide`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Conditional actual sulfur dioxide, not the SOx aggregate. Native Elementary emission to outdoor air, unspecified receiving subcompartment, CAS 7446-09-5 and Mass/kg; no long-term, indoor, water or special-stack substitution. Quantify actual substance after controls and distinguish origin without adding source partitions to the whole amount. No emission factor or characterization factor is inherited. Evidence of absence must include method, detection limit and operating conditions; otherwise retain an unknown and add every real additional species separately. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Nitrogen dioxide to outdoor air (`service_nitrogen_dioxide`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Actual chemically identified NO2, separately measured or independently speciated from NO. A NOx-as-NO2-equivalent monitor is not two actual species measurements. Leave identity unbound until matching medium/CAS 10102-44-0 and reference units are verified; no guessed split. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Nitrogen dioxide to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### water vapour (`service_water_vapour`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Actual net water vapour released to outdoor air from actual storage moisture changes and actual service combustion, CAS 7732-18-5, Mass/kg, unspecified air subcompartment. Native synonyms include liquid/ice/heavy-water terms, but the formal identity is vapour, not those forms, purchased steam or wastewater. Independently distinguish feed free water, ambient humidity, supplied steam and combustion reaction water; one residual must not fit both evaporation and reaction water. Retain unchanged inlet humidity as a paired diagnostic, not fabricated evaporation. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

###### Particulate matter, particle size unspecified (`service_wood_pm`)

After first release only: actual original-cohort storage, handling, dispatch or replacement-packaging exchange. Actual emitted wood-containing particles after controls, distinguished from captured material sent back or discarded. Native Elementary is Mass/kg outdoor-air PM with unspecified size and receiving subcompartment; no composition, stack height or LCIA factor is assigned. Its retained clinker-study example is explicitly an example rather than a route restriction or wood-pellet emission factor. Measure actual wood/mineral fraction for the wood balance. If aerodynamic sizes are known use verified nonoverlapping size-specific identities instead, never sum total PM with nested PM10/PM2.5. In this service process all restrictions above apply to the actual service equipment and supply. Use its original released cohort Qc through normalize_service; handling throughput H and repeated shipment mass do not create production or replace Qc. Collect post-release loss/return and their inherited vectors separately from manufacturing.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i: attributable service amount for the declared reference, from the sole service calculation in section 8; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `coford-pellets-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_scope` | all inventory rows | Apply this hierarchy only in an attributional model where allocation is actually needed. First isolate dedicated stages/meters and use justified real or virtual subdivision; keep sawdust upstream multifunctionality, manufacturing and subsequent services distinct. A shared code, positive price, physical mass balance or industrial brochure does not select an allocation factor. | `ilcd-allocation-2010` |
| `a_causality` | all inventory rows | For each genuinely shared exchange independently demonstrate the determining physical causal relation and retain its measured driver, applicable outputs and rationale: embodied wood/water, actual drying evaporation/heat, press operation or time with the limiting service property as appropriate. Do not apply mass or energy indiscriminately to every flow; physical reconciliation occurs before burden attribution. | `ilcd-allocation-2010` |
| `a_residual` | all inventory rows | Only the remaining inseparable common-process burdens use contemporaneous market values of actual co-functions at the same common process gate in their actual moisture/quality state. Document actual quantities, prices, period, currency, failed earlier hierarchy steps and sensitivity. Do not use later customer fuel value, gross wet weight or an arbitrary physical/economic choice as a shortcut. Zero/negative/unknown value requires explicit review, not an invented share. | `ilcd-allocation-2010` |
| `a_recovery` | sawdust_in; wood_fines_waste; condensate_return | Document supplier coproduct/waste status, upstream burden transfer and recovery/treatment boundary. Waste labels, no purchase price, internal reinput or a renewable origin do not establish zero burdens, avoided production, heat substitution or biogenic neutrality. Keep recovered-material, treatment and actual useful exported heat functions explicit; if heat/electricity is actually co-produced, extend the complete utility process and apply this hierarchy. No automatic recycling, energy or carbon credit. | `ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | `pellet_make` | first release and quality | foreground record | lot identity; prior release flag; gross/tare/net release Q; date; species; measured moisture with wet/dry basis; dimensions; fines; ash; durability; separate NCV state; packaging status; rejected quantity | Calibrated net weighing and unique quality-release register after cooling/screening and actual primary packing; independent representative moisture and quality sampling. Record the actual declared grade/test method and results without imposing a source example as a universal acceptance threshold. Collection sums unnormalized raw amounts by exchange/stage/cohort only; the aggregation field declares the final reporting basis and executes no division. Only the section 8 campaign/service calculation divides once. | kg; moisture fraction; mm; MJ/kg | every production lot and decision | complete declared campaign including failures and stock changes; service records retain original cohort history | actual selected plant and equipment; do not combine incompatible sites/providers | per 1 kg reference flow | calibration; traceable raw tickets; full mode logs; supplier/quality evidence; uncertainty and reconciled stocks |
| `cp_material` | `pellet_make` | incoming feed and preparations | foreground record | supplier; botanical species; origin; waste/product status; wet mass; moisture method; chemical treatment/contamination; bark; opening/closing raw and WIP; per-exchange inherited vectors; startup oil composition; oil stock; internal return pairs | Weigh each whole supply and stage stock; use traceable supplier declarations plus representative moisture/contamination checks. Trace forest/sawmill origin and actual upstream burdens; sawdust is not automatically burden-free. Record oil as one preparation and its assay as a nonadditive subledger. Collection sums unnormalized raw amounts by exchange/stage/cohort only; the aggregation field declares the final reporting basis and executes no division. Only the section 8 campaign/service calculation divides once. | kg; moisture fraction | each receipt stock census and return | complete declared campaign including failures and stock changes; service records retain original cohort history | actual selected plant and equipment; do not combine incompatible sites/providers | per 1 kg reference flow | calibration; traceable raw tickets; full mode logs; supplier/quality evidence; uncertainty and reconciled stocks |
| `cp_energy` | `pellet_make` | power and each actual fuel | foreground record | stage meter readings; gas mass or standard volume; fuel composition; independent density and LHV; gas reference state; submeter boundaries; voltage; supplier region/year; start/stop/idle; dry evaporation; actual steam provider | Read calibrated energy and fuel meters, reconcile invoices and stage meters, and log all operating modes; collect raw unnormalized readings. Match actual NG furnace and any real conditioning supply without duplicating purchased heat or boiler fuel. Collection sums unnormalized raw amounts by exchange/stage/cohort only; the aggregation field declares the final reporting basis and executes no division. Only the section 8 campaign/service calculation divides once. | kWh; MJ; kg; m3 with state | continuous meters and each campaign | complete declared campaign including failures and stock changes; service records retain original cohort history | actual selected plant and equipment; do not combine incompatible sites/providers | per 1 kg reference flow | calibration; traceable raw tickets; full mode logs; supplier/quality evidence; uncertainty and reconciled stocks |
| `cp_water` | `pellet_make` | free water steam condensate and vapour | foreground record | feed/free water; wet/dry stock masses; actual liquid additions; steam mass temperature pressure dryness enthalpy; provider water/heat agreement; condensate returns; reaction water evidence; inlet/outlet humidity; liquid effluent mass and composition | Independent calibrated water/steam and matched gas-humidity measurements with representative wood moisture samples; separately reconcile feed water, reaction water, condensate and ambient moisture. Unknown evaporation and unknown reaction water need independent evidence, not the same fitted residual. Collection sums unnormalized raw amounts by exchange/stage/cohort only; the aggregation field declares the final reporting basis and executes no division. Only the section 8 campaign/service calculation divides once. | kg; degC; pressure with basis; kJ/kg | each supply return and representative mode | complete declared campaign including failures and stock changes; service records retain original cohort history | actual selected plant and equipment; do not combine incompatible sites/providers | per 1 kg reference flow | calibration; traceable raw tickets; full mode logs; supplier/quality evidence; uncertainty and reconciled stocks |
| `cp_pack` | `pellet_make` | each packaging material custody | foreground record | packaging identity/composition; count; measured unit mass; O_empty; O_attached_WIP; O_attached_FG; O_reusable; P; I; receipt_id; physical_origin; ownership; inherited_burden_owner; ER; C_empty; C_attached_WIP; C_attached_FG; C_reusable; S_gross; EO; W; cohort; stage; actual provider | Separate calibrated weights and custody counts for every PE bag, film and board pallet, including material attached to WIP/FG and reusable stock. Apply packaging_custody in physical quantities before attributing net used/purchased supply burdens; counts alone supply no kg. Collection sums unnormalized raw amounts by exchange/stage/cohort only; the aggregation field declares the final reporting basis and executes no division. Only the section 8 campaign/service calculation divides once.  Record actual first non-purchase external receipts I separately from purchases P and external returns ER, including supplier-attached bags/film/pallets and first borrowed or leased articles. Link each real receipt and its ownership/history; P, I and ER are mutually exclusive and internal reuse is none of them. Retain the physical component even when its upstream burden is already included; no second purchase or duplicate whole-load quantity follows. Add its specific atomic physical interface if an existing interface does not represent the actual ingress. | kg; item counts | each receipt shipment return and stock census | complete declared campaign including failures and stock changes; service records retain original cohort history | actual selected plant and equipment; do not combine incompatible sites/providers | per 1 kg reference flow | calibration; traceable raw tickets; full mode logs; supplier/quality evidence; uncertainty and reconciled stocks |
| `cp_waste` | `pellet_make` | each reject and waste destination | foreground record | stream identity; stage; wet/dry mass; composition; oil contamination; stock; return pair; destination; actual legal status; contractor; inherited burden | Weigh each segregated fine, oil-free rejected pellet, oily startup pellet, grit and ferrous bin; reconcile stage yield, shipments and treatment tickets. Retain internal return counts independently from external waste and actual air emissions; no mixed other-waste remainder. Collection sums unnormalized raw amounts by exchange/stage/cohort only; the aggregation field declares the final reporting basis and executes no division. Only the section 8 campaign/service calculation divides once. | kg | each reject event and shipment | complete declared campaign including failures and stock changes; service records retain original cohort history | actual selected plant and equipment; do not combine incompatible sites/providers | per 1 kg reference flow | calibration; traceable raw tickets; full mode logs; supplier/quality evidence; uncertainty and reconciled stocks |
| `cp_emission` | `pellet_make` | each actual gas and particulate species | foreground record | source unit; substance CAS; fuel origin; control state; raw concentration; actual integrated volume versus rate; temperature pressure humidity; dry/wet reference basis; method; detection limit; operating time; particle-size definition; O2 consumption; uncertainty | Use actual controlled outlet/fugitive monitoring or independently validated substance-specific balances for the real furnace, dryer, handling and cooling modes, including failures and startup. Speciate actual substances; retain analytical total VOC/NOx separately from chemical mass. Add any detected methanol, acetaldehyde, terpene or other real species as a separate named exchange with matching media rather than hide it in zero or an other-emission family. Collection sums unnormalized raw amounts by exchange/stage/cohort only; the aggregation field declares the final reporting basis and executes no division. Only the section 8 campaign/service calculation divides once. | kg; concentration with basis; m3 total or m3/time | representative modes and complete campaign | complete declared campaign including failures and stock changes; service records retain original cohort history | actual selected plant and equipment; do not combine incompatible sites/providers | per 1 kg reference flow | calibration; traceable raw tickets; full mode logs; supplier/quality evidence; uncertainty and reconciled stocks |
| `cp_service` | `pellet_service` | original-cohort post-release service | foreground record | original cohort c and Qc; opening/closing FG mass and moisture; occupancy time; H; actual electricity/fuel with full state; replacement packs and each custody category; gross shipment; external return; loss; retest; reversed original delivery; incremental rework; inherited vectors; species measurements | Calibrated cohort-linked warehouse, energy, packing and dispatch records, including returned stock and old FG; apply the same material/unit/provider and emission protocols as corresponding manufacturing cards to the actual service equipment. Keep raw totals and residence evidence before normalize_service, with no assumed service duration. Collection sums unnormalized raw amounts by exchange/stage/cohort only; the aggregation field declares the final reporting basis and executes no division. Only the section 8 campaign/service calculation divides once. | kg; kWh; MJ; state-specific volume; time; items | each service event and stock census | complete declared campaign including failures and stock changes; service records retain original cohort history | actual selected plant and equipment; do not combine incompatible sites/providers | per 1 kg reference flow | calibration; traceable raw tickets; full mode logs; supplier/quality evidence; uncertainty and reconciled stocks |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `raw_to_a` | all inventory rows | Convert each raw meter/weight to its exchange unit before attribution. For each exchange i retain its unnormalized burden vector: A_i equals dedicated current activity plus the justified allocated share of shared activity plus opening WIP inherited i minus closing WIP inherited i, with each actually transferred burden recorded once. Keep all failed lots, zero-output runs, startup, idle, cleaning and real rework activity; split recovered quantities and waste destinations before attribution. Never subtract closing finished goods of the same first-release cohort from manufacturing A_i, since their Q already exists. | raw_records; allocation_records; opening_wip_vectors; closing_wip_vectors | A_i | `ilcd-allocation-2010` |
| `normalize_inventory` | all inventory rows | For manufacturing rows only and Q > 0, divide each unnormalized attributable A_i by the same unique first-release Q in kg exactly once to obtain a_i per 1 kg reference flow; pellets_out is 1 kg by definition. Cards and collection aggregation reference this same operation and do not divide again. For Q = 0 retain the complete raw loads and their custody for later justified attribution; produce no unit result and never replace Q by throughput or one. | A_i; Q; cp_release | a_i |  |
| `normalize_service` | all inventory rows | For service rows only, first attribute unnormalized service exchange S_ic to each original release cohort c using dedicated records and the allocation hierarchy. Divide S_ic by its original Qc once. Retain service quantities even where no new Q occurs. Publish the observed service duration and add a service result to manufacturing only for the same cohort and unit; do not rename H or net deliveries as production Q. | S_ic; Qc; cp_service | s_ic | `ilcd-allocation-2010` |
| `wood_water_balance` | pellet_make | For every physical lot, wet wood mass W = dry wood D + free water F; measured wet-basis moisture w gives D = W*(1-w) and F = W*w; dry-basis moisture u = F/D, so w = u/(1+u). Independently reconcile dry wood, oil/additive solids, free water, combustion reaction water and elemental carbon/hydrogen/oxygen plus nitrogen and sulfur when present using measured composition and all opening/closing stocks. Feed free water is not structural hydrogen/oxygen in dry lignocellulose. Do not use one residual to fit two unknowns or treat COD/VOC as chemical mass. Report residuals with independent uncertainty rather than force equality. | wet_mass; dry_mass; moisture_basis; stocks; composition; measured_emissions | physical_wood_water_element_balance |  |
| `energy_gas_conversion` | all inventory rows | Use the exact native unit-group energy conversion 1 kWh = 3.6 MJ. For gas/liquid raw volume totals use independently measured substance-specific density at the stated pressure/temperature/moisture/composition; a cumulative volume is not multiplied by time. Only genuine rates are integrated over their actual time window. Gas concentration multiplied by matched dry/wet standard exhaust volume gives species amount using its actual reported basis; NOx-as-NO2 and total VOC do not determine species fractions. Measure actual pellet NCV at matched release moisture separately from bulk density; no universal kg-to-MJ or tonne-to-volume conversion. | meter_units; measured_density; gas_state; time; measured_NCV; cp_energy; cp_emission | converted_raw_amounts |  |
| `packaging_custody` | all inventory rows | For each packaging kind and cohort separately: O_empty + O_attached_WIP + O_attached_FG + O_reusable + P + I + ER = C_empty + C_attached_WIP + C_attached_FG + C_reusable + S_gross + EO + W. ER is actual external return received, S_gross is packaging physically leaving with gross shipments, EO is other external packaging return, and W is actual packaging waste. Keep categories mutually exclusive; internal reuse cancels and is not repurchase. P denotes actual purchase, not all packages handled. Measure every bag/film/pallet and actual separate component individually; returned empty packaging and repeated dispatch do not create pellet Q, credit or coproduct.  I denotes independently measured first non-purchase external physical ingress, including supplier-attached components and first borrowed/leased packaging; exclude the same receipts already represented in P or ER. Full opening/closing empty, attached WIP/FG and reusable stocks remain. Carry actual ownership and eligible inherited burden once. Physical P+I is not procurement consumption: attribute only the verified supplied scope and actual eligible withdrawals/service use, preserving unused-stock vectors and the upstream owner, without inventing another purchase, provider or credit. | cp_pack; cp_service; custody_receipts; stocks; gross_shipments | physical_packaging_balance |  |
| `finished_goods_balance` | pellet_service | At the service gate reconcile opening FG + newly released Q received + actual external pellet returns = closing FG + gross pellet shipments + actual service losses, with moisture uptake/evaporation separately measured and inherited burdens by cohort. Returns keep their original release identity; reverse original service/delivery records where appropriate and add only real incremental rework/handling. In the combined gate cancel the internal Q handoff; do not add same-cohort closing FG as extra manufacturing output. Use unallocated gross physical quantities for balances and A_i/S_ic only for burden accounts. | cp_release; cp_service; cohort_vectors; gross_physical_transfers | physical_fg_combined_gate_balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | Every supplied preparation and real destination is one atomic exchange; preserve native names, full restrictions and exact reference-property/unit chain. Supplier/year/geography/form/grade compatibility, legal feed waste status and measured amounts remain independently required. Unresolved auxiliaries stay precisely named and prevent claiming the affected dataset complete. | supplier specifications and actual native identity review |
| `dq_period` | all inventory rows | One complete declared campaign includes all operating modes and stock changes; do not select only successful steady-state runs. Retain each flow’s opening/closing WIP vectors and original FG release history; disclose missing history without inventing a zero. | full campaign register and vector reconciliation |
| `dq_science` | all inventory rows | A future factory data package must provide actual grade/moisture/NCV and process/provider evidence, substance-specific emission coverage, uncertainties and absence evidence. No recipe or carbon-neutral/avoided-burden assertion follows from a general industrial example. Ordinary future measurements do not supply current observed factory values. | quality tests and methodological review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | pellets_out | Verify the unique linked Product output is 1 kg net first-release manufactured wood pellets with the complete declared qualifiers. Reject hot uncooled intermediate pellets, non-pellet agglomerates and loose sawdust as this finished reference; no grade or NCV may be inferred from UUID alone. | `coford-pellets-2007` |
| `v_scope` | pellet_make | Require untreated clean conifer source and actual moisture/additive/oil disclosure, full drying-to-release topology and verified supply state. Treated/composite feed, briquettes and unagglomerated output are outside scope. A manufactured pellet UUID cannot stand for its upstream sawdust or authorize an incompatible energy provider. | `coford-pellets-2007`; `bordiga-pellets` |
| `v_quantity` | all inventory rows | Check raw-unit conversion and attribution precede exactly one A_i/Q manufacturing or S_ic/Qc service normalization. Protocols collect unnormalized values only. Keep Q0 records without a unit result; H, gross shipment and repeat release must never replace the declared reference basis. |  |
| `v_physical` | pellet_make; pellet_service | Independently close physical total mass, dry wood, water, oil and relevant elements at manufacturing, FG-service and combined gates using actual measured gross transfers, stocks and reaction species. Symmetric internal handoffs cancel, but losses and inherited burdens remain. Do not substitute allocated burdens for physical outputs or fit multiple unknowns to one residual. |  |
| `v_pack` | all inventory rows | Check each separate bag, film, pallet and actual additional component against packaging_custody including empty, attached WIP/FG and reusable opening/closing states, external returns and gross shipments. Count no internal reuse twice, no packaging in net pellet Q, and no automatically saleable recovered packaging. |  |
| `v_native` | all inventory rows | Validate actual Product/Waste/Elementary type, CAS, route, form, supply geography, receiving medium, every native property and exact unit chain; keep unverified auxiliaries unbound. Outdoor unspecified-air UUIDs do not establish known stack subcompartments; species totals and their source/size partitions are mutually exclusive representations. A monitoring unknown or mismatched provider cannot be reported as passed or zero. |  |
| `v_allocation` | all inventory rows | Require documented dedicated/virtual subdivision, exchange-specific determining physical causality and only then any residual common-gate market-value allocation; test sensitivity and status of actual co-functions. No fixed yield/share, avoided fuel, disposal, recycling or biogenic-neutral credit. | `ilcd-allocation-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply one declared first-release wood fuel pellet state to downstream transport/storage/fuel-use models with separate observed services |
| allowed_use | Matched source/species, no deliberate binder, actual moisture/quality and compatible provider gates; measured energy conversion only |
| excluded_use | Useful-heat substitution; universal quality/NCV/density; briquettes or loose sawdust; carbon neutrality, avoided disposal or recycling credits; treating an unmeasured candidate as observed factory data |
| required_metadata | All required qualifiers, raw collection protocols, actual plant/year/providers, inventory UUID limitations, complete upstream boundary, Q/Qc, cohort stock vectors and allocation decisions |
| required_quality_disclosure | Measured versus unknown values; identity and provider gaps; chemical/particle-size coverage; Q0 loads; historical WIP/FG provenance; service observation duration; uncertainty and source applicability |
| update_trigger | Changed feed source/species/treatment, deliberate additives, furnace/fuel or steam supply, die/cooling/packing/release gate, native flow restrictions or new physical/quality evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `coford-pellets-2007` | extension_guidance | [COFORD, Pieter D. Kofman (2007), The production of wood pellets, Processing/Products No.10, complete pp.1–6](https://www.coford.ie/media/coford/content/publications/projectreports/cofordconnects/ccnpellet_production.pdf) | Industrial stage topology; wet feed drying; steam conditioning and die action; cooling and fines return; startup oil and packaging counterexamples. Old technical-specification thresholds are not adopted. |
| `sca-pellets-production` | literature | [SCA, From by-product to efficient biofuel, production and additive-free sections, dated snapshot 26 October 2026](https://www.sca.com/en/renewable-energy/solid-biofuels/bioenergy-for-businesses/pellets/pellet-production/) | Manufacturer primary corroboration of sawdust-to-fuel-pellet terminal and no deliberate binder; observed biomass drying energy and exported heat are alternative arrangements, not gas-plant defaults or allocation rules. |
| `bordiga-pellets` | literature | [Bordiga, Pellet: raw material, drying, production line and supply forms, dated snapshot 26 October 2026](https://www.bordiga.it/en/pellet/) | Primary untreated virgin-solid-wood sawdust and packaged pellet supply evidence. Pine/spruce wording is inconsistent; no botanical species, advertised carbon neutrality, certification, bag mass or energy quantity is inferred. |
| `ncsu-energy-pellets-2013` | extension_guidance | [NC State Extension (published 2014-09-04; reviewed/revised 2024-05-22; body retains 2013 authoring context), Energy Pellets: A Heating Fuel Resource for North Carolina Farms and Homes, pelleting process, conditioning and pellet management](https://content.ces.ncsu.edu/energy-pellets-a-heating-fuel-resource-for-north-carolina-farms-and-homes) | Independent process explanation and variability of moisture, feedstock, conditioning, binder and fines management; farm-scale binder or moisture numbers are not industrial conifer-pellet defaults. |
| `ilcd-allocation-2010` | handbook | [European Commission JRC (2010), ILCD Handbook General guide for LCA, Detailed guidance, §§7.9.2–7.9.3, pp.255–272](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | Attributional modelling only where allocation is required: subdivision/virtual subdivision, exchange-specific determining physical causality and residual common-process market value at actual gate/state. Not a pellet recipe or numerical allocation factor. |
