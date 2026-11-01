---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.pianos-and-other-keyboard-stringed-musical-instruments
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Wooden-rim acoustic grand piano manufacturing

This is a qualitative technical synthesis of one actual wooden-rim acoustic-grand manufacturing route, not a measured single factory/order, numerical recipe or approval. Subsequent raw quantities require real collection; unknown amounts are not zero.

## 1. Scope and Applicability

Only newly manufactured complete pure acoustic grand pianos with a wooden curved rim, horizontal strings and hammer/soundboard mechanism. The UN category is broader than this method. Complete stock-to-instrument production is supported positively by manufacturer originals rather than a classification-leaf collection. Supplier-completed and on-site work have explicit ownership; different factories or upright routes are not a composite measured BOM. Manufacturing, FG service, packaging and asset gates remain subject to every condition in sections5,7,9.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.pianos-and-other-keyboard-stringed-musical-instruments |
| classification_refs | CPC 3.0 38310; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38310.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | New complete wooden-rim pure acoustic grand pianos with horizontal strings at first complete quality release; actual configuration/BOM and supplier-completed component scope declared |
| excluded_products | Upright or square pianos; harpsichords/clavichords; electric/digital/MIDI/hybrid/player-electronic systems; toys; loose action/keyboard/plate/case; restoration and bought-finished-piano repacking; furniture; retail/use/end-of-life |
| representative_product | One actually specified complete acoustic grand piano with a laminated wooden rim; no universal size, key count, string count, species, weight, pitch, tension, life or performance threshold |
| production_route | Receive actual dry rim veneer and bracing stock plus upstream-completed soundboard/plate/pinblock/strings/keyboard/action/case/support assemblies; on-site wood machining and rim bonding/forming; conditioning and finishing; fit plate and soundboard; stringing; install keyboard/action/dampers/lid/legs/pedals; repeated regulation/run-in/tuning/voicing; full first inspection. Supply-state variants need disjoint BOM expansion before use |
| market_state | Complete newly manufactured instrument first quality released in its fully assembled tested configuration. Later paired leg removal/packing preserves the original accepted serial and full kit; no second Q |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Acoustic musical keyboard-string function of the declared complete grand instrument |
| How much | 1 kg net mass declaration of complete first-released instruments; never an arbitrary 1 kg part |
| How well | Actual manufacturer/model functional, tuning, voicing, pedal and surface acceptance evidence; no invented performance threshold |
| How long or cycle | One manufacturing cohort to first complete quality release; original-cohort services disclosed over explicit H; no assumed lifetime |
| reference_flow_link | finished_piano |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pianos and other keyboard stringed musical instruments `adc2e477-993f-4780-bf1c-e5aeec86ae96` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pure acoustic grand design and horizontal string orientation; model and serial cohort; complete delivered BOM including case lid desk keyboard action dampers plate soundboard bridges strings pins pedals linkages legs and casters; actual supply form and supplier completed work per component; wood species grade and moisture state; whole adhesive and coating supply formulations with independent additions; first release acceptance and hold criteria with original evidence; calibrated net whole-instrument mass and complete configuration; manufacturing period and raw WIP opening closing quantity plus inherited vectors; FG first-release and later gross stock ledgers; original-cohort service horizon and already-performed work; actual postwork permission tests acceptance and disposition; packing layer identity and six directional events; matched postrelease disassembly custody and complete transport kit; native flow and provider restrictions per exchange; attributional allocation need evidence and common process gate |

Declare every qualifier in actual dataset metadata or equivalent notes. The broad native manufactured whole-instrument family is usable only with all positive complete acoustic-grand conditions. Exact SKU equality is not required; hard whole/part, acoustic/electric, form/route/type conflicts cannot be waived.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure complete-configuration net mass m_net_i by calibrated cp_release for each serial, recording moisture and excluding transport packaging. Q sums newly first-released instruments only; count identifies units but never supplies guessed kg or density from secondary coefficients. |
| row_units | all inventory rows | Native extensive property of each row | per row | Preserve Mass, energy, Volume and duty-time units independently. Convert meter kWh with exact native group factor 3.6 MJ/kWh. Integrated volume is not multiplied by time; true rates alone are integrated. Volume-to-kg requires independent measured density/state of that substance, never generic water density. |
| single_basis | all inventory rows | Declared reference flow | kg | All cards and aggregation reference the single section8 quotient; raw protocols collect undivided quantities. Manufacture uses Q and original services Q_c. Gross-card numerator is full V, never a burden vector. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual dry purchased rim veneers and solid bracing stock plus separately identified supplier-completed components; not purchased complete piano. Trace supplier gate, drying, finish and installed components |
| starting_condition_role | Foreground manufacturing gate with recursive upstream supplier coverage; technical synthesis rather than one observed plant/order |
| product_classification_scope | Only the specified acoustic grand subset of CPC3.0:38310; external class does not define canonical identity |
| recursive_input_rule | A bought finished piano cannot be treated as a new manufactured piano by packaging. Reuse of a real component requires actual prior burden and disjoint scope; internal same-product handoffs cancel |
| upstream_dataset_requirement | Exactly one upstream owner for each whole supplied preparation/component/article. Verify supplier material/form/route/geography/state and exclude embedded constituents from repeated procurement |
| disclosure | Declare actual site/time/configuration; manufacturing raw/WIP and non-WIP unassigned stores separately from FG; physical gross quantities independently from burden stocks and economic values; actual zero-output and all failed work |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | whole manufacturing | Preserve the complete actual sequence and component procurement states in section2. Finished supplier assemblies carry their preparation once upstream. If soundboard, keyboard, action, plate, bridge or strings are made on site, expand every actual purchased atom, energy input, loss and internal handoff before use; do not claim a supplier assembly and its on-site raw manufacture together. | yamaha-body; yamaha-action; yamaha-stringing; yamaha-resting; yamaha-release |
| boundary_first_release | manufacture and FG | Q is the sum of measured net masses m_net_i of unique newly first-released complete instruments in the cohort. Complete inspection follows actual regulation, tuning, voicing, pedal/leg fitting and surface inspection. Instruments already released and still in closing FG are included in Q; they are neither an additional production output nor a reason to subtract manufacturing burden. Deliveries and reinspection create no Q. | yamaha-release |
| boundary_stocks | manufacture burden vectors | Carry actual opening/closing raw material, WIP and unused/unassigned non-WIP charge quantities with every inherited exchange vector and origin. Manufacturing vector availability is opening inherited vectors plus current owned input vectors minus closing inherited vectors in those stores, then actual legitimate assignment once. Closing released FG is outside that subtraction. Already stock-corrected consumption must not receive a second stock correction. Start/stop, idle, failed batches, samples, cleanup and real rework retain burden even when Q is zero. | ilcd-allocation; yamaha-resting; yamaha-release |
| boundary_physical | manufacture FG and combined gates | Maintain three independent full gross physical balances. Manufacture: opening raw/WIP plus all external material/water/species inputs equals closing raw/WIP plus first-release complete-instrument transfer plus all actual waste/emission/return legs. FG/service: opening FG plus first-release transfer plus actual external returns and incremental material/moisture inputs equals closing complete wet FG plus gross shipments, true external returns, removed parts, waste and species outputs. Consolidation cancels the matched first-release/internal transfers once; never sum a whole piano plus its embedded BOM as separate outputs. Assets and packaging have disjoint subgates. X_in/X_out removes only overlap with other same-side flow terms, never the opposite direction or closing stock. Real added material/water influx and full wet closing article mass both remain. | yamaha-release; ilcd-allocation |
| boundary_service | postrelease original cohorts | Keep actual packing, handling, storage conditioning and all postrelease work over H assigned to original cohort Q_c. Retain original accepted configuration/mass and custody of removed legs/supports with the complete shipment kit. They are still the original accepted instrument; leg removal or packing produces no new Q. Keep opening-FG history and original service vectors; performed service stays assigned when FG is held, only unused/unassigned future service/charge may carry. | yamaha-release; ilcd-allocation |
| boundary_postwork | actual postrelease work and humidity | Actual postwork requires evidence of manufacturer/specification permission, subsequent functional/quality tests and acceptance or hold/waste disposition to establish continued conformity. Nonetheless every real attempted, unpermitted, failed or rejected operation and its gross materials/water/parts/energy/waste remains recorded for the original cohort. Do not assume a damaged soundboard, cast plate or instrument is restored. Passive ambient moisture gain/loss during ordinary storage/handling is separately recorded without inventing repair permission or operations. | yamaha-release; yamaha-resting; ilcd-allocation |
| boundary_preparations | all purchased inputs | Purchase a whole supplied adhesive, coating, thinner, lubricant, impregnated paper, wound string, component or wet packing article once. Assay constituents, carrier water and embedded hardware are disjoint subledgers. Actual on-site additions each have their own exchange and actual energy/loss; do not make both whole input and composition into additive purchases. | yamaha-body; yamaha-action; yamaha-stringing |
| boundary_packaging | each actual packaging pool | For each actual separate article/grade pool use full wet physical O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O/C include empty, WIP/FG-attached and reusable stocks. P is separate external purchase; I is first non-purchased external ingress with one upstream owner; ER is actual external return received; S accompanies gross physical shipment; EO is actual external return sent; W is actual waste disposition. F_in/F_out are independently measured real additional repair material, water/moisture ingress, removed material, drainage or evaporation not already owned in those article events; add each actual atom before use. X may remove only the proven identical mass duplicated in an OTHER actual term on the SAME side, with matched article/lot/event/species/unit/period and one owner. Card presence, retained closing wet stock, the opposite side and economic or burden-stock correction never justify X. Internal reuse cancels. Use either whole wet articles or an explicitly exhaustive mutually exclusive component bridge, never both additively. | yamaha-release; ilcd-allocation |
| boundary_mixed_waste | packaging W source pools | When one real mixed packaging waste exit exists, each origin W is independently measured non-additive internal source-to-collection detail with paired receipt, no external provider or finished-Product binding. Reconcile collection opening stock plus actual origin W and disjoint added matter with closing full wet stock, the sole measured external exit and actual disjoint losses. Do not assume origin sum equals the period exit when stocks or moisture change. Cancel internal handoffs on consolidation and attach treatment once to the measured external mixed Waste total. Never infer several unknown origin masses from one total. Actual separate exits require actual separate atomic Waste rows and matching providers instead. | yamaha-release; ilcd-allocation |
| boundary_energy_assets | actual utilities and equipment | Preserve each actual carrier/fuel, energy reference property and extensive unit. No default fuel, boiler, steam, refrigerant or air composition. Actual external heat carrier/condensate returns require phase/state/mass/enthalpy and one supplier water/energy contract. Whole asset acquisition/installed/retirement gross masses and new/old repair parts/fluids remain distinct from period used service burden; no fixed lifetime or full machine per kg. Add every actual omitted input/output as a specific atomic card before dataset use. | ilcd-allocation; yamaha-body; yamaha-resting |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-allocation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Stock/components to first complete release | required | actual complete route declared | manufacturing | finished_piano |
| handling | Original-cohort handling storage and actual work | conditional | actual observed H | service | original Q_c |
| packaging | Six packaging events and one mixed exit | conditional | actual article and event | physical disclosure | original Q_c |

Manufacture is a consolidated process retaining stage raw records and paired internal cancellation without fictitious intermediate procurement. Each card is one physical article/service and direction; conditional presence is not an assumed present or absent observation. Card quantity semantics distinguish burden dimensions, complete gross legs and internal source handoffs; a common all-rows stock/allocation formula must not override gross cards.

### Process: Manufacturing (`manufacture`)

#### Inputs

##### Product flows

###### Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood (`rim_veneer`)

Only actual unbonded non-tropical non-coniferous veneer sheets no thicker than 6 mm; one species/grade/supply lot per exchange instance. Native Product is manufactured sheets at plant; it includes attractive face veneers and plywood-core veneers. It does not establish drying moisture, rim suitability or supplier burden. Confirm measured incoming moisture and thickness; no bonded board or tropical species under this binding. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood `7a8c3cba-0c6b-422a-ac79-b7032d874bcb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Dry sawn hardwood bracing stock (`rim_beam`)

Actual dry sawn solid hardwood beam stock before on-site notching/planing. Preserve species and drying state; processed engineered timber is a different input. The seat-frame-specific and construction-stock candidates do not establish this supply state. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Dry sawn hardwood bracing stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Completed ribbed and bridged grand-piano soundboard (`soundboard`)

One supplier-completed soundboard assembly with actual long/short bridge and ribs in its declared BOM. Upstream owns board joining, shaping, rib/bridge manufacture and assembly once; wood, glue and embedded water are composition subledgers, not additional site purchases. This route installs and conditions the board; a site fabricating it must add its actual wood/glue/energy/loss atoms and remove overlapping purchased assembly scope. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`; `steinway-guide`

###### Finished cast-iron piano plate (`plate`)

One supplier-cast, machined and surface-finished piano frame; record installed hitch pins and fittings in the received BOM. No pig iron, steel sheet, or assumed site foundry. Casting and alloy metallurgy stay upstream unless actually present and separately expanded. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`; `steinway-guide`

###### Finished laminated piano pinblock (`pinblock`)

One finished laminated pinblock of the actual drilled/machined supply state; supplier adhesive, veneers and water are embedded once. Record actual material and fit-up work; not lumber-core plywood by name alone. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-stringing`; `steinway-guide`

###### Steel Wire (`treble_wire`)

Actual bare cylindrical steel wire for on-site stringing, from the native steel-production Product at factory. Native synonyms include fine/miniature/ultrafine steel wire and comment explicitly includes musical use; it is neither wound copper/steel composite bass string nor wire rope. Confirm actual alloy, gauge, surface treatment and supply route without inventing string count, tension or pitch. Native taxonomy identifies iron or non-alloy steel wire; do not silently bind verified alloy or stainless wire under this identity. This row remains one bare wire with its actual surface state. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-stringing`

###### Completed wound piano bass string (`bass_string`)

One whole supplier-wound bass string; actual core/wrap and winding burden occur once upstream, no duplicate purchased copper and steel constituent rows. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-stringing`; `steinway-guide`

###### Finished steel piano tuning pin (`tuning_pin`)

A single physical tuning pin type; actual alloy/form/finish and added quantity, not a whole piano or generic metal bundle. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-parts`; `steinway-guide`

###### Finished piano agraffe (`agraffe`)

A separately purchased string-guide agraffe of measured material; exclude any already installed in the plate supply BOM. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-parts`

###### Completed acoustic grand-piano keyboard assembly (`keyboard`)

One complete supplied keyframe/keyboard assembly of the acoustic grand design. Key wood, key covers, felt bushings, pins and supplied punchings are embedded; no second site procurement of its composition. Site key fabrication is outside this selected route until fully expanded. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-action`

###### Completed acoustic grand-piano action with felt hammers (`action`)

One actual complete acoustic grand action including supplier-installed wood/metal/felt/leather/textile parts and hammers. This is not an upright spring-return action, electronic sensor keyboard, loose hammer, or toy; upstream precision manufacture and felt making are owned once. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-action`

###### Completed grand-piano damper assembly (`damper`)

One supplied damper assembly with its installed felt and mechanism; add site replacements only when separately purchased. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-resting`

###### Finished grand-piano lid (`lid`)

Actual supplied lid with its declared finish and embedded hardware; separate only hinges or prop actually not included. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-resting`

###### Finished grand-piano music desk (`music_desk`)

One actual music desk supplied for this complete instrument; include its upstream fabrication once. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-release`

###### Finished grand-piano fallboard (`fallboard`)

One actual keyboard cover/fallboard; declared supplier finishing and fittings prevent repeated material purchases. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-parts`

###### Finished grand-piano key bed (`keybed`)

One supplied structural key bed, disjoint from the keyboard assembly and body BOM; upstream panel manufacture occurs once. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-parts`

###### Finished grand-piano leg with caster (`leg_caster`)

One whole leg with its actual caster in the supplied BOM; measure actual count and mass without fixing number. A loose caster is a distinct input only when not already embedded. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-release`

###### Completed grand-piano pedal lyre and linkage assembly (`pedal_lyre`)

One actual complete pedal/lyre linkage assembly with the grand-piano functions and supplied fittings; installed then functionally checked. Do not infer upright or electronic pedal equivalence. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-release`

###### Finished piano lid hinge (`hinge`)

One hinge type with actual metal/finish; excluded if already embedded in the supplied lid. A steel-hinge candidate cannot establish a brass or unspecified-metal hinge. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Finished piano lid hinge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-resting`

###### Finished grand-piano lid prop (`lid_prop`)

One actual lid prop with attachment fittings if not supplied inside the lid BOM. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase. Native Product is the complete manufactured musical-instrument parts/accessories family, production mix at plant, Mass/kg; this instance is only the specific finished acoustic-grand component described above, with its actual material, supplied finish and embedded BOM. It is not a complete piano, digital/upright mechanism, raw stock or an aggregate of unlike parts. The isolated native comment “384 Sports goods” is the adjacent heading in the UN source, not a technical specification; the complete bilingual basename and classification identify musical parts. Family identity does not establish supplier suitability or missing component quantities.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-parts`

###### Steel piano assembly screw (`fastener`)

One actual screw grade and size per instance; split physically different bolts, washers or metals into additional rows before collection. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Steel piano assembly screw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-parts`

###### Rim laminating adhesive preparation (`glue`)

One complete purchased adhesive formulation for this wood joint. Record chemistry, supply water/solvent and safety sheet; plastic-film solventless laminating glue is not evidence of wood-joint suitability. Supplier constituents are assay subledgers. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Rim laminating adhesive preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Resin-impregnated piano rim finishing paper (`resin_paper`)

One whole supplier-impregnated paper used as the receiving surface for the finish; paper/resin/water components are embedded once. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Resin-impregnated piano rim finishing paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Rim adhesive curing-agent preparation (`glue_hardener`)

Conditional actual separate supplied curing-agent preparation; not an assumed addition to a one-part adhesive and not the same formulation counted twice. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Rim adhesive curing-agent preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Piano coating curing-agent preparation (`coating_catalyst`)

Conditional actual separately added coating curing agent; document whole supplied preparation and actual cure chemistry. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Piano coating curing-agent preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Piano coating thinner preparation (`thinner`)

Conditional one actual separate purchased thinner formulation; never infer solvent identity or emissions from total VOC. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Piano coating thinner preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Piano finishing cleaner preparation (`cleaner`)

Conditional one actual cleaning preparation; distinguish external purchase from recovered internal solvent and retain cleaning waste. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Piano finishing cleaner preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Coated abrasive paper for piano finishing (`abrasive`)

One supplied abrasive-paper article for polishing/hammer filing; each different article separately, backing/binder/grit embedded once. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Coated abrasive paper for piano finishing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-release`

###### Paper piano-key punching (`punching`)

One actual separately added paper punching type; do not repurchase those already supplied in the keyboard. No fixed thickness or count. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Paper piano-key punching
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-stringing`

###### Piano action lubricating preparation (`action_lubricant`)

Conditional actual whole action lubricant of the selected formulation; retain the actual carrier and disposal, not hydraulic oil by analogy. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Piano action lubricating preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-action`

###### Undercoat (`undercoat`)

One actual complete undercoat preparation before topcoat, as the generic native Product defines. Native comments describe primer/undercoat sequencing, not a fixed binder, solids content, drying energy, colour or extra compulsory primer. Confirm site formulation and capture the whole can contents once. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Undercoat `c519293d-bf76-42e2-84cd-c287946318ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Wood top-coat (`topcoat`)

One actual complete wood topcoat preparation. Native Product is at-plant production mix; comment includes water- and oil-based wood finishes and a water-based polyurethane commercial example. That example does not mandate polyurethane, recipe, durability or moisture fraction. Validate actual formulation and finish before binding. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Wood top-coat `097bc238-dda4-4296-b6ca-b7c573f7f39d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Alternating current (`electricity`)

Use this Product binding only for actual CN grid-average consumer-side supply below 1 kV, with generation/transmission supply represented once by the matched provider. Native reference property is Net calorific value with MJ reference unit; retain meter kWh raw and convert by the verified unit-group factor, not Mass/kg. Other geography/voltage/generation requires another verified flow/provider. Include all pressing, machining, drying/conditioning, spraying, extraction, key exercise, tests, idle and cleanup electricity. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `yamaha-body`

###### Metered piano process tap water (`process_water`)

Actual additional supplied water for mixing, cleaning or humidity control, collected in its meter unit. Neither HK-treated water nor a viscose CTUe-reference row establishes this identity. Obtain actual supplier/state/density before any mass conversion; water already inside purchased preparations/articles is not bought again. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Metered piano process tap water
- Flow property / unit: Volume / m3
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### Purchased process heat (`purchased_heat`)

Conditional actual delivered heat measured by supply/return enthalpy and meter; declare heat source and supplier boundary. Natural-gas heat cannot represent unspecified source. Add each actual fuel and its combustion circuit before use if heating is on site. No default steam, boiler or duplicated supplier generation emissions. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Purchased process heat
- Flow property / unit: Delivered thermal energy / MJ
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `yamaha-body`

###### Liquid heat-transfer water received (`thermal_carrier_in`)

Conditional real external liquid-water carrier leg only; measure full mass, phase, temperature, pressure and enthalpy. It shares one supplier water/energy ownership agreement with delivered heat; energy and carrier kg are different dimensions, not two full provider purchases. Internal circulation cancels. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Liquid heat-transfer water received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`

###### Hydraulic Fluid (`hydraulic_oil`)

Actual whole hydraulic transmission fluid, native Product with mineral or synthetic base oil plus performance additives, not a neat additive or action lubricant. Native reference is Volume/m3; measure actual volume and independent same-fluid density/state for physical kg balance; no water density. Oil retained in an installed closing charge remains both real input and full closing mass. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `yamaha-body`

###### New hydraulic-press elastomer seal (`press_seal_new`)

Conditional actual maintenance event; identify exact whole part/fluid and contained water/oil, origin, installed opening/closing charge and removed state separately. X only removes overlap with another same-side incoming/outgoing term, never with closing stock or the opposite direction. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: New hydraulic-press elastomer seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `ilcd-allocation`; `yamaha-body`

###### Rim-forming press (`rim_press_receipt`)

Conditional actual whole physical asset receipt; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Rim-forming press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Rim-forming press production service (`rim_press_service`)

Actual used production service burden from this named asset, measured operating duty/occupation and justified service life or charge records; unused/unassigned future service may carry, already performed service cannot be removed because FG remains. No fixed lifetime or automatic equal share. This card is actual used service of the named asset, with one burden owner; whole-asset gross mass is not service consumption.

- Selected flow: Rim-forming press production service
- Flow property / unit: Operating time / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset_service`
- Sources: `ilcd-allocation`

###### Piano rim forming mould (`rim_mould_receipt`)

Conditional actual whole physical asset receipt; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano rim forming mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano rim forming mould production service (`rim_mould_service`)

Actual used production service burden from this named asset, measured operating duty/occupation and justified service life or charge records; unused/unassigned future service may carry, already performed service cannot be removed because FG remains. No fixed lifetime or automatic equal share. This card is actual used service of the named asset, with one burden owner; whole-asset gross mass is not service consumption.

- Selected flow: Piano rim forming mould production service
- Flow property / unit: Operating time / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset_service`
- Sources: `ilcd-allocation`

###### Piano key-exercising machine (`key_exerciser_receipt`)

Conditional actual whole physical asset receipt; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano key-exercising machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano key-exercising machine production service (`key_exerciser_service`)

Actual used production service burden from this named asset, measured operating duty/occupation and justified service life or charge records; unused/unassigned future service may carry, already performed service cannot be removed because FG remains. No fixed lifetime or automatic equal share. This card is actual used service of the named asset, with one burden owner; whole-asset gross mass is not service consumption.

- Selected flow: Piano key-exercising machine production service
- Flow property / unit: Operating time / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset_service`
- Sources: `ilcd-allocation`

###### Piano conditioning rack (`conditioning_rack_receipt`)

Conditional actual whole physical asset receipt; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano conditioning rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano conditioning rack production service (`conditioning_rack_service`)

Actual used production service burden from this named asset, measured operating duty/occupation and justified service life or charge records; unused/unassigned future service may carry, already performed service cannot be removed because FG remains. No fixed lifetime or automatic equal share. This card is actual used service of the named asset, with one burden owner; whole-asset gross mass is not service consumption.

- Selected flow: Piano conditioning rack production service
- Flow property / unit: Operating time / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset_service`
- Sources: `ilcd-allocation`

###### Piano woodworking machining centre (`woodworking_centre_receipt`)

Conditional actual whole physical asset receipt; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano woodworking machining centre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano woodworking machining centre production service (`woodworking_centre_service`)

Actual used production service burden from this named asset, measured operating duty/occupation and justified service life or charge records; unused/unassigned future service may carry, already performed service cannot be removed because FG remains. No fixed lifetime or automatic equal share. This card is actual used service of the named asset, with one burden owner; whole-asset gross mass is not service consumption.

- Selected flow: Piano woodworking machining centre production service
- Flow property / unit: Operating time / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset_service`
- Sources: `ilcd-allocation`

###### Piano spray-finishing booth (`spray_booth_receipt`)

Conditional actual whole physical asset receipt; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano spray-finishing booth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano spray-finishing booth production service (`spray_booth_service`)

Actual used production service burden from this named asset, measured operating duty/occupation and justified service life or charge records; unused/unassigned future service may carry, already performed service cannot be removed because FG remains. No fixed lifetime or automatic equal share. This card is actual used service of the named asset, with one burden owner; whole-asset gross mass is not service consumption.

- Selected flow: Piano spray-finishing booth production service
- Flow property / unit: Operating time / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset_service`
- Sources: `ilcd-allocation`

###### Piano conditioning climate-control unit (`climate_unit_receipt`)

Conditional actual whole physical asset receipt; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano conditioning climate-control unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano conditioning climate-control unit production service (`climate_unit_service`)

Actual used production service burden from this named asset, measured operating duty/occupation and justified service life or charge records; unused/unassigned future service may carry, already performed service cannot be removed because FG remains. No fixed lifetime or automatic equal share. This card is actual used service of the named asset, with one burden owner; whole-asset gross mass is not service consumption.

- Selected flow: Piano conditioning climate-control unit production service
- Flow property / unit: Operating time / h
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset_service`
- Sources: `ilcd-allocation`

###### Inbound road freight service (`inbound_road_freight`)

Conditional actual external inbound road-freight service to the declared material gate. Preserve gross shipment mass, route, distance, payload and empty return coverage, mode and one provider boundary. Exclude supplier delivery already included once; other actual modes get separate specific service rows. This is service burden, not a second purchase of the carried materials or a whole vehicle per delivery. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Inbound road freight service
- Flow property / unit: Mass times distance / tkm
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `ilcd-allocation`

##### Elementary flows

###### Atmospheric water vapour uptake (`manufacture_ambient_water_in`)

Actual H2O in the vapour phase, including passive moisture gain/loss in wood, finishes, finished instruments and packaging during conditioning, storage or handling. Measure species-specific humidity/water balance independently; an air-resource Volume row is not an emission identity. Keep actual influx even when retained in full wet closing stock. Natural humidity exchange requires no invented repair operation or permission. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `yamaha-release`

###### Oxygen (`manufacture_oxygen_inputs`)

Conditional real gaseous oxygen CAS 7782-44-7 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, renewable element resources from air. This is the actual ambient resource intake, not purchased compressed/liquid gas, ionic/isotope-labelled material or a water/soil exchange. Liquid/isotope/total-element synonym noise does not override canonical molecule, CAS and compartment. Preserve full measured carrier throughput and distinguish it from net consumption; no assumed air composition or extra provider.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Dinitrogen (`manufacture_nitrogen_inputs`)

Conditional real gaseous dinitrogen CAS 7727-37-9 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, renewable element resources from air. This is the actual ambient resource intake, not purchased compressed/liquid gas, ionic/isotope-labelled material or a water/soil exchange. Liquid/isotope/total-element synonym noise does not override canonical molecule, CAS and compartment. Preserve full measured carrier throughput and distinguish it from net consumption; no assumed air composition or extra provider.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Argon (`manufacture_argon_inputs`)

Conditional real gaseous argon CAS 7440-37-1 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, renewable element resources from air. This is the actual ambient resource intake, not purchased compressed/liquid gas, ionic/isotope-labelled material or a water/soil exchange. Liquid/isotope/total-element synonym noise does not override canonical molecule, CAS and compartment. Preserve full measured carrier throughput and distinguish it from net consumption; no assumed air composition or extra provider.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Ambient carbon dioxide (`manufacture_ambient_co2_inputs`)

Conditional real gaseous ambient carbon dioxide CAS 124-38-9 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Ambient carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

#### Outputs

##### Product flows

###### Liquid heat-transfer water returned (`thermal_carrier_return`)

Conditional real external liquid-water carrier leg only; measure full mass, phase, temperature, pressure and enthalpy. It shares one supplier water/energy ownership agreement with delivered heat; energy and carrier kg are different dimensions, not two full provider purchases. Internal circulation cancels. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Liquid heat-transfer water returned
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`

###### Pianos and other keyboard stringed musical instruments (`finished_piano`)

Sole reference output: actual new complete wooden-rim acoustic grand piano at first complete quality release. Native Product is the manufactured finished piano/keyboard-stringed-instrument family, production mix at plant; no CAS, grade, geography, electric design or fixed count is specified. This row narrows it to horizontal strings, acoustic hammer action and soundboard, plate, bridges, pins, keyboard, dampers, pedals/linkages, complete lid/case and actual legs/casters/BOM. Excludes upright, electric/MIDI/digital/hybrid instruments, toys, parts, repacking a purchased finished instrument and unfinished body. Count only the unique initial accepted serial once; shipment or reinspection never creates another output. This card is 1 kg per reference flow; closing FG already in Q is not another manufacturing output.

- Selected flow: Pianos and other keyboard stringed musical instruments `adc2e477-993f-4780-bf1c-e5aeec86ae96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `yamaha-parts`; `yamaha-release`; `yamaha-grand-upright`; `yamaha-acoustic-digital`; `un-cpc3`

###### Rim-forming press (`rim_press_retirement`)

Conditional actual whole physical asset retirement; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. This Product retirement card applies only to a usable article transferred as Product. An actually discarded asset is retained at full wet gross mass in a distinct compatible Waste row with one treatment owner, not relabelled reusable or removed from the inventory. Removed components and installed fluid are one disjoint whole/component ledger.

- Selected flow: Rim-forming press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano rim forming mould (`rim_mould_retirement`)

Conditional actual whole physical asset retirement; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. This Product retirement card applies only to a usable article transferred as Product. An actually discarded asset is retained at full wet gross mass in a distinct compatible Waste row with one treatment owner, not relabelled reusable or removed from the inventory. Removed components and installed fluid are one disjoint whole/component ledger.

- Selected flow: Piano rim forming mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano key-exercising machine (`key_exerciser_retirement`)

Conditional actual whole physical asset retirement; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. This Product retirement card applies only to a usable article transferred as Product. An actually discarded asset is retained at full wet gross mass in a distinct compatible Waste row with one treatment owner, not relabelled reusable or removed from the inventory. Removed components and installed fluid are one disjoint whole/component ledger.

- Selected flow: Piano key-exercising machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano conditioning rack (`conditioning_rack_retirement`)

Conditional actual whole physical asset retirement; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. This Product retirement card applies only to a usable article transferred as Product. An actually discarded asset is retained at full wet gross mass in a distinct compatible Waste row with one treatment owner, not relabelled reusable or removed from the inventory. Removed components and installed fluid are one disjoint whole/component ledger.

- Selected flow: Piano conditioning rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano woodworking machining centre (`woodworking_centre_retirement`)

Conditional actual whole physical asset retirement; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. This Product retirement card applies only to a usable article transferred as Product. An actually discarded asset is retained at full wet gross mass in a distinct compatible Waste row with one treatment owner, not relabelled reusable or removed from the inventory. Removed components and installed fluid are one disjoint whole/component ledger.

- Selected flow: Piano woodworking machining centre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano spray-finishing booth (`spray_booth_retirement`)

Conditional actual whole physical asset retirement; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. This Product retirement card applies only to a usable article transferred as Product. An actually discarded asset is retained at full wet gross mass in a distinct compatible Waste row with one treatment owner, not relabelled reusable or removed from the inventory. Removed components and installed fluid are one disjoint whole/component ledger.

- Selected flow: Piano spray-finishing booth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

###### Piano conditioning climate-control unit (`climate_unit_retirement`)

Conditional actual whole physical asset retirement; preserve installed fluids and actual BOM, wet mass, acquisition/retirement and maintenance history. Components separately moving are disjoint from the whole article mass. This is gross disclosure only, not a whole asset consumed per kg piano. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. This Product retirement card applies only to a usable article transferred as Product. An actually discarded asset is retained at full wet gross mass in a distinct compatible Waste row with one treatment owner, not relabelled reusable or removed from the inventory. Removed components and installed fluid are one disjoint whole/component ledger.

- Selected flow: Piano conditioning climate-control unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-stringing`; `yamaha-resting`; `ilcd-allocation`

##### Waste flows

###### Unbonded wood machining offcut (`wood_offcut`)

One actual segregated solid offcut exit, retain moisture and actual downstream treatment; do not treat sale as removal of production/treatment burden. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Unbonded wood machining offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### sawdust waste (`sawdust`)

Native at-plant Waste is untreated sawdust from sawing/sanding/milling, fine particles to small chips; combustion/recovery wording is not a treatment already performed or an automatic fuel credit. Exclude bonded/painted dust and atmospheric emissions; use only the matching actual wood-processing source. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### Bonded and coated piano wood waste (`bonded_wood_waste`)

One actual mixed bonded/coated wood waste collection exit if truly collected together; constituent pools remain subledgers, no briquette/agglomeration assumption. Split if real exits differ. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Bonded and coated piano wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### Post-industrial steel scrap (`steel_scrap`)

Native GLO at-plant Waste is unprocessed steel production scrap from mechanical-part machining/forming leaving without treatment. Use for real cut wire offcuts only where that source matches; not copper-wound composite string or treated/remelted product. Gross mass is never economically scaled. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### Waste wound piano bass string (`wound_string_waste`)

One actual composite string waste exit; core and wrap assays are not extra waste exits if disposed together. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Waste wound piano bass string
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### Waste rim adhesive preparation (`adhesive_waste`)

Actual separately collected whole waste adhesive preparation including solvent/water; distinguish cured joint waste and contaminated containers. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Waste rim adhesive preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### Waste coating residues (`coating_waste`)

One actual coating-residue exit generated at plant, GLO, treated outside this unit process, as the native Waste states. Native examples include overspray/sludge/spent filters; only include those actually combined in this one physical exit, do not repeat components as external wastes. Treatment provider once. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Waste coating residues `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### Piano finishing and cleaning wastewater (`wastewater`)

One actual wastewater exit with measured water/solids/dissolved constituents and destination. COD/VOC/total metals are test indicators, not specific molecular masses; no manganese-slag washing route. Separate outlets only when real. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano finishing and cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### Rejected complete acoustic grand piano (`reject_piano`)

Conditional actual whole rejected instrument exit; retain full wet gross mass and original cohort burden. Removed constituent parts are subledgers unless separately removed and the whole residual is reduced consistently. No new Q or automatic negative burden. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Rejected complete acoustic grand piano
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `yamaha-body`; `yamaha-release`; `ilcd-allocation`

###### Removed hydraulic-press elastomer seal (`press_seal_removed`)

Conditional actual maintenance event; identify exact whole part/fluid and contained water/oil, origin, installed opening/closing charge and removed state separately. X only removes overlap with another same-side incoming/outgoing term, never with closing stock or the opposite direction. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Removed hydraulic-press elastomer seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `ilcd-allocation`; `yamaha-body`

###### Spent rim-press hydraulic fluid (`hydraulic_oil_waste`)

Conditional actual maintenance event; identify exact whole part/fluid and contained water/oil, origin, installed opening/closing charge and removed state separately. X only removes overlap with another same-side incoming/outgoing term, never with closing stock or the opposite direction. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Spent rim-press hydraulic fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gross`
- Sources: `ilcd-allocation`; `yamaha-body`

##### Elementary flows

###### water vapour (`manufacture_water_vapour_out`)

Actual H2O in the vapour phase, including passive moisture gain/loss in wood, finishes, finished instruments and packaging during conditioning, storage or handling. Measure species-specific humidity/water balance independently; an air-resource Volume row is not an emission identity. Keep actual influx even when retained in full wet closing stock. Natural humidity exchange requires no invented repair operation or permission. Native Elementary flow is ordinary H2O CAS 7732-18-5 to air unspecified, Mass/kg; no further grade or geography specified. The synonym list also contains heavy/tritiated-water, ice and other noisy water aliases; these do not establish isotope-labelled water, liquid discharge or high-stack/stratospheric release applicability. Require actual ordinary vapour and the declared air compartment. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `yamaha-release`

###### Airborne wood dust (`wood_dust_air`)

Actual airborne wood particles crossing the gate after capture controls; species/material, size fraction and mass sampling are recorded independently. Do not call collected sawdust an air emission or assign a molecular carbon mass from total PM. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Airborne wood dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`

###### Airborne wool-felt fibre dust (`felt_dust_air`)

Conditional actual fibre release during voicing/filing; capture waste and airborne mass are disjoint. Do not assume untreated pure wool if actual supplied felt has binders. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Airborne wool-felt fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-action`; `yamaha-release`

###### Oxygen (`manufacture_oxygen_outputs`)

Conditional real gaseous oxygen CAS 7782-44-7 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, emissions to air unspecified. It does not establish indoor, high-stack, long-term, water/soil, liquid or isotope-labelled applicability. Synonym noise does not override canonical molecule/CAS/media. Preserve actual measured carrier release, distinguishing unchanged throughput from newly generated emissions; no invented conversion or extra provider.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Dinitrogen (`manufacture_nitrogen_outputs`)

Conditional real gaseous dinitrogen CAS 7727-37-9 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, emissions to air unspecified. It does not establish indoor, high-stack, long-term, water/soil, liquid or isotope-labelled applicability. Synonym noise does not override canonical molecule/CAS/media. Preserve actual measured carrier release, distinguishing unchanged throughput from newly generated emissions; no invented conversion or extra provider.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Argon (`manufacture_argon_outputs`)

Conditional real gaseous argon CAS 7440-37-1 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, emissions to air unspecified. It does not establish indoor, high-stack, long-term, water/soil, liquid or isotope-labelled applicability. Synonym noise does not override canonical molecule/CAS/media. Preserve actual measured carrier release, distinguishing unchanged throughput from newly generated emissions; no invented conversion or extra provider.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Ambient carbon dioxide (`manufacture_ambient_co2_outputs`)

Conditional real gaseous ambient carbon dioxide CAS 124-38-9 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Ambient carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

### Process: Original-cohort handling (`handling`)

#### Inputs

##### Product flows

###### Steel Wire (`replacement_wire`)

Conditional actual postrelease material addition assigned to the original serial/cohort, including attempted, unpermitted, failed or rejected work. Retain manufacturer/spec permission, actual operation, tests, acceptance/hold/waste disposition; permission is not a gate to deleting a real event. Original component inside the piano is not repurchased. Actual bare cylindrical steel wire for on-site stringing, from the native steel-production Product at factory. Native synonyms include fine/miniature/ultrafine steel wire and comment explicitly includes musical use; it is neither wound copper/steel composite bass string nor wire rope. Confirm actual alloy, gauge, surface treatment and supply route without inventing string count, tension or pitch. Native taxonomy identifies iron or non-alloy steel wire; do not silently bind verified alloy or stainless wire under this identity. This row remains one bare wire with its actual surface state. Native taxonomy identifies iron or non-alloy steel wire; do not silently bind verified alloy or stainless wire under this identity. This row remains one bare wire with its actual surface state. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano repair wool-felt strip (`replacement_felt`)

Conditional actual postrelease material addition assigned to the original serial/cohort, including attempted, unpermitted, failed or rejected work. Retain manufacturer/spec permission, actual operation, tests, acceptance/hold/waste disposition; permission is not a gate to deleting a real event. Original component inside the piano is not repurchased. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Piano repair wool-felt strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano repair hardwood block (`replacement_wood`)

Conditional actual postrelease material addition assigned to the original serial/cohort, including attempted, unpermitted, failed or rejected work. Retain manufacturer/spec permission, actual operation, tests, acceptance/hold/waste disposition; permission is not a gate to deleting a real event. Original component inside the piano is not repurchased. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Piano repair hardwood block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Alternating current (`handling_electricity`)

Actual packaging, storage conditioning, handling, reinspection and real postrelease work electricity during H, assigned to original cohort. Native CN grid-average consumer supply below 1 kV only; Net calorific value/MJ reference, verified kWh conversion. It excludes manufacturing meter overlap; FG retention does not remove already performed service. This card is the once-owned burden dimension; use undivided A after raw-unit conversion and legitimate stock/assignment in section8 calc_quotient once. Keep the full unscaled physical V companion ledger, not a second provider purchase.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Undivided attributable A / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Postrelease service tap water (`handling_water`)

Conditional actual additional water used in postrelease cleaning/work, collected in raw metered volume. Keep real influx even when retained in full wet closing FG, repair part or packaging; no double purchase of water already in a whole article/preparation. Actual permission/tests/disposition records do not erase unpermitted/failed work. Independent density/state supports any physical kg bridge. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Postrelease service tap water
- Flow property / unit: Volume / m3
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `steinway-guide`; `ilcd-allocation`

###### Pianos and other keyboard stringed musical instruments (`fg_external_return_received`)

Conditional actual full physical external return received of the original serial/cohort complete piano or custody-paired complete transport kit. Native Product is manufactured finished piano/keyboard-stringed instrument, production mix at plant, with no fixed grade/geography/CAS. Positive restriction: same complete pure acoustic horizontal-string grand with wooden rim, soundboard/bridges/plate/pins/strings, keyboard/action/dampers, case/lid/desk, pedals/linkages and actual legs/casters/BOM. Exclude digital/electric/upright, toy and part-only substitutes. Capture full current wet instrument/kit V independently of original first-release mass and all added/removed matter; packaging S is separate and not added twice. No new Q or automatic reverse manufacturing. Actual return condition/hold/waste and posttests remain explicit, not presumed restored. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. If the actual returned/shipped matter is incomplete, damaged beyond this finished-Product identity, dismantled without a complete custody-paired kit, or Waste, retain its entire actual wet physical leg and original cohort history under a compatible separate identity/type. This binding is not permission to suppress that event or presume conformity/restoration.

- Selected flow: Pianos and other keyboard stringed musical instruments `adc2e477-993f-4780-bf1c-e5aeec86ae96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-parts`; `yamaha-release`; `ilcd-allocation`

##### Elementary flows

###### Atmospheric water vapour uptake (`handling_ambient_water_in`)

Actual H2O in the vapour phase, including passive moisture gain/loss in wood, finishes, finished instruments and packaging during conditioning, storage or handling. Measure species-specific humidity/water balance independently; an air-resource Volume row is not an emission identity. Keep actual influx even when retained in full wet closing stock. Natural humidity exchange requires no invented repair operation or permission. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `yamaha-release`

###### Oxygen (`handling_oxygen_inputs`)

Conditional real gaseous oxygen CAS 7782-44-7 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, renewable element resources from air. This is the actual ambient resource intake, not purchased compressed/liquid gas, ionic/isotope-labelled material or a water/soil exchange. Liquid/isotope/total-element synonym noise does not override canonical molecule, CAS and compartment. Preserve full measured carrier throughput and distinguish it from net consumption; no assumed air composition or extra provider.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Dinitrogen (`handling_nitrogen_inputs`)

Conditional real gaseous dinitrogen CAS 7727-37-9 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, renewable element resources from air. This is the actual ambient resource intake, not purchased compressed/liquid gas, ionic/isotope-labelled material or a water/soil exchange. Liquid/isotope/total-element synonym noise does not override canonical molecule, CAS and compartment. Preserve full measured carrier throughput and distinguish it from net consumption; no assumed air composition or extra provider.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Argon (`handling_argon_inputs`)

Conditional real gaseous argon CAS 7440-37-1 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, renewable element resources from air. This is the actual ambient resource intake, not purchased compressed/liquid gas, ionic/isotope-labelled material or a water/soil exchange. Liquid/isotope/total-element synonym noise does not override canonical molecule, CAS and compartment. Preserve full measured carrier throughput and distinguish it from net consumption; no assumed air composition or extra provider.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Ambient carbon dioxide (`handling_ambient_co2_inputs`)

Conditional real gaseous ambient carbon dioxide CAS 124-38-9 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Ambient carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

#### Outputs

##### Product flows

###### Pianos and other keyboard stringed musical instruments (`fg_gross_shipment`)

Conditional actual full physical shipment of the original serial/cohort complete piano or custody-paired complete transport kit. Native Product is manufactured finished piano/keyboard-stringed instrument, production mix at plant, with no fixed grade/geography/CAS. Positive restriction: same complete pure acoustic horizontal-string grand with wooden rim, soundboard/bridges/plate/pins/strings, keyboard/action/dampers, case/lid/desk, pedals/linkages and actual legs/casters/BOM. Exclude digital/electric/upright, toy and part-only substitutes. Capture full current wet instrument/kit V independently of original first-release mass and all added/removed matter; packaging S is separate and not added twice. No new Q or automatic reverse manufacturing. Actual return condition/hold/waste and posttests remain explicit, not presumed restored. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. If the actual returned/shipped matter is incomplete, damaged beyond this finished-Product identity, dismantled without a complete custody-paired kit, or Waste, retain its entire actual wet physical leg and original cohort history under a compatible separate identity/type. This binding is not permission to suppress that event or presume conformity/restoration.

- Selected flow: Pianos and other keyboard stringed musical instruments `adc2e477-993f-4780-bf1c-e5aeec86ae96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-parts`; `yamaha-release`; `ilcd-allocation`

##### Waste flows

###### Removed piano steel string (`removed_wire`)

Actual removed part from the identified original instrument, retaining moisture/coating and any attached material, paired with real repair without assuming restoration. Disjoint from any whole discarded instrument exit. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Removed piano steel string
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Removed piano felt strip (`removed_felt`)

Actual removed part from the identified original instrument, retaining moisture/coating and any attached material, paired with real repair without assuming restoration. Disjoint from any whole discarded instrument exit. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Removed piano felt strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Removed piano hardwood block (`removed_wood`)

Actual removed part from the identified original instrument, retaining moisture/coating and any attached material, paired with real repair without assuming restoration. Disjoint from any whole discarded instrument exit. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Removed piano hardwood block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Postrelease service wastewater (`handling_wastewater`)

Conditional real separately collected service wastewater exit with actual dissolved/solid composition and water mass; gross liquid remains irrespective of failed or unpermitted postwork. Keep whole liquid and its assay components disjoint, one destination/provider, no fictitious COD molecule. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Postrelease service wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `steinway-guide`; `ilcd-allocation`

##### Elementary flows

###### water vapour (`handling_water_vapour_out`)

Actual H2O in the vapour phase, including passive moisture gain/loss in wood, finishes, finished instruments and packaging during conditioning, storage or handling. Measure species-specific humidity/water balance independently; an air-resource Volume row is not an emission identity. Keep actual influx even when retained in full wet closing stock. Natural humidity exchange requires no invented repair operation or permission. Native Elementary flow is ordinary H2O CAS 7732-18-5 to air unspecified, Mass/kg; no further grade or geography specified. The synonym list also contains heavy/tritiated-water, ice and other noisy water aliases; these do not establish isotope-labelled water, liquid discharge or high-stack/stratospheric release applicability. Require actual ordinary vapour and the declared air compartment. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `yamaha-release`

###### Oxygen (`handling_oxygen_outputs`)

Conditional real gaseous oxygen CAS 7782-44-7 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, emissions to air unspecified. It does not establish indoor, high-stack, long-term, water/soil, liquid or isotope-labelled applicability. Synonym noise does not override canonical molecule/CAS/media. Preserve actual measured carrier release, distinguishing unchanged throughput from newly generated emissions; no invented conversion or extra provider.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Dinitrogen (`handling_nitrogen_outputs`)

Conditional real gaseous dinitrogen CAS 7727-37-9 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, emissions to air unspecified. It does not establish indoor, high-stack, long-term, water/soil, liquid or isotope-labelled applicability. Synonym noise does not override canonical molecule/CAS/media. Preserve actual measured carrier release, distinguishing unchanged throughput from newly generated emissions; no invented conversion or extra provider.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Argon (`handling_argon_outputs`)

Conditional real gaseous argon CAS 7440-37-1 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger. Native Elementary identity is the named ordinary molecular gas, CAS as stated above, Mass/kg, emissions to air unspecified. It does not establish indoor, high-stack, long-term, water/soil, liquid or isotope-labelled applicability. Synonym noise does not override canonical molecule/CAS/media. Preserve actual measured carrier release, distinguishing unchanged throughput from newly generated emissions; no invented conversion or extra provider.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

###### Ambient carbon dioxide (`handling_ambient_co2_outputs`)

Conditional real gaseous ambient carbon dioxide CAS 124-38-9 crossing the declared air-handling gate in this direction. Measure species-specific full gross mass and actual phase/state/air compartment; no default atmospheric composition, density, chemical generation or net uptake. Unchanged carrier gas inlet/outlet remain a paired physical record rather than fabricated newly generated emissions or supplier demand. Ambient CO2 is distinct from actual fossil/biogenic reaction CO2; those require separate source-specific atoms. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Ambient carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `yamaha-body`; `yamaha-resting`; `ilcd-allocation`

### Process: Packaging gross physical events (`packaging`)

#### Inputs

##### Product flows

###### Blanket (`pack_blanket_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual external purchase of one padded piano transport blanket pool; pool identity must stay disjoint from every other packaging layer. P uses its full measured gross event mass V, with no economic share or stock correction. Native Product is a non-electric made-up blanket, production mix at plant; actual textile/padding/seams and carried moisture form one whole article, no repeat fibre or thread procurement. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Blanket `e26ce9c0-4486-48c4-9483-c4d23b48df03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Blanket (`pack_blanket_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual first non-purchased external ingress of one padded piano transport blanket pool; pool identity must stay disjoint from every other packaging layer. I uses its full measured gross event mass V, with no economic share or stock correction. Native Product is a non-electric made-up blanket, production mix at plant; actual textile/padding/seams and carried moisture form one whole article, no repeat fibre or thread procurement. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Blanket `e26ce9c0-4486-48c4-9483-c4d23b48df03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Blanket (`pack_blanket_er`)

Conditional actual external return received of one padded piano transport blanket pool; pool identity must stay disjoint from every other packaging layer. ER uses its full measured gross event mass V, with no economic share or stock correction. Native Product is a non-electric made-up blanket, production mix at plant; actual textile/padding/seams and carried moisture form one whole article, no repeat fibre or thread procurement. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Blanket `e26ce9c0-4486-48c4-9483-c4d23b48df03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual external purchase of one moisture-barrier piano transport film pool; pool identity must stay disjoint from every other packaging layer. P uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual first non-purchased external ingress of one moisture-barrier piano transport film pool; pool identity must stay disjoint from every other packaging layer. I uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_film_er`)

Conditional actual external return received of one moisture-barrier piano transport film pool; pool identity must stay disjoint from every other packaging layer. ER uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_vinyl_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual external purchase of one vinyl piano transport overwrap pool; pool identity must stay disjoint from every other packaging layer. P uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_vinyl_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual first non-purchased external ingress of one vinyl piano transport overwrap pool; pool identity must stay disjoint from every other packaging layer. I uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_vinyl_er`)

Conditional actual external return received of one vinyl piano transport overwrap pool; pool identity must stay disjoint from every other packaging layer. ER uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Corrugated fibreboard piano transport carton (`pack_carton_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual external purchase of one corrugated fibreboard piano transport carton pool; pool identity must stay disjoint from every other packaging layer. P uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Corrugated fibreboard piano transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Corrugated fibreboard piano transport carton (`pack_carton_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual first non-purchased external ingress of one corrugated fibreboard piano transport carton pool; pool identity must stay disjoint from every other packaging layer. I uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Corrugated fibreboard piano transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Corrugated fibreboard piano transport carton (`pack_carton_er`)

Conditional actual external return received of one corrugated fibreboard piano transport carton pool; pool identity must stay disjoint from every other packaging layer. ER uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Corrugated fibreboard piano transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport foam cushion (`pack_cushion_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual external purchase of one piano transport foam cushion pool; pool identity must stay disjoint from every other packaging layer. P uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport foam cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport foam cushion (`pack_cushion_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual first non-purchased external ingress of one piano transport foam cushion pool; pool identity must stay disjoint from every other packaging layer. I uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport foam cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport foam cushion (`pack_cushion_er`)

Conditional actual external return received of one piano transport foam cushion pool; pool identity must stay disjoint from every other packaging layer. ER uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport foam cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport polymer tie band (`pack_strap_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional actual external purchase of one piano transport polymer tie band pool; pool identity must stay disjoint from every other packaging layer. P uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport polymer tie band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport polymer tie band (`pack_strap_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional actual first non-purchased external ingress of one piano transport polymer tie band pool; pool identity must stay disjoint from every other packaging layer. I uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport polymer tie band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport polymer tie band (`pack_strap_er`)

Conditional actual external return received of one piano transport polymer tie band pool; pool identity must stay disjoint from every other packaging layer. ER uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport polymer tie band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

#### Outputs

##### Product flows

###### Blanket (`pack_blanket_s`)

Conditional actual gross physical shipment outward of one padded piano transport blanket pool; pool identity must stay disjoint from every other packaging layer. S uses its full measured gross event mass V, with no economic share or stock correction. Native Product is a non-electric made-up blanket, production mix at plant; actual textile/padding/seams and carried moisture form one whole article, no repeat fibre or thread procurement. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Blanket `e26ce9c0-4486-48c4-9483-c4d23b48df03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Blanket (`pack_blanket_eo`)

Conditional actual external return sent of one padded piano transport blanket pool; pool identity must stay disjoint from every other packaging layer. EO uses its full measured gross event mass V, with no economic share or stock correction. Native Product is a non-electric made-up blanket, production mix at plant; actual textile/padding/seams and carried moisture form one whole article, no repeat fibre or thread procurement. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Blanket `e26ce9c0-4486-48c4-9483-c4d23b48df03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_film_s`)

Conditional actual gross physical shipment outward of one moisture-barrier piano transport film pool; pool identity must stay disjoint from every other packaging layer. S uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_film_eo`)

Conditional actual external return sent of one moisture-barrier piano transport film pool; pool identity must stay disjoint from every other packaging layer. EO uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_vinyl_s`)

Conditional actual gross physical shipment outward of one vinyl piano transport overwrap pool; pool identity must stay disjoint from every other packaging layer. S uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Plastic film (`pack_vinyl_eo`)

Conditional actual external return sent of one vinyl piano transport overwrap pool; pool identity must stay disjoint from every other packaging layer. EO uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Corrugated fibreboard piano transport carton (`pack_carton_s`)

Conditional actual gross physical shipment outward of one corrugated fibreboard piano transport carton pool; pool identity must stay disjoint from every other packaging layer. S uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Corrugated fibreboard piano transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Corrugated fibreboard piano transport carton (`pack_carton_eo`)

Conditional actual external return sent of one corrugated fibreboard piano transport carton pool; pool identity must stay disjoint from every other packaging layer. EO uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Corrugated fibreboard piano transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport foam cushion (`pack_cushion_s`)

Conditional actual gross physical shipment outward of one piano transport foam cushion pool; pool identity must stay disjoint from every other packaging layer. S uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport foam cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport foam cushion (`pack_cushion_eo`)

Conditional actual external return sent of one piano transport foam cushion pool; pool identity must stay disjoint from every other packaging layer. EO uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport foam cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport polymer tie band (`pack_strap_s`)

Conditional actual gross physical shipment outward of one piano transport polymer tie band pool; pool identity must stay disjoint from every other packaging layer. S uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport polymer tie band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport polymer tie band (`pack_strap_eo`)

Conditional actual external return sent of one piano transport polymer tie band pool; pool identity must stay disjoint from every other packaging layer. EO uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. P and I are disjoint; any supplier-included article retains one upstream owner. ER/EO never create new manufacture or automatic credit. Internal reuse is not P/I/ER. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport polymer tie band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

##### Waste flows

###### Padded piano transport blanket (`pack_blanket_w`)

Conditional actual source contribution into mixed waste collection of one padded piano transport blanket pool; pool identity must stay disjoint from every other packaging layer. W uses its full measured gross event mass V, with no economic share or stock correction. Native Product is a non-electric made-up blanket, production mix at plant; actual textile/padding/seams and carried moisture form one whole article, no repeat fibre or thread procurement. This W is an independently measured non-additive origin contribution/internal handoff, with no external provider and no finished-Product binding. Its material description traces origin only. Match its receiving collection subledger; do not add origin W to the one external mixed total. The container balance includes actual opening/closing waste stocks and any disjoint material/water ingress or loss; source contributions need not equal the period external exit when stocks/state change. Never invent source fractions or infer multiple unknown origins from one total. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Padded piano transport blanket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Moisture-barrier piano transport film (`pack_film_w`)

Conditional actual source contribution into mixed waste collection of one moisture-barrier piano transport film pool; pool identity must stay disjoint from every other packaging layer. W uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. This W is an independently measured non-additive origin contribution/internal handoff, with no external provider and no finished-Product binding. Its material description traces origin only. Match its receiving collection subledger; do not add origin W to the one external mixed total. The container balance includes actual opening/closing waste stocks and any disjoint material/water ingress or loss; source contributions need not equal the period external exit when stocks/state change. Never invent source fractions or infer multiple unknown origins from one total. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Moisture-barrier piano transport film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Vinyl piano transport overwrap (`pack_vinyl_w`)

Conditional actual source contribution into mixed waste collection of one vinyl piano transport overwrap pool; pool identity must stay disjoint from every other packaging layer. W uses its full measured gross event mass V, with no economic share or stock correction. Native Product is plastic film from PVC/PE/PP/PS or other resin, no fixed resin/grade/geography; actual single film layer and formulation must be documented, no assumption PE equals PET or vinyl composition. Separate film layers stay distinct. This W is an independently measured non-additive origin contribution/internal handoff, with no external provider and no finished-Product binding. Its material description traces origin only. Match its receiving collection subledger; do not add origin W to the one external mixed total. The container balance includes actual opening/closing waste stocks and any disjoint material/water ingress or loss; source contributions need not equal the period external exit when stocks/state change. Never invent source fractions or infer multiple unknown origins from one total. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Vinyl piano transport overwrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Corrugated fibreboard piano transport carton (`pack_carton_w`)

Conditional actual source contribution into mixed waste collection of one corrugated fibreboard piano transport carton pool; pool identity must stay disjoint from every other packaging layer. W uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. This W is an independently measured non-additive origin contribution/internal handoff, with no external provider and no finished-Product binding. Its material description traces origin only. Match its receiving collection subledger; do not add origin W to the one external mixed total. The container balance includes actual opening/closing waste stocks and any disjoint material/water ingress or loss; source contributions need not equal the period external exit when stocks/state change. Never invent source fractions or infer multiple unknown origins from one total. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Corrugated fibreboard piano transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport foam cushion (`pack_cushion_w`)

Conditional actual source contribution into mixed waste collection of one piano transport foam cushion pool; pool identity must stay disjoint from every other packaging layer. W uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. This W is an independently measured non-additive origin contribution/internal handoff, with no external provider and no finished-Product binding. Its material description traces origin only. Match its receiving collection subledger; do not add origin W to the one external mixed total. The container balance includes actual opening/closing waste stocks and any disjoint material/water ingress or loss; source contributions need not equal the period external exit when stocks/state change. Never invent source fractions or infer multiple unknown origins from one total. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport foam cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Piano transport polymer tie band (`pack_strap_w`)

Conditional actual source contribution into mixed waste collection of one piano transport polymer tie band pool; pool identity must stay disjoint from every other packaging layer. W uses its full measured gross event mass V, with no economic share or stock correction. Confirm the actual single physical article, supply material and wet state; the photo demonstrates packing context, not polymer or fibre recipe. This W is an independently measured non-additive origin contribution/internal handoff, with no external provider and no finished-Product binding. Its material description traces origin only. Match its receiving collection subledger; do not add origin W to the one external mixed total. The container balance includes actual opening/closing waste stocks and any disjoint material/water ingress or loss; source contributions need not equal the period external exit when stocks/state change. Never invent source fractions or infer multiple unknown origins from one total. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Piano transport polymer tie band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

###### Packaging waste, mixed (`pack_mixed_external`)

Sole actual mixed external Waste exit when all collected packaging pools truly leave together. Native Waste is mixed materials generated at plant in packaging/assembly/testing, including offcuts/damaged packaging. Apply the native in-plant packaging/assembly/testing origin restriction literally; waste from another process or actual separate outlet needs its own compatible identity. Reconcile measured origin contributions with full collection opening/closing stocks and disjoint added/lost material/water before the sole measured external wet exit. The external total and origin subledgers are never additive provider demands. One treatment/provider burden, no automatic waste sale credit. Real separated exits require distinct exchanges instead. This is complete physical gross-leg disclosure: calc_quotient numerator is strictly full actual event V, not Bopen+U-Bclose or an economic fraction. It creates no additional purchase/provider burden/credit; any real burden dimension is assigned once in the exclusive owner A ledger.

- Selected flow: Packaging waste, mixed `cf748dc8-a0d3-411f-aab6-168e7ee54a6e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full undivided V / Q_basis from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-release`; `ilcd-allocation`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | attributional modelling | Use this hierarchy only where the stated attributional goal and decision context justify allocation. It is not a free choice between substitution and allocation and does not approve a consequential study or multifunctional-product QFD comparison. | ilcd-allocation |
| allocation_subdivide | each burden dimension | First collect separately for exclusive stages/cohorts and apply supported real or virtual subdivision. Each supplied component and its embodied input belongs once to the receiving instrument cohort. Separate genuine other functions from shared production with causal evidence and vector conservation. | ilcd-allocation |
| allocation_causal | remaining shared exchanges | For each still-shared exchange establish the determining physical cause and its measured driver. A heat/conditioning burden may depend on actual treated load/state; equipment or storage service can depend on measured occupation and physical capacity. Demonstrate each relation; do not impose one mass/count/time factor on all exchanges. | ilcd-allocation |
| allocation_residual | true residual common process | Only the true residual unresolved after subdivision and determining causality uses contemporaneous actual market values in the actual condition and at the same common process gate. Record quantities, prices, currency, period, conditioning/transport adjustments and residual-vector conservation. Missing value/causal evidence remains unresolved; no fixed shares or free economic/physical choice. | ilcd-allocation |
| allocation_failures | waste samples rejects and returns | Ordinary manufacturing losses, samples, failed batches, waste and rejected work retain their production and treatment burdens even if sold or sent away. Transfer a vector once only for a genuine distinct cohort/function and justified allocation/handover. Physical gross flows are never scaled by that share. No automatic avoided-production credit, negative waste burden, recycling loop count or recovery factor. | ilcd-allocation |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection protocols store undivided raw only. aggregation_rule declares the final target basis and references the same single quotient; it never divides during collection. Preserve each row native unit; kg rules do not constrain MJ, m3 or h numerators.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first release | acceptance and calibrated weighing | model; configuration; serial; actual full BOM; first complete acceptance; m_net_i; scale ID; calibration; net mass; packaging tare; moisture state; holds; prior release history | Weigh the accepted complete instrument on a calibrated scale in the same fully assembled configuration excluding transport packaging. Verify all actual supplied legs/casters/pedals/lid/desk and installed parts against the acceptance record; trace separate kit masses if later detached. Record moisture state and uncertainty; never infer mass from a catalogue count or density. | kg | each actual first release | whole cohort period including failed work and WIP | specified site and complete configuration | per reference flow | scale calibration; serial gate evidence; full BOM; actual test and hold records |
| cp_mass | manufacture | material burden and companion gross | purchase stock and stage log | row_id; actual lot; raw amount; original unit; integrated or rate flag; density and state if needed; raw opening; raw closing; WIP opening; WIP closing; non-WIP unused store quantities; every inherited vector; purchases; supplier work; failures; startup; idle; cleanup; rework; actual driver; exclusive owner; already stock-corrected flag | Collect only undivided raw observations and inherited exchange vectors. Preserve every raw/WIP/non-WIP quantity plus vector; prepare the attributable numerator with real unit conversions and legitimate once-only stock/assignment in the calculation rules. Preserve a distinct unscaled gross physical ledger for all legs. An input remaining in wet closing stock is still real influx. | actual row native extensive unit | each receipt and event plus opening/closing | complete manufacturing period and inherited history | actual supplier stage and site | per reference flow | invoices; stage meters; calibration; WIP quantities and vectors; supplier BOM; absence evidence |
| cp_gross | manufacture | gross physical exchange | weighing metering and destination log | row_id; leg; actual full gross V; original unit; phase; species; moisture; direction; opening full wet stock; closing full wet stock; matching handoff; same-side overlap X; owner; destination | Capture complete directional physical quantities without allocation or burden-stock correction; retain actual rejected/failed work, asset mass, installed fluids, repair material/water and real external returns. X removes another same-side duplicate only. No division is performed in collection. | actual row native extensive unit | each actual physical event | complete period plus opening and closing | manufacturing physical gate and disjoint asset subgates | per reference flow | gross tickets; state and destination evidence; component/whole disjoint mass reconciliation |
| cp_energy | manufacture | electricity and heat | meter and service log | row_id; raw meter reading; native unit; cumulative or rate flag; start; end; integration interval; actual meter coverage; supply geography; voltage; heat source; temperature; pressure; enthalpy; carrier kg; actual common driver; idle; failed work; cleanup; supplier energy water agreement | Collect raw electricity/heat meters before division. Convert true rates by recorded time only; an integrated kWh/MJ/m3 is not multiplied by time. Keep each actual fuel and thermal carrier mass distinct; measure relevant same-substance density and state independently. No default onsite boiler or steam. | native energy unit or carrier mass as declared by row | each meter interval and operating state | complete manufacturing period | actual meter circuits and supplier boundary | per reference flow | meter calibration; supply contracts; raw rate integrations; thermal state and provider ownership |
| cp_service | handling | original cohort service | custody meter and postwork log | row_id; original serial; original Q_c; original net mass; H start; H end; opening FG; complete wet closing FG; gross shipment G; gross return R; return composition and added moisture; actual work; actual permit status; posttests; acceptance; hold; disposition; new parts; removed parts; actual water; raw service; unused future charge; prior performed service; each inherited vector | Record undivided real incremental service and physical legs for the original accepted cohort; retain all actual failed and unpermitted work. Distinguish ordinary passive humidity exchange. Preserve opening-FG history and all wet-mass changes; no new output, reverse delivery or guessed return mass. Keep already performed service assigned even if FG remains. | actual row native extensive unit | each event and H boundary | original cohort history plus explicit service horizon H | actual original instrument custody and service site | per reference flow | original acceptance; custody kit reconciliation; meters; permission/tests/disposition including failed events |
| cp_pack | packaging | six packaging events | article-pool gross stock ledger | row_id; material pool; layer; actual article composition; whole wet state; original cohort Q_c; H; opening empty; opening attached WIP; opening attached FG; opening reusable; P; I; ER; S; EO; W; closing empty; closing attached WIP; closing attached FG; closing reusable; matching internal reuse; paired mixed-container receipt; full wet exit; upstream owner; treatment owner  F_in; F_out; X_in; X_out; matched OTHER same-side owner; collection opening/closing wet stocks; actual collection losses;; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Measure all six actual events for each material pool separately. P and I are disjoint whole-article ingress; preserve supplier-included physical packaging and its once-owned upstream burden. Closing wet stock never cancels new influx. W source cards pair to mixed-container receipts; only the measured mixed external exit is a provider/treatment demand. No economic scaling and no division in collection.  Apply boundary_packaging F/X identity and whole-wet ownership rules; reconcile non-additive origin W with collection stock/state changes and one measured external outlet. For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each paid procurement receipt shipment return waste and stock boundary | complete original cohort service horizon plus opening/closing | all actual empty attached and reusable packaging pools | per reference flow | article receipts; gross shipment/return manifests; moisture; stocktakes; one mixed-waste ticket; sum-of-sources reconciliation |
| cp_asset_service | manufacture | named equipment service | asset register duty and used-service log | row_id; actual asset; acquisition; full gross asset mass; installed fluids; actual component map; opening installed; closing installed; retirement; new repair part; old removed part; duty hours; actual capacity driver; service charge; unused future service; each inherited vector | Keep undivided actual used service exposure and the exclusive owned burden for each named asset. Separate gross asset legs from period service, and replace output type if the real retired article is a waste. Use actual life/repair/provider evidence; do not invent lifespan or one whole machine per kg. | h | each duty and maintenance event | actual production period and service-life evidence window | named actual equipment and moulds | per reference flow | asset register; measured duty; real repair parts and fluids; provider invoice and life evidence |
| cp_species | manufacture | water species and airborne particles | independent physical and compositional measurement | row_id; actual molecular or particle identity; phase; inlet; outlet; gross V; dry gas and humidity; collection medium; temperature; pressure; actual density; capture; dissolved solids; free water; structural water; reaction water if proven; biogenic carbon; fossil carbon; ambient carbon; independent elemental observation | Measure actual species and media independently, including natural humidity gain/loss. VOC/COD/PM/total metals remain indicators until actual species are known. Add each real emitted molecule and direction as an atomic row before use; no default chemical emissions, air composition or reaction water. Never solve two unknown masses with one residual. | actual row native extensive unit | each representative actual event and state | whole period including failures and ambient storage | actual inlet outlet and stock state | per reference flow | sampling method; actual substance assay; independent moisture/density/state; mass and relevant element closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_prepare | all inventory rows | Convert each undivided raw observation to the row native extensive unit first. Integrate a true rate over its recorded interval once; never integrate an already accumulated quantity. Determine independent same-substance density/state for any volume-to-mass bridge; do not use secondary native coefficients as density evidence. Prepare attributable A_row with legitimate subdivision/allocation and opening/closing raw/WIP plus unused/unassigned non-WIP vectors once. For gross-disclosure cards prepare only complete actual V_row of that event; never substitute burden availability, stock correction or economic share. | raw_observation; raw_unit; actual_state; measured_density; inherited_vectors; actual_assignment; full_gross_V | prepared_numerator | ilcd-allocation |
| calc_quotient | all inventory rows | For each non-reference row apply exactly one quotient N_row / Q_basis to the prepared undivided numerator in the declared native unit. Burden rows: N_row=A_row; gross and internal-gross rows: N_row=full actual V_row; equipment service rows: actual used-service dimension with once-owned burden. Manufacture Q_basis=Q=sum of unique first-release m_net_i in kg. Original-cohort handling/packaging Q_basis=Q_c from that original cohort; no second production output. Q_basis=0 retains raw actual load/stocks and yields no unit result. Cards and protocol aggregation only reference this same division and never divide again. Physical V never creates another purchase/provider/credit; attribute its actual owned burden dimension once in A. H is the observation interval only; an accumulated service numerator is divided by original Q_c once, never again by H. Internal origin-W detail is excluded from additive external inventory/provider totals. | prepared_numerator; Q_basis; cp_release; cp_mass; cp_gross; cp_energy; cp_service; cp_pack; cp_asset_service; cp_species | normalized_exchange | ilcd-allocation; yamaha-release |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Actual configuration, serial/BOM and native restrictions agree; retain supplier component boundaries and complete original source context. | full BOM; direct native records; supplier declarations; complete sources |
| dq_measurement | all raw records | Retain original units and calibrated observations with timestamps, state, uncertainty and coverage including idle/failed work; no numerical invention. | calibration; raw readings; state logs; full-period reconciliations |
| dq_stocks | all gates | Every opening/closing raw/WIP/non-WIP/FG quantity has its inherited vector and origin; physical wet mass independent of economic value. | stocktake; cohort lineage; vector closure; gross balances |
| dq_sources | all rules | Qualitative manufacturer synthesis is not one measured factory/order or an independent quantitative factor. Same-publisher pages are one evidence family. | complete primary originals; exact context; limitation records; independent Steinway corroboration |
| dq_completeness | all conditional rows | Measure actual presence or support absence; add each real additional atom before use, including separate repair/packaging/spill/species/destination. Unresolved ordinary supplier/UUID data is disclosed and never silently zero. | conditional applicability register; new row list; one-owner ledger; gap record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_core | reference identity | Require one linked Product output with the verified whole manufactured piano identity and every complete acoustic-grand restriction in its card and reference qualifiers. Parts, wooden shell, iron plate, digital action and purchased-finished repacking cannot satisfy it. | yamaha-parts; yamaha-release; yamaha-acoustic-digital |
| validate_quantity | all records | Audit serial uniqueness, first-release evidence, calibrated net full-configuration mass, Q and original-cohort Q_c, raw units, source coverage and the sole quotient. Q=0 retains actual loads/stocks/failed operations but yields no unit result. Unknown measurement is not a pass. | yamaha-release; ilcd-allocation |
| validate_complete | all exchanges | Each actual material/energy/packaging/waste/species and service must have one physically specific row, correct unit and upstream/treatment ownership. Reconcile gross physical gates, every stock quantity and inherited vector, BOM whole/component disjointness, six packaging directions and one real mixed exit. Conditional absence needs evidence; no hidden other-input bucket or unmeasured zero. | yamaha-body; yamaha-action; yamaha-release; ilcd-allocation |
| validate_chemistry | water mass elements emissions | Close full physical mass and relevant independent elemental accounts using actual species and preparation/wood composition. Distinguish free/structural/reaction/ambient water by evidence; no assumed cure water or oxidation. Biogenic wood carbon, fossil resin/coating carbon and ambient carbon stay distinct. Purchasing wood does not create a second foreground atmospheric uptake; upstream forestry owns that history once. VOC/COD/PM/total metal indicators cannot identify molecular mass. Do not fit two unknowns with one residual. | yamaha-body; yamaha-action; ilcd-allocation |
| validate_service | FG custody and actual work | Reconcile opening FG history, all gross shipment/return and wet-mass changes, original accepted serial and complete dismantled transport kit. Continued-conformity permission/tests/disposition is assessed separately from complete recording of actual unpermitted/failed work. Do not apply a net-delivery denominator or reverse old manufacturing just because a return occurs. | yamaha-release; ilcd-allocation |
| validate_native | native identities and data quality | Apply every native material/form/route/phase/media/type/geography/property restriction in the individual description; official Chinese basenames and bare UUIDs agree. Provider suitability and actual foreground quantities still need evidence; scientific and translation review are separate from mechanical inspection. | ilcd-allocation |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Attributional manufacturing inventory of the declared complete acoustic grand configuration plus separately disclosed original-cohort service horizon |
| allowed_use | Only actual compatible native/provider identities and complete foreground coverage; product mass declaration does not establish musical service equivalence |
| excluded_use | Unreviewed publication or mapping acceptance; upright/digital/part equivalence; assumed lifetime/performance; net-delivery substitution; avoided production credit |
| required_metadata | All reference qualifiers; source versions and actual acquisition provenance in dataset evidence; supplier and cohort lineage; H; original units; unresolved ordinary identities |
| required_quality_disclosure | Measured versus qualitative source-derived method; every gap; Q=0 periods; actual failed work; provider suitability; no science/translation approval from checks |
| update_trigger | Actual supply-state/route/configuration/formulation/native restriction changes; source correction; improved measurements; real review findings |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | UNSD CPC 3.0 explanatory notes 30 June 2025; p190 and adjacent categories: keyboard stringed instruments versus electrical sound instruments and parts. |
| yamaha-body | handbook | https://www.yamaha.com/en/musical_instrument_guide/piano/manufacturing/ | Yamaha Making the Body; complete rim lamination and forming; bracing; finishing; soundboard and plate context. Qualitative route only; no recipe or numeric threshold adopted. |
| yamaha-action | handbook | https://www.yamaha.com/en/musical_instrument_guide/piano/manufacturing/manufacturing002.html | Yamaha Keyboard and Action; supplied assembly composition and upstream manufacturing decomposition; lubrication and felt context. Not site-specific BOM. |
| yamaha-stringing | handbook | https://www.yamaha.com/en/musical_instrument_guide/piano/manufacturing/manufacturing003.html | Yamaha Stringing and Mounting; individual stringing; initial tuning; fitting and paper-punching regulation; key exercise and human inspection. |
| yamaha-resting | handbook | https://www.yamaha.com/en/musical_instrument_guide/piano/manufacturing/manufacturing004.html | Yamaha Dampers Lid and Resting; assembly completion precedes conditioning and final integrity; actual environmental control recorded without adopting example duration. |
| yamaha-release | handbook | https://www.yamaha.com/en/musical_instrument_guide/piano/manufacturing/manufacturing005.html | Yamaha Adjustments and Finishing; legs and pedals; finish tuning; voicing; complete inspection; music desk and surface inspection; domestic blanket and export disassembled-leg packing plus image context. |
| yamaha-parts | handbook | https://www.yamaha.com/en/musical_instrument_guide/piano/mechanism/ | Yamaha complete grand-piano external/internal parts diagrams; soundboard/frame/strings/bridges/pins; legs/casters/pedals/case parts, not just furniture. |
| yamaha-grand-upright | handbook | https://www.yamaha.com/en/musical_instrument_guide/piano/selection/ | Yamaha Grand or Upright; horizontal versus vertical strings and distinct action/pedal mechanisms; countercontext excludes upright route equivalence. |
| yamaha-acoustic-digital | handbook | https://www.yamaha.com/en/musical_instrument_guide/piano/selection/selection002.html | Yamaha Acoustic or Digital; hammer/strings/soundboard versus electronic tone generation; digital hammer keyboard alone is not an acoustic piano. |
| steinway-guide | handbook | https://eu.steinway.com/fileadmin/user_upload/Piano_Buyers_Guide_2025.pdf | Steinway Piano Buyers Guide 2025; complete publisher PDF pp6–9 whole mechanical construction and pp11–13 route/finish countercontext; p15 process examples; pp18–19 service/cleaning/moving and electronic-player countercontext. Independent qualitative corroboration; no mixed Yamaha/Steinway factory BOM or quantitative thresholds. |
| ilcd-allocation | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | ILCD General Guide Detailed Guidance first edition March 2010 §§7.9.2–7.9.3 pp255–272: attributional applicability; subdivision/virtual subdivision; exchange-specific determining physical causality; true residual common-process-gate market value; waste and product-function limitations. No default recycling formula or conformance claim. |
