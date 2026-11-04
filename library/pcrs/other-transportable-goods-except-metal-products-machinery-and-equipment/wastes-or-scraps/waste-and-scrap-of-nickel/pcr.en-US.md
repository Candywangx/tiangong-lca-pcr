---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-nickel
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Clean Nickel 200 sheet-shearing offcuts for nickel recovery

## 1. Scope and Applicability

This attributional PCR covers one source-segregated stream of clean solid new Nickel 200 (UNS N02200) sheet offcuts for a named nickel-recovery receiver. Start with actual supplied annealed, pickled, uncoated and unclad sheet; include its original mechanical shearing into parent blanks, offcut formation and separate capture, necessary dry sizing, inspection, grade segregation, agreed first release, packing and attributable stock/handling/road delivery to the receiver acceptance gate. Upstream refining, casting, rolling, annealing and pickling remain in the compatible source-sheet provider or explicit linked operations exactly once. Purchase of ready-made scrap followed only by packing does not implement this method.

Exclude nickel-containing stainless or other iron-primary scrap, copper-primary cupronickel, mixed or unidentified alloys, coated/clad sheet, service-return contaminated equipment, turnings, powders, ash, sludge, smelter slag, batteries, recovered nickel metal and remelted ingots. Nickel presence alone is insufficient: confirm the actual N02200 source and nickel-primary metallic identity by certificate and relevant assay, including Ni separately from Co. The UN leaf title does not supply an assay threshold. Do not combine Nickel 201 or other grades into a selector.

This is a transparent technical synthesis of independent primary sources, not a single factory, current order or measured inventory. NASA documents actual annealed/pickled Nickel 200 sheet shearing; its later stress relief, EDM, etch, lapping and Cu/Inconel brazing are outside the clean offcuts separated before those operations. VDM corroborates grade/form and contamination context; its wet-machining coolant and welding requirements do not establish those operations here. Special Metals distinguishes typical composition from a Ni-plus-Co specification; VDM uses a different grade guarantee. Neither is a fixed actual-lot recipe or density. Nautica supports source documents, grade separation, solid-offcut preparation and negotiated receiver tests, with service returns and turnings as countercontext. No default composition, yield, density, coolant, machine load, emissions, recovery efficiency or credit is supplied.

Q_c is the newly first-released net offcut mass of cohort c, excluding free liquid, detachable contamination and packaging. Closing released FG is already in Q_c; shipment, return, repeat inspection or rework of released material never creates it again. Later services remain attributable to the original Q_c.

HACO provides independent primary evidence of an electric-hydraulic shear architecture, adjustable blade gap and optional scrap handling. It does not establish the NASA machine identity, a Nickel 200 machine rating or a current site setting. Confirm the actual machine material capability, knife configuration, hydraulic formulation and handling arrangement; published steel capacities and motor powers are not transferred. Any needed cutback is an explicit return to the shearing operation with retained inherited load; separate actual preparation equipment requires its own atomic consumables and measured energy.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-nickel |
| classification_refs | CPC 3.0:39362; narrower proposed relation; independent acceptance required |
| covered_products | Clean solid new N02200 annealed/pickled sheet-shearing offcuts for nickel recovery |
| excluded_products | Ferrous or copper-primary scrap; mixed grades; coated/clad sheet; turnings; powder; ash; slag; sludge; batteries; recovered metal or remelted ingots |
| representative_product | One certified Nickel 200 source heat, clean sheet-clipping lot at its first agreed recovery-grade release |
| production_route | Supplied sheet genealogy → original parent-blank shearing → segregated offcut capture → necessary dry sizing/grade inspection → first release → original-cohort packing/storage/delivery to named receiver |
| market_state | Solid new metallic offcuts, actual composition and size, no free liquid or detachable contamination; pallet/strap tare excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the specified single-grade solid sheet offcuts for the named nickel-recovery receiver |
| How much | 1 kg reference flow |
| How well | Documented N02200 source and actual assay, clean uncoated/unclad new solid offcuts meeting the agreed receiver tests and limits |
| How long or cycle | One uniquely first-released cohort and attributable later services; no assumed downstream recovery yield or life |
| reference_flow_link | `finished` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Nickel Scrap `3bf7374b-cece-4fd3-84af-c5252799fd38` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source generator and one N02200 heat genealogy; independent actual Ni and Co assays plus relevant other elements; annealed pickled sheet certificate and actual dimensions; nickel predominance evidence separately from mere nickel presence; no coating or cladding and actual oxide or oil contamination; mechanical shearing and source segregation before mixed-alloy collection; parent blank separation gate and burden partition; refining casting rolling annealing pickling and inbound-transport provider history counted once; actual hydraulic and cleanup configuration; agreed solid-offcut size and receiver acceptance tests and limits; first-release event IDs and net mass Q_c; opening and closing WIP quantities and each inherited exchange vector; opening and closing released FG with original Q_c and returns or reversals; all failed zero-output start-stop idle cleanup and rework loads; actual utilities and specific material providers; CN grid-average user supply below 1 kV when selected; gross physical V separately from allocated A; attributable storage handling and dispatch to receiver; separate complete wooden-pallet and steel-strap stock or return or waste ledgers; whole effluent or reject mass versus non-additive source and composition partitions; actual emission species and media with unresolved identities explicit |

Declare every qualifier in dataset metadata, process notes or reference-flow comment. All native restrictions in the finished card and other complete flow descriptions remain part of applicability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference amount and finished row are 1 kg of newly first-released net solid offcuts, not kg contained Ni. Weigh using cp_release; include inherent metallic constituents but exclude free liquid, detachable contamination and pallet/strap tare. Closing released FG already belongs to Q_c. |
| `raw_conversion` | all inventory rows | actual row property | row unit | Preserve raw units before assignment: convert tonnes to kg and kWh to MJ with 3.6 MJ/kWh; litre to m3 with 0.001 m3/litre; t*km to kg*km with 1000. Integrate an actual rate over time only; a cumulative volume is not multiplied by duration. Any volume-to-mass closure uses independent same-substance density at actual composition and temperature/pressure, not the secondary flow-property coefficient, water density for oil, or a catalog nickel density. |
| `single_normalization` | all inventory rows | actual row property | per reference flow | Collection stores unnormalized raw amounts. calc_raw converts units; calc_assign establishes row numerator A_r_c; calc_once divides by the original cohort Q_c exactly once. Cards and aggregation refer to that same result, never divide it again. Gross physical V and co-output quantities remain separate from attributed burden A. For Q_c=0 retain all loads and no unit result. |
| `native_units` | selected native exchanges | verified reference property | kg; MJ; m3; kg*km | Mass uses group `93a60a57-a4c8-11da-a746-0800200c9a66` and kg; electricity uses Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` with energy group `93a60a57-a3c8-11da-a746-0800200c9a66` and MJ, which does not make electricity a fuel. Hydraulic oil uses Volume `93a60a56-a3c8-22da-a746-0800200c9a66` with group `93a60a57-a3c8-12da-a746-0800200c9a66` and m3. Road service uses mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` with group `3620148f-c5db-48ce-9065-a10092089aca` and kg*km. These service units do not establish metal mass or density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied annealed pickled uncoated/unclad N02200 sheet with complete inherited provider history; original blank-shearing operation and all actual utilities/materials |
| starting_condition_role | Foreground source-sheet receipt and original scrap generation; no zero-burden ready-scrap cut-off |
| product_classification_scope | Narrow clean new N02200 sheet-offcut subset of CPC3.0:39362; positive mapping acceptance is separate |
| recursive_input_rule | Compatible purchased scrap is recorded with its true upstream provider and declared recycling convention once; it cannot stand in for the original shear route or erase prior burdens |
| upstream_dataset_requirement | Match grade, flat form, supplied state, gate, geography, time and allocation convention; include refining/rolling and other source-sheet operations once. Incompatible or missing core burden evidence prevents a quantitative claim, while routine provider matching remains collection work |
| disclosure | All required qualifiers and full row descriptions; gross physical balances; attribution and inherited WIP/FG vectors; original Q_c services; every packaging ledger; actual species and unresolved identity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_identity` | source and finished product | Verify the one N02200 heat, actual independent composition, annealed/pickled sheet state, nickel-primary identity, no coating/cladding and clean solid clipping form. Exclude ferrous scrap, ash/slag and material first contaminated by downstream Cu/Inconel processing. A native name, CAS or classification alone does not prove applicability. | `un-cpc3-2025`; `sm-nickel200-2006`; `vdm-nickel200-2022`; `nasa-nickel-sheet-1972`; `nautica-nickel-scrap` |
| `sb_complete_route` | shear and prepare | Include original sheet cutting, segregated offcut capture, actual transport, inspection, necessary dry resizing and first receiver-grade release. Record actual hydraulic oil, tool consumption, protection, extraction, cleanup water, effluent, fines and emissions separately when present. The dry mechanical route does not prescribe cutting coolant, furnace, steam, boiler or reaction gas; if actual coolant, cleaning chemical, fuel, filter medium, heat exchanger water or another exchange exists, add a specific atomic row with actual formulation/state/destination before claiming completeness. Never replace a real manufacturing load with a packing-only purchase or a zero. | `vdm-nickel200-2022`; `nasa-nickel-sheet-1972`; `nautica-nickel-scrap`; `haco-hslx-shearing` |
| `sb_upstream_once` | source sheet and parent blank | Represent supplied whole sheet and its refining, casting, rolling, annealing, pickling and transport histories once through the actual provider graph. Maintain the parent blank path and the source-separation gate, with its own exclusive downstream operations. Keep provider-bundled processes and explicit stages mutually exclusive. No presumption of zero historical burden, substitution or avoided primary nickel. | `nasa-nickel-sheet-1972`; `jrc-ilcd-2010` |
| `sb_stocks` | all material gates | For every material and relevant element retain opening and closing WIP, inherited per-exchange vectors, actual transfers and internal recirculation. Capture start/stop, idle, cleaning, failed/Q0 lots and real rework rather than dropping them. Keep whole-stream physical V and mutually exclusive source partitions independent from attributed A. Cancel only matched internal transfers with equal state and inherited vector at combined gates. | `jrc-ilcd-2010` |
| `sb_fg_services` | released cohorts and receiver gate | Keep first-release Q_c and later services distinct. Closing released FG is already in Q_c; opening FG carries its historical vector and original Q_c. Link storage, handling, repacking, reinspection, actual delivery and any released return to that original cohort. H counts service events only and never replaces Q_c. Combined production/service models cancel internal first-release transfers once; do not count dispatch or a returned previously released lot as new production. Correct an erroneous original release at its original event and reconcile the linked Q_c and FG records together. Distinguish a documentary correction from real return or destruction; never treat the same correction as both a Q_c reversal and an additional physical sink. | `nautica-nickel-scrap`; `jrc-ilcd-2010` |
| `sb_packaging` | each pallet and each strap | Independently reconcile O_empty + O_WIP + O_FG + O_reusable + P + N_ext + ER = C_empty + C_WIP + C_FG + C_reusable + S + EO + W. P is actual purchased packaging, including packaging actually acquired within the whole purchased sheet consignment price without a separate invoice. N_ext is actual first external nonpurchase receipt, including an empty pallet first borrowed or leased separately from a third-party pool; it is neither P nor ER. ER requires a documented prior outward event for that same component; EO is outward reusable return. Assign each physical receipt exclusively to P, N_ext or ER by receipt ID and history. S is packaging leaving with gross physical shipments, including repeat dispatch. Opening/closing empty, WIP-attached, FG-attached and reusable states are mutually exclusive for each article at each stock date. Internal reuse cancels and is no purchase, Q or automatic coproduct. Treat a whole purchased pallet once with embodied fasteners; add a separately purchased seal or clip only if actually separate. Preserve any burden already in the sheet provider once while its physical packaging still enters this ledger, without a second upstream purchase on reuse. Record gross physical V separately from procurement and new-manufacture burdens; retain actual owner, custody, inherited exchange vector and compatible provider once for each actual exchange, with missing history explicit rather than assumed zero. The existing specific atomic input may represent the same article form received through N_ext; no duplicate same-item card is required. Any different actual inbound packaging component requires its own atomic row and ledger. | `nautica-nickel-scrap` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `shear` | Original sheet-to-blank shearing and segregated generation | required | Actual original N02200 sheet processing; complete inherited upstream link | foreground | source_sheet receipt → parent_blank plus generated_trim |
| `prepare` | Offcut inspection and recovery-grade release | required | Actual source-traced own offcuts; dry sizing only when needed | foreground | finished; Q_c first-release mass |
| `service` | Original-cohort packing storage and delivery | required | Actual operations through the named receiver gate; later cohort-linked returns included | service | original Q_c; H is service activity only |

Every card is conditional on its specific actual exchange unless the mandatory route establishes it. Absence requires affirmative records, not an assumed zero. Raw protocols store unnormalized values and all cards reference the single calc_once result. Descriptions constrain the selected flow and are required consumer context.

### Process: Original sheet-to-blank shearing and segregated generation (`shear`)

#### Inputs

##### Product flows

###### Certified source sheet (`source_sheet`)

One supplied uncoated and unclad Nickel 200 (UNS N02200) annealed, pickled sheet lot, mechanically sheared to parent blanks. The native Product record describes manufactured flat products in a production mix at plant; it has no CAS, fixed grade, dimensions or geography, and no synonyms. Its English and Chinese comments concern nickel flat products. This is not bar, tube, cathode, powder, stainless steel or scrap. Require actual heat certificate, independent Ni/Co and other-element analysis, thickness, surface condition and a compatible single provider; the generic record establishes neither composition nor a background dataset. Record whole supplied sheet mass once, including embodied constituents; attach complete refining, casting, rolling, annealing, pickling and transport histories once without repeating an already included provider stage. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Plates, sheet, strip and foil, of nickel `ffa8544a-b9fb-44e1-abb5-14032f03ecf7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_genealogy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_genealogy`
- Sources: `sm-nickel200-2006`; `vdm-nickel200-2022`; `nasa-nickel-sheet-1972`

###### Shear and collection electricity (`shear_electricity`)

Meter actual electric shear drives, controls, electric handling and any extraction; retain start/stop, idle, failed cuts and cleanup. Native Product: CN supply below 1 kV, grid-average consumption mix to user; comments include production and transmission to consumers. Use only at that actual voltage, geography and supply gate with one compatible grid provider. It is not high-voltage generation or a renewable-specific supply. Preserve every native name component and customer-side scope; no default energy intensity. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single recorded q_r_c result; raw record cp_raw.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `nasa-nickel-sheet-1972`; `haco-hslx-shearing`

###### One steel shear knife (`shear_knife`)

One steel shear knife serving this mechanical cutting operation, not a saw-blade purchase or a combined tool kit. Native Product is a GLO at-plant production mix for auxiliary sawing/shearing consumables; all synonyms and comments describe steel blades and gate-to-gate blank preparation, with no quantified wear rate or grade. The official alternative-form name is preserved verbatim, while this card represents only one shear knife. Measure actual replacement and life consumption by knife identity and campaign; retain resharpening services and losses separately, without guessing kg per knife. A supplier must match actual steel, shape and gate. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Steel saw blades or shear knives `970801c9-08c1-4d9c-999d-4b66609430be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_consumables.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `vdm-nickel200-2022`; `nasa-nickel-sheet-1972`; `haco-hslx-shearing`

###### Hydraulic circuit oil (`hydraulic_oil`)

Conditional only when the actual electrically driven shear has a hydraulic circuit: one purchased formulated mineral-base hydraulic oil, measured in m3. Native Product Volume reference describes an engineered power-transmission, lubricating and heat-transfer fluid of mineral or synthetic base oil plus additives; CAS, fixed grade and geography are absent. The selected subset is mineral-base, with supplier formulation and circuit records required; it is not cutting coolant, fuel or a pure base-oil ingredient. Buy the whole formulation once; constituent/additive mass is a non-additive subledger. Record initial charge, opening/closing circuit stock, top-ups, drained oil, leakage and oil retained on solids. Use independently measured same-formulation density at actual temperature only for mass closure. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the single recorded q_r_c result; raw record cp_consumables.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `nasa-nickel-sheet-1972`; `haco-hslx-shearing`

###### Protective cardboard contact pad (`contact_cardboard`)

Conditional single uncoated cardboard pad isolating the sheet from iron contamination at the shear support. VDM lists cardboard alongside felt and film in its welding-workshop tools context; it does not prove a specific pad is used at this site. Use only the actual cardboard configuration; add a separate specific exchange if actual felt or film is used. This is a machine-contact consumable, not transport packaging. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Uncoated cardboard contact pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_consumables.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `vdm-nickel200-2022`

#### Outputs

##### Product flows

###### Parent Nickel 200 blank at separation (`parent_blank`)

The actual as-sheared flat blank continuing to its own specified use or further manufacture. Use the same manufactured flat-product identity restrictions as source_sheet: one N02200 heat, annealed/pickled before cutting, no cladding/coating, actual dimensions and one at-plant provider; no native fixed CAS/grade/geography is supplied. Record gross physical V independently from the scrap-attributed input burden A. The blank is a separate co-output, not the reference row and not a waste subtraction. Downstream annealing, EDM, etching, lapping or brazing performed exclusively on it belongs to its own product path, never to clean offcuts already separated beforehand. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Plates, sheet, strip and foil, of nickel `ffa8544a-b9fb-44e1-abb5-14032f03ecf7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_physical.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical`
- Sources: `sm-nickel200-2006`; `nasa-nickel-sheet-1972`

###### Segregated sheet offcuts (`generated_trim`)

One source-traced clean solid Nickel 200 sheet clipping stream, still awaiting recovery-grade release. Native Product Nickel Scrap has CAS 7440-02-0 and Mass reference, no fixed grade, route, geography or morphology. Both language comments discuss nickel in stainless equipment and alloys and a nickel-content melt-value calculator; these are broad examples and price claims, not permission to mix stainless steel, presume an environmental benefit or model pure recovered nickel. Bind only these uncoated/unclad N02200 new sheet offcuts, with actual assay, heat genealogy, size, contamination and receiver specification. It is neither smelter slag, ash, swarf nor recovered metal. Carry its inherited exchange vector once; the shear output and preparation input cancel on consolidation. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Nickel Scrap `3bf7374b-cece-4fd3-84af-c5252799fd38`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_physical.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical`
- Sources: `nasa-nickel-sheet-1972`; `nautica-nickel-scrap`; `haco-hslx-shearing`

##### Waste flows

###### Spent steel shear knife (`spent_knife`)

Measure the actual spent knife crossing to its declared recovery/treatment destination, with its tool-steel identity and any adhered nickel reported as a subledger. Do not call the whole worn knife nickel scrap or subtract new tool mass as an emission. Internal resharpening is not a new external knife purchase. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Spent tool-steel shear knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_consumables.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `vdm-nickel200-2022`

###### Spent protective cardboard pad (`spent_contact_cardboard`)

One actual contaminated pad waste at transfer, including its measured adhered material; record composition and destination without adding its nickel subledger again to whole waste mass. Do not use a clean recovered-paper product UUID for this contaminated exchange. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Nickel-contaminated cardboard contact pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_consumables.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `vdm-nickel200-2022`

###### Drained hydraulic lubricating oil (`used_oil`)

Conditional actual used mineral-base hydraulic lubricating oil transferred as one contaminated whole stream. Native Waste flow at generation covers petroleum or synthetic lubricating oils contaminated through use and leaves treatment unspecified; no fixed water/additive fraction is imposed. Verify actual oil function and treatment provider; measure water, nickel and other contamination as non-additive composition subledgers, never as an assumed 50/25/15 recipe. Do not treat an entire mixed cleanup-waste collection as this oil. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_consumables.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `vdm-nickel200-2022`

###### Captured metallic nickel fines (`captured_shear_fines`)

Conditional actual captured metallic N02200 fines from this operation, separately weighed at transfer and analysed for nickel, other metals, oil and water. Capture media, oxide-rich material and mixed floor sweepings are distinct specific exchanges if present. Do not infer fines generation or capture efficiency from missing balance mass, call all dust elemental Ni, or count captured matter again as an air emission. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Captured Nickel 200 metallic fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_species.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `vdm-nickel200-2022`; `nautica-nickel-scrap`

##### Elementary flows

###### Metallic nickel escaping to outdoor air (`shear_nickel_air`)

Conditional only for a measured emission of metallic nickel to the declared outdoor air compartment, with species, particle structure and measurement basis demonstrated. This outdoor exchange requires its actual air compartment; an indoor-air nickel identity is incompatible. A measured total-Ni analytical indicator does not establish Ni(0), NiO or a particle-size distribution. Keep actual species individually identified and unresolved species explicit; never fit species and total emission from one residual. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Metallic nickel emission to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_species.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `vdm-nickel200-2022`

### Process: Offcut inspection and recovery-grade release (`prepare`)

#### Inputs

##### Product flows

###### Own generated offcuts transferred to preparation (`received_own_trim`)

One source-traced clean solid Nickel 200 sheet clipping stream, still awaiting recovery-grade release. Native Product Nickel Scrap has CAS 7440-02-0 and Mass reference, no fixed grade, route, geography or morphology. Both language comments discuss nickel in stainless equipment and alloys and a nickel-content melt-value calculator; these are broad examples and price claims, not permission to mix stainless steel, presume an environmental benefit or model pure recovered nickel. Bind only these uncoated/unclad N02200 new sheet offcuts, with actual assay, heat genealogy, size, contamination and receiver specification. It is neither smelter slag, ash, swarf nor recovered metal. Carry its inherited exchange vector once; the shear output and preparation input cancel on consolidation. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Nickel Scrap `3bf7374b-cece-4fd3-84af-c5252799fd38`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_prepare_genealogy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_genealogy`
- Sources: `nasa-nickel-sheet-1972`; `nautica-nickel-scrap`

###### Sorting and handling electricity (`prepare_electricity`)

Meter actual preparation-stage inspection, sorting, electric handling and any extraction; retain attributable start/stop, idle, failed-release and cleanup loads. Any cutback returns to shear with its inherited load; do not meter the same shear electricity again here. Native Product: CN supply below 1 kV, grid-average consumption mix to user; comments include production and transmission to consumers. Use only at that actual voltage, geography and supply gate with one compatible grid provider. It is not high-voltage generation or a renewable-specific supply. Preserve every native name component and customer-side scope; no default energy intensity. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single recorded q_r_c result; raw record cp_prepare_raw.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_raw`
- Sources: `nautica-nickel-scrap`

###### Equipment cleanup supply water (`cleanup_water`)

Conditional metered treated municipal supply for actual equipment cleanup, not assumed sheet washing or cutting coolant. Native Product is tap-water production/supply at factory or to consumer; synonyms and comments require treated potable public water and note location-dependent treatment. No CAS or geography is fixed. Use Mass/kg and one compatible actual supply provider. The secondary Volume coefficient is not independent density evidence; use an independently measured water density at the same state if the raw meter is volumetric. Retain effluent, evaporation, retained water and any real return separately; no steam or boiler is assumed. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_prepare_raw.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_raw`
- Sources: `vdm-nickel200-2022`; `nautica-nickel-scrap`

#### Outputs

##### Product flows

###### First released recovery feed (`finished`)

One clean solid new-sheet offcut lot of uncoated/unclad Nickel 200 N02200, after documented source separation, inspection, necessary dry sizing, agreed grade verification and first quality release for the named nickel recovery receiver. Use the native Product Nickel Scrap, CAS7440-02-0 and Mass/kg, with no native fixed grade, process, geography or particle form; native stainless/alloy examples and melt-value wording establish neither stainless applicability, recovered pure metal, recycling benefit nor price credit. Require heat genealogy and actual Ni separately from Co, complete relevant element assay, dimensions, oil/moisture/oxide/foreign matter, no coatings/attachments and the receiver’s actual tests/acceptance limits. Whole as-released offcut mass includes its inherent metallic constituents, excludes detachable contamination, free liquid and all pallet/strap tare, and is not pure-Ni content. It is neither ash, slag, turnings nor remelted ingot. Q is counted once at this release; accepted closing FG already belongs to Q. Storage, shipment, reinspection and released-lot rework never create new production. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Nickel Scrap `3bf7374b-cece-4fd3-84af-c5252799fd38`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `un-cpc3-2025`; `sm-nickel200-2006`; `vdm-nickel200-2022`; `nasa-nickel-sheet-1972`; `nautica-nickel-scrap`

##### Waste flows

###### Captured preparation fines (`captured_prepare_fines`)

Conditional actual captured metallic N02200 fines from this operation, separately weighed at transfer and analysed for nickel, other metals, oil and water. Capture media, oxide-rich material and mixed floor sweepings are distinct specific exchanges if present. Do not infer fines generation or capture efficiency from missing balance mass, call all dust elemental Ni, or count captured matter again as an air emission. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Captured Nickel 200 metallic fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_prepare_species.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_species`
- Sources: `vdm-nickel200-2022`; `nautica-nickel-scrap`

###### Rejected contaminated sheet offcuts (`rejected_nickel_trim`)

Weigh rejected N02200 offcuts as one physically specified whole stream to its actual alternative treatment destination. Identify each contamination and composition subledger; keep whole mass and mutually exclusive source partitions non-additive. Do not hide stainless scrap, coatings, sweepings or metal ash inside this label; each distinct actual stream needs its own atomic row and provider. Failed and zero-output loads remain in the cohort burden. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Rejected contaminated Nickel 200 sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_prepare_physical.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_physical`
- Sources: `nautica-nickel-scrap`

###### Nickel-bearing equipment cleanup effluent (`cleanup_effluent`)

Conditional actual whole equipment-cleanup aqueous effluent transferred to one treatment provider, not a direct discharge to nature. Measure whole mass and independent dissolved/suspended metals, oil and water; these are subledgers, not extra purchases or additional whole-stream outputs. Dissolved Ni concentration alone does not specify a nickel-salt molecule. Add real species and destinations separately if treatment occurs onsite. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Nickel-bearing equipment cleanup wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_prepare_species.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_species`
- Sources: `vdm-nickel200-2022`; `nautica-nickel-scrap`

##### Elementary flows

###### Metallic nickel escaping to outdoor air (`prepare_nickel_air`)

Conditional only for a measured emission of metallic nickel to the declared outdoor air compartment, with species, particle structure and measurement basis demonstrated. This outdoor exchange requires its actual air compartment; an indoor-air nickel identity is incompatible. A measured total-Ni analytical indicator does not establish Ni(0), NiO or a particle-size distribution. Keep actual species individually identified and unresolved species explicit; never fit species and total emission from one residual. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Metallic nickel emission to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_prepare_species.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_species`
- Sources: `vdm-nickel200-2022`

###### Water evaporation from cleanup (`cleanup_water_vapour`)

Conditional independently established evaporation of actual cleanup water to outdoor air. Keep liquid retention, effluent, phase change and actual reaction water separate. Dry mechanical shearing creates no assumed stoichiometric water; a balance residual is not evidence of evaporation. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_prepare_species.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_species`
- Sources: `nautica-nickel-scrap`

### Process: Original-cohort packing storage and delivery (`service`)

#### Inputs

##### Product flows

###### Released-stock handling electricity (`service_electricity`)

Meter actual post-release storage and handling equipment and controls; retain attributable start/stop, idle, failed-service and cleanup loads. Shear or preparation electricity already recorded remains in the inherited vector and is not metered again as service consumption; record only actual later increments. Native Product: CN supply below 1 kV, grid-average consumption mix to user; comments include production and transmission to consumers. Use only at that actual voltage, geography and supply gate with one compatible grid provider. It is not high-voltage generation or a renewable-specific supply. Preserve every native name component and customer-side scope; no default energy intensity. Record actual storage, electric lifting, repacking, repeat inspection and loading services against the original cohort Q_c, including already released returns; H handling events are not a production denominator. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single recorded q_r_c result; raw record cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `nautica-nickel-scrap`

###### One wooden transport pallet (`wood_pallet`)

One complete actual wooden pallet securing solid offcuts. Native Product is a manufactured at-plant production mix of wood load platforms; comments describe portable unit-load handling/storage platforms and alternative platform/collar forms, without fixed species, pallet standard, mass, geography or recipe. Only the actual pallet form is represented; it is not a EURO-pallet claim, a purchase of collars or loose wood, or a package assortment. Weigh actual pallet tare including embodied fasteners once; do not repurchase its components. Retain each pallet’s opening empty/WIP/FG/reusable, purchase P, first external nonpurchase receipt N_ext, true external return ER, closing, gross dispatch S, outward return EO and waste W ledger; internal reuse cancels. This same specific atomic input also records an actual first separately borrowed/leased pallet of this form, with measured receipt quantity, actual input interface, article/receipt ID, time, source, owner, custody, cohort and inherited vector/provider under cp_packaging. P includes actually acquired packaging within a purchased sheet consignment even without its own invoice; first borrowing/leasing is N_ext, and ER needs that component’s prior outward event. Keep these receipt classes mutually exclusive. Gross physical V is not a new manufactured-pallet purchase or burden quantity: verify actual provider/history and attribute its eligible vector and actual service increments once, without inventing a new-manufacture load, assuming zero history or duplicating the card for the same item. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nautica-nickel-scrap`

###### One steel securing strap (`steel_strap`)

One actual steel strap used to secure the sheet-offcut bundle or pallet, with actual grade, coating, mass and supplier recorded. A fixed 99% Fe/1% C recycled/mechanically decomposed/melted steel-band identity is unverified for this actual strap; keep its UUID unresolved until grade and route match. Record the whole strap once and each packaging ledger leg, including used strap on returns, cut-off strap waste and internal reuse without a new purchase. Separate any actual seal/clip or non-steel strap as its own exchange. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nautica-nickel-scrap`

###### Actual road transport to receiver (`road_transport`)

Actual road-freight service for source receipt, intersite transfer and delivery to the named recovery receiver, with segments identified and source-sheet transport already included in its provider excluded from a second purchase. Native Product describes road freight, production mix at plant, no fixed vehicle, fuel, geography or CAS; no synonyms or additional comments. Use its mass*distance property only for service work: kg*km reference unit, not material mass. Collect loaded gross transported mass including packaging, route distances and actual vehicle/load constraints; assign causal service by the true limiting load and duration/distance. One compatible actual carrier provider includes its fuel/emissions once; do not also charge those as direct site fuel. Include separately caused return/empty travel and handling without assuming default vehicle or distance. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Use the single recorded q_r_c result; raw record cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `nautica-nickel-scrap`

#### Outputs

##### Waste flows

###### Discarded wooden pallet (`waste_pallet`)

One actual packaging article waste, separately weighed and sent to one declared recovery/treatment provider. Keep its material composition and attached nickel as non-additive subledgers; packaging is excluded from product Q. Match the corresponding packaging purchase/stock/return ledger and keep outward reusable returns distinct from waste; no automatic coproduct or recycling credit. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Discarded wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nautica-nickel-scrap`

###### Cut or discarded steel strap (`waste_strap`)

One actual packaging article waste, separately weighed and sent to one declared recovery/treatment provider. Keep its material composition and attached nickel as non-additive subledgers; packaging is excluded from product Q. Match the corresponding packaging purchase/stock/return ledger and keep outward reusable returns distinct from waste; no automatic coproduct or recycling credit. The only normalized result for this card is q_r_c defined in calc_once after calc_raw and calc_assign, with no second division by Q_c.

- Selected flow: Discarded steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single recorded q_r_c result; raw record cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `nautica-nickel-scrap`

## 7. Allocation and Co-product Handling

This section applies only to the declared attributional allocation cases. Dedicated process evidence and complete preceding source/boundary context are required.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_scope` | attributional multifunctionality | Use this hierarchy only where the declared attributional system actually requires partitioning. Establish actual waste/co-product/transfer status and study-wide recycling convention at each gate; an industrial source does not establish an LCA allocation rule, and ILCD recycling annex formulas are not automatically adopted. No fixed shares, free scrap or recovery credit. | `jrc-ilcd-2010` |
| `al_subdivide` | each input and output burden | First separate dedicated operations and meter lots; then use virtual subdivision for exclusive exchanges. Track parent-blank-only annealing/EDM/etching/brazing separately from clean offcuts separated earlier. Assign scrap-only segregation, handling and grade tests directly to scrap. Retain actual failure and cleanup loads in the functions that caused them. | `nasa-nickel-sheet-1972`; `jrc-ilcd-2010` |
| `al_causality` | remaining shared exchanges | For each remaining exchange determine which physical relation actually determines its existence and quantity. Embodied sheet assigned to each metallic output is not a blanket allocation of all electricity and losses by output mass. Cutting can be determined by the required parent-blank geometry while separate scrap preparation is driven by the scrap function. Demonstrate actual drivers exchange by exchange with measurements and process reasoning; do not arbitrarily choose mass, machine time, energy or economic allocation. | `jrc-ilcd-2010` |
| `al_residual_market` | genuinely inseparable remainder | Only after exclusive assignment, subdivision/virtual subdivision and determining physical causality are exhausted may a genuine remaining shared exchange be apportioned by contemporaneous market values of co-functions in their actual states at the same common process gate. Retain quantities, states, prices, dates, currency, missing-value handling and sensitivity; downstream refined-metal prices cannot substitute for offcut value at this gate. Never include a fraction already assigned earlier. | `jrc-ilcd-2010` |
| `al_conservation` | allocation and provider graph | Keep the unallocated physical system and all co-output burden vectors auditable, even if only the scrap dataset is delivered. Reconcile each exchange across parent blanks, scrap, rejected material, retained WIP and actual treatment; no missing inherited load or duplicated recycling provider. A whole mixed effluent or reject stream has one provider and mutually exclusive source/composition subledgers, never extra purchases for the same constituents. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The following protocols are raw ledgers. Numeric placeholders are future collection requirements, not factory observations. They retain event-level units and never pre-divide by Q_c. The aggregation_rule field declares only the final per-1-kg result basis of the same later calc_once result; it performs no extra aggregation or division.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_genealogy | shear | whole sheet and internal own trim | certificates and transfer records | heat id; source lot; N02200 certificate; Ni; Co; all relevant element results; annealed/pickled and no coating evidence; dimensions; receipt mass; upstream process graph; allocation convention; inherited exchange vectors; dates and provider ids | Match certificates to measured source and segregated transfers; inspect complete provider boundaries for duplicated refining/rolling/transport; assay independently where required | kg; % | each heat and transfer | complete cohort and inherited stocks | source supplier and both sites | per 1 kg reference flow | heat-linked certificate; lab chain of custody; transfer tickets; provider boundaries |
| cp_release | prepare | first released net solid offcuts | calibrated weighing and grade release | cohort c; release event id; gross mass; measured pallet and strap tare; free liquid and detachable rejects; net first-release Q_c; Ni and Co and other assay; dimensions; actual receiver tests/limits; decision; original event id for reversal; FG cohort ids | Weigh on calibrated scales and subtract measured packaging/free liquid/detachable contamination. Verify grade and unique first release. Keep closing accepted FG already inside Q_c, with returns and any linked reversal explicit | kg | each release and correction | cohort release and full later history | release site and named receiver | per 1 kg reference flow | scale calibration; tare evidence; test methods; first-release register; receiver documents |
| cp_raw | shear | electricity and cleanup water | meters and operating logs | meter id; property; raw unit; start/end totalizer; real rate and interval if applicable; actual density/state when conversion needed; process/cohort id; voltage/grid; all failed/Q0/start-stop/idle/cleanup/rework events; opening/closing WIP exchange vectors | Collect physical meter readings and operating states; verify meter coverage and supplier boundary. Measure same-state water density independently if volume conversion is necessary; no secondary coefficient used as measurement | kWh; MJ; kg; m3 | each event or totalizer interval | entire cohort including downtime | actual shear and preparation meters | per 1 kg reference flow | meter calibration; circuit map; invoices; operating logs; density method |
| cp_consumables | shear | knife and oil and contact pad as separate records | purchase stock and wear records | specific row id; formulation or steel identity; supplier; actual supplied whole quantity; opening/closing consumable and circuit stocks; measured tare; replacement and useful life; real resharpening; leakage/drain/retention; waste mass and destination; actual density and temperature; constituent subledgers | Measure each actual material separately; weigh knives and pads rather than assume item mass; meter hydraulic oil volume and independently measure its formulation-specific density for closure; reconcile external additions and all destinations | kg; m3 | each purchase/change/waste transfer | cohort plus inherited consumable stocks | actual shear circuit/tool locations | per 1 kg reference flow | supplier SDS/specification; calibrated weights; maintenance logs; waste manifests |
| cp_physical | shear | parent blank and trim and reject balances | weighing and material genealogy | gate and lot ids; every actual input/output V; opening/closing WIP; internal recirculation; generated and transferred trim; parent blank mass; rejects; oils/water retained; each relevant element assay; whole-stream versus source partitions; inherited burden vector per exchange | Weigh real transfers and source fractions, sample relevant composition independently; maintain manufacturing and preparation balances before attribution, then test identical-state internal cancellation | kg; % | each batch/gate and period close | all cohorts including failures | manufacturing and preparation gates | per 1 kg reference flow | weigh tickets; assays; stock checks; traceable transfer pairs |
| cp_species | shear | each actual waste and species separately | sampling and transfer/emission measurement | specific row id; whole stream mass/volume; independent density; each species and medium; dissolved/suspended state; concentration unit and basis; actual rate/time or cumulative quantity; particle structure; captured/escaping mass; free/phase/structural/reaction water evidence; uncertainty and detection limits; destination/provider | Measure actual emissions and waste at their real gates; document species identity independently from total mass and element closure. Preserve unresolved species and balance deviations; no residual-fitting, universal dust factor or assumed oxidation/reaction water | kg; m3; mg/m3; mg/l | each actual transfer and representative operating state | complete relevant operating period | specific capture/emission/treatment gates | per 1 kg reference flow | sampling method; lab report; calibration; detection limits; receiver records |
| cp_service | service | original-cohort electricity and road service | service-event and carrier records | cohort c and original Q_c; opening/closing FG quantities and each inherited vector; shipment/return/reinspection IDs; gross transported V including tare; actual vehicle/load constraint; distance and empty return; electricity; H event/time/occupied space; actual incremental rework; no new release flag | Trace services to original cohorts and measured causal drivers. Reconcile delivered/returned physical stock and historical vectors. Calculate carrier work from actual transported mass and route; do not also add carrier fuel as site input | kWh; MJ; kg*km; kg; h | each service or shipment/return | full cohort service history | storage/dispatch/actual receiver | per 1 kg reference flow | carrier tickets; stock ledger; electricity readings; original release register |
| cp_packaging | service | one ledger for each pallet and each strap | article-level stock, receipt, custody and tare records | specific article id; actual form/type and atomic row id; actual input interface; measured receipt quantity and mass/tare with raw unit; receipt id and time; source and acquisition type; purchase/whole-consignment acquisition evidence; owner and custody; cohort c and original Q_c; O_empty; O_WIP; O_FG; O_reusable; P; N_ext; ER; same-component prior outward event id for ER; C_empty; C_WIP; C_FG; C_reusable; gross S; EO; W; internal reuse; gross shipment/return/waste event ids and times; attached contaminant subledger; gross physical V; separate procurement/new-manufacture burden record; inherited exchange vector; compatible provider id and included boundary/history | Weigh each real pallet and strap type and actual external receipt; reconcile the full stock/P/N_ext/ER identity in sb_packaging separately, including first independent pool borrowing/leasing. Classify each receipt once from actual acquisition and same-component history, not invoice absence alone; reconcile mutually exclusive stock states and every gross departure. Distinguish measured physical V from procurement/new-manufacture loads; trace the actual owner, custody, cohort and inherited vector/provider once, retaining unverified history as a gap. Track reused packaging without new purchase and each true waste destination | kg | each receipt/packing/dispatch/return/waste transfer and stock close | all WIP/FG and service periods | all owned/borrowed/leased/attached/reusable packaging | per 1 kg reference flow | calibrated tare and receipt measurements; purchase and whole-consignment records; pool loan/lease and custody records; article inventory; linked prior outward, return and waste tickets; inherited vector and provider-boundary evidence |
| cp_allocation | shear | exchange-specific burden assignment | metered subdivision and causal allocation evidence | exchange r; exclusive function; virtual subdivision; measured physical driver; co-output states/quantities; common gate; residual only; contemporaneous prices/date/currency; sensitivity; upstream/recycling convention; per-exchange opening/closing WIP and FG vector | Apply al_subdivide then al_causality then al_residual_market only for genuine remainder. Document every co-function vector and original cohort service share; never force a universal output-mass split | raw row unit | each exchange and accounting close | same complete cohort and stock history | common process gates and dedicated operations | per 1 kg reference flow | metered subledgers; causal study; price evidence for remainder; sensitivity |
| cp_prepare_genealogy | prepare | whole sheet and internal own trim | certificates and transfer records | heat id; source lot; N02200 certificate; Ni; Co; all relevant element results; annealed/pickled and no coating evidence; dimensions; receipt mass; upstream process graph; allocation convention; inherited exchange vectors; dates and provider ids | Match certificates to measured source and segregated transfers; inspect complete provider boundaries for duplicated refining/rolling/transport; assay independently where required | kg; % | each heat and transfer | complete cohort and inherited stocks | source supplier and both sites | per 1 kg reference flow | heat-linked certificate; lab chain of custody; transfer tickets; provider boundaries |
| cp_prepare_raw | prepare | electricity and cleanup water | meters and operating logs | meter id; property; raw unit; start/end totalizer; real rate and interval if applicable; actual density/state when conversion needed; process/cohort id; voltage/grid; all failed/Q0/start-stop/idle/cleanup/rework events; opening/closing WIP exchange vectors | Collect physical meter readings and operating states; verify meter coverage and supplier boundary. Measure same-state water density independently if volume conversion is necessary; no secondary coefficient used as measurement | kWh; MJ; kg; m3 | each event or totalizer interval | entire cohort including downtime | actual shear and preparation meters | per 1 kg reference flow | meter calibration; circuit map; invoices; operating logs; density method |
| cp_prepare_physical | prepare | parent blank and trim and reject balances | weighing and material genealogy | gate and lot ids; every actual input/output V; opening/closing WIP; internal recirculation; generated and transferred trim; parent blank mass; rejects; oils/water retained; each relevant element assay; whole-stream versus source partitions; inherited burden vector per exchange | Weigh real transfers and source fractions, sample relevant composition independently; maintain manufacturing and preparation balances before attribution, then test identical-state internal cancellation | kg; % | each batch/gate and period close | all cohorts including failures | manufacturing and preparation gates | per 1 kg reference flow | weigh tickets; assays; stock checks; traceable transfer pairs |
| cp_prepare_species | prepare | each actual waste and species separately | sampling and transfer/emission measurement | specific row id; whole stream mass/volume; independent density; each species and medium; dissolved/suspended state; concentration unit and basis; actual rate/time or cumulative quantity; particle structure; captured/escaping mass; free/phase/structural/reaction water evidence; uncertainty and detection limits; destination/provider | Measure actual emissions and waste at their real gates; document species identity independently from total mass and element closure. Preserve unresolved species and balance deviations; no residual-fitting, universal dust factor or assumed oxidation/reaction water | kg; m3; mg/m3; mg/l | each actual transfer and representative operating state | complete relevant operating period | specific capture/emission/treatment gates | per 1 kg reference flow | sampling method; lab report; calibration; detection limits; receiver records |
| cp_prepare_allocation | prepare | exchange-specific burden assignment | metered subdivision and causal allocation evidence | exchange r; exclusive function; virtual subdivision; measured physical driver; co-output states/quantities; common gate; residual only; contemporaneous prices/date/currency; sensitivity; upstream/recycling convention; per-exchange opening/closing WIP and FG vector | Apply al_subdivide then al_causality then al_residual_market only for genuine remainder. Document every co-function vector and original cohort service share; never force a universal output-mass split | raw row unit | each exchange and accounting close | same complete cohort and stock history | common process gates and dedicated operations | per 1 kg reference flow | metered subledgers; causal study; price evidence for remainder; sensitivity |
| cp_service_allocation | service | exchange-specific burden assignment | metered subdivision and causal allocation evidence | exchange r; exclusive function; virtual subdivision; measured physical driver; co-output states/quantities; common gate; residual only; contemporaneous prices/date/currency; sensitivity; upstream/recycling convention; per-exchange opening/closing WIP and FG vector | Apply al_subdivide then al_causality then al_residual_market only for genuine remainder. Document every co-function vector and original cohort service share; never force a universal output-mass split | raw row unit | each exchange and accounting close | same complete cohort and stock history | common process gates and dedicated operations | per 1 kg reference flow | metered subledgers; causal study; price evidence for remainder; sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_raw` | all inventory rows | Convert each raw event quantity to its declared row unit before attribution. Integrate true rates only over measured intervals; concentration × measured same-state volume yields a species subledger only on its stated wet/dry basis. Do not multiply an integrated quantity by time. Independent material density is needed for mass-volume conversion. | raw_events; actual_units; measured_state; independent_density | V_r_c | `jrc-ilcd-2010` |
| `calc_assign` | all inventory rows | Preserve each gross physical V_r_c ledger. Convert upstream and WIP exchange vectors to the same row unit; assign dedicated/virtually subdivided portions, then determining physical causality, then only genuine residual market shares under section7. A_r_c is that row’s inherited opening WIP vector plus current attributed loads minus closing WIP vector, plus actual cohort-linked post-release service increments. FG history remains with original Q_c; service through opening FG is not new production. For physical co-output/internal-transfer diagnostic rows use their gross V as A without pretending it is a burden share. Keep all co-functions and reject/treatment vectors reconciled; failures/Q0 remain explicit. | V_r_c; inherited_vectors; current_loads; closing_WIP_vectors; cohort_services; cp_allocation; cp_prepare_allocation; cp_service_allocation | A_r_c | `jrc-ilcd-2010` |
| `calc_once` | all inventory rows | q_r_c = A_r_c / Q_c; A_r_c = attributable raw numerator in the declared row unit from calc_assign; q_r_c = exchange amount per 1 kg reference flow. | A_r_c; Q_c; cp_release | q_r_c | `jrc-ilcd-2010` |
| `calc_gates` | physical manufacturing and preparation and combined gates | At each fixed gate, for every conserved total material and relevant element, O + external receipts = C + external departures, with actual stock, material retention and independently verified air/water species. Internal recirculation cancels only inside that gate. Separate internal first-release Q_c transfers cancel when production and service are combined. Released-stock identity is O_FG + Q_c + returns = C_FG + gross dispatch + actual destruction/withdrawal, with each leg uniquely linked; already released return creates no new Q_c. An extra X may be introduced only for an exactly identified same-side duplication within OTHER; it cannot erase any physically distinct source, sink or unknown. Actual first external nonpurchase packaging receipts enter the physical receipts side through N_ext in sb_packaging and calc_packaging; X cannot supply or cancel this new physical input. | physical_O; physical_receipts; physical_C; physical_departures; actual_species; linked_FG_events | gate_residuals_and_disclosures | `jrc-ilcd-2010` |
| `calc_packaging` | wood_pallet; steel_strap; waste_pallet; waste_strap | Apply O_empty + O_WIP + O_FG + O_reusable + P + N_ext + ER = C_empty + C_WIP + C_FG + C_reusable + S + EO + W independently to each article type under sb_packaging. P retains actual procurement including acquired packaging within a whole purchased consignment; N_ext carries first external nonpurchase receipts on the actual input side; ER needs a linked prior outward event for the same component. Each receipt belongs to exactly one of these classes. Use measured quantities, mutually exclusive stock states and gross S/EO/W, not netted dispatch. Whole article mass and its non-additive constituents are not added together. Keep gross physical V separate from procurement/new-manufacture burdens and carry the actual owner/custody and inherited exchange vector/compatible provider once through calc_assign; physical N_ext is no automatic new manufactured-pallet purchase, zero-burden assumption or credit. Allocate actual packaging service to original cohorts using the demonstrated driver; packaging never enters product Q_c. | O_empty; O_WIP; O_FG; O_reusable; P; N_ext; ER; C_empty; C_WIP; C_FG; C_reusable; S; EO; W; internal_reuse; receipt_history; owner_custody; inherited_vectors; provider_boundaries; cp_packaging | packaging_residual_by_article | `nautica-nickel-scrap` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | source_sheet and finished | Keep actual heat/form/state/assay and receiver-test evidence, including Ni separate from Co and coating/contamination checks. A typical catalog percentage is not a lot assay. | certificate; independent assay; surface inspection; receiver specification |
| `dq_complete` | all exchanges and stocks | Retain every real operation and atomic exchange, all failures and Q0 periods, opening/closing inherited WIP/FG vectors and one-provider whole-stream linkage. Missing core quantities remain incomplete; ordinary provider/auxiliary matching is disclosed collection work. | cross-gate stock audit; event log; provider-boundary graph |
| `dq_units` | raw measurement and q_r_c | State raw unit, calibration, concentration basis, measurement state, uncertainty and actual conversion provenance. Sum no interval twice and divide by Q_c only in calc_once. | calibration; raw totals; measurement methods; calculation lineage |
| `dq_scope_time` | study representativeness | Disclose site, period, technologies, actual supplier gates, native restrictions, historic source limitations and technical synthesis. Do not transfer a historical specimen energy, alloy maximum or trader acceptance assumption into a current factory default. | site/period metadata; provider check; source applicability statement |
| `dq_uncertainty` | emissions and allocation | Separate actual species evidence from total mass/element closure. Keep detection limits, unresolved identities, unknowns and residual-market sensitivity explicit; no apparent pass from a fitted balance. | speciation report; separate balances; causal and sensitivity records |

## 9. Validation Rules

Any unknown core relationship remains inconclusive; a structural check is not scientific approval. Use the full descriptions and original gates, not just this table.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_applicability` | source and reference | Reject an untraceable or mixed-grade source, iron/copper-primary substitute, coating/cladding or post-braze contamination. Require complete qualifiers and the full finished-card restrictions. A core terminal identity or manufacturing evidence gap prevents claiming this boundary complete. | `un-cpc3-2025`; `sm-nickel200-2006`; `vdm-nickel200-2022`; `nasa-nickel-sheet-1972`; `nautica-nickel-scrap` |
| `val_units_once` | all inventory rows | Require current property/unit compatibility, declared raw conversions and exactly one calc_once division. Check Q_c first release and non-addition of closing FG. Q_c=0 keeps all actual loads and forbids unit output; H service activity is never production Q_c. | `jrc-ilcd-2010` |
| `val_native` | every UUID-bearing row | Enforce each complete native name, form, route, CAS when present, geography, media, properties and comments in the row description. Require independent one-provider applicability. Do not bind the CTUe steel-drum candidate, indoor-air nickel to outdoor release, fixed-composition steel strap to an unverified grade, or a petroleum/PAO oil candidate to a different formulation. Auxiliary unresolved UUIDs retain a specific atomic name and disclosed gap; they do not invalidate independently demonstrated core methodology. | `vdm-nickel200-2022`; `nautica-nickel-scrap` |
| `val_balances` | material and relevant elements and species | Require separate full manufacturing, preparation, released-FG and combined physical ledgers plus every packaging identity. Whole mixed streams and their source/composition partitions are non-additive. One balance residual cannot establish two unknown species or a chemical reaction. Keep actual external liquid/product returns and treatment destinations explicit; no missing sink hidden in OTHER. For packaging require measured first nonpurchase receipts in N_ext, exclusive P/N_ext/ER receipt classification, same-component prior outward evidence for ER, disjoint stock states and complete gross S/EO/W. Verify physical V separately from procurement/new-manufacture loads and the actual owner/custody, inherited vector and compatible provider once; reject fabricated P/ER/opening stock or X used to hide a new physical receipt. | `jrc-ilcd-2010` |
| `val_burden` | inherited load and allocation | Require complete once-only upstream and WIP/FG exchange vectors, exclusive/subdivided assignment, exchange-specific determining causality and documented common-gate market evidence only for a genuine remainder. Keep separate co-functions and actual treatment burdens; no automatic recovery credit, fixed ratio or missing historical burden. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | One specified nickel-recovery receiving process using these clean single-grade new-sheet offcuts; actual downstream metallurgical route linked separately |
| allowed_use | Attributional source-traced offcut supply with complete upstream, original manufacture and cohort-service boundaries and one compatible provider per purchased exchange |
| excluded_use | Mixed/stainless/ash/slag/battery waste, coated or post-braze material, recovered metal equivalence, universal recycled content, avoided-primary credit or legal end-of-waste declaration |
| required_metadata | All required qualifiers, complete native row descriptions, site/period, source/provider graph, process gates, original Q_c, inherited WIP/FG vectors and declared attributional/recycling convention |
| required_quality_disclosure | Actual raw coverage, failed/Q0 loads, unknowns, unresolved auxiliary identities, source-time limits, physical/species/packaging residuals and allocation sensitivity; no invented factory defaults |
| update_trigger | Source heat/grade/form/coating, cutting route, process gate, receiver specification, provider or electricity geography/voltage, actual coolant/cleaner/heat use, stock/recycling convention or material source change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | United Nations, CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 39362 and complete neighbouring metal-scrap titles; classification context only, no process or assay threshold |
| `sm-nickel200-2006` | handbook | Special Metals, Nickel 200 & 201, SMC-061, September 2006, pp1 and15; https://www.specialmetals.com/documents/technical-bulletins/nickel-200.pdf | N02200 wrought-nickel identity and sheet supply form; distinguish typical composition from Ni-plus-Co limit and other form specifications; no density or composition default |
| `vdm-nickel200-2022` | handbook | VDM Metals, VDM Nickel 200 and 201, Material Data Sheet1101 Rev02, March2022, pp2–3 and8–9; https://www.vdm-metals.com/fileadmin/user_upload/Downloads/Data_Sheets/Data_Sheet_VDM_Nickel_200_201.pdf | Actual N02200 product form, table2a versus excluded201 table2b, annealed-state and contamination/tool-protection context; distinguish machining/welding from this dry shear route; no recipe or energy transfer |
| `nasa-nickel-sheet-1972` | literature | G.A. Malone, R. Stauffis and R. Wood, Bell Aerospace for NASA, Nondestructive Tests of Regenerative Chambers, NASA-CR-120980 / BAC8654-9, July1972, §F printed33 (PDF44) and adjacent figures; https://ntrs.nasa.gov/api/citations/19720024852/downloads/19720024852.pdf | Primary actual shearing of annealed/pickled Nickel200 sheet; later anneal/EDM/etch/lap/Cu-Inconel bonding are countercontext outside the prior offcut gate; historical case only, no plant performance claim |
| `nautica-nickel-scrap` | extension_guidance | Nautica Metal Scrap, Nickel & Nickel Alloy Scrap Supply, undated publisher page; https://nauticametalscrap.com/tungsten-specialty-alloys/nickel-scrap | Fabrication-offcut documents, single-grade segregation, actual solid preparation/packing and negotiated receiver inspection; service-return and turnings countercontext; no universal acceptance composition or recovery factor |
| `jrc-ilcd-2010` | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA—Detailed Guidance, First edition March2010, §§7.9.2–7.9.3, printed255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality only: exclusive/subdivided assignment, determining physical causality per exchange and genuine remainder at contemporaneous common-gate market value; no automatic annex14 recycling formula or fixed share |
| `haco-hslx-shearing` | handbook | HACO, HSL / HSLX / HSLX-HD Hydraulic guillotine shears, publisher brochure, pp2–4 and6; https://www.haco.com/uploads/files/Sheet-metal/Brochures/Machines/EN/20181016_Brochure_HSLX_ENG.pdf | Electric-hydraulic motor/pump and oil circuit; blade-gap/material setting and optional scrap handling; architecture only, not Nickel200 capacity, settings, oil chemistry or motor-power defaults |
