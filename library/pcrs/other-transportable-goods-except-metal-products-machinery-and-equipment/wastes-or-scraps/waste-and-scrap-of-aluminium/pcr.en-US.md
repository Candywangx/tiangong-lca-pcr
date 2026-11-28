---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-aluminium
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Waste and scrap of aluminium — single-grade AA5754 sheet stamping clippings

## 1. Scope and Applicability

This PCR covers only source-segregated solid clippings generated from one identified AA5754-O aluminium-alloy sheet lot by actual cold stamping and trimming or piercing, through necessary dry preparation and actual baling to unique first quality release under a declared aluminium remelter supply specification. It does not extend the classification leaf to all aluminium scrap. The whole-alloy supplied material is the reference object; alloy constituents are not additional purchases and aluminium assay is not the reference mass.

Exclude post-consumer cans, mixed alloys, foil/plastic laminates, cast scrap, ash, dross, slag, remelt ingots and purchased-already-formed-scrap-only baling. Upstream rolling, supplied-state surface treatment and existing lubricant film belong in the matching sheet supply dataset once. Downstream melting and primary-metal substitution are outside this gate. Preserve mother-product burden attribution and separate later actual storage/repacking/dispatch service from manufacturing.

UNSD full notes pp203–205 separately list metal-containing ash/residue at 39320 and copper, nickel, lead, zinc, tin and other metal scrap at 39361, 39362 and 39364–39368. Solid fabrication clippings of aluminium-base AA5754 fall within 39363. This method additionally excludes post-consumer, mixed-alloy and other aluminium scrap routes that may still belong to 39363. Classification text specifies neither AA5754, baling operations nor numeric quality gates.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-aluminium |
| classification_refs | CPC 3.0:39363, accepted narrower association for single-grade AA5754 sheet stamping clippings |
| covered_products | Baled new solid clippings from one identified AA5754-O sheet-fabrication source |
| excluded_products | Mixed or post-consumer scrap; foil laminates; cast scrap; ash/dross; melted products; purchased formed-scrap-only baling |
| representative_product | Net dry whole-alloy clippings at first quality release to receiver-specific conditions |
| production_route | Supplied prelubricated sheet → actual blanking and stamping/trimming/piercing → single-grade segregation → necessary dry preparation → baling → first quality release |
| market_state | Unmelted secondary-feed supply; Product function must be verified; later service stays with original cohort |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply source-segregated AA5754 new sheet clippings for further processing at the named aluminium remelter |
| How much | 1 kg net dry whole-alloy clippings at first quality release excluding packaging and separately measured oil/water/foreign matter |
| How well | Single-grade lot evidence and applicable Tooth plus operative receiver Tier 1 bale specification; no recovery guarantee |
| How long or cycle | One manufacturing cohort; later service uses actual H and original Q_c |
| reference_flow_link | `released_clips` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Baled single-grade AA5754 sheet clippings |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | single AA5754 alloy identity and lot certificate; O temper of supplied sheet; actual sheet gauge and clip dimensions; uncoated and unpainted state; supplied lubricant identity and additional formulation; whole alloy mass distinct from elemental assay; oil and free-water measurements; single-grade source segregation; actual blanking stamping trimming and piercing sequence; actual baling and bale dimensions; receiver plant and operative specification revision; Tier 1 certification and buyer approval; contamination and moisture acceptance evidence; first release cohort and Q gate; whole physical V and source partitions; WIP inherited exchange vectors; FG stock and return history; packaging material accounts; actual service H and original Q_c; site geography electricity voltage and period; upstream provider states and attributional allocation evidence |

Declare every required qualifier in dataset metadata, process notes, reference-flow comments or equivalent package fields. A missing qualifier leaves the reference definition incomplete.

The reference product flow UUID remains unresolved. The concrete declared object is net dry unmelted single-grade AA5754 sheet clippings at first release, not a generic alloy furnace product. Confirm its Product supply function, physical state and actual compatible flow/provider before dataset completion. Mass/kg support does not establish product identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is unique first-release net dry whole-alloy mass excluding packaging and independently measured oil/free water/removable matter. Q is not pure-Al content. Keep physical gross V and burden numerator A_x distinct. |
| `raw_conversion` | all inventory rows | original physical property | original unit | Integrate only a real rate over measured time; never multiply already integrated gas/liquid volume by time. Preserve gas temperature/pressure/humidity and independently measured substance-specific liquid density. |
| `energy_conversion` | electricity | Electrical energy | MJ | Retain raw kWh and convert once using 3.6 MJ/kWh before burden attribution and the sole normalization. Energy conversion does not authorize assigning a calorific value to lubricants. |
| `article_mass` | packaging | Mass | kg | Counts of pallets or labels require configuration-specific measured item mass or direct weighing; do not invent kg/item or infer density from native secondary coefficients. |
| `independent_species` | metal and water ledgers | Mass | kg | Elements, chemical species and whole exchanges are distinct ledgers. Evidence must distinguish natural oxide, free water, phase change and any real reaction water. The cold mechanical route assumes no chemical reaction or reaction-water generation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplied AA5754-O sheet with actual pre-existing film and included upstream burdens |
| starting_condition_role | Feedstock for real foreground fabrication rather than already formed scrap |
| product_classification_scope | Single-grade new sheet-clipping subset of CPC 3.0:39363 |
| recursive_input_rule | Do not purchase already formed same-category clips in this route. Internal clips/rework carry inherited vectors; cancel internal transfers on consolidation without repurchase. |
| upstream_dataset_requirement | Match sheet/formulation/utility/packaging providers to actual grade, route, supplied state and geography; do not duplicate rolling or existing film. |
| disclosure | Feedstock and mother-product gates; exchange attribution; Q versus V; WIP inheritance; FG/service; receiver version/approval; gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_source` | source_fabrication | Begin with one supplied prelubricated AA5754-O sheet lot. Include actual blanking/stamping/trimming/piercing, source collection, necessary dry mechanical preparation, baling, quality acceptance and their utilities, maintenance and rejects. Match the upstream sheet state; do not start with purchased already-formed scrap. | `eaa-cutting-2002`; `eaa-forming-2002`; `tk-5754-sheet` |
| `b_grade` | all processes | Keep only one AA5754 grade and source state. Do not combine RC5754 case material, other 5xxx grades, 6xxx grades, old cans, foil laminates, cast scrap, dross, ash or remelt ingot. A family-separated historical case supports process existence but not single-grade batch identity. | `innoval-realcar-2016`; `novelis-realcar-2020`; `un-cpc3-2025` |
| `b_tooth` | release | For the selected Tooth-like new-clipping route require one specified alloy; clean uncoated/unpainted solids; original specification thickness .015 inch (.38 mm) minimum; no hair wire/wire screen/dirt/non-metal items; oil plus grease no more than 1%; no punchings below 1/2 inch (1.27 cm). Measure and segregate undersize slugs. These are acceptance limits rather than default actual thickness or oil content. | `rema-tooth-2026` |
| `b_receiver` | release | Representative receiver is Novelis Oswego under an operative buyer-approved Tier 1 bale arrangement. Revision 11 §§2–5 is the explicit evidence baseline, not a current order. Verify the current order, actual single-alloy approval and current contamination/moisture audit. Reject water-trapping forms, wet or broken bales, dross, fines, unknown powders, salts/oxidizers, closed containers, aluminium-lithium alloy, radioactive/PCB contamination and other listed foreign/unsafe materials. No painted/lacquered/coated scrap; process oil limited to 1% of scrap weight. Labels must agree with heat number, alloy and gross/tare/net weights. | `novelis-scrap-rev11` |
| `b_bale` | segregation_baling; release | For that Tier 1 route apply §5.2: bale dimensions 24×24×48 to 48×48×60 inch; bulk density greater than 20 lb/ft3; fiber or steel banding accepted for the actual alloy; no skids or visually obstructing wraps; individual bale maximum 6000 lb; roof clearance at least 6 inch; Oswego stack less than 11500 lb. Dump-truck delivery needs explicit purchase-order arrangements. Mark each bale weight and alloy. Confirm the original receiver document and buyer interpretation of dimension ranges. Do not substitute briquette §5.1 or non-Tier 1 §5.3 density/approval conditions; those are distinct routes and the document cross-reference wording needs receiver clarification. | `novelis-scrap-rev11` |
| `b_no_thermal` | all processes | No remelting, refining, decoating, chemical washing or wet scrap cleaning is included in this selected dry route. If contamination cannot pass as prepared, retain a rejected outlet; a materially different treatment route needs separate reviewed applicability and all actual inputs/outputs. Downstream recovery and substitution are outside the foreground supply gate. | `eaa-cutting-2002`; `novelis-scrap-rev11` |
| `b_q` | release; storage_dispatch | Q is the sum of unique first released net dry whole-alloy clipping weights for the manufacturing cohort. Closing FG already contains newly released Q. Dispatch, reweighing, acceptance recheck and return/rework never create Q again. Keep a separate service account with original Q_c and actual H. | `novelis-scrap-rev11` |
| `b_all_events` | all processes | Include failed batches, zero-output attempts, start/stop, idle, cleanup, tests, rework and all opening/closing WIP. Carry each inherited exchange vector by lot and state. Missing history is unresolved, not zero burden. Track upstream stock already embodied in rework without rebuying it. | `ilcd-2010-allocation` |
| `b_atomic` | all processes | Each card is one actual exchange. Conditional means evidence-based applicability rather than presumed zero. Before dataset completion add every actual material/formulation, gas, fuel, coolant, sharpening consumable, label-printing consumable, waste and species not enumerated here as its own named row. One mixed physical outlet has one whole amount and one provider; source/composition subledgers do not add another outlet. | `eaa-forming-2002`; `tower-aluminium-lubrication` |
| `b_pack` | packaging; storage_dispatch | For each packaging material j enforce O_empty,j + O_WIP,j + O_FG,j + O_reusable,j + P_j + N_ext,j + ER_j = C_empty,j + C_WIP,j + C_FG,j + C_reusable,j + S_j + EO_j + W_j. Categories are mutually exclusive stocks. S_j is packaging on gross physical shipments including redispatch, not net Q. P is actual purchase, N_ext is first non-purchase external physical receipt including supplier-with-goods and first entrusted/borrowed/rented articles, and ER is a true return with original outward history. These are mutually exclusive event classes. Measure every article using its named material/form/type/direction receipt interface; a missing actual interface blocks dataset completeness. Opening stock cannot replace current receipts; internal stock/WIP/FG issues cancel. EO is actual outward return. Track ownership, original cohort, each inherited exchange vector, supplier-included scope and incremental rental/return service independently and assign burden once. No packaging is added to Q, repurchased on reuse, or automatically treated as coproduct. | `novelis-scrap-rev11` |
| `b_native` | all inventory rows | Before binding any flow/provider verify actual Product/Waste/Elementary function, supplied state, grade, route, geography, voltage, compartment and exact property/unit chain. All flow UUIDs remain unresolved; a generic name or matching mass property cannot establish identity or provider compatibility. | `ilcd-2010-allocation` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_fabrication` | Source sheet fabrication | required | One identified AA5754-O sheet lot is actually blanked then stamped and trimmed or pierced. | multifunctional foreground | Q |
| `segregation_baling` | Segregation and baling | required | Only same-grade new solid clips are prepared. | foreground preparation | Q |
| `utilities_residues` | Utilities and residual management | required | All actual material and energy paths are collected including zero-output periods. | supporting foreground | Q |
| `packaging` | Individual packaging accounts | required | Each actual material is separate; incoming sheet packaging and outgoing bale restraints have different paths. | supporting foreground | Q |
| `release` | First quality release | required | Unique lot passes receiver-specific supply conditions. | reference production | Q |
| `storage_dispatch` | Cohort storage and dispatch service | required | Actual service after first release is linked to original cohort Q_c. | cohort service | Q_c |

Determine actual presence or evidence-based non-applicability of every conditional card. Blank UUIDs, missing measurements and unlisted exchanges are not zeros. Every burden value comes from undivided raw records; amount fields refer to the single normalization in §8 and perform no additional division.

### Process: Source sheet fabrication (`source_fabrication`)

#### Inputs

##### Product flows

###### Whole supplied sheet (`sheet_input`)

One identified wrought AA5754-O sheet lot with actual gauge and supplied lubricant layer. Link an upstream sheet dataset matching the supplier, grade, temper, geography and supplied state, including rolling and mill-applied film once. Require unpainted sheet without a non-lubricant coating; the receiver must accept actual lubricant chemistry and amount. Weigh the delivery; keep alloy substrate, lubricant and free water as non-additive constituent ledgers. Do not purchase alloy elements again.

- Selected flow: AA5754-O aluminium sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Sources: `tk-5754-sheet`; `eaa-cutting-2002`; `eaa-forming-2002`

###### Additional press lubricant (`extra_forming_lubricant`)

Conditional on actual extra application beyond the purchased sheet film. One named supplier formulation is purchased once as a whole; collect its actual SDS, composition and lot. It is not PAO oil, cold-rolling oil or an assumed 40.5 MJ/kg petroleum fraction. If the actual route mixes a concentrate on site, replace this supplied-mixture representation with each purchased ingredient and measured mixing energy/loss; do not count both representations.

- Selected flow: Mineral-oil-based aluminium stamping lubricant supplied formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Sources: `eaa-forming-2002`; `tower-aluminium-lubrication`

###### Trimming tool insert (`cutting_insert`)

Conditional D2 tooling variant, not an established factory selection. Include only when the actual tool certificate confirms this grade; verify coating, tool-life and replacement records. A different tool requires its own specific exchange. An externally coated insert includes its coating and manufacturing burden as one supplied article. Do not purchase its alloy elements or coating chemicals separately. Outsourced sharpening and on-site sharpening have distinct providers and actual consumables.

- Selected flow: D2 cold-work tool steel trimming insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Sources: `eaa-cutting-2002`; `eaa-forming-2002`

##### Waste flows

No exchange is presumed; add named atomic rows only for actual events.

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

#### Outputs

##### Product flows

###### Mother product co-output (`mother_panel`)

Record the actual finished panel specification, weight, reject state and source cohort. This is the physical co-output at the separation gate; it is not assembled body-in-white, rolled sheet or a credit. Preserve its full physical quantity before assigning burden vectors under §7. A panel reprocessed into clips is a documented transfer with inherited burden rather than a second sheet purchase.

- Selected flow: Unassembled AA5754 stamped automotive inner panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Sources: `eaa-cutting-2002`; `eaa-forming-2002`; `ilcd-2010-allocation`

##### Waste flows

###### Source-segregated new clips (`generated_clips`)

Internal whole-clipping transfer before supply acceptance; retain actual waste status, whole physical mass and independently measured substrate/contamination subledgers. Match outgoing and incoming tickets and cancel them on consolidation. Do not substitute external scrap procurement or use a generic loose-scrap bulk density for this lot.

- Selected flow: Unreleased loose AA5754 sheet clippings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clips`
- Sources: `eaa-cutting-2002`; `innoval-realcar-2016`; `rema-tooth-2026`

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

### Process: Segregation and baling (`segregation_baling`)

#### Inputs

##### Product flows

###### Baler shear blade (`baler_blade`)

Only if an installed baler performs actual shear preparation; record one blade grade/article, installed mass, replacement and sharpening path. Do not infer a blade from the presence of a press or use generic carbon steel as its identity.

- Selected flow: High-alloy tool steel baler shear blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clips`
- Sources: `bronneberg-aluminium-baling`

##### Waste flows

###### Source-segregated new clips (`clips_to_baler`)

Internal whole-clipping transfer before supply acceptance; retain actual waste status, whole physical mass and independently measured substrate/contamination subledgers. Match outgoing and incoming tickets and cancel them on consolidation. Do not substitute external scrap procurement or use a generic loose-scrap bulk density for this lot.

- Selected flow: Unreleased loose AA5754 sheet clippings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clips`
- Sources: `eaa-cutting-2002`; `innoval-realcar-2016`; `rema-tooth-2026`

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

#### Outputs

##### Product flows

No exchange is presumed; add named atomic rows only for actual events.

##### Waste flows

###### Rejected solid clips (`rejected_clips`)

Keep whole rejected-lot mass and one actual recovery/treatment provider. Record reasons such as grade contamination, moisture, undersize pieces or oil excess. Source partitions and assay are analytical parts of this same whole outlet; they are not additional waste quantities. Reworked portions keep origin and incremental loads.

- Selected flow: Rejected AA5754 sheet clipping lot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clips`
- Sources: `rema-tooth-2026`; `novelis-scrap-rev11`

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

### Process: Utilities and residual management (`utilities_residues`)

#### Inputs

##### Product flows

###### Grid electricity (`electricity`)

Meter actual alternating-current electricity delivered at the site voltage and geography for presses, conveyors, baler, extraction, cooling, compression, marking and service. Include start/stop, idle, failed work, cleanup and rework. Retain raw kWh; convert once with 3.6 MJ/kWh before attribution. Nameplate power and assumed hours do not establish consumption. Verify the compatible flow, energy property/unit chain and provider before binding.

- Selected flow: Grid alternating-current electricity
- Flow property / unit: Electrical energy / MJ
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eaa-forming-2002`; `bronneberg-aluminium-baling`

###### Hydraulic oil makeup (`hydraulic_fluid`)

One mineral-oil-based hydraulic formulation supplied with additives for actual hydraulic equipment. Record its SDS, grade, makeup volume, temperature and opening/closing tank stocks. No density is assumed; weigh or independently measure substance-specific density if converting volume to mass. Whole formulation only; replacement, leakage and recovered oil are separate paths. A different base chemistry requires its own named exchange.

- Selected flow: Mineral-oil-based hydraulic fluid
- Flow property / unit: Volume / m3
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `bronneberg-aluminium-baling`; `eaa-forming-2002`

###### Actual cooling makeup water (`tap_water`)

Only where a real water-cooled auxiliary uses purchased treated potable piped water. Weigh water or convert metered volume using independently justified water density at measured conditions. No water addition to released scrap is implied; no unmeasured density or raw-river-water substitution is permitted.

- Selected flow: Tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eaa-forming-2002`; `novelis-scrap-rev11`

###### Purchased compressed air (`purchased_air`)

Only actual external compressed-air supply for automation or pneumatic tools. Record pressure, temperature, humidity, actual/normal-volume convention and supplier. On-site generation uses measured compressor electricity and each consumable instead; cancel internal air without purchasing its upstream burden twice.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eaa-forming-2002`

###### Dry maintenance wiper (`cotton_wiper`)

Conditional maintenance article with actual composition and dry mass. It is not used to manually redistribute press lubricant. A solvent-impregnated supplied wipe is a different complete formulation; do not silently add solvent or hide it here.

- Selected flow: Cotton maintenance wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eaa-forming-2002`

##### Waste flows

No exchange is presumed; add named atomic rows only for actual events.

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

#### Outputs

##### Product flows

###### Supplier cooling-water return (`warm_water_return`)

Only a real externally returned clean heat-transfer water Product accepted by its supplier. Measure mass and inlet/outlet temperature, pressure, thermal state and enthalpy and state the supplier agreement on water and heat burdens. It is not wastewater or a coproduct credit. If absent, document absence; no steam, boiler or condensate return is invented.

- Selected flow: Warm cooling water returned to utility supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ilcd-2010-allocation`

##### Waste flows

###### Captured cutting slivers (`metal_fines`)

One weighed captured solid stream generated by cutting or tool cleanup. It is not remelting dross or saleable metal powder. Collect particle state, oil/moisture, composition and actual treatment provider. Do not count it as a direct air emission.

- Selected flow: Captured AA5754 cutting slivers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eaa-cutting-2002`

###### Spent tool insert (`spent_tool`)

One specific worn tool article sent to its actual recovery provider. Keep its actual coating as a constituent of the whole; no avoided steel credit. Other baler-blade grades require separate rows.

- Selected flow: Spent D2 tool steel trimming insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eaa-forming-2002`

###### Used maintenance wiper (`oily_wiper`)

One whole weighed cotton/oil waste stream to one provider. Oil and cotton composition subledgers are not additional outlets. Do not call it a pure-oil flow.

- Selected flow: Oil-contaminated cotton maintenance wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eaa-forming-2002`

###### Contaminated cooling-water outlet (`oily_cooling_water`)

Only if an actual leak contaminates cooling water; one whole wastewater stream at the treatment-provider gate with measured composition. Do not duplicate its oil or dissolved elements as extra waste/emissions. This is distinct from clean supplier water return and is not scrap washing.

- Selected flow: Hydraulic-oil-contaminated cooling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `novelis-scrap-rev11`

###### Drained hydraulic lubricating oil (`used_oil`)

Actual drained mineral-oil-based hydraulic lubricating oil contaminated through use. Collect whole mass, composition, water content and actual treatment provider. Do not assume incineration or a fixed additive/water percentage. Oil remaining on clips or wipes is not also drained oil. Other spent formulations need their own atomic rows.

- Selected flow: Spent mineral-oil-based hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eaa-forming-2002`

##### Elementary flows

###### Metallic aluminium to air (`al_air`)

Only an independently identified metallic-aluminium release to the documented air compartment. Use species-resolved monitoring; total AA5754 dust or total elemental assay is not this chemical-species mass. No default amount, zero-by-omission or balancing-residual estimate is permitted; add each other actual species individually.

- Selected flow: aluminium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eaa-cutting-2002`; `eaa-forming-2002`

###### Metallic magnesium to air (`mg_air`)

Only an independently identified metallic-magnesium release to the documented air compartment. Dissolved magnesium and magnesium oxide are different identities. Use species-resolved monitoring without a default amount or balance-residual estimate.

- Selected flow: magnesium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eaa-cutting-2002`; `eaa-forming-2002`

###### Aluminium oxide to air (`alumina_air`)

Only independently measured aluminium oxide emitted to the documented air compartment. It is not metallic aluminium, total dust or total-Al assay. Retain chemical-species identity and measured amount, not a default oxide fraction.

- Selected flow: Aluminium oxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eaa-cutting-2002`; `eaa-forming-2002`

###### Magnesium oxide to air (`mgo_air`)

Conditional on an actual independently identified release. No compatible elementary UUID is established. A purchased Product MgO is not an emission identity. Actual chemical/particle identification is required before a positive amount. Use species-resolved monitoring and documented compartment. No positive default, zero-by-omission or balancing-residual estimate is permitted. Add every other actual species individually before declaring completeness.

- Selected flow: Magnesium oxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eaa-cutting-2002`; `eaa-forming-2002`

###### Evaporated water to air (`water_vapour`)

Only independently evidenced water vapour emitted to air from actual cooling or drying events. No drying unit is presumed. Distinguish evaporation, free moisture and any real reaction water; never use one residual to infer both water and oil.

- Selected flow: water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `eaa-cutting-2002`; `eaa-forming-2002`

### Process: Individual packaging accounts (`packaging`)

#### Inputs

##### Product flows

###### Purchased packaging article — steel_band (`steel_band_input`)

Actual flat steel band accepted for this alloy by the receiver. Record actual steel grade, production route, coating and supplied form; no fixed composition is prescribed and round baling wire is a different article. P_j means an actual purchased first external receipt of this exact article. It is not non-purchase first receipt, an external return or internal reuse. Keep invoice and physical ticket; any supplier scope already including this article is reconciled before assigning burden once.

- Selected flow: Flat steel bale strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### First non-purchase physical receipt — steel_band (`steel_band_first_nonpurchase`)

Actual flat steel band accepted for this alloy by the receiver. Record actual steel grade, production route, coating and supplied form; no fixed composition is prescribed and round baling wire is a different article. This is the specific material/form/type Product input interface for N_ext,j: actual first physical receipt supplied with goods without a separate article purchase or first entrusted/borrowed/rented receipt of this article. Measure its real mass and direction, including attached-on-sheet/WIP/FG components. Keep event id, owner, originating cohort and each inherited exchange vector, supplier-included scope and incremental rental/return service. Never relabel it as purchase or ER, copy a purchase UUID/provider, assume zero burden or create Q/credit. If the actual article is not this specified material/form, create its own interface before dataset completeness.

- Selected flow: Flat steel bale strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### True external return received — steel_band (`steel_band_external_return`)

Actual flat steel band accepted for this alloy by the receiver. Record actual steel grade, production route, coating and supplied form; no fixed composition is prescribed and round baling wire is a different article. ER_j records this exact article only on a real external return with its original outward shipment history. Measure its physical mass, attachment state and direction; retain owner, original cohort, inherited exchange vector and actual incremental return service. No history means unresolved rather than an invented return; first entrusted/borrowed/rented or supplier-with-goods receipts belong in N_ext,j. Do not use opening stock or internal stock/WIP/FG issues as external receipts, repurchase the article or copy a new-Product procurement UUID.

- Selected flow: Flat steel bale strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Purchased packaging article — paper_label (`paper_label_input`)

One whole supplied identification label with its real adhesive and printing state. Record any separately purchased ink/ribbon as its own actual formulation rather than assuming it is included. P_j means an actual purchased first external receipt of this exact article. It is not non-purchase first receipt, an external return or internal reuse. Keep invoice and physical ticket; any supplier scope already including this article is reconciled before assigning burden once.

- Selected flow: Self-adhesive paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### First non-purchase physical receipt — paper_label (`paper_label_first_nonpurchase`)

One whole supplied identification label with its real adhesive and printing state. Record any separately purchased ink/ribbon as its own actual formulation rather than assuming it is included. This is the specific material/form/type Product input interface for N_ext,j: actual first physical receipt supplied with goods without a separate article purchase or first entrusted/borrowed/rented receipt of this article. Measure its real mass and direction, including attached-on-sheet/WIP/FG components. Keep event id, owner, originating cohort and each inherited exchange vector, supplier-included scope and incremental rental/return service. Never relabel it as purchase or ER, copy a purchase UUID/provider, assume zero burden or create Q/credit. If the actual article is not this specified material/form, create its own interface before dataset completeness.

- Selected flow: Self-adhesive paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### True external return received — paper_label (`paper_label_external_return`)

One whole supplied identification label with its real adhesive and printing state. Record any separately purchased ink/ribbon as its own actual formulation rather than assuming it is included. ER_j records this exact article only on a real external return with its original outward shipment history. Measure its physical mass, attachment state and direction; retain owner, original cohort, inherited exchange vector and actual incremental return service. No history means unresolved rather than an invented return; first entrusted/borrowed/rented or supplier-with-goods receipts belong in N_ext,j. Do not use opening stock or internal stock/WIP/FG issues as external receipts, repurchase the article or copy a new-Product procurement UUID.

- Selected flow: Self-adhesive paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Purchased packaging article — pe_film (`pe_film_input`)

Only actual incoming-sheet polyethylene wrapping. Verify actual polyethylene film supply and supplier; PET and multilayer film need separate identities. It is removed from the bale stream; opaque/wrapped Tier 1 bales are prohibited. P_j means an actual purchased first external receipt of this exact article. It is not non-purchase first receipt, an external return or internal reuse. Keep invoice and physical ticket; any supplier scope already including this article is reconciled before assigning burden once.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### First non-purchase physical receipt — pe_film (`pe_film_first_nonpurchase`)

Only actual incoming-sheet polyethylene wrapping. Verify actual polyethylene film supply and supplier; PET and multilayer film need separate identities. It is removed from the bale stream; opaque/wrapped Tier 1 bales are prohibited. This is the specific material/form/type Product input interface for N_ext,j: actual first physical receipt supplied with goods without a separate article purchase or first entrusted/borrowed/rented receipt of this article. Measure its real mass and direction, including attached-on-sheet/WIP/FG components. Keep event id, owner, originating cohort and each inherited exchange vector, supplier-included scope and incremental rental/return service. Never relabel it as purchase or ER, copy a purchase UUID/provider, assume zero burden or create Q/credit. If the actual article is not this specified material/form, create its own interface before dataset completeness.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### True external return received — pe_film (`pe_film_external_return`)

Only actual incoming-sheet polyethylene wrapping. Verify actual polyethylene film supply and supplier; PET and multilayer film need separate identities. It is removed from the bale stream; opaque/wrapped Tier 1 bales are prohibited. ER_j records this exact article only on a real external return with its original outward shipment history. Measure its physical mass, attachment state and direction; retain owner, original cohort, inherited exchange vector and actual incremental return service. No history means unresolved rather than an invented return; first entrusted/borrowed/rented or supplier-with-goods receipts belong in N_ext,j. Do not use opening stock or internal stock/WIP/FG issues as external receipts, repurchase the article or copy a new-Product procurement UUID.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Purchased packaging article — wood_pallet (`wood_pallet_input`)

Only actual incoming-sheet wooden-board/slat pallets; identify their actual manufacturer and supplied state. No item mass is assumed. Weigh the actual pallet or use a traceable configuration-specific measured mass. Tier 1 outgoing bales are not shipped on skids. P_j means an actual purchased first external receipt of this exact article. It is not non-purchase first receipt, an external return or internal reuse. Keep invoice and physical ticket; any supplier scope already including this article is reconciled before assigning burden once.

- Selected flow: Wooden-board pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### First non-purchase physical receipt — wood_pallet (`wood_pallet_first_nonpurchase`)

Only actual incoming-sheet wooden-board/slat pallets; identify their actual manufacturer and supplied state. No item mass is assumed. Weigh the actual pallet or use a traceable configuration-specific measured mass. Tier 1 outgoing bales are not shipped on skids. This is the specific material/form/type Product input interface for N_ext,j: actual first physical receipt supplied with goods without a separate article purchase or first entrusted/borrowed/rented receipt of this article. Measure its real mass and direction, including attached-on-sheet/WIP/FG components. Keep event id, owner, originating cohort and each inherited exchange vector, supplier-included scope and incremental rental/return service. Never relabel it as purchase or ER, copy a purchase UUID/provider, assume zero burden or create Q/credit. If the actual article is not this specified material/form, create its own interface before dataset completeness.

- Selected flow: Wooden-board pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### True external return received — wood_pallet (`wood_pallet_external_return`)

Only actual incoming-sheet wooden-board/slat pallets; identify their actual manufacturer and supplied state. No item mass is assumed. Weigh the actual pallet or use a traceable configuration-specific measured mass. Tier 1 outgoing bales are not shipped on skids. ER_j records this exact article only on a real external return with its original outward shipment history. Measure its physical mass, attachment state and direction; retain owner, original cohort, inherited exchange vector and actual incremental return service. No history means unresolved rather than an invented return; first entrusted/borrowed/rented or supplier-with-goods receipts belong in N_ext,j. Do not use opening stock or internal stock/WIP/FG issues as external receipts, repurchase the article or copy a new-Product procurement UUID.

- Selected flow: Wooden-board pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Purchased packaging article — pet_band (`pet_band_input`)

Only actual incoming-sheet PET strapping; not PET granules, fibres or steel. Verify the supplied single article. It is removed before the Tier 1 bale and may return externally only when accepted for actual reuse. P_j means an actual purchased first external receipt of this exact article. It is not non-purchase first receipt, an external return or internal reuse. Keep invoice and physical ticket; any supplier scope already including this article is reconciled before assigning burden once.

- Selected flow: Polyester incoming-sheet strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### First non-purchase physical receipt — pet_band (`pet_band_first_nonpurchase`)

Only actual incoming-sheet PET strapping; not PET granules, fibres or steel. Verify the supplied single article. It is removed before the Tier 1 bale and may return externally only when accepted for actual reuse. This is the specific material/form/type Product input interface for N_ext,j: actual first physical receipt supplied with goods without a separate article purchase or first entrusted/borrowed/rented receipt of this article. Measure its real mass and direction, including attached-on-sheet/WIP/FG components. Keep event id, owner, originating cohort and each inherited exchange vector, supplier-included scope and incremental rental/return service. Never relabel it as purchase or ER, copy a purchase UUID/provider, assume zero burden or create Q/credit. If the actual article is not this specified material/form, create its own interface before dataset completeness.

- Selected flow: Polyester incoming-sheet strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### True external return received — pet_band (`pet_band_external_return`)

Only actual incoming-sheet PET strapping; not PET granules, fibres or steel. Verify the supplied single article. It is removed before the Tier 1 bale and may return externally only when accepted for actual reuse. ER_j records this exact article only on a real external return with its original outward shipment history. Measure its physical mass, attachment state and direction; retain owner, original cohort, inherited exchange vector and actual incremental return service. No history means unresolved rather than an invented return; first entrusted/borrowed/rented or supplier-with-goods receipts belong in N_ext,j. Do not use opening stock or internal stock/WIP/FG issues as external receipts, repurchase the article or copy a new-Product procurement UUID.

- Selected flow: Polyester incoming-sheet strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable raw quantity in this card unit; refer only to the single normalization result in §8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

##### Waste flows

No exchange is presumed; add named atomic rows only for actual events.

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

#### Outputs

##### Product flows

###### Packaging article outward service — steel_band (`steel_band_outward`)

Actual flat steel band accepted for this alloy by the receiver. Record actual steel grade, production route, coating and supplied form; no fixed composition is prescribed and round baling wire is a different article. Record actual mass on gross physical shipments and external reusable-article returns; this is physical service bookkeeping and gives no automatic coproduct or negative upstream burden.

- Selected flow: Flat steel bale strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Packaging article outward service — paper_label (`paper_label_outward`)

One whole supplied identification label with its real adhesive and printing state. Record any separately purchased ink/ribbon as its own actual formulation rather than assuming it is included. Record actual mass on gross physical shipments and external reusable-article returns; this is physical service bookkeeping and gives no automatic coproduct or negative upstream burden.

- Selected flow: Self-adhesive paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Packaging article outward service — pe_film (`pe_film_outward`)

Only actual incoming-sheet polyethylene wrapping. Verify actual polyethylene film supply and supplier; PET and multilayer film need separate identities. It is removed from the bale stream; opaque/wrapped Tier 1 bales are prohibited. Record actual mass on gross physical shipments and external reusable-article returns; this is physical service bookkeeping and gives no automatic coproduct or negative upstream burden.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Packaging article outward service — wood_pallet (`wood_pallet_outward`)

Only actual incoming-sheet wooden-board/slat pallets; identify their actual manufacturer and supplied state. No item mass is assumed. Weigh the actual pallet or use a traceable configuration-specific measured mass. Tier 1 outgoing bales are not shipped on skids. Record actual mass on gross physical shipments and external reusable-article returns; this is physical service bookkeeping and gives no automatic coproduct or negative upstream burden.

- Selected flow: Wooden-board pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Packaging article outward service — pet_band (`pet_band_outward`)

Only actual incoming-sheet PET strapping; not PET granules, fibres or steel. Verify the supplied single article. It is removed before the Tier 1 bale and may return externally only when accepted for actual reuse. Record actual mass on gross physical shipments and external reusable-article returns; this is physical service bookkeeping and gives no automatic coproduct or negative upstream burden.

- Selected flow: Polyester incoming-sheet strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

##### Waste flows

###### Discarded packaging article — steel_band (`steel_band_waste`)

Actual flat steel band accepted for this alloy by the receiver. Record actual steel grade, production route, coating and supplied form; no fixed composition is prescribed and round baling wire is a different article. Record the actual whole discarded article and one treatment provider; separate material composition subledgers are non-additive. Native new-Product UUID is not a Waste binding.

- Selected flow: Discarded flat steel bale strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Discarded packaging article — paper_label (`paper_label_waste`)

One whole supplied identification label with its real adhesive and printing state. Record any separately purchased ink/ribbon as its own actual formulation rather than assuming it is included. Record the actual whole discarded article and one treatment provider; separate material composition subledgers are non-additive. Native new-Product UUID is not a Waste binding.

- Selected flow: Discarded self-adhesive paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Discarded packaging article — pe_film (`pe_film_waste`)

Only actual incoming-sheet polyethylene wrapping. Verify actual polyethylene film supply and supplier; PET and multilayer film need separate identities. It is removed from the bale stream; opaque/wrapped Tier 1 bales are prohibited. Record the actual whole discarded article and one treatment provider; separate material composition subledgers are non-additive. Native new-Product UUID is not a Waste binding.

- Selected flow: Discarded polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Discarded packaging article — wood_pallet (`wood_pallet_waste`)

Only actual incoming-sheet wooden-board/slat pallets; identify their actual manufacturer and supplied state. No item mass is assumed. Weigh the actual pallet or use a traceable configuration-specific measured mass. Tier 1 outgoing bales are not shipped on skids. Record the actual whole discarded article and one treatment provider; separate material composition subledgers are non-additive. Native new-Product UUID is not a Waste binding.

- Selected flow: Discarded wooden-board pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

###### Discarded packaging article — pet_band (`pet_band_waste`)

Only actual incoming-sheet PET strapping; not PET granules, fibres or steel. Verify the supplied single article. It is removed before the Tier 1 bale and may return externally only when accepted for actual reuse. Record the actual whole discarded article and one treatment provider; separate material composition subledgers are non-additive. Native new-Product UUID is not a Waste binding.

- Selected flow: Discarded polyester incoming-sheet strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `novelis-scrap-rev11`

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

### Process: First quality release (`release`)

#### Inputs

##### Product flows

No exchange is presumed; add named atomic rows only for actual events.

##### Waste flows

No exchange is presumed; add named atomic rows only for actual events.

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

#### Outputs

##### Product flows

###### First released net aluminium clippings (`released_clips`)

Unmelted dry whole-alloy AA5754 sheet clippings at unique first release under the specified receiver supply conditions. Q excludes packaging, separately measured oil/free water and removable foreign matter; it is not pure-Al content or recovery yield. Verify source grade/lot, actual forming/preparation and Product supply/cofunction obligations and acceptance. Payment alone does not establish function or legal status. No generic alloy, ingot or Waste-treatment UUID is adopted. Bind a concrete compatible supply flow and provider only after verification; preserve inherited sheet and manufacturing burdens once. All §3 and §5 qualifiers remain mandatory.

- Selected flow: Baled single-grade AA5754 sheet clippings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `tk-5754-sheet`; `rema-tooth-2026`; `novelis-scrap-rev11`

##### Waste flows

No exchange is presumed; add named atomic rows only for actual events.

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

### Process: Cohort storage and dispatch service (`storage_dispatch`)

#### Inputs

##### Product flows

###### Original-cohort clipping service (`cohort_to_service`)

Internal cohort receipt or actual outward dispatch of the same released material. Preserve gross V, Q_c, opening/closing FG, returns and dispatch identity. This row neither purchases the clips nor creates a second production quantity. Measure incremental handling/storage/repacking/rework loads using actual H and events; divide service burden only by the original Q_c under §8. Reverse a returned shipment in its original cohort and retain actual additional service; consolidated internal release transfers cancel.

The same released lot retains original acceptance, source and burden history. Its UUID remains unresolved; service creates neither new product identity nor Q.

- Selected flow: Baled single-grade AA5754 sheet clippings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `novelis-scrap-rev11`; `ilcd-2010-allocation`

##### Waste flows

No exchange is presumed; add named atomic rows only for actual events.

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

#### Outputs

##### Product flows

###### Original-cohort clipping service (`cohort_dispatched`)

Internal cohort receipt or actual outward dispatch of the same released material. Preserve gross V, Q_c, opening/closing FG, returns and dispatch identity. This row neither purchases the clips nor creates a second production quantity. Measure incremental handling/storage/repacking/rework loads using actual H and events; divide service burden only by the original Q_c under §8. Reverse a returned shipment in its original cohort and retain actual additional service; consolidated internal release transfers cancel.

The same released lot retains original acceptance, source and burden history. Its UUID remains unresolved; service creates neither new product identity nor Q.

- Selected flow: Baled single-grade AA5754 sheet clippings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain unallocated whole physical numerator N_x; refer only to the same normalization operation in §8 with physical and burden series separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `novelis-scrap-rev11`; `ilcd-2010-allocation`

##### Waste flows

No exchange is presumed; add named atomic rows only for actual events.

##### Elementary flows

No exchange is presumed; add named atomic rows only for actual events.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_framework` | all processes | Use this hierarchy only for declared attributional multifunctional production. First establish whether scrap is a supplied secondary material co-function or a waste-treatment service using actual obligations, acceptance and economic context. Waste status alone does not establish zero upstream burden; marketability alone does not determine allocation. A Waste-treatment flow cannot silently replace the Product supply reference. | `ilcd-2010-allocation` |
| `a_subdivide` | source_fabrication; segregation_baling | First assign genuinely dedicated operations and exchanges to their own output; use real or justified virtual subdivision as far as feasible. Separate sheet fabrication shared by panel and clips from dedicated clip collection, preparation and baling. Keep measured physical mass partitions independent of burden assignment. | `ilcd-2010-allocation` |
| `a_causality` | each remaining shared exchange | For each residual exchange identify and quantify its determining physical causal relationship to each function, including upstream sheet and each utility. Demonstrate why a mass, duration or other driver actually determines that exchange. Do not assign one mass fraction to every exchange or equate metal content with causal allocation. | `ilcd-2010-allocation` |
| `a_residual_value` | unresolved common-process exchanges | Only the portion not resolved above may use co-function market values at the same physical separation gate, actual state and contemporary period. Derive a gate value from downstream quotations by removing actual further conditioning, baling, storage and transport differences. Do not compare a finished bale delivered to a remelter with an unfinished panel at the press. Document price basis, yields, sensitivity and unresolved cases; no fixed allocation percentage is prescribed. | `ilcd-2010-allocation` |
| `a_no_credit` | all outputs | Retain the upstream burden assigned by that analysis and actual dedicated preparation/treatment loads. Do not assume burden-free scrap, avoided primary aluminium, recovery yield, remelting credit or negative burden for packaging returns. Preserve the mother-product and scrap inventory-vector reconciliation. | `ilcd-2010-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols collect and aggregate undivided raw records, transfer tickets and stocks only. The aggregation_rule field below identifies the final reporting target basis and performs no division. Convert original units and determine actual attribution/inheritance first; c_normalize_once alone performs A_x/Q. Service retains original Q_c; H is not production.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source` | `source_fabrication` | sheet and parent output | Measured lot records | supplier; sheet lot; AA grade certificate; O temper; gauge; supplied film; gross/tare/substrate mass; parent panels; tool article and replacement; extra lubricant whole formulation; failures; opening/closing WIP; inherited vector | Weigh and link actual sheet-to-panel/clip production tickets; retain supplier documents and all failed cycles. | kg | each receipt and production event | complete declared cohort and opening-stock history | source press shop and identified upstream suppliers | per 1 kg reference flow | calibration; certificates; tool-life records; event tickets |
| `cp_clips` | `segregation_baling` | clip transfers and preparation | Measured event records | source lot; outgoing/incoming internal ticket; gross V; oil; free water; foreign material; size; alloy; baler; rejects; tool blade; WIP states; inherited vector | Weigh segregated pieces and transfers; independently sample contamination and composition; reconcile actual bales and rejection routes. | kg | each transfer and bale | complete cohort including all rejected/zero-output work | source segregation and preparing facility | per 1 kg reference flow | matched transfer tickets; sampling protocol; balance evidence |
| `cp_utilities` | `utilities_residues` | each utility and hydraulic formulation | Meter and stock records | exchange identity; equipment; meter readings; raw unit; pressure; temperature; humidity; interval; tank opening/closing; makeup; leaks; operator event; actual H | Meter actual electricity and volumes; weigh water where mass is needed; measure density independently for any conversion; log startups and idle states. | original meter unit retained | each meter interval and change event | complete cohort and actual service intervals | actual production and utility boundary | per 1 kg reference flow | meter calibration; conditions; provider agreement; density evidence |
| `cp_residues` | `utilities_residues` | each whole residue | Weighed outlet records | outlet lot; whole mass; source partitions; oil; water; measured species; provider; treatment; stocks; timestamps | Weigh each separate residue at its actual provider gate; keep constituent subledgers and source partitions non-additive. | kg | each outlet and stock count | complete cohort including cleanup | one actual provider per whole outlet | per 1 kg reference flow | weigh tickets; analysis; treatment receipts |
| `cp_emissions` | `utilities_residues` | each chemical species and compartment | Species-resolved monitoring | species; CAS; phase; size; compartment; concentration; actual flow rate or integrated volume; conditions; sample interval; moisture; blank; detection limit | Use validated species-resolved measurements; integrate a genuine rate only over measured time; an already integrated volume is used once. Quantify moisture/phase independently and retain detection limits. | kg after documented conversion | each representative event and monitoring interval | production plus all abnormal and service periods | actual release points | per 1 kg reference flow | monitoring method; calibration; speciation and phase evidence |
| `cp_packaging` | `packaging` | each packaging article | Material and stock records | article j; specification; actual purchased receipt P; first non-purchase receipt N_ext; true return ER with original outward history; event id; ownership; original cohort; inherited exchange vector; supplier-included scope; incremental rental/return service; opening/closing empty; opening/closing attached WIP; opening/closing attached FG; opening/closing reusable; gross shipment S; outward return EO; waste W; internal reuse | Weigh each material by mutually exclusive stock state; measure each named article receipt interface and keep P/N_ext/ER mutually exclusive; reconcile all first physical receipts including supplier-with-goods and attached components with gross shipment/return tickets; measure configuration-specific article mass for counts. | kg | each receipt dispatch return and stock closure | whole manufacturing cohort and original FG service history including every external first receipt and true return | incoming sheet and outgoing article boundary | per 1 kg reference flow | material register; tare measurements; external return receipts |
| `cp_release` | `release` | unique first accepted clipping mass | Quality release records | unique lot; alloy; source; specification revision; buyer acceptance; current Tier 1 audit; dimensions; contamination; gross; tare; oil; free water; net Q; timestamp; rejected status | Use calibrated weighing with independent contamination measurements and receiver-specific quality evidence; mark the unique first release once. | kg | each first release or rejection | complete manufacturing cohort | one declared release gate | per 1 kg reference flow | release register; buyer approval; calibration; duplicate-ticket check |
| `cp_service` | `storage_dispatch` | original-cohort service | Physical stock and event records | original Q_c; cohort; opening/closing FG; gross V received/dispatched; shipment id; external returns; original reversal; actual H; storage; repack; rework; incremental exchange vector | Reconcile physical FG separately from first production; log actual service and return/rework loads to the original cohort; preserve original manufacturing burden. | original unit and kg | each service interval shipment and return | from original first release through declared service interval | actual storage loading and dispatch boundary | per 1 kg reference flow | FG tickets; dispatch/return trail; event meters |
| `cp_allocation` | `source_fabrication` | shared exchange burden attribution | Causal and value records | exchange x; dedicated driver; subdivision evidence; physical causality; residual share; same separation gate; actual output state; contemporary price; downstream deductions; sensitivity | Test dedicated and virtual subdivision then exchange-specific determining physical causality; collect same-gate values only for the genuinely unresolved remainder. | original exchange unit and value basis | each route and allocation-period change | same cohort and contemporary value period | common source-process gate | per 1 kg reference flow | causality evidence; matched values; independent reviewer decision |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_raw_units` | all inventory rows | U_x = measured original amount converted once to the declared numerator unit. Integrate an actual rate over its observed interval; do not multiply an integrated meter volume by time. Density belongs to the same substance and measured state. | raw_amount; raw_unit; observed_interval; conversion_evidence | U_x | `novelis-scrap-rev11` |
| `c_attributed_vector` | all inventory rows | For burden-bearing exchanges A_x = inherited opening-WIP burden realised in this cohort + actual dedicated current burden + causally assigned current shared burden + justified residual-value share + assigned incremental rework burden. Carry unrealised closing-WIP vectors forward; reconcile each exchange with mother-product and other actual destinations. | U_x; opening_WIP_vector; closing_WIP_vector; subdivision_evidence; causal_evidence; residual_gate_values; rework_vector | A_x | `ilcd-2010-allocation` |
| `c_unique_q` | released_clips | Q = sum of unique first accepted net dry whole-AA5754-clipping release weights. No dispatch or repeated inspection is added. If Q = 0 retain every actual burden and issue no unit result. | first_release_tickets; net_whole_alloy_mass; unique_lot_ids | Q | `novelis-scrap-rev11` |
| `c_normalize_once` | all inventory rows | For Q > 0 use I_x = A_x / Q once for 1 kg reference flow. For physical bookkeeping substitute the unallocated whole physical numerator N_x in this same operation and keep its results distinct from burden I_x. For later service substitute only A_service,x and original Q_c in this same operation. All card amount and protocol target-basis fields refer to this result; neither is an additional division. H is an observed service driver and never a production denominator. | A_x; N_x; Q; A_service_x; Q_c | I_x | `ilcd-2010-allocation` |
| `c_physical_gates` | all processes | For each declared physical control volume: opening physical stock + actual external inputs + external returns = closing physical stock + every external Product/Waste outlet + real elementary releases. In the manufacturing gate newly released gross V and mother panels leave to FG/service; at the service gate the same V is an input. Cancel only matching internal transfers on consolidation. If another external exchange X exists add it on its true side; deduplicate an OTHER component only for that exact same-side physical entry. | physical_stocks; whole_external_inputs; whole_external_outputs; gross_V; matched_internal_tickets; elementary_releases | physical_balance | `novelis-scrap-rev11` |
| `c_gross_and_elements` | all metal-bearing rows | V = net dry whole-alloy substrate + separately measured free water + oil + removable foreign matter for the same physical lot. Element e = sum of measured constituent mass times its measured e fraction, including actual chemical species. Preserve natural oxide with its actual phase; do not convert all substrate into pure Al or equate assay with chemical mass. A single balance residual cannot estimate two unknown water/oil/species quantities. | whole_lot_mass; independent_water; independent_oil; independent_foreign_matter; independent_speciation; element_assay | gross_V_and_element_balances | `novelis-scrap-rev11` |
| `c_fg_service` | storage_dispatch | Opening FG gross V + newly released gross V + external return received = closing FG gross V + gross dispatched V + other actual external material outlets. Closing FG includes the newly produced Q cohort. Preserve original shipment reversal and inherited manufacturing vector on returns; apply only actual incremental service burden to original Q_c. | opening_FG; newly_released_V; returned_V; closing_FG; dispatched_V; external_outlets; original_shipment_id; cohort_vector | FG_service_balance | `novelis-scrap-rev11` |
| `c_pack_balance` | packaging | Apply b_pack independently to each article j in kg. Count S_j on every gross physical dispatch; reconcile all P, N_ext and true ER events at this same physical gate. Never classify a first non-purchase receipt as ER, use opening stock for a current receipt or omit attached components. Internal stock/WIP/FG issues cancel. Preserve ownership, original cohort and inherited exchange vectors, supplier-included scope and actual incremental rental/return service independently; no zero-burden, new-Q or credit inference. The whole article receipt includes its supplied components once. | opening_packaging_states; P_j; N_ext_j; ER_j; closing_packaging_states; S_j; EO_j; W_j | per_article_packaging_balance | `novelis-scrap-rev11` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | all processes | Trace one alloy/source/sheet state through real manufacture to first supply release; no purchased-scrap-only boundary. | supplier lot certificate and linked process tickets |
| `dq_native` | all bound rows | Verify all native conditions and actual provider compatibility; unavailable identity is distinct from a measured zero. | full native records and supplier compatibility evidence |
| `dq_measurement` | all rows | Retain calibration, uncertainty, detection limits, original units, actual time/conditions and independent oil/water/species measurements. | meter and analytical records |
| `dq_history` | WIP and FG | Retain opening and closing material states plus every inherited exchange vector and original return/dispatch trail. | lot ledger and vector reconciliation |
| `dq_completeness` | all processes | Retain abnormal/zero-output work; identify and add every actual exchange. Unknown applicability or history blocks a complete dataset rather than being silently zero. | signed completeness register with unresolved cases |
| `dq_evidence` | method interpretation | This is a transparent technical synthesis across supplier sheet identity, generic aluminium forming, a historical closed-loop case and a receiver specification. It is not a same-SKU factory measurement or scientific approval. | source-specific scope and independent review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_identity` | reference product | Require one complete reference object, explicit released_clips link and all ordered qualifiers. The verified Product supply identity must match unmelted baled single-grade clips; no Waste, ingot, hydrometallurgical product, rod/profile or post-consumer substitution. | `rema-tooth-2026`; `novelis-scrap-rev11` |
| `v_gate` | release | Check actual alloy, dimensions, contamination, independent free water/oil, operative receiver approval and Tier 1 conditions. A search hit, source case or fixed specification range is not a released factory lot. | `novelis-scrap-rev11` |
| `v_balance` | all processes | Close manufacturing, FG/service and consolidated physical gates; independently close relevant elemental and species ledgers and every packaging account using opening + P + N_ext + ER = closing + gross S + EO + W for each exact article and physical gate. Check named atomic receipt interfaces and measured direction/amount for purchased, supplier-with-goods, first entrusted/borrowed/rented and true-return events; missing actual interfaces or receipt history block dataset completeness. Neither allocation nor Q can repair missing physical matter. Unknown mass/speciation relationships remain unresolved. | `eaa-cutting-2002`; `ilcd-2010-allocation` |
| `v_normalization` | all inventory rows | Verify raw original-unit conversion and burden attribution before the single A_x/Q operation; Q and service Q_c stay identical across all fields and languages. Q = 0 has no unit result. Closing FG is not added to first-release Q. | `ilcd-2010-allocation` |
| `v_allocation` | shared exchanges | Require evidence for dedicated/subdivision and exchange-specific causality before residual same-gate economic allocation; retain sensitivity and mother-product vector reconciliation. No automatic zero scrap burden or recycling credit. | `ilcd-2010-allocation` |
| `v_inventory` | all inventory rows | Confirm one atomic exchange per row, whole supplied formulation once, one provider per whole mixed outlet, exact property/unit chain and full native restrictions in consumer context. Add actual unlisted materials/species; an auxiliary UUID gap remains explicit. | `eaa-forming-2002`; `tower-aluminium-lubrication` |
| `v_history` | WIP and FG | Reject a complete inventory claim when inherited WIP vectors, FG history, return reversal, actual H or complete purchased/non-purchase/true-return physical receipt and gross-shipment packaging records are missing. Preserve P/N_ext/ER exclusivity, original outward history for ER, owner and original cohort, inherited per-exchange vectors, supplier-included scope and actual incremental rental/return service with one burden assignment. Reinspection and rework of released material do not create new production. | `novelis-scrap-rev11`; `ilcd-2010-allocation` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Single-grade unmelted aluminium feed input to a real downstream recovery process subject to applicability review |
| allowed_use | Use only with fully verified boundary/native identity/grade/receiver gate/burden attribution |
| excluded_use | All-aluminium-scrap average; primary metal or ingot substitution; recovery/savings guarantee; replacement of Product supply by Waste treatment |
| required_metadata | All §3 qualifiers; original bases and providers; same-gate allocation; WIP/FG histories; Q and actual H; every packaging account |
| required_quality_disclosure | Measured/calculated/unknown distinctions; native restrictions; gaps; uncertainty; Q0; no scientific-approval claim |
| update_trigger | Grade/supplied-state change; process/receiver-specification change; native/provider change; allocation or measurement-basis change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division CPC 3.0 explanatory notes 30 June 2025 pp203–205 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only. The aluminium scrap leaf does not establish grade or a production method. |
| eaa-cutting-2002 | handbook | European Aluminium Association Aluminium Automotive Manual Manufacturing Cutting version 2002 §§2.3.1–2.3.5 pp26–35 https://european-aluminium.eu/wp-content/uploads/2022/11/aam-manufacturing-2-cutting.pdf | Cold sheet blanking/trimming/piercing and sliver formation. The 6016 trimming image and extrusion example are countercontexts rather than AA5754 measurements. No numeric settings adopted. |
| eaa-forming-2002 | handbook | European Aluminium Association Aluminium Automotive Manual Manufacturing Forming version 2002 §3.2 pp3 and 16–32 https://european-aluminium.eu/wp-content/uploads/2022/11/aam-manufacturing-3-forming.pdf | Aluminium sheet forming with suitable tooling and lubrication; actual handling and interruptions. Tool coating options and lubricant graphs do not specify this plant or an LCA allocation. |
| tk-5754-sheet | handbook | thyssenkrupp Materials UK Information on Aluminium 5754 https://www.thyssenkrupp-materials.co.uk/aluminium-5754.html | EN AW-5754 sheet and O temper identity. Retain separate rod/tube tables and guidance-only physical properties; do not adopt density or composition as a measured lot recipe. |
| novelis-realcar-2020 | extension_guidance | Novelis Jaguar Land Rover case study 14 April 2020 https://novelis.com/case-studies/jaguar-land-rover/ | Primary supplier evidence of 5754 RC automotive sheet and stamping scrap return. Recycled shares and savings remain case claims rather than foreground factors. |
| innoval-realcar-2016 | extension_guidance | Innoval Technology Geoff Scamans REALCAR 17 February 2016 https://www.innovaltec.com/realcar-blog/ | Project-participant evidence of pressing and alloy-family segregation with return to Novelis Latchford. A family-separated case does not prove a particular single-AA5754 lot; no price or scrap percentage transferred. |
| rema-tooth-2026 | standard | ReMA ISRI Specifications January 2026 Nonferrous Scrap Tooth and adjacent entries printed p10 PDF p14 https://www.isrispecs.org/wp-content/uploads/2026/01/2026-January-ReMA_ISRI_Specifications.pdf | Tooth defines single specified alloy new clippings; distinguish mixed Tough and cast/extruded Tread and dross Thirl. Contractual specification gates only. |
| novelis-scrap-rev11 | standard | Novelis Scrap Quality Specification Revision 11 26 September 2019 §§2–5 including Tier 1 bale §5.2 and non-Tier 1 §5.3 https://b2b.mps.novelis.com/_assets/content/ScrapQualitySpecificationsRev11-092619.pdf | Receiver-specific contamination/identification and bale acceptance. Verify the operative purchase order and current Tier 1 audit; this edition is not universal contemporary acceptance. |
| bronneberg-aluminium-baling | extension_guidance | Bronneberg Aluminium Recycling https://www.bronneberg-recycling.co.uk/solutions/aluminium-recycling/ | Homogeneous aluminium scrap baling and electric equipment as technical route evidence. Installed power is not measured energy or proof of a particular factory installation. |
| tower-aluminium-lubrication | extension_guidance | Tower Metalworking Fluids Lubrication Advice for Forming Aluminum https://www.towermwf.com/lubrication-advice/ | Actual 5754 forming case and incompatible lubricant alternatives; collect the whole supplied formulation and actual constituents. No universal dilution or VOC species inferred. |
| ilcd-2010-allocation | official_guidance | European Commission JRC ILCD Handbook General guide Detailed guidance first edition March 2010 §§7.9.2–7.9.3 printed pp255–272 PDF pp275–292 https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctional-process hierarchy with dedicated/virtual subdivision then exchange-specific determining physical causality then residual same-gate economic value. Industrial documents do not supply this allocation rule. |
