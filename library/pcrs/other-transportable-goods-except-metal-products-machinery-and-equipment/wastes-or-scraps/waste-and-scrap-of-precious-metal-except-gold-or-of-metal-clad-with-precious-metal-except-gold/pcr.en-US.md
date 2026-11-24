---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-precious-metal-except-gold-or-of-metal-clad-with-precious-metal-except-gold
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Source-segregated solid silver-copper sheet-fabrication offcuts for refining

## 1. Scope and Applicability

This PCR covers only clean solid offcuts from cold mechanical cutting of one identified uncoated silver-copper alloy sheet lot into jewellery blanks, followed by actual necessary source segregation, foreign-object removal, weighing and first acceptance as feed for a specified refinery. Retain original sheet and joint manufacturing burden history; this is not purchased finished-scrap packing. Morris and Watson documents sterling sheet supply, guillotine cutting of plate/sheet and its own clean plate-offcut reception; its alloy information identifies STG-925 separately from palladium-bearing sterling. These primary sources support a qualitative shear-route synthesis, not a measured batch BOM. Full Ag/Cu/other-element assay, temper, thickness, actual cold-shear configuration, absence of solder/coating and receiver approval must be established for the selected lot. The trade name alone proves neither copper content nor virgin/recovered origin. Brepohl independently supports segregated sheet-fabrication scrap, weighing and rigid containers. `mw-plate`; `mw-alloys`; `mw-terms`

Exclude intentional gold/gold-clad scrap (39331), precious-metal ash (39333), filings, grinding/polishing dust, sweeps, sludge, liquids, clad/plated material, PGM feed, mixed-source scrap, casting sprues and post-consumer jewellery, and any refining, smelting, pickling, burning, granulation or ingot terminal as the reference product. Reusable sheet remnants are not automatically scrap products. A supplier 925 example is not a universal fineness. No default silver content, recovery yield, density, substitution credit or zero historical burden is supplied. A different physical preparation or thermal/chemical route needs evidence and scope review. `un-cpc3-2025`; `mw-plate`; `mw-scrap`; `mw-separation`; `brepohl-scrap`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-precious-metal-except-gold-or-of-metal-clad-with-precious-metal-except-gold |
| classification_refs | CPC 3.0:39332, accepted narrower silver-copper sheet offcut scope under docs/adr/2026-11-21-accept-cpc-39332-silver-copper-sheet-offcuts-for-refining.md |
| covered_products | Clean solid offcuts from one identified uncoated Ag-Cu sheet-fabrication lot first released to specified refinery-feed requirements |
| excluded_products | Gold scrap; ash; filings/sweeps/dust/sludge/liquids; plated/clad/PGM feed; mixed origins; casting sprues; post-consumer jewellery; refined silver ingots |
| representative_product | Source-segregated solid silver-copper sheet-fabrication offcuts for refining |
| production_route | Whole alloy sheet receipt -> layout and actual cold cutting into blanks/offcuts -> source segregation/actual foreign-object removal -> net weighing and composition identity -> first refinery-feed acceptance |
| market_state | Solid unrefined feed; whole-alloy mass basis; actual later service in original-cohort accounts |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and first acceptance of solid silver-copper sheet offcuts for specified refinery feed |
| How much | 1 kg net whole offcuts at first release |
| How well | Actual composition, origin, form and specified receiver acceptance; no default purity or recovery promise |
| How long or cycle | One declared manufacturing cohort; later service uses original Q_c and actual H without an assumed life |
| reference_flow_link | `released_offcuts` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Source-segregated solid silver-copper sheet-fabrication offcuts for refining |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | single source sheet lot and traceability; one fixed declared Ag-Cu grade with complete alloy assay and no intentional gold PGM solder or coating; actual manufacturer and any outsourced cutter with physical handoff/custody and ownership records; sheet temper and thickness matched to the actual cold-shear configuration; solid offcut form distinct from filings ash and sweeps; original cold-cutting configuration and joint blank gate; actual segregation and foreign-object removal; specified receiver requirements and unique lot first-acceptance id; tare-corrected whole net kg and sole Q; opening and closing raw WIP and FG stocks with inherited per-exchange vectors; exchange-specific allocation gate state period and justification; site country and actual energy supplier; original cohort Q_c and actual service H; complete six-leg pool and upstream owner for each packaging material; each real waste species and destination |

All qualifiers belong in the actual foreground package and this reference exchange complete description. The declared product name does not broaden product applicability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_release weighs net whole Q once for unique first-accepted lots; packaging, removed foreign material and unreleased stock do not enter Q. Not contained-silver kg or dispatched kg. |
| native_units | all inventory rows | actual row extensive property | row-specific | Retain native dimensions; g to kg once and kWh to MJ once. Integrate genuine rates only; integrated volume is not multiplied by time. Mass/volume conversion needs independent density for that substance and actual state; no water default or guessed item mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of identified whole uncoated Ag-Cu alloy sheet and its compatible upstream history |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | Narrow solid non-gold Ag-Cu sheet offcuts within 39332; not the entire leaf |
| recursive_input_rule | Purchased already-prepared same-category offcuts do not create new manufacturing Q. Internal recirculation transfers quantity/history and cancels; external history keeps actual upstream ownership. Returned released lots keep original cohort. |
| upstream_dataset_requirement | Actual sheet composition/form and mining/recovery/refining/alloying/rolling chain; one compatible provider for each whole preparation/container/tool and actual energy/freight |
| disclosure | Actual scope, site, period, lot, steps, acceptance gate, failures/Q0, all stock vectors, physical/burden distinction, allocation, packaging, providers and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_origin | whole manufacturing chain | Include receipt and storage of one identified uncoated Ag-Cu sheet lot with inherited upstream sheet burdens; layout and actual cold mechanical cutting into jewellery blanks and offcuts; segregation of this solid offcut stream; actual foreign-object removal; weighing/assay/identity checks and first acceptance to the specified refinery-feed requirements. Retain all real utilities, tooling, failures, start/stop, idle, cleanup, samples and rework. A purchased ready-to-refine scrap lot merely packed does not fulfil this manufacturing scope. Use actual shearing records; the manufacturer documents guillotine-cut sheet, not a universal punch/die route. | `mw-scrap`; `brepohl-scrap`; `jrc-ilcd-2010`; `mw-plate`; `mw-alloys`; `mw-terms` |
| sb_upstream | each purchased whole material | Use one compatible upstream owner for sheet mining/recycled-feed recovery, refining, alloying, rolling and actual supply transport. Purchase the whole alloy once; Ag/Cu assay fractions are analytical subaccounts, not second purchases. Same rule applies to each supplied can or lubricant preparation. Actual onsite mixing instead records each purchased ingredient, mixing energy and losses separately. No zero historical burden because a material is called scrap. | `jrc-ilcd-2010` |
| sb_gate | manufacturing and finished stock | Record actual manufacturer, any outsourced cutter, dispatch/receipt documents and custodian/beneficial owner at each handoff; material-owner transfers and resale never generate a new Q. Receiver delivery acceptance and legal settlement are distinct events, and no later refined-metal output enters Q.  Q is net whole accepted offcut mass first released for the specified receiver, excluding all containers and removed foreign objects. Record unique release ids. Closing FG already released is included in Q; never add closing FG beside Q as another manufacturing output or deduct its manufacturing burden. Internal release handover cancels in consolidation. Reinspection, shipment, return and rework do not produce a second Q. Rejected or unaccepted offcuts remain WIP/waste with their complete history. | `mw-scrap`; `brepohl-scrap`; `jrc-ilcd-2010`; `mw-terms` |
| sb_service | post-release cohort | Keep actual storage, handling, packing, dispatch and permitted further work in a distinct original-cohort service account with original Q_c and observed horizon H; H is never a production denominator. Do not subtract performed services for closing FG. Retain full historical manufacturing vectors for opening/closing FG and returned lots. No assumed transport distance, machine life, holding time or repair success. Net-delivery normalization is outside this first-release basis. | `jrc-ilcd-2010` |
| sb_stocks | each exchange and cohort | Preserve opening/closing raw stock, WIP and unused/unassigned charges in each original extensive unit and their inherited per-exchange burden vectors. A recorded consumption already corrected for stock is not stock-corrected twice. Include every failed and zero-output event; Q=0 retains loads and produces no unit result. Internal reuse transfers both physical quantity and historical vector, cancels internal legs and retains real reprocessing energy/loss. | `jrc-ilcd-2010` |
| sb_physical | cutting preparation FG and consolidated gates | Keep full unallocated gross physical V distinct from attributed burden A. Close total physical mass and Ag/Cu/each relevant other element independently over the same gates; one residual cannot determine two unknowns. Whole alloy, dust and mixed outlets are counted once; assayed components partition those wholes without being added again. Distinguish metallic particles, real oxides/ions and free/sorbed/reaction water using independent evidence. PM, COD or total metal indicators are not molecular masses. X_in/X_out may remove only a demonstrably identical OTHER same-side term; never remove stocks or an opposite-side leg. | `jrc-ilcd-2010` |
| sb_packs | each packaging pool | For each can and each additional actual packaging component: opening empty + attached WIP + attached FG + reusable stocks + purchases P + first non-purchase external ingress I + external returns received ER = corresponding closing stocks + packaging on gross shipments S + external returns sent EO + waste W. Record independently measured material/water changes separately; internal reuse cancels. S follows gross physical shipment, not net Q or an economic share. Give each ingress one upstream owner. If source pools share one mixed outlet, their disjoint partitions sum to one whole outlet with one provider; do not add partitions to the whole.  I covers every first non-purchase external receipt, whether attached to incoming goods, separately borrowed or transferred without payment, irrespective of supplier inventory coverage. ER requires traceability to the same can previously sent out from this site; otherwise classify first receipt as I, not ER. Every physical ingress has an owner; separately tag actual purchase, transport and service burdens once, including borrower-paid freight. Missing supplier coverage remains a data gap, never zero. EO and S are disjoint gross outward legs; a returned borrowed can is not also a shipment can. | `jrc-ilcd-2010` |
| sb_atoms | actual exchange coverage | Each real added material, chemical formulation, energy carrier, fuel, packaging component, maintenance part, waste outlet and emitted species needs its own named atomic card and actual conditions. Missing data are not zero. No assumed thermal washing, steam or boiler in this dry route. If actual external steam/cooling carriers exist, independently record complete supplied and returned water kg, actual state/enthalpy and MJ under one provider convention; returned condensate is Product return. A different route needs evidence and scope review. | `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cut | Original sheet receipt and cold cutting | required | Actual events only; all occurred loads retained | foreground | per reference flow |
| prepare | Source segregation and first feed acceptance | required | Actual events only; all occurred loads retained | foreground | per reference flow |
| service | Actual original-cohort post-release services | conditional | Actual events only; all occurred loads retained | foreground | per reference flow |
| pack | Rigid steel-can pool and actual directions | conditional | Actual events only; all occurred loads retained | foreground | per reference flow |

Card amounts and the protocol aggregation basis labels reference the single calc_quotient result without another output division; collection methods retain raw undivided records. Card descriptions are part of consumable rules. Internal offcut/WIP/release handovers are paired ledgers and cancel in consolidation; physical reconciliation rows below must not create extra providers or credits. Unbound UUIDs retain one specific physical identity and need actual supplier/form/route/property checks before binding.

### Process: Original sheet receipt and cold cutting (`cut`)

#### Inputs

##### Product flows

###### Supplied uncoated silver-copper alloy sheet (`alloy_sheet`)

Record the whole actual sheet once with supplier, alloy assay, temper, thickness, lot and upstream mining/recovery/refining/alloying/rolling chain. No universal 925 composition; no purchased pure Ag or Cu subaccount. This specific stock UUID gap is tracked separately from original-formation evidence; pure silver foil cannot represent an alloy sheet. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Supplied uncoated silver-copper alloy sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `mw-plate`; `jrc-ilcd-2010`

###### Hardened steel shear blade (`cutting_tool`)

Conditional actual replacement blade for the documented cold cutting equipment. Record whole supplied blade, installed/unused stocks, actual consumed service and real retirement separately; no full shear or blade per kg assumed. Other actual cutting tools need their own cards. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Hardened steel shear blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `mw-plate`; `jrc-ilcd-2010`

###### Supplied mineral-oil cutting lubricant preparation (`cutting_lubricant`)

Conditional only if this exact preparation is actually used and compatible with the receiver clean-feed specification; otherwise document absence, never insert a substitute formulation into this row. Whole supplied formulation once, actual ingredients/carriers only as analytical subaccounts; onsite blending uses separate purchases and real mixing losses. Residual oil, cleaning and emissions require actual evidence and distinct cards; no solvent presumed. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Supplied mineral-oil cutting lubricant preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ilcd-2010`

###### Metered alternating-current electricity (`cut_electricity`)

Meter actual duty and allocated site support including failed runs, start/stop, idle and cleanup. Collect technical Energy, not an assumed supplier native property: Energy `f6811440-ee37-11de-8a39-0800200c9a66` references Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, MJ; convert measured kWh once by 3.6. The actual supplier flow UUID remains unresolved. Before binding, verify country, voltage, supply mix, native reference property and its conversion chain independently; a shared energy unit group does not prove net calorific value. Do not substitute a CN low-voltage consumption mix for an unverified site.

- Selected flow: Metered alternating-current electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_cut`
- Sources: `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Cold-cut silver-copper jewellery blank (`blank_output`)

Record full gross net-metal blank output V and its distinct downstream gate/state. It is a joint-output physical reconciliation row, not Q and not a complete finished wearing article. Its allocated burden vector is kept separately and not credited against offcuts. Whole alloy and its Ag/Cu analysis do not add. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Cold-cut silver-copper jewellery blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result v_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `mw-plate`; `jrc-ilcd-2010`

##### Waste flows

###### Rejected silver-copper sheet offcuts (`rejected_cuttings`)

Only true external disposal/treatment of unaccepted offcuts; do not classify still-usable WIP or internal recuts as discarded. Record actual full outlet mass, composition, destination and one treatment owner; retain historical and treatment burdens once. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Rejected silver-copper sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_cut`
- Sources: `brepohl-scrap`; `jrc-ilcd-2010`

### Process: Source segregation and first feed acceptance (`prepare`)

#### Inputs

##### Product flows

###### Metered alternating-current electricity (`prepare_electricity`)

Meter actual duty and allocated site support including failed runs, start/stop, idle and cleanup. Collect technical Energy, not an assumed supplier native property: Energy `f6811440-ee37-11de-8a39-0800200c9a66` references Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, MJ; convert measured kWh once by 3.6. The actual supplier flow UUID remains unresolved. Before binding, verify country, voltage, supply mix, native reference property and its conversion chain independently; a shared energy unit group does not prove net calorific value. Do not substitute a CN low-voltage consumption mix for an unverified site.

- Selected flow: Metered alternating-current electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_prepare`
- Sources: `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Source-segregated solid silver-copper sheet-fabrication offcuts for refining (`released_offcuts`)

This single unresolved product exchange is clean solid uncoated Ag-Cu sheet-fabrication offcuts of one declared grade and origin, first accepted to the specified refinery-feed requirements. Confirm actual complete assay, solid form, cold-shear origin, absence of intentional gold/PGM/solder/coating and receiver approval. Reusable sheet remnants are not this scrap product. Q is net whole offcut kg, not contained Ag, shipped mass or recovered silver. A broad industrial scrap or manufactured-finished-product record does not establish this batch identity or ownership state. Keep the product UUID unresolved until native identity and provider compatibility are verified. Mass uses Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg.

- Selected flow: Source-segregated solid silver-copper sheet-fabrication offcuts for refining
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `mw-scrap`; `mw-separation`; `brepohl-scrap`

##### Waste flows

###### Removed steel foreign fragments (`steel_fragments`)

Actual separately weighed steel tool fragments removed from offcuts before release; no assumed quantity. Record contained Ag/Cu independently if present and its destination; no second recovered-silver coproduct credit. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Removed steel foreign fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_prepare`
- Sources: `mw-separation`; `brepohl-scrap`

##### Elementary flows

###### silver (`ag_air`)

Conditional independently measured Ag release to air only, expressed as elemental mass with actual species/particle structure and outlet metadata. Native CAS is the metallic form (7440-22-4); its comment also represents ions unless the applied LCIA distinguishes individual species, which must then be preferred. Broad synonym lists do not identify a measured ion, oxide or nanoparticle. Native compartment is emissions to air unspecified; known regional air subcompartments require the appropriate separately verified flow. Not a metal input, captured dust, water emission, whole dust mass or automatic unmeasured release. No fixed emission factor.  Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: silver `fe0acd60-3ddc-11dd-abf6-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ilcd-2010`

###### copper (`cu_air`)

Conditional independently measured Cu release to air only, expressed as elemental mass with actual species/particle structure and outlet metadata. Native CAS is the metallic form (7440-50-8); its comment also represents ions unless the applied LCIA distinguishes individual species, which must then be preferred. Broad synonym lists do not identify a measured ion, oxide or nanoparticle. Native compartment is emissions to air unspecified; known regional air subcompartments require the appropriate separately verified flow. Not a metal input, captured dust, water emission, whole dust mass or automatic unmeasured release. No fixed emission factor.  Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ilcd-2010`

### Process: Actual original-cohort post-release services (`service`)

#### Inputs

##### Product flows

###### Metered alternating-current electricity (`service_electricity`)

Record actual original-cohort service electricity with original Q_c and observed H, never a new production amount. The supplier flow UUID remains unresolved; collection uses technical Energy `f6811440-ee37-11de-8a39-0800200c9a66` and Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, MJ; measured kWh converts once by 3.6. Verify the actual supplier native property, unit chain, voltage, mix and geography before binding; do not infer net calorific value from the unit group.

- Selected flow: Metered alternating-current electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-2010`

###### Diesel-truck road freight service (`road_freight`)

Conditional actual outsourced road freight including real empty/return duties as contracted. Collect gross consignment mass and distance, load constraints, vehicle/supply and allocation gate; use kg*km service without also purchasing the provider diesel. Other actual modes need their own cards. Actual packing gross mass is included in carriage but not product Q. No UUID/unit support adopted for this service. Flow UUID remains unbound; verify this single physical identity, not an absent exchange.

- Selected flow: Diesel-truck road freight service
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Use sole already-calculated result x_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-2010`

### Process: Rigid steel-can pool and actual directions (`pack`)

#### Inputs

##### Product flows

###### Purchase of steel shipping can (`can_purchase`)

Actual P leg of one complete rigid steel shipping-can article including its supplied lid and coating, identified by pool/lot; do not double-purchase its components. Collect actual composition/lining, tare and contained material separately. This is a full-gross physical row V, never an allocated economic fraction. The same exchange's real upstream/treatment burden belongs once in its tagged A vector; this physical ledger is not an extra LCIA provider. Internal reuse cancels; packaging never enters product Q. Additional real label/closure/liner materials require separate complete pool cards. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Purchase of steel shipping can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result v_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-scrap`; `jrc-ilcd-2010`

###### First non-purchase external receipt of steel shipping can (`can_included`)

Actual I leg of one complete rigid steel shipping-can article including its supplied lid and coating, identified by pool/lot; do not double-purchase its components. Collect actual composition/lining, tare and contained material separately. This is a full-gross physical row V, never an allocated economic fraction. The same exchange's real upstream/treatment burden belongs once in its tagged A vector; this physical ledger is not an extra LCIA provider. Internal reuse cancels; packaging never enters product Q. Additional real label/closure/liner materials require separate complete pool cards. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

 I covers every first non-purchase external receipt, whether attached to incoming goods, separately borrowed or transferred without payment, irrespective of supplier inventory coverage. ER requires traceability to the same can previously sent out from this site; otherwise classify first receipt as I, not ER. Every physical ingress has an owner; separately tag actual purchase, transport and service burdens once, including borrower-paid freight. Missing supplier coverage remains a data gap, never zero. EO and S are disjoint gross outward legs; a returned borrowed can is not also a shipment can.

- Selected flow: First non-purchase external receipt of steel shipping can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result v_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-scrap`; `jrc-ilcd-2010`

###### External return received of steel shipping can (`can_return_received`)

Actual ER leg of one complete rigid steel shipping-can article including its supplied lid and coating, identified by pool/lot; do not double-purchase its components. Collect actual composition/lining, tare and contained material separately. This is a full-gross physical row V, never an allocated economic fraction. The same exchange's real upstream/treatment burden belongs once in its tagged A vector; this physical ledger is not an extra LCIA provider. Internal reuse cancels; packaging never enters product Q. Additional real label/closure/liner materials require separate complete pool cards. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

 I covers every first non-purchase external receipt, whether attached to incoming goods, separately borrowed or transferred without payment, irrespective of supplier inventory coverage. ER requires traceability to the same can previously sent out from this site; otherwise classify first receipt as I, not ER. Every physical ingress has an owner; separately tag actual purchase, transport and service burdens once, including borrower-paid freight. Missing supplier coverage remains a data gap, never zero. EO and S are disjoint gross outward legs; a returned borrowed can is not also a shipment can.

- Selected flow: External return received of steel shipping can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result v_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-scrap`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Steel shipping can on gross shipment (`can_dispatch`)

Actual S leg of one complete rigid steel shipping-can article including its supplied lid and coating, identified by pool/lot; do not double-purchase its components. Collect actual composition/lining, tare and contained material separately. This is a full-gross physical row V, never an allocated economic fraction. The same exchange's real upstream/treatment burden belongs once in its tagged A vector; this physical ledger is not an extra LCIA provider. Internal reuse cancels; packaging never enters product Q. Additional real label/closure/liner materials require separate complete pool cards. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Steel shipping can on gross shipment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result v_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-scrap`; `jrc-ilcd-2010`

###### External return sent of steel shipping can (`can_return_sent`)

Actual EO leg of one complete rigid steel shipping-can article including its supplied lid and coating, identified by pool/lot; do not double-purchase its components. Collect actual composition/lining, tare and contained material separately. This is a full-gross physical row V, never an allocated economic fraction. The same exchange's real upstream/treatment burden belongs once in its tagged A vector; this physical ledger is not an extra LCIA provider. Internal reuse cancels; packaging never enters product Q. Additional real label/closure/liner materials require separate complete pool cards. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: External return sent of steel shipping can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result v_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-scrap`; `jrc-ilcd-2010`

##### Waste flows

###### Discarded steel shipping can (`can_waste`)

Actual W leg of one complete rigid steel shipping-can article including its supplied lid and coating, identified by pool/lot; do not double-purchase its components. Collect actual composition/lining, tare and contained material separately. This is a full-gross physical row V, never an allocated economic fraction. The same exchange's real upstream/treatment burden belongs once in its tagged A vector; this physical ledger is not an extra LCIA provider. Internal reuse cancels; packaging never enters product Q. Additional real label/closure/liner materials require separate complete pool cards. Flow UUID remains unbound; verify this single physical identity, not an absent exchange. Property support unit group is `93a60a57-a4c8-11da-a746-0800200c9a66` with reference unit kg.

- Selected flow: Discarded steel shipping can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use sole already-calculated result v_i; service uses the same original-cohort result s_i_c; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-scrap`; `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_framework | all burden attribution | Apply only attributional modelling where allocation is justified. First identify the actual joint cutting gate, co-produced blank and offcut states, periods and complete inputs/losses; do not convert classification, monetary value or a refinery payout into a zero-history cutoff or recovery credit. | `jrc-ilcd-2010` |
| al_subdivide | dedicated operations and identifiable exchanges | Separate physically dedicated offcut segregation, inspection and handling; virtually subdivide exclusively related exchanges when justified by process records. Assign blank-only finishing to blanks rather than forcing it into the offcut product. Do not allocate a gross material balance. | `jrc-ilcd-2010` |
| al_causality | each remaining shared exchange | For each remaining shared exchange independently identify and quantify its determining physical causal relationship to outputs, including direct material content and actual limiting service/time factors as applicable. Sheet material embodied in offcuts keeps its related upstream vector; account for losses before choosing shares. Cutting geometry alone does not prove the same allocation for sheet, tooling, lighting and storage. No arbitrary choice of mass versus price. | `jrc-ilcd-2010` |
| al_residual | only genuinely unresolved shared burdens | Only residual flows for which subdivision and determining physical causality cannot resolve attribution may use justified economic allocation at the same common process gate, actual material state and contemporaneous period. Derive comparable gate values excluding downstream refining, transport and conditioning; disclose prices, uncertainty and sensitivity. No fixed percentage, automatic economic allocation or later refined-silver value as scrap-gate price. Reconcile shares and conservation for every original exchange. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | cut | whole sheet / blanks / actual lubricant | supplier and event record | lot; supplier; form; full assay; as-received mass; opening/closing raw and WIP; whole formulation; blank gross mass; cutting method and equipment; all failed/rework events; inherited exchange vector | Weigh whole materials and each physical output separately using calibrated scales; reconcile lot issues/returns and actual cold cutting records. Assay subaccounts do not duplicate whole purchases. Keep raw undivided totals and inherited vectors; stock-correct once; no division by Q here. | kg | each lot and event | complete declared cohort including Q0 | actual receiving cutting and contractor gates | per reference flow | weighing certificates; supplier certificate; lot mass ledger; tool configuration |
| cp_energy_cut | cut | electricity by duty | meter and supplier record | meter ids; opening/closing reading; kWh or integrated MJ; power-rate timestamps if rate; country; voltage; supply mix; duty and all failed/idle/cleanup loads; allocations | Read actual duty/submeters and main meter; reconcile disjoint duties without adding the main total again. Integrate genuine rates only; already integrated readings are not multiplied by time. Retain undivided converted energy; kWh to MJ once; justify per-exchange attribution before calc_quotient. | MJ | each duty and reporting period | full matching cohort | actual meters and same site | per reference flow | meter calibration; bills; duty bridge; allocation record |
| cp_energy_prepare | prepare | electricity by duty | meter and supplier record | meter ids; opening/closing reading; kWh or integrated MJ; power-rate timestamps if rate; country; voltage; supply mix; duty and all failed/idle/cleanup loads; allocations | Read actual duty/submeters and main meter; reconcile disjoint duties without adding the main total again. Integrate genuine rates only; already integrated readings are not multiplied by time. Retain undivided converted energy; kWh to MJ once; justify per-exchange attribution before calc_quotient. | MJ | each duty and reporting period | full matching cohort | actual meters and same site | per reference flow | meter calibration; bills; duty bridge; allocation record |
| cp_assets | cut | shear blade service and physical stocks | maintenance record | asset and blade identity; acquisition; installed/unused opening/closing; real service hours; repair; retirement; inherited burden; supplier | Record actual blade purchases and fulfilled service independently; derive service consumption from justified actual capacity/use and stock history without a fixed life. Keep raw physical stocks and burden-service allocation separate and undivided. | kg; h | each acquisition repair service and retirement | actual observed period | actual cutting equipment | per reference flow | maintenance and service logs; purchase records |
| cp_release | prepare | Q first accepted solid offcuts | release and assay record | unique release id; source sheet lot; assay; absence of intentional gold/PGM/coating; solid form; removed foreign mass; net lot kg; receiver specification and acceptance; manufacturer and outsourced cutter; handoff/custody and ownership records; unreleased opening/closing WIP; release time | Calibrated tare-corrected net weighing of each uniquely accepted lot; tie origin and composition to actual refinery-feed approval. Provider requirements are actual records, not inferred from a public service page. Sum uniquely first-released net whole offcuts as Q; retain closing FG already in Q; no Ag-equivalent denominator. | kg | each first-release lot | declared first-release cohort | actual preparation gate and named receiver | per reference flow | scale certificate; release register; receiver specification; representative assay |
| cp_waste_cut | cut | each rejected stream and steel fragment | weighing and destination record | stream id; whole mass; wet/dry basis; assay/species; destination; treatment provider; inherited vector; samples; internal recirculation | Weigh each distinct real outlet and separately determine relevant elements; track WIP/internal recirculation separately from external waste. Keep undivided whole-outlet totals; source partitions sum to a single mixed outlet without adding twice. | kg | each actual outlet | full cohort including failed and Q0 events | actual cutting and preparation gates | per reference flow | waste receipts; assay; stock reconciliation |
| cp_waste_prepare | prepare | each rejected stream and steel fragment | weighing and destination record | stream id; whole mass; wet/dry basis; assay/species; destination; treatment provider; inherited vector; samples; internal recirculation | Weigh each distinct real outlet and separately determine relevant elements; track WIP/internal recirculation separately from external waste. Keep undivided whole-outlet totals; source partitions sum to a single mixed outlet without adding twice. | kg | each actual outlet | full cohort including failed and Q0 events | actual cutting and preparation gates | per reference flow | waste receipts; assay; stock reconciliation |
| cp_service | service | cohort storage handling and freight | event and logistics record | original cohort; Q_c; observed H; full opening/closing FG and vectors; gross dispatch; actual returns; performed energy/service; kg and km for freight; load constraint; provider | Assign actual post-release service to original cohorts with measured duty and actual provider/load basis; do not use H as new output. Keep raw service totals undivided; retain original Q_c for the single quotient; performed services are not subtracted for closing stock. | MJ; kg*km; kg; h | each actual event | observed H for each original cohort | actual warehouse and logistics gates | per reference flow | dispatch/return bridge; original release ids; service meters; freight contract |
| cp_packaging | pack | steel-can complete pool | stock and event record | can id and composition; tare; opening/closing empty attached WIP attached FG reusable stocks; P; I; ER; S; EO; W; actual natural mass changes; upstream owner | Weigh each full can pool and all real directions independently; relate S to gross dispatch and keep contents separate. Additional labels/liners use separate pools. Retain raw complete six-leg events and stocks; internal reuse cancels; full physical V and tagged burden A remain distinct.  I covers every first non-purchase external receipt, whether attached to incoming goods, separately borrowed or transferred without payment, irrespective of supplier inventory coverage. ER requires traceability to the same can previously sent out from this site; otherwise classify first receipt as I, not ER. Every physical ingress has an owner; separately tag actual purchase, transport and service burdens once, including borrower-paid freight. Missing supplier coverage remains a data gap, never zero. EO and S are disjoint gross outward legs; a returned borrowed can is not also a shipment can. | kg | each pool event and stocktake | full manufacturing and actual service horizon | actual can storage preparation and dispatch | per reference flow | pool balance; purchase/return/dispatch/waste records; tare evidence |
| cp_emission | prepare | each actual air species | sampling and speciation record | outlet and compartment; rate versus integrated sample volume; independent sampled gas state and density where needed; species and particulate structure; Ag or Cu elemental content; duration only for true rate; uncertainty; control efficiency measured | Measure actual individual species or defensibly element-based releases; do not infer oxide/ion mass from total-metal or PM residual. Integrated volume is not multiplied by time. Air unspecified UUID only if that compartment is justified. Retain undivided species totals and physical/burden vectors; no assumed release or factor. | kg | each real emitting duty | actual full cohort including control failures | actual emission point | per reference flow | sampling records; independent speciation; LCIA compatibility; analytical uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_numerator | all inventory rows | Convert raw records into each actual extensive unit first. For original exchange i/cohort c after subdivision and exchange-specific attribution form A_i_c as current attributable load plus inherited opening WIP/unused-charge vector minus closing unfinished/unused unassigned vector, with disjoint terms and one stock correction. Never subtract released-FG manufacturing vector from manufacturing A. Retain actual sample/failure/treatment burdens. Performed service load is separately B_i_c with original Q_c. | cp_material; cp_energy_cut; cp_energy_prepare; cp_assets; cp_waste_cut; cp_waste_prepare; cp_service; cp_packaging; cp_emission | A_i_c; B_i_c | `jrc-ilcd-2010` |
| calc_physical | manufacturing preparation FG consolidated and packaging gates | At each gate retain undivided full physical opening + gross external inputs = closing + gross external outputs + actual independently measured transformations; matched internal transfers cancel. Manufacturing outputs contain unique Q, joint blanks and actual waste, without adding closing FG beside Q. FG gate: opening FG + first-release transfer + actual returns = closing FG + gross dispatch + actual waste/loss. Independently reconcile Ag/Cu and every relevant element; content subaccounts never add to wholes. Each packaging pool follows sb_packs; X removes only exact same-side OTHER duplication. | cp_material; cp_release; cp_waste_cut; cp_waste_prepare; cp_packaging; cp_service | V_i; physical and elemental residuals | `jrc-ilcd-2010` |
| calc_quotient | all inventory rows | Only for Q>0 execute the sole x_i = A_i / Q and physical-audit v_i = V_i / Q for the same cohort; service uses only original-cohort s_i_c = B_i_c / Q_c. These are distinct tagged accounts, not sequential divisions or duplicate providers. Cards and aggregation reference these results only. Q=0 retains complete loads without a unit result. | A_i_c; B_i_c; V_i; cp_release; cp_service | x_i; v_i; s_i_c | `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | sheet and feed | Match actual single-source sheet, complete assay, form, cold-cutting configuration and specified receiver approval per lot. A refining service catalogue cannot approve another source; pure foil is not alloy sheet. | supplier lot certificate; receiver specification; configuration record |
| dq_history | all gates and cohorts | Independently close total mass/elements; include all raw/WIP/FG/packaging stocks, per-flow inherited vectors, failures/Q0/idle/cleanup, real rework and samples. Incomplete evidence stays uncertain, not zero. | raw ledgers; calibration; assay; vector bridge |
| dq_provider | each bound and unbound exchange | UUID establishes identity only; apply complete native form/type/compartment/route/geography/property limits. Separately verify provider compatibility and temporal/geographic representativeness. Verify each unbound specific flow without collection substitutes. | complete native record; provider evidence; uncertainty disclosure |
| dq_evidence | rules and results | Industrial sources support physical route only; ILCD supports justified attributional method only. Actual values use foreground collection, without copied prices/fineness/recovery yields or historical case factors. Service H remains separate from production Q. | original context; method justification; coverage and uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| vr_scope | reference feed | Verify single Ag-Cu sheet-fabrication solid offcuts, no intentional gold/coating, exclusion of ash/filings/sweeps, actual cold-cut origin, receiver requirements and first acceptance per lot; a mismatch cannot use this reference. Verify the fixed grade, complete assay, temper, thickness and original shear configuration independently; supplier marketing cannot settle batch applicability or receiver acceptance. | `un-cpc3-2025`; `mw-scrap`; `brepohl-scrap`; `mw-plate`; `mw-alloys`; `mw-terms` |
| vr_measure | all amounts and stocks | Check unique Q, original row units, actual conversions, single A/Q, original-Q_c service and Q0 retention; independently close manufacturing/FG/consolidated total mass, every relevant element and each packaging pool. Reject duplicate closing-FG production, components added to whole, duplicate provider or multi-unknown residual fitting. | `jrc-ilcd-2010` |
| vr_allocation | burden attribution | Check dedicated/virtual subdivision then determining physical causality for every exchange; same-gate same-state contemporaneous economic value only for genuine residuals. Insufficient evidence requires review; engineering checks are not scientific acceptance. No fixed shares, zero history or substitution credit. | `jrc-ilcd-2010` |
| vr_native | inventory exchanges | Check atomic identity, official Chinese display, complete native restrictions and actual provider/version-property-unit chain. Each actual added substance needs its own card. Air element flows cannot replace captured dust or unknown species/compartment; prefer species-specific flows where LCIA distinguishes them. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Unrefined feed background with matching origin/composition/form/acceptance gate; not methodology approval |
| allowed_use | Actual single-source solid Ag-Cu sheet offcuts with complete attributional history satisfying every qualifier |
| excluded_use | Whole-leaf coverage; gold/ash/sweeps/filings/refined ingots; fixed recovery/substitution credit; zero historical burden; net-delivery denominator |
| required_metadata | all reference qualifiers; actual gates and cohort; complete raw protocol records; sole quotient; provider ownership; allocation justification and sensitivity |
| required_quality_disclosure | native identity/provider limits; unresolved core/auxiliary items; historical-vector coverage; measured versus inferred evidence; scientific and translation approval state |
| update_trigger | change of origin/composition/form/manufacturing route/receiver specification; provider or native restriction changes; allocation or measurement evidence change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Ver.3.0 Explanatory Notes, 30 June 2025, PDF p.203; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Non-gold precious-metal scrap scope versus gold scrap 39331 and ash 39333; no LCA allocation rule |
| mw-scrap | extension_guidance | Morris and Watson, Scrap; https://morrisandwatson.com/refining/scrap | Refinery-feed terminal for identifiable solid clean alloy scrap including plate offcuts; stated Morris and Watson origin is a source limitation, not approval of another supplier |
| mw-separation | extension_guidance | Morris and Watson, Refining Tips; https://morrisandwatson.com/refining/precious-metal-refining-tips | Silver separation, removal of large foreign metal objects, scrap versus sweeps and stated shipment identity; sludge/PGM branches excluded |
| brepohl-scrap | handbook | Erhard Brepohl, Precious Metal Refining, updated 11 December 2016, The Theory and Practice of Goldsmithing extract; https://www.ganoksin.com/article/precious-metal-refining/ | Treatment at the Refinery and Scrap: sheet-fabrication origin, segregation, alloy identity, weighing and rigid container; neighbouring filings/sweeps/acid-refining cases are not adopted |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–265; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation only where justified: subdivision, exchange-specific determining physical causality and residual same-state process-gate economic value; stock-vector equations are declared PCR collection methodology |
| mw-plate | extension_guidance | Morris and Watson, Plate & Sheet; https://morrisandwatson.com/fabrication/plate-sheet | Sterling sheet supply and guillotine shearing; no batch assay, universal dimensions or measured BOM |
| mw-alloys | extension_guidance | Morris and Watson, Fabrication Alloy Information; https://morrisandwatson.com/fabrication/fabrication-alloy-product-information | STG-925 grade identity, separate Pd-bearing sterling and batch assay policy; not proof of complete Ag-Cu composition or recycled fraction |
| mw-terms | extension_guidance | Morris and Watson Ltd (NZ), Refining Terms and Conditions v2 July 2023; https://morrisandwatson.com/pdf/MWNZ-Refining-Terms-v2.pdf | July 2023 v2 §§2,4–6: acceptance discretion, origin/description, delivery/settlement distinction and potential outsourced assay; no universal minimum LCA lot |
