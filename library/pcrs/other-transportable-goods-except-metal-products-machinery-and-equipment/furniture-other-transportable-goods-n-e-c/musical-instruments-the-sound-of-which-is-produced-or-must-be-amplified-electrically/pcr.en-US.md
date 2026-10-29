---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.musical-instruments-the-sound-of-which-is-produced-or-must-be-amplified-electrically
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Passive solid-body bolt-on electric guitar manufacture

This qualitative technical synthesis combines disclosed manufacturer route, structure and independent passive-circuit evidence. It is not a measured single SKU, factory/order or universal formulation. Every condition in sections5,7,9 applies to the inventory and all descendant rules.

## 1. Scope and Applicability

New complete solid wooden-body electric guitars with bolt-on wooden neck, magnetic steel strings, passive electromagnetic pickup/controls and signal output that requires external amplification for normal musical performance. Begin with real wood stock and supplied components, not a complete purchased guitar. Exclude loose bodies/necks/strings/pickups, logs, acoustic/hollow acoustic-electric routes, active battery circuitry, digital synthesizers, toys, installation systems, external amplifiers/speakers/cables, use and end-of-life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.musical-instruments-the-sound-of-which-is-produced-or-must-be-amplified-electrically |
| classification_refs | CPC 3.0 38340; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38340.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | New complete solid wooden-body electric guitars with bolt-on wooden neck, magnetic steel strings, passive electromagnetic pickup/controls and signal output that requires external amplification for normal musical performance |
| excluded_products | loose bodies/necks/strings/pickups, logs, acoustic/hollow acoustic-electric routes, active battery circuitry, digital synthesizers, toys, installation systems, external amplifiers/speakers/cables, use and end-of-life. |
| representative_product | Actual configured alder-body/maple bolt-on neck instrument with its actual fingerboard, finished metal bridge/tuners, supplied passive pickup, pots, capacitor, selector, mono jack, supplied strings and complete actual finish. No fixed pickup count, weight, tension, film, temperature, duration, yield or life. |
| production_route | Preserve raw wood conditioning, machining/routing, neck shaping, actual joining/fretting, separate finishing, bolt-on fit, whole supplied hardware/passive electrical assembly, stringing, setup, electroacoustic and exterior first-release inspection. No purchased-finished-guitar repacking route. Actual supplier work is upstream once; on-site manufacture of a purchased component requires a disjoint replacement with every real raw input, operation, loss and paired handoff. |
| market_state | Complete newly manufactured instrument at first specified sound/playability/electrical/exterior quality release; later packing and shipment preserve the original cohort. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Passive electric string musical function of the complete instrument |
| How much | 1 kg net mass of complete first-released instruments, not an arbitrary 1 kg component |
| How well | Actual manufacturer/model sound, playability, electrical and exterior acceptance; no invented thresholds |
| How long or cycle | One manufacture-to-first-release cohort; original-cohort observed service H; no assumed life |
| reference_flow_link | finished_guitar |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Musical instruments, the sound of which is produced, or must be amplified, electrically `ba0b61a1-012a-48f1-bc09-f64811faa1ad` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | solid body and bolt-on wooden neck; actual model configuration and serial cohort; complete BOM and supplier/site split including embedded constituents; passive electromagnetic circuitry without battery and actual wiring diagram; wood species grade supply form and moisture; whole coating adhesive cleaner supply formulations and actual independent additions; actual tests criteria and first-release gate; calibrated complete net mass excluding packaging; raw WIP and unused nonWIP inherited vectors and already net flags; released FG physical ledger and original cohort service horizon H; postwork permission tests acceptance hold and waste disposition; six event packaging pools and gross physical V versus burdens; native property medium route geography type and provider compatibility; actual attributional allocation need and common gate evidence |

Declare every qualifier in the actual dataset metadata or equivalent notes. Native mass determines the basis; item count never supplies a guessed kg conversion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = sum of independently measured complete net masses m_net_i of unique newly first-released serials. Calibrated weighing excludes transport packaging; retain actual configuration, moisture, date and release record. No borrowed secondary mass coefficient or assumed density. |
| native_units | all inventory rows | each native extensive property | per row | Mass/kg, native energy/MJ, actual volume/m3 and service/h remain distinct. Real rates alone are time-integrated; integrated volumes are not multiplied by time. Density is independently measured for that substance/state. |
| once | all inventory rows | Declared reference flow | kg | Reference denominator only, not a numerator unit constraint. Use the single calc_quotient once. Raw protocols collect undivided quantities; manufacture uses Q and services/gross events original Q_c. Gross numerator is complete V, never B_open+U-B_close or an economic share. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual dry solid wood blanks and separately supplied whole components/preparations; actual upstream seasoning and fabrication disclosed |
| starting_condition_role | Foreground manufacturing start with recursive upstream ownership |
| product_classification_scope | Specified passive solid-body bolt-on subset of electrical musical instruments |
| recursive_input_rule | A bought complete electric guitar is not new manufacture; internal same-product transfers cancel and do not purchase again |
| upstream_dataset_requirement | One upstream owner per compatible supplied article/formulation and disjoint embedded constituents |
| disclosure | Actual site/time, make/buy, configuration, all stock and vectors, service H, gross physical and allocation evidence |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | whole manufacture | Preserve raw wood conditioning, machining/routing, neck shaping, actual joining/fretting, separate finishing, bolt-on fit, whole supplied hardware/passive electrical assembly, stringing, setup, electroacoustic and exterior first-release inspection. No purchased-finished-guitar repacking route. Actual supplier work is upstream once; on-site manufacture of a purchased component requires a disjoint replacement with every real raw input, operation, loss and paired handoff. | yamaha-wood; yamaha-shaping; yamaha-finish; yamaha-craft; duncan-passive-twoh |
| boundary_q_gate | first release | Q sums calibrated net whole-instrument masses of unique newly first-released serials in the manufacturing cohort. Closing released FG is already in Q, never a second production output or a manufacturing burden deduction. Delivery, reinspection, postwork and returned instruments create no new Q. Q=0 retains all real burdens without unit results. | yamaha-craft; yamaha-qc |
| boundary_vectors | every burden exchange | Retain opening/closing raw, WIP and unused/unassigned non-WIP stores with complete inherited exchange vectors and origin. Available burden vector is B_open + U_owned - B_close in those stores, followed by legitimate once-only cohort assignment. Exclude already released FG from B_close manufacture. Already stock-corrected consumption receives no second stock correction. Failed batches, samples, start/stop, idle, cleanup, testing and rework remain. Ordinary sold/external waste never automatically becomes a transfer to another function. | ilcd-allocation; yamaha-qc |
| boundary_physical | manufacture FG combined | Maintain independent full physical balances: manufacture opening raw/WIP + external gross inputs = closing raw/WIP + first-release internal transfer + actual waste/emission/return exits; FG opening + first-release transfer + actual returns and added material/water = closing wet FG + gross shipments + actual return/waste/species exits. Combined gate cancels paired internal transfer once. Packaging/assets are disjoint subgates. Full gross quantities never receive economic burden fractions. X_in/X_out removes overlap with OTHER same-side flow terms only, never real influx retained in full wet closing stock. | ilcd-allocation; yamaha-qc |
| boundary_service | original cohort | Actual postrelease storage, conditioning, handling, packaging, retuning and attempted work remain attributed to original Q_c over observed H, even when FG is held. Only unused/unassigned service or charge carries; future unperformed work remains unknown. Continued conformity after actual rework requires manufacturer/spec permission, postwork tests, acceptance and real hold/waste disposition; absence/failure of permission/tests cannot erase already occurred materials, operations or burdens. Natural humidity exchange needs no invented repair permission. | yamaha-qc; ilcd-allocation |
| boundary_whole_inputs | each purchase | Buy every whole supplied component, formulation, wet article and package once, including embedded water/material/fasteners. Composition/assay is a non-additive subledger. Only independently purchased actual additions become additional exchanges; actual on-site compounding retains each purchased ingredient, energy and loss. | yamaha-craft; yamaha-finish; duncan-passive-twoh |
| boundary_packaging | each actual pool | For each article/grade pool use O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O and C are the complete wet opening/closing empty, WIP-attached, FG-attached and reusable stocks. F_in/F_out are independently measured actual repair additions, removed components, water and other real additions/losses crossing this pool boundary, each with its direction and physical state. X_in/X_out remove only documented portions already counted by OTHER real flow terms on the SAME side; never subtract stocks, opposite-side terms or a new influx merely because it remains in full wet C. Choose a whole-wet-article balance OR an equivalent disjoint component bridge, not both additively; embedded supplied water/components are owned once, while genuinely new repair/water retained in C remains a real influx. Six cards represent six real directions/events; I retains supplier-included ingress and exactly one upstream owner; S is full mass with gross physical shipment. Internal reuse cancels, no net-Q entry, repeat procurement or credit. Actual water gain/loss remains separately measured. Source W is actual generation/transfer from this pool into its matched receiving container, not an assumed external Waste outlet; reconcile that container stock and its real external outlet under calc_packaging. | yamaha-qc; ilcd-allocation |
| boundary_mixed_waste | packaging W and other source contributions | When one actual mixed exit exists, W pool cards are measured internal contributions, paired to receiving subledger and cancelled at consolidation; only the measured mixed external Waste row and one transport/treatment provider remain. Total and sources are non-additive. If exits differ physically, replace by the actual separate atomic Waste streams before use; never invent exits for symmetry. Ordinary manufacturing/failed/sample waste keeps production and treatment burdens unless real other cohort/function and justified handover establish one vector transfer. | ilcd-allocation; yamaha-qc |
| boundary_utilities_assets | actual utilities and equipment | No default boiler, steam, industrial gas, fuel, refrigerant or equipment lifetime. Preserve native extensive dimensions, actual carrier mass/phase/state/enthalpy and supplier water/energy ownership, including actual Product returns. Full acquisition/installed/retirement mass and new/old repair materials/fluid stocks stay separate from period service burden. Add any actually present omitted atom and its protocol before dataset use; absence is evidenced, never filled with zero. | ilcd-allocation; yamaha-craft |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Wood stock to first complete release | required | Only actually present route/event; expand omitted real atoms before use | manufacturing | finished_guitar |
| service | Original-cohort storage handling and actual work | conditional | Only actually present route/event; expand omitted real atoms before use | service | original Q_c |
| packaging | Actual packaging events and container gate | conditional | Only actually present route/event; expand omitted real atoms before use | physical disclosure | original Q_c |
| assets | Equipment stocks maintenance and used service | conditional | Only actually present route/event; expand omitted real atoms before use | service | original Q_c |

Manufacture is consolidated but stage-specific protocols retain conditioning, woodwork, finishing, assembly and QA records. Internal same-product transfers are matched and cancelled, never external purchases or another Q. Cards distinguish burden, complete gross event and internal contribution; no universal stock/allocation formula overrides those distinctions.

### Process: Wood stock to first complete release (`manufacture`)

#### Inputs

##### Product flows

###### Alder sawn body blank (`body_stock`)

Actual solid alder stock before routing and contouring; record supplier seasoning, moisture and any glued blank. A purchased glued blank owns its glue upstream; site joining needs separate adhesive and actual loss. Do not substitute fibreboard, seat-frame stock or finished guitar body.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is non-coniferous sawn/chipped-lengthwise/sliced/peeled wood strictly thicker than 6 mm, manufactured wood at plant, Mass/kg. This binding covers only this actual solid hardwood blank/repair board at that supply state; verify species, thickness, moisture and supplier processing. A thinner board, coniferous wood, glued/engineered panel or shaped finished component requires its own compatible identity before use; no density or machining yield is supplied.

- Selected flow: Wood, sawn or chipped lengthwise, sliced or peeled, of a thickness exceeding 6 mm, of non-coniferous wood `6568e32b-edf1-47c9-8d04-6b31af0d8c1c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_stock`
- Sources: `yamaha-wood`; `yamaha-shaping`

###### Maple sawn neck blank (`neck_stock`)

Actual maple blank machined on site into the bolt-on neck and head; record any scarf joint, supplier work, truss-rod channel, fret-slot and shaping work. No set-neck or neck-through assumption.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is non-coniferous sawn/chipped-lengthwise/sliced/peeled wood strictly thicker than 6 mm, manufactured wood at plant, Mass/kg. This binding covers only this actual solid hardwood blank/repair board at that supply state; verify species, thickness, moisture and supplier processing. A thinner board, coniferous wood, glued/engineered panel or shaped finished component requires its own compatible identity before use; no density or machining yield is supplied.

- Selected flow: Wood, sawn or chipped lengthwise, sliced or peeled, of a thickness exceeding 6 mm, of non-coniferous wood `6568e32b-edf1-47c9-8d04-6b31af0d8c1c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_neck_stock`
- Sources: `yamaha-wood`; `yamaha-shaping`

###### Solid maple fingerboard blank (`fingerboard`)

Conditional separately processed solid maple fingerboard blank matching the actual neck construction. When the maple neck has an integral fingerboard, this separate exchange is absent and its wood remains in neck_stock. Fret slots, dressing, losses and actual supply-state work remain in their owner stage; no double wood input.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Solid maple fingerboard blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fingerboard`
- Sources: `yamaha-craft`; `yamaha-pacifica`

###### Finished steel guitar truss rod (`truss_rod`)

Complete supplied adjustable rod with its included nuts and anchors; upstream metal and fabrication once.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_truss_rod`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Finished nickel-silver guitar fret wire (`frets`)

Actual supplied fret wire for cutting, seating, dressing and levelling; record exact alloy, coating and profile, no raw nickel ore or solder substitution.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frets`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Finished synthetic guitar nut (`nut`)

One whole supplied synthetic nut; document actual polymer/composite and finishing, only actual slotting and fitting remain foreground.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nut`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Finished polymer fingerboard position marker (`markers`)

One specific polymer marker product per instance, actual shape/material and supply state; no keyboard key or whole pickguard substitution.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_markers`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Whole passive electromagnetic guitar pickup (`pickup`)

One complete supplied passive pickup per type/position instance. Coil copper, enamel, magnet, bobbin, resin, included mounting hardware and factory leads are composition subledgers of this purchase, not added site inputs. Active powered circuits excluded.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pickup`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Finished metal guitar bridge assembly (`bridge`)

One complete surface-finished supplied bridge with its actual saddles and included screws; record fixed/vibrato configuration and included springs/block only once. Native is the GLO at-plant production mix of finished and surface-finished musical-instrument components, an intermediate upstream finishing input to final assembly; no evidenced yield is supplied. Only this card’s actual whole finished/surface-finished component is selected, not all parts together or a complete instrument. Manufacturing metal/finish/BOM remains upstream once; unfinished raw stock requires another identity. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Finished and surface-finished components for musical instrument parts and accessories `6c2cd36a-bdc8-4d8f-90b4-9e09f4028c3c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bridge`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Finished metal guitar tuning machine (`tuner`)

One supplied surface-finished tuning machine of actual ratio/form; included gears, shaft, buttons and screws stay embedded. No site gear cutting or plating is presumed. Native is the GLO at-plant production mix of finished and surface-finished musical-instrument components, an intermediate upstream finishing input to final assembly; no evidenced yield is supplied. Only this card’s actual whole finished/surface-finished component is selected, not all parts together or a complete instrument. Manufacturing metal/finish/BOM remains upstream once; unfinished raw stock requires another identity. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Finished and surface-finished components for musical instrument parts and accessories `6c2cd36a-bdc8-4d8f-90b4-9e09f4028c3c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tuner`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Whole supplied electric-guitar steel string (`strings`)

One real string type per instance, including actual core, winding, ball end and coatings once upstream. Site stringing and trimming retained; no duplicated purchased copper or steel constituents.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_strings`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Guitar volume potentiometer (`volume_pot`)

Whole supplied passive variable resistor, actual taper/rating and included terminals; no motor rotor or active circuit.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is a manufactured non-heating electrical resistor at plant, Mass/kg; this card selects one complete passive variable-resistor potentiometer, not its track alone or a heater. Actual taper, resistance, rating, terminals, mounting and supplier construction require records; the broad family fixes no circuit values or geography. A prewired harness and its embedded pot must not both be purchased.

- Selected flow: Electrical resistors (except heating resistors) `9bee079d-ab55-44db-b1a4-72d61a856d61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_volume_pot`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Guitar tone potentiometer (`tone_pot`)

Whole supplied passive tone potentiometer, actual specification; if a prewired harness is bought, expand a disjoint component bridge and remove overlapping individual purchases.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is a manufactured non-heating electrical resistor at plant, Mass/kg; this card selects one complete passive variable-resistor potentiometer, not its track alone or a heater. Actual taper, resistance, rating, terminals, mounting and supplier construction require records; the broad family fixes no circuit values or geography. A prewired harness and its embedded pot must not both be purchased.

- Selected flow: Electrical resistors (except heating resistors) `9bee079d-ab55-44db-b1a4-72d61a856d61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tone_pot`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Passive guitar tone capacitor (`tone_cap`)

One complete passive tone capacitor; actual capacitance, dielectric and rating are foreground BOM facts, not a universal circuit prescription. Native at-plant Product is an industrial passive electronic capacitor for assembly; synonyms span ceramic, film, electrolytic, tantalum, fixed/variable and other capacitor types without fixing this BOM’s dielectric, capacitance, voltage, route, educt or geography. Confirm the actual passive tone component and upstream coverage; no numeric value is inherited from the wiring example. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: capacitor `df93339b-f27d-4f3e-b672-9d2ef0c536f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tone_cap`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Passive pickup selector switch (`selector`)

One actual mechanical selector, its topology and connections follow the approved passive diagram. Battery-powered HyperSwitch is outside scope.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is manufactured electrical switching/protection/connection apparatus at plant for voltage not exceeding 1000 V, Mass/kg. Select only this actual complete passive mechanical switch or tip/sleeve connector in the approved guitar diagram, with actual rating and supplier construction verified. No battery-active selector, loose constituent or whole harness is inferred; no country, circuit value or provider is established.

- Selected flow: Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V `13907748-8b4f-4da3-8108-c81720ca7799`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_selector`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Mono guitar output jack (`output_jack`)

Whole supplied tip/sleeve signal jack; actual mounting and insulation declared. External amplifier and interconnecting player cable are not product BOM.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is manufactured electrical switching/protection/connection apparatus at plant for voltage not exceeding 1000 V, Mass/kg. Select only this actual complete passive mechanical switch or tip/sleeve connector in the approved guitar diagram, with actual rating and supplier construction verified. No battery-active selector, loose constituent or whole harness is inferred; no country, circuit value or provider is established.

- Selected flow: Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V `13907748-8b4f-4da3-8108-c81720ca7799`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output_jack`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Insulated copper guitar hookup wire (`hookup_wire`)

Actual additional site wiring only, including its supplied insulation once. Leads already contained in pickups or harnesses are not purchased again; bare wire and magnet winding wire are different forms.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Insulated copper guitar hookup wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hookup_wire`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Flux-cored tin-silver-copper solder wire (`solder`)

Conditional actual solder formulation supplied as a whole including flux core. Record exact alloy and flux; add separately purchased flux only if actually added.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Flux-cored tin-silver-copper solder wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solder`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Polyvinyl-chloride electrical insulating tape (`insulation`)

Actual insulating tape used for joined pickup leads, one supplied adhesive-backed article; do not repeat adhesive procurement.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Polyvinyl-chloride electrical insulating tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_insulation`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Additional steel guitar assembly screw (`fasteners`)

Only separately supplied steel screws not already inside bridge/tuner/pickup BOM; actual finish and dimensions declared. Native Product steel screw is a CN at-plant production mix fastener auxiliary. It gives no measured amount; its suggestion of an industry-average estimate is not a PCR amount authorization. Use actual additional steel screws and actual mass, respecting supplier geography and avoiding kit-embedded duplicates. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Steel screw `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fasteners`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Finished metal bolt-on neck plate (`neck_plate`)

Actual supplied neck plate distinct from separately supplied screws; included fasteners stay embedded when supplied as a kit. Native is the GLO at-plant production mix of finished and surface-finished musical-instrument components, an intermediate upstream finishing input to final assembly; no evidenced yield is supplied. Only this card’s actual whole finished/surface-finished component is selected, not all parts together or a complete instrument. Manufacturing metal/finish/BOM remains upstream once; unfinished raw stock requires another identity. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Finished and surface-finished components for musical instrument parts and accessories `6c2cd36a-bdc8-4d8f-90b4-9e09f4028c3c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_neck_plate`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Finished polymer guitar pickguard (`pickguard`)

One finished actual polymer pickguard, only if fitted; compound/colour/geometry and upstream forming included once.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pickguard`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Finished polymer guitar control knob (`knob`)

One actual knob type per instance, with included insert once; not a complete potentiometer.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_knob`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Surface-finished metal guitar strap button (`strap_button`)

Actual finished metal strap button with included parts once; detachable player strap is outside the instrument gate. Native is the GLO at-plant production mix of finished and surface-finished musical-instrument components, an intermediate upstream finishing input to final assembly; no evidenced yield is supplied. Only this card’s actual whole finished/surface-finished component is selected, not all parts together or a complete instrument. Manufacturing metal/finish/BOM remains upstream once; unfinished raw stock requires another identity. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Finished and surface-finished components for musical instrument parts and accessories `6c2cd36a-bdc8-4d8f-90b4-9e09f4028c3c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_strap_button`
- Sources: `yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### Whole supplied aqueous wood adhesive (`wood_glue`)

Conditional actual whole supplied aqueous wood adhesive. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is an at-plant supplied adhesive/glue preparation for functional surface bonding, explicitly including wood, Mass/kg. Only the actual whole aqueous wood adhesive in this card is selected. Confirm manufacturer joint permission, complete wet formulation, independent additions and supplier boundary; no particular resin, solids fraction, curing schedule, strength or geography is supplied by the family.

- Selected flow: Adhesives `279b6b7f-519f-4f32-aab0-99bb61cb90dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood_glue`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Whole supplied wood grain-filling preparation (`grain_filler`)

Conditional actual whole supplied wood grain-filling preparation. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Whole supplied wood grain-filling preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grain_filler`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Whole supplied wood undercoat formulation (`undercoat`)

Conditional actual whole supplied wood undercoat formulation. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is a whole undercoat/priming paint preparation applied before a topcoat to prepare an even finish, Mass/kg. This card covers only the actual wood undercoat formulation; a separately supplied primer/intercoat, hardener or pure resin is not the same purchase. Native text describing possible separate primer and undercoat does not mandate both; actual approved coating system, SDS, lot and supplier remain required, with no fixed recipe or geography.

- Selected flow: Undercoat `c519293d-bf76-42e2-84cd-c287946318ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_undercoat`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Whole supplied wood intermediate-coat formulation (`intercoat`)

Conditional actual whole supplied wood intermediate-coat formulation. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the broad paints/varnishes coating family, Mass/kg, covering decorative or protective application in liquid, gas or solid form without a specified route, geography or chemistry. Select only this card’s actual whole supplied wood intermediate/coloured coating preparation at its declared wet supply state, not an installed film, pure constituent, substrate, hardener or additional duplicate topcoat. Actual approved system, complete formulation, independent additions and provider boundary require records; no default resin, solids, recipe or performance is inferred.

- Selected flow: Coating `59808a77-a33c-493f-8e5f-c0eb3e837943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_intercoat`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Whole supplied coloured wood coating (`colourcoat`)

Conditional actual whole supplied coloured wood coating. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the broad paints/varnishes coating family, Mass/kg, covering decorative or protective application in liquid, gas or solid form without a specified route, geography or chemistry. Select only this card’s actual whole supplied wood intermediate/coloured coating preparation at its declared wet supply state, not an installed film, pure constituent, substrate, hardener or additional duplicate topcoat. Actual approved system, complete formulation, independent additions and provider boundary require records; no default resin, solids, recipe or performance is inferred.

- Selected flow: Coating `59808a77-a33c-493f-8e5f-c0eb3e837943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_colourcoat`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Wood top-coat (`topcoat`)

Conditional actual wood top-coat. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured. Native at-plant Product is formulated wood top-coat, describes both water- and oil-based finishes and gives water-based non-yellowing polyurethane Protect as an example; it fixes no universal resin, grade or recipe. Only actual compatible supplied wood topcoat is covered; primer, hardener, neat resin, thinner and grain filler cannot inherit this identity. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Wood top-coat `097bc238-dda4-4296-b6ca-b7c573f7f39d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_topcoat`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Separately supplied coating hardener formulation (`hardener`)

Conditional actual separately supplied coating hardener formulation. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Separately supplied coating hardener formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hardener`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Whole supplied coating thinner formulation (`thinner`)

Conditional actual whole supplied coating thinner formulation. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Whole supplied coating thinner formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thinner`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Whole supplied gun-cleaning preparation (`cleaner`)

Conditional actual whole supplied gun-cleaning preparation. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Whole supplied gun-cleaning preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaner`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Whole supplied guitar buffing compound (`polish`)

Conditional actual whole supplied guitar buffing compound. Record supplied wet formulation, lot, SDS, solids/carrier water and solvents in composition subledgers. No pure resin or named solvent replaces this mixture. Independently purchased additions only; actual mixing energy, retention, loss and destinations measured.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Whole supplied guitar buffing compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polish`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Coated abrasive paper sheet (`sandpaper`)

One actual supplied coated abrasive paper sheet; measure actual wear/consumption and disposed mass. Binder/backing/adhesive is embedded, not extra procurement.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native at-plant Product is abrasive paper, Mass/kg. Select this actual complete coated paper sheet with its backing, abrasive and binder embedded once; verify grit, backing, coating, wear and supplier. It is not loose abrasive powder, a grinding wheel, cotton polishing cloth or spent abrasive Waste; no formulation, yield or geography is fixed.

- Selected flow: Abrasive paper `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sandpaper`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Cotton buffing cloth (`buff_cloth`)

One actual supplied cotton buffing cloth; measure actual wear/consumption and disposed mass. Binder/backing/adhesive is embedded, not extra procurement.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Cotton buffing cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_buff_cloth`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Paper masking tape (`masking`)

One actual supplied paper masking tape; measure actual wear/consumption and disposed mass. Binder/backing/adhesive is embedded, not extra procurement.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Paper masking tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_masking`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Alternating current (`electricity`)

Actual electricity for conditioning, CNC routing, extraction, sanding, coating, buffing, soldering, setup and first-release tests. Submeters and exclusive provider gate prevent duplicate compressors/lighting loads. Binding only for actual CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user, including its documented generation/transmission-to-consumer interface. Actual other voltage, country, dedicated technology or plant output needs a different identity before use. Preserve native energy/MJ; meter kWh converts by 3.6 once, no invented extra distribution loss. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `yamaha-craft`; `yamaha-finish`

###### Process Water (`process_water`)

Actual additional treated industrial water only for humidification, cleaning or equipment; water inside supplied wet wood/preparations is already included once. Record each actual use and state independently. Native Product is treated industrial process water, including industrial/service/utility, reclaimed and recirculating water synonyms, with treatment, specification, acquisition route and availability to be disclosed. Native fixes no purity, geography or CAS. Confirm the actual supplier treatment/state and use, not environmental water or an automatic steam/condensate substitute. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_process_water`
- Sources: `yamaha-craft`

###### Natural gas fuel (`fuel`)

Conditional actual on-site fuel only, not assumed furnace/boiler. Retain supplier gas state, calorific basis, measured carrier mass/volume, composition, meters and combustion species separately; purchased heat provider excludes overlapping fuel.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Natural gas fuel
- Flow property / unit: Energy / MJ
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources: `yamaha-craft`

###### Heat for manufacturing (`purchased_heat`)

Conditional externally purchased thermal energy for actual drying/conditioning. No invented steam or boiler; supplier contract defines the single energy and water owner and actual return enthalpy. Native Product is manufacturing thermal-energy demand at plant GLO, heat source/carrier unspecified, referenced by Net calorific value/MJ. This identity supplies no steam mass, pressure, furnace or conversion efficiency; those require independent actual records and disjoint carrier rows. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Heat for manufacturing `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_heat`
- Sources: `yamaha-craft`

###### External steam heat-carrier water (`steam_in`)

Only this actual external external steam heat-carrier water event; mass, phase, pressure, temperature, enthalpy, quality and provider ownership measured. Physical V is full, thermal MJ handled once in the energy row; internal recirculation cancels.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: External steam heat-carrier water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam_in`
- Sources: `yamaha-craft`

###### External liquid hot-water heat carrier (`hotwater_in`)

Only this actual external external liquid hot-water heat carrier event; mass, phase, pressure, temperature, enthalpy, quality and provider ownership measured. Physical V is full, thermal MJ handled once in the energy row; internal recirculation cancels.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: External liquid hot-water heat carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hotwater_in`
- Sources: `yamaha-craft`

##### Waste flows

##### Elementary flows

###### Molecular oxygen gas (`m_o2_in`)

Actual incoming molecular oxygen gas in ventilation/conditioning or natural moisture exchange. Measure gas state and species separately; no assumed dry-air split or aggregate-air duplicate. Incoming and outgoing species are not netted in the physical ledger; attached wood/formulation water is a disjoint subledger.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is molecular O2, CAS 7782-44-7, Mass/kg, resource from air, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_m_o2_in`
- Sources: `yamaha-wood`; `yamaha-craft`

###### Molecular dinitrogen gas (`m_n2_in`)

Actual incoming molecular dinitrogen gas in ventilation/conditioning or natural moisture exchange. Measure gas state and species separately; no assumed dry-air split or aggregate-air duplicate. Incoming and outgoing species are not netted in the physical ledger; attached wood/formulation water is a disjoint subledger.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is molecular N2, CAS 7727-37-9, Mass/kg, resource from air, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_m_n2_in`
- Sources: `yamaha-wood`; `yamaha-craft`

###### Argon gas (`m_ar_in`)

Actual incoming argon gas in ventilation/conditioning or natural moisture exchange. Measure gas state and species separately; no assumed dry-air split or aggregate-air duplicate. Incoming and outgoing species are not netted in the physical ledger; attached wood/formulation water is a disjoint subledger.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is Ar, CAS 7440-37-1, Mass/kg, resource from air, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_m_ar_in`
- Sources: `yamaha-wood`; `yamaha-craft`

###### Water vapour (`m_h2o_in`)

Actual incoming water vapour in ventilation/conditioning or natural moisture exchange. Measure gas state and species separately; no assumed dry-air split or aggregate-air duplicate. Incoming and outgoing species are not netted in the physical ledger; attached wood/formulation water is a disjoint subledger.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_m_h2o_in`
- Sources: `yamaha-wood`; `yamaha-craft`

#### Outputs

##### Product flows

###### External condensate Product return (`condensate_return`)

Only this actual external external condensate product return event; mass, phase, pressure, temperature, enthalpy, quality and provider ownership measured. Physical V is full, thermal MJ handled once in the energy row; internal recirculation cancels.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: External condensate Product return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condensate_return`
- Sources: `yamaha-craft`

###### External heat-exchange liquid-water Product return (`hotwater_return`)

Only this actual external external heat-exchange liquid-water product return event; mass, phase, pressure, temperature, enthalpy, quality and provider ownership measured. Physical V is full, thermal MJ handled once in the energy row; internal recirculation cancels.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: External heat-exchange liquid-water Product return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hotwater_return`
- Sources: `yamaha-craft`

###### Musical instruments, the sound of which is produced, or must be amplified, electrically (`finished_guitar`)

Only complete newly first-released solid-body passive electromagnetic electric guitars. Actual fitted neck, bridge, tuners, strings, passive controls and mono output pass the model specification, playability, electrical signal and exterior inspection. No part, amplifier, battery-active instrument or second release. Native Product is one manufactured finished electrical-sound/required-amplification musical instrument, production mix at plant; no fixed species, SKU, grade, geography or CAS. Its broad identity does not itself choose a guitar, passive circuit or quality gate; the complete positive scope and actual first-release evidence in this card are mandatory. It cannot identify a loose wooden body, pickup, toy, pure acoustic instrument or external amplifier. Q already includes closing released FG once; 1 kg is the declared normalized output of complete instruments.

- Selected flow: Musical instruments, the sound of which is produced, or must be amplified, electrically `ba0b61a1-012a-48f1-bc09-f64811faa1ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finished_guitar`
- Sources: `yamaha-mechanism`; `yamaha-pickup`; `yamaha-craft`; `duncan-passive-twoh`

##### Waste flows

###### Wood waste (`wood_waste`)

One actual mixed untreated wood offcut/dust collection exit. Source offcuts and captured dust are independently measured subaccounts, not summed again as two external exits. Contaminated coated wood needs its own actual route. This actual offcut/dust exit is non-agglomerated; a briquette/agglomerated-wood identity is incompatible, and a fines-only sawdust identity cannot cover its chunks. Its flow identity remains unresolved. Keep actual source contributions, moisture, contamination and receiver/treatment records; do not invent agglomeration, grinding, a waste fraction or recycling credit. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood_waste`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### Waste coating residues (`finish_waste`)

Actual single coating-residue collection stream including only real contained overspray/sludge/filters. Separate source contributions reconcile to total container mass; no repeated treatment. Native Waste is coating residues generated at plant GLO from surface preparation/coating, including overspray, sludge and spent filters, with treatment outside this unit process. Actual mixture and external treatment need records; it does not make every solvent/cloth stream the same waste. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Waste coating residues `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_waste`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### Metal scrap (`string_trim`)

Only actual string/fret wire cutting and straightening offcuts. Removed complete bridges, electronics and old cutters are different streams. Native Waste at plant GLO is minor wire/strip preparation trimming and straightening scrap. Only actual matching string/fret wire offcuts use it, not retired complete metal assemblies or an automatic metal recycling product/credit. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Metal scrap `f4c839b2-3a9a-4715-86a3-bc032b6527b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_string_trim`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### Rejected passive pickup component (`component_reject`)

Actual failed pickup removed or rejected as one specific stream, no complete-guitar or generic hazardous mixture substitution.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Rejected passive pickup component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_reject`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### Rejected complete electric guitar (`failed_guitar`)

Actual unrepairable failed instrument at its real hold/waste gate, with full wet gross mass and existing manufacturing burdens retained. Sale/export does not remove those burdens.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Rejected complete electric guitar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_failed_guitar`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### Spent coating-cleaning solvent preparation (`cleaning_waste`)

Actual separate liquid spent cleaner outlet with its real residual formulation; never assume the clean input composition persists unchanged.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Spent coating-cleaning solvent preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning_waste`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### Guitar-plant cleaning wastewater (`wastewater`)

Actual wastewater exit measured as whole liquid with independently sampled species and water mass. COD is an indicator, not a chemical species or dry-solids mass.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Guitar-plant cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### Used coated abrasive paper (`used_abrasive`)

Actual separate worn abrasive-paper exit including collected abrasion only if physically attached; avoid duplicate captured-dust mass.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Used coated abrasive paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_used_abrasive`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### Spent cotton polishing cloth (`used_cloth`)

Actual separate contaminated cloth stream, whole wet mass and composition subledgers; if actually in coating mixed container cancel the paired source contribution and retain only one external exit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Spent cotton polishing cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_used_cloth`
- Sources: `yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

##### Elementary flows

###### Molecular oxygen gas (`m_o2_out`)

Actual outgoing molecular oxygen gas in ventilation/conditioning or natural moisture exchange. Measure gas state and species separately; no assumed dry-air split or aggregate-air duplicate. Incoming and outgoing species are not netted in the physical ledger; attached wood/formulation water is a disjoint subledger.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is molecular O2, CAS 7782-44-7, Mass/kg, emission to air unspecified, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_m_o2_out`
- Sources: `yamaha-wood`; `yamaha-craft`

###### Molecular dinitrogen gas (`m_n2_out`)

Actual outgoing molecular dinitrogen gas in ventilation/conditioning or natural moisture exchange. Measure gas state and species separately; no assumed dry-air split or aggregate-air duplicate. Incoming and outgoing species are not netted in the physical ledger; attached wood/formulation water is a disjoint subledger. Native ILCD Elementary identity is N2, CAS 7727-37-9, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_m_n2_out`
- Sources: `yamaha-wood`; `yamaha-craft`

###### Argon gas (`m_ar_out`)

Actual outgoing argon gas in ventilation/conditioning or natural moisture exchange. Measure gas state and species separately; no assumed dry-air split or aggregate-air duplicate. Incoming and outgoing species are not netted in the physical ledger; attached wood/formulation water is a disjoint subledger. Native ILCD Elementary identity is Ar, CAS 7440-37-1, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_m_ar_out`
- Sources: `yamaha-wood`; `yamaha-craft`

###### Water vapour (`m_h2o_out`)

Actual outgoing water vapour in ventilation/conditioning or natural moisture exchange. Measure gas state and species separately; no assumed dry-air split or aggregate-air duplicate. Incoming and outgoing species are not netted in the physical ledger; attached wood/formulation water is a disjoint subledger. Native ILCD Elementary identity is H2O vapour, CAS 7732-18-5, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_m_h2o_out`
- Sources: `yamaha-wood`; `yamaha-craft`

###### Carbon dioxide from fossil fuel (`em_co2`)

Conditional actual carbon dioxide from fossil fuel leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical. Native ILCD Elementary identity is fossil CO2, CAS 124-38-9, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_co2`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Carbon monoxide from fossil fuel (`em_co`)

Conditional actual carbon monoxide from fossil fuel leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical. Native ILCD Elementary identity is fossil CO, CAS 630-08-0, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_co`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Nitrogen monoxide gas (`em_no`)

Conditional actual nitrogen monoxide gas leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is NO, CAS 10102-43-9, Mass/kg, emission to air unspecified, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor. HNO/nitroxyl synonym noise does not authorize HNO.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_no`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Nitrogen dioxide gas (`em_no2`)

Conditional actual nitrogen dioxide gas leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is NO2, CAS 10102-44-0, Mass/kg, emission to air unspecified, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor. Dinitrogen-tetroxide synonym noise does not authorize N2O4.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_no2`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Sulfur dioxide gas (`em_so2`)

Conditional actual sulfur dioxide gas leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical. Native ILCD Elementary identity is SO2, CAS 7446-09-5, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_so2`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Methane from fossil fuel (`em_ch4`)

Conditional actual methane from fossil fuel leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is fossil CH4, CAS 74-82-8, Mass/kg, emission to air unspecified, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor. Carbon/graphite/biogas/formaldehyde synonym noise does not authorize those identities or biogenic methane.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_ch4`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Acetone vapour (`em_acetone`)

Conditional actual acetone vapour leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is acetone, CAS 67-64-1, Mass/kg, emission to air unspecified, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_acetone`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Ethyl acetate vapour (`em_ethylacetate`)

Conditional actual ethyl acetate vapour leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is ethyl acetate, CAS 141-78-6, Mass/kg, emission to air unspecified, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor.

- Selected flow: ethyl acetate `4d9a8790-3ddd-11dd-97ba-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_ethylacetate`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Toluene vapour (`em_toluene`)

Conditional actual toluene vapour leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native ILCD Elementary identity is toluene, CAS 108-88-3, Mass/kg, emission to air unspecified, without fixed geography or technical grade. Bind only the actual measured gas species and source at that environmental boundary; a supplied industrial Product gas, liquid, dissolved species, other compartment or aggregate air/VOC/NOx/total-carbon quantity cannot substitute. Retain full gross incoming/outgoing V separately; native synonyms supply no recipe, conversion or treatment factor.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_toluene`
- Sources: `yamaha-finish`; `yamaha-craft`

###### Airborne wood dust (`em_wood_dust_air`)

Conditional actual airborne wood dust leaving to the measured environmental medium. Establish independent molecular/particle identity and source, use actual composition and measurement; NOx, VOC, PM or total carbon never becomes this species by assumption. Other actually detected species require separate cards, not a residual chemical.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Airborne wood dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_em_wood_dust_air`
- Sources: `yamaha-finish`; `yamaha-craft`

### Process: Original-cohort storage handling and actual work (`service`)

#### Inputs

##### Product flows

###### Alternating current (`s_electricity`)

Only actual postrelease alternating current attributable to original serial cohort Q_c during observed H; include attempted/unpermitted/failed work with actual hold/waste outcome. Future not-yet-performed work is unknown, not an invented burden or zero. New part contains embedded constituents once. Binding only for actual CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user, including its documented generation/transmission-to-consumer interface. Actual other voltage, country, dedicated technology or plant output needs a different identity before use. Preserve native energy/MJ; meter kWh converts by 3.6 once, no invented extra distribution loss. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_s_electricity`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Process Water (`s_water`)

Only actual postrelease process water attributable to original serial cohort Q_c during observed H; include attempted/unpermitted/failed work with actual hold/waste outcome. Future not-yet-performed work is unknown, not an invented burden or zero. New part contains embedded constituents once. Native Product is treated industrial process water, including industrial/service/utility, reclaimed and recirculating water synonyms, with treatment, specification, acquisition route and availability to be disclosed. Native fixes no purity, geography or CAS. Confirm the actual supplier treatment/state and use, not environmental water or an automatic steam/condensate substitute. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_s_water`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Whole replacement electric-guitar string (`s_new_string`)

Only actual postrelease whole replacement electric-guitar string attributable to original serial cohort Q_c during observed H; include attempted/unpermitted/failed work with actual hold/waste outcome. Future not-yet-performed work is unknown, not an invented burden or zero. New part contains embedded constituents once.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_s_new_string`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Whole replacement passive guitar pickup (`s_new_pickup`)

Only actual postrelease whole replacement passive guitar pickup attributable to original serial cohort Q_c during observed H; include attempted/unpermitted/failed work with actual hold/waste outcome. Future not-yet-performed work is unknown, not an invented burden or zero. New part contains embedded constituents once.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is the at-plant manufactured musical-instrument part/accessory family, Mass/kg. Only the single complete supplied guitar-specific article named by this card is selected, with actual material, geometry, passive function, included constituents and supplier operations documented. A raw material, sports article, powered circuit, whole instrument or combined parts bundle is not substituted. The native general comment says Sports goods, inconsistent with its finished musical-part name and hierarchy; this provides no sports-article applicability or quantitative evidence. Actual supplier compatibility remains required.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_s_new_pickup`
- Sources: `yamaha-qc`; `ilcd-allocation`

##### Waste flows

##### Elementary flows

###### Water vapour (`s_h2o_in`)

Actual natural ambient moisture gain in storage or handling, as distinct from supplied wet instrument water and intentional process water. No fictitious repair permission or operation; full wet closing FG and real water influx remain together.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_s_h2o_in`
- Sources: `yamaha-qc`; `yamaha-wood`

#### Outputs

##### Product flows

##### Waste flows

###### Removed electric-guitar string (`s_old_string`)

Actual removed old part, its whole wet gross mass, destination, retained burden and legitimate handover separately evidenced; no automatic new production or credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Removed electric-guitar string
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_s_old_string`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Removed passive guitar pickup (`s_old_pickup`)

Actual removed old part, its whole wet gross mass, destination, retained burden and legitimate handover separately evidenced; no automatic new production or credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Removed passive guitar pickup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_s_old_pickup`
- Sources: `yamaha-qc`; `ilcd-allocation`

##### Elementary flows

###### Water vapour (`s_h2o_out`)

Actual natural ambient moisture loss in storage or handling, as distinct from supplied wet instrument water and intentional process water. No fictitious repair permission or operation; full wet closing FG and real water influx remain together. Native ILCD Elementary identity is H2O vapour, CAS 7732-18-5, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_s_h2o_out`
- Sources: `yamaha-qc`; `yamaha-wood`

### Process: Actual packaging events and container gate (`packaging`)

#### Inputs

##### Product flows

###### Corrugated guitar shipping carton (`carton_p`)

Only the actual Separate procurement P of one corrugated guitar shipping carton. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_p`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Corrugated guitar shipping carton (`carton_i`)

Only the actual Supplier-included ingress I of one corrugated guitar shipping carton. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Preserve supplier-included physical ingress with upstream owner exactly once; it is not zero and not another purchase.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_i`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Corrugated guitar shipping carton (`carton_er`)

Only the actual External return received ER of one corrugated guitar shipping carton. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_er`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Polyethylene guitar protection bag (`pebag_p`)

Only the actual Separate procurement P of one polyethylene guitar protection bag. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit. Native Product is one polyethylene bag/PE bag, CAS 9002-88-4, production mix at plant for packaging/transport/storage. No fixed grade, density, thickness or geography; confirm actual supplied bag, no PET, woven PP, raw PE resin or separate duplicate liner/adhesive constituents. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_p`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Polyethylene guitar protection bag (`pebag_i`)

Only the actual Supplier-included ingress I of one polyethylene guitar protection bag. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Preserve supplier-included physical ingress with upstream owner exactly once; it is not zero and not another purchase. Native Product is one polyethylene bag/PE bag, CAS 9002-88-4, production mix at plant for packaging/transport/storage. No fixed grade, density, thickness or geography; confirm actual supplied bag, no PET, woven PP, raw PE resin or separate duplicate liner/adhesive constituents. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_i`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Polyethylene guitar protection bag (`pebag_er`)

Only the actual External return received ER of one polyethylene guitar protection bag. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit. Native Product is one polyethylene bag/PE bag, CAS 9002-88-4, production mix at plant for packaging/transport/storage. No fixed grade, density, thickness or geography; confirm actual supplied bag, no PET, woven PP, raw PE resin or separate duplicate liner/adhesive constituents. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_er`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Expanded-polyethylene guitar cushion (`foam_p`)

Only the actual Separate procurement P of one expanded-polyethylene guitar cushion. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Expanded-polyethylene guitar cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_p`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Expanded-polyethylene guitar cushion (`foam_i`)

Only the actual Supplier-included ingress I of one expanded-polyethylene guitar cushion. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Preserve supplier-included physical ingress with upstream owner exactly once; it is not zero and not another purchase.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Expanded-polyethylene guitar cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_i`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Expanded-polyethylene guitar cushion (`foam_er`)

Only the actual External return received ER of one expanded-polyethylene guitar cushion. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Expanded-polyethylene guitar cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_er`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Whole wooden transport pallet (`pallet_p`)

Only the actual Separate procurement P of one whole wooden transport pallet. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit. Native Product is a manufactured finished wooden portable load platform family at plant production mix; it includes platforms and wooden collars but this card selects one actual whole pallet. No EURO dimensions, species, treatment, moisture, recycled share or lifetime is fixed. Document actual BOM and wet state; repair board and retained water are distinct subaccounts, not extra whole pallets. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_p`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Whole wooden transport pallet (`pallet_i`)

Only the actual Supplier-included ingress I of one whole wooden transport pallet. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Preserve supplier-included physical ingress with upstream owner exactly once; it is not zero and not another purchase. Native Product is a manufactured finished wooden portable load platform family at plant production mix; it includes platforms and wooden collars but this card selects one actual whole pallet. No EURO dimensions, species, treatment, moisture, recycled share or lifetime is fixed. Document actual BOM and wet state; repair board and retained water are distinct subaccounts, not extra whole pallets. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_i`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Whole wooden transport pallet (`pallet_er`)

Only the actual External return received ER of one whole wooden transport pallet. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit. Native Product is a manufactured finished wooden portable load platform family at plant production mix; it includes platforms and wooden collars but this card selects one actual whole pallet. No EURO dimensions, species, treatment, moisture, recycled share or lifetime is fixed. Document actual BOM and wet state; repair board and retained water are distinct subaccounts, not extra whole pallets. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_er`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Corrugated guitar shipping carton (`carton_used_burden`)

Conditional actual corrugated guitar shipping carton attributable-use burden dimension only. This is the unique upstream/service burden owner for actual P/I ingress and inherited package charges, with actual supplier-included ownership retained. It creates no additional physical article, purchase, gross leg or credit; P/I/ER/S/EO/W cards already disclose complete V independently. Used original-cohort service stays assigned when FG is held; only truly unused/unassigned charge carries. Reconcile the burden ledger to physical pool events without scaling their masses.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_used_burden`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Polyethylene guitar protection bag (`pebag_used_burden`)

Conditional actual polyethylene guitar protection bag attributable-use burden dimension only. This is the unique upstream/service burden owner for actual P/I ingress and inherited package charges, with actual supplier-included ownership retained. It creates no additional physical article, purchase, gross leg or credit; P/I/ER/S/EO/W cards already disclose complete V independently. Used original-cohort service stays assigned when FG is held; only truly unused/unassigned charge carries. Reconcile the burden ledger to physical pool events without scaling their masses. Native Product is one polyethylene bag/PE bag, CAS 9002-88-4, production mix at plant for packaging/transport/storage. No fixed grade, density, thickness or geography; confirm actual supplied bag, no PET, woven PP, raw PE resin or separate duplicate liner/adhesive constituents. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_used_burden`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Expanded-polyethylene guitar cushion (`foam_used_burden`)

Conditional actual expanded-polyethylene guitar cushion attributable-use burden dimension only. This is the unique upstream/service burden owner for actual P/I ingress and inherited package charges, with actual supplier-included ownership retained. It creates no additional physical article, purchase, gross leg or credit; P/I/ER/S/EO/W cards already disclose complete V independently. Used original-cohort service stays assigned when FG is held; only truly unused/unassigned charge carries. Reconcile the burden ledger to physical pool events without scaling their masses.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Expanded-polyethylene guitar cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_used_burden`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Whole wooden transport pallet (`pallet_used_burden`)

Conditional actual whole wooden transport pallet attributable-use burden dimension only. This is the unique upstream/service burden owner for actual P/I ingress and inherited package charges, with actual supplier-included ownership retained. It creates no additional physical article, purchase, gross leg or credit; P/I/ER/S/EO/W cards already disclose complete V independently. Used original-cohort service stays assigned when FG is held; only truly unused/unassigned charge carries. Reconcile the burden ledger to physical pool events without scaling their masses. Native Product is a manufactured finished wooden portable load platform family at plant production mix; it includes platforms and wooden collars but this card selects one actual whole pallet. No EURO dimensions, species, treatment, moisture, recycled share or lifetime is fixed. Document actual BOM and wet state; repair board and retained water are distinct subaccounts, not extra whole pallets. This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_used_burden`
- Sources: `yamaha-qc`; `ilcd-allocation`

##### Waste flows

##### Elementary flows

###### Water vapour (`carton_humidity_in`)

Only actual measured ambient water-vapour gain by this corrugated carton pool during ordinary storage/handling, or actual repair/drying. No presumed moisture transfer or operation. Whole wet P/I article water is embedded once; X_in/X_out eliminates overlap only with other same-side incoming/outgoing terms and cannot remove retained new water influx or the full wet closing pool mass.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_humidity_in`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Water vapour (`pebag_humidity_in`)

Only actual measured ambient water-vapour gain by this polyethylene bag pool during ordinary storage/handling, or actual repair/drying. No presumed moisture transfer or operation. Whole wet P/I article water is embedded once; X_in/X_out eliminates overlap only with other same-side incoming/outgoing terms and cannot remove retained new water influx or the full wet closing pool mass.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_humidity_in`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Water vapour (`foam_humidity_in`)

Only actual measured ambient water-vapour gain by this expanded polyethylene cushion pool during ordinary storage/handling, or actual repair/drying. No presumed moisture transfer or operation. Whole wet P/I article water is embedded once; X_in/X_out eliminates overlap only with other same-side incoming/outgoing terms and cannot remove retained new water influx or the full wet closing pool mass.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_humidity_in`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Water vapour (`pallet_humidity_in`)

Only actual measured ambient water-vapour gain by this wooden pallet pool during ordinary storage/handling, or actual repair/drying. No presumed moisture transfer or operation. Whole wet P/I article water is embedded once; X_in/X_out eliminates overlap only with other same-side incoming/outgoing terms and cannot remove retained new water influx or the full wet closing pool mass.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_humidity_in`
- Sources: `yamaha-qc`; `ilcd-allocation`

#### Outputs

##### Product flows

###### Corrugated guitar shipping carton (`carton_s`)

Only the actual Gross shipment out S of one corrugated guitar shipping carton. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_s`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Corrugated guitar shipping carton (`carton_eo`)

Only the actual External return sent EO of one corrugated guitar shipping carton. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_eo`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Polyethylene guitar protection bag (`pebag_s`)

Only the actual Gross shipment out S of one polyethylene guitar protection bag. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit. Native Product is one polyethylene bag/PE bag, CAS 9002-88-4, production mix at plant for packaging/transport/storage. No fixed grade, density, thickness or geography; confirm actual supplied bag, no PET, woven PP, raw PE resin or separate duplicate liner/adhesive constituents. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_s`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Polyethylene guitar protection bag (`pebag_eo`)

Only the actual External return sent EO of one polyethylene guitar protection bag. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit. Native Product is one polyethylene bag/PE bag, CAS 9002-88-4, production mix at plant for packaging/transport/storage. No fixed grade, density, thickness or geography; confirm actual supplied bag, no PET, woven PP, raw PE resin or separate duplicate liner/adhesive constituents. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_eo`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Expanded-polyethylene guitar cushion (`foam_s`)

Only the actual Gross shipment out S of one expanded-polyethylene guitar cushion. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Expanded-polyethylene guitar cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_s`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Expanded-polyethylene guitar cushion (`foam_eo`)

Only the actual External return sent EO of one expanded-polyethylene guitar cushion. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Expanded-polyethylene guitar cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_eo`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Whole wooden transport pallet (`pallet_s`)

Only the actual Gross shipment out S of one whole wooden transport pallet. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit. Native Product is a manufactured finished wooden portable load platform family at plant production mix; it includes platforms and wooden collars but this card selects one actual whole pallet. No EURO dimensions, species, treatment, moisture, recycled share or lifetime is fixed. Document actual BOM and wet state; repair board and retained water are distinct subaccounts, not extra whole pallets. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_s`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Whole wooden transport pallet (`pallet_eo`)

Only the actual External return sent EO of one whole wooden transport pallet. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. Whole wet article once, no extra constituent purchase, no economic scaling or automatic credit. Native Product is a manufactured finished wooden portable load platform family at plant production mix; it includes platforms and wooden collars but this card selects one actual whole pallet. No EURO dimensions, species, treatment, moisture, recycled share or lifetime is fixed. Document actual BOM and wet state; repair board and retained water are distinct subaccounts, not extra whole pallets. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_eo`
- Sources: `yamaha-qc`; `ilcd-allocation`

##### Waste flows

###### Waste corrugated guitar shipping carton (`carton_w`)

Only the actual Source contribution W to actual waste container of one corrugated guitar shipping carton. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. This is a measured internal source-to-container transfer only when all packaging actually shares one mixed exit. Paired receiving subledger cancels it at consolidation; no second external Waste/provider. Separate real exits instead require separate external atoms before use.  Its numerator is the actual internal contribution V, not a second external exchange. Paired receiving contribution cancels in the consolidated physical gate; external container is counted once.

- Selected flow: Waste corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_w`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Waste polyethylene guitar protection bag (`pebag_w`)

Only the actual Source contribution W to actual waste container of one polyethylene guitar protection bag. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. This is a measured internal source-to-container transfer only when all packaging actually shares one mixed exit. Paired receiving subledger cancels it at consolidation; no second external Waste/provider. Separate real exits instead require separate external atoms before use.  Its numerator is the actual internal contribution V, not a second external exchange. Paired receiving contribution cancels in the consolidated physical gate; external container is counted once.

- Selected flow: Waste polyethylene guitar protection bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_w`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Waste expanded-polyethylene guitar cushion (`foam_w`)

Only the actual Source contribution W to actual waste container of one expanded-polyethylene guitar cushion. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. This is a measured internal source-to-container transfer only when all packaging actually shares one mixed exit. Paired receiving subledger cancels it at consolidation; no second external Waste/provider. Separate real exits instead require separate external atoms before use.  Its numerator is the actual internal contribution V, not a second external exchange. Paired receiving contribution cancels in the consolidated physical gate; external container is counted once.

- Selected flow: Waste expanded-polyethylene guitar cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_w`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Waste whole wooden transport pallet (`pallet_w`)

Only the actual Source contribution W to actual waste container of one whole wooden transport pallet. Track this separate pool across empty, WIP-attached, FG-attached and reusable opening/closing stocks. This is a measured internal source-to-container transfer only when all packaging actually shares one mixed exit. Paired receiving subledger cancels it at consolidation; no second external Waste/provider. Separate real exits instead require separate external atoms before use.  Its numerator is the actual internal contribution V, not a second external exchange. Paired receiving contribution cancels in the consolidated physical gate; external container is counted once.

- Selected flow: Waste whole wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_w`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Mixed guitar-shipping packaging waste (`mixed_packaging_waste`)

One measured actual mixed external Waste container, total wet mass includes the independently recorded source W contributions once. Total and constituents are not additive; attach actual transport/treatment provider once. Never invent a mixed exit where source wastes actually leave separately.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native Waste is mixed packaging offcuts/damaged packaging generated at plant within the assembly/testing and packaging gate, Mass/kg. Bind only this actual one mixed factory packaging outlet, with measured material fractions, contamination and receiver evidence. Individual W cards remain paired internal source contributions cancelled at consolidation; they do not create additional external exits or treatment. Household collection, a single polymer, a whole instrument or treatment output needs another identity. The flow supplies no quantities, default fate, provider or recycling credit.

- Selected flow: Packaging waste, mixed `cf748dc8-a0d3-411f-aab6-168e7ee54a6e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mixed_packaging_waste`
- Sources: `yamaha-qc`; `ilcd-allocation`

##### Elementary flows

###### Water vapour (`carton_humidity_out`)

Only actual measured ambient water-vapour loss from this corrugated carton pool during ordinary storage/handling, or actual repair/drying. No presumed moisture transfer or operation. Whole wet P/I article water is embedded once; X_in/X_out eliminates overlap only with other same-side incoming/outgoing terms and cannot remove retained new water influx or the full wet closing pool mass. Native ILCD Elementary identity is H2O vapour, CAS 7732-18-5, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton_humidity_out`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Water vapour (`pebag_humidity_out`)

Only actual measured ambient water-vapour loss from this polyethylene bag pool during ordinary storage/handling, or actual repair/drying. No presumed moisture transfer or operation. Whole wet P/I article water is embedded once; X_in/X_out eliminates overlap only with other same-side incoming/outgoing terms and cannot remove retained new water influx or the full wet closing pool mass. Native ILCD Elementary identity is H2O vapour, CAS 7732-18-5, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pebag_humidity_out`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Water vapour (`foam_humidity_out`)

Only actual measured ambient water-vapour loss from this expanded polyethylene cushion pool during ordinary storage/handling, or actual repair/drying. No presumed moisture transfer or operation. Whole wet P/I article water is embedded once; X_in/X_out eliminates overlap only with other same-side incoming/outgoing terms and cannot remove retained new water influx or the full wet closing pool mass. Native ILCD Elementary identity is H2O vapour, CAS 7732-18-5, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_foam_humidity_out`
- Sources: `yamaha-qc`; `ilcd-allocation`

###### Water vapour (`pallet_humidity_out`)

Only actual measured ambient water-vapour loss from this wooden pallet pool during ordinary storage/handling, or actual repair/drying. No presumed moisture transfer or operation. Whole wet P/I article water is embedded once; X_in/X_out eliminates overlap only with other same-side incoming/outgoing terms and cannot remove retained new water influx or the full wet closing pool mass. Native ILCD Elementary identity is H2O vapour, CAS 7732-18-5, Mass/kg, emission to air unspecified, no fixed geography or technical grade. Synonyms do not authorize other molecules, ions, isotopes, liquid/solid phase, resource input or industrial Product supply. Only the actual species, source and matching outlet medium may bind; any more specific receiving compartment requires a compatible flow. No surrogate from total N, carbon, NOx, VOC, COD or PM. This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_humidity_out`
- Sources: `yamaha-qc`; `ilcd-allocation`

### Process: Equipment stocks maintenance and used service (`assets`)

#### Inputs

##### Product flows

###### Woodworking CNC machining centre (`cnc_receipt`)

Actual whole woodworking cnc machining centre receipt event, full measured asset mass and installed stock history. Gross physical disclosure creates no per-kg whole-machine purchase. Actual period service burden is separate and no fixed life is assumed.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native Product is manufactured woodworking machine-tool equipment at plant, Mass/kg. Select only this actual whole woodworking CNC machining centre and its documented installed/retirement state, not the cutter, a board press inferred from the family, or a duration service. Retirement is a physical Product transfer only where the actual article remains a product; actual scrapping requires the corresponding Waste identity. No mass per machine, lifetime, duty, service conversion or supplier geography is provided.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cnc_receipt`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Woodworking CNC machining centre use service (`cnc_service`)

Actual woodworking cnc machining centre service charge vector consumed by this cohort, using measured duty/capacity and justified physical causality. Already-performed service does not disappear when released FG remains held; only unused/unassigned charge carries.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Woodworking CNC machining centre use service
- Flow property / unit: Duration / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cnc_service`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Steel guitar conditioning rack (`rack_receipt`)

Actual whole steel guitar conditioning rack receipt event, full measured asset mass and installed stock history. Gross physical disclosure creates no per-kg whole-machine purchase. Actual period service burden is separate and no fixed life is assumed.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Steel guitar conditioning rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rack_receipt`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Steel guitar conditioning rack use service (`rack_service`)

Actual steel guitar conditioning rack service charge vector consumed by this cohort, using measured duty/capacity and justified physical causality. Already-performed service does not disappear when released FG remains held; only unused/unassigned charge carries.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Steel guitar conditioning rack use service
- Flow property / unit: Duration / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rack_service`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Electric-guitar test amplifier (`testamp_receipt`)

Actual whole electric-guitar test amplifier receipt event, full measured asset mass and installed stock history. Gross physical disclosure creates no per-kg whole-machine purchase. Actual period service burden is separate and no fixed life is assumed.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native Product name and hierarchy cover manufactured audio-frequency electrical amplifiers/sound amplifier sets at plant, Mass/kg. Select only the actual complete external guitar test amplifier asset, not the guitar BOM, pickup, loudspeaker alone or use-duration service. The general comment instead cites parts of classes 4721–4733/4822; retain this inconsistency and require actual whole finished-amplifier supplier proof, never infer parts as a whole. Retirement remains Product only for an actual product transfer; scrapping needs Waste. No unit mass, life, power rating, service factor or geography is supplied.

- Selected flow: Microphones and stands therefor, loudspeakers, headphones, earphones and combined microphone/speaker sets, audio-frequency electric amplifiers, electric sound amplifier sets `9fe0f5c8-6b15-415d-b1fb-52a9bf9e858e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testamp_receipt`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Electric-guitar test amplifier use service (`testamp_service`)

Actual electric-guitar test amplifier service charge vector consumed by this cohort, using measured duty/capacity and justified physical causality. Already-performed service does not disappear when released FG remains held; only unused/unassigned charge carries.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Electric-guitar test amplifier use service
- Flow property / unit: Duration / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testamp_service`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Steel woodworking replacement cutter (`new_cutter`)

Actual steel woodworking replacement cutter only, new/old and in-service fluid stock separate. X_in/X_out removes overlap only with other same-side flow terms, never cancels real influx retained in closing stock. Whole fluid formulation once; repair board is not a whole pallet.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Steel woodworking replacement cutter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_new_cutter`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Whole supplied machinery lubricating oil (`new_oil`)

Actual whole supplied machinery lubricating oil only, new/old and in-service fluid stock separate. X_in/X_out removes overlap only with other same-side flow terms, never cancels real influx retained in closing stock. Whole fluid formulation once; repair board is not a whole pallet.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger.

- Selected flow: Whole supplied machinery lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_new_oil`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Solid hardwood pallet repair board (`pallet_repair`)

Actual solid hardwood pallet repair board only, new/old and in-service fluid stock separate. X_in/X_out removes overlap only with other same-side flow terms, never cancels real influx retained in closing stock. Whole fluid formulation once; repair board is not a whole pallet.  This is the once-owned burden dimension; raw U and inherited vectors yield undivided attributable A, with full V retained in the physical companion ledger. Native Product is non-coniferous sawn/chipped-lengthwise/sliced/peeled wood strictly thicker than 6 mm, manufactured wood at plant, Mass/kg. This binding covers only this actual solid hardwood blank/repair board at that supply state; verify species, thickness, moisture and supplier processing. A thinner board, coniferous wood, glued/engineered panel or shaped finished component requires its own compatible identity before use; no density or machining yield is supplied.

- Selected flow: Wood, sawn or chipped lengthwise, sliced or peeled, of a thickness exceeding 6 mm, of non-coniferous wood `6568e32b-edf1-47c9-8d04-6b31af0d8c1c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet_repair`
- Sources: `yamaha-craft`; `ilcd-allocation`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Woodworking CNC machining centre (`cnc_retirement`)

Actual whole woodworking cnc machining centre retirement event, full measured asset mass and installed stock history. Gross physical disclosure creates no per-kg whole-machine purchase. Actual period service burden is separate and no fixed life is assumed.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Woodworking CNC machining centre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cnc_retirement`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Steel guitar conditioning rack (`rack_retirement`)

Actual whole steel guitar conditioning rack retirement event, full measured asset mass and installed stock history. Gross physical disclosure creates no per-kg whole-machine purchase. Actual period service burden is separate and no fixed life is assumed.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Steel guitar conditioning rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rack_retirement`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Electric-guitar test amplifier (`testamp_retirement`)

Actual whole electric-guitar test amplifier retirement event, full measured asset mass and installed stock history. Gross physical disclosure creates no per-kg whole-machine purchase. Actual period service burden is separate and no fixed life is assumed.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Electric-guitar test amplifier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testamp_retirement`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Removed steel woodworking cutter (`old_cutter`)

Actual removed steel woodworking cutter only, new/old and in-service fluid stock separate. X_in/X_out removes overlap only with other same-side flow terms, never cancels real influx retained in closing stock. Whole fluid formulation once; repair board is not a whole pallet.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger.

- Selected flow: Removed steel woodworking cutter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_old_cutter`
- Sources: `yamaha-craft`; `ilcd-allocation`

###### Spent machinery lubricating oil (`spent_oil`)

Actual spent machinery lubricating oil only, new/old and in-service fluid stock separate. X_in/X_out removes overlap only with other same-side flow terms, never cancels real influx retained in closing stock. Whole fluid formulation once; repair board is not a whole pallet.  This card discloses complete actual gross leg V. Its single-quotient numerator is V, without stock correction, economic allocation, extra procurement, provider burden or credit. Any actual burden dimension is separately owned once in the burden-vector ledger. Native Waste is petroleum-based or synthetic lubricating oil used and contaminated through use, at its point of generation, Mass/kg, treatment route unspecified. Select only actual spent machinery lubricating oil; new oil, unused off-spec oil, coolant and mixed solvent waste are distinct. Verify actual contamination, receiver and treatment separately; no default recycling, combustion, disposal or credit is authorized.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual gross V / Q_basis from the same single section8 quotient
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_oil`
- Sources: `yamaha-craft`; `ilcd-allocation`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all joint burdens | This is attributional manufacturing, not a substitution/avoided-product model. First assign exclusive processes and virtual subdivisions to their actual cohort/function. Assess each remaining exchange for determining physical causality: actual material incorporation, machining duty, coating area with actual intensity, drying moisture removal, or service duration/capacity only when causal. No arbitrary mass/economic choice and no one fraction for every exchange. | ilcd-allocation |
| allocation_residual | truly inseparable remainder | Only after demonstrating that subdivision and exchange-specific determining physical causality cannot resolve a real remainder, define the actual common process gate and actual coproduct conditions and contemporaneous market values there. Derive price to that state/gate if necessary with traceable evidence and sensitivity. Do not use final retail guitar prices for upstream raw scrap, fixed ratios or automatic credits for waste sale. | ilcd-allocation |
| allocation_gross | all physical and service ledgers | Allocation affects burden vectors only. Every gross packaging, asset, repair, water, species, failed-work and external-return event keeps its complete V. One provider/transfer owner per real burden dimension; internal components/handoffs cancel at consolidation. Performed original-cohort service remains assigned when FG is held. | ilcd-allocation |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols collect undivided raw only. The aggregation_rule is a declaration of the result basis and refers only to the single section8 quotient; it performs no division during collection and no second division after the card result.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_body_stock | manufacture | body_stock | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Alder sawn body blank for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_neck_stock | manufacture | neck_stock | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Maple sawn neck blank for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_fingerboard | manufacture | fingerboard | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Solid maple fingerboard blank for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_truss_rod | manufacture | truss_rod | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished steel guitar truss rod for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_frets | manufacture | frets | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished nickel-silver guitar fret wire for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_nut | manufacture | nut | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished synthetic guitar nut for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_markers | manufacture | markers | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished polymer fingerboard position marker for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pickup | manufacture | pickup | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole passive electromagnetic guitar pickup for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_bridge | manufacture | bridge | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished metal guitar bridge assembly for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_tuner | manufacture | tuner | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished metal guitar tuning machine for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_strings | manufacture | strings | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied electric-guitar steel string for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_volume_pot | manufacture | volume_pot | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Guitar volume potentiometer for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_tone_pot | manufacture | tone_pot | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Guitar tone potentiometer for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_tone_cap | manufacture | tone_cap | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Passive guitar tone capacitor for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_selector | manufacture | selector | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Passive pickup selector switch for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_output_jack | manufacture | output_jack | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Mono guitar output jack for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_hookup_wire | manufacture | hookup_wire | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Insulated copper guitar hookup wire for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_solder | manufacture | solder | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Flux-cored tin-silver-copper solder wire for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_insulation | manufacture | insulation | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Polyvinyl-chloride electrical insulating tape for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_fasteners | manufacture | fasteners | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Additional steel guitar assembly screw for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_neck_plate | manufacture | neck_plate | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished metal bolt-on neck plate for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pickguard | manufacture | pickguard | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished polymer guitar pickguard for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_knob | manufacture | knob | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Finished polymer guitar control knob for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_strap_button | manufacture | strap_button | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Surface-finished metal guitar strap button for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_wood_glue | manufacture | wood_glue | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied aqueous wood adhesive for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_grain_filler | manufacture | grain_filler | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied wood grain-filling preparation for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_undercoat | manufacture | undercoat | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied wood undercoat formulation for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_intercoat | manufacture | intercoat | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied wood intermediate-coat formulation for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_colourcoat | manufacture | colourcoat | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied coloured wood coating for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_topcoat | manufacture | topcoat | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Wood top-coat for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_hardener | manufacture | hardener | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Separately supplied coating hardener formulation for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_thinner | manufacture | thinner | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied coating thinner formulation for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_cleaner | manufacture | cleaner | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied gun-cleaning preparation for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_polish | manufacture | polish | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied guitar buffing compound for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_sandpaper | manufacture | sandpaper | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Coated abrasive paper sheet for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_buff_cloth | manufacture | buff_cloth | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Cotton buffing cloth for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_masking | manufacture | masking | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Paper masking tape for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_electricity | manufacture | electricity | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Alternating current for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | MJ | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_process_water | manufacture | process_water | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Process Water for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_fuel | manufacture | fuel | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Natural gas fuel for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | MJ | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_purchased_heat | manufacture | purchased_heat | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Heat for manufacturing for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | MJ | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_steam_in | manufacture | steam_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual External steam heat-carrier water for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_hotwater_in | manufacture | hotwater_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual External liquid hot-water heat carrier for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_condensate_return | manufacture | condensate_return | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual External condensate Product return for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_hotwater_return | manufacture | hotwater_return | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual External heat-exchange liquid-water Product return for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_wood_waste | manufacture | wood_waste | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Wood waste for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_finish_waste | manufacture | finish_waste | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Waste coating residues for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_string_trim | manufacture | string_trim | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Metal scrap for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_component_reject | manufacture | component_reject | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Rejected passive pickup component for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_failed_guitar | manufacture | failed_guitar | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Rejected complete electric guitar for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_cleaning_waste | manufacture | cleaning_waste | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Spent coating-cleaning solvent preparation for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_wastewater | manufacture | wastewater | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Guitar-plant cleaning wastewater for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_used_abrasive | manufacture | used_abrasive | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Used coated abrasive paper for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_used_cloth | manufacture | used_cloth | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Spent cotton polishing cloth for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_finished_guitar | manufacture | finished_guitar | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Weigh each complete accepted guitar on calibrated scale excluding transport packaging; reconcile unique first-release serial, full BOM, moisture, sound/playability/electrical/exterior test record and date. Q is sum of those net masses, never a guessed per-item mass. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_m_o2_in | manufacture | m_o2_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Molecular oxygen gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_m_o2_out | manufacture | m_o2_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Molecular oxygen gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_m_n2_in | manufacture | m_n2_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Molecular dinitrogen gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_m_n2_out | manufacture | m_n2_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Molecular dinitrogen gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_m_ar_in | manufacture | m_ar_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Argon gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_m_ar_out | manufacture | m_ar_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Argon gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_m_h2o_in | manufacture | m_h2o_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_m_h2o_out | manufacture | m_h2o_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_co2 | manufacture | em_co2 | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Carbon dioxide from fossil fuel for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_co | manufacture | em_co | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Carbon monoxide from fossil fuel for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_no | manufacture | em_no | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Nitrogen monoxide gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_no2 | manufacture | em_no2 | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Nitrogen dioxide gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_so2 | manufacture | em_so2 | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Sulfur dioxide gas for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_ch4 | manufacture | em_ch4 | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Methane from fossil fuel for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_acetone | manufacture | em_acetone | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Acetone vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_ethylacetate | manufacture | em_ethylacetate | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Ethyl acetate vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_toluene | manufacture | em_toluene | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Toluene vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_em_wood_dust_air | manufacture | em_wood_dust_air | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Airborne wood dust for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_s_electricity | service | s_electricity | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Alternating current for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | MJ | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_s_water | service | s_water | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Process Water for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_s_new_string | service | s_new_string | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole replacement electric-guitar string for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_s_new_pickup | service | s_new_pickup | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole replacement passive guitar pickup for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_s_old_string | service | s_old_string | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Removed electric-guitar string for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_s_old_pickup | service | s_old_pickup | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Removed passive guitar pickup for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_s_h2o_in | service | s_h2o_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_s_h2o_out | service | s_h2o_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_p | packaging | carton_p | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Corrugated guitar shipping carton for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_i | packaging | carton_i | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Corrugated guitar shipping carton for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_er | packaging | carton_er | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Corrugated guitar shipping carton for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_s | packaging | carton_s | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Corrugated guitar shipping carton for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_eo | packaging | carton_eo | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Corrugated guitar shipping carton for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_w | packaging | carton_w | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Waste corrugated guitar shipping carton for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_p | packaging | pebag_p | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Polyethylene guitar protection bag for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_i | packaging | pebag_i | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Polyethylene guitar protection bag for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_er | packaging | pebag_er | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Polyethylene guitar protection bag for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_s | packaging | pebag_s | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Polyethylene guitar protection bag for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_eo | packaging | pebag_eo | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Polyethylene guitar protection bag for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_w | packaging | pebag_w | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Waste polyethylene guitar protection bag for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_p | packaging | foam_p | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Expanded-polyethylene guitar cushion for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_i | packaging | foam_i | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Expanded-polyethylene guitar cushion for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_er | packaging | foam_er | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Expanded-polyethylene guitar cushion for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_s | packaging | foam_s | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Expanded-polyethylene guitar cushion for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_eo | packaging | foam_eo | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Expanded-polyethylene guitar cushion for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_w | packaging | foam_w | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Waste expanded-polyethylene guitar cushion for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_p | packaging | pallet_p | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Whole wooden transport pallet for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_i | packaging | pallet_i | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Whole wooden transport pallet for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_er | packaging | pallet_er | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Whole wooden transport pallet for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_s | packaging | pallet_s | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Whole wooden transport pallet for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_eo | packaging | pallet_eo | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Whole wooden transport pallet for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_w | packaging | pallet_w | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Waste whole wooden transport pallet for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. Preserve this pool event separately: opening/closing empty/WIP/FG/reusable stock; P; I and supplier owner; ER; full gross S; EO; W source-to-container weight and paired receiver. Do not net retained influx. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_mixed_packaging_waste | packaging | mixed_packaging_waste | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Mixed guitar-shipping packaging waste for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_cnc_receipt | assets | cnc_receipt | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Woodworking CNC machining centre for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_cnc_retirement | assets | cnc_retirement | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Woodworking CNC machining centre for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_cnc_service | assets | cnc_service | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Woodworking CNC machining centre use service for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | h | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_rack_receipt | assets | rack_receipt | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Steel guitar conditioning rack for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_rack_retirement | assets | rack_retirement | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Steel guitar conditioning rack for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_rack_service | assets | rack_service | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Steel guitar conditioning rack use service for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | h | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_testamp_receipt | assets | testamp_receipt | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Electric-guitar test amplifier for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_testamp_retirement | assets | testamp_retirement | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Electric-guitar test amplifier for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_testamp_service | assets | testamp_service | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Electric-guitar test amplifier use service for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | h | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_new_cutter | assets | new_cutter | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Steel woodworking replacement cutter for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_old_cutter | assets | old_cutter | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Removed steel woodworking cutter for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_new_oil | assets | new_oil | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Whole supplied machinery lubricating oil for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_spent_oil | assets | spent_oil | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition | Collect undivided actual Spent machinery lubricating oil for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_repair | assets | pallet_repair | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Solid hardwood pallet repair board for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_humidity_in | packaging | carton_humidity_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_humidity_out | packaging | carton_humidity_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_humidity_in | packaging | pebag_humidity_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_humidity_out | packaging | pebag_humidity_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_humidity_in | packaging | foam_humidity_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_humidity_out | packaging | foam_humidity_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_humidity_in | packaging | pallet_humidity_in | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_humidity_out | packaging | pallet_humidity_out | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Water vapour for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_carton_used_burden | packaging | carton_used_burden | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Corrugated guitar shipping carton for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pebag_used_burden | packaging | pebag_used_burden | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Polyethylene guitar protection bag for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_foam_used_burden | packaging | foam_used_burden | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Expanded-polyethylene guitar cushion for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |
| cp_pallet_used_burden | packaging | pallet_used_burden | collected_record | site; stage; time; serial/cohort; supplier lot; configuration; actual event; native raw amount/unit; meter/weigh calibration; gross V; density/state if converted; already_net flag; upstream owner; opening/closing raw WIP unused-nonWIP quantities; complete inherited per-exchange vectors; assignment evidence; Q or original Q_c; observed H; actual disposition ; packaging pool/article and wet-state basis; F_in/F_out actual repair/removal/water/other amounts and directions; X_in/X_out amount and OTHER same-side duplicate flow id/evidence, never stock/opposite-side; whole-wet OR disjoint component bridge selection; source_W generation time/amount and matched receiver id; opening_container; closing_container; other_container_in; mixed_external_out actual time/amount; other_container_out; one actual external transport/treatment provider owner | Collect undivided actual Whole wooden transport pallet for this event/direction. Use traceable weighed lots/BOM and calibrated process submeter or actual service-duty logs; separate stock quantities, full gross V, provider burden vectors and compositional assays. Stage and raw units are mandatory; absent, unknown and below detection are distinguished. | kg | each actual event and batch; meter interval recorded | full manufacturing period or original cohort observed H including failed/idle intervals | actual site and linked suppliers; stage-specific records | per reference flow | raw records; calibration; BOM; supplier scope; test and disposition; detection uncertainty and complete ledger bridge |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Convert each undivided raw amount/rate into that row native extensive unit before assignment. Sum integrated measurements once; integrate genuine rates over measured time. kWh to MJ uses 3.6. Volume/mass requires independent measured density at the same state; never infer it from a secondary property coefficient. | raw_amount; raw_unit; calibration; measured_state; independent_density | U_native; V_native | yamaha-craft |
| calc_burden | all inventory rows | For burden cards only, derive A from full exchange-vector B_open + U_owned - B_close of raw/WIP/unused-unassigned stores and legitimate cohort assignment after exclusive/virtual subdivision and exchange-specific allocation. Already_net skips repeated stock subtraction. Closing released FG and performed original-cohort service are never B_close deductions. Ordinary manufacturing waste/sales/failed work remain assigned unless evidenced real other function and justified single handover. | B_open; U_owned; B_close; already_net; assignment_evidence | A | ilcd-allocation |
| calc_quotient | all inventory rows | q = N / Q_basis once. For manufacture burden N=A and Q_basis=Q; actual service burden uses original Q_c. For gross and internal-event disclosure N is the complete actual V, never a burden vector or allocated/stock-corrected quantity, with current Q or original Q_c as documented. Reference output is 1 kg. If denominator is zero retain real raw burden/V and issue no unit result. Card amount and aggregation only reference this same result, not a second quotient. | A; V; Q; Q_c; actual_event_role | q | ilcd-allocation |
| calc_physical | all inventory rows | Maintain independent full physical balances: manufacture opening raw/WIP + external gross inputs = closing raw/WIP + first-release internal transfer + actual waste/emission/return exits; FG opening + first-release transfer + actual returns and added material/water = closing wet FG + gross shipments + actual return/waste/species exits. Combined gate cancels paired internal transfer once. Packaging/assets are disjoint subgates. Full gross quantities never receive economic burden fractions. X_in/X_out removes overlap with OTHER same-side flow terms only, never real influx retained in full wet closing stock. | complete_gross_legs; opening_stock; closing_stock; paired_internal_transfer; same_side_overlap | independent_physical_balances | ilcd-allocation |
| calc_packaging | all inventory rows | For each article/grade pool use O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O and C are the complete wet opening/closing empty, WIP-attached, FG-attached and reusable stocks. F_in/F_out are independently measured actual repair additions, removed components, water and other real additions/losses crossing this pool boundary, each with its direction and physical state. X_in/X_out remove only documented portions already counted by OTHER real flow terms on the SAME side; never subtract stocks, opposite-side terms or a new influx merely because it remains in full wet C. Choose a whole-wet-article balance OR an equivalent disjoint component bridge, not both additively; embedded supplied water/components are owned once, while genuinely new repair/water retained in C remains a real influx. Six cards represent six real directions/events; I retains supplier-included ingress and exactly one upstream owner; S is full mass with gross physical shipment. Internal reuse cancels, no net-Q entry, repeat procurement or credit. Actual water gain/loss remains separately measured. Source W is actual generation/transfer from this pool into its matched receiving container, not an assumed external Waste outlet; reconcile that container stock and its real external outlet under calc_packaging. For each matched receiver use opening_container + source_W + other_container_in = closing_container + mixed_external_out + other_container_out, with complete wet container contents on the same time/state basis. source_W is the sum of paired actual source contributions; other_container_in/out are only separate non-overlapping actual container ingress/egress. Container accumulation remains closing stock, not a fabricated mixed external outlet; a later real external outlet is recorded when it occurs. At consolidation cancel source W against the matched container receipt once; total container mass and its sources are non-additive. Only the actual measured mixed external Waste outlet has one transport/treatment provider, never an extra provider for source W generation or stock accumulation. If exits differ physically, replace by the actual separate atomic Waste streams before use; never invent exits for symmetry. Ordinary manufacturing/failed/sample waste keeps production and treatment burdens unless real other cohort/function and justified handover establish one vector transfer. | opening_pool; P; I; ER; F_in; X_in; closing_pool; S; EO; W; F_out; X_out; paired_receiver; opening_container; source_W; other_container_in; closing_container; mixed_external_out; other_container_out | packaging_pool_balance | yamaha-qc; ilcd-allocation |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Require complete positive instrument scope, exact native whole/part, passive/electric, CAS, material, form, route, geography, medium/type, property/unit and actual provider compatibility. Ordinary unresolved auxiliary identity or future measurements are disclosed and not evidence of a core hold; unconfirmed core whole-product identity prevents usable methodology. | full native record and actual supplier BOM/route |
| dq_sources | all sources | Use original full scope and adjacent alternatives; no single example numerical recipe. Primary industrial process descriptions do not authorize LCA allocation. | original plus source-specific applicability and exclusions |
| dq_complete | all ledgers | Check source-specific applicability and exclusions, upstream ownership, physical/burden bridges, actual postwork permissions/tests/disposition and all missing atoms. Declare actual site, periods, sample coverage, uncertainty and incompleteness; structural/schema checks establish no scientific or translation approval. | raw calibrated records, sample coverage, uncertainty and failed work |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | reference and every selected exchange | Require complete positive instrument scope, exact native whole/part, passive/electric, CAS, material, form, route, geography, medium/type, property/unit and actual provider compatibility. Ordinary unresolved auxiliary identity or future measurements are disclosed and not evidence of a core hold; unconfirmed core whole-product identity prevents usable methodology. | ilcd-allocation; yamaha-craft; yamaha-qc |
| validation_release | Q and stock | Check each serial once at first complete release and calibrated net mass. Require raw/WIP/non-WIP inherited vectors, retained closing released FG, all failed/Q0/startstop/idle/cleanup/test work and no double stock correction. No delivery/retest creates output. | ilcd-allocation; yamaha-craft; yamaha-qc |
| validation_atoms | all rows and raw records | Each card has one identity/event and ten fields with actual conditional applicability; unknown is not zero. Whole purchases versus composition bridges, species/phase and all packaging six legs must reconcile. Gross V must never be stock-corrected or economically scaled; single quotient only. | ilcd-allocation; yamaha-craft; yamaha-qc |
| validation_balance | independent physical gates | Close full physical mass and relevant element balances independently of true species/reaction-water evidence. Record actual free, retained, evaporated and reaction water separately; do not infer two unknowns from one residual. Actual liquid/gas densities and states are independent observations; COD/VOC/PM cannot identify species. | ilcd-allocation; yamaha-craft; yamaha-qc |
| validation_coverage | scientific and data quality | Check source-specific applicability and exclusions, upstream ownership, physical/burden bridges, actual postwork permissions/tests/disposition and all missing atoms. Declare actual site, periods, sample coverage, uncertainty and incompleteness; structural/schema checks establish no scientific or translation approval. | ilcd-allocation; yamaha-craft; yamaha-qc |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual compatible complete-guitar supply at disclosed gate, after foreground collection and applicability review |
| allowed_use | Declared passive solid-body bolt-on configured guitar production |
| excluded_use | Other electrical instruments, parts-only or acoustic/active routes; scientific/translation/mapping approval inferred from engineering checks |
| required_metadata | solid body and bolt-on wooden neck; actual model configuration and serial cohort; complete BOM and supplier/site split including embedded constituents; passive electromagnetic circuitry without battery and actual wiring diagram; wood species grade supply form and moisture; whole coating adhesive cleaner supply formulations and actual independent additions; actual tests criteria and first-release gate; calibrated complete net mass excluding packaging; raw WIP and unused nonWIP inherited vectors and already net flags; released FG physical ledger and original cohort service horizon H; postwork permission tests acceptance hold and waste disposition; six event packaging pools and gross physical V versus burdens; native property medium route geography type and provider compatibility; actual attributional allocation need and common gate evidence |
| required_quality_disclosure | Actual source/provider scope, raw coverage, uncertainty, unresolved atoms, stock/burden/gross bridges and Q/H horizons |
| update_trigger | Changed circuit/wood/supply route, gate, formulation, native identity, provider, quality criterion or material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| yamaha-wood | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/manufacturing/ | Controlled wood-plank storage, maple/alder body and neck stock states; no species shares or universal moisture |
| yamaha-shaping | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/manufacturing/manufacturing002.html | Machine/hand neck and body routing plus bolt-on versus set-neck and neck-through counterexamples; no machining duration |
| yamaha-finish | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/manufacturing/manufacturing003.html | Grain filling and under/intermediate/colour/top coating with spray/dry/abrasive sequence; no resin recipe or thickness |
| yamaha-assembly | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/manufacturing/manufacturing004.html | Assembly/stringing/adjustment and routing tunnel for wiring; depicted active circuit does not establish passive topology |
| yamaha-mechanism | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/mechanism/ | Positive wooden steel-string pickup-based complete electric-guitar function requiring external amplification; external amp is separate |
| yamaha-pickup | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/mechanism/mechanism002.html | Coil/magnet transduction without power and single/humbucker alternatives; supplied pickup constituents remain upstream once |
| yamaha-craft | handbook | https://usa.yamaha.com/products/contents/guitars_basses/difference/craftsmanship.html | Woodworking/fretting, separately finished bolt-on joint, complete assembly and final sound/playability/exterior inspection; exclude acoustic joints, A.R.E., optional I.R.A. and numerical examples |
| yamaha-qc | handbook | https://usa.yamaha.com/products/contents/guitars_basses/difference/qc.html | Continuous production checks, stop shipment on defects, actual final handling and packaging; severe type-test extremes and lifetime claims are not universal release thresholds |
| yamaha-pacifica | handbook | https://shop.usa.yamaha.com/en/p/instruments/guitars-basses-amps/electric-guitars/pac112vm-pacifica-electric-guitar | Positive manufactured alder/maple bolt-on electric-guitar supply state only; no one-SKU route or numerical parameters |
| duncan-passive-twoh | handbook | https://www.seymourduncan.com/images/wiring-diagrams/2H_3G_1V_1T.pdf | Independent publisher passive pickup/pot/capacitor/selector/mono-jack wiring topology; no adopted circuit values |
| ilcd-allocation | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | ILCD 2010 first edition sections 7.9.2–7.9.3, printed255–272: attributional subdivision, determining physical causality, actual-gate residual market value and service allocation; no generic product figures |
