---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-parings-and-scrap-of-rubber-except-hard-rubber-and-powders-and-granules-obtained-therefrom
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mechanically micronized black vulcanized EPDM manufacturing-scrap powder

## 1. Scope and Applicability

This attributional PCR covers one black fine powder mechanically recovered from source-segregated non-hard vulcanized EPDM manufacturing trim. The source rubber remains an entire supplied compound, including its original polymer, carbon black, mineral fillers, oils, cure residues and retained moisture. Start at the generating operation's actual segregated capture/collection interface, preserve attributable source history and include actual collection, transport, receiving, sorting, non-rubber removal, necessary coarse reduction, high-friction mechanical micronization, screening/internal oversize return, extraction, testing, bagging and original-cohort gate services. Buying completed powder for packing alone is not this recovery route.

The primary manufacturing evidence supports a transparent synthesis: Prismi describes pre-consumer vulcanized industrial scrap, EPDM powder and wholly mechanical impact pulverization; ASSCO independently describes technical EPDM scrap separation/grinding/sieving and packaging. They are not one SKU or one factory dataset. Granulate observations do not set powder batch size, storage wait, size distribution or yield. No site energy, recipe, purity, density, recovery fraction, emissions factor or replacement weight is provided. Powder fineness is one actual measured distribution against a declared receiver specification; loose scrap and granules are not interchangeable reference choices.

Exclude hard rubber, intact waste pneumatic tyres and tyre-derived rubber powder, virgin/uncured compounds, unknown mixed rubbish, cryogenic pulverization, chemical or intentional thermal/shear devulcanization, reclaimed plasticized rubber, coated/agglomerated granules, new compound manufacture, gaskets and installed surfaces. Crushing before a devulcanizing reactor does not establish this powder terminal. No liquid nitrogen, steam, boiler, solvent or onsite combustion is assumed. Every real additional operation and exchange requires its own evidence and atomic inventory.

Qc is only newly first-released net as-received powder after actual particle-size, composition, moisture and contamination acceptance, excluding packaging, removed contamination and separate free liquid. Qualifying closing FG is already included in Qc. Keep all failed/Q=0 and startup/shutdown/idle/cleanup activity. After release, retain original Qc and production vectors through real storage, handling, dispatch, returns and rework over declared observed horizon H. Gross physical dispatch V is reconciled separately; neither V nor H creates another production denominator. This is product-supply modelling; an actual separately supplied treatment/toll service has another function. Product flow identity is not legal end-of-waste, mapping or methodology approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-parings-and-scrap-of-rubber-except-hard-rubber-and-powders-and-granules-obtained-therefrom |
| classification_refs | CPC 3.0 39250; narrower manufacturing-scrap EPDM powder subset; mapping acceptance is separate |
| covered_products | One black mechanically micronized non-hard vulcanized EPDM compound powder from source-segregated pre-consumer manufacturing trim; actual declared particle-size grade |
| excluded_products | Hard rubber; intact used pneumatic tyres; tyre-derived powder; unknown mixed waste; virgin or uncured compound; reclaimed plasticized/devulcanized rubber; cryogenic powder; loose scrap or granules as reference output; coated or binder-agglomerated granules; finished gaskets or surfaces; toll treatment service |
| representative_product | Uncoated black vulcanized EPDM compound powder with one measured PSD and receiver specification; bagged ex works |
| production_route | Source genealogy and segregated capture → actual collection/inbound transport → receipt and material sorting → non-rubber separation and coarse reduction as needed → mechanical high-friction micronization → screening and internal oversize return → dust control and testing → first quality release and packing → original-cohort gate services |
| market_state | Secondary rubber-compound powder feedstock before new compounding or article manufacture; actual moisture and product/waste legal state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply recovered EPDM powder for a declared industrial compound/filler use |
| How much | 1 kg newly first-released net as-received powder |
| How well | One measured fine-powder PSD and accepted composition/moisture/contamination limits; not virgin EPDM equivalence |
| How long or cycle | One original first-release cohort Qc plus its declared observed gate-service horizon H |
| reference_flow_link | released_powder |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Rubber powder `6a27654a-125a-4038-9f0e-ff5c0581c819` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source manufacturer and trim-generation operation; black non-hard vulcanized EPDM compound identity; polymer and cure system with supplier formulation evidence; carbon black filler oil and additive subledger within whole scrap; non-tyre pre-consumer source segregation; actual traceable source condition and legal waste or product state; mechanical grinding and micronizing configuration without intentional devulcanization; one measured powder particle-size distribution and receiver limits; measured retained moisture and dry solids; contamination and actual intended-use acceptance tests; no added coating binder or flow-aid assumption; first-release lot register and original cohort Qc; gross tare and net weighing with uncertainty; opening and closing WIP exchange vectors; opening and closing FG original Qc and burden vectors; all failed and zero-output activity with actual rework genealogy; actual service horizon H and unobserved future scope; gross physical dispatch V and shipment reversals; separate six-leg ledger for every packaging construction; actual voltage country and supplier boundaries; source history and attributional recycling decision; separate capture disposal and final species releases; independently measured water and whole-compound mass balances; all native flow restrictions and provider compatibility |

All qualifiers must remain in dataset metadata, reference comments or equivalent consumer-visible context. All card descriptions, native restrictions and inherited section context remain normative.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_powder | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | kg | The reference is net as-received compound powder at first quality release, with retained moisture separately measured. Qc excludes all packaging, removed solids and separate free liquid. One Qc per original cohort; closing FG is not added again. |
| raw_units | all inventory rows | native row property | native row unit | Keep each raw numerator in its original unit until conversion and real attribution; use the sole section 8 per-reference result once. kWh-to-MJ is an energy conversion, not an emission factor. Integrated gas/liquid volumes are not multiplied by time; density belongs to the independently measured substance/state. |
| stocks_and_water | material and packaging balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | kg | Whole-compound mass, free moisture/water and relevant elements are independently measured. No reaction/structural-water formula, fixed density or one-residual fit for two unknowns is allowed. Per-item packaging/asset observations need actual measured article mass, not an inferred mass from a unit factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Known segregated non-hard vulcanized black EPDM trim at the generating manufacturer before recovery; retain source production history and actual collection interface |
| starting_condition_role | Foreground collection start; not a universal cradle or zero-burden cut-off |
| product_classification_scope | Narrow powder subset of CPC 3.0 39250; 39260 intact tyres and 36210 reclaimed rubber excluded |
| recursive_input_rule | Purchased already finished same-category powder has its own verified upstream vector; do not relabel packing it as recovery production or regenerate its source chain twice |
| upstream_dataset_requirement | Source formulation/material manufacture and trim-generation burden attributable under the declared recycling decision; actual collection transport; compatible purchased utilities and articles; each external treatment provider once |
| disclosure | Declared source point and value state; retained/excluded history with reason; complete production and original-cohort service periods; unresolved measurements and native/provider limits |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | entire foreground | Include generating-site segregated capture and collection work, contracted inbound service, receiving/weighing, sorting by EPDM formulation, actual metal/non-rubber separation, coarse reduction, mechanical micronization, screening/recirculation, extraction, testing, packing, first release and all original-cohort gate services. Declare real site/contract interfaces. Additional actual units and each physical input/output must be added individually; this minimum inventory is not a cut-off. | `prismi-production`; `prismi-mechanical`; `assco-granulate`; `ilcd-2010` |
| b_whole_compound | received_epdm; released_powder | Record each external scrap consignment once as the entire supplied vulcanized compound. Carbon black, polymer, filler, oil, cure residues and retained moisture stay in its non-additive composition subledger. No extra raw polymer or carbon black purchase is inferred; actual onsite added material must have its own specific atomic card and upstream boundary. No intentional devulcanization, solvent reclaiming, pyrolysis, new compounding or binder coating is included. | `prismi-production`; `prismi-epdm`; `toyota-recycling-2003` |
| b_source_history | received_epdm | Retain the actual generating route, formulation and previous burdens. Determine the attributional boundary from the real source condition, value/fee and secondary material at the zero-value border using ILCD Annex C. Identify the true joint process and exact allocated contributions; an untreated or Waste label, internal transfer, purchase price or recycling claim never alone proves zero upstream burden. Do not use factory manufacturing evidence as allocation authority. | `ilcd-2010` |
| b_cohort | p_recovery; p_gate | The unique production denominator is Qc, net powder newly passing the first complete quality release for the declared cohort. Qualifying closing FG already belongs to Qc; never add it again to production output. Q transfers from production to FG cancel at the combined gate. Keep opening/closing WIP by every exchange vector; do not average a partially finished lot into Qc. Failures, Q=0, startup/shutdown, idle and cleanup retain their real loads. | `ilcd-2010` |
| b_fg | p_gate | Retain opening FG historical vectors and its original Qc, closing FG, gross dispatch V, returned already released material, prior-dispatch reversal and real incremental rework/loss. Store service additions under original Qc for observed H; neither H nor gross V is a production denominator. Do not normalize old FG history by a new calendar cohort. Reinspection, dispatch and reworking a released lot cannot create new production. Mark unobserved future services explicitly. | `ilcd-2010` |
| b_water_air | all physical outlets | Use separate whole-compound mass, water and relevant measured element ledgers at production, FG and combined physical gates. Measure water loss and compound particulate loss independently; one residual cannot determine two unknowns. No chemical reaction is specified; retained moisture, incidental phase change, actual liberated water and structural water claims require separate evidence. Do not convert COD or VOC aggregate indicators into a named species mass. | `ilcd-2010` |
| b_outlets | all waste and elementary rows | For each actual mixed outlet choose the measured whole consignment with one receiver or reconciled non-overlapping source partitions; never add both. Contained constituents of transferred wastewater, spent filter or solid residue are not also final elementary releases here. Quantify actual final gases and particles by individual physical/chemical identity and receiving medium after controls. Retain unresolved species as gaps rather than a balancing catch-all. | `ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_recovery | Recovery through powder first release | required | Every scoped cohort including failed and Q=0 work | Integrated collection/sorting/reduction/micronization/screening/control/testing/packing account with stage records | released_powder |
| p_gate | Original-cohort FG and gate services | required | Actual post-release storage/handling/dispatch/returns within observed H | Physical FG and incremental burden account; preserve original Qc | gross_powder_dispatch |

Each conditional card requires occurrence evidence or a documented actual absence; missing data is not zero. Every actual additional material, fuel, refrigerant, gas species, packaging component or residue must be added separately. A whole mixed stream and its source partitions are non-additive. Full descriptions and all ancestor conditions are part of the consumer rule.

### Process: Powder recovery (`p_recovery`)

#### Inputs

##### Product flows

###### Production electricity (`production_electricity`)

Native Product is CN grid-average consumption mix supplied to the user below 1 kV. Use only a matching actual country, voltage and supply boundary. The native Net calorific value property is an energy basis here, not onsite fuel combustion. Preserve raw kWh and convert once to MJ; include drive motors, extraction, screening, handling, lighting and charger losses actually attributable to this phase, including idle, start/stop, failed runs and cleanup. A different electricity supply requires another compatible identity/provider.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Retain unnormalized raw quantities under cp_utilities_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Contracted inbound collection transport (`inbound_transport`)

Native Product is a generic road freight service by truck with Goods transport (mass*distance), not purchase of a vehicle. Record actual mass including attached packaging, distance, payload, empty legs, loading and collection coverage. Select one compatible provider for each segment; its vehicle fuel and emissions are upstream once. No truck size, fuel grade, emission standard, location or factor is fixed. Do not add the same transport already included in the scrap or service provider.

- Selected flow: Freight Truck `d55f1329-cd61-44c0-8000-9367d38d5634`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Retain unnormalized raw quantities under cp_transport_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Production cleaning and cooling water (`production_water`)

Native Product is water for industrial use with Mass/kg as its sole property; it specifies no treatment, purity, temperature or geography. Use only actual purchased industrial water with a compatible supplier boundary. This is conditional cleaning or indirect cooling makeup, not an assumed wet milling, boiler or steam process. Keep clean-side water physically separate from contaminated wash water. Weigh or convert volume with independently measured density at its actual state; no universal water density is supplied.

- Selected flow: Water for industrial use `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_utilities_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Bearing grease formulation (`bearing_grease`)

Conditional actual whole mineral-oil grease for bearings, with thickener and additives included once. Measure issue, returns, equipment hold-up, wear carryover and changeout; do not substitute solvent-wax lubricant or liquid oil. No fixed recipe or use rate.

- Selected flow: Mineral-oil lubricating grease formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_consumables; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `prismi-production`; `ilcd-2010`

###### Replacement cutting knife (`cutting_knife`)

Actual purchased finished steel knife; retain alloy, heat treatment, geometry and machining boundary. Count replacements and wear separately from original knives embodied in the line asset. Determine rubber-stream metal carryover independently; no assumed life or mass.

- Selected flow: Finished steel rubber-cutting knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_consumables; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `prismi-production`; `ilcd-2010`

###### Replacement dust filter cartridge (`dust_filter`)

Conditional supplied polyester-fibre filter cartridge as one whole assembly including its frame. Record capture system, actual replacement, retained dust and disposal. Embodied frame/fibre are not extra purchases. Any other filter medium requires another atomic identity.

- Selected flow: Polyester-fibre dust filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_consumables; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `prismi-production`; `ilcd-2010`

###### Installed grinding and micronizing line manufacture share (`line_asset`)

One actually supplied integrated mechanical line with declared shredding, separation, milling, sieving and extraction configuration. Retain installed net mass measured or from traceable weighing; use actual service activity and cumulative allocation over its life. Physical acquisitions, retirement and stocks remain separate from this cohort manufacturing-burden share; no guessed kg per machine. Exclude original components from replacement purchases.

- Selected flow: Mechanical rubber grinding and micronizing line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_assets; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prismi-production`; `ilcd-2010`

###### New production PE bag (`production_bag`)

Native Product is one supplied polyethylene bag at plant, CAS 9002-88-4, with Mass/kg only; no fixed capacity, thickness, PE density grade or geographic origin is specified. Use the actual complete PE bag with its supplied closure; a PP bulk bag, EVA bag or composite sack is a separate identity. Record new purchase separately from externally returned empty bags and internal reuse. Bag tare never enters net powder Q. The provider must cover the actual bag manufacture once; no resin procurement is added for embodied PE. This is new purchase P_p only; physical allocation to work-in-progress and finished stock is retained without treating reuse as another purchase.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p`
- Sources: `prismi-production`; `ilcd-2010`

###### New production wooden pallet (`production_pallet`)

Native Product is a wooden-board/slat pallet manufactured in a lumber mill with Mass/kg only. Its current electricity classification is anomalous; the preserved source classification concerns wood packaging, and basename, board/slat route, property and type consistently describe a physical wood pallet. Apply only to that supplied finished wood construction; no EURO size, timber species, treatment, capacity, mass per item or country is established. Confirm actual manufacturer/provider and reuse history. A plastic pallet is excluded. This is new purchase P_p only; physical allocation to work-in-progress and finished stock is retained without treating reuse as another purchase.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Batch-identification label purchase (`production_label`)

Conditional whole purchased paper label with supplied adhesive and printed identification. Record actual label construction and supply liner; do not separately buy embodied paper, adhesive or ink. Collect independent component masses for the packaging balance. An actual extra tie, wrap or strapping requires its own exchange.

- Selected flow: Self-adhesive paper batch-identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p`
- Sources: `prismi-production`; `ilcd-2010`

##### Waste flows

###### Segregated vulcanized EPDM manufacturing scrap (`received_epdm`)

Native Waste flow includes waste vulcanized rubber; its comments describe tyres as predominant rather than exclusive and also describe non-tyre rubber products. No fixed CAS, grade, treatment route, geographic origin or non-mass property is declared. This card is source-segregated black non-hard vulcanized EPDM manufacturing trim only, before recovery. Keep the whole compound with embedded carbon black, mineral filler, plasticizing oil, cure residues and measured moisture; these constituents are composition subaccounts, not additional purchases. Identify actual source and historical burden. A price does not turn the native Waste identity into a Product identity or establish zero burden.

- Selected flow: Waste rubber `e805d15a-3725-41ea-ba96-81c925f252de`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_receipt; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receipt`
- Sources: `prismi-production`; `ilcd-2010`

##### Elementary flows

#### Outputs

##### Product flows

###### First-released EPDM powder (`released_powder`)

Native Product identity is recycled rubber powder in a production mix at plant. It fixes no polymer grade, particle cutoff, CAS, technology or geography. Its 36220 classification placement is inconsistent with the otherwise explicit recycled-powder name, synonyms and comments; this is disclosed and does not authorize uncured compound or reclaimed plasticized rubber. Use only one separately specified black vulcanized EPDM powder with measured particle-size distribution, composition, moisture and receiver acceptance. No tyre-derived restriction or numerical performance factor is inferred. A compatible actual provider is still required. This is the sole reference row: Q is newly first-released net powder excluding packaging, removed contamination and free separate liquid. Keep actual retained moisture and measured particle-size acceptance. Qualifying closing FG is already in Q. Reinspection, shipping and returned previously released powder do not create Q again.

- Selected flow: Rubber powder `6a27654a-125a-4038-9f0e-ff5c0581c819`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `prismi-production`; `ilcd-2010`

###### External clean cooling-water return (`cooling_water_return`)

Only an actual external clean-side heat-exchanger return, weighed with measured temperature and physical state; declare inlet/outlet enthalpy and supplier water/energy boundary. It is not spent wash water, supplied steam condensate or a default heat credit. Internal recirculation cancels.

- Selected flow: Clean heated industrial cooling water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_utilities_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_p`
- Sources: `prismi-production`; `ilcd-2010`

##### Waste flows

###### Rejected EPDM compound powder (`offspec_powder`)

Native Waste flow includes waste vulcanized rubber; its comments describe tyres as predominant rather than exclusive and also describe non-tyre rubber products. No fixed CAS, grade, treatment route, geographic origin or non-mass property is declared. This card is actual rejected black non-hard vulcanized EPDM compound powder leaving recovery after failed or off-grade production. Keep the whole compound with embedded carbon black, mineral filler, plasticizing oil, cure residues and measured moisture; these constituents are composition subaccounts, not additional purchases. Identify actual source and historical burden. A price does not turn the native Waste identity into a Product identity or establish zero burden. Only EPDM material actually leaving this recovery boundary after failed/off-grade production. Keep internal oversize recycle and rework as internal transfers with inherited burdens; never purchase it again or count it as new Q. Distinguish this whole reject from separately captured dust.

- Selected flow: Waste rubber `e805d15a-3725-41ea-ba96-81c925f252de`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_residues_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Separated carbon-steel fragments (`separated_steel`)

Conditional actual ferrous contamination removed by the separator, with alloy/coating and rubber carryover tested. This scoped manufacturing scrap is not a tyre and does not imply tyre-cord yield. Separate saleable recovered steel from a waste-treatment stream by actual state and receiver; no automatic credit.

- Selected flow: Carbon-steel fragments separated from EPDM scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_residues_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Separated aluminium fragments (`separated_aluminium`)

Conditional actual non-ferrous separation with composition and rubber carryover measured. Do not treat all non-magnetic material as aluminium.

- Selected flow: Aluminium fragments separated from EPDM scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_residues_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Removed polypropylene film (`removed_pp`)

Conditional identified PP contamination; source packaging provenance and net removed film are measured. Other polymers need separate identities; not a generic plastics waste collection.

- Selected flow: Polypropylene film removed from EPDM scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_residues_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Removed silica sand (`removed_sand`)

Conditional mineral contamination only when composition confirms silica sand. Measure its moisture and attached rubber rather than force a balancing residual.

- Selected flow: Silica sand removed from EPDM scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_residues_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Captured EPDM dust for treatment (`captured_epdm_dust`)

Actual hopper/filter-cleaning capture of whole EPDM compound dust with embedded filler, oil and carbon black. Weigh dry/wet state and recipient. Product-grade recovered fines returning internally cancel; saleable separately specified powder requires its own Product outlet and allocation evidence. Captured dust is not an air emission or pure carbon black.

- Selected flow: Captured vulcanized EPDM-compound dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_residues_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Spent bearing grease (`spent_bearing_grease`)

Conditional whole spent grease with contamination measured, one treatment provider; distinguish leakage entering rubber or an actual environmental release.

- Selected flow: Spent mineral-oil lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_consumables; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `prismi-production`; `ilcd-2010`

###### Spent dust filter cartridge (`spent_dust_filter`)

Whole discarded cartridge with retained dust measured separately as composition. If retained dust is included in this outlet mass, do not also count it in captured_epdm_dust; independently removed hopper dust remains separate. One receiving provider for the whole cartridge.

- Selected flow: Spent polyester-fibre dust filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_consumables; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `prismi-production`; `ilcd-2010`

###### Discarded cutting knife (`worn_cutting_knife`)

Actual retired steel knife net of independently measured wear transferred to rubber/dust. Do not count full original and worn-out mass as consumption twice.

- Selected flow: Worn steel rubber-cutting knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_consumables; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `prismi-production`; `ilcd-2010`

###### Production PE bag waste (`production_bag_waste`)

Actual damaged incoming or production bag; record source partition and rubber residue. Distinguish material received attached to scrap from new bag purchases.

- Selected flow: Discarded polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Production pallet waste (`production_pallet_waste`)

Actual retired wood pallet including its real fasteners; keep prior-use burden and measured loss. No assumed per-turn pallet destruction.

- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Production label release liner waste (`production_label_liner`)

Conditional silicone-coated paper release liner from the actual label supply; include coating once and keep measured liner separate from label attached to FG. Add damaged labels as their own actual whole-paper-label waste stream when present.

- Selected flow: Silicone-coated paper label release liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Production cleaning wastewater transfer (`production_wastewater`)

Conditional actual mixed liquid consignment from cleaning, including suspended EPDM dust and dissolved constituents; measure whole mass, sample composition and one receiving treatment provider. Its contained water and pollutants are not also elementary emissions at this transfer. No COD-to-species conversion or unmeasured aqueous loss is assumed.

- Selected flow: EPDM-contaminated cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_residues_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Discarded whole paper label (`damaged_label_p`)

Conditional actual damaged/replaced label including adhesive, print and attached powder. Keep its paper-label mass distinct from siliconized liner; retained powder is composition, not another whole outlet.

- Selected flow: Discarded self-adhesive paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p`
- Sources: `prismi-production`; `ilcd-2010`

##### Elementary flows

###### Production EPDM particles to air (`production_air_particles`)

Record only actual final stack/fugitive release after controls. For particulate, retain compound composition and measured particle-size/receiving-medium evidence; it is neither pure carbon black nor total captured dust. Every other actually identified gaseous or liquid species needs a separate atomic card and measurement.

- Selected flow: Airborne vulcanized EPDM-compound particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_air_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_p`
- Sources: `prismi-production`; `ilcd-2010`

###### Production water vapour to air (`production_water_vapour`)

Conditional actual non-isotopic H2O vapour, CAS 7732-18-5, released to unspecified air; native type is Elementary and Mass/kg only. The broad synonym list also mentions liquid, ice and isotope aliases; those do not change this vapour-to-air use. Do not bind a water-compartment variant, purchased steam, wastewater or droplet-bearing particulate to this card. Determine actual water loss independently from other unknown losses; use the actual receiving compartment when known. No chemical reaction water or evaporation default is assumed. Record only actual final stack/fugitive release after controls. For particulate, retain compound composition and measured particle-size/receiving-medium evidence; it is neither pure carbon black nor total captured dust. Every other actually identified gaseous or liquid species needs a separate atomic card and measurement.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_air_p; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_p`
- Sources: `prismi-production`; `ilcd-2010`

### Process: Original-cohort gate services (`p_gate`)

#### Inputs

##### Product flows

###### Released powder transferred to FG account (`released_transfer`)

Native Product identity is recycled rubber powder in a production mix at plant. It fixes no polymer grade, particle cutoff, CAS, technology or geography. Its 36220 classification placement is inconsistent with the otherwise explicit recycled-powder name, synonyms and comments; this is disclosed and does not authorize uncured compound or reclaimed plasticized rubber. Use only one separately specified black vulcanized EPDM powder with measured particle-size distribution, composition, moisture and receiver acceptance. No tyre-derived restriction or numerical performance factor is inferred. A compatible actual provider is still required. This is the paired internal Q transfer carrying the full inherited exchange vector into the FG account, including qualifying closing FG. It cancels with released_powder at the combined physical gate; no second upstream provider or production is created.

- Selected flow: Rubber powder `6a27654a-125a-4038-9f0e-ff5c0581c819`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_fg; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `prismi-production`; `ilcd-2010`

###### Previously released same-grade powder returned (`returned_powder`)

Native Product identity is recycled rubber powder in a production mix at plant. It fixes no polymer grade, particle cutoff, CAS, technology or geography. Its 36220 classification placement is inconsistent with the otherwise explicit recycled-powder name, synonyms and comments; this is disclosed and does not authorize uncured compound or reclaimed plasticized rubber. Use only one separately specified black vulcanized EPDM powder with measured particle-size distribution, composition, moisture and receiver acceptance. No tyre-derived restriction or numerical performance factor is inferred. A compatible actual provider is still required. Only actual traceable still-compatible same-grade EPDM powder returned from outside, with its original cohort, shipment reversal, original burden and real incremental rework linked. Contaminated material is not silently reclassified as this accepted Product. Reinspection or reworking previously released material never creates new Q.

- Selected flow: Rubber powder `6a27654a-125a-4038-9f0e-ff5c0581c819`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_fg; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `prismi-production`; `ilcd-2010`

###### FG service electricity (`service_electricity`)

Native Product is CN grid-average consumption mix supplied to the user below 1 kV. Use only a matching actual country, voltage and supply boundary. The native Net calorific value property is an energy basis here, not onsite fuel combustion. Preserve raw kWh and convert once to MJ; include drive motors, extraction, screening, handling, lighting and charger losses actually attributable to this phase, including idle, start/stop, failed runs and cleanup. A different electricity supply requires another compatible identity/provider. Attribute actual incremental stock/handling/repacking/return activity to original Qc over declared horizon H; H is coverage time and never production quantity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Retain unnormalized raw quantities under cp_utilities_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_h`
- Sources: `prismi-production`; `ilcd-2010`

###### FG service cleaning water (`service_water`)

Native Product is water for industrial use with Mass/kg as its sole property; it specifies no treatment, purity, temperature or geography. Use only actual purchased industrial water with a compatible supplier boundary. This is conditional cleaning or indirect cooling makeup, not an assumed wet milling, boiler or steam process. Keep clean-side water physically separate from contaminated wash water. Weigh or convert volume with independently measured density at its actual state; no universal water density is supplied. Attribute actual incremental stock/handling/repacking/return activity to original Qc over declared horizon H; H is coverage time and never production quantity.

- Selected flow: Water for industrial use `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_utilities_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_h`
- Sources: `prismi-production`; `ilcd-2010`

###### Actual return transport service (`service_return_transport`)

Native Product is a generic road freight service by truck with Goods transport (mass*distance), not purchase of a vehicle. Record actual mass including attached packaging, distance, payload, empty legs, loading and collection coverage. Select one compatible provider for each segment; its vehicle fuel and emissions are upstream once. No truck size, fuel grade, emission standard, location or factor is fixed. Do not add the same transport already included in the scrap or service provider. Attribute actual incremental stock/handling/repacking/return activity to original Qc over declared horizon H; H is coverage time and never production quantity.

- Selected flow: Freight Truck `d55f1329-cd61-44c0-8000-9367d38d5634`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Retain unnormalized raw quantities under cp_transport_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport_h`
- Sources: `prismi-production`; `ilcd-2010`

###### New service PE bag (`service_bag`)

Native Product is one supplied polyethylene bag at plant, CAS 9002-88-4, with Mass/kg only; no fixed capacity, thickness, PE density grade or geographic origin is specified. Use the actual complete PE bag with its supplied closure; a PP bulk bag, EVA bag or composite sack is a separate identity. Record new purchase separately from externally returned empty bags and internal reuse. Bag tare never enters net powder Q. The provider must cover the actual bag manufacture once; no resin procurement is added for embodied PE. Only new service purchase P_h; internal reuse creates neither purchase nor new powder. Keep actual manufacture share separate from physical stock.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### Externally returned empty PE bag (`returned_empty_bag`)

Native Product is one supplied polyethylene bag at plant, CAS 9002-88-4, with Mass/kg only; no fixed capacity, thickness, PE density grade or geographic origin is specified. Use the actual complete PE bag with its supplied closure; a PP bulk bag, EVA bag or composite sack is a separate identity. Record new purchase separately from externally returned empty bags and internal reuse. Bag tare never enters net powder Q. The provider must cover the actual bag manufacture once; no resin procurement is added for embodied PE. Only physical external return received ER; identify original purchase and retained burden, plus incremental return/cleaning effort. Do not link a new-manufacture provider a second time. Attached returned-product packaging is separately identified in the same packaging ledger.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### New service wooden pallet (`service_pallet`)

Native Product is a wooden-board/slat pallet manufactured in a lumber mill with Mass/kg only. Its current electricity classification is anomalous; the preserved source classification concerns wood packaging, and basename, board/slat route, property and type consistently describe a physical wood pallet. Apply only to that supplied finished wood construction; no EURO size, timber species, treatment, capacity, mass per item or country is established. Confirm actual manufacturer/provider and reuse history. A plastic pallet is excluded. Only new service purchase P_h; internal reuse creates neither purchase nor new powder. Keep actual manufacture share separate from physical stock.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### Externally returned empty wooden pallet (`returned_empty_pallet`)

Native Product is a wooden-board/slat pallet manufactured in a lumber mill with Mass/kg only. Its current electricity classification is anomalous; the preserved source classification concerns wood packaging, and basename, board/slat route, property and type consistently describe a physical wood pallet. Apply only to that supplied finished wood construction; no EURO size, timber species, treatment, capacity, mass per item or country is established. Confirm actual manufacturer/provider and reuse history. A plastic pallet is excluded. Only physical external return received ER; identify original purchase and retained burden, plus incremental return/cleaning effort. Do not link a new-manufacture provider a second time. Attached returned-product packaging is separately identified in the same packaging ledger.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### Replacement batch label (`service_label`)

Actual whole supplied replacement paper label after first release; record adhesive/print once and the original label fate, with service attribution to Qc.

- Selected flow: Self-adhesive paper batch-identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Empty PE bag returned externally (`external_empty_bag_return`)

Native Product is one supplied polyethylene bag at plant, CAS 9002-88-4, with Mass/kg only; no fixed capacity, thickness, PE density grade or geographic origin is specified. Use the actual complete PE bag with its supplied closure; a PP bulk bag, EVA bag or composite sack is a separate identity. Record new purchase separately from externally returned empty bags and internal reuse. Bag tare never enters net powder Q. The provider must cover the actual bag manufacture once; no resin procurement is added for embodied PE. Only actual reusable packaging leaving to an external owner EO, separate from packaging S accompanying gross powder dispatch. Record remaining burden and actual return logistics; no automatic coproduct or avoided-purchase credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### Empty wooden pallet returned externally (`external_empty_pallet_return`)

Native Product is a wooden-board/slat pallet manufactured in a lumber mill with Mass/kg only. Its current electricity classification is anomalous; the preserved source classification concerns wood packaging, and basename, board/slat route, property and type consistently describe a physical wood pallet. Apply only to that supplied finished wood construction; no EURO size, timber species, treatment, capacity, mass per item or country is established. Confirm actual manufacturer/provider and reuse history. A plastic pallet is excluded. Only actual reusable packaging leaving to an external owner EO, separate from packaging S accompanying gross powder dispatch. Record remaining burden and actual return logistics; no automatic coproduct or avoided-purchase credit.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### Gross physical EPDM powder dispatch (`gross_powder_dispatch`)

Native Product identity is recycled rubber powder in a production mix at plant. It fixes no polymer grade, particle cutoff, CAS, technology or geography. Its 36220 classification placement is inconsistent with the otherwise explicit recycled-powder name, synonyms and comments; this is disclosed and does not authorize uncured compound or reclaimed plasticized rubber. Use only one separately specified black vulcanized EPDM powder with measured particle-size distribution, composition, moisture and receiver acceptance. No tyre-derived restriction or numerical performance factor is inferred. A compatible actual provider is still required. Gross V is actual net-content mass crossing the ex-works dispatch gate, possibly from opening FG and current first-release Qc and including repeat shipments. It is a physical output, not new production Q or an allocation denominator. Link every mass and burden to its original release cohort; subtract packaging tare and separately removed free liquid.

- Selected flow: Rubber powder `6a27654a-125a-4038-9f0e-ff5c0581c819`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_fg; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `prismi-production`; `ilcd-2010`

##### Waste flows

###### FG EPDM powder loss for treatment (`service_powder_loss`)

Native Waste flow includes waste vulcanized rubber; its comments describe tyres as predominant rather than exclusive and also describe non-tyre rubber products. No fixed CAS, grade, treatment route, geographic origin or non-mass property is declared. This card is actual post-first-release loss of black non-hard vulcanized EPDM compound powder from its original finished-goods cohort, sent for treatment. Keep the whole compound with embedded carbon black, mineral filler, plasticizing oil, cure residues and measured moisture; these constituents are composition subaccounts, not additional purchases. Identify actual source and historical burden. A price does not turn the native Waste identity into a Product identity or establish zero burden. Record the actual whole single stream, its state, original cohort and one receiver. Retain its composition subaccounts without also counting them as additional whole outlets or elementary releases. Physical loss and real incremental treatment/repacking belong to original Qc; no new Q is manufactured by returning or rejecting FG.

- Selected flow: Waste rubber `e805d15a-3725-41ea-ba96-81c925f252de`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_fg; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `prismi-production`; `ilcd-2010`

###### FG bag waste (`service_bag_waste`)

Record the actual whole single stream, its state, original cohort and one receiver. Retain its composition subaccounts without also counting them as additional whole outlets or elementary releases. Physical loss and real incremental treatment/repacking belong to original Qc; no new Q is manufactured by returning or rejecting FG.

- Selected flow: Discarded polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### FG pallet waste (`service_pallet_waste`)

Record the actual whole single stream, its state, original cohort and one receiver. Retain its composition subaccounts without also counting them as additional whole outlets or elementary releases. Physical loss and real incremental treatment/repacking belong to original Qc; no new Q is manufactured by returning or rejecting FG.

- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### FG label release liner waste (`service_label_liner`)

Record the actual whole single stream, its state, original cohort and one receiver. Retain its composition subaccounts without also counting them as additional whole outlets or elementary releases. Physical loss and real incremental treatment/repacking belong to original Qc; no new Q is manufactured by returning or rejecting FG.

- Selected flow: Silicone-coated paper label release liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

###### FG cleaning wastewater transfer (`service_wastewater`)

Record the actual whole single stream, its state, original cohort and one receiver. Retain its composition subaccounts without also counting them as additional whole outlets or elementary releases. Physical loss and real incremental treatment/repacking belong to original Qc; no new Q is manufactured by returning or rejecting FG.

- Selected flow: EPDM-contaminated cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_residues_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues_h`
- Sources: `prismi-production`; `ilcd-2010`

###### Discarded whole paper label (`damaged_label_h`)

Conditional actual damaged/replaced label including adhesive, print and attached powder. Keep its paper-label mass distinct from siliconized liner; retained powder is composition, not another whole outlet.

- Selected flow: Discarded self-adhesive paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_pack_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_h`
- Sources: `prismi-production`; `ilcd-2010`

##### Elementary flows

###### FG EPDM particles to air (`service_air_particles`)

Only actual final release during stock/handling/repacking/cleaning; keep each source, species or whole compound particle and receiving medium separate. Attribute incremental burden to original Qc, not gross dispatch V or H.

- Selected flow: Airborne vulcanized EPDM-compound particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_air_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `prismi-production`; `ilcd-2010`

###### FG water vapour to air (`service_water_vapour`)

Conditional actual non-isotopic H2O vapour, CAS 7732-18-5, released to unspecified air; native type is Elementary and Mass/kg only. The broad synonym list also mentions liquid, ice and isotope aliases; those do not change this vapour-to-air use. Do not bind a water-compartment variant, purchased steam, wastewater or droplet-bearing particulate to this card. Determine actual water loss independently from other unknown losses; use the actual receiving compartment when known. No chemical reaction water or evaporation default is assumed. Only actual final release during stock/handling/repacking/cleaning; keep each source, species or whole compound particle and receiving medium separate. Attribute incremental burden to original Qc, not gross dispatch V or H.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unnormalized raw quantities under cp_air_h; use the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `prismi-production`; `ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | all shared operations | This is attributional product-supply modelling. First assign dedicated collection, sorting, milling, capture, packaging, testing and services to their actual function, using independent metering or justified virtual subdivision. Waste-treatment services and saleable separated outputs are distinct functions where actually present; do not rename a toll service as powder supply. | `ilcd-2010` |
| a_causality | remaining shared exchanges | For each remaining shared exchange determine the physical relationship that actually causes its quantity: material lineage, independently metered work, real size-reduction work or another demonstrated driver as appropriate. Test that relationship exchange by exchange. A total mass share, electricity share or price share is not automatically causal; never apply one arbitrary split to all exchanges. | `ilcd-2010` |
| a_residual | genuinely inseparable residual | Only when subdivision and determining physical causality leave a genuine residual, allocate that residual using contemporaneous market values of the actual co-functions in their exact technical state at the common process boundary, including an actual treatment-service fee when relevant. Document why earlier steps cannot resolve it, price/quantity periods and sensitivity. Never import a fixed recycling rate, substitution credit or choice between arbitrary physical/economic options. | `ilcd-2010` |
| a_material_history | source and recycled inputs | Apply the declared Annex C recycling decision to the true joint process and actual source value state. For a positive-value generated scrap, document upstream co-production attribution; for a negative-value input, identify actual treatment and interface that crosses the zero-value border before assigning histories. Any justified zero contribution is a conclusion with evidence and matching paired boundary, never a preset for untreated material. Do not assume the example multi-loop recovery rates or number of uses. | `ilcd-2010` |
| a_reuse | internal returns; FG; packaging | Internal oversize return, reusable packaging and previously released returned powder retain their original vectors. Count only actual incremental regrinding, cleaning, handling and losses once; retain shipment reversals. No material is purchased twice because it circulates, and no reuse event creates a coproduct or negative inventory credit. Shared assets use documented lifetime activity shares whose cumulative attribution is checked. | `ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collect unnormalized raw records only. The aggregation_rule field below names the destination reporting basis; it does not instruct division in collection. Preserve row/stage/cohort and original-unit ledgers, convert actual units and allocate real burdens before the one final division. Protocols shared across phases retain separate phase partitions; never pool an old cohort into a new cohort denominator.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receipt | p_recovery | received_epdm | source and weighing records | generator; operation; polymer/cure/formulation; whole gross and tare; material state; composition; moisture; contamination; legal state; source value and fee; upstream exchange vector; collection interface | Use calibrated holder/receipt scales and representative composition/moisture sampling with supplier formulation genealogy. Keep whole material and packaging separate; retain carbon black/filler/oil only as constituents of the whole compound. Reconcile source segregation and actual transport interfaces. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each consignment | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_release | p_recovery | released_powder | first-release tests and weighing | lot; first release id and time; prior-release flag; net powder; bag/label/pallet tare; actual PSD; method/sieve apertures; moisture/dry solids; contamination; receiver limits; acceptance decision; Qc | Calibrated net weighing and representative sieve/particle-size and moisture tests on the actual finished powder; use the recorded receiver agreement and cure/polymer genealogy. Resolve conditional acceptance before Qc. No constant purity, PSD, bulk density or factory rate is supplied. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each first-release lot | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_utilities_p | p_recovery | electricity; industrial water; clean external water return | phase meters | stage; cohort; meter; beginning/end; raw unit; actual rate/time; voltage and country; supplier boundary; cleanup/idle/failure; water temperature and state; independently measured density; clean-loop stock; return mass and enthalpy | Meter production separately by stage and reconcile bills. Retain integrated readings distinctly from rates. Measure cooling makeup, losses, purge and actual external clean return independently; preserve supplier water/heat agreement. Electric indirect cooling does not imply liquid nitrogen, steam, boiler or combustion. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | MJ; kg | each stage interval | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_pack_p | p_recovery | each PE bag; each wooden pallet; each paper label; each liner; each actual additional packaging article | individual packaging ledger | packaging construction; empty/WIP-attached/FG-attached/reusable opening and closing; new P; external return received ER; inbound attached packaging; S accompanying gross dispatch; external return out EO; waste W; internal reuse; independent component mass; damage; original burden | Count and weigh each construction separately in production. Reconcile receipts, inventories and every departure including returns; measure kg per item only from actual representative article weighing. New manufacture burden and incremental reuse effort are distinct from physical reuse. Never set returned packaging equal to new purchases. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each movement and stocktake | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_residues_p | p_recovery | each actual separated solid; captured dust; cleaning wastewater | weighing sampling and transfer | outlet; source partitions; whole mass; retained water; independently measured composition; source cohort; captured versus final release; treatment or sale state; recipient; provider coverage; stock changes | Weigh each whole actual outlet and sample relevant solids/liquids; retain tare, moisture and actual receiver. Captured dust and dust still attached to spent filter are disjoint physical masses. For wastewater keep whole transfer and constituent subledger; verify any final discharge independently. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each outlet event and stocktake | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_air_p | p_recovery | actual compound particles; actual water vapour; each additionally identified gas species | source-specific emission measurements | source; species or compound identity; particle size; medium; control; concentration; independently measured sampled total volume or actual flow rate/time; temperature/pressure/moisture; final release; uncertainty | Measure actual final emissions after controls with source-specific sampling. Multiply concentration by a compatible integrated volume once; integrate only actual rates and do not multiply integrated gas/liquid volume by time again. Independently measure water loss and compound dust. Particle size totals and subfractions are non-additive; no automatic VOC species or carbon-black emission. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each monitored source and interval | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_utilities_h | p_gate | electricity; industrial water; clean external water return | phase meters | stage; cohort; meter; beginning/end; raw unit; actual rate/time; voltage and country; supplier boundary; cleanup/idle/failure; water temperature and state; independently measured density; clean-loop stock; return mass and enthalpy | Meter FG services separately by stage and reconcile bills. Retain integrated readings distinctly from rates. Measure cooling makeup, losses, purge and actual external clean return independently; preserve supplier water/heat agreement. Electric indirect cooling does not imply liquid nitrogen, steam, boiler or combustion. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | MJ; kg | each stage interval | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_pack_h | p_gate | each PE bag; each wooden pallet; each paper label; each liner; each actual additional packaging article | individual packaging ledger | packaging construction; empty/WIP-attached/FG-attached/reusable opening and closing; new P; external return received ER; inbound attached packaging; S accompanying gross dispatch; external return out EO; waste W; internal reuse; independent component mass; damage; original burden | Count and weigh each construction separately in FG services. Reconcile receipts, inventories and every departure including returns; measure kg per item only from actual representative article weighing. New manufacture burden and incremental reuse effort are distinct from physical reuse. Never set returned packaging equal to new purchases. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each movement and stocktake | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_residues_h | p_gate | each actual separated solid; captured dust; cleaning wastewater | weighing sampling and transfer | outlet; source partitions; whole mass; retained water; independently measured composition; source cohort; captured versus final release; treatment or sale state; recipient; provider coverage; stock changes | Weigh each whole actual outlet and sample relevant solids/liquids; retain tare, moisture and actual receiver. Captured dust and dust still attached to spent filter are disjoint physical masses. For wastewater keep whole transfer and constituent subledger; verify any final discharge independently. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each outlet event and stocktake | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_air_h | p_gate | actual compound particles; actual water vapour; each additionally identified gas species | source-specific emission measurements | source; species or compound identity; particle size; medium; control; concentration; independently measured sampled total volume or actual flow rate/time; temperature/pressure/moisture; final release; uncertainty | Measure actual final emissions after controls with source-specific sampling. Multiply concentration by a compatible integrated volume once; integrate only actual rates and do not multiply integrated gas/liquid volume by time again. Independently measure water loss and compound dust. Particle size totals and subfractions are non-additive; no automatic VOC species or carbon-black emission. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each monitored source and interval | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_consumables | p_recovery | bearing_grease; cutting_knife; dust_filter; corresponding retired streams | issue maintenance and stock records | whole supplied formulation/article; beginning and ending stock/hold-up; purchases; issues; returns; replacements; independent wear; attached dust; real leakage; original installed components; receiver | Reconcile each formulation/article using actual maintenance, weighing and chemical/composition evidence. Whole supplied grease is purchased once; water/oil/additives are constituents. Include real service-stage replacement with its own phase attribution if it occurs. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each issue/replacement and stocktake | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_assets | p_recovery | line_asset | physical asset and life-activity ledger | line configuration; manufacture scope; measured net installed kg; acquisitions and retirement; beginning/ending physical stock; service activity by cohort; original and cumulative burden shares; replacement exclusions | Use calibrated equipment weighing or traceable supplier weighing for the same configuration. Determine actual service shares from justified metered work and lifetime records; keep physical mass stock separate from amortized manufacture burden. No concrete mass or lifetime is invented. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg | each asset event and allocation interval | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_wip | p_recovery | every material and exchange burden | WIP genealogy and vector ledger | opening/closing WIP lot; physical mass/composition/moisture; state and completion; each inherited raw exchange vector; source and target cohort; failures; internal oversize and rework; independent measurement uncertainty | Stocktake unfinished lots and trace every exchange vector through real stage transfers. Preserve inherited historical burdens and current additions separately, subtract closing WIP by the same vector basis and identify actual non-reference destinations. No blanket completion percentage or net-current-purchase proxy. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg; row-native units | each stage transfer and period closure | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_fg | p_gate | released_transfer; returned_powder; gross_powder_dispatch; service_powder_loss | FG cohort physical and burden ledger | opening FG; original Qc; paired Q transfer; gross dispatch V; closing FG; external returned powder; prior shipment reverse; real rework; loss; original exchange vector; incremental service vector; H; future unobserved activities | Calibrated gross/tare/net consignment weighing and linked lot/shipment/return records. Keep original production burden once and append actual incremental services; do not reacquire original burden for an internal transfer. Previously released powder retains its original Qc regardless of repeated inspection or shipment. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | kg; row-native units | each stock/dispatch/return event and period closure | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_transport_p | p_recovery | inbound_transport; service_return_transport | actual leg and provider records | cohort; physical leg; actual gross payload; distance; empty running; loading; provider coverage; receipt and return identifiers | Use actual route/ticket records and a compatible freight provider. Separate production inbound and original-cohort service-return legs. Add source collection work outside the provider only once; no default distance or fuel factor. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | t*km | each actual trip | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_transport_h | p_gate | inbound_transport; service_return_transport | actual leg and provider records | cohort; physical leg; actual gross payload; distance; empty running; loading; provider coverage; receipt and return identifiers | Use actual route/ticket records and a compatible freight provider. Separate production inbound and original-cohort service-return legs. Add source collection work outside the provider only once; no default distance or fuel factor. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | t*km | each actual trip | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_attribution_p | p_recovery | source history and shared exchanges | method and value evidence | true joint process; point-of-origin condition; actual price or treatment fee; interface that crosses the zero-value border; source and receiver system boundaries; dedicated and virtual subdivision; exchange-specific determining driver; remaining residual; contemporaneous common-gate prices/quantities; uncertainty | Record the actual Annex C recycling boundary and section 7 hierarchy with independently supported causal/market evidence. Separate factory process proof from allocation justification. Preserve alternative sensitivity and all unresolved source-history gaps. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | row-native units | each source/route and allocation revision | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |
| cp_attribution_h | p_gate | source history and shared exchanges | method and value evidence | true joint process; point-of-origin condition; actual price or treatment fee; interface that crosses the zero-value border; source and receiver system boundaries; dedicated and virtual subdivision; exchange-specific determining driver; remaining residual; contemporaneous common-gate prices/quantities; uncertainty | Record the actual Annex C recycling boundary and section 7 hierarchy with independently supported causal/market evidence. Separate factory process proof from allocation justification. Preserve alternative sensitivity and all unresolved source-history gaps. Collect unnormalized raw records only; final basis is stated in aggregation_rule. | row-native units | each source/route and allocation revision | Complete production and original-cohort observed H including failures and no-output intervals | Named generator/recovery site and each actual contracted interface; same original cohort | per 1 kg reference flow | Calibration; original units; tickets and signed lot logs; uncertainty; independent sampling; gap/absence evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | Keep the raw unit. Convert kWh to MJ by 3.6 and transported kg*km to t*km by 0.001. Convert gas/liquid volume to mass only with independently measured density for that substance/formulation and measured state. Integrate actual rates once; a total volume or total energy is already integrated. | raw_readings; state_measurements; cp_utilities_p; cp_utilities_h; cp_transport_p; cp_transport_h; cp_air_p; cp_air_h | converted_raw_totals | `ilcd-2010` |
| production_vectors | all inventory rows | For each exchange i and cohort retain inherited opening WIP plus converted current additions and attributed source history; remove closing WIP and proven transfers to other functions on the same vector basis. Apply section 7 subdivision and exchange-specific attribution before normalization. Preserve separate failure/start-stop/idle/cleanup ledgers and all actual internal rework transfers; cancel paired internal transfers. | converted_raw_totals; opening_WIP_vectors; closing_WIP_vectors; cp_wip; cp_attribution_p; cp_attribution_h | attributed_production_vectors | `ilcd-2010` |
| physical_gates | all material rows | For production: opening WIP + actual external material entries = closing WIP + newly first-released Qc + real external material exits, with paired rework transfers separately reconciled. For FG: opening FG + paired Qc + actual external returned powder = closing FG + gross physical V + actual material losses, with paired internal rework separately reconciled. Combine by cancelling the Qc and internal rework transfers. Whole-compound mass, water and measured element balances are independent; packaging and assets have their own physical ledgers. An extra real entry or exit appears exactly once on its actual side, not as a residual duplicate. | cp_receipt; cp_release; cp_wip; cp_fg; cp_residues_p; cp_residues_h | physical_gate_reconciliation | `ilcd-2010` |
| packaging_ledger | all packaging rows | For each physical packaging construction: opening empty/WIP-attached/FG-attached/reusable + external acquisition P + external return received ER = closing empty/WIP-attached/FG-attached/reusable + S accompanying gross physical dispatch + EO external return out + waste W. Identify incoming attached packaging within its actual P or ER receipt partition exactly once; acquisition within a whole supplied consignment does not create another manufacture purchase. Internal reuse and transfers cancel. PE bag, wood pallet, paper label and liner stay separate; supplier whole-label mass and its component split are non-additive. New manufacture and incremental reuse effort are separate from this physical equation. | cp_pack_p; cp_pack_h | individual_packaging_reconciliation | `ilcd-2010` |
| cohort_vectors | all inventory rows | For original release cohort c preserve its attributed production vector once, including the portion already in closing FG; add only actual incremental service/rework/treatment vectors observed within H to the same c. Keep historical opening-FG vectors with their own Qc and reverse the original shipment attribution for actual returns. Do not add paired internal Q transfer as another production burden. The resulting unnormalized exchange vector is A_i_c. H is coverage time; V is gross physical dispatch. | attributed_production_vectors; cp_fg; cp_attribution_p; cp_attribution_h; cp_utilities_h; cp_pack_h | A_i_c | `ilcd-2010` |
| per_reference | all inventory rows | For Qc > 0 calculate x_i_c = A_i_c / Qc exactly once. A_i_c is the converted and attributed raw numerator for exchange i of original first-release cohort c; Qc is that cohort newly first-released net as-received powder mass in kg. Flow-card amount instructions and protocol aggregation labels refer to this one result; they perform no other division. For Qc = 0 retain A_i_c and physical stocks with the failed/unreleased lot and report no unit result. | A_i_c; Qc; cp_release | x_i_c | `ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_origin | received_epdm | Retain generating-site operation, formulation and cure evidence, source segregation and real value/fee history; no isotope, virgin polymer, tyre-only or hard-rubber substitution. | supplier declarations and source records |
| dq_acceptance | released_powder | Require actual PSD, moisture, contamination and receiver tests for one declared powder grade. No public marketing percentage or example batch size is a foreground measurement. | calibration and representative sampling records |
| dq_all_activity | all inventory rows | Cover complete declared production and cohort service horizons with failed, Q=0, startup/shutdown, idle, cleaning and rework periods; retain opening/closing WIP and FG vectors, physical stocks and uncertainty. | time logs and stock/lot genealogy |
| dq_native | all UUID-bearing rows | Retain full native descriptors and a compatible actual provider: origin, route, grade, form, geography, medium, type and every property. An isolated classification anomaly is disclosed; a real physical contradiction rejects the binding. | complete identity and supplier compatibility evidence |
| dq_gaps | conditional and unresolved rows | Record each actual occurrence or evidenced absence. Missing measurements and auxiliary UUIDs remain explicit; do not replace an exchange with a plural collection, zero, invented factory value or another chemical. Add every actual additional species/material separately. | occurrence/absence register and gap plan |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference product and feed | Require source-segregated non-hard vulcanized black EPDM manufacturing scrap and one mechanically micronized powder with actual PSD and receiver tests. Reject tyre sourcing, hard rubber, raw/uncured polymer, chemically reclaimed rubber, powder/granule selectors or arbitrary grade equivalence. Each confirmed UUID must satisfy all its native physical, route, state, type, unit and provider restrictions, not classification/name alone. | `prismi-production`; `prismi-epdm`; `un-cpc-3-2025` |
| v_basis | all inventory rows | Check original units and real rate integration before attribution and one final division by original Qc. First-release closing FG is already in Qc. Keep service H, gross V, shipment reversal, opening/closing WIP and FG vectors consistent across both languages and all gates. With Qc=0 retain actual burdens and report no per-unit result. | `ilcd-2010` |
| v_closure | physical ledgers | Close physical compound, water, relevant element and each individual packaging ledger independently with stated measurement uncertainty. No forced residual can simultaneously fill moisture and dust loss, omitted species, missing stocks or an unrecorded extra material. Keep transferred whole mixtures and non-additive composition partitions consistent with one provider. | `ilcd-2010` |
| v_evidence | dataset | Retain complete primary evidence, actual foreground records, calibrated instruments, all conditional occurrence/absence decisions and gaps. Marketing percentages, catalogue pack capacities and example methods are not site values. Engineering checks do not establish scientific, translation, classification-mapping or publication approval. | `ilcd-2010`; `prismi-services` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | One actual recovered EPDM powder supply for compatible industrial compounding/filler use with verified grade and provider |
| allowed_use | Declared attributional source route, actual measured PSD and composition, first-release Qc and observed service H with retained histories |
| excluded_use | Universal CPC coverage; virgin EPDM substitution; tyre treatment; devulcanized rubber; unspecified powder/granule choice; guaranteed recycled fraction or credit; unobserved future activities |
| required_metadata | All reference qualifiers; source and route; geography and period; supplier and native restrictions; reference cohort and stocks; every conditional occurrence; external treatment scope |
| required_quality_disclosure | Scientific and translation review state; gaps and uncertainty; foreground coverage; retained/excluded histories; allocation evidence; actual utility and packaging construction; failed and Q=0 activity; observed H versus future scope |
| update_trigger | Changed source formulation or cure; route or equipment; PSD/receiver specification; provider/utility state; recycling value interface; monitoring or packaging; material findings |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD CPC Version 3.0 Structure and Explanatory Notes (30 June 2025), subclass 39250 and adjacent 39260; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification boundary includes powders/granules from non-hard rubber scrap; it does not define a recycling technology or approve a mapping. |
| prismi-production | handbook | Prismi, Recycled Rubber Production: Granules, Powders and Acoustic Rolls, undated; https://www.prismi.it/en/recycled-rubber-production/ | Primary pre-consumer vulcanized industrial scrap and EPDM powder production; sorting by compound and distinction from granules/rolls. Qualitative process evidence only. |
| prismi-mechanical | handbook | Prismi, Fine rubber powder SBR EPDM NBR HS65 CR IIR, undated; https://www.recycled-rubber-powder.com/ | Wholly mechanical high-friction impact pulverization; no adopted advertised surface area, reuse fraction, cost saving or site energy factor. |
| prismi-epdm | handbook | Prismi, Micronized EPDM Rubber Powder, undated; https://www.recycled-rubber-powder.com/portfolio/epdm-rubber-powder/ | Black EPDM micronized powder identity and variable compound formulation; no adopted promotional test percentages, monomer fraction or unaccessed data sheet. |
| prismi-services | handbook | Prismi, Rubber recycling service into fine rubber powder, undated; https://www.recycled-rubber-powder.com/rubber-recycling-services/ | Laboratory particle-size/density analyses and logistics/toll-service distinction. No supplier login-only specification is assumed. |
| assco-granulate | handbook | ASSCO, EPDM rubber granulate, undated; https://www.asscorecycling.cz/epdm-crumb-rubber | Independent technical-production scrap route comparator for separation, grinding, sieving and PE bag supply; granulate batch size, waiting period, size grades and pack capacities are not powder defaults. |
| toyota-recycling-2003 | literature | Fukumori and Matsushita, Material Recycling Technology of Crosslinked Rubber Waste, Toyota CRDL R&D Review 38(1), 2003, pp.39–46; https://www.tytlabs.co.jp/en/english/review/rev381epdf/e381_039fukumori.pdf | Counterevidence: crushing precedes reactive devulcanization and reclaimed rubber; mechanical powder alone is not that terminal product. No reaction settings or yields are imported. |
| ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA: Detailed guidance, first edition March 2010, sections 7.9.2–7.9.3 and Annex C 14.2–14.4; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining physical causality and genuine residual market allocation; recycling source-history boundary and methodological collection/accounting requirements. No fixed recovery rate or substitution credit. |
